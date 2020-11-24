export const signApi = (email, password) => {
  const opts = {
    method: "POST",
    body: JSON.stringify({ email: email, password: password }),
    headers: {
      "content-type": "application/json"
    }
  };
  return fetch("/auth/login", opts)
    .then(res => res.json())
    .then(data => {
      return data;
    });
};

export const signUp = ({ email, password, role }) => {
  const opts = {
    method: "POST",
    body: JSON.stringify({ email, password, role }),
    headers: {
      "content-type": "application/json"
    }
  };
  return fetch("/auth/register", opts)
    .then(res => res.json())
    .then(data => {
      return data;
    });
};
