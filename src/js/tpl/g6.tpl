<!-- level6 start-->
<g>
 <% for(let i=0,x1=148,y1=15,segment = (data.width-165)/data.timeGap/10; i<data.json.length; i++) {  %>

	 <% if(segment*data.json[i].latency-15>0){
	 	x1 = data.json[i].startTime*segment+segment*data.json[i].latency + x1;
	 } else{ 
	 	x1 = x1 + data.json[i].startTime*segment +15+5;
	 } %>
	 <g id = "msg<%= i %>" visibility="hidden" style="cursor: default; -webkit-user-select: none; -webkit-font-smoothing: antialiased; font-family: Roboto; font-size: 14px; font-weight: 500;">
	 	<rect x="<%= x1 %>" y="<%= y1 %>" width="254" height="215" rx="2" ry="2" fill="white" stroke="#c1c1c1" stroke-width="1.1" filter="url(#rablfilter0)">
	 	</rect>

	 	<text x="<%= x1+15 %>" y="<%= y1+21 %>"  fill="#424242" dx="0px">rootId: </text>
	 	<text x="<%= x1+239 %>" y="<%= y1+21 %>"  fill="#424242" text-anchor="end"><%= data.json[i].rootId %></text>

	 	<text x="<%= x1+15 %>" y="<%= y1+21+31 %>"  fill="#757575" dx="0px">pId:</text>
	 	<text x="<%= x1+239 %>" y="<%= y1+21+31 %>"  fill="#757575" text-anchor="end"><%= data.json[i].pId %></text>

	 	<text x="<%= x1+15 %>" y="<%= y1+21+31*2 %>"  fill="#0f9d58" >spanId:</text>
	 	<text x="<%= x1+239 %>" y="<%= y1+21+31*2 %>"  fill="#0f9d58" text-anchor="end"><%= data.json[i].spanId %></text>

	 	<text x="<%= x1+15 %>" y="<%= y1+21+31*3 %>"  fill="#757575" >sync:</text>
	 	<text x="<%= x1+239 %>" y="<%= y1+21+31*3 %>"  fill="#db4437" text-anchor="end"><%= data.json[i].sync %></text>

	 	<text x="<%= x1+15 %>" y="<%= y1+21+31*4 %>"  fill="#757575" >timestamp:</text>
	 	<text x="<%= x1+239 %>" y="<%= y1+21+31*4 %>"  fill="#db4437" text-anchor="end"><%= data.json[i].timestamp %></text>

	 	<text x="<%= x1+15 %>" y="<%= y1+21+31*5 %>"  fill="#757575" >latency:</text>
	 	<text x="<%= x1+239 %>" y="<%= y1+21+31*5 %>"  fill="#db4437" text-anchor="end"><%= data.json[i].latency %></text>

	 	<text x="<%= x1+15 %>" y="<%= y1+21+31*6 %>"  fill="#757575" >startTime:</text>
	 	<text x="<%= x1+239 %>" y="<%= y1+21+31*6 %>"  fill="#db4437" text-anchor="end"><%= data.json[i].startTime %></text>
	 </g>
	 <% x1=148; %>
	 <% if(i>1)
	 	y1 = y1+42; 
	 %>
 <% } %>
</g>
<!-- level6 end -->
