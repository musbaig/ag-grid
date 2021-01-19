import './App.css';
import { renderToString } from 'react-dom/server';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import ViewedIndicator from './ViewedIndicator.jsx';


function App() {
	const rowSpan = params => params.data.noOfTreatments >= 1 ? params.data.noOfTreatments : 1;
	const frameworkComponents = {
		viewedIndicator: ViewedIndicator,
	};
	const rowData = [
		{
			patient: 'Cluff, Lucy M.',
			status: 'active',
			noOfTreatments: 3,
			treatments: 'Yesterday, July 8',
			alarmsAlerts: '4 Alert',
			weight: 150,
      bp: 171,
      hr: 234,
      temp: 96,
			viewed: false
		},
		{
			patient: 'Cluff, Lucy M.',
			status: 'active',
			treatments: '2 days ago, July 7',
			alarmsAlerts: '2 Alarms',
			weight: 145,
      bp: 171,
      hr: 234,
      temp: 96,
			viewed: true
		},
		{
			patient: 'Cluff, Lucy M.',
			status: 'active',
			treatments: '9 days ago, June 30',
			alarmsAlerts: '3 Alarms',
			weight: 132,
      bp: 171,
      hr: 234,
      temp: 96,
			viewed: true
		},
		{
			patient: 'Dearson, Perry P.',
			status: 'active',
			noOfTreatments: 2,
			treatments: 'Yesterday, July 8',
			alarmsAlerts: '1 Alert',
			weight: 135,
      bp: 171,
      hr: 234,
      temp: 96,
			viewed: false
		},
		{
			patient: 'Dearson, Perry P..',
			status: 'active',
			treatments: '3 days ago, July 5',
			alarmsAlerts: '1 Alarm',
			weight: 134,
      bp: 171,
      hr: 234,
      temp: 96,
			viewed: true
		},
		{patient: 'Emerson, Frank J.', status: 'onboarding', noOfTreatments: 0}
	];
	const columnDefs = [
		{headerName: 'Patient', field: 'patient', rowSpan, cellClassRules: {'cell-span': rowSpan}, minWidth: 100},
		{headerName: 'Status', field: 'status', rowSpan, cellClassRules: {'cell-span': rowSpan}, minWidth: 100},
		{headerName: '', field: 'viewed', cellRenderer: 'viewedIndicator', width: .125, cellStyle: {paddingLeft: 0, paddingRight: 0, margin: 0}},
		{headerName: 'Treatments', field: 'treatments', minWidth: 100},
		{headerName: 'Alarms & Alerts', field: 'alarmsAlerts', minWidth: 100},
		{headerName: 'Weight', field: 'weight', width: 90, suppressSizeToFit: true},
		{headerName: 'BP', field: 'bp', width: 75, suppressSizeToFit: true},
		{headerName: 'HR', field: 'hr', width: 75, suppressSizeToFit: true},
		{headerName: 'Temp', field: 'temp', width: 75, suppressSizeToFit: true}
	];

	const cars = [
		{make: 'Tesla', models: [{model:'Model 3'}, {model:'Model Y'}]},
		{make: 'Lexus', models: [{model:'ES300'}, {model:'LS460'}]}
	]

	const wtf = params => {
		console.log(params.value)
		return renderToString(<div className="ag-theme-alpine" style={{height: 350, width: '100%'}}><AgGridReact rowData={params.value}><AgGridColumn field='model' /></AgGridReact></div>);
	}

	return (
		<div className="ag-theme-alpine" style={{height: 350, width: '100%'}}>
			<AgGridReact gridOptions={{
				rowData,
				columnDefs,
				frameworkComponents,
				suppressRowTransform: true
			}}/>
			<AgGridReact rowData={cars}>
				<AgGridColumn field='make' />
				<AgGridColumn field='models' cellRenderer={params => wtf(params)} />
			</AgGridReact>
		</div>
	);
}

export default App;
