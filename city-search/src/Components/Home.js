import React, {Component} from 'react';
import '../Home.css'

class Home extends Component {
    constructor() {
        super();

        this.state = {
            cityName: "",
            displayCity: "",
            citySubmitted:false
        }

        this.handleCityChange = this.handleCityChange.bind(this);
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
    }

    handleCityChange(event) {
        this.setState({cityName: event.target.value});
    }
    
    formSubmitHandler(event) {
        event.preventDefault();
        this.setState({displayCity: this.state.cityName});
        this.setState({citySubmitted: true});
    }

    render() {
        return(
            <div id="page-wrapper">
                <div id="title-div">
                    <h1>Welcome to the Zipcode Search App</h1>
                </div>

                <section id="section-wrapper">
                    
                    <form onSubmit={this.formSubmitHandler}>
                        <label>Enter a City: </label>
                        <input placeholder="Try New York"
                            value={this.state.cityName}
                            onChange={this.handleCityChange}
                            name="city">
                        </input>
                        <button type="submit">Submit</button>
                    </form>

                    <hr />

                    <div id="search-title"><h2>Cities in: {this.state.displayCity}</h2></div>

                </section>
            </div>
        );
    }
}

export default Home;