import axios from "axios";
import GLOBALS from "@/shared/ consts/global-config";

/**
 * Base configuration for API request fetching.
 * @example serverHttp.get('/user')
 */

const serverHttp = axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: true,
});

export default serverHttp;
