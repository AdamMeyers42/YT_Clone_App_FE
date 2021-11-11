import axios from "axios";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
      part: "snippet",
      maxResults: 5,
      key: 'KEY',
    },
  });

  const KEY = "AIzaSyA-LUQsfnOiTUIUp5VWYkSLECC3OJ8Oazg";

