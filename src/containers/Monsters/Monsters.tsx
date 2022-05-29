import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Text from '../../components/Text/Text';
import Spinner from '../../UI/Spinner/Spinner';
import Persons from '../../components/Persons/Persons';
import axios from '../../axios';

class Monsters extends Component {
    viewRef: React.RefObject<HTMLInputElement>;

    constructor(props: any) {
        super(props);
        this.viewRef = React.createRef();
    }

    shouldComponentUpdate(nextProps: any, nextState: any) {
        if (nextProps.searchValue !== this.state.searchValue) {
            return true;
        }
        return false;
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

    state = {
        persons: [],
        isVisible: false,
        isLoading: true,
        searchValue: '',
        searchPerson: [],
    };

    buttonHandler = () => {
        if (this.viewRef && this.viewRef.current) {
            this.viewRef.current.scrollIntoView({
                behavior: "smooth"
            });
        }
    };

    render() {
        const spinner = <Spinner />
        let monserData = <Persons persons={this.state.persons} />
        if (this.state.searchPerson.length > 0 && this.state.searchValue) {
            monserData = <Persons persons={this.state.searchPerson} />
        }
        if (this.state.searchPerson.length === 0 && this.state.searchValue) {
            monserData = <h1>No Match Found</h1>
        }
        return (<Aux>
            <Text ref={this.viewRef}>Monsters Rolodex</Text>
            <Input type="text" placeholder="Search Monster" value={this.state.searchValue} changed={this.inputChangedHandler} />
            <div style={{ 'minHeight': '50vh' }}>
                {this.state.isLoading ? spinner : monserData}
            </div>
            <Button clicked={this.buttonHandler}>Scroll To Top</Button>
        </Aux>
        );
    }
}

export default Monsters;