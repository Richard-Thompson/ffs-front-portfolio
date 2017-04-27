import React from 'react';
import HomeNewsStoryFeedCard from './HomeNewsStoryFeedCard';
import { connect } from 'react-redux';
import _ from 'underscore';
import PropTypes from 'prop-types';


class HomeNewsStoryFeed extends React.Component {
  render() {
    return (
      <div>
        <h3><b>Recent Fake News</b></h3>
        {_.map(this.props.articles, (article, i) => {
          return <HomeNewsStoryFeedCard key={i} title={article.title} domain={article.domain} />;
        }).slice(0, 10)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles.byId
  };
}

HomeNewsStoryFeed.propTypes = {
  articles: PropTypes.shape({
    title: PropTypes.string,
    domain: PropTypes.string
  })
};

export default connect(mapStateToProps)(HomeNewsStoryFeed);