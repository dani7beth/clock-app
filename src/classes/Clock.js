import React from 'react';
import { Button, Header } from 'semantic-ui-react';

export default class Clock extends React.Component{

    state = {date: new Date()};
    
    
    componentDidMount(){
        console.log('component did mount');
        this.ticker = setInterval(()=>{this.tick();},1000)
    }

    componentWillUnmount(){
        console.log("component will unmount");
        clearInterval(this.ticker);
    }

    tick = () =>{
        this.setState({date: new Date()})
    }

    render (){
        const {showClock, date} = this.state;
        console.log("render called");
        return(
            <>
                <Header as="h3">Clock</Header>
                <p>{date.toLocaleTimeString()}</p>
            </>
        )
    }
}