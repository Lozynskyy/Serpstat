export default{
    apiUrl: 'https://jsonplaceholder.typicode.com/',

    requestParams: {
        posts: 'posts',
        comments: 'comments',
        albums: 'albums',
        photos: 'photos',
        todos: 'todos',
        users: 'users'
    },

    getPosts: function(){
        let requestQuery = this.apiUrl + this.requestParams.posts;

        return fetch(requestQuery)
            .then(response => response.json())
    },

    getPost: function(id){
        let requestQuery = this.apiUrl + this.requestParams.posts + '/' + id;

        return fetch(requestQuery)
            .then(response => response.json())
    }
}