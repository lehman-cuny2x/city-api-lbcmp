import React, {Component} from 'react';
import '../Home.css'

class Home extends Component {
    constructor() {
        super();

        this.state = {
            cityName: "",
        }
    }

    handleZipcodeChange(event) {

    }
    
    formSubmitHandler(event) {

    }

    render() {
        return(
            <div id="page-wrapper">
                <div id="title-div">
                    <h1>Welcome to the Zipcode Search App</h1>
                </div>

                <section id="section-wrapper">
                    
                    <form onSubmit={this.formSubmitHandler}>
                        <label>Enter a Zipcode: </label>
                        <input placeholder="Try New York"
                            value={this.state.zipcode}
                            onChange={this.handleZipcodeChange}
                            name="zipcode"
                            maxLength="5"
                            minLength="5">
                        </input>
                        <button type="submit">Submit</button>
                    </form>
                </section>
            </div>
        );
    }
}

export default Home;