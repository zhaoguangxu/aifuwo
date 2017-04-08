var tpl_shop = require('./shop.tpl')
require('./shop.less')

function shop() {
	return {
		name:'shop',
		tpl:tpl_shop
	}
}

exports.shop = shop