<template>

<div class="w">
				<div class="main">
					<div class="logo">
						<span>赛道编辑</span>
					</div>
					<div class="module">
						<div class="icon1">
							<canvas ref="iconCanvas" width='200' height='550' text-align='center'>
								浏览器不支持canvas元素
							</canvas>
						</div>
		
					</div>
		
					<div class="draw">
						<div class="icon2">
							<canvas ref="drawCanvas" width='745' height='600'>
								浏览器不支持canvas元素
							</canvas>
						</div>
					</div>
					<div class="edit fr">
						<ul>
							<li>
								<!-- 复制未实现   -->
								<button id="removeElements" type="button" class="btn btn-outline-light"><i
										class="bi bi-trash"></i>&nbsp;删除元素</button>
								<button id="trackSave" type="button" class="btn btn-outline-light" style="margin-left: 10px;"><i
										class="bi bi-save"></i>&nbsp;保存</button>
		
							</li>
							<li>
								<button ref="recall" type="button" class="btn btn-outline-light"><i
										class="bi bi-arrow-90deg-left"></i>&nbsp;上一步</button>
								<button ref="cancelRecall" type="button" class="btn btn-outline-light"
									style="margin-left: 10px;">下一步&nbsp;<i class="bi bi-arrow-90deg-right"></i></button>
							</li>
							<li>
								<div class="col-auto my-2" id='dragDiv'>
									<div class="custom-control custom-checkbox mr-sm-5" style="padding-left: 0.5rem;">
										<input type="checkbox" class="custom-control-input" ref="editCheckbox">
										<label class="custom-control-label" for="editCheckbox">
											<p class="text-light" style="margin-bottom: 0;">拖动图形变换模式</p>
										</label>
									</div>
								</div>
							</li>
							<li>
								<span class="text-light" style="margin-bottom: 0;">元素大小（px）：</span><input type="number" name=""
									ref="elementSize" value="" style="font-size: 1rem; width: 100px;border-radius:2px;border: 0;" />
							</li>
							<li>
								<span class="text-light" style="margin-bottom: 0;">角度变换（°）：</span><input type="number" name=""
									ref="angleText" value=""
									style="font-size: 1rem; width: 100px;border-radius:2px;border: 0;" />
							</li>
							<li>
								<span class="text-light" style="margin-bottom: 0;">平移变换：</span>
								<button ref="buttonLeft" type="button" title="左转" class="btn btn-outline-light"><i
										class="bi bi-arrow-left-square"></i></button>
								<button ref="buttonUp" type="button" title="上转" class="btn btn-outline-light"><i
										class="bi bi-arrow-up-square"></i></button>
								<button ref="buttonDown" type="button" title="下转" class="btn btn-outline-light"><i
										class="bi bi-arrow-down-square"></i></button>
								<button ref="buttonRight" type="button" title="右转" class="btn btn-outline-light"><i
										class="bi bi-arrow-right-square"></i></button>
							</li>
							<li>
								<span class="text-light" style="margin-bottom: 0;">输入移动像素值（px）：</span><input type="text" name=""
									class="coordText" style="font-size: 1rem; width: 100px;" value="" ref="coordText" />
							</li>
							<li>
								<span class="text-light" style="margin-bottom: 0;">赛道大小：</span>
								<button ref="zoomIn" type="button" class="btn btn-outline-light"><i
										class="bi bi-zoom-in"></i>&nbsp;放大</button>
								<button ref="zoomOut" type="button" class="btn btn-outline-light" style="margin-left: 10px;">
                                    <i class="bi bi-zoom-out"></i>&nbsp;缩小</button>
							</li>
							<li>
								<div class="input-group xs-3">
									<div class="input-group-prepend1">
										<span class="input-group-text" id="basic-addon1">当前图形处于</span>
									</div>
									<div class="input-group-prepend xs-0.2">
										<input type="number" class="form-control rounded-sm" ref="areaSet" value="1"
											style="font-size: 1rem; width: 80px;">
									</div>
									<div class="input-group-prepend2">
										<span class="input-group-text" id="basic-addon2">点位</span>
									</div>
								</div>
							</li>
							<li>
								<div class="dropdown" id="dropdown-updateTrack-div">
									<button class="btn btn-outline-light dropdown-toggle" type="button" id=""
										data-toggle="dropdown" style="font-size: 1rem; width: 286px;">
										切换赛道
									</button>
									<div class="dropdown-menu" style="font-size: 1rem; width: 286px;" ref="dropdownUpdateTrack">
										<!-- <a class="dropdown-item" href="#">一赛道</a>
										<a class="dropdown-item" href="#">二赛道</a>
										<a class="dropdown-item" href="#">三赛道</a> -->
									</div>
								</div>
							</li>
							<li>
		
								<button ref="removeTrack" type="button" class="btn btn-outline-light"
									style="font-size: 1rem; width: 140px;" disabled="disabled"><i class="bi bi-trash"></i>&nbsp;删除赛道</button>
								<button ref="newTrack" type="button" class="btn btn-outline-light"
									style="font-size: 1rem; width: 140px;"><i class="bi bi-file-earmark-plus"></i>&nbsp;新建赛道</button>
		
							</li>
							<li>
								<a href="#">
									<button ref="setToScreen" type="button" class="btn btn-outline-light"
										style="font-size: 1rem; width: 286px;"><i class="bi bi-save"></i>&nbsp;应用至大屏</button>
								</a>
							</li>
						</ul>
		
					</div>
					<!-- <div class="function">
		
					</div> -->
				</div>
            </div>
</template>

<script lang="ts" setup>
import {ref,onMounted } from "vue"



// 轨道图像
/**
 * @param {Object} centerX 圆心X轴坐标
 * @param {Object} centerY 圆心Y轴坐标
 * @param {Object} radius 半径
 * @param {Object} beginArc 起始角(弧度)
 * @param {Object} endArc 结束角(弧度)
 * @param {Object} clock 时针 False = 顺时针，true = 逆时针
 * @param {Number} angle 角度
 * @param {Object} area 区域
 */
 var Electric_arc = function(this: any, centerX:any, centerY:any, radius:any, beginArc:any, endArc:any, clock:any, angle:any, area:any){
	this.centerX = centerX;
	this.centerY = centerY;
	this.radius = radius;
	this.beginArc = beginArc;
	this.endArc = endArc;
	this.clock = clock;
	this.angle = angle;
	this.area = area;
}

var Line = function(this: any, beginX:any, beginY:any, length:any, angle:any, area:any){
	this.beginX = beginX;
	this.beginY = beginY;
	this.length = length;
	this.angle = angle;
	this.area = area;	
}

//红橙黄绿青蓝紫 用于体现不同区域的划分(1-7)
var areaColor = ["#FF0000","#FF7F00","#FFFF00","#00FF00","#00FFFF","#0000FF","#8B00FF"];

Electric_arc.prototype = {
	
	createPath:function(context:any){
		context.save();
		context.beginPath();
		//canvas坐标系平移,用于搭配坐标系旋转
		context.translate(this.centerX,this.centerY)
		//canvas坐标系旋转
		context.rotate(this.angle*Math.PI/180);
		
		context.arc(0,0,this.radius,this.beginArc,this.endArc,this.clock);
		context.arc(0,0,(this.radius-20),this.endArc,this.beginArc,!this.clock);
		context.closePath();
		context.restore();
	},
	// ？？？？？？？？？？？？？？？？？？？？
	stroke:function(context:any, screenFlag:any){
		context.save();
		// context.lineWidth = "20";
		this.createPath(context);
		context.lineWidth = '1';
		context.stroke();
		console.log(this.area-1);
		
		if(!screenFlag){
		//如果区域没有定义
			if(this.area == undefined){
				context.fillStyle = "rgba(0,0,0,0)";
			}else{
				if(this.area > areaColor.length){
					context.fillStyle = areaColor[this.area % areaColor.length - 1];
					this.area % areaColor.length;
				}else{
					context.fillStyle = areaColor[this.area-1];
				}
			}
		}else{
			context.fillStyle = "rgba(255,255,255,1)";
		}
		context.fill();
		context.restore();
	},
}

Line.prototype = {
	
	createPath:function(context:any){
		context.save();
		context.beginPath();
		context.translate(this.beginX,this.beginY);
		context.rotate(this.angle*Math.PI/180);
		// context.lineWidth = "20";
		context.moveTo(0, 0);
		context.lineTo(0,20);
		context.lineTo(this.length,20);
		context.lineTo(this.length, 0);
		context.closePath();
		// context.stroke();
		context.restore();
	},
	stroke:function(context:any, screenFlag:any){
		context.save();
		// context.lineWidth = "20";
		this.createPath(context);
		context.lineWidth = '1';
		context.stroke();
		console.log(this.area-1);
		if(!screenFlag){
			//如果区域没有定义
			if(this.area == undefined){
				context.fillStyle = "rgba(0,0,0,0)";
			}else{
				if(this.area > areaColor.length){
					context.fillStyle = areaColor[this.area % areaColor.length - 1];
					this.area % areaColor.length;
				}else{
					context.fillStyle = areaColor[this.area-1];
				}
			}
		}else{
			context.fillStyle = "rgba(255,255,255,1)";
		}
		context.fill();
		context.restore();
	}
	
	
}
var body = document.getElementsByTagName("body")[0];
	//右边绘图板
	const drawCanvas = ref(null);
	// var	context = drawCanvas.getContext('2d');
	
	
	
	// var on = document.getElementById("on");
	const on = ref(null);
	//撤回
	const recall = ref(null);
	//撤销撤回
	// var cancelRecall = document.getElementById("cancelRecall");
	const cancelRecall = ref(null);
	const editCheckbox = ref(null)
	const angleText = ref(null)
	const buttonUp = ref(null)
	const buttonLeft = ref(null)
	const coordText = ref(null)
	const buttonRight = ref(null)
	const buttonDown = ref(null)
	const areaSet = ref(null)
	
	
	
	
	//放大
	const zoomIn = ref(null)

	//缩小
	const zoomOut = ref(null)

	//删除赛道
	const removeTrack = ref(null)

	//新建赛道
	const newTrack = ref(null)

	//应用至大屏
	const setToScreen = ref(null)
	
	//元素大小
	const elementSize = ref(null)

	//用于存储在拖拽中被选中的图形元素（鼠标控制）
	var dragging = false;
	//用于存储在拖拽中被选中的图形元素（右侧方向按钮控制）
	var draggingForkeyboard = false;
	//拖拽模式标识位
	var edit:any;

	//左边选择板
	const iconCanvas = ref(null)
	
	//被选中的元素 通常只有一个
	var selectedElement;
	var selectedRect:any;
	var selectedFunction:any;
	var drawingSurfaceImageData:any;

	var imageData = new Array();
	var imgDataNum = 0;

	var draggingOffsetX:any;
	var draggingOffsetY:any;

	var electrics = [];
	var Lines = [];
	var track_graphics:any = [];
	//矩形图标外框坐标
	var ICON_RECTANGLES = [{
		x: 19.5,
		y: 8.5,
		w: 58,
		h: 58
	},
	{
		x: 19.5,
		// y: 118.5,
		y: 91.5,
		w: 58,
		h: 58
	},
	{
		x: 19.5,
		// y: 218.5,
		y: 174.5,
		w: 58,
		h: 58
	},
	{
		x: 19.5,
		// y: 318.5,
		y: 257.5,
		w: 58,
		h: 58
	},
	{
		x: 19.5,
		y: 340.5,
		w: 58,
		h: 58
	},
	{
		x: 19.5,
		y: 423.5,
		w: 58,
		h: 58
	},
	{
		x: 119.5,
		y: 8.5,
		w: 58,
		h: 58
	},
	{
		x: 119.5,
		y: 91.5,
		w: 58,
		h: 58
	},
	{
		x: 119.5,
		y: 174.5,
		w: 58,
		h: 58
	},
	{
		x: 119.5,
		y: 257.5,
		w: 58,
		h: 58
	},
	{
		x: 119.5,
		y: 340.5,
		w: 58,
		h: 58
	}
	];
	onMounted(()=>{
		var	context = drawCanvas.value.getContext('2d');
		var	iconContext = ref(iconCanvas.value.getContext('2d')) ;
		console.log(iconContext);
		// console.log(iconContext);
		drawIcons()
	})
		/**将鼠标坐标转化为canvas内部坐标
	 * @param {Object} x
	 * @param {Object} y
	 */
	 function windowToCanvas(canvas:any, x:any, y:any) {
		var bbox = canvas.getBoundingClientRect();
		return {
			x: x - bbox.left * (canvas.width / bbox.width),
			y: y - bbox.top * (canvas.height / bbox.height)
		};
	}
	//保存和恢复绘图表面
	function saveDrawingSurface(canvas:any, context:any) {
		drawingSurfaceImageData = context.getImageData(0, 0,
			canvas.width,
			canvas.height);
	}
	function saveDrawingSurface1(canvas:any, context:any) {
		imageData[imgDataNum] = context.getImageData(0, 0,
			canvas.width, canvas.height);
		console.log("saveDrawingSurface1:" + imgDataNum);
		imgDataNum++;

	}
	
	function restoreDrawingSurface(context:any) {
		context.putImageData(drawingSurfaceImageData, 0, 0);
	}
	//用于撤回功能
	function restoreDrawingSurface1(context:any) {
		imgDataNum--;
		if (imgDataNum < 0) {
			imgDataNum = 0;
		}
		context.putImageData(imageData[imgDataNum], 0, 0);
		console.log("restoreDrawingSurface1:" + imgDataNum);

		track_graphics.pop();
		console.log(track_graphics);
	}

	function isPointInIconLowerRight(rect:any, x:any, y:any) {
		console.log("X:" + x, ";Y:" + y);

		iconContext.beginPath();
		iconContext.moveTo(rect.x + rect.w, rect.y);
		iconContext.lineTo(rect.x + rect.w, rect.y + rect.h);
		iconContext.lineTo(rect.x, rect.y + rect.h);
		// iconContext.closePath();
		iconContext.strokeStyle = "red";
		iconContext.stroke();
		// iconContext.fill();
		// console.log("3");
		return iconContext.isPointInPath(x, y);
	}

	//重绘绘画板
	function drawTrack_graphics(context:any) {
		// console.log(polygons);
		track_graphics.forEach(function (track_graphic:any) {
			// drawPolygon(polygon);
			track_graphic.stroke(context);

		});
	}


	// drawR100_45();
	function drawR100_45(loc:any, context:any, rect:any) {
		console.log("d100loc:" + loc.x + "Y:" + loc.y);
		if (this.context === context) {
			let electric_arc = new Electric_arc(loc.x, loc.y, 100, Math.PI * 0, Math.PI * 0.25, false, 0);
			electric_arc.stroke(context);
			track_graphics.push(electric_arc);
			console.log(track_graphics);
			// var line = new Line(loc.x,loc.y,loc.x+70,loc.y,0);
			// line.stroke(context);

		} else {
			//左侧图标以及文字绘制
			context.save();
			context.scale(0.79, 0.79);
			let electric_arc = new Electric_arc(rect.x - 39, rect.y + 5, 100, Math.PI * 0, Math.PI * 0.25, false, 0);
			electric_arc.stroke(context)
			context.restore();
			context.save();
			context.font = "15px Arial";
			context.fillText("R100_45", rect.x + 0.5, rect.y + 71.5);
			context.restore();
		}
	}

	function drawR80_45(loc:any, context:any, rect:any) {
		if (this.context === context) {
			let electric_arc = new Electric_arc(loc.x, loc.y, 80, Math.PI * 0, Math.PI * 0.25, false, 0);
			electric_arc.stroke(context);
			track_graphics.push(electric_arc);
			// var line = new Line(loc.x,loc.y,loc.x+70,loc.y,0);
			// line.stroke(context);
			// track_graphics.push(line);
		} else {
			context.save();
			let electric_arc = new Electric_arc(rect.x - 34, rect.y + 1, 80, Math.PI * 0, Math.PI * 0.25, false, 0);
			electric_arc.stroke(context);
			context.restore();
			context.save();
			context.font = "15px Arial";
			context.fillText("R80_45", rect.x + 3.5, rect.y + 71.5);
			context.restore();
		}
	}

	function drawR70_45(loc:any, context:any, rect:any) {
		if (this.context === context) {
			let electric_arc = new Electric_arc(loc.x, loc.y, 70, Math.PI * 0, Math.PI * 0.25, false, 0);
			electric_arc.stroke(context);
			track_graphics.push(electric_arc);

		} else {
			context.save();
			let electric_arc = new Electric_arc(rect.x - 25, rect.y + 5, 70, Math.PI * 0, Math.PI * 0.25, false, 0);
			electric_arc.stroke(context);
			context.restore();
			context.save();
			context.font = "15px Arial";
			context.fillText("R70_45", rect.x + 3.5, rect.y + 71.5);
			context.restore();
		}
	}

	function drawR50_90(loc:any, context:any, rect:any) {
		if (this.context === context) {
			let electric_arc = new Electric_arc(loc.x, loc.y, 50, Math.PI * 0, Math.PI * 0.5, false, 0);
			electric_arc.stroke(context);
			track_graphics.push(electric_arc);

		} else {
			context.save();
			let electric_arc = new Electric_arc(rect.x + 5, rect.y + 4, 50, Math.PI * 0, Math.PI * 0.5, false, 0);
			electric_arc.stroke(context);
			context.restore();
			context.save();
			context.font = "15px Arial";
			context.fillText("R50_90", rect.x + 3.5, rect.y + 71.5);
			context.restore();
		}
	}
	function drawR50_60(loc:any, context:any, rect:any) {
		if (this.context === context) {
			let electric_arc = new Electric_arc(loc.x, loc.y, 50, Math.PI * 0, Math.PI * 1 / 3, false, 0);
			electric_arc.stroke(context);
			track_graphics.push(electric_arc);
		} else {
			context.save();
			let electric_arc = new Electric_arc(rect.x - 3, rect.y + 8, 50, Math.PI * 0, Math.PI * 1 / 3, false, 0);
			electric_arc.stroke(context);
			context.restore();
			context.save();
			context.font = "15px Arial";
			context.fillText("R50_60", rect.x + 3.5, rect.y + 71.5);
			context.restore();
		}
	}
	function drawR50_30(loc:any, context:any, rect:any) {
		if (this.context === context) {
			let electric_arc = new Electric_arc(loc.x, loc.y, 50, Math.PI * 0, Math.PI * 1 / 6, false, 0);
			electric_arc.stroke(context);
			track_graphics.push(electric_arc);
		} else {
			context.save();
			let electric_arc = new Electric_arc(rect.x - 8, rect.y + 17, 50, Math.PI * 0, Math.PI * 1 / 6, false, 0);
			electric_arc.stroke(context);
			context.restore();
			context.save();
			context.font = "15px Arial";
			context.fillText("R50_30", rect.x + 3.5, rect.y + 71.5);
			context.restore();
		}
	}
	function drawL100(loc:any, context:any, rect:any) {
		if (this.context === context) {
			let line = new Line(loc.x, loc.y, 100, 0);
			line.stroke(context);
			track_graphics.push(line);
			// var line = new Line(loc.x,loc.y,loc.x+70,loc.y,0);
			// line.stroke(context);
			// track_graphics.push(line);
		} else {
			context.save();
			let line = new Line(rect.x + 2, rect.y + 20, 54, 0);
			line.stroke(context);
			context.restore();
			context.save();
			context.font = "15px Arial";
			context.fillText("L100", rect.x + 10.5, rect.y + 71.5);
			context.restore();
		}
	}
	function drawL80(loc:any, context:any, rect:any) {
		if (this.context === context) {
			let line = new Line(loc.x, loc.y, 80, 0);
			line.stroke(context);
			track_graphics.push(line);
		} else {
			context.save();
			// context.scale(0.8,0.8);
			let line = new Line(rect.x + 7, rect.y + 20, 45, 0);
			line.stroke(context);
			context.restore();
			context.save();
			context.font = "15px Arial";
			context.fillText("L80", rect.x + 15.5, rect.y + 71.5);
			context.restore();
		}
	}
	function drawL50(loc:any, context:any, rect:any) {
		if (this.context === context) {
			let line = new Line(loc.x, loc.y, 50, 0);
			line.stroke(context);
			track_graphics.push(line);
		} else {
			context.save();
			// context.scale(0.8,0.8);
			let line = new Line(rect.x + 10, rect.y + 20, 38, 0);
			line.stroke(context);
			context.restore();
			context.save();
			context.font = "15px Arial";
			context.fillText("L50", rect.x + 15.5, rect.y + 71.5);
			context.restore();
		}
	}
	function drawL27_5(loc:any, context:any, rect:any) {
		if (this.context === context) {
			let line = new Line(loc.x, loc.y, 27.5, 0);
			line.stroke(context);
			track_graphics.push(line);
		} else {
			context.save();
			// context.scale(0.8,0.8);
			let line = new Line(rect.x + 15, rect.y + 20, 27.5, 0);
			line.stroke(context);
			context.restore();
			context.save();
			context.font = "15px Arial";
			context.fillText("L27_5", rect.x + 8.5, rect.y + 71.5);
			context.restore();
		}
	}
	function drawL20(loc:any, context:any, rect:any) {
		if (this.context === context) {
			let line = new Line(loc.x, loc.y, 20, 0);
			line.stroke(context);
			track_graphics.push(line);
		} else {
			context.save();
			let line = new Line(rect.x + 20, rect.y + 20, 20, 0);
			line.stroke(context);
			context.restore();
			context.save();
			context.font = "15px Arial";
			context.fillText("L20", rect.x + 16.5, rect.y + 71.5);
			context.restore();
		}
	}
	function draw() {
		iconContext.save();

		iconContext.restore();
	}

	/**
	 * 绘制左侧画布图标(边框)
	 */
	function drawIcons() {
		// console.log(iconContext);
		
		iconContext.clearRect(0, 0, iconCanvas.width,iconCanvas.height);

		//遍历数组
		ICON_RECTANGLES.forEach(function (iconRect) {
			iconContext.save();

			iconContext.beginPath();
			iconContext.rect(iconRect.x, iconRect.y, iconRect.w, iconRect.h);

			iconContext.stroke();
			console.log("selectedRect");
			console.log(selectedRect);
			console.log("iconRect");
			console.log(iconRect);

			if (selectedRect === iconRect) {
				// console.log("000000000000000000000000000");
				iconContext.save();
				iconContext.beginPath();
				iconContext.strokeStyle = "#ffaa7f";
				iconContext.rect(selectedRect.x, selectedRect.y, selectedRect.w, selectedRect.h);
				iconContext.stroke();
				iconContext.restore();
			}
			iconContext.restore();

			drawIcon(iconRect);

		});
		// drawR100_45();
		// drawR80_45();										   
	}
	/**绘制图标内的内容
	 * @param {Object} iconRect
	 */
	function drawIcon(iconRect:any) {

		iconContext.save();

		if (iconRect.y === ICON_RECTANGLES[0].y && iconRect.x === ICON_RECTANGLES[0].x)
			drawR100_45(iconRect, iconContext, ICON_RECTANGLES[0]);
		else if (iconRect.y === ICON_RECTANGLES[1].y && iconRect.x === ICON_RECTANGLES[1].x)
			drawR80_45(iconRect, iconContext, ICON_RECTANGLES[1]);
		else if (iconRect.y === ICON_RECTANGLES[2].y && iconRect.x === ICON_RECTANGLES[2].x)
			drawR70_45(iconRect, iconContext, ICON_RECTANGLES[2]);
		else if (iconRect.y === ICON_RECTANGLES[3].y && iconRect.x === ICON_RECTANGLES[3].x)
			drawR50_90(iconRect, iconContext, ICON_RECTANGLES[3]);
		else if (iconRect.y === ICON_RECTANGLES[4].y && iconRect.x === ICON_RECTANGLES[4].x)
			drawR50_60(iconRect, iconContext, ICON_RECTANGLES[4]);
		else if (iconRect.y === ICON_RECTANGLES[5].y && iconRect.x === ICON_RECTANGLES[5].x)
			drawR50_30(iconRect, iconContext, ICON_RECTANGLES[5]);
		else if (iconRect.y === ICON_RECTANGLES[6].y && iconRect.x === ICON_RECTANGLES[6].x)
			drawL100(iconRect, iconContext, ICON_RECTANGLES[6]);
		else if (iconRect.y === ICON_RECTANGLES[7].y && iconRect.x === ICON_RECTANGLES[7].x)
			drawL80(iconRect, iconContext, ICON_RECTANGLES[7]);
		else if (iconRect.y === ICON_RECTANGLES[8].y && iconRect.x === ICON_RECTANGLES[8].x)
			drawL50(iconRect, iconContext, ICON_RECTANGLES[8]);
		else if (iconRect.y === ICON_RECTANGLES[9].y && iconRect.x === ICON_RECTANGLES[9].x)
			drawL27_5(iconRect, iconContext, ICON_RECTANGLES[9]);
		else if (iconRect.y === ICON_RECTANGLES[10].y && iconRect.x === ICON_RECTANGLES[10].x)
			drawL20(iconRect, iconContext, ICON_RECTANGLES[10]);

		iconContext.restore();
	}



	iconCanvas.onmousedown = function (e:any) {

		var loc = windowToCanvas(iconCanvas, e.clientX, e.clientY);
		e.preventDefault();
		// selectIcon();

		mouseDownInControlIconCanvas(loc);

	}

	function selectIcon(rect:any) {
		//选中的图标位置
		selectedRect = rect;
		console.log("selectIcon");
		console.log(selectedRect);
		drawIcons();
	}

	function mouseDownInControlIconCanvas(loc:any) {

		// var loc = windowToCanvas(iconCanvas,e.clientX,e.clientY);

		ICON_RECTANGLES.forEach(function (iconRect) {
			iconContext.beginPath();
			iconContext.rect(iconRect.x, iconRect.y, iconRect.w, iconRect.h);
			if (iconContext.isPointInPath(loc.x, loc.y)) {
				selectIcon(iconRect, loc);
				//返回图标的功能标识
				selectedFunction = getIconFunction(iconRect, loc);
			}
		});
	}

	function mouseDownInControlCanvas(loc:any) {

		var loc = windowToCanvas(canvas, e.clientX, e.clientY);
	}
	/**映射图标所对应的元素
	 * @param {Object} iconRect
	 * @param {Object} loc
	 */
	function getIconFunction(iconRect:any, loc:any) {
		var action;
		if (iconRect.y === ICON_RECTANGLES[0].y && iconRect.x === ICON_RECTANGLES[0].x) action = 'R100_45';
		else if (iconRect.y === ICON_RECTANGLES[1].y && iconRect.x === ICON_RECTANGLES[1].x) action = 'R80_45';
		else if (iconRect.y === ICON_RECTANGLES[2].y && iconRect.x === ICON_RECTANGLES[2].x) action = 'R70_45';
		else if (iconRect.y === ICON_RECTANGLES[3].y && iconRect.x === ICON_RECTANGLES[3].x) action = 'R50_90';
		else if (iconRect.y === ICON_RECTANGLES[4].y && iconRect.x === ICON_RECTANGLES[4].x) action = 'R50_60';
		else if (iconRect.y === ICON_RECTANGLES[5].y && iconRect.x === ICON_RECTANGLES[5].x) action = 'R50_30';
		else if (iconRect.y === ICON_RECTANGLES[6].y && iconRect.x === ICON_RECTANGLES[6].x) action = 'L100';
		else if (iconRect.y === ICON_RECTANGLES[7].y && iconRect.x === ICON_RECTANGLES[7].x) action = 'L80';
		else if (iconRect.y === ICON_RECTANGLES[8].y && iconRect.x === ICON_RECTANGLES[8].x) action = 'L50';
		else if (iconRect.y === ICON_RECTANGLES[9].y && iconRect.x === ICON_RECTANGLES[9].x) action = 'L27_5';
		else if (iconRect.y === ICON_RECTANGLES[10].y && iconRect.x === ICON_RECTANGLES[10].x) action = 'L20';

		return action;
	}



	drawCanvas.onmousedown = function (e:any) {
		console.log("X:" + e.x + ";Y:" + e.y);
		//保存绘图表面
		saveDrawingSurface1(drawCanvas, context);
		//相对于画布的鼠标坐标
		var loc = windowToCanvas(drawCanvas, e.clientX, e.clientY);
		//未开启拖动模式时
		if (!edit) {
			console.log("selectedFunction:" + selectedFunction);
			//根据左侧菜单栏选择的图形来绘图
			if (selectedFunction === "R100_45")
				drawR100_45(loc, context);
			if (selectedFunction === "R80_45")
				drawR80_45(loc, context);
			if (selectedFunction === "R70_45")
				drawR70_45(loc, context);
			if (selectedFunction === "R50_90")
				drawR50_90(loc, context);
			if (selectedFunction === "R50_60")
				drawR50_60(loc, context);
			if (selectedFunction === "R50_30")
				drawR50_30(loc, context);
			if (selectedFunction === "L100")
				drawL100(loc, context);
			if (selectedFunction === "L80")
				drawL80(loc, context);
			if (selectedFunction === "L50")
				drawL50(loc, context);
			if (selectedFunction === "L27_5")
				drawL27_5(loc, context);
			if (selectedFunction === "L20")
				drawL20(loc, context);

		} else {
			//从新绘制右侧绘图板
			track_graphics.forEach(function (track_graphic:any) {
				track_graphic.createPath(context);
				console.log(context.isPointInPath(loc.x, loc.y));
				if (context.isPointInPath(loc.x, loc.y)) {
					dragging = track_graphic;
					selectedElement = track_graphic;
					areaSet.value = dragging.area;
					draggingForkeyboard = track_graphic;
					console.log("----------------------------");
					console.log(track_graphic);
					console.log("loc.x:");
					console.log(loc.x);
					console.log("loc.y:");
					console.log(loc.y);

					draggingOffsetX = loc.x - (track_graphic.centerX || track_graphic.beginX);
					draggingOffsetY = loc.y - (track_graphic.centerY || track_graphic.beginY);

				}
			});
		}

	}
	drawCanvas.onmousemove = function (e:any) {
		var loc = windowToCanvas(drawCanvas, e.clientX, e.clientY);
		e.preventDefault();
		//若开启拖动模式并且获取到图形数据时
		if (dragging && edit) {
			console.log("拖动");
			console.log("draggingOffsetX:");
			console.log(draggingOffsetX);
			console.log("draggingOffsetY:");
			console.log(draggingOffsetY);
			// dragging.centerX = loc.x - draggingOffsetX;
			// dragging.centerY = loc.y - draggingOffsetY;
			//如果是圆弧形
			if (dragging.beginX == undefined || dragging.beginY == undefined) {
				dragging.centerX = loc.x - draggingOffsetX;
				dragging.centerY = loc.y - draggingOffsetY;
			}
			//如果是直线形
			if (dragging.centerX == undefined || dragging.centerY == undefined) {
				dragging.beginX = loc.x - draggingOffsetX;
				dragging.beginY = loc.y - draggingOffsetY;
			}


			console.log("鼠标坐标：" + loc.x + "," + loc.y);
			console.log(track_graphics);
			context.clearRect(0, 0, canvas.width, canvas.height);
			drawTrack_graphics(context);

		}
	}
	drawCanvas.onmouseup = function (e) {
		var loc = windowToCanvas(drawCanvas, e.clientX, e.clientY);
		if (edit) {
			dragging = false;
			console.log("dragging.centerX=" + dragging.centerX);
			selectedFunction = null;

		}

	}


	recall.onmousedown = function () {
		restoreDrawingSurface1(context);
	}

	editCheckbox.onchange = function (e:any) {
		edit = editCheckbox.checked;

		iconContext.clearRect(0, 0, iconCanvas.width, iconCanvas.height);
		selectIcon(null);


	};
	angleText.onchange = function (e:any) {
		// angleText
		console.log(angleText.value);
		if (angleText.value < 0 || angleText.value > 360) {
			alert("角度需在0度至360度之间");
		} else {
			// draggingForkeyboard.angle;
			console.log(draggingForkeyboard.angle);
			draggingForkeyboard.angle = angleText.value;
			context.clearRect(0, 0, canvas.width, canvas.height);
			drawTrack_graphics(context);
		}
	}

	//平移变换按钮组
	buttonUp.onmousedown = function () {
		graphics_Y_move(coordText.value);
	}
	buttonDown.onmousedown = function () {
		graphics_Y_move(-coordText.value);
	}
	function graphics_Y_move(value:any) {
		if (draggingForkeyboard.beginY == undefined)
			draggingForkeyboard.centerY = draggingForkeyboard.centerY - value;

		if (draggingForkeyboard.centerY == undefined)
			draggingForkeyboard.beginY = (draggingForkeyboard.beginY) - value;
		draggingForkeyboard.endY = (draggingForkeyboard.endY) - value;
		context.clearRect(0, 0, canvas.width, canvas.height);
		drawTrack_graphics(context);
	}

	buttonRight.onmousedown = function () {
		graphics_X_move(-coordText.value);
	}
	buttonLeft.onmousedown = function () {
		graphics_X_move(coordText.value);
	}

	function graphics_X_move(value:any) {
		if (draggingForkeyboard.beginX == undefined)
			draggingForkeyboard.centerX = draggingForkeyboard.centerX - value;

		if (draggingForkeyboard.centerX == undefined)
			draggingForkeyboard.beginX = (draggingForkeyboard.beginX) - value;
		draggingForkeyboard.endX = (draggingForkeyboard.endX) - value;
		context.clearRect(0, 0, canvas.width, canvas.height);
		drawTrack_graphics(context);
	}

	areaSet.onchange = function () {
		if (areaSet.value < 1) {
			alert("不能小于1");
			areaSet.value = 1;
		} else {
			draggingForkeyboard.area = areaSet.value;
			context.clearRect(0, 0, canvas.width, canvas.height);
			drawTrack_graphics(context);
		}
	}

	// drawIcons();
	saveDrawingSurface(iconCanvas, iconContext);
	// drawR100_45();
	saveDrawingSurface(iconCanvas, iconContext);
	// drawR80_45();
	if (!editCheckbox.checked) {

		zoomIn.disabled = true;
		zoomOut.disabled = true;
		removeTrack.disabled = true;
		newTrack.disabled = true;
		setToScreen.disabled = true;
		elementSize.disabled = true;
		recall.disabled = true;
		cancelRecall.disabled = true;

	}

	//-----------------------------------------------------------------------------
	var drawingTrackInfo = {};
	var dropdownUpdateTrack = ref(null);
	//保存按钮
	var trackSave = ref(null);
	// aaaa.appendChild("<a class='dropdown-item' href='#'>三赛道</a>");
	var updateTrackButton = document.getElementById("dropdown-updateTrack-div");

	// 赛道图
	var trackInfo;
	//查询所有赛道图，为"切换赛道"下拉框赋值
	// 获取数据
	// sa.ajax('/api/trackImage/getTrackImageList', function (res) {
	// 	// console.log(res.data[0].trackName);
	// 	trackInfo = res.data;
	// 	// console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
	// 	console.log(res.data);
	// 	res.data.forEach(function (trackInfo) {
	// 		console.log(trackInfo.trackName);
	// 		var a = document.createElement("a");
	// 		a.className = 'dropdown-item';
	// 		var atxt = document.createTextNode(trackInfo.trackName);
	// 		a.appendChild(atxt);
	// 		//添加ID
	// 		a.setAttribute("id", trackInfo.id);
	// 		updateTrack.appendChild(a);
	// 	});
	// });

	//下拉框触发事件
	// show.bs.dropdown
	// $('#dropdown-updateTrack-div').on('show.bs.dropdown', function () {
	// 	console.log("你打开了下拉框");
	// 	document.querySelectorAll(".dropdown-menu a").forEach(function (a_dom) {
	// 		a_dom.onmousedown = function () {

	// 			console.log("你点击了下拉框中的某一选项");
	// 			console.log(a_dom.getAttribute("id"));
	// 			$('.dropdown-toggle').text("赛道：" + $(this).text());

	// 			if (a_dom.getAttribute("id") !== undefined || a_dom.getAttribute("id") !== null) {
	// 				//读取赛道
	// 				sa.ajax('/api/trackImage/findTrackImageById', { id: +a_dom.getAttribute("id") }, function (res) {
	// 					drawingTrackInfo = res.data;
	// 					console.log(res.data);
	// 					//读取其他赛道前，将绘图板上现有的元素清空
	// 					context.clearRect(0, 0, canvas.width, canvas.height);
	// 					track_graphics = [];
	// 					//将读取到的赛道呈现至绘图板上
	// 					//圆弧形
	// 					drawingTrackInfo.electricArcList.forEach(function (eA) {
	// 						let electric_arc = new Electric_arc(eA.centerX, eA.centerY, eA.radius, eA.beginArc, eA.endArc, eA.clock, eA.angle, eA.area);
	// 						electric_arc.id = eA.id;
	// 						electric_arc.stroke(context);
	// 						track_graphics.push(electric_arc);
	// 					});
	// 					//直线型
	// 					drawingTrackInfo.lineList.forEach(function (L) {
	// 						let line = new Line(L.beginX, L.beginY, L.length, L.angle, L.area);
	// 						line.id = L.id;
	// 						line.stroke(context);
	// 						track_graphics.push(line);
	// 					});

	// 				});
	// 			}

	// 		}
	// 	});
	// });
	//保存按钮点击事件
	// trackSave.onmousedown = function () {
	// 	// console.log(drawingTrackInfo);
	// 	// console.log(track_graphics);
	// 	console.log("你点击了保存按钮");
	// 	let newElectric = [];
	// 	let newLine = [];
	// 	// console.log("track_graphics");
	// 	console.log(track_graphics);

	// 	// console.log(track_graphics.line);
	// 	//赋值
	// 	track_graphics.forEach(function (track_graphic) {
	// 		//圆弧形
	// 		if (track_graphic.beginX == undefined || track_graphic.beginY == undefined) {
	// 			newElectric.push(track_graphic);
	// 		}
	// 		//直线型
	// 		if (track_graphic.centerX == undefined || track_graphic.centerY == undefined) {
	// 			newLine.push(track_graphic);
	// 		}

	// 		console.log(track_graphic);


	// 	});



	// 	// console.log(newElectric);
	// 	//将新添加的元素合并
	// 	// drawingTrackInfo.electricArcList = drawingTrackInfo.electricArcList.concat(newElectric);
	// 	// drawingTrackInfo.lineList = drawingTrackInfo.lineList.concat(newLine);
	// 	drawingTrackInfo.electricArcList = newElectric;
	// 	drawingTrackInfo.lineList = newLine;

	// 	// console.log("newElectric");
	// 	// console.log(newElectric);
	// 	// console.log("newLine");
	// 	// console.log(newLine);

	// 	// console.log("drawingTrackInfo");
	// 	console.log(drawingTrackInfo);
	// 	console.log(dragging);
	// 	//如果是圆弧形
	// 	if (dragging.beginX == undefined || dragging.beginY == undefined) {
	// 		dragging.centerX = loc.x;
	// 		dragging.centerY = loc.y;
	// 	}
	// 	//如果是直线形
	// 	if (dragging.centerX == undefined || dragging.centerY == undefined) {
	// 		dragging.beginX = loc.x;
	// 		dragging.beginY = loc.y;
	// 	}
	// 	console.log(JSON.stringify(drawingTrackInfo));
	// 	// sa.loading("loading");
	// 	// $.ajax({
	// 	// 	url: sa.cfg.api_url + "/api/trackImage/trackImageListSave",
	// 	// 	type: "post",
	// 	// 	data: JSON.stringify(drawingTrackInfo),
	// 	// 	contentType: "application/json",
	// 	// 	success: function (res) {
	// 	// 		console.log(res);
	// 	// 		layer.alert('保存成功');
	// 	// 	}
	// 	// });

	// };

	//删除元素
	// var removeElements = document.getElementById("removeElements");
	// removeElements.onmousedown = function () {
	// 	// console.log(dragging);
	// 	// dragging = false;
	// 	console.log(selectedElement);
	// 	let i = 0;
	// 	//将被选中的元素删除
	// 	track_graphics.forEach(function (track_graphic) {
	// 		if (selectedElement == track_graphic) {
	// 			console.log("true");
	// 			track_graphics.splice(i, 1);
	// 		}
	// 		i++;
	// 	});
	// 	context.clearRect(0, 0, canvas.width, canvas.height);
	// 	drawTrack_graphics(context);

	// }
</script>



<style scoped>
    .w {
  width: 100%;
  height: 100vh;
  background: skyblue;
  background-size: 100% 100%;
  position: absolute;
}
.main {
  /* width: 1500px; */
  height: 100% - 20px;
  margin: 0 auto;
  /* margin-top: 20px; */

  position: absolute;
  /* border: 1px solid rgb(32, 23, 23); */
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.logo {
  /* width: 1350px; */
  height: 50px;
}
.logo span {
  color: #ffffff;
  font-weight: bold;
  font-size: 28px;
  letter-spacing: 2px;
  padding: 0 20px;
  line-height: 50px;
}
.module{
    width: 240px;
    height: 660px;
    float: left;
    margin-left: 9px;
}
.icon1{
  margin: 25px 17px ;
}
.draw{
  width:  745px;
  height: 660px;
  float: left;
/* margin-left: 17px; */
}
.icon2{
  width: 850px;
  height: 600px;
}
.join{
    width: 850px;
    height: 50px;
    float: left;
    border-radius:8px;  
    /* border: 1px solid #212122; */
    background-color: #aaaaaa;
    margin: 5px 3px;   
    padding: 10px 0;
}
.circle1 {
       width: 20px;
       height: 20px;
       background: red;
       border-radius: 50px;
       margin: 8px 7px;      
      
}
.circle2 {
  width: 20px;
  height: 20px;
  background: hsl(120, 95%, 50%);
  border-radius: 50px;
  margin: 8px 7px;       
}
.circle3 {
  width: 20px;
  height: 20px;
  background: hsl(120, 1%, 45%);
  border-radius: 50px;
  margin: 8px 7px;       
}
.zhuangtai{
  text-align: center;
  line-height: 32px;
  margin: 0px 2px;
  font-size: 23px;
}

.draw,
.module,
.drawCanvas,
.edit {
  background: #e9ecef;
  cursor: crosshair;
  -webkit-box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
  border: thin solid #aaaaaa;
  border-radius: 8px;
}

#drawCanvas {
  background: #e9ecef;
}
.buttonUp {
  /* margin-left: 800px; */
  display: inline-block;
  /* display:inline; */
}
.buttonLeft {
  /* float:left; */
  /* margin-left:800px; */
  left: 800px;
}
.edit {
  background: rgba(12, 26, 63, 0.3);
  width: 320px;
  height: 660px;
  /* margin-left: 7px; */
  float: left;
}
.edit ul {
  padding-inline-start: 20px;
}

.edit ul li {
  margin-top: 19px;
  list-style: none;
}


</style>