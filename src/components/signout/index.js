import React from 'react';
import {withFirebase} from '../firebase'
import { Grid, Button } from '@material-ui/core';


const Logout = ({firebase}) => {
    logoutHandler = () => {
        console.log('Clicked');
        firebase.doSignOut;

    }
    return ( 
        <Grid item>
            {/* <Button onClick={firebase.doSignOut} color="secondary"> Sign Out</Button> */}
            <Button onClick={logoutHandler} color="secondary"> Sign Out</Button>
        </Grid>
     );
}
 
export default withFirebase(Logout);