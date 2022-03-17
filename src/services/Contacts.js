import api from 'config/api';

const ContactService = {
  list: (params) => {
    const defaultParams = {
      _page: 1,
      _limit: 15
    };

    return api.get('/contacts', {
      params: { ...defaultParams, ...params }
    });
  },
  get: (id) => api.get(`/contacts/${id}`),
  create: (data) => api.post('/contacts', data),
  edit: (id, data) => {
    const requestData = {
      ...data,
      _method: 'PUT'
    };

    return api.put(`/contacts/${id}`, requestData);
  },
  delete: (id) => api.delete(`/contacts/${id}`)
};

export default ContactService;
