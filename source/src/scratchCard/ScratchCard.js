/**
 * 刮刮卡类demo
 * @author 小可 QQ:58529016
 */
var scratchCard = scratchCard || {};
scratchCard.ScratchCard = function () {
    //注意本demo 在Flash2x 3.1.1及以上版本才支持
    var s = this;
    F2xContainer.call(s);
    s.initUI();
    //注意本demo 在Flash2x 3.1.1及以上版本才支持
    var img = annie.Bitmap.convertToImage(Flash2x.b("scratchCard", "Logo"), false);
    var sc=new annieUI.ScratchCard(200,200,"#999",annie.Shape.getBitmapStyle(img));
    sc.addEventListener("onDrawTime",function (e) {
        trace("第一张图已经刮了"+e.data.per+"%");
    });
    s.addChild(sc);
    sc.x=220;
    sc.y=150;
    //注意本demo 在Flash2x 3.1.1及以上版本才支持
    var img1 = annie.Bitmap.convertToImage(Flash2x.b("scratchCard", "Two"), false);
    var img2 = annie.Bitmap.convertToImage(Flash2x.b("scratchCard", "One"), false);
    var db2 = new annieUI.ScratchCard(512, 512, annie.Shape.getBitmapStyle(img2),annie.Shape.getBitmapStyle(img1));
    //注意本demo 在Flash2x 3.1.1及以上版本才支持
    s.addChild(db2);
    db2.x = 60;
    db2.y = 400;
    db2.addEventListener("onDrawTime",function (e) {
        trace("第二张图已经刮了"+e.data.per+"%");
    });
    //注意本demo 在Flash2x 3.1.1及以上版本才支持
};
F2xExtend(scratchCard.ScratchCard, F2xContainer);
scratchCard.ScratchCard.prototype.initUI = function () {
    var s = this;
    //f2x_auto_created_init_start
	var _d0=Flash2x.t(0,decodeURI("%E5%88%86%E5%88%AB%E5%9C%A8%E4%B8%A4%E4%B8%AA%E6%96%B9%E5%9D%97%E4%B8%8A%E6%BB%91%E5%8A%A8%E7%9C%8B%E6%95%88%E6%9E%9C"),24,"#333333","Heiti SC",2,2,394.9,24,26,"center",false,false,"multiline",false);
	Flash2x.d(_d0,{x:120.5,y:943});
	s.addChild(_d0);
	//f2x_auto_created_init_end
};
