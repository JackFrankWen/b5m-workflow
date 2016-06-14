<!-- level6 start-->
<g>
 <% for(var i=0,x1=148,y1=15,segment = (data.width-165)/data.timeGap/10; i<data.json.length; i++) {  %>
	 <% if(segment*data.json[i].latency-15>0){
	 	//当长方形长度不为固定长度，
	 	x1 = data.json[i].axisTime*segment+segment*data.json[i].latency + x1;
	 	if(x1+255>data.width){
	 		x1 = data.json[i].axisTime*segment - 109;
	 	}
	 } else{ 
	 	//当长方形长度为固定长度 20
	 	x1 = x1 + data.json[i].axisTime*segment +15+5;
	 	if(x1+255>data.width){
	 		x1 = data.json[i].axisTime*segment - 235;
	 	}
	 } %>
	 <g id = "msg<%= i %>"  class="msg">
	 	<rect x="<%= x1 %>" y="<%= y1 %>" width="254" height="215" rx="2" ry="2" fill="white" stroke="#c1c1c1" stroke-width="1.1" filter="url(#rablfilter0)">
	 	</rect>

	 	<text x="<%= x1+15 %>" y="<%= y1+21 %>"  fill="#424242" dx="0px">rootId: </text>
	 	<text x="<%= x1+239 %>" y="<%= y1+21 %>"  fill="#424242" text-anchor="end"><%= data.json[i].rootId %></text>

	 	<text x="<%= x1+15 %>" y="<%= y1+21+31 %>"  fill="#757575" dx="0px">父节点:</text>
	 	<text x="<%= x1+239 %>" y="<%= y1+21+31 %>"  fill="#757575" text-anchor="end"><%= data.json[i].pName %></text>

	 	<text x="<%= x1+15 %>" y="<%= y1+21+31*2 %>"  fill="#757575" >当前节点id:</text>
	 	<text x="<%= x1+239 %>" y="<%= y1+21+31*2 %>"  fill="#757575" text-anchor="end"><%= data.json[i].spanId %></text>

	 	<text x="<%= x1+15 %>" y="<%= y1+21+31*3 %>"  fill="#757575" >sync:</text>
	 	<text x="<%= x1+239 %>" y="<%= y1+21+31*3 %>"  fill="#757575" text-anchor="end"><%= data.json[i].sync %></text>

	 	<text x="<%= x1+15 %>" y="<%= y1+21+31*4 %>"  fill="#757575" >时间轴坐标:</text>
	 	<text x="<%= x1+239 %>" y="<%= y1+21+31*4 %>"  fill="#757575" text-anchor="end"><%= data.json[i].axisTime %><%= data.unit %></text>

	 	<text x="<%= x1+15 %>" y="<%= y1+21+31*5 %>"  fill="#757575" >latency:</text>
	 	<text x="<%= x1+239 %>" y="<%= y1+21+31*5 %>"  fill="#757575" text-anchor="end"><%= data.json[i].latency %>ms</text>

	 	<text x="<%= x1+15 %>" y="<%= y1+21+31*6 %>"  fill="#757575" >起止:</text>
	 	<text x="<%= x1+239 %>" y="<%= y1+21+31*6 %>"  fill="#db4437" text-anchor="end"><%= data.json[i].time %></text>
	 </g>
	 <% x1=148; %>
	 <% if(i>1)
	 	y1 = y1+42; 
	 %>
 <% } %>
</g>
<!-- level6 end -->
