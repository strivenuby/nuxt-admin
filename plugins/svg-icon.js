import Vue from 'vue'
import SvgIcon from '~/components/SvgIcon'

// const files = require.context('~/assets/svg', false, /\.svg$/)
// files.keys().forEach(files)
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('~/assets/svg', false, /\.svg$/)
requireAll(req)

Vue.component('svg-icon', SvgIcon)
