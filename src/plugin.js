
import VueLazyload from 'vue-lazyload'

const plugins = (Vue) => {
  Vue.use(VueLazyload, {
    loading: require('common/images/default.png')
  })
}

export default plugins