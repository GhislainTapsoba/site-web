

# Deep-Technologies — Site Vitrine Premium

## Vue d'ensemble
Refonte complète du site vitrine de Deep-Technologies en un site world-class avec design dark premium, animations fluides, glassmorphism, et micro-interactions — inspiré de Vercel/Linear/Stripe.

## Identité visuelle
- **Dark mode par défaut** avec toggle light mode
- Palette : fond `#0a0a0f`, accents bleu `#2563eb` → cyan `#06b6d4`, texte `#f8fafc`
- Glassmorphism (backdrop-blur, bg-white/5, border-white/10)
- Typographie Inter avec gradient text sur les mots-clés
- Animations CSS au scroll (fadeInUp, stagger, counters)

## Sections du site (page unique)

### 1. Navbar
- Sticky glassmorphism, opacité progressive au scroll
- Logo "Deep-Technologies" + liens (Accueil, Services, À propos, Contact)
- CTA "Nous Contacter" gradient + toggle dark/light
- Menu hamburger mobile avec sheet shadcn

### 2. Hero
- Plein écran, mesh gradient animé en background
- Badge "🚀 Société IT de référence en Afrique de l'Ouest"
- H1 massive avec mot "style" en gradient animé
- 2 CTA : "Découvrir nos services" + "Nous contacter"
- Mini-stats flottantes (10+ ans, 50+ clients, 100+ projets)
- Scroll indicator animé

### 3. Services (grid 2×2)
- 4 cards glassmorphism : Outsourcing, Infogérance, Web & Apps, Call Center
- Icônes Lucide, hover avec border gradient et glow
- Animation fadeInUp staggered au scroll

### 4. Stats animées
- 4 compteurs animés (Intersection Observer) : 10+ ans, 50+ clients, 100+ projets, 24/7
- Fond gradient bleu/cyan subtil

### 5. À propos
- 2 colonnes : texte + visuel décoratif
- Valeurs avec checkmarks : Transparence, Professionnalisme, Réactivité, Sur-mesure

### 6. Pourquoi nous choisir
- Grid 3×2 de feature cards avec icônes

### 7. Partenaires
- Carousel Embla auto-scroll infini, logos grayscale → couleur au hover

### 8. Contact
- 2 colonnes : infos (adresse, email, téléphone, réseaux) + formulaire
- Formulaire react-hook-form + zod (Nom, Email, Téléphone, Sujet, Message)
- Toast succès/erreur avec sonner

### 9. Footer
- 4 colonnes, séparation gradient, réseaux sociaux, copyright

## Responsive
- Mobile-first, tous les grids s'adaptent (1 col mobile → multi-col desktop)

## Technique
- Composant `SectionWrapper` avec Intersection Observer pour animations au scroll
- Composant `GradientText` réutilisable
- Composant `AnimatedCounter` pour les stats
- Background animé CSS (blobs/mesh gradient)
- Custom scrollbar stylisée
- Google Font Inter via CSS

