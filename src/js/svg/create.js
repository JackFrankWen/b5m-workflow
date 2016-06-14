import div from "../tpl/div.tpl";
import g1 from "../tpl/g1.tpl";
import g2 from "../tpl/g2.tpl";
import g3 from "../tpl/g3.tpl";
import g4 from "../tpl/g4.tpl";
import g5 from "../tpl/g5.tpl";
import g6 from "../tpl/g6.tpl";
import g7 from "../tpl/g7.tpl";
'use strict';

export var fn = {
 	/*
 	 * create basic wrap
 	 * 
 	 * @id div's id
 	 */
 	create_wrap:function (id,data) { 
 		//combine g1~g4 together
		let combine = g1(data)+g2(data)+g3(data)+g4(data)+g5(data)+g6(data)+g7(data);
 		$('#'+id).append(div({width:data.width,height:data.height,tpl:combine}));
 	},
 	/*
 	 * Add hover events to every single rectangle 
 	 * 
 	 * @id div's id
 	 */
 	rectangle_hover:function () {
 		 let rects = document.querySelectorAll('#retangle rect');

 		 for(let i=0;i<rects.length;i++){
 		 	let width = parseInt(rects[i].getAttribute('width')),
 		 		x = parseInt(rects[i].getAttribute('x'));

	 		rects[i].addEventListener("mouseover",(evt) => {
	 			this.visibility_show("msg"+i);
	 			this.rect_pull(rects[i],width,x);
	 			this.fonts_highlight("name"+i);
	 			this.path_highlight("path"+i);
	 			this.circle_red("cilcle"+i);
	 		}, false)

	 		rects[i].addEventListener("mouseout",() => {
	 			this.visibility_hide("msg"+i);
	 			this.rect_push(rects[i],width,x);
	 			this.fonts_normal("name"+i);
	 			this.path_normal("path"+i);
	 			this.circle_black("cilcle"+i);
	 		}, false)
 		 } 
 	},
 	visibility_show:function (id) {
 		let evt = document.getElementById(id);
 		evt.style.visibility = 'visible';
 		evt.style.opacity=1;
 		evt.style.transition= '.4s ease-in-out';
 	},
 	visibility_hide:function (id) {
 		let evt = document.getElementById(id);
		evt.style.visibility = 'hidden';
		evt.style.opacity=0;
 		evt.style.transition= '.4s ease-in-out';
 	},
 	/*
 	 * pull rectangle
 	 * 
 	 * @evt rectangle id
 	 * @width rectangle witdh
 	 * @x rectangle x
 	 */
 	rect_pull:function (evt,width,x) {
		evt.setAttribute("width",width+16);
		evt.setAttribute("x",x-16);
		evt.style.transition= '.4s ease-in-out';
	},
	/*
	 * push rectangle
	 * 
	 * @evt rectangle id
	 * @width rectangle witdh
	 * @x rectangle x
	 */
	rect_push:function (evt,width,x) {
		evt.setAttribute("width",width);
		evt.setAttribute("x",x);
		evt.style.transition= '.4s ease-in-out';
	},
	fonts_highlight:function (id) {
		let evt = document.getElementById(id);
		evt.setAttribute("fill","#F00F00");
		evt.style.fontWeight="bold";
	},
	fonts_normal:function (id) {
		let evt = document.getElementById(id);
		evt.setAttribute("fill","#5e97f6");
		evt.style.fontWeight="500";
	},
	path_highlight:function (id) {
		let evt = document.getElementById(id);
		evt.setAttribute("stroke","#F00F00");
		evt.setAttribute("stroke-width","4");
	},
	path_normal:function (id) {
		let evt = document.getElementById(id);
		evt.setAttribute("stroke","green");
		evt.setAttribute("stroke-width","2");

	},
	circle_red:function (id) {
		let evt = document.getElementById(id);
		evt.setAttribute("stroke","red");
		evt.setAttribute("r","4");
		evt.setAttribute("fill","red");
	},
	circle_black:function (id) {
		let evt = document.getElementById(id);
		evt.setAttribute("r","2");
		evt.setAttribute("stroke","black");
		evt.setAttribute("fill","black");
	},
	/*
	 * Unix Timestamp Converter 
	 * 
	 * @json json
	 * @return obj
	 * example data =  {
	 *		qty:7,
	 *		width:1200,
	 *		height:900,
	 *		timeGap:5,
	 *		unit:'ms',
	 *		startTime:1464768523000,
	 *		json:[
	 *			{rootId:"123",pId:"",spanId:"0",sync:1,name:"OrderServer",timestamp:1464768523000,latency:10,
	 *			axisTime:0,fill:'#5e97f6',position:1,pPosition:0,pName:'none',time:"2016年6月1号 16:08:43 0ms"},
	 *			{rootId:"123",pId:"",spanId:"1",sync:0,name:"PayServer",timestamp:1464768523002,latency:8,
	 *			axisTime:2,fill:'#db4437',position:2,pPosition:0,pName:'none',time:"2016年6月1号 16:08:43 2ms"},
 	 *		]
	 *	};
	 */
	manipulateData:function (json) {
		let timeAxies = this.countTimeAxies(json),
			startTime = this.timestampMin(json);
		let obj = {
			qty:json.length,
			startTime:this.timeConverter(startTime),
			width:1200,
	 		height:900,
	 		timeGap:timeAxies.timeGap,
	 		unit:timeAxies.unit,
	 		json:this.transformJson(json,startTime),
		}
		return obj;
	},
	/*
	 *		json:[
	 *			{rootId:"123",pId:"",spanId:"0",sync:1,name:"OrderServer",timestamp:1464768523000,latency:10,
	 *			axisTime:0,fill:'#5e97f6',position:1,pPosition:0,pName:'none',time:"2016年6月1号 16:08:43 0ms"},
	 *			{rootId:"123",pId:"",spanId:"1",sync:0,name:"PayServer",timestamp:1464768523002,latency:8,
	 *			axisTime:2,fill:'#db4437',position:2,pPosition:0,pName:'none',time:"2016年6月1号 16:08:43 2ms"},
 	 *		]
 	 */		
	transformJson:function (json,startTime) {
		let colors = ['#5e97f6','#f2a600','#0f9d58','#ab47bc',
		'#db4437','#ab47bc','#ee8100','#2a56c6','#a61d4c','#0099c6','#dd4477','#aaaa11','#16d620'];
		 for(let i=0;i<json.length;i++)
		 {
		 	let j = i+1;
		 	json[i].position = i +1;
		 	json[i].time = this.timeConverter(json[i].timestamp);
		 	json[i].axisTime = json[i].timestamp - startTime;
	 		json[i].pPosition = 0;
	 		json[i].pName = 'none';
	 		json[i].fill = this.color(colors);
	 		//获取父节点的名字还有位置
		 	while (j&&json[i].pId){
		 	   j--;
		 	   if (json[i].pId ==json[j].spanId) {

		 	   		json[i].pPosition=json[j].position;
		 	   		json[i].pName=json[j].name;
		 	   		json[i].fill=json[j].fill;
		 	   		j = 0;
		 	   } 
		 	} 
		 	
		 } 
		 return json
	},
	color:function(arr){
		if(!arr) return '#000000'
		let random = this.getRandomIntInclusive(0,arr.length-1),
		color = arr[random];
		arr.splice(random,1);

		return color;
	},
	// Returns a random integer between min (included) and max (included)
	getRandomIntInclusive:function(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	/*
	 *
	 *
	 *timestap: 0 ~ 50ms gap:5 unit:ms
	 *timestap: 50ms ~ 100ms gap:10 unit:ms
	 *timestap: 100ms ~ 300ms gap:30 unit:ms
	 *timestap: 300ms ~ 500ms gap:50 unit:ms
	 *timestap: 500ms ~ 1000s gap:1000 unit:ms
	 *timestap: 1s ~ 10s gap:1 unit:s
	 *timestap: 10s ~ 20s gap:2 unit:s
	 *timestap: 0 ~ 30s gap:3 unit:s
	 *
	 */
	countTimeAxies:function (json) {
		let  minTime = this.timestampMin(json),
			 maxTime = this.timestampMax(json),
			 timeArr = [50,100,300,500,1000,10000,20000,30000],
			 timeGap = [5,10,30,50,100,1000,2000,3000],
			 time,index,unit;
			
		time = maxTime-minTime;
		index = this.binarySearch(time, timeArr, 0, timeArr.length - 1);
		if (index>4) {
			unit = 's';
		} else {
			unit = 'ms';
		}
		return {
			unit:unit,
			timeGap:timeGap[index],
		}

	},
	/*
	 * 二分算法:判断字段在哪个区间内，并返回index
	 *
	 * @find number 要找的数
	 * @arr arr
	 * @low number 
	 * @high number
	 *
	 * example:binarySearch(14,[3,5,7,15,16],0,4)  //return 3
	 * 
	 */
	binarySearch:function (find, arr, low, high) {
		if (low > high) {
	    	let find = low;
	        return find;
		}

	    var mid = Math.floor((high + low) / 2);

	    if (arr[mid] == find) {
	        return mid;
	    }
	    else if(arr[mid] > find) {
	        return this.binarySearch(find, arr, low, mid - 1);
	    } else {
	        return this.binarySearch(find, arr, mid + 1, high);
	    } 
	},
	/*
	 * Get minimum timestamp value of json
	 * 
	 * @arr 
	 * @return number
	 */
	timestampMin:function(arr) {
	  var len = arr.length, min = Infinity;
	  while (len--) {
	    if (Number(arr[len].timestamp) < min) {
	      min = Number(arr[len].timestamp);
	    }
	  }
	  return min
	},
	/*
	 * Get maximum timestamp value of json
	 * 
	 * @arr 
	 * @return number
	 */
	timestampMax:function(arr) {
	  var len = arr.length, max = -Infinity;
	  while (len--) {
	    if (Number(arr[len].timestamp+arr[len].latency) > max) {
	      max = Number(arr[len].timestamp+arr[len].latency);
	    }
	  }
	  return max
	},
	/*
	 * Unix Timestamp Converter 
	 * 
	 * @UNIX_timestamp timestamp (ms)
	 * @return string
	 * example timeConverter(1464768523005)
	 * return "2016年6月1号 16:08:43 5ms"
	 */
	timeConverter:function (UNIX_timestamp) {
		var a = new Date(UNIX_timestamp *1);
		var months = ['1','2','3','4','5','6','7','8','9','10','11','12'];
		var year = a.getFullYear();
		var month = months[a.getMonth()];
		var date = a.getDate();
		var hour = a.getHours();
		var min = a.getMinutes();
		var sec = a.getSeconds();
		var  ms = a.getMilliseconds();

		if(min < 10){
			min = "0"+min.toString();
		}
		if(sec < 10){
			sec = "0"+sec.toString();
		}
		var time = year + '年' + month + '月' + date + '号 ' + hour + ':' + min + ':' + sec + ' ' + ms +'ms';
		return time; 
	}


}

// var  data =  {
// 	qty:7,
// 	width:1200,
// 	height:900,
// 	timeGap:5,
// 	unit:'ms',
// 	startTime:1464768523000,
// 	json:[
// 		{rootId:"123",pId:"",spanId:"0",sync:1,name:"OrderServer",timestamp:1464768523000,latency:10,
// 		axisTime:0,fill:'#5e97f6',position:1,pPosition:0,pName:'none',time:"2016年6月1号 16:08:43 0ms"},
// 		{rootId:"123",pId:"",spanId:"1",sync:0,name:"PayServer",timestamp:1464768523002,latency:8,
// 		axisTime:2,fill:'#db4437',position:2,pPosition:0,pName:'none',time:"2016年6月1号 16:08:43 2ms"},
// 		{rootId:"123",pId:"",spanId:"2",sync:1,name:"CrmServer",timestamp:1464768523009,latency:5,
// 		axisTime:9,fill:'#2a56c6',position:3,pPosition:0,pName:'none',time:"2016年6月1号 16:08:43 9ms"},
// 		{rootId:"123",pId:"1",spanId:"10",sync:0,name:"PushServer",timestamp:1464768523003,latency:5,
// 		axisTime:3,fill:'#f2a600',position:4,pPosition:1,pName:'OrderServer',time:"2016年6月1号 16:08:43 3ms"},
// 		{rootId:"123",pId:"10",spanId:"100",sync:1,name:"GoodsServer",timestamp:1464768523003,latency:6,
// 		axisTime:3,fill:'#ab47bc',position:5,pPosition:4,pName:'PushServer',time:"2016年6月1号 16:08:43 3ms"},
// 		{rootId:"123",pId:"1",spanId:"11",sync:0,name:"UcenterServer",timestamp:1464768523005,latency:6,
// 		axisTime:5,fill:'#b36100',position:6,pPosition:2,pName:'PayServer',time:"2016年6月1号 16:08:43 5ms"},
// 		{rootId:"123",pId:"1",spanId:"11",sync:1,name:"UcenterServer",timestamp:1464768523005,latency:1,
// 		axisTime:5,fill:'#6a1b9a',position:6,pPosition:2,pName:'PayServer',time:"2016年6月1号 16:08:43 5ms"},
// 	]
// };