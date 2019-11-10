import React, { forwardRef } from 'react';
import { NavLink as RouterLink, Link } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, List, ListItem, colors } from '@material-ui/core';

import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ImageIcon from '@material-ui/icons/Image';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PermDeviceInformation from '@material-ui/icons/PermDeviceInformation';
import * as ROUTES from '../constant/router';
import Signout from '../signout';


const useStyles = makeStyles(theme => ({
  root: {},
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  navlink: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    // justifyContent: 'flex-start',
    display: 'flex',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main
    }
  }
}));

// const CustomRouterLink = forwardRef((props, ref) => (
//   <div
//     ref={ref}
//     style={{ flexGrow: 1 }}
//   >
//     <RouterLink {...props} />
//   </div>
// ));

const pages = [
  // {
  //   title: 'Dashboard',
  //   href: '/dashboard',
  //   icon: <DashboardIcon />
  // },
  // {
  //   title: 'Users',
  //   href: '/users_list',
  //   icon: <PeopleIcon />
  // },
  // {
  //   title: 'Products',
  //   href: '/products',
  //   icon: <ShoppingBasketIcon />
  // },
  // {
  //   title: 'Authentication',
  //   href: '/sign-in',
  //   icon: <LockOpenIcon />
  // },
  {
    title: 'Typography',
    href: '/typography',
    icon: <TextFieldsIcon />
  },
  {
    title: 'Icons',
    href: '/icons',
    icon: <ImageIcon />
  },
  {
    title: 'Account',
    href: '/account',
    icon: <AccountBoxIcon />
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: <SettingsIcon />
  }
];

const SidebarNav = props => {
  const { className } = props;
  const classes = useStyles();

  return (
    <List
      className={clsx(classes.root, className)}
    >
      <ListItem
          className={classes.item}
          disableGutters
          key='Dashboard'
        >
          <Link
            className={classes.navlink}
            to={ROUTES.HOME}
          >
            <div className={classes.icon}><DashboardIcon /></div>
            Dashboard
          </Link>
      </ListItem>
      <ListItem
          className={classes.item}
          disableGutters
          key='Users'
        >
          <Link
            className={classes.navlink}
            to={ROUTES.USERSLIST}
          >
            <div className={classes.icon}><PeopleIcon /></div>
            Users List
          </Link>
      </ListItem>
      <ListItem
          className={classes.item}
          disableGutters
          key='Devices'
        >
          <Link
            className={classes.navlink}
            to={ROUTES.DEVICES}
          >
            <div className={classes.icon}><PermDeviceInformation /></div>
            Devices List
          </Link>
      </ListItem>
      <Divider className={classes.divider} />
      <Signout />
      {/* <ListItem
          className={classes.item}
          disableGutters
          key='Logout'
        >
          <Button
            activeClassName={classes.active}
            className={classes.button}
            // component={CustomRouterLink}
            // to={page.href}
          >
            <div className={classes.icon}><LockOpenIcon /></div>
            Sign Out
          </Button>
      </ListItem> */}
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string
};

export default SidebarNav;
