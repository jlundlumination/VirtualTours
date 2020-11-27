// Garden Gnome Software - Skin
// Pano2VR 6.1.9/17985
// Filename: ChatswoodHS-Redesign-Mandarin.ggsk
// Generated 2020-11-27T14:31:29

function pano2vrSkin(player,base) {
	player.addVariable('opt_hotspot_preview', 2, true);
	player.addVariable('opt_zoom', 2, true);
	player.addVariable('opt_autorotate', 2, false);
	player.addVariable('opt_info', 2, false);
	player.addVariable('opt_thumbnail', 2, true);
	player.addVariable('vis_thumbnail_menu_show', 2, true);
	player.addVariable('opt_thumbnail_tooltip', 2, true);
	player.addVariable('opt_projection', 2, false);
	player.addVariable('opt_gyro', 2, true);
	player.addVariable('opt_fullscreen', 2, true);
	player.addVariable('opt_loader', 2, true);
	player.addVariable('opt_loader_mulires', 2, true);
	player.addVariable('opt_url', 2, false);
	player.addVariable('opt_autohide', 2, false);
	player.addVariable('vis_userdata', 2, false);
	player.addVariable('vis_close_buton', 2, false);
	player.addVariable('vis_image_popup', 2, false);
	player.addVariable('vis_info_popup', 2, false);
	player.addVariable('vis_video_popup_file', 2, false);
	player.addVariable('vis_video_popup_url', 2, false);
	player.addVariable('vis_video_popup_vimeo', 2, false);
	player.addVariable('vis_video_popup_youtube', 2, false);
	player.addVariable('vis_website', 2, false);
	player.addVariable('vis_thumbnail_menu_mobile', 2, false);
	player.addVariable('vis_thumbnail_menu_auto_hide', 2, true);
	player.addVariable('vis_timer', 2, false);
	player.addVariable('vis_360image_once', 2, true);
	player.addVariable('vis_loader', 2, true);
	player.addVariable('pos_zoom_in', 1, 0);
	player.addVariable('pos_zoom_out', 1, 0);
	player.addVariable('pos_autorotate', 1, 0);
	player.addVariable('pos_information', 1, 0);
	player.addVariable('pos_thumbnail', 1, 0);
	player.addVariable('pos_projection', 1, 0);
	player.addVariable('pos_gyro', 1, 0);
	player.addVariable('pos_fullscreen', 1, 0);
	player.addVariable('pos_controller', 1, 0);
	player.addVariable('pos_360image', 1, 0);
	player.addVariable('pos_enter_vr', 1, 0);
	player.addVariable('next_node', 2, false);
	player.addVariable('open_tag', 0, "");
	player.addVariable('close_nodes', 2, false);
	player.addVariable('category_visible', 2, true);
	player.addVariable('category_follow', 2, true);
	player.addVariable('volume', 2, false);
	player.addVariable('vis_welcome_video', 2, false);
	player.addVariable('vis_music_video', 2, false);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=5000;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 876px;';
		hs+='position : absolute;';
		hs+='top : 938px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp + me._timer_1.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_1.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_1.style[domTransition]='';
				if (me._timer_1.ggCurrentLogicStateVisible == 0) {
					me._timer_1.style.visibility="hidden";
					me._timer_1.ggVisible=false;
				}
				else {
					me._timer_1.style.visibility=(Number(me._timer_1.style.opacity)>0||!me._timer_1.style.opacity)?'inherit':'hidden';
					me._timer_1.ggVisible=true;
				}
			}
		}
		me._timer_1.ggCurrentLogicStateVisible = -1;
		me._timer_1.ggUpdateConditionTimer=function () {
			me._timer_1.logicBlock_visible();
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_1);
		el=me._map_1=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggId="Map 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='bottom : 31px;';
		hs+='cursor : default;';
		hs+='height : 239px;';
		hs+='opacity : 0.60002;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 230px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['map_1'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_1.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_1.style[domTransition]='width 0s, height 0s, opacity 0s';
				if (me._map_1.ggCurrentLogicStateSize == 0) {
					me._map_1.style.width='350px';
					me._map_1.style.height='350px';
					skin.updateSize(me._map_1);
				}
				else {
					me._map_1.style.width='230px';
					me._map_1.style.height='239px';
					skin.updateSize(me._map_1);
				}
			}
		}
		me._map_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_1.style[domTransition]='width 0s, height 0s, opacity 0s';
				if (me._map_1.ggCurrentLogicStateVisible == 0) {
					me._map_1.style.visibility="hidden";
					me._map_1.ggClearMap();
					me._map_1.ggVisible=false;
				}
				else {
					me._map_1.style.visibility="hidden";
					me._map_1.ggClearMap();
					me._map_1.ggVisible=false;
				}
			}
		}
		me._map_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['map_1'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_1.style[domTransition]='width 0s, height 0s, opacity 0s';
				if (me._map_1.ggCurrentLogicStateAlpha == 0) {
					me._map_1.style.visibility=me._map_1.ggVisible?'inherit':'hidden';
					if (me._map_1.ggMapNotLoaded) {
						me._map_1.ggInitMap(false);
						me._map_1.ggInitMapMarkers(true);
					}
					me._map_1.style.opacity=1;
				}
				else {
					me._map_1.style.visibility=me._map_1.ggVisible?'inherit':'hidden';
					if (me._map_1.ggMapNotLoaded) {
						me._map_1.ggInitMap(false);
						me._map_1.ggInitMapMarkers(true);
					}
					me._map_1.style.opacity=0.60002;
				}
			}
		}
		me._map_1.onmouseover=function (e) {
			me.elementMouseOver['map_1']=true;
			me._map_1.logicBlock_size();
			me._map_1.logicBlock_alpha();
		}
		me._map_1.onmouseout=function (e) {
			me.elementMouseOver['map_1']=false;
			me._map_1.logicBlock_size();
			me._map_1.logicBlock_alpha();
		}
		me._map_1.ontouchend=function (e) {
			me.elementMouseOver['map_1']=false;
			me._map_1.logicBlock_size();
			me._map_1.logicBlock_alpha();
		}
		me._map_1.ggCurrentLogicStateSize = -1;
		me._map_1.ggCurrentLogicStateVisible = -1;
		me._map_1.ggCurrentLogicStateAlpha = -1;
		me._map_1.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (!(mapDetails.hasOwnProperty('title'))) return;
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			me._map_1.ggRadar.update();
		}
		me._map_1.ggUpdateConditionTimer=function () {
			me._map_1.ggRadar.update();
		}
		me._map_1.ggUpdatePosition=function (useTransition) {
			me._map_1.ggUpdateConditionResize();
		}
		me._map_1.ggNodeChange=function () {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (!(mapDetails.hasOwnProperty('title'))) return;
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			me._map_1.ggRadar.update();
			if (me._map_1.ggLastNodeId) {
				var lastActiveMarker = me._map_1.ggSimpleFloorplanMarkerArray[me._map_1.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_1.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_1.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_1.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_1.ggChangeMap(mapId);
					}
				}
			}
			me._map_1.ggLastNodeId = id;
		}
		me.divSkin.appendChild(me._map_1);
		el=me._menu_button=document.createElement('div');
		els=me._menu_button__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMjQuNyAxMjQuNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHZpZXdCb3g9Ij'+
			'AgMCAxMjQuNyAxMjQuNyI+CiA8ZyBpZD0iTGF5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTTEyLDQyLjFjLTIuMiwwLTQsMS44LTQsNHYzMi43YzAsMi4yLDEuOCw0LDQsNGgxMDAuOGMyLjIsMCw0LTEuOCw0LTRWNDZjMC0yLjItMS44LTQtNC00SDEyeiBNMzAuNCw3My43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTYuMywwLTExLjQtNS4xLTExLjQtMTEuNEMxOSw1Ni4xLDI0LjEsNTEsMzAuNCw1MWM2LjMsMCwxMS40LDUuMSwxMS40LDExLjRDNDEuOCw2OC42LDM2LjcsNzMuNywzMC40LDczLjd6IE02Mi40LDczLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNi4zLDAtMTEuNC01LjEtMTEuNC0xMS40QzUx'+
			'LDU2LjEsNTYuMSw1MSw2Mi40LDUxYzYuMywwLDExLjQsNS4xLDExLjQsMTEuNEM3My43LDY4LjYsNjguNiw3My43LDYyLjQsNzMuN3ogTTk0LjMsNzMuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Qzg4LDczLjcsODMsNjguNiw4Myw2Mi40QzgzLDU2LjEsODgsNTEsOTQuMyw1MWM2LjMsMCwxMS40LDUuMSwxMS40LDExLjRDMTA1LjcsNjguNiwxMDAuNiw3My43LDk0LjMsNzMuN3oiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzJfMV8iPgogIDxnPgogICA8Y2lyY2xlIGN5PSI2Mi40IiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGN4PS'+
			'IzMC40IiByPSIxMS40Ii8+CiAgIDxjaXJjbGUgY3k9IjYyLjQiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgY3g9IjYyLjQiIHI9IjExLjQiLz4KICAgPGNpcmNsZSBjeT0iNjIuNCIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBjeD0iOTQuMyIgcj0iMTEuNCIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._menu_button__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._menu_button__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMjQuNyAxMjQuNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHZpZXdCb3g9Ij'+
			'AgMCAxMjQuNyAxMjQuNyI+CiA8ZyBpZD0iTGF5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTTYuNCwzOS44Yy0yLjQsMC00LjQsMi00LjQsNC40djM2LjNjMCwyLjQsMiw0LjQsNC40LDQuNGgxMTJjMi40LDAsNC40LTIsNC40LTQuNFY0NC4yYzAtMi40LTItNC40LTQuNC00LjRINi40eiBNMjYuOSw3NSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy03LDAtMTIuNi01LjctMTIuNi0xMi42YzAtNyw1LjctMTIuNiwxMi42LTEyLjZjNywwLDEyLjYsNS43LDEyLjYsMTIuNkMzOS41LDY5LjMsMzMuOCw3NSwyNi45LDc1eiBNNjIuNCw3NSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy03LDAtMTIuNi01LjctMTIuNi0xMi42'+
			'YzAtNyw1LjctMTIuNiwxMi42LTEyLjZjNywwLDEyLjYsNS43LDEyLjYsMTIuNkM3NSw2OS4zLDY5LjMsNzUsNjIuNCw3NXogTTk3LjksNzUmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNywwLTEyLjYtNS43LTEyLjYtMTIuNmMwLTcsNS43LTEyLjYsMTIuNi0xMi42YzcsMCwxMi42LDUuNywxMi42LDEyLjZDMTEwLjUsNjkuMywxMDQuOCw3NSw5Ny45LDc1eiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMl8xXyI+CiAgPGc+CiAgIDxjaXJjbGUgY2xhc3M9InN0MCIgY3k9IjYyLjQiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgY3g9Ij'+
			'I2LjkiIHI9IjEyLjYiLz4KICAgPGNpcmNsZSBjbGFzcz0ic3QwIiBjeT0iNjIuNCIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBjeD0iNjIuNCIgcj0iMTIuNiIvPgogICA8Y2lyY2xlIGNsYXNzPSJzdDAiIGN5PSI2Mi40IiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGN4PSI5Ny45IiByPSIxMi42Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._menu_button__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="menu_button";
		el.ggDx=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 12px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_button.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_button.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_website') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_userdata') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._menu_button.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._menu_button.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._menu_button.style[domTransition]='left 0s, bottom 0s';
				if (me._menu_button.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._menu_button.style.bottom='-100px';
					me._menu_button.ggUpdatePosition(true);
				}
				else {
					me._menu_button.ggDx=2;
					me._menu_button.style.bottom='12px';
					me._menu_button.ggUpdatePosition(true);
				}
			}
		}
		me._menu_button.onclick=function (e) {
			me._hide_timer.ggTimeout=Number("5") * 1000.0;
			me._hide_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._menu_button.onmouseover=function (e) {
			me._menu_button__img.style.visibility='hidden';
			me._menu_button__imgo.style.visibility='inherit';
		}
		me._menu_button.onmouseout=function (e) {
			me._menu_button__img.style.visibility='inherit';
			me._menu_button__imgo.style.visibility='hidden';
		}
		me._menu_button.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._hide_timer=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=0;
		el.ggId="hide_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hide_timer.ggIsActive=function() {
			return (me._hide_timer.ggTimestamp + me._hide_timer.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hide_timer.ggActivate=function () {
			if (player.transitionsDisabled) {
				me._controller.style[domTransition]='none';
			} else {
				me._controller.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._controller.style.opacity='1';
			me._controller.style.visibility=me._controller.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._menu_button.style[domTransition]='none';
			} else {
				me._menu_button.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._menu_button.style.opacity='0';
			me._menu_button.style.visibility='hidden';
			player.setVariableValue('vis_thumbnail_menu_auto_hide', true);
		}
		me._hide_timer.ggDeactivate=function () {
			if (player.transitionsDisabled) {
				me._menu_button.style[domTransition]='none';
			} else {
				me._menu_button.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._menu_button.style.opacity='1';
			me._menu_button.style.visibility=me._menu_button.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._controller.style[domTransition]='none';
			} else {
				me._controller.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._controller.style.opacity='0';
			me._controller.style.visibility='hidden';
			player.setVariableValue('vis_thumbnail_menu_auto_hide', false);
		}
		me._hide_timer.ggUpdatePosition=function (useTransition) {
		}
		me._menu_button.appendChild(me._hide_timer);
		me.divSkin.appendChild(me._menu_button);
		el=me._screentint=document.createElement('div');
		el.ggId="screentint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._screentint.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_welcome_video') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_music_video') == true)) || 
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_website') == true)) || 
				((player.getVariableValue('vis_thumbnail_menu_mobile') == true)) && 
				((player.getVariableValue('vis_thumbnail_menu_auto_hide') == true)) && 
				((player.getViewerSize().width <= 450))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._screentint.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._screentint.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._screentint.style[domTransition]='opacity 500ms ease 0ms';
				if (me._screentint.ggCurrentLogicStateAlpha == 0) {
					me._screentint.style.visibility=me._screentint.ggVisible?'inherit':'hidden';
					me._screentint.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._screentint.style.opacity == 0.0) { me._screentint.style.visibility="hidden"; } }, 505);
					me._screentint.style.opacity=0;
				}
			}
		}
		me._screentint.onclick=function (e) {
			player.setVariableValue('vis_image_popup', false);
			player.setVariableValue('vis_info_popup', false);
			player.setVariableValue('vis_video_popup_file', false);
			player.setVariableValue('vis_video_popup_url', false);
			player.setVariableValue('vis_video_popup_vimeo', false);
			player.setVariableValue('vis_video_popup_youtube', false);
			player.setVariableValue('vis_website', false);
			player.setVariableValue('vis_userdata', false);
			player.setVariableValue('vis_welcome_video', false);
			player.setVariableValue('vis_music_video', false);
		}
		me._screentint.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screentint);
		el=me._nav_menu=document.createElement('div');
		el.ggId="Nav Menu";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 14px;';
		hs+='height : 130px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._nav_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._nav_menu.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('category_visible') == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._nav_menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._nav_menu.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._nav_menu.style[domTransition]='left 1000ms ease 0ms, bottom 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._nav_menu.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._nav_menu.style.bottom='-10px';
					me._nav_menu.ggUpdatePosition(true);
				}
				else {
					me._nav_menu.ggDx=0;
					me._nav_menu.style.bottom='14px';
					me._nav_menu.ggUpdatePosition(true);
				}
			}
		}
		me._nav_menu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('category_visible') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._nav_menu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._nav_menu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._nav_menu.style[domTransition]='left 1000ms ease 0ms, bottom 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._nav_menu.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._nav_menu.style.opacity == 0.0) { me._nav_menu.style.visibility="hidden"; } }, 1005);
					me._nav_menu.style.opacity=0;
				}
				else {
					me._nav_menu.style.visibility=me._nav_menu.ggVisible?'inherit':'hidden';
					me._nav_menu.style.opacity=1;
				}
			}
		}
		me._nav_menu.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 19px;';
		hs+='cursor : default;';
		hs+='height : 107px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._nav_menu.appendChild(me._rectangle_3);
		el=me._thumbnail_menu=document.createElement('div');
		els=me._thumbnail_menu__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 116px;';
		hs+='left : 50%;';
		hs+='margin-left : -86px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 172px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu.ggHPercentVisible >= 1.0) return;
			me._thumbnail_menu.ggScrollPosX = (me._thumbnail_menu__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
			me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			me._thumbnail_menu__content.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.offsetWidth);
		}
		me._thumbnail_menu.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu.ggScrollPosX >= me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth)) {
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu.ggScrollPosX <= 0)) {
					me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			me._thumbnail_menu__content.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_menu.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu.ggVPercentVisible >= 1.0) return;
			me._thumbnail_menu.ggScrollPosY = (me._thumbnail_menu__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
			me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			me._thumbnail_menu__content.style.top = -(Math.round(me._thumbnail_menu.ggScrollPosY / me._thumbnail_menu.ggVPercentVisible)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.offsetHeight);
		}
		me._thumbnail_menu.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu.ggScrollPosY >= me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight)) {
					me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu.ggScrollPosY <= 0)) {
					me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			me._thumbnail_menu__content.style.top = -(Math.round(me._thumbnail_menu.ggScrollPosY / me._thumbnail_menu.ggVPercentVisible)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_menu.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu.offsetWidth - (me._thumbnail_menu.ggVertScrollVisible ? 6 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu.offsetWidth - (me._thumbnail_menu.ggVertScrollVisible ? 6 : 0))) * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu.offsetHeight - (me._thumbnail_menu.ggHorScrollVisible ? 6 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu.offsetHeight - (me._thumbnail_menu.ggHorScrollVisible ? 6 : 0))) * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._thumbnail_menu.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._thumbnail_menu__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu.ggDragInertiaX *= 0.65;
					me._thumbnail_menu.ggDragInertiaY *= 0.65;
					me._thumbnail_menu.ggScrollByX(-me._thumbnail_menu.ggDragInertiaX);
					me._thumbnail_menu.ggScrollByY(-me._thumbnail_menu.ggDragInertiaY);
					if (Math.abs(me._thumbnail_menu.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_menu.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._thumbnail_menu__content.ontouchend = null;
				me._thumbnail_menu__content.ontouchmove = null;
				me._thumbnail_menu__content.onpointerup = null;
				me._thumbnail_menu__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._thumbnail_menu__content.onpointerup = me._thumbnail_menu__content.ontouchend;
		}
			me._thumbnail_menu__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._thumbnail_menu.ggDragLastX;
				var diffY = (t ? t[0].clientY : e.clientY) - me._thumbnail_menu.ggDragLastY;
				me._thumbnail_menu.ggDragInertiaX = diffX;
				me._thumbnail_menu.ggDragInertiaY = diffY;
				me._thumbnail_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_menu.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnail_menu.ggScrollByX(-diffX);
				me._thumbnail_menu.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnail_menu__content.onpointermove = me._thumbnail_menu__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elHorScrollBg = me._thumbnail_menu__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 1728px; height: 6px; background-color: rgba(0,0,0,0.784314); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_menu__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 1728px; height: 6px; background-color: rgba(42,123,194,1); pointer-events: auto;');
		me._thumbnail_menu.ggScrollPosX = 0;
		me._thumbnail_menu.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu.ggDragInertiaX *= 0.65;
					me._thumbnail_menu.ggScrollByX(me._thumbnail_menu.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragInertiaX = diffX;
				me._thumbnail_menu.ggDragLastX = e.clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu.ggDragInertiaX *= 0.65;
					me._thumbnail_menu.ggScrollByX(me._thumbnail_menu.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragInertiaX = diffX;
				me._thumbnail_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if (e.offsetX < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_menu.ggScrollByXSmooth(20 * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 6px; height: 6px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_menu";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='bottom : 28px;';
		hs+='height : 89px;';
		hs+='left : -10000px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_menu.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_website') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_userdata') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._thumbnail_menu.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._thumbnail_menu.style[domTransition]='left 0s, bottom 0s';
				if (me._thumbnail_menu.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._thumbnail_menu.style.bottom='-100px';
					me._thumbnail_menu.ggUpdatePosition(true);
				}
				else {
					me._thumbnail_menu.ggDx=0;
					me._thumbnail_menu.style.bottom='28px';
					me._thumbnail_menu.ggUpdatePosition(true);
				}
			}
		}
		me._thumbnail_menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_menu.style[domTransition]='left 0s, bottom 0s';
				if (me._thumbnail_menu.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_menu.style.visibility="hidden";
					me._thumbnail_menu.ggVisible=false;
				}
				else {
					me._thumbnail_menu.style.visibility=(Number(me._thumbnail_menu.style.opacity)>0||!me._thumbnail_menu.style.opacity)?'inherit':'hidden';
					me._thumbnail_menu.ggVisible=true;
				}
			}
		}
		me._thumbnail_menu.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 6;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (6/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.offsetHeight;
				if (this.ggHorScrollVisible) containerHeight -= 6;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (6/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._thumbnail_menu__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu.ggHorScrollVisible = true;
				} else {
					me._thumbnail_menu__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu.ggHorScrollVisible = false;
				}
				if(me._thumbnail_menu.ggHorScrollVisible) {
					me._thumbnail_menu.ggAvailableHeight = me._thumbnail_menu.offsetHeight - 6;
					if (me._thumbnail_menu.ggVertScrollVisible) {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.offsetWidth - 6;
						me._thumbnail_menu.ggAvailableWidthWithScale = me._thumbnail_menu.getBoundingClientRect().width - me._thumbnail_menu__horScrollBg.getBoundingClientRect().height;
					} else {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.offsetWidth;
						me._thumbnail_menu.ggAvailableWidthWithScale = me._thumbnail_menu.getBoundingClientRect().width;
					}
					me._thumbnail_menu__horScrollBg.style.width = me._thumbnail_menu.ggAvailableWidth + 'px';
					me._thumbnail_menu.ggHPercentVisible = contentWidth != 0 ? me._thumbnail_menu.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._thumbnail_menu.ggHPercentVisible > 1.0) me._thumbnail_menu.ggHPercentVisible = 1.0;
					me._thumbnail_menu.ggScrollWidth = Math.round(me._thumbnail_menu__horScrollBg.offsetWidth * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu__horScrollFg.style.width = me._thumbnail_menu.ggScrollWidth + 'px';
					me._thumbnail_menu.ggScrollPosX = me._thumbnail_menu.ggScrollPosXPercent * me._thumbnail_menu.ggAvailableWidth;
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
					me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
					if (me._thumbnail_menu.ggHPercentVisible < 1.0) {
						me._thumbnail_menu__content.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._thumbnail_menu.ggAvailableHeight = me._thumbnail_menu.offsetHeight;
					me._thumbnail_menu.ggScrollPosX = 0;
					me._thumbnail_menu.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._thumbnail_menu.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_menu.ggVertScrollVisible) {
					me.updateSize(me._thumbnail_menu);
					me._thumbnail_menu.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 119;
		el.ggHeight = 75;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner.callChildLogicBlocks_changenode = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick && me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_active && me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_backgroundcolor) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_backgroundcolor();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick && me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha();
					}
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title && me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha();
					}
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title && me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_scaling) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_scaling();
					}
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title && me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_position) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_position();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_active && me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_backgroundcolor) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_backgroundcolor();
					}
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick && me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible();
					}
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title && me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_scaling) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_scaling();
					}
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title && me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_position) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_position();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_changevisitednodes = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick && me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_activehotspotchanged = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick && me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			var el=me._thumbnail_cloner;
			var curNumRows = 0;
			curNumRows = el.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._thumbnail_cloner.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner.ggWidth) + 'px';
				parameter.width=me._thumbnail_cloner.ggWidth + 'px';
				parameter.height=me._thumbnail_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
				}
			}
			me._thumbnail_cloner.callChildLogicBlocks_changenode();
			me._thumbnail_cloner.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner.callChildLogicBlocks_active();
			me._thumbnail_cloner.callChildLogicBlocks_changevisitednodes();
			me._thumbnail_cloner.callChildLogicBlocks_activehotspotchanged();
			me._thumbnail_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "_nop_";
		el.ggId="thumbnail_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 75px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 119px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_cloner']=true;
		}
		me._thumbnail_cloner.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_cloner']=false;
		}
		me._thumbnail_cloner.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_cloner']=false;
		}
		me._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner.ggUpdatePosition=function (useTransition) {
				me._thumbnail_cloner.ggUpdate();
		}
		me._thumbnail_cloner.ggNodeChange=function () {
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
		}
		me._thumbnail_menu__content.appendChild(me._thumbnail_cloner);
		me._nav_menu.appendChild(me._thumbnail_menu);
		me.divSkin.appendChild(me._nav_menu);
		el=me._svg_5=document.createElement('div');
		els=me._svg_5__img=document.createElement('img');
		els.className='ggskin ggskin_svg_5';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAADwAAAAA+CAYAAACWA+4JAAAEmklEQVR4nO3dQW1gQRBDwZ4vg1kGwRX+h85lpYEwPlQhMIEnn38/vzsAAAAAAAAAAAAAAAAAAECFzDmvNwAAAAAAAAAAAAAAAAAAAP9lRwAMAAAAAAAAAAAAAAAAAAAtov8FAAAAAAAAAAAAAAAAAIAeGQUwAAAAAAAAAAAAAAAAAADUEAADAAAAAAAAAAAAAAAAAECRrP4XAAAAAAAAAAAAAAAAAABqeAAGAAAAAAAAAAAAAAAAAIAimSMABgAAAAAAAAAAAAAAAACAFt/rAQAAAAAAAAAAAAAAAAAAwJX1AAwAAAAAAAAAAAAAAAAAADUyIwAGAAAAAAAAAAAAAAAAAIAW0f8CAAAAAAAAAAAAAAAAAEAPD8AAAAAAAAAAAAAAAAAAAFAkewTAAA'+
			'AAAAAAAAAAAAAAAADQwgMwAAAAAAAAAAAAAAAAAAAU+V4PAAAAAAAAAAAAAAAAAAAAruzxAAwAAAAAAAAAAAAAAAAAAC0yIwAGAAAAAAAAAAAAAAAAAIAW0f8CAAAAAAAAAAAAAAAAAEAPD8AAAAAAAAAAAAAAAAAAAFAkewTAAAAAAAAAAAAAAAAAAADQ4ns9AAAAAAAAAAAAAAAAAAAAuDIegAEAAAAAAAAAAAAAAAAAoEZmBMAAAAAAAAAAAAAAAAAAANAiq/8FAAAAAAAAAAAAAAAAAIAaHoABAAAAAAAAAAAAAAAAAKCIABgAAAAAAAAAAAAAAAAAAIpE/wsAAAAAAAAAAAAAAAAAAD2yCmAAAAAAAAAAAAAAAAAAAKiROQJgAAAAAAAAAAAAAAAAAABo8b0eAAAAAAAAAAAAAAAAAAAAXB6AAQAAAAAAAAAA'+
			'AAAAAACgSHYEwAAAAAAAAAAAAAAAAAAA0CL6XwAAAAAAAAAAAAAAAAAA6JFRAAMAAAAAAAAAAAAAAAAAQA0BMAAAAAAAAAAAAAAAAAAAFMnqfwEAAAAAAAAAAAAAAAAAoIYHYAAAAAAAAAAAAAAAAAAAKJI5AmAAAAAAAAAAAAAAAAAAAGjxvR4AAAAAAAAAAAAAAAAAAABcWQ/AAAAAAAAAAAAAAAAAAABQIzMCYAAAAAAAAAAAAAAAAAAAaBH9LwAAAAAAAAAAAAAAAAAA9PAADAAAAAAAAAAAAAAAAAAARbJHAAwAAAAAAAAAAAAAAAAAAC2+1wMAAAAAAAAAAAAAAAAAAIArMx6AAQAAAAAAAAAAAAAAAACgRfYIgAEAAAAAAAAAAAAAAAAAoIUHYAAAAAAAAAAAAAAAAAAAKBL9LwAAAAAAAAAAAAAAAAAA9P'+
			'AADAAAAAAAAAAAAAAAAAAARbJHAAwAAAAAAAAAAAAAAAAAAC2+1wMAAAAAAAAAAAAAAAAAAIAr4wEYAAAAAAAAAAAAAAAAAABqZEYADAAAAAAAAAAAAAAAAAAALbL6XwAAAAAAAAAAAAAAAAAAqOEBGAAAAAAAAAAAAAAAAAAAigiAAQAAAAAAAAAAAAAAAACgSPS/AAAAAAAAAAAAAAAAAADQI6sABgAAAAAAAAAAAAAAAACAGpkjAAYAAAAAAAAAAAAAAAAAgBZ/uagS7TK/G3cAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_5.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_5.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._svg_5);
		el=me._nav_open=document.createElement('div');
		el.ggId="Nav Open";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 3px;';
		hs+='height : 31px;';
		hs+='position : absolute;';
		hs+='right : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 168px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._nav_open.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._nav_open.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_8=document.createElement('div');
		els=me._svg_8__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzguMTcgMzEuMTUiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtpc29sYXRpb246aXNvbGF0ZTt9LmNscy0ye29wYWNpdHk6MC4xODttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ze2ZpbGw6IzE4NTM5Yjt9LmNscy00e2ZpbGw6bm9uZTtzdHJva2U6I2ZmZjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPgogPC9kZWZzPgogPGcgY2xhc3M9ImNscy0xIj4KICA8ZyBpZD0iTGF5ZX'+
			'JfMSIgZGF0YS1uYW1lPSJMYXllciAxIj4KICAgPGltYWdlIGNsYXNzPSJjbHMtMiIgd2lkdGg9IjM3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjczIDEuNzYpIiBoZWlnaHQ9IjI3IiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNVQUFBQWJDQVlBQUFENzdrYmVBQUFBQ1hCSVdYTUFBQXNTQUFBTEVnSFMzWDc4QUFBREZFbEVRVlJJUzgzWDMyOVVSUndGOE0rVXRvdTAySW9WRUVWanhBVDFoVGVmL2N0OVJrS2IxQVNKR0UyMFFBRDVvZGlXdG5USGgrOU03K3gyYWZjdVBIaVN6WjI3ZStjNzUzdk91WGZucHB5ei94dm0yNU9VVXFyRGNz'+
			'eVEzeUh6YWRaSWRaeFNtaE1reitySXZzWStEc3JrUEF2QlFxUitGckJvZEkxWGVKMXpIbEpJbFVrTCtCQ2Y0VUlwOEJLUDhhSk1mRldLREU4ak40SElRRFM4aW9zNEx4cDloai93RkFjNTU5emFkMVlRK2g1ZmwwSlA4Q3NlbFBIRFVtUTdwVFJSdlVLbVZiMFN1WVNQY0FYWHluZ2ZkL0VEdG9ValJ4S21NcjRnQ0gySFpmeUxHL2dMVzZYQVBmeXBVMit2SVZoVldTcTFQdFlSK1FxZllFMFFYQ28xOW5FYlo4cjhFYVdJRGhjRW9UVmg1Mld4K0F0OEkwamR4WDJoM2lQOEkyeWR4L3U0S2toY3g2YzZJcXRDdVFFT1JUeTJzVnZPTTUxU3VSVDlXMWowRkN0NFQ0Unl1Wnl2NFhOOEs5UzdMK3g5SkRwZUZJdG'+
			'ZGNlN1R2lXeUlOUVlDaGUyOEV1WnY2ZWdWV3BQTExKZUNpOEx1UmVGZ3EyS0YzWHEzWEJjcWN2Q3ZpVWRrZm9abHJrUDhiTWc5VXpjZloxU09lZGNjdkVFbThLMlMyV0JEM1IrbnpGS2JrWGtaanhUZzFKN1R2YzhVcTQ1RUhmMEpuN0U3MEsxWWIzb1NLbWM4ekNsdENzNnVJTXZCYkdCNkhpdVhGbzdWcjRiS0Zsb2ZtK1BMWVlpUjc4SlFwdUM0RUY3QjQ4SHZaMTBVeWd4TDdKeFRrZXM0aVFDNHhoaVI5ZjBuVExlclEvTmloRlNqWTJQc1NHc3FIYlVmRTFEWUJ5VjBKYkk3RTNSK0V1TmJSWGpTclUyYnBYZlYwU3cyM3oxUVp1akRmR2czRERCdG9weE8wRE8rZEJrcVhkTTZPd1VqRWRpWFRSOHpMYUtZ'+
			'MG8xNkp1dlNYaFRqblpLNHhQeFJsTHZJRis5Y3RUaUpLWGVKbCs5YzlUaVZBdG16RmZ2SExVNFVha0dmZkkxVTQ1YVRFWHFsSHhkS2Njay91bXIzYmYxeUZHTHFVZ3hNVi9ueFovdW9Cem54Ui90Rm02SkhLMmJNa2N0cGlaRjVDdWx0Q04yb2orSjBHZDhJV3g4cmd2MkxUMXkxS0lYcVlLNkY3cFh6aCtJL2RPcTJHT3RHdzMyVkRscWtYcW9lb1R5NWxPM3ZYV2JjMDdzSXV0K2ZpWkN6RWlLWXk4SUEvSE1PaFNieFlPK2xyV1ltVlRGMk10bDV1MWZYdjhERDQrWnNncGVWdk1BQUFBQVNVVk9SSzVDWUlJPSIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik02LjQzLDUuNSwxNC44LDguNzlhMTEuNj'+
			'QsMTEuNjQsMCwwLDAsOC41NywwTDMxLjc0LDUuNWMuOC0uMzEsMS40Ni43OC45MSwxLjUxTDIxLDIyLjcyYTIuMjgsMi4yOCwwLDAsMS0zLjc1LDBMNS41Miw3QzUsNi4yOCw1LjYzLDUuMTksNi40Myw1LjVaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTYuNDMsNS41LDE0LjgsOC43OWExMS42NCwxMS42NCwwLDAsMCw4LjU3LDBMMzEuNzQsNS41Yy44LS4zMSwxLjQ2Ljc4LjkxLDEuNTFMMjEsMjIuNzJhMi4yOCwyLjI4LDAsMCwxLTMuNzUsMEw1LjUyLDdDNSw2LjI4LDUuNjMsNS4xOSw2LjQzLDUuNVoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_8__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 128px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_8.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('category_visible') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_8.style[domTransition]='';
				if (me._svg_8.ggCurrentLogicStateVisible == 0) {
					me._svg_8.style.visibility=(Number(me._svg_8.style.opacity)>0||!me._svg_8.style.opacity)?'inherit':'hidden';
					me._svg_8.ggVisible=true;
				}
				else {
					me._svg_8.style.visibility="hidden";
					me._svg_8.ggVisible=false;
				}
			}
		}
		me._svg_8.onclick=function (e) {
			player.setVariableValue('category_visible', false);
		}
		me._svg_8.ggUpdatePosition=function (useTransition) {
		}
		me._nav_open.appendChild(me._svg_8);
		el=me._minimise=document.createElement('div');
		els=me._minimise__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Minimise";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text chinese";
		el.ggType='text';
		hs ='';
		hs+='height : 21px;';
		hs+='left : 59px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : hidden;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 64px;';
		hs+='height: 21px;';
		hs+='border: 0px solid #ffffff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: 500;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u83dc\u5355";
		el.appendChild(els);
		me._minimise.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._minimise.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('category_visible') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._minimise.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._minimise.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._minimise.style[domTransition]='';
				if (me._minimise.ggCurrentLogicStateVisible == 0) {
					me._minimise.style.visibility=(Number(me._minimise.style.opacity)>0||!me._minimise.style.opacity)?'inherit':'hidden';
					me._minimise.ggVisible=true;
				}
				else {
					me._minimise.style.visibility="hidden";
					me._minimise.ggVisible=false;
				}
			}
		}
		me._minimise.ggUpdatePosition=function (useTransition) {
		}
		me._nav_open.appendChild(me._minimise);
		el=me._svg_6=document.createElement('div');
		els=me._svg_6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzguMTcgMzEuMTUiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtpc29sYXRpb246aXNvbGF0ZTt9LmNscy0ye29wYWNpdHk6MC4xODttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ze2ZpbGw6IzE4NTM5Yjt9LmNscy00e2ZpbGw6bm9uZTtzdHJva2U6I2ZmZjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPgogPC9kZWZzPgogPGcgY2xhc3M9ImNscy0xIj4KICA8ZyBpZD0iTGF5ZX'+
			'JfMSIgZGF0YS1uYW1lPSJMYXllciAxIj4KICAgPGltYWdlIGNsYXNzPSJjbHMtMiIgd2lkdGg9IjM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjg1IDEuNTEpIiBoZWlnaHQ9IjI4IiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNRQUFBQWNDQVlBQUFBSktSMVlBQUFBQ1hCSVdYTUFBQXNTQUFBTEVnSFMzWDc4QUFBREQwbEVRVlJJUzgzWFcyOWNOUlFGNE0rVGFXNVFDRzFwZ2RKS0xiZW9TSkdvQkVoSVBQRC9KZWdMVUFrZWdMVFF0SVdra0Y2U21ZeDUySGJQbWNtY3VhUkNZa3VXejR4c243WFhXdDdIVGpsbi82Zm96eHN3TDFKS3FU'+
			'NGlRMzZGTE5OWjV4WWdQWkhVR2xad2dpTU1jczZqR2RNNzQweUFVa285bk1QcnVJQXIyTVJUL0k1SGVKNXpQdWxjcENPV0JsVEFiT0F5YnVKamZJSXRQTWEzcGQxekJsQkxlYWpJZEU2QStSeGY0UmF1Q1liMmNWR3NtN0NiVWxvSzFGS0FoR2ZPNHdNQjVtdGNGOUt0NEMyc2xuR0V5ZStsbEo0dDZxbUZBYVdVVmdRTDd3cFdQaFZndGdTWWF2SnJaY29JUXh6amZrcnBlSkhkdHhDZ2xtL2V4MjE4S2Z4elhnTkdlZDRzNDRiNEd3OUx2eTkyNGN6b21STVR2dmtNMzVUK2N2bS9ncW5STTg3a3JmSzhVUktiR1lzd1ZIMXpVekJ6V3pDd3FUdWg5cHd2OEtjb0NYT2xtd2xvaW05cXRyUEFFS3hWVm5jRW9EME'+
			'xTTmU1NkJ6ZnpLVmVqTmt3SlptUzZOU1l5dEFaZk5NVmszSS9FV2JmN1NvRlhaS2R4VGZUWWpLeFFXbEhPdngwQ2xCTHFtVjkweFYxMTlWUzhNU01VakQyZ2dtcGRzUU9XY1kzWGRGVkNrNzVhWktoeWUyNlk3WnY4a1N2Tlc1YWZacnJwNWVBWmtpMVlaeWQzR29EOFdrWWxOK1Y0VlZORXUwMjEwOTlGcEpxRXNRUlh1QkE0NGVoU1BDTnNzNFcxa3ZybDNYYXBhVDZhYS8wQnppcERQWHdHbTRZbDZxditVaSswSURZRTJlZisvaTUvRDRXekZ6Qmg3aUtTNExsQzJYOXlscFZZaHMvNGpjY3BwUkdGZENLeU95Nk9GcFUzd3hFeWY4TGYyaEEvS1E1R2RZSzNHYm9EdDRXb0xieGtUZ0ZWTlpXeGJIM0hVSENS'+
			'VHpBY2IvSXRTSlExM1BOTTdFZC84RnVBWEJYZ0trZ0RnUmpSOFk5dEY4V1h5OEFmaENBdG9WVWx3U0xhemhzelFYOW5ITk9LZFdYLzRMdkJDTTk0WSs3QXRDdTZTQnl1N2lsbEVaQ3ZrUGhqY2Y0RmQ4TDF0NFRrcjVaMXIramtUek8xR1dIclF1cHJwYkJTVWp4UUFCOHFnTkVWeFQyZTBMS2F2QXRBYXhlQ2lycnozUE9vNWVIL05UY0pOWTA1V0FvMkJoaXRBaUlhVkdBdGJmK3FvNXIwOWl0bzB5a0tXcXZmUEdiaklsM25GcC82V3ZRZngzL0FqY0tMRGRVUlFNM0FBQUFBRWxGVGtTdVFtQ0MiLz4KICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMzEuNzQsMjMuNjVsLTguMzctMy4yOWExMS42NCwxMS'+
			'42NCwwLDAsMC04LjU3LDBMNi40MywyMy42NWMtLjguMzEtMS40Ni0uNzctLjkxLTEuNTFMMTcuMjEsNi40M2EyLjI4LDIuMjgsMCwwLDEsMy43NSwwTDMyLjY1LDIyLjE0QzMzLjIsMjIuODgsMzIuNTQsMjQsMzEuNzQsMjMuNjVaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTMxLjc0LDIzLjY1bC04LjM3LTMuMjlhMTEuNjQsMTEuNjQsMCwwLDAtOC41NywwTDYuNDMsMjMuNjVjLS44LjMxLTEuNDYtLjc3LS45MS0xLjUxTDE3LjIxLDYuNDNhMi4yOCwyLjI4LDAsMCwxLDMuNzUsMEwzMi42NSwyMi4xNEMzMy4yLDIyLjg4LDMyLjU0LDI0LDMxLjc0LDIzLjY1WiIvPgogIDwvZz4KIDwv'+
			'Zz4KPC9zdmc+Cg==';
		me._svg_6__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 6";
		el.ggDx=62;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('category_visible') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_6.style[domTransition]='';
				if (me._svg_6.ggCurrentLogicStateVisible == 0) {
					me._svg_6.style.visibility="hidden";
					me._svg_6.ggVisible=false;
				}
				else {
					me._svg_6.style.visibility=(Number(me._svg_6.style.opacity)>0||!me._svg_6.style.opacity)?'inherit':'hidden';
					me._svg_6.ggVisible=true;
				}
			}
		}
		me._svg_6.onclick=function (e) {
			player.setVariableValue('category_visible', !player.getVariableValue('category_visible'));
		}
		me._svg_6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._nav_open.appendChild(me._svg_6);
		el=me._navigate=document.createElement('div');
		els=me._navigate__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Navigate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text chinese";
		el.ggType='text';
		hs ='';
		hs+='height : 21px;';
		hs+='left : 59px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : hidden;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 64px;';
		hs+='height: 21px;';
		hs+='border: 0px solid #ffffff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: 500;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5bfc\u822a";
		el.appendChild(els);
		me._navigate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._navigate.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('category_visible') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._navigate.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._navigate.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._navigate.style[domTransition]='';
				if (me._navigate.ggCurrentLogicStateVisible == 0) {
					me._navigate.style.visibility=(Number(me._navigate.style.opacity)>0||!me._navigate.style.opacity)?'inherit':'hidden';
					me._navigate.ggVisible=true;
				}
				else {
					me._navigate.style.visibility="hidden";
					me._navigate.ggVisible=false;
				}
			}
		}
		me._navigate.ggUpdatePosition=function (useTransition) {
		}
		me._nav_open.appendChild(me._navigate);
		me.divSkin.appendChild(me._nav_open);
		el=me._controller=document.createElement('div');
		el.ggId="controller";
		el.ggDx=-14;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 3px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 288px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._controller.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._controller.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_website') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_userdata') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._controller.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._controller.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._controller.style[domTransition]='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._controller.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._controller.style.bottom='-100px';
					me._controller.ggUpdatePosition(true);
				}
				else {
					me._controller.ggDx=-14;
					me._controller.style.bottom='3px';
					me._controller.ggUpdatePosition(true);
				}
			}
		}
		me._controller.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_timer') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._controller.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._controller.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._controller.style[domTransition]='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._controller.ggCurrentLogicStateAlpha == 0) {
					me._controller.style.visibility=me._controller.ggVisible?'inherit':'hidden';
					me._controller.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._controller.style.opacity == 0.0) { me._controller.style.visibility="hidden"; } }, 505);
					me._controller.style.opacity=0;
				}
			}
		}
		me._controller.onmouseover=function (e) {
			me.elementMouseOver['controller']=true;
		}
		me._controller.onmouseout=function (e) {
			me.elementMouseOver['controller']=false;
		}
		me._controller.ontouchend=function (e) {
			me.elementMouseOver['controller']=false;
		}
		me._controller.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._controller_slider=document.createElement('div');
		el.ggId="controller_slider";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._controller_slider.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_slider.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('pos_controller') == 1))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('pos_controller') == 2))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('pos_controller') == 3))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('pos_controller') == 4))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('pos_controller') == 5))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('pos_controller') == 6))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getVariableValue('pos_controller') == 7))
			)
			{
				newLogicStatePosition = 6;
			}
			else if (
				((player.getVariableValue('pos_controller') == 8))
			)
			{
				newLogicStatePosition = 7;
			}
			else if (
				((player.getVariableValue('pos_controller') == 9))
			)
			{
				newLogicStatePosition = 8;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._controller_slider.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._controller_slider.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._controller_slider.style[domTransition]='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._controller_slider.ggCurrentLogicStatePosition == 0) {
					me._controller_slider.style.left='128px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 1) {
					me._controller_slider.style.left='112px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 2) {
					me._controller_slider.style.left='96px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 3) {
					me._controller_slider.style.left='80px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 4) {
					me._controller_slider.style.left='64px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 5) {
					me._controller_slider.style.left='48px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 6) {
					me._controller_slider.style.left='32px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 7) {
					me._controller_slider.style.left='16px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 8) {
					me._controller_slider.style.left='0px';
					me._controller_slider.style.top='0px';
				}
				else {
					me._controller_slider.style.left='0px';
					me._controller_slider.style.top='0px';
				}
			}
		}
		me._controller_slider.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_timer') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._controller_slider.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._controller_slider.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._controller_slider.style[domTransition]='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._controller_slider.ggCurrentLogicStateAlpha == 0) {
					me._controller_slider.style.visibility=me._controller_slider.ggVisible?'inherit':'hidden';
					me._controller_slider.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._controller_slider.style.opacity == 0.0) { me._controller_slider.style.visibility="hidden"; } }, 505);
					me._controller_slider.style.opacity=0;
				}
			}
		}
		me._controller_slider.ggUpdatePosition=function (useTransition) {
		}
		el=me._projection_buttons=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="projection_buttons";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 160px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._projection_buttons.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._projection_buttons.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('pos_projection') == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('pos_projection') == 1))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('pos_projection') == 2))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('pos_projection') == 3))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('pos_projection') == 4))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('pos_projection') == 5))
			)
			{
				newLogicStatePosition = 5;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._projection_buttons.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._projection_buttons.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._projection_buttons.style[domTransition]='left 0s, top 0s';
				if (me._projection_buttons.ggCurrentLogicStatePosition == 0) {
					me._projection_buttons.style.left='0px';
					me._projection_buttons.style.top='0px';
				}
				else if (me._projection_buttons.ggCurrentLogicStatePosition == 1) {
					me._projection_buttons.style.left='32px';
					me._projection_buttons.style.top='0px';
				}
				else if (me._projection_buttons.ggCurrentLogicStatePosition == 2) {
					me._projection_buttons.style.left='64px';
					me._projection_buttons.style.top='0px';
				}
				else if (me._projection_buttons.ggCurrentLogicStatePosition == 3) {
					me._projection_buttons.style.left='96px';
					me._projection_buttons.style.top='0px';
				}
				else if (me._projection_buttons.ggCurrentLogicStatePosition == 4) {
					me._projection_buttons.style.left='128px';
					me._projection_buttons.style.top='0px';
				}
				else if (me._projection_buttons.ggCurrentLogicStatePosition == 5) {
					me._projection_buttons.style.left='160px';
					me._projection_buttons.style.top='0px';
				}
				else {
					me._projection_buttons.style.left='160px';
					me._projection_buttons.style.top='0px';
				}
			}
		}
		me._projection_buttons.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_projection') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._projection_buttons.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._projection_buttons.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._projection_buttons.style[domTransition]='left 0s, top 0s';
				if (me._projection_buttons.ggCurrentLogicStateVisible == 0) {
					me._projection_buttons.style.visibility=(Number(me._projection_buttons.style.opacity)>0||!me._projection_buttons.style.opacity)?'inherit':'hidden';
					me._projection_buttons.ggVisible=true;
				}
				else {
					me._projection_buttons.style.visibility="hidden";
					me._projection_buttons.ggVisible=false;
				}
			}
		}
		me._projection_buttons.onclick=function (e) {
			if (
				(
					((player.getProjection() == 4))
				)
			) {
				player.changeProjectionEx(9,1);
			}
			if (
				(
					((player.getProjection() == 9))
				)
			) {
				player.changeProjectionEx(12,1);
			}
			if (
				(
					((player.getProjection() == 12))
				)
			) {
				player.changeProjectionEx(4,1);
			}
		}
		me._projection_buttons.onmouseover=function (e) {
			me.elementMouseOver['projection_buttons']=true;
			me._tt_projection.logicBlock_visible();
		}
		me._projection_buttons.onmouseout=function (e) {
			me.elementMouseOver['projection_buttons']=false;
			me._tt_projection.logicBlock_visible();
		}
		me._projection_buttons.ontouchend=function (e) {
			me.elementMouseOver['projection_buttons']=false;
			me._tt_projection.logicBlock_visible();
		}
		me._projection_buttons.ggUpdatePosition=function (useTransition) {
		}
		el=me._stereographic=document.createElement('div');
		els=me._stereographic__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMycHgiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldy'+
			'AwIDAgMzIgMzIiIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiPgogPGcgaWQ9IkxheWVyXzEiPgogIDxnIGRpc3BsYXk9Im5vbmUiIGlkPSJMYXllcl8xXzFfIi8+CiA8L2c+CiA8ZyBpZD0iRWJlbmVfMV8xXyI+CiAgPGc+CiAgIDxnPgogICAgPHBhdGggZD0iTTE2LDMuNUM5LjEwNywzLjUsMy41LDkuMTA3LDMuNSwxNlM5LjEwNywyOC40OTksMTYsMjguNDk5UzI4LjUsMjIuODkzLDI4LjUsMTZTMjIuODkzLDMuNSwxNiwzLjV6JiN4ZDsmI3hhOyYjeDk7JiN4OTsm'+
			'I3g5OyYjeDk7IE0xNiwyNi4wODFjLTUuNTU5LDAtMTAuMDgtNC41MjItMTAuMDgtMTAuMDgxUzEwLjQ0MSw1LjkxOSwxNiw1LjkxOVMyNi4wOCwxMC40NDEsMjYuMDgsMTZTMjEuNTU5LDI2LjA4MSwxNiwyNi4wODF6IiBmaWxsPSIjMUExNzFCIi8+CiAgICA8cGF0aCBkPSJNMjMuMjIxLDEwLjk4NWMtMC4zMTgtMC4yMjctMC43MjctMC4yODUtMS4wOTgtMC4xNTlDMjIuMDkyLDEwLjgzNywxOS4wMSwxMS44OSwxNiwxMS44OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMi45OTYsMC02LjA5NC0xLjA1My02LjEyMy0xLjA2M2MtMC4zNzEtMC4xMjctMC43NzktMC4wNjgtMS4wOTgsMC'+
			'4xNTljLTAuMzE4LDAuMjI4LTAuNTA4LDAuNTk0LTAuNTA4LDAuOTg0djguMDAyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsMC40MDQsMC4yMDMsMC43ODMsMC41MzksMS4wMDZjMC4yMDEsMC4xMzUsMC40MzYsMC4yMDMsMC42NzIsMC4yMDNjMC4xNTYsMCwwLjMxNi0wLjAyOSwwLjQ2NS0wLjA5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjAyOS0wLjAxMywzLjA2MS0xLjI2Miw2LjA1My0xLjI2MmMyLjk3NywwLDYuMDIzLDEuMjUsNi4wNTMsMS4yNjNjMC4zNzUsMC4xNTQsMC44MDEsMC4xMTIsMS4xMzctMC4xMTEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4'+
			'OTtjMC4zMzYtMC4yMjUsMC41MzktMC42MDIsMC41MzktMS4wMDZWMTEuOTdDMjMuNzI5LDExLjU3OSwyMy41MzksMTEuMjEyLDIzLjIyMSwxMC45ODV6IE0yMS4zMDksMTguMjcyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0xLjMzNC0wLjQwMi0zLjMwNS0wLjg2NS01LjMwOS0wLjg2NXMtMy45NzUsMC40NjMtNS4zMDksMC44NjV2LTQuNjkzQzEyLjAxOCwxMy45MTUsMTQsMTQuMzA5LDE2LDE0LjMwOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O3MzLjk4Mi0wLjM5NCw1LjMwOS0wLjcyOVYxOC4yNzJ6IiBmaWxsPSIjMUExNzFCIi8+CiAgIDwvZz4KICAgPGcgb3BhY2l0eT'+
			'0iMC40Ij4KICAgIDxwYXRoIGQ9Ik0xNiwzLjVDOS4xMDcsMy41LDMuNSw5LjEwNywzLjUsMTZTOS4xMDcsMjguNDk5LDE2LDI4LjQ5OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O1MyOC41LDIyLjg5MywyOC41LDE2UzIyLjg5MywzLjUsMTYsMy41eiBNMTYsMjYuMDgxYy01LjU1OSwwLTEwLjA4LTQuNTIyLTEwLjA4LTEwLjA4MVMxMC40NDEsNS45MTksMTYsNS45MTkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtTMjYuMDgsMTAuNDQxLDI2LjA4LDE2UzIxLjU1OSwyNi4wODEsMTYsMjYuMDgxeiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMzQzND'+
			'M0MiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICA8cGF0aCBkPSJNMjMuMjIxLDEwLjk4NWMtMC4zMTgtMC4yMjctMC43MjctMC4yODUtMS4wOTgtMC4xNTkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDMjIuMDkyLDEwLjgzNywxOS4wMSwxMS44OSwxNiwxMS44OWMtMi45OTYsMC02LjA5NC0xLjA1My02LjEyMy0xLjA2M2MtMC4zNzEtMC4xMjctMC43NzktMC4wNjgtMS4wOTgsMC4xNTkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuMzE4LDAuMjI4LTAuNTA4LDAuNTk0LTAuNTA4LDAuOTg0djguMDAyYzAsMC40MDQsMC4yMDMsMC43ODMsMC41MzksMS4wMDZjMC4yMDEsMC'+
			'4xMzUsMC40MzYsMC4yMDMsMC42NzIsMC4yMDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4xNTYsMCwwLjMxNi0wLjAyOSwwLjQ2NS0wLjA5M2MwLjAyOS0wLjAxMywzLjA2MS0xLjI2Miw2LjA1My0xLjI2MmMyLjk3NywwLDYuMDIzLDEuMjUsNi4wNTMsMS4yNjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4zNzUsMC4xNTQsMC44MDEsMC4xMTIsMS4xMzctMC4xMTFjMC4zMzYtMC4yMjUsMC41MzktMC42MDIsMC41MzktMS4wMDZWMTEuOTdDMjMuNzI5LDExLjU3OSwyMy41MzksMTEuMjEyLDIzLjIyMSwxMC45ODV6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7'+
			'IE0yMS4zMDksMTguMjcyYy0xLjMzNC0wLjQwMi0zLjMwNS0wLjg2NS01LjMwOS0wLjg2NXMtMy45NzUsMC40NjMtNS4zMDksMC44NjV2LTQuNjkzQzEyLjAxOCwxMy45MTUsMTQsMTQuMzA5LDE2LDE0LjMwOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O3MzLjk4Mi0wLjM5NCw1LjMwOS0wLjcyOVYxOC4yNzJ6IiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzNDM0MzQyIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik0xNiwzLjVDOS4xMDcsMy41LDMuNSw5LjEwNywzLjUsMTZTOS4xMDcsMjguNDk5LDE2LDI4LjQ5OV'+
			'MyOC41LDIyLjg5MywyOC41LDE2UzIyLjg5MywzLjUsMTYsMy41eiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyBNMTYsMjYuMDgxYy01LjU1OSwwLTEwLjA4LTQuNTIyLTEwLjA4LTEwLjA4MVMxMC40NDEsNS45MTksMTYsNS45MTlTMjYuMDgsMTAuNDQxLDI2LjA4LDE2UzIxLjU1OSwyNi4wODEsMTYsMjYuMDgxeiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIi8+CiAgICA8cGF0aCBkPSJNMjMuMjIxLDEwLjk4NWMtMC4zMTgtMC4yMjctMC43MjctMC4yODUtMS4wOTgtMC4xNTlDMjIuMDkyLDEwLjgzNywxOS4wMSwxMS44OSwxNiwxMS44OSYjeGQ7JiN4YTsmI3g5OyYjeDk7'+
			'JiN4OTsmI3g5O2MtMi45OTYsMC02LjA5NC0xLjA1My02LjEyMy0xLjA2M2MtMC4zNzEtMC4xMjctMC43NzktMC4wNjgtMS4wOTgsMC4xNTljLTAuMzE4LDAuMjI4LTAuNTA4LDAuNTk0LTAuNTA4LDAuOTg0djguMDAyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsMC40MDQsMC4yMDMsMC43ODMsMC41MzksMS4wMDZjMC4yMDEsMC4xMzUsMC40MzYsMC4yMDMsMC42NzIsMC4yMDNjMC4xNTYsMCwwLjMxNi0wLjAyOSwwLjQ2NS0wLjA5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjAyOS0wLjAxMywzLjA2MS0xLjI2Miw2LjA1My0xLjI2MmMyLjk3NywwLDYuMDIzLDEuMj'+
			'UsNi4wNTMsMS4yNjNjMC4zNzUsMC4xNTQsMC44MDEsMC4xMTIsMS4xMzctMC4xMTEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4zMzYtMC4yMjUsMC41MzktMC42MDIsMC41MzktMS4wMDZWMTEuOTdDMjMuNzI5LDExLjU3OSwyMy41MzksMTEuMjEyLDIzLjIyMSwxMC45ODV6IE0yMS4zMDksMTguMjcyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0xLjMzNC0wLjQwMi0zLjMwNS0wLjg2NS01LjMwOS0wLjg2NXMtMy45NzUsMC40NjMtNS4zMDksMC44NjV2LTQuNjkzQzEyLjAxOCwxMy45MTUsMTQsMTQuMzA5LDE2LDE0LjMwOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsm'+
			'I3g5O3MzLjk4Mi0wLjM5NCw1LjMwOS0wLjcyOVYxOC4yNzJ6IiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik0xNiwzLjVDOS4xMDcsMy41LDMuNSw5LjEwNywzLjUsMTZTOS4xMDcsMjguNDk5LDE2LDI4LjQ5OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O1MyOC41LDIyLjg5MywyOC41LDE2UzIyLjg5MywzLjUsMTYsMy41eiBNMTYsMjYuMDgxYy01LjU1OSwwLTEwLjA4LTQuNTIyLTEwLjA4LTEwLjA4MVMxMC40NDEsNS45MTksMTYsNS45MTkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtTMjYuMDgsMTAuNDQxLD'+
			'I2LjA4LDE2UzIxLjU1OSwyNi4wODEsMTYsMjYuMDgxeiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiAgICA8cGF0aCBkPSJNMjMuMjIxLDEwLjk4NWMtMC4zMTgtMC4yMjctMC43MjctMC4yODUtMS4wOTgtMC4xNTkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDMjIuMDkyLDEwLjgzNywxOS4wMSwxMS44OSwxNiwxMS44OWMtMi45OTYsMC02LjA5NC0xLjA1My02LjEyMy0xLjA2M2MtMC4zNzEtMC4xMjctMC43NzktMC4wNjgtMS4wOTgsMC4xNTkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAu'+
			'MzE4LDAuMjI4LTAuNTA4LDAuNTk0LTAuNTA4LDAuOTg0djguMDAyYzAsMC40MDQsMC4yMDMsMC43ODMsMC41MzksMS4wMDZjMC4yMDEsMC4xMzUsMC40MzYsMC4yMDMsMC42NzIsMC4yMDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4xNTYsMCwwLjMxNi0wLjAyOSwwLjQ2NS0wLjA5M2MwLjAyOS0wLjAxMywzLjA2MS0xLjI2Miw2LjA1My0xLjI2MmMyLjk3NywwLDYuMDIzLDEuMjUsNi4wNTMsMS4yNjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4zNzUsMC4xNTQsMC44MDEsMC4xMTIsMS4xMzctMC4xMTFjMC4zMzYtMC4yMjUsMC41MzktMC42MDIsMC41MzktMS4wMD'+
			'ZWMTEuOTdDMjMuNzI5LDExLjU3OSwyMy41MzksMTEuMjEyLDIzLjIyMSwxMC45ODV6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7IE0yMS4zMDksMTguMjcyYy0xLjMzNC0wLjQwMi0zLjMwNS0wLjg2NS01LjMwOS0wLjg2NXMtMy45NzUsMC40NjMtNS4zMDksMC44NjV2LTQuNjkzQzEyLjAxOCwxMy45MTUsMTQsMTQuMzA5LDE2LDE0LjMwOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O3MzLjk4Mi0wLjM5NCw1LjMwOS0wLjcyOVYxOC4yNzJ6IiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzFBMTcxQiIgc3Ryb2tlLXdpZHRoPSIwLjIiLz4KICAgPC9n'+
			'PgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._stereographic__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._stereographic__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMycHgiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldy'+
			'AwIDAgMzIgMzIiIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiPgogPGcgaWQ9IkxheWVyXzEiPgogIDxnIGRpc3BsYXk9Im5vbmUiIGlkPSJMYXllcl8xXzFfIi8+CiA8L2c+CiA8ZyBpZD0iRWJlbmVfMV8xXyI+CiAgPGc+CiAgIDxnPgogICAgPHBhdGggZD0iTTE2LDIuMjVDOC40MTgsMi4yNSwyLjI1LDguNDE4LDIuMjUsMTZTOC40MTgsMjkuNzQ5LDE2LDI5Ljc0OVMyOS43NSwyMy41ODIsMjkuNzUsMTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtTMjMu'+
			'NTgyLDIuMjUsMTYsMi4yNXogTTE2LDI3LjA4OUM5Ljg4NiwyNy4wODksNC45MTIsMjIuMTE0LDQuOTEyLDE2UzkuODg2LDQuOTExLDE2LDQuOTExUzI3LjA4OCw5Ljg4NiwyNy4wODgsMTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtTMjIuMTE0LDI3LjA4OSwxNiwyNy4wODl6IiBmaWxsPSIjMUExNzFCIi8+CiAgICA8cGF0aCBkPSJNMjMuOTQyLDEwLjQ4M2MtMC4zNS0wLjI1LTAuNzk5LTAuMzEzLTEuMjA3LTAuMTc1Yy0wLjAzNCwwLjAxMi0zLjQyNSwxLjE3LTYuNzM1LDEuMTcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTMuMjk2LDAtNi43MDMtMS4xNTgtNi43MzUtMS'+
			'4xN2MtMC40MDgtMC4xNDEtMC44NTctMC4wNzQtMS4yMDgsMC4xNzVjLTAuMzUsMC4yNTEtMC41NTksMC42NTMtMC41NTksMS4wODN2OC44MDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwwLjQ0NCwwLjIyNCwwLjg2MSwwLjU5NCwxLjEwNmMwLjIyMSwwLjE0NywwLjQ3OSwwLjIyMywwLjczOCwwLjIyM2MwLjE3MiwwLDAuMzQ5LTAuMDMyLDAuNTEyLTAuMTAyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMDMyLTAuMDE0LDMuMzY2LTEuMzg4LDYuNjU4LTEuMzg4YzMuMjc0LDAsNi42MjYsMS4zNzUsNi42NTgsMS4zODljMC40MTIsMC4xNywwLjg4MSwwLjEyMywxLjI1'+
			'LTAuMTIyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMzY5LTAuMjQ3LDAuNTkzLTAuNjYyLDAuNTkzLTEuMTA2di04LjgwM0MyNC41MDEsMTEuMTM3LDI0LjI5MywxMC43MzIsMjMuOTQyLDEwLjQ4M3ogTTIxLjgzOSwxOC41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0xLjQ2Ny0wLjQ0My0zLjYzNS0wLjk1Mi01LjgzOS0wLjk1MnMtNC4zNzIsMC41MDktNS44NCwwLjk1MnYtNS4xNjNjMS40NTksMC4zNjksMy42NCwwLjgwMyw1Ljg0LDAuODAzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7czQuMzgxLTAuNDM0LDUuODM5LTAuODAzVjE4LjV6IiBmaWxsPSIjMU'+
			'ExNzFCIi8+CiAgIDwvZz4KICAgPGcgb3BhY2l0eT0iMC40Ij4KICAgIDxwYXRoIGQ9Ik0xNiwyLjI1QzguNDE4LDIuMjUsMi4yNSw4LjQxOCwyLjI1LDE2UzguNDE4LDI5Ljc0OSwxNiwyOS43NDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtTMjkuNzUsMjMuNTgyLDI5Ljc1LDE2UzIzLjU4MiwyLjI1LDE2LDIuMjV6IE0xNiwyNy4wODlDOS44ODYsMjcuMDg5LDQuOTEyLDIyLjExNCw0LjkxMiwxNlM5Ljg4Niw0LjkxMSwxNiw0LjkxMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O1MyNy4wODgsOS44ODYsMjcuMDg4LDE2UzIyLjExNCwyNy4wODksMTYsMjcuMDg5eiIgZmlsbC1v'+
			'cGFjaXR5PSIxIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICA8cGF0aCBkPSJNMjMuOTQyLDEwLjQ4M2MtMC4zNS0wLjI1LTAuNzk5LTAuMzEzLTEuMjA3LTAuMTc1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjAzNCwwLjAxMi0zLjQyNSwxLjE3LTYuNzM1LDEuMTdjLTMuMjk2LDAtNi43MDMtMS4xNTgtNi43MzUtMS4xN2MtMC40MDgtMC4xNDEtMC44NTctMC4wNzQtMS4yMDgsMC4xNzUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuMzUsMC4yNTEtMC41NTksMC42NTMtMC41NTksMS4wODN2OC44MDNjMCwwLj'+
			'Q0NCwwLjIyNCwwLjg2MSwwLjU5NCwxLjEwNmMwLjIyMSwwLjE0NywwLjQ3OSwwLjIyMywwLjczOCwwLjIyMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjE3MiwwLDAuMzQ5LTAuMDMyLDAuNTEyLTAuMTAyYzAuMDMyLTAuMDE0LDMuMzY2LTEuMzg4LDYuNjU4LTEuMzg4YzMuMjc0LDAsNi42MjYsMS4zNzUsNi42NTgsMS4zODkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC40MTIsMC4xNywwLjg4MSwwLjEyMywxLjI1LTAuMTIyYzAuMzY5LTAuMjQ3LDAuNTkzLTAuNjYyLDAuNTkzLTEuMTA2di04LjgwM0MyNC41MDEsMTEuMTM3LDI0LjI5MywxMC43MzIsMjMuOTQyLDEw'+
			'LjQ4M3omI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsgTTIxLjgzOSwxOC41Yy0xLjQ2Ny0wLjQ0My0zLjYzNS0wLjk1Mi01LjgzOS0wLjk1MnMtNC4zNzIsMC41MDktNS44NCwwLjk1MnYtNS4xNjNjMS40NTksMC4zNjksMy42NCwwLjgwMyw1Ljg0LDAuODAzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7czQuMzgxLTAuNDM0LDUuODM5LTAuODAzVjE4LjV6IiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzNDM0MzQyIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik0xNiwyLjI1QzguNDE4LDIuMjUsMi4yNSw4Lj'+
			'QxOCwyLjI1LDE2UzguNDE4LDI5Ljc0OSwxNiwyOS43NDlTMjkuNzUsMjMuNTgyLDI5Ljc1LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7UzIzLjU4MiwyLjI1LDE2LDIuMjV6IE0xNiwyNy4wODlDOS44ODYsMjcuMDg5LDQuOTEyLDIyLjExNCw0LjkxMiwxNlM5Ljg4Niw0LjkxMSwxNiw0LjkxMVMyNy4wODgsOS44ODYsMjcuMDg4LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7UzIyLjExNCwyNy4wODksMTYsMjcuMDg5eiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIi8+CiAgICA8cGF0aCBkPSJNMjMuOTQyLDEwLjQ4M2MtMC4zNS0wLjI1LTAuNzk5LTAuMzEz'+
			'LTEuMjA3LTAuMTc1Yy0wLjAzNCwwLjAxMi0zLjQyNSwxLjE3LTYuNzM1LDEuMTcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTMuMjk2LDAtNi43MDMtMS4xNTgtNi43MzUtMS4xN2MtMC40MDgtMC4xNDEtMC44NTctMC4wNzQtMS4yMDgsMC4xNzVjLTAuMzUsMC4yNTEtMC41NTksMC42NTMtMC41NTksMS4wODN2OC44MDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwwLjQ0NCwwLjIyNCwwLjg2MSwwLjU5NCwxLjEwNmMwLjIyMSwwLjE0NywwLjQ3OSwwLjIyMywwLjczOCwwLjIyM2MwLjE3MiwwLDAuMzQ5LTAuMDMyLDAuNTEyLTAuMTAyJiN4ZDsmI3hhOyYjeDk7JiN4OT'+
			'smI3g5OyYjeDk7YzAuMDMyLTAuMDE0LDMuMzY2LTEuMzg4LDYuNjU4LTEuMzg4YzMuMjc0LDAsNi42MjYsMS4zNzUsNi42NTgsMS4zODljMC40MTIsMC4xNywwLjg4MSwwLjEyMywxLjI1LTAuMTIyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMzY5LTAuMjQ3LDAuNTkzLTAuNjYyLDAuNTkzLTEuMTA2di04LjgwM0MyNC41MDEsMTEuMTM3LDI0LjI5MywxMC43MzIsMjMuOTQyLDEwLjQ4M3ogTTIxLjgzOSwxOC41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0xLjQ2Ny0wLjQ0My0zLjYzNS0wLjk1Mi01LjgzOS0wLjk1MnMtNC4zNzIsMC41MDktNS44NCwwLjk1MnYtNS4x'+
			'NjNjMS40NTksMC4zNjksMy42NCwwLjgwMyw1Ljg0LDAuODAzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7czQuMzgxLTAuNDM0LDUuODM5LTAuODAzVjE4LjV6IiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik0xNiwyLjI1QzguNDE4LDIuMjUsMi4yNSw4LjQxOCwyLjI1LDE2UzguNDE4LDI5Ljc0OSwxNiwyOS43NDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtTMjkuNzUsMjMuNTgyLDI5Ljc1LDE2UzIzLjU4MiwyLjI1LDE2LDIuMjV6IE0xNiwyNy4wODlDOS44ODYsMjcuMDg5LDQuOTEyLDIyLjExNCw0LjkxMi'+
			'wxNlM5Ljg4Niw0LjkxMSwxNiw0LjkxMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O1MyNy4wODgsOS44ODYsMjcuMDg4LDE2UzIyLjExNCwyNy4wODksMTYsMjcuMDg5eiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiAgICA8cGF0aCBkPSJNMjMuOTQyLDEwLjQ4M2MtMC4zNS0wLjI1LTAuNzk5LTAuMzEzLTEuMjA3LTAuMTc1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjAzNCwwLjAxMi0zLjQyNSwxLjE3LTYuNzM1LDEuMTdjLTMuMjk2LDAtNi43MDMtMS4xNTgtNi43MzUtMS4xN2MtMC40'+
			'MDgtMC4xNDEtMC44NTctMC4wNzQtMS4yMDgsMC4xNzUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuMzUsMC4yNTEtMC41NTksMC42NTMtMC41NTksMS4wODN2OC44MDNjMCwwLjQ0NCwwLjIyNCwwLjg2MSwwLjU5NCwxLjEwNmMwLjIyMSwwLjE0NywwLjQ3OSwwLjIyMywwLjczOCwwLjIyMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjE3MiwwLDAuMzQ5LTAuMDMyLDAuNTEyLTAuMTAyYzAuMDMyLTAuMDE0LDMuMzY2LTEuMzg4LDYuNjU4LTEuMzg4YzMuMjc0LDAsNi42MjYsMS4zNzUsNi42NTgsMS4zODkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC40MT'+
			'IsMC4xNywwLjg4MSwwLjEyMywxLjI1LTAuMTIyYzAuMzY5LTAuMjQ3LDAuNTkzLTAuNjYyLDAuNTkzLTEuMTA2di04LjgwM0MyNC41MDEsMTEuMTM3LDI0LjI5MywxMC43MzIsMjMuOTQyLDEwLjQ4M3omI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsgTTIxLjgzOSwxOC41Yy0xLjQ2Ny0wLjQ0My0zLjYzNS0wLjk1Mi01LjgzOS0wLjk1MnMtNC4zNzIsMC41MDktNS44NCwwLjk1MnYtNS4xNjNjMS40NTksMC4zNjksMy42NCwwLjgwMyw1Ljg0LDAuODAzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7czQuMzgxLTAuNDM0LDUuODM5LTAuODAzVjE4LjV6IiBmaWxsLW9wYWNpdHk9IjEi'+
			'IGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzFBMTcxQiIgc3Ryb2tlLXdpZHRoPSIwLjIiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._stereographic__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="stereographic";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._stereographic.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._stereographic.onmouseover=function (e) {
			me._stereographic__img.style.visibility='hidden';
			me._stereographic__imgo.style.visibility='inherit';
		}
		me._stereographic.onmouseout=function (e) {
			me._stereographic__img.style.visibility='inherit';
			me._stereographic__imgo.style.visibility='hidden';
		}
		me._stereographic.ggUpdatePosition=function (useTransition) {
		}
		me._projection_buttons.appendChild(me._stereographic);
		el=me._tt_projection=document.createElement('div');
		els=me._tt_projection__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_projection";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_projection.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_projection.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_projection.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_projection.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_projection.style[domTransition]='left 0s, top 0s';
				if (me._tt_projection.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_projection.style.top='-25px';
					me._tt_projection.ggUpdatePosition(true);
				}
				else {
					me._tt_projection.ggDx=0;
					me._tt_projection.style.top='32px';
					me._tt_projection.ggUpdatePosition(true);
				}
			}
		}
		me._tt_projection.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['projection_buttons'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_projection.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_projection.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_projection.style[domTransition]='left 0s, top 0s';
				if (me._tt_projection.ggCurrentLogicStateVisible == 0) {
					me._tt_projection.style.visibility=(Number(me._tt_projection.style.opacity)>0||!me._tt_projection.style.opacity)?'inherit':'hidden';
					me._tt_projection.ggVisible=true;
				}
				else {
					me._tt_projection.style.visibility="hidden";
					me._tt_projection.ggVisible=false;
				}
			}
		}
		me._tt_projection.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getProjection() == 4))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getProjection() == 9))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getProjection() == 12))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_projection.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_projection.ggCurrentLogicStateText = newLogicStateText;
				me._tt_projection.style[domTransition]='left 0s, top 0s';
				if (me._tt_projection.ggCurrentLogicStateText == 0) {
					me._tt_projection.ggText="Change to Sterographic";
					me._tt_projection__text.innerHTML=me._tt_projection.ggText;
					if (me._tt_projection.ggUpdateText) {
					me._tt_projection.ggUpdateText=function() {
						var hs="Change to Sterographic";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_projection.ggUpdatePosition) me._tt_projection.ggUpdatePosition();
					}
				}
				else if (me._tt_projection.ggCurrentLogicStateText == 1) {
					me._tt_projection.ggText="Change to Fisheye";
					me._tt_projection__text.innerHTML=me._tt_projection.ggText;
					if (me._tt_projection.ggUpdateText) {
					me._tt_projection.ggUpdateText=function() {
						var hs="Change to Fisheye";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_projection.ggUpdatePosition) me._tt_projection.ggUpdatePosition();
					}
				}
				else if (me._tt_projection.ggCurrentLogicStateText == 2) {
					me._tt_projection.ggText="Change to Rectilinear";
					me._tt_projection__text.innerHTML=me._tt_projection.ggText;
					if (me._tt_projection.ggUpdateText) {
					me._tt_projection.ggUpdateText=function() {
						var hs="Change to Rectilinear";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_projection.ggUpdatePosition) me._tt_projection.ggUpdatePosition();
					}
				}
				else {
					me._tt_projection.ggText="";
					me._tt_projection__text.innerHTML=me._tt_projection.ggText;
					if (me._tt_projection.ggUpdateText) {
					me._tt_projection.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_projection.ggUpdatePosition) me._tt_projection.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_projection.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._projection_buttons.appendChild(me._tt_projection);
		me._controller_slider.appendChild(me._projection_buttons);
		el=me._info=document.createElement('div');
		els=me._info__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzJweCIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIzMnB4IiB4bWxuczp4bGluaz'+
			'0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZT0iIzNDM0MzQyIgb3BhY2l0eT0iMC40IiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLjUsMTZDMy41LDkuMDk2LDkuMDk2LDMuNSwxNiwzLjVsMCwwYzYuOTAzLDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuMDAxLDYuOTAzLTUuNTk3LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OSwzLjUsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE04Ljg1NCw4'+
			'Ljg1MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0M3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLjAwMSwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2MSw3LjE0NmwwLDBjMS44MzIsMS44MzEsNC4zNTIsMi45Niw3LjE0NiwyLjk2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MyLjc5NSwwLDUuMzE0LTEuMTI5LDcuMTQ3LTIuOTZsMCwwYzEuODMxLTEuODMyLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MyMS4zMTMsNy4wMj'+
			'IsMTguNzk1LDUuODkzLDE2LDUuODkybDAsMEMxMy4yMDUsNS44OTMsMTAuNjg2LDcuMDIyLDguODU0LDguODUzTDguODU0LDguODUzeiIvPgogIDwvZz4KICA8Zz4KICAgPHBhdGggZD0iTTE0Ljk2MywxMC4wNVY5LjUyMWMwLTAuNjYxLDAuNTM2LTEuMTk2LDEuMTk3LTEuMTk2bDAsMGMwLjY2LDAsMS4xOTYsMC41MzYsMS4xOTYsMS4xOTZsMCwwdjAuNTI5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsMC42NjEtMC41MzYsMS4xOTYtMS4xOTYsMS4xOTZsMCwwQzE1LjUsMTEuMjQ3LDE0Ljk2MywxMC43MTEsMTQuOTYzLDEwLjA1TDE0Ljk2MywxMC4wNXoiLz4KICAgPGc+CiAgICA8'+
			'cGF0aCBkPSJNMTguNTMyLDIwLjM5MWgtMS4xNzZ2LTYuNDczYzAtMC4wMjEtMC4wMDUtMC4wNDItMC4wMDYtMC4wNjNjMC0wLjAxNCwwLjAwNC0wLjAyNiwwLjAwNC0wLjA0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC0wLjY2MS0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMi4yMjZjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDEuMDMxdjUuMzc5aC0xLjIwNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNi'+
			'wxLjE5NiwxLjE5NywxLjE5Nmg0Ljc3NWMwLjY2LDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MxOS43MjksMjAuOTI2LDE5LjE5MiwyMC4zOTEsMTguNTMyLDIwLjM5MXoiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KIDxnIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLjUsMTZDMy41LDkuMDk2LDkuMDk2LDMuNSwxNiwzLjVsMCwwYzYuOTAzLDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAmI3hkOyYjeGE7JiN4OTsm'+
			'I3g5OyYjeDk7JiN4OTtjLTAuMDAxLDYuOTAzLTUuNTk3LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OSwzLjUsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE04Ljg1NCw4Ljg1MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0M3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLjAwMSwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2MSw3LjE0NmwwLDBjMS44MzIsMS44MzEsNC4zNTIsMi45Niw3LjE0NiwyLjk2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MyLjc5NSwwLDUuMzE0LTEuMTI5LDcuMTQ3LTIuOTZsMCwwYzEuODMxLTEuODMyLDIuOTU5LT'+
			'QuMzUyLDIuOTYtNy4xNDZsMCwwYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MyMS4zMTMsNy4wMjIsMTguNzk1LDUuODkzLDE2LDUuODkybDAsMEMxMy4yMDUsNS44OTMsMTAuNjg2LDcuMDIyLDguODU0LDguODUzTDguODU0LDguODUzeiIvPgogIDwvZz4KICA8Zz4KICAgPHBhdGggZD0iTTE0Ljk2MywxMC4wNVY5LjUyMWMwLTAuNjYxLDAuNTM2LTEuMTk2LDEuMTk3LTEuMTk2bDAsMGMwLjY2LDAsMS4xOTYsMC41MzYsMS4xOTYsMS4xOTZsMCwwdjAuNTI5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAs'+
			'MC42NjEtMC41MzYsMS4xOTYtMS4xOTYsMS4xOTZsMCwwQzE1LjUsMTEuMjQ3LDE0Ljk2MywxMC43MTEsMTQuOTYzLDEwLjA1TDE0Ljk2MywxMC4wNXoiLz4KICAgPGc+CiAgICA8cGF0aCBkPSJNMTguNTMyLDIwLjM5MWgtMS4xNzZ2LTYuNDczYzAtMC4wMjEtMC4wMDUtMC4wNDItMC4wMDYtMC4wNjNjMC0wLjAxNCwwLjAwNC0wLjAyNiwwLjAwNC0wLjA0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC0wLjY2MS0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMi4yMjZjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk3LDEuMT'+
			'k2aDEuMDMxdjUuMzc5aC0xLjIwNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NywxLjE5Nmg0Ljc3NWMwLjY2LDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MxOS43MjksMjAuOTI2LDE5LjE5MiwyMC4zOTEsMTguNTMyLDIwLjM5MXoiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._info__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzJweCIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIzMnB4IiB4bWxuczp4bGluaz'+
			'0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlPSIjM0MzQzNDIiBvcGFjaXR5PSIwLjQiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8Zz4KICAgPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41LDE2LDMuNWwwLDBjNi45MDMsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4wMDEsNi45MDMtNS41OTcsMTIuNDk5LTEy'+
			'LjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTguODU0LDguODUzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7QzcuMDIyLDEwLjY4Niw1Ljg5NCwxMy4yMDUsNS44OTMsMTZsMCwwYzAuMDAxLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYxLDcuMTQ2bDAsMGMxLjgzMiwxLjgzMSw0LjM1MiwyLjk2LDcuMTQ2LDIuOTZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzIuNzk1LDAsNS4zMTQtMS4xMjksNy4xNDctMi45NmwwLDBjMS44MzEtMS44MzIsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDBjLTAuMDAxLTIuNzk1LTEuMTI5LTUuMz'+
			'E0LTIuOTYtNy4xNDdsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7QzIxLjMxMyw3LjAyMiwxOC43OTUsNS44OTMsMTYsNS44OTJsMCwwQzEzLjIwNSw1Ljg5MywxMC42ODYsNy4wMjIsOC44NTQsOC44NTNMOC44NTQsOC44NTN6Ii8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBkPSJNMTQuOTYzLDEwLjA1VjkuNTIxYzAtMC42NjEsMC41MzYtMS4xOTYsMS4xOTctMS4xOTZsMCwwYzAuNjYsMCwxLjE5NiwwLjUzNiwxLjE5NiwxLjE5NmwwLDB2MC41MjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwwLjY2MS0wLjUzNiwxLjE5Ni0xLjE5NiwxLjE5NmwwLDBDMTUuNSwxMS4y'+
			'NDcsMTQuOTYzLDEwLjcxMSwxNC45NjMsMTAuMDVMMTQuOTYzLDEwLjA1eiIvPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik0xOC41MzIsMjAuMzkxaC0xLjE3NnYtNi40NzNjMC0wLjAyMS0wLjAwNS0wLjA0Mi0wLjAwNi0wLjA2M2MwLTAuMDE0LDAuMDA0LTAuMDI2LDAuMDA0LTAuMDQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLTAuNjYxLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0yLjIyNmMtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NmMwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMS4wMzF2NS4zNzloLTEuMjA3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3'+
			'g5OyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDQuNzc1YzAuNjYsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyYjeDk7QzE5LjcyOSwyMC45MjYsMTkuMTkyLDIwLjM5MSwxOC41MzIsMjAuMzkxeiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdp'+
			'ZHRoPSIwLjIiPgogIDxnPgogICA8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUsMTYsMy41bDAsMGM2LjkwMywwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjAwMSw2LjkwMy01LjU5NywxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwMywzLjUsMTZMMy41LDE2eiBNOC44NTQsOC44NTMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDNy4wMjIsMTAuNjg2LDUuODk0LDEzLjIwNSw1Ljg5MywxNmwwLDBjMC4wMDEsMi43OTUsMS4xMjksNS4zMTQsMi45NjEsNy4xNDZsMCwwYzEuOD'+
			'MyLDEuODMxLDQuMzUyLDIuOTYsNy4xNDYsMi45NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMi43OTUsMCw1LjMxNC0xLjEyOSw3LjE0Ny0yLjk2bDAsMGMxLjgzMS0xLjgzMiwyLjk1OS00LjM1MiwyLjk2LTcuMTQ2bDAsMGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTQtMi45Ni03LjE0N2wwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDMjEuMzEzLDcuMDIyLDE4Ljc5NSw1Ljg5MywxNiw1Ljg5MmwwLDBDMTMuMjA1LDUuODkzLDEwLjY4Niw3LjAyMiw4Ljg1NCw4Ljg1M0w4Ljg1NCw4Ljg1M3oiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xNC45NjMsMTAu'+
			'MDVWOS41MjFjMC0wLjY2MSwwLjUzNi0xLjE5NiwxLjE5Ny0xLjE5NmwwLDBjMC42NiwwLDEuMTk2LDAuNTM2LDEuMTk2LDEuMTk2bDAsMHYwLjUyOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDAuNjYxLTAuNTM2LDEuMTk2LTEuMTk2LDEuMTk2bDAsMEMxNS41LDExLjI0NywxNC45NjMsMTAuNzExLDE0Ljk2MywxMC4wNUwxNC45NjMsMTAuMDV6Ii8+CiAgIDxnPgogICAgPHBhdGggZD0iTTE4LjUzMiwyMC4zOTFoLTEuMTc2di02LjQ3M2MwLTAuMDIxLTAuMDA1LTAuMDQyLTAuMDA2LTAuMDYzYzAtMC4wMTQsMC4wMDQtMC4wMjYsMC4wMDQtMC4wNCYjeGQ7JiN4YTsmI3g5OyYjeD'+
			'k7JiN4OTsmI3g5OyYjeDk7YzAtMC42NjEtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTIuMjI2Yy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgxLjAzMXY1LjM3OWgtMS4yMDcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NmMwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoNC43NzVjMC42NiwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7JiN4OTtDMTkuNzI5LDIwLjkyNiwxOS4xOTIsMjAuMzkx'+
			'LDE4LjUzMiwyMC4zOTF6Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._info__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 96px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('pos_information') == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('pos_information') == 1))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('pos_information') == 2))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('pos_information') == 3))
			)
			{
				newLogicStatePosition = 3;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._info.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._info.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._info.style[domTransition]='left 0s, top 0s';
				if (me._info.ggCurrentLogicStatePosition == 0) {
					me._info.style.left='0px';
					me._info.style.top='0px';
				}
				else if (me._info.ggCurrentLogicStatePosition == 1) {
					me._info.style.left='32px';
					me._info.style.top='0px';
				}
				else if (me._info.ggCurrentLogicStatePosition == 2) {
					me._info.style.left='64px';
					me._info.style.top='0px';
				}
				else if (me._info.ggCurrentLogicStatePosition == 3) {
					me._info.style.left='96px';
					me._info.style.top='0px';
				}
				else {
					me._info.style.left='96px';
					me._info.style.top='0px';
				}
			}
		}
		me._info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_info') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info.style[domTransition]='left 0s, top 0s';
				if (me._info.ggCurrentLogicStateVisible == 0) {
					me._info.style.visibility=(Number(me._info.style.opacity)>0||!me._info.style.opacity)?'inherit':'hidden';
					me._info.ggVisible=true;
				}
				else {
					me._info.style.visibility="hidden";
					me._info.ggVisible=false;
				}
			}
		}
		me._info.onclick=function (e) {
			player.setVariableValue('vis_userdata', true);
		}
		me._info.onmouseover=function (e) {
			me._info__img.style.visibility='hidden';
			me._info__imgo.style.visibility='inherit';
			me.elementMouseOver['info']=true;
			me._tt_userdata.logicBlock_visible();
		}
		me._info.onmouseout=function (e) {
			me._info__img.style.visibility='inherit';
			me._info__imgo.style.visibility='hidden';
			me.elementMouseOver['info']=false;
			me._tt_userdata.logicBlock_visible();
		}
		me._info.ontouchend=function (e) {
			me.elementMouseOver['info']=false;
			me._tt_userdata.logicBlock_visible();
		}
		me._info.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_userdata=document.createElement('div');
		els=me._tt_userdata__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_userdata";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Show User Data";
		el.appendChild(els);
		me._tt_userdata.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_userdata.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_userdata.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_userdata.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_userdata.style[domTransition]='left 0s, top 0s';
				if (me._tt_userdata.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_userdata.style.top='-25px';
					me._tt_userdata.ggUpdatePosition(true);
				}
				else {
					me._tt_userdata.ggDx=0;
					me._tt_userdata.style.top='32px';
					me._tt_userdata.ggUpdatePosition(true);
				}
			}
		}
		me._tt_userdata.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['info'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_userdata.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_userdata.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_userdata.style[domTransition]='left 0s, top 0s';
				if (me._tt_userdata.ggCurrentLogicStateVisible == 0) {
					me._tt_userdata.style.visibility=(Number(me._tt_userdata.style.opacity)>0||!me._tt_userdata.style.opacity)?'inherit':'hidden';
					me._tt_userdata.ggVisible=true;
				}
				else {
					me._tt_userdata.style.visibility="hidden";
					me._tt_userdata.ggVisible=false;
				}
			}
		}
		me._tt_userdata.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._info.appendChild(me._tt_userdata);
		me._controller_slider.appendChild(me._info);
		el=me._autorotate_buttons=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="autorotate_buttons";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 64px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._autorotate_buttons.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._autorotate_buttons.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('pos_autorotate') == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('pos_autorotate') == 1))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('pos_autorotate') == 2))
			)
			{
				newLogicStatePosition = 2;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._autorotate_buttons.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._autorotate_buttons.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._autorotate_buttons.style[domTransition]='left 0s, top 0s';
				if (me._autorotate_buttons.ggCurrentLogicStatePosition == 0) {
					me._autorotate_buttons.style.left='0px';
					me._autorotate_buttons.style.top='0px';
				}
				else if (me._autorotate_buttons.ggCurrentLogicStatePosition == 1) {
					me._autorotate_buttons.style.left='32px';
					me._autorotate_buttons.style.top='0px';
				}
				else if (me._autorotate_buttons.ggCurrentLogicStatePosition == 2) {
					me._autorotate_buttons.style.left='64px';
					me._autorotate_buttons.style.top='0px';
				}
				else {
					me._autorotate_buttons.style.left='64px';
					me._autorotate_buttons.style.top='0px';
				}
			}
		}
		me._autorotate_buttons.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_autorotate') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._autorotate_buttons.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._autorotate_buttons.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._autorotate_buttons.style[domTransition]='left 0s, top 0s';
				if (me._autorotate_buttons.ggCurrentLogicStateVisible == 0) {
					me._autorotate_buttons.style.visibility=(Number(me._autorotate_buttons.style.opacity)>0||!me._autorotate_buttons.style.opacity)?'inherit':'hidden';
					me._autorotate_buttons.ggVisible=true;
				}
				else {
					me._autorotate_buttons.style.visibility="hidden";
					me._autorotate_buttons.ggVisible=false;
				}
			}
		}
		me._autorotate_buttons.onclick=function (e) {
			player.setUseGyro(false);
			player.toggleAutorotate();
		}
		me._autorotate_buttons.onmouseover=function (e) {
			me.elementMouseOver['autorotate_buttons']=true;
			me._tt_rotate.logicBlock_visible();
		}
		me._autorotate_buttons.onmouseout=function (e) {
			me.elementMouseOver['autorotate_buttons']=false;
			me._tt_rotate.logicBlock_visible();
		}
		me._autorotate_buttons.ontouchend=function (e) {
			me.elementMouseOver['autorotate_buttons']=false;
			me._tt_rotate.logicBlock_visible();
		}
		me._autorotate_buttons.ggUpdatePosition=function (useTransition) {
		}
		el=me._autorotate_start=document.createElement('div');
		els=me._autorotate_start__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzJweCIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIzMnB4IiB4bWxuczp4bGluaz'+
			'0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZT0iIzNDM0MzQyIgb3BhY2l0eT0iMC40IiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLjUsMTZjMC02LjkwNCw1LjU5Ni0xMi41LDEyLjUtMTIuNWwwLDBjNi45MDQsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4wMDEsNi45MDQtNS41OTYsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTguODUz'+
			'LDguODU0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0xLjgzMSwxLjgzMy0yLjk2LDQuMzUyLTIuOTYsNy4xNDdsMCwwYzAsMi43OTQsMS4xMjksNS4zMTQsMi45Niw3LjE0N2wwLDBjMS44MzIsMS44Myw0LjM1MiwyLjk2LDcuMTQ3LDIuOTZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzIuNzk1LDAsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2bDAsMGMxLjgzMS0xLjgzMywyLjk1OS00LjM1MywyLjk2LTcuMTQ3bDAsMGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTQtMi45Ni03LjE0N2wwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTEuODMzLTEuODMyLTQuMz'+
			'UzLTIuOTYtNy4xNDctMi45NmwwLDBDMTMuMjA1LDUuODk0LDEwLjY4Niw3LjAyMiw4Ljg1Myw4Ljg1NEw4Ljg1Myw4Ljg1NHoiLz4KICA8L2c+CiAgPHBhdGggZD0iTTE4LjA3LDIwLjAwMWMtMC4xNzQtMC42MzgsMC4yMDMtMS4yOTUsMC44NDEtMS40NjlsMCwwYzEuMTM0LTAuMzA2LDIuMDU1LTAuNzg5LDIuNjMzLTEuMzA1bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC41ODQtMC41MjYsMC43OTctMS4wMDgsMC43OTgtMS40NDRsMCwwYy0wLjAwMi0wLjMxLTAuMTAyLTAuNjE3LTAuMzU5LTAuOTdsMCwwYy0wLjI1Ni0wLjM1LTAuNjc4LTAuNzIxLTEuMjQ3LTEuMDQ1bDAsMCYjeGQ7'+
			'JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuMTM3LTAuNjU2LTIuODQtMS4xMS00LjczNS0xLjEwNmwwLDBjLTEuNDIyLTAuMDAxLTIuNzM1LDAuMjUtMy43ODMsMC42NTdsMCwwYy0xLjA1MSwwLjQwMi0xLjgxOSwwLjk2OS0yLjIwMSwxLjQ5NWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjI1NywwLjM1NC0wLjM1NiwwLjY2MS0wLjM1OCwwLjk3bDAsMGMwLjAwMSwwLjI4OCwwLjA4NywwLjU3MSwwLjMwNiwwLjg5NWwwLDBjMC4yMTcsMC4zMjEsMC41NzUsMC42NjYsMS4wNjUsMC45NzhsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2gwLjAwMWMwLjU1NywwLjM1NiwwLjcyLDEuMD'+
			'k2LDAuMzY0LDEuNjUybDAsMGMtMC4zNTUsMC41NTctMS4wOTUsMC43Mi0xLjY1MiwwLjM2NGwwLDBjLTAuNzA2LTAuNDUxLTEuMzEtMC45OTQtMS43NTUtMS42NDZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40NDQtMC42NDctMC43MjMtMS40MjMtMC43MjItMi4yNDNsMCwwYy0wLjAwMS0wLjg4MywwLjMyMS0xLjcxMiwwLjgyNy0yLjM5MmwwLDBjMC41MDctMC42ODQsMS4xODgtMS4yNDQsMS45ODMtMS43bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS41OTItMC45MDcsMy42NTctMS40MTksNS45MjUtMS40MjNsMCwwYzEuNywwLDMuMjg4LDAuMjkzLDQuNjQ2LDAuODE4'+
			'bDAsMGMxLjM1NSwwLjUyOSwyLjQ5OCwxLjI4MSwzLjI2MSwyLjMwNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNTA2LDAuNjgsMC44MjksMS41MDgsMC44MjYsMi4zOTJsMCwwYzAuMDAxLDEuMjg4LTAuNjY4LDIuNDEzLTEuNjAyLDMuMjMzbDAsMGMtMC45NDIsMC44MzItMi4xNzgsMS40MzgtMy41OTQsMS44MjVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4xMDQsMC4wMjgtMC4yMTEsMC4wNDItMC4zMTQsMC4wNDJsMCwwQzE4LjY5NiwyMC44ODQsMTguMjE0LDIwLjUzMywxOC4wNywyMC4wMDFMMTguMDcsMjAuMDAxeiIvPgogIDxwYXRoIGQ9Ik0xNi4zOTYsMjMuNj'+
			'IxbC0zLjM3My0zLjAzOWMtMC4yNTEtMC4yMjYtMC4zOTYtMC41NTEtMC4zOTYtMC44ODlsMCwwYzAtMC4zMzcsMC4xNDYtMC42NjMsMC4zOTYtMC44ODkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDAsMGwzLjM3NC0zLjAzOWMwLjQ5MS0wLjQ0MiwxLjI0Ny0wLjQwMywxLjY4OSwwLjA4OGwwLDBjMC40NDIsMC40OTEsMC40MDIsMS4yNDctMC4wODgsMS42ODlsMCwwbC0yLjM4NiwyLjE1bDIuMzg2LDIuMTQ5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQ5LDAuNDQyLDAuNTMsMS4xOTksMC4wODgsMS42OWwwLDBjLTAuMjM2LDAuMjYyLTAuNTYyLDAuMzk1LTAuODksMC4zOTVsMCwwQzE2'+
			'LjkxMiwyMy45MjgsMTYuNjI1LDIzLjgyNiwxNi4zOTYsMjMuNjIxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0wxNi4zOTYsMjMuNjIxeiIvPgogPC9nPgogPGcgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIj4KICA8Zz4KICAgPHBhdGggZD0iTTMuNSwxNmMwLTYuOTA0LDUuNTk2LTEyLjUsMTIuNS0xMi41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjAwMSw2LjkwNC01LjU5NiwxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OT'+
			'ksMy41LDIyLjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTMsOC44NTQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTEuODMxLDEuODMzLTIuOTYsNC4zNTItMi45Niw3LjE0N2wwLDBjMCwyLjc5NCwxLjEyOSw1LjMxNCwyLjk2LDcuMTQ3bDAsMGMxLjgzMiwxLjgzLDQuMzUyLDIuOTYsNy4xNDcsMi45NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMi43OTUsMCw1LjMxNC0xLjEzLDcuMTQ3LTIuOTZsMCwwYzEuODMxLTEuODMzLDIuOTU5LTQuMzUzLDIuOTYtNy4xNDdsMCwwYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMCYjeGQ7JiN4YTsmI3g5'+
			'OyYjeDk7JiN4OTsmI3g5O2MtMS44MzMtMS44MzItNC4zNTMtMi45Ni03LjE0Ny0yLjk2bDAsMEMxMy4yMDUsNS44OTQsMTAuNjg2LDcuMDIyLDguODUzLDguODU0TDguODUzLDguODU0eiIvPgogIDwvZz4KICA8cGF0aCBkPSJNMTguMDcsMjAuMDAxYy0wLjE3NC0wLjYzOCwwLjIwMy0xLjI5NSwwLjg0MS0xLjQ2OWwwLDBjMS4xMzQtMC4zMDYsMi4wNTUtMC43ODksMi42MzMtMS4zMDVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjU4NC0wLjUyNiwwLjc5Ny0xLjAwOCwwLjc5OC0xLjQ0NGwwLDBjLTAuMDAyLTAuMzEtMC4xMDItMC42MTctMC4zNTktMC45N2wwLDBjLTAuMjU2LTAuMz'+
			'UtMC42NzgtMC43MjEtMS4yNDctMS4wNDVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMS4xMzctMC42NTYtMi44NC0xLjExLTQuNzM1LTEuMTA2bDAsMGMtMS40MjItMC4wMDEtMi43MzUsMC4yNS0zLjc4MywwLjY1N2wwLDBjLTEuMDUxLDAuNDAyLTEuODE5LDAuOTY5LTIuMjAxLDEuNDk1bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMjU3LDAuMzU0LTAuMzU2LDAuNjYxLTAuMzU4LDAuOTdsMCwwYzAuMDAxLDAuMjg4LDAuMDg3LDAuNTcxLDAuMzA2LDAuODk1bDAsMGMwLjIxNywwLjMyMSwwLjU3NSwwLjY2NiwxLjA2NSwwLjk3OGwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5'+
			'OyYjeDk7aDAuMDAxYzAuNTU3LDAuMzU2LDAuNzIsMS4wOTYsMC4zNjQsMS42NTJsMCwwYy0wLjM1NSwwLjU1Ny0xLjA5NSwwLjcyLTEuNjUyLDAuMzY0bDAsMGMtMC43MDYtMC40NTEtMS4zMS0wLjk5NC0xLjc1NS0xLjY0NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjQ0NC0wLjY0Ny0wLjcyMy0xLjQyMy0wLjcyMi0yLjI0M2wwLDBjLTAuMDAxLTAuODgzLDAuMzIxLTEuNzEyLDAuODI3LTIuMzkybDAsMGMwLjUwNy0wLjY4NCwxLjE4OC0xLjI0NCwxLjk4My0xLjdsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjU5Mi0wLjkwNywzLjY1Ny0xLjQxOSw1LjkyNS0xLjQyM2'+
			'wwLDBjMS43LDAsMy4yODgsMC4yOTMsNC42NDYsMC44MThsMCwwYzEuMzU1LDAuNTI5LDIuNDk4LDEuMjgxLDMuMjYxLDIuMzA1bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC41MDYsMC42OCwwLjgyOSwxLjUwOCwwLjgyNiwyLjM5MmwwLDBjMC4wMDEsMS4yODgtMC42NjgsMi40MTMtMS42MDIsMy4yMzNsMCwwYy0wLjk0MiwwLjgzMi0yLjE3OCwxLjQzOC0zLjU5NCwxLjgyNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjEwNCwwLjAyOC0wLjIxMSwwLjA0Mi0wLjMxNCwwLjA0MmwwLDBDMTguNjk2LDIwLjg4NCwxOC4yMTQsMjAuNTMzLDE4LjA3LDIwLjAwMUwxOC4wNywy'+
			'MC4wMDF6Ii8+CiAgPHBhdGggZD0iTTE2LjM5NiwyMy42MjFsLTMuMzczLTMuMDM5Yy0wLjI1MS0wLjIyNi0wLjM5Ni0wLjU1MS0wLjM5Ni0wLjg4OWwwLDBjMC0wLjMzNywwLjE0Ni0wLjY2MywwLjM5Ni0wLjg4OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMCwwbDMuMzc0LTMuMDM5YzAuNDkxLTAuNDQyLDEuMjQ3LTAuNDAzLDEuNjg5LDAuMDg4bDAsMGMwLjQ0MiwwLjQ5MSwwLjQwMiwxLjI0Ny0wLjA4OCwxLjY4OWwwLDBsLTIuMzg2LDIuMTVsMi4zODYsMi4xNDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNDksMC40NDIsMC41MywxLjE5OSwwLjA4OCwxLjY5bDAsMGMtMC4yMzYsMC'+
			'4yNjItMC41NjIsMC4zOTUtMC44OSwwLjM5NWwwLDBDMTYuOTEyLDIzLjkyOCwxNi42MjUsMjMuODI2LDE2LjM5NiwyMy42MjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7TDE2LjM5NiwyMy42MjF6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._autorotate_start__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._autorotate_start__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzJweCIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIzMnB4IiB4bWxuczp4bGluaz'+
			'0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlPSIjM0MzQzNDIiBvcGFjaXR5PSIwLjQiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8Zz4KICAgPHBhdGggZD0iTTMuNSwxNmMwLTYuOTA0LDUuNTk2LTEyLjUsMTIuNS0xMi41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjAwMSw2LjkwNC01LjU5NiwxMi40OTkt'+
			'MTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTMsOC44NTQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTEuODMxLDEuODMzLTIuOTYsNC4zNTItMi45Niw3LjE0N2wwLDBjMCwyLjc5NCwxLjEyOSw1LjMxNCwyLjk2LDcuMTQ3bDAsMGMxLjgzMiwxLjgzLDQuMzUyLDIuOTYsNy4xNDcsMi45NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMi43OTUsMCw1LjMxNC0xLjEzLDcuMTQ3LTIuOTZsMCwwYzEuODMxLTEuODMzLDIuOTU5LTQuMzUzLDIuOTYtNy4xNDdsMCwwYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxNC0yLj'+
			'k2LTcuMTQ3bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMS44MzMtMS44MzItNC4zNTMtMi45Ni03LjE0Ny0yLjk2bDAsMEMxMy4yMDUsNS44OTQsMTAuNjg2LDcuMDIyLDguODUzLDguODU0TDguODUzLDguODU0eiIvPgogIDwvZz4KICA8cGF0aCBkPSJNMTguMDcsMjAuMDAxYy0wLjE3NC0wLjYzOCwwLjIwMy0xLjI5NSwwLjg0MS0xLjQ2OWwwLDBjMS4xMzQtMC4zMDYsMi4wNTUtMC43ODksMi42MzMtMS4zMDVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjU4NC0wLjUyNiwwLjc5Ny0xLjAwOCwwLjc5OC0xLjQ0NGwwLDBjLTAuMDAyLTAuMzEtMC4xMDItMC42MTct'+
			'MC4zNTktMC45N2wwLDBjLTAuMjU2LTAuMzUtMC42NzgtMC43MjEtMS4yNDctMS4wNDVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMS4xMzctMC42NTYtMi44NC0xLjExLTQuNzM1LTEuMTA2bDAsMGMtMS40MjItMC4wMDEtMi43MzUsMC4yNS0zLjc4MywwLjY1N2wwLDBjLTEuMDUxLDAuNDAyLTEuODE5LDAuOTY5LTIuMjAxLDEuNDk1bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMjU3LDAuMzU0LTAuMzU2LDAuNjYxLTAuMzU4LDAuOTdsMCwwYzAuMDAxLDAuMjg4LDAuMDg3LDAuNTcxLDAuMzA2LDAuODk1bDAsMGMwLjIxNywwLjMyMSwwLjU3NSwwLjY2NiwxLjA2NSwwLj'+
			'k3OGwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7aDAuMDAxYzAuNTU3LDAuMzU2LDAuNzIsMS4wOTYsMC4zNjQsMS42NTJsMCwwYy0wLjM1NSwwLjU1Ny0xLjA5NSwwLjcyLTEuNjUyLDAuMzY0bDAsMGMtMC43MDYtMC40NTEtMS4zMS0wLjk5NC0xLjc1NS0xLjY0NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjQ0NC0wLjY0Ny0wLjcyMy0xLjQyMy0wLjcyMi0yLjI0M2wwLDBjLTAuMDAxLTAuODgzLDAuMzIxLTEuNzEyLDAuODI3LTIuMzkybDAsMGMwLjUwNy0wLjY4NCwxLjE4OC0xLjI0NCwxLjk4My0xLjdsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjU5Mi0wLjkw'+
			'NywzLjY1Ny0xLjQxOSw1LjkyNS0xLjQyM2wwLDBjMS43LDAsMy4yODgsMC4yOTMsNC42NDYsMC44MThsMCwwYzEuMzU1LDAuNTI5LDIuNDk4LDEuMjgxLDMuMjYxLDIuMzA1bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC41MDYsMC42OCwwLjgyOSwxLjUwOCwwLjgyNiwyLjM5MmwwLDBjMC4wMDEsMS4yODgtMC42NjgsMi40MTMtMS42MDIsMy4yMzNsMCwwYy0wLjk0MiwwLjgzMi0yLjE3OCwxLjQzOC0zLjU5NCwxLjgyNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjEwNCwwLjAyOC0wLjIxMSwwLjA0Mi0wLjMxNCwwLjA0MmwwLDBDMTguNjk2LDIwLjg4NCwxOC4yMTQsMj'+
			'AuNTMzLDE4LjA3LDIwLjAwMUwxOC4wNywyMC4wMDF6Ii8+CiAgPHBhdGggZD0iTTE2LjM5NiwyMy42MjFsLTMuMzczLTMuMDM5Yy0wLjI1MS0wLjIyNi0wLjM5Ni0wLjU1MS0wLjM5Ni0wLjg4OWwwLDBjMC0wLjMzNywwLjE0Ni0wLjY2MywwLjM5Ni0wLjg4OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMCwwbDMuMzc0LTMuMDM5YzAuNDkxLTAuNDQyLDEuMjQ3LTAuNDAzLDEuNjg5LDAuMDg4bDAsMGMwLjQ0MiwwLjQ5MSwwLjQwMiwxLjI0Ny0wLjA4OCwxLjY4OWwwLDBsLTIuMzg2LDIuMTVsMi4zODYsMi4xNDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNDksMC40NDIsMC41MywxLjE5'+
			'OSwwLjA4OCwxLjY5bDAsMGMtMC4yMzYsMC4yNjItMC41NjIsMC4zOTUtMC44OSwwLjM5NWwwLDBDMTYuOTEyLDIzLjkyOCwxNi42MjUsMjMuODI2LDE2LjM5NiwyMy42MjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7TDE2LjM5NiwyMy42MjF6Ii8+CiA8L2c+CiA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLjUsMTZjMC02LjkwNCw1LjU5Ni0xMi41LDEyLjUtMTIuNWwwLD'+
			'BjNi45MDQsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4wMDEsNi45MDQtNS41OTYsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTguODUzLDguODU0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0xLjgzMSwxLjgzMy0yLjk2LDQuMzUyLTIuOTYsNy4xNDdsMCwwYzAsMi43OTQsMS4xMjksNS4zMTQsMi45Niw3LjE0N2wwLDBjMS44MzIsMS44Myw0LjM1MiwyLjk2LDcuMTQ3LDIuOTZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzIuNzk1LDAs'+
			'NS4zMTQtMS4xMyw3LjE0Ny0yLjk2bDAsMGMxLjgzMS0xLjgzMywyLjk1OS00LjM1MywyLjk2LTcuMTQ3bDAsMGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTQtMi45Ni03LjE0N2wwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTEuODMzLTEuODMyLTQuMzUzLTIuOTYtNy4xNDctMi45NmwwLDBDMTMuMjA1LDUuODk0LDEwLjY4Niw3LjAyMiw4Ljg1Myw4Ljg1NEw4Ljg1Myw4Ljg1NHoiLz4KICA8L2c+CiAgPHBhdGggZD0iTTE4LjA3LDIwLjAwMWMtMC4xNzQtMC42MzgsMC4yMDMtMS4yOTUsMC44NDEtMS40NjlsMCwwYzEuMTM0LTAuMzA2LDIuMDU1LTAuNzg5LDIuNjMzLTEuMzA1bD'+
			'AsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC41ODQtMC41MjYsMC43OTctMS4wMDgsMC43OTgtMS40NDRsMCwwYy0wLjAwMi0wLjMxLTAuMTAyLTAuNjE3LTAuMzU5LTAuOTdsMCwwYy0wLjI1Ni0wLjM1LTAuNjc4LTAuNzIxLTEuMjQ3LTEuMDQ1bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuMTM3LTAuNjU2LTIuODQtMS4xMS00LjczNS0xLjEwNmwwLDBjLTEuNDIyLTAuMDAxLTIuNzM1LDAuMjUtMy43ODMsMC42NTdsMCwwYy0xLjA1MSwwLjQwMi0xLjgxOSwwLjk2OS0yLjIwMSwxLjQ5NWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjI1NywwLjM1NC0wLjM1Niww'+
			'LjY2MS0wLjM1OCwwLjk3bDAsMGMwLjAwMSwwLjI4OCwwLjA4NywwLjU3MSwwLjMwNiwwLjg5NWwwLDBjMC4yMTcsMC4zMjEsMC41NzUsMC42NjYsMS4wNjUsMC45NzhsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2gwLjAwMWMwLjU1NywwLjM1NiwwLjcyLDEuMDk2LDAuMzY0LDEuNjUybDAsMGMtMC4zNTUsMC41NTctMS4wOTUsMC43Mi0xLjY1MiwwLjM2NGwwLDBjLTAuNzA2LTAuNDUxLTEuMzEtMC45OTQtMS43NTUtMS42NDZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40NDQtMC42NDctMC43MjMtMS40MjMtMC43MjItMi4yNDNsMCwwYy0wLjAwMS0wLjg4MywwLjMyMS0xLj'+
			'cxMiwwLjgyNy0yLjM5MmwwLDBjMC41MDctMC42ODQsMS4xODgtMS4yNDQsMS45ODMtMS43bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS41OTItMC45MDcsMy42NTctMS40MTksNS45MjUtMS40MjNsMCwwYzEuNywwLDMuMjg4LDAuMjkzLDQuNjQ2LDAuODE4bDAsMGMxLjM1NSwwLjUyOSwyLjQ5OCwxLjI4MSwzLjI2MSwyLjMwNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNTA2LDAuNjgsMC44MjksMS41MDgsMC44MjYsMi4zOTJsMCwwYzAuMDAxLDEuMjg4LTAuNjY4LDIuNDEzLTEuNjAyLDMuMjMzbDAsMGMtMC45NDIsMC44MzItMi4xNzgsMS40MzgtMy41OTQsMS44MjVs'+
			'MCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4xMDQsMC4wMjgtMC4yMTEsMC4wNDItMC4zMTQsMC4wNDJsMCwwQzE4LjY5NiwyMC44ODQsMTguMjE0LDIwLjUzMywxOC4wNywyMC4wMDFMMTguMDcsMjAuMDAxeiIvPgogIDxwYXRoIGQ9Ik0xNi4zOTYsMjMuNjIxbC0zLjM3My0zLjAzOWMtMC4yNTEtMC4yMjYtMC4zOTYtMC41NTEtMC4zOTYtMC44ODlsMCwwYzAtMC4zMzcsMC4xNDYtMC42NjMsMC4zOTYtMC44ODkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDAsMGwzLjM3NC0zLjAzOWMwLjQ5MS0wLjQ0MiwxLjI0Ny0wLjQwMywxLjY4OSwwLjA4OGwwLDBjMC40NDIsMC40OTEsMC40MD'+
			'IsMS4yNDctMC4wODgsMS42ODlsMCwwbC0yLjM4NiwyLjE1bDIuMzg2LDIuMTQ5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQ5LDAuNDQyLDAuNTMsMS4xOTksMC4wODgsMS42OWwwLDBjLTAuMjM2LDAuMjYyLTAuNTYyLDAuMzk1LTAuODksMC4zOTVsMCwwQzE2LjkxMiwyMy45MjgsMTYuNjI1LDIzLjgyNiwxNi4zOTYsMjMuNjIxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0wxNi4zOTYsMjMuNjIxeiIvPgogPC9nPgo8L3N2Zz4K';
		me._autorotate_start__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="autorotate_start";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._autorotate_start.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._autorotate_start.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._autorotate_start.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._autorotate_start.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._autorotate_start.style[domTransition]='opacity 500ms ease 0ms';
				if (me._autorotate_start.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._autorotate_start.style.opacity == 0.0) { me._autorotate_start.style.visibility="hidden"; } }, 505);
					me._autorotate_start.style.opacity=0;
				}
				else {
					me._autorotate_start.style.visibility=me._autorotate_start.ggVisible?'inherit':'hidden';
					me._autorotate_start.style.opacity=1;
				}
			}
		}
		me._autorotate_start.onmouseover=function (e) {
			me._autorotate_start__img.style.visibility='hidden';
			me._autorotate_start__imgo.style.visibility='inherit';
		}
		me._autorotate_start.onmouseout=function (e) {
			me._autorotate_start__img.style.visibility='inherit';
			me._autorotate_start__imgo.style.visibility='hidden';
		}
		me._autorotate_start.ggUpdatePosition=function (useTransition) {
		}
		me._autorotate_buttons.appendChild(me._autorotate_start);
		el=me._autorotate_stop=document.createElement('div');
		els=me._autorotate_stop__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzJweCIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIzMnB4IiB4bWxuczp4bGluaz'+
			'0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZT0iIzNDM0MzQyIgb3BhY2l0eT0iMC40IiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPHBhdGggZD0iTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTA0LDUuNTk2LDEyLjUsMTIuNSwxMi41YzYuOTAzLDAsMTIuNDk5LTUuNTk2LDEyLjUtMTIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI4LjQ5OCw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDdjLTEuODMzLDEuODMxLTQuMzUyLDIuOTU5LTcuMTQ2LDIuOTYx'+
			'Yy0yLjc5Ni0wLjAwMi01LjMxNS0xLjEzLTcuMTQ3LTIuOTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTtDNy4wMjEsMjEuMzE0LDUuODkzLDE4Ljc5NSw1Ljg5MiwxNmMwLjAwMS0yLjc5NSwxLjEzLTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTU5LDcuMTQ3LTIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTZjMS44MzEsMS44MzMsMi45Niw0LjM1MiwyLjk2LDcuMTQ3UzI0Ljk3OCwyMS4zMTQsMjMuMTQ2LDIzLjE0N3ogTTIzLjkwNywxMy4zOTImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43NjMtMS4wMjQtMS45MDYtMS43Nz'+
			'YtMy4yNjItMi4zMDVDMTkuMjg3LDEwLjU2MiwxNy43LDEwLjI3LDE2LDEwLjI2OWMtMi4yNjgsMC4wMDMtNC4zMzMsMC41MTYtNS45MjUsMS40MjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43OTUsMC40NTYtMS40NzcsMS4wMTYtMS45ODMsMS43Yy0wLjUwNSwwLjY4LTAuODI4LDEuNTA4LTAuODI2LDIuMzkyYy0wLjAwMiwwLjgxOSwwLjI3NiwxLjU5NSwwLjcyMiwyLjI0MyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDQ1LDAuNjUxLDEuMDQ5LDEuMTk0LDEuNzU1LDEuNjQ2YzAuMTk5LDAuMTI4LDAuNDIzLDAuMTg4LDAuNjQzLDAuMTg4YzAuMzk1LDAsMC43ODEtMC4xOTUsMS4wMDktMC41NTMm'+
			'I3hkOyYjeGE7JiN4OTsmI3g5O2MwLjM1Ni0wLjU1NywwLjE5My0xLjI5Ni0wLjM2My0xLjY1MWwtMC4wMDEtMC4wMDFjLTAuNDktMC4zMTItMC44NDgtMC42NTUtMS4wNjUtMC45NzdjLTAuMjE4LTAuMzI0LTAuMzA0LTAuNjA4LTAuMzA2LTAuODk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4wMDItMC4zMSwwLjEwMi0wLjYxNywwLjM1OC0wLjk3MWMwLjM4MS0wLjUyNSwxLjE1LTEuMDkyLDIuMi0xLjQ5NWMxLjA0OC0wLjQwNiwyLjM2MS0wLjY1OCwzLjc4My0wLjY1NyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuODk1LTAuMDAzLDMuNTk5LDAuNDUxLDQuNzM0LDEuMTA3YzAuNTY5LDAuMzI1LDAuOT'+
			'kyLDAuNjk2LDEuMjQ4LDEuMDQ1YzAuMjU4LDAuMzU0LDAuMzU2LDAuNjYxLDAuMzU4LDAuOTcxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4wMDUsMC41MDMtMC4zMDUsMS4xMDUtMS4xMzUsMS43MTJjLTAuNTM2LDAuMzg3LTAuNjU2LDEuMTM1LTAuMjcxLDEuNjcxYzAuMzg3LDAuNTM1LDEuMTM1LDAuNjU2LDEuNjcxLDAuMjcxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4yMTItMC44NjcsMi4xMjMtMi4xMywyLjEyNy0zLjY1M0MyNC43MzUsMTQuOSwyNC40MTIsMTQuMDcyLDIzLjkwNywxMy4zOTJ6IE0xOS4zNjQsMTYuMTgyYy0wLjQ2OC0wLjQ2Ny0xLjIyNi0wLjQ2Ny0xLjY5MiwwJiN4ZDsmI3hh'+
			'OyYjeDk7JiN4OTtsLTEuNTU3LDEuNTU4bC0xLjU1OC0xLjU1OGMtMC40NjctMC40NjctMS4yMjQtMC40NjctMS42OTEsMGMtMC40NjcsMC40NjctMC40NjcsMS4yMjUsMCwxLjY5MmwxLjU1NywxLjU1N2wtMS41NTcsMS41NTcmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjcsMC40NjgtMC40NjcsMS4yMjYsMCwxLjY5MmMwLjIzMywwLjIzMywwLjU0LDAuMzUxLDAuODQ2LDAuMzUxYzAuMzA3LDAsMC42MTItMC4xMTcsMC44NDYtMC4zNTFsMS41NTgtMS41NThsMS41NTcsMS41NTgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjIzMywwLjIzMywwLjU0LDAuMzUxLDAuODQ2LDAuMzUxYzAuMzA3LDAsMC'+
			'42MTItMC4xMTcsMC44NDctMC4zNTFjMC40NjctMC40NjcsMC40NjctMS4yMjUsMC0xLjY5MmwtMS41NTgtMS41NTdsMS41NTgtMS41NTcmI3hkOyYjeGE7JiN4OTsmI3g5O0MxOS44MzEsMTcuNDA2LDE5LjgzMSwxNi42NDgsMTkuMzY0LDE2LjE4MnoiLz4KIDwvZz4KIDxnIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiI+CiAgPHBhdGggZD0iTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTA0LDUuNTk2LDEyLjUsMTIuNSwxMi41YzYuOTAzLDAsMTIuNDk5LTUuNTk2LDEyLjUtMTIuNSYjeGQ7JiN4'+
			'YTsmI3g5OyYjeDk7QzI4LjQ5OCw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDdjLTEuODMzLDEuODMxLTQuMzUyLDIuOTU5LTcuMTQ2LDIuOTYxYy0yLjc5Ni0wLjAwMi01LjMxNS0xLjEzLTcuMTQ3LTIuOTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTtDNy4wMjEsMjEuMzE0LDUuODkzLDE4Ljc5NSw1Ljg5MiwxNmMwLjAwMS0yLjc5NSwxLjEzLTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTU5LDcuMTQ3LTIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTZjMS44MzEsMS44MzMsMi45Niw0LjM1MiwyLj'+
			'k2LDcuMTQ3UzI0Ljk3OCwyMS4zMTQsMjMuMTQ2LDIzLjE0N3ogTTIzLjkwNywxMy4zOTImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43NjMtMS4wMjQtMS45MDYtMS43NzYtMy4yNjItMi4zMDVDMTkuMjg3LDEwLjU2MiwxNy43LDEwLjI3LDE2LDEwLjI2OWMtMi4yNjgsMC4wMDMtNC4zMzMsMC41MTYtNS45MjUsMS40MjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43OTUsMC40NTYtMS40NzcsMS4wMTYtMS45ODMsMS43Yy0wLjUwNSwwLjY4LTAuODI4LDEuNTA4LTAuODI2LDIuMzkyYy0wLjAwMiwwLjgxOSwwLjI3NiwxLjU5NSwwLjcyMiwyLjI0MyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDQ1LDAu'+
			'NjUxLDEuMDQ5LDEuMTk0LDEuNzU1LDEuNjQ2YzAuMTk5LDAuMTI4LDAuNDIzLDAuMTg4LDAuNjQzLDAuMTg4YzAuMzk1LDAsMC43ODEtMC4xOTUsMS4wMDktMC41NTMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjM1Ni0wLjU1NywwLjE5My0xLjI5Ni0wLjM2My0xLjY1MWwtMC4wMDEtMC4wMDFjLTAuNDktMC4zMTItMC44NDgtMC42NTUtMS4wNjUtMC45NzdjLTAuMjE4LTAuMzI0LTAuMzA0LTAuNjA4LTAuMzA2LTAuODk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4wMDItMC4zMSwwLjEwMi0wLjYxNywwLjM1OC0wLjk3MWMwLjM4MS0wLjUyNSwxLjE1LTEuMDkyLDIuMi0xLjQ5NWMxLjA0OC0wLjQwNi'+
			'wyLjM2MS0wLjY1OCwzLjc4My0wLjY1NyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuODk1LTAuMDAzLDMuNTk5LDAuNDUxLDQuNzM0LDEuMTA3YzAuNTY5LDAuMzI1LDAuOTkyLDAuNjk2LDEuMjQ4LDEuMDQ1YzAuMjU4LDAuMzU0LDAuMzU2LDAuNjYxLDAuMzU4LDAuOTcxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4wMDUsMC41MDMtMC4zMDUsMS4xMDUtMS4xMzUsMS43MTJjLTAuNTM2LDAuMzg3LTAuNjU2LDEuMTM1LTAuMjcxLDEuNjcxYzAuMzg3LDAuNTM1LDEuMTM1LDAuNjU2LDEuNjcxLDAuMjcxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4yMTItMC44NjcsMi4xMjMtMi4xMywyLjEyNy0zLjY1M0My'+
			'NC43MzUsMTQuOSwyNC40MTIsMTQuMDcyLDIzLjkwNywxMy4zOTJ6IE0xOS4zNjQsMTYuMTgyYy0wLjQ2OC0wLjQ2Ny0xLjIyNi0wLjQ2Ny0xLjY5MiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTEuNTU3LDEuNTU4bC0xLjU1OC0xLjU1OGMtMC40NjctMC40NjctMS4yMjQtMC40NjctMS42OTEsMGMtMC40NjcsMC40NjctMC40NjcsMS4yMjUsMCwxLjY5MmwxLjU1NywxLjU1N2wtMS41NTcsMS41NTcmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjcsMC40NjgtMC40NjcsMS4yMjYsMCwxLjY5MmMwLjIzMywwLjIzMywwLjU0LDAuMzUxLDAuODQ2LDAuMzUxYzAuMzA3LDAsMC42MTItMC4xMTcsMC44ND'+
			'YtMC4zNTFsMS41NTgtMS41NThsMS41NTcsMS41NTgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjIzMywwLjIzMywwLjU0LDAuMzUxLDAuODQ2LDAuMzUxYzAuMzA3LDAsMC42MTItMC4xMTcsMC44NDctMC4zNTFjMC40NjctMC40NjcsMC40NjctMS4yMjUsMC0xLjY5MmwtMS41NTgtMS41NTdsMS41NTgtMS41NTcmI3hkOyYjeGE7JiN4OTsmI3g5O0MxOS44MzEsMTcuNDA2LDE5LjgzMSwxNi42NDgsMTkuMzY0LDE2LjE4MnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._autorotate_stop__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._autorotate_stop__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzJweCIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIzMnB4IiB4bWxuczp4bGluaz'+
			'0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlPSIjM0MzQzNDIiBvcGFjaXR5PSIwLjQiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8cGF0aCBkPSJNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2YzAsNi45MDQsNS41OTYsMTIuNSwxMi41LDEyLjVjNi45MDMsMCwxMi40OTktNS41OTYsMTIuNS0xMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjguNDk4LDkuMDk2LDIyLjkwMywzLjUs'+
			'MTYsMy41eiBNMjMuMTQ2LDIzLjE0N2MtMS44MzMsMS44MzEtNC4zNTIsMi45NTktNy4xNDYsMi45NjFjLTIuNzk2LTAuMDAyLTUuMzE1LTEuMTMtNy4xNDctMi45NjEmI3hkOyYjeGE7JiN4OTsmI3g5O0M3LjAyMSwyMS4zMTQsNS44OTMsMTguNzk1LDUuODkyLDE2YzAuMDAxLTIuNzk1LDEuMTMtNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45NTksNy4xNDctMi45NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDYsMi45NmMxLjgzMSwxLjgzMywyLjk2LDQuMzUyLDIuOTYsNy4xNDdTMjQuOTc4LDIxLjMxNCwyMy4xNDYsMjMuMTQ3ei'+
			'BNMjMuOTA3LDEzLjM5MiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjc2My0xLjAyNC0xLjkwNi0xLjc3Ni0zLjI2Mi0yLjMwNUMxOS4yODcsMTAuNTYyLDE3LjcsMTAuMjcsMTYsMTAuMjY5Yy0yLjI2OCwwLjAwMy00LjMzMywwLjUxNi01LjkyNSwxLjQyNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjc5NSwwLjQ1Ni0xLjQ3NywxLjAxNi0xLjk4MywxLjdjLTAuNTA1LDAuNjgtMC44MjgsMS41MDgtMC44MjYsMi4zOTJjLTAuMDAyLDAuODE5LDAuMjc2LDEuNTk1LDAuNzIyLDIuMjQzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40NDUsMC42NTEsMS4wNDksMS4xOTQsMS43NTUsMS42NDZjMC4xOTksMC4x'+
			'MjgsMC40MjMsMC4xODgsMC42NDMsMC4xODhjMC4zOTUsMCwwLjc4MS0wLjE5NSwxLjAwOS0wLjU1MyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMzU2LTAuNTU3LDAuMTkzLTEuMjk2LTAuMzYzLTEuNjUxbC0wLjAwMS0wLjAwMWMtMC40OS0wLjMxMi0wLjg0OC0wLjY1NS0xLjA2NS0wLjk3N2MtMC4yMTgtMC4zMjQtMC4zMDQtMC42MDgtMC4zMDYtMC44OTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjAwMi0wLjMxLDAuMTAyLTAuNjE3LDAuMzU4LTAuOTcxYzAuMzgxLTAuNTI1LDEuMTUtMS4wOTIsMi4yLTEuNDk1YzEuMDQ4LTAuNDA2LDIuMzYxLTAuNjU4LDMuNzgzLTAuNjU3JiN4ZDsmI3hhOyYjeD'+
			'k7JiN4OTtjMS44OTUtMC4wMDMsMy41OTksMC40NTEsNC43MzQsMS4xMDdjMC41NjksMC4zMjUsMC45OTIsMC42OTYsMS4yNDgsMS4wNDVjMC4yNTgsMC4zNTQsMC4zNTYsMC42NjEsMC4zNTgsMC45NzEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjAwNSwwLjUwMy0wLjMwNSwxLjEwNS0xLjEzNSwxLjcxMmMtMC41MzYsMC4zODctMC42NTYsMS4xMzUtMC4yNzEsMS42NzFjMC4zODcsMC41MzUsMS4xMzUsMC42NTYsMS42NzEsMC4yNzEmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjIxMi0wLjg2NywyLjEyMy0yLjEzLDIuMTI3LTMuNjUzQzI0LjczNSwxNC45LDI0LjQxMiwxNC4wNzIsMjMuOTA3LDEzLjM5'+
			'MnogTTE5LjM2NCwxNi4xODJjLTAuNDY4LTAuNDY3LTEuMjI2LTAuNDY3LTEuNjkyLDAmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMS41NTcsMS41NThsLTEuNTU4LTEuNTU4Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNC0wLjQ2Ny0xLjY5MSwwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkybDEuNTU3LDEuNTU3bC0xLjU1NywxLjU1NyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2OC0wLjQ2NywxLjIyNiwwLDEuNjkyYzAuMjMzLDAuMjMzLDAuNTQsMC4zNTEsMC44NDYsMC4zNTFjMC4zMDcsMCwwLjYxMi0wLjExNywwLjg0Ni0wLjM1MWwxLjU1OC0xLjU1OGwxLjU1NywxLjU1OCYjeGQ7Ji'+
			'N4YTsmI3g5OyYjeDk7YzAuMjMzLDAuMjMzLDAuNTQsMC4zNTEsMC44NDYsMC4zNTFjMC4zMDcsMCwwLjYxMi0wLjExNywwLjg0Ny0wLjM1MWMwLjQ2Ny0wLjQ2NywwLjQ2Ny0xLjIyNSwwLTEuNjkybC0xLjU1OC0xLjU1N2wxLjU1OC0xLjU1NyYjeGQ7JiN4YTsmI3g5OyYjeDk7QzE5LjgzMSwxNy40MDYsMTkuODMxLDE2LjY0OCwxOS4zNjQsMTYuMTgyeiIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIw'+
			'LjIiPgogIDxwYXRoIGQ9Ik0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwNCw1LjU5NiwxMi41LDEyLjUsMTIuNWM2LjkwMywwLDEyLjQ5OS01LjU5NiwxMi41LTEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MyOC40OTgsOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6IE0yMy4xNDYsMjMuMTQ3Yy0xLjgzMywxLjgzMS00LjM1MiwyLjk1OS03LjE0NiwyLjk2MWMtMi43OTYtMC4wMDItNS4zMTUtMS4xMy03LjE0Ny0yLjk2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7QzcuMDIxLDIxLjMxNCw1Ljg5MywxOC43OTUsNS44OTIsMTZjMC4wMDEtMi43OTUsMS4xMy01LjMxNCwyLjk2MS03Lj'+
			'E0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk1OSw3LjE0Ny0yLjk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NiwyLjk2YzEuODMxLDEuODMzLDIuOTYsNC4zNTIsMi45Niw3LjE0N1MyNC45NzgsMjEuMzE0LDIzLjE0NiwyMy4xNDd6IE0yMy45MDcsMTMuMzkyJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNzYzLTEuMDI0LTEuOTA2LTEuNzc2LTMuMjYyLTIuMzA1QzE5LjI4NywxMC41NjIsMTcuNywxMC4yNywxNiwxMC4yNjljLTIuMjY4LDAuMDAzLTQuMzMzLDAuNTE2LTUuOTI1LDEuNDI0JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNzk1LDAuNDU2LTEuNDc3'+
			'LDEuMDE2LTEuOTgzLDEuN2MtMC41MDUsMC42OC0wLjgyOCwxLjUwOC0wLjgyNiwyLjM5MmMtMC4wMDIsMC44MTksMC4yNzYsMS41OTUsMC43MjIsMi4yNDMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQ0NSwwLjY1MSwxLjA0OSwxLjE5NCwxLjc1NSwxLjY0NmMwLjE5OSwwLjEyOCwwLjQyMywwLjE4OCwwLjY0MywwLjE4OGMwLjM5NSwwLDAuNzgxLTAuMTk1LDEuMDA5LTAuNTUzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zNTYtMC41NTcsMC4xOTMtMS4yOTYtMC4zNjMtMS42NTFsLTAuMDAxLTAuMDAxYy0wLjQ5LTAuMzEyLTAuODQ4LTAuNjU1LTEuMDY1LTAuOTc3Yy0wLjIxOC0wLjMyNC0wLjMwNC'+
			'0wLjYwOC0wLjMwNi0wLjg5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMDAyLTAuMzEsMC4xMDItMC42MTcsMC4zNTgtMC45NzFjMC4zODEtMC41MjUsMS4xNS0xLjA5MiwyLjItMS40OTVjMS4wNDgtMC40MDYsMi4zNjEtMC42NTgsMy43ODMtMC42NTcmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjg5NS0wLjAwMywzLjU5OSwwLjQ1MSw0LjczNCwxLjEwN2MwLjU2OSwwLjMyNSwwLjk5MiwwLjY5NiwxLjI0OCwxLjA0NWMwLjI1OCwwLjM1NCwwLjM1NiwwLjY2MSwwLjM1OCwwLjk3MSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMDA1LDAuNTAzLTAuMzA1LDEuMTA1LTEuMTM1LDEuNzEyYy0wLjUzNiwwLjM4'+
			'Ny0wLjY1NiwxLjEzNS0wLjI3MSwxLjY3MWMwLjM4NywwLjUzNSwxLjEzNSwwLjY1NiwxLjY3MSwwLjI3MSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMjEyLTAuODY3LDIuMTIzLTIuMTMsMi4xMjctMy42NTNDMjQuNzM1LDE0LjksMjQuNDEyLDE0LjA3MiwyMy45MDcsMTMuMzkyeiBNMTkuMzY0LDE2LjE4MmMtMC40NjgtMC40NjctMS4yMjYtMC40NjctMS42OTIsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0xLjU1NywxLjU1OGwtMS41NTgtMS41NThjLTAuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDBjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI1LDAsMS42OTJsMS41NTcsMS41NTdsLTEuNTU3LD'+
			'EuNTU3JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY4LTAuNDY3LDEuMjI2LDAsMS42OTJjMC4yMzMsMC4yMzMsMC41NCwwLjM1MSwwLjg0NiwwLjM1MWMwLjMwNywwLDAuNjEyLTAuMTE3LDAuODQ2LTAuMzUxbDEuNTU4LTEuNTU4bDEuNTU3LDEuNTU4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4yMzMsMC4yMzMsMC41NCwwLjM1MSwwLjg0NiwwLjM1MWMwLjMwNywwLDAuNjEyLTAuMTE3LDAuODQ3LTAuMzUxYzAuNDY3LTAuNDY3LDAuNDY3LTEuMjI1LDAtMS42OTJsLTEuNTU4LTEuNTU3bDEuNTU4LTEuNTU3JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMTkuODMxLDE3LjQwNiwxOS44MzEsMTYu'+
			'NjQ4LDE5LjM2NCwxNi4xODJ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._autorotate_stop__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="autorotate_stop";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._autorotate_stop.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._autorotate_stop.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._autorotate_stop.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._autorotate_stop.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._autorotate_stop.style[domTransition]='opacity 500ms ease 0ms';
				if (me._autorotate_stop.ggCurrentLogicStateAlpha == 0) {
					me._autorotate_stop.style.visibility=me._autorotate_stop.ggVisible?'inherit':'hidden';
					me._autorotate_stop.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._autorotate_stop.style.opacity == 0.0) { me._autorotate_stop.style.visibility="hidden"; } }, 505);
					me._autorotate_stop.style.opacity=0;
				}
			}
		}
		me._autorotate_stop.onmouseover=function (e) {
			me._autorotate_stop__img.style.visibility='hidden';
			me._autorotate_stop__imgo.style.visibility='inherit';
		}
		me._autorotate_stop.onmouseout=function (e) {
			me._autorotate_stop__img.style.visibility='inherit';
			me._autorotate_stop__imgo.style.visibility='hidden';
		}
		me._autorotate_stop.ggUpdatePosition=function (useTransition) {
		}
		me._autorotate_buttons.appendChild(me._autorotate_stop);
		el=me._tt_rotate=document.createElement('div');
		els=me._tt_rotate__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_rotate";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_rotate.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_rotate.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_rotate.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_rotate.style[domTransition]='left 0s, top 0s';
				if (me._tt_rotate.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_rotate.style.top='-25px';
					me._tt_rotate.ggUpdatePosition(true);
				}
				else {
					me._tt_rotate.ggDx=0;
					me._tt_rotate.style.top='32px';
					me._tt_rotate.ggUpdatePosition(true);
				}
			}
		}
		me._tt_rotate.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['autorotate_buttons'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_rotate.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_rotate.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_rotate.style[domTransition]='left 0s, top 0s';
				if (me._tt_rotate.ggCurrentLogicStateVisible == 0) {
					me._tt_rotate.style.visibility=(Number(me._tt_rotate.style.opacity)>0||!me._tt_rotate.style.opacity)?'inherit':'hidden';
					me._tt_rotate.ggVisible=true;
				}
				else {
					me._tt_rotate.style.visibility="hidden";
					me._tt_rotate.ggVisible=false;
				}
			}
		}
		me._tt_rotate.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getIsAutorotating() == false))
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_rotate.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_rotate.ggCurrentLogicStateText = newLogicStateText;
				me._tt_rotate.style[domTransition]='left 0s, top 0s';
				if (me._tt_rotate.ggCurrentLogicStateText == 0) {
					me._tt_rotate.ggText="Stop Auto Rotate";
					me._tt_rotate__text.innerHTML=me._tt_rotate.ggText;
					if (me._tt_rotate.ggUpdateText) {
					me._tt_rotate.ggUpdateText=function() {
						var hs="Stop Auto Rotate";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_rotate.ggUpdatePosition) me._tt_rotate.ggUpdatePosition();
					}
				}
				else if (me._tt_rotate.ggCurrentLogicStateText == 1) {
					me._tt_rotate.ggText="Start Auto Rotate";
					me._tt_rotate__text.innerHTML=me._tt_rotate.ggText;
					if (me._tt_rotate.ggUpdateText) {
					me._tt_rotate.ggUpdateText=function() {
						var hs="Start Auto Rotate";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_rotate.ggUpdatePosition) me._tt_rotate.ggUpdatePosition();
					}
				}
				else {
					me._tt_rotate.ggText="";
					me._tt_rotate__text.innerHTML=me._tt_rotate.ggText;
					if (me._tt_rotate.ggUpdateText) {
					me._tt_rotate.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_rotate.ggUpdatePosition) me._tt_rotate.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_rotate.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._autorotate_buttons.appendChild(me._tt_rotate);
		me._controller_slider.appendChild(me._autorotate_buttons);
		el=me._enter_vr=document.createElement('div');
		els=me._enter_vr__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMycHgiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldy'+
			'AtMzM0NS4yNSAtMjYwNiAzMiAzMiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHZpZXdCb3g9Ii0zMzQ1LjI1IC0yNjA2IDMyIDMyIj4KIDxnIGlkPSJMYXllcl8xIi8+CiA8ZyBpZD0iRWJlbmVfMSI+CiAgPGc+CiAgIDxnPgogICAgPHBhdGggZD0iTS0zMzI5LjI0OS0yNjAyLjVjLTYuODkyLDAtMTIuNSw1LjYwNy0xMi41LDEyLjVzNS42MDcsMTIuNSwxMi41LDEyLjVjNi44OTMsMCwxMi41LTUuNjA3LDEyLjUtMTIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O1MtMzMyMi4zNTUtMjYw'+
			'Mi41LTMzMjkuMjQ5LTI2MDIuNXogTS0zMzI5LjI0OS0yNTgwLjEzMmMtNS40NDEsMC05Ljg3LTQuNDI3LTkuODctOS44NjhjMC01LjQ0Miw0LjQyOS05Ljg2OSw5Ljg3LTkuODY5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzUuNDQyLDAsOS44Nyw0LjQyOCw5Ljg3LDkuODY5Qy0zMzE5LjM3OC0yNTg0LjU2LTMzMjMuODA1LTI1ODAuMTMyLTMzMjkuMjQ5LTI1ODAuMTMyeiIgZmlsbD0iIzFBMTcxQiIvPgogICAgPHBhdGggZD0iTS0zMzIxLjU4OS0yNTkzLjgwOGMtMC45LTEuMjYtMi4zOTktMS40MjItMy42MDQtMS40MjJoLTEuNzA0di0xLjY0NmMwLTAuNjY4LTAuNTQyLTEuMjA5LT'+
			'EuMjEtMS4yMDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtoLTIuMjgxYy0wLjY2OCwwLTEuMjEsMC41NDEtMS4yMSwxLjIwOXYxLjY0NmgtMS43MDJjLTEuMjA1LDAtMi43MDQsMC4xNjItMy42MDYsMS40MjJjLTAuNjg4LDAuOTYxLTEuMDA3LDIuMjItMS4wMDcsMy45NjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwyLjEsMC42MDEsMy44MTcsMS42MDksNC41OTNjMC44ODEsMC42NzksMS41MDYsMC43OTMsMi41NzMsMC43OTNjMS4yNTgsMCwyLjIxNC0wLjQ5LDIuOTgyLTAuODgzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNTc5LTAuMjk3LDEuMDM2LTAu'+
			'NTMxLDEuNTAxLTAuNTMxczAuOTIzLDAuMjM0LDEuNTAyLDAuNTMyYzAuNzY3LDAuMzkzLDEuNzI0LDAuODgyLDIuOTgyLDAuODgyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzEuMDY1LDAsMS42OS0wLjExNCwyLjU3Mi0wLjc5MmMxLjAwOS0wLjc3NiwxLjYxMS0yLjQ5MywxLjYxMS00LjU5NUMtMzMyMC41ODEtMjU5MS41ODgtMzMyMC45MDItMjU5Mi44NDgtMzMyMS41ODktMjU5My44MDh6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7IE0tMzMyMy42NjctMjU4Ny4xNjhjLTAuMzM1LDAuMjU5LTAuMzc4LDAuMjkyLTEuMDk3LDAuMjkyYy0wLjY3NSwwLTEuMjMzLTAuMjg3LT'+
			'EuODc5LTAuNjE4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjcyOS0wLjM3My0xLjU1Ny0wLjc5Ni0yLjYwNS0wLjc5NnMtMS44NzUsMC40MjMtMi42MDQsMC43OTZjLTAuNjQ2LDAuMzMyLTEuMjA0LDAuNjE4LTEuODc5LDAuNjE4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjcxOSwwLTAuNzYyLTAuMDMzLTEuMDk2LTAuMjkyYy0wLjE0Mi0wLjExMi0wLjY2OC0wLjg5My0wLjY2OC0yLjY3N2MwLTEuMTk3LDAuMTgxLTIuMDMzLDAuNTU1LTIuNTU1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMTI2LTAuMTc2LDAuNDM0LTAuNDExLDEuNjQtMC40MTFo'+
			'OC4xMDdjMS4yMDUsMCwxLjUxMiwwLjIzNCwxLjYzOCwwLjQxMWMwLjM3NCwwLjUyMiwwLjU1NiwxLjM1OCwwLjU1NiwyLjU1NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzMyMy0yNTg4LjA2LTMzMjMuNTI3LTI1ODcuMjgtMzMyMy42NjctMjU4Ny4xNjh6IiBmaWxsPSIjMUExNzFCIi8+CiAgIDwvZz4KICAgPGcgb3BhY2l0eT0iMC40Ij4KICAgIDxwYXRoIGQ9Ik0tMzMyOS4yNDktMjYwMi41Yy02Ljg5MiwwLTEyLjUsNS42MDctMTIuNSwxMi41czUuNjA3LDEyLjUsMTIuNSwxMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzYuODkzLDAsMTIuNS01LjYwNywxMi41LT'+
			'EyLjVTLTMzMjIuMzU1LTI2MDIuNS0zMzI5LjI0OS0yNjAyLjV6IE0tMzMyOS4yNDktMjU4MC4xMzJjLTUuNDQxLDAtOS44Ny00LjQyNy05Ljg3LTkuODY4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAtNS40NDIsNC40MjktOS44NjksOS44Ny05Ljg2OWM1LjQ0MiwwLDkuODcsNC40MjgsOS44Nyw5Ljg2OUMtMzMxOS4zNzgtMjU4NC41Ni0zMzIzLjgwNS0yNTgwLjEzMi0zMzI5LjI0OS0yNTgwLjEzMnoiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHBhdGggZD0iTS0zMzIxLjU4OS0yNTkzLjgw'+
			'OGMtMC45LTEuMjYtMi4zOTktMS40MjItMy42MDQtMS40MjJoLTEuNzA0di0xLjY0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLTAuNjY4LTAuNTQyLTEuMjA5LTEuMjEtMS4yMDloLTIuMjgxYy0wLjY2OCwwLTEuMjEsMC41NDEtMS4yMSwxLjIwOXYxLjY0NmgtMS43MDJjLTEuMjA1LDAtMi43MDQsMC4xNjItMy42MDYsMS40MjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjg4LDAuOTYxLTEuMDA3LDIuMjItMS4wMDcsMy45NjNjMCwyLjEsMC42MDEsMy44MTcsMS42MDksNC41OTNjMC44ODEsMC42NzksMS41MDYsMC43OTMsMi41NzMsMC43OTMmI3hkOyYjeGE7Ji'+
			'N4OTsmI3g5OyYjeDk7JiN4OTtjMS4yNTgsMCwyLjIxNC0wLjQ5LDIuOTgyLTAuODgzYzAuNTc5LTAuMjk3LDEuMDM2LTAuNTMxLDEuNTAxLTAuNTMxczAuOTIzLDAuMjM0LDEuNTAyLDAuNTMyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNzY3LDAuMzkzLDEuNzI0LDAuODgyLDIuOTgyLDAuODgyYzEuMDY1LDAsMS42OS0wLjExNCwyLjU3Mi0wLjc5MmMxLjAwOS0wLjc3NiwxLjYxMS0yLjQ5MywxLjYxMS00LjU5NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzMyMC41ODEtMjU5MS41ODgtMzMyMC45MDItMjU5Mi44NDgtMzMyMS41ODktMjU5My44MDh6IE0tMzMyMy42'+
			'NjctMjU4Ny4xNjhjLTAuMzM1LDAuMjU5LTAuMzc4LDAuMjkyLTEuMDk3LDAuMjkyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjY3NSwwLTEuMjMzLTAuMjg3LTEuODc5LTAuNjE4Yy0wLjcyOS0wLjM3My0xLjU1Ny0wLjc5Ni0yLjYwNS0wLjc5NnMtMS44NzUsMC40MjMtMi42MDQsMC43OTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjQ2LDAuMzMyLTEuMjA0LDAuNjE4LTEuODc5LDAuNjE4Yy0wLjcxOSwwLTAuNzYyLTAuMDMzLTEuMDk2LTAuMjkyYy0wLjE0Mi0wLjExMi0wLjY2OC0wLjg5My0wLjY2OC0yLjY3NyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3'+
			'g5O2MwLTEuMTk3LDAuMTgxLTIuMDMzLDAuNTU1LTIuNTU1YzAuMTI2LTAuMTc2LDAuNDM0LTAuNDExLDEuNjQtMC40MTFoOC4xMDdjMS4yMDUsMCwxLjUxMiwwLjIzNCwxLjYzOCwwLjQxMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjM3NCwwLjUyMiwwLjU1NiwxLjM1OCwwLjU1NiwyLjU1NUMtMzMyMy0yNTg4LjA2LTMzMjMuNTI3LTI1ODcuMjgtMzMyMy42NjctMjU4Ny4xNjh6IiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzFBMTcxQiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik0tMzMyOS4yNDktMjYw'+
			'Mi41Yy02Ljg5MiwwLTEyLjUsNS42MDctMTIuNSwxMi41czUuNjA3LDEyLjUsMTIuNSwxMi41YzYuODkzLDAsMTIuNS01LjYwNywxMi41LTEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtTLTMzMjIuMzU1LTI2MDIuNS0zMzI5LjI0OS0yNjAyLjV6IE0tMzMyOS4yNDktMjU4MC4xMzJjLTUuNDQxLDAtOS44Ny00LjQyNy05Ljg3LTkuODY4YzAtNS40NDIsNC40MjktOS44NjksOS44Ny05Ljg2OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2M1LjQ0MiwwLDkuODcsNC40MjgsOS44Nyw5Ljg2OUMtMzMxOS4zNzgtMjU4NC41Ni0zMzIzLjgwNS0yNTgwLjEzMi0zMzI5LjI0OS0yNT'+
			'gwLjEzMnoiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIvPgogICAgPHBhdGggZD0iTS0zMzIxLjU4OS0yNTkzLjgwOGMtMC45LTEuMjYtMi4zOTktMS40MjItMy42MDQtMS40MjJoLTEuNzA0di0xLjY0NmMwLTAuNjY4LTAuNTQyLTEuMjA5LTEuMjEtMS4yMDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtoLTIuMjgxYy0wLjY2OCwwLTEuMjEsMC41NDEtMS4yMSwxLjIwOXYxLjY0NmgtMS43MDJjLTEuMjA1LDAtMi43MDQsMC4xNjItMy42MDYsMS40MjJjLTAuNjg4LDAuOTYxLTEuMDA3LDIuMjItMS4wMDcsMy45NjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwy'+
			'LjEsMC42MDEsMy44MTcsMS42MDksNC41OTNjMC44ODEsMC42NzksMS41MDYsMC43OTMsMi41NzMsMC43OTNjMS4yNTgsMCwyLjIxNC0wLjQ5LDIuOTgyLTAuODgzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNTc5LTAuMjk3LDEuMDM2LTAuNTMxLDEuNTAxLTAuNTMxczAuOTIzLDAuMjM0LDEuNTAyLDAuNTMyYzAuNzY3LDAuMzkzLDEuNzI0LDAuODgyLDIuOTgyLDAuODgyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzEuMDY1LDAsMS42OS0wLjExNCwyLjU3Mi0wLjc5MmMxLjAwOS0wLjc3NiwxLjYxMS0yLjQ5MywxLjYxMS00LjU5NUMtMzMyMC41ODEtMjU5MS41ODgtMz'+
			'MyMC45MDItMjU5Mi44NDgtMzMyMS41ODktMjU5My44MDh6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7IE0tMzMyMy42NjctMjU4Ny4xNjhjLTAuMzM1LDAuMjU5LTAuMzc4LDAuMjkyLTEuMDk3LDAuMjkyYy0wLjY3NSwwLTEuMjMzLTAuMjg3LTEuODc5LTAuNjE4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjcyOS0wLjM3My0xLjU1Ny0wLjc5Ni0yLjYwNS0wLjc5NnMtMS44NzUsMC40MjMtMi42MDQsMC43OTZjLTAuNjQ2LDAuMzMyLTEuMjA0LDAuNjE4LTEuODc5LDAuNjE4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjcxOSwwLTAuNzYyLTAuMDMzLTEu'+
			'MDk2LTAuMjkyYy0wLjE0Mi0wLjExMi0wLjY2OC0wLjg5My0wLjY2OC0yLjY3N2MwLTEuMTk3LDAuMTgxLTIuMDMzLDAuNTU1LTIuNTU1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMTI2LTAuMTc2LDAuNDM0LTAuNDExLDEuNjQtMC40MTFoOC4xMDdjMS4yMDUsMCwxLjUxMiwwLjIzNCwxLjYzOCwwLjQxMWMwLjM3NCwwLjUyMiwwLjU1NiwxLjM1OCwwLjU1NiwyLjU1NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzMyMy0yNTg4LjA2LTMzMjMuNTI3LTI1ODcuMjgtMzMyMy42NjctMjU4Ny4xNjh6IiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiLz4KICAgPC'+
			'9nPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik0tMzMyOS4yNDktMjYwMi41Yy02Ljg5MiwwLTEyLjUsNS42MDctMTIuNSwxMi41czUuNjA3LDEyLjUsMTIuNSwxMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzYuODkzLDAsMTIuNS01LjYwNywxMi41LTEyLjVTLTMzMjIuMzU1LTI2MDIuNS0zMzI5LjI0OS0yNjAyLjV6IE0tMzMyOS4yNDktMjU4MC4xMzJjLTUuNDQxLDAtOS44Ny00LjQyNy05Ljg3LTkuODY4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAtNS40NDIsNC40MjktOS44NjksOS44Ny05Ljg2OWM1LjQ0MiwwLDkuODcsNC40MjgsOS44Nyw5Ljg2OUMtMzMxOS4zNzgt'+
			'MjU4NC41Ni0zMzIzLjgwNS0yNTgwLjEzMi0zMzI5LjI0OS0yNTgwLjEzMnoiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2Utd2lkdGg9IjAuMiIvPgogICAgPHBhdGggZD0iTS0zMzIxLjU4OS0yNTkzLjgwOGMtMC45LTEuMjYtMi4zOTktMS40MjItMy42MDQtMS40MjJoLTEuNzA0di0xLjY0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLTAuNjY4LTAuNTQyLTEuMjA5LTEuMjEtMS4yMDloLTIuMjgxYy0wLjY2OCwwLTEuMjEsMC41NDEtMS4yMSwxLjIwOXYxLjY0NmgtMS43MDJjLTEuMjA1LDAtMi43MDQsMC4xNjItMy42MDYsMS'+
			'40MjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjg4LDAuOTYxLTEuMDA3LDIuMjItMS4wMDcsMy45NjNjMCwyLjEsMC42MDEsMy44MTcsMS42MDksNC41OTNjMC44ODEsMC42NzksMS41MDYsMC43OTMsMi41NzMsMC43OTMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMS4yNTgsMCwyLjIxNC0wLjQ5LDIuOTgyLTAuODgzYzAuNTc5LTAuMjk3LDEuMDM2LTAuNTMxLDEuNTAxLTAuNTMxczAuOTIzLDAuMjM0LDEuNTAyLDAuNTMyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNzY3LDAuMzkzLDEuNzI0LDAuODgyLDIuOTgyLDAuODgyYzEuMDY1LDAsMS42OS0w'+
			'LjExNCwyLjU3Mi0wLjc5MmMxLjAwOS0wLjc3NiwxLjYxMS0yLjQ5MywxLjYxMS00LjU5NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzMyMC41ODEtMjU5MS41ODgtMzMyMC45MDItMjU5Mi44NDgtMzMyMS41ODktMjU5My44MDh6IE0tMzMyMy42NjctMjU4Ny4xNjhjLTAuMzM1LDAuMjU5LTAuMzc4LDAuMjkyLTEuMDk3LDAuMjkyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjY3NSwwLTEuMjMzLTAuMjg3LTEuODc5LTAuNjE4Yy0wLjcyOS0wLjM3My0xLjU1Ny0wLjc5Ni0yLjYwNS0wLjc5NnMtMS44NzUsMC40MjMtMi42MDQsMC43OTYmI3hkOyYjeGE7JiN4OTsmI3'+
			'g5OyYjeDk7JiN4OTtjLTAuNjQ2LDAuMzMyLTEuMjA0LDAuNjE4LTEuODc5LDAuNjE4Yy0wLjcxOSwwLTAuNzYyLTAuMDMzLTEuMDk2LTAuMjkyYy0wLjE0Mi0wLjExMi0wLjY2OC0wLjg5My0wLjY2OC0yLjY3NyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLTEuMTk3LDAuMTgxLTIuMDMzLDAuNTU1LTIuNTU1YzAuMTI2LTAuMTc2LDAuNDM0LTAuNDExLDEuNjQtMC40MTFoOC4xMDdjMS4yMDUsMCwxLjUxMiwwLjIzNCwxLjYzOCwwLjQxMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjM3NCwwLjUyMiwwLjU1NiwxLjM1OCwwLjU1NiwyLjU1NUMtMzMyMy0yNTg4LjA2LTMz'+
			'MjMuNTI3LTI1ODcuMjgtMzMyMy42NjctMjU4Ny4xNjh6IiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzFBMTcxQiIgc3Ryb2tlLXdpZHRoPSIwLjIiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIi8+Cjwvc3ZnPgo=';
		me._enter_vr__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._enter_vr__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMycHgiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldy'+
			'AtMzM0NS4yNSAtMjU3MS4zMzMgMzIgMzIiIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB2aWV3Qm94PSItMzM0NS4yNSAtMjU3MS4zMzMgMzIgMzIiPgogPGcgaWQ9IkxheWVyXzEiLz4KIDxnIGlkPSJFYmVuZV8xIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBkPSJNLTMzMjkuMjUtMjU2OS4wODNjLTcuNTgxLDAtMTMuNzUsNi4xNjgtMTMuNzUsMTMuNzQ5YzAsNy41ODMsNi4xNjgsMTMuNzUsMTMuNzUsMTMuNzUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjNy41ODMsMCwxMy43NS02LjE2'+
			'NywxMy43NS0xMy43NUMtMzMxNS41LTI1NjIuOTE1LTMzMjEuNjY3LTI1NjkuMDgzLTMzMjkuMjUtMjU2OS4wODN6IE0tMzMyOS4yNS0yNTQ0LjQ3OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtNS45ODUsMC0xMC44NTctNC44NjktMTAuODU3LTEwLjg1NWMwLTUuOTg2LDQuODcyLTEwLjg1NSwxMC44NTctMTAuODU1YzUuOTg3LDAsMTAuODU3LDQuODcxLDEwLjg1NywxMC44NTUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDLTMzMTguMzkzLTI1NDkuMzQ5LTMzMjMuMjYyLTI1NDQuNDc5LTMzMjkuMjUtMjU0NC40Nzl6IiBmaWxsPSIjMUExNzFCIi8+CiAgICA8cGF0aCBkPS'+
			'JNLTMzMjAuODI1LTI1NTkuNTIxYy0wLjk5LTEuMzg3LTIuNjM5LTEuNTY0LTMuOTY1LTEuNTY0aC0xLjg3NXYtMS44MTJjMC0wLjczNC0wLjU5Ni0xLjMzLTEuMzMxLTEuMzMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtoLTIuNTA5Yy0wLjczNSwwLTEuMzMxLDAuNTk2LTEuMzMxLDEuMzN2MS44MTJoLTEuODczYy0xLjMyNSwwLTIuOTc0LDAuMTc4LTMuOTY3LDEuNTY0Yy0wLjc1NiwxLjA1Ny0xLjEwNywyLjQ0Mi0xLjEwNyw0LjM1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDIuMzEsMC42NjIsNC4xOTksMS43Nyw1LjA1M2MwLjk2OSwwLjc0NywxLjY1NywwLjg3Mywy'+
			'LjgzMSwwLjg3M2MxLjM4NCwwLDIuNDM2LTAuNTM5LDMuMjgxLTAuOTcxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNjM3LTAuMzI3LDEuMTQtMC41ODQsMS42NTEtMC41ODRjMC41MTIsMCwxLjAxNSwwLjI1NywxLjY1MiwwLjU4NGMwLjg0NCwwLjQzMiwxLjg5NywwLjk3LDMuMjgxLDAuOTcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMS4xNzEsMCwxLjg1OS0wLjEyNSwyLjgzLTAuODcxYzEuMTA5LTAuODU0LDEuNzcyLTIuNzQzLDEuNzcyLTUuMDU0Qy0zMzE5LjcxNS0yNTU3LjA4MS0zMzIwLjA2OC0yNTU4LjQ2Ni0zMzIwLjgyNS0yNTU5LjUyMXomI3hkOyYjeGE7Ji'+
			'N4OTsmI3g5OyYjeDk7JiN4OTsgTS0zMzIzLjExMS0yNTUyLjIxOGMtMC4zNjksMC4yODUtMC40MTYsMC4zMjEtMS4yMDYsMC4zMjFjLTAuNzQyLDAtMS4zNTctMC4zMTUtMi4wNjctMC42NzkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuODAyLTAuNDExLTEuNzEyLTAuODc2LTIuODY2LTAuODc2Yy0xLjE1MywwLTIuMDYyLDAuNDY1LTIuODY1LDAuODc2Yy0wLjcxLDAuMzY0LTEuMzI1LDAuNjc5LTIuMDY3LDAuNjc5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjc5MSwwLTAuODM4LTAuMDM2LTEuMjA1LTAuMzJjLTAuMTU2LTAuMTIzLTAuNzM1LTAuOTgxLTAuNzM1'+
			'LTIuOTQ1YzAtMS4zMTcsMC4yLTIuMjM2LDAuNjEtMi44MTEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4xMzgtMC4xOTQsMC40NzctMC40NTIsMS44MDMtMC40NTJoOC45MThjMS4zMjYsMCwxLjY2MywwLjI1NywxLjgwMSwwLjQ1MmMwLjQxMiwwLjU3NSwwLjYxMSwxLjQ5NCwwLjYxMSwyLjgxMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzMyMi4zNzctMjU1My4xOTktMzMyMi45NTYtMjU1Mi4zNDEtMzMyMy4xMTEtMjU1Mi4yMTh6IiBmaWxsPSIjMUExNzFCIi8+CiAgIDwvZz4KICAgPGcgb3BhY2l0eT0iMC40Ij4KICAgIDxwYXRoIGQ9Ik0tMzMyOS4yNS0yNTY5Lj'+
			'A4M2MtNy41ODEsMC0xMy43NSw2LjE2OC0xMy43NSwxMy43NDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCw3LjU4Myw2LjE2OCwxMy43NSwxMy43NSwxMy43NWM3LjU4MywwLDEzLjc1LTYuMTY3LDEzLjc1LTEzLjc1Qy0zMzE1LjUtMjU2Mi45MTUtMzMyMS42NjctMjU2OS4wODMtMzMyOS4yNS0yNTY5LjA4M3omI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsgTS0zMzI5LjI1LTI1NDQuNDc5Yy01Ljk4NSwwLTEwLjg1Ny00Ljg2OS0xMC44NTctMTAuODU1YzAtNS45ODYsNC44NzItMTAuODU1LDEwLjg1Ny0xMC44NTUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjNS45'+
			'ODcsMCwxMC44NTcsNC44NzEsMTAuODU3LDEwLjg1NUMtMzMxOC4zOTMtMjU0OS4zNDktMzMyMy4yNjItMjU0NC40NzktMzMyOS4yNS0yNTQ0LjQ3OXoiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHBhdGggZD0iTS0zMzIwLjgyNS0yNTU5LjUyMWMtMC45OS0xLjM4Ny0yLjYzOS0xLjU2NC0zLjk2NS0xLjU2NGgtMS44NzUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTt2LTEuODEyYzAtMC43MzQtMC41OTYtMS4zMy0xLjMzMS0xLjMzaC0yLjUwOWMtMC43MzUsMC0xLjMzMSwwLjU5Ni0xLjMzMSwxLj'+
			'MzdjEuODEyaC0xLjg3M2MtMS4zMjUsMC0yLjk3NCwwLjE3OC0zLjk2NywxLjU2NCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC43NTYsMS4wNTctMS4xMDcsMi40NDItMS4xMDcsNC4zNTljMCwyLjMxLDAuNjYyLDQuMTk5LDEuNzcsNS4wNTNjMC45NjksMC43NDcsMS42NTcsMC44NzMsMi44MzEsMC44NzMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMS4zODQsMCwyLjQzNi0wLjUzOSwzLjI4MS0wLjk3MWMwLjYzNy0wLjMyNywxLjE0LTAuNTg0LDEuNjUxLTAuNTg0YzAuNTEyLDAsMS4wMTUsMC4yNTcsMS42NTIsMC41ODQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4'+
			'OTtjMC44NDQsMC40MzIsMS44OTcsMC45NywzLjI4MSwwLjk3YzEuMTcxLDAsMS44NTktMC4xMjUsMi44My0wLjg3MWMxLjEwOS0wLjg1NCwxLjc3Mi0yLjc0MywxLjc3Mi01LjA1NCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzMxOS43MTUtMjU1Ny4wODEtMzMyMC4wNjgtMjU1OC40NjYtMzMyMC44MjUtMjU1OS41MjF6IE0tMzMyMy4xMTEtMjU1Mi4yMThjLTAuMzY5LDAuMjg1LTAuNDE2LDAuMzIxLTEuMjA2LDAuMzIxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjc0MiwwLTEuMzU3LTAuMzE1LTIuMDY3LTAuNjc5Yy0wLjgwMi0wLjQxMS0xLjcxMi0wLjg3Ni0yLj'+
			'g2Ni0wLjg3NmMtMS4xNTMsMC0yLjA2MiwwLjQ2NS0yLjg2NSwwLjg3NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC43MSwwLjM2NC0xLjMyNSwwLjY3OS0yLjA2NywwLjY3OWMtMC43OTEsMC0wLjgzOC0wLjAzNi0xLjIwNS0wLjMyYy0wLjE1Ni0wLjEyMy0wLjczNS0wLjk4MS0wLjczNS0yLjk0NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLTEuMzE3LDAuMi0yLjIzNiwwLjYxLTIuODExYzAuMTM4LTAuMTk0LDAuNDc3LTAuNDUyLDEuODAzLTAuNDUyaDguOTE4YzEuMzI2LDAsMS42NjMsMC4yNTcsMS44MDEsMC40NTImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4'+
			'OTtjMC40MTIsMC41NzUsMC42MTEsMS40OTQsMC42MTEsMi44MTFDLTMzMjIuMzc3LTI1NTMuMTk5LTMzMjIuOTU2LTI1NTIuMzQxLTMzMjMuMTExLTI1NTIuMjE4eiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgIDwvZz4KICAgPGc+CiAgICA8cGF0aCBkPSJNLTMzMjkuMjUtMjU2OS4wODNjLTcuNTgxLDAtMTMuNzUsNi4xNjgtMTMuNzUsMTMuNzQ5YzAsNy41ODMsNi4xNjgsMTMuNzUsMTMuNzUsMTMuNzUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjNy41ODMsMCwxMy43NS02LjE2NywxMy43NS0xMy'+
			'43NUMtMzMxNS41LTI1NjIuOTE1LTMzMjEuNjY3LTI1NjkuMDgzLTMzMjkuMjUtMjU2OS4wODN6IE0tMzMyOS4yNS0yNTQ0LjQ3OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtNS45ODUsMC0xMC44NTctNC44NjktMTAuODU3LTEwLjg1NWMwLTUuOTg2LDQuODcyLTEwLjg1NSwxMC44NTctMTAuODU1YzUuOTg3LDAsMTAuODU3LDQuODcxLDEwLjg1NywxMC44NTUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDLTMzMTguMzkzLTI1NDkuMzQ5LTMzMjMuMjYyLTI1NDQuNDc5LTMzMjkuMjUtMjU0NC40Nzl6IiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiLz4KICAgIDxw'+
			'YXRoIGQ9Ik0tMzMyMC44MjUtMjU1OS41MjFjLTAuOTktMS4zODctMi42MzktMS41NjQtMy45NjUtMS41NjRoLTEuODc1di0xLjgxMmMwLTAuNzM0LTAuNTk2LTEuMzMtMS4zMzEtMS4zMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2gtMi41MDljLTAuNzM1LDAtMS4zMzEsMC41OTYtMS4zMzEsMS4zM3YxLjgxMmgtMS44NzNjLTEuMzI1LDAtMi45NzQsMC4xNzgtMy45NjcsMS41NjRjLTAuNzU2LDEuMDU3LTEuMTA3LDIuNDQyLTEuMTA3LDQuMzU5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsMi4zMSwwLjY2Miw0LjE5OSwxLjc3LDUuMDUzYzAuOTY5LDAuNzQ3LDEuNjU3LD'+
			'AuODczLDIuODMxLDAuODczYzEuMzg0LDAsMi40MzYtMC41MzksMy4yODEtMC45NzEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC42MzctMC4zMjcsMS4xNC0wLjU4NCwxLjY1MS0wLjU4NGMwLjUxMiwwLDEuMDE1LDAuMjU3LDEuNjUyLDAuNTg0YzAuODQ0LDAuNDMyLDEuODk3LDAuOTcsMy4yODEsMC45NyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MxLjE3MSwwLDEuODU5LTAuMTI1LDIuODMtMC44NzFjMS4xMDktMC44NTQsMS43NzItMi43NDMsMS43NzItNS4wNTRDLTMzMTkuNzE1LTI1NTcuMDgxLTMzMjAuMDY4LTI1NTguNDY2LTMzMjAuODI1LTI1NTkuNTIxeiYjeGQ7'+
			'JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyBNLTMzMjMuMTExLTI1NTIuMjE4Yy0wLjM2OSwwLjI4NS0wLjQxNiwwLjMyMS0xLjIwNiwwLjMyMWMtMC43NDIsMC0xLjM1Ny0wLjMxNS0yLjA2Ny0wLjY3OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC44MDItMC40MTEtMS43MTItMC44NzYtMi44NjYtMC44NzZjLTEuMTUzLDAtMi4wNjIsMC40NjUtMi44NjUsMC44NzZjLTAuNzEsMC4zNjQtMS4zMjUsMC42NzktMi4wNjcsMC42NzkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNzkxLDAtMC44MzgtMC4wMzYtMS4yMDUtMC4zMmMtMC4xNTYtMC4xMjMtMC43MzUtMC45OD'+
			'EtMC43MzUtMi45NDVjMC0xLjMxNywwLjItMi4yMzYsMC42MS0yLjgxMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjEzOC0wLjE5NCwwLjQ3Ny0wLjQ1MiwxLjgwMy0wLjQ1Mmg4LjkxOGMxLjMyNiwwLDEuNjYzLDAuMjU3LDEuODAxLDAuNDUyYzAuNDEyLDAuNTc1LDAuNjExLDEuNDk0LDAuNjExLDIuODExJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Qy0zMzIyLjM3Ny0yNTUzLjE5OS0zMzIyLjk1Ni0yNTUyLjM0MS0zMzIzLjExMS0yNTUyLjIxOHoiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIvPgogICA8L2c+CiAgIDxnPgogICAgPHBhdGggZD0iTS0zMzI5'+
			'LjI1LTI1NjkuMDgzYy03LjU4MSwwLTEzLjc1LDYuMTY4LTEzLjc1LDEzLjc0OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDcuNTgzLDYuMTY4LDEzLjc1LDEzLjc1LDEzLjc1YzcuNTgzLDAsMTMuNzUtNi4xNjcsMTMuNzUtMTMuNzVDLTMzMTUuNS0yNTYyLjkxNS0zMzIxLjY2Ny0yNTY5LjA4My0zMzI5LjI1LTI1NjkuMDgzeiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyBNLTMzMjkuMjUtMjU0NC40NzljLTUuOTg1LDAtMTAuODU3LTQuODY5LTEwLjg1Ny0xMC44NTVjMC01Ljk4Niw0Ljg3Mi0xMC44NTUsMTAuODU3LTEwLjg1NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OT'+
			'smI3g5O2M1Ljk4NywwLDEwLjg1Nyw0Ljg3MSwxMC44NTcsMTAuODU1Qy0zMzE4LjM5My0yNTQ5LjM0OS0zMzIzLjI2Mi0yNTQ0LjQ3OS0zMzI5LjI1LTI1NDQuNDc5eiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiAgICA8cGF0aCBkPSJNLTMzMjAuODI1LTI1NTkuNTIxYy0wLjk5LTEuMzg3LTIuNjM5LTEuNTY0LTMuOTY1LTEuNTY0aC0xLjg3NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O3YtMS44MTJjMC0wLjczNC0wLjU5Ni0xLjMzLTEuMzMxLTEuMzNoLTIuNTA5Yy0wLjczNSwwLTEuMzMxLDAuNTk2'+
			'LTEuMzMxLDEuMzN2MS44MTJoLTEuODczYy0xLjMyNSwwLTIuOTc0LDAuMTc4LTMuOTY3LDEuNTY0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjc1NiwxLjA1Ny0xLjEwNywyLjQ0Mi0xLjEwNyw0LjM1OWMwLDIuMzEsMC42NjIsNC4xOTksMS43Nyw1LjA1M2MwLjk2OSwwLjc0NywxLjY1NywwLjg3MywyLjgzMSwwLjg3MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MxLjM4NCwwLDIuNDM2LTAuNTM5LDMuMjgxLTAuOTcxYzAuNjM3LTAuMzI3LDEuMTQtMC41ODQsMS42NTEtMC41ODRjMC41MTIsMCwxLjAxNSwwLjI1NywxLjY1MiwwLjU4NCYjeGQ7JiN4YTsmI3g5OyYjeD'+
			'k7JiN4OTsmI3g5O2MwLjg0NCwwLjQzMiwxLjg5NywwLjk3LDMuMjgxLDAuOTdjMS4xNzEsMCwxLjg1OS0wLjEyNSwyLjgzLTAuODcxYzEuMTA5LTAuODU0LDEuNzcyLTIuNzQzLDEuNzcyLTUuMDU0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Qy0zMzE5LjcxNS0yNTU3LjA4MS0zMzIwLjA2OC0yNTU4LjQ2Ni0zMzIwLjgyNS0yNTU5LjUyMXogTS0zMzIzLjExMS0yNTUyLjIxOGMtMC4zNjksMC4yODUtMC40MTYsMC4zMjEtMS4yMDYsMC4zMjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNzQyLDAtMS4zNTctMC4zMTUtMi4wNjctMC42NzljLTAuODAyLTAuNDExLTEuNzEy'+
			'LTAuODc2LTIuODY2LTAuODc2Yy0xLjE1MywwLTIuMDYyLDAuNDY1LTIuODY1LDAuODc2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjcxLDAuMzY0LTEuMzI1LDAuNjc5LTIuMDY3LDAuNjc5Yy0wLjc5MSwwLTAuODM4LTAuMDM2LTEuMjA1LTAuMzJjLTAuMTU2LTAuMTIzLTAuNzM1LTAuOTgxLTAuNzM1LTIuOTQ1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAtMS4zMTcsMC4yLTIuMjM2LDAuNjEtMi44MTFjMC4xMzgtMC4xOTQsMC40NzctMC40NTIsMS44MDMtMC40NTJoOC45MThjMS4zMjYsMCwxLjY2MywwLjI1NywxLjgwMSwwLjQ1MiYjeGQ7JiN4YTsmI3g5OyYjeD'+
			'k7JiN4OTsmI3g5O2MwLjQxMiwwLjU3NSwwLjYxMSwxLjQ5NCwwLjYxMSwyLjgxMUMtMzMyMi4zNzctMjU1My4xOTktMzMyMi45NTYtMjU1Mi4zNDEtMzMyMy4xMTEtMjU1Mi4yMTh6IiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzFBMTcxQiIgc3Ryb2tlLXdpZHRoPSIwLjIiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIi8+Cjwvc3ZnPgo=';
		me._enter_vr__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="enter_vr";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 256px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._enter_vr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._enter_vr.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('pos_enter_vr') == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('pos_enter_vr') == 1))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('pos_enter_vr') == 2))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('pos_enter_vr') == 3))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('pos_enter_vr') == 4))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('pos_enter_vr') == 5))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getVariableValue('pos_enter_vr') == 6))
			)
			{
				newLogicStatePosition = 6;
			}
			else if (
				((player.getVariableValue('pos_enter_vr') == 7))
			)
			{
				newLogicStatePosition = 7;
			}
			else if (
				((player.getVariableValue('pos_enter_vr') == 8))
			)
			{
				newLogicStatePosition = 8;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._enter_vr.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._enter_vr.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._enter_vr.style[domTransition]='left 0s, top 0s';
				if (me._enter_vr.ggCurrentLogicStatePosition == 0) {
					me._enter_vr.style.left='0px';
					me._enter_vr.style.top='0px';
				}
				else if (me._enter_vr.ggCurrentLogicStatePosition == 1) {
					me._enter_vr.style.left='32px';
					me._enter_vr.style.top='0px';
				}
				else if (me._enter_vr.ggCurrentLogicStatePosition == 2) {
					me._enter_vr.style.left='64px';
					me._enter_vr.style.top='0px';
				}
				else if (me._enter_vr.ggCurrentLogicStatePosition == 3) {
					me._enter_vr.style.left='96px';
					me._enter_vr.style.top='0px';
				}
				else if (me._enter_vr.ggCurrentLogicStatePosition == 4) {
					me._enter_vr.style.left='128px';
					me._enter_vr.style.top='0px';
				}
				else if (me._enter_vr.ggCurrentLogicStatePosition == 5) {
					me._enter_vr.style.left='160px';
					me._enter_vr.style.top='0px';
				}
				else if (me._enter_vr.ggCurrentLogicStatePosition == 6) {
					me._enter_vr.style.left='192px';
					me._enter_vr.style.top='0px';
				}
				else if (me._enter_vr.ggCurrentLogicStatePosition == 7) {
					me._enter_vr.style.left='224px';
					me._enter_vr.style.top='0px';
				}
				else if (me._enter_vr.ggCurrentLogicStatePosition == 8) {
					me._enter_vr.style.left='256px';
					me._enter_vr.style.top='0px';
				}
				else {
					me._enter_vr.style.left='256px';
					me._enter_vr.style.top='0px';
				}
			}
		}
		me._enter_vr.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.hasVR() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._enter_vr.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._enter_vr.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._enter_vr.style[domTransition]='left 0s, top 0s';
				if (me._enter_vr.ggCurrentLogicStateVisible == 0) {
					me._enter_vr.style.visibility=(Number(me._enter_vr.style.opacity)>0||!me._enter_vr.style.opacity)?'inherit':'hidden';
					me._enter_vr.ggVisible=true;
				}
				else {
					me._enter_vr.style.visibility="hidden";
					me._enter_vr.ggVisible=false;
				}
			}
		}
		me._enter_vr.onclick=function (e) {
			player.enterVR();
		}
		me._enter_vr.onmouseover=function (e) {
			me._enter_vr__img.style.visibility='hidden';
			me._enter_vr__imgo.style.visibility='inherit';
			me.elementMouseOver['enter_vr']=true;
			me._tt_enter_vr.logicBlock_visible();
		}
		me._enter_vr.onmouseout=function (e) {
			me._enter_vr__img.style.visibility='inherit';
			me._enter_vr__imgo.style.visibility='hidden';
			me.elementMouseOver['enter_vr']=false;
			me._tt_enter_vr.logicBlock_visible();
		}
		me._enter_vr.ontouchend=function (e) {
			me.elementMouseOver['enter_vr']=false;
			me._tt_enter_vr.logicBlock_visible();
		}
		me._enter_vr.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_enter_vr=document.createElement('div');
		els=me._tt_enter_vr__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_enter_vr";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Enter VR";
		el.appendChild(els);
		me._tt_enter_vr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_enter_vr.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_enter_vr.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_enter_vr.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_enter_vr.style[domTransition]='left 0s, top 0s';
				if (me._tt_enter_vr.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_enter_vr.style.top='-25px';
					me._tt_enter_vr.ggUpdatePosition(true);
				}
				else {
					me._tt_enter_vr.ggDx=0;
					me._tt_enter_vr.style.top='32px';
					me._tt_enter_vr.ggUpdatePosition(true);
				}
			}
		}
		me._tt_enter_vr.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['enter_vr'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_enter_vr.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_enter_vr.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_enter_vr.style[domTransition]='left 0s, top 0s';
				if (me._tt_enter_vr.ggCurrentLogicStateVisible == 0) {
					me._tt_enter_vr.style.visibility=(Number(me._tt_enter_vr.style.opacity)>0||!me._tt_enter_vr.style.opacity)?'inherit':'hidden';
					me._tt_enter_vr.ggVisible=true;
				}
				else {
					me._tt_enter_vr.style.visibility="hidden";
					me._tt_enter_vr.ggVisible=false;
				}
			}
		}
		me._tt_enter_vr.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._enter_vr.appendChild(me._tt_enter_vr);
		me._controller_slider.appendChild(me._enter_vr);
		el=me._gyro=document.createElement('div');
		el.ggId="gyro";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 192px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gyro.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('pos_gyro') == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('pos_gyro') == 1))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('pos_gyro') == 2))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('pos_gyro') == 3))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('pos_gyro') == 4))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('pos_gyro') == 5))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getVariableValue('pos_gyro') == 6))
			)
			{
				newLogicStatePosition = 6;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._gyro.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._gyro.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._gyro.style[domTransition]='left 0s, top 0s';
				if (me._gyro.ggCurrentLogicStatePosition == 0) {
					me._gyro.style.left='0px';
					me._gyro.style.top='0px';
				}
				else if (me._gyro.ggCurrentLogicStatePosition == 1) {
					me._gyro.style.left='32px';
					me._gyro.style.top='0px';
				}
				else if (me._gyro.ggCurrentLogicStatePosition == 2) {
					me._gyro.style.left='64px';
					me._gyro.style.top='0px';
				}
				else if (me._gyro.ggCurrentLogicStatePosition == 3) {
					me._gyro.style.left='96px';
					me._gyro.style.top='0px';
				}
				else if (me._gyro.ggCurrentLogicStatePosition == 4) {
					me._gyro.style.left='128px';
					me._gyro.style.top='0px';
				}
				else if (me._gyro.ggCurrentLogicStatePosition == 5) {
					me._gyro.style.left='160px';
					me._gyro.style.top='0px';
				}
				else if (me._gyro.ggCurrentLogicStatePosition == 6) {
					me._gyro.style.left='192px';
					me._gyro.style.top='0px';
				}
				else {
					me._gyro.style.left='192px';
					me._gyro.style.top='0px';
				}
			}
		}
		me._gyro.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gyro.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gyro.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gyro.style[domTransition]='left 0s, top 0s';
				if (me._gyro.ggCurrentLogicStateVisible == 0) {
					me._gyro.style.visibility=(Number(me._gyro.style.opacity)>0||!me._gyro.style.opacity)?'inherit':'hidden';
					me._gyro.ggVisible=true;
				}
				else {
					me._gyro.style.visibility="hidden";
					me._gyro.ggVisible=false;
				}
			}
		}
		me._gyro.onclick=function (e) {
			player.stopAutorotate();
			player.setUseGyro(!(player.getUseGyro()));
		}
		me._gyro.onmouseover=function (e) {
			me.elementMouseOver['gyro']=true;
			me._tt_gyro.logicBlock_visible();
		}
		me._gyro.onmouseout=function (e) {
			me.elementMouseOver['gyro']=false;
			me._tt_gyro.logicBlock_visible();
		}
		me._gyro.ontouchend=function (e) {
			me.elementMouseOver['gyro']=false;
			me._tt_gyro.logicBlock_visible();
		}
		me._gyro.ggUpdatePosition=function (useTransition) {
		}
		el=me._gyro_on=document.createElement('div');
		els=me._gyro_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjAvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzJweCIgeT0iMHB4IiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9Hcm'+
			'FwaHMvMS4wLyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzUwNi42NjcgLTI2MDYgMzIgMzIiIHZlcnNpb249IjEuMCIgaGVpZ2h0PSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4PSIwcHgiIHZpZXdCb3g9Ii0zNTA2LjY2NyAtMjYwNiAzMiAzMiIgeG1sbnM6eD0iaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNp'+
			'YmlsaXR5LzEuMC8iPgogPGcgaWQ9IkxheWVyXzEiLz4KIDxnIGlkPSJFYmVuZV8xIj4KICA8Zz4KICAgPGcgb3BhY2l0eT0iMC40Ij4KICAgIDxwYXRoIGQ9Ik0tMzQ5Mi4wODEtMjU5MC4zNWMwLjE3MiwwLjUwMiwwLjY0MiwwLjgxNywxLjE0NSwwLjgxNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjEzLDAsMC4yNjItMC4wMjEsMC4zOTItMC4wNjVjMC42MzItMC4yMTYsMC45NjktMC45MDQsMC43NTItMS41MzdsLTIuMDgzLTYuMDhjLTAuMjE2LTAuNjMxLTAuOTA2LTAuOTY2LTEuNTM2LTAuNzUyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjYzMywwLjIxNi0wLj'+
			'k2OSwwLjkwNC0wLjc1MywxLjUzNkwtMzQ5Mi4wODEtMjU5MC4zNXoiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHBhdGggZD0iTS0zNDkwLjY2Ny0yNjAyLjVjLTYuODkyLDAtMTIuNDk5LDUuNjA3LTEyLjQ5OSwxMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7czUuNjA3LDEyLjUsMTIuNDk5LDEyLjVzMTIuNS01LjYwNywxMi41LTEyLjVTLTM0ODMuNzc1LTI2MDIuNS0zNDkwLjY2Ny0yNjAyLjV6IE0tMzQ5MC42NjctMjU3OS45MTkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTUu'+
			'NTU4LDAtMTAuMDgtNC41MjEtMTAuMDgtMTAuMDgxYzAtNS41NTksNC41MjItMTAuMDgsMTAuMDgtMTAuMDhjNS41NTksMCwxMC4wODEsNC41MjEsMTAuMDgxLDEwLjA4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Qy0zNDgwLjU4Ni0yNTg0LjQ0MS0zNDg1LjEwOC0yNTc5LjkxOS0zNDkwLjY2Ny0yNTc5LjkxOXoiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHBhdGggZD0iTS0zNDgyLjQ0MS0yNTkyLjk1N2MtMC42NzItMS45NjEtMi44NDctMy4xMzItNS44MTctMy4xMzImI3hkOyYjeGE7JiN4OT'+
			'smI3g5OyYjeDk7JiN4OTtjLTAuNzY0LDAtMS41NjIsMC4wODktMi4zNjUsMC4yNDZsMC43OTIsMi4zMTFjMC41MzYtMC4wODgsMS4wNjUtMC4xMzgsMS41NzMtMC4xMzhjMS44MzIsMCwzLjIxNiwwLjU4OCwzLjUyOCwxLjQ5OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjQ3NiwxLjM4Ny0xLjQ0OSwzLjc3Ni00Ljk3MSw0Ljk4M2MtMS4xNjQsMC4zOTgtMi4zNTksMC42MS0zLjQ1NiwwLjYxYy0xLjgzMiwwLTMuMjE2LTAuNTg4LTMuNTI4LTEuNDk3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjM4Ni0xLjEyOSwwLjgxMS0yLjkxNywzLjE2My00LjE5NWwtMC43OTEt'+
			'Mi4zMDljLTMuNTMsMS43OTItNS41MjUsNC43NjQtNC42NjEsNy4yODhjMC42NzIsMS45NjEsMi44NDcsMy4xMzIsNS44MTcsMy4xMzImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC45ODUsMCwyLjAyNS0wLjEzOCwzLjA2MS0wLjM5NmwwLjU5OCwxLjc0M2MwLjE3MiwwLjUwMiwwLjY0MiwwLjgxOCwxLjE0NSwwLjgxOGMwLjEzLDAsMC4yNjMtMC4wMjEsMC4zOTMtMC4wNjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC42MzEtMC4yMTcsMC45NjktMC45MDQsMC43NTEtMS41MzdsLTAuNTk3LTEuNzQxQy0zNDgzLjg0My0yNTg3LjA3Ny0zNDgxLjUyMi0yNTkwLjI3MS0zND'+
			'gyLjQ0MS0yNTkyLjk1N3oiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICA8L2c+CiAgIDxnPgogICAgPHBhdGggZD0iTS0zNDkyLjA4MS0yNTkwLjM1YzAuMTcyLDAuNTAyLDAuNjQyLDAuODE3LDEuMTQ1LDAuODE3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMTMsMCwwLjI2Mi0wLjAyMSwwLjM5Mi0wLjA2NWMwLjYzMi0wLjIxNiwwLjk2OS0wLjkwNCwwLjc1Mi0xLjUzN2wtMi4wODMtNi4wOGMtMC4yMTYtMC42MzEtMC45MDYtMC45NjYtMS41MzYtMC43NTImI3hkOyYjeGE7JiN4OTsmI3g5OyYj'+
			'eDk7JiN4OTtjLTAuNjMzLDAuMjE2LTAuOTY5LDAuOTA0LTAuNzUzLDEuNTM2TC0zNDkyLjA4MS0yNTkwLjM1eiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiAgICA8cGF0aCBkPSJNLTM0OTAuNjY3LTI2MDIuNWMtNi44OTIsMC0xMi40OTksNS42MDctMTIuNDk5LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtzNS42MDcsMTIuNSwxMi40OTksMTIuNXMxMi41LTUuNjA3LDEyLjUtMTIuNVMtMzQ4My43NzUtMjYwMi41LTM0OTAuNjY3LTI2MDIuNXogTS0zNDkwLjY2Ny0yNTc5LjkxOSYjeGQ7JiN4YT'+
			'smI3g5OyYjeDk7JiN4OTsmI3g5O2MtNS41NTgsMC0xMC4wOC00LjUyMS0xMC4wOC0xMC4wODFjMC01LjU1OSw0LjUyMi0xMC4wOCwxMC4wOC0xMC4wOGM1LjU1OSwwLDEwLjA4MSw0LjUyMSwxMC4wODEsMTAuMDgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDLTM0ODAuNTg2LTI1ODQuNDQxLTM0ODUuMTA4LTI1NzkuOTE5LTM0OTAuNjY3LTI1NzkuOTE5eiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiAgICA8cGF0aCBkPSJNLTM0ODIuNDQxLTI1OTIuOTU3Yy0wLjY3Mi0xLjk2MS0yLjg0Ny0zLjEzMi01'+
			'LjgxNy0zLjEzMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC43NjQsMC0xLjU2MiwwLjA4OS0yLjM2NSwwLjI0NmwwLjc5MiwyLjMxMWMwLjUzNi0wLjA4OCwxLjA2NS0wLjEzOCwxLjU3My0wLjEzOGMxLjgzMiwwLDMuMjE2LDAuNTg4LDMuNTI4LDEuNDk4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNDc2LDEuMzg3LTEuNDQ5LDMuNzc2LTQuOTcxLDQuOTgzYy0xLjE2NCwwLjM5OC0yLjM1OSwwLjYxLTMuNDU2LDAuNjFjLTEuODMyLDAtMy4yMTYtMC41ODgtMy41MjgtMS40OTcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuMzg2LTEuMTI5LDAuODExLT'+
			'IuOTE3LDMuMTYzLTQuMTk1bC0wLjc5MS0yLjMwOWMtMy41MywxLjc5Mi01LjUyNSw0Ljc2NC00LjY2MSw3LjI4OGMwLjY3MiwxLjk2MSwyLjg0NywzLjEzMiw1LjgxNywzLjEzMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjk4NSwwLDIuMDI1LTAuMTM4LDMuMDYxLTAuMzk2bDAuNTk4LDEuNzQzYzAuMTcyLDAuNTAyLDAuNjQyLDAuODE4LDEuMTQ1LDAuODE4YzAuMTMsMCwwLjI2My0wLjAyMSwwLjM5My0wLjA2NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjYzMS0wLjIxNywwLjk2OS0wLjkwNCwwLjc1MS0xLjUzN2wtMC41OTctMS43NDFDLTM0ODMuODQzLTI1ODcu'+
			'MDc3LTM0ODEuNTIyLTI1OTAuMjcxLTM0ODIuNDQxLTI1OTIuOTU3eiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiIvPgo8L3N2Zz4K';
		me._gyro_on__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gyro_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjAvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzJweCIgeT0iMHB4IiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9Hcm'+
			'FwaHMvMS4wLyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzUwNi42NjcgLTI1NzEuMzMzIDMyIDMyIiB2ZXJzaW9uPSIxLjAiIGhlaWdodD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeD0iMHB4IiB2aWV3Qm94PSItMzUwNi42NjcgLTI1NzEuMzMzIDMyIDMyIiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29t'+
			'L0V4dGVuc2liaWxpdHkvMS4wLyI+CiA8ZyBpZD0iTGF5ZXJfMSIvPgogPGcgaWQ9IkViZW5lXzEiPgogIDxnPgogICA8ZyBvcGFjaXR5PSIwLjQiPgogICAgPHBhdGggZD0iTS0zNDkyLjIyMy0yNTU1LjcxOGMwLjE4OSwwLjU1MiwwLjcwNiwwLjg5OSwxLjI1OSwwLjg5OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjE0MywwLDAuMjg5LTAuMDIzLDAuNDMxLTAuMDcyYzAuNjk2LTAuMjM4LDEuMDY1LTAuOTk1LDAuODI4LTEuNjlsLTIuMjkxLTYuNjg4Yy0wLjIzOC0wLjY5NC0wLjk5Ny0xLjA2My0xLjY4OS0wLjgyNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42OT'+
			'YsMC4yMzgtMS4wNjUsMC45OTQtMC44MjgsMS42ODlMLTM0OTIuMjIzLTI1NTUuNzE4eiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICA8cGF0aCBkPSJNLTM0OTAuNjY3LTI1NjkuMDgzYy03LjU4MSwwLTEzLjc0OSw2LjE2OC0xMy43NDksMTMuNzUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCw3LjU4Miw2LjE2OCwxMy43NSwxMy43NDksMTMuNzVjNy41ODIsMCwxMy43NS02LjE2NywxMy43NS0xMy43NUMtMzQ3Ni45MTctMjU2Mi45MTYtMzQ4My4wODUtMjU2OS4wODMtMzQ5MC42NjctMjU2OS4w'+
			'ODN6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7IE0tMzQ5MC42NjctMjU0NC4yNDVjLTYuMTEzLDAtMTEuMDg3LTQuOTc0LTExLjA4Ny0xMS4wODljMC02LjExNCw0Ljk3NC0xMS4wODgsMTEuMDg3LTExLjA4OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2M2LjExNCwwLDExLjA4OSw0Ljk3NCwxMS4wODksMTEuMDg4Qy0zNDc5LjU3OC0yNTQ5LjIxOS0zNDg0LjU1My0yNTQ0LjI0NS0zNDkwLjY2Ny0yNTQ0LjI0NXoiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHBhdGggZD0iTS0zNDgxLj'+
			'YxOS0yNTU4LjU4NmMtMC43NC0yLjE1OC0zLjEzMi0zLjQ0Ni02LjM5OS0zLjQ0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC44NCwwLTEuNzE4LDAuMDk4LTIuNjAxLDAuMjdsMC44NzEsMi41NDJjMC41OS0wLjA5NywxLjE3Mi0wLjE1MSwxLjczLTAuMTUxYzIuMDE1LDAsMy41MzgsMC42NDcsMy44ODEsMS42NDcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC41MjMsMS41MjYtMS41OTQsNC4xNTQtNS40NjgsNS40ODFjLTEuMjgsMC40MzgtMi41OTUsMC42NzEtMy44MDEsMC42NzFjLTIuMDE1LDAtMy41MzgtMC42NDctMy44OC0xLjY0NyYjeGQ7JiN4YTsmI3g5OyYj'+
			'eDk7JiN4OTsmI3g5O2MtMC40MjUtMS4yNDIsMC44OTItMy4yMDgsMy40NzktNC42MTVsLTAuODctMi41NGMtMy44ODMsMS45NzEtNi4wNzcsNS4yNC01LjEyNyw4LjAxN2MwLjczOSwyLjE1NywzLjEzMiwzLjQ0NSw2LjM5OCwzLjQ0NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MxLjA4MywwLDIuMjI4LTAuMTUyLDMuMzY3LTAuNDM2bDAuNjU3LDEuOTE3YzAuMTksMC41NTMsMC43MDYsMC44OTksMS4yNTksMC44OTljMC4xNDMsMCwwLjI4OS0wLjAyMywwLjQzMi0wLjA3MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjY5NC0wLjIzOSwxLjA2Ni0wLjk5NSwwLjgyNy0xLj'+
			'Y5bC0wLjY1Ni0xLjkxNUMtMzQ4My4xNjEtMjU1Mi4xMTgtMzQ4MC42MDctMjU1NS42MzEtMzQ4MS42MTktMjU1OC41ODZ6IiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzFBMTcxQiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik0tMzQ5Mi4yMjMtMjU1NS43MThjMC4xODksMC41NTIsMC43MDYsMC44OTksMS4yNTksMC44OTkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4xNDMsMCwwLjI4OS0wLjAyMywwLjQzMS0wLjA3MmMwLjY5Ni0wLjIzOCwxLjA2NS0wLjk5NSwwLjgyOC0xLjY5bC0yLjI5MS02LjY4OGMt'+
			'MC4yMzgtMC42OTQtMC45OTctMS4wNjMtMS42ODktMC44MjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjk2LDAuMjM4LTEuMDY1LDAuOTk0LTAuODI4LDEuNjg5TC0zNDkyLjIyMy0yNTU1LjcxOHoiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIvPgogICAgPHBhdGggZD0iTS0zNDkwLjY2Ny0yNTY5LjA4M2MtNy41ODEsMC0xMy43NDksNi4xNjgtMTMuNzQ5LDEzLjc1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsNy41ODIsNi4xNjgsMTMuNzUsMTMuNzQ5LDEzLjc1YzcuNTgyLDAsMTMuNz'+
			'UtNi4xNjcsMTMuNzUtMTMuNzVDLTM0NzYuOTE3LTI1NjIuOTE2LTM0ODMuMDg1LTI1NjkuMDgzLTM0OTAuNjY3LTI1NjkuMDgzeiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyBNLTM0OTAuNjY3LTI1NDQuMjQ1Yy02LjExMywwLTExLjA4Ny00Ljk3NC0xMS4wODctMTEuMDg5YzAtNi4xMTQsNC45NzQtMTEuMDg4LDExLjA4Ny0xMS4wODgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjNi4xMTQsMCwxMS4wODksNC45NzQsMTEuMDg5LDExLjA4OEMtMzQ3OS41NzgtMjU0OS4yMTktMzQ4NC41NTMtMjU0NC4yNDUtMzQ5MC42NjctMjU0NC4yNDV6IiBmaWxsLW9wYWNpdHk9IjEiIGZp'+
			'bGw9IiNmZmZmZmYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiLz4KICAgIDxwYXRoIGQ9Ik0tMzQ4MS42MTktMjU1OC41ODZjLTAuNzQtMi4xNTgtMy4xMzItMy40NDYtNi4zOTktMy40NDYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuODQsMC0xLjcxOCwwLjA5OC0yLjYwMSwwLjI3bDAuODcxLDIuNTQyYzAuNTktMC4wOTcsMS4xNzItMC4xNTEsMS43My0wLjE1MWMyLjAxNSwwLDMuNTM4LDAuNjQ3LDMuODgxLDEuNjQ3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNTIzLDEuNTI2LTEuNTk0LDQuMTU0LTUuNDY4LDUuNDgxYy0xLjI4LDAuNDM4LT'+
			'IuNTk1LDAuNjcxLTMuODAxLDAuNjcxYy0yLjAxNSwwLTMuNTM4LTAuNjQ3LTMuODgtMS42NDcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNDI1LTEuMjQyLDAuODkyLTMuMjA4LDMuNDc5LTQuNjE1bC0wLjg3LTIuNTRjLTMuODgzLDEuOTcxLTYuMDc3LDUuMjQtNS4xMjcsOC4wMTdjMC43MzksMi4xNTcsMy4xMzIsMy40NDUsNi4zOTgsMy40NDUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMS4wODMsMCwyLjIyOC0wLjE1MiwzLjM2Ny0wLjQzNmwwLjY1NywxLjkxN2MwLjE5LDAuNTUzLDAuNzA2LDAuODk5LDEuMjU5LDAuODk5YzAuMTQzLDAsMC4yODktMC4wMjMsMC40'+
			'MzItMC4wNzImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC42OTQtMC4yMzksMS4wNjYtMC45OTUsMC44MjctMS42OWwtMC42NTYtMS45MTVDLTM0ODMuMTYxLTI1NTIuMTE4LTM0ODAuNjA3LTI1NTUuNjMxLTM0ODEuNjE5LTI1NTguNTg2eiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiIvPgo8L3N2Zz4K';
		me._gyro_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="gyro_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gyro_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro_on.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getUseGyro() == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._gyro_on.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._gyro_on.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._gyro_on.style[domTransition]='opacity 500ms ease 0ms';
				if (me._gyro_on.ggCurrentLogicStateAlpha == 0) {
					me._gyro_on.style.visibility=me._gyro_on.ggVisible?'inherit':'hidden';
					me._gyro_on.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._gyro_on.style.opacity == 0.0) { me._gyro_on.style.visibility="hidden"; } }, 505);
					me._gyro_on.style.opacity=0;
				}
			}
		}
		me._gyro_on.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._gyro_on.style[domTransition]='none';
			} else {
				me._gyro_on.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gyro_on.style.opacity='0';
			me._gyro_on.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._gyro_off.style[domTransition]='none';
			} else {
				me._gyro_off.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gyro_off.style.opacity='1';
			me._gyro_off.style.visibility=me._gyro_off.ggVisible?'inherit':'hidden';
			me.__360image_gyro.ggTimeout=Number("4") * 1000.0;
			me.__360image_gyro.ggTimestamp=skin.ggCurrentTime;
			me.__360image_timer.ggTimeout=Number("0.4") * 1000.0;
			me.__360image_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._gyro_on.onmouseover=function (e) {
			me._gyro_on__img.style.visibility='hidden';
			me._gyro_on__imgo.style.visibility='inherit';
		}
		me._gyro_on.onmouseout=function (e) {
			me._gyro_on__img.style.visibility='inherit';
			me._gyro_on__imgo.style.visibility='hidden';
		}
		me._gyro_on.ggUpdatePosition=function (useTransition) {
		}
		me._gyro.appendChild(me._gyro_on);
		el=me._gyro_off=document.createElement('div');
		els=me._gyro_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjAvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzJweCIgeT0iMHB4IiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9Hcm'+
			'FwaHMvMS4wLyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzQ2OS4yNSAtMjYwNiAzMiAzMiIgdmVyc2lvbj0iMS4wIiBoZWlnaHQ9IjMycHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczppPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iIHg9IjBweCIgdmlld0JveD0iLTM0NjkuMjUgLTI2MDYgMzIgMzIiIHhtbG5zOng9Imh0dHA6Ly9ucy5hZG9iZS5jb20vRXh0ZW5zaWJp'+
			'bGl0eS8xLjAvIj4KIDxnIGlkPSJMYXllcl8xIj4KICA8Zz4KICAgPGcgb3BhY2l0eT0iMC40Ij4KICAgIDxwYXRoIGQ9Ik0tMzQ1NC42MDYtMjU5MC4yODNjMC4xNywwLjQ5OCwwLjYzNiwwLjgxLDEuMTM0LDAuODEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4xMjgsMCwwLjI2LTAuMDIxLDAuMzg5LTAuMDY1YzAuNjI2LTAuMjE1LDAuOTU5LTAuODk2LDAuNzQ1LTEuNTIybC0yLjA2NC02LjAyM2MtMC4yMTQtMC42MjYtMC44OTQtMC45NTgtMS41MjItMC43NDUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjI2LDAuMjE1LTAuOTU5LDAuODk2LTAuNzQ1LDEuNTIxTC'+
			'0zNDU0LjYwNi0yNTkwLjI4M3oiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHBhdGggZD0iTS0zNDUzLjI1LTI2MDIuNDk5Yy02Ljg5MiwwLTEyLjUsNS42MDctMTIuNSwxMi40OTkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCw2Ljg5Myw1LjYwNywxMi41LDEyLjUsMTIuNXMxMi41LTUuNjA3LDEyLjUtMTIuNUMtMzQ0MC43NS0yNTk2Ljg5Mi0zNDQ2LjM1Ny0yNjAyLjQ5OS0zNDUzLjI1LTI2MDIuNDk5eiBNLTM0NTMuMjUtMjU4MC4xMzEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtj'+
			'LTUuNDQyLDAtOS44Ny00LjQyNy05Ljg3LTkuODY5czQuNDI4LTkuODY5LDkuODctOS44NjlzOS44Nyw0LjQyOCw5Ljg3LDkuODY5Uy0zNDQ3LjgwNy0yNTgwLjEzMS0zNDUzLjI1LTI1ODAuMTMxeiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICA8cGF0aCBkPSJNLTM0NDguNzQ5LTI1ODUuNDYxbC0xLjg3OS0wLjk0MWwwLjk0MS0xLjg3OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjIyOS0wLjQ2LDAuMDQzLTEuMDE5LTAuNDE1LTEuMjQ5Yy0wLjQ1OS0wLjIyOS0xLjAyLTAuMDQzLTEuMjQ5LD'+
			'AuNDE2bC0wLjk0LDEuODc3bC0xLjg3OC0wLjk0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjQ2LTAuMjI5LTEuMDE5LTAuMDQ0LTEuMjUsMC40MTZjLTAuMjI5LDAuNDYtMC4wNDIsMS4wMiwwLjQxNiwxLjI0OWwxLjg3OCwwLjk0bC0wLjk0MSwxLjg3OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4yMjksMC40NTgtMC4wNDMsMS4wMTgsMC40MTUsMS4yNDhjMC4yMywwLjExNSwwLjQ4NiwwLjEyNSwwLjcxMSwwLjA1YzAuMjI1LTAuMDc1LDAuNDI0LTAuMjM2LDAuNTM5LTAuNDY1bDAuOTQtMS44NzgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtsMS44Nzgs'+
			'MC45NDFjMC4yMjksMC4xMTYsMC40ODMsMC4xMjYsMC43MDgsMC4wNTFjMC4yMjYtMC4wNzUsMC40MjUtMC4yMzcsMC41NC0wLjQ2NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzQ0OC4xMDQtMjU4NC42NzItMzQ0OC4yOS0yNTg1LjIzMi0zNDQ4Ljc0OS0yNTg1LjQ2MXoiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHBhdGggZD0iTS0zNDU1LjMzMi0yNTg1Ljg1NmMtMC4yOTYtMC4xNDgtMC41MjYtMC4zNzYtMC42ODQtMC42NDImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTEuNj'+
			'QxLTAuMDY5LTIuODY2LTAuNjI2LTMuMTUzLTEuNDY5Yy0wLjIyMi0wLjY0NywwLjA5LTEuNTE4LDAuODU0LTIuMzg4YzAuNTc3LTAuNjU4LDEuMzc1LTEuMjY4LDIuMy0xLjc3M2wtMC43ODQtMi4yOTEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTEuMzI1LDAuNjY5LTIuNDcyLDEuNTE4LTMuMzE4LDIuNDgyYy0xLjM2NiwxLjU1Ny0xLjgzNSwzLjI0Mi0xLjMyLDQuNzQ2YzAuNjY1LDEuOTQyLDIuODIsMy4xMDIsNS43NjIsMy4xMDImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4zMzEsMCwwLjY2OC0wLjAxNiwxLjAwOS0wLjA0NmwwLjU1Ny0xLjEwOUwtMzQ1NS4zMzIt'+
			'MjU4NS44NTZ6IiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzFBMTcxQiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDxwYXRoIGQ9Ik0tMzQ0NS4wNTgtMjU5Mi44MDJjLTAuNjY2LTEuOTQzLTIuODItMy4xMDMtNS43NjItMy4xMDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNzUxLDAtMS41MzQsMC4wODYtMi4zMjIsMC4yMzlsMC43ODYsMi4yOTFjMC41MjQtMC4wODUsMS4wNDItMC4xMzQsMS41MzctMC4xMzRjMS44MTUsMCwzLjE4NywwLjU4MywzLjQ5NSwxLjQ4NCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjIyMiwwLjY0Ni0wLj'+
			'A5LDEuNTE2LTAuODU0LDIuMzg2Yy0wLjIwNiwwLjIzNS0wLjQ0NCwwLjQ2Mi0wLjcwMiwwLjY4MmMwLjA1NCwwLjMzMiwwLjAxMiwwLjY4My0wLjE1LDEuMDA1bC0wLjYxMiwxLjIyMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2wxLjA1NywwLjUyOWMwLjg1OC0wLjU0NiwxLjYwOC0xLjE3NCwyLjIwOC0xLjg1N0MtMzQ0NS4wMTItMjU4OS42MTQtMzQ0NC41NDMtMjU5MS4yOTktMzQ0NS4wNTgtMjU5Mi44MDJ6IiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzFBMTcxQiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGQ9'+
			'Ik0tMzQ1NC42MDYtMjU5MC4yODNjMC4xNywwLjQ5OCwwLjYzNiwwLjgxLDEuMTM0LDAuODEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4xMjgsMCwwLjI2LTAuMDIxLDAuMzg5LTAuMDY1YzAuNjI2LTAuMjE1LDAuOTU5LTAuODk2LDAuNzQ1LTEuNTIybC0yLjA2NC02LjAyM2MtMC4yMTQtMC42MjYtMC44OTQtMC45NTgtMS41MjItMC43NDUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjI2LDAuMjE1LTAuOTU5LDAuODk2LTAuNzQ1LDEuNTIxTC0zNDU0LjYwNi0yNTkwLjI4M3oiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIi'+
			'BzdHJva2Utd2lkdGg9IjAuMiIvPgogICAgPHBhdGggZD0iTS0zNDUzLjI1LTI2MDIuNDk5Yy02Ljg5MiwwLTEyLjUsNS42MDctMTIuNSwxMi40OTkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCw2Ljg5Myw1LjYwNywxMi41LDEyLjUsMTIuNXMxMi41LTUuNjA3LDEyLjUtMTIuNUMtMzQ0MC43NS0yNTk2Ljg5Mi0zNDQ2LjM1Ny0yNjAyLjQ5OS0zNDUzLjI1LTI2MDIuNDk5eiBNLTM0NTMuMjUtMjU4MC4xMzEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTUuNDQyLDAtOS44Ny00LjQyNy05Ljg3LTkuODY5czQuNDI4LTkuODY5LDkuODctOS44NjlzOS44Nyw0LjQyOCw5Ljg3'+
			'LDkuODY5Uy0zNDQ3LjgwNy0yNTgwLjEzMS0zNDUzLjI1LTI1ODAuMTMxeiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiAgICA8cGF0aCBkPSJNLTM0NDguNzQ5LTI1ODUuNDYxbC0xLjg3OS0wLjk0MWwwLjk0MS0xLjg3OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjIyOS0wLjQ2LDAuMDQzLTEuMDE5LTAuNDE1LTEuMjQ5Yy0wLjQ1OS0wLjIyOS0xLjAyLTAuMDQzLTEuMjQ5LDAuNDE2bC0wLjk0LDEuODc3bC0xLjg3OC0wLjk0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjQ2LTAuMj'+
			'I5LTEuMDE5LTAuMDQ0LTEuMjUsMC40MTZjLTAuMjI5LDAuNDYtMC4wNDIsMS4wMiwwLjQxNiwxLjI0OWwxLjg3OCwwLjk0bC0wLjk0MSwxLjg3OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4yMjksMC40NTgtMC4wNDMsMS4wMTgsMC40MTUsMS4yNDhjMC4yMywwLjExNSwwLjQ4NiwwLjEyNSwwLjcxMSwwLjA1YzAuMjI1LTAuMDc1LDAuNDI0LTAuMjM2LDAuNTM5LTAuNDY1bDAuOTQtMS44NzgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtsMS44NzgsMC45NDFjMC4yMjksMC4xMTYsMC40ODMsMC4xMjYsMC43MDgsMC4wNTFjMC4yMjYtMC4wNzUsMC40MjUtMC4yMzcsMC41'+
			'NC0wLjQ2NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzQ0OC4xMDQtMjU4NC42NzItMzQ0OC4yOS0yNTg1LjIzMi0zNDQ4Ljc0OS0yNTg1LjQ2MXoiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIvPgogICAgPHBhdGggZD0iTS0zNDU1LjMzMi0yNTg1Ljg1NmMtMC4yOTYtMC4xNDgtMC41MjYtMC4zNzYtMC42ODQtMC42NDImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTEuNjQxLTAuMDY5LTIuODY2LTAuNjI2LTMuMTUzLTEuNDY5Yy0wLjIyMi0wLjY0NywwLjA5LTEuNTE4LDAuODU0LTIuMzg4Yz'+
			'AuNTc3LTAuNjU4LDEuMzc1LTEuMjY4LDIuMy0xLjc3M2wtMC43ODQtMi4yOTEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTEuMzI1LDAuNjY5LTIuNDcyLDEuNTE4LTMuMzE4LDIuNDgyYy0xLjM2NiwxLjU1Ny0xLjgzNSwzLjI0Mi0xLjMyLDQuNzQ2YzAuNjY1LDEuOTQyLDIuODIsMy4xMDIsNS43NjIsMy4xMDImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4zMzEsMCwwLjY2OC0wLjAxNiwxLjAwOS0wLjA0NmwwLjU1Ny0xLjEwOUwtMzQ1NS4zMzItMjU4NS44NTZ6IiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdp'+
			'ZHRoPSIwLjIiLz4KICAgIDxwYXRoIGQ9Ik0tMzQ0NS4wNTgtMjU5Mi44MDJjLTAuNjY2LTEuOTQzLTIuODItMy4xMDMtNS43NjItMy4xMDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNzUxLDAtMS41MzQsMC4wODYtMi4zMjIsMC4yMzlsMC43ODYsMi4yOTFjMC41MjQtMC4wODUsMS4wNDItMC4xMzQsMS41MzctMC4xMzRjMS44MTUsMCwzLjE4NywwLjU4MywzLjQ5NSwxLjQ4NCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjIyMiwwLjY0Ni0wLjA5LDEuNTE2LTAuODU0LDIuMzg2Yy0wLjIwNiwwLjIzNS0wLjQ0NCwwLjQ2Mi0wLjcwMiwwLjY4MmMwLjA1NCwwLjMzMi'+
			'wwLjAxMiwwLjY4My0wLjE1LDEuMDA1bC0wLjYxMiwxLjIyMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2wxLjA1NywwLjUyOWMwLjg1OC0wLjU0NiwxLjYwOC0xLjE3NCwyLjIwOC0xLjg1N0MtMzQ0NS4wMTItMjU4OS42MTQtMzQ0NC41NDMtMjU5MS4yOTktMzQ0NS4wNTgtMjU5Mi44MDJ6IiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJFYmVuZV8xIi8+CiA8ZyBpZD0iTGF5ZXJfMiIvPgo8L3N2Zz4K';
		me._gyro_off__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gyro_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjAvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzJweCIgeT0iMHB4IiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9Hcm'+
			'FwaHMvMS4wLyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzQ2OS4yNSAtMjU3MS4zMzMgMzIgMzIiIHZlcnNpb249IjEuMCIgaGVpZ2h0PSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4PSIwcHgiIHZpZXdCb3g9Ii0zNDY5LjI1IC0yNTcxLjMzMyAzMiAzMiIgeG1sbnM6eD0iaHR0cDovL25zLmFkb2JlLmNvbS9F'+
			'eHRlbnNpYmlsaXR5LzEuMC8iPgogPGcgaWQ9IkxheWVyXzEiPgogIDxnPgogICA8ZyBvcGFjaXR5PSIwLjQiPgogICAgPHBhdGggZD0iTS0zNDU0Ljc0Mi0yNTU1LjY0NWMwLjE4OCwwLjU0NywwLjcsMC44OTEsMS4yNDgsMC44OTEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4xNDEsMCwwLjI4Ni0wLjAyMiwwLjQyNy0wLjA3MWMwLjY4OC0wLjIzNiwxLjA1NS0wLjk4NiwwLjgxOS0xLjY3NGwtMi4yNzEtNi42MjVjLTAuMjM1LTAuNjg5LTAuOTgzLTEuMDU0LTEuNjc1LTAuODImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjg4LDAuMjM2LTEuMDU1LDAuOTg2LTAuOD'+
			'E5LDEuNjc0TC0zNDU0Ljc0Mi0yNTU1LjY0NXoiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHBhdGggZD0iTS0zNDUzLjI1LTI1NjkuMDgzYy03LjU4MSwwLTEzLjc1LDYuMTY4LTEzLjc1LDEzLjc0OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDcuNTgyLDYuMTY4LDEzLjc1LDEzLjc1LDEzLjc1YzcuNTgyLDAsMTMuNzUtNi4xNjcsMTMuNzUtMTMuNzVDLTM0MzkuNS0yNTYyLjkxNS0zNDQ1LjY2OC0yNTY5LjA4My0zNDUzLjI1LTI1NjkuMDgzeiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsm'+
			'I3g5OyBNLTM0NTMuMjUtMjU0NC40NzljLTUuOTg2LDAtMTAuODU3LTQuODctMTAuODU3LTEwLjg1NWMwLTUuOTg1LDQuODcxLTEwLjg1NiwxMC44NTctMTAuODU2YzUuOTg3LDAsMTAuODU2LDQuODcxLDEwLjg1NiwxMC44NTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDLTM0NDIuMzkzLTI1NDkuMzQ4LTM0NDcuMjYzLTI1NDQuNDc5LTM0NTMuMjUtMjU0NC40Nzl6IiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzFBMTcxQiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDxwYXRoIGQ9Ik0tMzQ0OC4yOTgtMjU1MC4zNDFsLTIuMDY3LTEuMDM1bDEuMDM2LT'+
			'IuMDY2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMjUyLTAuNTA2LDAuMDQ4LTEuMTItMC40NTctMS4zNzRjLTAuNTA1LTAuMjUyLTEuMTIyLTAuMDQ4LTEuMzc0LDAuNDU3bC0xLjAzNCwyLjA2NWwtMi4wNjYtMS4wMzQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNTA2LTAuMjUyLTEuMTIxLTAuMDQ4LTEuMzc1LDAuNDU3Yy0wLjI1MiwwLjUwNi0wLjA0NywxLjEyMiwwLjQ1NywxLjM3NGwyLjA2NiwxLjAzNGwtMS4wMzYsMi4wNjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuMjUyLDAuNTA0LTAuMDQ3LDEuMTE5LDAuNDU3LDEuMzczYzAuMjUzLDAu'+
			'MTI2LDAuNTM0LDAuMTM4LDAuNzgzLDAuMDU1YzAuMjQ4LTAuMDgzLDAuNDY3LTAuMjYsMC41OTItMC41MTJsMS4wMzUtMi4wNjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtsMi4wNjYsMS4wMzVjMC4yNTIsMC4xMjcsMC41MzEsMC4xMzksMC43NzksMC4wNTZjMC4yNDktMC4wODMsMC40NjgtMC4yNjEsMC41OTQtMC41MTMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDLTM0NDcuNTktMjU0OS40NzQtMzQ0Ny43OTQtMjU1MC4wODktMzQ0OC4yOTgtMjU1MC4zNDF6IiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzFBMTcxQiIgc3Ryb2tlLXdpZHRoPS'+
			'IxLjUiLz4KICAgIDxwYXRoIGQ9Ik0tMzQ1NS41NC0yNTUwLjc3NmMtMC4zMjYtMC4xNjQtMC41NzktMC40MTQtMC43NTItMC43MDcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTEuODA1LTAuMDc2LTMuMTUyLTAuNjg5LTMuNDY5LTEuNjE1Yy0wLjI0NS0wLjcxMiwwLjA5OS0xLjY2OSwwLjkzOS0yLjYyNmMwLjYzNS0wLjcyNCwxLjUxMi0xLjM5NSwyLjUzLTEuOTUxbC0wLjg2Mi0yLjUyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0xLjQ1NywwLjczNi0yLjcxOSwxLjY3LTMuNjQ5LDIuNzMxYy0xLjUwMywxLjcxMi0yLjAxOSwzLjU2Ni0xLjQ1Miw1LjIyYzAuNzMxLDIu'+
			'MTM2LDMuMTAyLDMuNDEyLDYuMzM4LDMuNDEyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMzYzLDAsMC43MzQtMC4wMTgsMS4xMDktMC4wNTFsMC42MTItMS4yMkwtMzQ1NS41NC0yNTUwLjc3NnoiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHBhdGggZD0iTS0zNDQ0LjIzOC0yNTU4LjQxNmMtMC43MzMtMi4xMzgtMy4xMDItMy40MTMtNi4zMzgtMy40MTMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuODI2LDAtMS42ODcsMC4wOTUtMi41NTUsMC4yNjNsMC44NjQsMi41MmMwLj'+
			'U3Ni0wLjA5MywxLjE0Ni0wLjE0NywxLjY5LTAuMTQ3YzEuOTk2LDAsMy41MDUsMC42NDEsMy44NDQsMS42MzImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4yNDUsMC43MS0wLjA5OSwxLjY2Ny0wLjkzOSwyLjYyNGMtMC4yMjcsMC4yNTgtMC40ODgsMC41MDgtMC43NzIsMC43NWMwLjA1OSwwLjM2NSwwLjAxMywwLjc1MS0wLjE2NSwxLjEwNmwtMC42NzMsMS4zNDUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtsMS4xNjMsMC41ODJjMC45NDQtMC42MDEsMS43NjktMS4yOTEsMi40MjktMi4wNDNDLTM0NDQuMTg4LTI1NTQuOTA5LTM0NDMuNjcyLTI1NTYuNzYzLTM0NDQuMjM4'+
			'LTI1NTguNDE2eiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgIDwvZz4KICAgPGc+CiAgICA8cGF0aCBkPSJNLTM0NTQuNzQyLTI1NTUuNjQ1YzAuMTg4LDAuNTQ3LDAuNywwLjg5MSwxLjI0OCwwLjg5MSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjE0MSwwLDAuMjg2LTAuMDIyLDAuNDI3LTAuMDcxYzAuNjg4LTAuMjM2LDEuMDU1LTAuOTg2LDAuODE5LTEuNjc0bC0yLjI3MS02LjYyNWMtMC4yMzUtMC42ODktMC45ODMtMS4wNTQtMS42NzUtMC44MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3'+
			'g5O2MtMC42ODgsMC4yMzYtMS4wNTUsMC45ODYtMC44MTksMS42NzRMLTM0NTQuNzQyLTI1NTUuNjQ1eiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiAgICA8cGF0aCBkPSJNLTM0NTMuMjUtMjU2OS4wODNjLTcuNTgxLDAtMTMuNzUsNi4xNjgtMTMuNzUsMTMuNzQ5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsNy41ODIsNi4xNjgsMTMuNzUsMTMuNzUsMTMuNzVjNy41ODIsMCwxMy43NS02LjE2NywxMy43NS0xMy43NUMtMzQzOS41LTI1NjIuOTE1LTM0NDUuNjY4LTI1NjkuMDgzLTM0NTMuMjUtMjU2'+
			'OS4wODN6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7IE0tMzQ1My4yNS0yNTQ0LjQ3OWMtNS45ODYsMC0xMC44NTctNC44Ny0xMC44NTctMTAuODU1YzAtNS45ODUsNC44NzEtMTAuODU2LDEwLjg1Ny0xMC44NTZjNS45ODcsMCwxMC44NTYsNC44NzEsMTAuODU2LDEwLjg1NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzQ0Mi4zOTMtMjU0OS4zNDgtMzQ0Ny4yNjMtMjU0NC40NzktMzQ1My4yNS0yNTQ0LjQ3OXoiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIvPgogICAgPHBhdGggZD0iTS0zNDQ4Lj'+
			'I5OC0yNTUwLjM0MWwtMi4wNjctMS4wMzVsMS4wMzYtMi4wNjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4yNTItMC41MDYsMC4wNDgtMS4xMi0wLjQ1Ny0xLjM3NGMtMC41MDUtMC4yNTItMS4xMjItMC4wNDgtMS4zNzQsMC40NTdsLTEuMDM0LDIuMDY1bC0yLjA2Ni0xLjAzNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC41MDYtMC4yNTItMS4xMjEtMC4wNDgtMS4zNzUsMC40NTdjLTAuMjUyLDAuNTA2LTAuMDQ3LDEuMTIyLDAuNDU3LDEuMzc0bDIuMDY2LDEuMDM0bC0xLjAzNiwyLjA2NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4yNTIsMC41MDQt'+
			'MC4wNDcsMS4xMTksMC40NTcsMS4zNzNjMC4yNTMsMC4xMjYsMC41MzQsMC4xMzgsMC43ODMsMC4wNTVjMC4yNDgtMC4wODMsMC40NjctMC4yNiwwLjU5Mi0wLjUxMmwxLjAzNS0yLjA2NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2wyLjA2NiwxLjAzNWMwLjI1MiwwLjEyNywwLjUzMSwwLjEzOSwwLjc3OSwwLjA1NmMwLjI0OS0wLjA4MywwLjQ2OC0wLjI2MSwwLjU5NC0wLjUxMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzQ0Ny41OS0yNTQ5LjQ3NC0zNDQ3Ljc5NC0yNTUwLjA4OS0zNDQ4LjI5OC0yNTUwLjM0MXoiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZi'+
			'Igc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIvPgogICAgPHBhdGggZD0iTS0zNDU1LjU0LTI1NTAuNzc2Yy0wLjMyNi0wLjE2NC0wLjU3OS0wLjQxNC0wLjc1Mi0wLjcwNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMS44MDUtMC4wNzYtMy4xNTItMC42ODktMy40NjktMS42MTVjLTAuMjQ1LTAuNzEyLDAuMDk5LTEuNjY5LDAuOTM5LTIuNjI2YzAuNjM1LTAuNzI0LDEuNTEyLTEuMzk1LDIuNTMtMS45NTFsLTAuODYyLTIuNTImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTEuNDU3LDAuNzM2LTIuNzE5LDEuNjctMy42NDksMi43MzFjLTEuNTAzLDEuNzEy'+
			'LTIuMDE5LDMuNTY2LTEuNDUyLDUuMjJjMC43MzEsMi4xMzYsMy4xMDIsMy40MTIsNi4zMzgsMy40MTImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4zNjMsMCwwLjczNC0wLjAxOCwxLjEwOS0wLjA1MWwwLjYxMi0xLjIyTC0zNDU1LjU0LTI1NTAuNzc2eiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiAgICA8cGF0aCBkPSJNLTM0NDQuMjM4LTI1NTguNDE2Yy0wLjczMy0yLjEzOC0zLjEwMi0zLjQxMy02LjMzOC0zLjQxMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC44MjYsMC0xLjY4Ny'+
			'wwLjA5NS0yLjU1NSwwLjI2M2wwLjg2NCwyLjUyYzAuNTc2LTAuMDkzLDEuMTQ2LTAuMTQ3LDEuNjktMC4xNDdjMS45OTYsMCwzLjUwNSwwLjY0MSwzLjg0NCwxLjYzMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjI0NSwwLjcxLTAuMDk5LDEuNjY3LTAuOTM5LDIuNjI0Yy0wLjIyNywwLjI1OC0wLjQ4OCwwLjUwOC0wLjc3MiwwLjc1YzAuMDU5LDAuMzY1LDAuMDEzLDAuNzUxLTAuMTY1LDEuMTA2bC0wLjY3MywxLjM0NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2wxLjE2MywwLjU4MmMwLjk0NC0wLjYwMSwxLjc2OS0xLjI5MSwyLjQyOS0yLjA0M0MtMzQ0NC4xODgtMjU1'+
			'NC45MDktMzQ0My42NzItMjU1Ni43NjMtMzQ0NC4yMzgtMjU1OC40MTZ6IiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJFYmVuZV8xIi8+CiA8ZyBpZD0iTGF5ZXJfMiIvPgo8L3N2Zz4K';
		me._gyro_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="gyro_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gyro_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro_off.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getUseGyro() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._gyro_off.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._gyro_off.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._gyro_off.style[domTransition]='opacity 500ms ease 0ms';
				if (me._gyro_off.ggCurrentLogicStateAlpha == 0) {
					me._gyro_off.style.visibility=me._gyro_off.ggVisible?'inherit':'hidden';
					me._gyro_off.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._gyro_off.style.opacity == 0.0) { me._gyro_off.style.visibility="hidden"; } }, 505);
					me._gyro_off.style.opacity=0;
				}
			}
		}
		me._gyro_off.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._gyro_off.style[domTransition]='none';
			} else {
				me._gyro_off.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gyro_off.style.opacity='0';
			me._gyro_off.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._gyro_on.style[domTransition]='none';
			} else {
				me._gyro_on.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gyro_on.style.opacity='1';
			me._gyro_on.style.visibility=me._gyro_on.ggVisible?'inherit':'hidden';
		}
		me._gyro_off.onmouseover=function (e) {
			me._gyro_off__img.style.visibility='hidden';
			me._gyro_off__imgo.style.visibility='inherit';
		}
		me._gyro_off.onmouseout=function (e) {
			me._gyro_off__img.style.visibility='inherit';
			me._gyro_off__imgo.style.visibility='hidden';
		}
		me._gyro_off.ggUpdatePosition=function (useTransition) {
		}
		me._gyro.appendChild(me._gyro_off);
		el=me._tt_gyro=document.createElement('div');
		els=me._tt_gyro__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_gyro";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_gyro.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_gyro.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_gyro.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_gyro.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_gyro.style[domTransition]='left 0s, top 0s';
				if (me._tt_gyro.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_gyro.style.top='-25px';
					me._tt_gyro.ggUpdatePosition(true);
				}
				else {
					me._tt_gyro.ggDx=0;
					me._tt_gyro.style.top='32px';
					me._tt_gyro.ggUpdatePosition(true);
				}
			}
		}
		me._tt_gyro.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['gyro'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_gyro.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_gyro.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_gyro.style[domTransition]='left 0s, top 0s';
				if (me._tt_gyro.ggCurrentLogicStateVisible == 0) {
					me._tt_gyro.style.visibility=(Number(me._tt_gyro.style.opacity)>0||!me._tt_gyro.style.opacity)?'inherit':'hidden';
					me._tt_gyro.ggVisible=true;
				}
				else {
					me._tt_gyro.style.visibility="hidden";
					me._tt_gyro.ggVisible=false;
				}
			}
		}
		me._tt_gyro.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getUseGyro() == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getUseGyro() == false))
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_gyro.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_gyro.ggCurrentLogicStateText = newLogicStateText;
				me._tt_gyro.style[domTransition]='left 0s, top 0s';
				if (me._tt_gyro.ggCurrentLogicStateText == 0) {
					me._tt_gyro.ggText="Gyroscope Off";
					me._tt_gyro__text.innerHTML=me._tt_gyro.ggText;
					if (me._tt_gyro.ggUpdateText) {
					me._tt_gyro.ggUpdateText=function() {
						var hs="Gyroscope Off";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_gyro.ggUpdatePosition) me._tt_gyro.ggUpdatePosition();
					}
				}
				else if (me._tt_gyro.ggCurrentLogicStateText == 1) {
					me._tt_gyro.ggText="Gyroscope On";
					me._tt_gyro__text.innerHTML=me._tt_gyro.ggText;
					if (me._tt_gyro.ggUpdateText) {
					me._tt_gyro.ggUpdateText=function() {
						var hs="Gyroscope On";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_gyro.ggUpdatePosition) me._tt_gyro.ggUpdatePosition();
					}
				}
				else {
					me._tt_gyro.ggText="";
					me._tt_gyro__text.innerHTML=me._tt_gyro.ggText;
					if (me._tt_gyro.ggUpdateText) {
					me._tt_gyro.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_gyro.ggUpdatePosition) me._tt_gyro.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_gyro.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._gyro.appendChild(me._tt_gyro);
		me._controller_slider.appendChild(me._gyro);
		el=me._fullscreen_buttons=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="fullscreen_buttons";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 224px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen_buttons.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_buttons.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('pos_fullscreen') == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('pos_fullscreen') == 1))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('pos_fullscreen') == 2))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('pos_fullscreen') == 3))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('pos_fullscreen') == 4))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('pos_fullscreen') == 5))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getVariableValue('pos_fullscreen') == 6))
			)
			{
				newLogicStatePosition = 6;
			}
			else if (
				((player.getVariableValue('pos_fullscreen') == 7))
			)
			{
				newLogicStatePosition = 7;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._fullscreen_buttons.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._fullscreen_buttons.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._fullscreen_buttons.style[domTransition]='left 0s, top 0s';
				if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 0) {
					me._fullscreen_buttons.style.left='0px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 1) {
					me._fullscreen_buttons.style.left='32px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 2) {
					me._fullscreen_buttons.style.left='64px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 3) {
					me._fullscreen_buttons.style.left='96px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 4) {
					me._fullscreen_buttons.style.left='128px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 5) {
					me._fullscreen_buttons.style.left='160px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 6) {
					me._fullscreen_buttons.style.left='192px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 7) {
					me._fullscreen_buttons.style.left='224px';
					me._fullscreen_buttons.style.top='0px';
				}
				else {
					me._fullscreen_buttons.style.left='224px';
					me._fullscreen_buttons.style.top='0px';
				}
			}
		}
		me._fullscreen_buttons.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getOS() != 4))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen_buttons.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen_buttons.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen_buttons.style[domTransition]='left 0s, top 0s';
				if (me._fullscreen_buttons.ggCurrentLogicStateVisible == 0) {
					me._fullscreen_buttons.style.visibility=(Number(me._fullscreen_buttons.style.opacity)>0||!me._fullscreen_buttons.style.opacity)?'inherit':'hidden';
					me._fullscreen_buttons.ggVisible=true;
				}
				else {
					me._fullscreen_buttons.style.visibility="hidden";
					me._fullscreen_buttons.ggVisible=false;
				}
			}
		}
		me._fullscreen_buttons.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._fullscreen_buttons.onmouseover=function (e) {
			me.elementMouseOver['fullscreen_buttons']=true;
			me._fullscreen.logicBlock_size();
			me._fullscreen_off.logicBlock_size();
			me._tt_fullscreen.logicBlock_visible();
		}
		me._fullscreen_buttons.onmouseout=function (e) {
			me.elementMouseOver['fullscreen_buttons']=false;
			me._fullscreen.logicBlock_size();
			me._fullscreen_off.logicBlock_size();
			me._tt_fullscreen.logicBlock_visible();
		}
		me._fullscreen_buttons.ontouchend=function (e) {
			me.elementMouseOver['fullscreen_buttons']=false;
			me._fullscreen.logicBlock_size();
			me._fullscreen_off.logicBlock_size();
			me._tt_fullscreen.logicBlock_visible();
		}
		me._fullscreen_buttons.ggUpdatePosition=function (useTransition) {
		}
		el=me._fullscreen=document.createElement('div');
		els=me._fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MS4yMiA0Mi44MyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6Mi41cHg7fS5jbHMtMntmaWxsOiNmZmY7fTwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBpZD0iTGF5ZXJfMyIgZGF0YS1uYW1lPSJMYXllciAzIj4KICA8Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3k9IjIxLjU5IiBjeD0iMjAuNjciIHI9IjE4LjI3Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIj4KICA8cGF0aC'+
			'BjbGFzcz0iY2xzLTIiIGQ9Ik0zMS4wNywxOS44NmExLjIzLDEuMjMsMCwwLDAtMS4yNC0xLjI0SDI4LjA4YTEuMjQsMS4yNCwwLDAsMC0xLjI0LDEuMjR2Ny4yMWEuNDcuNDcsMCwwLDEtLjQ3LjQ3SDE4Ljc0YTEuMTYsMS4xNiwwLDAsMC0xLjE2LDEuMTd2MS45YTEuMTYsMS4xNiwwLDAsMCwxLjE2LDEuMTZIMjkuNDNhMS42MywxLjYzLDAsMCwwLDEuNjQtMS42NFoiLz4KICA8cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xMC40NCwyNC4yNGExLjIzLDEuMjMsMCwwLDAsMS4yNCwxLjI0aDEuNzVhMS4yNCwxLjI0LDAsMCwwLDEuMjQtMS4yNFYxN2EuNDcuNDcsMCwwLDEsLjQ3LS40N2g3LjYzYTEu'+
			'MTYsMS4xNiwwLDAsMCwxLjE2LTEuMTZWMTMuNDlhMS4xNiwxLjE2LDAsMCwwLTEuMTYtMS4xNkgxMi4wOEExLjY0LDEuNjQsMCwwLDAsMTAuNDQsMTRaIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._fullscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="fullscreen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['fullscreen_buttons'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._fullscreen.ggCurrentLogicStateSize != newLogicStateSize) {
				me._fullscreen.ggCurrentLogicStateSize = newLogicStateSize;
				me._fullscreen.style[domTransition]='width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._fullscreen.ggCurrentLogicStateSize == 0) {
					me._fullscreen.style.width='30px';
					me._fullscreen.style.height='30px';
					skin.updateSize(me._fullscreen);
				}
				else {
					me._fullscreen.style.width='28px';
					me._fullscreen.style.height='28px';
					skin.updateSize(me._fullscreen);
				}
			}
		}
		me._fullscreen.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._fullscreen.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._fullscreen.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._fullscreen.style[domTransition]='width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._fullscreen.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._fullscreen.style.opacity == 0.0) { me._fullscreen.style.visibility="hidden"; } }, 505);
					me._fullscreen.style.opacity=0;
				}
				else {
					me._fullscreen.style.visibility=me._fullscreen.ggVisible?'inherit':'hidden';
					me._fullscreen.style.opacity=1;
				}
			}
		}
		me._fullscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._fullscreen_buttons.appendChild(me._fullscreen);
		el=me._fullscreen_off=document.createElement('div');
		els=me._fullscreen_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MS4yMiA0Mi44MyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6Mi41cHg7fS5jbHMtMntmaWxsOiNmZmY7fTwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBpZD0iTGF5ZXJfMyIgZGF0YS1uYW1lPSJMYXllciAzIj4KICA8Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3k9IjIxLjU5IiBjeD0iMjAuNjciIHI9IjE4LjI3Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIj4KICA8cGF0aC'+
			'BjbGFzcz0iY2xzLTIiIGQ9Ik0yMS4xMSwzMy41NGExLjE4LDEuMTgsMCwwLDAsMS4xOCwxLjE4SDI0YTEuMTgsMS4xOCwwLDAsMCwxLjE4LTEuMThWMjYuNjdhLjQ1LjQ1LDAsMCwxLC40NS0uNDVoNy4yN0ExLjExLDEuMTEsMCwwLDAsMzQsMjUuMTFWMjMuM2ExLjExLDEuMTEsMCwwLDAtMS4xMS0xLjExSDIyLjY4YTEuNTcsMS41NywwLDAsMC0xLjU3LDEuNTdaIi8+CiAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMjEuMTEsMTEuMzJhMS4xOCwxLjE4LDAsMCwwLTEuMTgtMS4xOEgxOC4yNmExLjE4LDEuMTgsMCwwLDAtMS4xOCwxLjE4VjE4LjJhLjQ1LjQ1LDAsMCwxLS40NS40NUg5LjM2YTEu'+
			'MTEsMS4xMSwwLDAsMC0xLjExLDEuMXYxLjgyYTEuMTEsMS4xMSwwLDAsMCwxLjExLDEuMTFIMTkuNTRhMS41NywxLjU3LDAsMCwwLDEuNTctMS41N1oiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._fullscreen_off__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="fullscreen_off";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_off.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['fullscreen_buttons'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._fullscreen_off.ggCurrentLogicStateSize != newLogicStateSize) {
				me._fullscreen_off.ggCurrentLogicStateSize = newLogicStateSize;
				me._fullscreen_off.style[domTransition]='width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._fullscreen_off.ggCurrentLogicStateSize == 0) {
					me._fullscreen_off.style.width='30px';
					me._fullscreen_off.style.height='30px';
					skin.updateSize(me._fullscreen_off);
				}
				else {
					me._fullscreen_off.style.width='28px';
					me._fullscreen_off.style.height='28px';
					skin.updateSize(me._fullscreen_off);
				}
			}
		}
		me._fullscreen_off.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._fullscreen_off.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._fullscreen_off.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._fullscreen_off.style[domTransition]='width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._fullscreen_off.ggCurrentLogicStateAlpha == 0) {
					me._fullscreen_off.style.visibility=me._fullscreen_off.ggVisible?'inherit':'hidden';
					me._fullscreen_off.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._fullscreen_off.style.opacity == 0.0) { me._fullscreen_off.style.visibility="hidden"; } }, 505);
					me._fullscreen_off.style.opacity=0;
				}
			}
		}
		me._fullscreen_off.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._fullscreen_buttons.appendChild(me._fullscreen_off);
		el=me._tt_fullscreen=document.createElement('div');
		els=me._tt_fullscreen__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_fullscreen";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_fullscreen.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_fullscreen.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_fullscreen.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_fullscreen.style[domTransition]='left 0s, top 0s';
				if (me._tt_fullscreen.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_fullscreen.style.top='-25px';
					me._tt_fullscreen.ggUpdatePosition(true);
				}
				else {
					me._tt_fullscreen.ggDx=0;
					me._tt_fullscreen.style.top='32px';
					me._tt_fullscreen.ggUpdatePosition(true);
				}
			}
		}
		me._tt_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['fullscreen_buttons'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_fullscreen.style[domTransition]='left 0s, top 0s';
				if (me._tt_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._tt_fullscreen.style.visibility=(Number(me._tt_fullscreen.style.opacity)>0||!me._tt_fullscreen.style.opacity)?'inherit':'hidden';
					me._tt_fullscreen.ggVisible=true;
				}
				else {
					me._tt_fullscreen.style.visibility="hidden";
					me._tt_fullscreen.ggVisible=false;
				}
			}
		}
		me._tt_fullscreen.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getIsFullscreen() == false))
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_fullscreen.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_fullscreen.ggCurrentLogicStateText = newLogicStateText;
				me._tt_fullscreen.style[domTransition]='left 0s, top 0s';
				if (me._tt_fullscreen.ggCurrentLogicStateText == 0) {
					me._tt_fullscreen.ggText="Exit Fullscreen";
					me._tt_fullscreen__text.innerHTML=me._tt_fullscreen.ggText;
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var hs="Exit Fullscreen";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
				else if (me._tt_fullscreen.ggCurrentLogicStateText == 1) {
					me._tt_fullscreen.ggText="Enter Fullscreen";
					me._tt_fullscreen__text.innerHTML=me._tt_fullscreen.ggText;
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var hs="Enter Fullscreen";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
				else {
					me._tt_fullscreen.ggText="";
					me._tt_fullscreen__text.innerHTML=me._tt_fullscreen.ggText;
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_fullscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._fullscreen_buttons.appendChild(me._tt_fullscreen);
		me._controller_slider.appendChild(me._fullscreen_buttons);
		el=me._thumbnail=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="thumbnail";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 128px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('pos_thumbnail') == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('pos_thumbnail') == 1))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('pos_thumbnail') == 2))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('pos_thumbnail') == 3))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('pos_thumbnail') == 4))
			)
			{
				newLogicStatePosition = 4;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._thumbnail.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._thumbnail.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._thumbnail.style[domTransition]='left 0s, top 0s';
				if (me._thumbnail.ggCurrentLogicStatePosition == 0) {
					me._thumbnail.style.left='0px';
					me._thumbnail.style.top='0px';
				}
				else if (me._thumbnail.ggCurrentLogicStatePosition == 1) {
					me._thumbnail.style.left='32px';
					me._thumbnail.style.top='0px';
				}
				else if (me._thumbnail.ggCurrentLogicStatePosition == 2) {
					me._thumbnail.style.left='64px';
					me._thumbnail.style.top='0px';
				}
				else if (me._thumbnail.ggCurrentLogicStatePosition == 3) {
					me._thumbnail.style.left='96px';
					me._thumbnail.style.top='0px';
				}
				else if (me._thumbnail.ggCurrentLogicStatePosition == 4) {
					me._thumbnail.style.left='128px';
					me._thumbnail.style.top='0px';
				}
				else {
					me._thumbnail.style.left='128px';
					me._thumbnail.style.top='0px';
				}
			}
		}
		me._thumbnail.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_thumbnail') == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail.style[domTransition]='left 0s, top 0s';
				if (me._thumbnail.ggCurrentLogicStateVisible == 0) {
					me._thumbnail.style.visibility=(Number(me._thumbnail.style.opacity)>0||!me._thumbnail.style.opacity)?'inherit':'hidden';
					me._thumbnail.ggVisible=true;
				}
				else {
					me._thumbnail.style.visibility="hidden";
					me._thumbnail.ggVisible=false;
				}
			}
		}
		me._thumbnail.onmouseover=function (e) {
			me.elementMouseOver['thumbnail']=true;
			me._tt_thumbnail_open.logicBlock_visible();
			me._volume_on.logicBlock_size();
			me._volume_off.logicBlock_size();
		}
		me._thumbnail.onmouseout=function (e) {
			me.elementMouseOver['thumbnail']=false;
			me._tt_thumbnail_open.logicBlock_visible();
			me._volume_on.logicBlock_size();
			me._volume_off.logicBlock_size();
		}
		me._thumbnail.ontouchend=function (e) {
			me.elementMouseOver['thumbnail']=false;
			me._tt_thumbnail_open.logicBlock_visible();
			me._volume_on.logicBlock_size();
			me._volume_off.logicBlock_size();
		}
		me._thumbnail.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_thumbnail_open=document.createElement('div');
		els=me._tt_thumbnail_open__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_thumbnail_open";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_thumbnail_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_thumbnail_open.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_thumbnail_open.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_thumbnail_open.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_thumbnail_open.style[domTransition]='left 0s, top 0s';
				if (me._tt_thumbnail_open.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_thumbnail_open.style.top='-25px';
					me._tt_thumbnail_open.ggUpdatePosition(true);
				}
				else {
					me._tt_thumbnail_open.ggDx=0;
					me._tt_thumbnail_open.style.top='32px';
					me._tt_thumbnail_open.ggUpdatePosition(true);
				}
			}
		}
		me._tt_thumbnail_open.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['thumbnail'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_thumbnail_open.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_thumbnail_open.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_thumbnail_open.style[domTransition]='left 0s, top 0s';
				if (me._tt_thumbnail_open.ggCurrentLogicStateVisible == 0) {
					me._tt_thumbnail_open.style.visibility=(Number(me._tt_thumbnail_open.style.opacity)>0||!me._tt_thumbnail_open.style.opacity)?'inherit':'hidden';
					me._tt_thumbnail_open.ggVisible=true;
				}
				else {
					me._tt_thumbnail_open.style.visibility="hidden";
					me._tt_thumbnail_open.ggVisible=false;
				}
			}
		}
		me._tt_thumbnail_open.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_thumbnail_menu_show') == true)) && 
				((player.getViewerSize().width > 450))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('vis_thumbnail_menu_mobile') == true)) && 
				((player.getViewerSize().width <= 450))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('vis_thumbnail_menu_show') == false)) && 
				((player.getViewerSize().width > 450))
			)
			{
				newLogicStateText = 2;
			}
			else if (
				((player.getVariableValue('vis_thumbnail_menu_mobile') == false)) && 
				((player.getViewerSize().width <= 450))
			)
			{
				newLogicStateText = 3;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_thumbnail_open.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_thumbnail_open.ggCurrentLogicStateText = newLogicStateText;
				me._tt_thumbnail_open.style[domTransition]='left 0s, top 0s';
				if (me._tt_thumbnail_open.ggCurrentLogicStateText == 0) {
					me._tt_thumbnail_open.ggText="Hide Thumbnail Menu";
					me._tt_thumbnail_open__text.innerHTML=me._tt_thumbnail_open.ggText;
					if (me._tt_thumbnail_open.ggUpdateText) {
					me._tt_thumbnail_open.ggUpdateText=function() {
						var hs="Hide Thumbnail Menu";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_thumbnail_open.ggUpdatePosition) me._tt_thumbnail_open.ggUpdatePosition();
					}
				}
				else if (me._tt_thumbnail_open.ggCurrentLogicStateText == 1) {
					me._tt_thumbnail_open.ggText="Hide Thumbnail Menu";
					me._tt_thumbnail_open__text.innerHTML=me._tt_thumbnail_open.ggText;
					if (me._tt_thumbnail_open.ggUpdateText) {
					me._tt_thumbnail_open.ggUpdateText=function() {
						var hs="Hide Thumbnail Menu";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_thumbnail_open.ggUpdatePosition) me._tt_thumbnail_open.ggUpdatePosition();
					}
				}
				else if (me._tt_thumbnail_open.ggCurrentLogicStateText == 2) {
					me._tt_thumbnail_open.ggText="Show Thumbnail Menu";
					me._tt_thumbnail_open__text.innerHTML=me._tt_thumbnail_open.ggText;
					if (me._tt_thumbnail_open.ggUpdateText) {
					me._tt_thumbnail_open.ggUpdateText=function() {
						var hs="Show Thumbnail Menu";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_thumbnail_open.ggUpdatePosition) me._tt_thumbnail_open.ggUpdatePosition();
					}
				}
				else if (me._tt_thumbnail_open.ggCurrentLogicStateText == 3) {
					me._tt_thumbnail_open.ggText="Show Thumbnail Menu";
					me._tt_thumbnail_open__text.innerHTML=me._tt_thumbnail_open.ggText;
					if (me._tt_thumbnail_open.ggUpdateText) {
					me._tt_thumbnail_open.ggUpdateText=function() {
						var hs="Show Thumbnail Menu";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_thumbnail_open.ggUpdatePosition) me._tt_thumbnail_open.ggUpdatePosition();
					}
				}
				else {
					me._tt_thumbnail_open.ggText="";
					me._tt_thumbnail_open__text.innerHTML=me._tt_thumbnail_open.ggText;
					if (me._tt_thumbnail_open.ggUpdateText) {
					me._tt_thumbnail_open.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_thumbnail_open.ggUpdatePosition) me._tt_thumbnail_open.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_thumbnail_open.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._thumbnail.appendChild(me._tt_thumbnail_open);
		el=me._volume_on=document.createElement('div');
		els=me._volume_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MS4yMiA0Mi44MyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xLC5jbHMtM3tmaWxsOm5vbmU7c3Ryb2tlOiNmZmY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fS5jbHMtMXtzdHJva2Utd2lkdGg6Mi41cHg7fS5jbHMtMntmaWxsOiNmZmY7fS5jbHMtM3tzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPgogPC9kZWZzPgogPGcgaWQ9IkxheWVyXzMiIGRhdGEtbmFtZT0iTGF5ZXIgMyI+CiAgPGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN5PSIyMS41OSIgY3g9IjIwLjY3IiByPS'+
			'IxOC4yNyIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzEiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+CiAgPHJlY3QgY2xhc3M9ImNscy0yIiByeD0iMC43MSIgeT0iMTYuODEiIHdpZHRoPSI0LjE4IiBoZWlnaHQ9IjEwLjc3IiB4PSI3LjYxIi8+CiAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMjEsMzEuNDRsLTcuOTItMy43YS42Mi42MiwwLDAsMS0uMzYtLjU2di0xMGEuNjIuNjIsMCwwLDEsLjM2LS41NkwyMSwxMi45NGEuNjMuNjMsMCwwLDEsLjg5LjU3VjMwLjg3QS42My42MywwLDAsMSwyMSwzMS40NFoiLz4KICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0yNSwxNi44MWwuMzkuODZhMTAuOTEsMTAu'+
			'OTEsMCwwLDEsMCw5bC0uMzkuODYiLz4KICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0yOC41NywxNC40MWwuNTcsMS4yNGExNS44LDE1LjgsMCwwLDEsMCwxMy4wOEwyOC41NywzMCIvPgogPC9nPgo8L3N2Zz4K';
		me._volume_on__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="volume_on";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._volume_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._volume_on.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['thumbnail'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._volume_on.ggCurrentLogicStateSize != newLogicStateSize) {
				me._volume_on.ggCurrentLogicStateSize = newLogicStateSize;
				me._volume_on.style[domTransition]='width 0s, height 0s';
				if (me._volume_on.ggCurrentLogicStateSize == 0) {
					me._volume_on.style.width='30px';
					me._volume_on.style.height='30px';
					skin.updateSize(me._volume_on);
				}
				else {
					me._volume_on.style.width='28px';
					me._volume_on.style.height='28px';
					skin.updateSize(me._volume_on);
				}
			}
		}
		me._volume_on.onclick=function (e) {
			player.setVolume("_main",1);
			player.setVariableValue('volume', !player.getVariableValue('volume'));
			me._volume_on.style[domTransition]='none';
			me._volume_on.style.visibility='hidden';
			me._volume_on.ggVisible=false;
			me._volume_off.style[domTransition]='none';
			me._volume_off.style.visibility=(Number(me._volume_off.style.opacity)>0||!me._volume_off.style.opacity)?'inherit':'hidden';
			me._volume_off.ggVisible=true;
		}
		me._volume_on.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._thumbnail.appendChild(me._volume_on);
		el=me._volume_off=document.createElement('div');
		els=me._volume_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MS4yMiA0Mi44MyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6Mi41cHg7fS5jbHMtMntmaWxsOiNmZmY7fTwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBpZD0iTGF5ZXJfMyIgZGF0YS1uYW1lPSJMYXllciAzIj4KICA8Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3k9IjIxLjU5IiBjeD0iMjAuNjciIHI9IjE4LjI3Ii8+CiAgPHJlY3QgY2xhc3M9ImNscy0yIiByeD0iMS4yMyIgeT0iMTUuNzIiIHdpZHRoPSIyLj'+
			'Q3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNy4xOSAyNy4xNikgcm90YXRlKC00NSkiIGhlaWdodD0iMTMuMDkiIHg9IjI3Ljk2Ii8+CiAgPHJlY3QgY2xhc3M9ImNscy0yIiByeD0iMS4yMyIgeT0iMTUuNTgiIHdpZHRoPSIyLjQ3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNC4xOSAtMTQuMTYpIHJvdGF0ZSg0NSkiIGhlaWdodD0iMTMuMDkiIHg9IjI3Ljk2Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIj4KICA8cmVjdCBjbGFzcz0iY2xzLTIiIHJ4PSIwLjcxIiB5PSIxNi44MSIgd2lkdGg9IjQuMTgiIGhlaWdodD0iMTAuNzciIHg9IjcuNjEiLz4KICA8cGF0'+
			'aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yMSwzMS40NGwtNy45Mi0zLjdhLjYyLjYyLDAsMCwxLS4zNi0uNTZ2LTEwYS42Mi42MiwwLDAsMSwuMzYtLjU2TDIxLDEyLjk0YS42My42MywwLDAsMSwuODkuNTdWMzAuODdBLjYzLjYzLDAsMCwxLDIxLDMxLjQ0WiIvPgogPC9nPgo8L3N2Zz4K';
		me._volume_off__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="volume_off";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._volume_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._volume_off.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['thumbnail'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._volume_off.ggCurrentLogicStateSize != newLogicStateSize) {
				me._volume_off.ggCurrentLogicStateSize = newLogicStateSize;
				me._volume_off.style[domTransition]='width 0s, height 0s';
				if (me._volume_off.ggCurrentLogicStateSize == 0) {
					me._volume_off.style.width='30px';
					me._volume_off.style.height='30px';
					skin.updateSize(me._volume_off);
				}
				else {
					me._volume_off.style.width='28px';
					me._volume_off.style.height='28px';
					skin.updateSize(me._volume_off);
				}
			}
		}
		me._volume_off.onclick=function (e) {
			player.setVolume("_main",0);
			player.setVariableValue('volume', !player.getVariableValue('volume'));
			me._volume_off.style[domTransition]='none';
			me._volume_off.style.visibility='hidden';
			me._volume_off.ggVisible=false;
			me._volume_on.style[domTransition]='none';
			me._volume_on.style.visibility=(Number(me._volume_on.style.opacity)>0||!me._volume_on.style.opacity)?'inherit':'hidden';
			me._volume_on.ggVisible=true;
		}
		me._volume_off.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._thumbnail.appendChild(me._volume_off);
		me._controller_slider.appendChild(me._thumbnail);
		el=me._zoomout=document.createElement('div');
		els=me._zoomout__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzJweCIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIzMnB4IiB4bWxuczp4bGluaz'+
			'0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZT0iIzNDM0MzQyIgb3BhY2l0eT0iMC40IiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPHBhdGggZD0iTTIxLjc1OCwxNC44MDRIMTAuMjQxYy0wLjY2LDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgxMS41MTcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZDMjIuOTU1LDE1LjMzOSwyMi40MTksMTQuODA0LDIxLjc1OCwxNC44MDR6IE0xNiwz'+
			'LjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0xLjgzMiwxLjgzMS00LjM1MiwyLjk2LTcuMTQ2LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi'+
			'45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MWMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjgzMiwxLjgzMywyLjk2LDQuMzUyLDIuOTYxLDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDYsMjMuMTQ2eiIvPgogPC9nPgogPGcgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIj4KICA8cGF0aCBkPSJNMjEuNzU4LDE0LjgwNEgxMC4yNDFjLTAuNjYsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NmMwLDAuNjYx'+
			'LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDExLjUxNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NkMyMi45NTUsMTUuMzM5LDIyLjQxOSwxNC44MDQsMjEuNzU4LDE0LjgwNHogTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ2LDIzLjE0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuODMyLD'+
			'EuODMxLTQuMzUyLDIuOTYtNy4xNDYsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45NkM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDYsMi45NjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuODMyLDEuODMzLDIuOTYsNC4zNTIsMi45NjEsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NiwyMy4xNDZ6Ii8+CiA8L2c+Cjwvc3ZnPgo='+
			'';
		me._zoomout__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomout__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzJweCIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIzMnB4IiB4bWxuczp4bGluaz'+
			'0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlPSIjM0MzQzNDIiBvcGFjaXR5PSIwLjQiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8cGF0aCBkPSJNMjEuNzU4LDE0LjgwNEgxMC4yNDFjLTAuNjYsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDExLjUxNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC42NjEsMCwxLjE5Ny0wLjUzNiwx'+
			'LjE5Ny0xLjE5NkMyMi45NTUsMTUuMzM5LDIyLjQxOSwxNC44MDQsMjEuNzU4LDE0LjgwNHogTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ2LDIzLjE0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuODMyLDEuODMxLTQuMzUyLDIuOTYtNy4xNDYsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45NkM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LD'+
			'UuODkzLDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDYsMi45NjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuODMyLDEuODMzLDIuOTYsNC4zNTIsMi45NjEsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NiwyMy4xNDZ6Ii8+CiA8L2c+CiA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0i'+
			'I2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiI+CiAgPHBhdGggZD0iTTIxLjc1OCwxNC44MDRIMTAuMjQxYy0wLjY2LDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgxMS41MTcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZDMjIuOTU1LDE1LjMzOSwyMi40MTksMTQuODA0LDIxLjc1OCwxNC44MDR6IE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMT'+
			'IuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0xLjgzMiwxLjgzMS00LjM1MiwyLjk2LTcuMTQ2LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MWMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTYxJiN4'+
			'ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjgzMiwxLjgzMywyLjk2LDQuMzUyLDIuOTYxLDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDYsMjMuMTQ2eiIvPgogPC9nPgo8L3N2Zz4K';
		me._zoomout__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="zoomout";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomout.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_zoom') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._zoomout.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._zoomout.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._zoomout.style[domTransition]='';
				if (me._zoomout.ggCurrentLogicStateVisible == 0) {
					me._zoomout.style.visibility=(Number(me._zoomout.style.opacity)>0||!me._zoomout.style.opacity)?'inherit':'hidden';
					me._zoomout.ggVisible=true;
				}
				else {
					me._zoomout.style.visibility="hidden";
					me._zoomout.ggVisible=false;
				}
			}
		}
		me._zoomout.onmouseover=function (e) {
			me._zoomout__img.style.visibility='hidden';
			me._zoomout__imgo.style.visibility='inherit';
			me.elementMouseOver['zoomout']=true;
			me._tt_zoomout.logicBlock_visible();
		}
		me._zoomout.onmouseout=function (e) {
			me._zoomout__img.style.visibility='inherit';
			me._zoomout__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomout']=false;
			me.elementMouseOver['zoomout']=false;
			me._tt_zoomout.logicBlock_visible();
		}
		me._zoomout.onmousedown=function (e) {
			me.elementMouseDown['zoomout']=true;
		}
		me._zoomout.onmouseup=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.ontouchend=function (e) {
			me.elementMouseDown['zoomout']=false;
			me.elementMouseOver['zoomout']=false;
			me._tt_zoomout.logicBlock_visible();
		}
		me._zoomout.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_zoomout=document.createElement('div');
		els=me._tt_zoomout__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_zoomout";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Zoom Out";
		el.appendChild(els);
		me._tt_zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_zoomout.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_zoomout.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_zoomout.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_zoomout.style[domTransition]='left 0s, top 0s';
				if (me._tt_zoomout.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_zoomout.style.top='-25px';
					me._tt_zoomout.ggUpdatePosition(true);
				}
				else {
					me._tt_zoomout.ggDx=0;
					me._tt_zoomout.style.top='32px';
					me._tt_zoomout.ggUpdatePosition(true);
				}
			}
		}
		me._tt_zoomout.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['zoomout'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_zoomout.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_zoomout.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_zoomout.style[domTransition]='left 0s, top 0s';
				if (me._tt_zoomout.ggCurrentLogicStateVisible == 0) {
					me._tt_zoomout.style.visibility=(Number(me._tt_zoomout.style.opacity)>0||!me._tt_zoomout.style.opacity)?'inherit':'hidden';
					me._tt_zoomout.ggVisible=true;
				}
				else {
					me._tt_zoomout.style.visibility="hidden";
					me._tt_zoomout.ggVisible=false;
				}
			}
		}
		me._tt_zoomout.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._zoomout.appendChild(me._tt_zoomout);
		me._controller_slider.appendChild(me._zoomout);
		el=me._zoomin=document.createElement('div');
		els=me._zoomin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzJweCIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIzMnB4IiB4bWxuczp4bGluaz'+
			'0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZT0iIzNDM0MzQyIgb3BhY2l0eT0iMC40IiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPHBhdGggZD0iTTIyLjA2MSwxNC44MDNoLTQuODY0VjkuOTM4YzAtMC42NjEtMC41MzYtMS4xOTctMS4xOTctMS4xOTdjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5N3Y0Ljg2NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtIOS45MzhjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTdjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDQuODY2'+
			'djQuODY1YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtNC44NjVoNC44NjRjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NkMyMy4yNTcsMTUuMzM5LDIyLjcyMiwxNC44MDMsMjIuMDYxLDE0LjgwM3omI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7IE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzI4Lj'+
			'Q5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDZjLTEuODMyLDEuODMxLTQuMzUyLDIuOTYtNy4xNDYsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNmMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTYxYzEuODMyLDEuODMzLDIuOTYsNC4zNTIsMi45NjEsNy4xNDdDMjYuMTA2LDE4'+
			'Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NiwyMy4xNDZ6Ii8+CiA8L2c+CiA8ZyBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiPgogIDxwYXRoIGQ9Ik0yMi4wNjEsMTQuODAzaC00Ljg2NFY5LjkzOGMwLTAuNjYxLTAuNTM2LTEuMTk3LTEuMTk3LTEuMTk3Yy0wLjY2LDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTd2NC44NjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7SDkuOTM4Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk3YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5Nmg0Ljg2NnY0Ljg2NWMwLDAuNj'+
			'YsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTQuODY1aDQuODY0YzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZDMjMuMjU3LDE1LjMzOSwyMi43MjIsMTQuODAzLDIyLjA2MSwxNC44MDN6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyBNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2YzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MyOC40OTksOS4wOTYsMjIu'+
			'OTAzLDMuNSwxNiwzLjV6IE0yMy4xNDYsMjMuMTQ2Yy0xLjgzMiwxLjgzMS00LjM1MiwyLjk2LTcuMTQ2LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzcuMDIyLDIxLjMxNCw1Ljg5NCwxOC43OTUsNS44OTMsMTZjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NiwyLjk2MWMxLjgzMiwxLjgzMywyLjk2LDQuMzUyLDIuOTYxLDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LD'+
			'IxLjMxNCwyMy4xNDYsMjMuMTQ2eiIvPgogPC9nPgo8L3N2Zz4K';
		me._zoomin__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomin__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzJweCIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIzMnB4IiB4bWxuczp4bGluaz'+
			'0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlPSIjM0MzQzNDIiBvcGFjaXR5PSIwLjQiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8cGF0aCBkPSJNMjIuMDYxLDE0LjgwM2gtNC44NjRWOS45MzhjMC0wLjY2MS0wLjUzNi0xLjE5Ny0xLjE5Ny0xLjE5N2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk3djQuODY1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0g5LjkzOGMtMC42NjEsMC0x'+
			'LjE5NiwwLjUzNi0xLjE5NiwxLjE5N2MwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoNC44NjZ2NC44NjVjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di00Ljg2NWg0Ljg2NGMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2QzIzLjI1NywxNS4zMzksMjIuNzIyLDE0LjgwMywyMi4wNjEsMTQuODAzeiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MD'+
			'MtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ2LDIzLjE0NmMtMS44MzIsMS44MzEtNC4zNTIsMi45Ni03LjE0NiwyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuNzk1LDAuMDAxLDUuMzEzLDEu'+
			'MTMsNy4xNDYsMi45NjFjMS44MzIsMS44MzMsMi45Niw0LjM1MiwyLjk2MSw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ2LDIzLjE0NnoiLz4KIDwvZz4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIj4KICA8cGF0aCBkPSJNMjIuMDYxLDE0LjgwM2gtNC44NjRWOS45MzhjMC0wLjY2MS0wLjUzNi0xLjE5Ny0xLjE5Ny0xLjE5N2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk3dj'+
			'QuODY1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0g5LjkzOGMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5N2MwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoNC44NjZ2NC44NjVjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di00Ljg2NWg0Ljg2NGMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2QzIzLjI1NywxNS4zMzksMjIuNzIyLDE0LjgwMywyMi4wNjEsMTQuODAzeiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTE2LDMuNUM5LjA5NiwzLjUsMy41LDku'+
			'MDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ2LDIzLjE0NmMtMS44MzIsMS44MzEtNC4zNTIsMi45Ni03LjE0NiwyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45Nj'+
			'EmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDYsMi45NjFjMS44MzIsMS44MzMsMi45Niw0LjM1MiwyLjk2MSw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ2LDIzLjE0NnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._zoomin__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="zoomin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomin.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_zoom') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._zoomin.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._zoomin.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._zoomin.style[domTransition]='';
				if (me._zoomin.ggCurrentLogicStateVisible == 0) {
					me._zoomin.style.visibility=(Number(me._zoomin.style.opacity)>0||!me._zoomin.style.opacity)?'inherit':'hidden';
					me._zoomin.ggVisible=true;
				}
				else {
					me._zoomin.style.visibility="hidden";
					me._zoomin.ggVisible=false;
				}
			}
		}
		me._zoomin.onmouseover=function (e) {
			me._zoomin__img.style.visibility='hidden';
			me._zoomin__imgo.style.visibility='inherit';
			me.elementMouseOver['zoomin']=true;
			me._tt_zoomin.logicBlock_visible();
		}
		me._zoomin.onmouseout=function (e) {
			me._zoomin__img.style.visibility='inherit';
			me._zoomin__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomin']=false;
			me.elementMouseOver['zoomin']=false;
			me._tt_zoomin.logicBlock_visible();
		}
		me._zoomin.onmousedown=function (e) {
			me.elementMouseDown['zoomin']=true;
		}
		me._zoomin.onmouseup=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.ontouchend=function (e) {
			me.elementMouseDown['zoomin']=false;
			me.elementMouseOver['zoomin']=false;
			me._tt_zoomin.logicBlock_visible();
		}
		me._zoomin.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_zoomin=document.createElement('div');
		els=me._tt_zoomin__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_zoomin";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Zoom In";
		el.appendChild(els);
		me._tt_zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_zoomin.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_zoomin.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_zoomin.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_zoomin.style[domTransition]='left 0s, top 0s';
				if (me._tt_zoomin.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_zoomin.style.top='-25px';
					me._tt_zoomin.ggUpdatePosition(true);
				}
				else {
					me._tt_zoomin.ggDx=0;
					me._tt_zoomin.style.top='32px';
					me._tt_zoomin.ggUpdatePosition(true);
				}
			}
		}
		me._tt_zoomin.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['zoomin'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_zoomin.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_zoomin.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_zoomin.style[domTransition]='left 0s, top 0s';
				if (me._tt_zoomin.ggCurrentLogicStateVisible == 0) {
					me._tt_zoomin.style.visibility=(Number(me._tt_zoomin.style.opacity)>0||!me._tt_zoomin.style.opacity)?'inherit':'hidden';
					me._tt_zoomin.ggVisible=true;
				}
				else {
					me._tt_zoomin.style.visibility="hidden";
					me._tt_zoomin.ggVisible=false;
				}
			}
		}
		me._tt_zoomin.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._zoomin.appendChild(me._tt_zoomin);
		me._controller_slider.appendChild(me._zoomin);
		el=me._key_up=document.createElement('div');
		el.ggId="key_up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._key_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key_up.onmouseout=function (e) {
			me.elementMouseDown['key_up']=false;
		}
		me._key_up.onmousedown=function (e) {
			me.elementMouseDown['key_up']=true;
		}
		me._key_up.onmouseup=function (e) {
			me.elementMouseDown['key_up']=false;
		}
		me._key_up.ontouchend=function (e) {
			me.elementMouseDown['key_up']=false;
		}
		me._key_up.ggUpdatePosition=function (useTransition) {
		}
		me._controller_slider.appendChild(me._key_up);
		el=me._key_down=document.createElement('div');
		el.ggId="key_down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._key_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key_down.onmouseout=function (e) {
			me.elementMouseDown['key_down']=false;
		}
		me._key_down.onmousedown=function (e) {
			me.elementMouseDown['key_down']=true;
		}
		me._key_down.onmouseup=function (e) {
			me.elementMouseDown['key_down']=false;
		}
		me._key_down.ontouchend=function (e) {
			me.elementMouseDown['key_down']=false;
		}
		me._key_down.ggUpdatePosition=function (useTransition) {
		}
		me._controller_slider.appendChild(me._key_down);
		el=me._key_left=document.createElement('div');
		el.ggId="key_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._key_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key_left.onmouseout=function (e) {
			me.elementMouseDown['key_left']=false;
		}
		me._key_left.onmousedown=function (e) {
			me.elementMouseDown['key_left']=true;
		}
		me._key_left.onmouseup=function (e) {
			me.elementMouseDown['key_left']=false;
		}
		me._key_left.ontouchend=function (e) {
			me.elementMouseDown['key_left']=false;
		}
		me._key_left.ggUpdatePosition=function (useTransition) {
		}
		me._controller_slider.appendChild(me._key_left);
		el=me._key_right=document.createElement('div');
		el.ggId="key_right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._key_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key_right.onmouseout=function (e) {
			me.elementMouseDown['key_right']=false;
		}
		me._key_right.onmousedown=function (e) {
			me.elementMouseDown['key_right']=true;
		}
		me._key_right.onmouseup=function (e) {
			me.elementMouseDown['key_right']=false;
		}
		me._key_right.ontouchend=function (e) {
			me.elementMouseDown['key_right']=false;
		}
		me._key_right.ggUpdatePosition=function (useTransition) {
		}
		me._controller_slider.appendChild(me._key_right);
		me._controller.appendChild(me._controller_slider);
		el=me._element_alpha_timer=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=1000;
		el.ggId="element_alpha_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._element_alpha_timer.ggIsActive=function() {
			return (me._element_alpha_timer.ggTimestamp + me._element_alpha_timer.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._element_alpha_timer.ggDeactivate=function () {
			player.setVariableValue('vis_timer', true);
		}
		me._element_alpha_timer.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._element_alpha_timer);
		me.divSkin.appendChild(me._controller);
		el=me._thumbnail_menu_mobile=document.createElement('div');
		els=me._thumbnail_menu_mobile__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 76.764px;';
		hs+='left : 50%;';
		hs+='margin-left : -59.49px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 118.98px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu_mobile.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu_mobile.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu_mobile.ggHPercentVisible >= 1.0) return;
			me._thumbnail_menu_mobile.ggScrollPosX = (me._thumbnail_menu_mobile__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu_mobile.ggScrollPosX = Math.max(me._thumbnail_menu_mobile.ggScrollPosX, 0);
			me._thumbnail_menu_mobile.ggScrollPosX = Math.min(me._thumbnail_menu_mobile.ggScrollPosX, me._thumbnail_menu_mobile__horScrollBg.offsetWidth - me._thumbnail_menu_mobile__horScrollFg.offsetWidth);
			me._thumbnail_menu_mobile__horScrollFg.style.left = me._thumbnail_menu_mobile.ggScrollPosX + 'px';
			me._thumbnail_menu_mobile__content.style.left = -(Math.round(me._thumbnail_menu_mobile.ggScrollPosX / me._thumbnail_menu_mobile.ggHPercentVisible)) + me._thumbnail_menu_mobile.ggContentLeftOffset + 'px';
			me._thumbnail_menu_mobile.ggScrollPosXPercent = (me._thumbnail_menu_mobile__horScrollFg.offsetLeft / me._thumbnail_menu_mobile__horScrollBg.offsetWidth);
		}
		me._thumbnail_menu_mobile.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu_mobile.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu_mobile.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu_mobile.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu_mobile.ggScrollPosX >= me._thumbnail_menu_mobile__horScrollBg.offsetWidth - me._thumbnail_menu_mobile__horScrollFg.offsetWidth)) {
					me._thumbnail_menu_mobile.ggScrollPosX = Math.min(me._thumbnail_menu_mobile.ggScrollPosX, me._thumbnail_menu_mobile__horScrollBg.offsetWidth - me._thumbnail_menu_mobile__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu_mobile.ggScrollPosX <= 0)) {
					me._thumbnail_menu_mobile.ggScrollPosX = Math.max(me._thumbnail_menu_mobile.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu_mobile__horScrollFg.style.left = me._thumbnail_menu_mobile.ggScrollPosX + 'px';
			me._thumbnail_menu_mobile__content.style.left = -(Math.round(me._thumbnail_menu_mobile.ggScrollPosX / me._thumbnail_menu_mobile.ggHPercentVisible)) + me._thumbnail_menu_mobile.ggContentLeftOffset + 'px';
			me._thumbnail_menu_mobile.ggScrollPosXPercent = (me._thumbnail_menu_mobile__horScrollFg.offsetLeft / me._thumbnail_menu_mobile__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_menu_mobile.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu_mobile.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu_mobile.ggVPercentVisible >= 1.0) return;
			me._thumbnail_menu_mobile.ggScrollPosY = (me._thumbnail_menu_mobile__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu_mobile.ggScrollPosY = Math.max(me._thumbnail_menu_mobile.ggScrollPosY, 0);
			me._thumbnail_menu_mobile.ggScrollPosY = Math.min(me._thumbnail_menu_mobile.ggScrollPosY, me._thumbnail_menu_mobile__vertScrollBg.offsetHeight - me._thumbnail_menu_mobile__vertScrollFg.offsetHeight);
			me._thumbnail_menu_mobile__vertScrollFg.style.top = me._thumbnail_menu_mobile.ggScrollPosY + 'px';
			me._thumbnail_menu_mobile__content.style.top = -(Math.round(me._thumbnail_menu_mobile.ggScrollPosY / me._thumbnail_menu_mobile.ggVPercentVisible)) + me._thumbnail_menu_mobile.ggContentTopOffset + 'px';
			me._thumbnail_menu_mobile.ggScrollPosYPercent = (me._thumbnail_menu_mobile__vertScrollFg.offsetTop / me._thumbnail_menu_mobile__vertScrollBg.offsetHeight);
		}
		me._thumbnail_menu_mobile.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu_mobile.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu_mobile.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu_mobile.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu_mobile.ggScrollPosY >= me._thumbnail_menu_mobile__vertScrollBg.offsetHeight - me._thumbnail_menu_mobile__vertScrollFg.offsetHeight)) {
					me._thumbnail_menu_mobile.ggScrollPosY = Math.min(me._thumbnail_menu_mobile.ggScrollPosY, me._thumbnail_menu_mobile__vertScrollBg.offsetHeight - me._thumbnail_menu_mobile__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu_mobile.ggScrollPosY <= 0)) {
					me._thumbnail_menu_mobile.ggScrollPosY = Math.max(me._thumbnail_menu_mobile.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu_mobile__vertScrollFg.style.top = me._thumbnail_menu_mobile.ggScrollPosY + 'px';
			me._thumbnail_menu_mobile__content.style.top = -(Math.round(me._thumbnail_menu_mobile.ggScrollPosY / me._thumbnail_menu_mobile.ggVPercentVisible)) + me._thumbnail_menu_mobile.ggContentTopOffset + 'px';
			me._thumbnail_menu_mobile.ggScrollPosYPercent = (me._thumbnail_menu_mobile__vertScrollFg.offsetTop / me._thumbnail_menu_mobile__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_menu_mobile.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu_mobile.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu_mobile.ggHPercentVisible);
					me._thumbnail_menu_mobile.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu_mobile.offsetWidth - (me._thumbnail_menu_mobile.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu_mobile.offsetWidth - (me._thumbnail_menu_mobile.ggVertScrollVisible ? 15 : 0))) * me._thumbnail_menu_mobile.ggHPercentVisible);
					me._thumbnail_menu_mobile.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu_mobile.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu_mobile.ggVPercentVisible);
					me._thumbnail_menu_mobile.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu_mobile.offsetHeight - (me._thumbnail_menu_mobile.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu_mobile.offsetHeight - (me._thumbnail_menu_mobile.ggHorScrollVisible ? 15 : 0))) * me._thumbnail_menu_mobile.ggVPercentVisible);
					me._thumbnail_menu_mobile.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu_mobile.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._thumbnail_menu_mobile.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._thumbnail_menu_mobile__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu_mobile.ggDragInertiaX *= 0.65;
					me._thumbnail_menu_mobile.ggDragInertiaY *= 0.65;
					me._thumbnail_menu_mobile.ggScrollByX(-me._thumbnail_menu_mobile.ggDragInertiaX);
					me._thumbnail_menu_mobile.ggScrollByY(-me._thumbnail_menu_mobile.ggDragInertiaY);
					if (Math.abs(me._thumbnail_menu_mobile.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_menu_mobile.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._thumbnail_menu_mobile__content.ontouchend = null;
				me._thumbnail_menu_mobile__content.ontouchmove = null;
				me._thumbnail_menu_mobile__content.onpointerup = null;
				me._thumbnail_menu_mobile__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._thumbnail_menu_mobile__content.onpointerup = me._thumbnail_menu_mobile__content.ontouchend;
		}
			me._thumbnail_menu_mobile__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._thumbnail_menu_mobile.ggDragLastX;
				var diffY = (t ? t[0].clientY : e.clientY) - me._thumbnail_menu_mobile.ggDragLastY;
				me._thumbnail_menu_mobile.ggDragInertiaX = diffX;
				me._thumbnail_menu_mobile.ggDragInertiaY = diffY;
				me._thumbnail_menu_mobile.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_menu_mobile.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnail_menu_mobile.ggScrollByX(-diffX);
				me._thumbnail_menu_mobile.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnail_menu_mobile__content.onpointermove = me._thumbnail_menu_mobile__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elVertScrollBg = me._thumbnail_menu_mobile__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 864px; background-color: rgba(0,0,0,0.392157); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbnail_menu_mobile__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 864px; background-color: rgba(0,0,0,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbnail_menu_mobile.ggScrollPosY = 0;
		me._thumbnail_menu_mobile.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu_mobile.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu_mobile.ggDragInertiaY *= 0.65;
					me._thumbnail_menu_mobile.ggScrollByY(me._thumbnail_menu_mobile.ggDragInertiaY);
					if (Math.abs(me._thumbnail_menu_mobile.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._thumbnail_menu_mobile.ggDragLastY;
				me._thumbnail_menu_mobile.ggDragInertiaY = diffY;
				me._thumbnail_menu_mobile.ggDragLastY = e.clientY;
				me._thumbnail_menu_mobile.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu_mobile.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu_mobile.ggDragInertiaY *= 0.65;
					me._thumbnail_menu_mobile.ggScrollByY(me._thumbnail_menu_mobile.ggDragInertiaY);
					if (Math.abs(me._thumbnail_menu_mobile.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._thumbnail_menu_mobile.ggDragLastY;
				me._thumbnail_menu_mobile.ggDragInertiaY = diffY;
				me._thumbnail_menu_mobile.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnail_menu_mobile.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbnail_menu_mobile.ggScrollHeight;
			if (e.offsetY < me._thumbnail_menu_mobile.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_menu_mobile.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu_mobile__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbnail_menu_mobile.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbnail_menu_mobile.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_menu_mobile.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbnail_menu_mobile.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu_mobile__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_menu_mobile";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : 80%;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu_mobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu_mobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_userdata') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._thumbnail_menu_mobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._thumbnail_menu_mobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._thumbnail_menu_mobile.style[domTransition]='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._thumbnail_menu_mobile.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._thumbnail_menu_mobile.style.top='1000px';
					me._thumbnail_menu_mobile.ggUpdatePosition(true);
				}
				else {
					me._thumbnail_menu_mobile.ggDx=0;
					me._thumbnail_menu_mobile.style.top='10px';
					me._thumbnail_menu_mobile.ggUpdatePosition(true);
				}
			}
		}
		me._thumbnail_menu_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_thumbnail') == true)) && 
				((player.getIsTour() == true)) && 
				((player.getViewerSize().width <= 450))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_menu_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_menu_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_menu_mobile.style[domTransition]='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._thumbnail_menu_mobile.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_menu_mobile.style.visibility=(Number(me._thumbnail_menu_mobile.style.opacity)>0||!me._thumbnail_menu_mobile.style.opacity)?'inherit':'hidden';
					me._thumbnail_menu_mobile.ggVisible=true;
				}
				else {
					me._thumbnail_menu_mobile.style.visibility="hidden";
					me._thumbnail_menu_mobile.ggVisible=false;
				}
			}
		}
		me._thumbnail_menu_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu_mobile') == true)) && 
				((player.getVariableValue('vis_thumbnail_menu_auto_hide') == true)) && 
				((player.getVariableValue('vis_timer') == true)) && 
				((player.getViewerSize().width <= 450))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_menu_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_menu_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_menu_mobile.style[domTransition]='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._thumbnail_menu_mobile.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_menu_mobile.style.visibility=me._thumbnail_menu_mobile.ggVisible?'inherit':'hidden';
					me._thumbnail_menu_mobile.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_menu_mobile.style.opacity == 0.0) { me._thumbnail_menu_mobile.style.visibility="hidden"; } }, 505);
					me._thumbnail_menu_mobile.style.opacity=0;
				}
			}
		}
		me._thumbnail_menu_mobile.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 15;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (15/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = -(Math.round(me._thumbnail_menu_mobile.ggScrollPosY / me._thumbnail_menu_mobile.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._thumbnail_menu_mobile.ggHorScrollVisible && contentHeight > this.offsetHeight - 15) || (!me._thumbnail_menu_mobile.ggHorScrollVisible && contentHeight > this.offsetHeight)) {
					me._thumbnail_menu_mobile__vertScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu_mobile__vertScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu_mobile.ggVertScrollVisible = true;
				} else {
					me._thumbnail_menu_mobile__vertScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu_mobile__vertScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu_mobile.ggVertScrollVisible = false;
				}
				if(me._thumbnail_menu_mobile.ggVertScrollVisible) {
					me._thumbnail_menu_mobile.ggAvailableWidth = me._thumbnail_menu_mobile.offsetWidth - 15;
					if (me._thumbnail_menu_mobile.ggHorScrollVisible) {
						me._thumbnail_menu_mobile.ggAvailableHeight = me._thumbnail_menu_mobile.offsetHeight - 15;
						me._thumbnail_menu_mobile.ggAvailableHeightWithScale = me._thumbnail_menu_mobile.getBoundingClientRect().height - me._thumbnail_menu_mobile__vertScrollBg.getBoundingClientRect().width;
						me._thumbnail_menu_mobile__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbnail_menu_mobile.ggAvailableHeight = me._thumbnail_menu_mobile.offsetHeight;
						me._thumbnail_menu_mobile.ggAvailableHeightWithScale = me._thumbnail_menu_mobile.getBoundingClientRect().height;
						me._thumbnail_menu_mobile__cornerBg.style.visibility = 'hidden';
					}
					me._thumbnail_menu_mobile__vertScrollBg.style.height = me._thumbnail_menu_mobile.ggAvailableHeight + 'px';
					me._thumbnail_menu_mobile.ggVPercentVisible = contentHeight != 0 ? me._thumbnail_menu_mobile.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._thumbnail_menu_mobile.ggVPercentVisible > 1.0) me._thumbnail_menu_mobile.ggVPercentVisible = 1.0;
					me._thumbnail_menu_mobile.ggScrollHeight =  Math.round(me._thumbnail_menu_mobile__vertScrollBg.offsetHeight * me._thumbnail_menu_mobile.ggVPercentVisible);
					me._thumbnail_menu_mobile__vertScrollFg.style.height = me._thumbnail_menu_mobile.ggScrollHeight + 'px';
					me._thumbnail_menu_mobile.ggScrollPosY = me._thumbnail_menu_mobile.ggScrollPosYPercent * me._thumbnail_menu_mobile.ggAvailableHeight;
					me._thumbnail_menu_mobile.ggScrollPosY = Math.min(me._thumbnail_menu_mobile.ggScrollPosY, me._thumbnail_menu_mobile__vertScrollBg.offsetHeight - me._thumbnail_menu_mobile__vertScrollFg.offsetHeight);
					me._thumbnail_menu_mobile__vertScrollFg.style.top = me._thumbnail_menu_mobile.ggScrollPosY + 'px';
					if (me._thumbnail_menu_mobile.ggVPercentVisible < 1.0) {
						me._thumbnail_menu_mobile__content.style.top = -(Math.round(me._thumbnail_menu_mobile.ggScrollPosY / me._thumbnail_menu_mobile.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
					}
				} else {
					me._thumbnail_menu_mobile.ggAvailableWidth = me._thumbnail_menu_mobile.offsetWidth;
					me._thumbnail_menu_mobile.ggScrollPosY = 0;
					me._thumbnail_menu_mobile.ggScrollPosYPercent = 0.0;
					me._thumbnail_menu_mobile__content.style.top = this.ggContentTopOffset + 'px';
					me._thumbnail_menu_mobile__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._thumbnail_menu_mobile.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_menu_mobile.ggVertScrollVisible) {
					me.updateSize(me._thumbnail_menu_mobile);
					me._thumbnail_menu_mobile.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner_mobile=document.createElement('div');
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 96;
		el.ggHeight = 62;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner_mobile.callChildLogicBlocks_changenode = function(){
			if(me._thumbnail_cloner_mobile.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_mobile.ggInstances.length; i++) {
					if (me._thumbnail_cloner_mobile.ggInstances[i]._checkmark_tick_mobile && me._thumbnail_cloner_mobile.ggInstances[i]._checkmark_tick_mobile.logicBlock_alpha) {
						me._thumbnail_cloner_mobile.ggInstances[i]._checkmark_tick_mobile.logicBlock_alpha();
					}
					if (me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile && me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile.logicBlock_alpha) {
						me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner_mobile.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner_mobile.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_mobile.ggInstances.length; i++) {
					if (me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_active_mobile && me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_active_mobile.logicBlock_bordercolor) {
						me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_active_mobile.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner_mobile.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner_mobile.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_mobile.ggInstances.length; i++) {
					if (me._thumbnail_cloner_mobile.ggInstances[i]._checkmark_tick_mobile && me._thumbnail_cloner_mobile.ggInstances[i]._checkmark_tick_mobile.logicBlock_alpha) {
						me._thumbnail_cloner_mobile.ggInstances[i]._checkmark_tick_mobile.logicBlock_alpha();
					}
					if (me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile && me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile.logicBlock_alpha) {
						me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner_mobile.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner_mobile.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_mobile.ggInstances.length; i++) {
					if (me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_active_mobile && me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_active_mobile.logicBlock_bordercolor) {
						me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_active_mobile.logicBlock_bordercolor();
					}
					if (me._thumbnail_cloner_mobile.ggInstances[i]._checkmark_tick_mobile && me._thumbnail_cloner_mobile.ggInstances[i]._checkmark_tick_mobile.logicBlock_visible) {
						me._thumbnail_cloner_mobile.ggInstances[i]._checkmark_tick_mobile.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner_mobile.callChildLogicBlocks_changevisitednodes = function(){
			if(me._thumbnail_cloner_mobile.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_mobile.ggInstances.length; i++) {
					if (me._thumbnail_cloner_mobile.ggInstances[i]._checkmark_tick_mobile && me._thumbnail_cloner_mobile.ggInstances[i]._checkmark_tick_mobile.logicBlock_visible) {
						me._thumbnail_cloner_mobile.ggInstances[i]._checkmark_tick_mobile.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner_mobile.callChildLogicBlocks_activehotspotchanged = function(){
			if(me._thumbnail_cloner_mobile.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_mobile.ggInstances.length; i++) {
					if (me._thumbnail_cloner_mobile.ggInstances[i]._checkmark_tick_mobile && me._thumbnail_cloner_mobile.ggInstances[i]._checkmark_tick_mobile.logicBlock_alpha) {
						me._thumbnail_cloner_mobile.ggInstances[i]._checkmark_tick_mobile.logicBlock_alpha();
					}
					if (me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile && me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile.logicBlock_alpha) {
						me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner_mobile.callChildLogicBlocks_varchanged_opt_thumbnail_tooltip = function(){
			if(me._thumbnail_cloner_mobile.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_mobile.ggInstances.length; i++) {
					if (me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile && me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile.logicBlock_alpha) {
						me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile.logicBlock_alpha();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner_mobile.ggUpdating == true) return;
			me._thumbnail_cloner_mobile.ggUpdating = true;
			var el=me._thumbnail_cloner_mobile;
			var curNumCols = 0;
			var parentWidth = me._thumbnail_cloner_mobile.parentNode.classList.contains('ggskin_subelement') ? (me._thumbnail_cloner_mobile.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._thumbnail_cloner_mobile.parentNode.parentNode.ggAvailableWidth : me._thumbnail_cloner_mobile.parentNode.parentNode.clientWidth) : me._thumbnail_cloner_mobile.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._thumbnail_cloner_mobile.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me._thumbnail_cloner_mobile.offsetLeft) * me._thumbnail_cloner_mobile.ggNumRepeat / 100.0) / me._thumbnail_cloner_mobile.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner_mobile.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._thumbnail_cloner_mobile.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner_mobile.ggWidth) + 'px';
				parameter.width=me._thumbnail_cloner_mobile.ggWidth + 'px';
				parameter.height=me._thumbnail_cloner_mobile.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner_mobile_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
				}
			}
			me._thumbnail_cloner_mobile.callChildLogicBlocks_changenode();
			me._thumbnail_cloner_mobile.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner_mobile.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner_mobile.callChildLogicBlocks_active();
			me._thumbnail_cloner_mobile.callChildLogicBlocks_changevisitednodes();
			me._thumbnail_cloner_mobile.callChildLogicBlocks_activehotspotchanged();
			me._thumbnail_cloner_mobile.callChildLogicBlocks_varchanged_opt_thumbnail_tooltip();
			me._thumbnail_cloner_mobile.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner_mobile.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner_mobile.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner_mobile.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "_nop_";
		el.ggId="thumbnail_cloner_mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 62px;';
		hs+='left : 1.98px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 1.764px;';
		hs+='visibility : inherit;';
		hs+='width : 96px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner_mobile.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_cloner_mobile']=true;
		}
		me._thumbnail_cloner_mobile.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_cloner_mobile']=false;
		}
		me._thumbnail_cloner_mobile.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_cloner_mobile']=false;
		}
		me._thumbnail_cloner_mobile.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner_mobile.childNodes.length; i++) {
				var child=me._thumbnail_cloner_mobile.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner_mobile.ggUpdatePosition=function (useTransition) {
				me._thumbnail_cloner_mobile.ggUpdate();
		}
		me._thumbnail_cloner_mobile.ggNodeChange=function () {
			me._thumbnail_cloner_mobile.ggUpdateConditionNodeChange();
		}
		me._thumbnail_menu_mobile__content.appendChild(me._thumbnail_cloner_mobile);
		me.divSkin.appendChild(me._thumbnail_menu_mobile);
		el=me._web_page=document.createElement('div');
		els=me._web_page__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="web_page";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 90%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._web_page.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._web_page.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._web_page.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._web_page.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._web_page.style[domTransition]='';
				if (me._web_page.ggCurrentLogicStateVisible == 0) {
					me._web_page.style.visibility=(Number(me._web_page.style.opacity)>0||!me._web_page.style.opacity)?'inherit':'hidden';
					me._web_page.ggVisible=true;
				}
				else {
					me._web_page.style.visibility="hidden";
					me._web_page.ggVisible=false;
				}
			}
		}
		me._web_page.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._web_page);
		el=me._loading=document.createElement('div');
		el.ggId="loading";
		el.ggDx=0;
		el.ggDy=15;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 69px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._loading.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_loader') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._loading.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._loading.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._loading.style[domTransition]='';
				if (me._loading.ggCurrentLogicStateVisible == 0) {
					me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
					me._loading.ggVisible=true;
				}
				else {
					me._loading.style.visibility="hidden";
					me._loading.ggVisible=false;
				}
			}
		}
		me._loading.onclick=function (e) {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		me._loading.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._loadingbg=document.createElement('div');
		el.ggId="loadingbg";
		el.ggDx=0;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 7px;';
		hs+='border-radius : 7px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 66px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loadingbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbg.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._loading.appendChild(me._loadingbg);
		el=me._loadingtext=document.createElement('div');
		els=me._loadingtext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="loadingtext";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text chinese";
		el.ggType='text';
		hs ='';
		hs+='bottom : 32px;';
		hs+='height : 23px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(33,47,101,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._loadingtext.ggUpdateText=function() {
			var hs="\u52a0\u8f7d\u680f... "+(player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		player.addListener('downloadprogress', function() {
			me._loadingtext.ggUpdateText();
		});
		el.appendChild(els);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingtext.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._loading.appendChild(me._loadingtext);
		el=me._loadingbar=document.createElement('div');
		el.ggId="loadingbar";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #18539b;';
		hs+='border : 0px solid #808080;';
		hs+='bottom : 12px;';
		hs+='cursor : default;';
		hs+='height : 13px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 182px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		me._loadingbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbar.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._loading.appendChild(me._loadingbar);
		me.divSkin.appendChild(me._loading);
		el=me._userdata=document.createElement('div');
		el.ggId="userdata";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 140px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 240px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._userdata.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._userdata.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._userdata.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._userdata.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._userdata.style[domTransition]='';
				if (me._userdata.ggCurrentLogicStateVisible == 0) {
					me._userdata.style.visibility=(Number(me._userdata.style.opacity)>0||!me._userdata.style.opacity)?'inherit':'hidden';
					me._userdata.ggVisible=true;
				}
				else {
					me._userdata.style.visibility="hidden";
					me._userdata.ggVisible=false;
				}
			}
		}
		me._userdata.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._userdatabg=document.createElement('div');
		el.ggId="userdatabg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 140px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 240px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._userdatabg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdatabg.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdatabg);
		el=me._userdata_title=document.createElement('div');
		els=me._userdata_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="userdata_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 220px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._userdata_title.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._userdata_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._userdata_title.ggUpdateText();
		});
		el.appendChild(els);
		me._userdata_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdata_title.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdata_title);
		el=me._userdata_description=document.createElement('div');
		els=me._userdata_description__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="userdata_description";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 220px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._userdata_description.ggUpdateText=function() {
			var hs=me.ggUserdata.description;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._userdata_description.ggUpdateText();
		player.addListener('changenode', function() {
			me._userdata_description.ggUpdateText();
		});
		el.appendChild(els);
		me._userdata_description.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdata_description.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdata_description);
		el=me._userdata_author=document.createElement('div');
		els=me._userdata_author__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="userdata_author";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 220px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._userdata_author.ggUpdateText=function() {
			var hs=me.ggUserdata.author;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._userdata_author.ggUpdateText();
		player.addListener('changenode', function() {
			me._userdata_author.ggUpdateText();
		});
		el.appendChild(els);
		me._userdata_author.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdata_author.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdata_author);
		el=me._userdata_datetime=document.createElement('div');
		els=me._userdata_datetime__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="userdata_datetime";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 220px;';
		hs+='height: 23px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._userdata_datetime.ggUpdateText=function() {
			var hs=me.ggUserdata.datetime;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._userdata_datetime.ggUpdateText();
		player.addListener('changenode', function() {
			me._userdata_datetime.ggUpdateText();
		});
		el.appendChild(els);
		me._userdata_datetime.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdata_datetime.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdata_datetime);
		el=me._userdata_copyright=document.createElement('div');
		els=me._userdata_copyright__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="userdata_copyright";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 110px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 220px;';
		hs+='height: 23px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._userdata_copyright.ggUpdateText=function() {
			var hs="&#169; "+me.ggUserdata.copyright;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._userdata_copyright.ggUpdateText();
		player.addListener('changenode', function() {
			me._userdata_copyright.ggUpdateText();
		});
		el.appendChild(els);
		me._userdata_copyright.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdata_copyright.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdata_copyright);
		el=me._userdata_close=document.createElement('div');
		els=me._userdata_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8zIiBkYXRhLW5hbWU9IkxheWVyIDMiIHZpZXdCb3g9IjAgMCA0MS4yMiA0Mi44MyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2ZpbGw6I2RlYjIwMDt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT4KIDwvZGVmcz4KIDxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeT0iMjEuNTkiIGN4PSIyMC42NyIgcj0iMTguMjciLz4KIDxyZWN0IGNsYXNzPSJjbHMtMiIgcng9IjEuMjgiIHk9IjkuMzgiIHdpZHRoPSI0LjY1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOS4yOSAyMC45Nykgcm90YXRlKC00NSkiIGhlaWdodD'+
			'0iMjQuNjUiIHg9IjE4LjM0Ii8+CiA8cmVjdCBjbGFzcz0iY2xzLTIiIHJ4PSIxLjM2IiB5PSI5LjEyIiB3aWR0aD0iNC42NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjEuMjEgLTguMzMpIHJvdGF0ZSg0NSkiIGhlaWdodD0iMjQuNjUiIHg9IjE4LjM0Ii8+Cjwvc3ZnPgo=';
		me._userdata_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="userdata_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 204px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._userdata_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdata_close.onclick=function (e) {
			player.setVariableValue('vis_userdata', false);
		}
		me._userdata_close.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdata_close);
		me.divSkin.appendChild(me._userdata);
		el=me._information=document.createElement('div');
		el.ggId="information";
		el.ggDx=2;
		el.ggDy=-59;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 473px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 568px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._information.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._information.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._information.style[domTransition]='' + cssPrefix + 'transform 0s, opacity 1000ms ease 0ms';
				if (me._information.ggCurrentLogicStateScaling == 0) {
					me._information.ggParameter.sx = 0.8;
					me._information.ggParameter.sy = 0.8;
					me._information.style[domTransform]=parameterToTransform(me._information.ggParameter);
				}
				else {
					me._information.ggParameter.sx = 1;
					me._information.ggParameter.sy = 1;
					me._information.style[domTransform]=parameterToTransform(me._information.ggParameter);
				}
			}
		}
		me._information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information.style[domTransition]='' + cssPrefix + 'transform 0s, opacity 1000ms ease 0ms';
				if (me._information.ggCurrentLogicStateVisible == 0) {
					me._information.style.visibility=(Number(me._information.style.opacity)>0||!me._information.style.opacity)?'inherit':'hidden';
					me._information.ggVisible=true;
				}
				else {
					me._information.style.visibility="hidden";
					me._information.ggVisible=false;
				}
			}
		}
		me._information.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._information.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._information.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._information.style[domTransition]='' + cssPrefix + 'transform 0s, opacity 1000ms ease 0ms';
				if (me._information.ggCurrentLogicStateAlpha == 0) {
					me._information.style.visibility=me._information.ggVisible?'inherit':'hidden';
					me._information.style.opacity=1;
				}
				else {
					me._information.style.visibility=me._information.ggVisible?'inherit':'hidden';
					me._information.style.opacity=1;
				}
			}
		}
		me._information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_2__img.setAttribute('src',basePath + 'images/svg_2.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 532px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 552px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._information.appendChild(me._svg_2);
		el=me._scrollarea_2=document.createElement('div');
		els=me._scrollarea_2__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 0px;';
		hs+='left : 50%;';
		hs+='margin-left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 0px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_2.ggScrollByX = function(diffX) {
			if(!me._scrollarea_2.ggHorScrollVisible || diffX == 0 || me._scrollarea_2.ggHPercentVisible >= 1.0) return;
			me._scrollarea_2.ggScrollPosX = (me._scrollarea_2__horScrollFg.offsetLeft + diffX);
			me._scrollarea_2.ggScrollPosX = Math.max(me._scrollarea_2.ggScrollPosX, 0);
			me._scrollarea_2.ggScrollPosX = Math.min(me._scrollarea_2.ggScrollPosX, me._scrollarea_2__horScrollBg.offsetWidth - me._scrollarea_2__horScrollFg.offsetWidth);
			me._scrollarea_2__horScrollFg.style.left = me._scrollarea_2.ggScrollPosX + 'px';
			me._scrollarea_2__content.style.left = -(Math.round(me._scrollarea_2.ggScrollPosX / me._scrollarea_2.ggHPercentVisible)) + me._scrollarea_2.ggContentLeftOffset + 'px';
			me._scrollarea_2.ggScrollPosXPercent = (me._scrollarea_2__horScrollFg.offsetLeft / me._scrollarea_2__horScrollBg.offsetWidth);
		}
		me._scrollarea_2.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_2.ggHorScrollVisible || diffX == 0 || me._scrollarea_2.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_2.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_2.ggScrollPosX >= me._scrollarea_2__horScrollBg.offsetWidth - me._scrollarea_2__horScrollFg.offsetWidth)) {
					me._scrollarea_2.ggScrollPosX = Math.min(me._scrollarea_2.ggScrollPosX, me._scrollarea_2__horScrollBg.offsetWidth - me._scrollarea_2__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_2.ggScrollPosX <= 0)) {
					me._scrollarea_2.ggScrollPosX = Math.max(me._scrollarea_2.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_2__horScrollFg.style.left = me._scrollarea_2.ggScrollPosX + 'px';
			me._scrollarea_2__content.style.left = -(Math.round(me._scrollarea_2.ggScrollPosX / me._scrollarea_2.ggHPercentVisible)) + me._scrollarea_2.ggContentLeftOffset + 'px';
			me._scrollarea_2.ggScrollPosXPercent = (me._scrollarea_2__horScrollFg.offsetLeft / me._scrollarea_2__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scrollarea_2.ggScrollByY = function(diffY) {
			if(!me._scrollarea_2.ggVertScrollVisible || diffY == 0 || me._scrollarea_2.ggVPercentVisible >= 1.0) return;
			me._scrollarea_2.ggScrollPosY = (me._scrollarea_2__vertScrollFg.offsetTop + diffY);
			me._scrollarea_2.ggScrollPosY = Math.max(me._scrollarea_2.ggScrollPosY, 0);
			me._scrollarea_2.ggScrollPosY = Math.min(me._scrollarea_2.ggScrollPosY, me._scrollarea_2__vertScrollBg.offsetHeight - me._scrollarea_2__vertScrollFg.offsetHeight);
			me._scrollarea_2__vertScrollFg.style.top = me._scrollarea_2.ggScrollPosY + 'px';
			me._scrollarea_2__content.style.top = -(Math.round(me._scrollarea_2.ggScrollPosY / me._scrollarea_2.ggVPercentVisible)) + me._scrollarea_2.ggContentTopOffset + 'px';
			me._scrollarea_2.ggScrollPosYPercent = (me._scrollarea_2__vertScrollFg.offsetTop / me._scrollarea_2__vertScrollBg.offsetHeight);
		}
		me._scrollarea_2.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_2.ggVertScrollVisible || diffY == 0 || me._scrollarea_2.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_2.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_2.ggScrollPosY >= me._scrollarea_2__vertScrollBg.offsetHeight - me._scrollarea_2__vertScrollFg.offsetHeight)) {
					me._scrollarea_2.ggScrollPosY = Math.min(me._scrollarea_2.ggScrollPosY, me._scrollarea_2__vertScrollBg.offsetHeight - me._scrollarea_2__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_2.ggScrollPosY <= 0)) {
					me._scrollarea_2.ggScrollPosY = Math.max(me._scrollarea_2.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_2__vertScrollFg.style.top = me._scrollarea_2.ggScrollPosY + 'px';
			me._scrollarea_2__content.style.top = -(Math.round(me._scrollarea_2.ggScrollPosY / me._scrollarea_2.ggVPercentVisible)) + me._scrollarea_2.ggContentTopOffset + 'px';
			me._scrollarea_2.ggScrollPosYPercent = (me._scrollarea_2__vertScrollFg.offsetTop / me._scrollarea_2__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scrollarea_2.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_2.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_2.ggHPercentVisible);
					me._scrollarea_2.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_2.offsetWidth - (me._scrollarea_2.ggVertScrollVisible ? 6 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_2.offsetWidth - (me._scrollarea_2.ggVertScrollVisible ? 6 : 0))) * me._scrollarea_2.ggHPercentVisible);
					me._scrollarea_2.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_2.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_2.ggVPercentVisible);
					me._scrollarea_2.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_2.offsetHeight - (me._scrollarea_2.ggHorScrollVisible ? 6 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_2.offsetHeight - (me._scrollarea_2.ggHorScrollVisible ? 6 : 0))) * me._scrollarea_2.ggVPercentVisible);
					me._scrollarea_2.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_2.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._scrollarea_2.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._scrollarea_2__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_2.ggDragInertiaX *= 0.65;
					me._scrollarea_2.ggDragInertiaY *= 0.65;
					me._scrollarea_2.ggScrollByX(-me._scrollarea_2.ggDragInertiaX);
					me._scrollarea_2.ggScrollByY(-me._scrollarea_2.ggDragInertiaY);
					if (Math.abs(me._scrollarea_2.ggDragInertiaX) < 1.0 && Math.abs(me._scrollarea_2.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._scrollarea_2__content.ontouchend = null;
				me._scrollarea_2__content.ontouchmove = null;
				me._scrollarea_2__content.onpointerup = null;
				me._scrollarea_2__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._scrollarea_2__content.onpointerup = me._scrollarea_2__content.ontouchend;
		}
			me._scrollarea_2__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._scrollarea_2.ggDragLastX;
				var diffY = (t ? t[0].clientY : e.clientY) - me._scrollarea_2.ggDragLastY;
				me._scrollarea_2.ggDragInertiaX = diffX;
				me._scrollarea_2.ggDragInertiaY = diffY;
				me._scrollarea_2.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._scrollarea_2.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._scrollarea_2.ggScrollByX(-diffX);
				me._scrollarea_2.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._scrollarea_2__content.onpointermove = me._scrollarea_2__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elHorScrollBg = me._scrollarea_2__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 301px; height: 6px; background-color: rgba(248,169,27,0.392157); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._scrollarea_2__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 301px; height: 6px; background-color: rgba(248,169,27,1); pointer-events: auto;');
		me._scrollarea_2.ggScrollPosX = 0;
		me._scrollarea_2.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_2.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_2.ggDragInertiaX *= 0.65;
					me._scrollarea_2.ggScrollByX(me._scrollarea_2.ggDragInertiaX);
					if (Math.abs(me._scrollarea_2.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._scrollarea_2.ggDragLastX;
				me._scrollarea_2.ggDragInertiaX = diffX;
				me._scrollarea_2.ggDragLastX = e.clientX;
				me._scrollarea_2.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_2.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_2.ggDragInertiaX *= 0.65;
					me._scrollarea_2.ggScrollByX(me._scrollarea_2.ggDragInertiaX);
					if (Math.abs(me._scrollarea_2.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._scrollarea_2.ggDragLastX;
				me._scrollarea_2.ggDragInertiaX = diffX;
				me._scrollarea_2.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._scrollarea_2.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._scrollarea_2.ggScrollWidth;
			if (e.offsetX < me._scrollarea_2.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._scrollarea_2.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_2__horScrollBg.getBoundingClientRect();
			var diffX = me._scrollarea_2.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._scrollarea_2.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._scrollarea_2.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._scrollarea_2.ggScrollByXSmooth(20 * wheelDelta);
		});
		elVertScrollBg = me._scrollarea_2__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 6px; height: 225px; background-color: rgba(248,169,27,0.392157); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._scrollarea_2__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 6px; height: 225px; background-color: rgba(248,169,27,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._scrollarea_2.ggScrollPosY = 0;
		me._scrollarea_2.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_2.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_2.ggDragInertiaY *= 0.65;
					me._scrollarea_2.ggScrollByY(me._scrollarea_2.ggDragInertiaY);
					if (Math.abs(me._scrollarea_2.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._scrollarea_2.ggDragLastY;
				me._scrollarea_2.ggDragInertiaY = diffY;
				me._scrollarea_2.ggDragLastY = e.clientY;
				me._scrollarea_2.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_2.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_2.ggDragInertiaY *= 0.65;
					me._scrollarea_2.ggScrollByY(me._scrollarea_2.ggDragInertiaY);
					if (Math.abs(me._scrollarea_2.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._scrollarea_2.ggDragLastY;
				me._scrollarea_2.ggDragInertiaY = diffY;
				me._scrollarea_2.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._scrollarea_2.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._scrollarea_2.ggScrollHeight;
			if (e.offsetY < me._scrollarea_2.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_2.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_2__vertScrollBg.getBoundingClientRect();
			var diffY = me._scrollarea_2.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._scrollarea_2.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_2.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._scrollarea_2.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me._scrollarea_2__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 6px; height: 6px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : 225px;';
		hs+='left : -10000px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 171px;';
		hs+='visibility : hidden;';
		hs+='width : 301px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._scrollarea_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollarea_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 6;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (6/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = -(Math.round(me._scrollarea_2.ggScrollPosY / me._scrollarea_2.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._scrollarea_2__horScrollBg.style.visibility = 'inherit';
					me._scrollarea_2__horScrollFg.style.visibility = 'inherit';
					me._scrollarea_2.ggHorScrollVisible = true;
				} else {
					me._scrollarea_2__horScrollBg.style.visibility = 'hidden';
					me._scrollarea_2__horScrollFg.style.visibility = 'hidden';
					me._scrollarea_2.ggHorScrollVisible = false;
				}
				if ((me._scrollarea_2.ggHorScrollVisible && contentHeight > this.offsetHeight - 6) || (!me._scrollarea_2.ggHorScrollVisible && contentHeight > this.offsetHeight)) {
					me._scrollarea_2__vertScrollBg.style.visibility = 'inherit';
					me._scrollarea_2__vertScrollFg.style.visibility = 'inherit';
					me._scrollarea_2.ggVertScrollVisible = true;
					if (!me._scrollarea_2.ggHorScrollVisible && (contentWidth > offsetWidthWithScale - me._scrollarea_2__vertScrollBg.getBoundingClientRect().width)) {
						me._scrollarea_2__horScrollBg.style.visibility = 'inherit';
						me._scrollarea_2__horScrollFg.style.visibility = 'inherit';
						me._scrollarea_2.ggHorScrollVisible = true;
					}
				} else {
					me._scrollarea_2__vertScrollBg.style.visibility = 'hidden';
					me._scrollarea_2__vertScrollFg.style.visibility = 'hidden';
					me._scrollarea_2.ggVertScrollVisible = false;
				}
				if(me._scrollarea_2.ggHorScrollVisible) {
					me._scrollarea_2.ggAvailableHeight = me._scrollarea_2.offsetHeight - 6;
					if (me._scrollarea_2.ggVertScrollVisible) {
						me._scrollarea_2.ggAvailableWidth = me._scrollarea_2.offsetWidth - 6;
						me._scrollarea_2.ggAvailableWidthWithScale = me._scrollarea_2.getBoundingClientRect().width - me._scrollarea_2__horScrollBg.getBoundingClientRect().height;
					} else {
						me._scrollarea_2.ggAvailableWidth = me._scrollarea_2.offsetWidth;
						me._scrollarea_2.ggAvailableWidthWithScale = me._scrollarea_2.getBoundingClientRect().width;
					}
					me._scrollarea_2__horScrollBg.style.width = me._scrollarea_2.ggAvailableWidth + 'px';
					me._scrollarea_2.ggHPercentVisible = contentWidth != 0 ? me._scrollarea_2.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._scrollarea_2.ggHPercentVisible > 1.0) me._scrollarea_2.ggHPercentVisible = 1.0;
					me._scrollarea_2.ggScrollWidth = Math.round(me._scrollarea_2__horScrollBg.offsetWidth * me._scrollarea_2.ggHPercentVisible);
					me._scrollarea_2__horScrollFg.style.width = me._scrollarea_2.ggScrollWidth + 'px';
					me._scrollarea_2.ggScrollPosX = me._scrollarea_2.ggScrollPosXPercent * me._scrollarea_2.ggAvailableWidth;
					me._scrollarea_2.ggScrollPosX = Math.min(me._scrollarea_2.ggScrollPosX, me._scrollarea_2__horScrollBg.offsetWidth - me._scrollarea_2__horScrollFg.offsetWidth);
					me._scrollarea_2__horScrollFg.style.left = me._scrollarea_2.ggScrollPosX + 'px';
					if (me._scrollarea_2.ggHPercentVisible < 1.0) {
						me._scrollarea_2__content.style.left = -(Math.round(me._scrollarea_2.ggScrollPosX / me._scrollarea_2.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._scrollarea_2.ggAvailableHeight = me._scrollarea_2.offsetHeight;
					me._scrollarea_2.ggScrollPosX = 0;
					me._scrollarea_2.ggScrollPosXPercent = 0.0;
				}
				if(me._scrollarea_2.ggVertScrollVisible) {
					me._scrollarea_2.ggAvailableWidth = me._scrollarea_2.offsetWidth - 6;
					if (me._scrollarea_2.ggHorScrollVisible) {
						me._scrollarea_2.ggAvailableHeight = me._scrollarea_2.offsetHeight - 6;
						me._scrollarea_2.ggAvailableHeightWithScale = me._scrollarea_2.getBoundingClientRect().height - me._scrollarea_2__vertScrollBg.getBoundingClientRect().width;
						me._scrollarea_2__cornerBg.style.visibility = 'inherit';
					} else {
						me._scrollarea_2.ggAvailableHeight = me._scrollarea_2.offsetHeight;
						me._scrollarea_2.ggAvailableHeightWithScale = me._scrollarea_2.getBoundingClientRect().height;
						me._scrollarea_2__cornerBg.style.visibility = 'hidden';
					}
					me._scrollarea_2__vertScrollBg.style.height = me._scrollarea_2.ggAvailableHeight + 'px';
					me._scrollarea_2.ggVPercentVisible = contentHeight != 0 ? me._scrollarea_2.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._scrollarea_2.ggVPercentVisible > 1.0) me._scrollarea_2.ggVPercentVisible = 1.0;
					me._scrollarea_2.ggScrollHeight =  Math.round(me._scrollarea_2__vertScrollBg.offsetHeight * me._scrollarea_2.ggVPercentVisible);
					me._scrollarea_2__vertScrollFg.style.height = me._scrollarea_2.ggScrollHeight + 'px';
					me._scrollarea_2.ggScrollPosY = me._scrollarea_2.ggScrollPosYPercent * me._scrollarea_2.ggAvailableHeight;
					me._scrollarea_2.ggScrollPosY = Math.min(me._scrollarea_2.ggScrollPosY, me._scrollarea_2__vertScrollBg.offsetHeight - me._scrollarea_2__vertScrollFg.offsetHeight);
					me._scrollarea_2__vertScrollFg.style.top = me._scrollarea_2.ggScrollPosY + 'px';
					if (me._scrollarea_2.ggVPercentVisible < 1.0) {
						me._scrollarea_2__content.style.top = -(Math.round(me._scrollarea_2.ggScrollPosY / me._scrollarea_2.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
					}
				} else {
					me._scrollarea_2.ggAvailableWidth = me._scrollarea_2.offsetWidth;
					me._scrollarea_2.ggScrollPosY = 0;
					me._scrollarea_2.ggScrollPosYPercent = 0.0;
					me._scrollarea_2__content.style.top = this.ggContentTopOffset + 'px';
					me._scrollarea_2__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._scrollarea_2.ggHorScrollVisible || vertScrollWasVisible != me._scrollarea_2.ggVertScrollVisible) {
					me.updateSize(me._scrollarea_2);
					me._scrollarea_2.ggUpdatePosition();
				}
			}
		}
		me._information.appendChild(me._scrollarea_2);
		el=me._info_text_body=document.createElement('div');
		els=me._info_text_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_body";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text lumination";
		el.ggType='text';
		hs ='';
		hs+='height : 212px;';
		hs+='left : 142px;';
		hs+='position : absolute;';
		hs+='top : 192px;';
		hs+='visibility : inherit;';
		hs+='width : 285px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 285px;';
		hs+='height: 212px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._info_text_body.ggUpdateText=function() {
			var hs=player.hotspot.description;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_text_body.ggUpdateText();
		player.addListener('activehotspotchanged', function() {
			me._info_text_body.ggUpdateText();
		});
		el.appendChild(els);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_text_body.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._info_text_body.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._info_text_body.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._info_text_body.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._info_text_body.ggCurrentLogicStateScaling == 0) {
					me._info_text_body.ggParameter.sx = 1.1;
					me._info_text_body.ggParameter.sy = 1.1;
					me._info_text_body.style[domTransform]=parameterToTransform(me._info_text_body.ggParameter);
				}
				else {
					me._info_text_body.ggParameter.sx = 1;
					me._info_text_body.ggParameter.sy = 1;
					me._info_text_body.style[domTransform]=parameterToTransform(me._info_text_body.ggParameter);
				}
			}
		}
		me._info_text_body.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_text_body);
		el=me._info_title=document.createElement('div');
		els=me._info_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text lumination";
		el.ggType='text';
		hs ='';
		hs+='height : 52px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 98px;';
		hs+='visibility : inherit;';
		hs+='width : 257px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 19px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._info_title.ggUpdateText=function() {
			var hs=player.hotspot.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_title.ggUpdateText();
		player.addListener('activehotspotchanged', function() {
			me._info_title.ggUpdateText();
		});
		el.appendChild(els);
		me._info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_title.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((255-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._information.appendChild(me._info_title);
		el=me._ht_info_close=document.createElement('div');
		els=me._ht_info_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8zIiBkYXRhLW5hbWU9IkxheWVyIDMiIHZpZXdCb3g9IjAgMCA0MS4yMiA0Mi44MyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2ZpbGw6IzEwMWI0OTt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT4KIDwvZGVmcz4KIDxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeT0iMjEuNTkiIGN4PSIyMC42NyIgcj0iMTguMjciLz4KIDxyZWN0IGNsYXNzPSJjbHMtMiIgcng9IjEuMjgiIHk9IjkuMzgiIHdpZHRoPSI0LjY1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOS4yOSAyMC45Nykgcm90YXRlKC00NSkiIGhlaWdodD'+
			'0iMjQuNjUiIHg9IjE4LjM0Ii8+CiA8cmVjdCBjbGFzcz0iY2xzLTIiIHJ4PSIxLjM2IiB5PSI5LjEyIiB3aWR0aD0iNC42NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjEuMjEgLTguMzMpIHJvdGF0ZSg0NSkiIGhlaWdodD0iMjQuNjUiIHg9IjE4LjM0Ii8+Cjwvc3ZnPgo=';
		me._ht_info_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_info_close";
		el.ggDx=142;
		el.ggDy=-172;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_info_close.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['ht_info_close'] == true)) || 
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_info_close.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_info_close.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_info_close.style[domTransition]='width 0s, height 0s, ' + cssPrefix + 'transform 0s';
				if (me._ht_info_close.ggCurrentLogicStateSize == 0) {
					me._ht_info_close.style.width='36px';
					me._ht_info_close.style.height='36px';
					skin.updateSize(me._ht_info_close);
				}
				else {
					me._ht_info_close.style.width='32px';
					me._ht_info_close.style.height='32px';
					skin.updateSize(me._ht_info_close);
				}
			}
		}
		me._ht_info_close.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_info_close.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_info_close.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_info_close.style[domTransition]='width 0s, height 0s, ' + cssPrefix + 'transform 0s';
				if (me._ht_info_close.ggCurrentLogicStateScaling == 0) {
					me._ht_info_close.ggParameter.sx = 1.5;
					me._ht_info_close.ggParameter.sy = 1.5;
					me._ht_info_close.style[domTransform]=parameterToTransform(me._ht_info_close.ggParameter);
				}
				else {
					me._ht_info_close.ggParameter.sx = 1;
					me._ht_info_close.ggParameter.sy = 1;
					me._ht_info_close.style[domTransform]=parameterToTransform(me._ht_info_close.ggParameter);
				}
			}
		}
		me._ht_info_close.onclick=function (e) {
			player.setVariableValue('vis_info_popup', false);
		}
		me._ht_info_close.onmouseover=function (e) {
			me.elementMouseOver['ht_info_close']=true;
			me._ht_info_close.logicBlock_size();
		}
		me._ht_info_close.onmouseout=function (e) {
			me.elementMouseOver['ht_info_close']=false;
			me._ht_info_close.logicBlock_size();
		}
		me._ht_info_close.ontouchend=function (e) {
			me.elementMouseOver['ht_info_close']=false;
			me._ht_info_close.logicBlock_size();
		}
		me._ht_info_close.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._information.appendChild(me._ht_info_close);
		me.divSkin.appendChild(me._information);
		el=me._video_popup_file=document.createElement('div');
		el.ggId="video_popup_file";
		el.ggDx=0;
		el.ggDy=-7.22;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 70%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_file.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_file.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._video_popup_file.ggCurrentLogicStateSize != newLogicStateSize) {
				me._video_popup_file.ggCurrentLogicStateSize = newLogicStateSize;
				me._video_popup_file.style[domTransition]='width 0s, height 0s';
				if (me._video_popup_file.ggCurrentLogicStateSize == 0) {
					me._video_popup_file.style.width='90%';
					me._video_popup_file.style.height='90%';
					skin.updateSize(me._video_popup_file);
				}
				else {
					me._video_popup_file.style.width='70%';
					me._video_popup_file.style.height='70%';
					skin.updateSize(me._video_popup_file);
				}
			}
		}
		me._video_popup_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_popup_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_file.style[domTransition]='width 0s, height 0s';
				if (me._video_popup_file.ggCurrentLogicStateVisible == 0) {
					me._video_popup_file.style.visibility=(Number(me._video_popup_file.style.opacity)>0||!me._video_popup_file.style.opacity)?'inherit':'hidden';
					me._video_popup_file.ggVisible=true;
				}
				else {
					me._video_popup_file.style.visibility="hidden";
					me._video_popup_file.ggVisible=false;
				}
			}
		}
		me._video_popup_file.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._loading_video_file=document.createElement('div');
		els=me._loading_video_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgZmlsbD0id2hpdGUiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCAzMiAzMiI+CiA8Y2lyY2xlIGN5PSIzIiBjeD0iMTYiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiB0cmFuc2Zvcm09In'+
			'JvdGF0ZSg0NSAxNiAxNikiIGN4PSIxNiIgcj0iMCI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHZhbHVlcz0iMDszOzA7MCIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49IjAuMTI1cyIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgMTYgMTYpIiBjeD0iMTYiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjA7Mzsw'+
			'OzAiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjI1cyIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoMTM1IDE2IDE2KSIgY3g9IjE2IiByPSIwIj4KICA8YW5pbWF0ZSBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgdmFsdWVzPSIwOzM7MDswIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMC4zNzVzIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMi'+
			'AwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYgMTYpIiBjeD0iMTYiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjVzIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSgyMjUgMTYgMTYpIiBjeD0iMTYi'+
			'IHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjYyNXMiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDI3MCAxNiAxNikiIGN4PSIxNiIgcj0iMCI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHZhbHVlcz0iMDszOzA7MCIgYXR0cmlidXRlTmFtZT0iciIgYm'+
			'VnaW49IjAuNzVzIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSgzMTUgMTYgMTYpIiBjeD0iMTYiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjg3NXMiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIGN4PSIxNiIgcj0iMCI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHZhbHVlcz0iMDszOzA7MCIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49IjAuNXMiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44Ii8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_video_file__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_video_file";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_video_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_video_file.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._video_popup_file.appendChild(me._loading_video_file);
		el=me._popup_video_file=document.createElement('div');
		me._popup_video_file.seekbars = [];
		me._popup_video_file.seekbars.push('seekbar_file');
		me._popup_video_file.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._popup_video_file.seekbars.length; i++) {
					var seekbar = me.findElements(me._popup_video_file.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._popup_video_file.hasChildNodes()) {
				me._popup_video_file.removeChild(me._popup_video_file.lastChild);
			}
			if (me._popup_video_file__vid) {
				me._popup_video_file__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
			if (me._popup_video_file.ggVideoNotLoaded ==false && me._popup_video_file.ggDeactivate) { me._popup_video_file.ggDeactivate(); }
				me._popup_video_file.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('popup_video_file');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._popup_video_file.ggVideoNotLoaded = false;
			me._popup_video_file__vid=document.createElement('video');
			me._popup_video_file__vid.className='ggskin ggskin_video';
			me._popup_video_file__vid.setAttribute('width', '100%');
			me._popup_video_file__vid.setAttribute('height', '100%');
			me._popup_video_file__vid.setAttribute('controlsList', 'nodownload');
			me._popup_video_file__vid.setAttribute('oncontextmenu', 'return false;');
			me._popup_video_file__source=document.createElement('source');
			me._popup_video_file__source.setAttribute('src', media);
			me._popup_video_file__vid.setAttribute('playsinline', 'playsinline');
			me._popup_video_file__vid.setAttribute('style', ';');
			me._popup_video_file__vid.style.outline = 'none';
			me._popup_video_file__vid.appendChild(me._popup_video_file__source);
			me._popup_video_file.appendChild(me._popup_video_file__vid);
			var videoEl = player.registerVideoElement('popup_video_file', me._popup_video_file__vid);
			videoEl.autoplay = false;
			notifySeekbars();
			me._popup_video_file.ggVideoSource = media;
		}
		el.ggId="popup_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._popup_video_file.ggIsActive=function() {
			if (me._popup_video_file__vid != null) {
				return (me._popup_video_file__vid.paused == false && me._popup_video_file__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_video_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_popup_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_video_file.style[domTransition]='';
				if (me._popup_video_file.ggCurrentLogicStateVisible == 0) {
					me._popup_video_file.style.visibility=(Number(me._popup_video_file.style.opacity)>0||!me._popup_video_file.style.opacity)?'inherit':'hidden';
					if (me._popup_video_file.ggVideoNotLoaded) {
						me._popup_video_file.ggInitMedia(me._popup_video_file.ggVideoSource);
					}
					me._popup_video_file.ggVisible=true;
				}
				else {
					me._popup_video_file.style.visibility="hidden";
					me._popup_video_file.ggInitMedia('');
					me._popup_video_file.ggVisible=false;
				}
			}
		}
		me._popup_video_file.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_file.appendChild(me._popup_video_file);
		me.divSkin.appendChild(me._video_popup_file);
		el=me._video_popup_controls_file=document.createElement('div');
		el.ggId="video_popup_controls_file";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 60px;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 284px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_controls_file.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_controls_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_popup_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_controls_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_controls_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_controls_file.style[domTransition]='';
				if (me._video_popup_controls_file.ggCurrentLogicStateVisible == 0) {
					me._video_popup_controls_file.style.visibility=(Number(me._video_popup_controls_file.style.opacity)>0||!me._video_popup_controls_file.style.opacity)?'inherit':'hidden';
					me._video_popup_controls_file.ggVisible=true;
				}
				else {
					me._video_popup_controls_file.style.visibility="hidden";
					me._video_popup_controls_file.ggVisible=false;
				}
			}
		}
		me._video_popup_controls_file.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._seekbar_file=document.createElement('div');
		me._seekbar_file__playhead=document.createElement('div');
		me._seekbar_file.mediaEl = null;
		el.ggId="seekbar_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 11px;';
		hs+='left : -2px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 246px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._seekbar_file.connectToMediaEl = function() {
			var disableSeekbar = function() {
				me._seekbar_file__playhead.style.visibility = 'hidden';
				me._seekbar_file.style.background = '#ffffff';
				me._seekbar_file.ggConnected = false;
			}
			if (me._seekbar_file.mediaEl != null) {
				me._seekbar_file.mediaEl.removeEventListener('progress', me._seekbar_file.updatePlayback);
				me._seekbar_file.mediaEl.removeEventListener('canplay', me._seekbar_file.updatePlayback);
				me._seekbar_file.mediaEl.removeEventListener('timeupdate', me._seekbar_file.updatePlayback);
				if (me._seekbar_file.ggActivate) {
					me._seekbar_file.mediaEl.removeEventListener('play', me._seekbar_file.ggActivate);
				}
				if (me._seekbar_file.ggDeactivate) {
					me._seekbar_file.mediaEl.removeEventListener('ended', me._seekbar_file.ggDeactivate);
					me._seekbar_file.mediaEl.removeEventListener('pause', me._seekbar_file.ggDeactivate);
				}
				if (me._seekbar_file.ggMediaEnded) {
					me._seekbar_file.mediaEl.removeEventListener('ended', me._seekbar_file.ggMediaEnded);
				}
			}
			me._seekbar_file.mediaEl = player.getMediaObject('popup_video_file');
			if (me._seekbar_file.mediaEl != null) {
				me._seekbar_file__playhead.style.visibility = 'inherit';
				me._seekbar_file__playhead.style.left = '2px';
				me._seekbar_file.mediaEl.addEventListener('progress', me._seekbar_file.updatePlayback);
				me._seekbar_file.mediaEl.addEventListener('canplay', me._seekbar_file.updatePlayback);
				me._seekbar_file.mediaEl.addEventListener('timeupdate', me._seekbar_file.updatePlayback);
				if (me._seekbar_file.ggActivate) {
					me._seekbar_file.mediaEl.addEventListener('play', me._seekbar_file.ggActivate);
				}
				if (me._seekbar_file.ggDeactivate) {
					me._seekbar_file.mediaEl.addEventListener('ended', me._seekbar_file.ggDeactivate);
					me._seekbar_file.mediaEl.addEventListener('pause', me._seekbar_file.ggDeactivate);
				}
				if (me._seekbar_file.ggMediaEnded) {
					me._seekbar_file.mediaEl.addEventListener('ended', me._seekbar_file.ggMediaEnded);
				}
			me._seekbar_file.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements('popup_video_file');
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._seekbar_file.updatePlayback = function() {
			if (!me._seekbar_file.ggConnected) return;
			if (me._seekbar_file.mediaEl != null) {
				if (me._seekbar_file.mediaEl.readyState) {
					var percent = me._seekbar_file.mediaEl.currentTime / me._seekbar_file.mediaEl.duration;
					var playheadpos = Math.round((me._seekbar_file.clientWidth - 2 * 8 + 0) * percent);
					playheadpos += 2;
					me._seekbar_file__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (8 / me._seekbar_file.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, #27356d 0%, #27356d ' + currPos + '%';
					for (var i = 0; i < me._seekbar_file.mediaEl.buffered.length; i++) {
						var rangeStart = Math.round((me._seekbar_file.mediaEl.buffered.start(i) / me._seekbar_file.mediaEl.duration) * 100.0);
						var rangeEnd = Math.ceil((me._seekbar_file.mediaEl.buffered.end(i) / me._seekbar_file.mediaEl.duration) * 100.0);
						if (rangeEnd > currPos) {
							if (rangeStart < currPos) {
								gradientString += ', #18539b ' + currPos + '%';
							} else {
								gradientString += ', #ffffff ' + currPos + '%, #ffffff ' + rangeStart + '%';
								gradientString += ', #18539b ' + rangeStart + '%';
							}
								gradientString += ', #18539b ' + rangeEnd + '%';
							currPos = rangeEnd;
						}
					}
					if (currPos < 100) {
						gradientString += ', #ffffff ' + currPos + '%';
					}
					gradientString += ')';
					me._seekbar_file.style.background = gradientString;
				}
			}
		}
		me._seekbar_file.appendChild(me._seekbar_file__playhead);
		hs+='background: #ffffff;';
		hs+='border: 0px solid #101044;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		var hs_playhead = 'height: 11px;';
		hs_playhead += 'width: 11px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: 2px;';
		hs_playhead += 'top: 0px;';
		hs_playhead += 'border-radius: 6;';
		hs_playhead += cssPrefix + 'border-radius: 6px;';
		hs_playhead += 'background-color: rgba(24,83,155,1);';
		hs_playhead += 'pointer-events: none;';
		me._seekbar_file.setAttribute('style', hs);
		me._seekbar_file__playhead.setAttribute('style', hs_playhead);
		me._seekbar_file.ggIsActive=function() {
			if (me._seekbar_file.mediaEl != null) {
				return (me._seekbar_file.mediaEl.paused == false && me._seekbar_file.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._seekbar_file.onmousedown=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_file.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
					me._seekbar_file.mediaEl.currentTime = seekpos;
				}
			}
		}
		me._seekbar_file.onmousemove=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_file.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
					me._seekbar_file.mediaEl.currentTime = seekpos;
				}
			}
		}
		me._seekbar_file.ontouchend=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_file.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
					me._seekbar_file.mediaEl.currentTime = seekpos;
				}
			}
		}
		me._seekbar_file.ggActivate=function () {
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility=(Number(me._ht_video_pause_file.style.opacity)>0||!me._ht_video_pause_file.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_file.ggVisible=true;
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility='hidden';
			me._ht_video_play_file.ggVisible=false;
		}
		me._seekbar_file.ggDeactivate=function () {
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility=(Number(me._ht_video_play_file.style.opacity)>0||!me._ht_video_play_file.style.opacity)?'inherit':'hidden';
			me._ht_video_play_file.ggVisible=true;
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility='hidden';
			me._ht_video_pause_file.ggVisible=false;
		}
		me._seekbar_file.ggUpdatePosition=function (useTransition) {
		}
		me._seekbar_file.ggNodeChange=function () {
			me._seekbar_file.connectToMediaEl();
		}
		me._video_popup_controls_file.appendChild(me._seekbar_file);
		el=me._ht_video_play_file=document.createElement('div');
		els=me._ht_video_play_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8zIiBkYXRhLW5hbWU9IkxheWVyIDMiIHZpZXdCb3g9IjAgMCA0MS4yMiA0Mi44MyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2ZpbGw6IzEwMWI0OTt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT4KIDwvZGVmcz4KIDxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeT0iMjEuNTkiIGN4PSIyMC42NyIgcj0iMTguMjciLz4KIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTEzLjc3LDEyLjM2VjMwLjQ3YS42Ni42NiwwLDAsMCwxLC41N0wzMC42NiwyMmEuNjUuNjUsMCwwLDAsMC0xLjEzTDE0Ljc1LDExLjc5QS42Ni'+
			'42NiwwLDAsMCwxMy43NywxMi4zNloiLz4KPC9zdmc+Cg==';
		me._ht_video_play_file__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_play_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_play_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_video_play_file.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['ht_video_play_file'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_video_play_file.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_video_play_file.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_video_play_file.style[domTransition]='width 0s, height 0s';
				if (me._ht_video_play_file.ggCurrentLogicStateSize == 0) {
					me._ht_video_play_file.style.width='27px';
					me._ht_video_play_file.style.height='27px';
					skin.updateSize(me._ht_video_play_file);
				}
				else {
					me._ht_video_play_file.style.width='25px';
					me._ht_video_play_file.style.height='25px';
					skin.updateSize(me._ht_video_play_file);
				}
			}
		}
		me._ht_video_play_file.onclick=function (e) {
			if (me._popup_video_file.ggApiPlayer) {
				if (me._popup_video_file.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._popup_video_file.ggApiPlayer.playVideo();
					};
					if (me._popup_video_file.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._popup_video_file.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._popup_video_file.ggApiPlayerType == 'vimeo') {
					me._popup_video_file.ggApiPlayer.play();
				}
			} else {
				player.playSound("popup_video_file","1");
			}
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility='hidden';
			me._ht_video_play_file.ggVisible=false;
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility=(Number(me._ht_video_pause_file.style.opacity)>0||!me._ht_video_pause_file.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_file.ggVisible=true;
		}
		me._ht_video_play_file.onmouseover=function (e) {
			me.elementMouseOver['ht_video_play_file']=true;
			me._ht_video_play_file.logicBlock_size();
		}
		me._ht_video_play_file.onmouseout=function (e) {
			me.elementMouseOver['ht_video_play_file']=false;
			me._ht_video_play_file.logicBlock_size();
		}
		me._ht_video_play_file.ontouchend=function (e) {
			me.elementMouseOver['ht_video_play_file']=false;
			me._ht_video_play_file.logicBlock_size();
		}
		me._ht_video_play_file.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_controls_file.appendChild(me._ht_video_play_file);
		el=me._ht_video_pause_file=document.createElement('div');
		els=me._ht_video_pause_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8zIiBkYXRhLW5hbWU9IkxheWVyIDMiIHZpZXdCb3g9IjAgMCA0MS4yMiA0Mi44MyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2ZpbGw6IzEwMWI0OTt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT4KIDwvZGVmcz4KIDxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeT0iMjEuNTkiIGN4PSIyMC42NyIgcj0iMTguMjciLz4KIDxyZWN0IGNsYXNzPSJjbHMtMiIgcng9IjEuMjgiIHk9IjEwLjg3IiB3aWR0aD0iNC4wNCIgaGVpZ2h0PSIyMS40NCIgeD0iMjMuMDkiLz4KIDxyZWN0IGNsYXNzPSJjbHMtMiIgcng9Ij'+
			'EuMzYiIHk9IjEwLjg3IiB3aWR0aD0iNC4wNCIgaGVpZ2h0PSIyMS40NCIgeD0iMTUuMjkiLz4KPC9zdmc+Cg==';
		me._ht_video_pause_file__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_pause_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_pause_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_video_pause_file.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['ht_video_pause_file'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_video_pause_file.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_video_pause_file.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_video_pause_file.style[domTransition]='width 0s, height 0s';
				if (me._ht_video_pause_file.ggCurrentLogicStateSize == 0) {
					me._ht_video_pause_file.style.width='27px';
					me._ht_video_pause_file.style.height='27px';
					skin.updateSize(me._ht_video_pause_file);
				}
				else {
					me._ht_video_pause_file.style.width='25px';
					me._ht_video_pause_file.style.height='25px';
					skin.updateSize(me._ht_video_pause_file);
				}
			}
		}
		me._ht_video_pause_file.onclick=function (e) {
			if (me._popup_video_file.ggApiPlayer) {
				if (me._popup_video_file.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._popup_video_file.ggApiPlayer.pauseVideo();
					};
					if (me._popup_video_file.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._popup_video_file.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._popup_video_file.ggApiPlayerType == 'vimeo') {
					me._popup_video_file.ggApiPlayer.pause();
				}
			} else {
				player.pauseSound("popup_video_file");
			}
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility='hidden';
			me._ht_video_pause_file.ggVisible=false;
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility=(Number(me._ht_video_play_file.style.opacity)>0||!me._ht_video_play_file.style.opacity)?'inherit':'hidden';
			me._ht_video_play_file.ggVisible=true;
		}
		me._ht_video_pause_file.onmouseover=function (e) {
			me.elementMouseOver['ht_video_pause_file']=true;
			me._ht_video_pause_file.logicBlock_size();
		}
		me._ht_video_pause_file.onmouseout=function (e) {
			me.elementMouseOver['ht_video_pause_file']=false;
			me._ht_video_pause_file.logicBlock_size();
		}
		me._ht_video_pause_file.ontouchend=function (e) {
			me.elementMouseOver['ht_video_pause_file']=false;
			me._ht_video_pause_file.logicBlock_size();
		}
		me._ht_video_pause_file.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_controls_file.appendChild(me._ht_video_pause_file);
		me.divSkin.appendChild(me._video_popup_controls_file);
		el=me._video_popup_url=document.createElement('div');
		el.ggId="video_popup_url";
		el.ggDx=0;
		el.ggDy=0.46;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 62.2222%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 56.1458%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_url.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_popup_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_url.style[domTransition]='';
				if (me._video_popup_url.ggCurrentLogicStateVisible == 0) {
					me._video_popup_url.style.visibility=(Number(me._video_popup_url.style.opacity)>0||!me._video_popup_url.style.opacity)?'inherit':'hidden';
					me._video_popup_url.ggVisible=true;
				}
				else {
					me._video_popup_url.style.visibility="hidden";
					me._video_popup_url.ggVisible=false;
				}
			}
		}
		me._video_popup_url.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._loading_video_url=document.createElement('div');
		els=me._loading_video_url__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgZmlsbD0id2hpdGUiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCAzMiAzMiI+CiA8Y2lyY2xlIGN5PSIzIiBjeD0iMTYiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiIGNhbGNNb2RlPSJzcGxpbmUiIGJlZ2luPSIwIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiB0cmFuc2Zvcm09In'+
			'JvdGF0ZSg0NSAxNiAxNikiIGN4PSIxNiIgcj0iMCI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHZhbHVlcz0iMDszOzA7MCIgYXR0cmlidXRlTmFtZT0iciIgY2FsY01vZGU9InNwbGluZSIgYmVnaW49IjAuMTI1cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgMTYgMTYpIiBjeD0iMTYiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjA7Mzsw'+
			'OzAiIGF0dHJpYnV0ZU5hbWU9InIiIGNhbGNNb2RlPSJzcGxpbmUiIGJlZ2luPSIwLjI1cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoMTM1IDE2IDE2KSIgY3g9IjE2IiByPSIwIj4KICA8YW5pbWF0ZSBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgdmFsdWVzPSIwOzM7MDswIiBhdHRyaWJ1dGVOYW1lPSJyIiBjYWxjTW9kZT0ic3BsaW5lIiBiZWdpbj0iMC4zNzVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMi'+
			'AwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYgMTYpIiBjeD0iMTYiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiIGNhbGNNb2RlPSJzcGxpbmUiIGJlZ2luPSIwLjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSgyMjUgMTYgMTYpIiBjeD0iMTYi'+
			'IHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiIGNhbGNNb2RlPSJzcGxpbmUiIGJlZ2luPSIwLjYyNXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDI3MCAxNiAxNikiIGN4PSIxNiIgcj0iMCI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHZhbHVlcz0iMDszOzA7MCIgYXR0cmlidXRlTmFtZT0iciIgY2'+
			'FsY01vZGU9InNwbGluZSIgYmVnaW49IjAuNzVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSgzMTUgMTYgMTYpIiBjeD0iMTYiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiIGNhbGNNb2RlPSJzcGxpbmUiIGJlZ2luPSIwLjg3NXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIGN4PSIxNiIgcj0iMCI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHZhbHVlcz0iMDszOzA7MCIgYXR0cmlidXRlTmFtZT0iciIgY2FsY01vZGU9InNwbGluZSIgYmVnaW49IjAuNXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44Ii8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_video_url__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_video_url";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_video_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_video_url.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._video_popup_url.appendChild(me._loading_video_url);
		el=me._popup_video_url=document.createElement('div');
		me._popup_video_url.seekbars = [];
		me._popup_video_url.seekbars.push('seekbar_url');
		me._popup_video_url.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._popup_video_url.seekbars.length; i++) {
					var seekbar = me.findElements(me._popup_video_url.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._popup_video_url.hasChildNodes()) {
				me._popup_video_url.removeChild(me._popup_video_url.lastChild);
			}
			if (me._popup_video_url__vid) {
				me._popup_video_url__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
			if (me._popup_video_url.ggVideoNotLoaded ==false && me._popup_video_url.ggDeactivate) { me._popup_video_url.ggDeactivate(); }
				me._popup_video_url.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('popup_video_url');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._popup_video_url.ggVideoNotLoaded = false;
			me._popup_video_url__vid=document.createElement('video');
			me._popup_video_url__vid.className='ggskin ggskin_video';
			me._popup_video_url__vid.setAttribute('width', '100%');
			me._popup_video_url__vid.setAttribute('height', '100%');
			me._popup_video_url__vid.setAttribute('controlsList', 'nodownload');
			me._popup_video_url__vid.setAttribute('oncontextmenu', 'return false;');
			me._popup_video_url__source=document.createElement('source');
			me._popup_video_url__source.setAttribute('src', media);
			me._popup_video_url__vid.setAttribute('playsinline', 'playsinline');
			me._popup_video_url__vid.setAttribute('style', ';');
			me._popup_video_url__vid.style.outline = 'none';
			me._popup_video_url__vid.appendChild(me._popup_video_url__source);
			me._popup_video_url.appendChild(me._popup_video_url__vid);
			var videoEl = player.registerVideoElement('popup_video_url', me._popup_video_url__vid);
			videoEl.autoplay = false;
			notifySeekbars();
			me._popup_video_url.ggVideoSource = media;
		}
		el.ggId="popup_video_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 3.53%;';
		hs+='position : absolute;';
		hs+='top : -0.14%;';
		hs+='visibility : hidden;';
		hs+='width : 92.3933%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._popup_video_url.ggIsActive=function() {
			if (me._popup_video_url__vid != null) {
				return (me._popup_video_url__vid.paused == false && me._popup_video_url__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_video_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_popup_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_video_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_video_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_video_url.style[domTransition]='';
				if (me._popup_video_url.ggCurrentLogicStateVisible == 0) {
					me._popup_video_url.style.visibility=(Number(me._popup_video_url.style.opacity)>0||!me._popup_video_url.style.opacity)?'inherit':'hidden';
					if (me._popup_video_url.ggVideoNotLoaded) {
						me._popup_video_url.ggInitMedia(me._popup_video_url.ggVideoSource);
					}
					me._popup_video_url.ggVisible=true;
				}
				else {
					me._popup_video_url.style.visibility="hidden";
					me._popup_video_url.ggInitMedia('');
					me._popup_video_url.ggVisible=false;
				}
			}
		}
		me._popup_video_url.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_url.appendChild(me._popup_video_url);
		me.divSkin.appendChild(me._video_popup_url);
		el=me._video_popup_youtube=document.createElement('div');
		el.ggId="video_popup_youtube";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 70%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_youtube.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_youtube.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._video_popup_youtube.ggCurrentLogicStateSize != newLogicStateSize) {
				me._video_popup_youtube.ggCurrentLogicStateSize = newLogicStateSize;
				me._video_popup_youtube.style[domTransition]='width 0s, height 0s';
				if (me._video_popup_youtube.ggCurrentLogicStateSize == 0) {
					me._video_popup_youtube.style.width='90%';
					me._video_popup_youtube.style.height='90%';
					skin.updateSize(me._video_popup_youtube);
				}
				else {
					me._video_popup_youtube.style.width='70%';
					me._video_popup_youtube.style.height='70%';
					skin.updateSize(me._video_popup_youtube);
				}
			}
		}
		me._video_popup_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_popup_youtube') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_youtube.style[domTransition]='width 0s, height 0s';
				if (me._video_popup_youtube.ggCurrentLogicStateVisible == 0) {
					me._video_popup_youtube.style.visibility=(Number(me._video_popup_youtube.style.opacity)>0||!me._video_popup_youtube.style.opacity)?'inherit':'hidden';
					me._video_popup_youtube.ggVisible=true;
				}
				else {
					me._video_popup_youtube.style.visibility="hidden";
					me._video_popup_youtube.ggVisible=false;
				}
			}
		}
		me._video_popup_youtube.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._loading_video_youtube=document.createElement('div');
		els=me._loading_video_youtube__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgZmlsbD0id2hpdGUiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCAzMiAzMiI+CiA8Y2lyY2xlIGN5PSIzIiBjeD0iMTYiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiB0cmFuc2Zvcm09In'+
			'JvdGF0ZSg0NSAxNiAxNikiIGN4PSIxNiIgcj0iMCI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHZhbHVlcz0iMDszOzA7MCIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49IjAuMTI1cyIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgMTYgMTYpIiBjeD0iMTYiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjA7Mzsw'+
			'OzAiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjI1cyIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoMTM1IDE2IDE2KSIgY3g9IjE2IiByPSIwIj4KICA8YW5pbWF0ZSBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgdmFsdWVzPSIwOzM7MDswIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMC4zNzVzIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMi'+
			'AwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYgMTYpIiBjeD0iMTYiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjVzIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSgyMjUgMTYgMTYpIiBjeD0iMTYi'+
			'IHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjYyNXMiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDI3MCAxNiAxNikiIGN4PSIxNiIgcj0iMCI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHZhbHVlcz0iMDszOzA7MCIgYXR0cmlidXRlTmFtZT0iciIgYm'+
			'VnaW49IjAuNzVzIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSgzMTUgMTYgMTYpIiBjeD0iMTYiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjg3NXMiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIGN4PSIxNiIgcj0iMCI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHZhbHVlcz0iMDszOzA7MCIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49IjAuNXMiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44Ii8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_video_youtube__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_video_youtube";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_video_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_video_youtube.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._video_popup_youtube.appendChild(me._loading_video_youtube);
		el=me._popup_video_youtube=document.createElement('div');
		me._popup_video_youtube.seekbars = [];
			me._popup_video_youtube.ggYoutubeApiReady = function() { me._popup_video_youtube.ggYoutubeApiLoaded = true;}
		me._popup_video_youtube.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._popup_video_youtube.seekbars.length; i++) {
					var seekbar = me.findElements(me._popup_video_youtube.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._popup_video_youtube.hasChildNodes()) {
				me._popup_video_youtube.removeChild(me._popup_video_youtube.lastChild);
			}
			if(media == '') {
				notifySeekbars();
			if (me._popup_video_youtube.ggVideoNotLoaded ==false && me._popup_video_youtube.ggDeactivate) { me._popup_video_youtube.ggDeactivate(); }
				me._popup_video_youtube.ggVideoNotLoaded = true;
				return;
			}
			me._popup_video_youtube.ggVideoNotLoaded = false;
			me._popup_video_youtube__vid=document.createElement('iframe');
			me._popup_video_youtube__vid.className='ggskin ggskin_video';
			var ggVideoParams = '?autoplay=1&amp;controls=1&amp;loop=0&amp;enablejsapi=1&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + media + ggVideoParams;
			me._popup_video_youtube__vid.setAttribute('src', ggVideoUrl);
			me._popup_video_youtube__vid.setAttribute('width', '100%');
			me._popup_video_youtube__vid.setAttribute('height', '100%');
			me._popup_video_youtube__vid.setAttribute('allow', 'autoplay');
			me._popup_video_youtube__vid.setAttribute('allowfullscreen', 'true');
			me._popup_video_youtube__vid.setAttribute('style', 'border:none; ; ;');
			me._popup_video_youtube.appendChild(me._popup_video_youtube__vid);
			me._popup_video_youtube__vid.id = 'youtube-video';
			me._popup_video_youtube.ggYoutubeApiReady = function() {
				me._popup_video_youtube.ggApiPlayerType = 'youtube';
				me._popup_video_youtube.ggApiPlayerReady = false;
				me._popup_video_youtube.ggApiPlayer = new YT.Player('youtube-video', {
					events: {
						'onReady': function(event) {
							me._popup_video_youtube.ggApiPlayerReady = true;
						},
						'onStateChange': function(event) {
							if (event.data == 0 && me._popup_video_youtube.ggMediaEnded) {
								me._popup_video_youtube.ggMediaEnded();
							}
							if (event.data == 1 && me._popup_video_youtube.ggActivate) {
								me._popup_video_youtube.ggActivate();
							}
							if ((event.data == 0 || event.data == 2) && me._popup_video_youtube.ggDeactivate) {
								me._popup_video_youtube.ggDeactivate();
							}
						}
					}
				});
			}
			me._popup_video_youtube.ggVideoSource = media;
			if (me._popup_video_youtube.ggYoutubeApiLoaded && me._popup_video_youtube.ggYoutubeApiLoaded == true) {me._popup_video_youtube.ggYoutubeApiReady();}
		}
		el.ggId="popup_video_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0.05%;';
		hs+='position : absolute;';
		hs+='top : 0.01%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._popup_video_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_video_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_popup_youtube') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_video_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_video_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_video_youtube.style[domTransition]='';
				if (me._popup_video_youtube.ggCurrentLogicStateVisible == 0) {
					me._popup_video_youtube.style.visibility=(Number(me._popup_video_youtube.style.opacity)>0||!me._popup_video_youtube.style.opacity)?'inherit':'hidden';
					if (me._popup_video_youtube.ggVideoNotLoaded) {
						me._popup_video_youtube.ggInitMedia(me._popup_video_youtube.ggVideoSource);
					}
					me._popup_video_youtube.ggVisible=true;
				}
				else {
					me._popup_video_youtube.style.visibility="hidden";
					me._popup_video_youtube.ggInitMedia('');
					me._popup_video_youtube.ggVisible=false;
				}
			}
		}
		me._popup_video_youtube.ggActivate=function () {
			player.setVolume("_main",0);
		}
		me._popup_video_youtube.ggDeactivate=function () {
			player.setVolume("_main",1);
		}
		me._popup_video_youtube.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_youtube.appendChild(me._popup_video_youtube);
		me.divSkin.appendChild(me._video_popup_youtube);
		el=me._video_popup_controls_url=document.createElement('div');
		el.ggId="video_popup_controls_url";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 60px;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 284px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_controls_url.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_controls_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_popup_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_controls_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_controls_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_controls_url.style[domTransition]='';
				if (me._video_popup_controls_url.ggCurrentLogicStateVisible == 0) {
					me._video_popup_controls_url.style.visibility=(Number(me._video_popup_controls_url.style.opacity)>0||!me._video_popup_controls_url.style.opacity)?'inherit':'hidden';
					me._video_popup_controls_url.ggVisible=true;
				}
				else {
					me._video_popup_controls_url.style.visibility="hidden";
					me._video_popup_controls_url.ggVisible=false;
				}
			}
		}
		me._video_popup_controls_url.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._seekbar_url=document.createElement('div');
		me._seekbar_url__playhead=document.createElement('div');
		me._seekbar_url.mediaEl = null;
		el.ggId="seekbar_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 11px;';
		hs+='left : -2px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 246px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._seekbar_url.connectToMediaEl = function() {
			var disableSeekbar = function() {
				me._seekbar_url__playhead.style.visibility = 'hidden';
				me._seekbar_url.style.background = '#ffffff';
				me._seekbar_url.ggConnected = false;
			}
			if (me._seekbar_url.mediaEl != null) {
				me._seekbar_url.mediaEl.removeEventListener('progress', me._seekbar_url.updatePlayback);
				me._seekbar_url.mediaEl.removeEventListener('canplay', me._seekbar_url.updatePlayback);
				me._seekbar_url.mediaEl.removeEventListener('timeupdate', me._seekbar_url.updatePlayback);
				if (me._seekbar_url.ggActivate) {
					me._seekbar_url.mediaEl.removeEventListener('play', me._seekbar_url.ggActivate);
				}
				if (me._seekbar_url.ggDeactivate) {
					me._seekbar_url.mediaEl.removeEventListener('ended', me._seekbar_url.ggDeactivate);
					me._seekbar_url.mediaEl.removeEventListener('pause', me._seekbar_url.ggDeactivate);
				}
				if (me._seekbar_url.ggMediaEnded) {
					me._seekbar_url.mediaEl.removeEventListener('ended', me._seekbar_url.ggMediaEnded);
				}
			}
			me._seekbar_url.mediaEl = player.getMediaObject('popup_video_url');
			if (me._seekbar_url.mediaEl != null) {
				me._seekbar_url__playhead.style.visibility = 'inherit';
				me._seekbar_url__playhead.style.left = '2px';
				me._seekbar_url.mediaEl.addEventListener('progress', me._seekbar_url.updatePlayback);
				me._seekbar_url.mediaEl.addEventListener('canplay', me._seekbar_url.updatePlayback);
				me._seekbar_url.mediaEl.addEventListener('timeupdate', me._seekbar_url.updatePlayback);
				if (me._seekbar_url.ggActivate) {
					me._seekbar_url.mediaEl.addEventListener('play', me._seekbar_url.ggActivate);
				}
				if (me._seekbar_url.ggDeactivate) {
					me._seekbar_url.mediaEl.addEventListener('ended', me._seekbar_url.ggDeactivate);
					me._seekbar_url.mediaEl.addEventListener('pause', me._seekbar_url.ggDeactivate);
				}
				if (me._seekbar_url.ggMediaEnded) {
					me._seekbar_url.mediaEl.addEventListener('ended', me._seekbar_url.ggMediaEnded);
				}
			me._seekbar_url.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements('popup_video_url');
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._seekbar_url.updatePlayback = function() {
			if (!me._seekbar_url.ggConnected) return;
			if (me._seekbar_url.mediaEl != null) {
				if (me._seekbar_url.mediaEl.readyState) {
					var percent = me._seekbar_url.mediaEl.currentTime / me._seekbar_url.mediaEl.duration;
					var playheadpos = Math.round((me._seekbar_url.clientWidth - 2 * 8 + 0) * percent);
					playheadpos += 2;
					me._seekbar_url__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (8 / me._seekbar_url.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, #27356e 0%, #27356e ' + currPos + '%';
					for (var i = 0; i < me._seekbar_url.mediaEl.buffered.length; i++) {
						var rangeStart = Math.round((me._seekbar_url.mediaEl.buffered.start(i) / me._seekbar_url.mediaEl.duration) * 100.0);
						var rangeEnd = Math.ceil((me._seekbar_url.mediaEl.buffered.end(i) / me._seekbar_url.mediaEl.duration) * 100.0);
						if (rangeEnd > currPos) {
							if (rangeStart < currPos) {
								gradientString += ', #18539b ' + currPos + '%';
							} else {
								gradientString += ', #ffffff ' + currPos + '%, #ffffff ' + rangeStart + '%';
								gradientString += ', #18539b ' + rangeStart + '%';
							}
								gradientString += ', #18539b ' + rangeEnd + '%';
							currPos = rangeEnd;
						}
					}
					if (currPos < 100) {
						gradientString += ', #ffffff ' + currPos + '%';
					}
					gradientString += ')';
					me._seekbar_url.style.background = gradientString;
				}
			}
		}
		me._seekbar_url.appendChild(me._seekbar_url__playhead);
		hs+='background: #ffffff;';
		hs+='border: 0px solid #101044;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		var hs_playhead = 'height: 11px;';
		hs_playhead += 'width: 11px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: 2px;';
		hs_playhead += 'top: 0px;';
		hs_playhead += 'border-radius: 6;';
		hs_playhead += cssPrefix + 'border-radius: 6px;';
		hs_playhead += 'background-color: rgba(24,83,155,1);';
		hs_playhead += 'pointer-events: none;';
		me._seekbar_url.setAttribute('style', hs);
		me._seekbar_url__playhead.setAttribute('style', hs_playhead);
		me._seekbar_url.ggIsActive=function() {
			if (me._seekbar_url.mediaEl != null) {
				return (me._seekbar_url.mediaEl.paused == false && me._seekbar_url.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._seekbar_url.onmousedown=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_url.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_url.clientWidth) * me._seekbar_url.mediaEl.duration;
					me._seekbar_url.mediaEl.currentTime = seekpos;
				}
			}
		}
		me._seekbar_url.onmousemove=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_url.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_url.clientWidth) * me._seekbar_url.mediaEl.duration;
					me._seekbar_url.mediaEl.currentTime = seekpos;
				}
			}
		}
		me._seekbar_url.ontouchend=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_url.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_url.clientWidth) * me._seekbar_url.mediaEl.duration;
					me._seekbar_url.mediaEl.currentTime = seekpos;
				}
			}
		}
		me._seekbar_url.ggActivate=function () {
			me._ht_video_pause_url.style[domTransition]='none';
			me._ht_video_pause_url.style.visibility=(Number(me._ht_video_pause_url.style.opacity)>0||!me._ht_video_pause_url.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_url.ggVisible=true;
			me._ht_video_play_url.style[domTransition]='none';
			me._ht_video_play_url.style.visibility='hidden';
			me._ht_video_play_url.ggVisible=false;
		}
		me._seekbar_url.ggDeactivate=function () {
			me._ht_video_play_url.style[domTransition]='none';
			me._ht_video_play_url.style.visibility=(Number(me._ht_video_play_url.style.opacity)>0||!me._ht_video_play_url.style.opacity)?'inherit':'hidden';
			me._ht_video_play_url.ggVisible=true;
			me._ht_video_pause_url.style[domTransition]='none';
			me._ht_video_pause_url.style.visibility='hidden';
			me._ht_video_pause_url.ggVisible=false;
		}
		me._seekbar_url.ggUpdatePosition=function (useTransition) {
		}
		me._seekbar_url.ggNodeChange=function () {
			me._seekbar_url.connectToMediaEl();
		}
		me._video_popup_controls_url.appendChild(me._seekbar_url);
		el=me._ht_video_play_url=document.createElement('div');
		els=me._ht_video_play_url__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8zIiBkYXRhLW5hbWU9IkxheWVyIDMiIHZpZXdCb3g9IjAgMCA0MS4yMiA0Mi44MyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2ZpbGw6IzEwMWI0OTt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT4KIDwvZGVmcz4KIDxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeT0iMjEuNTkiIGN4PSIyMC42NyIgcj0iMTguMjciLz4KIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTEzLjc3LDEyLjM2VjMwLjQ3YS42Ni42NiwwLDAsMCwxLC41N0wzMC42NiwyMmEuNjUuNjUsMCwwLDAsMC0xLjEzTDE0Ljc1LDExLjc5QS42Ni'+
			'42NiwwLDAsMCwxMy43NywxMi4zNloiLz4KPC9zdmc+Cg==';
		me._ht_video_play_url__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_play_url";
		el.ggDx=130;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_play_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_video_play_url.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['ht_video_play_url'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_video_play_url.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_video_play_url.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_video_play_url.style[domTransition]='width 0s, height 0s';
				if (me._ht_video_play_url.ggCurrentLogicStateSize == 0) {
					me._ht_video_play_url.style.width='30px';
					me._ht_video_play_url.style.height='30px';
					skin.updateSize(me._ht_video_play_url);
				}
				else {
					me._ht_video_play_url.style.width='25px';
					me._ht_video_play_url.style.height='25px';
					skin.updateSize(me._ht_video_play_url);
				}
			}
		}
		me._ht_video_play_url.onclick=function (e) {
			if (me._popup_video_url.ggApiPlayer) {
				if (me._popup_video_url.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._popup_video_url.ggApiPlayer.playVideo();
					};
					if (me._popup_video_url.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._popup_video_url.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._popup_video_url.ggApiPlayerType == 'vimeo') {
					me._popup_video_url.ggApiPlayer.play();
				}
			} else {
				player.playSound("popup_video_url","1");
			}
			me._ht_video_play_url.style[domTransition]='none';
			me._ht_video_play_url.style.visibility='hidden';
			me._ht_video_play_url.ggVisible=false;
			me._ht_video_pause_url.style[domTransition]='none';
			me._ht_video_pause_url.style.visibility=(Number(me._ht_video_pause_url.style.opacity)>0||!me._ht_video_pause_url.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_url.ggVisible=true;
		}
		me._ht_video_play_url.onmouseover=function (e) {
			me.elementMouseOver['ht_video_play_url']=true;
			me._ht_video_play_url.logicBlock_size();
		}
		me._ht_video_play_url.onmouseout=function (e) {
			me.elementMouseOver['ht_video_play_url']=false;
			me._ht_video_play_url.logicBlock_size();
		}
		me._ht_video_play_url.ontouchend=function (e) {
			me.elementMouseOver['ht_video_play_url']=false;
			me._ht_video_play_url.logicBlock_size();
		}
		me._ht_video_play_url.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._video_popup_controls_url.appendChild(me._ht_video_play_url);
		el=me._ht_video_pause_url=document.createElement('div');
		els=me._ht_video_pause_url__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8zIiBkYXRhLW5hbWU9IkxheWVyIDMiIHZpZXdCb3g9IjAgMCA0MS4yMiA0Mi44MyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2ZpbGw6IzEwMWI0OTt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT4KIDwvZGVmcz4KIDxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeT0iMjEuNTkiIGN4PSIyMC42NyIgcj0iMTguMjciLz4KIDxyZWN0IGNsYXNzPSJjbHMtMiIgcng9IjEuMjgiIHk9IjEwLjg3IiB3aWR0aD0iNC4wNCIgaGVpZ2h0PSIyMS40NCIgeD0iMjMuMDkiLz4KIDxyZWN0IGNsYXNzPSJjbHMtMiIgcng9Ij'+
			'EuMzYiIHk9IjEwLjg3IiB3aWR0aD0iNC4wNCIgaGVpZ2h0PSIyMS40NCIgeD0iMTUuMjkiLz4KPC9zdmc+Cg==';
		me._ht_video_pause_url__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_pause_url";
		el.ggDx=130;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_pause_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_video_pause_url.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['ht_video_pause_url'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_video_pause_url.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_video_pause_url.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_video_pause_url.style[domTransition]='width 0s, height 0s';
				if (me._ht_video_pause_url.ggCurrentLogicStateSize == 0) {
					me._ht_video_pause_url.style.width='30px';
					me._ht_video_pause_url.style.height='30px';
					skin.updateSize(me._ht_video_pause_url);
				}
				else {
					me._ht_video_pause_url.style.width='25px';
					me._ht_video_pause_url.style.height='25px';
					skin.updateSize(me._ht_video_pause_url);
				}
			}
		}
		me._ht_video_pause_url.onclick=function (e) {
			if (me._popup_video_url.ggApiPlayer) {
				if (me._popup_video_url.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._popup_video_url.ggApiPlayer.pauseVideo();
					};
					if (me._popup_video_url.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._popup_video_url.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._popup_video_url.ggApiPlayerType == 'vimeo') {
					me._popup_video_url.ggApiPlayer.pause();
				}
			} else {
				player.pauseSound("popup_video_url");
			}
			me._ht_video_pause_url.style[domTransition]='none';
			me._ht_video_pause_url.style.visibility='hidden';
			me._ht_video_pause_url.ggVisible=false;
			me._ht_video_play_url.style[domTransition]='none';
			me._ht_video_play_url.style.visibility=(Number(me._ht_video_play_url.style.opacity)>0||!me._ht_video_play_url.style.opacity)?'inherit':'hidden';
			me._ht_video_play_url.ggVisible=true;
		}
		me._ht_video_pause_url.onmouseover=function (e) {
			me.elementMouseOver['ht_video_pause_url']=true;
			me._ht_video_pause_url.logicBlock_size();
		}
		me._ht_video_pause_url.onmouseout=function (e) {
			me.elementMouseOver['ht_video_pause_url']=false;
			me._ht_video_pause_url.logicBlock_size();
		}
		me._ht_video_pause_url.ontouchend=function (e) {
			me.elementMouseOver['ht_video_pause_url']=false;
			me._ht_video_pause_url.logicBlock_size();
		}
		me._ht_video_pause_url.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._video_popup_controls_url.appendChild(me._ht_video_pause_url);
		me.divSkin.appendChild(me._video_popup_controls_url);
		el=me._image_popup=document.createElement('div');
		el.ggId="image_popup";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 70%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_popup.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._image_popup.ggCurrentLogicStateSize != newLogicStateSize) {
				me._image_popup.ggCurrentLogicStateSize = newLogicStateSize;
				me._image_popup.style[domTransition]='width 0s, height 0s';
				if (me._image_popup.ggCurrentLogicStateSize == 0) {
					me._image_popup.style.width='90%';
					me._image_popup.style.height='90%';
					skin.updateSize(me._image_popup);
				}
				else {
					me._image_popup.style.width='70%';
					me._image_popup.style.height='70%';
					skin.updateSize(me._image_popup);
				}
			}
		}
		me._image_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup.style[domTransition]='width 0s, height 0s';
				if (me._image_popup.ggCurrentLogicStateVisible == 0) {
					me._image_popup.style.visibility=(Number(me._image_popup.style.opacity)>0||!me._image_popup.style.opacity)?'inherit':'hidden';
					me._image_popup.ggVisible=true;
				}
				else {
					me._image_popup.style.visibility="hidden";
					me._image_popup.ggVisible=false;
				}
			}
		}
		me._image_popup.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._loading_image=document.createElement('div');
		els=me._loading_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgZmlsbD0id2hpdGUiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCAzMiAzMiI+CiA8Y2lyY2xlIGN5PSIzIiBjeD0iMTYiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiIGNhbGNNb2RlPSJzcGxpbmUiIGJlZ2luPSIwIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiB0cmFuc2Zvcm09In'+
			'JvdGF0ZSg0NSAxNiAxNikiIGN4PSIxNiIgcj0iMCI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHZhbHVlcz0iMDszOzA7MCIgYXR0cmlidXRlTmFtZT0iciIgY2FsY01vZGU9InNwbGluZSIgYmVnaW49IjAuMTI1cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgMTYgMTYpIiBjeD0iMTYiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjA7Mzsw'+
			'OzAiIGF0dHJpYnV0ZU5hbWU9InIiIGNhbGNNb2RlPSJzcGxpbmUiIGJlZ2luPSIwLjI1cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoMTM1IDE2IDE2KSIgY3g9IjE2IiByPSIwIj4KICA8YW5pbWF0ZSBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgdmFsdWVzPSIwOzM7MDswIiBhdHRyaWJ1dGVOYW1lPSJyIiBjYWxjTW9kZT0ic3BsaW5lIiBiZWdpbj0iMC4zNzVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMi'+
			'AwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYgMTYpIiBjeD0iMTYiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiIGNhbGNNb2RlPSJzcGxpbmUiIGJlZ2luPSIwLjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSgyMjUgMTYgMTYpIiBjeD0iMTYi'+
			'IHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiIGNhbGNNb2RlPSJzcGxpbmUiIGJlZ2luPSIwLjYyNXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDI3MCAxNiAxNikiIGN4PSIxNiIgcj0iMCI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHZhbHVlcz0iMDszOzA7MCIgYXR0cmlidXRlTmFtZT0iciIgY2'+
			'FsY01vZGU9InNwbGluZSIgYmVnaW49IjAuNzVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSgzMTUgMTYgMTYpIiBjeD0iMTYiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiIGNhbGNNb2RlPSJzcGxpbmUiIGJlZ2luPSIwLjg3NXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIGN4PSIxNiIgcj0iMCI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHZhbHVlcz0iMDszOzA7MCIgYXR0cmlidXRlTmFtZT0iciIgY2FsY01vZGU9InNwbGluZSIgYmVnaW49IjAuNXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44Ii8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._image_popup.appendChild(me._loading_image);
		el=me._popup_image=document.createElement('div');
		els=me._popup_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._popup_image.ggUpdatePosition();}
		el.ggText=basePath + "";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="popup_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._popup_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_image.style[domTransition]='';
				if (me._popup_image.ggCurrentLogicStateVisible == 0) {
					me._popup_image.style.visibility=(Number(me._popup_image.style.opacity)>0||!me._popup_image.style.opacity)?'inherit':'hidden';
					me._popup_image.ggSubElement.src=me._popup_image.ggText;
					me._popup_image.ggVisible=true;
				}
				else {
					me._popup_image.style.visibility="hidden";
					me._popup_image__img.src = '';
					me._popup_image.ggVisible=false;
				}
			}
		}
		me._popup_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._popup_image.clientWidth;
			var parentHeight = me._popup_image.clientHeight;
			var img = me._popup_image__img;
			var aspectRatioDiv = me._popup_image.clientWidth / me._popup_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = parentHeight * aspectRatioImg;
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = parentWidth / aspectRatioImg;
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._image_popup.appendChild(me._popup_image);
		me.divSkin.appendChild(me._image_popup);
		el=me.__360image_gyro=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=4000;
		el.ggId="360image_gyro";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 86px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 116px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__360image_gyro.ggIsActive=function() {
			return (me.__360image_gyro.ggTimestamp + me.__360image_gyro.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__360image_gyro.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasTouch() == true)) && 
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getVariableValue('vis_360image_once') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__360image_gyro.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__360image_gyro.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__360image_gyro.style[domTransition]='opacity 500ms ease 0ms';
				if (me.__360image_gyro.ggCurrentLogicStateVisible == 0) {
					me.__360image_gyro.style.visibility=(Number(me.__360image_gyro.style.opacity)>0||!me.__360image_gyro.style.opacity)?'inherit':'hidden';
					me.__360image_gyro.ggVisible=true;
				}
				else {
					me.__360image_gyro.style.visibility="hidden";
					me.__360image_gyro.ggVisible=false;
				}
			}
		}
		me.__360image_gyro.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.__360image_gyro.ggIsActive() == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__360image_gyro.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__360image_gyro.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__360image_gyro.style[domTransition]='opacity 500ms ease 0ms';
				if (me.__360image_gyro.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me.__360image_gyro.style.opacity == 0.0) { me.__360image_gyro.style.visibility="hidden"; } }, 505);
					me.__360image_gyro.style.opacity=0;
				}
				else {
					me.__360image_gyro.style.visibility=me.__360image_gyro.ggVisible?'inherit':'hidden';
					me.__360image_gyro.style.opacity=1;
				}
			}
		}
		me.__360image_gyro.ggDeactivate=function () {
			player.setVariableValue('vis_360image_once', false);
		}
		me.__360image_gyro.ggCurrentLogicStateVisible = -1;
		me.__360image_gyro.ggCurrentLogicStateAlpha = -1;
		me.__360image_gyro.ggUpdateConditionTimer=function () {
			me.__360image_gyro.logicBlock_alpha();
		}
		me.__360image_gyro.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me.__360image_timer=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=400;
		el.ggId="360image_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 38px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__360image_timer.ggIsActive=function() {
			return (me.__360image_timer.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me.__360image_timer.ggTimestamp) / me.__360image_timer.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__360image_timer.ggActivate=function () {
			player.setVariableValue('pos_360image', player.getVariableValue('pos_360image') + Number("1"));
			player.setVariableValue('pos_360image', player.getVariableValue('pos_360image') % Number("5"));
		}
		me.__360image_timer.ggUpdatePosition=function (useTransition) {
		}
		me.__360image_gyro.appendChild(me.__360image_timer);
		el=me.__360image_background=document.createElement('div');
		el.ggId="360image_background";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 86px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 116px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__360image_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__360image_background.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__360image_gyro.appendChild(me.__360image_background);
		el=me.__360image_text=document.createElement('div');
		els=me.__360image_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="360image_text";
		el.ggDx=0;
		el.ggDy=32;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 19px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 89px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 89px;';
		hs+='height: 19px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Gyroscope";
		el.appendChild(els);
		me.__360image_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__360image_text.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__360image_gyro.appendChild(me.__360image_text);
		el=me.__360image=document.createElement('div');
		el.ggId="360image";
		el.ggDx=0;
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 9px;';
		hs+='border-radius : 9px;';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 58px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__360image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__360image.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('pos_360image') == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('pos_360image') == 1))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('pos_360image') == 2))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('pos_360image') == 3))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('pos_360image') == 4))
			)
			{
				newLogicStatePosition = 4;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__360image.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__360image.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__360image.style[domTransition]='left 1000ms ease 0ms, top 1000ms ease 0ms, ' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me.__360image.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					this.ggDy = -8;
					me.__360image.ggUpdatePosition(true);
				}
				else if (me.__360image.ggCurrentLogicStatePosition == 1) {
					this.ggDx = 0;
					this.ggDy = -8;
					me.__360image.ggUpdatePosition(true);
				}
				else if (me.__360image.ggCurrentLogicStatePosition == 2) {
					this.ggDx = -32;
					this.ggDy = -8;
					me.__360image.ggUpdatePosition(true);
				}
				else if (me.__360image.ggCurrentLogicStatePosition == 3) {
					this.ggDx = 0;
					this.ggDy = -8;
					me.__360image.ggUpdatePosition(true);
				}
				else if (me.__360image.ggCurrentLogicStatePosition == 4) {
					this.ggDx = 32;
					this.ggDy = -8;
					me.__360image.ggUpdatePosition(true);
				}
				else {
					me.__360image.ggDx=0;
					me.__360image.ggDy=-8;
					me.__360image.ggUpdatePosition(true);
				}
			}
		}
		me.__360image.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('pos_360image') == 2))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('pos_360image') == 3))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getVariableValue('pos_360image') == 4))
			)
			{
				newLogicStateScaling = 2;
			}
			else if (
				((player.getVariableValue('pos_360image') == 5))
			)
			{
				newLogicStateScaling = 3;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__360image.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__360image.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__360image.style[domTransition]='left 1000ms ease 0ms, top 1000ms ease 0ms, ' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me.__360image.ggCurrentLogicStateScaling == 0) {
					me.__360image.ggParameter.sx = 0.7;
					me.__360image.ggParameter.sy = 1;
					me.__360image.style[domTransform]=parameterToTransform(me.__360image.ggParameter);
				}
				else if (me.__360image.ggCurrentLogicStateScaling == 1) {
					me.__360image.ggParameter.sx = 1;
					me.__360image.ggParameter.sy = 1;
					me.__360image.style[domTransform]=parameterToTransform(me.__360image.ggParameter);
				}
				else if (me.__360image.ggCurrentLogicStateScaling == 2) {
					me.__360image.ggParameter.sx = 0.7;
					me.__360image.ggParameter.sy = 1;
					me.__360image.style[domTransform]=parameterToTransform(me.__360image.ggParameter);
				}
				else if (me.__360image.ggCurrentLogicStateScaling == 3) {
					me.__360image.ggParameter.sx = 1;
					me.__360image.ggParameter.sy = 1;
					me.__360image.style[domTransform]=parameterToTransform(me.__360image.ggParameter);
				}
				else {
					me.__360image.ggParameter.sx = 1;
					me.__360image.ggParameter.sy = 1;
					me.__360image.style[domTransform]=parameterToTransform(me.__360image.ggParameter);
				}
			}
		}
		me.__360image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._phone1=document.createElement('div');
		el.ggId="phone1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 1px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 37px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._phone1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._phone1.ggUpdatePosition=function (useTransition) {
		}
		me.__360image.appendChild(me._phone1);
		el=me._phone2=document.createElement('div');
		el.ggId="phone2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 6px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='top : 49px;';
		hs+='visibility : inherit;';
		hs+='width : 6px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._phone2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._phone2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('pos_360image') == 1))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('pos_360image') == 2))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getVariableValue('pos_360image') == 3))
			)
			{
				newLogicStateScaling = 2;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._phone2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._phone2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._phone2.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me._phone2.ggCurrentLogicStateScaling == 0) {
					me._phone2.ggParameter.sx = 0.8;
					me._phone2.ggParameter.sy = 1;
					me._phone2.style[domTransform]=parameterToTransform(me._phone2.ggParameter);
				}
				else if (me._phone2.ggCurrentLogicStateScaling == 1) {
					me._phone2.ggParameter.sx = 1;
					me._phone2.ggParameter.sy = 1;
					me._phone2.style[domTransform]=parameterToTransform(me._phone2.ggParameter);
				}
				else if (me._phone2.ggCurrentLogicStateScaling == 2) {
					me._phone2.ggParameter.sx = 0.8;
					me._phone2.ggParameter.sy = 1;
					me._phone2.style[domTransform]=parameterToTransform(me._phone2.ggParameter);
				}
				else {
					me._phone2.ggParameter.sx = 1;
					me._phone2.ggParameter.sy = 1;
					me._phone2.style[domTransform]=parameterToTransform(me._phone2.ggParameter);
				}
			}
		}
		me._phone2.ggUpdatePosition=function (useTransition) {
		}
		me.__360image.appendChild(me._phone2);
		el=me._phone3=document.createElement('div');
		el.ggId="phone3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 1px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 8px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._phone3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._phone3.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('pos_360image') == 1))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('pos_360image') == 0))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getVariableValue('pos_360image') == 0))
			)
			{
				newLogicStateScaling = 2;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._phone3.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._phone3.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._phone3.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me._phone3.ggCurrentLogicStateScaling == 0) {
					me._phone3.ggParameter.sx = 0.8;
					me._phone3.ggParameter.sy = 1;
					me._phone3.style[domTransform]=parameterToTransform(me._phone3.ggParameter);
				}
				else if (me._phone3.ggCurrentLogicStateScaling == 1) {
					me._phone3.ggParameter.sx = 1;
					me._phone3.ggParameter.sy = 1;
					me._phone3.style[domTransform]=parameterToTransform(me._phone3.ggParameter);
				}
				else if (me._phone3.ggCurrentLogicStateScaling == 2) {
					me._phone3.ggParameter.sx = 0.8;
					me._phone3.ggParameter.sy = 1;
					me._phone3.style[domTransform]=parameterToTransform(me._phone3.ggParameter);
				}
				else {
					me._phone3.ggParameter.sx = 1;
					me._phone3.ggParameter.sy = 1;
					me._phone3.style[domTransform]=parameterToTransform(me._phone3.ggParameter);
				}
			}
		}
		me._phone3.ggUpdatePosition=function (useTransition) {
		}
		me.__360image.appendChild(me._phone3);
		me.__360image_gyro.appendChild(me.__360image);
		me.divSkin.appendChild(me.__360image_gyro);
		el=me._map=document.createElement('div');
		els=me._map__img=document.createElement('img');
		els.className='ggskin ggskin_map';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAABoCAYAAADsF+4sAAACmklEQVR4nO3dPW4TQRjG8WcietzGFKRj3bmMkwIfYYnpU1IS5YvWR0gHSihyAsQRuAFXSEVLOMFSrI0ca+NZf8zsI/H/Sdtar/Ro5n13NsqEqqoET3tdF4DnEY4xwjFGOMYIxxjhGHuR4kcHh+fjFL/7v9k6nMHheU9SOXvGkl5u+5uobRzOLJSz2UMgCWwUzmB0USqEexFKUmuHU4wubiR9TFALlqwVTjG6vJfCaaJasKR1OMXR5ZmCCCaj0OZUuji6Gkr6mb4cLGr7EnqTtAo0im5rxfF1qRDe5igGT0XDqer3GHRgZc95c/ypJ+l3vnKwaPXKCSoz1YEGkW0tHGSoAc+ITWvjHEWg2cqVU4WQqw404GObsVjPyVMFGrFyjEVGaVZOl1g5xlZPa/'+
			'ScTsVOCNAhpjVj9BxjTGvGIgMBukTPMca0ZoyVY4xpzRjbmjGOb4yxrRnjJdQYK8cYo7SxyF/f5CoDTVg5xug5xpjWjLFyjNFzjPGxzRg9xxg9xxg9xxjfc4zxPccYPccY05oxVo4xwjHGtmaM4xtjvIQa4yXUGCvHGNOaMf73jTFWjjF6jjFWjjFOCIyxcozxsc0YJwTGmNaM0XOMMa0Z43uOMXqOMaY1YwwExtjWjMW2tQdJ3DrVkdjxzUOmOtAg1nN+5CgCzaJXUb569/lRXHPciTbT2vfkVaBRi3DCtJ7aeHI/rW7Y7Z984bLwDrS8mzpMJZWSXiesBUtanRD8+vbhUXU4f9KWg0WttrW5/sntUPV4zfSWwVrhSFJ/cjtUPcGxxSW2djiS1J/c9VTf9H6684rwz0bhzO1P7g4kTUVISWwVztz++6891bfxDsWt'+
			'vDuzk3CQBh/bjBGOMcIxRjjGCMcY4RgjHGN/ARjVWS20LxqiAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAYAAAAdHLWhAAACoUlEQVR4nO3dMW4TURSF4fMQPWntUEyfSHgHmBUYJDuUcZeUWUKWAGXATswOQlZg7yBNoGYHZgVDESo7M28mzHtzJP5PcmeNrnR0370zY8mhLEvB14u+C0A9AjJHQOYIyBwBmSMgcy9TXHQwXRSSihTX/s9sOwloMF2MJM0ljSW96eKakCRt/imgwXQxlnQp6W0X1WDfswIaTJcHkj5J4bTjerCjdUDD2bIIQbfiKMuiVUDD2XIkaS3pVZJqsKfxmj2cLQ8krUQ4WbXooLASx1p2jQI6PLkeh6BJ6mKwr+kRd5myCFSLBnR4cj0S9zm9aXDEhXnyKlApHlDQOH0ZqBINKLC59ap2Br3+eFNkqgMVIh0Uigw1oAYv7MzVdlAIucpAFTrIHAGZiy0Jea'+
			'pApfqAyKd39UtCripQiSPOHEuCOQIyx5JgLrIkkFDfOOLMEZA5ZpA57oPM8STBHDPIHDPIHDPIHDPIHDPIHAGZiywJHHJ9o4PMsSSYo4PMMYPM0UHmmEHm6CBzzCBzdJA5AjLHkmCO90HmeKNqjhlkjoDM8dtsc8wgcxxx5gjIHDPIHB1kjiXBHB1kjmdx5niabY4ZZI4ZZI4ZZI4ZZI4ZZI4ZZI4ZZI4OMseSYI4lwVxsBt3nKQNVamfQz68ftpJ+Z6oFT2iyJKxTF4Fq8T94ClpL/ANkXxp0UFg9bgt8+vhEA/rx5f1W0rfY95BG0xvVC7Es9CKUZdnoi0dnt3NJN0mrwa5N44Ak6ejs+0rSabJysGvT6lncw9VkLuZRVq0flv4N6XP3peApz3qa/XA1uZD0TtKvbsvBrlYz6CnH53dzPW55/GNx99otCXWOz+9G'+
			'ksaSRpKKTi6K+84CQhq8UTVHQOYIyBwBmSMgcwRkjoDM/QGiMElgQYqqnAAAAABJRU5ErkJggg==';
		me._map__img.ggOverSrc=hs;
		el.ggId="Map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 85px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 178px;';
		hs+='visibility : inherit;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.isInVR() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map.style[domTransition]='';
				if (me._map.ggCurrentLogicStateVisible == 0) {
					me._map.style.visibility="hidden";
					me._map.ggVisible=false;
				}
				else {
					me._map.style.visibility=(Number(me._map.style.opacity)>0||!me._map.style.opacity)?'inherit':'hidden';
					me._map.ggVisible=true;
				}
			}
		}
		me._map.onclick=function (e) {
			player.openUrl("https:\/\/goo.gl\/maps\/XLmcaggMrZQRCzuN8","_blank");
		}
		me._map.onmouseover=function (e) {
			me._map__img.src=me._map__img.ggOverSrc;
		}
		me._map.onmouseout=function (e) {
			me._map__img.src=me._map__img.ggNormalSrc;
		}
		me._map.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_22=document.createElement('div');
		els=me._text_22__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=3;
		el.ggDy=20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text chinese";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 63px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 63px;';
		hs+='height: 23px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5730\u56fe";
		el.appendChild(els);
		me._text_22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_22.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._map.appendChild(me._text_22);
		el=me._svg_9=document.createElement('div');
		els=me._svg_9__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiBkYXRhLW5hbWU9IkxheWVyIDEiIHZpZXdCb3g9IjAgMCA0MS4yMiA0Mi44MyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjtzdHJva2U6I2ZmZjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MC41cHg7fTwvc3R5bGU+CiA8L2RlZnM+CiA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yOS4xOCwxOS4zNmE4LjIxLDguMjEsMCwxLDAtMTUuODMsMy4wNWgwbC4zLjY0YzEuNjgsMy41MSw2LjgsOC44Niw3LDkuMDhsLjMzLjM0LjMyLS4zNGMuMi0uMjEsNC45Mi01LjIzLDYuOD'+
			'YtOC44MWwuNDctLjkxaDBBOCw4LDAsMCwwLDI5LjE4LDE5LjM2Wm0tLjg5LDBhNy4yNSw3LjI1LDAsMCwxLS43OSwzLjI5bC0uMTMuMjZBNTMuMTMsNTMuMTMsMCwwLDEsMjEsMzEuMThhNTAuNDMsNTAuNDMsMCwwLDEtNi4yMy03Ljk1bC0uMy0uNThhNy4yNSw3LjI1LDAsMCwxLS43OS0zLjI5LDcuMzMsNy4zMywwLDEsMSwxNC42NSwwWiIvPgogPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjAuOTMsMTUuMDdhNC43OSw0Ljc5LDAsMSwwLDQuNzksNC43OUE0LjgsNC44LDAsMCwwLDIwLjkzLDE1LjA3Wm0wLDguNjZhMy44NywzLjg3LDAsMSwxLDMuODctMy44N0EzLjg3LDMuODcsMCwwLDEsMjAu'+
			'OTMsMjMuNzNaIi8+Cjwvc3ZnPgo=';
		me._svg_9__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 9";
		el.ggDx=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 56px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 54px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_9.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map.appendChild(me._svg_9);
		me.divSkin.appendChild(me._map);
		el=me._korean=document.createElement('div');
		els=me._korean__img=document.createElement('img');
		els.className='ggskin ggskin_korean';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAABoCAYAAADsF+4sAAACmklEQVR4nO3dPW4TQRjG8WcietzGFKRj3bmMkwIfYYnpU1IS5YvWR0gHSihyAsQRuAFXSEVLOMFSrI0ca+NZf8zsI/H/Sdtar/Ro5n13NsqEqqoET3tdF4DnEY4xwjFGOMYIxxjhGHuR4kcHh+fjFL/7v9k6nMHheU9SOXvGkl5u+5uobRzOLJSz2UMgCWwUzmB0USqEexFKUmuHU4wubiR9TFALlqwVTjG6vJfCaaJasKR1OMXR5ZmCCCaj0OZUuji6Gkr6mb4cLGr7EnqTtAo0im5rxfF1qRDe5igGT0XDqer3GHRgZc95c/ypJ+l3vnKwaPXKCSoz1YEGkW0tHGSoAc+ITWvjHEWg2cqVU4WQqw404GObsVjPyVMFGrFyjEVGaVZOl1g5xlZPa/'+
			'ScTsVOCNAhpjVj9BxjTGvGIgMBukTPMca0ZoyVY4xpzRjbmjGOb4yxrRnjJdQYK8cYo7SxyF/f5CoDTVg5xug5xpjWjLFyjNFzjPGxzRg9xxg9xxg9xxjfc4zxPccYPccY05oxVo4xwjHGtmaM4xtjvIQa4yXUGCvHGNOaMf73jTFWjjF6jjFWjjFOCIyxcozxsc0YJwTGmNaM0XOMMa0Z43uOMXqOMaY1YwwExtjWjMW2tQdJ3DrVkdjxzUOmOtAg1nN+5CgCzaJXUb569/lRXHPciTbT2vfkVaBRi3DCtJ7aeHI/rW7Y7Z984bLwDrS8mzpMJZWSXiesBUtanRD8+vbhUXU4f9KWg0WttrW5/sntUPV4zfSWwVrhSFJ/cjtUPcGxxSW2djiS1J/c9VTf9H6684rwz0bhzO1P7g4kTUVISWwVztz++6891bfxDsWt'+
			'vDuzk3CQBh/bjBGOMcIxRjjGCMcY4RgjHGN/ARjVWS20LxqiAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAYAAAAdHLWhAAACoUlEQVR4nO3dMW4TURSF4fMQPWntUEyfSHgHmBUYJDuUcZeUWUKWAGXATswOQlZg7yBNoGYHZgVDESo7M28mzHtzJP5PcmeNrnR0370zY8mhLEvB14u+C0A9AjJHQOYIyBwBmSMgcy9TXHQwXRSSihTX/s9sOwloMF2MJM0ljSW96eKakCRt/imgwXQxlnQp6W0X1WDfswIaTJcHkj5J4bTjerCjdUDD2bIIQbfiKMuiVUDD2XIkaS3pVZJqsKfxmj2cLQ8krUQ4WbXooLASx1p2jQI6PLkeh6BJ6mKwr+kRd5myCFSLBnR4cj0S9zm9aXDEhXnyKlApHlDQOH0ZqBINKLC59ap2Br3+eFNkqgMVIh0Uigw1oAYv7MzVdlAIucpAFTrIHAGZiy0Jea'+
			'pApfqAyKd39UtCripQiSPOHEuCOQIyx5JgLrIkkFDfOOLMEZA5ZpA57oPM8STBHDPIHDPIHDPIHDPIHDPIHAGZiywJHHJ9o4PMsSSYo4PMMYPM0UHmmEHm6CBzzCBzdJA5AjLHkmCO90HmeKNqjhlkjoDM8dtsc8wgcxxx5gjIHDPIHB1kjiXBHB1kjmdx5niabY4ZZI4ZZI4ZZI4ZZI4ZZI4ZZI4ZZI4OMseSYI4lwVxsBt3nKQNVamfQz68ftpJ+Z6oFT2iyJKxTF4Fq8T94ClpL/ANkXxp0UFg9bgt8+vhEA/rx5f1W0rfY95BG0xvVC7Es9CKUZdnoi0dnt3NJN0mrwa5N44Ak6ejs+0rSabJysGvT6lncw9VkLuZRVq0flv4N6XP3peApz3qa/XA1uZD0TtKvbsvBrlYz6CnH53dzPW55/GNx99otCXWOz+9G'+
			'ksaSRpKKTi6K+84CQhq8UTVHQOYIyBwBmSMgcwRkjoDM/QGiMElgQYqqnAAAAABJRU5ErkJggg==';
		me._korean__img.ggOverSrc=hs;
		el.ggId="Korean";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 68px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 44px;';
		hs+='visibility : inherit;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._korean.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._korean.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.isInVR() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._korean.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._korean.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._korean.style[domTransition]='';
				if (me._korean.ggCurrentLogicStateVisible == 0) {
					me._korean.style.visibility="hidden";
					me._korean.ggVisible=false;
				}
				else {
					me._korean.style.visibility=(Number(me._korean.style.opacity)>0||!me._korean.style.opacity)?'inherit':'hidden';
					me._korean.ggVisible=true;
				}
			}
		}
		me._korean.onclick=function (e) {
			player.openUrl("https:\/\/tour.lumination.com.au\/chatswood-hs-korean","_blank");
		}
		me._korean.onmouseover=function (e) {
			me._korean__img.src=me._korean__img.ggOverSrc;
		}
		me._korean.onmouseout=function (e) {
			me._korean__img.src=me._korean__img.ggNormalSrc;
		}
		me._korean.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_21=document.createElement('div');
		els=me._text_21__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text korean";
		el.ggType='text';
		hs ='';
		hs+='height : 26px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 22px;';
		hs+='visibility : inherit;';
		hs+='width : 63px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 63px;';
		hs+='height: 26px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\ud55c\uad6d\uc5b4";
		el.appendChild(els);
		me._text_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_21.ggUpdatePosition=function (useTransition) {
		}
		me._korean.appendChild(me._text_21);
		me.divSkin.appendChild(me._korean);
		el=me._mandarin=document.createElement('div');
		els=me._mandarin__img=document.createElement('img');
		els.className='ggskin ggskin_mandarin';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYYAAAB0CAYAAACBrZVDAAAFHklEQVR4nO3dz4teVxkH8O+5M5lJjCbTpNE0E2uTNJMmViOOIpkEDVg0otBom4WCdiEUkSpqaBQ3ATeuzcof0IIgiAt1p+Af4F70P1AEl0YxP2be00VVeojUKdV77sz7+cCsz/PO4n55nnPuuQkAAAAAAAAAAAAAAMA4Su8CJqScXP/mgT3lztGFYXj7bKhHkuFwSQ7VWldKyUpNDpSa/TXZn2Rfkn0pZSm1LiVZTLLQ9ycAvHnzFAxlbf364WGprpVZOVUzO5GUE0l9NMk7k3I8rz7sAebargyGMxdvvK1ubp1fSD1fh/reUsu5mpxLcqh3bQBTtwuC4ebw+If+9sRCmX241HIhJR+oydnsit8GML4d+fA8u3H9XbXWKzXlqdRcTvJw75oAdoudEg'+
			'zl9MaL54fZ7JmUXE3yZO+CAHarSQfD2oWvrw51eK6W8vkkT/SuB2AeTDEYytrFFy9lVr9WkqfjCCjAqCYVDGsXbny0ZPadpGz0rgVgXk0iGE5f+tbJMpvdSuone9cCMO+GzuuXtYs3Xiizrd8LBYBp6NYxPP6Jrywv/HXvS7WWz/WqAYAHdQmG9fXn99zet/KL1OgSACZmsceit5dXvptahALABI3eMZzd+PaTW2Xrdz3WBuC/G71j2Cr1+aQIBYCJGj0YaqkfHHtNALavx3FV3zwAmLAOm8+mSABT1vsFNwAmZvyOoQxJ6ujLArA9OgYAGuOfShp7QQDekPFHSUOSagMaYKqMkgBoOK4KQEPHAECjT8egaQCYrC7XbjuZBDBdRkkANDq8+WyOBDBlOgYAGo6rAtDQMQDQGL1jmJVE1wAwXToGABqCAYBGpw/1ADBV'+
			'ntIANBxXBaDhC24ANFyJAUDDHgMADcEAQMOHegBo6BgAaHT5gpuWAWC6HFcFoDF+xzCYXgFMmac0AA3BAEDDm88ANHQMADQ6nErSMQBMmY4BgEaHPYbRVwTgDfChHgAaRkkANDqMkoa4GANgukYPhlkMkwCmzO2qADTsMQDQ6HC7amwxAEyY46oANIySAGh06RiqpgFgsnQMADTsMQDQ0DEA0HC7KgANoyQAGh2+4AbAlLkrCYCGPQYAGh06BgehAKbMUxqAhlESAI0Op5IkA8CUGSUB0PCCGwANewwANHQMADTG32OodXP0NQHYtvE7hiF/SLI++roAbMvowTArw09KzRfGXheA7Rl9lPTnX375N6XmV2OvC8D29Nh8rlvLt54b7i3+Nsmp8dcH4PV0OyK0+plbx2td/HVq3t2rBgAe1O3N5z/9/Kt/vHNncyM1P+'+
			'1VAwAPmsRLBatPf//ZWur3khzrXQvAvJtEMCTJOz724/3lrX//Rqm5nuRg73oA5tVkguFfHrr2g4P7NuuXavJCkuO96wGYN5MLhn+7fHPxkZVjnyqlfrEmV9Lt+9QA82W6wfAaR6+9dCT37z+bkmdK8pEICYD/mx0RDK/12NWXV+4Ndz+e5EpNeSrGTQD/UzsuGFq1rH76R6frkEuzWi+Vmo2UnOldFcBOtsOD4UGPXX155R+Ld9dLXXh/qXlfLfU9qTmTZKl3bQA7wa4Lhv/o8s3F1YdWT24Ow5lSt9ZShlNJPZnkRJJHk+ztXCHAZMxHMLyuWh757A8Pb90bjg2lriblaGblSMrsSDI8nJJDqXWlpB6sKQeS7P/n31vi/wfsQh5sb8K5az9b+svd28t7l+ue+5v3F2eLe7tdMQIAAAAAAAAAAAAAAACw07wCLT/I'+
			'5a190V0AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYYAAAB0CAYAAACBrZVDAAAFB0lEQVR4nO3dzYtfVxkH8O+58/vNOKZNxryUvLbkxTSONQlGF5agAQtGLFraDL5AacUaXFQQ/QMCblzbXWtadOEmIBEEX3DRpXtB8S+wdWVWxTbJ77iIxR4idcB6z52ZzwdmfZ6Zxf3yPM+ZexMAAAAAAAAAAAAAAIBxlN4FTEctH9l4ZfdqZgdrXTyU5EBq3VdL9pZa1mqyVpLdSXYl2bVIVkuymmT5Xz+zJEsdfwGAD8QOCoZaDn39lX13b5fTS4vhZC05nuR4Sn241HKsph7NvQc9wI62LYNh/5dffXC+knN1sThXM5wtta6nZD3J3t61AUzd1g+Ga9eGg39+5ExZ1M+mLD6TlE8l+Vi2w+8G0MGWfHgeevr6IxlyOSlPJPVSkv29awLYLrZIMN'+
			'RyZOMn5xZ1eCYlT6Xmsd4VAWxXkw6Goxs/O3K33nkuybNJPdO7HoCdYILBUMuhKz+9mNTvJfUrcQUUYFSTCoYjV65/vpbywySP964FYKeaRDA89PSrJ2ZLeSnJl3rXArDTdR7T1HJ449iLw1BuJlnvWwsASceO4dQXX1p564EHXkvyjV41AHC/LsFw4erL8zduLd9MqtERwMTMehz65q35j4pQAJik0TuGY1+9/tiiDn/scTYA/90w9oF3a7kaoQAwWaOPkkqGT499JgCbN/6OofjmAcCUdegYAJiy0XcMAExbh+uqQ5I6/rEAbIqOAYBGj+UzABOmYwCg4VYSAI0u70oSDwDTZZQEQMPyGYCGjgGARocdQ9E0AEyYjgGAhmAAoNHnuqpZEsBk6RgAaIzeMQzaBYBJ0zEA0BAMADTGXz6LIoBJ6/IPbgBMl9duA9Aw'+
			'2AGgIRgAaHjtNgCNDsvnIUkd/1gANsXyGYCGHQMADcEAQKPT8tlACWCqdAwANAQDAA23kgBo6BgAaHRYPusZAKZMxwBAQzAA0Bh9lORNSQDT5gtuADQ6BENkA8CE2TEA0BAMADS6jJJMkgCmy/IZgMb4wWB4BTBpHtMANAQDAI0Or922YwCYMh0DAI1O33wGYKp0DAA0BAMAjU7ffDZPApgqHQMADctnABo6BgAaHV6iJ4sApsxTGoBGp1tJAEyV5TMADaMkABq+4AZAQ8cAQMPyGYBGh+VzvSMeAKarxz+4/SnJhfHPBWAzxt8xLMrPRz8TgE0bPRj+8tpTvy81vxn7XAA2p8d11Xp7ceO5+dLsD0lOjn8+AO+n2xb47Au/OHq7lN8m+XivGgC4X9frQae+++vd83+883JSv9azDgD+bRL3Rtdf+OWVWuqPkxzuXQ'+
			'vATjeJYEiSs8/+btft1be+n5ofJNnTux6AnWoywfCuE1dv7Fmty9+pqS8mOdq7HoCdZnLB8K5L116f/e2NW0+mDN8qtV5OlxtUADvPZIPhvU5988aB+Xx+paQ8k+RzERIA/zdbIhje6/zzN9feXilfKMnl1DwR4yaAD9SWC4ZWLWe+ffOjQ5YuptSLSR5P8mjvqgC2si0eDPc7//zNtXdWcqHW4ZMl9XyST+ReWCx3Lg1gS9h2wfCfXLr2+uzNv/79xNIwPFprOZ0hJ0vNiSTHkzyc5EOdSwSYjB0RDO+vltNXf7VveakeXtwpRzIsDpZSDtRaD5Rkf2rZW0rWarKnJrtLsiv3fj4cfz9gG/Jg+x+sb9xYvvvgyspSeXs+m89md4YVn0oFAAAAAAAAAAAAAAAA2KR/AhUnrtJfFuiTAAAAAElFTkSuQmCC';
		me._mandarin__img.ggOverSrc=hs;
		el.ggId="Mandarin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 69px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 111px;';
		hs+='visibility : inherit;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mandarin.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._mandarin.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.isInVR() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mandarin.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mandarin.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mandarin.style[domTransition]='';
				if (me._mandarin.ggCurrentLogicStateVisible == 0) {
					me._mandarin.style.visibility="hidden";
					me._mandarin.ggVisible=false;
				}
				else {
					me._mandarin.style.visibility=(Number(me._mandarin.style.opacity)>0||!me._mandarin.style.opacity)?'inherit':'hidden';
					me._mandarin.ggVisible=true;
				}
			}
		}
		me._mandarin.onclick=function (e) {
			player.openUrl("https:\/\/tour.lumination.com.au\/chatswood-hs-eng","_blank");
		}
		me._mandarin.onmouseover=function (e) {
			me._mandarin__img.src=me._mandarin__img.ggOverSrc;
		}
		me._mandarin.onmouseout=function (e) {
			me._mandarin__img.src=me._mandarin__img.ggNormalSrc;
		}
		me._mandarin.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_20=document.createElement('div');
		els=me._text_20__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text chinese";
		el.ggType='text';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 23px;';
		hs+='visibility : inherit;';
		hs+='width : 62px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 62px;';
		hs+='height: 32px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="ENG";
		el.appendChild(els);
		me._text_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_20.ggUpdatePosition=function (useTransition) {
		}
		me._mandarin.appendChild(me._text_20);
		me.divSkin.appendChild(me._mandarin);
		el=me._principals_welcome=document.createElement('div');
		els=me._principals_welcome__img=document.createElement('img');
		els.className='ggskin ggskin_principals_welcome';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYYAAAB0CAYAAACBrZVDAAAQ8klEQVR4nO3d248b1R0H8J+920IuDSqCXqAvBRX6glSpElKrqmpVqRIvVV8qHtr/gIe+VFVFW6mU9qFSEZQ7CSE0EFICgUBCSiCEgohyXza3zW03m82yd+/aXt89l9OH7OyOj891PB5719+PZM147F2Ps3C+Pud3zjhFainF/ZThLb10S917/28/TKXS39e8JgAARMVYbXHmzA8nxw6NE5FPREyxFd76LV6ODwXR47JQuHFjlKKU6EcBACAOrlvZMjl2aJqI+uhGO8yWtv7SU3y60Saz0LEGNsEQMOk1pEkUDGkSRwoAALSO+fPT1w4+TyuhEA6EsOBYmnucEZkHg6yHEGz1oUDUx9BjAABom3o196/iwnCFbrTtPhF5tNI284JAaBoNsu0xpBRb/V'+
			'ASAAC0BfPdkYkLb+6mG70FJnpKaBsOixR33KrGICOqPYgDIkUpDCUBAMSvVBh7rF4vMloZHgrqCMFW9OGdhbbLWqkxmM5QSq/sy3o0AAAQle/Vj01c2HOYGkdmVKFA1BwOywERdVZS+JhoSqt0yqrF6wEAgB7LzQ4+Titt7fJxkvcUhIGwJMUHg6rIrGK4pgE9BgCAODm1xX1z1z4dpuY6rmydAh8OgeVjUWsMJr2EpgI0E/0kAABExKqZ65++QOJQELXHAVkPgoiiz0rif7nsudxYFnoMAABxqZXmXlvMXJgncdusEvQehFqZQqp6YdFMJSJiSAUAgBgw35ufGdm7I7gbfkhyXzaFtemxOKar8iShsDRVFdEAANCySmH8xWpxvsodDq9VEIWBSUjEHgyqYSXNUwAAwITvOSNfXHpr/9JdJtlS6L4qJHgsztXIsjEu'+
			'0boHAACIaHHu/HPkuqJrIJn2GEQ/syzKtZJsprQ2hIJPaUojHwAAInOd8rHZkQMnucN8TSHY8jfiHhPeb0eNgUgWFKgxAAC0ws9OHH2OGr9Xgd8PHxPdZI9RsG1XMEggGQAAonKqufdyE8evkj4UVDdlKFDMNQYAAGgTxvzK7PCHW0ncA4gaCF3QY8DVkgAAIqkXp3eUc8PzpA4DUVjwx7TDSUkGA1Y+AwBEwHxvbvLC3l2kbtR1vQdZjYH4+4n2GJRrsAEAQKiUvbrZrS1UKNrwka6XEHm6aozQYwAAMOV7tctTQ29/QHYFZlk4GN2SDQaMJAEAWCnMnXuGyPUoem9BN4zUBNNVAQC6lFcvHp678v4AyRt8m5lIutpC2xe4AQBACxgxLzd2OLyYzXa9gm66KlFzz6ETC9wIHQYAAANueeGd7NSJMWr+xC/qCdiuXS'+
			'DVfsKzktLEkAwAAEqM+aW54QPbSN7ge6GbKgRMA6IBVj4DAHSZWmFyezl7NUviQGh1pTPptig+AwB0EeZ70zMX3nqT5MVmUTiIVjur6grhbRNMVwUA6CLl7JXn3Wq+SuoZSCY9B93itkBTUKDHAADQJTy3NjR9btdBMpuWKgsH01XOsn3UGAAAukVx5vOnyH6tgk0o6AKCCCufAQC6g1svfJy5cuA0tRYGslCwkvg6BkxXBQDgMTd37bNgMZttIJj2EIx6C0RY+QwA0HFOeX53fuL4ONkPIdmsVwhT9iJQfAYA6CTmFWav7NtGzUNCUQLCZJWz9EyCHdQYAAA6qLo4ua22cC1P6jpB1HAgxX5YwzH0GAAAOoT57hez5/+zm1rrEYTDQxcKwtPgD2C6KgBAh5QzV551q8UaNQ8hmV76IkoQaCV7Eb00ocMAAEBEvlM5'+
			'M3Pujf9Ra3UFXcFZdxkMYXgkPJSEZAAAICIqTA48ReSqQkG1slm1doGoscG3npWEoSQAgIS5tfzBheED56g9U1ONLnuhguIzAECSGHOyI4eeI3kBuZVhJKLmcCCyDAh8gxsAQIKc0tzrxamBSRIHgm6mkaxXEHkxm0gHVj4jGQCgNzHm5+cu7NlO+sbfpKhstWjNRsJf7QkA0Luq+etba/nrBZIHgGioKOq1kCL3HrDyGQAgAcxzrmcGd75D5gvUTB8Xvlwr54riMwBAAipzQ8+4btEhcUMvm3VkW2NQMQ4LTFcFAGgzv14emD371mGyGw6KUmeIpQeBHgMAQHuxxfGjTy8tZlPVFGx7CMQdE+2L7muhxgAA0EZuJXsgd/XgJVIHgk2ROdC2+TyJBoNPaUojGQCgZ7Da/PCBzaSfZRTHzKPYggI1BgCANqkXpl+vTJ'+
			'2eIXUdwSQoRFTTUvnnWMFQEgBAGzDmZReGdu0gcYOvut6R6nLaJrOPWoaVzwAAbVBdGH2xlp8qkXgKatQv5QnwvYVYh5YwlAQAEDPm1UZnB1/dR+IL30X9hjYS7Ie3DafQyvljuioAQMxKk6efILfqknko2IQFURvCICzxoSSGXACANcyr5j+aH9p9isRFZl0o6GYqETUGQFvqDegxAADEhfnV7KX3nib7r+k0KUqr1jHEGhCoMQAAxKSen3ipPDU4S2ZFZtUX79jMTOJDoeWQSLbHgK98BoA1inn10czgS7soek9Bt9BN+LLteC8YSgIAaBEj5hauffKIWy3WSHz9I5OhI5PZSY0v2yYYSgIAaJGTH9+Su/zBZRIHgSogZHUFInHDn0gPItlvcEuliFLoMQDA2uG7lTPTxze/RnbTT20WtJmueI6tB4EeAwBAZH4l'+
			'f3Hvo0trFvjCsekMJFmAEDUHQtuGj8JwSQwAgIjK0+f+Xrx+bILsZyFFWfFMgn3VscjQYwAAiMApTL4yP/Dvj0kcCp7gmG6KqmzoSFVzUB2PDFdXBQCw5NcLR6ePPL2F1IHgkT4gVCuciToQCkSJDyVhIQMArG7MdyYyp7Y/Qm7VI7MhJD4cdJe9UBWbE6k3JDsrKckXAwCIm+/ls0P7fl9bGFkkdRCYDCXJVjqTYKvaj13CQ0mYrgoAqxTzK4WRQ78rjX16jcwafVE4iHoJsqGkxGcjBTowKwkAYHVhxNzS+LGH85f3D1G02Ud8KPA9hJWX6tAU1TBcEgMAQI1VZs4+mjvz+nFqLRBMpqc2vbbhsVihxwAAIMX86sz5vy2c2PoRqS9tYbNeQRUQDS/eznemknwwoMMAAKsAY8ytTA3+deHUy4co+vCRLiREw0aqQF'+
			'h7K58ZhpIAYFVgTnni5J+zn796mJp7Cqa9BpNVzTaXvkisB4GhJACAMMbKpbHDf8qd3XWS1KuabaalqnoKsplIDWcV3xvUw7WSAAACnjNVuLT/D4sjB6+SeNqpJzmmCgjZWgUicSh0vNaAS2IAABCR75TOLpx4+eFa5mKWVhpxPghEW1FYqNYt6GYidRwuiQEAPc8rzx/IfPb4P9xqrkbNw0eixl+2VfUSdEVnkhxLHGoMANC7GKvVMhefzBx5YS+RKxsOsgkFk4AgwZbf76hEg8FPE6XRYQCALsDc2rXFi/v/Uhr5aITk9QHVkJHppbVVRWcS7IvuJwornwGg53iluX3zR5590i3NlkndsJvUFGxWNnfFJS90kgwGlmKsnuDrAQA0YL4zU50YeCw7sP0IrTTook/+suEhk0KzyUK25VMyPJaoZHsMzMvh6qoA0AHM'+
			'LczsXji5ZbObnwx6CeGGXFUnUIWEaOGb6crmjgeATLI1Brc62vflDUm+JAD0ON+pjFRGP/lnfujdcyT+ZG/TKzCZkioKB6LmgBDpirBINBjcYmawb/1tSb4kAPQo5jlz9czFrfMnXnp/6dvWbGoJpsEgCwM/OA3Jtul0W3/H8Uk0GBbP7zt2++331iiVuinJ1wWA3sF8r+TkxnbkTm3d7ZYWqmRfXNbNOAoXnXXrFZZPy2C/a5gGAyO76UTCN+vkRypuvfDfvptv+aXF7wIAMOBXncWpPYXTu3bWMpdypB8ysh1Gsg2DwKoKBaJoPQZRSOi6R8vbytjhbRvvfeAXRKl0hNcGAGjku7n64sTbxbNvvF3LDOepeYjHNhT4fVGBWRUKspDo2iDgxTmUJPtHaNgWht69uu5b9+/s23Dbr2N8bQDoMb5TueLMD+9ZPLPz4N'+
			'KQUfhTvGrWkcnsI37WkWxLJA4F3qoKCf6Tv2i4KBXa8vtpwa0vtN+/dL9h+6VNX99w60/++Eq6/6bvxPdWAGCtY8wr+sXMofL4if3Fi3svkzwIVL0FXSDIho9EM5BkxWVVsbmrQ4GoPcEQDoemUAi26+/68Z2b7ntwa6qv/xuxvRsAWHuYX3EruWPO/PDHxTNvHnVreYeax/plgWA760gUCqJho+DY8llKtk3vJuo/Q5LaFQzKHkOwv/6uH92x6b4Hn0j13XR3XG8IAFY/5tVnvMrC8Xpm+Gjx4t7PvXI2GCriP6XrAsG2uGwSCjazjlTHupZtMATbYF8VCn2hW79kP93/lW9u+OoPHnqob+PXfrX0cwDQY5hXn/Sri+e9wsyZ8tTAYHX0yCSRy4/hy26qht22uGwSCiTYJ8G+6lhX001B5XsJ/FbXYxCFQfj+8vM2'+
			'3vPzb6+7+6e/6Vt3688olV7X+lsDgG7DfL9AbnXCd0rXvWp+1MmND9e/OHW5lrm0SOLhGNWMH9NhJFXxWdTrCB/jX1N0n0LHVfdXDZNgCLaqYFAVokXBEL411CX6N9528/p7Hvhe/y13fjf95U13pPr6NhBjofNkunMGgA5IEXnM9x3G3Cq5Ttn36kXmlLN+JbfglObmvbnLM7XsaJHkn7p1wWDbYzC9qWYe6c6VQsdU91cVm2Dgt7I6Q/iYLhhExWr+d8luNu8DAOIlawhlBVldI6t7zCYUbMNCVFQO9kXvbU0UmFVaWcfAaKVBDv/Dpkj8x5M18OHHfe7nZa/JhwMjhANAknTBoGv4dcMzujCI2mMQDT+JfqesByN7/7Jjq1LUYOBDgQ8DIvkfVPapn//9fAjIegzoPQAkQ9UYygIhvG8SCiZtiK7XYHJMFQb8ef'+
			'DvfU2HApH9tZL4T+b8cf6PGg6CAP/zRI1/iL7QPoIBoDvoGkNRgx7eN7nZPj/cuKsKyPyx8GOy15S97zUfCkStXSspvKXQ1qcb9QF+eIioudGW/cfQR829C4QDQGeYhEKwjdrARw0LXfFYNlzE9xZk56/6d1hzgRBodShJlqzhcCASN9S6P7yu+KwLA4QDQDxMGkjR/8vh+7IhoFZ7DCaNvmzISFVcVvUaZMfWDJtgCMJAdT8sXEj2ucdM/2PQhQLCACBZspAw+X/apNgbR+8hyu/l34vovcr+DdYcXTDYhgGPDwTV64j+yCY9BoQDQDJ0oRDeb0cwtNq74H+Gf0893UsIS+L7GHzuvug/FtHiONQXALqLLBiCfVUjbDq8Y9qYmwSE6rkk2Mrep+zYmmUSDLIgCNcY+HpDQFZrCP+xwsNN/CI50YI69BYAOkPVYKoa'+
			'YNUYv00Dz/9e2/BQbWXvsacCIWDakMqeJ2qkw8fCn/xF+7pjsjBAMAAkTxcMwTbO4R6Tht30mGhr8t56jk1DKnquKBT4ra6xl4WHLBBkoWD7fgDAnqwBNflkH3XIiH9d00Zf9TOy92Ly2JoXpSFVfUqXBYOqkTe5JpJsX3duABAvm16DbF8VCrLfw7+2TaNvOjzU02EQ1kpDahoQqk/8NrOOEAwAnaVrUHXDPSbj/yaf+kX3o9YKEAYCrTakJrODVHUI0+KybKs6HwCIl0njaloLaGU4SHVOpoGge6ynxRkMomOmNQhdiMh+r+k5AUDrTBpZ21qAyfN15xClN4BQUIijEdV9ercNCtOftT0fAIhO15BGqQXY1gZMzsWkwUcoaMTViJoO7egaepPegek5IyAA4mHakJrWAFotEtuel+1ze97/Ab0Tfc/AnYhiAAAAAE'+
			'lFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAA/CAYAAADt0Fr6AAAE4klEQVR4nO3dTWzbZBgH8MdZu7JVTEggBBMcduAAV06c0e7jwpETcEBIO07iS2ITBzRNWrbDLjtwmDRNA6GVtRsLatN2ndhH+ZhAa9eQlbXNV9Mmbew48dfLoYn3ZIkb27FTOv9/1aQ39mvH0h49z/vabxJJCEFPkyRpgL18vtl48d2vPort3f8aEZEw9b12D2HF2k4CzyYpZtnNPYOasbFyu3Tr7G0iWmO9KkREdhBJkiTxU7D2YLMxMPzS+9LgvreDv2LYrYzNbJqIholog22WiFhwuSFJErXGIESZsIxsaSY+4bQf5Qx8M5Xile32O2Uunp7sABQkkLfAVl28+SMRGY2XJtsliFAWwSdTLc8o89dXtuuDsgi+aIUHP3fr4ylzbVVLZK6oE6aeK9'+
			'05nyAihW2us7ZF5Lksbv2DaDPk3Kibfshc4JmSGg8huBBbkWdp8oSSnkw1XvKyqLO2j9kiIbaiTl9f3PbeFoeyCK4JU8sXJ0+Nu+3vPXMhtiLLkPOjRCSzTSrf3WyIxmoIZC5wrfIwMealPwb04IpZ25hW0lNZL8d4LItbfxA9ejE9QkQaEdX4ZtZuWxiIxz/QlbCM7Or06aTX41AWoStDzl/1cxzKInSlpG9+T0/KocZ2WR2621AWYVumWprZfDCa8XOsx7KIJ9dRU8t3X1rjBI9/wJEw9Vzx1rkEtd445bNFe/Wp6PAxMgzowZFeybpa/eAEA3pwVJlP9C+4IDpMtTxSSU24WlrjBAN66KhWmHO9tMYJBvTQRphavjB99m6v50HmgjZaeekiNb7voaHK2m1La5zgJiq0Wbt3oaeBfBPKIrQwlOJYrTAvd+/ZnY/7'+
			'XAivZ1ltdeEH2pod+pohciiLYBOWkclPnel5IN+Em6hgqxcfnQvyfHj8A0S09Rxx+dqXF9gmXzNEDpkLiIhIzc+fD/qcyFxAwtRzKzdOBHL7gcOzRSD58Z3PKaAZIoeyGHFmvTKRS8YDmyFyKIsRJixTyU7Gvwjr/PjEdYQpj2ePV1f+5Ovje54hcvjyt4jSNnOXMuMnp8J8D2SuCDLr8u+PLn96Ouz3wWwxYixdTWWT8U/oyZIa/pC65xki53lAj7K4e1m6mlq+/vVRtbBQ6d67dyiLEWHpamrp2vGjamEhkOU0brgJLjs9xkgSCK3dx9JrC5nxUx+ohYfNjFViuwOdIXKeMpdeXZ8dGhrGr5btIrq8Opa6+PEJal223Bee1nPJS7PJkK4DAiYsU6ks/nqsEVg7QnLxY54HWPuVNz+8nJBiAwdDvzLwzaiWRzLJ+L'+
			'fy8h/8Bikfa/FS2PbLF0Q7UBaJiCr/3vvswKF3vuv1jSF4urw6tv7X1TNr96/4+laaoHnOXEREh46cPLLv5Te+CfnawAVLq/5TLy//VJ77Zao0dyNLrSsb+Dir75nLKbj4WOw51n6h2Xj98LHD+199673YwNBBIQTrjwllmCy9lrG0akZXin+v3R+5Ky/9VqHWwOHBxYOI3yA1WNsOgCACivMdXE+1eZ89wVwadMC/yY9nnP9lcOHTPxAap8zV8WeIiWiItXm2GuSHB3Np0AH/z+KZqO6wvS8ZygkyF4QGwQWh6VgWWzq0lkincokg7T/Lod338ucEQQGhQXBBaLqWRVcnkbCEsN92uuS5gcwFofkP5VwEmVpYjm0AAAAASUVORK5CYII=';
		me._principals_welcome__img.ggOverSrc=hs;
		el.ggId="Principal\'s Welcome";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 49px;';
		hs+='left : 318px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 227px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._principals_welcome.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._principals_welcome.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.isInVR() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._principals_welcome.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._principals_welcome.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._principals_welcome.style[domTransition]='';
				if (me._principals_welcome.ggCurrentLogicStateVisible == 0) {
					me._principals_welcome.style.visibility="hidden";
					me._principals_welcome.ggVisible=false;
				}
				else {
					me._principals_welcome.style.visibility=(Number(me._principals_welcome.style.opacity)>0||!me._principals_welcome.style.opacity)?'inherit':'hidden';
					me._principals_welcome.ggVisible=true;
				}
			}
		}
		me._principals_welcome.onclick=function (e) {
			if (me._welcome_video.ggApiPlayer) {
				if (me._welcome_video.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._welcome_video.ggApiPlayer.playVideo();
					};
					if (me._welcome_video.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._welcome_video.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._welcome_video.ggApiPlayerType == 'vimeo') {
					me._welcome_video.ggApiPlayer.play();
				}
			} else {
				player.playSound("welcome_video","1");
			}
			player.setVariableValue('vis_welcome_video', true);
		}
		me._principals_welcome.onmouseover=function (e) {
			me._principals_welcome__img.src=me._principals_welcome__img.ggOverSrc;
		}
		me._principals_welcome.onmouseout=function (e) {
			me._principals_welcome__img.src=me._principals_welcome__img.ggNormalSrc;
		}
		me._principals_welcome.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text chinese";
		el.ggType='text';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 57px;';
		hs+='position : absolute;';
		hs+='top : 11px;';
		hs+='visibility : inherit;';
		hs+='width : 122px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 122px;';
		hs+='height: 24px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 13px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u6821\u957f\u7684\u6b22\u8fce";
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		me._principals_welcome.appendChild(me._text_2);
		el=me._svg_70=document.createElement('div');
		els=me._svg_70__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8zIiBkYXRhLW5hbWU9IkxheWVyIDMiIHZpZXdCb3g9IjAgMCA0MS4yMiA0Mi44MyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6Mi41cHg7fS5jbHMtMntmaWxsOiNmZmY7fTwvc3R5bGU+CiA8L2RlZnM+CiA8Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3k9IjIxLjU5IiBjeD0iMjAuNjciIHI9IjE4LjI3Ii8+CiA8cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xMy43NywxMi4zNlYzMC40N2EuNjYuNjYsMCwwLDAsMS'+
			'wuNTdMMzAuNjYsMjJhLjY1LjY1LDAsMCwwLDAtMS4xM0wxNC43NSwxMS43OUEuNjYuNjYsMCwwLDAsMTMuNzcsMTIuMzZaIi8+Cjwvc3ZnPgo=';
		me._svg_70__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : 28px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_70.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_70.ggUpdatePosition=function (useTransition) {
		}
		me._principals_welcome.appendChild(me._svg_70);
		me.divSkin.appendChild(me._principals_welcome);
		el=me._music_program=document.createElement('div');
		els=me._music_program__img=document.createElement('img');
		els.className='ggskin ggskin_music_program';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYYAAAB0CAYAAACBrZVDAAAQ8klEQVR4nO3d248b1R0H8J+920IuDSqCXqAvBRX6glSpElKrqmpVqRIvVV8qHtr/gIe+VFVFW6mU9qFSEZQ7CSE0EFICgUBCSiCEgohyXza3zW03m82yd+/aXt89l9OH7OyOj891PB5719+PZM147F2Ps3C+Pud3zjhFainF/ZThLb10S917/28/TKXS39e8JgAARMVYbXHmzA8nxw6NE5FPREyxFd76LV6ODwXR47JQuHFjlKKU6EcBACAOrlvZMjl2aJqI+uhGO8yWtv7SU3y60Saz0LEGNsEQMOk1pEkUDGkSRwoAALSO+fPT1w4+TyuhEA6EsOBYmnucEZkHg6yHEGz1oUDUx9BjAABom3o196/iwnCFbrTtPhF5tNI284JAaBoNsu0xpBRb/V'+
			'ASAAC0BfPdkYkLb+6mG70FJnpKaBsOixR33KrGICOqPYgDIkUpDCUBAMSvVBh7rF4vMloZHgrqCMFW9OGdhbbLWqkxmM5QSq/sy3o0AAAQle/Vj01c2HOYGkdmVKFA1BwOywERdVZS+JhoSqt0yqrF6wEAgB7LzQ4+Titt7fJxkvcUhIGwJMUHg6rIrGK4pgE9BgCAODm1xX1z1z4dpuY6rmydAh8OgeVjUWsMJr2EpgI0E/0kAABExKqZ65++QOJQELXHAVkPgoiiz0rif7nsudxYFnoMAABxqZXmXlvMXJgncdusEvQehFqZQqp6YdFMJSJiSAUAgBgw35ufGdm7I7gbfkhyXzaFtemxOKar8iShsDRVFdEAANCySmH8xWpxvsodDq9VEIWBSUjEHgyqYSXNUwAAwITvOSNfXHpr/9JdJtlS6L4qJHgsztXIsjEu'+
			'0boHAACIaHHu/HPkuqJrIJn2GEQ/syzKtZJsprQ2hIJPaUojHwAAInOd8rHZkQMnucN8TSHY8jfiHhPeb0eNgUgWFKgxAAC0ws9OHH2OGr9Xgd8PHxPdZI9RsG1XMEggGQAAonKqufdyE8evkj4UVDdlKFDMNQYAAGgTxvzK7PCHW0ncA4gaCF3QY8DVkgAAIqkXp3eUc8PzpA4DUVjwx7TDSUkGA1Y+AwBEwHxvbvLC3l2kbtR1vQdZjYH4+4n2GJRrsAEAQKiUvbrZrS1UKNrwka6XEHm6aozQYwAAMOV7tctTQ29/QHYFZlk4GN2SDQaMJAEAWCnMnXuGyPUoem9BN4zUBNNVAQC6lFcvHp678v4AyRt8m5lIutpC2xe4AQBACxgxLzd2OLyYzXa9gm66KlFzz6ETC9wIHQYAAANueeGd7NSJMWr+xC/qCdiuXS'+
			'DVfsKzktLEkAwAAEqM+aW54QPbSN7ge6GbKgRMA6IBVj4DAHSZWmFyezl7NUviQGh1pTPptig+AwB0EeZ70zMX3nqT5MVmUTiIVjur6grhbRNMVwUA6CLl7JXn3Wq+SuoZSCY9B93itkBTUKDHAADQJTy3NjR9btdBMpuWKgsH01XOsn3UGAAAukVx5vOnyH6tgk0o6AKCCCufAQC6g1svfJy5cuA0tRYGslCwkvg6BkxXBQDgMTd37bNgMZttIJj2EIx6C0RY+QwA0HFOeX53fuL4ONkPIdmsVwhT9iJQfAYA6CTmFWav7NtGzUNCUQLCZJWz9EyCHdQYAAA6qLo4ua22cC1P6jpB1HAgxX5YwzH0GAAAOoT57hez5/+zm1rrEYTDQxcKwtPgD2C6KgBAh5QzV551q8UaNQ8hmV76IkoQaCV7Eb00ocMAAEBEvlM5'+
			'M3Pujf9Ra3UFXcFZdxkMYXgkPJSEZAAAICIqTA48ReSqQkG1slm1doGoscG3npWEoSQAgIS5tfzBheED56g9U1ONLnuhguIzAECSGHOyI4eeI3kBuZVhJKLmcCCyDAh8gxsAQIKc0tzrxamBSRIHgm6mkaxXEHkxm0gHVj4jGQCgNzHm5+cu7NlO+sbfpKhstWjNRsJf7QkA0Luq+etba/nrBZIHgGioKOq1kCL3HrDyGQAgAcxzrmcGd75D5gvUTB8Xvlwr54riMwBAAipzQ8+4btEhcUMvm3VkW2NQMQ4LTFcFAGgzv14emD371mGyGw6KUmeIpQeBHgMAQHuxxfGjTy8tZlPVFGx7CMQdE+2L7muhxgAA0EZuJXsgd/XgJVIHgk2ROdC2+TyJBoNPaUojGQCgZ7Da/PCBzaSfZRTHzKPYggI1BgCANqkXpl+vTJ'+
			'2eIXUdwSQoRFTTUvnnWMFQEgBAGzDmZReGdu0gcYOvut6R6nLaJrOPWoaVzwAAbVBdGH2xlp8qkXgKatQv5QnwvYVYh5YwlAQAEDPm1UZnB1/dR+IL30X9hjYS7Ie3DafQyvljuioAQMxKk6efILfqknko2IQFURvCICzxoSSGXACANcyr5j+aH9p9isRFZl0o6GYqETUGQFvqDegxAADEhfnV7KX3nib7r+k0KUqr1jHEGhCoMQAAxKSen3ipPDU4S2ZFZtUX79jMTOJDoeWQSLbHgK98BoA1inn10czgS7soek9Bt9BN+LLteC8YSgIAaBEj5hauffKIWy3WSHz9I5OhI5PZSY0v2yYYSgIAaJGTH9+Su/zBZRIHgSogZHUFInHDn0gPItlvcEuliFLoMQDA2uG7lTPTxze/RnbTT20WtJmueI6tB4EeAwBAZH4l'+
			'f3Hvo0trFvjCsekMJFmAEDUHQtuGj8JwSQwAgIjK0+f+Xrx+bILsZyFFWfFMgn3VscjQYwAAiMApTL4yP/Dvj0kcCp7gmG6KqmzoSFVzUB2PDFdXBQCw5NcLR6ePPL2F1IHgkT4gVCuciToQCkSJDyVhIQMArG7MdyYyp7Y/Qm7VI7MhJD4cdJe9UBWbE6k3JDsrKckXAwCIm+/ls0P7fl9bGFkkdRCYDCXJVjqTYKvaj13CQ0mYrgoAqxTzK4WRQ78rjX16jcwafVE4iHoJsqGkxGcjBTowKwkAYHVhxNzS+LGH85f3D1G02Ud8KPA9hJWX6tAU1TBcEgMAQI1VZs4+mjvz+nFqLRBMpqc2vbbhsVihxwAAIMX86sz5vy2c2PoRqS9tYbNeQRUQDS/eznemknwwoMMAAKsAY8ytTA3+deHUy4co+vCRLiREw0aqQF'+
			'h7K58ZhpIAYFVgTnni5J+zn796mJp7Cqa9BpNVzTaXvkisB4GhJACAMMbKpbHDf8qd3XWS1KuabaalqnoKsplIDWcV3xvUw7WSAAACnjNVuLT/D4sjB6+SeNqpJzmmCgjZWgUicSh0vNaAS2IAABCR75TOLpx4+eFa5mKWVhpxPghEW1FYqNYt6GYidRwuiQEAPc8rzx/IfPb4P9xqrkbNw0eixl+2VfUSdEVnkhxLHGoMANC7GKvVMhefzBx5YS+RKxsOsgkFk4AgwZbf76hEg8FPE6XRYQCALsDc2rXFi/v/Uhr5aITk9QHVkJHppbVVRWcS7IvuJwornwGg53iluX3zR5590i3NlkndsJvUFGxWNnfFJS90kgwGlmKsnuDrAQA0YL4zU50YeCw7sP0IrTTook/+suEhk0KzyUK25VMyPJaoZHsMzMvh6qoA0AHM'+
			'LczsXji5ZbObnwx6CeGGXFUnUIWEaOGb6crmjgeATLI1Brc62vflDUm+JAD0ON+pjFRGP/lnfujdcyT+ZG/TKzCZkioKB6LmgBDpirBINBjcYmawb/1tSb4kAPQo5jlz9czFrfMnXnp/6dvWbGoJpsEgCwM/OA3Jtul0W3/H8Uk0GBbP7zt2++331iiVuinJ1wWA3sF8r+TkxnbkTm3d7ZYWqmRfXNbNOAoXnXXrFZZPy2C/a5gGAyO76UTCN+vkRypuvfDfvptv+aXF7wIAMOBXncWpPYXTu3bWMpdypB8ysh1Gsg2DwKoKBaJoPQZRSOi6R8vbytjhbRvvfeAXRKl0hNcGAGjku7n64sTbxbNvvF3LDOepeYjHNhT4fVGBWRUKspDo2iDgxTmUJPtHaNgWht69uu5b9+/s23Dbr2N8bQDoMb5TueLMD+9ZPLPz4N'+
			'KQUfhTvGrWkcnsI37WkWxLJA4F3qoKCf6Tv2i4KBXa8vtpwa0vtN+/dL9h+6VNX99w60/++Eq6/6bvxPdWAGCtY8wr+sXMofL4if3Fi3svkzwIVL0FXSDIho9EM5BkxWVVsbmrQ4GoPcEQDoemUAi26+/68Z2b7ntwa6qv/xuxvRsAWHuYX3EruWPO/PDHxTNvHnVreYeax/plgWA760gUCqJho+DY8llKtk3vJuo/Q5LaFQzKHkOwv/6uH92x6b4Hn0j13XR3XG8IAFY/5tVnvMrC8Xpm+Gjx4t7PvXI2GCriP6XrAsG2uGwSCjazjlTHupZtMATbYF8VCn2hW79kP93/lW9u+OoPHnqob+PXfrX0cwDQY5hXn/Sri+e9wsyZ8tTAYHX0yCSRy4/hy26qht22uGwSCiTYJ8G+6lhX001B5XsJ/FbXYxCFQfj+8vM2'+
			'3vPzb6+7+6e/6Vt3688olV7X+lsDgG7DfL9AbnXCd0rXvWp+1MmND9e/OHW5lrm0SOLhGNWMH9NhJFXxWdTrCB/jX1N0n0LHVfdXDZNgCLaqYFAVokXBEL411CX6N9528/p7Hvhe/y13fjf95U13pPr6NhBjofNkunMGgA5IEXnM9x3G3Cq5Ttn36kXmlLN+JbfglObmvbnLM7XsaJHkn7p1wWDbYzC9qWYe6c6VQsdU91cVm2Dgt7I6Q/iYLhhExWr+d8luNu8DAOIlawhlBVldI6t7zCYUbMNCVFQO9kXvbU0UmFVaWcfAaKVBDv/Dpkj8x5M18OHHfe7nZa/JhwMjhANAknTBoGv4dcMzujCI2mMQDT+JfqesByN7/7Jjq1LUYOBDgQ8DIvkfVPapn//9fAjIegzoPQAkQ9UYygIhvG8SCiZtiK7XYHJMFQb8ef'+
			'DvfU2HApH9tZL4T+b8cf6PGg6CAP/zRI1/iL7QPoIBoDvoGkNRgx7eN7nZPj/cuKsKyPyx8GOy15S97zUfCkStXSspvKXQ1qcb9QF+eIioudGW/cfQR829C4QDQGeYhEKwjdrARw0LXfFYNlzE9xZk56/6d1hzgRBodShJlqzhcCASN9S6P7yu+KwLA4QDQDxMGkjR/8vh+7IhoFZ7DCaNvmzISFVcVvUaZMfWDJtgCMJAdT8sXEj2ucdM/2PQhQLCACBZspAw+X/apNgbR+8hyu/l34vovcr+DdYcXTDYhgGPDwTV64j+yCY9BoQDQDJ0oRDeb0cwtNq74H+Gf0893UsIS+L7GHzuvug/FtHiONQXALqLLBiCfVUjbDq8Y9qYmwSE6rkk2Mrep+zYmmUSDLIgCNcY+HpDQFZrCP+xwsNN/CI50YI69BYAOkPVYKoa'+
			'YNUYv00Dz/9e2/BQbWXvsacCIWDakMqeJ2qkw8fCn/xF+7pjsjBAMAAkTxcMwTbO4R6Tht30mGhr8t56jk1DKnquKBT4ra6xl4WHLBBkoWD7fgDAnqwBNflkH3XIiH9d00Zf9TOy92Ly2JoXpSFVfUqXBYOqkTe5JpJsX3duABAvm16DbF8VCrLfw7+2TaNvOjzU02EQ1kpDahoQqk/8NrOOEAwAnaVrUHXDPSbj/yaf+kX3o9YKEAYCrTakJrODVHUI0+KybKs6HwCIl0njaloLaGU4SHVOpoGge6ynxRkMomOmNQhdiMh+r+k5AUDrTBpZ21qAyfN15xClN4BQUIijEdV9ercNCtOftT0fAIhO15BGqQXY1gZMzsWkwUcoaMTViJoO7egaepPegek5IyAA4mHakJrWAFotEtuel+1ze97/Ab0Tfc/AnYhiAAAAAE'+
			'lFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAA/CAYAAADt0Fr6AAAE4klEQVR4nO3dTWzbZBgH8MdZu7JVTEggBBMcduAAV06c0e7jwpETcEBIO07iS2ITBzRNWrbDLjtwmDRNA6GVtRsLatN2ndhH+ZhAa9eQlbXNV9Mmbew48dfLoYn3ZIkb27FTOv9/1aQ39mvH0h49z/vabxJJCEFPkyRpgL18vtl48d2vPort3f8aEZEw9b12D2HF2k4CzyYpZtnNPYOasbFyu3Tr7G0iWmO9KkREdhBJkiTxU7D2YLMxMPzS+9LgvreDv2LYrYzNbJqIholog22WiFhwuSFJErXGIESZsIxsaSY+4bQf5Qx8M5Xile32O2Uunp7sABQkkLfAVl28+SMRGY2XJtsliFAWwSdTLc8o89dXtuuDsgi+aIUHP3fr4ylzbVVLZK6oE6aeK9'+
			'05nyAihW2us7ZF5Lksbv2DaDPk3Kibfshc4JmSGg8huBBbkWdp8oSSnkw1XvKyqLO2j9kiIbaiTl9f3PbeFoeyCK4JU8sXJ0+Nu+3vPXMhtiLLkPOjRCSzTSrf3WyIxmoIZC5wrfIwMealPwb04IpZ25hW0lNZL8d4LItbfxA9ejE9QkQaEdX4ZtZuWxiIxz/QlbCM7Or06aTX41AWoStDzl/1cxzKInSlpG9+T0/KocZ2WR2621AWYVumWprZfDCa8XOsx7KIJ9dRU8t3X1rjBI9/wJEw9Vzx1rkEtd445bNFe/Wp6PAxMgzowZFeybpa/eAEA3pwVJlP9C+4IDpMtTxSSU24WlrjBAN66KhWmHO9tMYJBvTQRphavjB99m6v50HmgjZaeekiNb7voaHK2m1La5zgJiq0Wbt3oaeBfBPKIrQwlOJYrTAvd+/ZnY/7'+
			'XAivZ1ltdeEH2pod+pohciiLYBOWkclPnel5IN+Em6hgqxcfnQvyfHj8A0S09Rxx+dqXF9gmXzNEDpkLiIhIzc+fD/qcyFxAwtRzKzdOBHL7gcOzRSD58Z3PKaAZIoeyGHFmvTKRS8YDmyFyKIsRJixTyU7Gvwjr/PjEdYQpj2ePV1f+5Ovje54hcvjyt4jSNnOXMuMnp8J8D2SuCDLr8u+PLn96Ouz3wWwxYixdTWWT8U/oyZIa/pC65xki53lAj7K4e1m6mlq+/vVRtbBQ6d67dyiLEWHpamrp2vGjamEhkOU0brgJLjs9xkgSCK3dx9JrC5nxUx+ohYfNjFViuwOdIXKeMpdeXZ8dGhrGr5btIrq8Opa6+PEJal223Bee1nPJS7PJkK4DAiYsU6ks/nqsEVg7QnLxY54HWPuVNz+8nJBiAwdDvzLwzaiWRzLJ+L'+
			'fy8h/8Bikfa/FS2PbLF0Q7UBaJiCr/3vvswKF3vuv1jSF4urw6tv7X1TNr96/4+laaoHnOXEREh46cPLLv5Te+CfnawAVLq/5TLy//VJ77Zao0dyNLrSsb+Dir75nLKbj4WOw51n6h2Xj98LHD+199673YwNBBIQTrjwllmCy9lrG0akZXin+v3R+5Ky/9VqHWwOHBxYOI3yA1WNsOgCACivMdXE+1eZ89wVwadMC/yY9nnP9lcOHTPxAap8zV8WeIiWiItXm2GuSHB3Np0AH/z+KZqO6wvS8ZygkyF4QGwQWh6VgWWzq0lkincokg7T/Lod338ucEQQGhQXBBaLqWRVcnkbCEsN92uuS5gcwFofkP5VwEmVpYjm0AAAAASUVORK5CYII=';
		me._music_program__img.ggOverSrc=hs;
		el.ggId="Music Program";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 49px;';
		hs+='left : 522px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 227px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._music_program.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._music_program.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.isInVR() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._music_program.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._music_program.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._music_program.style[domTransition]='';
				if (me._music_program.ggCurrentLogicStateVisible == 0) {
					me._music_program.style.visibility="hidden";
					me._music_program.ggVisible=false;
				}
				else {
					me._music_program.style.visibility=(Number(me._music_program.style.opacity)>0||!me._music_program.style.opacity)?'inherit':'hidden';
					me._music_program.ggVisible=true;
				}
			}
		}
		me._music_program.onclick=function (e) {
				player.playSound("music_video","1");
			player.setVariableValue('vis_music_video', true);
		}
		me._music_program.onmouseover=function (e) {
			me._music_program__img.src=me._music_program__img.ggOverSrc;
		}
		me._music_program.onmouseout=function (e) {
			me._music_program__img.src=me._music_program__img.ggNormalSrc;
		}
		me._music_program.ggUpdatePosition=function (useTransition) {
		}
		el=me._music_program_1=document.createElement('div');
		els=me._music_program_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Music Program_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text chinese";
		el.ggType='text';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 57px;';
		hs+='position : absolute;';
		hs+='top : 11px;';
		hs+='visibility : inherit;';
		hs+='width : 122px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 122px;';
		hs+='height: 24px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 13px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u97f3\u4e50\u8282\u76ee";
		el.appendChild(els);
		me._music_program_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._music_program_1.ggUpdatePosition=function (useTransition) {
		}
		me._music_program.appendChild(me._music_program_1);
		el=me._svg_7=document.createElement('div');
		els=me._svg_7__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8zIiBkYXRhLW5hbWU9IkxheWVyIDMiIHZpZXdCb3g9IjAgMCA0MS4yMiA0Mi44MyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6Mi41cHg7fS5jbHMtMntmaWxsOiNmZmY7fTwvc3R5bGU+CiA8L2RlZnM+CiA8Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3k9IjIxLjU5IiBjeD0iMjAuNjciIHI9IjE4LjI3Ii8+CiA8cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xMy43NywxMi4zNlYzMC40N2EuNjYuNjYsMCwwLDAsMS'+
			'wuNTdMMzAuNjYsMjJhLjY1LjY1LDAsMCwwLDAtMS4xM0wxNC43NSwxMS43OUEuNjYuNjYsMCwwLDAsMTMuNzcsMTIuMzZaIi8+Cjwvc3ZnPgo=';
		me._svg_7__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : 28px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_7.ggUpdatePosition=function (useTransition) {
		}
		me._music_program.appendChild(me._svg_7);
		me.divSkin.appendChild(me._music_program);
		el=me._video_popup_vimeo=document.createElement('div');
		el.ggId="video_popup_vimeo";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 70%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_vimeo.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_vimeo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_popup_vimeo') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_vimeo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_vimeo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_vimeo.style[domTransition]='';
				if (me._video_popup_vimeo.ggCurrentLogicStateVisible == 0) {
					me._video_popup_vimeo.style.visibility=(Number(me._video_popup_vimeo.style.opacity)>0||!me._video_popup_vimeo.style.opacity)?'inherit':'hidden';
					me._video_popup_vimeo.ggVisible=true;
				}
				else {
					me._video_popup_vimeo.style.visibility="hidden";
					me._video_popup_vimeo.ggVisible=false;
				}
			}
		}
		me._video_popup_vimeo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._loading_video_vimeo=document.createElement('div');
		els=me._loading_video_vimeo__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgZmlsbD0id2hpdGUiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCAzMiAzMiI+CiA8Y2lyY2xlIGN5PSIzIiBjeD0iMTYiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiB0cmFuc2Zvcm09In'+
			'JvdGF0ZSg0NSAxNiAxNikiIGN4PSIxNiIgcj0iMCI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHZhbHVlcz0iMDszOzA7MCIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49IjAuMTI1cyIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgMTYgMTYpIiBjeD0iMTYiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjA7Mzsw'+
			'OzAiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjI1cyIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoMTM1IDE2IDE2KSIgY3g9IjE2IiByPSIwIj4KICA8YW5pbWF0ZSBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgdmFsdWVzPSIwOzM7MDswIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMC4zNzVzIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMi'+
			'AwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYgMTYpIiBjeD0iMTYiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjVzIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSgyMjUgMTYgMTYpIiBjeD0iMTYi'+
			'IHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjYyNXMiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDI3MCAxNiAxNikiIGN4PSIxNiIgcj0iMCI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHZhbHVlcz0iMDszOzA7MCIgYXR0cmlidXRlTmFtZT0iciIgYm'+
			'VnaW49IjAuNzVzIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSgzMTUgMTYgMTYpIiBjeD0iMTYiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjg3NXMiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIGN4PSIxNiIgcj0iMCI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHZhbHVlcz0iMDszOzA7MCIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49IjAuNXMiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44Ii8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_video_vimeo__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_video_vimeo";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_video_vimeo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_video_vimeo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._video_popup_vimeo.appendChild(me._loading_video_vimeo);
		el=me._popup_video_vimeo=document.createElement('div');
		me._popup_video_vimeo.seekbars = [];
		me._popup_video_vimeo.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._popup_video_vimeo.seekbars.length; i++) {
					var seekbar = me.findElements(me._popup_video_vimeo.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._popup_video_vimeo.hasChildNodes()) {
				me._popup_video_vimeo.removeChild(me._popup_video_vimeo.lastChild);
			}
			if(media == '') {
				notifySeekbars();
			if (me._popup_video_vimeo.ggVideoNotLoaded ==false && me._popup_video_vimeo.ggDeactivate) { me._popup_video_vimeo.ggDeactivate(); }
				me._popup_video_vimeo.ggVideoNotLoaded = true;
				return;
			}
			me._popup_video_vimeo.ggVideoNotLoaded = false;
			me._popup_video_vimeo__vid=document.createElement('iframe');
			me._popup_video_vimeo__vid.className='ggskin ggskin_video';
			var ggVideoParams = '?autoplay=1&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + media + ggVideoParams;
			me._popup_video_vimeo__vid.setAttribute('src', ggVideoUrl);
			me._popup_video_vimeo__vid.setAttribute('width', '100%');
			me._popup_video_vimeo__vid.setAttribute('height', '100%');
			me._popup_video_vimeo__vid.setAttribute('allow', 'autoplay');
			me._popup_video_vimeo__vid.setAttribute('allowfullscreen', 'true');
			me._popup_video_vimeo__vid.setAttribute('style', 'border:none; ; ;');
			me._popup_video_vimeo.appendChild(me._popup_video_vimeo__vid);
			me._popup_video_vimeo.ggVideoSource = media;
		}
		el.ggId="popup_video_vimeo";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._popup_video_vimeo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_video_vimeo.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._popup_video_vimeo.ggCurrentLogicStateSize != newLogicStateSize) {
				me._popup_video_vimeo.ggCurrentLogicStateSize = newLogicStateSize;
				me._popup_video_vimeo.style[domTransition]='width 0s, height 0s';
				if (me._popup_video_vimeo.ggCurrentLogicStateSize == 0) {
					me._popup_video_vimeo.style.width='150%';
					me._popup_video_vimeo.style.height='150%';
					skin.updateSize(me._popup_video_vimeo);
				}
				else {
					me._popup_video_vimeo.style.width='100%';
					me._popup_video_vimeo.style.height='100%';
					skin.updateSize(me._popup_video_vimeo);
				}
			}
		}
		me._popup_video_vimeo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_popup_vimeo') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_video_vimeo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_video_vimeo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_video_vimeo.style[domTransition]='width 0s, height 0s';
				if (me._popup_video_vimeo.ggCurrentLogicStateVisible == 0) {
					me._popup_video_vimeo.style.visibility=(Number(me._popup_video_vimeo.style.opacity)>0||!me._popup_video_vimeo.style.opacity)?'inherit':'hidden';
					if (me._popup_video_vimeo.ggVideoNotLoaded) {
						me._popup_video_vimeo.ggInitMedia(me._popup_video_vimeo.ggVideoSource);
					}
					me._popup_video_vimeo.ggVisible=true;
				}
				else {
					me._popup_video_vimeo.style.visibility="hidden";
					me._popup_video_vimeo.ggInitMedia('');
					me._popup_video_vimeo.ggVisible=false;
				}
			}
		}
		me._popup_video_vimeo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._video_popup_vimeo.appendChild(me._popup_video_vimeo);
		me.divSkin.appendChild(me._video_popup_vimeo);
		el=me._close=document.createElement('div');
		els=me._close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8zIiBkYXRhLW5hbWU9IkxheWVyIDMiIHZpZXdCb3g9IjAgMCA0MS4yMiA0Mi44MyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2ZpbGw6IzEwMWI0OTt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT4KIDwvZGVmcz4KIDxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeT0iMjEuNTkiIGN4PSIyMC42NyIgcj0iMTguMjciLz4KIDxyZWN0IGNsYXNzPSJjbHMtMiIgcng9IjEuMjgiIHk9IjkuMzgiIHdpZHRoPSI0LjY1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOS4yOSAyMC45Nykgcm90YXRlKC00NSkiIGhlaWdodD'+
			'0iMjQuNjUiIHg9IjE4LjM0Ii8+CiA8cmVjdCBjbGFzcz0iY2xzLTIiIHJ4PSIxLjM2IiB5PSI5LjEyIiB3aWR0aD0iNC42NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjEuMjEgLTguMzMpIHJvdGF0ZSg0NSkiIGhlaWdodD0iMjQuNjUiIHg9IjE4LjM0Ii8+Cjwvc3ZnPgo=';
		me._close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='opacity : 0.59999;';
		hs+='position : absolute;';
		hs+='right : 6px;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._close.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._close.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._close.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._close.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._close.style[domTransition]='right 0s, top 0s, opacity 0s';
				if (me._close.ggCurrentLogicStatePosition == 0) {
					me._close.style.right='10px';
					me._close.style.top='10px';
				}
				else {
					me._close.style.right='6px';
					me._close.style.top='10px';
				}
			}
		}
		me._close.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_music_video') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._close.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._close.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._close.style[domTransition]='right 0s, top 0s, opacity 0s';
				if (me._close.ggCurrentLogicStateVisible == 0) {
					me._close.style.visibility=(Number(me._close.style.opacity)>0||!me._close.style.opacity)?'inherit':'hidden';
					me._close.ggVisible=true;
				}
				else {
					me._close.style.visibility="hidden";
					me._close.ggVisible=false;
				}
			}
		}
		me._close.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['close'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._close.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._close.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._close.style[domTransition]='right 0s, top 0s, opacity 0s';
				if (me._close.ggCurrentLogicStateAlpha == 0) {
					me._close.style.visibility=me._close.ggVisible?'inherit':'hidden';
					me._close.style.opacity=1;
				}
				else {
					me._close.style.visibility=me._close.ggVisible?'inherit':'hidden';
					me._close.style.opacity=0.59999;
				}
			}
		}
		me._close.onclick=function (e) {
			player.setVariableValue('vis_image_popup', false);
			player.setVariableValue('vis_info_popup', false);
			player.setVariableValue('vis_video_popup_file', false);
			player.setVariableValue('vis_video_popup_url', false);
			player.setVariableValue('vis_video_popup_vimeo', false);
			player.setVariableValue('vis_video_popup_youtube', false);
			if (
				(
					((player.getVariableValue('vis_website') == true)) && 
					((player.getVariableValue('opt_url') == true))
				)
			) {
				me._web_page.ggText="";
				me._web_page.ggTextDiv.innerHTML=me._web_page.ggText;
				if (me._web_page.ggUpdateText) {
					me._web_page.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				}
				if (me._web_page.ggUpdatePosition) {
					me._web_page.ggUpdatePosition();
				}
				me._web_page.ggTextDiv.scrollTop = 0;
			}
			player.setVariableValue('vis_website', false);
			player.setVariableValue('vis_music_video', false);
		}
		me._close.onmouseover=function (e) {
			me.elementMouseOver['close']=true;
			me._close.logicBlock_alpha();
		}
		me._close.onmouseout=function (e) {
			me.elementMouseOver['close']=false;
			me._close.logicBlock_alpha();
		}
		me._close.ontouchend=function (e) {
			me.elementMouseOver['close']=false;
			me._close.logicBlock_alpha();
		}
		me._close.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._close);
		el=me._timer_2=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=3600000;
		el.ggId="Timer 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 49px;';
		hs+='left : 832px;';
		hs+='position : absolute;';
		hs+='top : 214px;';
		hs+='visibility : inherit;';
		hs+='width : 57px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_2.ggIsActive=function() {
			return (me._timer_2.ggTimestamp + me._timer_2.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_2.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_2.style[domTransition]='';
				if (me._timer_2.ggCurrentLogicStateVisible == 0) {
					me._timer_2.style.visibility="hidden";
					me._timer_2.ggVisible=false;
				}
				else {
					me._timer_2.style.visibility=(Number(me._timer_2.style.opacity)>0||!me._timer_2.style.opacity)?'inherit':'hidden';
					me._timer_2.ggVisible=true;
				}
			}
		}
		me._timer_2.ggCurrentLogicStateVisible = -1;
		me._timer_2.ggUpdateConditionTimer=function () {
			me._timer_2.logicBlock_visible();
		}
		me._timer_2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_2);
		el=me._musicvideo=document.createElement('div');
		me._musicvideo.seekbars = [];
		me._musicvideo.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._musicvideo.seekbars.length; i++) {
					var seekbar = me.findElements(me._musicvideo.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._musicvideo.hasChildNodes()) {
				me._musicvideo.removeChild(me._musicvideo.lastChild);
			}
			if (me._musicvideo__vid) {
				me._musicvideo__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
			if (me._musicvideo.ggVideoNotLoaded ==false && me._musicvideo.ggDeactivate) { me._musicvideo.ggDeactivate(); }
				me._musicvideo.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('musicvideo');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._musicvideo.ggVideoNotLoaded = false;
			me._musicvideo__vid=document.createElement('video');
			me._musicvideo__vid.className='ggskin ggskin_video';
			me._musicvideo__vid.setAttribute('width', '100%');
			me._musicvideo__vid.setAttribute('height', '100%');
			me._musicvideo__vid.setAttribute('controlsList', 'nodownload');
			me._musicvideo__vid.setAttribute('oncontextmenu', 'return false;');
			me._musicvideo__vid.setAttribute('controls', '');
			me._musicvideo__source=document.createElement('source');
			me._musicvideo__source.setAttribute('src', media);
			me._musicvideo__vid.setAttribute('playsinline', 'playsinline');
			me._musicvideo__vid.setAttribute('style', 'object-fit: cover;');
			me._musicvideo__vid.style.outline = 'none';
			me._musicvideo__vid.appendChild(me._musicvideo__source);
			me._musicvideo.appendChild(me._musicvideo__vid);
			var videoEl = player.registerVideoElement('music-video', me._musicvideo__vid);
			videoEl.autoplay = false;
			notifySeekbars();
			me._musicvideo.ggVideoSource = media;
		}
		el.ggId="music-video";
		el.ggDx=0;
		el.ggDy=-6.48;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 60%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 60%;';
		hs+='pointer-events:auto;';
		hs+='overflow: hidden';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._musicvideo.ggIsActive=function() {
			if (me._musicvideo__vid != null) {
				return (me._musicvideo__vid.paused == false && me._musicvideo__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._musicvideo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_music_video') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._musicvideo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._musicvideo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._musicvideo.style[domTransition]='';
				if (me._musicvideo.ggCurrentLogicStateVisible == 0) {
					me._musicvideo.style.visibility=(Number(me._musicvideo.style.opacity)>0||!me._musicvideo.style.opacity)?'inherit':'hidden';
					if (me._musicvideo.ggVideoNotLoaded) {
						me._musicvideo.ggInitMedia(me._musicvideo.ggVideoSource);
					}
					me._musicvideo.ggVisible=true;
				}
				else {
					me._musicvideo.style.visibility="hidden";
					me._musicvideo.ggInitMedia('');
					me._musicvideo.ggVisible=false;
				}
			}
		}
		me._musicvideo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._musicvideo);
		el=me._welcome_video=document.createElement('div');
		me._welcome_video.seekbars = [];
		me._welcome_video.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._welcome_video.seekbars.length; i++) {
					var seekbar = me.findElements(me._welcome_video.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._welcome_video.hasChildNodes()) {
				me._welcome_video.removeChild(me._welcome_video.lastChild);
			}
			if (me._welcome_video__vid) {
				me._welcome_video__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
			if (me._welcome_video.ggVideoNotLoaded ==false && me._welcome_video.ggDeactivate) { me._welcome_video.ggDeactivate(); }
				me._welcome_video.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('welcome_video');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._welcome_video.ggVideoNotLoaded = false;
			me._welcome_video__vid=document.createElement('video');
			me._welcome_video__vid.className='ggskin ggskin_video';
			me._welcome_video__vid.setAttribute('width', '100%');
			me._welcome_video__vid.setAttribute('height', '100%');
			me._welcome_video__vid.setAttribute('controlsList', 'nodownload');
			me._welcome_video__vid.setAttribute('oncontextmenu', 'return false;');
			me._welcome_video__vid.setAttribute('controls', '');
			me._welcome_video__source=document.createElement('source');
			me._welcome_video__source.setAttribute('src', media);
			me._welcome_video__vid.setAttribute('playsinline', 'playsinline');
			me._welcome_video__vid.setAttribute('style', 'object-fit: cover;');
			me._welcome_video__vid.style.outline = 'none';
			me._welcome_video__vid.appendChild(me._welcome_video__source);
			me._welcome_video.appendChild(me._welcome_video__vid);
			var videoEl = player.registerVideoElement('welcome_video', me._welcome_video__vid);
			videoEl.autoplay = false;
			notifySeekbars();
			me._welcome_video.ggVideoSource = media;
		}
		el.ggId="welcome_video";
		el.ggDx=0;
		el.ggDy=-6.67;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 60%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 60%;';
		hs+='pointer-events:auto;';
		hs+='overflow: hidden';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._welcome_video.ggIsActive=function() {
			if (me._welcome_video__vid != null) {
				return (me._welcome_video__vid.paused == false && me._welcome_video__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._welcome_video.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_welcome_video') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._welcome_video.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._welcome_video.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._welcome_video.style[domTransition]='';
				if (me._welcome_video.ggCurrentLogicStateVisible == 0) {
					me._welcome_video.style.visibility=(Number(me._welcome_video.style.opacity)>0||!me._welcome_video.style.opacity)?'inherit':'hidden';
					if (me._welcome_video.ggVideoNotLoaded) {
						me._welcome_video.ggInitMedia(me._welcome_video.ggVideoSource);
					}
					me._welcome_video.ggVisible=true;
				}
				else {
					me._welcome_video.style.visibility="hidden";
					me._welcome_video.ggInitMedia('');
					me._welcome_video.ggVisible=false;
				}
			}
		}
		me._welcome_video.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._welcome_video);
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs=basePath + 'images/image_3.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 41px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 329px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_3.onclick=function (e) {
			player.openUrl("https:\/\/chatswood-h.schools.nsw.gov.au\/","");
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_3);
		el=me._instructions=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=3600000;
		el.ggId="Instructions";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._instructions.ggIsActive=function() {
			return (me._instructions.ggTimestamp + me._instructions.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._instructions.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._instructions.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._instructions.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._instructions.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._instructions.style[domTransition]='';
				if (me._instructions.ggCurrentLogicStateVisible == 0) {
					me._instructions.style.visibility=(Number(me._instructions.style.opacity)>0||!me._instructions.style.opacity)?'inherit':'hidden';
					me._instructions.ggVisible=true;
				}
				else {
					me._instructions.style.visibility="hidden";
					me._instructions.ggVisible=false;
				}
			}
		}
		me._instructions.ggCurrentLogicStateVisible = -1;
		me._instructions.ggUpdateConditionTimer=function () {
			me._instructions.logicBlock_visible();
		}
		me._instructions.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._instructions0=document.createElement('div');
		el.ggId="Instructions";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._instructions0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._instructions0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._instructions0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._instructions0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._instructions0.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._instructions0.ggCurrentLogicStateScaling == 0) {
					me._instructions0.ggParameter.sx = 0.8;
					me._instructions0.ggParameter.sy = 0.8;
					me._instructions0.style[domTransform]=parameterToTransform(me._instructions0.ggParameter);
				}
				else {
					me._instructions0.ggParameter.sx = 1;
					me._instructions0.ggParameter.sy = 1;
					me._instructions0.style[domTransform]=parameterToTransform(me._instructions0.ggParameter);
				}
			}
		}
		me._instructions0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._instructions0.appendChild(me._rectangle_2);
		el=me._svg_3=document.createElement('div');
		els=me._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_3__img.setAttribute('src',basePath + 'images/svg_3.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 483px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 500px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._instructions0.appendChild(me._svg_3);
		el=me._howtotour=document.createElement('div');
		els=me._howtotour__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="HowToTour";
		el.ggDx=0;
		el.ggDy=-148;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text chinese";
		el.ggType='text';
		hs ='';
		hs+='height : 44px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 220px;';
		hs+='height: 44px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 25px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5982\u4f55\u6e38\u89c8";
		el.appendChild(els);
		me._howtotour.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._howtotour.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._instructions0.appendChild(me._howtotour);
		el=me._svg_4=document.createElement('div');
		els=me._svg_4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMyIgZGF0YS1uYW1lPSJMYXllciAzIiB2aWV3Qm94PSIwIDAgNDEuMjIgNDIuODMiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtmaWxsOnVybCgjcmFkaWFsLWdyYWRpZW50KTt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT4KICA8cmFkaWFsR3JhZGllbnQgY3k9IjIxLjU5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3g9IjIwLjY3IiBpZD0icmFkaWFsLWdyYWRpZW50IiByPSIxOC4yNyI+CiAgIDxzdG9wIG9mZn'+
			'NldD0iMCIgc3RvcC1jb2xvcj0iIzFkNjNhOCIvPgogICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxYzQyODMiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogPC9kZWZzPgogPGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN5PSIyMS41OSIgY3g9IjIwLjY3IiByPSIxOC4yNyIvPgogPHJlY3QgY2xhc3M9ImNscy0yIiByeD0iMS4zNiIgeT0iMTYuODkiIHdpZHRoPSI1LjY3IiBoZWlnaHQ9IjE1LjU4IiB4PSIxNy40MSIvPgogPGNpcmNsZSBjbGFzcz0iY2xzLTIiIGN5PSIxMi4yNCIgY3g9IjIwLjI1IiByPSIyLjg0Ii8+Cjwvc3ZnPgo=';
		me._svg_4__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 4";
		el.ggDx=-134;
		el.ggDy=-26;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 43px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 41px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._instructions0.appendChild(me._svg_4);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAABeCAYAAADyrTB3AAANxklEQVR4nO1df1BUxx3/3A8OgfuB8jsENeKPKTjROgYNOjU2UIlooqISOyXKpKEmozJWJ7ETJTW1E2MwaawdO0VDaOwoGMWbyASqgmb8FVAzIIjFdOR66AUJzHkHnPfj3esfnmQ53947jvs995n5ziy7e/v27eftfna/b98iYFkWIQQPhL6uQAjuRYjQIEOI0CBDiNAgQ4jQIEOI0CBDiNAgQ4jQIEOI0CBDiNAgg9jXFXAnBAKBgJLkzINrfRxgA9gfGuqhQYagJ1Sr1UYbDIYFBoNhQXt7e7Sv6+NxsCwb0AZAQJgIgKi7uzvVZDL91Wq1qlg7WK3WBwaD4V/19fXpAKIIkxAmJGyofF/fq1Pt4esKuJtQhmF2siyrtSeSC4ODg387dOjQUyFC/c'+
			'jIBmcYpsIZIkkwDNNiIzUoCBXYGiWgIBAISO0XA4DFYjkoEokKXCnPZDLdDA8Pn0dEGYiwmQgPNRbrpw0XFJOigYGB11wlEwAkEkmaXq//wJ118hUCnlCNRjMjMjKy1FGerp5+tHX2OSxHKpWu7+zszHVr5XwBX4/5zhqGT34kACR1dXXxZrP5Bk0fW+/0sitKTrGJeWVsYl4Z+9ybR9nWO7207CzDMLpPPvnkeQBjCQsnzO+1NWA01M4LFAY41k3doAnPvXkUugHTsHh5lAQndi5B+sRxnNex6el8ImqQCPu9ngbskMunm4Ufnn6CTADQDZhQuOc0dINPpgGP9FSr1b7jvpp6F35NqIAAbE4DAKIbN27MjoiI2Ev73d6q67jUpqGWq76vR/H+89R0hULxTn19fTYAKYBIwsIIIyXAb+DXhHLh6tWr0WlpaX8XCARy'+
			'rvTLNzUorbrOW05towplNa3U9AULFhxcu3Yt5zX8GX6toXa6KQIAhmEOCYXC17jy03TTEc6UrqDqqcFguBIZGbmYiOLUU5ZlrfAT+F0PtRtmSRPrdLpCGpkAXTcdoXj/eaqeRkREzL13794OPBp6pQAiCBM/Nrs6+xR+RygNarX6WZlM9hEtnU83aWjr7EVJ+RVqelJS0ub6+vrnR1ywjxAwhCYnJ5cBUHClOaubNFQ2dKDq3G1qeiDpqd9pqJ2fNgwATCZTaVhY2Aau/K7oJhf41qcDAwONUql0OXlpIvyQCDOPA75Yn/p9D9VqtS/TyARc000u6AZMDvU0KioqQ6PRbBn1hTwMvya0vb19gkKhKKOlu6qbNPDpaWJi4u8vXrzo13rqF4TazRKHZo+TJ08+DoputnX2jUo3aeDT07lz55avWrUqHsAYwsSE+dTh4B'+
			'cayuWnNZlMex3pZtbWaqjv6z1SHz49HRwc/DYqKmoJEdVPhIfGbF+sT/2ih9pDr9c71M3i/ec9RibAr6eRkZFzfvjhh995rAKjgM8Ipflpv/nmm8lRUVGHaL8rq2lFbaPK4/Xj09OEhIRdVVVVs/HIx8s5/PrC4eB3PXTevHlHaX7ats4+h43sbvDp6fLlyw8WFBT41frUZxrK5ae1WCwfi0SijVz5Pa2bNMijJDhbugJPx0k50/v7+/8tk8nyiSiav9crDe3VHurIT6vVapfTyAQ8r5s06AZMWPfhaWq6VCr9lUqlKsZPr9jI3YNDUuKt4dcvhtzm5maH601v6SYNbZ29KPmcPtSPHz/+j0qlMt2LVaLCLwhNT0+n+mm9rZs0lJ1qRW0T/aHKzc39rKioyOd66lUN5fLTGo3G7RKJZDtXfl/pJg18evrgwYMz0dHR'+
			'a4gozvUpPLgfyac9tLe39xc0MgHf6SYNfHqqUCiyfL0+9RmhSqUyety4ccdo6b7WTRr49DQhIWFXQ0PDdC9WaRg8TijNT/vSSy953U/rLvDp6fz58w8XFBQkYvgOB69sMPO4hnL5aY1G4w5HurmipAZtnb0erddowaenWq32y7FjxxYRUV7Zj+T1IVer1TrUzZLyK35PJsCvp9HR0Svv3r37ay9WCYCHCKX5aQ8cOBAnl8uP035Xde42Khs6PFElj4BPTxMTEz+oqqqaAy9uMPPIkMvl1gMAs9ncIBaL53P8BG2dfVjx3im37D7wNk68n4vn05I400wm082ioqLVFRUVd4loj7kHvUao2WwuEYvFO7jyB4pu0iCPkqDpwKuQR0o40216+gYR5TFCPaWhw/y03d3dv6SRCQSObtKgGzChkEdPb9++vQ5e8Pd6fFKkVC'+
			'oVcXFxVD9toOkmDZfaNNjrYKk1adKk973h7/U4obm5uWUCgWA8V1pbZx92lF/2dBW8htKq67h8k3vTmlAolOXk5PzF0/5et2ko13rz4cOHG8PDwzm/rg503aSBT097e3tPxMbGku5Bt/p7PdZDNRrNDBqZwKOnOdjIBPj1NCYmZoVarX7VU9f3CKF1dXXRCQkJX9LSa5tUKDtF/5Qv0MGnp8nJyX/2lL93VEMubb1pNBpPSiQSzgMounr68eLWE25fb6ZPjMH0Z2KQEidF+jMxUEQ9GvLs14ekxl1q1UDd0w/1fb1bN2w/hqP1qdFobB8zZkwOAPJ10qjdg24n1Gw2bxKLxdSvq7O2VrtlqE2JlyEnYwIy05OQmZ5E1ayR4PJNDS61avB1o8otdeTT056ens/i4+O3ElH+RahWq52hUCiu0vKXfH5lVEOtPEqC/IVT'+
			'kf/CVOomaHehq6cflQ0dqDx3e1TvZDPTk3B8J/20nDt37hRMmjSpxvanzwkd0mClUhm3dOnSRtoSpbZJ5XCy4AiZ6UnIXzgVq1+Y4mJNR4faJhVqG1Uur5e3rp6FLatncaZZrVb9vn37Fm3evLkLzg2/DglzG6EWi+WkSCRaypXPFd1MiZch/4UpyF84lfqKytvQDZpQ2dCBspq2EfdaR5/+247ScVZPPU8owzDFQqHwY1q+kehmTsYE5C+cipznJrhcL2/g8k0NKhuc93KlxMtwpnQ5n56Snyt6h1B7B4JGo5mRmJjYSMvvjG66qzfq9fomnU7XbjKZdO3t7ZcB4Nq1a3dLSkpUALBmzRr5unXr0gAgNTU1TSqVPi2TydIiIyPnuHrNx722suE270ObkzEB5W9nU9Obm5tfnzlzZu3jookk8jBJh0epj4rQurq6uO'+
			'zs7NMCgeBZrrx8upm/cCryF06hTu35wDBM/48//nj2xo0bZ7Ozs8+C+HoagIXMyldWTU1N5qxZs7JjY2OzxWJxsiv1aevsQ1lNK75u7KTKy/uFc/FGLvcS1Gq16g8cOJC9YcMGNXxBqMViqaCd5kXTzZR4Gd7ITUf+wqkuLzX6+vrqr169qly0aNFZEC4yjIJQEOvo6urqzMzMzBWxsbEvCoVC2Ujrpxs0obZRhX+cauXstU7oaTY8SajdMCsEAKPR+IpEIqHuPrDXzdH2RpPJdO/777+vOHLkyJldu3aRO7RI4siz+EyUPOQNk/dF/ocMCQAUFRXJi4uLc1NTU18PDw//mSv1buvsQ+W5DlQ2dAw93Hx62tXV9WlKSsqfiCja96fuI5Rl2f8C4Jy57K26jtKq60ifGIOiJdORkzHB5d7Y3d2tvHDhQvXKlSvJvR4W'+
			'StithNoQBgBHjx5Ny8rK+u3YsWOzXem1wE+vCi+1aRzqqdVq1b/77rszd+/e/cAW5TShrhxtKuru7k6lHVHaeqeXLd5/3uExpnwwGo13W1padi9evHgOgDSbTSMslbAJhD1FWCxh0YQpCCPjyfxkOWT5qXl5eT//7rvv3tbpdI2u3p/6vp7dUX6ZrWzooOZpbm5+GUCMzcgjXh0e6+rSWbVarTbL1ZuhgWEYXXd3d3VFRcWSEZJFEkT+lweyEcg9seR5CGQ8mZ8shyyfvG7yvn375vb09BxkGEbn7va4ePFiHoAkm5EHSA6d2ctycOXS2xaDwfCAP5fTZf3n2rVrf1i2bNmLCQkJ29auXdvurrI9jU2bNqnj4uLeE4lEM1taWt4eHBz81td1culfZSUlJTWzLPsAlJ3vfHi83Dh27NgXGzduvIXhGheQmDFjxnEAx7'+
			'dv3z5x/fr1a+Pi4rIkEslTrpbX0tKiduV3zk6KuE73OhgWFvabkVxMr9c3dXR0nNi5c+fZr776ipzPGylhcpJDmwiRSxLyZjgd2ixxww42Y5H3y/mKELZ2sCGcK9zY2Jg7bdq0VXK5nO5N4IDt1LJXiCjOU8tYLqc91zhsbxh+1no4gHClUpnAMMz/nNFGtVr9z23btmVh+MRmEmHJhI1UH0lNFBFm/5X4ExMJWh67csjyyetKCYsh7IkJ1Z49e+apVKpPzWZzlzPtVV5evhRAImFOa6jLPRQAjhw5kpaXl/dFWFjYE7vZ9Hp9061bt6ozMjJOEtHkE0X2vqDsoXZ5xABw4cKF7ClTpiyKj49fZn9Ri8Vy9/Dhw28WFha2Y/hSxeke6so6lNTdCABQq9VLJBLJLADo7+9Xnzx5smnLli1dHEWRRDhDostkuQtOki52'+
			'IkySKykqKpK/9dZbmfHx8dMB4N69ezdnz55dQ+QhnfOc/xiI637dQqgNkWSFKUWFCH0Esn3IXk+2j0uE+sUZCyG4D64452lPJvkE0jSI5jwnw17rfaPBKPWXbDcyP22OMdQ+nDNbSmEhBAFChAYZ3Lnrb6QPR0AMraOBk8MyDS79k/dQDw0yhAgNMvjFidYhuA+hHhpkCBEaZAgRGmQIERpkCBEaZAgRGmQIERpkCBEaZAgRGmQIERpk+D8dRgFQTF9x1AAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggDx=-135;
		el.ggDy=39;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 44px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 54px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._instructions0.appendChild(me._image_2);
		el=me._text_4=document.createElement('div');
		els=me._text_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggDx=22;
		el.ggDy=6;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text chinese";
		el.ggType='text';
		hs ='';
		hs+='height : 177px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 241px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 241px;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: 200;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5355\u51fb\u5e76\u62d6\u52a8\u4ee5\u65cb\u8f6c\u89c6\u56fe <br\/><br\/>\u67e5\u627e\u573a\u666f\u5468\u56f4\u7684\u56fe\u6807\uff0c\u7136\u540e\u5355\u51fb\u4ee5\u67e5\u770b\u4fe1\u606f\uff0cURL\u94fe\u63a5\uff0c\u56fe\u50cf\u548c\u89c6\u9891\u3002 <br\/><br\/>\u8981\u79fb\u81f3\u4e0b\u4e00\u4e2a\u573a\u666f\uff0c\u8bf7\u627e\u5230\u7bad\u5934\u6216\u4ece\u83dc\u5355\u4e2d\u9009\u62e9\u4e00\u4e2a\u7c7b\u522b";
		el.appendChild(els);
		me._text_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._instructions0.appendChild(me._text_4);
		el=me._beginbutton=document.createElement('div');
		els=me._beginbutton__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjggMjEuNzIiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntpc29sYXRpb246aXNvbGF0ZTt9LmNscy0ze29wYWNpdHk6MC4zO21peC1ibGVuZC1tb2RlOm11bHRpcGx5O30uY2xzLTR7ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudCk7fS5jbHMtNXtjbGlwLXBhdGg6dXJsKCNjbGlwLXBhdGgpO308L3N0eWxlPgogIDxsaW5lYXJHcmFkaWVudCB4Mj0iMzMuNTkiIHkxPSIxIiBncmFkaWVudFVuaX'+
			'RzPSJ1c2VyU3BhY2VPblVzZSIgeTI9IjE4LjM2IiBpZD0ibGluZWFyLWdyYWRpZW50IiB4MT0iMzMuNTkiPgogICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwMDRlODUiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjI2IiBzdG9wLWNvbG9yPSIjMjY0ODhiIi8+CiAgIDxzdG9wIG9mZnNldD0iMC40NCIgc3RvcC1jb2xvcj0iIzI1NDM4NCIvPgogICA8c3RvcCBvZmZzZXQ9IjAuNyIgc3RvcC1jb2xvcj0iIzI0MzU3MSIvPgogICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyMTFmNTIiLz4KICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjExZjUyIi8+CiAgPC9saW5l'+
			'YXJHcmFkaWVudD4KICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgIDxyZWN0IGNsYXNzPSJjbHMtMSIgeT0iNzMuOCIgd2lkdGg9IjM0Ni42OSIgaGVpZ2h0PSI4Mi4yOCIgeD0iLTE5Mi44MSIvPgogIDwvY2xpcFBhdGg+CiA8L2RlZnM+CiA8ZyBjbGFzcz0iY2xzLTIiPgogIDxnIGlkPSJMYXllcl8zIiBkYXRhLW5hbWU9IkxheWVyIDMiPgogICA8aW1hZ2UgY2xhc3M9ImNscy0zIiB3aWR0aD0iNjMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuMzUgLTEuNDUpIiBoZWlnaHQ9IjI0IiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU'+
			'Q4QUFBQVlDQVlBQUFCTjlpVlJBQUFBQ1hCSVdYTUFBQXNTQUFBTEVnSFMzWDc4QUFBQlNrbEVRVlJZUiszWXkwcGtNUkRHOFYrMEx3NklsNFV6b1BNRXJzVzFyKzUySGtCQmNPVmxSc0dGTXNKMDIzYTVTS0xkZGcrNFBlZjBmNU9FNUJSODlZVWNxbEpFcUtTVVVwMXFId0V4SXpqVmVVcHBEWDBNeTlpbUJFd3h3VDlNSW1KS0VWK0VmOE1lRHJDRG5uWWtJUENDQjF5VmNSd1IwU3RYdlkvdk9NSXhmbUxqUDhHYVJ1QVpGemhWM01kcnJ4d1l5bzRmNHdUN0dDeUVhU2FCdjlqRlBYN2pPYVUwclZlN2oyM1o4WDM1K3E4dmo5VTRBcHNZNFJCbnVNTzRPbDhUTUpRZFg4ZmFZcHpHTXBETi9ZRXQ1VUgvTExB'+
			'TkQ5d3lxcmtETTMreU5ybjdGZWJNN1pyNE9WYml1OHBLZkZkWmllOHFYUlAvMGJ5d0tINXVzMFhVc25aY3hpRFg3TE9ibzNMZ2RVbUFwaEt5cGtlNW9IbFNFdER6SWZ3UjE3Z3RIN1d0cEwyVUs3by9zc252em85d2cxOWwzZFpteHJuY3labEVSSFM2amJWcVlGYTYxcnArQTJXcGZMcmRGY0FrQUFBQUFFbEZUa1N1UW1DQyIvPgogICA8cmVjdCBjbGFzcz0iY2xzLTQiIHJ4PSIyLjQ2IiB5PSIxIiB3aWR0aD0iNTUuNjgiIGhlaWdodD0iMTcuMzYiIHg9IjUuNzUiLz4KICA8L2c+CiAgPGcgaWQ9IkxheWVyXzEiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+CiAgIDxnIGNsYXNzPSJjbHMtNSI+CiAgICA8aW'+
			'1hZ2Ugd2lkdGg9IjEyNjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOTYuOCAtMzgyLjA0KSBzY2FsZSgwLjI4KSIgaGVpZ2h0PSIxOTM1IiB4bGluazpocmVmPSIuLi9TU0MtbG9nby5qcGciLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._beginbutton__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._beginbutton__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjggMjEuNzIiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntpc29sYXRpb246aXNvbGF0ZTt9LmNscy0ze29wYWNpdHk6MC4zO21peC1ibGVuZC1tb2RlOm11bHRpcGx5O30uY2xzLTR7ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudCk7fS5jbHMtNXtjbGlwLXBhdGg6dXJsKCNjbGlwLXBhdGgpO308L3N0eWxlPgogIDxsaW5lYXJHcmFkaWVudCB4Mj0iMzMuNTkiIHkxPSIxIiBncmFkaWVudFVuaX'+
			'RzPSJ1c2VyU3BhY2VPblVzZSIgeTI9IjE4LjM2IiBpZD0ibGluZWFyLWdyYWRpZW50IiB4MT0iMzMuNTkiPgogICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMxZjM2NzIiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjI2IiBzdG9wLWNvbG9yPSIjMWIzMjVkIi8+CiAgIDxzdG9wIG9mZnNldD0iMC41MSIgc3RvcC1jb2xvcj0iIzE5MmI1OCIvPgogICA8c3RvcCBvZmZzZXQ9IjAuODgiIHN0b3AtY29sb3I9IiMxMzE4NGEiLz4KICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMTAxMDQ0Ii8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAg'+
			'IDxyZWN0IGNsYXNzPSJjbHMtMSIgeT0iNDguNjUiIHdpZHRoPSIzNDYuNjkiIGhlaWdodD0iODIuMjgiIHg9Ii0xOTIuODEiLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgogPGcgY2xhc3M9ImNscy0yIj4KICA8ZyBpZD0iTGF5ZXJfMyIgZGF0YS1uYW1lPSJMYXllciAzIj4KICAgPGltYWdlIGNsYXNzPSJjbHMtMyIgd2lkdGg9IjYzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjM1IC0xLjYpIiBoZWlnaHQ9IjI0IiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUQ4QUFBQVlDQVlBQUFCTjlpVlJBQUFBQ1hCSVdYTUFBQXNTQUFBTEVnSF'+
			'MzWDc4QUFBQmRFbEVRVlJZUiszWVNXOFRRUkNHNGFlZHNjMG1CWUhnRUJDL0F1WE0vNWNRTjVDUWNtSVJpNHdJYTJLSEtRNDFIV3hpSks3dThYZnBaVVl0dlZXbG52bXFSSVNxVWtxcFUyMHBJTlpoVWVxNmxETEJGUE5oYkNVQWdSWE9zWXFJdmo0b0VWSEJyK01lSHVBMk9yc2ZnTUFGVHZFR0gvRXpJbjZSY0FVekhPRXhqdkVRMTdhZHRvTTZrK0JQOFF5djhTTWkrbTU0WVM0emZvd25NaEN6cStmc3BGYjRnRHZEK2h4dlN5bkxXdHBUSE1xTUg4bnlQOWh5MEM2cXg4MWgvZ212c01DeVpyNEdZQzR6Zm9DSk5qVEJEZHlYMVgxb3VORC9CdHoxQys1ZjJ2b2xheVc3LzZ1TjVJNE5ma043K0xGcUR6OVc3'+
			'ZUhIcXJIQmIvajVzY0JYVDc4Y3hpQTkrL29MSVkzQXBlRnZRQ0doVC9FZVh3d0JxUEQ5c1BFVm40ZTlWcW9pOEEwbmVJNTMwdGJxL09sMkxQQkMvdi9lMG83SkNYekhTOG0zd0VWRVJPM2tUSEVYajZUcG4ya0xmaVdoTDcxOFJNUjZENitUcmF0T095VmYxY3ZxUHBOWjc5bnMzcmJhdHE2NjByNytEUUs1ZWJJYVBZOE5BQUFBQUVsRlRrU3VRbUNDIi8+CiAgIDxyZWN0IGNsYXNzPSJjbHMtNCIgcng9IjIuNDYiIHk9IjEiIHdpZHRoPSI1NS42OCIgaGVpZ2h0PSIxNy4zNiIgeD0iNS43NSIvPgogIDwvZz4KICA8ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIj4KICAgPGcgY2xhc3M9Im'+
			'Nscy01Ij4KICAgIDxpbWFnZSB3aWR0aD0iMTI2MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE5Ni44IC00MDcuMTkpIHNjYWxlKDAuMjgpIiBoZWlnaHQ9IjE5MzUiIHhsaW5rOmhyZWY9Ii4uL1NTQy1sb2dvLmpwZyIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._beginbutton__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="BeginButton";
		el.ggDx=0;
		el.ggDy=144;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 72px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._beginbutton.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._beginbutton.onclick=function (e) {
			me._instructions0.style[domTransition]='none';
			me._instructions0.style.visibility='hidden';
			me._instructions0.ggVisible=false;
		}
		me._beginbutton.onmouseover=function (e) {
			me._beginbutton__img.style.visibility='hidden';
			me._beginbutton__imgo.style.visibility='inherit';
		}
		me._beginbutton.onmouseout=function (e) {
			me._beginbutton__img.style.visibility='inherit';
			me._beginbutton__imgo.style.visibility='hidden';
		}
		me._beginbutton.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._instructions0.appendChild(me._beginbutton);
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDx=0;
		el.ggDy=106;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 6px;';
		hs+='border-radius : 6px;';
		hs+='background : #18539b;';
		hs+='border : 0px solid #deb200;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 152px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['rectangle_1'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_1.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_1.style[domTransition]='background-color 0s';
				if (me._rectangle_1.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_1.style.backgroundColor="rgba(29,109,194,0.784314)";
				}
				else {
					me._rectangle_1.style.backgroundColor="rgba(24,83,155,1)";
				}
			}
		}
		me._rectangle_1.onclick=function (e) {
			me._instructions0.style[domTransition]='none';
			me._instructions0.style.visibility='hidden';
			me._instructions0.ggVisible=false;
		}
		me._rectangle_1.onmouseover=function (e) {
			me.elementMouseOver['rectangle_1']=true;
			me._rectangle_1.logicBlock_backgroundcolor();
		}
		me._rectangle_1.onmouseout=function (e) {
			me.elementMouseOver['rectangle_1']=false;
			me._rectangle_1.logicBlock_backgroundcolor();
		}
		me._rectangle_1.ontouchend=function (e) {
			me.elementMouseOver['rectangle_1']=false;
			me._rectangle_1.logicBlock_backgroundcolor();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._text_3=document.createElement('div');
		els=me._text_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text chinese";
		el.ggType='text';
		hs ='';
		hs+='height : 39px;';
		hs+='left : -7px;';
		hs+='position : absolute;';
		hs+='top : 14px;';
		hs+='visibility : inherit;';
		hs+='width : 167px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 167px;';
		hs+='height: 39px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 0px solid #000000;';
		hs+='border: 0px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5f00\u59cb\u6e38\u89c8";
		el.appendChild(els);
		me._text_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_3.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1.appendChild(me._text_3);
		me._instructions0.appendChild(me._rectangle_1);
		me._instructions.appendChild(me._instructions0);
		me.divSkin.appendChild(me._instructions);
		me._map_1.ggMarkerInstances=[];
		me._map_1.ggMapId = 'FloorPlan01';
		me._map_1.ggLastNodeId=null;
		me._map_1.ggSimpleFloorplanMarkerArray=[];
		me._map_1.ggFloorplanWidth=0;
		me._map_1.ggFloorplanHeight=0;
		me._map_1__mapdiv=document.createElement('div');
		me._map_1__mapdiv.className='ggskin ggskin_map';
		me._map_1.appendChild(me._map_1__mapdiv);
		me._map_1__img=document.createElement('img');
		me._map_1__img.className='ggskin ggskin_map';
		me._map_1__mapdiv.appendChild(me._map_1__img);
		me._map_1.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_1.ggRadar.update=function() {
			var radar=me._map_1.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_1.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_1.ggFilteredIds.length > 0 && me._map_1.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_1.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_1__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',200);
				radar.radarElement.setAttributeNS(null,'height',200);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 200 200');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 100 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 100 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 100 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 100 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 100;
				arcY1 += 100;
				arcX2 += 100;
				arcY2 += 100;
				var radarPathString = 'M100,100 L' + arcX1 + ',' + arcY1 + ' A 100 100 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#ff0000');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#ff0000');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_1__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 100;
				var radarYPos = activeMarker.radarYPos - 100;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_1.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_1__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_1.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_1.clientWidth;
			var mapHeight = me._map_1.clientHeight;
			var levelLimit = 500;
			var level = 1;
			while (mapWidth > levelLimit && mapHeight > levelLimit) {
				levelLimit *= 2;
				if (mapDetails['width'] < levelLimit || mapDetails['height'] < levelLimit) break;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_1.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_1__img.setAttribute('src', imageFilename);
		me._map_1__mapdiv.setAttribute('style','position: absolute; left: 0px; top: 0px;width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;overflow:hidden;;');
		me._map_1__img.setAttribute('style','width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;');
		}
		me._map_1.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_1.clientWidth / me._map_1.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_1.ggFloorplanHeight = me._map_1.clientHeight;
				me._map_1.ggFloorplanWidth = me._map_1.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_1.ggFloorplanWidth = me._map_1.clientWidth;
				me._map_1.ggFloorplanHeight = me._map_1.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_1.ggInitMap=function() {
			me._map_1.ggMapNotLoaded = false;
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			me._map_1.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_1.ggPermeableMap = true;
			} else {
				me._map_1.ggPermeableMap = false;
			}
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggFloorplanNorth = mapDetails['floorplannorth'];
		}
		me._map_1.ggClearMap=function() {
			me._map_1.ggClearMapMarkers();
			me._map_1.ggMapNotLoaded = true;
		}
		me._map_1.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_1.ggMapId = mapId;
			me._map_1.ggClearMap();
			me._map_1.ggInitMap();
			me._map_1.ggInitMapMarkers();
		}
		me._map_1.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_1.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
					var xPos = (me._map_1.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_1.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_1.ggHMarkerAnchorOffset;
					yPos -= me._map_1.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_1.style['z-index'] + 2;
				}
			}
		}
		me._map_1.ggInitMapMarkers=function() {
			me._map_1.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_1.ggFilteredIds = [];
			if (me._map_1.ggFilter != '') {
				var filter = me._map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1.ggFilteredIds.length > 0) ids = me._map_1.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
				if (coords.length>=2) {
					me._map_1.ggHMarkerAnchorOffset = 20;
					me._map_1.ggVMarkerAnchorOffset = 40;
					var marker = document.createElement('img');
					marker.setAttribute('src', basePath + 'images/_ggMapPin.png');
					marker.setAttribute('title', player.getNodeTitle(id));
					marker.style['width'] = '40px';
					marker.style['width'] = '40px';
					marker.style['cursor'] = 'pointer';
					marker.ggId = id;
					marker.onclick = function() {
						player.openNext('{' + this.ggId + '}');
					}
					me._map_1.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_1__mapdiv.appendChild(marker);
				}
			}
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_1);
		}
		me._map_1.ggClearMapMarkers=function() {
			for (id in me._map_1.ggSimpleFloorplanMarkerArray) {
				if (me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_1__mapdiv.removeChild(me._map_1.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_1.ggMarkerInstances=[];
			me._map_1.ggSimpleFloorplanMarkerArray=[];
		}
		player.setVolume("_main",1);
		me._popup_video_file.ggVideoSource = 'media/';
		me._popup_video_file.ggVideoNotLoaded = true;
		me._popup_video_url.ggVideoSource = '';
		me._popup_video_url.ggVideoNotLoaded = true;
		me._popup_video_youtube.ggVideoSource = '';
		me._popup_video_youtube.ggVideoNotLoaded = true;
		me._popup_video_vimeo.ggVideoSource = '';
		me._popup_video_vimeo.ggVideoNotLoaded = true;
		me._musicvideo.ggVideoSource = 'media/Music-Program-cmp.mp4';
		me._musicvideo.ggVideoNotLoaded = true;
		me._welcome_video.ggVideoSource = 'media/Principal Interview with School Captains - cut.mp4';
		me._welcome_video.ggVideoNotLoaded = true;
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			if (me._map_1.ggMapNotLoaded == false) {
				me._map_1.ggClearMap();
				me._map_1.ggInitMap(false);
				me._map_1.ggInitMapMarkers(true);
			}
			if (
				(
					((player.getVariableValue('opt_autohide') == true))
				)
			) {
				me._hide_timer.ggTimeout=Number("5") * 1000.0;
				me._hide_timer.ggTimestamp=skin.ggCurrentTime;
			}
			if (
				(
					((player.getVariableValue('opt_thumbnail') == true))
				)
			) {
				me._thumbnail_cloner.ggText="";
				me._thumbnail_cloner.ggUpdate([]);
				skin.updateSize(skin.divSkin);
			}
			me._thumbnail_cloner.ggUpdate();
			if (
				(
					((player.getVariableValue('opt_thumbnail') == true))
				)
			) {
				me._thumbnail_cloner_mobile.ggText="";
				me._thumbnail_cloner_mobile.ggUpdate([]);
				skin.updateSize(skin.divSkin);
			}
			me._thumbnail_cloner_mobile.ggUpdate();
		});
		player.addListener('imagesready', function() {
			me._thumbnail_menu.ggUpdatePosition();
			me._thumbnail_menu_mobile.ggUpdatePosition();
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
			me._scrollarea_2.ggUpdatePosition();
			me._timer_2.ggTimestamp=me.ggCurrentTime;
			me._timer_2.ggTimeout=5000;
			me._instructions.ggTimestamp=me.ggCurrentTime;
			me._instructions.ggTimeout=2000;
		});
		player.addListener('beforechangenode', function() {
			if (
				(
					((player.getVariableValue('vis_loader') == true))
				)
			) {
				me._loading.style[domTransition]='none';
				me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
				me._loading.ggVisible=true;
			}
		});
		player.addListener('tilesrequested', function() {
			player.setVariableValue('vis_loader', false);
		});
		player.addListener('playerstatechanged', function() {
			player.setVariableValue('pos_controller', Number("0"));
			if (
				(
					((player.getVariableValue('opt_zoom') == true))
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("2"));
			}
			if (
				(
					((player.getVariableValue('opt_autorotate') == true))
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_info') == true))
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_thumbnail') == true)) && 
					((player.getIsTour() == true))
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_projection') == true))
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_gyro') == true)) && 
					((player.getGyroAvailable() == true))
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_fullscreen') == true)) && 
					((player.getOS() != 4))
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("1"));
			}
			if (
				(
					((player.hasVR() == true))
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("1"));
			}
			player.setVariableValue('pos_projection', Number("0"));
			if (
				(
					((player.getVariableValue('opt_zoom') == true))
				)
			) {
				player.setVariableValue('pos_projection', player.getVariableValue('pos_projection') + Number("2"));
			}
			if (
				(
					((player.getVariableValue('opt_autorotate') == true))
				)
			) {
				player.setVariableValue('pos_projection', player.getVariableValue('pos_projection') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_info') == true))
				)
			) {
				player.setVariableValue('pos_projection', player.getVariableValue('pos_projection') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_thumbnail') == true)) && 
					((player.getIsTour() == true))
				)
			) {
				player.setVariableValue('pos_projection', player.getVariableValue('pos_projection') + Number("1"));
			}
			player.setVariableValue('pos_information', Number("0"));
			if (
				(
					((player.getVariableValue('opt_zoom') == true))
				)
			) {
				player.setVariableValue('pos_information', player.getVariableValue('pos_information') + Number("2"));
			}
			if (
				(
					((player.getVariableValue('opt_autorotate') == true))
				)
			) {
				player.setVariableValue('pos_information', player.getVariableValue('pos_information') + Number("1"));
			}
			player.setVariableValue('pos_autorotate', Number("0"));
			if (
				(
					((player.getVariableValue('opt_zoom') == true))
				)
			) {
				player.setVariableValue('pos_autorotate', player.getVariableValue('pos_autorotate') + Number("2"));
			}
			player.setVariableValue('pos_enter_vr', Number("0"));
			if (
				(
					((player.getVariableValue('opt_zoom') == true)) && 
					((player.hasVR() == true))
				)
			) {
				player.setVariableValue('pos_enter_vr', player.getVariableValue('pos_enter_vr') + Number("2"));
			}
			if (
				(
					((player.getVariableValue('opt_autorotate') == true)) && 
					((player.hasVR() == true))
				)
			) {
				player.setVariableValue('pos_enter_vr', player.getVariableValue('pos_enter_vr') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_info') == true)) && 
					((player.hasVR() == true))
				)
			) {
				player.setVariableValue('pos_enter_vr', player.getVariableValue('pos_enter_vr') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_thumbnail') == true)) && 
					((player.getIsTour() == true)) && 
					((player.hasVR() == true))
				)
			) {
				player.setVariableValue('pos_enter_vr', player.getVariableValue('pos_enter_vr') + Number("1"));
			}
			player.setVariableValue('pos_gyro', Number("0"));
			if (
				(
					((player.getVariableValue('opt_zoom') == true)) && 
					((player.getGyroAvailable() == true))
				)
			) {
				player.setVariableValue('pos_gyro', player.getVariableValue('pos_gyro') + Number("2"));
			}
			if (
				(
					((player.getVariableValue('opt_autorotate') == true)) && 
					((player.getGyroAvailable() == true))
				)
			) {
				player.setVariableValue('pos_gyro', player.getVariableValue('pos_gyro') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_info') == true)) && 
					((player.getGyroAvailable() == true))
				)
			) {
				player.setVariableValue('pos_gyro', player.getVariableValue('pos_gyro') + Number("1"));
			}
			player.setVariableValue('pos_fullscreen', Number("0"));
			if (
				(
					((player.getVariableValue('opt_zoom') == true)) && 
					((player.getOS() != 4))
				)
			) {
				player.setVariableValue('pos_fullscreen', player.getVariableValue('pos_fullscreen') + Number("2"));
			}
			if (
				(
					((player.getVariableValue('opt_autorotate') == true)) && 
					((player.getOS() != 4))
				)
			) {
				player.setVariableValue('pos_fullscreen', player.getVariableValue('pos_fullscreen') + Number("1"));
			}
			player.setVariableValue('pos_fullscreen', player.getVariableValue('pos_fullscreen') + Number("1"));
			player.setVariableValue('pos_thumbnail', Number("0"));
			player.setVariableValue('pos_thumbnail', player.getVariableValue('pos_thumbnail') + Number("2"));
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_changenode = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_alpha) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube_image && hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube_image.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube && hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube_customimage && hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube_customimage.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_configloaded = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube && hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_position) {
					hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_mouseover = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube_image && hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube_image.logicBlock_size) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube_image.logicBlock_size();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_mouseover = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube && hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_hastouch = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube && hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_position) {
					hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_activehotspotchanged = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube_image && hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube_image.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube && hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube_customimage && hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube_customimage.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_userdata = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_file = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_url = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_vimeo = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_youtube = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_timer = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_alpha) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_1_changenode = function(){
		if(hotspotTemplates['ht_node_1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_1'].length; i++) {
				if (hotspotTemplates['ht_node_1'][i]._ht_node_customimage0 && hotspotTemplates['ht_node_1'][i]._ht_node_customimage0.logicBlock_visible) {
					hotspotTemplates['ht_node_1'][i]._ht_node_customimage0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_1_mouseover = function(){
		if(hotspotTemplates['ht_node_1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_1'].length; i++) {
				if (hotspotTemplates['ht_node_1'][i]._text_5 && hotspotTemplates['ht_node_1'][i]._text_5.logicBlock_visible) {
					hotspotTemplates['ht_node_1'][i]._text_5.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_1_activehotspotchanged = function(){
		if(hotspotTemplates['ht_node_1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_1'].length; i++) {
				if (hotspotTemplates['ht_node_1'][i]._ht_node_customimage0 && hotspotTemplates['ht_node_1'][i]._ht_node_customimage0.logicBlock_visible) {
					hotspotTemplates['ht_node_1'][i]._ht_node_customimage0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_changenode = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_alpha) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo_image && hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo_image.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_vimeo'][i]._tt_ht_video_vimeo && hotspotTemplates['ht_video_vimeo'][i]._tt_ht_video_vimeo.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._tt_ht_video_vimeo.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo_customimage && hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo_customimage.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_configloaded = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._tt_ht_video_vimeo && hotspotTemplates['ht_video_vimeo'][i]._tt_ht_video_vimeo.logicBlock_position) {
					hotspotTemplates['ht_video_vimeo'][i]._tt_ht_video_vimeo.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_mouseover = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo_image && hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo_image.logicBlock_size) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo_image.logicBlock_size();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_mouseover = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._tt_ht_video_vimeo && hotspotTemplates['ht_video_vimeo'][i]._tt_ht_video_vimeo.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._tt_ht_video_vimeo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_hastouch = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._tt_ht_video_vimeo && hotspotTemplates['ht_video_vimeo'][i]._tt_ht_video_vimeo.logicBlock_position) {
					hotspotTemplates['ht_video_vimeo'][i]._tt_ht_video_vimeo.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_activehotspotchanged = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo_image && hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo_image.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_vimeo'][i]._tt_ht_video_vimeo && hotspotTemplates['ht_video_vimeo'][i]._tt_ht_video_vimeo.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._tt_ht_video_vimeo.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo_customimage && hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo_customimage.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_userdata = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_file = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_url = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_vimeo = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_youtube = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_timer = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_alpha) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_changenode = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_alpha) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url_image && hotspotTemplates['ht_video_url'][i]._ht_video_url_image.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_url'][i]._tt_ht_video_url && hotspotTemplates['ht_video_url'][i]._tt_ht_video_url.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._tt_ht_video_url.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url_customimage && hotspotTemplates['ht_video_url'][i]._ht_video_url_customimage.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_configloaded = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._tt_ht_video_url && hotspotTemplates['ht_video_url'][i]._tt_ht_video_url.logicBlock_position) {
					hotspotTemplates['ht_video_url'][i]._tt_ht_video_url.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_mouseover = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url_image && hotspotTemplates['ht_video_url'][i]._ht_video_url_image.logicBlock_size) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url_image.logicBlock_size();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_mouseover = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._tt_ht_video_url && hotspotTemplates['ht_video_url'][i]._tt_ht_video_url.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._tt_ht_video_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_hastouch = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._tt_ht_video_url && hotspotTemplates['ht_video_url'][i]._tt_ht_video_url.logicBlock_position) {
					hotspotTemplates['ht_video_url'][i]._tt_ht_video_url.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_activehotspotchanged = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url_image && hotspotTemplates['ht_video_url'][i]._ht_video_url_image.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_url'][i]._tt_ht_video_url && hotspotTemplates['ht_video_url'][i]._tt_ht_video_url.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._tt_ht_video_url.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url_customimage && hotspotTemplates['ht_video_url'][i]._ht_video_url_customimage.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_userdata = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_file = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_url = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_vimeo = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_youtube = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_timer = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_alpha) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_changenode = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_alpha) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file_image && hotspotTemplates['ht_video_file'][i]._ht_video_file_image.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_file'][i]._tt_ht_video_file && hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file_customimage && hotspotTemplates['ht_video_file'][i]._ht_video_file_customimage.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_configloaded = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._tt_ht_video_file && hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_position) {
					hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_mouseover = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file_image && hotspotTemplates['ht_video_file'][i]._ht_video_file_image.logicBlock_size) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file_image.logicBlock_size();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_mouseover = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._tt_ht_video_file && hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_hastouch = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._tt_ht_video_file && hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_position) {
					hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_activehotspotchanged = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file_image && hotspotTemplates['ht_video_file'][i]._ht_video_file_image.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_file'][i]._tt_ht_video_file && hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file_customimage && hotspotTemplates['ht_video_file'][i]._ht_video_file_customimage.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_userdata = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_file = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_url = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_vimeo = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_youtube = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_timer = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_alpha) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_changenode = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_alpha) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image_image && hotspotTemplates['ht_image'][i]._ht_image_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._tt_ht_image && hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image_customimage && hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_configloaded = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._tt_ht_image && hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_position) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_mouseover = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image_image && hotspotTemplates['ht_image'][i]._ht_image_image.logicBlock_size) {
					hotspotTemplates['ht_image'][i]._ht_image_image.logicBlock_size();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_mouseover = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._tt_ht_image && hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_hastouch = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._tt_ht_image && hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_position) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_activehotspotchanged = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image_image && hotspotTemplates['ht_image'][i]._ht_image_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._tt_ht_image && hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image_customimage && hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_userdata = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_file = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_url = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_vimeo = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_youtube = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_timer = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_alpha) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_changenode = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_alpha) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_info'][i]._ht_info_image && hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info'][i]._ht_info_customimage && hotspotTemplates['ht_info'][i]._ht_info_customimage.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_configloaded = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_mouseover = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info_image && hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_size) {
					hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_size();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_mouseover = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_hastouch = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_activehotspotchanged = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info_image && hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info'][i]._ht_info_customimage && hotspotTemplates['ht_info'][i]._ht_info_customimage.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_userdata = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_file = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_url = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_vimeo = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_youtube = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_timer = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_alpha) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_changenode = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_alpha) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_url'][i]._ht_url_image && hotspotTemplates['ht_url'][i]._ht_url_image.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._tt_ht_url && hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._ht_url_customimage && hotspotTemplates['ht_url'][i]._ht_url_customimage.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_configloaded = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._tt_ht_url && hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_position) {
					hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_mouseover = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url_image && hotspotTemplates['ht_url'][i]._ht_url_image.logicBlock_size) {
					hotspotTemplates['ht_url'][i]._ht_url_image.logicBlock_size();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_mouseover = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._tt_ht_url && hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_hastouch = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._tt_ht_url && hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_position) {
					hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_activehotspotchanged = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url_image && hotspotTemplates['ht_url'][i]._ht_url_image.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._tt_ht_url && hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._ht_url_customimage && hotspotTemplates['ht_url'][i]._ht_url_customimage.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_userdata = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_file = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_url = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_vimeo = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_youtube = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_timer = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_alpha) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_1_changenode = function(){
		if(hotspotTemplates['Hotspot 1']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 1'].length; i++) {
				if (hotspotTemplates['Hotspot 1'][i]._hotspot_1_customimage && hotspotTemplates['Hotspot 1'][i]._hotspot_1_customimage.logicBlock_visible) {
					hotspotTemplates['Hotspot 1'][i]._hotspot_1_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_1_mouseover = function(){
		if(hotspotTemplates['Hotspot 1']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 1'].length; i++) {
				if (hotspotTemplates['Hotspot 1'][i]._hotspot_1_customimage && hotspotTemplates['Hotspot 1'][i]._hotspot_1_customimage.logicBlock_alpha) {
					hotspotTemplates['Hotspot 1'][i]._hotspot_1_customimage.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_1_mouseover = function(){
		if(hotspotTemplates['Hotspot 1']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 1'].length; i++) {
				if (hotspotTemplates['Hotspot 1'][i]._text_5_1 && hotspotTemplates['Hotspot 1'][i]._text_5_1.logicBlock_visible) {
					hotspotTemplates['Hotspot 1'][i]._text_5_1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_1_activehotspotchanged = function(){
		if(hotspotTemplates['Hotspot 1']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 1'].length; i++) {
				if (hotspotTemplates['Hotspot 1'][i]._hotspot_1_customimage && hotspotTemplates['Hotspot 1'][i]._hotspot_1_customimage.logicBlock_visible) {
					hotspotTemplates['Hotspot 1'][i]._hotspot_1_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_changenode = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_image && hotspotTemplates['ht_node'][i]._ht_node_image.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_visited && hotspotTemplates['ht_node'][i]._ht_node_visited.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_visited.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_customimage && hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_configloaded = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_position) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node_image && hotspotTemplates['ht_node'][i]._ht_node_image.logicBlock_scaling) {
					hotspotTemplates['ht_node'][i]._ht_node_image.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_visited && hotspotTemplates['ht_node'][i]._ht_node_visited.logicBlock_scaling) {
					hotspotTemplates['ht_node'][i]._ht_node_visited.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_changevisitednodes = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node_image && hotspotTemplates['ht_node'][i]._ht_node_image.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_visited && hotspotTemplates['ht_node'][i]._ht_node_visited.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_visited.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_hastouch = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_position) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_image && hotspotTemplates['ht_node'][i]._ht_node_image.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_visited && hotspotTemplates['ht_node'][i]._ht_node_visited.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_visited.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_customimage && hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_userdata = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_file = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_url = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_vimeo = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_youtube = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_timer = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_hotspot_preview = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		me._timer_1.ggTimestamp=player.getLastActivity();
		me._timer_1.ggUpdateConditionTimer();
		me._map_1.ggUpdateConditionTimer();
		if (me._hide_timer.ggLastIsActive!=me._hide_timer.ggIsActive()) {
			me._hide_timer.ggLastIsActive=me._hide_timer.ggIsActive();
			if (me._hide_timer.ggLastIsActive) {
				if (player.transitionsDisabled) {
					me._controller.style[domTransition]='none';
				} else {
					me._controller.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._controller.style.opacity='1';
				me._controller.style.visibility=me._controller.ggVisible?'inherit':'hidden';
				if (player.transitionsDisabled) {
					me._menu_button.style[domTransition]='none';
				} else {
					me._menu_button.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._menu_button.style.opacity='0';
				me._menu_button.style.visibility='hidden';
				player.setVariableValue('vis_thumbnail_menu_auto_hide', true);
			} else {
				if (player.transitionsDisabled) {
					me._menu_button.style[domTransition]='none';
				} else {
					me._menu_button.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._menu_button.style.opacity='1';
				me._menu_button.style.visibility=me._menu_button.ggVisible?'inherit':'hidden';
				if (player.transitionsDisabled) {
					me._controller.style[domTransition]='none';
				} else {
					me._controller.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._controller.style.opacity='0';
				me._controller.style.visibility='hidden';
				player.setVariableValue('vis_thumbnail_menu_auto_hide', false);
			}
		}
		if (me.elementMouseOver['thumbnail_cloner']) {
			if (
				(
					((player.getVariableValue('opt_autohide') == true))
				)
			) {
				me._hide_timer.ggTimeout=Number("5") * 1000.0;
				me._hide_timer.ggTimestamp=skin.ggCurrentTime;
			}
		}
		if (me.elementMouseOver['controller']) {
			if (
				(
					((player.getVariableValue('opt_autohide') == true))
				)
			) {
				me._hide_timer.ggTimeout=Number("5") * 1000.0;
				me._hide_timer.ggTimestamp=skin.ggCurrentTime;
			}
		}
		if (me.elementMouseDown['zoomout']) {
			player.changeFovLog(0.5,true);
		}
		if (me.elementMouseDown['zoomin']) {
			player.changeFovLog(-0.5,true);
		}
		if (me.elementMouseDown['key_up']) {
			player.changeTiltLog(0.5,true);
		}
		if (me.elementMouseDown['key_down']) {
			player.changeTiltLog(-0.5,true);
		}
		if (me.elementMouseDown['key_left']) {
			player.changePanLog(0.5,true);
		}
		if (me.elementMouseDown['key_right']) {
			player.changePanLog(-0.5,true);
		}
		if (me._element_alpha_timer.ggLastIsActive!=me._element_alpha_timer.ggIsActive()) {
			me._element_alpha_timer.ggLastIsActive=me._element_alpha_timer.ggIsActive();
			if (me._element_alpha_timer.ggLastIsActive) {
			} else {
				player.setVariableValue('vis_timer', true);
			}
		}
		if (me.elementMouseOver['thumbnail_cloner_mobile']) {
			if (
				(
					((player.getVariableValue('opt_autohide') == true))
				)
			) {
				me._hide_timer.ggTimeout=Number("5") * 1000.0;
				me._hide_timer.ggTimestamp=skin.ggCurrentTime;
			}
		}
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
		if (me.__360image_gyro.ggLastIsActive!=me.__360image_gyro.ggIsActive()) {
			me.__360image_gyro.ggLastIsActive=me.__360image_gyro.ggIsActive();
			if (me.__360image_gyro.ggLastIsActive) {
			} else {
				player.setVariableValue('vis_360image_once', false);
			}
		}
		me.__360image_gyro.ggUpdateConditionTimer();
		if (me.__360image_timer.ggLastIsActive!=me.__360image_timer.ggIsActive()) {
			me.__360image_timer.ggLastIsActive=me.__360image_timer.ggIsActive();
			if (me.__360image_timer.ggLastIsActive) {
				player.setVariableValue('pos_360image', player.getVariableValue('pos_360image') + Number("1"));
				player.setVariableValue('pos_360image', player.getVariableValue('pos_360image') % Number("5"));
			} else {
			}
		}
		me._timer_2.ggUpdateConditionTimer();
		me._instructions.ggUpdateConditionTimer();
		if (!player.getLockedKeyboard()) {
			switch(me.skinKeyPressed) {
				case 37:
					player.changePanLog(0.5,true);
					break;
				case 38:
					player.changeTiltLog(0.5,true);
					break;
				case 39:
					player.changePanLog(-0.5,true);
					break;
				case 40:
					player.changeTiltLog(-0.5,true);
					break;
			}
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_video_youtube(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_youtube=document.createElement('div');
		el.ggId="ht_video_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_youtube.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube.style[domTransition]='opacity 500ms ease 0ms';
				if (me._ht_video_youtube.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube.style.visibility="hidden";
					me._ht_video_youtube.ggVisible=false;
				}
				else {
					me._ht_video_youtube.style.visibility=(Number(me._ht_video_youtube.style.opacity)>0||!me._ht_video_youtube.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube.ggVisible=true;
				}
			}
		}
		me._ht_video_youtube.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_timer') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_youtube.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_youtube.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_youtube.style[domTransition]='opacity 500ms ease 0ms';
				if (me._ht_video_youtube.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_youtube.style.visibility=me._ht_video_youtube.ggVisible?'inherit':'hidden';
					me._ht_video_youtube.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_youtube.style.opacity == 0.0) { me._ht_video_youtube.style.visibility="hidden"; } }, 505);
					me._ht_video_youtube.style.opacity=0;
				}
			}
		}
		me._ht_video_youtube.onclick=function (e) {
			skin._popup_video_youtube.ggInitMedia(me.hotspot.url);
			player.setVariableValue('vis_video_popup_youtube', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_youtube.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_youtube.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_youtube']=true;
			me._tt_ht_video_youtube.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_youtube.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_youtube']=false;
			me._tt_ht_video_youtube.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_youtube.ontouchend=function (e) {
			me.elementMouseOver['ht_video_youtube']=false;
			me._tt_ht_video_youtube.logicBlock_visible();
		}
		me._ht_video_youtube.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_youtube_image=document.createElement('div');
		els=me._ht_video_youtube_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNDEuMjIgNDIuODMiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtpc29sYXRpb246aXNvbGF0ZTt9LmNscy0ye29wYWNpdHk6MC4xODttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ze2ZpbGw6dXJsKCNyYWRpYWwtZ3JhZGllbnQpO30uY2xzLTR7ZmlsbDojZmZmO308L3N0eWxlPgogIDxyYWRpYWxHcmFkaWVudCBjeT0iMjEuNTkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjeD0iMjAuNjciIGlkPSJyYW'+
			'RpYWwtZ3JhZGllbnQiIHI9IjE4LjI3Ij4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMWQ2M2E4Ii8+CiAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzFjNDI4MyIvPgogIDwvcmFkaWFsR3JhZGllbnQ+CiA8L2RlZnM+CiA8ZyBjbGFzcz0iY2xzLTEiPgogIDxnIGlkPSJMYXllcl8zIiBkYXRhLW5hbWU9IkxheWVyIDMiPgogICA8aW1hZ2UgY2xhc3M9ImNscy0yIiB3aWR0aD0iNDMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDMgMC44MykiIGhlaWdodD0iNDQiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFB'+
			'Q3NBQUFBc0NBWUFBQUQ4V0VGNEFBQUFDWEJJV1hNQUFBc1NBQUFMRWdIUzNYNzhBQUFFRDBsRVFWUllSKzNaMzI4VVZSakc4YzlaV2tIYllHUGxseFlNRVlsY2NBTWhYaHYvY0s4eG9SY1NvMEVNb2FWVVdtdXdJSVZ1MmVQRk82YzdPNTNkN1ErVzFjUW5tVXk3T3pQN25lZTg1OHc1ejZTY3M1TW9wWlRLbnlNT3k1QlArR1BwT09kWGdHV2J4UWZWdmcwNG80dmRhcDhGOTVGLytFaXdGV1FITXpoVGJRczRqN1BWNTNYZ2pEMXNZd1BQOGJyYTl0QTdDdlNoWUd1UXM1akRKN2lFYy9nTTEzQUJwMXRPZjRObmVJaW4yTVE2L3NUZnd1MURRWStGVFNrVnlIa3M0Z3Erd3RkWXdxY0M5R3gxWEZOZDRld3ovSU'+
			'VuK0FXL1lnVmJlSWx1enJuWGN2NitSc0ttbEU3aFE5SE1WM0VkTndYc1pWRUNaNFNqNDJyMmpXais1MWdWc1BmeEFJOUVtZXprbk4rMlhBTWpZR3VnUzdpRmIzQURYd2lINS9RQnl6Wk11YloxUmZOdjRURit4bDBzQzllSEFzKzBmVmdEdll3NytCYTNSWjNPQzhpTzBZQjExVyttV2ZzWERYYk8xWlJTSy9BQjJLcEdpNk4zOEYyMVg4SkhqZ2JacG9SVCt0Q25CVWVuZGt3cjhBQnMxZXRuUlkzZUVvN2VFUTRYMEhlbEFqMG5ybDlYeHBPVTBxdDZwMnM2MnhITmZGWFU2RzJEams1Q0hYSDlBdHdUWS9BdTFsSkt1MlZZMjRldHVib29ldjBOVWFPVEJDMHF3RXY2RDVGbitFdU1IbS9MUWZVVDVrUnZ2MW50'+
			'NTAwZXRLZ0FYeEpHWFJjZGNLYk1Qem9jY1BWYXRTMGFQblpPU3FVTXI0aUh6aVV4anZkaHRiczY1LzI1V2xSTVc4RG40bkhlaDYxY25SR1dUOVBWb2lRQXk3eGpBYk9wR2xPSnNlNmlzUDZLNmJoYWxBVFBCV0hjZVRFRjNSL2daOFZUcEQ0aG1ZYXJqT0FwN3BVRFJrMmkzNmRhZVpwTlBXM0lwZ1o0cGxXWHg5TC9zSlBTZnhwMjdLSnRtaXF3Yld2N2Y0TUdPRHI2b0dWYXRtMzZ3SzNtRldkM3hlcnlvUUIrWTNxd1E4M3JWTFB3cnBqa2xoRGl0ZW5COXNUcWQwWGtDNzhMOHdacTlyVUFYUlBnMHlpRll0eVdhT1dISXJuWnl6bm5KdXk2dUpzVmtaS01URWdtb09McVl4R0FQSzcrNzFFNVc1WENucmlMQn'+
			'lKNFdNY3I3dys0emRVdEVTc05MaGdGMUVzUjVkelZEeDRtc1F4dlUvbjlWbGVwd2VhY2MwcXBLMGFGWllQQnc2U0JlNklWMTBXclB0QndsVVp1a0hQdXBaUjJST2JVbkM1T0FqanJnejdCUGRHcWo3VDBtUVB4VWM3NWJRVzgydnpPdTR1UUNKQXVYZ2hINytGNzBhb2JHcTR5SkpnYkFseVNrdU9HYy9TVHhKNFlmVGFFaXo4NW1DUWU2Tml0c0J3QUxxUEZ0dUd4cDhhK3VGTGZsNXgyUjREZXh3OEM5cEV4R2UxaGt1OXhnWEo5Z1ZuV1RhZEU1Rk4vdHRjZm9adWl0eS9qUjFFR0w0eEp2OGZDWWx4VVg5NGxsQlhwZVZIWHI0UlQ1ZGxlZjdld1ZuMjNKc0IzSE9LOXdxRmcyWStZQ25RekNDNDU2d1Y4aVk5'+
			'RnFQYWIvc1NvT050OGF6UDJYVUxSb1dHTGF0QXpCdDhsRkdmUDZUdTdhWERLZWFMM1lVZUdMU3JKbnNGT05hcG1sZjFSQU9zNk5teWJHamR3SXJBMi9RTVZFOFloUmM3Mi9RQUFBQUJKUlU1RXJrSmdnZz09Ii8+CiAgIDxjaXJjbGUgY2xhc3M9ImNscy0zIiBjeT0iMjEuNTkiIGN4PSIyMC42NyIgcj0iMTguMjciLz4KICAgPHBhdGggY2xhc3M9ImNscy00IiBkPSJNMTMuNzcsMTIuMzZWMzAuNDdhLjY2LjY2LDAsMCwwLDEsLjU3TDMwLjY2LDIyYS42NS42NSwwLDAsMCwwLTEuMTNMMTQuNzUsMTEuNzlBLjY2LjY2LDAsMCwwLDEzLjc3LDEyLjM2WiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_youtube_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_youtube_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_youtube_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_image.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['ht_video_youtube_image'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_video_youtube_image.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_video_youtube_image.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_video_youtube_image.style[domTransition]='width 0s, height 0s';
				if (me._ht_video_youtube_image.ggCurrentLogicStateSize == 0) {
					me._ht_video_youtube_image.style.width='50px';
					me._ht_video_youtube_image.style.height='50px';
					skin.updateSize(me._ht_video_youtube_image);
				}
				else {
					me._ht_video_youtube_image.style.width='43px';
					me._ht_video_youtube_image.style.height='43px';
					skin.updateSize(me._ht_video_youtube_image);
				}
			}
		}
		me._ht_video_youtube_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_image.style[domTransition]='width 0s, height 0s';
				if (me._ht_video_youtube_image.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_image.style.visibility="hidden";
					me._ht_video_youtube_image.ggVisible=false;
				}
				else {
					me._ht_video_youtube_image.style.visibility=(Number(me._ht_video_youtube_image.style.opacity)>0||!me._ht_video_youtube_image.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_image.ggVisible=true;
				}
			}
		}
		me._ht_video_youtube_image.onmouseover=function (e) {
			me.elementMouseOver['ht_video_youtube_image']=true;
			me._ht_video_youtube_image.logicBlock_size();
		}
		me._ht_video_youtube_image.onmouseout=function (e) {
			me.elementMouseOver['ht_video_youtube_image']=false;
			me._ht_video_youtube_image.logicBlock_size();
		}
		me._ht_video_youtube_image.ontouchend=function (e) {
			me.elementMouseOver['ht_video_youtube_image']=false;
			me._ht_video_youtube_image.logicBlock_size();
		}
		me._ht_video_youtube_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_video_youtube.appendChild(me._ht_video_youtube_image);
		el=me._tt_ht_video_youtube=document.createElement('div');
		els=me._tt_ht_video_youtube__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_video_youtube";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text chinese";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #f8a81b;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(16,16,68,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 4px 7px 4px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_video_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_video_youtube.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_video_youtube.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_video_youtube.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_video_youtube.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_youtube.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_video_youtube.style.top='-47px';
					me._tt_ht_video_youtube.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_video_youtube.ggDx=0;
					me._tt_ht_video_youtube.style.top='24px';
					me._tt_ht_video_youtube.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_video_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_youtube'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_video_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_video_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_video_youtube.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_youtube.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_video_youtube.style.visibility=(Number(me._tt_ht_video_youtube.style.opacity)>0||!me._tt_ht_video_youtube.style.opacity)?'inherit':'hidden';
					me._tt_ht_video_youtube.ggVisible=true;
				}
				else {
					me._tt_ht_video_youtube.style.visibility="hidden";
					me._tt_ht_video_youtube.ggVisible=false;
				}
			}
		}
		me._tt_ht_video_youtube.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_video_youtube.appendChild(me._tt_ht_video_youtube);
		el=me._ht_video_youtube_customimage=document.createElement('div');
		els=me._ht_video_youtube_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_video_youtube_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_youtube_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_youtube_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_customimage.style[domTransition]='';
				if (me._ht_video_youtube_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_customimage.style.visibility="hidden";
					me._ht_video_youtube_customimage__img.src = '';
					me._ht_video_youtube_customimage.ggVisible=false;
				}
				else {
					me._ht_video_youtube_customimage.style.visibility=(Number(me._ht_video_youtube_customimage.style.opacity)>0||!me._ht_video_youtube_customimage.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_customimage.ggSubElement.src=me._ht_video_youtube_customimage.ggText;
					me._ht_video_youtube_customimage.ggVisible=true;
				}
			}
		}
		me._ht_video_youtube_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_video_youtube_customimage.clientWidth;
			var parentHeight = me._ht_video_youtube_customimage.clientHeight;
			var img = me._ht_video_youtube_customimage__img;
			var aspectRatioDiv = me._ht_video_youtube_customimage.clientWidth / me._ht_video_youtube_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_video_youtube.appendChild(me._ht_video_youtube_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_video_youtube;
	};
	function SkinHotspotClass_ht_node_1(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_1=document.createElement('div');
		el.ggId="ht_node_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 416px;';
		hs+='position : absolute;';
		hs+='top : 315px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_1.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_1.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_1.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node_1']=true;
			me._text_5.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_1.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node_1']=false;
			me._text_5.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_1.ontouchend=function (e) {
			me.elementMouseOver['ht_node_1']=false;
			me._text_5.logicBlock_visible();
		}
		me._ht_node_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_5=document.createElement('div');
		els=me._text_5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text lumination";
		el.ggType='text';
		hs ='';
		hs+='height : 29px;';
		hs+='left : -65px;';
		hs+='position : absolute;';
		hs+='top : -57px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 130px;';
		hs+='height: 29px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.target;
		el.appendChild(els);
		me._text_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_node_1'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_5.style[domTransition]='';
				if (me._text_5.ggCurrentLogicStateVisible == 0) {
					me._text_5.style.visibility=(Number(me._text_5.style.opacity)>0||!me._text_5.style.opacity)?'inherit':'hidden';
					me._text_5.ggVisible=true;
				}
				else {
					me._text_5.style.visibility="hidden";
					me._text_5.ggVisible=false;
				}
			}
		}
		me._text_5.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_1.appendChild(me._text_5);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAABeCAYAAADyrTB3AAANxklEQVR4nO1df1BUxx3/3A8OgfuB8jsENeKPKTjROgYNOjU2UIlooqISOyXKpKEmozJWJ7ETJTW1E2MwaawdO0VDaOwoGMWbyASqgmb8FVAzIIjFdOR66AUJzHkHnPfj3esfnmQ53947jvs995n5ziy7e/v27eftfna/b98iYFkWIQQPhL6uQAjuRYjQIEOI0CBDiNAgQ4jQIEOI0CBDiNAgQ4jQIEOI0CBDiNAgg9jXFXAnBAKBgJLkzINrfRxgA9gfGuqhQYagJ1Sr1UYbDIYFBoNhQXt7e7Sv6+NxsCwb0AZAQJgIgKi7uzvVZDL91Wq1qlg7WK3WBwaD4V/19fXpAKIIkxAmJGyofF/fq1Pt4esKuJtQhmF2siyrtSeSC4ODg387dOjQUyFC/c'+
			'jIBmcYpsIZIkkwDNNiIzUoCBXYGiWgIBAISO0XA4DFYjkoEokKXCnPZDLdDA8Pn0dEGYiwmQgPNRbrpw0XFJOigYGB11wlEwAkEkmaXq//wJ118hUCnlCNRjMjMjKy1FGerp5+tHX2OSxHKpWu7+zszHVr5XwBX4/5zhqGT34kACR1dXXxZrP5Bk0fW+/0sitKTrGJeWVsYl4Z+9ybR9nWO7207CzDMLpPPvnkeQBjCQsnzO+1NWA01M4LFAY41k3doAnPvXkUugHTsHh5lAQndi5B+sRxnNex6el8ImqQCPu9ngbskMunm4Ufnn6CTADQDZhQuOc0dINPpgGP9FSr1b7jvpp6F35NqIAAbE4DAKIbN27MjoiI2Ev73d6q67jUpqGWq76vR/H+89R0hULxTn19fTYAKYBIwsIIIyXAb+DXhHLh6tWr0WlpaX8XCARy'+
			'rvTLNzUorbrOW05towplNa3U9AULFhxcu3Yt5zX8GX6toXa6KQIAhmEOCYXC17jy03TTEc6UrqDqqcFguBIZGbmYiOLUU5ZlrfAT+F0PtRtmSRPrdLpCGpkAXTcdoXj/eaqeRkREzL13794OPBp6pQAiCBM/Nrs6+xR+RygNarX6WZlM9hEtnU83aWjr7EVJ+RVqelJS0ub6+vrnR1ywjxAwhCYnJ5cBUHClOaubNFQ2dKDq3G1qeiDpqd9pqJ2fNgwATCZTaVhY2Aau/K7oJhf41qcDAwONUql0OXlpIvyQCDOPA75Yn/p9D9VqtS/TyARc000u6AZMDvU0KioqQ6PRbBn1hTwMvya0vb19gkKhKKOlu6qbNPDpaWJi4u8vXrzo13rqF4TazRKHZo+TJ08+DoputnX2jUo3aeDT07lz55avWrUqHsAYwsSE+dTh4B'+
			'cayuWnNZlMex3pZtbWaqjv6z1SHz49HRwc/DYqKmoJEdVPhIfGbF+sT/2ih9pDr9c71M3i/ec9RibAr6eRkZFzfvjhh995rAKjgM8Ipflpv/nmm8lRUVGHaL8rq2lFbaPK4/Xj09OEhIRdVVVVs/HIx8s5/PrC4eB3PXTevHlHaX7ats4+h43sbvDp6fLlyw8WFBT41frUZxrK5ae1WCwfi0SijVz5Pa2bNMijJDhbugJPx0k50/v7+/8tk8nyiSiav9crDe3VHurIT6vVapfTyAQ8r5s06AZMWPfhaWq6VCr9lUqlKsZPr9jI3YNDUuKt4dcvhtzm5maH601v6SYNbZ29KPmcPtSPHz/+j0qlMt2LVaLCLwhNT0+n+mm9rZs0lJ1qRW0T/aHKzc39rKioyOd66lUN5fLTGo3G7RKJZDtXfl/pJg18evrgwYMz0dHR'+
			'a4gozvUpPLgfyac9tLe39xc0MgHf6SYNfHqqUCiyfL0+9RmhSqUyety4ccdo6b7WTRr49DQhIWFXQ0PDdC9WaRg8TijNT/vSSy953U/rLvDp6fz58w8XFBQkYvgOB69sMPO4hnL5aY1G4w5HurmipAZtnb0erddowaenWq32y7FjxxYRUV7Zj+T1IVer1TrUzZLyK35PJsCvp9HR0Svv3r37ay9WCYCHCKX5aQ8cOBAnl8uP035Xde42Khs6PFElj4BPTxMTEz+oqqqaAy9uMPPIkMvl1gMAs9ncIBaL53P8BG2dfVjx3im37D7wNk68n4vn05I400wm082ioqLVFRUVd4loj7kHvUao2WwuEYvFO7jyB4pu0iCPkqDpwKuQR0o40216+gYR5TFCPaWhw/y03d3dv6SRCQSObtKgGzChkEdPb9++vQ5e8Pd6fFKkVC'+
			'oVcXFxVD9toOkmDZfaNNjrYKk1adKk973h7/U4obm5uWUCgWA8V1pbZx92lF/2dBW8htKq67h8k3vTmlAolOXk5PzF0/5et2ko13rz4cOHG8PDwzm/rg503aSBT097e3tPxMbGku5Bt/p7PdZDNRrNDBqZwKOnOdjIBPj1NCYmZoVarX7VU9f3CKF1dXXRCQkJX9LSa5tUKDtF/5Qv0MGnp8nJyX/2lL93VEMubb1pNBpPSiQSzgMounr68eLWE25fb6ZPjMH0Z2KQEidF+jMxUEQ9GvLs14ekxl1q1UDd0w/1fb1bN2w/hqP1qdFobB8zZkwOAPJ10qjdg24n1Gw2bxKLxdSvq7O2VrtlqE2JlyEnYwIy05OQmZ5E1ayR4PJNDS61avB1o8otdeTT056ens/i4+O3ElH+RahWq52hUCiu0vKXfH5lVEOtPEqC/IVT'+
			'kf/CVOomaHehq6cflQ0dqDx3e1TvZDPTk3B8J/20nDt37hRMmjSpxvanzwkd0mClUhm3dOnSRtoSpbZJ5XCy4AiZ6UnIXzgVq1+Y4mJNR4faJhVqG1Uur5e3rp6FLatncaZZrVb9vn37Fm3evLkLzg2/DglzG6EWi+WkSCRaypXPFd1MiZch/4UpyF84lfqKytvQDZpQ2dCBspq2EfdaR5/+247ScVZPPU8owzDFQqHwY1q+kehmTsYE5C+cipznJrhcL2/g8k0NKhuc93KlxMtwpnQ5n56Snyt6h1B7B4JGo5mRmJjYSMvvjG66qzfq9fomnU7XbjKZdO3t7ZcB4Nq1a3dLSkpUALBmzRr5unXr0gAgNTU1TSqVPi2TydIiIyPnuHrNx722suE270ObkzEB5W9nU9Obm5tfnzlzZu3jookk8jBJh0epj4rQurq6uO'+
			'zs7NMCgeBZrrx8upm/cCryF06hTu35wDBM/48//nj2xo0bZ7Ozs8+C+HoagIXMyldWTU1N5qxZs7JjY2OzxWJxsiv1aevsQ1lNK75u7KTKy/uFc/FGLvcS1Gq16g8cOJC9YcMGNXxBqMViqaCd5kXTzZR4Gd7ITUf+wqkuLzX6+vrqr169qly0aNFZEC4yjIJQEOvo6urqzMzMzBWxsbEvCoVC2Ujrpxs0obZRhX+cauXstU7oaTY8SajdMCsEAKPR+IpEIqHuPrDXzdH2RpPJdO/777+vOHLkyJldu3aRO7RI4siz+EyUPOQNk/dF/ocMCQAUFRXJi4uLc1NTU18PDw//mSv1buvsQ+W5DlQ2dAw93Hx62tXV9WlKSsqfiCja96fuI5Rl2f8C4Jy57K26jtKq60ifGIOiJdORkzHB5d7Y3d2tvHDhQvXKlSvJvR4W'+
			'StithNoQBgBHjx5Ny8rK+u3YsWOzXem1wE+vCi+1aRzqqdVq1b/77rszd+/e/cAW5TShrhxtKuru7k6lHVHaeqeXLd5/3uExpnwwGo13W1padi9evHgOgDSbTSMslbAJhD1FWCxh0YQpCCPjyfxkOWT5qXl5eT//7rvv3tbpdI2u3p/6vp7dUX6ZrWzooOZpbm5+GUCMzcgjXh0e6+rSWbVarTbL1ZuhgWEYXXd3d3VFRcWSEZJFEkT+lweyEcg9seR5CGQ8mZ8shyyfvG7yvn375vb09BxkGEbn7va4ePFiHoAkm5EHSA6d2ctycOXS2xaDwfCAP5fTZf3n2rVrf1i2bNmLCQkJ29auXdvurrI9jU2bNqnj4uLeE4lEM1taWt4eHBz81td1culfZSUlJTWzLPsAlJ3vfHi83Dh27NgXGzduvIXhGheQmDFjxnEAx7'+
			'dv3z5x/fr1a+Pi4rIkEslTrpbX0tKiduV3zk6KuE73OhgWFvabkVxMr9c3dXR0nNi5c+fZr776ipzPGylhcpJDmwiRSxLyZjgd2ixxww42Y5H3y/mKELZ2sCGcK9zY2Jg7bdq0VXK5nO5N4IDt1LJXiCjOU8tYLqc91zhsbxh+1no4gHClUpnAMMz/nNFGtVr9z23btmVh+MRmEmHJhI1UH0lNFBFm/5X4ExMJWh67csjyyetKCYsh7IkJ1Z49e+apVKpPzWZzlzPtVV5evhRAImFOa6jLPRQAjhw5kpaXl/dFWFjYE7vZ9Hp9061bt6ozMjJOEtHkE0X2vqDsoXZ5xABw4cKF7ClTpiyKj49fZn9Ri8Vy9/Dhw28WFha2Y/hSxeke6so6lNTdCABQq9VLJBLJLADo7+9Xnzx5smnLli1dHEWRRDhDostkuQtOki52'+
			'IkySKykqKpK/9dZbmfHx8dMB4N69ezdnz55dQ+QhnfOc/xiI637dQqgNkWSFKUWFCH0Esn3IXk+2j0uE+sUZCyG4D64452lPJvkE0jSI5jwnw17rfaPBKPWXbDcyP22OMdQ+nDNbSmEhBAFChAYZ3Lnrb6QPR0AMraOBk8MyDS79k/dQDw0yhAgNMvjFidYhuA+hHhpkCBEaZAgRGmQIERpkCBEaZAgRGmQIERpkCBEaZAgRGmQIERpk+D8dRgFQTF9x1AAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 94px;';
		hs+='left : -59px;';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : inherit;';
		hs+='width : 116px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_1.appendChild(me._image_1);
		el=me._ht_node_customimage0=document.createElement('div');
		els=me._ht_node_customimage0__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_node_customimage0.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_customimage0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage0.style[domTransition]='';
				if (me._ht_node_customimage0.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage0.style.visibility="hidden";
					me._ht_node_customimage0__img.src = '';
					me._ht_node_customimage0.ggVisible=false;
				}
				else {
					me._ht_node_customimage0.style.visibility=(Number(me._ht_node_customimage0.style.opacity)>0||!me._ht_node_customimage0.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage0.ggSubElement.src=me._ht_node_customimage0.ggText;
					me._ht_node_customimage0.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_node_customimage0.clientWidth;
			var parentHeight = me._ht_node_customimage0.clientHeight;
			var img = me._ht_node_customimage0__img;
			var aspectRatioDiv = me._ht_node_customimage0.clientWidth / me._ht_node_customimage0.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_node_1.appendChild(me._ht_node_customimage0);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.ggUse3d=true;
		me.gg3dDistance=500;
		me.__div = me._ht_node_1;
	};
	function SkinHotspotClass_ht_video_vimeo(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_vimeo=document.createElement('div');
		el.ggId="ht_video_vimeo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_vimeo.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_vimeo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_vimeo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_vimeo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_vimeo.style[domTransition]='opacity 500ms ease 0ms';
				if (me._ht_video_vimeo.ggCurrentLogicStateVisible == 0) {
					me._ht_video_vimeo.style.visibility="hidden";
					me._ht_video_vimeo.ggVisible=false;
				}
				else {
					me._ht_video_vimeo.style.visibility=(Number(me._ht_video_vimeo.style.opacity)>0||!me._ht_video_vimeo.style.opacity)?'inherit':'hidden';
					me._ht_video_vimeo.ggVisible=true;
				}
			}
		}
		me._ht_video_vimeo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_timer') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_vimeo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_vimeo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_vimeo.style[domTransition]='opacity 500ms ease 0ms';
				if (me._ht_video_vimeo.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_vimeo.style.visibility=me._ht_video_vimeo.ggVisible?'inherit':'hidden';
					me._ht_video_vimeo.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_vimeo.style.opacity == 0.0) { me._ht_video_vimeo.style.visibility="hidden"; } }, 505);
					me._ht_video_vimeo.style.opacity=0;
				}
			}
		}
		me._ht_video_vimeo.onclick=function (e) {
			skin._popup_video_vimeo.ggInitMedia(me.hotspot.url);
			player.setVariableValue('vis_video_popup_vimeo', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_vimeo.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_vimeo.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_vimeo']=true;
			me._tt_ht_video_vimeo.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_vimeo.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_vimeo']=false;
			me._tt_ht_video_vimeo.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_vimeo.ontouchend=function (e) {
			me.elementMouseOver['ht_video_vimeo']=false;
			me._tt_ht_video_vimeo.logicBlock_visible();
		}
		me._ht_video_vimeo.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_vimeo_image=document.createElement('div');
		els=me._ht_video_vimeo_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNDEuMjIgNDIuODMiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtpc29sYXRpb246aXNvbGF0ZTt9LmNscy0ye29wYWNpdHk6MC4xODttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ze2ZpbGw6dXJsKCNyYWRpYWwtZ3JhZGllbnQpO30uY2xzLTR7ZmlsbDojZmZmO308L3N0eWxlPgogIDxyYWRpYWxHcmFkaWVudCBjeT0iMjEuNTkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjeD0iMjAuNjciIGlkPSJyYW'+
			'RpYWwtZ3JhZGllbnQiIHI9IjE4LjI3Ij4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMWQ2M2E4Ii8+CiAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzFjNDI4MyIvPgogIDwvcmFkaWFsR3JhZGllbnQ+CiA8L2RlZnM+CiA8ZyBjbGFzcz0iY2xzLTEiPgogIDxnIGlkPSJMYXllcl8zIiBkYXRhLW5hbWU9IkxheWVyIDMiPgogICA8aW1hZ2UgY2xhc3M9ImNscy0yIiB3aWR0aD0iNDMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDMgMC44MykiIGhlaWdodD0iNDQiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFB'+
			'Q3NBQUFBc0NBWUFBQUQ4V0VGNEFBQUFDWEJJV1hNQUFBc1NBQUFMRWdIUzNYNzhBQUFFRDBsRVFWUllSKzNaMzI4VVZSakc4YzlaV2tIYllHUGxseFlNRVlsY2NBTWhYaHYvY0s4eG9SY1NvMEVNb2FWVVdtdXdJSVZ1MmVQRk82YzdPNTNkN1ErVzFjUW5tVXk3T3pQN25lZTg1OHc1ejZTY3M1TW9wWlRLbnlNT3k1QlArR1BwT09kWGdHV2J4UWZWdmcwNG80dmRhcDhGOTVGLytFaXdGV1FITXpoVGJRczRqN1BWNTNYZ2pEMXNZd1BQOGJyYTl0QTdDdlNoWUd1UXM1akRKN2lFYy9nTTEzQUJwMXRPZjRObmVJaW4yTVE2L3NUZnd1MURRWStGVFNrVnlIa3M0Z3Erd3RkWXdxY0M5R3gxWEZOZDRld3ovSU'+
			'VuK0FXL1lnVmJlSWx1enJuWGN2NitSc0ttbEU3aFE5SE1WM0VkTndYc1pWRUNaNFNqNDJyMmpXais1MWdWc1BmeEFJOUVtZXprbk4rMlhBTWpZR3VnUzdpRmIzQURYd2lINS9RQnl6Wk11YloxUmZOdjRURit4bDBzQzllSEFzKzBmVmdEdll3NytCYTNSWjNPQzhpTzBZQjExVyttV2ZzWERYYk8xWlJTSy9BQjJLcEdpNk4zOEYyMVg4SkhqZ2JacG9SVCt0Q25CVWVuZGt3cjhBQnMxZXRuUlkzZUVvN2VFUTRYMEhlbEFqMG5ybDlYeHBPVTBxdDZwMnM2MnhITmZGWFU2RzJEams1Q0hYSDlBdHdUWS9BdTFsSkt1MlZZMjRldHVib29ldjBOVWFPVEJDMHF3RXY2RDVGbitFdU1IbS9MUWZVVDVrUnZ2MW50'+
			'NTAwZXRLZ0FYeEpHWFJjZGNLYk1Qem9jY1BWYXRTMGFQblpPU3FVTXI0aUh6aVV4anZkaHRiczY1LzI1V2xSTVc4RG40bkhlaDYxY25SR1dUOVBWb2lRQXk3eGpBYk9wR2xPSnNlNmlzUDZLNmJoYWxBVFBCV0hjZVRFRjNSL2daOFZUcEQ0aG1ZYXJqT0FwN3BVRFJrMmkzNmRhZVpwTlBXM0lwZ1o0cGxXWHg5TC9zSlBTZnhwMjdLSnRtaXF3Yld2N2Y0TUdPRHI2b0dWYXRtMzZ3SzNtRldkM3hlcnlvUUIrWTNxd1E4M3JWTFB3cnBqa2xoRGl0ZW5COXNUcWQwWGtDNzhMOHdacTlyVUFYUlBnMHlpRll0eVdhT1dISXJuWnl6bm5KdXk2dUpzVmtaS01URWdtb09McVl4R0FQSzcrNzFFNVc1WENucmlMQn'+
			'lKNFdNY3I3dys0emRVdEVTc05MaGdGMUVzUjVkelZEeDRtc1F4dlUvbjlWbGVwd2VhY2MwcXBLMGFGWllQQnc2U0JlNklWMTBXclB0QndsVVp1a0hQdXBaUjJST2JVbkM1T0FqanJnejdCUGRHcWo3VDBtUVB4VWM3NWJRVzgydnpPdTR1UUNKQXVYZ2hINytGNzBhb2JHcTR5SkpnYkFseVNrdU9HYy9TVHhKNFlmVGFFaXo4NW1DUWU2Tml0c0J3QUxxUEZ0dUd4cDhhK3VGTGZsNXgyUjREZXh3OEM5cEV4R2UxaGt1OXhnWEo5Z1ZuV1RhZEU1Rk4vdHRjZm9adWl0eS9qUjFFR0w0eEp2OGZDWWx4VVg5NGxsQlhwZVZIWHI0UlQ1ZGxlZjdld1ZuMjNKc0IzSE9LOXdxRmcyWStZQ25RekNDNDU2d1Y4aVk5'+
			'RnFQYWIvc1NvT050OGF6UDJYVUxSb1dHTGF0QXpCdDhsRkdmUDZUdTdhWERLZWFMM1lVZUdMU3JKbnNGT05hcG1sZjFSQU9zNk5teWJHamR3SXJBMi9RTVZFOFloUmM3Mi9RQUFBQUJKUlU1RXJrSmdnZz09Ii8+CiAgIDxjaXJjbGUgY2xhc3M9ImNscy0zIiBjeT0iMjEuNTkiIGN4PSIyMC42NyIgcj0iMTguMjciLz4KICAgPHBhdGggY2xhc3M9ImNscy00IiBkPSJNMTMuNzcsMTIuMzZWMzAuNDdhLjY2LjY2LDAsMCwwLDEsLjU3TDMwLjY2LDIyYS42NS42NSwwLDAsMCwwLTEuMTNMMTQuNzUsMTEuNzlBLjY2LjY2LDAsMCwwLDEzLjc3LDEyLjM2WiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_vimeo_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_vimeo_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_vimeo_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_image.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['ht_video_vimeo_image'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_video_vimeo_image.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_video_vimeo_image.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_video_vimeo_image.style[domTransition]='width 1000ms ease 0ms, height 1000ms ease 0ms';
				if (me._ht_video_vimeo_image.ggCurrentLogicStateSize == 0) {
					me._ht_video_vimeo_image.style.width='50px';
					me._ht_video_vimeo_image.style.height='50px';
					setTimeout(function() {skin.updateSize(me._ht_video_vimeo_image);}, 1000);
				}
				else {
					me._ht_video_vimeo_image.style.width='43px';
					me._ht_video_vimeo_image.style.height='43px';
					setTimeout(function() {skin.updateSize(me._ht_video_vimeo_image);}, 1000);
				}
			}
		}
		me._ht_video_vimeo_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_vimeo_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_vimeo_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_vimeo_image.style[domTransition]='width 1000ms ease 0ms, height 1000ms ease 0ms';
				if (me._ht_video_vimeo_image.ggCurrentLogicStateVisible == 0) {
					me._ht_video_vimeo_image.style.visibility="hidden";
					me._ht_video_vimeo_image.ggVisible=false;
				}
				else {
					me._ht_video_vimeo_image.style.visibility=(Number(me._ht_video_vimeo_image.style.opacity)>0||!me._ht_video_vimeo_image.style.opacity)?'inherit':'hidden';
					me._ht_video_vimeo_image.ggVisible=true;
				}
			}
		}
		me._ht_video_vimeo_image.onmouseover=function (e) {
			me.elementMouseOver['ht_video_vimeo_image']=true;
			me._ht_video_vimeo_image.logicBlock_size();
		}
		me._ht_video_vimeo_image.onmouseout=function (e) {
			me.elementMouseOver['ht_video_vimeo_image']=false;
			me._ht_video_vimeo_image.logicBlock_size();
		}
		me._ht_video_vimeo_image.ontouchend=function (e) {
			me.elementMouseOver['ht_video_vimeo_image']=false;
			me._ht_video_vimeo_image.logicBlock_size();
		}
		me._ht_video_vimeo_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_video_vimeo.appendChild(me._ht_video_vimeo_image);
		el=me._tt_ht_video_vimeo=document.createElement('div');
		els=me._tt_ht_video_vimeo__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_video_vimeo";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		hs+='lumination';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #f8a81b;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(16,16,68,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 4px 7px 4px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_video_vimeo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_video_vimeo.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_video_vimeo.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_video_vimeo.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_video_vimeo.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_vimeo.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_video_vimeo.style.top='-47px';
					me._tt_ht_video_vimeo.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_video_vimeo.ggDx=0;
					me._tt_ht_video_vimeo.style.top='24px';
					me._tt_ht_video_vimeo.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_video_vimeo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_vimeo'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_video_vimeo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_video_vimeo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_video_vimeo.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_vimeo.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_video_vimeo.style.visibility=(Number(me._tt_ht_video_vimeo.style.opacity)>0||!me._tt_ht_video_vimeo.style.opacity)?'inherit':'hidden';
					me._tt_ht_video_vimeo.ggVisible=true;
				}
				else {
					me._tt_ht_video_vimeo.style.visibility="hidden";
					me._tt_ht_video_vimeo.ggVisible=false;
				}
			}
		}
		me._tt_ht_video_vimeo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_video_vimeo.appendChild(me._tt_ht_video_vimeo);
		el=me._ht_video_vimeo_customimage=document.createElement('div');
		els=me._ht_video_vimeo_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_video_vimeo_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_vimeo_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_vimeo_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_vimeo_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_vimeo_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_vimeo_customimage.style[domTransition]='';
				if (me._ht_video_vimeo_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_video_vimeo_customimage.style.visibility="hidden";
					me._ht_video_vimeo_customimage__img.src = '';
					me._ht_video_vimeo_customimage.ggVisible=false;
				}
				else {
					me._ht_video_vimeo_customimage.style.visibility=(Number(me._ht_video_vimeo_customimage.style.opacity)>0||!me._ht_video_vimeo_customimage.style.opacity)?'inherit':'hidden';
					me._ht_video_vimeo_customimage.ggSubElement.src=me._ht_video_vimeo_customimage.ggText;
					me._ht_video_vimeo_customimage.ggVisible=true;
				}
			}
		}
		me._ht_video_vimeo_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_video_vimeo_customimage.clientWidth;
			var parentHeight = me._ht_video_vimeo_customimage.clientHeight;
			var img = me._ht_video_vimeo_customimage__img;
			var aspectRatioDiv = me._ht_video_vimeo_customimage.clientWidth / me._ht_video_vimeo_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_video_vimeo.appendChild(me._ht_video_vimeo_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_video_vimeo;
	};
	function SkinHotspotClass_ht_video_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_url=document.createElement('div');
		el.ggId="ht_video_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_url.style[domTransition]='opacity 500ms ease 0ms';
				if (me._ht_video_url.ggCurrentLogicStateVisible == 0) {
					me._ht_video_url.style.visibility="hidden";
					me._ht_video_url.ggVisible=false;
				}
				else {
					me._ht_video_url.style.visibility=(Number(me._ht_video_url.style.opacity)>0||!me._ht_video_url.style.opacity)?'inherit':'hidden';
					me._ht_video_url.ggVisible=true;
				}
			}
		}
		me._ht_video_url.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_timer') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_url.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_url.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_url.style[domTransition]='opacity 500ms ease 0ms';
				if (me._ht_video_url.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_url.style.visibility=me._ht_video_url.ggVisible?'inherit':'hidden';
					me._ht_video_url.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_url.style.opacity == 0.0) { me._ht_video_url.style.visibility="hidden"; } }, 505);
					me._ht_video_url.style.opacity=0;
				}
			}
		}
		me._ht_video_url.onclick=function (e) {
			skin._popup_video_url.ggInitMedia(me.hotspot.url);
			player.setVariableValue('vis_video_popup_url', true);
			if (skin._popup_video_url.ggApiPlayer) {
				if (skin._popup_video_url.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						skin._popup_video_url.ggApiPlayer.playVideo();
					};
					if (skin._popup_video_url.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (skin._popup_video_url.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (skin._popup_video_url.ggApiPlayerType == 'vimeo') {
					skin._popup_video_url.ggApiPlayer.play();
				}
			} else {
				player.playSound("popup_video_url","1");
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_url.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_url.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_url']=true;
			me._tt_ht_video_url.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_url.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_url']=false;
			me._tt_ht_video_url.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_url.ontouchend=function (e) {
			me.elementMouseOver['ht_video_url']=false;
			me._tt_ht_video_url.logicBlock_visible();
		}
		me._ht_video_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_url_image=document.createElement('div');
		els=me._ht_video_url_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNDEuMjIgNDIuODMiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtpc29sYXRpb246aXNvbGF0ZTt9LmNscy0ye29wYWNpdHk6MC4xODttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ze2ZpbGw6dXJsKCNyYWRpYWwtZ3JhZGllbnQpO30uY2xzLTR7ZmlsbDojZmZmO308L3N0eWxlPgogIDxyYWRpYWxHcmFkaWVudCBjeT0iMjEuNTkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjeD0iMjAuNjciIGlkPSJyYW'+
			'RpYWwtZ3JhZGllbnQiIHI9IjE4LjI3Ij4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMWQ2M2E4Ii8+CiAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzFjNDI4MyIvPgogIDwvcmFkaWFsR3JhZGllbnQ+CiA8L2RlZnM+CiA8ZyBjbGFzcz0iY2xzLTEiPgogIDxnIGlkPSJMYXllcl8zIiBkYXRhLW5hbWU9IkxheWVyIDMiPgogICA8aW1hZ2UgY2xhc3M9ImNscy0yIiB3aWR0aD0iNDMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDMgMC44MykiIGhlaWdodD0iNDQiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFB'+
			'Q3NBQUFBc0NBWUFBQUQ4V0VGNEFBQUFDWEJJV1hNQUFBc1NBQUFMRWdIUzNYNzhBQUFFRDBsRVFWUllSKzNaMzI4VVZSakc4YzlaV2tIYllHUGxseFlNRVlsY2NBTWhYaHYvY0s4eG9SY1NvMEVNb2FWVVdtdXdJSVZ1MmVQRk82YzdPNTNkN1ErVzFjUW5tVXk3T3pQN25lZTg1OHc1ejZTY3M1TW9wWlRLbnlNT3k1QlArR1BwT09kWGdHV2J4UWZWdmcwNG80dmRhcDhGOTVGLytFaXdGV1FITXpoVGJRczRqN1BWNTNYZ2pEMXNZd1BQOGJyYTl0QTdDdlNoWUd1UXM1akRKN2lFYy9nTTEzQUJwMXRPZjRObmVJaW4yTVE2L3NUZnd1MURRWStGVFNrVnlIa3M0Z3Erd3RkWXdxY0M5R3gxWEZOZDRld3ovSU'+
			'VuK0FXL1lnVmJlSWx1enJuWGN2NitSc0ttbEU3aFE5SE1WM0VkTndYc1pWRUNaNFNqNDJyMmpXais1MWdWc1BmeEFJOUVtZXprbk4rMlhBTWpZR3VnUzdpRmIzQURYd2lINS9RQnl6Wk11YloxUmZOdjRURit4bDBzQzllSEFzKzBmVmdEdll3NytCYTNSWjNPQzhpTzBZQjExVyttV2ZzWERYYk8xWlJTSy9BQjJLcEdpNk4zOEYyMVg4SkhqZ2JacG9SVCt0Q25CVWVuZGt3cjhBQnMxZXRuUlkzZUVvN2VFUTRYMEhlbEFqMG5ybDlYeHBPVTBxdDZwMnM2MnhITmZGWFU2RzJEams1Q0hYSDlBdHdUWS9BdTFsSkt1MlZZMjRldHVib29ldjBOVWFPVEJDMHF3RXY2RDVGbitFdU1IbS9MUWZVVDVrUnZ2MW50'+
			'NTAwZXRLZ0FYeEpHWFJjZGNLYk1Qem9jY1BWYXRTMGFQblpPU3FVTXI0aUh6aVV4anZkaHRiczY1LzI1V2xSTVc4RG40bkhlaDYxY25SR1dUOVBWb2lRQXk3eGpBYk9wR2xPSnNlNmlzUDZLNmJoYWxBVFBCV0hjZVRFRjNSL2daOFZUcEQ0aG1ZYXJqT0FwN3BVRFJrMmkzNmRhZVpwTlBXM0lwZ1o0cGxXWHg5TC9zSlBTZnhwMjdLSnRtaXF3Yld2N2Y0TUdPRHI2b0dWYXRtMzZ3SzNtRldkM3hlcnlvUUIrWTNxd1E4M3JWTFB3cnBqa2xoRGl0ZW5COXNUcWQwWGtDNzhMOHdacTlyVUFYUlBnMHlpRll0eVdhT1dISXJuWnl6bm5KdXk2dUpzVmtaS01URWdtb09McVl4R0FQSzcrNzFFNVc1WENucmlMQn'+
			'lKNFdNY3I3dys0emRVdEVTc05MaGdGMUVzUjVkelZEeDRtc1F4dlUvbjlWbGVwd2VhY2MwcXBLMGFGWllQQnc2U0JlNklWMTBXclB0QndsVVp1a0hQdXBaUjJST2JVbkM1T0FqanJnejdCUGRHcWo3VDBtUVB4VWM3NWJRVzgydnpPdTR1UUNKQXVYZ2hINytGNzBhb2JHcTR5SkpnYkFseVNrdU9HYy9TVHhKNFlmVGFFaXo4NW1DUWU2Tml0c0J3QUxxUEZ0dUd4cDhhK3VGTGZsNXgyUjREZXh3OEM5cEV4R2UxaGt1OXhnWEo5Z1ZuV1RhZEU1Rk4vdHRjZm9adWl0eS9qUjFFR0w0eEp2OGZDWWx4VVg5NGxsQlhwZVZIWHI0UlQ1ZGxlZjdld1ZuMjNKc0IzSE9LOXdxRmcyWStZQ25RekNDNDU2d1Y4aVk5'+
			'RnFQYWIvc1NvT050OGF6UDJYVUxSb1dHTGF0QXpCdDhsRkdmUDZUdTdhWERLZWFMM1lVZUdMU3JKbnNGT05hcG1sZjFSQU9zNk5teWJHamR3SXJBMi9RTVZFOFloUmM3Mi9RQUFBQUJKUlU1RXJrSmdnZz09Ii8+CiAgIDxjaXJjbGUgY2xhc3M9ImNscy0zIiBjeT0iMjEuNTkiIGN4PSIyMC42NyIgcj0iMTguMjciLz4KICAgPHBhdGggY2xhc3M9ImNscy00IiBkPSJNMTMuNzcsMTIuMzZWMzAuNDdhLjY2LjY2LDAsMCwwLDEsLjU3TDMwLjY2LDIyYS42NS42NSwwLDAsMCwwLTEuMTNMMTQuNzUsMTEuNzlBLjY2LjY2LDAsMCwwLDEzLjc3LDEyLjM2WiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_url_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_url_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_url_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_image.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['ht_video_url_image'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_video_url_image.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_video_url_image.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_video_url_image.style[domTransition]='width 1000ms ease 0ms, height 1000ms ease 0ms';
				if (me._ht_video_url_image.ggCurrentLogicStateSize == 0) {
					me._ht_video_url_image.style.width='50px';
					me._ht_video_url_image.style.height='50px';
					setTimeout(function() {skin.updateSize(me._ht_video_url_image);}, 1000);
				}
				else {
					me._ht_video_url_image.style.width='43px';
					me._ht_video_url_image.style.height='43px';
					setTimeout(function() {skin.updateSize(me._ht_video_url_image);}, 1000);
				}
			}
		}
		me._ht_video_url_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_url_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_url_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_url_image.style[domTransition]='width 1000ms ease 0ms, height 1000ms ease 0ms';
				if (me._ht_video_url_image.ggCurrentLogicStateVisible == 0) {
					me._ht_video_url_image.style.visibility="hidden";
					me._ht_video_url_image.ggVisible=false;
				}
				else {
					me._ht_video_url_image.style.visibility=(Number(me._ht_video_url_image.style.opacity)>0||!me._ht_video_url_image.style.opacity)?'inherit':'hidden';
					me._ht_video_url_image.ggVisible=true;
				}
			}
		}
		me._ht_video_url_image.onmouseover=function (e) {
			me.elementMouseOver['ht_video_url_image']=true;
			me._ht_video_url_image.logicBlock_size();
		}
		me._ht_video_url_image.onmouseout=function (e) {
			me.elementMouseOver['ht_video_url_image']=false;
			me._ht_video_url_image.logicBlock_size();
		}
		me._ht_video_url_image.ontouchend=function (e) {
			me.elementMouseOver['ht_video_url_image']=false;
			me._ht_video_url_image.logicBlock_size();
		}
		me._ht_video_url_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_video_url.appendChild(me._ht_video_url_image);
		el=me._tt_ht_video_url=document.createElement('div');
		els=me._tt_ht_video_url__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_video_url";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #f8a81b;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(16,16,68,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 4px 7px 4px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_video_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_video_url.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_video_url.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_video_url.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_video_url.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_url.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_video_url.style.top='-47px';
					me._tt_ht_video_url.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_video_url.ggDx=0;
					me._tt_ht_video_url.style.top='24px';
					me._tt_ht_video_url.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_video_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_url'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_video_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_video_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_video_url.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_url.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_video_url.style.visibility=(Number(me._tt_ht_video_url.style.opacity)>0||!me._tt_ht_video_url.style.opacity)?'inherit':'hidden';
					me._tt_ht_video_url.ggVisible=true;
				}
				else {
					me._tt_ht_video_url.style.visibility="hidden";
					me._tt_ht_video_url.ggVisible=false;
				}
			}
		}
		me._tt_ht_video_url.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_video_url.appendChild(me._tt_ht_video_url);
		el=me._ht_video_url_customimage=document.createElement('div');
		els=me._ht_video_url_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_video_url_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_url_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_url_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_url_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_url_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_url_customimage.style[domTransition]='';
				if (me._ht_video_url_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_video_url_customimage.style.visibility="hidden";
					me._ht_video_url_customimage__img.src = '';
					me._ht_video_url_customimage.ggVisible=false;
				}
				else {
					me._ht_video_url_customimage.style.visibility=(Number(me._ht_video_url_customimage.style.opacity)>0||!me._ht_video_url_customimage.style.opacity)?'inherit':'hidden';
					me._ht_video_url_customimage.ggSubElement.src=me._ht_video_url_customimage.ggText;
					me._ht_video_url_customimage.ggVisible=true;
				}
			}
		}
		me._ht_video_url_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_video_url_customimage.clientWidth;
			var parentHeight = me._ht_video_url_customimage.clientHeight;
			var img = me._ht_video_url_customimage__img;
			var aspectRatioDiv = me._ht_video_url_customimage.clientWidth / me._ht_video_url_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_video_url.appendChild(me._ht_video_url_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_video_url;
	};
	function SkinHotspotClass_ht_video_file(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_file=document.createElement('div');
		el.ggId="ht_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_file.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file.style[domTransition]='opacity 500ms ease 0ms';
				if (me._ht_video_file.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file.style.visibility="hidden";
					me._ht_video_file.ggVisible=false;
				}
				else {
					me._ht_video_file.style.visibility=(Number(me._ht_video_file.style.opacity)>0||!me._ht_video_file.style.opacity)?'inherit':'hidden';
					me._ht_video_file.ggVisible=true;
				}
			}
		}
		me._ht_video_file.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_timer') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_file.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_file.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_file.style[domTransition]='opacity 500ms ease 0ms';
				if (me._ht_video_file.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_file.style.visibility=me._ht_video_file.ggVisible?'inherit':'hidden';
					me._ht_video_file.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_file.style.opacity == 0.0) { me._ht_video_file.style.visibility="hidden"; } }, 505);
					me._ht_video_file.style.opacity=0;
				}
			}
		}
		me._ht_video_file.onclick=function (e) {
			skin._popup_video_file.ggInitMedia(player.getBasePath()+""+me.hotspot.url);
			player.setVariableValue('vis_video_popup_file', true);
			if (skin._popup_video_file.ggApiPlayer) {
				if (skin._popup_video_file.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						skin._popup_video_file.ggApiPlayer.playVideo();
					};
					if (skin._popup_video_file.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (skin._popup_video_file.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (skin._popup_video_file.ggApiPlayerType == 'vimeo') {
					skin._popup_video_file.ggApiPlayer.play();
				}
			} else {
				player.playSound("popup_video_file","1");
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_file.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_file.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_file']=true;
			me._tt_ht_video_file.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_file.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_file']=false;
			me._tt_ht_video_file.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_file.ontouchend=function (e) {
			me.elementMouseOver['ht_video_file']=false;
			me._tt_ht_video_file.logicBlock_visible();
		}
		me._ht_video_file.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_file_image=document.createElement('div');
		els=me._ht_video_file_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNDEuMjIgNDIuODMiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtpc29sYXRpb246aXNvbGF0ZTt9LmNscy0ye29wYWNpdHk6MC4xODttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ze2ZpbGw6dXJsKCNyYWRpYWwtZ3JhZGllbnQpO30uY2xzLTR7ZmlsbDojZmZmO308L3N0eWxlPgogIDxyYWRpYWxHcmFkaWVudCBjeT0iMjEuNTkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjeD0iMjAuNjciIGlkPSJyYW'+
			'RpYWwtZ3JhZGllbnQiIHI9IjE4LjI3Ij4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMWQ2M2E4Ii8+CiAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzFjNDI4MyIvPgogIDwvcmFkaWFsR3JhZGllbnQ+CiA8L2RlZnM+CiA8ZyBjbGFzcz0iY2xzLTEiPgogIDxnIGlkPSJMYXllcl8zIiBkYXRhLW5hbWU9IkxheWVyIDMiPgogICA8aW1hZ2UgY2xhc3M9ImNscy0yIiB3aWR0aD0iNDMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDMgMC44MykiIGhlaWdodD0iNDQiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFB'+
			'Q3NBQUFBc0NBWUFBQUQ4V0VGNEFBQUFDWEJJV1hNQUFBc1NBQUFMRWdIUzNYNzhBQUFFRDBsRVFWUllSKzNaMzI4VVZSakc4YzlaV2tIYllHUGxseFlNRVlsY2NBTWhYaHYvY0s4eG9SY1NvMEVNb2FWVVdtdXdJSVZ1MmVQRk82YzdPNTNkN1ErVzFjUW5tVXk3T3pQN25lZTg1OHc1ejZTY3M1TW9wWlRLbnlNT3k1QlArR1BwT09kWGdHV2J4UWZWdmcwNG80dmRhcDhGOTVGLytFaXdGV1FITXpoVGJRczRqN1BWNTNYZ2pEMXNZd1BQOGJyYTl0QTdDdlNoWUd1UXM1akRKN2lFYy9nTTEzQUJwMXRPZjRObmVJaW4yTVE2L3NUZnd1MURRWStGVFNrVnlIa3M0Z3Erd3RkWXdxY0M5R3gxWEZOZDRld3ovSU'+
			'VuK0FXL1lnVmJlSWx1enJuWGN2NitSc0ttbEU3aFE5SE1WM0VkTndYc1pWRUNaNFNqNDJyMmpXais1MWdWc1BmeEFJOUVtZXprbk4rMlhBTWpZR3VnUzdpRmIzQURYd2lINS9RQnl6Wk11YloxUmZOdjRURit4bDBzQzllSEFzKzBmVmdEdll3NytCYTNSWjNPQzhpTzBZQjExVyttV2ZzWERYYk8xWlJTSy9BQjJLcEdpNk4zOEYyMVg4SkhqZ2JacG9SVCt0Q25CVWVuZGt3cjhBQnMxZXRuUlkzZUVvN2VFUTRYMEhlbEFqMG5ybDlYeHBPVTBxdDZwMnM2MnhITmZGWFU2RzJEams1Q0hYSDlBdHdUWS9BdTFsSkt1MlZZMjRldHVib29ldjBOVWFPVEJDMHF3RXY2RDVGbitFdU1IbS9MUWZVVDVrUnZ2MW50'+
			'NTAwZXRLZ0FYeEpHWFJjZGNLYk1Qem9jY1BWYXRTMGFQblpPU3FVTXI0aUh6aVV4anZkaHRiczY1LzI1V2xSTVc4RG40bkhlaDYxY25SR1dUOVBWb2lRQXk3eGpBYk9wR2xPSnNlNmlzUDZLNmJoYWxBVFBCV0hjZVRFRjNSL2daOFZUcEQ0aG1ZYXJqT0FwN3BVRFJrMmkzNmRhZVpwTlBXM0lwZ1o0cGxXWHg5TC9zSlBTZnhwMjdLSnRtaXF3Yld2N2Y0TUdPRHI2b0dWYXRtMzZ3SzNtRldkM3hlcnlvUUIrWTNxd1E4M3JWTFB3cnBqa2xoRGl0ZW5COXNUcWQwWGtDNzhMOHdacTlyVUFYUlBnMHlpRll0eVdhT1dISXJuWnl6bm5KdXk2dUpzVmtaS01URWdtb09McVl4R0FQSzcrNzFFNVc1WENucmlMQn'+
			'lKNFdNY3I3dys0emRVdEVTc05MaGdGMUVzUjVkelZEeDRtc1F4dlUvbjlWbGVwd2VhY2MwcXBLMGFGWllQQnc2U0JlNklWMTBXclB0QndsVVp1a0hQdXBaUjJST2JVbkM1T0FqanJnejdCUGRHcWo3VDBtUVB4VWM3NWJRVzgydnpPdTR1UUNKQXVYZ2hINytGNzBhb2JHcTR5SkpnYkFseVNrdU9HYy9TVHhKNFlmVGFFaXo4NW1DUWU2Tml0c0J3QUxxUEZ0dUd4cDhhK3VGTGZsNXgyUjREZXh3OEM5cEV4R2UxaGt1OXhnWEo5Z1ZuV1RhZEU1Rk4vdHRjZm9adWl0eS9qUjFFR0w0eEp2OGZDWWx4VVg5NGxsQlhwZVZIWHI0UlQ1ZGxlZjdld1ZuMjNKc0IzSE9LOXdxRmcyWStZQ25RekNDNDU2d1Y4aVk5'+
			'RnFQYWIvc1NvT050OGF6UDJYVUxSb1dHTGF0QXpCdDhsRkdmUDZUdTdhWERLZWFMM1lVZUdMU3JKbnNGT05hcG1sZjFSQU9zNk5teWJHamR3SXJBMi9RTVZFOFloUmM3Mi9RQUFBQUJKUlU1RXJrSmdnZz09Ii8+CiAgIDxjaXJjbGUgY2xhc3M9ImNscy0zIiBjeT0iMjEuNTkiIGN4PSIyMC42NyIgcj0iMTguMjciLz4KICAgPHBhdGggY2xhc3M9ImNscy00IiBkPSJNMTMuNzcsMTIuMzZWMzAuNDdhLjY2LjY2LDAsMCwwLDEsLjU3TDMwLjY2LDIyYS42NS42NSwwLDAsMCwwLTEuMTNMMTQuNzUsMTEuNzlBLjY2LjY2LDAsMCwwLDEzLjc3LDEyLjM2WiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_file_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_file_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_file_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_image.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['ht_video_file_image'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_video_file_image.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_video_file_image.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_video_file_image.style[domTransition]='width 0s, height 0s';
				if (me._ht_video_file_image.ggCurrentLogicStateSize == 0) {
					me._ht_video_file_image.style.width='50px';
					me._ht_video_file_image.style.height='50px';
					skin.updateSize(me._ht_video_file_image);
				}
				else {
					me._ht_video_file_image.style.width='43px';
					me._ht_video_file_image.style.height='43px';
					skin.updateSize(me._ht_video_file_image);
				}
			}
		}
		me._ht_video_file_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file_image.style[domTransition]='width 0s, height 0s';
				if (me._ht_video_file_image.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file_image.style.visibility="hidden";
					me._ht_video_file_image.ggVisible=false;
				}
				else {
					me._ht_video_file_image.style.visibility=(Number(me._ht_video_file_image.style.opacity)>0||!me._ht_video_file_image.style.opacity)?'inherit':'hidden';
					me._ht_video_file_image.ggVisible=true;
				}
			}
		}
		me._ht_video_file_image.onmouseover=function (e) {
			me.elementMouseOver['ht_video_file_image']=true;
			me._ht_video_file_image.logicBlock_size();
		}
		me._ht_video_file_image.onmouseout=function (e) {
			me.elementMouseOver['ht_video_file_image']=false;
			me._ht_video_file_image.logicBlock_size();
		}
		me._ht_video_file_image.ontouchend=function (e) {
			me.elementMouseOver['ht_video_file_image']=false;
			me._ht_video_file_image.logicBlock_size();
		}
		me._ht_video_file_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_video_file.appendChild(me._ht_video_file_image);
		el=me._tt_ht_video_file=document.createElement('div');
		els=me._tt_ht_video_file__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_video_file";
		el.ggDx=-2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text chinese";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #f8a81b;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(16,16,68,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 4px 7px 4px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_video_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_video_file.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_video_file.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_video_file.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_video_file.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_file.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_video_file.style.top='-47px';
					me._tt_ht_video_file.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_video_file.ggDx=-2;
					me._tt_ht_video_file.style.top='24px';
					me._tt_ht_video_file.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_video_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_file'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_video_file.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_file.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_video_file.style.visibility=(Number(me._tt_ht_video_file.style.opacity)>0||!me._tt_ht_video_file.style.opacity)?'inherit':'hidden';
					me._tt_ht_video_file.ggVisible=true;
				}
				else {
					me._tt_ht_video_file.style.visibility="hidden";
					me._tt_ht_video_file.ggVisible=false;
				}
			}
		}
		me._tt_ht_video_file.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_video_file.appendChild(me._tt_ht_video_file);
		el=me._ht_video_file_customimage=document.createElement('div');
		els=me._ht_video_file_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_video_file_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_file_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_file_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file_customimage.style[domTransition]='';
				if (me._ht_video_file_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file_customimage.style.visibility="hidden";
					me._ht_video_file_customimage__img.src = '';
					me._ht_video_file_customimage.ggVisible=false;
				}
				else {
					me._ht_video_file_customimage.style.visibility=(Number(me._ht_video_file_customimage.style.opacity)>0||!me._ht_video_file_customimage.style.opacity)?'inherit':'hidden';
					me._ht_video_file_customimage.ggSubElement.src=me._ht_video_file_customimage.ggText;
					me._ht_video_file_customimage.ggVisible=true;
				}
			}
		}
		me._ht_video_file_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_video_file_customimage.clientWidth;
			var parentHeight = me._ht_video_file_customimage.clientHeight;
			var img = me._ht_video_file_customimage__img;
			var aspectRatioDiv = me._ht_video_file_customimage.clientWidth / me._ht_video_file_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_video_file.appendChild(me._ht_video_file_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_video_file;
	};
	function SkinHotspotClass_ht_image(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_image=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image.style[domTransition]='opacity 500ms ease 0ms';
				if (me._ht_image.ggCurrentLogicStateVisible == 0) {
					me._ht_image.style.visibility="hidden";
					me._ht_image.ggVisible=false;
				}
				else {
					me._ht_image.style.visibility=(Number(me._ht_image.style.opacity)>0||!me._ht_image.style.opacity)?'inherit':'hidden';
					me._ht_image.ggVisible=true;
				}
			}
		}
		me._ht_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_timer') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image.style[domTransition]='opacity 500ms ease 0ms';
				if (me._ht_image.ggCurrentLogicStateAlpha == 0) {
					me._ht_image.style.visibility=me._ht_image.ggVisible?'inherit':'hidden';
					me._ht_image.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_image.style.opacity == 0.0) { me._ht_image.style.visibility="hidden"; } }, 505);
					me._ht_image.style.opacity=0;
				}
			}
		}
		me._ht_image.onclick=function (e) {
			skin._popup_image.ggText=player.getBasePath()+""+me.hotspot.url;
			skin._popup_image.ggSubElement.style.width = '0px';
			skin._popup_image.ggSubElement.style.height = '0px';
			skin._popup_image.ggSubElement.src='';
			skin._popup_image.ggSubElement.src=skin._popup_image.ggText;
			player.setVariableValue('vis_image_popup', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_image']=true;
			me._tt_ht_image.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_image']=false;
			me._tt_ht_image.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.ontouchend=function (e) {
			me.elementMouseOver['ht_image']=false;
			me._tt_ht_image.logicBlock_visible();
		}
		me._ht_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_image=document.createElement('div');
		els=me._ht_image_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNDEuMjIgNDIuODMiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtmaWxsOnVybCgjcmFkaWFsLWdyYWRpZW50KTt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT4KICA8cmFkaWFsR3JhZGllbnQgY3k9IjIxLjU5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3g9IjIwLjY3IiBpZD0icmFkaWFsLWdyYWRpZW50IiByPSIxOC4yNyI+CiAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzFkNjNhOCIvPgogIC'+
			'A8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxYzQyODMiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogPC9kZWZzPgogPGcgaWQ9IkxheWVyXzMiIGRhdGEtbmFtZT0iTGF5ZXIgMyI+CiAgPGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN5PSIyMS41OSIgY3g9IjIwLjY3IiByPSIxOC4yNyIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzEiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+CiAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMjguMDcsMTEuOTFIMTIuNzVhMi4zNSwyLjM1LDAsMCwwLTIuMzQsMi4zNVYyOS41N2EyLjM0LDIuMzQsMCwwLDAsMi4zNCwyLjM0SDI4LjA3YTIuMzMsMi4zMywwLDAsMCwyLjM0'+
			'LTIuMzRWMTQuMjZBMi4zNCwyLjM0LDAsMCwwLDI4LjA3LDExLjkxWm0tNC44OSw0LjU2YTEuNjYsMS42NiwwLDEsMS0xLjY2LDEuNjZBMS42NiwxLjY2LDAsMCwxLDIzLjE4LDE2LjQ3Wm01LjE1LDEzLjg3SDEyLjE2YS41OC41OCwwLDAsMS0uNS0uODdsNS41OS05LjgzYS41Ny41NywwLDAsMSwxLDBMMjEsMjQuMTFhLjU4LjU4LDAsMCwwLC45NC4wN2wxLjU5LTEuOTRhLjU4LjU4LDAsMCwxLC45NC4wN2w0LjM4LDcuMTVBLjU4LjU4LDAsMCwxLDI4LjMzLDMwLjM0WiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_image_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_image_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_image.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['ht_image_image'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_image_image.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_image_image.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_image_image.style[domTransition]='width 0s, height 0s';
				if (me._ht_image_image.ggCurrentLogicStateSize == 0) {
					me._ht_image_image.style.width='50px';
					me._ht_image_image.style.height='50px';
					skin.updateSize(me._ht_image_image);
				}
				else {
					me._ht_image_image.style.width='43px';
					me._ht_image_image.style.height='43px';
					skin.updateSize(me._ht_image_image);
				}
			}
		}
		me._ht_image_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_image.style[domTransition]='width 0s, height 0s';
				if (me._ht_image_image.ggCurrentLogicStateVisible == 0) {
					me._ht_image_image.style.visibility="hidden";
					me._ht_image_image.ggVisible=false;
				}
				else {
					me._ht_image_image.style.visibility=(Number(me._ht_image_image.style.opacity)>0||!me._ht_image_image.style.opacity)?'inherit':'hidden';
					me._ht_image_image.ggVisible=true;
				}
			}
		}
		me._ht_image_image.onmouseover=function (e) {
			me.elementMouseOver['ht_image_image']=true;
			me._ht_image_image.logicBlock_size();
		}
		me._ht_image_image.onmouseout=function (e) {
			me.elementMouseOver['ht_image_image']=false;
			me._ht_image_image.logicBlock_size();
		}
		me._ht_image_image.ontouchend=function (e) {
			me.elementMouseOver['ht_image_image']=false;
			me._ht_image_image.logicBlock_size();
		}
		me._ht_image_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image.appendChild(me._ht_image_image);
		el=me._tt_ht_image=document.createElement('div');
		els=me._tt_ht_image__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text chinese";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 27px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #f8a81b;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(16,16,68,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 4px 7px 4px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_image.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_image.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_image.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_image.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_image.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_image.style.top='-47px';
					me._tt_ht_image.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_image.ggDx=0;
					me._tt_ht_image.style.top='24px';
					me._tt_ht_image.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_image'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_image.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_image.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_image.style.visibility=(Number(me._tt_ht_image.style.opacity)>0||!me._tt_ht_image.style.opacity)?'inherit':'hidden';
					me._tt_ht_image.ggVisible=true;
				}
				else {
					me._tt_ht_image.style.visibility="hidden";
					me._tt_ht_image.ggVisible=false;
				}
			}
		}
		me._tt_ht_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_image.appendChild(me._tt_ht_image);
		el=me._ht_image_customimage=document.createElement('div');
		els=me._ht_image_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_image_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_image_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_customimage.style[domTransition]='';
				if (me._ht_image_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_image_customimage.style.visibility="hidden";
					me._ht_image_customimage__img.src = '';
					me._ht_image_customimage.ggVisible=false;
				}
				else {
					me._ht_image_customimage.style.visibility=(Number(me._ht_image_customimage.style.opacity)>0||!me._ht_image_customimage.style.opacity)?'inherit':'hidden';
					me._ht_image_customimage.ggSubElement.src=me._ht_image_customimage.ggText;
					me._ht_image_customimage.ggVisible=true;
				}
			}
		}
		me._ht_image_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_image_customimage.clientWidth;
			var parentHeight = me._ht_image_customimage.clientHeight;
			var img = me._ht_image_customimage__img;
			var aspectRatioDiv = me._ht_image_customimage.clientWidth / me._ht_image_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_image.appendChild(me._ht_image_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_image;
	};
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info.style[domTransition]='opacity 500ms ease 0ms';
				if (me._ht_info.ggCurrentLogicStateVisible == 0) {
					me._ht_info.style.visibility="hidden";
					me._ht_info.ggVisible=false;
				}
				else {
					me._ht_info.style.visibility=(Number(me._ht_info.style.opacity)>0||!me._ht_info.style.opacity)?'inherit':'hidden';
					me._ht_info.ggVisible=true;
				}
			}
		}
		me._ht_info.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_timer') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_info.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_info.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_info.style[domTransition]='opacity 500ms ease 0ms';
				if (me._ht_info.ggCurrentLogicStateAlpha == 0) {
					me._ht_info.style.visibility=me._ht_info.ggVisible?'inherit':'hidden';
					me._ht_info.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_info.style.opacity == 0.0) { me._ht_info.style.visibility="hidden"; } }, 505);
					me._ht_info.style.opacity=0;
				}
			}
		}
		me._ht_info.onclick=function (e) {
			skin._info_title.ggText=me.hotspot.title;
			skin._info_title.ggTextDiv.innerHTML=skin._info_title.ggText;
			if (skin._info_title.ggUpdateText) {
				skin._info_title.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_title.ggUpdatePosition) {
				skin._info_title.ggUpdatePosition();
			}
			skin._info_title.ggTextDiv.scrollTop = 0;
			skin._info_text_body.ggText=me.hotspot.description;
			skin._info_text_body.ggTextDiv.innerHTML=skin._info_text_body.ggText;
			if (skin._info_text_body.ggUpdateText) {
				skin._info_text_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_text_body.ggUpdatePosition) {
				skin._info_text_body.ggUpdatePosition();
			}
			skin._info_text_body.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_info_popup', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info']=true;
			me._tt_information.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_info']=false;
			me._tt_information.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ontouchend=function (e) {
			me.elementMouseOver['ht_info']=false;
			me._tt_information.logicBlock_visible();
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image=document.createElement('div');
		els=me._ht_info_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMyIgZGF0YS1uYW1lPSJMYXllciAzIiB2aWV3Qm94PSIwIDAgNDEuMjIgNDIuODMiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtmaWxsOnVybCgjcmFkaWFsLWdyYWRpZW50KTt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT4KICA8cmFkaWFsR3JhZGllbnQgY3k9IjIxLjU5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3g9IjIwLjY3IiBpZD0icmFkaWFsLWdyYWRpZW50IiByPSIxOC4yNyI+CiAgIDxzdG9wIG9mZn'+
			'NldD0iMCIgc3RvcC1jb2xvcj0iIzFkNjNhOCIvPgogICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxYzQyODMiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogPC9kZWZzPgogPGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN5PSIyMS41OSIgY3g9IjIwLjY3IiByPSIxOC4yNyIvPgogPHJlY3QgY2xhc3M9ImNscy0yIiByeD0iMS4zNiIgeT0iMTYuODkiIHdpZHRoPSI1LjY3IiBoZWlnaHQ9IjE1LjU4IiB4PSIxNy40MSIvPgogPGNpcmNsZSBjbGFzcz0iY2xzLTIiIGN5PSIxMi4yNCIgY3g9IjIwLjI1IiByPSIyLjg0Ii8+Cjwvc3ZnPgo=';
		me._ht_info_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_info_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 42px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['ht_info_image'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_info_image.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_info_image.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_info_image.style[domTransition]='width 0s, height 0s';
				if (me._ht_info_image.ggCurrentLogicStateSize == 0) {
					me._ht_info_image.style.width='50px';
					me._ht_info_image.style.height='50px';
					skin.updateSize(me._ht_info_image);
				}
				else {
					me._ht_info_image.style.width='42px';
					me._ht_info_image.style.height='42px';
					skin.updateSize(me._ht_info_image);
				}
			}
		}
		me._ht_info_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_image.style[domTransition]='width 0s, height 0s';
				if (me._ht_info_image.ggCurrentLogicStateVisible == 0) {
					me._ht_info_image.style.visibility="hidden";
					me._ht_info_image.ggVisible=false;
				}
				else {
					me._ht_info_image.style.visibility=(Number(me._ht_info_image.style.opacity)>0||!me._ht_info_image.style.opacity)?'inherit':'hidden';
					me._ht_info_image.ggVisible=true;
				}
			}
		}
		me._ht_info_image.onmouseover=function (e) {
			me.elementMouseOver['ht_info_image']=true;
			me._ht_info_image.logicBlock_size();
		}
		me._ht_info_image.onmouseout=function (e) {
			me.elementMouseOver['ht_info_image']=false;
			me._ht_info_image.logicBlock_size();
		}
		me._ht_info_image.ontouchend=function (e) {
			me.elementMouseOver['ht_info_image']=false;
			me._ht_info_image.logicBlock_size();
		}
		me._ht_info_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_info.appendChild(me._ht_info_image);
		el=me._tt_information=document.createElement('div');
		els=me._tt_information__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text chinese";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #f8a81b;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(16,16,68,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 4px 7px 4px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information.style[domTransition]='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_information.style.top='-47px';
					me._tt_information.ggUpdatePosition(true);
				}
				else {
					me._tt_information.ggDx=0;
					me._tt_information.style.top='24px';
					me._tt_information.ggUpdatePosition(true);
				}
			}
		}
		me._tt_information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_info'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information.style[domTransition]='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStateVisible == 0) {
					me._tt_information.style.visibility=(Number(me._tt_information.style.opacity)>0||!me._tt_information.style.opacity)?'inherit':'hidden';
					me._tt_information.ggVisible=true;
				}
				else {
					me._tt_information.style.visibility="hidden";
					me._tt_information.ggVisible=false;
				}
			}
		}
		me._tt_information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_info.appendChild(me._tt_information);
		el=me._ht_info_customimage=document.createElement('div');
		els=me._ht_info_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_info_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_info_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_customimage.style[domTransition]='';
				if (me._ht_info_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_info_customimage.style.visibility="hidden";
					me._ht_info_customimage__img.src = '';
					me._ht_info_customimage.ggVisible=false;
				}
				else {
					me._ht_info_customimage.style.visibility=(Number(me._ht_info_customimage.style.opacity)>0||!me._ht_info_customimage.style.opacity)?'inherit':'hidden';
					me._ht_info_customimage.ggSubElement.src=me._ht_info_customimage.ggText;
					me._ht_info_customimage.ggVisible=true;
				}
			}
		}
		me._ht_info_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_info_customimage.clientWidth;
			var parentHeight = me._ht_info_customimage.clientHeight;
			var img = me._ht_info_customimage__img;
			var aspectRatioDiv = me._ht_info_customimage.clientWidth / me._ht_info_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_info.appendChild(me._ht_info_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_info;
	};
	function SkinHotspotClass_ht_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_url=document.createElement('div');
		el.ggId="ht_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url.style[domTransition]='opacity 500ms ease 0ms';
				if (me._ht_url.ggCurrentLogicStateVisible == 0) {
					me._ht_url.style.visibility="hidden";
					me._ht_url.ggVisible=false;
				}
				else {
					me._ht_url.style.visibility=(Number(me._ht_url.style.opacity)>0||!me._ht_url.style.opacity)?'inherit':'hidden';
					me._ht_url.ggVisible=true;
				}
			}
		}
		me._ht_url.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_timer') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_url.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_url.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_url.style[domTransition]='opacity 500ms ease 0ms';
				if (me._ht_url.ggCurrentLogicStateAlpha == 0) {
					me._ht_url.style.visibility=me._ht_url.ggVisible?'inherit':'hidden';
					me._ht_url.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_url.style.opacity == 0.0) { me._ht_url.style.visibility="hidden"; } }, 505);
					me._ht_url.style.opacity=0;
				}
			}
		}
		me._ht_url.onclick=function (e) {
			if (
				(
					((player.getVariableValue('opt_url') == true)) && 
					((player.getHasTouch() == false))
				)
			) {
				skin._web_page.ggText="<iframe src=\""+me.hotspot.url+"\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>";
				skin._web_page.ggTextDiv.innerHTML=skin._web_page.ggText;
				if (skin._web_page.ggUpdateText) {
					skin._web_page.ggUpdateText=function() {
						var hs="<iframe src=\""+me.hotspot.url+"\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				}
				if (skin._web_page.ggUpdatePosition) {
					skin._web_page.ggUpdatePosition();
				}
				skin._web_page.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('opt_url') == true)) && 
					((player.getHasTouch() == false))
				)
			) {
				player.setVariableValue('vis_website', true);
			}
			if (
				(
					((player.getVariableValue('opt_url') == false)) || 
					((player.getHasTouch() == true))
				)
			) {
				player.openUrl(me.hotspot.url,me.hotspot.target);
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_url']=true;
			me._tt_ht_url.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_url']=false;
			me._tt_ht_url.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.ontouchend=function (e) {
			me.elementMouseOver['ht_url']=false;
			me._tt_ht_url.logicBlock_visible();
		}
		me._ht_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_image=document.createElement('div');
		els=me._ht_url_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNDEuMjIgNDIuODMiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtmaWxsOnVybCgjcmFkaWFsLWdyYWRpZW50KTt9LmNscy0ye2ZpbGw6bm9uZTtzdHJva2U6I2ZmZjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9PC9zdHlsZT4KICA8cmFkaWFsR3JhZGllbnQgY3k9IjIxLjU5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3g9IjIwLjY3IiBpZD0icmFkaWFsLWdyYWRpZW50IiByPS'+
			'IxOC4yNyI+CiAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzFkNjNhOCIvPgogICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxYzQyODMiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogPC9kZWZzPgogPGcgaWQ9IkxheWVyXzMiIGRhdGEtbmFtZT0iTGF5ZXIgMyI+CiAgPGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN5PSIyMS41OSIgY3g9IjIwLjY3IiByPSIxOC4yNyIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzEiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+CiAgPGNpcmNsZSBjbGFzcz0iY2xzLTIiIGN5PSIyMS40MiIgY3g9IjIwLjY3IiByPSI5LjUiLz4KICA8bGluZSBjbGFzcz0iY2xz'+
			'LTIiIHgyPSIyMC41MyIgeTE9IjEyLjAyIiB5Mj0iMzAuODIiIHgxPSIyMC41MyIvPgogIDxsaW5lIGNsYXNzPSJjbHMtMiIgeDI9IjMwLjA3IiB5MT0iMjEuNTYiIHkyPSIyMS41NiIgeDE9IjExLjI3Ii8+CiAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMjAuNTMsMTJhMTIuMjksMTIuMjksMCwwLDEsNC45MSw5LjU0LDExLjQ1LDExLjQ1LDAsMCwxLTQuOTEsOS4yNiIvPgogIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTIwLjQ2LDEyYTEyLjI5LDEyLjI5LDAsMCwwLTQuOTEsOS41NCwxMS40NSwxMS40NSwwLDAsMCw0LjkxLDkuMjYiLz4KICA8cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xMy43Ni'+
			'wyNy45MnMyLTIuMSw2Ljc3LTIuMSw3LDIuMSw3LDIuMSIvPgogIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTEzLjc2LDE1czIsMi4xLDYuNzcsMi4xLDctMi4xLDctMi4xIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_url_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_url_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_image.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['ht_url_image'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_url_image.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_url_image.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_url_image.style[domTransition]='width 1000ms ease 0ms, height 1000ms ease 0ms';
				if (me._ht_url_image.ggCurrentLogicStateSize == 0) {
					me._ht_url_image.style.width='50px';
					me._ht_url_image.style.height='50px';
					setTimeout(function() {skin.updateSize(me._ht_url_image);}, 1000);
				}
				else {
					me._ht_url_image.style.width='43px';
					me._ht_url_image.style.height='43px';
					setTimeout(function() {skin.updateSize(me._ht_url_image);}, 1000);
				}
			}
		}
		me._ht_url_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_image.style[domTransition]='width 1000ms ease 0ms, height 1000ms ease 0ms';
				if (me._ht_url_image.ggCurrentLogicStateVisible == 0) {
					me._ht_url_image.style.visibility="hidden";
					me._ht_url_image.ggVisible=false;
				}
				else {
					me._ht_url_image.style.visibility=(Number(me._ht_url_image.style.opacity)>0||!me._ht_url_image.style.opacity)?'inherit':'hidden';
					me._ht_url_image.ggVisible=true;
				}
			}
		}
		me._ht_url_image.onmouseover=function (e) {
			me.elementMouseOver['ht_url_image']=true;
			me._ht_url_image.logicBlock_size();
		}
		me._ht_url_image.onmouseout=function (e) {
			me.elementMouseOver['ht_url_image']=false;
			me._ht_url_image.logicBlock_size();
		}
		me._ht_url_image.ontouchend=function (e) {
			me.elementMouseOver['ht_url_image']=false;
			me._ht_url_image.logicBlock_size();
		}
		me._ht_url_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_url.appendChild(me._ht_url_image);
		el=me._tt_ht_url=document.createElement('div');
		els=me._tt_ht_url__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_url";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text chinese";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #f8a81b;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(16,16,68,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 4px 7px 4px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_url.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_url.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_url.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_url.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_url.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_url.style.top='-47px';
					me._tt_ht_url.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_url.ggDx=0;
					me._tt_ht_url.style.top='24px';
					me._tt_ht_url.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_url'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_url.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_url.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_url.style.visibility=(Number(me._tt_ht_url.style.opacity)>0||!me._tt_ht_url.style.opacity)?'inherit':'hidden';
					me._tt_ht_url.ggVisible=true;
				}
				else {
					me._tt_ht_url.style.visibility="hidden";
					me._tt_ht_url.ggVisible=false;
				}
			}
		}
		me._tt_ht_url.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_url.appendChild(me._tt_ht_url);
		el=me._ht_url_customimage=document.createElement('div');
		els=me._ht_url_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_url_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_url_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_customimage.style[domTransition]='';
				if (me._ht_url_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_url_customimage.style.visibility="hidden";
					me._ht_url_customimage__img.src = '';
					me._ht_url_customimage.ggVisible=false;
				}
				else {
					me._ht_url_customimage.style.visibility=(Number(me._ht_url_customimage.style.opacity)>0||!me._ht_url_customimage.style.opacity)?'inherit':'hidden';
					me._ht_url_customimage.ggSubElement.src=me._ht_url_customimage.ggText;
					me._ht_url_customimage.ggVisible=true;
				}
			}
		}
		me._ht_url_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_url_customimage.clientWidth;
			var parentHeight = me._ht_url_customimage.clientHeight;
			var img = me._ht_url_customimage__img;
			var aspectRatioDiv = me._ht_url_customimage.clientWidth / me._ht_url_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_url.appendChild(me._ht_url_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_url;
	};
	function SkinHotspotClass_hotspot_1(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_1=document.createElement('div');
		el.ggId="Hotspot 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 374px;';
		hs+='position : absolute;';
		hs+='top : 307px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot_1.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['hotspot_1']=true;
			me._text_5_1.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['hotspot_1']=false;
			me._text_5_1.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1.ontouchend=function (e) {
			me.elementMouseOver['hotspot_1']=false;
			me._text_5_1.logicBlock_visible();
		}
		me._hotspot_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot_1_customimage=document.createElement('div');
		els=me._hotspot_1_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._hotspot_1_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Hotspot 1_CustomImage";
		el.ggDx=0;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_1_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_1_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspot_1_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspot_1_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspot_1_customimage.style[domTransition]='opacity 500ms ease 0ms';
				if (me._hotspot_1_customimage.ggCurrentLogicStateVisible == 0) {
					me._hotspot_1_customimage.style.visibility="hidden";
					me._hotspot_1_customimage__img.src = '';
					me._hotspot_1_customimage.ggVisible=false;
				}
				else {
					me._hotspot_1_customimage.style.visibility=(Number(me._hotspot_1_customimage.style.opacity)>0||!me._hotspot_1_customimage.style.opacity)?'inherit':'hidden';
					me._hotspot_1_customimage.ggSubElement.src=me._hotspot_1_customimage.ggText;
					me._hotspot_1_customimage.ggVisible=true;
				}
			}
		}
		me._hotspot_1_customimage.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hotspot_1_customimage'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hotspot_1_customimage.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hotspot_1_customimage.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hotspot_1_customimage.style[domTransition]='opacity 500ms ease 0ms';
				if (me._hotspot_1_customimage.ggCurrentLogicStateAlpha == 0) {
					me._hotspot_1_customimage.style.visibility=me._hotspot_1_customimage.ggVisible?'inherit':'hidden';
					me._hotspot_1_customimage.style.opacity=1;
				}
				else {
					me._hotspot_1_customimage.style.visibility=me._hotspot_1_customimage.ggVisible?'inherit':'hidden';
					me._hotspot_1_customimage.style.opacity=1;
				}
			}
		}
		me._hotspot_1_customimage.onclick=function (e) {
			player.openNext(me.hotspot.url,"");
		}
		me._hotspot_1_customimage.onmouseover=function (e) {
			me.elementMouseOver['hotspot_1_customimage']=true;
			me._hotspot_1_customimage.logicBlock_alpha();
		}
		me._hotspot_1_customimage.onmouseout=function (e) {
			me.elementMouseOver['hotspot_1_customimage']=false;
			me._hotspot_1_customimage.logicBlock_alpha();
		}
		me._hotspot_1_customimage.ontouchend=function (e) {
			me.elementMouseOver['hotspot_1_customimage']=false;
			me._hotspot_1_customimage.logicBlock_alpha();
		}
		me._hotspot_1_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._hotspot_1_customimage.clientWidth;
			var parentHeight = me._hotspot_1_customimage.clientHeight;
			var img = me._hotspot_1_customimage__img;
			var aspectRatioDiv = me._hotspot_1_customimage.clientWidth / me._hotspot_1_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._hotspot_1.appendChild(me._hotspot_1_customimage);
		el=me._text_5_1=document.createElement('div');
		els=me._text_5_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text chinese";
		el.ggType='text';
		hs ='';
		hs+='height : 31px;';
		hs+='left : -62px;';
		hs+='position : absolute;';
		hs+='top : -69px;';
		hs+='visibility : hidden;';
		hs+='width : 129px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_5_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_5_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['hotspot_1'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_5_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_5_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_5_1.style[domTransition]='';
				if (me._text_5_1.ggCurrentLogicStateVisible == 0) {
					me._text_5_1.style.visibility=(Number(me._text_5_1.style.opacity)>0||!me._text_5_1.style.opacity)?'inherit':'hidden';
					me._text_5_1.ggVisible=true;
				}
				else {
					me._text_5_1.style.visibility="hidden";
					me._text_5_1.ggVisible=false;
				}
			}
		}
		me._text_5_1.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((127-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._hotspot_1.appendChild(me._text_5_1);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._hotspot_1;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -776px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -798px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node.style[domTransition]='opacity 500ms ease 0ms';
				if (me._ht_node.ggCurrentLogicStateVisible == 0) {
					me._ht_node.style.visibility="hidden";
					me._ht_node.ggVisible=false;
				}
				else {
					me._ht_node.style.visibility=(Number(me._ht_node.style.opacity)>0||!me._ht_node.style.opacity)?'inherit':'hidden';
					me._ht_node.ggVisible=true;
				}
			}
		}
		me._ht_node.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_timer') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_node.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_node.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_node.style[domTransition]='opacity 500ms ease 0ms';
				if (me._ht_node.ggCurrentLogicStateAlpha == 0) {
					me._ht_node.style.visibility=me._ht_node.ggVisible?'inherit':'hidden';
					me._ht_node.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_node.style.opacity == 0.0) { me._ht_node.style.visibility="hidden"; } }, 505);
					me._ht_node.style.opacity=0;
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._tt_ht_node.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._tt_ht_node.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ontouchend=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._tt_ht_node.logicBlock_visible();
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_ht_node=document.createElement('div');
		els=me._tt_ht_node__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_node";
		el.ggDx=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -51px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_node.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_node.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_node.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_node.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_node.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_node.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_node.style.top='-47px';
					me._tt_ht_node.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_node.ggDx=5;
					me._tt_ht_node.style.top='-51px';
					me._tt_ht_node.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((me.hotspot.title != "")) && 
				((player.getIsTour() == false)) && 
				((player.getVariableValue('opt_hotspot_preview') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((me.hotspot.title != "")) && 
				((player.getIsTour() == true)) && 
				((player.getVariableValue('opt_hotspot_preview') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((me.hotspot.title != "")) && 
				((player.getIsTour() == false)) && 
				((player.getVariableValue('opt_hotspot_preview') == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_node.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_node.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else if (me._tt_ht_node.ggCurrentLogicStateVisible == 1) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else if (me._tt_ht_node.ggCurrentLogicStateVisible == 2) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else {
					me._tt_ht_node.style.visibility="hidden";
					me._tt_ht_node.ggVisible=false;
				}
			}
		}
		me._tt_ht_node.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_node.appendChild(me._tt_ht_node);
		el=me._ht_node_image=document.createElement('div');
		els=me._ht_node_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzYuODkgNDIuODMiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtmaWxsOnVybCgjcmFkaWFsLWdyYWRpZW50KTt9LmNscy0ye2ZpbGw6dXJsKCNyYWRpYWwtZ3JhZGllbnQtMik7fTwvc3R5bGU+CiAgPHJhZGlhbEdyYWRpZW50IGN5PSIyMS41OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGN4PSIxOC41NiIgaWQ9InJhZGlhbC1ncmFkaWVudCIgcj0iMTguMjciPgogICA8c3RvcCBvZmZzZXQ9IjAuNzEiIHN0b3'+
			'AtY29sb3I9IiNmZmYiLz4KICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZDVkN2Q4Ii8+CiAgPC9yYWRpYWxHcmFkaWVudD4KICA8cmFkaWFsR3JhZGllbnQgY3k9IjIxLjM4IiBmeT0iMjkuNDE1MDI1Mzc1ODAzNTM4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3g9IjE4LjI2IiBpZD0icmFkaWFsLWdyYWRpZW50LTIiIHI9IjEyLjI1Ij4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZTljYjU0Ii8+CiAgIDxzdG9wIG9mZnNldD0iMC43NyIgc3RvcC1jb2xvcj0iI2RlYjIwMCIvPgogICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNjNTk2MjMi'+
			'Lz4KICA8L3JhZGlhbEdyYWRpZW50PgogPC9kZWZzPgogPGcgaWQ9IkxheWVyXzMiIGRhdGEtbmFtZT0iTGF5ZXIgMyI+CiAgPGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN5PSIyMS41OSIgY3g9IjE4LjU2IiByPSIxOC4yNyIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzEiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+CiAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMjkuMzIsMjIuNTYsMTguNiw5LjU3YS40NC40NCwwLDAsMC0uNjksMGwtMTAuNzIsMTNhLjQ1LjQ1LDAsMCwwLC4zNS43M2g1LjExYS40Ni40NiwwLDAsMCwuMzUtLjE2TDE1LjU1LDIwVjMyLjQ1YS45LjksMCwwLDAsLjkuOTFoMy42MWEuOS45LD'+
			'AsMCwwLC45LS45MVYyMGwyLjU2LDMuMDlhLjQ0LjQ0LDAsMCwwLC4zNC4xNkgyOUEuNDUuNDUsMCwwLDAsMjkuMzIsMjIuNTZaIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_node_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1.5,sy:1.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_node_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_image.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_node_image'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node_image.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node_image.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node_image.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._ht_node_image.ggCurrentLogicStateScaling == 0) {
					me._ht_node_image.ggParameter.sx = 2;
					me._ht_node_image.ggParameter.sy = 2;
					me._ht_node_image.style[domTransform]=parameterToTransform(me._ht_node_image.ggParameter);
				}
				else {
					me._ht_node_image.ggParameter.sx = 1.5;
					me._ht_node_image.ggParameter.sy = 1.5;
					me._ht_node_image.style[domTransform]=parameterToTransform(me._ht_node_image.ggParameter);
				}
			}
		}
		me._ht_node_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_image.ggElementNodeId()) == true)) || 
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_image.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._ht_node_image.ggCurrentLogicStateVisible == 0) {
					me._ht_node_image.style.visibility="hidden";
					me._ht_node_image.ggVisible=false;
				}
				else {
					me._ht_node_image.style.visibility=(Number(me._ht_node_image.style.opacity)>0||!me._ht_node_image.style.opacity)?'inherit':'hidden';
					me._ht_node_image.ggVisible=true;
				}
			}
		}
		me._ht_node_image.onmouseover=function (e) {
			me.elementMouseOver['ht_node_image']=true;
			me._ht_node_image.logicBlock_scaling();
		}
		me._ht_node_image.onmouseout=function (e) {
			me.elementMouseOver['ht_node_image']=false;
			me._ht_node_image.logicBlock_scaling();
		}
		me._ht_node_image.ontouchend=function (e) {
			me.elementMouseOver['ht_node_image']=false;
			me._ht_node_image.logicBlock_scaling();
		}
		me._ht_node_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._ht_node_image);
		el=me._ht_node_visited=document.createElement('div');
		els=me._ht_node_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzYuODkgNDIuODMiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtmaWxsOnVybCgjcmFkaWFsLWdyYWRpZW50KTt9LmNscy0ye2ZpbGw6dXJsKCNyYWRpYWwtZ3JhZGllbnQtMik7fTwvc3R5bGU+CiAgPHJhZGlhbEdyYWRpZW50IGN5PSIyMS41OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGN4PSIxOC41NiIgaWQ9InJhZGlhbC1ncmFkaWVudCIgcj0iMTguMjciPgogICA8c3RvcCBvZmZzZXQ9IjAuNzEiIHN0b3'+
			'AtY29sb3I9IiNmZmYiLz4KICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZDVkN2Q4Ii8+CiAgPC9yYWRpYWxHcmFkaWVudD4KICA8cmFkaWFsR3JhZGllbnQgY3k9IjIxLjM4IiBmeT0iMjguOTc1NzUzMzkyODkyMzIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjeD0iMTguMjYiIGlkPSJyYWRpYWwtZ3JhZGllbnQtMiIgcj0iMTEuNTgiPgogICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNiNGI2YjgiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjk2IiBzdG9wLWNvbG9yPSIjOGE4YjhjIi8+CiAgPC9yYWRpYWxHcmFkaWVudD4KIDwvZGVmcz4KIDxnIGlkPSJMYXll'+
			'cl8zIiBkYXRhLW5hbWU9IkxheWVyIDMiPgogIDxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeT0iMjEuNTkiIGN4PSIxOC41NiIgcj0iMTguMjciLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8xIiBkYXRhLW5hbWU9IkxheWVyIDEiPgogIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTI5LjMyLDIyLjU2LDE4LjYsOS41N2EuNDQuNDQsMCwwLDAtLjY5LDBsLTEwLjcyLDEzYS40NS40NSwwLDAsMCwuMzUuNzNoNS4xMWEuNDYuNDYsMCwwLDAsLjM1LS4xNkwxNS41NSwyMFYzMi40NWEuOS45LDAsMCwwLC45LjkxaDMuNjFhLjkuOSwwLDAsMCwuOS0uOTFWMjBsMi41NiwzLjA5YS40NC40NCwwLDAsMCwuMzQuMT'+
			'ZIMjlBLjQ1LjQ1LDAsMCwwLDI5LjMyLDIyLjU2WiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_node_visited__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_visited";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1.5,sy:1.5 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_node_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_visited.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_node_visited'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node_visited.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node_visited.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node_visited.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._ht_node_visited.ggCurrentLogicStateScaling == 0) {
					me._ht_node_visited.ggParameter.sx = 2;
					me._ht_node_visited.ggParameter.sy = 2;
					me._ht_node_visited.style[domTransform]=parameterToTransform(me._ht_node_visited.ggParameter);
				}
				else {
					me._ht_node_visited.ggParameter.sx = 1.5;
					me._ht_node_visited.ggParameter.sy = 1.5;
					me._ht_node_visited.style[domTransform]=parameterToTransform(me._ht_node_visited.ggParameter);
				}
			}
		}
		me._ht_node_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_visited.ggElementNodeId()) == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_visited.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._ht_node_visited.ggCurrentLogicStateVisible == 0) {
					me._ht_node_visited.style.visibility=(Number(me._ht_node_visited.style.opacity)>0||!me._ht_node_visited.style.opacity)?'inherit':'hidden';
					me._ht_node_visited.ggVisible=true;
				}
				else {
					me._ht_node_visited.style.visibility="hidden";
					me._ht_node_visited.ggVisible=false;
				}
			}
		}
		me._ht_node_visited.onmouseover=function (e) {
			me.elementMouseOver['ht_node_visited']=true;
			me._ht_node_visited.logicBlock_scaling();
		}
		me._ht_node_visited.onmouseout=function (e) {
			me.elementMouseOver['ht_node_visited']=false;
			me._ht_node_visited.logicBlock_scaling();
		}
		me._ht_node_visited.ontouchend=function (e) {
			me.elementMouseOver['ht_node_visited']=false;
			me._ht_node_visited.logicBlock_scaling();
		}
		me._ht_node_visited.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._ht_node_visited);
		el=me._ht_node_customimage=document.createElement('div');
		els=me._ht_node_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_node_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage.style[domTransition]='';
				if (me._ht_node_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage.style.visibility="hidden";
					me._ht_node_customimage__img.src = '';
					me._ht_node_customimage.ggVisible=false;
				}
				else {
					me._ht_node_customimage.style.visibility=(Number(me._ht_node_customimage.style.opacity)>0||!me._ht_node_customimage.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
					me._ht_node_customimage.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_node_customimage.clientWidth;
			var parentHeight = me._ht_node_customimage.clientHeight;
			var img = me._ht_node_customimage__img;
			var aspectRatioDiv = me._ht_node_customimage.clientWidth / me._ht_node_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_node.appendChild(me._ht_node_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_video_youtube') {
			hotspot.skinid = 'ht_video_youtube';
			hsinst = new SkinHotspotClass_ht_video_youtube(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_video_youtube_changenode();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_configloaded();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_mouseover();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_mouseover();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_hastouch();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_userdata();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_file();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_url();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_vimeo();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_youtube();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_website();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_timer();;
		} else
		if (hotspot.skinid=='ht_node_1') {
			hotspot.skinid = 'ht_node_1';
			hsinst = new SkinHotspotClass_ht_node_1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_1_changenode();;
			me.callChildLogicBlocksHotspot_ht_node_1_mouseover();;
			me.callChildLogicBlocksHotspot_ht_node_1_activehotspotchanged();;
		} else
		if (hotspot.skinid=='ht_video_vimeo') {
			hotspot.skinid = 'ht_video_vimeo';
			hsinst = new SkinHotspotClass_ht_video_vimeo(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_video_vimeo_changenode();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_configloaded();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_mouseover();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_mouseover();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_hastouch();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_userdata();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_file();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_url();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_vimeo();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_youtube();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_website();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_timer();;
		} else
		if (hotspot.skinid=='ht_video_url') {
			hotspot.skinid = 'ht_video_url';
			hsinst = new SkinHotspotClass_ht_video_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_video_url_changenode();;
			me.callChildLogicBlocksHotspot_ht_video_url_configloaded();;
			me.callChildLogicBlocksHotspot_ht_video_url_mouseover();;
			me.callChildLogicBlocksHotspot_ht_video_url_mouseover();;
			me.callChildLogicBlocksHotspot_ht_video_url_hastouch();;
			me.callChildLogicBlocksHotspot_ht_video_url_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_userdata();;
			me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_file();;
			me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_url();;
			me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_vimeo();;
			me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_youtube();;
			me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_website();;
			me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_timer();;
		} else
		if (hotspot.skinid=='ht_video_file') {
			hotspot.skinid = 'ht_video_file';
			hsinst = new SkinHotspotClass_ht_video_file(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_video_file_changenode();;
			me.callChildLogicBlocksHotspot_ht_video_file_configloaded();;
			me.callChildLogicBlocksHotspot_ht_video_file_mouseover();;
			me.callChildLogicBlocksHotspot_ht_video_file_mouseover();;
			me.callChildLogicBlocksHotspot_ht_video_file_hastouch();;
			me.callChildLogicBlocksHotspot_ht_video_file_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_userdata();;
			me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_file();;
			me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_url();;
			me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_vimeo();;
			me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_youtube();;
			me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_website();;
			me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_timer();;
		} else
		if (hotspot.skinid=='ht_image') {
			hotspot.skinid = 'ht_image';
			hsinst = new SkinHotspotClass_ht_image(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_image_changenode();;
			me.callChildLogicBlocksHotspot_ht_image_configloaded();;
			me.callChildLogicBlocksHotspot_ht_image_mouseover();;
			me.callChildLogicBlocksHotspot_ht_image_mouseover();;
			me.callChildLogicBlocksHotspot_ht_image_hastouch();;
			me.callChildLogicBlocksHotspot_ht_image_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_userdata();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_file();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_url();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_vimeo();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_youtube();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_website();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_timer();;
		} else
		if (hotspot.skinid=='ht_info') {
			hotspot.skinid = 'ht_info';
			hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_changenode();;
			me.callChildLogicBlocksHotspot_ht_info_configloaded();;
			me.callChildLogicBlocksHotspot_ht_info_mouseover();;
			me.callChildLogicBlocksHotspot_ht_info_mouseover();;
			me.callChildLogicBlocksHotspot_ht_info_hastouch();;
			me.callChildLogicBlocksHotspot_ht_info_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_userdata();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_file();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_url();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_vimeo();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_youtube();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_website();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_timer();;
		} else
		if (hotspot.skinid=='ht_url') {
			hotspot.skinid = 'ht_url';
			hsinst = new SkinHotspotClass_ht_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_url_changenode();;
			me.callChildLogicBlocksHotspot_ht_url_configloaded();;
			me.callChildLogicBlocksHotspot_ht_url_mouseover();;
			me.callChildLogicBlocksHotspot_ht_url_mouseover();;
			me.callChildLogicBlocksHotspot_ht_url_hastouch();;
			me.callChildLogicBlocksHotspot_ht_url_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_userdata();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_file();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_url();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_vimeo();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_youtube();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_website();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_timer();;
		} else
		if (hotspot.skinid=='Hotspot 1') {
			hotspot.skinid = 'Hotspot 1';
			hsinst = new SkinHotspotClass_hotspot_1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_hotspot_1_changenode();;
			me.callChildLogicBlocksHotspot_hotspot_1_mouseover();;
			me.callChildLogicBlocksHotspot_hotspot_1_mouseover();;
			me.callChildLogicBlocksHotspot_hotspot_1_activehotspotchanged();;
		} else
		{
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_changenode();;
			me.callChildLogicBlocksHotspot_ht_node_configloaded();;
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
			me.callChildLogicBlocksHotspot_ht_node_changevisitednodes();;
			me.callChildLogicBlocksHotspot_ht_node_hastouch();;
			me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_userdata();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_file();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_url();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_vimeo();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_youtube();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_website();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_timer();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_hotspot_preview();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				hotspotTemplates['ht_video_youtube'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node_1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_1'].length; i++) {
				hotspotTemplates['ht_node_1'][i] = null;
			}
		}
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				hotspotTemplates['ht_video_vimeo'][i] = null;
			}
		}
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				hotspotTemplates['ht_video_url'][i] = null;
			}
		}
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				hotspotTemplates['ht_video_file'][i] = null;
			}
		}
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				hotspotTemplates['ht_image'][i] = null;
			}
		}
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				hotspotTemplates['ht_info'][i] = null;
			}
		}
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				hotspotTemplates['ht_url'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot 1']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 1'].length; i++) {
				hotspotTemplates['Hotspot 1'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinCloner_thumbnail_cloner_mobile_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 96px; height: 62px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_nodeimage_mobile=document.createElement('div');
		els=me._thumbnail_nodeimage_mobile__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_mobile_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_nodeImage_mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.64,sy:0.6 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._thumbnail_nodeimage_mobile.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage_mobile.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__div.appendChild(me._thumbnail_nodeimage_mobile);
		el=me._thumbnail_active_mobile=document.createElement('div');
		el.ggId="thumbnail_active_mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 51px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active_mobile.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_active_mobile.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['thumbnail_active_mobile'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active_mobile.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active_mobile.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active_mobile.style[domTransition]='border-color 0s';
				if (me._thumbnail_active_mobile.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active_mobile.style.borderColor="rgba(192,192,192,1)";
				}
				else if (me._thumbnail_active_mobile.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active_mobile.style.borderColor="rgba(192,192,192,1)";
				}
				else {
					me._thumbnail_active_mobile.style.borderColor="rgba(0,0,0,1)";
				}
			}
		}
		me._thumbnail_active_mobile.onclick=function (e) {
			if (
				(
					((me._thumbnail_active_mobile.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
			player.setVariableValue('vis_thumbnail_menu_mobile', false);
		}
		me._thumbnail_active_mobile.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active_mobile']=true;
			me._checkmark_tick_mobile.logicBlock_alpha();
			me._thumbnail_title_mobile.logicBlock_alpha();
			me._thumbnail_active_mobile.logicBlock_bordercolor();
		}
		me._thumbnail_active_mobile.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active_mobile']=false;
			me._checkmark_tick_mobile.logicBlock_alpha();
			me._thumbnail_title_mobile.logicBlock_alpha();
			me._thumbnail_active_mobile.logicBlock_bordercolor();
		}
		me._thumbnail_active_mobile.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active_mobile']=false;
			me._checkmark_tick_mobile.logicBlock_alpha();
			me._thumbnail_title_mobile.logicBlock_alpha();
			me._thumbnail_active_mobile.logicBlock_bordercolor();
		}
		me._thumbnail_active_mobile.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._checkmark_tick_mobile=document.createElement('div');
		els=me._checkmark_tick_mobile__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IC0yNDAgMzMyIDEzMCAxMzA7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB2aWV3Qm94PS'+
			'ItMjQwIDMzMiAxMzAgMTMwIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojMDAwMDAwO30mI3hkOwoJLnN0MXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXog'+
			'TS0xMzIuOCwzODEuN2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy'+
			'0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIvPgogPC9nPgo8L3N2Zz4K';
		me._checkmark_tick_mobile__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick_mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 19px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : 2px;';
		hs+='visibility : hidden;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkmark_tick_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._checkmark_tick_mobile.ggElementNodeId()) == true)) || 
				((me._checkmark_tick_mobile.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick_mobile.style[domTransition]='opacity 500ms ease 0ms';
				if (me._checkmark_tick_mobile.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick_mobile.style.visibility=(Number(me._checkmark_tick_mobile.style.opacity)>0||!me._checkmark_tick_mobile.style.opacity)?'inherit':'hidden';
					me._checkmark_tick_mobile.ggVisible=true;
				}
				else {
					me._checkmark_tick_mobile.style.visibility="hidden";
					me._checkmark_tick_mobile.ggVisible=false;
				}
			}
		}
		me._checkmark_tick_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_active_mobile'] == true)) && 
				((me.ggUserdata.title != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._checkmark_tick_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._checkmark_tick_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._checkmark_tick_mobile.style[domTransition]='opacity 500ms ease 0ms';
				if (me._checkmark_tick_mobile.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._checkmark_tick_mobile.style.opacity == 0.0) { me._checkmark_tick_mobile.style.visibility="hidden"; } }, 505);
					me._checkmark_tick_mobile.style.opacity=0;
				}
				else {
					me._checkmark_tick_mobile.style.visibility=me._checkmark_tick_mobile.ggVisible?'inherit':'hidden';
					me._checkmark_tick_mobile.style.opacity=1;
				}
			}
		}
		me._checkmark_tick_mobile.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_active_mobile.appendChild(me._checkmark_tick_mobile);
		el=me._thumbnail_title_mobile=document.createElement('div');
		els=me._thumbnail_title_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title_mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 51px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 85px;';
		hs+='height: 51px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._thumbnail_title_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_active_mobile'] == true)) && 
				((me.ggUserdata.title != "")) && 
				((player.getVariableValue('opt_thumbnail_tooltip') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_title_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_title_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_title_mobile.style[domTransition]='opacity 500ms ease 0ms';
				if (me._thumbnail_title_mobile.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_title_mobile.style.visibility=me._thumbnail_title_mobile.ggVisible?'inherit':'hidden';
					me._thumbnail_title_mobile.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_title_mobile.style.opacity == 0.0) { me._thumbnail_title_mobile.style.visibility="hidden"; } }, 505);
					me._thumbnail_title_mobile.style.opacity=0;
				}
			}
		}
		me._thumbnail_title_mobile.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._thumbnail_active_mobile.appendChild(me._thumbnail_title_mobile);
		me.__div.appendChild(me._thumbnail_active_mobile);
	};
	function SkinCloner_thumbnail_cloner_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 119px; height: 75px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_nodeimage=document.createElement('div');
		els=me._thumbnail_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_nodeImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.64,sy:0.6 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 117px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 173px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._thumbnail_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_nodeimage);
		el=me._thumbnail_active=document.createElement('div');
		el.ggId="thumbnail_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(0,0,0,0.372549);';
		hs+='border : 3px solid rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 68px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 105px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['thumbnail_active'] == true)) || 
				((me._thumbnail_active.ggIsActive() == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._thumbnail_active.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._thumbnail_active.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._thumbnail_active.style[domTransition]='background-color 500ms ease 0ms';
				if (me._thumbnail_active.ggCurrentLogicStateBackgroundColor == 0) {
					me._thumbnail_active.style.backgroundColor="rgba(24,83,155,0.784314)";
				}
				else {
					me._thumbnail_active.style.backgroundColor="rgba(0,0,0,0.372549)";
				}
			}
		}
		me._thumbnail_active.onclick=function (e) {
			if (
				(
					((me._thumbnail_active.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._thumbnail_active.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active']=true;
			me._checkmark_tick.logicBlock_alpha();
			me._thumbnail_title.logicBlock_alpha();
			me._thumbnail_title.logicBlock_scaling();
			me._thumbnail_title.logicBlock_position();
			me._thumbnail_active.logicBlock_backgroundcolor();
		}
		me._thumbnail_active.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._checkmark_tick.logicBlock_alpha();
			me._thumbnail_title.logicBlock_alpha();
			me._thumbnail_title.logicBlock_scaling();
			me._thumbnail_title.logicBlock_position();
			me._thumbnail_active.logicBlock_backgroundcolor();
		}
		me._thumbnail_active.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._checkmark_tick.logicBlock_alpha();
			me._thumbnail_title.logicBlock_alpha();
			me._thumbnail_title.logicBlock_scaling();
			me._thumbnail_title.logicBlock_position();
			me._thumbnail_active.logicBlock_backgroundcolor();
		}
		me._thumbnail_active.ggUpdatePosition=function (useTransition) {
		}
		el=me._checkmark_tick=document.createElement('div');
		els=me._checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IC0yNDAgMzMyIDEzMCAxMzA7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMz'+
			'IgMTMwIDEzMCIgeD0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojMDAwMDAwO30mI3hkOwoJLnN0MXtmaWxsOiNmZmZmZmY7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXog'+
			'TS0xMzIuOCwzODEuN2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy'+
			'0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIvPgogPC9nPgo8L3N2Zz4K';
		me._checkmark_tick__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : -37px;';
		hs+='top : 2px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._checkmark_tick.ggElementNodeId()) == true)) || 
				((me._checkmark_tick.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick.style[domTransition]='opacity 500ms ease 0ms';
				if (me._checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick.style.visibility="hidden";
					me._checkmark_tick.ggVisible=false;
				}
				else {
					me._checkmark_tick.style.visibility="hidden";
					me._checkmark_tick.ggVisible=false;
				}
			}
		}
		me._checkmark_tick.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_active'] == true)) && 
				((me.ggUserdata.title != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._checkmark_tick.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._checkmark_tick.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._checkmark_tick.style[domTransition]='opacity 500ms ease 0ms';
				if (me._checkmark_tick.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._checkmark_tick.style.opacity == 0.0) { me._checkmark_tick.style.visibility="hidden"; } }, 505);
					me._checkmark_tick.style.opacity=0;
				}
				else {
					me._checkmark_tick.style.visibility=me._checkmark_tick.ggVisible?'inherit':'hidden';
					me._checkmark_tick.style.opacity=1;
				}
			}
		}
		me._checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_active.appendChild(me._checkmark_tick);
		el=me._thumbnail_title=document.createElement('div');
		els=me._thumbnail_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text chinese";
		el.ggType='text';
		hs ='';
		hs+='bottom : 4px;';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 96px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 96px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 11px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._thumbnail_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['thumbnail_active'] == true)) || 
				((me._thumbnail_title.ggIsActive() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._thumbnail_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._thumbnail_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._thumbnail_title.style[domTransition]='left 500ms ease 0ms, bottom 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, opacity 0s';
				if (me._thumbnail_title.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._thumbnail_title.style.bottom='22px';
					me._thumbnail_title.ggUpdatePosition(true);
				}
				else {
					me._thumbnail_title.ggDx=0;
					me._thumbnail_title.style.bottom='4px';
					me._thumbnail_title.ggUpdatePosition(true);
				}
			}
		}
		me._thumbnail_title.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['thumbnail_active'] == true)) || 
				((me._thumbnail_title.ggIsActive() == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._thumbnail_title.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._thumbnail_title.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._thumbnail_title.style[domTransition]='left 500ms ease 0ms, bottom 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, opacity 0s';
				if (me._thumbnail_title.ggCurrentLogicStateScaling == 0) {
					me._thumbnail_title.ggParameter.sx = 1.15;
					me._thumbnail_title.ggParameter.sy = 1.15;
					me._thumbnail_title.style[domTransform]=parameterToTransform(me._thumbnail_title.ggParameter);
				}
				else {
					me._thumbnail_title.ggParameter.sx = 1;
					me._thumbnail_title.ggParameter.sy = 1;
					me._thumbnail_title.style[domTransform]=parameterToTransform(me._thumbnail_title.ggParameter);
				}
			}
		}
		me._thumbnail_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_active'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_title.style[domTransition]='left 500ms ease 0ms, bottom 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, opacity 0s';
				if (me._thumbnail_title.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_title.style.visibility=me._thumbnail_title.ggVisible?'inherit':'hidden';
					me._thumbnail_title.style.opacity=1;
				}
				else {
					me._thumbnail_title.style.visibility=me._thumbnail_title.ggVisible?'inherit':'hidden';
					me._thumbnail_title.style.opacity=1;
				}
			}
		}
		me._thumbnail_title.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._thumbnail_active.appendChild(me._thumbnail_title);
		me.__div.appendChild(me._thumbnail_active);
	};
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; } .ggskin.lumination { font-family: "Poppins", sans-serif; font-size: 14px; } .ggskin.chinese { font-family: "Noto Sans SC", sans-serif; font-size: 14px; } .ggskin.korean { font-family: "Noto Sans KR", sans-serif; font-size: 14px; }'));
	document.head.appendChild(style);
	me._screentint.logicBlock_alpha();
	me._tt_thumbnail_open.logicBlock_text();
	me._thumbnail_menu_mobile.logicBlock_visible();
	me._thumbnail_menu_mobile.logicBlock_alpha();
	me._fullscreen.logicBlock_alpha();
	me._fullscreen_off.logicBlock_alpha();
	me._tt_fullscreen.logicBlock_text();
	me._menu_button.logicBlock_position();
	me._nav_menu.logicBlock_position();
	me._nav_menu.logicBlock_alpha();
	me._thumbnail_menu.logicBlock_position();
	me._svg_8.logicBlock_visible();
	me._minimise.logicBlock_visible();
	me._svg_6.logicBlock_visible();
	me._navigate.logicBlock_visible();
	me._controller.logicBlock_position();
	me._controller.logicBlock_alpha();
	me._controller_slider.logicBlock_position();
	me._controller_slider.logicBlock_alpha();
	me._projection_buttons.logicBlock_position();
	me._projection_buttons.logicBlock_visible();
	me._info.logicBlock_position();
	me._info.logicBlock_visible();
	me._autorotate_buttons.logicBlock_position();
	me._autorotate_buttons.logicBlock_visible();
	me._autorotate_start.logicBlock_alpha();
	me._autorotate_stop.logicBlock_alpha();
	me._tt_rotate.logicBlock_text();
	me._enter_vr.logicBlock_position();
	me._gyro.logicBlock_position();
	me._gyro.logicBlock_visible();
	me._gyro_on.logicBlock_alpha();
	me._gyro_off.logicBlock_alpha();
	me._tt_gyro.logicBlock_text();
	me._fullscreen_buttons.logicBlock_position();
	me._fullscreen_buttons.logicBlock_visible();
	me._thumbnail.logicBlock_position();
	me._thumbnail.logicBlock_visible();
	me._zoomout.logicBlock_visible();
	me._zoomin.logicBlock_visible();
	me._thumbnail_menu_mobile.logicBlock_position();
	me._web_page.logicBlock_visible();
	me._loading.logicBlock_visible();
	me._userdata.logicBlock_visible();
	me._information.logicBlock_visible();
	me._information.logicBlock_alpha();
	me._video_popup_file.logicBlock_visible();
	me._popup_video_file.logicBlock_visible();
	me._video_popup_controls_file.logicBlock_visible();
	me._video_popup_url.logicBlock_visible();
	me._popup_video_url.logicBlock_visible();
	me._video_popup_youtube.logicBlock_visible();
	me._popup_video_youtube.logicBlock_visible();
	me._video_popup_controls_url.logicBlock_visible();
	me._image_popup.logicBlock_visible();
	me._popup_image.logicBlock_visible();
	me.__360image_gyro.logicBlock_visible();
	me.__360image.logicBlock_position();
	me.__360image.logicBlock_scaling();
	me._phone2.logicBlock_scaling();
	me._phone3.logicBlock_scaling();
	me._video_popup_vimeo.logicBlock_visible();
	me._popup_video_vimeo.logicBlock_visible();
	me._close.logicBlock_visible();
	me._musicvideo.logicBlock_visible();
	me._welcome_video.logicBlock_visible();
	me._map_1.logicBlock_visible();
	me._thumbnail_menu.logicBlock_visible();
	me._tt_projection.logicBlock_position();
	me._tt_userdata.logicBlock_position();
	me._tt_rotate.logicBlock_position();
	me._tt_enter_vr.logicBlock_position();
	me._tt_gyro.logicBlock_position();
	me._tt_fullscreen.logicBlock_position();
	me._tt_thumbnail_open.logicBlock_position();
	me._tt_zoomout.logicBlock_position();
	me._tt_zoomin.logicBlock_position();
	me._information.logicBlock_scaling();
	me._info_text_body.logicBlock_scaling();
	me._ht_info_close.logicBlock_size();
	me._ht_info_close.logicBlock_scaling();
	me._video_popup_file.logicBlock_size();
	me._video_popup_youtube.logicBlock_size();
	me._image_popup.logicBlock_size();
	me._popup_video_vimeo.logicBlock_size();
	me._close.logicBlock_position();
	me._instructions0.logicBlock_scaling();
	me._tt_projection.logicBlock_text();
	me._enter_vr.logicBlock_visible();
	me._map.logicBlock_visible();
	me._korean.logicBlock_visible();
	me._mandarin.logicBlock_visible();
	me._principals_welcome.logicBlock_visible();
	me._music_program.logicBlock_visible();
	player.addListener('sizechanged', function(args) { me._screentint.logicBlock_alpha();me._tt_thumbnail_open.logicBlock_text();me._thumbnail_menu_mobile.logicBlock_visible();me._thumbnail_menu_mobile.logicBlock_alpha(); });
	player.addListener('fullscreenenter', function(args) { me._fullscreen.logicBlock_alpha();me._fullscreen_off.logicBlock_alpha();me._tt_fullscreen.logicBlock_text(); });
	player.addListener('fullscreenexit', function(args) { me._fullscreen.logicBlock_alpha();me._fullscreen_off.logicBlock_alpha();me._tt_fullscreen.logicBlock_text(); });
	player.addListener('changenode', function(args) { me._menu_button.logicBlock_position();me._screentint.logicBlock_alpha();me._nav_menu.logicBlock_position();me._nav_menu.logicBlock_alpha();me._thumbnail_menu.logicBlock_position();me._svg_8.logicBlock_visible();me._minimise.logicBlock_visible();me._svg_6.logicBlock_visible();me._navigate.logicBlock_visible();me._controller.logicBlock_position();me._controller.logicBlock_alpha();me._controller_slider.logicBlock_position();me._controller_slider.logicBlock_alpha();me._projection_buttons.logicBlock_position();me._projection_buttons.logicBlock_visible();me._info.logicBlock_position();me._info.logicBlock_visible();me._autorotate_buttons.logicBlock_position();me._autorotate_buttons.logicBlock_visible();me._autorotate_start.logicBlock_alpha();me._autorotate_stop.logicBlock_alpha();me._tt_rotate.logicBlock_text();me._enter_vr.logicBlock_position();me._gyro.logicBlock_position();me._gyro.logicBlock_visible();me._gyro_on.logicBlock_alpha();me._gyro_off.logicBlock_alpha();me._tt_gyro.logicBlock_text();me._fullscreen_buttons.logicBlock_position();me._fullscreen_buttons.logicBlock_visible();me._thumbnail.logicBlock_position();me._thumbnail.logicBlock_visible();me._tt_thumbnail_open.logicBlock_text();me._zoomout.logicBlock_visible();me._zoomin.logicBlock_visible();me._thumbnail_menu_mobile.logicBlock_position();me._thumbnail_menu_mobile.logicBlock_visible();me._thumbnail_menu_mobile.logicBlock_alpha();me._web_page.logicBlock_visible();me._loading.logicBlock_visible();me._userdata.logicBlock_visible();me._information.logicBlock_visible();me._information.logicBlock_alpha();me._video_popup_file.logicBlock_visible();me._popup_video_file.logicBlock_visible();me._video_popup_controls_file.logicBlock_visible();me._video_popup_url.logicBlock_visible();me._popup_video_url.logicBlock_visible();me._video_popup_youtube.logicBlock_visible();me._popup_video_youtube.logicBlock_visible();me._video_popup_controls_url.logicBlock_visible();me._image_popup.logicBlock_visible();me._popup_image.logicBlock_visible();me.__360image_gyro.logicBlock_visible();me.__360image.logicBlock_position();me.__360image.logicBlock_scaling();me._phone2.logicBlock_scaling();me._phone3.logicBlock_scaling();me._video_popup_vimeo.logicBlock_visible();me._popup_video_vimeo.logicBlock_visible();me._close.logicBlock_visible();me._musicvideo.logicBlock_visible();me._welcome_video.logicBlock_visible(); });
	player.addListener('configloaded', function(args) { me._map_1.logicBlock_visible();me._thumbnail_menu.logicBlock_visible();me._tt_projection.logicBlock_position();me._tt_userdata.logicBlock_position();me._tt_rotate.logicBlock_position();me._tt_enter_vr.logicBlock_position();me._gyro.logicBlock_visible();me._tt_gyro.logicBlock_position();me._fullscreen_buttons.logicBlock_visible();me._tt_fullscreen.logicBlock_position();me._thumbnail.logicBlock_visible();me._tt_thumbnail_open.logicBlock_position();me._tt_zoomout.logicBlock_position();me._tt_zoomin.logicBlock_position();me._thumbnail_menu_mobile.logicBlock_visible();me._information.logicBlock_scaling();me._info_text_body.logicBlock_scaling();me._ht_info_close.logicBlock_size();me._ht_info_close.logicBlock_scaling();me._video_popup_file.logicBlock_size();me._video_popup_youtube.logicBlock_size();me._image_popup.logicBlock_size();me.__360image_gyro.logicBlock_visible();me._popup_video_vimeo.logicBlock_size();me._close.logicBlock_position();me._instructions0.logicBlock_scaling(); });
	player.addListener('projectionchanged', function(args) { me._tt_projection.logicBlock_text(); });
	player.addListener('autorotatechanged', function(args) { me._autorotate_start.logicBlock_alpha();me._autorotate_stop.logicBlock_alpha();me._tt_rotate.logicBlock_text(); });
	player.addListener('gyroavailable', function(args) { me._gyro.logicBlock_visible(); });
	player.addListener('gyrochanged', function(args) { me._gyro_on.logicBlock_alpha();me._gyro_off.logicBlock_alpha();me._tt_gyro.logicBlock_text(); });
	player.addListener('vrchanged', function(args) { me._enter_vr.logicBlock_visible();me._map.logicBlock_visible();me._korean.logicBlock_visible();me._mandarin.logicBlock_visible();me._principals_welcome.logicBlock_visible();me._music_program.logicBlock_visible(); });
	player.addListener('hastouch', function(args) { me._tt_projection.logicBlock_position();me._tt_userdata.logicBlock_position();me._tt_rotate.logicBlock_position();me._tt_enter_vr.logicBlock_position();me._tt_gyro.logicBlock_position();me._tt_fullscreen.logicBlock_position();me._tt_thumbnail_open.logicBlock_position();me._tt_zoomout.logicBlock_position();me._tt_zoomin.logicBlock_position();me.__360image_gyro.logicBlock_visible(); });
	player.addListener('varchanged_vis_userdata', function(args) { me._menu_button.logicBlock_position();me._screentint.logicBlock_alpha();me._thumbnail_menu.logicBlock_position();me._controller.logicBlock_position();me._thumbnail_menu_mobile.logicBlock_position();me._userdata.logicBlock_visible(); });
	player.addListener('varchanged_vis_image_popup', function(args) { me._menu_button.logicBlock_position();me._screentint.logicBlock_alpha();me._thumbnail_menu.logicBlock_position();me._controller.logicBlock_position();me._image_popup.logicBlock_visible();me._popup_image.logicBlock_visible();me._close.logicBlock_visible(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me._menu_button.logicBlock_position();me._screentint.logicBlock_alpha();me._thumbnail_menu.logicBlock_position();me._controller.logicBlock_position();me._information.logicBlock_visible();me._information.logicBlock_alpha(); });
	player.addListener('varchanged_vis_video_popup_file', function(args) { me._menu_button.logicBlock_position();me._screentint.logicBlock_alpha();me._thumbnail_menu.logicBlock_position();me._controller.logicBlock_position();me._video_popup_file.logicBlock_visible();me._popup_video_file.logicBlock_visible();me._video_popup_controls_file.logicBlock_visible();me._close.logicBlock_visible(); });
	player.addListener('varchanged_vis_video_popup_url', function(args) { me._menu_button.logicBlock_position();me._screentint.logicBlock_alpha();me._thumbnail_menu.logicBlock_position();me._controller.logicBlock_position();me._video_popup_url.logicBlock_visible();me._popup_video_url.logicBlock_visible();me._video_popup_controls_url.logicBlock_visible();me._close.logicBlock_visible(); });
	player.addListener('varchanged_vis_video_popup_vimeo', function(args) { me._menu_button.logicBlock_position();me._screentint.logicBlock_alpha();me._thumbnail_menu.logicBlock_position();me._controller.logicBlock_position();me._video_popup_vimeo.logicBlock_visible();me._popup_video_vimeo.logicBlock_visible();me._close.logicBlock_visible(); });
	player.addListener('varchanged_vis_video_popup_youtube', function(args) { me._menu_button.logicBlock_position();me._screentint.logicBlock_alpha();me._thumbnail_menu.logicBlock_position();me._controller.logicBlock_position();me._video_popup_youtube.logicBlock_visible();me._popup_video_youtube.logicBlock_visible();me._close.logicBlock_visible(); });
	player.addListener('varchanged_vis_website', function(args) { me._menu_button.logicBlock_position();me._screentint.logicBlock_alpha();me._thumbnail_menu.logicBlock_position();me._controller.logicBlock_position();me._web_page.logicBlock_visible();me._close.logicBlock_visible(); });
	player.addListener('varchanged_vis_timer', function(args) { me._controller.logicBlock_alpha();me._controller_slider.logicBlock_alpha();me._thumbnail_menu_mobile.logicBlock_alpha(); });
	player.addListener('varchanged_vis_welcome_video', function(args) { me._screentint.logicBlock_alpha();me._welcome_video.logicBlock_visible(); });
	player.addListener('varchanged_vis_music_video', function(args) { me._screentint.logicBlock_alpha();me._close.logicBlock_visible();me._musicvideo.logicBlock_visible(); });
	player.addListener('varchanged_vis_thumbnail_menu_mobile', function(args) { me._screentint.logicBlock_alpha();me._tt_thumbnail_open.logicBlock_text();me._thumbnail_menu_mobile.logicBlock_alpha(); });
	player.addListener('varchanged_vis_thumbnail_menu_auto_hide', function(args) { me._screentint.logicBlock_alpha();me._thumbnail_menu_mobile.logicBlock_alpha(); });
	player.addListener('varchanged_category_visible', function(args) { me._nav_menu.logicBlock_position();me._nav_menu.logicBlock_alpha();me._svg_8.logicBlock_visible();me._minimise.logicBlock_visible();me._svg_6.logicBlock_visible();me._navigate.logicBlock_visible(); });
	player.addListener('varchanged_opt_thumbnail', function(args) { me._thumbnail.logicBlock_visible();me._thumbnail_menu_mobile.logicBlock_visible(); });
	player.addListener('varchanged_opt_loader', function(args) { me._loading.logicBlock_visible(); });
	player.addListener('varchanged_opt_gyro', function(args) { me._gyro.logicBlock_visible();me.__360image_gyro.logicBlock_visible(); });
	player.addListener('varchanged_vis_360image_once', function(args) { me.__360image_gyro.logicBlock_visible(); });
	player.addListener('varchanged_pos_controller', function(args) { me._controller_slider.logicBlock_position(); });
	player.addListener('varchanged_pos_360image', function(args) { me.__360image.logicBlock_position();me.__360image.logicBlock_scaling();me._phone2.logicBlock_scaling();me._phone3.logicBlock_scaling(); });
	player.addListener('varchanged_pos_projection', function(args) { me._projection_buttons.logicBlock_position(); });
	player.addListener('varchanged_opt_projection', function(args) { me._projection_buttons.logicBlock_visible(); });
	player.addListener('varchanged_opt_info', function(args) { me._info.logicBlock_visible(); });
	player.addListener('varchanged_pos_information', function(args) { me._info.logicBlock_position(); });
	player.addListener('varchanged_opt_autorotate', function(args) { me._autorotate_buttons.logicBlock_visible(); });
	player.addListener('varchanged_pos_autorotate', function(args) { me._autorotate_buttons.logicBlock_position(); });
	player.addListener('varchanged_pos_enter_vr', function(args) { me._enter_vr.logicBlock_position(); });
	player.addListener('varchanged_pos_gyro', function(args) { me._gyro.logicBlock_position(); });
	player.addListener('varchanged_pos_fullscreen', function(args) { me._fullscreen_buttons.logicBlock_position(); });
	player.addListener('varchanged_opt_fullscreen', function(args) { me._fullscreen_buttons.logicBlock_visible(); });
	player.addListener('varchanged_pos_thumbnail', function(args) { me._thumbnail.logicBlock_position(); });
	player.addListener('varchanged_opt_zoom', function(args) { me._zoomout.logicBlock_visible();me._zoomin.logicBlock_visible(); });
	player.addListener('varchanged_vis_thumbnail_menu_show', function(args) { me._tt_thumbnail_open.logicBlock_text(); });
	player.addListener('changenode', function(args) { me._thumbnail_cloner.callChildLogicBlocks_changenode();me._thumbnail_cloner_mobile.callChildLogicBlocks_changenode(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner.callChildLogicBlocks_mouseover();me._thumbnail_cloner_mobile.callChildLogicBlocks_mouseover(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner.callChildLogicBlocks_mouseover();me._thumbnail_cloner_mobile.callChildLogicBlocks_mouseover(); });
	player.addListener('changenode', function(args) { me._thumbnail_cloner.callChildLogicBlocks_active();me._thumbnail_cloner_mobile.callChildLogicBlocks_active(); });
	player.addListener('changevisitednodes', function(args) { me._thumbnail_cloner.callChildLogicBlocks_changevisitednodes();me._thumbnail_cloner_mobile.callChildLogicBlocks_changevisitednodes(); });
	player.addListener('activehotspotchanged', function(args) { me._thumbnail_cloner.callChildLogicBlocks_activehotspotchanged();me._thumbnail_cloner_mobile.callChildLogicBlocks_activehotspotchanged(); });
	player.addListener('varchanged_opt_thumbnail_tooltip', function(args) { me._thumbnail_cloner_mobile.callChildLogicBlocks_varchanged_opt_thumbnail_tooltip(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_video_youtube_changenode();me.callChildLogicBlocksHotspot_ht_node_1_changenode();me.callChildLogicBlocksHotspot_ht_video_vimeo_changenode();me.callChildLogicBlocksHotspot_ht_video_url_changenode();me.callChildLogicBlocksHotspot_ht_video_file_changenode();me.callChildLogicBlocksHotspot_ht_image_changenode();me.callChildLogicBlocksHotspot_ht_info_changenode();me.callChildLogicBlocksHotspot_ht_url_changenode();me.callChildLogicBlocksHotspot_hotspot_1_changenode();me.callChildLogicBlocksHotspot_ht_node_changenode(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_ht_video_youtube_configloaded();me.callChildLogicBlocksHotspot_ht_video_vimeo_configloaded();me.callChildLogicBlocksHotspot_ht_video_url_configloaded();me.callChildLogicBlocksHotspot_ht_video_file_configloaded();me.callChildLogicBlocksHotspot_ht_image_configloaded();me.callChildLogicBlocksHotspot_ht_info_configloaded();me.callChildLogicBlocksHotspot_ht_url_configloaded();me.callChildLogicBlocksHotspot_ht_node_configloaded(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_video_youtube_mouseover();me.callChildLogicBlocksHotspot_ht_video_vimeo_mouseover();me.callChildLogicBlocksHotspot_ht_video_url_mouseover();me.callChildLogicBlocksHotspot_ht_video_file_mouseover();me.callChildLogicBlocksHotspot_ht_image_mouseover();me.callChildLogicBlocksHotspot_ht_info_mouseover();me.callChildLogicBlocksHotspot_ht_url_mouseover();me.callChildLogicBlocksHotspot_hotspot_1_mouseover();me.callChildLogicBlocksHotspot_ht_node_mouseover(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_video_youtube_mouseover();me.callChildLogicBlocksHotspot_ht_node_1_mouseover();me.callChildLogicBlocksHotspot_ht_video_vimeo_mouseover();me.callChildLogicBlocksHotspot_ht_video_url_mouseover();me.callChildLogicBlocksHotspot_ht_video_file_mouseover();me.callChildLogicBlocksHotspot_ht_image_mouseover();me.callChildLogicBlocksHotspot_ht_info_mouseover();me.callChildLogicBlocksHotspot_ht_url_mouseover();me.callChildLogicBlocksHotspot_hotspot_1_mouseover();me.callChildLogicBlocksHotspot_ht_node_mouseover(); });
	player.addListener('changevisitednodes', function(args) { me.callChildLogicBlocksHotspot_ht_node_changevisitednodes(); });
	player.addListener('hastouch', function(args) { me.callChildLogicBlocksHotspot_ht_video_youtube_hastouch();me.callChildLogicBlocksHotspot_ht_video_vimeo_hastouch();me.callChildLogicBlocksHotspot_ht_video_url_hastouch();me.callChildLogicBlocksHotspot_ht_video_file_hastouch();me.callChildLogicBlocksHotspot_ht_image_hastouch();me.callChildLogicBlocksHotspot_ht_info_hastouch();me.callChildLogicBlocksHotspot_ht_url_hastouch();me.callChildLogicBlocksHotspot_ht_node_hastouch(); });
	player.addListener('activehotspotchanged', function(args) { me.callChildLogicBlocksHotspot_ht_video_youtube_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_node_1_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_video_vimeo_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_video_url_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_video_file_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_image_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_info_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_url_activehotspotchanged();me.callChildLogicBlocksHotspot_hotspot_1_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged(); });
	player.addListener('varchanged_vis_userdata', function(args) { me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_userdata();me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_userdata();me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_userdata();me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_userdata();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_userdata();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_userdata();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_userdata();me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_userdata(); });
	player.addListener('varchanged_vis_image_popup', function(args) { me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_image_popup();me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_image_popup();me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_image_popup();me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_image_popup();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_image_popup();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_image_popup();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_image_popup();me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_image_popup(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_info_popup(); });
	player.addListener('varchanged_vis_video_popup_file', function(args) { me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_file();me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_file();me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_file();me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_file();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_file();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_file();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_file();me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_file(); });
	player.addListener('varchanged_vis_video_popup_url', function(args) { me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_url();me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_url();me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_url();me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_url();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_url();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_url();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_url();me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_url(); });
	player.addListener('varchanged_vis_video_popup_vimeo', function(args) { me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_vimeo();me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_vimeo();me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_vimeo();me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_vimeo();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_vimeo();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_vimeo();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_vimeo();me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_vimeo(); });
	player.addListener('varchanged_vis_video_popup_youtube', function(args) { me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_youtube();me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_youtube();me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_youtube();me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_youtube();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_youtube();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_youtube();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_youtube();me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_youtube(); });
	player.addListener('varchanged_vis_website', function(args) { me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_website(); });
	player.addListener('varchanged_vis_timer', function(args) { me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_timer();me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_timer();me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_timer();me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_timer();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_timer();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_timer();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_timer();me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_timer(); });
	player.addListener('varchanged_opt_hotspot_preview', function(args) { me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_hotspot_preview(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	document.addEventListener('keydown', function(e) {
		var key = e.which || e.keyCode;
		me.skinKeyPressed = key;
	});
	document.addEventListener('keyup', function(e) {
		var key = e.which || e.keyCode;
		me.skinKeyPressed = 0;
	});
	me.skinTimerEvent();
};
function onYouTubeIframeAPIReady() {
	setTimeout(function(){
		var videoElements = document.querySelectorAll('.ggskin_video');
		for (var i=0; i<videoElements.length; i++) {
			if (videoElements[i].ggYoutubeApiReady) {
				videoElements[i].ggYoutubeApiReady();
			}
		}
	}, 1000);
}