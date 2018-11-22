class PhotoService {
    constructor(){}
    getAllPhotos() {
        return fetch(`https://jsonplaceholder.typicode.com/photos`);
    }
    getPhoto(id) {
        return fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
    }
    getAlbums() {
        return fetch(`https://jsonplaceholder.typicode.com/albums`);
    }
    getAlbumsByUser(userId) {
        return fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
    }
    getAlbumById(id) {
        return fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
    }
    getAlbumPhotos(albumId) {
        return fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
    }
}

export const photoService = new PhotoService();