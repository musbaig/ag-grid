import {AgGridReact} from "ag-grid-react";

const TreatmentCells = ({ data: { treatments }}) => {
  const rowData = treatments;

  const columnDefs = [
    {field: 'end', minWidth: 100, flex: 1},
    {field: 'alarmsAlerts', minWidth: 90},
    {field: 'weight', width: 90, suppressSizeToFit: true},
    {field: 'bp', width: 75, suppressSizeToFit: true},
    {field: 'hr', width: 75, suppressSizeToFit: true},
    {field: 'temp', width: 75, suppressSizeToFit: true}
  ];

  if (treatments.length) {
    return (

      <div className="ag-theme-alpine" style={{height: 350, width: '100%', paddingLeft:0}}>
        <AgGridReact gridOptions={{
          rowData,
          columnDefs,
          suppressRowTransform: true,
          headerHeight: 0,
          rowStyle: { borderTop: '1px solid #dde2eb', borderBottom: '1px solid #dde2eb'}
        }}/>
      </div>)
  } else {
    return <div></div>
  }
};

export default TreatmentCells;
