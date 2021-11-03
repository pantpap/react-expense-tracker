import React from 'react';
import ChartBar from './ChartBar';

import './Chart.css';

const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const maxVal = Math.max(...dataPointsValues)

    return(
        <div className="chart">
            {props.dataPoints.map((item) =>(
                <ChartBar
                    key={item.label}
                    value={item.value}
                    maxValue={maxVal}
                    label={item.label}/>
            ))}
        </div>
    )
}

export default Chart;
