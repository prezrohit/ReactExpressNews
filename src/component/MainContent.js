import React from 'react'
import PropTypes from 'prop-types'
import NewsRow from './NewsRow';

class MainContent extends React.Component {

	render() {
		const newsArticles = this.props.newsData.articles
		let counter = 0;
		return (
			<div> 
				{
					newsArticles.map((article) => (
					<NewsRow key={counter++} news={article} /> ))
				}
		</div>
		);
	}
}

MainContent.propTypes = {
	newsData: PropTypes.object.isRequired
}

export default MainContent;
