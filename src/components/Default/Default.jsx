import React from 'react';
//import * as axios from 'axios';

class Default extends React.Component{

  componentDidMount(){
    //var id = 8926;
    /*
    console.log('unfollow');
    axios.delete(`https://social-network.samuraijs.com/api/1.0/unfollow/${id}`, 
    {
      withCredentials: true,
      headers: {
        "API-KEY":"b3133ae9-04b8-44c3-8a3f-cda6c4d6b193"
      }       
    }).then(response =>{
      console.log('response',response);
      if (response.data.resultCode === 0){
        debugger;
      }                        
    }).catch((err)=>{
      console.log('error',err);
    });
*/

  }

  render(){
  return (
<div>
  <h3>Default</h3>
</div>)
  }
}

export default Default;