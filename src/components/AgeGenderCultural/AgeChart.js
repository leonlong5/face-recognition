import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

let options = null;

const AgeChart = ({ agesList}) => {
    if (agesList) {
        let ages = agesList.map((item)=> item.name )
        let agePercentage = agesList.map((item)=> item.value )

        options = {
            chart: {
                type: 'column',
                height: 500,
                width: 1000
            },
            title: {
                text: 'AGE PREDICTION'
            },
            subtitle: {
                text: 'Source: clarifai.com'
            },
            xAxis: {
                categories: ages,
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Percentage %'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">Age: {point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.4f} percentage</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Person',
                data: agePercentage
            }] 
        }
    }

    return agesList? <HighchartsReact className="hightchart-container" highcharts={Highcharts} options={options} />:null
}


export default AgeChart;