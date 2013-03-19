/*
* Kendo UI Complete v2012.3.1315 (http://kendoui.com)
* Copyright 2013 Telerik AD. All rights reserved.
*
* Kendo UI Complete commercial licenses may be obtained at
* https://www.kendoui.com/purchase/license-agreement/kendo-ui-complete-commercial.aspx
* If you do not own a commercial license, this file shall be governed by the trial license terms.
*/
(function(e){var i=window.kendo,t=i.mobile.ui,n=t.Shim,o=t.Widget,h="open",s='<div class="km-modalview-wrapper" />',r=t.View.extend({init:function(e,t){var h,r,a=this;o.fn.init.call(a,e,t),e=a.element,t=a.options,h=e[0].style.width||e.css("width"),r=e[0].style.height||e.css("height"),e.addClass("km-modalview").wrap(s),a.wrapper=e.parent().css({width:t.width||h||300,height:t.height||r||300}),e.css({width:"",height:""}),a.shim=new n(a.wrapper,{modal:t.modal,position:"center center",align:"center center",effect:"fade:in"}),a._layout(),a._scroller(),a._model(),i.onResize(function(){var e=a.wrapper.parent(),i=e.parent();e.css({top:(i.height()-e.height())/2+"px",left:(i.width()-e.width())/2+"px"})})},events:[h],options:{name:"ModalView",modal:!0,width:null,height:null},destroy:function(){o.fn.destroy.call(this),this.shim.destroy()},open:function(i){var t=this;t.target=e(i),t.shim.show(),t.trigger("show",{view:t})},openFor:function(e){this.open(e),this.trigger(h,{target:e})},close:function(){this.shim.hide()}});t.plugin(r)})(window.kendo.jQuery);