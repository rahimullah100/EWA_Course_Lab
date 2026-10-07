import axios from "axios";

const API_URL = "http://localhost:8083/api/v1/courses";

export function getCourses() {
    return axios.get(API_URL);
}