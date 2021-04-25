const PostgresService = require('../../services/postgres.service');
const _pg = new PostgresService();

const getPersonas = async (req, res) => {
    let sql = 'select * from personas'
    let result = await _pg.executeSql(sql);
    let rows = result.rows
    return res.send(rows);
};

const createPersonas = (req, res) => {
    return res.send("Create personas");
};

module.exports = {getPersonas, createPersonas};