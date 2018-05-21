const API = 'http://localhost:5000/api/v1/stories?shortcontent=true'

export function getStories() {
    return fetch(API).then(res => res.json())
    .catch(err => {
        console.log(err)
    })
}