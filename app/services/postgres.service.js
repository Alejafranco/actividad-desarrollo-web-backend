const pg = require('pg');

class PostgresService{
    constructor(){
        this.connectionString = 'postgresql://postgres:Aleja-123@localhost:5432/universidad';
        this.pool = new pg.Pool(
            {connectionString:this.connectionString}
        );
    }

    async executeSql(sql, data){
        let result = await this.pool.query(sql, data);
        return result;
    }
};

module.exports = PostgresService;