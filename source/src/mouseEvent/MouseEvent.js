var mouseEvent = mouseEvent || {};
mouseEvent.MouseEvent = function () {
    var s = this;
    F2xContainer.call(s);
    s.initUI();
    s.mouseEvent_btn.addEventListener(annie.MouseEvent.MOUSE_DOWN, function (e) {
        s.mouseDown_txt.text = "X:" + e.stageY + "Y:" + e.stageY;
    });
    s.mouseEvent_btn.addEventListener(annie.MouseEvent.MOUSE_UP, function (e) {
        s.mouseUp_txt.text = "X:" + e.stageY + "Y:" + e.stageY;
    });
    s.mouseEvent_btn.addEventListener(annie.MouseEvent.MOUSE_MOVE, function (e) {
        s.mouseMove_txt.text = "X:" + e.stageY + "Y:" + e.stageY;
    })
};
F2xExtend(mouseEvent.MouseEvent, F2xContainer);
mouseEvent.MouseEvent.prototype.initUI = function () {
    var s = this;
    //f2x_auto_created_init_start
    var _d0 = Flash2x.t(0, decodeURI("%E9%BC%A0%E6%A0%87%E6%8C%89%E4%B8%8B%E7%A7%BB%E5%8A%A8%E4%BD%8D%E7%BD%AE%EF%BC%9A"), 25, "#000000", "Microsoft YaHei", 2, 2, 228.8, 33, 27, "left", false, true, "multiline", false);
    Flash2x.d(_d0, {x: 84, y: 489.1});
    var _d1 = new mouseEvent.F2xAuto_1();
    _d1.name = "mouseEvent_btn";
    s.mouseEvent_btn = _d1;
    Flash2x.d(_d1, {x: 86.9, y: 613});
    var _d4 = Flash2x.t(0, decodeURI(""), 25, "#000000", "Microsoft YaHei", 2, 2, 260.05, 78.95, 27, "left", false, true, "multiline", false);
    _d4.name = "mouseMove_txt";
    s.mouseMove_txt = _d4;
    Flash2x.d(_d4, {x: 316.65, y: 501});
    var _d3 = Flash2x.t(0, decodeURI(""), 25, "#000000", "Microsoft YaHei", 2, 2, 244.4, 79.4, 27, "left", false, true, "multiline", false);
    _d3.name = "mouseUp_txt";
    s.mouseUp_txt = _d3;
    Flash2x.d(_d3, {x: 283.5, y: 361.55});
    var _d2 = Flash2x.t(0, decodeURI("%E9%BC%A0%E6%A0%87%E6%8A%AC%E8%B5%B7%E4%BD%8D%E7%BD%AE%EF%BC%9A"), 25, "#000000", "Microsoft YaHei", 2, 2, 185.7, 33, 27, "left", false, true, "multiline", false);
    Flash2x.d(_d2, {x: 87.9, y: 358.6});
    var _d6 = Flash2x.t(0, decodeURI(""), 25, "#000000", "Microsoft YaHei", 2, 2, 274.3, 87.85, 27, "left", false, true, "multiline", false);
    _d6.name = "mouseDown_txt";
    s.mouseDown_txt = _d6;
    Flash2x.d(_d6, {x: 277.7, y: 243.15});
    var _d5 = Flash2x.t(0, decodeURI("%E9%BC%A0%E6%A0%87%E6%8C%89%E4%B8%8B%E4%BD%8D%E7%BD%AE%EF%BC%9A"), 25, "#000000", "Microsoft YaHei", 2, 2, 195.5, 33, 27, "left", false, true, "multiline", false);
    Flash2x.d(_d5, {x: 84, y: 243.15});
    var _d7 = new mouseEvent.F2xAuto_0();
    s.addChild(_d7);
    s.addChild(_d5);
    s.addChild(_d6);
    s.addChild(_d2);
    s.addChild(_d3);
    s.addChild(_d4);
    s.addChild(_d1);
    s.addChild(_d0);
    //f2x_auto_created_init_end

};
