var shape = shape || {};
shape.Shape = function () {
    var s = this;
    F2xContainer.call(s);
    s.initUI();
    s.shapeDraw = new annie.Shape();
    var colorCount = 0;
    //颜色数组
    s.colorList = ["#0563c3", "#acfff2", "#97daf3", "#d5e1ff", "#21aabe", "#e3c7ff", "#5ad4c1", "#f5eb88", "#aef588",
        "#6da467", "#cfebdd", "#77c7ff", "#fff1c0", "#ed8b8b", "#ffae92", "#f28f59", "#ffbc53", "#fe7761", "#f98585", "#aa90e5",
        "#b4d7aa", "#9cdebb", "#ff76aa", "#fff39f", "#92e6e9", "#fae5b3", "#a2d5f8", "#ffd0de", "#d1bffe", "#ff9ed9", "#e6f5ff", "#97cafe", "#fffcc0", "#ffe08b", "#c1ece2", "#fbb4c5"]
    s.colorProportionList = ["#00FF00","#000000"];
    s.proportionList = [1, 0];
    s.triangle_btn.mouseChildren = false;
    s.circular_btn.mouseChildren = false;
    s.rectangle_btn.mouseChildren = false;
    s.Rounded_btn.mouseChildren = false;
    s.addEventListener(annie.MouseEvent.CLICK, function (e) {
        colorCount++;
        switch (e.target.name) {
            case "triangle_btn":
                /*
                 **点击画三角形，程序画图
                 */
                // s.pointList=[300,350,200,450];
                s.pointList = [400, 350, 300, 450, 500, 450];
                if (colorCount <= 36) {
                    s.colorChange(colorCount);
                    s.shapeDraw.moveTo(300, 350);
                    s.shapeDraw.lineTo(200, 450);
                    s.shapeDraw.lineTo(400, 450);
                    s.shapeDraw.endFill();
                    s.addChild(s.shapeDraw);
                } else {
                    colorCount = 0;
                    s.colorChange(colorCount);
                }
                break;
            case "circular_btn":
                /*
                 **点击画圆形，程序画图
                 */
                // s.pointList=[200,600,400,600];
                s.pointList=[0,0,0,0,0,100];
                if (colorCount <= 36) {
                    s.colorChange(colorCount);
                    s.shapeDraw.drawCircle(315, 600, 100);
                    s.shapeDraw.endFill();
                    s.addChild(s.shapeDraw);
                } else {
                    colorCount = 0;
                    s.colorChange(colorCount);
                }

                break;
            case "rectangle_btn":
                /*
                 **点击之后画矩形
                 */
                s.pointList = [20, 550, 250, 550];
                s.colorChange();
                if (colorCount <= 36) {
                    s.shapeDraw.drawRect(60, 550, 150, 100);
                    s.shapeDraw.endFill();
                    s.addChild(s.shapeDraw);
                    s.colorChange(colorCount);
                } else {
                    colorCount = 0;
                    s.colorChange(colorCount);
                }
                break;
            case "Rounded_btn":
                /*
                 **圆角矩形
                 */
                s.pointList = [420, 550, 550, 550];
                if (colorCount <= 36) {
                    s.shapeDraw.drawRoundRect(420, 550, 150, 100, 15, 15, 15, 15);
                    s.shapeDraw.endFill();
                    s.addChild(s.shapeDraw);
                    s.colorChange(colorCount);
                } else {
                    colorCount = 0;
                    s.colorChange(colorCount);
                }
                break;
        }
    });
    /*
     **移除舞台侦听
     */
    s.addEventListener(annie.Event.REMOVE_TO_STAGE, function (e) {
        s.removeAllChildren();
    })
};
F2xExtend(shape.Shape, F2xContainer);
shape.Shape.prototype.colorChange = function (colorCount) {
    var s = this;
    /*
     **填充颜色线性渐变
     */
    // s.shapeDraw.beginLinearGradientFill(s.colorProportionList,s.proportionList,s.pointList);
    /*
     **随机改变整体填充颜色
     */
    s.shapeDraw.beginFill(s.colorList[colorCount]);
    /*
     **填充径向渐变
     */
    // s.shapeDraw.beginRadialGradientFill(s.colorProportionList, s.proportionList, s.pointList)
};
shape.Shape.prototype.initUI = function () {
    var s = this;
    //f2x_auto_created_init_start
	var _d0=new shape.F2xAuto_4();
	_d0.name="triangle_btn";
	s.triangle_btn=_d0;
	Flash2x.d(_d0,{x:69.8,y:184.2});
	var _d1=new shape.F2xAuto_6();
	_d1.name="Rounded_btn";
	s.Rounded_btn=_d1;
	Flash2x.d(_d1,{x:66.95,y:290.7});
	var _d2=new shape.F2xAuto_5();
	_d2.name="rectangle_btn";
	s.rectangle_btn=_d2;
	Flash2x.d(_d2,{x:68.95,y:237.7});
	var _d3=new shape.F2xAuto_3();
	_d3.name="circular_btn";
	s.circular_btn=_d3;
	Flash2x.d(_d3,{x:69.75,y:133.8});
	var _d4=new shape.F2xAuto_1();
	s.addChild(_d4);
	s.addChild(_d3);
	s.addChild(_d2);
	s.addChild(_d1);
	s.addChild(_d0);
	//f2x_auto_created_init_end

};
