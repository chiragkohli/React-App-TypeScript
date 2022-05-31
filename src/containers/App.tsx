import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import classes from './App.module.css';
import withClass from '../hoc/withClass';
import ColorContext from '../context/color-context';
import Nav from '../components/Nav/Nav'
import Monsters from '../containers/Monsters/Monsters'
import Theme from '../containers/Theme/Theme';

class App extends Component {

  state = {
    color: {
      background: 'linear-gradient(to top right, #33ccff 0%, #ff99cc 100%)',
    },
  };

  changeColorHandler = () => {
    const firstColor = Math.floor(Math.random() * 16777215).toString(16);
    const secondColor = Math.floor(Math.random() * 16777215).toString(16);
    const color = {
      background: `linear-gradient(to top right, #${firstColor} 0%, #${secondColor} 100%)`,
    }
    this.setState({ color: color });
  };

  render() {
    return (
      <div style={this.state.color}>
        <ColorContext.Provider value={{ color: this.state.color, changeColor: this.changeColorHandler }}>
          <Nav />
          <Routes>
            <Route path='/' element={<Monsters />}></Route>
            <Route path='/theme' element={<Theme />}></Route>
            <Route path='*' element={< Navigate replace to='/' />} />
          </Routes>
        </ColorContext.Provider>
      </div>
    );
  }

  static getDerivedStateFromProps(props: any, state: any) {
    // console.log(props, state);
    return state;
  }

}
App.contextType = ColorContext;
export default withClass(App, classes.App);
