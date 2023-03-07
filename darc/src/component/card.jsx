
import { Component } from 'react';
import Table from './table';
class Card extends Component {
  

  render(){
    
     return(
        
        <div className="mt-2.5 ml-2.5 space-y-14">
            <h1>HD Company Ltd</h1>
            <p>
            We make a home looks
 more attractive and visually appealing
            </p>
            <div class="flex   ml-2.5 py-px  space-x-3 bg-grey-900">
        <div
        
    class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
    <a href="#!">
      <img
        class="rounded-t-lg max-w-xs max-h-48"
        src="https://th.bing.com/th/id/R.f9e0106135dcc90a84c5fbabc1250dff?rik=IWr5bAqM4DnvCw&riu=http%3a%2f%2fwww.2luxury2.com%2fwp-content%2fuploads%2f2013%2f12%2fFurniture-and-D%C3%A9cor-Trends-to-Watch-for-in-2014.jpg&ehk=WyaSCsSlEKRaH9OjSYRjZ3w1CMTvR0fF94750l9LguE%3d&risl=&pid=ImgRaw&r=0"
        alt="" />
    </a>

      </div>
    
  <div
    class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
    <a href="#!">
      <img
        class="rounded-t-lg max-w-xs max-h-48"
        src="https://th.bing.com/th/id/R.1606b31eec58cc3e3835e402d72c0de9?rik=WUoJ8YVtJIA6rg&pid=ImgRaw&r=0"
        alt="" />
    </a>
    </div>
    <div
    class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
    <a href="#!">
      <img
        class="rounded-t-lg max-w-xs max-h-48"
        src="https://s3-media3.fl.yelpcdn.com/bphoto/vlaBh1Nhc4Ri4kJ2Rek12Q/o.jpg"
        alt="" />
    </a>
    </div>
    </div>
    </div>
     )
  }
}
export default Card;
                                