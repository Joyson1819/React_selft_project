import React, { useState,useEffect } from "react";
const useFetch = () => {
     useEffect(() => {
        setTimeout (()=>{
        console.log("The use called");
        fetch("https://jsonplaceholder.typicode.com/albumsd")
          .then((res) => {
            if(!res.ok)
            {
              throw Error ('we cant able to get the data');
            }
            console.log(res);
            return res.json();
          })
          .then((data) => console.log(data))
          .catch((error)=>
          {
           console.log("It is a error") 
          }
          )},1000)
      },[]);

      return
      
      
};

export default useFetch;