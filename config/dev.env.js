'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"',
  // BASE_API: '"https://easy-mock.com/mock/5a72c1ecc76727050336e0bc/mdm/"',
  //  BASE_API: '"http://192.168.10.32:6001/"',//仓管
   BASE_API: '""',//本地模拟
})
