var scrollList=scrollList||{};
scrollList.ScrollList=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
	s.dataCount=0;
	//生成2行的数据，当然你也可以生成其他行的
    var sl=new annieUI.ScrollList(scrollList.Item,300,50,600,800,true,2);
    s.addChild(sl);
    sl.y=120;
    sl.updateData(s.getData());
    sl.addEventListener(annie.Event.ON_SCROLL_TO_END,function (e) {
        trace("end");
		//读取数据，这里可以向后台请求数据。我这里只是模拟
        sl.updateData(s.getData());
    });
    sl.addEventListener(annie.Event.ON_SCROLL_START,function (e) {
        trace("start");
    });
    sl.addEventListener(annie.Event.ON_SCROLL_STOP,function (e) {
        trace("stop");
    });
    sl.addEventListener(annie.Event.ON_SCROLL_TO_HEAD,function (e) {
        trace("head");
    });
};
F2xExtend(scrollList.ScrollList,F2xContainer);
scrollList.ScrollList.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=Flash2x.t(0,decodeURI("%E5%88%97%E8%A1%A8%E7%BB%84%E4%BB%B6%EF%BC%8C%E5%BD%93%E7%84%B6%E4%B9%9F%E5%8F%AF%E4%BB%A5%E5%B7%A6%E5%8F%B3%E6%BB%91%EF%BC%8C%E6%88%96%E8%80%851%E5%88%97%EF%BC%8C%E5%A4%9A%E5%88%97"),24,"#333333","Arial",2,2,520.4,26.85,26,"center",false,false,"multiline",false);
	Flash2x.d(_d0,{x:57.8,y:943});
	s.addChild(_d0);
	//f2x_auto_created_init_end
};
scrollList.ScrollList.prototype.getData=function () {
	var s=this;
	var dataList=[];
	for(var i=0;i<30;i++){
        dataList.push({nickName:"小可",coin:Math.random()*10000>>0,distance:Math.random()*20000>>0} );
        // s.dataCount++;
    }
	return dataList;
}