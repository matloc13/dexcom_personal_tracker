import React from 'react'

const Input = (props) => {

  const {type, name, value,} = props

return (
  <input
    type={type}
    value={value}
  />
)
}

export default Input
