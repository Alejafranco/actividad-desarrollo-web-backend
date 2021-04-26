//Servicio de postgres
const PostgresService = require('../../services/postgres.service');
const _pg = new PostgresService();
//Servicio de Nodemailer
const NodemailService = require('../../services/mailer.services');
const _NodemailService = new NodemailService();
//Servicio de excelJS
const ExcelService = require('../../services/excel.service');
const _ExcelService = new ExcelService();

/**
 * Método de consultar todas las personas
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const getPersonas = async (req, res) => {
    let sql = 'select * from personas';
    //Resolviendo la promesa
    try {
        let result = await _pg.executeSql(sql);
        let rows = result.rows;
        return res.send({ ok: true, message: "Personas consultadas", content: rows });

    } catch (error) {
        return res.send({ ok: false, message: "Ha ocurrido un error consultando las personas", content: error });
    }

};

/**
 * Metodo para enviar un correo de bienvenida
 * @param {String} name 
 * @param {String} email 
 * @returns 
 */
const enviar = async (name, email) => {
    try {
        return await _NodemailService.getTransporter().sendMail({
            from: '"Maria Alejandra" <mafa1008@gmail.com>', // sender address
            to: email, // list of receivers
            subject: `BIENVENID@ ❤ ${name}`, // Subject line
            text: "Bienvenido a la universidad :)",
        });
    } catch (error) {
        console.log('error de enviar correo');
        console.log(error);
    }
};

/**
 * Crear una persona
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const createPersonas = async (req, res) => {
    try {
        let persona = req.body;
        let sql = `INSERT INTO public.personas("name", email) VALUES($1, $2);`;
        let data = [persona.name, persona.email];
        let result = await _pg.executeSql(sql, data);
        console.log(result);
        await enviar(persona.name, persona.email);
        return res.send({
            ok: result.rowCount == 1,
            message: result.rowCount == 1 ? "Persona creada" : "La persona no fue creada",
            content: persona
        });
    } catch (error) {
        return res.send({ ok: false, message: "Ha ocurrido un error creando la persona", content: error });
    }
};

const creteReportPersonas = async (req, res) => {
    try {
        let sql = 'select * from personas';
        let result = await _pg.executeSql(sql);
        let rows = result.rows;
        await _ExcelService.createSheet(rows);
        return res.send({
            ok: true,
            mensaje: "Reporte excel creado",
            contenido: "http://localhost:3001/reportes/reportePersonas.xlsx"
        })
    } catch (error) {
        return res.send({
            ok: false,
            mensaje: "Error creando reporte tabla personas",
            contenido: error
        })
    }
}

module.exports = { getPersonas, createPersonas, creteReportPersonas};