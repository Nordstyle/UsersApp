export const normalizeStackoverflowData = data => 
  data.items.map(item => ({
    userId: item.owner.user_id,
    userAvatar: item.owner.profile_image,
    userProfile: item.owner.link,
    userName: item.owner.display_name,
    title: item.title,
    link: item.link
  }));