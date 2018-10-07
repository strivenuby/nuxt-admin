import Vuex from 'vuex'
import app from './modules/app'
import errorLog from './modules/errorLog'
import permission from './modules/permission'
import tagsView from './modules/tagsView'
import user from './modules/user'
import getters from './getters'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      app,
      errorLog,
      permission,
      tagsView,
      user
    },
    getters
  })
}

export default createStore
