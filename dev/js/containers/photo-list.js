import React, { Component } from 'react';
import MediaCard from './../components/mediaCard'
//Reducers
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPhotos } from '../actions/index'


class UserList extends Component {

    constructor(props) {
        super(props);
        this.props.getPhotos()
        //console.log('get phothos', this.props.photos)
    }

    renderList() {
        return this.props.photos.slice(0,5).map((photo) => {
            return (
                <div key={photo.id}>
                    <MediaCard photo={photo} />
                    {/* <div key={photo.id}>
                        <li key={photo.id}>
                            <span>url</span>{photo.url}
                            <span>album id</span>{photo.albumId}
                            <span>thumbnail url</span>{photo.thumbnailUrl}
                            <span>title</span>{photo.title}
                            <span>url</span>{photo.url}
                        </li>
                    </div> */}
                </div>
                
            );
        });
    }

    render() {
        return (
            <div>
                <h1>PHOTOS FOR !</h1>
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}

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

export default connect(mapStateToProps, matchDispatchToProps)(UserList);
