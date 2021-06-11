import React, {Component} from 'react';
import '../Home.css'
import Card from './Card';

class Home extends Component {
    constructor() {
        super();

        this.state = {
            cityName: "",
            displayCity: "",
            citySubmitted:false,
            data:[],
            found:false
        }

        this.handleCityChange = this.handleCityChange.bind(this);
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
    }

    handleCityChange(event) {
        this.setState({cityName: event.target.value});
    }
    
    formSubmitHandler(event) {
        event.preventDefault();
        let city = this.state.cityName.toUpperCase();
        this.setState({displayCity: city});
        this.setState({citySubmitted: true, found:false});
    }

    async componentDidUpdate() {
        if (this.state.citySubmitted) {
            this.setState({citySubmitted: false});
            let city = this.state.cityName.toUpperCase();
            var url = "http://ctp-zip-api.herokuapp.com/city/" + city;
            const response = await fetch(url);
            const data = await response.json();
            this.setState({data:data, found:true});
            console.log(data);
        }
    }

    render() {

        let dataArr = [];
        if(this.state.found) {
            dataArr = this.state.data.map((i, index) => <Card zip={i.toString(index)} />);
        } else {
            dataArr = <h3>Not Found</h3>;
        }

        return(
            <div id="page-wrapper">
                <div id="title-div">
                    <h1>Welcome to the City Search App</h1>
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

                    {dataArr}
                </section>
            </div>
        );
    }
}

export default Home;