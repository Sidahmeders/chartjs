import React, { useState } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2'
import '../styles/chart.scss'

const Chart = () => {

    const [chartData, setChartData] = useState({
        data: {
            labels: [
                'chlef', 'bel-3abas', 'tiaret', 'kasandar',
                'rilizane', 'm3asker', 'khanshla'
            ],
            datasets: [{
                label: 'Treachery',
                data: [
                    3487585,
                    5967334,
                    3564564,
                    4353344,
                    1998474,
                    2764744,
                    2234487
                ],
                backgroundColor: [
                    "#445",
                    '#834',
                    '#463',
                    '#744',
                    '#928',
                    '#833',
                    '#dd3'
                ]
            }]
        },
        display: {
            title: {
                display: true,
                text: 'Algeria biggest Mistake',
                fontSize: 24
            },
            legend: {
                position: 'right',
                labels: {
                    fontColor: '#008'
                }
            },
            layout: {
                padding: {
                    left: 50,
                    top: 20
                }
            }
        }
    })

    return (
        <div className="chart">
            <Bar
                data={chartData.data}        
                options={{
                    title: chartData.display.title,
                    legend: chartData.display.legend,
                    layout: chartData.display.layout
                }}
                
            />
            <div className="break"></div>
            <Pie
                data={chartData.data}
                options={{
                    title: chartData.display.title,
                    legend: chartData.display.legend,
                    layout: chartData.display.layout
                }}
                
            />
            <div className="break"></div>
            <Line
                data={chartData.data}
                options={{
                    title: chartData.display.title,
                    legend: chartData.display.legend,
                    layout: chartData.display.layout
                }}
                
            />
        </div>
    )
}

export default Chart