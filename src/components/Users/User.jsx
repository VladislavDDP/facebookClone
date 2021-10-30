const User = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.img} alt="" />
            <p>{props.status}</p>
            <p>{props.work}</p>
        </div>
    )
}

export default User