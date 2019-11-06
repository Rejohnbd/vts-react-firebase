import React from 'react';
import {withFirebase} from '../firebase';
import {withRouter} from 'react-router-dom';
import * as ROUTES from '../constant/router';
import { Grid, Button } from '@material-ui/core';


class Logout extends React.Component {
    state = {  }

    logoutHandler = ()=>{
        this.props.firebase.doSignOut();
        this.props.history.push(ROUTES.LANDING)
    }

    render() { 
        return (
            <Grid item>
            {/* <Button onClick={this.props.firebase.doSignOut} color="secondary"> Sign Out</Button> */}
            <Button onClick={this.logoutHandler} color="secondary"> Sign Out</Button>
        </Grid>
        );
    }
}
 
export default withFirebase(withRouter(Logout));

// const Logout = ({firebase}) => {
//     return ( 
//         <Grid item>
//             {/* <Button onClick={firebase.doSignOut} color="secondary"> Sign Out</Button> */}
//         </Grid>
//      );
// }
 
// export default withFirebase(Logout);