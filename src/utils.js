export const normalizeStackoverflowData = data => 
  data.items.map(item => ({
    type: 'stackoverflow',
    userId: item.owner.user_id,
    userAvatar: item.owner.profile_image,
    userProfile: item.owner.link,
    userName: item.owner.display_name,
    title: item.title,
    link: item.link
  }));

export const normalizeGithubData = data => 
  data.map(item => ({
    type: 'github',
    userId: item.id,
    userAvatar: item.owner.avatar_url,
    userProfile: item.owner.html_url,
    userName: item.owner.login,
    title: item.full_name,
    link: item.html_url
  }));