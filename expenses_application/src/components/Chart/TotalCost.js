import "./TotalCost.css";
const TotalCost = (props) => {
  return (
    <div className="total-cost">
      <h2>Total Cost: ${props.total}</h2>
    </div>
  );
};

export default TotalCost;
