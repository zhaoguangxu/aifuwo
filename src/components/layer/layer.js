// import tpl from './layer.tpl'
// import './layer.less'

var tpl = require('./layer.tpl')
require('./layer.less')

function  layer(){
    return {
        name: 'layer',
        tpl:tpl
    }
}

exports.layer = layer