var tpl_banner = require('./banner.tpl')
require('./banner.less')


function  banner(){
    return {
        name: 'banner',
        tpl:tpl_banner
    }
}

exports.banner = banner