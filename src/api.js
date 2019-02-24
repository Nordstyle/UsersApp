import { normalizeStackoverflowData } from './utils'

const getJSON = (url) => fetch(url)
  .then(resp => {
    if (resp.status !== 200) throw new Error(resp.statusText)
    return resp;
  })
  .then(r => r.json())

export const getStackoverflowHotPosts = () => getJSON('https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow&tab=hot')
  .then(normalizeStackoverflowData);

export const getGithubRepos = () => getJSON('https://api.github.com/repositories');