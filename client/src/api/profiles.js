export const newProfile = (profileData, token) => {
  const postProfile = {
    method: "POST",
    body: JSON.stringify(profileData),
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + token
    }
  };
  return fetch("/api/profile", postProfile).then(res => res.ok);
};
