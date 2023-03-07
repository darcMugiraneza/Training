
import { Component } from 'react';
import {Routes , Route} from 'react-router-dom';
import App from './component/home';
import About from './component/about';
import Contact from './component/contact';
import Service from './component/signup';
import Table from './component/table';
import New from './component/new';


class Approute extends Component {
  
  render(){
     return(
<Routes>
    <Route path="home" index element={<App/>}/>
    <Route path="about"  element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="signup" element={<Service/>}/>
    <Route path="table" element={<Table/>}/>
    <Route path="new" element={<New/>}/>
    

</Routes>

     )
  }
}

 export default Approute; 










