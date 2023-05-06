## WEEDWEB

Una empresa de cultivo desea desarrollar un sistema para gestionar la siembra y el cuidado del cultivo de cannabis. Este sistema cuenta con modelo de negocio conocido como Business to Business (b2b), es por eso que el único rol que tendrá la aplicación es el de empresa. Al ingresar a la página, la empresa podrá realizar lo siguiente: Podrá registrarse en el sistema como empresa, brindando toda la información solicitada. A partir de información suministrada por la empresa (bloque de parcelas y atributos, fecha inicial, posición, zona, semilla a cultivar, estimación) dar información logística para su cultivo. Podrá crear y granular parcelas y distintos grupos con la capacidad de añadir todas sus características. El sistema deberá presentarle a la empresa que esté usando la aplicación lo siguiente: Brindar información del mejor tipo de cosecha y del pronóstico del clima. Brindar la posibilidad de adquirir todos los elementos necesarios para la cultivación en una tienda interna, supliendo así la necesidad de logística y de adquisición de suministros al mismo tiempo. Presentarle un gráfico de estadísticas de la mejor forma posible en donde muestre todo sobre los meses que lleva cultivando. Adicionalmente, el sistema cuenta con el modelo freemium en donde la cantidad de parcelas y las estadísticas es limitada, si desea obtener más parcelas deberá pagarla. Además, la empresa desea conocer el mapa de parcelas disponibles y así poder comprarlas.



Crear un archivo .env a raiz 

        DB_NAME=weedweb
        DB_USER=weed
        DB_PASSWORD=root
        DB_HOST=127.0.0.1
        DB_PORT=5432
        DB_CONTAINER_NAME=postgres_weed
        PGADMIN_MAIL=your@email.com
        PGADMIN_PW=changeit


y crear otro archivo con las mismas caracteristicas en ApiweedWeb/backend_weedweb