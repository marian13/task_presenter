import React from 'react'

const Error = ({ message = '' }) => (
  <div>
    <b>An error occured 😭</b>

    <br />

    {message}
  </div>
)

export default Error
