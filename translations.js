/*
 * UI translations for every page of the site. English is the default language
 * (the HTML is written in English); Spanish is applied on demand from the
 * language selector or with ?lang=es.
 *
 * Keys are referenced from the HTML through data-i18n* attributes:
 *   data-i18n="key"              -> textContent
 *   data-i18n-html="key"         -> innerHTML (only for trusted strings below)
 *   data-i18n-placeholder="key"  -> placeholder attribute
 *   data-i18n-alt="key"          -> alt attribute
 *   data-i18n-aria-label="key"   -> aria-label attribute
 *   data-i18n-content="key"      -> content attribute (meta tags)
 */
window.SGM_TRANSLATIONS = {
    en: {
        meta: {
            title: 'Floor Care & Cleaning Services in Lowell, MA | SGML Clean Solutions',
            description: 'Floor stripping & waxing, buffing, burnishing, deep scrub & recoat, carpet and tile care in Lowell, Massachusetts and New Hampshire, plus commercial and residential cleaning, junk removal and snow removal. Free quote.',
            ogDescription: 'Floor care specialists in Lowell, MA: stripping & waxing, burnishing, carpet and tile care, plus complete cleaning. Free quote.'
        },
        common: {
            skip: 'Skip to content',
            menu: 'Open menu',
            language: 'Language'
        },
        nav: {
            home: 'Home',
            about: 'About Us',
            services: 'Services',
            testimonials: 'Reviews',
            floorCare: 'Floor Care',
            gallery: 'Gallery',
            area: 'Service Area',
            quote: 'Free Quote'
        },
        hero: {
            eyebrow: 'Floor care specialists · Lowell, MA',
            title: 'Floors that shine like new, across Massachusetts',
            subtitle: 'Stripping & waxing, buffing, deep scrubbing and carpet care for offices, schools, stores and homes — plus complete cleaning and snow removal.',
            cta: 'Get a Free Floor Quote',
            gallery: 'View Gallery',
            b1: 'Insured & trained crew',
            b2: 'Nights & weekends available',
            b3: 'English & Spanish'
        },
        floor: {
            alt: 'Floor stripping and waxing machine on a commercial floor',
            eyebrow: 'Floor care specialists · Lowell, MA',
            title: 'Our floor care services',
            intro: 'VCT, vinyl, tile, concrete, hardwood and carpet: we restore worn floors and keep them protected with the right products and commercial equipment.',
            l1: { t: 'Strip & wax', d: 'Remove old finish and lay fresh coats for a deep, lasting shine.' },
            l2: { t: 'Buffing & burnishing', d: 'High-speed polish that brings back gloss between waxings.' },
            l3: { t: 'Deep scrub & recoat', d: 'Lift embedded dirt and refresh the finish without a full strip.' },
            l4: { t: 'Carpet deep cleaning', d: 'Hot-water extraction that removes stains, odors and allergens.' },
            l5: { t: 'Tile & grout', d: 'Scrubbing and sealing that keeps grout lines clean.' },
            l6: { t: 'Maintenance plans', d: 'Scheduled visits so your floors always look their best.' },
            cta: 'Quote my floors',
            more: 'Floor stripping & waxing',
            carpet: 'Carpet & tile cleaning',
            s1: { t: 'Inspect', d: 'We check the floor type, wear and traffic.' },
            s2: { t: 'Strip & clean', d: 'Old finish and buildup come off.' },
            s3: { t: 'Finish & protect', d: 'New wax or sealer, then burnished.' },
            s4: { t: 'Maintain', d: 'A plan that keeps the shine.' }
        },
        area: {
            eyebrow: 'Service area',
            title: 'Based in Lowell, serving the Merrimack Valley & southern New Hampshire',
            intro: 'Our crew travels with commercial floor equipment within about 25 miles of Lowell: Lowell, Dracut, Chelmsford, Tewksbury, Billerica, Westford, Tyngsborough, Lawrence, Methuen, Andover, North Andover, Haverhill, Wilmington, Burlington, Woburn, Bedford, Acton and Littleton in Massachusetts, and Nashua, Hudson, Salem, Pelham, Windham, Londonderry, Derry and Merrimack in southern New Hampshire.',
            directions: 'Open in Google Maps'
        },
        g: {
            eyebrow: 'Our work',
            meta: { title: 'Floor Care & Cleaning Gallery: Real Jobs in Lowell, MA | SGML Clean Solutions', description: 'Photos and videos of floor stripping & waxing, burnishing, carpet and tile care and cleaning jobs by SGML Clean Solutions in Lowell and across Massachusetts.', og: 'Real floor stripping, waxing, burnishing and cleaning jobs in Lowell and across Massachusetts.' },
            title: 'Floor care & cleaning gallery in Massachusetts',
            intro: 'Real jobs by the SGML crew: stripped, waxed and burnished floors and deep-cleaned carpets in clinics, offices and commercial spaces across Massachusetts and New Hampshire.',
            filter: 'Filter gallery',
            f: { all: 'All', floors: 'Floor care', video: 'Videos', commercial: 'Commercial', residential: 'Residential', snow: 'Snow removal', ba: 'Before & after', carpet: 'Carpet' },
            i1: 'Burnishing · Commercial floor', i2: 'Strip & wax · Lowell', i3: 'Office cleaning', i4: 'Commercial cleaning', i5: 'Residential · Lowell', i6: 'Apartments & condos', i7: 'Our crew', i8: 'Snow removal', i9: 'Floor burnishing · Lowell',
            a1: 'Floor machine burnishing a commercial floor in Massachusetts', a2: 'Floor stripping and waxing on a commercial floor in Lowell, MA', a3: 'SGML crew cleaning and disinfecting office desks in Massachusetts', a4: 'Restaurant tables sanitized during a commercial cleaning visit', a5: 'Residential house cleaning in Lowell, MA', a6: 'Apartment and condominium common areas maintained in Massachusetts', a7: 'SGML Clean Solutions floor care and cleaning crew', a8: 'Snow blower clearing a driveway in Lowell, MA', a9: 'SGML Clean Solutions technician burnishing a glossy commercial floor in Lowell, MA',
            i10: 'Strip & wax · Step by step', i11: 'Before & after · Medical clinic', i12: 'Before & after · Office carpet', i13: 'High-gloss finish · Lounge', i14: 'Carpet deep cleaning · Video', i15: 'Before & after · Break room', i16: 'Conference room · Waxed & burnished', i17: 'Before & after · Carpet tiles', i18: 'Cafeteria · New finish', i19: 'Walkthrough · Fresh shine', i20: 'Before & after · Treatment area', i21: 'Therapy gym · Burnishing', i22: 'Before & after · Waiting room', i23: 'Hallway · Strip & wax',
            a10: 'Video of SGML Clean Solutions stripping, waxing and burnishing a commercial floor', a11: 'Before and after floor stripping and waxing in a medical clinic exam room', a12: 'Before and after office carpet cleaning removing traffic stains', a13: 'High-gloss VCT floor in a lounge after strip and wax in Lowell, MA', a14: 'Video of office carpet stains before and after deep cleaning', a15: 'Before and after floor waxing in a medical clinic break room', a16: 'Conference room floor waxed and burnished to a mirror shine in Massachusetts', a17: 'Before and after carpet tile cleaning removing a dark stain', a18: 'Cafeteria floor with a new high-gloss finish in Massachusetts', a19: 'Walkthrough video of a freshly burnished glossy floor', a20: 'Before and after floor stripping and waxing in a clinic treatment area', a21: 'Physical therapy gym floor after burnishing in Lowell, MA', a22: 'Before and after waiting room carpet cleaning removing a spill stain', a23: 'Hallway VCT floor shining after strip and wax in Massachusetts',
            ba: { title: 'See the difference', intro: 'Drag the slider to compare before and after on real SGML jobs.', before: 'Before', after: 'After', range: 'Compare before and after', c1: 'Medical clinic · Strip & wax', c2: 'Office carpet · Deep cleaning', a1: 'Clinic exam room floor after stripping and waxing', b1: 'Clinic exam room floor before stripping and waxing', a2: 'Office carpet after deep cleaning', b2: 'Office carpet with traffic stains before cleaning' },
            cta: { text: 'Want your floors to look like this?', ig: 'More on Instagram' },
            seo: {
                title: 'Floor care projects in Massachusetts & New Hampshire',
                p1: 'Every photo and video in this gallery comes from a real job by SGML Clean Solutions. We strip and wax VCT and vinyl floors, burnish hallways and lobbies, deep scrub and recoat high-traffic areas, extract carpets and clean and seal tile and grout for offices, schools, stores, restaurants, apartment buildings and homes.',
                h1: 'Commercial floor stripping & waxing',
                t1: 'We remove old finish and buildup, then lay new coats of floor finish and burnish them for a durable, high-gloss result, scheduled at night or on weekends so your business keeps running.',
                h2: 'Buffing, burnishing & scrub-and-recoat',
                t2: 'Between full strips, regular burnishing and scrub-and-recoat visits restore shine and extend the life of the finish at a lower cost.',
                h3: 'Carpet, tile & grout care',
                t3: 'Hot-water carpet extraction and tile and grout scrubbing and sealing remove stains, odors and embedded dirt from homes and commercial spaces.',
                areas: 'Service area: about 25 miles around Lowell, MA — Lowell, Dracut, Chelmsford, Tewksbury, Billerica, Westford, Tyngsborough, Lawrence, Methuen, Andover, North Andover, Haverhill, Wilmington, Burlington, Woburn, Bedford, Acton and Littleton in Massachusetts, and Nashua, Hudson, Salem, Pelham, Windham, Londonderry, Derry and Merrimack in southern New Hampshire.',
                l1: 'See our floor care services',
                l2: 'Request a free floor quote'
            }
        },
        about: {
            title: 'About SGML Clean Solutions',
            p1: 'At <strong>SGML Clean Solutions</strong> we provide high-quality cleaning and maintenance for homes and businesses in Lowell and throughout Massachusetts. Our commitment is excellence and sustainability.',
            p2: 'Our specialty is <strong>floor care</strong>: VCT, vinyl, tile, concrete, hardwood and carpet. We restore worn floors and keep them protected with professional equipment and certified, eco-friendly products.',
            item1: 'Professional and trained team',
            item2: 'Personalized cleaning plans',
            item3: 'Eco-friendly products',
            item4: 'Bilingual service: English & Spanish',
            imageAlt: 'SGML Clean Solutions technician burnishing a glossy commercial floor in Lowell, MA'
        },
        services: {
            title: 'More Cleaning Services in Massachusetts & New Hampshire',
            intro: 'From daily office cleaning to junk removal and winter snow removal, we serve businesses and homes within about 25 miles of Lowell, MA, including southern New Hampshire. Tap a service to see what is included.',
            more: 'Learn more →',
            office: {
                alt: 'Office cleaning service in Massachusetts',
                title: 'Office Cleaning',
                i1: '🫧 Daily and weekly cleaning',
                i2: '🫧 Deep disinfection',
                i3: '🫧 Customized cleaning plans'
            },
            floors: {
                alt: 'Floor stripping and waxing in Massachusetts',
                title: 'Specialized Floor Care',
                i1: '🫧 Floor stripping and waxing',
                i2: '🫧 Deep carpet cleaning',
                i3: '🫧 Surface care and maintenance'
            },
            condos: {
                alt: 'Apartment and condominium cleaning',
                title: 'Apartments & Condominiums',
                i1: '🫧 Apartment cleaning',
                i2: '🫧 Common area maintenance',
                i3: '🫧 Recreational area maintenance'
            },
            residential: {
                alt: 'Residential house cleaning in Lowell, MA',
                title: 'Residential Cleaning in Lowell, MA',
                i1: '🫧 Regular house cleaning',
                i2: '🫧 Deep cleaning',
                i3: '🫧 Post-construction and move-in/move-out cleaning'
            },
            commercial: {
                alt: 'Commercial cleaning in Massachusetts',
                title: 'Commercial Cleaning',
                i1: '🫧 Retail and office buildings',
                i2: '🫧 Industrial cleaning',
                i3: '🫧 Commercial space maintenance'
            },
            snow: {
                alt: 'Snow removal service in Lowell, MA',
                title: 'Snow Removal in Lowell, MA',
                i1: '🫧 Roof & gutter snow removal',
                i2: '🫧 Ice melt & anti-slip treatment',
                i3: '🫧 Driveway & sidewalk clearing'
            },
            junk: {
                alt: 'SGML Clean Solutions junk removal truck serving Massachusetts and New Hampshire',
                title: 'Junk Removal',
                i1: '🫧 Furniture, appliance & debris haul-away',
                i2: '🫧 Garage, basement & attic cleanouts',
                i3: '🫧 Post-construction & office cleanouts'
            }
        },
        testimonials: {
            title: 'What Our Clients Say',
            summary: 'Our clients highlight our punctuality, attention to detail, friendly crew and clear communication, in homes and commercial spaces alike.',
            source: 'Google review',
            carouselLabel: 'Customer reviews',
            prev: 'Previous review',
            next: 'Next review',
            goTo: 'Go to review',
            seeAll: 'See all our reviews on Google',
            write: 'Leave us a review',
            attribution: 'Reviews from Google',
            count: 'Based on {n} Google reviews',
            readOnGoogle: 'Read on Google',
            rated: 'Rated {n} out of 5'
        },
        quote: {
            title: 'Request a Free Quote',
            intro: 'Tell us about your space and we will get back to you as soon as possible.'
        },
        form: {
            name: 'Full name',
            email: 'Email',
            phone: 'Phone (optional)',
            service: 'Service',
            selectService: 'Select a service',
            services: {
                office: 'Office Cleaning',
                floors: 'Specialized Floor Care',
                condos: 'Apartments & Condominiums',
                residential: 'Residential Cleaning',
                commercial: 'Commercial Cleaning',
                snow: 'Snow Removal',
                junk: 'Junk Removal'
            },
            messageLabel: 'Additional details',
            message: 'Additional details (city, size of the space, preferred dates…)',
            consent: 'I agree that SGML Clean Solutions may store my information to respond to this quote request.',
            submit: 'Submit Request',
            sending: 'Sending...',
            privacyNote: '🔒 Your information is sent over an encrypted connection and used only to answer your request. We will never ask for passwords, bank details or payments through email or this form.',
            success: 'Thank you for your request! We will contact you soon.',
            error: 'There was an error processing your request. Please try again or call us at +1 (954) 245-1566.',
            connectionError: 'Could not send your request. Please check your connection and try again.',
            rateLimited: 'Too many requests. Please wait a few minutes and try again.',
            tooFast: 'Please take a moment to review your information and try again.',
            captcha: 'Please complete the security check.',
            fixErrors: 'Please correct the highlighted fields.',
            errors: {
                required: 'This field is required',
                name: 'Please enter a valid name (letters only, 2-100 characters)',
                email: 'Please enter a valid email address',
                phone: 'Please enter a valid phone number',
                message: 'Please do not include links or HTML in the message',
                consent: 'You must accept to continue'
            }
        },
        footer: {
            contact: 'Contact',
            phone: 'Phone:',
            email: 'Email:',
            address: 'Address:',
            links: 'Quick Links',
            follow: 'Follow Us',
            rights: 'All rights reserved.'
        }
    },

    es: {
        meta: {
            title: 'Cuidado de Pisos y Limpieza en Lowell, MA | SGML Clean Solutions',
            description: 'Decapado y encerado, pulido, abrillantado, fregado profundo y recapa, alfombras y cerámica en Lowell, Massachusetts y New Hampshire, además de limpieza comercial y residencial, retiro de escombros y remoción de nieve. Cotización gratis.',
            ogDescription: 'Especialistas en pisos en Lowell, MA: decapado y encerado, abrillantado, alfombras y cerámica, y limpieza completa. Cotización gratis.'
        },
        common: {
            skip: 'Saltar al contenido',
            menu: 'Abrir menú',
            language: 'Idioma'
        },
        nav: {
            home: 'Inicio',
            about: 'Nosotros',
            services: 'Servicios',
            testimonials: 'Reseñas',
            floorCare: 'Pisos',
            gallery: 'Galería',
            area: 'Cobertura',
            quote: 'Cotización Gratis'
        },
        hero: {
            eyebrow: 'Especialistas en pisos · Lowell, MA',
            title: 'Pisos que brillan como nuevos en todo Massachusetts',
            subtitle: 'Decapado y encerado, pulido, fregado profundo y limpieza de alfombras para oficinas, escuelas, tiendas y hogares, además de limpieza completa y remoción de nieve.',
            cta: 'Cotiza tus Pisos Gratis',
            gallery: 'Ver Galería',
            b1: 'Equipo asegurado y capacitado',
            b2: 'Noches y fines de semana',
            b3: 'Inglés y español'
        },
        floor: {
            alt: 'Máquina de decapado y encerado sobre un piso comercial',
            eyebrow: 'Especialistas en pisos · Lowell, MA',
            title: 'Nuestros servicios de cuidado de pisos',
            intro: 'VCT, vinilo, cerámica, concreto, madera y alfombra: restauramos pisos desgastados y los mantenemos protegidos con los productos adecuados y equipo comercial.',
            l1: { t: 'Decapado y encerado', d: 'Retiramos el acabado viejo y aplicamos capas nuevas para un brillo profundo y duradero.' },
            l2: { t: 'Pulido y abrillantado', d: 'Pulido a alta velocidad que recupera el brillo entre enceradas.' },
            l3: { t: 'Fregado profundo y recapa', d: 'Saca la suciedad incrustada y renueva el acabado sin decapar.' },
            l4: { t: 'Limpieza profunda de alfombras', d: 'Extracción con agua caliente que elimina manchas, olores y alérgenos.' },
            l5: { t: 'Cerámica y juntas', d: 'Fregado y sellado que mantiene limpias las juntas.' },
            l6: { t: 'Planes de mantenimiento', d: 'Visitas programadas para que tus pisos siempre luzcan bien.' },
            cta: 'Cotizar mis pisos',
            more: 'Decapado y encerado de pisos',
            carpet: 'Limpieza de alfombras y baldosas',
            s1: { t: 'Inspección', d: 'Revisamos el tipo de piso, el desgaste y el tráfico.' },
            s2: { t: 'Decapado y limpieza', d: 'Retiramos el acabado viejo y la suciedad acumulada.' },
            s3: { t: 'Acabado y protección', d: 'Cera o sellador nuevo, y después abrillantado.' },
            s4: { t: 'Mantenimiento', d: 'Un plan que conserva el brillo.' }
        },
        area: {
            eyebrow: 'Zona de servicio',
            title: 'Desde Lowell, atendemos el valle de Merrimack y el sur de New Hampshire',
            intro: 'Nuestro equipo viaja con maquinaria comercial para pisos en un radio de unas 25 millas de Lowell: Lowell, Dracut, Chelmsford, Tewksbury, Billerica, Westford, Tyngsborough, Lawrence, Methuen, Andover, North Andover, Haverhill, Wilmington, Burlington, Woburn, Bedford, Acton y Littleton en Massachusetts, y Nashua, Hudson, Salem, Pelham, Windham, Londonderry, Derry y Merrimack en el sur de New Hampshire.',
            directions: 'Abrir en Google Maps'
        },
        g: {
            eyebrow: 'Nuestros trabajos',
            meta: { title: 'Galería de Pisos y Limpieza: Trabajos Reales en Lowell, MA | SGML Clean Solutions', description: 'Fotos y videos de decapado y encerado, abrillantado, alfombras, cerámica y trabajos de limpieza de SGML Clean Solutions en Lowell y todo Massachusetts.', og: 'Trabajos reales de decapado, encerado, abrillantado y limpieza en Lowell y todo Massachusetts.' },
            title: 'Galería de pisos y limpieza en Massachusetts',
            intro: 'Trabajos reales del equipo SGML: pisos decapados, encerados y abrillantados y alfombras con limpieza profunda en consultorios, oficinas y espacios comerciales de Massachusetts y New Hampshire.',
            filter: 'Filtrar galería',
            f: { all: 'Todo', floors: 'Pisos', video: 'Videos', commercial: 'Comercial', residential: 'Residencial', snow: 'Nieve', ba: 'Antes y después', carpet: 'Alfombras' },
            i1: 'Abrillantado · Piso comercial', i2: 'Decapado y encerado · Lowell', i3: 'Limpieza de oficinas', i4: 'Limpieza comercial', i5: 'Residencial · Lowell', i6: 'Apartamentos y condominios', i7: 'Nuestro equipo', i8: 'Remoción de nieve', i9: 'Abrillantado de pisos · Lowell',
            a1: 'Máquina abrillantando un piso comercial en Massachusetts', a2: 'Decapado y encerado de un piso comercial en Lowell, MA', a3: 'Equipo SGML limpiando y desinfectando escritorios de oficina en Massachusetts', a4: 'Mesas de restaurante desinfectadas en una limpieza comercial', a5: 'Limpieza residencial de una casa en Lowell, MA', a6: 'Áreas comunes de apartamentos y condominios en Massachusetts', a7: 'Equipo de cuidado de pisos y limpieza de SGML Clean Solutions', a8: 'Quitanieves limpiando una entrada en Lowell, MA', a9: 'Técnico de SGML Clean Solutions abrillantando un piso comercial en Lowell, MA',
            i10: 'Decapado y encerado · Paso a paso', i11: 'Antes y después · Clínica médica', i12: 'Antes y después · Alfombra de oficina', i13: 'Acabado de alto brillo · Sala', i14: 'Limpieza profunda de alfombras · Video', i15: 'Antes y después · Sala de descanso', i16: 'Sala de juntas · Encerado y abrillantado', i17: 'Antes y después · Alfombra modular', i18: 'Cafetería · Acabado nuevo', i19: 'Recorrido · Brillo recién hecho', i20: 'Antes y después · Área de tratamiento', i21: 'Gimnasio de terapia · Abrillantado', i22: 'Antes y después · Sala de espera', i23: 'Pasillo · Decapado y encerado',
            a10: 'Video de SGML Clean Solutions decapando, encerando y abrillantando un piso comercial', a11: 'Antes y después del decapado y encerado en un consultorio de una clínica médica', a12: 'Antes y después de la limpieza de alfombra de oficina eliminando manchas de tráfico', a13: 'Piso VCT de alto brillo en una sala después del decapado y encerado en Lowell, MA', a14: 'Video de manchas en alfombra de oficina antes y después de la limpieza profunda', a15: 'Antes y después del encerado en la sala de descanso de una clínica médica', a16: 'Piso de sala de juntas encerado y abrillantado como espejo en Massachusetts', a17: 'Antes y después de la limpieza de alfombra modular eliminando una mancha oscura', a18: 'Piso de cafetería con un acabado nuevo de alto brillo en Massachusetts', a19: 'Video recorriendo un piso brillante recién abrillantado', a20: 'Antes y después del decapado y encerado en un área de tratamiento de una clínica', a21: 'Piso de gimnasio de terapia física después del abrillantado en Lowell, MA', a22: 'Antes y después de la limpieza de alfombra de sala de espera eliminando una mancha', a23: 'Piso VCT de pasillo brillante después del decapado y encerado en Massachusetts',
            ba: { title: 'Mira la diferencia', intro: 'Desliza para comparar el antes y el después en trabajos reales de SGML.', before: 'Antes', after: 'Después', range: 'Comparar antes y después', c1: 'Clínica médica · Decapado y encerado', c2: 'Alfombra de oficina · Limpieza profunda', a1: 'Piso de consultorio después del decapado y encerado', b1: 'Piso de consultorio antes del decapado y encerado', a2: 'Alfombra de oficina después de la limpieza profunda', b2: 'Alfombra de oficina con manchas de tráfico antes de la limpieza' },
            cta: { text: '¿Quieres que tus pisos luzcan así?', ig: 'Más en Instagram' },
            seo: {
                title: 'Proyectos de cuidado de pisos en Massachusetts y New Hampshire',
                p1: 'Cada foto y video de esta galería es de un trabajo real de SGML Clean Solutions. Decapamos y enceramos pisos VCT y de vinilo, abrillantamos pasillos y vestíbulos, hacemos fregado profundo y recapa en zonas de alto tráfico, limpiamos alfombras por extracción y limpiamos y sellamos cerámica y juntas en oficinas, escuelas, tiendas, restaurantes, edificios de apartamentos y hogares.',
                h1: 'Decapado y encerado de pisos comerciales',
                t1: 'Retiramos el acabado viejo y la suciedad acumulada, aplicamos capas nuevas de acabado y las abrillantamos para un resultado duradero y de alto brillo, en horario nocturno o de fin de semana para que tu negocio siga funcionando.',
                h2: 'Pulido, abrillantado y fregado con recapa',
                t2: 'Entre decapados completos, el abrillantado periódico y el fregado con recapa devuelven el brillo y alargan la vida del acabado a menor costo.',
                h3: 'Alfombras, cerámica y juntas',
                t3: 'La extracción con agua caliente y el fregado y sellado de cerámica y juntas eliminan manchas, olores y suciedad incrustada en hogares y espacios comerciales.',
                areas: 'Zona de servicio: unas 25 millas alrededor de Lowell, MA — Lowell, Dracut, Chelmsford, Tewksbury, Billerica, Westford, Tyngsborough, Lawrence, Methuen, Andover, North Andover, Haverhill, Wilmington, Burlington, Woburn, Bedford, Acton y Littleton en Massachusetts, y Nashua, Hudson, Salem, Pelham, Windham, Londonderry, Derry y Merrimack en el sur de New Hampshire.',
                l1: 'Ver nuestros servicios de pisos',
                l2: 'Pedir cotización gratis de pisos'
            }
        },
        about: {
            title: 'Sobre SGML Clean Solutions',
            p1: 'En <strong>SGML Clean Solutions</strong> ofrecemos limpieza y mantenimiento de alta calidad para hogares y negocios en Lowell y todo Massachusetts. Nuestro compromiso es la excelencia y la sostenibilidad.',
            p2: 'Nuestra especialidad es el <strong>cuidado de pisos</strong>: VCT, vinilo, cerámica, concreto, madera y alfombra. Restauramos pisos desgastados y los mantenemos protegidos con equipo profesional y productos certificados y ecológicos.',
            item1: 'Equipo profesional y capacitado',
            item2: 'Planes de limpieza personalizados',
            item3: 'Productos ecológicos',
            item4: 'Atención bilingüe: inglés y español',
            imageAlt: 'Técnico de SGML Clean Solutions abrillantando un piso comercial en Lowell, MA'
        },
        services: {
            title: 'Más Servicios de Limpieza en Massachusetts y New Hampshire',
            intro: 'Desde la limpieza diaria de oficinas hasta el retiro de escombros y la remoción de nieve en invierno, atendemos negocios y hogares en un radio de unas 25 millas de Lowell, MA, incluido el sur de New Hampshire. Toca un servicio para ver qué incluye.',
            more: 'Ver más →',
            office: {
                alt: 'Servicio de limpieza de oficinas en Massachusetts',
                title: 'Limpieza de Oficinas',
                i1: '🫧 Limpieza diaria y semanal',
                i2: '🫧 Desinfección profunda',
                i3: '🫧 Planes de limpieza personalizados'
            },
            floors: {
                alt: 'Decapado y encerado de pisos en Massachusetts',
                title: 'Cuidado Especializado de Pisos',
                i1: '🫧 Decapado y encerado de pisos',
                i2: '🫧 Limpieza profunda de alfombras',
                i3: '🫧 Cuidado y mantenimiento de superficies'
            },
            condos: {
                alt: 'Limpieza de apartamentos y condominios',
                title: 'Apartamentos y Condominios',
                i1: '🫧 Limpieza de apartamentos',
                i2: '🫧 Mantenimiento de áreas comunes',
                i3: '🫧 Mantenimiento de áreas recreativas'
            },
            residential: {
                alt: 'Limpieza residencial en Lowell, MA',
                title: 'Limpieza Residencial en Lowell, MA',
                i1: '🫧 Limpieza regular del hogar',
                i2: '🫧 Limpieza profunda',
                i3: '🫧 Limpieza post-construcción y de mudanza'
            },
            commercial: {
                alt: 'Limpieza comercial en Massachusetts',
                title: 'Limpieza Comercial',
                i1: '🫧 Locales comerciales y edificios de oficinas',
                i2: '🫧 Limpieza industrial',
                i3: '🫧 Mantenimiento de espacios comerciales'
            },
            snow: {
                alt: 'Servicio de remoción de nieve en Lowell, MA',
                title: 'Remoción de Nieve en Lowell, MA',
                i1: '🫧 Remoción de nieve en techos y canaletas',
                i2: '🫧 Derretido de hielo y tratamiento antideslizante',
                i3: '🫧 Limpieza de entradas y aceras'
            },
            junk: {
                alt: 'Camioneta de retiro de escombros de SGML Clean Solutions en Massachusetts y New Hampshire',
                title: 'Retiro de Escombros (Junk Removal)',
                i1: '🫧 Retiro de muebles, electrodomésticos y escombros',
                i2: '🫧 Limpieza de garajes, sótanos y áticos',
                i3: '🫧 Vaciado post-construcción y de oficinas'
            }
        },
        testimonials: {
            title: 'Lo que dicen nuestros clientes',
            summary: 'Nuestros clientes destacan nuestra puntualidad, atención al detalle, un equipo amable y una comunicación clara, tanto en hogares como en espacios comerciales.',
            source: 'Reseña de Google',
            carouselLabel: 'Opiniones de clientes',
            prev: 'Opinión anterior',
            next: 'Siguiente opinión',
            goTo: 'Ir a la opinión',
            seeAll: 'Ver todas nuestras reseñas en Google',
            write: 'Déjanos una reseña',
            attribution: 'Reseñas de Google',
            count: 'Basado en {n} reseñas de Google',
            readOnGoogle: 'Leer en Google',
            rated: 'Calificación: {n} de 5'
        },
        quote: {
            title: 'Solicite una Cotización Gratuita',
            intro: 'Cuéntenos sobre su espacio y le responderemos lo antes posible.'
        },
        form: {
            name: 'Nombre completo',
            email: 'Correo electrónico',
            phone: 'Teléfono (opcional)',
            service: 'Servicio',
            selectService: 'Seleccione un servicio',
            services: {
                office: 'Limpieza de Oficinas',
                floors: 'Cuidado Especializado de Pisos',
                condos: 'Apartamentos y Condominios',
                residential: 'Limpieza Residencial',
                commercial: 'Limpieza Comercial',
                snow: 'Remoción de Nieve',
                junk: 'Retiro de Escombros (Junk Removal)'
            },
            messageLabel: 'Detalles adicionales',
            message: 'Detalles adicionales (ciudad, tamaño del espacio, fechas preferidas…)',
            consent: 'Acepto que SGML Clean Solutions almacene mis datos para responder a esta solicitud de cotización.',
            submit: 'Enviar Solicitud',
            sending: 'Enviando...',
            privacyNote: '🔒 Tu información se envía por una conexión cifrada y se usa solo para responder a tu solicitud. Nunca te pediremos contraseñas, datos bancarios ni pagos por correo o por este formulario.',
            success: '¡Gracias por su solicitud! Nos pondremos en contacto pronto.',
            error: 'Hubo un error al procesar su solicitud. Inténtelo de nuevo o llámenos al +1 (954) 245-1566.',
            connectionError: 'No se pudo enviar su solicitud. Por favor, verifique su conexión e inténtelo nuevamente.',
            rateLimited: 'Demasiadas solicitudes. Por favor espere unos minutos e inténtelo de nuevo.',
            tooFast: 'Por favor tómese un momento para revisar su información e inténtelo de nuevo.',
            captcha: 'Por favor complete la verificación de seguridad.',
            fixErrors: 'Por favor corrija los campos marcados.',
            errors: {
                required: 'Este campo es obligatorio',
                name: 'Ingrese un nombre válido (solo letras, 2-100 caracteres)',
                email: 'Por favor, ingrese un correo electrónico válido',
                phone: 'Por favor, ingrese un teléfono válido',
                message: 'Por favor no incluya enlaces ni HTML en el mensaje',
                consent: 'Debe aceptar para continuar'
            }
        },
        footer: {
            contact: 'Contacto',
            phone: 'Teléfono:',
            email: 'Correo:',
            address: 'Dirección:',
            links: 'Enlaces Rápidos',
            follow: 'Síguenos',
            rights: 'Todos los derechos reservados.'
        }
    }
};
