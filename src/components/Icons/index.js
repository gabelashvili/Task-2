/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react'

const index = ({ name }) => {
  const ComponentToRender = require(`./${name}`).default
  return (
    <>
      {ComponentToRender()}
    </>
  )
}

export default index
