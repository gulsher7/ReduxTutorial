import { DELETE_POSTS, POSTS } from "../../config/urls"
import { apiDelete, apiGet } from "../../utils/utils"


export function getPosts() {
    return apiGet(POSTS)
}

export function deletePost(id) {
    return apiDelete(DELETE_POSTS + `${id}`)
}