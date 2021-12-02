import React from "react";
import ChartistGraph from "react-chartist";

export default function Chartist() {
  const dataPie = {
    labels: ["62%", "32%", "6%"],
    series: [62, 32, 6],
  };

  // Data for Line Chart
  const dataSales = {
    labels: [
      "9:00AM",
      "12:00AM",
      "3:00PM",
      "6:00PM",
      "9:00PM",
      "12:00PM",
      "3:00AM",
      "6:00AM",
    ],
    series: [
      [287, 385, 490, 492, 554, 586, 698, 695],
      [67, 152, 143, 240, 287, 335, 435, 437],
      [23, 113, 67, 108, 190, 239, 307, 308],
    ],
  };
  const optionsSales = {
    low: 0,
    high: 800,
    showArea: false,
    height: "245px",
    axisX: {
      showGrid: false,
    },
    lineSmooth: true,
    showLine: true,
    showPoint: true,
    fullWidth: true,
    chartPadding: {
      right: 50,
    },
  };
  const responsiveSales = [
    [
      "screen and (max-width: 640px)",
      {
        axisX: {
          labelInterpolationFnc(value) {
            return value[0];
          },
        },
      },
    ],
  ];

  // Data for Bar Chart
  const dataBar = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mai",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    series: [
      [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
      [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695],
    ],
  };
  const optionsBar = {
    seriesBarDistance: 10,
    axisX: {
      showGrid: false,
    },
    height: "245px",
  };
  const responsiveBar = [
    [
      "screen and (max-width: 640px)",
      {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc(value) {
            return value[0];
          },
        },
      },
    ],
  ];

  return(
    <><div className="row">
      <div className="col" style={{ maxHeight: "320px" }}>
        <ChartistGraph data={dataPie} type="Pie" />
      </div>
    </div><div className="row">
        <div className="col" style={{ maxHeight: "320px" }}>
          <ChartistGraph
            data={dataSales}
            type="Line"
            options={optionsSales}
            responsiveOptions={responsiveSales} />
        </div>
      </div><div className="row">
        <div className="col" style={{ maxHeight: "320px" }}>
          <ChartistGraph
            data={dataBar}
            type="Bar"
            options={optionsBar}
            responsiveOptions={responsiveBar} />
        </div>
      </div></>
  )
}
