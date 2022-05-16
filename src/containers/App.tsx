import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxillary';
import AuthContext from '../context/auth-context';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';

class App extends Component {
  viewRef: React.RefObject<HTMLInputElement>;

  constructor(props: any) {
    super(props);
    this.viewRef = React.createRef();
  }

  state = {
    persons: [
      { id: '1', name: 'Ram', age: '38', email: 'Ram@test.com' },
      { id: '2', name: 'Lakshman', age: '24', email: 'Lakshman@test.com' },
      { id: '3', name: 'Sham', age: '90', email: 'Sham@test.com' },
      { id: '4', name: 'Gita', age: '29', email: 'Gita@test.com' },
      { id: '5', name: 'Mita', age: '38', email: 'Mita@test.com' },
      { id: '6', name: 'Nita', age: '24', email: 'Nita@test.com' },
      { id: '7', name: 'Fita', age: '90', email: 'Fita@test.com' },
      { id: '8', name: 'Hita', age: '29', email: 'Hita@test.com' },
      { id: '9', name: 'Test', age: '90', email: 'Test@test.com' },
      { id: '10', name: 'Neetu', age: '29', email: 'Neetu@test.com' },
    ],
    isVisible: false,
    authenticated: false,
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

  loginHandler = () => this.setState({ authenticated: true });

  buttonHandler = () => {
    if (this.viewRef && this.viewRef.current) {
      this.viewRef.current.scrollIntoView({
        behavior: "smooth"
      });

    }
  };

  shouldComponentUpdate(nextProps: any, nextState: any) {
    if(nextProps.searchValue !== this.state.searchValue) {
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
    this.setState({ searchValue: str, searchPerson: updatedPersons});
  }

  updatingViewArray() {}

  render() {
    let monserData = <Persons persons={this.state.persons} />
    if (this.state.searchPerson.length > 0 && this.state.searchValue) {
      monserData = <Persons persons={this.state.searchPerson} />
    }
    if (this.state.searchPerson.length === 0 && this.state.searchValue) {
      monserData = <h1>No Match Found</h1>
    }

    return (
      <Aux>
        <AuthContext.Provider value={{ authenticated: this.state.authenticated, login: this.loginHandler }}>
          <div ref={this.viewRef}>
            <Input type="text" placeholder="Search Monster" value={this.state.searchValue} changed={this.inputChangedHandler} />
            {monserData}
          </div>
          <Button clicked={this.buttonHandler}>Scroll To Top</Button>
        </AuthContext.Provider>
      </Aux>
    );
  }

  static getDerivedStateFromProps(props: any, state: any) {
    // console.log(props, state);
    return state;
  }

  componentDidMount() {
    console.log('Did Mount');
  }
}

export default withClass(App, classes.App);
