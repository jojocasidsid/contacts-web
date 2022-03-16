const URLHelpers = {
  contacts: '/contacts',
  addContacts: '/contacts/add',
  viewContacts: '/contacts/:id',
  editContacts: '/contacts/edit/:id'
};

export const contactsHelper = () => {
  const baseURL = URLHelpers.contacts;

  return {
    viewContacts: (id) => `${baseURL}/${id}`,
    editContacts: (id) => `${baseURL}/eidt/${id}`
  };
};

export default URLHelpers;
