import React, { Component } from 'react'
import './App.css';
import axios from 'axios'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: []
    }
  }

  componentDidMount() {
    
    //Code below implemented by following the provided resource for multiple API calls 
    //Citation: https://www.storyblok.com/tp/how-to-send-multiple-requests-using-axios


    let one = "http://anapioficeandfire.com/api/characters/16"
    let two = "http://www.anapioficeandfire.com/api/houses/37"
    let three = "https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt"
    let four = "http://www.anapioficeandfire.com/api/houses/17"
    let five = "http://www.anapioficeandfire.com/api/characters/901"
    let six= "http://www.anapioficeandfire.com/api/houses/362"
    let seven = "http://www.anapioficeandfire.com/api/characters/232"
    
    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    const requestThree = axios.get(three);
    const requestFour = axios.get(three);
    const requestFive = axios.get(three);
    const requestSix = axios.get(three);
    const requestSeven = axios.get(three);
    
    axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {
      const responseOne = responses[0]
      const responseTwo = responses[1]
      const responesThree = responses[2]
      // use/access the results 

      let a=responseOne.data.born
      let b=responseTwo.data.region
      let c=responseTwo.data.region
      let d=responseTwo.data.region
      let e=responseTwo.data.region
      let f=responseTwo.data.region
      let g=responseTwo.data.region
      
      this.setState({data: [mary,bob]})
      //this.setState({data: bob})
    })).catch(errors => {
      // react on errors.
    })
  }
 

  render() {
    return (
      
        <div>
         {/* {this.state.data.map((f, id) =>  <p key={id}> {f.born} </p>)} */}
         <h1> Where was Margaery Tyrell born? </h1>
         {this.state.data[0]}
        <h1>What region is House Targaryen in?</h1> 
        {this.state.data[1]}
        <h1>What's the coat of arms of House Lannister?</h1>
        {this.state.data[1]} 
        <h1>What is the second seat of House Baratheon?</h1> 
        {this.state.data[1]}
        <h1>What is Robert Baratheon's second alias?</h1> 
        {this.state.data[1]}
        <h1>What's the name of the founder of House Stark?</h1> 
        {this.state.data[1]}
        <h1>What are the titles of Catelyn Stark's three POV books?</h1> 
        {this.state.data[1]}
        </div>
    
    )
  }
}

// let one =  "http://anapioficeandfire.com/api/characters/583"
// const a=axios.get(one)
//     a.then(res => {
//       const bc= res.data.culture;
//       console.log("recipes ---->", bc)
      
//       this.setState({data: bc})

//     })
//     .catch(error => {
//       console.log('there is an eror', error)
//     })

//   }