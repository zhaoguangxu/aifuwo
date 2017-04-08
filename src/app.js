// import './css/common.css'
// import Layer from './components/layer/layer.js'

// var Layer = require('./components/layer/layer.js')
require('./css/common.css')
var Header = require('./components/header/header.js')
var Banner = require('./components/banner/banner.js')
var Home = require('./components/home/home.js')
var Vr = require('./components/vr/vr.js')
var Shop = require('./components/shop/shop.js')
var Footer = require('./components/footer/footer.js')

const  App = function () {
    // 导航
    var dom = document.getElementById("header")
    var header = new Header.header()

    dom.innerHTML = header.tpl()
    header.show()
    

    // banner
    var dom_banner = document.getElementById("banner")
    var banner = new Banner.banner()

    dom_banner.innerHTML = banner.tpl()

    // 装修流程 透明规范
    var dom_home = document.getElementById("home")
    var home = new Home.home()

    dom_home.innerHTML = home.tpl()

    // VR全景体验未来家
    var dom_vr = document.getElementById("vr")
    var vr = new Vr.vr()
    dom_vr.innerHTML = vr.tpl()
    vr.carousel()
    // 家居商城 一站选购  不信你，
    var dom_shop = document.getElementById('shop')
    var shop = new Shop.shop()

    var shop_info = [
    	{title:"金德莱瓷砖 客厅地砖防滑全抛釉 地板砖800x800",money:3328.00,url:"${ require(../../assets/p1.jpg)}"},
    	{title:"金德莱瓷砖 客厅地砖防滑全抛釉 地板砖800x800",money:328.00,url:"${ require(../../assets/p1.jpg)}"},
    	{title:"金德莱瓷砖 客厅地砖防滑全抛釉 地板砖800x800",money:1328.00,url:"${ require(../../assets/p1.jpg)}"},
    	{title:"金德莱瓷砖 客厅地砖防滑全抛釉 地板砖800x800",money:528.00,url:"${ require(../../assets/p1.jpg)}"},
    	{title:"金德莱瓷砖 客厅地砖防滑全抛釉 地板砖800x800",money:1228.00,url:"${ require(../../assets/p1.jpg)}"},
    	{title:"金德莱瓷砖 客厅地砖防滑全抛釉 地板砖800x800",money:468.00,url:"${ require(../../assets/p1.jpg)}"},
    	{title:"金德莱瓷砖 客厅地砖防滑全抛釉 地板砖800x800",money:660.00,url:"${ require(../../assets/p1.jpg)}"},
    	{title:"金德莱瓷砖 客厅地砖防滑全抛釉 地板砖800x800",money:628.00,url:"${ require(../../assets/p1.jpg)}"},
    	{title:"金德莱瓷砖 客厅地砖防滑全抛釉 地板砖800x800",money:3728.00,url:"${ require(../../assets/p1.jpg)}"},
    	{title:"金德莱瓷砖 客厅地砖防滑全抛釉 地板砖800x800",money:2128.00,url:"${ require(../../assets/p1.jpg)}"},
    	]
    dom_shop.innerHTML = shop.tpl({
    	name:'shop',
    	shop:shop_info
    })

    var dom_footer = document.getElementById('footer')
    var footer = new Footer.footer()

    dom_footer.innerHTML = footer.tpl()
    footer.top()
    
}

new App()


