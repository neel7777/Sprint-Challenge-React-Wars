import React, { useState, useEffect } from 'react';

import './App.css';
import Main from "./Main"
import axios from "axios";
import styled from "styled-components";


const Contain = styled.div `
display: flex;
align-items: center;
text-align: center;
`

const App = () => {
  const [star, setStar] = useState([]);

  useEffect(()=>{
    axios.get('https://swapi.co/api/people')
    .then(response => {
      console.log(response.data.results);
      setStar(response.data.results);
    })
    .catch(error =>{
      console.log("Data not returned", error);
  })
  }, []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      
      
        <div>
          
        {star.map(item =>{
        return (
          <Main name = {item.name} height = {item.height} hair = {item.hair_color}/>
        )
      })}
      
      </div>
        
      
      
      
    </div>
  );
}

export default App;


//  What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    //React Js is a library used for building applications. React initially helped facebook to power the user experiences regardless of how and where the data was received. React serves as the "View" layer of the model, view, controller paradigm.

//  What does it mean to think in react?

    //Thinking in react refers to process of composing a plan to build large scalable applications using react. The process involves fetching data, breaking down the functionality into multiple components,  identifying the Minimal representation of UI state and identifying where the state should live.

//  Describe state.

    //State refers to data and how the data is changed. With state, we initialize data and manipulate that data. 

//  Describe props.

    //Props is shorthand for properties, and is used to pass information held on state in one component to another component. 

//  What are side effects, and how do you sync effects in a React component to state or prop changes?
    
    //A side effect is something that occurs outside of the scope of the function being executed. An example of this is fetching data from an API. Side effects may sometimes require cleanup.