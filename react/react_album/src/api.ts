import axios from "axios";

const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
    /*
    https://jsonplaceholder.typicode.com/albums/1
    https://jsonplaceholder.typicode.com/albums/1/photos
    https://jsonplaceholder.typicode.com/photos/1
    */
});

export const api = {
    getAllAlbums: async () => {
        let response = await http.get('/albums');
        return response.data;
    },

    getAlbumById: async (id:string) => {
        let response = await http.get(`/albums/${id}`)
        return response.data;
    },

    getPhotosFromAlbum: async (id: string) => {
        let response = await http.get(`/photos/${id}/photos`)
        return response.data;
    },

    getPhoto: async (id: string) => {
        let response = await http.get(`/photos/${id}`)
        return response.data;
    }

}