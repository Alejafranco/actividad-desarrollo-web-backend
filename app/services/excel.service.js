const excelJs = require('exceljs');

class ExcelService{
    constructor(){
        this.workbook = new excelJs.Workbook();
    }
    async createSheet(personas){
        const sheet = this.workbook.addWorksheet("personas");
        sheet.colums = [
            {header: "Id", key: "id", width: 15},
            {header: "Nombre", key: "name", width: 35},
            {header: "Correo", key: "email", width: 40}
        ];
        personas.forEach(persona => {
            sheet.addRow(persona);
        });
        await this.workbook.xlsx.writeFile("reportes/reportePersonas.xlsx");
    }
}

module.exports = ExcelService;