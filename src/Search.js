import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {search: '' };
  }
  render() {
    return (
      <form>
        <input
        list='suggestedCities'
        className='search-input'
        type='search'
        name='search'
        value={this.state.search}
        onChange={(event) => {
        let answers = this.props.suggestCities(event.target.value);
        this.setState({search: event.target.value, answers});
        }}
        />
        <datalist id='suggestedCities'>
        {
        this.state.answers &&
        this.state.answers.map((answer, index) =>
          <option value={answer} key={index}/>
        )}
        </datalist>
        <button className='search-button' onClick={(event) => {
          event.preventDefault();
          this.props.getData(this.state.search);
        }}><img className='search-button-icon' src='images/search.svg' /></button>
      </form>
    );
  }
}


export default Search;
