import type { SiteCopy } from '../types.ts';
export const es: SiteCopy = {
  nav: {
    home: 'Inicio',
    platform: 'Plataforma',
    modules: 'Módulos',
    privacy: 'Privacidad',
    roadmap: 'Hoja de ruta',
  },
  skip: 'Saltar al contenido',
  menu: 'Menú',
  language: 'Elegir idioma',
  status: {
    development: 'En desarrollo',
    planned: 'Previsto',
    principle: 'Principio de diseño',
  },
  statusNote:
    'Daclify V2 está en desarrollo. El lanzamiento público requiere verificar los contratos y revisar la versión.',
  explore: 'Explorar la plataforma',
  community: 'Unirse a la conversación',
  more: 'Explorar',
  back: 'Volver al inicio',
  footer: 'Herramientas para comunidades que deciden juntas.',
  footerNote:
    'Una nueva etapa para Daclify. Personas, decisiones compartidas y trabajo con responsabilidades claras.',
  ctaTitle: 'La próxima etapa empieza con una conversación.',
  ctaText:
    '¿Estás creando una comunidad, cooperativa o red de colaboradores? Ayúdanos a dar forma a Daclify. Consulta la hoja de ruta y habla con nosotros en Telegram.',
  questions: 'Buenas preguntas. Respuestas claras.',
  faq: [
    {
      question: '¿Qué es Daclify?',
      answer:
        'Daclify es una plataforma modular para DAO que se está reconstruyendo para gestionar miembros, tomar decisiones, financiar trabajo y conservar documentos compartidos. Una DAO es una organización cuyas reglas y decisiones pueden registrarse y ejecutarse mediante contratos inteligentes.',
    },
    {
      question: '¿Cada miembro necesita una cuenta blockchain?',
      answer:
        'El diseño de V2 contempla identidades internas en el contrato, para participar sin crear una cuenta nativa propia. Vincular una cartera nativa, iniciar sesión con un proveedor social o entrar mediante Telegram son vías adicionales previstas; sus flujos de producción aún no están listos.',
    },
    {
      question: '¿Los créditos de gobernanza son dinero?',
      answer:
        'No. Los créditos internos representan el poder de voto definido por cada DAO. Son independientes de los activos de tesorería y no se pueden retirar como dinero. La gobernanza con tokens nativos requiere una política explícita y compatible de depósito o ponderación.',
    },
    {
      question: '¿Puede una DAO mantener privada su información?',
      answer:
        'Los documentos protegidos pueden cifrarse antes de publicarlos y las claves entregarse a los miembros autorizados. El cifrado protege el contenido, no los metadatos públicos de la cadena. Un miembro puede conservar información ya recibida; la recuperación gestionada permite al servicio correspondiente acceder a las claves.',
    },
    {
      question: '¿Daclify será gratuito?',
      answer:
        'El objetivo es mantener una gobernanza básica útil y gratuita, con límites de recursos definidos. La automatización alojada, las notificaciones y otros servicios pueden ser de pago. Los precios y límites no están cerrados. El fin de una suscripción no debe dar al proveedor el control de los fondos ni de las obligaciones aceptadas.',
    },
    {
      question: '¿Podemos usar V2 con fondos reales?',
      answer:
        'V2 es una implementación en desarrollo, no una versión validada para producción. Faltan verificaciones de contratos, integraciones de cuentas, despliegues independientes y procedimientos operativos. La hoja de ruta distingue los flujos implementados en desarrollo de las capacidades listas para lanzar.',
    },
  ],
  preview: {
    label: 'Espacio de trabajo ilustrativo',
    name: 'La comunidad del barrio',
    caption: 'Un propósito compartido. Un lugar para organizarse.',
    tabs: ['Decisiones', 'Trabajo', 'Documentos'],
    rows: [
      'Propuesta de huerto comunitario',
      'Hito del taller',
      'Manual compartido del proyecto',
    ],
    tags: ['Votación', 'En revisión', 'Miembros'],
    flow: ['Proponer', 'Decidir', 'Cumplir'],
    note: 'Una comunidad. Herramientas conectadas. Responsabilidades claras.',
  },
  pages: {
    home: {
      title: 'Daclify — Gobernanza DAO modular para comunidades reales',
      description:
        'Descubre Daclify V2: una plataforma DAO modular para decisiones comunitarias, trabajo financiado y documentos cifrados. Explora la visión y la hoja de ruta.',
      eyebrow: 'La próxima etapa de la gobernanza comunitaria',
      heading: 'Tu comunidad.\nTus decisiones.\nTu futuro.',
      lead: 'Conecta personas, decisiones y trabajo que importa. Daclify está creando una plataforma DAO modular donde cada comunidad elige sus reglas, sus herramientas y su camino.',
      sections: [
        {
          title: 'Más que votar. Una forma de trabajar juntos.',
          text: 'Una comunidad necesita algo más que un chat y una dirección de tesorería. Necesita pasar de una idea a una decisión compartida, una contribución financiada y un registro duradero.',
          cards: [
            {
              title: 'Un lugar para cada persona',
              text: 'Los miembros y roles definen quién puede participar. Las identidades internas buscan facilitar la incorporación sin exigir una cuenta blockchain nativa.',
              link: 'platform',
            },
            {
              title: 'Decisiones que importan',
              text: 'Elige una política de voto, registra el resultado y conecta las decisiones aprobadas con acciones delimitadas. La gobernanza debe ser comprensible para quienes la usan.',
              link: 'modules',
            },
            {
              title: 'Del acuerdo al trabajo',
              text: 'Financia hitos, revisa entregables y sigue los pagos aprobados. Conserva la responsabilidad y el progreso en lugar de perderlos en una conversación.',
              link: 'modules',
            },
          ],
        },
        {
          title: 'Empieza por tu propósito. Elige tus herramientas.',
          text: 'La implementación de V2 conecta un núcleo compartido con módulos propios y especializados. El objetivo es ofrecer configuraciones útiles, opciones claras y espacio para crecer.',
          cards: [
            {
              title: 'Decide',
              text: 'Propuestas, votaciones y resultados duraderos. Los flujos de desarrollo incluyen crear votaciones, emitir votos y finalizar resultados.',
              status: 'development',
              link: 'modules',
            },
            {
              title: 'Works',
              text: 'Financiación por hitos con entrega, revisión, cambios y aceptación. La aprobación crea una obligación registrada, no una promesa sin seguimiento.',
              status: 'development',
              link: 'modules',
            },
            {
              title: 'Payroll',
              text: 'Calendarios financiados y obligaciones de pago aprobadas. Los flujos actuales conservan pagos aceptados aunque se retire el módulo.',
              status: 'development',
              link: 'modules',
            },
          ],
        },
        {
          title: 'Una visión. Dos formas de hacerla tuya.',
          text: 'Usa un despliegue compartido u opera tus propios contratos. Ambos modos forman parte del diseño de V2; el flujo completo de despliegue independiente sigue en construcción.',
          cards: [
            {
              title: 'Un espacio compartido',
              text: 'Varias DAO pueden usar los mismos contratos centrales y mantener separados sus miembros, configuración y registros de tesorería.',
              status: 'development',
              link: 'platform',
            },
            {
              title: 'Tus propios cimientos',
              text: 'Una DAO independiente controla su despliegue y se conecta al Hub para aparecer en el directorio. También debe funcionar directamente sin el Hub.',
              status: 'planned',
              link: 'platform',
            },
          ],
        },
        {
          title: 'Conocimiento compartido. Privacidad consciente.',
          text: 'Conserva pequeños registros descriptivos como JSON acotado y documentos mayores mediante referencias IPFS. Cifra el contenido protegido antes de publicarlo y decide expresamente quién conserva las claves.',
          bullets: [
            'Las cuentas con claves propias y la recuperación gestionada son modos distintos y claramente identificados.',
            'El contenido privado no oculta miembros, votos ni transferencias en una cadena pública.',
            'Retirar a un miembro puede limitar su acceso futuro; no borra la información que ya recibió.',
          ],
        },
      ],
    },
    platform: {
      title: 'Plataforma DAO, cuentas y opciones de despliegue | Daclify',
      description:
        'Conoce cómo Daclify V2 conecta cuentas internas, carteras nativas, contratos propios de cada DAO y un Hub de descubrimiento en una plataforma modular.',
      eyebrow: 'La plataforma',
      heading: 'Una organización a tu medida.',
      lead: 'Cada comunidad necesita sus propias reglas. V2 se diseña alrededor de un núcleo estable de identidad, autoridad y tesorería, con módulos especializados al servicio de cada organización.',
      sections: [
        {
          title: 'Primero las personas. Cuentas que encajan.',
          text: 'Una identidad interna vive en el contrato inteligente y no exige al miembro tener una cuenta nativa. Los miembros y roles pertenecen a la DAO; vincular otra credencial no debe crear otro voto.',
          cards: [
            {
              title: 'Claves bajo tu control',
              text: 'Las claves de firma y cifrado son distintas y las controla el usuario. Los flujos de desarrollo incluyen una bóveda local cifrada y credenciales de recuperación. El inicio de sesión social por sí solo no reconstruye esas claves.',
              status: 'development',
            },
            {
              title: 'Recuperación gestionada',
              text: 'El modo previsto permite asistencia del servicio y explica la autoridad del operador. Se está evaluando un servicio de claves de código abierto; la recuperación de producción aún no está validada.',
              status: 'planned',
            },
            {
              title: 'Más formas de participar',
              text: 'Se prevén vinculación de cuentas Telos nativas, acceso social y Telegram, e identidades Telos EVM según capacidades verificadas. Todas deben conservar los mismos miembros y permisos.',
              status: 'planned',
            },
          ],
        },
        {
          title: 'Contratos compartidos o despliegue propio.',
          text: 'El entorno compartido mantiene el estado específico de cada DAO en contratos comunes. Un despliegue independiente usa las mismas interfaces públicas y las políticas de actualización y tesorería de la DAO.',
          cards: [
            {
              title: 'Despliegue compartido',
              text: 'La implementación permite crear DAO, roles, créditos y registros de tesorería en un entorno compartido. El aislamiento completo y la verificación de los contratos nativos siguen siendo requisitos de lanzamiento.',
              status: 'development',
            },
            {
              title: 'Despliegue independiente',
              text: 'Se prevén contratos propios, conexiones directas y acceso a varios entornos. La DAO debe seguir funcionando cuando el Hub o los servicios alojados no estén disponibles.',
              status: 'planned',
            },
          ],
        },
        {
          title: 'El Hub conecta. No gobierna.',
          text: 'El Hub de descubrimiento busca listar DAO, identificar sus despliegues y describir sus capacidades. Aparecer en el directorio no debe dar a la plataforma control sobre votos, tesorería o actualizaciones.',
          bullets: [
            'La autoridad procede de los roles y políticas explícitos de cada DAO.',
            'Los permisos de los módulos son delimitados y revisables.',
            'Interfaces públicas, versiones y documentación avanzan juntas.',
          ],
        },
        {
          title: 'Una base para la gobernanza responsable.',
          text: 'El núcleo usa contratos Antelope C++. La aplicación y los servicios usan TypeScript estricto, con una interfaz Vue. Las decisiones y registros financieros autoritativos pertenecen a los contratos; una pantalla no puede autorizar un pago.',
          bullets: [
            'Los créditos de gobernanza de cada DAO son independientes del dinero.',
            'La gobernanza con tokens nativos necesita una política compatible de depósito o ponderación.',
            'El soporte de otras cadenas se añade mediante adaptadores delimitados y verificados.',
          ],
        },
      ],
    },
    modules: {
      title: 'Módulos DAO de Decide, Works y nóminas | Daclify',
      description:
        'Explora la gobernanza modular de Daclify: votaciones Decide, financiación por hitos Works, nóminas, documentos y servicios Operations previstos.',
      eyebrow: 'Los módulos',
      heading: 'Menos carga. Más progreso compartido.',
      lead: 'Elige las capacidades que necesita tu organización. Cada módulo tiene un cometido concreto, configuración clara y autoridad explícita. Los módulos actuales son implementaciones de desarrollo, no servicios listos para producción.',
      sections: [
        {
          title: 'Decide — un camino claro hacia el acuerdo.',
          text: 'Decide adapta patrones útiles de la gobernanza de Telos al modelo de identidad interna de Daclify. Sus flujos incluyen votaciones, emisión de votos y finalización; faltan elecciones más completas, comités y ejecución de propuestas.',
          bullets: [
            'Define quién participa y cómo se calcula el poder de voto.',
            'Haz comprensibles el quórum, la aprobación y los plazos.',
            'Conserva un resultado duradero; finalizar y ejecutar son responsabilidades distintas.',
          ],
        },
        {
          title: 'Works — financia resultados, no promesas vagas.',
          text: 'Works conecta la financiación con informes de hitos y revisión autorizada. Los flujos actuales cubren propuestas, reservas, entregas, cambios solicitados, aceptación y cancelación. Faltan políticas personalizadas persistentes y reglas completas de disputas y plazos.',
          bullets: [
            'Fija los importes aprobados y compromisos documentales.',
            'Un informe por sí solo no autoriza el pago.',
            'Las obligaciones aceptadas y pendientes sobreviven a la retirada del módulo.',
          ],
        },
        {
          title: 'Payroll — compromisos previsibles.',
          text: 'El módulo de nóminas soporta calendarios financiados de plazo fijo y obligaciones registradas. Los pagos deben ser idempotentes, con políticas explícitas ante retrasos, recuperación de periodos, cancelación y fondos insuficientes.',
          bullets: [
            'Separa calendarios futuros de obligaciones aprobadas.',
            'Reintentar nunca debe duplicar un pago.',
            'Conserva la ejecución manual cuando no haya automatización.',
          ],
        },
        {
          title: 'Conocimiento y Operations.',
          text: 'Los registros JSON versionados y archivos públicos o privados conectan documentos, decisiones y trabajo. Operations prevé programación delimitada, notificaciones e integraciones seleccionadas sin otorgar autoridad de gobernanza.',
          cards: [
            {
              title: 'Documentos',
              text: 'Los flujos incluyen registros versionados, cifrado en el cliente y verificación de cargas y descargas. La disponibilidad real de Pinata y las operaciones de retención aún deben validarse.',
              status: 'development',
              link: 'privacy',
            },
            {
              title: 'Operations alojado',
              text: 'La ejecución programada, las notificaciones de Telegram, los webhooks y los recursos se prevén como paquete opcional de pago. El precio final aún no se ha elegido.',
              status: 'planned',
              link: 'roadmap',
            },
          ],
        },
        {
          title: 'Gobernanza básica útil. Servicios opcionales.',
          text: 'La dirección comercial es una base gratuita viable con límites medidos y servicios de pago para comodidad y capacidad operativa. Comprar no debe otorgar votos; el vencimiento no debe retener claves, bloquear retiradas seguras ni borrar trabajo aceptado.',
          bullets: [
            'Elige módulos con configuraciones comprensibles.',
            'Revisa la autoridad solicitada antes de activar un módulo.',
            'Mantén opciones compatibles de despliegue independiente y alojamiento propio.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Documentos DAO cifrados y custodia de cuentas | Daclify',
      description:
        'Entiende la privacidad de Daclify: documentos DAO cifrados, acceso mediante claves, recuperación propia o gestionada y límites de las cadenas públicas.',
      eyebrow: 'Privacidad con decisiones informadas',
      heading: 'El conocimiento compartido, en las manos adecuadas.',
      lead: 'Una DAO puede necesitar una tesorería pública y documentos de trabajo privados. Daclify busca cifrar el contenido protegido antes de publicarlo y convertir la propiedad de las claves en una decisión explícita.',
      sections: [
        {
          title: 'Cifra antes de publicar.',
          text: 'Los pequeños registros descriptivos pueden usar JSON acotado; los contenidos grandes usan CID de IPFS. Títulos, nombres de archivo y contenido protegido deben cifrarse en el cliente antes de llegar al proveedor o a la cadena pública. Los enlaces restringidos del proveedor no sustituyen al cifrado de miembros.',
          bullets: [
            'Las claves de firma y de cifrado cumplen funciones separadas.',
            'Los formatos versionados y compromisos de contenido permiten verificar integridad.',
            'Las concesiones a miembros y las épocas de claves definen el acceso.',
          ],
        },
        {
          title: 'Elige quién puede recuperar las claves.',
          text: 'Recuperar una cuenta y proteger la confidencialidad son cuestiones relacionadas, pero distintas. La política de admisión debe corresponder al tipo de custodia permitido. La recuperación gestionada completa y el ciclo de membresía siguen previstos.',
          cards: [
            {
              title: 'Claves de contenido propias',
              text: 'El usuario conserva las claves de descifrado y la credencial de recuperación. Un acceso social no restaura por sí solo una bóveda perdida. Una DAO puede exigir este modo para evitar la custodia habitual del servicio.',
              status: 'principle',
            },
            {
              title: 'Recuperación gestionada permitida',
              text: 'La recuperación asistida permite al operador acceder a claves recuperables. Esa confianza debe explicarse y acompañarse de políticas comprobadas de recuperación y salida, no de una promesa de exclusión del operador.',
              status: 'planned',
            },
          ],
        },
        {
          title: 'Los cambios de miembros necesitan una política.',
          text: 'La DAO elige si los nuevos miembros reciben acceso histórico o solo futuro. Retirar a un miembro exige rotar el acceso futuro y gestionar las claves ya concedidas. Faltan flujos completos de admisión, rotación y cambio de custodia.',
          bullets: [
            'Un titular autorizado debe conceder acceso al contenido protegido.',
            'Un servidor sin acceso a las claves no puede crear claves de descifrado que no posee.',
            'Los antiguos miembros pueden conservar claves históricas y contenido ya recibido.',
          ],
        },
        {
          title: 'Lo que el cifrado no oculta.',
          text: 'Las referencias de miembros, actividad de transacciones, registros de voto e importes pueden seguir siendo públicos. Cifrar un documento no hace anónima a una DAO ni convierte la ejecución pública en una votación secreta.',
          bullets: [
            'Un miembro puede copiar o compartir el contenido que está autorizado a leer.',
            'Un dispositivo comprometido o una actualización maliciosa puede exponer claves desbloqueadas.',
            'Eliminar un pin no borra la historia de la cadena ni todas las copias ajenas.',
          ],
        },
        {
          title: 'Registros duraderos y disponibilidad clara.',
          text: 'Los flujos actuales prueban cargas cifradas, integridad, recuperación tras respuestas perdidas e historial con un proveedor local identificado. Faltan verificación real de Pinata, exportación, reanclaje, retención y recuperación completa antes del lanzamiento.',
          bullets: [
            'La integridad y la disponibilidad son requisitos distintos.',
            'Las búsquedas y notificaciones privadas deben respetar la misma política.',
            'La exportación y la salida de custodia forman parte del producto previsto.',
          ],
        },
      ],
    },
    roadmap: {
      title: 'Hoja de ruta y estado de desarrollo de Daclify V2',
      description:
        'Consulta qué implementa Daclify V2 y qué falta: verificación de contratos, cuentas, despliegues independientes, Pinata, EVM y Operations alojado.',
      eyebrow: 'La hoja de ruta',
      heading: 'Construir con cuidado. Mostrar el progreso.',
      lead: 'V2 es una implementación activa en desarrollo. Los flujos locales aportan evidencia útil, pero no constituyen una versión de producción. Esta hoja de ruta separa lo implementado del trabajo necesario para lanzar.',
      sections: [
        {
          title: '01 / Los cimientos toman forma.',
          text: 'La versión de desarrollo incluye contratos Antelope C++ del núcleo y Hub, cuentas internas con claves propias, API TypeScript, creación de DAO compartidas, créditos, tesorería y documentación generada.',
          cards: [
            {
              title: 'Gobernanza conectada',
              text: 'Votaciones y finalización de Decide, entregas y revisiones de Works y nóminas financiadas se prueban en flujos locales.',
              status: 'development',
            },
            {
              title: 'Registros y privacidad',
              text: 'JSON versionado y archivos públicos o privados incluyen comprobaciones de integridad y conciliación de cargas.',
              status: 'development',
            },
            {
              title: 'Una interfaz útil',
              text: 'La aplicación Vue/TypeScript tiene recuperación, gobernanza, documentos, tesorería y ayuda contextual.',
              status: 'development',
            },
          ],
        },
        {
          title: '02 / Validar el núcleo antes del lanzamiento.',
          text: 'Un defecto confirmado de autorización nativa y el control incompleto del código de módulos bloquean el lanzamiento. Faltan verificaciones nativas completas, comprobaciones de despliegue, límites de recursos, herramientas de versiones y revisión independiente. V2 aún no debe tratarse como producto validado para fondos reales.',
          bullets: [
            'Corregir y verificar la autoridad de los contratos en el entorno nativo real.',
            'Vincular código revisado, interfaces y documentación a versiones comprobadas.',
            'Completar la conformidad de los despliegues compartidos e independientes.',
          ],
        },
        {
          title: '03 / Completar cuentas y documentos.',
          text: 'Faltan admisión de producción, vinculación nativa, recuperación gestionada, acceso social y Telegram y ciclo de claves. También siguen pendientes Pinata real, retención, exportación y pruebas en los clientes compatibles.',
          bullets: [
            'Ambos modos de custodia necesitan recuperación y salida completas.',
            'La política privada debe mantenerse cuando cambian los miembros.',
            'Las pruebas con proveedores reales se distinguen de las simulaciones locales.',
          ],
        },
        {
          title: '04 / Ampliar lo que pueden hacer las comunidades.',
          text: 'Se prevén comités, ejecución de propuestas, políticas más completas de Works y nóminas, soporte Telos EVM según capacidades, Operations y recursos medidos. Los adaptadores de otras cadenas responden a casos concretos con modelos explícitos de prueba y finalidad.',
          bullets: [
            'La identidad EVM y los pagos son capacidades distintas.',
            'Un hash de transacción por sí solo no prueba un pago.',
            'El vencimiento de servicios debe preservar derechos básicos y obligaciones aprobadas.',
          ],
        },
        {
          title: 'Lanzar es un compromiso, no una cuenta atrás.',
          text: 'El código necesita herramientas de despliegue y migración, copias, procedimientos y revisión de seguridad. Documentos y pasivos antiguos requieren un inventario real; no se pueden inventar datos perdidos. Este sitio no anuncia una fecha pública ni precios definitivos.',
          bullets: [
            'Sigue el desarrollo y comparte comentarios en la comunidad.',
            'La gobernanza básica busca seguir siendo gratuita dentro de límites definidos.',
            'La publicación en testnet y producción requiere una revisión expresa.',
          ],
        },
      ],
    },
  },
};
