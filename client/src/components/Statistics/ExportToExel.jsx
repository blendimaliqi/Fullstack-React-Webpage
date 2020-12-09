import React from 'react'
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import styled from 'styled-components';

const NewCategoryButton = styled.button`
  background-color: #469fb9;
  border: 0;
  height: 50px;
  width: 80px;
  font-weight: bold;
  font-size: 1rem;
  color: white;
`;

/**
 * Brukt exempel fra denne siden for export til exel: https://technicaaadda.blogspot.com/2020/11/export-data-to-excel-using-react.html
 * @param {*} param0 
 */

export const ExportToExel = ({csvData, fileName}) => {

    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

    const fileExtension = '.xlsx';

    const exportToCSV = (csvData, fileName) => {
        const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data, fileName + fileExtension);
    }

    return (
        <NewCategoryButton  onClick={(e) => exportToCSV(csvData,fileName)}>Export</NewCategoryButton>
    )
};

