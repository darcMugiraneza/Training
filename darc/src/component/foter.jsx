
import { Component } from 'react';
import darc from "../my image/dada.jpg"

class Footer extends Component {
  

  render(){
    
     return(
      <div class="flex justify-center bg-blue-900">
        <div class="  bg-white rounded-t-lg w-10 h-10">
          <img src={darc} alt="user-profile" class="w-full h-full "></img>
        </div>
     <h1>Copyright by@Darc 2023</h1>
     <p>reach me on:@IG@FB@WHATSAPP</p>
      
      
      </div>
        
     )
  }
}

 export default Footer; 






    





