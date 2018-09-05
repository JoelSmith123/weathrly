import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import Weather from './Weather';
import Hourly from './Hourly';
import Daily from './Daily';
import data from './mock';
import key from './key';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <form className='location-search'>
            <input className='location-search-input' type='search' name='search' />
            <button className='location-search-button'>Search</button>
          </form>
        </header>
        <Weather data={data}/>
        <Hourly data={data}/>
        <div className='ten-day-forecast'>
          <Daily data={data}/>
        </div>
      </div>
    );
  }
}

export default App;
