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

    axios.get("https://api.spoonacular.com/recipes/search?query=cheese&number=4&apiKey=27a02bbb5b48401f96bfda6a7d3e2545")
    .then(res => {
      const recipes = res.data.results;
      console.log("recipes ---->", recipes)
      
      this.setState({data: recipes})

    })
    .catch(error => {
      console.log('there is an eror', error)
    })

  }


  render() {
    return (
      <div>
        <h1> Spoonacular API </h1>
        <ul>
          {this.state.data.map((recipe, id) => <li key={id}> {recipe.title} </li>)}
        </ul>
      </div>
    )
  }
}