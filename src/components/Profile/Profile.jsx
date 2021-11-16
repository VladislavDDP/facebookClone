import React from 'react'
import { addPostAC } from '../../redux/actions'
import Post from './Post'

const Profile = (props) => {
    const profilePosts = props.profilePage.posts.map(post => <Post text={post.text} />)
    const post_input = React.createRef()

    const clickMe = () => {
        props.dispatch(addPostAC(post_input.current.value))
        post_input.current.value = ''
    }

    const textChange = (e) => {
        props.profilePage.currentPostText = e.target.value
    }
    
    return (
        <div>
            <div>
                <img src="https://windows10free.ru/uploads/posts/2017-04/1493287748_1487679899_icon-user-640x640.png" width="200" alt="" />
            </div>
            <div>
                <input type="text" ref={post_input} onChange={textChange} />
                <button onClick={clickMe}>POST</button>
            </div>
            <div>
                {profilePosts}
            </div>
        </div>
    )
}

export default Profile