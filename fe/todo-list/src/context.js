import React, {Component} from 'react';
import axios from 'axios';
import * as moment from "moment";

const Context = React.createContext();


const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_TODOS_ON_DATE':
            return { ...state, todos: action.payload };

        case 'CHANGE_TODO_STATUS':
            return { ...state, todos: state.todos.map(value => {
                    if(value._id === action.payload) {
                        value.done = !value.done;
                    }
                })};

        case 'REMOVE_TODO':
            return {...state, todos: state.todos.filter(value => value._id !== action.payload)};

        case 'ADD_TODO':
            return { ...state, todos: [...state.todos, action.payload]};

        default:
            return state;
    }
};

export class Provider extends Component {
    constructor(){
        super();

        this.state = {
            todos: [],
            curChosenDay: new moment().format('YYYY-MM-DD'),
            dispatch: action => this.setState(state => reducer(state, action))
        };
    }

    async componentDidMount() {
        const res = await axios.get(`http://localhost:3001/todo/findallbydate?date=${this.state.curChosenDay}`);

        this.setState({
            todos: res.data
        })
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
