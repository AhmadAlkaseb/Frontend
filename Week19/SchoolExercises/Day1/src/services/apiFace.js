import { BASE_URL_DEV } from "../utils/globalVariables.js";
const login = async (username, password) => {
  try {
    const result = await fetch(`${BASE_URL_DEV}/auth/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    });
    const data = await result.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

const apiFace = () => {
  return React.createElement('div', null);
};

export default apiFace;

login("Ahmad", "1234");