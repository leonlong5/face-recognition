import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

let options = null;

const Multicultural = ({ multiculturalList}) => {
    if (multiculturalList) {
        let culture = multiculturalList.map((item)=> {
            return { name:item.name, y:item.value }
        })
        culture[0].sliced = true
        culture[0].selected = true

        options = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                width: 400,
                height: 400
            },
            title: {
                text: 'MULTICULTURAL APPEARANCE'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            series: [{
                name: 'Culture',
                colorByPoint: true,
                data: culture
            }]
        }
    }

    return multiculturalList? <HighchartsReact className="hightchart-container" highcharts={Highcharts} options={options} />:null
    
}


export default Multicultural;