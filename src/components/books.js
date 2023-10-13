import BookItem from "./bookitem"; //import BookItem


function Books(props){

    return props.myBooks.map(

        (book)=>{
            return <BookItem myBook={book} key ={book.isbn}></BookItem> //creating a book item component, passing a variable called mybook
        }
    );
    
}

export default Books;