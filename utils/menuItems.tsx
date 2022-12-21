export const menuItems = [
  {
    name: 'Blog',
    target: '/blog',
    subMenu: [
      {
        name: 'Bazy danych',
        subMenuItems: [
          { name: 'SQL', target: '/sql' },
          { name: 'MongoDB', target: '/mongodb' },
        ],
      },
      {
        name: 'DataScience',
        subMenuItems: [
          { name: 'Pandas', target: '/pandas' },
          { name: 'NumPy', target: '/numpy' },
          { name: 'Ggplot', target: '/ggplot' },
        ],
      },
    ],
  },
  { name: 'Ćwiczenia', target: '/exercises' },
  { name: 'Słowniczek', target: '/glossary' },
  { name: 'O mnie', target: '/about' },
];

// "subcategories": [
//   {
//     "id": 3,
//     "name": "MongoDB",
//     "icon": "icon-mongodb",
//     "slug": "mongodb",
//     "posts": 0,
//     "subcount": 0
//   },
//   {
//     "id": 2,
//     "name": "SQL",
//     "icon": "icon-microsoftsqlserver-color",
//     "slug": "sql",
//     "posts": 0,
//     "description": "<h2>\r\n  REalcujne naa\r\n</h2>",
//     "subcount": 0
//   }
// ],
