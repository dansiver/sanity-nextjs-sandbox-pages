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
                  buildHookId: '5f3cf017b2ec6a055f7e0b7d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-sandbox-pages-studio',
                  apiId: 'f711d919-e2ce-4cb7-99c2-a6921b9af7b0'
                },
                {
                  buildHookId: '5f3cf0175c24c064f004fbda',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-sandbox-pages',
                  apiId: '86684734-edbb-43d4-a2bc-dabd9fcd1a3d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dansiver/sanity-nextjs-sandbox-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-sandbox-pages.netlify.app', category: 'apps'}
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
