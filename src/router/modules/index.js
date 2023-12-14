const files = import.meta.glob('./*.js', { eager: true })

const modules = []

Object.keys(files).forEach(key => {
  modules.push(...files[key].default)
})

const routes = [...modules]

export default routes
