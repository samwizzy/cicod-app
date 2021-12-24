import axios from "axios";

const baseUrl = "https://api.github.com/";

axios.defaults.baseURL = baseUrl;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.headers.common["Authorization"] = process.env.REACT_APP_TOKEN;
