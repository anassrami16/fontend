import axios from "axios";

const API_URL = "http://localhost:8080/api/projets";

class ProjectService {
  get() {
    return axios.get(API_URL);
  }

  editStatuttOneProject(projectId, statut) {
    return axios.post(API_URL + `/${projectId}?statut=${statut}`);
  }
}
export default new ProjectService();
