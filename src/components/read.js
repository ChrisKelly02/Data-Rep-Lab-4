import { useEffect, useState } from "react";
import axios from "axios"; //npm install axios
import Books from "./books";

function Read(){
    const[data, setData] = useState([]);

    useEffect(
        ()=>{
            //servers goes and gets the url and sends back a response
            axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920')
            .then(
                (response)=>{
                    setData(response.data.books)  //response.data will give back body of code and .books will pull out the array( what we want)
                }
            )
            .catch(
                (error)=>{
                    console.log(error);
                }
            )

        }, []
    );
        

    return(
        <div>
            <h2>Hello from Read Component</h2>
            <Books myBooks={data}></Books> 
        </div>
    );
}

export default Read; //export read