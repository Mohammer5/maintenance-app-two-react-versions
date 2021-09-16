import { ViewDataElementList } from '../components'
import { modernizedRoutes } from '../shared'

const routesToComponentsMapping = {
  '/list/dataElementSection/dataElement': ViewDataElementList,
}

// Make sure that "src/shared/__refactoring/modernizedRoutes.js" is the
// source of truth
modernizedRoutes.forEach(({ path }) => {
  if (!routesToComponentsMapping[path]) {
    throw new Error('You need to implement the legacy route for', path)
  }
})

export { routesToComponentsMapping }
