var tpl_header = require('./header.tpl')
require('./header.less')

function show(){
	var show_learn = document.getElementById('show_learn')
    var learn_list = document.getElementById('learn_list')
	var show_index = 0
    show_learn.onclick = function (){
        if (show_index%2 == 0) {
            learn_list.style.display = 'block'
        }else{
            learn_list.style.display = 'none'
        }
        show_index++  
    }
}

function  header(){
    return {
        name: 'header',
        tpl:tpl_header,
        show:show
    }
}


exports.header = header