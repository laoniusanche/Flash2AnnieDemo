var dresmanager=dresmanager||{};
dresmanager.Dresmanager=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
    //yours_code_here

    var resManager;
    s.addEventListener(annie.Event.ADD_TO_STAGE, initStage, false);
    /**
     * 初始化
     * @param e
     */
    function initStage(e) {
        s.removeEventListener(annie.Event.ADD_TO_STAGE, initStage);
        s.back_btn.addEventListener(annie.MouseEvent.CLICK, backHomeHandler);
        s.tip_mc.addEventListener('onMouseDown', hideTipLayerHandler);

        s.ajax_btn.addEventListener('onMouseDown', ajaxHandler);
        s.loadscene_btn.addEventListener('onMouseDown', loadSceneHandler);
        s.unloadscene_btn.addEventListener('onMouseDown', unloadSceneHandler);
        s.getname_btn.addEventListener('onMouseDown', getMediaByNameHandler);
    }

    /**
     * 返回范例列表
     * @param e
     */
    function backHomeHandler(e) {
        var backHomeEvent = new annie.Event('backHomeEvent');
        backHomeEvent.origin = 'dresmanager';
        globalDispatcher.dispatchEvent(backHomeEvent);
    }
    /**
     * 隐藏提示浮层
     * @param e
     */
    function hideTipLayerHandler(e) {
        s.tip_mc.removeEventListener('onMouseDown', hideTipLayerHandler);
        s.tip_mc.visible = false;
    }

    /**
     * ajax请求
     * @param e
     */
    function ajaxHandler(e) {
        annie.RESManager.ajax({
            url         : 'resource/dresmanager/dresmanager.res.json',
            type        : 'get',
            data        : {},
            responseType: 'json',
            success     : function (rs) {
                trace(rs);
            },
            error       : function (rs) {
                trace(rs);
            }
        })
        s.output_txt.text = 'ajax请求';
    }

    /**
     * 加载logo场景资源
     * @param e
     */
    function loadSceneHandler(e) {
        if(!Flash2x.isLoadedScene('logo')){
            Flash2x.loadScene("logo",function(per){
                //加载进度
                console.log("加载进度:"+per+"%");
            },function(){
                //加载完成
                s.addChild(new logo.Logo());
            });
            s.output_txt.text = '加载logo场景资源';
        }
    }

    /**
     * 移除logo场景资源,以方便系统垃圾回收
     * @param e
     */
    function unloadSceneHandler(e) {
        Flash2x.unLoadScene('logo');
        s.output_txt.text = '删除logo场景资源,以方便系统垃圾回收';
    }

    /**
     * 获取logo场景，声音对象
     * @param e
     */
    function getMediaByNameHandler(e) {
        if(Flash2x.isLoadedScene('logo')){
            var resource=Flash2x.getMediaByName("logo",'music');
            trace(resource.media.src);
            s.output_txt.text = '资源地址：'+resource.media.src;
        }else{
            alert('未找到相关资源，或您已unLoadScene()相关资源');
        }
    }
};
F2xExtend(dresmanager.Dresmanager,F2xContainer);
dresmanager.Dresmanager.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new dresmanager.F2xAuto_12();
	_d0.name="back_btn";
	s.back_btn=_d0;
	Flash2x.d(_d0,{x:35.3,y:77.95});
	var _d1=new dresmanager.F2xAuto_9();
	_d1.name="tip_mc";
	s.tip_mc=_d1;
	var _d2=Flash2x.t(0,"output:",21,"#FFCC00","Arial",2,2,384.05,172.3,23,"left",false,false,"multiline");
	_d2.name="output_txt";
	s.output_txt=_d2;
	Flash2x.d(_d2,{x:188.05,y:165.75});
	var _d3=new dresmanager.F2xAuto_7();
	_d3.name="getname_btn";
	s.getname_btn=_d3;
	Flash2x.d(_d3,{x:73.7,y:323.5});
	var _d4=new dresmanager.F2xAuto_6();
	_d4.name="unloadscene_btn";
	s.unloadscene_btn=_d4;
	Flash2x.d(_d4,{x:81.2,y:393.3});
	var _d5=new dresmanager.F2xAuto_5();
	_d5.name="ajax_btn";
	s.ajax_btn=_d5;
	Flash2x.d(_d5,{x:87,y:184});
	var _d6=new dresmanager.F2xAuto_4();
	_d6.name="loadscene_btn";
	s.loadscene_btn=_d6;
	Flash2x.d(_d6,{x:87,y:253.75});
	var _d7=Flash2x.t(0,"output:",24,"#333333","Arial",2,2,100,26.85,26,"left",false,false,"single");
	Flash2x.d(_d7,{x:188.05,y:111});
	var _d8=new dresmanager.F2xAuto_11();
	Flash2x.d(_d8,{o:0.8008});
	var _d9=new dresmanager.F2xAuto_14();
	s.addChild(_d9);
	s.addChild(_d8);
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
