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
  status: { planned: 'En la hoja de ruta' },
  productNote: 'Tus reglas. Tus miembros. Un espacio compartido.',
  app: 'Abrir la app',
  docs: 'Leer la documentación',
  docsNav: 'Documentación',
  benefits: ['MIEMBROS', 'VOTACIONES', 'PROYECTOS', 'TESORERÍA', 'DOCUMENTOS'],
  community: 'Únete a la comunidad',
  communityIq: {
    title: 'Gobernanza DAO para CommunityIQ',
    text: 'CommunityIQ conecta personas, ideas y conocimiento compartido. Usará Daclify como su plataforma principal para gestionar DAOs y ayudar a sus comunidades a organizar miembros, tomar decisiones y administrar recursos compartidos.',
    linkLabel: 'Conoce CommunityIQ',
  },
  more: 'Más información',
  footer: 'Herramientas para comunidades que deciden juntas.',
  footerNote:
    'Miembros, decisiones, proyectos financiados y conocimiento compartido. Todo en un mismo espacio.',
  ctaTitle: 'Dale a tu comunidad un espacio para avanzar.',
  ctaText:
    'Explora las DAOs en la app, encuentra las herramientas que necesita tu comunidad y consulta el manual para aprender a utilizarlas.',
  questions: 'Buenas preguntas. Respuestas claras.',
  faq: [
    {
      question: '¿Qué es Daclify?',
      answer:
        'Daclify es una plataforma para gestionar una DAO: una comunidad que organiza sus propios miembros, decisiones y fondos compartidos. Reúne votaciones, financiación de proyectos, pagos a colaboradores y documentos en un mismo espacio, con reglas acordadas que quedan registradas en contratos inteligentes.',
    },
    {
      question: '¿Para quién está pensado?',
      answer:
        'Para proyectos comunitarios, cooperativas, grupos de colaboradores y organizaciones que toman decisiones en conjunto. Daclify permite dar voz a los miembros, organizar un presupuesto común y seguir el trabajo que ese presupuesto financia.',
    },
    {
      question: '¿Cada miembro necesita una cuenta en blockchain?',
      answer:
        'No. Las cuentas de Daclify permiten participar sin crear una cuenta propia en la blockchain nativa. La DAO sigue utilizando contratos inteligentes para registrar sus reglas y acciones. Las opciones adicionales de acceso con monedero, redes sociales y Telegram están en la hoja de ruta.',
    },
    {
      question: '¿Qué son los créditos de gobernanza?',
      answer:
        'Son unidades de voto definidas por tu DAO. Sirven para determinar cuánto peso tiene el voto de cada miembro. Son independientes de los activos de tesorería y no se pueden retirar como dinero.',
    },
    {
      question: '¿Podemos mantener documentos privados?',
      answer:
        'Los documentos protegidos se cifran antes de almacenarse. Los miembros autorizados necesitan las claves adecuadas para leerlos. La actividad en blockchain puede seguir siendo pública y un miembro puede conservar información que ya haya leído. La guía de privacidad explica estos límites.',
    },
    {
      question: '¿Cuánto cuesta Daclify?',
      answer:
        'El objetivo es ofrecer una base útil de gobernanza gratuita, con módulos y servicios alojados de pago opcionales. Los precios y límites de recursos se publicarán antes de ofrecer esos servicios. La hoja de ruta describe las opciones previstas.',
    },
    {
      question: '¿Por dónde empezamos?',
      answer:
        'Abre la app para explorar el Hub de DAOs. Consulta el manual para aprender sobre cuentas, creación de DAOs, votaciones, proyectos financiados y documentos. La documentación de la app indica las funciones disponibles y las instrucciones de cada despliegue.',
    },
  ],
  preview: {
    label: 'Comunidad de ejemplo',
    name: 'La Comunidad del Barrio',
    caption: 'Un propósito común. Un espacio para organizarse.',
    tabs: ['Decisiones', 'Trabajo', 'Documentos'],
    rows: ['Propuesta de huerto comunitario', 'Entrega del taller', 'Manual del proyecto'],
    tags: ['Votación', 'En revisión', 'Miembros'],
    flow: ['Proponer', 'Decidir', 'Entregar'],
    note: 'Una comunidad. Herramientas conectadas. Responsabilidades claras.',
  },
  pages: {
    home: {
      title: 'Daclify — Herramientas DAO para comunidades que deciden juntas',
      description:
        'Gestiona miembros de tu DAO, vota propuestas, financia proyectos y organiza documentos con Daclify. Explora la app y aprende a usarla con su manual.',
      eyebrow: 'Un espacio compartido para tu DAO',
      heading: 'Tu comunidad.\nTus decisiones.\nTu futuro.',
      lead: 'Organiza tu comunidad en un solo lugar. Gestiona miembros, vota propuestas, financia proyectos y ordena documentos, con reglas que todos puedan consultar y entender.',
      sections: [
        {
          title: 'De una buena idea a algo que podéis construir.',
          text: 'Dale a tu comunidad un proceso claro para decidir y actuar. Conecta la propuesta, el presupuesto y el trabajo para que todos puedan seguir el siguiente paso.',
          cards: [
            {
              title: 'Reúne a las personas',
              text: 'Asigna una cuenta a los miembros, define sus roles y facilita la participación. Pueden unirse sin crear una cuenta propia en la blockchain nativa.',
              link: 'platform',
            },
            {
              title: 'Decidid juntos',
              text: 'Somete las ideas a votación. Define las reglas, consulta los resultados y conserva un registro compartido de las decisiones.',
              link: 'modules',
            },
            {
              title: 'Financia trabajo con propósito',
              text: 'Vincula el presupuesto a proyectos e hitos. Revisa las entregas de los colaboradores y sigue los pagos aprobados por la DAO.',
              link: 'modules',
            },
          ],
        },
        {
          title: 'Elige las herramientas que necesita tu comunidad.',
          text: 'Empieza con módulos específicos para decisiones, financiación de proyectos y pagos periódicos a colaboradores. Cada uno tiene una función clara para acompañar el crecimiento de tu comunidad.',
          cards: [
            {
              title: 'Decide',
              text: 'Crea votaciones, permite votar a los miembros autorizados y registra el resultado final. Haz que las decisiones sean fáciles de seguir.',
              link: 'modules',
            },
            {
              title: 'Works',
              text: 'Propón un proyecto, acuerda sus hitos y revisa las entregas antes de aprobar el pago. Un proceso común para colaboradores y revisores.',
              link: 'modules',
            },
            {
              title: 'Payroll',
              text: 'Organiza pagos a colaboradores con financiación y duración definidas. Mantén el calendario y los compromisos aprobados junto a la tesorería.',
              link: 'modules',
            },
          ],
        },
        {
          title: 'Un hogar para tu DAO. Un Hub para tu comunidad.',
          text: 'Descubre DAOs a través del Hub y abre el espacio de la comunidad en la que quieras participar. Cada DAO tiene sus propios miembros, reglas y registros.',
          cards: [
            {
              title: 'Empieza con contratos compartidos',
              text: 'Usa una infraestructura común manteniendo separados los miembros, la configuración y los registros de tesorería de tu DAO. Dedica tu tiempo a organizar la comunidad.',
              link: 'platform',
            },
            {
              title: 'Gestiona tu propio despliegue',
              text: 'Los contratos propios y las conexiones directas están en la hoja de ruta para las comunidades que quieran gestionar su infraestructura y conectarse al mismo Hub.',
              status: 'planned',
              link: 'roadmap',
            },
          ],
        },
        {
          title: 'Mantén el conocimiento cerca del trabajo.',
          text: 'Guarda decisiones, notas y documentos junto a la actividad que respaldan. Usa registros públicos cuando importe la transparencia y documentos cifrados cuando el contenido necesite una audiencia más reducida.',
          bullets: [
            'Conserva un historial de versiones para seguir los cambios.',
            'Usa registros compactos para la información cotidiana y referencias IPFS para archivos grandes.',
            'Comprende quién puede leer el contenido protegido y quién conserva las claves de recuperación.',
          ],
        },
      ],
    },
    platform: {
      title: 'Miembros, cuentas y espacios de trabajo DAO | Daclify',
      description:
        'Reúne miembros, roles, votaciones y fondos compartidos en Daclify. Conoce las cuentas DAO, el Hub y las opciones de despliegue compartido o independiente.',
      eyebrow: 'La plataforma',
      heading: 'Un espacio claro para organizarse juntos.',
      lead: 'Daclify reúne personas, decisiones, fondos y conocimiento en un espacio compartido para tu DAO. La comunidad define las reglas y cada miembro puede entender su papel y sus responsabilidades.',
      sections: [
        {
          title: 'Facilita la participación.',
          text: 'Las cuentas de Daclify identifican a los miembros dentro del contrato inteligente. No necesitan una cuenta independiente en la blockchain nativa. Los roles definen quién puede votar, revisar trabajo o gestionar la configuración.',
          cards: [
            {
              title: 'Una cuenta para cada miembro',
              text: 'Usa una identidad en todas las herramientas de tu DAO. La pertenencia y los permisos siguen a la persona, sin recrearlos para votaciones, proyectos y documentos.',
            },
            {
              title: 'Claves bajo tu control',
              text: 'Las cuentas controladas por el usuario utilizan una bóveda local cifrada y credenciales de recuperación. Guarda la copia de seguridad: iniciar sesión en otro dispositivo no sustituye una credencial perdida.',
            },
            {
              title: 'Más formas de acceder',
              text: 'La vinculación de monederos nativos, el acceso social, Telegram y la recuperación gestionada están en la hoja de ruta. Cada opción tendrá permisos y responsabilidades de recuperación explícitos.',
              status: 'planned',
            },
          ],
        },
        {
          title: 'Tu DAO conserva su propia identidad.',
          text: 'Los contratos compartidos dan a cada DAO sus propios miembros, configuración y registros de tesorería. El Hub permite descubrir y abrir esos espacios.',
          cards: [
            {
              title: 'Infraestructura compartida',
              text: 'Crea una DAO dentro de un despliegue compartido y configura las herramientas que necesita tu comunidad. Conserva los registros de la organización en un mismo espacio.',
            },
            {
              title: 'Infraestructura independiente',
              text: 'La hoja de ruta incluye contratos propios conectados al Hub. Las comunidades que elijan esta opción asumirán también el despliegue, las actualizaciones y la operación continua.',
              status: 'planned',
            },
          ],
        },
        {
          title: 'El poder de voto y el dinero cumplen funciones distintas.',
          text: 'Los créditos de gobernanza ayudan a determinar quién tiene voz en la DAO. Los activos de tesorería pagan el trabajo que apoya la comunidad. Separarlos permite explicar las reglas con claridad.',
          bullets: [
            'Define el poder de voto mediante la política de gobernanza de tu DAO.',
            'Usa activos blockchain compatibles para financiar la tesorería y realizar pagos.',
            'Consulta las guías de la app para conocer los tokens y las políticas de voto compatibles.',
          ],
        },
        {
          title: 'Aprende donde trabajas.',
          text: 'La app incluye un manual con buscador para cuentas, configuración de DAOs, votaciones, proyectos, pagos y documentos. Las guías muestran su versión para comprobar que las instrucciones corresponden al despliegue conectado.',
          bullets: [
            'Consulta el manual antes de usar una función.',
            'Revisa los permisos de un módulo antes de activarlo.',
            'Conserva de forma segura las credenciales de firma y recuperación de documentos.',
          ],
        },
      ],
    },
    modules: {
      title: 'Votaciones DAO, proyectos y pagos a colaboradores | Daclify',
      description:
        'Descubre los módulos de Daclify para votaciones, financiación por hitos, pagos y documentos compartidos. Elige las herramientas que necesita tu comunidad.',
      eyebrow: 'Los módulos',
      heading: 'Herramientas para convertir decisiones en avances.',
      lead: 'Cada comunidad trabaja de una forma distinta. Elige herramientas específicas para votar, financiar proyectos y pagar a colaboradores, con cuentas y registros compartidos en toda la DAO.',
      sections: [
        {
          title: 'Decide — da una voz clara a los miembros.',
          text: 'Recoge votos y registra un resultado. Define quién puede participar, cómo se calcula el peso del voto y cuándo termina la votación, para que los miembros conozcan las reglas desde el principio.',
          bullets: [
            'Crea una votación con una pregunta y opciones claras.',
            'Permite votar a los miembros autorizados desde el espacio de la DAO.',
            'Finaliza la votación y conserva el resultado como registro compartido.',
          ],
        },
        {
          title: 'Works — conecta financiación y entregas.',
          text: 'Convierte una propuesta en hitos acordados. Los colaboradores presentan su trabajo y los revisores autorizados pueden solicitar cambios o aceptarlo. Sigue la financiación y el pago aprobado junto al proyecto.',
          bullets: [
            'Acuerda el alcance, el importe y los hitos.',
            'Mantén entregas, comentarios y aprobaciones en un mismo proceso.',
            'Consulta qué compromisos se han aceptado y cuáles siguen pendientes.',
          ],
        },
        {
          title: 'Payroll — organiza colaboraciones periódicas.',
          text: 'Crea calendarios financiados y de duración definida para quienes colaboran con tu DAO durante un periodo. Haz que los compromisos de pago sean comprensibles para la organización y los colaboradores.',
          bullets: [
            'Define el destinatario, el importe y el calendario de pagos.',
            'Sigue los pagos vencidos y las obligaciones aprobadas.',
            'Conecta los registros de tesorería con los compromisos de los colaboradores.',
          ],
        },
        {
          title: 'Documentos — recuerda el motivo de una decisión.',
          text: 'Mantén propuestas, notas, acuerdos y archivos cerca de las decisiones que respaldan. El historial de versiones ayuda a seguir los cambios y los archivos cifrados protegen el contenido de acceso limitado.',
          cards: [
            {
              title: 'Registros compartidos',
              text: 'Usa registros JSON compactos para la información cotidiana y referencias IPFS para archivos grandes. Conserva versiones anteriores para consultar el contexto.',
            },
            {
              title: 'Documentos protegidos',
              text: 'Cifra el contenido privado antes de almacenarlo y proporciona las claves a los miembros autorizados. Aprende qué protege el cifrado y qué sigue siendo público.',
              link: 'privacy',
            },
          ],
        },
        {
          title: 'Empieza con lo esencial. Añade lo que ayude.',
          text: 'El objetivo es mantener gratuita una base útil de gobernanza. Se prevén módulos y servicios alojados de pago opcionales para comunidades que necesiten más capacidad o comodidad. Los precios y límites se publicarán antes de ofrecerlos.',
          cards: [
            {
              title: 'Elige tu forma de trabajar',
              text: 'Activa las herramientas adecuadas para tu comunidad, revisa sus permisos y consulta el manual para entender su configuración.',
            },
            {
              title: 'Operaciones alojadas',
              text: 'La automatización, las notificaciones y algunas integraciones están en la hoja de ruta como servicios opcionales. Apoyan el trabajo de la DAO respetando sus reglas de gobernanza.',
              status: 'planned',
              link: 'roadmap',
            },
          ],
        },
      ],
    },
    privacy: {
      title: 'Documentos DAO privados y registros cifrados | Daclify',
      description:
        'Organiza documentos de tu DAO y protege el contenido privado mediante cifrado. Comprende el acceso de miembros, la recuperación y los límites de la blockchain pública.',
      eyebrow: 'Privacidad con decisiones claras',
      heading: 'Comparte conocimiento con las personas adecuadas.',
      lead: 'Hay información que debe ser pública y otra que pertenece a quienes realizan el trabajo. Daclify conecta registros compartidos y documentos cifrados con tu DAO, con decisiones claras sobre acceso y recuperación.',
      sections: [
        {
          title: 'Protege el contenido antes de almacenarlo.',
          text: 'Los archivos privados se cifran en el dispositivo del usuario antes de subirse. El archivo almacenado contiene datos cifrados y el miembro autorizado necesita la clave correcta para leerlos. El enlace público no desbloquea el documento.',
          bullets: [
            'Mantén separadas las claves de firma y de cifrado de documentos.',
            'Usa el historial de versiones para seguir las actualizaciones.',
            'Comprueba la integridad del archivo al recuperar el contenido.',
          ],
        },
        {
          title: 'Conoce quién conserva las claves.',
          text: 'En las cuentas controladas por el usuario, el miembro conserva sus credenciales de recuperación. La recuperación gestionada es una alternativa prevista con una relación de confianza distinta: un servicio capaz de recuperar claves de descifrado también puede acceder a ellas.',
          cards: [
            {
              title: 'Recuperación bajo tu control',
              text: 'Haz una copia de seguridad de la credencial y guárdala de forma segura. Sin ella ni otro titular autorizado de la clave, perder una clave de descifrado puede suponer perder el acceso al contenido.',
            },
            {
              title: 'Recuperación gestionada',
              text: 'La recuperación asistida prevista explicará qué puede recuperar y consultar el operador. Cada DAO necesitará una política explícita sobre si permite este modo.',
              status: 'planned',
            },
          ],
        },
        {
          title: 'Un documento privado no hace privada toda la actividad.',
          text: 'El cifrado protege el contenido de los documentos. Las referencias de miembros, los votos, las transferencias y otras acciones en una blockchain pública pueden seguir siendo visibles. Daclify no promete miembros anónimos ni votaciones secretas.',
          bullets: [
            'Un miembro autorizado puede copiar o compartir la información que lee.',
            'Eliminar a un miembro no borra la información que ya recibió.',
            'No se puede retirar el historial público ni las copias de archivos de terceros.',
          ],
        },
        {
          title: 'Prepara los cambios de miembros.',
          text: 'La DAO necesita reglas para acceder a documentos históricos y cambiar el acceso futuro cuando alguien entra o sale. La hoja de ruta incluye procesos más completos de acceso y rotación de claves. El manual describe el comportamiento compatible con cada despliegue.',
          bullets: [
            'Decide quién debe acceder a los registros anteriores.',
            'Trata la rotación de claves y la salida de miembros como pasos relacionados.',
            'Aclara las responsabilidades de recuperación antes de compartir contenido sensible.',
          ],
        },
        {
          title: 'Conserva registros útiles a largo plazo.',
          text: 'La información compacta se guarda en registros del contrato y los documentos grandes usan referencias IPFS. Una referencia identifica el archivo, pero su almacenamiento y acceso continuados dependen del proveedor configurado y de las claves conservadas.',
          bullets: [
            'Guarda copias de las credenciales esenciales de recuperación.',
            'Comprende la configuración de almacenamiento de tu despliegue.',
            'Consulta el manual para los procedimientos actuales de documentos y acceso.',
          ],
        },
      ],
    },
    roadmap: {
      title: 'Hoja de ruta de Daclify — cuentas, DAOs e integraciones',
      description:
        'Conoce la hoja de ruta de Daclify: acceso social y Telegram, contratos DAO propios, servicios alojados y futuras conexiones blockchain. Explora la app y su manual.',
      eyebrow: 'La hoja de ruta',
      heading: 'Más formas de hacer tuyo Daclify.',
      lead: 'La hoja de ruta amplía el espacio compartido para miembros, votaciones, proyectos financiados y documentos. Estas son las próximas capacidades que queremos acercar a las comunidades; el manual de la app indica su disponibilidad.',
      sections: [
        {
          title: 'Más formas de unirse.',
          text: 'Las opciones previstas incluyen acceso social, Telegram, vinculación de monederos nativos y recuperación gestionada. Tanto las cuentas controladas por el usuario como las gestionadas deben explicar quién controla las claves y cómo se recuperan.',
          cards: [
            {
              title: 'Acceso social y Telegram',
              text: 'Facilitar la entrada al espacio conservando una identidad por miembro y los permisos de la DAO.',
              status: 'planned',
            },
            {
              title: 'Recuperación gestionada',
              text: 'Ofrecer un modo asistido claramente identificado junto a las claves controladas por el usuario, con responsabilidades documentadas de recuperación y salida.',
              status: 'planned',
            },
          ],
        },
        {
          title: 'Tus propios contratos, conectados al Hub.',
          text: 'Los despliegues independientes permitirán gestionar contratos y actualizaciones propios usando el Hub para descubrir comunidades. Esta opción también necesita conexiones directas, guías compatibles y responsabilidades operativas claras.',
          bullets: [
            'Control del despliegue y las actualizaciones por parte de la DAO.',
            'Descubrimiento junto a comunidades con contratos compartidos.',
            'Acceso directo para las comunidades que gestionen su infraestructura.',
          ],
        },
        {
          title: 'Más apoyo para las operaciones cotidianas.',
          text: 'Se prevén servicios alojados opcionales para acciones programadas, notificaciones e integraciones. El objetivo es reducir la administración rutinaria con precios transparentes y sin cambiar los derechos de voto.',
          cards: [
            {
              title: 'Operaciones alojadas',
              text: 'Programación, notificaciones de Telegram y webhooks seleccionados, con límites y permisos claros.',
              status: 'planned',
            },
            {
              title: 'Más opciones de gobernanza',
              text: 'Opciones adicionales para elecciones, comités y ejecución de propuestas, junto a políticas más amplias para proyectos y pagos.',
              status: 'planned',
            },
            {
              title: 'Herramientas de acceso a documentos',
              text: 'Procesos más completos para el ciclo de vida de claves, la exportación, la conservación y la recuperación.',
              status: 'planned',
            },
          ],
        },
        {
          title: 'Conexiones más allá de una blockchain.',
          text: 'Las identidades Telos EVM y futuras conexiones de pago forman parte de la dirección a largo plazo. Los pagos entre cadenas requieren pruebas verificadas de las transacciones y reglas claras de liquidación antes de respaldar obligaciones de una DAO.',
          bullets: [
            'Tratar la vinculación de identidades y la liquidación de pagos como capacidades distintas.',
            'Añadir integraciones para necesidades concretas de las comunidades.',
            'Publicar en el manual las cadenas compatibles y los requisitos de verificación.',
          ],
        },
        {
          title: 'Mantener lo esencial accesible.',
          text: 'Queremos una base útil de gobernanza gratuita, con capacidades de pago opcionales para quien necesite más. No hay precios ni fechas anunciadas para los elementos de la hoja de ruta. La documentación versionada de la app es la referencia para las funciones compatibles.',
          bullets: [
            'Elige herramientas que ayuden a tu comunidad.',
            'Consulta en la app las funciones disponibles y los requisitos del despliegue.',
            'Comparte ideas y necesidades con la comunidad de Daclify.',
          ],
        },
      ],
    },
  },
};
