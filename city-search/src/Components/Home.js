import React, {Component} from 'react';
import '../Home.css'

class Home extends Component {
    constructor() {
        super();

        this.state = {
            cityName: "",
        }
    }

    render() {
        return(
            <div id="page-wrapper">
                <div id="title-div">
                    <h1>Welcome to the Zipcode Search App</h1>
                </div>
            </div>
        );
    }
}

export default Home;