import React, {Component, Fragment} from 'react';
import {withAuthorization, AuthUserContext} from '../session';
import axios from 'axios';
import MatrialTable from 'material-table';
import {DataTableContext} from '../data-table';
import {Grid} from '@material-ui/core';

import {connect} from 'react-redux'
import {fetchAllUsers,updateUser} from '../../actions'
import Navigation from '../navigation';

// For Rejohn need
import { makeStyles, useTheme } from '@material-ui/styles';
import Topbar from '../layouts/Topbar';
import Sidebar from '../layouts/Sidebar';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    height: '100%'
  }
}));


class HomePage extends Component {
  constructor (props) {
    super (props);
    this.state = {
      columns: [
        {title: 'Name', field: 'name'},
        {title: 'Email', field: 'email'},
        {title: 'Contact', field: 'contact'},
        {title: 'Address', field: 'address'},
        {title: 'Organization', field: 'organization_name'},
      ]
    };
  }

  componentDidMount () {
    console.log("Sohel Test",this.props)

    if(this.props.users.length===0){
      this.props.getUsers();
    }
  }

  updateUser = (newData, oldData, resolve) => {
    this.props.updateUser(newData,oldData,resolve)
  };

  render () {
    console.log(this.props,'Home Index')
    // console.log(this.props,'Home Index')
    return(
      
      <div>
        <Topbar  />
        <Sidebar
          // onClose={handleSidebarClose}
          // open={shouldOpenSidebar}
          // variant={isDesktop ? 'persistent' : 'temporary'}
          variant={'persistent'}
        />
        {/*<main className={classes.content}>
          {children}
          <Footer />
        </main> */}
      </div>
      
    );
    // Sohel Sir Code
    /*return (
      <Fragment>
        <DataTableContext.Consumer>
          {tableIcons => (
            <Grid container justify="center" style={{padding: 20}}>
              <Grid item md={10} sm={10}>
                <MatrialTable
                  icons={tableIcons}
                  title="User List"
                  columns={this.state.columns}
                  data={this.props.users}
                  options={{actionsColumnIndex: -1}}
                  editable={{
                    onRowUpdate: (newData, oldData) => {
                      return new Promise (resolve => {
                        this.updateUser (newData, oldData, resolve);
                      });
                    },
                  }}
                />
              </Grid>
            </Grid>
          )}
        </DataTableContext.Consumer>
      </Fragment>
    );*/
  }
}

const condition = authUser => authUser != null;

const mapStateToProps = (state)=>{
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    getUsers:()=>dispatch(fetchAllUsers()),
    updateUser:(newData, oldData, resolve)=>dispatch(updateUser(newData,oldData,resolve))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withAuthorization (condition) (HomePage));
