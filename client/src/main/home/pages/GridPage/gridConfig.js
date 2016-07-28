export const settings = {
  fields: [
    {header: 'birthdate', path: 'birthdate', transform: function(date) { return date; }},
    {header: 'firstname', path: 'firstname'},
    {header: 'lastname', path: 'lastname'}
  ],
  baseApiUrl: 'http://localhost:9502/items',
  size: 10,
  basePath: '_embedded.contacts',
  searchableFields: [
    {header: 'firstname'}
  ]
};
