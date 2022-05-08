# Prisma-DB
API: Express + DB. Se utilizará Prisma DB para una conexión a base de datos Postgresql

# Descripcion

Se crea una api para generar el CRUD de 3 tablas (Explorer, Mission, missionCommander), la api se construye con js y se conectara a una base de datos postgres.

<img width="261" alt="Captura de Pantalla 2022-05-08 a la(s) 2 06 23 p m" src="https://user-images.githubusercontent.com/99153503/167311774-49e61235-f230-426d-9119-8d9e839deacb.png">
<img width="254" alt="Captura de Pantalla 2022-05-08 a la(s) 2 06 03 p m" src="https://user-images.githubusercontent.com/99153503/167311778-08137a0f-2c63-426a-b83e-ffbfdac5f517.png">
<img width="239" alt="Captura de Pantalla 2022-05-08 a la(s) 2 05 24 p m" src="https://user-images.githubusercontent.com/99153503/167311781-af5b6da8-522f-4fa1-bcd4-21e9ac0869d5.png">



# Dependencias:
- Express. Utilizada para crear un servidor y la definicion de los endpoints para el intercambio de informacion a traves de http. https://expressjs.com/es/
- Prisma. Se utiliza para la conexion a base de datos, nos da la posibilidad de definir las tablas como modelos, de la misma forma podemos crear los registros sin ejecutar una linea de SQL. https://www.prisma.io
- Cors. Es un mecanismo que utiliza cabeceras HTTP adicionales para permitir que un cliente obtenga permiso para acceder a recursos seleccionados desde un servidor, en un origen distinto (dominio) al que pertenece. https://developer.mozilla.org/es/docs/Web/HTTP/CORS

# Ejecucion

1. Crea un fork para tener una copia del proyeto. 
2. Clona esta copia en tu entorno local.
3. Descarga las dependencias, dentro de este proyecto ejecuta: `npm install`
4. Ejecuta tu api con el comando: ` node server.js `, con esto podrás entrar a la url: `http://localhost:3000/`

# Resultado
Probamos el crud de la tabla missionCommander a traves de la herramienta postman:

1.-Primero obtenemos todos los mission commander con el metodo GET:
![May-08-2022 2-37-02 p m](https://user-images.githubusercontent.com/99153503/167313287-06391ce0-b92c-4fa2-aeb5-73fdde80dfb9.gif)

2.-Obetnemos los datos de un mission comander a traves de su id con el mismo metodo GET:
![May-08-2022 2-36-34 p m](https://user-images.githubusercontent.com/99153503/167313216-4e8a0277-9c03-47ee-a91c-7a4aa0f15777.gif)

3.-Ahora creamos un nuevo registro con el metodo POST:
![May-08-2022 2-35-51 p m](https://user-images.githubusercontent.com/99153503/167312927-3e9c9af9-a899-4421-95fe-5d9a46802dab.gif)

4.-Actualizamos el campo mainStack de un mission commander en especifico a traves de su id con el metodo PUT:
![May-08-2022 2-35-05 p m](https://user-images.githubusercontent.com/99153503/167313214-cf0bb16e-79a6-41b2-aecc-5b1937c0d0aa.gif)

5.-Ahora eliminamos un registro de la tabla enviando el id a traves del metodo DELETE:
![May-08-2022 2-34-29 p m](https://user-images.githubusercontent.com/99153503/167313023-97997e65-590e-4306-b8ab-1c4795880170.gif)


