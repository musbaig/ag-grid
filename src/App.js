import './App.css';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import TreatmentCells from './TreatmentCells.jsx';


function App() {
	const frameworkComponents = {
    treatmentCells: TreatmentCells,
	};
	const rowData = [
		{
		  id: 1,
			patient: 'Cluff, Lucy M.',
			status: 'active',
			noOfTreatments: 3,
			treatments: [
        {
          end: 'Yesterday, July 8',
          alarmsAlerts: '4 Alert',
          weight: 150,
          bp: 171,
          hr: 234,
          temp: 96,
          viewed: false
        }, {
          end: '2 days ago, July 7',
          alarmsAlerts: '',
          weight: 145,
          bp: 171,
          hr: 234,
          temp: 96,
          viewed: true
        }, {
          end: '9 days ago, June 30',
          alarmsAlerts: '3 Alarms',
          weight: 132,
          bp: 171,
          hr: 234,
          temp: 96,
          viewed: true
        }

      ],



		},
		{
			patient: 'Dearson, Perry P.',
			status: 'active',
			noOfTreatments: 2,
			treatments: [
        {
          end: 'Yesterday, July 8',
          alarmsAlerts: '1 Alert',
          weight: 135,
          bp: 171,
          hr: 234,
          temp: 96,
          viewed: false
        },
        {
          end: '3 days ago, July 5',
          alarmsAlerts: '1 Alarm',
          weight: 134,
          bp: 171,
          hr: 234,
          temp: 96,
          viewed: true
        }
      ],

		},
		{patient: 'Emerson, Frank J.', status: 'onboarding', noOfTreatments: 0, treatments: []}
	];

	const colSpan = () => {
		return 6;
	};

	const columnDefs = [
		{headerName: 'Patient', field: 'patient', minWidth: 100, },
		{headerName: 'Status', field: 'status', minWidth: 100, },
		{headerName: 'Treatments', field: 'end', cellRenderer: 'treatmentCells', minWidth: 100, flex: 1, cellStyle: { 'white-space': 'normal', paddingLeft: 0, paddingRight: 0, border: 0 }, colSpan, cellClassRules: {'cell-span': colSpan}},
		{headerName: 'Alarms & Alerts', field: 'alarmsAlerts', minWidth: 100, cellStyle: {paddingLeft: 0, paddingRight: 0}},
		{headerName: 'Weight', field: 'weight', width: 90, suppressSizeToFit: true},
		{headerName: 'BP', field: 'bp', width: 75, suppressSizeToFit: true},
		{headerName: 'HR', field: 'hr', width: 75, suppressSizeToFit: true},
		{headerName: 'Temp', field: 'temp', width: 75, suppressSizeToFit: true}
	];


	return (
		<div className="ag-theme-alpine" style={{height: 350, width: '100%'}}>
			<AgGridReact gridOptions={{
				rowData,
				columnDefs,
				frameworkComponents,
				suppressRowTransform: true,
        getRowHeight: (params) => {
				  const noOfTreatments = params.data.noOfTreatments;
				  return noOfTreatments ? noOfTreatments * 41 : 41;
        },
				defaultColDef: { resizeable: true },
        rowStyle: { borderTop: '1px solid #dde2eb', borderBottom: '1px solid #dde2eb'}
			}}/>
		</div>
	);
}

export default App;
