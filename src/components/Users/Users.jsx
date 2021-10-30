import User from "./User"

const Users = (props) => {

    const users = props.usersPage.users.map(user => <User name={user.name}
                                                status={user.status}
                                                work={user.work}
                                                img={user.image} />)
    return (
        <div>
            {users}
        </div>
    )
}

export default Users