export interface Project {
  slug: string
  title: string
  category: string
  description: string
  tech: string[]
  image: string
  client?: string
  duration?: string
  year?: string
  challenge: string
  solution: string
  results: string[]
  gallery?: string[]
}

export const projects: Project[] = [
  {
    slug: "team-project",
    title: "Application de Gestion : Team Project",
    category: "Web & Apps",
    description: "Plateforme web complète permettant le suivi des tâches dans une structure.",
    tech: ["React", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop",
    client: "Confidentiel",
    duration: "3 mois",
    year: "2023",
    challenge: "L'entreprise cliente avait du mal à coordonner ses équipes sur plusieurs projets simultanés. Les tâches étaient gérées via des fichiers Excel partagés, causant des conflits de versions et une perte de productivité significative.",
    solution: "Nous avons développé une plateforme web sur mesure permettant la gestion des tâches en temps réel, avec des tableaux Kanban, un système de notifications, des rapports d'avancement automatisés et une gestion fine des droits d'accès par rôle.",
    results: [
      "Réduction de 40% du temps de coordination entre équipes",
      "Visibilité en temps réel sur l'avancement de tous les projets",
      "Adoption par 100% des collaborateurs en moins de 2 semaines",
      "Tableau de bord de reporting automatisé pour la direction",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=500&fit=crop",
    ],
  },
  {
    slug: "securite-reseau-data-quality",
    title: "Sécurité réseau - Data-Quality",
    category: "Infogérance",
    description: "Audit de sécurité complet, mise en place de pare-feu et plan de continuité d'activité.",
    tech: ["Fortinet", "Palo Alto", "SIEM"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop",
    client: "Data-Quality",
    duration: "2 mois",
    year: "2023",
    challenge: "Data-Quality faisait face à des vulnérabilités critiques dans son infrastructure réseau. Plusieurs tentatives d'intrusion avaient été détectées et l'entreprise n'avait aucun plan de reprise d'activité en cas d'incident majeur.",
    solution: "Réalisation d'un audit de sécurité complet, déploiement de pare-feux Fortinet et Palo Alto, mise en place d'un SIEM pour la surveillance en temps réel, et élaboration d'un plan de continuité d'activité (PCA) documenté et testé.",
    results: [
      "Zéro incident de sécurité depuis le déploiement",
      "Temps de détection des menaces réduit à moins de 5 minutes",
      "Plan de reprise d'activité testé et validé",
      "Conformité aux normes de sécurité internationales",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    ],
  },
  {
    slug: "centre-appels-orange-bf",
    title: "Centre d'Appels - Orange BF",
    category: "Call Center",
    description: "Déploiement d'une solution de centre d'appel multi-canal avec CRM intégré.",
    tech: ["Asterisk", "VoIP", "CRM"],
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&h=600&fit=crop",
    client: "Orange Burkina Faso",
    duration: "4 mois",
    year: "2022",
    challenge: "Orange BF souhaitait moderniser son centre d'appels pour gérer un volume croissant de demandes clients sur plusieurs canaux (téléphone, email, chat) tout en améliorant la satisfaction client et la productivité des agents.",
    solution: "Déploiement d'une solution Asterisk VoIP multi-canal avec CRM intégré, formation des agents, mise en place de scripts d'appel intelligents, tableaux de bord de supervision en temps réel et système de reporting avancé.",
    results: [
      "Capacité de traitement augmentée de 60%",
      "Taux de satisfaction client passé de 72% à 91%",
      "Temps de traitement moyen réduit de 35%",
      "50 agents formés et opérationnels en 3 semaines",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=500&fit=crop",
    ],
  },
  {
    slug: "portail-ecommerce-bnda",
    title: "Portail E-commerce BNDA",
    category: "Web & Apps",
    description: "Plateforme e-commerce complète avec paiement en ligne et gestion des stocks.",
    tech: ["React", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    client: "BNDA",
    duration: "5 mois",
    year: "2023",
    challenge: "La BNDA souhaitait digitaliser ses ventes et offrir à ses clients une expérience d'achat en ligne sécurisée, avec intégration des moyens de paiement locaux (Mobile Money) et une gestion des stocks en temps réel.",
    solution: "Développement d'une plateforme e-commerce complète avec catalogue produits, panier, paiement sécurisé via Mobile Money (Orange, Moov, Coris), gestion des stocks, tableau de bord administrateur et notifications automatiques.",
    results: [
      "Lancement réussi avec 500+ produits en ligne",
      "Intégration de 3 opérateurs Mobile Money",
      "Taux de conversion de 4.2% dès le premier mois",
      "Gestion des stocks en temps réel pour 3 entrepôts",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    ],
  },
  {
    slug: "application-rh-coris-bank",
    title: "Application RH - Coris Bank",
    category: "Applications",
    description: "Application de gestion des ressources humaines avec suivi des congés et évaluations.",
    tech: ["React Native", "Firebase", "Node.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
    client: "Coris Bank International",
    duration: "4 mois",
    year: "2023",
    challenge: "Coris Bank gérait ses ressources humaines via des processus manuels et des fichiers dispersés. La gestion des congés, des évaluations et des fiches de paie était chronophage et source d'erreurs fréquentes.",
    solution: "Développement d'une application mobile et web RH complète : gestion des congés avec workflow d'approbation, évaluations annuelles digitalisées, suivi des présences, génération automatique des fiches de paie et portail employé.",
    results: [
      "Traitement des demandes de congés réduit de 5 jours à 24h",
      "100% des évaluations annuelles digitalisées",
      "Économie de 120h/mois sur les tâches administratives RH",
      "Déployé pour 300+ employés dans 8 agences",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    ],
  },
  {
    slug: "infrastructure-cloud-onatel",
    title: "Infrastructure Cloud - ONATEL",
    category: "Infogérance",
    description: "Migration complète de l'infrastructure vers le cloud avec haute disponibilité.",
    tech: ["AWS", "Docker", "Terraform"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
    client: "ONATEL",
    duration: "6 mois",
    year: "2022",
    challenge: "ONATEL opérait sur une infrastructure on-premise vieillissante avec des pannes fréquentes et des coûts de maintenance élevés. La scalabilité était limitée et les temps de déploiement trop longs pour répondre aux besoins métier.",
    solution: "Migration progressive vers AWS avec architecture microservices containerisée (Docker), infrastructure as code via Terraform, mise en place de pipelines CI/CD, monitoring avancé et plan de reprise d'activité automatisé.",
    results: [
      "Disponibilité passée de 94% à 99.9%",
      "Coûts d'infrastructure réduits de 35%",
      "Temps de déploiement réduit de 2 semaines à 2 heures",
      "Scalabilité automatique selon la charge",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    ],
  },
  {
    slug: "site-vitrine-bigger-agency",
    title: "Site vitrine - Bigger Agency",
    category: "Web & Apps",
    description: "Site web premium avec animations avancées et SEO optimisé pour une agence créative.",
    tech: ["Next.js", "Tailwind"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=600&fit=crop",
    client: "Bigger Agency",
    duration: "6 semaines",
    year: "2024",
    challenge: "Bigger Agency avait besoin d'un site vitrine qui reflète son positionnement premium et créatif, avec des animations sophistiquées, un chargement rapide et une optimisation SEO pour se démarquer dans un marché compétitif.",
    solution: "Conception et développement d'un site Next.js avec animations Framer Motion, design system sur mesure, optimisation des performances (score Lighthouse 98+), SEO technique avancé et intégration d'un CMS headless pour la gestion du contenu.",
    results: [
      "Score Lighthouse 98/100 en performance",
      "Positionnement page 1 Google en 3 mois",
      "Taux de rebond réduit de 65% à 28%",
      "Augmentation de 120% des demandes de contact",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    ],
  },
  {
    slug: "app-suivi-logistique",
    title: "App de suivi logistique",
    category: "Applications",
    description: "Application mobile de suivi des livraisons en temps réel avec géolocalisation.",
    tech: ["Flutter", "Firebase", "Maps"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=600&fit=crop",
    client: "Confidentiel",
    duration: "3 mois",
    year: "2024",
    challenge: "Une entreprise de logistique perdait du temps et de l'argent à cause d'un manque de visibilité sur ses livraisons. Les clients appelaient constamment pour connaître le statut de leurs colis et les chauffeurs n'avaient pas d'outil adapté.",
    solution: "Développement d'une application Flutter cross-platform (iOS/Android) avec géolocalisation en temps réel, notifications push automatiques aux clients, interface chauffeur simplifiée, tableau de bord dispatcher et historique des livraisons.",
    results: [
      "Appels clients réduits de 70% grâce aux notifications automatiques",
      "Optimisation des tournées : économie de 25% sur le carburant",
      "Taux de livraison à l'heure amélioré de 58% à 87%",
      "Application adoptée par 45 chauffeurs dès le lancement",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&h=500&fit=crop",
    ],
  },
  {
    slug: "plateforme-elearning",
    title: "Plateforme e-learning",
    category: "Web & Apps",
    description: "Plateforme de formation en ligne avec vidéos et quiz interactifs.",
    tech: ["React", "Django", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&h=600&fit=crop",
    client: "Confidentiel",
    duration: "4 mois",
    year: "2024",
    challenge: "Un organisme de formation souhaitait digitaliser son offre pour toucher un public plus large en Afrique de l'Ouest, avec des contraintes de connectivité (mode offline) et la nécessité de certifier les apprenants à distance.",
    solution: "Développement d'une plateforme e-learning complète avec lecteur vidéo optimisé, quiz interactifs, mode offline, système de certification automatique, tableau de bord formateur et analytics d'apprentissage détaillés.",
    results: [
      "500+ apprenants inscrits dans les 2 premiers mois",
      "Taux de complétion des cours de 78% (moyenne secteur : 45%)",
      "Disponible dans 5 pays d'Afrique de l'Ouest",
      "Mode offline fonctionnel pour les zones à faible connectivité",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop",
    ],
  },
]
