import React from 'react';
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FlatButton from 'material-ui/FlatButton';
import { config } from '../../../config';

const Logged = () => (
  // TODO(hyungsun): Add badge and current user avatar(See material-ui/Avatar) from github.
  <div>
    <IconMenu
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
      targetOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
      <MenuItem>Settings</MenuItem>
    </IconMenu>
  </div>
);

const NotLogged = props => (
  <div className='appBarIcons'>
    <Link to={`/signin`}>
      <FlatButton label='Sign in' />
    </Link>
    <Link to={`/`}>
      <FlatButton label='Sign up' />
    </Link>
  </div>
);

const Header = props => {
  const { currentUser } = props;
  return (
    <AppBar
      title={config.appName}
      iconElementRight={currentUser ? <Logged /> : <NotLogged {...props}/>}
    />
  );
}

export default Header;
