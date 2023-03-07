
import { Component } from 'react';
import darc from "../my image/lala.jpg"


class Contact extends Component {
  

  render(){
    
     return(

        <div class="flex justify-center bg-blue-900">
        <div class="  bg-white rounded-t-lg w-10 h-10">
          <img src={darc} alt="user-profile" class="w-full h-full "></img>
        </div>
     <h1>where you can reach us </h1>
     <ul>
        <li>
             Company Name:HDS Company Ltd;
             Address:Rwanda-Kigali-Nyarugenge;
             Telephone:0788634446;


     </li>
     </ul>
</div>
        
     )
  }
}

 export default Contact; 






    





