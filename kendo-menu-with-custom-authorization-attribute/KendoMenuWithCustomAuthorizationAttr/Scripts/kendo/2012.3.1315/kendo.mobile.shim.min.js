/*
* Kendo UI Complete v2012.3.1315 (http://kendoui.com)
* Copyright 2013 Telerik AD. All rights reserved.
*
* Kendo UI Complete commercial licenses may be obtained at
* https://www.kendoui.com/purchase/license-agreement/kendo-ui-complete-commercial.aspx
* If you do not own a commercial license, this file shall be governed by the trial license terms.
*/
(function(i,n){var o=window.kendo,e=o.mobile.ui,t=o.ui.Popup,p='<div class="km-shim"/>',s=e.Widget,a=s.extend({init:function(n,e){var a=this,d="ios"===o.mobile.application.os,c=e.align||(d?"bottom center":"center center"),u=e.position||(d?"bottom center":"center center"),l=e.effect||(d?"slideIn:up":"fade:in"),r=i(p).handler(a).hide();s.fn.init.call(a,n,e),a.shim=r,a.element=n,a.options.modal||a.shim.on("up","hide"),o.mobile.application.element.append(r),a.popup=new t(a.element,{anchor:r,appendTo:r,origin:c,position:u,animation:{open:{effects:l,duration:a.options.duration},close:{duration:a.options.duration}},deactivate:function(){r.hide()},open:function(){r.show()}}),o.notify(a)},options:{name:"Shim",modal:!0,align:n,position:n,effect:n,duration:200},show:function(){this.popup.open()},hide:function(){this.popup.close()},destroy:function(){s.fn.destroy.call(this),this.shim.kendoDestroy(),this.popup.destroy()}});e.plugin(a)})(window.kendo.jQuery);