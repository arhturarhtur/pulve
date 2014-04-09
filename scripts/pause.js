<!--http://donejs.com/docs.html#!jQuery.event.pause-->

//<![CDATA[ 
$(window).load(function(){
can.Control("Tabs", {
  init : function (el) {
    $(el).children("li:first").addClass('active');
    var tab = this.tab;
    this.element.children("li:gt(0)").each(function () {
      tab($(this)).hide()
    })
  },
  tab : function (li) {
    return $(li.find("a").attr("href").match(/#.*/)[0])
  },
  "li click" : function (el, ev) {
    ev.preventDefault();
    var active = this.element.find('.active')
    old = this.tab(active),
        cur = this.tab(el);
    old.triggerAsync('hide', function () {
      active.removeClass('active')
      old.slideUp(function () {
        el.addClass('active')
        cur.slideDown()
      });
    })
  }
})

// create a widget listens for change and marks as dirty
can.Control("Dirtybit", {
  init : function () {
    this.element.data('formData', this.element.serialize())
  },
  "change" : function (el) {
    this.check()
  },
  keyup : function (el) {
    this.check()
  },
  click : function (el) {
    this.check()
  },
  check : function () {
    var el = this.element;
    if (el.serialize() == el.data('formData')) {
      el.removeClass('dirty')
    } else {
      el.addClass('dirty')
    }
  },
  " set" : function () {
    this.element.data('formData', this.element.serialize())
        .removeClass('dirty');
  }
})

// a modal width
can.Control("Modal", {
  init : function () {
    this.element.show();
  },
  "a click" : function (a) {
    this.element.hide();
    this.options[a.attr('id')]();

    this.destroy();
  }
})



new Tabs('#tabs');
$('#panels .tab').each(function() {
    new Dirtybit(this);
    new Saver(this);
});

// a fake post method
$.post = function (url, data, success) {
  setTimeout(success, 500)
};
});//]]>  
