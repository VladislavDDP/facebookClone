const Post = (props) => {
    return (
        <div>
            <img src="https://windows10free.ru/uploads/posts/2017-04/1493287748_1487679899_icon-user-640x640.png" width="40" alt="" />
            {props.author ? <p>{props.author}</p> : <p>unknown</p> }
            <p>{props.text}</p> 
        </div>
    )
}

export default Post
