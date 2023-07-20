import React from 'react'
import  styled  from 'styled-components'
import moment from "moment"
function Header() {
    function getDate(){
        return moment().format('MMMM Do YYYY, h:mm:ss a')
    }
    const Heading=styled.h1`
        color: #e74c3c;
        text-align: center;
    `;
  return (
    <>
        <Heading>The News App</Heading>
        <h6 className="text-center">{getDate()}</h6>
    </>
  )
}

export default Header