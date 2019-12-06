import React from 'react';

const Layout = (props)=>(
<div style={{
    fontSize: '15px',
    textAlign: 'center',
    border: '5px solid pink'
  }}>
    This is Came From Layout 
    {props.children}
 </div>   

)

// const pStyle = {
//     fontSize: '15px',
//     textAlign: 'center',
//     border: '5px solid pink'
//   };

export default Layout;