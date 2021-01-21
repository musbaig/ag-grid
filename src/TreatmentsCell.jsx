import './App.css'

const TreatmentsCell = ({ data: { treatments }, column: { colDef: { field } }}) => {
  console.log( 'treatments and field?', treatments, field);
  if (treatments.length) {
    const treatmentsCell = treatments.map((treatment, index) => {
      console.log('treatment', treatment);
      return (
        <div
          key={treatment.id}
          className='treatment-row'
        >
          {treatment[field] || '&nbsp'}
        </div>
      )
    });
    return (
      <div>
        {treatmentsCell}
      </div>)
  } else {
    return <div></div>
  }
};

export default TreatmentsCell;
