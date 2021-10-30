import Post from './Post'
import style from './Profile.module.css'

const Profile = (props) => {
    const profilePosts = props.profilePage.posts.map(post => <Post text={post.text} />)

    return (
        <div>
            <div>
                <img src="https://windows10free.ru/uploads/posts/2017-04/1493287748_1487679899_icon-user-640x640.png" width="200" alt="" />
            </div>
            <div>
                <input type="text" />
                <button>POST</button>
            </div>
            <div>
                {profilePosts}
            </div>
        </div>
    )
}

export default Profile