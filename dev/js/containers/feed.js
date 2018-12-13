import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPhotos } from '../actions/index'
//Components
import GridItem from '../components/grid-item'
class Feed extends Component {
    constructor(props) {
        super(props);

        this.state = {
        items: [],
        visible: 2,
        error: false
        };

        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
        this.setState(prev => {
        return { visible: prev.visible + 4 };
        });
    }

    /* componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(res => {
            this.setState({
            items: res
            });
        })
        .catch(error => {
            console.error(error);
            this.setState({
            error: true
            });
        });
    } */

    render() {
        return (
        <section className="feed">
            <h1>Simple Load More/Pagination with React</h1>
            <h2>With Array.prototype.slice() and the power of component state!</h2>

            <div className="tiles" aria-live="polite">
            {this.props.photos.slice(0, this.state.visible).map((item, index) => {
                return (
                <div className="tile fade-in" key={item.id}>
                    <span className="count">{index + 1}</span>
                    <h2>{item.title}</h2>
                    <p>{item.url}</p>
                </div>
                );
            })}
            </div>
            {this.state.visible < this.state.items.length && (
            <button onClick={this.loadMore} type="button" className="load-more">
                Load more
            </button>
            )}
        </section>
        );
    }
}

//ReactDOM.render(<Feed />, document.getElementById("feed"));

function mapStateToProps(state) {
    //console.log('mapStateToProps',state)
    return {
        photos: state.photos.data,
        fetched: state.photos.fetched
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ getPhotos: getPhotos }, dispatch);
}

export default  connect(mapStateToProps, matchDispatchToProps)(Feed)
