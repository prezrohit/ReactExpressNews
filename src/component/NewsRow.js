import React from 'react'
import PropTypes from 'prop-types'
import '../style/NewsRow.css'

class NewsRow extends React.Component {
    render() {
        return (
            <div className={"NewsRow"}>
                <img alt="News Thumbnail" height="80px" width="80px" 
                src={this.props.news.urlToImage} />
                   
                <div>
                    <h3 className={"Title"}>
                        {this.props.news.title}
                    </h3>

                    <p className={"SourceName"}>
                        {this.props.news.source.name}
                    </p>
                </div>
            </div>
        );
    }
}

NewsRow.propTypes = {
    news: PropTypes.object.isRequired
}

export default NewsRow;
