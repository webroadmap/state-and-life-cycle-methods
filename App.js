
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "Red"};
    //binding code missing because we have used arrow function
  }

  componentDidMount(){

    // setting state 
    setTimeout( () => {
    this.setState({favoritecolor: "Yellow"})
    }, 1000); 

    
  }

  componentDidUpdate() {

    document.getElementById("mydiv").innerHTML= "Your color has changed now and new color is " + this.state.favoritecolor; 

  }

 
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="mydiv">

        </div>
      </div>
      
    );
  }
}

export default App;
