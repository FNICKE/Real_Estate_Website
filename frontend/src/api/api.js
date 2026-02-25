import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
});

export const contentAPI = {
  // Hero
  getHero: () => API.get('/hero'),
  updateHero: (data) => API.put('/hero', data),

  // About Project
  getAboutProject: () => API.get('/about-project'),
  updateAboutProject: (data) => API.put('/about-project', data),

  // Amenities (full CRUD)
  getAmenities: () => API.get('/amenities'),
  createAmenity: (data) => API.post('/amenities', data),
  updateAmenity: (id, data) => API.put(`/amenities/${id}`, data),
  deleteAmenity: (id) => API.delete(`/amenities/${id}`),

  // FAQs (full CRUD)
  getFaqs: () => API.get('/faqs'),
  createFaq: (data) => API.post('/faqs', data),
  updateFaq: (id, data) => API.put(`/faqs/${id}`, data),
  deleteFaq: (id) => API.delete(`/faqs/${id}`),

  // Construction Updates (full CRUD)
  getConstructionUpdates: () => API.get('/construction-updates'),
  createConstructionUpdate: (data) => API.post('/construction-updates', data),
  updateConstructionUpdate: (id, data) => API.put(`/construction-updates/${id}`, data),
  deleteConstructionUpdate: (id) => API.delete(`/construction-updates/${id}`),

  // Developer
  getDeveloper: () => API.get('/developer'),
  updateDeveloper: (data) => API.put('/developer', data),
};

export const adminAPI = {
  login: (credentials) => API.post('/admin/login', credentials),
};