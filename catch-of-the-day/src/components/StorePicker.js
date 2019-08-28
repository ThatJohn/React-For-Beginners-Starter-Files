import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
    constructor(){
        super();
        this.goToStore = this.goToStore.bind(this);
    }

    myInput = React.createRef();

    goToStore = (event) => {
        event.preventDefault();
        const storeName = this.myInput.current.value;
        this.props.history.push(`/store/${storeName}`);
    }

    render(){
        return (
            <form onSubmit={this.goToStore} className="store-selector">
                <h2>Please select a store</h2>
                <input ref={this.myInput} type="text" required placeholder="Store name" defaultValue={getFunName()} />
                <button type="submit">Visit store →</button>
            </form>
        )
    }
}

export default StorePicker;