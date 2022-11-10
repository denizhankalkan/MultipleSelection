import React from 'react';
import logo from './logo.svg';
import { Select }  from "./Select"
import './App.css';

const options = [
  {label: "First", value:1},
  {label: "Second", value:2},
  {label: "Third", value:3}
]


function App() {
  return (
    <>
    <Select options={options}/>
    </>
  );
}

export default App;
