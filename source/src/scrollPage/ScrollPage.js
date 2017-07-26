var scrollPage=scrollPage||{};
scrollPage.ScrollPage=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
	var sp=new annieUI.ScrollPage(640,1040);
	var pageList=[scrollPage.Page1,scrollPage.Page2,scrollPage.Page3,scrollPage.Page4,scrollPage.Page5];
	for(var i=0;i<5;i++){
		var p=new pageList[i];
		p.y=i*1040;
        sp.view.addChild(p);
	}
	sp.maxDistance=1040*pageList.length;
	s.addChildAt(sp,0);
	sp.addEventListener(annie.Event.ON_SCROLL_START,function (e) {
        trace(e.type);
    });
    sp.addEventListener(annie.Event.ON_SCROLL_STOP,function (e) {
        trace(e.type);
    });
    sp.addEventListener(annie.Event.ON_SCROLL_TO_HEAD,function (e) {
        trace(e.type);
    });
    sp.addEventListener(annie.Event.ON_SCROLL_TO_END,function (e) {
		trace(e.type);
    });
};
F2xExtend(scrollPage.ScrollPage,F2xContainer);
scrollPage.ScrollPage.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=Flash2x.t(0,decodeURI("%E6%BB%9A%E5%8A%A8%E7%BB%84%E4%BB%B6%EF%BC%8C%E5%BD%93%E7%84%B6%E4%B9%9F%E5%8F%AF%E4%BB%A5%E5%B7%A6%E5%8F%B3%E6%BB%91%EF%BC%8C%E6%88%96%E8%80%85%E4%B8%8D%E5%85%A8%E5%B1%8F%E5%8C%BA%E5%9F%9F"),24,"#333333","Arial",2,2,520.4,26.85,26,"center",false,false,"multiline",false);
	Flash2x.d(_d0,{x:57.8,y:943});
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
