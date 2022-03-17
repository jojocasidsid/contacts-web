const URLHelpers = {
  contacts: '/contacts',
  addContacts: '/contacts/add',
  viewContacts: '/contacts/:id',
  editContacts: '/contacts/edit/:id'
};

export const contactsHelper = () => {
  const baseURL = URLHelpers.contacts;

  return {
    addContacts: () => '/contacts/add',
    viewContacts: (id) => `${baseURL}/${id}`,
    editContacts: (id) => `${baseURL}/edit/${id}`
  };
};

export default URLHelpers;
