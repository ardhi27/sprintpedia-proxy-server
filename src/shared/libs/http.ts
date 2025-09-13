import axios from "axios";
import GLOBALS from "@/shared/ consts/global-config";

/**
 * Base configuration for API request fetching.
 * @example http.get('/user')
 */

const http = axios.create({
  baseURL: GLOBALS.API_BASE_URL,
  withCredentials: true,
});

export default http;
