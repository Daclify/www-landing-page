# Documentos DAO cifrados y custodia de cuentas | Daclify

> Entiende la privacidad de Daclify: documentos DAO cifrados, acceso mediante claves, recuperación propia o gestionada y límites de las cadenas públicas.

https://daclify.com/es/privacidad/

Daclify V2 está en desarrollo. El lanzamiento público requiere verificar los contratos y revisar la versión.

Una DAO puede necesitar una tesorería pública y documentos de trabajo privados. Daclify busca cifrar el contenido protegido antes de publicarlo y convertir la propiedad de las claves en una decisión explícita.

## Cifra antes de publicar.

Los pequeños registros descriptivos pueden usar JSON acotado; los contenidos grandes usan CID de IPFS. Títulos, nombres de archivo y contenido protegido deben cifrarse en el cliente antes de llegar al proveedor o a la cadena pública. Los enlaces restringidos del proveedor no sustituyen al cifrado de miembros.

- Las claves de firma y de cifrado cumplen funciones separadas.
- Los formatos versionados y compromisos de contenido permiten verificar integridad.
- Las concesiones a miembros y las épocas de claves definen el acceso.

## Elige quién puede recuperar las claves.

Recuperar una cuenta y proteger la confidencialidad son cuestiones relacionadas, pero distintas. La política de admisión debe corresponder al tipo de custodia permitido. La recuperación gestionada completa y el ciclo de membresía siguen previstos.

### Claves de contenido propias — Principio de diseño

El usuario conserva las claves de descifrado y la credencial de recuperación. Un acceso social no restaura por sí solo una bóveda perdida. Una DAO puede exigir este modo para evitar la custodia habitual del servicio.

### Recuperación gestionada permitida — Previsto

La recuperación asistida permite al operador acceder a claves recuperables. Esa confianza debe explicarse y acompañarse de políticas comprobadas de recuperación y salida, no de una promesa de exclusión del operador.


## Los cambios de miembros necesitan una política.

La DAO elige si los nuevos miembros reciben acceso histórico o solo futuro. Retirar a un miembro exige rotar el acceso futuro y gestionar las claves ya concedidas. Faltan flujos completos de admisión, rotación y cambio de custodia.

- Un titular autorizado debe conceder acceso al contenido protegido.
- Un servidor sin acceso a las claves no puede crear claves de descifrado que no posee.
- Los antiguos miembros pueden conservar claves históricas y contenido ya recibido.

## Lo que el cifrado no oculta.

Las referencias de miembros, actividad de transacciones, registros de voto e importes pueden seguir siendo públicos. Cifrar un documento no hace anónima a una DAO ni convierte la ejecución pública en una votación secreta.

- Un miembro puede copiar o compartir el contenido que está autorizado a leer.
- Un dispositivo comprometido o una actualización maliciosa puede exponer claves desbloqueadas.
- Eliminar un pin no borra la historia de la cadena ni todas las copias ajenas.

## Registros duraderos y disponibilidad clara.

Los flujos actuales prueban cargas cifradas, integridad, recuperación tras respuestas perdidas e historial con un proveedor local identificado. Faltan verificación real de Pinata, exportación, reanclaje, retención y recuperación completa antes del lanzamiento.

- La integridad y la disponibilidad son requisitos distintos.
- Las búsquedas y notificaciones privadas deben respetar la misma política.
- La exportación y la salida de custodia forman parte del producto previsto.

## Telegram

¿Estás creando una comunidad, cooperativa o red de colaboradores? Ayúdanos a dar forma a Daclify. Consulta la hoja de ruta y habla con nosotros en Telegram.

https://t.me/daclify
