const DefaultBox = ({ children, width }) => {
  return (
    <div
      style={{
        display: 'flex',
        width: width,
        border: '0.5px solid gray',
        borderRadius: '6px',
        padding: '8px 8px',
      }}
    >
      {children}
    </div>
  );
};

export default DefaultBox;
