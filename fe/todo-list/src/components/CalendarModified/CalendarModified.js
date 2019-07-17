import React, {Component} from 'react';
import Calendar from 'react-calendar';
import axios from "axios";
import moment from "moment";

class CalendarModified extends Component {
    constructor(props) {
        super(props);

        this.state ={
            date: new Date()
        }
    }

    onDateChange = async (date) => {
        this.setState(date);

        let newDate = new moment(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`).format('YYYY-MM-DD');

        try {
            const res = await axios.get(`http://localhost:3001/todo/findallbydate?date=${newDate}`);

            this.props.dispatch({type: 'CHANGE_TODOS_ON_DATE', payload: res.data});
        }
        catch (e) {
            console.log("error")
        }
    };

    render() {
        return (
            <React.Fragment>
                <Calendar
                    onChange={this.onDateChange}
                    value={this.state.date}/>
            </React.Fragment>
        )
    }
}

export default CalendarModified;
