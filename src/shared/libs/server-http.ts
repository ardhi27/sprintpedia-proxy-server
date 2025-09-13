import axios from "axios";

/**
 * Base configuration for API request fetching.
 * @example serverHttp.get('/user')
 */

const serverHttp = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
});

export default serverHttp;
