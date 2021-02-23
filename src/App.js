import React from "react";
import "./App.css";
import contacts from "./contacts.json";
// import ButtonToSayHello from "./components/AddRandomContact";

class App extends React.Component {
  state = {
    actors: contacts.slice(0, 5),
  };



  // handleDelete = (movieId) => {

  //   // Filter the movies from the state to remove one
  //   const filteredMovies = this.state.movies.filter((movie) => {

  //     if (movie._id !== movieId) {
  //       return true;  // include the movie in the new array
  //     }
  //     else if (movie._id === movieId) {
  //       return false; // exclude the movie from the new array
  //     }
  //     // a bit shorter way:
  //     // const isMovieToDelete = !movie._id === movieId;
  //     // return isMovieToDelete
  //   });

  //   this.setState({ movies: filteredMovies });

  // }



 addRandom = (actorsId) => {
   const newArray = [...this.state.actors]
  const findActor = contacts[Math.floor(Math.random()*contacts.length)]
  newArray.push(findActor)
  this.setState({actors : newArray})
 }


  render() {
    return (
      <div className="App">
        <h1>Iron Contact</h1>

        <button onClick={() => {this.addRandom()}}>Add celebrity</button>
        
        {this.state.actors.map((contact) => {
          return (
            <table>
              
              <th>
                <img className="actorImg" src={contact.pictureUrl} img />{" "}
              </th>

              <th className="contact">{contact.name}</th>
              <th>{contact.popularity}</th>
            </table>
          );
        })}
      </div>
    );
  }
 }

export default App;
