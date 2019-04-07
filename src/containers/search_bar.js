import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// action creator:
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
    constructor (props) {
        super(props);

        this.state = { term: '' };

        // whenever you use 'this' in a callback (in this case, onInputChange),
        //   you'll need to update the context of 'this' in the component
        //   if you fail to update the context, you'll get an error because 
        //    the scope will be limited unless you do this
        //     from the render onChange, this is referencing something outside
        //     the searchbar component so we need to bind it here so it has the
        //      correct this context
        this.onInputChange = this.onInputChange.bind(this);
        // when we have a callback passed to a dom element with 'this'
        //      we need to bind the context of 'this' so js knows where to look
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();

        // fetch weather data
        this.props.fetchWeather(this.state.term);
        // clear the search input:
        this.setState({ term: '' });
    }
    render () {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get a 5 day forecast in your favorite cities"
                    className="form-control"
                    onChange={this.onInputChange}
                    value={this.state.term}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

// Ensure data flows to middleware and 
function mapDispatchToProps (dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch );
}

export default connect(null, mapDispatchToProps)(SearchBar);