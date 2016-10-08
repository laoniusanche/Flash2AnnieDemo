/**
 * @author anlun214 QQ:58529016
 */
var F2xExtend = __extends;
window.addEventListener("load", function () {
    var stage = null,
        demoObj = null,
        loadObj = null;
    /**
     * 最上层div的id,可以在一个页面同时放多个stage.
     * 设计尺寸的宽
     * 设计尺寸的高
     * FPS刷新率
     * 缩放模式
     * 渲染模式
     */
    if (annie.osType == "pc") {
        stage = new annie.Stage("annieEngine", 640, 1040, 30, annie.StageScaleMode.FIXED_HEIGHT, 0);
    }
    else {
        annie.debug = true;
        stage = new annie.Stage("annieEngine", 640, 1040, 30, annie.StageScaleMode.FIXED_WIDTH, 0);
    }
    stage.addEventListener(annie.Event.INIT_TO_STAGE, function (e) {
        Flash2x.loadScene("loading", function (per) {
            //加载进度
            //console.log("加载进度:" + per + "%");
        }, function () {
            //加载完成
            loadObj = new loading.Loading();
            stage.addChild(loadObj);
            Flash2x.loadScene(["home"], function (per) {
                console.log("加载进度:" + per + "%");
                loadObj.per_txt.text = per + "%";
            }, function () {
                loadObj.visible = false;
                stage.addChild(new home.Home());
            });
        });
    });


    /*侦听demo事件*/
    globalDispatcher.addEventListener('showDemoEvent', function (e) {
        var demoName = e.demoName;
        Flash2x.loadScene(demoName, function (per) {
            loadObj.visible = true;
            stage.addChild(loadObj);
            loadObj.y = 0;
            loadObj.per_txt.text = per + "%";
            console.log("加载进度:" + per + "%");
        }, function () {
            //var className=demoName.slice(0,1).toUpperCase()+demoName.slice(1);
            //trace(className);
            //stage.addChild(new demoName[className]());
            //stage.addChild(new dstage.Dstage());
            loadObj.visible = false;
            //annie.Tween.to(loadObj,.4,{alpha:0,onComplete:hideHandler});
            switch (demoName) {
                case "dstage":
                    demoObj = new dstage.Dstage();
                    break;
                case 'dsprite':
                    demoObj = new dsprite.Dsprite();
                    break;
                case 'dmovieclip':
                    demoObj = new dmovieclip.Dmovieclip();
                    break;
                case 'dbitmap':
                    demoObj = new dbitmap.Dbitmap();
                    break;
                case 'dshape':
                    demoObj = new dshape.Dshape();
                    break;
                case 'dTextField':
                    demoObj = new dTextField.DTextField();
                    break;
                case 'dInputText':
                    demoObj = new dInputText.DInputText();
                    break;
                case 'dfloatdisplay':
                    demoObj = new dfloatdisplay.Dfloatdisplay();
                    break;
                case 'dvideoplayer':
                    demoObj = new dvideoplayer.Dvideoplayer();
                    break;
                case 'ddisplayobject':
                    demoObj = new ddisplayobject.Ddisplayobject();
                    break;
                case 'devent':
                    demoObj = new devent.Devent();
                    break;
                case 'deventdispatcher':
                    demoObj = new deventdispatcher.Deventdispatcher();
                    break;
                case 'dmouseevent':
                    demoObj = new dmouseevent.Dmouseevent();
                    break;
                case 'dfilter':
                    demoObj = new dfilter.Dfilter();
                    break;
                case 'durlloader':
                    demoObj = new durlloader.Durlloader();
                    break;
                case 'dsound':
                    demoObj = new dsound.Dsound();
                    break;
                case 'dtween':
                    demoObj = new dtween.Dtween();
                    break;
                case 'dresmanager':
                    demoObj = new dresmanager.Dresmanager();
                    break;
                case 'dscrollpage':
                    demoObj = new dscrollpage.Dscrollpage();
                    break;
                case 'dfacephoto':
                    demoObj = new dfacephoto.Dfacephoto();
                    break;
                case 'dglobaldispatcher':
                    demoObj = new dglobaldispatcher.Dglobaldispatcher();
                    break;
            }
            stage.addChild(demoObj);
            demoObj.y = 0;
        })
    });
    /*侦听返回home示例列表事件*/
    globalDispatcher.addEventListener('backHomeEvent', function (e) {
        //var demoName = e.origin;
        stage.removeChild(demoObj);
        demoObj=null;
    })

});