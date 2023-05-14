import Plot from 'react-plotly.js';
import React, { useEffect, useState } from 'react';

export default function Visualization(props) {

  const [graphData1, setGraphData1] = useState([]);
  const [graphData2, setGraphData2] = useState([]);
  const [graphData3, setGraphData3] = useState([]);

  useEffect(() => {
    setGraphData1([])
    setGraphData2([])
    setGraphData3([])

    if (props.data1) {
      props.data1.map((e, index) => {
        setGraphData1(current => [...current, { x: props.Vfr[index], y: e }])
      })

      props.data2.map((e, index) => {
        setGraphData2(current => [...current, { x: props.Vfr[index], y: e }])
      })

      props.data3.map((e, index) => {
        setGraphData3(current => [...current, { x: props.Vfr[index], y: e }])
      })
    }
  }, [props.data1, props.data2, props.data3])

  const data = [
    {
      x: graphData1.map((point) => point.x),
      y: graphData1.map((point) => point.y),
      mode: 'lines+markers',
      type: 'scatter',
      name: props.label1,
      line: {
        color: 'green'
      }
    },
    {
      x: graphData2.map((point) => point.x),
      y: graphData2.map((point) => point.y),
      mode: 'lines+markers',
      type: 'scatter',
      name: props.label1,
      line: {
        color: 'orange'
      }
    },
    {
      x: graphData3.map((point) => point.x),
      y: graphData3.map((point) => point.y),
      mode: 'lines+markers',
      type: 'scatter',
      name: props.label1,
      line: {
        color: 'dodgerblue'
      }
    }
  ];

  const layout = {
    title: '',
    xaxis: {
      title: '',
      showgrid: true,
      zeroline: false,
      color: 'black'
    },
    yaxis: {
      title: '',
      showgrid: true,
      zeroline: false,
      color: 'black'
    },
    height: 300,
    margin: { l: 40, r: 20, t: 30, b: 40 },
    paper_bgcolor: 'transparent',
    plot_bgcolor: 'transparent'
  };

  return (
    <div className='Chart'>
      <Plot
      className={'bg-Gray'}
        data={data}
        layout={layout}
        style={{boxShadow: '0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(244 67 54 / 40%)', transform: 'translateY(-30%)' }}
      />
    </div>
  );
}