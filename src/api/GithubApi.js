import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.github.com",
});

const getGithubUsers = (login) => {
  return axiosClient.get(`/search/users?q=${login}`);
};

const getGithubUser = (login) => {
  return axiosClient.get(`/users/${login}`);
};

export { getGithubUsers, getGithubUser };
