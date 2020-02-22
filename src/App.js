import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import SocialCard from './components/SocialCard';
// import { Route, Link, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="main-wrapper">
      <SocialCard 
        author="Juan Cardenas"
        account="cardenasj97"
        date="Feb. 22"
        message="Learning React? Start Small"
        commentsQuantity="4"
        retweetsQuantity="197"
        likesQuantity="424"
      />       
      <SocialCard 
        author="Juan Cardenas"
        account="cardenasj97"
        date="Feb. 1"
        message="Second Post"
        commentsQuantity="2"
        retweetsQuantity="25"
        likesQuantity="46"
      />       
      <SocialCard 
        author="Juan Cardenas"
        account="cardenasj97"
        date="Jan. 14"
        message="First Post"
        commentsQuantity="7"
        retweetsQuantity="4"
        likesQuantity="2"
      />       
    </div>
  );
}

export default App;
