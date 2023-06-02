import './Chart.css'
import ChartBar from './ChartBar'
export default function Chart({ChartPoint}){
    const dataPointValues = ChartPoint.map((dataPoint) => dataPoint.value);
    const maximum = Math.max(...dataPointValues)
    return <div className="chart">
        {ChartPoint.map((dataPoints, index)=>{
          return  <ChartBar 
                        label={dataPoints.label} 
                        maxValue={maximum} 
                        value={dataPoints.value} 
                        key = {index}
                    />
        })}
    </div>
}