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
            title: 'Cleaning Services in Lowell, MA & Massachusetts | SGM Clean Solutions',
            description: 'SGM Clean Solutions offers professional residential, commercial, office and floor cleaning, stripping & waxing and snow removal in Lowell and across Massachusetts. Request a free quote today.',
            ogDescription: 'Professional residential, commercial and floor cleaning in Lowell and across Massachusetts. Request a free quote today.'
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
            testimonials: 'Testimonials',
            tips: 'Cleaning Tips',
            quote: 'Free Quote'
        },
        hero: {
            title: 'Professional Cleaning & Floor Care Services in Lowell and Massachusetts',
            subtitle: 'Residential, commercial and office cleaning, floor stripping & waxing and snow removal — done right, on schedule.',
            cta: 'Get a Free Quote',
            tips: 'Free Cleaning Tips'
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
            title: 'Our Cleaning Services in Massachusetts',
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
        },
        tips: {
            meta: {
                title: 'Professional Cleaning Tips for Massachusetts Homes & Offices | SGM Clean Solutions',
                description: 'Expert cleaning tips for homes and businesses in Massachusetts: benefits of professional cleaning, floor care by material and common office cleaning mistakes. By SGM Clean Solutions, Lowell, MA.',
                ogTitle: 'Professional Cleaning Tips for Massachusetts Homes & Offices',
                ogDescription: 'Benefits of professional cleaning, floor care by material and common office cleaning mistakes — expert advice from SGM Clean Solutions.'
            },
            back: 'Back to main website',
            hero: {
                title: '🧽 Professional Cleaning Tips for Massachusetts Homes & Offices',
                subtitle: 'Expert advice from SGM Clean Solutions',
                cta: 'Visit Our Main Website'
            },
            intro: {
                title: '🎯 Professional Cleaning Services in Massachusetts',
                text: 'Practical cleaning guides for homes, offices and businesses in Lowell, Boston, Worcester, Springfield, Cambridge and the rest of Massachusetts, written by the SGM Clean Solutions team.'
            },
            a1: {
                title: '5 Benefits of Hiring Professional Cleaning Services for Your Home or Business in Massachusetts',
                intro: 'Maintaining a clean and healthy space can be challenging, especially when daily responsibilities leave little time. In homes and offices alike, professional cleaning has become a necessity, not just for comfort, but for health and efficiency. Here are the main benefits of hiring professional cleaning services in Massachusetts.',
                h1: 'Time and Effort Savings',
                p1: 'Delegating cleaning to experts allows you to focus on your personal or work priorities. Professionals complete tasks quickly and efficiently without compromising quality.',
                h2: 'Specialized Equipment and Products',
                p2: 'SGM Clean Solutions uses modern machinery and professional-grade products suited to each type of surface, guaranteeing results that cannot be achieved with household cleaning.',
                h3: 'Improved Health and Hygiene',
                p3: 'Professional cleaning reduces allergens, bacteria and viruses. This is especially important in homes with children, seniors or people with allergies, as well as in high-traffic offices.',
                h4: 'Specialized Care for Each Floor Type',
                p4: 'Floors are one of the most delicate surfaces, and the wrong products can damage them. We use the right technique for each material: wood, ceramic, marble or vinyl.',
                h5: 'Higher Perceived Value of Your Space',
                p5: 'A clean space projects professionalism and care. Whether it is a business serving clients or a home you want to show or rent, professional cleaning makes a better impression.',
                ctaText: '🔹 Ready to improve your space?',
                cta: 'Get a Free Quote Today'
            },
            a2: {
                title: 'How to Keep Your Floors Clean and Shiny Between Professional Cleanings',
                intro: 'Floors are the visual foundation of any space. However, keeping them spotless between deep cleanings can be complicated. Here are some practical tips to keep them looking great without damaging them.',
                h1: 'Wood Floor Care',
                l1a: 'Use a dry or barely damp microfiber mop',
                l1b: 'Avoid excess water (it can make the wood swell)',
                l1c: 'Use neutral cleaners made for wood',
                l1d: 'Place mats at entrances to keep dirt out',
                h2: 'Ceramic or Porcelain Floor Care',
                l2a: 'Sweep or vacuum frequently to remove debris',
                l2b: 'Use warm water with a neutral detergent',
                l2c: 'Avoid highly acidic cleaners that dull the shine',
                h3: 'Vinyl or Laminate Floors',
                l3a: 'Do not use steam',
                l3b: 'Use gentle products applied with a damp cloth',
                l3c: 'Do not drag furniture without protection',
                h4: 'What to Avoid in All Cases',
                l4a: 'Abrasive products (like undiluted bleach)',
                l4b: 'Hard brushes or metal sponges',
                l4c: 'Excess water or prolonged moisture',
                h5: 'Recommended Frequency',
                p5: 'Do a light cleaning daily in high-traffic areas and a deep cleaning at least once a month with a professional service.',
                ctaText: '🔹 Your floors no longer shine like before?',
                cta: 'Schedule Professional Floor Cleaning'
            },
            a3: {
                title: 'Common Office Cleaning Mistakes and How to Avoid Them (Especially When Receiving Clients)',
                intro: "Office cleaning goes beyond wiping surfaces: it is a key part of your company's image. However, many businesses make mistakes that affect health, order and how professional the place looks. Here are the most frequent ones and how to avoid them.",
                h1: 'Using the Wrong Products',
                p1: 'Each surface requires a specific product. Using disinfectants on desks without knowing their composition can damage them or leave residue. The same applies to floors and bathrooms.',
                h2: 'Ignoring "Invisible" Areas',
                p2: 'Switches, handles, keyboards, phones and the areas under desks are often overlooked, but they accumulate bacteria and affect hygiene.',
                h3: 'Cleaning Only When Dirt Is Visible',
                p3: 'Preventive cleaning avoids build-up, odors and the spread of germs. Waiting until dirt is visible is a reactive and inefficient approach.',
                h4: 'No Professional Cleaning Routine',
                p4: 'General tidying by office staff does not replace a professional service. Without the right equipment or training, time is wasted and deep results are not guaranteed.',
                h5: 'No Cleaning Checklist',
                p5: 'A structured protocol prevents omissions. Professional companies like SGM Clean Solutions work with validated checklists to ensure complete coverage of the space.',
                ctaText: '🔹 Your office deserves an impeccable image.',
                cta: 'Ask About Our Business Plans'
            },
            contact: {
                title: 'Ready for Professional Cleaning in Massachusetts? 🌟',
                text: 'Contact SGM Clean Solutions today for a free consultation and quote!',
                call: 'Call Now',
                email: 'Email Us'
            }
        }
    },

    es: {
        meta: {
            title: 'Servicios de Limpieza en Lowell, MA y Massachusetts | SGM Clean Solutions',
            description: 'SGM Clean Solutions ofrece limpieza profesional residencial, comercial, de oficinas y de pisos, decapado y encerado, y remoción de nieve en Lowell y todo Massachusetts. Solicite una cotización gratuita.',
            ogDescription: 'Limpieza profesional residencial, comercial y de pisos en Lowell y todo Massachusetts. Solicite una cotización gratuita.'
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
            testimonials: 'Testimonios',
            tips: 'Consejos de Limpieza',
            quote: 'Cotización Gratis'
        },
        hero: {
            title: 'Servicios Profesionales de Limpieza y Cuidado de Pisos en Lowell y Massachusetts',
            subtitle: 'Limpieza residencial, comercial y de oficinas, decapado y encerado de pisos y remoción de nieve: bien hecho y a tiempo.',
            cta: 'Cotización Gratuita',
            tips: 'Consejos de Limpieza Gratis'
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
            title: 'Nuestros Servicios de Limpieza en Massachusetts',
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
        },
        tips: {
            meta: {
                title: 'Consejos Profesionales de Limpieza para Hogares y Oficinas en Massachusetts | SGM Clean Solutions',
                description: 'Consejos expertos de limpieza para hogares y negocios en Massachusetts: beneficios de la limpieza profesional, cuidado de pisos según el material y errores comunes en la limpieza de oficinas. Por SGM Clean Solutions, Lowell, MA.',
                ogTitle: 'Consejos Profesionales de Limpieza para Hogares y Oficinas en Massachusetts',
                ogDescription: 'Beneficios de la limpieza profesional, cuidado de pisos según el material y errores comunes en oficinas: consejos de SGM Clean Solutions.'
            },
            back: 'Volver al sitio principal',
            hero: {
                title: '🧽 Consejos Profesionales de Limpieza para Hogares y Oficinas en Massachusetts',
                subtitle: 'Consejos expertos de SGM Clean Solutions',
                cta: 'Visitar el Sitio Principal'
            },
            intro: {
                title: '🎯 Servicios Profesionales de Limpieza en Massachusetts',
                text: 'Guías prácticas de limpieza para hogares, oficinas y negocios en Lowell, Boston, Worcester, Springfield, Cambridge y el resto de Massachusetts, escritas por el equipo de SGM Clean Solutions.'
            },
            a1: {
                title: '5 Beneficios de Contratar Servicios Profesionales de Limpieza para tu Hogar o Negocio en Massachusetts',
                intro: 'Mantener un espacio limpio y saludable puede ser un desafío, sobre todo cuando las responsabilidades diarias dejan poco tiempo. Tanto en hogares como en oficinas, la limpieza profesional se ha convertido en una necesidad, no solo por comodidad, sino por salud y eficiencia. Estos son los principales beneficios de contratar servicios profesionales de limpieza en Massachusetts.',
                h1: 'Ahorro de Tiempo y Esfuerzo',
                p1: 'Delegar la limpieza a expertos te permite enfocarte en tus prioridades personales o laborales. Los profesionales realizan las tareas de forma rápida y eficiente sin sacrificar la calidad.',
                h2: 'Equipos y Productos Especializados',
                p2: 'SGM Clean Solutions utiliza maquinaria moderna y productos de grado profesional adecuados para cada tipo de superficie, garantizando resultados que no se logran con la limpieza doméstica.',
                h3: 'Mejor Salud e Higiene',
                p3: 'La limpieza profesional reduce alérgenos, bacterias y virus. Esto es especialmente importante en hogares con niños, adultos mayores o personas con alergias, y en oficinas con mucho tránsito.',
                h4: 'Cuidado Especializado para Cada Tipo de Piso',
                p4: 'Los pisos son una de las superficies más delicadas y los productos incorrectos pueden dañarlos. Usamos la técnica adecuada para cada material: madera, cerámica, mármol o vinilo.',
                h5: 'Mayor Valor Percibido de tu Espacio',
                p5: 'Un espacio limpio transmite profesionalismo y cuidado. Ya sea un negocio que atiende clientes o una vivienda que quieres mostrar o alquilar, la limpieza profesional causa una mejor impresión.',
                ctaText: '🔹 ¿Listo para mejorar tu espacio?',
                cta: 'Pide tu Cotización Gratis Hoy'
            },
            a2: {
                title: 'Cómo Mantener tus Pisos Limpios y Brillantes entre Limpiezas Profesionales',
                intro: 'Los pisos son la base visual de cualquier espacio. Sin embargo, mantenerlos impecables entre limpiezas profundas puede ser complicado. Aquí tienes algunos consejos prácticos para que luzcan bien sin dañarlos.',
                h1: 'Cuidado de Pisos de Madera',
                l1a: 'Usa un trapeador de microfibra seco o apenas húmedo',
                l1b: 'Evita el exceso de agua (puede hinchar la madera)',
                l1c: 'Usa limpiadores neutros específicos para madera',
                l1d: 'Coloca tapetes en las entradas para evitar la suciedad',
                h2: 'Cuidado de Pisos de Cerámica o Porcelanato',
                l2a: 'Barre o aspira con frecuencia para eliminar residuos',
                l2b: 'Usa agua tibia con detergente neutro',
                l2c: 'Evita limpiadores muy ácidos que opacan el brillo',
                h3: 'Pisos de Vinilo o Laminados',
                l3a: 'No uses vapor',
                l3b: 'Usa productos suaves aplicados con un paño húmedo',
                l3c: 'No arrastres muebles sin protección',
                h4: 'Qué Evitar en Todos los Casos',
                l4a: 'Productos abrasivos (como cloro puro)',
                l4b: 'Cepillos duros o esponjas metálicas',
                l4c: 'Exceso de agua o humedad prolongada',
                h5: 'Frecuencia Recomendada',
                p5: 'Haz una limpieza superficial diaria en zonas de mucho tránsito y una limpieza profunda al menos una vez al mes con un servicio profesional.',
                ctaText: '🔹 ¿Tus pisos ya no brillan como antes?',
                cta: 'Agenda una Limpieza Profesional de Pisos'
            },
            a3: {
                title: 'Errores Comunes en la Limpieza de Oficinas y Cómo Evitarlos (Sobre Todo al Recibir Clientes)',
                intro: 'La limpieza de oficinas va más allá de pasar un paño: es una parte clave de la imagen de tu empresa. Sin embargo, muchos negocios cometen errores que afectan la salud, el orden y la imagen profesional del lugar. Estos son los más frecuentes y cómo evitarlos.',
                h1: 'Usar Productos Incorrectos',
                p1: 'Cada superficie requiere un producto específico. Usar desinfectantes en escritorios sin conocer su composición puede dañarlos o dejar residuos. Lo mismo aplica para pisos y baños.',
                h2: 'Olvidar las Zonas "Invisibles"',
                p2: 'Interruptores, manijas, teclados, teléfonos y la parte de abajo de los escritorios suelen pasarse por alto, pero acumulan bacterias y afectan la higiene.',
                h3: 'Limpiar Solo Cuando se Ve la Suciedad',
                p3: 'La limpieza preventiva evita acumulaciones, olores y la propagación de gérmenes. Esperar a ver la suciedad es un enfoque reactivo e ineficiente.',
                h4: 'No Tener una Rutina de Limpieza Profesional',
                p4: 'El orden general que hace el personal de la oficina no reemplaza un servicio profesional. Sin el equipo o la capacitación adecuados se pierde tiempo y no se garantizan resultados profundos.',
                h5: 'No Tener una Lista de Verificación',
                p5: 'Un protocolo estructurado evita omisiones. Empresas profesionales como SGM Clean Solutions trabajan con listas validadas para cubrir todo el espacio.',
                ctaText: '🔹 Tu oficina merece una imagen impecable.',
                cta: 'Conoce Nuestros Planes para Empresas'
            },
            contact: {
                title: '¿Listo para una Limpieza Profesional en Massachusetts? 🌟',
                text: '¡Contacta hoy a SGM Clean Solutions para una consulta y cotización gratuitas!',
                call: 'Llamar Ahora',
                email: 'Escríbenos'
            }
        }
    }
};
