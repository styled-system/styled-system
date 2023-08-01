import assign from 'object-assign';

// merge function merges two objects into a new object, where values from itemB overwrite those in itemA.
// Return: result(Object) - the merged object including all properties from both input objects.
export const merge = (itemA, itemB) => {
  let result = { ...itemA, ...itemB };
  for (const key in itemA) {
    if (!itemA[key] || typeof itemB[key] !== 'object') continue;
    result = {
      ...result,
      [key]: { ...itemA[key], ...itemB[key] },
    };
  }
  return result;
};

// sort function sorts object properties by their keys and returns a new object that maintains this order.
// Return: result(Object) - sorted version of the input object.

const sort = (obj) => {
  return Object.keys(obj)
    .sort((a, b) =>
      a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: 'base',
      }),
    )
    .reduce((result, key) => {
      result[key] = obj[key];
      return result;
    }, {});
};

const defaults = {
  breakpoints: [40, 52, 64].map((n) => n + 'em'),
};
const createMediaQuery = (n) => `@media screen and (min-width: ${n})`;
const getValue = (n, scale) => get(scale, n, n);

// get function tries to access a property on an object, allowing for dot notation in the key string. It defaults to 'def' if it can't find anything.
// Return: Any - value found using the key on the object or 'def' if nothing could be accessed.
export const get = (obj, key, def, p, undef) => {
  key = key && key.split && obj && !obj[key] ? key.split('.') : [key];
  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }

  return obj === undef ? def : obj;
};

// createParser function creates a parser which applies responsive styles to a configuration of properties.
// Parameter: config(Object) - the configuration object that defines how each property should be styled.
// Return: parse(Function) - a function that parses properties and returns the resulting styles.
export const createParser = (config) => {
  const cache = {};
  const propKeys = Object.keys(config);

  const parse = (props) => {
    let styles = {};
    let shouldSort = false;

    const isCacheDisabled = props.theme && props.theme.disableStyledSystemCache;
    let raw, scale, sx;

    for (const key in props) {
      if (!config[key]) continue;
      let shouldAssign = true;

      sx = config[key];
      raw = props[key];
      scale = get(props.theme, sx.scale, sx.defaults);

      if (typeof raw === 'object') {
        [styles, shouldSort, shouldAssign] = handleObjectType(
          raw,
          props,
          cache,
          sx,
          scale,
          isCacheDisabled,
          styles,
          shouldSort,
          shouldAssign,
        );
      }
      if (shouldAssign) {
        assign(styles, sx(raw, scale, props));
      }
    }

    // sort object-based responsive styles
    if (shouldSort) {
      styles = sort(styles);
    }

    return styles;
  };

  parse.config = config;
  parse.propNames = propKeys;
  parse.cache = cache;

  setupParserForKeys(config, propKeys, parse);

  return parse;
};

// handleObjectType function handles the case where a raw value is an object in the createParser function.
// Parameters: See specific variable descriptions in the function declaration. Each parameter serves a purpose within the parsing process.
// Return: Array [styles(Object), shouldSort(Boolean), shouldAssign(Boolean)]
const handleObjectType = (
  raw,
  props,
  cache,
  sx,
  scale,
  isCacheDisabled,
  styles,
  shouldSort,
  shouldAssign,
) => {
  cache.breakpoints =
    (!isCacheDisabled && cache.breakpoints) ||
    get(props.theme, 'breakpoints', defaults.breakpoints);

  if (Array.isArray(raw)) {
    cache.media = (!isCacheDisabled && cache.media) || [
      null,
      ...cache.breakpoints.map(createMediaQuery),
    ];
    styles = merge(styles, parseResponsiveStyle(cache.media, sx, scale, raw, props));
    shouldAssign = false;
  } else if (raw !== null) {
    styles = merge(styles, parseResponsiveObject(cache.breakpoints, sx, scale, raw, props));
    shouldSort = true;
    shouldAssign = false;
  }

  return [styles, shouldSort, shouldAssign];
};

// setupParserForKeys function sets up the parser for a set of keys.
// Parameters: config(Object), keys(Array), parse(Function)
// Return: None - it modifies the parse function passed in.
const setupParserForKeys = (config, keys, parse) => {
  if (keys.length <= 1) {
    return;
  }

  keys.forEach((key) => {
    if (key === 'config') {
      return;
    }

    parse[key] = createParser({ [key]: config[key] });
  });
};

// parseResponsiveStyle function translates raw values into responsive styles.
// Return: styles(Object) - the computed style values.
const parseResponsiveStyle = (mediaQueries, sx, scale, raw, _props) => {
  let styles = {};
  raw.slice(0, mediaQueries.length).forEach((value, i) => {
    const media = mediaQueries[i];
    const style = sx(value, scale, _props);

    assign(styles, media ? { [media]: assign({}, styles[media], style) } : style);
  });
  return styles;
};

// parseResponsiveObject function translates raw values into responsive styles.
// Return: styles(Object) - the computed style values.
const parseResponsiveObject = (breakpoints, sx, scale, raw, _props) => {
  let styles = {};
  for (let key in raw) {
    const breakpoint = breakpoints[key];
    const value = raw[key];
    const style = sx(value, scale, _props);

    assign(
      styles,
      breakpoint
        ? {
          [createMediaQuery(breakpoint)]: assign({}, styles[createMediaQuery(breakpoint)], style),
        }
        : style,
    );
  }
  return styles;
};

// createStyleFunction function creates a function that maps a value to its related style(s). Used in system function.
// Return: sx(Function) - a function that computes styles for a value.
export const createStyleFunction = ({
  properties,
  property,
  scale,
  transform = getValue,
  defaultScale,
}) => {
  const sx = (value, _scale, _props) => {
    const n = transform(value, _scale, _props);
    if (n === null) return;

    if (!properties) {
      return { [property]: n };
    }

    return properties.reduce((acc, curr) => ({ ...acc, [curr]: n }), {});
  };

  sx.scale = scale;
  sx.defaults = defaultScale;

  return sx;
};

// system function creates a design-system parser out of a configuration object. Each property in the configuration describes how to transform a prop value into styles.
// Return: parser(Function) - the resulting function which can turn prop values into styles.
export const system = (args = {}) => {
  // Use reduce to iterate over keys and construct the config object
  const config = Object.keys(args).reduce((acc, key) => {
    const conf = args[key];

    // Shortcut definition
    if (conf === true) {
      return { ...acc, [key]: createStyleFunction({ property: key, scale: key }) };
    }
    // If it's a function
    if (typeof conf === 'function') {
      return { ...acc, [key]: conf };
    }

    return { ...acc, [key]: createStyleFunction(conf) };
  }, {});

  const parser = createParser(config);

  // You seem to have cut off the function end. Normally you would want to return the parser here.
  return parser;
};

// compose function combines multiple parsers into one.
// Parameters: ...parsers(Array) - spread array of parser functions.
// Return: parser(Function) - the resulting combined parser function.
export const compose = (...parsers) => {
  let config = {};
  parsers.forEach((parser) => {
    if (!parser || !parser.config) return;
    assign(config, parser.config);
  });
  const parser = createParser(config);

  return parser;
};
