import React, { Component } from 'react';
//Material-ui
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Grid from '@material-ui/core/Grid'
//Reducers
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPhotos } from '../actions/index'
//Components
import GridItem from '../components/grid-item'
import MediaCard from '../components/mediaCard'
//lib
import Button from '@material-ui/core/Button';

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
        height: "100%",
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
        this.state = {
            items: [],
            visible: 8,
            error: false
            };
            this.loadMore = this.loadMore.bind(this);    
    }
    loadMore() {
        this.setState(prev => {
        return { visible: prev.visible + 4 };
        });
    }

    renderList() {
        return this.props.photos.slice(0, this.state.visible).map((photo) => {
            //const { classes } = props;
            return (
                <GridItem key={photo.id} photo={photo}/>
            );
        });
    }
    
    render() {
        return (
            <div style={{width: '100%',display: 'flex',flexDirection: 'column', maxWidth:1200,margin:'0 auto' }}>
                
                <div>
                    <h1>PHOTOS FOR!</h1>
                    <GridList cellHeight={100} >
                        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                            <ListSubheader component="div">Gallery</ListSubheader>
                        </GridListTile>
                        {
                            this.renderList()
                        }
                    </GridList>
                </div>
                <div>
                    {this.state.visible < this.props.photos.length && (
                        <div style={{display:'flex', justifyContent:'center',alignItems:'center',width:'100%'}}>
                            <Button size="small" color="primary" className="load-more" onClick={this.loadMore}>
                                Load more
                            </Button>
                        </div>
                    )}
                </div>
                
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
