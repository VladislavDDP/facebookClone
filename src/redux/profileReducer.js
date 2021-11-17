const ADD_POST = 'ADD_POST'
const LIKE_POST = 'LIKE_POST'


export const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {id: 3, text: action.text}
            state.posts.unshift(newPost)
            return state
        
        case LIKE_POST:
            state.posts.map(post => {
                if (post.id === action.id) {
                    return {
                        ...post,
                        likes: post.likes + 1
                    }
                }
                else return post
            })
            return state
        
        default:
            return state
    }
}
