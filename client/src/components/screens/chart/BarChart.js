import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

/* const randomArray = Array.from({ length: 12 }, () =>
  Math.floor(Math.random() * 40)
);

const data = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'Octorber',
    'November',
    'December',
  ],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: '#031CFF',
      borderColor: '#1F64F3',
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#1F64F3',
      borderWidth: 2,
      borderRadius: 5,
      borderSkipped: false,
      data: this.props.capitaldata,
    },
    {
      label: 'My Second dataset',
      backgroundColor: '#031CFF',
      borderColor: '#1F64F3',
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#1F64F3',
      borderWidth: 2,
      borderRadius: 10,
      borderSkipped: false,
      data: this.props.capitaldata,
    },
  ],
}; */

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'Octorber',
          'November',
          'December',
        ],
        datasets: [
          {
            /* label: 'My First dataset', */
            backgroundColor: '#031CFF',
            borderColor: '#1F64F3',
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#1F64F3',
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
            data: arrayFromArgs(),
            yAxisID: 'y-axis-1',
          },
          /* {
            label: 'My Second dataset',
            backgroundColor: '#031CFF',
            borderColor: '#1F64F3',
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#1F64F3',
            borderWidth: 2,
            borderRadius: 10,
            borderSkipped: false,
            data: '100' this.props.show ,
            yAxisID: 'y-axis-2',
          }, */
        ],
      },
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.show !== this.props.show) {
      let chartData = this.state.chartData;

      chartData.datasets[0].data = this.props.show;
      this.setState({ chartData });
    }
  }

  render() {
    return (
      <div>
        <h2>Capital Sequencing</h2>
        <Bar
          onClick={this.props.handleClick}
          data={this.state.chartData}
          width={100}
          height={50}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              position: 'top',
              display: false,
            },
            scales: {
              yAxes: [
                {
                  display: true,
                  type: 'linear',
                  position: 'left',
                  id: 'y-axis-1',
                  scaleLabel: {
                    display: true,
                    labelString: '$ Raised/Issued',
                    beginAtZero: true,
                  },
                  ticks: {
                    beginAtZero: true,
                  },
                },
                {
                  display: true,
                  type: 'linear',
                  position: 'right',
                  id: 'y-axis-2',
                  scaleLabel: {
                    display: true,
                    labelString: 'Est % DailyTurnover',
                    beginAtZero: true,
                  },
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            title: {
              display: true,
              text: 'Capital Sequencing',
              position: 'bottom',
            },
          }}
        />
      </div>
    );
  }
}

function arrayFromArgs() {
  const monthsList = new Array(12);
  for (const i = 0; i < monthsList.legth; i++) {
    monthsList[i] = this.props.show / monthsList.legth;
    console.log(monthsList[i]);
  }
  console.log('Hello world!');
  console.log(monthsList.legth);
  return monthsList;
}
export default BarChart;
