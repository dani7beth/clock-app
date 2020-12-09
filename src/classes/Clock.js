import React from 'react';
import { Button, Header } from 'semantic-ui-react';

export default class Clock extends React.Component{

    state = {date: new Date(), counter: 0};
    
    
    componentDidMount(){
        console.log('component did mount');
        this.ticker = setInterval(()=>{this.tick();},1000)
    }

    componentWillUnmount(){
        console.log("component will unmount");
        clearInterval(this.ticker);
    }

    componentDidUpdate(prevProps, prevState){
        const {counter} = this.state;

        if(counter >= 10) {
            this.setState({counter: counter + 1});
        }
        console.log("component did update called");
        
        console.log(prevProps);
        console.log(prevState);
    }

    tick = () =>{
        this.setState({date: new Date()})
    }

    render (){
        const {date, counter} = this.state;
        console.log("render called");
        return(
            <>
                <Header as="h3">Clock</Header>
                <p>{date.toLocaleTimeString()}</p>
                <p>{counter}</p>
            </>
        )
    }
}