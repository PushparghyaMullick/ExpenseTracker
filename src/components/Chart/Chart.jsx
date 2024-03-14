import './Chart.css'
import ChartBar from './ChartBar'

const Chart = props => {
    const itemValues = props.items.map(item => item.value)
    const totalMaximum = Math.max(...itemValues)
    //Spread operator used to convert array to separate args

    return (
        <div className="chart">
            {props.items.map(item => 
            <ChartBar
                key={item.label} 
                value={item.value} 
                maxValue={totalMaximum} 
                label={item.label}
            />)}
        </div>
    )
}

export default Chart