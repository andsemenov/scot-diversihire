export const newProfile = (profileData, token) => {
  const postProfile = {
    method: "POST",
    body: JSON.stringify(profileData),
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + token
    }
  };
  return fetch("/api/profiles", postProfile).then(res => res.ok);
};

export const getProfiles = () => {
  return fetch("/api/profiles").then(res => res.json());
};
