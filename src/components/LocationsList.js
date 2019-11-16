import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import axios from "axios";

export default function LocationsList() {

  
  // useEffect(() => {
  //     axios
  //       .get('https://rickandmortyapi.com/api/location')
  //       .then(response => {
  //         setLocationsList(response.results)
  //         console.log(locations)
  //       })
  //       .catch(error => {
  //         console.error('Server Error', error);
  //       })

  //     }, []);
      
// let locationsArray= Object.keys(locations);

  // return(
      
  //   <div className="locations-list">
  //     {locations.map(location => {
  //       <LocationCard key={location.id} name={location.name} type={location.type}  dimension={location.dimension} residents={location.residents} />
  //     })}

  //     {locationsArray.map( location => (
  //       <LocationCard key={location.id} name={location.name} type={location.type}  dimension={location.dimension} residents={location.residents} />
  //       ))} 


  //   </div>
  // )

}
