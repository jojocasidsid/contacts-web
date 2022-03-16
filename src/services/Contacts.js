import api from 'config/api';

const ContactService = {
  list: (params) => {
    const defaultParams = {
      _page: 1,
      _limit: 15
    };
    console.log(params);

    return api.get('/contacts', {
      params: { ...defaultParams, ...params }
    });
  }
};

export default ContactService;
