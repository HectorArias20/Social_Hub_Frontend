import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { minWidth } from '@mui/system';
import React from 'react'

const useStyles = makeStyles(theme=>({
    root:{
        minWidth:0,
        //margin: theme.spacing(0.5),
    },
    secondary:{
        backgroundColor: "light-gray",
        '& .MuiButton-label':{
            //color: theme.palette.secondary.main,
        }
    },
    primary:{
        //backgroundColor: theme.palette.primary.light,
        '& .MuiButton-label':{
           // color: theme.palette.primary.main,
        }
    }

    
}));
export default function ActionButton(props) {
    const {color, children, onClick} = props;
    const classes= useStyles();
  return (
    <Button className={`${classes.root} ${classes[color]}`} onClick={onClick}>{children}</Button>
  )
}
