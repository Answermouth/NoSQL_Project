'use strict';
if (function(global, factory) {
  if ("object" == typeof module && "object" == typeof module.exports) {
    module.exports = global.document ? factory(global, true) : function(name) {
      if (!name.document) {
        throw new Error("jQuery requires a window with a document");
      }
      return factory(name);
    };
  } else {
    factory(global);
  }
}("undefined" != typeof window ? window : this, function(window, forceWipe) {
  /**
   * @param {!Object} object
   * @return {?}
   */
  function isArrayLike(object) {
    var length = object.length;
    var type = jQuery.type(object);
    return "function" === type || jQuery.isWindow(object) ? false : 1 === object.nodeType && length ? true : "array" === type || 0 === length || "number" == typeof length && length > 0 && length - 1 in object;
  }
  /**
   * @param {undefined} a
   * @param {!Object} b
   * @param {?} data
   * @return {?}
   */
  function filter(a, b, data) {
    if (jQuery.isFunction(b)) {
      return jQuery.grep(a, function(parent, deferBuild) {
        return !!b.call(parent, deferBuild, parent) !== data;
      });
    }
    if (b.nodeType) {
      return jQuery.grep(a, function(a) {
        return a === b !== data;
      });
    }
    if ("string" == typeof b) {
      if ($jsilxna.test(b)) {
        return jQuery.filter(b, a, data);
      }
      b = jQuery.filter(b, a);
    }
    return jQuery.grep(a, function(name) {
      return indexOf.call(b, name) >= 0 !== data;
    });
  }
  /**
   * @param {(Array|Element)} cur
   * @param {number} dir
   * @return {?}
   */
  function sibling(cur, dir) {
    for (; (cur = cur[dir]) && 1 !== cur.nodeType;) {
    }
    return cur;
  }
  /**
   * @param {!Object} options
   * @return {?}
   */
  function createOptions(options) {
    var b = optionsCache[options] = {};
    return jQuery.each(options.match(rnotwhite) || [], function(a, inFlowOrd) {
      /** @type {boolean} */
      b[inFlowOrd] = true;
    }), b;
  }
  /**
   * @return {undefined}
   */
  function $__jsx_onload() {
    document.removeEventListener("DOMContentLoaded", $__jsx_onload, false);
    window.removeEventListener("load", $__jsx_onload, false);
    jQuery.ready();
  }
  /**
   * @return {undefined}
   */
  function Data() {
    Object.defineProperty(this.cache = {}, 0, {
      get : function() {
        return {};
      }
    });
    this.expando = jQuery.expando + Math.random();
  }
  /**
   * @param {!Object} obj
   * @param {!Object} name
   * @param {?} value
   * @return {?}
   */
  function parse(obj, name, value) {
    var key;
    if (void 0 === value && 1 === obj.nodeType) {
      if (key = "data-" + name.replace(dashExpr, "-$1").toLowerCase(), value = obj.getAttribute(key), "string" == typeof value) {
        try {
          value = "true" === value ? true : "false" === value ? false : "null" === value ? null : +value + "" === value ? +value : trueRE.test(value) ? jQuery.parseJSON(value) : value;
        } catch (e) {
        }
        $.set(obj, name, value);
      } else {
        value = void 0;
      }
    }
    return value;
  }
  /**
   * @return {?}
   */
  function returnTrue() {
    return true;
  }
  /**
   * @return {?}
   */
  function returnFalse() {
    return false;
  }
  /**
   * @return {?}
   */
  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (a) {
    }
  }
  /**
   * @param {!Object} elem
   * @param {!Element} content
   * @return {?}
   */
  function manipulationTarget(elem, content) {
    return jQuery.nodeName(elem, "table") && jQuery.nodeName(11 !== content.nodeType ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
  }
  /**
   * @param {!Element} s
   * @return {?}
   */
  function c(s) {
    return s.type = (null !== s.getAttribute("type")) + "/" + s.type, s;
  }
  /**
   * @param {!Object} script
   * @return {?}
   */
  function o(script) {
    /** @type {(Array<string>|null)} */
    var spec = re.exec(script.type);
    return spec ? script.type = spec[1] : script.removeAttribute("type"), script;
  }
  /**
   * @param {number} elems
   * @param {!NodeList} refElements
   * @return {undefined}
   */
  function setGlobalEval(elems, refElements) {
    /** @type {number} */
    var i = 0;
    var length = elems.length;
    for (; length > i; i++) {
      data_priv.set(elems[i], "globalEval", !refElements || data_priv.get(refElements[i], "globalEval"));
    }
  }
  /**
   * @param {!Object} src
   * @param {string} dest
   * @return {undefined}
   */
  function cloneCopyEvent(src, dest) {
    var i;
    var countRep;
    var type;
    var pdataOld;
    var pdataCur;
    var keys;
    var re;
    var events;
    if (1 === dest.nodeType) {
      if (data_priv.hasData(src) && (pdataOld = data_priv.access(src), pdataCur = data_priv.set(dest, pdataOld), events = pdataOld.events)) {
        delete pdataCur.handle;
        pdataCur.events = {};
        for (type in events) {
          /** @type {number} */
          i = 0;
          countRep = events[type].length;
          for (; countRep > i; i++) {
            jQuery.event.add(dest, type, events[type][i]);
          }
        }
      }
      if ($.hasData(src)) {
        keys = $.access(src);
        re = jQuery.extend({}, keys);
        $.set(dest, re);
      }
    }
  }
  /**
   * @param {!Object} context
   * @param {!Object} tag
   * @return {?}
   */
  function getAll(context, tag) {
    var c = context.getElementsByTagName ? context.getElementsByTagName(tag || "*") : context.querySelectorAll ? context.querySelectorAll(tag || "*") : [];
    return void 0 === tag || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], c) : c;
  }
  /**
   * @param {!Object} src
   * @param {!Object} dest
   * @return {undefined}
   */
  function fixInput(src, dest) {
    var tagName = dest.nodeName.toLowerCase();
    if ("input" === tagName && reg.test(src.type)) {
      dest.checked = src.checked;
    } else {
      if ("input" === tagName || "textarea" === tagName) {
        dest.defaultValue = src.defaultValue;
      }
    }
  }
  /**
   * @param {?} name
   * @param {!Object} doc
   * @return {?}
   */
  function actualDisplay(name, doc) {
    var style;
    var elem = jQuery(doc.createElement(name)).appendTo(doc.body);
    var f = window.getDefaultComputedStyle && (style = window.getDefaultComputedStyle(elem[0])) ? style.display : jQuery.css(elem[0], "display");
    return elem.detach(), f;
  }
  /**
   * @param {?} nodeName
   * @return {?}
   */
  function defaultDisplay(nodeName) {
    var doc = document;
    var display = defaultDisplayMap[nodeName];
    return display || (display = actualDisplay(nodeName, doc), "none" !== display && display || (iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement), doc = iframe[0].contentDocument, doc.write(), doc.close(), display = actualDisplay(nodeName, doc), iframe.detach()), defaultDisplayMap[nodeName] = display), display;
  }
  /**
   * @param {!Object} elem
   * @param {string} name
   * @param {!Object} computed
   * @return {?}
   */
  function curCSS(elem, name, computed) {
    var minWidth;
    var width;
    var maxWidth;
    var ret;
    var style = elem.style;
    return computed = computed || getStyles(elem), computed && (ret = computed.getPropertyValue(name) || computed[name]), computed && ("" !== ret || jQuery.contains(elem.ownerDocument, elem) || (ret = jQuery.style(elem, name)), rnumnonpx.test(ret) && namespaces.test(name) && (minWidth = style.width, width = style.minWidth, maxWidth = style.maxWidth, style.minWidth = style.maxWidth = style.width = ret, ret = computed.width, style.width = minWidth, style.minWidth = width, style.maxWidth = maxWidth)), 
    void 0 !== ret ? ret + "" : ret;
  }
  /**
   * @param {?} conditionFn
   * @param {!Function} hookFn
   * @return {?}
   */
  function addGetHookIf(conditionFn, hookFn) {
    return {
      get : function() {
        return conditionFn() ? void delete this.get : (this.get = hookFn).apply(this, arguments);
      }
    };
  }
  /**
   * @param {!Object} style
   * @param {string} name
   * @return {?}
   */
  function vendorPropName(style, name) {
    if (name in style) {
      return name;
    }
    var UserSelect = name[0].toUpperCase() + name.slice(1);
    /** @type {string} */
    var origName = name;
    /** @type {number} */
    var i = prefixes.length;
    for (; i--;) {
      if (name = prefixes[i] + UserSelect, name in style) {
        return name;
      }
    }
    return origName;
  }
  /**
   * @param {!Object} elem
   * @param {!Object} value
   * @param {string} object
   * @return {?}
   */
  function setPositiveNumber(elem, value, object) {
    /** @type {(Array<string>|null)} */
    var matches = rnumsplit.exec(value);
    return matches ? Math.max(0, matches[1] - (object || 0)) + (matches[2] || "px") : value;
  }
  /**
   * @param {!Object} elem
   * @param {string} name
   * @param {string} extra
   * @param {boolean} isBorderBox
   * @param {!Object} styles
   * @return {?}
   */
  function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
    /** @type {number} */
    var i = extra === (isBorderBox ? "border" : "content") ? 4 : "width" === name ? 1 : 0;
    /** @type {number} */
    var val = 0;
    for (; 4 > i; i = i + 2) {
      if ("margin" === extra) {
        val = val + jQuery.css(elem, extra + cssExpand[i], true, styles);
      }
      if (isBorderBox) {
        if ("content" === extra) {
          /** @type {number} */
          val = val - jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        }
        if ("margin" !== extra) {
          /** @type {number} */
          val = val - jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      } else {
        val = val + jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        if ("padding" !== extra) {
          val = val + jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    }
    return val;
  }
  /**
   * @param {!Object} elem
   * @param {string} name
   * @param {!Object} extra
   * @return {?}
   */
  function getWidthOrHeight(elem, name, extra) {
    /** @type {boolean} */
    var valueIsBorderBox = true;
    var val = "width" === name ? elem.offsetWidth : elem.offsetHeight;
    var styles = getStyles(elem);
    /** @type {boolean} */
    var isBorderBox = "border-box" === jQuery.css(elem, "boxSizing", false, styles);
    if (0 >= val || null == val) {
      if (val = curCSS(elem, name, styles), (0 > val || null == val) && (val = elem.style[name]), rnumnonpx.test(val)) {
        return val;
      }
      valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
      /** @type {number} */
      val = parseFloat(val) || 0;
    }
    return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
  }
  /**
   * @param {!NodeList} elements
   * @param {number} show
   * @return {?}
   */
  function showHide(elements, show) {
    var display;
    var elem;
    var hidden;
    /** @type {!Array} */
    var values = [];
    /** @type {number} */
    var index = 0;
    var length = elements.length;
    for (; length > index; index++) {
      elem = elements[index];
      if (elem.style) {
        values[index] = data_priv.get(elem, "olddisplay");
        display = elem.style.display;
        if (show) {
          if (!(values[index] || "none" !== display)) {
            /** @type {string} */
            elem.style.display = "";
          }
          if ("" === elem.style.display && toggle(elem)) {
            values[index] = data_priv.access(elem, "olddisplay", defaultDisplay(elem.nodeName));
          }
        } else {
          hidden = toggle(elem);
          if (!("none" === display && hidden)) {
            data_priv.set(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
          }
        }
      }
    }
    /** @type {number} */
    index = 0;
    for (; length > index; index++) {
      elem = elements[index];
      if (elem.style) {
        if (!(show && "none" !== elem.style.display && "" !== elem.style.display)) {
          elem.style.display = show ? values[index] || "" : "none";
        }
      }
    }
    return elements;
  }
  /**
   * @param {!Array} type
   * @param {!Function} context
   * @param {string} object
   * @param {string} end
   * @param {number} easing
   * @return {?}
   */
  function Tween(type, context, object, end, easing) {
    return new Tween.prototype.init(type, context, object, end, easing);
  }
  /**
   * @return {?}
   */
  function createFxNow() {
    return setTimeout(function() {
      fxNow = void 0;
    }), fxNow = jQuery.now();
  }
  /**
   * @param {string} type
   * @param {number} includeWidth
   * @return {?}
   */
  function genFx(type, includeWidth) {
    var which;
    /** @type {number} */
    var i = 0;
    var attrs = {
      height : type
    };
    /** @type {number} */
    includeWidth = includeWidth ? 1 : 0;
    for (; 4 > i; i = i + (2 - includeWidth)) {
      which = cssExpand[i];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }
    return includeWidth && (attrs.opacity = attrs.width = type), attrs;
  }
  /**
   * @param {?} value
   * @param {!Object} prop
   * @param {!Object} animation
   * @return {?}
   */
  function createTween(value, prop, animation) {
    var tween;
    var _ = (tweeners[prop] || []).concat(tweeners["*"]);
    /** @type {number} */
    var t = 0;
    var c = _.length;
    for (; c > t; t++) {
      if (tween = _[t].call(animation, prop, value)) {
        return tween;
      }
    }
  }
  /**
   * @param {?} elem
   * @param {!Object} props
   * @param {!Object} opts
   * @return {undefined}
   */
  function defaultPrefilter(elem, props, opts) {
    var prop;
    var value;
    var matched;
    var tween;
    var hooks;
    var oldfire;
    var display;
    var type;
    var anim = this;
    var orig = {};
    var style = elem.style;
    var hidden = elem.nodeType && toggle(elem);
    var dataShow = data_priv.get(elem, "fxshow");
    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, "fx");
      if (null == hooks.unqueued) {
        /** @type {number} */
        hooks.unqueued = 0;
        /** @type {function(): undefined} */
        oldfire = hooks.empty.fire;
        /**
         * @return {undefined}
         */
        hooks.empty.fire = function() {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }
      hooks.unqueued++;
      anim.always(function() {
        anim.always(function() {
          hooks.unqueued--;
          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    }
    if (1 === elem.nodeType && ("height" in props || "width" in props)) {
      /** @type {!Array} */
      opts.overflow = [style.overflow, style.overflowX, style.overflowY];
      display = jQuery.css(elem, "display");
      type = "none" === display ? data_priv.get(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;
      if ("inline" === type && "none" === jQuery.css(elem, "float")) {
        /** @type {string} */
        style.display = "inline-block";
      }
    }
    if (opts.overflow) {
      /** @type {string} */
      style.overflow = "hidden";
      anim.always(function() {
        style.overflow = opts.overflow[0];
        style.overflowX = opts.overflow[1];
        style.overflowY = opts.overflow[2];
      });
    }
    for (prop in props) {
      if (value = props[prop], $b.exec(value)) {
        if (delete props[prop], matched = matched || "toggle" === value, value === (hidden ? "hide" : "show")) {
          if ("show" !== value || !dataShow || void 0 === dataShow[prop]) {
            continue;
          }
          /** @type {boolean} */
          hidden = true;
        }
        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
      } else {
        display = void 0;
      }
    }
    if (jQuery.isEmptyObject(orig)) {
      if ("inline" === ("none" === display ? defaultDisplay(elem.nodeName) : display)) {
        style.display = display;
      }
    } else {
      if (dataShow) {
        if ("hidden" in dataShow) {
          hidden = dataShow.hidden;
        }
      } else {
        dataShow = data_priv.access(elem, "fxshow", {});
      }
      if (matched) {
        /** @type {boolean} */
        dataShow.hidden = !hidden;
      }
      if (hidden) {
        jQuery(elem).show();
      } else {
        anim.done(function() {
          jQuery(elem).hide();
        });
      }
      anim.done(function() {
        var prop;
        data_priv.remove(elem, "fxshow");
        for (prop in orig) {
          jQuery.style(elem, prop, orig[prop]);
        }
      });
      for (prop in orig) {
        tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
        if (!(prop in dataShow)) {
          dataShow[prop] = tween.start;
          if (hidden) {
            tween.end = tween.start;
            /** @type {number} */
            tween.start = "width" === prop || "height" === prop ? 1 : 0;
          }
        }
      }
    }
  }
  /**
   * @param {!Array} obj
   * @param {!Array} props
   * @return {undefined}
   */
  function propFilter(obj, props) {
    var value;
    var name;
    var key;
    var data;
    var hooks;
    for (value in obj) {
      if (name = jQuery.camelCase(value), key = props[name], data = obj[value], jQuery.isArray(data) && (key = data[1], data = obj[value] = data[0]), value !== name && (obj[name] = data, delete obj[value]), hooks = jQuery.cssHooks[name], hooks && "expand" in hooks) {
        data = hooks.expand(data);
        delete obj[name];
        for (value in data) {
          if (!(value in obj)) {
            obj[value] = data[value];
            props[value] = key;
          }
        }
      } else {
        props[name] = key;
      }
    }
  }
  /**
   * @param {!Object} elem
   * @param {?} properties
   * @param {!Object} options
   * @return {?}
   */
  function Animation(elem, properties, options) {
    var result;
    var e;
    /** @type {number} */
    var index = 0;
    /** @type {number} */
    var length = animationPrefilters.length;
    var deferred = jQuery.Deferred().always(function() {
      delete tick.elem;
    });
    /**
     * @return {?}
     */
    var tick = function() {
      if (e) {
        return false;
      }
      var currentTime = fxNow || createFxNow();
      /** @type {number} */
      var remaining = Math.max(0, animation.startTime + animation.duration - currentTime);
      /** @type {number} */
      var temp = remaining / animation.duration || 0;
      /** @type {number} */
      var percent = 1 - temp;
      /** @type {number} */
      var i = 0;
      var length = animation.tweens.length;
      for (; length > i; i++) {
        animation.tweens[i].run(percent);
      }
      return deferred.notifyWith(elem, [animation, percent, remaining]), 1 > percent && length ? remaining : (deferred.resolveWith(elem, [animation]), false);
    };
    var animation = deferred.promise({
      elem : elem,
      props : jQuery.extend({}, properties),
      opts : jQuery.extend(true, {
        specialEasing : {}
      }, options),
      originalProperties : properties,
      originalOptions : options,
      startTime : fxNow || createFxNow(),
      duration : options.duration,
      tweens : [],
      createTween : function(prop, end) {
        var result = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
        return animation.tweens.push(result), result;
      },
      stop : function(value) {
        /** @type {number} */
        var i = 0;
        var val = value ? animation.tweens.length : 0;
        if (e) {
          return this;
        }
        /** @type {boolean} */
        e = true;
        for (; val > i; i++) {
          animation.tweens[i].run(1);
        }
        return value ? deferred.resolveWith(elem, [animation, value]) : deferred.rejectWith(elem, [animation, value]), this;
      }
    });
    var props = animation.props;
    propFilter(props, animation.opts.specialEasing);
    for (; length > index; index++) {
      if (result = animationPrefilters[index].call(animation, elem, props, animation.opts)) {
        return result;
      }
    }
    return jQuery.map(props, createTween, animation), jQuery.isFunction(animation.opts.start) && animation.opts.start.call(elem, animation), jQuery.fx.timer(jQuery.extend(tick, {
      elem : elem,
      anim : animation,
      queue : animation.opts.queue
    })), animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
  }
  /**
   * @param {!Object} structure
   * @return {?}
   */
  function addToPrefiltersOrTransports(structure) {
    return function(a, c) {
      if ("string" != typeof a) {
        /** @type {string} */
        c = a;
        /** @type {string} */
        a = "*";
      }
      var type;
      /** @type {number} */
      var callbackCount = 0;
      var callbackVals = a.toLowerCase().match(rnotwhite) || [];
      if (jQuery.isFunction(c)) {
        for (; type = callbackVals[callbackCount++];) {
          if ("+" === type[0]) {
            type = type.slice(1) || "*";
            (structure[type] = structure[type] || []).unshift(c);
          } else {
            (structure[type] = structure[type] || []).push(c);
          }
        }
      }
    };
  }
  /**
   * @param {!Object} structure
   * @param {?} options
   * @param {!Object} originalOptions
   * @param {?} jqXHR
   * @return {?}
   */
  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    /**
     * @param {string} dataType
     * @return {?}
     */
    function inspect(dataType) {
      var selected;
      return inspected[dataType] = true, jQuery.each(structure[dataType] || [], function(a, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
        return "string" != typeof dataTypeOrTransport || seekingTransport || inspected[dataTypeOrTransport] ? seekingTransport ? !(selected = dataTypeOrTransport) : void 0 : (options.dataTypes.unshift(dataTypeOrTransport), inspect(dataTypeOrTransport), false);
      }), selected;
    }
    var inspected = {};
    /** @type {boolean} */
    var seekingTransport = structure === transports;
    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  }
  /**
   * @param {?} target
   * @param {?} opts
   * @return {?}
   */
  function ajaxExtend(target, opts) {
    var key;
    var deep;
    var flatOptions = jQuery.ajaxSettings.flatOptions || {};
    for (key in opts) {
      if (void 0 !== opts[key]) {
        (flatOptions[key] ? target : deep || (deep = {}))[key] = opts[key];
      }
    }
    return deep && jQuery.extend(true, target, deep), target;
  }
  /**
   * @param {!Object} s
   * @param {!XMLHttpRequest} jqXHR
   * @param {!Array} responses
   * @return {?}
   */
  function ajaxHandleResponses(s, jqXHR, responses) {
    var ct;
    var type;
    var finalDataType;
    var firstDataType;
    var contents = s.contents;
    var dataTypes = s.dataTypes;
    for (; "*" === dataTypes[0];) {
      dataTypes.shift();
      if (void 0 === ct) {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
    }
    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    }
    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          /** @type {string} */
          finalDataType = type;
          break;
        }
        if (!firstDataType) {
          /** @type {string} */
          firstDataType = type;
        }
      }
      /** @type {(string|undefined)} */
      finalDataType = finalDataType || firstDataType;
    }
    return finalDataType ? (finalDataType !== dataTypes[0] && dataTypes.unshift(finalDataType), responses[finalDataType]) : void 0;
  }
  /**
   * @param {!Object} s
   * @param {string} response
   * @param {?} jqXHR
   * @param {number} isSuccess
   * @return {?}
   */
  function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2;
    var current;
    var conv;
    var tmp;
    var prev;
    var converters = {};
    var deps = s.dataTypes.slice();
    if (deps[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }
    current = deps.shift();
    for (; current;) {
      if (s.responseFields[current] && (jqXHR[s.responseFields[current]] = response), !prev && isSuccess && s.dataFilter && (response = s.dataFilter(response, s.dataType)), prev = current, current = deps.shift()) {
        if ("*" === current) {
          current = prev;
        } else {
          if ("*" !== prev && prev !== current) {
            if (conv = converters[prev + " " + current] || converters["* " + current], !conv) {
              for (conv2 in converters) {
                if (tmp = conv2.split(" "), tmp[1] === current && (conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]])) {
                  if (conv === true) {
                    conv = converters[conv2];
                  } else {
                    if (converters[conv2] !== true) {
                      /** @type {string} */
                      current = tmp[0];
                      deps.unshift(tmp[1]);
                    }
                  }
                  break;
                }
              }
            }
            if (conv !== true) {
              if (conv && s["throws"]) {
                response = conv(response);
              } else {
                try {
                  response = conv(response);
                } catch (e) {
                  return {
                    state : "parsererror",
                    error : conv ? e : "No conversion from " + prev + " to " + current
                  };
                }
              }
            }
          }
        }
      }
    }
    return {
      state : "success",
      data : response
    };
  }
  /**
   * @param {string} m
   * @param {!Object} a
   * @param {string} user
   * @param {!Function} next
   * @return {undefined}
   */
  function callback(m, a, user, next) {
    var i;
    if (jQuery.isArray(a)) {
      jQuery.each(a, function(object, body) {
        if (user || _updateShellBoundsAndConformDims.test(m)) {
          next(m, body);
        } else {
          callback(m + "[" + ("object" == typeof body ? object : "") + "]", body, user, next);
        }
      });
    } else {
      if (user || "object" !== jQuery.type(a)) {
        next(m, a);
      } else {
        for (i in a) {
          callback(m + "[" + i + "]", a[i], user, next);
        }
      }
    }
  }
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function getWindow(obj) {
    return jQuery.isWindow(obj) ? obj : 9 === obj.nodeType && obj.defaultView;
  }
  /** @type {!Array} */
  var arr = [];
  /** @type {function(this:(IArrayLike<T>|string), *=, *=): !Array<T>} */
  var slice = arr.slice;
  /** @type {function(this:*, ...*): !Array<?>} */
  var concat = arr.concat;
  /** @type {function(this:IArrayLike<T>, ...T): number} */
  var push = arr.push;
  /** @type {function(this:(IArrayLike<T>|string), T, number=): number} */
  var indexOf = arr.indexOf;
  var class2type = {};
  /** @type {function(this:*): string} */
  var toString = class2type.toString;
  /** @type {function(this:Object, *): boolean} */
  var hasOwn = class2type.hasOwnProperty;
  var support = {};
  var document = window.document;
  /** @type {string} */
  var core_version = "2.1.1";
  /**
   * @param {!Array} element
   * @param {!Function} context
   * @return {?}
   */
  var jQuery = function(element, context) {
    return new jQuery.fn.init(element, context);
  };
  /** @type {!RegExp} */
  var REGEX_ESCAPE_EXPR = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  /** @type {!RegExp} */
  var nonAscii = /^-ms-/;
  /** @type {!RegExp} */
  var regPlaceholder = /-([\da-z])/gi;
  /**
   * @param {?} all
   * @param {string} letter
   * @return {?}
   */
  var camelCaseHandler = function(all, letter) {
    return letter.toUpperCase();
  };
  jQuery.fn = jQuery.prototype = {
    jquery : core_version,
    constructor : jQuery,
    selector : "",
    length : 0,
    toArray : function() {
      return slice.call(this);
    },
    get : function(s) {
      return null != s ? 0 > s ? this[s + this.length] : this[s] : slice.call(this);
    },
    pushStack : function(a) {
      var ret = jQuery.merge(this.constructor(), a);
      return ret.prevObject = this, ret.context = this.context, ret;
    },
    each : function(object, opts) {
      return jQuery.each(this, object, opts);
    },
    map : function(object) {
      return this.pushStack(jQuery.map(this, function(data, callback) {
        return object.call(data, callback, data);
      }));
    },
    slice : function() {
      return this.pushStack(slice.apply(this, arguments));
    },
    first : function() {
      return this.eq(0);
    },
    last : function() {
      return this.eq(-1);
    },
    eq : function(i) {
      var index = this.length;
      var thisIndex = +i + (0 > i ? index : 0);
      return this.pushStack(thisIndex >= 0 && index > thisIndex ? [this[thisIndex]] : []);
    },
    end : function() {
      return this.prevObject || this.constructor(null);
    },
    push : push,
    sort : arr.sort,
    splice : arr.splice
  };
  /** @type {function(): ?} */
  jQuery.extend = jQuery.fn.extend = function() {
    var arg;
    var name;
    var src;
    var copy;
    var copyIsArray;
    var clone;
    var target = arguments[0] || {};
    /** @type {number} */
    var _i = 1;
    /** @type {number} */
    var _len = arguments.length;
    /** @type {boolean} */
    var deep = false;
    if ("boolean" == typeof target) {
      /** @type {boolean} */
      deep = target;
      target = arguments[_i] || {};
      _i++;
    }
    if (!("object" == typeof target || jQuery.isFunction(target))) {
      target = {};
    }
    if (_i === _len) {
      target = this;
      _i--;
    }
    for (; _len > _i; _i++) {
      if (null != (arg = arguments[_i])) {
        for (name in arg) {
          src = target[name];
          copy = arg[name];
          if (target !== copy) {
            if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
              if (copyIsArray) {
                /** @type {boolean} */
                copyIsArray = false;
                clone = src && jQuery.isArray(src) ? src : [];
              } else {
                clone = src && jQuery.isPlainObject(src) ? src : {};
              }
              target[name] = jQuery.extend(deep, clone, copy);
            } else {
              if (void 0 !== copy) {
                target[name] = copy;
              }
            }
          }
        }
      }
    }
    return target;
  };
  jQuery.extend({
    expando : "jQuery" + (core_version + Math.random()).replace(/\D/g, ""),
    isReady : true,
    error : function(name) {
      throw new Error(name);
    },
    noop : function() {
    },
    isFunction : function(value) {
      return "function" === jQuery.type(value);
    },
    isArray : Array.isArray,
    isWindow : function(obj) {
      return null != obj && obj === obj.window;
    },
    isNumeric : function(value) {
      return !jQuery.isArray(value) && value - parseFloat(value) >= 0;
    },
    isPlainObject : function(object) {
      return "object" !== jQuery.type(object) || object.nodeType || jQuery.isWindow(object) ? false : object.constructor && !hasOwn.call(object.constructor.prototype, "isPrototypeOf") ? false : true;
    },
    isEmptyObject : function(obj) {
      var key;
      for (key in obj) {
        return false;
      }
      return true;
    },
    type : function(obj) {
      return null == obj ? obj + "" : "object" == typeof obj || "function" == typeof obj ? class2type[toString.call(obj)] || "object" : typeof obj;
    },
    globalEval : function(code) {
      var script;
      /** @type {function(string): *} */
      var indirect = eval;
      code = jQuery.trim(code);
      if (code) {
        if (1 === code.indexOf("use strict")) {
          script = document.createElement("script");
          /** @type {string} */
          script.text = code;
          document.head.appendChild(script).parentNode.removeChild(script);
        } else {
          indirect(code);
        }
      }
    },
    camelCase : function(string) {
      return string.replace(nonAscii, "ms-").replace(regPlaceholder, camelCaseHandler);
    },
    nodeName : function(elem, name) {
      return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    },
    each : function(object, callback, a) {
      var anchor;
      /** @type {number} */
      var name = 0;
      var length = object.length;
      var keydownSignal = isArrayLike(object);
      if (a) {
        if (keydownSignal) {
          for (; length > name && (anchor = callback.apply(object[name], a), anchor !== false); name++) {
          }
        } else {
          for (name in object) {
            if (anchor = callback.apply(object[name], a), anchor === false) {
              break;
            }
          }
        }
      } else {
        if (keydownSignal) {
          for (; length > name && (anchor = callback.call(object[name], name, object[name]), anchor !== false); name++) {
          }
        } else {
          for (name in object) {
            if (anchor = callback.call(object[name], name, object[name]), anchor === false) {
              break;
            }
          }
        }
      }
      return object;
    },
    trim : function(text) {
      return null == text ? "" : (text + "").replace(REGEX_ESCAPE_EXPR, "");
    },
    makeArray : function(arr, object) {
      var obj = object || [];
      return null != arr && (isArrayLike(Object(arr)) ? jQuery.merge(obj, "string" == typeof arr ? [arr] : arr) : push.call(obj, arr)), obj;
    },
    inArray : function(elem, arr, i) {
      return null == arr ? -1 : indexOf.call(arr, elem, i);
    },
    merge : function(a, b) {
      /** @type {number} */
      var g = +b.length;
      /** @type {number} */
      var f = 0;
      var l = a.length;
      for (; g > f; f++) {
        a[l++] = b[f];
      }
      return a.length = l, a;
    },
    grep : function(arr, callback, a) {
      var editItemKey;
      /** @type {!Array} */
      var ret = [];
      /** @type {number} */
      var i = 0;
      var len = arr.length;
      /** @type {boolean} */
      var booA = !a;
      for (; len > i; i++) {
        /** @type {boolean} */
        editItemKey = !callback(arr[i], i);
        if (editItemKey !== booA) {
          ret.push(arr[i]);
        }
      }
      return ret;
    },
    map : function(object, f, val) {
      var result;
      /** @type {number} */
      var i = 0;
      var length = object.length;
      var objectProto = isArrayLike(object);
      /** @type {!Array} */
      var values = [];
      if (objectProto) {
        for (; length > i; i++) {
          result = f(object[i], i, val);
          if (null != result) {
            values.push(result);
          }
        }
      } else {
        for (i in object) {
          result = f(object[i], i, val);
          if (null != result) {
            values.push(result);
          }
        }
      }
      return concat.apply([], values);
    },
    guid : 1,
    proxy : function(e, s) {
      var h;
      var headArgs;
      var proxy;
      return "string" == typeof s && (h = e[s], s = e, e = h), jQuery.isFunction(e) ? (headArgs = slice.call(arguments, 2), proxy = function() {
        return e.apply(s || this, headArgs.concat(slice.call(arguments)));
      }, proxy.guid = e.guid = e.guid || jQuery.guid++, proxy) : void 0;
    },
    now : Date.now,
    support : support
  });
  jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, p_Interval) {
    class2type["[object " + p_Interval + "]"] = p_Interval.toLowerCase();
  });
  var Sizzle = function(window) {
    /**
     * @param {string} selector
     * @param {!Object} context
     * @param {string} results
     * @param {!Array} seed
     * @return {?}
     */
    function Sizzle(selector, context, results, seed) {
      var match;
      var elem;
      var m;
      var nodeType;
      var i;
      var groups;
      var old;
      var nid;
      var newContext;
      var newSelector;
      if ((context ? context.ownerDocument || context : preferredDoc) !== document && setDocument(context), context = context || document, results = results || [], !selector || "string" != typeof selector) {
        return results;
      }
      if (1 !== (nodeType = context.nodeType) && 9 !== nodeType) {
        return [];
      }
      if (documentIsHTML && !seed) {
        if (match = customSelectorReg.exec(selector)) {
          if (m = match[1]) {
            if (9 === nodeType) {
              if (elem = context.getElementById(m), !elem || !elem.parentNode) {
                return results;
              }
              if (elem.id === m) {
                return results.push(elem), results;
              }
            } else {
              if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
                return results.push(elem), results;
              }
            }
          } else {
            if (match[2]) {
              return push.apply(results, context.getElementsByTagName(selector)), results;
            }
            if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
              return push.apply(results, context.getElementsByClassName(m)), results;
            }
          }
        }
        if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
          if (nid = old = expando, newContext = context, newSelector = 9 === nodeType && selector, 1 === nodeType && "object" !== context.nodeName.toLowerCase()) {
            groups = tokenize(selector);
            if (old = context.getAttribute("id")) {
              nid = old.replace(rescape, "\\$&");
            } else {
              context.setAttribute("id", nid);
            }
            /** @type {string} */
            nid = "[id='" + nid + "'] ";
            i = groups.length;
            for (; i--;) {
              /** @type {string} */
              groups[i] = nid + toSelector(groups[i]);
            }
            newContext = RE_PSEUDOS.test(selector) && testContext(context.parentNode) || context;
            newSelector = groups.join(",");
          }
          if (newSelector) {
            try {
              return push.apply(results, newContext.querySelectorAll(newSelector)), results;
            } catch (q) {
            } finally {
              if (!old) {
                context.removeAttribute("id");
              }
            }
          }
        }
      }
      return select(selector.replace(rtrim, "$1"), context, results, seed);
    }
    /**
     * @return {?}
     */
    function createCache() {
      /**
       * @param {string} id
       * @param {?} module
       * @return {?}
       */
      function cache(id, module) {
        return args.push(id + " ") > Expr.cacheLength && delete cache[args.shift()], cache[id + " "] = module;
      }
      /** @type {!Array} */
      var args = [];
      return cache;
    }
    /**
     * @param {!Function} fn
     * @return {?}
     */
    function markFunction(fn) {
      return fn[expando] = true, fn;
    }
    /**
     * @param {!Function} doSubs
     * @return {?}
     */
    function assert(doSubs) {
      var uiElem = document.createElement("div");
      try {
        return !!doSubs(uiElem);
      } catch (c) {
        return false;
      } finally {
        if (uiElem.parentNode) {
          uiElem.parentNode.removeChild(uiElem);
        }
        /** @type {null} */
        uiElem = null;
      }
    }
    /**
     * @param {string} attrs
     * @param {!Function} handler
     * @return {undefined}
     */
    function addHandle(attrs, handler) {
      var arr = attrs.split("|");
      var i = attrs.length;
      for (; i--;) {
        /** @type {!Function} */
        Expr.attrHandle[arr[i]] = handler;
      }
    }
    /**
     * @param {!Object} a
     * @param {!Object} b
     * @return {?}
     */
    function siblingCheck(a, b) {
      var cur = b && a;
      var num_const = cur && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || W) - (~a.sourceIndex || W);
      if (num_const) {
        return num_const;
      }
      if (cur) {
        for (; cur = cur.nextSibling;) {
          if (cur === b) {
            return -1;
          }
        }
      }
      return a ? 1 : -1;
    }
    /**
     * @param {!Object} a
     * @return {?}
     */
    function jQuerify(a) {
      return function(elem) {
        var b = elem.nodeName.toLowerCase();
        return "input" === b && elem.type === a;
      };
    }
    /**
     * @param {!Object} type
     * @return {?}
     */
    function createButtonPseudo(type) {
      return function(elem) {
        var undefined = elem.nodeName.toLowerCase();
        return ("input" === undefined || "button" === undefined) && elem.type === type;
      };
    }
    /**
     * @param {!Function} fn
     * @return {?}
     */
    function createPositionalPseudo(fn) {
      return markFunction(function(left) {
        return left = +left, markFunction(function(a, b) {
          var i;
          var f = fn([], a.length, left);
          var j = f.length;
          for (; j--;) {
            if (a[i = f[j]]) {
              /** @type {boolean} */
              a[i] = !(b[i] = a[i]);
            }
          }
        });
      });
    }
    /**
     * @param {!Node} context
     * @return {?}
     */
    function testContext(context) {
      return context && typeof context.getElementsByTagName !== strundefined && context;
    }
    /**
     * @return {undefined}
     */
    function setFilters() {
    }
    /**
     * @param {!Array} text
     * @return {?}
     */
    function toSelector(text) {
      /** @type {number} */
      var i = 0;
      var l = text.length;
      /** @type {string} */
      var selector = "";
      for (; l > i; i++) {
        /** @type {string} */
        selector = selector + text[i].value;
      }
      return selector;
    }
    /**
     * @param {!Function} matcher
     * @param {!Object} combinator
     * @param {string} base
     * @return {?}
     */
    function addCombinator(matcher, combinator, base) {
      var dir = combinator.dir;
      var checkNonElements = base && "parentNode" === dir;
      /** @type {number} */
      var doneName = done++;
      return combinator.first ? function(elem, stat, context) {
        for (; elem = elem[dir];) {
          if (1 === elem.nodeType || checkNonElements) {
            return matcher(elem, stat, context);
          }
        }
      } : function(elem, context, xml) {
        var oldCache;
        var outerCache;
        /** @type {!Array} */
        var newCache = [dirruns, doneName];
        if (xml) {
          for (; elem = elem[dir];) {
            if ((1 === elem.nodeType || checkNonElements) && matcher(elem, context, xml)) {
              return true;
            }
          }
        } else {
          for (; elem = elem[dir];) {
            if (1 === elem.nodeType || checkNonElements) {
              if (outerCache = elem[expando] || (elem[expando] = {}), (oldCache = outerCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                return newCache[2] = oldCache[2];
              }
              if (outerCache[dir] = newCache, newCache[2] = matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        }
      };
    }
    /**
     * @param {!Object} matchers
     * @return {?}
     */
    function elementMatcher(matchers) {
      return matchers.length > 1 ? function(elem, context, xml) {
        var i = matchers.length;
        for (; i--;) {
          if (!matchers[i](elem, context, xml)) {
            return false;
          }
        }
        return true;
      } : matchers[0];
    }
    /**
     * @param {string} selector
     * @param {!NodeList} contexts
     * @param {boolean} results
     * @return {?}
     */
    function multipleContexts(selector, contexts, results) {
      /** @type {number} */
      var i = 0;
      var len = contexts.length;
      for (; len > i; i++) {
        Sizzle(selector, contexts[i], results);
      }
      return results;
    }
    /**
     * @param {!Array} object
     * @param {!Object} selector
     * @param {!Function} callback
     * @param {?} name
     * @param {!Object} e
     * @return {?}
     */
    function extend(object, selector, callback, name, e) {
      var value;
      /** @type {!Array} */
      var destination = [];
      /** @type {number} */
      var i = 0;
      var length = object.length;
      /** @type {boolean} */
      var isDrawLayerVisibled = null != selector;
      for (; length > i; i++) {
        if ((value = object[i]) && (!callback || callback(value, name, e))) {
          destination.push(value);
          if (isDrawLayerVisibled) {
            selector.push(i);
          }
        }
      }
      return destination;
    }
    /**
     * @param {!Function} g
     * @param {!Object} selector
     * @param {string} callback
     * @param {!Object} e
     * @param {!Array} f
     * @param {!Object} data
     * @return {?}
     */
    function render(g, selector, callback, e, f, data) {
      return e && !e[expando] && (e = render(e)), f && !f[expando] && (f = render(f, data)), markFunction(function(res, self, context, p) {
        var value;
        var i;
        var item;
        /** @type {!Array} */
        var values = [];
        /** @type {!Array} */
        var path = [];
        var s = self.length;
        var _data = res || multipleContexts(selector || "*", context.nodeType ? [context] : context, []);
        var data = !g || !res && selector ? _data : extend(_data, values, g, context, p);
        var target = callback ? f || (res ? g : s || e) ? [] : self : data;
        if (callback && callback(data, target, context, p), e) {
          value = extend(target, path);
          e(value, [], context, p);
          i = value.length;
          for (; i--;) {
            if (item = value[i]) {
              /** @type {boolean} */
              target[path[i]] = !(data[path[i]] = item);
            }
          }
        }
        if (res) {
          if (f || g) {
            if (f) {
              /** @type {!Array} */
              value = [];
              i = target.length;
              for (; i--;) {
                if (item = target[i]) {
                  value.push(data[i] = item);
                }
              }
              f(null, target = [], value, p);
            }
            i = target.length;
            for (; i--;) {
              if ((item = target[i]) && (value = f ? self.call(res, item) : values[i]) > -1) {
                /** @type {boolean} */
                res[value] = !(self[value] = item);
              }
            }
          }
        } else {
          target = extend(target === self ? target.splice(s, target.length) : target);
          if (f) {
            f(null, self, target, p);
          } else {
            push.apply(self, target);
          }
        }
      });
    }
    /**
     * @param {!Array} tokens
     * @return {?}
     */
    function matcherFromTokens(tokens) {
      var text;
      var matcher;
      var j;
      var length = tokens.length;
      var leadingRelative = Expr.relative[tokens[0].type];
      var implicitRelative = leadingRelative || Expr.relative[" "];
      /** @type {number} */
      var i = leadingRelative ? 1 : 0;
      var matchContext = addCombinator(function(tag) {
        return tag === text;
      }, implicitRelative, true);
      var matchAnyContext = addCombinator(function(a) {
        return self.call(text, a) > -1;
      }, implicitRelative, true);
      /** @type {!Array} */
      var matchers = [function(elem, context, xml) {
        return !leadingRelative && (xml || context !== outermostContext) || ((text = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
      }];
      for (; length > i; i++) {
        if (matcher = Expr.relative[tokens[i].type]) {
          /** @type {!Array} */
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          if (matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches), matcher[expando]) {
            /** @type {number} */
            j = ++i;
            for (; length > j && !Expr.relative[tokens[j].type]; j++) {
            }
            return render(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
              value : " " === tokens[i - 2].type ? "*" : ""
            })).replace(rtrim, "$1"), matcher, j > i && matcherFromTokens(tokens.slice(i, j)), length > j && matcherFromTokens(tokens = tokens.slice(j)), length > j && toSelector(tokens));
          }
          matchers.push(matcher);
        }
      }
      return elementMatcher(matchers);
    }
    /**
     * @param {!Array} elementMatchers
     * @param {!Array} setMatchers
     * @return {?}
     */
    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      /** @type {boolean} */
      var bySet = setMatchers.length > 0;
      /** @type {boolean} */
      var error = elementMatchers.length > 0;
      /**
       * @param {!Function} message
       * @param {string} context
       * @param {?} xml
       * @param {!Array} results
       * @param {!Object} key
       * @return {?}
       */
      var superMatcher = function(message, context, xml, results, key) {
        var elem;
        var j;
        var matcher;
        /** @type {number} */
        var matchedCount = 0;
        /** @type {string} */
        var i = "0";
        var unmatched = message && [];
        /** @type {!Array} */
        var data = [];
        var contextBackup = outermostContext;
        var content = message || error && Expr.find.TAG("*", key);
        var dirrunsUnique = dirruns = dirruns + (null == contextBackup ? 1 : Math.random() || .1);
        var content_length = content.length;
        if (key) {
          outermostContext = context !== document && context;
        }
        for (; i !== content_length && null != (elem = content[i]); i++) {
          if (error && elem) {
            /** @type {number} */
            j = 0;
            for (; matcher = elementMatchers[j++];) {
              if (matcher(elem, context, xml)) {
                results.push(elem);
                break;
              }
            }
            if (key) {
              dirruns = dirrunsUnique;
            }
          }
          if (bySet) {
            if (elem = !matcher && elem) {
              matchedCount--;
            }
            if (message) {
              unmatched.push(elem);
            }
          }
        }
        if (matchedCount = matchedCount + i, bySet && i !== matchedCount) {
          /** @type {number} */
          j = 0;
          for (; matcher = setMatchers[j++];) {
            matcher(unmatched, data, context, xml);
          }
          if (message) {
            if (matchedCount > 0) {
              for (; i--;) {
                if (!(unmatched[i] || data[i])) {
                  data[i] = pop.call(results);
                }
              }
            }
            data = extend(data);
          }
          push.apply(results, data);
          if (key && !message && data.length > 0 && matchedCount + setMatchers.length > 1) {
            Sizzle.uniqueSort(results);
          }
        }
        return key && (dirruns = dirrunsUnique, outermostContext = contextBackup), unmatched;
      };
      return bySet ? markFunction(superMatcher) : superMatcher;
    }
    var i;
    var support;
    var Expr;
    var format;
    var isNative;
    var tokenize;
    var compile;
    var select;
    var outermostContext;
    var keys;
    var n;
    var setDocument;
    var document;
    var docElem;
    var documentIsHTML;
    var rbuggyQSA;
    var rbuggyMatches;
    var matches;
    var contains;
    /** @type {string} */
    var expando = "sizzle" + -new Date;
    var preferredDoc = window.document;
    /** @type {number} */
    var dirruns = 0;
    /** @type {number} */
    var done = 0;
    var classCache = createCache();
    var tokenCache = createCache();
    var compilerCache = createCache();
    /**
     * @param {?} z
     * @param {?} r
     * @return {?}
     */
    var f = function(z, r) {
      return z === r && (n = true), 0;
    };
    /** @type {string} */
    var strundefined = "undefined";
    /** @type {number} */
    var W = 1 << 31;
    /** @type {function(this:Object, *): boolean} */
    var hasOwn = {}.hasOwnProperty;
    /** @type {!Array} */
    var arr = [];
    /** @type {function(this:IArrayLike<T>): T} */
    var pop = arr.pop;
    /** @type {function(this:IArrayLike<T>, ...T): number} */
    var path = arr.push;
    /** @type {function(this:IArrayLike<T>, ...T): number} */
    var push = arr.push;
    /** @type {function(this:(IArrayLike<T>|string), *=, *=): !Array<T>} */
    var slice = arr.slice;
    /** @type {function(this:(IArrayLike<T>|string), T, number=): number} */
    var self = arr.indexOf || function(value) {
      /** @type {number} */
      var i = 0;
      var l = this.length;
      for (; l > i; i++) {
        if (this[i] === value) {
          return i;
        }
      }
      return -1;
    };
    /** @type {string} */
    var value = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped";
    /** @type {string} */
    var _$rw$ = "[\\x20\\t\\r\\n\\f]";
    /** @type {string} */
    var characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+";
    /** @type {string} */
    var identifier = characterEncoding.replace("w", "w#");
    /** @type {string} */
    var _end2 = "\\[" + _$rw$ + "*(" + characterEncoding + ")(?:" + _$rw$ + "*([*^$|!~]?=)" + _$rw$ + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + _$rw$ + "*\\]";
    /** @type {string} */
    var pseudos = ":(" + characterEncoding + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + _end2 + ")*)|.*)\\)|)";
    /** @type {!RegExp} */
    var rtrim = new RegExp("^" + _$rw$ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _$rw$ + "+$", "g");
    /** @type {!RegExp} */
    var chunker = new RegExp("^" + _$rw$ + "*," + _$rw$ + "*");
    /** @type {!RegExp} */
    var rcomma = new RegExp("^" + _$rw$ + "*([>+~]|" + _$rw$ + ")" + _$rw$ + "*");
    /** @type {!RegExp} */
    var reTrimSpaces = new RegExp("=" + _$rw$ + "*([^\\]'\"]*?)" + _$rw$ + "*\\]", "g");
    /** @type {!RegExp} */
    var rpseudo = new RegExp(pseudos);
    /** @type {!RegExp} */
    var ridentifier = new RegExp("^" + identifier + "$");
    var matchExpr = {
      ID : new RegExp("^#(" + characterEncoding + ")"),
      CLASS : new RegExp("^\\.(" + characterEncoding + ")"),
      TAG : new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
      ATTR : new RegExp("^" + _end2),
      PSEUDO : new RegExp("^" + pseudos),
      CHILD : new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _$rw$ + "*(even|odd|(([+-]|)(\\d*)n|)" + _$rw$ + "*(?:([+-]|)" + _$rw$ + "*(\\d+)|))" + _$rw$ + "*\\)|)", "i"),
      bool : new RegExp("^(?:" + value + ")$", "i"),
      needsContext : new RegExp("^" + _$rw$ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _$rw$ + "*((?:-\\d)?\\d*)" + _$rw$ + "*\\)|)(?=[^-]|$)", "i")
    };
    /** @type {!RegExp} */
    var k_r_success_contrls = /^(?:input|select|textarea|button)$/i;
    /** @type {!RegExp} */
    var rnoType = /^h\d$/i;
    /** @type {!RegExp} */
    var rnative = /^[^{]+\{\s*\[native \w/;
    /** @type {!RegExp} */
    var customSelectorReg = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
    /** @type {!RegExp} */
    var RE_PSEUDOS = /[+~]/;
    /** @type {!RegExp} */
    var rescape = /'|\\/g;
    /** @type {!RegExp} */
    var start = new RegExp("\\\\([\\da-f]{1,6}" + _$rw$ + "?|(" + _$rw$ + ")|.)", "ig");
    /**
     * @param {?} result
     * @param {string} s
     * @param {boolean} escapedWhitespace
     * @return {?}
     */
    var c = function(result, s, escapedWhitespace) {
      /** @type {number} */
      var high = "0x" + s - 65536;
      return high !== high || escapedWhitespace ? s : 0 > high ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, 1023 & high | 56320);
    };
    try {
      push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
      arr[preferredDoc.childNodes.length].nodeType;
    } catch (xb) {
      push = {
        apply : arr.length ? function(x, a) {
          path.apply(x, slice.call(a));
        } : function(target, array) {
          var j = target.length;
          /** @type {number} */
          var item = 0;
          for (; target[j++] = array[item++];) {
          }
          /** @type {number} */
          target.length = j - 1;
        }
      };
    }
    support = Sizzle.support = {};
    /** @type {function(!Object): ?} */
    isNative = Sizzle.isXML = function(elem) {
      var documentElement = elem && (elem.ownerDocument || elem).documentElement;
      return documentElement ? "HTML" !== documentElement.nodeName : false;
    };
    /** @type {function(!Object): ?} */
    setDocument = Sizzle.setDocument = function(node) {
      var isOctal;
      var doc = node ? node.ownerDocument || node : preferredDoc;
      var win = doc.defaultView;
      return doc !== document && 9 === doc.nodeType && doc.documentElement ? (document = doc, docElem = doc.documentElement, documentIsHTML = !isNative(doc), win && win !== win.top && (win.addEventListener ? win.addEventListener("unload", function() {
        setDocument();
      }, false) : win.attachEvent && win.attachEvent("onunload", function() {
        setDocument();
      })), support.attributes = assert(function(elm) {
        return elm.className = "i", !elm.getAttribute("className");
      }), support.getElementsByTagName = assert(function(testee) {
        return testee.appendChild(doc.createComment("")), !testee.getElementsByTagName("*").length;
      }), support.getElementsByClassName = rnative.test(doc.getElementsByClassName) && assert(function(testee) {
        return testee.innerHTML = "<div class='a'></div><div class='a i'></div>", testee.firstChild.className = "i", 2 === testee.getElementsByClassName("i").length;
      }), support.getById = assert(function(body) {
        return docElem.appendChild(body).id = expando, !doc.getElementsByName || !doc.getElementsByName(expando).length;
      }), support.getById ? (Expr.find.ID = function(elem, context) {
        if (typeof context.getElementById !== strundefined && documentIsHTML) {
          var style = context.getElementById(elem);
          return style && style.parentNode ? [style] : [];
        }
      }, Expr.filter.ID = function(elem) {
        var i = elem.replace(start, c);
        return function(a) {
          return a.getAttribute("id") === i;
        };
      }) : (delete Expr.find.ID, Expr.filter.ID = function(elem) {
        var a = elem.replace(start, c);
        return function(elem) {
          var b = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
          return b && b.value === a;
        };
      }), Expr.find.TAG = support.getElementsByTagName ? function(s_elt, document) {
        return typeof document.getElementsByTagName !== strundefined ? document.getElementsByTagName(s_elt) : void 0;
      } : function(selector, document) {
        var pre;
        /** @type {!Array} */
        var results = [];
        /** @type {number} */
        var j = 0;
        var tmp = document.getElementsByTagName(selector);
        if ("*" === selector) {
          for (; pre = tmp[j++];) {
            if (1 === pre.nodeType) {
              results.push(pre);
            }
          }
          return results;
        }
        return tmp;
      }, Expr.find.CLASS = support.getElementsByClassName && function(l, docDom) {
        return typeof docDom.getElementsByClassName !== strundefined && documentIsHTML ? docDom.getElementsByClassName(l) : void 0;
      }, rbuggyMatches = [], rbuggyQSA = [], (support.qsa = rnative.test(doc.querySelectorAll)) && (assert(function(elementRoot) {
        /** @type {string} */
        elementRoot.innerHTML = "<select msallowclip=''><option selected=''></option></select>";
        if (elementRoot.querySelectorAll("[msallowclip^='']").length) {
          rbuggyQSA.push("[*^$]=" + _$rw$ + "*(?:''|\"\")");
        }
        if (!elementRoot.querySelectorAll("[selected]").length) {
          rbuggyQSA.push("\\[" + _$rw$ + "*(?:value|" + value + ")");
        }
        if (!elementRoot.querySelectorAll(":checked").length) {
          rbuggyQSA.push(":checked");
        }
      }), assert(function(a) {
        var element = doc.createElement("input");
        element.setAttribute("type", "hidden");
        a.appendChild(element).setAttribute("name", "D");
        if (a.querySelectorAll("[name=d]").length) {
          rbuggyQSA.push("name" + _$rw$ + "*[*^$|!~]?=");
        }
        if (!a.querySelectorAll(":enabled").length) {
          rbuggyQSA.push(":enabled", ":disabled");
        }
        a.querySelectorAll("*,:x");
        rbuggyQSA.push(",.*:");
      })), (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) && assert(function(el) {
        support.disconnectedMatch = matches.call(el, "div");
        matches.call(el, "[s!='']:x");
        rbuggyMatches.push("!=", pseudos);
      }), rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|")), rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|")), isOctal = rnative.test(docElem.compareDocumentPosition), contains = isOctal || rnative.test(docElem.contains) ? function(a, b) {
        var adown = 9 === a.nodeType ? a.documentElement : a;
        var bup = b && b.parentNode;
        return a === bup || !(!bup || 1 !== bup.nodeType || !(adown.contains ? adown.contains(bup) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(bup)));
      } : function(a, b) {
        if (b) {
          for (; b = b.parentNode;) {
            if (b === a) {
              return true;
            }
          }
        }
        return false;
      }, f = isOctal ? function(a, b) {
        if (a === b) {
          return n = true, 0;
        }
        /** @type {number} */
        var idx = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return idx ? idx : (idx = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & idx || !support.sortDetached && b.compareDocumentPosition(a) === idx ? a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ? -1 : b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ? 1 : keys ? self.call(keys, a) - self.call(keys, b) : 0 : 4 & idx ? -1 : 1);
      } : function(a, b) {
        if (a === b) {
          return n = true, 0;
        }
        var cur;
        /** @type {number} */
        var i = 0;
        var aup = a.parentNode;
        var bup = b.parentNode;
        /** @type {!Array} */
        var ap = [a];
        /** @type {!Array} */
        var bp = [b];
        if (!aup || !bup) {
          return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : keys ? self.call(keys, a) - self.call(keys, b) : 0;
        }
        if (aup === bup) {
          return siblingCheck(a, b);
        }
        /** @type {!Object} */
        cur = a;
        for (; cur = cur.parentNode;) {
          ap.unshift(cur);
        }
        /** @type {!Object} */
        cur = b;
        for (; cur = cur.parentNode;) {
          bp.unshift(cur);
        }
        for (; ap[i] === bp[i];) {
          i++;
        }
        return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
      }, doc) : document;
    };
    /**
     * @param {boolean} expr
     * @param {!Array} set
     * @return {?}
     */
    Sizzle.matches = function(expr, set) {
      return Sizzle(expr, null, null, set);
    };
    /**
     * @param {!Object} elem
     * @param {!Object} selector
     * @return {?}
     */
    Sizzle.matchesSelector = function(elem, selector) {
      if ((elem.ownerDocument || elem) !== document && setDocument(elem), selector = selector.replace(reTrimSpaces, "='$1']"), !(!support.matchesSelector || !documentIsHTML || rbuggyMatches && rbuggyMatches.test(selector) || rbuggyQSA && rbuggyQSA.test(selector))) {
        try {
          var ret = matches.call(elem, selector);
          if (ret || support.disconnectedMatch || elem.document && 11 !== elem.document.nodeType) {
            return ret;
          }
        } catch (e) {
        }
      }
      return Sizzle(selector, document, null, [elem]).length > 0;
    };
    /**
     * @param {!Object} context
     * @param {!Object} selector
     * @return {?}
     */
    Sizzle.contains = function(context, selector) {
      return (context.ownerDocument || context) !== document && setDocument(context), contains(context, selector);
    };
    /**
     * @param {!Object} elem
     * @param {string} name
     * @return {?}
     */
    Sizzle.attr = function(elem, name) {
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }
      var fn = Expr.attrHandle[name.toLowerCase()];
      var val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
      return void 0 !== val ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
    };
    /**
     * @param {!Object} name
     * @return {?}
     */
    Sizzle.error = function(name) {
      throw new Error("Syntax error, unrecognized expression: " + name);
    };
    /**
     * @param {!Array} arr
     * @return {?}
     */
    Sizzle.uniqueSort = function(arr) {
      var x;
      /** @type {!Array} */
      var p = [];
      /** @type {number} */
      var j = 0;
      /** @type {number} */
      var i = 0;
      if (n = !support.detectDuplicates, keys = !support.sortStable && arr.slice(0), arr.sort(f), n) {
        for (; x = arr[i++];) {
          if (x === arr[i]) {
            /** @type {number} */
            j = p.push(i);
          }
        }
        for (; j--;) {
          arr.splice(p[j], 1);
        }
      }
      return keys = null, arr;
    };
    /** @type {function(!Object): ?} */
    format = Sizzle.getText = function(node) {
      var val;
      /** @type {string} */
      var str = "";
      /** @type {number} */
      var count = 0;
      var type = node.nodeType;
      if (type) {
        if (1 === type || 9 === type || 11 === type) {
          if ("string" == typeof node.textContent) {
            return node.textContent;
          }
          node = node.firstChild;
          for (; node; node = node.nextSibling) {
            str = str + format(node);
          }
        } else {
          if (3 === type || 4 === type) {
            return node.nodeValue;
          }
        }
      } else {
        for (; val = node[count++];) {
          str = str + format(val);
        }
      }
      return str;
    };
    Expr = Sizzle.selectors = {
      cacheLength : 50,
      createPseudo : markFunction,
      match : matchExpr,
      attrHandle : {},
      find : {},
      relative : {
        ">" : {
          dir : "parentNode",
          first : true
        },
        " " : {
          dir : "parentNode"
        },
        "+" : {
          dir : "previousSibling",
          first : true
        },
        "~" : {
          dir : "previousSibling"
        }
      },
      preFilter : {
        ATTR : function(match) {
          return match[1] = match[1].replace(start, c), match[3] = (match[3] || match[4] || match[5] || "").replace(start, c), "~=" === match[2] && (match[3] = " " + match[3] + " "), match.slice(0, 4);
        },
        CHILD : function(match) {
          return match[1] = match[1].toLowerCase(), "nth" === match[1].slice(0, 3) ? (match[3] || Sizzle.error(match[0]), match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * ("even" === match[3] || "odd" === match[3])), match[5] = +(match[7] + match[8] || "odd" === match[3])) : match[3] && Sizzle.error(match[0]), match;
        },
        PSEUDO : function(match) {
          var excess;
          var unquoted = !match[6] && match[2];
          return matchExpr.CHILD.test(match[0]) ? null : (match[3] ? match[2] = match[4] || match[5] || "" : unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length) && (match[0] = match[0].slice(0, excess), match[2] = unquoted.slice(0, excess)), match.slice(0, 3));
        }
      },
      filter : {
        TAG : function(elem) {
          var nodeName = elem.replace(start, c).toLowerCase();
          return "*" === elem ? function() {
            return true;
          } : function(elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
          };
        },
        CLASS : function(className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + _$rw$ + ")" + className + "(" + _$rw$ + "|$)")) && classCache(className, function(a) {
            return pattern.test("string" == typeof a.className && a.className || typeof a.getAttribute !== strundefined && a.getAttribute("class") || "");
          });
        },
        ATTR : function(name, string, value) {
          return function(input) {
            var key = Sizzle.attr(input, name);
            return null == key ? "!=" === string : string ? (key = key + "", "=" === string ? key === value : "!=" === string ? key !== value : "^=" === string ? value && 0 === key.indexOf(value) : "*=" === string ? value && key.indexOf(value) > -1 : "$=" === string ? value && key.slice(-value.length) === value : "~=" === string ? (" " + key + " ").indexOf(value) > -1 : "|=" === string ? key === value || key.slice(0, value.length + 1) === value + "-" : false) : true;
          };
        },
        CHILD : function(type, what, argument, first, last) {
          /** @type {boolean} */
          var simple = "nth" !== type.slice(0, 3);
          /** @type {boolean} */
          var forward = "last" !== type.slice(-4);
          /** @type {boolean} */
          var isStrict = "of-type" === what;
          return 1 === first && 0 === last ? function(tplDiv) {
            return !!tplDiv.parentNode;
          } : function(elem, canCreateDiscussions, isParentStrict) {
            var cache;
            var outerCache;
            var node;
            var diff;
            var nodeIndex;
            var start;
            /** @type {string} */
            var dir = simple !== forward ? "nextSibling" : "previousSibling";
            var parent = elem.parentNode;
            var iteratedVal = isStrict && elem.nodeName.toLowerCase();
            /** @type {boolean} */
            var useCache = !isParentStrict && !isStrict;
            if (parent) {
              if (simple) {
                for (; dir;) {
                  /** @type {!Object} */
                  node = elem;
                  for (; node = node[dir];) {
                    if (isStrict ? node.nodeName.toLowerCase() === iteratedVal : 1 === node.nodeType) {
                      return false;
                    }
                  }
                  /** @type {(boolean|string)} */
                  start = dir = "only" === type && !start && "nextSibling";
                }
                return true;
              }
              if (start = [forward ? parent.firstChild : parent.lastChild], forward && useCache) {
                outerCache = parent[expando] || (parent[expando] = {});
                cache = outerCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = cache[0] === dirruns && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];
                for (; node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop();) {
                  if (1 === node.nodeType && ++diff && node === elem) {
                    /** @type {!Array} */
                    outerCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                }
              } else {
                if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
                  diff = cache[1];
                } else {
                  for (; (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) && ((isStrict ? node.nodeName.toLowerCase() !== iteratedVal : 1 !== node.nodeType) || !++diff || (useCache && ((node[expando] || (node[expando] = {}))[type] = [dirruns, diff]), node !== elem));) {
                  }
                }
              }
              return diff = diff - last, diff === first || diff % first === 0 && diff / first >= 0;
            }
          };
        },
        PSEUDO : function(pseudo, argument) {
          var args;
          var fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
          return fn[expando] ? fn(argument) : fn.length > 1 ? (args = [pseudo, pseudo, "", argument], Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(a, prev) {
            var j;
            var result = fn(a, argument);
            var k = result.length;
            for (; k--;) {
              /** @type {number} */
              j = self.call(a, result[k]);
              /** @type {boolean} */
              a[j] = !(prev[j] = result[k]);
            }
          }) : function(responce) {
            return fn(responce, 0, args);
          }) : fn;
        }
      },
      pseudos : {
        not : markFunction(function(selector) {
          /** @type {!Array} */
          var a = [];
          /** @type {!Array} */
          var results = [];
          var matcher = compile(selector.replace(rtrim, "$1"));
          return matcher[expando] ? markFunction(function(a, _table, canCreateDiscussions, context) {
            var v;
            var actual = matcher(a, null, context, []);
            var i = a.length;
            for (; i--;) {
              if (v = actual[i]) {
                /** @type {boolean} */
                a[i] = !(_table[i] = v);
              }
            }
          }) : function(sNewObjName, canCreateDiscussions, context) {
            return a[0] = sNewObjName, matcher(a, null, context, results), !results.pop();
          };
        }),
        has : markFunction(function(selector) {
          return function(elem) {
            return Sizzle(selector, elem).length > 0;
          };
        }),
        contains : markFunction(function(b) {
          return function(a) {
            return (a.textContent || a.innerText || format(a)).indexOf(b) > -1;
          };
        }),
        lang : markFunction(function(lang) {
          return ridentifier.test(lang || "") || Sizzle.error("unsupported lang: " + lang), lang = lang.replace(start, c).toLowerCase(), function(elem) {
            var elemLang;
            do {
              if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                return elemLang = elemLang.toLowerCase(), elemLang === lang || 0 === elemLang.indexOf(lang + "-");
              }
            } while ((elem = elem.parentNode) && 1 === elem.nodeType);
            return false;
          };
        }),
        target : function(name) {
          var charListNotLatin = window.location && window.location.hash;
          return charListNotLatin && charListNotLatin.slice(1) === name.id;
        },
        root : function(elem) {
          return elem === docElem;
        },
        focus : function(obj) {
          return obj === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(obj.type || obj.href || ~obj.tabIndex);
        },
        enabled : function(elem) {
          return elem.disabled === false;
        },
        disabled : function(elem) {
          return elem.disabled === true;
        },
        checked : function(elem) {
          var custom = elem.nodeName.toLowerCase();
          return "input" === custom && !!elem.checked || "option" === custom && !!elem.selected;
        },
        selected : function(elem) {
          return elem.parentNode && elem.parentNode.selectedIndex, elem.selected === true;
        },
        empty : function(elem) {
          elem = elem.firstChild;
          for (; elem; elem = elem.nextSibling) {
            if (elem.nodeType < 6) {
              return false;
            }
          }
          return true;
        },
        parent : function(name) {
          return !Expr.pseudos.empty(name);
        },
        header : function(elem) {
          return rnoType.test(elem.nodeName);
        },
        input : function(element) {
          return k_r_success_contrls.test(element.nodeName);
        },
        button : function(elem) {
          var left = elem.nodeName.toLowerCase();
          return "input" === left && "button" === elem.type || "button" === left;
        },
        text : function(elem) {
          var EXT;
          return "input" === elem.nodeName.toLowerCase() && "text" === elem.type && (null == (EXT = elem.getAttribute("type")) || "text" === EXT.toLowerCase());
        },
        first : createPositionalPseudo(function() {
          return [0];
        }),
        last : createPositionalPseudo(function(a, b) {
          return [b - 1];
        }),
        eq : createPositionalPseudo(function(a, dt, max) {
          return [0 > max ? max + dt : max];
        }),
        even : createPositionalPseudo(function(allSwitches, sNext) {
          /** @type {number} */
          var s = 0;
          for (; sNext > s; s = s + 2) {
            allSwitches.push(s);
          }
          return allSwitches;
        }),
        odd : createPositionalPseudo(function(allSwitches, sNext) {
          /** @type {number} */
          var s = 1;
          for (; sNext > s; s = s + 2) {
            allSwitches.push(s);
          }
          return allSwitches;
        }),
        lt : createPositionalPseudo(function(matchingTags, dt, max) {
          var tag = 0 > max ? max + dt : max;
          for (; --tag >= 0;) {
            matchingTags.push(tag);
          }
          return matchingTags;
        }),
        gt : createPositionalPseudo(function(matchingTags, dt, max) {
          var tag = 0 > max ? max + dt : max;
          for (; ++tag < dt;) {
            matchingTags.push(tag);
          }
          return matchingTags;
        })
      }
    };
    Expr.pseudos.nth = Expr.pseudos.eq;
    for (i in{
      radio : true,
      checkbox : true,
      file : true,
      password : true,
      image : true
    }) {
      Expr.pseudos[i] = jQuerify(i);
    }
    for (i in{
      submit : true,
      reset : true
    }) {
      Expr.pseudos[i] = createButtonPseudo(i);
    }
    return setFilters.prototype = Expr.filters = Expr.pseudos, Expr.setFilters = new setFilters, tokenize = Sizzle.tokenize = function(selector, parseOnly) {
      var matched;
      var match;
      var tokens;
      var type;
      var soFar;
      var groups;
      var preFilters;
      var cached = tokenCache[selector + " "];
      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }
      /** @type {(Object|string)} */
      soFar = selector;
      /** @type {!Array} */
      groups = [];
      preFilters = Expr.preFilter;
      for (; soFar;) {
        if (!matched || (match = chunker.exec(soFar))) {
          if (match) {
            soFar = soFar.slice(match[0].length) || soFar;
          }
          groups.push(tokens = []);
        }
        /** @type {boolean} */
        matched = false;
        if (match = rcomma.exec(soFar)) {
          /** @type {string} */
          matched = match.shift();
          tokens.push({
            value : matched,
            type : match[0].replace(rtrim, " ")
          });
          soFar = soFar.slice(matched.length);
        }
        for (type in Expr.filter) {
          if (!(!(match = matchExpr[type].exec(soFar)) || preFilters[type] && !(match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value : matched,
              type : type,
              matches : match
            });
            soFar = soFar.slice(matched.length);
          }
        }
        if (!matched) {
          break;
        }
      }
      return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
    }, compile = Sizzle.compile = function(selector, group) {
      var i;
      /** @type {!Array} */
      var setMatchers = [];
      /** @type {!Array} */
      var elementMatchers = [];
      var cached = compilerCache[selector + " "];
      if (!cached) {
        if (!group) {
          group = tokenize(selector);
        }
        i = group.length;
        for (; i--;) {
          cached = matcherFromTokens(group[i]);
          if (cached[expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        }
        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
        /** @type {string} */
        cached.selector = selector;
      }
      return cached;
    }, select = Sizzle.select = function(selector, context, results, seed) {
      var i;
      var tokens;
      var token;
      var type;
      var find;
      /** @type {(!Function|boolean)} */
      var compiled = "function" == typeof selector && selector;
      var match = !seed && tokenize(selector = compiled.selector || selector);
      if (results = results || [], 1 === match.length) {
        if (tokens = match[0] = match[0].slice(0), tokens.length > 2 && "ID" === (token = tokens[0]).type && support.getById && 9 === context.nodeType && documentIsHTML && Expr.relative[tokens[1].type]) {
          if (context = (Expr.find.ID(token.matches[0].replace(start, c), context) || [])[0], !context) {
            return results;
          }
          if (compiled) {
            context = context.parentNode;
          }
          selector = selector.slice(tokens.shift().value.length);
        }
        i = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
        for (; i-- && (token = tokens[i], !Expr.relative[type = token.type]);) {
          if ((find = Expr.find[type]) && (seed = find(token.matches[0].replace(start, c), RE_PSEUDOS.test(tokens[0].type) && testContext(context.parentNode) || context))) {
            if (tokens.splice(i, 1), selector = seed.length && toSelector(tokens), !selector) {
              return push.apply(results, seed), results;
            }
            break;
          }
        }
      }
      return (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, RE_PSEUDOS.test(selector) && testContext(context.parentNode) || context), results;
    }, support.sortStable = expando.split("").sort(f).join("") === expando, support.detectDuplicates = !!n, setDocument(), support.sortDetached = assert(function(div1) {
      return 1 & div1.compareDocumentPosition(document.createElement("div"));
    }), assert(function(aItem) {
      return aItem.innerHTML = "<a href='#'></a>", "#" === aItem.firstChild.getAttribute("href");
    }) || addHandle("type|href|height|width", function(a, b, asymmetrical) {
      return asymmetrical ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), support.attributes && assert(function(aItem) {
      return aItem.innerHTML = "<input/>", aItem.firstChild.setAttribute("value", ""), "" === aItem.firstChild.getAttribute("value");
    }) || addHandle("value", function(object, b, directory) {
      return directory || "input" !== object.nodeName.toLowerCase() ? void 0 : object.defaultValue;
    }), assert(function(a) {
      return null == a.getAttribute("disabled");
    }) || addHandle(value, function(elem, name, canCreateDiscussions) {
      var val;
      return canCreateDiscussions ? void 0 : elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
    }), Sizzle;
  }(window);
  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors;
  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
  var rneedsContext = jQuery.expr.match.needsContext;
  /** @type {!RegExp} */
  var rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
  /** @type {!RegExp} */
  var $jsilxna = /^.[^:#\[\.,]*$/;
  /**
   * @param {!Object} key
   * @param {string} text
   * @param {!Object} data
   * @return {?}
   */
  jQuery.filter = function(key, text, data) {
    var node = text[0];
    return data && (key = ":not(" + key + ")"), 1 === text.length && 1 === node.nodeType ? jQuery.find.matchesSelector(node, key) ? [node] : [] : jQuery.find.matches(key, jQuery.grep(text, function(nodeToInspect) {
      return 1 === nodeToInspect.nodeType;
    }));
  };
  jQuery.fn.extend({
    find : function(selector) {
      var i;
      var len = this.length;
      /** @type {!Array} */
      var ret = [];
      var self = this;
      if ("string" != typeof selector) {
        return this.pushStack(jQuery(selector).filter(function() {
          /** @type {number} */
          i = 0;
          for (; len > i; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }
      /** @type {number} */
      i = 0;
      for (; len > i; i++) {
        jQuery.find(selector, self[i], ret);
      }
      return ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret), ret.selector = this.selector ? this.selector + " " + selector : selector, ret;
    },
    filter : function(args) {
      return this.pushStack(filter(this, args || [], false));
    },
    not : function(elem) {
      return this.pushStack(filter(this, elem || [], true));
    },
    is : function(selector) {
      return !!filter(this, "string" == typeof selector && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
    }
  });
  var rootjQuery;
  /** @type {!RegExp} */
  var customSelectorReg = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  /** @type {function(!Object, !Object): ?} */
  var init = jQuery.fn.init = function(selector, context) {
    var match;
    var emement;
    if (!selector) {
      return this;
    }
    if ("string" == typeof selector) {
      if (match = "<" === selector[0] && ">" === selector[selector.length - 1] && selector.length >= 3 ? [null, selector, null] : customSelectorReg.exec(selector), !match || !match[1] && context) {
        return !context || context.jquery ? (context || rootjQuery).find(selector) : this.constructor(context).find(selector);
      }
      if (match[1]) {
        if (context = context instanceof jQuery ? context[0] : context, jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)), rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
          for (match in context) {
            if (jQuery.isFunction(this[match])) {
              this[match](context[match]);
            } else {
              this.attr(match, context[match]);
            }
          }
        }
        return this;
      }
      return emement = document.getElementById(match[2]), emement && emement.parentNode && (this.length = 1, this[0] = emement), this.context = document, this.selector = selector, this;
    }
    return selector.nodeType ? (this.context = this[0] = selector, this.length = 1, this) : jQuery.isFunction(selector) ? "undefined" != typeof rootjQuery.ready ? rootjQuery.ready(selector) : selector(jQuery) : (void 0 !== selector.selector && (this.selector = selector.selector, this.context = selector.context), jQuery.makeArray(selector, this));
  };
  init.prototype = jQuery.fn;
  rootjQuery = jQuery(document);
  /** @type {!RegExp} */
  var testRxp = /^(?:parents|prev(?:Until|All))/;
  var guaranteedUnique = {
    children : true,
    contents : true,
    next : true,
    prev : true
  };
  jQuery.extend({
    dir : function(a, t, c) {
      /** @type {!Array} */
      var result = [];
      /** @type {boolean} */
      var digits = void 0 !== c;
      for (; (a = a[t]) && 9 !== a.nodeType;) {
        if (1 === a.nodeType) {
          if (digits && jQuery(a).is(c)) {
            break;
          }
          result.push(a);
        }
      }
      return result;
    },
    sibling : function(n, elem) {
      /** @type {!Array} */
      var r = [];
      for (; n; n = n.nextSibling) {
        if (1 === n.nodeType && n !== elem) {
          r.push(n);
        }
      }
      return r;
    }
  });
  jQuery.fn.extend({
    has : function(name) {
      var targets = jQuery(name, this);
      var l = targets.length;
      return this.filter(function() {
        /** @type {number} */
        var i = 0;
        for (; l > i; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    closest : function(selector, context) {
      var node;
      /** @type {number} */
      var offset = 0;
      var count = this.length;
      /** @type {!Array} */
      var ret = [];
      var g = rneedsContext.test(selector) || "string" != typeof selector ? jQuery(selector, context || this.context) : 0;
      for (; count > offset; offset++) {
        node = this[offset];
        for (; node && node !== context; node = node.parentNode) {
          if (node.nodeType < 11 && (g ? g.index(node) > -1 : 1 === node.nodeType && jQuery.find.matchesSelector(node, selector))) {
            ret.push(node);
            break;
          }
        }
      }
      return this.pushStack(ret.length > 1 ? jQuery.unique(ret) : ret);
    },
    index : function(elem) {
      return elem ? "string" == typeof elem ? indexOf.call(jQuery(elem), this[0]) : indexOf.call(this, elem.jquery ? elem[0] : elem) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add : function(name, value) {
      return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(name, value))));
    },
    addBack : function(selector) {
      return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector));
    }
  });
  jQuery.each({
    parent : function(name) {
      var n = name.parentNode;
      return n && 11 !== n.nodeType ? n : null;
    },
    parents : function(elem) {
      return jQuery.dir(elem, "parentNode");
    },
    parentsUntil : function(target, i, elem) {
      return jQuery.dir(target, "parentNode", elem);
    },
    next : function(elem) {
      return sibling(elem, "nextSibling");
    },
    prev : function(elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll : function(elem) {
      return jQuery.dir(elem, "nextSibling");
    },
    prevAll : function(elem) {
      return jQuery.dir(elem, "previousSibling");
    },
    nextUntil : function(context, start, callback) {
      return jQuery.dir(context, "nextSibling", callback);
    },
    prevUntil : function(elem, i, start) {
      return jQuery.dir(elem, "previousSibling", start);
    },
    siblings : function(elem) {
      return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
    },
    children : function(name) {
      return jQuery.sibling(name.firstChild);
    },
    contents : function(elem) {
      return elem.contentDocument || jQuery.merge([], elem.childNodes);
    }
  }, function(name, b) {
    /**
     * @param {!Object} args
     * @param {!Object} opts
     * @return {?}
     */
    jQuery.fn[name] = function(args, opts) {
      var data = jQuery.map(this, b, args);
      return "Until" !== name.slice(-5) && (opts = args), opts && "string" == typeof opts && (data = jQuery.filter(opts, data)), this.length > 1 && (guaranteedUnique[name] || jQuery.unique(data), testRxp.test(name) && data.reverse()), this.pushStack(data);
    };
  });
  /** @type {!RegExp} */
  var rnotwhite = /\S+/g;
  var optionsCache = {};
  /**
   * @param {!Object} options
   * @return {?}
   */
  jQuery.Callbacks = function(options) {
    options = "string" == typeof options ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);
    var memory;
    var process;
    var serializer;
    var min;
    var n;
    var max;
    /** @type {!Array} */
    var val = [];
    /** @type {(Array|boolean)} */
    var list = !options.once && [];
    /**
     * @param {!Object} data
     * @return {undefined}
     */
    var fire = function(data) {
      memory = options.memory && data;
      /** @type {boolean} */
      process = true;
      max = min || 0;
      /** @type {number} */
      min = 0;
      n = val.length;
      /** @type {boolean} */
      serializer = true;
      for (; val && n > max; max++) {
        if (val[max].apply(data[0], data[1]) === false && options.stopOnFalse) {
          /** @type {boolean} */
          memory = false;
          break;
        }
      }
      /** @type {boolean} */
      serializer = false;
      if (val) {
        if (list) {
          if (list.length) {
            fire(list.shift());
          }
        } else {
          if (memory) {
            /** @type {!Array} */
            val = [];
          } else {
            self.disable();
          }
        }
      }
    };
    var self = {
      add : function() {
        if (val) {
          var y = val.length;
          !function add(obj) {
            jQuery.each(obj, function(b, value) {
              var type = jQuery.type(value);
              if ("function" === type) {
                if (!(options.unique && self.has(value))) {
                  val.push(value);
                }
              } else {
                if (value && value.length && "string" !== type) {
                  add(value);
                }
              }
            });
          }(arguments);
          if (serializer) {
            n = val.length;
          } else {
            if (memory) {
              min = y;
              fire(memory);
            }
          }
        }
        return this;
      },
      remove : function() {
        return val && jQuery.each(arguments, function(a, b) {
          var index;
          for (; (index = jQuery.inArray(b, val, index)) > -1;) {
            val.splice(index, 1);
            if (serializer) {
              if (n >= index) {
                n--;
              }
              if (max >= index) {
                max--;
              }
            }
          }
        }), this;
      },
      has : function(name) {
        return name ? jQuery.inArray(name, val) > -1 : !(!val || !val.length);
      },
      empty : function() {
        return val = [], n = 0, this;
      },
      disable : function() {
        return val = list = memory = void 0, this;
      },
      disabled : function() {
        return !val;
      },
      lock : function() {
        return list = void 0, memory || self.disable(), this;
      },
      locked : function() {
        return !list;
      },
      fireWith : function(context, args) {
        return !val || process && !list || (args = args || [], args = [context, args.slice ? args.slice() : args], serializer ? list.push(args) : fire(args)), this;
      },
      fire : function() {
        return self.fireWith(this, arguments), this;
      },
      fired : function() {
        return !!process;
      }
    };
    return self;
  };
  jQuery.extend({
    Deferred : function(func) {
      /** @type {!Array} */
      var a = [["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]];
      /** @type {string} */
      var state = "pending";
      var promise = {
        state : function() {
          return state;
        },
        always : function() {
          return deferred.done(arguments).fail(arguments), this;
        },
        then : function() {
          /** @type {!Arguments} */
          var fns = arguments;
          return jQuery.Deferred(function(newDefer) {
            jQuery.each(a, function(i, tuple) {
              var fn = jQuery.isFunction(fns[i]) && fns[i];
              deferred[tuple[1]](function() {
                var returned = fn && fn.apply(this, arguments);
                if (returned && jQuery.isFunction(returned.promise)) {
                  returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
                } else {
                  newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
                }
              });
            });
            /** @type {null} */
            fns = null;
          }).promise();
        },
        promise : function(context) {
          return null != context ? jQuery.extend(context, promise) : promise;
        }
      };
      var deferred = {};
      return promise.pipe = promise.then, jQuery.each(a, function(swap, tuple) {
        var list = tuple[2];
        var stateString = tuple[3];
        promise[tuple[1]] = list.add;
        if (stateString) {
          list.add(function() {
            state = stateString;
          }, a[1 ^ swap][2].disable, a[2][2].lock);
        }
        /**
         * @return {?}
         */
        deferred[tuple[0]] = function() {
          return deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments), this;
        };
        deferred[tuple[0] + "With"] = list.fireWith;
      }), promise.promise(deferred), func && func.call(deferred, deferred), deferred;
    },
    when : function(subordinate) {
      var progressValues;
      var progressContexts;
      var resolveContexts;
      /** @type {number} */
      var i = 0;
      /** @type {!Array<?>} */
      var resolveValues = slice.call(arguments);
      /** @type {number} */
      var length = resolveValues.length;
      /** @type {number} */
      var index = 1 !== length || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0;
      var deferred = 1 === index ? subordinate : jQuery.Deferred();
      /**
       * @param {number} i
       * @param {number} ctx
       * @param {number} val
       * @return {?}
       */
      var updateFn = function(i, ctx, val) {
        return function(value) {
          ctx[i] = this;
          val[i] = arguments.length > 1 ? slice.call(arguments) : value;
          if (val === progressValues) {
            deferred.notifyWith(ctx, val);
          } else {
            if (!--index) {
              deferred.resolveWith(ctx, val);
            }
          }
        };
      };
      if (length > 1) {
        /** @type {!Array} */
        progressValues = new Array(length);
        /** @type {!Array} */
        progressContexts = new Array(length);
        /** @type {!Array} */
        resolveContexts = new Array(length);
        for (; length > i; i++) {
          if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
            resolveValues[i].promise().done(updateFn(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFn(i, progressContexts, progressValues));
          } else {
            --index;
          }
        }
      }
      return index || deferred.resolveWith(resolveContexts, resolveValues), deferred.promise();
    }
  });
  var readyList;
  /**
   * @param {!Object} key
   * @return {?}
   */
  jQuery.fn.ready = function(key) {
    return jQuery.ready.promise().done(key), this;
  };
  jQuery.extend({
    isReady : false,
    readyWait : 1,
    holdReady : function(hold) {
      if (hold) {
        jQuery.readyWait++;
      } else {
        jQuery.ready(true);
      }
    },
    ready : function(wait) {
      if (!(wait === true ? --jQuery.readyWait : jQuery.isReady)) {
        /** @type {boolean} */
        jQuery.isReady = true;
        if (!(wait !== true && --jQuery.readyWait > 0)) {
          readyList.resolveWith(document, [jQuery]);
          if (jQuery.fn.triggerHandler) {
            jQuery(document).triggerHandler("ready");
            jQuery(document).off("ready");
          }
        }
      }
    }
  });
  /**
   * @param {string} obj
   * @return {?}
   */
  jQuery.ready.promise = function(obj) {
    return readyList || (readyList = jQuery.Deferred(), "complete" === document.readyState ? setTimeout(jQuery.ready) : (document.addEventListener("DOMContentLoaded", $__jsx_onload, false), window.addEventListener("load", $__jsx_onload, false))), readyList.promise(obj);
  };
  jQuery.ready.promise();
  /** @type {function(!Object, !Function, !Object, ?, number, string, boolean): ?} */
  var access = jQuery.access = function(elems, fn, key, value, chainable, emptyGet, raw) {
    /** @type {number} */
    var i = 0;
    var len = elems.length;
    /** @type {boolean} */
    var bulk = null == key;
    if ("object" === jQuery.type(key)) {
      /** @type {boolean} */
      chainable = true;
      for (i in key) {
        jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
      }
    } else {
      if (void 0 !== value && (chainable = true, jQuery.isFunction(value) || (raw = true), bulk && (raw ? (fn.call(elems, value), fn = null) : (bulk = fn, fn = function(elem, o, value) {
        return bulk.call(jQuery(elem), value);
      })), fn)) {
        for (; len > i; i++) {
          fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
      }
    }
    return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
  };
  /**
   * @param {!Object} elem
   * @return {?}
   */
  jQuery.acceptData = function(elem) {
    return 1 === elem.nodeType || 9 === elem.nodeType || !+elem.nodeType;
  };
  /** @type {number} */
  Data.uid = 1;
  /** @type {function(!Object): ?} */
  Data.accepts = jQuery.acceptData;
  Data.prototype = {
    key : function(owner) {
      if (!Data.accepts(owner)) {
        return 0;
      }
      var descriptor = {};
      var unlock = owner[this.expando];
      if (!unlock) {
        /** @type {number} */
        unlock = Data.uid++;
        try {
          descriptor[this.expando] = {
            value : unlock
          };
          Object.defineProperties(owner, descriptor);
        } catch (d) {
          /** @type {number} */
          descriptor[this.expando] = unlock;
          jQuery.extend(owner, descriptor);
        }
      }
      return this.cache[unlock] || (this.cache[unlock] = {}), unlock;
    },
    set : function(id, value, object) {
      var name;
      var k = this.key(id);
      var result = this.cache[k];
      if ("string" == typeof value) {
        result[value] = object;
      } else {
        if (jQuery.isEmptyObject(result)) {
          jQuery.extend(this.cache[k], value);
        } else {
          for (name in value) {
            result[name] = value[name];
          }
        }
      }
      return result;
    },
    get : function(name, value) {
      var val = this.cache[this.key(name)];
      return void 0 === value ? val : val[value];
    },
    access : function(a, value, fn) {
      var d;
      return void 0 === value || value && "string" == typeof value && void 0 === fn ? (d = this.get(a, value), void 0 !== d ? d : this.get(a, jQuery.camelCase(value))) : (this.set(a, value, fn), void 0 !== fn ? fn : value);
    },
    remove : function(id, key) {
      var i;
      var name;
      var camel;
      var unlock = this.key(id);
      var cache = this.cache[unlock];
      if (void 0 === key) {
        this.cache[unlock] = {};
      } else {
        if (jQuery.isArray(key)) {
          name = key.concat(key.map(jQuery.camelCase));
        } else {
          camel = jQuery.camelCase(key);
          if (key in cache) {
            /** @type {!Array} */
            name = [key, camel];
          } else {
            name = camel;
            name = name in cache ? [name] : name.match(rnotwhite) || [];
          }
        }
        i = name.length;
        for (; i--;) {
          delete cache[name[i]];
        }
      }
    },
    hasData : function(owner) {
      return !jQuery.isEmptyObject(this.cache[owner[this.expando]] || {});
    },
    discard : function(owner) {
      if (owner[this.expando]) {
        delete this.cache[owner[this.expando]];
      }
    }
  };
  var data_priv = new Data;
  var $ = new Data;
  /** @type {!RegExp} */
  var trueRE = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
  /** @type {!RegExp} */
  var dashExpr = /([A-Z])/g;
  jQuery.extend({
    hasData : function(elem) {
      return $.hasData(elem) || data_priv.hasData(elem);
    },
    data : function(name, key, value) {
      return $.access(name, key, value);
    },
    removeData : function(key, name) {
      $.remove(key, name);
    },
    _data : function(elem, name, data) {
      return data_priv.access(elem, name, data);
    },
    _removeData : function(elem, name) {
      data_priv.remove(elem, name);
    }
  });
  jQuery.fn.extend({
    data : function(name, value) {
      var c;
      var key;
      var res;
      var node = this[0];
      var p = node && node.attributes;
      if (void 0 === name) {
        if (this.length && (res = $.get(node), 1 === node.nodeType && !data_priv.get(node, "hasDataAttrs"))) {
          c = p.length;
          for (; c--;) {
            if (p[c]) {
              key = p[c].name;
              if (0 === key.indexOf("data-")) {
                key = jQuery.camelCase(key.slice(5));
                parse(node, key, res[key]);
              }
            }
          }
          data_priv.set(node, "hasDataAttrs", true);
        }
        return res;
      }
      return "object" == typeof name ? this.each(function() {
        $.set(this, name);
      }) : access(this, function(i) {
        var val;
        var key = jQuery.camelCase(name);
        if (node && void 0 === i) {
          if (val = $.get(node, name), void 0 !== val) {
            return val;
          }
          if (val = $.get(node, key), void 0 !== val) {
            return val;
          }
          if (val = parse(node, key, void 0), void 0 !== val) {
            return val;
          }
        } else {
          this.each(function() {
            var keysToEvict = $.get(this, key);
            $.set(this, key, i);
            if (-1 !== name.indexOf("-") && void 0 !== keysToEvict) {
              $.set(this, name, i);
            }
          });
        }
      }, null, value, arguments.length > 1, null, true);
    },
    removeData : function(name) {
      return this.each(function() {
        $.remove(this, name);
      });
    }
  });
  jQuery.extend({
    queue : function(elem, type, data) {
      var q;
      return elem ? (type = (type || "fx") + "queue", q = data_priv.get(elem, type), data && (!q || jQuery.isArray(data) ? q = data_priv.access(elem, type, jQuery.makeArray(data)) : q.push(data)), q || []) : void 0;
    },
    dequeue : function(elem, type) {
      type = type || "fx";
      var queue = jQuery.queue(elem, type);
      var i = queue.length;
      var e = queue.shift();
      var context = jQuery._queueHooks(elem, type);
      /**
       * @return {undefined}
       */
      var fn = function() {
        jQuery.dequeue(elem, type);
      };
      if ("inprogress" === e) {
        e = queue.shift();
        i--;
      }
      if (e) {
        if ("fx" === type) {
          queue.unshift("inprogress");
        }
        delete context.stop;
        e.call(elem, fn, context);
      }
      if (!i && context) {
        context.empty.fire();
      }
    },
    _queueHooks : function(elem, type) {
      /** @type {string} */
      var key = type + "queueHooks";
      return data_priv.get(elem, key) || data_priv.access(elem, key, {
        empty : jQuery.Callbacks("once memory").add(function() {
          data_priv.remove(elem, [type + "queue", key]);
        })
      });
    }
  });
  jQuery.fn.extend({
    queue : function(type, data) {
      /** @type {number} */
      var setter = 2;
      return "string" != typeof type && (data = type, type = "fx", setter--), arguments.length < setter ? jQuery.queue(this[0], type) : void 0 === data ? this : this.each(function() {
        var queue = jQuery.queue(this, type, data);
        jQuery._queueHooks(this, type);
        if ("fx" === type && "inprogress" !== queue[0]) {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue : function(type) {
      return this.each(function() {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue : function(type) {
      return this.queue(type || "fx", []);
    },
    promise : function(type, result) {
      var tmp;
      /** @type {number} */
      var d = 1;
      var defer = jQuery.Deferred();
      var elements = this;
      var i = this.length;
      /**
       * @return {undefined}
       */
      var resolve = function() {
        if (!--d) {
          defer.resolveWith(elements, [elements]);
        }
      };
      if ("string" != typeof type) {
        /** @type {string} */
        result = type;
        type = void 0;
      }
      type = type || "fx";
      for (; i--;) {
        tmp = data_priv.get(elements[i], type + "queueHooks");
        if (tmp && tmp.empty) {
          d++;
          tmp.empty.add(resolve);
        }
      }
      return resolve(), defer.promise(result);
    }
  });
  /** @type {string} */
  var FSSource = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  /** @type {!Array} */
  var cssExpand = ["Top", "Right", "Bottom", "Left"];
  /**
   * @param {!Object} element
   * @param {!Object} component
   * @return {?}
   */
  var toggle = function(element, component) {
    return element = component || element, "none" === jQuery.css(element, "display") || !jQuery.contains(element.ownerDocument, element);
  };
  /** @type {!RegExp} */
  var reg = /^(?:checkbox|radio)$/i;
  !function() {
    var text_screen = document.createDocumentFragment();
    var b = text_screen.appendChild(document.createElement("div"));
    var input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");
    b.appendChild(input);
    support.checkClone = b.cloneNode(true).cloneNode(true).lastChild.checked;
    /** @type {string} */
    b.innerHTML = "<textarea>x</textarea>";
    /** @type {boolean} */
    support.noCloneChecked = !!b.cloneNode(true).lastChild.defaultValue;
  }();
  /** @type {string} */
  var undefined = "undefined";
  /** @type {boolean} */
  support.focusinBubbles = "onfocusin" in window;
  /** @type {!RegExp} */
  var SIG_PATTERN = /^key/;
  /** @type {!RegExp} */
  var toggleMaximizeElement = /^(?:mouse|pointer|contextmenu)|click/;
  /** @type {!RegExp} */
  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
  /** @type {!RegExp} */
  var result = /^([^.]*)(?:\.(.+)|)$/;
  jQuery.event = {
    global : {},
    add : function(obj, value, handler, data, selector) {
      var handleObjIn;
      var fn;
      var tmp;
      var events;
      var i;
      var handleObj;
      var special;
      var handlers;
      var type;
      var o;
      var origType;
      var info = data_priv.get(obj);
      if (info) {
        if (handler.handler) {
          /** @type {!Object} */
          handleObjIn = handler;
          handler = handleObjIn.handler;
          selector = handleObjIn.selector;
        }
        if (!handler.guid) {
          /** @type {number} */
          handler.guid = jQuery.guid++;
        }
        if (!(events = info.events)) {
          events = info.events = {};
        }
        if (!(fn = info.handle)) {
          /** @type {function(!Object): ?} */
          fn = info.handle = function(e) {
            return typeof jQuery !== undefined && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(obj, arguments) : void 0;
          };
        }
        value = (value || "").match(rnotwhite) || [""];
        i = value.length;
        for (; i--;) {
          /** @type {!Array} */
          tmp = result.exec(value[i]) || [];
          type = origType = tmp[1];
          o = (tmp[2] || "").split(".").sort();
          if (type) {
            special = jQuery.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            special = jQuery.event.special[type] || {};
            handleObj = jQuery.extend({
              type : type,
              origType : origType,
              data : data,
              handler : handler,
              guid : handler.guid,
              selector : selector,
              needsContext : selector && jQuery.expr.match.needsContext.test(selector),
              namespace : o.join(".")
            }, handleObjIn);
            if (!(handlers = events[type])) {
              /** @type {!Array} */
              handlers = events[type] = [];
              /** @type {number} */
              handlers.delegateCount = 0;
              if (!(special.setup && special.setup.call(obj, data, o, fn) !== false)) {
                if (obj.addEventListener) {
                  obj.addEventListener(type, fn, false);
                }
              }
            }
            if (special.add) {
              special.add.call(obj, handleObj);
              if (!handleObj.handler.guid) {
                handleObj.handler.guid = handler.guid;
              }
            }
            if (selector) {
              handlers.splice(handlers.delegateCount++, 0, handleObj);
            } else {
              handlers.push(handleObj);
            }
            /** @type {boolean} */
            jQuery.event.global[type] = true;
          }
        }
      }
    },
    remove : function(elem, types, handler, selector, mappedTypes) {
      var j;
      var origCount;
      var tmp;
      var events;
      var t;
      var handleObj;
      var special;
      var handlers;
      var type;
      var o;
      var origType;
      var elemData = data_priv.hasData(elem) && data_priv.get(elem);
      if (elemData && (events = elemData.events)) {
        types = (types || "").match(rnotwhite) || [""];
        t = types.length;
        for (; t--;) {
          if (tmp = result.exec(types[t]) || [], type = origType = tmp[1], o = (tmp[2] || "").split(".").sort(), type) {
            special = jQuery.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            handlers = events[type] || [];
            tmp = tmp[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)");
            origCount = j = handlers.length;
            for (; j--;) {
              handleObj = handlers[j];
              if (!(!mappedTypes && origType !== handleObj.origType || handler && handler.guid !== handleObj.guid || tmp && !tmp.test(handleObj.namespace) || selector && selector !== handleObj.selector && ("**" !== selector || !handleObj.selector))) {
                handlers.splice(j, 1);
                if (handleObj.selector) {
                  handlers.delegateCount--;
                }
                if (special.remove) {
                  special.remove.call(elem, handleObj);
                }
              }
            }
            if (origCount && !handlers.length) {
              if (!(special.teardown && special.teardown.call(elem, o, elemData.handle) !== false)) {
                jQuery.removeEvent(elem, type, elemData.handle);
              }
              delete events[type];
            }
          } else {
            for (type in events) {
              jQuery.event.remove(elem, type + types[t], handler, selector, true);
            }
          }
        }
        if (jQuery.isEmptyObject(events)) {
          delete elemData.handle;
          data_priv.remove(elem, "events");
        }
      }
    },
    trigger : function(event, value, elem, onlyHandlers) {
      var i;
      var cur;
      var tmp;
      var bubbleType;
      var ontype;
      var handle;
      var special;
      /** @type {!Array} */
      var eventPath = [elem || document];
      var type = hasOwn.call(event, "type") ? event.type : event;
      var o = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      if (cur = tmp = elem = elem || document, 3 !== elem.nodeType && 8 !== elem.nodeType && !rfocusMorph.test(type + jQuery.event.triggered) && (type.indexOf(".") >= 0 && (o = type.split("."), type = o.shift(), o.sort()), ontype = type.indexOf(":") < 0 && "on" + type, event = event[jQuery.expando] ? event : new jQuery.Event(type, "object" == typeof event && event), event.isTrigger = onlyHandlers ? 2 : 3, event.namespace = o.join("."), event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + 
      o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, event.result = void 0, event.target || (event.target = elem), value = null == value ? [event] : jQuery.makeArray(value, [event]), special = jQuery.event.special[type] || {}, onlyHandlers || !special.trigger || special.trigger.apply(elem, value) !== false)) {
        if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
          bubbleType = special.delegateType || type;
          if (!rfocusMorph.test(bubbleType + type)) {
            cur = cur.parentNode;
          }
          for (; cur; cur = cur.parentNode) {
            eventPath.push(cur);
            tmp = cur;
          }
          if (tmp === (elem.ownerDocument || document)) {
            eventPath.push(tmp.defaultView || tmp.parentWindow || window);
          }
        }
        /** @type {number} */
        i = 0;
        for (; (cur = eventPath[i++]) && !event.isPropagationStopped();) {
          event.type = i > 1 ? bubbleType : special.bindType || type;
          handle = (data_priv.get(cur, "events") || {})[event.type] && data_priv.get(cur, "handle");
          if (handle) {
            handle.apply(cur, value);
          }
          handle = ontype && cur[ontype];
          if (handle && handle.apply && jQuery.acceptData(cur)) {
            event.result = handle.apply(cur, value);
            if (event.result === false) {
              event.preventDefault();
            }
          }
        }
        return event.type = type, onlyHandlers || event.isDefaultPrevented() || special._default && special._default.apply(eventPath.pop(), value) !== false || !jQuery.acceptData(elem) || ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem) && (tmp = elem[ontype], tmp && (elem[ontype] = null), jQuery.event.triggered = type, elem[type](), jQuery.event.triggered = void 0, tmp && (elem[ontype] = tmp)), event.result;
      }
    },
    dispatch : function(event) {
      event = jQuery.event.fix(event);
      var i;
      var j;
      var docs;
      var matched;
      var handleObj;
      /** @type {!Array} */
      var handlerQueue = [];
      /** @type {!Array<?>} */
      var options = slice.call(arguments);
      var handlers = (data_priv.get(this, "events") || {})[event.type] || [];
      var special = jQuery.event.special[event.type] || {};
      if (options[0] = event, event.delegateTarget = this, !special.preDispatch || special.preDispatch.call(this, event) !== false) {
        handlerQueue = jQuery.event.handlers.call(this, event, handlers);
        /** @type {number} */
        i = 0;
        for (; (matched = handlerQueue[i++]) && !event.isPropagationStopped();) {
          event.currentTarget = matched.elem;
          /** @type {number} */
          j = 0;
          for (; (handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped();) {
            if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
              event.handleObj = handleObj;
              event.data = handleObj.data;
              docs = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, options);
              if (void 0 !== docs && (event.result = docs) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
        return special.postDispatch && special.postDispatch.call(this, event), event.result;
      }
    },
    handlers : function(event, handlers) {
      var j;
      var matches;
      var a;
      var handleObj;
      /** @type {!Array} */
      var handlerQueue = [];
      var delegateCount = handlers.delegateCount;
      var cur = event.target;
      if (delegateCount && cur.nodeType && (!event.button || "click" !== event.type)) {
        for (; cur !== this; cur = cur.parentNode || this) {
          if (cur.disabled !== true || "click" !== event.type) {
            /** @type {!Array} */
            matches = [];
            /** @type {number} */
            j = 0;
            for (; delegateCount > j; j++) {
              handleObj = handlers[j];
              /** @type {string} */
              a = handleObj.selector + " ";
              if (void 0 === matches[a]) {
                matches[a] = handleObj.needsContext ? jQuery(a, this).index(cur) >= 0 : jQuery.find(a, this, null, [cur]).length;
              }
              if (matches[a]) {
                matches.push(handleObj);
              }
            }
            if (matches.length) {
              handlerQueue.push({
                elem : cur,
                handlers : matches
              });
            }
          }
        }
      }
      return delegateCount < handlers.length && handlerQueue.push({
        elem : this,
        handlers : handlers.slice(delegateCount)
      }), handlerQueue;
    },
    props : "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks : {},
    keyHooks : {
      props : "char charCode key keyCode".split(" "),
      filter : function(key, e) {
        return null == key.which && (key.which = null != e.charCode ? e.charCode : e.keyCode), key;
      }
    },
    mouseHooks : {
      props : "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter : function(event, params) {
        var eventDoc;
        var doc;
        var body;
        var rotation = params.button;
        return null == event.pageX && null != params.clientX && (eventDoc = event.target.ownerDocument || document, doc = eventDoc.documentElement, body = eventDoc.body, event.pageX = params.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0), event.pageY = params.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0)), event.which || void 0 === rotation || (event.which = 
        1 & rotation ? 1 : 2 & rotation ? 3 : 4 & rotation ? 2 : 0), event;
      }
    },
    fix : function(event) {
      if (event[jQuery.expando]) {
        return event;
      }
      var i;
      var prop;
      var copy;
      var type = event.type;
      /** @type {!Object} */
      var originalEvent = event;
      var fixHook = this.fixHooks[type];
      if (!fixHook) {
        this.fixHooks[type] = fixHook = toggleMaximizeElement.test(type) ? this.mouseHooks : SIG_PATTERN.test(type) ? this.keyHooks : {};
      }
      copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
      event = new jQuery.Event(originalEvent);
      i = copy.length;
      for (; i--;) {
        prop = copy[i];
        event[prop] = originalEvent[prop];
      }
      return event.target || (event.target = document), 3 === event.target.nodeType && (event.target = event.target.parentNode), fixHook.filter ? fixHook.filter(event, originalEvent) : event;
    },
    special : {
      load : {
        noBubble : true
      },
      focus : {
        trigger : function() {
          return this !== safeActiveElement() && this.focus ? (this.focus(), false) : void 0;
        },
        delegateType : "focusin"
      },
      blur : {
        trigger : function() {
          return this === safeActiveElement() && this.blur ? (this.blur(), false) : void 0;
        },
        delegateType : "focusout"
      },
      click : {
        trigger : function() {
          return "checkbox" === this.type && this.click && jQuery.nodeName(this, "input") ? (this.click(), false) : void 0;
        },
        _default : function(obj) {
          return jQuery.nodeName(obj.target, "a");
        }
      },
      beforeunload : {
        postDispatch : function(event) {
          if (void 0 !== event.result && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        }
      }
    },
    simulate : function(eventName, node, type, options) {
      var event = jQuery.extend(new jQuery.Event, type, {
        type : eventName,
        isSimulated : true,
        originalEvent : {}
      });
      if (options) {
        jQuery.event.trigger(event, null, node);
      } else {
        jQuery.event.dispatch.call(node, event);
      }
      if (event.isDefaultPrevented()) {
        type.preventDefault();
      }
    }
  };
  /**
   * @param {!Object} b
   * @param {!Object} f
   * @param {?} e
   * @return {undefined}
   */
  jQuery.removeEvent = function(b, f, e) {
    if (b.removeEventListener) {
      b.removeEventListener(f, e, false);
    }
  };
  /**
   * @param {!Object} src
   * @param {string} event
   * @return {?}
   */
  jQuery.Event = function(src, event) {
    return this instanceof jQuery.Event ? (src && src.type ? (this.originalEvent = src, this.type = src.type, this.isDefaultPrevented = src.defaultPrevented || void 0 === src.defaultPrevented && src.returnValue === false ? returnTrue : returnFalse) : this.type = src, event && jQuery.extend(this, event), this.timeStamp = src && src.timeStamp || jQuery.now(), void(this[jQuery.expando] = true)) : new jQuery.Event(src, event);
  };
  jQuery.Event.prototype = {
    isDefaultPrevented : returnFalse,
    isPropagationStopped : returnFalse,
    isImmediatePropagationStopped : returnFalse,
    preventDefault : function() {
      var e = this.originalEvent;
      /** @type {function(): ?} */
      this.isDefaultPrevented = returnTrue;
      if (e && e.preventDefault) {
        e.preventDefault();
      }
    },
    stopPropagation : function() {
      var e = this.originalEvent;
      /** @type {function(): ?} */
      this.isPropagationStopped = returnTrue;
      if (e && e.stopPropagation) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation : function() {
      var e = this.originalEvent;
      /** @type {function(): ?} */
      this.isImmediatePropagationStopped = returnTrue;
      if (e && e.stopImmediatePropagation) {
        e.stopImmediatePropagation();
      }
      this.stopPropagation();
    }
  };
  jQuery.each({
    mouseenter : "mouseover",
    mouseleave : "mouseout",
    pointerenter : "pointerover",
    pointerleave : "pointerout"
  }, function(orig, fix) {
    jQuery.event.special[orig] = {
      delegateType : fix,
      bindType : fix,
      handle : function(event) {
        var _ref12;
        var document = this;
        var t = event.relatedTarget;
        var handleObj = event.handleObj;
        return (!t || t !== document && !jQuery.contains(document, t)) && (event.type = handleObj.origType, _ref12 = handleObj.handler.apply(this, arguments), event.type = fix), _ref12;
      }
    };
  });
  if (!support.focusinBubbles) {
    jQuery.each({
      focus : "focusin",
      blur : "focusout"
    }, function(orig, name) {
      /**
       * @param {!Object} event
       * @return {undefined}
       */
      var handler = function(event) {
        jQuery.event.simulate(name, event.target, jQuery.event.fix(event), true);
      };
      jQuery.event.special[name] = {
        setup : function() {
          var doc = this.ownerDocument || this;
          var aggFuncNames = data_priv.access(doc, name);
          if (!aggFuncNames) {
            doc.addEventListener(orig, handler, true);
          }
          data_priv.access(doc, name, (aggFuncNames || 0) + 1);
        },
        teardown : function() {
          var doc = this.ownerDocument || this;
          /** @type {number} */
          var data = data_priv.access(doc, name) - 1;
          if (data) {
            data_priv.access(doc, name, data);
          } else {
            doc.removeEventListener(orig, handler, true);
            data_priv.remove(doc, name);
          }
        }
      };
    });
  }
  jQuery.fn.extend({
    on : function(type, name, value, callback, one) {
      var handler;
      var event;
      if ("object" == typeof type) {
        if ("string" != typeof name) {
          value = value || name;
          name = void 0;
        }
        for (event in type) {
          this.on(event, name, value, type[event], one);
        }
        return this;
      }
      if (null == value && null == callback ? (callback = name, value = name = void 0) : null == callback && ("string" == typeof name ? (callback = value, value = void 0) : (callback = value, value = name, name = void 0)), callback === false) {
        /** @type {function(): ?} */
        callback = returnFalse;
      } else {
        if (!callback) {
          return this;
        }
      }
      return 1 === one && (handler = callback, callback = function(type) {
        return jQuery().off(type), handler.apply(this, arguments);
      }, callback.guid = handler.guid || (handler.guid = jQuery.guid++)), this.each(function() {
        jQuery.event.add(this, type, callback, value, name);
      });
    },
    one : function(event, callback, handler, context) {
      return this.on(event, callback, handler, context, 1);
    },
    off : function(types, callback, handler) {
      var handleObj;
      var type;
      if (types && types.preventDefault && types.handleObj) {
        return handleObj = types.handleObj, jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler), this;
      }
      if ("object" == typeof types) {
        for (type in types) {
          this.off(type, callback, types[type]);
        }
        return this;
      }
      return (callback === false || "function" == typeof callback) && (handler = callback, callback = void 0), handler === false && (handler = returnFalse), this.each(function() {
        jQuery.event.remove(this, types, handler, callback);
      });
    },
    trigger : function(event, type) {
      return this.each(function() {
        jQuery.event.trigger(event, type, this);
      });
    },
    triggerHandler : function(type, callback) {
      var value = this[0];
      return value ? jQuery.event.trigger(type, callback, value, true) : void 0;
    }
  });
  /** @type {!RegExp} */
  var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi;
  /** @type {!RegExp} */
  var inviewObserver = /<([\w:]+)/;
  /** @type {!RegExp} */
  var re_commas = /<|&#?\w+;/;
  /** @type {!RegExp} */
  var reKeyword = /<(?:script|style|link)/i;
  /** @type {!RegExp} */
  var attReg = /checked\s*(?:[^=]|=\s*.checked.)/i;
  /** @type {!RegExp} */
  var opacityRe = /^$|\/(?:java|ecma)script/i;
  /** @type {!RegExp} */
  var re = /^true\/(.*)/;
  /** @type {!RegExp} */
  var rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  var wrapMap = {
    option : [1, "<select multiple='multiple'>", "</select>"],
    thead : [1, "<table>", "</table>"],
    col : [2, "<table><colgroup>", "</colgroup></table>"],
    tr : [2, "<table><tbody>", "</tbody></table>"],
    td : [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default : [0, "", ""]
  };
  /** @type {!Array} */
  wrapMap.optgroup = wrapMap.option;
  /** @type {!Array} */
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  /** @type {!Array} */
  wrapMap.th = wrapMap.td;
  jQuery.extend({
    clone : function(elem, v, c) {
      var i;
      var l;
      var srcElements;
      var destElements;
      var clone = elem.cloneNode(true);
      var inPage = jQuery.contains(elem.ownerDocument, elem);
      if (!(support.noCloneChecked || 1 !== elem.nodeType && 11 !== elem.nodeType || jQuery.isXMLDoc(elem))) {
        destElements = getAll(clone);
        srcElements = getAll(elem);
        /** @type {number} */
        i = 0;
        l = srcElements.length;
        for (; l > i; i++) {
          fixInput(srcElements[i], destElements[i]);
        }
      }
      if (v) {
        if (c) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);
          /** @type {number} */
          i = 0;
          l = srcElements.length;
          for (; l > i; i++) {
            cloneCopyEvent(srcElements[i], destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      }
      return destElements = getAll(clone, "script"), destElements.length > 0 && setGlobalEval(destElements, !inPage && getAll(elem, "script")), clone;
    },
    buildFragment : function(elems, context, scripts, selection) {
      var elem;
      var tmp;
      var tag;
      var zeroSizeMaxes;
      var ret;
      var zeroSizeMax;
      var fragment = context.createDocumentFragment();
      /** @type {!Array} */
      var results = [];
      /** @type {number} */
      var i = 0;
      var length = elems.length;
      for (; length > i; i++) {
        if (elem = elems[i], elem || 0 === elem) {
          if ("object" === jQuery.type(elem)) {
            jQuery.merge(results, elem.nodeType ? [elem] : elem);
          } else {
            if (re_commas.test(elem)) {
              tmp = tmp || fragment.appendChild(context.createElement("div"));
              tag = (inviewObserver.exec(elem) || ["", ""])[1].toLowerCase();
              zeroSizeMaxes = wrapMap[tag] || wrapMap._default;
              tmp.innerHTML = zeroSizeMaxes[1] + elem.replace(rxhtmlTag, "<$1></$2>") + zeroSizeMaxes[2];
              zeroSizeMax = zeroSizeMaxes[0];
              for (; zeroSizeMax--;) {
                tmp = tmp.lastChild;
              }
              jQuery.merge(results, tmp.childNodes);
              tmp = fragment.firstChild;
              /** @type {string} */
              tmp.textContent = "";
            } else {
              results.push(context.createTextNode(elem));
            }
          }
        }
      }
      /** @type {string} */
      fragment.textContent = "";
      /** @type {number} */
      i = 0;
      for (; elem = results[i++];) {
        if ((!selection || -1 === jQuery.inArray(elem, selection)) && (ret = jQuery.contains(elem.ownerDocument, elem), tmp = getAll(fragment.appendChild(elem), "script"), ret && setGlobalEval(tmp), scripts)) {
          /** @type {number} */
          zeroSizeMax = 0;
          for (; elem = tmp[zeroSizeMax++];) {
            if (opacityRe.test(elem.type || "")) {
              scripts.push(elem);
            }
          }
        }
      }
      return fragment;
    },
    cleanData : function(elems) {
      var data;
      var elem;
      var type;
      var key;
      var special = jQuery.event.special;
      /** @type {number} */
      var i = 0;
      for (; void 0 !== (elem = elems[i]); i++) {
        if (jQuery.acceptData(elem) && (key = elem[data_priv.expando], key && (data = data_priv.cache[key]))) {
          if (data.events) {
            for (type in data.events) {
              if (special[type]) {
                jQuery.event.remove(elem, type);
              } else {
                jQuery.removeEvent(elem, type, data.handle);
              }
            }
          }
          if (data_priv.cache[key]) {
            delete data_priv.cache[key];
          }
        }
        delete $.cache[elem[$.expando]];
      }
    }
  });
  jQuery.fn.extend({
    text : function(value) {
      return access(this, function(value) {
        return void 0 === value ? jQuery.text(this) : this.empty().each(function() {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            this.textContent = value;
          }
        });
      }, null, value, arguments.length);
    },
    append : function() {
      return this.domManip(arguments, function(elem) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },
    prepend : function() {
      return this.domManip(arguments, function(elem) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before : function() {
      return this.domManip(arguments, function(elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after : function() {
      return this.domManip(arguments, function(elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    remove : function(selector, keepData) {
      var elem;
      var elems = selector ? jQuery.filter(selector, this) : this;
      /** @type {number} */
      var i = 0;
      for (; null != (elem = elems[i]); i++) {
        if (!(keepData || 1 !== elem.nodeType)) {
          jQuery.cleanData(getAll(elem));
        }
        if (elem.parentNode) {
          if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
            setGlobalEval(getAll(elem, "script"));
          }
          elem.parentNode.removeChild(elem);
        }
      }
      return this;
    },
    empty : function() {
      var elem;
      /** @type {number} */
      var i = 0;
      for (; null != (elem = this[i]); i++) {
        if (1 === elem.nodeType) {
          jQuery.cleanData(getAll(elem, false));
          /** @type {string} */
          elem.textContent = "";
        }
      }
      return this;
    },
    clone : function(e, c) {
      return e = null == e ? false : e, c = null == c ? e : c, this.map(function() {
        return jQuery.clone(this, e, c);
      });
    },
    html : function(value) {
      return access(this, function(value) {
        var elem = this[0] || {};
        /** @type {number} */
        var endIdx = 0;
        var i = this.length;
        if (void 0 === value && 1 === elem.nodeType) {
          return elem.innerHTML;
        }
        if ("string" == typeof value && !reKeyword.test(value) && !wrapMap[(inviewObserver.exec(value) || ["", ""])[1].toLowerCase()]) {
          /** @type {string} */
          value = value.replace(rxhtmlTag, "<$1></$2>");
          try {
            for (; i > endIdx; endIdx++) {
              elem = this[endIdx] || {};
              if (1 === elem.nodeType) {
                jQuery.cleanData(getAll(elem, false));
                /** @type {string} */
                elem.innerHTML = value;
              }
            }
            /** @type {number} */
            elem = 0;
          } catch (e) {
          }
        }
        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },
    replaceWith : function() {
      var arg = arguments[0];
      return this.domManip(arguments, function(o) {
        arg = this.parentNode;
        jQuery.cleanData(getAll(this));
        if (arg) {
          arg.replaceChild(o, this);
        }
      }), arg && (arg.length || arg.nodeType) ? this : this.remove();
    },
    detach : function(selector) {
      return this.remove(selector, true);
    },
    domManip : function(args, callback) {
      /** @type {!Array<?>} */
      args = concat.apply([], args);
      var fragment;
      var first;
      var e;
      var n;
      var node;
      var document;
      /** @type {number} */
      var i = 0;
      var length = this.length;
      var $contentCols = this;
      /** @type {number} */
      var endIndex = length - 1;
      var m = args[0];
      var _tabBodyNode = jQuery.isFunction(m);
      if (_tabBodyNode || length > 1 && "string" == typeof m && !support.checkClone && attReg.test(m)) {
        return this.each(function(index) {
          var self = $contentCols.eq(index);
          if (_tabBodyNode) {
            args[0] = m.call(this, index, self.html());
          }
          self.domManip(args, callback);
        });
      }
      if (length && (fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, this), first = fragment.firstChild, 1 === fragment.childNodes.length && (fragment = first), first)) {
        e = jQuery.map(getAll(fragment, "script"), c);
        n = e.length;
        for (; length > i; i++) {
          node = fragment;
          if (i !== endIndex) {
            node = jQuery.clone(node, true, true);
            if (n) {
              jQuery.merge(e, getAll(node, "script"));
            }
          }
          callback.call(this[i], node, i);
        }
        if (n) {
          document = e[e.length - 1].ownerDocument;
          jQuery.map(e, o);
          /** @type {number} */
          i = 0;
          for (; n > i; i++) {
            node = e[i];
            if (opacityRe.test(node.type || "") && !data_priv.access(node, "globalEval") && jQuery.contains(document, node)) {
              if (node.src) {
                if (jQuery._evalUrl) {
                  jQuery._evalUrl(node.src);
                }
              } else {
                jQuery.globalEval(node.textContent.replace(rcleanScript, ""));
              }
            }
          }
        }
      }
      return this;
    }
  });
  jQuery.each({
    appendTo : "append",
    prependTo : "prepend",
    insertBefore : "before",
    insertAfter : "after",
    replaceAll : "replaceWith"
  }, function(original, method) {
    /**
     * @param {!Array} li
     * @return {?}
     */
    jQuery.fn[original] = function(li) {
      var newTrack;
      /** @type {!Array} */
      var ret = [];
      var controls = jQuery(li);
      /** @type {number} */
      var last = controls.length - 1;
      /** @type {number} */
      var i = 0;
      for (; last >= i; i++) {
        newTrack = i === last ? this : this.clone(true);
        jQuery(controls[i])[method](newTrack);
        push.apply(ret, newTrack.get());
      }
      return this.pushStack(ret);
    };
  });
  var iframe;
  var defaultDisplayMap = {};
  /** @type {!RegExp} */
  var namespaces = /^margin/;
  /** @type {!RegExp} */
  var rnumnonpx = new RegExp("^(" + FSSource + ")(?!px)[a-z%]+$", "i");
  /**
   * @param {!Object} elem
   * @return {?}
   */
  var getStyles = function(elem) {
    return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
  };
  !function() {
    /**
     * @return {undefined}
     */
    function computeStyleTests() {
      /** @type {string} */
      div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
      /** @type {string} */
      div.innerHTML = "";
      html.appendChild(f);
      var b = window.getComputedStyle(div, null);
      /** @type {boolean} */
      c = "1%" !== b.top;
      /** @type {boolean} */
      d = "4px" === b.width;
      html.removeChild(f);
    }
    var c;
    var d;
    var html = document.documentElement;
    var f = document.createElement("div");
    var div = document.createElement("div");
    if (div.style) {
      /** @type {string} */
      div.style.backgroundClip = "content-box";
      /** @type {string} */
      div.cloneNode(true).style.backgroundClip = "";
      /** @type {boolean} */
      support.clearCloneStyle = "content-box" === div.style.backgroundClip;
      /** @type {string} */
      f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute";
      f.appendChild(div);
      if (window.getComputedStyle) {
        jQuery.extend(support, {
          pixelPosition : function() {
            return computeStyleTests(), c;
          },
          boxSizingReliable : function() {
            return null == d && computeStyleTests(), d;
          },
          reliableMarginRight : function() {
            var b;
            var marginDiv = div.appendChild(document.createElement("div"));
            return marginDiv.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", marginDiv.style.marginRight = marginDiv.style.width = "0", div.style.width = "1px", html.appendChild(f), b = !parseFloat(window.getComputedStyle(marginDiv, null).marginRight), html.removeChild(f), b;
          }
        });
      }
    }
  }();
  /**
   * @param {!Object} a
   * @param {!Array} fn
   * @param {!Function} value
   * @param {!Array} params
   * @return {?}
   */
  jQuery.swap = function(a, fn, value, params) {
    var ret;
    var prop;
    var originObject = {};
    for (prop in fn) {
      originObject[prop] = a.style[prop];
      a.style[prop] = fn[prop];
    }
    ret = value.apply(a, params || []);
    for (prop in fn) {
      a.style[prop] = originObject[prop];
    }
    return ret;
  };
  /** @type {!RegExp} */
  var rdisplayswap = /^(none|table(?!-c[ea]).+)/;
  /** @type {!RegExp} */
  var rnumsplit = new RegExp("^(" + FSSource + ")(.*)$", "i");
  /** @type {!RegExp} */
  var startsWithSo = new RegExp("^([+-])=(" + FSSource + ")", "i");
  var props = {
    position : "absolute",
    visibility : "hidden",
    display : "block"
  };
  var cssNormalTransform = {
    letterSpacing : "0",
    fontWeight : "400"
  };
  /** @type {!Array} */
  var prefixes = ["Webkit", "O", "Moz", "ms"];
  jQuery.extend({
    cssHooks : {
      opacity : {
        get : function(elem, value) {
          if (value) {
            var to = curCSS(elem, "opacity");
            return "" === to ? "1" : to;
          }
        }
      }
    },
    cssNumber : {
      columnCount : true,
      fillOpacity : true,
      flexGrow : true,
      flexShrink : true,
      fontWeight : true,
      lineHeight : true,
      opacity : true,
      order : true,
      orphans : true,
      widows : true,
      zIndex : true,
      zoom : true
    },
    cssProps : {
      "float" : "cssFloat"
    },
    style : function(node, name, val, key) {
      if (node && 3 !== node.nodeType && 8 !== node.nodeType && node.style) {
        var state;
        var type;
        var desc;
        var origName = jQuery.camelCase(name);
        var style = node.style;
        return name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName)), desc = jQuery.cssHooks[name] || jQuery.cssHooks[origName], void 0 === val ? desc && "get" in desc && void 0 !== (state = desc.get(node, false, key)) ? state : style[name] : (type = typeof val, "string" === type && (state = startsWithSo.exec(val)) && (val = (state[1] + 1) * state[2] + parseFloat(jQuery.css(node, name)), type = "number"), null != val && val === val && ("number" !== type || 
        jQuery.cssNumber[origName] || (val = val + "px"), support.clearCloneStyle || "" !== val || 0 !== name.indexOf("background") || (style[name] = "inherit"), desc && "set" in desc && void 0 === (val = desc.set(node, val, key)) || (style[name] = val)), void 0);
      }
    },
    css : function(key, name, value, styles) {
      var val;
      var data;
      var hooks;
      var origName = jQuery.camelCase(name);
      return name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(key.style, origName)), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName], hooks && "get" in hooks && (val = hooks.get(key, true, value)), void 0 === val && (val = curCSS(key, name, styles)), "normal" === val && name in cssNormalTransform && (val = cssNormalTransform[name]), "" === value || value ? (data = parseFloat(val), value === true || jQuery.isNumeric(data) ? data || 0 : val) : val;
    }
  });
  jQuery.each(["height", "width"], function(a, name) {
    jQuery.cssHooks[name] = {
      get : function(elem, value, view) {
        return value ? rdisplayswap.test(jQuery.css(elem, "display")) && 0 === elem.offsetWidth ? jQuery.swap(elem, props, function() {
          return getWidthOrHeight(elem, name, view);
        }) : getWidthOrHeight(elem, name, view) : void 0;
      },
      set : function(elem, value, extra) {
        var styles = extra && getStyles(elem);
        return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, "border-box" === jQuery.css(elem, "boxSizing", false, styles), styles) : 0);
      }
    };
  });
  jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function(elem, extra) {
    return extra ? jQuery.swap(elem, {
      display : "inline-block"
    }, curCSS, [elem, "marginRight"]) : void 0;
  });
  jQuery.each({
    margin : "",
    padding : "",
    border : "Width"
  }, function(prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {
      expand : function(data) {
        /** @type {number} */
        var i = 0;
        var expanded = {};
        /** @type {!Array} */
        var stops = "string" == typeof data ? data.split(" ") : [data];
        for (; 4 > i; i++) {
          expanded[prefix + cssExpand[i] + suffix] = stops[i] || stops[i - 2] || stops[0];
        }
        return expanded;
      }
    };
    if (!namespaces.test(prefix)) {
      /** @type {function(!Object, !Object, string): ?} */
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });
  jQuery.fn.extend({
    css : function(name, value) {
      return access(this, function(elem, name, undefined) {
        var styles;
        var l;
        var map = {};
        /** @type {number} */
        var i = 0;
        if (jQuery.isArray(name)) {
          styles = getStyles(elem);
          l = name.length;
          for (; l > i; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles);
          }
          return map;
        }
        return void 0 !== undefined ? jQuery.style(elem, name, undefined) : jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    },
    show : function() {
      return showHide(this, true);
    },
    hide : function() {
      return showHide(this);
    },
    toggle : function(state) {
      return "boolean" == typeof state ? state ? this.show() : this.hide() : this.each(function() {
        if (toggle(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  /** @type {function(!Array, !Function, string, string, number): ?} */
  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor : Tween,
    init : function(name, options, prop, value, easing, unit) {
      /** @type {!Object} */
      this.elem = name;
      /** @type {string} */
      this.prop = prop;
      this.easing = easing || "swing";
      /** @type {!Object} */
      this.options = options;
      this.start = this.now = this.cur();
      /** @type {number} */
      this.end = value;
      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },
    cur : function() {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run : function(percent) {
      var eased;
      var hooks = Tween.propHooks[this.prop];
      return this.pos = eased = this.options.duration ? jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration) : percent, this.now = (this.end - this.start) * eased + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), hooks && hooks.set ? hooks.set(this) : Tween.propHooks._default.set(this), this;
    }
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {
    _default : {
      get : function(data) {
        var node;
        return null == data.elem[data.prop] || data.elem.style && null != data.elem.style[data.prop] ? (node = jQuery.css(data.elem, data.prop, ""), node && "auto" !== node ? node : 0) : data.elem[data.prop];
      },
      set : function(data) {
        if (jQuery.fx.step[data.prop]) {
          jQuery.fx.step[data.prop](data);
        } else {
          if (data.elem.style && (null != data.elem.style[jQuery.cssProps[data.prop]] || jQuery.cssHooks[data.prop])) {
            jQuery.style(data.elem, data.prop, data.now + data.unit);
          } else {
            data.elem[data.prop] = data.now;
          }
        }
      }
    }
  };
  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set : function(target) {
      if (target.elem.nodeType && target.elem.parentNode) {
        target.elem[target.prop] = target.now;
      }
    }
  };
  jQuery.easing = {
    linear : function(data) {
      return data;
    },
    swing : function(p) {
      return .5 - Math.cos(p * Math.PI) / 2;
    }
  };
  /** @type {function(!Object, !Object, string, number, string, !Object): undefined} */
  jQuery.fx = Tween.prototype.init;
  jQuery.fx.step = {};
  var fxNow;
  var initializeCheckTimer;
  /** @type {!RegExp} */
  var $b = /^(?:toggle|show|hide)$/;
  /** @type {!RegExp} */
  var rfxnum = new RegExp("^(?:([+-])=|)(" + FSSource + ")([a-z%]*)$", "i");
  /** @type {!RegExp} */
  var rrun = /queueHooks$/;
  /** @type {!Array} */
  var animationPrefilters = [defaultPrefilter];
  var tweeners = {
    "*" : [function(prop, value) {
      var tween = this.createTween(prop, value);
      var target = tween.cur();
      /** @type {(Array<string>|null)} */
      var parts = rfxnum.exec(value);
      /** @type {string} */
      var unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px");
      var start = (jQuery.cssNumber[prop] || "px" !== unit && +target) && rfxnum.exec(jQuery.css(tween.elem, prop));
      /** @type {number} */
      var scale = 1;
      /** @type {number} */
      var i = 20;
      if (start && start[3] !== unit) {
        unit = unit || start[3];
        /** @type {!Array} */
        parts = parts || [];
        /** @type {number} */
        start = +target || 1;
        do {
          /** @type {(number|string)} */
          scale = scale || ".5";
          /** @type {number} */
          start = start / scale;
          jQuery.style(tween.elem, prop, start + unit);
        } while (scale !== (scale = tween.cur() / target) && 1 !== scale && --i);
      }
      return parts && (start = tween.start = +start || +target || 0, tween.unit = unit, tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2]), tween;
    }]
  };
  jQuery.Animation = jQuery.extend(Animation, {
    tweener : function(props, callback) {
      if (jQuery.isFunction(props)) {
        /** @type {!Object} */
        callback = props;
        /** @type {!Array} */
        props = ["*"];
      } else {
        props = props.split(" ");
      }
      var prop;
      /** @type {number} */
      var length = 0;
      var x = props.length;
      for (; x > length; length++) {
        prop = props[length];
        tweeners[prop] = tweeners[prop] || [];
        tweeners[prop].unshift(callback);
      }
    },
    prefilter : function(callback, options) {
      if (options) {
        animationPrefilters.unshift(callback);
      } else {
        animationPrefilters.push(callback);
      }
    }
  });
  /**
   * @param {!Object} speed
   * @param {string} easing
   * @param {string} fn
   * @return {?}
   */
  jQuery.speed = function(speed, easing, fn) {
    var opt = speed && "object" == typeof speed ? jQuery.extend({}, speed) : {
      complete : fn || !fn && easing || jQuery.isFunction(speed) && speed,
      duration : speed,
      easing : fn && easing || easing && !jQuery.isFunction(easing) && easing
    };
    return opt.duration = jQuery.fx.off ? 0 : "number" == typeof opt.duration ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default, (null == opt.queue || opt.queue === true) && (opt.queue = "fx"), opt.old = opt.complete, opt.complete = function() {
      if (jQuery.isFunction(opt.old)) {
        opt.old.call(this);
      }
      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    }, opt;
  };
  jQuery.fn.extend({
    fadeTo : function(speed, to, callback, context) {
      return this.filter(toggle).css("opacity", 0).show().end().animate({
        opacity : to
      }, speed, callback, context);
    },
    animate : function(prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop);
      var optall = jQuery.speed(speed, easing, callback);
      /**
       * @return {undefined}
       */
      var fn = function() {
        var anim = Animation(this, jQuery.extend({}, prop), optall);
        if (empty || data_priv.get(this, "finish")) {
          anim.stop(true);
        }
      };
      return fn.finish = fn, empty || optall.queue === false ? this.each(fn) : this.queue(optall.queue, fn);
    },
    stop : function(type, value, options) {
      /**
       * @param {!Object} hooks
       * @return {undefined}
       */
      var stopQueue = function(hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(options);
      };
      return "string" != typeof type && (options = value, value = type, type = void 0), value && type !== false && this.queue(type || "fx", []), this.each(function() {
        /** @type {boolean} */
        var cflag = true;
        /** @type {(boolean|string)} */
        var index = null != type && type + "queueHooks";
        /** @type {!Array} */
        var timers = jQuery.timers;
        var data = data_priv.get(this);
        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }
        /** @type {number} */
        index = timers.length;
        for (; index--;) {
          if (!(timers[index].elem !== this || null != type && timers[index].queue !== type)) {
            timers[index].anim.stop(options);
            /** @type {boolean} */
            cflag = false;
            timers.splice(index, 1);
          }
        }
        if (cflag || !options) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish : function(type) {
      return type !== false && (type = type || "fx"), this.each(function() {
        var index;
        var data = data_priv.get(this);
        var queue = data[type + "queue"];
        var hooks = data[type + "queueHooks"];
        /** @type {!Array} */
        var timers = jQuery.timers;
        var length = queue ? queue.length : 0;
        /** @type {boolean} */
        data.finish = true;
        jQuery.queue(this, type, []);
        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        }
        /** @type {number} */
        index = timers.length;
        for (; index--;) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        }
        /** @type {number} */
        index = 0;
        for (; length > index; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        }
        delete data.finish;
      });
    }
  });
  jQuery.each(["toggle", "show", "hide"], function(a, name) {
    var cssFn = jQuery.fn[name];
    /**
     * @param {!Object} x
     * @param {string} callback
     * @param {string} options
     * @return {?}
     */
    jQuery.fn[name] = function(x, callback, options) {
      return null == x || "boolean" == typeof x ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), x, callback, options);
    };
  });
  jQuery.each({
    slideDown : genFx("show"),
    slideUp : genFx("hide"),
    slideToggle : genFx("toggle"),
    fadeIn : {
      opacity : "show"
    },
    fadeOut : {
      opacity : "hide"
    },
    fadeToggle : {
      opacity : "toggle"
    }
  }, function(original, props) {
    /**
     * @param {!Object} speed
     * @param {string} callback
     * @param {string} options
     * @return {?}
     */
    jQuery.fn[original] = function(speed, callback, options) {
      return this.animate(props, speed, callback, options);
    };
  });
  /** @type {!Array} */
  jQuery.timers = [];
  /**
   * @return {undefined}
   */
  jQuery.fx.tick = function() {
    var timer;
    /** @type {number} */
    var i = 0;
    /** @type {!Array} */
    var timers = jQuery.timers;
    fxNow = jQuery.now();
    for (; i < timers.length; i++) {
      timer = timers[i];
      if (!(timer() || timers[i] !== timer)) {
        timers.splice(i--, 1);
      }
    }
    if (!timers.length) {
      jQuery.fx.stop();
    }
    fxNow = void 0;
  };
  /**
   * @param {string} func
   * @return {undefined}
   */
  jQuery.fx.timer = function(func) {
    jQuery.timers.push(func);
    if (func()) {
      jQuery.fx.start();
    } else {
      jQuery.timers.pop();
    }
  };
  /** @type {number} */
  jQuery.fx.interval = 13;
  /**
   * @return {undefined}
   */
  jQuery.fx.start = function() {
    if (!initializeCheckTimer) {
      /** @type {number} */
      initializeCheckTimer = setInterval(jQuery.fx.tick, jQuery.fx.interval);
    }
  };
  /**
   * @return {undefined}
   */
  jQuery.fx.stop = function() {
    clearInterval(initializeCheckTimer);
    /** @type {null} */
    initializeCheckTimer = null;
  };
  jQuery.fx.speeds = {
    slow : 600,
    fast : 200,
    _default : 400
  };
  /**
   * @param {string} time
   * @param {string} type
   * @return {?}
   */
  jQuery.fn.delay = function(time, type) {
    return time = jQuery.fx ? jQuery.fx.speeds[time] || time : time, type = type || "fx", this.queue(type, function(fn, incoming_item) {
      /** @type {number} */
      var timer = setTimeout(fn, time);
      /**
       * @return {undefined}
       */
      incoming_item.stop = function() {
        clearTimeout(timer);
      };
    });
  };
  (function() {
    var input = document.createElement("input");
    var select = document.createElement("select");
    var opt = select.appendChild(document.createElement("option"));
    /** @type {string} */
    input.type = "checkbox";
    /** @type {boolean} */
    support.checkOn = "" !== input.value;
    support.optSelected = opt.selected;
    /** @type {boolean} */
    select.disabled = true;
    /** @type {boolean} */
    support.optDisabled = !opt.disabled;
    input = document.createElement("input");
    /** @type {string} */
    input.value = "t";
    /** @type {string} */
    input.type = "radio";
    /** @type {boolean} */
    support.radioValue = "t" === input.value;
  })();
  var nodeHook;
  var boolHook;
  var attrHandle = jQuery.expr.attrHandle;
  jQuery.fn.extend({
    attr : function(name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr : function(name) {
      return this.each(function() {
        jQuery.removeAttr(this, name);
      });
    }
  });
  jQuery.extend({
    attr : function(elem, name, value) {
      var hooks;
      var message;
      var type = elem.nodeType;
      if (elem && 3 !== type && 8 !== type && 2 !== type) {
        return typeof elem.getAttribute === undefined ? jQuery.prop(elem, name, value) : (1 === type && jQuery.isXMLDoc(elem) || (name = name.toLowerCase(), hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook)), void 0 === value ? hooks && "get" in hooks && null !== (message = hooks.get(elem, name)) ? message : (message = jQuery.find.attr(elem, name), null == message ? void 0 : message) : null !== value ? hooks && "set" in hooks && void 0 !== (message = hooks.set(elem, 
        value, name)) ? message : (elem.setAttribute(name, value + ""), value) : void jQuery.removeAttr(elem, name));
      }
    },
    removeAttr : function(node, value) {
      var name;
      var attributeName;
      /** @type {number} */
      var fpt = 0;
      var f = value && value.match(rnotwhite);
      if (f && 1 === node.nodeType) {
        for (; name = f[fpt++];) {
          attributeName = jQuery.propFix[name] || name;
          if (jQuery.expr.match.bool.test(name)) {
            /** @type {boolean} */
            node[attributeName] = false;
          }
          node.removeAttribute(name);
        }
      }
    },
    attrHooks : {
      type : {
        set : function(a, value) {
          if (!support.radioValue && "radio" === value && jQuery.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", value), c && (a.value = c), value;
          }
        }
      }
    }
  });
  boolHook = {
    set : function(elem, value, name) {
      return value === false ? jQuery.removeAttr(elem, name) : elem.setAttribute(name, name), name;
    }
  };
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(a, name) {
    var debug = attrHandle[name] || jQuery.find.attr;
    /**
     * @param {undefined} resolve
     * @param {string} name
     * @param {number} stats2
     * @return {?}
     */
    attrHandle[name] = function(resolve, name, stats2) {
      var ret;
      var handle;
      return stats2 || (handle = attrHandle[name], attrHandle[name] = ret, ret = null != debug(resolve, name, stats2) ? name.toLowerCase() : null, attrHandle[name] = handle), ret;
    };
  });
  /** @type {!RegExp} */
  var inputNodeNames = /^(?:input|select|textarea|button)$/i;
  jQuery.fn.extend({
    prop : function(type, value) {
      return access(this, jQuery.prop, type, value, arguments.length > 1);
    },
    removeProp : function(name) {
      return this.each(function() {
        delete this[jQuery.propFix[name] || name];
      });
    }
  });
  jQuery.extend({
    propFix : {
      "for" : "htmlFor",
      "class" : "className"
    },
    prop : function(elem, name, value) {
      var ret;
      var hooks;
      var f;
      var type = elem.nodeType;
      if (elem && 3 !== type && 8 !== type && 2 !== type) {
        return f = 1 !== type || !jQuery.isXMLDoc(elem), f && (name = jQuery.propFix[name] || name, hooks = jQuery.propHooks[name]), void 0 !== value ? hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : elem[name] = value : hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : elem[name];
      }
    },
    propHooks : {
      tabIndex : {
        get : function(target) {
          return target.hasAttribute("tabindex") || inputNodeNames.test(target.nodeName) || target.href ? target.tabIndex : -1;
        }
      }
    }
  });
  if (!support.optSelected) {
    jQuery.propHooks.selected = {
      get : function(e) {
        var elem = e.parentNode;
        return elem && elem.parentNode && elem.parentNode.selectedIndex, null;
      }
    };
  }
  jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    jQuery.propFix[this.toLowerCase()] = this;
  });
  /** @type {!RegExp} */
  var rclass = /[\t\r\n\f]/g;
  jQuery.fn.extend({
    addClass : function(name) {
      var zeroSizeMaxes;
      var elem;
      var cur;
      var zeroSizeMax;
      var callbackCount;
      var finalValue;
      /** @type {(boolean|string)} */
      var h = "string" == typeof name && name;
      /** @type {number} */
      var l = 0;
      var i = this.length;
      if (jQuery.isFunction(name)) {
        return this.each(function(i) {
          jQuery(this).addClass(name.call(this, i, this.className));
        });
      }
      if (h) {
        zeroSizeMaxes = (name || "").match(rnotwhite) || [];
        for (; i > l; l++) {
          if (elem = this[l], cur = 1 === elem.nodeType && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ")) {
            /** @type {number} */
            callbackCount = 0;
            for (; zeroSizeMax = zeroSizeMaxes[callbackCount++];) {
              if (cur.indexOf(" " + zeroSizeMax + " ") < 0) {
                /** @type {string} */
                cur = cur + (zeroSizeMax + " ");
              }
            }
            finalValue = jQuery.trim(cur);
            if (elem.className !== finalValue) {
              elem.className = finalValue;
            }
          }
        }
      }
      return this;
    },
    removeClass : function(name) {
      var zeroSizeMaxes;
      var elem;
      var content;
      var zeroSizeMax;
      var callbackCount;
      var finalValue;
      /** @type {(boolean|string)} */
      var h = 0 === arguments.length || "string" == typeof name && name;
      /** @type {number} */
      var l = 0;
      var i = this.length;
      if (jQuery.isFunction(name)) {
        return this.each(function(i) {
          jQuery(this).removeClass(name.call(this, i, this.className));
        });
      }
      if (h) {
        zeroSizeMaxes = (name || "").match(rnotwhite) || [];
        for (; i > l; l++) {
          if (elem = this[l], content = 1 === elem.nodeType && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "")) {
            /** @type {number} */
            callbackCount = 0;
            for (; zeroSizeMax = zeroSizeMaxes[callbackCount++];) {
              for (; content.indexOf(" " + zeroSizeMax + " ") >= 0;) {
                /** @type {string} */
                content = content.replace(" " + zeroSizeMax + " ", " ");
              }
            }
            finalValue = name ? jQuery.trim(content) : "";
            if (elem.className !== finalValue) {
              elem.className = finalValue;
            }
          }
        }
      }
      return this;
    },
    toggleClass : function(value, stateVal) {
      /** @type {string} */
      var type = typeof value;
      return "boolean" == typeof stateVal && "string" === type ? stateVal ? this.addClass(value) : this.removeClass(value) : this.each(jQuery.isFunction(value) ? function(i) {
        jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
      } : function() {
        if ("string" === type) {
          var rel;
          /** @type {number} */
          var fpt = 0;
          var li = jQuery(this);
          var f = value.match(rnotwhite) || [];
          for (; rel = f[fpt++];) {
            if (li.hasClass(rel)) {
              li.removeClass(rel);
            } else {
              li.addClass(rel);
            }
          }
        } else {
          if (type === undefined || "boolean" === type) {
            if (this.className) {
              data_priv.set(this, "__className__", this.className);
            }
            this.className = this.className || value === false ? "" : data_priv.get(this, "__className__") || "";
          }
        }
      });
    },
    hasClass : function(name) {
      /** @type {string} */
      var b = " " + name + " ";
      /** @type {number} */
      var i = 0;
      var l = this.length;
      for (; l > i; i++) {
        if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(rclass, " ").indexOf(b) >= 0) {
          return true;
        }
      }
      return false;
    }
  });
  /** @type {!RegExp} */
  var n = /\r/g;
  jQuery.fn.extend({
    val : function(v) {
      var hooks;
      var value;
      var obj;
      var elem = this[0];
      {
        if (arguments.length) {
          return obj = jQuery.isFunction(v), this.each(function(key) {
            var value;
            if (1 === this.nodeType) {
              value = obj ? v.call(this, key, jQuery(this).val()) : v;
              if (null == value) {
                /** @type {string} */
                value = "";
              } else {
                if ("number" == typeof value) {
                  /** @type {string} */
                  value = value + "";
                } else {
                  if (jQuery.isArray(value)) {
                    value = jQuery.map(value, function(value) {
                      return null == value ? "" : value + "";
                    });
                  }
                }
              }
              hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
              if (!(hooks && "set" in hooks && void 0 !== hooks.set(this, value, "value"))) {
                this.value = value;
              }
            }
          });
        }
        if (elem) {
          return hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()], hooks && "get" in hooks && void 0 !== (value = hooks.get(elem, "value")) ? value : (value = elem.value, "string" == typeof value ? value.replace(n, "") : null == value ? "" : value);
        }
      }
    }
  });
  jQuery.extend({
    valHooks : {
      option : {
        get : function(elem) {
          var tween = jQuery.find.attr(elem, "value");
          return null != tween ? tween : jQuery.trim(jQuery.text(elem));
        }
      },
      select : {
        get : function(obj) {
          var b;
          var option;
          var options = obj.options;
          var position = obj.selectedIndex;
          /** @type {boolean} */
          var after = "select-one" === obj.type || 0 > position;
          /** @type {(Array|null)} */
          var index = after ? null : [];
          var item = after ? position + 1 : options.length;
          var name = 0 > position ? item : after ? position : 0;
          for (; item > name; name++) {
            if (option = options[name], !(!option.selected && name !== position || (support.optDisabled ? option.disabled : null !== option.getAttribute("disabled")) || option.parentNode.disabled && jQuery.nodeName(option.parentNode, "optgroup"))) {
              if (b = jQuery(option).val(), after) {
                return b;
              }
              index.push(b);
            }
          }
          return index;
        },
        set : function(elem, value) {
          var outputFn;
          var option;
          var options = elem.options;
          var result = jQuery.makeArray(value);
          var i = options.length;
          for (; i--;) {
            option = options[i];
            if (option.selected = jQuery.inArray(option.value, result) >= 0) {
              /** @type {boolean} */
              outputFn = true;
            }
          }
          return outputFn || (elem.selectedIndex = -1), result;
        }
      }
    }
  });
  jQuery.each(["radio", "checkbox"], function() {
    jQuery.valHooks[this] = {
      set : function(elem, value) {
        return jQuery.isArray(value) ? elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0 : void 0;
      }
    };
    if (!support.checkOn) {
      /**
       * @param {!Object} value
       * @return {?}
       */
      jQuery.valHooks[this].get = function(value) {
        return null === value.getAttribute("value") ? "on" : value.value;
      };
    }
  });
  jQuery.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, type) {
    /**
     * @param {string} listener
     * @param {!Object} callback
     * @return {?}
     */
    jQuery.fn[type] = function(listener, callback) {
      return arguments.length > 0 ? this.on(type, null, listener, callback) : this.trigger(type);
    };
  });
  jQuery.fn.extend({
    hover : function(fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    },
    bind : function(name, data, fn) {
      return this.on(name, null, data, fn);
    },
    unbind : function(type, fn) {
      return this.off(type, null, fn);
    },
    delegate : function(event, selector, listener, callback) {
      return this.on(selector, event, listener, callback);
    },
    undelegate : function(selector, event, fn) {
      return 1 === arguments.length ? this.off(selector, "**") : this.off(event, selector || "**", fn);
    }
  });
  var widgetUniqueIDIndex = jQuery.now();
  /** @type {!RegExp} */
  var rquery = /\?/;
  /**
   * @param {string} data
   * @return {?}
   */
  jQuery.parseJSON = function(data) {
    return JSON.parse(data + "");
  };
  /**
   * @param {string} data
   * @return {?}
   */
  jQuery.parseXML = function(data) {
    var xml;
    var parser;
    if (!data || "string" != typeof data) {
      return null;
    }
    try {
      /** @type {!DOMParser} */
      parser = new DOMParser;
      /** @type {(Document|null)} */
      xml = parser.parseFromString(data, "text/xml");
    } catch (d) {
      xml = void 0;
    }
    return (!xml || xml.getElementsByTagName("parsererror").length) && jQuery.error("Invalid XML: " + data), xml;
  };
  var params;
  var ajaxLocation;
  /** @type {!RegExp} */
  var rbreakright = /#.*$/;
  /** @type {!RegExp} */
  var rts = /([?&])_=[^&]*/;
  /** @type {!RegExp} */
  var multipartRegExp = /^(.*?):[ \t]*([^\r\n]*)$/gm;
  /** @type {!RegExp} */
  var cookie = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/;
  /** @type {!RegExp} */
  var loader = /^(?:GET|HEAD)$/;
  /** @type {!RegExp} */
  var jsre = /^\/\//;
  /** @type {!RegExp} */
  var moveRegex = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/;
  var prefilters = {};
  var transports = {};
  /** @type {string} */
  var wc = "*/".concat("*");
  try {
    /** @type {string} */
    ajaxLocation = location.href;
  } catch (xc) {
    ajaxLocation = document.createElement("a");
    /** @type {string} */
    ajaxLocation.href = "";
    /** @type {string} */
    ajaxLocation = ajaxLocation.href;
  }
  /** @type {!Array} */
  params = moveRegex.exec(ajaxLocation.toLowerCase()) || [];
  jQuery.extend({
    active : 0,
    lastModified : {},
    etag : {},
    ajaxSettings : {
      url : ajaxLocation,
      type : "GET",
      isLocal : cookie.test(params[1]),
      global : true,
      processData : true,
      async : true,
      contentType : "application/x-www-form-urlencoded; charset=UTF-8",
      accepts : {
        "*" : wc,
        text : "text/plain",
        html : "text/html",
        xml : "application/xml, text/xml",
        json : "application/json, text/javascript"
      },
      contents : {
        xml : /xml/,
        html : /html/,
        json : /json/
      },
      responseFields : {
        xml : "responseXML",
        text : "responseText",
        json : "responseJSON"
      },
      converters : {
        "* text" : String,
        "text html" : true,
        "text json" : jQuery.parseJSON,
        "text xml" : jQuery.parseXML
      },
      flatOptions : {
        url : true,
        context : true
      }
    },
    ajaxSetup : function(target, settings) {
      return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter : addToPrefiltersOrTransports(prefilters),
    ajaxTransport : addToPrefiltersOrTransports(transports),
    ajax : function(url, options) {
      /**
       * @param {number} status
       * @param {!Object} nativeStatusText
       * @param {!Array} responses
       * @param {!Object} headers
       * @return {undefined}
       */
      function done(status, nativeStatusText, responses, headers) {
        var isSuccess;
        var success;
        var error;
        var response;
        var modified;
        /** @type {!Object} */
        var statusText = nativeStatusText;
        if (2 !== dfltTitle) {
          /** @type {number} */
          dfltTitle = 2;
          if (_takingTooLongTimeout) {
            clearTimeout(_takingTooLongTimeout);
          }
          transport = void 0;
          title = headers || "";
          /** @type {number} */
          jqXHR.readyState = status > 0 ? 4 : 0;
          /** @type {boolean} */
          isSuccess = status >= 200 && 300 > status || 304 === status;
          if (responses) {
            response = ajaxHandleResponses(s, jqXHR, responses);
          }
          response = ajaxConvert(s, response, jqXHR, isSuccess);
          if (isSuccess) {
            if (s.ifModified) {
              modified = jqXHR.getResponseHeader("Last-Modified");
              if (modified) {
                jQuery.lastModified[cacheURL] = modified;
              }
              modified = jqXHR.getResponseHeader("etag");
              if (modified) {
                jQuery.etag[cacheURL] = modified;
              }
            }
            if (204 === status || "HEAD" === s.type) {
              /** @type {string} */
              statusText = "nocontent";
            } else {
              if (304 === status) {
                /** @type {string} */
                statusText = "notmodified";
              } else {
                statusText = response.state;
                success = response.data;
                error = response.error;
                /** @type {boolean} */
                isSuccess = !error;
              }
            }
          } else {
            error = statusText;
            if (status || !statusText) {
              /** @type {string} */
              statusText = "error";
              if (0 > status) {
                /** @type {number} */
                status = 0;
              }
            }
          }
          /** @type {number} */
          jqXHR.status = status;
          /** @type {string} */
          jqXHR.statusText = (nativeStatusText || statusText) + "";
          if (isSuccess) {
            deferred.resolveWith(obj, [success, statusText, jqXHR]);
          } else {
            deferred.rejectWith(obj, [jqXHR, statusText, error]);
          }
          jqXHR.statusCode(statusCode);
          statusCode = void 0;
          if (g) {
            globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
          }
          completeDeferred.fireWith(obj, [jqXHR, statusText]);
          if (g) {
            globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
            if (!--jQuery.active) {
              jQuery.event.trigger("ajaxStop");
            }
          }
        }
      }
      if ("object" == typeof url) {
        /** @type {!Object} */
        options = url;
        url = void 0;
      }
      options = options || {};
      var transport;
      var cacheURL;
      var title;
      var p;
      var _takingTooLongTimeout;
      var element;
      var g;
      var i;
      var s = jQuery.ajaxSetup({}, options);
      var obj = s.context || s;
      var globalEventContext = s.context && (obj.nodeType || obj.jquery) ? jQuery(obj) : jQuery.event;
      var deferred = jQuery.Deferred();
      var completeDeferred = jQuery.Callbacks("once memory");
      var statusCode = s.statusCode || {};
      var data = {};
      var requestHeadersNames = {};
      /** @type {number} */
      var dfltTitle = 0;
      /** @type {string} */
      var status = "canceled";
      var jqXHR = {
        readyState : 0,
        getResponseHeader : function(header) {
          var d;
          if (2 === dfltTitle) {
            if (!p) {
              p = {};
              for (; d = multipartRegExp.exec(title);) {
                /** @type {string} */
                p[d[1].toLowerCase()] = d[2];
              }
            }
            d = p[header.toLowerCase()];
          }
          return null == d ? null : d;
        },
        getAllResponseHeaders : function() {
          return 2 === dfltTitle ? title : null;
        },
        setRequestHeader : function(name, value) {
          var lname = name.toLowerCase();
          return dfltTitle || (name = requestHeadersNames[lname] = requestHeadersNames[lname] || name, data[name] = value), this;
        },
        overrideMimeType : function(type) {
          return dfltTitle || (s.mimeType = type), this;
        },
        statusCode : function(map) {
          var tmp;
          if (map) {
            if (2 > dfltTitle) {
              for (tmp in map) {
                /** @type {!Array} */
                statusCode[tmp] = [statusCode[tmp], map[tmp]];
              }
            } else {
              jqXHR.always(map[jqXHR.status]);
            }
          }
          return this;
        },
        abort : function(type) {
          var statusText = type || status;
          return transport && transport.abort(statusText), done(0, statusText), this;
        }
      };
      if (deferred.promise(jqXHR).complete = completeDeferred.add, jqXHR.success = jqXHR.done, jqXHR.error = jqXHR.fail, s.url = ((url || s.url || ajaxLocation) + "").replace(rbreakright, "").replace(jsre, params[1] + "//"), s.type = options.method || options.type || s.method || s.type, s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""], null == s.crossDomain && (element = moveRegex.exec(s.url.toLowerCase()), s.crossDomain = !(!element || element[1] === params[1] && 
      element[2] === params[2] && (element[3] || ("http:" === element[1] ? "80" : "443")) === (params[3] || ("http:" === params[1] ? "80" : "443")))), s.data && s.processData && "string" != typeof s.data && (s.data = jQuery.param(s.data, s.traditional)), inspectPrefiltersOrTransports(prefilters, s, options, jqXHR), 2 === dfltTitle) {
        return jqXHR;
      }
      g = s.global;
      if (g && 0 === jQuery.active++) {
        jQuery.event.trigger("ajaxStart");
      }
      s.type = s.type.toUpperCase();
      /** @type {boolean} */
      s.hasContent = !loader.test(s.type);
      cacheURL = s.url;
      if (!s.hasContent) {
        if (s.data) {
          /** @type {string} */
          cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data;
          delete s.data;
        }
        if (s.cache === false) {
          s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + widgetUniqueIDIndex++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + widgetUniqueIDIndex++;
        }
      }
      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
        }
        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
        }
      }
      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      }
      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + wc + "; q=0.01" : "") : s.accepts["*"]);
      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      }
      if (s.beforeSend && (s.beforeSend.call(obj, jqXHR, s) === false || 2 === dfltTitle)) {
        return jqXHR.abort();
      }
      /** @type {string} */
      status = "abort";
      for (i in{
        success : 1,
        error : 1,
        complete : 1
      }) {
        jqXHR[i](s[i]);
      }
      if (transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR)) {
        /** @type {number} */
        jqXHR.readyState = 1;
        if (g) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        }
        if (s.async && s.timeout > 0) {
          /** @type {number} */
          _takingTooLongTimeout = setTimeout(function() {
            jqXHR.abort("timeout");
          }, s.timeout);
        }
        try {
          /** @type {number} */
          dfltTitle = 1;
          transport.send(data, done);
        } catch (success) {
          if (!(2 > dfltTitle)) {
            throw success;
          }
          done(-1, success);
        }
      } else {
        done(-1, "No Transport");
      }
      return jqXHR;
    },
    getJSON : function(name, url, callback) {
      return jQuery.get(name, url, callback, "json");
    },
    getScript : function(options, type) {
      return jQuery.get(options, void 0, type, "script");
    }
  });
  jQuery.each(["get", "post"], function(a, method) {
    /**
     * @param {string} logErrorUrl
     * @param {!Object} data
     * @param {!Object} d
     * @param {!Object} referrer
     * @return {?}
     */
    jQuery[method] = function(logErrorUrl, data, d, referrer) {
      return jQuery.isFunction(data) && (referrer = referrer || d, d = data, data = void 0), jQuery.ajax({
        url : logErrorUrl,
        type : method,
        dataType : referrer,
        data : data,
        success : d
      });
    };
  });
  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, type) {
    /**
     * @param {string} a
     * @return {?}
     */
    jQuery.fn[type] = function(a) {
      return this.on(type, a);
    };
  });
  /**
   * @param {string} url
   * @return {?}
   */
  jQuery._evalUrl = function(url) {
    return jQuery.ajax({
      url : url,
      type : "GET",
      dataType : "script",
      async : false,
      global : false,
      "throws" : true
    });
  };
  jQuery.fn.extend({
    wrapAll : function(html) {
      var b;
      return jQuery.isFunction(html) ? this.each(function(i) {
        jQuery(this).wrapAll(html.call(this, i));
      }) : (this[0] && (b = jQuery(html, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
        var elem = this;
        for (; elem.firstElementChild;) {
          elem = elem.firstElementChild;
        }
        return elem;
      }).append(this)), this);
    },
    wrapInner : function(html) {
      return this.each(jQuery.isFunction(html) ? function(i) {
        jQuery(this).wrapInner(html.call(this, i));
      } : function() {
        var b = jQuery(this);
        var contents = b.contents();
        if (contents.length) {
          contents.wrapAll(html);
        } else {
          b.append(html);
        }
      });
    },
    wrap : function(html) {
      var isFunction = jQuery.isFunction(html);
      return this.each(function(i) {
        jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
      });
    },
    unwrap : function() {
      return this.parent().each(function() {
        if (!jQuery.nodeName(this, "body")) {
          jQuery(this).replaceWith(this.childNodes);
        }
      }).end();
    }
  });
  /**
   * @param {!Object} name
   * @return {?}
   */
  jQuery.expr.filters.hidden = function(name) {
    return name.offsetWidth <= 0 && name.offsetHeight <= 0;
  };
  /**
   * @param {undefined} el
   * @return {?}
   */
  jQuery.expr.filters.visible = function(el) {
    return !jQuery.expr.filters.hidden(el);
  };
  /** @type {!RegExp} */
  var regNewline = /%20/g;
  /** @type {!RegExp} */
  var _updateShellBoundsAndConformDims = /\[\]$/;
  /** @type {!RegExp} */
  var reVowels = /\r?\n/g;
  /** @type {!RegExp} */
  var reHasHexPrefix = /^(?:submit|button|image|reset|file)$/i;
  /** @type {!RegExp} */
  var rsubmittable = /^(?:input|select|textarea|keygen)/i;
  /**
   * @param {?} a
   * @param {string} obj
   * @return {?}
   */
  jQuery.param = function(a, obj) {
    var i;
    /** @type {!Array} */
    var displayUsedBy = [];
    /**
     * @param {?} a
     * @param {string} value
     * @return {undefined}
     */
    var add = function(a, value) {
      value = jQuery.isFunction(value) ? value() : null == value ? "" : value;
      /** @type {string} */
      displayUsedBy[displayUsedBy.length] = encodeURIComponent(a) + "=" + encodeURIComponent(value);
    };
    if (void 0 === obj && (obj = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional), jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
      jQuery.each(a, function() {
        add(this.name, this.value);
      });
    } else {
      for (i in a) {
        callback(i, a[i], obj, add);
      }
    }
    return displayUsedBy.join("&").replace(regNewline, "+");
  };
  jQuery.fn.extend({
    serialize : function() {
      return jQuery.param(this.serializeArray());
    },
    serializeArray : function() {
      return this.map(function() {
        var elements = jQuery.prop(this, "elements");
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function() {
        var string = this.type;
        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !reHasHexPrefix.test(string) && (this.checked || !reg.test(string));
      }).map(function(a, ctlParams) {
        var val = jQuery(this).val();
        return null == val ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
          return {
            name : ctlParams.name,
            value : val.replace(reVowels, "\r\n")
          };
        }) : {
          name : ctlParams.name,
          value : val.replace(reVowels, "\r\n")
        };
      }).get();
    }
  });
  /**
   * @return {?}
   */
  jQuery.ajaxSettings.xhr = function() {
    try {
      return new XMLHttpRequest;
    } catch (a) {
    }
  };
  /** @type {number} */
  var nextCallbackId = 0;
  var xhrCallbacks = {};
  var xhrSuccessStatus = {
    0 : 200,
    1223 : 204
  };
  var xhrSupported = jQuery.ajaxSettings.xhr();
  if (window.ActiveXObject) {
    jQuery(window).on("unload", function() {
      var key;
      for (key in xhrCallbacks) {
        xhrCallbacks[key]();
      }
    });
  }
  /** @type {boolean} */
  support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
  /** @type {boolean} */
  support.ajax = xhrSupported = !!xhrSupported;
  jQuery.ajaxTransport(function(s) {
    var callback;
    return support.cors || xhrSupported && !s.crossDomain ? {
      send : function(headers, callback) {
        var i;
        var xhr = s.xhr();
        /** @type {number} */
        var id = ++nextCallbackId;
        if (xhr.open(s.type, s.url, s.async, s.username, s.password), s.xhrFields) {
          for (i in s.xhrFields) {
            xhr[i] = s.xhrFields[i];
          }
        }
        if (s.mimeType && xhr.overrideMimeType) {
          xhr.overrideMimeType(s.mimeType);
        }
        if (!(s.crossDomain || headers["X-Requested-With"])) {
          /** @type {string} */
          headers["X-Requested-With"] = "XMLHttpRequest";
        }
        for (i in headers) {
          xhr.setRequestHeader(i, headers[i]);
        }
        /**
         * @param {string} event
         * @return {?}
         */
        callback = function(event) {
          return function() {
            if (callback) {
              delete xhrCallbacks[id];
              /** @type {null} */
              callback = xhr.onload = xhr.onerror = null;
              if ("abort" === event) {
                xhr.abort();
              } else {
                if ("error" === event) {
                  callback(xhr.status, xhr.statusText);
                } else {
                  callback(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, "string" == typeof xhr.responseText ? {
                    text : xhr.responseText
                  } : void 0, xhr.getAllResponseHeaders());
                }
              }
            }
          };
        };
        xhr.onload = callback();
        xhr.onerror = callback("error");
        callback = xhrCallbacks[id] = callback("abort");
        try {
          xhr.send(s.hasContent && s.data || null);
        } catch (h) {
          if (callback) {
            throw h;
          }
        }
      },
      abort : function() {
        if (callback) {
          callback();
        }
      }
    } : void 0;
  });
  jQuery.ajaxSetup({
    accepts : {
      script : "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents : {
      script : /(?:java|ecma)script/
    },
    converters : {
      "text script" : function(value) {
        return jQuery.globalEval(value), value;
      }
    }
  });
  jQuery.ajaxPrefilter("script", function(settings) {
    if (void 0 === settings.cache) {
      /** @type {boolean} */
      settings.cache = false;
    }
    if (settings.crossDomain) {
      /** @type {string} */
      settings.type = "GET";
    }
  });
  jQuery.ajaxTransport("script", function(s) {
    if (s.crossDomain) {
      var fileElem;
      var callback;
      return {
        send : function(packets, callback) {
          fileElem = jQuery("<script>").prop({
            async : true,
            charset : s.scriptCharset,
            src : s.url
          }).on("load error", callback = function(result) {
            fileElem.remove();
            /** @type {null} */
            callback = null;
            if (result) {
              callback("error" === result.type ? 404 : 200, result.type);
            }
          });
          document.head.appendChild(fileElem[0]);
        },
        abort : function() {
          if (callback) {
            callback();
          }
        }
      };
    }
  });
  /** @type {!Array} */
  var oldCallbacks = [];
  /** @type {!RegExp} */
  var rjsonp = /(=)\?(?=&|$)|\?\?/;
  jQuery.ajaxSetup({
    jsonp : "callback",
    jsonpCallback : function() {
      var indexLookupKey = oldCallbacks.pop() || jQuery.expando + "_" + widgetUniqueIDIndex++;
      return this[indexLookupKey] = true, indexLookupKey;
    }
  });
  jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, scanners) {
    var callbackName;
    var overwritten;
    var responseContainer;
    /** @type {(boolean|string)} */
    var jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : "string" == typeof s.data && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
    return jsonProp || "jsonp" === s.dataTypes[0] ? (callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback, jsonProp ? s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName) : s.jsonp !== false && (s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName), s.converters["script json"] = function() {
      return responseContainer || jQuery.error(callbackName + " was not called"), responseContainer[0];
    }, s.dataTypes[0] = "json", overwritten = window[callbackName], window[callbackName] = function() {
      /** @type {!Arguments} */
      responseContainer = arguments;
    }, scanners.always(function() {
      window[callbackName] = overwritten;
      if (s[callbackName]) {
        s.jsonpCallback = originalSettings.jsonpCallback;
        oldCallbacks.push(callbackName);
      }
      if (responseContainer && jQuery.isFunction(overwritten)) {
        overwritten(responseContainer[0]);
      }
      responseContainer = overwritten = void 0;
    }), "script") : void 0;
  });
  /**
   * @param {string} data
   * @param {!Object} context
   * @param {!Function} keepScripts
   * @return {?}
   */
  jQuery.parseHTML = function(data, context, keepScripts) {
    if (!data || "string" != typeof data) {
      return null;
    }
    if ("boolean" == typeof context) {
      /** @type {!Object} */
      keepScripts = context;
      /** @type {boolean} */
      context = false;
    }
    context = context || document;
    /** @type {(Array<string>|null)} */
    var parsed = rsingleTag.exec(data);
    /** @type {(Array|boolean)} */
    var scripts = !keepScripts && [];
    return parsed ? [context.createElement(parsed[1])] : (parsed = jQuery.buildFragment([data], context, scripts), scripts && scripts.length && jQuery(scripts).remove(), jQuery.merge([], parsed.childNodes));
  };
  /** @type {function(string, !Object, !Object): ?} */
  var proxyStoreLoad = jQuery.fn.load;
  /**
   * @param {string} options
   * @param {!Object} value
   * @param {!Object} callback
   * @return {?}
   */
  jQuery.fn.load = function(options, value, callback) {
    if ("string" != typeof options && proxyStoreLoad) {
      return proxyStoreLoad.apply(this, arguments);
    }
    var selector;
    var type;
    var response;
    var self = this;
    var args = options.indexOf(" ");
    return args >= 0 && (selector = jQuery.trim(options.slice(args)), options = options.slice(0, args)), jQuery.isFunction(value) ? (callback = value, value = void 0) : value && "object" == typeof value && (type = "POST"), self.length > 0 && jQuery.ajax({
      url : options,
      type : type,
      dataType : "html",
      data : value
    }).done(function(responseText) {
      /** @type {!Arguments} */
      response = arguments;
      self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
    }).complete(callback && function(name, a) {
      self.each(callback, response || [name.responseText, a, name]);
    }), this;
  };
  /**
   * @param {?} elem
   * @return {?}
   */
  jQuery.expr.filters.animated = function(elem) {
    return jQuery.grep(jQuery.timers, function(fn) {
      return elem === fn.elem;
    }).length;
  };
  var docElem = window.document.documentElement;
  jQuery.offset = {
    setOffset : function(element, options, x) {
      var ret;
      var s;
      var curCSSTop;
      var y;
      var curOffset;
      var curCSSLeft;
      var j;
      var propertyName = jQuery.css(element, "position");
      var l = jQuery(element);
      var style = {};
      if ("static" === propertyName) {
        /** @type {string} */
        element.style.position = "relative";
      }
      curOffset = l.offset();
      curCSSTop = jQuery.css(element, "top");
      curCSSLeft = jQuery.css(element, "left");
      /** @type {boolean} */
      j = ("absolute" === propertyName || "fixed" === propertyName) && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
      if (j) {
        ret = l.position();
        y = ret.top;
        s = ret.left;
      } else {
        /** @type {number} */
        y = parseFloat(curCSSTop) || 0;
        /** @type {number} */
        s = parseFloat(curCSSLeft) || 0;
      }
      if (jQuery.isFunction(options)) {
        options = options.call(element, x, curOffset);
      }
      if (null != options.top) {
        /** @type {number} */
        style.top = options.top - curOffset.top + y;
      }
      if (null != options.left) {
        /** @type {number} */
        style.left = options.left - curOffset.left + s;
      }
      if ("using" in options) {
        options.using.call(element, style);
      } else {
        l.css(style);
      }
    }
  };
  jQuery.fn.extend({
    offset : function(name) {
      if (arguments.length) {
        return void 0 === name ? this : this.each(function(i) {
          jQuery.offset.setOffset(this, name, i);
        });
      }
      var element;
      var win;
      var elem = this[0];
      var box = {
        top : 0,
        left : 0
      };
      var doc = elem && elem.ownerDocument;
      if (doc) {
        return element = doc.documentElement, jQuery.contains(element, elem) ? (typeof elem.getBoundingClientRect !== undefined && (box = elem.getBoundingClientRect()), win = getWindow(doc), {
          top : box.top + win.pageYOffset - element.clientTop,
          left : box.left + win.pageXOffset - element.clientLeft
        }) : box;
      }
    },
    position : function() {
      if (this[0]) {
        var offsetParent;
        var offset;
        var c = this[0];
        var parentOffset = {
          top : 0,
          left : 0
        };
        return "fixed" === jQuery.css(c, "position") ? offset = c.getBoundingClientRect() : (offsetParent = this.offsetParent(), offset = this.offset(), jQuery.nodeName(offsetParent[0], "html") || (parentOffset = offsetParent.offset()), parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true), parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true)), {
          top : offset.top - parentOffset.top - jQuery.css(c, "marginTop", true),
          left : offset.left - parentOffset.left - jQuery.css(c, "marginLeft", true)
        };
      }
    },
    offsetParent : function() {
      return this.map(function() {
        var offsetParent = this.offsetParent || docElem;
        for (; offsetParent && !jQuery.nodeName(offsetParent, "html") && "static" === jQuery.css(offsetParent, "position");) {
          offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || docElem;
      });
    }
  });
  jQuery.each({
    scrollLeft : "pageXOffset",
    scrollTop : "pageYOffset"
  }, function(type, prop) {
    /** @type {boolean} */
    var top = "pageYOffset" === prop;
    /**
     * @param {?} value
     * @return {?}
     */
    jQuery.fn[type] = function(value) {
      return access(this, function(el, method, val) {
        var win = getWindow(el);
        return void 0 === val ? win ? win[prop] : el[method] : void(win ? win.scrollTo(top ? window.pageXOffset : val, top ? val : window.pageYOffset) : el[method] = val);
      }, type, value, arguments.length, null);
    };
  });
  jQuery.each(["top", "left"], function(a, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(parent, val) {
      return val ? (val = curCSS(parent, prop), rnumnonpx.test(val) ? jQuery(parent).position()[prop] + "px" : val) : void 0;
    });
  });
  jQuery.each({
    Height : "height",
    Width : "width"
  }, function(name, type) {
    jQuery.each({
      padding : "inner" + name,
      content : type,
      "" : "outer" + name
    }, function(defaultExtra, original) {
      /**
       * @param {!Object} margin
       * @param {boolean} value
       * @return {?}
       */
      jQuery.fn[original] = function(margin, value) {
        var chainable = arguments.length && (defaultExtra || "boolean" != typeof margin);
        var extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
        return access(this, function(elem, type, undefined) {
          var doc;
          return jQuery.isWindow(elem) ? elem.document.documentElement["client" + name] : 9 === elem.nodeType ? (doc = elem.documentElement, Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name])) : void 0 === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, undefined, extra);
        }, type, chainable ? margin : void 0, chainable, null);
      };
    });
  });
  /**
   * @return {?}
   */
  jQuery.fn.size = function() {
    return this.length;
  };
  jQuery.fn.andSelf = jQuery.fn.addBack;
  if ("function" == typeof define && define.amd) {
    define("jquery", [], function() {
      return jQuery;
    });
  }
  var _jQuery = window.jQuery;
  var old$ = window.$;
  return jQuery.noConflict = function(deep) {
    return window.$ === jQuery && (window.$ = old$), deep && window.jQuery === jQuery && (window.jQuery = _jQuery), jQuery;
  }, typeof forceWipe === undefined && (window.jQuery = window.$ = jQuery), jQuery;
}), "undefined" == typeof jQuery) {
  throw new Error("Bootstrap's JavaScript requires jQuery");
}
+function($) {
  /**
   * @return {?}
   */
  function transitionEnd() {
    /** @type {!Element} */
    var el = document.createElement("bootstrap");
    var transEndEventNames = {
      WebkitTransition : "webkitTransitionEnd",
      MozTransition : "transitionend",
      OTransition : "oTransitionEnd otransitionend",
      transition : "transitionend"
    };
    var name;
    for (name in transEndEventNames) {
      if (void 0 !== el.style[name]) {
        return {
          end : transEndEventNames[name]
        };
      }
    }
    return false;
  }
  /**
   * @param {number} duration
   * @return {?}
   */
  $.fn.emulateTransitionEnd = function(duration) {
    /** @type {boolean} */
    var c = false;
    var unloadedImgElement = this;
    $(this).one($.support.transition.end, function() {
      /** @type {boolean} */
      c = true;
    });
    /**
     * @return {undefined}
     */
    var callback = function() {
      if (!c) {
        $(unloadedImgElement).trigger($.support.transition.end);
      }
    };
    return setTimeout(callback, duration), this;
  };
  $(function() {
    $.support.transition = transitionEnd();
  });
}(jQuery), +function($) {
  /** @type {string} */
  var b = '[data-dismiss="alert"]';
  /**
   * @param {!Array} type
   * @return {undefined}
   */
  var Alert = function(type) {
    $(type).on("click", b, this.close);
  };
  /**
   * @param {!Object} e
   * @return {undefined}
   */
  Alert.prototype.close = function(e) {
    /**
     * @return {undefined}
     */
    function removeElement() {
      $parent.trigger("closed.bs.alert").remove();
    }
    var $this = $(this);
    var selector = $this.attr("data-target");
    if (!selector) {
      selector = $this.attr("href");
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, "");
    }
    var $parent = $(selector);
    if (e) {
      e.preventDefault();
    }
    if (!$parent.length) {
      $parent = $this.hasClass("alert") ? $this : $this.parent();
    }
    $parent.trigger(e = $.Event("close.bs.alert"));
    if (!e.isDefaultPrevented()) {
      $parent.removeClass("in");
      if ($.support.transition && $parent.hasClass("fade")) {
        $parent.one($.support.transition.end, removeElement).emulateTransitionEnd(150);
      } else {
        removeElement();
      }
    }
  };
  var old = $.fn.alert;
  /**
   * @param {?} arg
   * @return {?}
   */
  $.fn.alert = function(arg) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data("bs.alert");
      if (!data) {
        $this.data("bs.alert", data = new Alert(this));
      }
      if ("string" == typeof arg) {
        data[arg].call($this);
      }
    });
  };
  /** @type {function(!Array): undefined} */
  $.fn.alert.Constructor = Alert;
  /**
   * @return {?}
   */
  $.fn.alert.noConflict = function() {
    return $.fn.alert = old, this;
  };
  $(document).on("click.bs.alert.data-api", b, Alert.prototype.close);
}(jQuery), +function($) {
  /**
   * @param {!Array} element
   * @param {!Object} options
   * @return {undefined}
   */
  var Button = function(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, Button.DEFAULTS, options);
    /** @type {boolean} */
    this.isLoading = false;
  };
  Button.DEFAULTS = {
    loadingText : "loading..."
  };
  /**
   * @param {string} state
   * @return {undefined}
   */
  Button.prototype.setState = function(state) {
    /** @type {string} */
    var d = "disabled";
    var $el = this.$element;
    /** @type {string} */
    var val = $el.is("input") ? "val" : "html";
    var data = $el.data();
    /** @type {string} */
    state = state + "Text";
    if (!data.resetText) {
      $el.data("resetText", $el[val]());
    }
    $el[val](data[state] || this.options[state]);
    setTimeout($.proxy(function() {
      if ("loadingText" == state) {
        /** @type {boolean} */
        this.isLoading = true;
        $el.addClass(d).attr(d, d);
      } else {
        if (this.isLoading) {
          /** @type {boolean} */
          this.isLoading = false;
          $el.removeClass(d).removeAttr(d);
        }
      }
    }, this), 0);
  };
  /**
   * @return {undefined}
   */
  Button.prototype.toggle = function() {
    /** @type {boolean} */
    var a = true;
    var el_form_group = this.$element.closest('[data-toggle="buttons"]');
    if (el_form_group.length) {
      var c = this.$element.find("input");
      if ("radio" == c.prop("type")) {
        if (c.prop("checked") && this.$element.hasClass("active")) {
          /** @type {boolean} */
          a = false;
        } else {
          el_form_group.find(".active").removeClass("active");
        }
      }
      if (a) {
        c.prop("checked", !this.$element.hasClass("active")).trigger("change");
      }
    }
    if (a) {
      this.$element.toggleClass("active");
    }
  };
  var old = $.fn.button;
  /**
   * @param {string} key
   * @return {?}
   */
  $.fn.button = function(key) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data("bs.button");
      var options = "object" == typeof key && key;
      if (!data) {
        $this.data("bs.button", data = new Button(this, options));
      }
      if ("toggle" == key) {
        data.toggle();
      } else {
        if (key) {
          data.setState(key);
        }
      }
    });
  };
  /** @type {function(!Array, !Object): undefined} */
  $.fn.button.Constructor = Button;
  /**
   * @return {?}
   */
  $.fn.button.noConflict = function() {
    return $.fn.button = old, this;
  };
  $(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(event) {
    var $btn = $(event.target);
    if (!$btn.hasClass("btn")) {
      $btn = $btn.closest(".btn");
    }
    $btn.button("toggle");
    event.preventDefault();
  });
}(jQuery), +function($) {
  /**
   * @param {!Array} element
   * @param {!Object} options
   * @return {undefined}
   */
  var Carousel = function(element, options) {
    this.$element = $(element);
    this.$indicators = this.$element.find(".carousel-indicators");
    /** @type {!Object} */
    this.options = options;
    /** @type {null} */
    this.paused = this.sliding = this.interval = this.$active = this.$items = null;
    if ("hover" == this.options.pause) {
      this.$element.on("mouseenter", $.proxy(this.pause, this)).on("mouseleave", $.proxy(this.cycle, this));
    }
  };
  Carousel.DEFAULTS = {
    interval : 5E3,
    pause : "hover",
    wrap : true
  };
  /**
   * @param {string} options
   * @return {?}
   */
  Carousel.prototype.cycle = function(options) {
    return options || (this.paused = false), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval)), this;
  };
  /**
   * @return {?}
   */
  Carousel.prototype.getActiveIndex = function() {
    return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active);
  };
  /**
   * @param {number} index
   * @return {?}
   */
  Carousel.prototype.to = function(index) {
    var c = this;
    var activeIndex = this.getActiveIndex();
    return index > this.$items.length - 1 || 0 > index ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
      c.to(index);
    }) : activeIndex == index ? this.pause().cycle() : this.slide(index > activeIndex ? "next" : "prev", $(this.$items[index]));
  };
  /**
   * @param {string} promisedResponse
   * @return {?}
   */
  Carousel.prototype.pause = function(promisedResponse) {
    return promisedResponse || (this.paused = true), this.$element.find(".next, .prev").length && $.support.transition && (this.$element.trigger($.support.transition.end), this.cycle(true)), this.interval = clearInterval(this.interval), this;
  };
  /**
   * @return {?}
   */
  Carousel.prototype.next = function() {
    return this.sliding ? void 0 : this.slide("next");
  };
  /**
   * @return {?}
   */
  Carousel.prototype.prev = function() {
    return this.sliding ? void 0 : this.slide("prev");
  };
  /**
   * @param {string} a
   * @param {string} next
   * @return {?}
   */
  Carousel.prototype.slide = function(a, next) {
    var element = this.$element.find(".item.active");
    var $next = next || element[a]();
    var isCycling = this.interval;
    /** @type {string} */
    var direction = "next" == a ? "left" : "right";
    /** @type {string} */
    var fallback = "next" == a ? "first" : "last";
    var that = this;
    if (!$next.length) {
      if (!this.options.wrap) {
        return;
      }
      $next = this.$element.find(".item")[fallback]();
    }
    if ($next.hasClass("active")) {
      return this.sliding = false;
    }
    var event = $.Event("slide.bs.carousel", {
      relatedTarget : $next[0],
      direction : direction
    });
    return this.$element.trigger(event), event.isDefaultPrevented() ? void 0 : (this.sliding = true, isCycling && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid.bs.carousel", function() {
      var formsearch = $(that.$indicators.children()[that.getActiveIndex()]);
      if (formsearch) {
        formsearch.addClass("active");
      }
    })), $.support.transition && this.$element.hasClass("slide") ? ($next.addClass(a), $next[0].offsetWidth, element.addClass(direction), $next.addClass(direction), element.one($.support.transition.end, function() {
      $next.removeClass([a, direction].join(" ")).addClass("active");
      element.removeClass(["active", direction].join(" "));
      /** @type {boolean} */
      that.sliding = false;
      setTimeout(function() {
        that.$element.trigger("slid.bs.carousel");
      }, 0);
    }).emulateTransitionEnd(1E3 * element.css("transition-duration").slice(0, -1))) : (element.removeClass("active"), $next.addClass("active"), this.sliding = false, this.$element.trigger("slid.bs.carousel")), isCycling && this.cycle(), this);
  };
  var old = $.fn.carousel;
  /**
   * @param {boolean} options
   * @return {?}
   */
  $.fn.carousel = function(options) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data("bs.carousel");
      var _config = $.extend({}, Carousel.DEFAULTS, $this.data(), "object" == typeof options && options);
      var id = "string" == typeof options ? options : _config.slide;
      if (!data) {
        $this.data("bs.carousel", data = new Carousel(this, _config));
      }
      if ("number" == typeof options) {
        data.to(options);
      } else {
        if (id) {
          data[id]();
        } else {
          if (_config.interval) {
            data.pause().cycle();
          }
        }
      }
    });
  };
  /** @type {function(!Array, !Object): undefined} */
  $.fn.carousel.Constructor = Carousel;
  /**
   * @return {?}
   */
  $.fn.carousel.noConflict = function() {
    return $.fn.carousel = old, this;
  };
  $(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(event) {
    var href;
    var $this = $(this);
    var $target = $($this.attr("data-target") || (href = $this.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, ""));
    var options = $.extend({}, $target.data(), $this.data());
    var slideIndex = $this.attr("data-slide-to");
    if (slideIndex) {
      /** @type {boolean} */
      options.interval = false;
    }
    $target.carousel(options);
    if (slideIndex = $this.attr("data-slide-to")) {
      $target.data("bs.carousel").to(slideIndex);
    }
    event.preventDefault();
  });
  $(window).on("load", function() {
    $('[data-ride="carousel"]').each(function() {
      var $carousel = $(this);
      $carousel.carousel($carousel.data());
    });
  });
}(jQuery), +function($) {
  /**
   * @param {!Array} element
   * @param {!Object} options
   * @return {undefined}
   */
  var Collapse = function(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, Collapse.DEFAULTS, options);
    /** @type {null} */
    this.transitioning = null;
    if (this.options.parent) {
      this.$parent = $(this.options.parent);
    }
    if (this.options.toggle) {
      this.toggle();
    }
  };
  Collapse.DEFAULTS = {
    toggle : true
  };
  /**
   * @return {?}
   */
  Collapse.prototype.dimension = function() {
    var hasWidth = this.$element.hasClass("width");
    return hasWidth ? "width" : "height";
  };
  /**
   * @return {?}
   */
  Collapse.prototype.show = function() {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var event = $.Event("show.bs.collapse");
      if (this.$element.trigger(event), !event.isDefaultPrevented()) {
        var actives = this.$parent && this.$parent.find("> .panel > .in");
        if (actives && actives.length) {
          var hasData = actives.data("bs.collapse");
          if (hasData && hasData.transitioning) {
            return;
          }
          actives.collapse("hide");
          if (!hasData) {
            actives.data("bs.collapse", null);
          }
        }
        var dimension = this.dimension();
        this.$element.removeClass("collapse").addClass("collapsing")[dimension](0);
        /** @type {number} */
        this.transitioning = 1;
        /**
         * @return {undefined}
         */
        var complete = function() {
          this.$element.removeClass("collapsing").addClass("collapse in")[dimension]("auto");
          /** @type {number} */
          this.transitioning = 0;
          this.$element.trigger("shown.bs.collapse");
        };
        if (!$.support.transition) {
          return complete.call(this);
        }
        var scrollSize = $.camelCase(["scroll", dimension].join("-"));
        this.$element.one($.support.transition.end, $.proxy(complete, this)).emulateTransitionEnd(350)[dimension](this.$element[0][scrollSize]);
      }
    }
  };
  /**
   * @return {?}
   */
  Collapse.prototype.hide = function() {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var event = $.Event("hide.bs.collapse");
      if (this.$element.trigger(event), !event.isDefaultPrevented()) {
        var dimension = this.dimension();
        this.$element[dimension](this.$element[dimension]())[0].offsetHeight;
        this.$element.addClass("collapsing").removeClass("collapse").removeClass("in");
        /** @type {number} */
        this.transitioning = 1;
        /**
         * @return {undefined}
         */
        var complete = function() {
          /** @type {number} */
          this.transitioning = 0;
          this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse");
        };
        return $.support.transition ? void this.$element[dimension](0).one($.support.transition.end, $.proxy(complete, this)).emulateTransitionEnd(350) : complete.call(this);
      }
    }
  };
  /**
   * @return {undefined}
   */
  Collapse.prototype.toggle = function() {
    this[this.$element.hasClass("in") ? "hide" : "show"]();
  };
  var old = $.fn.collapse;
  /**
   * @param {string} options
   * @return {?}
   */
  $.fn.collapse = function(options) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data("bs.collapse");
      var _config = $.extend({}, Collapse.DEFAULTS, $this.data(), "object" == typeof options && options);
      if (!data && _config.toggle && "show" == options) {
        /** @type {boolean} */
        options = !options;
      }
      if (!data) {
        $this.data("bs.collapse", data = new Collapse(this, _config));
      }
      if ("string" == typeof options) {
        data[options]();
      }
    });
  };
  /** @type {function(!Array, !Object): undefined} */
  $.fn.collapse.Constructor = Collapse;
  /**
   * @return {?}
   */
  $.fn.collapse.noConflict = function() {
    return $.fn.collapse = old, this;
  };
  $(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(event) {
    var href;
    var $this = $(this);
    var clicked = $this.attr("data-target") || event.preventDefault() || (href = $this.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, "");
    var _this = $(clicked);
    var data = _this.data("bs.collapse");
    var option = data ? "toggle" : $this.data();
    var parent = $this.attr("data-parent");
    var $parent = parent && $(parent);
    if (!(data && data.transitioning)) {
      if ($parent) {
        $parent.find('[data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass("collapsed");
      }
      $this[_this.hasClass("in") ? "addClass" : "removeClass"]("collapsed");
    }
    _this.collapse(option);
  });
}(jQuery), +function($) {
  /**
   * @param {!Object} event
   * @return {undefined}
   */
  function init(event) {
    $(liToRemove).remove();
    $(toggle).each(function() {
      var $parent = getParent($(this));
      var type = {
        relatedTarget : this
      };
      if ($parent.hasClass("open")) {
        $parent.trigger(event = $.Event("hide.bs.dropdown", type));
        if (!event.isDefaultPrevented()) {
          $parent.removeClass("open").trigger("hidden.bs.dropdown", type);
        }
      }
    });
  }
  /**
   * @param {!Object} $this
   * @return {?}
   */
  function getParent($this) {
    var selector = $this.attr("data-target");
    if (!selector) {
      selector = $this.attr("href");
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, "");
    }
    var $parent = selector && $(selector);
    return $parent && $parent.length ? $parent : $this.parent();
  }
  /** @type {string} */
  var liToRemove = ".dropdown-backdrop";
  /** @type {string} */
  var toggle = "[data-toggle=dropdown]";
  /**
   * @param {!Array} elem
   * @return {undefined}
   */
  var Dropdown = function(elem) {
    $(elem).on("click.bs.dropdown", this.toggle);
  };
  /**
   * @param {!Object} event
   * @return {?}
   */
  Dropdown.prototype.toggle = function(event) {
    var $this = $(this);
    if (!$this.is(".disabled, :disabled")) {
      var $parent = getParent($this);
      var isActive = $parent.hasClass("open");
      if (init(), !isActive) {
        if ("ontouchstart" in document.documentElement && !$parent.closest(".navbar-nav").length) {
          $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on("click", init);
        }
        var type = {
          relatedTarget : this
        };
        if ($parent.trigger(event = $.Event("show.bs.dropdown", type)), event.isDefaultPrevented()) {
          return;
        }
        $parent.toggleClass("open").trigger("shown.bs.dropdown", type);
        $this.focus();
      }
      return false;
    }
  };
  /**
   * @param {!Event} event
   * @return {?}
   */
  Dropdown.prototype.keydown = function(event) {
    if (/(38|40|27)/.test(event.keyCode)) {
      var $this = $(this);
      if (event.preventDefault(), event.stopPropagation(), !$this.is(".disabled, :disabled")) {
        var $parent = getParent($this);
        var isActive = $parent.hasClass("open");
        if (!isActive || isActive && 27 == event.keyCode) {
          return 27 == event.which && $parent.find(toggle).focus(), $this.click();
        }
        /** @type {string} */
        var desc = " li:not(.divider):visible a";
        var i = $parent.find("[role=menu]" + desc + ", [role=listbox]" + desc);
        if (i.length) {
          var j = i.index(i.filter(":focus"));
          if (38 == event.keyCode && j > 0) {
            j--;
          }
          if (40 == event.keyCode && j < i.length - 1) {
            j++;
          }
          if (!~j) {
            /** @type {number} */
            j = 0;
          }
          i.eq(j).focus();
        }
      }
    }
  };
  var old = $.fn.dropdown;
  /**
   * @param {?} name
   * @return {?}
   */
  $.fn.dropdown = function(name) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data("bs.dropdown");
      if (!data) {
        $this.data("bs.dropdown", data = new Dropdown(this));
      }
      if ("string" == typeof name) {
        data[name].call($this);
      }
    });
  };
  /** @type {function(!Array): undefined} */
  $.fn.dropdown.Constructor = Dropdown;
  /**
   * @return {?}
   */
  $.fn.dropdown.noConflict = function() {
    return $.fn.dropdown = old, this;
  };
  $(document).on("click.bs.dropdown.data-api", init).on("click.bs.dropdown.data-api", ".dropdown form", function(event) {
    event.stopPropagation();
  }).on("click.bs.dropdown.data-api", toggle, Dropdown.prototype.toggle).on("keydown.bs.dropdown.data-api", toggle + ", [role=menu], [role=listbox]", Dropdown.prototype.keydown);
}(jQuery), +function($) {
  /**
   * @param {!Array} element
   * @param {!Object} options
   * @return {undefined}
   */
  var Modal = function(element, options) {
    /** @type {!Object} */
    this.options = options;
    this.$element = $(element);
    /** @type {null} */
    this.$backdrop = this.isShown = null;
    if (this.options.remote) {
      this.$element.find(".modal-content").load(this.options.remote, $.proxy(function() {
        this.$element.trigger("loaded.bs.modal");
      }, this));
    }
  };
  Modal.DEFAULTS = {
    backdrop : true,
    keyboard : true,
    show : true
  };
  /**
   * @param {?} enterCallback
   * @return {?}
   */
  Modal.prototype.toggle = function(enterCallback) {
    return this[this.isShown ? "hide" : "show"](enterCallback);
  };
  /**
   * @param {!HTMLElement} html
   * @return {undefined}
   */
  Modal.prototype.show = function(html) {
    var that = this;
    var event = $.Event("show.bs.modal", {
      relatedTarget : html
    });
    this.$element.trigger(event);
    if (!(this.isShown || event.isDefaultPrevented())) {
      /** @type {boolean} */
      this.isShown = true;
      this.escape();
      this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', $.proxy(this.hide, this));
      this.backdrop(function() {
        var d = $.support.transition && that.$element.hasClass("fade");
        if (!that.$element.parent().length) {
          that.$element.appendTo(document.body);
        }
        that.$element.show().scrollTop(0);
        if (d) {
          that.$element[0].offsetWidth;
        }
        that.$element.addClass("in").attr("aria-hidden", false);
        that.enforceFocus();
        var e = $.Event("shown.bs.modal", {
          relatedTarget : html
        });
        if (d) {
          that.$element.find(".modal-dialog").one($.support.transition.end, function() {
            that.$element.focus().trigger(e);
          }).emulateTransitionEnd(300);
        } else {
          that.$element.focus().trigger(e);
        }
      });
    }
  };
  /**
   * @param {!Object} e
   * @return {undefined}
   */
  Modal.prototype.hide = function(e) {
    if (e) {
      e.preventDefault();
    }
    e = $.Event("hide.bs.modal");
    this.$element.trigger(e);
    if (this.isShown && !e.isDefaultPrevented()) {
      /** @type {boolean} */
      this.isShown = false;
      this.escape();
      $(document).off("focusin.bs.modal");
      this.$element.removeClass("in").attr("aria-hidden", true).off("click.dismiss.bs.modal");
      if ($.support.transition && this.$element.hasClass("fade")) {
        this.$element.one($.support.transition.end, $.proxy(this.hideModal, this)).emulateTransitionEnd(300);
      } else {
        this.hideModal();
      }
    }
  };
  /**
   * @return {undefined}
   */
  Modal.prototype.enforceFocus = function() {
    $(document).off("focusin.bs.modal").on("focusin.bs.modal", $.proxy(function(options) {
      if (!(this.$element[0] === options.target || this.$element.has(options.target).length)) {
        this.$element.focus();
      }
    }, this));
  };
  /**
   * @return {undefined}
   */
  Modal.prototype.escape = function() {
    if (this.isShown && this.options.keyboard) {
      this.$element.on("keyup.dismiss.bs.modal", $.proxy(function(event) {
        if (27 == event.which) {
          this.hide();
        }
      }, this));
    } else {
      if (!this.isShown) {
        this.$element.off("keyup.dismiss.bs.modal");
      }
    }
  };
  /**
   * @return {undefined}
   */
  Modal.prototype.hideModal = function() {
    var that = this;
    this.$element.hide();
    this.backdrop(function() {
      that.removeBackdrop();
      that.$element.trigger("hidden.bs.modal");
    });
  };
  /**
   * @return {undefined}
   */
  Modal.prototype.removeBackdrop = function() {
    if (this.$backdrop) {
      this.$backdrop.remove();
    }
    /** @type {null} */
    this.$backdrop = null;
  };
  /**
   * @param {!Function} callback
   * @return {undefined}
   */
  Modal.prototype.backdrop = function(callback) {
    /** @type {string} */
    var animate = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate;
      if (this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />').appendTo(document.body), this.$element.on("click.dismiss.bs.modal", $.proxy(function(event) {
        if (event.target === event.currentTarget) {
          if ("static" == this.options.backdrop) {
            this.$element[0].focus.call(this.$element[0]);
          } else {
            this.hide.call(this);
          }
        }
      }, this)), doAnimate && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !callback) {
        return;
      }
      if (doAnimate) {
        this.$backdrop.one($.support.transition.end, callback).emulateTransitionEnd(150);
      } else {
        callback();
      }
    } else {
      if (!this.isShown && this.$backdrop) {
        this.$backdrop.removeClass("in");
        if ($.support.transition && this.$element.hasClass("fade")) {
          this.$backdrop.one($.support.transition.end, callback).emulateTransitionEnd(150);
        } else {
          callback();
        }
      } else {
        if (callback) {
          callback();
        }
      }
    }
  };
  var old = $.fn.modal;
  /**
   * @param {!Function} options
   * @param {undefined} value
   * @return {?}
   */
  $.fn.modal = function(options, value) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data("bs.modal");
      var _config = $.extend({}, Modal.DEFAULTS, $this.data(), "object" == typeof options && options);
      if (!data) {
        $this.data("bs.modal", data = new Modal(this, _config));
      }
      if ("string" == typeof options) {
        data[options](value);
      } else {
        if (_config.show) {
          data.show(value);
        }
      }
    });
  };
  /** @type {function(!Array, !Object): undefined} */
  $.fn.modal.Constructor = Modal;
  /**
   * @return {?}
   */
  $.fn.modal.noConflict = function() {
    return $.fn.modal = old, this;
  };
  $(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(event) {
    var $this = $(this);
    var href = $this.attr("href");
    var e = $($this.attr("data-target") || href && href.replace(/.*(?=#[^\s]+$)/, ""));
    var option = e.data("bs.modal") ? "toggle" : $.extend({
      remote : !/#/.test(href) && href
    }, e.data(), $this.data());
    if ($this.is("a")) {
      event.preventDefault();
    }
    e.modal(option, this).one("hide", function() {
      if ($this.is(":visible")) {
        $this.focus();
      }
    });
  });
  $(document).on("show.bs.modal", ".modal", function() {
    $(document.body).addClass("modal-open");
  }).on("hidden.bs.modal", ".modal", function() {
    $(document.body).removeClass("modal-open");
  });
}(jQuery), +function($) {
  /**
   * @param {!Array} type
   * @param {boolean} x
   * @return {undefined}
   */
  var Tooltip = function(type, x) {
    /** @type {null} */
    this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null;
    this.init("tooltip", type, x);
  };
  Tooltip.DEFAULTS = {
    animation : true,
    placement : "top",
    selector : false,
    template : '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger : "hover focus",
    title : "",
    delay : 0,
    html : false,
    container : false
  };
  /**
   * @param {!Object} name
   * @param {!Object} element
   * @param {boolean} options
   * @return {undefined}
   */
  Tooltip.prototype.init = function(name, element, options) {
    /** @type {boolean} */
    this.enabled = true;
    /** @type {!Object} */
    this.type = name;
    this.$element = $(element);
    this.options = this.getOptions(options);
    var sArrTypes = this.options.trigger.split(" ");
    var iTempIndex = sArrTypes.length;
    for (; iTempIndex--;) {
      var sType = sArrTypes[iTempIndex];
      if ("click" == sType) {
        this.$element.on("click." + this.type, this.options.selector, $.proxy(this.toggle, this));
      } else {
        if ("manual" != sType) {
          /** @type {string} */
          var eventIn = "hover" == sType ? "mouseenter" : "focusin";
          /** @type {string} */
          var eventOut = "hover" == sType ? "mouseleave" : "focusout";
          this.$element.on(eventIn + "." + this.type, this.options.selector, $.proxy(this.enter, this));
          this.$element.on(eventOut + "." + this.type, this.options.selector, $.proxy(this.leave, this));
        }
      }
    }
    if (this.options.selector) {
      this._options = $.extend({}, this.options, {
        trigger : "manual",
        selector : ""
      });
    } else {
      this.fixTitle();
    }
  };
  /**
   * @return {?}
   */
  Tooltip.prototype.getDefaults = function() {
    return Tooltip.DEFAULTS;
  };
  /**
   * @param {boolean} options
   * @return {?}
   */
  Tooltip.prototype.getOptions = function(options) {
    return options = $.extend({}, this.getDefaults(), this.$element.data(), options), options.delay && "number" == typeof options.delay && (options.delay = {
      show : options.delay,
      hide : options.delay
    }), options;
  };
  /**
   * @return {?}
   */
  Tooltip.prototype.getDelegateOptions = function() {
    var someStoreStorage = {};
    var defaults = this.getDefaults();
    return this._options && $.each(this._options, function(key, value) {
      if (defaults[key] != value) {
        someStoreStorage[key] = value;
      }
    }), someStoreStorage;
  };
  /**
   * @param {!Object} obj
   * @return {?}
   */
  Tooltip.prototype.enter = function(obj) {
    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
    return clearTimeout(self.timeout), self.hoverState = "in", self.options.delay && self.options.delay.show ? void(self.timeout = setTimeout(function() {
      if ("in" == self.hoverState) {
        self.show();
      }
    }, self.options.delay.show)) : self.show();
  };
  /**
   * @param {!Object} obj
   * @return {?}
   */
  Tooltip.prototype.leave = function(obj) {
    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
    return clearTimeout(self.timeout), self.hoverState = "out", self.options.delay && self.options.delay.hide ? void(self.timeout = setTimeout(function() {
      if ("out" == self.hoverState) {
        self.hide();
      }
    }, self.options.delay.hide)) : self.hide();
  };
  /**
   * @return {undefined}
   */
  Tooltip.prototype.show = function() {
    var event = $.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
      if (this.$element.trigger(event), event.isDefaultPrevented()) {
        return;
      }
      var oMultiSelect = this;
      var $tip = this.tip();
      this.setContent();
      if (this.options.animation) {
        $tip.addClass("fade");
      }
      var placement = "function" == typeof this.options.placement ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement;
      /** @type {!RegExp} */
      var autoToken = /\s?auto?\s?/i;
      /** @type {boolean} */
      var autoPlace = autoToken.test(placement);
      if (autoPlace) {
        placement = placement.replace(autoToken, "") || "top";
      }
      $tip.detach().css({
        top : 0,
        left : 0,
        display : "block"
      }).addClass(placement);
      if (this.options.container) {
        $tip.appendTo(this.options.container);
      } else {
        $tip.insertAfter(this.$element);
      }
      var pos = this.getPosition();
      var actualWidth = $tip[0].offsetWidth;
      var actualHeight = $tip[0].offsetHeight;
      if (autoPlace) {
        var $tooltipanchor = this.$element.parent();
        var orgPlacement = placement;
        /** @type {number} */
        var docScroll = document.documentElement.scrollTop || document.body.scrollTop;
        var parentWidth = "body" == this.options.container ? window.innerWidth : $tooltipanchor.outerWidth();
        var parentHeight = "body" == this.options.container ? window.innerHeight : $tooltipanchor.outerHeight();
        var parentLeft = "body" == this.options.container ? 0 : $tooltipanchor.offset().left;
        placement = "bottom" == placement && pos.top + pos.height + actualHeight - docScroll > parentHeight ? "top" : "top" == placement && pos.top - docScroll - actualHeight < 0 ? "bottom" : "right" == placement && pos.right + actualWidth > parentWidth ? "left" : "left" == placement && pos.left - actualWidth < parentLeft ? "right" : placement;
        $tip.removeClass(orgPlacement).addClass(placement);
      }
      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);
      this.applyPlacement(calculatedOffset, placement);
      /** @type {null} */
      this.hoverState = null;
      /**
       * @return {undefined}
       */
      var complete = function() {
        oMultiSelect.$element.trigger("shown.bs." + oMultiSelect.type);
      };
      if ($.support.transition && this.$tip.hasClass("fade")) {
        $tip.one($.support.transition.end, complete).emulateTransitionEnd(150);
      } else {
        complete();
      }
    }
  };
  /**
   * @param {!Object} offset
   * @param {string} placement
   * @return {undefined}
   */
  Tooltip.prototype.applyPlacement = function(offset, placement) {
    var d;
    var $tip = this.tip();
    var width = $tip[0].offsetWidth;
    var height = $tip[0].offsetHeight;
    /** @type {number} */
    var marginTop = parseInt($tip.css("margin-top"), 10);
    /** @type {number} */
    var marginLeft = parseInt($tip.css("margin-left"), 10);
    if (isNaN(marginTop)) {
      /** @type {number} */
      marginTop = 0;
    }
    if (isNaN(marginLeft)) {
      /** @type {number} */
      marginLeft = 0;
    }
    offset.top = offset.top + marginTop;
    offset.left = offset.left + marginLeft;
    $.offset.setOffset($tip[0], $.extend({
      using : function(props) {
        $tip.css({
          top : Math.round(props.top),
          left : Math.round(props.left)
        });
      }
    }, offset), 0);
    $tip.addClass("in");
    var actualWidth = $tip[0].offsetWidth;
    var actualHeight = $tip[0].offsetHeight;
    if ("top" == placement && actualHeight != height && (d = true, offset.top = offset.top + height - actualHeight), /bottom|top/.test(placement)) {
      /** @type {number} */
      var delta = 0;
      if (offset.left < 0) {
        /** @type {number} */
        delta = -2 * offset.left;
        /** @type {number} */
        offset.left = 0;
        $tip.offset(offset);
        actualWidth = $tip[0].offsetWidth;
        actualHeight = $tip[0].offsetHeight;
      }
      this.replaceArrow(delta - width + actualWidth, actualWidth, "left");
    } else {
      this.replaceArrow(actualHeight - height, actualHeight, "top");
    }
    if (d) {
      $tip.offset(offset);
    }
  };
  /**
   * @param {number} delta
   * @param {number} dimension
   * @param {!Object} position
   * @return {undefined}
   */
  Tooltip.prototype.replaceArrow = function(delta, dimension, position) {
    this.arrow().css(position, delta ? 50 * (1 - delta / dimension) + "%" : "");
  };
  /**
   * @return {undefined}
   */
  Tooltip.prototype.setContent = function() {
    var $tip = this.tip();
    var titleText = this.getTitle();
    $tip.find(".tooltip-inner")[this.options.html ? "html" : "text"](titleText);
    $tip.removeClass("fade in top bottom left right");
  };
  /**
   * @return {?}
   */
  Tooltip.prototype.hide = function() {
    /**
     * @return {undefined}
     */
    function complete() {
      if ("in" != self.hoverState) {
        $tip.detach();
      }
      self.$element.trigger("hidden.bs." + self.type);
    }
    var self = this;
    var $tip = this.tip();
    var event = $.Event("hide.bs." + this.type);
    return this.$element.trigger(event), event.isDefaultPrevented() ? void 0 : ($tip.removeClass("in"), $.support.transition && this.$tip.hasClass("fade") ? $tip.one($.support.transition.end, complete).emulateTransitionEnd(150) : complete(), this.hoverState = null, this);
  };
  /**
   * @return {undefined}
   */
  Tooltip.prototype.fixTitle = function() {
    var $e = this.$element;
    if ($e.attr("title") || "string" != typeof $e.attr("data-original-title")) {
      $e.attr("data-original-title", $e.attr("title") || "").attr("title", "");
    }
  };
  /**
   * @return {?}
   */
  Tooltip.prototype.hasContent = function() {
    return this.getTitle();
  };
  /**
   * @return {?}
   */
  Tooltip.prototype.getPosition = function() {
    var el = this.$element[0];
    return $.extend({}, "function" == typeof el.getBoundingClientRect ? el.getBoundingClientRect() : {
      width : el.offsetWidth,
      height : el.offsetHeight
    }, this.$element.offset());
  };
  /**
   * @param {string} position
   * @param {!Object} pos
   * @param {number} actualWidth
   * @param {number} actualHeight
   * @return {?}
   */
  Tooltip.prototype.getCalculatedOffset = function(position, pos, actualWidth, actualHeight) {
    return "bottom" == position ? {
      top : pos.top + pos.height,
      left : pos.left + pos.width / 2 - actualWidth / 2
    } : "top" == position ? {
      top : pos.top - actualHeight,
      left : pos.left + pos.width / 2 - actualWidth / 2
    } : "left" == position ? {
      top : pos.top + pos.height / 2 - actualHeight / 2,
      left : pos.left - actualWidth
    } : {
      top : pos.top + pos.height / 2 - actualHeight / 2,
      left : pos.left + pos.width
    };
  };
  /**
   * @return {?}
   */
  Tooltip.prototype.getTitle = function() {
    var a;
    var $e = this.$element;
    var o = this.options;
    return a = $e.attr("data-original-title") || ("function" == typeof o.title ? o.title.call($e[0]) : o.title);
  };
  /**
   * @return {?}
   */
  Tooltip.prototype.tip = function() {
    return this.$tip = this.$tip || $(this.options.template);
  };
  /**
   * @return {?}
   */
  Tooltip.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
  };
  /**
   * @return {undefined}
   */
  Tooltip.prototype.validate = function() {
    if (!this.$element[0].parentNode) {
      this.hide();
      /** @type {null} */
      this.$element = null;
      /** @type {null} */
      this.options = null;
    }
  };
  /**
   * @return {undefined}
   */
  Tooltip.prototype.enable = function() {
    /** @type {boolean} */
    this.enabled = true;
  };
  /**
   * @return {undefined}
   */
  Tooltip.prototype.disable = function() {
    /** @type {boolean} */
    this.enabled = false;
  };
  /**
   * @return {undefined}
   */
  Tooltip.prototype.toggleEnabled = function() {
    /** @type {boolean} */
    this.enabled = !this.enabled;
  };
  /**
   * @param {!Object} e
   * @return {undefined}
   */
  Tooltip.prototype.toggle = function(e) {
    var self = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
    if (self.tip().hasClass("in")) {
      self.leave(self);
    } else {
      self.enter(self);
    }
  };
  /**
   * @return {undefined}
   */
  Tooltip.prototype.destroy = function() {
    clearTimeout(this.timeout);
    this.hide().$element.off("." + this.type).removeData("bs." + this.type);
  };
  var old = $.fn.tooltip;
  /**
   * @param {string} opts
   * @return {?}
   */
  $.fn.tooltip = function(opts) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data("bs.tooltip");
      var options = "object" == typeof opts && opts;
      if (data || "destroy" != opts) {
        if (!data) {
          $this.data("bs.tooltip", data = new Tooltip(this, options));
        }
        if ("string" == typeof opts) {
          data[opts]();
        }
      }
    });
  };
  /** @type {function(!Array, boolean): undefined} */
  $.fn.tooltip.Constructor = Tooltip;
  /**
   * @return {?}
   */
  $.fn.tooltip.noConflict = function() {
    return $.fn.tooltip = old, this;
  };
}(jQuery), +function($) {
  /**
   * @param {!Array} element
   * @param {boolean} options
   * @return {undefined}
   */
  var Popover = function(element, options) {
    this.init("popover", element, options);
  };
  if (!$.fn.tooltip) {
    throw new Error("Popover requires tooltip.js");
  }
  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement : "right",
    trigger : "click",
    content : "",
    template : '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  });
  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype);
  /** @type {function(!Array, boolean): undefined} */
  Popover.prototype.constructor = Popover;
  /**
   * @return {?}
   */
  Popover.prototype.getDefaults = function() {
    return Popover.DEFAULTS;
  };
  /**
   * @return {undefined}
   */
  Popover.prototype.setContent = function() {
    var $tip = this.tip();
    var titleText = this.getTitle();
    var c = this.getContent();
    $tip.find(".popover-title")[this.options.html ? "html" : "text"](titleText);
    $tip.find(".popover-content")[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c);
    $tip.removeClass("fade top bottom left right in");
    if (!$tip.find(".popover-title").html()) {
      $tip.find(".popover-title").hide();
    }
  };
  /**
   * @return {?}
   */
  Popover.prototype.hasContent = function() {
    return this.getTitle() || this.getContent();
  };
  /**
   * @return {?}
   */
  Popover.prototype.getContent = function() {
    var $e = this.$element;
    var o = this.options;
    return $e.attr("data-content") || ("function" == typeof o.content ? o.content.call($e[0]) : o.content);
  };
  /**
   * @return {?}
   */
  Popover.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".arrow");
  };
  /**
   * @return {?}
   */
  Popover.prototype.tip = function() {
    return this.$tip || (this.$tip = $(this.options.template)), this.$tip;
  };
  var old = $.fn.popover;
  /**
   * @param {string} c
   * @return {?}
   */
  $.fn.popover = function(c) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data("bs.popover");
      var options = "object" == typeof c && c;
      if (data || "destroy" != c) {
        if (!data) {
          $this.data("bs.popover", data = new Popover(this, options));
        }
        if ("string" == typeof c) {
          data[c]();
        }
      }
    });
  };
  /** @type {function(!Array, boolean): undefined} */
  $.fn.popover.Constructor = Popover;
  /**
   * @return {?}
   */
  $.fn.popover.noConflict = function() {
    return $.fn.popover = old, this;
  };
}(jQuery), +function($) {
  /**
   * @param {!Object} selector
   * @param {!Object} options
   * @return {undefined}
   */
  function ScrollSpy(selector, options) {
    var href;
    var process = $.proxy(this.process, this);
    this.$element = $($(selector).is("body") ? window : selector);
    this.$body = $("body");
    this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", process);
    this.options = $.extend({}, ScrollSpy.DEFAULTS, options);
    /** @type {string} */
    this.selector = (this.options.target || (href = $(selector).attr("href")) && href.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a";
    this.offsets = $([]);
    this.targets = $([]);
    /** @type {null} */
    this.activeTarget = null;
    this.refresh();
    this.process();
  }
  ScrollSpy.DEFAULTS = {
    offset : 10
  };
  /**
   * @return {undefined}
   */
  ScrollSpy.prototype.refresh = function() {
    /** @type {string} */
    var offsetMethod = this.$element[0] == window ? "offset" : "position";
    this.offsets = $([]);
    this.targets = $([]);
    {
      var self = this;
      this.$body.find(this.selector).map(function() {
        var d = $(this);
        var href = d.data("target") || d.attr("href");
        var $href = /^#./.test(href) && $(href);
        return $href && $href.length && $href.is(":visible") && [[$href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href]] || null;
      }).sort(function(a, b) {
        return a[0] - b[0];
      }).each(function() {
        self.offsets.push(this[0]);
        self.targets.push(this[1]);
      });
    }
  };
  /**
   * @return {?}
   */
  ScrollSpy.prototype.process = function() {
    var i;
    var scrollTop = this.$scrollElement.scrollTop() + this.options.offset;
    var scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight;
    /** @type {number} */
    var maxScroll = scrollHeight - this.$scrollElement.height();
    var offsets = this.offsets;
    var targets = this.targets;
    var activeTarget = this.activeTarget;
    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets.last()[0]) && this.activate(i);
    }
    if (activeTarget && scrollTop <= offsets[0]) {
      return activeTarget != (i = targets[0]) && this.activate(i);
    }
    i = offsets.length;
    for (; i--;) {
      if (activeTarget != targets[i] && scrollTop >= offsets[i] && (!offsets[i + 1] || scrollTop <= offsets[i + 1])) {
        this.activate(targets[i]);
      }
    }
  };
  /**
   * @param {string} target
   * @return {undefined}
   */
  ScrollSpy.prototype.activate = function(target) {
    /** @type {string} */
    this.activeTarget = target;
    $(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
    /** @type {string} */
    var columnContainer = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]';
    var active = $(columnContainer).parents("li").addClass("active");
    if (active.parent(".dropdown-menu").length) {
      active = active.closest("li.dropdown").addClass("active");
    }
    active.trigger("activate.bs.scrollspy");
  };
  var old = $.fn.scrollspy;
  /**
   * @param {!Function} options
   * @return {?}
   */
  $.fn.scrollspy = function(options) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data("bs.scrollspy");
      var _config = "object" == typeof options && options;
      if (!data) {
        $this.data("bs.scrollspy", data = new ScrollSpy(this, _config));
      }
      if ("string" == typeof options) {
        data[options]();
      }
    });
  };
  /** @type {function(!Object, !Object): undefined} */
  $.fn.scrollspy.Constructor = ScrollSpy;
  /**
   * @return {?}
   */
  $.fn.scrollspy.noConflict = function() {
    return $.fn.scrollspy = old, this;
  };
  $(window).on("load", function() {
    $('[data-spy="scroll"]').each(function() {
      var $spy = $(this);
      $spy.scrollspy($spy.data());
    });
  });
}(jQuery), +function($) {
  /**
   * @param {!Array} name
   * @return {undefined}
   */
  var Tab = function(name) {
    this.element = $(name);
  };
  /**
   * @return {undefined}
   */
  Tab.prototype.show = function() {
    var $this = this.element;
    var result = $this.closest("ul:not(.dropdown-menu)");
    var s = $this.data("target");
    if (s || (s = $this.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, "")), !$this.parent("li").hasClass("active")) {
      var previous = result.find(".active:last a")[0];
      var event = $.Event("show.bs.tab", {
        relatedTarget : previous
      });
      if ($this.trigger(event), !event.isDefaultPrevented()) {
        var i = $(s);
        this.activate($this.parent("li"), result);
        this.activate(i, i.parent(), function() {
          $this.trigger({
            type : "shown.bs.tab",
            relatedTarget : previous
          });
        });
      }
    }
  };
  /**
   * @param {!Object} element
   * @param {!Object} size
   * @param {(!Function|string)} callback
   * @return {undefined}
   */
  Tab.prototype.activate = function(element, size, callback) {
    /**
     * @return {undefined}
     */
    function next() {
      $active.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");
      element.addClass("active");
      if (g) {
        element[0].offsetWidth;
        element.addClass("in");
      } else {
        element.removeClass("fade");
      }
      if (element.parent(".dropdown-menu")) {
        element.closest("li.dropdown").addClass("active");
      }
      if (callback) {
        callback();
      }
    }
    var $active = size.find("> .active");
    var g = callback && $.support.transition && $active.hasClass("fade");
    if (g) {
      $active.one($.support.transition.end, next).emulateTransitionEnd(150);
    } else {
      next();
    }
    $active.removeClass("in");
  };
  var old = $.fn.tab;
  /**
   * @param {string} id
   * @return {?}
   */
  $.fn.tab = function(id) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data("bs.tab");
      if (!data) {
        $this.data("bs.tab", data = new Tab(this));
      }
      if ("string" == typeof id) {
        data[id]();
      }
    });
  };
  /** @type {function(!Array): undefined} */
  $.fn.tab.Constructor = Tab;
  /**
   * @return {?}
   */
  $.fn.tab.noConflict = function() {
    return $.fn.tab = old, this;
  };
  $(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(event) {
    event.preventDefault();
    $(this).tab("show");
  });
}(jQuery), +function($) {
  /**
   * @param {!Array} element
   * @param {!Object} options
   * @return {undefined}
   */
  var Affix = function(element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options);
    this.$window = $(window).on("scroll.bs.affix.data-api", $.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", $.proxy(this.checkPositionWithEventLoop, this));
    this.$element = $(element);
    /** @type {null} */
    this.affixed = this.unpin = this.pinnedOffset = null;
    this.checkPosition();
  };
  /** @type {string} */
  Affix.RESET = "affix affix-top affix-bottom";
  Affix.DEFAULTS = {
    offset : 0
  };
  /**
   * @return {?}
   */
  Affix.prototype.getPinnedOffset = function() {
    if (this.pinnedOffset) {
      return this.pinnedOffset;
    }
    this.$element.removeClass(Affix.RESET).addClass("affix");
    var scrollTop = this.$window.scrollTop();
    var position = this.$element.offset();
    return this.pinnedOffset = position.top - scrollTop;
  };
  /**
   * @return {undefined}
   */
  Affix.prototype.checkPositionWithEventLoop = function() {
    setTimeout($.proxy(this.checkPosition, this), 1);
  };
  /**
   * @return {undefined}
   */
  Affix.prototype.checkPosition = function() {
    if (this.$element.is(":visible")) {
      var time1 = $(document).height();
      var scrollTop = this.$window.scrollTop();
      var position = this.$element.offset();
      var b = this.options.offset;
      var h = b.top;
      var s = b.bottom;
      if ("top" == this.affixed) {
        position.top += scrollTop;
      }
      if ("object" != typeof b) {
        s = h = b;
      }
      if ("function" == typeof h) {
        h = b.top(this.$element);
      }
      if ("function" == typeof s) {
        s = b.bottom(this.$element);
      }
      /** @type {(boolean|string)} */
      var affix = null != this.unpin && scrollTop + this.unpin <= position.top ? false : null != s && position.top + this.$element.height() >= time1 - s ? "bottom" : null != h && h >= scrollTop ? "top" : false;
      if (this.affixed !== affix) {
        if (this.unpin) {
          this.$element.css("top", "");
        }
        /** @type {string} */
        var affixType = "affix" + (affix ? "-" + affix : "");
        var event = $.Event(affixType + ".bs.affix");
        this.$element.trigger(event);
        if (!event.isDefaultPrevented()) {
          /** @type {(boolean|string)} */
          this.affixed = affix;
          this.unpin = "bottom" == affix ? this.getPinnedOffset() : null;
          this.$element.removeClass(Affix.RESET).addClass(affixType).trigger($.Event(affixType.replace("affix", "affixed")));
          if ("bottom" == affix) {
            this.$element.offset({
              top : time1 - s - this.$element.height()
            });
          }
        }
      }
    }
  };
  var old = $.fn.affix;
  /**
   * @param {!Function} value
   * @return {?}
   */
  $.fn.affix = function(value) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data("bs.affix");
      var options = "object" == typeof value && value;
      if (!data) {
        $this.data("bs.affix", data = new Affix(this, options));
      }
      if ("string" == typeof value) {
        data[value]();
      }
    });
  };
  /** @type {function(!Array, !Object): undefined} */
  $.fn.affix.Constructor = Affix;
  /**
   * @return {?}
   */
  $.fn.affix.noConflict = function() {
    return $.fn.affix = old, this;
  };
  $(window).on("load", function() {
    $('[data-spy="affix"]').each(function() {
      var $spy = $(this);
      var data = $spy.data();
      data.offset = data.offset || {};
      if (data.offsetBottom) {
        data.offset.bottom = data.offsetBottom;
      }
      if (data.offsetTop) {
        data.offset.top = data.offsetTop;
      }
      $spy.affix(data);
    });
  });
}(jQuery), !function() {
  /**
   * @param {?} url
   * @param {?} title
   * @return {?}
   */
  function a(url, title) {
    return title > url ? -1 : url > title ? 1 : url >= title ? 0 : 0 / 0;
  }
  /**
   * @param {?} a
   * @return {?}
   */
  function filter(a) {
    return null != a && !isNaN(a);
  }
  /**
   * @param {!Function} compare
   * @return {?}
   */
  function bisector(compare) {
    return {
      left : function(data, info, t, i) {
        if (arguments.length < 3) {
          /** @type {number} */
          t = 0;
        }
        if (arguments.length < 4) {
          i = data.length;
        }
        for (; i > t;) {
          /** @type {number} */
          var l = t + i >>> 1;
          if (compare(data[l], info) < 0) {
            /** @type {number} */
            t = l + 1;
          } else {
            /** @type {number} */
            i = l;
          }
        }
        return t;
      },
      right : function(data, parent, i, size) {
        if (arguments.length < 3) {
          /** @type {number} */
          i = 0;
        }
        if (arguments.length < 4) {
          size = data.length;
        }
        for (; size > i;) {
          /** @type {number} */
          var x = i + size >>> 1;
          if (compare(data[x], parent) > 0) {
            /** @type {number} */
            size = x;
          } else {
            /** @type {number} */
            i = x + 1;
          }
        }
        return i;
      }
    };
  }
  /**
   * @param {!NodeList} perpendicular
   * @return {?}
   */
  function size(perpendicular) {
    return perpendicular.length;
  }
  /**
   * @param {number} n
   * @return {?}
   */
  function sqrt(n) {
    /** @type {number} */
    var x = 1;
    for (; n * x % 1;) {
      /** @type {number} */
      x = x * 10;
    }
    return x;
  }
  /**
   * @param {!Function} ctor
   * @param {!Object} properties
   * @return {undefined}
   */
  function d3_class(ctor, properties) {
    try {
      var property;
      for (property in properties) {
        Object.defineProperty(ctor.prototype, property, {
          value : properties[property],
          enumerable : false
        });
      }
    } catch (d) {
      /** @type {!Object} */
      ctor.prototype = properties;
    }
  }
  /**
   * @return {undefined}
   */
  function d3_Map() {
  }
  /**
   * @param {!Object} name
   * @return {?}
   */
  function hasMux(name) {
    return char + name in this;
  }
  /**
   * @param {string} str
   * @return {?}
   */
  function toRemove(str) {
    return str = char + str, str in this && delete this[str];
  }
  /**
   * @return {?}
   */
  function keys() {
    /** @type {!Array} */
    var new_broadcasts = [];
    return this.forEach(function(b) {
      new_broadcasts.push(b);
    }), new_broadcasts;
  }
  /**
   * @return {?}
   */
  function slugify() {
    /** @type {number} */
    var str2 = 0;
    var stripSlashes;
    for (stripSlashes in this) {
      if (stripSlashes.charCodeAt(0) === gh) {
        ++str2;
      }
    }
    return str2;
  }
  /**
   * @return {?}
   */
  function d3_map_empty() {
    var stripSlashes;
    for (stripSlashes in this) {
      if (stripSlashes.charCodeAt(0) === gh) {
        return false;
      }
    }
    return true;
  }
  /**
   * @return {undefined}
   */
  function d3_Set() {
  }
  /**
   * @param {!Function} a
   * @param {string} b
   * @param {!Function} c
   * @return {?}
   */
  function bind(a, b, c) {
    return function() {
      var o = c.apply(b, arguments);
      return o === b ? a : o;
    };
  }
  /**
   * @param {!Object} object
   * @param {string} name
   * @return {?}
   */
  function d3_vendorSymbol(object, name) {
    if (name in object) {
      return name;
    }
    name = name.charAt(0).toUpperCase() + name.substring(1);
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var n = d3_vendorPrefixes.length;
    for (; n > i; ++i) {
      var prefixName = d3_vendorPrefixes[i] + name;
      if (prefixName in object) {
        return prefixName;
      }
    }
  }
  /**
   * @return {undefined}
   */
  function d3_noop() {
  }
  /**
   * @return {undefined}
   */
  function d3_dispatch() {
  }
  /**
   * @param {?} dispatch
   * @return {?}
   */
  function d3_dispatch_event(dispatch) {
    /**
     * @return {?}
     */
    function event() {
      var oldOn;
      var plugins = array;
      /** @type {number} */
      var i = -1;
      var length = plugins.length;
      for (; ++i < length;) {
        if (oldOn = plugins[i].on) {
          oldOn.apply(this, arguments);
        }
      }
      return dispatch;
    }
    /** @type {!Array} */
    var array = [];
    var listenerByName = new d3_Map;
    return event.on = function(type, name) {
      var index;
      var items = listenerByName.get(type);
      return arguments.length < 2 ? items && items.on : (items && (items.on = null, array = array.slice(0, index = array.indexOf(items)).concat(array.slice(index + 1)), listenerByName.remove(type)), name && array.push(listenerByName.set(type, {
        on : name
      })), dispatch);
    }, event;
  }
  /**
   * @return {undefined}
   */
  function done() {
    d3.event.preventDefault();
  }
  /**
   * @return {?}
   */
  function sourceEvent() {
    var s;
    /** @type {null} */
    var e = d3.event;
    for (; s = e.sourceEvent;) {
      e = s;
    }
    return e;
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function d3_eventDispatch(name) {
    var dispatch = new d3_dispatch;
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var length = arguments.length;
    for (; ++i < length;) {
      dispatch[arguments[i]] = d3_dispatch_event(dispatch);
    }
    return dispatch.of = function(node, fn) {
      return function(evt) {
        try {
          /** @type {null} */
          var e = evt.sourceEvent = d3.event;
          /** @type {string} */
          evt.target = name;
          /** @type {!Object} */
          d3.event = evt;
          dispatch[evt.type].apply(node, fn);
        } finally {
          /** @type {null} */
          d3.event = e;
        }
      };
    }, dispatch;
  }
  /**
   * @param {?} groups
   * @return {?}
   */
  function d3_selection(groups) {
    return equal(groups, d3_selectionPrototype), groups;
  }
  /**
   * @param {!Object} opts
   * @return {?}
   */
  function checkData(opts) {
    return "function" == typeof opts ? opts : function() {
      return has(opts, this);
    };
  }
  /**
   * @param {!Function} selector
   * @return {?}
   */
  function d3_selection_selectorAll(selector) {
    return "function" == typeof selector ? selector : function() {
      return d3_selectAll(selector, this);
    };
  }
  /**
   * @param {!Object} name
   * @param {!Function} value
   * @return {?}
   */
  function d3_selection_attr(name, value) {
    /**
     * @return {undefined}
     */
    function attrNull() {
      this.removeAttribute(name);
    }
    /**
     * @return {undefined}
     */
    function attrNullNS() {
      this.removeAttributeNS(name.space, name.local);
    }
    /**
     * @return {undefined}
     */
    function attrConstant() {
      this.setAttribute(name, value);
    }
    /**
     * @return {undefined}
     */
    function attrConstantNS() {
      this.setAttributeNS(name.space, name.local, value);
    }
    /**
     * @return {undefined}
     */
    function attrFunction() {
      var newValue = value.apply(this, arguments);
      if (null == newValue) {
        this.removeAttribute(name);
      } else {
        this.setAttribute(name, newValue);
      }
    }
    /**
     * @return {undefined}
     */
    function attrFunctionNS() {
      var x = value.apply(this, arguments);
      if (null == x) {
        this.removeAttributeNS(name.space, name.local);
      } else {
        this.setAttributeNS(name.space, name.local, x);
      }
    }
    return name = d3.ns.qualify(name), null == value ? name.local ? attrNullNS : attrNull : "function" == typeof value ? name.local ? attrFunctionNS : attrFunction : name.local ? attrConstantNS : attrConstant;
  }
  /**
   * @param {string} s
   * @return {?}
   */
  function d3_collapse(s) {
    return s.trim().replace(/\s+/g, " ");
  }
  /**
   * @param {!Object} name
   * @return {?}
   */
  function d3_selection_classedRe(name) {
    return new RegExp("(?:^|\\s+)" + d3.requote(name) + "(?:\\s+|$)", "g");
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function d3_selection_classes(name) {
    return (name + "").trim().split(/^|\s+/);
  }
  /**
   * @param {string} name
   * @param {(!Function|string)} value
   * @return {?}
   */
  function d3_selection_classed(name, value) {
    /**
     * @return {undefined}
     */
    function arg() {
      /** @type {number} */
      var i = -1;
      for (; ++i < length;) {
        name[i](this, value);
      }
    }
    /**
     * @return {undefined}
     */
    function classedFunction() {
      /** @type {number} */
      var i = -1;
      var x = value.apply(this, arguments);
      for (; ++i < length;) {
        name[i](this, x);
      }
    }
    name = d3_selection_classes(name).map(d3_selection_classedName);
    var length = name.length;
    return "function" == typeof value ? classedFunction : arg;
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function d3_selection_classedName(name) {
    var re = d3_selection_classedRe(name);
    return function(tag, fn) {
      if (classes = tag.classList) {
        return fn ? classes.add(name) : classes.remove(name);
      }
      var classes = tag.getAttribute("class") || "";
      if (fn) {
        /** @type {number} */
        re.lastIndex = 0;
        if (!re.test(classes)) {
          tag.setAttribute("class", d3_collapse(classes + " " + name));
        }
      } else {
        tag.setAttribute("class", d3_collapse(classes.replace(re, " ")));
      }
    };
  }
  /**
   * @param {!Object} name
   * @param {!Function} value
   * @param {string} priority
   * @return {?}
   */
  function d3_selection_style(name, value, priority) {
    /**
     * @return {undefined}
     */
    function styleNull() {
      this.style.removeProperty(name);
    }
    /**
     * @return {undefined}
     */
    function styleConstant() {
      this.style.setProperty(name, value, priority);
    }
    /**
     * @return {undefined}
     */
    function styleFunction() {
      var x = value.apply(this, arguments);
      if (null == x) {
        this.style.removeProperty(name);
      } else {
        this.style.setProperty(name, x, priority);
      }
    }
    return null == value ? styleNull : "function" == typeof value ? styleFunction : styleConstant;
  }
  /**
   * @param {string} value
   * @param {!Object} i
   * @return {?}
   */
  function test(value, i) {
    /**
     * @return {undefined}
     */
    function c() {
      delete this[value];
    }
    /**
     * @return {undefined}
     */
    function noop() {
      /** @type {!Object} */
      this[value] = i;
    }
    /**
     * @return {undefined}
     */
    function fn() {
      var key = i.apply(this, arguments);
      if (null == key) {
        delete this[value];
      } else {
        this[value] = key;
      }
    }
    return null == i ? c : "function" == typeof i ? fn : noop;
  }
  /**
   * @param {!Object} name
   * @return {?}
   */
  function parse(name) {
    return "function" == typeof name ? name : (name = d3.ns.qualify(name)).local ? function() {
      return this.ownerDocument.createElementNS(name.space, name.local);
    } : function() {
      return this.ownerDocument.createElementNS(this.namespaceURI, name);
    };
  }
  /**
   * @param {number} data
   * @return {?}
   */
  function x(data) {
    return {
      __data__ : data
    };
  }
  /**
   * @param {!Object} s
   * @return {?}
   */
  function co(s) {
    return function() {
      return d3_selectMatches(this, s);
    };
  }
  /**
   * @param {(Object|string)} compare
   * @return {?}
   */
  function query(compare) {
    return arguments.length || (compare = a), function(a, b) {
      return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    };
  }
  /**
   * @param {string} data
   * @param {!Function} x
   * @return {?}
   */
  function emit(data, x) {
    /** @type {number} */
    var result = 0;
    var amount = data.length;
    for (; amount > result; result++) {
      var y;
      var array = data[result];
      /** @type {number} */
      var j = 0;
      var length = array.length;
      for (; length > j; j++) {
        if (y = array[j]) {
          x(y, j, result);
        }
      }
    }
    return data;
  }
  /**
   * @param {?} selection
   * @return {?}
   */
  function d3_selection_enter(selection) {
    return equal(selection, d3_selection_enterPrototype), selection;
  }
  /**
   * @param {!NodeList} environment
   * @return {?}
   */
  function wrap(environment) {
    var p;
    var IS_IDLE;
    return function(canCreateDiscussions, x, i) {
      var ret;
      var query = environment[i].update;
      var queryLen = query.length;
      if (i != IS_IDLE) {
        /** @type {number} */
        IS_IDLE = i;
        /** @type {number} */
        p = 0;
      }
      if (x >= p) {
        p = x + 1;
      }
      for (; !(ret = query[p]) && ++p < queryLen;) {
      }
      return ret;
    };
  }
  /**
   * @return {undefined}
   */
  function stop() {
    var streamToStop = this.__transition__;
    if (streamToStop) {
      ++streamToStop.active;
    }
  }
  /**
   * @param {?} type
   * @param {string} listener
   * @param {!Object} capture
   * @return {?}
   */
  function d3_selection_on(type, listener, capture) {
    /**
     * @return {undefined}
     */
    function onRemove() {
      var l = this[name];
      if (l) {
        this.removeEventListener(type, l, l.$);
        delete this[name];
      }
    }
    /**
     * @return {undefined}
     */
    function onAdd() {
      var l = wrap(listener, d3_array(arguments));
      onRemove.call(this);
      this.addEventListener(type, this[name] = l, l.$ = capture);
      /** @type {string} */
      l._ = listener;
    }
    /**
     * @return {undefined}
     */
    function removeAll() {
      var toBind;
      /** @type {!RegExp} */
      var embedReg = new RegExp("^__on([^.]+)" + d3.requote(type) + "$");
      var id;
      for (id in this) {
        if (toBind = id.match(embedReg)) {
          var wrapper = this[id];
          this.removeEventListener(toBind[1], wrapper, wrapper.$);
          delete this[id];
        }
      }
    }
    /** @type {string} */
    var name = "__on" + type;
    var i = type.indexOf(".");
    /** @type {function((!Function|string), !Object): ?} */
    var wrap = d3_selection_onListener;
    if (i > 0) {
      type = type.substring(0, i);
    }
    var previewOnFunction = timeOverlay.get(type);
    return previewOnFunction && (type = previewOnFunction, wrap = d3_selection_onFilter), i ? listener ? onAdd : onRemove : listener ? d3_noop : removeAll;
  }
  /**
   * @param {(!Function|string)} listener
   * @param {!Object} status
   * @return {?}
   */
  function d3_selection_onListener(listener, status) {
    return function(e0) {
      var e = d3.event;
      /** @type {!Object} */
      d3.event = e0;
      status[0] = this.__data__;
      try {
        listener.apply(this, status);
      } finally {
        d3.event = e;
      }
    };
  }
  /**
   * @param {string} listener
   * @param {!Object} argumentz
   * @return {?}
   */
  function d3_selection_onFilter(listener, argumentz) {
    var l = d3_selection_onListener(listener, argumentz);
    return function(event) {
      var a = this;
      var parent = event.relatedTarget;
      if (!(parent && (parent === a || 8 & parent.compareDocumentPosition(a)))) {
        l.call(a, event);
      }
    };
  }
  /**
   * @return {?}
   */
  function d3_event_dragSuppress() {
    /** @type {string} */
    var name = ".dragsuppress-" + ++uh;
    /** @type {string} */
    var click = "click" + name;
    var tracker = d3.select(root).on("touchmove" + name, done).on("dragstart" + name, done).on("selectstart" + name, done);
    if (prop) {
      /** @type {!CSSStyleDeclaration} */
      var style = node.style;
      /** @type {string} */
      var val = style[prop];
      /** @type {string} */
      style[prop] = "none";
    }
    return function(canCreateDiscussions) {
      /**
       * @return {undefined}
       */
      function off() {
        tracker.on(click, null);
      }
      tracker.on(name, null);
      if (prop) {
        /** @type {string} */
        style[prop] = val;
      }
      if (canCreateDiscussions) {
        tracker.on(click, function() {
          done();
          off();
        }, true);
        setTimeout(off, 0);
      }
    };
  }
  /**
   * @param {!Element} container
   * @param {!Object} e
   * @return {?}
   */
  function d3_mousePoint(container, e) {
    if (e.changedTouches) {
      e = e.changedTouches[0];
    }
    var svg = container.ownerSVGElement || container;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      if (0 > vh && (root.scrollX || root.scrollY)) {
        svg = d3.select("body").append("svg").style({
          position : "absolute",
          top : 0,
          left : 0,
          margin : 0,
          padding : 0,
          border : "none"
        }, "important");
        var ctm = svg[0][0].getScreenCTM();
        /** @type {boolean} */
        vh = !(ctm.f || ctm.e);
        svg.remove();
      }
      return vh ? (point.x = e.pageX, point.y = e.pageY) : (point.x = e.clientX, point.y = e.clientY), point = point.matrixTransform(container.getScreenCTM().inverse()), [point.x, point.y];
    }
    var offset = container.getBoundingClientRect();
    return [e.clientX - offset.left - container.clientLeft, e.clientY - offset.top - container.clientTop];
  }
  /**
   * @return {?}
   */
  function d3_behavior_dragTouchId() {
    return d3.event.changedTouches[0].identifier;
  }
  /**
   * @return {?}
   */
  function d3_behavior_dragTouchSubject() {
    return d3.event.target;
  }
  /**
   * @return {?}
   */
  function d3_behavior_dragMouseSubject() {
    return root;
  }
  /**
   * @param {number} b
   * @return {?}
   */
  function range(b) {
    return b > 0 ? 1 : 0 > b ? -1 : 0;
  }
  /**
   * @param {!Object} str2
   * @param {!Object} str3
   * @param {!Object} str4
   * @return {?}
   */
  function base64ToNum(str2, str3, str4) {
    return (str3[0] - str2[0]) * (str4[1] - str2[1]) - (str3[1] - str2[1]) * (str4[0] - str2[0]);
  }
  /**
   * @param {number} num
   * @return {?}
   */
  function acos(num) {
    return num > 1 ? 0 : -1 > num ? val : Math.acos(num);
  }
  /**
   * @param {number} x
   * @return {?}
   */
  function sin(x) {
    return x > 1 ? halfPi : -1 > x ? -halfPi : Math.asin(x);
  }
  /**
   * @param {number} n
   * @return {?}
   */
  function pow(n) {
    return ((n = Math.exp(n)) - 1 / n) / 2;
  }
  /**
   * @param {number} n
   * @return {?}
   */
  function require(n) {
    return ((n = Math.exp(n)) + 1 / n) / 2;
  }
  /**
   * @param {number} xsqr
   * @return {?}
   */
  function ChiSq(xsqr) {
    return ((xsqr = Math.exp(2 * xsqr)) - 1) / (xsqr + 1);
  }
  /**
   * @param {number} y
   * @return {?}
   */
  function pos(y) {
    return (y = Math.sin(y / 2)) * y;
  }
  /**
   * @return {undefined}
   */
  function d3_color() {
  }
  /**
   * @param {!Object} h
   * @param {string} s
   * @param {!Function} l
   * @return {?}
   */
  function d3_hsl(h, s, l) {
    return this instanceof d3_hsl ? (this.h = +h, this.s = +s, void(this.l = +l)) : arguments.length < 2 ? h instanceof d3_hsl ? new d3_hsl(h.h, h.s, h.l) : d3_rgb_parse("" + h, d3_rgb_hsl, d3_hsl) : new d3_hsl(h, s, l);
  }
  /**
   * @param {number} h
   * @param {number} s
   * @param {number} l
   * @return {?}
   */
  function d3_hsl_rgb(h, s, l) {
    /**
     * @param {number} t
     * @return {?}
     */
    function v(t) {
      return t > 360 ? t = t - 360 : 0 > t && (t = t + 360), 60 > t ? p + (q - p) * t / 60 : 180 > t ? q : 240 > t ? p + (q - p) * (240 - t) / 60 : p;
    }
    /**
     * @param {number} h
     * @return {?}
     */
    function vv(h) {
      return Math.round(255 * v(h));
    }
    var p;
    var q;
    return h = isNaN(h) ? 0 : (h = h % 360) < 0 ? h + 360 : h, s = isNaN(s) ? 0 : 0 > s ? 0 : s > 1 ? 1 : s, l = 0 > l ? 0 : l > 1 ? 1 : l, q = .5 >= l ? l * (1 + s) : l + s - l * s, p = 2 * l - q, new d3_rgb(vv(h + 120), vv(h), vv(h - 120));
  }
  /**
   * @param {!Object} value
   * @param {string} name
   * @param {!Function} size
   * @return {?}
   */
  function Image(value, name, size) {
    return this instanceof Image ? (this.h = +value, this.c = +name, void(this.l = +size)) : arguments.length < 2 ? value instanceof Image ? new Image(value.h, value.c, value.l) : value instanceof Color ? cb(value.l, value.a, value.b) : cb((value = rgbToHex((value = d3.rgb(value)).r, value.g, value.b)).l, value.a, value.b) : new Image(value, name, size);
  }
  /**
   * @param {number} r
   * @param {number} s
   * @param {(Object|number)} color
   * @return {?}
   */
  function rgb(r, s, color) {
    return isNaN(r) && (r = 0), isNaN(s) && (s = 0), new Color(color, Math.cos(r = r * factor) * s, Math.sin(r) * s);
  }
  /**
   * @param {!Object} color
   * @param {!Function} model
   * @param {number} c
   * @return {?}
   */
  function Color(color, model, c) {
    return this instanceof Color ? (this.l = +color, this.a = +model, void(this.b = +c)) : arguments.length < 2 ? color instanceof Color ? new Color(color.l, color.a, color.b) : color instanceof Image ? rgb(color.l, color.c, color.h) : rgbToHex((color = d3_rgb(color)).r, color.g, color.b) : new Color(color, model, c);
  }
  /**
   * @param {number} a
   * @param {number} b
   * @param {number} threshold
   * @return {?}
   */
  function clamp(a, b, threshold) {
    /** @type {number} */
    var j = (a + 16) / 116;
    /** @type {number} */
    var i = j + b / 500;
    /** @type {number} */
    var dy = j - threshold / 200;
    return i = parseFloat(i) * zoom, j = parseFloat(j) * dim, dy = parseFloat(dy) * w, new d3_rgb(vv(3.2404542 * i - 1.5371385 * j - .4985314 * dy), vv(-.969266 * i + 1.8760108 * j + .041556 * dy), vv(.0556434 * i - .2040259 * j + 1.0572252 * dy));
  }
  /**
   * @param {number} y
   * @param {?} c
   * @param {?} d
   * @return {?}
   */
  function cb(y, c, d) {
    return y > 0 ? new Image(Math.atan2(d, c) * scale, Math.sqrt(c * c + d * d), y) : new Image(0 / 0, 0 / 0, y);
  }
  /**
   * @param {number} x
   * @return {?}
   */
  function parseFloat(x) {
    return x > .206893034 ? x * x * x : (x - 4 / 29) / 7.787037;
  }
  /**
   * @param {number} n
   * @return {?}
   */
  function floor(n) {
    return n > .008856 ? Math.pow(n, 1 / 3) : 7.787037 * n + 4 / 29;
  }
  /**
   * @param {number} h
   * @return {?}
   */
  function vv(h) {
    return Math.round(255 * (.00304 >= h ? 12.92 * h : 1.055 * Math.pow(h, 1 / 2.4) - .055));
  }
  /**
   * @param {!Object} r
   * @param {string} g
   * @param {!Function} b
   * @return {?}
   */
  function d3_rgb(r, g, b) {
    return this instanceof d3_rgb ? (this.r = ~~r, this.g = ~~g, void(this.b = ~~b)) : arguments.length < 2 ? r instanceof d3_rgb ? new d3_rgb(r.r, r.g, r.b) : d3_rgb_parse("" + r, d3_rgb, d3_hsl_rgb) : new d3_rgb(r, g, b);
  }
  /**
   * @param {number} win
   * @return {?}
   */
  function createSandBox(win) {
    return new d3_rgb(win >> 16, win >> 8 & 255, 255 & win);
  }
  /**
   * @param {undefined} win
   * @return {?}
   */
  function value(win) {
    return createSandBox(win) + "";
  }
  /**
   * @param {number} v
   * @return {?}
   */
  function d3_rgb_hex(v) {
    return 16 > v ? "0" + Math.max(0, v).toString(16) : Math.min(255, v).toString(16);
  }
  /**
   * @param {?} type
   * @param {!Function} rgb
   * @param {!Function} hsl
   * @return {?}
   */
  function d3_rgb_parse(type, rgb, hsl) {
    var dataURI;
    var m2;
    var value;
    /** @type {number} */
    var r = 0;
    /** @type {number} */
    var g = 0;
    /** @type {number} */
    var b = 0;
    if (dataURI = /([a-z]+)\((.*)\)/i.exec(type)) {
      switch(m2 = dataURI[2].split(","), dataURI[1]) {
        case "hsl":
          return hsl(parseFloat(m2[0]), parseFloat(m2[1]) / 100, parseFloat(m2[2]) / 100);
        case "rgb":
          return rgb(d3_rgb_parseNumber(m2[0]), d3_rgb_parseNumber(m2[1]), d3_rgb_parseNumber(m2[2]));
      }
    }
    return (value = _.get(type)) ? rgb(value.r, value.g, value.b) : (null == type || "#" !== type.charAt(0) || isNaN(value = parseInt(type.substring(1), 16)) || (4 === type.length ? (r = (3840 & value) >> 4, r = r >> 4 | r, g = 240 & value, g = g >> 4 | g, b = 15 & value, b = b << 4 | b) : 7 === type.length && (r = (16711680 & value) >> 16, g = (65280 & value) >> 8, b = 255 & value)), rgb(r, g, b));
  }
  /**
   * @param {number} r
   * @param {number} b
   * @param {number} c
   * @return {?}
   */
  function d3_rgb_hsl(r, b, c) {
    var h;
    var s;
    /** @type {number} */
    var d = Math.min(r = r / 255, b = b / 255, c = c / 255);
    /** @type {number} */
    var v = Math.max(r, b, c);
    /** @type {number} */
    var m = v - d;
    /** @type {number} */
    var l = (v + d) / 2;
    return m ? (s = .5 > l ? m / (v + d) : m / (2 - v - d), h = r == v ? (b - c) / m + (c > b ? 6 : 0) : b == v ? (c - r) / m + 2 : (r - b) / m + 4, h = h * 60) : (h = 0 / 0, s = l > 0 && 1 > l ? 0 : h), new d3_hsl(h, s, l);
  }
  /**
   * @param {number} b
   * @param {number} d
   * @param {number} value
   * @return {?}
   */
  function rgbToHex(b, d, value) {
    b = toString(b);
    d = toString(d);
    value = toString(value);
    var v = floor((.4124564 * b + .3575761 * d + .1804375 * value) / zoom);
    var m = floor((.2126729 * b + .7151522 * d + .072175 * value) / dim);
    var j = floor((.0193339 * b + .119192 * d + .9503041 * value) / w);
    return Color(116 * m - 16, 500 * (v - m), 200 * (m - j));
  }
  /**
   * @param {number} obj
   * @return {?}
   */
  function toString(obj) {
    return (obj = obj / 255) <= .04045 ? obj / 12.92 : Math.pow((obj + .055) / 1.055, 2.4);
  }
  /**
   * @param {string} c
   * @return {?}
   */
  function d3_rgb_parseNumber(c) {
    /** @type {number} */
    var b = parseFloat(c);
    return "%" === c.charAt(c.length - 1) ? Math.round(2.55 * b) : b;
  }
  /**
   * @param {!Function} v
   * @return {?}
   */
  function $(v) {
    return "function" == typeof v ? v : function() {
      return v;
    };
  }
  /**
   * @param {number} value
   * @return {?}
   */
  function undefined(value) {
    return value;
  }
  /**
   * @param {!Function} response
   * @return {?}
   */
  function d3_xhrType(response) {
    return function(url, value, label) {
      return 2 === arguments.length && "function" == typeof value && (label = value, value = null), d3_xhr(url, value, response, label);
    };
  }
  /**
   * @param {?} url
   * @param {string} type
   * @param {!Function} callback
   * @param {!Object} name
   * @return {?}
   */
  function d3_xhr(url, type, callback, name) {
    /**
     * @return {?}
     */
    function respond() {
      var error;
      var s = request.status;
      if (!s && request.responseText || s >= 200 && 300 > s || 304 === s) {
        try {
          error = callback.call(t, request);
        } catch (bubbled_sets__3355) {
          return void dispatch.error.call(t, bubbled_sets__3355);
        }
        dispatch.load.call(t, error);
      } else {
        dispatch.error.call(t, request);
      }
    }
    var t = {};
    var dispatch = d3.dispatch("beforesend", "progress", "load", "error");
    var headers = {};
    /** @type {!XMLHttpRequest} */
    var request = new XMLHttpRequest;
    /** @type {null} */
    var r = null;
    return !root.XDomainRequest || "withCredentials" in request || !/^(http(s)?:)?\/\//.test(url) || (request = new XDomainRequest), "onload" in request ? request.onload = request.onerror = respond : request.onreadystatechange = function() {
      if (request.readyState > 3) {
        respond();
      }
    }, request.onprogress = function(event) {
      var e = d3.event;
      /** @type {!Object} */
      d3.event = event;
      try {
        dispatch.progress.call(t, request);
      } finally {
        d3.event = e;
      }
    }, t.header = function(name, value) {
      return name = (name + "").toLowerCase(), arguments.length < 2 ? headers[name] : (null == value ? delete headers[name] : headers[name] = value + "", t);
    }, t.mimeType = function(value) {
      return arguments.length ? (type = null == value ? null : value + "", t) : type;
    }, t.responseType = function(res) {
      return arguments.length ? (r = res, t) : r;
    }, t.response = function(e) {
      return callback = e, t;
    }, ["get", "post"].forEach(function(firstRow) {
      /**
       * @return {?}
       */
      t[firstRow] = function() {
        return t.send.apply(t, [firstRow].concat(d3_array(arguments)));
      };
    }), t.send = function(json, e, c) {
      if (2 === arguments.length && "function" == typeof e && (c = e, e = null), request.open(json, url, true), null == type || "accept" in headers || (headers.accept = type + ",*/*"), request.setRequestHeader) {
        var key;
        for (key in headers) {
          request.setRequestHeader(key, headers[key]);
        }
      }
      return null != type && request.overrideMimeType && request.overrideMimeType(type), null != r && (request.responseType = r), null != c && t.on("error", c).on("load", function(result) {
        c(null, result);
      }), dispatch.beforesend.call(t, request), request.send(null == e ? null : e), t;
    }, t.abort = function() {
      return request.abort(), t;
    }, d3.rebind(t, dispatch, "on"), null == name ? t : t.get(normalize(name));
  }
  /**
   * @param {!Function} callback
   * @return {?}
   */
  function normalize(callback) {
    return 1 === callback.length ? function(lastIndex, value) {
      callback(null == lastIndex ? value : null);
    } : callback;
  }
  /**
   * @return {undefined}
   */
  function d3_timer_step() {
    var now = d3_timer_mark();
    /** @type {number} */
    var delay = d3_timer_sweep() - now;
    if (delay > 24) {
      if (isFinite(delay)) {
        clearTimeout(d3_timer_timeout);
        /** @type {number} */
        d3_timer_timeout = setTimeout(d3_timer_step, delay);
      }
      /** @type {number} */
      Uh = 0;
    } else {
      /** @type {number} */
      Uh = 1;
      d3_timer_frame(d3_timer_step);
    }
  }
  /**
   * @return {?}
   */
  function d3_timer_mark() {
    /** @type {number} */
    var now = Date.now();
    d3_timer_active = d3_timer_queueHead;
    for (; d3_timer_active;) {
      if (now >= d3_timer_active.t) {
        d3_timer_active.f = d3_timer_active.c(now - d3_timer_active.t);
      }
      d3_timer_active = d3_timer_active.n;
    }
    return now;
  }
  /**
   * @return {?}
   */
  function d3_timer_sweep() {
    var t0;
    var t1 = d3_timer_queueHead;
    /** @type {number} */
    var time = 1 / 0;
    for (; t1;) {
      if (t1.f) {
        t1 = t0 ? t0.n = t1.n : d3_timer_queueHead = t1.n;
      } else {
        if (t1.t < time) {
          time = t1.t;
        }
        t1 = (t0 = t1).n;
      }
    }
    return d3_timer_queueTail = t0, time;
  }
  /**
   * @param {?} x
   * @param {string} p
   * @return {?}
   */
  function round(x, p) {
    return p - (x ? Math.ceil(Math.log(x) / Math.LN10) : 1);
  }
  /**
   * @param {string} text
   * @param {number} position
   * @return {?}
   */
  function translate(text, position) {
    /** @type {number} */
    var mul = Math.pow(10, 3 * abs(8 - position));
    return {
      scale : position > 8 ? function(value) {
        return value / mul;
      } : function(x1) {
        return x1 * mul;
      },
      symbol : text
    };
  }
  /**
   * @param {!Object} locale
   * @return {?}
   */
  function d3_locale_numberFormat(locale) {
    var locale_decimal = locale.decimal;
    var locale_thousands = locale.thousands;
    var locale_grouping = locale.grouping;
    var locale_currency = locale.currency;
    /** @type {function(?): ?} */
    var formatGroup = locale_grouping ? function(value) {
      var i = value.length;
      /** @type {!Array} */
      var bundleTrytes = [];
      /** @type {number} */
      var j = 0;
      var g = locale_grouping[0];
      for (; i > 0 && g > 0;) {
        bundleTrytes.push(value.substring(i = i - g, i + g));
        g = locale_grouping[j = (j + 1) % locale_grouping.length];
      }
      return bundleTrytes.reverse().join(locale_thousands);
    } : undefined;
    return function(format) {
      /** @type {(Array<string>|null)} */
      var match = d3_format_re.exec(format);
      /** @type {string} */
      var val = match[1] || " ";
      /** @type {string} */
      var r = match[2] || ">";
      /** @type {string} */
      var sign = match[3] || "";
      /** @type {string} */
      var v = match[4] || "";
      /** @type {string} */
      var canViewMyFiles = match[5];
      /** @type {number} */
      var index = +match[6];
      /** @type {string} */
      var canAccessMyFiles = match[7];
      /** @type {string} */
      var start = match[8];
      /** @type {string} */
      var type = match[9];
      /** @type {number} */
      var r2 = 1;
      /** @type {string} */
      var prefix = "";
      /** @type {string} */
      var space = "";
      /** @type {boolean} */
      var integer = false;
      switch(start && (start = +start.substring(1)), (canViewMyFiles || "0" === val && "=" === r) && (canViewMyFiles = val = "0", r = "=", canAccessMyFiles && (index = index - Math.floor((index - 1) / 4))), type) {
        case "n":
          /** @type {boolean} */
          canAccessMyFiles = true;
          /** @type {string} */
          type = "g";
          break;
        case "%":
          /** @type {number} */
          r2 = 100;
          /** @type {string} */
          space = "%";
          /** @type {string} */
          type = "f";
          break;
        case "p":
          /** @type {number} */
          r2 = 100;
          /** @type {string} */
          space = "%";
          /** @type {string} */
          type = "r";
          break;
        case "b":
        case "o":
        case "x":
        case "X":
          if ("#" === v) {
            /** @type {string} */
            prefix = "0" + type.toLowerCase();
          }
        case "c":
        case "d":
          /** @type {boolean} */
          integer = true;
          /** @type {number} */
          start = 0;
          break;
        case "s":
          /** @type {number} */
          r2 = -1;
          /** @type {string} */
          type = "r";
      }
      if ("$" === v) {
        prefix = locale_currency[0];
        space = locale_currency[1];
      }
      if (!("r" != type || start)) {
        /** @type {string} */
        type = "g";
      }
      if (null != start) {
        if ("g" == type) {
          /** @type {number} */
          start = Math.max(1, Math.min(21, start));
        } else {
          if ("e" == type || "f" == type) {
            /** @type {number} */
            start = Math.max(0, Math.min(20, start));
          }
        }
      }
      type = uiEvtNode.get(type) || d3_format_typeDefault;
      /** @type {(boolean|string)} */
      var zcomma = canViewMyFiles && canAccessMyFiles;
      return function(value) {
        var y = space;
        if (integer && value % 1) {
          return "";
        }
        /** @type {string} */
        var negative = 0 > value || 0 === value && 0 > 1 / value ? (value = -value, "-") : sign;
        if (0 > r2) {
          var data = d3.formatPrefix(value, start);
          value = data.scale(value);
          y = data.symbol + space;
        } else {
          /** @type {number} */
          value = value * r2;
        }
        value = type(value, start);
        var end = value.lastIndexOf(".");
        var before = 0 > end ? value : value.substring(0, end);
        var after = 0 > end ? "" : locale_decimal + value.substring(end + 1);
        if (!canViewMyFiles && canAccessMyFiles) {
          before = formatGroup(before);
        }
        var length = prefix.length + before.length + after.length + (zcomma ? 0 : negative.length);
        /** @type {string} */
        var padding = index > length ? (new Array(length = index - length + 1)).join(val) : "";
        return zcomma && (before = formatGroup(padding + before)), negative = negative + prefix, value = before + after, ("<" === r ? negative + value + padding : ">" === r ? padding + negative + value : "^" === r ? padding.substring(0, length = length >> 1) + negative + value + padding.substring(length) : negative + (zcomma ? value : padding + value)) + y;
      };
    };
  }
  /**
   * @param {string} x
   * @return {?}
   */
  function d3_format_typeDefault(x) {
    return x + "";
  }
  /**
   * @return {undefined}
   */
  function d3_date_utc() {
    /** @type {!Date} */
    this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
  }
  /**
   * @param {!Object} local
   * @param {!Function} step
   * @param {!Function} number
   * @return {?}
   */
  function d3_time_interval(local, step, number) {
    /**
     * @param {number} b
     * @return {?}
     */
    function round(b) {
      var a = local(b);
      var c = offset(a, 1);
      return c - b > b - a ? a : c;
    }
    /**
     * @param {number} value
     * @return {?}
     */
    function ceil(value) {
      return step(value = local(new d3_date(value - 1)), 1), value;
    }
    /**
     * @param {!Object} name
     * @param {!Object} data
     * @return {?}
     */
    function offset(name, data) {
      return step(name = new d3_date(+name), data), name;
    }
    /**
     * @param {number} x
     * @param {number} d
     * @param {number} dt
     * @return {?}
     */
    function range(x, d, dt) {
      var time = ceil(x);
      /** @type {!Array} */
      var list = [];
      if (dt > 1) {
        for (; d > time;) {
          if (!(number(time) % dt)) {
            list.push(new Date(+time));
          }
          step(time, 1);
        }
      } else {
        for (; d > time;) {
          list.push(new Date(+time));
          step(time, 1);
        }
      }
      return list;
    }
    /**
     * @param {string} name
     * @param {number} size
     * @param {number} step
     * @return {?}
     */
    function range_utc(name, size, step) {
      try {
        /** @type {function(): undefined} */
        d3_date = d3_date_utc;
        var s = new d3_date_utc;
        return s._ = name, range(s, size, step);
      } finally {
        /** @type {function(new:Date, ?=, ?=, ?=, ?=, ?=, ?=, ?=): string} */
        d3_date = Date;
      }
    }
    /** @type {!Object} */
    local.floor = local;
    /** @type {function(number): ?} */
    local.round = round;
    /** @type {function(number): ?} */
    local.ceil = ceil;
    /** @type {function(!Object, !Object): ?} */
    local.offset = offset;
    /** @type {function(number, number, number): ?} */
    local.range = range;
    var utc = local.utc = d3_time_interval_utc(local);
    return utc.floor = utc, utc.round = d3_time_interval_utc(round), utc.ceil = d3_time_interval_utc(ceil), utc.offset = d3_time_interval_utc(offset), utc.range = range_utc, local;
  }
  /**
   * @param {!Function} method
   * @return {?}
   */
  function d3_time_interval_utc(method) {
    return function(date, k) {
      try {
        /** @type {function(): undefined} */
        d3_date = d3_date_utc;
        var utc = new d3_date_utc;
        return utc._ = date, method(utc, k)._;
      } finally {
        /** @type {function(new:Date, ?=, ?=, ?=, ?=, ?=, ?=, ?=): string} */
        d3_date = Date;
      }
    };
  }
  /**
   * @param {!Object} options
   * @return {?}
   */
  function init(options) {
    /**
     * @param {?} text
     * @return {?}
     */
    function fn(text) {
      /**
       * @param {?} color
       * @return {?}
       */
      function render(color) {
        var m;
        var count;
        var f;
        /** @type {!Array} */
        var result = [];
        /** @type {number} */
        var i = -1;
        /** @type {number} */
        var e = 0;
        for (; ++i < l;) {
          if (37 === text.charCodeAt(i)) {
            result.push(text.substring(e, i));
            if (null != (count = ret[m = text.charAt(++i)])) {
              m = text.charAt(++i);
            }
            if (f = d3_time_formats[m]) {
              m = f(color, null == count ? "e" === m ? " " : "0" : count);
            }
            result.push(m);
            /** @type {number} */
            e = i + 1;
          }
        }
        return result.push(text.substring(e, i)), result.join("");
      }
      var l = text.length;
      return render.parse = function(right) {
        var o = {
          y : 1900,
          m : 0,
          d : 1,
          H : 0,
          M : 0,
          S : 0,
          L : 0,
          Z : null
        };
        var ret = cb(o, text, right, 0);
        if (ret != right.length) {
          return null;
        }
        if ("p" in o) {
          /** @type {number} */
          o.H = o.H % 12 + 12 * o.p;
        }
        /** @type {boolean} */
        var horiz = null != o.Z && d3_date !== d3_date_utc;
        var t = new (horiz ? d3_date_utc : d3_date);
        return "j" in o ? t.setFullYear(o.y, 0, o.j) : "w" in o && ("W" in o || "U" in o) ? (t.setFullYear(o.y, 0, 1), t.setFullYear(o.y, 0, "W" in o ? (o.w + 6) % 7 + 7 * o.W - (t.getDay() + 5) % 7 : o.w + 7 * o.U - (t.getDay() + 6) % 7)) : t.setFullYear(o.y, o.m, o.d), t.setHours(o.H + Math.floor(o.Z / 100), o.M + o.Z % 100, o.S, o.L), horiz ? t._ : t;
      }, render.toString = function() {
        return text;
      }, render;
    }
    /**
     * @param {!Function} d
     * @param {?} v
     * @param {string} p
     * @param {?} c
     * @return {?}
     */
    function cb(d, v, p, c) {
      var e;
      var f;
      var k;
      /** @type {number} */
      var i = 0;
      var l = v.length;
      var column = p.length;
      for (; l > i;) {
        if (c >= column) {
          return -1;
        }
        if (e = v.charCodeAt(i++), 37 === e) {
          if (k = v.charAt(i++), f = formats[k in ret ? v.charAt(i++) : k], !f || (c = f(d, p, c)) < 0) {
            return -1;
          }
        } else {
          if (e != p.charCodeAt(c++)) {
            return -1;
          }
        }
      }
      return c;
    }
    /**
     * @param {!Object} name
     * @param {!Object} data
     * @param {string} a
     * @return {?}
     */
    function d(name, data, a) {
      /** @type {number} */
      result.lastIndex = 0;
      var authtype = result.exec(data.substring(a));
      return authtype ? (name.w = r.get(authtype[0].toLowerCase()), a + authtype[0].length) : -1;
    }
    /**
     * @param {!Window} y
     * @param {string} text
     * @param {string} i
     * @return {?}
     */
    function a(y, text, i) {
      /** @type {number} */
      m.lastIndex = 0;
      var authtype = m.exec(text.substring(i));
      return authtype ? (y.w = values.get(authtype[0].toLowerCase()), i + authtype[0].length) : -1;
    }
    /**
     * @param {!Object} name
     * @param {!Object} data
     * @param {string} a
     * @return {?}
     */
    function transform(name, data, a) {
      /** @type {number} */
      s.lastIndex = 0;
      var authtype = s.exec(data.substring(a));
      return authtype ? (name.m = list.get(authtype[0].toLowerCase()), a + authtype[0].length) : -1;
    }
    /**
     * @param {!Object} date
     * @param {string} string
     * @param {string} i
     * @return {?}
     */
    function d3_time_parseMonth(date, string, i) {
      /** @type {number} */
      args.lastIndex = 0;
      var authtype = args.exec(string.substring(i));
      return authtype ? (date.m = offset.get(authtype[0].toLowerCase()), i + authtype[0].length) : -1;
    }
    /**
     * @param {number} prev
     * @param {string} a
     * @param {?} b
     * @return {?}
     */
    function c(prev, a, b) {
      return cb(prev, d3_time_formats.c.toString(), a, b);
    }
    /**
     * @param {!Object} name
     * @param {!Object} a
     * @param {boolean} b
     * @return {?}
     */
    function i(name, a, b) {
      return cb(name, d3_time_formats.x.toString(), a, b);
    }
    /**
     * @param {!Function} d
     * @param {string} v
     * @param {?} i
     * @return {?}
     */
    function next(d, v, i) {
      return cb(d, d3_time_formats.X.toString(), v, i);
    }
    /**
     * @param {!Object} name
     * @param {!Object} source
     * @param {number} index
     * @return {?}
     */
    function value(name, source, index) {
      var title = t.get(source.substring(index, index = index + 2).toLowerCase());
      return null == title ? -1 : (name.p = title, index);
    }
    var date = options.dateTime;
    var data = options.date;
    var total = options.time;
    var periods = options.periods;
    var item = options.days;
    var address = options.shortDays;
    var input = options.months;
    var arr = options.shortMonths;
    /**
     * @param {?} str
     * @return {?}
     */
    fn.utc = function(str) {
      /**
       * @param {string} e
       * @return {?}
       */
      function format(e) {
        try {
          /** @type {function(): undefined} */
          d3_date = d3_date_utc;
          var t = new d3_date;
          return t._ = e, f(t);
        } finally {
          /** @type {function(new:Date, ?=, ?=, ?=, ?=, ?=, ?=, ?=): string} */
          d3_date = Date;
        }
      }
      var f = fn(str);
      return format.parse = function(a) {
        try {
          /** @type {function(): undefined} */
          d3_date = d3_date_utc;
          var args = f.parse(a);
          return args && args._;
        } finally {
          /** @type {function(new:Date, ?=, ?=, ?=, ?=, ?=, ?=, ?=): string} */
          d3_date = Date;
        }
      }, format.toString = f.toString, format;
    };
    /** @type {function(!Array): ?} */
    fn.multi = fn.utc.multi = multi;
    var t = d3.map();
    var m = split(item);
    var values = map(item);
    var result = split(address);
    var r = map(address);
    var args = split(input);
    var offset = map(input);
    var s = split(arr);
    var list = map(arr);
    periods.forEach(function(p_Interval, b) {
      t.set(p_Interval.toLowerCase(), b);
    });
    var d3_time_formats = {
      a : function(name) {
        return address[name.getDay()];
      },
      A : function(p) {
        return item[p.getDay()];
      },
      b : function(name) {
        return arr[name.getMonth()];
      },
      B : function(z) {
        return input[z.getMonth()];
      },
      c : fn(date),
      d : function(s, v) {
        return pad(s.getDate(), v, 2);
      },
      e : function(a, n) {
        return pad(a.getDate(), n, 2);
      },
      H : function(s, v) {
        return pad(s.getHours(), v, 2);
      },
      I : function(value, number) {
        return pad(value.getHours() % 12 || 12, number, 2);
      },
      j : function(date, value) {
        return pad(1 + d3_time.dayOfYear(date), value, 3);
      },
      L : function(data, value) {
        return pad(data.getMilliseconds(), value, 3);
      },
      m : function(d, v) {
        return pad(d.getMonth() + 1, v, 2);
      },
      M : function(s, v) {
        return pad(s.getMinutes(), v, 2);
      },
      p : function(name) {
        return periods[+(name.getHours() >= 12)];
      },
      S : function(context, input) {
        return pad(context.getSeconds(), input, 2);
      },
      U : function(name, input) {
        return pad(d3_time.sundayOfYear(name), input, 2);
      },
      w : function(val) {
        return val.getDay();
      },
      W : function(date, name) {
        return pad(d3_time.mondayOfYear(date), name, 2);
      },
      x : fn(data),
      X : fn(total),
      y : function(data, value) {
        return pad(data.getFullYear() % 100, value, 2);
      },
      Y : function(date, y) {
        return pad(date.getFullYear() % 1e4, y, 4);
      },
      Z : d3_time_zone,
      "%" : function() {
        return "%";
      }
    };
    var formats = {
      a : d,
      A : a,
      b : transform,
      B : d3_time_parseMonth,
      c : c,
      d : name,
      e : name,
      H : d3_time_parseHour24,
      I : d3_time_parseHour24,
      j : copy,
      L : l,
      m : type,
      M : d3_time_parseMinutes,
      p : value,
      S : d3_time_parseSeconds,
      U : replace,
      w : title,
      W : fetch,
      x : i,
      X : next,
      y : d3_time_parseMilliseconds,
      Y : d3_time_parseFullYear,
      Z : scroll,
      "%" : getConditionalExpression
    };
    return fn;
  }
  /**
   * @param {number} val
   * @param {!Object} key
   * @param {number} n
   * @return {?}
   */
  function pad(val, key, n) {
    /** @type {string} */
    var m = 0 > val ? "-" : "";
    /** @type {string} */
    var string = (m ? -val : val) + "";
    /** @type {number} */
    var length = string.length;
    return m + (n > length ? (new Array(n - length + 1)).join(key) + string : string);
  }
  /**
   * @param {?} x
   * @return {?}
   */
  function split(x) {
    return new RegExp("^(?:" + x.map(d3.requote).join("|") + ")", "i");
  }
  /**
   * @param {!NodeList} arr
   * @return {?}
   */
  function map(arr) {
    var map = new d3_Map;
    /** @type {number} */
    var j = -1;
    var i = arr.length;
    for (; ++j < i;) {
      map.set(arr[j].toLowerCase(), j);
    }
    return map;
  }
  /**
   * @param {!Window} args
   * @param {string} text
   * @param {number} i
   * @return {?}
   */
  function title(args, text, i) {
    /** @type {number} */
    that.lastIndex = 0;
    /** @type {(Array<string>|null)} */
    var sortedValueArrays = that.exec(text.substring(i, i + 1));
    return sortedValueArrays ? (args.w = +sortedValueArrays[0], i + sortedValueArrays[0].length) : -1;
  }
  /**
   * @param {!Object} name
   * @param {!Object} data
   * @param {string} a
   * @return {?}
   */
  function replace(name, data, a) {
    /** @type {number} */
    that.lastIndex = 0;
    /** @type {(Array<string>|null)} */
    var sortedValueArrays = that.exec(data.substring(a));
    return sortedValueArrays ? (name.U = +sortedValueArrays[0], a + sortedValueArrays[0].length) : -1;
  }
  /**
   * @param {!Object} value
   * @param {string} max
   * @param {string} i
   * @return {?}
   */
  function fetch(value, max, i) {
    /** @type {number} */
    that.lastIndex = 0;
    /** @type {(Array<string>|null)} */
    var sortedValueArrays = that.exec(max.substring(i));
    return sortedValueArrays ? (value.W = +sortedValueArrays[0], i + sortedValueArrays[0].length) : -1;
  }
  /**
   * @param {!Object} date
   * @param {string} string
   * @param {number} i
   * @return {?}
   */
  function d3_time_parseFullYear(date, string, i) {
    /** @type {number} */
    that.lastIndex = 0;
    /** @type {(Array<string>|null)} */
    var sortedValueArrays = that.exec(string.substring(i, i + 4));
    return sortedValueArrays ? (date.y = +sortedValueArrays[0], i + sortedValueArrays[0].length) : -1;
  }
  /**
   * @param {!Object} name
   * @param {!Object} string
   * @param {string} i
   * @return {?}
   */
  function d3_time_parseMilliseconds(name, string, i) {
    /** @type {number} */
    that.lastIndex = 0;
    /** @type {(Array<string>|null)} */
    var sortedValueArrays = that.exec(string.substring(i, i + 2));
    return sortedValueArrays ? (name.y = stayInBounds(+sortedValueArrays[0]), i + sortedValueArrays[0].length) : -1;
  }
  /**
   * @param {?} p
   * @param {string} val
   * @param {number} i
   * @return {?}
   */
  function scroll(p, val, i) {
    return /^[+-]\d{4}$/.test(val = val.substring(i, i + 5)) ? (p.Z = -val, i + 5) : -1;
  }
  /**
   * @param {number} min
   * @return {?}
   */
  function stayInBounds(min) {
    return min + (min > 68 ? 1900 : 2e3);
  }
  /**
   * @param {!Object} _
   * @param {string} s
   * @param {number} i
   * @return {?}
   */
  function type(_, s, i) {
    /** @type {number} */
    that.lastIndex = 0;
    /** @type {(Array<string>|null)} */
    var sortedValueArrays = that.exec(s.substring(i, i + 2));
    return sortedValueArrays ? (_.m = sortedValueArrays[0] - 1, i + sortedValueArrays[0].length) : -1;
  }
  /**
   * @param {!Object} options
   * @param {string} data
   * @param {number} idx
   * @return {?}
   */
  function name(options, data, idx) {
    /** @type {number} */
    that.lastIndex = 0;
    /** @type {(Array<string>|null)} */
    var sortedValueArrays = that.exec(data.substring(idx, idx + 2));
    return sortedValueArrays ? (options.d = +sortedValueArrays[0], idx + sortedValueArrays[0].length) : -1;
  }
  /**
   * @param {!Object} options
   * @param {string} end
   * @param {number} i
   * @return {?}
   */
  function copy(options, end, i) {
    /** @type {number} */
    that.lastIndex = 0;
    /** @type {(Array<string>|null)} */
    var sortedValueArrays = that.exec(end.substring(i, i + 3));
    return sortedValueArrays ? (options.j = +sortedValueArrays[0], i + sortedValueArrays[0].length) : -1;
  }
  /**
   * @param {?} date
   * @param {string} string
   * @param {number} i
   * @return {?}
   */
  function d3_time_parseHour24(date, string, i) {
    /** @type {number} */
    that.lastIndex = 0;
    /** @type {(Array<string>|null)} */
    var sortedValueArrays = that.exec(string.substring(i, i + 2));
    return sortedValueArrays ? (date.H = +sortedValueArrays[0], i + sortedValueArrays[0].length) : -1;
  }
  /**
   * @param {?} date
   * @param {string} string
   * @param {number} i
   * @return {?}
   */
  function d3_time_parseMinutes(date, string, i) {
    /** @type {number} */
    that.lastIndex = 0;
    /** @type {(Array<string>|null)} */
    var sortedValueArrays = that.exec(string.substring(i, i + 2));
    return sortedValueArrays ? (date.M = +sortedValueArrays[0], i + sortedValueArrays[0].length) : -1;
  }
  /**
   * @param {?} date
   * @param {string} string
   * @param {number} i
   * @return {?}
   */
  function d3_time_parseSeconds(date, string, i) {
    /** @type {number} */
    that.lastIndex = 0;
    /** @type {(Array<string>|null)} */
    var sortedValueArrays = that.exec(string.substring(i, i + 2));
    return sortedValueArrays ? (date.S = +sortedValueArrays[0], i + sortedValueArrays[0].length) : -1;
  }
  /**
   * @param {!Object} name
   * @param {!Object} s
   * @param {string} a
   * @return {?}
   */
  function l(name, s, a) {
    /** @type {number} */
    that.lastIndex = 0;
    /** @type {(Array<string>|null)} */
    var sortedValueArrays = that.exec(s.substring(a, a + 3));
    return sortedValueArrays ? (name.L = +sortedValueArrays[0], a + sortedValueArrays[0].length) : -1;
  }
  /**
   * @param {!Date} d
   * @return {?}
   */
  function d3_time_zone(d) {
    var offset = d.getTimezoneOffset();
    /** @type {string} */
    var s = offset > 0 ? "-" : "+";
    /** @type {number} */
    var i = ~~(abs(offset) / 60);
    /** @type {number} */
    var arg = abs(offset) % 60;
    return s + pad(i, "0", 2) + pad(arg, "0", 2);
  }
  /**
   * @param {?} isContact
   * @param {string} str
   * @param {number} i
   * @return {?}
   */
  function getConditionalExpression(isContact, str, i) {
    /** @type {number} */
    commentRegEx.lastIndex = 0;
    /** @type {(Array<string>|null)} */
    var dataMatrix = commentRegEx.exec(str.substring(i, i + 1));
    return dataMatrix ? i + dataMatrix[0].length : -1;
  }
  /**
   * @param {!Array} a
   * @return {?}
   */
  function multi(a) {
    var l = a.length;
    /** @type {number} */
    var i = -1;
    for (; ++i < l;) {
      a[i][0] = this(a[i][0]);
    }
    return function(val) {
      /** @type {number} */
      var i = 0;
      var p = a[i];
      for (; !p[1](val);) {
        p = a[++i];
      }
      return p[0](val);
    };
  }
  /**
   * @return {undefined}
   */
  function Set() {
  }
  /**
   * @param {string} i
   * @param {string} x
   * @param {!Object} o
   * @return {undefined}
   */
  function getValue(i, x, o) {
    var left = o.s = i + x;
    /** @type {number} */
    var offset = left - i;
    /** @type {number} */
    var width = left - offset;
    /** @type {number} */
    o.t = i - width + (x - offset);
  }
  /**
   * @param {!Object} geometry
   * @param {?} data
   * @return {undefined}
   */
  function extend(geometry, data) {
    if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
      streamGeometryType[geometry.type](geometry, data);
    }
  }
  /**
   * @param {!NodeList} coordinates
   * @param {!Object} stream
   * @param {number} closed
   * @return {undefined}
   */
  function streamLine(coordinates, stream, closed) {
    var coordinate;
    /** @type {number} */
    var i = -1;
    /** @type {number} */
    var n = coordinates.length - closed;
    stream.lineStart();
    for (; ++i < n;) {
      coordinate = coordinates[i];
      stream.point(coordinate[0], coordinate[1], coordinate[2]);
    }
    stream.lineEnd();
  }
  /**
   * @param {!NodeList} coordinates
   * @param {!Object} stream
   * @return {undefined}
   */
  function streamPolygon(coordinates, stream) {
    /** @type {number} */
    var i = -1;
    var index = coordinates.length;
    stream.polygonStart();
    for (; ++i < index;) {
      streamLine(coordinates[i], stream, 1);
    }
    stream.polygonEnd();
  }
  /**
   * @return {undefined}
   */
  function d3_geo_areaRingStart() {
    /**
     * @param {number} index
     * @param {number} x
     * @return {undefined}
     */
    function nextPoint(index, x) {
      /** @type {number} */
      index = index * factor;
      /** @type {number} */
      x = x * factor / 2 + val / 4;
      /** @type {number} */
      var offset = index - d;
      /** @type {number} */
      var direction = offset >= 0 ? 1 : -1;
      /** @type {number} */
      var angle = direction * offset;
      /** @type {number} */
      var size = Math.cos(x);
      /** @type {number} */
      var width = Math.sin(x);
      /** @type {number} */
      var length = height * width;
      /** @type {number} */
      var a = idx * size + length * Math.cos(angle);
      /** @type {number} */
      var i = length * direction * Math.sin(angle);
      results.add(Math.atan2(i, a));
      /** @type {number} */
      d = index;
      /** @type {number} */
      idx = size;
      /** @type {number} */
      height = width;
    }
    var n;
    var c;
    var d;
    var idx;
    var height;
    /**
     * @param {number} obj
     * @param {number} x
     * @return {undefined}
     */
    d3_geo_area.point = function(obj, x) {
      /** @type {function(number, number): undefined} */
      d3_geo_area.point = nextPoint;
      /** @type {number} */
      d = (n = obj) * factor;
      /** @type {number} */
      idx = Math.cos(x = (c = x) * factor / 2 + val / 4);
      /** @type {number} */
      height = Math.sin(x);
    };
    /**
     * @return {undefined}
     */
    d3_geo_area.lineEnd = function() {
      nextPoint(n, c);
    };
  }
  /**
   * @param {!Object} color
   * @return {?}
   */
  function point(color) {
    var alpha = color[0];
    var a = color[1];
    /** @type {number} */
    var r = Math.cos(a);
    return [r * Math.cos(alpha), r * Math.sin(alpha), Math.sin(a)];
  }
  /**
   * @param {!Array} val
   * @param {!Array} from
   * @return {?}
   */
  function inspect(val, from) {
    return val[0] * from[0] + val[1] * from[1] + val[2] * from[2];
  }
  /**
   * @param {!Array} str
   * @param {!Array} val
   * @return {?}
   */
  function parseInt(str, val) {
    return [str[1] * val[2] - str[2] * val[1], str[2] * val[0] - str[0] * val[2], str[0] * val[1] - str[1] * val[0]];
  }
  /**
   * @param {!Array} a
   * @param {!Array} b
   * @return {undefined}
   */
  function contains(a, b) {
    a[0] += b[0];
    a[1] += b[1];
    a[2] += b[2];
  }
  /**
   * @param {!Array} a
   * @param {number} b
   * @return {?}
   */
  function Number(a, b) {
    return [a[0] * b, a[1] * b, a[2] * b];
  }
  /**
   * @param {!Array} x
   * @return {undefined}
   */
  function cos(x) {
    /** @type {number} */
    var mag = Math.sqrt(x[0] * x[0] + x[1] * x[1] + x[2] * x[2]);
    x[0] /= mag;
    x[1] /= mag;
    x[2] /= mag;
  }
  /**
   * @param {!Array} v
   * @return {?}
   */
  function ceil(v) {
    return [Math.atan2(v[1], v[0]), sin(v[2])];
  }
  /**
   * @param {!Object} a
   * @param {!Object} b
   * @return {?}
   */
  function pointEqual(a, b) {
    return abs(a[0] - b[0]) < epsilon && abs(a[1] - b[1]) < epsilon;
  }
  /**
   * @param {number} y
   * @param {number} x
   * @return {undefined}
   */
  function pt(y, x) {
    /** @type {number} */
    y = y * factor;
    /** @type {number} */
    var sign = Math.cos(x = x * factor);
    position(sign * Math.cos(y), sign * Math.sin(y), Math.sin(x));
  }
  /**
   * @param {number} d
   * @param {number} _
   * @param {number} val
   * @return {undefined}
   */
  function position(d, _, val) {
    ++smoothness;
    r = r + (d - r) / smoothness;
    hash = hash + (_ - hash) / smoothness;
    prev = prev + (val - prev) / smoothness;
  }
  /**
   * @return {undefined}
   */
  function boundsLineStart() {
    /**
     * @param {number} index
     * @param {number} x
     * @return {undefined}
     */
    function nextPoint(index, x) {
      /** @type {number} */
      index = index * factor;
      /** @type {number} */
      var precision = Math.cos(x = x * factor);
      /** @type {number} */
      var hi = precision * Math.cos(index);
      /** @type {number} */
      var hr = precision * Math.sin(index);
      /** @type {number} */
      var l = Math.sin(x);
      /** @type {number} */
      var p = Math.atan2(Math.sqrt((p = i * l - j * hr) * p + (p = j * hi - r * l) * p + (p = r * hr - i * hi) * p), r * hi + i * hr + j * l);
      short = short + p;
      start = start + p * (r + (r = hi));
      x1 = x1 + p * (i + (i = hr));
      s2 = s2 + p * (j + (j = l));
      position(r, i, j);
    }
    var r;
    var i;
    var j;
    /**
     * @param {number} z
     * @param {number} x
     * @return {undefined}
     */
    lengthStream.point = function(z, x) {
      /** @type {number} */
      z = z * factor;
      /** @type {number} */
      var radius = Math.cos(x = x * factor);
      /** @type {number} */
      r = radius * Math.cos(z);
      /** @type {number} */
      i = radius * Math.sin(z);
      /** @type {number} */
      j = Math.sin(x);
      /** @type {function(number, number): undefined} */
      lengthStream.point = nextPoint;
      position(r, i, j);
    };
  }
  /**
   * @return {undefined}
   */
  function boundsLineEnd() {
    /** @type {function(number, number): undefined} */
    lengthStream.point = pt;
  }
  /**
   * @return {undefined}
   */
  function lengthLineEnd() {
    /**
     * @param {number} d
     * @param {number} x
     * @return {undefined}
     */
    function rotate(d, x) {
      /** @type {number} */
      d = d * factor;
      /** @type {number} */
      var animPc = Math.cos(x = x * factor);
      /** @type {number} */
      var v_next_x = animPc * Math.cos(d);
      /** @type {number} */
      var v_next_y = animPc * Math.sin(d);
      /** @type {number} */
      var c = Math.sin(x);
      /** @type {number} */
      var lightI = v_prev_y * c - y * v_next_y;
      /** @type {number} */
      var lightJ = y * v_next_x - v_prev_x * c;
      /** @type {number} */
      var size = v_prev_x * v_next_y - v_prev_y * v_next_x;
      /** @type {number} */
      var n = Math.sqrt(lightI * lightI + lightJ * lightJ + size * size);
      /** @type {number} */
      var X = v_prev_x * v_next_x + v_prev_y * v_next_y + y * c;
      /** @type {number} */
      var s = n && -acos(X) / n;
      /** @type {number} */
      var p = Math.atan2(n, X);
      o = o + s * lightI;
      rms = rms + s * lightJ;
      i = i + s * size;
      short = short + p;
      start = start + p * (v_prev_x + (v_prev_x = v_next_x));
      x1 = x1 + p * (v_prev_y + (v_prev_y = v_next_y));
      s2 = s2 + p * (y + (y = c));
      position(v_prev_x, v_prev_y, y);
    }
    var r;
    var g;
    var v_prev_x;
    var v_prev_y;
    var y;
    /**
     * @param {number} v
     * @param {number} x
     * @return {undefined}
     */
    lengthStream.point = function(v, x) {
      /** @type {number} */
      r = v;
      /** @type {number} */
      g = x;
      /** @type {function(number, number): undefined} */
      lengthStream.point = rotate;
      /** @type {number} */
      v = v * factor;
      /** @type {number} */
      var temp_pi = Math.cos(x = x * factor);
      /** @type {number} */
      v_prev_x = temp_pi * Math.cos(v);
      /** @type {number} */
      v_prev_y = temp_pi * Math.sin(v);
      /** @type {number} */
      y = Math.sin(x);
      position(v_prev_x, v_prev_y, y);
    };
    /**
     * @return {undefined}
     */
    lengthStream.lineEnd = function() {
      rotate(r, g);
      /** @type {function(): undefined} */
      lengthStream.lineEnd = boundsLineEnd;
      /** @type {function(number, number): undefined} */
      lengthStream.point = pt;
    };
  }
  /**
   * @return {?}
   */
  function d3_true() {
    return true;
  }
  /**
   * @param {!Array} lst
   * @param {!Function} v
   * @param {boolean} clipStartInside
   * @param {!Function} interpolate
   * @param {!Object} listener
   * @return {undefined}
   */
  function d3_geo_clipPolygon(lst, v, clipStartInside, interpolate, listener) {
    /** @type {!Array} */
    var args = [];
    /** @type {!Array} */
    var values = [];
    if (lst.forEach(function(segment) {
      if (!((i = segment.length - 1) <= 0)) {
        var i;
        var p0 = segment[0];
        var p1 = segment[i];
        if (pointEqual(p0, p1)) {
          listener.lineStart();
          /** @type {number} */
          var j = 0;
          for (; i > j; ++j) {
            listener.point((p0 = segment[j])[0], p0[1]);
          }
          return void listener.lineEnd();
        }
        var a = new d3_geo_clipPolygonIntersection(p0, segment, null, true);
        var b = new d3_geo_clipPolygonIntersection(p0, null, a, false);
        a.o = b;
        args.push(a);
        values.push(b);
        a = new d3_geo_clipPolygonIntersection(p1, segment, null, false);
        b = new d3_geo_clipPolygonIntersection(p1, null, a, true);
        a.o = b;
        args.push(a);
        values.push(b);
      }
    }), values.sort(v), forEach(args), forEach(values), args.length) {
      /** @type {number} */
      var j = 0;
      /** @type {boolean} */
      var entry = clipStartInside;
      /** @type {number} */
      var i = values.length;
      for (; i > j; ++j) {
        /** @type {boolean} */
        values[j].e = entry = !entry;
      }
      var value;
      var object;
      var start = args[0];
      for (;;) {
        var current = start;
        /** @type {boolean} */
        var open = true;
        for (; current.v;) {
          if ((current = current.n) === start) {
            return;
          }
        }
        value = current.z;
        listener.lineStart();
        do {
          if (current.v = current.o.v = true, current.e) {
            if (open) {
              /** @type {number} */
              j = 0;
              i = value.length;
              for (; i > j; ++j) {
                listener.point((object = value[j])[0], object[1]);
              }
            } else {
              interpolate(current.x, current.n.x, 1, listener);
            }
            current = current.n;
          } else {
            if (open) {
              value = current.p.z;
              /** @type {number} */
              j = value.length - 1;
              for (; j >= 0; --j) {
                listener.point((object = value[j])[0], object[1]);
              }
            } else {
              interpolate(current.x, current.p.x, -1, listener);
            }
            current = current.p;
          }
          current = current.o;
          value = current.z;
          /** @type {boolean} */
          open = !open;
        } while (!current.v);
        listener.lineEnd();
      }
    }
  }
  /**
   * @param {!Array} list
   * @return {undefined}
   */
  function forEach(list) {
    if (opens = list.length) {
      var opens;
      var d;
      /** @type {number} */
      var _j = 0;
      var data = list[0];
      for (; ++_j < opens;) {
        data.n = d = list[_j];
        d.p = data;
        data = d;
      }
      data.n = d = list[0];
      d.p = data;
    }
  }
  /**
   * @param {number} point
   * @param {number} points
   * @param {!Object} other
   * @param {!Object} entry
   * @return {undefined}
   */
  function d3_geo_clipPolygonIntersection(point, points, other, entry) {
    /** @type {number} */
    this.x = point;
    /** @type {number} */
    this.z = points;
    /** @type {!Object} */
    this.o = other;
    /** @type {!Object} */
    this.e = entry;
    /** @type {boolean} */
    this.v = false;
    /** @type {null} */
    this.n = this.p = null;
  }
  /**
   * @param {!Function} pointVisible
   * @param {!Function} clipLine
   * @param {!Function} interpolate
   * @param {!Object} clipStart
   * @return {?}
   */
  function d3_geo_clip(pointVisible, clipLine, interpolate, clipStart) {
    return function(rotate, listener) {
      /**
       * @param {number} x
       * @param {number} y
       * @return {undefined}
       */
      function point(x, y) {
        var p2 = rotate(x, y);
        if (pointVisible(x = p2[0], y = p2[1])) {
          listener.point(x, y);
        }
      }
      /**
       * @param {number} x
       * @param {number} y
       * @return {undefined}
       */
      function pointLine(x, y) {
        var point = rotate(x, y);
        line.point(point[0], point[1]);
      }
      /**
       * @return {undefined}
       */
      function lineStart() {
        /** @type {function(number, number): undefined} */
        clip.point = pointLine;
        line.lineStart();
      }
      /**
       * @return {undefined}
       */
      function lineEnd() {
        /** @type {function(number, number): undefined} */
        clip.point = point;
        line.lineEnd();
      }
      /**
       * @param {number} x
       * @param {number} y
       * @return {undefined}
       */
      function pointRing(x, y) {
        p.push([x, y]);
        var point = rotate(x, y);
        ringListener.point(point[0], point[1]);
      }
      /**
       * @return {undefined}
       */
      function ringStart() {
        ringListener.lineStart();
        /** @type {!Array} */
        p = [];
      }
      /**
       * @return {undefined}
       */
      function ringEnd() {
        pointRing(p[0][0], p[0][1]);
        ringListener.lineEnd();
        var prev;
        var offset = ringListener.clean();
        var entities = buffer.buffer();
        var j = entities.length;
        if (p.pop(), y.push(p), p = null, j) {
          if (1 & offset) {
            prev = entities[0];
            var coordinate;
            /** @type {number} */
            j = prev.length - 1;
            /** @type {number} */
            var i = -1;
            if (j > 0) {
              if (!v) {
                listener.polygonStart();
                /** @type {boolean} */
                v = true;
              }
              listener.lineStart();
              for (; ++i < j;) {
                listener.point((coordinate = prev[i])[0], coordinate[1]);
              }
              listener.lineEnd();
            }
          } else {
            if (j > 1 && 2 & offset) {
              entities.push(entities.pop().concat(entities.shift()));
            }
            b.push(entities.filter(item));
          }
        }
      }
      var b;
      var y;
      var p;
      var line = clipLine(listener);
      var rotatedClipStart = rotate.invert(clipStart[0], clipStart[1]);
      var clip = {
        point : point,
        lineStart : lineStart,
        lineEnd : lineEnd,
        polygonStart : function() {
          /** @type {function(number, number): undefined} */
          clip.point = pointRing;
          /** @type {function(): undefined} */
          clip.lineStart = ringStart;
          /** @type {function(): undefined} */
          clip.lineEnd = ringEnd;
          /** @type {!Array} */
          b = [];
          /** @type {!Array} */
          y = [];
        },
        polygonEnd : function() {
          /** @type {function(number, number): undefined} */
          clip.point = point;
          /** @type {function(): undefined} */
          clip.lineStart = lineStart;
          /** @type {function(): undefined} */
          clip.lineEnd = lineEnd;
          b = d3.merge(b);
          var clipStartInside = d3_geo_pointInPolygon(rotatedClipStart, y);
          if (b.length) {
            if (!v) {
              listener.polygonStart();
              /** @type {boolean} */
              v = true;
            }
            d3_geo_clipPolygon(b, d3_geo_clipSort, clipStartInside, interpolate, listener);
          } else {
            if (clipStartInside) {
              if (!v) {
                listener.polygonStart();
                /** @type {boolean} */
                v = true;
              }
              listener.lineStart();
              interpolate(null, null, 1, listener);
              listener.lineEnd();
            }
          }
          if (v) {
            listener.polygonEnd();
            /** @type {boolean} */
            v = false;
          }
          /** @type {null} */
          b = y = null;
        },
        sphere : function() {
          listener.polygonStart();
          listener.lineStart();
          interpolate(null, null, 1, listener);
          listener.lineEnd();
          listener.polygonEnd();
        }
      };
      var buffer = d3_geo_clipBufferListener();
      var ringListener = clipLine(buffer);
      /** @type {boolean} */
      var v = false;
      return clip;
    };
  }
  /**
   * @param {!NodeList} value
   * @return {?}
   */
  function item(value) {
    return value.length > 1;
  }
  /**
   * @return {?}
   */
  function d3_geo_clipBufferListener() {
    var a;
    /** @type {!Array} */
    var b = [];
    return {
      lineStart : function() {
        b.push(a = []);
      },
      point : function(x, y) {
        a.push([x, y]);
      },
      lineEnd : d3_noop,
      buffer : function() {
        var origB = b;
        return b = [], a = null, origB;
      },
      rejoin : function() {
        if (b.length > 1) {
          b.push(b.pop().concat(b.shift()));
        }
      }
    };
  }
  /**
   * @param {!Array} a
   * @param {!Array} b
   * @return {?}
   */
  function d3_geo_clipSort(a, b) {
    return ((a = a.x)[0] < 0 ? a[1] - halfPi - epsilon : halfPi - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfPi - epsilon : halfPi - b[1]);
  }
  /**
   * @param {!Object} a
   * @param {!Array} b
   * @return {?}
   */
  function d3_geo_pointInPolygon(a, b) {
    var lambda = a[0];
    var item = a[1];
    /** @type {!Array} */
    var values_of_pseudo = [Math.sin(lambda), -Math.cos(lambda), 0];
    /** @type {number} */
    var angle = 0;
    /** @type {number} */
    var g0 = 0;
    results.reset();
    /** @type {number} */
    var i = 0;
    var length = b.length;
    for (; length > i; ++i) {
      var e = b[i];
      var typeLength = e.length;
      if (typeLength) {
        var b = e[0];
        var lambda0 = b[0];
        /** @type {number} */
        var transform = b[1] / 2 + val / 4;
        /** @type {number} */
        var state = Math.sin(transform);
        /** @type {number} */
        var p = Math.cos(transform);
        /** @type {number} */
        var i = 1;
        for (;;) {
          if (i === typeLength) {
            /** @type {number} */
            i = 0;
          }
          a = e[i];
          var lambda1 = a[0];
          /** @type {number} */
          var transform = a[1] / 2 + val / 4;
          /** @type {number} */
          var group = Math.sin(transform);
          /** @type {number} */
          var p0 = Math.cos(transform);
          /** @type {number} */
          var delta = lambda1 - lambda0;
          /** @type {number} */
          var sign = delta >= 0 ? 1 : -1;
          /** @type {number} */
          var latRad = sign * delta;
          /** @type {boolean} */
          var antimeridian = latRad > val;
          /** @type {number} */
          var e2ps = state * group;
          if (results.add(Math.atan2(e2ps * sign * Math.sin(latRad), p * p0 + e2ps * Math.cos(latRad))), angle = angle + (antimeridian ? delta + sign * tau : delta), antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
            var r = parseInt(point(b), point(a));
            cos(r);
            var m = parseInt(values_of_pseudo, r);
            cos(m);
            /** @type {number} */
            var C = (antimeridian ^ delta >= 0 ? -1 : 1) * sin(m[2]);
            if (item > C || item === C && (r[0] || r[1])) {
              /** @type {number} */
              g0 = g0 + (antimeridian ^ delta >= 0 ? 1 : -1);
            }
          }
          if (!i++) {
            break;
          }
          lambda0 = lambda1;
          /** @type {number} */
          state = group;
          /** @type {number} */
          p = p0;
          /** @type {!Object} */
          b = a;
        }
      }
    }
    return (-epsilon > angle || epsilon > angle && 0 > results) ^ 1 & g0;
  }
  /**
   * @param {!Object} s
   * @return {?}
   */
  function clipLine(s) {
    var j;
    /** @type {number} */
    var a = 0 / 0;
    /** @type {number} */
    var b = 0 / 0;
    /** @type {number} */
    var c = 0 / 0;
    return {
      lineStart : function() {
        s.lineStart();
        /** @type {number} */
        j = 1;
      },
      point : function(i, x) {
        /** @type {number} */
        var r = i > 0 ? val : -val;
        /** @type {number} */
        var max = abs(i - a);
        if (abs(max - val) < epsilon) {
          s.point(a, b = (b + x) / 2 > 0 ? halfPi : -halfPi);
          s.point(c, b);
          s.lineEnd();
          s.lineStart();
          s.point(r, b);
          s.point(i, b);
          /** @type {number} */
          j = 0;
        } else {
          if (c !== r && max >= val) {
            if (abs(a - c) < epsilon) {
              /** @type {number} */
              a = a - c * epsilon;
            }
            if (abs(i - r) < epsilon) {
              /** @type {number} */
              i = i - r * epsilon;
            }
            b = intersect(a, b, i, x);
            s.point(c, b);
            s.lineEnd();
            s.lineStart();
            s.point(r, b);
            /** @type {number} */
            j = 0;
          }
        }
        s.point(a = i, b = x);
        /** @type {number} */
        c = r;
      },
      lineEnd : function() {
        s.lineEnd();
        /** @type {number} */
        a = b = 0 / 0;
      },
      clean : function() {
        return 2 - j;
      }
    };
  }
  /**
   * @param {number} a
   * @param {number} d
   * @param {number} b
   * @param {number} f
   * @return {?}
   */
  function intersect(a, d, b, f) {
    var l;
    var s;
    /** @type {number} */
    var cr = Math.sin(a - b);
    return abs(cr) > epsilon ? Math.atan((Math.sin(d) * (s = Math.cos(f)) * Math.sin(b) - Math.sin(f) * (l = Math.cos(d)) * Math.sin(a)) / (l * s * cr)) : (d + f) / 2;
  }
  /**
   * @param {!Object} from
   * @param {!Object} to
   * @param {number} direction
   * @param {!Object} stream
   * @return {undefined}
   */
  function clipAntimeridianInterpolate(from, to, direction, stream) {
    var y;
    if (null == from) {
      /** @type {number} */
      y = direction * halfPi;
      stream.point(-val, y);
      stream.point(0, y);
      stream.point(val, y);
      stream.point(val, 0);
      stream.point(val, -y);
      stream.point(0, -y);
      stream.point(-val, -y);
      stream.point(-val, 0);
      stream.point(-val, y);
    } else {
      if (abs(from[0] - to[0]) > epsilon) {
        /** @type {number} */
        var x = from[0] < to[0] ? val : -val;
        /** @type {number} */
        y = direction * x / 2;
        stream.point(-x, y);
        stream.point(0, y);
        stream.point(x, y);
      } else {
        stream.point(to[0], to[1]);
      }
    }
  }
  /**
   * @param {number} value
   * @return {?}
   */
  function precision(value) {
    /**
     * @param {number} a
     * @param {number} val
     * @return {?}
     */
    function visible(a, val) {
      return Math.cos(a) * Math.cos(val) > cr;
    }
    /**
     * @param {!Object} stream
     * @return {?}
     */
    function clipLine(stream) {
      var point0;
      var b_hi;
      var debugBtn2Pressed;
      var debugBtn1Pressed;
      var k;
      return {
        lineStart : function() {
          /** @type {boolean} */
          debugBtn1Pressed = debugBtn2Pressed = false;
          /** @type {number} */
          k = 1;
        },
        point : function(name, a) {
          var point2;
          /** @type {!Array} */
          var point1 = [name, a];
          var v = visible(name, a);
          var a_hi = smallRadius ? v ? 0 : code(name, a) : v ? code(name + (0 > name ? val : -val), a) : 0;
          if (!point0 && (debugBtn1Pressed = debugBtn2Pressed = v) && stream.lineStart(), v !== debugBtn2Pressed && (point2 = intersect(point0, point1), (pointEqual(point0, point2) || pointEqual(point1, point2)) && (point1[0] += epsilon, point1[1] += epsilon, v = visible(point1[0], point1[1]))), v !== debugBtn2Pressed) {
            /** @type {number} */
            k = 0;
            if (v) {
              stream.lineStart();
              point2 = intersect(point1, point0);
              stream.point(point2[0], point2[1]);
            } else {
              point2 = intersect(point0, point1);
              stream.point(point2[0], point2[1]);
              stream.lineEnd();
            }
            point0 = point2;
          } else {
            if (notHemisphere && point0 && smallRadius ^ v) {
              var point2;
              if (!(a_hi & b_hi || !(point2 = intersect(point1, point0, true)))) {
                /** @type {number} */
                k = 0;
                if (smallRadius) {
                  stream.lineStart();
                  stream.point(point2[0][0], point2[0][1]);
                  stream.point(point2[1][0], point2[1][1]);
                  stream.lineEnd();
                } else {
                  stream.point(point2[1][0], point2[1][1]);
                  stream.lineEnd();
                  stream.lineStart();
                  stream.point(point2[0][0], point2[0][1]);
                }
              }
            }
          }
          if (!(!v || point0 && pointEqual(point0, point1))) {
            stream.point(point1[0], point1[1]);
          }
          /** @type {!Array} */
          point0 = point1;
          debugBtn2Pressed = v;
          b_hi = a_hi;
        },
        lineEnd : function() {
          if (debugBtn2Pressed) {
            stream.lineEnd();
          }
          /** @type {null} */
          point0 = null;
        },
        clean : function() {
          return k | (debugBtn1Pressed && debugBtn2Pressed) << 1;
        }
      };
    }
    /**
     * @param {!Object} a
     * @param {!Object} b
     * @param {boolean} two
     * @return {?}
     */
    function intersect(a, b, two) {
      var p1 = point(a);
      var p = point(b);
      /** @type {!Array} */
      var lineHeight = [1, 0, 0];
      var i = parseInt(p1, p);
      var n2n2 = inspect(i, i);
      var n1n2 = i[0];
      /** @type {number} */
      var determinant = n2n2 - n1n2 * n1n2;
      if (!determinant) {
        return !two && a;
      }
      /** @type {number} */
      var c1 = cr * n2n2 / determinant;
      /** @type {number} */
      var n = -cr * n1n2 / determinant;
      var value = parseInt(lineHeight, i);
      var c = Number(lineHeight, c1);
      var m = Number(i, n);
      contains(c, m);
      var obj = value;
      var d = inspect(c, obj);
      var e = inspect(obj, obj);
      /** @type {number} */
      var estimatedOptimalJitterTolerance = d * d - e * (inspect(c, c) - 1);
      if (!(0 > estimatedOptimalJitterTolerance)) {
        /** @type {number} */
        var f = Math.sqrt(estimatedOptimalJitterTolerance);
        var p = Number(obj, (-d - f) / e);
        if (contains(p, c), p = ceil(p), !two) {
          return p;
        }
        var i;
        var x = a[0];
        var right = b[0];
        var j = a[1];
        var y = b[1];
        if (x > right) {
          i = x;
          x = right;
          right = i;
        }
        /** @type {number} */
        var value = right - x;
        /** @type {boolean} */
        var withMixins = abs(value - val) < epsilon;
        /** @type {boolean} */
        var hasBase = withMixins || epsilon > value;
        if (!withMixins && j > y && (i = j, j = y, y = i), hasBase ? withMixins ? j + y > 0 ^ p[1] < (abs(p[0] - x) < epsilon ? j : y) : j <= p[1] && p[1] <= y : value > val ^ (x <= p[0] && p[0] <= right)) {
          var x = Number(obj, (-d + f) / e);
          return contains(x, c), [p, ceil(x)];
        }
      }
    }
    /**
     * @param {number} a
     * @param {number} c
     * @return {?}
     */
    function code(a, c) {
      var d = smallRadius ? value : val - value;
      /** @type {number} */
      var b = 0;
      return -d > a ? b = b | 1 : a > d && (b = b | 2), -d > c ? b = b | 4 : c > d && (b = b | 8), b;
    }
    /** @type {number} */
    var cr = Math.cos(value);
    /** @type {boolean} */
    var smallRadius = cr > 0;
    /** @type {boolean} */
    var notHemisphere = abs(cr) > epsilon;
    var i = d3_geo_circleInterpolate(value, 6 * factor);
    return d3_geo_clip(visible, clipLine, i, smallRadius ? [0, -value] : [-val, value - val]);
  }
  /**
   * @param {number} x1
   * @param {number} y1
   * @param {number} size
   * @param {number} value
   * @return {?}
   */
  function d3_geom_clipLine(x1, y1, size, value) {
    return function(container) {
      var delta;
      var attr = container.a;
      var b = container.b;
      var x = attr.x;
      var y = attr.y;
      var len = b.x;
      var ys = b.y;
      /** @type {number} */
      var offset = 0;
      /** @type {number} */
      var r = 1;
      /** @type {number} */
      var factor = len - x;
      /** @type {number} */
      var ratio = ys - y;
      if (delta = x1 - x, factor || !(delta > 0)) {
        if (delta = delta / factor, 0 > factor) {
          if (offset > delta) {
            return;
          }
          if (r > delta) {
            /** @type {number} */
            r = delta;
          }
        } else {
          if (factor > 0) {
            if (delta > r) {
              return;
            }
            if (delta > offset) {
              /** @type {number} */
              offset = delta;
            }
          }
        }
        if (delta = size - x, factor || !(0 > delta)) {
          if (delta = delta / factor, 0 > factor) {
            if (delta > r) {
              return;
            }
            if (delta > offset) {
              /** @type {number} */
              offset = delta;
            }
          } else {
            if (factor > 0) {
              if (offset > delta) {
                return;
              }
              if (r > delta) {
                /** @type {number} */
                r = delta;
              }
            }
          }
          if (delta = y1 - y, ratio || !(delta > 0)) {
            if (delta = delta / ratio, 0 > ratio) {
              if (offset > delta) {
                return;
              }
              if (r > delta) {
                /** @type {number} */
                r = delta;
              }
            } else {
              if (ratio > 0) {
                if (delta > r) {
                  return;
                }
                if (delta > offset) {
                  /** @type {number} */
                  offset = delta;
                }
              }
            }
            if (delta = value - y, ratio || !(0 > delta)) {
              if (delta = delta / ratio, 0 > ratio) {
                if (delta > r) {
                  return;
                }
                if (delta > offset) {
                  /** @type {number} */
                  offset = delta;
                }
              } else {
                if (ratio > 0) {
                  if (offset > delta) {
                    return;
                  }
                  if (r > delta) {
                    /** @type {number} */
                    r = delta;
                  }
                }
              }
              return offset > 0 && (container.a = {
                x : x + offset * factor,
                y : y + offset * ratio
              }), 1 > r && (container.b = {
                x : x + r * factor,
                y : y + r * ratio
              }), container;
            }
          }
        }
      }
    };
  }
  /**
   * @param {number} index
   * @param {number} value
   * @param {number} start
   * @param {number} end
   * @return {?}
   */
  function sequence(index, value, start, end) {
    /**
     * @param {!Object} d
     * @param {number} input
     * @return {?}
     */
    function abs(d, input) {
      return abs(d[0] - index) < epsilon ? input > 0 ? 0 : 3 : abs(d[0] - start) < epsilon ? input > 0 ? 2 : 1 : abs(d[1] - value) < epsilon ? input > 0 ? 1 : 0 : input > 0 ? 3 : 2;
    }
    /**
     * @param {!Object} a
     * @param {!Object} b
     * @return {?}
     */
    function deep(a, b) {
      return equal(a.x, b.x);
    }
    /**
     * @param {!Object} a
     * @param {!Object} b
     * @return {?}
     */
    function equal(a, b) {
      var a_type_bits = abs(a, 1);
      var b_type_bits = abs(b, 1);
      return a_type_bits !== b_type_bits ? a_type_bits - b_type_bits : 0 === a_type_bits ? b[1] - a[1] : 1 === a_type_bits ? a[0] - b[0] : 2 === a_type_bits ? a[1] - b[1] : b[0] - a[0];
    }
    return function(listener) {
      /**
       * @param {!Object} items
       * @return {?}
       */
      function each(items) {
        /** @type {number} */
        var b = 0;
        var l = results.length;
        var f = items[1];
        /** @type {number} */
        var i = 0;
        for (; l > i; ++i) {
          var value;
          /** @type {number} */
          var length = 1;
          var p = results[i];
          var x = p.length;
          var a = p[0];
          for (; x > length; ++length) {
            value = p[length];
            if (a[1] <= f) {
              if (value[1] > f && base64ToNum(a, value, items) > 0) {
                ++b;
              }
            } else {
              if (value[1] <= f && base64ToNum(a, value, items) < 0) {
                --b;
              }
            }
            a = value;
          }
        }
        return 0 !== b;
      }
      /**
       * @param {!Object} from
       * @param {!Object} x
       * @param {number} i
       * @param {!Object} result
       * @return {undefined}
       */
      function interpolate(from, x, i, result) {
        /** @type {number} */
        var val = 0;
        /** @type {number} */
        var v = 0;
        if (null == from || (val = abs(from, i)) !== (v = abs(x, i)) || equal(from, x) < 0 ^ i > 0) {
          do {
            result.point(0 === val || 3 === val ? index : start, val > 1 ? end : value);
          } while ((val = (val + i + 4) % 4) !== v);
        } else {
          result.point(x[0], x[1]);
        }
      }
      /**
       * @param {number} len
       * @param {number} pos
       * @return {?}
       */
      function add(len, pos) {
        return len >= index && start >= len && pos >= value && end >= pos;
      }
      /**
       * @param {number} n
       * @param {number} t
       * @return {undefined}
       */
      function p(n, t) {
        if (add(n, t)) {
          listener.point(n, t);
        }
      }
      /**
       * @return {undefined}
       */
      function loop() {
        /** @type {function(number, number): undefined} */
        boundsStream.point = next;
        if (results) {
          results.push(data = []);
        }
        /** @type {boolean} */
        a = true;
        /** @type {boolean} */
        storedAltContent = false;
        /** @type {number} */
        k = v = 0 / 0;
      }
      /**
       * @return {undefined}
       */
      function set() {
        if (b) {
          next(y, t);
          if (QClass && storedAltContent) {
            options.rejoin();
          }
          b.push(options.buffer());
        }
        /** @type {function(number, number): undefined} */
        boundsStream.point = p;
        if (storedAltContent) {
          listener.lineEnd();
        }
      }
      /**
       * @param {number} i
       * @param {number} value
       * @return {undefined}
       */
      function next(i, value) {
        /** @type {number} */
        i = Math.max(-width, Math.min(width, i));
        /** @type {number} */
        value = Math.max(-width, Math.min(width, value));
        var obj = add(i, value);
        if (results && data.push([i, value]), a) {
          /** @type {number} */
          y = i;
          /** @type {number} */
          t = value;
          QClass = obj;
          /** @type {boolean} */
          a = false;
          if (obj) {
            listener.lineStart();
            listener.point(i, value);
          }
        } else {
          if (obj && storedAltContent) {
            listener.point(i, value);
          } else {
            var bar = {
              a : {
                x : k,
                y : v
              },
              b : {
                x : i,
                y : value
              }
            };
            if (path(bar)) {
              if (!storedAltContent) {
                listener.lineStart();
                listener.point(bar.a.x, bar.a.y);
              }
              listener.point(bar.b.x, bar.b.y);
              if (!obj) {
                listener.lineEnd();
              }
              /** @type {boolean} */
              reverseName = false;
            } else {
              if (obj) {
                listener.lineStart();
                listener.point(i, value);
                /** @type {boolean} */
                reverseName = false;
              }
            }
          }
        }
        /** @type {number} */
        k = i;
        /** @type {number} */
        v = value;
        storedAltContent = obj;
      }
      var b;
      var results;
      var data;
      var y;
      var t;
      var QClass;
      var k;
      var v;
      var storedAltContent;
      var a;
      var reverseName;
      var callback = listener;
      var options = d3_geo_clipBufferListener();
      var path = d3_geom_clipLine(index, value, start, end);
      var boundsStream = {
        point : p,
        lineStart : loop,
        lineEnd : set,
        polygonStart : function() {
          listener = options;
          /** @type {!Array} */
          b = [];
          /** @type {!Array} */
          results = [];
          /** @type {boolean} */
          reverseName = true;
        },
        polygonEnd : function() {
          listener = callback;
          b = d3.merge(b);
          var enableApptDetails = each([index, end]);
          var isPrivacyEnabled = reverseName && enableApptDetails;
          var bLength = b.length;
          if (isPrivacyEnabled || bLength) {
            listener.polygonStart();
            if (isPrivacyEnabled) {
              listener.lineStart();
              interpolate(null, null, 1, listener);
              listener.lineEnd();
            }
            if (bLength) {
              d3_geo_clipPolygon(b, deep, enableApptDetails, interpolate, listener);
            }
            listener.polygonEnd();
          }
          /** @type {null} */
          b = results = data = null;
        }
      };
      return boundsStream;
    };
  }
  /**
   * @param {!Object} f
   * @param {!Object} fn
   * @return {?}
   */
  function compose(f, fn) {
    /**
     * @param {string} c
     * @param {?} v
     * @return {?}
     */
    function next(c, v) {
      return c = f(c, v), fn(c[0], c[1]);
    }
    return f.invert && fn.invert && (next.invert = function(value, m) {
      return value = fn.invert(value, m), value && f.invert(value[0], value[1]);
    }), next;
  }
  /**
   * @param {!Function} name
   * @return {?}
   */
  function func(name) {
    /** @type {number} */
    var phi0 = 0;
    /** @type {number} */
    var u = val / 3;
    var m = projectionMutator(name);
    var p = m(phi0, u);
    return p.parallels = function(quat) {
      return arguments.length ? m(phi0 = quat[0] * val / 180, u = quat[1] * val / 180) : [phi0 / val * 180, u / val * 180];
    }, p;
  }
  /**
   * @param {?} a
   * @param {?} val
   * @return {?}
   */
  function invert(a, val) {
    /**
     * @param {number} value
     * @param {?} x
     * @return {?}
     */
    function inverse(value, x) {
      /** @type {number} */
      var b = Math.sqrt(dd - 2 * r * Math.sin(x)) / r;
      return [b * Math.sin(value = value * r), d - b * Math.cos(value)];
    }
    /** @type {number} */
    var n = Math.sin(a);
    /** @type {number} */
    var r = (n + Math.sin(val)) / 2;
    /** @type {number} */
    var dd = 1 + n * (2 * r - n);
    /** @type {number} */
    var d = Math.sqrt(dd) / r;
    return inverse.invert = function(a, x) {
      /** @type {number} */
      var b = d - x;
      return [Math.atan2(a, b) / r, sin((dd - (a * a + b * b) * r * r) / (2 * r))];
    }, inverse;
  }
  /**
   * @return {undefined}
   */
  function getValueAtTime() {
    /**
     * @param {number} b
     * @param {number} c
     * @return {undefined}
     */
    function c(b, c) {
      total = total + (y * b - u * c);
      /** @type {number} */
      u = b;
      /** @type {number} */
      y = c;
    }
    var a;
    var g;
    var u;
    var y;
    /**
     * @param {number} x
     * @param {number} v
     * @return {undefined}
     */
    result.point = function(x, v) {
      /** @type {function(number, number): undefined} */
      result.point = c;
      a = u = x;
      g = y = v;
    };
    /**
     * @return {undefined}
     */
    result.lineEnd = function() {
      c(a, g);
    };
  }
  /**
   * @param {number} a
   * @param {number} b
   * @return {undefined}
   */
  function intersection(a, b) {
    if (ch > a) {
      /** @type {number} */
      ch = a;
    }
    if (a > greatest) {
      /** @type {number} */
      greatest = a;
    }
    if (g > b) {
      /** @type {number} */
      g = b;
    }
    if (b > cmax) {
      /** @type {number} */
      cmax = b;
    }
  }
  /**
   * @return {?}
   */
  function multiplex$6() {
    /**
     * @param {number} p
     * @param {number} x
     * @return {undefined}
     */
    function point(p, x) {
      path.push("M", p, ",", x, f);
    }
    /**
     * @param {number} y
     * @param {number} x
     * @return {undefined}
     */
    function boundsPoint(y, x) {
      path.push("M", y, ",", x);
      /** @type {function(number, number): undefined} */
      boundsStream.point = number;
    }
    /**
     * @param {number} x
     * @param {number} n
     * @return {undefined}
     */
    function number(x, n) {
      path.push("L", x, ",", n);
    }
    /**
     * @return {undefined}
     */
    function boundsLineEnd() {
      /** @type {function(number, number): undefined} */
      boundsStream.point = point;
    }
    /**
     * @return {undefined}
     */
    function sphere() {
      path.push("Z");
    }
    var f = asmLink(4.5);
    /** @type {!Array} */
    var path = [];
    var boundsStream = {
      point : point,
      lineStart : function() {
        /** @type {function(number, number): undefined} */
        boundsStream.point = boundsPoint;
      },
      lineEnd : boundsLineEnd,
      polygonStart : function() {
        /** @type {function(): undefined} */
        boundsStream.lineEnd = sphere;
      },
      polygonEnd : function() {
        /** @type {function(): undefined} */
        boundsStream.lineEnd = boundsLineEnd;
        /** @type {function(number, number): undefined} */
        boundsStream.point = point;
      },
      pointRadius : function(_) {
        return f = asmLink(_), boundsStream;
      },
      result : function() {
        if (path.length) {
          var sepor = path.join("");
          return path = [], sepor;
        }
      }
    };
    return boundsStream;
  }
  /**
   * @param {number} f
   * @return {?}
   */
  function asmLink(f) {
    return "m0," + f + "a" + f + "," + f + " 0 1,1 0," + -2 * f + "a" + f + "," + f + " 0 1,1 0," + 2 * f + "z";
  }
  /**
   * @param {number} str
   * @param {number} value
   * @return {undefined}
   */
  function _export(str, value) {
    r = r + str;
    hash = hash + value;
    ++prev;
  }
  /**
   * @return {undefined}
   */
  function lineStart() {
    /**
     * @param {number} a
     * @param {number} d
     * @return {undefined}
     */
    function easing(a, d) {
      /** @type {number} */
      var e = a - b;
      /** @type {number} */
      var f = d - i;
      /** @type {number} */
      var s1 = Math.sqrt(e * e + f * f);
      start = start + s1 * (b + a) / 2;
      x1 = x1 + s1 * (i + d) / 2;
      s2 = s2 + s1;
      _export(b = a, i = d);
    }
    var b;
    var i;
    /**
     * @param {number} x
     * @param {number} a
     * @return {undefined}
     */
    clip.point = function(x, a) {
      /** @type {function(number, number): undefined} */
      clip.point = easing;
      _export(b = x, i = a);
    };
  }
  /**
   * @return {undefined}
   */
  function lineEnd() {
    /** @type {function(number, number): undefined} */
    clip.point = _export;
  }
  /**
   * @return {undefined}
   */
  function Screen2D() {
    /**
     * @param {number} a
     * @param {number} c
     * @return {undefined}
     */
    function point(a, c) {
      /** @type {number} */
      var deltax = a - x;
      /** @type {number} */
      var deltay = c - e;
      /** @type {number} */
      var s = Math.sqrt(deltax * deltax + deltay * deltay);
      start = start + s * (x + a) / 2;
      x1 = x1 + s * (e + c) / 2;
      s2 = s2 + s;
      /** @type {number} */
      s = e * a - x * c;
      o = o + s * (x + a);
      rms = rms + s * (e + c);
      i = i + 3 * s;
      _export(x = a, e = c);
    }
    var b;
    var d;
    var x;
    var e;
    /**
     * @param {number} v
     * @param {number} val
     * @return {undefined}
     */
    clip.point = function(v, val) {
      /** @type {function(number, number): undefined} */
      clip.point = point;
      _export(b = x = v, d = e = val);
    };
    /**
     * @return {undefined}
     */
    clip.lineEnd = function() {
      point(b, d);
    };
  }
  /**
   * @param {!CanvasRenderingContext2D} ctx
   * @return {?}
   */
  function multiplex$7(ctx) {
    /**
     * @param {number} x
     * @param {number} y
     * @return {undefined}
     */
    function point(x, y) {
      ctx.moveTo(x, y);
      ctx.arc(x, y, inner, 0, tau);
    }
    /**
     * @param {number} x
     * @param {number} n
     * @return {undefined}
     */
    function p(x, n) {
      ctx.moveTo(x, n);
      /** @type {function(number, number): undefined} */
      clip.point = number;
    }
    /**
     * @param {number} n
     * @param {number} x
     * @return {undefined}
     */
    function number(n, x) {
      ctx.lineTo(n, x);
    }
    /**
     * @return {undefined}
     */
    function lineStart() {
      /** @type {function(number, number): undefined} */
      clip.point = point;
    }
    /**
     * @return {undefined}
     */
    function lineEnd() {
      ctx.closePath();
    }
    /** @type {number} */
    var inner = 4.5;
    var clip = {
      point : point,
      lineStart : function() {
        /** @type {function(number, number): undefined} */
        clip.point = p;
      },
      lineEnd : lineStart,
      polygonStart : function() {
        /** @type {function(): undefined} */
        clip.lineEnd = lineEnd;
      },
      polygonEnd : function() {
        /** @type {function(): undefined} */
        clip.lineEnd = lineStart;
        /** @type {function(number, number): undefined} */
        clip.point = point;
      },
      pointRadius : function(_) {
        return inner = _, clip;
      },
      result : d3_noop
    };
    return clip;
  }
  /**
   * @param {!Function} $
   * @return {?}
   */
  function module($) {
    /**
     * @param {!Object} test
     * @return {?}
     */
    function axis(test) {
      return (scale ? multiplex$5 : data)(test);
    }
    /**
     * @param {!Object} res
     * @return {?}
     */
    function data(res) {
      return multiplex$5(res, function(a, b) {
        a = $(a, b);
        res.point(a[0], a[1]);
      });
    }
    /**
     * @param {!Object} stream
     * @return {?}
     */
    function multiplex$5(stream) {
      /**
       * @param {number} x
       * @param {number} obj
       * @return {undefined}
       */
      function point(x, obj) {
        x = $(x, obj);
        stream.point(x[0], x[1]);
      }
      /**
       * @return {undefined}
       */
      function lineStart() {
        /** @type {number} */
        a = 0 / 0;
        /** @type {function(number, number): undefined} */
        clip.point = fn;
        stream.lineStart();
      }
      /**
       * @param {number} x
       * @param {number} obj
       * @return {undefined}
       */
      function fn(x, obj) {
        var size = point([x, obj]);
        var actual = $(x, obj);
        normalize(a, v, u, height, w, y, a = actual[0], v = actual[1], u = x, height = size[0], w = size[1], y = size[2], scale, stream);
        stream.point(a, v);
      }
      /**
       * @return {undefined}
       */
      function lineEnd() {
        /** @type {function(number, number): undefined} */
        clip.point = point;
        stream.lineEnd();
      }
      /**
       * @return {undefined}
       */
      function ringStart() {
        lineStart();
        /** @type {function(number, number): undefined} */
        clip.point = value;
        /** @type {function(): undefined} */
        clip.lineEnd = ringEnd;
      }
      /**
       * @param {number} i
       * @param {number} b
       * @return {undefined}
       */
      function value(i, b) {
        fn(M = i, optionUsed2 = b);
        all = a;
        s = v;
        p = height;
        t = w;
        L = y;
        /** @type {function(number, number): undefined} */
        clip.point = fn;
      }
      /**
       * @return {undefined}
       */
      function ringEnd() {
        normalize(a, v, u, height, w, y, all, s, M, p, t, L, scale, stream);
        /** @type {function(): undefined} */
        clip.lineEnd = lineEnd;
        lineEnd();
      }
      var M;
      var optionUsed2;
      var all;
      var s;
      var p;
      var t;
      var L;
      var u;
      var a;
      var v;
      var height;
      var w;
      var y;
      var clip = {
        point : point,
        lineStart : lineStart,
        lineEnd : lineEnd,
        polygonStart : function() {
          stream.polygonStart();
          /** @type {function(): undefined} */
          clip.lineStart = ringStart;
        },
        polygonEnd : function() {
          stream.polygonEnd();
          /** @type {function(): undefined} */
          clip.lineStart = lineStart;
        }
      };
      return clip;
    }
    /**
     * @param {number} e
     * @param {number} v
     * @param {number} y
     * @param {number} h
     * @param {number} w
     * @param {number} p
     * @param {string} g
     * @param {string} m
     * @param {number} b
     * @param {number} s
     * @param {number} c
     * @param {number} x
     * @param {number} obj
     * @param {!Object} a
     * @return {undefined}
     */
    function normalize(e, v, y, h, w, p, g, m, b, s, c, x, obj, a) {
      /** @type {number} */
      var j = g - e;
      /** @type {number} */
      var i = m - v;
      /** @type {number} */
      var _attract = j * j + i * i;
      if (_attract > 4 * clickDistance2 && obj--) {
        var height = h + s;
        var width = w + c;
        var offset = p + x;
        /** @type {number} */
        var scale = Math.sqrt(height * height + width * width + offset * offset);
        /** @type {number} */
        var table = Math.asin(offset = offset / scale);
        /** @type {number} */
        var M = abs(abs(offset) - 1) < epsilon || abs(y - b) < epsilon ? (y + b) / 2 : Math.atan2(width, height);
        var t = $(M, table);
        var d = t[0];
        var value = t[1];
        /** @type {number} */
        var normWoH = d - e;
        /** @type {number} */
        var spacing = value - v;
        /** @type {number} */
        var eDltLenZ = i * normWoH - j * spacing;
        if (eDltLenZ * eDltLenZ / _attract > clickDistance2 || abs((j * normWoH + i * spacing) / _attract - .5) > .3 || g > h * s + w * c + p * x) {
          normalize(e, v, y, h, w, p, d, value, M, height = height / scale, width = width / scale, offset, obj, a);
          a.point(d, value);
          normalize(d, value, M, height, width, offset, g, m, b, s, c, x, obj, a);
        }
      }
    }
    /** @type {number} */
    var clickDistance2 = .5;
    /** @type {number} */
    var g = Math.cos(30 * factor);
    /** @type {number} */
    var scale = 16;
    return axis.precision = function(_) {
      return arguments.length ? (scale = (clickDistance2 = _ * _) > 0 && 16, axis) : Math.sqrt(clickDistance2);
    }, axis;
  }
  /**
   * @param {!Object} project
   * @return {?}
   */
  function d3_geo_pathProjectStream(project) {
    var reply = module(function(intHeight, baseMediaDecodeTime) {
      return project([intHeight * scale, baseMediaDecodeTime * scale]);
    });
    return function(LocationObj) {
      return transformRadians(reply(LocationObj));
    };
  }
  /**
   * @param {string} stream
   * @return {undefined}
   */
  function d3_geo_transform(stream) {
    /** @type {string} */
    this.stream = stream;
  }
  /**
   * @param {!Object} s
   * @param {!Function} q
   * @return {?}
   */
  function multiplex$5(s, q) {
    return {
      point : q,
      sphere : function() {
        s.sphere();
      },
      lineStart : function() {
        s.lineStart();
      },
      lineEnd : function() {
        s.lineEnd();
      },
      polygonStart : function() {
        s.polygonStart();
      },
      polygonEnd : function() {
        s.polygonEnd();
      }
    };
  }
  /**
   * @param {string} value
   * @return {?}
   */
  function transform(value) {
    return projectionMutator(function() {
      return value;
    })();
  }
  /**
   * @param {!Function} projectAt
   * @return {?}
   */
  function projectionMutator(projectAt) {
    /**
     * @param {!Object} point
     * @return {?}
     */
    function projection(point) {
      return point = projectRotate(point[0] * factor, point[1] * factor), [point[0] * k + b, c - point[1] * k];
    }
    /**
     * @param {!Object} p
     * @return {?}
     */
    function invert(p) {
      return p = projectRotate.invert((p[0] - b) / k, (c - p[1]) / k), p && [p[0] * scale, p[1] * scale];
    }
    /**
     * @return {?}
     */
    function recenter() {
      projectRotate = compose(rotate = rotateRadians(deltaLambda, deltaPhi, deltaGamma), project);
      var center = project(x, y);
      return b = scaleMin - center[0] * k, c = scaleMax + center[1] * k, reset();
    }
    /**
     * @return {?}
     */
    function reset() {
      return cache && (cache.valid = false, cache = null), projection;
    }
    var project;
    var rotate;
    var projectRotate;
    var b;
    var c;
    var cache;
    var callback = module(function(point, camera) {
      return point = project(point, camera), [point[0] * k + b, c - point[1] * k];
    });
    /** @type {number} */
    var k = 150;
    /** @type {number} */
    var scaleMin = 480;
    /** @type {number} */
    var scaleMax = 250;
    /** @type {number} */
    var x = 0;
    /** @type {number} */
    var y = 0;
    /** @type {number} */
    var deltaLambda = 0;
    /** @type {number} */
    var deltaPhi = 0;
    /** @type {number} */
    var deltaGamma = 0;
    var preclip = findPeaks;
    /** @type {function(number): ?} */
    var result = undefined;
    /** @type {null} */
    var gapThreshold = null;
    /** @type {null} */
    var container = null;
    return projection.stream = function(name) {
      return cache && (cache.valid = false), cache = transformRadians(preclip(rotate, callback(result(name)))), cache.valid = true, cache;
    }, projection.clipAngle = function(_) {
      return arguments.length ? (preclip = null == _ ? (gapThreshold = _, findPeaks) : precision((gapThreshold = +_) * factor), reset()) : gapThreshold;
    }, projection.clipExtent = function(key) {
      return arguments.length ? (container = key, result = key ? sequence(key[0][0], key[0][1], key[1][0], key[1][1]) : undefined, reset()) : container;
    }, projection.scale = function(_) {
      return arguments.length ? (k = +_, recenter()) : k;
    }, projection.translate = function(strings) {
      return arguments.length ? (scaleMin = +strings[0], scaleMax = +strings[1], recenter()) : [scaleMin, scaleMax];
    }, projection.center = function(viewportSize) {
      return arguments.length ? (x = viewportSize[0] % 360 * factor, y = viewportSize[1] % 360 * factor, recenter()) : [x * scale, y * scale];
    }, projection.rotate = function(deltas) {
      return arguments.length ? (deltaLambda = deltas[0] % 360 * factor, deltaPhi = deltas[1] % 360 * factor, deltaGamma = deltas.length > 2 ? deltas[2] % 360 * factor : 0, recenter()) : [deltaLambda * scale, deltaPhi * scale, deltaGamma * scale];
    }, d3.rebind(projection, callback, "precision"), function() {
      return project = projectAt.apply(this, arguments), projection.invert = project.invert && invert, recenter();
    };
  }
  /**
   * @param {!Object} ctx
   * @return {?}
   */
  function transformRadians(ctx) {
    return multiplex$5(ctx, function(x, height) {
      ctx.point(x * factor, height * factor);
    });
  }
  /**
   * @param {number} fn
   * @param {number} a
   * @return {?}
   */
  function s(fn, a) {
    return [fn, a];
  }
  /**
   * @param {number} n
   * @param {?} froot
   * @return {?}
   */
  function rotationIdentity(n, froot) {
    return [n > val ? n - tau : -val > n ? n + tau : n, froot];
  }
  /**
   * @param {number} deltaLambda
   * @param {number} deltaPhi
   * @param {number} deltaGamma
   * @return {?}
   */
  function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
    return deltaLambda ? deltaPhi || deltaGamma ? compose(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma)) : rotationLambda(deltaLambda) : deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma) : rotationIdentity;
  }
  /**
   * @param {number} deltaLambda
   * @return {?}
   */
  function forwardRotationLambda(deltaLambda) {
    return function(lambda, phi) {
      return lambda = lambda + deltaLambda, [lambda > val ? lambda - tau : -val > lambda ? lambda + tau : lambda, phi];
    };
  }
  /**
   * @param {number} deltaLambda
   * @return {?}
   */
  function rotationLambda(deltaLambda) {
    var rotation = forwardRotationLambda(deltaLambda);
    return rotation.invert = forwardRotationLambda(-deltaLambda), rotation;
  }
  /**
   * @param {number} i
   * @param {number} lat
   * @return {?}
   */
  function rotationPhiGamma(i, lat) {
    /**
     * @param {?} a
     * @param {?} val
     * @return {?}
     */
    function invert(a, val) {
      /** @type {number} */
      var h = Math.cos(val);
      /** @type {number} */
      var k = Math.cos(a) * h;
      /** @type {number} */
      var j = Math.sin(a) * h;
      /** @type {number} */
      var x = Math.sin(val);
      /** @type {number} */
      var i = x * cosDeltaPhi + k * sinDeltaPhi;
      return [Math.atan2(j * normWoH - i * spacing, k * cosDeltaPhi - x * sinDeltaPhi), sin(i * normWoH + j * spacing)];
    }
    /** @type {number} */
    var cosDeltaPhi = Math.cos(i);
    /** @type {number} */
    var sinDeltaPhi = Math.sin(i);
    /** @type {number} */
    var normWoH = Math.cos(lat);
    /** @type {number} */
    var spacing = Math.sin(lat);
    return invert.invert = function(a, val) {
      /** @type {number} */
      var radius = Math.cos(val);
      /** @type {number} */
      var x = Math.cos(a) * radius;
      /** @type {number} */
      var j = Math.sin(a) * radius;
      /** @type {number} */
      var i = Math.sin(val);
      /** @type {number} */
      var k = i * normWoH - j * spacing;
      return [Math.atan2(j * normWoH + i * spacing, x * cosDeltaPhi + k * sinDeltaPhi), sin(k * cosDeltaPhi - x * sinDeltaPhi)];
    }, invert;
  }
  /**
   * @param {number} radius
   * @param {number} precision
   * @return {?}
   */
  function d3_geo_circleInterpolate(radius, precision) {
    /** @type {number} */
    var cosRadius = Math.cos(radius);
    /** @type {number} */
    var sinRadius = Math.sin(radius);
    return function(t0, t1, direction, block) {
      /** @type {number} */
      var step = direction * precision;
      if (null != t0) {
        t0 = circleRadius(cosRadius, t0);
        t1 = circleRadius(cosRadius, t1);
        if (direction > 0 ? t1 > t0 : t0 > t1) {
          t0 = t0 + direction * tau;
        }
      } else {
        t0 = radius + direction * tau;
        /** @type {number} */
        t1 = radius - .5 * step;
      }
      var object;
      /** @type {number} */
      var t = t0;
      for (; direction > 0 ? t > t1 : t1 > t; t = t - step) {
        block.point((object = ceil([cosRadius, -sinRadius * Math.cos(t), -sinRadius * Math.sin(t)]))[0], object[1]);
      }
    };
  }
  /**
   * @param {number} cosRadius
   * @param {number} x
   * @return {?}
   */
  function circleRadius(cosRadius, x) {
    var end = point(x);
    end[0] -= cosRadius;
    cos(end);
    var radius = acos(-end[1]);
    return ((-end[2] < 0 ? -radius : radius) + 2 * Math.PI - epsilon) % (2 * Math.PI);
  }
  /**
   * @param {number} x
   * @param {number} n
   * @param {number} step
   * @return {?}
   */
  function next(x, n, step) {
    var b = d3.range(x, n - epsilon, step).concat(n);
    return function(a) {
      return b.map(function(b) {
        return [a, b];
      });
    };
  }
  /**
   * @param {number} r
   * @param {number} p
   * @param {number} step
   * @return {?}
   */
  function reset(r, p, step) {
    var widthArray = d3.range(r, p - epsilon, step).concat(p);
    return function(a) {
      return widthArray.map(function(b) {
        return [b, a];
      });
    };
  }
  /**
   * @param {!Object} src
   * @return {?}
   */
  function source(src) {
    return src.source;
  }
  /**
   * @param {!Event} event
   * @return {?}
   */
  function end(event) {
    return event.target;
  }
  /**
   * @param {number} c
   * @param {number} d
   * @param {number} i
   * @param {number} x
   * @return {?}
   */
  function tick(c, d, i, x) {
    /** @type {number} */
    var r = Math.cos(d);
    /** @type {number} */
    var b1 = Math.sin(d);
    /** @type {number} */
    var width = Math.cos(x);
    /** @type {number} */
    var d1 = Math.sin(x);
    /** @type {number} */
    var h0 = r * Math.cos(c);
    /** @type {number} */
    var h1 = r * Math.sin(c);
    /** @type {number} */
    var w1 = width * Math.cos(i);
    /** @type {number} */
    var w0 = width * Math.sin(i);
    /** @type {number} */
    var t = 2 * Math.asin(Math.sqrt(pos(x - d) + r * width * pos(i - c)));
    /** @type {number} */
    var s = 1 / Math.sin(t);
    /** @type {!Function} */
    var target = t ? function(r) {
      /** @type {number} */
      var b = Math.sin(r = r * t) * s;
      /** @type {number} */
      var d = Math.sin(t - r) * s;
      /** @type {number} */
      var y = d * h0 + b * w1;
      /** @type {number} */
      var x = d * h1 + b * w0;
      /** @type {number} */
      var i = d * b1 + b * d1;
      return [Math.atan2(x, y) * scale, Math.atan2(i, Math.sqrt(y * y + x * x)) * scale];
    } : function() {
      return [c * scale, d * scale];
    };
    return target.distance = t, target;
  }
  /**
   * @return {undefined}
   */
  function d3_geo_lengthLineStart() {
    /**
     * @param {number} index
     * @param {number} x
     * @return {undefined}
     */
    function nextPoint(index, x) {
      /** @type {number} */
      var w = Math.sin(x = x * factor);
      /** @type {number} */
      var f = Math.cos(x);
      /** @type {number} */
      var t = abs((index = index * factor) - start);
      /** @type {number} */
      var h = Math.cos(t);
      Ji = Ji + Math.atan2(Math.sqrt((t = f * Math.sin(t)) * t + (t = r * w - c * f * h) * t), c * w + r * f * h);
      /** @type {number} */
      start = index;
      /** @type {number} */
      c = w;
      /** @type {number} */
      r = f;
    }
    var start;
    var c;
    var r;
    /**
     * @param {number} num
     * @param {number} x
     * @return {undefined}
     */
    d3_geo_length.point = function(num, x) {
      /** @type {number} */
      start = num * factor;
      /** @type {number} */
      c = Math.sin(x = x * factor);
      /** @type {number} */
      r = Math.cos(x);
      /** @type {function(number, number): undefined} */
      d3_geo_length.point = nextPoint;
    };
    /**
     * @return {undefined}
     */
    d3_geo_length.lineEnd = function() {
      /** @type {function(): undefined} */
      d3_geo_length.point = d3_geo_length.lineEnd = d3_noop;
    };
  }
  /**
   * @param {!Function} a
   * @param {!Function} fn
   * @return {?}
   */
  function read(a, fn) {
    /**
     * @param {?} ang
     * @param {?} v
     * @return {?}
     */
    function c(ang, v) {
      /** @type {number} */
      var ax = Math.cos(ang);
      /** @type {number} */
      var t = Math.cos(v);
      var f = a(ax * t);
      return [f * t * Math.sin(ang), f * Math.sin(v)];
    }
    return c.invert = function(y, x) {
      /** @type {number} */
      var c = Math.sqrt(y * y + x * x);
      var a = fn(c);
      /** @type {number} */
      var p = Math.sin(a);
      /** @type {number} */
      var rh = Math.cos(a);
      return [Math.atan2(y * p, c * rh), Math.asin(c && x * p / c)];
    }, c;
  }
  /**
   * @param {number} a
   * @param {undefined} b
   * @return {?}
   */
  function loop(a, b) {
    /**
     * @param {number} i
     * @param {number} x
     * @return {?}
     */
    function f(i, x) {
      if (y > 0) {
        if (-halfPi + epsilon > x) {
          /** @type {number} */
          x = -halfPi + epsilon;
        }
      } else {
        if (x > halfPi - epsilon) {
          /** @type {number} */
          x = halfPi - epsilon;
        }
      }
      /** @type {number} */
      var percentage = y / Math.pow(get(x), t);
      return [percentage * Math.sin(t * i), y - percentage * Math.cos(t * i)];
    }
    /** @type {number} */
    var d = Math.cos(a);
    /**
     * @param {number} component
     * @return {?}
     */
    var get = function(component) {
      return Math.tan(val / 4 + component / 2);
    };
    /** @type {number} */
    var t = a === b ? Math.sin(a) : Math.log(d / Math.cos(b)) / Math.log(get(b) / get(a));
    /** @type {number} */
    var y = d * Math.pow(get(a), t) / t;
    return t ? (f.invert = function(a, x) {
      /** @type {number} */
      var b = y - x;
      /** @type {number} */
      var scale = range(t) * Math.sqrt(a * a + b * b);
      return [Math.atan2(a, b) / t, 2 * Math.atan(Math.pow(y / scale, 1 / t)) - halfPi];
    }, f) : text;
  }
  /**
   * @param {number} a
   * @param {number} b
   * @return {?}
   */
  function string(a, b) {
    /**
     * @param {number} phi
     * @param {?} t
     * @return {?}
     */
    function rotation(phi, t) {
      /** @type {number} */
      var w = i - t;
      return [w * Math.sin(n * phi), i - w * Math.cos(n * phi)];
    }
    /** @type {number} */
    var c = Math.cos(a);
    /** @type {number} */
    var n = a === b ? Math.sin(a) : (c - Math.cos(b)) / (b - a);
    var i = c / n + a;
    return abs(n) < epsilon ? s : (rotation.invert = function(b, h) {
      /** @type {number} */
      var d = i - h;
      return [Math.atan2(b, d) / n, i - range(n) * Math.sqrt(b * b + d * d)];
    }, rotation);
  }
  /**
   * @param {?} text
   * @param {number} maxWidth
   * @return {?}
   */
  function text(text, maxWidth) {
    return [text, Math.log(Math.tan(val / 4 + maxWidth / 2))];
  }
  /**
   * @param {string} content
   * @return {?}
   */
  function trackTransforms(content) {
    var remainder;
    var p = transform(content);
    /** @type {function(): ?} */
    var s = p.scale;
    /** @type {function(): ?} */
    var t = p.translate;
    /** @type {function(!Object): ?} */
    var f = p.clipExtent;
    return p.scale = function() {
      var result = s.apply(p, arguments);
      return result === p ? remainder ? p.clipExtent(null) : p : result;
    }, p.translate = function() {
      var result = t.apply(p, arguments);
      return result === p ? remainder ? p.clipExtent(null) : p : result;
    }, p.clipExtent = function(_) {
      var p2 = f.apply(p, arguments);
      if (p2 === p) {
        if (remainder = null == _) {
          /** @type {number} */
          var h = val * s();
          var pos = t();
          f([[pos[0] - h, pos[1] - h], [pos[0] + h, pos[1] + h]]);
        }
      } else {
        if (remainder) {
          /** @type {null} */
          p2 = null;
        }
      }
      return p2;
    }, p.clipExtent(null);
  }
  /**
   * @param {?} msg
   * @param {number} level
   * @return {?}
   */
  function raw(msg, level) {
    return [Math.log(Math.tan(val / 4 + level / 2)), -msg];
  }
  /**
   * @param {!Object} key
   * @return {?}
   */
  function holder(key) {
    return key[0];
  }
  /**
   * @param {!Object} _
   * @return {?}
   */
  function target(_) {
    return _[1];
  }
  /**
   * @param {!Array} str
   * @return {?}
   */
  function hmsToNPT(str) {
    var i = str.length;
    /** @type {!Array} */
    var pageItems = [0, 1];
    /** @type {number} */
    var pageSize = 2;
    /** @type {number} */
    var min = 2;
    for (; i > min; min++) {
      for (; pageSize > 1 && base64ToNum(str[pageItems[pageSize - 2]], str[pageItems[pageSize - 1]], str[min]) <= 0;) {
        --pageSize;
      }
      /** @type {number} */
      pageItems[pageSize++] = min;
    }
    return pageItems.slice(0, pageSize);
  }
  /**
   * @param {!Object} a
   * @param {!Object} b
   * @return {?}
   */
  function rolesComparator(a, b) {
    return a[0] - b[0] || a[1] - b[1];
  }
  /**
   * @param {!Object} a
   * @param {!Object} b
   * @param {!Object} c
   * @return {?}
   */
  function out(a, b, c) {
    return (c[0] - b[0]) * (a[1] - b[1]) < (c[1] - b[1]) * (a[0] - b[0]);
  }
  /**
   * @param {!Object} s
   * @param {!Object} p
   * @param {!Object} a
   * @param {!Object} e
   * @return {?}
   */
  function format(s, p, a, e) {
    var x = s[0];
    var z = a[0];
    /** @type {number} */
    var i = p[0] - x;
    /** @type {number} */
    var f = e[0] - z;
    var y = s[1];
    var start = a[1];
    /** @type {number} */
    var h = p[1] - y;
    /** @type {number} */
    var d = e[1] - start;
    /** @type {number} */
    var sign = (f * (y - start) - d * (x - z)) / (d * i - f * h);
    return [x + sign * i, y + sign * h];
  }
  /**
   * @param {!Object} regex
   * @return {?}
   */
  function join(regex) {
    var regLevel = regex[0];
    var invalidLine = regex[regex.length - 1];
    return !(regLevel[0] - invalidLine[0] || regLevel[1] - invalidLine[1]);
  }
  /**
   * @return {undefined}
   */
  function d3_geom_voronoiBeach() {
    d3_geom_voronoiRedBlackNode(this);
    /** @type {null} */
    this.edge = this.site = this.circle = null;
  }
  /**
   * @param {!Object} site
   * @return {?}
   */
  function d3_geom_voronoiCreateBeach(site) {
    var me = insertStack.pop() || new d3_geom_voronoiBeach;
    return me.site = site, me;
  }
  /**
   * @param {(Object|string)} node
   * @return {undefined}
   */
  function d3_geom_voronoiDetachBeach(node) {
    d3_geom_voronoiDetachCircle(node);
    d3_geom_voronoiBeaches.remove(node);
    insertStack.push(node);
    d3_geom_voronoiRedBlackNode(node);
  }
  /**
   * @param {!Object} beach
   * @return {undefined}
   */
  function d3_geom_voronoiRemoveBeach(beach) {
    var circle = beach.circle;
    var x = circle.x;
    var y = circle.cy;
    var vertex = {
      x : x,
      y : y
    };
    var previous = beach.P;
    var next = beach.N;
    /** @type {!Array} */
    var disappearing = [beach];
    d3_geom_voronoiDetachBeach(beach);
    var lArc = previous;
    for (; lArc.circle && abs(x - lArc.circle.x) < epsilon && abs(y - lArc.circle.cy) < epsilon;) {
      previous = lArc.P;
      disappearing.unshift(lArc);
      d3_geom_voronoiDetachBeach(lArc);
      lArc = previous;
    }
    disappearing.unshift(lArc);
    d3_geom_voronoiDetachCircle(lArc);
    var rArc = next;
    for (; rArc.circle && abs(x - rArc.circle.x) < epsilon && abs(y - rArc.circle.cy) < epsilon;) {
      next = rArc.N;
      disappearing.push(rArc);
      d3_geom_voronoiDetachBeach(rArc);
      rArc = next;
    }
    disappearing.push(rArc);
    d3_geom_voronoiDetachCircle(rArc);
    var iArc;
    /** @type {number} */
    var nArcs = disappearing.length;
    /** @type {number} */
    iArc = 1;
    for (; nArcs > iArc; ++iArc) {
      rArc = disappearing[iArc];
      lArc = disappearing[iArc - 1];
      d3_geom_voronoiSetEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
    }
    lArc = disappearing[0];
    rArc = disappearing[nArcs - 1];
    rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, rArc.site, null, vertex);
    d3_geom_voronoiAttachCircle(lArc);
    d3_geom_voronoiAttachCircle(rArc);
  }
  /**
   * @param {!Object} site
   * @return {?}
   */
  function d3_geom_voronoiAddBeach(site) {
    var lArc;
    var rArc;
    var dxl;
    var dxr;
    var x = site.x;
    var directrix = site.y;
    var node = d3_geom_voronoiBeaches._;
    for (; node;) {
      if (dxl = d3_geom_voronoiLeftBreakPoint(node, directrix) - x, dxl > epsilon) {
        node = node.L;
      } else {
        if (dxr = x - d3_geom_voronoiRightBreakPoint(node, directrix), !(dxr > epsilon)) {
          if (dxl > -epsilon) {
            lArc = node.P;
            rArc = node;
          } else {
            if (dxr > -epsilon) {
              lArc = node;
              rArc = node.N;
            } else {
              lArc = rArc = node;
            }
          }
          break;
        }
        if (!node.R) {
          lArc = node;
          break;
        }
        node = node.R;
      }
    }
    var newArc = d3_geom_voronoiCreateBeach(site);
    if (d3_geom_voronoiBeaches.insert(lArc, newArc), lArc || rArc) {
      if (lArc === rArc) {
        return d3_geom_voronoiDetachCircle(lArc), rArc = d3_geom_voronoiCreateBeach(lArc.site), d3_geom_voronoiBeaches.insert(newArc, rArc), newArc.edge = rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site), d3_geom_voronoiAttachCircle(lArc), void d3_geom_voronoiAttachCircle(rArc);
      }
      if (!rArc) {
        return void(newArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site));
      }
      d3_geom_voronoiDetachCircle(lArc);
      d3_geom_voronoiDetachCircle(rArc);
      var lSite = lArc.site;
      var ax = lSite.x;
      var ay = lSite.y;
      /** @type {number} */
      var bx = site.x - ax;
      /** @type {number} */
      var by = site.y - ay;
      var rSite = rArc.site;
      /** @type {number} */
      var cx = rSite.x - ax;
      /** @type {number} */
      var cy = rSite.y - ay;
      /** @type {number} */
      var d = 2 * (bx * cy - by * cx);
      /** @type {number} */
      var hb = bx * bx + by * by;
      /** @type {number} */
      var hc = cx * cx + cy * cy;
      var vertex = {
        x : (cy * hb - by * hc) / d + ax,
        y : (bx * hc - cx * hb) / d + ay
      };
      d3_geom_voronoiSetEdgeEnd(rArc.edge, lSite, rSite, vertex);
      newArc.edge = d3_geom_voronoiCreateEdge(lSite, site, null, vertex);
      rArc.edge = d3_geom_voronoiCreateEdge(site, rSite, null, vertex);
      d3_geom_voronoiAttachCircle(lArc);
      d3_geom_voronoiAttachCircle(rArc);
    }
  }
  /**
   * @param {!Object} arc
   * @param {?} directrix
   * @return {?}
   */
  function d3_geom_voronoiLeftBreakPoint(arc, directrix) {
    var site = arc.site;
    var rfocx = site.x;
    var rfocy = site.y;
    /** @type {number} */
    var pby2 = rfocy - directrix;
    if (!pby2) {
      return rfocx;
    }
    var lArc = arc.P;
    if (!lArc) {
      return -1 / 0;
    }
    site = lArc.site;
    var lfocx = site.x;
    var lfocy = site.y;
    /** @type {number} */
    var plby2 = lfocy - directrix;
    if (!plby2) {
      return lfocx;
    }
    /** @type {number} */
    var hl = lfocx - rfocx;
    /** @type {number} */
    var aby2 = 1 / pby2 - 1 / plby2;
    /** @type {number} */
    var b = hl / plby2;
    return aby2 ? (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx : (rfocx + lfocx) / 2;
  }
  /**
   * @param {!Object} arc
   * @param {?} directrix
   * @return {?}
   */
  function d3_geom_voronoiRightBreakPoint(arc, directrix) {
    var rArc = arc.N;
    if (rArc) {
      return d3_geom_voronoiLeftBreakPoint(rArc, directrix);
    }
    var site = arc.site;
    return site.y === directrix ? site.x : 1 / 0;
  }
  /**
   * @param {string} site
   * @return {undefined}
   */
  function d3_geom_voronoiCell(site) {
    /** @type {string} */
    this.site = site;
    /** @type {!Array} */
    this.edges = [];
  }
  /**
   * @param {!Object} extent
   * @return {undefined}
   */
  function d3_geom_voronoiCloseCells(extent) {
    var x;
    var y;
    var x1;
    var y1;
    var cell;
    var iHalfEdge;
    var halfEdges;
    var nHalfEdges;
    var rightPointCoords;
    var end;
    var x0 = extent[0][0];
    var endX = extent[1][0];
    var y0 = extent[0][1];
    var endY = extent[1][1];
    var cells = d3_geom_voronoiCells;
    var i = cells.length;
    for (; i--;) {
      if (cell = cells[i], cell && cell.prepare()) {
        halfEdges = cell.edges;
        nHalfEdges = halfEdges.length;
        /** @type {number} */
        iHalfEdge = 0;
        for (; nHalfEdges > iHalfEdge;) {
          end = halfEdges[iHalfEdge].end();
          x1 = end.x;
          y1 = end.y;
          rightPointCoords = halfEdges[++iHalfEdge % nHalfEdges].start();
          x = rightPointCoords.x;
          y = rightPointCoords.y;
          if (abs(x1 - x) > epsilon || abs(y1 - y) > epsilon) {
            halfEdges.splice(iHalfEdge, 0, new d3_geom_voronoiHalfEdge(d3_geom_voronoiCreateBorderEdge(cell.site, end, abs(x1 - x0) < epsilon && endY - y1 > epsilon ? {
              x : x0,
              y : abs(x - x0) < epsilon ? y : endY
            } : abs(y1 - endY) < epsilon && endX - x1 > epsilon ? {
              x : abs(y - endY) < epsilon ? x : endX,
              y : endY
            } : abs(x1 - endX) < epsilon && y1 - y0 > epsilon ? {
              x : endX,
              y : abs(x - endX) < epsilon ? y : y0
            } : abs(y1 - y0) < epsilon && x1 - x0 > epsilon ? {
              x : abs(y - y0) < epsilon ? x : x0,
              y : y0
            } : null), cell.site, null));
            ++nHalfEdges;
          }
        }
      }
    }
  }
  /**
   * @param {!Object} a
   * @param {!Object} b
   * @return {?}
   */
  function v(a, b) {
    return b.angle - a.angle;
  }
  /**
   * @return {undefined}
   */
  function d3_geom_voronoiCircle() {
    d3_geom_voronoiRedBlackNode(this);
    /** @type {null} */
    this.x = this.y = this.arc = this.site = this.cy = null;
  }
  /**
   * @param {!Object} arc
   * @return {undefined}
   */
  function d3_geom_voronoiAttachCircle(arc) {
    var rArc = arc.P;
    var lArc = arc.N;
    if (rArc && lArc) {
      var rSite = rArc.site;
      var cSite = arc.site;
      var lSite = lArc.site;
      if (rSite !== lSite) {
        var bx = cSite.x;
        var by = cSite.y;
        /** @type {number} */
        var ax = rSite.x - bx;
        /** @type {number} */
        var ay = rSite.y - by;
        /** @type {number} */
        var cx = lSite.x - bx;
        /** @type {number} */
        var cy = lSite.y - by;
        /** @type {number} */
        var canvasZoom = 2 * (ax * cy - ay * cx);
        if (!(canvasZoom >= -tooLessCounter)) {
          /** @type {number} */
          var ha = ax * ax + ay * ay;
          /** @type {number} */
          var hc = cx * cx + cy * cy;
          /** @type {number} */
          var x = (cy * ha - ay * hc) / canvasZoom;
          /** @type {number} */
          var y = (ax * hc - cx * ha) / canvasZoom;
          cy = y + by;
          var circle = d3_geom_voronoiCirclePool.pop() || new d3_geom_voronoiCircle;
          /** @type {!Object} */
          circle.arc = arc;
          circle.site = cSite;
          circle.x = x + bx;
          circle.y = cy + Math.sqrt(x * x + y * y);
          circle.cy = cy;
          arc.circle = circle;
          /** @type {null} */
          var before = null;
          var node = d3_geom_voronoiCircles._;
          for (; node;) {
            if (circle.y < node.y || circle.y === node.y && circle.x <= node.x) {
              if (!node.L) {
                before = node.P;
                break;
              }
              node = node.L;
            } else {
              if (!node.R) {
                before = node;
                break;
              }
              node = node.R;
            }
          }
          d3_geom_voronoiCircles.insert(before, circle);
          if (!before) {
            d3_geom_voronoiFirstCircle = circle;
          }
        }
      }
    }
  }
  /**
   * @param {!Object} arc
   * @return {undefined}
   */
  function d3_geom_voronoiDetachCircle(arc) {
    var circle = arc.circle;
    if (circle) {
      if (!circle.P) {
        d3_geom_voronoiFirstCircle = circle.N;
      }
      d3_geom_voronoiCircles.remove(circle);
      d3_geom_voronoiCirclePool.push(circle);
      d3_geom_voronoiRedBlackNode(circle);
      /** @type {null} */
      arc.circle = null;
    }
  }
  /**
   * @param {!Object} extent
   * @return {undefined}
   */
  function d3_geom_voronoiClipEdges(extent) {
    var e;
    var edges = d3_geom_voronoiEdges;
    var clip = d3_geom_clipLine(extent[0][0], extent[0][1], extent[1][0], extent[1][1]);
    var i = edges.length;
    for (; i--;) {
      e = edges[i];
      if (!d3_geom_voronoiConnectEdge(e, extent) || !clip(e) || abs(e.a.x - e.b.x) < epsilon && abs(e.a.y - e.b.y) < epsilon) {
        /** @type {null} */
        e.a = e.b = null;
        edges.splice(i, 1);
      }
    }
  }
  /**
   * @param {!Object} edge
   * @param {!Object} extent
   * @return {?}
   */
  function d3_geom_voronoiConnectEdge(edge, extent) {
    var vb = edge.b;
    if (vb) {
      return true;
    }
    var scale;
    var offset;
    var va = edge.a;
    var value = extent[0][0];
    var x1 = extent[1][0];
    var y = extent[0][1];
    var j = extent[1][1];
    var lSite = edge.l;
    var rSite = edge.r;
    var lx = lSite.x;
    var ly = lSite.y;
    var rx = rSite.x;
    var ry = rSite.y;
    /** @type {number} */
    var index = (lx + rx) / 2;
    /** @type {number} */
    var width = (ly + ry) / 2;
    if (ry === ly) {
      if (value > index || index >= x1) {
        return;
      }
      if (lx > rx) {
        if (va) {
          if (va.y >= j) {
            return;
          }
        } else {
          va = {
            x : index,
            y : y
          };
        }
        vb = {
          x : index,
          y : j
        };
      } else {
        if (va) {
          if (va.y < y) {
            return;
          }
        } else {
          va = {
            x : index,
            y : j
          };
        }
        vb = {
          x : index,
          y : y
        };
      }
    } else {
      if (scale = (lx - rx) / (ry - ly), offset = width - scale * index, -1 > scale || scale > 1) {
        if (lx > rx) {
          if (va) {
            if (va.y >= j) {
              return;
            }
          } else {
            va = {
              x : (y - offset) / scale,
              y : y
            };
          }
          vb = {
            x : (j - offset) / scale,
            y : j
          };
        } else {
          if (va) {
            if (va.y < y) {
              return;
            }
          } else {
            va = {
              x : (j - offset) / scale,
              y : j
            };
          }
          vb = {
            x : (y - offset) / scale,
            y : y
          };
        }
      } else {
        if (ry > ly) {
          if (va) {
            if (va.x >= x1) {
              return;
            }
          } else {
            va = {
              x : value,
              y : scale * value + offset
            };
          }
          vb = {
            x : x1,
            y : scale * x1 + offset
          };
        } else {
          if (va) {
            if (va.x < value) {
              return;
            }
          } else {
            va = {
              x : x1,
              y : scale * x1 + offset
            };
          }
          vb = {
            x : value,
            y : scale * value + offset
          };
        }
      }
    }
    return edge.a = va, edge.b = vb, true;
  }
  /**
   * @param {number} lSite
   * @param {number} rSite
   * @return {undefined}
   */
  function d3_geom_voronoiEdge(lSite, rSite) {
    /** @type {number} */
    this.l = lSite;
    /** @type {number} */
    this.r = rSite;
    /** @type {null} */
    this.a = this.b = null;
  }
  /**
   * @param {!Object} lSite
   * @param {!Object} rSite
   * @param {!Function} va
   * @param {!Function} vb
   * @return {?}
   */
  function d3_geom_voronoiCreateEdge(lSite, rSite, va, vb) {
    var edge = new d3_geom_voronoiEdge(lSite, rSite);
    return d3_geom_voronoiEdges.push(edge), va && d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, va), vb && d3_geom_voronoiSetEdgeEnd(edge, rSite, lSite, vb), d3_geom_voronoiCells[lSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, lSite, rSite)), d3_geom_voronoiCells[rSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, rSite, lSite)), edge;
  }
  /**
   * @param {?} lSite
   * @param {number} va
   * @param {number} vb
   * @return {?}
   */
  function d3_geom_voronoiCreateBorderEdge(lSite, va, vb) {
    var edge = new d3_geom_voronoiEdge(lSite, null);
    return edge.a = va, edge.b = vb, d3_geom_voronoiEdges.push(edge), edge;
  }
  /**
   * @param {!Object} edge
   * @param {!Object} lSite
   * @param {!Object} rSite
   * @param {string} vertex
   * @return {undefined}
   */
  function d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, vertex) {
    if (edge.a || edge.b) {
      if (edge.l === rSite) {
        /** @type {string} */
        edge.b = vertex;
      } else {
        /** @type {string} */
        edge.a = vertex;
      }
    } else {
      /** @type {string} */
      edge.a = vertex;
      /** @type {!Object} */
      edge.l = lSite;
      /** @type {!Object} */
      edge.r = rSite;
    }
  }
  /**
   * @param {!Object} edge
   * @param {!Object} lSite
   * @param {number} rSite
   * @return {undefined}
   */
  function d3_geom_voronoiHalfEdge(edge, lSite, rSite) {
    var va = edge.a;
    var vb = edge.b;
    /** @type {!Object} */
    this.edge = edge;
    /** @type {!Object} */
    this.site = lSite;
    /** @type {number} */
    this.angle = rSite ? Math.atan2(rSite.y - lSite.y, rSite.x - lSite.x) : edge.l === lSite ? Math.atan2(vb.x - va.x, va.y - vb.y) : Math.atan2(va.x - vb.x, vb.y - va.y);
  }
  /**
   * @return {undefined}
   */
  function d3_geom_voronoiRedBlackTree() {
    /** @type {null} */
    this._ = null;
  }
  /**
   * @param {!Object} node
   * @return {undefined}
   */
  function d3_geom_voronoiRedBlackNode(node) {
    /** @type {null} */
    node.U = node.C = node.L = node.R = node.P = node.N = null;
  }
  /**
   * @param {!Object} tree
   * @param {!Object} node
   * @return {undefined}
   */
  function d3_geom_voronoiRedBlackRotateLeft(tree, node) {
    /** @type {!Object} */
    var p = node;
    var q = node.R;
    var parent = p.U;
    if (parent) {
      if (parent.L === p) {
        parent.L = q;
      } else {
        parent.R = q;
      }
    } else {
      tree._ = q;
    }
    q.U = parent;
    p.U = q;
    p.R = q.L;
    if (p.R) {
      p.R.U = p;
    }
    q.L = p;
  }
  /**
   * @param {!Object} tree
   * @param {!Object} node
   * @return {undefined}
   */
  function d3_geom_voronoiRedBlackRotateRight(tree, node) {
    /** @type {!Object} */
    var p = node;
    var q = node.L;
    var parent = p.U;
    if (parent) {
      if (parent.L === p) {
        parent.L = q;
      } else {
        parent.R = q;
      }
    } else {
      tree._ = q;
    }
    q.U = parent;
    p.U = q;
    p.L = q.R;
    if (p.L) {
      p.L.U = p;
    }
    q.R = p;
  }
  /**
   * @param {?} node
   * @return {?}
   */
  function d3_geom_voronoiRedBlackFirst(node) {
    for (; node.L;) {
      node = node.L;
    }
    return node;
  }
  /**
   * @param {!Array} sites
   * @param {!Object} bbox
   * @return {?}
   */
  function d3_geom_voronoi(sites, bbox) {
    var x0;
    var y0;
    var circle;
    var site = sites.sort(key).pop();
    /** @type {!Array} */
    d3_geom_voronoiEdges = [];
    /** @type {!Array} */
    d3_geom_voronoiCells = new Array(sites.length);
    d3_geom_voronoiBeaches = new d3_geom_voronoiRedBlackTree;
    d3_geom_voronoiCircles = new d3_geom_voronoiRedBlackTree;
    for (;;) {
      if (circle = d3_geom_voronoiFirstCircle, site && (!circle || site.y < circle.y || site.y === circle.y && site.x < circle.x)) {
        if (site.x !== x0 || site.y !== y0) {
          d3_geom_voronoiCells[site.i] = new d3_geom_voronoiCell(site);
          d3_geom_voronoiAddBeach(site);
          x0 = site.x;
          y0 = site.y;
        }
        site = sites.pop();
      } else {
        if (!circle) {
          break;
        }
        d3_geom_voronoiRemoveBeach(circle.arc);
      }
    }
    if (bbox) {
      d3_geom_voronoiClipEdges(bbox);
      d3_geom_voronoiCloseCells(bbox);
    }
    var data = {
      cells : d3_geom_voronoiCells,
      edges : d3_geom_voronoiEdges
    };
    return d3_geom_voronoiBeaches = d3_geom_voronoiCircles = d3_geom_voronoiEdges = d3_geom_voronoiCells = null, data;
  }
  /**
   * @param {!Object} a
   * @param {!Object} b
   * @return {?}
   */
  function key(a, b) {
    return b.y - a.y || b.x - a.x;
  }
  /**
   * @param {!Object} a
   * @param {!Object} b
   * @param {!Object} c
   * @return {?}
   */
  function d3_geom_voronoiTriangleArea(a, b, c) {
    return (a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y);
  }
  /**
   * @param {!Object} val
   * @return {?}
   */
  function y(val) {
    return val.x;
  }
  /**
   * @param {!Object} p
   * @return {?}
   */
  function padding(p) {
    return p.y;
  }
  /**
   * @return {?}
   */
  function random() {
    return {
      leaf : true,
      nodes : [],
      point : null,
      x : null,
      y : null
    };
  }
  /**
   * @param {?} fn
   * @param {!Node} ctx
   * @param {number} val
   * @param {number} e
   * @param {number} type
   * @param {number} callback
   * @return {undefined}
   */
  function debug(fn, ctx, val, e, type, callback) {
    if (!fn(ctx, val, e, type, callback)) {
      /** @type {number} */
      var error = .5 * (val + type);
      /** @type {number} */
      var connected = .5 * (e + callback);
      var data = ctx.nodes;
      if (data[0]) {
        debug(fn, data[0], val, e, error, connected);
      }
      if (data[1]) {
        debug(fn, data[1], error, e, type, connected);
      }
      if (data[2]) {
        debug(fn, data[2], val, connected, error, callback);
      }
      if (data[3]) {
        debug(fn, data[3], error, connected, type, callback);
      }
    }
  }
  /**
   * @param {!Object} a
   * @param {!Object} val
   * @return {?}
   */
  function update(a, val) {
    a = d3.rgb(a);
    val = d3.rgb(val);
    var r = a.r;
    var y = a.g;
    var x = a.b;
    /** @type {number} */
    var j = val.r - r;
    /** @type {number} */
    var height = val.g - y;
    /** @type {number} */
    var width = val.b - x;
    return function(t) {
      return "#" + d3_rgb_hex(Math.round(r + j * t)) + d3_rgb_hex(Math.round(y + height * t)) + d3_rgb_hex(Math.round(x + width * t));
    };
  }
  /**
   * @param {!Object} a
   * @param {!Object} b
   * @return {?}
   */
  function tweenArc(a, b) {
    var key;
    var tweenFns = {};
    var newSet = {};
    for (key in a) {
      if (key in b) {
        tweenFns[key] = interpolate(a[key], b[key]);
      } else {
        newSet[key] = a[key];
      }
    }
    for (key in b) {
      if (!(key in a)) {
        newSet[key] = b[key];
      }
    }
    return function(elapsed) {
      for (key in tweenFns) {
        newSet[key] = tweenFns[key](elapsed);
      }
      return newSet;
    };
  }
  /**
   * @param {?} a
   * @param {number} b
   * @return {?}
   */
  function push(a, b) {
    return b = b - (a = +a), function(i) {
      return a + b * i;
    };
  }
  /**
   * @param {string} input
   * @param {string} x
   * @return {?}
   */
  function setup(input, x) {
    var a;
    var b;
    var c;
    /** @type {number} */
    var i = lineBreak.lastIndex = nameParse.lastIndex = 0;
    /** @type {number} */
    var j = -1;
    /** @type {!Array} */
    var array = [];
    /** @type {!Array} */
    var result = [];
    /** @type {string} */
    input = input + "";
    /** @type {string} */
    x = x + "";
    for (; (a = lineBreak.exec(input)) && (b = nameParse.exec(x));) {
      if ((c = b.index) > i) {
        /** @type {string} */
        c = x.substring(i, c);
        if (array[j]) {
          array[j] += c;
        } else {
          /** @type {string} */
          array[++j] = c;
        }
      }
      if ((a = a[0]) === (b = b[0])) {
        if (array[j]) {
          array[j] += b;
        } else {
          /** @type {string} */
          array[++j] = b;
        }
      } else {
        /** @type {null} */
        array[++j] = null;
        result.push({
          i : j,
          x : push(a, b)
        });
      }
      /** @type {number} */
      i = nameParse.lastIndex;
    }
    return i < x.length && (c = x.substring(i), array[j] ? array[j] += c : array[++j] = c), array.length < 2 ? result[0] ? (x = result[0].x, function(input) {
      return x(input) + "";
    }) : function() {
      return x;
    } : (x = result.length, function(i) {
      var last;
      /** @type {number} */
      var key = 0;
      for (; x > key; ++key) {
        array[(last = result[key]).i] = last.x(i);
      }
      return array.join("");
    });
  }
  /**
   * @param {!Function} a
   * @param {string} b
   * @return {?}
   */
  function interpolate(a, b) {
    var result;
    /** @type {number} */
    var i = d3.interpolators.length;
    for (; --i >= 0 && !(result = d3.interpolators[i](a, b));) {
    }
    return result;
  }
  /**
   * @param {!Object} a
   * @param {!Object} b
   * @return {?}
   */
  function get(a, b) {
    var key;
    /** @type {!Array} */
    var properties = [];
    /** @type {!Array} */
    var c = [];
    var x = a.length;
    var index = b.length;
    /** @type {number} */
    var id = Math.min(a.length, b.length);
    /** @type {number} */
    key = 0;
    for (; id > key; ++key) {
      properties.push(interpolate(a[key], b[key]));
    }
    for (; x > key; ++key) {
      c[key] = a[key];
    }
    for (; index > key; ++key) {
      c[key] = b[key];
    }
    return function(value) {
      /** @type {number} */
      key = 0;
      for (; id > key; ++key) {
        c[key] = properties[key](value);
      }
      return c;
    };
  }
  /**
   * @param {?} easingFn
   * @return {?}
   */
  function navigateTo(easingFn) {
    return function(curTime) {
      return 0 >= curTime ? 0 : curTime >= 1 ? 1 : easingFn(curTime);
    };
  }
  /**
   * @param {!Object} callback
   * @return {?}
   */
  function tag(callback) {
    return function(b) {
      return 1 - callback(1 - b);
    };
  }
  /**
   * @param {?} cb
   * @return {?}
   */
  function expect(cb) {
    return function(n) {
      return .5 * (.5 > n ? cb(2 * n) : 2 - cb(2 - 2 * n));
    };
  }
  /**
   * @param {?} expected
   * @return {?}
   */
  function checkMetaTwt(expected) {
    return expected * expected;
  }
  /**
   * @param {number} y
   * @return {?}
   */
  function linear(y) {
    return y * y * y;
  }
  /**
   * @param {number} value
   * @return {?}
   */
  function ease(value) {
    if (0 >= value) {
      return 0;
    }
    if (value >= 1) {
      return 1;
    }
    /** @type {number} */
    var width = value * value;
    /** @type {number} */
    var max = width * value;
    return 4 * (.5 > value ? max : 3 * (value - width) + max - .75);
  }
  /**
   * @param {?} howManyToRound
   * @return {?}
   */
  function f_term(howManyToRound) {
    return function(preLabValue) {
      return Math.pow(preLabValue, howManyToRound);
    };
  }
  /**
   * @param {number} direction
   * @return {?}
   */
  function vectorize_2d(direction) {
    return 1 - Math.cos(direction * halfPi);
  }
  /**
   * @param {number} ch
   * @return {?}
   */
  function getVal(ch) {
    return Math.pow(2, 10 * (ch - 1));
  }
  /**
   * @param {?} yRadius
   * @return {?}
   */
  function circle(yRadius) {
    return 1 - Math.sqrt(1 - yRadius * yRadius);
  }
  /**
   * @param {number} a
   * @param {number} p
   * @return {?}
   */
  function ElasticEaseIn(a, p) {
    var s;
    return arguments.length < 2 && (p = .45), arguments.length ? s = p / tau * Math.asin(1 / a) : (a = 1, s = p / 4), function(dt) {
      return 1 + a * Math.pow(2, -10 * dt) * Math.sin((dt - s) * tau / p);
    };
  }
  /**
   * @param {number} s
   * @return {?}
   */
  function back(s) {
    return s || (s = 1.70158), function(t) {
      return t * t * ((s + 1) * t - s);
    };
  }
  /**
   * @param {number} theta
   * @return {?}
   */
  function delta(theta) {
    return 1 / 2.75 > theta ? 7.5625 * theta * theta : 2 / 2.75 > theta ? 7.5625 * (theta = theta - 1.5 / 2.75) * theta + .75 : 2.5 / 2.75 > theta ? 7.5625 * (theta = theta - 2.25 / 2.75) * theta + .9375 : 7.5625 * (theta = theta - 2.625 / 2.75) * theta + .984375;
  }
  /**
   * @param {!Object} h
   * @param {!Object} a
   * @return {?}
   */
  function Player(h, a) {
    h = d3.hcl(h);
    a = d3.hcl(a);
    var j = h.h;
    var c = h.c;
    var l = h.l;
    /** @type {number} */
    var i = a.h - j;
    /** @type {number} */
    var b = a.c - c;
    /** @type {number} */
    var w = a.l - l;
    return isNaN(b) && (b = 0, c = isNaN(c) ? a.c : c), isNaN(i) ? (i = 0, j = isNaN(j) ? a.h : j) : i > 180 ? i = i - 360 : -180 > i && (i = i + 360), function(z) {
      return rgb(j + i * z, c + b * z, l + w * z) + "";
    };
  }
  /**
   * @param {!Object} text
   * @param {!Object} color
   * @return {?}
   */
  function generate(text, color) {
    text = d3.hsl(text);
    color = d3.hsl(color);
    var t = text.h;
    var s = text.s;
    var l = text.l;
    /** @type {number} */
    var i = color.h - t;
    /** @type {number} */
    var delta = color.s - s;
    /** @type {number} */
    var w = color.l - l;
    return isNaN(delta) && (delta = 0, s = isNaN(s) ? color.s : s), isNaN(i) ? (i = 0, t = isNaN(t) ? color.h : t) : i > 180 ? i = i - 360 : -180 > i && (i = i + 360), function(r) {
      return d3_hsl_rgb(t + i * r, s + delta * r, l + w * r) + "";
    };
  }
  /**
   * @param {!Object} value
   * @param {!Object} node
   * @return {?}
   */
  function link(value, node) {
    value = d3.lab(value);
    node = d3.lab(node);
    var x = value.l;
    var offset = value.a;
    var y = value.b;
    /** @type {number} */
    var dx = node.l - x;
    /** @type {number} */
    var step = node.a - offset;
    /** @type {number} */
    var height = node.b - y;
    return function(i) {
      return clamp(x + dx * i, offset + step * i, y + height * i) + "";
    };
  }
  /**
   * @param {number} a
   * @param {number} b
   * @return {?}
   */
  function before(a, b) {
    return b = b - a, function(i) {
      return Math.round(a + b * i);
    };
  }
  /**
   * @param {!Object} state
   * @return {undefined}
   */
  function Foo(state) {
    /** @type {!Array} */
    var a = [state.a, state.b];
    /** @type {!Array} */
    var b = [state.c, state.d];
    var res = repeat(a);
    var c = dot(a, b);
    var r = repeat(apply(b, a, -c)) || 0;
    if (a[0] * b[1] < b[0] * a[1]) {
      a[0] *= -1;
      a[1] *= -1;
      /** @type {number} */
      res = res * -1;
      /** @type {number} */
      c = c * -1;
    }
    /** @type {number} */
    this.rotate = (res ? Math.atan2(a[1], a[0]) : Math.atan2(-b[0], b[1])) * scale;
    /** @type {!Array} */
    this.translate = [state.e, state.f];
    /** @type {!Array} */
    this.scale = [res, r];
    /** @type {number} */
    this.skew = r ? Math.atan2(c, r) * scale : 0;
  }
  /**
   * @param {!Object} b
   * @param {!Object} a
   * @return {?}
   */
  function dot(b, a) {
    return b[0] * a[0] + b[1] * a[1];
  }
  /**
   * @param {!Object} a
   * @return {?}
   */
  function repeat(a) {
    /** @type {number} */
    var b = Math.sqrt(dot(a, a));
    return b && (a[0] /= b, a[1] /= b), b;
  }
  /**
   * @param {!Object} dep
   * @param {!Object} path
   * @param {number} includeChildren
   * @return {?}
   */
  function apply(dep, path, includeChildren) {
    return dep[0] += includeChildren * path[0], dep[1] += includeChildren * path[1], dep;
  }
  /**
   * @param {string} el
   * @param {string} a
   * @return {?}
   */
  function move(el, a) {
    var l;
    /** @type {!Array} */
    var row = [];
    /** @type {!Array} */
    var collection = [];
    var m = d3.transform(el);
    var me = d3.transform(a);
    var p = m.translate;
    var translation = me.translate;
    var i = m.rotate;
    var j = me.rotate;
    var x = m.skew;
    var y = me.skew;
    var r = m.scale;
    var o = me.scale;
    return p[0] != translation[0] || p[1] != translation[1] ? (row.push("translate(", null, ",", null, ")"), collection.push({
      i : 1,
      x : push(p[0], translation[0])
    }, {
      i : 3,
      x : push(p[1], translation[1])
    })) : row.push(translation[0] || translation[1] ? "translate(" + translation + ")" : ""), i != j ? (i - j > 180 ? j = j + 360 : j - i > 180 && (i = i + 360), collection.push({
      i : row.push(row.pop() + "rotate(", null, ")") - 2,
      x : push(i, j)
    })) : j && row.push(row.pop() + "rotate(" + j + ")"), x != y ? collection.push({
      i : row.push(row.pop() + "skewX(", null, ")") - 2,
      x : push(x, y)
    }) : y && row.push(row.pop() + "skewX(" + y + ")"), r[0] != o[0] || r[1] != o[1] ? (l = row.push(row.pop() + "scale(", null, ",", null, ")"), collection.push({
      i : l - 4,
      x : push(r[0], o[0])
    }, {
      i : l - 2,
      x : push(r[1], o[1])
    })) : (1 != o[0] || 1 != o[1]) && row.push(row.pop() + "scale(" + o + ")"), l = collection.length, function(value) {
      var model;
      /** @type {number} */
      var i = -1;
      for (; ++i < l;) {
        row[(model = collection[i]).i] = model.x(value);
      }
      return row.join("");
    };
  }
  /**
   * @param {number} s
   * @param {number} b
   * @return {?}
   */
  function number(s, b) {
    return b = b - (s = +s) ? 1 / (b - s) : 0, function(f) {
      return (f - s) * b;
    };
  }
  /**
   * @param {number} x
   * @param {number} percent
   * @return {?}
   */
  function calculator(x, percent) {
    return percent = percent - (x = +x) ? 1 / (percent - x) : 0, function(b) {
      return Math.max(0, Math.min(1, (b - x) * percent));
    };
  }
  /**
   * @param {!Object} act
   * @return {?}
   */
  function d3_layout_bundlePath(act) {
    var b = act.source;
    var key = act.target;
    var d = d3_layout_bundleLeastCommonAncestor(b, key);
    /** @type {!Array} */
    var group = [b];
    for (; b !== d;) {
      b = b.parent;
      group.push(b);
    }
    /** @type {number} */
    var start = group.length;
    for (; key !== d;) {
      group.splice(start, 0, key);
      key = key.parent;
    }
    return group;
  }
  /**
   * @param {!Object} a
   * @return {?}
   */
  function pop(a) {
    /** @type {!Array} */
    var x = [];
    var t = a.parent;
    for (; null != t;) {
      x.push(a);
      a = t;
      t = t.parent;
    }
    return x.push(a), x;
  }
  /**
   * @param {!Object} type
   * @param {!Object} stack
   * @return {?}
   */
  function d3_layout_bundleLeastCommonAncestor(type, stack) {
    if (type === stack) {
      return type;
    }
    var b = pop(type);
    var ids = pop(stack);
    var tmpTimeVal = b.pop();
    var selTimeVal = ids.pop();
    /** @type {null} */
    var a = null;
    for (; tmpTimeVal === selTimeVal;) {
      a = tmpTimeVal;
      tmpTimeVal = b.pop();
      selTimeVal = ids.pop();
    }
    return a;
  }
  /**
   * @param {!Object} how
   * @return {undefined}
   */
  function _move(how) {
    how.fixed |= 2;
  }
  /**
   * @param {!Object} data
   * @return {undefined}
   */
  function bbox(data) {
    data.fixed &= -7;
  }
  /**
   * @param {!Object} node
   * @return {undefined}
   */
  function mousedown(node) {
    node.fixed |= 4;
    node.px = node.x;
    node.py = node.y;
  }
  /**
   * @param {!Object} event
   * @return {undefined}
   */
  function resized(event) {
    event.fixed &= -5;
  }
  /**
   * @param {!Object} quad
   * @param {number} alpha
   * @param {!Array} charges
   * @return {undefined}
   */
  function d3_layout_forceAccumulate(quad, alpha, charges) {
    /** @type {number} */
    var cx = 0;
    /** @type {number} */
    var cy = 0;
    if (quad.charge = 0, !quad.leaf) {
      var c;
      var data = quad.nodes;
      var nbElts = data.length;
      /** @type {number} */
      var _j = -1;
      for (; ++_j < nbElts;) {
        c = data[_j];
        if (null != c) {
          d3_layout_forceAccumulate(c, alpha, charges);
          quad.charge += c.charge;
          /** @type {number} */
          cx = cx + c.charge * c.cx;
          /** @type {number} */
          cy = cy + c.charge * c.cy;
        }
      }
    }
    if (quad.point) {
      if (!quad.leaf) {
        quad.point.x += Math.random() - .5;
        quad.point.y += Math.random() - .5;
      }
      /** @type {number} */
      var k = alpha * charges[quad.point.index];
      quad.charge += quad.pointCharge = k;
      /** @type {number} */
      cx = cx + k * quad.point.x;
      /** @type {number} */
      cy = cy + k * quad.point.y;
    }
    /** @type {number} */
    quad.cx = cx / quad.charge;
    /** @type {number} */
    quad.cy = cy / quad.charge;
  }
  /**
   * @param {!Array} object
   * @param {string} hierarchy
   * @return {?}
   */
  function d3_layout_hierarchyRebind(object, hierarchy) {
    return d3.rebind(object, hierarchy, "sort", "children", "value"), object.nodes = object, object.links = d3_layout_hierarchyLinks, object;
  }
  /**
   * @param {!Object} node
   * @param {!Function} callback
   * @return {undefined}
   */
  function d3_layout_hierarchyVisitBefore(node, callback) {
    /** @type {!Array} */
    var nodes = [node];
    for (; null != (node = nodes.pop());) {
      if (callback(node), (children = node.children) && (i = children.length)) {
        var i;
        var children;
        for (; --i >= 0;) {
          nodes.push(children[i]);
        }
      }
    }
  }
  /**
   * @param {!Object} node
   * @param {!Function} callback
   * @return {undefined}
   */
  function d3_layout_hierarchyVisitAfter(node, callback) {
    /** @type {!Array} */
    var result = [node];
    /** @type {!Array} */
    var insertStack = [];
    for (; null != (node = result.pop());) {
      if (insertStack.push(node), (objects = node.children) && (olen = objects.length)) {
        var olen;
        var objects;
        /** @type {number} */
        var i = -1;
        for (; ++i < olen;) {
          result.push(objects[i]);
        }
      }
    }
    for (; null != (node = insertStack.pop());) {
      callback(node);
    }
  }
  /**
   * @param {!Object} fs
   * @return {?}
   */
  function App(fs) {
    return fs.children;
  }
  /**
   * @param {!Object} dialog
   * @return {?}
   */
  function TestDialogController(dialog) {
    return dialog.value;
  }
  /**
   * @param {!Object} cube_va
   * @param {!Object} cube_vb
   * @return {?}
   */
  function edge_intersection_interpolation(cube_va, cube_vb) {
    return cube_vb.value - cube_va.value;
  }
  /**
   * @param {?} nodes
   * @return {?}
   */
  function d3_layout_hierarchyLinks(nodes) {
    return d3.merge(nodes.map(function(a) {
      return (a.children || []).map(function(slicedTarget) {
        return {
          source : a,
          target : slicedTarget
        };
      });
    }));
  }
  /**
   * @param {!Object} x2
   * @return {?}
   */
  function getX(x2) {
    return x2.x;
  }
  /**
   * @param {!Object} plot
   * @return {?}
   */
  function DEFAULT_TEXT(plot) {
    return plot.y;
  }
  /**
   * @param {!Object} s
   * @param {number} index
   * @param {number} top
   * @return {undefined}
   */
  function renderArcs(s, index, top) {
    /** @type {number} */
    s.y0 = index;
    /** @type {number} */
    s.y = top;
  }
  /**
   * @param {!NodeList} object
   * @return {?}
   */
  function lo(object) {
    return d3.range(object.length);
  }
  /**
   * @param {!Object} val
   * @return {?}
   */
  function zero(val) {
    /** @type {number} */
    var i = -1;
    var length = val[0].length;
    /** @type {!Array} */
    var pointer = [];
    for (; ++i < length;) {
      /** @type {number} */
      pointer[i] = 0;
    }
    return pointer;
  }
  /**
   * @param {!Array} d
   * @return {?}
   */
  function sort(d) {
    var _builderInputModifiedDate;
    /** @type {number} */
    var e = 1;
    /** @type {number} */
    var result = 0;
    var _maxBuilderInputModifiedDate = d[0][1];
    var s = d.length;
    for (; s > e; ++e) {
      if ((_builderInputModifiedDate = d[e][1]) > _maxBuilderInputModifiedDate) {
        /** @type {number} */
        result = e;
        _maxBuilderInputModifiedDate = _builderInputModifiedDate;
      }
    }
    return result;
  }
  /**
   * @param {!Object} _
   * @return {?}
   */
  function blob(_) {
    return _.reduce(nodeModels, 0);
  }
  /**
   * @param {?} a
   * @param {!Object} b
   * @return {?}
   */
  function nodeModels(a, b) {
    return a + b[1];
  }
  /**
   * @param {!Object} a
   * @param {!NodeList} b
   * @return {?}
   */
  function divide(a, b) {
    return div(a, Math.ceil(Math.log(b.length) / Math.LN2 + 1));
  }
  /**
   * @param {!Object} p
   * @param {number} n
   * @return {?}
   */
  function div(p, n) {
    /** @type {number} */
    var i = -1;
    /** @type {number} */
    var y = +p[0];
    /** @type {number} */
    var h = (p[1] - y) / n;
    /** @type {!Array} */
    var out = [];
    for (; ++i <= n;) {
      /** @type {number} */
      out[i] = h * i + y;
    }
    return out;
  }
  /**
   * @param {undefined} x
   * @return {?}
   */
  function array(x) {
    return [d3.min(x), d3.max(x)];
  }
  /**
   * @param {!Object} cube_vb
   * @param {!Object} cube_va
   * @return {?}
   */
  function h(cube_vb, cube_va) {
    return cube_vb.value - cube_va.value;
  }
  /**
   * @param {!Object} f
   * @param {number} c
   * @return {undefined}
   */
  function check$fork(f, c) {
    var wrapper = f._pack_next;
    /** @type {number} */
    f._pack_next = c;
    /** @type {!Object} */
    c._pack_prev = f;
    c._pack_next = wrapper;
    /** @type {number} */
    wrapper._pack_prev = c;
  }
  /**
   * @param {number} o
   * @param {number} p
   * @return {undefined}
   */
  function f(o, p) {
    /** @type {number} */
    o._pack_next = p;
    /** @type {number} */
    p._pack_prev = o;
  }
  /**
   * @param {!Object} a
   * @param {!Object} b
   * @return {?}
   */
  function intersectLineSegments(a, b) {
    /** @type {number} */
    var lightI = b.x - a.x;
    /** @type {number} */
    var lightJ = b.y - a.y;
    var y = a.r + b.r;
    return .999 * y * y > lightI * lightI + lightJ * lightJ;
  }
  /**
   * @param {!Object} a
   * @return {undefined}
   */
  function animate(a) {
    /**
     * @param {!Object} p
     * @return {undefined}
     */
    function callback(p) {
      /** @type {number} */
      s = Math.min(p.x - p.r, s);
      /** @type {number} */
      val = Math.max(p.x + p.r, val);
      /** @type {number} */
      end = Math.min(p.y - p.r, end);
      /** @type {number} */
      start = Math.max(p.y + p.r, start);
    }
    if ((array = a.children) && (_len = array.length)) {
      var array;
      var o;
      var p;
      var f;
      var _i;
      var c;
      var i;
      var _len;
      /** @type {number} */
      var s = 1 / 0;
      /** @type {number} */
      var val = -1 / 0;
      /** @type {number} */
      var end = 1 / 0;
      /** @type {number} */
      var start = -1 / 0;
      if (array.forEach(e), o = array[0], o.x = -o.r, o.y = 0, callback(o), _len > 1 && (p = array[1], p.x = p.r, p.y = 0, callback(p), _len > 2)) {
        f = array[2];
        step(o, p, f);
        callback(f);
        check$fork(o, f);
        o._pack_prev = f;
        check$fork(f, p);
        p = o._pack_next;
        /** @type {number} */
        _i = 3;
        for (; _len > _i; _i++) {
          step(o, p, f = array[_i]);
          /** @type {number} */
          var value = 0;
          /** @type {number} */
          var i = 1;
          /** @type {number} */
          var j = 1;
          c = p._pack_next;
          for (; c !== p; c = c._pack_next, i++) {
            if (intersectLineSegments(c, f)) {
              /** @type {number} */
              value = 1;
              break;
            }
          }
          if (1 == value) {
            i = o._pack_prev;
            for (; i !== c._pack_prev && !intersectLineSegments(i, f); i = i._pack_prev, j++) {
            }
          }
          if (value) {
            if (j > i || i == j && p.r < o.r) {
              f(o, p = c);
            } else {
              f(o = i, p);
            }
            _i--;
          } else {
            check$fork(o, f);
            p = f;
            callback(f);
          }
        }
      }
      /** @type {number} */
      var w = (s + val) / 2;
      /** @type {number} */
      var h = (end + start) / 2;
      /** @type {number} */
      var x = 0;
      /** @type {number} */
      _i = 0;
      for (; _len > _i; _i++) {
        f = array[_i];
        f.x -= w;
        f.y -= h;
        /** @type {number} */
        x = Math.max(x, f.r + Math.sqrt(f.x * f.x + f.y * f.y));
      }
      /** @type {number} */
      a.r = x;
      array.forEach(eventsConfigRegistry);
    }
  }
  /**
   * @param {number} d
   * @return {undefined}
   */
  function e(d) {
    d._pack_next = d._pack_prev = d;
  }
  /**
   * @param {?} a
   * @return {undefined}
   */
  function eventsConfigRegistry(a) {
    delete a._pack_next;
    delete a._pack_prev;
  }
  /**
   * @param {!Object} data
   * @param {number} x
   * @param {number} y
   * @param {number} scale
   * @return {undefined}
   */
  function equals(data, x, y, scale) {
    var items = data.children;
    if (data.x = x = x + scale * data.x, data.y = y = y + scale * data.y, data.r *= scale, items) {
      /** @type {number} */
      var i = -1;
      var length = items.length;
      for (; ++i < length;) {
        equals(items[i], x, y, scale);
      }
    }
  }
  /**
   * @param {!Object} a
   * @param {!Object} p
   * @param {!Object} c
   * @return {undefined}
   */
  function step(a, p, c) {
    var x = a.r + c.r;
    /** @type {number} */
    var u = p.x - a.x;
    /** @type {number} */
    var v = p.y - a.y;
    if (x && (u || v)) {
      var k = p.r + c.r;
      /** @type {number} */
      var b = u * u + v * v;
      /** @type {number} */
      k = k * k;
      /** @type {number} */
      x = x * x;
      /** @type {number} */
      var t = .5 + (x - k) / (2 * b);
      /** @type {number} */
      var sigma = Math.sqrt(Math.max(0, 2 * k * (x + b) - (x = x - b) * x - k * k)) / (2 * b);
      c.x = a.x + t * u + sigma * v;
      /** @type {number} */
      c.y = a.y + t * v - sigma * u;
    } else {
      c.x = a.x + x;
      c.y = a.y;
    }
  }
  /**
   * @param {!Object} a
   * @param {?} b
   * @return {?}
   */
  function d3_layout_treeSeparation(a, b) {
    return a.parent == b.parent ? 1 : 2;
  }
  /**
   * @param {!Object} v
   * @return {?}
   */
  function d3_layout_treeLeft(v) {
    var children = v.children;
    return children.length ? children[0] : v.t;
  }
  /**
   * @param {!Object} v
   * @return {?}
   */
  function d3_layout_treeRight(v) {
    var n;
    var children = v.children;
    return (n = children.length) ? children[n - 1] : v.t;
  }
  /**
   * @param {!Object} a
   * @param {!Object} b
   * @param {number} shift
   * @return {undefined}
   */
  function d3_layout_treeMove(a, b, shift) {
    /** @type {number} */
    var change = shift / (b.i - a.i);
    b.c -= change;
    b.s += shift;
    a.c += change;
    b.z += shift;
    b.m += shift;
  }
  /**
   * @param {!Object} node
   * @return {undefined}
   */
  function d3_layout_treeShift(node) {
    var w;
    /** @type {number} */
    var shift = 0;
    /** @type {number} */
    var change = 0;
    var values = node.children;
    var i = values.length;
    for (; --i >= 0;) {
      w = values[i];
      w.z += shift;
      w.m += shift;
      shift = shift + (w.s + (change = change + w.c));
    }
  }
  /**
   * @param {(number|string)} vim
   * @param {!Object} node
   * @param {?} ancestor
   * @return {?}
   */
  function d3_layout_treeAncestor(vim, node, ancestor) {
    return vim.a.parent === node.parent ? vim.a : ancestor;
  }
  /**
   * @param {undefined} children
   * @return {?}
   */
  function d3_layout_clusterY(children) {
    return 1 + d3.max(children, function(objectToMeasure) {
      return objectToMeasure.y;
    });
  }
  /**
   * @param {!Object} children
   * @return {?}
   */
  function d3_layout_clusterX(children) {
    return children.reduce(function(in_x_offset, p) {
      return in_x_offset + p.x;
    }, 0) / children.length;
  }
  /**
   * @param {!Object} node
   * @return {?}
   */
  function d3_layout_clusterRight(node) {
    var children = node.children;
    return children && children.length ? d3_layout_clusterRight(children[0]) : node;
  }
  /**
   * @param {!Object} node
   * @return {?}
   */
  function d3_layout_clusterLeft(node) {
    var n;
    var children = node.children;
    return children && (n = children.length) ? d3_layout_clusterLeft(children[n - 1]) : node;
  }
  /**
   * @param {!Object} node
   * @return {?}
   */
  function d3_layout_cellPadNull(node) {
    return {
      x : node.x,
      y : node.y,
      dx : node.dx,
      dy : node.dy
    };
  }
  /**
   * @param {!Object} node
   * @param {!Object} padding
   * @return {?}
   */
  function d3_layout_cellPad(node, padding) {
    var i = node.x + padding[3];
    var d = node.y + padding[0];
    /** @type {number} */
    var j = node.dx - padding[1] - padding[3];
    /** @type {number} */
    var e = node.dy - padding[0] - padding[2];
    return 0 > j && (i = i + j / 2, j = 0), 0 > e && (d = d + e / 2, e = 0), {
      x : i,
      y : d,
      dx : j,
      dy : e
    };
  }
  /**
   * @param {!Object} domain
   * @return {?}
   */
  function d3_scaleExtent(domain) {
    var startTime = domain[0];
    var endTime = domain[domain.length - 1];
    return endTime > startTime ? [startTime, endTime] : [endTime, startTime];
  }
  /**
   * @param {!Object} scale
   * @return {?}
   */
  function d3_scaleRange(scale) {
    return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());
  }
  /**
   * @param {!Object} domain
   * @param {!Object} range
   * @param {!Function} uninterpolate
   * @param {string} interpolate
   * @return {?}
   */
  function d3_scale_bilinear(domain, range, uninterpolate, interpolate) {
    var u = uninterpolate(domain[0], domain[1]);
    var i = interpolate(range[0], range[1]);
    return function(e) {
      return i(u(e));
    };
  }
  /**
   * @param {!Object} value
   * @param {?} base
   * @return {?}
   */
  function d3_scale_nice(value, base) {
    var m;
    /** @type {number} */
    var j = 0;
    /** @type {number} */
    var i = value.length - 1;
    var v = value[j];
    var s = value[i];
    return v > s && (m = j, j = i, i = m, m = v, v = s, s = m), value[j] = base.floor(v), value[i] = base.ceil(s), value;
  }
  /**
   * @param {number} step
   * @return {?}
   */
  function d3_scale_niceStep(step) {
    return step ? {
      floor : function(value) {
        return Math.floor(value / step) * step;
      },
      ceil : function(value) {
        return Math.ceil(value / step) * step;
      }
    } : defaultOptions;
  }
  /**
   * @param {!Object} x
   * @param {!Object} arr
   * @param {!Function} f
   * @param {string} fn
   * @return {?}
   */
  function add(x, arr, f, fn) {
    /** @type {!Array} */
    var set = [];
    /** @type {!Array} */
    var result = [];
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var count = Math.min(x.length, arr.length) - 1;
    if (x[count] < x[0]) {
      x = x.slice().reverse();
      arr = arr.slice().reverse();
    }
    for (; ++i <= count;) {
      set.push(f(x[i - 1], x[i]));
      result.push(fn(arr[i - 1], arr[i]));
    }
    return function(value) {
      /** @type {number} */
      var add = d3.bisect(x, value, 1, count) - 1;
      return result[add](set[add](value));
    };
  }
  /**
   * @param {!Object} domain
   * @param {!Object} range
   * @param {string} value
   * @param {string} clamp
   * @return {?}
   */
  function d3_scale_linear(domain, range, value, clamp) {
    /**
     * @return {?}
     */
    function rescale() {
      /** @type {function(!Object, !Object, !Function, string): ?} */
      var linear = Math.min(domain.length, range.length) > 2 ? add : d3_scale_bilinear;
      /** @type {function(number, number): ?} */
      var uninterpolate = clamp ? calculator : number;
      return output = linear(domain, range, uninterpolate, value), input = linear(range, domain, uninterpolate, interpolate), scale;
    }
    /**
     * @param {?} f
     * @return {?}
     */
    function scale(f) {
      return output(f);
    }
    var output;
    var input;
    return scale.invert = function(value) {
      return input(value);
    }, scale.domain = function(_) {
      return arguments.length ? (domain = _.map(Number), rescale()) : domain;
    }, scale.range = function(val) {
      return arguments.length ? (range = val, rescale()) : range;
    }, scale.rangeRound = function(x) {
      return scale.range(x).interpolate(before);
    }, scale.clamp = function(x) {
      return arguments.length ? (clamp = x, rescale()) : clamp;
    }, scale.interpolate = function(prop) {
      return arguments.length ? (value = prop, rescale()) : value;
    }, scale.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    }, scale.tickFormat = function(m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    }, scale.nice = function(m) {
      return d3_scale_linearNice(domain, m), rescale();
    }, scale.copy = function() {
      return d3_scale_linear(domain, range, value, clamp);
    }, rescale();
  }
  /**
   * @param {!Function} scale
   * @param {!Function} linear
   * @return {?}
   */
  function d3_scale_linearRebind(scale, linear) {
    return d3.rebind(scale, linear, "range", "rangeRound", "interpolate", "clamp");
  }
  /**
   * @param {!Object} domain
   * @param {number} m
   * @return {?}
   */
  function d3_scale_linearNice(domain, m) {
    return d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
  }
  /**
   * @param {!Object} domain
   * @param {number} m
   * @return {?}
   */
  function d3_scale_linearTickRange(domain, m) {
    if (null == m) {
      /** @type {number} */
      m = 10;
    }
    var range = d3_scaleExtent(domain);
    /** @type {number} */
    var span = range[1] - range[0];
    /** @type {number} */
    var t = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10));
    /** @type {number} */
    var w1 = m / span * t;
    return .15 >= w1 ? t = t * 10 : .35 >= w1 ? t = t * 5 : .75 >= w1 && (t = t * 2), range[0] = Math.ceil(range[0] / t) * t, range[1] = Math.floor(range[1] / t) * t + .5 * t, range[2] = t, range;
  }
  /**
   * @param {!Object} domain
   * @param {number} m
   * @return {?}
   */
  function d3_scale_linearTicks(domain, m) {
    return d3.range.apply(d3, d3_scale_linearTickRange(domain, m));
  }
  /**
   * @param {!Object} domain
   * @param {number} m
   * @param {string} format
   * @return {?}
   */
  function d3_scale_linearTickFormat(domain, m, format) {
    var range = d3_scale_linearTickRange(domain, m);
    if (format) {
      /** @type {(Array<string>|null)} */
      var match = d3_format_re.exec(format);
      if (match.shift(), "s" === match[8]) {
        var prefix = d3.formatPrefix(Math.max(abs(range[0]), abs(range[1])));
        return match[7] || (match[7] = "." + d3_scale_linearPrecision(prefix.scale(range[2]))), match[8] = "f", format = d3.format(match.join("")), function(i) {
          return format(prefix.scale(i)) + prefix.symbol;
        };
      }
      if (!match[7]) {
        /** @type {string} */
        match[7] = "." + d3_scale_linearFormatPrecision(match[8], range);
      }
      /** @type {string} */
      format = match.join("");
    } else {
      /** @type {string} */
      format = ",." + d3_scale_linearPrecision(range[2]) + "f";
    }
    return d3.format(format);
  }
  /**
   * @param {number} value
   * @return {?}
   */
  function d3_scale_linearPrecision(value) {
    return -Math.floor(Math.log(value) / Math.LN10 + .01);
  }
  /**
   * @param {string} type
   * @param {!Array} range
   * @return {?}
   */
  function d3_scale_linearFormatPrecision(type, range) {
    var p = d3_scale_linearPrecision(range[2]);
    return type in d3_scale_linearFormatSignificant ? Math.abs(p - d3_scale_linearPrecision(Math.max(abs(range[0]), abs(range[1])))) + +("e" !== type) : p - 2 * ("%" === type);
  }
  /**
   * @param {!Object} state
   * @param {number} n
   * @param {boolean} options
   * @param {!Object} args
   * @return {?}
   */
  function calendar(state, n, options, args) {
    /**
     * @param {number} y
     * @return {?}
     */
    function map(y) {
      return (options ? Math.log(0 > y ? 0 : y) : -Math.log(y > 0 ? 0 : -y)) / Math.log(n);
    }
    /**
     * @param {number} level
     * @return {?}
     */
    function copy(level) {
      return options ? Math.pow(n, level) : -Math.pow(n, -level);
    }
    /**
     * @param {undefined} b
     * @return {?}
     */
    function scale(b) {
      return state(map(b));
    }
    return scale.invert = function(value) {
      return copy(state.invert(value));
    }, scale.domain = function(_) {
      return arguments.length ? (options = _[0] >= 0, state.domain((args = _.map(Number)).map(map)), scale) : args;
    }, scale.base = function(limit) {
      return arguments.length ? (n = +limit, state.domain(args.map(map)), scale) : n;
    }, scale.nice = function() {
      var items = d3_scale_nice(args.map(map), options ? Math : defaults);
      return state.domain(items), args = items.map(copy), scale;
    }, scale.ticks = function() {
      var params = d3_scaleExtent(args);
      /** @type {!Array} */
      var res = [];
      var index = params[0];
      var val = params[1];
      /** @type {number} */
      var i = Math.floor(map(index));
      /** @type {number} */
      var len = Math.ceil(map(val));
      var w = n % 1 ? 2 : n;
      if (isFinite(len - i)) {
        if (options) {
          for (; len > i; i++) {
            /** @type {number} */
            var x = 1;
            for (; w > x; x++) {
              res.push(copy(i) * x);
            }
          }
          res.push(copy(i));
        } else {
          res.push(copy(i));
          for (; i++ < len;) {
            /** @type {number} */
            x = w - 1;
            for (; x > 0; x--) {
              res.push(copy(i) * x);
            }
          }
        }
        /** @type {number} */
        i = 0;
        for (; res[i] < index; i++) {
        }
        /** @type {number} */
        len = res.length;
        for (; res[len - 1] > val; len--) {
        }
        /** @type {!Array<?>} */
        res = res.slice(i, len);
      }
      return res;
    }, scale.tickFormat = function(count, value) {
      if (!arguments.length) {
        return valueRed;
      }
      if (arguments.length < 2) {
        value = valueRed;
      } else {
        if ("function" != typeof value) {
          value = d3.format(value);
        }
      }
      var type;
      /** @type {number} */
      var maxLength = Math.max(.1, count / scale.ticks().length);
      /** @type {function(?): number} */
      var context = options ? (type = 1E-12, Math.ceil) : (type = -1E-12, Math.floor);
      return function(length) {
        return length / copy(context(map(length) + type)) <= maxLength ? value(length) : "";
      };
    }, scale.copy = function() {
      return calendar(state.copy(), n, options, args);
    }, d3_scale_linearRebind(scale, state);
  }
  /**
   * @param {!Object} index
   * @param {number} value
   * @param {!Object} domain
   * @return {?}
   */
  function financetime(index, value, domain) {
    /**
     * @param {?} el
     * @return {?}
     */
    function scale(el) {
      return index(o(el));
    }
    var o = String(value);
    var s = String(1 / value);
    return scale.invert = function(val) {
      return s(index.invert(val));
    }, scale.domain = function(_) {
      return arguments.length ? (index.domain((domain = _.map(Number)).map(o)), scale) : domain;
    }, scale.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    }, scale.tickFormat = function(m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    }, scale.nice = function(m) {
      return scale.domain(d3_scale_linearNice(domain, m));
    }, scale.exponent = function(k) {
      return arguments.length ? (o = String(value = k), s = String(1 / value), index.domain(domain.map(o)), scale) : value;
    }, scale.copy = function() {
      return financetime(index.copy(), value, domain);
    }, d3_scale_linearRebind(scale, index);
  }
  /**
   * @param {number} val
   * @return {?}
   */
  function String(val) {
    return function(d2) {
      return 0 > d2 ? -Math.pow(-d2, val) : Math.pow(d2, val);
    };
  }
  /**
   * @param {!Array} domain
   * @param {number} ranger
   * @return {?}
   */
  function d3_scale_ordinal(domain, ranger) {
    /**
     * @param {undefined} value
     * @return {?}
     */
    function scale(value) {
      return context[((me.get(value) || ("range" === ranger.t ? me.set(value, domain.push(value)) : 0 / 0)) - 1) % context.length];
    }
    /**
     * @param {number} start
     * @param {number} step
     * @return {?}
     */
    function steps(start, step) {
      return d3.range(domain.length).map(function(outerPadding) {
        return start + step * outerPadding;
      });
    }
    var me;
    var context;
    var rangeBand;
    return scale.domain = function(data) {
      if (!arguments.length) {
        return domain;
      }
      /** @type {!Array} */
      domain = [];
      me = new d3_Map;
      var key;
      /** @type {number} */
      var i = -1;
      var index = data.length;
      for (; ++i < index;) {
        if (!me.has(key = data[i])) {
          me.set(key, domain.push(key));
        }
      }
      return scale[ranger.t].apply(scale, ranger.a);
    }, scale.range = function(arg) {
      return arguments.length ? (context = arg, rangeBand = 0, ranger = {
        t : "range",
        a : arguments
      }, scale) : context;
    }, scale.rangePoints = function(x, padding) {
      if (arguments.length < 2) {
        /** @type {number} */
        padding = 0;
      }
      var start = x[0];
      var stop = x[1];
      /** @type {number} */
      var step = (stop - start) / (Math.max(1, domain.length - 1) + padding);
      return context = steps(domain.length < 2 ? (start + stop) / 2 : start + step * padding / 2, step), rangeBand = 0, ranger = {
        t : "rangePoints",
        a : arguments
      }, scale;
    }, scale.rangeBands = function(x, padding, outerPadding) {
      if (arguments.length < 2) {
        /** @type {number} */
        padding = 0;
      }
      if (arguments.length < 3) {
        /** @type {number} */
        outerPadding = padding;
      }
      /** @type {boolean} */
      var reverse = x[1] < x[0];
      var start = x[reverse - 0];
      var stop = x[1 - reverse];
      /** @type {number} */
      var step = (stop - start) / (domain.length - padding + 2 * outerPadding);
      return context = steps(start + step * outerPadding, step), reverse && context.reverse(), rangeBand = step * (1 - padding), ranger = {
        t : "rangeBands",
        a : arguments
      }, scale;
    }, scale.rangeRoundBands = function(x, padding, outerPadding) {
      if (arguments.length < 2) {
        /** @type {number} */
        padding = 0;
      }
      if (arguments.length < 3) {
        /** @type {number} */
        outerPadding = padding;
      }
      /** @type {boolean} */
      var reverse = x[1] < x[0];
      var start = x[reverse - 0];
      var stop = x[1 - reverse];
      /** @type {number} */
      var step = Math.floor((stop - start) / (domain.length - padding + 2 * outerPadding));
      /** @type {number} */
      var filmSteps = stop - start - (domain.length - padding) * step;
      return context = steps(start + Math.round(filmSteps / 2), step), reverse && context.reverse(), rangeBand = Math.round(step * (1 - padding)), ranger = {
        t : "rangeRoundBands",
        a : arguments
      }, scale;
    }, scale.rangeBand = function() {
      return rangeBand;
    }, scale.rangeExtent = function() {
      return d3_scaleExtent(ranger.a[0]);
    }, scale.copy = function() {
      return d3_scale_ordinal(domain, ranger);
    }, scale.domain(domain);
  }
  /**
   * @param {!Array} data
   * @param {!Object} x
   * @return {?}
   */
  function band(data, x) {
    /**
     * @return {?}
     */
    function rescale() {
      /** @type {number} */
      var i = 0;
      var l = x.length;
      /** @type {!Array} */
      args = [];
      for (; ++i < l;) {
        args[i - 1] = d3.quantile(data, i / l);
      }
      return scale;
    }
    /**
     * @param {number} num
     * @return {?}
     */
    function scale(num) {
      return isNaN(num = +num) ? void 0 : x[d3.bisect(args, num)];
    }
    var args;
    return scale.domain = function(_) {
      return arguments.length ? (data = _.filter(filter).sort(a), rescale()) : data;
    }, scale.range = function(arg) {
      return arguments.length ? (x = arg, rescale()) : x;
    }, scale.quantiles = function() {
      return args;
    }, scale.invertExtent = function(i) {
      return i = x.indexOf(i), 0 > i ? [0 / 0, 0 / 0] : [i > 0 ? args[i - 1] : data[0], i < args.length ? args[i] : data[data.length - 1]];
    }, scale.copy = function() {
      return band(data, x);
    }, rescale();
  }
  /**
   * @param {number} h
   * @param {number} p
   * @param {!Object} n
   * @return {?}
   */
  function scaleBandSeries(h, p, n) {
    /**
     * @param {?} s
     * @return {?}
     */
    function scale(s) {
      return n[Math.max(0, Math.min(g, Math.floor(w * (s - h))))];
    }
    /**
     * @return {?}
     */
    function rescale() {
      return w = n.length / (p - h), g = n.length - 1, scale;
    }
    var w;
    var g;
    return scale.domain = function(_) {
      return arguments.length ? (h = +_[0], p = +_[_.length - 1], rescale()) : [h, p];
    }, scale.range = function(name) {
      return arguments.length ? (n = name, rescale()) : n;
    }, scale.invertExtent = function(s) {
      return s = n.indexOf(s), s = 0 > s ? 0 / 0 : s / w + h, [s, s + 1 / w];
    }, scale.copy = function() {
      return scaleBandSeries(h, p, n);
    }, rescale();
  }
  /**
   * @param {!Object} x
   * @param {!Object} r
   * @return {?}
   */
  function make(x, r) {
    /**
     * @param {?} t
     * @return {?}
     */
    function t(t) {
      return t >= t ? r[d3.bisect(x, t)] : void 0;
    }
    return t.domain = function(a) {
      return arguments.length ? (x = a, t) : x;
    }, t.range = function(a) {
      return arguments.length ? (r = a, t) : r;
    }, t.invertExtent = function(p) {
      return p = r.indexOf(p), [x[p - 1], x[p]];
    }, t.copy = function() {
      return make(x, r);
    }, t;
  }
  /**
   * @param {!Object} domain
   * @return {?}
   */
  function financeDiscontinuousScale(domain) {
    /**
     * @param {number} value
     * @return {?}
     */
    function a(value) {
      return +value;
    }
    return a.invert = a, a.domain = a.range = function(arg) {
      return arguments.length ? (domain = arg.map(a), a) : domain;
    }, a.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    }, a.tickFormat = function(m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    }, a.copy = function() {
      return financeDiscontinuousScale(domain);
    }, a;
  }
  /**
   * @param {?} value
   * @return {?}
   */
  function toAttribute(value) {
    return value.innerRadius;
  }
  /**
   * @param {?} d
   * @return {?}
   */
  function arcOuterRadius(d) {
    return d.outerRadius;
  }
  /**
   * @param {!Object} d
   * @return {?}
   */
  function startAngle(d) {
    return d.startAngle;
  }
  /**
   * @param {!Object} a
   * @return {?}
   */
  function j(a) {
    return a.endAngle;
  }
  /**
   * @param {!Function} a
   * @return {?}
   */
  function run(a) {
    /**
     * @param {!NodeList} b
     * @return {?}
     */
    function t(b) {
      /**
       * @return {undefined}
       */
      function render() {
        args.push("M", b(a(_), h));
      }
      var i;
      /** @type {!Array} */
      var args = [];
      /** @type {!Array} */
      var _ = [];
      /** @type {number} */
      var j = -1;
      var y = b.length;
      var sel = $(r);
      var c = $(n);
      for (; ++j < y;) {
        if (y.call(this, i = b[j], j)) {
          _.push([+sel.call(this, i, j), +c.call(this, i, j)]);
        } else {
          if (_.length) {
            render();
            /** @type {!Array} */
            _ = [];
          }
        }
      }
      return _.length && render(), args.length ? args.join("") : null;
    }
    /** @type {function(!Object): ?} */
    var r = holder;
    /** @type {function(!Object): ?} */
    var n = target;
    /** @type {function(): ?} */
    var y = d3_true;
    /** @type {function(!Object): ?} */
    var b = line;
    var s = b.key;
    /** @type {number} */
    var h = .7;
    return t.x = function(name) {
      return arguments.length ? (r = name, t) : r;
    }, t.y = function(name) {
      return arguments.length ? (n = name, t) : n;
    }, t.defined = function(a) {
      return arguments.length ? (y = a, t) : y;
    }, t.interpolate = function(a) {
      return arguments.length ? (s = "function" == typeof a ? b = a : (b = parsed_html.get(a) || line).key, t) : s;
    }, t.tension = function(a) {
      return arguments.length ? (h = a, t) : h;
    }, t;
  }
  /**
   * @param {!Object} data
   * @return {?}
   */
  function line(data) {
    return data.join("L");
  }
  /**
   * @param {undefined} d
   * @return {?}
   */
  function isoDateToStringUTC(d) {
    return line(d) + "Z";
  }
  /**
   * @param {!Array} p
   * @return {?}
   */
  function processPath(p) {
    /** @type {number} */
    var i = 0;
    var l = p.length;
    var d = p[0];
    /** @type {!Array} */
    var ctx = [d[0], ",", d[1]];
    for (; ++i < l;) {
      ctx.push("H", (d[0] + (d = p[i])[0]) / 2, "V", d[1]);
    }
    return l > 1 && ctx.push("H", d[0]), ctx.join("");
  }
  /**
   * @param {!Object} data
   * @return {?}
   */
  function reverse(data) {
    /** @type {number} */
    var i = 0;
    var index = data.length;
    var d = data[0];
    /** @type {!Array} */
    var c = [d[0], ",", d[1]];
    for (; ++i < index;) {
      c.push("V", (d = data[i])[1], "H", d[0]);
    }
    return c.join("");
  }
  /**
   * @param {!Object} d
   * @return {?}
   */
  function dealWithPath(d) {
    /** @type {number} */
    var i = 0;
    var l = d.length;
    var p = d[0];
    /** @type {!Array} */
    var t = [p[0], ",", p[1]];
    for (; ++i < l;) {
      t.push("H", (p = d[i])[0], "V", p[1]);
    }
    return t.join("");
  }
  /**
   * @param {!Array} d
   * @param {undefined} key
   * @return {?}
   */
  function send(d, key) {
    return d.length < 4 ? line(d) : d[1] + callback(d.slice(1, d.length - 1), fn(d, key));
  }
  /**
   * @param {!Object} data
   * @param {undefined} opt
   * @return {?}
   */
  function build(data, opt) {
    return data.length < 3 ? line(data) : data[0] + callback((data.push(data[0]), data), fn([data[data.length - 2]].concat(data, [data[1]]), opt));
  }
  /**
   * @param {!Array} key
   * @param {undefined} val
   * @return {?}
   */
  function declare(key, val) {
    return key.length < 3 ? line(key) : key[0] + callback(key, fn(key, val));
  }
  /**
   * @param {!Object} a
   * @param {!Object} b
   * @return {?}
   */
  function callback(a, b) {
    if (b.length < 1 || a.length != b.length && a.length != b.length + 2) {
      return line(a);
    }
    /** @type {boolean} */
    var c = a.length != b.length;
    /** @type {string} */
    var d = "";
    var e = a[0];
    var end = a[1];
    var type = b[0];
    var t = type;
    /** @type {number} */
    var i = 1;
    if (c && (d = d + ("Q" + (end[0] - 2 * type[0] / 3) + "," + (end[1] - 2 * type[1] / 3) + "," + end[0] + "," + end[1]), e = a[1], i = 2), b.length > 1) {
      t = b[1];
      end = a[i];
      i++;
      /** @type {string} */
      d = d + ("C" + (e[0] + type[0]) + "," + (e[1] + type[1]) + "," + (end[0] - t[0]) + "," + (end[1] - t[1]) + "," + end[0] + "," + end[1]);
      /** @type {number} */
      var j = 2;
      for (; j < b.length; j++, i++) {
        end = a[i];
        t = b[j];
        /** @type {string} */
        d = d + ("S" + (end[0] - t[0]) + "," + (end[1] - t[1]) + "," + end[0] + "," + end[1]);
      }
    }
    if (c) {
      var c1 = a[i];
      /** @type {string} */
      d = d + ("Q" + (end[0] + 2 * t[0] / 3) + "," + (end[1] + 2 * t[1] / 3) + "," + c1[0] + "," + c1[1]);
    }
    return d;
  }
  /**
   * @param {!Array} a
   * @param {number} s
   * @return {?}
   */
  function fn(a, s) {
    var r;
    /** @type {!Array} */
    var ret = [];
    /** @type {number} */
    var e = (1 - s) / 2;
    var n = a[0];
    var p = a[1];
    /** @type {number} */
    var i = 1;
    var l = a.length;
    for (; ++i < l;) {
      r = n;
      n = p;
      p = a[i];
      ret.push([e * (p[0] - r[0]), e * (p[1] - r[1])]);
    }
    return ret;
  }
  /**
   * @param {!Array} data
   * @return {?}
   */
  function draw(data) {
    if (data.length < 3) {
      return line(data);
    }
    /** @type {number} */
    var i = 1;
    var n = data.length;
    var o = data[0];
    var c = o[0];
    var left = o[1];
    /** @type {!Array} */
    var items = [c, c, c, (o = data[1])[0]];
    /** @type {!Array} */
    var props = [left, left, left, o[1]];
    /** @type {!Array} */
    var arr = [c, ",", left, "L", mr(height, items), ",", mr(height, props)];
    data.push(data[n - 1]);
    for (; ++i <= n;) {
      o = data[i];
      items.shift();
      items.push(o[0]);
      props.shift();
      props.push(o[1]);
      set(arr, items, props);
    }
    return data.pop(), arr.push("L", o), arr.join("");
  }
  /**
   * @param {!Object} data
   * @return {?}
   */
  function createLine(data) {
    if (data.length < 4) {
      return line(data);
    }
    var value;
    /** @type {!Array} */
    var lineStr = [];
    /** @type {number} */
    var i = -1;
    var index = data.length;
    /** @type {!Array} */
    var a = [0];
    /** @type {!Array} */
    var reg = [0];
    for (; ++i < 3;) {
      value = data[i];
      a.push(value[0]);
      reg.push(value[1]);
    }
    lineStr.push(mr(height, a) + "," + mr(height, reg));
    --i;
    for (; ++i < index;) {
      value = data[i];
      a.shift();
      a.push(value[0]);
      reg.shift();
      reg.push(value[1]);
      set(lineStr, a, reg);
    }
    return lineStr.join("");
  }
  /**
   * @param {!Object} buffer
   * @return {?}
   */
  function flush(buffer) {
    var lineStr;
    var nodes;
    /** @type {number} */
    var i = -1;
    var size = buffer.length;
    var length = size + 4;
    /** @type {!Array} */
    var g = [];
    /** @type {!Array} */
    var h = [];
    for (; ++i < 4;) {
      nodes = buffer[i % size];
      g.push(nodes[0]);
      h.push(nodes[1]);
    }
    /** @type {!Array} */
    lineStr = [mr(height, g), ",", mr(height, h)];
    --i;
    for (; ++i < length;) {
      nodes = buffer[i % size];
      g.shift();
      g.push(nodes[0]);
      h.shift();
      h.push(nodes[1]);
      set(lineStr, g, h);
    }
    return lineStr.join("");
  }
  /**
   * @param {!Array} results
   * @param {number} data
   * @return {?}
   */
  function drawChart(results, data) {
    /** @type {number} */
    var length = results.length - 1;
    if (length) {
      var property;
      var i;
      var headerHeight = results[0][0];
      var sequenceLineY = results[0][1];
      /** @type {number} */
      var height = results[length][0] - headerHeight;
      /** @type {number} */
      var gridLineHeight = results[length][1] - sequenceLineY;
      /** @type {number} */
      var index = -1;
      for (; ++index <= length;) {
        property = results[index];
        /** @type {number} */
        i = index / length;
        /** @type {number} */
        property[0] = data * property[0] + (1 - data) * (headerHeight + i * height);
        /** @type {number} */
        property[1] = data * property[1] + (1 - data) * (sequenceLineY + i * gridLineHeight);
      }
    }
    return draw(results);
  }
  /**
   * @param {!Array} b
   * @param {!Array} a
   * @return {?}
   */
  function mr(b, a) {
    return b[0] * a[0] + b[1] * a[1] + b[2] * a[2] + b[3] * a[3];
  }
  /**
   * @param {!Array} lineStr
   * @param {!Array} context
   * @param {!Array} data
   * @return {undefined}
   */
  function set(lineStr, context, data) {
    lineStr.push("C", mr(v3, context), ",", mr(v3, data), ",", mr(path, context), ",", mr(path, data), ",", mr(height, context), ",", mr(height, data));
  }
  /**
   * @param {!Object} obj
   * @param {!Object} val
   * @return {?}
   */
  function isNaN(obj, val) {
    return (val[1] - obj[1]) / (val[0] - obj[0]);
  }
  /**
   * @param {!Object} a
   * @return {?}
   */
  function min(a) {
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var numPoistiveTicks = a.length - 1;
    /** @type {!Array} */
    var r = [];
    var x = a[0];
    var temp = a[1];
    var t0 = r[0] = isNaN(x, temp);
    for (; ++i < numPoistiveTicks;) {
      /** @type {number} */
      r[i] = (t0 + (t0 = isNaN(x = temp, temp = a[i + 1]))) / 2;
    }
    return r[i] = t0, r;
  }
  /**
   * @param {!Object} args
   * @return {?}
   */
  function select(args) {
    var value;
    var lightI;
    var lightJ;
    var scale;
    /** @type {!Array} */
    var animal = [];
    var b = min(args);
    /** @type {number} */
    var i = -1;
    /** @type {number} */
    var n = args.length - 1;
    for (; ++i < n;) {
      value = isNaN(args[i], args[i + 1]);
      if (abs(value) < epsilon) {
        /** @type {number} */
        b[i] = b[i + 1] = 0;
      } else {
        /** @type {number} */
        lightI = b[i] / value;
        /** @type {number} */
        lightJ = b[i + 1] / value;
        /** @type {number} */
        scale = lightI * lightI + lightJ * lightJ;
        if (scale > 9) {
          /** @type {number} */
          scale = 3 * value / Math.sqrt(scale);
          /** @type {number} */
          b[i] = scale * lightI;
          /** @type {number} */
          b[i + 1] = scale * lightJ;
        }
      }
    }
    /** @type {number} */
    i = -1;
    for (; ++i <= n;) {
      /** @type {number} */
      scale = (args[Math.min(n, i + 1)][0] - args[Math.max(0, i - 1)][0]) / (6 * (1 + b[i] * b[i]));
      animal.push([scale || 0, b[i] * scale || 0]);
    }
    return animal;
  }
  /**
   * @param {!Object} data
   * @return {?}
   */
  function graph(data) {
    return data.length < 3 ? line(data) : data[0] + callback(data, select(data));
  }
  /**
   * @param {!NodeList} value
   * @return {?}
   */
  function t(value) {
    var e;
    var c;
    var hr;
    /** @type {number} */
    var i = -1;
    var l = value.length;
    for (; ++i < l;) {
      e = value[i];
      c = e[0];
      hr = e[1] + u;
      /** @type {number} */
      e[0] = c * Math.cos(hr);
      /** @type {number} */
      e[1] = c * Math.sin(hr);
    }
    return value;
  }
  /**
   * @param {!Function} w
   * @return {?}
   */
  function render(w) {
    /**
     * @param {!NodeList} c
     * @return {?}
     */
    function t(c) {
      /**
       * @return {undefined}
       */
      function render() {
        context.push("M", o(w(keylist), y), name, s(w(newTiers.reverse()), y), "Z");
      }
      var i;
      var first;
      var addPoint;
      /** @type {!Array} */
      var context = [];
      /** @type {!Array} */
      var newTiers = [];
      /** @type {!Array} */
      var keylist = [];
      /** @type {number} */
      var d = -1;
      var l = c.length;
      var t = $(h);
      var result = $(n);
      var getter = h === type ? function() {
        return first;
      } : $(type);
      var unpack = n === value ? function() {
        return addPoint;
      } : $(value);
      for (; ++d < l;) {
        if (r.call(this, i = c[d], d)) {
          newTiers.push([first = +t.call(this, i, d), addPoint = +result.call(this, i, d)]);
          keylist.push([+getter.call(this, i, d), +unpack.call(this, i, d)]);
        } else {
          if (newTiers.length) {
            render();
            /** @type {!Array} */
            newTiers = [];
            /** @type {!Array} */
            keylist = [];
          }
        }
      }
      return newTiers.length && render(), context.length ? context.join("") : null;
    }
    /** @type {function(!Object): ?} */
    var h = holder;
    /** @type {function(!Object): ?} */
    var type = holder;
    /** @type {number} */
    var n = 0;
    /** @type {function(!Object): ?} */
    var value = target;
    /** @type {function(): ?} */
    var r = d3_true;
    /** @type {function(!Object): ?} */
    var o = line;
    var filter = o.key;
    var s = o;
    /** @type {string} */
    var name = "L";
    /** @type {number} */
    var y = .7;
    return t.x = function(name) {
      return arguments.length ? (h = type = name, t) : type;
    }, t.x0 = function(a) {
      return arguments.length ? (h = a, t) : h;
    }, t.x1 = function(a) {
      return arguments.length ? (type = a, t) : type;
    }, t.y = function(name) {
      return arguments.length ? (n = value = name, t) : value;
    }, t.y0 = function(a) {
      return arguments.length ? (n = a, t) : n;
    }, t.y1 = function(a) {
      return arguments.length ? (value = a, t) : value;
    }, t.defined = function(a) {
      return arguments.length ? (r = a, t) : r;
    }, t.interpolate = function(a) {
      return arguments.length ? (filter = "function" == typeof a ? o = a : (o = parsed_html.get(a) || line).key, s = o.reverse || o, name = o.closed ? "M" : "L", t) : filter;
    }, t.tension = function(_) {
      return arguments.length ? (y = _, t) : y;
    }, t;
  }
  /**
   * @param {!Object} val
   * @return {?}
   */
  function radius(val) {
    return val.radius;
  }
  /**
   * @param {!Object} values
   * @return {?}
   */
  function applyPointList(values) {
    return [values.x, values.y];
  }
  /**
   * @param {!Function} projection
   * @return {?}
   */
  function d3_svg_diagonalRadialProjection(projection) {
    return function() {
      var s = projection.apply(this, arguments);
      var c = s[0];
      var hr = s[1] + u;
      return [c * Math.cos(hr), c * Math.sin(hr)];
    };
  }
  /**
   * @return {?}
   */
  function reference() {
    return 64;
  }
  /**
   * @return {?}
   */
  function pointShape() {
    return "circle";
  }
  /**
   * @param {!Object} name
   * @return {?}
   */
  function data(name) {
    /** @type {number} */
    var r0 = Math.sqrt(name / val);
    return "M0," + r0 + "A" + r0 + "," + r0 + " 0 1,1 0," + -r0 + "A" + r0 + "," + r0 + " 0 1,1 0," + r0 + "Z";
  }
  /**
   * @param {!Object} e
   * @param {string} id
   * @return {?}
   */
  function resolve(e, id) {
    return equal(e, obj), e.id = id, e;
  }
  /**
   * @param {string} self
   * @param {!Object} content
   * @param {!Object} value
   * @param {!Function} callback
   * @return {?}
   */
  function write(self, content, value, callback) {
    var id = self.id;
    return emit(self, "function" == typeof value ? function(node, key, reason) {
      node.__transition__[id].tween.set(content, callback(value.call(node, node.__data__, key, reason)));
    } : (value = callback(value), function(node) {
      node.__transition__[id].tween.set(content, value);
    }));
  }
  /**
   * @param {string} val
   * @return {?}
   */
  function output(val) {
    return null == val && (val = ""), function() {
      this.textContent = val;
    };
  }
  /**
   * @param {!Object} node
   * @param {number} i
   * @param {number} id
   * @param {!Object} inherit
   * @return {undefined}
   */
  function d3_transitionNode(node, i, id, inherit) {
    var lock = node.__transition__ || (node.__transition__ = {
      active : 0,
      count : 0
    });
    var options = lock[id];
    if (!options) {
      var time = inherit.time;
      options = lock[id] = {
        tween : new d3_Map,
        time : time,
        ease : inherit.ease,
        delay : inherit.delay,
        duration : inherit.duration
      };
      ++lock.count;
      d3.timer(function(elapsed) {
        /**
         * @param {number} elapsed
         * @return {?}
         */
        function start(elapsed) {
          return lock.active > id ? stop() : (lock.active = id, options.event && options.event.start.call(node, value, i), options.tween.forEach(function(canCreateDiscussions, position) {
            if (position = position.call(node, value, i)) {
              array.push(position);
            }
          }), void d3.timer(function() {
            return timer.c = tick(elapsed || 1) ? d3_true : tick, 1;
          }, 0, time));
        }
        /**
         * @param {number} counter
         * @return {?}
         */
        function tick(counter) {
          if (lock.active !== id) {
            return stop();
          }
          /** @type {number} */
          var rate = counter / total;
          var e = ease(rate);
          /** @type {number} */
          var length = array.length;
          for (; length > 0;) {
            array[--length].call(node, e);
          }
          return rate >= 1 ? (options.event && options.event.end.call(node, value, i), stop()) : void 0;
        }
        /**
         * @return {?}
         */
        function stop() {
          return --lock.count ? delete lock[id] : delete node.__transition__, 1;
        }
        var value = node.__data__;
        var ease = options.ease;
        var delay = options.delay;
        var total = options.duration;
        var timer = d3_timer_active;
        /** @type {!Array} */
        var array = [];
        return timer.t = delay + time, elapsed >= delay ? start(elapsed - delay) : void(timer.c = start);
      }, 0, time);
    }
  }
  /**
   * @param {!Object} rows
   * @param {?} $
   * @return {undefined}
   */
  function animStackDestroy(rows, $) {
    rows.attr("transform", function(a) {
      return "translate(" + $(a) + ",0)";
    });
  }
  /**
   * @param {!Object} group
   * @param {?} cb
   * @return {undefined}
   */
  function expandtick(group, cb) {
    group.attr("transform", function(errReadDir) {
      return "translate(0," + cb(errReadDir) + ")";
    });
  }
  /**
   * @param {!Date} date
   * @return {?}
   */
  function d3_time_formatIsoNative(date) {
    return date.toISOString();
  }
  /**
   * @param {!Object} linear
   * @param {!Object} methods
   * @param {?} format
   * @return {?}
   */
  function d3_time_scale(linear, methods, format) {
    /**
     * @param {?} domain
     * @return {?}
     */
    function scale(domain) {
      return linear(domain);
    }
    /**
     * @param {!Object} extent
     * @param {number} count
     * @return {?}
     */
    function tickMethod(extent, count) {
      /** @type {number} */
      var span = extent[1] - extent[0];
      /** @type {number} */
      var target = span / count;
      var i = d3.bisect(d3_time_scaleSteps, target);
      return i == d3_time_scaleSteps.length ? [methods.year, d3_scale_linearTickRange(extent.map(function(a) {
        return a / 31536E6;
      }), count)[2]] : i ? methods[target / d3_time_scaleSteps[i - 1] < d3_time_scaleSteps[i] / target ? i - 1 : i] : [d3_time_scaleMilliseconds, d3_scale_linearTickRange(extent, count)[2]];
    }
    return scale.invert = function(x) {
      return d3_time_scaleDate(linear.invert(x));
    }, scale.domain = function(x) {
      return arguments.length ? (linear.domain(x), scale) : linear.domain().map(d3_time_scaleDate);
    }, scale.nice = function(interval, skip) {
      /**
       * @param {undefined} date
       * @return {?}
       */
      function skipped(date) {
        return !isNaN(date) && !interval.range(date, d3_time_scaleDate(+date + 1), skip).length;
      }
      var domain = scale.domain();
      var extent = d3_scaleExtent(domain);
      var method = null == interval ? tickMethod(extent, 10) : "number" == typeof interval && tickMethod(extent, interval);
      return method && (interval = method[0], skip = method[1]), scale.domain(d3_scale_nice(domain, skip > 1 ? {
        floor : function(value) {
          for (; skipped(value = interval.floor(value));) {
            value = d3_time_scaleDate(value - 1);
          }
          return value;
        },
        ceil : function(value) {
          for (; skipped(value = interval.ceil(value));) {
            value = d3_time_scaleDate(+value + 1);
          }
          return value;
        }
      } : interval));
    }, scale.ticks = function(interval, skip) {
      var extent = d3_scaleExtent(scale.domain());
      var method = null == interval ? tickMethod(extent, 10) : "number" == typeof interval ? tickMethod(extent, interval) : !interval.range && [{
        range : interval
      }, skip];
      return method && (interval = method[0], skip = method[1]), interval.range(extent[0], d3_time_scaleDate(+extent[1] + 1), 1 > skip ? 1 : skip);
    }, scale.tickFormat = function() {
      return format;
    }, scale.copy = function() {
      return d3_time_scale(linear.copy(), methods, format);
    }, d3_scale_linearRebind(scale, linear);
  }
  /**
   * @param {number} t
   * @return {?}
   */
  function d3_time_scaleDate(t) {
    return new Date(t);
  }
  /**
   * @param {!Object} res
   * @return {?}
   */
  function response(res) {
    return JSON.parse(res.responseText);
  }
  /**
   * @param {!Object} request
   * @return {?}
   */
  function d3_html(request) {
    /** @type {(Range|null)} */
    var range = doc.createRange();
    return range.selectNode(doc.body), range.createContextualFragment(request.responseText);
  }
  var d3 = {
    version : "3.4.9"
  };
  if (!Date.now) {
    /**
     * @return {number}
     */
    Date.now = function() {
      return +new Date;
    };
  }
  /** @type {function(this:(IArrayLike<T>|string), *=, *=): !Array<T>} */
  var slice = [].slice;
  /**
   * @param {!Array} list
   * @return {?}
   */
  var d3_array = function(list) {
    return slice.call(list);
  };
  /** @type {!HTMLDocument} */
  var doc = document;
  /** @type {!Element} */
  var node = doc.documentElement;
  /** @type {!Window} */
  var root = window;
  try {
    d3_array(node.childNodes)[0].nodeType;
  } catch (Yg) {
    /**
     * @param {!Object} list
     * @return {?}
     */
    d3_array = function(list) {
      var i = list.length;
      /** @type {!Array} */
      var array = new Array(i);
      for (; i--;) {
        array[i] = list[i];
      }
      return array;
    };
  }
  try {
    doc.createElement("div").style.setProperty("opacity", 0, "");
  } catch (Zg) {
    var d3_element_prototype = root.Element.prototype;
    var d3_element_setAttribute = d3_element_prototype.setAttribute;
    var d3_element_setAttributeNS = d3_element_prototype.setAttributeNS;
    var d3_style_prototype = root.CSSStyleDeclaration.prototype;
    var d3_style_setProperty = d3_style_prototype.setProperty;
    /**
     * @param {string} name
     * @param {string} value
     * @return {undefined}
     */
    d3_element_prototype.setAttribute = function(name, value) {
      d3_element_setAttribute.call(this, name, value + "");
    };
    /**
     * @param {?} ns
     * @param {?} name
     * @param {string} value
     * @return {undefined}
     */
    d3_element_prototype.setAttributeNS = function(ns, name, value) {
      d3_element_setAttributeNS.call(this, ns, name, value + "");
    };
    /**
     * @param {!Object} name
     * @param {string} value
     * @param {string} priority
     * @return {undefined}
     */
    d3_style_prototype.setProperty = function(name, value, priority) {
      d3_style_setProperty.call(this, name, value + "", priority);
    };
  }
  /** @type {function(?, ?): ?} */
  d3.ascending = a;
  /**
   * @param {(boolean|number|string)} first
   * @param {(boolean|number|string)} second
   * @return {?}
   */
  d3.descending = function(first, second) {
    return first > second ? -1 : second > first ? 1 : second >= first ? 0 : 0 / 0;
  };
  /**
   * @param {?} n
   * @param {?} x
   * @return {?}
   */
  d3.min = function(n, x) {
    var value;
    var v;
    /** @type {number} */
    var i = -1;
    var length = n.length;
    if (1 === arguments.length) {
      for (; ++i < length && !(null != (value = n[i]) && value >= value);) {
        value = void 0;
      }
      for (; ++i < length;) {
        if (null != (v = n[i]) && value > v) {
          value = v;
        }
      }
    } else {
      for (; ++i < length && !(null != (value = x.call(n, n[i], i)) && value >= value);) {
        value = void 0;
      }
      for (; ++i < length;) {
        if (null != (v = x.call(n, n[i], i)) && value > v) {
          value = v;
        }
      }
    }
    return value;
  };
  /**
   * @param {number} data
   * @param {?} fn
   * @return {?}
   */
  d3.max = function(data, fn) {
    var result;
    var value;
    /** @type {number} */
    var i = -1;
    var index = data.length;
    if (1 === arguments.length) {
      for (; ++i < index && !(null != (result = data[i]) && result >= result);) {
        result = void 0;
      }
      for (; ++i < index;) {
        if (null != (value = data[i]) && value > result) {
          result = value;
        }
      }
    } else {
      for (; ++i < index && !(null != (result = fn.call(data, data[i], i)) && result >= result);) {
        result = void 0;
      }
      for (; ++i < index;) {
        if (null != (value = fn.call(data, data[i], i)) && value > result) {
          result = value;
        }
      }
    }
    return result;
  };
  /**
   * @param {!Array} e
   * @param {!Function} options
   * @return {?}
   */
  d3.extent = function(e, options) {
    var a;
    var c;
    var d;
    /** @type {number} */
    var i = -1;
    var index = e.length;
    if (1 === arguments.length) {
      for (; ++i < index && !(null != (a = d = e[i]) && a >= a);) {
        a = d = void 0;
      }
      for (; ++i < index;) {
        if (null != (c = e[i])) {
          if (a > c) {
            a = c;
          }
          if (c > d) {
            d = c;
          }
        }
      }
    } else {
      for (; ++i < index && !(null != (a = d = options.call(e, e[i], i)) && a >= a);) {
        a = void 0;
      }
      for (; ++i < index;) {
        if (null != (c = options.call(e, e[i], i))) {
          if (a > c) {
            a = c;
          }
          if (c > d) {
            d = c;
          }
        }
      }
    }
    return [a, d];
  };
  /**
   * @param {!Array} fn
   * @param {!Function} self
   * @return {?}
   */
  d3.sum = function(fn, self) {
    var c;
    /** @type {number} */
    var ans = 0;
    var fl = fn.length;
    /** @type {number} */
    var f = -1;
    if (1 === arguments.length) {
      for (; ++f < fl;) {
        if (!isNaN(c = +fn[f])) {
          /** @type {number} */
          ans = ans + c;
        }
      }
    } else {
      for (; ++f < fl;) {
        if (!isNaN(c = +self.call(fn, fn[f], f))) {
          /** @type {number} */
          ans = ans + c;
        }
      }
    }
    return ans;
  };
  /**
   * @param {!Array} a
   * @param {!Function} c
   * @return {?}
   */
  d3.mean = function(a, c) {
    var arg;
    /** @type {number} */
    var total = 0;
    var l = a.length;
    /** @type {number} */
    var i = -1;
    var m = l;
    if (1 === arguments.length) {
      for (; ++i < l;) {
        if (filter(arg = a[i])) {
          total = total + arg;
        } else {
          --m;
        }
      }
    } else {
      for (; ++i < l;) {
        if (filter(arg = c.call(a, a[i], i))) {
          total = total + arg;
        } else {
          --m;
        }
      }
    }
    return m ? total / m : void 0;
  };
  /**
   * @param {!Array} a
   * @param {number} b
   * @return {?}
   */
  d3.quantile = function(a, b) {
    /** @type {number} */
    var h = (a.length - 1) * b + 1;
    /** @type {number} */
    var i = Math.floor(h);
    /** @type {number} */
    var x1 = +a[i - 1];
    /** @type {number} */
    var t = h - i;
    return t ? x1 + t * (a[i] - x1) : x1;
  };
  /**
   * @param {!Array} data
   * @param {undefined} obj
   * @return {?}
   */
  d3.median = function(data, obj) {
    return arguments.length > 1 && (data = data.map(obj)), data = data.filter(filter), data.length ? d3.quantile(data.sort(a), .5) : void 0;
  };
  var scopedRect = bisector(a);
  d3.bisectLeft = scopedRect.left;
  d3.bisect = d3.bisectRight = scopedRect.right;
  /**
   * @param {!Function} compare
   * @return {?}
   */
  d3.bisector = function(compare) {
    return bisector(1 === compare.length ? function(c, label) {
      return a(compare(c), label);
    } : compare);
  };
  /**
   * @param {!Object} array
   * @return {?}
   */
  d3.shuffle = function(array) {
    var tmp;
    var min;
    var i = array.length;
    for (; i;) {
      /** @type {number} */
      min = Math.random() * i-- | 0;
      tmp = array[i];
      array[i] = array[min];
      array[min] = tmp;
    }
    return array;
  };
  /**
   * @param {?} array
   * @param {!Object} index
   * @return {?}
   */
  d3.permute = function(array, index) {
    var i = index.length;
    /** @type {!Array} */
    var copy = new Array(i);
    for (; i--;) {
      copy[i] = array[index[i]];
    }
    return copy;
  };
  /**
   * @param {!Object} array
   * @return {?}
   */
  d3.pairs = function(array) {
    var validationVM;
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var l = array.length - 1;
    var v = array[0];
    /** @type {!Array} */
    var pairs = new Array(0 > l ? 0 : l);
    for (; l > i;) {
      /** @type {!Array} */
      pairs[i] = [validationVM = v, v = array[++i]];
    }
    return pairs;
  };
  /**
   * @return {?}
   */
  d3.zip = function() {
    if (!(max = arguments.length)) {
      return [];
    }
    /** @type {number} */
    var a = -1;
    var len = d3.min(arguments, size);
    /** @type {!Array} */
    var ret = new Array(len);
    for (; ++a < len;) {
      var max;
      /** @type {number} */
      var i = -1;
      /** @type {!Array} */
      var user = ret[a] = new Array(max);
      for (; ++i < max;) {
        user[i] = arguments[i][a];
      }
    }
    return ret;
  };
  /**
   * @param {!Object} array
   * @return {?}
   */
  d3.transpose = function(array) {
    return d3.zip.apply(d3, array);
  };
  /**
   * @param {!Object} value
   * @return {?}
   */
  d3.keys = function(value) {
    /** @type {!Array} */
    var objKeys = [];
    var i;
    for (i in value) {
      objKeys.push(i);
    }
    return objKeys;
  };
  /**
   * @param {!Object} value
   * @return {?}
   */
  d3.values = function(value) {
    /** @type {!Array} */
    var tmp = [];
    var i;
    for (i in value) {
      tmp.push(value[i]);
    }
    return tmp;
  };
  /**
   * @param {!Object} options
   * @return {?}
   */
  d3.entries = function(options) {
    /** @type {!Array} */
    var entries = [];
    var i;
    for (i in options) {
      entries.push({
        key : i,
        value : options[i]
      });
    }
    return entries;
  };
  /**
   * @param {!Array} a
   * @return {?}
   */
  d3.merge = function(a) {
    var k;
    var t;
    var s;
    var i = a.length;
    /** @type {number} */
    var j = -1;
    /** @type {number} */
    var x = 0;
    for (; ++j < i;) {
      x = x + a[j].length;
    }
    /** @type {!Array} */
    t = new Array(x);
    for (; --i >= 0;) {
      s = a[i];
      k = s.length;
      for (; --k >= 0;) {
        t[--x] = s[k];
      }
    }
    return t;
  };
  /** @type {function(?): number} */
  var abs = Math.abs;
  /**
   * @param {number} i
   * @param {number} x
   * @param {number} step
   * @return {?}
   */
  d3.range = function(i, x, step) {
    if (arguments.length < 3 && (step = 1, arguments.length < 2 && (x = i, i = 0)), (x - i) / step === 1 / 0) {
      throw new Error("infinite range");
    }
    var len;
    /** @type {!Array} */
    var arr = [];
    var factor = sqrt(abs(step));
    /** @type {number} */
    var h = -1;
    if (i = i * factor, x = x * factor, step = step * factor, 0 > step) {
      for (; (len = i + step * ++h) > x;) {
        arr.push(len / factor);
      }
    } else {
      for (; (len = i + step * ++h) < x;) {
        arr.push(len / factor);
      }
    }
    return arr;
  };
  /**
   * @param {string} object
   * @return {?}
   */
  d3.map = function(object) {
    var map = new d3_Map;
    if (object instanceof d3_Map) {
      object.forEach(function(child, c) {
        map.set(child, c);
      });
    } else {
      var key;
      for (key in object) {
        map.set(key, object[key]);
      }
    }
    return map;
  };
  d3_class(d3_Map, {
    has : hasMux,
    get : function(str) {
      return this[char + str];
    },
    set : function(str, value) {
      return this[char + str] = value;
    },
    remove : toRemove,
    keys : keys,
    values : function() {
      /** @type {!Array} */
      var constrTypes = [];
      return this.forEach(function(b, c) {
        constrTypes.push(c);
      }), constrTypes;
    },
    entries : function() {
      /** @type {!Array} */
      var flattenedKeys = [];
      return this.forEach(function(awsKey, command_module_id) {
        flattenedKeys.push({
          key : awsKey,
          value : command_module_id
        });
      }), flattenedKeys;
    },
    size : slugify,
    empty : d3_map_empty,
    forEach : function(object) {
      var name;
      for (name in this) {
        if (name.charCodeAt(0) === gh) {
          object.call(this, name.substring(1), this[name]);
        }
      }
    }
  });
  /** @type {string} */
  var char = "\x00";
  /** @type {number} */
  var gh = char.charCodeAt(0);
  /**
   * @return {?}
   */
  d3.nest = function() {
    /**
     * @param {string} c
     * @param {!Array} array
     * @param {number} value
     * @return {?}
     */
    function map(c, array, value) {
      if (value >= options.length) {
        return rollup ? rollup.call(nest, array) : result ? array.sort(result) : array;
      }
      var key;
      var result;
      var e;
      var queueResults;
      /** @type {number} */
      var i = -1;
      var length = array.length;
      var isUndefined = options[value++];
      var me = new d3_Map;
      for (; ++i < length;) {
        if (queueResults = me.get(key = isUndefined(result = array[i]))) {
          queueResults.push(result);
        } else {
          me.set(key, [result]);
        }
      }
      return c ? (result = c(), e = function(type, key) {
        result.set(type, map(c, key, value));
      }) : (result = {}, e = function(key, i) {
        result[key] = map(c, i, value);
      }), me.forEach(e), result;
    }
    /**
     * @param {!Array} map
     * @param {number} depth
     * @return {?}
     */
    function entries(map, depth) {
      if (depth >= options.length) {
        return map;
      }
      /** @type {!Array} */
      var array = [];
      var sortKey = sortKeys[depth++];
      return map.forEach(function(awsKey, keyMap) {
        array.push({
          key : awsKey,
          values : entries(keyMap, depth)
        });
      }), sortKey ? array.sort(function(a, b) {
        return sortKey(a.key, b.key);
      }) : array;
    }
    var result;
    var rollup;
    var nest = {};
    /** @type {!Array} */
    var options = [];
    /** @type {!Array} */
    var sortKeys = [];
    return nest.map = function(object, name) {
      return map(name, object, 0);
    }, nest.entries = function(array) {
      return entries(map(d3.map, array, 0), 0);
    }, nest.key = function(index) {
      return options.push(index), nest;
    }, nest.sortKeys = function(order) {
      return sortKeys[options.length - 1] = order, nest;
    }, nest.sortValues = function(type) {
      return result = type, nest;
    }, nest.rollup = function(f) {
      return rollup = f, nest;
    }, nest;
  };
  /**
   * @param {!Object} arr
   * @return {?}
   */
  d3.set = function(arr) {
    var set = new d3_Set;
    if (arr) {
      /** @type {number} */
      var i = 0;
      var len = arr.length;
      for (; len > i; ++i) {
        set.add(arr[i]);
      }
    }
    return set;
  };
  d3_class(d3_Set, {
    has : hasMux,
    add : function(id) {
      return this[char + id] = true, id;
    },
    remove : function(str) {
      return str = char + str, str in this && delete this[str];
    },
    values : keys,
    size : slugify,
    empty : d3_map_empty,
    forEach : function(object) {
      var app1Data;
      for (app1Data in this) {
        if (app1Data.charCodeAt(0) === gh) {
          object.call(this, app1Data.substring(1));
        }
      }
    }
  });
  d3.behavior = {};
  /**
   * @param {!Function} target
   * @param {string} name
   * @return {?}
   */
  d3.rebind = function(target, name) {
    var i;
    /** @type {number} */
    var j = 1;
    /** @type {number} */
    var m = arguments.length;
    for (; ++j < m;) {
      target[i = arguments[j]] = bind(target, name, name[i]);
    }
    return target;
  };
  /** @type {!Array} */
  var d3_vendorPrefixes = ["webkit", "ms", "moz", "Moz", "o", "O"];
  /**
   * @return {?}
   */
  d3.dispatch = function() {
    var dispatch = new d3_dispatch;
    /** @type {number} */
    var i = -1;
    /** @type {number} */
    var length = arguments.length;
    for (; ++i < length;) {
      dispatch[arguments[i]] = d3_dispatch_event(dispatch);
    }
    return dispatch;
  };
  /**
   * @param {string} type
   * @param {string} name
   * @return {?}
   */
  d3_dispatch.prototype.on = function(type, name) {
    var pound = type.indexOf(".");
    /** @type {string} */
    var d = "";
    if (pound >= 0 && (d = type.substring(pound + 1), type = type.substring(0, pound)), type) {
      return arguments.length < 2 ? this[type].on(d) : this[type].on(d, name);
    }
    if (2 === arguments.length) {
      if (null == name) {
        for (type in this) {
          if (this.hasOwnProperty(type)) {
            this[type].on(d, null);
          }
        }
      }
      return this;
    }
  };
  /** @type {null} */
  d3.event = null;
  /**
   * @param {!Object} string
   * @return {?}
   */
  d3.requote = function(string) {
    return string.replace(regSpaceAll, "\\$&");
  };
  /** @type {!RegExp} */
  var regSpaceAll = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
  /** @type {function(!Object, !Object): undefined} */
  var equal = {}.__proto__ ? function(array, prototype) {
    /** @type {!Object} */
    array.__proto__ = prototype;
  } : function(array, prototype) {
    var k;
    for (k in prototype) {
      array[k] = prototype[k];
    }
  };
  /**
   * @param {!Object} id
   * @param {!HTMLDocument} info
   * @return {?}
   */
  var has = function(id, info) {
    return info.querySelector(id);
  };
  /**
   * @param {string} s
   * @param {!HTMLElement} n
   * @return {?}
   */
  var d3_selectAll = function(s, n) {
    return n.querySelectorAll(s);
  };
  var newpos = node.matches || node[d3_vendorSymbol(node, "matchesSelector")];
  /**
   * @param {!Object} n
   * @param {!Object} s
   * @return {?}
   */
  var d3_selectMatches = function(n, s) {
    return newpos.call(n, s);
  };
  if ("function" == typeof Sizzle) {
    /**
     * @param {!Function} s
     * @param {!HTMLElement} root
     * @return {?}
     */
    has = function(s, root) {
      return Sizzle(s, root)[0] || null;
    };
    d3_selectAll = Sizzle;
    d3_selectMatches = Sizzle.matchesSelector;
  }
  /**
   * @return {?}
   */
  d3.selection = function() {
    return sel;
  };
  /** @type {!Array} */
  var d3_selectionPrototype = d3.selection.prototype = [];
  /**
   * @param {!Object} data
   * @return {?}
   */
  d3_selectionPrototype.select = function(data) {
    var subgroup;
    var subnode;
    var group;
    var node;
    /** @type {!Array} */
    var subgroups = [];
    data = checkData(data);
    /** @type {number} */
    var x = -1;
    var end = this.length;
    for (; ++x < end;) {
      subgroups.push(subgroup = []);
      subgroup.parentNode = (group = this[x]).parentNode;
      /** @type {number} */
      var i = -1;
      var n = group.length;
      for (; ++i < n;) {
        if (node = group[i]) {
          subgroup.push(subnode = data.call(node, node.__data__, i, x));
          if (subnode && "__data__" in node) {
            subnode.__data__ = node.__data__;
          }
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_selection(subgroups);
  };
  /**
   * @param {!Object} selector
   * @return {?}
   */
  d3_selectionPrototype.selectAll = function(selector) {
    var subgroup;
    var node;
    /** @type {!Array} */
    var subgroups = [];
    selector = d3_selection_selectorAll(selector);
    /** @type {number} */
    var j = -1;
    var i = this.length;
    for (; ++j < i;) {
      var tuple = this[j];
      /** @type {number} */
      var i = -1;
      var l = tuple.length;
      for (; ++i < l;) {
        if (node = tuple[i]) {
          subgroups.push(subgroup = d3_array(selector.call(node, node.__data__, i, j)));
          subgroup.parentNode = node;
        }
      }
    }
    return d3_selection(subgroups);
  };
  var d3_nsPrefix = {
    svg : "http://www.w3.org/2000/svg",
    xhtml : "http://www.w3.org/1999/xhtml",
    xlink : "http://www.w3.org/1999/xlink",
    xml : "http://www.w3.org/XML/1998/namespace",
    xmlns : "http://www.w3.org/2000/xmlns/"
  };
  d3.ns = {
    prefix : d3_nsPrefix,
    qualify : function(name) {
      var i = name.indexOf(":");
      /** @type {string} */
      var prefix = name;
      return i >= 0 && (prefix = name.substring(0, i), name = name.substring(i + 1)), d3_nsPrefix.hasOwnProperty(prefix) ? {
        space : d3_nsPrefix[prefix],
        local : name
      } : name;
    }
  };
  /**
   * @param {!Object} name
   * @param {?} value
   * @return {?}
   */
  d3_selectionPrototype.attr = function(name, value) {
    if (arguments.length < 2) {
      if ("string" == typeof name) {
        var node = this.node();
        return name = d3.ns.qualify(name), name.local ? node.getAttributeNS(name.space, name.local) : node.getAttribute(name);
      }
      for (value in name) {
        this.each(d3_selection_attr(value, name[value]));
      }
      return this;
    }
    return this.each(d3_selection_attr(name, value));
  };
  /**
   * @param {!Object} name
   * @param {string} value
   * @return {?}
   */
  d3_selectionPrototype.classed = function(name, value) {
    if (arguments.length < 2) {
      if ("string" == typeof name) {
        var element = this.node();
        var length = (name = d3_selection_classes(name)).length;
        /** @type {number} */
        var i = -1;
        if (value = element.classList) {
          for (; ++i < length;) {
            if (!value.contains(name[i])) {
              return false;
            }
          }
        } else {
          value = element.getAttribute("class");
          for (; ++i < length;) {
            if (!d3_selection_classedRe(name[i]).test(value)) {
              return false;
            }
          }
        }
        return true;
      }
      for (value in name) {
        this.each(d3_selection_classed(value, name[value]));
      }
      return this;
    }
    return this.each(d3_selection_classed(name, value));
  };
  /**
   * @param {!Object} name
   * @param {string} value
   * @param {string} priority
   * @return {?}
   */
  d3_selectionPrototype.style = function(name, value, priority) {
    /** @type {number} */
    var _len8 = arguments.length;
    if (3 > _len8) {
      if ("string" != typeof name) {
        if (2 > _len8) {
          /** @type {string} */
          value = "";
        }
        for (priority in name) {
          this.each(d3_selection_style(priority, name[priority], value));
        }
        return this;
      }
      if (2 > _len8) {
        return root.getComputedStyle(this.node(), null).getPropertyValue(name);
      }
      /** @type {string} */
      priority = "";
    }
    return this.each(d3_selection_style(name, value, priority));
  };
  /**
   * @param {string} key
   * @param {string} name
   * @return {?}
   */
  d3_selectionPrototype.property = function(key, name) {
    if (arguments.length < 2) {
      if ("string" == typeof key) {
        return this.node()[key];
      }
      for (name in key) {
        this.each(test(name, key[name]));
      }
      return this;
    }
    return this.each(test(key, name));
  };
  /**
   * @param {?} value
   * @return {?}
   */
  d3_selectionPrototype.text = function(value) {
    return arguments.length ? this.each("function" == typeof value ? function() {
      var spec = value.apply(this, arguments);
      this.textContent = null == spec ? "" : spec;
    } : null == value ? function() {
      /** @type {string} */
      this.textContent = "";
    } : function() {
      this.textContent = value;
    }) : this.node().textContent;
  };
  /**
   * @param {!Object} value
   * @return {?}
   */
  d3_selectionPrototype.html = function(value) {
    return arguments.length ? this.each("function" == typeof value ? function() {
      var v = value.apply(this, arguments);
      this.innerHTML = null == v ? "" : v;
    } : null == value ? function() {
      /** @type {string} */
      this.innerHTML = "";
    } : function() {
      /** @type {!Object} */
      this.innerHTML = value;
    }) : this.node().innerHTML;
  };
  /**
   * @param {!Object} value
   * @return {?}
   */
  d3_selectionPrototype.append = function(value) {
    return value = parse(value), this.select(function() {
      return this.appendChild(value.apply(this, arguments));
    });
  };
  /**
   * @param {string} node
   * @param {string} name
   * @return {?}
   */
  d3_selectionPrototype.insert = function(node, name) {
    return node = parse(node), name = checkData(name), this.select(function() {
      return this.insertBefore(node.apply(this, arguments), name.apply(this, arguments) || null);
    });
  };
  /**
   * @return {?}
   */
  d3_selectionPrototype.remove = function() {
    return this.each(function() {
      var parent = this.parentNode;
      if (parent) {
        parent.removeChild(this);
      }
    });
  };
  /**
   * @param {!Object} value
   * @param {!Object} key
   * @return {?}
   */
  d3_selectionPrototype.data = function(value, key) {
    /**
     * @param {!Object} group
     * @param {!Object} data
     * @return {undefined}
     */
    function bind(group, data) {
      var i;
      var node;
      var b;
      var n = group.length;
      var size = data.length;
      /** @type {number} */
      var len = Math.min(n, size);
      /** @type {!Array} */
      var result = new Array(size);
      /** @type {!Array} */
      var a = new Array(size);
      /** @type {!Array} */
      var exitNodes = new Array(n);
      if (key) {
        var label;
        var self = new d3_Map;
        var map = new d3_Map;
        /** @type {!Array} */
        var attributes = [];
        /** @type {number} */
        i = -1;
        for (; ++i < n;) {
          label = key.call(node = group[i], node.__data__, i);
          if (self.has(label)) {
            exitNodes[i] = node;
          } else {
            self.set(label, node);
          }
          attributes.push(label);
        }
        /** @type {number} */
        i = -1;
        for (; ++i < size;) {
          label = key.call(data, b = data[i], i);
          if (node = self.get(label)) {
            result[i] = node;
            node.__data__ = b;
          } else {
            if (!map.has(label)) {
              a[i] = x(b);
            }
          }
          map.set(label, b);
          self.remove(label);
        }
        /** @type {number} */
        i = -1;
        for (; ++i < n;) {
          if (self.has(attributes[i])) {
            exitNodes[i] = group[i];
          }
        }
      } else {
        /** @type {number} */
        i = -1;
        for (; ++i < len;) {
          node = group[i];
          b = data[i];
          if (node) {
            node.__data__ = b;
            result[i] = node;
          } else {
            a[i] = x(b);
          }
        }
        for (; size > i; ++i) {
          a[i] = x(data[i]);
        }
        for (; n > i; ++i) {
          exitNodes[i] = group[i];
        }
      }
      /** @type {!Array} */
      a.update = result;
      a.parentNode = result.parentNode = exitNodes.parentNode = group.parentNode;
      enter.push(a);
      selection.push(result);
      exit.push(exitNodes);
    }
    var group;
    var node;
    /** @type {number} */
    var i = -1;
    var l = this.length;
    if (!arguments.length) {
      /** @type {!Array} */
      value = new Array(l = (group = this[0]).length);
      for (; ++i < l;) {
        if (node = group[i]) {
          value[i] = node.__data__;
        }
      }
      return value;
    }
    var enter = d3_selection_enter([]);
    var selection = d3_selection([]);
    var exit = d3_selection([]);
    if ("function" == typeof value) {
      for (; ++i < l;) {
        bind(group = this[i], value.call(group, group.parentNode.__data__, i));
      }
    } else {
      for (; ++i < l;) {
        bind(group = this[i], value);
      }
    }
    return selection.enter = function() {
      return enter;
    }, selection.exit = function() {
      return exit;
    }, selection;
  };
  /**
   * @param {string} value
   * @return {?}
   */
  d3_selectionPrototype.datum = function(value) {
    return arguments.length ? this.property("__data__", value) : this.property("__data__");
  };
  /**
   * @param {!Object} fn
   * @return {?}
   */
  d3_selectionPrototype.filter = function(fn) {
    var subgroup;
    var group;
    var node;
    /** @type {!Array} */
    var subgroups = [];
    if ("function" != typeof fn) {
      fn = co(fn);
    }
    /** @type {number} */
    var j = 0;
    var length = this.length;
    for (; length > j; j++) {
      subgroups.push(subgroup = []);
      subgroup.parentNode = (group = this[j]).parentNode;
      /** @type {number} */
      var i = 0;
      var n = group.length;
      for (; n > i; i++) {
        if ((node = group[i]) && fn.call(node, node.__data__, i, j)) {
          subgroup.push(node);
        }
      }
    }
    return d3_selection(subgroups);
  };
  /**
   * @return {?}
   */
  d3_selectionPrototype.order = function() {
    /** @type {number} */
    var i = -1;
    var l = this.length;
    for (; ++i < l;) {
      var node;
      var group = this[i];
      /** @type {number} */
      var index = group.length - 1;
      var next = group[index];
      for (; --index >= 0;) {
        if (node = group[index]) {
          if (next && next !== node.nextSibling) {
            next.parentNode.insertBefore(node, next);
          }
          next = node;
        }
      }
    }
    return this;
  };
  /**
   * @param {!Function} data
   * @return {?}
   */
  d3_selectionPrototype.sort = function(data) {
    data = query.apply(this, arguments);
    /** @type {number} */
    var i = -1;
    var l = this.length;
    for (; ++i < l;) {
      this[i].sort(data);
    }
    return this.order();
  };
  /**
   * @param {!Function} object
   * @return {?}
   */
  d3_selectionPrototype.each = function(object) {
    return emit(this, function(data, trim, array) {
      object.call(data, data.__data__, trim, array);
    });
  };
  /**
   * @param {!Object} obj
   * @return {?}
   */
  d3_selectionPrototype.call = function(obj) {
    var args = d3_array(arguments);
    return obj.apply(args[0] = this, args), this;
  };
  /**
   * @return {?}
   */
  d3_selectionPrototype.empty = function() {
    return !this.node();
  };
  /**
   * @return {?}
   */
  d3_selectionPrototype.node = function() {
    /** @type {number} */
    var i = 0;
    var l = this.length;
    for (; l > i; i++) {
      var buffer = this[i];
      /** @type {number} */
      var j = 0;
      var length = buffer.length;
      for (; length > j; j++) {
        var element = buffer[j];
        if (element) {
          return element;
        }
      }
    }
    return null;
  };
  /**
   * @return {?}
   */
  d3_selectionPrototype.size = function() {
    /** @type {number} */
    var a = 0;
    return this.each(function() {
      ++a;
    }), a;
  };
  /** @type {!Array} */
  var d3_selection_enterPrototype = [];
  /** @type {function(?): ?} */
  d3.selection.enter = d3_selection_enter;
  /** @type {!Array} */
  d3.selection.enter.prototype = d3_selection_enterPrototype;
  /** @type {function(!Object): ?} */
  d3_selection_enterPrototype.append = d3_selectionPrototype.append;
  /** @type {function(): ?} */
  d3_selection_enterPrototype.empty = d3_selectionPrototype.empty;
  /** @type {function(): ?} */
  d3_selection_enterPrototype.node = d3_selectionPrototype.node;
  /** @type {function(!Object): ?} */
  d3_selection_enterPrototype.call = d3_selectionPrototype.call;
  /** @type {function(): ?} */
  d3_selection_enterPrototype.size = d3_selectionPrototype.size;
  /**
   * @param {!Object} selector
   * @return {?}
   */
  d3_selection_enterPrototype.select = function(selector) {
    var subgroup;
    var subnode;
    var upgroup;
    var group;
    var node;
    /** @type {!Array} */
    var subgroups = [];
    /** @type {number} */
    var j = -1;
    var i = this.length;
    for (; ++j < i;) {
      upgroup = (group = this[j]).update;
      subgroups.push(subgroup = []);
      subgroup.parentNode = group.parentNode;
      /** @type {number} */
      var i = -1;
      var n = group.length;
      for (; ++i < n;) {
        if (node = group[i]) {
          subgroup.push(upgroup[i] = subnode = selector.call(group.parentNode, node.__data__, i, j));
          subnode.__data__ = node.__data__;
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_selection(subgroups);
  };
  /**
   * @param {string} name
   * @param {string} node
   * @return {?}
   */
  d3_selection_enterPrototype.insert = function(name, node) {
    return arguments.length < 2 && (node = wrap(this)), d3_selectionPrototype.insert.call(this, name, node);
  };
  /**
   * @return {?}
   */
  d3_selectionPrototype.transition = function() {
    var a;
    var node;
    var kibana = d3_transitionInheritId || ++Dj;
    /** @type {!Array} */
    var e = [];
    var transition = searchScope || {
      time : Date.now(),
      ease : ease,
      delay : 0,
      duration : 250
    };
    /** @type {number} */
    var j = -1;
    var i = this.length;
    for (; ++j < i;) {
      e.push(a = []);
      var tuple = this[j];
      /** @type {number} */
      var i = -1;
      var l = tuple.length;
      for (; ++i < l;) {
        if (node = tuple[i]) {
          d3_transitionNode(node, i, kibana, transition);
        }
        a.push(node);
      }
    }
    return resolve(e, kibana);
  };
  /**
   * @return {?}
   */
  d3_selectionPrototype.interrupt = function() {
    return this.each(stop);
  };
  /**
   * @param {!Object} id
   * @return {?}
   */
  d3.select = function(id) {
    /** @type {!Array} */
    var refNode = ["string" == typeof id ? has(id, doc) : id];
    return refNode.parentNode = node, d3_selection([refNode]);
  };
  /**
   * @param {string} str
   * @return {?}
   */
  d3.selectAll = function(str) {
    var group = d3_array("string" == typeof str ? d3_selectAll(str, doc) : str);
    return group.parentNode = node, d3_selection([group]);
  };
  var sel = d3.select(node);
  /**
   * @param {string} type
   * @param {string} name
   * @param {string} capture
   * @return {?}
   */
  d3_selectionPrototype.on = function(type, name, capture) {
    /** @type {number} */
    var n = arguments.length;
    if (3 > n) {
      if ("string" != typeof type) {
        if (2 > n) {
          /** @type {boolean} */
          name = false;
        }
        for (capture in type) {
          this.each(d3_selection_on(capture, type[capture], name));
        }
        return this;
      }
      if (2 > n) {
        return (n = this.node()["__on" + type]) && n._;
      }
      /** @type {boolean} */
      capture = false;
    }
    return this.each(d3_selection_on(type, name, capture));
  };
  var timeOverlay = d3.map({
    mouseenter : "mouseover",
    mouseleave : "mouseout"
  });
  timeOverlay.forEach(function(s) {
    if ("on" + s in doc) {
      timeOverlay.remove(s);
    }
  });
  var prop = "onselectstart" in doc ? null : d3_vendorSymbol(node.style, "userSelect");
  /** @type {number} */
  var uh = 0;
  /**
   * @param {undefined} container
   * @return {?}
   */
  d3.mouse = function(container) {
    return d3_mousePoint(container, sourceEvent());
  };
  /** @type {number} */
  var vh = /WebKit/.test(root.navigator.userAgent) ? -1 : 0;
  /**
   * @param {undefined} container
   * @param {!Array} touches
   * @return {?}
   */
  d3.touches = function(container, touches) {
    return arguments.length < 2 && (touches = sourceEvent().touches), touches ? d3_array(touches).map(function(touch) {
      var point = d3_mousePoint(container, touch);
      return point.identifier = touch.identifier, point;
    }) : [];
  };
  /**
   * @return {?}
   */
  d3.behavior.drag = function() {
    /**
     * @return {undefined}
     */
    function drag() {
      this.on("mousedown.drag", mousedown).on("touchstart.drag", touchstart);
    }
    /**
     * @param {!Function} id
     * @param {!Function} position
     * @param {!Function} subject
     * @param {string} move
     * @param {string} end
     * @return {?}
     */
    function dragstart(id, position, subject, move, end) {
      return function() {
        /**
         * @return {undefined}
         */
        function _move() {
          var dx;
          var dy;
          var p = position(row, i);
          if (p) {
            /** @type {number} */
            dx = p[0] - pos[0];
            /** @type {number} */
            dy = p[1] - pos[1];
            /** @type {number} */
            moved = moved | (dx | dy);
            pos = p;
            dispatch({
              type : "drag",
              x : p[0] + offset[0],
              y : p[1] + offset[1],
              dx : dx,
              dy : dy
            });
          }
        }
        /**
         * @return {undefined}
         */
        function ended() {
          if (position(row, i)) {
            dragSubject.on(move + dragName, null).on(end + dragName, null);
            dragRestore(moved && d3.event.target === eventTarget);
            dispatch({
              type : "dragend"
            });
          }
        }
        var offset;
        var p = this;
        var eventTarget = d3.event.target;
        var row = p.parentNode;
        var dispatch = event.of(p, arguments);
        /** @type {number} */
        var moved = 0;
        var i = id();
        /** @type {string} */
        var dragName = ".drag" + (null == i ? "" : "-" + i);
        var dragSubject = d3.select(subject()).on(move + dragName, _move).on(end + dragName, ended);
        var dragRestore = d3_event_dragSuppress();
        var pos = position(row, i);
        if (filter) {
          offset = filter.apply(p, arguments);
          /** @type {!Array} */
          offset = [offset.x - pos[0], offset.y - pos[1]];
        } else {
          /** @type {!Array} */
          offset = [0, 0];
        }
        dispatch({
          type : "dragstart"
        });
      };
    }
    var event = d3_eventDispatch(drag, "drag", "dragstart", "dragend");
    /** @type {null} */
    var filter = null;
    var mousedown = dragstart(d3_noop, d3.mouse, d3_behavior_dragMouseSubject, "mousemove", "mouseup");
    var touchstart = dragstart(d3_behavior_dragTouchId, d3.touch, d3_behavior_dragTouchSubject, "touchmove", "touchend");
    return drag.origin = function(_) {
      return arguments.length ? (filter = _, drag) : filter;
    }, d3.rebind(drag, event, "on");
  };
  /** @type {number} */
  var val = Math.PI;
  /** @type {number} */
  var tau = 2 * val;
  /** @type {number} */
  var halfPi = val / 2;
  /** @type {number} */
  var epsilon = 1E-6;
  /** @type {number} */
  var tooLessCounter = epsilon * epsilon;
  /** @type {number} */
  var factor = val / 180;
  /** @type {number} */
  var scale = 180 / val;
  /** @type {number} */
  var m = Math.SQRT2;
  /** @type {number} */
  var zz = 2;
  /** @type {number} */
  var healthSpeed = 4;
  /**
   * @param {!Array} scale
   * @param {!Array} translate
   * @return {?}
   */
  d3.interpolateZoom = function(scale, translate) {
    /**
     * @param {number} duration
     * @return {?}
     */
    function t(duration) {
      /** @type {number} */
      var d = duration * wordsinslide;
      if (r) {
        var b = require(c);
        /** @type {number} */
        var duration = y / (zz * f) * (b * ChiSq(m * d + c) - pow(c));
        return [start + duration * longX, cursor + duration * longY, y * b / require(m * d + c)];
      }
      return [start + duration * longX, cursor + duration * longY, y * Math.exp(m * d)];
    }
    var start = scale[0];
    var cursor = scale[1];
    var y = scale[2];
    var x = translate[0];
    var total = translate[1];
    var z = translate[2];
    /** @type {number} */
    var longX = x - start;
    /** @type {number} */
    var longY = total - cursor;
    /** @type {number} */
    var dt = longX * longX + longY * longY;
    /** @type {number} */
    var f = Math.sqrt(dt);
    /** @type {number} */
    var b = (z * z - y * y + healthSpeed * dt) / (2 * y * zz * f);
    /** @type {number} */
    var time = (z * z - y * y - healthSpeed * dt) / (2 * z * zz * f);
    /** @type {number} */
    var c = Math.log(Math.sqrt(b * b + 1) - b);
    /** @type {number} */
    var w = Math.log(Math.sqrt(time * time + 1) - time);
    /** @type {number} */
    var r = w - c;
    /** @type {number} */
    var wordsinslide = (r || Math.log(z / y)) / m;
    return t.duration = 1e3 * wordsinslide, t;
  };
  /**
   * @return {?}
   */
  d3.behavior.zoom = function() {
    /**
     * @param {!Object} _
     * @return {undefined}
     */
    function zoom(_) {
      _.on(id, mousedown).on(POINTER_DOWN_EVENT_NAME + ".zoom", update).on(data, value).on("dblclick.zoom", move).on(eventKey, start);
    }
    /**
     * @param {!Object} pos
     * @return {?}
     */
    function add(pos) {
      return [(pos[0] - obj.x) / obj.k, (pos[1] - obj.y) / obj.k];
    }
    /**
     * @param {string} signal
     * @return {?}
     */
    function transform(signal) {
      return [signal[0] * obj.k + obj.x, signal[1] * obj.k + obj.y];
    }
    /**
     * @param {number} y
     * @return {undefined}
     */
    function translate(y) {
      /** @type {number} */
      obj.k = Math.max(size[0], Math.min(size[1], y));
    }
    /**
     * @param {!Object} el
     * @param {string} value
     * @return {undefined}
     */
    function draw(el, value) {
      value = transform(value);
      obj.x += el[0] - value[0];
      obj.y += el[1] - value[1];
    }
    /**
     * @return {undefined}
     */
    function scale() {
      if (n) {
        n.domain(e.range().map(function(now) {
          return (now - obj.x) / obj.k;
        }).map(e.invert));
      }
      if (x) {
        x.domain(t.range().map(function(disY) {
          return (disY - obj.y) / obj.k;
        }).map(t.invert));
      }
    }
    /**
     * @param {?} dispatch
     * @return {undefined}
     */
    function zoomstarted(dispatch) {
      dispatch({
        type : "zoomstart"
      });
    }
    /**
     * @param {?} dispatch
     * @return {undefined}
     */
    function zoomed(dispatch) {
      scale();
      dispatch({
        type : "zoom",
        scale : obj.k,
        translate : [obj.x, obj.y]
      });
    }
    /**
     * @param {?} dispatch
     * @return {undefined}
     */
    function zoomended(dispatch) {
      dispatch({
        type : "zoomend"
      });
    }
    /**
     * @return {undefined}
     */
    function mousedown() {
      /**
       * @return {undefined}
       */
      function dragmove() {
        /** @type {number} */
        dragged = 1;
        draw(d3.mouse(type), blue);
        zoomed(dispatch);
      }
      /**
       * @return {undefined}
       */
      function move() {
        node.on(data, root === type ? value : null).on(level, null);
        dragRestore(dragged && d3.event.target === target);
        zoomended(dispatch);
      }
      var type = this;
      var target = d3.event.target;
      var dispatch = event.of(type, arguments);
      /** @type {number} */
      var dragged = 0;
      var node = d3.select(root).on(data, dragmove).on(level, move);
      var blue = add(d3.mouse(type));
      var dragRestore = d3_event_dragSuppress();
      stop.call(type);
      zoomstarted(dispatch);
    }
    /**
     * @return {undefined}
     */
    function start() {
      /**
       * @return {?}
       */
      function init() {
        var typelist = d3.touches(type);
        return i = obj.k, typelist.forEach(function(obj) {
          if (obj.identifier in data) {
            data[obj.identifier] = add(obj);
          }
        }), typelist;
      }
      /**
       * @return {undefined}
       */
      function f() {
        var b = d3.event.target;
        d3.select(b).on(touchmove, change).on(zset, ended);
        query.push(b);
        var touchList = d3.event.changedTouches;
        /** @type {number} */
        var i = 0;
        var n = touchList.length;
        for (; n > i; ++i) {
          /** @type {null} */
          data[touchList[i].identifier] = null;
        }
        var el = init();
        /** @type {number} */
        var kj = Date.now();
        if (1 === el.length) {
          if (500 > kj - nj) {
            var e = el[0];
            var blue = data[e.identifier];
            translate(2 * obj.k);
            draw(e, blue);
            done();
            zoomed(dispatch);
          }
          /** @type {number} */
          nj = kj;
        } else {
          if (el.length > 1) {
            e = el[0];
            var s = el[1];
            /** @type {number} */
            var lightI = e[0] - s[0];
            /** @type {number} */
            var lightJ = e[1] - s[1];
            /** @type {number} */
            n = lightI * lightI + lightJ * lightJ;
          }
        }
      }
      /**
       * @return {undefined}
       */
      function change() {
        var p;
        var x;
        var c;
        var d;
        var e = d3.touches(type);
        /** @type {number} */
        var g = 0;
        var i = e.length;
        for (; i > g; ++g, d = null) {
          if (c = e[g], d = data[c.identifier]) {
            if (x) {
              break;
            }
            p = c;
            x = d;
          }
        }
        if (d) {
          /** @type {number} */
          var m = (m = c[0] - p[0]) * m + (m = c[1] - p[1]) * m;
          var b = n && Math.sqrt(m / n);
          /** @type {!Array} */
          p = [(p[0] + c[0]) / 2, (p[1] + c[1]) / 2];
          /** @type {!Array} */
          x = [(x[0] + d[0]) / 2, (x[1] + d[1]) / 2];
          translate(b * i);
        }
        /** @type {null} */
        nj = null;
        draw(p, x);
        zoomed(dispatch);
      }
      /**
       * @return {?}
       */
      function ended() {
        if (d3.event.touches.length) {
          var touchList = d3.event.changedTouches;
          /** @type {number} */
          var i = 0;
          var n = touchList.length;
          for (; n > i; ++i) {
            delete data[touchList[i].identifier];
          }
          var db;
          for (db in data) {
            return void init();
          }
        }
        d3.selectAll(query).on(name, null);
        Event.on(id, mousedown).on(eventKey, start);
        dragRestore();
        zoomended(dispatch);
      }
      var i;
      var type = this;
      var dispatch = event.of(type, arguments);
      var data = {};
      /** @type {number} */
      var n = 0;
      /** @type {string} */
      var name = ".zoom-" + d3.event.changedTouches[0].identifier;
      /** @type {string} */
      var touchmove = "touchmove" + name;
      /** @type {string} */
      var zset = "touchend" + name;
      /** @type {!Array} */
      var query = [];
      var Event = d3.select(type).on(id, null).on(eventKey, f);
      var dragRestore = d3_event_dragSuppress();
      stop.call(type);
      f();
      zoomstarted(dispatch);
    }
    /**
     * @return {undefined}
     */
    function update() {
      var dispatch = event.of(this, arguments);
      if (_takingTooLongTimeout) {
        clearTimeout(_takingTooLongTimeout);
      } else {
        stop.call(this);
        zoomstarted(dispatch);
      }
      /** @type {number} */
      _takingTooLongTimeout = setTimeout(function() {
        /** @type {null} */
        _takingTooLongTimeout = null;
        zoomended(dispatch);
      }, 50);
      done();
      var i = centerPoint || d3.mouse(this);
      if (!element) {
        element = add(i);
      }
      translate(Math.pow(2, .002 * onScroll()) * obj.k);
      draw(i, element);
      zoomed(dispatch);
    }
    /**
     * @return {undefined}
     */
    function value() {
      /** @type {null} */
      element = null;
    }
    /**
     * @return {undefined}
     */
    function move() {
      var dispatch = event.of(this, arguments);
      var canvas = d3.mouse(this);
      var blue = add(canvas);
      /** @type {number} */
      var j = Math.log(obj.k) / Math.LN2;
      zoomstarted(dispatch);
      translate(Math.pow(2, d3.event.shiftKey ? Math.ceil(j) - 1 : Math.floor(j) + 1));
      draw(canvas, blue);
      zoomed(dispatch);
      zoomended(dispatch);
    }
    var element;
    var centerPoint;
    var _takingTooLongTimeout;
    var nj;
    var e;
    var n;
    var t;
    var x;
    var obj = {
      x : 0,
      y : 0,
      k : 1
    };
    /** @type {!Array} */
    var filter = [960, 500];
    /** @type {!Array} */
    var size = big;
    /** @type {string} */
    var id = "mousedown.zoom";
    /** @type {string} */
    var data = "mousemove.zoom";
    /** @type {string} */
    var level = "mouseup.zoom";
    /** @type {string} */
    var eventKey = "touchstart.zoom";
    var event = d3_eventDispatch(zoom, "zoomstart", "zoom", "zoomend");
    return zoom.event = function(events) {
      events.each(function() {
        var dispatch = event.of(this, arguments);
        var p = obj;
        if (d3_transitionInheritId) {
          d3.select(this).transition().each("start.zoom", function() {
            obj = this.__chart__ || {
              x : 0,
              y : 0,
              k : 1
            };
            zoomstarted(dispatch);
          }).tween("zoom:zoom", function() {
            var width = filter[0];
            var name = filter[1];
            /** @type {number} */
            var x = width / 2;
            /** @type {number} */
            var y = name / 2;
            var getKeyComputeData = d3.interpolateZoom([(x - obj.x) / obj.k, (y - obj.y) / obj.k, width / obj.k], [(x - p.x) / p.k, (y - p.y) / p.k, width / p.k]);
            return function(key) {
              var data = getKeyComputeData(key);
              /** @type {number} */
              var k = width / data[2];
              this.__chart__ = obj = {
                x : x - data[0] * k,
                y : y - data[1] * k,
                k : k
              };
              zoomed(dispatch);
            };
          }).each("end.zoom", function() {
            zoomended(dispatch);
          });
        } else {
          this.__chart__ = obj;
          zoomstarted(dispatch);
          zoomed(dispatch);
          zoomended(dispatch);
        }
      });
    }, zoom.translate = function(strings) {
      return arguments.length ? (obj = {
        x : +strings[0],
        y : +strings[1],
        k : obj.k
      }, scale(), zoom) : [obj.x, obj.y];
    }, zoom.scale = function(b) {
      return arguments.length ? (obj = {
        x : obj.x,
        y : obj.y,
        k : +b
      }, scale(), zoom) : obj.k;
    }, zoom.scaleExtent = function(_) {
      return arguments.length ? (size = null == _ ? big : [+_[0], +_[1]], zoom) : size;
    }, zoom.center = function(viewportSize) {
      return arguments.length ? (centerPoint = viewportSize && [+viewportSize[0], +viewportSize[1]], zoom) : centerPoint;
    }, zoom.size = function(sizeHeight) {
      return arguments.length ? (filter = sizeHeight && [+sizeHeight[0], +sizeHeight[1]], zoom) : filter;
    }, zoom.x = function(name) {
      return arguments.length ? (n = name, e = name.copy(), obj = {
        x : 0,
        y : 0,
        k : 1
      }, zoom) : n;
    }, zoom.y = function(data) {
      return arguments.length ? (x = data, t = data.copy(), obj = {
        x : 0,
        y : 0,
        k : 1
      }, zoom) : x;
    }, d3.rebind(zoom, event, "on");
  };
  var onScroll;
  /** @type {!Array} */
  var big = [0, 1 / 0];
  /** @type {string} */
  var POINTER_DOWN_EVENT_NAME = "onwheel" in doc ? (onScroll = function() {
    return -d3.event.deltaY * (d3.event.deltaMode ? 120 : 1);
  }, "wheel") : "onmousewheel" in doc ? (onScroll = function() {
    return d3.event.wheelDelta;
  }, "mousewheel") : (onScroll = function() {
    return -d3.event.detail;
  }, "MozMousePixelScroll");
  /** @type {function(): undefined} */
  d3.color = d3_color;
  /**
   * @return {?}
   */
  d3_color.prototype.toString = function() {
    return this.rgb() + "";
  };
  /** @type {function(!Object, string, !Function): ?} */
  d3.hsl = d3_hsl;
  var d3_hslPrototype = d3_hsl.prototype = new d3_color;
  /**
   * @param {number} k
   * @return {?}
   */
  d3_hslPrototype.brighter = function(k) {
    return k = Math.pow(.7, arguments.length ? k : 1), new d3_hsl(this.h, this.s, this.l / k);
  };
  /**
   * @param {number} k
   * @return {?}
   */
  d3_hslPrototype.darker = function(k) {
    return k = Math.pow(.7, arguments.length ? k : 1), new d3_hsl(this.h, this.s, k * this.l);
  };
  /**
   * @return {?}
   */
  d3_hslPrototype.rgb = function() {
    return d3_hsl_rgb(this.h, this.s, this.l);
  };
  /** @type {function(!Object, string, !Function): ?} */
  d3.hcl = Image;
  var c = Image.prototype = new d3_color;
  /**
   * @param {number} b
   * @return {?}
   */
  c.brighter = function(b) {
    return new Image(this.h, this.c, Math.min(100, this.l + coslam * (arguments.length ? b : 1)));
  };
  /**
   * @param {number} b
   * @return {?}
   */
  c.darker = function(b) {
    return new Image(this.h, this.c, Math.max(0, this.l - coslam * (arguments.length ? b : 1)));
  };
  /**
   * @return {?}
   */
  c.rgb = function() {
    return rgb(this.h, this.c, this.l).rgb();
  };
  /** @type {function(!Object, !Function, number): ?} */
  d3.lab = Color;
  /** @type {number} */
  var coslam = 18;
  /** @type {number} */
  var zoom = .95047;
  /** @type {number} */
  var dim = 1;
  /** @type {number} */
  var w = 1.08883;
  var color = Color.prototype = new d3_color;
  /**
   * @param {number} b
   * @return {?}
   */
  color.brighter = function(b) {
    return new Color(Math.min(100, this.l + coslam * (arguments.length ? b : 1)), this.a, this.b);
  };
  /**
   * @param {number} b
   * @return {?}
   */
  color.darker = function(b) {
    return new Color(Math.max(0, this.l - coslam * (arguments.length ? b : 1)), this.a, this.b);
  };
  /**
   * @return {?}
   */
  color.rgb = function() {
    return clamp(this.l, this.a, this.b);
  };
  /** @type {function(!Object, string, !Function): ?} */
  d3.rgb = d3_rgb;
  var d3_rgbPrototype = d3_rgb.prototype = new d3_color;
  /**
   * @param {number} k
   * @return {?}
   */
  d3_rgbPrototype.brighter = function(k) {
    /** @type {number} */
    k = Math.pow(.7, arguments.length ? k : 1);
    var r = this.r;
    var g = this.g;
    var b = this.b;
    /** @type {number} */
    var i = 30;
    return r || g || b ? (r && i > r && (r = i), g && i > g && (g = i), b && i > b && (b = i), new d3_rgb(Math.min(255, r / k), Math.min(255, g / k), Math.min(255, b / k))) : new d3_rgb(i, i, i);
  };
  /**
   * @param {number} k
   * @return {?}
   */
  d3_rgbPrototype.darker = function(k) {
    return k = Math.pow(.7, arguments.length ? k : 1), new d3_rgb(k * this.r, k * this.g, k * this.b);
  };
  /**
   * @return {?}
   */
  d3_rgbPrototype.hsl = function() {
    return d3_rgb_hsl(this.r, this.g, this.b);
  };
  /**
   * @return {?}
   */
  d3_rgbPrototype.toString = function() {
    return "#" + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b);
  };
  var _ = d3.map({
    aliceblue : 15792383,
    antiquewhite : 16444375,
    aqua : 65535,
    aquamarine : 8388564,
    azure : 15794175,
    beige : 16119260,
    bisque : 16770244,
    black : 0,
    blanchedalmond : 16772045,
    blue : 255,
    blueviolet : 9055202,
    brown : 10824234,
    burlywood : 14596231,
    cadetblue : 6266528,
    chartreuse : 8388352,
    chocolate : 13789470,
    coral : 16744272,
    cornflowerblue : 6591981,
    cornsilk : 16775388,
    crimson : 14423100,
    cyan : 65535,
    darkblue : 139,
    darkcyan : 35723,
    darkgoldenrod : 12092939,
    darkgray : 11119017,
    darkgreen : 25600,
    darkgrey : 11119017,
    darkkhaki : 12433259,
    darkmagenta : 9109643,
    darkolivegreen : 5597999,
    darkorange : 16747520,
    darkorchid : 10040012,
    darkred : 9109504,
    darksalmon : 15308410,
    darkseagreen : 9419919,
    darkslateblue : 4734347,
    darkslategray : 3100495,
    darkslategrey : 3100495,
    darkturquoise : 52945,
    darkviolet : 9699539,
    deeppink : 16716947,
    deepskyblue : 49151,
    dimgray : 6908265,
    dimgrey : 6908265,
    dodgerblue : 2003199,
    firebrick : 11674146,
    floralwhite : 16775920,
    forestgreen : 2263842,
    fuchsia : 16711935,
    gainsboro : 14474460,
    ghostwhite : 16316671,
    gold : 16766720,
    goldenrod : 14329120,
    gray : 8421504,
    green : 32768,
    greenyellow : 11403055,
    grey : 8421504,
    honeydew : 15794160,
    hotpink : 16738740,
    indianred : 13458524,
    indigo : 4915330,
    ivory : 16777200,
    khaki : 15787660,
    lavender : 15132410,
    lavenderblush : 16773365,
    lawngreen : 8190976,
    lemonchiffon : 16775885,
    lightblue : 11393254,
    lightcoral : 15761536,
    lightcyan : 14745599,
    lightgoldenrodyellow : 16448210,
    lightgray : 13882323,
    lightgreen : 9498256,
    lightgrey : 13882323,
    lightpink : 16758465,
    lightsalmon : 16752762,
    lightseagreen : 2142890,
    lightskyblue : 8900346,
    lightslategray : 7833753,
    lightslategrey : 7833753,
    lightsteelblue : 11584734,
    lightyellow : 16777184,
    lime : 65280,
    limegreen : 3329330,
    linen : 16445670,
    magenta : 16711935,
    maroon : 8388608,
    mediumaquamarine : 6737322,
    mediumblue : 205,
    mediumorchid : 12211667,
    mediumpurple : 9662683,
    mediumseagreen : 3978097,
    mediumslateblue : 8087790,
    mediumspringgreen : 64154,
    mediumturquoise : 4772300,
    mediumvioletred : 13047173,
    midnightblue : 1644912,
    mintcream : 16121850,
    mistyrose : 16770273,
    moccasin : 16770229,
    navajowhite : 16768685,
    navy : 128,
    oldlace : 16643558,
    olive : 8421376,
    olivedrab : 7048739,
    orange : 16753920,
    orangered : 16729344,
    orchid : 14315734,
    palegoldenrod : 15657130,
    palegreen : 10025880,
    paleturquoise : 11529966,
    palevioletred : 14381203,
    papayawhip : 16773077,
    peachpuff : 16767673,
    peru : 13468991,
    pink : 16761035,
    plum : 14524637,
    powderblue : 11591910,
    purple : 8388736,
    red : 16711680,
    rosybrown : 12357519,
    royalblue : 4286945,
    saddlebrown : 9127187,
    salmon : 16416882,
    sandybrown : 16032864,
    seagreen : 3050327,
    seashell : 16774638,
    sienna : 10506797,
    silver : 12632256,
    skyblue : 8900331,
    slateblue : 6970061,
    slategray : 7372944,
    slategrey : 7372944,
    snow : 16775930,
    springgreen : 65407,
    steelblue : 4620980,
    tan : 13808780,
    teal : 32896,
    thistle : 14204888,
    tomato : 16737095,
    turquoise : 4251856,
    violet : 15631086,
    wheat : 16113331,
    white : 16777215,
    whitesmoke : 16119285,
    yellow : 16776960,
    yellowgreen : 10145074
  });
  _.forEach(function(child, win) {
    _.set(child, createSandBox(win));
  });
  /** @type {function(!Function): ?} */
  d3.functor = $;
  d3.xhr = d3_xhrType(undefined);
  /**
   * @param {string} delimiter
   * @param {string} mimeType
   * @return {?}
   */
  d3.dsv = function(delimiter, mimeType) {
    /**
     * @param {?} url
     * @param {!Object} row
     * @param {string} callback
     * @return {?}
     */
    function dsv(url, row, callback) {
      if (arguments.length < 3) {
        callback = row;
        /** @type {null} */
        row = null;
      }
      var xhr = d3_xhr(url, mimeType, null == row ? response : typedResponse(row), callback);
      return xhr.row = function(_) {
        return arguments.length ? xhr.response(null == (row = _) ? response : typedResponse(_)) : row;
      }, xhr;
    }
    /**
     * @param {!Object} request
     * @return {?}
     */
    function response(request) {
      return dsv.parse(request.responseText);
    }
    /**
     * @param {!Object} f
     * @return {?}
     */
    function typedResponse(f) {
      return function(request) {
        return dsv.parse(request.responseText, f);
      };
    }
    /**
     * @param {?} results
     * @return {?}
     */
    function row(results) {
      return results.map(g).join(delimiter);
    }
    /**
     * @param {string} val
     * @return {?}
     */
    function g(val) {
      return negativeRegex.test(val) ? '"' + val.replace(/"/g, '""') + '"' : val;
    }
    /** @type {!RegExp} */
    var negativeRegex = new RegExp('["' + delimiter + "\n]");
    var floor = delimiter.charCodeAt(0);
    return dsv.parse = function(text, n) {
      var a;
      return dsv.parseRows(text, function(comp, canCreateDiscussions) {
        if (a) {
          return a(comp, canCreateDiscussions - 1);
        }
        /** @type {!Function} */
        var e = new Function("d", "return {" + comp.map(function(storedComponents, b) {
          return JSON.stringify(storedComponents) + ": d[" + b + "]";
        }).join(",") + "}");
        /** @type {!Function} */
        a = n ? function(c, status) {
          return n(e(c), status);
        } : e;
      });
    }, dsv.parseRows = function(text, f) {
      /**
       * @return {?}
       */
      function token() {
        if (I >= N) {
          return EOF;
        }
        if (eol) {
          return eol = false, EOL;
        }
        var j = I;
        if (34 === text.charCodeAt(j)) {
          var i = j;
          for (; i++ < N;) {
            if (34 === text.charCodeAt(i)) {
              if (34 !== text.charCodeAt(i + 1)) {
                break;
              }
              ++i;
            }
          }
          I = i + 2;
          var d = text.charCodeAt(i + 1);
          return 13 === d ? (eol = true, 10 === text.charCodeAt(i + 2) && ++I) : 10 === d && (eol = true), text.substring(j + 1, i).replace(/""/g, '"');
        }
        for (; N > I;) {
          d = text.charCodeAt(I++);
          /** @type {number} */
          var k = 1;
          if (10 === d) {
            /** @type {boolean} */
            eol = true;
          } else {
            if (13 === d) {
              /** @type {boolean} */
              eol = true;
              if (10 === text.charCodeAt(I)) {
                ++I;
                ++k;
              }
            } else {
              if (d !== floor) {
                continue;
              }
            }
          }
          return text.substring(j, I - k);
        }
        return text.substring(j);
      }
      var t;
      var eol;
      var EOL = {};
      var EOF = {};
      /** @type {!Array} */
      var rows = [];
      var N = text.length;
      /** @type {number} */
      var I = 0;
      /** @type {number} */
      var n = 0;
      for (; (t = token()) !== EOF;) {
        /** @type {!Array} */
        var message = [];
        for (; t !== EOL && t !== EOF;) {
          message.push(t);
          t = token();
        }
        if (!f || (message = f(message, n++))) {
          rows.push(message);
        }
      }
      return rows;
    }, dsv.format = function(data) {
      if (Array.isArray(data[0])) {
        return dsv.formatRows(data);
      }
      var set = new d3_Set;
      /** @type {!Array} */
      var selection = [];
      return data.forEach(function(hud) {
        var content;
        for (content in hud) {
          if (!set.has(content)) {
            selection.push(set.add(content));
          }
        }
      }), [selection.map(g).join(delimiter)].concat(data.map(function(map) {
        return selection.map(function(n) {
          return g(map[n]);
        }).join(delimiter);
      })).join("\n");
    }, dsv.formatRows = function(rows) {
      return rows.map(row).join("\n");
    }, dsv;
  };
  d3.csv = d3.dsv(",", "text/csv");
  d3.tsv = d3.dsv("\t", "text/tab-separated-values");
  /**
   * @param {undefined} container
   * @param {!Array} touches
   * @param {!Array} identifier
   * @return {?}
   */
  d3.touch = function(container, touches, identifier) {
    if (arguments.length < 3 && (identifier = touches, touches = sourceEvent().changedTouches), touches) {
      var touch;
      /** @type {number} */
      var i = 0;
      var l = touches.length;
      for (; l > i; ++i) {
        if ((touch = touches[i]).identifier === identifier) {
          return d3_mousePoint(container, touch);
        }
      }
    }
  };
  var d3_timer_queueHead;
  var d3_timer_queueTail;
  var Uh;
  var d3_timer_timeout;
  var d3_timer_active;
  var d3_timer_frame = root[d3_vendorSymbol(root, "requestAnimationFrame")] || function(callback) {
    setTimeout(callback, 17);
  };
  /**
   * @param {number} callback
   * @param {number} expression
   * @param {number} mode
   * @return {undefined}
   */
  d3.timer = function(callback, expression, mode) {
    /** @type {number} */
    var _len8 = arguments.length;
    if (2 > _len8) {
      /** @type {number} */
      expression = 0;
    }
    if (3 > _len8) {
      /** @type {number} */
      mode = Date.now();
    }
    var fullExpression = mode + expression;
    var timer = {
      c : callback,
      t : fullExpression,
      f : false,
      n : null
    };
    if (d3_timer_queueTail) {
      d3_timer_queueTail.n = timer;
    } else {
      d3_timer_queueHead = timer;
    }
    d3_timer_queueTail = timer;
    if (!Uh) {
      d3_timer_timeout = clearTimeout(d3_timer_timeout);
      /** @type {number} */
      Uh = 1;
      d3_timer_frame(d3_timer_step);
    }
  };
  /**
   * @return {undefined}
   */
  d3.timer.flush = function() {
    d3_timer_mark();
    d3_timer_sweep();
  };
  /**
   * @param {number} value
   * @param {number} precision
   * @return {?}
   */
  d3.round = function(value, precision) {
    return precision ? Math.round(value * (precision = Math.pow(10, precision))) / precision : Math.round(value);
  };
  /** @type {!Array<?>} */
  var interpolate_trans = ["y", "z", "a", "f", "p", "n", "\u00b5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(translate);
  /**
   * @param {number} value
   * @param {string} p
   * @return {?}
   */
  d3.formatPrefix = function(value, p) {
    /** @type {number} */
    var c = 0;
    return value && (0 > value && (value = value * -1), p && (value = d3.round(value, round(value, p))), c = 1 + Math.floor(1E-12 + Math.log(value) / Math.LN10), c = Math.max(-24, Math.min(24, 3 * Math.floor((c - 1) / 3)))), interpolate_trans[8 + c / 3];
  };
  /** @type {!RegExp} */
  var d3_format_re = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i;
  var uiEvtNode = d3.map({
    b : function(name) {
      return name.toString(2);
    },
    c : function(n) {
      return String.fromCharCode(n);
    },
    o : function(name) {
      return name.toString(8);
    },
    x : function(name) {
      return name.toString(16);
    },
    X : function(b) {
      return b.toString(16).toUpperCase();
    },
    g : function(name, value) {
      return name.toPrecision(value);
    },
    e : function(n, p) {
      return n.toExponential(p);
    },
    f : function(other, f) {
      return other.toFixed(f);
    },
    r : function(x, p) {
      return (x = d3.round(x, round(x, p))).toFixed(Math.max(0, Math.min(20, round(x * (1 + 1E-15), p))));
    }
  });
  var d3_time = d3.time = {};
  /** @type {function(new:Date, ?=, ?=, ?=, ?=, ?=, ?=, ?=): string} */
  var d3_date = Date;
  d3_date_utc.prototype = {
    getDate : function() {
      return this._.getUTCDate();
    },
    getDay : function() {
      return this._.getUTCDay();
    },
    getFullYear : function() {
      return this._.getUTCFullYear();
    },
    getHours : function() {
      return this._.getUTCHours();
    },
    getMilliseconds : function() {
      return this._.getUTCMilliseconds();
    },
    getMinutes : function() {
      return this._.getUTCMinutes();
    },
    getMonth : function() {
      return this._.getUTCMonth();
    },
    getSeconds : function() {
      return this._.getUTCSeconds();
    },
    getTime : function() {
      return this._.getTime();
    },
    getTimezoneOffset : function() {
      return 0;
    },
    valueOf : function() {
      return this._.valueOf();
    },
    setDate : function() {
      d3_time_prototype.setUTCDate.apply(this._, arguments);
    },
    setDay : function() {
      d3_time_prototype.setUTCDay.apply(this._, arguments);
    },
    setFullYear : function() {
      d3_time_prototype.setUTCFullYear.apply(this._, arguments);
    },
    setHours : function() {
      d3_time_prototype.setUTCHours.apply(this._, arguments);
    },
    setMilliseconds : function() {
      d3_time_prototype.setUTCMilliseconds.apply(this._, arguments);
    },
    setMinutes : function() {
      d3_time_prototype.setUTCMinutes.apply(this._, arguments);
    },
    setMonth : function() {
      d3_time_prototype.setUTCMonth.apply(this._, arguments);
    },
    setSeconds : function() {
      d3_time_prototype.setUTCSeconds.apply(this._, arguments);
    },
    setTime : function() {
      d3_time_prototype.setTime.apply(this._, arguments);
    }
  };
  var d3_time_prototype = Date.prototype;
  d3_time.year = d3_time_interval(function(date) {
    return date = d3_time.day(date), date.setMonth(0, 1), date;
  }, function(currentValue, i) {
    currentValue.setFullYear(currentValue.getFullYear() + i);
  }, function(sentTime) {
    return sentTime.getFullYear();
  });
  d3_time.years = d3_time.year.range;
  d3_time.years.utc = d3_time.year.utc.range;
  d3_time.day = d3_time_interval(function(sentTime) {
    var day = new d3_date(2E3, 0);
    return day.setFullYear(sentTime.getFullYear(), sentTime.getMonth(), sentTime.getDate()), day;
  }, function(exp, lifetime_days) {
    exp.setDate(exp.getDate() + lifetime_days);
  }, function(orderDate) {
    return orderDate.getDate() - 1;
  });
  d3_time.days = d3_time.day.range;
  d3_time.days.utc = d3_time.day.utc.range;
  /**
   * @param {!Object} date
   * @return {?}
   */
  d3_time.dayOfYear = function(date) {
    var d0 = d3_time.year(date);
    return Math.floor((date - d0 - 6E4 * (date.getTimezoneOffset() - d0.getTimezoneOffset())) / 864E5);
  };
  ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function(day, del) {
    /** @type {number} */
    del = 7 - del;
    var interval = d3_time[day] = d3_time_interval(function(date) {
      return (date = d3_time.day(date)).setDate(date.getDate() - (date.getDay() + del) % 7), date;
    }, function(lastAccess, b) {
      lastAccess.setDate(lastAccess.getDate() + 7 * Math.floor(b));
    }, function(date) {
      var editpos = d3_time.year(date).getDay();
      return Math.floor((d3_time.dayOfYear(date) + (editpos + del) % 7) / 7) - (editpos !== del);
    });
    d3_time[day + "s"] = interval.range;
    d3_time[day + "s"].utc = interval.utc.range;
    /**
     * @param {undefined} date
     * @return {?}
     */
    d3_time[day + "OfYear"] = function(date) {
      var editpos = d3_time.year(date).getDay();
      return Math.floor((d3_time.dayOfYear(date) + (editpos + del) % 7) / 7);
    };
  });
  d3_time.week = d3_time.sunday;
  d3_time.weeks = d3_time.sunday.range;
  d3_time.weeks.utc = d3_time.sunday.utc.range;
  d3_time.weekOfYear = d3_time.sundayOfYear;
  var ret = {
    "-" : "",
    _ : " ",
    0 : "0"
  };
  /** @type {!RegExp} */
  var that = /^\s*\d+/;
  /** @type {!RegExp} */
  var commentRegEx = /^%/;
  /**
   * @param {!Object} locale
   * @return {?}
   */
  d3.locale = function(locale) {
    return {
      numberFormat : d3_locale_numberFormat(locale),
      timeFormat : init(locale)
    };
  };
  var d3_locale_enUS = d3.locale({
    decimal : ".",
    thousands : ",",
    grouping : [3],
    currency : ["$", ""],
    dateTime : "%a %b %e %X %Y",
    date : "%m/%d/%Y",
    time : "%H:%M:%S",
    periods : ["AM", "PM"],
    days : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    shortDays : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    shortMonths : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  });
  d3.format = d3_locale_enUS.numberFormat;
  d3.geo = {};
  Set.prototype = {
    s : 0,
    t : 0,
    add : function(x) {
      getValue(x, this.t, options);
      getValue(options.s, this.s, this);
      if (this.s) {
        this.t += options.t;
      } else {
        this.s = options.t;
      }
    },
    reset : function() {
      /** @type {number} */
      this.s = this.t = 0;
    },
    valueOf : function() {
      return this.s;
    }
  };
  var options = new Set;
  /**
   * @param {?} object
   * @param {?} listener
   * @return {undefined}
   */
  d3.geo.stream = function(object, listener) {
    if (object && d3_geo_streamObjectType.hasOwnProperty(object.type)) {
      d3_geo_streamObjectType[object.type](object, listener);
    } else {
      extend(object, listener);
    }
  };
  var d3_geo_streamObjectType = {
    Feature : function(options, input) {
      extend(options.geometry, input);
    },
    FeatureCollection : function(options, key) {
      var features = options.features;
      /** @type {number} */
      var i = -1;
      var l = features.length;
      for (; ++i < l;) {
        extend(features[i].geometry, key);
      }
    }
  };
  var streamGeometryType = {
    Sphere : function(config, stream) {
      stream.sphere();
    },
    Point : function(object, stream) {
      object = object.coordinates;
      stream.point(object[0], object[1], object[2]);
    },
    MultiPoint : function(object, stream) {
      var value = object.coordinates;
      /** @type {number} */
      var j = -1;
      var i = value.length;
      for (; ++j < i;) {
        object = value[j];
        stream.point(object[0], object[1], object[2]);
      }
    },
    LineString : function(object, stream) {
      streamLine(object.coordinates, stream, 0);
    },
    MultiLineString : function(geometry, stream) {
      var coordinates = geometry.coordinates;
      /** @type {number} */
      var i = -1;
      var index = coordinates.length;
      for (; ++i < index;) {
        streamLine(coordinates[i], stream, 0);
      }
    },
    Polygon : function(object, stream) {
      streamPolygon(object.coordinates, stream);
    },
    MultiPolygon : function(geometry, stream) {
      var coordinates = geometry.coordinates;
      /** @type {number} */
      var i = -1;
      var index = coordinates.length;
      for (; ++i < index;) {
        streamPolygon(coordinates[i], stream);
      }
    },
    GeometryCollection : function(object, key) {
      var jsonGraphEnvelopes = object.geometries;
      /** @type {number} */
      var jsonGraphEnvelopeIndex = -1;
      var jsonGraphEnvelopeCount = jsonGraphEnvelopes.length;
      for (; ++jsonGraphEnvelopeIndex < jsonGraphEnvelopeCount;) {
        extend(jsonGraphEnvelopes[jsonGraphEnvelopeIndex], key);
      }
    }
  };
  /**
   * @param {undefined} s
   * @return {?}
   */
  d3.geo.area = function(s) {
    return sum2 = 0, d3.geo.stream(s, d3_geo_area), sum2;
  };
  var sum2;
  var results = new Set;
  var d3_geo_area = {
    sphere : function() {
      sum2 = sum2 + 4 * val;
    },
    point : d3_noop,
    lineStart : d3_noop,
    lineEnd : d3_noop,
    polygonStart : function() {
      results.reset();
      /** @type {function(): undefined} */
      d3_geo_area.lineStart = d3_geo_areaRingStart;
    },
    polygonEnd : function() {
      /** @type {number} */
      var padding = 2 * results;
      sum2 = sum2 + (0 > padding ? 4 * val + padding : padding);
      /** @type {function(): undefined} */
      d3_geo_area.lineStart = d3_geo_area.lineEnd = d3_geo_area.point = d3_noop;
    }
  };
  d3.geo.bounds = function() {
    /**
     * @param {number} a
     * @param {number} i
     * @return {undefined}
     */
    function p(a, i) {
      b.push(c = [n = a, j = a]);
      if (x > i) {
        /** @type {number} */
        x = i;
      }
      if (i > h) {
        /** @type {number} */
        h = i;
      }
    }
    /**
     * @param {number} i
     * @param {number} n
     * @return {undefined}
     */
    function update(i, n) {
      var p1 = point([i * factor, n * factor]);
      if (val) {
        var r = parseInt(val, p1);
        /** @type {!Array} */
        var name = [r[1], -r[0], 0];
        var p = parseInt(name, r);
        cos(p);
        p = ceil(p);
        /** @type {number} */
        var s = i - o;
        /** @type {number} */
        var ourBaseDamage = s > 0 ? 1 : -1;
        /** @type {number} */
        var enemyHealth = p[0] * scale * ourBaseDamage;
        /** @type {boolean} */
        var antimeridian = abs(s) > 180;
        if (antimeridian ^ (enemyHealth > ourBaseDamage * o && ourBaseDamage * i > enemyHealth)) {
          /** @type {number} */
          var w = p[1] * scale;
          if (w > h) {
            /** @type {number} */
            h = w;
          }
        } else {
          if (enemyHealth = (enemyHealth + 360) % 360 - 180, antimeridian ^ (enemyHealth > ourBaseDamage * o && ourBaseDamage * i > enemyHealth)) {
            /** @type {number} */
            w = -p[1] * scale;
            if (x > w) {
              /** @type {number} */
              x = w;
            }
          } else {
            if (x > n) {
              /** @type {number} */
              x = n;
            }
            if (n > h) {
              /** @type {number} */
              h = n;
            }
          }
        }
        if (antimeridian) {
          if (o > i) {
            if (fn(n, i) > fn(n, j)) {
              /** @type {number} */
              j = i;
            }
          } else {
            if (fn(i, j) > fn(n, j)) {
              /** @type {number} */
              n = i;
            }
          }
        } else {
          if (j >= n) {
            if (n > i) {
              /** @type {number} */
              n = i;
            }
            if (i > j) {
              /** @type {number} */
              j = i;
            }
          } else {
            if (i > o) {
              if (fn(n, i) > fn(n, j)) {
                /** @type {number} */
                j = i;
              }
            } else {
              if (fn(i, j) > fn(n, j)) {
                /** @type {number} */
                n = i;
              }
            }
          }
        }
      } else {
        p(i, n);
      }
      val = p1;
      /** @type {number} */
      o = i;
    }
    /**
     * @return {undefined}
     */
    function boundsLineStart() {
      /** @type {function(number, number): undefined} */
      boundsStream.point = update;
    }
    /**
     * @return {undefined}
     */
    function boundsLineEnd() {
      c[0] = n;
      c[1] = j;
      /** @type {function(number, number): undefined} */
      boundsStream.point = p;
      /** @type {null} */
      val = null;
    }
    /**
     * @param {number} d
     * @param {number} i
     * @return {undefined}
     */
    function check(d, i) {
      if (val) {
        /** @type {number} */
        var d2 = d - o;
        y = y + (abs(d2) > 180 ? d2 + (d2 > 0 ? 360 : -360) : d2);
      } else {
        /** @type {number} */
        g = d;
        /** @type {number} */
        l = i;
      }
      d3_geo_area.point(d, i);
      update(d, i);
    }
    /**
     * @return {undefined}
     */
    function boundsRingStart() {
      d3_geo_area.lineStart();
    }
    /**
     * @return {undefined}
     */
    function boundsRingEnd() {
      check(g, l);
      d3_geo_area.lineEnd();
      if (abs(y) > epsilon) {
        /** @type {number} */
        n = -(j = 180);
      }
      c[0] = n;
      c[1] = j;
      /** @type {null} */
      val = null;
    }
    /**
     * @param {number} a
     * @param {number} b
     * @return {?}
     */
    function fn(a, b) {
      return (b = b - a) < 0 ? b + 360 : b;
    }
    /**
     * @param {!Object} a
     * @param {!Object} b
     * @return {?}
     */
    function a(a, b) {
      return a[0] - b[0];
    }
    /**
     * @param {?} index
     * @param {!Object} x
     * @return {?}
     */
    function hasScroll(index, x) {
      return x[0] <= x[1] ? x[0] <= index && index <= x[1] : index < x[0] || x[1] < index;
    }
    var n;
    var x;
    var j;
    var h;
    var o;
    var g;
    var l;
    var val;
    var y;
    var b;
    var c;
    var boundsStream = {
      point : p,
      lineStart : boundsLineStart,
      lineEnd : boundsLineEnd,
      polygonStart : function() {
        /** @type {function(number, number): undefined} */
        boundsStream.point = check;
        /** @type {function(): undefined} */
        boundsStream.lineStart = boundsRingStart;
        /** @type {function(): undefined} */
        boundsStream.lineEnd = boundsRingEnd;
        /** @type {number} */
        y = 0;
        d3_geo_area.polygonStart();
      },
      polygonEnd : function() {
        d3_geo_area.polygonEnd();
        /** @type {function(number, number): undefined} */
        boundsStream.point = p;
        /** @type {function(): undefined} */
        boundsStream.lineStart = boundsLineStart;
        /** @type {function(): undefined} */
        boundsStream.lineEnd = boundsLineEnd;
        if (0 > results) {
          /** @type {number} */
          n = -(j = 180);
          /** @type {number} */
          x = -(h = 90);
        } else {
          if (y > epsilon) {
            /** @type {number} */
            h = 90;
          } else {
            if (-epsilon > y) {
              /** @type {number} */
              x = -90;
            }
          }
        }
        c[0] = n;
        c[1] = j;
      }
    };
    return function(error) {
      /** @type {number} */
      h = j = -(n = x = 1 / 0);
      /** @type {!Array} */
      b = [];
      d3.geo.stream(error, boundsStream);
      /** @type {number} */
      var l = b.length;
      if (l) {
        b.sort(a);
        var value;
        /** @type {number} */
        var i = 1;
        var x = b[0];
        /** @type {!Array} */
        var self = [x];
        for (; l > i; ++i) {
          value = b[i];
          if (hasScroll(value[0], x) || hasScroll(value[1], x)) {
            if (fn(x[0], value[1]) > fn(x[0], x[1])) {
              x[1] = value[1];
            }
            if (fn(value[0], x[1]) > fn(x[0], x[1])) {
              x[0] = value[0];
            }
          } else {
            self.push(x = value);
          }
        }
        var diff;
        /** @type {number} */
        var prevDiff = -1 / 0;
        /** @type {number} */
        l = self.length - 1;
        /** @type {number} */
        i = 0;
        x = self[l];
        for (; l >= i; x = value, ++i) {
          value = self[i];
          if ((diff = fn(x[1], value[0])) > prevDiff) {
            prevDiff = diff;
            n = value[0];
            j = x[1];
          }
        }
      }
      return b = c = null, 1 / 0 === n || 1 / 0 === x ? [[0 / 0, 0 / 0], [0 / 0, 0 / 0]] : [[n, x], [j, h]];
    };
  }();
  /**
   * @param {undefined} object
   * @return {?}
   */
  d3.geo.centroid = function(object) {
    /** @type {number} */
    smoothness = short = r = hash = prev = start = x1 = s2 = o = rms = i = 0;
    d3.geo.stream(object, lengthStream);
    /** @type {number} */
    var a = o;
    /** @type {number} */
    var b = rms;
    /** @type {number} */
    var d = i;
    /** @type {number} */
    var iterations = a * a + b * b + d * d;
    return tooLessCounter > iterations && (a = start, b = x1, d = s2, epsilon > short && (a = r, b = hash, d = prev), iterations = a * a + b * b + d * d, tooLessCounter > iterations) ? [0 / 0, 0 / 0] : [Math.atan2(b, a) * scale, sin(d / Math.sqrt(iterations)) * scale];
  };
  var smoothness;
  var short;
  var r;
  var hash;
  var prev;
  var start;
  var x1;
  var s2;
  var o;
  var rms;
  var i;
  var lengthStream = {
    sphere : d3_noop,
    point : pt,
    lineStart : boundsLineStart,
    lineEnd : boundsLineEnd,
    polygonStart : function() {
      /** @type {function(): undefined} */
      lengthStream.lineStart = lengthLineEnd;
    },
    polygonEnd : function() {
      /** @type {function(): undefined} */
      lengthStream.lineStart = boundsLineStart;
    }
  };
  var findPeaks = d3_geo_clip(d3_true, clipLine, clipAntimeridianInterpolate, [-val, -val / 2]);
  /** @type {number} */
  var width = 1E9;
  /**
   * @return {?}
   */
  d3.geo.clipExtent = function() {
    var previousPoint;
    var previousIndex;
    var currentIndex;
    var nextIndex;
    var Rules;
    var require;
    var brush = {
      stream : function(type) {
        return Rules && (Rules.valid = false), Rules = require(type), Rules.valid = true, Rules;
      },
      extent : function(locations) {
        return arguments.length ? (require = sequence(previousPoint = +locations[0][0], previousIndex = +locations[0][1], currentIndex = +locations[1][0], nextIndex = +locations[1][1]), Rules && (Rules.valid = false, Rules = null), brush) : [[previousPoint, previousIndex], [currentIndex, nextIndex]];
      }
    };
    return brush.extent([[0, 0], [960, 500]]);
  };
  /** @type {function(?, ?): ?} */
  (d3.geo.conicEqualArea = function() {
    return func(invert);
  }).raw = invert;
  /**
   * @return {?}
   */
  d3.geo.albers = function() {
    return d3.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070);
  };
  /**
   * @return {?}
   */
  d3.geo.albersUsa = function() {
    /**
     * @param {!Object} a
     * @return {?}
     */
    function s(a) {
      var o = a[0];
      var e = a[1];
      return t = null, n(o, e), t || (i(o, e), t) || extend(o, e), t;
    }
    var t;
    var n;
    var i;
    var extend;
    var f = d3.geo.albers();
    var alaska = d3.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]);
    var data = d3.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]);
    var options = {
      point : function(x, y) {
        /** @type {!Array} */
        t = [x, y];
      }
    };
    return s.invert = function(p) {
      var b = f.scale();
      var delta = f.translate();
      /** @type {number} */
      var t = (p[0] - delta[0]) / b;
      /** @type {number} */
      var noteValue = (p[1] - delta[1]) / b;
      return (noteValue >= .12 && .234 > noteValue && t >= -.425 && -.214 > t ? alaska : noteValue >= .166 && .234 > noteValue && t >= -.214 && -.115 > t ? data : f).invert(p);
    }, s.stream = function(name) {
      var stream = f.stream(name);
      var s1 = alaska.stream(name);
      var s = data.stream(name);
      return {
        point : function(x, y) {
          stream.point(x, y);
          s1.point(x, y);
          s.point(x, y);
        },
        sphere : function() {
          stream.sphere();
          s1.sphere();
          s.sphere();
        },
        lineStart : function() {
          stream.lineStart();
          s1.lineStart();
          s.lineStart();
        },
        lineEnd : function() {
          stream.lineEnd();
          s1.lineEnd();
          s.lineEnd();
        },
        polygonStart : function() {
          stream.polygonStart();
          s1.polygonStart();
          s.polygonStart();
        },
        polygonEnd : function() {
          stream.polygonEnd();
          s1.polygonEnd();
          s.polygonEnd();
        }
      };
    }, s.precision = function(_) {
      return arguments.length ? (f.precision(_), alaska.precision(_), data.precision(_), s) : f.precision();
    }, s.scale = function(size) {
      return arguments.length ? (f.scale(size), alaska.scale(.35 * size), data.scale(size), s.translate(f.translate())) : f.scale();
    }, s.translate = function(_) {
      if (!arguments.length) {
        return f.translate();
      }
      var radius = f.scale();
      /** @type {number} */
      var x = +_[0];
      /** @type {number} */
      var y = +_[1];
      return n = f.translate(_).clipExtent([[x - .455 * radius, y - .238 * radius], [x + .455 * radius, y + .238 * radius]]).stream(options).point, i = alaska.translate([x - .307 * radius, y + .201 * radius]).clipExtent([[x - .425 * radius + epsilon, y + .12 * radius + epsilon], [x - .214 * radius - epsilon, y + .234 * radius - epsilon]]).stream(options).point, extend = data.translate([x - .205 * radius, y + .212 * radius]).clipExtent([[x - .214 * radius + epsilon, y + .166 * radius + epsilon], [x - 
      .115 * radius - epsilon, y + .234 * radius - epsilon]]).stream(options).point, s;
    }, s.scale(1070);
  };
  var sum;
  var total;
  var ch;
  var g;
  var greatest;
  var cmax;
  var result = {
    point : d3_noop,
    lineStart : d3_noop,
    lineEnd : d3_noop,
    polygonStart : function() {
      /** @type {number} */
      total = 0;
      /** @type {function(): undefined} */
      result.lineStart = getValueAtTime;
    },
    polygonEnd : function() {
      /** @type {function(): undefined} */
      result.lineStart = result.lineEnd = result.point = d3_noop;
      sum = sum + abs(total / 2);
    }
  };
  var event = {
    point : intersection,
    lineStart : d3_noop,
    lineEnd : d3_noop,
    polygonStart : d3_noop,
    polygonEnd : d3_noop
  };
  var clip = {
    point : _export,
    lineStart : lineStart,
    lineEnd : lineEnd,
    polygonStart : function() {
      /** @type {function(): undefined} */
      clip.lineStart = Screen2D;
    },
    polygonEnd : function() {
      /** @type {function(number, number): undefined} */
      clip.point = _export;
      /** @type {function(): undefined} */
      clip.lineStart = lineStart;
      /** @type {function(): undefined} */
      clip.lineEnd = lineEnd;
    }
  };
  /**
   * @return {?}
   */
  d3.geo.path = function() {
    /**
     * @param {!Function} file
     * @return {?}
     */
    function path(file) {
      return file && ("function" == typeof r && style.pointRadius(+r.apply(this, arguments)), result && result.valid || (result = callback(style)), d3.geo.stream(file, result)), style.result();
    }
    /**
     * @return {?}
     */
    function filter() {
      return result = null, path;
    }
    var s;
    var render;
    var callback;
    var style;
    var result;
    /** @type {number} */
    var r = 4.5;
    return path.area = function(s) {
      return sum = 0, d3.geo.stream(s, callback(result)), sum;
    }, path.centroid = function(object) {
      return r = hash = prev = start = x1 = s2 = o = rms = i = 0, d3.geo.stream(object, callback(clip)), i ? [o / i, rms / i] : s2 ? [start / s2, x1 / s2] : prev ? [r / prev, hash / prev] : [0 / 0, 0 / 0];
    }, path.bounds = function(s) {
      return greatest = cmax = -(ch = g = 1 / 0), d3.geo.stream(s, callback(event)), [[ch, g], [greatest, cmax]];
    }, path.projection = function(_) {
      return arguments.length ? (callback = (s = _) ? _.stream || d3_geo_pathProjectStream(_) : undefined, filter()) : s;
    }, path.context = function(name) {
      return arguments.length ? (style = null == (render = name) ? new multiplex$6 : new multiplex$7(name), "function" != typeof r && style.pointRadius(r), filter()) : render;
    }, path.pointRadius = function(b) {
      return arguments.length ? (r = "function" == typeof b ? b : (style.pointRadius(+b), +b), path) : r;
    }, path.projection(d3.geo.albersUsa()).context(null);
  };
  /**
   * @param {string} val
   * @return {?}
   */
  d3.geo.transform = function(val) {
    return {
      stream : function(type) {
        var ret = new d3_geo_transform(type);
        var i;
        for (i in val) {
          ret[i] = val[i];
        }
        return ret;
      }
    };
  };
  d3_geo_transform.prototype = {
    point : function(x, y) {
      this.stream.point(x, y);
    },
    sphere : function() {
      this.stream.sphere();
    },
    lineStart : function() {
      this.stream.lineStart();
    },
    lineEnd : function() {
      this.stream.lineEnd();
    },
    polygonStart : function() {
      this.stream.polygonStart();
    },
    polygonEnd : function() {
      this.stream.polygonEnd();
    }
  };
  /** @type {function(string): ?} */
  d3.geo.projection = transform;
  /** @type {function(!Function): ?} */
  d3.geo.projectionMutator = projectionMutator;
  /** @type {function(number, number): ?} */
  (d3.geo.equirectangular = function() {
    return transform(s);
  }).raw = s.invert = s;
  /**
   * @param {!Array} ctx
   * @return {?}
   */
  d3.geo.rotation = function(ctx) {
    /**
     * @param {!Object} color
     * @return {?}
     */
    function exports(color) {
      return color = ctx(color[0] * factor, color[1] * factor), color[0] *= scale, color[1] *= scale, color;
    }
    return ctx = rotateRadians(ctx[0] % 360 * factor, ctx[1] * factor, ctx.length > 2 ? ctx[2] * factor : 0), exports.invert = function(p) {
      return p = ctx.invert(p[0] * factor, p[1] * factor), p[0] *= scale, p[1] *= scale, p;
    }, exports;
  };
  /** @type {function(number, number): ?} */
  rotationIdentity.invert = s;
  /**
   * @return {?}
   */
  d3.geo.circle = function() {
    /**
     * @return {?}
     */
    function circle() {
      var prec = "function" == typeof precision ? precision.apply(this, arguments) : precision;
      var intersect = rotateRadians(-prec[0] * factor, -prec[1] * factor, 0).invert;
      /** @type {!Array} */
      var poly = [];
      return interpolate(null, null, 1, {
        point : function(a, x) {
          poly.push(a = intersect(a, x));
          a[0] *= scale;
          a[1] *= scale;
        }
      }), {
        type : "Polygon",
        coordinates : [poly]
      };
    }
    var scale;
    var interpolate;
    /** @type {!Array} */
    var precision = [0, 0];
    /** @type {number} */
    var dx = 6;
    return circle.origin = function(value) {
      return arguments.length ? (precision = value, circle) : precision;
    }, circle.angle = function(name) {
      return arguments.length ? (interpolate = d3_geo_circleInterpolate((scale = +name) * factor, dx * factor), circle) : scale;
    }, circle.precision = function(_) {
      return arguments.length ? (interpolate = d3_geo_circleInterpolate(scale * factor, (dx = +_) * factor), circle) : dx;
    }, circle.angle(90);
  };
  /**
   * @param {!Object} p
   * @param {!Object} v
   * @return {?}
   */
  d3.geo.distance = function(p, v) {
    var cs;
    /** @type {number} */
    var f = (v[0] - p[0]) * factor;
    /** @type {number} */
    var r = p[1] * factor;
    /** @type {number} */
    var angle = v[1] * factor;
    /** @type {number} */
    var g = Math.sin(f);
    /** @type {number} */
    var y = Math.cos(f);
    /** @type {number} */
    var a = Math.sin(r);
    /** @type {number} */
    var w = Math.cos(r);
    /** @type {number} */
    var x = Math.sin(angle);
    /** @type {number} */
    var c = Math.cos(angle);
    return Math.atan2(Math.sqrt((cs = c * g) * cs + (cs = w * x - a * c * y) * cs), a * x + w * c * y);
  };
  /**
   * @return {?}
   */
  d3.geo.graticule = function() {
    /**
     * @return {?}
     */
    function g() {
      return {
        type : "MultiLineString",
        coordinates : split()
      };
    }
    /**
     * @return {?}
     */
    function split() {
      return d3.range(Math.ceil(a / step) * step, b, step).map(point).concat(d3.range(Math.ceil(i / w) * w, y, w).map(map)).concat(d3.range(Math.ceil(e / value) * value, n, value).filter(function(i) {
        return abs(i % step) > epsilon;
      }).map(pos)).concat(d3.range(Math.ceil(x / d) * d, size, d).filter(function(rx) {
        return abs(rx % w) > epsilon;
      }).map(res));
    }
    var n;
    var e;
    var b;
    var a;
    var size;
    var x;
    var y;
    var i;
    var pos;
    var res;
    var point;
    var map;
    /** @type {number} */
    var value = 10;
    var d = value;
    /** @type {number} */
    var step = 90;
    /** @type {number} */
    var w = 360;
    /** @type {number} */
    var s = 2.5;
    return g.lines = function() {
      return split().map(function(coordinateMap) {
        return {
          type : "LineString",
          coordinates : coordinateMap
        };
      });
    }, g.outline = function() {
      return {
        type : "Polygon",
        coordinates : [point(a).concat(map(y).slice(1), point(b).reverse().slice(1), map(i).reverse().slice(1))]
      };
    }, g.extent = function(value) {
      return arguments.length ? g.majorExtent(value).minorExtent(value) : g.minorExtent();
    }, g.majorExtent = function(k) {
      return arguments.length ? (a = +k[0][0], b = +k[1][0], i = +k[0][1], y = +k[1][1], a > b && (k = a, a = b, b = k), i > y && (k = i, i = y, y = k), g.precision(s)) : [[a, i], [b, y]];
    }, g.minorExtent = function(i) {
      return arguments.length ? (e = +i[0][0], n = +i[1][0], x = +i[0][1], size = +i[1][1], e > n && (i = e, e = n, n = i), x > size && (i = x, x = size, size = i), g.precision(s)) : [[e, x], [n, size]];
    }, g.step = function(v) {
      return arguments.length ? g.majorStep(v).minorStep(v) : g.minorStep();
    }, g.majorStep = function(result) {
      return arguments.length ? (step = +result[0], w = +result[1], g) : [step, w];
    }, g.minorStep = function(result) {
      return arguments.length ? (value = +result[0], d = +result[1], g) : [value, d];
    }, g.precision = function(_) {
      return arguments.length ? (s = +_, pos = next(x, size, 90), res = reset(e, n, s), point = next(i, y, 90), map = reset(a, b, s), g) : s;
    }, g.majorExtent([[-180, -90 + epsilon], [180, 90 - epsilon]]).minorExtent([[-180, -80 - epsilon], [180, 80 + epsilon]]);
  };
  /**
   * @return {?}
   */
  d3.geo.greatArc = function() {
    /**
     * @return {?}
     */
    function greatArc() {
      return {
        type : "LineString",
        coordinates : [source_ || value.apply(this, arguments), target_ || r.apply(this, arguments)]
      };
    }
    var source_;
    var target_;
    /** @type {function(!Object): ?} */
    var value = source;
    /** @type {function(!Event): ?} */
    var r = end;
    return greatArc.distance = function() {
      return d3.geo.distance(source_ || value.apply(this, arguments), target_ || r.apply(this, arguments));
    }, greatArc.source = function(name) {
      return arguments.length ? (value = name, source_ = "function" == typeof name ? null : name, greatArc) : value;
    }, greatArc.target = function(name) {
      return arguments.length ? (r = name, target_ = "function" == typeof name ? null : name, greatArc) : r;
    }, greatArc.precision = function() {
      return arguments.length ? greatArc : 0;
    }, greatArc;
  };
  /**
   * @param {string} obj
   * @param {string} array
   * @return {?}
   */
  d3.geo.interpolate = function(obj, array) {
    return tick(obj[0] * factor, obj[1] * factor, array[0] * factor, array[1] * factor);
  };
  /**
   * @param {!Object} name
   * @return {?}
   */
  d3.geo.length = function(name) {
    return Ji = 0, d3.geo.stream(name, d3_geo_length), Ji;
  };
  var Ji;
  var d3_geo_length = {
    sphere : d3_noop,
    point : d3_noop,
    lineStart : d3_geo_lengthLineStart,
    lineEnd : d3_noop,
    polygonStart : d3_noop,
    polygonEnd : d3_noop
  };
  var d = read(function(a) {
    return Math.sqrt(2 / (1 + a));
  }, function(side) {
    return 2 * Math.asin(side / 2);
  });
  (d3.geo.azimuthalEqualArea = function() {
    return transform(d);
  }).raw = d;
  var str = read(function(num) {
    /** @type {number} */
    var val = Math.acos(num);
    return val && val / Math.sin(val);
  }, undefined);
  (d3.geo.azimuthalEquidistant = function() {
    return transform(str);
  }).raw = str;
  /** @type {function(number, undefined): ?} */
  (d3.geo.conicConformal = function() {
    return func(loop);
  }).raw = loop;
  /** @type {function(number, number): ?} */
  (d3.geo.conicEquidistant = function() {
    return func(string);
  }).raw = string;
  var content = read(function(a) {
    return 1 / a;
  }, Math.atan);
  (d3.geo.gnomonic = function() {
    return transform(content);
  }).raw = content;
  /**
   * @param {number} val
   * @param {number} x
   * @return {?}
   */
  text.invert = function(val, x) {
    return [val, 2 * Math.atan(Math.exp(x)) - halfPi];
  };
  /** @type {function(?, number): ?} */
  (d3.geo.mercator = function() {
    return trackTransforms(text);
  }).raw = text;
  var input = read(function() {
    return 1;
  }, Math.asin);
  (d3.geo.orthographic = function() {
    return transform(input);
  }).raw = input;
  var chunk = read(function(a) {
    return 1 / (1 + a);
  }, function(lowEnd) {
    return 2 * Math.atan(lowEnd);
  });
  (d3.geo.stereographic = function() {
    return transform(chunk);
  }).raw = chunk;
  /**
   * @param {number} arg
   * @param {number} str
   * @return {?}
   */
  raw.invert = function(arg, str) {
    return [-str, 2 * Math.atan(Math.exp(arg)) - halfPi];
  };
  /** @type {function(?, number): ?} */
  (d3.geo.transverseMercator = function() {
    var data = trackTransforms(raw);
    /** @type {function(!Array): ?} */
    var center = data.center;
    /** @type {function(!Array): ?} */
    var rotate = data.rotate;
    return data.center = function(viewportSize) {
      return viewportSize ? center([-viewportSize[1], viewportSize[0]]) : (viewportSize = center(), [-viewportSize[1], viewportSize[0]]);
    }, data.rotate = function(n) {
      return n ? rotate([n[0], n[1], n.length > 2 ? n[2] + 90 : 90]) : (n = rotate(), [n[0], n[1], n[2] - 90]);
    }, data.rotate([0, 0]);
  }).raw = raw;
  d3.geom = {};
  /**
   * @param {!Array} a
   * @return {?}
   */
  d3.geom.hull = function(a) {
    /**
     * @param {!Array} a
     * @return {?}
     */
    function t(a) {
      if (a.length < 3) {
        return [];
      }
      var i;
      var t = $(h);
      var f = $(n);
      var l = a.length;
      /** @type {!Array} */
      var data = [];
      /** @type {!Array} */
      var start = [];
      /** @type {number} */
      i = 0;
      for (; l > i; i++) {
        data.push([+t.call(this, a[i], i), +f.call(this, a[i], i), i]);
      }
      data.sort(rolesComparator);
      /** @type {number} */
      i = 0;
      for (; l > i; i++) {
        start.push([data[i][0], -data[i][1]]);
      }
      var e = hmsToNPT(data);
      var s = hmsToNPT(start);
      /** @type {boolean} */
      var skip = s[0] === e[0];
      /** @type {boolean} */
      var index = s[s.length - 1] === e[e.length - 1];
      /** @type {!Array} */
      var r = [];
      /** @type {number} */
      i = e.length - 1;
      for (; i >= 0; --i) {
        r.push(a[data[e[i]][2]]);
      }
      /** @type {number} */
      i = +skip;
      for (; i < s.length - index; ++i) {
        r.push(a[data[s[i]][2]]);
      }
      return r;
    }
    /** @type {function(!Object): ?} */
    var h = holder;
    /** @type {function(!Object): ?} */
    var n = target;
    return arguments.length ? t(a) : (t.x = function(name) {
      return arguments.length ? (h = name, t) : h;
    }, t.y = function(name) {
      return arguments.length ? (n = name, t) : n;
    }, t);
  };
  /**
   * @param {?} array
   * @return {?}
   */
  d3.geom.polygon = function(array) {
    return equal(array, b), array;
  };
  /** @type {!Array} */
  var b = d3.geom.polygon.prototype = [];
  /**
   * @return {?}
   */
  b.area = function() {
    var b;
    /** @type {number} */
    var i = -1;
    var l = this.length;
    var a = this[l - 1];
    /** @type {number} */
    var ret = 0;
    for (; ++i < l;) {
      b = a;
      a = this[i];
      /** @type {number} */
      ret = ret + (b[1] * a[0] - b[0] * a[1]);
    }
    return .5 * ret;
  };
  /**
   * @param {number} object
   * @return {?}
   */
  b.centroid = function(object) {
    var y;
    var classBonusMultiplier;
    /** @type {number} */
    var i = -1;
    var l = this.length;
    /** @type {number} */
    var viewerN = 0;
    /** @type {number} */
    var classBonus = 0;
    var x = this[l - 1];
    if (!arguments.length) {
      /** @type {number} */
      object = -1 / (6 * this.area());
    }
    for (; ++i < l;) {
      y = x;
      x = this[i];
      /** @type {number} */
      classBonusMultiplier = y[0] * x[1] - x[0] * y[1];
      /** @type {number} */
      viewerN = viewerN + (y[0] + x[0]) * classBonusMultiplier;
      /** @type {number} */
      classBonus = classBonus + (y[1] + x[1]) * classBonusMultiplier;
    }
    return [viewerN * object, classBonus * object];
  };
  /**
   * @param {!Array} result
   * @return {?}
   */
  b.clip = function(result) {
    var matches;
    var i;
    var length;
    var value;
    var key;
    var r;
    var index = join(result);
    /** @type {number} */
    var viewModelProp = -1;
    /** @type {number} */
    var high = this.length - join(this);
    var val = this[high - 1];
    for (; ++viewModelProp < high;) {
      matches = result.slice();
      /** @type {number} */
      result.length = 0;
      value = this[viewModelProp];
      key = matches[(length = matches.length - index) - 1];
      /** @type {number} */
      i = -1;
      for (; ++i < length;) {
        r = matches[i];
        if (out(r, val, value)) {
          if (!out(key, val, value)) {
            result.push(format(key, r, val, value));
          }
          result.push(r);
        } else {
          if (out(key, val, value)) {
            result.push(format(key, r, val, value));
          }
        }
        key = r;
      }
      if (index) {
        result.push(result[0]);
      }
      val = value;
    }
    return result;
  };
  var d3_geom_voronoiEdges;
  var d3_geom_voronoiCells;
  var d3_geom_voronoiBeaches;
  var d3_geom_voronoiFirstCircle;
  var d3_geom_voronoiCircles;
  /** @type {!Array} */
  var insertStack = [];
  /** @type {!Array} */
  var d3_geom_voronoiCirclePool = [];
  /**
   * @return {?}
   */
  d3_geom_voronoiCell.prototype.prepare = function() {
    var ret;
    var halfEdges = this.edges;
    var iHalfEdge = halfEdges.length;
    for (; iHalfEdge--;) {
      ret = halfEdges[iHalfEdge].edge;
      if (!(ret.b && ret.a)) {
        halfEdges.splice(iHalfEdge, 1);
      }
    }
    return halfEdges.sort(v), halfEdges.length;
  };
  d3_geom_voronoiHalfEdge.prototype = {
    start : function() {
      return this.edge.l === this.site ? this.edge.a : this.edge.b;
    },
    end : function() {
      return this.edge.l === this.site ? this.edge.b : this.edge.a;
    }
  };
  d3_geom_voronoiRedBlackTree.prototype = {
    insert : function(after, node) {
      var parent;
      var grandpa;
      var uncle;
      if (after) {
        if (node.P = after, node.N = after.N, after.N && (after.N.P = node), after.N = node, after.R) {
          after = after.R;
          for (; after.L;) {
            after = after.L;
          }
          /** @type {!Object} */
          after.L = node;
        } else {
          /** @type {!Object} */
          after.R = node;
        }
        /** @type {!Object} */
        parent = after;
      } else {
        if (this._) {
          after = d3_geom_voronoiRedBlackFirst(this._);
          /** @type {null} */
          node.P = null;
          /** @type {!Object} */
          node.N = after;
          after.P = after.L = node;
          /** @type {!Object} */
          parent = after;
        } else {
          /** @type {null} */
          node.P = node.N = null;
          /** @type {!Object} */
          this._ = node;
          /** @type {null} */
          parent = null;
        }
      }
      /** @type {null} */
      node.L = node.R = null;
      node.U = parent;
      /** @type {boolean} */
      node.C = true;
      /** @type {!Object} */
      after = node;
      for (; parent && parent.C;) {
        grandpa = parent.U;
        if (parent === grandpa.L) {
          uncle = grandpa.R;
          if (uncle && uncle.C) {
            /** @type {boolean} */
            parent.C = uncle.C = false;
            /** @type {boolean} */
            grandpa.C = true;
            after = grandpa;
          } else {
            if (after === parent.R) {
              d3_geom_voronoiRedBlackRotateLeft(this, parent);
              after = parent;
              parent = after.U;
            }
            /** @type {boolean} */
            parent.C = false;
            /** @type {boolean} */
            grandpa.C = true;
            d3_geom_voronoiRedBlackRotateRight(this, grandpa);
          }
        } else {
          uncle = grandpa.L;
          if (uncle && uncle.C) {
            /** @type {boolean} */
            parent.C = uncle.C = false;
            /** @type {boolean} */
            grandpa.C = true;
            after = grandpa;
          } else {
            if (after === parent.L) {
              d3_geom_voronoiRedBlackRotateRight(this, parent);
              after = parent;
              parent = after.U;
            }
            /** @type {boolean} */
            parent.C = false;
            /** @type {boolean} */
            grandpa.C = true;
            d3_geom_voronoiRedBlackRotateLeft(this, grandpa);
          }
        }
        parent = after.U;
      }
      /** @type {boolean} */
      this._.C = false;
    },
    remove : function(node) {
      if (node.N) {
        node.N.P = node.P;
      }
      if (node.P) {
        node.P.N = node.N;
      }
      /** @type {null} */
      node.N = node.P = null;
      var sibling;
      var next;
      var red;
      var parent = node.U;
      var left = node.L;
      var right = node.R;
      if (next = left ? right ? d3_geom_voronoiRedBlackFirst(right) : left : right, parent ? parent.L === node ? parent.L = next : parent.R = next : this._ = next, left && right ? (red = next.C, next.C = node.C, next.L = left, left.U = next, next !== right ? (parent = next.U, next.U = node.U, node = next.R, parent.L = node, next.R = right, right.U = next) : (next.U = parent, parent = next, node = next.R)) : (red = node.C, node = next), node && (node.U = parent), !red) {
        if (node && node.C) {
          return void(node.C = false);
        }
        do {
          if (node === this._) {
            break;
          }
          if (node === parent.L) {
            if (sibling = parent.R, sibling.C && (sibling.C = false, parent.C = true, d3_geom_voronoiRedBlackRotateLeft(this, parent), sibling = parent.R), sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
              if (!(sibling.R && sibling.R.C)) {
                /** @type {boolean} */
                sibling.L.C = false;
                /** @type {boolean} */
                sibling.C = true;
                d3_geom_voronoiRedBlackRotateRight(this, sibling);
                sibling = parent.R;
              }
              sibling.C = parent.C;
              /** @type {boolean} */
              parent.C = sibling.R.C = false;
              d3_geom_voronoiRedBlackRotateLeft(this, parent);
              node = this._;
              break;
            }
          } else {
            if (sibling = parent.L, sibling.C && (sibling.C = false, parent.C = true, d3_geom_voronoiRedBlackRotateRight(this, parent), sibling = parent.L), sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
              if (!(sibling.L && sibling.L.C)) {
                /** @type {boolean} */
                sibling.R.C = false;
                /** @type {boolean} */
                sibling.C = true;
                d3_geom_voronoiRedBlackRotateLeft(this, sibling);
                sibling = parent.L;
              }
              sibling.C = parent.C;
              /** @type {boolean} */
              parent.C = sibling.L.C = false;
              d3_geom_voronoiRedBlackRotateRight(this, parent);
              node = this._;
              break;
            }
          }
          /** @type {boolean} */
          sibling.C = true;
          node = parent;
          parent = parent.U;
        } while (!node.C);
        if (node) {
          /** @type {boolean} */
          node.C = false;
        }
      }
    }
  };
  /**
   * @param {?} data
   * @return {?}
   */
  d3.geom.voronoi = function(data) {
    /**
     * @param {!Array} data
     * @return {?}
     */
    function voronoi(data) {
      /** @type {!Array} */
      var b = new Array(data.length);
      var left = clipExtent[0][0];
      var top = clipExtent[0][1];
      var right = clipExtent[1][0];
      var bottom = clipExtent[1][1];
      return d3_geom_voronoi(sites(data), clipExtent).cells.forEach(function(cell, p) {
        var edges = cell.edges;
        var i = cell.site;
        var record = b[p] = edges.length ? edges.map(function(thisWalker) {
          var b = thisWalker.start();
          return [b.x, b.y];
        }) : i.x >= left && i.x <= right && i.y >= top && i.y <= bottom ? [[left, bottom], [right, bottom], [right, top], [left, top]] : [];
        record.point = data[p];
      }), b;
    }
    /**
     * @param {!Array} data
     * @return {?}
     */
    function sites(data) {
      return data.map(function(d, i) {
        return {
          x : Math.round(y$$(d, i) / epsilon) * epsilon,
          y : Math.round(x$$(d, i) / epsilon) * epsilon,
          i : i
        };
      });
    }
    /** @type {function(!Object): ?} */
    var r = holder;
    /** @type {function(!Object): ?} */
    var container = target;
    var y$$ = r;
    var x$$ = container;
    /** @type {!Array} */
    var clipExtent = d3_geom_voronoiClipExtent;
    return data ? voronoi(data) : (voronoi.links = function(data) {
      return d3_geom_voronoi(sites(data)).edges.filter(function(edge) {
        return edge.l && edge.r;
      }).map(function(edge) {
        return {
          source : data[edge.l.i],
          target : data[edge.r.i]
        };
      });
    }, voronoi.triangles = function(data) {
      /** @type {!Array} */
      var newNodeLists = [];
      return d3_geom_voronoi(sites(data)).cells.forEach(function(data, i) {
        var excep;
        var s0;
        var site = data.site;
        var edges = data.edges.sort(v);
        /** @type {number} */
        var j = -1;
        var i = edges.length;
        var e1 = edges[i - 1].edge;
        var s1 = e1.l === site ? e1.r : e1.l;
        for (; ++j < i;) {
          excep = e1;
          s0 = s1;
          e1 = edges[j].edge;
          s1 = e1.l === site ? e1.r : e1.l;
          if (i < s0.i && i < s1.i && d3_geom_voronoiTriangleArea(site, s0, s1) < 0) {
            newNodeLists.push([data[i], data[s0.i], data[s1.i]]);
          }
        }
      }), newNodeLists;
    }, voronoi.x = function(name) {
      return arguments.length ? (y$$ = $(r = name), voronoi) : r;
    }, voronoi.y = function(data) {
      return arguments.length ? (x$$ = $(container = data), voronoi) : container;
    }, voronoi.clipExtent = function(_) {
      return arguments.length ? (clipExtent = null == _ ? d3_geom_voronoiClipExtent : _, voronoi) : clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent;
    }, voronoi.size = function(_) {
      return arguments.length ? voronoi.clipExtent(_ && [[0, 0], _]) : clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent && clipExtent[1];
    }, voronoi);
  };
  /** @type {!Array} */
  var d3_geom_voronoiClipExtent = [[-1E6, -1E6], [1E6, 1E6]];
  /**
   * @param {!Array} vertices
   * @return {?}
   */
  d3.geom.delaunay = function(vertices) {
    return d3.geom.voronoi().triangles(vertices);
  };
  /**
   * @param {!Array} data
   * @param {!Object} j
   * @param {!Object} n
   * @param {!Object} i
   * @param {!Object} s
   * @return {?}
   */
  d3.geom.quadtree = function(data, j, n, i, s) {
    /**
     * @param {!Array} data
     * @return {?}
     */
    function add(data) {
      /**
       * @param {!Object} c
       * @param {!Function} d
       * @param {number} a
       * @param {number} x
       * @param {!Object} t
       * @param {!Object} callback
       * @param {!Object} type
       * @param {!Object} node
       * @return {undefined}
       */
      function callback(c, d, a, x, t, callback, type, node) {
        if (!isNaN(a) && !isNaN(x)) {
          if (c.leaf) {
            var i = c.x;
            var y = c.y;
            if (null != i) {
              if (abs(i - a) + abs(y - x) < .01) {
                fn(c, d, a, x, t, callback, type, node);
              } else {
                var cp = c.point;
                /** @type {null} */
                c.x = c.y = c.point = null;
                fn(c, cp, i, y, t, callback, type, node);
                fn(c, d, a, x, t, callback, type, node);
              }
            } else {
              /** @type {number} */
              c.x = a;
              /** @type {number} */
              c.y = x;
              /** @type {!Function} */
              c.point = d;
            }
          } else {
            fn(c, d, a, x, t, callback, type, node);
          }
        }
      }
      /**
       * @param {!Object} n
       * @param {!Function} p
       * @param {number} t
       * @param {number} i
       * @param {!Object} x
       * @param {!Object} path
       * @param {!Object} value
       * @param {!Object} css
       * @return {undefined}
       */
      function fn(n, p, t, i, x, path, value, css) {
        /** @type {number} */
        var w = .5 * (x + value);
        /** @type {number} */
        var to = .5 * (path + css);
        /** @type {boolean} */
        var offset = t >= w;
        /** @type {boolean} */
        var seg = i >= to;
        /** @type {number} */
        var j = (seg << 1) + offset;
        /** @type {boolean} */
        n.leaf = false;
        n = n.nodes[j] || (n.nodes[j] = random());
        if (offset) {
          /** @type {number} */
          x = w;
        } else {
          /** @type {number} */
          value = w;
        }
        if (seg) {
          /** @type {number} */
          path = to;
        } else {
          /** @type {number} */
          css = to;
        }
        callback(n, p, t, i, x, path, value, css);
      }
      var value;
      var self;
      var ret;
      var key;
      var sum;
      var min;
      var size;
      var max;
      var start;
      var t = $(h);
      var hasXYZ = $(p);
      if (null != j) {
        min = j;
        size = n;
        max = i;
        start = s;
      } else {
        if (max = start = -(min = size = 1 / 0), self = [], ret = [], sum = data.length, parCnt) {
          /** @type {number} */
          key = 0;
          for (; sum > key; ++key) {
            value = data[key];
            if (value.x < min) {
              min = value.x;
            }
            if (value.y < size) {
              size = value.y;
            }
            if (value.x > max) {
              max = value.x;
            }
            if (value.y > start) {
              start = value.y;
            }
            self.push(value.x);
            ret.push(value.y);
          }
        } else {
          /** @type {number} */
          key = 0;
          for (; sum > key; ++key) {
            /** @type {number} */
            var item = +t(value = data[key], key);
            /** @type {number} */
            var i = +hasXYZ(value, key);
            if (min > item) {
              /** @type {number} */
              min = item;
            }
            if (size > i) {
              /** @type {number} */
              size = i;
            }
            if (item > max) {
              /** @type {number} */
              max = item;
            }
            if (i > start) {
              /** @type {number} */
              start = i;
            }
            self.push(item);
            ret.push(i);
          }
        }
      }
      /** @type {number} */
      var total = max - min;
      /** @type {number} */
      var offset = start - size;
      if (total > offset) {
        start = size + total;
      } else {
        max = min + offset;
      }
      var c = random();
      if (c.add = function(x) {
        callback(c, x, +t(x, ++key), +hasXYZ(x, key), min, size, max, start);
      }, c.visit = function(context) {
        debug(context, c, min, size, max, start);
      }, key = -1, null == j) {
        for (; ++key < sum;) {
          callback(c, data[key], self[key], ret[key], min, size, max, start);
        }
        --key;
      } else {
        data.forEach(c.add);
      }
      return self = ret = data = value = null, c;
    }
    var parCnt;
    /** @type {function(!Object): ?} */
    var h = holder;
    /** @type {function(!Object): ?} */
    var p = target;
    return (parCnt = arguments.length) ? (h = y, p = padding, 3 === parCnt && (s = n, i = j, n = j = 0), add(data)) : (add.x = function(name) {
      return arguments.length ? (h = name, add) : h;
    }, add.y = function(name) {
      return arguments.length ? (p = name, add) : p;
    }, add.extent = function(locations) {
      return arguments.length ? (null == locations ? j = n = i = s = null : (j = +locations[0][0], n = +locations[0][1], i = +locations[1][0], s = +locations[1][1]), add) : null == j ? null : [[j, n], [i, s]];
    }, add.size = function(sizeHeight) {
      return arguments.length ? (null == sizeHeight ? j = n = i = s = null : (j = n = 0, i = +sizeHeight[0], s = +sizeHeight[1]), add) : null == j ? null : [i - j, s - n];
    }, add);
  };
  /** @type {function(!Object, !Object): ?} */
  d3.interpolateRgb = update;
  /** @type {function(!Object, !Object): ?} */
  d3.interpolateObject = tweenArc;
  /** @type {function(?, number): ?} */
  d3.interpolateNumber = push;
  /** @type {function(string, string): ?} */
  d3.interpolateString = setup;
  /** @type {!RegExp} */
  var lineBreak = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  /** @type {!RegExp} */
  var nameParse = new RegExp(lineBreak.source, "g");
  /** @type {function(!Function, string): ?} */
  d3.interpolate = interpolate;
  /** @type {!Array} */
  d3.interpolators = [function(a, object) {
    /** @type {string} */
    var kind = typeof object;
    return ("string" === kind ? _.has(object) || /^(#|rgb\(|hsl\()/.test(object) ? update : setup : object instanceof d3_color ? update : Array.isArray(object) ? get : "object" === kind && isNaN(object) ? tweenArc : push)(a, object);
  }];
  /** @type {function(!Object, !Object): ?} */
  d3.interpolateArray = get;
  /**
   * @return {?}
   */
  var center = function() {
    return undefined;
  };
  var existingTreeElements = d3.map({
    linear : center,
    poly : f_term,
    quad : function() {
      return checkMetaTwt;
    },
    cubic : function() {
      return linear;
    },
    sin : function() {
      return vectorize_2d;
    },
    exp : function() {
      return getVal;
    },
    circle : function() {
      return circle;
    },
    elastic : ElasticEaseIn,
    back : back,
    bounce : function() {
      return delta;
    }
  });
  var typeToOtherRealmType = d3.map({
    "in" : undefined,
    out : tag,
    "in-out" : expect,
    "out-in" : function(B) {
      return expect(tag(B));
    }
  });
  /**
   * @param {!Object} value
   * @return {?}
   */
  d3.ease = function(value) {
    var i = value.indexOf("-");
    var child = i >= 0 ? value.substring(0, i) : value;
    var type = i >= 0 ? value.substring(i + 1) : "in";
    return child = existingTreeElements.get(child) || center, type = typeToOtherRealmType.get(type) || undefined, navigateTo(type(child.apply(null, slice.call(arguments, 1))));
  };
  /** @type {function(!Object, !Object): ?} */
  d3.interpolateHcl = Player;
  /** @type {function(!Object, !Object): ?} */
  d3.interpolateHsl = generate;
  /** @type {function(!Object, !Object): ?} */
  d3.interpolateLab = link;
  /** @type {function(number, number): ?} */
  d3.interpolateRound = before;
  /**
   * @param {string} tagName
   * @return {?}
   */
  d3.transform = function(tagName) {
    /** @type {!Element} */
    var node = doc.createElementNS(d3.ns.prefix.svg, "g");
    return (d3.transform = function(val) {
      if (null != val) {
        node.setAttribute("transform", val);
        var surface = node.transform.baseVal.consolidate();
      }
      return new Foo(surface ? surface.matrix : squares);
    })(tagName);
  };
  /**
   * @return {?}
   */
  Foo.prototype.toString = function() {
    return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")";
  };
  var squares = {
    a : 1,
    b : 0,
    c : 0,
    d : 1,
    e : 0,
    f : 0
  };
  /** @type {function(string, string): ?} */
  d3.interpolateTransform = move;
  d3.layout = {};
  /**
   * @return {?}
   */
  d3.layout.bundle = function() {
    return function(jsonGraphEnvelopes) {
      /** @type {!Array} */
      var paths = [];
      /** @type {number} */
      var jsonGraphEnvelopeIndex = -1;
      var jsonGraphEnvelopeCount = jsonGraphEnvelopes.length;
      for (; ++jsonGraphEnvelopeIndex < jsonGraphEnvelopeCount;) {
        paths.push(d3_layout_bundlePath(jsonGraphEnvelopes[jsonGraphEnvelopeIndex]));
      }
      return paths;
    };
  };
  /**
   * @return {?}
   */
  d3.layout.chord = function() {
    /**
     * @return {undefined}
     */
    function clean() {
      var width;
      var offset;
      var start;
      var k;
      var j;
      var arr = {};
      /** @type {!Array} */
      var obj = [];
      var all = d3.range(i);
      /** @type {!Array} */
      var r = [];
      /** @type {!Array} */
      d = [];
      /** @type {!Array} */
      out = [];
      /** @type {number} */
      width = 0;
      /** @type {number} */
      k = -1;
      for (; ++k < i;) {
        /** @type {number} */
        offset = 0;
        /** @type {number} */
        j = -1;
        for (; ++j < i;) {
          offset = offset + list[k][j];
        }
        obj.push(offset);
        r.push(d3.range(i));
        width = width + offset;
      }
      if (cb) {
        all.sort(function(access, key) {
          return cb(obj[access], obj[key]);
        });
      }
      if (s) {
        r.forEach(function(originalRepos, slot) {
          originalRepos.sort(function(name, i) {
            return s(list[slot][name], list[slot][i]);
          });
        });
      }
      /** @type {number} */
      width = (tau - value * i) / width;
      /** @type {number} */
      offset = 0;
      /** @type {number} */
      k = -1;
      for (; ++k < i;) {
        start = offset;
        /** @type {number} */
        j = -1;
        for (; ++j < i;) {
          var a = all[k];
          var i = r[a][j];
          var n = list[a][i];
          var start = offset;
          var endAngle = offset = offset + n * width;
          arr[a + "-" + i] = {
            index : a,
            subindex : i,
            startAngle : start,
            endAngle : endAngle,
            value : n
          };
        }
        out[a] = {
          index : a,
          startAngle : start,
          endAngle : offset,
          value : (offset - start) / width
        };
        offset = offset + value;
      }
      /** @type {number} */
      k = -1;
      for (; ++k < i;) {
        /** @type {number} */
        j = k - 1;
        for (; ++j < i;) {
          var a = arr[k + "-" + j];
          var b = arr[j + "-" + k];
          if (a.value || b.value) {
            d.push(a.value < b.value ? {
              source : b,
              target : a
            } : {
              source : a,
              target : b
            });
          }
        }
      }
      if (promise) {
        init();
      }
    }
    /**
     * @return {undefined}
     */
    function init() {
      d.sort(function(a, b) {
        return promise((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2);
      });
    }
    var d;
    var out;
    var list;
    var i;
    var cb;
    var s;
    var promise;
    var chord = {};
    /** @type {number} */
    var value = 0;
    return chord.matrix = function(value) {
      return arguments.length ? (i = (list = value) && list.length, d = out = null, chord) : list;
    }, chord.padding = function(name) {
      return arguments.length ? (value = name, d = out = null, chord) : value;
    }, chord.sortGroups = function(n) {
      return arguments.length ? (cb = n, d = out = null, chord) : cb;
    }, chord.sortSubgroups = function(sNext) {
      return arguments.length ? (s = sNext, d = null, chord) : s;
    }, chord.sortChords = function(context) {
      return arguments.length ? (promise = context, d && init(), chord) : promise;
    }, chord.chords = function() {
      return d || clean(), d;
    }, chord.groups = function() {
      return out || clean(), out;
    }, chord;
  };
  /**
   * @return {?}
   */
  d3.layout.force = function() {
    /**
     * @param {!Object} node
     * @return {?}
     */
    function repulse(node) {
      return function(quad, before, canCreateDiscussions, i) {
        if (quad.point !== node) {
          /** @type {number} */
          var dx = quad.cx - node.x;
          /** @type {number} */
          var dy = quad.cy - node.y;
          /** @type {number} */
          var difference = i - before;
          /** @type {number} */
          var dn = dx * dx + dy * dy;
          if (dn > difference * difference / offset) {
            if (iterations > dn) {
              /** @type {number} */
              var k = quad.charge / dn;
              node.px -= dx * k;
              node.py -= dy * k;
            }
            return true;
          }
          if (quad.point && dn && iterations > dn) {
            /** @type {number} */
            k = quad.pointCharge / dn;
            node.px -= dx * k;
            node.py -= dy * k;
          }
        }
        return !quad.charge;
      };
    }
    /**
     * @param {!Object} bullet
     * @return {undefined}
     */
    function init(bullet) {
      bullet.px = d3.event.x;
      bullet.py = d3.event.y;
      force.resume();
    }
    var x;
    var value;
    var skyline1;
    var arr;
    var charges;
    var force = {};
    var event = d3.dispatch("start", "tick", "end");
    /** @type {!Array} */
    var bbox = [1, 1];
    /** @type {number} */
    var step = .9;
    /** @type {number} */
    var r = commonjsRequire;
    /** @type {number} */
    var message = titleSome;
    /** @type {number} */
    var charge = -30;
    /** @type {number} */
    var iterations = m_iterations_in_chunk;
    /** @type {number} */
    var scale = .1;
    /** @type {number} */
    var offset = .64;
    /** @type {!Array} */
    var nodes = [];
    /** @type {!Array} */
    var args = [];
    return force.tick = function() {
      if ((value = value * .99) < .005) {
        return event.end({
          type : "end",
          alpha : value = 0
        }), true;
      }
      var q;
      var i;
      var o;
      var s;
      var t;
      var l;
      var k;
      var x;
      var y;
      var index = nodes.length;
      var length = args.length;
      /** @type {number} */
      i = 0;
      for (; length > i; ++i) {
        o = args[i];
        s = o.source;
        t = o.target;
        /** @type {number} */
        x = t.x - s.x;
        /** @type {number} */
        y = t.y - s.y;
        if (l = x * x + y * y) {
          /** @type {number} */
          l = value * arr[i] * ((l = Math.sqrt(l)) - skyline1[i]) / l;
          /** @type {number} */
          x = x * l;
          /** @type {number} */
          y = y * l;
          t.x -= x * (k = s.weight / (t.weight + s.weight));
          t.y -= y * k;
          s.x += x * (k = 1 - k);
          s.y += y * k;
        }
      }
      if ((k = value * scale) && (x = bbox[0] / 2, y = bbox[1] / 2, i = -1, k)) {
        for (; ++i < index;) {
          o = nodes[i];
          o.x += (x - o.x) * k;
          o.y += (y - o.y) * k;
        }
      }
      if (charge) {
        d3_layout_forceAccumulate(q = d3.geom.quadtree(nodes), value, charges);
        /** @type {number} */
        i = -1;
        for (; ++i < index;) {
          if (!(o = nodes[i]).fixed) {
            q.visit(repulse(o));
          }
        }
      }
      /** @type {number} */
      i = -1;
      for (; ++i < index;) {
        o = nodes[i];
        if (o.fixed) {
          o.x = o.px;
          o.y = o.py;
        } else {
          o.x -= (o.px - (o.px = o.x)) * step;
          o.y -= (o.py - (o.py = o.y)) * step;
        }
      }
      event.tick({
        type : "tick",
        alpha : value
      });
    }, force.nodes = function(_) {
      return arguments.length ? (nodes = _, force) : nodes;
    }, force.links = function(text) {
      return arguments.length ? (args = text, force) : args;
    }, force.size = function(height) {
      return arguments.length ? (bbox = height, force) : bbox;
    }, force.linkDistance = function(b) {
      return arguments.length ? (r = "function" == typeof b ? b : +b, force) : r;
    }, force.distance = force.linkDistance, force.linkStrength = function(prob) {
      return arguments.length ? (message = "function" == typeof prob ? prob : +prob, force) : message;
    }, force.friction = function(value) {
      return arguments.length ? (step = +value, force) : step;
    }, force.charge = function(field) {
      return arguments.length ? (charge = "function" == typeof field ? field : +field, force) : charge;
    }, force.chargeDistance = function(width) {
      return arguments.length ? (iterations = width * width, force) : Math.sqrt(iterations);
    }, force.gravity = function(mario) {
      return arguments.length ? (scale = +mario, force) : scale;
    }, force.theta = function(value) {
      return arguments.length ? (offset = value * value, force) : Math.sqrt(offset);
    }, force.alpha = function(x) {
      return arguments.length ? (x = +x, value ? value = x > 0 ? x : 0 : x > 0 && (event.start({
        type : "start",
        alpha : value = x
      }), d3.timer(force.tick)), force) : value;
    }, force.start = function() {
      /**
       * @param {string} key
       * @param {number} pos
       * @return {?}
       */
      function position(key, pos) {
        if (!buffer) {
          /** @type {!Array} */
          buffer = new Array(length);
          /** @type {number} */
          index = 0;
          for (; length > index; ++index) {
            /** @type {!Array} */
            buffer[index] = [];
          }
          /** @type {number} */
          index = 0;
          for (; length > index; ++index) {
            var e = args[index];
            buffer[e.source.index].push(e.target);
            buffer[e.target.index].push(e.source);
          }
        }
        var result;
        var val = buffer[i];
        /** @type {number} */
        var index = -1;
        var length = val.length;
        for (; ++index < length;) {
          if (!isNaN(result = val[index][key])) {
            return result;
          }
        }
        return Math.random() * pos;
      }
      var i;
      var buffer;
      var o;
      var length = nodes.length;
      var l = args.length;
      var w = bbox[0];
      var y1 = bbox[1];
      /** @type {number} */
      i = 0;
      for (; length > i; ++i) {
        /** @type {number} */
        (o = nodes[i]).index = i;
        /** @type {number} */
        o.weight = 0;
      }
      /** @type {number} */
      i = 0;
      for (; l > i; ++i) {
        o = args[i];
        if ("number" == typeof o.source) {
          o.source = nodes[o.source];
        }
        if ("number" == typeof o.target) {
          o.target = nodes[o.target];
        }
        ++o.source.weight;
        ++o.target.weight;
      }
      /** @type {number} */
      i = 0;
      for (; length > i; ++i) {
        o = nodes[i];
        if (isNaN(o.x)) {
          o.x = position("x", w);
        }
        if (isNaN(o.y)) {
          o.y = position("y", y1);
        }
        if (isNaN(o.px)) {
          o.px = o.x;
        }
        if (isNaN(o.py)) {
          o.py = o.y;
        }
      }
      if (skyline1 = [], "function" == typeof r) {
        /** @type {number} */
        i = 0;
        for (; l > i; ++i) {
          /** @type {number} */
          skyline1[i] = +r.call(this, args[i], i);
        }
      } else {
        /** @type {number} */
        i = 0;
        for (; l > i; ++i) {
          skyline1[i] = r;
        }
      }
      if (arr = [], "function" == typeof message) {
        /** @type {number} */
        i = 0;
        for (; l > i; ++i) {
          /** @type {number} */
          arr[i] = +message.call(this, args[i], i);
        }
      } else {
        /** @type {number} */
        i = 0;
        for (; l > i; ++i) {
          arr[i] = message;
        }
      }
      if (charges = [], "function" == typeof charge) {
        /** @type {number} */
        i = 0;
        for (; length > i; ++i) {
          /** @type {number} */
          charges[i] = +charge.call(this, nodes[i], i);
        }
      } else {
        /** @type {number} */
        i = 0;
        for (; length > i; ++i) {
          charges[i] = charge;
        }
      }
      return force.resume();
    }, force.resume = function() {
      return force.alpha(.1);
    }, force.stop = function() {
      return force.alpha(0);
    }, force.drag = function() {
      return x || (x = d3.behavior.drag().origin(undefined).on("dragstart.force", _move).on("drag.force", init).on("dragend.force", bbox)), arguments.length ? void this.on("mouseover.force", mousedown).on("mouseout.force", resized).call(x) : x;
    }, d3.rebind(force, event, "on");
  };
  /** @type {number} */
  var commonjsRequire = 20;
  /** @type {number} */
  var titleSome = 1;
  /** @type {number} */
  var m_iterations_in_chunk = 1 / 0;
  /**
   * @return {?}
   */
  d3.layout.hierarchy = function() {
    /**
     * @param {!Object} root
     * @return {?}
     */
    function hierarchy(root) {
      var node;
      /** @type {!Array} */
      var stack = [root];
      /** @type {!Array} */
      var imgToDelete = [];
      /** @type {number} */
      root.depth = 0;
      for (; null != (node = stack.pop());) {
        if (imgToDelete.push(node), (childs = value.call(hierarchy, node, node.depth)) && (i = childs.length)) {
          var i;
          var childs;
          var child;
          for (; --i >= 0;) {
            stack.push(child = childs[i]);
            child.parent = node;
            child.depth = node.depth + 1;
          }
          if (x) {
            /** @type {number} */
            node.value = 0;
          }
          node.children = childs;
        } else {
          if (x) {
            /** @type {number} */
            node.value = +x.call(hierarchy, node, node.depth) || 0;
          }
          delete node.children;
        }
      }
      return d3_layout_hierarchyVisitAfter(root, function(param) {
        var result;
        var e;
        if (args && (result = param.children)) {
          result.sort(args);
        }
        if (x && (e = param.parent)) {
          e.value += param.value;
        }
      }), imgToDelete;
    }
    /** @type {function(!Object, !Object): ?} */
    var args = edge_intersection_interpolation;
    /** @type {function(!Object): ?} */
    var value = App;
    /** @type {function(!Object): ?} */
    var x = TestDialogController;
    return hierarchy.sort = function(a) {
      return arguments.length ? (args = a, hierarchy) : args;
    }, hierarchy.children = function(name) {
      return arguments.length ? (value = name, hierarchy) : value;
    }, hierarchy.value = function(name) {
      return arguments.length ? (x = name, hierarchy) : x;
    }, hierarchy.revalue = function(root) {
      return x && (d3_layout_hierarchyVisitBefore(root, function(a) {
        if (a.children) {
          /** @type {number} */
          a.value = 0;
        }
      }), d3_layout_hierarchyVisitAfter(root, function(data) {
        var s;
        if (!data.children) {
          /** @type {number} */
          data.value = +x.call(hierarchy, data, data.depth) || 0;
        }
        if (s = data.parent) {
          s.value += data.value;
        }
      })), root;
    }, hierarchy;
  };
  /**
   * @return {?}
   */
  d3.layout.partition = function() {
    /**
     * @param {!Object} self
     * @param {string} name
     * @param {number} x
     * @param {number} y
     * @return {undefined}
     */
    function get(self, name, x, y) {
      var c = self.children;
      if (self.x = name, self.y = self.depth * y, self.dx = x, self.dy = y, c && (l = c.length)) {
        var l;
        var e;
        var v;
        /** @type {number} */
        var i = -1;
        /** @type {number} */
        x = self.value ? x / self.value : 0;
        for (; ++i < l;) {
          get(e = c[i], name, v = e.value * x, y);
          name = name + v;
        }
      }
    }
    /**
     * @param {!Object} schema
     * @return {?}
     */
    function filter(schema) {
      var views = schema.children;
      /** @type {number} */
      var d = 0;
      if (views && (l = views.length)) {
        var l;
        /** @type {number} */
        var i = -1;
        for (; ++i < l;) {
          /** @type {number} */
          d = Math.max(d, filter(views[i]));
        }
      }
      return 1 + d;
    }
    /**
     * @param {?} name
     * @param {?} opts
     * @return {?}
     */
    function tree(name, opts) {
      var deps = hierarchy.call(this, name, opts);
      return get(deps[0], 0, separation[0], separation[1] / filter(deps[0])), deps;
    }
    var hierarchy = d3.layout.hierarchy();
    /** @type {!Array} */
    var separation = [1, 1];
    return tree.size = function(x) {
      return arguments.length ? (separation = x, tree) : separation;
    }, d3_layout_hierarchyRebind(tree, hierarchy);
  };
  /**
   * @return {?}
   */
  d3.layout.pie = function() {
    /**
     * @param {!Array} data
     * @return {?}
     */
    function pie(data) {
      var g = data.map(function(expr, val) {
        return +render.call(pie, expr, val);
      });
      /** @type {number} */
      var lastAngle = +("function" == typeof s ? s.apply(this, arguments) : s);
      /** @type {number} */
      var clock = (("function" == typeof h ? h.apply(this, arguments) : h) - lastAngle) / d3.sum(g);
      var bucketSortedColumns = d3.range(data.length);
      if (null != color) {
        bucketSortedColumns.sort(color === kBlank ? function(p2, p1) {
          return g[p1] - g[p2];
        } : function(level, index) {
          return color(data[level], data[index]);
        });
      }
      /** @type {!Array} */
      var parsed = [];
      return bucketSortedColumns.forEach(function(name) {
        var f;
        parsed[name] = {
          data : data[name],
          value : f = g[name],
          startAngle : lastAngle,
          endAngle : lastAngle = lastAngle + f * clock
        };
      }), parsed;
    }
    /** @type {function(new:Number, *=): number} */
    var render = Number;
    var color = kBlank;
    /** @type {number} */
    var s = 0;
    /** @type {number} */
    var h = tau;
    return pie.value = function(name) {
      return arguments.length ? (render = name, pie) : render;
    }, pie.sort = function(str) {
      return arguments.length ? (color = str, pie) : color;
    }, pie.startAngle = function(_) {
      return arguments.length ? (s = _, pie) : s;
    }, pie.endAngle = function(t) {
      return arguments.length ? (h = t, pie) : h;
    }, pie;
  };
  var kBlank = {};
  /**
   * @return {?}
   */
  d3.layout.stack = function() {
    /**
     * @param {?} object
     * @param {?} name
     * @return {?}
     */
    function obj(object, name) {
      var arr = object.map(function(data, val) {
        return render.call(obj, data, val);
      });
      var value = arr.map(function(b) {
        return b.map(function(left, val) {
          return [type.call(obj, left, val), canvas.call(obj, left, val)];
        });
      });
      var s = k.call(obj, value, name);
      arr = d3.permute(arr, s);
      value = d3.permute(value, s);
      var i;
      var key;
      var len;
      var ret = subject.call(obj, value, name);
      var l = arr.length;
      var x = arr[0].length;
      /** @type {number} */
      key = 0;
      for (; x > key; ++key) {
        filter.call(obj, arr[0][key], len = ret[key], value[0][key][1]);
        /** @type {number} */
        i = 1;
        for (; l > i; ++i) {
          filter.call(obj, arr[i][key], len = len + value[i - 1][key][1], value[i][key][1]);
        }
      }
      return object;
    }
    /** @type {function(number): ?} */
    var render = undefined;
    /** @type {function(!NodeList): ?} */
    var k = lo;
    /** @type {function(!Object): ?} */
    var subject = zero;
    /** @type {function(!Object, number, number): undefined} */
    var filter = renderArcs;
    /** @type {function(!Object): ?} */
    var type = getX;
    /** @type {function(!Object): ?} */
    var canvas = DEFAULT_TEXT;
    return obj.values = function(name) {
      return arguments.length ? (render = name, obj) : render;
    }, obj.order = function(a) {
      return arguments.length ? (k = "function" == typeof a ? a : inFont.get(a) || lo, obj) : k;
    }, obj.offset = function(name) {
      return arguments.length ? (subject = "function" == typeof name ? name : propertyThresholdsMap.get(name) || zero, obj) : subject;
    }, obj.x = function(name) {
      return arguments.length ? (type = name, obj) : type;
    }, obj.y = function(name) {
      return arguments.length ? (canvas = name, obj) : canvas;
    }, obj.out = function(tag) {
      return arguments.length ? (filter = tag, obj) : filter;
    }, obj;
  };
  var inFont = d3.map({
    "inside-out" : function(a) {
      var h4;
      var p;
      var value = a.length;
      var order = a.map(sort);
      var data = a.map(blob);
      var inclist = d3.range(value).sort(function(b, a) {
        return order[b] - order[a];
      });
      /** @type {number} */
      var b = 0;
      /** @type {number} */
      var res = 0;
      /** @type {!Array} */
      var newNodeLists = [];
      /** @type {!Array} */
      var bundleTrytes = [];
      /** @type {number} */
      h4 = 0;
      for (; value > h4; ++h4) {
        p = inclist[h4];
        if (res > b) {
          b = b + data[p];
          newNodeLists.push(p);
        } else {
          res = res + data[p];
          bundleTrytes.push(p);
        }
      }
      return bundleTrytes.reverse().concat(newNodeLists);
    },
    reverse : function(data) {
      return d3.range(data.length).reverse();
    },
    "default" : lo
  });
  var propertyThresholdsMap = d3.map({
    silhouette : function(edges) {
      var i;
      var j;
      var left;
      var length = edges.length;
      var spaces = edges[0].length;
      /** @type {!Array} */
      var values = [];
      /** @type {number} */
      var x = 0;
      /** @type {!Array} */
      var maximumLengthElements = [];
      /** @type {number} */
      j = 0;
      for (; spaces > j; ++j) {
        /** @type {number} */
        i = 0;
        /** @type {number} */
        left = 0;
        for (; length > i; i++) {
          left = left + edges[i][j][1];
        }
        if (left > x) {
          x = left;
        }
        values.push(left);
      }
      /** @type {number} */
      j = 0;
      for (; spaces > j; ++j) {
        /** @type {number} */
        maximumLengthElements[j] = (x - values[j]) / 2;
      }
      return maximumLengthElements;
    },
    wiggle : function(p) {
      var j;
      var i;
      var k;
      var vertical;
      var shipping_weight_g;
      var chiSquare;
      var expected;
      var t;
      var delta;
      var u = p.length;
      var a = p[0];
      var l = a.length;
      /** @type {!Array} */
      var locPointState = [];
      /** @type {number} */
      locPointState[0] = t = delta = 0;
      /** @type {number} */
      i = 1;
      for (; l > i; ++i) {
        /** @type {number} */
        j = 0;
        /** @type {number} */
        vertical = 0;
        for (; u > j; ++j) {
          vertical = vertical + p[j][i][1];
        }
        /** @type {number} */
        j = 0;
        /** @type {number} */
        shipping_weight_g = 0;
        /** @type {number} */
        expected = a[i][0] - a[i - 1][0];
        for (; u > j; ++j) {
          /** @type {number} */
          k = 0;
          /** @type {number} */
          chiSquare = (p[j][i][1] - p[j][i - 1][1]) / (2 * expected);
          for (; j > k; ++k) {
            /** @type {number} */
            chiSquare = chiSquare + (p[k][i][1] - p[k][i - 1][1]) / expected;
          }
          /** @type {number} */
          shipping_weight_g = shipping_weight_g + chiSquare * p[j][i][1];
        }
        locPointState[i] = t = t - (vertical ? shipping_weight_g / vertical * expected : 0);
        if (delta > t) {
          /** @type {number} */
          delta = t;
        }
      }
      /** @type {number} */
      i = 0;
      for (; l > i; ++i) {
        locPointState[i] -= delta;
      }
      return locPointState;
    },
    expand : function(a) {
      var key;
      var arrayKey;
      var next_tick_ts;
      var x = a.length;
      var readersLength = a[0].length;
      /** @type {number} */
      var invx = 1 / x;
      /** @type {!Array} */
      var result = [];
      /** @type {number} */
      arrayKey = 0;
      for (; readersLength > arrayKey; ++arrayKey) {
        /** @type {number} */
        key = 0;
        /** @type {number} */
        next_tick_ts = 0;
        for (; x > key; key++) {
          next_tick_ts = next_tick_ts + a[key][arrayKey][1];
        }
        if (next_tick_ts) {
          /** @type {number} */
          key = 0;
          for (; x > key; key++) {
            a[key][arrayKey][1] /= next_tick_ts;
          }
        } else {
          /** @type {number} */
          key = 0;
          for (; x > key; key++) {
            /** @type {number} */
            a[key][arrayKey][1] = invx;
          }
        }
      }
      /** @type {number} */
      arrayKey = 0;
      for (; readersLength > arrayKey; ++arrayKey) {
        /** @type {number} */
        result[arrayKey] = 0;
      }
      return result;
    },
    zero : zero
  });
  /**
   * @return {?}
   */
  d3.layout.histogram = function() {
    /**
     * @param {!Array} comment
     * @param {number} i
     * @return {?}
     */
    function update(comment, i) {
      var data;
      var value;
      /** @type {!Array} */
      var self = [];
      var path = comment.map(id, this);
      var v = result.call(this, path, i);
      var x = p.call(this, v, path, i);
      /** @type {number} */
      i = -1;
      var length = path.length;
      /** @type {number} */
      var mouseup = x.length - 1;
      /** @type {number} */
      var dy = centered ? 1 : 1 / length;
      for (; ++i < mouseup;) {
        /** @type {!Array} */
        data = self[i] = [];
        /** @type {number} */
        data.dx = x[i + 1] - (data.x = x[i]);
        /** @type {number} */
        data.y = 0;
      }
      if (mouseup > 0) {
        /** @type {number} */
        i = -1;
        for (; ++i < length;) {
          value = path[i];
          if (value >= v[0] && value <= v[1]) {
            data = self[d3.bisect(x, value, 1, mouseup) - 1];
            data.y += dy;
            data.push(comment[i]);
          }
        }
      }
      return self;
    }
    /** @type {boolean} */
    var centered = true;
    /** @type {function(new:Number, *=): number} */
    var id = Number;
    /** @type {function(undefined): ?} */
    var result = array;
    /** @type {function(!Object, !NodeList): ?} */
    var p = divide;
    return update.value = function(name) {
      return arguments.length ? (id = name, update) : id;
    }, update.range = function(name) {
      return arguments.length ? (result = $(name), update) : result;
    }, update.bins = function(x) {
      return arguments.length ? (p = "number" == typeof x ? function(pointer) {
        return div(pointer, x);
      } : $(x), update) : p;
    }, update.frequency = function(array) {
      return arguments.length ? (centered = !!array, update) : centered;
    }, update;
  };
  /**
   * @return {?}
   */
  d3.layout.pack = function() {
    /**
     * @param {?} d
     * @param {?} i
     * @return {?}
     */
    function tree(d, i) {
      var result = hierarchy.call(this, d, i);
      var value = result[0];
      var velProj = separation[0];
      var backingRatio = separation[1];
      var has = null == n ? Math.sqrt : "function" == typeof n ? n : function() {
        return n;
      };
      if (value.x = value.y = 0, d3_layout_hierarchyVisitAfter(value, function(b) {
        /** @type {number} */
        b.r = +has(b.value);
      }), d3_layout_hierarchyVisitAfter(value, animate), selectedSelectIndex) {
        /** @type {number} */
        var delta = selectedSelectIndex * (n ? 1 : Math.max(2 * value.r / velProj, 2 * value.r / backingRatio)) / 2;
        d3_layout_hierarchyVisitAfter(value, function(state) {
          state.r += delta;
        });
        d3_layout_hierarchyVisitAfter(value, animate);
        d3_layout_hierarchyVisitAfter(value, function(state) {
          state.r -= delta;
        });
      }
      return equals(value, velProj / 2, backingRatio / 2, n ? 1 : 1 / Math.max(2 * value.r / velProj, 2 * value.r / backingRatio)), result;
    }
    var n;
    var hierarchy = d3.layout.hierarchy().sort(h);
    /** @type {number} */
    var selectedSelectIndex = 0;
    /** @type {!Array} */
    var separation = [1, 1];
    return tree.size = function(x) {
      return arguments.length ? (separation = x, tree) : separation;
    }, tree.radius = function(name) {
      return arguments.length ? (n = null == name || "function" == typeof name ? name : +name, tree) : n;
    }, tree.padding = function(name) {
      return arguments.length ? (selectedSelectIndex = +name, tree) : selectedSelectIndex;
    }, d3_layout_hierarchyRebind(tree, hierarchy);
  };
  /**
   * @return {?}
   */
  d3.layout.tree = function() {
    /**
     * @param {?} d
     * @param {?} opts
     * @return {?}
     */
    function tree(d, opts) {
      var data = hierarchy.call(this, d, opts);
      var root = data[0];
      var node = render(root);
      if (d3_layout_hierarchyVisitAfter(node, firstWalk), node.parent.m = -node.z, d3_layout_hierarchyVisitBefore(node, secondWalk), nodeSize) {
        d3_layout_hierarchyVisitBefore(root, sizeNode);
      } else {
        var left = root;
        var right = root;
        var bottom = root;
        d3_layout_hierarchyVisitBefore(root, function(node) {
          if (node.x < left.x) {
            /** @type {!Object} */
            left = node;
          }
          if (node.x > right.x) {
            /** @type {!Object} */
            right = node;
          }
          if (node.depth > bottom.depth) {
            /** @type {!Object} */
            bottom = node;
          }
        });
        /** @type {number} */
        var EPSILON = separation(left, right) / 2 - left.x;
        /** @type {number} */
        var xf = size[0] / (right.x + separation(right, left) / 2 + EPSILON);
        /** @type {number} */
        var yf = size[1] / (bottom.depth || 1);
        d3_layout_hierarchyVisitBefore(root, function(a) {
          /** @type {number} */
          a.x = (a.x + EPSILON) * xf;
          /** @type {number} */
          a.y = a.depth * yf;
        });
      }
      return data;
    }
    /**
     * @param {?} cell
     * @return {?}
     */
    function render(cell) {
      var parentModule;
      var root1 = {
        A : null,
        children : [cell]
      };
      /** @type {!Array} */
      var queue = [root1];
      for (; null != (parentModule = queue.pop());) {
        var child;
        var children = parentModule.children;
        /** @type {number} */
        var i = 0;
        var length = children.length;
        for (; length > i; ++i) {
          queue.push((children[i] = child = {
            _ : children[i],
            parent : parentModule,
            children : (child = children[i].children) && child.slice() || [],
            A : null,
            a : null,
            z : 0,
            m : 0,
            c : 0,
            s : 0,
            t : null,
            i : i
          }).a = child);
        }
      }
      return root1.children[0];
    }
    /**
     * @param {!Object} v
     * @return {undefined}
     */
    function firstWalk(v) {
      var children = v.children;
      var siblings = v.parent.children;
      var w = v.i ? siblings[v.i - 1] : null;
      if (children.length) {
        d3_layout_treeShift(v);
        /** @type {number} */
        var midpoint = (children[0].z + children[children.length - 1].z) / 2;
        if (w) {
          v.z = w.z + separation(v._, w._);
          /** @type {number} */
          v.m = v.z - midpoint;
        } else {
          /** @type {number} */
          v.z = midpoint;
        }
      } else {
        if (w) {
          v.z = w.z + separation(v._, w._);
        }
      }
      v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
    }
    /**
     * @param {!Object} v
     * @return {undefined}
     */
    function secondWalk(v) {
      v._.x = v.z + v.parent.m;
      v.m += v.parent.m;
    }
    /**
     * @param {!Object} v
     * @param {number} w
     * @param {!Array} ancestor
     * @return {?}
     */
    function apportion(v, w, ancestor) {
      if (w) {
        var shift;
        /** @type {!Object} */
        var vip = v;
        /** @type {!Object} */
        var vop = v;
        /** @type {number} */
        var vim = w;
        var vom = vip.parent.children[0];
        var sip = vip.m;
        var sop = vop.m;
        var sim = vim.m;
        var som = vom.m;
        for (; vim = d3_layout_treeRight(vim), vip = d3_layout_treeLeft(vip), vim && vip;) {
          vom = d3_layout_treeLeft(vom);
          vop = d3_layout_treeRight(vop);
          /** @type {!Object} */
          vop.a = v;
          shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
          if (shift > 0) {
            d3_layout_treeMove(d3_layout_treeAncestor(vim, v, ancestor), v, shift);
            sip = sip + shift;
            sop = sop + shift;
          }
          sim = sim + vim.m;
          sip = sip + vip.m;
          som = som + vom.m;
          sop = sop + vop.m;
        }
        if (vim && !d3_layout_treeRight(vop)) {
          vop.t = vim;
          vop.m += sim - sop;
        }
        if (vip && !d3_layout_treeLeft(vom)) {
          vom.t = vip;
          vom.m += sip - som;
          /** @type {!Object} */
          ancestor = v;
        }
      }
      return ancestor;
    }
    /**
     * @param {!Object} node
     * @return {undefined}
     */
    function sizeNode(node) {
      node.x *= size[0];
      /** @type {number} */
      node.y = node.depth * size[1];
    }
    var hierarchy = d3.layout.hierarchy().sort(null).value(null);
    /** @type {function(!Object, ?): ?} */
    var separation = d3_layout_treeSeparation;
    /** @type {!Array} */
    var size = [1, 1];
    /** @type {null} */
    var nodeSize = null;
    return tree.separation = function(x) {
      return arguments.length ? (separation = x, tree) : separation;
    }, tree.size = function(newsize) {
      return arguments.length ? (nodeSize = null == (size = newsize) ? sizeNode : null, tree) : nodeSize ? null : size;
    }, tree.nodeSize = function(width) {
      return arguments.length ? (nodeSize = null == (size = width) ? null : sizeNode, tree) : nodeSize ? size : null;
    }, d3_layout_hierarchyRebind(tree, hierarchy);
  };
  /**
   * @return {?}
   */
  d3.layout.cluster = function() {
    /**
     * @param {?} d
     * @param {?} i
     * @return {?}
     */
    function cluster(d, i) {
      var previousNode;
      var nodes = hierarchy.call(this, d, i);
      var root = nodes[0];
      /** @type {number} */
      var x = 0;
      d3_layout_hierarchyVisitAfter(root, function(node) {
        var children = node.children;
        if (children && children.length) {
          node.x = d3_layout_clusterX(children);
          node.y = d3_layout_clusterY(children);
        } else {
          node.x = previousNode ? x = x + separation(node, previousNode) : 0;
          /** @type {number} */
          node.y = 0;
          /** @type {!Object} */
          previousNode = node;
        }
      });
      var right = d3_layout_clusterRight(root);
      var left = d3_layout_clusterLeft(root);
      /** @type {number} */
      var lastLine = right.x - separation(right, left) / 2;
      var nextLine = left.x + separation(left, right) / 2;
      return d3_layout_hierarchyVisitAfter(root, nodeSize ? function(touch) {
        /** @type {number} */
        touch.x = (touch.x - root.x) * size[0];
        /** @type {number} */
        touch.y = (root.y - touch.y) * size[1];
      } : function(node) {
        /** @type {number} */
        node.x = (node.x - lastLine) / (nextLine - lastLine) * size[0];
        /** @type {number} */
        node.y = (1 - (root.y ? node.y / root.y : 1)) * size[1];
      }), nodes;
    }
    var hierarchy = d3.layout.hierarchy().sort(null).value(null);
    /** @type {function(!Object, ?): ?} */
    var separation = d3_layout_treeSeparation;
    /** @type {!Array} */
    var size = [1, 1];
    /** @type {boolean} */
    var nodeSize = false;
    return cluster.separation = function(value) {
      return arguments.length ? (separation = value, cluster) : separation;
    }, cluster.size = function(newsize) {
      return arguments.length ? (nodeSize = null == (size = newsize), cluster) : nodeSize ? null : size;
    }, cluster.nodeSize = function(width) {
      return arguments.length ? (nodeSize = null != (size = width), cluster) : nodeSize ? size : null;
    }, d3_layout_hierarchyRebind(cluster, hierarchy);
  };
  /**
   * @return {?}
   */
  d3.layout.treemap = function() {
    /**
     * @param {!Array} node
     * @param {number} a
     * @return {undefined}
     */
    function scale(node, a) {
      var child;
      var width;
      /** @type {number} */
      var i = -1;
      var L = node.length;
      for (; ++i < L;) {
        /** @type {number} */
        width = (child = node[i]).value * (0 > a ? 0 : a);
        /** @type {number} */
        child.area = isNaN(width) || 0 >= width ? 0 : width;
      }
    }
    /**
     * @param {!Object} node
     * @return {undefined}
     */
    function squarify(node) {
      var children = node.children;
      if (children && children.length) {
        var child;
        var score;
        var mLen;
        var rect = pad(node);
        /** @type {!Array} */
        var row = [];
        var m = children.slice();
        /** @type {number} */
        var best = 1 / 0;
        var u = "slice" === mode ? rect.dx : "dice" === mode ? rect.dy : "slice-dice" === mode ? 1 & node.depth ? rect.dy : rect.dx : Math.min(rect.dx, rect.dy);
        scale(m, rect.dx * rect.dy / node.value);
        /** @type {number} */
        row.area = 0;
        for (; (mLen = m.length) > 0;) {
          row.push(child = m[mLen - 1]);
          row.area += child.area;
          if ("squarify" !== mode || (score = worst(row, u)) <= best) {
            m.pop();
            best = score;
          } else {
            row.area -= row.pop().area;
            position(row, u, rect, false);
            /** @type {number} */
            u = Math.min(rect.dx, rect.dy);
            /** @type {number} */
            row.length = row.area = 0;
            /** @type {number} */
            best = 1 / 0;
          }
        }
        if (row.length) {
          position(row, u, rect, true);
          /** @type {number} */
          row.length = row.area = 0;
        }
        children.forEach(squarify);
      }
    }
    /**
     * @param {!Object} node
     * @return {undefined}
     */
    function stickify(node) {
      var children = node.children;
      if (children && children.length) {
        var child;
        var rect = pad(node);
        var current = children.slice();
        /** @type {!Array} */
        var row = [];
        scale(current, rect.dx * rect.dy / node.value);
        /** @type {number} */
        row.area = 0;
        for (; child = current.pop();) {
          row.push(child);
          row.area += child.area;
          if (null != child.z) {
            position(row, child.z ? rect.dx : rect.dy, rect, !current.length);
            /** @type {number} */
            row.length = row.area = 0;
          }
        }
        children.forEach(stickify);
      }
    }
    /**
     * @param {!Object} row
     * @param {number} u
     * @return {?}
     */
    function worst(row, u) {
      var r;
      var s = row.area;
      /** @type {number} */
      var rmax = 0;
      /** @type {number} */
      var rmin = 1 / 0;
      /** @type {number} */
      var i = -1;
      var len = row.length;
      for (; ++i < len;) {
        if (r = row[i].area) {
          if (rmin > r) {
            rmin = r;
          }
          if (r > rmax) {
            rmax = r;
          }
        }
      }
      return s = s * s, u = u * u, s ? Math.max(u * rmax * ratio / s, s / (u * rmin * ratio)) : 1 / 0;
    }
    /**
     * @param {!Object} row
     * @param {number} u
     * @param {!Object} rect
     * @param {string} flush
     * @return {undefined}
     */
    function position(row, u, rect, flush) {
      var o;
      /** @type {number} */
      var i = -1;
      var len = row.length;
      var x = rect.x;
      var y = rect.y;
      var v = u ? round(row.area / u) : 0;
      if (u == rect.dx) {
        if (flush || v > rect.dy) {
          v = rect.dy;
        }
        for (; ++i < len;) {
          o = row[i];
          o.x = x;
          o.y = y;
          o.dy = v;
          x = x + (o.dx = Math.min(rect.x + rect.dx - x, v ? round(o.area / v) : 0));
        }
        /** @type {boolean} */
        o.z = true;
        o.dx += rect.x + rect.dx - x;
        rect.y += v;
        rect.dy -= v;
      } else {
        if (flush || v > rect.dx) {
          v = rect.dx;
        }
        for (; ++i < len;) {
          o = row[i];
          o.x = x;
          o.y = y;
          o.dx = v;
          y = y + (o.dy = Math.min(rect.y + rect.dy - y, v ? round(o.area / v) : 0));
        }
        /** @type {boolean} */
        o.z = false;
        o.dy += rect.y + rect.dy - y;
        rect.x += v;
        rect.dx -= v;
      }
    }
    /**
     * @param {?} d
     * @return {?}
     */
    function treemap(d) {
      var nodes = stickies || hierarchy(d);
      var root = nodes[0];
      return root.x = 0, root.y = 0, root.dx = size[0], root.dy = size[1], stickies && hierarchy.revalue(root), scale([root], root.dx * root.dy / root.value), (stickies ? stickify : squarify)(root), context && (stickies = nodes), nodes;
    }
    var stickies;
    var hierarchy = d3.layout.hierarchy();
    /** @type {function(?): number} */
    var round = Math.round;
    /** @type {!Array} */
    var size = [1, 1];
    /** @type {null} */
    var padding = null;
    /** @type {function(!Object): ?} */
    var pad = d3_layout_cellPadNull;
    /** @type {boolean} */
    var context = false;
    /** @type {string} */
    var mode = "squarify";
    /** @type {number} */
    var ratio = .5 * (1 + Math.sqrt(5));
    return treemap.size = function(newsize) {
      return arguments.length ? (size = newsize, treemap) : size;
    }, treemap.padding = function(x) {
      /**
       * @param {!Object} node
       * @return {?}
       */
      function padFunction(node) {
        var p = x.call(treemap, node, node.depth);
        return null == p ? d3_layout_cellPadNull(node) : d3_layout_cellPad(node, "number" == typeof p ? [p, p, p, p] : p);
      }
      /**
       * @param {!Object} node
       * @return {?}
       */
      function padConstant(node) {
        return d3_layout_cellPad(node, x);
      }
      if (!arguments.length) {
        return padding;
      }
      var number;
      return pad = null == (padding = x) ? d3_layout_cellPadNull : "function" == (number = typeof x) ? padFunction : "number" === number ? (x = [x, x, x, x], padConstant) : padConstant, treemap;
    }, treemap.round = function(x) {
      return arguments.length ? (round = x ? Math.round : Number, treemap) : round != Number;
    }, treemap.sticky = function(method) {
      return arguments.length ? (context = method, stickies = null, treemap) : context;
    }, treemap.ratio = function(x) {
      return arguments.length ? (ratio = x, treemap) : ratio;
    }, treemap.mode = function(_) {
      return arguments.length ? (mode = _ + "", treemap) : mode;
    }, d3_layout_hierarchyRebind(treemap, hierarchy);
  };
  d3.random = {
    normal : function(a, b) {
      /** @type {number} */
      var f = arguments.length;
      return 2 > f && (b = 1), 1 > f && (a = 0), function() {
        var c;
        var d;
        var duration;
        do {
          /** @type {number} */
          c = 2 * Math.random() - 1;
          /** @type {number} */
          d = 2 * Math.random() - 1;
          /** @type {number} */
          duration = c * c + d * d;
        } while (!duration || duration > 1);
        return a + b * c * Math.sqrt(-2 * Math.log(duration) / duration);
      };
    },
    logNormal : function() {
      var randomNormal = d3.random.normal.apply(d3, arguments);
      return function() {
        return Math.exp(randomNormal());
      };
    },
    bates : function(n) {
      var randomIrwinHall = d3.random.irwinHall(n);
      return function() {
        return randomIrwinHall() / n;
      };
    },
    irwinHall : function(n) {
      return function() {
        /** @type {number} */
        var sum = 0;
        /** @type {number} */
        var MAX_INT32 = 0;
        for (; n > MAX_INT32; MAX_INT32++) {
          /** @type {number} */
          sum = sum + Math.random();
        }
        return sum;
      };
    }
  };
  d3.scale = {};
  var defaultOptions = {
    floor : undefined,
    ceil : undefined
  };
  /**
   * @return {?}
   */
  d3.scale.linear = function() {
    return d3_scale_linear([0, 1], [0, 1], interpolate, false);
  };
  var d3_scale_linearFormatSignificant = {
    s : 1,
    g : 1,
    p : 1,
    r : 1,
    e : 1
  };
  /**
   * @return {?}
   */
  d3.scale.log = function() {
    return calendar(d3.scale.linear().domain([0, 1]), 10, true, [1, 10]);
  };
  var valueRed = d3.format(".0e");
  var defaults = {
    floor : function(value) {
      return -Math.ceil(-value);
    },
    ceil : function(value) {
      return -Math.floor(-value);
    }
  };
  /**
   * @return {?}
   */
  d3.scale.pow = function() {
    return financetime(d3.scale.linear(), 1, [0, 1]);
  };
  /**
   * @return {?}
   */
  d3.scale.sqrt = function() {
    return d3.scale.pow().exponent(.5);
  };
  /**
   * @return {?}
   */
  d3.scale.ordinal = function() {
    return d3_scale_ordinal([], {
      t : "range",
      a : [[]]
    });
  };
  /**
   * @return {?}
   */
  d3.scale.category10 = function() {
    return d3.scale.ordinal().range(date);
  };
  /**
   * @return {?}
   */
  d3.scale.category20 = function() {
    return d3.scale.ordinal().range(n);
  };
  /**
   * @return {?}
   */
  d3.scale.category20b = function() {
    return d3.scale.ordinal().range(p);
  };
  /**
   * @return {?}
   */
  d3.scale.category20c = function() {
    return d3.scale.ordinal().range(0);
  };
  /** @type {!Array<?>} */
  var date = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(value);
  /** @type {!Array<?>} */
  var n = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(value);
  /** @type {!Array<?>} */
  var p = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(value);
  /** @type {!Array<?>} */
  var a = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(value);
  /**
   * @return {?}
   */
  d3.scale.quantile = function() {
    return band([], []);
  };
  /**
   * @return {?}
   */
  d3.scale.quantize = function() {
    return scaleBandSeries(0, 1, [0, 1]);
  };
  /**
   * @return {?}
   */
  d3.scale.threshold = function() {
    return make([.5], [0, 1]);
  };
  /**
   * @return {?}
   */
  d3.scale.identity = function() {
    return financeDiscontinuousScale([0, 1]);
  };
  d3.svg = {};
  /**
   * @return {?}
   */
  d3.svg.arc = function() {
    /**
     * @return {?}
     */
    function arc() {
      var r0 = value.apply(this, arguments);
      var r1 = outerRadius.apply(this, arguments);
      var a0 = temp.apply(this, arguments) + u;
      var a1 = k.apply(this, arguments) + u;
      /** @type {number} */
      var da = (a0 > a1 && (da = a0, a0 = a1, a1 = da), a1 - a0);
      /** @type {string} */
      var j = val > da ? "0" : "1";
      /** @type {number} */
      var c0 = Math.cos(a0);
      /** @type {number} */
      var s0 = Math.sin(a0);
      /** @type {number} */
      var c1 = Math.cos(a1);
      /** @type {number} */
      var s1 = Math.sin(a1);
      return da >= svgArcMax ? r0 ? "M0," + r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + -r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + r1 + "M0," + r0 + "A" + r0 + "," + r0 + " 0 1,0 0," + -r0 + "A" + r0 + "," + r0 + " 0 1,0 0," + r0 + "Z" : "M0," + r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + -r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + r1 + "Z" : r0 ? "M" + r1 * c0 + "," + r1 * s0 + "A" + r1 + "," + r1 + " 0 " + j + ",1 " + r1 * c1 + "," + r1 * s1 + "L" + r0 * c1 + "," + r0 * s1 + "A" + r0 + "," + r0 + " 0 " + 
      j + ",0 " + r0 * c0 + "," + r0 * s0 + "Z" : "M" + r1 * c0 + "," + r1 * s0 + "A" + r1 + "," + r1 + " 0 " + j + ",1 " + r1 * c1 + "," + r1 * s1 + "L0,0Z";
    }
    /** @type {function(?): ?} */
    var value = toAttribute;
    /** @type {function(?): ?} */
    var outerRadius = arcOuterRadius;
    /** @type {function(!Object): ?} */
    var temp = startAngle;
    /** @type {function(!Object): ?} */
    var k = j;
    return arc.innerRadius = function(item) {
      return arguments.length ? (value = $(item), arc) : value;
    }, arc.outerRadius = function(item) {
      return arguments.length ? (outerRadius = $(item), arc) : outerRadius;
    }, arc.startAngle = function(_) {
      return arguments.length ? (temp = $(_), arc) : temp;
    }, arc.endAngle = function(_) {
      return arguments.length ? (k = $(_), arc) : k;
    }, arc.centroid = function() {
      /** @type {number} */
      var sinDistR = (value.apply(this, arguments) + outerRadius.apply(this, arguments)) / 2;
      /** @type {number} */
      var rheading = (temp.apply(this, arguments) + k.apply(this, arguments)) / 2 + u;
      return [Math.cos(rheading) * sinDistR, Math.sin(rheading) * sinDistR];
    }, arc;
  };
  /** @type {number} */
  var u = -halfPi;
  /** @type {number} */
  var svgArcMax = tau - epsilon;
  /**
   * @return {?}
   */
  d3.svg.line = function() {
    return run(undefined);
  };
  var parsed_html = d3.map({
    linear : line,
    "linear-closed" : isoDateToStringUTC,
    step : processPath,
    "step-before" : reverse,
    "step-after" : dealWithPath,
    basis : draw,
    "basis-open" : createLine,
    "basis-closed" : flush,
    bundle : drawChart,
    cardinal : declare,
    "cardinal-open" : send,
    "cardinal-closed" : build,
    monotone : graph
  });
  parsed_html.forEach(function(password, options) {
    /** @type {!Object} */
    options.key = password;
    /** @type {boolean} */
    options.closed = /-closed$/.test(password);
  });
  /** @type {!Array} */
  var v3 = [0, 2 / 3, 1 / 3, 0];
  /** @type {!Array} */
  var path = [0, 1 / 3, 2 / 3, 0];
  /** @type {!Array} */
  var height = [0, 1 / 6, 2 / 3, 1 / 6];
  /**
   * @return {?}
   */
  d3.svg.line.radial = function() {
    var result = run(t);
    return result.radius = result.x, delete result.x, result.angle = result.y, delete result.y, result;
  };
  /** @type {function(!Object): ?} */
  reverse.reverse = dealWithPath;
  /** @type {function(!Object): ?} */
  dealWithPath.reverse = reverse;
  /**
   * @return {?}
   */
  d3.svg.area = function() {
    return render(undefined);
  };
  /**
   * @return {?}
   */
  d3.svg.area.radial = function() {
    var area = render(t);
    return area.radius = area.x, delete area.x, area.innerRadius = area.x0, delete area.x0, area.outerRadius = area.x1, delete area.x1, area.angle = area.y, delete area.y, area.startAngle = area.y0, delete area.y0, area.endAngle = area.y1, delete area.y1, area;
  };
  /**
   * @return {?}
   */
  d3.svg.chord = function() {
    /**
     * @param {?} d
     * @param {?} i
     * @return {?}
     */
    function t(d, i) {
      var p = transform(this, value, d, i);
      var result = transform(this, u, d, i);
      return "M" + p.p0 + callback(p.r, p.p1, p.a1 - p.a0) + (log(p, result) ? debug(p.r, p.p1, p.r, p.p0) : debug(p.r, p.p1, result.r, result.p0) + callback(result.r, result.p1, result.a1 - result.a0) + debug(result.r, result.p1, p.r, p.p0)) + "Z";
    }
    /**
     * @param {!Object} f
     * @param {!Function} b
     * @param {?} t
     * @param {?} c
     * @return {?}
     */
    function transform(f, b, t, c) {
      var i = b.call(f, t, c);
      var l = r.call(f, i, c);
      var angle = s.call(f, i, c) + u;
      var a = h.call(f, i, c) + u;
      return {
        r : l,
        a0 : angle,
        a1 : a,
        p0 : [l * Math.cos(angle), l * Math.sin(angle)],
        p1 : [l * Math.cos(a), l * Math.sin(a)]
      };
    }
    /**
     * @param {?} d
     * @param {?} t
     * @return {?}
     */
    function log(d, t) {
      return d.a0 == t.a0 && d.a1 == t.a1;
    }
    /**
     * @param {string} data
     * @param {string} index
     * @param {number} total
     * @return {?}
     */
    function callback(data, index, total) {
      return "A" + data + "," + data + " 0 " + +(total > val) + ",1 " + index;
    }
    /**
     * @param {?} type
     * @param {?} text
     * @param {?} data
     * @param {string} userId
     * @return {?}
     */
    function debug(type, text, data, userId) {
      return "Q 0,0 " + userId;
    }
    /** @type {function(!Object): ?} */
    var value = source;
    /** @type {function(!Event): ?} */
    var u = end;
    /** @type {function(!Object): ?} */
    var r = radius;
    /** @type {function(!Object): ?} */
    var s = startAngle;
    /** @type {function(!Object): ?} */
    var h = j;
    return t.radius = function(name) {
      return arguments.length ? (r = $(name), t) : r;
    }, t.source = function(name) {
      return arguments.length ? (value = $(name), t) : value;
    }, t.target = function(name) {
      return arguments.length ? (u = $(name), t) : u;
    }, t.startAngle = function(_) {
      return arguments.length ? (s = $(_), t) : s;
    }, t.endAngle = function(_) {
      return arguments.length ? (h = $(_), t) : h;
    }, t;
  };
  /**
   * @return {?}
   */
  d3.svg.diagonal = function() {
    /**
     * @param {?} file
     * @param {?} args
     * @return {?}
     */
    function path(file, args) {
      var from = s.call(this, file, args);
      var to = t.call(this, file, args);
      /** @type {number} */
      var languageOffsetY = (from.y + to.y) / 2;
      /** @type {!Array} */
      var points = [from, {
        x : from.x,
        y : languageOffsetY
      }, {
        x : to.x,
        y : languageOffsetY
      }, to];
      return points = points.map(value), "M" + points[0] + "C" + points[1] + " " + points[2] + " " + points[3];
    }
    /** @type {function(!Object): ?} */
    var s = source;
    /** @type {function(!Event): ?} */
    var t = end;
    /** @type {function(!Object): ?} */
    var value = applyPointList;
    return path.source = function(name) {
      return arguments.length ? (s = $(name), path) : s;
    }, path.target = function(name) {
      return arguments.length ? (t = $(name), path) : t;
    }, path.projection = function(x) {
      return arguments.length ? (value = x, path) : value;
    }, path;
  };
  /**
   * @return {?}
   */
  d3.svg.diagonal.radial = function() {
    var diagonal = d3.svg.diagonal();
    /** @type {function(!Object): ?} */
    var projection = applyPointList;
    /** @type {function(string): ?} */
    var projection_ = diagonal.projection;
    return diagonal.projection = function(x) {
      return arguments.length ? projection_(d3_svg_diagonalRadialProjection(projection = x)) : projection;
    }, diagonal;
  };
  /**
   * @return {?}
   */
  d3.svg.symbol = function() {
    /**
     * @param {?} node
     * @param {?} callback
     * @return {?}
     */
    function scale(node, callback) {
      return (items.get(inner.call(this, node, callback)) || data)(container.call(this, node, callback));
    }
    /** @type {function(): ?} */
    var inner = pointShape;
    /** @type {function(): ?} */
    var container = reference;
    return scale.type = function(name) {
      return arguments.length ? (inner = $(name), scale) : inner;
    }, scale.size = function(height) {
      return arguments.length ? (container = $(height), scale) : container;
    }, scale;
  };
  var items = d3.map({
    circle : data,
    cross : function(a) {
      /** @type {number} */
      var outerTickSize = Math.sqrt(a / 5) / 2;
      return "M" + -3 * outerTickSize + "," + -outerTickSize + "H" + -outerTickSize + "V" + -3 * outerTickSize + "H" + outerTickSize + "V" + -outerTickSize + "H" + 3 * outerTickSize + "V" + outerTickSize + "H" + outerTickSize + "V" + 3 * outerTickSize + "H" + -outerTickSize + "V" + outerTickSize + "H" + -3 * outerTickSize + "Z";
    },
    diamond : function(width) {
      /** @type {number} */
      var i = Math.sqrt(width / (2 * xDistance));
      /** @type {number} */
      var x = i * xDistance;
      return "M0," + -i + "L" + x + ",0 0," + i + " " + -x + ",0Z";
    },
    square : function(n) {
      /** @type {number} */
      var x = Math.sqrt(n) / 2;
      return "M" + -x + "," + -x + "L" + x + "," + -x + " " + x + "," + x + " " + -x + "," + x + "Z";
    },
    "triangle-down" : function(val) {
      /** @type {number} */
      var x = Math.sqrt(val / len);
      /** @type {number} */
      var p11a = x * len / 2;
      return "M0," + p11a + "L" + x + "," + -p11a + " " + -x + "," + -p11a + "Z";
    },
    "triangle-up" : function(val) {
      /** @type {number} */
      var x = Math.sqrt(val / len);
      /** @type {number} */
      var Y = x * len / 2;
      return "M0," + -Y + "L" + x + "," + Y + " " + -x + "," + Y + "Z";
    }
  });
  d3.svg.symbolTypes = items.keys();
  var d3_transitionInheritId;
  var searchScope;
  /** @type {number} */
  var len = Math.sqrt(3);
  /** @type {number} */
  var xDistance = Math.tan(30 * factor);
  /** @type {!Array} */
  var obj = [];
  /** @type {number} */
  var Dj = 0;
  /** @type {function(!Object): ?} */
  obj.call = d3_selectionPrototype.call;
  /** @type {function(): ?} */
  obj.empty = d3_selectionPrototype.empty;
  /** @type {function(): ?} */
  obj.node = d3_selectionPrototype.node;
  /** @type {function(): ?} */
  obj.size = d3_selectionPrototype.size;
  /**
   * @param {!Object} name
   * @return {?}
   */
  d3.transition = function(name) {
    return arguments.length ? d3_transitionInheritId ? name.transition() : name : sel.transition();
  };
  /** @type {!Array} */
  d3.transition.prototype = obj;
  /**
   * @param {!Object} key
   * @return {?}
   */
  obj.select = function(key) {
    var j;
    var subnode;
    var node;
    var id = this.id;
    /** @type {!Array} */
    var f = [];
    key = checkData(key);
    /** @type {number} */
    var group = -1;
    var l = this.length;
    for (; ++group < l;) {
      f.push(j = []);
      var targets = this[group];
      /** @type {number} */
      var i = -1;
      var l = targets.length;
      for (; ++i < l;) {
        if ((node = targets[i]) && (subnode = key.call(node, node.__data__, i, group))) {
          if ("__data__" in node) {
            subnode.__data__ = node.__data__;
          }
          d3_transitionNode(subnode, i, id, node.__transition__[id]);
          j.push(subnode);
        } else {
          j.push(null);
        }
      }
    }
    return resolve(f, id);
  };
  /**
   * @param {!Object} selector
   * @return {?}
   */
  obj.selectAll = function(selector) {
    var r;
    var c;
    var node;
    var a;
    var transition;
    var id = this.id;
    /** @type {!Array} */
    var e = [];
    selector = d3_selection_selectorAll(selector);
    /** @type {number} */
    var i = -1;
    var l = this.length;
    for (; ++i < l;) {
      var props = this[i];
      /** @type {number} */
      var index = -1;
      var propsLength = props.length;
      for (; ++index < propsLength;) {
        if (node = props[index]) {
          transition = node.__transition__[id];
          c = selector.call(node, node.__data__, index, i);
          e.push(r = []);
          /** @type {number} */
          var n = -1;
          var max = c.length;
          for (; ++n < max;) {
            if (a = c[n]) {
              d3_transitionNode(a, n, id, transition);
            }
            r.push(a);
          }
        }
      }
    }
    return resolve(e, id);
  };
  /**
   * @param {!Object} fn
   * @return {?}
   */
  obj.filter = function(fn) {
    var a;
    var targets;
    var node;
    /** @type {!Array} */
    var e = [];
    if ("function" != typeof fn) {
      fn = co(fn);
    }
    /** @type {number} */
    var j = 0;
    var length = this.length;
    for (; length > j; j++) {
      e.push(a = []);
      targets = this[j];
      /** @type {number} */
      var i = 0;
      var l = targets.length;
      for (; l > i; i++) {
        if ((node = targets[i]) && fn.call(node, node.__data__, i, j)) {
          a.push(node);
        }
      }
    }
    return resolve(e, this.id);
  };
  /**
   * @param {!Object} a
   * @param {string} b
   * @return {?}
   */
  obj.tween = function(a, b) {
    var id = this.id;
    return arguments.length < 2 ? this.node().__transition__[id].tween.get(a) : emit(this, null == b ? function(node) {
      node.__transition__[id].tween.remove(a);
    } : function(node) {
      node.__transition__[id].tween.set(a, b);
    });
  };
  /**
   * @param {string} name
   * @param {string} key
   * @return {?}
   */
  obj.attr = function(name, key) {
    /**
     * @return {undefined}
     */
    function attrFunction() {
      this.removeAttribute(fullname);
    }
    /**
     * @return {undefined}
     */
    function attrNullNS() {
      this.removeAttributeNS(fullname.space, fullname.local);
    }
    /**
     * @param {string} value
     * @return {?}
     */
    function attrConstant(value) {
      return null == value ? attrFunction : (value = value + "", function() {
        var message;
        var item = this.getAttribute(fullname);
        return item !== value && (message = action(item, value), function(value) {
          this.setAttribute(fullname, message(value));
        });
      });
    }
    /**
     * @param {string} value
     * @return {?}
     */
    function attrConstantNS(value) {
      return null == value ? attrNullNS : (value = value + "", function() {
        var message;
        var name = this.getAttributeNS(fullname.space, fullname.local);
        return name !== value && (message = action(name, value), function(value) {
          this.setAttributeNS(fullname.space, fullname.local, message(value));
        });
      });
    }
    if (arguments.length < 2) {
      for (key in name) {
        this.attr(key, name[key]);
      }
      return this;
    }
    /** @type {function(string, string): ?} */
    var action = "transform" == name ? move : interpolate;
    var fullname = d3.ns.qualify(name);
    return write(this, "attr." + name, key, fullname.local ? attrConstantNS : attrConstant);
  };
  /**
   * @param {string} value
   * @param {!Function} client
   * @return {?}
   */
  obj.attrTween = function(value, client) {
    /**
     * @param {?} a
     * @param {?} i
     * @return {?}
     */
    function remove(a, i) {
      var d = client.call(this, a, i, this.getAttribute(name));
      return d && function(o) {
        this.setAttribute(name, d(o));
      };
    }
    /**
     * @param {?} json
     * @param {?} info
     * @return {?}
     */
    function update(json, info) {
      var obj = client.call(this, json, info, this.getAttributeNS(name.space, name.local));
      return obj && function(s) {
        this.setAttributeNS(name.space, name.local, obj(s));
      };
    }
    var name = d3.ns.qualify(value);
    return this.tween("attr." + value, name.local ? update : remove);
  };
  /**
   * @param {!Object} name
   * @param {string} str
   * @param {string} value
   * @return {?}
   */
  obj.style = function(name, str, value) {
    /**
     * @return {undefined}
     */
    function styleNull() {
      this.style.removeProperty(name);
    }
    /**
     * @param {string} b
     * @return {?}
     */
    function render(b) {
      return null == b ? styleNull : (b = b + "", function() {
        var f;
        var t = root.getComputedStyle(this, null).getPropertyValue(name);
        return t !== b && (f = interpolate(t, b), function(t) {
          this.style.setProperty(name, f(t), value);
        });
      });
    }
    /** @type {number} */
    var _len8 = arguments.length;
    if (3 > _len8) {
      if ("string" != typeof name) {
        if (2 > _len8) {
          /** @type {string} */
          str = "";
        }
        for (value in name) {
          this.style(value, name[value], str);
        }
        return this;
      }
      /** @type {string} */
      value = "";
    }
    return write(this, "style." + name, str, render);
  };
  /**
   * @param {?} name
   * @param {!Function} tween
   * @param {string} priority
   * @return {?}
   */
  obj.styleTween = function(name, tween, priority) {
    /**
     * @param {?} d
     * @param {?} i
     * @return {?}
     */
    function tween(d, i) {
      var f = tween.call(this, d, i, root.getComputedStyle(this, null).getPropertyValue(name));
      return f && function(t) {
        this.style.setProperty(name, f(t), priority);
      };
    }
    return arguments.length < 3 && (priority = ""), this.tween("style." + name, tween);
  };
  /**
   * @param {!Object} key
   * @return {?}
   */
  obj.text = function(key) {
    return write(this, "text", key, output);
  };
  /**
   * @return {?}
   */
  obj.remove = function() {
    return this.each("end.transition", function() {
      var _ref;
      if (this.__transition__.count < 2 && (_ref = this.parentNode)) {
        _ref.removeChild(this);
      }
    });
  };
  /**
   * @param {!Function} value
   * @return {?}
   */
  obj.ease = function(value) {
    var id = this.id;
    return arguments.length < 1 ? this.node().__transition__[id].ease : ("function" != typeof value && (value = d3.ease.apply(d3, arguments)), emit(this, function(node) {
      node.__transition__[id].ease = value;
    }));
  };
  /**
   * @param {string} value
   * @return {?}
   */
  obj.delay = function(value) {
    var id = this.id;
    return arguments.length < 1 ? this.node().__transition__[id].delay : emit(this, "function" == typeof value ? function(node, context, stateVal) {
      /** @type {number} */
      node.__transition__[id].delay = +value.call(node, node.__data__, context, stateVal);
    } : (value = +value, function(node) {
      node.__transition__[id].delay = value;
    }));
  };
  /**
   * @param {string} data
   * @return {?}
   */
  obj.duration = function(data) {
    var id = this.id;
    return arguments.length < 1 ? this.node().__transition__[id].duration : emit(this, "function" == typeof data ? function(node, max, line) {
      /** @type {number} */
      node.__transition__[id].duration = Math.max(1, data.call(node, node.__data__, max, line));
    } : (data = Math.max(1, data), function(node) {
      node.__transition__[id].duration = data;
    }));
  };
  /**
   * @param {!Function} object
   * @param {!Function} callback
   * @return {?}
   */
  obj.each = function(object, callback) {
    var id = this.id;
    if (arguments.length < 2) {
      var possibleSearchScope = searchScope;
      var inheritId = d3_transitionInheritId;
      d3_transitionInheritId = id;
      emit(this, function(data, trim, array) {
        searchScope = data.__transition__[id];
        object.call(data, data.__data__, trim, array);
      });
      searchScope = possibleSearchScope;
      d3_transitionInheritId = inheritId;
    } else {
      emit(this, function(node) {
        var data = node.__transition__[id];
        (data.event || (data.event = d3.dispatch("start", "end"))).on(object, callback);
      });
    }
    return this;
  };
  /**
   * @return {?}
   */
  obj.transition = function() {
    var a;
    var n;
    var node;
    var transition;
    var id = this.id;
    /** @type {number} */
    var kibana = ++Dj;
    /** @type {!Array} */
    var e = [];
    /** @type {number} */
    var p = 0;
    var len = this.length;
    for (; len > p; p++) {
      e.push(a = []);
      n = this[p];
      /** @type {number} */
      var i = 0;
      var r = n.length;
      for (; r > i; i++) {
        if (node = n[i]) {
          /** @type {!Object} */
          transition = Object.create(node.__transition__[id]);
          transition.delay += transition.duration;
          d3_transitionNode(node, i, kibana, transition);
        }
        a.push(node);
      }
    }
    return resolve(e, kibana);
  };
  /**
   * @return {?}
   */
  d3.svg.axis = function() {
    /**
     * @param {!Object} name
     * @return {undefined}
     */
    function axis(name) {
      name.each(function() {
        var text;
        var mareyContainer = d3.select(this);
        var scale0 = this.__chart__ || scale;
        var x = this.__chart__ = scale.copy();
        var app = null == tickFormat ? x.ticks ? x.ticks.apply(x, args) : x.domain() : tickFormat;
        var name = null == step ? x.tickFormat ? x.tickFormat.apply(x, args) : undefined : step;
        var o = mareyContainer.selectAll(".tick").data(app, x);
        var tickEnter = o.enter().insert("g", ".domain").attr("class", "tick").style("opacity", epsilon);
        var isInContainer = d3.transition(o.exit()).style("opacity", epsilon).remove();
        var tickUpdate = d3.transition(o.order()).style("opacity", 1);
        var range = d3_scaleRange(x);
        var path = mareyContainer.selectAll(".domain").data([0]);
        var sinePath = (path.enter().append("path").attr("class", "domain"), d3.transition(path));
        tickEnter.append("line");
        tickEnter.append("text");
        var chart = tickEnter.select("line");
        var context = tickUpdate.select("line");
        var label = o.select("text").text(name);
        var t = tickEnter.select("text");
        var content = tickUpdate.select("text");
        switch(orient) {
          case "bottom":
            /** @type {function(!Object, ?): undefined} */
            text = animStackDestroy;
            chart.attr("y2", height);
            t.attr("y", Math.max(height, 0) + offset);
            context.attr("x2", 0).attr("y2", height);
            content.attr("x", 0).attr("y", Math.max(height, 0) + offset);
            label.attr("dy", ".71em").style("text-anchor", "middle");
            sinePath.attr("d", "M" + range[0] + "," + tickSizeOuter + "V0H" + range[1] + "V" + tickSizeOuter);
            break;
          case "top":
            /** @type {function(!Object, ?): undefined} */
            text = animStackDestroy;
            chart.attr("y2", -height);
            t.attr("y", -(Math.max(height, 0) + offset));
            context.attr("x2", 0).attr("y2", -height);
            content.attr("x", 0).attr("y", -(Math.max(height, 0) + offset));
            label.attr("dy", "0em").style("text-anchor", "middle");
            sinePath.attr("d", "M" + range[0] + "," + -tickSizeOuter + "V0H" + range[1] + "V" + -tickSizeOuter);
            break;
          case "left":
            /** @type {function(!Object, ?): undefined} */
            text = expandtick;
            chart.attr("x2", -height);
            t.attr("x", -(Math.max(height, 0) + offset));
            context.attr("x2", -height).attr("y2", 0);
            content.attr("x", -(Math.max(height, 0) + offset)).attr("y", 0);
            label.attr("dy", ".32em").style("text-anchor", "end");
            sinePath.attr("d", "M" + -tickSizeOuter + "," + range[0] + "H0V" + range[1] + "H" + -tickSizeOuter);
            break;
          case "right":
            /** @type {function(!Object, ?): undefined} */
            text = expandtick;
            chart.attr("x2", height);
            t.attr("x", Math.max(height, 0) + offset);
            context.attr("x2", height).attr("y2", 0);
            content.attr("x", Math.max(height, 0) + offset).attr("y", 0);
            label.attr("dy", ".32em").style("text-anchor", "start");
            sinePath.attr("d", "M" + tickSizeOuter + "," + range[0] + "H0V" + range[1] + "H" + tickSizeOuter);
        }
        if (x.rangeBand) {
          var scale1 = x;
          /** @type {number} */
          var dx = scale1.rangeBand() / 2;
          /** @type {function(?): ?} */
          scale0 = x = function(d) {
            return scale1(d) + dx;
          };
        } else {
          if (scale0.rangeBand) {
            scale0 = x;
          } else {
            isInContainer.call(text, x);
          }
        }
        tickEnter.call(text, scale0);
        tickUpdate.call(text, x);
      });
    }
    var step;
    var scale = d3.scale.linear();
    /** @type {string} */
    var orient = d3_svg_axisDefaultOrient;
    /** @type {number} */
    var height = 6;
    /** @type {number} */
    var tickSizeOuter = 6;
    /** @type {number} */
    var offset = 3;
    /** @type {!Array} */
    var args = [10];
    /** @type {null} */
    var tickFormat = null;
    return axis.scale = function(_) {
      return arguments.length ? (scale = _, axis) : scale;
    }, axis.orient = function(x) {
      return arguments.length ? (orient = x in d3_svg_axisOrients ? x + "" : d3_svg_axisDefaultOrient, axis) : orient;
    }, axis.ticks = function() {
      return arguments.length ? (args = arguments, axis) : args;
    }, axis.tickValues = function(_) {
      return arguments.length ? (tickFormat = _, axis) : tickFormat;
    }, axis.tickFormat = function(_) {
      return arguments.length ? (step = _, axis) : step;
    }, axis.tickSize = function(_) {
      /** @type {number} */
      var i = arguments.length;
      return i ? (height = +_, tickSizeOuter = +arguments[i - 1], axis) : height;
    }, axis.innerTickSize = function(value) {
      return arguments.length ? (height = +value, axis) : height;
    }, axis.outerTickSize = function(_) {
      return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
    }, axis.tickPadding = function(_) {
      return arguments.length ? (offset = +_, axis) : offset;
    }, axis.tickSubdivide = function() {
      return arguments.length && axis;
    }, axis;
  };
  /** @type {string} */
  var d3_svg_axisDefaultOrient = "bottom";
  var d3_svg_axisOrients = {
    top : 1,
    right : 1,
    bottom : 1,
    left : 1
  };
  /**
   * @return {?}
   */
  d3.svg.brush = function() {
    /**
     * @param {!Object} label
     * @return {undefined}
     */
    function brush(label) {
      label.each(function() {
        var g = d3.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", brushstart).on("touchstart.brush", brushstart);
        var path = g.selectAll(".background").data([0]);
        path.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair");
        g.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
        var rect = g.selectAll(".resize").data(i, undefined);
        rect.exit().remove();
        rect.enter().append("g").attr("class", function(a) {
          return "resize " + a;
        }).style("cursor", function(d) {
          return d3_svg_brushCursor[d];
        }).append("rect").attr("x", function(pathToDestinationFile) {
          return /[ew]$/.test(pathToDestinationFile) ? -3 : null;
        }).attr("y", function(pathToDestinationFile) {
          return /^[ns]/.test(pathToDestinationFile) ? -3 : null;
        }).attr("width", 6).attr("height", 6).style("visibility", "hidden");
        rect.style("display", brush.empty() ? "none" : null);
        var range;
        var gUpdate = d3.transition(g);
        var text = d3.transition(path);
        if (x) {
          range = d3_scaleRange(x);
          text.attr("x", range[0]).attr("width", range[1] - range[0]);
          redrawX(gUpdate);
        }
        if (y) {
          range = d3_scaleRange(y);
          text.attr("y", range[0]).attr("height", range[1] - range[0]);
          redrawY(gUpdate);
        }
        redraw(gUpdate);
      });
    }
    /**
     * @param {!Object} g
     * @return {undefined}
     */
    function redraw(g) {
      g.selectAll(".resize").attr("transform", function(pathToDestinationFile) {
        return "translate(" + result[+/e$/.test(pathToDestinationFile)] + "," + data[+/^s/.test(pathToDestinationFile)] + ")";
      });
    }
    /**
     * @param {!Object} g
     * @return {undefined}
     */
    function redrawX(g) {
      g.select(".extent").attr("x", result[0]);
      g.selectAll(".extent,.n>rect,.s>rect").attr("width", result[1] - result[0]);
    }
    /**
     * @param {!Object} g
     * @return {undefined}
     */
    function redrawY(g) {
      g.select(".extent").attr("y", data[0]);
      g.selectAll(".extent,.e>rect,.w>rect").attr("height", data[1] - data[0]);
    }
    /**
     * @return {undefined}
     */
    function brushstart() {
      /**
       * @return {undefined}
       */
      function keydown() {
        if (32 == d3.event.keyCode) {
          if (!dragging) {
            /** @type {null} */
            parent = null;
            out[0] -= result[1];
            out[1] -= data[1];
            /** @type {number} */
            dragging = 2;
          }
          done();
        }
      }
      /**
       * @return {undefined}
       */
      function keyup() {
        if (32 == d3.event.keyCode && 2 == dragging) {
          out[0] += result[1];
          out[1] += data[1];
          /** @type {number} */
          dragging = 0;
          done();
        }
      }
      /**
       * @return {undefined}
       */
      function brushmove() {
        var point = d3.mouse(target);
        /** @type {boolean} */
        var e = false;
        if (newPoint) {
          point[0] += newPoint[0];
          point[1] += newPoint[1];
        }
        if (!dragging) {
          if (d3.event.altKey) {
            if (!parent) {
              /** @type {!Array} */
              parent = [(result[0] + result[1]) / 2, (data[0] + data[1]) / 2];
            }
            out[0] = result[+(point[0] < parent[0])];
            out[1] = data[+(point[1] < parent[1])];
          } else {
            /** @type {null} */
            parent = null;
          }
        }
        if (resizingX && move1(point, x, 0)) {
          redrawX(g);
          /** @type {boolean} */
          e = true;
        }
        if (resizingY && move1(point, y, 1)) {
          redrawY(g);
          /** @type {boolean} */
          e = true;
        }
        if (e) {
          redraw(g);
          event_({
            type : "brush",
            mode : dragging ? "move" : "resize"
          });
        }
      }
      /**
       * @param {!Object} point
       * @param {!Object} scale
       * @param {string} i
       * @return {?}
       */
      function move1(point, scale, i) {
        var value;
        var label;
        var range = d3_scaleRange(scale);
        var t = range[0];
        var n = range[1];
        var s = out[i];
        var args = i ? data : result;
        /** @type {number} */
        var text = args[1] - args[0];
        return dragging && (t = t - s, n = n - (text + s)), value = (i ? yClamp : xClamp) ? Math.max(t, Math.min(n, point[i])) : point[i], dragging ? label = (value = value + s) + text : (parent && (s = Math.max(t, Math.min(n, 2 * parent[i] - value))), value > s ? (label = value, value = s) : label = s), args[0] != value || args[1] != label ? (i ? yExtentDomain = null : xExtentDomain = null, args[0] = value, args[1] = label, true) : void 0;
      }
      /**
       * @return {undefined}
       */
      function brushend() {
        brushmove();
        g.style("pointer-events", "all").selectAll(".resize").style("display", brush.empty() ? "none" : null);
        d3.select("body").style("cursor", null);
        w.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null);
        dragRestore();
        event_({
          type : "brushend"
        });
      }
      var parent;
      var newPoint;
      var target = this;
      var self = d3.select(d3.event.target);
      var event_ = event.of(target, arguments);
      var g = d3.select(target);
      var instanceFillValue = self.datum();
      var resizingX = !/^(n|s)$/.test(instanceFillValue) && x;
      var resizingY = !/^(e|w)$/.test(instanceFillValue) && y;
      var dragging = self.classed("extent");
      var dragRestore = d3_event_dragSuppress();
      var out = d3.mouse(target);
      var w = d3.select(root).on("keydown.brush", keydown).on("keyup.brush", keyup);
      if (d3.event.changedTouches ? w.on("touchmove.brush", brushmove).on("touchend.brush", brushend) : w.on("mousemove.brush", brushmove).on("mouseup.brush", brushend), g.interrupt().selectAll("*").interrupt(), dragging) {
        /** @type {number} */
        out[0] = result[0] - out[0];
        /** @type {number} */
        out[1] = data[0] - out[1];
      } else {
        if (instanceFillValue) {
          /** @type {number} */
          var i = +/w$/.test(instanceFillValue);
          /** @type {number} */
          var k = +/^n/.test(instanceFillValue);
          /** @type {!Array} */
          newPoint = [result[1 - i] - out[0], data[1 - k] - out[1]];
          out[0] = result[i];
          out[1] = data[k];
        } else {
          if (d3.event.altKey) {
            parent = out.slice();
          }
        }
      }
      g.style("pointer-events", "none").selectAll(".resize").style("display", null);
      d3.select("body").style("cursor", self.style("cursor"));
      event_({
        type : "brushstart"
      });
      brushmove();
    }
    var xExtentDomain;
    var yExtentDomain;
    var event = d3_eventDispatch(brush, "brushstart", "brush", "brushend");
    /** @type {null} */
    var x = null;
    /** @type {null} */
    var y = null;
    /** @type {!Array} */
    var result = [0, 0];
    /** @type {!Array} */
    var data = [0, 0];
    /** @type {boolean} */
    var xClamp = true;
    /** @type {boolean} */
    var yClamp = true;
    var i = nct_result[0];
    return brush.event = function(events) {
      events.each(function() {
        var event_ = event.of(this, arguments);
        var extent1 = {
          x : result,
          y : data,
          i : xExtentDomain,
          j : yExtentDomain
        };
        var extent0 = this.__chart__ || extent1;
        this.__chart__ = extent1;
        if (d3_transitionInheritId) {
          d3.select(this).transition().each("start.brush", function() {
            xExtentDomain = extent0.i;
            yExtentDomain = extent0.j;
            result = extent0.x;
            data = extent0.y;
            event_({
              type : "brushstart"
            });
          }).tween("brush:brush", function() {
            var xi = get(result, extent1.x);
            var yi = get(data, extent1.y);
            return xExtentDomain = yExtentDomain = null, function(t) {
              result = extent1.x = xi(t);
              data = extent1.y = yi(t);
              event_({
                type : "brush",
                mode : "resize"
              });
            };
          }).each("end.brush", function() {
            xExtentDomain = extent1.i;
            yExtentDomain = extent1.j;
            event_({
              type : "brush",
              mode : "resize"
            });
            event_({
              type : "brushend"
            });
          });
        } else {
          event_({
            type : "brushstart"
          });
          event_({
            type : "brush",
            mode : "resize"
          });
          event_({
            type : "brushend"
          });
        }
      });
    }, brush.x = function(name) {
      return arguments.length ? (x = name, i = nct_result[!x << 1 | !y], brush) : x;
    }, brush.y = function(name) {
      return arguments.length ? (y = name, i = nct_result[!x << 1 | !y], brush) : y;
    }, brush.clamp = function(alwaysAllowEmpty) {
      return arguments.length ? (x && y ? (xClamp = !!alwaysAllowEmpty[0], yClamp = !!alwaysAllowEmpty[1]) : x ? xClamp = !!alwaysAllowEmpty : y && (yClamp = !!alwaysAllowEmpty), brush) : x && y ? [xClamp, yClamp] : x ? xClamp : y ? yClamp : null;
    }, brush.extent = function(e) {
      var r;
      var d;
      var i;
      var p;
      var n;
      return arguments.length ? (x && (r = e[0], d = e[1], y && (r = r[0], d = d[0]), xExtentDomain = [r, d], x.invert && (r = x(r), d = x(d)), r > d && (n = r, r = d, d = n), (r != result[0] || d != result[1]) && (result = [r, d])), y && (i = e[0], p = e[1], x && (i = i[1], p = p[1]), yExtentDomain = [i, p], y.invert && (i = y(i), p = y(p)), i > p && (n = i, i = p, p = n), (i != data[0] || p != data[1]) && (data = [i, p])), brush) : (x && (xExtentDomain ? (r = xExtentDomain[0], d = xExtentDomain[1]) : 
      (r = result[0], d = result[1], x.invert && (r = x.invert(r), d = x.invert(d)), r > d && (n = r, r = d, d = n))), y && (yExtentDomain ? (i = yExtentDomain[0], p = yExtentDomain[1]) : (i = data[0], p = data[1], y.invert && (i = y.invert(i), p = y.invert(p)), i > p && (n = i, i = p, p = n))), x && y ? [[r, i], [d, p]] : x ? [r, d] : y && [i, p]);
    }, brush.clear = function() {
      return brush.empty() || (result = [0, 0], data = [0, 0], xExtentDomain = yExtentDomain = null), brush;
    }, brush.empty = function() {
      return !!x && result[0] == result[1] || !!y && data[0] == data[1];
    }, d3.rebind(brush, event, "on");
  };
  var d3_svg_brushCursor = {
    n : "ns-resize",
    e : "ew-resize",
    s : "ns-resize",
    w : "ew-resize",
    nw : "nwse-resize",
    ne : "nesw-resize",
    se : "nwse-resize",
    sw : "nesw-resize"
  };
  /** @type {!Array} */
  var nct_result = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []];
  var d3_time_format = d3_time.format = d3_locale_enUS.timeFormat;
  var d3_time_formatUtc = d3_time_format.utc;
  var d3_time_formatIso = d3_time_formatUtc("%Y-%m-%dT%H:%M:%S.%LZ");
  d3_time_format.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? d3_time_formatIsoNative : d3_time_formatIso;
  /**
   * @param {string} x
   * @return {?}
   */
  d3_time_formatIsoNative.parse = function(x) {
    /** @type {!Date} */
    var n = new Date(x);
    return isNaN(n) ? null : n;
  };
  d3_time_formatIsoNative.toString = d3_time_formatIso.toString;
  d3_time.second = d3_time_interval(function(resumeTime) {
    return new d3_date(1e3 * Math.floor(resumeTime / 1e3));
  }, function(factory, b) {
    factory.setTime(factory.getTime() + 1e3 * Math.floor(b));
  }, function(dtmDate) {
    return dtmDate.getSeconds();
  });
  d3_time.seconds = d3_time.second.range;
  d3_time.seconds.utc = d3_time.second.utc.range;
  d3_time.minute = d3_time_interval(function(resumeTime) {
    return new d3_date(6e4 * Math.floor(resumeTime / 6e4));
  }, function(factory, b) {
    factory.setTime(factory.getTime() + 6e4 * Math.floor(b));
  }, function(from) {
    return from.getMinutes();
  });
  d3_time.minutes = d3_time.minute.range;
  d3_time.minutes.utc = d3_time.minute.utc.range;
  d3_time.hour = d3_time_interval(function(freeWidth) {
    /** @type {number} */
    var padBorder = freeWidth.getTimezoneOffset() / 60;
    return new d3_date(36e5 * (Math.floor(freeWidth / 36e5 - padBorder) + padBorder));
  }, function(factory, b) {
    factory.setTime(factory.getTime() + 36e5 * Math.floor(b));
  }, function(ca) {
    return ca.getHours();
  });
  d3_time.hours = d3_time.hour.range;
  d3_time.hours.utc = d3_time.hour.utc.range;
  d3_time.month = d3_time_interval(function(date) {
    return date = d3_time.day(date), date.setDate(1), date;
  }, function(from, range) {
    from.setMonth(from.getMonth() + range);
  }, function(birthDate) {
    return birthDate.getMonth();
  });
  d3_time.months = d3_time.month.range;
  d3_time.months.utc = d3_time.month.utc.range;
  /** @type {!Array} */
  var d3_time_scaleSteps = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6];
  /** @type {!Array} */
  var d3_time_scaleLocalMethods = [[d3_time.second, 1], [d3_time.second, 5], [d3_time.second, 15], [d3_time.second, 30], [d3_time.minute, 1], [d3_time.minute, 5], [d3_time.minute, 15], [d3_time.minute, 30], [d3_time.hour, 1], [d3_time.hour, 3], [d3_time.hour, 6], [d3_time.hour, 12], [d3_time.day, 1], [d3_time.day, 2], [d3_time.week, 1], [d3_time.month, 1], [d3_time.month, 3], [d3_time.year, 1]];
  var d3_time_scaleLocalFormat = d3_time_format.multi([[".%L", function(from) {
    return from.getMilliseconds();
  }], [":%S", function(dtmDate) {
    return dtmDate.getSeconds();
  }], ["%I:%M", function(from) {
    return from.getMinutes();
  }], ["%I %p", function(ca) {
    return ca.getHours();
  }], ["%a %d", function(_time) {
    return _time.getDay() && 1 != _time.getDate();
  }], ["%b %d", function(orderDate) {
    return 1 != orderDate.getDate();
  }], ["%B", function(birthDate) {
    return birthDate.getMonth();
  }], ["%Y", d3_true]]);
  var d3_time_scaleMilliseconds = {
    range : function(a, b, step) {
      return d3.range(Math.ceil(a / step) * step, +b, step).map(d3_time_scaleDate);
    },
    floor : undefined,
    ceil : undefined
  };
  d3_time_scaleLocalMethods.year = d3_time.year;
  /**
   * @return {?}
   */
  d3_time.scale = function() {
    return d3_time_scale(d3.scale.linear(), d3_time_scaleLocalMethods, d3_time_scaleLocalFormat);
  };
  /** @type {!Array<?>} */
  var methods = d3_time_scaleLocalMethods.map(function(d3_time) {
    return [d3_time[0].utc, d3_time[1]];
  });
  var d3_time_scaleUTCFormat = d3_time_formatUtc.multi([[".%L", function(dt) {
    return dt.getUTCMilliseconds();
  }], [":%S", function(context) {
    return context.getUTCSeconds();
  }], ["%I:%M", function(context) {
    return context.getUTCMinutes();
  }], ["%I %p", function(context) {
    return context.getUTCHours();
  }], ["%a %d", function(testDate) {
    return testDate.getUTCDay() && 1 != testDate.getUTCDate();
  }], ["%b %d", function(origdate) {
    return 1 != origdate.getUTCDate();
  }], ["%B", function(origdate) {
    return origdate.getUTCMonth();
  }], ["%Y", d3_true]]);
  methods.year = d3_time.year.utc;
  /**
   * @return {?}
   */
  d3_time.scale.utc = function() {
    return d3_time_scale(d3.scale.linear(), methods, d3_time_scaleUTCFormat);
  };
  d3.text = d3_xhrType(function(res) {
    return res.responseText;
  });
  /**
   * @param {?} url
   * @param {!Object} callback
   * @return {?}
   */
  d3.json = function(url, callback) {
    return d3_xhr(url, "application/json", response, callback);
  };
  /**
   * @param {?} url
   * @param {!Object} callback
   * @return {?}
   */
  d3.html = function(url, callback) {
    return d3_xhr(url, "text/html", d3_html, callback);
  };
  d3.xml = d3_xhrType(function(xhr) {
    return xhr.responseXML;
  });
  if ("function" == typeof define && define.amd) {
    define(d3);
  } else {
    if ("object" == typeof module && module.exports) {
      module.exports = d3;
    } else {
      this.d3 = d3;
    }
  }
}(), function() {
  /**
   * @param {string} value
   * @param {?} array
   * @param {number} fromIndex
   * @return {?}
   */
  function baseIndexOf(value, array, fromIndex) {
    /** @type {number} */
    var name = (fromIndex || 0) - 1;
    var prevClass = value ? value.length : 0;
    for (; ++name < prevClass;) {
      if (value[name] === array) {
        return name;
      }
    }
    return -1;
  }
  /**
   * @param {!Object} cache
   * @param {string} value
   * @return {?}
   */
  function cacheIndexOf(cache, value) {
    /** @type {string} */
    var type = typeof value;
    if (cache = cache.cache, "boolean" == type || null == value) {
      return cache[value] ? 0 : -1;
    }
    if ("number" != type && "string" != type) {
      /** @type {string} */
      type = "object";
    }
    var key = "number" == type ? value : keyPrefix + value;
    return cache = (cache = cache[type]) && cache[key], "object" == type ? cache && baseIndexOf(cache, value) > -1 ? 0 : -1 : cache ? 0 : -1;
  }
  /**
   * @param {!Object} value
   * @return {undefined}
   */
  function cachePush(value) {
    var c = this.cache;
    /** @type {string} */
    var type = typeof value;
    if ("boolean" == type || null == value) {
      /** @type {boolean} */
      c[value] = true;
    } else {
      if ("number" != type && "string" != type) {
        /** @type {string} */
        type = "object";
      }
      var date = "number" == type ? value : keyPrefix + value;
      var type_plans = c[type] || (c[type] = {});
      if ("object" == type) {
        (type_plans[date] || (type_plans[date] = [])).push(value);
      } else {
        /** @type {boolean} */
        type_plans[date] = true;
      }
    }
  }
  /**
   * @param {?} string
   * @return {?}
   */
  function charAtCallback(string) {
    return string.charCodeAt(0);
  }
  /**
   * @param {!Object} a
   * @param {!Object} b
   * @return {?}
   */
  function fn(a, b) {
    var x = a.criteria;
    var wires = b.criteria;
    /** @type {number} */
    var i = -1;
    var l = x.length;
    for (; ++i < l;) {
      var h = x[i];
      var w = wires[i];
      if (h !== w) {
        if (h > w || "undefined" == typeof h) {
          return 1;
        }
        if (w > h || "undefined" == typeof w) {
          return -1;
        }
      }
    }
    return a.index - b.index;
  }
  /**
   * @param {!Object} array
   * @return {?}
   */
  function createCache(array) {
    /** @type {number} */
    var i = -1;
    var length = array.length;
    var value = array[0];
    var key = array[length / 2 | 0];
    var val = array[length - 1];
    if (value && "object" == typeof value && key && "object" == typeof key && val && "object" == typeof val) {
      return false;
    }
    var cache = getObject();
    /** @type {boolean} */
    cache["false"] = cache["null"] = cache["true"] = cache.undefined = false;
    var result = getObject();
    /** @type {!Object} */
    result.array = array;
    result.cache = cache;
    /** @type {function(!Object): undefined} */
    result.push = cachePush;
    for (; ++i < length;) {
      result.push(array[i]);
    }
    return result;
  }
  /**
   * @param {?} wikiId
   * @return {?}
   */
  function val(wikiId) {
    return "\\" + subwikiListsCache[wikiId];
  }
  /**
   * @return {?}
   */
  function getArray() {
    return args.pop() || [];
  }
  /**
   * @return {?}
   */
  function getObject() {
    return content.pop() || {
      array : null,
      cache : null,
      criteria : null,
      "false" : false,
      index : 0,
      "null" : false,
      number : null,
      object : null,
      push : null,
      string : null,
      "true" : false,
      undefined : false,
      value : null
    };
  }
  /**
   * @param {string} value
   * @return {?}
   */
  function isNode(value) {
    return "function" != typeof value.toString && "string" == typeof(value + "");
  }
  /**
   * @param {!Array} array
   * @return {undefined}
   */
  function releaseArray(array) {
    /** @type {number} */
    array.length = 0;
    if (args.length < len) {
      args.push(array);
    }
  }
  /**
   * @param {!Object} object
   * @return {undefined}
   */
  function releaseObject(object) {
    var cache = object.cache;
    if (cache) {
      releaseObject(cache);
    }
    /** @type {null} */
    object.array = object.cache = object.criteria = object.object = object.number = object.string = object.value = null;
    if (content.length < len) {
      content.push(object);
    }
  }
  /**
   * @param {!Function} array
   * @param {number} index
   * @param {string} value
   * @return {?}
   */
  function slice(array, index, value) {
    if (!index) {
      /** @type {number} */
      index = 0;
    }
    if ("undefined" == typeof value) {
      value = array ? array.length : 0;
    }
    /** @type {number} */
    var i = -1;
    /** @type {number} */
    var length = value - index || 0;
    /** @type {!Array} */
    var a = Array(0 > length ? 0 : length);
    for (; ++i < length;) {
      a[i] = array[index + i];
    }
    return a;
  }
  /**
   * @param {!Object} context
   * @return {?}
   */
  function runInContext(context) {
    /**
     * @param {!Object} value
     * @return {?}
     */
    function lodash(value) {
      return value && "object" == typeof value && !isArray(value) && hasOwnProperty.call(value, "__wrapped__") ? value : new lodashWrapper(value);
    }
    /**
     * @param {?} name
     * @param {!Object} value
     * @return {undefined}
     */
    function lodashWrapper(name, value) {
      /** @type {boolean} */
      this.__chain__ = !!value;
      this.__wrapped__ = name;
    }
    /**
     * @param {!Array} el
     * @return {?}
     */
    function compare(el) {
      /**
       * @return {?}
       */
      function value() {
        if (a) {
          var args = slice(a);
          push.apply(args, arguments);
        }
        if (this instanceof value) {
          var obj = createObject(func.prototype);
          var result = func.apply(obj, args || arguments);
          return isObject(result) ? result : obj;
        }
        return func.apply(img, args || arguments);
      }
      var func = el[0];
      var a = el[2];
      var img = el[4];
      return test(value, el), value;
    }
    /**
     * @param {!Object} value
     * @param {?} isDeep
     * @param {?} customizer
     * @param {!Array} stackA
     * @param {!Array} stackB
     * @return {?}
     */
    function baseClone(value, isDeep, customizer, stackA, stackB) {
      if (customizer) {
        var result = customizer(value);
        if ("undefined" != typeof result) {
          return result;
        }
      }
      var isObj = isObject(value);
      if (!isObj) {
        return value;
      }
      var className = toString.call(value);
      if (!cloneableClasses[className] || !support.nodeClass && isNode(value)) {
        return value;
      }
      var ctor = ctorByClass[className];
      switch(className) {
        case boolClass:
        case dateClass:
          return new ctor(+value);
        case numberClass:
        case stringClass:
          return new ctor(value);
        case regexpClass:
          return result = ctor(value.source, temporaryStyles.exec(value)), result.lastIndex = value.lastIndex, result;
      }
      var isArr = isArray(value);
      if (isDeep) {
        /** @type {boolean} */
        var initedStack = !stackA;
        if (!stackA) {
          stackA = getArray();
        }
        if (!stackB) {
          stackB = getArray();
        }
        var length = stackA.length;
        for (; length--;) {
          if (stackA[length] == value) {
            return stackB[length];
          }
        }
        result = isArr ? ctor(value.length) : {};
      } else {
        result = isArr ? slice(value) : assign({}, value);
      }
      return isArr && (hasOwnProperty.call(value, "index") && (result.index = value.index), hasOwnProperty.call(value, "input") && (result.input = value.input)), isDeep ? (stackA.push(value), stackB.push(result), (isArr ? each : forOwn)(value, function(value, key) {
        result[key] = baseClone(value, isDeep, customizer, stackA, stackB);
      }), initedStack && (releaseArray(stackA), releaseArray(stackB)), result) : result;
    }
    /**
     * @param {!Object} prototype
     * @return {?}
     */
    function createObject(prototype) {
      return isObject(prototype) ? nativeCreate(prototype) : {};
    }
    /**
     * @param {?} func
     * @param {!Array} thisArg
     * @param {number} argCount
     * @return {?}
     */
    function baseCreateCallback(func, thisArg, argCount) {
      if ("function" != typeof func) {
        return identity;
      }
      if ("undefined" == typeof thisArg || !("prototype" in func)) {
        return func;
      }
      var index = func.__bindData__;
      if ("undefined" == typeof index && (support.funcNames && (index = !func.name), index = index || !support.funcDecomp, !index)) {
        var source = funcToString$1.call(func);
        if (!support.funcNames) {
          /** @type {boolean} */
          index = !isWidgetCssFileReg.test(source);
        }
        if (!index) {
          /** @type {boolean} */
          index = targetArena.test(source);
          test(func, index);
        }
      }
      if (index === false || index !== true && 1 & index[1]) {
        return func;
      }
      switch(argCount) {
        case 1:
          return function(selector) {
            return func.call(thisArg, selector);
          };
        case 2:
          return function(selector, value) {
            return func.call(thisArg, selector, value);
          };
        case 3:
          return function(selector, value, sf) {
            return func.call(thisArg, selector, value, sf);
          };
        case 4:
          return function(selector, value, sf, filename) {
            return func.call(thisArg, selector, value, sf, filename);
          };
      }
      return bind(func, thisArg);
    }
    /**
     * @param {!Array} a
     * @return {?}
     */
    function parse(a) {
      /**
       * @return {?}
       */
      function value() {
        var a = onlyvalue ? item : this;
        if (list) {
          var args = slice(list);
          push.apply(args, arguments);
        }
        if ((ret || is) && (args || (args = slice(arguments)), ret && push.apply(args, ret), is && args.length < i)) {
          return x = x | 16, parse([c, hasExternalScreen ? x : -4 & x, args, null, item, i]);
        }
        if (args || (args = arguments), opts && (c = a[key]), this instanceof value) {
          a = createObject(c.prototype);
          var value = c.apply(a, args);
          return isObject(value) ? value : a;
        }
        return c.apply(a, args);
      }
      var c = a[0];
      var x = a[1];
      var list = a[2];
      var ret = a[3];
      var item = a[4];
      var i = a[5];
      /** @type {number} */
      var onlyvalue = 1 & x;
      /** @type {number} */
      var opts = 2 & x;
      /** @type {number} */
      var is = 4 & x;
      /** @type {number} */
      var hasExternalScreen = 8 & x;
      var key = c;
      return test(value, a), value;
    }
    /**
     * @param {number} array
     * @param {?} values
     * @return {?}
     */
    function callback(array, values) {
      /** @type {number} */
      var i = -1;
      var indexOf = getIndexOf();
      var length = array ? array.length : 0;
      /** @type {boolean} */
      var n = length >= largeArraySize && indexOf === baseIndexOf;
      /** @type {!Array} */
      var r = [];
      if (n) {
        var cache = createCache(values);
        if (cache) {
          /** @type {function(!Object, string): ?} */
          indexOf = cacheIndexOf;
          values = cache;
        } else {
          /** @type {boolean} */
          n = false;
        }
      }
      for (; ++i < length;) {
        var id = array[i];
        if (indexOf(values, id) < 0) {
          r.push(id);
        }
      }
      return n && releaseObject(values), r;
    }
    /**
     * @param {!Object} obj
     * @param {string} a
     * @param {boolean} ctx
     * @param {number} thisObject
     * @return {?}
     */
    function apply(obj, a, ctx, thisObject) {
      /** @type {number} */
      var i = (thisObject || 0) - 1;
      var l = obj ? obj.length : 0;
      /** @type {!Array} */
      var result = [];
      for (; ++i < l;) {
        var value = obj[i];
        if (value && "object" == typeof value && "number" == typeof value.length && (isArray(value) || isArguments(value))) {
          if (!a) {
            value = apply(value, a, ctx);
          }
          /** @type {number} */
          var valIndex = -1;
          /** @type {number} */
          var valLength = value.length;
          /** @type {number} */
          var resIndex = result.length;
          result.length += valLength;
          for (; ++valIndex < valLength;) {
            result[resIndex++] = value[valIndex];
          }
        } else {
          if (!ctx) {
            result.push(value);
          }
        }
      }
      return result;
    }
    /**
     * @param {?} a
     * @param {?} b
     * @param {!Object} callback
     * @param {string} isWhere
     * @param {!Array} stackA
     * @param {!Array} stackB
     * @return {?}
     */
    function baseIsEqual(a, b, callback, isWhere, stackA, stackB) {
      if (callback) {
        var result = callback(a, b);
        if ("undefined" != typeof result) {
          return !!result;
        }
      }
      if (a === b) {
        return 0 !== a || 1 / a == 1 / b;
      }
      /** @type {string} */
      var type = typeof a;
      /** @type {string} */
      var otherType = typeof b;
      if (!(a !== a || a && objectTypes[type] || b && objectTypes[otherType])) {
        return false;
      }
      if (null == a || null == b) {
        return a === b;
      }
      var className = toString.call(a);
      var otherClass = toString.call(b);
      if (className == argsClass && (className = objectClass), otherClass == argsClass && (otherClass = objectClass), className != otherClass) {
        return false;
      }
      switch(className) {
        case boolClass:
        case dateClass:
          return +a == +b;
        case numberClass:
          return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
        case regexpClass:
        case stringClass:
          return a == String(b);
      }
      /** @type {boolean} */
      var isArr = className == arrayClass;
      if (!isArr) {
        var aWrapped = hasOwnProperty.call(a, "__wrapped__");
        var bWrapped = hasOwnProperty.call(b, "__wrapped__");
        if (aWrapped || bWrapped) {
          return baseIsEqual(aWrapped ? a.__wrapped__ : a, bWrapped ? b.__wrapped__ : b, callback, isWhere, stackA, stackB);
        }
        if (className != objectClass || !support.nodeClass && (isNode(a) || isNode(b))) {
          return false;
        }
        var ctorA = !support.argsObject && isArguments(a) ? Object : a.constructor;
        var ctorB = !support.argsObject && isArguments(b) ? Object : b.constructor;
        if (ctorA != ctorB && !(isFunction(ctorA) && ctorA instanceof ctorA && isFunction(ctorB) && ctorB instanceof ctorB) && "constructor" in a && "constructor" in b) {
          return false;
        }
      }
      /** @type {boolean} */
      var initedStack = !stackA;
      if (!stackA) {
        stackA = getArray();
      }
      if (!stackB) {
        stackB = getArray();
      }
      var length = stackA.length;
      for (; length--;) {
        if (stackA[length] == a) {
          return stackB[length] == b;
        }
      }
      /** @type {number} */
      var size = 0;
      if (result = true, stackA.push(a), stackB.push(b), isArr) {
        if (length = a.length, size = b.length, result = size == length, result || isWhere) {
          for (; size--;) {
            var index = length;
            var value = b[size];
            if (isWhere) {
              for (; index-- && !(result = baseIsEqual(a[index], value, callback, isWhere, stackA, stackB));) {
              }
            } else {
              if (!(result = baseIsEqual(a[size], value, callback, isWhere, stackA, stackB))) {
                break;
              }
            }
          }
        }
      } else {
        forIn(b, function(value, key, it) {
          return hasOwnProperty.call(it, key) ? (size++, result = hasOwnProperty.call(a, key) && baseIsEqual(a[key], value, callback, isWhere, stackA, stackB)) : void 0;
        });
        if (result && !isWhere) {
          forIn(a, function(mmCoreSecondsYear, key, a) {
            return hasOwnProperty.call(a, key) ? result = --size > -1 : void 0;
          });
        }
      }
      return stackA.pop(), stackB.pop(), initedStack && (releaseArray(stackA), releaseArray(stackB)), result;
    }
    /**
     * @param {?} obj
     * @param {!Object} source
     * @param {?} fn
     * @param {!Array} key
     * @param {!Array} cache
     * @return {undefined}
     */
    function serialize(obj, source, fn, key, cache) {
      (isArray(source) ? forEach : forOwn)(source, function(type, key) {
        var isMatchingType;
        var isArr;
        /** @type {!Object} */
        var name = type;
        var value = obj[key];
        if (type && ((isArr = isArray(type)) || isPlainObject(type))) {
          var i = key.length;
          for (; i--;) {
            if (isMatchingType = key[i] == type) {
              value = cache[i];
              break;
            }
          }
          if (!isMatchingType) {
            var l;
            if (fn) {
              name = fn(value, type);
              if (l = "undefined" != typeof name) {
                value = name;
              }
            }
            if (!l) {
              value = isArr ? isArray(value) ? value : [] : isPlainObject(value) ? value : {};
            }
            key.push(type);
            cache.push(value);
            if (!l) {
              serialize(value, type, fn, key, cache);
            }
          }
        } else {
          if (fn) {
            name = fn(value, type);
            if ("undefined" == typeof name) {
              /** @type {!Object} */
              name = type;
            }
          }
          if ("undefined" != typeof name) {
            value = name;
          }
        }
        obj[key] = value;
      });
    }
    /**
     * @param {number} min
     * @param {number} max
     * @return {?}
     */
    function baseRandom(min, max) {
      return min + nativeFloor(nativeRandom() * (max - min + 1));
    }
    /**
     * @param {number} array
     * @param {!Object} isSorted
     * @param {!Function} callback
     * @return {?}
     */
    function baseUniq(array, isSorted, callback) {
      /** @type {number} */
      var index = -1;
      var indexOf = getIndexOf();
      var length = array ? array.length : 0;
      /** @type {!Array} */
      var result = [];
      /** @type {boolean} */
      var isLarge = !isSorted && length >= largeArraySize && indexOf === baseIndexOf;
      var seen = callback || isLarge ? getArray() : result;
      if (isLarge) {
        var cache = createCache(seen);
        /** @type {function(!Object, string): ?} */
        indexOf = cacheIndexOf;
        seen = cache;
      }
      for (; ++index < length;) {
        var value = array[index];
        var computed = callback ? callback(value, index, array) : value;
        if (isSorted ? !index || seen[seen.length - 1] !== computed : indexOf(seen, computed) < 0) {
          if (callback || isLarge) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return isLarge ? (releaseArray(seen.array), releaseObject(seen)) : callback && releaseArray(seen), result;
    }
    /**
     * @param {!Function} on
     * @return {?}
     */
    function send(on) {
      return function(object, callback, thisArg) {
        var channel = {};
        if (callback = lodash.createCallback(callback, thisArg, 3), isArray(object)) {
          /** @type {number} */
          var i = -1;
          var length = object.length;
          for (; ++i < length;) {
            var event = object[i];
            on(channel, event, callback(event, i, object), object);
          }
        } else {
          each(object, function(event, exisObj, i) {
            on(channel, event, callback(event, exisObj, i), i);
          });
        }
        return channel;
      };
    }
    /**
     * @param {(!Function|string)} func
     * @param {number} bitmask
     * @param {!Object} partialArgs
     * @param {!Object} b
     * @param {!Object} thisArg
     * @param {!Object} arity
     * @return {?}
     */
    function createWrapper(func, bitmask, partialArgs, b, thisArg, arity) {
      /** @type {number} */
      var hold = 1 & bitmask;
      /** @type {number} */
      var h = 2 & bitmask;
      /** @type {number} */
      var i = 4 & bitmask;
      /** @type {number} */
      var isPartial = 16 & bitmask;
      /** @type {number} */
      var a = 32 & bitmask;
      if (!h && !isFunction(func)) {
        throw new TypeError;
      }
      if (isPartial && !partialArgs.length) {
        /** @type {number} */
        bitmask = bitmask & -17;
        /** @type {boolean} */
        isPartial = partialArgs = false;
      }
      if (a && !b.length) {
        /** @type {number} */
        bitmask = bitmask & -33;
        /** @type {boolean} */
        a = b = false;
      }
      var bindData = func && func.__bindData__;
      if (bindData && bindData !== true) {
        return bindData = slice(bindData), bindData[2] && (bindData[2] = slice(bindData[2])), bindData[3] && (bindData[3] = slice(bindData[3])), !hold || 1 & bindData[1] || (bindData[4] = thisArg), !hold && 1 & bindData[1] && (bitmask = bitmask | 8), !i || 4 & bindData[1] || (bindData[5] = arity), isPartial && push.apply(bindData[2] || (bindData[2] = []), partialArgs), a && unshift.apply(bindData[3] || (bindData[3] = []), b), bindData[1] |= bitmask, createWrapper.apply(null, bindData);
      }
      /** @type {function(!Array): ?} */
      var creater = 1 == bitmask || 17 === bitmask ? compare : parse;
      return creater([func, bitmask, partialArgs, b, thisArg, arity]);
    }
    /**
     * @return {?}
     */
    function createIterator() {
      /** @type {!Array} */
      iteratorData.shadowedProps = shadowedProps;
      /** @type {string} */
      iteratorData.array = iteratorData.bottom = iteratorData.loop = iteratorData.top = "";
      /** @type {string} */
      iteratorData.init = "iterable";
      /** @type {boolean} */
      iteratorData.useHas = true;
      var object;
      /** @type {number} */
      var j = 0;
      for (; object = arguments[j]; j++) {
        var key;
        for (key in object) {
          iteratorData[key] = object[key];
        }
      }
      /** @type {string} */
      var args = iteratorData.args;
      /** @type {string} */
      iteratorData.firstArg = /^[^,]+/.exec(args)[0];
      var factory = Function("baseCreateCallback, errorClass, errorProto, hasOwnProperty, indicatorObject, isArguments, isArray, isString, keys, objectProto, objectTypes, nonEnumProps, stringClass, stringProto, toString", "return function(" + args + ") {\n" + iteratorTemplate(iteratorData) + "\n}");
      return factory(baseCreateCallback, errorClass, errorProto, hasOwnProperty, Rows, isArguments, isArray, isString, iteratorData.keys, objectProto, objectTypes, nonEnumProps, stringClass, stringProto, toString);
    }
    /**
     * @param {?} field
     * @return {?}
     */
    function name(field) {
      return x[field];
    }
    /**
     * @return {?}
     */
    function getIndexOf() {
      /** @type {function(string, ?, number): ?} */
      var result = (result = lodash.indexOf) === indexOf ? baseIndexOf : result;
      return result;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function isNative(value) {
      return "function" == typeof value && dateTest.test(value);
    }
    /**
     * @param {!Object} value
     * @return {?}
     */
    function shimIsPlainObject(value) {
      var ctor;
      var c;
      return !value || toString.call(value) != objectClass || (ctor = value.constructor, isFunction(ctor) && !(ctor instanceof ctor)) || !support.argsClass && isArguments(value) || !support.nodeClass && isNode(value) ? false : support.ownLast ? (forIn(value, function(a, b, cache) {
        return c = hasOwnProperty.call(cache, b), false;
      }), c !== false) : (forIn(value, function(a, savedC) {
        /** @type {number} */
        c = savedC;
      }), "undefined" == typeof c || hasOwnProperty.call(value, c));
    }
    /**
     * @param {?} match
     * @return {?}
     */
    function escapeHtmlChar(match) {
      return result[match];
    }
    /**
     * @param {!Object} value
     * @return {?}
     */
    function isArguments(value) {
      return value && "object" == typeof value && "number" == typeof value.length && toString.call(value) == argsClass || false;
    }
    /**
     * @param {string} value
     * @param {?} deep
     * @param {?} callback
     * @param {?} thisArg
     * @return {?}
     */
    function clone(value, deep, callback, thisArg) {
      return "boolean" != typeof deep && null != deep && (thisArg = callback, callback = deep, deep = false), baseClone(value, deep, "function" == typeof callback && baseCreateCallback(callback, thisArg, 1));
    }
    /**
     * @param {!Object} data
     * @param {?} value
     * @param {!Array} customizer
     * @return {?}
     */
    function cloneWith(data, value, customizer) {
      return baseClone(data, true, "function" == typeof value && baseCreateCallback(value, customizer, 1));
    }
    /**
     * @param {!Object} proto
     * @param {?} properties
     * @return {?}
     */
    function create(proto, properties) {
      var result = createObject(proto);
      return properties ? assign(result, properties) : result;
    }
    /**
     * @param {undefined} object
     * @param {string} callback
     * @param {!Function} thisArg
     * @return {?}
     */
    function findKey(object, callback, thisArg) {
      var calculateSectionStatus;
      return callback = lodash.createCallback(callback, thisArg, 3), forOwn(object, function(identifierPositions, status, gmInstance) {
        return callback(identifierPositions, status, gmInstance) ? (calculateSectionStatus = status, false) : void 0;
      }), calculateSectionStatus;
    }
    /**
     * @param {(Object|string)} object
     * @param {string} callback
     * @param {!Function} thisArg
     * @return {?}
     */
    function run(object, callback, thisArg) {
      var calculateSectionStatus;
      return callback = lodash.createCallback(callback, thisArg, 3), get(object, function(identifierPositions, status, gmInstance) {
        return callback(identifierPositions, status, gmInstance) ? (calculateSectionStatus = status, false) : void 0;
      }), calculateSectionStatus;
    }
    /**
     * @param {?} group
     * @param {?} callback
     * @param {!Array} thisArg
     * @return {?}
     */
    function add(group, callback, thisArg) {
      /** @type {!Array} */
      var arr = [];
      forIn(group, function(fn, b) {
        arr.push(b, fn);
      });
      /** @type {number} */
      var i = arr.length;
      callback = baseCreateCallback(callback, thisArg, 3);
      for (; i-- && callback(arr[i--], arr[i], group) !== false;) {
      }
      return group;
    }
    /**
     * @param {(Object|string)} json
     * @param {(!Function|string)} callback
     * @param {!Array} url
     * @return {?}
     */
    function get(json, callback, url) {
      var result = keys(json);
      var index = result.length;
      callback = baseCreateCallback(callback, url, 3);
      for (; index--;) {
        var i = result[index];
        if (callback(json[i], i, json) === false) {
          break;
        }
      }
      return json;
    }
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function functions(obj) {
      /** @type {!Array} */
      var constrTypes = [];
      return forIn(obj, function(typeSpec, c) {
        if (isFunction(typeSpec)) {
          constrTypes.push(c);
        }
      }), constrTypes.sort();
    }
    /**
     * @param {!Object} obj
     * @param {?} key
     * @return {?}
     */
    function has(obj, key) {
      return obj ? hasOwnProperty.call(obj, key) : false;
    }
    /**
     * @param {number} value
     * @return {?}
     */
    function invert(value) {
      /** @type {number} */
      var i = -1;
      var props = keys(value);
      var length = props.length;
      var out = {};
      for (; ++i < length;) {
        var name = props[i];
        out[value[name]] = name;
      }
      return out;
    }
    /**
     * @param {!Object} value
     * @return {?}
     */
    function isBoolean(value) {
      return value === true || value === false || value && "object" == typeof value && toString.call(value) == boolClass || false;
    }
    /**
     * @param {string} value
     * @return {?}
     */
    function isDate(value) {
      return value && "object" == typeof value && toString.call(value) == dateClass || false;
    }
    /**
     * @param {!Object} thingy
     * @return {?}
     */
    function isElement(thingy) {
      return thingy && 1 === thingy.nodeType || false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function isEmpty(value) {
      /** @type {boolean} */
      var result = true;
      if (!value) {
        return result;
      }
      var className = toString.call(value);
      var len = value.length;
      return className == arrayClass || className == stringClass || (support.argsClass ? className == argsClass : isArguments(value)) || className == objectClass && "number" == typeof len && isFunction(value.splice) ? !len : (forOwn(value, function() {
        return result = false;
      }), result);
    }
    /**
     * @param {?} a
     * @param {?} b
     * @param {?} callback
     * @param {!Array} thisArg
     * @return {?}
     */
    function isEqual(a, b, callback, thisArg) {
      return baseIsEqual(a, b, "function" == typeof callback && baseCreateCallback(callback, thisArg, 2));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function isFinite(value) {
      return nativeIsFinite(value) && !nativeIsNaN(parseFloat(value));
    }
    /**
     * @param {!Object} value
     * @return {?}
     */
    function isFunction(value) {
      return "function" == typeof value;
    }
    /**
     * @param {!Object} value
     * @return {?}
     */
    function isObject(value) {
      return !(!value || !objectTypes[typeof value]);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function isNaN(value) {
      return isNumber(value) && value != +value;
    }
    /**
     * @param {!Object} val
     * @return {?}
     */
    function isNull(val) {
      return null === val;
    }
    /**
     * @param {!Array} value
     * @return {?}
     */
    function isNumber(value) {
      return "number" == typeof value || value && "object" == typeof value && toString.call(value) == numberClass || false;
    }
    /**
     * @param {string} value
     * @return {?}
     */
    function isRegExp(value) {
      return value && objectTypes[typeof value] && toString.call(value) == regexpClass || false;
    }
    /**
     * @param {!Object} value
     * @return {?}
     */
    function isString(value) {
      return "string" == typeof value || value && "object" == typeof value && toString.call(value) == stringClass || false;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    function isUndefined(val) {
      return "undefined" == typeof val;
    }
    /**
     * @param {undefined} object
     * @param {string} callback
     * @param {!Function} thisArg
     * @return {?}
     */
    function mapValues(object, callback, thisArg) {
      var result = {};
      return callback = lodash.createCallback(callback, thisArg, 3), forOwn(object, function(dependency, i, arg2) {
        result[i] = callback(dependency, i, arg2);
      }), result;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    function merge(obj) {
      /** @type {!Arguments} */
      var args = arguments;
      /** @type {number} */
      var length = 2;
      if (!isObject(obj)) {
        return obj;
      }
      if ("number" != typeof args[2] && (length = args.length), length > 3 && "function" == typeof args[length - 2]) {
        var callback = baseCreateCallback(args[--length - 1], args[length--], 2);
      } else {
        if (length > 2 && "function" == typeof args[length - 1]) {
          callback = args[--length];
        }
      }
      var sources = slice(arguments, 1, length);
      /** @type {number} */
      var i = -1;
      var seen = getArray();
      var stackB = getArray();
      for (; ++i < length;) {
        serialize(obj, sources[i], callback, seen, stackB);
      }
      return releaseArray(seen), releaseArray(stackB), obj;
    }
    /**
     * @param {?} props
     * @param {string} callback
     * @param {!Function} thisArg
     * @return {?}
     */
    function omit(props, callback, thisArg) {
      var out = {};
      if ("function" != typeof callback) {
        /** @type {!Array} */
        var items = [];
        forIn(props, function(a, b) {
          items.push(b);
        });
        items = callback(items, apply(arguments, true, false, 1));
        /** @type {number} */
        var i = -1;
        var length = items.length;
        for (; ++i < length;) {
          var name = items[i];
          out[name] = props[name];
        }
      } else {
        callback = lodash.createCallback(callback, thisArg, 3);
        forIn(props, function(result, uuid, gmInstance) {
          if (!callback(result, uuid, gmInstance)) {
            out[uuid] = result;
          }
        });
      }
      return out;
    }
    /**
     * @param {undefined} object
     * @return {?}
     */
    function pairs(object) {
      /** @type {number} */
      var i = -1;
      var props = keys(object);
      var length = props.length;
      var pairs = Array(length);
      for (; ++i < length;) {
        var p = props[i];
        /** @type {!Array} */
        pairs[i] = [p, object[p]];
      }
      return pairs;
    }
    /**
     * @param {!Object} object
     * @param {boolean} callback
     * @param {!Function} thisArg
     * @return {?}
     */
    function pick(object, callback, thisArg) {
      var result = {};
      if ("function" != typeof callback) {
        /** @type {number} */
        var i = -1;
        var props = apply(arguments, true, false, 1);
        var length = isObject(object) ? props.length : 0;
        for (; ++i < length;) {
          var name = props[i];
          if (name in object) {
            result[name] = object[name];
          }
        }
      } else {
        callback = lodash.createCallback(callback, thisArg, 3);
        forIn(object, function(template, pluginName, gmInstance) {
          if (callback(template, pluginName, gmInstance)) {
            result[pluginName] = template;
          }
        });
      }
      return result;
    }
    /**
     * @param {!Object} object
     * @param {string} callback
     * @param {!Object} obj
     * @param {!Function} thisArg
     * @return {?}
     */
    function value(object, callback, obj, thisArg) {
      var isArr = isArray(object);
      if (null == obj) {
        if (isArr) {
          /** @type {!Array} */
          obj = [];
        } else {
          var ctor = object && object.constructor;
          var proto = ctor && ctor.prototype;
          obj = createObject(proto);
        }
      }
      return callback && (callback = lodash.createCallback(callback, thisArg, 4), (isArr ? each : forOwn)(object, function(exisObj, gmInstance, missingCoins) {
        return callback(obj, exisObj, gmInstance, missingCoins);
      })), obj;
    }
    /**
     * @param {!Object} value
     * @return {?}
     */
    function values(value) {
      /** @type {number} */
      var i = -1;
      var props = keys(value);
      var length = props.length;
      var result = Array(length);
      for (; ++i < length;) {
        result[i] = value[props[i]];
      }
      return result;
    }
    /**
     * @param {string} collection
     * @return {?}
     */
    function at(collection) {
      /** @type {!Arguments} */
      var args = arguments;
      /** @type {number} */
      var index = -1;
      var names = apply(args, true, false, 1);
      var propsLength = args[2] && args[2][args[1]] === collection ? 1 : names.length;
      var result = Array(propsLength);
      if (support.unindexedChars && isString(collection)) {
        collection = collection.split("");
      }
      for (; ++index < propsLength;) {
        result[index] = collection[names[index]];
      }
      return result;
    }
    /**
     * @param {!Object} collection
     * @param {!Object} target
     * @param {number} fromIndex
     * @return {?}
     */
    function contains(collection, target, fromIndex) {
      /** @type {number} */
      var index = -1;
      var indexOf = getIndexOf();
      var length = collection ? collection.length : 0;
      /** @type {boolean} */
      var result = false;
      return fromIndex = (0 > fromIndex ? nativeMax(0, length + fromIndex) : fromIndex) || 0, isArray(collection) ? result = indexOf(collection, target, fromIndex) > -1 : "number" == typeof length ? result = (isString(collection) ? collection.indexOf(target, fromIndex) : indexOf(collection, target, fromIndex)) > -1 : each(collection, function(value) {
        return ++index >= fromIndex ? !(result = value === target) : void 0;
      }), result;
    }
    /**
     * @param {!Arguments} object
     * @param {string} callback
     * @param {!Function} thisArg
     * @return {?}
     */
    function every(object, callback, thisArg) {
      /** @type {boolean} */
      var result = true;
      if (callback = lodash.createCallback(callback, thisArg, 3), isArray(object)) {
        /** @type {number} */
        var i = -1;
        var n = object.length;
        for (; ++i < n && (result = !!callback(object[i], i, object));) {
        }
      } else {
        each(object, function(identifierPositions, exisObj, gmInstance) {
          return result = !!callback(identifierPositions, exisObj, gmInstance);
        });
      }
      return result;
    }
    /**
     * @param {!Object} data
     * @param {string} callback
     * @param {!Object} thisArg
     * @return {?}
     */
    function filter(data, callback, thisArg) {
      /** @type {!Array} */
      var items = [];
      if (callback = lodash.createCallback(callback, thisArg, 3), isArray(data)) {
        /** @type {number} */
        var i = -1;
        var index = data.length;
        for (; ++i < index;) {
          var g = data[i];
          if (callback(g, i, data)) {
            items.push(g);
          }
        }
      } else {
        each(data, function(a, exisObj, gmInstance) {
          if (callback(a, exisObj, gmInstance)) {
            items.push(a);
          }
        });
      }
      return items;
    }
    /**
     * @param {!Object} x
     * @param {string} callback
     * @param {!Object} thisArg
     * @return {?}
     */
    function find(x, callback, thisArg) {
      if (callback = lodash.createCallback(callback, thisArg, 3), !isArray(x)) {
        var a;
        return each(x, function(b, exisObj, gmInstance) {
          return callback(b, exisObj, gmInstance) ? (a = b, false) : void 0;
        }), a;
      }
      /** @type {number} */
      var i = -1;
      var l = x.length;
      for (; ++i < l;) {
        var t = x[i];
        if (callback(t, i, x)) {
          return t;
        }
      }
    }
    /**
     * @param {!Object} collection
     * @param {string} callback
     * @param {!Function} thisArg
     * @return {?}
     */
    function groupBy(collection, callback, thisArg) {
      var autoReview;
      return callback = lodash.createCallback(callback, thisArg, 3), toArray(collection, function(data, exisObj, gmInstance) {
        return callback(data, exisObj, gmInstance) ? (autoReview = data, false) : void 0;
      }), autoReview;
    }
    /**
     * @param {!Array} object
     * @param {!Function} callback
     * @param {!Array} action
     * @return {?}
     */
    function forEach(object, callback, action) {
      if (callback && "undefined" == typeof action && isArray(object)) {
        /** @type {number} */
        var i = -1;
        var length = object.length;
        for (; ++i < length && callback(object[i], i, object) !== false;) {
        }
      } else {
        each(object, callback, action);
      }
      return object;
    }
    /**
     * @param {!Object} collection
     * @param {string} callback
     * @param {!Array} thisArg
     * @return {?}
     */
    function toArray(collection, callback, thisArg) {
      /** @type {!Object} */
      var iterable = collection;
      var length = collection ? collection.length : 0;
      if (callback = callback && "undefined" == typeof thisArg ? callback : baseCreateCallback(callback, thisArg, 3), isArray(collection)) {
        for (; length-- && callback(collection[length], length, collection) !== false;) {
        }
      } else {
        if ("number" != typeof length) {
          var props = keys(collection);
          length = props.length;
        } else {
          if (support.unindexedChars && isString(collection)) {
            iterable = collection.split("");
          }
        }
        each(collection, function(a, index, gmInstance) {
          return index = props ? props[--length] : --length, callback(iterable[index], index, gmInstance);
        });
      }
      return collection;
    }
    /**
     * @param {!Function} object
     * @param {string} method
     * @return {?}
     */
    function invoke(object, method) {
      var a = slice(arguments, 2);
      /** @type {number} */
      var j = -1;
      /** @type {boolean} */
      var isFunc = "function" == typeof method;
      var length = object ? object.length : 0;
      var result = Array("number" == typeof length ? length : 0);
      return forEach(object, function(value) {
        result[++j] = (isFunc ? method : value[method]).apply(value, a);
      }), result;
    }
    /**
     * @param {!Function} object
     * @param {string} callback
     * @param {!Object} thisArg
     * @return {?}
     */
    function map(object, callback, thisArg) {
      /** @type {number} */
      var i = -1;
      var length = object ? object.length : 0;
      var result = Array("number" == typeof length ? length : 0);
      if (callback = lodash.createCallback(callback, thisArg, 3), isArray(object)) {
        for (; ++i < length;) {
          result[i] = callback(object[i], i, object);
        }
      } else {
        each(object, function(imdb_id, browser, instance) {
          result[++i] = callback(imdb_id, browser, instance);
        });
      }
      return result;
    }
    /**
     * @param {?} array
     * @param {!Function} callback
     * @param {!Object} thisArg
     * @return {?}
     */
    function max(array, callback, thisArg) {
      /** @type {number} */
      var body = -1 / 0;
      var b = body;
      if ("function" != typeof callback && thisArg && thisArg[callback] === array && (callback = null), null == callback && isArray(array)) {
        /** @type {number} */
        var i = -1;
        var length = array.length;
        for (; ++i < length;) {
          var a = array[i];
          if (a > b) {
            b = a;
          }
        }
      } else {
        callback = null == callback && isString(array) ? charAtCallback : lodash.createCallback(callback, thisArg, 3);
        each(array, function(a, number, gmInstance) {
          var result = callback(a, number, gmInstance);
          if (result > body) {
            body = result;
            /** @type {!Array} */
            b = a;
          }
        });
      }
      return b;
    }
    /**
     * @param {?} array
     * @param {!Function} callback
     * @param {!Object} thisArg
     * @return {?}
     */
    function min(array, callback, thisArg) {
      /** @type {number} */
      var lastAvarage = 1 / 0;
      var value = lastAvarage;
      if ("function" != typeof callback && thisArg && thisArg[callback] === array && (callback = null), null == callback && isArray(array)) {
        /** @type {number} */
        var i = -1;
        var length = array.length;
        for (; ++i < length;) {
          var v = array[i];
          if (value > v) {
            value = v;
          }
        }
      } else {
        callback = null == callback && isString(array) ? charAtCallback : lodash.createCallback(callback, thisArg, 3);
        each(array, function(input, exisObj, gmInstance) {
          var avarage = callback(input, exisObj, gmInstance);
          if (lastAvarage > avarage) {
            lastAvarage = avarage;
            /** @type {!Array} */
            value = input;
          }
        });
      }
      return value;
    }
    /**
     * @param {!Array} collection
     * @param {number} callback
     * @param {?} accumulator
     * @param {!Function} thisArg
     * @return {?}
     */
    function reduce(collection, callback, accumulator, thisArg) {
      /** @type {boolean} */
      var noaccum = arguments.length < 3;
      if (callback = lodash.createCallback(callback, thisArg, 4), isArray(collection)) {
        /** @type {number} */
        var index = -1;
        var length = collection.length;
        if (noaccum) {
          accumulator = collection[++index];
        }
        for (; ++index < length;) {
          accumulator = callback(accumulator, collection[index], index, collection);
        }
      } else {
        each(collection, function(value, index, array) {
          accumulator = noaccum ? (noaccum = false, value) : callback(accumulator, value, index, array);
        });
      }
      return accumulator;
    }
    /**
     * @param {!Object} collection
     * @param {string} callback
     * @param {?} accumulator
     * @param {!Function} thisArg
     * @return {?}
     */
    function reduceRight(collection, callback, accumulator, thisArg) {
      /** @type {boolean} */
      var noaccum = arguments.length < 3;
      return callback = lodash.createCallback(callback, thisArg, 4), toArray(collection, function(value, index, array) {
        accumulator = noaccum ? (noaccum = false, value) : callback(accumulator, value, index, array);
      }), accumulator;
    }
    /**
     * @param {!Object} object
     * @param {string} callback
     * @param {!Function} thisArg
     * @return {?}
     */
    function reject(object, callback, thisArg) {
      return callback = lodash.createCallback(callback, thisArg, 3), filter(object, function(identifierPositions, exisObj, gmInstance) {
        return !callback(identifierPositions, exisObj, gmInstance);
      });
    }
    /**
     * @param {!Object} collection
     * @param {?} n
     * @param {boolean} a
     * @return {?}
     */
    function sample(collection, n, a) {
      if (collection && "number" != typeof collection.length ? collection = values(collection) : support.unindexedChars && isString(collection) && (collection = collection.split("")), null == n || a) {
        return collection ? collection[baseRandom(0, collection.length - 1)] : undefined;
      }
      var result = shuffle(collection);
      return result.length = nativeMin(nativeMax(0, n), result.length), result;
    }
    /**
     * @param {!Function} collection
     * @return {?}
     */
    function shuffle(collection) {
      /** @type {number} */
      var index = -1;
      var length = collection ? collection.length : 0;
      var result = Array("number" == typeof length ? length : 0);
      return forEach(collection, function(id) {
        var i = baseRandom(0, ++index);
        result[index] = result[i];
        result[i] = id;
      }), result;
    }
    /**
     * @param {string} value
     * @return {?}
     */
    function size(value) {
      var a = value ? value.length : 0;
      return "number" == typeof a ? a : keys(value).length;
    }
    /**
     * @param {!Arguments} collection
     * @param {string} callback
     * @param {!Function} thisArg
     * @return {?}
     */
    function some(collection, callback, thisArg) {
      var result;
      if (callback = lodash.createCallback(callback, thisArg, 3), isArray(collection)) {
        /** @type {number} */
        var i = -1;
        var l = collection.length;
        for (; ++i < l && !(result = callback(collection[i], i, collection));) {
        }
      } else {
        each(collection, function(i, installId, y) {
          return !(result = callback(i, installId, y));
        });
      }
      return !!result;
    }
    /**
     * @param {!Function} array
     * @param {!Object} callback
     * @param {!Function} thisArg
     * @return {?}
     */
    function sortBy(array, callback, thisArg) {
      /** @type {number} */
      var index = -1;
      var isArr = isArray(callback);
      var length = array ? array.length : 0;
      var result = Array("number" == typeof length ? length : 0);
      if (!isArr) {
        callback = lodash.createCallback(callback, thisArg, 3);
      }
      forEach(array, function(a, exisObj, gmInstance) {
        var object = result[++index] = getObject();
        if (isArr) {
          object.criteria = map(callback, function(howMany) {
            return a[howMany];
          });
        } else {
          (object.criteria = getArray())[0] = callback(a, exisObj, gmInstance);
        }
        object.index = index;
        /** @type {!Object} */
        object.value = a;
      });
      length = result.length;
      result.sort(fn);
      for (; length--;) {
        var object = result[length];
        result[length] = object.value;
        if (!isArr) {
          releaseArray(object.criteria);
        }
        releaseObject(object);
      }
      return result;
    }
    /**
     * @param {!Object} collection
     * @return {?}
     */
    function walk(collection) {
      return collection && "number" == typeof collection.length ? support.unindexedChars && isString(collection) ? collection.split("") : slice(collection) : values(collection);
    }
    /**
     * @param {number} array
     * @return {?}
     */
    function compact(array) {
      /** @type {number} */
      var i = -1;
      var length = array ? array.length : 0;
      /** @type {!Array} */
      var result = [];
      for (; ++i < length;) {
        var value = array[i];
        if (value) {
          result.push(value);
        }
      }
      return result;
    }
    /**
     * @param {undefined} right
     * @return {?}
     */
    function difference(right) {
      return callback(right, apply(arguments, true, true, 1));
    }
    /**
     * @param {number} obj
     * @param {string} callback
     * @param {!Function} thisArg
     * @return {?}
     */
    function findIndex(obj, callback, thisArg) {
      /** @type {number} */
      var i = -1;
      var l = obj ? obj.length : 0;
      callback = lodash.createCallback(callback, thisArg, 3);
      for (; ++i < l;) {
        if (callback(obj[i], i, obj)) {
          return i;
        }
      }
      return -1;
    }
    /**
     * @param {!Object} data
     * @param {string} callback
     * @param {!Function} thisArg
     * @return {?}
     */
    function wrap(data, callback, thisArg) {
      var value = data ? data.length : 0;
      callback = lodash.createCallback(callback, thisArg, 3);
      for (; value--;) {
        if (callback(data[value], value, data)) {
          return value;
        }
      }
      return -1;
    }
    /**
     * @param {number} array
     * @param {string} callback
     * @param {!Object} thisArg
     * @return {?}
     */
    function first(array, callback, thisArg) {
      /** @type {number} */
      var n = 0;
      var length = array ? array.length : 0;
      if ("number" != typeof callback && null != callback) {
        /** @type {number} */
        var i = -1;
        callback = lodash.createCallback(callback, thisArg, 3);
        for (; ++i < length && callback(array[i], i, array);) {
          n++;
        }
      } else {
        if (n = callback, null == n || thisArg) {
          return array ? array[0] : undefined;
        }
      }
      return slice(array, 0, nativeMin(nativeMax(0, n), length));
    }
    /**
     * @param {!Object} value
     * @param {string} a
     * @param {string} p
     * @param {!Object} i
     * @return {?}
     */
    function update(value, a, p, i) {
      return "boolean" != typeof a && null != a && (i = p, p = "function" != typeof a && i && i[a] === value ? null : a, a = false), null != p && (value = map(value, p, i)), apply(value, a);
    }
    /**
     * @param {!Object} value
     * @param {?} item
     * @param {number} fromIndex
     * @return {?}
     */
    function indexOf(value, item, fromIndex) {
      if ("number" == typeof fromIndex) {
        var length = value ? value.length : 0;
        fromIndex = 0 > fromIndex ? nativeMax(0, length + fromIndex) : fromIndex || 0;
      } else {
        if (fromIndex) {
          var i = sortedIndex(value, item);
          return value[i] === item ? i : -1;
        }
      }
      return baseIndexOf(value, item, fromIndex);
    }
    /**
     * @param {!Function} array
     * @param {string} callback
     * @param {!Object} thisArg
     * @return {?}
     */
    function initial(array, callback, thisArg) {
      /** @type {number} */
      var n = 0;
      var length = array ? array.length : 0;
      if ("number" != typeof callback && null != callback) {
        var index = length;
        callback = lodash.createCallback(callback, thisArg, 3);
        for (; index-- && callback(array[index], index, array);) {
          n++;
        }
      } else {
        n = null == callback || thisArg ? 1 : callback || n;
      }
      return slice(array, 0, nativeMin(nativeMax(0, length - n), length));
    }
    /**
     * @return {?}
     */
    function intersection() {
      /** @type {!Array} */
      var args = [];
      /** @type {number} */
      var argsIndex = -1;
      /** @type {number} */
      var argsLength = arguments.length;
      var caches = getArray();
      var indexOf = getIndexOf();
      /** @type {boolean} */
      var trustIndexOf = indexOf === baseIndexOf;
      var seen = getArray();
      for (; ++argsIndex < argsLength;) {
        var value = arguments[argsIndex];
        if (isArray(value) || isArguments(value)) {
          args.push(value);
          caches.push(trustIndexOf && value.length >= largeArraySize && createCache(argsIndex ? args[argsIndex] : seen));
        }
      }
      var attributes = args[0];
      /** @type {number} */
      var i = -1;
      var len = attributes ? attributes.length : 0;
      /** @type {!Array} */
      var temporaryStyles = [];
      a: for (; ++i < len;) {
        var cache = caches[0];
        if (value = attributes[i], (cache ? cacheIndexOf(cache, value) : indexOf(seen, value)) < 0) {
          /** @type {number} */
          argsIndex = argsLength;
          (cache || seen).push(value);
          for (; --argsIndex;) {
            if (cache = caches[argsIndex], (cache ? cacheIndexOf(cache, value) : indexOf(args[argsIndex], value)) < 0) {
              continue a;
            }
          }
          temporaryStyles.push(value);
        }
      }
      for (; argsLength--;) {
        cache = caches[argsLength];
        if (cache) {
          releaseObject(cache);
        }
      }
      return releaseArray(caches), releaseArray(seen), temporaryStyles;
    }
    /**
     * @param {!Object} array
     * @param {string} callback
     * @param {!Object} thisArg
     * @return {?}
     */
    function last(array, callback, thisArg) {
      /** @type {number} */
      var n = 0;
      var length = array ? array.length : 0;
      if ("number" != typeof callback && null != callback) {
        var index = length;
        callback = lodash.createCallback(callback, thisArg, 3);
        for (; index-- && callback(array[index], index, array);) {
          n++;
        }
      } else {
        if (n = callback, null == n || thisArg) {
          return array ? array[length - 1] : undefined;
        }
      }
      return slice(array, nativeMax(0, length - n));
    }
    /**
     * @param {!Object} array
     * @param {?} value
     * @param {number} fromIndex
     * @return {?}
     */
    function lastIndexOf(array, value, fromIndex) {
      var index = array ? array.length : 0;
      if ("number" == typeof fromIndex) {
        index = (0 > fromIndex ? nativeMax(0, index + fromIndex) : nativeMin(fromIndex, index - 1)) + 1;
      }
      for (; index--;) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    /**
     * @param {number} val
     * @return {?}
     */
    function cloneDeep(val) {
      /** @type {!Arguments} */
      var jsonGraphEnvelopes = arguments;
      /** @type {number} */
      var jsonGraphEnvelopeIndex = 0;
      /** @type {number} */
      var jsonGraphEnvelopeCount = jsonGraphEnvelopes.length;
      var len = val ? val.length : 0;
      for (; ++jsonGraphEnvelopeIndex < jsonGraphEnvelopeCount;) {
        /** @type {number} */
        var index = -1;
        var jsonGraphEnvelope = jsonGraphEnvelopes[jsonGraphEnvelopeIndex];
        for (; ++index < len;) {
          if (val[index] === jsonGraphEnvelope) {
            input.call(val, index--, 1);
            len--;
          }
        }
      }
      return val;
    }
    /**
     * @param {number} val
     * @param {number} n
     * @param {number} a
     * @return {?}
     */
    function range(val, n, a) {
      /** @type {number} */
      val = +val || 0;
      /** @type {number} */
      a = "number" == typeof a ? a : +a || 1;
      if (null == n) {
        /** @type {number} */
        n = val;
        /** @type {number} */
        val = 0;
      }
      /** @type {number} */
      var i = -1;
      var length = nativeMax(0, ceil((n - val) / (a || 1)));
      var result = Array(length);
      for (; ++i < length;) {
        /** @type {number} */
        result[i] = val;
        /** @type {number} */
        val = val + a;
      }
      return result;
    }
    /**
     * @param {!Object} value
     * @param {string} callback
     * @param {!Object} thisArg
     * @return {?}
     */
    function remove(value, callback, thisArg) {
      /** @type {number} */
      var index = -1;
      var count = value ? value.length : 0;
      /** @type {!Array} */
      var methods = [];
      callback = lodash.createCallback(callback, thisArg, 3);
      for (; ++index < count;) {
        var result = value[index];
        if (callback(result, index, value)) {
          methods.push(result);
          input.call(value, index--, 1);
          count--;
        }
      }
      return methods;
    }
    /**
     * @param {number} array
     * @param {!Object} callback
     * @param {!Object} thisArg
     * @return {?}
     */
    function rest(array, callback, thisArg) {
      if ("number" != typeof callback && null != callback) {
        /** @type {number} */
        var inputIndex = 0;
        /** @type {number} */
        var i = -1;
        var length = array ? array.length : 0;
        callback = lodash.createCallback(callback, thisArg, 3);
        for (; ++i < length && callback(array[i], i, array);) {
          inputIndex++;
        }
      } else {
        inputIndex = null == callback || thisArg ? 1 : nativeMax(0, callback);
      }
      return slice(array, inputIndex);
    }
    /**
     * @param {!Array} array
     * @param {!Array} value
     * @param {string} callback
     * @param {!Function} thisArg
     * @return {?}
     */
    function sortedIndex(array, value, callback, thisArg) {
      /** @type {number} */
      var low = 0;
      var high = array ? array.length : low;
      callback = callback ? lodash.createCallback(callback, thisArg, 1) : identity;
      value = callback(value);
      for (; high > low;) {
        /** @type {number} */
        var mid = low + high >>> 1;
        if (callback(array[mid]) < value) {
          /** @type {number} */
          low = mid + 1;
        } else {
          /** @type {number} */
          high = mid;
        }
      }
      return low;
    }
    /**
     * @return {?}
     */
    function union() {
      return baseUniq(apply(arguments, true, true));
    }
    /**
     * @param {!Array} array
     * @param {!Object} isSorted
     * @param {!Object} callback
     * @param {!Object} thisArg
     * @return {?}
     */
    function uniq(array, isSorted, callback, thisArg) {
      return "boolean" != typeof isSorted && null != isSorted && (thisArg = callback, callback = "function" != typeof isSorted && thisArg && thisArg[isSorted] === array ? null : isSorted, isSorted = false), null != callback && (callback = lodash.createCallback(callback, thisArg, 3)), baseUniq(array, isSorted, callback);
    }
    /**
     * @param {undefined} lines
     * @return {?}
     */
    function slice(lines) {
      return callback(lines, slice(arguments, 1));
    }
    /**
     * @return {?}
     */
    function flatten() {
      /** @type {number} */
      var i = -1;
      /** @type {number} */
      var length = arguments.length;
      for (; ++i < length;) {
        var array = arguments[i];
        if (isArray(array) || isArguments(array)) {
          var result = result ? baseUniq(callback(result, array).concat(callback(array, result))) : array;
        }
      }
      return result || [];
    }
    /**
     * @return {?}
     */
    function unzip() {
      var array = arguments.length > 1 ? arguments : arguments[0];
      /** @type {number} */
      var i = -1;
      var length = array ? max(pluck(array, "length")) : 0;
      var result = Array(0 > length ? 0 : length);
      for (; ++i < length;) {
        result[i] = pluck(array, i);
      }
      return result;
    }
    /**
     * @param {number} keys
     * @param {number} vals
     * @return {?}
     */
    function zipObject(keys, vals) {
      /** @type {number} */
      var i = -1;
      var len = keys ? keys.length : 0;
      var result = {};
      if (!(vals || !len || isArray(keys[0]))) {
        /** @type {!Array} */
        vals = [];
      }
      for (; ++i < len;) {
        var key = keys[i];
        if (vals) {
          result[key] = vals[i];
        } else {
          if (key) {
            result[key[0]] = key[1];
          }
        }
      }
      return result;
    }
    /**
     * @param {?} times
     * @param {!Object} value
     * @return {?}
     */
    function after(times, value) {
      if (!isFunction(value)) {
        throw new TypeError;
      }
      return function() {
        return --times < 1 ? value.apply(this, arguments) : void 0;
      };
    }
    /**
     * @param {?} func
     * @param {!Object} thisArg
     * @return {?}
     */
    function bind(func, thisArg) {
      return arguments.length > 2 ? createWrapper(func, 17, slice(arguments, 2), null, thisArg) : createWrapper(func, 1, null, null, thisArg);
    }
    /**
     * @param {!Object} object
     * @return {?}
     */
    function bindAll(object) {
      var cmlAdditionalAttribs = arguments.length > 1 ? apply(arguments, true, false, 1) : functions(object);
      /** @type {number} */
      var i = -1;
      var l = cmlAdditionalAttribs.length;
      for (; ++i < l;) {
        var key = cmlAdditionalAttribs[i];
        object[key] = createWrapper(object[key], 1, null, null, object);
      }
      return object;
    }
    /**
     * @param {!Object} object
     * @param {!Arguments} name
     * @return {?}
     */
    function bindKey(object, name) {
      return arguments.length > 2 ? createWrapper(name, 19, slice(arguments, 2), null, object) : createWrapper(name, 3, null, null, object);
    }
    /**
     * @return {?}
     */
    function compose() {
      /** @type {!Arguments} */
      var fns = arguments;
      /** @type {number} */
      var i = fns.length;
      for (; i--;) {
        if (!isFunction(fns[i])) {
          throw new TypeError;
        }
      }
      return function() {
        /** @type {!Arguments} */
        var ar = arguments;
        /** @type {number} */
        var i = fns.length;
        for (; i--;) {
          /** @type {!Array} */
          ar = [fns[i].apply(this, ar)];
        }
        return ar[0];
      };
    }
    /**
     * @param {!Arguments} func
     * @param {undefined} arity
     * @return {?}
     */
    function curry(func, arity) {
      return arity = "number" == typeof arity ? arity : +arity || func.length, createWrapper(func, 4, null, null, null, arity);
    }
    /**
     * @param {!Object} fn
     * @param {number} callback
     * @param {!Object} options
     * @return {?}
     */
    function debounce(fn, callback, options) {
      var a;
      var timer;
      var o;
      var timestamp;
      var f;
      var timeoutId;
      var trailingCall;
      /** @type {number} */
      var lastTimestamp = 0;
      /** @type {boolean} */
      var cb = false;
      /** @type {boolean} */
      var trailing = true;
      if (!isFunction(fn)) {
        throw new TypeError;
      }
      if (callback = nativeMax(0, callback) || 0, options === true) {
        /** @type {boolean} */
        var leading = true;
        /** @type {boolean} */
        trailing = false;
      } else {
        if (isObject(options)) {
          leading = options.leading;
          cb = "maxWait" in options && (nativeMax(callback, options.maxWait) || 0);
          trailing = "trailing" in options ? options.trailing : trailing;
        }
      }
      /**
       * @return {undefined}
       */
      var delayed = function() {
        /** @type {number} */
        var msPerFrame = callback - (now() - timestamp);
        if (0 >= msPerFrame) {
          if (timer) {
            clearTimeout(timer);
          }
          var isCalled = trailingCall;
          timer = timeoutId = trailingCall = undefined;
          if (isCalled) {
            lastTimestamp = now();
            o = fn.apply(f, a);
            if (!(timeoutId || timer)) {
              /** @type {null} */
              a = f = null;
            }
          }
        } else {
          timeoutId = setTimeout(delayed, msPerFrame);
        }
      };
      /**
       * @return {undefined}
       */
      var flush = function() {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timer = timeoutId = trailingCall = undefined;
        if (trailing || cb !== callback) {
          lastTimestamp = now();
          o = fn.apply(f, a);
          if (!(timeoutId || timer)) {
            /** @type {null} */
            a = f = null;
          }
        }
      };
      return function() {
        if (a = arguments, timestamp = now(), f = this, trailingCall = trailing && (timeoutId || !leading), cb === false) {
          var leadingCall = leading && !timeoutId;
        } else {
          if (!(timer || leading)) {
            lastTimestamp = timestamp;
          }
          /** @type {number} */
          var timeout = cb - (timestamp - lastTimestamp);
          /** @type {boolean} */
          var timedout = 0 >= timeout;
          if (timedout) {
            if (timer) {
              timer = clearTimeout(timer);
            }
            lastTimestamp = timestamp;
            o = fn.apply(f, a);
          } else {
            if (!timer) {
              timer = setTimeout(flush, timeout);
            }
          }
        }
        return timedout && timeoutId ? timeoutId = clearTimeout(timeoutId) : timeoutId || callback === cb || (timeoutId = setTimeout(delayed, callback)), leadingCall && (timedout = true, o = fn.apply(f, a)), !timedout || timeoutId || timer || (a = f = null), o;
      };
    }
    /**
     * @param {!Object} fn
     * @return {?}
     */
    function defer(fn) {
      if (!isFunction(fn)) {
        throw new TypeError;
      }
      var a = slice(arguments, 1);
      return setTimeout(function() {
        fn.apply(undefined, a);
      }, 1);
    }
    /**
     * @param {!Object} b
     * @param {?} d
     * @return {?}
     */
    function delay(b, d) {
      if (!isFunction(b)) {
        throw new TypeError;
      }
      var a = slice(arguments, 2);
      return setTimeout(function() {
        b.apply(undefined, a);
      }, d);
    }
    /**
     * @param {!Object} fn
     * @param {!Function} resolver
     * @return {?}
     */
    function memoize(fn, resolver) {
      if (!isFunction(fn)) {
        throw new TypeError;
      }
      /**
       * @return {?}
       */
      var memoize = function() {
        var cache = memoize.cache;
        var prop = resolver ? resolver.apply(this, arguments) : keyPrefix + arguments[0];
        return hasOwnProperty.call(cache, prop) ? cache[prop] : cache[prop] = fn.apply(this, arguments);
      };
      return memoize.cache = {}, memoize;
    }
    /**
     * @param {!Object} fn
     * @return {?}
     */
    function once(fn) {
      var ran;
      var result;
      if (!isFunction(fn)) {
        throw new TypeError;
      }
      return function() {
        return ran ? result : (ran = true, result = fn.apply(this, arguments), fn = null, result);
      };
    }
    /**
     * @param {!Arguments} func
     * @return {?}
     */
    function partial(func) {
      return createWrapper(func, 16, slice(arguments, 1));
    }
    /**
     * @param {!Arguments} func
     * @return {?}
     */
    function partialRight(func) {
      return createWrapper(func, 32, null, slice(arguments, 1));
    }
    /**
     * @param {!Object} fn
     * @param {number} wait
     * @param {!Object} options
     * @return {?}
     */
    function throttle(fn, wait, options) {
      /** @type {boolean} */
      var leading = true;
      /** @type {boolean} */
      var trailing = true;
      if (!isFunction(fn)) {
        throw new TypeError;
      }
      return options === false ? leading = false : isObject(options) && (leading = "leading" in options ? options.leading : leading, trailing = "trailing" in options ? options.trailing : trailing), debounceOptions.leading = leading, debounceOptions.maxWait = wait, debounceOptions.trailing = trailing, debounce(fn, wait, debounceOptions);
    }
    /**
     * @param {?} value
     * @param {!Arguments} name
     * @return {?}
     */
    function zip(value, name) {
      return createWrapper(name, 16, [value]);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function constant(value) {
      return function() {
        return value;
      };
    }
    /**
     * @param {string} func
     * @param {!Function} thisArg
     * @param {number} argCount
     * @return {?}
     */
    function createCallback(func, thisArg, argCount) {
      /** @type {string} */
      var type = typeof func;
      if (null == func || "function" == type) {
        return baseCreateCallback(func, thisArg, argCount);
      }
      if ("object" != type) {
        return property(func);
      }
      var props = keys(func);
      var i = props[0];
      var a = func[i];
      return 1 != props.length || a !== a || isObject(a) ? function(object) {
        var length = props.length;
        /** @type {boolean} */
        var result = false;
        for (; length-- && (result = baseIsEqual(object[props[length]], func[props[length]], null, true));) {
        }
        return result;
      } : function(tokens2) {
        var b = tokens2[i];
        return a === b && (0 !== a || 1 / a == 1 / b);
      };
    }
    /**
     * @param {string} text
     * @return {?}
     */
    function escape(text) {
      return null == text ? "" : String(text).replace(_REPVARS, name);
    }
    /**
     * @param {!Array} value
     * @return {?}
     */
    function identity(value) {
      return value;
    }
    /**
     * @param {!Function} object
     * @param {!Object} source
     * @param {!Object} options
     * @return {undefined}
     */
    function mixin(object, source, options) {
      /** @type {boolean} */
      var chain = true;
      var dom = source && functions(source);
      if (!(source && (options || dom.length))) {
        if (null == options) {
          /** @type {!Object} */
          options = source;
        }
        /** @type {function(?, !Object): undefined} */
        ctor = lodashWrapper;
        /** @type {!Function} */
        source = object;
        /** @type {function(!Object): ?} */
        object = lodash;
        dom = functions(source);
      }
      if (options === false) {
        /** @type {boolean} */
        chain = false;
      } else {
        if (isObject(options) && "chain" in options) {
          chain = options.chain;
        }
      }
      /** @type {!Function} */
      var ctor = object;
      var isFunc = isFunction(ctor);
      forEach(dom, function(key) {
        var e = object[key] = source[key];
        if (isFunc) {
          /**
           * @return {?}
           */
          ctor.prototype[key] = function() {
            var chainAll = this.__chain__;
            var value = this.__wrapped__;
            /** @type {!Array} */
            var args = [value];
            push.apply(args, arguments);
            var result = e.apply(object, args);
            if (chain || chainAll) {
              if (value === result && isObject(result)) {
                return this;
              }
              result = new ctor(result);
              result.__chain__ = chainAll;
            }
            return result;
          };
        }
      });
    }
    /**
     * @return {?}
     */
    function noConflict() {
      return context._ = node, this;
    }
    /**
     * @return {undefined}
     */
    function noop() {
    }
    /**
     * @param {string} name
     * @return {?}
     */
    function property(name) {
      return function(lookupSoFar) {
        return lookupSoFar[name];
      };
    }
    /**
     * @param {number} min
     * @param {number} max
     * @param {number} floating
     * @return {?}
     */
    function random(min, max, floating) {
      /** @type {boolean} */
      var reverseIsSingle = null == min;
      /** @type {boolean} */
      var reverseValue = null == max;
      if (null == floating && ("boolean" == typeof min && reverseValue ? (floating = min, min = 1) : reverseValue || "boolean" != typeof max || (floating = max, reverseValue = true)), reverseIsSingle && reverseValue && (max = 1), min = +min || 0, reverseValue ? (max = min, min = 0) : max = +max || 0, floating || min % 1 || max % 1) {
        var rand = nativeRandom();
        return nativeMin(min + rand * (max - min + parseFloat("1e-" + ((rand + "").length - 1))), max);
      }
      return baseRandom(min, max);
    }
    /**
     * @param {number} a
     * @param {number} b
     * @return {?}
     */
    function without(a, b) {
      if (a) {
        var value = a[b];
        return isFunction(value) ? a[b]() : value;
      }
    }
    /**
     * @param {!Object} text
     * @param {?} data
     * @param {!Object} options
     * @return {?}
     */
    function template(text, data, options) {
      var settings = lodash.templateSettings;
      text = String(text || "");
      options = defaults({}, options, settings);
      var rootIsItemUrl;
      var value = defaults({}, options.imports, settings.imports);
      var names = keys(value);
      var v = values(value);
      /** @type {number} */
      var j = 0;
      var interpolate = options.interpolate || reNoMatch;
      /** @type {string} */
      var url = "__p += '";
      var regMatcher = RegExp((options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$", "g");
      text.replace(regMatcher, function(otag, link, interpolateValue, esTemplateValue, isSlidingUp, i) {
        return interpolateValue || (interpolateValue = esTemplateValue), url = url + text.slice(j, i).replace(a, val), link && (url = url + ("' +\n__e(" + link + ") +\n'")), isSlidingUp && (rootIsItemUrl = true, url = url + ("';\n" + isSlidingUp + ";\n__p += '")), interpolateValue && (url = url + ("' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'")), j = i + otag.length, otag;
      });
      url = url + "';\n";
      var variable = options.variable;
      var hasVariable = variable;
      if (!hasVariable) {
        /** @type {string} */
        variable = "obj";
        /** @type {string} */
        url = "with (" + variable + ") {\n" + url + "\n}\n";
      }
      url = (rootIsItemUrl ? url.replace(regRelative, "") : url).replace(rbreakright, "$1").replace(_RE_DOT, "$1;");
      /** @type {string} */
      url = "function(" + variable + ") {\n" + (hasVariable ? "" : variable + " || (" + variable + " = {});\n") + "var __t, __p = '', __e = _.escape" + (rootIsItemUrl ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + url + "return __p\n}";
      /** @type {string} */
      var src = "\n/*\n//# sourceURL=" + (options.sourceURL || "/lodash/template/source[" + L++ + "]") + "\n*/";
      try {
        var result = Function(names, "return " + url + src).apply(undefined, v);
      } catch (vurl) {
        throw vurl.source = url, vurl;
      }
      return data ? result(data) : (result.source = url, result);
    }
    /**
     * @param {number} count
     * @param {?} callback
     * @param {!Array} thisArg
     * @return {?}
     */
    function times(count, callback, thisArg) {
      /** @type {number} */
      count = (count = +count) > -1 ? count : 0;
      /** @type {number} */
      var i = -1;
      var ret = Array(count);
      callback = baseCreateCallback(callback, thisArg, 1);
      for (; ++i < count;) {
        ret[i] = callback(i);
      }
      return ret;
    }
    /**
     * @param {string} string
     * @return {?}
     */
    function unescape(string) {
      return null == string ? "" : String(string).replace(reUnescapedHtml, escapeHtmlChar);
    }
    /**
     * @param {string} prefix
     * @return {?}
     */
    function uniqueId(prefix) {
      /** @type {number} */
      var myCallId = ++callId;
      return String(null == prefix ? "" : prefix) + myCallId;
    }
    /**
     * @param {!Object} value
     * @return {?}
     */
    function chain(value) {
      return value = new lodashWrapper(value), value.__chain__ = true, value;
    }
    /**
     * @param {?} value
     * @param {?} interceptor
     * @return {?}
     */
    function tap(value, interceptor) {
      return interceptor(value), value;
    }
    /**
     * @return {?}
     */
    function wrapperChain() {
      return this.__chain__ = true, this;
    }
    /**
     * @return {?}
     */
    function stringify() {
      return String(this.__wrapped__);
    }
    /**
     * @return {?}
     */
    function wrapperValueOf() {
      return this.__wrapped__;
    }
    context = context ? _.defaults(root.Object(), context, _.pick(root, propWhitelist)) : root;
    var Array = context.Array;
    var Boolean = context.Boolean;
    var Date = context.Date;
    var error = context.Error;
    var Function = context.Function;
    var Math = context.Math;
    var Number = context.Number;
    var Object = context.Object;
    var RegExp = context.RegExp;
    var String = context.String;
    var TypeError = context.TypeError;
    /** @type {!Array} */
    var arrayRef = [];
    var errorProto = error.prototype;
    var objectProto = Object.prototype;
    var stringProto = String.prototype;
    var node = context._;
    var toString = objectProto.toString;
    var dateTest = RegExp("^" + String(toString).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$");
    var ceil = Math.ceil;
    var clearTimeout = context.clearTimeout;
    var nativeFloor = Math.floor;
    var funcToString$1 = Function.prototype.toString;
    var getPrototypeOf = isNative(getPrototypeOf = Object.getPrototypeOf) && getPrototypeOf;
    var hasOwnProperty = objectProto.hasOwnProperty;
    /** @type {function(this:IArrayLike<T>, ...T): number} */
    var push = arrayRef.push;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var setTimeout = context.setTimeout;
    /** @type {function(this:IArrayLike<T>, *=, *=, ...T): !Array<T>} */
    var input = arrayRef.splice;
    /** @type {function(this:IArrayLike<?>, ...*): number} */
    var unshift = arrayRef.unshift;
    var defineProperty = function() {
      try {
        var o = {};
        var func = isNative(func = Object.defineProperty) && func;
        var result = func(o, o, o) && func;
      } catch (d) {
      }
      return result;
    }();
    var nativeCreate = isNative(nativeCreate = Object.create) && nativeCreate;
    var nativeIsArray = isNative(nativeIsArray = Array.isArray) && nativeIsArray;
    var nativeIsFinite = context.isFinite;
    var nativeIsNaN = context.isNaN;
    var nativeKeys = isNative(nativeKeys = Object.keys) && nativeKeys;
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    var nativeParseInt = context.parseInt;
    var nativeRandom = Math.random;
    var ctorByClass = {};
    ctorByClass[arrayClass] = Array;
    ctorByClass[boolClass] = Boolean;
    ctorByClass[dateClass] = Date;
    ctorByClass[funcClass] = Function;
    ctorByClass[objectClass] = Object;
    ctorByClass[numberClass] = Number;
    ctorByClass[regexpClass] = RegExp;
    ctorByClass[stringClass] = String;
    var nonEnumProps = {};
    nonEnumProps[arrayClass] = nonEnumProps[dateClass] = nonEnumProps[numberClass] = {
      constructor : true,
      toLocaleString : true,
      toString : true,
      valueOf : true
    };
    nonEnumProps[boolClass] = nonEnumProps[stringClass] = {
      constructor : true,
      toString : true,
      valueOf : true
    };
    nonEnumProps[errorClass] = nonEnumProps[funcClass] = nonEnumProps[regexpClass] = {
      constructor : true,
      toString : true
    };
    nonEnumProps[objectClass] = {
      constructor : true
    };
    (function() {
      /** @type {number} */
      var length = shadowedProps.length;
      for (; length--;) {
        var key = shadowedProps[length];
        var className;
        for (className in nonEnumProps) {
          if (hasOwnProperty.call(nonEnumProps, className) && !hasOwnProperty.call(nonEnumProps[className], key)) {
            /** @type {boolean} */
            nonEnumProps[className][key] = false;
          }
        }
      }
    })();
    lodashWrapper.prototype = lodash.prototype;
    var support = lodash.support = {};
    !function() {
      /**
       * @return {undefined}
       */
      var ctor = function() {
        /** @type {number} */
        this.x = 1;
      };
      var params = {
        0 : 1,
        length : 1
      };
      /** @type {!Array} */
      var s = [];
      ctor.prototype = {
        valueOf : 1,
        y : 1
      };
      var x;
      for (x in new ctor) {
        s.push(x);
      }
      for (x in arguments) {
      }
      /** @type {boolean} */
      support.argsClass = toString.call(arguments) == argsClass;
      /** @type {boolean} */
      support.argsObject = arguments.constructor == Object && !(arguments instanceof Array);
      support.enumErrorProps = propertyIsEnumerable.call(errorProto, "message") || propertyIsEnumerable.call(errorProto, "name");
      support.enumPrototypes = propertyIsEnumerable.call(ctor, "prototype");
      /** @type {boolean} */
      support.funcDecomp = !isNative(context.WinRTError) && targetArena.test(runInContext);
      /** @type {boolean} */
      support.funcNames = "string" == typeof Function.name;
      /** @type {boolean} */
      support.nonEnumArgs = 0 != x;
      /** @type {boolean} */
      support.nonEnumShadows = !/valueOf/.test(s);
      /** @type {boolean} */
      support.ownLast = "x" != s[0];
      /** @type {boolean} */
      support.spliceObjects = (arrayRef.splice.call(params, 0, 1), !params[0]);
      /** @type {boolean} */
      support.unindexedChars = "x"[0] + Object("x")[0] != "xx";
      try {
        /** @type {boolean} */
        support.nodeClass = !(toString.call(document) == objectClass && !({
          toString : 0
        } + ""));
      } catch (f) {
        /** @type {boolean} */
        support.nodeClass = true;
      }
    }(1);
    lodash.templateSettings = {
      escape : /<%-([\s\S]+?)%>/g,
      evaluate : /<%([\s\S]+?)%>/g,
      interpolate : reInterpolate,
      variable : "",
      imports : {
        _ : lodash
      }
    };
    /**
     * @param {!Object} obj
     * @return {?}
     */
    var iteratorTemplate = function(obj) {
      /** @type {string} */
      var names = "var index, iterable = " + obj.firstArg + ", result = " + obj.init + ";\nif (!iterable) return result;\n" + obj.top + ";";
      if (obj.array) {
        /** @type {string} */
        names = names + ("\nvar length = iterable.length; index = -1;\nif (" + obj.array + ") {  ");
        if (support.unindexedChars) {
          /** @type {string} */
          names = names + "\n  if (isString(iterable)) {\n    iterable = iterable.split('')\n  }  ";
        }
        /** @type {string} */
        names = names + ("\n  while (++index < length) {\n    " + obj.loop + ";\n  }\n}\nelse {  ");
      } else {
        if (support.nonEnumArgs) {
          /** @type {string} */
          names = names + ("\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += '';\n      " + obj.loop + ";\n    }\n  } else {  ");
        }
      }
      if (support.enumPrototypes) {
        /** @type {string} */
        names = names + "\n  var skipProto = typeof iterable == 'function';\n  ";
      }
      if (support.enumErrorProps) {
        /** @type {string} */
        names = names + "\n  var skipErrorProps = iterable === errorProto || iterable instanceof Error;\n  ";
      }
      /** @type {!Array} */
      var arr = [];
      if (support.enumPrototypes && arr.push('!(skipProto && index == "prototype")'), support.enumErrorProps && arr.push('!(skipErrorProps && (index == "message" || index == "name"))'), obj.useHas && obj.keys) {
        /** @type {string} */
        names = names + "\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] && keys(iterable),\n      length = ownProps ? ownProps.length : 0;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n";
        if (arr.length) {
          /** @type {string} */
          names = names + ("    if (" + arr.join(" && ") + ") {\n  ");
        }
        /** @type {string} */
        names = names + (obj.loop + ";    ");
        if (arr.length) {
          /** @type {string} */
          names = names + "\n    }";
        }
        /** @type {string} */
        names = names + "\n  }  ";
      } else {
        if (names = names + "\n  for (index in iterable) {\n", obj.useHas && arr.push("hasOwnProperty.call(iterable, index)"), arr.length && (names = names + ("    if (" + arr.join(" && ") + ") {\n  ")), names = names + (obj.loop + ";    "), arr.length && (names = names + "\n    }"), names = names + "\n  }    ", support.nonEnumShadows) {
          /** @type {string} */
          names = names + "\n\n  if (iterable !== objectProto) {\n    var ctor = iterable.constructor,\n        isProto = iterable === (ctor && ctor.prototype),\n        className = iterable === stringProto ? stringClass : iterable === errorProto ? errorClass : toString.call(iterable),\n        nonEnum = nonEnumProps[className];\n      ";
          /** @type {number} */
          k = 0;
          for (; 7 > k; k++) {
            /** @type {string} */
            names = names + ("\n    index = '" + obj.shadowedProps[k] + "';\n    if ((!(isProto && nonEnum[index]) && hasOwnProperty.call(iterable, index))");
            if (!obj.useHas) {
              /** @type {string} */
              names = names + " || (!nonEnum[index] && iterable[index] !== objectProto[index])";
            }
            /** @type {string} */
            names = names + (") {\n      " + obj.loop + ";\n    }      ");
          }
          /** @type {string} */
          names = names + "\n  }    ";
        }
      }
      return (obj.array || support.nonEnumArgs) && (names = names + "\n}"), names = names + (obj.bottom + ";\nreturn result");
    };
    if (!nativeCreate) {
      createObject = function() {
        /**
         * @return {undefined}
         */
        function a() {
        }
        return function(c) {
          if (isObject(c)) {
            /** @type {!Object} */
            a.prototype = c;
            var crazy = new a;
            /** @type {null} */
            a.prototype = null;
          }
          return crazy || context.Object();
        };
      }();
    }
    /** @type {!Function} */
    var test = defineProperty ? function(func, val) {
      /** @type {!Array} */
      descriptor.value = val;
      defineProperty(func, "__bindData__", descriptor);
    } : noop;
    if (!support.argsClass) {
      /**
       * @param {!Object} value
       * @return {?}
       */
      isArguments = function(value) {
        return value && "object" == typeof value && "number" == typeof value.length && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee") || false;
      };
    }
    var isArray = nativeIsArray || function(value) {
      return value && "object" == typeof value && "number" == typeof value.length && toString.call(value) == arrayClass || false;
    };
    var shimKeys = createIterator({
      args : "object",
      init : "[]",
      top : "if (!(objectTypes[typeof object])) return result",
      loop : "result.push(index)"
    });
    var keys = nativeKeys ? function(object) {
      return isObject(object) ? support.enumPrototypes && "function" == typeof object || support.nonEnumArgs && object.length && isArguments(object) ? shimKeys(object) : nativeKeys(object) : [];
    } : shimKeys;
    var eachIteratorOptions = {
      args : "collection, callback, thisArg",
      top : "callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3)",
      array : "typeof length == 'number'",
      keys : keys,
      loop : "if (callback(iterable[index], index, collection) === false) return result"
    };
    var defaultsIteratorOptions = {
      args : "object, source, guard",
      top : "var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {",
      keys : keys,
      loop : "if (typeof result[index] == 'undefined') result[index] = iterable[index]",
      bottom : "  }\n}"
    };
    var forOwnIteratorOptions = {
      top : "if (!objectTypes[typeof iterable]) return result;\n" + eachIteratorOptions.top,
      array : false
    };
    var x = {
      "&" : "&amp;",
      "<" : "&lt;",
      ">" : "&gt;",
      '"' : "&quot;",
      "'" : "&#39;"
    };
    var result = invert(x);
    var reUnescapedHtml = RegExp("(" + keys(result).join("|") + ")", "g");
    var _REPVARS = RegExp("[" + keys(x).join("") + "]", "g");
    var each = createIterator(eachIteratorOptions);
    var assign = createIterator(defaultsIteratorOptions, {
      top : defaultsIteratorOptions.top.replace(";", ";\nif (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n  var callback = baseCreateCallback(args[--argsLength - 1], args[argsLength--], 2);\n} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n  callback = args[--argsLength];\n}"),
      loop : "result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]"
    });
    var defaults = createIterator(defaultsIteratorOptions);
    var forIn = createIterator(eachIteratorOptions, forOwnIteratorOptions, {
      useHas : false
    });
    var forOwn = createIterator(eachIteratorOptions, forOwnIteratorOptions);
    if (isFunction(/x/)) {
      /**
       * @param {!Object} value
       * @return {?}
       */
      isFunction = function(value) {
        return "function" == typeof value && toString.call(value) == funcClass;
      };
    }
    /** @type {function(!Object): ?} */
    var isPlainObject = getPrototypeOf ? function(value) {
      if (!value || toString.call(value) != objectClass || !support.argsClass && isArguments(value)) {
        return false;
      }
      var valueOf = value.valueOf;
      var objProto = isNative(valueOf) && (objProto = getPrototypeOf(valueOf)) && getPrototypeOf(objProto);
      return objProto ? value == objProto || getPrototypeOf(value) == objProto : shimIsPlainObject(value);
    } : shimIsPlainObject;
    var countBy = send(function(ctor, b, prop) {
      if (hasOwnProperty.call(ctor, prop)) {
        ctor[prop]++;
      } else {
        /** @type {number} */
        ctor[prop] = 1;
      }
    });
    var stubFalse = send(function(params, c, name) {
      (hasOwnProperty.call(params, name) ? params[name] : params[name] = []).push(c);
    });
    var toFinite = send(function(a, sNewObjName, iObjNamePosition) {
      a[iObjNamePosition] = sNewObjName;
    });
    /** @type {function(!Function, string, !Object): ?} */
    var pluck = map;
    /** @type {function(!Object, string, !Object): ?} */
    var where = filter;
    var now = isNative(now = Date.now) && now || function() {
      return (new Date).getTime();
    };
    var parseInt = 8 == nativeParseInt(whitespace + "08") ? nativeParseInt : function(value, radix) {
      return nativeParseInt(isString(value) ? value.replace(reLeadingSpacesAndZeros, "") : value, radix || 0);
    };
    return lodash.after = after, lodash.assign = assign, lodash.at = at, lodash.bind = bind, lodash.bindAll = bindAll, lodash.bindKey = bindKey, lodash.chain = chain, lodash.compact = compact, lodash.compose = compose, lodash.constant = constant, lodash.countBy = countBy, lodash.create = create, lodash.createCallback = createCallback, lodash.curry = curry, lodash.debounce = debounce, lodash.defaults = defaults, lodash.defer = defer, lodash.delay = delay, lodash.difference = difference, lodash.filter = 
    filter, lodash.flatten = update, lodash.forEach = forEach, lodash.forEachRight = toArray, lodash.forIn = forIn, lodash.forInRight = add, lodash.forOwn = forOwn, lodash.forOwnRight = get, lodash.functions = functions, lodash.groupBy = stubFalse, lodash.indexBy = toFinite, lodash.initial = initial, lodash.intersection = intersection, lodash.invert = invert, lodash.invoke = invoke, lodash.keys = keys, lodash.map = map, lodash.mapValues = mapValues, lodash.max = max, lodash.memoize = memoize, lodash.merge = 
    merge, lodash.min = min, lodash.omit = omit, lodash.once = once, lodash.pairs = pairs, lodash.partial = partial, lodash.partialRight = partialRight, lodash.pick = pick, lodash.pluck = pluck, lodash.property = property, lodash.pull = cloneDeep, lodash.range = range, lodash.reject = reject, lodash.remove = remove, lodash.rest = rest, lodash.shuffle = shuffle, lodash.sortBy = sortBy, lodash.tap = tap, lodash.throttle = throttle, lodash.times = times, lodash.toArray = walk, lodash.transform = value, 
    lodash.union = union, lodash.uniq = uniq, lodash.values = values, lodash.where = where, lodash.without = slice, lodash.wrap = zip, lodash.xor = flatten, lodash.zip = unzip, lodash.zipObject = zipObject, lodash.collect = map, lodash.drop = rest, lodash.each = forEach, lodash.eachRight = toArray, lodash.extend = assign, lodash.methods = functions, lodash.object = zipObject, lodash.select = filter, lodash.tail = rest, lodash.unique = uniq, lodash.unzip = unzip, mixin(lodash), lodash.clone = clone, 
    lodash.cloneDeep = cloneWith, lodash.contains = contains, lodash.escape = escape, lodash.every = every, lodash.find = find, lodash.findIndex = findIndex, lodash.findKey = findKey, lodash.findLast = groupBy, lodash.findLastIndex = wrap, lodash.findLastKey = run, lodash.has = has, lodash.identity = identity, lodash.indexOf = indexOf, lodash.isArguments = isArguments, lodash.isArray = isArray, lodash.isBoolean = isBoolean, lodash.isDate = isDate, lodash.isElement = isElement, lodash.isEmpty = isEmpty, 
    lodash.isEqual = isEqual, lodash.isFinite = isFinite, lodash.isFunction = isFunction, lodash.isNaN = isNaN, lodash.isNull = isNull, lodash.isNumber = isNumber, lodash.isObject = isObject, lodash.isPlainObject = isPlainObject, lodash.isRegExp = isRegExp, lodash.isString = isString, lodash.isUndefined = isUndefined, lodash.lastIndexOf = lastIndexOf, lodash.mixin = mixin, lodash.noConflict = noConflict, lodash.noop = noop, lodash.now = now, lodash.parseInt = parseInt, lodash.random = random, lodash.reduce = 
    reduce, lodash.reduceRight = reduceRight, lodash.result = without, lodash.runInContext = runInContext, lodash.size = size, lodash.some = some, lodash.sortedIndex = sortedIndex, lodash.template = template, lodash.unescape = unescape, lodash.uniqueId = uniqueId, lodash.all = every, lodash.any = some, lodash.detect = find, lodash.findWhere = find, lodash.foldl = reduce, lodash.foldr = reduceRight, lodash.include = contains, lodash.inject = reduce, mixin(function() {
      var result = {};
      return forOwn(lodash, function(fn, methodName) {
        if (!lodash.prototype[methodName]) {
          result[methodName] = fn;
        }
      }), result;
    }(), false), lodash.first = first, lodash.last = last, lodash.sample = sample, lodash.take = first, lodash.head = first, forOwn(lodash, function(func, methodName) {
      /** @type {boolean} */
      var value = "sample" !== methodName;
      if (!lodash.prototype[methodName]) {
        /**
         * @param {?} arg2
         * @param {?} col
         * @return {?}
         */
        lodash.prototype[methodName] = function(arg2, col) {
          var chainAll = this.__chain__;
          var result = func(this.__wrapped__, arg2, col);
          return chainAll || null != arg2 && (!col || value && "function" == typeof arg2) ? new lodashWrapper(result, chainAll) : result;
        };
      }
    }), lodash.VERSION = "2.4.1", lodash.prototype.chain = wrapperChain, lodash.prototype.toString = stringify, lodash.prototype.value = wrapperValueOf, lodash.prototype.valueOf = wrapperValueOf, each(["join", "pop", "shift"], function(methodName) {
      var func = arrayRef[methodName];
      /**
       * @return {?}
       */
      lodash.prototype[methodName] = function() {
        var chainAll = this.__chain__;
        var result = func.apply(this.__wrapped__, arguments);
        return chainAll ? new lodashWrapper(result, chainAll) : result;
      };
    }), each(["push", "reverse", "sort", "unshift"], function(methodName) {
      var func = arrayRef[methodName];
      /**
       * @return {?}
       */
      lodash.prototype[methodName] = function() {
        return func.apply(this.__wrapped__, arguments), this;
      };
    }), each(["concat", "slice", "splice"], function(methodName) {
      var func = arrayRef[methodName];
      /**
       * @return {?}
       */
      lodash.prototype[methodName] = function() {
        return new lodashWrapper(func.apply(this.__wrapped__, arguments), this.__chain__);
      };
    }), support.spliceObjects || each(["pop", "shift", "splice"], function(methodName) {
      var func = arrayRef[methodName];
      /** @type {boolean} */
      var isSplice = "splice" == methodName;
      /**
       * @return {?}
       */
      lodash.prototype[methodName] = function() {
        var chainAll = this.__chain__;
        var value = this.__wrapped__;
        var result = func.apply(value, arguments);
        return 0 === value.length && delete value[0], chainAll || isSplice ? new lodashWrapper(result, chainAll) : result;
      };
    }), lodash;
  }
  var undefined;
  /** @type {!Array} */
  var args = [];
  /** @type {!Array} */
  var content = [];
  /** @type {number} */
  var callId = 0;
  var Rows = {};
  /** @type {string} */
  var keyPrefix = +new Date + "";
  /** @type {number} */
  var largeArraySize = 75;
  /** @type {number} */
  var len = 40;
  /** @type {string} */
  var whitespace = " \t\x0B\f\u00a0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000";
  /** @type {!RegExp} */
  var regRelative = /\b__p \+= '';/g;
  /** @type {!RegExp} */
  var rbreakright = /\b(__p \+=) '' \+/g;
  /** @type {!RegExp} */
  var _RE_DOT = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
  /** @type {!RegExp} */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
  /** @type {!RegExp} */
  var temporaryStyles = /\w*$/;
  /** @type {!RegExp} */
  var isWidgetCssFileReg = /^\s*function[ \n\r\t]+\w/;
  /** @type {!RegExp} */
  var reInterpolate = /<%=([\s\S]+?)%>/g;
  /** @type {!RegExp} */
  var reLeadingSpacesAndZeros = RegExp("^[" + whitespace + "]*0+(?=.$)");
  /** @type {!RegExp} */
  var reNoMatch = /($^)/;
  /** @type {!RegExp} */
  var targetArena = /\bthis\b/;
  /** @type {!RegExp} */
  var a = /['\n\r\t\u2028\u2029\\]/g;
  /** @type {!Array} */
  var propWhitelist = ["Array", "Boolean", "Date", "Error", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setTimeout"];
  /** @type {!Array} */
  var shadowedProps = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  /** @type {number} */
  var L = 0;
  /** @type {string} */
  var argsClass = "[object Arguments]";
  /** @type {string} */
  var arrayClass = "[object Array]";
  /** @type {string} */
  var boolClass = "[object Boolean]";
  /** @type {string} */
  var dateClass = "[object Date]";
  /** @type {string} */
  var errorClass = "[object Error]";
  /** @type {string} */
  var funcClass = "[object Function]";
  /** @type {string} */
  var numberClass = "[object Number]";
  /** @type {string} */
  var objectClass = "[object Object]";
  /** @type {string} */
  var regexpClass = "[object RegExp]";
  /** @type {string} */
  var stringClass = "[object String]";
  var cloneableClasses = {};
  /** @type {boolean} */
  cloneableClasses[funcClass] = false;
  /** @type {boolean} */
  cloneableClasses[argsClass] = cloneableClasses[arrayClass] = cloneableClasses[boolClass] = cloneableClasses[dateClass] = cloneableClasses[numberClass] = cloneableClasses[objectClass] = cloneableClasses[regexpClass] = cloneableClasses[stringClass] = true;
  var debounceOptions = {
    leading : false,
    maxWait : 0,
    trailing : false
  };
  var descriptor = {
    configurable : false,
    enumerable : false,
    value : null,
    writable : false
  };
  var iteratorData = {
    args : "",
    array : null,
    bottom : "",
    firstArg : "",
    init : "",
    keys : null,
    loop : "",
    shadowedProps : null,
    support : null,
    top : "",
    useHas : false
  };
  var objectTypes = {
    "boolean" : false,
    "function" : true,
    object : true,
    number : false,
    string : false,
    undefined : false
  };
  var subwikiListsCache = {
    "\\" : "\\",
    "'" : "'",
    "\n" : "n",
    "\r" : "r",
    "\t" : "t",
    "\u2028" : "u2028",
    "\u2029" : "u2029"
  };
  var root = objectTypes[typeof window] && window || this;
  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;
  var node = objectTypes[typeof global] && global;
  if (!(!node || node.global !== node && node.window !== node)) {
    root = node;
  }
  var _ = runInContext();
  if ("function" == typeof define && "object" == typeof define.amd && define.amd) {
    root._ = _;
    define(function() {
      return _;
    });
  } else {
    if (freeExports && freeModule) {
      if (moduleExports) {
        (freeModule.exports = _)._ = _;
      } else {
        freeExports._ = _;
      }
    } else {
      root._ = _;
    }
  }
}.call(this);
