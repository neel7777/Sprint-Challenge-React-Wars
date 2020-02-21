import React from "react";
import styled from "styled-components";
import {
    
    Jumbotron, 
    Spinner
  } from "reactstrap";

const StarCard = styled.div`
  background: teal;
  
  max-width: 200px;
  max-height: 500px;
    border: 2px solid black;
    margin-left: 910px;
  
  
  
  margin-bottom: 20px;
`;

const Badge1 = styled.h1 `
background-color: blue;
color: white;



`
const Badge2 = styled.h1 `
background-color: lightgreen;
color: coral;



`
const Badge3 = styled.h1 `
background-color: lightblue;
color: purple;



`


const Main = props => {
    return (
       
        <StarCard>
            <Jumbotron>
            <Badge1>{props.name}</Badge1>
            
            <Badge2>`Height: {props.height}`</Badge2>
            <Badge3>`Hair Color: {props.hair}`</Badge3>
            
            </Jumbotron>
        </StarCard>
        
        
       
    )

}

export default Main;