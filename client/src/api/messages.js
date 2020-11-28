export const sendMessage = message => {
  const postMessage = {
    method: "POST",
    body: JSON.stringify(message),
    headers: {
      "content-type": "application/json"
    }
  };
  return fetch("/api/messages", postMessage).then(res => res.ok);
};

export const getMessages = () => {
  return fetch("/api/messages").then(res => res.json());
};
/*
export const getMessages = (profile_public_id) => {
  return fetch(`/api/messages/${profile_public_id}`).then((res) => res.ok);
};
*/
