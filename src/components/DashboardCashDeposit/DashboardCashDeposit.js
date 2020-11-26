import React from 'react';
import { Line } from 'react-chartjs-2';
import TotalSales from './DashboardTotalSales/DashboardTotalSales';
const cashDeposit = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    };

    return (<div className="row">
        <div className="col-md-7 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <p className="card-title">Cash deposits</p>
                    <p className="mb-4">To start a blog, think of a topic about and first brainstorm party is ways to write details</p>
                    <div id="cash-deposits-chart-legend" className="d-flex justify-content-center pt-3"></div>
                    <Line data={data} />
                </div>
            </div>
        </div>
        <TotalSales />

    </div>)

}




export default cashDeposit;