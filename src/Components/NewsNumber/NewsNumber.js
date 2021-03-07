import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
const NewsNumber = (props) => {
    console.log(props);
    const length = props.articles.length;
    const classes = useStyles();

  return (
    <div style={{border: '1px solid',textAlign: 'center',backgroundColor:'#072F5F',color:'white'}} className={classes.root}>
        <h5>Total News Showed</h5>
      <Badge badgeContent={length} color="error">
        <MailIcon />
      </Badge>
    </div>
  );
};

export default NewsNumber;