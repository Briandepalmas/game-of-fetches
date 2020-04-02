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
    let three = "http://www.anapioficeandfire.com/api/houses/229"
    let four = "http://www.anapioficeandfire.com/api/houses/17"
    let five = "http://www.anapioficeandfire.com/api/characters/901"
    let six= "http://www.anapioficeandfire.com/api/houses/362"
    let seven = "http://www.anapioficeandfire.com/api/characters/232"
    
    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    const requestThree = axios.get(three);
    const requestFour = axios.get(four);
    const requestFive = axios.get(five);
    const requestSix = axios.get(six);
    const requestSeven = axios.get(seven);
    
    axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {
      const responseOne = responses[0]
      const responseTwo = responses[1]
      const responseThree = responses[2]
      const responseFour = responses[3]
      const responseFive = responses[4]
      const responseSix = responses[5]
      const responseSeven = responses[6]
      // use/access the results 

      let a=responseOne.data.born
      let b=responseTwo.data.region
      let c=responseThree.data.coatOfArms
      let d=responseFour.data.seats[1]
      let e=responseFive.data.aliases[1]
      let f=responseSix.data.founder //"https://www.anapioficeandfire.com/api/characters/209"
      let g=responseSeven.data.povBooks // "https://www.anapioficeandfire.com/api/books/1",
                                        // "https://www.anapioficeandfire.com/api/books/2",
                                        // "https://www.anapioficeandfire.com/api/books/3"
      
      this.setState({data: [a,b,c,d,e,f,g]})
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
        {this.state.data[2]} 
        <h1>What is the second seat of House Baratheon?</h1> 
        {this.state.data[3]}
        <h1>What is Robert Baratheon's second alias?</h1> 
        {this.state.data[4]}
        <h1>What's the name of the founder of House Stark?</h1> 
        {this.state.data[5]}
        <h1>What are the titles of Catelyn Stark's three POV books?</h1> 
        {this.state.data[6]}
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