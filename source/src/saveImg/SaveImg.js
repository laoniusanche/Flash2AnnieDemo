var saveImg = saveImg || {};
saveImg.SaveImg = function () {
    var s = this;
    F2xContainer.call(s);
    s.initUI();
    var code1 = new annie.FloatDisplay();
    //找到Image标签内容将他赋值给FloatDisplay,这个对不是SpriteSheet里的小图有用
    code1.init(Flash2x.b("saveImg", "CodeImg1").bitmapData);
    code1.x = 179.5;
    code1.y = 527;
    s.addChild(code1);
    var code2 = new annie.FloatDisplay();
    //找到Image标签内容将他赋值给FloatDisplay,这个对是SpriteSheet里的合成图有用
    var img = annie.Bitmap.convertToImage(Flash2x.b("saveImg", "CodeImg2"));
    img.onload = function () {
        code2.init(img);
        code2.x = 179;
        code2.y = 174;
        s.addChild(code2);
    }
};
F2xExtend(saveImg.SaveImg, F2xContainer);
saveImg.SaveImg.prototype.initUI = function () {
    var s = this;
    //f2x_auto_created_init_start
    var _d1 = Flash2x.b("saveImg", "F2xAuto_2");
    Flash2x.d(_d1, {x: 144, y: 798});
    var _d0 = Flash2x.b("saveImg", "F2xAuto_1");
    Flash2x.d(_d0, {x: 103, y: 444.4});
    s.addChild(_d0);
    s.addChild(_d1);
    //f2x_auto_created_init_end

};
