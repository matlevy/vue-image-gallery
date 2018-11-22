class PhotoService {
    constructor(){}
    getAllPhotos() {
        return fetch(`https://jsonplaceholder.typicode.com/photos`)
            .then(response => response.json());
    }
    getPhoto(id) {
        return fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then(response => response.json());
    }
    getAlbums() {
        return fetch(`https://jsonplaceholder.typicode.com/albums`)
            .then(response => response.json());
    }
    getAlbumsByUser(userId) {
        return fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(response => response.json())
    }
    getAlbumById(id) {
        return fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
            .then(response => response.json())
    }
    getAlbumPhotos(albumId) {
        return fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(response => response.json())
    }
}

export const photoService = new PhotoService();