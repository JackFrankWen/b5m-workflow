<!-- level3 start -->
<g text-anchor="end" style="cursor: default; -webkit-user-select: none; -webkit-font-smoothing: antialiased; font-family: Roboto; font-size: 14px;">
	 <% for(let i=0,x=130,y=41; i<data.json.length; i++) {  %>
	  
		<text x="<%= x %>" y="<%= y %>"  fill="#5e97f6" ><%= data.json[i].name %></text>
	   <% y= y+42; %> 

	<% } %>
</g>
<!-- level3 end -->