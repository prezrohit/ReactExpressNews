import React from 'react';
import axios from 'axios';

import Header from './Header'
import Footer from './Footer'
import MainContent from './MainContent'
import '../style/App.css'

class App extends React.Component {

	state = {
        news: {
            status: "",
            totalResults: "",
            articles: []
        }
    }

    componentDidMount() {
        axios.get("http://newsapi.org/v2/top-headlines?country=us&apiKey=393fe4563d914309858b806b34c113c0&limit=10")
        .then(result => {
            if(result !== null) {
                return result.data;

            } else {
                return null;
            }
        })
        .then(data => {
           this.setState({news: data})
		})
		.catch(err => {
			console.log(err);
			
		});
    }
	
	render() {
		return (
			<div className={"app"}>
				<Header />
				<MainContent newsData={this.state.news} />
				<Footer />
			</div>
		  );
	}
}

export default App;
