
const Squares = ({value,onSquareClick}) => {
  return (
    <>
      <button className={value ? value.toLowerCase() : ""} onClick={onSquareClick}>{value}</button>
    </>
  );
};

export default Squares;
