import XLSX from 'xlsx';

export async function readXLSX(file, sheet) {
  try {
    const fileName = `./xlsx/${file}`;
    const workbook = XLSX.readFile(fileName);

    const sheetList = workbook.SheetNames;
    if (!sheetList.includes(sheet)) {
      throw new Error('Sheet does not exist in workbook.');
    }

    const worksheet = workbook.Sheets[sheet];
    const data = XLSX.utils.sheet_to_json(worksheet);
    return data;
  } catch (error) {
    console.error(`Error reading XLSX file: ${error.message}`);
    throw error;
  }
}
