import React from 'react';

const Button = (props) => {
  const {url, name, value, } = props
  return(
    <>
      <button className={name}>
        <a href={url}>{value}</a>
      </button>
    </>
  )
}

export default Button;
