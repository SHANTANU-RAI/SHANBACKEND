require('dotenv').config()

const express = require('express')

const app = express()

const port = 4000


const githubdata = {
    "login": "SHANTANU-RAI",
    "id": 145670486,
    "node_id": "U_kgDOCK7BVg",
    "avatar_url": "https://avatars.githubusercontent.com/u/145670486?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/SHANTANU-RAI",
    "html_url": "https://github.com/SHANTANU-RAI",
    "followers_url": "https://api.github.com/users/SHANTANU-RAI/followers",
    "following_url": "https://api.github.com/users/SHANTANU-RAI/following{/other_user}",
    "gists_url": "https://api.github.com/users/SHANTANU-RAI/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/SHANTANU-RAI/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/SHANTANU-RAI/subscriptions",
    "organizations_url": "https://api.github.com/users/SHANTANU-RAI/orgs",
    "repos_url": "https://api.github.com/users/SHANTANU-RAI/repos",
    "events_url": "https://api.github.com/users/SHANTANU-RAI/events{/privacy}",
    "received_events_url": "https://api.github.com/users/SHANTANU-RAI/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 12,
    "public_gists": 0,
    "followers": 1,
    "following": 2,
    "created_at": "2023-09-21T11:00:32Z",
    "updated_at": "2024-12-18T07:42:36Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req , res) => {
    res.send('shan.com')
})

app.get('/login', (req,res) => {
    res.send('<h1> heloo pls login </h1>')
})

app.get('/youtube' , (req, res) => {
    res.send("<h1> shantanu rai </h1>")
})

app.get('/github' , (req, res) => {
    res.json(githubdata)
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})