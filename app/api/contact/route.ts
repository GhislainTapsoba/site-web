import { Resend } from "resend"
import { NextResponse } from "next/server"

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Rate limiting simple en mémoire (reset au redémarrage)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>()
const RATE_LIMIT = 3       // max 3 envois
const RATE_WINDOW = 60000  // par minute

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now - entry.timestamp > RATE_WINDOW) {
    rateLimitMap.set(ip, { count: 1, timestamp: now })
    return false
  }

  if (entry.count >= RATE_LIMIT) return true

  entry.count++
  return false
}

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown"

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Trop de tentatives. Veuillez patienter une minute." },
        { status: 429 }
      )
    }

    const { nom, email, sujet, message } = await req.json()

    // Validation
    if (!nom?.trim() || !email?.trim() || !sujet?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 })
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 })
    }

    if (message.trim().length < 10) {
      return NextResponse.json({ error: "Le message est trop court." }, { status: 400 })
    }

    // Log
    console.log("[Contact]", {
      nom: nom.trim(),
      email: email.trim(),
      sujet: sujet.trim(),
      ip,
      date: new Date().toISOString(),
    })

    await resend.emails.send({
      from: "Deep Technologies <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL ?? "info@deep-technologies.com",
      replyTo: email.trim(),
      subject: `[Contact] ${sujet.trim()}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <div style="background: #F97316; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 20px;">Nouveau message reçu</h2>
            <p style="color: rgba(255,255,255,0.85); margin: 4px 0 0; font-size: 14px;">Via le formulaire de contact Deep Technologies</p>
          </div>

          <div style="background: #fff; padding: 32px; border: 1px solid #eee; border-top: none;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 10px 12px; font-weight: 600; color: #555; width: 100px; background: #f9f9f9; border-radius: 6px;">Nom</td>
                <td style="padding: 10px 12px;">${nom.trim()}</td>
              </tr>
              <tr>
                <td style="padding: 10px 12px; font-weight: 600; color: #555; background: #f9f9f9; border-radius: 6px;">Email</td>
                <td style="padding: 10px 12px;"><a href="mailto:${email.trim()}" style="color: #F97316;">${email.trim()}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 12px; font-weight: 600; color: #555; background: #f9f9f9; border-radius: 6px;">Sujet</td>
                <td style="padding: 10px 12px;">${sujet.trim()}</td>
              </tr>
            </table>

            <div style="background: #f9f9f9; border-left: 4px solid #F97316; padding: 16px 20px; border-radius: 0 8px 8px 0;">
              <p style="font-weight: 600; color: #555; margin: 0 0 10px;">Message</p>
              <p style="margin: 0; line-height: 1.7; white-space: pre-wrap;">${message.trim()}</p>
            </div>

            <p style="margin-top: 24px; font-size: 13px; color: #888;">
              💡 Pour répondre directement à ${nom.trim()}, cliquez sur "Répondre" — l'email est pré-rempli.
            </p>
          </div>

          <div style="background: #f4f4f4; padding: 20px 32px; border-radius: 0 0 12px 12px; border: 1px solid #eee; border-top: none;">
            <p style="margin: 0; font-size: 12px; color: #888; line-height: 1.8;">
              <strong style="color: #333;">Deep Technologies</strong><br/>
              Ouagadougou — Secteur 29, Burkina Faso<br/>
              +226 07 26 60 60 · info@deep-technologies.com
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error("[Contact] Erreur envoi mail:", error)
    return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 })
  }
}
