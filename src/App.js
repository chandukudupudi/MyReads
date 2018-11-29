import React from 'react';
import SearchPage from './SearchPage';
import MainPage from './MainPage';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
     state = {
       books: []
     }

  componentDidMount(){
    this.fetchmoveShelf();
     }

  fetchmoveShelf = () => {
  BooksAPI.getAll().then((books) => {
    this.setState({ Book: books });
    })
  }

updatemoveShelf = (book, shelf).then(() => {
  this.fetchmoveShelf();
     });
   }

render() {
    return (
       <div className="app">
     <Route exact path="/" render={() => (
      <Book
      books={this.state.books}
       onChange={this.state.updatemoveShelf}
       />
      )}
      />
<Route exact path="/search" render={() => (
      <SearchPage
         moveShelf={this.updatemoveShelf}
         books={this.state.books}
         />
        )}
        />
</div>
      )
    }
 }

export default BooksApp;

