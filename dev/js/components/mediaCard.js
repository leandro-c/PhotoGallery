import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

class MediaCard extends Component {
  render() {
    const { classes } = this.props;
    const {url,albumId,thumbnailUrl,title,id} = this.props.photo
    //console.log('props',this.props.photo)
    return (
      <div>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={thumbnailUrl}
                    title="title"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography component="p">
                        {title}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Button 1
                    </Button>
                    <Button size="small" color="primary">
                    Button 2
                    </Button>
                </CardActions>
            </Card>
      </div>
    )
  }
}
MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(MediaCard);
