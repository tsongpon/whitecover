const API = 'http://localhost:5000/api/v1/stories'

export function getStories() {
    return fetch(API + "?shortcontent=true").then(res => res.json())
        .catch(err => {
            console.log(err)
        })
}

export function getStory(id) {
    return fetch(API + "/" + id).then(res => res.json())
        .catch(err => {
            console.log(err)
        })
}