import React, { Component } from 'react';
import AppNav from './Drawer/AppNav.js';
import './App.css';
import * as ReactDOM from "react-dom";

const Sidebar = ({children}) => {
  var sidebarStyle = {
    position: 'absolute',
    width: '230px',
    height: '100%',
    background: '#2A3F54',
    zIndex: 9999,
    display: 'flex'
  };

  return (
    <div className="sidebar col-md-3" style={sidebarStyle}>
      {children}
    </div>
  )
}

const PageView = ({page}) => {
  var viewStyles = {
    marginLeft: '230px',
    padding: '10px 20px 0'
  }
  return (
    <Title text="Hello World" />
  )
}

const MenuItem = ({title, icon}) => {
  var menuItemStyle = {
    display: 'block',
    padding: '10px',
    color: '#fdfdfd',
    margin: '0 -15px',
    borderBottom: '1px solid rgb(35, 50, 66)'
  };

  var iconStyle = {
    marginRight: '10px'
  }

  return (
    <a href="#" style={menuItemStyle}>
      <i className={'fa fa-fw fa-' + icon} style={iconStyle}></i>
      {title}
    </a>
  )
}

const Menu = ({pages}) => {
  var navStyle = {
    display: 'block',
    width: '100%'
  };
  return (
    <nav style={navStyle} >
      {pages.map((page) => {
        return <MenuItem title={page.name} icon={page.icon} />
      })}
    </nav>
  )
}

const Title = ({text}) => {
  return (
    <div className="text-center page-header">
      {text}
    </div>
  )
};


class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pages: [
        {
          "id": "challengesNav",
          "name": "Challenges",
          "icon": "file",
          "children": []
        },
        {
          "id": "usersNav",
          "name": "Users",
          "icon": "home",
          "children": []
        }
      ]
    };
    this.apiUrl = 'http://57d7e44b553f1b1100113a26.mockapi.io/api/v1';
  }

  render() {
    return <AppNav/>
  }
}

// ReactDOM.render(<Drawer />, document.getElementById('root'));


export default Dashboard;

