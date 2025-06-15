import React, { useState } from "react";
import Styles from './Course.module.css'
import maxresdefault from './maxresdefault.jpg'; 
function  CourseDetails(props) {
  const [purchased,setPurchased]=useState(false);
  const [valuediscount,setValuediscount]= useState(0);
  const courseName = "Course Details";
  const buttonHandle =(discount)=>
  {

    console.log(props.CourseDetails,"Button Clicked",discount, "Discount value");
    setPurchased(true)
  }
  const discount =()=>
  {
setValuediscount(20);
  }
  return (
<div className={Styles.details}>
      <h1 style={{marginLeft:"90px"}}>{courseName}</h1>
      <img src={props.image}alt="CSE"></img>
     <p style={{marginLeft:"90px"}}>{props.CourseDetails}</p>
     <h6 style={{marginLeft:"90px"}}>{props.Price}</h6>
     <p style={{marginLeft:"90px"}}> {props.Rate}</p>
     <button style={{marginLeft:"30px"}} onClick={()=>buttonHandle(20)} >Submit</button>
     <p style={{marginLeft:"100px"}}>{purchased ?" you Have purchased a cousers happy learninig ":
      "kindly buy a course"}</p>
      <button style={{marginLeft:"30px"}} onClick={discount} >Discount</button>
      <p  style={{marginLeft:"30px"}}>{valuediscount ?`Thank you have applied ${valuediscount} price   discount successfully  ` :"There is no price discount availed"}</p>
    <button style={{marginLeft:"30px"}} onClick={()=>props.deleteCourse(props.id)} >Delete</button>
    </div>
  );
 

// // Set defaultProps to "undefined"
// CourseDetails.defaultProps = {
//   CourseDetails: "undefined"
// }

};
 


export default CourseDetails;