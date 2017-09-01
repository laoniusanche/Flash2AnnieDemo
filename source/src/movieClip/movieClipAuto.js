var movieClip=movieClip||{};
movieClip.monkey_walkcycle_normal=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();
};
F2xExtend(movieClip.monkey_walkcycle_normal,F2xMovieClip);
movieClip.monkey_walkcycle_normal.prototype.initUI=function(){
	var s = this;
	var mask1=new F2xMovieClip();
	var _d0=Flash2x.s({type:0,data:"Ay9S9Qn3n3AArGQAArGH3n3QH3n3LGAAQLHAAH3H3QH3H3AALGQAALHn3H2Qn3H4rHAAQrGAAn3n4g"},{type:0,color:"#000000"},null);
	var _d1=Flash2x.s({type:0,data:"Ay9S9Qn3n2AArHQAArGH3n3QH3n3LGAAQLHAAH3H3QH3H3AALGQAALGn3H3Qn3H4rHAAQrGAAn3n4g"},{type:0,color:"#000000"},null);
	var _d2=Flash2x.s({type:0,data:"Ay9S+Qn3n3AArHQAArGH3n3QH3n3LGAAQLHAAH3H3QH3H3AALGQAALHn3H3Qn3H3rHAAQrGAAn3n3g"},{type:0,color:"#000000"},null);
	var _d3=Flash2x.s({type:0,data:"Ay9S+Qn3n4AArGQAArGH3n3QH3n3LGAAQLHAAH3H3QH3H3AALGQAALGn3H4Qn3H3rHAAQrGAAn3n3g"},{type:0,color:"#000000"},null);
	var _d4=Flash2x.s({type:0,data:"Ay9S9Qn3n2AArHQAArGH3n3QH3n3LGAAQLHAAH3H3QH3H3AALGQAALHn3H2Qn3H4rHAAQrGAAn3n4g"},{type:0,color:"#000000"},null);
	var _d5=Flash2x.s({type:0,data:"Ay9S+Qn3n4AArGQAArGH3n3QH3n3LGAAQLHAAH3H3QH3H3AALGQAALHn3H3Qn3H3rHAAQrGAAn3n3g"},{type:0,color:"#000000"},null);
	var _d6=new movieClip.monkey_head_walkcycle();
	_d6.mask=mask1;
	var _d7=new movieClip.arm_armature();
	_d7.mask=mask1;
	var _d8=new movieClip.leg_armature();
	_d8.mask=mask1;
	var _d9=new movieClip.F2xAuto_0();
	_d9.mask=mask1;
	var _d10=new movieClip.monkey_body();
	_d10.mask=mask1;
	var _d11=new movieClip.leg_armature();
	_d11.mask=mask1;
	var _d12=new movieClip.arm_armature();
	_d12.mask=mask1;
	s.a().b(9).b(51).e("myTest");
	mask1.a().b(1).c(_d0,{x:-149.9,y:4.25}).b(1).c(_d1,{x:-142.6,y:1.621}).b(1).c(_d2,{x:-135.2,y:-1.007}).b(1).c(_d0,{x:-127.8,y:-3.636}).b(1).c(_d3,{x:-120.4,y:-6.264}).b(1).c(_d2,{x:-113.1,y:-8.893}).b(1).c(_d4,{x:-105.7,y:-11.52}).b(1).c(_d3,{x:-98.3,y:-14.15}).b(1).c(_d0,{x:-90.93,y:-16.78}).b(1).c(_d1,{x:-83.55,y:-19.41}).b(1).c(_d2,{x:-76.18,y:-22.04}).b(1).c(_d0,{x:-68.8,y:-24.66}).b(1).c(_d1,{x:-61.43,y:-27.29}).b(1).c(_d2,{x:-54.05,y:-29.92}).b(1).c(_d0,{x:-46.67,y:-32.55}).b(1).c(_d4,{x:-40.57,y:-25.08}).b(1).c(_d4,{x:-34.46,y:-17.61}).b(1).c(_d1,{x:-28.35,y:-10.13}).b(1).c(_d3,{x:-22.24,y:-2.663}).b(1).c(_d3,{x:-16.13,y:4.809}).b(1).c(_d3,{x:-10.02,y:12.28}).b(1).c(_d2,{x:-3.909,y:19.75}).b(1).c(_d2,{x:2.2,y:27.23}).b(1).c(_d5,{x:8.309,y:34.7}).b(1).c(_d0,{x:14.42,y:42.17}).b(1).c(_d0,{x:20.53,y:49.64}).b(1).c(_d0,{x:26.64,y:57.11}).b(1).c(_d4,{x:32.75,y:64.58}).b(1).c(_d1,{x:38.86,y:72.06}).b(1).c(_d1,{x:44.97,y:79.53}).b(1).c(_d3,{x:51.07,y:87}).b(1).c(_d1,{x:44.97,y:90.95}).b(1).c(_d4,{x:38.86,y:94.9}).b(1).c(_d0,{x:32.75,y:98.85}).b(1).c(_d0,{x:26.64,y:102.8}).b(1).c(_d0,{x:20.53,y:106.8}).b(1).c(_d2,{x:14.42,y:110.7}).b(1).c(_d2,{x:8.309,y:114.7}).b(1).c(_d3,{x:2.2,y:118.6}).b(1).c(_d3,{x:-3.909,y:122.6}).b(1).c(_d1,{x:-10.02,y:126.5}).b(1).c(_d4,{x:-16.13,y:130.5}).b(1).c(_d0,{x:-22.24,y:134.4}).b(1).c(_d0,{x:-28.35,y:138.4}).b(1).c(_d0,{x:-34.46,y:142.3}).b(1).c(_d2,{x:-40.57,y:146.3}).b(1).c(_d2,{x:-46.67,y:150.2}).b(1).c(_d1,{x:-54.62,y:139}).b(1).c(_d0,{x:-62.56,y:127.7}).b(1).c(_d3,{x:-70.5,y:116.5}).b(1).c(_d4,{x:-78.44,y:105.3}).b(1).c(_d5,{x:-86.39,y:94.07}).b(1).c(_d3,{x:-94.33,y:82.84}).b(1).c(_d4,{x:-102.3,y:71.61}).b(1).c(_d2,{x:-110.2,y:60.38}).b(1).c(_d3,{x:-118.2,y:49.16}).b(1).c(_d0,{x:-126.1,y:37.93}).b(1).c(_d2,{x:-134,y:26.7}).b(1).c(_d1,{x:-142,y:15.48}).b(1).c(_d0,{x:-149.9,y:4.25});
	s.a().b(60).c(_d6,{x:-210.3,y:-203.8}).g("loop",0,0);
	s.a().b(60).c(_d7,{x:23.9,y:30.25,a:0.847,b:0.847}).g("loop",0,0);
	s.a().b(60).c(_d8,{x:-80.65,y:137.3,a:0.8216,b:0.8291,c:-7.7079}).g("loop",6,0);
	s.a().b(60).c(_d9,{x:-34.85,y:114.4,a:0.8216,b:0.8216});
	s.a().b(60).c(_d10,{x:-56.6,y:4.85,a:0.8211,b:0.8211,r:-12.563});
	s.a().b(60).c(_d11,{x:-121.55,y:131.15,a:0.8216,b:0.8325,c:-9.2681}).g("loop",0,0).c(_d12,{x:-1.5,y:23.4,a:0.847,b:0.847}).g("loop",7,0);
};
movieClip.leg_armature=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();
};
F2xExtend(movieClip.leg_armature,F2xMovieClip);
movieClip.leg_armature.prototype.initUI=function(){
	var s = this;
	var _d0=new movieClip.monkey_leg_lower_right();
	var _d1=new movieClip.monkey_leg_right();
	var _d2=new movieClip.monkey_foot();
	var _d3=new movieClip.dummy();
	s.a().b(1).c(_d0,{x:115.8,y:53.6,a:1.031,b:1.041,c:-7.741,d:0.001696}).c(_d1,{x:99.2,y:2.65,a:1.0305,b:1.0403,c:-7.8122,d:0.0042}).c(_d2,{x:38.7,y:79.05,a:1.0309,b:1.0407,c:-7.7551,d:0.0025}).g("single frame",1,0).c(_d3,{x:107.9,y:136.2,a:0.9993,b:0.9993,r:-0.0017}).b(1).c(_d0,{x:123.5,y:52.75,a:1.0309,b:1.0407,c:-1.4073,d:6.3393}).c(_d1,{x:99.75,y:3.9,a:1.0304,b:1.0403,c:-13.0652,d:-5.2474}).c(_d2,{x:47.9,y:78.55,a:1.0309,b:1.0407,c:-7.4705,d:0.2901}).g("single frame",1,1).c(_d3,{x:116.75,y:136,a:0.9994,b:0.9994,r:0.2817}).b(1).c(_d0,{x:130.4,y:53.85,a:1.0309,b:1.0407,c:-11.9802,d:-4.2357}).c(_d1,{x:100.5,y:8.65,a:1.0304,b:1.0403,c:-20.9616,d:-13.1446}).c(_d2,{x:58.25,y:78.6,a:1.0308,b:1.0407,c:-7.6501,d:0.1094}).g("single frame",1,2).c(_d3,{x:127.35,y:135.85,a:0.9993,b:0.9993,r:0.1032}).b(1).c(_d0,{x:135.6,y:55.75,a:1.0309,b:1.0407,c:-23.026,d:-15.2828}).c(_d1,{x:99.25,y:13.7,a:1.0304,b:1.0403,c:-27.3829,d:-19.5664}).c(_d2,{x:70.55,y:78.9,a:1.0309,b:1.0407,c:-7.5068,d:0.2527}).g("single frame",1,3).c(_d3,{x:136.15,y:143.1,a:0.9993,b:0.9993,r:-39.3782}).b(1).c(_d0,{x:141.05,y:57.7,a:1.0309,b:1.0407,c:-32.3959,d:-24.6513}).c(_d1,{x:97.45,y:20.7,a:1.0304,b:1.0402,c:-34.3978,d:-26.5806}).c(_d2,{x:83.55,y:78.95,a:1.0308,b:1.0407,c:-7.7102,d:0.05}).g("single frame",1,4).c(_d3,{x:151.15,y:150.15,a:0.9993,b:0.9993,r:-79.2087}).b(1).c(_d0,{x:147.7,y:59.05,a:1.0309,b:1.0407,c:-37.0771,d:-29.3324}).c(_d1,{x:98.5,y:28.4,a:1.0305,b:1.0403,c:-42.0285,d:-34.211}).c(_d2,{x:93.95,y:78.85,a:1.0309,b:1.0406,c:-7.202,d:0.5564}).g("single frame",1,5).c(_d3,{x:166.9,y:155.3,a:0.9993,b:0.9993,r:-118.3283}).b(1).c(_d0,{x:153.5,y:59.15,a:1.0309,b:1.0406,c:-40.1591,d:-32.4114}).c(_d1,{x:100,y:35.05,a:1.0304,b:1.0403,c:-48.8625,d:-41.0461}).c(_d2,{x:102.4,y:79.3,a:1.0308,b:1.0407,c:-7.8976,d:-0.1365}).g("single frame",1,6).c(_d3,{x:170.05,y:150.35,a:0.9993,b:0.9993,r:-79.3973}).b(1).c(_d0,{x:158.5,y:58.8,a:1.0309,b:1.0406,c:-41.3743,d:-33.6247}).c(_d1,{x:101.75,y:41.7,a:1.0304,b:1.0402,c:-55.3169,d:-47.4985}).c(_d2,{x:110.2,y:79,a:1.0308,b:1.0407,c:-7.7662,d:-0.0051}).g("single frame",1,7).c(_d3,{x:176.1,y:142.65,a:0.9993,b:0.9993,r:-39.6368}).b(1).c(_d0,{x:175.55,y:52.1,a:1.0309,b:1.0407,c:-56.8638,d:-49.119}).c(_d1,{x:114.3,y:57,a:1.0304,b:1.0402,c:-74.7531,d:-66.9325}).c(_d2,{x:135.15,y:76.75,a:1.0308,b:1.0406,c:-13.3707,d:-5.6049}).g("single frame",1,8).c(_d3,{x:209.7,y:126.2,a:0.9993,b:0.9993,r:-5.6195}).b(1).c(_d0,{x:179.95,y:35.1,a:1.0309,b:1.0407,c:-74.853,d:-67.1103}).c(_d1,{x:121.65,y:56.6,a:1.0304,b:1.0403,c:-88.0978,d:-80.281}).c(_d2,{x:138.05,y:71,a:1.0309,b:1.0406,c:-30.2056,d:-22.4413}).g("single frame",1,9).c(_d3,{x:223.75,y:97.3,a:0.9993,b:0.9993,r:-22.4495}).b(1).c(_d0,{x:179.95,y:18.35,a:1.0309,b:1.0407,c:-93.0779,d:-85.3279}).c(_d1,{x:125.6,y:58.4,a:1.0304,b:1.0402,c:-97.8059,d:-89.9873}).c(_d2,{x:146.85,y:69.9,a:1.0307,b:1.0406,c:-48.093,d:-40.3311}).g("single frame",1,10).c(_d3,{x:235.8,y:68.25,a:0.9993,b:0.9993,r:-40.3409}).b(1).c(_d0,{x:162.55,y:37.4,a:1.0308,b:1.0406,c:-58.7048,d:-50.9573}).c(_d1,{x:99.9,y:17.75,a:1.0304,b:1.0403,c:-46.701,d:-38.8794}).c(_d2,{x:106.55,y:70.15,a:1.0308,b:1.0407,c:-19.9927,d:-12.2315}).g("single frame",1,11).c(_d3,{x:186.2,y:111.2,a:0.9993,b:0.9993,r:-12.2383}).b(1).c(_d0,{x:128.45,y:47.05,a:1.0309,b:1.0407,c:-4.7849,d:2.961}).c(_d1,{x:88.75,y:0.3,a:1.0304,b:1.0403,c:-17.8013,d:-9.985}).c(_d2,{x:55.4,y:36.55,a:1.0308,b:1.0407,c:20.4191,d:28.1806}).g("single frame",1,12).c(_d3,{x:89.3,y:119.4,a:0.9993,b:0.9993,r:28.1709}).b(1).c(_d0,{x:101.6,y:44.4,a:1.0309,b:1.0406,c:43.2229,d:50.9655}).c(_d1,{x:83.4,y:-10.2,a:1.0304,b:1.0403,c:3.6322,d:11.4514}).c(_d2,{x:33.9,y:-6.8,a:1.0309,b:1.0407,c:49.6565,d:57.4176}).g("single frame",1,13).c(_d3,{x:23,y:82.05,a:0.9993,b:0.9993,r:57.4096}).b(1).c(_d0,{x:105.9,y:51.75,a:1.0309,b:1.0406,c:40.7009,d:48.4434}).c(_d1,{x:83.95,y:-2.05,a:1.0304,b:1.0403,c:0.0975,d:7.9196}).c(_d2,{x:12,y:30.45,a:1.0308,b:1.0405,c:20.9846,d:28.7496}).g("single frame",1,14).c(_d3,{x:45.25,y:113.6,a:0.9993,b:0.9993,r:28.7425});
};
movieClip.monkey_leg_lower_right=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(movieClip.monkey_leg_lower_right,F2xContainer);
movieClip.monkey_leg_lower_right.prototype.initUI=function(){
	var s = this;
	var _d1=Flash2x.s({type:0,data:"AANDOQAQieBNjVAALjNQhZEFgbCW"},null,{type:0,color:"#000000",lineWidth:2,caps:"round",joints:"round",miter:"10"});
	Flash2x.d(_d1,{x:-2.075,y:7.4});
	var _d0=Flash2x.s({type:0,data:"AhpDAQAbiWBZkEQA/gOAgA2QhNDVgQCdQghAegeAAQgeAAgZgeg"},{type:0,color:"#8B4B0E"},null);
	Flash2x.d(_d0,{x:-2.075,y:8.7215});
	s.addChild(_d0);
	s.addChild(_d1);
};
movieClip.monkey_leg_right=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(movieClip.monkey_leg_right,F2xContainer);
movieClip.monkey_leg_right.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.b("movieClip","F2xAuto_22");
	Flash2x.d(_d0,{x:-6.6,y:-2});
	s.addChild(_d0);
};
movieClip.monkey_foot=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();
};
F2xExtend(movieClip.monkey_foot,F2xMovieClip);
movieClip.monkey_foot.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.s({type:0,data:"AiLCNQhWgwh6AAIA/gZQD6AIAUBWQDRhvl5gYQC7gmBZBOQB/hkkDgJIAYgOQCDgWBDA+QBOhojhAMIhYiJQB1gbEaAbIhEDGQgiA7g4A6QhXBahhBMIg3AXQgFhFhVgxg"},{type:0,color:"#339933"},null);
	var _d1=Flash2x.s({type:0,data:"AkoGHQhlgPhJhFIAAgBIAKiaQAGgzA/ggQA9ghBXAAQB6AABVAxQBUAwAEBGIgEABIgCABQhoAchJAAIgBAAIAAAAIgVAAIAVAAIAAAAIABAAQBJAABogcIACgBIAEgBIA6gXQBghMBYhbQA4g4Ahg8IAABnIj6E6IgXiGIAXCGQgRAQgXAMQhaAthjAHQgsAEgrAAQg4AAg5gHgAiMGBIgNiYIgCAAQgaACgWAAIgBAAIAAAAIgOgBIgIAAQhcgFgugKQAuAKBcAFIAIAAIAOABIAAAAIABAAQAWAAAagCIACAAgAlsFyIADgFIgDAFIAAiXIAACXgAmRDJQAPAJAWAJQgWgJgPgJQgugdgNgUQANAUAuAdgAlsFygACFE6gAi1AMQArgPArgTIARgFQF5AXjUBuQgThWj5gIgAhOgbIgRAFIAPgGQBQgjBAgkQEEAKh/BjQhYhNi7AogABXhwIAIgEQAkgWAKgaQDggNhOBoQhDg9iFAWgAAzktIgmg6QC1hNEVBNIgUA6Qkagch2Acg"},{type:0,color:"#FFFFFF"},null);
	var _d2=Flash2x.s({type:0,data:"AGljEQgLAdgQAdQgiA9g4A6QhXBYhhBMIg5AXABKiFQEFAJh/BmQhZhQi7AoQgIADgJADACXjHQDhgMhOBoQhDg+iFAWAiODGIAMCZAliC4QAvALBcAFQAfABAqgDQBRAFB8gjQgFhFhTgxQhWgwh6AAAnCB1QANAUAuAdQAPAJAWAJAnMEQIAAAAIABAAgAleFLIgEAFIAAiYAB4CRIAYCHAhEg+QF5AYjTBtQgUhUj4gIAA9lQQB3gbEZAb"},null,{type:0,color:"#000000",lineWidth:2,caps:"round",joints:"round",miter:"10"});
	var _d3=Flash2x.s({type:0,data:"AnVEzQBIBFBmAPQBjANBkgKQBjgHBagtQAXgMASgQID6k6IAAhnIBDjGIAUg6QkVhNi1BNIAmA6IBaCJQgKAagkAWQgEACgDACQgGADgSAKQhAAkhQAjQgHADgIADQgrATgqAPQgfAMggAMQhXAAg+AhQg9AggHAzIgKCa"},null,{type:0,color:"#000000",lineWidth:4,caps:"round",joints:"round",miter:"10"});
	var _d4=Flash2x.b("movieClip","F2xAuto_23");
	var _d5=Flash2x.s({type:0,data:"Aj8B8QA7A9ADAVQBBgjgqg+IAFgEQAwAlAFAVQBvgnhchIIATgWQA5AgAHATQClgoieg2IgDgBIAAAAIgSgGIiYg8IFIjRIBiECQiRCGkiC7g"},{type:0,color:"#339933"},null);
	var _d6=Flash2x.s({type:0,data:"AgXGiIn0ACIgGi8IBbAMIAACqIAAiqIhbgMQAylVGkC/ICchRIAFAKQBeBIhxAnQgGgVgvglIgFAEIgMgPIAMAPQAqA9hBAjQgCgUg6g9IgBgBIABABIBDClQEki6CSiGIBTBQIokGcgAjvGWIgMiDgAgiEWIgNAHIAWACIBHBLIhHhLIgJgJIArgeIgrAeIAAAAgAj6EKIABAAQBoALBiAIQhigIhogLIgBAAQhcgKhggMQBgAMBcAKgAoRDoIAAAAgAB5gJIA/ghIAIgMQCfA2imAnQgHgSg5gegAhNifIGHkEIAiBZIlKDRg"},{type:0,color:"#FFFFFF"},null);
	var _d7=Flash2x.s({type:0,data:"ACqg9IiYg8IhfgmIGHkEIAiBZIBjECIBTBQIokGcAgXGiIn0ACIgGi8QAylVGkC/ICchRIAYgKIA/gg"},null,{type:0,color:"#000000",lineWidth:4,caps:"round",joints:"round",miter:"10"});
	var _d8=Flash2x.s({type:0,data:"AA8iiIFKjSACQgcQBdBFhxAoQgFgVgwglACigzQA5AgAHATQCngoigg3AA2ALQAHAIAFAIQAqA9hBAjQgDgVg5g9IAAAAAAFDsQAXgOAXgPAAOD2QgKgBgJgBQAFgEAFgEIAJAKIBJBLAgRApIBECmQEki7CRiFAnnC/QAtAGAtAFIAACrAjRDqIALCDAgFD0QhigIhpgLIAAAAQhcgLhhgM"},null,{type:0,color:"#000000",lineWidth:2,caps:"round",joints:"round",miter:"10"});
	var _d9=Flash2x.s({type:0,data:"AkZB5Ig/gBIgBgLIgYinQAaABAbACQApA3gEAeQCoA8haiHIA1AGQAjAzgFAdQCfBPhIiMIAsAJQAbA1gEAZQCfBkhiilIgCgCIgLgMQgng2g0geIFSh9QBKD/hDC8QjxhJl6gcg"},{type:0,color:"#339933"},null);
	var _d10=Flash2x.s({type:0,data:"ApfBtIBcgPQBhgOBagIQBygJBwgBQhwABhyAJQhaAIhhAOIhcAPQAwl9GxCdIAYCnIAAAKIAAAAIABABIA/ABQAKBHAKA0QgKg0gKhHQF6AcDxBIQAiBngJA9QpokepAE+QgHhygOiJgAn2E5QgFhjgIh4QAIB4AFBjgAk3DpIgSiVIASCVgAEXAKQAEgXgbg3IBHARQAGgCAHAAQA9BkgnAAQgXAAg8glgAB7gPQAFgcgjg1QA5AIA8ALQAwBZgyAAQgbAAg6gbgAgkgZQAEghgpg2IBxAJQA/Bgg+AAQgcAAgxgSgABijBIHCilQAPApALAnIlUB9Qg7gihNgGg"},{type:0,color:"#FFFFFF"},null);
	var _d11=Flash2x.s({type:0,data:"AFSg1QgBgCgBgBQgGgGgFgHQgog2g2geQg7gihNgGIHDimQAOAqAMAnQBJEBhCC6QAiBngKA8QpnkepAE+QgIhygNiKQAvl9GyCeQAZAAAbADQA5AEA5AFQAaAEAaADQA6AHA7AMQAYAEAXAFQAiAIAkAJ"},null,{type:0,color:"#000000",lineWidth:4,caps:"round",joints:"round",miter:"10"});
	var _d12=Flash2x.s({type:0,data:"AFihGQBhCjifhiQAEgZgag3ADfheQBLCMiihNQAFgdgjg1AA2h3QBaCHing6QAFgggqg3AhYAuQAfAAAhABQAKBHAJA0AhYAjQgQhxgIg2AgYAvQF6AcDxBJAD3iqIFVh9AhYAtQhxABhyAJQhZAIhiAPQgsAGgwAIAk8BDQALBVAHBAAnpEoQgFhigIh4"},null,{type:0,color:"#000000",lineWidth:2,caps:"round",joints:"round",miter:"10"});
	var _d13=Flash2x.s({type:0,data:"AlYA8Ig/ABIgBgHIgCgmQgChFAUhEIAxAEQARA3gNA3QALAGAMACQCIAsgxiQIA0AMIAHBnQAMAGANAGQCFA2gviJIAuARIALBSQAnAlA3AAQACgCABgDQATgxgqgsIhkiPIG3BXIhNDpg"},{type:0,color:"#339933"},null);
	var _d14=Flash2x.s({type:0,data:"AphD8QgRgggNgjQgRgvgJgvIBdglIhdAlQAOkiEFg8QBDgPBFAIIBYAPQgTBDABBHIACAnIABAHIABAAIA+gCIA8BiIg8hiIKnBjIASB9Qjkg6jpgtQjZgri0B+QiPBkhtCKQgsg8gig9gAo8A2QAZBoA+BYIAaAlIgaglQg+hYgZhoIBZgmQCTg/CbgUQibAUiTA/IhZAmIAAAAgAkzB8IhViDgADfhUIgLhVIBHAaIAPgEQAqAugSAxQgBADgDACQg2AAgpglgABQhkQgNgGgMgHIgHhoIB2AfQAhBlg7AAQgXAAglgPgAhah/QgLgEgLgGQANg4gRg3IBxATQAkBwhGAAQgVAAgggKgADEkiIg7hSQELAcEGAzIgdBZg"},{type:0,color:"#FFFFFF"},null);
	var _d15=Flash2x.s({type:0,data:"AEqiTIhmiPIg7hSQELAcEGAzIgcBZIhNDqIASB9Qjkg6jpgtQjZgri0B+QiPBkhtCKQgsg8gig9QgRgggNgjQgRgvgJgvQAOkiEFg8QBDgPBFAIQAsAHAsAIIAyADIBxATIAzAMIB2AfIAuARIBHAa"},null,{type:0,color:"#000000",lineWidth:4,caps:"round",joints:"round",miter:"10"});
	var _d16=Flash2x.s({type:0,data:"ADiilIALBVQApAlA3AAQACgCABgDQATgxgqguAC0i2QAvCMiFg2QgNgGgMgHIgHhoAiXj3QgUBDACBHQAAATACAUAAKjhQAxCSiGgsQgMgEgLgGQANg4gRg3Aimg/IA/gCIA8BiAKMjIIm6hWAI/AiIqmhjAl6gDIBVCDAimg/QibAUiTA/QgtAUgsASQAZBoA+BYQAMASANATAqLBfIBegl"},null,{type:0,color:"#000000",lineWidth:2,caps:"round",joints:"round",miter:"10"});
	var _d17=Flash2x.s({type:0,data:"AlGCOIg9gRIAAgKQgJhjADhtIAsAVQAfBpgDAXQClBWhUi0IA0AMQAgBOgFAXQChBIhHiUIAuAGQAZBAgDATQCdBIhgiTIgCgCIgLgPQgvhZgxhMIG+A2QgfCIgxCPQhPAGhcAAQjMAAkKgcg"},{type:0,color:"#339933"},null);
	var _d18=Flash2x.s({type:0,data:"Ag9EXQk5gzkBi8QAFhbAWhUQCjkyENFZQgDBtAJBjQgBAFABAGIAAAAIA+AQQF9ApEEgSQASA6gJA8IiYAAInHgBgAhRELQgPhBgIg/QAIA/APBBgAl7CrQgBgeAAgdQAAgrADgqQgDAqAAArQAAAdABAegAl1ASQBjBDBsAmQhsgmhjhDIidhoICdBogAovBOQAIhUAVhQQgjgagngXQAnAXAjAaQgVBQgIBUgADYBWQAEgUgag/QAkAHAoACQACACAHgDQBBBigzAAQgZAAg0gXgAA6BIQAFgWgfhPIB0AZQAxBkg7AAQgbAAg1gYgAhkA1QADgWgfhpQAzAWA6AMQA3B5g3AAQgcAAg1gcgACoisQgggygggtQEGAiEKAnIgQBMg"},{type:0,color:"#FFFFFF"},null);
	var _d19=Flash2x.s({type:0,data:"AEXALQgBgBgBgBQgGgJgEgHQgyhZgwhMQghgygggtQEGAiEKAnQgIAmgIAmQgfCJgwCPQATA6gJA8QkyAAkugBQk5gzkBi8QAFhbAWhUQCjkyENFZQAVAKAXAMQAzAWA6AMQAYAGAaAFQA6ANA7AMQAWAEAYADQAkAHAoAC"},null,{type:0,color:"#000000",lineWidth:4,caps:"round",joints:"round",miter:"10"});
	var _d20=Flash2x.s({type:0,data:"AC9grQAaA+gFATQCgBIhhiRAhuBcQghgIgdgJAhuBcQAJA/AOBBAgZhYQBTC0ikhWQAEgVgfhrAiyiPQgDBvAJBhACOgzQBICUiihIQAFgXgfhOAJiilIm/g2AITByQkEASl9goAphi2QAmAWAkAaQgWBRgIBUAl+gSQgGBEAEBJAisBLQhsgmhjhAQhMg0hQg3"},null,{type:0,color:"#000000",lineWidth:2,caps:"round",joints:"round",miter:"10"});
	s.a().b(1).c(_d0,{x:57.5625,y:29.4691}).c(_d1,{x:47.2,y:35.1373}).c(_d2,{x:46.1875,y:38.5941}).c(_d3,{x:47.2,y:35.1373}).b(1).c(_d4,{x:-39.65,y:-8.25}).b(1).c(_d5,{x:34.7375,y:1.975}).c(_d6,{x:15.375,y:6.1}).c(_d7,{x:15.375,y:6.1}).c(_d8,{x:11.225,y:10.25}).b(1).c(_d9,{x:47.9846,y:13.8875}).c(_d10,{x:23.6787,y:19.6}).c(_d11,{x:23.9346,y:19.6}).c(_d12,{x:22.35,y:21.2875}).b(1).c(_d13,{x:48.7071,y:16.4}).c(_d14,{x:26.075,y:29.425}).c(_d15,{x:26.075,y:29.425}).c(_d16,{x:24.6375,y:29.025}).b(1).c(_d17,{x:51.6625,y:19.3144}).c(_d18,{x:29.55,y:19.5771}).c(_d19,{x:29.55,y:19.5771}).c(_d20,{x:30.125,y:24.3125});
};
movieClip.dummy=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(movieClip.dummy,F2xContainer);
movieClip.dummy.prototype.initUI=function(){
	var s = this;
	
};
movieClip.arm_armature=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();
};
F2xExtend(movieClip.arm_armature,F2xMovieClip);
movieClip.arm_armature.prototype.initUI=function(){
	var s = this;
	var _d0=new movieClip.monkey_hand();
	_d0.name="ikNode_68";
	s.ikNode_68=_d0;
	var _d1=new movieClip.monkeya2();
	_d1.name="ikNode_72";
	s.ikNode_72=_d1;
	var _d2=new movieClip.monkeya1();
	_d2.name="ikNode_74";
	s.ikNode_74=_d2;
	var _d3=new movieClip.dummy();
	s.a().b(1).c(_d0,{x:-22.6,y:160.7,a:0.9953,b:0.9953,r:113.4}).c(_d1,{x:-2.35,y:-3,a:0.9944,b:0.9944,c:-68.1219,d:111.8781}).c(_d2,{x:-3.75,y:6.25,a:0.9944,b:0.9944,c:-67.6946,d:112.3054}).c(_d3,{x:-106.85,y:231.05,a:0.9993,b:0.9993,r:36.6954}).b(1).c(_d0,{x:-21.5,y:161.1,a:0.9953,b:0.9953,r:113.4049}).c(_d1,{x:-2.35,y:-3,a:0.9943,b:0.9943,c:-68.5989,d:111.4011}).c(_d2,{x:-3.5,y:6.3,a:0.9944,b:0.9944,c:-68.1176,d:111.8824}).c(_d3,{x:-105.7,y:231.35,a:0.9993,b:0.9993,r:36.6877}).b(1).c(_d0,{x:-13.65,y:163.3,a:0.9953,b:0.9953,r:113.3499}).c(_d1,{x:-2.65,y:-2.9,a:0.9943,b:0.9943,c:-71.9354,d:108.0646}).c(_d2,{x:-2.65,y:6.4,a:0.9944,b:0.9944,c:-71.0949,d:108.9051}).c(_d3,{x:-96.9,y:233.9,a:0.9992,b:0.9992,r:36.6319}).b(1).c(_d0,{x:8,y:167.4,a:0.9953,b:0.9953,r:113.1977}).c(_d1,{x:-3.25,y:-2.5,a:0.9943,b:0.9943,c:-80.9911,d:99.0089}).c(_d2,{x:-0.1,y:6.5,a:0.9944,b:0.9944,c:-79.1724,d:100.8276}).c(_d3,{x:-72.45,y:238.8,a:0.9993,b:0.9993,r:36.4774}).b(1).c(_d0,{x:51.45,y:166.95,a:0.9952,b:0.9952,r:112.9012}).c(_d1,{x:-4.15,y:-1.05,a:0.9944,b:0.9944,c:-98.6268,d:81.3732}).c(_d2,{x:4.4,y:5.4,a:0.9944,b:0.9944,c:-94.9042,d:85.0958}).c(_d3,{x:-23.55,y:239.6,a:0.9993,b:0.9993,r:36.1803}).b(1).c(_d0,{x:64.75,y:147.7,a:0.9953,b:0.9953,r:71.1245}).c(_d1,{x:-3.7,y:-0.1,a:0.9943,b:0.9943,c:-106.3058,d:73.6942}).c(_d2,{x:12.1,y:2.95,a:0.9944,b:0.9944,c:-98.0201,d:81.9799}).c(_d3,{x:57.15,y:251.9,a:0.9993,b:0.9993,r:-5.5968}).b(1).c(_d0,{x:66.9,y:141.25,a:0.9953,b:0.9953,r:55.7332}).c(_d1,{x:-3.45,y:0.2,a:0.9943,b:0.9943,c:-109.1345,d:70.8655}).c(_d2,{x:14.8,y:1.7,a:0.9944,b:0.9944,c:-99.1688,d:80.8312}).c(_d3,{x:87.2,y:243.8,a:0.9993,b:0.9993,r:-20.9878}).b(1).c(_d0,{x:67.1,y:140.45,a:0.9952,b:0.9952,r:53.5345}).c(_d1,{x:-3.45,y:0.25,a:0.9944,b:0.9944,c:-109.5402,d:70.4598}).c(_d2,{x:15.25,y:1.5,a:0.9944,b:0.9944,c:-99.3327,d:80.6673}).c(_d3,{x:91.35,y:242.15,a:0.9993,b:0.9993,r:-23.1872}).b(1).c(_d0,{x:66,y:140.85,a:0.9953,b:0.9953,r:53.3847}).c(_d1,{x:-3.5,y:0.2,a:0.9944,b:0.9944,c:-109.0586,d:70.9414}).c(_d2,{x:14.8,y:1.85,a:0.9944,b:0.9944,c:-99.0244,d:80.9756}).c(_d3,{x:90.45,y:242.4,a:0.9993,b:0.9993,r:-23.3369}).b(1).c(_d0,{x:57.85,y:143.1,a:0.9953,b:0.9953,r:52.3441}).c(_d1,{x:-3.6,y:-0.05,a:0.9944,b:0.9944,c:-105.6855,d:74.3145}).c(_d2,{x:12.9,y:3.05,a:0.9944,b:0.9944,c:-96.8717,d:83.1283}).c(_d3,{x:84.2,y:244.2,a:0.9992,b:0.9992,r:-24.3765}).b(1).c(_d0,{x:35.3,y:147.3,a:0.9952,b:0.9952,r:49.5173}).c(_d1,{x:-3.55,y:-0.9,a:0.9944,b:0.9944,c:-96.5327,d:83.4673}).c(_d2,{x:7.2,y:5.55,a:0.9944,b:0.9944,c:-91.0314,d:88.9686}).c(_d3,{x:66.6,y:247.05,a:0.9993,b:0.9993,r:-27.2028}).b(1).c(_d0,{x:-9.8,y:147.25,a:0.9952,b:0.9952,r:44.0148}).c(_d1,{x:-3.15,y:-1.8,a:0.9944,b:0.9944,c:-78.7108,d:101.2892}).c(_d2,{x:-4.45,y:6.75,a:0.9944,b:0.9944,c:-79.6564,d:100.3436}).c(_d3,{x:30.85,y:243.6,a:0.9992,b:0.9992,r:-32.7075}).b(1).c(_d0,{x:-15.5,y:156.4,a:0.9953,b:0.9953,r:87.9888}).c(_d1,{x:-2.5,y:-1.75,a:0.9943,b:0.9943,c:-71.1674,d:108.8326}).c(_d2,{x:-4.25,y:7.05,a:0.9944,b:0.9944,c:-72.1114,d:107.8886}).c(_d3,{x:-59.1,y:254.6,a:0.9993,b:0.9993,r:11.2607}).b(1).c(_d0,{x:-20.3,y:160.6,a:0.9952,b:0.9952,r:104.1882}).c(_d1,{x:-2.2,y:-1.7,a:0.9943,b:0.9943,c:-68.3877,d:111.6123}).c(_d2,{x:-4.15,y:7.05,a:0.9944,b:0.9944,c:-69.3314,d:110.6686}).c(_d3,{x:-91.65,y:242.3,a:0.9993,b:0.9993,r:27.4592}).b(1).c(_d0,{x:-21.1,y:161.35,a:0.9952,b:0.9952,r:106.5017}).c(_d1,{x:-2.2,y:-1.55,a:0.9943,b:0.9943,c:-67.9893,d:112.0107}).c(_d2,{x:-4,y:7.2,a:0.9944,b:0.9944,c:-68.9325,d:111.0675}).c(_d3,{x:-95.95,y:239.8,a:0.9992,b:0.9992,r:29.7748});
};
movieClip.monkey_hand=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(movieClip.monkey_hand,F2xContainer);
movieClip.monkey_hand.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.b("movieClip","F2xAuto_19");
	Flash2x.d(_d0,{x:0.05,y:-1.1});
	s.addChild(_d0);
};
movieClip.monkeya2=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(movieClip.monkeya2,F2xContainer);
movieClip.monkeya2.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.b("movieClip","F2xAuto_21");
	Flash2x.d(_d0,{y:-0.25});
	s.addChild(_d0);
};
movieClip.monkeya1=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(movieClip.monkeya1,F2xContainer);
movieClip.monkeya1.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.b("movieClip","F2xAuto_20");
	Flash2x.d(_d0,{x:79.35,y:1.05});
	s.addChild(_d0);
};
movieClip.monkey_body=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(movieClip.monkey_body,F2xContainer);
movieClip.monkey_body.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.b("movieClip","F2xAuto_24");
	Flash2x.d(_d0,{x:-2,y:-2});
	s.addChild(_d0);
};
movieClip.F2xAuto_0=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(movieClip.F2xAuto_0,F2xContainer);
movieClip.F2xAuto_0.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.b("movieClip","F2xAuto_25");
	Flash2x.d(_d0,{x:1.55,y:-0.8});
	s.addChild(_d0);
};
movieClip.monkey_head_walkcycle=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();
};
F2xExtend(movieClip.monkey_head_walkcycle,F2xMovieClip);
movieClip.monkey_head_walkcycle.prototype.initUI=function(){
	var s = this;
	var _d0=new movieClip.monkey_head();
	s.a().b(1).c(_d0,{x:0.75,y:12.8,a:0.8205,b:0.8205,r:-2.308}).b(1).c(_d0,{x:0.75,y:15.75,a:0.8205,b:0.8205,r:-2.3076}).b(1).c(_d0,{x:0.75,y:18.35,a:0.8205,b:0.8205,r:-2.3076}).b(1).c(_d0,{x:0.75,y:20.5,a:0.8205,b:0.8205,r:-2.3076}).b(1).c(_d0,{x:0.75,y:21.75,a:0.8205,b:0.8205,r:-2.3076}).b(1).c(_d0,{x:0.75,y:20.85,a:0.8205,b:0.8205,r:-2.3076}).b(1).c(_d0,{x:0.75,y:19.45,a:0.8205,b:0.8205,r:-2.3076}).b(1).c(_d0,{x:0.75,y:18.05,a:0.8205,b:0.8205,r:-2.3076}).b(1).c(_d0,{x:0.75,y:16.7,a:0.8205,b:0.8205,r:-2.3076}).b(1).c(_d0,{x:0.75,y:15.55,a:0.8205,b:0.8205,r:-2.3076}).b(1).c(_d0,{x:0.75,y:14.55,a:0.8205,b:0.8205,r:-2.3076}).b(1).c(_d0,{x:0.75,y:13.75,a:0.8205,b:0.8205,r:-2.3076}).b(1).c(_d0,{x:0.75,y:13.2,a:0.8205,b:0.8205,r:-2.3076}).b(1).c(_d0,{x:0.75,y:12.85,a:0.8205,b:0.8205,r:-2.3076}).b(1).c(_d0,{x:0.75,y:12.75,a:0.8205,b:0.8205,r:-2.3076});
};
movieClip.monkey_head=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(movieClip.monkey_head,F2xContainer);
movieClip.monkey_head.prototype.initUI=function(){
	var s = this;
	var _d0=new movieClip.F2xAuto_1();
	Flash2x.d(_d0,{x:90.15,y:127.2});
	var _d1=Flash2x.b("movieClip","F2xAuto_17");
	Flash2x.d(_d1,{x:-2,y:-1});
	s.addChild(_d1);
	s.addChild(_d0);
};
movieClip.F2xAuto_1=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();
};
F2xExtend(movieClip.F2xAuto_1,F2xMovieClip);
movieClip.F2xAuto_1.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.b("movieClip","F2xAuto_7");
	var _d1=Flash2x.b("movieClip","F2xAuto_8");
	s.a().b(25).b(5).c(_d0).c(_d1,{x:82.75,y:0.35});
};
movieClip.F2xAuto_6=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();
};
F2xExtend(movieClip.F2xAuto_6,F2xMovieClip);
movieClip.F2xAuto_6.prototype.initUI=function(){
	var s = this;
	var _d0=new movieClip.F2xAuto_5();
	s.a().b(1).c(_d0,{x:49.35,y:-16.4}).b(1).c(_d0,{x:17.1,y:15.35}).b(1).c(_d0,{x:-9.45,y:52.25}).b(1).c(_d0,{x:-29.55,y:93.05}).b(1).c(_d0,{x:-41.9,y:136.1}).b(1).c(_d0,{x:-41,y:180.9}).b(1).c(_d0,{x:-22.9,y:222.55}).b(1).c(_d0,{x:8.45,y:255.35}).b(1).c(_d0,{x:48.35,y:276.8}).b(1).c(_d0,{x:92.15,y:285.9}).b(1).c(_d0,{x:136.85,y:280.3}).b(1).c(_d0,{x:176.55,y:258.35}).b(1).c(_d0,{x:209.8,y:227.45}).b(1).c(_d0,{x:246.7,y:201.1}).b(1).c(_d0,{x:284.6,y:176.05}).b(1).c(_d0,{x:321.3,y:149.25}).b(1).c(_d0,{x:356.65,y:120.7}).b(1).c(_d0,{x:386.4,y:87.85}).b(1).c(_d0,{x:394,y:44}).b(1).c(_d0,{x:374.4,y:3.1}).b(1).c(_d0,{x:336,y:-19.65}).b(1).c(_d0,{x:290.75,y:-22.1}).b(1).c(_d0,{x:245.9,y:-16.05}).b(1).c(_d0,{x:202.9,y:-1.45}).b(1).c(_d0,{x:163.5,y:20.9}).b(1).c(_d0,{x:129.35,y:50.6}).b(1).c(_d0,{x:102.45,y:87.25}).b(1).c(_d0,{x:83.75,y:128.75}).b(1).c(_d0,{x:71.2,y:171}).b(1).c(_d0,{x:81.3,y:214.05}).b(1).c(_d0,{x:113.6,y:246.1}).b(1).c(_d0,{x:157.2,y:260.9}).b(1).c(_d0,{x:201.8,y:269.35}).b(1).c(_d0,{x:246.2,y:278.75}).b(1).c(_d0,{x:290.4,y:289.1}).b(1).c(_d0,{x:334.35,y:300.45}).b(1).c(_d0,{x:378.1,y:312.8}).b(1).c(_d0,{x:421.15,y:327.2}).b(1).c(_d0,{x:460.7,y:348.45}).b(1).c(_d0,{x:493.55,y:379.55}).b(1).c(_d0,{x:516.4,y:418.8}).b(1).c(_d0,{x:518.5,y:462.55}).b(1).c(_d0,{x:488.25,y:495.65}).b(1).c(_d0,{x:444.8,y:508.25}).b(1).c(_d0,{x:399.25,y:507.85}).b(1).c(_d0,{x:353.8,y:506.95}).b(1).c(_d0,{x:308.35,y:505.9}).b(1).c(_d0,{x:263,y:504.55}).b(1).c(_d0,{x:217.55,y:502.8}).b(1).c(_d0,{x:172.1,y:502.15});
};
movieClip.F2xAuto_5=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(movieClip.F2xAuto_5,F2xContainer);
movieClip.F2xAuto_5.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.s({type:0,data:"AiJCKQg5g6AAhQQAAhPA5g6QA6g5BPAAQBQAAA6A5QA5A6AABPQAABQg5A6Qg6A5hQAAQhPAAg6g5g"},{type:0,color:"#FF0000"},null);
	Flash2x.d(_d0,{x:19.55,y:19.55});
	s.addChild(_d0);
};
movieClip.F2xAuto_2=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();
};
F2xExtend(movieClip.F2xAuto_2,F2xMovieClip);
movieClip.F2xAuto_2.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.b("movieClip","F2xAuto_14");
	var _d1=Flash2x.b("movieClip","F2xAuto_15");
	var _d2=Flash2x.s({type:0,data:"AnoEcIAAo4IPSAAIAAI4g"},{type:0,color:"#333333"},null);
	s.a().b(2);
	s.a().b(1).c(_d0).b(1).c(_d1);
	s.a().b(2).c(_d2,{x:38,y:26.7});
	s.as(function(){this.stop();}.bind(this),0);
};
movieClip.F2xAuto_3=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();
};
F2xExtend(movieClip.F2xAuto_3,F2xMovieClip);
movieClip.F2xAuto_3.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.b("movieClip","F2xAuto_18");
	var _d1=Flash2x.b("movieClip","F2xAuto_16");
	var _d2=Flash2x.s({type:0,data:"AqSEcIAAo4IUlAAIAAI4g"},{type:0,color:"#333333"},null);
	s.a().b(2);
	s.a().b(1).c(_d0).b(1).c(_d1);
	s.a().b(2).c(_d2,{x:55,y:26.7});
	s.as(function(){this.stop();}.bind(this),0);
};
movieClip.F2xAuto_4=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();
};
F2xExtend(movieClip.F2xAuto_4,F2xMovieClip);
movieClip.F2xAuto_4.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.b("movieClip","F2xAuto_13");
	var _d1=Flash2x.b("movieClip","F2xAuto_12");
	s.a().b(2);
	s.a().b(1).b(1).c(_d0,{x:12.8,y:14.15});
	s.a().b(2).c(_d1);
	s.as(function(){this.stop();}.bind(this),0);
};
