# Proyecto de backend con NodeJS

Soy un profesor de programación en NodeJS.

Hay que desarrollar un pequeño servicio web para aprender con NodeJS y Express con un backend que ofrezca varios endpoints y que trabaje con información almacenada en memoria. No habrá persistencia de datos. Toda la comunicación será empleando JSON, del navegador hacia el servidor y del servidor hacia el navegador.

No usen internet para buscar información. Los datos con los que se va a trabajar están almacenados en el fichero @empleados.js. Solo trabaja con esos datos. No puedes modificar el fichero @empleados.js. Es necesario que esta información se almacene en memoria para simular algunas operaciones, por ejemplo, empleando un arreglo de empleados.

Hay que desarrollar exactamente endpoints para:
* Autenticar al usuario. Solo hay un único usuario llamado rosalia con la contraseña tracatra, que debe estar hardcoded en el código. Si el endpoint recibe los valores correctos devuelve un token JWT.
* Recuperar todos los empleados.
* Recuperar un empleado empleando su identificador.
* Crear un nuevo empleado suministrando algunas o todas las propiedades del empleado. Es necesario que esta operación se almacene en memoria.
* Actualizar un empleado empleando su identificador, suministrando algunas o todas las propiedades del empleado.Es necesario que esta operación se almacene en memoria.
* Eliminar un empleado empleando su identificador. Es necesario que esta operación se almacene en memoria.
* Recuperar todos los empleados de una determinada categoria.
* Recuperar todos los empleados de un determinado genero.
* Recuperar todos los empleados de un determinado departamento, simulando que el endpoint falla la mitad de las veces.

Todos los endpoints deben funcionar con CORS desde cualquier direccion logica.
Todos los endpoints deben enviar la información con un retraso de un segundo.
Todos los endpoints deben devolver la información si reciben un token JWT válido. En otro caso deben devolver un error.

Comprueba que todos los endpoints funcionen correctamente segun las instrucciones.

Elabora un breve manual en formato markdown llamado readme.md que explique todos los endpoints y que indique como consumir cada uno de los endpoints en JavaScript con fetch.
Añade en el manual como generar una imagen Docker con este servidor. Dame el fichero Dockerfile y el fichero docker-compose.yml. Damen también las instrucciones para generar la imagen, el tag y arrancar desde el terminal.

Pregunta cualquier cosa cuando tengas dudas.
No muestres el proceso de razonamiento.