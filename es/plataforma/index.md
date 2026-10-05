# Plataforma DAO, cuentas y opciones de despliegue | Daclify

> Conoce cómo Daclify V2 conecta cuentas internas, carteras nativas, contratos propios de cada DAO y un Hub de descubrimiento en una plataforma modular.

https://daclify.com/es/plataforma/

Daclify V2 está en desarrollo. El lanzamiento público requiere verificar los contratos y revisar la versión.

Cada comunidad necesita sus propias reglas. V2 se diseña alrededor de un núcleo estable de identidad, autoridad y tesorería, con módulos especializados al servicio de cada organización.

## Primero las personas. Cuentas que encajan.

Una identidad interna vive en el contrato inteligente y no exige al miembro tener una cuenta nativa. Los miembros y roles pertenecen a la DAO; vincular otra credencial no debe crear otro voto.

### Claves bajo tu control — En desarrollo

Las claves de firma y cifrado son distintas y las controla el usuario. Los flujos de desarrollo incluyen una bóveda local cifrada y credenciales de recuperación. El inicio de sesión social por sí solo no reconstruye esas claves.

### Recuperación gestionada — Previsto

El modo previsto permite asistencia del servicio y explica la autoridad del operador. Se está evaluando un servicio de claves de código abierto; la recuperación de producción aún no está validada.

### Más formas de participar — Previsto

Se prevén vinculación de cuentas Telos nativas, acceso social y Telegram, e identidades Telos EVM según capacidades verificadas. Todas deben conservar los mismos miembros y permisos.


## Contratos compartidos o despliegue propio.

El entorno compartido mantiene el estado específico de cada DAO en contratos comunes. Un despliegue independiente usa las mismas interfaces públicas y las políticas de actualización y tesorería de la DAO.

### Despliegue compartido — En desarrollo

La implementación permite crear DAO, roles, créditos y registros de tesorería en un entorno compartido. El aislamiento completo y la verificación de los contratos nativos siguen siendo requisitos de lanzamiento.

### Despliegue independiente — Previsto

Se prevén contratos propios, conexiones directas y acceso a varios entornos. La DAO debe seguir funcionando cuando el Hub o los servicios alojados no estén disponibles.


## El Hub conecta. No gobierna.

El Hub de descubrimiento busca listar DAO, identificar sus despliegues y describir sus capacidades. Aparecer en el directorio no debe dar a la plataforma control sobre votos, tesorería o actualizaciones.

- La autoridad procede de los roles y políticas explícitos de cada DAO.
- Los permisos de los módulos son delimitados y revisables.
- Interfaces públicas, versiones y documentación avanzan juntas.

## Una base para la gobernanza responsable.

El núcleo usa contratos Antelope C++. La aplicación y los servicios usan TypeScript estricto, con una interfaz Vue. Las decisiones y registros financieros autoritativos pertenecen a los contratos; una pantalla no puede autorizar un pago.

- Los créditos de gobernanza de cada DAO son independientes del dinero.
- La gobernanza con tokens nativos necesita una política compatible de depósito o ponderación.
- El soporte de otras cadenas se añade mediante adaptadores delimitados y verificados.

## Telegram

¿Estás creando una comunidad, cooperativa o red de colaboradores? Ayúdanos a dar forma a Daclify. Consulta la hoja de ruta y habla con nosotros en Telegram.

https://t.me/daclify
