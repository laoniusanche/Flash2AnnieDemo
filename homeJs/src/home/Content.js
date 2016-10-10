var home = home || {};
home.Content = function () {
    var s = this;
    annieUI.ScrollPage.call(s, 640, 0, 0);
    this.classList = [];
    this.classList.push({name: "annie.Stage", scene: "dstage"});
    this.classList.push({name: "annie.Sprite", scene: "dsprite"});
    this.classList.push({name: "annie.MovieClip", scene: "dmovieclip"});
    this.classList.push({name: "annie.Bitmap", scene: "dbitmap"});
    this.classList.push({name: "annie.Shape", scene: "dshape"});
    this.classList.push({name: "annie.TextField", scene: "dTextField"});
    this.classList.push({name: "annie.InputText", scene: "dInputText"});
    this.classList.push({name: "annie.FloatDisplay", scene: "dfloatdisplay"});
    this.classList.push({name: "annie.VideoPlayer", scene: "dvideoplayer"});
    this.classList.push({name: "annie.DisplayObject", scene: "ddisplayobject"});
    this.classList.push({name: "annie.Event", scene: "devent"});
    this.classList.push({name: "annie.EventDispatcher", scene: "deventdispatcher"});
    this.classList.push({name: "annie.MouseEvent", scene: "dmouseevent"});
    this.classList.push({name: "annie.Filters", scene: "dfilter"});
    this.classList.push({name: "annie.URLLoader", scene: "durlloader"});
    this.classList.push({name: "annie.Sound", scene: "dsound"});
    this.classList.push({name: "annie.Tween", scene: "dtween"});
    this.classList.push({name: "annie.RESManager", scene: "dresmanager"});
    this.classList.push({name: "annie.ScrollPage", scene: "dscrollpage"});
    this.classList.push({name: "annie.FacePhoto", scene: "dfacephoto"});
    this.classList.push({name: "globalDispatcher", scene: "dglobaldispatcher"});
    this.addEventListener(annie.Event.ADD_TO_STAGE, function (e) {
        this.initUI();
        this.setMask(640, this.stage.viewRect.height - 96);
        this.y = this.stage.viewRect.y + 100;
    }.bind(this));
    this.addEventListener(annie.MouseEvent.CLICK, function (e) {
        if(!e.target.scene)return;
        if (e.target.scene == "") {
            alert(e.target.title_txt.text + "还在开发中,敬请期待!");
        }else{
            var showDemoEvent=new annie.Event('showDemoEvent');
            showDemoEvent.demoName= e.target.scene;
            globalDispatcher.dispatchEvent(showDemoEvent);
        }
    }.bind(this));
};
F2xExtend(home.Content, annieUI.ScrollPage);
home.Content.prototype.initUI = function () {
    var s = this;
    //f2x_auto_created_init_start
	
	//f2x_auto_created_init_end
    for (var i = 0; i < this.classList.length; i++) {
        var b = new home.ItemButton();
        b.title_txt.text = this.classList[i].name + " 演示";
        b["scene"] = this.classList[i].scene;
        b.x = 60;
        b.y = i * 100 + 10;
        this.view.addChild(b);
    }
    s.maxDistance = this.classList.length * 100 + 10;
};
