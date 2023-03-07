
import { Component } from 'react';
import { Link } from 'react-router-dom';
class Nav extends Component {
  

  render(){
    
     return(
   <> 
<nav class="bg-sky-700 p-2 mt-0 fixed top-0 right-0 left-0 w-full z-10 pin-t">
      <div class="container mx-auto flex flex-wrap items-center">
      <div class="flex w-full md:w-1/2 justify-center md:justify-start text-black font-extrabold">
      <Link class="text-black no-underline hover:text-black hover:no-underline" to="home">
        <span class="text-2xl pl-2 text-navy-Blue-400"><i class="em em-grinning"></i>Beautiful Home</span>
      </Link>
          </div>
    <div class="flex w-full pt-2 content-left justify-between md:w-1/2 md:justify-end">
      <ul class="list-reset flex justify-between flex-1 md:flex-none items-left">
        <li class="mr-3">
        <Link class="inline-block py-1 px-1 text-black-600 no-underline text-black-200" to="/home">Home</Link>
        </li>
        <li class="mr-3">
        <Link class="inline-block py-1 px-1 text-black no-underline" to="/about">About us</Link>
        </li>
        <li class="mr-3">
        <Link class="inline-block py-1 px-1 text-black no-underline" to="/contact">contact us</Link>
        </li>
        <li class="mr-3">
        <Link class="inline-block py-1 px-1 text-black no-underline" to="/signup">Sign UP</Link>
        </li>
        
      </ul>
    </div>
      </div>
  </nav>
 
   
</>   
     )
  }
}  
    

 export default Nav; 






    





