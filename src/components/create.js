import { useState } from "react";
function Create() {

    const [title, setTitle] = useState(''); //imported useState from react
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault(); //prevent it from being called multiple times

        console.log("Title: "+title +
        " Cover: "+cover+
        " Author: "+author);
    }
    return (
        <div>
            <h2>Hello from Create Component</h2>
            {/* //adding a form to our app */}
            <form> 
                <div className="form-group"> 
                    <label>Edit Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Book Cover: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Book Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit"
                    value="Add Book">

                    </input>
                </div>
            </form>
        </div>

    );
}

export default Create; //Export Create