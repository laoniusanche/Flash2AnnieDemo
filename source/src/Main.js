/**
 * @author anlun214 QQ:58529016
 */
var F2xExtend=__extends;
window.addEventListener("load",function(){
    annie.debug=false;
    /**
     * 最上层div的id,可以在一个页面同时放多个stage.
     * 设计尺寸的宽
     * 设计尺寸的高
     * FPS刷新率
     * 缩放模式
     * 渲染模式
     */
    var stage=new annie.Stage("annieEngine",640,1040,30,annie.StageScaleMode.FIXED_HEIGHT,0);
    stage.autoResize=true;
    stage.autoSteering=true;
    stage.addEventListener(annie.Event.INIT_TO_STAGE,function () {
        Flash2x.loadScene(["loading","home"],function(per){
        // Flash2x.loadScene(["scratchCard","flipBook","scrollList","scrollPage","slidePage","facePhoto","drawingBoard"],function(per){
            //加载进度
            trace("加载进度:"+per+"%");
        },function(result){
            //加载完成 result 里包含了当前加载完成的是哪个场景序号，以及总加载场景数有多少，所以
            //需要同时加载多个模块时可以判断已经加载好的后直接出内容，其他偷偷在后台加载
            if(result.sceneId==result.sceneTotal) {
                // stage.addChild(new flipBook.FlipBook());
                // stage.addChild(new scrollList.ScrollList());
                // stage.addChild(new scratchCard.ScratchCard());
                // stage.addChild(new slidePage.SlidePage());
                // stage.addChild(new scrollPage.ScrollPage());
                // stage.addChild(new facePhoto.FacePhoto());
                // stage.addChild(new drawingBoard.DrawingBoard());
                var homeObj=new home.Home();
                var backBtn=new home.BackBtn();
                var titleMc=new home.TitleMc();
                var loadObj=new loading.Loading();
                stage.addChild(homeObj);
                globalDispatcher.addEventListener("onChangeContent",function (ge) {
                    titleMc.title_txt.text=ge.data.title;
                    if(Flash2x.isLoadedScene(ge.data.scene)){
                        //remove Loading
                        stage.removeAllChildren();
                        stage.addChild(annie.Eval("new "+ge.data.classObj));
                        stage.addChild(titleMc);
                        stage.addChild(backBtn);
                    }else{
                        //show Loading
                        stage.removeAllChildren();
                        stage.addChild(loadObj);
                        loadObj.per_txt.text="0%";
                        Flash2x.loadScene(ge.data.scene,function (progress) {
                            loadObj.per_txt.text=progress+"%";
                        },function (e) {
                            //remove Loading
                            stage.removeAllChildren();
                            stage.addChild(annie.Eval("new "+ge.data.classObj));
                            stage.addChild(titleMc);
                            stage.addChild(backBtn);
                        })
                    }
                });
                backBtn.addEventListener(annie.MouseEvent.CLICK,function (e) {
                    stage.removeAllChildren();
                    stage.addChild(homeObj);
                })
            }
        });
    })
});
