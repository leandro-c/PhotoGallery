import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
export default class GridItem extends Component {
  render() {
      const {id, title, url, thumbnailUrl}= this.props.photo
      //console.log('photo',this.props)
    return (
      <div >
          <GridListTile key={id}>
              <img src={thumbnailUrl} alt={title} />
              <GridListTileBar
              title={title}
              subtitle={<span>by: {url}</span>}
              actionIcon={
                  <IconButton >
                  <InfoIcon />
                  </IconButton>
              }
              />
          </GridListTile>
      </div>
    )
  }
}
