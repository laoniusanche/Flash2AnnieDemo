var durlloader=durlloader||{};
durlloader.Durlloader=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
    //yours_code_here
    var urlLoader = new annie.URLLoader();
    s.addEventListener(annie.Event.ADD_TO_STAGE, initStage);
    /**
     * 初始化
     * @param e
     */
    function initStage(e) {
        s.removeEventListener(annie.Event.ADD_TO_STAGE, initStage);
        s.back_btn.addEventListener(annie.MouseEvent.CLICK, backHomeHandler);
        s.tip_mc.addEventListener(annie.MouseEvent.CLICK, hideTipLayerHandler);

        s.load_btn.addEventListener(annie.MouseEvent.CLICK, loadHandler);
        s.unload_btn.addEventListener(annie.MouseEvent.CLICK, unloadHandler);
        urlLoader.addEventListener(annie.Event.PROGRESS, onProgressHandler);
        urlLoader.addEventListener(annie.Event.COMPLETE, onCompleteHandler);
    }

    /**
     * 返回范例列表
     * @param e
     */
    function backHomeHandler(e) {
        var backHomeEvent = new annie.Event('backHomeEvent');
        backHomeEvent.origin = 'durlloader';
        globalDispatcher.dispatchEvent(backHomeEvent);
    }

    /**
     * 隐藏提示浮层
     * @param e
     */
    function hideTipLayerHandler(e) {
        s.tip_mc.removeEventListener(annie.MouseEvent.CLICK, hideTipLayerHandler);
        s.tip_mc.visible = false;
    }

    function loadHandler(e) {
        urlLoader.method = 'get';
        urlLoader.load('resource/Flash2xLogo.jpg');//加载图片
        //urlLoader.load('resource/yoursMusic.mp3');//加载声音
        //urlLoader.load('resource/yoursdata.json');//加载json
        //urlLoader.load('resource/yoursdata.txt');//加载文本
        //urlLoader.load('/resource/yoursdata.css');//加载css
        //...  js  css  svg  xml  mp4  ogg wav等等
    }

    function unloadHandler(e) {
        urlLoader.loadCancel();
        s.output_txt.text = '取消加载';
    }

    function onProgressHandler(e) {
        //加载过程。。
    }

    function onCompleteHandler(e) {
        trace(e.data);
        //注：e.data.response为返回的源数据；js css  mp4 jpg png mp3...等等；本实例数据为图片数据；
        s.output_txt.text = '加载的数据类型为：' + e.data.type + '\n' + '源数据：' + e.data.response;
        var dataType= e.data.type;
        switch (dataType){
            case 'image':
                var bitmap = new annie.Bitmap(e.data.response);
                bitmap.x = 126;
                bitmap.y = 514;
                s.addChild(bitmap);
                break;
            case 'sound':
                var soundObj=e.data.response;
                trace(soundObj);
                break;
            case 'css':
                var cssObj= e.data.response;//css
                trace(cssObj);
                //document.querySelector('head').appendChild(cssObj);//插入css样式
                break;
            case 'video':
                break;
            case 'json':
                var jsonObj= e.data.response;//json对象
                trace(jsonObj[0].name);
                break;
            case 'xml':
                break;
            case 'svg':
                break;
            case 'text':
                var textObj= e.data.response;//text
                trace(textObj);
                break;
            case 'js':
                var jsObj= e.data.response;//js
                trace(jsObj);
                //document.querySelector('head').appendChild(jsData);//插入js
                break;
            default :
                trace('unknow');
                break;
        }

    }
};
F2xExtend(durlloader.Durlloader,F2xContainer);
durlloader.Durlloader.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new durlloader.F2xAuto_10();
	_d0.name="back_btn";
	s.back_btn=_d0;
	Flash2x.d(_d0,{x:35.3,y:97.95});
	var _d1=new durlloader.F2xAuto_7();
	_d1.name="tip_mc";
	s.tip_mc=_d1;
	var _d2=Flash2x.t(0,"output:",21,"#FFCC00","Arial",2,2,384.05,172.3,23,"left",false,false,"multiline");
	_d2.name="output_txt";
	s.output_txt=_d2;
	Flash2x.d(_d2,{x:188.05,y:185.75});
	var _d3=new durlloader.F2xAuto_5();
	_d3.name="unload_btn";
	s.unload_btn=_d3;
	Flash2x.d(_d3,{x:107.5,y:294.25});
	var _d4=new durlloader.F2xAuto_4();
	_d4.name="load_btn";
	s.load_btn=_d4;
	Flash2x.d(_d4,{x:107.5,y:201.25});
	var _d5=Flash2x.t(0,"output:",24,"#333333","Arial",2,2,100,26.85,26,"left",false,false,"single");
	Flash2x.d(_d5,{x:188.05,y:131});
	var _d6=new durlloader.F2xAuto_9();
	Flash2x.d(_d6,{o:0.8008});
	var _d7=new durlloader.F2xAuto_12();
	s.addChild(_d7);
	s.addChild(_d6);
	s.addChild(_d5);
	s.addChild(_d4);
	s.addChild(_d3);
	s.addChild(_d2);
	s.addChild(_d1);
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
