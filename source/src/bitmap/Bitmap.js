var bitmap=bitmap||{};
bitmap.Bitmap=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
	var input=document.createElement("input");
	input.type="file";
    input.style.width="190px";
    input.style.height="240px";
    input.onchange = s.imgPreview.bind(s);
	var f=new annie.FloatDisplay();
	f.init(input);
	s.addChild(f);
	f.x=240;
	f.y=350;
	f.alpha=0;
};
F2xExtend(bitmap.Bitmap,F2xContainer);
bitmap.Bitmap.prototype.imgPreview=function(e){
    var s = this;
    var target = e.target;
    var file = target.files[0];
    if (!file)return;
    //TODO 判断图片正则表达式
    var imageType = /^image\//;
    //是否是图片
    if (!imageType.test(file.type)) {
        alert("请选择图片！");
        return;
    }
    //TODO 处理矫正图片角度
    // var orientation=0;
    //EXIF js 可以读取图片的元信息 https://github.com/exif-js/exif-js
    // EXIF.getData(file, function () {
    //     switch (EXIF.getTag(this, 'Orientation')) {
    //         //iphone横屏拍摄，此时home键在左侧
    //         case 3:
    //             orientation = 180;
    //             break;
    //         //iphone竖屏拍摄，此时home键在下方(正常拿手机的方向)
    //         case 6:
    //             orientation = 90;
    //             break;
    //         //iphone竖屏拍摄，此时home键在上方
    //         case 8:
    //             orientation = 270;
    //             break;
    //     }
    // });
    //读取完成
    var reader = new FileReader();
    reader.onload = function (evt) {
        //获取图片路径
        var img = new Image();
        img.src = evt.target.result;
        img.onload = function (e) {
            //TODO 获取图片宽高
            //如果里面有一张图，删除里面的照片重新添加照片
            s.img_mc.zb_mc.removeAllChildren();
            var bitmap = new annie.Bitmap(img);
            var w = e.target.width;
            var h = e.target.height;
            if(w<h){
                // 190是遮罩层里的宽
                bitmap.scaleX=bitmap.scaleY =190/w
            }else{
                //240是遮罩层里的高
                bitmap.scaleX=bitmap.scaleY =240/h
            }
            s.img_mc.zb_mc.addChild(bitmap);
            var a=annie.toDisplayDataURL(bitmap);
            console.log(a);
        };
    };
    reader.readAsDataURL(file);
};
bitmap.Bitmap.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new bitmap.F2xAuto_4();
	_d0.name="img_mc";
	s.img_mc=_d0;
	Flash2x.d(_d0,{x:309,y:477.3});
	var _d1=new bitmap.F2xAuto_2();
	s.addChild(_d1);
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
