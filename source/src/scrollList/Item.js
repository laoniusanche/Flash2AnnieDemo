var scrollList=scrollList||{};
scrollList.Item=function(){
	//这个类非常重要，类名可以随便启，但是这个类作为ScrollList的item类，需要有几个地方特别注意
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(scrollList.Item,F2xContainer);
//一定要有这个属性
scrollList.Item.prototype.id=0;
//一定要有这个属性
scrollList.Item.prototype.data=null;
//一定要实现这个方法
scrollList.Item.prototype.initData=function(id,data){
    var s=this;
    s.id=id;
    s.data=data;
    if(data) {
        s.coin_txt.text = data.coin;
        s.distance_txt.text = data.distance;
        s.nickName_txt.text = data.nickName;
    }
};
scrollList.Item.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=Flash2x.t(0,decodeURI(""),15,"#FFD282","Arial",2,2,95.5,19.8,12.5,"left",false,false,"single",false);
	_d0.name="nickName_txt";
	s.nickName_txt=_d0;
	Flash2x.d(_d0,{x:33.5,y:11.8});
	var _d1=Flash2x.t(0,decodeURI(""),15,"#FFFFFF","Arial",2,2,110.5,23.75,12.5,"left",false,false,"single",false);
	_d1.name="distance_txt";
	s.distance_txt=_d1;
	Flash2x.d(_d1,{x:145.45,y:9.1});
	var _d2=Flash2x.t(0,decodeURI(""),15,"#FFFFFF","Arial",2,2,50.3,23.75,12.5,"right",false,false,"single",false);
	_d2.name="coin_txt";
	s.coin_txt=_d2;
	Flash2x.d(_d2,{x:247.1,y:10.6});
	var _d3=Flash2x.b("scrollList","F2xAuto_0");
	s.addChild(_d3);
	s.addChild(_d2);
	s.addChild(_d1);
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
