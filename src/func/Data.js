import Axios from 'axios';
import {useState, useEffect} from 'react';
import { Button, Dimmer, Header, Loader } from 'semantic-ui-react';

const Data = (props) =>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [count, setCount] = useState(0);

    //componentDidMount and ComponenentDidUpdate
    //componenet did unmount

    //if i have [] as second argument 
    //this will only get called on 
    //componentDidMount
    useEffect(()=>{
        Axios.get('https://reqres.in/api/users?delay=1')
        .then((res)=>{
            setLoading(false);
            setData(res.data.data);
        })
        .catch((err)=>{
            setLoading(true);
            console.log(err);
        });

        return () =>{
            console.log("cleanup");
        }
    }, [])

    const renderLoader = () =>{
        return(
            <Dimmer active>
                <Loader />
            </Dimmer>
        )
    }

    const renderData = () =>{
        return data.map(d=>{
            return <h1 key={d.id}>{d.email}</h1>
        })
    }

    return (
        <div>
            <Header>Data Demo</Header>
            {loading && renderLoader()}
            {renderData()}
        </div>
    )
}
export default Data;