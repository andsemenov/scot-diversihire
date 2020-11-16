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

export const getProfile = public_profile_id => {
  const getProfile = {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  };
  return fetch("/api/profiles/{public_profile_id}", getProfile).then(
    res => res.ok
  );
};
