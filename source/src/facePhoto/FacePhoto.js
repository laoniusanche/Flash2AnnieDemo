var facePhoto=facePhoto||{};
facePhoto.FacePhoto=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
	var photo1=new annieUI.FacePhoto();
	photo1.init("http://web.flash2x.org/Public/images/Flash2xLogo.png",200);
	s.addChild(photo1);
	photo1.x=220;
	photo1.y=200;
    var photo2=new annieUI.FacePhoto();
    photo2.init("http://web.flash2x.org/Public/images/Flash2xLogo.png",200,1);
    s.addChild(photo2);
    photo2.x=220;
    photo2.y=500;
};
F2xExtend(facePhoto.FacePhoto,F2xContainer);
facePhoto.FacePhoto.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=Flash2x.t(0,decodeURI("%E5%A4%B4%E5%83%8F%E7%BB%84%E4%BB%B6%EF%BC%8C%E6%94%AF%E6%8C%81%E6%96%B9%E5%BD%A2%E5%92%8C%E5%9C%86%E5%BD%A2"),24,"#333333","Heiti SC",2,2,520.4,24,26,"center",false,false,"multiline",false);
	Flash2x.d(_d0,{x:57.8,y:943});
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
