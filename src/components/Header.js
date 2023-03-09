import React from "react";
import styled from 'styled-components';

const Header = () => {

  const date = new Date();
  const weekly = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <header>{date.getFullYear()}
    <p>{weekly[date.getDay()]} . {month[date.getMonth()]} . {date.getDate()}</p>
    </header>
  )
}

export default Header;