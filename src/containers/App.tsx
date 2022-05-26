import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxillary';
import ColorContext from '../context/color-context';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import Text from '../components/Text/Text';
import Link from '../components/Link/Link';
import axios from '../axios';
import Spinner from '../UI/Spinner/Spinner';

class App extends Component {
  viewRef: React.RefObject<HTMLInputElement>;

  constructor(props: any) {
    super(props);
    this.viewRef = React.createRef();
  }

  state = {
    persons: [],
    isVisible: false,
    color: {
      background: 'linear-gradient(to right, #33ccff 0%, #ff99cc 100%)'
    },
    isLoading: true,
    searchValue: '',
    searchPerson: [],
  };

  // deletePersonhandler = (personIndex: any) => {
  //   // const allPersons = this.state.persons.slice();
  //   const allPersons = [...this.state.persons];
  //   allPersons.splice(personIndex, 1);
  //   this.setState({ persons: allPersons });
  // };

  // togglePersonHandler = () => {
  //   const data = this.state.isVisible;
  //   this.setState({ isVisible: !data });
  // };

  // nameChangedHandler = (event: any, id: any) => {
  //   const personIndex = this.state.persons.findIndex(person => person.id === id);
  //   const personDetail = { ...this.state.persons[personIndex] };
  //   personDetail.name = event.target.value;
  //   const persons = [...this.state.persons];
  //   persons[personIndex] = personDetail;

  //   this.setState({
  //     persons: persons
  //   });
  // };

  changeColorHandler = () => {
    const firstColor = Math.floor(Math.random() * 16777215).toString(16);
    const secondColor = Math.floor(Math.random() * 16777215).toString(16);
    const color = {
      background: `linear-gradient(to right, #${firstColor} 0%, #${secondColor} 100%)`,
    }
    this.setState({ color: color });
  };

  buttonHandler = () => {
    if (this.viewRef && this.viewRef.current) {
      this.viewRef.current.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  shouldComponentUpdate(nextProps: any, nextState: any) {
    if (nextProps.searchValue !== this.state.searchValue) {
      return true;
    }
    return false;
  }

  inputChangedHandler = (event: any) => {
    const str = event.target.value.trim();
    let updatedPersons: Array<any> = [];
    if (str.length > 0) {
      const searchStr = event.target.value.toLowerCase();
      updatedPersons = this.state.persons.filter((person: any) => {
        return person.name.toLowerCase().includes(searchStr);
      });
    }
    this.setState({ searchValue: str, searchPerson: updatedPersons });
  }

  updatingViewArray() { }

  render() {
    const spinner = <Spinner />
    let monserData = <Persons persons={this.state.persons} />
    if (this.state.searchPerson.length > 0 && this.state.searchValue) {
      monserData = <Persons persons={this.state.searchPerson} />
    }
    if (this.state.searchPerson.length === 0 && this.state.searchValue) {
      monserData = <h1>No Match Found</h1>
    }

    return (
      <Aux>
        <div style={this.state.color}>
          <ColorContext.Provider value={{ color: this.state.color, changeColor: this.changeColorHandler }}>
            <Link>Theme Change</Link>
          </ColorContext.Provider>
          <Text ref={this.viewRef}>Monsters Rolodex</Text>
          <Input type="text" placeholder="Search Monster" value={this.state.searchValue} changed={this.inputChangedHandler} />
          <div style={{'minHeight': '50vh'}}>
            {this.state.isLoading ? spinner : monserData}
          </div>
          <Button clicked={this.buttonHandler}>Scroll To Top</Button>
        </div>
      </Aux>
    );
  }

  static getDerivedStateFromProps(props: any, state: any) {
    // console.log(props, state);
    return state;
  }

  componentDidMount() {
    axios.get('persons')
      .then(response => {
        if (response?.data) {
          setTimeout(() => {
            this.setState({ persons: response.data, isLoading: false });
          }, 2000);
        }
      })
      .catch(err => {
        this.setState({ isLoading: false });
      });
  }
}
App.contextType = ColorContext;
export default withClass(App, classes.App);
