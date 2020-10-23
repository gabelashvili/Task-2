/* eslint-disable max-len */
import React from 'react'

const Money = () => (
  <svg viewBox='0 0 27 27'>
    <g style={{ stroke: '#fff', strokeWidth: '2px' }}>
      <circle style={{ stroke: 'none' }} cx='13.5' cy='13.5' r='13.5' />
      <circle style={{ fill: 'none' }} cx='13.5' cy='13.5' r='12.5' />
    </g>
    <text
      style={{
        fill: '#fff', fontSize: '15px', fontWeight: 700, opacity: 0.71,
      }}
      transform='translate(9 19)'
    >
      <tspan x='0' y='0'>S</tspan>
    </text>
  </svg>
)

export default Money
