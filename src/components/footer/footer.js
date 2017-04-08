var tpl_footer = require('./footer.tpl')
require('./footer.less')

function move(target){
	clearInterval(timer)
	var timer = setInterval(function(){
		var current =parseInt(getStyle())
		var speed = (target - current) / 7
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)

		if(current == target){
			clearInterval(timer)
			return
		}

		if(document.documentElement.scrollTop) { document.documentElement.scrollTop = current + speed + 'px' }
		if(document.body.scrollTop){document.body.scrollTop = current + speed + 'px'}
		if(window.pageYOffset){ window.pageYOffset = current + speed + 'px' }	
	},30)
}

function getStyle(){
	var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
	return scrollTop
}


function top(){
	var to_top = document.getElementById('to_top')

	to_top.onclick = function(){
		move(0)
	}
}

function footer() {
	return {
		name: 'footer',
		tpl: tpl_footer,
		top:top
	}
}

exports.footer = footer