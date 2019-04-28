"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.colorStyle = exports.textStyle = exports.buttonStyle = exports.left = exports.bottom = exports.right = exports.top = exports.zIndex = exports.position = exports.backgroundRepeat = exports.backgroundPosition = exports.backgroundSize = exports.backgroundImage = exports.background = exports.overflow = exports.opacity = exports.boxShadow = exports.borders = exports.borderRadius = exports.borderLeft = exports.borderBottom = exports.borderRight = exports.borderTop = exports.borderColor = exports.borderStyle = exports.borderWidth = exports.border = exports.gridArea = exports.gridTemplateAreas = exports.gridTemplateRows = exports.gridTemplateColumns = exports.gridAutoRows = exports.gridAutoColumns = exports.gridAutoFlow = exports.gridRow = exports.gridColumn = exports.gridRowGap = exports.gridColumnGap = exports.gridGap = exports.order = exports.alignSelf = exports.justifySelf = exports.flex = exports.flexDirection = exports.flexBasis = exports.flexWrap = exports.justifyContent = exports.justifyItems = exports.alignContent = exports.alignItems = exports.verticalAlign = exports.size = exports.minHeight = exports.maxHeight = exports.height = exports.minWidth = exports.maxWidth = exports.display = exports.letterSpacing = exports.fontStyle = exports.textAlign = exports.lineHeight = exports.fontWeight = exports.fontFamily = exports.fontSize = exports.getPx = exports.width = exports.getWidth = exports.color = exports.backgroundColor = exports.textColor = exports.space = exports.paddingRight = exports.paddingLeft = exports.paddingBottom = exports.paddingTop = exports.padding = exports.marginRight = exports.marginLeft = exports.marginBottom = exports.marginTop = exports.margin = exports.variant = exports.mapProps = exports.compose = exports.style = exports.createMediaQuery = exports.px = exports.num = exports.isObject = exports.is = exports.themeGet = exports.get = exports.cloneFunction = exports.propType = exports.defaultBreakpoints = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var defaultBreakpoints = [40, 52, 64].map(function (n) {
  return n + 'em';
});
exports.defaultBreakpoints = defaultBreakpoints;

var propType = _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string, _propTypes.default.array, _propTypes.default.object]);

exports.propType = propType;

var cloneFunction = function cloneFunction(fn) {
  return function () {
    return fn.apply(void 0, arguments);
  };
};

exports.cloneFunction = cloneFunction;

var get = function get(obj) {
  for (var _len = arguments.length, paths = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    paths[_key - 1] = arguments[_key];
  }

  var value = paths.reduce(function (a, path) {
    if (is(a)) return a;
    var keys = typeof path === 'string' ? path.split('.') : [path];
    return keys.reduce(function (a, key) {
      return a && is(a[key]) ? a[key] : null;
    }, obj);
  }, null);
  return is(value) ? value : paths[paths.length - 1];
};

exports.get = get;

var themeGet = function themeGet(path, fallback) {
  if (fallback === void 0) {
    fallback = null;
  }

  return function (props) {
    return get(props.theme, path, fallback);
  };
};

exports.themeGet = themeGet;

var is = function is(n) {
  return n !== undefined && n !== null;
};

exports.is = is;

var isObject = function isObject(n) {
  return typeof n === 'object' && n !== null;
};

exports.isObject = isObject;

var num = function num(n) {
  return typeof n === 'number' && !isNaN(n);
};

exports.num = num;

var px = function px(n) {
  return num(n) && n !== 0 ? n + 'px' : n;
};

exports.px = px;

var createMediaQuery = function createMediaQuery(n) {
  return "@media screen and (min-width: " + px(n) + ")";
};

exports.createMediaQuery = createMediaQuery;

var getValue = function getValue(n, scale) {
  return get(scale, n);
};

var style = function style(_ref) {
  var _func$propTypes;

  var prop = _ref.prop,
      cssProperty = _ref.cssProperty,
      alias = _ref.alias,
      key = _ref.key,
      _ref$transformValue = _ref.transformValue,
      transformValue = _ref$transformValue === void 0 ? getValue : _ref$transformValue,
      _ref$scale = _ref.scale,
      defaultScale = _ref$scale === void 0 ? {} : _ref$scale;
  var property = cssProperty || prop;

  var func = function func(props) {
    var value = get(props, prop, alias, null);
    if (!is(value)) return null;
    var scale = get(props.theme, key, defaultScale);

    var createStyle = function createStyle(n) {
      var _ref2;

      return is(n) ? (_ref2 = {}, _ref2[property] = transformValue(n, scale), _ref2) : null;
    };

    if (!isObject(value)) return createStyle(value);
    var breakpoints = get(props.theme, 'breakpoints', defaultBreakpoints);
    var styles = [];

    if (Array.isArray(value)) {
      styles.push(createStyle(value[0]));

      for (var i = 1; i < value.slice(0, breakpoints.length + 1).length; i++) {
        var rule = createStyle(value[i]);

        if (rule) {
          var _styles$push;

          var media = createMediaQuery(breakpoints[i - 1]);
          styles.push((_styles$push = {}, _styles$push[media] = rule, _styles$push));
        }
      }
    } else {
      for (var _key2 in value) {
        var breakpoint = breakpoints[_key2];

        var _media = createMediaQuery(breakpoint);

        var _rule = createStyle(value[_key2]);

        if (!breakpoint) {
          styles.unshift(_rule);
        } else {
          var _styles$push2;

          styles.push((_styles$push2 = {}, _styles$push2[_media] = _rule, _styles$push2));
        }
      }

      styles.sort();
    }

    return styles;
  };

  func.propTypes = (_func$propTypes = {}, _func$propTypes[prop] = cloneFunction(propType), _func$propTypes);
  func.propTypes[prop].meta = {
    prop: prop,
    themeKey: key
  };

  if (alias) {
    func.propTypes[alias] = cloneFunction(propType);
    func.propTypes[alias].meta = {
      prop: alias,
      themeKey: key
    };
  }

  return func;
};

exports.style = style;

var compose = function compose() {
  for (var _len2 = arguments.length, funcs = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
    funcs[_key3] = arguments[_key3];
  }

  var func = function func(props) {
    var n = funcs.map(function (fn) {
      return fn(props);
    }).filter(Boolean);
    return n;
  };

  func.propTypes = {};
  funcs.forEach(function (fn) {
    func.propTypes = (0, _extends2.default)({}, func.propTypes, fn.propTypes);
  });
  return func;
};

exports.compose = compose;

var mapProps = function mapProps(mapper) {
  return function (func) {
    var next = function next(props) {
      return func(mapper(props));
    };

    for (var key in func) {
      next[key] = func[key];
    }

    return next;
  };
};

exports.mapProps = mapProps;

var variant = function variant(_ref3) {
  var _fn$propTypes;

  var key = _ref3.key,
      _ref3$prop = _ref3.prop,
      prop = _ref3$prop === void 0 ? 'variant' : _ref3$prop;

  var fn = function fn(props) {
    return get(props.theme, [key, props[prop]].join('.'), null);
  };

  fn.propTypes = (_fn$propTypes = {}, _fn$propTypes[prop] = _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]), _fn$propTypes);
  return fn;
}; // space


exports.variant = variant;
var spaceScale = [0, 4, 8, 16, 32, 64, 128, 256, 512];

var getSpace = function getSpace(n, scale) {
  if (!num(n)) {
    return px(get(scale, n, n));
  }

  var isNegative = n < 0;
  var absolute = Math.abs(n);
  var value = get(scale, absolute);

  if (!num(value)) {
    return isNegative ? '-' + value : value;
  }

  return px(value * (isNegative ? -1 : 1));
};

var margin = style({
  prop: 'margin',
  alias: 'm',
  key: 'space',
  transformValue: getSpace,
  scale: spaceScale
});
exports.margin = margin;
var marginTop = style({
  prop: 'marginTop',
  alias: 'mt',
  key: 'space',
  transformValue: getSpace,
  scale: spaceScale
});
exports.marginTop = marginTop;
var marginBottom = style({
  prop: 'marginBottom',
  alias: 'mb',
  key: 'space',
  transformValue: getSpace,
  scale: spaceScale
});
exports.marginBottom = marginBottom;
var marginLeft = style({
  prop: 'marginLeft',
  alias: 'ml',
  key: 'space',
  transformValue: getSpace,
  scale: spaceScale
});
exports.marginLeft = marginLeft;
var marginRight = style({
  prop: 'marginRight',
  alias: 'mr',
  key: 'space',
  transformValue: getSpace,
  scale: spaceScale
});
exports.marginRight = marginRight;
var padding = style({
  prop: 'padding',
  alias: 'p',
  key: 'space',
  transformValue: getSpace,
  scale: spaceScale
});
exports.padding = padding;
var paddingTop = style({
  prop: 'paddingTop',
  alias: 'pt',
  key: 'space',
  transformValue: getSpace,
  scale: spaceScale
});
exports.paddingTop = paddingTop;
var paddingBottom = style({
  prop: 'paddingBottom',
  alias: 'pb',
  key: 'space',
  transformValue: getSpace,
  scale: spaceScale
});
exports.paddingBottom = paddingBottom;
var paddingLeft = style({
  prop: 'paddingLeft',
  alias: 'pl',
  key: 'space',
  transformValue: getSpace,
  scale: spaceScale
});
exports.paddingLeft = paddingLeft;
var paddingRight = style({
  prop: 'paddingRight',
  alias: 'pr',
  key: 'space',
  transformValue: getSpace,
  scale: spaceScale
});
exports.paddingRight = paddingRight;
var space = mapProps(function (props) {
  return (0, _extends2.default)({}, props, {
    mt: is(props.my) ? props.my : props.mt,
    mb: is(props.my) ? props.my : props.mb,
    ml: is(props.mx) ? props.mx : props.ml,
    mr: is(props.mx) ? props.mx : props.mr,
    pt: is(props.py) ? props.py : props.pt,
    pb: is(props.py) ? props.py : props.pb,
    pl: is(props.px) ? props.px : props.pl,
    pr: is(props.px) ? props.px : props.pr
  });
})(compose(margin, marginTop, marginBottom, marginLeft, marginRight, padding, paddingTop, paddingBottom, paddingLeft, paddingRight)); // color

exports.space = space;
var textColor = style({
  prop: 'color',
  key: 'colors'
});
exports.textColor = textColor;
var backgroundColor = style({
  prop: 'backgroundColor',
  alias: 'bg',
  key: 'colors'
});
exports.backgroundColor = backgroundColor;
var color = compose(textColor, backgroundColor); // width

exports.color = color;

var getWidth = function getWidth(n, scale) {
  return !num(n) || n > 1 ? px(n) : n * 100 + '%';
};

exports.getWidth = getWidth;
var width = style({
  prop: 'width',
  key: 'widths',
  transformValue: getWidth
}); // typography

exports.width = width;

var getPx = function getPx(n, scale) {
  return px(get(scale, n));
};

exports.getPx = getPx;
var fontSize = style({
  prop: 'fontSize',
  key: 'fontSizes',
  transformValue: getPx,
  scale: [12, 14, 16, 20, 24, 32, 48, 64, 72]
});
exports.fontSize = fontSize;
var fontFamily = style({
  prop: 'fontFamily',
  key: 'fonts'
});
exports.fontFamily = fontFamily;
var fontWeight = style({
  prop: 'fontWeight',
  key: 'fontWeights'
});
exports.fontWeight = fontWeight;
var lineHeight = style({
  prop: 'lineHeight',
  key: 'lineHeights'
});
exports.lineHeight = lineHeight;
var textAlign = style({
  prop: 'textAlign'
});
exports.textAlign = textAlign;
var fontStyle = style({
  prop: 'fontStyle'
});
exports.fontStyle = fontStyle;
var letterSpacing = style({
  prop: 'letterSpacing',
  key: 'letterSpacings',
  transformValue: getPx
}); // layout

exports.letterSpacing = letterSpacing;
var display = style({
  prop: 'display'
});
exports.display = display;
var maxWidth = style({
  prop: 'maxWidth',
  key: 'maxWidths',
  transformValue: getPx
});
exports.maxWidth = maxWidth;
var minWidth = style({
  prop: 'minWidth',
  key: 'minWidths',
  transformValue: getPx
});
exports.minWidth = minWidth;
var height = style({
  prop: 'height',
  key: 'heights',
  transformValue: getPx
});
exports.height = height;
var maxHeight = style({
  prop: 'maxHeight',
  key: 'maxHeights',
  transformValue: getPx
});
exports.maxHeight = maxHeight;
var minHeight = style({
  prop: 'minHeight',
  key: 'minHeights',
  transformValue: getPx
});
exports.minHeight = minHeight;
var size = mapProps(function (props) {
  return (0, _extends2.default)({}, props, {
    width: props.size,
    height: props.size
  });
})(compose(width, height));
exports.size = size;
var verticalAlign = style({
  prop: 'verticalAlign'
}); // flexbox

exports.verticalAlign = verticalAlign;
var alignItems = style({
  prop: 'alignItems'
});
exports.alignItems = alignItems;
var alignContent = style({
  prop: 'alignContent'
});
exports.alignContent = alignContent;
var justifyItems = style({
  prop: 'justifyItems'
});
exports.justifyItems = justifyItems;
var justifyContent = style({
  prop: 'justifyContent'
});
exports.justifyContent = justifyContent;
var flexWrap = style({
  prop: 'flexWrap'
});
exports.flexWrap = flexWrap;
var flexBasis = style({
  prop: 'flexBasis',
  transformValue: getWidth
});
exports.flexBasis = flexBasis;
var flexDirection = style({
  prop: 'flexDirection'
});
exports.flexDirection = flexDirection;
var flex = style({
  prop: 'flex'
});
exports.flex = flex;
var justifySelf = style({
  prop: 'justifySelf'
});
exports.justifySelf = justifySelf;
var alignSelf = style({
  prop: 'alignSelf'
});
exports.alignSelf = alignSelf;
var order = style({
  prop: 'order'
}); // grid

exports.order = order;
var gridGap = style({
  prop: 'gridGap',
  key: 'space',
  transformValue: getPx,
  scale: spaceScale
});
exports.gridGap = gridGap;
var gridColumnGap = style({
  prop: 'gridColumnGap',
  key: 'space',
  transformValue: getPx,
  scale: spaceScale
});
exports.gridColumnGap = gridColumnGap;
var gridRowGap = style({
  prop: 'gridRowGap',
  key: 'space',
  transformValue: getPx,
  scale: spaceScale
});
exports.gridRowGap = gridRowGap;
var gridColumn = style({
  prop: 'gridColumn'
});
exports.gridColumn = gridColumn;
var gridRow = style({
  prop: 'gridRow'
});
exports.gridRow = gridRow;
var gridAutoFlow = style({
  prop: 'gridAutoFlow'
});
exports.gridAutoFlow = gridAutoFlow;
var gridAutoColumns = style({
  prop: 'gridAutoColumns'
});
exports.gridAutoColumns = gridAutoColumns;
var gridAutoRows = style({
  prop: 'gridAutoRows'
});
exports.gridAutoRows = gridAutoRows;
var gridTemplateColumns = style({
  prop: 'gridTemplateColumns'
});
exports.gridTemplateColumns = gridTemplateColumns;
var gridTemplateRows = style({
  prop: 'gridTemplateRows'
});
exports.gridTemplateRows = gridTemplateRows;
var gridTemplateAreas = style({
  prop: 'gridTemplateAreas'
});
exports.gridTemplateAreas = gridTemplateAreas;
var gridArea = style({
  prop: 'gridArea'
}); // borders

exports.gridArea = gridArea;
var border = style({
  prop: 'border',
  key: 'borders'
});
exports.border = border;
var borderWidth = style({
  prop: 'borderWidth',
  key: 'borderWidths',
  transformValue: getPx
});
exports.borderWidth = borderWidth;
var borderStyle = style({
  prop: 'borderStyle',
  key: 'borderStyles'
});
exports.borderStyle = borderStyle;
var borderColor = style({
  prop: 'borderColor',
  key: 'colors'
});
exports.borderColor = borderColor;
var borderTop = style({
  prop: 'borderTop',
  key: 'borders'
});
exports.borderTop = borderTop;
var borderRight = style({
  prop: 'borderRight',
  key: 'borders'
});
exports.borderRight = borderRight;
var borderBottom = style({
  prop: 'borderBottom',
  key: 'borders'
});
exports.borderBottom = borderBottom;
var borderLeft = style({
  prop: 'borderLeft',
  key: 'borders'
});
exports.borderLeft = borderLeft;
var borderRadius = style({
  prop: 'borderRadius',
  key: 'radii',
  transformValue: getPx
});
exports.borderRadius = borderRadius;
var borders = compose(border, borderTop, borderRight, borderBottom, borderLeft, borderWidth, borderStyle, borderColor, borderRadius);
exports.borders = borders;
var boxShadow = style({
  prop: 'boxShadow',
  key: 'shadows'
});
exports.boxShadow = boxShadow;
var opacity = style({
  prop: 'opacity'
});
exports.opacity = opacity;
var overflow = style({
  prop: 'overflow'
}); // backgrounds

exports.overflow = overflow;
var background = style({
  prop: 'background'
});
exports.background = background;
var backgroundImage = style({
  prop: 'backgroundImage'
});
exports.backgroundImage = backgroundImage;
var backgroundSize = style({
  prop: 'backgroundSize'
});
exports.backgroundSize = backgroundSize;
var backgroundPosition = style({
  prop: 'backgroundPosition'
});
exports.backgroundPosition = backgroundPosition;
var backgroundRepeat = style({
  prop: 'backgroundRepeat'
}); // position

exports.backgroundRepeat = backgroundRepeat;
var position = style({
  prop: 'position'
});
exports.position = position;
var zIndex = style({
  prop: 'zIndex',
  key: 'zIndices'
});
exports.zIndex = zIndex;
var top = style({
  prop: 'top',
  transformValue: getPx
});
exports.top = top;
var right = style({
  prop: 'right',
  transformValue: getPx
});
exports.right = right;
var bottom = style({
  prop: 'bottom',
  transformValue: getPx
});
exports.bottom = bottom;
var left = style({
  prop: 'left',
  transformValue: getPx
}); // variants

exports.left = left;
var buttonStyle = variant({
  key: 'buttons'
});
exports.buttonStyle = buttonStyle;
var textStyle = variant({
  key: 'textStyles',
  prop: 'textStyle'
});
exports.textStyle = textStyle;
var colorStyle = variant({
  key: 'colorStyles',
  prop: 'colors'
});
exports.colorStyle = colorStyle;
