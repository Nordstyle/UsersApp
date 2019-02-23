const getJSON = (url) => fetch(url).then(r => r.json());

export const getUsers = () => getJSON('https://randomuser.me/api/')