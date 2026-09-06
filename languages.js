// Language translations
const translations = {
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.shop': 'Shop',
    'nav.about': 'Über Mich',
    'nav.contact': 'Kontakt',
    
    // Homepage
    'hero.title': 'Matthew Simon',
    'hero.location': 'Bern, Schweiz',
    'hero.explore': 'Kollektion erkunden',
    'hero.learnmore': 'Mehr erfahren',
    
    // Featured Section
    'featured.badge': 'Vorgestellt',
    'featured.discover': 'Kuratierte Schätze entdecken',
    'featured.story': 'Einer der größten venezianischen Glasbläser. Dieses handgemalte Murano-Meisterwerk repräsentiert den Höhepunkt der venezianischen Glaskunst der 1920er Jahre. Museumsqualität. Die Art von Stück, nach dem ernsthaft sammelnd Sammler suchen.',
    'featured.price': 'CHF 2.400',
    'featured.inquire': 'Nach diesem anfragen',
    'featured.similar': 'Ähnliche ansehen',
    
    // Why Section
    'why.title': 'Warum Matthew',
    'why.expertise': '40 Jahre Erfahrung',
    'why.expertise.desc': 'Vier Jahrzehnte authentifizierte Stücke für Sammler weltweit sourcing',
    'why.stuker': 'Stuker Experte',
    'why.stuker.desc': 'Leitexperte für angewandte Kunst bei Berns prestigeträchtigem Auktionshaus',
    'why.authenticated': 'Authentifiziert',
    'why.authenticated.desc': 'Jedes Stück persönlich bewertet auf Authentizität, Zustand und Provenienz',
    
    // Categories
    'categories.title': 'Nach Kategorie durchsuchen',
    'categories.furniture': 'Möbel',
    'categories.glass': 'Glas',
    'categories.lighting': 'Leuchten',
    'categories.objects': 'Objekte',
    
    // Services
    'services.title': 'Dienstleistungen',
    'services.consignment': 'Kommissions-Verkauf',
    'services.consignment.desc': 'Haben Sie ein Stück, das Sie verkaufen möchten? Matthew bietet kommissionsbasierten Verkauf an, um Ihre Schätze mit ernsthaften Sammlern zu verbinden.',
    'services.sourcing': 'Kommissionsbasiertes Sourcing',
    'services.sourcing.desc': 'Suchen Sie nach bestimmten Stücken? Matthew sourced aktiv authentifizierte Stücke für Sammler und Designer.',
    
    // CTA Section
    'cta.title': 'Fragen zu einem Stück?',
    'cta.subtitle': 'Haben Sie Fragen zu Stücken in der Sammlung oder benötigen Sie Hilfe bei der Suche nach etwas Spezifischem? Matthew ist hier, um zu helfen.',
    'cta.button': 'Kontakt aufnehmen',
    
    // Footer
    'footer.contact': 'Kontakt',
    'footer.instagram': 'Instagram',
    'footer.admin': 'Admin',
    'footer.copyright': '© 2026 Matthew Simon. Alle Rechte vorbehalten.',
    
    // Shop Page
    'shop.title': 'Kollektion',
    'shop.sort.featured': 'Vorgestellt',
    'shop.sort.price-high': 'Preis: Hoch bis Niedrig',
    'shop.sort.price-low': 'Preis: Niedrig bis Hoch',
    'shop.sort.era-new': 'Ära: Neueste zuerst',
    'shop.search': 'Produkte durchsuchen...',
    'shop.inquire': 'Anfragen',
    'shop.empty': 'Keine Produkte gefunden. Versuchen Sie, Ihre Filter anzupassen.',
    
    // About Page
    'about.title': 'Über Matthew',
    'about.subtitle': '40 Jahre authentifizierte Design-Expertise',
    
    'about.experience': 'Erfahrung',
    'about.cred.40years': '40 Jahre',
    'about.cred.40years.desc': 'Authentifizierte Stücke für Sammler weltweit sourcing',
    'about.cred.stuker': 'Stuker Experte',
    'about.cred.stuker.desc': 'Leitexperte für angewandte Kunst bei Berns renommiertem Auktionshaus',
    'about.cred.master': 'Meister Handwerker',
    'about.cred.master.desc': 'Ausgebildet als Vergolder und Restaurator mit tiefem Verständnis von Materialien und Techniken',
    'about.cred.auth': 'Authentifiziert',
    'about.cred.auth.desc': 'Jedes Stück persönlich bewertet auf Authentizität, Zustand und Provenienz',
    
    // Contact Page
    'contact.title': 'Kontakt',
    'contact.subtitle': 'Nach Stücken fragen oder Ihre Sammlung besprechen',
    'contact.form.name': 'Ihr Name',
    'contact.form.email': 'E-Mail-Adresse',
    'contact.form.subject': 'Betreff',
    'contact.form.subject.product': 'Anfrage zu einem Stück',
    'contact.form.subject.consignment': 'Kommissions-Verkauf',
    'contact.form.subject.sourcing': 'Kommissionsbasiertes Sourcing',
    'contact.form.subject.other': 'Sonstiges',
    'contact.form.message': 'Nachricht',
    'contact.form.send': 'Anfrage senden',
    'contact.form.note': 'Matthew antwortet normalerweise innerhalb von 24 Stunden.',
    'contact.inquiry.message': 'Ich interessiere mich für {product}. Können Sie mir bitte mehr Details geben?',
    'contact.info.email': 'E-Mail',
    'contact.info.location': 'Standort',
    'contact.info.social': 'Sozial',
    'contact.info.follow': 'Folgen Sie für Updates',
    // v4 keys - Archive, Draft, New categories
    'categories.sonstiges.desc': 'Verschiedene Stücke',
    'categories.archive.label': 'Archiv',
    'categories.archive.desc': 'Verkaufte Stücke',
    'archive.title': 'Verkaufte Stücke',
    'archive.subtitle': 'Eine Auswahl bereits verkaufter Objekte aus unserer Sammlung',
    'archive.empty': 'Noch keine verkauften Stücke',
    'archive.link': 'Archiv (Verkauft)',
    'nav.archive': 'Archiv',
    'status.sold': 'VERKAUFT',
    'status.sold_on': 'Verkauft am',
    'status.draft': 'ENTWURF',
    'status.inquire_similar': 'Ähnliches anfragen',
    'shop.no_products': 'Keine Produkte in dieser Kategorie',

    // v5 keys - Shop tabs & mobile nav
    'shop.tab.available': 'Verfügbar',
    'shop.tab.archive': 'Verkauft (Archiv)',
    'nav.about.short': 'Über',

    // v6 keys - Contact info completions
    'contact.info.heading': 'Kontaktinformationen',
    'contact.info.phone': 'Telefon',
    'contact.info.location.value': 'Bern, Schweiz',
    'contact.info.whatsapp': '💬 <strong>WhatsApp verfügbar</strong> unter dieser Nummer',
    'contact.info.follow.desc': 'Neue Erwerbungen und Einblicke für Sammler werden regelmäßig auf Instagram geteilt.',

    // v7 keys - About page enhancements
    'about.photo.label': 'Kuratierte Sammlung',
    'about.stat.years': 'Jahre',
    'about.stat.pieces': 'Stücke',
    'about.stat.languages': 'Sprachen',

    // v8 keys - About pullquote
    'about.pullquote': '„Jedes Stück wird persönlich auf Authentizität, Zustand und Provenienz geprüft."',

    // v9 keys - Kunst (Fine Art) category
    'categories.kunst.desc': 'Gemälde, Skulpturen & Grafik',

    // v10 keys - Why Matthew refined
    'why.eyebrow': 'Expertise',

    // v11 keys - Archive category tile
    'categories.archive.name': 'Archiv',

    // v12 - About rewrite, Why Matthew, shop subtitle
    'about.story.heading': '40 Jahre kuratiertes, authentifiziertes Design & Antiquitäten',
    'about.story.p1': 'Im Alter von 30 Jahren wechselte ich vom Beruf des Vergolders und Restaurators zum Galeristen und eröffnete 1986 meine Galerie „die Zeit" in Bern.',
    'about.story.p2': 'Ab den 2000er-Jahren arbeitete ich zusätzlich als Experte und Berater für verschiedene Auktionshäuser, unter anderem für das renommierte Auktionshaus Stuker.',
    'about.story.p3': 'Heute konzentriere ich mich hauptsächlich auf seltene Objekte der angewandten Kunst des 20. Jahrhunderts, mit einem besonderen Schwerpunkt auf Murano-Glas.',
    'about.story.p4': 'Anhand der von mir angebotenen Objekte können Sie sehen, welche Themen und Stilrichtungen zu meinen besonderen Steckenpferden gehören.',
    'about.story.p5': 'Ob Sie ein sorgfältig kuratiertes Zuhause gestalten, eine Sammlung aufbauen oder ein Sachverständigengutachten für einen Nachlass benötigen – ich setze meine Erfahrung und mein Wissen gerne ein, um Sie bestmöglich zu unterstützen.',
    'about.based': 'Basierend in Bern',
    'why.master': 'Meister Handwerker',
    'why.master.desc': 'Ausgebildet als Vergolder und Restaurator mit tiefem Verständnis von Materialien und Techniken.',

    // v13 - category rename + admin fields
    'categories.kunst.label': 'Gemälde/Grafik',
    'categories.keramik.label': 'Keramik',
    'categories.fundstuecke.label': 'Fundstücke',
    'categories.sonstiges.label': 'Keramik',
    'admin.era': 'Epoche / Jahr',
    'admin.artist': 'Künstler / Hersteller',

    // v14 - search, sort, shipping
    'shop.search.placeholder': 'Suchen: Murano, Barovier, 1950er …',
    'shop.sort.recent': 'Neu hinzugefügt',
    'shop.sort.era-old': 'Epoche: Älteste zuerst',
    'detail.shipping': 'Abholung in Bern, Versand in der Schweiz und international auf Anfrage.',
    'shipping.title': 'Versand & Abholung',
    'shipping.pickup': 'Abholung in Bern ist jederzeit nach Vereinbarung möglich.',
    'shipping.domestic': 'Versand innerhalb der Schweiz organisieren wir gerne für Sie.',
    'shipping.intl': 'Internationaler Versand ist auf Anfrage möglich – wir finden für jedes Stück eine passende Lösung.',
    'shipping.tax': 'Bei internationalem Versand können Zoll- und Einfuhrgebühren des Ziellandes anfallen.',

    // v15 - filter labels + wording fixes
    'shop.subtitle': 'Kuratierte und authentifizierte Stücke',
    'shop.filter.all': 'Alle Kategorien',
    'shop.filter.category': 'Kategorie',
    'shop.filter.sort': 'Sortieren',
    'hero.subtitle': '40 Jahre | Authentifiziertes europäisches Design & Antiquitäten',

    // v16 - language gap fill + Accessoires/Jewellery
    'categories.furniture.label': 'Möbel',
    'categories.furniture.desc': 'Antike & Design-Möbel',
    'categories.glass.label': 'Glas',
    'categories.glass.desc': 'Murano & europäische Glaskunst',
    'categories.lighting.label': 'Leuchten',
    'categories.lighting.desc': 'Historische Beleuchtung',
    'categories.objects.label': 'Objekte',
    'categories.objects.desc': 'Skulpturen & Kunstobjekte',
    'categories.count': 'Stücke',
    'detail.back': '← Zurück zum Shop',
    'detail.inquire': '✉ Anfrage senden',
    'detail.whatsapp': '💬 WhatsApp',
    'detail.contact': 'Kontakt',
    'detail.not_found': 'Produkt nicht gefunden',
    'detail.description_note': 'Die ausführliche Produktbeschreibung liegt im deutschen Original vor.',
    'detail.loading': 'Produkt wird geladen …',
    'featured.subtitle': 'Ausgewählte Höhepunkte der Sammlung',
    'featured.empty': 'Noch keine ausgewählten Stücke. Über die Admin-Seite können Sie Stücke hervorheben.',
    'featured.view_details': 'Details ansehen',
    'featured.view_all': 'Alle ansehen →',
    'categories.accessoires.label': 'Accessoires/Schmuck',
    'categories.accessoires.desc': 'Schmuck & Accessoires',

  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.shop': 'Boutique',
    'nav.about': 'À Propos de Moi',
    'nav.contact': 'Contact',
    
    // Homepage
    'hero.title': 'Matthew Simon',
    'hero.location': 'Berne, Suisse',
    'hero.explore': 'Explorer la collection',
    'hero.learnmore': 'En savoir plus',
    
    // Featured Section
    'featured.badge': 'En Vedette',
    'featured.discover': 'Découvrez les trésors curés',
    'featured.story': 'L\'un des plus grands verriers vénitiens. Ce chef-d\'œuvre Murano peint à la main représente l\'apothéose de l\'art du verre vénitien du 20e siècle. Qualité muséale. Le type de pièce que les collectionneurs sérieux recherchent.',
    'featured.price': 'CHF 2.400',
    'featured.inquire': 'Nous renseigner sur ce sujet',
    'featured.similar': 'Voir des pièces similaires',
    
    // Why Section
    'why.title': 'Pourquoi Matthew',
    'why.expertise': '40 ans d\'expertise',
    'why.expertise.desc': 'Quatre décennies de pièces authentifiées sourcing pour les collectionneurs du monde entier',
    'why.stuker': 'Expert Stuker',
    'why.stuker.desc': 'Expert principal en art appliqué à la prestigieuse maison de ventes aux enchères de Berne',
    'why.authenticated': 'Authentifié',
    'why.authenticated.desc': 'Chaque pièce évaluée personnellement pour l\'authenticité, la condition et la provenance',
    
    // Categories
    'categories.title': 'Parcourir par catégorie',
    'categories.furniture': 'Mobilier',
    'categories.glass': 'Verre',
    'categories.lighting': 'Éclairage',
    'categories.objects': 'Objets',
    
    // Services
    'services.title': 'Services',
    'services.consignment': 'Vente en Consignation',
    'services.consignment.desc': 'Avez-vous une pièce que vous aimeriez vendre? Matthew offre une vente en consignation basée sur commission pour connecter vos trésors avec des collectionneurs sérieux.',
    'services.sourcing': 'Sourcing basé sur la commission',
    'services.sourcing.desc': 'Vous cherchez des pièces spécifiques? Matthew source activement des pièces authentifiées pour les collectionneurs et les designers.',
    
    // CTA Section
    'cta.title': 'Des Questions sur une Pièce?',
    'cta.subtitle': 'Avez-vous des questions sur les pièces de la collection ou besoin d\'aide pour trouver quelque chose de spécifique? Matthew est là pour vous aider.',
    'cta.button': 'Nous Contacter',
    
    // Footer
    'footer.contact': 'Contact',
    'footer.admin': 'Admin',
    'footer.copyright': '© 2026 Matthew Simon. Tous droits réservés.',
    
    // Shop Page
    'shop.title': 'Collection',
    'shop.sort.featured': 'En vedette',
    'shop.sort.price-high': 'Prix: Élevé à Bas',
    'shop.sort.price-low': 'Prix: Bas à Élevé',
    'shop.sort.era-new': 'Ère: Plus récente d\'abord',
    'shop.search': 'Rechercher des produits...',
    'shop.inquire': 'Nous renseigner',
    'shop.empty': 'Aucun produit trouvé. Essayez d\'ajuster vos filtres.',
    
    // About Page
    'about.title': 'À propos de Matthew',
    'about.subtitle': '40 ans d\'expertise en design authentifié',
    
    'about.experience': 'Expérience',
    'about.cred.40years': '40 ans',
    'about.cred.40years.desc': 'Sourcing de pièces authentifiées pour les collectionneurs du monde entier',
    'about.cred.stuker': 'Expert Stuker',
    'about.cred.stuker.desc': 'Expert principal en art appliqué à la prestigieuse maison de ventes aux enchères de Berne',
    'about.cred.master': 'Artisan maître',
    'about.cred.master.desc': 'Formé comme doreur et restaurateur avec une compréhension approfondie des matériaux et des techniques',
    'about.cred.auth': 'Authentifié',
    'about.cred.auth.desc': 'Chaque pièce évaluée personnellement pour l\'authenticité, la condition et la provenance',
    
    // Contact Page
    'contact.title': 'Nous renseigner',
    'contact.subtitle': 'Posez des questions sur les pièces ou discutez de votre collection',
    'contact.form.name': 'Votre nom',
    'contact.form.email': 'Adresse e-mail',
    'contact.form.subject': 'Sujet',
    'contact.form.subject.product': 'Demande de renseignements sur une pièce',
    'contact.form.subject.consignment': 'Vente en Consignation',
    'contact.form.subject.sourcing': 'Sourcing basé sur la commission',
    'contact.form.subject.other': 'Autre',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer une demande',
    'contact.form.note': 'Matthew répond généralement dans les 24 heures.',
    'contact.inquiry.message': 'Je suis intéressé par {product}. Pourriez-vous me fournir plus de détails?',
    'contact.info.email': 'E-mail',
    'contact.info.location': 'Localisation',
    'contact.info.social': 'Social',
    'contact.info.follow': 'Suivre pour les mises à jour',
    // Added v3 keys
    'categories.furniture.label': 'Mobilier',
    'categories.furniture.desc': 'Meubles anciens & design',
    'categories.glass.label': 'Verre',
    'categories.glass.desc': 'Verre de Murano & art européen',
    'categories.lighting.label': 'Luminaires',
    'categories.lighting.desc': 'Éclairage historique',
    'categories.objects.label': 'Objets',
    'categories.objects.desc': 'Sculptures & objets d\'art',
    'categories.count': 'pièces',
    'detail.back': '← Retour à la boutique',
    'detail.inquire': '✉ Envoyer une demande',
    'detail.whatsapp': '💬 WhatsApp',
    'detail.contact': 'Contact',
    'detail.not_found': 'Produit non trouvé',
    'detail.description_note': 'La description détaillée du produit est dans l\'allemand d\'origine. Veuillez nous contacter directement pour des traductions.',
    'detail.loading': 'Chargement du produit...',
    'featured.subtitle': 'Sélection curated de la collection',
    'featured.empty': 'Aucune pièce en vedette pour le moment.',
    'featured.view_details': 'Voir les détails',
    'featured.view_all': 'Voir tout →',

    // v4 keys - Archive, Draft, New categories
    'categories.sonstiges.desc': 'Pièces variées',
    'categories.archive.label': 'Archive',
    'categories.archive.desc': 'Pièces vendues',
    'archive.title': 'Pièces vendues',
    'archive.subtitle': 'Une sélection d\'objets déjà vendus de notre collection',
    'archive.empty': 'Aucune pièce vendue pour le moment',
    'archive.link': 'Archive (Vendus)',
    'nav.archive': 'Archive',
    'status.sold': 'VENDU',
    'status.sold_on': 'Vendu le',
    'status.draft': 'BROUILLON',
    'status.inquire_similar': 'Demander similaire',
    'shop.no_products': 'Aucun produit dans cette catégorie',

    // v5 keys - Shop tabs & mobile nav
    'shop.tab.available': 'Disponibles',
    'shop.tab.archive': 'Vendus (Archive)',
    'nav.about.short': 'À propos',

    // v6 keys - Contact info completions
    'contact.info.heading': 'Coordonnées',
    'contact.info.phone': 'Téléphone',
    'contact.info.location.value': 'Berne, Suisse',
    'contact.info.whatsapp': '💬 <strong>WhatsApp disponible</strong> sur ce numéro',
    'contact.info.follow.desc': 'Les nouvelles acquisitions et les informations pour les collectionneurs sont partagées régulièrement sur Instagram.',

    // v7 keys - About page enhancements
    'about.photo.label': 'Collection Choisie',
    'about.stat.years': 'Années',
    'about.stat.pieces': 'Pièces',
    'about.stat.languages': 'Langues',

    // v8 keys - About pullquote
    'about.pullquote': '« Chaque pièce est personnellement évaluée pour son authenticité, son état et sa provenance. »',

    // v9 keys - Kunst (Fine Art) category
    'categories.kunst.desc': 'Peintures, Sculptures & Estampes',

    // v10 keys - Why Matthew refined
    'why.eyebrow': 'Expertise',

    // v11 keys - Archive category tile
    'categories.archive.name': 'Archive',

    // v12 - About rewrite, Why Matthew, shop subtitle
    'about.story.heading': '40 ans de design et d\'antiquités sélectionnés et authentifiés',
    'about.story.p1': 'À l\'âge de 30 ans, j\'ai quitté mon métier de doreur et restaurateur pour devenir galeriste et j\'ai ouvert ma galerie « die Zeit » à Berne en 1986.',
    'about.story.p2': 'À partir des années 2000, j\'ai également travaillé comme expert et conseiller pour différentes maisons de vente aux enchères, notamment pour la renommée maison Stuker.',
    'about.story.p3': 'Aujourd\'hui, je me concentre principalement sur des objets rares des arts appliqués du XXe siècle, avec un intérêt particulier pour le verre de Murano.',
    'about.story.p4': 'Les objets que je propose vous montreront quels thèmes et quels styles comptent parmi mes passions.',
    'about.story.p5': 'Que vous aménagiez un intérieur soigneusement composé, que vous constituiez une collection ou que vous ayez besoin d\'une expertise pour une succession — je mets volontiers mon expérience et mes connaissances à votre service.',
    'about.based': 'Basé à Berne',
    'why.master': 'Maître Artisan',
    'why.master.desc': 'Formé comme doreur et restaurateur, avec une connaissance approfondie des matériaux et des techniques.',

    // v13 - category rename + admin fields
    'categories.kunst.label': 'Peintures & Estampes',
    'categories.keramik.label': 'Céramique',
    'categories.fundstuecke.label': 'Trouvailles',
    'categories.sonstiges.label': 'Céramique',
    'admin.era': 'Époque / Année',
    'admin.artist': 'Artiste / Fabricant',

    // v14 - search, sort, shipping
    'shop.search.placeholder': 'Rechercher : Murano, Barovier, années 1950 …',
    'shop.sort.recent': 'Ajouts récents',
    'shop.sort.era-old': 'Époque : les plus anciens',
    'detail.shipping': 'Retrait à Berne, expédition en Suisse et à l\'international sur demande.',
    'shipping.title': 'Expédition & Retrait',
    'shipping.pickup': 'Le retrait à Berne est possible à tout moment sur rendez-vous.',
    'shipping.domestic': 'Nous organisons volontiers l\'expédition en Suisse pour vous.',
    'shipping.intl': 'L\'expédition internationale est possible sur demande – nous trouverons une solution adaptée à chaque pièce.',
    'shipping.tax': 'Pour les envois internationaux, des droits de douane et taxes d\'importation du pays de destination peuvent s\'appliquer.',

    // v15 - filter labels + wording fixes
    'shop.subtitle': 'Pièces Sélectionnées et Authentifiées',
    'shop.filter.all': 'Toutes les catégories',
    'shop.filter.category': 'Catégorie',
    'shop.filter.sort': 'Trier',
    'hero.subtitle': '40 ans | Design et antiquités européens authentifiés',

    // v16 - language gap fill + Accessoires/Jewellery
    'categories.accessoires.label': 'Accessoires/Bijoux',
    'categories.accessoires.desc': 'Bijoux & accessoires',

    // v17 - cross-language contamination fix
    'footer.instagram': 'Instagram',

  },
  it: {
    // Navigation
    'nav.home': 'Home',
    'nav.shop': 'Negozio',
    'nav.about': 'Su di me',
    'nav.contact': 'Contatti',
    
    // Homepage
    'hero.title': 'Matthew Simon',
    'hero.location': 'Berna, Svizzera',
    'hero.explore': 'Esplora Collezione',
    'hero.learnmore': 'Scopri di Più',
    
    // Featured Section
    'featured.badge': 'In Evidenza',
    'featured.discover': 'Scopri Tesori Curati',
    'featured.story': 'Uno dei più grandi soffiatori di vetro veneziani. Questo capolavoro Murano dipinto a mano rappresenta l\'apice dell\'arte del vetro veneziano degli anni \'20. Qualità da museo. Il tipo di pezzo che i collezionisti seri cercano.',
    'featured.price': 'CHF 2.400',
    'featured.inquire': 'Informazioni su questo',
    'featured.similar': 'Vedi pezzi simili',
    
    // Why Section
    'why.title': 'Perché Matthew',
    'why.expertise': '40 Anni di Esperienza',
    'why.expertise.desc': 'Quattro decenni di sourcing di pezzi autenticati per collezionisti in tutto il mondo',
    'why.stuker': 'Esperto Stuker',
    'why.stuker.desc': 'Esperto principale in arti applicate presso la prestigiosa casa d\'aste di Berna',
    'why.authenticated': 'Autenticato',
    'why.authenticated.desc': 'Ogni pezzo valutato personalmente per autenticità, condizione e provenienza',
    
    // Categories
    'categories.title': 'Sfoglia per Categoria',
    'categories.furniture': 'Mobili',
    'categories.glass': 'Vetro',
    'categories.lighting': 'Illuminazione',
    'categories.objects': 'Oggetti',
    
    // Services
    'services.title': 'Servizi',
    'services.consignment': 'Vendita in Consegna',
    'services.consignment.desc': 'Hai un pezzo che vorresti vendere? Matthew offre vendita in consegna basata su commissione per collegare i tuoi tesori con collezionisti seri.',
    'services.sourcing': 'Sourcing Basato su Commissione',
    'services.sourcing.desc': 'Stai cercando pezzi specifici? Matthew ricerca attivamente pezzi autenticati per collezionisti e designer.',
    
    // CTA Section
    'cta.title': 'Domande su un Pezzo?',
    'cta.subtitle': 'Hai domande sui pezzi della collezione o hai bisogno di aiuto per trovare qualcosa di specifico? Matthew è qui per aiutarti.',
    'cta.button': 'Contattami',
    
    // Footer
    'footer.contact': 'Contatti',
    'footer.instagram': 'Instagram',
    'footer.admin': 'Admin',
    'footer.copyright': '© 2026 Matthew Simon. Tutti i diritti riservati.',
    
    // Shop Page
    'shop.title': 'Collezione',
    'shop.sort.featured': 'In Evidenza',
    'shop.sort.price-high': 'Prezzo: Alto a Basso',
    'shop.sort.price-low': 'Prezzo: Basso ad Alto',
    'shop.sort.era-new': 'Era: Più Recente',
    'shop.search': 'Cerca prodotti...',
    'shop.inquire': 'Informazioni',
    'shop.empty': 'Nessun prodotto trovato. Prova ad aggiustare i tuoi filtri.',
    
    // About Page
    'about.title': 'Su Matthew',
    'about.subtitle': '40 Anni di Expertise in Design Autenticato',
    
    'about.experience': 'Esperienza',
    'about.cred.40years': '40 Anni',
    'about.cred.40years.desc': 'Sourcing di pezzi autenticati per collezionisti in tutto il mondo',
    'about.cred.stuker': 'Esperto Stuker',
    'about.cred.stuker.desc': 'Esperto principale in arti applicate presso la rinomata casa d\'aste di Berna',
    'about.cred.master': 'Artigiano Maestro',
    'about.cred.master.desc': 'Formato come doratore e restauratore con una profonda comprensione di materiali e tecniche',
    'about.cred.auth': 'Autenticato',
    'about.cred.auth.desc': 'Ogni pezzo valutato personalmente per autenticità, condizione e provenienza',
    
    // Contact Page
    'contact.title': 'Contattami',
    'contact.subtitle': 'Poni domande sui pezzi o discuti della tua collezione',
    'contact.form.name': 'Il tuo nome',
    'contact.form.email': 'Indirizzo email',
    'contact.form.subject': 'Oggetto',
    'contact.form.subject.product': 'Informazioni su un pezzo',
    'contact.form.subject.consignment': 'Vendita in Consegna',
    'contact.form.subject.sourcing': 'Sourcing Basato su Commissione',
    'contact.form.subject.other': 'Altro',
    'contact.form.message': 'Messaggio',
    'contact.form.send': 'Invia Richiesta',
    'contact.form.note': 'Matthew di solito risponde entro 24 ore.',
    'contact.inquiry.message': 'Sono interessato a {product}. Potresti fornirmi più dettagli?',
    'contact.info.email': 'Email',
    'contact.info.location': 'Localizzazione',
    'contact.info.social': 'Social',
    'contact.info.follow': 'Segui per gli aggiornamenti',
    // Added v3 keys
    'detail.whatsapp': '💬 WhatsApp',

    // v5 keys - Shop tabs & mobile nav
    'shop.tab.available': 'Disponibili',
    'shop.tab.archive': 'Venduti (Archivio)',
    'nav.about.short': 'Chi sono',

    // v6 keys - Contact info completions
    'contact.info.heading': 'Informazioni di contatto',
    'contact.info.phone': 'Telefono',
    'contact.info.location.value': 'Berna, Svizzera',
    'contact.info.whatsapp': '💬 <strong>WhatsApp disponibile</strong> a questo numero',
    'contact.info.follow.desc': 'Nuove acquisizioni e approfondimenti per collezionisti sono condivisi regolarmente su Instagram.',

    // v7 keys - About page enhancements
    'about.photo.label': 'Collezione Selezionata',
    'about.stat.years': 'Anni',
    'about.stat.pieces': 'Pezzi',
    'about.stat.languages': 'Lingue',

    // v8 keys - About pullquote
    'about.pullquote': '«Ogni pezzo è personalmente valutato per autenticità, condizione e provenienza.»',

    // v9 keys - Kunst (Fine Art) category
    'categories.kunst.desc': 'Dipinti, Sculture & Grafica',

    // v10 keys - Why Matthew refined
    'why.eyebrow': 'Competenza',

    // v11 keys - Archive category tile
    'categories.archive.name': 'Archivio',

    // v12 - About rewrite, Why Matthew, shop subtitle
    'about.story.heading': '40 anni di design e antiquariato selezionati e autenticati',
    'about.story.p1': 'All\'età di 30 anni ho lasciato la professione di doratore e restauratore per diventare gallerista, aprendo nel 1986 la mia galleria «die Zeit» a Berna.',
    'about.story.p2': 'Dagli anni 2000 ho lavorato anche come esperto e consulente per diverse case d\'asta, tra cui la rinomata casa d\'aste Stuker.',
    'about.story.p3': 'Oggi mi concentro principalmente su oggetti rari delle arti applicate del XX secolo, con particolare attenzione al vetro di Murano.',
    'about.story.p4': 'Dagli oggetti che propongo potrà capire quali temi e quali stili rientrano tra le mie passioni.',
    'about.story.p5': 'Che stiate arredando una casa curata nei dettagli, costruendo una collezione o necessitando di una perizia per un\'eredità — metto volentieri a disposizione la mia esperienza e le mie conoscenze per assistervi al meglio.',
    'about.based': 'Con sede a Berna',
    'why.master': 'Maestro Artigiano',
    'why.master.desc': 'Formato come doratore e restauratore, con profonda conoscenza di materiali e tecniche.',

    // v13 - category rename + admin fields
    'categories.kunst.label': 'Dipinti e Grafica',
    'categories.keramik.label': 'Ceramica',
    'categories.fundstuecke.label': 'Ritrovamenti',
    'categories.sonstiges.label': 'Ceramica',
    'admin.era': 'Epoca / Anno',
    'admin.artist': 'Artista / Produttore',

    // v14 - search, sort, shipping
    'shop.search.placeholder': 'Cerca: Murano, Barovier, anni \'50 …',
    'shop.sort.recent': 'Aggiunti di recente',
    'shop.sort.era-old': 'Epoca: prima i più antichi',
    'detail.shipping': 'Ritiro a Berna, spedizione in Svizzera e internazionale su richiesta.',
    'shipping.title': 'Spedizione e Ritiro',
    'shipping.pickup': 'Il ritiro a Berna è possibile in qualsiasi momento su appuntamento.',
    'shipping.domestic': 'Organizziamo volentieri la spedizione all\'interno della Svizzera.',
    'shipping.intl': 'La spedizione internazionale è possibile su richiesta – troveremo una soluzione adatta per ogni pezzo.',
    'shipping.tax': 'Per le spedizioni internazionali possono essere applicati dazi doganali e tasse di importazione del paese di destinazione.',

    // v15 - filter labels + wording fixes
    'shop.subtitle': 'Pezzi Selezionati e Autenticati',
    'shop.filter.all': 'Tutte le categorie',
    'shop.filter.category': 'Categoria',
    'shop.filter.sort': 'Ordina',
    'hero.subtitle': '40 Anni | Design e antiquariato europeo autenticato',

    // v16 - language gap fill + Accessoires/Jewellery
    'categories.accessoires.label': 'Accessori/Gioielli',
    'categories.accessoires.desc': 'Gioielli e accessori',
    'categories.sonstiges.desc': 'Ceramica e porcellana',
    'categories.archive.label': 'Archivio',
    'categories.archive.desc': 'Pezzi venduti',
    'archive.subtitle': 'Una selezione di pezzi già venduti',
    'archive.empty': 'Nessun pezzo in archivio al momento.',
    'archive.link': 'Archivio (venduti)',
    'nav.archive': 'Archivio',
    'status.sold': 'VENDUTO',
    'status.sold_on': 'Venduto il',
    'status.draft': 'Bozza',
    'status.inquire_similar': 'Richiedi un pezzo simile',
    'shop.no_products': 'Nessun prodotto trovato. Prova a modificare i filtri.',

    // v17 - cross-language contamination fix
    'categories.furniture.label': 'Mobili',
    'categories.furniture.desc': 'Mobili antichi e di design',
    'categories.glass.label': 'Vetro',
    'categories.glass.desc': 'Vetro di Murano e arte vetraria europea',
    'categories.lighting.label': 'Illuminazione',
    'categories.lighting.desc': 'Illuminazione storica',
    'categories.objects.label': 'Oggetti',
    'categories.objects.desc': 'Sculture e oggetti d\'arte',
    'categories.count': 'pezzi',
    'detail.back': '← Torna al negozio',
    'detail.inquire': '✉ Invia richiesta',
    'detail.contact': 'Contatto',
    'detail.not_found': 'Prodotto non trovato',
    'detail.description_note': 'La descrizione dettagliata del prodotto è nell\'originale tedesco. Contattateci direttamente per le traduzioni.',
    'detail.loading': 'Caricamento del prodotto …',
    'featured.subtitle': 'Momenti salienti selezionati della collezione',
    'featured.empty': 'Nessun pezzo in evidenza al momento. Usa la pagina Admin per evidenziare i pezzi.',
    'featured.view_details': 'Vedi dettagli',
    'featured.view_all': 'Vedi tutto →',
    'archive.title': 'Pezzi venduti',

  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.shop': 'Shop',
    'nav.about': 'About Me',
    'nav.contact': 'Contact',
    
    // Homepage
    'hero.title': 'Matthew Simon',
    'hero.location': 'Bern, Switzerland',
    'hero.explore': 'Explore Collection',
    'hero.learnmore': 'Learn More',
    
    // Featured Section
    'featured.badge': 'Featured',
    'featured.discover': 'Discover Curated Treasures',
    'featured.story': 'One of Venice\'s greatest glassmakers. This hand-painted Murano masterpiece represents the pinnacle of 1920s Venetian glass artistry. Museum-quality condition. The kind of piece serious collectors search for.',
    'featured.price': 'CHF 2,400',
    'featured.inquire': 'Inquire About This',
    'featured.similar': 'View Similar',
    
    // Why Section
    'why.title': 'Why Matthew',
    'why.expertise': '40 Years Expertise',
    'why.expertise.desc': 'Four decades sourcing authenticated pieces for serious collectors worldwide.',
    'why.stuker': 'Stuker Expert',
    'why.stuker.desc': 'Led applied art expertise at Bern\'s prestigious auction house for a decade.',
    'why.authenticated': 'Authenticated',
    'why.authenticated.desc': 'Every piece personally evaluated for authenticity, condition, and provenance.',
    
    // Categories
    'categories.title': 'Browse by Category',
    'categories.furniture': 'Furniture',
    'categories.glass': 'Glass',
    'categories.lighting': 'Lighting',
    'categories.objects': 'Objects',
    
    // Services
    'services.title': 'Services',
    'services.consignment': 'Consignment Selling',
    'services.consignment.desc': 'Have a piece you\'d like to sell? Matthew offers commission-based consignment to connect your treasures with serious collectors.',
    'services.sourcing': 'Commission-Based Sourcing',
    'services.sourcing.desc': 'Looking for specific pieces? Matthew actively sources authenticated pieces for collectors and designers.',
    
    // CTA Section
    'cta.title': 'Questions About a Piece?',
    'cta.subtitle': 'Have questions about any pieces in the collection or need help finding something specific? Matthew is here to assist.',
    'cta.button': 'Get in Touch',
    
    // Footer
    'footer.contact': 'Contact',
    'footer.instagram': 'Instagram',
    'footer.admin': 'Admin',
    'footer.copyright': '© 2026 Matthew Simon. All rights reserved.',
    
    // Shop Page
    'shop.title': 'Collection',
    'shop.sort.featured': 'Featured',
    'shop.sort.price-high': 'Price: High to Low',
    'shop.sort.price-low': 'Price: Low to High',
    'shop.sort.era-new': 'Era: Newest First',
    'shop.search': 'Search products...',
    'shop.inquire': 'Inquire',
    'shop.empty': 'No products found. Try adjusting your filters.',
    
    // About Page
    'about.title': 'About Matthew',
    'about.subtitle': '40 years of authenticated design expertise',
    
    'about.experience': 'Experience',
    'about.cred.40years': '40 Years',
    'about.cred.40years.desc': 'Sourcing authenticated pieces for collectors worldwide',
    'about.cred.stuker': 'Stuker Expert',
    'about.cred.stuker.desc': 'Lead Expert in Applied Art at Bern\'s prestigious auction house',
    'about.cred.master': 'Master Craftsman',
    'about.cred.master.desc': 'Trained as gilder and restorer with deep understanding of materials and techniques',
    'about.cred.auth': 'Authenticated',
    'about.cred.auth.desc': 'Every piece personally evaluated for authenticity, condition, and provenance',
    
    // Contact Page
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Inquire about pieces or discuss your collection',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject',
    'contact.form.subject.product': 'Inquiry About a Piece',
    'contact.form.subject.consignment': 'Consignment Selling',
    'contact.form.subject.sourcing': 'Commission-Based Sourcing',
    'contact.form.subject.other': 'Other',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Inquiry',
    'contact.form.note': 'Matthew typically responds within 24 hours.',
    'contact.inquiry.message': 'I\'m interested in the {product}. Could you please provide more details?',
    'contact.info.email': 'Email',
    'contact.info.location': 'Location',
    'contact.info.social': 'Social',
    'contact.info.follow': 'Follow for Updates',
    // Added v3 keys
    'categories.furniture.label': 'Mobili',
    'categories.furniture.desc': 'Mobili antichi e di design',
    'categories.glass.label': 'Vetro',
    'categories.glass.desc': 'Vetro di Murano e arte europea',
    'categories.lighting.label': 'Illuminazione',
    'categories.lighting.desc': 'Illuminazione storica',
    'categories.objects.label': 'Oggetti',
    'categories.objects.desc': 'Sculture e oggetti d\'arte',
    'categories.count': 'pezzi',
    'detail.back': '← Torna al negozio',
    'detail.inquire': '✉ Invia richiesta',
    'detail.whatsapp': '💬 WhatsApp',
    'detail.contact': 'Contatto',
    'detail.not_found': 'Prodotto non trovato',
    'detail.description_note': 'La descrizione dettagliata del prodotto è nell\'originale tedesco. Contattateci direttamente per le traduzioni.',
    'detail.loading': 'Caricamento prodotto...',
    'featured.subtitle': 'Selezione curata dalla collezione',
    'featured.empty': 'Nessun pezzo in evidenza al momento.',
    'featured.view_details': 'Vedi dettagli',
    'featured.view_all': 'Vedi tutti →',

    // Added v3 keys
    'categories.furniture.label': 'Furniture',
    'categories.furniture.desc': 'Antique & Design Furniture',
    'categories.glass.label': 'Glass',
    'categories.glass.desc': 'Murano & European Glass Art',
    'categories.lighting.label': 'Lighting',
    'categories.lighting.desc': 'Historical Lighting',
    'categories.objects.label': 'Objects',
    'categories.objects.desc': 'Sculptures & Art Objects',
    'categories.count': 'pieces',
    
    'detail.back': '← Back to Shop',
    'detail.inquire': '✉ Send Inquiry',
    'detail.whatsapp': '💬 WhatsApp',
    'detail.contact': 'Contact',
    'detail.not_found': 'Product not found',
    'detail.description_note': 'The detailed product description is in the original German. Please contact us directly for translations.',
    'detail.loading': 'Loading product...',
    
    'featured.subtitle': 'Curated Highlights from the Collection',
    'featured.empty': 'No featured pieces yet. Use the Admin page to feature items.',
    'featured.view_details': 'View Details',
    'featured.view_all': 'View All →',

    // v4 keys - Archive, Draft, New categories
    'categories.sonstiges.desc': 'Various Pieces',

    // v4 keys - Archive, Draft, New categories
    'categories.sonstiges.desc': 'Pezzi vari',

    // v5 keys - Shop tabs & mobile nav
    'shop.tab.available': 'Available',
    'shop.tab.archive': 'Sold (Archive)',
    'nav.about.short': 'About',

    // v6 keys - Contact info completions
    'contact.info.heading': 'Contact Information',
    'contact.info.phone': 'Phone',
    'contact.info.location.value': 'Bern, Switzerland',
    'contact.info.whatsapp': '💬 <strong>WhatsApp available</strong> at this number',
    'contact.info.follow.desc': 'New acquisitions and collector insights are shared regularly on Instagram.',

    // v7 keys - About page enhancements
    'about.photo.label': 'Curated Collection',
    'about.stat.years': 'Years',
    'about.stat.pieces': 'Pieces',
    'about.stat.languages': 'Languages',

    // v8 keys - About pullquote
    'about.pullquote': '"Every piece is personally evaluated for authenticity, condition, and provenance."',

    // v9 keys - Kunst (Fine Art) category
    'categories.kunst.desc': 'Paintings, Sculpture & Prints',

    // v10 keys - Why Matthew refined
    'why.eyebrow': 'Expertise',

    // v11 keys - Archive category tile

    // v12 - About rewrite, Why Matthew, shop subtitle
    'about.story.heading': '40 Years of Curated, Authenticated Design & Antiques',
    'about.story.p1': 'At the age of 30, I moved from my profession as a gilder and restorer to become a gallerist, opening my gallery "die Zeit" in Bern in 1986.',
    'about.story.p2': 'From the 2000s onwards, I also worked as an expert and consultant for various auction houses, including the renowned Stuker auction house.',
    'about.story.p3': 'Today I focus mainly on rare objects of 20th-century applied art, with a particular emphasis on Murano glass.',
    'about.story.p4': 'The pieces I offer will show you which themes and styles are among my particular passions.',
    'about.story.p5': 'Whether you are creating a carefully curated home, building a collection, or need an expert appraisal for an estate — I am glad to put my experience and knowledge to work to support you as best I can.',
    'about.based': 'Based in Bern',
    'why.master': 'Master Craftsman',
    'why.master.desc': 'Trained as a gilder and restorer, with deep understanding of materials and techniques.',

    // v13 - category rename + admin fields
    'categories.kunst.label': 'Paintings & Prints',
    'categories.keramik.label': 'Ceramics',
    'categories.fundstuecke.label': 'Finds',
    'categories.sonstiges.label': 'Ceramics',
    'admin.era': 'Era / Year',
    'admin.artist': 'Artist / Maker',

    // v14 - search, sort, shipping
    'shop.search.placeholder': 'Search: Murano, Barovier, 1950s …',
    'shop.sort.recent': 'Recently added',
    'shop.sort.era-old': 'Era: Oldest first',
    'detail.shipping': 'Pickup in Bern, shipping within Switzerland and internationally on request.',
    'shipping.title': 'Shipping & Pickup',
    'shipping.pickup': 'Pickup in Bern is possible at any time by arrangement.',
    'shipping.domestic': 'We are happy to arrange shipping within Switzerland for you.',
    'shipping.intl': 'International shipping is available on request – we will find a suitable solution for every piece.',
    'shipping.tax': 'For international shipments, customs and import duties of the destination country may apply.',

    // v15 - filter labels + wording fixes
    'shop.subtitle': 'Curated and Authenticated Pieces',
    'shop.filter.all': 'All Categories',
    'shop.filter.category': 'Category',
    'shop.filter.sort': 'Sort',
    'hero.subtitle': '40 Years | Authenticated European Design & Antiques',

    // v16 - language gap fill + Accessoires/Jewellery
    'categories.accessoires.label': 'Accessories/Jewellery',
    'categories.accessoires.desc': 'Jewellery & Accessories',

    // v17 - cross-language contamination fix
    'archive.title': 'Sold Pieces',
    'archive.subtitle': 'A selection of pieces already sold from our collection',
    'archive.empty': 'No sold pieces yet',
    'archive.link': 'Archive (Sold)',
    'categories.archive.label': 'Archive',
    'categories.archive.desc': 'Sold Pieces',
    'categories.archive.name': 'Archive',
    'nav.archive': 'Archive',
    'status.sold': 'SOLD',
    'status.sold_on': 'Sold on',
    'status.draft': 'Draft',
    'status.inquire_similar': 'Inquire about a similar piece',
    'shop.no_products': 'No products in this category',

  }
};

// Language management with auto-detection
function getDetectedLanguage() {
  // Check localStorage first (both key formats for compatibility)
  const saved = localStorage.getItem('matthew_language') || localStorage.getItem('language');
  if (saved) return saved;
  
  // Auto-detect from browser language
  const browserLang = navigator.language || navigator.userLanguage;
  const langCode = browserLang.substring(0, 2).toLowerCase();
  
  // Map browser language to supported languages
  const langMap = {
    'de': 'de',
    'fr': 'fr',
    'it': 'it',
    'en': 'en'
  };
  
  return langMap[langCode] || 'de';  // Default to German (main audience)
}

let currentLanguage = getDetectedLanguage();

function setLanguage(lang) {
  currentLanguage = lang;
  // Store in BOTH keys for backward compatibility
  localStorage.setItem('matthew_language', lang);
  localStorage.setItem('language', lang);
  updatePageLanguage();
  updateLanguageSelector();
  // Dispatch custom event for other components to react
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

function t(key) {
  return translations[currentLanguage][key] || translations.en[key] || key;
}

function toggleLanguageMenu() {
  const menu = document.getElementById('languageMenu');
  if (menu) {
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
  }
}

function updateLanguageSelector() {
  // Update language selector button text and boxes
  const langButton = document.querySelector('.language-selector');
  if (langButton) {
    langButton.textContent = currentLanguage.toUpperCase();
  }
  
  // Update MOBILE language button to show only active language
  const langButtonMobile = document.querySelector('.language-selector-mobile');
  if (langButtonMobile) {
    langButtonMobile.textContent = currentLanguage.toUpperCase();
  }
  
  // Update active language box styling
  document.querySelectorAll('.lang-box').forEach(box => {
    const lang = box.getAttribute('data-lang');
    if (lang === currentLanguage) {
      box.classList.add('active');
    } else {
      box.classList.remove('active');
    }
  });
}

function updatePageLanguage() {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    element.textContent = t(key);
  });
  
  // data-i18n-html: allows HTML tags in translations (e.g. <strong>)
  document.querySelectorAll('[data-i18n-html]').forEach(element => {
    const key = element.getAttribute('data-i18n-html');
    element.innerHTML = t(key);
  });
  
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    element.placeholder = t(key);
  });
  
  updateLanguageSelector();
  
  // Update html lang attribute
  document.documentElement.lang = currentLanguage;
}

// Make available globally
window.updatePageLanguage = updatePageLanguage;
window.setLanguage = setLanguage;
window.t = t;
window.getCurrentLanguage = function() { return currentLanguage; };

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  updatePageLanguage();
  
  // Close language menu when clicking outside
  document.addEventListener('click', function(event) {
    const langDropdown = document.querySelector('.language-dropdown');
    if (langDropdown && !langDropdown.contains(event.target)) {
      const menu = document.getElementById('languageMenu');
      if (menu) {
        menu.style.display = 'none';
      }
    }
  });
});
