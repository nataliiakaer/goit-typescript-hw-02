import axios from "axios";

const ACCESS_KEY_API = "E1xxE1oKTwgg_W6JmdrRoPbDgn8gMbq3_X0T4N2uKC0";
axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImagesWithSearchValue = async <T>(
  search: string,
  loadMore: number
): Promise<T> => {
  const { data } = await axios.get<T>(
    `/search/photos/?client_id=${ACCESS_KEY_API}&per_page=12&query=${search}&page=${loadMore}`
  );
  return data;
};
