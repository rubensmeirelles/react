import  axios from 'axios';
const BASE = 'https://jsonplaceholder.typicode.com';

//requisição com instância do axios
const http = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
});

export const api = {
    getAllPosts: async( ) => {
        //requisição com axios
        //let response = await axios.get(`${BASE}/posts`);
        let response = await http.get('/posts');
        return response.data;

        /*
        //requisição normal
        let response = await fetch(`${BASE}/posts`);
        let json = await response.json();
        return json;
        */
    },
    addNewPost: async (title: string, body: string, userId: number) => {
        //requisição com axios
        //let response = await axios.post(`${BASE}/posts`, {
        let response = await http.post('/posts', {
            title, body, userId
        });
        return response.data;
        /*
        //requisição normal
        let response = await fetch(`${BASE}/posts`, {
         method: 'POST',
         body: JSON.stringify({ title, body, userId }),
         headers: { 'Content-Type': 'application/json' }
       });
       let json = await response.json();
       return json;
       */
    }
}