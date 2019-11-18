import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Typography from '@material-ui/core/Typography'


export default function CharacterCard(props) {
  return( 
      <div>
        <img top width="100%" src={props.image} alt="Card image cap" />
          <Typography variant="title" color="inherit" >{props.name}</Typography>
          <h4>Origin: {props.origin}</h4>
          <h4>Species: {props.species}</h4>
          <h4>Status: {props.status}</h4>
      </div>
  )
}
