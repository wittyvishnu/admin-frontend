
import React from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

export default function OrdersOverview() {
  const donutData = {
    labels: ['Afternoon', 'Evening', 'Morning'],
    datasets: [
      {
        data: [480, 384, 336], // absolute orders instead of percentages
        backgroundColor: ['#7C5CFC', '#A89CFF', '#C5C1FF'],
        borderWidth: 0,
      },
    ],
  };

  const timeRanges = {
    Afternoon: '1–6 PM',
    Evening: '6–11 PM',
    Morning: '6–11 AM',
  };

  const donutOptions = {
    cutout: '75%',
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || '';
            const value = context.raw;
            const time = timeRanges[label] || '';
            return `${label} (${time}): ${value} `;
          },
          title: function () {
            return '';
          },
        },
        displayColors: false,
      },
      legend: { display: false },
    },
  };

  const lineData = {
    labels: ['01', '02', '03', '04', '05', '06'],
    datasets: [
      {
        label: 'Last 6 days',
        data: [900, 1100, 950, 1050, 1000, 1200],
        borderColor: '#7C5CFC',
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: '#7C5CFC',
        fill: false,
        tension: 0.4,
      },
      {
        label: 'Last Week',
        data: [850, 1000, 900, 950, 980, 1100],
        borderColor: '#ddd',
        borderWidth: 2,
        pointRadius: 0,
        borderDash: [5, 5],
        fill: false,
      },
    ],
  };

  return (
    <div className="right-column">
      {/* Order Time */}
      <div className="card">
        <div className="card-head">
          <div>
            <h4 className="card-title">Order Time</h4>
            <p className="card-sub">From 1–6 Dec, 2025</p>
          </div>
          <button className="btn btn-outline view-report-btn">View Report</button>
        </div>
        <div className="donut-wrap">
          <div className="donut big-donut">
            <Doughnut data={donutData} options={donutOptions} />
          </div>
          <ul className="legend">
            <li><span className="dot dot-afternoon"></span>Afternoon<b>480</b></li>
            <li><span className="dot dot-evening"></span>Evening<b>384</b></li>
            <li><span className="dot dot-morning"></span>Morning<b>336</b></li>
          </ul>
        </div>
      </div>

      {/* Orders */}
      <div className="card">
        <div className="card-head">
          <div>
            <h4 className="card-title">Orders</h4>
            <p className="card-sub">Sales from 1–6 Dec, 2025</p>
          </div>
          <button className="btn btn-outline view-report-btn">View Report</button>
        </div>
        <div className="orders-figures">
          <p className="orders-count">1200</p>
          <span className="orders-delta down">2.1% vs last week</span>
        </div>
        <div className="line-chart">
          <Line
            data={lineData}
            options={{
              plugins: {
                legend: { display: true, position: 'bottom', labels: { usePointStyle: true, boxWidth: 6 } }
              },
              scales: { y: { display: false }, x: { display: false } }
            }}
          />
        </div>
      </div>
    </div>
  );
}
