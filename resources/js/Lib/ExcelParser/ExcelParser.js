import XLSX from 'xlsx';
import { Sheet } from '.';

export default class ExcelParser {
  sheetNames = [];
  sheets = [];
  merges = [];

  readFile = file => {
    return new Promise((resolve, reject) => {
      try {
        const reader = new FileReader();
        reader.onload = e => {
          const data = new Uint8Array(e.target.result);
          const wb = XLSX.read(data, {
            type: 'array'
          });
          // console.log(wb);

          const sheets = wb.SheetNames.map(sheetName => {
            const sheet = wb.Sheets[sheetName];
            if (!sheet['!ref']) {
              return null;
            }
            return new Sheet({
              sheetName,
              sheet
            }).toJson();
          }).filter(sheet => sheet);

          resolve(sheets);
        };
        reader.readAsArrayBuffer(file);
      } catch (e) {
        reject(e);
      }
    });
  };
}
