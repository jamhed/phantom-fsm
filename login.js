// Generated by CoffeeScript 1.6.2
var root;

root = typeof exports !== "undefined" && exports !== null ? exports : this;

root.fn = function(ua) {
  ua.tr("page/requested", "page/open", "open", function() {
    var _this = this;
    return this.page.includeJs("/js/lib/jquery.js", function() {
      return _this.run("page/jquery");
    });
  });
  ua.tr("open", "page/jquery", "ready", function() {
    this.text("input[name='name']", "admin");
    this.text("input[name='password']", "admin");
    return this.click("input[type='submit']");
  });
  ua.tr("ready", "page/finish", "logged", function() {
    return this.wait("script[src^='/js/a/Source.js']", "ajax/finish");
  });
  return ua;
};