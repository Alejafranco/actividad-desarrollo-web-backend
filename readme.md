# Actividad Seg #4 -Backend & Postman
## OBJETIVO: Analizar y compreder la estructura de un API.
## OBJETIVOS ESPECIFICOS:
- Identificar los diferentes endpoints que se pueden tener en un proyecto.
- Diferenciar los http methods 
- Construir adecuadamente una petición http request con sus componentes.

## SCRIPT BASE DE DATOS
1. create database universidad;
2. create table personas ( id serial not null primary key, name varchar not null,  email varchar not null);

### Librerias:
- https://expressjs.com/es/ `sirve para crear los endpoint (url) de una manera rápida y segura.`
- https://www.npmjs.com/package/nodemon `Automatically restarting the node application when file changes in the directory are detected.`
- https://node-postgres.com/ `Permite que nuetra API (back) se conecte con nuestra BD`

### URL
- http://localhost:3001/personas visualiza el JSON de 'Personas'
- http://localhost:3001/reporte visualiza el link (dar click) para descargar el reporte de la tabla 'Personas'