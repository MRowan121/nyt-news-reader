const API_KEY = process.env.REACT_APP_API_KEY
const url = 'https://api.nytimes.com/svc/topstories/v2'


const getArticles = (category) => {
    return fetch(`${url}/${category}.json?api-key=${API_KEY}`)
    .then(res => {
        if(!res.ok) {
            throw new Error('Something went wrong')
        }
        return res.json()
    })
}

export { getArticles }