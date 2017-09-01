var slidePage=slidePage||{};
slidePage.SlidePage=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
	var arrow=new slidePage.Arrow();
	arrow.mouseEnable=false;
    var sp=new annieUI.SlidePage(640,1040);
    // sp.canSlideNext=false;
    // sp.canSlidePrev=false;
    sp.addEventListener(annie.Event.ON_SLIDE_START,function (e) {
        sp.canSlideNext=false;
        sp.canSlidePrev=false;
        arrow.visible=false;
        trace("start");
    });
    sp.addEventListener(annie.Event.ON_SLIDE_END,function (e) {
        if(sp.currentPageIndex<4) {
            arrow.visible = true;
        }
        sp.canSlideNext=true;
        sp.canSlidePrev=true;
        trace("stop");
    });
    var arr=[slidePage.Page1,slidePage.Page2,slidePage.Page3,slidePage.Page4,slidePage.Page5]
    sp.addPageList(arr);
    s.addChildAt(sp,0);
    s.addChildAt(arrow,1);
};
F2xExtend(slidePage.SlidePage,F2xContainer);
slidePage.SlidePage.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=Flash2x.t(0,decodeURI("%E7%BF%BB%E9%A1%B5%E7%BB%84%E4%BB%B6%EF%BC%8C%E5%BD%93%E7%84%B6%E4%B9%9F%E5%8F%AF%E4%BB%A5%E5%B7%A6%E5%8F%B3%E6%BB%91%EF%BC%8C%E6%88%96%E8%80%85%E4%B8%8D%E5%85%A8%E5%B1%8F%E5%8C%BA%E5%9F%9F"),24,"#333333","Arial",2,2,520.4,26.85,26,"center",false,false,"multiline",false);
	Flash2x.d(_d0,{x:57.8,y:943});
	s.addChild(_d0);
	//f2x_auto_created_init_end
};
