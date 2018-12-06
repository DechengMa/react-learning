import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

/* const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        position => console.log(position),
        err => console.log(err)
    );

     return <div>Hi there!</div>     
 };
 */

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat: null, errMessage: '' };
    }

    state = { lat: null, errMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errMessage: err.message })
        );
    }

    componentDidUpdate() {
        console.log('My component was just updated');
    }

    renderContent() {
        if(this.state.errMessage && !this.state.lat) {
            return <div>Error: {this.state.errMessage}</div>
        }

        if(!this.state.errMessage && this.state.lat) {
            return <SeasonDisplay lat={ this.state.lat }/>
        }

        return <Spinner message='Please accept location request'/>;
    }

    //React says we have to define render!
    render() {
        return (
            this.renderContent()
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));