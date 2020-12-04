import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ywk45IqTv0yEU_bVnAnvumEApgMfT2j7l-tqhQlUh3I",
  },
});
