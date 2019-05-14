export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cda2c59fdb46553f2df0441',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4c8skq5q',
                  apiId: 'af4f6dcd-c1af-4ccc-a44c-51fe300a3dc7'
                },
                {
                  buildHookId: '5cda2c59855b508ec834a5c1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-66z1ed71',
                  apiId: '50a25fdd-edbc-4a92-92e7-7eb85dbf0b57'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/charlsefrancis/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-66z1ed71.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
