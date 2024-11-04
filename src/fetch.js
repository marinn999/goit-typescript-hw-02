import axios from "axios";

export default async function fetch(searchWord, page) {
  const BASE_URL = "https://api.unsplash.com/search/photos";

  const params = {
    client_id: "xyPXcAoDlWhNhHV0wNfED2PHBKxu6ygzgXzOpoRm1yU",
    query: searchWord,
    page,
    per_page: 15,
  };
  const headers = {
    "Accept-Version": "v1",
  };

  const dataFromAPI = await axios.get(BASE_URL, { params, headers });
  return dataFromAPI.data;
}
