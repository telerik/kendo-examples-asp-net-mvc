/*
* Kendo UI Complete v2012.3.1315 (http://kendoui.com)
* Copyright 2013 Telerik AD. All rights reserved.
*
* Kendo UI Complete commercial licenses may be obtained at
* https://www.kendoui.com/purchase/license-agreement/kendo-ui-complete-commercial.aspx
* If you do not own a commercial license, this file shall be governed by the trial license terms.
*/
(function(t){function e(e,i){var l=i.find("["+n.attr("align")+"="+e+"]");l[0]&&i.prepend(t('<div class="km-'+e+'item" />').append(l))}function i(e){var i=e.siblings();e.toggleClass("km-show-title",!!i[0]&&""===t.trim(e.text())),e.toggleClass("km-no-title",!!e.children("ul")[0]),e.toggleClass("km-hide-title","hidden"==e.css("visibility")&&!i.children().is(":visible"))}var n=window.kendo,l=n.mobile.ui,s=n.roleSelector,o=l.Widget,r=o.extend({init:function(i,n){var l=this;o.fn.init.call(l,i,n),i=l.element,l.container().bind("show",t.proxy(this,"viewShow")),i.addClass("km-navbar").wrapInner(t('<div class="km-view-title" />')),e("left",i),e("right",i),l.centerElement=i.find(".km-view-title")},options:{name:"NavBar"},title:function(t){this.element.find(s("view-title")).text(t),i(this.centerElement)},viewShow:function(t){var e=t.view;e.options.title?this.title(e.options.title):i(this.centerElement)},destroy:function(){o.fn.destroy.call(this),n.destroy(this.element)}});l.plugin(r)})(window.kendo.jQuery);