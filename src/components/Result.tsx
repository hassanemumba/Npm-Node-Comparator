import React from 'react';
import './Result.css';
import LineGraph from './LineGraph.tsx';

export default function Result({ package1, package2 }) {
  return (
    <div className='result'>
      <h2 className='result__title'>Result</h2>
      <LineGraph package1={package1} package2={package2} />
    </div>
  );
}