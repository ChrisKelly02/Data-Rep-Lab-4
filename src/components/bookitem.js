import  Card  from "react-bootstrap/Card"; //import Card from bootstrap

function BookItem(props){

    return (
         <div> 
            {/* //Card Creation */}
            <Card> 
                <Card.Header>{props.myBook.title}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
            <img src={props.myBook.thumbnailUrl}></img>
            <footer>
                {props.myBook.authors[0]}
            </footer>
        </blockquote>
      </Card.Body>
            </Card>
           {/* <h3>{props.myBook.title}</h3>
           <img src={props.myBook.thumbnailUrl}></img>
           <p>{props.myBook.authors[0]}</p> */}
        </div>
    );
}
export default BookItem;

//To comment highlight line then control k and control c