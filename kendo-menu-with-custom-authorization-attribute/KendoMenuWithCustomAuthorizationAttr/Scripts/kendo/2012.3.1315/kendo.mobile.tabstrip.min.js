/*
* Kendo UI Complete v2012.3.1315 (http://kendoui.com)
* Copyright 2013 Telerik AD. All rights reserved.
*
* Kendo UI Complete commercial licenses may be obtained at
* https://www.kendoui.com/purchase/license-agreement/kendo-ui-complete-commercial.aspx
* If you do not own a commercial license, this file shall be governed by the trial license terms.
*/
(function(e){var t=window.kendo,n=t.mobile.ui,i=n.Widget,s="km-state-active",a="select",o=i.extend({init:function(t,n){var a=this;i.fn.init.call(a,t,n),a.container().bind("show",e.proxy(this,"viewShow")),a.element.addClass("km-tabstrip").find("a").each(a._buildButton).eq(a.options.selectedIndex).addClass(s),a.element.on("down","a","_release")},events:[a],switchTo:function(e){this._setActiveItem(this.element.find('a[href$="'+e+'"]'))},clear:function(){this.currentItem().removeClass(s)},currentItem:function(){return this.element.children("."+s)},_release:function(t){if(!(t.which>1)){var n=this,i=e(t.currentTarget);i[0]!==n.currentItem()[0]&&(n.trigger(a,{item:i})?t.preventDefault():n._setActiveItem(i))}},_setActiveItem:function(e){e[0]&&(this.clear(),e.addClass(s))},_buildButton:function(){var n=e(this),i=t.attrValue(n,"icon"),s=n.find("img"),a=e('<span class="km-icon"/>');n.addClass("km-button").attr(t.attr("role"),"tab").contents().not(s).wrapAll('<span class="km-text"/>'),s[0]?s.addClass("km-image"):(n.prepend(a),i&&a.addClass("km-"+i))},viewShow:function(e){this.switchTo(e.view.id)},destroy:function(){i.fn.destroy.call(this)},options:{name:"TabStrip",selectedIndex:0,enable:!0}});n.plugin(o)})(window.kendo.jQuery);