<div class="title">
	<div class="info">
		<h3>家居商城  一站选购</h3>
		<div class="more">
			<a href="">
				查看更多
				<i></i>
			</a>
		</div>
	</div>
</div>

<ul class="select">
	<% for (var i = 0; i < shop.length; i++) { %>
	<li>
		<!-- <img src= <%=shop[i].url%>> -->
		<img src="${ require('../../assets/p1.jpg') }">
		<a class="select_title" href=""><%= shop[i].title%></a>
		<a class="money" href="">￥<%= shop[i].money%></a>
	</li>
	<% } %>
</ul>