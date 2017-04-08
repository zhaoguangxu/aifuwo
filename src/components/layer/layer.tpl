<div class="layer">
	1234567890
	<img src="${ require('../../assets/video.png') }">
    <div> this is <%= name %> layer </div>
    <% for (var i = 0; i < arr.length; i++) { %>
	 <%= arr[i] %>
	<% } %>
</div>