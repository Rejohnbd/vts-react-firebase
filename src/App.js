import React, { Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import * as ROUTES from './components/constant/router';
import Navigation from './components/navigation';
import LangingPage from './components/landing';
import SignUpPage from './components/signup';
import LoginPage from './components/login';
import PasswordForgetPage from './components/password-forget';
import HomePage from './components/home';
import UserListPage from './components/userslist';
import AccountPage from './components/account';
import AdminPage from './components/admin';
import './App.css';
import {withAuthentication} from './components/session';
import DevicePage from './components/devices';

import {tableIcons, DataTableContext} from './components/data-table';
// Rejohn Added
import themeFile from './theme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import HomeLayout from './components/Homepage/';
import NotFound from './components/notfound';
import UserHome from './components/Users/UserHome';

const theme = createMuiTheme(themeFile);

const App = props => {
  console.log(props.user,' From App')
  // const renderContent = (props.user.is_admin) ? (
  //   'Admin is True'
  // ) : (
  //   'Admin is False'
  // );
  return (
    <MuiThemeProvider theme={theme}>
    <DataTableContext.Provider value={tableIcons}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeLayout} />
          {!props.user ? (
            <Fragment>
              <Route exact path="/signin" component={LoginPage} />
              <Route exact path="/signup" component={SignUpPage} />
              <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
            </Fragment>
          ): (
            (props.user.is_admin)?(
              <Fragment>
                <Route exact path={ROUTES.HOME} render={() => <HomePage userInfo={props.user} /> }/>
                <Route exact path={ROUTES.USERSLIST} render={() => <UserListPage userInfo={props.user} /> } />
                <Route exact path={ROUTES.DEVICES} render={() => <DevicePage userInfo={props.user} /> }/>

                <Route render={() => <NotFound userInfo={props.user} /> }/>
                <Route path={ROUTES.ACCOUNT} component={AccountPage} />
                <Route path={ROUTES.ADMIN} component={AdminPage} />
              </Fragment>
            ):(
              <Fragment>
                <Route exact path={ROUTES.USERHOME} render={() => <UserHome userInfo={props.user} /> }/>
                <Route render={() => <NotFound userInfo={props.user} /> }/>
              </Fragment>
            )
            
          )}
          
          
          {/* <Navigation user={props.user} /> */}
            
        </Switch>
      </Router>
    </DataTableContext.Provider>
    </MuiThemeProvider>
  ) 
  

  // return (
  //   <DataTableContext.Provider value={tableIcons}>
  //     <Router>
  //       <div>
  //         <Navigation user={props.user} />

  //         <Route exact path={ROUTES.LANDING}
  //           render={()=><LangingPage firebase={props.firebase} user={props.user}/>}
  //           />
  //         <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
  //         <Route path={ROUTES.SIGN_IN} component={LoginPage} />
  //         <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
  //         <Route
  //           path={ROUTES.HOME}
  //           render={() => <HomePage user={props.user} />}
  //         />
  //         <Route path={ROUTES.ACCOUNT} component={AccountPage} />
  //         <Route path={ROUTES.ADMIN} component={AdminPage} />
  //         <Route path={ROUTES.DEVICES} component={DevicePage} />
  //       </div>
  //     </Router>

  //   </DataTableContext.Provider>
  // );
};

export default withAuthentication (App);
