// Garden Gnome Software - Skin
// Pano2VR 6.1.9/17985
// Filename: ChatswoodPublic.ggsk
// Generated 2020-10-29T11:57:54

function pano2vrSkin(player,base) {
	player.addVariable('opt_hotspot_preview', 2, true);
	player.addVariable('opt_zoom', 2, true);
	player.addVariable('opt_autorotate', 2, true);
	player.addVariable('opt_info', 2, false);
	player.addVariable('opt_thumbnail', 2, false);
	player.addVariable('vis_thumbnail_menu_show', 2, false);
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgdmlld0JveD0iMCAwIDEyNC43IDEyNC43IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMjQuNyAxMjQuNzsiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW'+
			'9uPSIxLjEiIHk9IjBweCI+CiA8ZyBpZD0iTGF5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBkPSJNMTIsNDIuMWMtMi4yLDAtNCwxLjgtNCw0djMyLjdjMCwyLjIsMS44LDQsNCw0aDEwMC44YzIuMiwwLDQtMS44LDQtNFY0NmMwLTIuMi0xLjgtNC00LTRIMTJ6IE0zMC40LDczLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNi4zLDAtMTEuNC01LjEtMTEuNC0xMS40QzE5LDU2LjEsMjQuMSw1MSwzMC40LDUxYzYuMywwLDExLjQsNS4xLDExLjQsMTEuNEM0MS44LDY4LjYsMzYuNyw3My43LDMwLjQsNzMuN3ogTTYyLjQsNzMuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy02LjMsMC0xMS40'+
			'LTUuMS0xMS40LTExLjRDNTEsNTYuMSw1Ni4xLDUxLDYyLjQsNTFjNi4zLDAsMTEuNCw1LjEsMTEuNCwxMS40QzczLjcsNjguNiw2OC42LDczLjcsNjIuNCw3My43eiBNOTQuMyw3My43JiN4ZDsmI3hhOyYjeDk7JiN4OTtDODgsNzMuNyw4Myw2OC42LDgzLDYyLjRDODMsNTYuMSw4OCw1MSw5NC4zLDUxYzYuMywwLDExLjQsNS4xLDExLjQsMTEuNEMxMDUuNyw2OC42LDEwMC42LDczLjcsOTQuMyw3My43eiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzJfMV8iPgogIDxnPgogICA8Y2lyY2xlIGZpbGwtb3BhY2l0eT0iMSIgcj0iMTEuNCIgZmlsbD0iI2ZmZmZmZiIgY3k9Ij'+
			'YyLjQiIGN4PSIzMC40Ii8+CiAgIDxjaXJjbGUgZmlsbC1vcGFjaXR5PSIxIiByPSIxMS40IiBmaWxsPSIjZmZmZmZmIiBjeT0iNjIuNCIgY3g9IjYyLjQiLz4KICAgPGNpcmNsZSBmaWxsLW9wYWNpdHk9IjEiIHI9IjExLjQiIGZpbGw9IiNmZmZmZmYiIGN5PSI2Mi40IiBjeD0iOTQuMyIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._menu_button__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._menu_button__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgdmlld0JveD0iMCAwIDEyNC43IDEyNC43IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMjQuNyAxMjQuNzsiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW'+
			'9uPSIxLjEiIHk9IjBweCI+CiA8ZyBpZD0iTGF5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBkPSJNNi40LDM5LjhjLTIuNCwwLTQuNCwyLTQuNCw0LjR2MzYuM2MwLDIuNCwyLDQuNCw0LjQsNC40aDExMmMyLjQsMCw0LjQtMiw0LjQtNC40VjQ0LjJjMC0yLjQtMi00LjQtNC40LTQuNEg2LjR6IE0yNi45LDc1JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTcsMC0xMi42LTUuNy0xMi42LTEyLjZjMC03LDUuNy0xMi42LDEyLjYtMTIuNmM3LDAsMTIuNiw1LjcsMTIuNiwxMi42QzM5LjUsNjkuMywzMy44LDc1LDI2LjksNzV6IE02Mi40LDc1JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTcsMC0x'+
			'Mi42LTUuNy0xMi42LTEyLjZjMC03LDUuNy0xMi42LDEyLjYtMTIuNmM3LDAsMTIuNiw1LjcsMTIuNiwxMi42Qzc1LDY5LjMsNjkuMyw3NSw2Mi40LDc1eiBNOTcuOSw3NSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy03LDAtMTIuNi01LjctMTIuNi0xMi42YzAtNyw1LjctMTIuNiwxMi42LTEyLjZjNywwLDEyLjYsNS43LDEyLjYsMTIuNkMxMTAuNSw2OS4zLDEwNC44LDc1LDk3LjksNzV6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMl8xXyI+CiAgPGc+CiAgIDxjaXJjbGUgZmlsbC1vcGFjaXR5PSIxIiByPSIxMi42IiBmaWxsPSIjZmZmZmZmIiBjbGFzcz0ic3QwIiBjeT0iNj'+
			'IuNCIgY3g9IjI2LjkiLz4KICAgPGNpcmNsZSBmaWxsLW9wYWNpdHk9IjEiIHI9IjEyLjYiIGZpbGw9IiNmZmZmZmYiIGNsYXNzPSJzdDAiIGN5PSI2Mi40IiBjeD0iNjIuNCIvPgogICA8Y2lyY2xlIGZpbGwtb3BhY2l0eT0iMSIgcj0iMTIuNiIgZmlsbD0iI2ZmZmZmZiIgY2xhc3M9InN0MCIgY3k9IjYyLjQiIGN4PSI5Ny45Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
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
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
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
		}
		me._screentint.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screentint);
		el=me._controller=document.createElement('div');
		el.ggId="controller";
		el.ggDx=-84;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 23px;';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 198px;';
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
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 1;
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
				else if (me._controller.ggCurrentLogicStatePosition == 1) {
					this.ggDx = -20;
					me._controller.style.bottom='23px';
					me._controller.ggUpdatePosition(true);
				}
				else {
					me._controller.ggDx=-84;
					me._controller.style.bottom='23px';
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
		el=me._controller_bg=document.createElement('div');
		el.ggId="controller_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 3px;';
		hs+='border-radius : 3px;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 44px;';
		hs+='left : -9px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 242px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._controller_bg.ggIsActive=function() {
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
		me._controller_bg.logicBlock_position = function() {
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
			else {
				newLogicStatePosition = -1;
			}
			if (me._controller_bg.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._controller_bg.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._controller_bg.style[domTransition]='left 0s, top 0s, width 0s, height 0s';
				if (me._controller_bg.ggCurrentLogicStatePosition == 0) {
					me._controller_bg.style.left='103px';
					me._controller_bg.style.top='-9px';
				}
				else if (me._controller_bg.ggCurrentLogicStatePosition == 1) {
					me._controller_bg.style.left='87px';
					me._controller_bg.style.top='-9px';
				}
				else if (me._controller_bg.ggCurrentLogicStatePosition == 2) {
					me._controller_bg.style.left='71px';
					me._controller_bg.style.top='-9px';
				}
				else if (me._controller_bg.ggCurrentLogicStatePosition == 3) {
					me._controller_bg.style.left='55px';
					me._controller_bg.style.top='-9px';
				}
				else if (me._controller_bg.ggCurrentLogicStatePosition == 4) {
					me._controller_bg.style.left='39px';
					me._controller_bg.style.top='-9px';
				}
				else if (me._controller_bg.ggCurrentLogicStatePosition == 5) {
					me._controller_bg.style.left='23px';
					me._controller_bg.style.top='-9px';
				}
				else if (me._controller_bg.ggCurrentLogicStatePosition == 6) {
					me._controller_bg.style.left='7px';
					me._controller_bg.style.top='-9px';
				}
				else if (me._controller_bg.ggCurrentLogicStatePosition == 7) {
					me._controller_bg.style.left='-9px';
					me._controller_bg.style.top='-9px';
				}
				else {
					me._controller_bg.style.left='-9px';
					me._controller_bg.style.top='-9px';
				}
			}
		}
		me._controller_bg.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('pos_controller') == 1))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getVariableValue('pos_controller') == 2))
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				((player.getVariableValue('pos_controller') == 3))
			)
			{
				newLogicStateSize = 2;
			}
			else if (
				((player.getVariableValue('pos_controller') == 4))
			)
			{
				newLogicStateSize = 3;
			}
			else if (
				((player.getVariableValue('pos_controller') == 5))
			)
			{
				newLogicStateSize = 4;
			}
			else if (
				((player.getVariableValue('pos_controller') == 6))
			)
			{
				newLogicStateSize = 5;
			}
			else if (
				((player.getVariableValue('pos_controller') == 7))
			)
			{
				newLogicStateSize = 6;
			}
			else if (
				((player.getVariableValue('pos_controller') == 8))
			)
			{
				newLogicStateSize = 7;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._controller_bg.ggCurrentLogicStateSize != newLogicStateSize) {
				me._controller_bg.ggCurrentLogicStateSize = newLogicStateSize;
				me._controller_bg.style[domTransition]='left 0s, top 0s, width 0s, height 0s';
				if (me._controller_bg.ggCurrentLogicStateSize == 0) {
					me._controller_bg.style.width='82px';
					me._controller_bg.style.height='50px';
					skin.updateSize(me._controller_bg);
				}
				else if (me._controller_bg.ggCurrentLogicStateSize == 1) {
					me._controller_bg.style.width='114px';
					me._controller_bg.style.height='50px';
					skin.updateSize(me._controller_bg);
				}
				else if (me._controller_bg.ggCurrentLogicStateSize == 2) {
					me._controller_bg.style.width='146px';
					me._controller_bg.style.height='50px';
					skin.updateSize(me._controller_bg);
				}
				else if (me._controller_bg.ggCurrentLogicStateSize == 3) {
					me._controller_bg.style.width='178px';
					me._controller_bg.style.height='50px';
					skin.updateSize(me._controller_bg);
				}
				else if (me._controller_bg.ggCurrentLogicStateSize == 4) {
					me._controller_bg.style.width='210px';
					me._controller_bg.style.height='50px';
					skin.updateSize(me._controller_bg);
				}
				else if (me._controller_bg.ggCurrentLogicStateSize == 5) {
					me._controller_bg.style.width='242px';
					me._controller_bg.style.height='50px';
					skin.updateSize(me._controller_bg);
				}
				else if (me._controller_bg.ggCurrentLogicStateSize == 6) {
					me._controller_bg.style.width='274px';
					me._controller_bg.style.height='50px';
					skin.updateSize(me._controller_bg);
				}
				else if (me._controller_bg.ggCurrentLogicStateSize == 7) {
					me._controller_bg.style.width='306px';
					me._controller_bg.style.height='50px';
					skin.updateSize(me._controller_bg);
				}
				else {
					me._controller_bg.style.width='242px';
					me._controller_bg.style.height='44px';
					skin.updateSize(me._controller_bg);
				}
			}
		}
		me._controller_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('pos_controller') == 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_bg.style[domTransition]='left 0s, top 0s, width 0s, height 0s';
				if (me._controller_bg.ggCurrentLogicStateVisible == 0) {
					me._controller_bg.style.visibility="hidden";
					me._controller_bg.ggVisible=false;
				}
				else {
					me._controller_bg.style.visibility=(Number(me._controller_bg.style.opacity)>0||!me._controller_bg.style.opacity)?'inherit':'hidden';
					me._controller_bg.ggVisible=true;
				}
			}
		}
		me._controller_bg.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._controller_bg);
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
		el=me._enter_vr=document.createElement('div');
		els=me._enter_vr__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDEuMjIgNDIuODMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntmaWxsOiMxMDEwNDQ7fS5jbHMtM3tmaWxsOiNmZmY7fS5jbHMtNHtjbGlwLXBhdGg6dXJsKCNjbGlwLXBhdGgpO308L3N0eWxlPgogIDxjbGlwUGF0aCBpZD0iY2xpcC1wYXRoIj4KICAgPHJlY3QgeD0iMzQuOTMiIGhlaWdodD0iODIuMjgiIHdpZHRoPSIzNDYuNjkiIGNsYXNzPSJjbHMtMSIgeT0iMTE0LjA5Ii8+CiAgPC9jbG'+
			'lwUGF0aD4KIDwvZGVmcz4KIDxnIGlkPSJMYXllcl8zIiBkYXRhLW5hbWU9IkxheWVyIDMiPgogIDxjaXJjbGUgcj0iMTguMjciIGNsYXNzPSJjbHMtMiIgY3g9IjIwLjY3IiBjeT0iMjEuNTkiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8xIiBkYXRhLW5hbWU9IkxheWVyIDEiPgogIDxwYXRoIGQ9Ik0yNy4wOSwxMC4zM0gxNC4yNGE0LjIxLDQuMjEsMCwwLDAtNC4yLDQuMnYzLjg5YTQuMjEsNC4yMSwwLDAsMCw0LjIsNC4ySDI3LjA5YTQuMjEsNC4yMSwwLDAsMCw0LjIxLTQuMlYxNC41M0E0LjIxLDQuMjEsMCwwLDAsMjcuMDksMTAuMzNabS44MSw4LjA5QTEuNTQsMS41NCwwLDAsMSwyNi4zNywy'+
			'MEgxNWExLjU0LDEuNTQsMCwwLDEtMS41My0xLjUzVjE0LjUzQTEuNTMsMS41MywwLDAsMSwxNSwxM2gxMS40YTEuNTMsMS41MywwLDAsMSwxLjUzLDEuNTJaIiBjbGFzcz0iY2xzLTMiLz4KICA8Y2lyY2xlIHI9IjIuNjUiIGNsYXNzPSJjbHMtMyIgY3g9IjI0LjAxIiBjeT0iMTYuNSIvPgogIDxjaXJjbGUgcj0iMi42NSIgY2xhc3M9ImNscy0zIiBjeD0iMTcuMjUiIGN5PSIxNi41Ii8+CiAgPHBhdGggZD0iTTEzLjYyLDI1LjY1aDEuODdsLjk0LDMuNjRjLjIzLjg2LjM5LDEuNjQuNjIsMi41MWguMDVjLjI0LS44Ny40MS0xLjY1LjYzLTIuNTFsLjkyLTMuNjRoMS44MUwxOC4xLDMzLjQ2SDE2Wi'+
			'IgY2xhc3M9ImNscy0zIi8+CiAgPHBhdGggZD0iTTIxLjIsMjUuNjVIMjRjMS42NSwwLDMsLjU3LDMsMi40M3MtMS4zNiwyLjU3LTMsMi41N0gyM3YyLjgxSDIxLjJabTIuNjcsMy42Yy45MywwLDEuNDMtLjQsMS40My0xLjE3cy0uNS0xLTEuNDMtMUgyM3YyLjJabS0uMTguOTQsMS4yMy0xLjEzLDIuNDksNC40aC0yWiIgY2xhc3M9ImNscy0zIi8+CiAgPGcgY2xhc3M9ImNscy00Ij4KICAgPGltYWdlIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwLjk0IC0zNDEuNzYpIHNjYWxlKDAuMjgpIiBoZWlnaHQ9IjE5MzUiIHhsaW5rOmhyZWY9Ii4uL1NTQy1sb2dvLmpwZyIgd2lkdGg9IjEyNjEiLz4KICA8'+
			'L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._enter_vr__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="enter_vr";
		el.ggDx=-2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
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
			else {
				newLogicStatePosition = -1;
			}
			if (me._enter_vr.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._enter_vr.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._enter_vr.style[domTransition]='left 0s, top 0s, width 0s, height 0s';
				if (me._enter_vr.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					this.ggDy = 0;
					me._enter_vr.ggUpdatePosition(true);
				}
				else if (me._enter_vr.ggCurrentLogicStatePosition == 1) {
					this.ggDx = 32;
					this.ggDy = 0;
					me._enter_vr.ggUpdatePosition(true);
				}
				else if (me._enter_vr.ggCurrentLogicStatePosition == 2) {
					this.ggDx = 64;
					this.ggDy = 0;
					me._enter_vr.ggUpdatePosition(true);
				}
				else if (me._enter_vr.ggCurrentLogicStatePosition == 3) {
					this.ggDx = 96;
					this.ggDy = 0;
					me._enter_vr.ggUpdatePosition(true);
				}
				else if (me._enter_vr.ggCurrentLogicStatePosition == 4) {
					this.ggDx = 128;
					this.ggDy = 0;
					me._enter_vr.ggUpdatePosition(true);
				}
				else if (me._enter_vr.ggCurrentLogicStatePosition == 5) {
					this.ggDx = 160;
					this.ggDy = 0;
					me._enter_vr.ggUpdatePosition(true);
				}
				else if (me._enter_vr.ggCurrentLogicStatePosition == 6) {
					this.ggDx = 192;
					this.ggDy = 0;
					me._enter_vr.ggUpdatePosition(true);
				}
				else if (me._enter_vr.ggCurrentLogicStatePosition == 7) {
					this.ggDx = 224;
					this.ggDy = 0;
					me._enter_vr.ggUpdatePosition(true);
				}
				else {
					me._enter_vr.ggDx=-2;
					me._enter_vr.ggDy=0;
					me._enter_vr.ggUpdatePosition(true);
				}
			}
		}
		me._enter_vr.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['enter_vr'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._enter_vr.ggCurrentLogicStateSize != newLogicStateSize) {
				me._enter_vr.ggCurrentLogicStateSize = newLogicStateSize;
				me._enter_vr.style[domTransition]='left 0s, top 0s, width 0s, height 0s';
				if (me._enter_vr.ggCurrentLogicStateSize == 0) {
					me._enter_vr.style.width='36px';
					me._enter_vr.style.height='36px';
					skin.updateSize(me._enter_vr);
				}
				else {
					me._enter_vr.style.width='32px';
					me._enter_vr.style.height='32px';
					skin.updateSize(me._enter_vr);
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
				me._enter_vr.style[domTransition]='left 0s, top 0s, width 0s, height 0s';
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
			me.elementMouseOver['enter_vr']=true;
			me._enter_vr.logicBlock_size();
		}
		me._enter_vr.onmouseout=function (e) {
			me.elementMouseOver['enter_vr']=false;
			me._enter_vr.logicBlock_size();
		}
		me._enter_vr.ontouchend=function (e) {
			me.elementMouseOver['enter_vr']=false;
			me._enter_vr.logicBlock_size();
		}
		me._enter_vr.ggUpdatePosition=function (useTransition) {
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
		me._controller_slider.appendChild(me._enter_vr);
		el=me._gyro=document.createElement('div');
		el.ggId="gyro";
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
					me._gyro.style.left='160px';
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
		me._gyro.ggUpdatePosition=function (useTransition) {
		}
		el=me._gyro_on=document.createElement('div');
		els=me._gyro_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDEuMjIgNDIuODMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2ZpbGw6IzEwMTA0NDt9LmNscy0ye2ZpbGw6bm9uZTtzdHJva2U6I2ZmZjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPgogPC9kZWZzPgogPGcgaWQ9IkxheWVyXzMiIGRhdGEtbmFtZT0iTGF5ZXIgMyI+CiAgPGNpcmNsZSByPSIxOC4yNyIgY2xhc3M9ImNscy0xIiBjeD0iMjAuNjciIGN5PSIyMS41OSIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzEiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+CiAgPGVsbG'+
			'lwc2UgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYuNDEgOS4wNykgcm90YXRlKC0yMS41MSkiIHJ5PSI2LjA2IiByeD0iMTMuNzYiIGNsYXNzPSJjbHMtMiIgY3g9IjIwLjY3IiBjeT0iMjEuNDIiLz4KICA8ZWxsaXBzZSB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNi40MSA5LjA3KSByb3RhdGUoLTIxLjUxKSIgcnk9IjEzLjc2IiByeD0iNi4wNiIgY2xhc3M9ImNscy0yIiBjeD0iMjAuNjciIGN5PSIyMS40MiIvPgogPC9nPgo8L3N2Zz4K';
		me._gyro_on__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
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
		me._gyro_on.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['gyro_on'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._gyro_on.ggCurrentLogicStateSize != newLogicStateSize) {
				me._gyro_on.ggCurrentLogicStateSize = newLogicStateSize;
				me._gyro_on.style[domTransition]='width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._gyro_on.ggCurrentLogicStateSize == 0) {
					me._gyro_on.style.width='36px';
					me._gyro_on.style.height='36px';
					skin.updateSize(me._gyro_on);
				}
				else {
					me._gyro_on.style.width='32px';
					me._gyro_on.style.height='32px';
					skin.updateSize(me._gyro_on);
				}
			}
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
				me._gyro_on.style[domTransition]='width 0s, height 0s, opacity 500ms ease 0ms';
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
			me.elementMouseOver['gyro_on']=true;
			me._gyro_on.logicBlock_size();
		}
		me._gyro_on.onmouseout=function (e) {
			me.elementMouseOver['gyro_on']=false;
			me._gyro_on.logicBlock_size();
		}
		me._gyro_on.ontouchend=function (e) {
			me.elementMouseOver['gyro_on']=false;
			me._gyro_on.logicBlock_size();
		}
		me._gyro_on.ggUpdatePosition=function (useTransition) {
		}
		me._gyro.appendChild(me._gyro_on);
		el=me._gyro_off=document.createElement('div');
		els=me._gyro_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDEuMjIgNDIuODMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2ZpbGw6IzEwMTA0NDt9LmNscy0ye2ZpbGw6bm9uZTtzdHJva2U6I2ZmZjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPgogPC9kZWZzPgogPGcgaWQ9IkxheWVyXzMiIGRhdGEtbmFtZT0iTGF5ZXIgMyI+CiAgPGNpcmNsZSByPSIxOC4yNyIgY2xhc3M9ImNscy0xIiBjeD0iMjAuNjciIGN5PSIyMS41OSIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzEiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+CiAgPGVsbG'+
			'lwc2UgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYuNDEgOS4wNykgcm90YXRlKC0yMS41MSkiIHJ5PSI2LjA2IiByeD0iMTMuNzYiIGNsYXNzPSJjbHMtMiIgY3g9IjIwLjY3IiBjeT0iMjEuNDIiLz4KICA8ZWxsaXBzZSB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNi40MSA5LjA3KSByb3RhdGUoLTIxLjUxKSIgcnk9IjEzLjc2IiByeD0iNi4wNiIgY2xhc3M9ImNscy0yIiBjeD0iMjAuNjciIGN5PSIyMS40MiIvPgogIDxsaW5lIHgyPSIxNi4yNyIgeTE9IjkuNDciIHgxPSIyNi4yOSIgeTI9IjM2LjAyIiBjbGFzcz0iY2xzLTIiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._gyro_off__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gyro_off";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
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
		me._gyro_off.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['gyro_off'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._gyro_off.ggCurrentLogicStateSize != newLogicStateSize) {
				me._gyro_off.ggCurrentLogicStateSize = newLogicStateSize;
				me._gyro_off.style[domTransition]='width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._gyro_off.ggCurrentLogicStateSize == 0) {
					me._gyro_off.style.width='36px';
					me._gyro_off.style.height='36px';
					skin.updateSize(me._gyro_off);
				}
				else {
					me._gyro_off.style.width='32px';
					me._gyro_off.style.height='32px';
					skin.updateSize(me._gyro_off);
				}
			}
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
				me._gyro_off.style[domTransition]='width 0s, height 0s, opacity 500ms ease 0ms';
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
			me.elementMouseOver['gyro_off']=true;
			me._gyro_off.logicBlock_size();
		}
		me._gyro_off.onmouseout=function (e) {
			me.elementMouseOver['gyro_off']=false;
			me._gyro_off.logicBlock_size();
		}
		me._gyro_off.ontouchend=function (e) {
			me.elementMouseOver['gyro_off']=false;
			me._gyro_off.logicBlock_size();
		}
		me._gyro_off.ggUpdatePosition=function (useTransition) {
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
		me._gyro.appendChild(me._gyro_off);
		me._controller_slider.appendChild(me._gyro);
		el=me._fullscreen_buttons=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="fullscreen_buttons";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 96px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
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
					me._fullscreen_buttons.style.left='96px';
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
					me._fullscreen_buttons.style.visibility=(Number(me._fullscreen_buttons.style.opacity)>0||!me._fullscreen_buttons.style.opacity)?'inherit':'hidden';
					me._fullscreen_buttons.ggVisible=true;
				}
			}
		}
		me._fullscreen_buttons.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._fullscreen_buttons.ggUpdatePosition=function (useTransition) {
		}
		el=me._fullscreen=document.createElement('div');
		els=me._fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDEuMjIgNDIuODMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntmaWxsOiMxMDEwNDQ7fS5jbHMtM3tmaWxsOiNmZmY7fS5jbHMtNHtjbGlwLXBhdGg6dXJsKCNjbGlwLXBhdGgpO308L3N0eWxlPgogIDxjbGlwUGF0aCBpZD0iY2xpcC1wYXRoIj4KICAgPHJlY3QgeD0iLTE0Ny4yOCIgaGVpZ2h0PSI4Mi4yOCIgd2lkdGg9IjM0Ni42OSIgY2xhc3M9ImNscy0xIiB5PSIxMTQuMDkiLz4KICA8L2'+
			'NsaXBQYXRoPgogPC9kZWZzPgogPGcgaWQ9IkxheWVyXzMiIGRhdGEtbmFtZT0iTGF5ZXIgMyI+CiAgPGNpcmNsZSByPSIxOC4yNyIgY2xhc3M9ImNscy0yIiBjeD0iMjAuNjciIGN5PSIyMS41OSIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzEiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+CiAgPHBhdGggZD0iTTMxLjA3LDE5Ljg2YTEuMjMsMS4yMywwLDAsMC0xLjI0LTEuMjRIMjguMDhhMS4yNCwxLjI0LDAsMCwwLTEuMjQsMS4yNHY3LjIxYS40Ny40NywwLDAsMS0uNDcuNDdIMTguNzRhMS4xNiwxLjE2LDAsMCwwLTEuMTYsMS4xN3YxLjlhMS4xNiwxLjE2LDAsMCwwLDEuMTYsMS4xNkgyOS40M2ExLjYz'+
			'LDEuNjMsMCwwLDAsMS42NC0xLjY0WiIgY2xhc3M9ImNscy0zIi8+CiAgPHBhdGggZD0iTTEwLjQ0LDI0LjI0YTEuMjMsMS4yMywwLDAsMCwxLjI0LDEuMjRoMS43NWExLjI0LDEuMjQsMCwwLDAsMS4yNC0xLjI0VjE3YS40Ny40NywwLDAsMSwuNDctLjQ3aDcuNjNhMS4xNiwxLjE2LDAsMCwwLDEuMTYtMS4xNlYxMy40OWExLjE2LDEuMTYsMCwwLDAtMS4xNi0xLjE2SDEyLjA4QTEuNjQsMS42NCwwLDAsMCwxMC40NCwxNFoiIGNsYXNzPSJjbHMtMyIvPgogIDxnIGNsYXNzPSJjbHMtNCI+CiAgIDxpbWFnZSB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTUxLjI3IC0zNDEuNzYpIHNjYWxlKDAuMjgpIi'+
			'BoZWlnaHQ9IjE5MzUiIHhsaW5rOmhyZWY9Ii4uL1NTQy1sb2dvLmpwZyIgd2lkdGg9IjEyNjEiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
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
				((me.elementMouseOver['fullscreen'] == true))
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
					me._fullscreen.style.width='36px';
					me._fullscreen.style.height='36px';
					skin.updateSize(me._fullscreen);
				}
				else {
					me._fullscreen.style.width='32px';
					me._fullscreen.style.height='32px';
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
		me._fullscreen.onmouseover=function (e) {
			me.elementMouseOver['fullscreen']=true;
			me._fullscreen.logicBlock_size();
		}
		me._fullscreen.onmouseout=function (e) {
			me.elementMouseOver['fullscreen']=false;
			me._fullscreen.logicBlock_size();
		}
		me._fullscreen.ontouchend=function (e) {
			me.elementMouseOver['fullscreen']=false;
			me._fullscreen.logicBlock_size();
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
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDEuMjIgNDIuODMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntmaWxsOiMxMDEwNDQ7fS5jbHMtM3tmaWxsOiNmZmY7fS5jbHMtNHtjbGlwLXBhdGg6dXJsKCNjbGlwLXBhdGgpO308L3N0eWxlPgogIDxjbGlwUGF0aCBpZD0iY2xpcC1wYXRoIj4KICAgPHJlY3QgeD0iLTEwMS4zMiIgaGVpZ2h0PSI4Mi4yOCIgd2lkdGg9IjM0Ni42OSIgY2xhc3M9ImNscy0xIiB5PSIxMTQuMDkiLz4KICA8L2'+
			'NsaXBQYXRoPgogPC9kZWZzPgogPGcgaWQ9IkxheWVyXzMiIGRhdGEtbmFtZT0iTGF5ZXIgMyI+CiAgPGNpcmNsZSByPSIxOC4yNyIgY2xhc3M9ImNscy0yIiBjeD0iMjAuNjciIGN5PSIyMS41OSIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzEiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+CiAgPHBhdGggZD0iTTIxLjExLDMzLjU0YTEuMTgsMS4xOCwwLDAsMCwxLjE4LDEuMThIMjRhMS4xOCwxLjE4LDAsMCwwLDEuMTgtMS4xOFYyNi42N2EuNDUuNDUsMCwwLDEsLjQ1LS40NWg3LjI3QTEuMTEsMS4xMSwwLDAsMCwzNCwyNS4xMVYyMy4zYTEuMTEsMS4xMSwwLDAsMC0xLjExLTEuMTFIMjIuNjhhMS41Nywx'+
			'LjU3LDAsMCwwLTEuNTcsMS41N1oiIGNsYXNzPSJjbHMtMyIvPgogIDxwYXRoIGQ9Ik0yMS4xMSwxMS4zMmExLjE4LDEuMTgsMCwwLDAtMS4xOC0xLjE4SDE4LjI2YTEuMTgsMS4xOCwwLDAsMC0xLjE4LDEuMThWMTguMmEuNDUuNDUsMCwwLDEtLjQ1LjQ1SDkuMzZhMS4xMSwxLjExLDAsMCwwLTEuMTEsMS4xdjEuODJhMS4xMSwxLjExLDAsMCwwLDEuMTEsMS4xMUgxOS41NGExLjU3LDEuNTcsMCwwLDAsMS41Ny0xLjU3WiIgY2xhc3M9ImNscy0zIi8+CiAgPGcgY2xhc3M9ImNscy00Ij4KICAgPGltYWdlIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDUuMzEgLTM0MS43Nikgc2NhbGUoMC4yOCkiIG'+
			'hlaWdodD0iMTkzNSIgeGxpbms6aHJlZj0iLi4vU1NDLWxvZ28uanBnIiB3aWR0aD0iMTI2MSIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
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
				((me.elementMouseOver['fullscreen_off'] == true))
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
					me._fullscreen_off.style.width='36px';
					me._fullscreen_off.style.height='36px';
					skin.updateSize(me._fullscreen_off);
				}
				else {
					me._fullscreen_off.style.width='32px';
					me._fullscreen_off.style.height='32px';
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
		me._fullscreen_off.onmouseover=function (e) {
			me.elementMouseOver['fullscreen_off']=true;
			me._fullscreen_off.logicBlock_size();
		}
		me._fullscreen_off.onmouseout=function (e) {
			me.elementMouseOver['fullscreen_off']=false;
			me._fullscreen_off.logicBlock_size();
		}
		me._fullscreen_off.ontouchend=function (e) {
			me.elementMouseOver['fullscreen_off']=false;
			me._fullscreen_off.logicBlock_size();
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
		me._controller_slider.appendChild(me._fullscreen_buttons);
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 128px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_1.ggIsActive=function() {
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
		me._container_1.onclick=function (e) {
			if (
				(
					((player.getVariableValue('volume') == true))
				)
			) {
				player.setVolume("_main",1);
			}
			if (
				(
					((player.getVariableValue('volume') == false))
				)
			) {
				player.setVolume("_main",0);
			}
			player.setVariableValue('volume', !player.getVariableValue('volume'));
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._autorotate_start=document.createElement('div');
		els=me._autorotate_start__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDEuMjIgNDIuODMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntmaWxsOiMxMDEwNDQ7fS5jbHMtM3tmaWxsOiNmZmY7fS5jbHMtNHtjbGlwLXBhdGg6dXJsKCNjbGlwLXBhdGgpO308L3N0eWxlPgogIDxjbGlwUGF0aCBpZD0iY2xpcC1wYXRoIj4KICAgPHJlY3QgeD0iLTU2LjEzIiBoZWlnaHQ9IjgyLjI4IiB3aWR0aD0iMzQ2LjY5IiBjbGFzcz0iY2xzLTEiIHk9IjExNC4wOSIvPgogIDwvY2'+
			'xpcFBhdGg+CiA8L2RlZnM+CiA8ZyBpZD0iTGF5ZXJfMyIgZGF0YS1uYW1lPSJMYXllciAzIj4KICA8Y2lyY2xlIHI9IjE4LjI3IiBjbGFzcz0iY2xzLTIiIGN4PSIyMC42NyIgY3k9IjIxLjU5Ii8+CiAgPHJlY3QgeD0iMjcuOTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03LjE5IDI3LjE2KSByb3RhdGUoLTQ1KSIgaGVpZ2h0PSIxMy4wOSIgcng9IjEuMjMiIHdpZHRoPSIyLjQ3IiBjbGFzcz0iY2xzLTMiIHk9IjE1LjcyIi8+CiAgPHJlY3QgeD0iMjcuOTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0LjE5IC0xNC4xNikgcm90YXRlKDQ1KSIgaGVpZ2h0PSIxMy4wOSIgcng9IjEuMjMiIHdpZHRo'+
			'PSIyLjQ3IiBjbGFzcz0iY2xzLTMiIHk9IjE1LjU4Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIj4KICA8cmVjdCB4PSI3LjYxIiBoZWlnaHQ9IjEwLjc3IiByeD0iMC43MSIgd2lkdGg9IjQuMTgiIGNsYXNzPSJjbHMtMyIgeT0iMTYuODEiLz4KICA8cGF0aCBkPSJNMjEsMzEuNDRsLTcuOTItMy43YS42Mi42MiwwLDAsMS0uMzYtLjU2di0xMGEuNjIuNjIsMCwwLDEsLjM2LS41NkwyMSwxMi45NGEuNjMuNjMsMCwwLDEsLjg5LjU3VjMwLjg3QS42My42MywwLDAsMSwyMSwzMS40NFoiIGNsYXNzPSJjbHMtMyIvPgogIDxnIGNsYXNzPSJjbHMtNCI+CiAgIDxpbW'+
			'FnZSB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjAuMTIgLTM0MS43Nikgc2NhbGUoMC4yOCkiIGhlaWdodD0iMTkzNSIgeGxpbms6aHJlZj0iLi4vU1NDLWxvZ28uanBnIiB3aWR0aD0iMTI2MSIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._autorotate_start__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="autorotate_start";
		el.ggDx=0;
		el.ggDy=0;
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
		me._autorotate_start.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['autorotate_start'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._autorotate_start.ggCurrentLogicStateSize != newLogicStateSize) {
				me._autorotate_start.ggCurrentLogicStateSize = newLogicStateSize;
				me._autorotate_start.style[domTransition]='width 0s, height 0s';
				if (me._autorotate_start.ggCurrentLogicStateSize == 0) {
					me._autorotate_start.style.width='36px';
					me._autorotate_start.style.height='36px';
					skin.updateSize(me._autorotate_start);
				}
				else {
					me._autorotate_start.style.width='32px';
					me._autorotate_start.style.height='32px';
					skin.updateSize(me._autorotate_start);
				}
			}
		}
		me._autorotate_start.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('volume') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._autorotate_start.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._autorotate_start.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._autorotate_start.style[domTransition]='width 0s, height 0s';
				if (me._autorotate_start.ggCurrentLogicStateVisible == 0) {
					me._autorotate_start.style.visibility="hidden";
					me._autorotate_start.ggVisible=false;
				}
				else {
					me._autorotate_start.style.visibility=(Number(me._autorotate_start.style.opacity)>0||!me._autorotate_start.style.opacity)?'inherit':'hidden';
					me._autorotate_start.ggVisible=true;
				}
			}
		}
		me._autorotate_start.onmouseover=function (e) {
			me.elementMouseOver['autorotate_start']=true;
			me._autorotate_start.logicBlock_size();
		}
		me._autorotate_start.onmouseout=function (e) {
			me.elementMouseOver['autorotate_start']=false;
			me._autorotate_start.logicBlock_size();
		}
		me._autorotate_start.ontouchend=function (e) {
			me.elementMouseOver['autorotate_start']=false;
			me._autorotate_start.logicBlock_size();
		}
		me._autorotate_start.ggUpdatePosition=function (useTransition) {
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
		me._container_1.appendChild(me._autorotate_start);
		el=me._autorotate_stop=document.createElement('div');
		els=me._autorotate_stop__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDEuMjIgNDIuODMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMSwuY2xzLTR7ZmlsbDpub25lO30uY2xzLTJ7ZmlsbDojMTAxMDQ0O30uY2xzLTN7ZmlsbDojZmZmO30uY2xzLTR7c3Ryb2tlOiNmZmY7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9LmNscy01e2NsaXAtcGF0aDp1cmwoI2NsaXAtcGF0aCk7fTwvc3R5bGU+CiAgPGNsaXBQYXRoIGlkPSJjbGlwLXBhdG'+
			'giPgogICA8cmVjdCB4PSItMTEuMTkiIGhlaWdodD0iODIuMjgiIHdpZHRoPSIzNDYuNjkiIGNsYXNzPSJjbHMtMSIgeT0iMTE0LjA5Ii8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxnIGlkPSJMYXllcl8zIiBkYXRhLW5hbWU9IkxheWVyIDMiPgogIDxjaXJjbGUgcj0iMTguMjciIGNsYXNzPSJjbHMtMiIgY3g9IjIwLjY3IiBjeT0iMjEuNTkiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8xIiBkYXRhLW5hbWU9IkxheWVyIDEiPgogIDxyZWN0IHg9IjcuNjEiIGhlaWdodD0iMTAuNzciIHJ4PSIwLjcxIiB3aWR0aD0iNC4xOCIgY2xhc3M9ImNscy0zIiB5PSIxNi44MSIvPgogIDxwYXRoIGQ9Ik0y'+
			'MSwzMS40NGwtNy45Mi0zLjdhLjYyLjYyLDAsMCwxLS4zNi0uNTZ2LTEwYS42Mi42MiwwLDAsMSwuMzYtLjU2TDIxLDEyLjk0YS42My42MywwLDAsMSwuODkuNTdWMzAuODdBLjYzLjYzLDAsMCwxLDIxLDMxLjQ0WiIgY2xhc3M9ImNscy0zIi8+CiAgPHBhdGggZD0iTTI1LDE2LjgxbC4zOS44NmExMC45MSwxMC45MSwwLDAsMSwwLDlsLS4zOS44NiIgY2xhc3M9ImNscy00Ii8+CiAgPHBhdGggZD0iTTI4LjU3LDE0LjQxbC41NywxLjI0YTE1LjgsMTUuOCwwLDAsMSwwLDEzLjA4TDI4LjU3LDMwIiBjbGFzcz0iY2xzLTQiLz4KICA8ZyBjbGFzcz0iY2xzLTUiPgogICA8aW1hZ2UgdHJhbnNmb3JtPS'+
			'J0cmFuc2xhdGUoLTE1LjE4IC0zNDEuNzYpIHNjYWxlKDAuMjgpIiBoZWlnaHQ9IjE5MzUiIHhsaW5rOmhyZWY9Ii4uL1NTQy1sb2dvLmpwZyIgd2lkdGg9IjEyNjEiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._autorotate_stop__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="autorotate_stop";
		el.ggDx=0;
		el.ggDy=0;
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
		me._autorotate_stop.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['autorotate_stop'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._autorotate_stop.ggCurrentLogicStateSize != newLogicStateSize) {
				me._autorotate_stop.ggCurrentLogicStateSize = newLogicStateSize;
				me._autorotate_stop.style[domTransition]='width 1000ms ease 0ms, height 1000ms ease 0ms';
				if (me._autorotate_stop.ggCurrentLogicStateSize == 0) {
					me._autorotate_stop.style.width='36px';
					me._autorotate_stop.style.height='36px';
					setTimeout(function() {skin.updateSize(me._autorotate_stop);}, 1000);
				}
				else {
					me._autorotate_stop.style.width='32px';
					me._autorotate_stop.style.height='32px';
					setTimeout(function() {skin.updateSize(me._autorotate_stop);}, 1000);
				}
			}
		}
		me._autorotate_stop.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('volume') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._autorotate_stop.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._autorotate_stop.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._autorotate_stop.style[domTransition]='width 1000ms ease 0ms, height 1000ms ease 0ms';
				if (me._autorotate_stop.ggCurrentLogicStateVisible == 0) {
					me._autorotate_stop.style.visibility="hidden";
					me._autorotate_stop.ggVisible=false;
				}
				else {
					me._autorotate_stop.style.visibility=(Number(me._autorotate_stop.style.opacity)>0||!me._autorotate_stop.style.opacity)?'inherit':'hidden';
					me._autorotate_stop.ggVisible=true;
				}
			}
		}
		me._autorotate_stop.onmouseover=function (e) {
			me.elementMouseOver['autorotate_stop']=true;
			me._autorotate_stop.logicBlock_size();
		}
		me._autorotate_stop.onmouseout=function (e) {
			me.elementMouseOver['autorotate_stop']=false;
			me._autorotate_stop.logicBlock_size();
		}
		me._autorotate_stop.ontouchend=function (e) {
			me.elementMouseOver['autorotate_stop']=false;
			me._autorotate_stop.logicBlock_size();
		}
		me._autorotate_stop.ggUpdatePosition=function (useTransition) {
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
		me._container_1.appendChild(me._autorotate_stop);
		me._controller_slider.appendChild(me._container_1);
		el=me._zoomout=document.createElement('div');
		els=me._zoomout__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDEuMjIgNDIuODMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzMiIGRhdGEtbmFtZT0iTGF5ZXIgMyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2ZpbGw6IzEwMWI0OTt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT4KIDwvZGVmcz4KIDxjaXJjbGUgcj0iMTguMjciIGNsYXNzPSJjbHMtMSIgY3g9IjIwLjY3IiBjeT0iMjEuNTkiLz4KIDxyZWN0IHg9IjE4LjQ1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0Mi4yNiAwLjcxKSByb3RhdGUoOTApIiBoZWlnaHQ9IjI0LjY1IiByeD0iMS4zNiIgd2lkdGg9IjQuNjUiIGNsYXNzPS'+
			'JjbHMtMiIgeT0iOS4xNiIvPgo8L3N2Zz4K';
		me._zoomout__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="zoomout";
		el.ggDx=64;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
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
		me._zoomout.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['zoomout'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._zoomout.ggCurrentLogicStateSize != newLogicStateSize) {
				me._zoomout.ggCurrentLogicStateSize = newLogicStateSize;
				me._zoomout.style[domTransition]='width 0s, height 0s';
				if (me._zoomout.ggCurrentLogicStateSize == 0) {
					me._zoomout.style.width='36px';
					me._zoomout.style.height='36px';
					skin.updateSize(me._zoomout);
				}
				else {
					me._zoomout.style.width='32px';
					me._zoomout.style.height='32px';
					skin.updateSize(me._zoomout);
				}
			}
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
				me._zoomout.style[domTransition]='width 0s, height 0s';
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
			me.elementMouseOver['zoomout']=true;
			me._zoomout.logicBlock_size();
		}
		me._zoomout.onmouseout=function (e) {
			me.elementMouseDown['zoomout']=false;
			me.elementMouseOver['zoomout']=false;
			me._zoomout.logicBlock_size();
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
			me._zoomout.logicBlock_size();
		}
		me._zoomout.ggUpdatePosition=function (useTransition) {
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
		me._controller_slider.appendChild(me._zoomout);
		el=me._zoomin=document.createElement('div');
		els=me._zoomin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDEuMjIgNDIuODMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzMiIGRhdGEtbmFtZT0iTGF5ZXIgMyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2ZpbGw6IzEwMWI0OTt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT4KIDwvZGVmcz4KIDxjaXJjbGUgcj0iMTguMjciIGNsYXNzPSJjbHMtMSIgY3g9IjIwLjY3IiBjeT0iMjEuNTkiLz4KIDxyZWN0IHg9IjE4LjQzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC45MiA0Mi40Mikgcm90YXRlKC05MCkiIGhlaWdodD0iMjQuNjUiIHJ4PSIxLjI4IiB3aWR0aD0iNC42NSIgY2xhc3'+
			'M9ImNscy0yIiB5PSI5LjM1Ii8+CiA8cmVjdCB4PSIxOC4yNCIgaGVpZ2h0PSIyNC42NSIgcng9IjEuMzYiIHdpZHRoPSI0LjY1IiBjbGFzcz0iY2xzLTIiIHk9IjkuMTYiLz4KPC9zdmc+Cg==';
		me._zoomin__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="zoomin";
		el.ggDx=32;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
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
		me._zoomin.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['zoomin'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._zoomin.ggCurrentLogicStateSize != newLogicStateSize) {
				me._zoomin.ggCurrentLogicStateSize = newLogicStateSize;
				me._zoomin.style[domTransition]='width 0s, height 0s';
				if (me._zoomin.ggCurrentLogicStateSize == 0) {
					me._zoomin.style.width='36px';
					me._zoomin.style.height='36px';
					skin.updateSize(me._zoomin);
				}
				else {
					me._zoomin.style.width='32px';
					me._zoomin.style.height='32px';
					skin.updateSize(me._zoomin);
				}
			}
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
				me._zoomin.style[domTransition]='width 0s, height 0s';
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
			me.elementMouseOver['zoomin']=true;
			me._zoomin.logicBlock_size();
		}
		me._zoomin.onmouseout=function (e) {
			me.elementMouseDown['zoomin']=false;
			me.elementMouseOver['zoomin']=false;
			me._zoomin.logicBlock_size();
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
			me._zoomin.logicBlock_size();
		}
		me._zoomin.ggUpdatePosition=function (useTransition) {
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
		me._controller_slider.appendChild(me._zoomin);
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
		hs+='height : 89px;';
		hs+='left : 50%;';
		hs+='margin-left : -69.5px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 139px;';
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
				} else if (posX + width > me._thumbnail_menu.offsetWidth - (me._thumbnail_menu.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu.offsetWidth - (me._thumbnail_menu.ggVertScrollVisible ? 15 : 0))) * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu.offsetHeight - (me._thumbnail_menu.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu.offsetHeight - (me._thumbnail_menu.ggHorScrollVisible ? 15 : 0))) * me._thumbnail_menu.ggVPercentVisible);
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
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 1536px; height: 15px; background-color: rgba(0,0,0,0.392157); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_menu__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 1536px; height: 15px; background-color: rgba(0,0,0,1); pointer-events: auto;');
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
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_menu";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='bottom : 65px;';
		hs+='height : 85px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
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
				me._thumbnail_menu.style[domTransition]='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._thumbnail_menu.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._thumbnail_menu.style.bottom='-100px';
					me._thumbnail_menu.ggUpdatePosition(true);
				}
				else {
					me._thumbnail_menu.ggDx=0;
					me._thumbnail_menu.style.bottom='65px';
					me._thumbnail_menu.ggUpdatePosition(true);
				}
			}
		}
		me._thumbnail_menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_thumbnail') == true)) && 
				((player.getIsTour() == true)) && 
				((player.getViewerSize().width > 450))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_menu.style[domTransition]='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._thumbnail_menu.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_menu.style.visibility=(Number(me._thumbnail_menu.style.opacity)>0||!me._thumbnail_menu.style.opacity)?'inherit':'hidden';
					me._thumbnail_menu.ggVisible=true;
				}
				else {
					me._thumbnail_menu.style.visibility="hidden";
					me._thumbnail_menu.ggVisible=false;
				}
			}
		}
		me._thumbnail_menu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu_show') == true)) && 
				((player.getVariableValue('vis_thumbnail_menu_auto_hide') == true)) && 
				((player.getVariableValue('vis_timer') == true)) && 
				((player.getViewerSize().width > 450))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_menu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_menu.style[domTransition]='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._thumbnail_menu.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_menu.style.visibility=me._thumbnail_menu.ggVisible?'inherit':'hidden';
					me._thumbnail_menu.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_menu.style.opacity == 0.0) { me._thumbnail_menu.style.visibility="hidden"; } }, 505);
					me._thumbnail_menu.style.opacity=0;
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
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
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
				var containerHeight = this.offsetHeight;
				if (this.ggHorScrollVisible) containerHeight -= 15;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (15/2) : 0))  + 'px';
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
					me._thumbnail_menu.ggAvailableHeight = me._thumbnail_menu.offsetHeight - 15;
					if (me._thumbnail_menu.ggVertScrollVisible) {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.offsetWidth - 15;
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
		el.ggWidth = 96;
		el.ggHeight = 62;
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
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title && me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_active && me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor();
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
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_active && me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor();
					}
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick && me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible();
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
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title && me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_tooltip = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title && me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha();
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
			me._thumbnail_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_tooltip();
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
		hs+='height : 62px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 96px;';
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
		me.divSkin.appendChild(me._thumbnail_menu);
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
		el.ggDy=14;
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
		el.className="ggskin ggskin_text lumination";
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
			var hs="Loading... "+(player.getPercentLoaded()*100.0).toFixed(0)+"%";
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
		el=me._instructions=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=3600000;
		el.ggId="Instructions";
		el.ggDx=0;
		el.ggDy=10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 676px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 537.6px;';
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
		hs+='height : 676px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 28%;';
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
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 1119px;';
		hs+='left : -907px;';
		hs+='position : absolute;';
		hs+='top : -240px;';
		hs+='visibility : inherit;';
		hs+='width : 1947px;';
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
		el.ggDy=0;
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
		el.ggDy=-108;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text lumination";
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
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="How to Tour";
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
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDEuMjIgNDIuODMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBkYXRhLW5hbWU9IkxheWVyIDMiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtmaWxsOnVybCgjcmFkaWFsLWdyYWRpZW50KTt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT4KICA8cmFkaWFsR3JhZGllbnQgaWQ9InJhZGlhbC1ncmFkaWVudCIgcj0iMTguMjciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjeD0iMjAuNjciIGN5PSIyMS41OSI+CiAgIDxzdG9wIHN0b3'+
			'AtY29sb3I9IiMxZDYzYTgiIG9mZnNldD0iMCIvPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjMWM0MjgzIiBvZmZzZXQ9IjEiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogPC9kZWZzPgogPGNpcmNsZSByPSIxOC4yNyIgY2xhc3M9ImNscy0xIiBjeD0iMjAuNjciIGN5PSIyMS41OSIvPgogPHJlY3QgeD0iMTcuNDEiIGhlaWdodD0iMTUuNTgiIHJ4PSIxLjM2IiB3aWR0aD0iNS42NyIgY2xhc3M9ImNscy0yIiB5PSIxNi44OSIvPgogPGNpcmNsZSByPSIyLjg0IiBjbGFzcz0iY2xzLTIiIGN4PSIyMC4yNSIgY3k9IjEyLjI0Ii8+Cjwvc3ZnPgo=';
		me._svg_4__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 4";
		el.ggDx=-134;
		el.ggDy=10;
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
		el.ggDy=79;
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
		el.ggDy=46;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
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
		hs+='font-size: 13px;';
		hs+='font-weight: normal;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Click and drag to rotate view<br\/><br\/>Find icons located around the scene, and click to view info pop-ups, URL links, images, and videos. <br\/><br\/>To move to the next scene, find the arrow, or choose a category from the lefthand menu. ";
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
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjggMjEuNzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntpc29sYXRpb246aXNvbGF0ZTt9LmNscy0ze29wYWNpdHk6MC4zO21peC1ibGVuZC1tb2RlOm11bHRpcGx5O30uY2xzLTR7ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudCk7fS5jbHMtNXtjbGlwLXBhdGg6dXJsKCNjbGlwLXBhdGgpO308L3N0eWxlPgogIDxsaW5lYXJHcmFkaWVudCB4Mj0iMzMuNTkiIGlkPSJsaW5lYXItZ3JhZGllbn'+
			'QiIHkxPSIxIiB4MT0iMzMuNTkiIHkyPSIxOC4zNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjMDA0ZTg1IiBvZmZzZXQ9IjAiLz4KICAgPHN0b3Agc3RvcC1jb2xvcj0iIzI2NDg4YiIgb2Zmc2V0PSIwLjI2Ii8+CiAgIDxzdG9wIHN0b3AtY29sb3I9IiMyNTQzODQiIG9mZnNldD0iMC40NCIvPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjMjQzNTcxIiBvZmZzZXQ9IjAuNyIvPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjMjExZjUyIiBvZmZzZXQ9IjEiLz4KICAgPHN0b3Agc3RvcC1jb2xvcj0iIzIxMWY1MiIgb2Zmc2V0PSIxIi8+CiAgPC9saW5l'+
			'YXJHcmFkaWVudD4KICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgIDxyZWN0IHg9Ii0xOTIuODEiIGhlaWdodD0iODIuMjgiIHdpZHRoPSIzNDYuNjkiIGNsYXNzPSJjbHMtMSIgeT0iNzMuOCIvPgogIDwvY2xpcFBhdGg+CiA8L2RlZnM+CiA8ZyBjbGFzcz0iY2xzLTIiPgogIDxnIGlkPSJMYXllcl8zIiBkYXRhLW5hbWU9IkxheWVyIDMiPgogICA8aW1hZ2UgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi4zNSAtMS40NSkiIGhlaWdodD0iMjQiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRDhBQUFBWUNBWUFBQUJOOWlWUkFBQUFDWE'+
			'JJV1hNQUFBc1NBQUFMRWdIUzNYNzhBQUFCU2tsRVFWUllSKzNZeTBwa01SREc4ViswTHc2SWw0VXpvUE1FcnNXMXIrNTJIa0JCY09WbFJzR0ZNc0owMjNhNVNLTGRkZys0UGVmMGY1T0U1QlI4OVlVY3FsSkVxS1NVVXAxcUh3RXhJempWZVVwcERYME15OWltQkV3eHdUOU1JbUpLRVYrRWY4TWVEckNEbm5Za0lQQ0NCMXlWY1J3UjBTdFh2WS92T01JeGZtTGpQOEdhUnVBWkZ6aFYzTWRycnh3WXlvNGY0d1Q3R0N5RWFTYUJ2OWpGUFg3ak9hVTByVmU3ajIzWjhYMzUrcTh2ajlVNEFwc1k0UkJudU1PNE9sOFRNSlFkWDhmYVlwekdNcEROL1lFdDVVSC9MTEFORDl3eXFya0RNMyt5TnJuN0ZlYk03WnI0'+
			'T1ZiaXU4cEtmRmRaaWU4cVhSUC8wYnl3S0g1dXMwWFVzblpjeGlEWDdMT2JvM0xnZFVtQXBoS3lwa2U1b0hsU0V0RHpJZndSMTdndEg3V3RwTDJVSzdvL3NzbnZ6bzl3ZzE5bDNkWm14cm5jeVpsRVJIUzZqYlZxWUZhNjFycCtBMldwZkxyZEZjQWtBQUFBQUVsRlRrU3VRbUNDIiB3aWR0aD0iNjMiIGNsYXNzPSJjbHMtMyIvPgogICA8cmVjdCB4PSI1Ljc1IiBoZWlnaHQ9IjE3LjM2IiByeD0iMi40NiIgd2lkdGg9IjU1LjY4IiBjbGFzcz0iY2xzLTQiIHk9IjEiLz4KICA8L2c+CiAgPGcgaWQ9IkxheWVyXzEiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+CiAgIDxnIGNsYXNzPSJjbHMtNSI+CiAgICA8aW'+
			'1hZ2UgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE5Ni44IC0zODIuMDQpIHNjYWxlKDAuMjgpIiBoZWlnaHQ9IjE5MzUiIHhsaW5rOmhyZWY9Ii4uL1NTQy1sb2dvLmpwZyIgd2lkdGg9IjEyNjEiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._beginbutton__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._beginbutton__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjggMjEuNzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntpc29sYXRpb246aXNvbGF0ZTt9LmNscy0ze29wYWNpdHk6MC4zO21peC1ibGVuZC1tb2RlOm11bHRpcGx5O30uY2xzLTR7ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudCk7fS5jbHMtNXtjbGlwLXBhdGg6dXJsKCNjbGlwLXBhdGgpO308L3N0eWxlPgogIDxsaW5lYXJHcmFkaWVudCB4Mj0iMzMuNTkiIGlkPSJsaW5lYXItZ3JhZGllbn'+
			'QiIHkxPSIxIiB4MT0iMzMuNTkiIHkyPSIxOC4zNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjMWYzNjcyIiBvZmZzZXQ9IjAiLz4KICAgPHN0b3Agc3RvcC1jb2xvcj0iIzFiMzI1ZCIgb2Zmc2V0PSIwLjI2Ii8+CiAgIDxzdG9wIHN0b3AtY29sb3I9IiMxOTJiNTgiIG9mZnNldD0iMC41MSIvPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjMTMxODRhIiBvZmZzZXQ9IjAuODgiLz4KICAgPHN0b3Agc3RvcC1jb2xvcj0iIzEwMTA0NCIgb2Zmc2V0PSIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAg'+
			'IDxyZWN0IHg9Ii0xOTIuODEiIGhlaWdodD0iODIuMjgiIHdpZHRoPSIzNDYuNjkiIGNsYXNzPSJjbHMtMSIgeT0iNDguNjUiLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgogPGcgY2xhc3M9ImNscy0yIj4KICA8ZyBpZD0iTGF5ZXJfMyIgZGF0YS1uYW1lPSJMYXllciAzIj4KICAgPGltYWdlIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuMzUgLTEuNikiIGhlaWdodD0iMjQiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRDhBQUFBWUNBWUFBQUJOOWlWUkFBQUFDWEJJV1hNQUFBc1NBQUFMRWdIUzNYNzhBQUFCZEVsRVFWUllSKzNZU1c4VF'+
			'FSQ0c0YWVkc2MwbUJZSGdFQkMvQXVYTS81Y1FONUNRY21JUmk0d0lhMktIS1E0MUhXeGlKSzd1OFhmcFpVWXR2VldsbnZtcVJJU3FVa3FwVTIwcElOWmhVZXE2bERMQkZQTmhiQ1VBZ1JYT3NZcUl2ajRvRVZIQnIrTWVIdUEyT3JzZmdNQUZUdkVHSC9FekluNlJjQVV6SE9FeGp2RVExN2FkdG9NNmsrQlA4UXl2OFNNaSttNTRZUzR6Zm93bk1oQ3pxK2ZzcEZiNGdEdkQraHh2U3luTFd0cFRITXFNSDhueVA5aHkwQzZxeDgxaC9nbXZzTUN5WnI0R1lDNHpmb0NKTmpUQkRkeVgxWDFvdU5EL0J0ejFDKzVmMnZvbGF5VzcvNnVONUk0TmZrTjcrTEZxRHo5VzdlSEhxckhCYi9qNXNjQlhUNzhjeGlBOSsv'+
			'b0xJWTNBcGVGdlFDR2hUL0VlWHd3QnFQRDlzUEVWbjRlOVZxb2k4QTBuZUk1MzB0YnEvT2wyTFBCQy92L2UwbzdKQ1h6SFM4bTN3RVZFUk8za1RIRVhqNlRwbjJrTGZpV2hMNzE4Uk1SNkQ2K1RyYXRPT3lWZjFjdnFQcE5aNzluczNyYmF0cTY2MHI3K0RRSzVlYklhUFk4TkFBQUFBRWxGVGtTdVFtQ0MiIHdpZHRoPSI2MyIgY2xhc3M9ImNscy0zIi8+CiAgIDxyZWN0IHg9IjUuNzUiIGhlaWdodD0iMTcuMzYiIHJ4PSIyLjQ2IiB3aWR0aD0iNTUuNjgiIGNsYXNzPSJjbHMtNCIgeT0iMSIvPgogIDwvZz4KICA8ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIj4KICAgPGcgY2xhc3M9Im'+
			'Nscy01Ij4KICAgIDxpbWFnZSB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTk2LjggLTQwNy4xOSkgc2NhbGUoMC4yOCkiIGhlaWdodD0iMTkzNSIgeGxpbms6aHJlZj0iLi4vU1NDLWxvZ28uanBnIiB3aWR0aD0iMTI2MSIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._beginbutton__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="BeginButton";
		el.ggDx=0;
		el.ggDy=184;
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
		el.ggDy=146;
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
		el.className="ggskin ggskin_text lumination";
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
		hs+='font-size: 15px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="START TOUR";
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
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDEuMjIgNDIuODMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzMiIGRhdGEtbmFtZT0iTGF5ZXIgMyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2ZpbGw6I2RlYjIwMDt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT4KIDwvZGVmcz4KIDxjaXJjbGUgcj0iMTguMjciIGNsYXNzPSJjbHMtMSIgY3g9IjIwLjY3IiBjeT0iMjEuNTkiLz4KIDxyZWN0IHg9IjE4LjM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOS4yOSAyMC45Nykgcm90YXRlKC00NSkiIGhlaWdodD0iMjQuNjUiIHJ4PSIxLjI4IiB3aWR0aD0iNC42NSIgY2xhc3'+
			'M9ImNscy0yIiB5PSI5LjM4Ii8+CiA8cmVjdCB4PSIxOC4zNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjEuMjEgLTguMzMpIHJvdGF0ZSg0NSkiIGhlaWdodD0iMjQuNjUiIHJ4PSIxLjM2IiB3aWR0aD0iNC42NSIgY2xhc3M9ImNscy0yIiB5PSI5LjEyIi8+Cjwvc3ZnPgo=';
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
		el.ggDy=1;
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
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDEuMjIgNDIuODMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzMiIGRhdGEtbmFtZT0iTGF5ZXIgMyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2ZpbGw6IzEwMWI0OTt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT4KIDwvZGVmcz4KIDxjaXJjbGUgcj0iMTguMjciIGNsYXNzPSJjbHMtMSIgY3g9IjIwLjY3IiBjeT0iMjEuNTkiLz4KIDxyZWN0IHg9IjE4LjM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOS4yOSAyMC45Nykgcm90YXRlKC00NSkiIGhlaWdodD0iMjQuNjUiIHJ4PSIxLjI4IiB3aWR0aD0iNC42NSIgY2xhc3'+
			'M9ImNscy0yIiB5PSI5LjM4Ii8+CiA8cmVjdCB4PSIxOC4zNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjEuMjEgLTguMzMpIHJvdGF0ZSg0NSkiIGhlaWdodD0iMjQuNjUiIHJ4PSIxLjM2IiB3aWR0aD0iNC42NSIgY2xhc3M9ImNscy0yIiB5PSI5LjEyIi8+Cjwvc3ZnPgo=';
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
		el.ggDy=0.56;
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
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI2NCIgZmlsbD0id2hpdGUiIHdpZHRoPSI2NCI+CiA8Y2lyY2xlIHI9IjAiIGN5PSIzIiBjeD0iMTYiPgogIDxhbmltYXRlIGR1cj0iMXMiIGJlZ2luPSIwIiB2YWx1ZXM9IjA7MzswOzAiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKD'+
			'Q1IDE2IDE2KSIgcj0iMCIgY3k9IjMiIGN4PSIxNiI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgYmVnaW49IjAuMTI1cyIgdmFsdWVzPSIwOzM7MDswIiBjYWxjTW9kZT0ic3BsaW5lIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiIHI9IjAiIGN5PSIzIiBjeD0iMTYiPgogIDxhbmltYXRlIGR1cj0iMXMiIGJlZ2luPSIwLjI1cyIgdmFsdWVzPSIwOzM7MDswIiBjYWxjTW9k'+
			'ZT0ic3BsaW5lIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIiByPSIwIiBjeT0iMyIgY3g9IjE2Ij4KICA8YW5pbWF0ZSBkdXI9IjFzIiBiZWdpbj0iMC4zNzVzIiB2YWx1ZXM9IjA7MzswOzAiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC'+
			'40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIHI9IjAiIGN5PSIzIiBjeD0iMTYiPgogIDxhbmltYXRlIGR1cj0iMXMiIGJlZ2luPSIwLjVzIiB2YWx1ZXM9IjA7MzswOzAiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDIyNSAxNiAxNikiIHI9IjAiIGN5PSIzIiBj'+
			'eD0iMTYiPgogIDxhbmltYXRlIGR1cj0iMXMiIGJlZ2luPSIwLjYyNXMiIHZhbHVlcz0iMDszOzA7MCIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSIgcj0iMCIgY3k9IjMiIGN4PSIxNiI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgYmVnaW49IjAuNzVzIiB2YWx1ZXM9IjA7MzswOzAiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PS'+
			'JpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiIHI9IjAiIGN5PSIzIiBjeD0iMTYiPgogIDxhbmltYXRlIGR1cj0iMXMiIGJlZ2luPSIwLjg3NXMiIHZhbHVlcz0iMDszOzA7MCIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJy'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSIgcj0iMCIgY3k9IjMiIGN4PSIxNiI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgYmVnaW49IjAuNXMiIHZhbHVlcz0iMDszOzA7MCIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDEuMjIgNDIuODMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzMiIGRhdGEtbmFtZT0iTGF5ZXIgMyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2ZpbGw6IzEwMWI0OTt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT4KIDwvZGVmcz4KIDxjaXJjbGUgcj0iMTguMjciIGNsYXNzPSJjbHMtMSIgY3g9IjIwLjY3IiBjeT0iMjEuNTkiLz4KIDxwYXRoIGQ9Ik0xMy43NywxMi4zNlYzMC40N2EuNjYuNjYsMCwwLDAsMSwuNTdMMzAuNjYsMjJhLjY1LjY1LDAsMCwwLDAtMS4xM0wxNC43NSwxMS43OUEuNjYuNjYsMCwwLDAsMTMuNz'+
			'csMTIuMzZaIiBjbGFzcz0iY2xzLTIiLz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDEuMjIgNDIuODMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzMiIGRhdGEtbmFtZT0iTGF5ZXIgMyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2ZpbGw6IzEwMWI0OTt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT4KIDwvZGVmcz4KIDxjaXJjbGUgcj0iMTguMjciIGNsYXNzPSJjbHMtMSIgY3g9IjIwLjY3IiBjeT0iMjEuNTkiLz4KIDxyZWN0IHg9IjIzLjA5IiBoZWlnaHQ9IjIxLjQ0IiByeD0iMS4yOCIgd2lkdGg9IjQuMDQiIGNsYXNzPSJjbHMtMiIgeT0iMTAuODciLz4KIDxyZWN0IHg9IjE1LjI5IiBoZWlnaHQ9Ij'+
			'IxLjQ0IiByeD0iMS4zNiIgd2lkdGg9IjQuMDQiIGNsYXNzPSJjbHMtMiIgeT0iMTAuODciLz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI2NCIgZmlsbD0id2hpdGUiIHdpZHRoPSI2NCI+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiPgogIDxhbmltYXRlIGR1cj0iMXMiIGJlZ2luPSIwIiB2YWx1ZXM9IjA7MzswOzAiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKD'+
			'Q1IDE2IDE2KSIgcj0iMCIgY3g9IjE2IiBjeT0iMyI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgYmVnaW49IjAuMTI1cyIgdmFsdWVzPSIwOzM7MDswIiBjYWxjTW9kZT0ic3BsaW5lIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiIHI9IjAiIGN4PSIxNiIgY3k9IjMiPgogIDxhbmltYXRlIGR1cj0iMXMiIGJlZ2luPSIwLjI1cyIgdmFsdWVzPSIwOzM7MDswIiBjYWxjTW9k'+
			'ZT0ic3BsaW5lIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIiByPSIwIiBjeD0iMTYiIGN5PSIzIj4KICA8YW5pbWF0ZSBkdXI9IjFzIiBiZWdpbj0iMC4zNzVzIiB2YWx1ZXM9IjA7MzswOzAiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC'+
			'40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIHI9IjAiIGN4PSIxNiIgY3k9IjMiPgogIDxhbmltYXRlIGR1cj0iMXMiIGJlZ2luPSIwLjVzIiB2YWx1ZXM9IjA7MzswOzAiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDIyNSAxNiAxNikiIHI9IjAiIGN4PSIxNiIg'+
			'Y3k9IjMiPgogIDxhbmltYXRlIGR1cj0iMXMiIGJlZ2luPSIwLjYyNXMiIHZhbHVlcz0iMDszOzA7MCIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSIgcj0iMCIgY3g9IjE2IiBjeT0iMyI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgYmVnaW49IjAuNzVzIiB2YWx1ZXM9IjA7MzswOzAiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PS'+
			'JpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiIHI9IjAiIGN4PSIxNiIgY3k9IjMiPgogIDxhbmltYXRlIGR1cj0iMXMiIGJlZ2luPSIwLjg3NXMiIHZhbHVlcz0iMDszOzA7MCIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJy'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSIgcj0iMCIgY3g9IjE2IiBjeT0iMyI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgYmVnaW49IjAuNXMiIHZhbHVlcz0iMDszOzA7MCIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
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
		el.ggDy=0.19;
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
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._loading_video_youtube=document.createElement('div');
		els=me._loading_video_youtube__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI2NCIgZmlsbD0id2hpdGUiIHdpZHRoPSI2NCI+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiPgogIDxhbmltYXRlIGR1cj0iMXMiIGJlZ2luPSIwIiB2YWx1ZXM9IjA7MzswOzAiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKD'+
			'Q1IDE2IDE2KSIgcj0iMCIgY3g9IjE2IiBjeT0iMyI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgYmVnaW49IjAuMTI1cyIgdmFsdWVzPSIwOzM7MDswIiBjYWxjTW9kZT0ic3BsaW5lIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiIHI9IjAiIGN4PSIxNiIgY3k9IjMiPgogIDxhbmltYXRlIGR1cj0iMXMiIGJlZ2luPSIwLjI1cyIgdmFsdWVzPSIwOzM7MDswIiBjYWxjTW9k'+
			'ZT0ic3BsaW5lIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIiByPSIwIiBjeD0iMTYiIGN5PSIzIj4KICA8YW5pbWF0ZSBkdXI9IjFzIiBiZWdpbj0iMC4zNzVzIiB2YWx1ZXM9IjA7MzswOzAiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC'+
			'40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIHI9IjAiIGN4PSIxNiIgY3k9IjMiPgogIDxhbmltYXRlIGR1cj0iMXMiIGJlZ2luPSIwLjVzIiB2YWx1ZXM9IjA7MzswOzAiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDIyNSAxNiAxNikiIHI9IjAiIGN4PSIxNiIg'+
			'Y3k9IjMiPgogIDxhbmltYXRlIGR1cj0iMXMiIGJlZ2luPSIwLjYyNXMiIHZhbHVlcz0iMDszOzA7MCIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSIgcj0iMCIgY3g9IjE2IiBjeT0iMyI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgYmVnaW49IjAuNzVzIiB2YWx1ZXM9IjA7MzswOzAiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PS'+
			'JpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiIHI9IjAiIGN4PSIxNiIgY3k9IjMiPgogIDxhbmltYXRlIGR1cj0iMXMiIGJlZ2luPSIwLjg3NXMiIHZhbHVlcz0iMDszOzA7MCIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJy'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSIgcj0iMCIgY3g9IjE2IiBjeT0iMyI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgYmVnaW49IjAuNXMiIHZhbHVlcz0iMDszOzA7MCIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
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
			var ggVideoParams = '?autoplay=1&amp;controls=1&amp;loop=0&amp;enablejsapi=0&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + media + ggVideoParams;
			me._popup_video_youtube__vid.setAttribute('src', ggVideoUrl);
			me._popup_video_youtube__vid.setAttribute('width', '100%');
			me._popup_video_youtube__vid.setAttribute('height', '100%');
			me._popup_video_youtube__vid.setAttribute('allow', 'autoplay');
			me._popup_video_youtube__vid.setAttribute('allowfullscreen', 'true');
			me._popup_video_youtube__vid.setAttribute('style', 'border:none; ; ;');
			me._popup_video_youtube.appendChild(me._popup_video_youtube__vid);
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
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDEuMjIgNDIuODMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzMiIGRhdGEtbmFtZT0iTGF5ZXIgMyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2ZpbGw6IzEwMWI0OTt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT4KIDwvZGVmcz4KIDxjaXJjbGUgcj0iMTguMjciIGNsYXNzPSJjbHMtMSIgY3g9IjIwLjY3IiBjeT0iMjEuNTkiLz4KIDxwYXRoIGQ9Ik0xMy43NywxMi4zNlYzMC40N2EuNjYuNjYsMCwwLDAsMSwuNTdMMzAuNjYsMjJhLjY1LjY1LDAsMCwwLDAtMS4xM0wxNC43NSwxMS43OUEuNjYuNjYsMCwwLDAsMTMuNz'+
			'csMTIuMzZaIiBjbGFzcz0iY2xzLTIiLz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDEuMjIgNDIuODMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzMiIGRhdGEtbmFtZT0iTGF5ZXIgMyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2ZpbGw6IzEwMWI0OTt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT4KIDwvZGVmcz4KIDxjaXJjbGUgcj0iMTguMjciIGNsYXNzPSJjbHMtMSIgY3g9IjIwLjY3IiBjeT0iMjEuNTkiLz4KIDxyZWN0IHg9IjIzLjA5IiBoZWlnaHQ9IjIxLjQ0IiByeD0iMS4yOCIgd2lkdGg9IjQuMDQiIGNsYXNzPSJjbHMtMiIgeT0iMTAuODciLz4KIDxyZWN0IHg9IjE1LjI5IiBoZWlnaHQ9Ij'+
			'IxLjQ0IiByeD0iMS4zNiIgd2lkdGg9IjQuMDQiIGNsYXNzPSJjbHMtMiIgeT0iMTAuODciLz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI2NCIgZmlsbD0id2hpdGUiIHdpZHRoPSI2NCI+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiPgogIDxhbmltYXRlIGR1cj0iMXMiIGJlZ2luPSIwIiB2YWx1ZXM9IjA7MzswOzAiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKD'+
			'Q1IDE2IDE2KSIgcj0iMCIgY3g9IjE2IiBjeT0iMyI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgYmVnaW49IjAuMTI1cyIgdmFsdWVzPSIwOzM7MDswIiBjYWxjTW9kZT0ic3BsaW5lIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiIHI9IjAiIGN4PSIxNiIgY3k9IjMiPgogIDxhbmltYXRlIGR1cj0iMXMiIGJlZ2luPSIwLjI1cyIgdmFsdWVzPSIwOzM7MDswIiBjYWxjTW9k'+
			'ZT0ic3BsaW5lIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIiByPSIwIiBjeD0iMTYiIGN5PSIzIj4KICA8YW5pbWF0ZSBkdXI9IjFzIiBiZWdpbj0iMC4zNzVzIiB2YWx1ZXM9IjA7MzswOzAiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC'+
			'40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIHI9IjAiIGN4PSIxNiIgY3k9IjMiPgogIDxhbmltYXRlIGR1cj0iMXMiIGJlZ2luPSIwLjVzIiB2YWx1ZXM9IjA7MzswOzAiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDIyNSAxNiAxNikiIHI9IjAiIGN4PSIxNiIg'+
			'Y3k9IjMiPgogIDxhbmltYXRlIGR1cj0iMXMiIGJlZ2luPSIwLjYyNXMiIHZhbHVlcz0iMDszOzA7MCIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSIgcj0iMCIgY3g9IjE2IiBjeT0iMyI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgYmVnaW49IjAuNzVzIiB2YWx1ZXM9IjA7MzswOzAiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PS'+
			'JpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiIHI9IjAiIGN4PSIxNiIgY3k9IjMiPgogIDxhbmltYXRlIGR1cj0iMXMiIGJlZ2luPSIwLjg3NXMiIHZhbHVlcz0iMDszOzA7MCIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJy'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSIgcj0iMCIgY3g9IjE2IiBjeT0iMyI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgYmVnaW49IjAuNXMiIHZhbHVlcz0iMDszOzA7MCIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
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
		el=me._side_nav=document.createElement('div');
		el.ggId="Side Nav";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(1,1,8,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._side_nav.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._side_nav.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('category_visible') == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._side_nav.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._side_nav.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._side_nav.style[domTransition]='left 0ms ease 0ms, top 0ms ease 0ms, width 0s, height 0s, ' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._side_nav.ggCurrentLogicStatePosition == 0) {
					me._side_nav.style.left='-20px';
					me._side_nav.style.top='-1px';
				}
				else if (me._side_nav.ggCurrentLogicStatePosition == 1) {
					me._side_nav.style.left='-56px';
					me._side_nav.style.top='-140px';
				}
				else {
					me._side_nav.style.left='0px';
					me._side_nav.style.top='0px';
				}
			}
		}
		me._side_nav.logicBlock_size = function() {
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
			if (me._side_nav.ggCurrentLogicStateSize != newLogicStateSize) {
				me._side_nav.ggCurrentLogicStateSize = newLogicStateSize;
				me._side_nav.style[domTransition]='left 0ms ease 0ms, top 0ms ease 0ms, width 0s, height 0s, ' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._side_nav.ggCurrentLogicStateSize == 0) {
					me._side_nav.style.width='224px';
					me._side_nav.style.height='200%';
					skin.updateSize(me._side_nav);
				}
				else {
					me._side_nav.style.width='190px';
					me._side_nav.style.height='100%';
					skin.updateSize(me._side_nav);
				}
			}
		}
		me._side_nav.logicBlock_scaling = function() {
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
			if (me._side_nav.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._side_nav.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._side_nav.style[domTransition]='left 0ms ease 0ms, top 0ms ease 0ms, width 0s, height 0s, ' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._side_nav.ggCurrentLogicStateScaling == 0) {
					me._side_nav.ggParameter.sx = 0.5;
					me._side_nav.ggParameter.sy = 0.5;
					me._side_nav.style[domTransform]=parameterToTransform(me._side_nav.ggParameter);
				}
				else {
					me._side_nav.ggParameter.sx = 1;
					me._side_nav.ggParameter.sy = 1;
					me._side_nav.style[domTransform]=parameterToTransform(me._side_nav.ggParameter);
				}
			}
		}
		me._side_nav.logicBlock_visible = function() {
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
			if (me._side_nav.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._side_nav.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._side_nav.style[domTransition]='left 0ms ease 0ms, top 0ms ease 0ms, width 0s, height 0s, ' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._side_nav.ggCurrentLogicStateVisible == 0) {
					me._side_nav.style.visibility="hidden";
					me._side_nav.ggVisible=false;
				}
				else {
					me._side_nav.style.visibility=(Number(me._side_nav.style.opacity)>0||!me._side_nav.style.opacity)?'inherit':'hidden';
					me._side_nav.ggVisible=true;
				}
			}
		}
		me._side_nav.logicBlock_alpha = function() {
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
			if (me._side_nav.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._side_nav.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._side_nav.style[domTransition]='left 0ms ease 0ms, top 0ms ease 0ms, width 0s, height 0s, ' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._side_nav.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._side_nav.style.opacity == 0.0) { me._side_nav.style.visibility="hidden"; } }, 505);
					me._side_nav.style.opacity=0;
				}
				else {
					me._side_nav.style.visibility=me._side_nav.ggVisible?'inherit':'hidden';
					me._side_nav.style.opacity=1;
				}
			}
		}
		me._side_nav.ggUpdatePosition=function (useTransition) {
		}
		el=me._scrollarea_1=document.createElement('div');
		els=me._scrollarea_1__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 978px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 0px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_1.ggScrollByX = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosX = (me._scrollarea_1__horScrollFg.offsetLeft + diffX);
			me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
			me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			me._scrollarea_1__content.style.left = -(Math.round(me._scrollarea_1.ggScrollPosX / me._scrollarea_1.ggHPercentVisible)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
		}
		me._scrollarea_1.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_1.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_1.ggScrollPosX >= me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth)) {
					me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_1.ggScrollPosX <= 0)) {
					me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			me._scrollarea_1__content.style.left = -(Math.round(me._scrollarea_1.ggScrollPosX / me._scrollarea_1.ggHPercentVisible)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scrollarea_1.ggScrollByY = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosY = (me._scrollarea_1__vertScrollFg.offsetTop + diffY);
			me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
			me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			me._scrollarea_1__content.style.top = -(Math.round(me._scrollarea_1.ggScrollPosY / me._scrollarea_1.ggVPercentVisible)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
		}
		me._scrollarea_1.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_1.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_1.ggScrollPosY >= me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight)) {
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_1.ggScrollPosY <= 0)) {
					me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			me._scrollarea_1__content.style.top = -(Math.round(me._scrollarea_1.ggScrollPosY / me._scrollarea_1.ggVPercentVisible)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scrollarea_1.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_1.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_1.offsetWidth - (me._scrollarea_1.ggVertScrollVisible ? 6 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_1.offsetWidth - (me._scrollarea_1.ggVertScrollVisible ? 6 : 0))) * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_1.offsetHeight - (me._scrollarea_1.ggHorScrollVisible ? 6 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_1.offsetHeight - (me._scrollarea_1.ggHorScrollVisible ? 6 : 0))) * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_1.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._scrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._scrollarea_1__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaX *= 0.65;
					me._scrollarea_1.ggDragInertiaY *= 0.65;
					me._scrollarea_1.ggScrollByX(-me._scrollarea_1.ggDragInertiaX);
					me._scrollarea_1.ggScrollByY(-me._scrollarea_1.ggDragInertiaY);
					if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0 && Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._scrollarea_1__content.ontouchend = null;
				me._scrollarea_1__content.ontouchmove = null;
				me._scrollarea_1__content.onpointerup = null;
				me._scrollarea_1__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._scrollarea_1__content.onpointerup = me._scrollarea_1__content.ontouchend;
		}
			me._scrollarea_1__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._scrollarea_1.ggDragLastX;
				var diffY = (t ? t[0].clientY : e.clientY) - me._scrollarea_1.ggDragLastY;
				me._scrollarea_1.ggDragInertiaX = diffX;
				me._scrollarea_1.ggDragInertiaY = diffY;
				me._scrollarea_1.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._scrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._scrollarea_1.ggScrollByX(-diffX);
				me._scrollarea_1.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._scrollarea_1__content.onpointermove = me._scrollarea_1__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elVertScrollBg = me._scrollarea_1__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 6px; height: 864px; background-color: rgba(33,47,101,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._scrollarea_1__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 6px; height: 864px; background-color: rgba(24,83,155,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._scrollarea_1.ggScrollPosY = 0;
		me._scrollarea_1.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_1.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaY *= 0.65;
					me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
					if (Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._scrollarea_1.ggDragLastY;
				me._scrollarea_1.ggDragInertiaY = diffY;
				me._scrollarea_1.ggDragLastY = e.clientY;
				me._scrollarea_1.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaY *= 0.65;
					me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
					if (Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
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
				var diffY = (t ? t[0].clientY : e.clientY) - me._scrollarea_1.ggDragLastY;
				me._scrollarea_1.ggDragInertiaY = diffY;
				me._scrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._scrollarea_1.ggScrollByY(diffY);
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
			var diffY = me._scrollarea_1.ggScrollHeight;
			if (e.offsetY < me._scrollarea_1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_1.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_1__vertScrollBg.getBoundingClientRect();
			var diffY = me._scrollarea_1.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._scrollarea_1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_1.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._scrollarea_1.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me._scrollarea_1__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 6px; height: 6px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : 80%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 154px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._scrollarea_1.ggIsActive=function() {
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
		me._scrollarea_1.logicBlock_size = function() {
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
			if (me._scrollarea_1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._scrollarea_1.ggCurrentLogicStateSize = newLogicStateSize;
				me._scrollarea_1.style[domTransition]='width 0s, height 0s';
				if (me._scrollarea_1.ggCurrentLogicStateSize == 0) {
					me._scrollarea_1.style.width='223px';
					me._scrollarea_1.style.height='77%';
					skin.updateSize(me._scrollarea_1);
				}
				else {
					me._scrollarea_1.style.width='190px';
					me._scrollarea_1.style.height='80%';
					skin.updateSize(me._scrollarea_1);
				}
			}
		}
		me._scrollarea_1.ggUpdatePosition=function (useTransition) {
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
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._scrollarea_1.ggScrollPosY / me._scrollarea_1.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me._scrollarea_1__vertScrollBg.style.visibility = 'inherit';
				me._scrollarea_1__vertScrollFg.style.visibility = 'inherit';
				me._scrollarea_1.ggVertScrollVisible = true;
				if(me._scrollarea_1.ggVertScrollVisible) {
					me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.offsetWidth - 6;
					if (me._scrollarea_1.ggHorScrollVisible) {
						me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.offsetHeight - 6;
						me._scrollarea_1.ggAvailableHeightWithScale = me._scrollarea_1.getBoundingClientRect().height - me._scrollarea_1__vertScrollBg.getBoundingClientRect().width;
						me._scrollarea_1__cornerBg.style.visibility = 'inherit';
					} else {
						me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.offsetHeight;
						me._scrollarea_1.ggAvailableHeightWithScale = me._scrollarea_1.getBoundingClientRect().height;
						me._scrollarea_1__cornerBg.style.visibility = 'hidden';
					}
					me._scrollarea_1__vertScrollBg.style.height = me._scrollarea_1.ggAvailableHeight + 'px';
					me._scrollarea_1.ggVPercentVisible = contentHeight != 0 ? me._scrollarea_1.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._scrollarea_1.ggVPercentVisible > 1.0) me._scrollarea_1.ggVPercentVisible = 1.0;
					me._scrollarea_1.ggScrollHeight =  Math.round(me._scrollarea_1__vertScrollBg.offsetHeight * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1__vertScrollFg.style.height = me._scrollarea_1.ggScrollHeight + 'px';
					me._scrollarea_1.ggScrollPosY = me._scrollarea_1.ggScrollPosYPercent * me._scrollarea_1.ggAvailableHeight;
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
					if (me._scrollarea_1.ggVPercentVisible < 1.0) {
						me._scrollarea_1__content.style.top = -(Math.round(me._scrollarea_1.ggScrollPosY / me._scrollarea_1.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
					}
				} else {
					me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.offsetWidth;
					me._scrollarea_1.ggScrollPosY = 0;
					me._scrollarea_1.ggScrollPosYPercent = 0.0;
					me._scrollarea_1__content.style.top = this.ggContentTopOffset + 'px';
					me._scrollarea_1__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._scrollarea_1.ggHorScrollVisible || vertScrollWasVisible != me._scrollarea_1.ggVertScrollVisible) {
					me.updateSize(me._scrollarea_1);
					me._scrollarea_1.ggUpdatePosition();
				}
			}
		}
		el=me._bush_campus=document.createElement('div');
		el.ggId="Bush campus";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 116px;';
		hs+='left : -340px;';
		hs+='position : absolute;';
		hs+='top : 863px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._bush_campus.ggIsActive=function() {
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
		me._bush_campus.logicBlock_position = function() {
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
			if (me._bush_campus.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._bush_campus.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._bush_campus.style[domTransition]='left 0s, top 0s';
				if (me._bush_campus.ggCurrentLogicStatePosition == 0) {
					me._bush_campus.style.left='0px';
					me._bush_campus.style.top='353px';
				}
				else {
					me._bush_campus.style.left='-340px';
					me._bush_campus.style.top='863px';
				}
			}
		}
		me._bush_campus.onclick=function (e) {
			player.openNext("{node13}","");
		}
		me._bush_campus.onmouseover=function (e) {
			me.elementMouseOver['bush_campus']=true;
			me._sevenrec_2.logicBlock_backgroundcolor();
		}
		me._bush_campus.onmouseout=function (e) {
			me.elementMouseOver['bush_campus']=false;
			me._sevenrec_2.logicBlock_backgroundcolor();
		}
		me._bush_campus.ontouchend=function (e) {
			me.elementMouseOver['bush_campus']=false;
			me._sevenrec_2.logicBlock_backgroundcolor();
		}
		me._bush_campus.ggUpdatePosition=function (useTransition) {
		}
		el=me._sevenimage_2=document.createElement('div');
		els=me._sevenimage_2__img=document.createElement('img');
		els.className='ggskin ggskin_sevenimage_2';
		hs=basePath + 'images/sevenimage_2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Seven-Image_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 116px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._sevenimage_2.ggIsActive=function() {
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
		me._sevenimage_2.ggUpdatePosition=function (useTransition) {
		}
		me._bush_campus.appendChild(me._sevenimage_2);
		el=me._sevenrec_2=document.createElement('div');
		el.ggId="Seven-rec_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 116px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._sevenrec_2.ggIsActive=function() {
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
		me._sevenrec_2.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['bush_campus'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._sevenrec_2.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._sevenrec_2.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._sevenrec_2.style[domTransition]='background-color 0s';
				if (me._sevenrec_2.ggCurrentLogicStateBackgroundColor == 0) {
					me._sevenrec_2.style.backgroundColor="rgba(24,83,155,0.666667)";
				}
				else {
					me._sevenrec_2.style.backgroundColor="rgba(0,0,0,0.588235)";
				}
			}
		}
		me._sevenrec_2.ggUpdatePosition=function (useTransition) {
		}
		me._bush_campus.appendChild(me._sevenrec_2);
		el=me._seventext_2=document.createElement('div');
		els=me._seventext_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Seven-text_2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text lumination";
		el.ggType='text';
		hs ='';
		hs+='height : 29px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 147px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 147px;';
		hs+='height: 29px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Bush Campus";
		el.appendChild(els);
		me._seventext_2.ggIsActive=function() {
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
		me._seventext_2.ggUpdatePosition=function (useTransition) {
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
		me._bush_campus.appendChild(me._seventext_2);
		me._scrollarea_1__content.appendChild(me._bush_campus);
		el=me._kindergarten=document.createElement('div');
		el.ggId="Kindergarten";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 116px;';
		hs+='left : -340px;';
		hs+='position : absolute;';
		hs+='top : 748px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._kindergarten.ggIsActive=function() {
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
		me._kindergarten.logicBlock_position = function() {
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
			if (me._kindergarten.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._kindergarten.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._kindergarten.style[domTransition]='left 0s, top 0s';
				if (me._kindergarten.ggCurrentLogicStatePosition == 0) {
					me._kindergarten.style.left='0px';
					me._kindergarten.style.top='353px';
				}
				else {
					me._kindergarten.style.left='-340px';
					me._kindergarten.style.top='748px';
				}
			}
		}
		me._kindergarten.onclick=function (e) {
			player.openNext("{node6}","");
		}
		me._kindergarten.onmouseover=function (e) {
			me.elementMouseOver['kindergarten']=true;
			me._sevenrec_1.logicBlock_backgroundcolor();
		}
		me._kindergarten.onmouseout=function (e) {
			me.elementMouseOver['kindergarten']=false;
			me._sevenrec_1.logicBlock_backgroundcolor();
		}
		me._kindergarten.ontouchend=function (e) {
			me.elementMouseOver['kindergarten']=false;
			me._sevenrec_1.logicBlock_backgroundcolor();
		}
		me._kindergarten.ggUpdatePosition=function (useTransition) {
		}
		el=me._sevenimage_1=document.createElement('div');
		els=me._sevenimage_1__img=document.createElement('img');
		els.className='ggskin ggskin_sevenimage_1';
		hs=basePath + 'images/sevenimage_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Seven-Image_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 116px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._sevenimage_1.ggIsActive=function() {
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
		me._sevenimage_1.ggUpdatePosition=function (useTransition) {
		}
		me._kindergarten.appendChild(me._sevenimage_1);
		el=me._sevenrec_1=document.createElement('div');
		el.ggId="Seven-rec_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 116px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._sevenrec_1.ggIsActive=function() {
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
		me._sevenrec_1.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['kindergarten'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._sevenrec_1.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._sevenrec_1.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._sevenrec_1.style[domTransition]='background-color 0s';
				if (me._sevenrec_1.ggCurrentLogicStateBackgroundColor == 0) {
					me._sevenrec_1.style.backgroundColor="rgba(24,83,155,0.666667)";
				}
				else {
					me._sevenrec_1.style.backgroundColor="rgba(0,0,0,0.588235)";
				}
			}
		}
		me._sevenrec_1.ggUpdatePosition=function (useTransition) {
		}
		me._kindergarten.appendChild(me._sevenrec_1);
		el=me._seventext_1=document.createElement('div');
		els=me._seventext_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Seven-text_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text lumination";
		el.ggType='text';
		hs ='';
		hs+='height : 29px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 147px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 147px;';
		hs+='height: 29px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Kindergarten";
		el.appendChild(els);
		me._seventext_1.ggIsActive=function() {
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
		me._seventext_1.ggUpdatePosition=function (useTransition) {
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
		me._kindergarten.appendChild(me._seventext_1);
		me._scrollarea_1__content.appendChild(me._kindergarten);
		el=me._hall=document.createElement('div');
		el.ggId="Hall";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 116px;';
		hs+='left : -340px;';
		hs+='position : absolute;';
		hs+='top : 633px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hall.ggIsActive=function() {
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
		me._hall.logicBlock_position = function() {
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
			if (me._hall.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._hall.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._hall.style[domTransition]='left 0s, top 0s';
				if (me._hall.ggCurrentLogicStatePosition == 0) {
					me._hall.style.left='0px';
					me._hall.style.top='353px';
				}
				else {
					me._hall.style.left='-340px';
					me._hall.style.top='633px';
				}
			}
		}
		me._hall.onclick=function (e) {
			player.openNext("{node4}","");
		}
		me._hall.onmouseover=function (e) {
			me.elementMouseOver['hall']=true;
			me._sevenrec.logicBlock_backgroundcolor();
		}
		me._hall.onmouseout=function (e) {
			me.elementMouseOver['hall']=false;
			me._sevenrec.logicBlock_backgroundcolor();
		}
		me._hall.ontouchend=function (e) {
			me.elementMouseOver['hall']=false;
			me._sevenrec.logicBlock_backgroundcolor();
		}
		me._hall.ggUpdatePosition=function (useTransition) {
		}
		el=me._sevenimage=document.createElement('div');
		els=me._sevenimage__img=document.createElement('img');
		els.className='ggskin ggskin_sevenimage';
		hs=basePath + 'images/sevenimage.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Seven-Image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 116px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._sevenimage.ggIsActive=function() {
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
		me._sevenimage.ggUpdatePosition=function (useTransition) {
		}
		me._hall.appendChild(me._sevenimage);
		el=me._sevenrec=document.createElement('div');
		el.ggId="Seven-rec";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 116px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._sevenrec.ggIsActive=function() {
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
		me._sevenrec.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['hall'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._sevenrec.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._sevenrec.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._sevenrec.style[domTransition]='background-color 0s';
				if (me._sevenrec.ggCurrentLogicStateBackgroundColor == 0) {
					me._sevenrec.style.backgroundColor="rgba(24,83,155,0.666667)";
				}
				else {
					me._sevenrec.style.backgroundColor="rgba(0,0,0,0.588235)";
				}
			}
		}
		me._sevenrec.ggUpdatePosition=function (useTransition) {
		}
		me._hall.appendChild(me._sevenrec);
		el=me._seventext=document.createElement('div');
		els=me._seventext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Seven-text";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text lumination";
		el.ggType='text';
		hs ='';
		hs+='height : 29px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 147px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 147px;';
		hs+='height: 29px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Hall";
		el.appendChild(els);
		me._seventext.ggIsActive=function() {
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
		me._seventext.ggUpdatePosition=function (useTransition) {
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
		me._hall.appendChild(me._seventext);
		me._scrollarea_1__content.appendChild(me._hall);
		el=me._five=document.createElement('div');
		el.ggId="Five";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 116px;';
		hs+='left : -340px;';
		hs+='position : absolute;';
		hs+='top : 518px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._five.ggIsActive=function() {
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
		me._five.logicBlock_position = function() {
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
			if (me._five.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._five.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._five.style[domTransition]='left 0s, top 0s';
				if (me._five.ggCurrentLogicStatePosition == 0) {
					me._five.style.left='0px';
					me._five.style.top='353px';
				}
				else {
					me._five.style.left='-340px';
					me._five.style.top='518px';
				}
			}
		}
		me._five.onclick=function (e) {
			player.openNext("{node12}","");
		}
		me._five.onmouseover=function (e) {
			me.elementMouseOver['five']=true;
			me._fiverec.logicBlock_backgroundcolor();
		}
		me._five.onmouseout=function (e) {
			me.elementMouseOver['five']=false;
			me._fiverec.logicBlock_backgroundcolor();
		}
		me._five.ontouchend=function (e) {
			me.elementMouseOver['five']=false;
			me._fiverec.logicBlock_backgroundcolor();
		}
		me._five.ggUpdatePosition=function (useTransition) {
		}
		el=me._fiveimage=document.createElement('div');
		els=me._fiveimage__img=document.createElement('img');
		els.className='ggskin ggskin_fiveimage';
		hs=basePath + 'images/fiveimage.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Five-Image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 116px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fiveimage.ggIsActive=function() {
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
		me._fiveimage.ggUpdatePosition=function (useTransition) {
		}
		me._five.appendChild(me._fiveimage);
		el=me._fiverec=document.createElement('div');
		el.ggId="Five-rec";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 116px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fiverec.ggIsActive=function() {
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
		me._fiverec.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['five'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._fiverec.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._fiverec.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._fiverec.style[domTransition]='background-color 0s';
				if (me._fiverec.ggCurrentLogicStateBackgroundColor == 0) {
					me._fiverec.style.backgroundColor="rgba(24,83,155,0.666667)";
				}
				else {
					me._fiverec.style.backgroundColor="rgba(0,0,0,0.588235)";
				}
			}
		}
		me._fiverec.ggUpdatePosition=function (useTransition) {
		}
		me._five.appendChild(me._fiverec);
		el=me._fivetext=document.createElement('div');
		els=me._fivetext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Five-text";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text lumination";
		el.ggType='text';
		hs ='';
		hs+='height : 29px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 147px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 147px;';
		hs+='height: 29px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="School Yard";
		el.appendChild(els);
		me._fivetext.ggIsActive=function() {
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
		me._fivetext.ggUpdatePosition=function (useTransition) {
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
		me._five.appendChild(me._fivetext);
		me._scrollarea_1__content.appendChild(me._five);
		el=me._six=document.createElement('div');
		el.ggId="Six";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 116px;';
		hs+='left : -340px;';
		hs+='position : absolute;';
		hs+='top : 403px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._six.ggIsActive=function() {
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
		me._six.logicBlock_position = function() {
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
			if (me._six.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._six.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._six.style[domTransition]='left 0s, top 0s';
				if (me._six.ggCurrentLogicStatePosition == 0) {
					me._six.style.left='0px';
					me._six.style.top='353px';
				}
				else {
					me._six.style.left='-340px';
					me._six.style.top='403px';
				}
			}
		}
		me._six.onclick=function (e) {
			player.openNext("{node1}","");
		}
		me._six.onmouseover=function (e) {
			me.elementMouseOver['six']=true;
			me._sixrec.logicBlock_backgroundcolor();
		}
		me._six.onmouseout=function (e) {
			me.elementMouseOver['six']=false;
			me._sixrec.logicBlock_backgroundcolor();
		}
		me._six.ontouchend=function (e) {
			me.elementMouseOver['six']=false;
			me._sixrec.logicBlock_backgroundcolor();
		}
		me._six.ggUpdatePosition=function (useTransition) {
		}
		el=me._siximage=document.createElement('div');
		els=me._siximage__img=document.createElement('img');
		els.className='ggskin ggskin_siximage';
		hs=basePath + 'images/siximage.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Six-Image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 116px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._siximage.ggIsActive=function() {
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
		me._siximage.ggUpdatePosition=function (useTransition) {
		}
		me._six.appendChild(me._siximage);
		el=me._sixrec=document.createElement('div');
		el.ggId="Six-rec";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 116px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._sixrec.ggIsActive=function() {
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
		me._sixrec.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['six'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._sixrec.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._sixrec.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._sixrec.style[domTransition]='background-color 0s';
				if (me._sixrec.ggCurrentLogicStateBackgroundColor == 0) {
					me._sixrec.style.backgroundColor="rgba(24,83,155,0.666667)";
				}
				else {
					me._sixrec.style.backgroundColor="rgba(0,0,0,0.588235)";
				}
			}
		}
		me._sixrec.ggUpdatePosition=function (useTransition) {
		}
		me._six.appendChild(me._sixrec);
		el=me._sixtext=document.createElement('div');
		els=me._sixtext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Six-text";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text lumination";
		el.ggType='text';
		hs ='';
		hs+='height : 29px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 141px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 141px;';
		hs+='height: 29px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Upstairs Classroom";
		el.appendChild(els);
		me._sixtext.ggIsActive=function() {
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
		me._sixtext.ggUpdatePosition=function (useTransition) {
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
		me._six.appendChild(me._sixtext);
		me._scrollarea_1__content.appendChild(me._six);
		el=me._four=document.createElement('div');
		el.ggId="Four";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 116px;';
		hs+='left : -340px;';
		hs+='position : absolute;';
		hs+='top : 288px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._four.ggIsActive=function() {
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
		me._four.logicBlock_position = function() {
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
			if (me._four.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._four.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._four.style[domTransition]='left 0s, top 0s';
				if (me._four.ggCurrentLogicStatePosition == 0) {
					me._four.style.left='0px';
					me._four.style.top='353px';
				}
				else {
					me._four.style.left='-340px';
					me._four.style.top='288px';
				}
			}
		}
		me._four.onclick=function (e) {
			player.openNext("{node7}","");
		}
		me._four.onmouseover=function (e) {
			me.elementMouseOver['four']=true;
			me._fourrec.logicBlock_backgroundcolor();
		}
		me._four.onmouseout=function (e) {
			me.elementMouseOver['four']=false;
			me._fourrec.logicBlock_backgroundcolor();
		}
		me._four.ontouchend=function (e) {
			me.elementMouseOver['four']=false;
			me._fourrec.logicBlock_backgroundcolor();
		}
		me._four.ggUpdatePosition=function (useTransition) {
		}
		el=me._fourimage=document.createElement('div');
		els=me._fourimage__img=document.createElement('img');
		els.className='ggskin ggskin_fourimage';
		hs=basePath + 'images/fourimage.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Four-Image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 116px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fourimage.ggIsActive=function() {
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
		me._fourimage.ggUpdatePosition=function (useTransition) {
		}
		me._four.appendChild(me._fourimage);
		el=me._fourrec=document.createElement('div');
		el.ggId="Four-rec";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 116px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fourrec.ggIsActive=function() {
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
		me._fourrec.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['four'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._fourrec.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._fourrec.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._fourrec.style[domTransition]='background-color 0s';
				if (me._fourrec.ggCurrentLogicStateBackgroundColor == 0) {
					me._fourrec.style.backgroundColor="rgba(24,83,155,0.666667)";
				}
				else {
					me._fourrec.style.backgroundColor="rgba(0,0,0,0.588235)";
				}
			}
		}
		me._fourrec.ggUpdatePosition=function (useTransition) {
		}
		me._four.appendChild(me._fourrec);
		el=me._fourtext=document.createElement('div');
		els=me._fourtext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Four-text";
		el.ggDx=1;
		el.ggDy=6;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text lumination";
		el.ggType='text';
		hs ='';
		hs+='height : 34px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 147px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 147px;';
		hs+='height: 34px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Library";
		el.appendChild(els);
		me._fourtext.ggIsActive=function() {
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
		me._fourtext.ggUpdatePosition=function (useTransition) {
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
		me._four.appendChild(me._fourtext);
		me._scrollarea_1__content.appendChild(me._four);
		el=me._three=document.createElement('div');
		el.ggId="Three";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 116px;';
		hs+='left : -340px;';
		hs+='position : absolute;';
		hs+='top : 172px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._three.ggIsActive=function() {
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
		me._three.logicBlock_position = function() {
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
			if (me._three.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._three.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._three.style[domTransition]='left 0s, top 0s';
				if (me._three.ggCurrentLogicStatePosition == 0) {
					me._three.style.left='0px';
					me._three.style.top='218px';
				}
				else {
					me._three.style.left='-340px';
					me._three.style.top='172px';
				}
			}
		}
		me._three.onclick=function (e) {
			player.openNext("{node3}","");
		}
		me._three.onmouseover=function (e) {
			me.elementMouseOver['three']=true;
			me._threerec.logicBlock_backgroundcolor();
		}
		me._three.onmouseout=function (e) {
			me.elementMouseOver['three']=false;
			me._threerec.logicBlock_backgroundcolor();
		}
		me._three.ontouchend=function (e) {
			me.elementMouseOver['three']=false;
			me._threerec.logicBlock_backgroundcolor();
		}
		me._three.ggUpdatePosition=function (useTransition) {
		}
		el=me._threeimage=document.createElement('div');
		els=me._threeimage__img=document.createElement('img');
		els.className='ggskin ggskin_threeimage';
		hs=basePath + 'images/threeimage.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Three-Image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 116px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._threeimage.ggIsActive=function() {
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
		me._threeimage.ggUpdatePosition=function (useTransition) {
		}
		me._three.appendChild(me._threeimage);
		el=me._threerec=document.createElement('div');
		el.ggId="Three-rec";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 117px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._threerec.ggIsActive=function() {
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
		me._threerec.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['three'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._threerec.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._threerec.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._threerec.style[domTransition]='background-color 0s';
				if (me._threerec.ggCurrentLogicStateBackgroundColor == 0) {
					me._threerec.style.backgroundColor="rgba(24,83,155,0.666667)";
				}
				else {
					me._threerec.style.backgroundColor="rgba(0,0,0,0.588235)";
				}
			}
		}
		me._threerec.ggUpdatePosition=function (useTransition) {
		}
		me._three.appendChild(me._threerec);
		el=me._threetext=document.createElement('div');
		els=me._threetext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Three-text";
		el.ggDx=0;
		el.ggDy=7;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text lumination";
		el.ggType='text';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 146px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 146px;';
		hs+='height: 32px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Front Office";
		el.appendChild(els);
		me._threetext.ggIsActive=function() {
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
		me._threetext.ggUpdatePosition=function (useTransition) {
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
		me._three.appendChild(me._threetext);
		me._scrollarea_1__content.appendChild(me._three);
		el=me._two=document.createElement('div');
		el.ggId="Two";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 116px;';
		hs+='left : -340px;';
		hs+='position : absolute;';
		hs+='top : 64px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._two.ggIsActive=function() {
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
		me._two.logicBlock_position = function() {
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
			if (me._two.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._two.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._two.style[domTransition]='left 0s, top 0s';
				if (me._two.ggCurrentLogicStatePosition == 0) {
					me._two.style.left='0px';
					me._two.style.top='83px';
				}
				else {
					me._two.style.left='-340px';
					me._two.style.top='64px';
				}
			}
		}
		me._two.onclick=function (e) {
			player.openNext("{node2}","");
		}
		me._two.onmouseover=function (e) {
			me.elementMouseOver['two']=true;
			me._tworec.logicBlock_backgroundcolor();
		}
		me._two.onmouseout=function (e) {
			me.elementMouseOver['two']=false;
			me._tworec.logicBlock_backgroundcolor();
		}
		me._two.ontouchend=function (e) {
			me.elementMouseOver['two']=false;
			me._tworec.logicBlock_backgroundcolor();
		}
		me._two.ggUpdatePosition=function (useTransition) {
		}
		el=me._twoimage=document.createElement('div');
		els=me._twoimage__img=document.createElement('img');
		els.className='ggskin ggskin_twoimage';
		hs=basePath + 'images/twoimage.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Two-Image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 116px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._twoimage.ggIsActive=function() {
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
		me._twoimage.ggUpdatePosition=function (useTransition) {
		}
		me._two.appendChild(me._twoimage);
		el=me._tworec=document.createElement('div');
		el.ggId="Two-rec";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 116px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tworec.ggIsActive=function() {
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
		me._tworec.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['two'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._tworec.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._tworec.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._tworec.style[domTransition]='background-color 0s';
				if (me._tworec.ggCurrentLogicStateBackgroundColor == 0) {
					me._tworec.style.backgroundColor="rgba(24,83,155,0.666667)";
				}
				else {
					me._tworec.style.backgroundColor="rgba(0,0,0,0.588235)";
				}
			}
		}
		me._tworec.ggUpdatePosition=function (useTransition) {
		}
		me._two.appendChild(me._tworec);
		el=me._twotext=document.createElement('div');
		els=me._twotext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Two-text";
		el.ggDx=1;
		el.ggDy=6;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text lumination";
		el.ggType='text';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 157px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 157px;';
		hs+='height: 32px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Entrance";
		el.appendChild(els);
		me._twotext.ggIsActive=function() {
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
		me._twotext.ggUpdatePosition=function (useTransition) {
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
		me._two.appendChild(me._twotext);
		me._scrollarea_1__content.appendChild(me._two);
		el=me._one=document.createElement('div');
		el.ggId="One";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 116px;';
		hs+='left : -340px;';
		hs+='position : absolute;';
		hs+='top : -52px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._one.ggIsActive=function() {
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
		me._one.logicBlock_position = function() {
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
			if (me._one.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._one.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._one.style[domTransition]='left 0s, top 0s';
				if (me._one.ggCurrentLogicStatePosition == 0) {
					me._one.style.left='0px';
					me._one.style.top='-52px';
				}
				else {
					me._one.style.left='-340px';
					me._one.style.top='-52px';
				}
			}
		}
		me._one.onclick=function (e) {
			player.openNext("{node16}","");
		}
		me._one.onmouseover=function (e) {
			me.elementMouseOver['one']=true;
			me._onerec.logicBlock_backgroundcolor();
		}
		me._one.onmouseout=function (e) {
			me.elementMouseOver['one']=false;
			me._onerec.logicBlock_backgroundcolor();
		}
		me._one.ontouchend=function (e) {
			me.elementMouseOver['one']=false;
			me._onerec.logicBlock_backgroundcolor();
		}
		me._one.ggUpdatePosition=function (useTransition) {
		}
		el=me._oneimage=document.createElement('div');
		els=me._oneimage__img=document.createElement('img');
		els.className='ggskin ggskin_oneimage';
		hs=basePath + 'images/oneimage.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="One-Image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 116px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._oneimage.ggIsActive=function() {
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
		me._oneimage.ggUpdatePosition=function (useTransition) {
		}
		me._one.appendChild(me._oneimage);
		el=me._onerec=document.createElement('div');
		el.ggId="One-rec";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 117px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._onerec.ggIsActive=function() {
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
		me._onerec.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['one'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._onerec.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._onerec.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._onerec.style[domTransition]='background-color 0s';
				if (me._onerec.ggCurrentLogicStateBackgroundColor == 0) {
					me._onerec.style.backgroundColor="rgba(24,83,155,0.666667)";
				}
				else {
					me._onerec.style.backgroundColor="rgba(0,0,0,0.588235)";
				}
			}
		}
		me._onerec.ggUpdatePosition=function (useTransition) {
		}
		me._one.appendChild(me._onerec);
		el=me._onetext=document.createElement('div');
		els=me._onetext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="One-text";
		el.ggDx=0;
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text lumination";
		el.ggType='text';
		hs ='';
		hs+='height : 26px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 26px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Aerial View";
		el.appendChild(els);
		me._onetext.ggIsActive=function() {
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
		me._onetext.ggUpdatePosition=function (useTransition) {
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
		me._one.appendChild(me._onetext);
		me._scrollarea_1__content.appendChild(me._one);
		me._side_nav.appendChild(me._scrollarea_1);
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDEuMjIgNDIuODMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzMiIGRhdGEtbmFtZT0iTGF5ZXIgMyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2ZpbGw6IzEwMWI0OTt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT4KIDwvZGVmcz4KIDxjaXJjbGUgcj0iMTguMjciIGNsYXNzPSJjbHMtMSIgY3g9IjIwLjY3IiBjeT0iMjEuNTkiLz4KIDxyZWN0IHg9IjE4LjM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOS4yOSAyMC45Nykgcm90YXRlKC00NSkiIGhlaWdodD0iMjQuNjUiIHJ4PSIxLjI4IiB3aWR0aD0iNC42NSIgY2xhc3'+
			'M9ImNscy0yIiB5PSI5LjM4Ii8+CiA8cmVjdCB4PSIxOC4zNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjEuMjEgLTguMzMpIHJvdGF0ZSg0NSkiIGhlaWdodD0iMjQuNjUiIHJ4PSIxLjM2IiB3aWR0aD0iNC42NSIgY2xhc3M9ImNscy0yIiB5PSI5LjEyIi8+Cjwvc3ZnPgo=';
		me._svg_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=78;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 33px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 119px;';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_1.ggIsActive=function() {
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
		me._svg_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['svg_1'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_1.style[domTransition]='' + cssPrefix + 'transform 0s, opacity 0s';
				if (me._svg_1.ggCurrentLogicStateScaling == 0) {
					me._svg_1.ggParameter.sx = 1.15;
					me._svg_1.ggParameter.sy = 1.15;
					me._svg_1.style[domTransform]=parameterToTransform(me._svg_1.ggParameter);
				}
				else {
					me._svg_1.ggParameter.sx = 1;
					me._svg_1.ggParameter.sy = 1;
					me._svg_1.style[domTransform]=parameterToTransform(me._svg_1.ggParameter);
				}
			}
		}
		me._svg_1.logicBlock_visible = function() {
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
			if (me._svg_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_1.style[domTransition]='' + cssPrefix + 'transform 0s, opacity 0s';
				if (me._svg_1.ggCurrentLogicStateVisible == 0) {
					me._svg_1.style.visibility=(Number(me._svg_1.style.opacity)>0||!me._svg_1.style.opacity)?'inherit':'hidden';
					me._svg_1.ggVisible=true;
				}
				else {
					me._svg_1.style.visibility="hidden";
					me._svg_1.ggVisible=false;
				}
			}
		}
		me._svg_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['svg_1'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._svg_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._svg_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._svg_1.style[domTransition]='' + cssPrefix + 'transform 0s, opacity 0s';
				if (me._svg_1.ggCurrentLogicStateAlpha == 0) {
					me._svg_1.style.visibility=me._svg_1.ggVisible?'inherit':'hidden';
					me._svg_1.style.opacity=1;
				}
				else {
					me._svg_1.style.visibility=me._svg_1.ggVisible?'inherit':'hidden';
					me._svg_1.style.opacity=1;
				}
			}
		}
		me._svg_1.onclick=function (e) {
			player.setVariableValue('category_visible', false);
		}
		me._svg_1.onmouseover=function (e) {
			me.elementMouseOver['svg_1']=true;
			me._svg_1.logicBlock_scaling();
			me._svg_1.logicBlock_alpha();
		}
		me._svg_1.onmouseout=function (e) {
			me.elementMouseOver['svg_1']=false;
			me._svg_1.logicBlock_scaling();
			me._svg_1.logicBlock_alpha();
		}
		me._svg_1.ontouchend=function (e) {
			me.elementMouseOver['svg_1']=false;
			me._svg_1.logicBlock_scaling();
			me._svg_1.logicBlock_alpha();
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
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
		me._side_nav.appendChild(me._svg_1);
		me.divSkin.appendChild(me._side_nav);
		el=me._menu_closed=document.createElement('div');
		el.ggId="Menu Closed";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 48px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 149px;';
		hs+='visibility : inherit;';
		hs+='width : 184px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_closed.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_closed.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('category_visible') == true)) || 
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_closed.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_closed.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_closed.style[domTransition]='';
				if (me._menu_closed.ggCurrentLogicStateVisible == 0) {
					me._menu_closed.style.visibility="hidden";
					me._menu_closed.ggVisible=false;
				}
				else {
					me._menu_closed.style.visibility=(Number(me._menu_closed.style.opacity)>0||!me._menu_closed.style.opacity)?'inherit':'hidden';
					me._menu_closed.ggVisible=true;
				}
			}
		}
		me._menu_closed.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_open=document.createElement('div');
		els=me._menu_open__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjYuMDYgMzIuOTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtpc29sYXRpb246aXNvbGF0ZTt9LmNscy0ye29wYWNpdHk6MC4xODttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ze2ZpbGw6IzE4NTM5Yjt9LmNscy00e2ZpbGw6bm9uZTtzdHJva2U6I2ZmZjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPgogPC9kZWZzPgogPGcgY2xhc3M9ImNscy0xIj4KICA8ZyBpZD0iTGF5ZX'+
			'JfMSIgZGF0YS1uYW1lPSJMYXllciAxIj4KICAgPGltYWdlIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNDQgLTAuNjcpIiBoZWlnaHQ9IjM2IiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJzQUFBQWtDQVlBQUFCNCtFRXRBQUFBQ1hCSVdYTUFBQXNTQUFBTEVnSFMzWDc4QUFBREVVbEVRVlJJUzYzWDNXOGJSUlFGOE44NFR0cEMxUVJLU0p2U0NxbDk0T3NCQ1lrWC9uaDQ0YUZVSkJKUytCQUlwTkkyRUJOVVd0clEydkh3Y0dmdHpkaE9IRHRIV3EzdFhjL1pjKzZkTTdNcDU2eEJTaWxwSWJjdlhnQlNNMTVLcVlOVnJKVnJyekhBOEtKSVU4'+
			'NjVJYnFDVFd3aDRSQi80MS8wYzg3RDJjUE1oMVNPTld6ak0zd3FGUDZHbjh2NUFFYzU1K01aNDh5RmJqbGZFbVNmNHd0Y3haLzRBZmV4aTBjcHBaZVdzTFVybEszZ1RXSGpOcTZYOHcyc0M2VmQ3T041U21raFc3dklPTVlSL3NGLzVmY3JRbkZYa0szamUveUtnNVRTa1hPcWJHeDhoVC93RXo0U0NqZndCbTRMMGkzY3hUZjR6Z0lxdXpubm5GSWFpTTc3cFJ6dmk3cXRDY0pidUlaM2hjWFhzYWMwVDBwcHJ1WnBsQTN4QWcveEl6NFdBNitpSTBqZndtVlIyeHRDNWJtYXAwc2tSVXFwajZkNGpKNm8zZFZ5WDlORXRjcHpOVTkzL0ZFV0JEMUIrRlFNMWhGa25GUlpOOCtadGs0ajJ4ZFdmb2gzeEdBcnJmdm'+
			'FVNlZ1bnZ2WUViWk9FSTdJem1pVXRyb0dIWk8yWGpPZXU3L1hoRzFsVERiS0orS3BtM0N1TWMzV1RybVdsY1pwYW5pQ3JOVW96MFJjUFVPLy9MRlcxcUMybFhqb2daaS9UMUpLcjNQT3VWWkdETndYUzB4RE5BOGFXOThUL3owVURoMlc3eVBKMHpBdlNSdnRwV3BiZEdsVHcxUEpMaHlua2MycTBXa1lpa0R2NFlrSTlvSGkwalN5Wkx3OVdEVS82UkF2OFVoRTJJNEloMWZORFNjYXBHeDRWc1Y4MlNybnN3aXprMFFQOEtVZzY0a3RSV1p5bmlYalJMZ25KdXFzT1VhUTlQRmNKTSszZ3VpQklENXE1K1Ewc3N2RzNiUmh0ckpHellISXhEMnR1REpsenpJaWExbTRJU0pvVXhEWFJMVnR1NEprRk1SbWJJN2F5'+
			'am9pQmU3Z0E5dzBTVmJidG1OY24vM3krK2xMVEZIVnhkdWlWdmZLNTlHRU5OdTJYYUZ3dnNYVHVGWTNoYW83UW1YSEVyYlZxTWsyUmIwMmpIZGVDOXRXbzl1eWNGMG9heHFESlcycjBTaGJFelc2TGRhbWpoanNzU1ZzcTFGdkN4ckwvaEpyMlM2K3NxQnROVmFNdXkwSlJVTVJNM3Y0V3FUQ1EwRTBPSTl0TmFhOU10MFNuZmhDSkhmUGdyYlZtUFl5ZUVrb1BoYUp2YkJ0TlZMYmxkWnJibExXb0dWc3EvRS9OZnlQcWM5eGVia0FBQUFBU1VWT1JLNUNZSUk9IiB3aWR0aD0iMjciIGNsYXNzPSJjbHMtMiIvPgogICA8cGF0aCBkPSJNMy43MywyOSw3LDIwLjY4YTExLjU0LDExLjU0LDAsMCwwLDAtOC41N0'+
			'wzLjczLDMuNzRjLS4zMi0uOC43Ny0xLjQ2LDEuNS0uOTFMMjAuOTQsMTQuNTJhMi4yNywyLjI3LDAsMCwxLDAsMy43NEw1LjIzLDMwQzQuNSwzMC41MSwzLjQxLDI5Ljg1LDMuNzMsMjlaIiBjbGFzcz0iY2xzLTMiLz4KICAgPHBhdGggZD0iTTMuNzMsMjksNywyMC42OGExMS41NCwxMS41NCwwLDAsMCwwLTguNTdMMy43MywzLjc0Yy0uMzItLjguNzctMS40NiwxLjUtLjkxTDIwLjk0LDE0LjUyYTIuMjcsMi4yNywwLDAsMSwwLDMuNzRMNS4yMywzMEM0LjUsMzAuNTEsMy40MSwyOS44NSwzLjczLDI5WiIgY2xhc3M9ImNscy00Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._menu_open__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_open";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 47px;';
		hs+='left : 117px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 47px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_open.ggIsActive=function() {
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
		me._menu_open.logicBlock_position = function() {
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
			if (me._menu_open.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._menu_open.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._menu_open.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, opacity 0s';
				if (me._menu_open.ggCurrentLogicStatePosition == 0) {
					me._menu_open.style.left='20px';
					me._menu_open.style.top='60px';
				}
				else {
					me._menu_open.style.left='117px';
					me._menu_open.style.top='0px';
				}
			}
		}
		me._menu_open.logicBlock_scaling = function() {
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
			if (me._menu_open.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._menu_open.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._menu_open.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, opacity 0s';
				if (me._menu_open.ggCurrentLogicStateScaling == 0) {
					me._menu_open.ggParameter.sx = 0.5;
					me._menu_open.ggParameter.sy = 0.5;
					me._menu_open.style[domTransform]=parameterToTransform(me._menu_open.ggParameter);
				}
				else {
					me._menu_open.ggParameter.sx = 1;
					me._menu_open.ggParameter.sy = 1;
					me._menu_open.style[domTransform]=parameterToTransform(me._menu_open.ggParameter);
				}
			}
		}
		me._menu_open.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('category_visible') == true)) || 
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_open.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_open.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_open.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, opacity 0s';
				if (me._menu_open.ggCurrentLogicStateVisible == 0) {
					me._menu_open.style.visibility="hidden";
					me._menu_open.ggVisible=false;
				}
				else {
					me._menu_open.style.visibility=(Number(me._menu_open.style.opacity)>0||!me._menu_open.style.opacity)?'inherit':'hidden';
					me._menu_open.ggVisible=true;
				}
			}
		}
		me._menu_open.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['menu_open'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu_open.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu_open.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu_open.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, opacity 0s';
				if (me._menu_open.ggCurrentLogicStateAlpha == 0) {
					me._menu_open.style.visibility=me._menu_open.ggVisible?'inherit':'hidden';
					me._menu_open.style.opacity=1;
				}
				else {
					me._menu_open.style.visibility=me._menu_open.ggVisible?'inherit':'hidden';
					me._menu_open.style.opacity=0.8;
				}
			}
		}
		me._menu_open.onclick=function (e) {
			player.setVariableValue('category_visible', !player.getVariableValue('category_visible'));
		}
		me._menu_open.onmouseover=function (e) {
			me.elementMouseOver['menu_open']=true;
			me._menu_open.logicBlock_alpha();
		}
		me._menu_open.onmouseout=function (e) {
			me.elementMouseOver['menu_open']=false;
			me._menu_open.logicBlock_alpha();
		}
		me._menu_open.ontouchend=function (e) {
			me.elementMouseOver['menu_open']=false;
			me._menu_open.logicBlock_alpha();
		}
		me._menu_open.ggUpdatePosition=function (useTransition) {
		}
		me._menu_closed.appendChild(me._menu_open);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text lumination";
		el.ggType='text';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 39px;';
		hs+='position : absolute;';
		hs+='top : 14px;';
		hs+='visibility : inherit;';
		hs+='width : 82px;';
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
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Open Menu";
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
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
		me._text_1.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((80-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._menu_closed.appendChild(me._text_1);
		me.divSkin.appendChild(me._menu_closed);
		el=me._buttons=document.createElement('div');
		el.ggId="Buttons";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 21px;';
		hs+='left : 187px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 68px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._buttons.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._buttons.logicBlock_position = function() {
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
			if (me._buttons.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._buttons.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._buttons.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._buttons.ggCurrentLogicStatePosition == 0) {
					me._buttons.style.left='100px';
					me._buttons.style.top='-5px';
				}
				else {
					me._buttons.style.left='187px';
					me._buttons.style.top='0px';
				}
			}
		}
		me._buttons.logicBlock_scaling = function() {
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
			if (me._buttons.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._buttons.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._buttons.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._buttons.ggCurrentLogicStateScaling == 0) {
					me._buttons.ggParameter.sx = 0.5;
					me._buttons.ggParameter.sy = 0.5;
					me._buttons.style[domTransform]=parameterToTransform(me._buttons.ggParameter);
				}
				else {
					me._buttons.ggParameter.sx = 1;
					me._buttons.ggParameter.sy = 1;
					me._buttons.style[domTransform]=parameterToTransform(me._buttons.ggParameter);
				}
			}
		}
		me._buttons.ggUpdatePosition=function (useTransition) {
		}
		el=me._korean=document.createElement('div');
		els=me._korean__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDkuODUgMjAuNjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtpc29sYXRpb246aXNvbGF0ZTt9LmNscy0ye29wYWNpdHk6MC4zO21peC1ibGVuZC1tb2RlOm11bHRpcGx5O30uY2xzLTN7ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudCk7fTwvc3R5bGU+CiAgPGxpbmVhckdyYWRpZW50IHgyPSIyNS42NiIgaWQ9ImxpbmVhci1ncmFkaWVudCIgeTE9IjE3LjM2IiB4MT0iMjUuNjYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU'+
			'9uVXNlIj4KICAgPHN0b3Agc3RvcC1jb2xvcj0iIzE4NTM5YiIgb2Zmc2V0PSIwIi8+CiAgIDxzdG9wIHN0b3AtY29sb3I9IiMyODM3NzEiIG9mZnNldD0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiA8L2RlZnM+CiA8ZyBjbGFzcz0iY2xzLTEiPgogIDxnIGlkPSJMYXllcl8zIiBkYXRhLW5hbWU9IkxheWVyIDMiPgogICA8aW1hZ2UgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4zNSAtMi43NikiIGhlaWdodD0iMjUiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRE1BQUFBWkNBWUFBQUNjbGhaNkFBQUFDWEJJV1hNQUFBc1NBQUFMRWdI'+
			'UzNYNzhBQUFCN1VsRVFWUllSOVhZUVU5VFFSU0c0V2NRRVJOTkRNU1Z4cjMrQWRmK2N0ZEtZT01DWTBpTUJDVlNhU3FLYlNudHNEZ3o5QklvNm9MbTNpK1pUTnA3cDVtMzN6bHpaaWJsbkVGS0tRblZ2Z3ZLa0F0RXlqbExLYTFnRmV1bFgxazh2aldhNFJ3am5PZWNaMGs0Y1IrYmVJRU5yR20zUXhsbjZHTWZ4NWlzbG9mckF1UU5YdUdSOXNQOHdpN2U0bFNCU1NLME52RVNyL0ZFdTBOdGloOFlZeHYza0tvekt5TFVIZ3VRRGUyRnlRS2lMeHdaQ3JoY1lRaUhrb0NvclkyYUNvQURmTUozQWRmYUNTOVN4a1FrL0Y1cGZiR2E1YTdCekVSb2ZjR0gwcCtXN3p2bFRCWjFwVy91eWpFbXRXaDJEV2FFUTN3VT'+
			'llWFNGYm9KMDhOWEREUmNvVHN3TmZFSEFxUW53QzVCNkE1TVRmeDlFV0tIT2dwejYzTGNmTEVMTURQOHRtQTVicXJ0TURQOEVXRzFLeXIrbGVXNHFUYkRWSkFEc1psOGg4L0NwV3V1RUx2bHBxN1JMbG01dEpuNS9tdExiUE4zY0dTQks4eGhhcEtOeGFGbmV0UExkNnptSElaaTRqc0NaRXVBRFhQT043cEN3TlFmK1ZrR2ZDdlAxaFlOdWlOTmNDSjJ3VDJSNk5zQ3FJTGMraWRYWjhhaUdMMHZuNStMMCtjeU5SWWdlMkl1UitZRjhxOGdYTDNRZUlpbmVDWU9hUFVVdWd6VlRlU0pnQmlJb2pnU09iSXd0SnBLamF1bWV0cDhVUHBsZ1ZUVmNEOHJmUmEzU1ArOEtLWG11eTI0Tzh2TTc4SCtWeGQ1cys2dS80'+
			'NnByd0FBQUFCSlJVNUVya0pnZ2c9PSIgd2lkdGg9IjUxIiBjbGFzcz0iY2xzLTIiLz4KICAgPHBhdGggZD0iTTM1LDE3LjM2SDUuMjJjLTEsMC0xLjc0LTEuMS0xLjc0LTIuNDdWMEg0Ny44NUw0My43OSwxMC4xMkM0MiwxNC42LDM4LjY0LDE3LjM2LDM1LDE3LjM2WiIgY2xhc3M9ImNscy0zIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._korean__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._korean__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDkuODUgMjAuNjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtpc29sYXRpb246aXNvbGF0ZTt9LmNscy0ye29wYWNpdHk6MC4zO21peC1ibGVuZC1tb2RlOm11bHRpcGx5O30uY2xzLTN7ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudCk7fTwvc3R5bGU+CiAgPGxpbmVhckdyYWRpZW50IHgyPSIyNS42NiIgaWQ9ImxpbmVhci1ncmFkaWVudCIgeTE9IjE3LjM2IiB4MT0iMjUuNjYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU'+
			'9uVXNlIj4KICAgPHN0b3Agc3RvcC1jb2xvcj0iIzFmMzY3MiIgb2Zmc2V0PSIwIi8+CiAgIDxzdG9wIHN0b3AtY29sb3I9IiMxYjMyNWQiIG9mZnNldD0iMC4yNiIvPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjMTkyYjU4IiBvZmZzZXQ9IjAuNTEiLz4KICAgPHN0b3Agc3RvcC1jb2xvcj0iIzEzMTg0YSIgb2Zmc2V0PSIwLjg4Ii8+CiAgIDxzdG9wIHN0b3AtY29sb3I9IiMxMDEwNDQiIG9mZnNldD0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiA8L2RlZnM+CiA8ZyBjbGFzcz0iY2xzLTEiPgogIDxnIGlkPSJMYXllcl8zIiBkYXRhLW5hbWU9IkxheWVyIDMiPgogICA8aW1hZ2UgdHJhbnNmb3Jt'+
			'PSJ0cmFuc2xhdGUoMC4zNSAtMi43NCkiIGhlaWdodD0iMjUiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRE1BQUFBWkNBWUFBQUNjbGhaNkFBQUFDWEJJV1hNQUFBc1NBQUFMRWdIUzNYNzhBQUFCNlVsRVFWUllSOVhZVFU4VVFSU0Y0YWNJSUNhYUdJZ3JqWHY5QTY3OTVjYWxFdGxvSWpFa0JyOVFDQWdvTXNOZ2w0dGI1VFJJajdvQXUwOVNxVXk2YTNMZlB2ZldWOG81ZzVSU0VxcjlFSlFoRjRpVWM1WlNtc004bGtvLzF6MitOMnB3aWhGT2M4NU5FazRzWUFYM3NJeEYvWFlvNHdTN2VGZjZ5WHg1dUNSQUh1RUJidWczVElOOXZNUVRmRl'+
			'Zna2tpdEZkekhROXpTMzFTcnJyekZsc2lxUkVBUWdTL2dwZ0JaMWwrWVJqZ3h4aWQ4RVhDL1lBaTZKQ0JxNjZQYTliS0ZBekVCNUw0RzNLV01pYWlYRDlnUnMxbW12MSsvU3cyT1JMMnNDMmNHQ1pQRnVyS0hqZEwybEJSamVEQWo0Y2E2Y09kSXVJVmh3dXlJZXRuSHBMckNjR0JtRm43VlVHQm1GbjdWRUdDcUs3czZDcjlxQ0RBTnZtRVRMMHAvcHZDcitnN1Q0THRJcTFkNHJleVF6N3RDdjJFcXlIczh4MU84RVM3OTVncG45MmFjSzZqL29GeGFnMk1Cc29ySFdNTzJEbGVZd3RRaUc0dE4zSStMWHI1a3RXTTRGb0d2Q1pCVkFYYWNjNzdRRlFLbS9zbEJHZkN4UEZ2c0duUkptdUFRbjhVNnNpblNhODBV'+
			'Wk9aSHJzNk14V0wwclB5K0swNmZWNm14QU5rUXNXeWJMcEIvQk9Ic2hjWjEzTVlkY1VDcnA5Q3JVTjFFSGdxSWZiRW9qa1NOZEtaV1c2bDExVlJQbTllMGpxSlhxSnJ1SjZYUDRoYnByeWVsMUg2M0IzZG5tZWs5MkwvcUoyaWY3Z2xRUFhFd0FBQUFBRWxGVGtTdVFtQ0MiIHdpZHRoPSI1MSIgY2xhc3M9ImNscy0yIi8+CiAgIDxwYXRoIGQ9Ik0zNSwxNy4zNkg1LjIyYy0xLDAtMS43NC0xLjEtMS43NC0yLjQ3VjBINDcuODVMNDMuNzksMTAuMTJDNDIsMTQuNiwzOC42NCwxNy4zNiwzNSwxNy4zNloiIGNsYXNzPSJjbHMtMyIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._korean__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Korean";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 58px;';
		hs+='left : 96px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 195px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._korean.ggIsActive=function() {
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
			player.openUrl("https:\/\/tour.lumination.com.au\/chatswood-public-eng","_blank");
		}
		me._korean.onmouseover=function (e) {
			me._korean__img.style.visibility='hidden';
			me._korean__imgo.style.visibility='inherit';
		}
		me._korean.onmouseout=function (e) {
			me._korean__img.style.visibility='inherit';
			me._korean__imgo.style.visibility='hidden';
		}
		me._korean.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_20=document.createElement('div');
		els=me._text_20__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=-4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text korean";
		el.ggType='text';
		hs ='';
		hs+='height : 36px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 129px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 129px;';
		hs+='height: 36px;';
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
		me._korean.appendChild(me._text_20);
		me._buttons.appendChild(me._korean);
		el=me._mandarin=document.createElement('div');
		els=me._mandarin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDkuODUgMjAuNjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtpc29sYXRpb246aXNvbGF0ZTt9LmNscy0ye29wYWNpdHk6MC4zO21peC1ibGVuZC1tb2RlOm11bHRpcGx5O30uY2xzLTN7ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudCk7fTwvc3R5bGU+CiAgPGxpbmVhckdyYWRpZW50IHgyPSIyNS42NiIgaWQ9ImxpbmVhci1ncmFkaWVudCIgeTE9IjE3LjM2IiB4MT0iMjUuNjYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU'+
			'9uVXNlIj4KICAgPHN0b3Agc3RvcC1jb2xvcj0iIzE4NTM5YiIgb2Zmc2V0PSIwIi8+CiAgIDxzdG9wIHN0b3AtY29sb3I9IiMyODM3NzEiIG9mZnNldD0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiA8L2RlZnM+CiA8ZyBjbGFzcz0iY2xzLTEiPgogIDxnIGlkPSJMYXllcl8zIiBkYXRhLW5hbWU9IkxheWVyIDMiPgogICA8aW1hZ2UgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4zNSAtMi43NikiIGhlaWdodD0iMjUiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRE1BQUFBWkNBWUFBQUNjbGhaNkFBQUFDWEJJV1hNQUFBc1NBQUFMRWdI'+
			'UzNYNzhBQUFCN1VsRVFWUllSOVhZUVU5VFFSU0c0V2NRRVJOTkRNU1Z4cjMrQWRmK2N0ZEtZT01DWTBpTUJDVlNhU3FLYlNudHNEZ3o5QklvNm9MbTNpK1pUTnA3cDVtMzN6bHpaaWJsbkVGS0tRblZ2Z3ZLa0F0RXlqbExLYTFnRmV1bFgxazh2aldhNFJ3am5PZWNaMGs0Y1IrYmVJRU5yR20zUXhsbjZHTWZ4NWlzbG9mckF1UU5YdUdSOXNQOHdpN2U0bFNCU1NLME52RVNyL0ZFdTBOdGloOFlZeHYza0tvekt5TFVIZ3VRRGUyRnlRS2lMeHdaQ3JoY1lRaUhrb0NvclkyYUNvQURmTUozQWRmYUNTOVN4a1FrL0Y1cGZiR2E1YTdCekVSb2ZjR0gwcCtXN3p2bFRCWjFwVy91eWpFbXRXaDJEV2FFUTN3VT'+
			'llWFNGYm9KMDhOWEREUmNvVHN3TmZFSEFxUW53QzVCNkE1TVRmeDlFV0tIT2dwejYzTGNmTEVMTURQOHRtQTVicXJ0TURQOEVXRzFLeXIrbGVXNHFUYkRWSkFEc1psOGg4L0NwV3V1RUx2bHBxN1JMbG01dEpuNS9tdExiUE4zY0dTQks4eGhhcEtOeGFGbmV0UExkNnptSElaaTRqc0NaRXVBRFhQT043cEN3TlFmK1ZrR2ZDdlAxaFlOdWlOTmNDSjJ3VDJSNk5zQ3FJTGMraWRYWjhhaUdMMHZuNStMMCtjeU5SWWdlMkl1UitZRjhxOGdYTDNRZUlpbmVDWU9hUFVVdWd6VlRlU0pnQmlJb2pnU09iSXd0SnBLamF1bWV0cDhVUHBsZ1ZUVmNEOHJmUmEzU1ArOEtLWG11eTI0Tzh2TTc4SCtWeGQ1cys2dS80'+
			'NnByd0FBQUFCSlJVNUVya0pnZ2c9PSIgd2lkdGg9IjUxIiBjbGFzcz0iY2xzLTIiLz4KICAgPHBhdGggZD0iTTM1LDE3LjM2SDUuMjJjLTEsMC0xLjc0LTEuMS0xLjc0LTIuNDdWMEg0Ny44NUw0My43OSwxMC4xMkM0MiwxNC42LDM4LjY0LDE3LjM2LDM1LDE3LjM2WiIgY2xhc3M9ImNscy0zIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._mandarin__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._mandarin__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDkuODUgMjAuNjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtpc29sYXRpb246aXNvbGF0ZTt9LmNscy0ye29wYWNpdHk6MC4zO21peC1ibGVuZC1tb2RlOm11bHRpcGx5O30uY2xzLTN7ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudCk7fTwvc3R5bGU+CiAgPGxpbmVhckdyYWRpZW50IHgyPSIyNS42NiIgaWQ9ImxpbmVhci1ncmFkaWVudCIgeTE9IjE3LjM2IiB4MT0iMjUuNjYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU'+
			'9uVXNlIj4KICAgPHN0b3Agc3RvcC1jb2xvcj0iIzFmMzY3MiIgb2Zmc2V0PSIwIi8+CiAgIDxzdG9wIHN0b3AtY29sb3I9IiMxYjMyNWQiIG9mZnNldD0iMC4yNiIvPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjMTkyYjU4IiBvZmZzZXQ9IjAuNTEiLz4KICAgPHN0b3Agc3RvcC1jb2xvcj0iIzEzMTg0YSIgb2Zmc2V0PSIwLjg4Ii8+CiAgIDxzdG9wIHN0b3AtY29sb3I9IiMxMDEwNDQiIG9mZnNldD0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiA8L2RlZnM+CiA8ZyBjbGFzcz0iY2xzLTEiPgogIDxnIGlkPSJMYXllcl8zIiBkYXRhLW5hbWU9IkxheWVyIDMiPgogICA8aW1hZ2UgdHJhbnNmb3Jt'+
			'PSJ0cmFuc2xhdGUoMC4zNSAtMi43NCkiIGhlaWdodD0iMjUiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRE1BQUFBWkNBWUFBQUNjbGhaNkFBQUFDWEJJV1hNQUFBc1NBQUFMRWdIUzNYNzhBQUFCNlVsRVFWUllSOVhZVFU4VVFSU0Y0YWNJSUNhYUdJZ3JqWHY5QTY3OTVjYWxFdGxvSWpFa0JyOVFDQWdvTXNOZ2w0dGI1VFJJajdvQXUwOVNxVXk2YTNMZlB2ZldWOG81ZzVSU0VxcjlFSlFoRjRpVWM1WlNtc004bGtvLzF6MitOMnB3aWhGT2M4NU5FazRzWUFYM3NJeEYvWFlvNHdTN2VGZjZ5WHg1dUNSQUh1RUJidWczVElOOXZNUVRmRl'+
			'Zna2tpdEZkekhROXpTMzFTcnJyekZsc2lxUkVBUWdTL2dwZ0JaMWwrWVJqZ3h4aWQ4RVhDL1lBaTZKQ0JxNjZQYTliS0ZBekVCNUw0RzNLV01pYWlYRDlnUnMxbW12MSsvU3cyT1JMMnNDMmNHQ1pQRnVyS0hqZEwybEJSamVEQWo0Y2E2Y09kSXVJVmh3dXlJZXRuSHBMckNjR0JtRm43VlVHQm1GbjdWRUdDcUs3czZDcjlxQ0RBTnZtRVRMMHAvcHZDcitnN1Q0THRJcTFkNHJleVF6N3RDdjJFcXlIczh4MU84RVM3OTVncG45MmFjSzZqL29GeGFnMk1Cc29ySFdNTzJEbGVZd3RRaUc0dE4zSStMWHI1a3RXTTRGb0d2Q1pCVkFYYWNjNzdRRlFLbS9zbEJHZkN4UEZ2c0duUkptdUFRbjhVNnNpblNhODBV'+
			'Wk9aSHJzNk14V0wwclB5K0swNmZWNm14QU5rUXNXeWJMcEIvQk9Ic2hjWjEzTVlkY1VDcnA5Q3JVTjFFSGdxSWZiRW9qa1NOZEtaV1c2bDExVlJQbTllMGpxSlhxSnJ1SjZYUDRoYnByeWVsMUg2M0IzZG5tZWs5MkwvcUoyaWY3Z2xRUFhFd0FBQUFBRWxGVGtTdVFtQ0MiIHdpZHRoPSI1MSIgY2xhc3M9ImNscy0yIi8+CiAgIDxwYXRoIGQ9Ik0zNSwxNy4zNkg1LjIyYy0xLDAtMS43NC0xLjEtMS43NC0yLjQ3VjBINDcuODVMNDMuNzksMTAuMTJDNDIsMTQuNiwzOC42NCwxNy4zNiwzNSwxNy4zNloiIGNsYXNzPSJjbHMtMyIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._mandarin__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Mandarin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 58px;';
		hs+='left : -31px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 195px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mandarin.ggIsActive=function() {
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
			player.openUrl("https:\/\/tour.lumination.com.au\/chatswood-public-eng","_blank");
		}
		me._mandarin.onmouseover=function (e) {
			me._mandarin__img.style.visibility='hidden';
			me._mandarin__imgo.style.visibility='inherit';
		}
		me._mandarin.onmouseout=function (e) {
			me._mandarin__img.style.visibility='inherit';
			me._mandarin__imgo.style.visibility='hidden';
		}
		me._mandarin.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=-6;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text chinese";
		el.ggType='text';
		hs ='';
		hs+='height : 36px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 125px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 125px;';
		hs+='height: 36px;';
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
		els.innerHTML="\u4e2d\u6587";
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
		me._mandarin.appendChild(me._text_2);
		me._buttons.appendChild(me._mandarin);
		me.divSkin.appendChild(me._buttons);
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
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI2NCIgZmlsbD0id2hpdGUiIHdpZHRoPSI2NCI+CiA8Y2lyY2xlIHI9IjAiIGN5PSIzIiBjeD0iMTYiPgogIDxhbmltYXRlIGR1cj0iMXMiIGJlZ2luPSIwIiB2YWx1ZXM9IjA7MzswOzAiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKD'+
			'Q1IDE2IDE2KSIgcj0iMCIgY3k9IjMiIGN4PSIxNiI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgYmVnaW49IjAuMTI1cyIgdmFsdWVzPSIwOzM7MDswIiBjYWxjTW9kZT0ic3BsaW5lIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiIHI9IjAiIGN5PSIzIiBjeD0iMTYiPgogIDxhbmltYXRlIGR1cj0iMXMiIGJlZ2luPSIwLjI1cyIgdmFsdWVzPSIwOzM7MDswIiBjYWxjTW9k'+
			'ZT0ic3BsaW5lIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIiByPSIwIiBjeT0iMyIgY3g9IjE2Ij4KICA8YW5pbWF0ZSBkdXI9IjFzIiBiZWdpbj0iMC4zNzVzIiB2YWx1ZXM9IjA7MzswOzAiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC'+
			'40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIHI9IjAiIGN5PSIzIiBjeD0iMTYiPgogIDxhbmltYXRlIGR1cj0iMXMiIGJlZ2luPSIwLjVzIiB2YWx1ZXM9IjA7MzswOzAiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDIyNSAxNiAxNikiIHI9IjAiIGN5PSIzIiBj'+
			'eD0iMTYiPgogIDxhbmltYXRlIGR1cj0iMXMiIGJlZ2luPSIwLjYyNXMiIHZhbHVlcz0iMDszOzA7MCIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSIgcj0iMCIgY3k9IjMiIGN4PSIxNiI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgYmVnaW49IjAuNzVzIiB2YWx1ZXM9IjA7MzswOzAiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PS'+
			'JpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiIHI9IjAiIGN5PSIzIiBjeD0iMTYiPgogIDxhbmltYXRlIGR1cj0iMXMiIGJlZ2luPSIwLjg3NXMiIHZhbHVlcz0iMDszOzA7MCIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJy'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSIgcj0iMCIgY3k9IjMiIGN4PSIxNiI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgYmVnaW49IjAuNXMiIHZhbHVlcz0iMDszOzA7MCIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDEuMjIgNDIuODMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzMiIGRhdGEtbmFtZT0iTGF5ZXIgMyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2ZpbGw6IzEwMWI0OTt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT4KIDwvZGVmcz4KIDxjaXJjbGUgcj0iMTguMjciIGNsYXNzPSJjbHMtMSIgY3g9IjIwLjY3IiBjeT0iMjEuNTkiLz4KIDxyZWN0IHg9IjE4LjM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOS4yOSAyMC45Nykgcm90YXRlKC00NSkiIGhlaWdodD0iMjQuNjUiIHJ4PSIxLjI4IiB3aWR0aD0iNC42NSIgY2xhc3'+
			'M9ImNscy0yIiB5PSI5LjM4Ii8+CiA8cmVjdCB4PSIxOC4zNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjEuMjEgLTguMzMpIHJvdGF0ZSg0NSkiIGhlaWdodD0iMjQuNjUiIHJ4PSIxLjM2IiB3aWR0aD0iNC42NSIgY2xhc3M9ImNscy0yIiB5PSI5LjEyIi8+Cjwvc3ZnPgo=';
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
		hs+='height : 124px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 146px;';
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
			player.openUrl("https:\/\/chatswood-p.schools.nsw.gov.au\/","");
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_3);
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
			me._instructions.ggTimestamp=me.ggCurrentTime;
			me._instructions.ggTimeout=2000;
			me._scrollarea_2.ggUpdatePosition();
			me._scrollarea_1.ggUpdatePosition();
			me._timer_2.ggTimestamp=me.ggCurrentTime;
			me._timer_2.ggTimeout=5000;
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
			if (
				(
					((player.getVariableValue('opt_projection') == true)) && 
					((player.hasVR() == true))
				)
			) {
				player.setVariableValue('pos_enter_vr', player.getVariableValue('pos_enter_vr') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_gyro') == true)) && 
					((player.getGyroAvailable() == true)) && 
					((player.hasVR() == true))
				)
			) {
				player.setVariableValue('pos_enter_vr', player.getVariableValue('pos_enter_vr') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_fullscreen') == true)) && 
					((player.hasVR() == true)) && 
					((player.getOS() != 4))
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
			if (
				(
					((player.getVariableValue('opt_thumbnail') == true)) && 
					((player.getIsTour() == true)) && 
					((player.getGyroAvailable() == true))
				)
			) {
				player.setVariableValue('pos_gyro', player.getVariableValue('pos_gyro') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_projection') == true)) && 
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
			if (
				(
					((player.getVariableValue('opt_info') == true)) && 
					((player.getOS() != 4))
				)
			) {
				player.setVariableValue('pos_fullscreen', player.getVariableValue('pos_fullscreen') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_thumbnail') == true)) && 
					((player.getIsTour() == true)) && 
					((player.getOS() != 4))
				)
			) {
				player.setVariableValue('pos_fullscreen', player.getVariableValue('pos_fullscreen') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_projection') == true)) && 
					((player.getOS() != 4))
				)
			) {
				player.setVariableValue('pos_fullscreen', player.getVariableValue('pos_fullscreen') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_gyro') == true)) && 
					((player.getGyroAvailable() == true)) && 
					((player.getOS() != 4))
				)
			) {
				player.setVariableValue('pos_fullscreen', player.getVariableValue('pos_fullscreen') + Number("1"));
			}
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
	me.callChildLogicBlocksHotspot_hotspot_1_configloaded = function(){
		if(hotspotTemplates['Hotspot 1']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 1'].length; i++) {
				if (hotspotTemplates['Hotspot 1'][i]._hotspot_1.logicBlock_visible) {
					hotspotTemplates['Hotspot 1'][i]._hotspot_1.logicBlock_visible();
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
		if (me._element_alpha_timer.ggLastIsActive!=me._element_alpha_timer.ggIsActive()) {
			me._element_alpha_timer.ggLastIsActive=me._element_alpha_timer.ggIsActive();
			if (me._element_alpha_timer.ggLastIsActive) {
			} else {
				player.setVariableValue('vis_timer', true);
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
		me._instructions.ggUpdateConditionTimer();
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
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDEuMjIgNDIuODMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtpc29sYXRpb246aXNvbGF0ZTt9LmNscy0ye29wYWNpdHk6MC4xODttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ze2ZpbGw6dXJsKCNyYWRpYWwtZ3JhZGllbnQpO30uY2xzLTR7ZmlsbDojZmZmO308L3N0eWxlPgogIDxyYWRpYWxHcmFkaWVudCBpZD0icmFkaWFsLWdyYWRpZW50IiByPSIxOC4yNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2'+
			'UiIGN4PSIyMC42NyIgY3k9IjIxLjU5Ij4KICAgPHN0b3Agc3RvcC1jb2xvcj0iIzFkNjNhOCIgb2Zmc2V0PSIwIi8+CiAgIDxzdG9wIHN0b3AtY29sb3I9IiMxYzQyODMiIG9mZnNldD0iMSIvPgogIDwvcmFkaWFsR3JhZGllbnQ+CiA8L2RlZnM+CiA8ZyBjbGFzcz0iY2xzLTEiPgogIDxnIGlkPSJMYXllcl8zIiBkYXRhLW5hbWU9IkxheWVyIDMiPgogICA8aW1hZ2UgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMyAwLjgzKSIgaGVpZ2h0PSI0NCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDc0FBQUFzQ0FZQUFBRDhXRUY0QUFBQUNY'+
			'QklXWE1BQUFzU0FBQUxFZ0hTM1g3OEFBQUVEMGxFUVZSWVIrM1ozMjhVVlJqRzhjOVpXa0hiWUdQbGx4WU1FWWxjY0FNaFhodi9jSzh4b1JjU28wRU1vYVZVV211d0lJVnUyZVBGTzZjN081M2Q3UStXMWNRbm1VeTdPelA3bmVlODU4dzV6NlNjczVNb3BaVEtueU1PeTVCUCtHUHBPT2RYZ0dXYnhRZlZ2ZzA0bzR2ZGFwOEY5NUYvK0Vpd0ZXUUhNemhUYlFzNGo3UFY1M1hnakQxc1l3UFA4YnJhOXRBN0N2U2hZR3VRczVqREo3aUVjL2dNMTNBQnAxdE9mNE5uZUlpbjJNUTYvc1Rmd3UxRFFZK0ZUU2tWeUhrczRncSt3dGRZd3FjQzlHeDFYRk5kNGV3ei9JRW4rQVcvWWdWYmVJbHV6cm5YY3Y2K1JzS2'+
			'1sRTdoUTlITVYzRWROd1hzWlZFQ1o0U2o0MnIyaldqKzUxZ1ZzUGZ4QUk5RW1lemtuTisyWEFNallHdWdTN2lGYjNBRFh3aUg1L1FCeXpaTXViWjFSZk52NFRGK3hsMHNDOWVIQXMrMGZWZ0R2WXc3K0JhM1JaM09DOGlPMFlCMTFXK21XZnNYRFhiTzFaUlNLL0FCMktwR2k2TjM4RjIxWDhKSGpnYlpwb1JUK3RDbkJVZW5ka3dyOEFCczFldG5SWTNlRW83ZUVRNFgwSGVsQWowbnJsOVh4cE9VMHF0NnAyczYyeEhOZkZYVTZHMkRqazVDSFhIOUF0d1RZL0F1MWxKS3UyVlkyNGV0dWJvb2V2ME5VYU9UQkMwcXdFdjZENUZuK0V1TUhtL0xRZlVUNWtSdnYxbnQ1MDBldEtnQVh4SkdYUmNkY0tiTVB6b2Nj'+
			'UFZhdFMwYVBuWk9TcVVNcjRpSHppVXhqdmRodGJzNjUvMjVXbFJNVzhEbjRuSGVoNjFjblJHV1Q5UFZvaVFBeTd4akFiT3BHbE9Kc2U2aXNQNks2YmhhbEFUUEJXSGNlVEVGM1IvZ1o4VlRwRDRobVlhcmpPQXA3cFVEUmsyaTM2ZGFlWnBOUFczSXBnWjRwbFdYeDlML3NKUFNmeHAyN0tKdG1pcXdiV3Y3ZjRNR09EcjZvR1ZhdG0zNndLM21GV2QzeGVyeW9RQitZM3F3UTgzclZMUHdycGprbGhEaXRlbkI5c1RxZDBYa0M3OEw4d1pxOXJVQVhSUGcweWlGWXR5V2FPV0hJcm5aeXpubkp1eTZ1SnNWa1pLTVRFZ21vT0xxWXhHQVBLNys3MUU1VzVYQ25yaUxCeUo0V01jcjd3KzR6ZFV0RVNzTkxoZ0YxRX'+
			'NSNWR6VkR4NG1zUXh2VS9uOVZsZXB3ZWFjYzBxcEswYUZaWVBCdzZTQmU2SVYxMFdyUHRCd2xVWnVrSFB1cFpSMlJPYlVuQzVPQWpqcmd6N0JQZEdxajdUMG1RUHhVYzc1YlFXODJ2ek91NHVRQ0pBdVhnaEg3K0Y3MGFvYkdxNHlKSmdiQWx5U2t1T0djL1NUeEo0WWZUYUVpejg1bUNRZTZOaXRzQndBTHFQRnR1R3hwOGErdUZMZmw1eDJSNERleHc4QzlwRXhHZTFoa3U5eGdYSjlnVm5XVGFkRTVGTi90dGNmb1p1aXR5L2pSMUVHTDR4SnY4ZkNZbHhVWDk0bGxCWHBlVkhYcjRSVDVkbGVmN2V3Vm4yM0pzQjNIT0s5d3FGZzJZK1lDblF6Q0M0NTZ3VjhpWTlGcVBhYi9zU29PTnQ4YXpQMlhVTFJvV0dM'+
			'YXRBekJ0OGxGR2ZQNlR1N2FYREtlYUwzWVVlR0xTckpuc0ZPTmFwbWxmMVJBT3M2Tm15YkdqZHdJckEyL1FNVkU4WWhSYzcyL1FBQUFBQkpSVTVFcmtKZ2dnPT0iIHdpZHRoPSI0MyIgY2xhc3M9ImNscy0yIi8+CiAgIDxjaXJjbGUgcj0iMTguMjciIGNsYXNzPSJjbHMtMyIgY3g9IjIwLjY3IiBjeT0iMjEuNTkiLz4KICAgPHBhdGggZD0iTTEzLjc3LDEyLjM2VjMwLjQ3YS42Ni42NiwwLDAsMCwxLC41N0wzMC42NiwyMmEuNjUuNjUsMCwwLDAsMC0xLjEzTDE0Ljc1LDExLjc5QS42Ni42NiwwLDAsMCwxMy43NywxMi4zNloiIGNsYXNzPSJjbHMtNCIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDEuMjIgNDIuODMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtpc29sYXRpb246aXNvbGF0ZTt9LmNscy0ye29wYWNpdHk6MC4xODttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ze2ZpbGw6dXJsKCNyYWRpYWwtZ3JhZGllbnQpO30uY2xzLTR7ZmlsbDojZmZmO308L3N0eWxlPgogIDxyYWRpYWxHcmFkaWVudCBpZD0icmFkaWFsLWdyYWRpZW50IiByPSIxOC4yNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2'+
			'UiIGN4PSIyMC42NyIgY3k9IjIxLjU5Ij4KICAgPHN0b3Agc3RvcC1jb2xvcj0iIzFkNjNhOCIgb2Zmc2V0PSIwIi8+CiAgIDxzdG9wIHN0b3AtY29sb3I9IiMxYzQyODMiIG9mZnNldD0iMSIvPgogIDwvcmFkaWFsR3JhZGllbnQ+CiA8L2RlZnM+CiA8ZyBjbGFzcz0iY2xzLTEiPgogIDxnIGlkPSJMYXllcl8zIiBkYXRhLW5hbWU9IkxheWVyIDMiPgogICA8aW1hZ2UgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMyAwLjgzKSIgaGVpZ2h0PSI0NCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDc0FBQUFzQ0FZQUFBRDhXRUY0QUFBQUNY'+
			'QklXWE1BQUFzU0FBQUxFZ0hTM1g3OEFBQUVEMGxFUVZSWVIrM1ozMjhVVlJqRzhjOVpXa0hiWUdQbGx4WU1FWWxjY0FNaFhodi9jSzh4b1JjU28wRU1vYVZVV211d0lJVnUyZVBGTzZjN081M2Q3UStXMWNRbm1VeTdPelA3bmVlODU4dzV6NlNjczVNb3BaVEtueU1PeTVCUCtHUHBPT2RYZ0dXYnhRZlZ2ZzA0bzR2ZGFwOEY5NUYvK0Vpd0ZXUUhNemhUYlFzNGo3UFY1M1hnakQxc1l3UFA4YnJhOXRBN0N2U2hZR3VRczVqREo3aUVjL2dNMTNBQnAxdE9mNE5uZUlpbjJNUTYvc1Rmd3UxRFFZK0ZUU2tWeUhrczRncSt3dGRZd3FjQzlHeDFYRk5kNGV3ei9JRW4rQVcvWWdWYmVJbHV6cm5YY3Y2K1JzS2'+
			'1sRTdoUTlITVYzRWROd1hzWlZFQ1o0U2o0MnIyaldqKzUxZ1ZzUGZ4QUk5RW1lemtuTisyWEFNallHdWdTN2lGYjNBRFh3aUg1L1FCeXpaTXViWjFSZk52NFRGK3hsMHNDOWVIQXMrMGZWZ0R2WXc3K0JhM1JaM09DOGlPMFlCMTFXK21XZnNYRFhiTzFaUlNLL0FCMktwR2k2TjM4RjIxWDhKSGpnYlpwb1JUK3RDbkJVZW5ka3dyOEFCczFldG5SWTNlRW83ZUVRNFgwSGVsQWowbnJsOVh4cE9VMHF0NnAyczYyeEhOZkZYVTZHMkRqazVDSFhIOUF0d1RZL0F1MWxKS3UyVlkyNGV0dWJvb2V2ME5VYU9UQkMwcXdFdjZENUZuK0V1TUhtL0xRZlVUNWtSdnYxbnQ1MDBldEtnQVh4SkdYUmNkY0tiTVB6b2Nj'+
			'UFZhdFMwYVBuWk9TcVVNcjRpSHppVXhqdmRodGJzNjUvMjVXbFJNVzhEbjRuSGVoNjFjblJHV1Q5UFZvaVFBeTd4akFiT3BHbE9Kc2U2aXNQNks2YmhhbEFUUEJXSGNlVEVGM1IvZ1o4VlRwRDRobVlhcmpPQXA3cFVEUmsyaTM2ZGFlWnBOUFczSXBnWjRwbFdYeDlML3NKUFNmeHAyN0tKdG1pcXdiV3Y3ZjRNR09EcjZvR1ZhdG0zNndLM21GV2QzeGVyeW9RQitZM3F3UTgzclZMUHdycGprbGhEaXRlbkI5c1RxZDBYa0M3OEw4d1pxOXJVQVhSUGcweWlGWXR5V2FPV0hJcm5aeXpubkp1eTZ1SnNWa1pLTVRFZ21vT0xxWXhHQVBLNys3MUU1VzVYQ25yaUxCeUo0V01jcjd3KzR6ZFV0RVNzTkxoZ0YxRX'+
			'NSNWR6VkR4NG1zUXh2VS9uOVZsZXB3ZWFjYzBxcEswYUZaWVBCdzZTQmU2SVYxMFdyUHRCd2xVWnVrSFB1cFpSMlJPYlVuQzVPQWpqcmd6N0JQZEdxajdUMG1RUHhVYzc1YlFXODJ2ek91NHVRQ0pBdVhnaEg3K0Y3MGFvYkdxNHlKSmdiQWx5U2t1T0djL1NUeEo0WWZUYUVpejg1bUNRZTZOaXRzQndBTHFQRnR1R3hwOGErdUZMZmw1eDJSNERleHc4QzlwRXhHZTFoa3U5eGdYSjlnVm5XVGFkRTVGTi90dGNmb1p1aXR5L2pSMUVHTDR4SnY4ZkNZbHhVWDk0bGxCWHBlVkhYcjRSVDVkbGVmN2V3Vm4yM0pzQjNIT0s5d3FGZzJZK1lDblF6Q0M0NTZ3VjhpWTlGcVBhYi9zU29PTnQ4YXpQMlhVTFJvV0dM'+
			'YXRBekJ0OGxGR2ZQNlR1N2FYREtlYUwzWVVlR0xTckpuc0ZPTmFwbWxmMVJBT3M2Tm15YkdqZHdJckEyL1FNVkU4WWhSYzcyL1FBQUFBQkpSVTVFcmtKZ2dnPT0iIHdpZHRoPSI0MyIgY2xhc3M9ImNscy0yIi8+CiAgIDxjaXJjbGUgcj0iMTguMjciIGNsYXNzPSJjbHMtMyIgY3g9IjIwLjY3IiBjeT0iMjEuNTkiLz4KICAgPHBhdGggZD0iTTEzLjc3LDEyLjM2VjMwLjQ3YS42Ni42NiwwLDAsMCwxLC41N0wzMC42NiwyMmEuNjUuNjUsMCwwLDAsMC0xLjEzTDE0Ljc1LDExLjc5QS42Ni42NiwwLDAsMCwxMy43NywxMi4zNloiIGNsYXNzPSJjbHMtNCIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDEuMjIgNDIuODMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtpc29sYXRpb246aXNvbGF0ZTt9LmNscy0ye29wYWNpdHk6MC4xODttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ze2ZpbGw6dXJsKCNyYWRpYWwtZ3JhZGllbnQpO30uY2xzLTR7ZmlsbDojZmZmO308L3N0eWxlPgogIDxyYWRpYWxHcmFkaWVudCBpZD0icmFkaWFsLWdyYWRpZW50IiByPSIxOC4yNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2'+
			'UiIGN4PSIyMC42NyIgY3k9IjIxLjU5Ij4KICAgPHN0b3Agc3RvcC1jb2xvcj0iIzFkNjNhOCIgb2Zmc2V0PSIwIi8+CiAgIDxzdG9wIHN0b3AtY29sb3I9IiMxYzQyODMiIG9mZnNldD0iMSIvPgogIDwvcmFkaWFsR3JhZGllbnQ+CiA8L2RlZnM+CiA8ZyBjbGFzcz0iY2xzLTEiPgogIDxnIGlkPSJMYXllcl8zIiBkYXRhLW5hbWU9IkxheWVyIDMiPgogICA8aW1hZ2UgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMyAwLjgzKSIgaGVpZ2h0PSI0NCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDc0FBQUFzQ0FZQUFBRDhXRUY0QUFBQUNY'+
			'QklXWE1BQUFzU0FBQUxFZ0hTM1g3OEFBQUVEMGxFUVZSWVIrM1ozMjhVVlJqRzhjOVpXa0hiWUdQbGx4WU1FWWxjY0FNaFhodi9jSzh4b1JjU28wRU1vYVZVV211d0lJVnUyZVBGTzZjN081M2Q3UStXMWNRbm1VeTdPelA3bmVlODU4dzV6NlNjczVNb3BaVEtueU1PeTVCUCtHUHBPT2RYZ0dXYnhRZlZ2ZzA0bzR2ZGFwOEY5NUYvK0Vpd0ZXUUhNemhUYlFzNGo3UFY1M1hnakQxc1l3UFA4YnJhOXRBN0N2U2hZR3VRczVqREo3aUVjL2dNMTNBQnAxdE9mNE5uZUlpbjJNUTYvc1Rmd3UxRFFZK0ZUU2tWeUhrczRncSt3dGRZd3FjQzlHeDFYRk5kNGV3ei9JRW4rQVcvWWdWYmVJbHV6cm5YY3Y2K1JzS2'+
			'1sRTdoUTlITVYzRWROd1hzWlZFQ1o0U2o0MnIyaldqKzUxZ1ZzUGZ4QUk5RW1lemtuTisyWEFNallHdWdTN2lGYjNBRFh3aUg1L1FCeXpaTXViWjFSZk52NFRGK3hsMHNDOWVIQXMrMGZWZ0R2WXc3K0JhM1JaM09DOGlPMFlCMTFXK21XZnNYRFhiTzFaUlNLL0FCMktwR2k2TjM4RjIxWDhKSGpnYlpwb1JUK3RDbkJVZW5ka3dyOEFCczFldG5SWTNlRW83ZUVRNFgwSGVsQWowbnJsOVh4cE9VMHF0NnAyczYyeEhOZkZYVTZHMkRqazVDSFhIOUF0d1RZL0F1MWxKS3UyVlkyNGV0dWJvb2V2ME5VYU9UQkMwcXdFdjZENUZuK0V1TUhtL0xRZlVUNWtSdnYxbnQ1MDBldEtnQVh4SkdYUmNkY0tiTVB6b2Nj'+
			'UFZhdFMwYVBuWk9TcVVNcjRpSHppVXhqdmRodGJzNjUvMjVXbFJNVzhEbjRuSGVoNjFjblJHV1Q5UFZvaVFBeTd4akFiT3BHbE9Kc2U2aXNQNks2YmhhbEFUUEJXSGNlVEVGM1IvZ1o4VlRwRDRobVlhcmpPQXA3cFVEUmsyaTM2ZGFlWnBOUFczSXBnWjRwbFdYeDlML3NKUFNmeHAyN0tKdG1pcXdiV3Y3ZjRNR09EcjZvR1ZhdG0zNndLM21GV2QzeGVyeW9RQitZM3F3UTgzclZMUHdycGprbGhEaXRlbkI5c1RxZDBYa0M3OEw4d1pxOXJVQVhSUGcweWlGWXR5V2FPV0hJcm5aeXpubkp1eTZ1SnNWa1pLTVRFZ21vT0xxWXhHQVBLNys3MUU1VzVYQ25yaUxCeUo0V01jcjd3KzR6ZFV0RVNzTkxoZ0YxRX'+
			'NSNWR6VkR4NG1zUXh2VS9uOVZsZXB3ZWFjYzBxcEswYUZaWVBCdzZTQmU2SVYxMFdyUHRCd2xVWnVrSFB1cFpSMlJPYlVuQzVPQWpqcmd6N0JQZEdxajdUMG1RUHhVYzc1YlFXODJ2ek91NHVRQ0pBdVhnaEg3K0Y3MGFvYkdxNHlKSmdiQWx5U2t1T0djL1NUeEo0WWZUYUVpejg1bUNRZTZOaXRzQndBTHFQRnR1R3hwOGErdUZMZmw1eDJSNERleHc4QzlwRXhHZTFoa3U5eGdYSjlnVm5XVGFkRTVGTi90dGNmb1p1aXR5L2pSMUVHTDR4SnY4ZkNZbHhVWDk0bGxCWHBlVkhYcjRSVDVkbGVmN2V3Vm4yM0pzQjNIT0s5d3FGZzJZK1lDblF6Q0M0NTZ3VjhpWTlGcVBhYi9zU29PTnQ4YXpQMlhVTFJvV0dM'+
			'YXRBekJ0OGxGR2ZQNlR1N2FYREtlYUwzWVVlR0xTckpuc0ZPTmFwbWxmMVJBT3M2Tm15YkdqZHdJckEyL1FNVkU4WWhSYzcyL1FBQUFBQkpSVTVFcmtKZ2dnPT0iIHdpZHRoPSI0MyIgY2xhc3M9ImNscy0yIi8+CiAgIDxjaXJjbGUgcj0iMTguMjciIGNsYXNzPSJjbHMtMyIgY3g9IjIwLjY3IiBjeT0iMjEuNTkiLz4KICAgPHBhdGggZD0iTTEzLjc3LDEyLjM2VjMwLjQ3YS42Ni42NiwwLDAsMCwxLC41N0wzMC42NiwyMmEuNjUuNjUsMCwwLDAsMC0xLjEzTDE0Ljc1LDExLjc5QS42Ni42NiwwLDAsMCwxMy43NywxMi4zNloiIGNsYXNzPSJjbHMtNCIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDEuMjIgNDIuODMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtpc29sYXRpb246aXNvbGF0ZTt9LmNscy0ye29wYWNpdHk6MC4xODttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ze2ZpbGw6dXJsKCNyYWRpYWwtZ3JhZGllbnQpO30uY2xzLTR7ZmlsbDojZmZmO308L3N0eWxlPgogIDxyYWRpYWxHcmFkaWVudCBpZD0icmFkaWFsLWdyYWRpZW50IiByPSIxOC4yNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2'+
			'UiIGN4PSIyMC42NyIgY3k9IjIxLjU5Ij4KICAgPHN0b3Agc3RvcC1jb2xvcj0iIzFkNjNhOCIgb2Zmc2V0PSIwIi8+CiAgIDxzdG9wIHN0b3AtY29sb3I9IiMxYzQyODMiIG9mZnNldD0iMSIvPgogIDwvcmFkaWFsR3JhZGllbnQ+CiA8L2RlZnM+CiA8ZyBjbGFzcz0iY2xzLTEiPgogIDxnIGlkPSJMYXllcl8zIiBkYXRhLW5hbWU9IkxheWVyIDMiPgogICA8aW1hZ2UgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMyAwLjgzKSIgaGVpZ2h0PSI0NCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDc0FBQUFzQ0FZQUFBRDhXRUY0QUFBQUNY'+
			'QklXWE1BQUFzU0FBQUxFZ0hTM1g3OEFBQUVEMGxFUVZSWVIrM1ozMjhVVlJqRzhjOVpXa0hiWUdQbGx4WU1FWWxjY0FNaFhodi9jSzh4b1JjU28wRU1vYVZVV211d0lJVnUyZVBGTzZjN081M2Q3UStXMWNRbm1VeTdPelA3bmVlODU4dzV6NlNjczVNb3BaVEtueU1PeTVCUCtHUHBPT2RYZ0dXYnhRZlZ2ZzA0bzR2ZGFwOEY5NUYvK0Vpd0ZXUUhNemhUYlFzNGo3UFY1M1hnakQxc1l3UFA4YnJhOXRBN0N2U2hZR3VRczVqREo3aUVjL2dNMTNBQnAxdE9mNE5uZUlpbjJNUTYvc1Rmd3UxRFFZK0ZUU2tWeUhrczRncSt3dGRZd3FjQzlHeDFYRk5kNGV3ei9JRW4rQVcvWWdWYmVJbHV6cm5YY3Y2K1JzS2'+
			'1sRTdoUTlITVYzRWROd1hzWlZFQ1o0U2o0MnIyaldqKzUxZ1ZzUGZ4QUk5RW1lemtuTisyWEFNallHdWdTN2lGYjNBRFh3aUg1L1FCeXpaTXViWjFSZk52NFRGK3hsMHNDOWVIQXMrMGZWZ0R2WXc3K0JhM1JaM09DOGlPMFlCMTFXK21XZnNYRFhiTzFaUlNLL0FCMktwR2k2TjM4RjIxWDhKSGpnYlpwb1JUK3RDbkJVZW5ka3dyOEFCczFldG5SWTNlRW83ZUVRNFgwSGVsQWowbnJsOVh4cE9VMHF0NnAyczYyeEhOZkZYVTZHMkRqazVDSFhIOUF0d1RZL0F1MWxKS3UyVlkyNGV0dWJvb2V2ME5VYU9UQkMwcXdFdjZENUZuK0V1TUhtL0xRZlVUNWtSdnYxbnQ1MDBldEtnQVh4SkdYUmNkY0tiTVB6b2Nj'+
			'UFZhdFMwYVBuWk9TcVVNcjRpSHppVXhqdmRodGJzNjUvMjVXbFJNVzhEbjRuSGVoNjFjblJHV1Q5UFZvaVFBeTd4akFiT3BHbE9Kc2U2aXNQNks2YmhhbEFUUEJXSGNlVEVGM1IvZ1o4VlRwRDRobVlhcmpPQXA3cFVEUmsyaTM2ZGFlWnBOUFczSXBnWjRwbFdYeDlML3NKUFNmeHAyN0tKdG1pcXdiV3Y3ZjRNR09EcjZvR1ZhdG0zNndLM21GV2QzeGVyeW9RQitZM3F3UTgzclZMUHdycGprbGhEaXRlbkI5c1RxZDBYa0M3OEw4d1pxOXJVQVhSUGcweWlGWXR5V2FPV0hJcm5aeXpubkp1eTZ1SnNWa1pLTVRFZ21vT0xxWXhHQVBLNys3MUU1VzVYQ25yaUxCeUo0V01jcjd3KzR6ZFV0RVNzTkxoZ0YxRX'+
			'NSNWR6VkR4NG1zUXh2VS9uOVZsZXB3ZWFjYzBxcEswYUZaWVBCdzZTQmU2SVYxMFdyUHRCd2xVWnVrSFB1cFpSMlJPYlVuQzVPQWpqcmd6N0JQZEdxajdUMG1RUHhVYzc1YlFXODJ2ek91NHVRQ0pBdVhnaEg3K0Y3MGFvYkdxNHlKSmdiQWx5U2t1T0djL1NUeEo0WWZUYUVpejg1bUNRZTZOaXRzQndBTHFQRnR1R3hwOGErdUZMZmw1eDJSNERleHc4QzlwRXhHZTFoa3U5eGdYSjlnVm5XVGFkRTVGTi90dGNmb1p1aXR5L2pSMUVHTDR4SnY4ZkNZbHhVWDk0bGxCWHBlVkhYcjRSVDVkbGVmN2V3Vm4yM0pzQjNIT0s5d3FGZzJZK1lDblF6Q0M0NTZ3VjhpWTlGcVBhYi9zU29PTnQ4YXpQMlhVTFJvV0dM'+
			'YXRBekJ0OGxGR2ZQNlR1N2FYREtlYUwzWVVlR0xTckpuc0ZPTmFwbWxmMVJBT3M2Tm15YkdqZHdJckEyL1FNVkU4WWhSYzcyL1FBQUFBQkpSVTVFcmtKZ2dnPT0iIHdpZHRoPSI0MyIgY2xhc3M9ImNscy0yIi8+CiAgIDxjaXJjbGUgcj0iMTguMjciIGNsYXNzPSJjbHMtMyIgY3g9IjIwLjY3IiBjeT0iMjEuNTkiLz4KICAgPHBhdGggZD0iTTEzLjc3LDEyLjM2VjMwLjQ3YS42Ni42NiwwLDAsMCwxLC41N0wzMC42NiwyMmEuNjUuNjUsMCwwLDAsMC0xLjEzTDE0Ljc1LDExLjc5QS42Ni42NiwwLDAsMCwxMy43NywxMi4zNloiIGNsYXNzPSJjbHMtNCIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
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
		el.className="ggskin ggskin_text lumination";
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
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDEuMjIgNDIuODMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtmaWxsOnVybCgjcmFkaWFsLWdyYWRpZW50KTt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT4KICA8cmFkaWFsR3JhZGllbnQgaWQ9InJhZGlhbC1ncmFkaWVudCIgcj0iMTguMjciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjeD0iMjAuNjciIGN5PSIyMS41OSI+CiAgIDxzdG9wIHN0b3AtY29sb3I9IiMxZDYzYTgiIG9mZnNldD0iMCIvPgogIC'+
			'A8c3RvcCBzdG9wLWNvbG9yPSIjMWM0MjgzIiBvZmZzZXQ9IjEiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogPC9kZWZzPgogPGcgaWQ9IkxheWVyXzMiIGRhdGEtbmFtZT0iTGF5ZXIgMyI+CiAgPGNpcmNsZSByPSIxOC4yNyIgY2xhc3M9ImNscy0xIiBjeD0iMjAuNjciIGN5PSIyMS41OSIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzEiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+CiAgPHBhdGggZD0iTTI4LjA3LDExLjkxSDEyLjc1YTIuMzUsMi4zNSwwLDAsMC0yLjM0LDIuMzVWMjkuNTdhMi4zNCwyLjM0LDAsMCwwLDIuMzQsMi4zNEgyOC4wN2EyLjMzLDIuMzMsMCwwLDAsMi4zNC0yLjM0VjE0LjI2QTIu'+
			'MzQsMi4zNCwwLDAsMCwyOC4wNywxMS45MVptLTQuODksNC41NmExLjY2LDEuNjYsMCwxLDEtMS42NiwxLjY2QTEuNjYsMS42NiwwLDAsMSwyMy4xOCwxNi40N1ptNS4xNSwxMy44N0gxMi4xNmEuNTguNTgsMCwwLDEtLjUtLjg3bDUuNTktOS44M2EuNTcuNTcsMCwwLDEsMSwwTDIxLDI0LjExYS41OC41OCwwLDAsMCwuOTQuMDdsMS41OS0xLjk0YS41OC41OCwwLDAsMSwuOTQuMDdsNC4zOCw3LjE1QS41OC41OCwwLDAsMSwyOC4zMywzMC4zNFoiIGNsYXNzPSJjbHMtMiIvPgogPC9nPgo8L3N2Zz4K';
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
		el.className="ggskin ggskin_text lumination";
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
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDEuMjIgNDIuODMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBkYXRhLW5hbWU9IkxheWVyIDMiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtmaWxsOnVybCgjcmFkaWFsLWdyYWRpZW50KTt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT4KICA8cmFkaWFsR3JhZGllbnQgaWQ9InJhZGlhbC1ncmFkaWVudCIgcj0iMTguMjciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjeD0iMjAuNjciIGN5PSIyMS41OSI+CiAgIDxzdG9wIHN0b3'+
			'AtY29sb3I9IiMxZDYzYTgiIG9mZnNldD0iMCIvPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjMWM0MjgzIiBvZmZzZXQ9IjEiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogPC9kZWZzPgogPGNpcmNsZSByPSIxOC4yNyIgY2xhc3M9ImNscy0xIiBjeD0iMjAuNjciIGN5PSIyMS41OSIvPgogPHJlY3QgeD0iMTcuNDEiIGhlaWdodD0iMTUuNTgiIHJ4PSIxLjM2IiB3aWR0aD0iNS42NyIgY2xhc3M9ImNscy0yIiB5PSIxNi44OSIvPgogPGNpcmNsZSByPSIyLjg0IiBjbGFzcz0iY2xzLTIiIGN4PSIyMC4yNSIgY3k9IjEyLjI0Ii8+Cjwvc3ZnPgo=';
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
		el.className="ggskin ggskin_text lumination";
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
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDEuMjIgNDIuODMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtmaWxsOnVybCgjcmFkaWFsLWdyYWRpZW50KTt9LmNscy0ye2ZpbGw6bm9uZTtzdHJva2U6I2ZmZjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9PC9zdHlsZT4KICA8cmFkaWFsR3JhZGllbnQgaWQ9InJhZGlhbC1ncmFkaWVudCIgcj0iMTguMjciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjeD0iMjAuNjciIGN5PS'+
			'IyMS41OSI+CiAgIDxzdG9wIHN0b3AtY29sb3I9IiMxZDYzYTgiIG9mZnNldD0iMCIvPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjMWM0MjgzIiBvZmZzZXQ9IjEiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogPC9kZWZzPgogPGcgaWQ9IkxheWVyXzMiIGRhdGEtbmFtZT0iTGF5ZXIgMyI+CiAgPGNpcmNsZSByPSIxOC4yNyIgY2xhc3M9ImNscy0xIiBjeD0iMjAuNjciIGN5PSIyMS41OSIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzEiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+CiAgPGNpcmNsZSByPSI5LjUiIGNsYXNzPSJjbHMtMiIgY3g9IjIwLjY3IiBjeT0iMjEuNDIiLz4KICA8bGluZSB4Mj0iMjAuNTMi'+
			'IHkxPSIxMi4wMiIgeDE9IjIwLjUzIiB5Mj0iMzAuODIiIGNsYXNzPSJjbHMtMiIvPgogIDxsaW5lIHgyPSIzMC4wNyIgeTE9IjIxLjU2IiB4MT0iMTEuMjciIHkyPSIyMS41NiIgY2xhc3M9ImNscy0yIi8+CiAgPHBhdGggZD0iTTIwLjUzLDEyYTEyLjI5LDEyLjI5LDAsMCwxLDQuOTEsOS41NCwxMS40NSwxMS40NSwwLDAsMS00LjkxLDkuMjYiIGNsYXNzPSJjbHMtMiIvPgogIDxwYXRoIGQ9Ik0yMC40NiwxMmExMi4yOSwxMi4yOSwwLDAsMC00LjkxLDkuNTQsMTEuNDUsMTEuNDUsMCwwLDAsNC45MSw5LjI2IiBjbGFzcz0iY2xzLTIiLz4KICA8cGF0aCBkPSJNMTMuNzYsMjcuOTJzMi0yLjEsNi'+
			'43Ny0yLjEsNywyLjEsNywyLjEiIGNsYXNzPSJjbHMtMiIvPgogIDxwYXRoIGQ9Ik0xMy43NiwxNXMyLDIuMSw2Ljc3LDIuMSw3LTIuMSw3LTIuMSIgY2xhc3M9ImNscy0yIi8+CiA8L2c+Cjwvc3ZnPgo=';
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
		el.className="ggskin ggskin_text lumination";
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
		me._hotspot_1.logicBlock_visible = function() {
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
			if (me._hotspot_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspot_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspot_1.style[domTransition]='';
				if (me._hotspot_1.ggCurrentLogicStateVisible == 0) {
					me._hotspot_1.style.visibility="hidden";
					me._hotspot_1.ggVisible=false;
				}
				else {
					me._hotspot_1.style.visibility=(Number(me._hotspot_1.style.opacity)>0||!me._hotspot_1.style.opacity)?'inherit':'hidden';
					me._hotspot_1.ggVisible=true;
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
		el.className="ggskin ggskin_text lumination";
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
		hs+='font-weight: bold;';
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
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzYuODkgNDIuODMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtmaWxsOnVybCgjcmFkaWFsLWdyYWRpZW50KTt9LmNscy0ye2ZpbGw6dXJsKCNyYWRpYWwtZ3JhZGllbnQtMik7fTwvc3R5bGU+CiAgPHJhZGlhbEdyYWRpZW50IGlkPSJyYWRpYWwtZ3JhZGllbnQiIHI9IjE4LjI3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3g9IjE4LjU2IiBjeT0iMjEuNTkiPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjZmZmIi'+
			'BvZmZzZXQ9IjAuNzEiLz4KICAgPHN0b3Agc3RvcC1jb2xvcj0iI2Q1ZDdkOCIgb2Zmc2V0PSIxIi8+CiAgPC9yYWRpYWxHcmFkaWVudD4KICA8cmFkaWFsR3JhZGllbnQgaWQ9InJhZGlhbC1ncmFkaWVudC0yIiByPSIxMi4yNSIgZnk9IjI5LjQxNTAyNTM3NTgwMzUzOCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGN4PSIxOC4yNiIgY3k9IjIxLjM4Ij4KICAgPHN0b3Agc3RvcC1jb2xvcj0iI2U5Y2I1NCIgb2Zmc2V0PSIwIi8+CiAgIDxzdG9wIHN0b3AtY29sb3I9IiNkZWIyMDAiIG9mZnNldD0iMC43NyIvPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjYzU5NjIzIiBvZmZzZXQ9IjEi'+
			'Lz4KICA8L3JhZGlhbEdyYWRpZW50PgogPC9kZWZzPgogPGcgaWQ9IkxheWVyXzMiIGRhdGEtbmFtZT0iTGF5ZXIgMyI+CiAgPGNpcmNsZSByPSIxOC4yNyIgY2xhc3M9ImNscy0xIiBjeD0iMTguNTYiIGN5PSIyMS41OSIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzEiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+CiAgPHBhdGggZD0iTTI5LjMyLDIyLjU2LDE4LjYsOS41N2EuNDQuNDQsMCwwLDAtLjY5LDBsLTEwLjcyLDEzYS40NS40NSwwLDAsMCwuMzUuNzNoNS4xMWEuNDYuNDYsMCwwLDAsLjM1LS4xNkwxNS41NSwyMFYzMi40NWEuOS45LDAsMCwwLC45LjkxaDMuNjFhLjkuOSwwLDAsMCwuOS0uOTFWMj'+
			'BsMi41NiwzLjA5YS40NC40NCwwLDAsMCwuMzQuMTZIMjlBLjQ1LjQ1LDAsMCwwLDI5LjMyLDIyLjU2WiIgY2xhc3M9ImNscy0yIi8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzYuODkgNDIuODMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtmaWxsOnVybCgjcmFkaWFsLWdyYWRpZW50KTt9LmNscy0ye2ZpbGw6dXJsKCNyYWRpYWwtZ3JhZGllbnQtMik7fTwvc3R5bGU+CiAgPHJhZGlhbEdyYWRpZW50IGlkPSJyYWRpYWwtZ3JhZGllbnQiIHI9IjE4LjI3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3g9IjE4LjU2IiBjeT0iMjEuNTkiPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjZmZmIi'+
			'BvZmZzZXQ9IjAuNzEiLz4KICAgPHN0b3Agc3RvcC1jb2xvcj0iI2Q1ZDdkOCIgb2Zmc2V0PSIxIi8+CiAgPC9yYWRpYWxHcmFkaWVudD4KICA8cmFkaWFsR3JhZGllbnQgaWQ9InJhZGlhbC1ncmFkaWVudC0yIiByPSIxMS41OCIgZnk9IjI4Ljk3NTc1MzM5Mjg5MjMyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3g9IjE4LjI2IiBjeT0iMjEuMzgiPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjYjRiNmI4IiBvZmZzZXQ9IjAiLz4KICAgPHN0b3Agc3RvcC1jb2xvcj0iIzhhOGI4YyIgb2Zmc2V0PSIwLjk2Ii8+CiAgPC9yYWRpYWxHcmFkaWVudD4KIDwvZGVmcz4KIDxnIGlkPSJMYXll'+
			'cl8zIiBkYXRhLW5hbWU9IkxheWVyIDMiPgogIDxjaXJjbGUgcj0iMTguMjciIGNsYXNzPSJjbHMtMSIgY3g9IjE4LjU2IiBjeT0iMjEuNTkiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8xIiBkYXRhLW5hbWU9IkxheWVyIDEiPgogIDxwYXRoIGQ9Ik0yOS4zMiwyMi41NiwxOC42LDkuNTdhLjQ0LjQ0LDAsMCwwLS42OSwwbC0xMC43MiwxM2EuNDUuNDUsMCwwLDAsLjM1LjczaDUuMTFhLjQ2LjQ2LDAsMCwwLC4zNS0uMTZMMTUuNTUsMjBWMzIuNDVhLjkuOSwwLDAsMCwuOS45MWgzLjYxYS45LjksMCwwLDAsLjktLjkxVjIwbDIuNTYsMy4wOWEuNDQuNDQsMCwwLDAsLjM0LjE2SDI5QS40NS40NSwwLD'+
			'AsMCwyOS4zMiwyMi41NloiIGNsYXNzPSJjbHMtMiIvPgogPC9nPgo8L3N2Zz4K';
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
			me.callChildLogicBlocksHotspot_hotspot_1_configloaded();;
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
		hs+='height : 90px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
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
		hs+='border : 3px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 51px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
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
		me._thumbnail_active.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_active.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['thumbnail_active'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active.style[domTransition]='border-color 0s';
				if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active.style.borderColor="rgba(192,192,192,1)";
				}
				else if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active.style.borderColor="rgba(192,192,192,1)";
				}
				else {
					me._thumbnail_active.style.borderColor="rgba(0,0,0,1)";
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
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._checkmark_tick.logicBlock_alpha();
			me._thumbnail_title.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._checkmark_tick.logicBlock_alpha();
			me._thumbnail_title.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ggUpdatePosition=function (useTransition) {
		}
		el=me._checkmark_tick=document.createElement('div');
		els=me._checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBpZD0iTGF5ZXJfMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcn'+
			'Npb249IjEuMSIgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojMDAwMDAwO30mI3hkOwoJLnN0MXtmaWxsOiNmZmZmZmY7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXogTS0xMzIuOCwzODEu'+
			'N2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNS'+
			'wxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
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
		hs+='height : 19px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : 2px;';
		hs+='visibility : hidden;';
		hs+='width : 19px;';
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
					me._checkmark_tick.style.visibility=(Number(me._checkmark_tick.style.opacity)>0||!me._checkmark_tick.style.opacity)?'inherit':'hidden';
					me._checkmark_tick.ggVisible=true;
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
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 51px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
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
		me._thumbnail_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_active'] == true)) && 
				((me.ggUserdata.title != "")) && 
				((player.getVariableValue('opt_thumbnail_tooltip') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_title.style[domTransition]='opacity 500ms ease 0ms';
				if (me._thumbnail_title.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_title.style.visibility=me._thumbnail_title.ggVisible?'inherit':'hidden';
					me._thumbnail_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_title.style.opacity == 0.0) { me._thumbnail_title.style.visibility="hidden"; } }, 505);
					me._thumbnail_title.style.opacity=0;
				}
			}
		}
		me._thumbnail_title.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_active.appendChild(me._thumbnail_title);
		me.__div.appendChild(me._thumbnail_active);
	};
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
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcn'+
			'Npb249IjEuMSIgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojMDAwMDAwO30mI3hkOwoJLnN0MXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXogTS0xMzIuOCwzODEu'+
			'N2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNS'+
			'wxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
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
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; } .ggskin.lumination { font-family: "Poppins", sans-serif; font-size: 14px; } .ggskin.chinese { font-family: "Noto Sans SC", sans-serif; font-size: 14px; } .ggskin.korean { font-family: "Noto Sans KR", sans-serif; font-size: 14px; }'));
	document.head.appendChild(style);
	me._screentint.logicBlock_alpha();
	me._thumbnail_menu.logicBlock_visible();
	me._thumbnail_menu.logicBlock_alpha();
	me._thumbnail_menu_mobile.logicBlock_visible();
	me._thumbnail_menu_mobile.logicBlock_alpha();
	me._fullscreen.logicBlock_alpha();
	me._fullscreen_off.logicBlock_alpha();
	me._menu_button.logicBlock_position();
	me._controller.logicBlock_position();
	me._controller.logicBlock_alpha();
	me._controller_bg.logicBlock_position();
	me._controller_bg.logicBlock_size();
	me._controller_bg.logicBlock_visible();
	me._controller_slider.logicBlock_position();
	me._controller_slider.logicBlock_alpha();
	me._enter_vr.logicBlock_position();
	me._gyro.logicBlock_position();
	me._gyro.logicBlock_visible();
	me._gyro_on.logicBlock_alpha();
	me._gyro_off.logicBlock_alpha();
	me._fullscreen_buttons.logicBlock_position();
	me._fullscreen_buttons.logicBlock_visible();
	me._autorotate_start.logicBlock_visible();
	me._autorotate_stop.logicBlock_visible();
	me._zoomout.logicBlock_visible();
	me._zoomin.logicBlock_visible();
	me._thumbnail_menu.logicBlock_position();
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
	me._side_nav.logicBlock_position();
	me._side_nav.logicBlock_alpha();
	me._svg_1.logicBlock_visible();
	me._menu_closed.logicBlock_visible();
	me._menu_open.logicBlock_visible();
	me._video_popup_vimeo.logicBlock_visible();
	me._popup_video_vimeo.logicBlock_visible();
	me._close.logicBlock_visible();
	me._map_1.logicBlock_visible();
	me._instructions0.logicBlock_scaling();
	me._information.logicBlock_scaling();
	me._info_text_body.logicBlock_scaling();
	me._ht_info_close.logicBlock_size();
	me._ht_info_close.logicBlock_scaling();
	me._video_popup_file.logicBlock_size();
	me._video_popup_youtube.logicBlock_size();
	me._image_popup.logicBlock_size();
	me._side_nav.logicBlock_size();
	me._side_nav.logicBlock_scaling();
	me._side_nav.logicBlock_visible();
	me._scrollarea_1.logicBlock_size();
	me._bush_campus.logicBlock_position();
	me._kindergarten.logicBlock_position();
	me._hall.logicBlock_position();
	me._five.logicBlock_position();
	me._six.logicBlock_position();
	me._four.logicBlock_position();
	me._three.logicBlock_position();
	me._two.logicBlock_position();
	me._one.logicBlock_position();
	me._menu_open.logicBlock_position();
	me._menu_open.logicBlock_scaling();
	me._buttons.logicBlock_position();
	me._buttons.logicBlock_scaling();
	me._popup_video_vimeo.logicBlock_size();
	me._close.logicBlock_position();
	me._enter_vr.logicBlock_visible();
	me._korean.logicBlock_visible();
	me._mandarin.logicBlock_visible();
	player.addListener('sizechanged', function(args) { me._screentint.logicBlock_alpha();me._thumbnail_menu.logicBlock_visible();me._thumbnail_menu.logicBlock_alpha();me._thumbnail_menu_mobile.logicBlock_visible();me._thumbnail_menu_mobile.logicBlock_alpha(); });
	player.addListener('fullscreenenter', function(args) { me._fullscreen.logicBlock_alpha();me._fullscreen_off.logicBlock_alpha(); });
	player.addListener('fullscreenexit', function(args) { me._fullscreen.logicBlock_alpha();me._fullscreen_off.logicBlock_alpha(); });
	player.addListener('changenode', function(args) { me._menu_button.logicBlock_position();me._screentint.logicBlock_alpha();me._controller.logicBlock_position();me._controller.logicBlock_alpha();me._controller_bg.logicBlock_position();me._controller_bg.logicBlock_size();me._controller_bg.logicBlock_visible();me._controller_slider.logicBlock_position();me._controller_slider.logicBlock_alpha();me._enter_vr.logicBlock_position();me._gyro.logicBlock_position();me._gyro.logicBlock_visible();me._gyro_on.logicBlock_alpha();me._gyro_off.logicBlock_alpha();me._fullscreen_buttons.logicBlock_position();me._fullscreen_buttons.logicBlock_visible();me._autorotate_start.logicBlock_visible();me._autorotate_stop.logicBlock_visible();me._zoomout.logicBlock_visible();me._zoomin.logicBlock_visible();me._thumbnail_menu.logicBlock_position();me._thumbnail_menu.logicBlock_visible();me._thumbnail_menu.logicBlock_alpha();me._thumbnail_menu_mobile.logicBlock_position();me._thumbnail_menu_mobile.logicBlock_visible();me._thumbnail_menu_mobile.logicBlock_alpha();me._web_page.logicBlock_visible();me._loading.logicBlock_visible();me._userdata.logicBlock_visible();me._information.logicBlock_visible();me._information.logicBlock_alpha();me._video_popup_file.logicBlock_visible();me._popup_video_file.logicBlock_visible();me._video_popup_controls_file.logicBlock_visible();me._video_popup_url.logicBlock_visible();me._popup_video_url.logicBlock_visible();me._video_popup_youtube.logicBlock_visible();me._popup_video_youtube.logicBlock_visible();me._video_popup_controls_url.logicBlock_visible();me._image_popup.logicBlock_visible();me._popup_image.logicBlock_visible();me.__360image_gyro.logicBlock_visible();me.__360image.logicBlock_position();me.__360image.logicBlock_scaling();me._phone2.logicBlock_scaling();me._phone3.logicBlock_scaling();me._side_nav.logicBlock_position();me._side_nav.logicBlock_alpha();me._svg_1.logicBlock_visible();me._menu_closed.logicBlock_visible();me._menu_open.logicBlock_visible();me._video_popup_vimeo.logicBlock_visible();me._popup_video_vimeo.logicBlock_visible();me._close.logicBlock_visible(); });
	player.addListener('configloaded', function(args) { me._map_1.logicBlock_visible();me._controller.logicBlock_position();me._gyro.logicBlock_visible();me._fullscreen_buttons.logicBlock_visible();me._thumbnail_menu.logicBlock_visible();me._thumbnail_menu_mobile.logicBlock_visible();me._instructions0.logicBlock_scaling();me._information.logicBlock_scaling();me._info_text_body.logicBlock_scaling();me._ht_info_close.logicBlock_size();me._ht_info_close.logicBlock_scaling();me._video_popup_file.logicBlock_size();me._video_popup_youtube.logicBlock_size();me._image_popup.logicBlock_size();me.__360image_gyro.logicBlock_visible();me._side_nav.logicBlock_position();me._side_nav.logicBlock_size();me._side_nav.logicBlock_scaling();me._side_nav.logicBlock_visible();me._scrollarea_1.logicBlock_size();me._bush_campus.logicBlock_position();me._kindergarten.logicBlock_position();me._hall.logicBlock_position();me._five.logicBlock_position();me._six.logicBlock_position();me._four.logicBlock_position();me._three.logicBlock_position();me._two.logicBlock_position();me._one.logicBlock_position();me._menu_closed.logicBlock_visible();me._menu_open.logicBlock_position();me._menu_open.logicBlock_scaling();me._menu_open.logicBlock_visible();me._buttons.logicBlock_position();me._buttons.logicBlock_scaling();me._popup_video_vimeo.logicBlock_size();me._close.logicBlock_position(); });
	player.addListener('gyroavailable', function(args) { me._gyro.logicBlock_visible(); });
	player.addListener('gyrochanged', function(args) { me._gyro_on.logicBlock_alpha();me._gyro_off.logicBlock_alpha(); });
	player.addListener('vrchanged', function(args) { me._enter_vr.logicBlock_visible();me._korean.logicBlock_visible();me._mandarin.logicBlock_visible(); });
	player.addListener('hastouch', function(args) { me.__360image_gyro.logicBlock_visible(); });
	player.addListener('varchanged_vis_userdata', function(args) { me._menu_button.logicBlock_position();me._screentint.logicBlock_alpha();me._controller.logicBlock_position();me._thumbnail_menu.logicBlock_position();me._thumbnail_menu_mobile.logicBlock_position();me._userdata.logicBlock_visible(); });
	player.addListener('varchanged_vis_image_popup', function(args) { me._menu_button.logicBlock_position();me._screentint.logicBlock_alpha();me._controller.logicBlock_position();me._thumbnail_menu.logicBlock_position();me._image_popup.logicBlock_visible();me._popup_image.logicBlock_visible();me._close.logicBlock_visible(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me._menu_button.logicBlock_position();me._screentint.logicBlock_alpha();me._controller.logicBlock_position();me._thumbnail_menu.logicBlock_position();me._information.logicBlock_visible();me._information.logicBlock_alpha(); });
	player.addListener('varchanged_vis_video_popup_file', function(args) { me._menu_button.logicBlock_position();me._screentint.logicBlock_alpha();me._controller.logicBlock_position();me._thumbnail_menu.logicBlock_position();me._video_popup_file.logicBlock_visible();me._popup_video_file.logicBlock_visible();me._video_popup_controls_file.logicBlock_visible();me._close.logicBlock_visible(); });
	player.addListener('varchanged_vis_video_popup_url', function(args) { me._menu_button.logicBlock_position();me._screentint.logicBlock_alpha();me._controller.logicBlock_position();me._thumbnail_menu.logicBlock_position();me._video_popup_url.logicBlock_visible();me._popup_video_url.logicBlock_visible();me._video_popup_controls_url.logicBlock_visible();me._close.logicBlock_visible(); });
	player.addListener('varchanged_vis_video_popup_vimeo', function(args) { me._menu_button.logicBlock_position();me._screentint.logicBlock_alpha();me._controller.logicBlock_position();me._thumbnail_menu.logicBlock_position();me._video_popup_vimeo.logicBlock_visible();me._popup_video_vimeo.logicBlock_visible();me._close.logicBlock_visible(); });
	player.addListener('varchanged_vis_video_popup_youtube', function(args) { me._menu_button.logicBlock_position();me._screentint.logicBlock_alpha();me._controller.logicBlock_position();me._thumbnail_menu.logicBlock_position();me._video_popup_youtube.logicBlock_visible();me._popup_video_youtube.logicBlock_visible();me._close.logicBlock_visible(); });
	player.addListener('varchanged_vis_website', function(args) { me._menu_button.logicBlock_position();me._screentint.logicBlock_alpha();me._controller.logicBlock_position();me._thumbnail_menu.logicBlock_position();me._web_page.logicBlock_visible();me._close.logicBlock_visible(); });
	player.addListener('varchanged_vis_timer', function(args) { me._controller.logicBlock_alpha();me._controller_slider.logicBlock_alpha();me._thumbnail_menu.logicBlock_alpha();me._thumbnail_menu_mobile.logicBlock_alpha(); });
	player.addListener('varchanged_vis_thumbnail_menu_mobile', function(args) { me._screentint.logicBlock_alpha();me._thumbnail_menu_mobile.logicBlock_alpha(); });
	player.addListener('varchanged_vis_thumbnail_menu_auto_hide', function(args) { me._screentint.logicBlock_alpha();me._thumbnail_menu.logicBlock_alpha();me._thumbnail_menu_mobile.logicBlock_alpha(); });
	player.addListener('varchanged_opt_thumbnail', function(args) { me._thumbnail_menu.logicBlock_visible();me._thumbnail_menu_mobile.logicBlock_visible(); });
	player.addListener('varchanged_vis_thumbnail_menu_show', function(args) { me._thumbnail_menu.logicBlock_alpha(); });
	player.addListener('varchanged_opt_loader', function(args) { me._loading.logicBlock_visible(); });
	player.addListener('varchanged_opt_gyro', function(args) { me._gyro.logicBlock_visible();me.__360image_gyro.logicBlock_visible(); });
	player.addListener('varchanged_vis_360image_once', function(args) { me.__360image_gyro.logicBlock_visible(); });
	player.addListener('varchanged_category_visible', function(args) { me._side_nav.logicBlock_position();me._side_nav.logicBlock_alpha();me._svg_1.logicBlock_visible();me._menu_closed.logicBlock_visible();me._menu_open.logicBlock_visible(); });
	player.addListener('varchanged_pos_controller', function(args) { me._controller_bg.logicBlock_position();me._controller_bg.logicBlock_size();me._controller_bg.logicBlock_visible();me._controller_slider.logicBlock_position(); });
	player.addListener('varchanged_pos_360image', function(args) { me.__360image.logicBlock_position();me.__360image.logicBlock_scaling();me._phone2.logicBlock_scaling();me._phone3.logicBlock_scaling(); });
	player.addListener('varchanged_pos_enter_vr', function(args) { me._enter_vr.logicBlock_position(); });
	player.addListener('varchanged_pos_gyro', function(args) { me._gyro.logicBlock_position(); });
	player.addListener('varchanged_pos_fullscreen', function(args) { me._fullscreen_buttons.logicBlock_position(); });
	player.addListener('varchanged_opt_fullscreen', function(args) { me._fullscreen_buttons.logicBlock_visible(); });
	player.addListener('varchanged_opt_zoom', function(args) { me._zoomout.logicBlock_visible();me._zoomin.logicBlock_visible(); });
	player.addListener('varchanged_volume', function(args) { me._autorotate_start.logicBlock_visible();me._autorotate_stop.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me._thumbnail_cloner.callChildLogicBlocks_changenode();me._thumbnail_cloner_mobile.callChildLogicBlocks_changenode(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner.callChildLogicBlocks_mouseover();me._thumbnail_cloner_mobile.callChildLogicBlocks_mouseover(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner.callChildLogicBlocks_mouseover();me._thumbnail_cloner_mobile.callChildLogicBlocks_mouseover(); });
	player.addListener('changenode', function(args) { me._thumbnail_cloner.callChildLogicBlocks_active();me._thumbnail_cloner_mobile.callChildLogicBlocks_active(); });
	player.addListener('changevisitednodes', function(args) { me._thumbnail_cloner.callChildLogicBlocks_changevisitednodes();me._thumbnail_cloner_mobile.callChildLogicBlocks_changevisitednodes(); });
	player.addListener('activehotspotchanged', function(args) { me._thumbnail_cloner.callChildLogicBlocks_activehotspotchanged();me._thumbnail_cloner_mobile.callChildLogicBlocks_activehotspotchanged(); });
	player.addListener('varchanged_opt_thumbnail_tooltip', function(args) { me._thumbnail_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_tooltip();me._thumbnail_cloner_mobile.callChildLogicBlocks_varchanged_opt_thumbnail_tooltip(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_video_youtube_changenode();me.callChildLogicBlocksHotspot_ht_node_1_changenode();me.callChildLogicBlocksHotspot_ht_video_vimeo_changenode();me.callChildLogicBlocksHotspot_ht_video_url_changenode();me.callChildLogicBlocksHotspot_ht_video_file_changenode();me.callChildLogicBlocksHotspot_ht_image_changenode();me.callChildLogicBlocksHotspot_ht_info_changenode();me.callChildLogicBlocksHotspot_ht_url_changenode();me.callChildLogicBlocksHotspot_hotspot_1_changenode();me.callChildLogicBlocksHotspot_ht_node_changenode(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_ht_video_youtube_configloaded();me.callChildLogicBlocksHotspot_ht_video_vimeo_configloaded();me.callChildLogicBlocksHotspot_ht_video_url_configloaded();me.callChildLogicBlocksHotspot_ht_video_file_configloaded();me.callChildLogicBlocksHotspot_ht_image_configloaded();me.callChildLogicBlocksHotspot_ht_info_configloaded();me.callChildLogicBlocksHotspot_ht_url_configloaded();me.callChildLogicBlocksHotspot_hotspot_1_configloaded();me.callChildLogicBlocksHotspot_ht_node_configloaded(); });
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
	me.skinTimerEvent();
};