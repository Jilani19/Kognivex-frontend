import axios from 'axios';

const API_URL = 'http://localhost:5000/api/jobs';

const jobService = {
  fetchAllJobs: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  fetchJobById: async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },

  createJob: async (jobData) => {
    const response = await axios.post(API_URL, jobData);
    return response.data;
  },

  updateJob: async (id, jobData) => {
    const response = await axios.put(`${API_URL}/${id}`, jobData);
    return response.data;
  },

  deleteJob: async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  }
};

export default jobService;
