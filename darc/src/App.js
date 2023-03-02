

import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
         users:[],
         isloading:true,
         filterdata:'',
         inputvalue:'',
         area:'List of Users'
    }
  }
  componentDidMount() {

fetch('https://jsonplaceholder.typicode.com/users')
 .then((response) => response.json())
 .then(namelist => {
    this.setState({ users:namelist,isloading:false });
})
  }
  render(){
    const filter=this.state.users.filter((item)=>{return item.name.toLocaleLowerCase().includes(this.state.filterdata.toLocaleLowerCase())})

    console.log(filter)
    if (this.state.isloading){
      return <h1>isloading.....</h1>
    }
     return(
      <div>
        <h1>{this.state.area}</h1>
          <input type='text' onChange={(e) => this.setState({filterdata:e.target.value})}placeholder='What are you searching for' />
          <div className='Container'>
          {
            filter.map((data) => {
              return(
              
                
              <div className='list'>
                <h1 key={data.id}>Name:{data.name}</h1>
                <p>Id:{data.id}</p>
                <p>Username:{data.username}</p>
                <p>Email:{data.email}</p></div>

                )
              
            })
          }
          
          </div>
        </div>
        
     )
  }
}

 export default App; 






    





