const ViewedIndicator = ({ data: { viewed }}) => {
  console.log('viewed', viewed, !!viewed );
  const backgroundColor = viewed === false ? '#61dafb' : '';
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        width: '5px',
        margin: '0',
      }}
    >&nbsp;</div>
    )
};

export default ViewedIndicator;
