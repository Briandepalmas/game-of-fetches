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
    // |||||||||||||| fetch |||||||||||||||
    // fetch("https://api.spoonacular.com/recipes/search?query=cheese&number=4&apiKey=27a02bbb5b48401f96bfda6a7d3e2545")
    //   .then(response => response.json()) // first response => resolved
    //   .then(
    //     result => {
    //       console.log(result.results)

    //       this.setState({
    //         isLoaded: true,
    //         items:result.results
    //       })

    //       console.log("state is updated",this.state.data)
    //     }
    //   ).catch(e => console.log("there's a error", e))
    // |||||||||||||||||||||||||||||||||||||
    let one = "http://anapioficeandfire.com/api/characters/16"
    let two = "http://www.anapioficeandfire.com/api/houses/37"
    let three = "https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt"
    
    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    const requestThree = axios.get(three);
    
    axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {
      const responseOne = responses[0]
      const responseTwo = responses[1]
      const responesThree = responses[2]
      // use/access the results 

      let mary=responseOne.data.born
      let bob=responseTwo.data.region
      
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
        <h1>What's the coat of arms of House Lannister?</h1> 
        <h1>What region is House Targaryen in?</h1> 
        <h1>What region is House Targaryen in?</h1> 
        <h1>What region is House Targaryen in?</h1> 
        <h1>What region is House Targaryen in?</h1> 
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