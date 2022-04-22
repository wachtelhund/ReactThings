import ChartBar from "./ChartBar";
import TotalCost from "./TotalCost";
import "./Chart.css";
const Chart = (props) => {
  const dataPointValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValue);

  return (
    <div>
      <div className="chart">
        {props.dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        ))}
      </div>
      <div>
        <TotalCost total={totalMaximum} />
      </div>
    </div>
  );
};

export default Chart;
