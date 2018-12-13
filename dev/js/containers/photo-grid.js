import React, { Component } from 'react';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
//Reducers
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPhotos } from '../actions/index'
//Components
import GridItem from '../components/grid-item'
const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  });

class PhotoGrid extends Component {

    constructor(props) {
        super(props);
        this.props.getPhotos()
        //console.log('get phothos', this.props.photos)
    }
    renderList() {
        return this.props.photos.slice(0,5).map((photo) => {
            //const { classes } = props;
            return (
                <div key={photo.id}>
                    <GridItem photo={photo}/>
                </div>
                
            );
        });
    } 
    render() {
        return (
            <div>
                <h1>PHOTOS FOR MEDIAMONKS!</h1>
                <GridList cellHeight={180} >
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Gallery</ListSubheader>
                    </GridListTile>
                <ul>
                    {
                        this.renderList()
                    }
                </ul>
                </GridList>
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

export default  connect(mapStateToProps, matchDispatchToProps)(PhotoGrid)
