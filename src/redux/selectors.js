export const getFilterContacts = (state) => {
  return state.contacts.items.filter((el) =>
    el.name.toLowerCase().includes(state.contacts.filter.toLowerCase())
  );
};
