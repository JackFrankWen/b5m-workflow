import div from "../tpl/div.tpl";
import g1 from "../tpl/g1.tpl";
import g2 from "../tpl/g2.tpl";
import g3 from "../tpl/g3.tpl";
import g4 from "../tpl/g4.tpl";
import g5 from "../tpl/g5.tpl";
import g6 from "../tpl/g6.tpl";
import g7 from "../tpl/g7.tpl";
/*
 *timestap: 0 ~ 100ms gap:5 unit:ms
 *timestap: 0 ~ 500ms
 *timestap: 0 ~ 1s
 *timestap: 0 ~ 5s
 *timestap: 0 ~ 10s
 *
 *
 */
var  data =  {
	qty:7,
	width:1200,
	height:900,
	timeGap:5,
	unit:'ms',
	json:[
		{rootId:"123",pId:"",spanId:"0",sync:1,name:"OrderServer",timestamp:1464768523000,latency:10,startTime:10,fill:'#5e97f6',position:1,pPosition:0,},
		{rootId:"123",pId:"",spanId:"1",sync:0,name:"PayServer",timestamp:1464768523002,latency:8,startTime:13,fill:'#db4437',position:2,pPosition:0,},
		{rootId:"123",pId:"",spanId:"2",sync:1,name:"CrmServer",timestamp:1464768523009,latency:5,startTime:19,fill:'#2a56c6',position:3,pPosition:0,},
		{rootId:"123",pId:"1",spanId:"10",sync:0,name:"PushServer",timestamp:1464768523003,latency:5,startTime:13,fill:'#f2a600',position:4,pPosition:1,},
		{rootId:"123",pId:"10",spanId:"100",sync:1,name:"GoodsServer",timestamp:1464768523003,latency:6,startTime:13,fill:'#ab47bc',position:5,pPosition:4,},
		{rootId:"123",pId:"1",spanId:"11",sync:0,name:"UcenterServer",timestamp:1464768523005,latency:6,startTime:15,fill:'#b36100',position:6,pPosition:2,},
		{rootId:"123",pId:"1",spanId:"11",sync:1,name:"UcenterServer",timestamp:1464768523005,latency:1,startTime:15,fill:'#6a1b9a',position:6,pPosition:2,},
	]
};
export var fn = {
 	/*
 	 * create basic wrap
 	 * 
 	 * @id div's id
 	 */
 	create_wrap:function (id) { 
 		//combine g1~g4 together
		let combine = g1(data)+g2(data)+g3(data)+g4(data)+g5(data)+g6(data)+g7(data);
 		$('#'+id).append(div({width:data.width,height:data.height,tpl:combine}));
 	},
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
	},
	path_normal:function (id) {
		let evt = document.getElementById(id);
		evt.setAttribute("stroke","green");
	},
	circle_red:function (id) {
		let evt = document.getElementById(id);
		evt.setAttribute("stroke","red");
		evt.setAttribute("fill","red");
	},
	circle_black:function (id) {
		let evt = document.getElementById(id);
		evt.setAttribute("stroke","black");
		evt.setAttribute("fill","black");
	},

}
