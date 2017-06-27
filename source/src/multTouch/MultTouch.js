var multTouch=multTouch||{};
multTouch.MultTouch=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
    s.addEventListener(annie.Event.ADD_TO_STAGE,function (e) {
    	s.stage.isMultiTouch=true;
        s.stage.addEventListener(annie.TouchEvent.ON_MULTI_TOUCH,function (evt) {
            s.test_mc.rotation+=evt.rotate;
            s.test_mc.scaleY+=evt.scale;
            s.test_mc.scaleX+=evt.scale;
        });
    });
	s.addEventListener(annie.Event.REMOVE_TO_STAGE,function (e) {
		s.stage.isMultiTouch=false;
		s.removeAllEventListener();
    })
}
F2xExtend(multTouch.MultTouch,F2xContainer);
multTouch.MultTouch.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d1=Flash2x.t(0,decodeURI("%E4%B8%A4%E4%B8%AA%E6%89%8B%E6%8C%87%E6%97%8B%E8%BD%AC%E5%92%8C%E7%BC%A9%E6%94%BE"),24,"#000000","Arial",2,2,520.4,33.6,26,"center",false,false,"multiline",false);
	Flash2x.d(_d1,{x:57.8,y:941});
	var _d0=new multTouch.F2xAuto_0();
	_d0.name="test_mc";
	s.test_mc=_d0;
	Flash2x.d(_d0,{x:320,y:520});
	s.addChild(_d0);
	s.addChild(_d1);
	//f2x_auto_created_init_end
	
};
