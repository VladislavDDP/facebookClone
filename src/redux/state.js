import { dialogsReducer } from "./dialogsReducer"
import { profileReducer } from "./profileReducer"

export const store = {
    _state: {
        profilePage: {
            photo: null,
            theme: null,
            status: null,
            currentPostText: '',
            posts: [
                {id: 1, text: 'Hello, how are doing?', likes: 0, author: 'Vlad'},
                {id: 2, text: 'React native? whaaat?', likes: 0, author: 'Nikita'}
            ]
        },
        usersPage: {
            users: [
                {id: 1, name: 'Viktor', status: 'happy', work: 'React developer', image: 'https://miro.medium.com/max/684/1*wHDylzqUD_9HmbDUOiDg1Q.png'},
                {id: 2, name: 'Nikita', status: 'happy', work: 'React developer' , image: 'https://miro.medium.com/max/684/1*wHDylzqUD_9HmbDUOiDg1Q.png'},
                {id: 3, name: 'Vlad', status: 'happy', work: 'React developer', image: 'https://miro.medium.com/max/684/1*wHDylzqUD_9HmbDUOiDg1Q.png'},
                {id: 4, name: 'Peter', status: 'happy', work: 'React developer', image: 'https://miro.medium.com/max/684/1*wHDylzqUD_9HmbDUOiDg1Q.png'},
            ]
        },
        dialogsPage: {
            users: [
                {id: 1, name: 'Vasya', messages: [
                                            {id: 1, text: 'hello', sender: 0},
                                            {id: 2, text: 'hi', sender: 1},
                                        ]
                },
                {id: 2, name: 'Gleb', messages: [
                                            {id: 1, text: 'hello', sender: 0},
                                            {id: 2, text: 'hi', sender: 1},
                                        ]
                }
            ]
        }
    },

    _rerender: function() {},
    
    getState() {
        return this._state
    },

    subscribe(observer) {
        this._rerender = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._rerender(this._state)
    }
}