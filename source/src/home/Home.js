var home=home||{};
home.Home=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
	s.addEventListener(annie.Event.ADD_TO_STAGE, function (e) {
		s.title_mc.y = s.stage.viewRect.y;
	});
	// s.title_mc.mouseChildren=false;
    s.classList = [];
    s.classList.push({name: "annie.URLLoader", scene: "urlLoader",classObj:"urlLoader.UrlLoader",title:"加载示例"});
    s.classList.push({name: "annie.Shape", scene: "shapeColor",classObj:"shapeColor.ShapeColor",title:"矢量示例"});
    s.classList.push({name: "annie.Input", scene: "input",classObj:"input.Input",title:"输入文本示例"});
    s.classList.push({name: "annie.FloatDisplay", scene: "saveImg",classObj:"saveImg.SaveImg",title:"配合Html标签示例"});
    s.classList.push({name: "annie.MovieClip", scene: "movieClip",classObj:"movieClip.MovieClip",title:"动画示例"});
    s.classList.push({name: "stage.MultiTouch", scene: "multTouch",classObj:"multTouch.MultTouch",title:"多点手势示例"});
    s.classList.push({name: "annieUI.FacePhoto", scene: "facePhoto",classObj:"facePhoto.FacePhoto",title:"加载头像示例"});
    s.classList.push({name: "annieUI.FlipBook", scene: "flipBook",classObj:"flipBook.FlipBook",title:"电子杂志示例"});
    s.classList.push({name: "annieUI.DrawingBoard", scene: "drawingBoard",classObj:"drawingBoard.DrawingBoard",title:"画板示例"});
    s.classList.push({name: "annieUI.ScratchCard", scene: "scratchCard",classObj:"scratchCard.ScratchCard",title:"刮刮卡示例"});
    s.classList.push({name: "annieUI.ScrollList", scene: "scrollList",classObj:"scrollList.ScrollList",title:"滚动列表示例"});
    s.classList.push({name: "annieUI.ScrollPage", scene: "scrollPage",classObj:"scrollPage.ScrollPage",title:"长页滚动示例"});
    s.classList.push({name: "annieUI.SlidePage", scene: "slidePage",classObj:"slidePage.SlidePage",title:"滑动翻页示例"});
    s.addEventListener(annie.MouseEvent.CLICK, function (e) {
        if(!e.target.title_txt)return;
        if (e.target.title_txt.text == ""){
            alert(e.target.title_txt.text + "还在开发中,敬请期待!");
        }else{
            globalDispatcher.dispatchEvent("onChangeContent",e.target.data);
        }
    });
	var sl=new annieUI.ScrollList(home.ItemButton,640,100,640,1040-96);
    sl.updateData(s.classList);
    sl.y=108;
    sl.x=56;
    s.addChild(sl);
};
F2xExtend(home.Home,F2xContainer);
home.Home.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new home.F2xAuto_4();
	_d0.name="title_mc";
	s.title_mc=_d0;
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
