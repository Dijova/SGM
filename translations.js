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
            title: 'Floor Care & Cleaning Services in Lowell, MA | SGM Clean Solutions',
            description: 'Floor stripping & waxing, buffing, burnishing, deep scrub & recoat, carpet and tile care in Lowell and across Massachusetts, plus commercial, residential cleaning and snow removal. Free quote.',
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
            offers: 'Offers',
            testimonials: 'Reviews',
            floorCare: 'Floor Care',
            gallery: 'Our Work',
            area: 'Service Area',
            quote: 'Free Quote'
        },
        hero: {
            eyebrow: 'Floor care specialists · Lowell, MA',
            title: 'Floors that shine like new, across Massachusetts',
            subtitle: 'Stripping & waxing, buffing, deep scrubbing and carpet care for offices, schools, stores and homes — plus complete cleaning and snow removal.',
            cta: 'Get a Free Floor Quote',
            gallery: 'See Our Work',
            b1: 'Insured & trained crew',
            b2: 'Nights & weekends available',
            b3: 'English & Spanish'
        },
        floor: {
            alt: 'Floor stripping and waxing machine on a commercial floor',
            tag: 'Our specialty',
            eyebrow: 'Specialized floor care',
            title: 'Professional floor care for every surface',
            intro: 'VCT, vinyl, tile, concrete, hardwood and carpet: we restore worn floors and keep them protected with the right products and commercial equipment.',
            l1: { t: 'Strip & wax', d: 'Remove old finish and lay fresh coats for a deep, lasting shine.' },
            l2: { t: 'Buffing & burnishing', d: 'High-speed polish that brings back gloss between waxings.' },
            l3: { t: 'Deep scrub & recoat', d: 'Lift embedded dirt and refresh the finish without a full strip.' },
            l4: { t: 'Carpet deep cleaning', d: 'Hot-water extraction that removes stains, odors and allergens.' },
            l5: { t: 'Tile & grout', d: 'Scrubbing and sealing that keeps grout lines clean.' },
            l6: { t: 'Maintenance plans', d: 'Scheduled visits so your floors always look their best.' },
            cta: 'Quote my floors',
            s1: { t: 'Inspect', d: 'We check the floor type, wear and traffic.' },
            s2: { t: 'Strip & clean', d: 'Old finish and buildup come off.' },
            s3: { t: 'Finish & protect', d: 'New wax or sealer, then burnished.' },
            s4: { t: 'Maintain', d: 'A plan that keeps the shine.' }
        },
        work: {
            eyebrow: 'Our work',
            title: 'Photos & videos of real jobs',
            intro: 'Before-and-after results from floors, offices and homes we take care of in Lowell and across Massachusetts.',
            c1: 'Burnishing · Commercial floor',
            c2: 'Strip & wax',
            c3: 'Office cleaning',
            c4: 'Commercial',
            c5: 'Residential',
            cta: 'Open the full gallery'
        },
        area: {
            eyebrow: 'Service area',
            title: 'Based in Lowell, serving all of Massachusetts',
            intro: 'Our crew travels with commercial floor equipment to Lowell, Dracut, Chelmsford, Tewksbury, Billerica, Lawrence, Andover, Boston, Cambridge, Worcester and nearby towns.',
            directions: 'Open in Google Maps'
        },
        g: {
            meta: { title: 'Floor Care & Cleaning Gallery: Real Jobs in Lowell, MA | SGM Clean Solutions', description: 'Photos and videos of floor stripping & waxing, burnishing, carpet and tile care and cleaning jobs by SGM Clean Solutions in Lowell and across Massachusetts.', og: 'Real floor stripping, waxing, burnishing and cleaning jobs in Lowell and across Massachusetts.' },
            title: 'Floor care & cleaning gallery in Massachusetts',
            intro: 'Real jobs by the SGM crew: stripped and waxed floors, burnished hallways, offices, homes and winter snow removal across Massachusetts.',
            filter: 'Filter gallery',
            f: { all: 'All', floors: 'Floor care', video: 'Videos', commercial: 'Commercial', residential: 'Residential', snow: 'Snow removal' },
            i1: 'Burnishing · Commercial floor', i2: 'Strip & wax · Lowell', i3: 'Office cleaning', i4: 'Commercial cleaning', i5: 'Residential · Lowell', i6: 'Apartments & condos', i7: 'Our crew', i8: 'Snow removal',
            a1: 'Floor machine burnishing a commercial floor in Massachusetts', a2: 'Floor stripping and waxing on a commercial floor in Lowell, MA', a3: 'SGM crew cleaning and disinfecting office desks in Massachusetts', a4: 'Restaurant tables sanitized during a commercial cleaning visit', a5: 'Residential house cleaning in Lowell, MA', a6: 'Apartment and condominium common areas maintained in Massachusetts', a7: 'SGM Clean Solutions floor care and cleaning crew', a8: 'Snow blower clearing a driveway in Lowell, MA',
            cta: { text: 'Want your floors to look like this?', ig: 'More on Instagram' },
            seo: {
                title: 'Floor care projects in Lowell and across Massachusetts',
                p1: 'Every photo and video in this gallery comes from a real job by SGM Clean Solutions. We strip and wax VCT and vinyl floors, burnish hallways and lobbies, deep scrub and recoat high-traffic areas, extract carpets and clean and seal tile and grout for offices, schools, stores, restaurants, apartment buildings and homes.',
                h1: 'Commercial floor stripping & waxing',
                t1: 'We remove old finish and buildup, then lay new coats of floor finish and burnish them for a durable, high-gloss result, scheduled at night or on weekends so your business keeps running.',
                h2: 'Buffing, burnishing & scrub-and-recoat',
                t2: 'Between full strips, regular burnishing and scrub-and-recoat visits restore shine and extend the life of the finish at a lower cost.',
                h3: 'Carpet, tile & grout care',
                t3: 'Hot-water carpet extraction and tile and grout scrubbing and sealing remove stains, odors and embedded dirt from homes and commercial spaces.',
                areas: 'Service area: Lowell, Dracut, Chelmsford, Tewksbury, Billerica, Lawrence, Andover, Boston, Cambridge, Worcester and nearby Massachusetts towns.',
                l1: 'See our floor care services',
                l2: 'Request a free floor quote'
            }
        },
        about: {
            title: 'About SGM Clean Solutions',
            p1: 'At <strong>SGM Clean Solutions</strong> we provide high-quality cleaning and maintenance for homes and businesses in Lowell and throughout Massachusetts. Our commitment is excellence and sustainability.',
            p2: 'We use <strong>professional equipment</strong> and certified, eco-friendly products that deliver impeccable results and a healthier environment for our clients.',
            item1: '✅ Professional and trained team',
            item2: '✅ Personalized cleaning plans',
            item3: '✅ Eco-friendly products',
            item4: '✅ Bilingual service: English & Spanish',
            imageAlt: 'SGM Clean Solutions professional cleaning team in Massachusetts'
        },
        services: {
            title: 'More Cleaning Services in Massachusetts',
            intro: 'From daily office cleaning to floor restoration and winter snow removal, we serve Lowell, Boston, Cambridge, Worcester, Springfield and surrounding Massachusetts communities.',
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
            }
        },
        offers: {
            title: 'Special Offers',
            o1: { title: '5% off your first cleaning', text: 'Valid for new residential service clients' },
            o2: { title: 'Quarterly maintenance package', text: 'Save 10% by subscribing to our quarterly plan' },
            o3: { title: 'Post-construction cleaning + free sealing', text: 'Limited time only for projects over 100 m² (1,076 sq ft)' }
        },
        testimonials: {
            title: 'What Our Clients Say',
            t1: { text: '"Excellent service, they left my floors looking like new. Highly recommended."', author: '- María G., Residential Client' },
            t2: { text: '"SGM Clean Solutions transformed the look of our office. Professional and efficient."', author: '- Juan R., Office Manager' },
            t3: { text: '"Their post-construction cleaning exceeded our expectations. We will hire them again."', author: '- Carlos M., Builder' },
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
                snow: 'Snow Removal'
            },
            messageLabel: 'Additional details',
            message: 'Additional details (city, size of the space, preferred dates…)',
            consent: 'I agree that SGM Clean Solutions may store my information to respond to this quote request.',
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
            title: 'Cuidado de Pisos y Limpieza en Lowell, MA | SGM Clean Solutions',
            description: 'Decapado y encerado, pulido, abrillantado, fregado profundo y recapa, alfombras y cerámica en Lowell y todo Massachusetts, además de limpieza comercial, residencial y remoción de nieve. Cotización gratis.',
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
            offers: 'Ofertas',
            testimonials: 'Reseñas',
            floorCare: 'Pisos',
            gallery: 'Trabajos',
            area: 'Cobertura',
            quote: 'Cotización Gratis'
        },
        hero: {
            eyebrow: 'Especialistas en pisos · Lowell, MA',
            title: 'Pisos que brillan como nuevos en todo Massachusetts',
            subtitle: 'Decapado y encerado, pulido, fregado profundo y limpieza de alfombras para oficinas, escuelas, tiendas y hogares, además de limpieza completa y remoción de nieve.',
            cta: 'Cotiza tus Pisos Gratis',
            gallery: 'Ver Nuestros Trabajos',
            b1: 'Equipo asegurado y capacitado',
            b2: 'Noches y fines de semana',
            b3: 'Inglés y español'
        },
        floor: {
            alt: 'Máquina de decapado y encerado sobre un piso comercial',
            tag: 'Nuestra especialidad',
            eyebrow: 'Cuidado especializado de pisos',
            title: 'Cuidado profesional para cada tipo de piso',
            intro: 'VCT, vinilo, cerámica, concreto, madera y alfombra: restauramos pisos desgastados y los mantenemos protegidos con los productos adecuados y equipo comercial.',
            l1: { t: 'Decapado y encerado', d: 'Retiramos el acabado viejo y aplicamos capas nuevas para un brillo profundo y duradero.' },
            l2: { t: 'Pulido y abrillantado', d: 'Pulido a alta velocidad que recupera el brillo entre enceradas.' },
            l3: { t: 'Fregado profundo y recapa', d: 'Saca la suciedad incrustada y renueva el acabado sin decapar.' },
            l4: { t: 'Limpieza profunda de alfombras', d: 'Extracción con agua caliente que elimina manchas, olores y alérgenos.' },
            l5: { t: 'Cerámica y juntas', d: 'Fregado y sellado que mantiene limpias las juntas.' },
            l6: { t: 'Planes de mantenimiento', d: 'Visitas programadas para que tus pisos siempre luzcan bien.' },
            cta: 'Cotizar mis pisos',
            s1: { t: 'Inspección', d: 'Revisamos el tipo de piso, el desgaste y el tráfico.' },
            s2: { t: 'Decapado y limpieza', d: 'Retiramos el acabado viejo y la suciedad acumulada.' },
            s3: { t: 'Acabado y protección', d: 'Cera o sellador nuevo, y después abrillantado.' },
            s4: { t: 'Mantenimiento', d: 'Un plan que conserva el brillo.' }
        },
        work: {
            eyebrow: 'Nuestros trabajos',
            title: 'Fotos y videos de trabajos reales',
            intro: 'Resultados de antes y después en pisos, oficinas y hogares que atendemos en Lowell y todo Massachusetts.',
            c1: 'Abrillantado · Piso comercial',
            c2: 'Decapado y encerado',
            c3: 'Limpieza de oficinas',
            c4: 'Comercial',
            c5: 'Residencial',
            cta: 'Ver la galería completa'
        },
        area: {
            eyebrow: 'Zona de servicio',
            title: 'Desde Lowell, atendemos todo Massachusetts',
            intro: 'Nuestro equipo viaja con maquinaria comercial para pisos a Lowell, Dracut, Chelmsford, Tewksbury, Billerica, Lawrence, Andover, Boston, Cambridge, Worcester y pueblos cercanos.',
            directions: 'Abrir en Google Maps'
        },
        g: {
            meta: { title: 'Galería de Pisos y Limpieza: Trabajos Reales en Lowell, MA | SGM Clean Solutions', description: 'Fotos y videos de decapado y encerado, abrillantado, alfombras, cerámica y trabajos de limpieza de SGM Clean Solutions en Lowell y todo Massachusetts.', og: 'Trabajos reales de decapado, encerado, abrillantado y limpieza en Lowell y todo Massachusetts.' },
            title: 'Galería de pisos y limpieza en Massachusetts',
            intro: 'Trabajos reales del equipo SGM: pisos decapados y encerados, pasillos abrillantados, oficinas, hogares y remoción de nieve en todo Massachusetts.',
            filter: 'Filtrar galería',
            f: { all: 'Todo', floors: 'Pisos', video: 'Videos', commercial: 'Comercial', residential: 'Residencial', snow: 'Nieve' },
            i1: 'Abrillantado · Piso comercial', i2: 'Decapado y encerado · Lowell', i3: 'Limpieza de oficinas', i4: 'Limpieza comercial', i5: 'Residencial · Lowell', i6: 'Apartamentos y condominios', i7: 'Nuestro equipo', i8: 'Remoción de nieve',
            a1: 'Máquina abrillantando un piso comercial en Massachusetts', a2: 'Decapado y encerado de un piso comercial en Lowell, MA', a3: 'Equipo SGM limpiando y desinfectando escritorios de oficina en Massachusetts', a4: 'Mesas de restaurante desinfectadas en una limpieza comercial', a5: 'Limpieza residencial de una casa en Lowell, MA', a6: 'Áreas comunes de apartamentos y condominios en Massachusetts', a7: 'Equipo de cuidado de pisos y limpieza de SGM Clean Solutions', a8: 'Quitanieves limpiando una entrada en Lowell, MA',
            cta: { text: '¿Quieres que tus pisos luzcan así?', ig: 'Más en Instagram' },
            seo: {
                title: 'Proyectos de cuidado de pisos en Lowell y todo Massachusetts',
                p1: 'Cada foto y video de esta galería es de un trabajo real de SGM Clean Solutions. Decapamos y enceramos pisos VCT y de vinilo, abrillantamos pasillos y vestíbulos, hacemos fregado profundo y recapa en zonas de alto tráfico, limpiamos alfombras por extracción y limpiamos y sellamos cerámica y juntas en oficinas, escuelas, tiendas, restaurantes, edificios de apartamentos y hogares.',
                h1: 'Decapado y encerado de pisos comerciales',
                t1: 'Retiramos el acabado viejo y la suciedad acumulada, aplicamos capas nuevas de acabado y las abrillantamos para un resultado duradero y de alto brillo, en horario nocturno o de fin de semana para que tu negocio siga funcionando.',
                h2: 'Pulido, abrillantado y fregado con recapa',
                t2: 'Entre decapados completos, el abrillantado periódico y el fregado con recapa devuelven el brillo y alargan la vida del acabado a menor costo.',
                h3: 'Alfombras, cerámica y juntas',
                t3: 'La extracción con agua caliente y el fregado y sellado de cerámica y juntas eliminan manchas, olores y suciedad incrustada en hogares y espacios comerciales.',
                areas: 'Zona de servicio: Lowell, Dracut, Chelmsford, Tewksbury, Billerica, Lawrence, Andover, Boston, Cambridge, Worcester y pueblos cercanos de Massachusetts.',
                l1: 'Ver nuestros servicios de pisos',
                l2: 'Pedir cotización gratis de pisos'
            }
        },
        about: {
            title: 'Sobre SGM Clean Solutions',
            p1: 'En <strong>SGM Clean Solutions</strong> ofrecemos limpieza y mantenimiento de alta calidad para hogares y negocios en Lowell y todo Massachusetts. Nuestro compromiso es la excelencia y la sostenibilidad.',
            p2: 'Utilizamos <strong>equipos profesionales</strong> y productos certificados y ecológicos que garantizan resultados impecables y un ambiente más saludable para nuestros clientes.',
            item1: '✅ Equipo profesional y capacitado',
            item2: '✅ Planes de limpieza personalizados',
            item3: '✅ Productos ecológicos',
            item4: '✅ Atención bilingüe: inglés y español',
            imageAlt: 'Equipo profesional de limpieza de SGM Clean Solutions en Massachusetts'
        },
        services: {
            title: 'Más Servicios de Limpieza en Massachusetts',
            intro: 'Desde la limpieza diaria de oficinas hasta la restauración de pisos y la remoción de nieve en invierno, atendemos Lowell, Boston, Cambridge, Worcester, Springfield y comunidades cercanas de Massachusetts.',
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
            }
        },
        offers: {
            title: 'Ofertas Especiales',
            o1: { title: '5% de descuento en tu primera limpieza', text: 'Válido para nuevos clientes de servicio residencial' },
            o2: { title: 'Paquete de mantenimiento trimestral', text: 'Ahorra 10% suscribiéndote a nuestro plan trimestral' },
            o3: { title: 'Limpieza post-construcción + sellado gratis', text: 'Por tiempo limitado para proyectos de más de 100 m² (1,076 pies²)' }
        },
        testimonials: {
            title: 'Lo que dicen nuestros clientes',
            t1: { text: '"Excelente servicio, dejaron mis pisos como nuevos. Muy recomendados."', author: '- María G., Cliente residencial' },
            t2: { text: '"SGM Clean Solutions transformó la imagen de nuestra oficina. Profesionales y eficientes."', author: '- Juan R., Gerente de oficina' },
            t3: { text: '"Su limpieza post-construcción superó nuestras expectativas. Los volveremos a contratar."', author: '- Carlos M., Constructor' },
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
                snow: 'Remoción de Nieve'
            },
            messageLabel: 'Detalles adicionales',
            message: 'Detalles adicionales (ciudad, tamaño del espacio, fechas preferidas…)',
            consent: 'Acepto que SGM Clean Solutions almacene mis datos para responder a esta solicitud de cotización.',
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
