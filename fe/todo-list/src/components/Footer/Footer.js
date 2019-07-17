import React, {Component} from 'react';
import "./footer.scss";

export default class Footer extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <footer className="text-center bg-light pt-4">
                <span>
                    TodoMaster
                </span>
            </footer>
        );
    }
}
