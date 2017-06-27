var home = home || {};
home.Content = function () {
    var s = this;
    this.initUI();
    annieUI.ScrollList.call(home.ItemButton,640,100,640,1040-96);
    s.classList = [];
    s.classList.push({name: "annie.Stage", scene: "dstage"});
    s.classList.push({name: "annie.Sprite", scene: "dsprite"});
    s.classList.push({name: "annie.MovieClip", scene: "dmovieclip"});
    s.classList.push({name: "annie.Bitmap", scene: "dbitmap"});
    s.classList.push({name: "annie.Shape", scene: "dshape"});
    s.classList.push({name: "annie.TextField", scene: "dTextField"});
    s.classList.push({name: "annie.InputText", scene: "dInputText"});
    s.classList.push({name: "annie.FloatDisplay", scene: "dfloatdisplay"});
    s.classList.push({name: "annie.VideoPlayer", scene: "dvideoplayer"});
    s.classList.push({name: "annie.DisplayObject", scene: "ddisplayobject"});
    s.classList.push({name: "annie.Event", scene: "devent"});
    s.classList.push({name: "annie.EventDispatcher", scene: "deventdispatcher"});
    s.classList.push({name: "annie.MouseEvent", scene: "dmouseevent"});
    s.classList.push({name: "annie.Filters", scene: "dfilter"});
    s.classList.push({name: "annie.URLLoader", scene: "durlloader"});
    s.classList.push({name: "annie.Sound", scene: "dsound"});
    s.classList.push({name: "annie.Tween", scene: "dtween"});
    s.classList.push({name: "annie.RESManager", scene: "dresmanager"});
    s.classList.push({name: "annie.ScrollPage", scene: "dscrollpage"});
    s.classList.push({name: "annie.FacePhoto", scene: "dfacephoto"});
    s.classList.push({name: "globalDispatcher", scene: "dglobaldispatcher"});
    // this.addEventListener(annie.MouseEvent.CLICK, function (e) {
    //     if(!e.target.scene)return;
    //     if (e.target.scene == ""){
    //         alert(e.target.title_txt.text + "还在开发中,敬请期待!");
    //     }else{
    //         var showDemoEvent=new annie.Event('showDemoEvent');
    //         showDemoEvent.demoName= e.target.scene;
    //         globalDispatcher.dispatchEvent(showDemoEvent);
    //     }
    // }.bind(this));
    // s.maxDistance = this.classList.length * 100 + 10;
    s.updateData(s.classList);
};
F2xExtend(home.Content, annieUI.ScrollPage);
home.Content.prototype.initUI = function () {
    var s = this;
    //f2x_auto_created_init_start
	
	//f2x_auto_created_init_end

};
