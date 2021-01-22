import './App.css'

const TreatmentsCell = ({ data: { treatments }, column: { colDef: { field } }}) => {
  console.log( 'treatments and field?', treatments, field);
  if (treatments.length) {
    const treatmentsCell = treatments.map((treatment, index) => {
      console.log('treatment', treatment);
      const rowClasses = field === 'end' ? 'treatment-row treatment-col' : 'treatment-row';
      return (
        <div
          key={treatment.id}
          className={rowClasses}
        >
          {treatment[field]}
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
