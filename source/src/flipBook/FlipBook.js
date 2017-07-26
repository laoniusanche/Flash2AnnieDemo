var flipBook=flipBook||{};
flipBook.FlipBook=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
    var flip=new annieUI.FlipBook(320,640,7,function (index) {
        var p=null;
        if(index%2==0){
            p=new flipBook.OnePage();
        }else{
            p=new flipBook.TwoPage();
        }
        p.page_txt.text="第"+index+"页";
        return p;
    });
    flip.addEventListener(annie.Event.ON_FLIP_START,function (e) {
        trace("开始翻页");
    });
    flip.addEventListener(annie.Event.ON_FLIP_STOP,function (e) {
        trace("停止翻页")
    });
    //通过设置 canFlip 为false 让杂志自身无法执行翻页效果
    flip.flipTo(2);
    s.addChild(flip);
    flip.y=200;
    s.addEventListener(annie.Event.ADD_TO_STAGE,function (e) {
        s.stage.addEventListener(annie.MouseEvent.CLICK,function (e) {
        	if(e.stageX>320) {
                // flip.nextPage();
            }else{
                // flip.prevPage();
			}
        })
    });

};
F2xExtend(flipBook.FlipBook,F2xContainer);
flipBook.FlipBook.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=Flash2x.t(0,decodeURI("%E7%94%B5%E5%AD%90%E6%9D%82%E5%BF%97%E7%BB%84%E4%BB%B6%E9%A1%B5%E6%95%B0%E5%BF%85%E9%A1%BB%E4%B8%BA%E5%81%B6%E6%95%B0"),24,"#333333","Arial",2,2,394.9,26.85,26,"center",false,false,"multiline",false);
	Flash2x.d(_d0,{x:120.6,y:943});
	s.addChild(_d0);
	//f2x_auto_created_init_end
};
