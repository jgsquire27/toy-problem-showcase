import React, {Component} from 'react';

export default class FilterObject extends Component {

   constructor(){
      unFilteredArray = [];
      userInput = '';
      filteredArray = []
   }
   render(){
      return(
         <div className='puzzleBox filterObjectPB'>
            <span className='puzzleText'></span>
            <input className='inputLine' onChange={}></input>
            <button className='confirmationButton' onclick={}></button>
            <span className='resultsBox filterObjectRB'>
               <h4>Filter Object</h4>
            </span>
         </div>          
      )
   }
}
