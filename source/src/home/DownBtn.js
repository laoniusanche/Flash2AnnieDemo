var home=home||{};
home.DownBtn=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
	s.addEventListener(annie.MouseEvent.CLICK,function (e) {
        window.open("https://github.com/flash2x/Flash2AnnieDemo");
    })
};
F2xExtend(home.DownBtn,F2xContainer);
home.DownBtn.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=Flash2x.b("home","F2xAuto_6");
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
