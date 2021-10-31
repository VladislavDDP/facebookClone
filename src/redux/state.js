export const state = {
    profilePage: {
        photo: null,
        theme: null,
        status: null,
        currentPostText: null,
        posts: [
            {id: 1, text: 'Hello, how are doing?'},
            {id: 2, text: 'React native? whaaat?'},
            {id: 3, text: 'abracadabra'},
            {id: 4, text: 'there is no time to be lazy'},
            {id: 5, text: 'new post'}
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
}

window.posts = state.profilePage.posts