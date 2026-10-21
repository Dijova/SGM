#!/usr/bin/env python3
"""
Builds the service pages (services/<slug>/index.html) and their EN/ES strings
(services/services-i18n.js) from the data below.

    python3 tools/build_services.py

Edit the texts here and run the script again; don't edit the generated files.
"""
import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = 'https://sgmlcleansolutions.com'

TOWNS_MA = ['Lowell', 'Dracut', 'Chelmsford', 'Tewksbury', 'Billerica', 'Westford', 'Tyngsborough',
            'Lawrence', 'Methuen', 'Andover', 'North Andover', 'Haverhill', 'Wilmington', 'Burlington',
            'Woburn', 'Bedford', 'Acton', 'Littleton']
TOWNS_NH = ['Nashua', 'Hudson', 'Salem', 'Pelham', 'Windham', 'Londonderry', 'Derry', 'Merrimack']

# Shared strings for every service page (sp.c.*)
COMMON = {
    'en': {
        'services': 'Services',
        'quote': 'Get a free quote',
        'call': 'Call (954) 245-1566',
        'included': "What's included",
        'ideal': 'Ideal for',
        'how': 'How it works',
        's1t': '1. Tell us about your space', 's1d': 'Fill out the quote form or call us. We answer in English and Spanish.',
        's2t': '2. Free walkthrough & quote', 's2d': 'We visit or review photos and send you a clear price with no surprises.',
        's3t': '3. We get it done', 's3d': 'Our insured crew works on your schedule — days, nights or weekends.',
        'faq': 'Frequently asked questions',
        'areaTitle': 'Service area: about 25 miles around Lowell, MA',
        'areaText': 'We serve homes and businesses in ' + ', '.join(TOWNS_MA) +
                    ' in Massachusetts, plus ' + ', '.join(TOWNS_NH) + ' in southern New Hampshire.',
        'related': 'Other services',
        'bandTitle': 'Ready for a cleaner space?',
        'bandText': 'Tell us what you need and get a free, no-obligation quote within 24 hours.',
        'gallery': 'See our real work in the gallery',
    },
    'es': {
        'services': 'Servicios',
        'quote': 'Solicita tu cotización gratis',
        'call': 'Llama al (954) 245-1566',
        'included': 'Qué incluye',
        'ideal': 'Ideal para',
        'how': 'Cómo funciona',
        's1t': '1. Cuéntanos sobre tu espacio', 's1d': 'Llena el formulario de cotización o llámanos. Atendemos en inglés y español.',
        's2t': '2. Visita y cotización gratis', 's2d': 'Visitamos el lugar o revisamos fotos y te enviamos un precio claro, sin sorpresas.',
        's3t': '3. Hacemos el trabajo', 's3d': 'Nuestro equipo asegurado trabaja en tu horario: de día, de noche o los fines de semana.',
        'faq': 'Preguntas frecuentes',
        'areaTitle': 'Zona de servicio: unas 25 millas alrededor de Lowell, MA',
        'areaText': 'Atendemos hogares y negocios en ' + ', '.join(TOWNS_MA) +
                    ' en Massachusetts, y en ' + ', '.join(TOWNS_NH) + ' en el sur de New Hampshire.',
        'related': 'Otros servicios',
        'bandTitle': '¿Listo para un espacio más limpio?',
        'bandText': 'Cuéntanos qué necesitas y recibe una cotización gratis y sin compromiso en menos de 24 horas.',
        'gallery': 'Mira nuestros trabajos reales en la galería',
    },
}

# Services in order of business priority. `key` matches the quote form value.
SERVICES = [
    {
        'key': 'office', 'slug': 'office-cleaning',
        'img': 'office-cleaning-massachusetts.jpg', 'w': 900, 'h': 600,
        'img2': 'conference-room-floor-waxed-burnished-massachusetts.jpg', 'w2': 900, 'h2': 1200,
        'serviceType': 'Office cleaning',
        'en': {
            'name': 'Office Cleaning',
            'metaTitle': 'Office Cleaning in Lowell, MA & Southern NH | SGML Clean Solutions',
            'metaDesc': 'Daily, weekly or nightly office cleaning in Lowell, Chelmsford, Billerica, Nashua and nearby towns. Desks, restrooms, kitchens and floors. Free quote.',
            'eyebrow': 'Office cleaning · Lowell, MA',
            'h1': 'Office cleaning that keeps your team healthy and your clients impressed',
            'intro': 'Reliable daily, weekly or after-hours cleaning for offices of every size within 25 miles of Lowell, MA and southern New Hampshire.',
            'p1': 'A clean office is more productive and makes a great first impression. Our trained crew follows a checklist built around your space, so desks, restrooms, kitchens and floors are always ready when your team arrives.',
            'p2': 'Because floor care is our specialty, we also keep your carpets, VCT and tile looking their best with periodic deep cleaning, buffing and burnishing — no need to hire a second company.',
            'inc': ['Dusting and disinfecting desks, phones and high-touch surfaces',
                    'Restroom cleaning, sanitizing and restocking',
                    'Kitchen and break room cleaning',
                    'Trash and recycling removal',
                    'Vacuuming, mopping and spot carpet cleaning',
                    'Periodic floor buffing, burnishing and carpet extraction'],
            'ideal': ['Corporate offices', 'Medical and dental offices', 'Real estate and law firms', 'Coworking spaces', 'Schools and training centers'],
            'faq': [('Can you clean after business hours?', 'Yes. Most of our office clients prefer evening or early-morning cleaning so the work never interrupts their team.'),
                    ('Do you bring your own supplies and equipment?', 'Yes. We bring professional equipment and eco-friendly products. If you prefer specific products, we can use yours.'),
                    ('How often should my office be cleaned?', 'It depends on your traffic. Small offices usually choose 1–3 visits per week; busy offices and clinics often need daily service. We recommend a plan during the free walkthrough.')],
        },
        'es': {
            'name': 'Limpieza de oficinas',
            'metaTitle': 'Limpieza de oficinas en Lowell, MA y sur de NH | SGML Clean Solutions',
            'metaDesc': 'Limpieza de oficinas diaria, semanal o nocturna en Lowell, Chelmsford, Billerica, Nashua y alrededores. Escritorios, baños, cocinas y pisos. Cotización gratis.',
            'eyebrow': 'Limpieza de oficinas · Lowell, MA',
            'h1': 'Limpieza de oficinas que mantiene sano a tu equipo e impresiona a tus clientes',
            'intro': 'Limpieza confiable diaria, semanal o fuera de horario para oficinas de todos los tamaños a 25 millas de Lowell, MA y el sur de New Hampshire.',
            'p1': 'Una oficina limpia es más productiva y causa una gran primera impresión. Nuestro equipo capacitado sigue una lista de tareas adaptada a tu espacio, para que escritorios, baños, cocinas y pisos estén listos cuando llegue tu equipo.',
            'p2': 'Como el cuidado de pisos es nuestra especialidad, también mantenemos tus alfombras, VCT y baldosas en perfecto estado con limpiezas profundas, pulido y abrillantado periódicos, sin contratar otra empresa.',
            'inc': ['Limpieza y desinfección de escritorios, teléfonos y superficies de alto contacto',
                    'Limpieza, desinfección y reposición de insumos en baños',
                    'Limpieza de cocina y sala de descanso',
                    'Retiro de basura y reciclaje',
                    'Aspirado, trapeado y limpieza de manchas en alfombras',
                    'Pulido, abrillantado de pisos y extracción de alfombras periódicos'],
            'ideal': ['Oficinas corporativas', 'Consultorios médicos y dentales', 'Inmobiliarias y bufetes', 'Espacios de coworking', 'Escuelas y centros de formación'],
            'faq': [('¿Pueden limpiar fuera del horario laboral?', 'Sí. La mayoría de nuestros clientes de oficinas prefieren limpieza en la noche o temprano en la mañana para no interrumpir a su equipo.'),
                    ('¿Traen sus propios productos y equipos?', 'Sí. Llevamos equipo profesional y productos ecológicos. Si prefieres productos específicos, podemos usar los tuyos.'),
                    ('¿Con qué frecuencia debo limpiar mi oficina?', 'Depende del tráfico. Las oficinas pequeñas suelen elegir 1 a 3 visitas por semana; las oficinas concurridas y clínicas suelen necesitar servicio diario. Te recomendamos un plan en la visita gratuita.')],
        },
    },
    {
        'key': 'commercial', 'slug': 'commercial-cleaning',
        'img': 'commercial-cleaning-massachusetts.jpg', 'w': 900, 'h': 600,
        'img2': 'cafeteria-floor-high-gloss-finish-massachusetts.jpg', 'w2': 900, 'h2': 1200,
        'serviceType': 'Commercial cleaning',
        'en': {
            'name': 'Commercial Cleaning',
            'metaTitle': 'Commercial Cleaning in Lowell, MA & Southern NH | SGML Clean Solutions',
            'metaDesc': 'Commercial cleaning for stores, clinics, gyms, warehouses and buildings in Lowell, Lawrence, Andover, Nashua and nearby towns, plus floor stripping and waxing. Free quote.',
            'eyebrow': 'Commercial cleaning · Lowell, MA',
            'h1': 'Commercial cleaning for stores, clinics, gyms and buildings',
            'intro': 'Janitorial and deep cleaning for commercial spaces within 25 miles of Lowell, MA and southern New Hampshire, with floor care included.',
            'p1': 'From retail stores to clinics, gyms and warehouses, we build a cleaning program around your hours, traffic and industry requirements. You get a consistent crew, clear communication and a space that is always ready for customers.',
            'p2': 'Our floor care team strips, waxes, scrubs and burnishes VCT, vinyl, tile and concrete floors so your high-traffic areas stay safe and shiny all year.',
            'inc': ['Janitorial service on a daily, weekly or custom schedule',
                    'Lobbies, hallways, stairwells and common areas',
                    'Restrooms and locker rooms sanitized and restocked',
                    'Floor stripping, waxing, scrubbing and burnishing',
                    'Carpet extraction and tile and grout cleaning',
                    'Post-construction and move-in/move-out cleaning'],
            'ideal': ['Retail stores and showrooms', 'Clinics and therapy centers', 'Gyms and fitness studios', 'Warehouses and light industrial', 'Churches and community centers'],
            'faq': [('Do you offer one-time deep cleans?', 'Yes. Besides recurring contracts we do one-time deep cleans, post-construction cleanups and floor restorations.'),
                    ('Are you insured?', 'Yes. SGML Clean Solutions is insured and our crew is trained in commercial cleaning and floor care.'),
                    ('Can you work nights and weekends?', 'Yes. We schedule around your business hours so cleaning never gets in the way of your customers.')],
        },
        'es': {
            'name': 'Limpieza comercial',
            'metaTitle': 'Limpieza comercial en Lowell, MA y sur de NH | SGML Clean Solutions',
            'metaDesc': 'Limpieza comercial para tiendas, clínicas, gimnasios, bodegas y edificios en Lowell, Lawrence, Andover, Nashua y alrededores, con decapado y encerado de pisos. Cotización gratis.',
            'eyebrow': 'Limpieza comercial · Lowell, MA',
            'h1': 'Limpieza comercial para tiendas, clínicas, gimnasios y edificios',
            'intro': 'Limpieza de mantenimiento y profunda para espacios comerciales a 25 millas de Lowell, MA y el sur de New Hampshire, con cuidado de pisos incluido.',
            'p1': 'Desde tiendas hasta clínicas, gimnasios y bodegas, creamos un programa de limpieza según tu horario, tráfico y requisitos de tu industria. Tendrás un equipo fijo, comunicación clara y un espacio siempre listo para tus clientes.',
            'p2': 'Nuestro equipo de pisos decapa, encera, friega y abrillanta pisos de VCT, vinil, baldosa y concreto para que tus zonas de alto tráfico se mantengan seguras y brillantes todo el año.',
            'inc': ['Servicio de limpieza diario, semanal o con horario personalizado',
                    'Recepciones, pasillos, escaleras y áreas comunes',
                    'Baños y vestidores desinfectados y abastecidos',
                    'Decapado, encerado, fregado y abrillantado de pisos',
                    'Extracción de alfombras y limpieza de baldosas y juntas',
                    'Limpieza post-construcción y de mudanzas'],
            'ideal': ['Tiendas y showrooms', 'Clínicas y centros de terapia', 'Gimnasios y estudios fitness', 'Bodegas e industria ligera', 'Iglesias y centros comunitarios'],
            'faq': [('¿Ofrecen limpiezas profundas de una sola vez?', 'Sí. Además de contratos recurrentes hacemos limpiezas profundas únicas, limpiezas post-construcción y restauración de pisos.'),
                    ('¿Están asegurados?', 'Sí. SGML Clean Solutions cuenta con seguro y nuestro equipo está capacitado en limpieza comercial y cuidado de pisos.'),
                    ('¿Pueden trabajar de noche y fines de semana?', 'Sí. Nos adaptamos a tu horario para que la limpieza nunca interfiera con tus clientes.')],
        },
    },
    {
        'key': 'junk', 'slug': 'junk-removal',
        'img': 'junk-removal-truck-massachusetts-new-hampshire.jpg', 'w': 900, 'h': 600,
        'img2': 'junk-removal-crew-lowell-ma.jpg', 'w2': 1200, 'h2': 800,
        'serviceType': 'Junk removal',
        'en': {
            'name': 'Junk Removal',
            'metaTitle': 'Junk Removal in Lowell, MA & Southern NH | SGML Clean Solutions',
            'metaDesc': 'Fast junk removal and cleanouts in Lowell, Dracut, Tewksbury, Methuen, Nashua, Salem and nearby towns: furniture, appliances, debris, garages and basements. Free quote.',
            'eyebrow': 'Junk removal · Lowell, MA',
            'h1': 'Junk removal and cleanouts, done fast and left clean',
            'intro': 'We haul away furniture, appliances and debris from homes and businesses within 25 miles of Lowell, MA and southern New Hampshire — and sweep up before we leave.',
            'p1': 'Our crew does all the lifting and loading with our own truck. We handle single items, full rooms and complete property cleanouts, and we leave the space broom-clean and ready to use.',
            'p2': 'Since we are a cleaning company, we can follow the cleanout with a deep clean of the space — perfect for move-outs, rentals and properties getting ready for sale.',
            'inc': ['Furniture, mattresses and appliance removal',
                    'Garage, basement and attic cleanouts',
                    'Office and commercial cleanouts',
                    'Construction and renovation debris',
                    'Yard waste and outdoor items',
                    'Broom-clean finish, with optional deep cleaning'],
            'ideal': ['Homeowners and renters', 'Landlords and property managers', 'Realtors preparing a listing', 'Offices relocating', 'Contractors after a renovation'],
            'faq': [('How is junk removal priced?', 'Price depends on the volume, weight and type of items. Send us a few photos and we will give you a free quote.'),
                    ('Do you do the lifting?', 'Yes. Our crew does all the lifting, loading and hauling — you just point to what goes.'),
                    ('What do you do with the items?', 'We donate or recycle what we can and dispose of the rest responsibly at approved facilities.')],
        },
        'es': {
            'name': 'Retiro de escombros y objetos',
            'metaTitle': 'Retiro de escombros y objetos en Lowell, MA y sur de NH | SGML Clean Solutions',
            'metaDesc': 'Retiro rápido de objetos y vaciado de espacios en Lowell, Dracut, Tewksbury, Methuen, Nashua, Salem y alrededores: muebles, electrodomésticos, escombros, garajes y sótanos. Cotización gratis.',
            'eyebrow': 'Junk removal · Lowell, MA',
            'h1': 'Retiro de objetos y vaciado de espacios, rápido y dejando todo limpio',
            'intro': 'Retiramos muebles, electrodomésticos y escombros de hogares y negocios a 25 millas de Lowell, MA y el sur de New Hampshire, y barremos antes de irnos.',
            'p1': 'Nuestro equipo carga todo con nuestro propio camión. Retiramos artículos individuales, habitaciones completas o vaciamos propiedades enteras, y dejamos el espacio barrido y listo para usar.',
            'p2': 'Como somos una empresa de limpieza, podemos hacer una limpieza profunda después del vaciado, ideal para mudanzas, alquileres y propiedades a la venta.',
            'inc': ['Retiro de muebles, colchones y electrodomésticos',
                    'Vaciado de garajes, sótanos y áticos',
                    'Vaciado de oficinas y locales comerciales',
                    'Escombros de construcción y remodelación',
                    'Desechos de jardín y objetos exteriores',
                    'Espacio barrido al final, con limpieza profunda opcional'],
            'ideal': ['Propietarios e inquilinos', 'Arrendadores y administradores', 'Agentes inmobiliarios', 'Oficinas en mudanza', 'Contratistas tras una remodelación'],
            'faq': [('¿Cómo se cotiza el retiro de objetos?', 'El precio depende del volumen, el peso y el tipo de objetos. Envíanos unas fotos y te damos una cotización gratis.'),
                    ('¿Ustedes cargan los objetos?', 'Sí. Nuestro equipo levanta, carga y transporta todo; tú solo nos indicas qué se va.'),
                    ('¿Qué hacen con los objetos?', 'Donamos o reciclamos lo que se puede y desechamos el resto de forma responsable en centros autorizados.')],
        },
    },
    {
        'key': 'snow', 'slug': 'snow-removal',
        'img': 'snow-removal-lowell-ma.jpg', 'w': 620, 'h': 420,
        'img2': 'snow-removal-crew-lowell-ma.jpg', 'w2': 1200, 'h2': 800,
        'serviceType': 'Snow removal',
        'en': {
            'name': 'Snow Removal',
            'metaTitle': 'Snow Removal in Lowell, MA & Southern NH | SGML Clean Solutions',
            'metaDesc': 'Snow removal, shoveling, salting and roof snow removal for homes and businesses in Lowell, Chelmsford, Dracut, Tewksbury, Nashua and nearby towns. Free quote.',
            'eyebrow': 'Snow removal · Lowell, MA',
            'h1': 'Snow removal that keeps your property safe and open all winter',
            'intro': 'Driveways, walkways, entrances and roofs cleared after every storm within 25 miles of Lowell, MA and southern New Hampshire.',
            'p1': 'New England winters do not wait. We clear snow and ice from entrances, sidewalks, driveways and parking areas so your family, tenants and customers can get in and out safely.',
            'p2': 'Seasonal contracts give you priority service every time it snows; per-storm service is also available.',
            'inc': ['Driveway and sidewalk clearing',
                    'Entrance, stairs and walkway shoveling',
                    'Salting, ice melt and anti-slip treatment',
                    'Roof and gutter snow removal to prevent ice dams',
                    'Small parking area clearing',
                    'Seasonal or per-storm service'],
            'ideal': ['Homeowners', 'Condo and HOA associations', 'Stores and offices', 'Clinics and churches', 'Property managers'],
            'faq': [('Do you offer seasonal contracts?', 'Yes. A seasonal contract gives you priority service after every storm. We also offer per-storm service.'),
                    ('Do you remove snow from roofs?', 'Yes. We remove heavy snow from roofs and gutters to help prevent ice dams and leaks.'),
                    ('When do you come after a storm?', 'Contract clients are served first, as soon as it is safe to work. We can also come during long storms to keep entrances open.')],
        },
        'es': {
            'name': 'Remoción de nieve',
            'metaTitle': 'Remoción de nieve en Lowell, MA y sur de NH | SGML Clean Solutions',
            'metaDesc': 'Remoción de nieve, paleo, sal y retiro de nieve de techos para hogares y negocios en Lowell, Chelmsford, Dracut, Tewksbury, Nashua y alrededores. Cotización gratis.',
            'eyebrow': 'Remoción de nieve · Lowell, MA',
            'h1': 'Remoción de nieve para mantener tu propiedad segura y abierta todo el invierno',
            'intro': 'Entradas, caminos, accesos y techos despejados después de cada tormenta a 25 millas de Lowell, MA y el sur de New Hampshire.',
            'p1': 'Los inviernos de Nueva Inglaterra no esperan. Retiramos nieve y hielo de entradas, aceras, caminos de acceso y estacionamientos para que tu familia, inquilinos y clientes entren y salgan con seguridad.',
            'p2': 'Con un contrato de temporada tienes servicio prioritario cada vez que nieva; también ofrecemos servicio por tormenta.',
            'inc': ['Limpieza de caminos de acceso y aceras',
                    'Paleo de entradas, escaleras y senderos',
                    'Sal, derretidor de hielo y tratamiento antideslizante',
                    'Retiro de nieve de techos y canaletas para evitar presas de hielo',
                    'Limpieza de estacionamientos pequeños',
                    'Servicio por temporada o por tormenta'],
            'ideal': ['Propietarios de casas', 'Condominios y asociaciones', 'Tiendas y oficinas', 'Clínicas e iglesias', 'Administradores de propiedades'],
            'faq': [('¿Ofrecen contratos de temporada?', 'Sí. Un contrato de temporada te da servicio prioritario después de cada tormenta. También ofrecemos servicio por tormenta.'),
                    ('¿Retiran nieve de los techos?', 'Sí. Retiramos la nieve pesada de techos y canaletas para ayudar a prevenir presas de hielo y filtraciones.'),
                    ('¿Cuándo llegan después de una tormenta?', 'Los clientes con contrato se atienden primero, apenas sea seguro trabajar. También podemos ir durante tormentas largas para mantener las entradas abiertas.')],
        },
    },
    {
        'key': 'condos', 'slug': 'apartment-condo-cleaning',
        'img': 'apartment-condominium-cleaning.jpg', 'w': 800, 'h': 533,
        'img2': 'apartment-lobby-cleaning-lowell-ma.jpg', 'w2': 1200, 'h2': 800,
        'serviceType': 'Apartment and condominium cleaning',
        'en': {
            'name': 'Apartments & Condominiums',
            'metaTitle': 'Apartment & Condo Cleaning in Lowell, MA & Southern NH | SGML Clean Solutions',
            'metaDesc': 'Common area cleaning, turnover cleaning and floor care for apartment buildings, condominiums and HOAs in Lowell, Chelmsford, Andover, Nashua and nearby towns. Free quote.',
            'eyebrow': 'Apartments & condos · Lowell, MA',
            'h1': 'Cleaning for apartment buildings, condominiums and HOAs',
            'intro': 'Common areas, turnovers and floor care for residential buildings within 25 miles of Lowell, MA and southern New Hampshire.',
            'p1': 'Residents notice clean lobbies, hallways and amenities. We keep shared spaces spotless on a regular schedule and get vacant units ready for the next tenant quickly.',
            'p2': 'Our floor care service keeps hallway carpets, lobby tile and community room floors looking new, which protects the value of the property.',
            'inc': ['Lobby, hallway, stairwell and elevator cleaning',
                    'Laundry rooms, gyms and community rooms',
                    'Trash rooms and recycling areas',
                    'Move-in / move-out and turnover cleaning',
                    'Hallway carpet extraction and floor waxing',
                    'Window, glass door and mailbox area cleaning'],
            'ideal': ['Apartment complexes', 'Condominium associations', 'HOAs', 'Property management companies', 'Senior living communities'],
            'faq': [('Can you clean vacant units between tenants?', 'Yes. We do turnover cleaning with a fast turnaround so units are ready to show and rent.'),
                    ('Do you work with property managers?', 'Yes. We work directly with property managers and associations and can coordinate access and schedules with them.'),
                    ('Do you clean common-area carpets and floors?', 'Yes. Floor care is our specialty: carpet extraction, tile cleaning, stripping, waxing and burnishing.')],
        },
        'es': {
            'name': 'Apartamentos y condominios',
            'metaTitle': 'Limpieza de apartamentos y condominios en Lowell, MA y sur de NH | SGML Clean Solutions',
            'metaDesc': 'Limpieza de áreas comunes, unidades desocupadas y cuidado de pisos para edificios de apartamentos, condominios y asociaciones en Lowell, Chelmsford, Andover, Nashua y alrededores. Cotización gratis.',
            'eyebrow': 'Apartamentos y condominios · Lowell, MA',
            'h1': 'Limpieza para edificios de apartamentos, condominios y asociaciones',
            'intro': 'Áreas comunes, unidades entre inquilinos y cuidado de pisos para edificios residenciales a 25 millas de Lowell, MA y el sur de New Hampshire.',
            'p1': 'Los residentes notan cuando la recepción, los pasillos y las amenidades están limpios. Mantenemos impecables los espacios compartidos con un horario fijo y preparamos rápido las unidades vacías para el siguiente inquilino.',
            'p2': 'Nuestro servicio de cuidado de pisos mantiene como nuevas las alfombras de pasillos, las baldosas de la recepción y los pisos de los salones comunes, protegiendo el valor de la propiedad.',
            'inc': ['Limpieza de recepción, pasillos, escaleras y ascensores',
                    'Lavanderías, gimnasios y salones comunes',
                    'Cuartos de basura y zonas de reciclaje',
                    'Limpieza de mudanzas y entre inquilinos',
                    'Extracción de alfombras de pasillos y encerado de pisos',
                    'Limpieza de vidrios, puertas y zona de buzones'],
            'ideal': ['Complejos de apartamentos', 'Asociaciones de condominios', 'HOAs', 'Empresas administradoras', 'Comunidades para adultos mayores'],
            'faq': [('¿Limpian unidades vacías entre inquilinos?', 'Sí. Hacemos limpieza entre inquilinos con entrega rápida para que las unidades estén listas para mostrar y alquilar.'),
                    ('¿Trabajan con administradores de propiedades?', 'Sí. Trabajamos directamente con administradores y asociaciones y coordinamos con ellos accesos y horarios.'),
                    ('¿Limpian alfombras y pisos de áreas comunes?', 'Sí. El cuidado de pisos es nuestra especialidad: extracción de alfombras, limpieza de baldosas, decapado, encerado y abrillantado.')],
        },
    },
    {
        'key': 'residential', 'slug': 'residential-cleaning',
        'img': 'residential-house-cleaning-lowell-ma.jpg', 'w': 900, 'h': 708,
        'img2': 'sgm-clean-solutions-team.jpg', 'w2': 800, 'h2': 800,
        'serviceType': 'House cleaning',
        'en': {
            'name': 'Residential Cleaning',
            'metaTitle': 'House Cleaning in Lowell, MA & Southern NH | SGML Clean Solutions',
            'metaDesc': 'Regular, deep, move-in/move-out and post-construction house cleaning in Lowell, Dracut, Chelmsford, Westford, Nashua, Hudson and nearby towns. Free quote.',
            'eyebrow': 'House cleaning · Lowell, MA',
            'h1': 'House cleaning you can count on, every visit',
            'intro': 'Regular, deep and move-in/move-out cleaning for homes within 25 miles of Lowell, MA and southern New Hampshire.',
            'p1': 'Come home to a spotless kitchen and sparkling bathrooms. Our friendly, punctual crew follows your preferences and pays attention to the details our clients mention in their reviews.',
            'p2': 'Choose weekly, bi-weekly or monthly visits, or book a one-time deep clean before a move, a party or the holidays.',
            'inc': ['Kitchens: counters, appliances outside, sink and cabinets',
                    'Bathrooms scrubbed and disinfected',
                    'Dusting of furniture, baseboards, fixtures and blinds',
                    'Vacuuming and mopping of all floors',
                    'Deep cleaning on request (inside oven, fridge, cabinets)',
                    'Move-in / move-out and post-construction cleaning'],
            'ideal': ['Busy families', 'Apartments and condos', 'Move-ins and move-outs', 'Homes after a renovation', 'Rental and Airbnb hosts'],
            'faq': [('Do I need to be home during the cleaning?', 'No. Many clients give us access instructions. We treat your home and belongings with care and respect.'),
                    ('Do you bring the cleaning products?', 'Yes. We bring eco-friendly products and equipment. If you prefer your own products, just let us know.'),
                    ('Can I book a one-time deep clean?', 'Yes. One-time deep cleans are popular before moving, after a renovation or before the holidays.')],
        },
        'es': {
            'name': 'Limpieza residencial',
            'metaTitle': 'Limpieza de casas en Lowell, MA y sur de NH | SGML Clean Solutions',
            'metaDesc': 'Limpieza de casas regular, profunda, de mudanzas y post-construcción en Lowell, Dracut, Chelmsford, Westford, Nashua, Hudson y alrededores. Cotización gratis.',
            'eyebrow': 'Limpieza de casas · Lowell, MA',
            'h1': 'Limpieza de casas con la que puedes contar en cada visita',
            'intro': 'Limpieza regular, profunda y de mudanzas para hogares a 25 millas de Lowell, MA y el sur de New Hampshire.',
            'p1': 'Llega a casa y encuentra la cocina impecable y los baños relucientes. Nuestro equipo amable y puntual sigue tus preferencias y cuida los detalles que nuestros clientes destacan en sus reseñas.',
            'p2': 'Elige visitas semanales, quincenales o mensuales, o reserva una limpieza profunda única antes de una mudanza, una fiesta o las fiestas de fin de año.',
            'inc': ['Cocina: mesones, exterior de electrodomésticos, fregadero y gabinetes',
                    'Baños fregados y desinfectados',
                    'Sacudido de muebles, zócalos, lámparas y persianas',
                    'Aspirado y trapeado de todos los pisos',
                    'Limpieza profunda bajo pedido (horno, nevera y gabinetes por dentro)',
                    'Limpieza de mudanzas y post-construcción'],
            'ideal': ['Familias ocupadas', 'Apartamentos y condominios', 'Mudanzas', 'Casas tras una remodelación', 'Anfitriones de alquiler y Airbnb'],
            'faq': [('¿Debo estar en casa durante la limpieza?', 'No. Muchos clientes nos dan instrucciones de acceso. Tratamos tu hogar y tus pertenencias con cuidado y respeto.'),
                    ('¿Ustedes llevan los productos de limpieza?', 'Sí. Llevamos productos ecológicos y equipo. Si prefieres tus propios productos, solo avísanos.'),
                    ('¿Puedo reservar una limpieza profunda única?', 'Sí. Las limpiezas profundas únicas son muy solicitadas antes de mudarse, tras una remodelación o antes de las fiestas.')],
        },
    },
    {
        'key': 'stripwax', 'form': 'floors', 'slug': 'floor-stripping-waxing',
        'img': 'floor-stripping-waxing-massachusetts.jpg', 'w': 900, 'h': 601,
        'img2': 'therapy-gym-floor-burnishing-lowell-ma.jpg', 'w2': 900, 'h2': 1200,
        'serviceType': 'Floor stripping and waxing',
        'en': {
            'name': 'Floor Stripping & Waxing',
            'metaTitle': 'Floor Stripping & Waxing in Lowell, MA & Nashua, NH | SGML Clean Solutions',
            'metaDesc': 'Floor stripping and waxing, buffing, burnishing and deep scrub & recoat for VCT, vinyl and tile in Lowell, Chelmsford, Andover, Nashua, Salem and nearby towns. Free quote.',
            'eyebrow': 'Floor care specialists · Lowell, MA',
            'h1': 'Floor stripping & waxing that brings back a mirror shine',
            'intro': 'Strip & wax, buffing, burnishing and scrub & recoat for commercial and residential floors within 25 miles of Lowell, MA and southern New Hampshire.',
            'p1': 'Floor care is our specialty. We remove old, yellowed finish down to the bare floor, then lay fresh coats of sealer and high-quality wax and burnish them to a deep, long-lasting gloss — just like the results you can see in our gallery.',
            'p2': 'Between full strips, scheduled buffing, burnishing or a scrub & recoat keep the shine and protect your investment for a fraction of the cost.',
            'inc': ['Full strip of old finish and buildup',
                    'Sealer and multiple coats of commercial floor finish',
                    'High-speed buffing and burnishing',
                    'Deep scrub & recoat without a full strip',
                    'VCT, vinyl, linoleum, terrazzo and sealed concrete',
                    'Night and weekend work to avoid downtime'],
            'ideal': ['Clinics and therapy centers', 'Schools and daycares', 'Offices and lobbies', 'Stores and cafeterias', 'Gyms and community halls'],
            'faq': [('How often should floors be stripped and waxed?', 'Most commercial floors need a full strip and wax every 6–12 months, with buffing or burnishing every few weeks depending on traffic.'),
                    ('How long before we can walk on the floor?', 'Light foot traffic is usually fine a few hours after the last coat. We work nights and weekends so the floor is ready when you open.'),
                    ('What types of floors do you strip and wax?', 'VCT, vinyl, linoleum, terrazzo and sealed concrete. For hardwood, stone or tile we recommend the right cleaning and sealing method during the free walkthrough.')],
        },
        'es': {
            'name': 'Decapado y encerado de pisos',
            'metaTitle': 'Decapado y encerado de pisos en Lowell, MA y Nashua, NH | SGML Clean Solutions',
            'metaDesc': 'Decapado y encerado, pulido, abrillantado y fregado con recapa para VCT, vinil y baldosa en Lowell, Chelmsford, Andover, Nashua, Salem y alrededores. Cotización gratis.',
            'eyebrow': 'Especialistas en pisos · Lowell, MA',
            'h1': 'Decapado y encerado de pisos que devuelve un brillo de espejo',
            'intro': 'Decapado y encerado, pulido, abrillantado y fregado con recapa para pisos comerciales y residenciales a 25 millas de Lowell, MA y el sur de New Hampshire.',
            'p1': 'El cuidado de pisos es nuestra especialidad. Retiramos el acabado viejo y amarillento hasta dejar el piso desnudo, aplicamos sellador y varias capas de cera de alta calidad y las abrillantamos hasta lograr un brillo profundo y duradero, como los resultados que puedes ver en nuestra galería.',
            'p2': 'Entre decapados completos, el pulido, el abrillantado o un fregado con recapa programados mantienen el brillo y protegen tu inversión por una fracción del costo.',
            'inc': ['Decapado completo del acabado viejo y la suciedad acumulada',
                    'Sellador y varias capas de acabado comercial',
                    'Pulido y abrillantado a alta velocidad',
                    'Fregado profundo y recapa sin decapado completo',
                    'VCT, vinil, linóleo, terrazo y concreto sellado',
                    'Trabajo nocturno y de fin de semana para no interrumpir'],
            'ideal': ['Clínicas y centros de terapia', 'Escuelas y guarderías', 'Oficinas y recepciones', 'Tiendas y cafeterías', 'Gimnasios y salones comunitarios'],
            'faq': [('¿Cada cuánto se deben decapar y encerar los pisos?', 'La mayoría de pisos comerciales necesitan decapado y encerado cada 6 a 12 meses, con pulido o abrillantado cada pocas semanas según el tráfico.'),
                    ('¿Cuánto tiempo hay que esperar para caminar sobre el piso?', 'El tráfico ligero suele ser posible unas horas después de la última capa. Trabajamos de noche y fines de semana para que el piso esté listo cuando abras.'),
                    ('¿Qué tipos de pisos decapan y enceran?', 'VCT, vinil, linóleo, terrazo y concreto sellado. Para madera, piedra o baldosa te recomendamos el método de limpieza y sellado adecuado en la visita gratuita.')],
        },
    },
    {
        'key': 'carpet', 'form': 'floors', 'slug': 'carpet-cleaning',
        'img': 'carpet-cleaning-extraction-lowell-ma.jpg', 'w': 1200, 'h': 800,
        'img2': 'office-carpet-before-after-lowell-ma.jpg', 'w2': 1136, 'h2': 1156,
        'serviceType': 'Carpet cleaning',
        'en': {
            'name': 'Carpet, Tile & Grout Cleaning',
            'metaTitle': 'Carpet Cleaning in Lowell, MA & Southern NH | SGML Clean Solutions',
            'metaDesc': 'Hot-water carpet extraction, stain removal and tile & grout cleaning for offices and homes in Lowell, Dracut, Tewksbury, Methuen, Nashua, Hudson and nearby towns. Free quote.',
            'eyebrow': 'Carpet cleaning · Lowell, MA',
            'h1': 'Carpet, tile and grout cleaning that removes what vacuuming leaves behind',
            'intro': 'Hot-water extraction and tile & grout scrubbing for offices, buildings and homes within 25 miles of Lowell, MA and southern New Hampshire.',
            'p1': 'Our hot-water extraction pulls out embedded dirt, stains, odors and allergens from deep in the carpet fibers. See the before-and-after results from a real office in our gallery.',
            'p2': 'For tile floors we scrub grout lines back to their original color and apply sealer so they stay clean longer.',
            'inc': ['Pre-treatment of stains and high-traffic lanes',
                    'Hot-water extraction (steam cleaning)',
                    'Spot and odor treatment',
                    'Tile and grout scrubbing',
                    'Grout sealing',
                    'Recurring maintenance plans for offices'],
            'ideal': ['Offices and conference rooms', 'Apartment hallways', 'Homes and rentals', 'Clinics and waiting rooms', 'Move-in / move-out'],
            'faq': [('How long does carpet take to dry?', 'Usually 4–8 hours depending on the carpet and ventilation. We can schedule evening work so it is dry by morning.'),
                    ('Can you remove old stains?', 'Most stains come out with pre-treatment and extraction. Some old or dyed stains can be lightened but not always fully removed; we tell you honestly before we start.'),
                    ('How often should office carpet be deep cleaned?', 'We recommend every 3–6 months for busy offices, with spot cleaning in between.')],
        },
        'es': {
            'name': 'Limpieza de alfombras, baldosas y juntas',
            'metaTitle': 'Limpieza de alfombras en Lowell, MA y sur de NH | SGML Clean Solutions',
            'metaDesc': 'Extracción de alfombras con agua caliente, remoción de manchas y limpieza de baldosas y juntas para oficinas y hogares en Lowell, Dracut, Tewksbury, Methuen, Nashua, Hudson y alrededores. Cotización gratis.',
            'eyebrow': 'Limpieza de alfombras · Lowell, MA',
            'h1': 'Limpieza de alfombras, baldosas y juntas que quita lo que la aspiradora deja',
            'intro': 'Extracción con agua caliente y fregado de baldosas y juntas para oficinas, edificios y hogares a 25 millas de Lowell, MA y el sur de New Hampshire.',
            'p1': 'Nuestra extracción con agua caliente saca la suciedad incrustada, las manchas, los olores y los alérgenos del fondo de las fibras. Mira el antes y después de una oficina real en nuestra galería.',
            'p2': 'En pisos de baldosa fregamos las juntas hasta recuperar su color original y aplicamos sellador para que se mantengan limpias por más tiempo.',
            'inc': ['Pretratamiento de manchas y zonas de alto tráfico',
                    'Extracción con agua caliente (limpieza a vapor)',
                    'Tratamiento de manchas y olores',
                    'Fregado de baldosas y juntas',
                    'Sellado de juntas',
                    'Planes de mantenimiento recurrentes para oficinas'],
            'ideal': ['Oficinas y salas de reuniones', 'Pasillos de apartamentos', 'Hogares y alquileres', 'Clínicas y salas de espera', 'Mudanzas'],
            'faq': [('¿Cuánto tarda en secarse la alfombra?', 'Normalmente de 4 a 8 horas según la alfombra y la ventilación. Podemos trabajar en la noche para que esté seca en la mañana.'),
                    ('¿Pueden quitar manchas viejas?', 'La mayoría de manchas salen con pretratamiento y extracción. Algunas manchas viejas o de tinte se aclaran pero no siempre desaparecen; te lo decimos con honestidad antes de empezar.'),
                    ('¿Cada cuánto se debe limpiar a fondo la alfombra de una oficina?', 'Recomendamos cada 3 a 6 meses en oficinas concurridas, con limpieza de manchas entre visitas.')],
        },
    },
]


def esc(s):
    return (s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;').replace('"', '&quot;'))


def translations():
    out = {}
    for lang in ('en', 'es'):
        sp = {'c': COMMON[lang]}
        for s in SERVICES:
            d = s[lang]
            entry = {k: d[k] for k in ('name', 'metaTitle', 'metaDesc', 'eyebrow', 'h1', 'intro', 'p1', 'p2')}
            entry['inc'] = {str(i + 1): v for i, v in enumerate(d['inc'])}
            entry['ideal'] = {str(i + 1): v for i, v in enumerate(d['ideal'])}
            entry['faq'] = {str(i + 1): {'q': q, 'a': a} for i, (q, a) in enumerate(d['faq'])}
            sp[s['key']] = entry
        out[lang] = {'sp': sp}
    return out


def schema(s):
    d = s['en']
    url = f'{SITE}/services/{s["slug"]}/'
    graph = [
        {
            '@type': 'Service',
            '@id': url + '#service',
            'name': d['name'],
            'serviceType': s['serviceType'],
            'description': d['metaDesc'],
            'url': url,
            'image': f'{SITE}/assets/{s["img"]}',
            'provider': {'@id': f'{SITE}/#business'},
            'areaServed': [
                {'@type': 'GeoCircle',
                 'geoMidpoint': {'@type': 'GeoCoordinates', 'latitude': 42.6334, 'longitude': -71.3162},
                 'geoRadius': 40000},
                *[{'@type': 'City', 'name': f'{t}, MA'} for t in TOWNS_MA],
                *[{'@type': 'City', 'name': f'{t}, NH'} for t in TOWNS_NH],
            ],
            'availableLanguage': ['en', 'es'],
        },
        {
            '@type': 'BreadcrumbList',
            'itemListElement': [
                {'@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': f'{SITE}/'},
                {'@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': f'{SITE}/#services'},
                {'@type': 'ListItem', 'position': 3, 'name': d['name'], 'item': url},
            ],
        },
        {
            '@type': 'FAQPage',
            'mainEntity': [{'@type': 'Question', 'name': q,
                            'acceptedAnswer': {'@type': 'Answer', 'text': a}} for q, a in d['faq']],
        },
    ]
    return json.dumps({'@context': 'https://schema.org', '@graph': graph}, indent=2, ensure_ascii=False)


def page(s):
    k, d, c = s['key'], s['en'], COMMON['en']
    url = f'{SITE}/services/{s["slug"]}/'
    quote = f'../../?service={s.get("form", k)}#quote'
    p = f'sp.{k}'

    inc = '\n'.join(f'                        <li data-i18n="{p}.inc.{i + 1}">{esc(v)}</li>' for i, v in enumerate(d['inc']))
    ideal = '\n'.join(f'                    <li data-i18n="{p}.ideal.{i + 1}">{esc(v)}</li>' for i, v in enumerate(d['ideal']))
    faq = '\n'.join(
        f'                <details class="faq-item"><summary data-i18n="{p}.faq.{i + 1}.q">{esc(q)}</summary>'
        f'<p data-i18n="{p}.faq.{i + 1}.a">{esc(a)}</p></details>'
        for i, (q, a) in enumerate(d['faq']))
    related = '\n'.join(
        f'                    <li><a href="../{o["slug"]}/" data-lang-link><img src="../../assets/{o["img"]}" alt="" width="{o["w"]}" height="{o["h"]}" loading="lazy" decoding="async">'
        f'<span data-i18n="sp.{o["key"]}.name">{esc(o["en"]["name"])}</span></a></li>'
        for o in SERVICES if o is not s)

    media = ''
    if s.get('img2'):
        media = (f'                <div class="svc-media">\n'
                 f'                    <img src="../../assets/{s["img2"]}" alt="{esc(d["name"])} — SGML Clean Solutions, Lowell, MA" data-i18n-alt="{p}.name" '
                 f'width="{s["w2"]}" height="{s["h2"]}" loading="lazy" decoding="async">\n'
                 f'                </div>\n')
    grid = 'container svc-grid' if media else 'container svc-grid svc-grid-single'

    return f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Generated by tools/build_services.py — edit the data there, not this file. -->
    <meta http-equiv="Content-Security-Policy" content="
        default-src 'self';
        script-src 'self' https://www.googletagmanager.com https://*.tawk.to https://cdn.jsdelivr.net;
        style-src 'self' 'unsafe-inline' https://*.tawk.to https://fonts.googleapis.com;
        font-src 'self' https://*.tawk.to https://fonts.gstatic.com;
        img-src 'self' data: https://www.googletagmanager.com https://*.google-analytics.com https://*.tawk.to https://cdn.jsdelivr.net https://tawk.link https://s3.amazonaws.com;
        media-src 'self' https://*.tawk.to;
        connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://*.tawk.to wss://*.tawk.to;
        frame-src https://*.tawk.to;
        form-action 'self';
        base-uri 'self';
        object-src 'none';
        upgrade-insecure-requests">
    <meta name="referrer" content="strict-origin-when-cross-origin">
    <title data-i18n="{p}.metaTitle">{esc(d['metaTitle'])}</title>
    <meta name="description" content="{esc(d['metaDesc'])}" data-i18n-content="{p}.metaDesc">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <meta name="theme-color" content="#343434">
    <link rel="canonical" href="{url}">
    <link rel="alternate" hreflang="en" href="{url}">
    <link rel="alternate" hreflang="es" href="{url}?lang=es">
    <link rel="alternate" hreflang="x-default" href="{url}">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="SGML Clean Solutions">
    <meta property="og:url" content="{url}">
    <meta property="og:title" content="{esc(d['metaTitle'])}" data-i18n-content="{p}.metaTitle">
    <meta property="og:description" content="{esc(d['metaDesc'])}" data-i18n-content="{p}.metaDesc">
    <meta property="og:image" content="{SITE}/assets/{s['img']}">
    <meta property="og:locale" content="en_US">
    <meta property="og:locale:alternate" content="es_US">
    <meta name="twitter:card" content="summary_large_image">
    <script type="application/ld+json">
{schema(s)}
    </script>
    <link rel="icon" href="../../assets/favicon.ico" sizes="any">
    <link rel="icon" type="image/png" sizes="32x32" href="../../assets/favicon_32x32.png">
    <link rel="apple-touch-icon" href="../../assets/apple-touch-icon.png">
    <link rel="manifest" href="../../site.webmanifest">
    <link rel="stylesheet" href="../../styles.css">
    <script src="../../analytics.js" defer></script>
    <script src="../../config.js" defer></script>
    <script src="../../translations.js" defer></script>
    <script src="../services-i18n.js" defer></script>
    <script src="../../i18n.js" defer></script>
    <script src="../../menu.js" defer></script>
    <script src="../../tawk.js" defer></script>
</head>
<body class="dark-theme service-page">
    <a class="skip-link" href="#main" data-i18n="common.skip">Skip to content</a>
    <header>
        <div class="container">
            <a href="../../" class="brand" data-lang-link aria-label="SGML Clean Solutions - Home">
                <img src="../../assets/sgml-clean-solutions-logo.png" alt="SGML Clean Solutions logo" width="75" height="50">
                <span class="brand-name">SGML <span>Clean Solutions</span></span>
            </a>
            <nav aria-label="Main">
                <button class="menu-toggle" id="menu-toggle" type="button" aria-label="Open menu" aria-controls="nav-menu" aria-expanded="false" data-i18n-aria-label="common.menu"><span></span><span></span><span></span></button>
                <ul id="nav-menu">
                    <li><a href="../../" data-i18n="nav.home" data-lang-link>Home</a></li>
                    <li><a href="../../#about" data-i18n="nav.about" data-lang-link>About Us</a></li>
                    <li><a href="../../#services" data-i18n="nav.services" data-lang-link aria-current="page">Services</a></li>
                    <li><a href="../../gallery/" data-i18n="nav.gallery" data-lang-link>Gallery</a></li>
                    <li><a href="../../#area" data-i18n="nav.area" data-lang-link>Service Area</a></li>
                    <li><a href="{quote}" class="nav-cta" data-i18n="nav.quote" data-lang-link>Free Quote</a></li>
                    <li class="lang-item">
                        <div class="lang-switch" role="group" aria-label="Language / Idioma">
                            <button type="button" data-lang="en" lang="en" aria-pressed="true">EN</button>
                            <button type="button" data-lang="es" lang="es" aria-pressed="false">ES</button>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </header>

    <main id="main">
        <section class="svc-hero">
            <div class="container svc-hero-grid">
                <div class="svc-hero-text">
                <nav class="breadcrumb" aria-label="Breadcrumb"><a href="../../" data-i18n="nav.home" data-lang-link>Home</a> › <a href="../../#services" data-i18n="sp.c.services" data-lang-link>Services</a> › <span data-i18n="{p}.name">{esc(d['name'])}</span></nav>
                <p class="eyebrow" data-i18n="{p}.eyebrow">{esc(d['eyebrow'])}</p>
                <h1 data-i18n="{p}.h1">{esc(d['h1'])}</h1>
                <p class="svc-intro" data-i18n="{p}.intro">{esc(d['intro'])}</p>
                <div class="hero-actions">
                    <a href="{quote}" class="cta-button" data-i18n="sp.c.quote" data-lang-link>{esc(c['quote'])}</a>
                    <a href="tel:+19542451566" class="cta-button cta-secondary" data-i18n="sp.c.call">{esc(c['call'])}</a>
                </div>
                </div>
                <div class="svc-banner">
                    <img src="../../assets/{s['img']}" alt="{esc(d['name'])} — SGML Clean Solutions" data-i18n-alt="{p}.name" width="{s['w']}" height="{s['h']}" fetchpriority="high" decoding="async">
                </div>
            </div>
        </section>

        <section class="svc-detail">
            <div class="{grid}">
{media}                <div class="svc-text">
                    <p data-i18n="{p}.p1">{esc(d['p1'])}</p>
                    <p data-i18n="{p}.p2">{esc(d['p2'])}</p>
                    <h2 data-i18n="sp.c.included">{esc(c['included'])}</h2>
                    <ul class="svc-checks">
{inc}
                    </ul>
                    <a href="{quote}" class="cta-button" data-i18n="sp.c.quote" data-lang-link>{esc(c['quote'])}</a>
                </div>
            </div>
        </section>

        <section class="svc-ideal">
            <div class="container">
                <h2 data-i18n="sp.c.ideal">{esc(c['ideal'])}</h2>
                <ul class="svc-chips">
{ideal}
                </ul>
                <h2 data-i18n="sp.c.how">{esc(c['how'])}</h2>
                <ol class="svc-steps">
                    <li><strong data-i18n="sp.c.s1t">{esc(c['s1t'])}</strong><span data-i18n="sp.c.s1d">{esc(c['s1d'])}</span></li>
                    <li><strong data-i18n="sp.c.s2t">{esc(c['s2t'])}</strong><span data-i18n="sp.c.s2d">{esc(c['s2d'])}</span></li>
                    <li><strong data-i18n="sp.c.s3t">{esc(c['s3t'])}</strong><span data-i18n="sp.c.s3d">{esc(c['s3d'])}</span></li>
                </ol>
            </div>
        </section>

        <section class="svc-faq">
            <div class="container">
                <h2 data-i18n="sp.c.faq">{esc(c['faq'])}</h2>
{faq}
                <h2 data-i18n="sp.c.areaTitle">{esc(c['areaTitle'])}</h2>
                <p class="svc-area" data-i18n="sp.c.areaText">{esc(c['areaText'])}</p>
            </div>
        </section>

        <section class="svc-band">
            <div class="container">
                <h2 data-i18n="sp.c.bandTitle">{esc(c['bandTitle'])}</h2>
                <p data-i18n="sp.c.bandText">{esc(c['bandText'])}</p>
                <div class="hero-actions">
                    <a href="{quote}" class="cta-button" data-i18n="sp.c.quote" data-lang-link>{esc(c['quote'])}</a>
                    <a href="../../gallery/" class="cta-button cta-secondary" data-i18n="sp.c.gallery" data-lang-link>{esc(c['gallery'])}</a>
                </div>
            </div>
        </section>

        <section class="svc-related">
            <div class="container">
                <h2 data-i18n="sp.c.related">{esc(c['related'])}</h2>
                <ul class="svc-related-grid">
{related}
                </ul>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <div class="footer-bottom">
                <p>&copy; <span id="current-year">2026</span> SGML Clean Solutions · 86 Agawam St, Lowell, MA · <a href="tel:+19542451566">+1 (954) 245-1566</a> · <a href="mailto:info@sgmlcleansolutions.com">info@sgmlcleansolutions.com</a></p>
            </div>
        </div>
    </footer>
</body>
</html>
'''


def main():
    os.makedirs(os.path.join(ROOT, 'services'), exist_ok=True)
    with open(os.path.join(ROOT, 'services', 'services-i18n.js'), 'w', encoding='utf-8') as f:
        f.write('/* Generated by tools/build_services.py — strings for the service pages (sp.*). */\n'
                '(function () {\n'
                "    'use strict';\n"
                '    var extra = ' + json.dumps(translations(), indent=4, ensure_ascii=False) + ';\n'
                '    var all = window.SGM_TRANSLATIONS = window.SGM_TRANSLATIONS || {};\n'
                '    Object.keys(extra).forEach(function (lang) {\n'
                '        all[lang] = all[lang] || {};\n'
                '        all[lang].sp = extra[lang].sp;\n'
                '    });\n'
                '})();\n')
    for s in SERVICES:
        d = os.path.join(ROOT, 'services', s['slug'])
        os.makedirs(d, exist_ok=True)
        with open(os.path.join(d, 'index.html'), 'w', encoding='utf-8') as f:
            f.write(page(s))
    print('Built', len(SERVICES), 'service pages')


if __name__ == '__main__':
    main()
