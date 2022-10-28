<template>

<div class="w">
				<div class="main">
					<div class="logo">
						<span>赛道编辑</span>
					</div>
					<div class="module">
						<div class="icon1">
							<canvas id="iconCanvas" width='200' height='550' text-align='center'>
								浏览器不支持canvas元素
							</canvas>
						</div>
		
					</div>
		
					<div class="draw">
						<div class="icon2">
							<canvas id="drawCanvas" width='745' height='600'>
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
								<button id="recall" type="button" class="btn btn-outline-light"><i
										class="bi bi-arrow-90deg-left"></i>&nbsp;上一步</button>
								<button id="cancelRecall" type="button" class="btn btn-outline-light"
									style="margin-left: 10px;">下一步&nbsp;<i class="bi bi-arrow-90deg-right"></i></button>
							</li>
							<li>
								<div class="col-auto my-2" id='dragDiv'>
									<div class="custom-control custom-checkbox mr-sm-5" style="padding-left: 0.5rem;">
										<input type="checkbox" class="custom-control-input" id="editCheckbox">
										<label class="custom-control-label" for="editCheckbox">
											<p class="text-light" style="margin-bottom: 0;">拖动图形变换模式</p>
										</label>
									</div>
								</div>
							</li>
							<li>
								<span class="text-light" style="margin-bottom: 0;">元素大小（px）：</span><input type="number" name=""
									id="elementSize" value="" style="font-size: 1rem; width: 100px;border-radius:2px;border: 0;" />
							</li>
							<li>
								<span class="text-light" style="margin-bottom: 0;">角度变换（°）：</span><input type="number" name=""
									id="angleText" value=""
									style="font-size: 1rem; width: 100px;border-radius:2px;border: 0;" />
							</li>
							<li>
								<span class="text-light" style="margin-bottom: 0;">平移变换：</span>
								<button id="buttonLeft" type="button" title="左转" class="btn btn-outline-light"><i
										class="bi bi-arrow-left-square"></i></button>
								<button id="buttonUp" type="button" title="上转" class="btn btn-outline-light"><i
										class="bi bi-arrow-up-square"></i></button>
								<button id="buttonDown" type="button" title="下转" class="btn btn-outline-light"><i
										class="bi bi-arrow-down-square"></i></button>
								<button id="buttonRight" type="button" title="右转" class="btn btn-outline-light"><i
										class="bi bi-arrow-right-square"></i></button>
							</li>
							<li>
								<span class="text-light" style="margin-bottom: 0;">输入移动像素值（px）：</span><input type="text" name=""
									class="coordText" style="font-size: 1rem; width: 100px;" value="" id="coordText" />
							</li>
							<li>
								<span class="text-light" style="margin-bottom: 0;">赛道大小：</span>
								<button id="zoomIn" type="button" class="btn btn-outline-light"><i
										class="bi bi-zoom-in"></i>&nbsp;放大</button>
								<button id="zoomOut" type="button" class="btn btn-outline-light" style="margin-left: 10px;">
                                    <i class="bi bi-zoom-out"></i>&nbsp;缩小</button>
							</li>
							<li>
								<div class="input-group xs-3">
									<div class="input-group-prepend1">
										<span class="input-group-text" id="basic-addon1">当前图形处于</span>
									</div>
									<div class="input-group-prepend xs-0.2">
										<input type="number" class="form-control rounded-sm" id="areaSet" value="1"
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
									<div class="dropdown-menu" style="font-size: 1rem; width: 286px;" id="dropdown-updateTrack">
										<!-- <a class="dropdown-item" href="#">一赛道</a>
										<a class="dropdown-item" href="#">二赛道</a>
										<a class="dropdown-item" href="#">三赛道</a> -->
									</div>
								</div>
							</li>
							<li>
		
								<button id="removeTrack" type="button" class="btn btn-outline-light"
									style="font-size: 1rem; width: 140px;" disabled="disabled"><i class="bi bi-trash"></i>&nbsp;删除赛道</button>
								<button id="newTrack" type="button" class="btn btn-outline-light"
									style="font-size: 1rem; width: 140px;"><i class="bi bi-file-earmark-plus"></i>&nbsp;新建赛道</button>
		
							</li>
							<li>
								<a href="#">
									<button id="setToScreen" type="button" class="btn btn-outline-light"
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