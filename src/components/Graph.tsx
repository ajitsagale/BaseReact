import React from 'react';
import Chart from 'react-apexcharts';

type Props = {
  type: 'bar' | 'line' | 'pie' | 'area' | 'scatter';
  options: any;
  series: any;
  height?: number;
};

const Graph: React.FC<Props> = ({ type, options, series, height = 300 }) => {
  return (
    <Chart
      type={type}
      options={options}
      series={series}
      height={height}
    />
  );
};

export default Graph;