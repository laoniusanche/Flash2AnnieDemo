var urlLoader=urlLoader||{};
urlLoader.UrlLoader=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
    s.jsBtn.mouseChildren=false;
    s.jsonBtn.mouseChildren=false;
    s.imageBtn.mouseChildren=false;
    s.cssBtn.mouseChildren=false;
    s.xmlBtn.mouseChildren=false;
    s.textBtn.mouseChildren=false;
    var loader=new annie.URLLoader();
    loader.addEventListener(annie.Event.ERROR,function (e) {
        alert(e.data.msg);
    });
    loader.addEventListener(annie.Event.COMPLETE,function (e) {
        trace(e.data.response);
        switch(e.data.type){
            case "js":
                //加载完自己运行,无需处理
                break;
            case "json":
                //加载完后就是json对象
                break;
            case "css":
                //加载完后需要手动插入
                document.head.appendChild(e.data.response);
                break;
            case "text":
                break;
            case "image":
                //加载完后就是Image 标签对象
                var bitmap=new annie.Bitmap(e.data.response);
                s.addChild(bitmap);
                bitmap.x=220;
                bitmap.y=150;
                break;
        }});
    s.addEventListener(annie.MouseEvent.CLICK,function (e) {
        switch(e.target.name){
            case "jsBtn":
                loader.responseType="js";
                loader.load("resource/testResource/test.js");
                break;
            case "jsonBtn":
                loader.responseType="json";
                loader.load("resource/testResource/test.json");
                break;
            case "cssBtn":
                loader.responseType="css";
                loader.load("resource/testResource/test.css");
                break;
            case "xmlBtn":
                loader.responseType="text";
                loader.load("resource/testResource/test.xml");
                break;
            case "textBtn":
                loader.responseType="text";
                loader.load("resource/testResource/test.txt");
                break;
            case "imageBtn":
                loader.responseType="image";
                loader.load("resource/testResource/test.png");
                break;
        }
    });
    s.addEventListener(annie.Event.REMOVE_TO_STAGE,function (e) {
        document.body.style.backgroundColor="#fff";
    })
};
F2xExtend(urlLoader.UrlLoader,F2xContainer);
urlLoader.UrlLoader.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d6=Flash2x.t(0,decodeURI("demo%E4%B8%AD%E7%9A%84%E8%AF%B7%E6%B1%82%E8%BF%94%E5%9B%9E%E5%86%85%E5%AE%B9%EF%BC%8C%E6%98%AF%E6%89%93%E5%8D%B0%E5%9C%A8%E8%B0%83%E8%AF%95%E9%9D%A2%E6%9D%BF%E4%B8%AD%EF%BC%8C%E6%88%96%E8%87%AA%E5%8A%A8%E6%89%A7%E8%A1%8C"),18,"#000000","Arial",2,2,522.1,25.2,20,"center",false,false,"single",false);
	Flash2x.d(_d6,{x:50.05,y:892.65});
	var _d5=new urlLoader.F2xAuto_5();
	_d5.name="cssBtn";
	s.cssBtn=_d5;
	Flash2x.d(_d5,{x:361,y:621.45});
	var _d4=new urlLoader.F2xAuto_4();
	_d4.name="jsBtn";
	s.jsBtn=_d4;
	Flash2x.d(_d4,{x:169.95,y:621.45});
	var _d3=new urlLoader.F2xAuto_3();
	_d3.name="xmlBtn";
	s.xmlBtn=_d3;
	Flash2x.d(_d3,{x:361,y:554.6});
	var _d2=new urlLoader.F2xAuto_2();
	_d2.name="jsonBtn";
	s.jsonBtn=_d2;
	Flash2x.d(_d2,{x:169.95,y:554.6});
	var _d1=new urlLoader.F2xAuto_1();
	_d1.name="textBtn";
	s.textBtn=_d1;
	Flash2x.d(_d1,{x:361,y:475.65});
	var _d0=new urlLoader.F2xAuto_0();
	_d0.name="imageBtn";
	s.imageBtn=_d0;
	Flash2x.d(_d0,{x:170,y:475.7});
	s.addChild(_d0);
	s.addChild(_d1);
	s.addChild(_d2);
	s.addChild(_d3);
	s.addChild(_d4);
	s.addChild(_d5);
	s.addChild(_d6);
	//f2x_auto_created_init_end
	
};
