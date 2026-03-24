import { Metadata } from 'next'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité - Deep-Technologies',
  description: 'Notre politique de confidentialité et de protection des données.',
}

export default function ConfidentialitePage() {
  return (
    <main>
      <Header />
      <div className="py-24 sm:py-32 bg-background min-h-screen">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl mb-8">Politique de Confidentialité</h1>
            <div className="prose prose-sm sm:prose-base dark:prose-invert text-muted-foreground">
              <p>
                Chez Deep-Technologies, nous accordons une grande importance à la protection de vos données personnelles.
                Cette politique de confidentialité vise à vous informer sur la manière dont nous collectons, utilisons et protégeons vos informations.
              </p>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Collecte des données</h2>
              <p>
                Nous pouvons recueillir des informations personnelles telles que votre nom, adresse email, et numéro de téléphone lorsque vous nous contactez via notre site.
              </p>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Utilisation des données</h2>
              <p>
                Les informations que nous collectons sont utilisées pour répondre à vos demandes, améliorer notre service client, et vous tenir informé de nos activités si vous y avez consenti.
              </p>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Protection de vos données</h2>
              <p>
                Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles contre tout accès non autorisé, altération, divulgation ou destruction.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
