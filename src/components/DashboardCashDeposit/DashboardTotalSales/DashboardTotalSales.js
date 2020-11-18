import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import color from 'rcolor';

const initialState = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
}

export const TotalSales = () => {

    const [dataSet, setDataSet] = useState(initialState);

    useEffect(() => {

        setInterval(() => {
            let oldDataSet = dataSet.datasets[0];
            let newData = [];

            for (let x = 0; x < dataSet.labels.length; x++) {
                newData.push(Math.floor(Math.random() * 100));
            }

            let newDataSet = {
                ...oldDataSet
            };

            newDataSet.data = newData;
            newDataSet.backgroundColor = color();
            newDataSet.borderColor = color();
            newDataSet.hoverBackgroundColor = color();
            newDataSet.hoverBorderColor = color();

            let newState = {
                ...initialState,
                datasets: [newDataSet]
            };

            setDataSet(newState);
        }, 5000);
    });

    return (<div className="col-md-5 grid-margin stretch-card" >
        <div className="card">
            <div className="card-body">
                <p className="card-title">Total sales</p>
                <h1>$ 28835</h1>
                <h4>Gross sales over the years</h4>
                <p className="text-muted">Today, many people rely on computers to do homework, work, and create or store useful information. Therefore, it is important </p>
                <div id="total-sales-chart-legend"></div>
            </div>

            {dataSet && <Bar data={dataSet} />}
        </div>
    </div >)
}

export default TotalSales;