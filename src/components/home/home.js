var tpl_home = require('./home.tpl')
require('./home.less')


function  home(){
    return {
        name: 'home',
        tpl:tpl_home
    }
}

exports.home = home