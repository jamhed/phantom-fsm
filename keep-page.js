// Generated by CoffeeScript 1.6.2
var root;

root = typeof exports !== "undefined" && exports !== null ? exports : this;

root.fn = function(ua) {
  ua.tr("logged", "ajax/finish", "logged", function() {
    var fs,
      _this = this;
    fs = require("fs");
    fs.removeTree(phantom.page.offlineStoragePath);
    this.click("[href='#show']");
    return this.wait("li[name='page']", "show/ready", function(selector) {
      return _this.innerText(selector) === "1 / 2";
    });
  });
  ua.tr("logged", "show/ready", "show", function() {
    var _this = this;
    this.click_jq("li[name='forward']");
    return this.wait("li[name='page']", "show/forward", function(selector) {
      return _this.innerText(selector) === "2 / 2";
    });
  });
  ua.tr("show", "show/forward", "show", function() {
    var _this = this;
    this.click("[href='#event']");
    return this.wait("li[name='page']", "ready", function(selector) {
      return _this.innerText(selector) === "1 / 1";
    });
  });
  ua.tr("show", "ready", "event", function() {
    var _this = this;
    this.click("[href='#show']");
    return this.wait("li[name='page']", "show/click", function(selector) {
      return _this.innerText(selector) === "2 / 2";
    });
  });
  ua.tr("event", "show/click", "show/edit", function() {
    this.click("[pi='Create']");
    return this.wait("[pi='a/Form'][processed=1]", "ready");
  });
  ua.tr("show/edit", "ready", "show", function() {
    var _this = this;
    this.page.goBack();
    return this.wait("li[name='page']", "back", function(selector) {
      return _this.innerText(selector) === "2 / 2";
    });
  });
  ua.tr("show", "back", "show", function() {
    var fs;
    console.log("OK: сохранение выбранной страницы при переходах");
    fs = require("fs");
    fs.removeTree(phantom.page.offlineStoragePath);
    return phantom.exit();
  });
  return ua;
};