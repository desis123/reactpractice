import React from 'react';
import './App.css';
//import Layout from './layout';
import ReactFrom from './ReactForm';

function MyInfo() {
  return (
   // <Layout > //Omiting this ... but this works fine, But my observation is
     <div className = "App"> 
       <ul>
         <li>I am good learner</li>
         <li>I am good forgiver</li>
         <li>Currently I am lost </li>
         <li>I dont know which way to go</li>
       </ul> My info goes here
       <ReactFrom />
       </div>
       
      // </Layout>
  );
}

export default MyInfo;
