import api from 'config/api';

const ContactService = {
  list: (params) => {
    const defaultParams = {
      sort_by: 'created_at',
      sort_order: 'desc',
      page: 1,
      page_limit: 15
    };

    return api.get('/contacts', {
      params: { ...defaultParams, ...params }
    });
  }
};

export default ContactService;
