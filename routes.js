const nextRoutes = require('next-routes')

const routes = nextRoutes()

routes.add('page', '/page/:page')
routes.add('wallpaper', '/wallpaper/:name')
routes.add({ name: 'categoryPaging', pattern: '/category/:category/page/:page', page: 'category' })
routes.add({ name: 'categoryNoPaging', pattern: '/category/:category', page: 'category' })
routes.add({ name: 'searchPaging', pattern: '/search/:search/page/:page', page: 'search' })
routes.add({ name: 'searchNoPaging', pattern: '/search/:search', page: 'search' })
routes.add({ name: 'modelPaging', pattern: '/model/:model/page/:page', page: 'model' })
routes.add({ name: 'modelNoPaging', pattern: '/model/:model', page: 'model' })
routes.add({ name: 'category', pattern: '/category', page: 'page' })
routes.add({ name: 'search', pattern: '/search', page: 'page' })
routes.add({ name: 'model', pattern: '/model', page: 'page' })
routes.add({ name: 'top-liked', pattern: '/top-liked', page: 'page' })
routes.add({ name: 'top-viewed', pattern: '/top-viewed', page: 'page' })
routes.add({ name: 'top-downloaded', pattern: '/top-downloaded', page: 'page' })
routes.add({ name: 'wallpaperWithoutName', pattern: '/wallpaper', page: 'page' })

module.exports = routes
