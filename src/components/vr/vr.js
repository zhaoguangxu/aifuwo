var tpl_vr = require('./vr.tpl')
require('./vr.less')



function carousel(){
	var banner_bg = document.getElementById('carousel')
	var banner_li = banner_bg.getElementsByTagName('li')
	var carousel_page = document.getElementById('carousel_page')
	var page_li = carousel_page.getElementsByTagName('li')

	var bg_index = 0
	var zIndex = 1
	clearInterval(timer)

	function move(){
		page_li[bg_index].style.background = '#fff'
		bg_index++
		zIndex++
		if (bg_index == 3) { bg_index = 0}
		banner_li[bg_index].style.zIndex = zIndex
		carousel_page.style.zIndex = zIndex
		page_li[bg_index].style.background = '#33b371'
	}

	var timer = setInterval(move,2000)

	banner_bg.onmouseover = function (){
		clearInterval(timer)
	}

	banner_bg.onmouseout = function (){
		timer = setInterval(move,2000)
	}

	for(let i=0;i<page_li.length;i++){
		page_li[i].onclick = function (){
			page_li[bg_index].style.background = '#fff'
			bg_index = i
			zIndex++
			banner_li[bg_index].style.zIndex = zIndex
			carousel_page.style.zIndex = zIndex
			page_li[bg_index].style.background = '#33b371'
		}

	}
}



function vr() {
	return {
		name:'vr',
		tpl:tpl_vr,
		carousel:carousel
	}
}

exports.vr = vr