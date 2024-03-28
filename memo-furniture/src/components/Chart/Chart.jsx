import React, {useState} from 'react';
import {Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, BarElement, Tooltip, Legend} from 'chart.js';
import {Bar, Line} from 'react-chartjs-2';
import productPage from './productPage.module.scss';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    BarElement
)

function Graphic() {
    const dataBar = {
        labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь'],
        datasets: [
            {
                label: 'История цены',
                data: [30499, 32000, 27000, 29000, 30499, 33000],
                backgroundColor: '#E7772E',
                borderColor: '#E7772E',
                borderWidth: 1,
            }
        ]
    }
    const optionsBar = {
        scales: {
            y: {
                min: 20000,
                max: 40000
            }
        }
    }
    const dataLine = {
        labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь'],
        datasets: [
            {
                label: 'История цены',
                data: [30499, 32000, 27000, 29000, 30499, 33000],
                backgroundColor: '#E7772E',
                borderColor: '#E7772E',
                borderWidth: 1,
                pointBorderColor: '#E7772E',
                fill: false,
                tension: 0.0
            }
        ]
    }
    const optionsLine = {
        plugins: {
            legend: true
        },
        scales: {
            y: {
                min: 20000,
                max: 40000
            }
        }
    }
    return(
        <div className={productPage.Graphic}>
            <div id='line' className={productPage.visible}>
                <Line
                    data = {dataLine}
                    options = {optionsLine}
                    style = {{padding: '20px', width: '200px'}}
                />
            </div>
        </div>
    )
}

export default Graphic;