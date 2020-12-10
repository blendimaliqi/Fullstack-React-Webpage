import React from 'react';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import styled from 'styled-components';

const ExportButton = styled.button`
  background-color: #469fb9;
  border: 0;
  height: 50px;
  width: 80px;
  font-weight: bold;
  font-size: 1rem;
  color: white;
`;

/** GJENBRUK FOR EXPORT KOMPONENTEN HENTET FRA : https://technicaaadda.blogspot.com/2020/11/export-data-to-excel-using-react.html
 * Bruker bibloteker file-saver og xlsx. xlsx håndterer overføringen fra dataSet objektvariabelene til csv data
 * som brukes til å opprette excel fil av Filesaver der den tar imot den modifiserte dataen fra xlsx med navnet vi har gitt filen
 * og fileextension for filtype excel.
 *
 * @param  csvData data vi lager utifra applikasjonen og sender inn i metoden
 * @param fileName filnavnet på filen som opprettes
 */
export const ExportToExel = ({ csvData, fileName }) => {
  const fileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

  const fileExtension = '.xlsx';

  const exportToCSV = (csvData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };
  /**
   * Komponenten returnerer en button som tar imot data og filnavn på onclick
   * og deretter aktiverer exportToCSV metoden.
   */
  return (
    <ExportButton onClick={(e) => exportToCSV(csvData, fileName)}>
      Export
    </ExportButton>
  );
};
