import React, { Component } from 'react'
import './App.css';
import axios from 'axios'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  /* Followed assigment instructions, Noticed the "make multiple API Calls" resource and 
  forgot to make components for the sake of making multiple API Calls at once */
  componentDidMount() {
    
    //Code below implemented by following the provided resource for assistance making multiple API calls 
    //Citation: https://www.storyblok.com/tp/how-to-send-multiple-requests-using-axios

// Assign API URL to a variable
    let one = "http://anapioficeandfire.com/api/characters/16"
    let two = "http://www.anapioficeandfire.com/api/houses/37"
    let three = "http://www.anapioficeandfire.com/api/houses/229"
    let four = "http://www.anapioficeandfire.com/api/houses/17"
    let five = "http://www.anapioficeandfire.com/api/characters/901"
    let six= "http://www.anapioficeandfire.com/api/houses/362"
    let seven = "http://www.anapioficeandfire.com/api/characters/232"
    
    // axios.get receives the api url from the variable created above and assings the data to another variable
    //from the server request made
    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    const requestThree = axios.get(three);
    const requestFour = axios.get(four);
    const requestFive = axios.get(five);
    const requestSix = axios.get(six);
    const requestSeven = axios.get(seven);
    
//axios.all takes in an array containing data .spread "..." iterates through the array in axios.all 
    axios.all([requestOne, requestTwo, requestThree,requestFour,requestFive,requestSix,requestSeven])
    .then(axios.spread((...responses) => {
     
      const responseOne = responses[0]
      const responseTwo = responses[1]
      const responseThree = responses[2]
      const responseFour = responses[3]
      const responseFive = responses[4]
      const responseSix = responses[5]
      const responseSeven = responses[6]
      // use/access the results 
//uses variable from above containing the JSON to call for specific info neededto answer G.O.T question.
      let a=responseOne.data.born
      let b=responseTwo.data.region
      let c=responseThree.data.coatOfArms
      //calls the index of the information needed from the array property in the JSON
      let d=responseFour.data.seats[1]
      let e=responseFive.data.aliases[1]
      //unable to make a "double fetch" to call api within data received from an api 
      let f=responseSix.data.founder //"https://www.anapioficeandfire.com/api/characters/209"
      let g=responseSeven.data.povBooks // "https://www.anapioficeandfire.com/api/books/1",
                                        // "https://www.anapioficeandfire.com/api/books/2",
                                        // "https://www.anapioficeandfire.com/api/books/3"
      

//made data from letter variables an array of where each index contains the specific information requested
      this.setState({data: [a,b,c,d,e,f,g]})
    
    })).catch(errors => {
      // react on errors.
    })
  }
 
//call the index on this.state.data containing answer to the Game Of Thrones questions
  render() {
    return (
      
        <div>

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

//Used fetch exercise for assistance as well

/*let one =  "http://anapioficeandfire.com/api/characters/583"
const a=axios.get(one)
    a.then(res => {
      const bc= res.data.culture;
      console.log("recipes ---->", bc)
      
      this.setState({data: bc})

    })
    .catch(error => {
      console.log('there is an eror', error)
    })

  }*/