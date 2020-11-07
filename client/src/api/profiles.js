export const newProfile = profileData => {
  const postProfile = {
    method: "POST",
    body: JSON.stringify(profileData),
    headers: {
      "content-type": "application/json"
    }
  };
  return fetch("/api/profile", postProfile).then(res => res.ok);
};
