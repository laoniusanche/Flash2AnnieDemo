var home=home||{};
home.ItemButton=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();
	s.initButton();
};
F2xExtend(home.ItemButton,F2xMovieClip);
home.ItemButton.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=Flash2x.t(0,"舞台",32,"#FFFFFF","Arial",2,2,412.1,44.8,34,"center",false,false,"single");
	_d0.name="title_txt";
	s.title_txt=_d0;
	var _d1=Flash2x.s({type:0,data:"EgpFAHLIAAuWMBSLAAAIAAOWg"},{type:0,color:"#666666"},null);
	var _d2=Flash2x.s({type:0,data:"EgpFgHLMBSLAAAIAAOXMhSLAAAg"},null,{type:0,color:"#000000",lineWidth:4});
	var _d3=Flash2x.s({type:0,data:"EgpFAHLIAAuWMBSLAAAIAAOWg"},{type:0,color:"#333333"},null);
	s.a().b(2).c(_d0,{x:62,y:21.05});
	s.a().b(1).c(_d1,{x:263.05,y:46}).c(_d2,{x:263.05,y:46}).b(1).c(_d3,{x:263.05,y:46}).c(_d2,{x:263.05,y:46});
	//f2x_auto_created_init_end
	
};
