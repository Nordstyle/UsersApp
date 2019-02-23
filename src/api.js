const getJSON = (url) => fetch(url).then(r => r.json()).catch(e => ({ error: e.code, message: e.message }));

export const getStackoverflowHotPosts = () => getJSON('https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow&tab=hot');