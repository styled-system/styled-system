// based on https://github.com/developit/dlv
export var get = function get(obj, key, def, p, undef) {
  var _key;

  key = (_key = key) != null && _key.split ? key.split('.') : [key];

  for (p = 0; p < key.length; p++) {
    var _obj;

    obj = ((_obj = obj) == null ? void 0 : _obj[key[p]]) || undef;
  }

  return obj === undef ? def : obj;
};

var assign = function assign(target) {
  for (var i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1); i += 1) {
    var other = i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1];
    var keys = Object.keys(other);

    for (var j = 0; j < keys.length; j += 1) {
      var key = keys[j];
      target[key] = other[key];
    }
  }

  return target;
};

var defaultBreakpoints = ['40em', '52em', '64em'];
var defaultTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
var aliases = {
  bg: 'backgroundColor',
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: 'marginX',
  my: 'marginY',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: 'paddingX',
  py: 'paddingY'
};
var multiples = {
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginTop', 'marginBottom'],
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingTop', 'paddingBottom'],
  size: ['width', 'height']
};
var scales = {
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  margin: 'space',
  marginTop: 'space',
  marginRight: 'space',
  marginBottom: 'space',
  marginLeft: 'space',
  marginX: 'space',
  marginY: 'space',
  padding: 'space',
  paddingTop: 'space',
  paddingRight: 'space',
  paddingBottom: 'space',
  paddingLeft: 'space',
  paddingX: 'space',
  paddingY: 'space',
  top: 'space',
  right: 'space',
  bottom: 'space',
  left: 'space',
  gridGap: 'space',
  gridColumnGap: 'space',
  gridRowGap: 'space',
  gap: 'space',
  columnGap: 'space',
  rowGap: 'space',
  fontFamily: 'fonts',
  fontSize: 'fontSizes',
  fontWeight: 'fontWeights',
  lineHeight: 'lineHeights',
  letterSpacing: 'letterSpacings',
  border: 'borders',
  borderTop: 'borders',
  borderRight: 'borders',
  borderBottom: 'borders',
  borderLeft: 'borders',
  borderWidth: 'borderWidths',
  borderStyle: 'borderStyles',
  borderRadius: 'radii',
  borderTopRightRadius: 'radii',
  borderTopLeftRadius: 'radii',
  borderBottomRightRadius: 'radii',
  borderBottomLeftRadius: 'radii',
  borderTopWidth: 'borderWidths',
  borderTopColor: 'colors',
  borderTopStyle: 'borderStyles',
  borderBottomWidth: 'borderWidths',
  borderBottomColor: 'colors',
  borderBottomStyle: 'borderStyles',
  borderLeftWidth: 'borderWidths',
  borderLeftColor: 'colors',
  borderLeftStyle: 'borderStyles',
  borderRightWidth: 'borderWidths',
  borderRightColor: 'colors',
  borderRightStyle: 'borderStyles',
  outlineColor: 'colors',
  boxShadow: 'shadows',
  textShadow: 'shadows',
  zIndex: 'zIndices',
  width: 'sizes',
  minWidth: 'sizes',
  maxWidth: 'sizes',
  height: 'sizes',
  minHeight: 'sizes',
  maxHeight: 'sizes',
  flexBasis: 'sizes',
  size: 'sizes',
  // svg
  fill: 'colors',
  stroke: 'colors'
};

var positiveOrNegative = function positiveOrNegative(scale, value) {
  if (typeof value !== 'number' || value >= 0) {
    return get(scale, value, value);
  }

  var absolute = Math.abs(value);
  var n = get(scale, absolute, absolute);
  if (typeof n === 'string') return '-' + n;
  return n * -1;
};

var transforms = {
  'margin': positiveOrNegative,
  'marginTop': positiveOrNegative,
  'marginRight': positiveOrNegative,
  'marginBottom': positiveOrNegative,
  'marginLeft': positiveOrNegative,
  'marginX': positiveOrNegative,
  'marginY': positiveOrNegative,
  'top': positiveOrNegative,
  'bottom': positiveOrNegative,
  'left': positiveOrNegative,
  'right': positiveOrNegative
};
export var responsive = function responsive(styles) {
  return function (theme) {
    var next = {};
    var breakpoints = get(theme, 'breakpoints', defaultBreakpoints);
    var breakpointsLength = breakpoints.length;
    var mediaQueries = new Array(breakpointsLength + 1);
    mediaQueries[0] = null;

    for (var j = 0; j < breakpointsLength; j += 1) {
      mediaQueries[j + 1] = "@media screen and (min-width: " + breakpoints[j] + ")";
    }

    if (typeof styles !== 'object' || styles === null) return {};
    var keys = Object.keys(styles);

    for (var i = 0; i < keys.length; i += 1) {
      var key = keys[i];
      var value = typeof styles[key] === 'function' ? styles[key](theme) : styles[key];
      if (value == null) continue;

      if (!Array.isArray(value)) {
        next[key] = value;
        continue;
      }

      var len = Math.min(value.length, mediaQueries.length);

      for (var _i = 0; _i < len; _i += 1) {
        var media = mediaQueries[_i];

        if (!media) {
          next[key] = value[_i];
          continue;
        }

        next[media] = next[media] || {};
        if (value[_i] == null) continue;
        next[media][key] = value[_i];
      }
    }

    return next;
  };
};

var css = function css(args) {
  return function (props) {
    if (props === void 0) {
      props = {};
    }

    var theme = assign(Object.create(null), defaultTheme, props.theme || props);
    var result = Object.create(null);
    traverse(args, result);

    function traverse(_args, carry) {
      var obj = typeof _args === 'function' ? _args(theme) : _args;
      var styles = responsive(obj)(theme);
      var keys = Object.keys(styles);

      for (var i = 0; i < keys.length; i += 1) {
        var key = keys[i];
        var val = styles[key];
        val = typeof val === 'function' ? val(theme) : val;

        if (key === 'variant') {
          traverse(get(theme, val), carry);
          continue;
        }

        if (typeof val === 'object') {
          var child = carry[key] = Object.create(null);
          traverse(val, child);
          continue;
        }

        var prop = get(aliases, key, key);
        var scaleName = get(scales, prop);
        var scale = get(theme, scaleName, get(theme, prop, {}));
        var transform = get(transforms, prop, get);
        var value = transform(scale, val, val);

        if (multiples[prop]) {
          var dirs = multiples[prop];

          for (var j = 0; j < dirs.length; j += 1) {
            carry[dirs[j]] = value;
          }
        } else {
          carry[prop] = value;
        }
      }
    }

    return result;
  };
};

export default css;
