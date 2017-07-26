var json = json || {};
json.Json = function () {
    var s = this;
    F2xContainer.call(s);
    s.initUI();
    Flash2x.jsonp('testData.js', 1, 'jsonHandler', function (result) {
        s.message = result;
    });
    var nowtext = null;
    //点击事件后，判断按钮当前帧数，再判断select选择框当前选择的文本信息
    s.switch1.addEventListener(annie.MouseEvent.CLICK, function (e) {
        if (s.switch1.currentFrame == 1) {
            s.switch1.gotoAndStop(2);
            if (nowtext == 2) {
                s.name.text = s.message.name2;
            } else {
                s.name.text = s.message.name1;
            }
        } else {
            s.switch1.gotoAndStop(1);
            s.name.text = "";
        }
    });
    s.switch2.addEventListener(annie.MouseEvent.CLICK, function (e) {
        if (s.switch2.currentFrame == 1) {
            s.switch2.gotoAndStop(2);
            if (nowtext == 2) {
                s.phone.text = s.message.phone2;
            } else {
                s.phone.text = s.message.phone1;
            }
        } else {
            s.switch2.gotoAndStop(1);
            s.phone.text = "";
        }
    });
    s.switch3.addEventListener(annie.MouseEvent.CLICK, function (e) {
        if (s.switch3.currentFrame == 1) {
            s.switch3.gotoAndStop(2);
            if (nowtext == 2) {
                s.hobby.text = s.message.hobby2;
            } else {
                s.hobby.text = s.message.hobby1;
            }
        } else {
            s.switch3.gotoAndStop(1);
            s.hobby.text = "";
        }
    });
    s.switch4.addEventListener(annie.MouseEvent.CLICK, function (e) {
        if (s.switch4.currentFrame == 1) {
            s.news.state.gotoAndStop(2);
            var imgEle = new Image();
            imgEle.onload = function (e) {
                var bitmap = new annie.Bitmap(imgEle);
                var w = e.target.width;
                var h = e.target.height;
                var radio = 250 / w;
                // console.log(radio)
                bitmap.scaleY = bitmap.scaleX = radio;
                // bitmap.y= -(h*radio-250)/2+10;
                s.news.addChild(bitmap);
            };
            if (nowtext == 2) {
                imgEle.src = s.message.photo2;
            } else {
                imgEle.src = s.message.photo1;
            }
            s.switch4.gotoAndStop(2);
        } else {
            s.switch4.gotoAndStop(1);
            s.news.state.gotoAndStop(1);
            s.news.removeChildAt(1);
        }
    });
    var float = new annie.FloatDisplay();
    var select = document.getElementById("city");
    select.style.width = "180px";
    select.style.height = "40px";
    select.style.fontSize = "20px";
    float.init(select);
    float.x = 200;
    float.y = 200;
    s.addChild(float);
    //将html  select选择框添加到舞台
    select.onchange = function (e) {
        var index = select.selectedIndex;
        nowtext = select.options[index].text;
        if (s.switch4.currentFrame == 2) {
            s.news.removeChildAt(1);
        }
        s.switch1.gotoAndStop(1);
        s.name.text = "";
        s.switch2.gotoAndStop(1);
        s.phone.text = "";
        s.switch3.gotoAndStop(1);
        s.hobby.text = "";
        s.switch4.gotoAndStop(1);
        s.news.state.gotoAndStop(1);
    }
    //select选择框发生改变时，获取选择的index，按钮初始化，内容清空
};
F2xExtend(json.Json, F2xContainer);
json.Json.prototype.initUI = function () {
    var s = this;
    //f2x_auto_created_init_start
    var _d1 = Flash2x.t(0, decodeURI("%E8%AF%B7%E9%80%89%E6%8B%A9%E4%BF%A1%E6%81%AF%EF%BC%9A"), 25, "#000000", "Microsoft YaHei", 2, 2, 193.1, 33, 27, "left", false, true, "multiline", false);
    Flash2x.d(_d1, {x: 155.3, y: 144.2});
    var _d0 = Flash2x.s({
        type: 0,
        data: "AyVzsMAksAAAIAAFKMgksAAAgAyVjQMAksAAAIAAFIMgksAAAgAyVOjMAksAAAIAAFKMgksAAAg"
    }, null, {type: 0, color: "#000000", lineWidth: 1, caps: "round", joints: "round", miter: "10"});
    Flash2x.d(_d0, {x: 360.9, y: 840.1});
    var _d8 = Flash2x.t(0, decodeURI(""), 22, "#000000", "Microsoft YaHei", 2, 2, 231, 29.05, 24, "left", false, true, "single", false);
    _d8.name = "hobby";
    s.hobby = _d8;
    Flash2x.d(_d8, {x: 243.4, y: 933.2});
    var _d7 = Flash2x.t(0, decodeURI(""), 22, "#000000", "Microsoft YaHei", 2, 2, 231, 29.05, 24, "left", false, true, "single", false);
    _d7.name = "phone";
    s.phone = _d7;
    Flash2x.d(_d7, {x: 243.4, y: 819.1});
    var _d6 = Flash2x.t(0, decodeURI(""), 22, "#000000", "Microsoft YaHei", 2, 2, 231, 29.05, 24, "left", false, true, "single", false);
    _d6.name = "name";
    s.name = _d6;
    Flash2x.d(_d6, {x: 243.4, y: 713.9});
    var _d5 = Flash2x.t(0, decodeURI("%E7%88%B1%E5%A5%BD%EF%BC%9A"), 22, "#000000", "Microsoft YaHei", 2, 2, 66.2, 29.05, 24, "left", false, true, "multiline", false);
    Flash2x.d(_d5, {x: 152.4, y: 933.2});
    var _d4 = Flash2x.t(0, decodeURI("%E6%89%8B%E6%9C%BA%EF%BC%9A"), 22, "#000000", "Microsoft YaHei", 2, 2, 66.2, 29.05, 24, "left", false, true, "multiline", false);
    Flash2x.d(_d4, {x: 152.4, y: 817.1});
    var _d3 = Flash2x.t(0, decodeURI("%E5%A7%93%E5%90%8D%EF%BC%9A"), 22, "#000000", "Microsoft YaHei", 2, 2, 66.2, 29.05, 24, "left", false, true, "multiline", false);
    Flash2x.d(_d3, {x: 152.4, y: 712.9});
    var _d2 = new json.F2xAuto_4();
    _d2.name = "news";
    s.news = _d2;
    Flash2x.d(_d2, {x: 160, y: 272.15});
    var _d10 = Flash2x.t(0, decodeURI("%E8%8E%B7%E5%8F%96%E5%9B%BE%E7%89%87:"), 22, "#000000", "Microsoft YaHei", 2, 2, 97.35, 29.05, 24, "left", false, true, "multiline", false);
    Flash2x.d(_d10, {x: 152.4, y: 545});
    var _d9 = new json.F2xAuto_3();
    _d9.name = "switch4";
    s.switch4 = _d9;
    Flash2x.d(_d9, {x: 287.55, y: 549.3, a: 0.999});
    var _d12 = Flash2x.t(0, decodeURI("%E8%8E%B7%E5%8F%96%E7%88%B1%E5%A5%BD:"), 22, "#000000", "Microsoft YaHei", 2, 2, 97.35, 29.05, 24, "left", false, true, "multiline", false);
    Flash2x.d(_d12, {x: 152.4, y: 880});
    var _d11 = new json.F2xAuto_3();
    _d11.name = "switch3";
    s.switch3 = _d11;
    Flash2x.d(_d11, {x: 287.5, y: 884.5, a: 1.0007});
    var _d14 = Flash2x.t(0, decodeURI("%E8%8E%B7%E5%8F%96%E6%89%8B%E6%9C%BA:"), 22, "#000000", "Microsoft YaHei", 2, 2, 97.35, 29.05, 24, "left", false, true, "multiline", false);
    Flash2x.d(_d14, {x: 152.4, y: 767.15});
    var _d13 = new json.F2xAuto_3();
    _d13.name = "switch2";
    s.switch2 = _d13;
    Flash2x.d(_d13, {x: 289, y: 770.65, a: 1.0012});
    var _d16 = Flash2x.t(0, decodeURI("%E8%8E%B7%E5%8F%96%E5%A7%93%E5%90%8D:"), 22, "#000000", "Microsoft YaHei", 2, 2, 97.35, 29.05, 24, "left", false, true, "multiline", false);
    Flash2x.d(_d16, {x: 152.4, y: 646.3});
    var _d15 = new json.F2xAuto_3();
    _d15.name = "switch1";
    s.switch1 = _d15;
    Flash2x.d(_d15, {x: 290.05, y: 653.4, a: 1.0007});
    var _d17 = new json.F2xAuto_7();
    s.addChild(_d17);
    s.addChild(_d15);
    s.addChild(_d16);
    s.addChild(_d13);
    s.addChild(_d14);
    s.addChild(_d11);
    s.addChild(_d12);
    s.addChild(_d9);
    s.addChild(_d10);
    s.addChild(_d2);
    s.addChild(_d3);
    s.addChild(_d4);
    s.addChild(_d5);
    s.addChild(_d6);
    s.addChild(_d7);
    s.addChild(_d8);
    s.addChild(_d0);
    s.addChild(_d1);
    //f2x_auto_created_init_end

};
