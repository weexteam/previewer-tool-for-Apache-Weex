/* 'WEEX VUE RENDER undefined, Build 2017-02-23 19:13. */


(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.WeexVueRender = factory());
}(this, (function () { 'use strict';

function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style);
  return returnValue;
}
function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var semver = createCommonjsModule(function (module, exports) {
exports = module.exports = SemVer;

// The debug function is excluded entirely from the minified version.
/* nomin */ var debug;
/* nomin */ if (typeof process === 'object' &&
    /* nomin */ process.env &&
    /* nomin */ false &&
    /* nomin */ /\bsemver\b/i.test(false))
  /* nomin */ { debug = function() {
    /* nomin */ var args = Array.prototype.slice.call(arguments, 0);
    /* nomin */ args.unshift('SEMVER');
    /* nomin */ console.log.apply(console, args);
    /* nomin */ }; }
/* nomin */ else
  /* nomin */ { debug = function() {}; }

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
exports.SEMVER_SPEC_VERSION = '2.0.0';

var MAX_LENGTH = 256;
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;

// The actual regexps go on exports.re
var re = exports.re = [];
var src = exports.src = [];
var R = 0;

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

var NUMERICIDENTIFIER = R++;
src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
var NUMERICIDENTIFIERLOOSE = R++;
src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';


// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

var NONNUMERICIDENTIFIER = R++;
src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';


// ## Main Version
// Three dot-separated numeric identifiers.

var MAINVERSION = R++;
src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')';

var MAINVERSIONLOOSE = R++;
src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')';

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

var PRERELEASEIDENTIFIER = R++;
src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] +
                            '|' + src[NONNUMERICIDENTIFIER] + ')';

var PRERELEASEIDENTIFIERLOOSE = R++;
src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] +
                                 '|' + src[NONNUMERICIDENTIFIER] + ')';


// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

var PRERELEASE = R++;
src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] +
                  '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';

var PRERELEASELOOSE = R++;
src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] +
                       '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

var BUILDIDENTIFIER = R++;
src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

var BUILD = R++;
src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] +
             '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';


// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

var FULL = R++;
var FULLPLAIN = 'v?' + src[MAINVERSION] +
                src[PRERELEASE] + '?' +
                src[BUILD] + '?';

src[FULL] = '^' + FULLPLAIN + '$';

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] +
                 src[PRERELEASELOOSE] + '?' +
                 src[BUILD] + '?';

var LOOSE = R++;
src[LOOSE] = '^' + LOOSEPLAIN + '$';

var GTLT = R++;
src[GTLT] = '((?:<|>)?=?)';

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
var XRANGEIDENTIFIERLOOSE = R++;
src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
var XRANGEIDENTIFIER = R++;
src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';

var XRANGEPLAIN = R++;
src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:' + src[PRERELEASE] + ')?' +
                   src[BUILD] + '?' +
                   ')?)?';

var XRANGEPLAINLOOSE = R++;
src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:' + src[PRERELEASELOOSE] + ')?' +
                        src[BUILD] + '?' +
                        ')?)?';

var XRANGE = R++;
src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
var XRANGELOOSE = R++;
src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';

// Tilde ranges.
// Meaning is "reasonably at or greater than"
var LONETILDE = R++;
src[LONETILDE] = '(?:~>?)';

var TILDETRIM = R++;
src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
var tildeTrimReplace = '$1~';

var TILDE = R++;
src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
var TILDELOOSE = R++;
src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';

// Caret ranges.
// Meaning is "at least and backwards compatible with"
var LONECARET = R++;
src[LONECARET] = '(?:\\^)';

var CARETTRIM = R++;
src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
var caretTrimReplace = '$1^';

var CARET = R++;
src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
var CARETLOOSE = R++;
src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';

// A simple gt/lt/eq thing, or just "" to indicate "any version"
var COMPARATORLOOSE = R++;
src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
var COMPARATOR = R++;
src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';


// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
var COMPARATORTRIM = R++;
src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] +
                      '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';

// this one has to use the /g flag
re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
var comparatorTrimReplace = '$1$2$3';


// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
var HYPHENRANGE = R++;
src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' +
                   '\\s+-\\s+' +
                   '(' + src[XRANGEPLAIN] + ')' +
                   '\\s*$';

var HYPHENRANGELOOSE = R++;
src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s+-\\s+' +
                        '(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s*$';

// Star ranges basically just allow anything at all.
var STAR = R++;
src[STAR] = '(<|>)?=?\\s*\\*';

// Compile to actual regexp objects.
// All are flag-free, unless they were created above with a flag.
for (var i = 0; i < R; i++) {
  debug(i, src[i]);
  if (!re[i])
    { re[i] = new RegExp(src[i]); }
}

exports.parse = parse;
function parse(version, loose) {
  if (version instanceof SemVer)
    { return version; }

  if (typeof version !== 'string')
    { return null; }

  if (version.length > MAX_LENGTH)
    { return null; }

  var r = loose ? re[LOOSE] : re[FULL];
  if (!r.test(version))
    { return null; }

  try {
    return new SemVer(version, loose);
  } catch (er) {
    return null;
  }
}

exports.valid = valid;
function valid(version, loose) {
  var v = parse(version, loose);
  return v ? v.version : null;
}


exports.clean = clean;
function clean(version, loose) {
  var s = parse(version.trim().replace(/^[=v]+/, ''), loose);
  return s ? s.version : null;
}

exports.SemVer = SemVer;

function SemVer(version, loose) {
  if (version instanceof SemVer) {
    if (version.loose === loose)
      { return version; }
    else
      { version = version.version; }
  } else if (typeof version !== 'string') {
    throw new TypeError('Invalid Version: ' + version);
  }

  if (version.length > MAX_LENGTH)
    { throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters') }

  if (!(this instanceof SemVer))
    { return new SemVer(version, loose); }

  debug('SemVer', version, loose);
  this.loose = loose;
  var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);

  if (!m)
    { throw new TypeError('Invalid Version: ' + version); }

  this.raw = version;

  // these are actually numbers
  this.major = +m[1];
  this.minor = +m[2];
  this.patch = +m[3];

  if (this.major > MAX_SAFE_INTEGER || this.major < 0)
    { throw new TypeError('Invalid major version') }

  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0)
    { throw new TypeError('Invalid minor version') }

  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0)
    { throw new TypeError('Invalid patch version') }

  // numberify any prerelease numeric ids
  if (!m[4])
    { this.prerelease = []; }
  else
    { this.prerelease = m[4].split('.').map(function(id) {
      if (/^[0-9]+$/.test(id)) {
        var num = +id;
        if (num >= 0 && num < MAX_SAFE_INTEGER)
          { return num; }
      }
      return id;
    }); }

  this.build = m[5] ? m[5].split('.') : [];
  this.format();
}

SemVer.prototype.format = function() {
  this.version = this.major + '.' + this.minor + '.' + this.patch;
  if (this.prerelease.length)
    { this.version += '-' + this.prerelease.join('.'); }
  return this.version;
};

SemVer.prototype.toString = function() {
  return this.version;
};

SemVer.prototype.compare = function(other) {
  debug('SemVer.compare', this.version, this.loose, other);
  if (!(other instanceof SemVer))
    { other = new SemVer(other, this.loose); }

  return this.compareMain(other) || this.comparePre(other);
};

SemVer.prototype.compareMain = function(other) {
  if (!(other instanceof SemVer))
    { other = new SemVer(other, this.loose); }

  return compareIdentifiers(this.major, other.major) ||
         compareIdentifiers(this.minor, other.minor) ||
         compareIdentifiers(this.patch, other.patch);
};

SemVer.prototype.comparePre = function(other) {
  var this$1 = this;

  if (!(other instanceof SemVer))
    { other = new SemVer(other, this.loose); }

  // NOT having a prerelease is > having one
  if (this.prerelease.length && !other.prerelease.length)
    { return -1; }
  else if (!this.prerelease.length && other.prerelease.length)
    { return 1; }
  else if (!this.prerelease.length && !other.prerelease.length)
    { return 0; }

  var i = 0;
  do {
    var a = this$1.prerelease[i];
    var b = other.prerelease[i];
    debug('prerelease compare', i, a, b);
    if (a === undefined && b === undefined)
      { return 0; }
    else if (b === undefined)
      { return 1; }
    else if (a === undefined)
      { return -1; }
    else if (a === b)
      { continue; }
    else
      { return compareIdentifiers(a, b); }
  } while (++i);
};

// preminor will bump the version up to the next minor release, and immediately
// down to pre-release. premajor and prepatch work the same way.
SemVer.prototype.inc = function(release, identifier) {
  var this$1 = this;

  switch (release) {
    case 'premajor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor = 0;
      this.major++;
      this.inc('pre', identifier);
      break;
    case 'preminor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor++;
      this.inc('pre', identifier);
      break;
    case 'prepatch':
      // If this is already a prerelease, it will bump to the next version
      // drop any prereleases that might already exist, since they are not
      // relevant at this point.
      this.prerelease.length = 0;
      this.inc('patch', identifier);
      this.inc('pre', identifier);
      break;
    // If the input is a non-prerelease version, this acts the same as
    // prepatch.
    case 'prerelease':
      if (this.prerelease.length === 0)
        { this.inc('patch', identifier); }
      this.inc('pre', identifier);
      break;

    case 'major':
      // If this is a pre-major version, bump up to the same major version.
      // Otherwise increment major.
      // 1.0.0-5 bumps to 1.0.0
      // 1.1.0 bumps to 2.0.0
      if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0)
        { this.major++; }
      this.minor = 0;
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'minor':
      // If this is a pre-minor version, bump up to the same minor version.
      // Otherwise increment minor.
      // 1.2.0-5 bumps to 1.2.0
      // 1.2.1 bumps to 1.3.0
      if (this.patch !== 0 || this.prerelease.length === 0)
        { this.minor++; }
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'patch':
      // If this is not a pre-release version, it will increment the patch.
      // If it is a pre-release it will bump up to the same patch version.
      // 1.2.0-5 patches to 1.2.0
      // 1.2.0 patches to 1.2.1
      if (this.prerelease.length === 0)
        { this.patch++; }
      this.prerelease = [];
      break;
    // This probably shouldn't be used publicly.
    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
    case 'pre':
      if (this.prerelease.length === 0)
        { this.prerelease = [0]; }
      else {
        var i = this.prerelease.length;
        while (--i >= 0) {
          if (typeof this$1.prerelease[i] === 'number') {
            this$1.prerelease[i]++;
            i = -2;
          }
        }
        if (i === -1) // didn't increment anything
          { this.prerelease.push(0); }
      }
      if (identifier) {
        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
        if (this.prerelease[0] === identifier) {
          if (isNaN(this.prerelease[1]))
            { this.prerelease = [identifier, 0]; }
        } else
          { this.prerelease = [identifier, 0]; }
      }
      break;

    default:
      throw new Error('invalid increment argument: ' + release);
  }
  this.format();
  this.raw = this.version;
  return this;
};

exports.inc = inc;
function inc(version, release, loose, identifier) {
  if (typeof(loose) === 'string') {
    identifier = loose;
    loose = undefined;
  }

  try {
    return new SemVer(version, loose).inc(release, identifier).version;
  } catch (er) {
    return null;
  }
}

exports.diff = diff;
function diff(version1, version2) {
  if (eq(version1, version2)) {
    return null;
  } else {
    var v1 = parse(version1);
    var v2 = parse(version2);
    if (v1.prerelease.length || v2.prerelease.length) {
      for (var key in v1) {
        if (key === 'major' || key === 'minor' || key === 'patch') {
          if (v1[key] !== v2[key]) {
            return 'pre'+key;
          }
        }
      }
      return 'prerelease';
    }
    for (var key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return key;
        }
      }
    }
  }
}

exports.compareIdentifiers = compareIdentifiers;

var numeric = /^[0-9]+$/;
function compareIdentifiers(a, b) {
  var anum = numeric.test(a);
  var bnum = numeric.test(b);

  if (anum && bnum) {
    a = +a;
    b = +b;
  }

  return (anum && !bnum) ? -1 :
         (bnum && !anum) ? 1 :
         a < b ? -1 :
         a > b ? 1 :
         0;
}

exports.rcompareIdentifiers = rcompareIdentifiers;
function rcompareIdentifiers(a, b) {
  return compareIdentifiers(b, a);
}

exports.major = major;
function major(a, loose) {
  return new SemVer(a, loose).major;
}

exports.minor = minor;
function minor(a, loose) {
  return new SemVer(a, loose).minor;
}

exports.patch = patch;
function patch(a, loose) {
  return new SemVer(a, loose).patch;
}

exports.compare = compare;
function compare(a, b, loose) {
  return new SemVer(a, loose).compare(b);
}

exports.compareLoose = compareLoose;
function compareLoose(a, b) {
  return compare(a, b, true);
}

exports.rcompare = rcompare;
function rcompare(a, b, loose) {
  return compare(b, a, loose);
}

exports.sort = sort;
function sort(list, loose) {
  return list.sort(function(a, b) {
    return exports.compare(a, b, loose);
  });
}

exports.rsort = rsort;
function rsort(list, loose) {
  return list.sort(function(a, b) {
    return exports.rcompare(a, b, loose);
  });
}

exports.gt = gt;
function gt(a, b, loose) {
  return compare(a, b, loose) > 0;
}

exports.lt = lt;
function lt(a, b, loose) {
  return compare(a, b, loose) < 0;
}

exports.eq = eq;
function eq(a, b, loose) {
  return compare(a, b, loose) === 0;
}

exports.neq = neq;
function neq(a, b, loose) {
  return compare(a, b, loose) !== 0;
}

exports.gte = gte;
function gte(a, b, loose) {
  return compare(a, b, loose) >= 0;
}

exports.lte = lte;
function lte(a, b, loose) {
  return compare(a, b, loose) <= 0;
}

exports.cmp = cmp;
function cmp(a, op, b, loose) {
  var ret;
  switch (op) {
    case '===':
      if (typeof a === 'object') { a = a.version; }
      if (typeof b === 'object') { b = b.version; }
      ret = a === b;
      break;
    case '!==':
      if (typeof a === 'object') { a = a.version; }
      if (typeof b === 'object') { b = b.version; }
      ret = a !== b;
      break;
    case '': case '=': case '==': ret = eq(a, b, loose); break;
    case '!=': ret = neq(a, b, loose); break;
    case '>': ret = gt(a, b, loose); break;
    case '>=': ret = gte(a, b, loose); break;
    case '<': ret = lt(a, b, loose); break;
    case '<=': ret = lte(a, b, loose); break;
    default: throw new TypeError('Invalid operator: ' + op);
  }
  return ret;
}

exports.Comparator = Comparator;
function Comparator(comp, loose) {
  if (comp instanceof Comparator) {
    if (comp.loose === loose)
      { return comp; }
    else
      { comp = comp.value; }
  }

  if (!(this instanceof Comparator))
    { return new Comparator(comp, loose); }

  debug('comparator', comp, loose);
  this.loose = loose;
  this.parse(comp);

  if (this.semver === ANY)
    { this.value = ''; }
  else
    { this.value = this.operator + this.semver.version; }

  debug('comp', this);
}

var ANY = {};
Comparator.prototype.parse = function(comp) {
  var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var m = comp.match(r);

  if (!m)
    { throw new TypeError('Invalid comparator: ' + comp); }

  this.operator = m[1];
  if (this.operator === '=')
    { this.operator = ''; }

  // if it literally is just '>' or '' then allow anything.
  if (!m[2])
    { this.semver = ANY; }
  else
    { this.semver = new SemVer(m[2], this.loose); }
};

Comparator.prototype.toString = function() {
  return this.value;
};

Comparator.prototype.test = function(version) {
  debug('Comparator.test', version, this.loose);

  if (this.semver === ANY)
    { return true; }

  if (typeof version === 'string')
    { version = new SemVer(version, this.loose); }

  return cmp(version, this.operator, this.semver, this.loose);
};


exports.Range = Range;
function Range(range, loose) {
  if ((range instanceof Range) && range.loose === loose)
    { return range; }

  if (!(this instanceof Range))
    { return new Range(range, loose); }

  this.loose = loose;

  // First, split based on boolean or ||
  this.raw = range;
  this.set = range.split(/\s*\|\|\s*/).map(function(range) {
    return this.parseRange(range.trim());
  }, this).filter(function(c) {
    // throw out any that are not relevant for whatever reason
    return c.length;
  });

  if (!this.set.length) {
    throw new TypeError('Invalid SemVer Range: ' + range);
  }

  this.format();
}

Range.prototype.format = function() {
  this.range = this.set.map(function(comps) {
    return comps.join(' ').trim();
  }).join('||').trim();
  return this.range;
};

Range.prototype.toString = function() {
  return this.range;
};

Range.prototype.parseRange = function(range) {
  var loose = this.loose;
  range = range.trim();
  debug('range', range, loose);
  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
  range = range.replace(hr, hyphenReplace);
  debug('hyphen replace', range);
  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
  debug('comparator trim', range, re[COMPARATORTRIM]);

  // `~ 1.2.3` => `~1.2.3`
  range = range.replace(re[TILDETRIM], tildeTrimReplace);

  // `^ 1.2.3` => `^1.2.3`
  range = range.replace(re[CARETTRIM], caretTrimReplace);

  // normalize spaces
  range = range.split(/\s+/).join(' ');

  // At this point, the range is completely trimmed and
  // ready to be split into comparators.

  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var set = range.split(' ').map(function(comp) {
    return parseComparator(comp, loose);
  }).join(' ').split(/\s+/);
  if (this.loose) {
    // in loose mode, throw out any that are not valid comparators
    set = set.filter(function(comp) {
      return !!comp.match(compRe);
    });
  }
  set = set.map(function(comp) {
    return new Comparator(comp, loose);
  });

  return set;
};

// Mostly just for testing and legacy API reasons
exports.toComparators = toComparators;
function toComparators(range, loose) {
  return new Range(range, loose).set.map(function(comp) {
    return comp.map(function(c) {
      return c.value;
    }).join(' ').trim().split(' ');
  });
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
function parseComparator(comp, loose) {
  debug('comp', comp);
  comp = replaceCarets(comp, loose);
  debug('caret', comp);
  comp = replaceTildes(comp, loose);
  debug('tildes', comp);
  comp = replaceXRanges(comp, loose);
  debug('xrange', comp);
  comp = replaceStars(comp, loose);
  debug('stars', comp);
  return comp;
}

function isX(id) {
  return !id || id.toLowerCase() === 'x' || id === '*';
}

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
function replaceTildes(comp, loose) {
  return comp.trim().split(/\s+/).map(function(comp) {
    return replaceTilde(comp, loose);
  }).join(' ');
}

function replaceTilde(comp, loose) {
  var r = loose ? re[TILDELOOSE] : re[TILDE];
  return comp.replace(r, function(_, M, m, p, pr) {
    debug('tilde', comp, _, M, m, p, pr);
    var ret;

    if (isX(M))
      { ret = ''; }
    else if (isX(m))
      { ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0'; }
    else if (isX(p))
      // ~1.2 == >=1.2.0 <1.3.0
      { ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0'; }
    else if (pr) {
      debug('replaceTilde pr', pr);
      if (pr.charAt(0) !== '-')
        { pr = '-' + pr; }
      ret = '>=' + M + '.' + m + '.' + p + pr +
            ' <' + M + '.' + (+m + 1) + '.0';
    } else
      // ~1.2.3 == >=1.2.3 <1.3.0
      { ret = '>=' + M + '.' + m + '.' + p +
            ' <' + M + '.' + (+m + 1) + '.0'; }

    debug('tilde return', ret);
    return ret;
  });
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
// ^1.2.3 --> >=1.2.3 <2.0.0
// ^1.2.0 --> >=1.2.0 <2.0.0
function replaceCarets(comp, loose) {
  return comp.trim().split(/\s+/).map(function(comp) {
    return replaceCaret(comp, loose);
  }).join(' ');
}

function replaceCaret(comp, loose) {
  debug('caret', comp, loose);
  var r = loose ? re[CARETLOOSE] : re[CARET];
  return comp.replace(r, function(_, M, m, p, pr) {
    debug('caret', comp, _, M, m, p, pr);
    var ret;

    if (isX(M))
      { ret = ''; }
    else if (isX(m))
      { ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0'; }
    else if (isX(p)) {
      if (M === '0')
        { ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0'; }
      else
        { ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0'; }
    } else if (pr) {
      debug('replaceCaret pr', pr);
      if (pr.charAt(0) !== '-')
        { pr = '-' + pr; }
      if (M === '0') {
        if (m === '0')
          { ret = '>=' + M + '.' + m + '.' + p + pr +
                ' <' + M + '.' + m + '.' + (+p + 1); }
        else
          { ret = '>=' + M + '.' + m + '.' + p + pr +
                ' <' + M + '.' + (+m + 1) + '.0'; }
      } else
        { ret = '>=' + M + '.' + m + '.' + p + pr +
              ' <' + (+M + 1) + '.0.0'; }
    } else {
      debug('no pr');
      if (M === '0') {
        if (m === '0')
          { ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + m + '.' + (+p + 1); }
        else
          { ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + (+m + 1) + '.0'; }
      } else
        { ret = '>=' + M + '.' + m + '.' + p +
              ' <' + (+M + 1) + '.0.0'; }
    }

    debug('caret return', ret);
    return ret;
  });
}

function replaceXRanges(comp, loose) {
  debug('replaceXRanges', comp, loose);
  return comp.split(/\s+/).map(function(comp) {
    return replaceXRange(comp, loose);
  }).join(' ');
}

function replaceXRange(comp, loose) {
  comp = comp.trim();
  var r = loose ? re[XRANGELOOSE] : re[XRANGE];
  return comp.replace(r, function(ret, gtlt, M, m, p, pr) {
    debug('xRange', comp, ret, gtlt, M, m, p, pr);
    var xM = isX(M);
    var xm = xM || isX(m);
    var xp = xm || isX(p);
    var anyX = xp;

    if (gtlt === '=' && anyX)
      { gtlt = ''; }

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0';
      } else {
        // nothing is forbidden
        ret = '*';
      }
    } else if (gtlt && anyX) {
      // replace X with 0
      if (xm)
        { m = 0; }
      if (xp)
        { p = 0; }

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        // >1.2.3 => >= 1.2.4
        gtlt = '>=';
        if (xm) {
          M = +M + 1;
          m = 0;
          p = 0;
        } else if (xp) {
          m = +m + 1;
          p = 0;
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<';
        if (xm)
          { M = +M + 1; }
        else
          { m = +m + 1; }
      }

      ret = gtlt + M + '.' + m + '.' + p;
    } else if (xm) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    } else if (xp) {
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
    }

    debug('xRange return', ret);

    return ret;
  });
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
function replaceStars(comp, loose) {
  debug('replaceStars', comp, loose);
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[STAR], '');
}

// This function is passed to string.replace(re[HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0
function hyphenReplace($0,
                       from, fM, fm, fp, fpr, fb,
                       to, tM, tm, tp, tpr, tb) {

  if (isX(fM))
    { from = ''; }
  else if (isX(fm))
    { from = '>=' + fM + '.0.0'; }
  else if (isX(fp))
    { from = '>=' + fM + '.' + fm + '.0'; }
  else
    { from = '>=' + from; }

  if (isX(tM))
    { to = ''; }
  else if (isX(tm))
    { to = '<' + (+tM + 1) + '.0.0'; }
  else if (isX(tp))
    { to = '<' + tM + '.' + (+tm + 1) + '.0'; }
  else if (tpr)
    { to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr; }
  else
    { to = '<=' + to; }

  return (from + ' ' + to).trim();
}


// if ANY of the sets match ALL of its comparators, then pass
Range.prototype.test = function(version) {
  var this$1 = this;

  if (!version)
    { return false; }

  if (typeof version === 'string')
    { version = new SemVer(version, this.loose); }

  for (var i = 0; i < this.set.length; i++) {
    if (testSet(this$1.set[i], version))
      { return true; }
  }
  return false;
};

function testSet(set, version) {
  for (var i = 0; i < set.length; i++) {
    if (!set[i].test(version))
      { return false; }
  }

  if (version.prerelease.length) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (var i = 0; i < set.length; i++) {
      debug(set[i].semver);
      if (set[i].semver === ANY)
        { continue; }

      if (set[i].semver.prerelease.length > 0) {
        var allowed = set[i].semver;
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch)
          { return true; }
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false;
  }

  return true;
}

exports.satisfies = satisfies;
function satisfies(version, range, loose) {
  try {
    range = new Range(range, loose);
  } catch (er) {
    return false;
  }
  return range.test(version);
}

exports.maxSatisfying = maxSatisfying;
function maxSatisfying(versions, range, loose) {
  return versions.filter(function(version) {
    return satisfies(version, range, loose);
  }).sort(function(a, b) {
    return rcompare(a, b, loose);
  })[0] || null;
}

exports.minSatisfying = minSatisfying;
function minSatisfying(versions, range, loose) {
  return versions.filter(function(version) {
    return satisfies(version, range, loose);
  }).sort(function(a, b) {
    return compare(a, b, loose);
  })[0] || null;
}

exports.validRange = validRange;
function validRange(range, loose) {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, loose).range || '*';
  } catch (er) {
    return null;
  }
}

// Determine if version is less than all the versions possible in the range
exports.ltr = ltr;
function ltr(version, range, loose) {
  return outside(version, range, '<', loose);
}

// Determine if version is greater than all the versions possible in the range.
exports.gtr = gtr;
function gtr(version, range, loose) {
  return outside(version, range, '>', loose);
}

exports.outside = outside;
function outside(version, range, hilo, loose) {
  version = new SemVer(version, loose);
  range = new Range(range, loose);

  var gtfn, ltefn, ltfn, comp, ecomp;
  switch (hilo) {
    case '>':
      gtfn = gt;
      ltefn = lte;
      ltfn = lt;
      comp = '>';
      ecomp = '>=';
      break;
    case '<':
      gtfn = lt;
      ltefn = gte;
      ltfn = gt;
      comp = '<';
      ecomp = '<=';
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }

  // If it satisifes the range it is not outside
  if (satisfies(version, range, loose)) {
    return false;
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i];

    var high = null;
    var low = null;

    comparators.forEach(function(comparator) {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0');
      }
      high = high || comparator;
      low = low || comparator;
      if (gtfn(comparator.semver, high.semver, loose)) {
        high = comparator;
      } else if (ltfn(comparator.semver, low.semver, loose)) {
        low = comparator;
      }
    });

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false;
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false;
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false;
    }
  }
  return true;
}

exports.prerelease = prerelease;
function prerelease(version, loose) {
  var parsed = parse(version, loose);
  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null;
}
});

__$styleInject("* {\n  color: initial;\n  cursor: initial;\n  direction: initial;\n  font: initial;\n  font-family: initial;\n  font-size: initial;\n  font-style: initial;\n  font-variant: initial;\n  font-weight: initial;\n  line-height: initial;\n  text-align: initial;\n  text-indent: initial;\n  visibility: initial;\n  white-space: initial;\n  word-spacing: initial;\n  font-family: BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  -webkit-text-size-adjust: none;\n      -ms-text-size-adjust: none;\n          text-size-adjust: none;\n}\n\nhtml, body {\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: transparent;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n}\n\na,\nbutton,\n[role=\"button\"],\ninput,\nlabel,\nselect,\ntextarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n}\n\np, ol, ul, dl {\n  margin: 0;\n  padding: 0;\n}\n\nli {\n  list-style: none;\n}\n\nfigure {\n  margin: 0;\n}\n\ntextarea {\n  resize: none;\n}\n",undefined);

__$styleInject("a, .weex-a {\n  display: block;\n  position: relative;\n  text-decoration: none;\n}\n\nbody > .weex-div {\n  min-height: 100%;\n}\n\n.weex-div {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  box-align: stretch;\n  -webkit-align-content: flex-start;\n      -ms-flex-line-pack: start;\n          align-content: flex-start;\n}\n\ninput, textarea, .weex-input, .weex-textarea {\n  position: relative;\n  font-size: 0.4267rem;\n}\ninput:focus, textarea:focus, .weex-input:focus, .weex-textarea:focus {\n  outline: none;\n}\n\nfigure, img, .weex-image, .weex-img {\n  display: block;\n  position: relative;\n  background-repeat: no-repeat;\n}\n\n.weex-toast {\n  font-size: 0.32rem;\n  line-height: 0.426667rem;\n  position: fixed;\n  box-sizing: border-box;\n  max-width: 80%;\n  bottom: 2.666667rem;\n  left: 50%;\n  padding: 0.213333rem;\n  background-color: #000;\n  color: #fff;\n  text-align: center;\n  opacity: 0.6;\n  -webkit-transition: all 0.4s ease-in-out;\n          transition: all 0.4s ease-in-out;\n  border-radius: 0.066667rem;\n  -webkit-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n      transform: translateX(-50%);\n}\n\n.weex-toast.hide {\n  opacity: 0;\n}\n\n.weex-alert .weex-alert-ok {\n  width: 100%;\n}\n\n.weex-confirm .btn-group .btn {\n  float: left;\n  width: 50%;\n}\n\n.weex-confirm .btn-group .btn.btn-ok {\n  border-right: 1px solid #ddd;\n}\n\n.weex-modal-wrap {\n  display: none;\n  position: fixed;\n  z-index: 999999999;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  opacity: 0.5;\n}\n\n.weex-modal-node {\n  position: fixed;\n  z-index: 9999999999;\n  top: 50%;\n  left: 50%;\n  width: 6.666667rem;\n  min-height: 2.666667rem;\n  border-radius: 0.066667rem;\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n  background-color: #fff;\n}\n\n.weex-modal-node.hide {\n  display: none;\n}\n\n.weex-modal-node .content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n      align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  width: 100%;\n  min-height: 1.866667rem;\n  box-sizing: border-box;\n  font-size: 0.32rem;\n  line-height: 0.426667rem;\n  padding: 0.213333rem;\n  border-bottom: 1px solid #ddd;\n}\n\n.weex-modal-node .btn-group {\n  width: 100%;\n  height: 0.8rem;\n  font-size: 0.373333rem;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n\n.amfe-modal-node .btn-group .btn {\n  text-align: center;\n}\n\n.weex-modal-node .btn-group .btn {\n  box-sizing: border-box;\n  height: 0.8rem;\n  line-height: 0.8rem;\n  margin: 0;\n  padding: 0;\n  border: none;\n  background: none;\n  text-align: center;\n}\n\n.weex-prompt .input-wrap {\n  box-sizing: border-box;\n  width: 100%;\n  margin-top: 0.133333rem;\n  height: 0.96rem;\n}\n\n.weex-prompt .input-wrap .input {\n  box-sizing: border-box;\n  width: 100%;\n  height: 0.56rem;\n  line-height: 0.56rem;\n  font-size: 0.32rem;\n  border: 1px solid #999;\n}\n\n.weex-prompt .btn-group .btn {\n  float: left;\n  width: 50%;\n}\n\n.weex-prompt .btn-group .btn.btn-ok {\n  border-right: 1px solid #ddd;\n}\n\nbody > .weex-list,\nbody > .weex-scroller {\n  min-height: 100%;\n}\n\n.weex-list-wrapper,\n.weex-scroller-wrapper {\n  display: block;\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.weex-list-inner,\n.weex-scroller-inner {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  min-height: 100%;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n\n.weex-scroller-wrapper.weex-scroller-horizontal {\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n\n.weex-scroller-horizontal .weex-scroller-inner {\n  display: block;\n  width: auto;\n  height: 100%;\n}\n.weex-scroller-horizontal .weex-scroller-inner > * {\n  float: left;\n}\n\n.weex-cell {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n}\n\n.weex-refresh,\n.weex-loading {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  position: absolute;\n  visibility: hidden;\n  z-index: 100;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n.weex-refresh {\n  top: 0;\n}\n\n.weex-loading {\n  bottom: 0;\n  bottom: -2.8267rem;\n}\n\n.weex-slider-wrapper {\n  overflow: hidden;\n  position: relative;\n}\n\n.weex-slider-inner {\n  position: absolute;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.weex-slider-cell {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  overflow: hidden;\n}\n\n.weex-indicator {\n  position: absolute;\n  right: 0.4rem;\n  bottom: 0.1333rem;\n  margin: 0;\n  padding: 0.1333rem 0.2667rem;\n}\n\n.weex-indicator-item {\n  display: inline-block;\n  position: relative;\n  border-radius: 50%;\n  width: 0.2667rem;\n  height: 0.2667rem;\n  background-color: #BBBBBB;\n}\n.weex-indicator-item + .weex-indicator-item {\n  margin-left: 0.1333rem;\n}\n\n.weex-indicator-item-active {\n  background-color: blue;\n}\n\n.weex-refresh-indicator,\n.weex-loading-indicator {\n  position: relative;\n  width: 1rem;\n  height: 1rem;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  overflow: visible;\n  background: none;\n}\n.weex-refresh-indicator:before,\n.weex-loading-indicator:before {\n  display: block;\n  content: '';\n  font-size: 0.16rem;\n  /* 12px */\n  width: 1em;\n  height: 1em;\n  left: -60%;\n  top: 40%;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-animation: weex-spinner 1.1s infinite ease;\n          animation: weex-spinner 1.1s infinite ease;\n  -webkit-transform: translate3d(1rem, 0, 0);\n          transform: translate3d(1rem, 0, 0);\n}\n\n@-webkit-keyframes weex-spinner {\n  0%,\n  100% {\n    box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  12.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), 2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.5), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  62.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), 0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.5), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5), -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;\n  }\n}\n\n@keyframes weex-spinner {\n  0%,\n  100% {\n    box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  12.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), 2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.5), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  62.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), 0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.5), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5), -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;\n  }\n}\n.weex-switch {\n  border: 1px solid #dfdfdf;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  box-sizing: content-box;\n  background-clip: content-box;\n  color: #64bd63;\n  width: 1.3333rem;\n  height: 0.8rem;\n  background-color: white;\n  border-color: #dfdfdf;\n  box-shadow: #dfdfdf 0 0 0 0 inset;\n  border-radius: 0.8rem;\n  -webkit-transition: border 0.4s, box-shadow 0.4s, background-color 1.2s;\n          transition: border 0.4s, box-shadow 0.4s, background-color 1.2s;\n}\n\n.weex-switch-checked {\n  background-color: #64bd63;\n  border-color: #64bd63;\n  box-shadow: #64bd63 0 0 0 0.5333rem inset;\n}\n\n.weex-switch-checked.weex-switch-disabled {\n  background-color: #A0CCA0;\n  box-shadow: #A0CCA0 0 0 0 0.5333rem inset;\n}\n\n.weex-switch-disabled {\n  background-color: #EEEEEE;\n}\n\n.weex-switch-inner {\n  width: 0.8rem;\n  height: 0.8rem;\n  background: #fff;\n  border-radius: 100%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-transition: background-color 0.4s, left 0.2s;\n          transition: background-color 0.4s, left 0.2s;\n}\n\n.weex-switch-checked > .weex-switch-inner {\n  left: 0.5333rem;\n}\n\np, .weex-text {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  position: relative;\n  white-space: pre-wrap;\n  font-size: 0.4267rem;\n  word-wrap: break-word;\n  overflow: visible;\n}\n\n.weex-web {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: none;\n  box-sizing: border-box;\n}\n",undefined);

/* eslint-disable */

var isInitialized = false;

// major events supported:
//   panstart
//   panmove
//   panend
//   swipe
//   longpress
// extra events supported:
//   dualtouchstart
//   dualtouch
//   dualtouchend
//   tap
//   doubletap
//   pressend

var doc = window.document;
var docEl = doc.documentElement;
var slice = Array.prototype.slice;
var gestures = {};
var lastTap = null;

/**
 * find the closest common ancestor
 * if there's no one, return null
 *
 * @param  {Element} el1 first element
 * @param  {Element} el2 second element
 * @return {Element}     common ancestor
 */
function getCommonAncestor(el1, el2) {
  var el = el1;
  while (el) {
    if (el.contains(el2) || el == el2) {
      return el
    }
    el = el.parentNode;
  }
  return null
}

/**
 * fire a HTMLEvent
 *
 * @param  {Element} element which element to fire a event on
 * @param  {string}  type    type of event
 * @param  {object}  extra   extra data for the event object
 */
function fireEvent(element, type, extra) {
  var event = doc.createEvent('HTMLEvents');
  event.initEvent(type, true, true);

  if (typeof extra === 'object') {
    for (var p in extra) {
      event[p] = extra[p];
    }
  }

  element.dispatchEvent(event);
}

/**
 * calc the transform
 * assume 4 points ABCD on the coordinate system
 * > rotate：angle rotating from AB to CD
 * > scale：scale ratio from AB to CD
 * > translate：translate shift from A to C
 *
 * @param  {number} x1 abscissa of A
 * @param  {number} y1 ordinate of A
 * @param  {number} x2 abscissa of B
 * @param  {number} y2 ordinate of B
 * @param  {number} x3 abscissa of C
 * @param  {number} y3 ordinate of C
 * @param  {number} x4 abscissa of D
 * @param  {number} y4 ordinate of D
 * @return {object}    transform object like
 *   {rotate, scale, translate[2], matrix[3][3]}
 */
function calc(x1, y1, x2, y2, x3, y3, x4, y4) {
  var rotate = Math.atan2(y4 - y3, x4 - x3) - Math.atan2(y2 - y1, x2 - x1);
  var scale = Math.sqrt((Math.pow(y4 - y3, 2)
    + Math.pow(x4 - x3, 2)) / (Math.pow(y2 - y1, 2)
    + Math.pow(x2 - x1, 2)));
  var translate = [
    x3
    - scale * x1 * Math.cos(rotate)
    + scale * y1 * Math.sin(rotate),
    y3
    - scale * y1 * Math.cos(rotate)
    - scale * x1 * Math.sin(rotate)];

  return {
    rotate: rotate,
    scale: scale,
    translate: translate,
    matrix: [
      [scale * Math.cos(rotate), -scale * Math.sin(rotate), translate[0]],
      [scale * Math.sin(rotate), scale * Math.cos(rotate), translate[1]],
      [0, 0, 1]
    ]
  }
}

/**
 * take over the touchstart events. Add new touches to the gestures.
 * If there is no previous records, then bind touchmove, tochend
 * and touchcancel events.
 * new touches initialized with state 'tapping', and within 500 milliseconds
 * if the state is still tapping, then trigger gesture 'press'.
 * If there are two touche points, then the 'dualtouchstart' is triggerd. The
 * node of the touch gesture is their cloest common ancestor.
 *
 * @event
 * @param  {event} event
 */
function touchstartHandler(event) {

  if (Object.keys(gestures).length === 0) {
    docEl.addEventListener('touchmove', touchmoveHandler, false);
    docEl.addEventListener('touchend', touchendHandler, false);
    docEl.addEventListener('touchcancel', touchcancelHandler, false);
  }

  // record every touch
  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var touchRecord = {};

    for (var p in touch) {
      touchRecord[p] = touch[p];
    }

    var gesture = {
      startTouch: touchRecord,
      startTime: Date.now(),
      status: 'tapping',
      element: event.srcElement || event.target,
      pressingHandler: setTimeout(function (element, touch) {
        return function () {
          if (gesture.status === 'tapping') {
            gesture.status = 'pressing';

            fireEvent(element, 'longpress', {
              // add touch data for weex
              touch: touch,
              touches: event.touches,
              changedTouches: event.changedTouches,
              touchEvent: event
            });
          }

          clearTimeout(gesture.pressingHandler);
          gesture.pressingHandler = null;
        }
      }(event.srcElement || event.target, event.changedTouches[i]), 500)
    };
    gestures[touch.identifier] = gesture;
  }

  if (Object.keys(gestures).length == 2) {
    var elements = [];

    for (var p in gestures) {
      elements.push(gestures[p].element);
    }

    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchstart', {
      touches: slice.call(event.touches),
      touchEvent: event
    });
  }
}

/**
 * take over touchmove events, and handle pan and dual related gestures.
 *
 * 1. traverse every touch point：
 * > if 'tapping' and the shift is over 10 pixles, then it's a 'panning'.
 * 2. if there are two touch points, then calc the tranform and trigger
 *   'dualtouch'.
 *
 * @event
 * @param  {event} event
 */
function touchmoveHandler(event) {
  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var gesture = gestures[touch.identifier];

    if (!gesture) {
      return
    }

    if (!gesture.lastTouch) {
      gesture.lastTouch = gesture.startTouch;
    }
    if (!gesture.lastTime) {
      gesture.lastTime = gesture.startTime;
    }
    if (!gesture.velocityX) {
      gesture.velocityX = 0;
    }
    if (!gesture.velocityY) {
      gesture.velocityY = 0;
    }
    if (!gesture.duration) {
      gesture.duration = 0;
    }

    var time =  Date.now() - gesture.lastTime;
    var vx = (touch.clientX - gesture.lastTouch.clientX) / time;
    var vy = (touch.clientY - gesture.lastTouch.clientY) / time;

    var RECORD_DURATION = 70;
    if (time > RECORD_DURATION) {
      time = RECORD_DURATION;
    }
    if (gesture.duration + time > RECORD_DURATION) {
      gesture.duration = RECORD_DURATION - time;
    }

    gesture.velocityX = (gesture.velocityX * gesture.duration + vx * time)
      / (gesture.duration + time);
    gesture.velocityY = (gesture.velocityY * gesture.duration + vy * time)
      / (gesture.duration + time);
    gesture.duration += time;

    gesture.lastTouch = {};

    for (var p in touch) {
      gesture.lastTouch[p] = touch[p];
    }
    gesture.lastTime = Date.now();

    var displacementX = touch.clientX - gesture.startTouch.clientX;
    var displacementY = touch.clientY - gesture.startTouch.clientY;
    var distance = Math.sqrt(Math.pow(displacementX, 2)
      + Math.pow(displacementY, 2));
    var isVertical = !(Math.abs(displacementX) > Math.abs(displacementY));
    var direction = isVertical
      ? displacementY >= 0 ? 'down' : 'up'
      : displacementX >= 0 ? 'right' : 'left';

    // magic number 10: moving 10px means pan, not tap
    if ((gesture.status === 'tapping' || gesture.status === 'pressing')
        && distance > 10) {
      gesture.status = 'panning';
      gesture.isVertical = isVertical;
      gesture.direction = direction;

      fireEvent(gesture.element, 'panstart', {
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: direction
      });
    }

    if (gesture.status === 'panning') {
      gesture.panTime = Date.now();

      fireEvent(gesture.element, 'panmove', {
        displacementX: displacementX,
        displacementY: displacementY,
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: direction
      });
    }
  }

  if (Object.keys(gestures).length == 2) {
    var position = [];
    var current = [];
    var elements = [];
    var transform;

    for (var i = 0; i < event.touches.length; i++) {
      var touch = event.touches[i];
      var gesture = gestures[touch.identifier];
      position.push([gesture.startTouch.clientX, gesture.startTouch.clientY]);
      current.push([touch.clientX, touch.clientY]);
    }

    for (var p in gestures) {
      elements.push(gestures[p].element);
    }

    transform = calc(
      position[0][0],
      position[0][1],
      position[1][0],
      position[1][1],
      current[0][0],
      current[0][1],
      current[1][0],
      current[1][1]
    );
    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouch', {
      transform: transform,
      touches: event.touches,
      touchEvent: event
    });
  }
}

/**
 * handle touchend event
 *
 * 1. if there are tow touch points, then trigger 'dualtouchend'如
 *
 * 2. traverse every touch piont：
 * > if tapping, then trigger 'tap'.
 * If there is a tap 300 milliseconds before, then it's a 'doubletap'.
 * > if padding, then decide to trigger 'panend' or 'swipe'
 * > if pressing, then trigger 'pressend'.
 *
 * 3. remove listeners.
 *
 * @event
 * @param  {event} event
 */
function touchendHandler(event) {

  if (Object.keys(gestures).length == 2) {
    var elements = [];
    for (var p in gestures) {
      elements.push(gestures[p].element);
    }
    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchend', {
      touches: slice.call(event.touches),
      touchEvent: event
    });
  }

  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var id = touch.identifier;
    var gesture = gestures[id];

    if (!gesture) {
      continue
    }

    if (gesture.pressingHandler) {
      clearTimeout(gesture.pressingHandler);
      gesture.pressingHandler = null;
    }

    if (gesture.status === 'tapping') {
      gesture.timestamp = Date.now();
      fireEvent(gesture.element, 'tap', {
        touch: touch,
        touchEvent: event
      });

      if (lastTap && gesture.timestamp - lastTap.timestamp < 300) {
        fireEvent(gesture.element, 'doubletap', {
          touch: touch,
          touchEvent: event
        });
      }

      lastTap = gesture;
    }

    if (gesture.status === 'panning') {
      var now = Date.now();
      var duration = now - gesture.startTime;
      var displacementX = touch.clientX - gesture.startTouch.clientX;
      var displacementY = touch.clientY - gesture.startTouch.clientY;

      var velocity = Math.sqrt(gesture.velocityY * gesture.velocityY
        + gesture.velocityX * gesture.velocityX);
      var isSwipe = velocity > 0.5 && (now - gesture.lastTime) < 100;
      var extra = {
        duration: duration,
        isSwipe: isSwipe,
        velocityX: gesture.velocityX,
        velocityY: gesture.velocityY,
        displacementX: displacementX,
        displacementY: displacementY,
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: gesture.direction
      };

      fireEvent(gesture.element, 'panend', extra);
      if (isSwipe) {
        fireEvent(gesture.element, 'swipe', extra);
      }
    }

    if (gesture.status === 'pressing') {
      fireEvent(gesture.element, 'pressend', {
        touch: touch,
        touchEvent: event
      });
    }

    delete gestures[id];
  }

  if (Object.keys(gestures).length === 0) {
    docEl.removeEventListener('touchmove', touchmoveHandler, false);
    docEl.removeEventListener('touchend', touchendHandler, false);
    docEl.removeEventListener('touchcancel', touchcancelHandler, false);
  }
}

/**
 * handle touchcancel
 *
 * 1. if there are two touch points, then trigger 'dualtouchend'
 *
 * 2. traverse everty touch point:
 * > if pannnig, then trigger 'panend'
 * > if pressing, then trigger 'pressend'
 *
 * 3. remove listeners
 *
 * @event
 * @param  {event} event
 */
function touchcancelHandler(event) {

  if (Object.keys(gestures).length == 2) {
    var elements = [];
    for (var p in gestures) {
      elements.push(gestures[p].element);
    }
    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchend', {
      touches: slice.call(event.touches),
      touchEvent: event
    });
  }

  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var id = touch.identifier;
    var gesture = gestures[id];

    if (!gesture) {
      continue
    }

    if (gesture.pressingHandler) {
      clearTimeout(gesture.pressingHandler);
      gesture.pressingHandler = null;
    }

    if (gesture.status === 'panning') {
      fireEvent(gesture.element, 'panend', {
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event
      });
    }
    if (gesture.status === 'pressing') {
      fireEvent(gesture.element, 'pressend', {
        touch: touch,
        touchEvent: event
      });
    }
    delete gestures[id];
  }

  if (Object.keys(gestures).length === 0) {
    docEl.removeEventListener('touchmove', touchmoveHandler, false);
    docEl.removeEventListener('touchend', touchendHandler, false);
    docEl.removeEventListener('touchcancel', touchcancelHandler, false);
  }
}

if (!isInitialized) {
  docEl.addEventListener('touchstart', touchstartHandler, false);
  isInitialized = true;
}

/* eslint-disable */

// Production steps of ECMA-262, Edition 6, 22.1.2.1
// Reference: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from

/* istanbul ignore if */
if (!Array.from) {
  Array.from = (function() {
    var toStr = Object.prototype.toString;
    var isCallable = function(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function(value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike/*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }());
}

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number'){ __g = global; } // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number'){ __e = core; } // eslint-disable-line no-undef
});

var _isObject = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var isObject = _isObject;
var _anObject = function(it){
  if(!isObject(it)){ throw TypeError(it + ' is not an object!'); }
  return it;
};

var _fails = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

var isObject$1 = _isObject;
var document$1 = _global.document;
var is = isObject$1(document$1) && isObject$1(document$1.createElement);
var _domCreate = function(it){
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function(){
  return Object.defineProperty(_domCreate('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject$2 = _isObject;
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function(it, S){
  if(!isObject$2(it)){ return it; }
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject$2(val = fn.call(it))){ return val; }
  if(typeof (fn = it.valueOf) == 'function' && !isObject$2(val = fn.call(it))){ return val; }
  if(!S && typeof (fn = it.toString) == 'function' && !isObject$2(val = fn.call(it))){ return val; }
  throw TypeError("Can't convert object to primitive value");
};

var anObject       = _anObject;
var IE8_DOM_DEFINE = _ie8DomDefine;
var toPrimitive    = _toPrimitive;
var dP$1             = Object.defineProperty;

var f$1 = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE){ try {
    return dP$1(O, P, Attributes);
  } catch(e){ /* empty */ } }
  if('get' in Attributes || 'set' in Attributes){ throw TypeError('Accessors not supported!'); }
  if('value' in Attributes){ O[P] = Attributes.value; }
  return O;
};

var _objectDp = {
	f: f$1
};

var _propertyDesc = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

var dP         = _objectDp;
var createDesc = _propertyDesc;
var _hide = _descriptors ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

var hasOwnProperty = {}.hasOwnProperty;
var _has = function(it, key){
  return hasOwnProperty.call(it, key);
};

var id = 0;
var px = Math.random();
var _uid = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var _redefine = createCommonjsModule(function (module) {
var global    = _global
  , hide      = _hide
  , has       = _has
  , SRC       = _uid('src')
  , TO_STRING = 'toString'
  , $toString = Function[TO_STRING]
  , TPL       = ('' + $toString).split(TO_STRING);

_core.inspectSource = function(it){
  return $toString.call(it);
};

(module.exports = function(O, key, val, safe){
  var isFunction = typeof val == 'function';
  if(isFunction){ has(val, 'name') || hide(val, 'name', key); }
  if(O[key] === val){ return; }
  if(isFunction){ has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key))); }
  if(O === global){
    O[key] = val;
  } else {
    if(!safe){
      delete O[key];
      hide(O, key, val);
    } else {
      if(O[key]){ O[key] = val; }
      else { hide(O, key, val); }
    }
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString(){
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});
});

var _aFunction = function(it){
  if(typeof it != 'function'){ throw TypeError(it + ' is not a function!'); }
  return it;
};

// optional / simple context binding
var aFunction = _aFunction;
var _ctx = function(fn, that, length){
  aFunction(fn);
  if(that === undefined){ return fn; }
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

var global$1    = _global;
var core      = _core;
var hide      = _hide;
var redefine  = _redefine;
var ctx       = _ctx;
var PROTOTYPE = 'prototype';

var $export$1 = function(type, name, source){
  var IS_FORCED = type & $export$1.F
    , IS_GLOBAL = type & $export$1.G
    , IS_STATIC = type & $export$1.S
    , IS_PROTO  = type & $export$1.P
    , IS_BIND   = type & $export$1.B
    , target    = IS_GLOBAL ? global$1 : IS_STATIC ? global$1[name] || (global$1[name] = {}) : (global$1[name] || {})[PROTOTYPE]
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
    , key, own, out, exp;
  if(IS_GLOBAL){ source = name; }
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global$1) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if(target){ redefine(target, key, out, type & $export$1.U); }
    // export
    if(exports[key] != out){ hide(exports, key, exp); }
    if(IS_PROTO && expProto[key] != out){ expProto[key] = out; }
  }
};
global$1.core = core;
// type bitmap
$export$1.F = 1;   // forced
$export$1.G = 2;   // global
$export$1.S = 4;   // static
$export$1.P = 8;   // proto
$export$1.B = 16;  // bind
$export$1.W = 32;  // wrap
$export$1.U = 64;  // safe
$export$1.R = 128; // real proto method for `library` 
var _export = $export$1;

var toString$1 = {}.toString;

var _cof = function(it){
  return toString$1.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = _cof;
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function(it){
  if(it == undefined){ throw TypeError("Can't call method on  " + it); }
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject$1 = _iobject;
var defined = _defined;
var _toIobject = function(it){
  return IObject$1(defined(it));
};

// 7.1.4 ToInteger
var ceil  = Math.ceil;
var floor = Math.floor;
var _toInteger = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength
var toInteger = _toInteger;
var min       = Math.min;
var _toLength = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var toInteger$1 = _toInteger;
var max       = Math.max;
var min$1       = Math.min;
var _toIndex = function(index, length){
  index = toInteger$1(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes
var toIObject$1 = _toIobject;
var toLength  = _toLength;
var toIndex   = _toIndex;
var _arrayIncludes = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject$1($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el){ while(length > index){
      value = O[index++];
      if(value != value){ return true; }
    // Array#toIndex ignores holes, Array#includes - not
    } } else { for(;length > index; index++){ if(IS_INCLUDES || index in O){
      if(O[index] === el){ return IS_INCLUDES || index || 0; }
    } } } return !IS_INCLUDES && -1;
  };
};

var global$2 = _global;
var SHARED = '__core-js_shared__';
var store  = global$2[SHARED] || (global$2[SHARED] = {});
var _shared = function(key){
  return store[key] || (store[key] = {});
};

var shared = _shared('keys');
var uid    = _uid;
var _sharedKey = function(key){
  return shared[key] || (shared[key] = uid(key));
};

var has          = _has;
var toIObject    = _toIobject;
var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO     = _sharedKey('IE_PROTO');

var _objectKeysInternal = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O){ if(key != IE_PROTO){ has(O, key) && result.push(key); } }
  // Don't enum bug & hidden keys
  while(names.length > i){ if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  } }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = _objectKeysInternal;
var enumBugKeys = _enumBugKeys;

var _objectKeys = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

var f$2 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$2
};

var f$3 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$3
};

// 7.1.13 ToObject(argument)
var defined$1 = _defined;
var _toObject = function(it){
  return Object(defined$1(it));
};

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = _objectKeys;
var gOPS     = _objectGops;
var pIE      = _objectPie;
var toObject = _toObject;
var IObject  = _iobject;
var $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){
  var arguments$1 = arguments;
 // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments$1[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j){ if(isEnum.call(S, key = keys[j++])){ T[key] = S[key]; } }
  } return T;
} : $assign;

// 19.1.3.1 Object.assign(target, source)
var $export = _export;

$export($export.S + $export.F, 'Object', {assign: _objectAssign});

/* eslint-disable */

// https://gist.github.com/WebReflection/5593554

/* istanbul ignore if */
if (!Object.setPrototypeOf) {
  Object.setPrototypeOf = (function(Object, magic) {
    var set;
    function setPrototypeOf(O, proto) {
      set.call(O, proto);
      return O;
    }
    try {
      // this works already in Firefox and Safari
      set = Object.getOwnPropertyDescriptor(Object.prototype, magic).set;
      set.call({}, null);
    } catch (e) {
      if (
        // IE < 11 cannot be shimmed
        Object.prototype !== {}[magic] ||
        // neither can any browser that actually
        // implemented __proto__ correctly
        // (all but old V8 will return here)
        {__proto__: null}.__proto__ === void 0
        // this case means null objects cannot be passed
        // through setPrototypeOf in a reliable way
        // which means here a **Sham** is needed instead
      ) {
        return;
      }
      // nodejs 0.8 and 0.10 are (buggy and..) fine here
      // probably Chrome or some old Mobile stock browser
      set = function(proto) {
        this[magic] = proto;
      };
      // please note that this will **not** work
      // in those browsers that do not inherit
      // __proto__ by mistake from Object.prototype
      // in these cases we should probably throw an error
      // or at least be informed about the issue
      setPrototypeOf.polyfill = setPrototypeOf(
        setPrototypeOf({}, null),
        Object.prototype
      ) instanceof Object;
      // setPrototypeOf.polyfill === true means it works as meant
      // setPrototypeOf.polyfill === false means it's not 100% reliable
      // setPrototypeOf.polyfill === undefined
      // or
      // setPrototypeOf.polyfill ==  null means it's not a polyfill
      // which means it works as expected
      // we can even delete Object.prototype.__proto__;
    }
    return setPrototypeOf;
  }(Object, '__proto__'));
}

var _wks = createCommonjsModule(function (module) {
var store      = _shared('wks')
  , uid        = _uid
  , Symbol     = _global.Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
});

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof$1 = _cof;
var TAG = _wks('toStringTag');
var ARG = cof$1(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

var _classof = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof$1(O)
    // ES3 arguments fallback
    : (B = cof$1(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

// 19.1.3.6 Object.prototype.toString()
var classof = _classof;
var test    = {};
test[_wks('toStringTag')] = 'z';
if(test + '' != '[object z]'){
  _redefine(Object.prototype, 'toString', function toString(){
    return '[object ' + classof(this) + ']';
  }, true);
}

var toInteger$2 = _toInteger;
var defined$2   = _defined;
// true  -> String#at
// false -> String#codePointAt
var _stringAt = function(TO_STRING){
  return function(that, pos){
    var s = String(defined$2(that))
      , i = toInteger$2(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l){ return TO_STRING ? '' : undefined; }
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _library = false;

var _iterators = {};

var dP$2       = _objectDp;
var anObject$2 = _anObject;
var getKeys$1  = _objectKeys;

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties){
  anObject$2(O);
  var keys   = getKeys$1(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i){ dP$2.f(O, P = keys[i++], Properties[P]); }
  return O;
};

var _html = _global.document && document.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject$1    = _anObject;
var dPs         = _objectDps;
var enumBugKeys$1 = _enumBugKeys;
var IE_PROTO$1    = _sharedKey('IE_PROTO');
var Empty       = function(){ /* empty */ };
var PROTOTYPE$1   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe')
    , i      = enumBugKeys$1.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--){ delete createDict[PROTOTYPE$1][enumBugKeys$1[i]]; }
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE$1] = anObject$1(O);
    result = new Empty;
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else { result = createDict(); }
  return Properties === undefined ? result : dPs(result, Properties);
};

var def = _objectDp.f;
var has$2 = _has;
var TAG$1 = _wks('toStringTag');

var _setToStringTag = function(it, tag, stat){
  if(it && !has$2(it = stat ? it : it.prototype, TAG$1)){ def(it, TAG$1, {configurable: true, value: tag}); }
};

var create$1         = _objectCreate;
var descriptor     = _propertyDesc;
var setToStringTag$1 = _setToStringTag;
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function(){ return this; });

var _iterCreate = function(Constructor, NAME, next){
  Constructor.prototype = create$1(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag$1(Constructor, NAME + ' Iterator');
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has$3         = _has;
var toObject$1    = _toObject;
var IE_PROTO$2    = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function(O){
  O = toObject$1(O);
  if(has$3(O, IE_PROTO$2)){ return O[IE_PROTO$2]; }
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

var LIBRARY        = _library;
var $export$2        = _export;
var redefine$1       = _redefine;
var hide$1           = _hide;
var has$1            = _has;
var Iterators      = _iterators;
var $iterCreate    = _iterCreate;
var setToStringTag = _setToStringTag;
var getPrototypeOf = _objectGpo;
var ITERATOR       = _wks('iterator');
var BUGGY          = !([].keys && 'next' in [].keys());
var FF_ITERATOR    = '@@iterator';
var KEYS           = 'keys';
var VALUES         = 'values';

var returnThis = function(){ return this; };

var _iterDefine = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto){ return proto[kind]; }
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has$1(IteratorPrototype, ITERATOR)){ hide$1(IteratorPrototype, ITERATOR, returnThis); }
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide$1(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED){ for(key in methods){
      if(!(key in proto)){ redefine$1(proto, key, methods[key]); }
    } } else { $export$2($export$2.P + $export$2.F * (BUGGY || VALUES_BUG), NAME, methods); }
  }
  return methods;
};

var $at  = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length){ return {value: undefined, done: true}; }
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = _wks('unscopables');
var ArrayProto  = Array.prototype;
if(ArrayProto[UNSCOPABLES] == undefined){ _hide(ArrayProto, UNSCOPABLES, {}); }
var _addToUnscopables = function(key){
  ArrayProto[UNSCOPABLES][key] = true;
};

var _iterStep = function(done, value){
  return {value: value, done: !!done};
};

var addToUnscopables = _addToUnscopables;
var step             = _iterStep;
var Iterators$2        = _iterators;
var toIObject$2        = _toIobject;

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function(iterated, kind){
  this._t = toIObject$2(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  ){ return step(0, index); }
  if(kind == 'values'){ return step(0, O[index]); }
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators$2.Arguments = Iterators$2.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

var $iterators    = es6_array_iterator;
var redefine$2      = _redefine;
var global$3        = _global;
var hide$2          = _hide;
var Iterators$1     = _iterators;
var wks           = _wks;
var ITERATOR$1      = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues   = Iterators$1.Array;

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global$3[NAME]
    , proto      = Collection && Collection.prototype
    , key;
  if(proto){
    if(!proto[ITERATOR$1]){ hide$2(proto, ITERATOR$1, ArrayValues); }
    if(!proto[TO_STRING_TAG]){ hide$2(proto, TO_STRING_TAG, NAME); }
    Iterators$1[NAME] = ArrayValues;
    for(key in $iterators){ if(!proto[key]){ redefine$2(proto, key, $iterators[key], true); } }
  }
}

var _anInstance = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

// call something on iterator step with safe closing on error
var anObject$3 = _anObject;
var _iterCall = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject$3(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined){ anObject$3(ret.call(iterator)); }
    throw e;
  }
};

// check on default Array iterator
var Iterators$3  = _iterators;
var ITERATOR$2   = _wks('iterator');
var ArrayProto$1 = Array.prototype;

var _isArrayIter = function(it){
  return it !== undefined && (Iterators$3.Array === it || ArrayProto$1[ITERATOR$2] === it);
};

var classof$2   = _classof;
var ITERATOR$3  = _wks('iterator');
var Iterators$4 = _iterators;
var core_getIteratorMethod = _core.getIteratorMethod = function(it){
  if(it != undefined){ return it[ITERATOR$3]
    || it['@@iterator']
    || Iterators$4[classof$2(it)]; }
};

var _forOf = createCommonjsModule(function (module) {
var ctx         = _ctx
  , call        = _iterCall
  , isArrayIter = _isArrayIter
  , anObject    = _anObject
  , toLength    = _toLength
  , getIterFn   = core_getIteratorMethod
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function'){ throw TypeError(iterable + ' is not iterable!'); }
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn)){ for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN){ return result; }
  } } else { for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN){ return result; }
  } }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;
});

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject$4  = _anObject;
var aFunction$2 = _aFunction;
var SPECIES   = _wks('species');
var _speciesConstructor = function(O, D){
  var C = anObject$4(O).constructor, S;
  return C === undefined || (S = anObject$4(C)[SPECIES]) == undefined ? D : aFunction$2(S);
};

// fast apply, http://jsperf.lnkit.com/fast-apply/5
var _invoke = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

var ctx$2                = _ctx;
var invoke             = _invoke;
var html               = _html;
var cel                = _domCreate;
var global$5             = _global;
var process$2            = global$5.process;
var setTask            = global$5.setImmediate;
var clearTask          = global$5.clearImmediate;
var MessageChannel     = global$5.MessageChannel;
var counter            = 0;
var queue              = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer;
var channel;
var port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var arguments$1 = arguments;

    var args = [], i = 1;
    while(arguments.length > i){ args.push(arguments$1[i++]); }
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(_cof(process$2) == 'process'){
    defer = function(id){
      process$2.nextTick(ctx$2(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx$2(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global$5.addEventListener && typeof postMessage == 'function' && !global$5.importScripts){
    defer = function(id){
      global$5.postMessage(id + '', '*');
    };
    global$5.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx$2(run, id, 1), 0);
    };
  }
}
var _task = {
  set:   setTask,
  clear: clearTask
};

var global$6    = _global;
var macrotask = _task.set;
var Observer  = global$6.MutationObserver || global$6.WebKitMutationObserver;
var process$3   = global$6.process;
var Promise$1   = global$6.Promise;
var isNode$1    = _cof(process$3) == 'process';

var _microtask = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode$1 && (parent = process$3.domain)){ parent.exit(); }
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head){ notify(); }
        else { last = undefined; }
        throw e;
      }
    } last = undefined;
    if(parent){ parent.enter(); }
  };

  // Node.js
  if(isNode$1){
    notify = function(){
      process$3.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise$1 && Promise$1.resolve){
    var promise = Promise$1.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global$6, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last){ last.next = task; }
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

var redefine$3 = _redefine;
var _redefineAll = function(target, src, safe){
  for(var key in src){ redefine$3(target, key, src[key], safe); }
  return target;
};

var global$7      = _global;
var dP$3          = _objectDp;
var DESCRIPTORS = _descriptors;
var SPECIES$1     = _wks('species');

var _setSpecies = function(KEY){
  var C = global$7[KEY];
  if(DESCRIPTORS && C && !C[SPECIES$1]){ dP$3.f(C, SPECIES$1, {
    configurable: true,
    get: function(){ return this; }
  }); }
};

var ITERATOR$4     = _wks('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$4]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

var _iterDetect = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING){ return false; }
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR$4]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR$4] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

var LIBRARY$1            = _library;
var global$4             = _global;
var ctx$1                = _ctx;
var classof$1            = _classof;
var $export$3            = _export;
var isObject$3           = _isObject;
var aFunction$1          = _aFunction;
var anInstance         = _anInstance;
var forOf              = _forOf;
var speciesConstructor = _speciesConstructor;
var task               = _task.set;
var microtask          = _microtask();
var PROMISE            = 'Promise';
var TypeError$1          = global$4.TypeError;
var process$1            = global$4.process;
var $Promise           = global$4[PROMISE];
var process$1            = global$4.process;
var isNode             = classof$1(process$1) == 'process';
var empty              = function(){ /* empty */ };
var Internal;
var GenericPromiseCapability;
var Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[_wks('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject$3(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined){ throw TypeError$1('Bad Promise constructor'); }
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction$1(resolve);
  this.reject  = aFunction$1(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n){ return; }
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2){ onHandleUnhandled(promise); }
            promise._h = 1;
          }
          if(handler === true){ result = value; }
          else {
            if(domain){ domain.enter(); }
            result = handler(value);
            if(domain){ domain.exit(); }
          }
          if(result === reaction.promise){
            reject(TypeError$1('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else { resolve(result); }
        } else { reject(value); }
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i){ run(chain[i++]); } // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h){ onUnhandled(promise); }
  });
};
var onUnhandled = function(promise){
  task.call(global$4, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process$1.emit('unhandledRejection', value, promise);
        } else if(handler = global$4.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global$4.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt){ throw abrupt.error; }
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1){ return false; }
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise)){ return false; }
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global$4, function(){
    var handler;
    if(isNode){
      process$1.emit('rejectionHandled', promise);
    } else if(handler = global$4.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d){ return; }
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a){ promise._a = promise._c.slice(); }
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d){ return; }
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value){ throw TypeError$1("Promise can't be resolved itself"); }
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx$1($resolve, wrapper, 1), ctx$1($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction$1(executor);
    Internal.call(this);
    try {
      executor(ctx$1($resolve, this, 1), ctx$1($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = _redefineAll($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process$1.domain : undefined;
      this._c.push(reaction);
      if(this._a){ this._a.push(reaction); }
      if(this._s){ notify(this, false); }
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx$1($resolve, promise, 1);
    this.reject  = ctx$1($reject, promise, 1);
  };
}

$export$3($export$3.G + $export$3.W + $export$3.F * !USE_NATIVE, {Promise: $Promise});
_setToStringTag($Promise, PROMISE);
_setSpecies(PROMISE);
Wrapper = _core[PROMISE];

// statics
$export$3($export$3.S + $export$3.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export$3($export$3.S + $export$3.F * (LIBRARY$1 || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this)){ return x; }
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export$3($export$3.S + $export$3.F * !(USE_NATIVE && _iterDetect(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled){ return; }
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt){ reject(abrupt.error); }
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt){ reject(abrupt.error); }
    return capability.promise;
  }
});

var DEFAULT_VIEWPORT_WIDTH = 750;

function parseViewportWidth (config) {
  var width = DEFAULT_VIEWPORT_WIDTH;
  if (config && config.width) {
    width = Number(config.width) || config.width;
  }
  return width
}

function setViewport (config) {
  if ( config === void 0 ) config = {};

  var doc = window.document;

  if (doc) {
    var viewportWidth = parseViewportWidth(config);

    // set root font-size
    doc.documentElement.style.fontSize = viewportWidth / 10 + 'px';

    var screenWidth = window.screen.width;
    var scale = screenWidth / viewportWidth;
    var contents = [
      ("width=" + viewportWidth),
      ("initial-scale=" + scale),
      ("maximum-scale=" + scale),
      ("minimum-scale=" + scale),
      "user-scalable=no"
    ];

    var meta = doc.querySelector('meta[name="viewport"]');
    if (!meta) {
      meta = doc.createElement('meta');
      meta.setAttribute('name', 'viewport');
      document.querySelector('head').appendChild(meta);
    }

    meta.setAttribute('content', contents.join(','));
  }
}

var event = {
  /**
   * openUrl
   * @param  {string} url
   */
  openURL: function (url) {
    location.href = url;
  }

};

var meta = {
  event: [{
    name: 'openURL',
    args: ['string']
  }]
};

var Event$1 = {
  init: function (Weex) {
    Weex.registerApiModule('event', event, meta);
  }
};

var supportGeolocation = 'geolocation' in navigator;
var errorMsg = "[h5-render]: browser doesn't support geolocation.";

var geolocation = {
  // options:
  //   - enableHighAccuracy optional, value is true or false, false by default.
  //   - timeout [none-native] optional, value is a number (milliseconds), default vaule is FINFINITY.
  //   - maximumAge [none-native] optional, value is a number (milliseconds), default value is 0.
  getCurrentPosition: function getCurrentPosition (successCbId, errorCbId, options) {
    var this$1 = this;

    var successCb = function (pos) { return this$1.sender.performCallback(successCbId, pos); };
    var errorCb = function (err) { return this$1.sender.performCallback(errorCbId, err); };
    if (supportGeolocation) {
      navigator.geolocation.getCurrentPosition(successCb, errorCb, options);
    }
    else {
      console.warn(errorMsg);
      errorCb(new Error(errorMsg));
    }
  },

  // options: the same with `getCurrentPosition`.
  watchPosition: function watchPosition (successCbId, errorCbId, options) {
    var this$1 = this;

    var successCb = function (pos) { return this$1.sender.performCallback(successCbId, pos, true); };
    var errorCb = function (err) { return this$1.sender.performCallback(errorCbId, err); };
    if (supportGeolocation) {
      var id = navigator.geolocation.watchPosition(function (pos) {
        pos.watchId = id;
        successCb(pos);
      }, errorCb, options);
    }
    else {
      console.warn(errorMsg);
      errorCb(new Error(errorMsg));
    }
  },

  clearWatch: function clearWatch (watchId) {
    if (supportGeolocation) {
      navigator.geolocation.clearWatch(watchId);
    }
    else {
      console.warn(errorMsg);
    }
  }
};

var meta$1 = {
  geolocation: [{
    name: 'getCurrentPosition',
    args: ['function', 'function', 'object']
  }, {
    name: 'watchPosition',
    args: ['function', 'function', 'object']
  }, {
    name: 'clearWatch',
    args: ['string']
  }]
};

var Geolocation = {
  init: function init (Weex) {
    Weex.registerApiModule('geolocation', geolocation, meta$1);
  }
};

var pageInfo = {

  setTitle: function (title) {
    title = title || 'Weex HTML5';
    try {
      title = decodeURIComponent(title);
    }
    catch (e) {}
    document.title = title;
  }
};

var meta$2 = {
  pageInfo: [{
    name: 'setTitle',
    args: ['string']
  }]
};

var PageInfo = {
  init: function (Weex) {
    Weex.registerApiModule('pageInfo', pageInfo, meta$2);
  }
};

/* global localStorage */
var supportLocalStorage = typeof localStorage !== 'undefined';
var SUCCESS = 'success';
var FAILED = 'failed';
var INVALID_PARAM = 'invalid_param';
var UNDEFINED = 'undefined';

var storage = {

  /**
   * When passed a key name and value, will add that key to the storage,
   * or update that key's value if it already exists.
   * @param {string} key
   * @param {string} value
   * @param {function} callbackId
   */
  setItem: function (key, value, callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    if (!key || !value) {
      sender.performCallback(callbackId, {
        result: 'failed',
        data: INVALID_PARAM
      });
      return
    }
    try {
      localStorage.setItem(key, value);
      sender.performCallback(callbackId, {
        result: SUCCESS,
        data: UNDEFINED
      });
    }
    catch (e) {
      // accept any exception thrown during a storage attempt as a quota error
      sender.performCallback(callbackId, {
        result: FAILED,
        data: UNDEFINED
      });
    }
  },

  /**
   * When passed a key name, will return that key's value.
   * @param {string} key
   * @param {function} callbackId
   */
  getItem: function (key, callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    if (!key) {
      sender.performCallback(callbackId, {
        result: FAILED,
        data: INVALID_PARAM
      });
      return
    }
    var val = localStorage.getItem(key);
    sender.performCallback(callbackId, {
      result: val ? SUCCESS : FAILED,
      data: val || UNDEFINED
    });
  },

  /**
   *When passed a key name, will remove that key from the storage.
   * @param {string} key
   * @param {function} callbackId
   */
  removeItem: function (key, callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    if (!key) {
      sender.performCallback(callbackId, {
        result: FAILED,
        data: INVALID_PARAM
      });
      return
    }
    localStorage.removeItem(key);
    sender.performCallback(callbackId, {
      result: SUCCESS,
      data: UNDEFINED
    });
  },

  /**
   * Returns an integer representing the number of data items stored in the Storage object.
   * @param {function} callbackId
   */
  length: function (callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    var len = localStorage.length;
    sender.performCallback(callbackId, {
      result: SUCCESS,
      data: len
    });
  },

  /**
   * Returns an array that contains all keys stored in Storage object.
   * @param {function} callbackId
   */
  getAllKeys: function (callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    var _arr = [];
    for (var i = 0; i < localStorage.length; i++) {
      _arr.push(localStorage.key(i));
    }
    sender.performCallback(callbackId, {
      result: SUCCESS,
      data: _arr
    });
  }
};

var meta$3 = {
  storage: [{
    name: 'setItem',
    args: ['string', 'string', 'function']
  }, {
    name: 'getItem',
    args: ['string', 'function']
  }, {
    name: 'removeItem',
    args: ['string', 'function']
  }, {
    name: 'length',
    args: ['function']
  }, {
    name: 'getAllKeys',
    args: ['function']
  }]
};

var Storage = {
  init: function (Weex) {
    Weex.registerApiModule('storage', storage, meta$3);
  }
};

(typeof window === 'undefined') && (window = {ctrl: {}, lib: {}});!window.ctrl && (window.ctrl = {});!window.lib && (window.lib = {});!function(a,b){function c(a){var b={};Object.defineProperty(this,"params",{set:function(a){if("object"==typeof a){for(var c in b){ delete b[c]; }for(var c in a){ b[c]=a[c]; }}},get:function(){return b},enumerable:!0}),Object.defineProperty(this,"search",{set:function(a){if("string"==typeof a){0===a.indexOf("?")&&(a=a.substr(1));var c=a.split("&");for(var d in b){ delete b[d]; }for(var e=0;e<c.length;e++){var f=c[e].split("=");if(void 0!==f[1]&&(f[1]=f[1].toString()),f[0]){ try{b[decodeURIComponent(f[0])]=decodeURIComponent(f[1]);}catch(g){b[f[0]]=f[1];} }}}},get:function(){var a=[];for(var c in b){ if(void 0!==b[c]){ if(""!==b[c]){ try{a.push(encodeURIComponent(c)+"="+encodeURIComponent(b[c]));}catch(d){a.push(c+"="+b[c]);} }else { try{a.push(encodeURIComponent(c));}catch(d){a.push(c);} } } }return a.length?"?"+a.join("&"):""},enumerable:!0});var c;Object.defineProperty(this,"hash",{set:function(a){"string"==typeof a&&(a&&a.indexOf("#")<0&&(a="#"+a),c=a||"");},get:function(){return c},enumerable:!0}),this.set=function(a){a=a||"";var b;if(!(b=a.match(new RegExp("^([a-z0-9-]+:)?[/]{2}(?:([^@/:?]+)(?::([^@/:]+))?@)?([^:/?#]+)(?:[:]([0-9]+))?([/][^?#;]*)?(?:[?]([^#]*))?([#][^?]*)?$","i")))){ throw new Error("Wrong uri scheme."); }this.protocol=b[1]||("object"==typeof location?location.protocol:""),this.username=b[2]||"",this.password=b[3]||"",this.hostname=this.host=b[4],this.port=b[5]||"",this.pathname=b[6]||"/",this.search=b[7]||"",this.hash=b[8]||"",this.origin=this.protocol+"//"+this.hostname;},this.toString=function(){var a=this.protocol+"//";return this.username&&(a+=this.username,this.password&&(a+=":"+this.password),a+="@"),a+=this.host,this.port&&"80"!==this.port&&(a+=":"+this.port),this.pathname&&(a+=this.pathname),this.search&&(a+=this.search),this.hash&&(a+=this.hash),a},a&&this.set(a.toString());}b.httpurl=function(a){return new c(a)};}(window,window.lib||(window.lib={}));

var index$2 = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject$2(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var index$4 = shouldUseNative() ? Object.assign : function (target, source) {
	var arguments$1 = arguments;

	var from;
	var to = toObject$2(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments$1[s]);

		for (var key in from) {
			if (hasOwnProperty$1.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

var strictUriEncode = index$2;
var objectAssign = index$4;

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);

				key = key.replace(/\[\]$/, '');

				if (!result || accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

var extract = function (str) {
	return str.split('?')[1] || '';
};

var parse$1 = function (str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeURIComponent(val);

		formatter(decodeURIComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
};

var stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

var index$1 = {
	extract: extract,
	parse: parse$1,
	stringify: stringify
};

/* global lib, XMLHttpRequest */
/* deps: httpurl */

var utils;

var jsonpCnt = 0;
var ERROR_STATE = -1;

function _jsonp (config, callback, progressCallback) {
  var cbName = 'jsonp_' + (++jsonpCnt);
  var url;

  if (!config.url) {
    console.error('[h5-render] config.url should be set in _jsonp for \'fetch\' API.');
  }

  global[cbName] = (function (cb) {
    return function (response) {
      callback({
        status: 200,
        ok: true,
        statusText: 'OK',
        data: response
      });
      delete global[cb];
    }
  })(cbName);

  var script = document.createElement('script');
  try {
    url = lib.httpurl(config.url);
  }
  catch (err) {
    console.error('[h5-render] invalid config.url in _jsonp for \'fetch\' API: '
      + config.url);
  }
  url.params.callback = cbName;
  script.type = 'text/javascript';
  script.src = url.toString();
  // script.onerror is not working on IE or safari.
  // but they are not considered here.
  script.onerror = (function (cb) {
    return function (err) {
      console.error('[h5-render] unexpected error in _jsonp for \'fetch\' API', err);
      callback({
        status: ERROR_STATE,
        ok: false,
        statusText: '',
        data: ''
      });
      delete global[cb];
    }
  })(cbName);
  var head = document.getElementsByTagName('head')[0];
  head.insertBefore(script, null);
}

function _xhr (config, callback, progressCallback) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = config.type;
  xhr.open(config.method, config.url, true);

  // cors cookie support
  if (config.withCredentials === true) {
    xhr.withCredentials = true;
  }

  var headers = config.headers || {};
  for (var k in headers) {
    xhr.setRequestHeader(k, headers[k]);
  }

  xhr.onload = function (res) {
    callback({
      status: xhr.status,
      ok: xhr.status >= 200 && xhr.status < 300,
      statusText: xhr.statusText,
      data: xhr.response,
      headers: xhr.getAllResponseHeaders().split('\n')
        .reduce(function (obj, headerStr) {
          var headerArr = headerStr.match(/(.+): (.+)/);
          if (headerArr) {
            obj[headerArr[1]] = headerArr[2];
          }
          return obj
        }, {})
    });
  };

  if (progressCallback) {
    xhr.onprogress = function (e) {
      progressCallback({
        readyState: xhr.readyState,
        status: xhr.status,
        length: e.loaded,
        total: e.total,
        statusText: xhr.statusText,
        headers: xhr.getAllResponseHeaders().split('\n')
          .reduce(function (obj, headerStr) {
            var headerArr = headerStr.match(/(.+): (.+)/);
            if (headerArr) {
              obj[headerArr[1]] = headerArr[2];
            }
            return obj
          }, {})
      });
    };
  }

  xhr.onerror = function (err) {
    console.error('[h5-render] unexpected error in _xhr for \'fetch\' API', err);
    callback({
      status: ERROR_STATE,
      ok: false,
      statusText: '',
      data: ''
    });
  };

  xhr.send(config.body);
}

var stream = {

  /**
   * sendHttp
   * @deprecated
   * Note: This API is deprecated. Please use stream.fetch instead.
   * send a http request through XHR.
   * @param  {obj} params
   *  - method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH',
   *  - url: url requested
   * @param  {string} callbackId
   */
  sendHttp: function (param, callbackId) {
    if (typeof param === 'string') {
      try {
        param = JSON.parse(param);
      }
      catch (e) {
        return
      }
    }
    if (typeof param !== 'object' || !param.url) {
      return console.error(
        '[h5-render] invalid config or invalid config.url for sendHttp API')
    }

    var sender = this.sender;
    var method = param.method || 'GET';
    var xhr = new XMLHttpRequest();
    xhr.open(method, param.url, true);
    xhr.onload = function () {
      sender.performCallback(callbackId, this.responseText);
    };
    xhr.onerror = function (error) {
      return console.error('[h5-render] unexpected error in sendHttp API', error)
      // sender.performCallback(
      //   callbackId,
      //   new Error('unexpected error in sendHttp API')
      // )
    };
    xhr.send();
  },

  /**
   * fetch
   * use stream.fetch to request for a json file, a plain text file or
   * a arraybuffer for a file stream. (You can use Blob and FileReader
   * API implemented by most modern browsers to read a arraybuffer.)
   * @param  {object} options config options
   *   - method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH'
   *   - headers {obj}
   *   - url {string}
   *   - mode {string} 'cors' | 'no-cors' | 'same-origin' | 'navigate'
   *   - withCredentials {boolean}
   *   - body
   *   - type {string} 'json' | 'jsonp' | 'text'
   * @param  {string} callbackId
   * @param  {string} progressCallbackId
   */
  fetch: function (options, callbackId, progressCallbackId) {
    var DEFAULT_METHOD = 'GET';
    var DEFAULT_MODE = 'cors';
    var DEFAULT_TYPE = 'text';

    var methodOptions = ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'PATCH'];
    var modeOptions = ['cors', 'no-cors', 'same-origin', 'navigate'];
    var typeOptions = ['text', 'json', 'jsonp', 'arraybuffer'];

    // const fallback = false  // fallback from 'fetch' API to XHR.
    var sender = this.sender;

    var config = utils.extend({}, options);

    // validate options.method
    if (typeof config.method === 'undefined') {
      config.method = DEFAULT_METHOD;
      console.warn('[h5-render] options.method for \'fetch\' API has been set to '
        + 'default value \'' + config.method + '\'');
    }
    else if (methodOptions.indexOf((config.method + '')
        .toUpperCase()) === -1) {
      return console.error('[h5-render] options.method \''
        + config.method
        + '\' for \'fetch\' API should be one of '
        + methodOptions + '.')
    }

    // validate options.url
    if (!config.url) {
      return console.error('[h5-render] options.url should be set for \'fetch\' API.')
    }

    // validate body content for method 'GET'.
    if (config.method.toUpperCase() === 'GET') {
      var body = config.body;
      if (utils.isPlainObject(body)) {
        body = index$1.stringify(body);
      }
      var url = config.url;
      var hashIdx = url.indexOf('#');
      hashIdx <= -1 && (hashIdx = url.length);
      var hash = url.substr(hashIdx);
      hash && (hash = '#' + hash);
      url = url.substring(0, hashIdx);
      url += (config.url.indexOf('?') <= -1 ? '?' : '&') + body + hash;
      config.url = url;
    }

    // validate options.mode
    if (typeof config.mode === 'undefined') {
      config.mode = DEFAULT_MODE;
    }
    else if (modeOptions.indexOf((config.mode + '').toLowerCase()) === -1) {
      return console.error('[h5-render] options.mode \''
        + config.mode
        + '\' for \'fetch\' API should be one of '
        + modeOptions + '.')
    }

    // validate options.type
    if (typeof config.type === 'undefined') {
      config.type = DEFAULT_TYPE;
      console.warn('[h5-render] options.type for \'fetch\' API has been set to '
        + 'default value \'' + config.type + '\'.');
    }
    else if (typeOptions.indexOf((config.type + '').toLowerCase()) === -1) {
      return console.error('[h5-render] options.type \''
          + config.type
          + '\' for \'fetch\' API should be one of '
          + typeOptions + '.')
    }

    // validate options.headers
    config.headers = config.headers || {};
    if (!utils.isPlainObject(config.headers)) {
      return console.error('[h5-render] options.headers should be a plain object')
    }

    // validate options.timeout
    config.timeout = parseInt(config.timeout, 10) || 2500;

    var _callArgs = [config, function (res) {
      sender.performCallback(callbackId, res);
    }];
    if (progressCallbackId) {
      _callArgs.push(function (res) {
        // Set 'keepAlive' to true for sending continuous callbacks
        sender.performCallback(progressCallbackId, res, true);
      });
    }

    if (config.type === 'jsonp') {
      _jsonp.apply(this, _callArgs);
    }
    else {
      _xhr.apply(this, _callArgs);
    }
  }

};

var meta$4 = {
  stream: [{
    name: 'sendHttp',
    args: ['object', 'function']
  }, {
    name: 'fetch',
    args: ['object', 'function', 'function']
  }]
};

var Stream = {
  init: function (Weex) {
    utils = Weex.utils;
    Weex.registerApiModule('stream', stream, meta$4);
  }
};

/**

AUCTION:
taskQueue
Clipboard.setString()  NOW not works, facing to user-act lose of taskQueue.

works in Chrome Firefox Opera. but not in Safari.
@see https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand#Browser_compatibility

Clipboard.getString() unimplemented. There is no easy way to do paste from clipboard to js variable.

So look out your app behavior, when downgrade to html5 render.
Any idea is welcome.
**/

var WEEX_CLIPBOARD_ID = '__weex_clipboard_id__';

var clipboard = {

  getString: function (callbackId) {
    // not supported in html5
    console.log('clipboard.getString() is not supported now.');
  },

  setString: function (text) {
    // not support safari
    if (typeof text === 'string' && text !== '' && document.execCommand) {
      var tempInput = element();
      tempInput.value = text;

      tempInput.select();
      document.execCommand('copy');
      // var out = document.execCommand('copy');
      // console.log("execCommand out is " + out);
      tempInput.value = '';
      tempInput.blur();
    }
    else {
      console.log('only support string input now');
    }
  }

};

function element () {
  var tempInput = document.getElementById(WEEX_CLIPBOARD_ID);
  if (!tempInput) {
    tempInput = document.createElement('input');
    tempInput.setAttribute('id', WEEX_CLIPBOARD_ID);
    tempInput.style.cssText = 'height:1px;width:1px;border:none;';
    // tempInput.style.cssText = "height:40px;width:300px;border:solid;"
    document.body.appendChild(tempInput);
  }
  return tempInput
}

var meta$5 = {
  clipboard: [{
    name: 'getString',
    args: ['function']
  }, {
    name: 'setString',
    args: ['string']
  }]
};

var Clipboard = {
  init: function (Weex) {
    Weex.registerApiModule('clipboard', clipboard, meta$5);
  }
};

/**
 * Simple bind, faster than native
 *
 * @param {Function} fn
 * @param {Object} ctx
 * @return {Function}
 */
function bind (fn, ctx) {
  return function (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
}

function debounce (func, wait) {
  var timerId;
  function later () {
    timerId = null;
    func.apply(null);
  }
  return function () {
    clearTimeout(timerId);
    timerId = setTimeout(later, wait);
  }
}

function throttle (func, wait) {
  var last = 0;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var context = this;
    var time = new Date().getTime();
    if (time - last > wait) {
      func.apply(context, args);
      last = time;
    }
  }
}

function setSelectionRange(selectionStart, selectionEnd) {
  this.$el.focus();
  this.$el.setSelectionRange(selectionStart, selectionEnd);
}

function getSelectionRange(callback) {
  callback({
    selectionStart: this.$el.selectionStart,
    selectionEnd: this.$el.selectionEnd
  }); 
}

/**
 * Create Event.
 * @param {DOMString} type
 * @param {Object} props
 */
// export function createEvent (context, type, props) {
//   const event = new Event(type, { bubbles: false })
//   // event.preventDefault()
//   event.stopPropagation()
//
//   extend(event, props)
//
//   Object.defineProperty(event, 'target', {
//     enumerable: true,
//     value: context || null
//   })
//
//   return event
// }

/**
 * Create Custom Event.
 * @param {DOMString} type
 * @param {Object} props
 */
// export function createCustomEvent (context, type, props) {
//   // compatibility: http://caniuse.com/#search=customevent
//   // const event = new CustomEvent(type)
//   const event = document.createEvent('CustomEvent')
//   event.initCustomEvent(type, false, true, {})
//   // event.preventDefault()
//   event.stopPropagation()
//
//   extend(event, props)
//
//   // TODO: event.target is readonly
//   // Object.defineProperty(event, 'target', {
//   //   enumerable: true,
//   //   value: context || null
//   // })
//
//   return event
// }

function mapFormEvents (context) {
  var eventMap = {};['input', 'change', 'focus', 'blur'].forEach(function (type) {
    eventMap[type] = function (event) {
      if (context.$el) {
        context.value = context.$el.value;
        event.value = context.$el.value;
      }
      context.$emit(type, event);
    };
  });
  return eventMap
}

function getParentScroller (vnode) {
  if (!vnode) { return null }
  if (vnode.weexType === 'scroller' || vnode.weexType === 'list') {
    return vnode
  }
  return getParentScroller(vnode.$parent)
}

function hasIntersection (rect, ctRect) {
  return (rect.left < ctRect.right && rect.right > ctRect.left)
    && (rect.top < ctRect.bottom && rect.bottom > ctRect.top)
}

function isComponentVisible (component) {
  if (component.$el) {
    var scroller = getParentScroller(component);
    if (scroller && scroller.$el) {
      var visible = hasIntersection(
        component.$el.getBoundingClientRect(),
        scroller.$el.getBoundingClientRect()
      );
      return visible
    }
  }
  return false
}

// TODO: improve the efficiency
function watchAppear (context) {
  if (!context) { return null }

  context.$nextTick(function () {
    if (context.$options && context.$options._parentListeners) {
      var on = context.$options._parentListeners;
      if (on.appear || on.disappear) {
        context._visible = isComponentVisible(context);
        if (context._visible) {
          // TODO: create custom event object
          on.appear && on.appear.fn({});
        }
        var handler = throttle(function (event) {
          var visible = isComponentVisible(context);
          if (visible !== context._visible) {
            context._visible = visible;
            var listener = visible ? on.appear : on.disappear;
            if (listener && listener.fn) {
              listener.fn(event);
            }
          }
        }, 100);

        // TODO: more reliable
        var scroller = getParentScroller(context);
        var element = (scroller && scroller.$el) || window;
        element.addEventListener('scroll', handler, false);
      }
    }
  });
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  }
}

/**
 * Camelize a hyphen-delmited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c.toUpperCase(); })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
});

function camelToKebab (name) {
  if (!name) { return '' }
  return name.replace(/([A-Z])/g, function (g, g1) {
    return ("-" + (g1.toLowerCase()))
  })
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

function appendStyle (css, styleId, replace) {
  var style = document.getElementById(styleId);
  if (style && replace) {
    style.parentNode.removeChild(style);
    style = null;
  }
  if (!style) {
    style = document.createElement('style');
    style.type = 'text/css';
    styleId && (style.id = styleId);
    document.getElementsByTagName('head')[0].appendChild(style);
  }
  style.appendChild(document.createTextNode(css));
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 *
 * @param {*} obj
 * @return {Boolean}
 */

var toString$2 = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';
function isPlainObject (obj) {
  return toString$2.call(obj) === OBJECT_STRING
}

function nextFrame (callback) {
  var runner = window.requestAnimationFrame
    || window.webkitRequestAnimationFrame
    || (function (cb) { return setTimeout(cb, 16); });
  runner(callback);
}

function toCSSText (object) {
  var cssText = '';
  if (object) {
    for (var key in object) {
      cssText += (hyphenate(key)) + ":" + (object[key]) + ";";
    }
  }
  return cssText
}


var utils$1 = Object.freeze({
	cached: cached,
	camelize: camelize,
	capitalize: capitalize,
	hyphenate: hyphenate,
	camelToKebab: camelToKebab,
	extend: extend,
	appendStyle: appendStyle,
	isPlainObject: isPlainObject,
	nextFrame: nextFrame,
	toCSSText: toCSSText,
	bind: bind,
	debounce: debounce,
	throttle: throttle,
	setSelectionRange: setSelectionRange,
	getSelectionRange: getSelectionRange,
	mapFormEvents: mapFormEvents,
	getParentScroller: getParentScroller,
	hasIntersection: hasIntersection,
	isComponentVisible: isComponentVisible,
	watchAppear: watchAppear
});

function transitionOnce (vnode, config, callback) {
  var duration = config.duration || 1000; // ms
  var timing = config.timingFunction || 'ease';
  var delay = config.delay || 0;  // ms

  // TODO: parse transition properties
  var transitionValue = "all " + duration + "ms " + timing + " " + delay + "ms";

  var dom = vnode.$el;
  var transitionEndHandler = function (event) {
    event.stopPropagation();
    dom.removeEventListener('webkitTransitionEnd', transitionEndHandler);
    dom.removeEventListener('transitionend', transitionEndHandler);
    dom.style.transition = '';
    dom.style.webkitTransition = '';
    callback();
  };

  dom.style.transition = transitionValue;
  dom.style.webkitTransition = transitionValue;
  dom.addEventListener('webkitTransitionEnd', transitionEndHandler);
  dom.addEventListener('transitionend', transitionEndHandler);

  nextFrame(function () {
    dom.style.cssText += toCSSText(config.styles || {});
  });
}

var animation = {
  /**
   * transition
   * @param  {String} vnode
   * @param  {Object} config
   * @param  {String} callback
   */
  transition: function transition (vnode, config, callback) {
    // TODO: Make sure the transition is only run once
    return transitionOnce(vnode, config, function () {
      callback && callback();
    })
  }
};

function getParentScroller$1 (vnode) {
  if (!vnode) { return null }
  if (vnode.weexType === 'scroller' || vnode.weexType === 'list') {
    return vnode
  }
  return getParentScroller$1(vnode.$parent)
}

var dom = {
  /**
   * scrollToElement
   * @param  {String} vnode
   * @param  {Object} options {offset:Number}
   *   ps: scroll-to has 'ease' and 'duration'(ms) as options.
   */
  scrollToElement: function (vnode, options) {
    var scroller = getParentScroller$1(vnode);

    if (scroller && scroller.$el && vnode.$el) {
      var offset = vnode.$el.offsetTop;

      if (options) {
        offset += Number(options.offset) || 0;
      }
      else {
        console.warn('[Vue Render] The second parameter of "scrollToElement" is required, '
          + 'otherwise it may not works well on native.');
      }

      // TODO: add animation
      scroller.$el.scrollTop = offset;
    }
  },

  /**
   * getComponentRect
   * @param {String} vnode
   * @param {Function} callback
   */
  getComponentRect: function (vnode, callback) {
    var info = { result: false };

    if (vnode && vnode === 'viewport') {
      info.result = true;
      info.size = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        top: 0,
        left: 0,
        right: document.documentElement.clientWidth,
        bottom: document.documentElement.clientHeight
      };
    }
    else if (vnode && vnode.$el) {
      info.result = true;
      info.size = vnode.$el.getBoundingClientRect();
    }

    var message = info.result ? info : {
      result: false,
      errMsg: 'Illegal parameter'
    };

    callback && callback(message);
    return message
  },

  /**
   * for adding fontFace
   * @param {string} key fontFace
   * @param {object} styles rules
   */
  addRule: function (key, styles) {
    key = camelToKebab(key);
    var stylesText = '';
    for (var k in styles) {
      if (styles.hasOwnProperty(k)) {
        stylesText += camelToKebab(k) + ':' + styles[k] + ';';
      }
    }
    var styleText = "@" + key + "{" + stylesText + "}";
    appendStyle(styleText, 'dom-added-rules');
  }
};

var queue$1 = [];
var isProcessing = false;
var toastWin;
var TOAST_WIN_CLASS_NAME = 'weex-toast';

var DEFAULT_DURATION = 0.8;

function showToastWindow (msg, callback) {
  var handleTransitionEnd = function () {
    toastWin.removeEventListener('transitionend', handleTransitionEnd);
    toastWin.removeEventListener('webkitTransitionEnd', handleTransitionEnd);
    callback && callback();
  };
  if (!toastWin) {
    toastWin = document.createElement('div');
    toastWin.classList.add(TOAST_WIN_CLASS_NAME, 'hide');
    document.body.appendChild(toastWin);
  }
  toastWin.textContent = msg;
  toastWin.addEventListener('transitionend', handleTransitionEnd);
  toastWin.addEventListener('webkitTransitionEnd', handleTransitionEnd);
  setTimeout(function () {
    toastWin.classList.remove('hide');
  }, 0);
}

function hideToastWindow (callback) {
  var handleTransitionEnd = function () {
    toastWin.removeEventListener('transitionend', handleTransitionEnd);
    toastWin.removeEventListener('webkitTransitionEnd', handleTransitionEnd);
    callback && callback();
  };
  if (!toastWin) {
    return
  }
  toastWin.addEventListener('transitionend', handleTransitionEnd);
  toastWin.addEventListener('webkitTransitionEnd', handleTransitionEnd);
  setTimeout(function () {
    toastWin.classList.add('hide');
  }, 0);
}

var toast = {
  push: function (msg, duration) {
    queue$1.push({
      msg: msg,
      duration: duration || DEFAULT_DURATION
    });
    this.show();
  },

  show: function () {
    var that = this;

    // All messages had been toasted already, so remove the toast window,
    if (!queue$1.length) {
      toastWin && toastWin.parentNode.removeChild(toastWin);
      toastWin = null;
      return
    }

    // the previous toast is not ended yet.
    if (isProcessing) {
      return
    }
    isProcessing = true;

    var toastInfo = queue$1.shift();
    showToastWindow(toastInfo.msg, function () {
      setTimeout(function () {
        hideToastWindow(function () {
          isProcessing = false;
          that.show();
        });
      }, toastInfo.duration * 1000);
    });
  }
};

// there will be only one instance of modal.
var MODAL_WRAP_CLASS = 'weex-modal-wrap';
var MODAL_NODE_CLASS = 'weex-modal-node';

function Modal () {
  this.wrap = document.querySelector(MODAL_WRAP_CLASS);
  this.node = document.querySelector(MODAL_NODE_CLASS);
  if (!this.wrap) {
    this.createWrap();
  }
  if (!this.node) {
    this.createNode();
  }
  this.clearNode();
  this.createNodeContent();
  this.bindEvents();
}

Modal.prototype = {

  show: function () {
    this.wrap.style.display = 'block';
    this.node.classList.remove('hide');
  },

  destroy: function () {
    document.body.removeChild(this.wrap);
    document.body.removeChild(this.node);
    this.wrap = null;
    this.node = null;
  },

  createWrap: function () {
    this.wrap = document.createElement('div');
    this.wrap.className = MODAL_WRAP_CLASS;
    document.body.appendChild(this.wrap);
  },

  createNode: function () {
    this.node = document.createElement('div');
    this.node.classList.add(MODAL_NODE_CLASS, 'hide');
    document.body.appendChild(this.node);
  },

  clearNode: function () {
    this.node.innerHTML = '';
  },

  createNodeContent: function () {

    // do nothing.
    // child classes can override this method.
  },

  bindEvents: function () {
    this.wrap.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
  }
};

var CONTENT_CLASS = 'content';
var MSG_CLASS = 'content-msg';
var BUTTON_GROUP_CLASS = 'btn-group';
var BUTTON_CLASS = 'btn';

function Alert (config) {
  this.msg = config.message || '';
  this.callback = config.callback;
  this.okTitle = config.okTitle || 'OK';
  Modal.call(this);
  this.node.classList.add('weex-alert');
}

Alert.prototype = Object.create(Modal.prototype);

Alert.prototype.createNodeContent = function () {
  var content = document.createElement('div');
  content.classList.add(CONTENT_CLASS);
  this.node.appendChild(content);

  var msg = document.createElement('div');
  msg.classList.add(MSG_CLASS);
  msg.appendChild(document.createTextNode(this.msg));
  content.appendChild(msg);

  var buttonGroup = document.createElement('div');
  buttonGroup.classList.add(BUTTON_GROUP_CLASS);
  this.node.appendChild(buttonGroup);
  var button = document.createElement('div');
  button.classList.add(BUTTON_CLASS, 'alert-ok');
  button.appendChild(document.createTextNode(this.okTitle));
  buttonGroup.appendChild(button);
};

Alert.prototype.bindEvents = function () {
  Modal.prototype.bindEvents.call(this);
  var button = this.node.querySelector('.' + BUTTON_CLASS);
  button.addEventListener('click', function () {
    this.destroy();
    this.callback && this.callback();
  }.bind(this));
};

var CONTENT_CLASS$1 = 'content';
var MSG_CLASS$1 = 'content-msg';
var BUTTON_GROUP_CLASS$1 = 'btn-group';
var BUTTON_CLASS$1 = 'btn';

function Confirm (config) {
  this.msg = config.message || '';
  this.callback = config.callback;
  this.okTitle = config.okTitle || 'OK';
  this.cancelTitle = config.cancelTitle || 'Cancel';
  Modal.call(this);
  this.node.classList.add('weex-confirm');
}

Confirm.prototype = Object.create(Modal.prototype);

Confirm.prototype.createNodeContent = function () {
  var content = document.createElement('div');
  content.classList.add(CONTENT_CLASS$1);
  this.node.appendChild(content);

  var msg = document.createElement('div');
  msg.classList.add(MSG_CLASS$1);
  msg.appendChild(document.createTextNode(this.msg));
  content.appendChild(msg);

  var buttonGroup = document.createElement('div');
  buttonGroup.classList.add(BUTTON_GROUP_CLASS$1);
  this.node.appendChild(buttonGroup);
  var btnOk = document.createElement('div');
  btnOk.appendChild(document.createTextNode(this.okTitle));
  btnOk.classList.add('btn-ok', BUTTON_CLASS$1);
  var btnCancel = document.createElement('div');
  btnCancel.appendChild(document.createTextNode(this.cancelTitle));
  btnCancel.classList.add('btn-cancel', BUTTON_CLASS$1);
  buttonGroup.appendChild(btnOk);
  buttonGroup.appendChild(btnCancel);
  this.node.appendChild(buttonGroup);
};

Confirm.prototype.bindEvents = function () {
  Modal.prototype.bindEvents.call(this);
  var btnOk = this.node.querySelector('.' + BUTTON_CLASS$1 + '.btn-ok');
  var btnCancel = this.node.querySelector('.' + BUTTON_CLASS$1 + '.btn-cancel');
  btnOk.addEventListener('click', function () {
    this.destroy();
    this.callback && this.callback(this.okTitle);
  }.bind(this));
  btnCancel.addEventListener('click', function () {
    this.destroy();
    this.callback && this.callback(this.cancelTitle);
  }.bind(this));
};

var CONTENT_CLASS$2 = 'content';
var MSG_CLASS$2 = 'content-msg';
var BUTTON_GROUP_CLASS$2 = 'btn-group';
var BUTTON_CLASS$2 = 'btn';
var INPUT_WRAP_CLASS = 'input-wrap';
var INPUT_CLASS = 'input';

function Prompt (config) {
  this.msg = config.message || '';
  this.defaultMsg = config.default || '';
  this.callback = config.callback;
  this.okTitle = config.okTitle || 'OK';
  this.cancelTitle = config.cancelTitle || 'Cancel';
  Modal.call(this);
  this.node.classList.add('weex-prompt');
}

Prompt.prototype = Object.create(Modal.prototype);

Prompt.prototype.createNodeContent = function () {
  var content = document.createElement('div');
  content.classList.add(CONTENT_CLASS$2);
  this.node.appendChild(content);

  var msg = document.createElement('div');
  msg.classList.add(MSG_CLASS$2);
  msg.appendChild(document.createTextNode(this.msg));
  content.appendChild(msg);

  var inputWrap = document.createElement('div');
  inputWrap.classList.add(INPUT_WRAP_CLASS);
  content.appendChild(inputWrap);
  var input = document.createElement('input');
  input.classList.add(INPUT_CLASS);
  input.type = 'text';
  input.autofocus = true;
  input.placeholder = this.defaultMsg;
  inputWrap.appendChild(input);

  var buttonGroup = document.createElement('div');
  buttonGroup.classList.add(BUTTON_GROUP_CLASS$2);
  var btnOk = document.createElement('div');
  btnOk.appendChild(document.createTextNode(this.okTitle));
  btnOk.classList.add('btn-ok', BUTTON_CLASS$2);
  var btnCancel = document.createElement('div');
  btnCancel.appendChild(document.createTextNode(this.cancelTitle));
  btnCancel.classList.add('btn-cancel', BUTTON_CLASS$2);
  buttonGroup.appendChild(btnOk);
  buttonGroup.appendChild(btnCancel);
  this.node.appendChild(buttonGroup);
};

Prompt.prototype.bindEvents = function () {
  Modal.prototype.bindEvents.call(this);
  var btnOk = this.node.querySelector('.' + BUTTON_CLASS$2 + '.btn-ok');
  var btnCancel = this.node.querySelector('.' + BUTTON_CLASS$2 + '.btn-cancel');
  var that = this;
  btnOk.addEventListener('click', function () {
    var val = document.querySelector('input').value;
    this.destroy();
    this.callback && this.callback({
      result: that.okTitle,
      data: val
    });
  }.bind(this));
  btnCancel.addEventListener('click', function () {
    var val = document.querySelector('input').value;
    this.destroy();
    this.callback && this.callback({
      result: that.cancelTitle,
      data: val
    });
  }.bind(this));
};

// TODO: rewrite the modal styles
var modal = {

  // duration: default is 0.8 seconds.
  toast: function (config) {
    toast.push(config.message, config.duration);
  },

  // config:
  //  - message: string
  //  - okTitle: title of ok button
  //  - callback
  alert: function (config, callback) {
    config.callback = function () {
      callback && callback();
    };
    new Alert(config).show();
  },

  // config:
  //  - message: string
  //  - okTitle: title of ok button
  //  - cancelTitle: title of cancel button
  //  - callback
  confirm: function (config, callback) {
    config.callback = function (val) {
      callback && callback(val);
    };
    new Confirm(config).show();
  },

  // config:
  //  - message: string
  //  - okTitle: title of ok button
  //  - cancelTitle: title of cancel button
  //  - callback
  prompt: function (config, callback) {
    config.callback = function (val) {
      callback && callback(val);
    };
    new Prompt(config).show();
  }
};

/**
 * Navigator module
 */

// TODO: config.animated
var navigator$1 = {
  push: function (config, callback) {
    window.location.href = config.url;
    callback && callback();
  },

  pop: function (config, callback) {
    window.history.back();
    callback && callback();
  }
};

/**
 * Webview module
 */

var webview = {
  goBack: function goBack (vnode) {
    if (vnode && typeof vnode.goBack === 'function') {
      vnode.goBack();
    }
  },
  goForward: function goForward (vnode) {
    if (vnode && typeof vnode.goForward === 'function') {
      vnode.goForward();
    }
  },
  reload: function reload (vnode) {
    if (vnode && typeof vnode.reload === 'function') {
      vnode.reload();
    }
  }
};

// modules from render/browesr
// custom modules
var modules = {
  animation: animation,
  dom: dom,
  modal: modal,
  navigator: navigator$1,
  webview: webview
};

function requireWeexModule (name) {
  if (modules[name]) {
    return modules[name]
  }
  return null
}

function init$1 (weex) {
  weex.install(Event$1);
  weex.install(Geolocation);
  weex.install(PageInfo);
  weex.install(Storage);
  weex.install(Stream);
  weex.install(Clipboard);
}

(typeof window === 'undefined') && (window = {ctrl: {}, lib: {}});!window.ctrl && (window.ctrl = {});!window.lib && (window.lib = {});!function(a,b){function c(a){Object.defineProperty(this,"val",{value:a.toString(),enumerable:!0}),this.gt=function(a){return c.compare(this,a)>0},this.gte=function(a){return c.compare(this,a)>=0},this.lt=function(a){return c.compare(this,a)<0},this.lte=function(a){return c.compare(this,a)<=0},this.eq=function(a){return 0===c.compare(this,a)};}b.env=b.env||{},c.prototype.toString=function(){return this.val},c.prototype.valueOf=function(){for(var a=this.val.split("."),b=[],c=0;c<a.length;c++){var d=parseInt(a[c],10);isNaN(d)&&(d=0);var e=d.toString();e.length<5&&(e=Array(6-e.length).join("0")+e),b.push(e),1===b.length&&b.push(".");}return parseFloat(b.join(""))},c.compare=function(a,b){a=a.toString().split("."),b=b.toString().split(".");for(var c=0;c<a.length||c<b.length;c++){var d=parseInt(a[c],10),e=parseInt(b[c],10);if(window.isNaN(d)&&(d=0),window.isNaN(e)&&(e=0),e>d){ return-1; }if(d>e){ return 1 }}return 0},b.version=function(a){return new c(a)};}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c=a.location.search.replace(/^\?/,"");if(b.env.params={},c){ for(var d=c.split("&"),e=0;e<d.length;e++){d[e]=d[e].split("=");try{b.env.params[d[e][0]]=decodeURIComponent(d[e][1]);}catch(f){b.env.params[d[e][0]]=d[e][1];}} }}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c,d=a.navigator.userAgent;if(c=d.match(/Windows\sPhone\s(?:OS\s)?([\d\.]+)/)){ b.env.os={name:"Windows Phone",isWindowsPhone:!0,version:c[1]}; }else if(d.match(/Safari/)&&(c=d.match(/Android[\s\/]([\d\.]+)/))){ b.env.os={version:c[1]},d.match(/Mobile\s+Safari/)?(b.env.os.name="Android",b.env.os.isAndroid=!0):(b.env.os.name="AndroidPad",b.env.os.isAndroidPad=!0); }else if(c=d.match(/(iPhone|iPad|iPod)/)){var e=c[1];c=d.match(/OS ([\d_\.]+) like Mac OS X/),b.env.os={name:e,isIPhone:"iPhone"===e||"iPod"===e,isIPad:"iPad"===e,isIOS:!0,version:c[1].split("_").join(".")};}else { b.env.os={name:"unknown",version:"0.0.0"}; }b.version&&(b.env.os.version=b.version(b.env.os.version));}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c,d=a.navigator.userAgent;(c=d.match(/(?:UCWEB|UCBrowser\/)([\d\.]+)/))?b.env.browser={name:"UC",isUC:!0,version:c[1]}:(c=d.match(/MQQBrowser\/([\d\.]+)/))?b.env.browser={name:"QQ",isQQ:!0,version:c[1]}:(c=d.match(/Firefox\/([\d\.]+)/))?b.env.browser={name:"Firefox",isFirefox:!0,version:c[1]}:(c=d.match(/MSIE\s([\d\.]+)/))||(c=d.match(/IEMobile\/([\d\.]+)/))?(b.env.browser={version:c[1]},d.match(/IEMobile/)?(b.env.browser.name="IEMobile",b.env.browser.isIEMobile=!0):(b.env.browser.name="IE",b.env.browser.isIE=!0),d.match(/Android|iPhone/)&&(b.env.browser.isIELikeWebkit=!0)):(c=d.match(/(?:Chrome|CriOS)\/([\d\.]+)/))?(b.env.browser={name:"Chrome",isChrome:!0,version:c[1]},d.match(/Version\/[\d+\.]+\s*Chrome/)&&(b.env.browser.name="Chrome Webview",b.env.browser.isWebview=!0)):d.match(/Safari/)&&(c=d.match(/Android[\s\/]([\d\.]+)/))?b.env.browser={name:"Android",isAndroid:!0,version:c[1]}:d.match(/iPhone|iPad|iPod/)?d.match(/Safari/)?(c=d.match(/Version\/([\d\.]+)/),b.env.browser={name:"Safari",isSafari:!0,version:c[1]}):(c=d.match(/OS ([\d_\.]+) like Mac OS X/),b.env.browser={name:"iOS Webview",isWebview:!0,version:c[1].replace(/\_/g,".")}):b.env.browser={name:"unknown",version:"0.0.0"},b.version&&(b.env.browser.version=b.version(b.env.browser.version));}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c=a.navigator.userAgent;c.match(/Weibo/i)?b.env.thirdapp={appname:"Weibo",isWeibo:!0}:c.match(/MicroMessenger/i)?b.env.thirdapp={appname:"Weixin",isWeixin:!0}:b.env.thirdapp=!1;}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c,d,e=a.navigator.userAgent;(d=e.match(/WindVane[\/\s]([\d\.\_]+)/))&&(c=d[1]);var f=!1,g="",h="",i="";(d=e.match(/AliApp\(([A-Z\-]+)\/([\d\.]+)\)/i))&&(f=!0,g=d[1],i=d[2],h=g.indexOf("-PD")>0?b.env.os.isIOS?"iPad":b.env.os.isAndroid?"AndroidPad":b.env.os.name:b.env.os.name),!g&&e.indexOf("TBIOS")>0&&(g="TB"),f?b.env.aliapp={windvane:b.version(c||"0.0.0"),appname:g||"unkown",version:b.version(i||"0.0.0"),platform:h||b.env.os.name}:b.env.aliapp=!1,b.env.taobaoApp=b.env.aliapp;}(window,window.lib||(window.lib={}));

var lib$1 = window.lib;
var env = {
  platform: 'Web',
  weexVersion: '0.10.0', // TODO: get version from package.json (not sure)
  userAgent: navigator.userAgent,
  appName: lib$1.env.aliapp ? lib$1.env.aliapp.appname : navigator.appName,
  appVersion: lib$1.env.aliapp ? lib$1.env.aliapp.version.val : null,
  osName: lib$1.env.browser ? lib$1.env.browser.name : null,
  osVersion: lib$1.env.browser ? lib$1.env.browser.version.val : null,
  deviceModel: lib$1.env.os.name || null,
  deviceWidth: window.innerWidth,
  deviceHeight: window.innerHeight
};

// 750 by default currently
var scale = 2;

var units = {
  REM: 12 * scale,
  VW: env.deviceWidth / 100,
  VH: env.deviceHeight / 100,
  VMIN: Math.min(env.deviceWidth, env.deviceHeight) / 100,
  VMAX: Math.max(env.deviceWidth, env.deviceHeight) / 100,
  CM: 96 / 2.54 * scale,
  MM: 96 / 25.4 * scale,
  Q: 96 / 25.4 / 4 * scale,
  IN: 96 * scale,
  PT: 96 / 72 * scale,
  PC: 96 / 6 * scale,
  PX: scale
};

Object.freeze(units);
Object.freeze(env);

window.CSS_UNIT = units;
window.WXEnvironment = env;

var weexModules = {};

var weex = {
  utils: utils$1,
  units: window.CSS_UNIT,
  config: {
    env: window.WXEnvironment,
    bundleUrl: location.href
  },

  requireModule: function requireModule (moduleName) {
    var module = requireWeexModule(moduleName);
    if (module) {
      return module
    }
    return weexModules[moduleName]
  },

  registerModule: function registerModule () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return (ref = this).registerApiModule.apply(ref, args)
    var ref;
  },

  // @deprecated
  require: function require () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    console.log("[Vue Render] \"weex.require\" is deprecated, please use \"weex.requireModule\" instead.");
    return (ref = this).requireModule.apply(ref, args)
    var ref;
  },

  // @deprecated
  // TODO: rename to registerModule
  registerApiModule: function registerApiModule (name, module, meta) {
    var this$1 = this;

    if (!weexModules[name]) {
      weexModules[name] = {};
    }
    for (var key in module) {
      if (module.hasOwnProperty(key)) {
        weexModules[name][key] = bind(module[key], this$1);
      }
    }
  },

  // @deprecated
  getRoot: function getRoot () {},

  // @deprecated
  sender: {
    performCallback: function performCallback (callback, data, keepAlive) {
      if (typeof callback === 'function') {
        return callback(data)
      }
      return null
    }
  },

  // @deprecated
  install: function install (module) {
    module.init(this);
  }
};

// import 'lazyimg'
init$1(weex);

Object.freeze(weex);
window.weex = weex;

var supportedEvents = [
  'click', 'longpress', 'appear', 'disappear' ];

var base = {
  mounted: function mounted () {
    watchAppear(this);
  },

  methods: {
    createEventMap: function createEventMap (extras) {
      var this$1 = this;
      if ( extras === void 0 ) extras = [];

      var eventMap = {};
      supportedEvents.concat(extras).forEach(function (name) {
        eventMap[name] = function (event) { return this$1.$emit(name, event); };
      });
      return eventMap
    }
  }
};

var event$1 = {
  methods: {
    /**
     * Create Event.
     * @param {DOMString} type
     * @param {Object} props
     */
    createEvent: function createEvent (context, type, props) {
      var event = new Event(type, { bubbles: false });
      // event.preventDefault()
      event.stopPropagation();

      extend(event, props);

      Object.defineProperty(event, 'target', {
        enumerable: true,
        value: context || null
      });

      return event
    },

    /**
     * Create Custom Event.
     * @param {DOMString} type
     * @param {Object} props
     */
    createCustomEvent: function createCustomEvent (context, type, props) {
      // compatibility: http://caniuse.com/#search=customevent
      // const event = new CustomEvent(type)
      var event = document.createEvent('CustomEvent');
      event.initCustomEvent(type, false, true, {});
      // event.preventDefault()
      event.stopPropagation();

      extend(event, props);

      // TODO: event.target is readonly
      // Object.defineProperty(event, 'target', {
      //   enumerable: true,
      //   value: context || null
      // })

      return event
    },

    /**
     * Check and emit longpress event.
     * @param {Object} event
     */
    handleLongPress: function handleLongPress (context, event) {
      // TODO: check the condition
      context.$emit('longpress', context.createCustomEvent('longpress'));
    },

    /**
     * Check and emit appear event.
     * @param {Object} event
     */
    handleAppear: function handleAppear (context, event) {
      // TODO: check the condition
      context.$emit('appear', context.createCustomEvent('appear'));
    },

    /**
     * Check and emit disappear event.
     * @param {Object} event
     */
    handDisappear: function handDisappear (context, event) {
      // TODO: check the condition
      context.$emit('disappear', context.createCustomEvent('disappear'));
    }
  }
};

var scrollable = {
  methods: {
    updateLayout: function updateLayout () {
      var wrapper = this.$refs.wrapper;
      if (wrapper) {
        var rect = wrapper.getBoundingClientRect();
        this.wrapperWidth = rect.width;
        this.wrapperHeight = rect.height;
      }
    },

    handleScroll: function handleScroll (event) {
      if (this.reachBottom()) {
        this.$emit('loadmore', event);
      }
    },

    reachTop: function reachTop () {
      var wrapper = this.$refs.wrapper;
      return (!!wrapper) && (wrapper.scrollTop <= 0)
    },

    reachBottom: function reachBottom () {
      var wrapper = this.$refs.wrapper;
      var inner = this.$refs.inner;
      var offset = Number(this.loadmoreoffset) || 0;

      if (wrapper && inner) {
        var innerHeight = inner.getBoundingClientRect().height;
        var wrapperHeight = wrapper.getBoundingClientRect().height;
        return wrapper.scrollTop >= innerHeight - wrapperHeight - offset
      }
      return false
    }
  }
};

/**
 * Validate the CSS color value.
 */
function isCSSColor (value) {
  return /^[a-z]+$/i.test(value) // match color name
    || /^#([a-f0-9]{3}){1,2}$/i.test(value) // match #ABCDEF
    || /^rgb\s*\((\s*[0-9.]+\s*,){2}\s*[0-9.]+\s*\)/i.test(value) // match rgb(0,0,0)
    || /^rgba\s*\((\s*[0-9.]+\s*,){3}\s*[0-9.]+\s*\)/i.test(value) // match rgba(0,0,0,0)
}

function isCSSLength (value) {
  return /^[+-]?[0-9]+.?([0-9]+)?(px|%)?$/.test(String(value))
}

function position (value) {
  return ['absolute', 'relative', 'fixed', 'sticky'].indexOf(value) !== -1
}

function opacity (value) {
  var count = parseFloat(value);
  return count >= 0 && count <= 1
}

function display (value) {
  return ['flex'].indexOf(value) !== -1
}

function flexDirection (value) {
  return ['row', 'column'].indexOf(value) !== -1
}

function justifyContent (value) {
  return ['flex-start', 'flex-end', 'center', 'space-between'].indexOf(value) !== -1
}

function alignItems (value) {
  return ['stretch', 'flex-start', 'flex-end', 'center'].indexOf(value) !== -1
}

function flex (value) {
  return /^\d{1,3}$/.test(String(value))
}

function fontStyle (value) {
  return ['normal', 'italic', 'oblique'].indexOf(value) !== -1
}

function fontWeight (value) {
  return ['normal', 'bold', 'light', 'bolder', 'lighter'].indexOf(value) !== -1
}

function textDecoration (value) {
  return ['none', 'underline', 'line-through'].indexOf(value) !== -1
}

function textAlign (value) {
  return ['left', 'center', 'right'].indexOf(value) !== -1
}

function overflow (value) {
  return ['visible', 'hidden'].indexOf(value) !== -1
}

function textOverflow (value) {
  return ['clip', 'ellipsis'].indexOf(value) !== -1
}

/**
 * Common style validator.
 * @param {any} value
 * @param {String} key
 */
function common (value, key) {
  if (/^[\w-]*color$/.test(String(key))) {
    return isCSSColor(value)
  }

  // check width and height
  if (/^(width|height)$/.test(String(key))) {
    return isCSSLength(value)
  }

  // check postions
  if (/^(top|right|bottom|left)$/.test(String(key))) {
    return isCSSLength(value)
  }

  // checkout border-radius
  if (/^border-((top|right|bottom|left)-){0,2}(width|radius)$/.test(String(key))) {
    return isCSSLength(value)
  }

  // check border-style
  if (/border-((top|right|bottom|left)-)?style/.test(String(key))) {
    return ['solid', 'dashed', 'dotted'].indexOf(value) !== -1
  }

  // check margins and paddings
  if (/^((margin|padding)-)?(top|right|bottom|left)/.test(String(key))) {
    return isCSSLength(value)
  }

  switch (String(key)) {
    case 'font-size': return isCSSLength(value)
  }

  return true
}


var styleValidator = Object.freeze({
	isCSSColor: isCSSColor,
	isCSSLength: isCSSLength,
	position: position,
	opacity: opacity,
	display: display,
	flexDirection: flexDirection,
	justifyContent: justifyContent,
	alignItems: alignItems,
	flex: flex,
	fontStyle: fontStyle,
	fontWeight: fontWeight,
	textDecoration: textDecoration,
	textAlign: textAlign,
	overflow: overflow,
	textOverflow: textOverflow,
	common: common
});

function isString (value) {
  return Object.prototype.toString.call(value) === '[object String]'
}


var propValidator = Object.freeze({
	isString: isString
});

var supportedStyles = {
  '*': [
    '@box-model', '@border', '@position', '@flexbox', '@font', '@text', '@bg',
    'lines', 'item-size', 'item-color', 'item-selected-color'
  ],
  '@box-model': [
    'width', 'height', 'position',
    'padding-top', 'padding-bottom', 'padding-left', 'padding-right',
    'margin-top', 'margin-bottom', 'margin-left', 'margin-right'
  ],
  '@border': [
    'border-style', 'border-width', 'border-color', 'border-radius',
    'border-top-style', 'border-right-style', 'border-bottom-style', 'border-left-style',
    'border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width',
    'border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color',
    'border-top-left-radius', 'border-top-right-radius', 'border-bottom-left-radius', 'border-bottom-right-radius'
  ],
  '@position': ['position', 'top', 'left', 'right', 'bottom'],
  '@flexbox': [
    'flex', 'flex-direction', 'justify-content', 'align-items', 'flex-wrap'
  ],
  '@font': ['font-size', 'font-weight', 'font-style', 'font-family', 'line-height'],
  '@text': ['text-align', 'text-decoration', 'text-overflow', 'color'],
  '@bg': ['background-color', 'opacity'],

  'a': ['@box-model', '@border', '@position', '@flexbox', '@bg'],
  'div': ['@box-model', '@border', '@position', '@flexbox', '@bg'],
  'text': ['@box-model', '@border', '@position', '@font', '@text', '@bg', 'lines'],
  'slider': ['@box-model', '@border', '@position', '@flexbox', '@bg'],
  'switch': ['@box-model', '@border', '@position', '@flexbox', '@bg'],
  'indicator': ['@box-model', '@border', '@position', '@flexbox', '@bg', 'item-size', 'item-color', 'item-selected-color'],
  'input': ['@box-model', '@border', '@position', '@font', '@text', '@bg'],
  'textarea': ['@box-model', '@border', '@position', '@font', '@text', '@bg', 'rows'],
  'scroller': ['@box-model', '@border', '@position', '@flexbox', '@bg'],
  'loading': ['@box-model', '@border', '@position', '@flexbox', '@bg'],
  'refresh': ['@box-model', '@border', '@position', '@flexbox', '@bg'],
  'list': ['@box-model', '@border', '@position', '@flexbox', '@bg'],
  'cell': ['@box-model', '@border', '@position', '@flexbox', '@bg'],
  'video': ['@box-model', '@border', '@position', '@flexbox', '@bg'],
  'web': ['@box-model', '@border', '@position', '@flexbox', '@bg']
};

/**
 * Flatten a multiple dimension array.
 */
function flatten (array) {
  return array.reduce(function (dist, item) {
    return dist.concat(Array.isArray(item) ? flatten(item) : item)
  }, [])
}

/**
 * Check if the value is in the list.
 * @param {String} type
 * @param {String} value
 * @param {Object} dict
 */
function checkSupported (type, value, dict) {
  if ( dict === void 0 ) dict = {};

  var tagType = dict[type] ? type : '*';
  if (Array.isArray(dict[tagType])) {
    return flatten(dict[tagType].map(function (k) { return dict[k] || k; })).indexOf(value) !== -1
  }
  return false
}

/**
 * Check if the style is supported for the component.
 * @param {String} type
 * @param {String} style
 */
function isSupportedStyle (type, style) {
  return checkSupported(type, style, supportedStyles)
}

/**
 * Check if the property is supported for the component.
 * @param {String} type
 * @param {String} property
 */

var onfail = function nope () {};
var showConsole = true;

function warn () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  var message = args.join(' ');
  showConsole && console.warn(message);
  onfail(message);
  return message
}

/**
 * Configure the validator.
 * @param {Object} configs
 */


/**
 * Validate the styles of the component.
 * @param {String} type
 * @param {Object} styles
 */
function validateStyles (type, styles) {
  if ( styles === void 0 ) styles = {};

  var isValid = true;

  if (isPlainObject(type)) {
    styles = type;
    type = '*';
  }

  for (var key in styles) {
    if (!isSupportedStyle(type, hyphenate(key))) {
      isValid = false;
      warn((type === '*')
        ? ("[Style Validator] Not support to use the \"" + key + "\" style property.")
        : ("[Style Validator] <" + type + "> is not support to use the \"" + key + "\" style property.")
      );
    }
    else {
      var validator = styleValidator[camelize(key)] || common;
      if (!validator(styles[key], hyphenate(key))) {
        isValid = false;
        warn(("[Style Validator] The style \"" + key + "\" is not support the \"" + (styles[key]) + "\" value."));
      }
    }
  }
  return isValid
}

/**
 * Validate the properties of the component.
 * @param {String} type
 * @param {Object} props
 */

var _switch = {
  mixins: [base],
  props: {
    checked: {
      type: [Boolean, String],
      default: false
    },
    disabled: {
      type: [Boolean, String],
      default: false
    }
  },
  data: function data () {
    return {
      isChecked: (this.checked !== 'false' && this.checked !== false),
      isDisabled: (this.disabled !== 'false' && this.disabled !== false)
    }
  },
  computed: {
    wrapperClass: function wrapperClass () {
      var classArray = ['weex-switch'];
      this.isChecked && classArray.push('weex-switch-checked');
      this.isDisabled && classArray.push('weex-switch-disabled');
      return classArray.join(' ')
    }
  },
  methods: {
    toggle: function toggle () {
      // TODO: handle the events
      if (!this.isDisabled) {
        this.isChecked = !this.isChecked;
        this.$emit('change', { value: this.isChecked });
      }
    }
  },

  render: function render (createElement) {
    var this$1 = this;

    /* istanbul ignore next */
    {
      validateStyles('switch', this.$vnode.data && this.$vnode.data.staticStyle);
    }

    return createElement('span', {
      attrs: { 'weex-type': 'switch' },
      staticClass: this.wrapperClass,
      on: {
        click: function (event$$1) {
          this$1.$emit('click', event$$1);
          this$1.toggle();
        }
      }
    }, [createElement('small', { staticClass: 'weex-switch-inner' })])
  }
};

var a = {
  mixins: [base],
  props: {
    href: String
  },
  render: function render (createElement) {
    /* istanbul ignore next */
    {
      validateStyles('a', this.$vnode.data && this.$vnode.data.staticStyle);
    }

    return createElement('html:a', {
      attrs: {
        'weex-type': 'a',
        href: this.href
      },
      on: this.createEventMap(),
      staticClass: 'weex-a'
    }, this.$slots.default)
  }
};

function trimTextNode (children) {
  if (Array.isArray(children)) {
    return children.filter(function (vnode) { return !!vnode.tag; })
  }
  return children
}

var div = {
  mixins: [base],
  render: function render (createElement) {
    /* istanbul ignore next */
    {
      validateStyles('div', this.$vnode.data && this.$vnode.data.staticStyle);
    }

    return createElement('html:div', {
      attrs: { 'weex-type': 'div' },
      on: this.createEventMap(),
      staticClass: 'weex-div'
    }, trimTextNode(this.$slots.default))
  }
};

var image = {
  mixins: [base],
  props: {
    src: {
      type: String,
      required: true
    },
    resize: {
      validator: function validator (value) {
        /* istanbul ignore next */
        return ['cover', 'contain', 'stretch'].indexOf(value) !== -1
      }
    }
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    {
      validateStyles('image', this.$vnode.data && this.$vnode.data.staticStyle);
    }

    var cssText = "background-image:url(\"" + (this.src) + "\");";

    // compatibility: http://caniuse.com/#search=background-size
    cssText += (this.resize && this.resize !== 'stretch')
      ? ("background-size: " + (this.resize) + ";")
      : "background-size: 100% 100%;";

    return createElement('figure', {
      attrs: { 'weex-type': 'image' },
      on: this.createEventMap(['load']),
      staticClass: 'weex-image',
      style: cssText
    })
  }
};

var input = {
  mixins: [base],
  props: {
    type: {
      type: String,
      default: 'text',
      validator: function validator (value) {
        return [
          'email', 'number', 'password', 'search', 'tel', 'text', 'url' ].indexOf(value) !== -1
      }
    },
    value: String,
    placeholder: String,
    disabled: {
      type: [String, Boolean],
      default: false
    },
    autofocus: {
      type: [String, Boolean],
      default: false
    },
    maxlength: [String, Number]
  },
  methods: {
    setSelectionRange: setSelectionRange,
    getSelectionRange: getSelectionRange
  },
  render: function render (createElement) {
    /* istanbul ignore next */
    {
      validateStyles('input', this.$vnode.data && this.$vnode.data.staticStyle);
    }

    return createElement('html:input', {
      attrs: {
        'weex-type': 'input',
        type: this.type,
        value: this.value,
        disabled: (this.disabled !== 'false' && this.disabled !== false),
        autofocus: (this.autofocus !== 'false' && this.autofocus !== false),
        placeholder: this.placeholder,
        maxlength: this.maxlength
      },
      on: extend(this.createEventMap(), mapFormEvents(this)),
      staticClass: 'weex-input'
    })
  }
};

var LoadingIndicator = {
  name: 'loading-indicator',
  render: function render (createElement) {
    this.weexType = 'loading-indicator';
    return createElement('mark', {
      attrs: { 'weex-type': 'loading-indicator' },
      staticClass: 'weex-loading-indicator'
    })
  }
};

var refresh = {
  // name: 'refresh',
  components: { LoadingIndicator: LoadingIndicator },
  props: {
    display: {
      type: String,
      default: 'show',
      validator: function validator (value) {
        return ['show', 'hide'].indexOf(value) !== -1
      }
    }
  },
  data: function data () {
    return {
      height: 0
    }
  },
  methods: {
    show: function show () {
      // TODO: no fixed height
      this.$emit('refresh');
      this.height = '1.6rem';
      this.visibility = 'visible';
    },
    reset: function reset () {
      this.height = 0;
      this.visibility = 'hidden';
      this.$emit('refreshfinish');
    },
    getChildren: function getChildren () {
      var children = this.$slots.default || [];
      if (this.display === 'show') {
        return children
      }
      return children.filter(function (vnode) {
        return vnode.componentOptions
          && vnode.componentOptions.tag !== 'loading-indicator'
      })
    }
  },
  render: function render (createElement) {
    return createElement('aside', {
      ref: 'refresh',
      attrs: { 'weex-type': 'refresh' },
      style: { height: this.height, visibility: this.visibility },
      staticClass: 'weex-refresh'
    }, this.getChildren())
  }
};

var loading = {
  // name: 'loading',
  components: { LoadingIndicator: LoadingIndicator },
  props: {
    display: {
      type: String,
      default: 'show',
      validator: function validator (value) {
        return ['show', 'hide'].indexOf(value) !== -1
      }
    }
  },
  data: function data () {
    return {
      height: 0
    }
  },
  methods: {
    show: function show () {
      this.$emit('loading');
      this.height = '1.6rem';
      this.visibility = 'visible';
    },
    reset: function reset () {
      this.height = 0;
      this.visibility = 'hidden';
      this.$emit('loadingfinish');
    },
    getChildren: function getChildren () {
      var children = this.$slots.default || [];
      if (this.display === 'show') {
        return children
      }
      return children.filter(function (vnode) {
        return vnode.componentOptions
          && vnode.componentOptions.tag !== 'loading-indicator'
      })
    }
  },
  render: function render (createElement) {
    return createElement('aside', {
      ref: 'loading',
      attrs: { 'weex-type': 'loading' },
      style: { height: this.height, visibility: this.visibility },
      staticClass: 'weex-loading'
    }, this.getChildren())
  }
};

// import header from './header'
// export function createHeader (context, createElement) {
//   return createElement(header)
// }

function createLoading (context, createElement, vnode) {
  var options = vnode.componentOptions;
  return createElement(loading, extend({
    on: options.listeners
  }, vnode.data), options.children)
}

function createRefresh (context, createElement, vnode) {
  var options = vnode.componentOptions;
  return createElement(refresh, extend({
    on: options.listeners
  }, vnode.data), options.children)
}

var listMixin = {
  methods: {
    moveTo: function moveTo (offsetY, done) {
      if ( offsetY === void 0 ) offsetY = 0;

      var inner = this.$refs.inner;
      if (inner) {
        inner.style.willChange = "transform";
        inner.style.transition = "transform .2s ease-in-out";
        inner.style.transform = "translate3d(0, " + offsetY + ", 0)";
        setTimeout(function () {
          inner.style.transition = '';
          inner.style.willChange = '';
          done && done();
        }, 200);
      }
    },

    done: function done () {
      this.moveTo(0);
      this._refresh && this._refresh.child.reset();
      this._loading && this._loading.child.reset();
    },

    showRefresh: function showRefresh () {
      this.moveTo('1.6rem');
      if (this._refresh && this._refresh.child) {
        this._refresh.child.show();
      }
    },

    showLoading: function showLoading () {
      this.moveTo('-1.6rem');
      if (this._loading && this._loading.child) {
        this._loading.child.show();
      }
    },

    handleTouchStart: function handleTouchStart (event) {
      // event.preventDefault()
      event.stopPropagation();
      if (this._loading || this._refresh) {
        var touch = event.changedTouches[0];
        this._touchParams = {
          reachTop: this.reachTop(),
          reachBottom: this.reachBottom(),
          startTouchEvent: touch,
          startX: touch.pageX,
          startY: touch.pageY,
          timeStamp: event.timeStamp
        };
      }
    },

    handleTouchMove: function handleTouchMove (event) {
      // event.preventDefault()
      event.stopPropagation();
      if (this._touchParams) {
        var inner = this.$refs.inner;
        var ref = this._touchParams;
        var startY = ref.startY;
        var reachTop = ref.reachTop;
        var reachBottom = ref.reachBottom;
        if (inner && (reachTop && this._refresh || reachBottom && this._loading)) {
          var touch = event.changedTouches[0];
          var offsetY = touch.pageY - startY;
          this._touchParams.offsetY = offsetY;
          if (offsetY) {
            inner.style.transform = "translate3d(0, " + offsetY + "px, 0)";
          }
        }
      }
    },

    handleTouchEnd: function handleTouchEnd (event) {
      // event.preventDefault()
      event.stopPropagation();
      if (this._touchParams) {
        var inner = this.$refs.inner;
        var ref = this._touchParams;
        var offsetY = ref.offsetY;
        var reachTop = ref.reachTop;
        var reachBottom = ref.reachBottom;
        if (inner && (reachTop && this._refresh || reachBottom && this._loading)) {
          if (offsetY > 120) {
            this.showRefresh();
          }
          else if (offsetY < -120) {
            this.showLoading();
          }
          else {
            this.done(0);
          }
        }
      }
      delete this._touchParams;
    }
  }
};

var index$6 = {
  mixins: [base, event$1, scrollable, listMixin],
  props: {
    loadmoreoffset: {
      type: [String, Number],
      default: 0
    }
  },

  computed: {
    wrapperClass: function wrapperClass () {
      var classArray = ['weex-list', 'weex-list-wrapper'];
      this._refresh && classArray.push('with-refresh');
      this._loading && classArray.push('with-loading');
      return classArray.join(' ')
    }
  },

  methods: {
    createChildren: function createChildren (h) {
      var this$1 = this;

      var slots = this.$slots.default || [];
      this._cells = slots.filter(function (vnode) {
        if (!vnode.tag || !vnode.componentOptions) { return false }
        switch (vnode.componentOptions.tag) {
          case 'loading': this$1._loading = createLoading(this$1, h, vnode); return false
          case 'refresh': this$1._refresh = createRefresh(this$1, h, vnode); return false
        }
        return true
      });
      return [
        this._refresh,
        h('html:div', {
          ref: 'inner',
          staticClass: 'weex-list-inner'
        }, this._cells),
        this._loading
      ]
    }
  },

  render: function render (createElement) {
    var this$1 = this;

    this.weexType = 'list';

    /* istanbul ignore next */
    {
      validateStyles('list', this.$vnode.data && this.$vnode.data.staticStyle);
    }

    this.$nextTick(function () {
      this$1.updateLayout();
    });

    return createElement('main', {
      ref: 'wrapper',
      attrs: { 'weex-type': 'list' },
      staticClass: this.wrapperClass,
      on: extend(this.createEventMap(), {
        scroll: debounce(bind(this.handleScroll, this), 30),
        touchstart: this.handleTouchStart,
        touchmove: throttle(bind(this.handleTouchMove, this), 25),
        touchend: this.handleTouchEnd
      })
    }, this.createChildren(createElement))
  }
};

var cell = {
  mixins: [base],
  render: function render (createElement) {
    /* istanbul ignore next */
    {
      validateStyles('cell', this.$vnode.data && this.$vnode.data.staticStyle);
    }

    return createElement('section', {
      attrs: { 'weex-type': 'cell' },
      on: this.createEventMap(),
      staticClass: 'weex-cell'
    }, this.$slots.default)
  }
};

var scroller = {
  mixins: [base, scrollable, listMixin],
  props: {
    scrollDirection: {
      type: [String],
      default: 'vertical',
      validator: function validator (value) {
        return ['horizontal', 'vertical'].indexOf(value) !== -1
      }
    },
    loadmoreoffset: {
      type: [String, Number],
      default: 0
    },
    // TODO: support loadmore retry
    loadmoreretry: {
      type: [String, Number],
      default: 0
    }
  },

  computed: {
    wrapperClass: function wrapperClass () {
      var classArray = ['weex-scroller', 'weex-scroller-wrapper'];
      if (this.scrollDirection === 'horizontal') {
        classArray.push('weex-scroller-horizontal');
      }
      return classArray.join(' ')
    }
  },

  methods: {
    createChildren: function createChildren (h) {
      var this$1 = this;

      var slots = this.$slots.default || [];
      this._cells = slots.filter(function (vnode) {
        if (!vnode.tag || !vnode.componentOptions) { return false }
        switch (vnode.componentOptions.tag) {
          case 'loading': this$1._loading = createLoading(this$1, h, vnode); return false
          case 'refresh': this$1._refresh = createRefresh(this$1, h, vnode); return false
        }
        return true
      });
      return [
        this._refresh,
        h('html:div', {
          ref: 'inner',
          staticClass: 'weex-scroller-inner'
        }, this._cells),
        this._loading
      ]
    },
    scrollTo: function scrollTo (vnode) {
      if (vnode && vnode.$el) {
        // TODO: add animation
        this.$el.scrollTop = vnode.$el.offsetTop;
      }
    }
  },

  render: function render (createElement) {
    var this$1 = this;

    this.weexType = 'scroller';

    /* istanbul ignore next */
    {
      validateStyles('scroller', this.$vnode.data && this.$vnode.data.staticStyle);
    }

    this._cells = this.$slots.default || [];
    this.$nextTick(function () {
      this$1.updateLayout();
    });

    return createElement('main', {
      ref: 'wrapper',
      attrs: { 'weex-type': 'scroller' },
      staticClass: this.wrapperClass,
      on: extend(this.createEventMap(), {
        scroll: debounce(bind(this.handleScroll, this), 30),
        touchstart: this.handleTouchStart,
        touchmove: throttle(bind(this.handleTouchMove, this), 25),
        touchend: this.handleTouchEnd
      })
    }, this.createChildren(createElement))
  }
};

var indicator = {
  name: 'indicator',
  props: {
    count: [Number, String],
    active: [Number, String]
  },
  render: function render (createElement) {
    var this$1 = this;

    var children = [];
    for (var i = 0; i < Number(this.count); ++i) {
      var classNames = ['weex-indicator-item'];
      if (i === Number(this$1.active)) {
        classNames.push('weex-indicator-item-active');
      }
      children.push(createElement('mark', {
        staticClass: classNames.join(' ')
      }));
    }
    return createElement('nav', {
      attrs: { 'weex-type': 'indicator' },
      staticClass: 'weex-indicator'
    }, children)
  }
};

var TRANSITION_TIME = 200;

var slideMixin = {
  methods: {
    // get standard index
    normalizeIndex: function normalizeIndex (index) {
      var newIndex = (index + this.frameCount) % this.frameCount;
      return Math.min(Math.max(newIndex, 0), this.frameCount - 1)
    },

    slideTo: function slideTo (index) {
      var this$1 = this;

      var newIndex = this.normalizeIndex(index);
      this.innerOffset += Math.sign(this.currentIndex - index) * this.wrapperWidth;

      var inner = this.$refs.inner;
      if (inner) {
        // TODO: will-change | set styles together
        inner.style.transition = "transform .2s ease-in-out";
        inner.style.transform = "translate3d(" + (this.innerOffset) + "px, 0, 0)";
        setTimeout(function () {
          inner.style.transition = '';
        }, TRANSITION_TIME);
      }

      if (newIndex !== this.currentIndex) {
        this.currentIndex = newIndex;
        this.$emit('change', this.createEvent('change', {
          index: this.currentIndex
        }));
        setTimeout(function () { this$1.reorder(); }, TRANSITION_TIME);
      }
    },

    reorder: function reorder () {
      var this$1 = this;

      this.$nextTick(function () {
        var prevIndex = this$1.normalizeIndex(this$1.currentIndex - 1);
        var nextIndex = this$1.normalizeIndex(this$1.currentIndex + 1);
        // TODO: clone frame when prevIndex === nextIndex
        // if (prevIndex !== nextIndex) {
        // }
        var prevCell = this$1._cells[prevIndex];
        var nextCell = this$1._cells[nextIndex];
        if (prevCell && prevCell.elm) {
          var prevOffset = -this$1.wrapperWidth - this$1.innerOffset;
          prevCell.elm.style.transform = "translate3d(" + prevOffset + "px, 0, 0)";
        }
        if (nextCell && nextCell.elm) {
          var nextOffset = this$1.wrapperWidth - this$1.innerOffset;
          nextCell.elm.style.transform = "translate3d(" + nextOffset + "px, 0, 0)";
        }
      });
    },

    next: function next () {
      this.slideTo(this.currentIndex + 1);
    },

    prev: function prev () {
      this.slideTo(this.currentIndex - 1);
    },

    handleTouchStart: function handleTouchStart (event) {
      event.preventDefault();
      event.stopPropagation();
      // console.log('touch start', event)
      var touch = event.changedTouches[0];
      // console.log('touch start', event.target, event.target.pageY)
      // console.log('touches', touch)
      this._touchParams = {
        originalTransform: this.$refs.inner.style.transform,
        startTouchEvent: touch,
        startX: touch.pageX,
        startY: touch.pageY,
        timeStamp: event.timeStamp
      };
    },

    handleTouchMove: function handleTouchMove (event) {
      event.preventDefault();
      event.stopPropagation();
      // console.log('touch move')
      if (this._touchParams) {
        var inner = this.$refs.inner;
        var ref = this._touchParams;
        var startX = ref.startX;
        var touch = event.changedTouches[0];
        var offsetX = touch.pageX - startX;
        // console.log('offsetX', offsetX, 'startX', startX, 'pageX', touch.pageX)
        this._touchParams.offsetX = offsetX;

        if (inner && offsetX) {
          inner.style.transform = "translate3d(" + (this.innerOffset + offsetX) + "px, 0, 0)";
        }
      }
    },

    handleTouchEnd: function handleTouchEnd (event) {
      event.preventDefault();
      event.stopPropagation();
      // console.log('touch end')
      var inner = this.$refs.inner;
      if (this._touchParams) {
        var ref = this._touchParams;
        var offsetX = ref.offsetX;
        if (inner) {
          var reset = Math.abs(offsetX / this.wrapperWidth) < 0.2;
          var direction = offsetX > 0 ? 1 : -1;
          var newIndex = reset ? this.currentIndex : (this.currentIndex - direction);
          this.slideTo(newIndex);
        }
      }
      delete this._touchParams;
    }
  }
};

var index$7 = {
  mixins: [base, event$1, slideMixin],
  props: {
    'auto-play': {
      type: [String, Boolean],
      default: false
    },
    interval: {
      type: [String, Number],
      default: 3000
    }
  },

  data: function data () {
    return {
      currentIndex: 0,
      frameCount: 0
    }
  },

  methods: {
    computeWrapperSize: function computeWrapperSize () {
      var wrapper = this.$refs.wrapper;
      if (wrapper) {
        var rect = wrapper.getBoundingClientRect();
        this.wrapperWidth = rect.width;
        this.wrapperHeight = rect.height;
      }
    },

    updateLayout: function updateLayout () {
      this.computeWrapperSize();
      var inner = this.$refs.inner;
      if (inner) {
        inner.style.width = this.wrapperWidth * this.frameCount + 'px';
      }
    },

    formatChildren: function formatChildren (createElement) {
      var this$1 = this;

      var children = this.$slots.default || [];
      return children.filter(function (vnode) {
        if (!vnode.tag) { return false }
        if (vnode.componentOptions && vnode.componentOptions.tag === 'indicator') {
          this$1._indicator = createElement(indicator, {
            staticClass: vnode.data.staticClass,
            staticStyle: vnode.data.staticStyle,
            attrs: {
              count: this$1.frameCount,
              active: this$1.currentIndex
            }
          });
          return false
        }
        return true
      }).map(function (vnode) {
        return createElement('li', {
          ref: 'cells',
          staticClass: 'weex-slider-cell'
        }, [vnode])
      })
    }
  },

  created: function created () {
    var this$1 = this;

    this.weexType = 'slider';
    this.currentIndex = 0;
    this.innerOffset = 0;
    this._indicator = null;
    this.$nextTick(function () {
      this$1.updateLayout();
    });
  },

  beforeUpdate: function beforeUpdate () {
    this.updateLayout();
    this.reorder();
  },

  mounted: function mounted () {
    if (this.autoPlay) {
      var interval = Number(this.interval);
      this._lastSlideTime = Date.now();

      var autoPlayFn = bind(function () {
        clearTimeout(this._autoPlayTimer);
        var now = Date.now();
        var nextTick = interval - now + this._lastSlideTime;
        nextTick = nextTick > 100 ? nextTick : interval;

        this.next();
        this._lastSlideTime = now;
        this._autoPlayTimer = setTimeout(autoPlayFn, nextTick);
      }, this);

      this._autoPlayTimer = setTimeout(autoPlayFn, interval);
    }

    this.reorder();
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    {
      validateStyles('slider', this.$vnode.data && this.$vnode.data.staticStyle);
    }

    this._cells = this.formatChildren(createElement);
    this.frameCount = this._cells.length;

    return createElement(
      'nav',
      {
        ref: 'wrapper',
        attrs: { 'weex-type': 'slider' },
        staticClass: 'weex-slider weex-slider-wrapper',
        on: extend(this.createEventMap(), {
          touchstart: this.handleTouchStart,
          touchmove: throttle(bind(this.handleTouchMove, this), 25),
          touchend: this.handleTouchEnd
        })
      },
      [
        createElement('ul', {
          ref: 'inner',
          staticClass: 'weex-slider-inner'
        }, this._cells),
        this._indicator
      ]
    )
  }
};

var warning = {
  render: function render () {
    // TODO: add tag nesting validation
    {
      var tag = this.$options._componentTag;
      var parentTag = this.$parent.$options._componentTag;
      console.warn(("[Vue Render] The <" + tag + "> can't be the child of <" + parentTag + ">."));
    }
    return null
  }
};

/**
 * Get text styles
 */
function getTextStyle (context) {
  if ( context === void 0 ) context = {};

  var lines = parseInt(context.lines) || 0;
  if (lines > 0) {
    return {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      webkitLineClamp: lines
    }
  }
}

var text = {
  mixins: [base],
  props: {
    lines: [Number, String],
    value: [String]
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    {
      validateStyles('text', this.$vnode.data && this.$vnode.data.staticStyle);
    }

    return createElement('p', {
      attrs: { 'weex-type': 'text' },
      on: this.createEventMap(),
      staticClass: 'weex-text',
      staticStyle: getTextStyle(this)
    }, this.$slots.default || [this.value])
  }
};

var textarea = {
  mixins: [base],
  props: {
    value: String,
    placeholder: String,
    disabled: {
      type: [String, Boolean],
      default: false
    },
    autofocus: {
      type: [String, Boolean],
      default: false
    },
    rows: {
      type: [String, Number],
      default: 2
    }
  },
  methods: {
    setSelectionRange: setSelectionRange,
    getSelectionRange: getSelectionRange
  },
  render: function render (createElement) {
    /* istanbul ignore next */
    {
      validateStyles('textarea', this.$vnode.data && this.$vnode.data.staticStyle);
    }

    return createElement('html:textarea', {
      attrs: {
        'weex-type': 'textarea',
        value: this.value,
        disabled: (this.disabled !== 'false' && this.disabled !== false),
        autofocus: (this.autofocus !== 'false' && this.autofocus !== false),
        placeholder: this.placeholder,
        rows: this.rows
      },
      on: extend(this.createEventMap(), mapFormEvents(this)),
      staticClass: 'weex-textarea'
    }, this.value)
  }
};

var video = {
  mixins: [base],
  props: {
    src: String,
    playStatus: {
      type: String,
      default: 'pause',
      validator: function validator (value) {
        return ['play', 'pause'].indexOf(value) !== -1
      }
    },

    autoplay: {
      type: [String, Boolean],
      default: false
    },
    autoPlay: {
      type: [String, Boolean],
      default: false
    },

    playsinline: {
      type: [String, Boolean],
      default: false
    },
    controls: {
      type: [String, Boolean],
      default: false
    }
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    {
      validateStyles('video', this.$vnode.data && this.$vnode.data.staticStyle);
    }

    // TODO: support playStatus
    return createElement('html:video', {
      attrs: {
        'weex-type': 'video',
        autoplay: (this.autoplay !== 'false' && this.autoplay !== false),
        autoPlay: (this.autoplay !== 'false' && this.autoplay !== false),
        controls: this.controls,
        src: this.src
      },
      on: this.createEventMap(['start', 'pause', 'finish', 'fail']),
      staticClass: 'weex-video'
    })
  }
};

var web = {
  mixins: [base, event$1],
  props: {
    src: String
  },
  methods: {
    // TODO: check cross-origin
    goBack: function goBack () {
      if (this.$el) {
        this.$el.contentWindow.history.back();
      }
    },
    goForward: function goForward () {
      if (this.$el) {
        this.$el.contentWindow.history.forward();
      }
    },
    reload: function reload () {
      if (this.$el) {
        this.$el.contentWindow.history.reload();
      }
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    if (this.$el) {
      this.$emit('pagefinish', this.createCustomEvent(this, 'pagestart', { url: this.src }));
      this.$el.addEventListener('load', function (event$$1) {
        this$1.$emit('pagefinish', this$1.createCustomEvent(this$1, 'pagefinish', { url: this$1.src }));
      });
    }
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    {
      validateStyles('web', this.$vnode.data && this.$vnode.data.staticStyle);
    }

    return createElement('iframe', {
      attrs: {
        'weex-type': 'web',
        src: this.src
      },
      on: this.createEventMap(['error']),
      staticClass: 'weex-web'
    })
  }
};



var components$1 = Object.freeze({
	switch: _switch,
	a: a,
	div: div,
	container: div,
	image: image,
	img: image,
	input: input,
	list: index$6,
	cell: cell,
	scroller: scroller,
	slider: index$7,
	indicator: warning,
	refresh: warning,
	loading: warning,
	LoadingIndicator: LoadingIndicator,
	text: text,
	textarea: textarea,
	video: video,
	web: web
});

var warned = false;

function getWarnText (prop) {
  return "[Vue Rneder] \"" + prop + "\" is not a standard CSS property,"
    + 'it may not support very well on weex vue render.'
}

function normalize (styles) {
  var realStyle = {};
  for (var key in styles) {
    var value = styles[key];

    // TODO: add more reliable check
    if (typeof value === 'number') {
      value += 'px';
    }

    // warn for unsupported properties
    switch (key) {
      case 'lines':
      case 'item-color':
      case 'itemColor':
      case 'item-selected-color':
      case 'itemSelectedColor':
      case 'item-size':
      case 'itemSize': console.warn(getWarnText(key)); break
    }

    realStyle[key] = value;
  }
  return realStyle
}

function getStyleMap (component) {
  if (component && component.$vnode && component.$vnode.context) {
    var $options = component.$vnode.context.$options;
    if ($options && $options.style) {
      if (!warned) {
        warned = true;
        console.error('[Invalid Bundle Format] This bundle format is '
          + 'generated for Android and iOS platform, '
          + 'please use "vue-loader" to compile the ".vue" file on the web.');
      }
      return $options.style
    }
  }
}

function getStaticClass (component) {
  if (component && component.$vnode && component.$vnode.data) {
    var data = component.$vnode.data;
    return [].concat(data.staticClass, data.class)
  }
}

function getComponentStyle (context) {
  var styleMap = getStyleMap(context);
  var staticClass = getStaticClass(context);

  if (styleMap && Array.isArray(staticClass)) {
    var styles = staticClass.reduce(function (res, name) {
      return extend(res, styleMap[name])
    }, {});

    return normalize(styles)
  }
}

function mergeStyles (context) {
  var styles = getComponentStyle(context);
  if (context.$el && styles) {
    validateStyles(context.$options && context.$options._componentTag, styles);
    for (var key in styles) {
      context.$el.style[key] = styles[key];
    }
  }
}

var styleMixin = {
  mounted: function mounted () {
    mergeStyles(this);
  },
  beforeUpdate: function beforeUpdate () {
    mergeStyles(this);
  }
};

function install$1 (Vue) {
  setViewport();

  Vue.prototype.$getConfig = function () {
    console.warn('[Vue Render] "this.$getConfig" is deprecated, please use "weex.config" instead.');
    return window.weex.config
  };

  var htmlRegex = /^html:/i;
  Vue.config.isReservedTag = function (tag) { return htmlRegex.test(tag); };
  Vue.config.parsePlatformTagName = function (tag) { return tag.replace(htmlRegex, ''); };

  for (var name in components$1) {
    Vue.component(name, components$1[name]);
  }

  /* istanbul ignore next */
  {
    if (semver.lt(Vue.version, '2.1.5')) {
      console.warn("[Vue Render] The version of Vue should be " +
        "greater than 2.1.5, current is " + (Vue.version) + ".");
    }
    console.info("[Vue Render] Registered components: "
      + "[" + (Object.keys(components$1).join(', ')) + "].");

    // merge styles to inline
    Vue.mixin(styleMixin);
  }
}

// auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  install$1(window.Vue);
}

var index = {
  install: install$1
};

return index;

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9zZW12ZXIvc2VtdmVyLmpzIiwiLi4vLi4vaHRtbDUvcmVuZGVyL2Jyb3dzZXIvcmVuZGVyL2dlc3R1cmUuanMiLCIuLi8uLi9odG1sNS9zaGFyZWQvYXJyYXlGcm9tLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hhcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCIuLi8uLi9odG1sNS9zaGFyZWQvb2JqZWN0U2V0UHJvdG90eXBlT2YuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faHRtbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Zvci1vZi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pbnZva2UuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190YXNrLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvdnVlL2Vudi92aWV3cG9ydC5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci9icm93c2VyL2V4dGVuZC9hcGkvZXZlbnQuanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvYnJvd3Nlci9leHRlbmQvYXBpL2dlb2xvY2F0aW9uLmpzIiwiLi4vLi4vaHRtbDUvcmVuZGVyL2Jyb3dzZXIvZXh0ZW5kL2FwaS9wYWdlSW5mby5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci9icm93c2VyL2V4dGVuZC9hcGkvc3RvcmFnZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9odHRwdXJsL2J1aWxkL2h0dHB1cmwuY29tbW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3N0cmljdC11cmktZW5jb2RlL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcXVlcnktc3RyaW5nL2luZGV4LmpzIiwiLi4vLi4vaHRtbDUvcmVuZGVyL2Jyb3dzZXIvZXh0ZW5kL2FwaS9zdHJlYW0uanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvYnJvd3Nlci9leHRlbmQvYXBpL2NsaXBib2FyZC5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvdXRpbHMvZnVuYy5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvdXRpbHMvZXZlbnQuanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvdnVlL3V0aWxzL2NvbXBvbmVudC5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvdXRpbHMvaW5kZXguanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvdnVlL21vZHVsZXMvYW5pbWF0aW9uLmpzIiwiLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9tb2R1bGVzL2RvbS5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvbW9kdWxlcy9tb2RhbC90b2FzdC5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvbW9kdWxlcy9tb2RhbC9tb2RhbC5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvbW9kdWxlcy9tb2RhbC9hbGVydC5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvbW9kdWxlcy9tb2RhbC9jb25maXJtLmpzIiwiLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9tb2R1bGVzL21vZGFsL3Byb21wdC5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvbW9kdWxlcy9tb2RhbC9pbmRleC5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvbW9kdWxlcy9uYXZpZ2F0b3IuanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvdnVlL21vZHVsZXMvd2Vidmlldy5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvbW9kdWxlcy9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9lbnZkL2J1aWxkL2VudmQuY29tbW9uLmpzIiwiLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9lbnYvV1hFbnZpcm9ubWVudC5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvZW52L3dlZXguanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvdnVlL2Vudi9pbmRleC5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvbWl4aW5zL2Jhc2UuanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvdnVlL21peGlucy9ldmVudC5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvbWl4aW5zL3Njcm9sbGFibGUuanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvdnVlL3ZhbGlkYXRvci9zdHlsZS5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvdmFsaWRhdG9yL3Byb3AuanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvdnVlL3ZhbGlkYXRvci9jaGVjay5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvdmFsaWRhdG9yL2luZGV4LmpzIiwiLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL3N3aXRjaC5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9hLmpzIiwiLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL2Rpdi5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9pbWFnZS5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9pbnB1dC5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9zY3JvbGxhYmxlL2xvYWRpbmctaW5kaWNhdG9yLmpzIiwiLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL3Njcm9sbGFibGUvcmVmcmVzaC5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9zY3JvbGxhYmxlL2xvYWRpbmcuanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvc2Nyb2xsYWJsZS9zaGFyZWQuanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvc2Nyb2xsYWJsZS9saXN0L2xpc3RNaXhpbi5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9zY3JvbGxhYmxlL2xpc3QvaW5kZXguanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvc2Nyb2xsYWJsZS9saXN0L2NlbGwuanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvc2Nyb2xsYWJsZS9zY3JvbGxlci5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9zbGlkZXIvaW5kaWNhdG9yLmpzIiwiLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL3NsaWRlci9zbGlkZU1peGluLmpzIiwiLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL3NsaWRlci9pbmRleC5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy93YXJuaW5nLmpzIiwiLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL3RleHQuanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvdGV4dGFyZWEuanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvdmlkZW8uanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvd2ViLmpzIiwiLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9taXhpbnMvc3R5bGUuanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvdnVlL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IFNlbVZlcjtcblxuLy8gVGhlIGRlYnVnIGZ1bmN0aW9uIGlzIGV4Y2x1ZGVkIGVudGlyZWx5IGZyb20gdGhlIG1pbmlmaWVkIHZlcnNpb24uXG4vKiBub21pbiAqLyB2YXIgZGVidWc7XG4vKiBub21pbiAqLyBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnICYmXG4gICAgLyogbm9taW4gKi8gcHJvY2Vzcy5lbnYgJiZcbiAgICAvKiBub21pbiAqLyBwcm9jZXNzLmVudi5OT0RFX0RFQlVHICYmXG4gICAgLyogbm9taW4gKi8gL1xcYnNlbXZlclxcYi9pLnRlc3QocHJvY2Vzcy5lbnYuTk9ERV9ERUJVRykpXG4gIC8qIG5vbWluICovIGRlYnVnID0gZnVuY3Rpb24oKSB7XG4gICAgLyogbm9taW4gKi8gdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgIC8qIG5vbWluICovIGFyZ3MudW5zaGlmdCgnU0VNVkVSJyk7XG4gICAgLyogbm9taW4gKi8gY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJncyk7XG4gICAgLyogbm9taW4gKi8gfTtcbi8qIG5vbWluICovIGVsc2VcbiAgLyogbm9taW4gKi8gZGVidWcgPSBmdW5jdGlvbigpIHt9O1xuXG4vLyBOb3RlOiB0aGlzIGlzIHRoZSBzZW12ZXIub3JnIHZlcnNpb24gb2YgdGhlIHNwZWMgdGhhdCBpdCBpbXBsZW1lbnRzXG4vLyBOb3QgbmVjZXNzYXJpbHkgdGhlIHBhY2thZ2UgdmVyc2lvbiBvZiB0aGlzIGNvZGUuXG5leHBvcnRzLlNFTVZFUl9TUEVDX1ZFUlNJT04gPSAnMi4wLjAnO1xuXG52YXIgTUFYX0xFTkdUSCA9IDI1NjtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgfHwgOTAwNzE5OTI1NDc0MDk5MTtcblxuLy8gVGhlIGFjdHVhbCByZWdleHBzIGdvIG9uIGV4cG9ydHMucmVcbnZhciByZSA9IGV4cG9ydHMucmUgPSBbXTtcbnZhciBzcmMgPSBleHBvcnRzLnNyYyA9IFtdO1xudmFyIFIgPSAwO1xuXG4vLyBUaGUgZm9sbG93aW5nIFJlZ3VsYXIgRXhwcmVzc2lvbnMgY2FuIGJlIHVzZWQgZm9yIHRva2VuaXppbmcsXG4vLyB2YWxpZGF0aW5nLCBhbmQgcGFyc2luZyBTZW1WZXIgdmVyc2lvbiBzdHJpbmdzLlxuXG4vLyAjIyBOdW1lcmljIElkZW50aWZpZXJcbi8vIEEgc2luZ2xlIGAwYCwgb3IgYSBub24temVybyBkaWdpdCBmb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgZGlnaXRzLlxuXG52YXIgTlVNRVJJQ0lERU5USUZJRVIgPSBSKys7XG5zcmNbTlVNRVJJQ0lERU5USUZJRVJdID0gJzB8WzEtOV1cXFxcZConO1xudmFyIE5VTUVSSUNJREVOVElGSUVSTE9PU0UgPSBSKys7XG5zcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gPSAnWzAtOV0rJztcblxuXG4vLyAjIyBOb24tbnVtZXJpYyBJZGVudGlmaWVyXG4vLyBaZXJvIG9yIG1vcmUgZGlnaXRzLCBmb2xsb3dlZCBieSBhIGxldHRlciBvciBoeXBoZW4sIGFuZCB0aGVuIHplcm8gb3Jcbi8vIG1vcmUgbGV0dGVycywgZGlnaXRzLCBvciBoeXBoZW5zLlxuXG52YXIgTk9OTlVNRVJJQ0lERU5USUZJRVIgPSBSKys7XG5zcmNbTk9OTlVNRVJJQ0lERU5USUZJRVJdID0gJ1xcXFxkKlthLXpBLVotXVthLXpBLVowLTktXSonO1xuXG5cbi8vICMjIE1haW4gVmVyc2lvblxuLy8gVGhyZWUgZG90LXNlcGFyYXRlZCBudW1lcmljIGlkZW50aWZpZXJzLlxuXG52YXIgTUFJTlZFUlNJT04gPSBSKys7XG5zcmNbTUFJTlZFUlNJT05dID0gJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnKSc7XG5cbnZhciBNQUlOVkVSU0lPTkxPT1NFID0gUisrO1xuc3JjW01BSU5WRVJTSU9OTE9PU0VdID0gJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJyknO1xuXG4vLyAjIyBQcmUtcmVsZWFzZSBWZXJzaW9uIElkZW50aWZpZXJcbi8vIEEgbnVtZXJpYyBpZGVudGlmaWVyLCBvciBhIG5vbi1udW1lcmljIGlkZW50aWZpZXIuXG5cbnZhciBQUkVSRUxFQVNFSURFTlRJRklFUiA9IFIrKztcbnNyY1tQUkVSRUxFQVNFSURFTlRJRklFUl0gPSAnKD86JyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd8JyArIHNyY1tOT05OVU1FUklDSURFTlRJRklFUl0gKyAnKSc7XG5cbnZhciBQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFID0gUisrO1xuc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdID0gJyg/OicgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3wnICsgc3JjW05PTk5VTUVSSUNJREVOVElGSUVSXSArICcpJztcblxuXG4vLyAjIyBQcmUtcmVsZWFzZSBWZXJzaW9uXG4vLyBIeXBoZW4sIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIGRvdC1zZXBhcmF0ZWQgcHJlLXJlbGVhc2UgdmVyc2lvblxuLy8gaWRlbnRpZmllcnMuXG5cbnZhciBQUkVSRUxFQVNFID0gUisrO1xuc3JjW1BSRVJFTEVBU0VdID0gJyg/Oi0oJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUl0gK1xuICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUl0gKyAnKSopKSc7XG5cbnZhciBQUkVSRUxFQVNFTE9PU0UgPSBSKys7XG5zcmNbUFJFUkVMRUFTRUxPT1NFXSA9ICcoPzotPygnICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdICtcbiAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFXSArICcpKikpJztcblxuLy8gIyMgQnVpbGQgTWV0YWRhdGEgSWRlbnRpZmllclxuLy8gQW55IGNvbWJpbmF0aW9uIG9mIGRpZ2l0cywgbGV0dGVycywgb3IgaHlwaGVucy5cblxudmFyIEJVSUxESURFTlRJRklFUiA9IFIrKztcbnNyY1tCVUlMRElERU5USUZJRVJdID0gJ1swLTlBLVphLXotXSsnO1xuXG4vLyAjIyBCdWlsZCBNZXRhZGF0YVxuLy8gUGx1cyBzaWduLCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBwZXJpb2Qtc2VwYXJhdGVkIGJ1aWxkIG1ldGFkYXRhXG4vLyBpZGVudGlmaWVycy5cblxudmFyIEJVSUxEID0gUisrO1xuc3JjW0JVSUxEXSA9ICcoPzpcXFxcKygnICsgc3JjW0JVSUxESURFTlRJRklFUl0gK1xuICAgICAgICAgICAgICcoPzpcXFxcLicgKyBzcmNbQlVJTERJREVOVElGSUVSXSArICcpKikpJztcblxuXG4vLyAjIyBGdWxsIFZlcnNpb24gU3RyaW5nXG4vLyBBIG1haW4gdmVyc2lvbiwgZm9sbG93ZWQgb3B0aW9uYWxseSBieSBhIHByZS1yZWxlYXNlIHZlcnNpb24gYW5kXG4vLyBidWlsZCBtZXRhZGF0YS5cblxuLy8gTm90ZSB0aGF0IHRoZSBvbmx5IG1ham9yLCBtaW5vciwgcGF0Y2gsIGFuZCBwcmUtcmVsZWFzZSBzZWN0aW9ucyBvZlxuLy8gdGhlIHZlcnNpb24gc3RyaW5nIGFyZSBjYXB0dXJpbmcgZ3JvdXBzLiAgVGhlIGJ1aWxkIG1ldGFkYXRhIGlzIG5vdCBhXG4vLyBjYXB0dXJpbmcgZ3JvdXAsIGJlY2F1c2UgaXQgc2hvdWxkIG5vdCBldmVyIGJlIHVzZWQgaW4gdmVyc2lvblxuLy8gY29tcGFyaXNvbi5cblxudmFyIEZVTEwgPSBSKys7XG52YXIgRlVMTFBMQUlOID0gJ3Y/JyArIHNyY1tNQUlOVkVSU0lPTl0gK1xuICAgICAgICAgICAgICAgIHNyY1tQUkVSRUxFQVNFXSArICc/JyArXG4gICAgICAgICAgICAgICAgc3JjW0JVSUxEXSArICc/Jztcblxuc3JjW0ZVTExdID0gJ14nICsgRlVMTFBMQUlOICsgJyQnO1xuXG4vLyBsaWtlIGZ1bGwsIGJ1dCBhbGxvd3MgdjEuMi4zIGFuZCA9MS4yLjMsIHdoaWNoIHBlb3BsZSBkbyBzb21ldGltZXMuXG4vLyBhbHNvLCAxLjAuMGFscGhhMSAocHJlcmVsZWFzZSB3aXRob3V0IHRoZSBoeXBoZW4pIHdoaWNoIGlzIHByZXR0eVxuLy8gY29tbW9uIGluIHRoZSBucG0gcmVnaXN0cnkuXG52YXIgTE9PU0VQTEFJTiA9ICdbdj1cXFxcc10qJyArIHNyY1tNQUlOVkVSU0lPTkxPT1NFXSArXG4gICAgICAgICAgICAgICAgIHNyY1tQUkVSRUxFQVNFTE9PU0VdICsgJz8nICtcbiAgICAgICAgICAgICAgICAgc3JjW0JVSUxEXSArICc/JztcblxudmFyIExPT1NFID0gUisrO1xuc3JjW0xPT1NFXSA9ICdeJyArIExPT1NFUExBSU4gKyAnJCc7XG5cbnZhciBHVExUID0gUisrO1xuc3JjW0dUTFRdID0gJygoPzo8fD4pPz0/KSc7XG5cbi8vIFNvbWV0aGluZyBsaWtlIFwiMi4qXCIgb3IgXCIxLjIueFwiLlxuLy8gTm90ZSB0aGF0IFwieC54XCIgaXMgYSB2YWxpZCB4UmFuZ2UgaWRlbnRpZmVyLCBtZWFuaW5nIFwiYW55IHZlcnNpb25cIlxuLy8gT25seSB0aGUgZmlyc3QgaXRlbSBpcyBzdHJpY3RseSByZXF1aXJlZC5cbnZhciBYUkFOR0VJREVOVElGSUVSTE9PU0UgPSBSKys7XG5zcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSA9IHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICd8eHxYfFxcXFwqJztcbnZhciBYUkFOR0VJREVOVElGSUVSID0gUisrO1xuc3JjW1hSQU5HRUlERU5USUZJRVJdID0gc3JjW05VTUVSSUNJREVOVElGSUVSXSArICd8eHxYfFxcXFwqJztcblxudmFyIFhSQU5HRVBMQUlOID0gUisrO1xuc3JjW1hSQU5HRVBMQUlOXSA9ICdbdj1cXFxcc10qKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1tYUkFOR0VJREVOVElGSUVSXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJyg/OicgKyBzcmNbUFJFUkVMRUFTRV0gKyAnKT8nICtcbiAgICAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nICtcbiAgICAgICAgICAgICAgICAgICAnKT8pPyc7XG5cbnZhciBYUkFOR0VQTEFJTkxPT1NFID0gUisrO1xuc3JjW1hSQU5HRVBMQUlOTE9PU0VdID0gJ1t2PVxcXFxzXSooJyArIHNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJMT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKD86JyArIHNyY1tQUkVSRUxFQVNFTE9PU0VdICsgJyk/JyArXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcpPyk/JztcblxudmFyIFhSQU5HRSA9IFIrKztcbnNyY1tYUkFOR0VdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKicgKyBzcmNbWFJBTkdFUExBSU5dICsgJyQnO1xudmFyIFhSQU5HRUxPT1NFID0gUisrO1xuc3JjW1hSQU5HRUxPT1NFXSA9ICdeJyArIHNyY1tHVExUXSArICdcXFxccyonICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyQnO1xuXG4vLyBUaWxkZSByYW5nZXMuXG4vLyBNZWFuaW5nIGlzIFwicmVhc29uYWJseSBhdCBvciBncmVhdGVyIHRoYW5cIlxudmFyIExPTkVUSUxERSA9IFIrKztcbnNyY1tMT05FVElMREVdID0gJyg/On4+PyknO1xuXG52YXIgVElMREVUUklNID0gUisrO1xuc3JjW1RJTERFVFJJTV0gPSAnKFxcXFxzKiknICsgc3JjW0xPTkVUSUxERV0gKyAnXFxcXHMrJztcbnJlW1RJTERFVFJJTV0gPSBuZXcgUmVnRXhwKHNyY1tUSUxERVRSSU1dLCAnZycpO1xudmFyIHRpbGRlVHJpbVJlcGxhY2UgPSAnJDF+JztcblxudmFyIFRJTERFID0gUisrO1xuc3JjW1RJTERFXSA9ICdeJyArIHNyY1tMT05FVElMREVdICsgc3JjW1hSQU5HRVBMQUlOXSArICckJztcbnZhciBUSUxERUxPT1NFID0gUisrO1xuc3JjW1RJTERFTE9PU0VdID0gJ14nICsgc3JjW0xPTkVUSUxERV0gKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnJCc7XG5cbi8vIENhcmV0IHJhbmdlcy5cbi8vIE1lYW5pbmcgaXMgXCJhdCBsZWFzdCBhbmQgYmFja3dhcmRzIGNvbXBhdGlibGUgd2l0aFwiXG52YXIgTE9ORUNBUkVUID0gUisrO1xuc3JjW0xPTkVDQVJFVF0gPSAnKD86XFxcXF4pJztcblxudmFyIENBUkVUVFJJTSA9IFIrKztcbnNyY1tDQVJFVFRSSU1dID0gJyhcXFxccyopJyArIHNyY1tMT05FQ0FSRVRdICsgJ1xcXFxzKyc7XG5yZVtDQVJFVFRSSU1dID0gbmV3IFJlZ0V4cChzcmNbQ0FSRVRUUklNXSwgJ2cnKTtcbnZhciBjYXJldFRyaW1SZXBsYWNlID0gJyQxXic7XG5cbnZhciBDQVJFVCA9IFIrKztcbnNyY1tDQVJFVF0gPSAnXicgKyBzcmNbTE9ORUNBUkVUXSArIHNyY1tYUkFOR0VQTEFJTl0gKyAnJCc7XG52YXIgQ0FSRVRMT09TRSA9IFIrKztcbnNyY1tDQVJFVExPT1NFXSA9ICdeJyArIHNyY1tMT05FQ0FSRVRdICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyQnO1xuXG4vLyBBIHNpbXBsZSBndC9sdC9lcSB0aGluZywgb3IganVzdCBcIlwiIHRvIGluZGljYXRlIFwiYW55IHZlcnNpb25cIlxudmFyIENPTVBBUkFUT1JMT09TRSA9IFIrKztcbnNyY1tDT01QQVJBVE9STE9PU0VdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKignICsgTE9PU0VQTEFJTiArICcpJHxeJCc7XG52YXIgQ09NUEFSQVRPUiA9IFIrKztcbnNyY1tDT01QQVJBVE9SXSA9ICdeJyArIHNyY1tHVExUXSArICdcXFxccyooJyArIEZVTExQTEFJTiArICcpJHxeJCc7XG5cblxuLy8gQW4gZXhwcmVzc2lvbiB0byBzdHJpcCBhbnkgd2hpdGVzcGFjZSBiZXR3ZWVuIHRoZSBndGx0IGFuZCB0aGUgdGhpbmdcbi8vIGl0IG1vZGlmaWVzLCBzbyB0aGF0IGA+IDEuMi4zYCA9PT4gYD4xLjIuM2BcbnZhciBDT01QQVJBVE9SVFJJTSA9IFIrKztcbnNyY1tDT01QQVJBVE9SVFJJTV0gPSAnKFxcXFxzKiknICsgc3JjW0dUTFRdICtcbiAgICAgICAgICAgICAgICAgICAgICAnXFxcXHMqKCcgKyBMT09TRVBMQUlOICsgJ3wnICsgc3JjW1hSQU5HRVBMQUlOXSArICcpJztcblxuLy8gdGhpcyBvbmUgaGFzIHRvIHVzZSB0aGUgL2cgZmxhZ1xucmVbQ09NUEFSQVRPUlRSSU1dID0gbmV3IFJlZ0V4cChzcmNbQ09NUEFSQVRPUlRSSU1dLCAnZycpO1xudmFyIGNvbXBhcmF0b3JUcmltUmVwbGFjZSA9ICckMSQyJDMnO1xuXG5cbi8vIFNvbWV0aGluZyBsaWtlIGAxLjIuMyAtIDEuMi40YFxuLy8gTm90ZSB0aGF0IHRoZXNlIGFsbCB1c2UgdGhlIGxvb3NlIGZvcm0sIGJlY2F1c2UgdGhleSdsbCBiZVxuLy8gY2hlY2tlZCBhZ2FpbnN0IGVpdGhlciB0aGUgc3RyaWN0IG9yIGxvb3NlIGNvbXBhcmF0b3IgZm9ybVxuLy8gbGF0ZXIuXG52YXIgSFlQSEVOUkFOR0UgPSBSKys7XG5zcmNbSFlQSEVOUkFOR0VdID0gJ15cXFxccyooJyArIHNyY1tYUkFOR0VQTEFJTl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICdcXFxccystXFxcXHMrJyArXG4gICAgICAgICAgICAgICAgICAgJygnICsgc3JjW1hSQU5HRVBMQUlOXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJ1xcXFxzKiQnO1xuXG52YXIgSFlQSEVOUkFOR0VMT09TRSA9IFIrKztcbnNyY1tIWVBIRU5SQU5HRUxPT1NFXSA9ICdeXFxcXHMqKCcgKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1xcXFxzKy1cXFxccysnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnXFxcXHMqJCc7XG5cbi8vIFN0YXIgcmFuZ2VzIGJhc2ljYWxseSBqdXN0IGFsbG93IGFueXRoaW5nIGF0IGFsbC5cbnZhciBTVEFSID0gUisrO1xuc3JjW1NUQVJdID0gJyg8fD4pPz0/XFxcXHMqXFxcXConO1xuXG4vLyBDb21waWxlIHRvIGFjdHVhbCByZWdleHAgb2JqZWN0cy5cbi8vIEFsbCBhcmUgZmxhZy1mcmVlLCB1bmxlc3MgdGhleSB3ZXJlIGNyZWF0ZWQgYWJvdmUgd2l0aCBhIGZsYWcuXG5mb3IgKHZhciBpID0gMDsgaSA8IFI7IGkrKykge1xuICBkZWJ1ZyhpLCBzcmNbaV0pO1xuICBpZiAoIXJlW2ldKVxuICAgIHJlW2ldID0gbmV3IFJlZ0V4cChzcmNbaV0pO1xufVxuXG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG5mdW5jdGlvbiBwYXJzZSh2ZXJzaW9uLCBsb29zZSkge1xuICBpZiAodmVyc2lvbiBpbnN0YW5jZW9mIFNlbVZlcilcbiAgICByZXR1cm4gdmVyc2lvbjtcblxuICBpZiAodHlwZW9mIHZlcnNpb24gIT09ICdzdHJpbmcnKVxuICAgIHJldHVybiBudWxsO1xuXG4gIGlmICh2ZXJzaW9uLmxlbmd0aCA+IE1BWF9MRU5HVEgpXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgdmFyIHIgPSBsb29zZSA/IHJlW0xPT1NFXSA6IHJlW0ZVTExdO1xuICBpZiAoIXIudGVzdCh2ZXJzaW9uKSlcbiAgICByZXR1cm4gbnVsbDtcblxuICB0cnkge1xuICAgIHJldHVybiBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKTtcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnRzLnZhbGlkID0gdmFsaWQ7XG5mdW5jdGlvbiB2YWxpZCh2ZXJzaW9uLCBsb29zZSkge1xuICB2YXIgdiA9IHBhcnNlKHZlcnNpb24sIGxvb3NlKTtcbiAgcmV0dXJuIHYgPyB2LnZlcnNpb24gOiBudWxsO1xufVxuXG5cbmV4cG9ydHMuY2xlYW4gPSBjbGVhbjtcbmZ1bmN0aW9uIGNsZWFuKHZlcnNpb24sIGxvb3NlKSB7XG4gIHZhciBzID0gcGFyc2UodmVyc2lvbi50cmltKCkucmVwbGFjZSgvXls9dl0rLywgJycpLCBsb29zZSk7XG4gIHJldHVybiBzID8gcy52ZXJzaW9uIDogbnVsbDtcbn1cblxuZXhwb3J0cy5TZW1WZXIgPSBTZW1WZXI7XG5cbmZ1bmN0aW9uIFNlbVZlcih2ZXJzaW9uLCBsb29zZSkge1xuICBpZiAodmVyc2lvbiBpbnN0YW5jZW9mIFNlbVZlcikge1xuICAgIGlmICh2ZXJzaW9uLmxvb3NlID09PSBsb29zZSlcbiAgICAgIHJldHVybiB2ZXJzaW9uO1xuICAgIGVsc2VcbiAgICAgIHZlcnNpb24gPSB2ZXJzaW9uLnZlcnNpb247XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZlcnNpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBWZXJzaW9uOiAnICsgdmVyc2lvbik7XG4gIH1cblxuICBpZiAodmVyc2lvbi5sZW5ndGggPiBNQVhfTEVOR1RIKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZlcnNpb24gaXMgbG9uZ2VyIHRoYW4gJyArIE1BWF9MRU5HVEggKyAnIGNoYXJhY3RlcnMnKVxuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIHJldHVybiBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKTtcblxuICBkZWJ1ZygnU2VtVmVyJywgdmVyc2lvbiwgbG9vc2UpO1xuICB0aGlzLmxvb3NlID0gbG9vc2U7XG4gIHZhciBtID0gdmVyc2lvbi50cmltKCkubWF0Y2gobG9vc2UgPyByZVtMT09TRV0gOiByZVtGVUxMXSk7XG5cbiAgaWYgKCFtKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgVmVyc2lvbjogJyArIHZlcnNpb24pO1xuXG4gIHRoaXMucmF3ID0gdmVyc2lvbjtcblxuICAvLyB0aGVzZSBhcmUgYWN0dWFsbHkgbnVtYmVyc1xuICB0aGlzLm1ham9yID0gK21bMV07XG4gIHRoaXMubWlub3IgPSArbVsyXTtcbiAgdGhpcy5wYXRjaCA9ICttWzNdO1xuXG4gIGlmICh0aGlzLm1ham9yID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLm1ham9yIDwgMClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG1ham9yIHZlcnNpb24nKVxuXG4gIGlmICh0aGlzLm1pbm9yID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLm1pbm9yIDwgMClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG1pbm9yIHZlcnNpb24nKVxuXG4gIGlmICh0aGlzLnBhdGNoID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLnBhdGNoIDwgMClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHBhdGNoIHZlcnNpb24nKVxuXG4gIC8vIG51bWJlcmlmeSBhbnkgcHJlcmVsZWFzZSBudW1lcmljIGlkc1xuICBpZiAoIW1bNF0pXG4gICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gIGVsc2VcbiAgICB0aGlzLnByZXJlbGVhc2UgPSBtWzRdLnNwbGl0KCcuJykubWFwKGZ1bmN0aW9uKGlkKSB7XG4gICAgICBpZiAoL15bMC05XSskLy50ZXN0KGlkKSkge1xuICAgICAgICB2YXIgbnVtID0gK2lkO1xuICAgICAgICBpZiAobnVtID49IDAgJiYgbnVtIDwgTUFYX1NBRkVfSU5URUdFUilcbiAgICAgICAgICByZXR1cm4gbnVtO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlkO1xuICAgIH0pO1xuXG4gIHRoaXMuYnVpbGQgPSBtWzVdID8gbVs1XS5zcGxpdCgnLicpIDogW107XG4gIHRoaXMuZm9ybWF0KCk7XG59XG5cblNlbVZlci5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMudmVyc2lvbiA9IHRoaXMubWFqb3IgKyAnLicgKyB0aGlzLm1pbm9yICsgJy4nICsgdGhpcy5wYXRjaDtcbiAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgdGhpcy52ZXJzaW9uICs9ICctJyArIHRoaXMucHJlcmVsZWFzZS5qb2luKCcuJyk7XG4gIHJldHVybiB0aGlzLnZlcnNpb247XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnZlcnNpb247XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbihvdGhlcikge1xuICBkZWJ1ZygnU2VtVmVyLmNvbXBhcmUnLCB0aGlzLnZlcnNpb24sIHRoaXMubG9vc2UsIG90aGVyKTtcbiAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5sb29zZSk7XG5cbiAgcmV0dXJuIHRoaXMuY29tcGFyZU1haW4ob3RoZXIpIHx8IHRoaXMuY29tcGFyZVByZShvdGhlcik7XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmVNYWluID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5sb29zZSk7XG5cbiAgcmV0dXJuIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLm1ham9yLCBvdGhlci5tYWpvcikgfHxcbiAgICAgICAgIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLm1pbm9yLCBvdGhlci5taW5vcikgfHxcbiAgICAgICAgIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLnBhdGNoLCBvdGhlci5wYXRjaCk7XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmVQcmUgPSBmdW5jdGlvbihvdGhlcikge1xuICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLmxvb3NlKTtcblxuICAvLyBOT1QgaGF2aW5nIGEgcHJlcmVsZWFzZSBpcyA+IGhhdmluZyBvbmVcbiAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgIW90aGVyLnByZXJlbGVhc2UubGVuZ3RoKVxuICAgIHJldHVybiAtMTtcbiAgZWxzZSBpZiAoIXRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgb3RoZXIucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgcmV0dXJuIDE7XG4gIGVsc2UgaWYgKCF0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmICFvdGhlci5wcmVyZWxlYXNlLmxlbmd0aClcbiAgICByZXR1cm4gMDtcblxuICB2YXIgaSA9IDA7XG4gIGRvIHtcbiAgICB2YXIgYSA9IHRoaXMucHJlcmVsZWFzZVtpXTtcbiAgICB2YXIgYiA9IG90aGVyLnByZXJlbGVhc2VbaV07XG4gICAgZGVidWcoJ3ByZXJlbGVhc2UgY29tcGFyZScsIGksIGEsIGIpO1xuICAgIGlmIChhID09PSB1bmRlZmluZWQgJiYgYiA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIDA7XG4gICAgZWxzZSBpZiAoYiA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIDE7XG4gICAgZWxzZSBpZiAoYSA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIC0xO1xuICAgIGVsc2UgaWYgKGEgPT09IGIpXG4gICAgICBjb250aW51ZTtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpO1xuICB9IHdoaWxlICgrK2kpO1xufTtcblxuLy8gcHJlbWlub3Igd2lsbCBidW1wIHRoZSB2ZXJzaW9uIHVwIHRvIHRoZSBuZXh0IG1pbm9yIHJlbGVhc2UsIGFuZCBpbW1lZGlhdGVseVxuLy8gZG93biB0byBwcmUtcmVsZWFzZS4gcHJlbWFqb3IgYW5kIHByZXBhdGNoIHdvcmsgdGhlIHNhbWUgd2F5LlxuU2VtVmVyLnByb3RvdHlwZS5pbmMgPSBmdW5jdGlvbihyZWxlYXNlLCBpZGVudGlmaWVyKSB7XG4gIHN3aXRjaCAocmVsZWFzZSkge1xuICAgIGNhc2UgJ3ByZW1ham9yJzpcbiAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLm1pbm9yID0gMDtcbiAgICAgIHRoaXMubWFqb3IrKztcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3ByZW1pbm9yJzpcbiAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLm1pbm9yKys7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwcmVwYXRjaCc6XG4gICAgICAvLyBJZiB0aGlzIGlzIGFscmVhZHkgYSBwcmVyZWxlYXNlLCBpdCB3aWxsIGJ1bXAgdG8gdGhlIG5leHQgdmVyc2lvblxuICAgICAgLy8gZHJvcCBhbnkgcHJlcmVsZWFzZXMgdGhhdCBtaWdodCBhbHJlYWR5IGV4aXN0LCBzaW5jZSB0aGV5IGFyZSBub3RcbiAgICAgIC8vIHJlbGV2YW50IGF0IHRoaXMgcG9pbnQuXG4gICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMuaW5jKCdwYXRjaCcsIGlkZW50aWZpZXIpO1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpO1xuICAgICAgYnJlYWs7XG4gICAgLy8gSWYgdGhlIGlucHV0IGlzIGEgbm9uLXByZXJlbGVhc2UgdmVyc2lvbiwgdGhpcyBhY3RzIHRoZSBzYW1lIGFzXG4gICAgLy8gcHJlcGF0Y2guXG4gICAgY2FzZSAncHJlcmVsZWFzZSc6XG4gICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5pbmMoJ3BhdGNoJywgaWRlbnRpZmllcik7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ21ham9yJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgYSBwcmUtbWFqb3IgdmVyc2lvbiwgYnVtcCB1cCB0byB0aGUgc2FtZSBtYWpvciB2ZXJzaW9uLlxuICAgICAgLy8gT3RoZXJ3aXNlIGluY3JlbWVudCBtYWpvci5cbiAgICAgIC8vIDEuMC4wLTUgYnVtcHMgdG8gMS4wLjBcbiAgICAgIC8vIDEuMS4wIGJ1bXBzIHRvIDIuMC4wXG4gICAgICBpZiAodGhpcy5taW5vciAhPT0gMCB8fCB0aGlzLnBhdGNoICE9PSAwIHx8IHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMubWFqb3IrKztcbiAgICAgIHRoaXMubWlub3IgPSAwO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21pbm9yJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgYSBwcmUtbWlub3IgdmVyc2lvbiwgYnVtcCB1cCB0byB0aGUgc2FtZSBtaW5vciB2ZXJzaW9uLlxuICAgICAgLy8gT3RoZXJ3aXNlIGluY3JlbWVudCBtaW5vci5cbiAgICAgIC8vIDEuMi4wLTUgYnVtcHMgdG8gMS4yLjBcbiAgICAgIC8vIDEuMi4xIGJ1bXBzIHRvIDEuMy4wXG4gICAgICBpZiAodGhpcy5wYXRjaCAhPT0gMCB8fCB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLm1pbm9yKys7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncGF0Y2gnOlxuICAgICAgLy8gSWYgdGhpcyBpcyBub3QgYSBwcmUtcmVsZWFzZSB2ZXJzaW9uLCBpdCB3aWxsIGluY3JlbWVudCB0aGUgcGF0Y2guXG4gICAgICAvLyBJZiBpdCBpcyBhIHByZS1yZWxlYXNlIGl0IHdpbGwgYnVtcCB1cCB0byB0aGUgc2FtZSBwYXRjaCB2ZXJzaW9uLlxuICAgICAgLy8gMS4yLjAtNSBwYXRjaGVzIHRvIDEuMi4wXG4gICAgICAvLyAxLjIuMCBwYXRjaGVzIHRvIDEuMi4xXG4gICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5wYXRjaCsrO1xuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gICAgICBicmVhaztcbiAgICAvLyBUaGlzIHByb2JhYmx5IHNob3VsZG4ndCBiZSB1c2VkIHB1YmxpY2x5LlxuICAgIC8vIDEuMC4wIFwicHJlXCIgd291bGQgYmVjb21lIDEuMC4wLTAgd2hpY2ggaXMgdGhlIHdyb25nIGRpcmVjdGlvbi5cbiAgICBjYXNlICdwcmUnOlxuICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFswXTtcbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgaSA9IHRoaXMucHJlcmVsZWFzZS5sZW5ndGg7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcmVyZWxlYXNlW2ldID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlW2ldKys7XG4gICAgICAgICAgICBpID0gLTI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpID09PSAtMSkgLy8gZGlkbid0IGluY3JlbWVudCBhbnl0aGluZ1xuICAgICAgICAgIHRoaXMucHJlcmVsZWFzZS5wdXNoKDApO1xuICAgICAgfVxuICAgICAgaWYgKGlkZW50aWZpZXIpIHtcbiAgICAgICAgLy8gMS4yLjAtYmV0YS4xIGJ1bXBzIHRvIDEuMi4wLWJldGEuMixcbiAgICAgICAgLy8gMS4yLjAtYmV0YS5mb29ibHogb3IgMS4yLjAtYmV0YSBidW1wcyB0byAxLjIuMC1iZXRhLjBcbiAgICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZVswXSA9PT0gaWRlbnRpZmllcikge1xuICAgICAgICAgIGlmIChpc05hTih0aGlzLnByZXJlbGVhc2VbMV0pKVxuICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW2lkZW50aWZpZXIsIDBdO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbaWRlbnRpZmllciwgMF07XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgaW5jcmVtZW50IGFyZ3VtZW50OiAnICsgcmVsZWFzZSk7XG4gIH1cbiAgdGhpcy5mb3JtYXQoKTtcbiAgdGhpcy5yYXcgPSB0aGlzLnZlcnNpb247XG4gIHJldHVybiB0aGlzO1xufTtcblxuZXhwb3J0cy5pbmMgPSBpbmM7XG5mdW5jdGlvbiBpbmModmVyc2lvbiwgcmVsZWFzZSwgbG9vc2UsIGlkZW50aWZpZXIpIHtcbiAgaWYgKHR5cGVvZihsb29zZSkgPT09ICdzdHJpbmcnKSB7XG4gICAgaWRlbnRpZmllciA9IGxvb3NlO1xuICAgIGxvb3NlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IFNlbVZlcih2ZXJzaW9uLCBsb29zZSkuaW5jKHJlbGVhc2UsIGlkZW50aWZpZXIpLnZlcnNpb247XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0cy5kaWZmID0gZGlmZjtcbmZ1bmN0aW9uIGRpZmYodmVyc2lvbjEsIHZlcnNpb24yKSB7XG4gIGlmIChlcSh2ZXJzaW9uMSwgdmVyc2lvbjIpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHYxID0gcGFyc2UodmVyc2lvbjEpO1xuICAgIHZhciB2MiA9IHBhcnNlKHZlcnNpb24yKTtcbiAgICBpZiAodjEucHJlcmVsZWFzZS5sZW5ndGggfHwgdjIucHJlcmVsZWFzZS5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiB2MSkge1xuICAgICAgICBpZiAoa2V5ID09PSAnbWFqb3InIHx8IGtleSA9PT0gJ21pbm9yJyB8fCBrZXkgPT09ICdwYXRjaCcpIHtcbiAgICAgICAgICBpZiAodjFba2V5XSAhPT0gdjJba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuICdwcmUnK2tleTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAncHJlcmVsZWFzZSc7XG4gICAgfVxuICAgIGZvciAodmFyIGtleSBpbiB2MSkge1xuICAgICAgaWYgKGtleSA9PT0gJ21ham9yJyB8fCBrZXkgPT09ICdtaW5vcicgfHwga2V5ID09PSAncGF0Y2gnKSB7XG4gICAgICAgIGlmICh2MVtrZXldICE9PSB2MltrZXldKSB7XG4gICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnRzLmNvbXBhcmVJZGVudGlmaWVycyA9IGNvbXBhcmVJZGVudGlmaWVycztcblxudmFyIG51bWVyaWMgPSAvXlswLTldKyQvO1xuZnVuY3Rpb24gY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpIHtcbiAgdmFyIGFudW0gPSBudW1lcmljLnRlc3QoYSk7XG4gIHZhciBibnVtID0gbnVtZXJpYy50ZXN0KGIpO1xuXG4gIGlmIChhbnVtICYmIGJudW0pIHtcbiAgICBhID0gK2E7XG4gICAgYiA9ICtiO1xuICB9XG5cbiAgcmV0dXJuIChhbnVtICYmICFibnVtKSA/IC0xIDpcbiAgICAgICAgIChibnVtICYmICFhbnVtKSA/IDEgOlxuICAgICAgICAgYSA8IGIgPyAtMSA6XG4gICAgICAgICBhID4gYiA/IDEgOlxuICAgICAgICAgMDtcbn1cblxuZXhwb3J0cy5yY29tcGFyZUlkZW50aWZpZXJzID0gcmNvbXBhcmVJZGVudGlmaWVycztcbmZ1bmN0aW9uIHJjb21wYXJlSWRlbnRpZmllcnMoYSwgYikge1xuICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKGIsIGEpO1xufVxuXG5leHBvcnRzLm1ham9yID0gbWFqb3I7XG5mdW5jdGlvbiBtYWpvcihhLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkubWFqb3I7XG59XG5cbmV4cG9ydHMubWlub3IgPSBtaW5vcjtcbmZ1bmN0aW9uIG1pbm9yKGEsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5taW5vcjtcbn1cblxuZXhwb3J0cy5wYXRjaCA9IHBhdGNoO1xuZnVuY3Rpb24gcGF0Y2goYSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLnBhdGNoO1xufVxuXG5leHBvcnRzLmNvbXBhcmUgPSBjb21wYXJlO1xuZnVuY3Rpb24gY29tcGFyZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkuY29tcGFyZShiKTtcbn1cblxuZXhwb3J0cy5jb21wYXJlTG9vc2UgPSBjb21wYXJlTG9vc2U7XG5mdW5jdGlvbiBjb21wYXJlTG9vc2UoYSwgYikge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCB0cnVlKTtcbn1cblxuZXhwb3J0cy5yY29tcGFyZSA9IHJjb21wYXJlO1xuZnVuY3Rpb24gcmNvbXBhcmUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYiwgYSwgbG9vc2UpO1xufVxuXG5leHBvcnRzLnNvcnQgPSBzb3J0O1xuZnVuY3Rpb24gc29ydChsaXN0LCBsb29zZSkge1xuICByZXR1cm4gbGlzdC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5jb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSk7XG59XG5cbmV4cG9ydHMucnNvcnQgPSByc29ydDtcbmZ1bmN0aW9uIHJzb3J0KGxpc3QsIGxvb3NlKSB7XG4gIHJldHVybiBsaXN0LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBleHBvcnRzLnJjb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSk7XG59XG5cbmV4cG9ydHMuZ3QgPSBndDtcbmZ1bmN0aW9uIGd0KGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA+IDA7XG59XG5cbmV4cG9ydHMubHQgPSBsdDtcbmZ1bmN0aW9uIGx0KGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA8IDA7XG59XG5cbmV4cG9ydHMuZXEgPSBlcTtcbmZ1bmN0aW9uIGVxKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA9PT0gMDtcbn1cblxuZXhwb3J0cy5uZXEgPSBuZXE7XG5mdW5jdGlvbiBuZXEoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpICE9PSAwO1xufVxuXG5leHBvcnRzLmd0ZSA9IGd0ZTtcbmZ1bmN0aW9uIGd0ZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPj0gMDtcbn1cblxuZXhwb3J0cy5sdGUgPSBsdGU7XG5mdW5jdGlvbiBsdGUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpIDw9IDA7XG59XG5cbmV4cG9ydHMuY21wID0gY21wO1xuZnVuY3Rpb24gY21wKGEsIG9wLCBiLCBsb29zZSkge1xuICB2YXIgcmV0O1xuICBzd2l0Y2ggKG9wKSB7XG4gICAgY2FzZSAnPT09JzpcbiAgICAgIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpIGEgPSBhLnZlcnNpb247XG4gICAgICBpZiAodHlwZW9mIGIgPT09ICdvYmplY3QnKSBiID0gYi52ZXJzaW9uO1xuICAgICAgcmV0ID0gYSA9PT0gYjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJyE9PSc6XG4gICAgICBpZiAodHlwZW9mIGEgPT09ICdvYmplY3QnKSBhID0gYS52ZXJzaW9uO1xuICAgICAgaWYgKHR5cGVvZiBiID09PSAnb2JqZWN0JykgYiA9IGIudmVyc2lvbjtcbiAgICAgIHJldCA9IGEgIT09IGI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcnOiBjYXNlICc9JzogY2FzZSAnPT0nOiByZXQgPSBlcShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJyE9JzogcmV0ID0gbmVxKGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPic6IHJldCA9IGd0KGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPj0nOiByZXQgPSBndGUoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc8JzogcmV0ID0gbHQoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc8PSc6IHJldCA9IGx0ZShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGRlZmF1bHQ6IHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgb3BlcmF0b3I6ICcgKyBvcCk7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0cy5Db21wYXJhdG9yID0gQ29tcGFyYXRvcjtcbmZ1bmN0aW9uIENvbXBhcmF0b3IoY29tcCwgbG9vc2UpIHtcbiAgaWYgKGNvbXAgaW5zdGFuY2VvZiBDb21wYXJhdG9yKSB7XG4gICAgaWYgKGNvbXAubG9vc2UgPT09IGxvb3NlKVxuICAgICAgcmV0dXJuIGNvbXA7XG4gICAgZWxzZVxuICAgICAgY29tcCA9IGNvbXAudmFsdWU7XG4gIH1cblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQ29tcGFyYXRvcikpXG4gICAgcmV0dXJuIG5ldyBDb21wYXJhdG9yKGNvbXAsIGxvb3NlKTtcblxuICBkZWJ1ZygnY29tcGFyYXRvcicsIGNvbXAsIGxvb3NlKTtcbiAgdGhpcy5sb29zZSA9IGxvb3NlO1xuICB0aGlzLnBhcnNlKGNvbXApO1xuXG4gIGlmICh0aGlzLnNlbXZlciA9PT0gQU5ZKVxuICAgIHRoaXMudmFsdWUgPSAnJztcbiAgZWxzZVxuICAgIHRoaXMudmFsdWUgPSB0aGlzLm9wZXJhdG9yICsgdGhpcy5zZW12ZXIudmVyc2lvbjtcblxuICBkZWJ1ZygnY29tcCcsIHRoaXMpO1xufVxuXG52YXIgQU5ZID0ge307XG5Db21wYXJhdG9yLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKGNvbXApIHtcbiAgdmFyIHIgPSB0aGlzLmxvb3NlID8gcmVbQ09NUEFSQVRPUkxPT1NFXSA6IHJlW0NPTVBBUkFUT1JdO1xuICB2YXIgbSA9IGNvbXAubWF0Y2gocik7XG5cbiAgaWYgKCFtKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY29tcGFyYXRvcjogJyArIGNvbXApO1xuXG4gIHRoaXMub3BlcmF0b3IgPSBtWzFdO1xuICBpZiAodGhpcy5vcGVyYXRvciA9PT0gJz0nKVxuICAgIHRoaXMub3BlcmF0b3IgPSAnJztcblxuICAvLyBpZiBpdCBsaXRlcmFsbHkgaXMganVzdCAnPicgb3IgJycgdGhlbiBhbGxvdyBhbnl0aGluZy5cbiAgaWYgKCFtWzJdKVxuICAgIHRoaXMuc2VtdmVyID0gQU5ZO1xuICBlbHNlXG4gICAgdGhpcy5zZW12ZXIgPSBuZXcgU2VtVmVyKG1bMl0sIHRoaXMubG9vc2UpO1xufTtcblxuQ29tcGFyYXRvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudmFsdWU7XG59O1xuXG5Db21wYXJhdG9yLnByb3RvdHlwZS50ZXN0ID0gZnVuY3Rpb24odmVyc2lvbikge1xuICBkZWJ1ZygnQ29tcGFyYXRvci50ZXN0JywgdmVyc2lvbiwgdGhpcy5sb29zZSk7XG5cbiAgaWYgKHRoaXMuc2VtdmVyID09PSBBTlkpXG4gICAgcmV0dXJuIHRydWU7XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnc3RyaW5nJylcbiAgICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCB0aGlzLmxvb3NlKTtcblxuICByZXR1cm4gY21wKHZlcnNpb24sIHRoaXMub3BlcmF0b3IsIHRoaXMuc2VtdmVyLCB0aGlzLmxvb3NlKTtcbn07XG5cblxuZXhwb3J0cy5SYW5nZSA9IFJhbmdlO1xuZnVuY3Rpb24gUmFuZ2UocmFuZ2UsIGxvb3NlKSB7XG4gIGlmICgocmFuZ2UgaW5zdGFuY2VvZiBSYW5nZSkgJiYgcmFuZ2UubG9vc2UgPT09IGxvb3NlKVxuICAgIHJldHVybiByYW5nZTtcblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmFuZ2UpKVxuICAgIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKTtcblxuICB0aGlzLmxvb3NlID0gbG9vc2U7XG5cbiAgLy8gRmlyc3QsIHNwbGl0IGJhc2VkIG9uIGJvb2xlYW4gb3IgfHxcbiAgdGhpcy5yYXcgPSByYW5nZTtcbiAgdGhpcy5zZXQgPSByYW5nZS5zcGxpdCgvXFxzKlxcfFxcfFxccyovKS5tYXAoZnVuY3Rpb24ocmFuZ2UpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZVJhbmdlKHJhbmdlLnRyaW0oKSk7XG4gIH0sIHRoaXMpLmZpbHRlcihmdW5jdGlvbihjKSB7XG4gICAgLy8gdGhyb3cgb3V0IGFueSB0aGF0IGFyZSBub3QgcmVsZXZhbnQgZm9yIHdoYXRldmVyIHJlYXNvblxuICAgIHJldHVybiBjLmxlbmd0aDtcbiAgfSk7XG5cbiAgaWYgKCF0aGlzLnNldC5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFNlbVZlciBSYW5nZTogJyArIHJhbmdlKTtcbiAgfVxuXG4gIHRoaXMuZm9ybWF0KCk7XG59XG5cblJhbmdlLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5yYW5nZSA9IHRoaXMuc2V0Lm1hcChmdW5jdGlvbihjb21wcykge1xuICAgIHJldHVybiBjb21wcy5qb2luKCcgJykudHJpbSgpO1xuICB9KS5qb2luKCd8fCcpLnRyaW0oKTtcbiAgcmV0dXJuIHRoaXMucmFuZ2U7XG59O1xuXG5SYW5nZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucmFuZ2U7XG59O1xuXG5SYW5nZS5wcm90b3R5cGUucGFyc2VSYW5nZSA9IGZ1bmN0aW9uKHJhbmdlKSB7XG4gIHZhciBsb29zZSA9IHRoaXMubG9vc2U7XG4gIHJhbmdlID0gcmFuZ2UudHJpbSgpO1xuICBkZWJ1ZygncmFuZ2UnLCByYW5nZSwgbG9vc2UpO1xuICAvLyBgMS4yLjMgLSAxLjIuNGAgPT4gYD49MS4yLjMgPD0xLjIuNGBcbiAgdmFyIGhyID0gbG9vc2UgPyByZVtIWVBIRU5SQU5HRUxPT1NFXSA6IHJlW0hZUEhFTlJBTkdFXTtcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKGhyLCBoeXBoZW5SZXBsYWNlKTtcbiAgZGVidWcoJ2h5cGhlbiByZXBsYWNlJywgcmFuZ2UpO1xuICAvLyBgPiAxLjIuMyA8IDEuMi41YCA9PiBgPjEuMi4zIDwxLjIuNWBcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW0NPTVBBUkFUT1JUUklNXSwgY29tcGFyYXRvclRyaW1SZXBsYWNlKTtcbiAgZGVidWcoJ2NvbXBhcmF0b3IgdHJpbScsIHJhbmdlLCByZVtDT01QQVJBVE9SVFJJTV0pO1xuXG4gIC8vIGB+IDEuMi4zYCA9PiBgfjEuMi4zYFxuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UocmVbVElMREVUUklNXSwgdGlsZGVUcmltUmVwbGFjZSk7XG5cbiAgLy8gYF4gMS4yLjNgID0+IGBeMS4yLjNgXG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVtDQVJFVFRSSU1dLCBjYXJldFRyaW1SZXBsYWNlKTtcblxuICAvLyBub3JtYWxpemUgc3BhY2VzXG4gIHJhbmdlID0gcmFuZ2Uuc3BsaXQoL1xccysvKS5qb2luKCcgJyk7XG5cbiAgLy8gQXQgdGhpcyBwb2ludCwgdGhlIHJhbmdlIGlzIGNvbXBsZXRlbHkgdHJpbW1lZCBhbmRcbiAgLy8gcmVhZHkgdG8gYmUgc3BsaXQgaW50byBjb21wYXJhdG9ycy5cblxuICB2YXIgY29tcFJlID0gbG9vc2UgPyByZVtDT01QQVJBVE9STE9PU0VdIDogcmVbQ09NUEFSQVRPUl07XG4gIHZhciBzZXQgPSByYW5nZS5zcGxpdCgnICcpLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHBhcnNlQ29tcGFyYXRvcihjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKS5zcGxpdCgvXFxzKy8pO1xuICBpZiAodGhpcy5sb29zZSkge1xuICAgIC8vIGluIGxvb3NlIG1vZGUsIHRocm93IG91dCBhbnkgdGhhdCBhcmUgbm90IHZhbGlkIGNvbXBhcmF0b3JzXG4gICAgc2V0ID0gc2V0LmZpbHRlcihmdW5jdGlvbihjb21wKSB7XG4gICAgICByZXR1cm4gISFjb21wLm1hdGNoKGNvbXBSZSk7XG4gICAgfSk7XG4gIH1cbiAgc2V0ID0gc2V0Lm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIG5ldyBDb21wYXJhdG9yKGNvbXAsIGxvb3NlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNldDtcbn07XG5cbi8vIE1vc3RseSBqdXN0IGZvciB0ZXN0aW5nIGFuZCBsZWdhY3kgQVBJIHJlYXNvbnNcbmV4cG9ydHMudG9Db21wYXJhdG9ycyA9IHRvQ29tcGFyYXRvcnM7XG5mdW5jdGlvbiB0b0NvbXBhcmF0b3JzKHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSkuc2V0Lm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIGNvbXAubWFwKGZ1bmN0aW9uKGMpIHtcbiAgICAgIHJldHVybiBjLnZhbHVlO1xuICAgIH0pLmpvaW4oJyAnKS50cmltKCkuc3BsaXQoJyAnKTtcbiAgfSk7XG59XG5cbi8vIGNvbXByaXNlZCBvZiB4cmFuZ2VzLCB0aWxkZXMsIHN0YXJzLCBhbmQgZ3RsdCdzIGF0IHRoaXMgcG9pbnQuXG4vLyBhbHJlYWR5IHJlcGxhY2VkIHRoZSBoeXBoZW4gcmFuZ2VzXG4vLyB0dXJuIGludG8gYSBzZXQgb2YgSlVTVCBjb21wYXJhdG9ycy5cbmZ1bmN0aW9uIHBhcnNlQ29tcGFyYXRvcihjb21wLCBsb29zZSkge1xuICBkZWJ1ZygnY29tcCcsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZUNhcmV0cyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCdjYXJldCcsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZVRpbGRlcyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCd0aWxkZXMnLCBjb21wKTtcbiAgY29tcCA9IHJlcGxhY2VYUmFuZ2VzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ3hyYW5nZScsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZVN0YXJzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ3N0YXJzJywgY29tcCk7XG4gIHJldHVybiBjb21wO1xufVxuXG5mdW5jdGlvbiBpc1goaWQpIHtcbiAgcmV0dXJuICFpZCB8fCBpZC50b0xvd2VyQ2FzZSgpID09PSAneCcgfHwgaWQgPT09ICcqJztcbn1cblxuLy8gfiwgfj4gLS0+ICogKGFueSwga2luZGEgc2lsbHkpXG4vLyB+MiwgfjIueCwgfjIueC54LCB+PjIsIH4+Mi54IH4+Mi54LnggLS0+ID49Mi4wLjAgPDMuMC4wXG4vLyB+Mi4wLCB+Mi4wLngsIH4+Mi4wLCB+PjIuMC54IC0tPiA+PTIuMC4wIDwyLjEuMFxuLy8gfjEuMiwgfjEuMi54LCB+PjEuMiwgfj4xLjIueCAtLT4gPj0xLjIuMCA8MS4zLjBcbi8vIH4xLjIuMywgfj4xLjIuMyAtLT4gPj0xLjIuMyA8MS4zLjBcbi8vIH4xLjIuMCwgfj4xLjIuMCAtLT4gPj0xLjIuMCA8MS4zLjBcbmZ1bmN0aW9uIHJlcGxhY2VUaWxkZXMoY29tcCwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXAudHJpbSgpLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcmVwbGFjZVRpbGRlKGNvbXAsIGxvb3NlKTtcbiAgfSkuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlVGlsZGUoY29tcCwgbG9vc2UpIHtcbiAgdmFyIHIgPSBsb29zZSA/IHJlW1RJTERFTE9PU0VdIDogcmVbVElMREVdO1xuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIGZ1bmN0aW9uKF8sIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ3RpbGRlJywgY29tcCwgXywgTSwgbSwgcCwgcHIpO1xuICAgIHZhciByZXQ7XG5cbiAgICBpZiAoaXNYKE0pKVxuICAgICAgcmV0ID0gJyc7XG4gICAgZWxzZSBpZiAoaXNYKG0pKVxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIGVsc2UgaWYgKGlzWChwKSlcbiAgICAgIC8vIH4xLjIgPT0gPj0xLjIuMCA8MS4zLjBcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgZWxzZSBpZiAocHIpIHtcbiAgICAgIGRlYnVnKCdyZXBsYWNlVGlsZGUgcHInLCBwcik7XG4gICAgICBpZiAocHIuY2hhckF0KDApICE9PSAnLScpXG4gICAgICAgIHByID0gJy0nICsgcHI7XG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgfSBlbHNlXG4gICAgICAvLyB+MS4yLjMgPT0gPj0xLjIuMyA8MS4zLjBcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG5cbiAgICBkZWJ1ZygndGlsZGUgcmV0dXJuJywgcmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cblxuLy8gXiAtLT4gKiAoYW55LCBraW5kYSBzaWxseSlcbi8vIF4yLCBeMi54LCBeMi54LnggLS0+ID49Mi4wLjAgPDMuMC4wXG4vLyBeMi4wLCBeMi4wLnggLS0+ID49Mi4wLjAgPDMuMC4wXG4vLyBeMS4yLCBeMS4yLnggLS0+ID49MS4yLjAgPDIuMC4wXG4vLyBeMS4yLjMgLS0+ID49MS4yLjMgPDIuMC4wXG4vLyBeMS4yLjAgLS0+ID49MS4yLjAgPDIuMC4wXG5mdW5jdGlvbiByZXBsYWNlQ2FyZXRzKGNvbXAsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wLnRyaW0oKS5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VDYXJldChjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNhcmV0KGNvbXAsIGxvb3NlKSB7XG4gIGRlYnVnKCdjYXJldCcsIGNvbXAsIGxvb3NlKTtcbiAgdmFyIHIgPSBsb29zZSA/IHJlW0NBUkVUTE9PU0VdIDogcmVbQ0FSRVRdO1xuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIGZ1bmN0aW9uKF8sIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ2NhcmV0JywgY29tcCwgXywgTSwgbSwgcCwgcHIpO1xuICAgIHZhciByZXQ7XG5cbiAgICBpZiAoaXNYKE0pKVxuICAgICAgcmV0ID0gJyc7XG4gICAgZWxzZSBpZiAoaXNYKG0pKVxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIGVsc2UgaWYgKGlzWChwKSkge1xuICAgICAgaWYgKE0gPT09ICcwJylcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICAgIGVsc2VcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfSBlbHNlIGlmIChwcikge1xuICAgICAgZGVidWcoJ3JlcGxhY2VDYXJldCBwcicsIHByKTtcbiAgICAgIGlmIChwci5jaGFyQXQoMCkgIT09ICctJylcbiAgICAgICAgcHIgPSAnLScgKyBwcjtcbiAgICAgIGlmIChNID09PSAnMCcpIHtcbiAgICAgICAgaWYgKG0gPT09ICcwJylcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgbSArICcuJyArICgrcCArIDEpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArIHByICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICAgIH0gZWxzZVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgICAnIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnKCdubyBwcicpO1xuICAgICAgaWYgKE0gPT09ICcwJykge1xuICAgICAgICBpZiAobSA9PT0gJzAnKVxuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgbSArICcuJyArICgrcCArIDEpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgICB9IGVsc2VcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAgICcgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9XG5cbiAgICBkZWJ1ZygnY2FyZXQgcmV0dXJuJywgcmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVhSYW5nZXMoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ3JlcGxhY2VYUmFuZ2VzJywgY29tcCwgbG9vc2UpO1xuICByZXR1cm4gY29tcC5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VYUmFuZ2UoY29tcCwgbG9vc2UpO1xuICB9KS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VYUmFuZ2UoY29tcCwgbG9vc2UpIHtcbiAgY29tcCA9IGNvbXAudHJpbSgpO1xuICB2YXIgciA9IGxvb3NlID8gcmVbWFJBTkdFTE9PU0VdIDogcmVbWFJBTkdFXTtcbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCBmdW5jdGlvbihyZXQsIGd0bHQsIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ3hSYW5nZScsIGNvbXAsIHJldCwgZ3RsdCwgTSwgbSwgcCwgcHIpO1xuICAgIHZhciB4TSA9IGlzWChNKTtcbiAgICB2YXIgeG0gPSB4TSB8fCBpc1gobSk7XG4gICAgdmFyIHhwID0geG0gfHwgaXNYKHApO1xuICAgIHZhciBhbnlYID0geHA7XG5cbiAgICBpZiAoZ3RsdCA9PT0gJz0nICYmIGFueVgpXG4gICAgICBndGx0ID0gJyc7XG5cbiAgICBpZiAoeE0pIHtcbiAgICAgIGlmIChndGx0ID09PSAnPicgfHwgZ3RsdCA9PT0gJzwnKSB7XG4gICAgICAgIC8vIG5vdGhpbmcgaXMgYWxsb3dlZFxuICAgICAgICByZXQgPSAnPDAuMC4wJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vdGhpbmcgaXMgZm9yYmlkZGVuXG4gICAgICAgIHJldCA9ICcqJztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGd0bHQgJiYgYW55WCkge1xuICAgICAgLy8gcmVwbGFjZSBYIHdpdGggMFxuICAgICAgaWYgKHhtKVxuICAgICAgICBtID0gMDtcbiAgICAgIGlmICh4cClcbiAgICAgICAgcCA9IDA7XG5cbiAgICAgIGlmIChndGx0ID09PSAnPicpIHtcbiAgICAgICAgLy8gPjEgPT4gPj0yLjAuMFxuICAgICAgICAvLyA+MS4yID0+ID49MS4zLjBcbiAgICAgICAgLy8gPjEuMi4zID0+ID49IDEuMi40XG4gICAgICAgIGd0bHQgPSAnPj0nO1xuICAgICAgICBpZiAoeG0pIHtcbiAgICAgICAgICBNID0gK00gKyAxO1xuICAgICAgICAgIG0gPSAwO1xuICAgICAgICAgIHAgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHhwKSB7XG4gICAgICAgICAgbSA9ICttICsgMTtcbiAgICAgICAgICBwID0gMDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChndGx0ID09PSAnPD0nKSB7XG4gICAgICAgIC8vIDw9MC43LnggaXMgYWN0dWFsbHkgPDAuOC4wLCBzaW5jZSBhbnkgMC43Lnggc2hvdWxkXG4gICAgICAgIC8vIHBhc3MuICBTaW1pbGFybHksIDw9Ny54IGlzIGFjdHVhbGx5IDw4LjAuMCwgZXRjLlxuICAgICAgICBndGx0ID0gJzwnO1xuICAgICAgICBpZiAoeG0pXG4gICAgICAgICAgTSA9ICtNICsgMTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIG0gPSArbSArIDE7XG4gICAgICB9XG5cbiAgICAgIHJldCA9IGd0bHQgKyBNICsgJy4nICsgbSArICcuJyArIHA7XG4gICAgfSBlbHNlIGlmICh4bSkge1xuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIH0gZWxzZSBpZiAoeHApIHtcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgfVxuXG4gICAgZGVidWcoJ3hSYW5nZSByZXR1cm4nLCByZXQpO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG5cbi8vIEJlY2F1c2UgKiBpcyBBTkQtZWQgd2l0aCBldmVyeXRoaW5nIGVsc2UgaW4gdGhlIGNvbXBhcmF0b3IsXG4vLyBhbmQgJycgbWVhbnMgXCJhbnkgdmVyc2lvblwiLCBqdXN0IHJlbW92ZSB0aGUgKnMgZW50aXJlbHkuXG5mdW5jdGlvbiByZXBsYWNlU3RhcnMoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ3JlcGxhY2VTdGFycycsIGNvbXAsIGxvb3NlKTtcbiAgLy8gTG9vc2VuZXNzIGlzIGlnbm9yZWQgaGVyZS4gIHN0YXIgaXMgYWx3YXlzIGFzIGxvb3NlIGFzIGl0IGdldHMhXG4gIHJldHVybiBjb21wLnRyaW0oKS5yZXBsYWNlKHJlW1NUQVJdLCAnJyk7XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgcGFzc2VkIHRvIHN0cmluZy5yZXBsYWNlKHJlW0hZUEhFTlJBTkdFXSlcbi8vIE0sIG0sIHBhdGNoLCBwcmVyZWxlYXNlLCBidWlsZFxuLy8gMS4yIC0gMy40LjUgPT4gPj0xLjIuMCA8PTMuNC41XG4vLyAxLjIuMyAtIDMuNCA9PiA+PTEuMi4wIDwzLjUuMCBBbnkgMy40Lnggd2lsbCBkb1xuLy8gMS4yIC0gMy40ID0+ID49MS4yLjAgPDMuNS4wXG5mdW5jdGlvbiBoeXBoZW5SZXBsYWNlKCQwLFxuICAgICAgICAgICAgICAgICAgICAgICBmcm9tLCBmTSwgZm0sIGZwLCBmcHIsIGZiLFxuICAgICAgICAgICAgICAgICAgICAgICB0bywgdE0sIHRtLCB0cCwgdHByLCB0Yikge1xuXG4gIGlmIChpc1goZk0pKVxuICAgIGZyb20gPSAnJztcbiAgZWxzZSBpZiAoaXNYKGZtKSlcbiAgICBmcm9tID0gJz49JyArIGZNICsgJy4wLjAnO1xuICBlbHNlIGlmIChpc1goZnApKVxuICAgIGZyb20gPSAnPj0nICsgZk0gKyAnLicgKyBmbSArICcuMCc7XG4gIGVsc2VcbiAgICBmcm9tID0gJz49JyArIGZyb207XG5cbiAgaWYgKGlzWCh0TSkpXG4gICAgdG8gPSAnJztcbiAgZWxzZSBpZiAoaXNYKHRtKSlcbiAgICB0byA9ICc8JyArICgrdE0gKyAxKSArICcuMC4wJztcbiAgZWxzZSBpZiAoaXNYKHRwKSlcbiAgICB0byA9ICc8JyArIHRNICsgJy4nICsgKCt0bSArIDEpICsgJy4wJztcbiAgZWxzZSBpZiAodHByKVxuICAgIHRvID0gJzw9JyArIHRNICsgJy4nICsgdG0gKyAnLicgKyB0cCArICctJyArIHRwcjtcbiAgZWxzZVxuICAgIHRvID0gJzw9JyArIHRvO1xuXG4gIHJldHVybiAoZnJvbSArICcgJyArIHRvKS50cmltKCk7XG59XG5cblxuLy8gaWYgQU5ZIG9mIHRoZSBzZXRzIG1hdGNoIEFMTCBvZiBpdHMgY29tcGFyYXRvcnMsIHRoZW4gcGFzc1xuUmFuZ2UucHJvdG90eXBlLnRlc3QgPSBmdW5jdGlvbih2ZXJzaW9uKSB7XG4gIGlmICghdmVyc2lvbilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnc3RyaW5nJylcbiAgICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCB0aGlzLmxvb3NlKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRlc3RTZXQodGhpcy5zZXRbaV0sIHZlcnNpb24pKVxuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZnVuY3Rpb24gdGVzdFNldChzZXQsIHZlcnNpb24pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIXNldFtpXS50ZXN0KHZlcnNpb24pKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHZlcnNpb24ucHJlcmVsZWFzZS5sZW5ndGgpIHtcbiAgICAvLyBGaW5kIHRoZSBzZXQgb2YgdmVyc2lvbnMgdGhhdCBhcmUgYWxsb3dlZCB0byBoYXZlIHByZXJlbGVhc2VzXG4gICAgLy8gRm9yIGV4YW1wbGUsIF4xLjIuMy1wci4xIGRlc3VnYXJzIHRvID49MS4yLjMtcHIuMSA8Mi4wLjBcbiAgICAvLyBUaGF0IHNob3VsZCBhbGxvdyBgMS4yLjMtcHIuMmAgdG8gcGFzcy5cbiAgICAvLyBIb3dldmVyLCBgMS4yLjQtYWxwaGEubm90cmVhZHlgIHNob3VsZCBOT1QgYmUgYWxsb3dlZCxcbiAgICAvLyBldmVuIHRob3VnaCBpdCdzIHdpdGhpbiB0aGUgcmFuZ2Ugc2V0IGJ5IHRoZSBjb21wYXJhdG9ycy5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNldC5sZW5ndGg7IGkrKykge1xuICAgICAgZGVidWcoc2V0W2ldLnNlbXZlcik7XG4gICAgICBpZiAoc2V0W2ldLnNlbXZlciA9PT0gQU5ZKVxuICAgICAgICBjb250aW51ZTtcblxuICAgICAgaWYgKHNldFtpXS5zZW12ZXIucHJlcmVsZWFzZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBhbGxvd2VkID0gc2V0W2ldLnNlbXZlcjtcbiAgICAgICAgaWYgKGFsbG93ZWQubWFqb3IgPT09IHZlcnNpb24ubWFqb3IgJiZcbiAgICAgICAgICAgIGFsbG93ZWQubWlub3IgPT09IHZlcnNpb24ubWlub3IgJiZcbiAgICAgICAgICAgIGFsbG93ZWQucGF0Y2ggPT09IHZlcnNpb24ucGF0Y2gpXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVmVyc2lvbiBoYXMgYSAtcHJlLCBidXQgaXQncyBub3Qgb25lIG9mIHRoZSBvbmVzIHdlIGxpa2UuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydHMuc2F0aXNmaWVzID0gc2F0aXNmaWVzO1xuZnVuY3Rpb24gc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBsb29zZSkge1xuICB0cnkge1xuICAgIHJhbmdlID0gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSk7XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiByYW5nZS50ZXN0KHZlcnNpb24pO1xufVxuXG5leHBvcnRzLm1heFNhdGlzZnlpbmcgPSBtYXhTYXRpc2Z5aW5nO1xuZnVuY3Rpb24gbWF4U2F0aXNmeWluZyh2ZXJzaW9ucywgcmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiB2ZXJzaW9ucy5maWx0ZXIoZnVuY3Rpb24odmVyc2lvbikge1xuICAgIHJldHVybiBzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIGxvb3NlKTtcbiAgfSkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIHJjb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSlbMF0gfHwgbnVsbDtcbn1cblxuZXhwb3J0cy5taW5TYXRpc2Z5aW5nID0gbWluU2F0aXNmeWluZztcbmZ1bmN0aW9uIG1pblNhdGlzZnlpbmcodmVyc2lvbnMsIHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gdmVyc2lvbnMuZmlsdGVyKGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgICByZXR1cm4gc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBsb29zZSk7XG4gIH0pLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSlbMF0gfHwgbnVsbDtcbn1cblxuZXhwb3J0cy52YWxpZFJhbmdlID0gdmFsaWRSYW5nZTtcbmZ1bmN0aW9uIHZhbGlkUmFuZ2UocmFuZ2UsIGxvb3NlKSB7XG4gIHRyeSB7XG4gICAgLy8gUmV0dXJuICcqJyBpbnN0ZWFkIG9mICcnIHNvIHRoYXQgdHJ1dGhpbmVzcyB3b3Jrcy5cbiAgICAvLyBUaGlzIHdpbGwgdGhyb3cgaWYgaXQncyBpbnZhbGlkIGFueXdheVxuICAgIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKS5yYW5nZSB8fCAnKic7XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLy8gRGV0ZXJtaW5lIGlmIHZlcnNpb24gaXMgbGVzcyB0aGFuIGFsbCB0aGUgdmVyc2lvbnMgcG9zc2libGUgaW4gdGhlIHJhbmdlXG5leHBvcnRzLmx0ciA9IGx0cjtcbmZ1bmN0aW9uIGx0cih2ZXJzaW9uLCByYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIG91dHNpZGUodmVyc2lvbiwgcmFuZ2UsICc8JywgbG9vc2UpO1xufVxuXG4vLyBEZXRlcm1pbmUgaWYgdmVyc2lvbiBpcyBncmVhdGVyIHRoYW4gYWxsIHRoZSB2ZXJzaW9ucyBwb3NzaWJsZSBpbiB0aGUgcmFuZ2UuXG5leHBvcnRzLmd0ciA9IGd0cjtcbmZ1bmN0aW9uIGd0cih2ZXJzaW9uLCByYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIG91dHNpZGUodmVyc2lvbiwgcmFuZ2UsICc+JywgbG9vc2UpO1xufVxuXG5leHBvcnRzLm91dHNpZGUgPSBvdXRzaWRlO1xuZnVuY3Rpb24gb3V0c2lkZSh2ZXJzaW9uLCByYW5nZSwgaGlsbywgbG9vc2UpIHtcbiAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpO1xuICByYW5nZSA9IG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpO1xuXG4gIHZhciBndGZuLCBsdGVmbiwgbHRmbiwgY29tcCwgZWNvbXA7XG4gIHN3aXRjaCAoaGlsbykge1xuICAgIGNhc2UgJz4nOlxuICAgICAgZ3RmbiA9IGd0O1xuICAgICAgbHRlZm4gPSBsdGU7XG4gICAgICBsdGZuID0gbHQ7XG4gICAgICBjb21wID0gJz4nO1xuICAgICAgZWNvbXAgPSAnPj0nO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnPCc6XG4gICAgICBndGZuID0gbHQ7XG4gICAgICBsdGVmbiA9IGd0ZTtcbiAgICAgIGx0Zm4gPSBndDtcbiAgICAgIGNvbXAgPSAnPCc7XG4gICAgICBlY29tcCA9ICc8PSc7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTXVzdCBwcm92aWRlIGEgaGlsbyB2YWwgb2YgXCI8XCIgb3IgXCI+XCInKTtcbiAgfVxuXG4gIC8vIElmIGl0IHNhdGlzaWZlcyB0aGUgcmFuZ2UgaXQgaXMgbm90IG91dHNpZGVcbiAgaWYgKHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgbG9vc2UpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRnJvbSBub3cgb24sIHZhcmlhYmxlIHRlcm1zIGFyZSBhcyBpZiB3ZSdyZSBpbiBcImd0clwiIG1vZGUuXG4gIC8vIGJ1dCBub3RlIHRoYXQgZXZlcnl0aGluZyBpcyBmbGlwcGVkIGZvciB0aGUgXCJsdHJcIiBmdW5jdGlvbi5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJhbmdlLnNldC5sZW5ndGg7ICsraSkge1xuICAgIHZhciBjb21wYXJhdG9ycyA9IHJhbmdlLnNldFtpXTtcblxuICAgIHZhciBoaWdoID0gbnVsbDtcbiAgICB2YXIgbG93ID0gbnVsbDtcblxuICAgIGNvbXBhcmF0b3JzLmZvckVhY2goZnVuY3Rpb24oY29tcGFyYXRvcikge1xuICAgICAgaWYgKGNvbXBhcmF0b3Iuc2VtdmVyID09PSBBTlkpIHtcbiAgICAgICAgY29tcGFyYXRvciA9IG5ldyBDb21wYXJhdG9yKCc+PTAuMC4wJylcbiAgICAgIH1cbiAgICAgIGhpZ2ggPSBoaWdoIHx8IGNvbXBhcmF0b3I7XG4gICAgICBsb3cgPSBsb3cgfHwgY29tcGFyYXRvcjtcbiAgICAgIGlmIChndGZuKGNvbXBhcmF0b3Iuc2VtdmVyLCBoaWdoLnNlbXZlciwgbG9vc2UpKSB7XG4gICAgICAgIGhpZ2ggPSBjb21wYXJhdG9yO1xuICAgICAgfSBlbHNlIGlmIChsdGZuKGNvbXBhcmF0b3Iuc2VtdmVyLCBsb3cuc2VtdmVyLCBsb29zZSkpIHtcbiAgICAgICAgbG93ID0gY29tcGFyYXRvcjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIElmIHRoZSBlZGdlIHZlcnNpb24gY29tcGFyYXRvciBoYXMgYSBvcGVyYXRvciB0aGVuIG91ciB2ZXJzaW9uXG4gICAgLy8gaXNuJ3Qgb3V0c2lkZSBpdFxuICAgIGlmIChoaWdoLm9wZXJhdG9yID09PSBjb21wIHx8IGhpZ2gub3BlcmF0b3IgPT09IGVjb21wKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGxvd2VzdCB2ZXJzaW9uIGNvbXBhcmF0b3IgaGFzIGFuIG9wZXJhdG9yIGFuZCBvdXIgdmVyc2lvblxuICAgIC8vIGlzIGxlc3MgdGhhbiBpdCB0aGVuIGl0IGlzbid0IGhpZ2hlciB0aGFuIHRoZSByYW5nZVxuICAgIGlmICgoIWxvdy5vcGVyYXRvciB8fCBsb3cub3BlcmF0b3IgPT09IGNvbXApICYmXG4gICAgICAgIGx0ZWZuKHZlcnNpb24sIGxvdy5zZW12ZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChsb3cub3BlcmF0b3IgPT09IGVjb21wICYmIGx0Zm4odmVyc2lvbiwgbG93LnNlbXZlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydHMucHJlcmVsZWFzZSA9IHByZXJlbGVhc2U7XG5mdW5jdGlvbiBwcmVyZWxlYXNlKHZlcnNpb24sIGxvb3NlKSB7XG4gIHZhciBwYXJzZWQgPSBwYXJzZSh2ZXJzaW9uLCBsb29zZSk7XG4gIHJldHVybiAocGFyc2VkICYmIHBhcnNlZC5wcmVyZWxlYXNlLmxlbmd0aCkgPyBwYXJzZWQucHJlcmVsZWFzZSA6IG51bGw7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIGlzSW5pdGlhbGl6ZWQgPSBmYWxzZVxuXG4vLyBtYWpvciBldmVudHMgc3VwcG9ydGVkOlxuLy8gICBwYW5zdGFydFxuLy8gICBwYW5tb3ZlXG4vLyAgIHBhbmVuZFxuLy8gICBzd2lwZVxuLy8gICBsb25ncHJlc3Ncbi8vIGV4dHJhIGV2ZW50cyBzdXBwb3J0ZWQ6XG4vLyAgIGR1YWx0b3VjaHN0YXJ0XG4vLyAgIGR1YWx0b3VjaFxuLy8gICBkdWFsdG91Y2hlbmRcbi8vICAgdGFwXG4vLyAgIGRvdWJsZXRhcFxuLy8gICBwcmVzc2VuZFxuXG52YXIgZG9jID0gd2luZG93LmRvY3VtZW50XG52YXIgZG9jRWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50XG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcbnZhciBnZXN0dXJlcyA9IHt9XG52YXIgbGFzdFRhcCA9IG51bGxcblxuLyoqXG4gKiBmaW5kIHRoZSBjbG9zZXN0IGNvbW1vbiBhbmNlc3RvclxuICogaWYgdGhlcmUncyBubyBvbmUsIHJldHVybiBudWxsXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gZWwxIGZpcnN0IGVsZW1lbnRcbiAqIEBwYXJhbSAge0VsZW1lbnR9IGVsMiBzZWNvbmQgZWxlbWVudFxuICogQHJldHVybiB7RWxlbWVudH0gICAgIGNvbW1vbiBhbmNlc3RvclxuICovXG5mdW5jdGlvbiBnZXRDb21tb25BbmNlc3RvcihlbDEsIGVsMikge1xuICB2YXIgZWwgPSBlbDFcbiAgd2hpbGUgKGVsKSB7XG4gICAgaWYgKGVsLmNvbnRhaW5zKGVsMikgfHwgZWwgPT0gZWwyKSB7XG4gICAgICByZXR1cm4gZWxcbiAgICB9XG4gICAgZWwgPSBlbC5wYXJlbnROb2RlXG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuLyoqXG4gKiBmaXJlIGEgSFRNTEV2ZW50XG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gZWxlbWVudCB3aGljaCBlbGVtZW50IHRvIGZpcmUgYSBldmVudCBvblxuICogQHBhcmFtICB7c3RyaW5nfSAgdHlwZSAgICB0eXBlIG9mIGV2ZW50XG4gKiBAcGFyYW0gIHtvYmplY3R9ICBleHRyYSAgIGV4dHJhIGRhdGEgZm9yIHRoZSBldmVudCBvYmplY3RcbiAqL1xuZnVuY3Rpb24gZmlyZUV2ZW50KGVsZW1lbnQsIHR5cGUsIGV4dHJhKSB7XG4gIHZhciBldmVudCA9IGRvYy5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpXG4gIGV2ZW50LmluaXRFdmVudCh0eXBlLCB0cnVlLCB0cnVlKVxuXG4gIGlmICh0eXBlb2YgZXh0cmEgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yICh2YXIgcCBpbiBleHRyYSkge1xuICAgICAgZXZlbnRbcF0gPSBleHRyYVtwXVxuICAgIH1cbiAgfVxuXG4gIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudClcbn1cblxuLyoqXG4gKiBjYWxjIHRoZSB0cmFuc2Zvcm1cbiAqIGFzc3VtZSA0IHBvaW50cyBBQkNEIG9uIHRoZSBjb29yZGluYXRlIHN5c3RlbVxuICogPiByb3RhdGXvvJphbmdsZSByb3RhdGluZyBmcm9tIEFCIHRvIENEXG4gKiA+IHNjYWxl77yac2NhbGUgcmF0aW8gZnJvbSBBQiB0byBDRFxuICogPiB0cmFuc2xhdGXvvJp0cmFuc2xhdGUgc2hpZnQgZnJvbSBBIHRvIENcbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHgxIGFic2Npc3NhIG9mIEFcbiAqIEBwYXJhbSAge251bWJlcn0geTEgb3JkaW5hdGUgb2YgQVxuICogQHBhcmFtICB7bnVtYmVyfSB4MiBhYnNjaXNzYSBvZiBCXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHkyIG9yZGluYXRlIG9mIEJcbiAqIEBwYXJhbSAge251bWJlcn0geDMgYWJzY2lzc2Egb2YgQ1xuICogQHBhcmFtICB7bnVtYmVyfSB5MyBvcmRpbmF0ZSBvZiBDXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHg0IGFic2Npc3NhIG9mIERcbiAqIEBwYXJhbSAge251bWJlcn0geTQgb3JkaW5hdGUgb2YgRFxuICogQHJldHVybiB7b2JqZWN0fSAgICB0cmFuc2Zvcm0gb2JqZWN0IGxpa2VcbiAqICAge3JvdGF0ZSwgc2NhbGUsIHRyYW5zbGF0ZVsyXSwgbWF0cml4WzNdWzNdfVxuICovXG5mdW5jdGlvbiBjYWxjKHgxLCB5MSwgeDIsIHkyLCB4MywgeTMsIHg0LCB5NCkge1xuICB2YXIgcm90YXRlID0gTWF0aC5hdGFuMih5NCAtIHkzLCB4NCAtIHgzKSAtIE1hdGguYXRhbjIoeTIgLSB5MSwgeDIgLSB4MSlcbiAgdmFyIHNjYWxlID0gTWF0aC5zcXJ0KChNYXRoLnBvdyh5NCAtIHkzLCAyKVxuICAgICsgTWF0aC5wb3coeDQgLSB4MywgMikpIC8gKE1hdGgucG93KHkyIC0geTEsIDIpXG4gICAgKyBNYXRoLnBvdyh4MiAtIHgxLCAyKSkpXG4gIHZhciB0cmFuc2xhdGUgPSBbXG4gICAgeDNcbiAgICAtIHNjYWxlICogeDEgKiBNYXRoLmNvcyhyb3RhdGUpXG4gICAgKyBzY2FsZSAqIHkxICogTWF0aC5zaW4ocm90YXRlKSxcbiAgICB5M1xuICAgIC0gc2NhbGUgKiB5MSAqIE1hdGguY29zKHJvdGF0ZSlcbiAgICAtIHNjYWxlICogeDEgKiBNYXRoLnNpbihyb3RhdGUpXVxuXG4gIHJldHVybiB7XG4gICAgcm90YXRlOiByb3RhdGUsXG4gICAgc2NhbGU6IHNjYWxlLFxuICAgIHRyYW5zbGF0ZTogdHJhbnNsYXRlLFxuICAgIG1hdHJpeDogW1xuICAgICAgW3NjYWxlICogTWF0aC5jb3Mocm90YXRlKSwgLXNjYWxlICogTWF0aC5zaW4ocm90YXRlKSwgdHJhbnNsYXRlWzBdXSxcbiAgICAgIFtzY2FsZSAqIE1hdGguc2luKHJvdGF0ZSksIHNjYWxlICogTWF0aC5jb3Mocm90YXRlKSwgdHJhbnNsYXRlWzFdXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF1cbiAgfVxufVxuXG4vKipcbiAqIHRha2Ugb3ZlciB0aGUgdG91Y2hzdGFydCBldmVudHMuIEFkZCBuZXcgdG91Y2hlcyB0byB0aGUgZ2VzdHVyZXMuXG4gKiBJZiB0aGVyZSBpcyBubyBwcmV2aW91cyByZWNvcmRzLCB0aGVuIGJpbmQgdG91Y2htb3ZlLCB0b2NoZW5kXG4gKiBhbmQgdG91Y2hjYW5jZWwgZXZlbnRzLlxuICogbmV3IHRvdWNoZXMgaW5pdGlhbGl6ZWQgd2l0aCBzdGF0ZSAndGFwcGluZycsIGFuZCB3aXRoaW4gNTAwIG1pbGxpc2Vjb25kc1xuICogaWYgdGhlIHN0YXRlIGlzIHN0aWxsIHRhcHBpbmcsIHRoZW4gdHJpZ2dlciBnZXN0dXJlICdwcmVzcycuXG4gKiBJZiB0aGVyZSBhcmUgdHdvIHRvdWNoZSBwb2ludHMsIHRoZW4gdGhlICdkdWFsdG91Y2hzdGFydCcgaXMgdHJpZ2dlcmQuIFRoZVxuICogbm9kZSBvZiB0aGUgdG91Y2ggZ2VzdHVyZSBpcyB0aGVpciBjbG9lc3QgY29tbW9uIGFuY2VzdG9yLlxuICpcbiAqIEBldmVudFxuICogQHBhcmFtICB7ZXZlbnR9IGV2ZW50XG4gKi9cbmZ1bmN0aW9uIHRvdWNoc3RhcnRIYW5kbGVyKGV2ZW50KSB7XG5cbiAgaWYgKE9iamVjdC5rZXlzKGdlc3R1cmVzKS5sZW5ndGggPT09IDApIHtcbiAgICBkb2NFbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0b3VjaG1vdmVIYW5kbGVyLCBmYWxzZSlcbiAgICBkb2NFbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvdWNoZW5kSGFuZGxlciwgZmFsc2UpXG4gICAgZG9jRWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0b3VjaGNhbmNlbEhhbmRsZXIsIGZhbHNlKVxuICB9XG5cbiAgLy8gcmVjb3JkIGV2ZXJ5IHRvdWNoXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIHZhciB0b3VjaFJlY29yZCA9IHt9XG5cbiAgICBmb3IgKHZhciBwIGluIHRvdWNoKSB7XG4gICAgICB0b3VjaFJlY29yZFtwXSA9IHRvdWNoW3BdXG4gICAgfVxuXG4gICAgdmFyIGdlc3R1cmUgPSB7XG4gICAgICBzdGFydFRvdWNoOiB0b3VjaFJlY29yZCxcbiAgICAgIHN0YXJ0VGltZTogRGF0ZS5ub3coKSxcbiAgICAgIHN0YXR1czogJ3RhcHBpbmcnLFxuICAgICAgZWxlbWVudDogZXZlbnQuc3JjRWxlbWVudCB8fCBldmVudC50YXJnZXQsXG4gICAgICBwcmVzc2luZ0hhbmRsZXI6IHNldFRpbWVvdXQoZnVuY3Rpb24gKGVsZW1lbnQsIHRvdWNoKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGdlc3R1cmUuc3RhdHVzID09PSAndGFwcGluZycpIHtcbiAgICAgICAgICAgIGdlc3R1cmUuc3RhdHVzID0gJ3ByZXNzaW5nJ1xuXG4gICAgICAgICAgICBmaXJlRXZlbnQoZWxlbWVudCwgJ2xvbmdwcmVzcycsIHtcbiAgICAgICAgICAgICAgLy8gYWRkIHRvdWNoIGRhdGEgZm9yIHdlZXhcbiAgICAgICAgICAgICAgdG91Y2g6IHRvdWNoLFxuICAgICAgICAgICAgICB0b3VjaGVzOiBldmVudC50b3VjaGVzLFxuICAgICAgICAgICAgICBjaGFuZ2VkVG91Y2hlczogZXZlbnQuY2hhbmdlZFRvdWNoZXMsXG4gICAgICAgICAgICAgIHRvdWNoRXZlbnQ6IGV2ZW50XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNsZWFyVGltZW91dChnZXN0dXJlLnByZXNzaW5nSGFuZGxlcilcbiAgICAgICAgICBnZXN0dXJlLnByZXNzaW5nSGFuZGxlciA9IG51bGxcbiAgICAgICAgfVxuICAgICAgfShldmVudC5zcmNFbGVtZW50IHx8IGV2ZW50LnRhcmdldCwgZXZlbnQuY2hhbmdlZFRvdWNoZXNbaV0pLCA1MDApXG4gICAgfVxuICAgIGdlc3R1cmVzW3RvdWNoLmlkZW50aWZpZXJdID0gZ2VzdHVyZVxuICB9XG5cbiAgaWYgKE9iamVjdC5rZXlzKGdlc3R1cmVzKS5sZW5ndGggPT0gMikge1xuICAgIHZhciBlbGVtZW50cyA9IFtdXG5cbiAgICBmb3IgKHZhciBwIGluIGdlc3R1cmVzKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGdlc3R1cmVzW3BdLmVsZW1lbnQpXG4gICAgfVxuXG4gICAgZmlyZUV2ZW50KGdldENvbW1vbkFuY2VzdG9yKGVsZW1lbnRzWzBdLCBlbGVtZW50c1sxXSksICdkdWFsdG91Y2hzdGFydCcsIHtcbiAgICAgIHRvdWNoZXM6IHNsaWNlLmNhbGwoZXZlbnQudG91Y2hlcyksXG4gICAgICB0b3VjaEV2ZW50OiBldmVudFxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiB0YWtlIG92ZXIgdG91Y2htb3ZlIGV2ZW50cywgYW5kIGhhbmRsZSBwYW4gYW5kIGR1YWwgcmVsYXRlZCBnZXN0dXJlcy5cbiAqXG4gKiAxLiB0cmF2ZXJzZSBldmVyeSB0b3VjaCBwb2ludO+8mlxuICogPiBpZiAndGFwcGluZycgYW5kIHRoZSBzaGlmdCBpcyBvdmVyIDEwIHBpeGxlcywgdGhlbiBpdCdzIGEgJ3Bhbm5pbmcnLlxuICogMi4gaWYgdGhlcmUgYXJlIHR3byB0b3VjaCBwb2ludHMsIHRoZW4gY2FsYyB0aGUgdHJhbmZvcm0gYW5kIHRyaWdnZXJcbiAqICAgJ2R1YWx0b3VjaCcuXG4gKlxuICogQGV2ZW50XG4gKiBAcGFyYW0gIHtldmVudH0gZXZlbnRcbiAqL1xuZnVuY3Rpb24gdG91Y2htb3ZlSGFuZGxlcihldmVudCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbaV1cbiAgICB2YXIgZ2VzdHVyZSA9IGdlc3R1cmVzW3RvdWNoLmlkZW50aWZpZXJdXG5cbiAgICBpZiAoIWdlc3R1cmUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghZ2VzdHVyZS5sYXN0VG91Y2gpIHtcbiAgICAgIGdlc3R1cmUubGFzdFRvdWNoID0gZ2VzdHVyZS5zdGFydFRvdWNoXG4gICAgfVxuICAgIGlmICghZ2VzdHVyZS5sYXN0VGltZSkge1xuICAgICAgZ2VzdHVyZS5sYXN0VGltZSA9IGdlc3R1cmUuc3RhcnRUaW1lXG4gICAgfVxuICAgIGlmICghZ2VzdHVyZS52ZWxvY2l0eVgpIHtcbiAgICAgIGdlc3R1cmUudmVsb2NpdHlYID0gMFxuICAgIH1cbiAgICBpZiAoIWdlc3R1cmUudmVsb2NpdHlZKSB7XG4gICAgICBnZXN0dXJlLnZlbG9jaXR5WSA9IDBcbiAgICB9XG4gICAgaWYgKCFnZXN0dXJlLmR1cmF0aW9uKSB7XG4gICAgICBnZXN0dXJlLmR1cmF0aW9uID0gMFxuICAgIH1cblxuICAgIHZhciB0aW1lID0gIERhdGUubm93KCkgLSBnZXN0dXJlLmxhc3RUaW1lXG4gICAgdmFyIHZ4ID0gKHRvdWNoLmNsaWVudFggLSBnZXN0dXJlLmxhc3RUb3VjaC5jbGllbnRYKSAvIHRpbWVcbiAgICB2YXIgdnkgPSAodG91Y2guY2xpZW50WSAtIGdlc3R1cmUubGFzdFRvdWNoLmNsaWVudFkpIC8gdGltZVxuXG4gICAgdmFyIFJFQ09SRF9EVVJBVElPTiA9IDcwXG4gICAgaWYgKHRpbWUgPiBSRUNPUkRfRFVSQVRJT04pIHtcbiAgICAgIHRpbWUgPSBSRUNPUkRfRFVSQVRJT05cbiAgICB9XG4gICAgaWYgKGdlc3R1cmUuZHVyYXRpb24gKyB0aW1lID4gUkVDT1JEX0RVUkFUSU9OKSB7XG4gICAgICBnZXN0dXJlLmR1cmF0aW9uID0gUkVDT1JEX0RVUkFUSU9OIC0gdGltZVxuICAgIH1cblxuICAgIGdlc3R1cmUudmVsb2NpdHlYID0gKGdlc3R1cmUudmVsb2NpdHlYICogZ2VzdHVyZS5kdXJhdGlvbiArIHZ4ICogdGltZSlcbiAgICAgIC8gKGdlc3R1cmUuZHVyYXRpb24gKyB0aW1lKVxuICAgIGdlc3R1cmUudmVsb2NpdHlZID0gKGdlc3R1cmUudmVsb2NpdHlZICogZ2VzdHVyZS5kdXJhdGlvbiArIHZ5ICogdGltZSlcbiAgICAgIC8gKGdlc3R1cmUuZHVyYXRpb24gKyB0aW1lKVxuICAgIGdlc3R1cmUuZHVyYXRpb24gKz0gdGltZVxuXG4gICAgZ2VzdHVyZS5sYXN0VG91Y2ggPSB7fVxuXG4gICAgZm9yICh2YXIgcCBpbiB0b3VjaCkge1xuICAgICAgZ2VzdHVyZS5sYXN0VG91Y2hbcF0gPSB0b3VjaFtwXVxuICAgIH1cbiAgICBnZXN0dXJlLmxhc3RUaW1lID0gRGF0ZS5ub3coKVxuXG4gICAgdmFyIGRpc3BsYWNlbWVudFggPSB0b3VjaC5jbGllbnRYIC0gZ2VzdHVyZS5zdGFydFRvdWNoLmNsaWVudFhcbiAgICB2YXIgZGlzcGxhY2VtZW50WSA9IHRvdWNoLmNsaWVudFkgLSBnZXN0dXJlLnN0YXJ0VG91Y2guY2xpZW50WVxuICAgIHZhciBkaXN0YW5jZSA9IE1hdGguc3FydChNYXRoLnBvdyhkaXNwbGFjZW1lbnRYLCAyKVxuICAgICAgKyBNYXRoLnBvdyhkaXNwbGFjZW1lbnRZLCAyKSlcbiAgICB2YXIgaXNWZXJ0aWNhbCA9ICEoTWF0aC5hYnMoZGlzcGxhY2VtZW50WCkgPiBNYXRoLmFicyhkaXNwbGFjZW1lbnRZKSlcbiAgICB2YXIgZGlyZWN0aW9uID0gaXNWZXJ0aWNhbFxuICAgICAgPyBkaXNwbGFjZW1lbnRZID49IDAgPyAnZG93bicgOiAndXAnXG4gICAgICA6IGRpc3BsYWNlbWVudFggPj0gMCA/ICdyaWdodCcgOiAnbGVmdCdcblxuICAgIC8vIG1hZ2ljIG51bWJlciAxMDogbW92aW5nIDEwcHggbWVhbnMgcGFuLCBub3QgdGFwXG4gICAgaWYgKChnZXN0dXJlLnN0YXR1cyA9PT0gJ3RhcHBpbmcnIHx8IGdlc3R1cmUuc3RhdHVzID09PSAncHJlc3NpbmcnKVxuICAgICAgICAmJiBkaXN0YW5jZSA+IDEwKSB7XG4gICAgICBnZXN0dXJlLnN0YXR1cyA9ICdwYW5uaW5nJ1xuICAgICAgZ2VzdHVyZS5pc1ZlcnRpY2FsID0gaXNWZXJ0aWNhbFxuICAgICAgZ2VzdHVyZS5kaXJlY3Rpb24gPSBkaXJlY3Rpb25cblxuICAgICAgZmlyZUV2ZW50KGdlc3R1cmUuZWxlbWVudCwgJ3BhbnN0YXJ0Jywge1xuICAgICAgICB0b3VjaDogdG91Y2gsXG4gICAgICAgIHRvdWNoZXM6IGV2ZW50LnRvdWNoZXMsXG4gICAgICAgIGNoYW5nZWRUb3VjaGVzOiBldmVudC5jaGFuZ2VkVG91Y2hlcyxcbiAgICAgICAgdG91Y2hFdmVudDogZXZlbnQsXG4gICAgICAgIGlzVmVydGljYWw6IGdlc3R1cmUuaXNWZXJ0aWNhbCxcbiAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb25cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGdlc3R1cmUuc3RhdHVzID09PSAncGFubmluZycpIHtcbiAgICAgIGdlc3R1cmUucGFuVGltZSA9IERhdGUubm93KClcblxuICAgICAgZmlyZUV2ZW50KGdlc3R1cmUuZWxlbWVudCwgJ3Bhbm1vdmUnLCB7XG4gICAgICAgIGRpc3BsYWNlbWVudFg6IGRpc3BsYWNlbWVudFgsXG4gICAgICAgIGRpc3BsYWNlbWVudFk6IGRpc3BsYWNlbWVudFksXG4gICAgICAgIHRvdWNoOiB0b3VjaCxcbiAgICAgICAgdG91Y2hlczogZXZlbnQudG91Y2hlcyxcbiAgICAgICAgY2hhbmdlZFRvdWNoZXM6IGV2ZW50LmNoYW5nZWRUb3VjaGVzLFxuICAgICAgICB0b3VjaEV2ZW50OiBldmVudCxcbiAgICAgICAgaXNWZXJ0aWNhbDogZ2VzdHVyZS5pc1ZlcnRpY2FsLFxuICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvblxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBpZiAoT2JqZWN0LmtleXMoZ2VzdHVyZXMpLmxlbmd0aCA9PSAyKSB7XG4gICAgdmFyIHBvc2l0aW9uID0gW11cbiAgICB2YXIgY3VycmVudCA9IFtdXG4gICAgdmFyIGVsZW1lbnRzID0gW11cbiAgICB2YXIgdHJhbnNmb3JtXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50LnRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB0b3VjaCA9IGV2ZW50LnRvdWNoZXNbaV1cbiAgICAgIHZhciBnZXN0dXJlID0gZ2VzdHVyZXNbdG91Y2guaWRlbnRpZmllcl1cbiAgICAgIHBvc2l0aW9uLnB1c2goW2dlc3R1cmUuc3RhcnRUb3VjaC5jbGllbnRYLCBnZXN0dXJlLnN0YXJ0VG91Y2guY2xpZW50WV0pXG4gICAgICBjdXJyZW50LnB1c2goW3RvdWNoLmNsaWVudFgsIHRvdWNoLmNsaWVudFldKVxuICAgIH1cblxuICAgIGZvciAodmFyIHAgaW4gZ2VzdHVyZXMpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZ2VzdHVyZXNbcF0uZWxlbWVudClcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm0gPSBjYWxjKFxuICAgICAgcG9zaXRpb25bMF1bMF0sXG4gICAgICBwb3NpdGlvblswXVsxXSxcbiAgICAgIHBvc2l0aW9uWzFdWzBdLFxuICAgICAgcG9zaXRpb25bMV1bMV0sXG4gICAgICBjdXJyZW50WzBdWzBdLFxuICAgICAgY3VycmVudFswXVsxXSxcbiAgICAgIGN1cnJlbnRbMV1bMF0sXG4gICAgICBjdXJyZW50WzFdWzFdXG4gICAgKVxuICAgIGZpcmVFdmVudChnZXRDb21tb25BbmNlc3RvcihlbGVtZW50c1swXSwgZWxlbWVudHNbMV0pLCAnZHVhbHRvdWNoJywge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICB0b3VjaGVzOiBldmVudC50b3VjaGVzLFxuICAgICAgdG91Y2hFdmVudDogZXZlbnRcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogaGFuZGxlIHRvdWNoZW5kIGV2ZW50XG4gKlxuICogMS4gaWYgdGhlcmUgYXJlIHRvdyB0b3VjaCBwb2ludHMsIHRoZW4gdHJpZ2dlciAnZHVhbHRvdWNoZW5kJ+WmglxuICpcbiAqIDIuIHRyYXZlcnNlIGV2ZXJ5IHRvdWNoIHBpb25077yaXG4gKiA+IGlmIHRhcHBpbmcsIHRoZW4gdHJpZ2dlciAndGFwJy5cbiAqIElmIHRoZXJlIGlzIGEgdGFwIDMwMCBtaWxsaXNlY29uZHMgYmVmb3JlLCB0aGVuIGl0J3MgYSAnZG91YmxldGFwJy5cbiAqID4gaWYgcGFkZGluZywgdGhlbiBkZWNpZGUgdG8gdHJpZ2dlciAncGFuZW5kJyBvciAnc3dpcGUnXG4gKiA+IGlmIHByZXNzaW5nLCB0aGVuIHRyaWdnZXIgJ3ByZXNzZW5kJy5cbiAqXG4gKiAzLiByZW1vdmUgbGlzdGVuZXJzLlxuICpcbiAqIEBldmVudFxuICogQHBhcmFtICB7ZXZlbnR9IGV2ZW50XG4gKi9cbmZ1bmN0aW9uIHRvdWNoZW5kSGFuZGxlcihldmVudCkge1xuXG4gIGlmIChPYmplY3Qua2V5cyhnZXN0dXJlcykubGVuZ3RoID09IDIpIHtcbiAgICB2YXIgZWxlbWVudHMgPSBbXVxuICAgIGZvciAodmFyIHAgaW4gZ2VzdHVyZXMpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZ2VzdHVyZXNbcF0uZWxlbWVudClcbiAgICB9XG4gICAgZmlyZUV2ZW50KGdldENvbW1vbkFuY2VzdG9yKGVsZW1lbnRzWzBdLCBlbGVtZW50c1sxXSksICdkdWFsdG91Y2hlbmQnLCB7XG4gICAgICB0b3VjaGVzOiBzbGljZS5jYWxsKGV2ZW50LnRvdWNoZXMpLFxuICAgICAgdG91Y2hFdmVudDogZXZlbnRcbiAgICB9KVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzW2ldXG4gICAgdmFyIGlkID0gdG91Y2guaWRlbnRpZmllclxuICAgIHZhciBnZXN0dXJlID0gZ2VzdHVyZXNbaWRdXG5cbiAgICBpZiAoIWdlc3R1cmUpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKGdlc3R1cmUucHJlc3NpbmdIYW5kbGVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQoZ2VzdHVyZS5wcmVzc2luZ0hhbmRsZXIpXG4gICAgICBnZXN0dXJlLnByZXNzaW5nSGFuZGxlciA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAoZ2VzdHVyZS5zdGF0dXMgPT09ICd0YXBwaW5nJykge1xuICAgICAgZ2VzdHVyZS50aW1lc3RhbXAgPSBEYXRlLm5vdygpXG4gICAgICBmaXJlRXZlbnQoZ2VzdHVyZS5lbGVtZW50LCAndGFwJywge1xuICAgICAgICB0b3VjaDogdG91Y2gsXG4gICAgICAgIHRvdWNoRXZlbnQ6IGV2ZW50XG4gICAgICB9KVxuXG4gICAgICBpZiAobGFzdFRhcCAmJiBnZXN0dXJlLnRpbWVzdGFtcCAtIGxhc3RUYXAudGltZXN0YW1wIDwgMzAwKSB7XG4gICAgICAgIGZpcmVFdmVudChnZXN0dXJlLmVsZW1lbnQsICdkb3VibGV0YXAnLCB7XG4gICAgICAgICAgdG91Y2g6IHRvdWNoLFxuICAgICAgICAgIHRvdWNoRXZlbnQ6IGV2ZW50XG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGxhc3RUYXAgPSBnZXN0dXJlXG4gICAgfVxuXG4gICAgaWYgKGdlc3R1cmUuc3RhdHVzID09PSAncGFubmluZycpIHtcbiAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpXG4gICAgICB2YXIgZHVyYXRpb24gPSBub3cgLSBnZXN0dXJlLnN0YXJ0VGltZVxuICAgICAgdmFyIGRpc3BsYWNlbWVudFggPSB0b3VjaC5jbGllbnRYIC0gZ2VzdHVyZS5zdGFydFRvdWNoLmNsaWVudFhcbiAgICAgIHZhciBkaXNwbGFjZW1lbnRZID0gdG91Y2guY2xpZW50WSAtIGdlc3R1cmUuc3RhcnRUb3VjaC5jbGllbnRZXG5cbiAgICAgIHZhciB2ZWxvY2l0eSA9IE1hdGguc3FydChnZXN0dXJlLnZlbG9jaXR5WSAqIGdlc3R1cmUudmVsb2NpdHlZXG4gICAgICAgICsgZ2VzdHVyZS52ZWxvY2l0eVggKiBnZXN0dXJlLnZlbG9jaXR5WClcbiAgICAgIHZhciBpc1N3aXBlID0gdmVsb2NpdHkgPiAwLjUgJiYgKG5vdyAtIGdlc3R1cmUubGFzdFRpbWUpIDwgMTAwXG4gICAgICB2YXIgZXh0cmEgPSB7XG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgaXNTd2lwZTogaXNTd2lwZSxcbiAgICAgICAgdmVsb2NpdHlYOiBnZXN0dXJlLnZlbG9jaXR5WCxcbiAgICAgICAgdmVsb2NpdHlZOiBnZXN0dXJlLnZlbG9jaXR5WSxcbiAgICAgICAgZGlzcGxhY2VtZW50WDogZGlzcGxhY2VtZW50WCxcbiAgICAgICAgZGlzcGxhY2VtZW50WTogZGlzcGxhY2VtZW50WSxcbiAgICAgICAgdG91Y2g6IHRvdWNoLFxuICAgICAgICB0b3VjaGVzOiBldmVudC50b3VjaGVzLFxuICAgICAgICBjaGFuZ2VkVG91Y2hlczogZXZlbnQuY2hhbmdlZFRvdWNoZXMsXG4gICAgICAgIHRvdWNoRXZlbnQ6IGV2ZW50LFxuICAgICAgICBpc1ZlcnRpY2FsOiBnZXN0dXJlLmlzVmVydGljYWwsXG4gICAgICAgIGRpcmVjdGlvbjogZ2VzdHVyZS5kaXJlY3Rpb25cbiAgICAgIH1cblxuICAgICAgZmlyZUV2ZW50KGdlc3R1cmUuZWxlbWVudCwgJ3BhbmVuZCcsIGV4dHJhKVxuICAgICAgaWYgKGlzU3dpcGUpIHtcbiAgICAgICAgZmlyZUV2ZW50KGdlc3R1cmUuZWxlbWVudCwgJ3N3aXBlJywgZXh0cmEpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGdlc3R1cmUuc3RhdHVzID09PSAncHJlc3NpbmcnKSB7XG4gICAgICBmaXJlRXZlbnQoZ2VzdHVyZS5lbGVtZW50LCAncHJlc3NlbmQnLCB7XG4gICAgICAgIHRvdWNoOiB0b3VjaCxcbiAgICAgICAgdG91Y2hFdmVudDogZXZlbnRcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZGVsZXRlIGdlc3R1cmVzW2lkXVxuICB9XG5cbiAgaWYgKE9iamVjdC5rZXlzKGdlc3R1cmVzKS5sZW5ndGggPT09IDApIHtcbiAgICBkb2NFbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0b3VjaG1vdmVIYW5kbGVyLCBmYWxzZSlcbiAgICBkb2NFbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvdWNoZW5kSGFuZGxlciwgZmFsc2UpXG4gICAgZG9jRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0b3VjaGNhbmNlbEhhbmRsZXIsIGZhbHNlKVxuICB9XG59XG5cbi8qKlxuICogaGFuZGxlIHRvdWNoY2FuY2VsXG4gKlxuICogMS4gaWYgdGhlcmUgYXJlIHR3byB0b3VjaCBwb2ludHMsIHRoZW4gdHJpZ2dlciAnZHVhbHRvdWNoZW5kJ1xuICpcbiAqIDIuIHRyYXZlcnNlIGV2ZXJ0eSB0b3VjaCBwb2ludDpcbiAqID4gaWYgcGFubm5pZywgdGhlbiB0cmlnZ2VyICdwYW5lbmQnXG4gKiA+IGlmIHByZXNzaW5nLCB0aGVuIHRyaWdnZXIgJ3ByZXNzZW5kJ1xuICpcbiAqIDMuIHJlbW92ZSBsaXN0ZW5lcnNcbiAqXG4gKiBAZXZlbnRcbiAqIEBwYXJhbSAge2V2ZW50fSBldmVudFxuICovXG5mdW5jdGlvbiB0b3VjaGNhbmNlbEhhbmRsZXIoZXZlbnQpIHtcblxuICBpZiAoT2JqZWN0LmtleXMoZ2VzdHVyZXMpLmxlbmd0aCA9PSAyKSB7XG4gICAgdmFyIGVsZW1lbnRzID0gW11cbiAgICBmb3IgKHZhciBwIGluIGdlc3R1cmVzKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGdlc3R1cmVzW3BdLmVsZW1lbnQpXG4gICAgfVxuICAgIGZpcmVFdmVudChnZXRDb21tb25BbmNlc3RvcihlbGVtZW50c1swXSwgZWxlbWVudHNbMV0pLCAnZHVhbHRvdWNoZW5kJywge1xuICAgICAgdG91Y2hlczogc2xpY2UuY2FsbChldmVudC50b3VjaGVzKSxcbiAgICAgIHRvdWNoRXZlbnQ6IGV2ZW50XG4gICAgfSlcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIHZhciBpZCA9IHRvdWNoLmlkZW50aWZpZXJcbiAgICB2YXIgZ2VzdHVyZSA9IGdlc3R1cmVzW2lkXVxuXG4gICAgaWYgKCFnZXN0dXJlKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGlmIChnZXN0dXJlLnByZXNzaW5nSGFuZGxlcikge1xuICAgICAgY2xlYXJUaW1lb3V0KGdlc3R1cmUucHJlc3NpbmdIYW5kbGVyKVxuICAgICAgZ2VzdHVyZS5wcmVzc2luZ0hhbmRsZXIgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKGdlc3R1cmUuc3RhdHVzID09PSAncGFubmluZycpIHtcbiAgICAgIGZpcmVFdmVudChnZXN0dXJlLmVsZW1lbnQsICdwYW5lbmQnLCB7XG4gICAgICAgIHRvdWNoOiB0b3VjaCxcbiAgICAgICAgdG91Y2hlczogZXZlbnQudG91Y2hlcyxcbiAgICAgICAgY2hhbmdlZFRvdWNoZXM6IGV2ZW50LmNoYW5nZWRUb3VjaGVzLFxuICAgICAgICB0b3VjaEV2ZW50OiBldmVudFxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKGdlc3R1cmUuc3RhdHVzID09PSAncHJlc3NpbmcnKSB7XG4gICAgICBmaXJlRXZlbnQoZ2VzdHVyZS5lbGVtZW50LCAncHJlc3NlbmQnLCB7XG4gICAgICAgIHRvdWNoOiB0b3VjaCxcbiAgICAgICAgdG91Y2hFdmVudDogZXZlbnRcbiAgICAgIH0pXG4gICAgfVxuICAgIGRlbGV0ZSBnZXN0dXJlc1tpZF1cbiAgfVxuXG4gIGlmIChPYmplY3Qua2V5cyhnZXN0dXJlcykubGVuZ3RoID09PSAwKSB7XG4gICAgZG9jRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdG91Y2htb3ZlSGFuZGxlciwgZmFsc2UpXG4gICAgZG9jRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0b3VjaGVuZEhhbmRsZXIsIGZhbHNlKVxuICAgIGRvY0VsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdG91Y2hjYW5jZWxIYW5kbGVyLCBmYWxzZSlcbiAgfVxufVxuXG5pZiAoIWlzSW5pdGlhbGl6ZWQpIHtcbiAgZG9jRWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRvdWNoc3RhcnRIYW5kbGVyLCBmYWxzZSlcbiAgaXNJbml0aWFsaXplZCA9IHRydWVcbn1cblxuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuLy8gUHJvZHVjdGlvbiBzdGVwcyBvZiBFQ01BLTI2MiwgRWRpdGlvbiA2LCAyMi4xLjIuMVxuLy8gUmVmZXJlbmNlOiBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtYXJyYXkuZnJvbVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbmlmICghQXJyYXkuZnJvbSkge1xuICBBcnJheS5mcm9tID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG4gICAgdmFyIGlzQ2FsbGFibGUgPSBmdW5jdGlvbihmbikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyB8fCB0b1N0ci5jYWxsKGZuKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgICB9O1xuICAgIHZhciB0b0ludGVnZXIgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdmFyIG51bWJlciA9IE51bWJlcih2YWx1ZSk7XG4gICAgICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICAgIGlmIChudW1iZXIgPT09IDAgfHwgIWlzRmluaXRlKG51bWJlcikpIHtcbiAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiAobnVtYmVyID4gMCA/IDEgOiAtMSkgKiBNYXRoLmZsb29yKE1hdGguYWJzKG51bWJlcikpO1xuICAgIH07XG4gICAgdmFyIG1heFNhZmVJbnRlZ2VyID0gTWF0aC5wb3coMiwgNTMpIC0gMTtcbiAgICB2YXIgdG9MZW5ndGggPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdmFyIGxlbiA9IHRvSW50ZWdlcih2YWx1ZSk7XG4gICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobGVuLCAwKSwgbWF4U2FmZUludGVnZXIpO1xuICAgIH07XG5cbiAgICAvLyBUaGUgbGVuZ3RoIHByb3BlcnR5IG9mIHRoZSBmcm9tIG1ldGhvZCBpcyAxLlxuICAgIHJldHVybiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZS8qLCBtYXBGbiwgdGhpc0FyZyAqLykge1xuICAgICAgLy8gMS4gTGV0IEMgYmUgdGhlIHRoaXMgdmFsdWUuXG4gICAgICB2YXIgQyA9IHRoaXM7XG5cbiAgICAgIC8vIDIuIExldCBpdGVtcyBiZSBUb09iamVjdChhcnJheUxpa2UpLlxuICAgICAgdmFyIGl0ZW1zID0gT2JqZWN0KGFycmF5TGlrZSk7XG5cbiAgICAgIC8vIDMuIFJldHVybklmQWJydXB0KGl0ZW1zKS5cbiAgICAgIGlmIChhcnJheUxpa2UgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcnJheS5mcm9tIHJlcXVpcmVzIGFuIGFycmF5LWxpa2Ugb2JqZWN0IC0gbm90IG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIDQuIElmIG1hcGZuIGlzIHVuZGVmaW5lZCwgdGhlbiBsZXQgbWFwcGluZyBiZSBmYWxzZS5cbiAgICAgIHZhciBtYXBGbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdm9pZCB1bmRlZmluZWQ7XG4gICAgICB2YXIgVDtcbiAgICAgIGlmICh0eXBlb2YgbWFwRm4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIDUuIGVsc2VcbiAgICAgICAgLy8gNS4gYSBJZiBJc0NhbGxhYmxlKG1hcGZuKSBpcyBmYWxzZSwgdGhyb3cgYSBUeXBlRXJyb3IgZXhjZXB0aW9uLlxuICAgICAgICBpZiAoIWlzQ2FsbGFibGUobWFwRm4pKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJyYXkuZnJvbTogd2hlbiBwcm92aWRlZCwgdGhlIHNlY29uZCBhcmd1bWVudCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDUuIGIuIElmIHRoaXNBcmcgd2FzIHN1cHBsaWVkLCBsZXQgVCBiZSB0aGlzQXJnOyBlbHNlIGxldCBUIGJlIHVuZGVmaW5lZC5cbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgVCA9IGFyZ3VtZW50c1syXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyAxMC4gTGV0IGxlblZhbHVlIGJlIEdldChpdGVtcywgXCJsZW5ndGhcIikuXG4gICAgICAvLyAxMS4gTGV0IGxlbiBiZSBUb0xlbmd0aChsZW5WYWx1ZSkuXG4gICAgICB2YXIgbGVuID0gdG9MZW5ndGgoaXRlbXMubGVuZ3RoKTtcblxuICAgICAgLy8gMTMuIElmIElzQ29uc3RydWN0b3IoQykgaXMgdHJ1ZSwgdGhlblxuICAgICAgLy8gMTMuIGEuIExldCBBIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tDb25zdHJ1Y3RdXSBpbnRlcm5hbCBtZXRob2Qgb2YgQyB3aXRoIGFuIGFyZ3VtZW50IGxpc3QgY29udGFpbmluZyB0aGUgc2luZ2xlIGl0ZW0gbGVuLlxuICAgICAgLy8gMTQuIGEuIEVsc2UsIExldCBBIGJlIEFycmF5Q3JlYXRlKGxlbikuXG4gICAgICB2YXIgQSA9IGlzQ2FsbGFibGUoQykgPyBPYmplY3QobmV3IEMobGVuKSkgOiBuZXcgQXJyYXkobGVuKTtcblxuICAgICAgLy8gMTYuIExldCBrIGJlIDAuXG4gICAgICB2YXIgayA9IDA7XG4gICAgICAvLyAxNy4gUmVwZWF0LCB3aGlsZSBrIDwgbGVu4oCmIChhbHNvIHN0ZXBzIGEgLSBoKVxuICAgICAgdmFyIGtWYWx1ZTtcbiAgICAgIHdoaWxlIChrIDwgbGVuKSB7XG4gICAgICAgIGtWYWx1ZSA9IGl0ZW1zW2tdO1xuICAgICAgICBpZiAobWFwRm4pIHtcbiAgICAgICAgICBBW2tdID0gdHlwZW9mIFQgPT09ICd1bmRlZmluZWQnID8gbWFwRm4oa1ZhbHVlLCBrKSA6IG1hcEZuLmNhbGwoVCwga1ZhbHVlLCBrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBBW2tdID0ga1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGsgKz0gMTtcbiAgICAgIH1cbiAgICAgIC8vIDE4LiBMZXQgcHV0U3RhdHVzIGJlIFB1dChBLCBcImxlbmd0aFwiLCBsZW4sIHRydWUpLlxuICAgICAgQS5sZW5ndGggPSBsZW47XG4gICAgICAvLyAyMC4gUmV0dXJuIEEuXG4gICAgICByZXR1cm4gQTtcbiAgICB9O1xuICB9KCkpO1xufVxuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07IiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59OyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07IiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07IiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59OyIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59OyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59OyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgU1JDICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpXG4gICwgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJ1xuICAsICR0b1N0cmluZyA9IEZ1bmN0aW9uW1RPX1NUUklOR11cbiAgLCBUUEwgICAgICAgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbnJlcXVpcmUoJy4vX2NvcmUnKS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywga2V5LCB2YWwsIHNhZmUpe1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYoaXNGdW5jdGlvbiloYXModmFsLCAnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gIGlmKE9ba2V5XSA9PT0gdmFsKXJldHVybjtcbiAgaWYoaXNGdW5jdGlvbiloYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYoTyA9PT0gZ2xvYmFsKXtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaWYoIXNhZmUpe1xuICAgICAgZGVsZXRlIE9ba2V5XTtcbiAgICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihPW2tleV0pT1trZXldID0gdmFsO1xuICAgICAgZWxzZSBoaWRlKE8sIGtleSwgdmFsKTtcbiAgICB9XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59OyIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgcmVkZWZpbmUgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pXG4gICAgLCBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYodGFyZ2V0KXJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmKGV4cG9ydHNba2V5XSAhPSBvdXQpaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgaWYoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7IiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTsiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTsiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07IiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTsiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTsiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTsiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTsiLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7IiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07IiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sczsiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTsiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgJGFzc2lnbiAgPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsIGFMZW4gID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mXG4gICAgLCBpc0VudW0gICAgID0gcElFLmY7XG4gIHdoaWxlKGFMZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjsiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJyl9KTsiLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4vLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9XZWJSZWZsZWN0aW9uLzU1OTM1NTRcblxuLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5pZiAoIU9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICBPYmplY3Quc2V0UHJvdG90eXBlT2YgPSAoZnVuY3Rpb24oT2JqZWN0LCBtYWdpYykge1xuICAgIHZhciBzZXQ7XG4gICAgZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgIHNldC5jYWxsKE8sIHByb3RvKTtcbiAgICAgIHJldHVybiBPO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gdGhpcyB3b3JrcyBhbHJlYWR5IGluIEZpcmVmb3ggYW5kIFNhZmFyaVxuICAgICAgc2V0ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3QucHJvdG90eXBlLCBtYWdpYykuc2V0O1xuICAgICAgc2V0LmNhbGwoe30sIG51bGwpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgLy8gSUUgPCAxMSBjYW5ub3QgYmUgc2hpbW1lZFxuICAgICAgICBPYmplY3QucHJvdG90eXBlICE9PSB7fVttYWdpY10gfHxcbiAgICAgICAgLy8gbmVpdGhlciBjYW4gYW55IGJyb3dzZXIgdGhhdCBhY3R1YWxseVxuICAgICAgICAvLyBpbXBsZW1lbnRlZCBfX3Byb3RvX18gY29ycmVjdGx5XG4gICAgICAgIC8vIChhbGwgYnV0IG9sZCBWOCB3aWxsIHJldHVybiBoZXJlKVxuICAgICAgICB7X19wcm90b19fOiBudWxsfS5fX3Byb3RvX18gPT09IHZvaWQgMFxuICAgICAgICAvLyB0aGlzIGNhc2UgbWVhbnMgbnVsbCBvYmplY3RzIGNhbm5vdCBiZSBwYXNzZWRcbiAgICAgICAgLy8gdGhyb3VnaCBzZXRQcm90b3R5cGVPZiBpbiBhIHJlbGlhYmxlIHdheVxuICAgICAgICAvLyB3aGljaCBtZWFucyBoZXJlIGEgKipTaGFtKiogaXMgbmVlZGVkIGluc3RlYWRcbiAgICAgICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBub2RlanMgMC44IGFuZCAwLjEwIGFyZSAoYnVnZ3kgYW5kLi4pIGZpbmUgaGVyZVxuICAgICAgLy8gcHJvYmFibHkgQ2hyb21lIG9yIHNvbWUgb2xkIE1vYmlsZSBzdG9jayBicm93c2VyXG4gICAgICBzZXQgPSBmdW5jdGlvbihwcm90bykge1xuICAgICAgICB0aGlzW21hZ2ljXSA9IHByb3RvO1xuICAgICAgfTtcbiAgICAgIC8vIHBsZWFzZSBub3RlIHRoYXQgdGhpcyB3aWxsICoqbm90Kiogd29ya1xuICAgICAgLy8gaW4gdGhvc2UgYnJvd3NlcnMgdGhhdCBkbyBub3QgaW5oZXJpdFxuICAgICAgLy8gX19wcm90b19fIGJ5IG1pc3Rha2UgZnJvbSBPYmplY3QucHJvdG90eXBlXG4gICAgICAvLyBpbiB0aGVzZSBjYXNlcyB3ZSBzaG91bGQgcHJvYmFibHkgdGhyb3cgYW4gZXJyb3JcbiAgICAgIC8vIG9yIGF0IGxlYXN0IGJlIGluZm9ybWVkIGFib3V0IHRoZSBpc3N1ZVxuICAgICAgc2V0UHJvdG90eXBlT2YucG9seWZpbGwgPSBzZXRQcm90b3R5cGVPZihcbiAgICAgICAgc2V0UHJvdG90eXBlT2Yoe30sIG51bGwpLFxuICAgICAgICBPYmplY3QucHJvdG90eXBlXG4gICAgICApIGluc3RhbmNlb2YgT2JqZWN0O1xuICAgICAgLy8gc2V0UHJvdG90eXBlT2YucG9seWZpbGwgPT09IHRydWUgbWVhbnMgaXQgd29ya3MgYXMgbWVhbnRcbiAgICAgIC8vIHNldFByb3RvdHlwZU9mLnBvbHlmaWxsID09PSBmYWxzZSBtZWFucyBpdCdzIG5vdCAxMDAlIHJlbGlhYmxlXG4gICAgICAvLyBzZXRQcm90b3R5cGVPZi5wb2x5ZmlsbCA9PT0gdW5kZWZpbmVkXG4gICAgICAvLyBvclxuICAgICAgLy8gc2V0UHJvdG90eXBlT2YucG9seWZpbGwgPT0gIG51bGwgbWVhbnMgaXQncyBub3QgYSBwb2x5ZmlsbFxuICAgICAgLy8gd2hpY2ggbWVhbnMgaXQgd29ya3MgYXMgZXhwZWN0ZWRcbiAgICAgIC8vIHdlIGNhbiBldmVuIGRlbGV0ZSBPYmplY3QucHJvdG90eXBlLl9fcHJvdG9fXztcbiAgICB9XG4gICAgcmV0dXJuIHNldFByb3RvdHlwZU9mO1xuICB9KE9iamVjdCwgJ19fcHJvdG9fXycpKTtcbn1cbiIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlOyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIHRlc3QgICAgPSB7fTtcbnRlc3RbcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyldID0gJ3onO1xuaWYodGVzdCArICcnICE9ICdbb2JqZWN0IHpdJyl7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoT2JqZWN0LnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG4gIH0sIHRydWUpO1xufSIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7IiwibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBkUHMgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcbiAgICAsIGx0ICAgICA9ICc8J1xuICAgICwgZ3QgICAgID0gJz4nXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xuICB2YXIgcmVzdWx0O1xuICBpZihPICE9PSBudWxsKXtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTsiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pOyIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpXG4gICwgQXJyYXlQcm90byAgPSBBcnJheS5wcm90b3R5cGU7XG5pZihBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpcmVxdWlyZSgnLi9faGlkZScpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7IiwidmFyICRpdGVyYXRvcnMgICAgPSByZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpXG4gICwgcmVkZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgd2tzICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgSVRFUkFUT1IgICAgICA9IHdrcygnaXRlcmF0b3InKVxuICAsIFRPX1NUUklOR19UQUcgPSB3a3MoJ3RvU3RyaW5nVGFnJylcbiAgLCBBcnJheVZhbHVlcyAgID0gSXRlcmF0b3JzLkFycmF5O1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGVcbiAgICAsIGtleTtcbiAgaWYocHJvdG8pe1xuICAgIGlmKCFwcm90b1tJVEVSQVRPUl0paGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICBpZighcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gICAgSXRlcmF0b3JzW05BTUVdID0gQXJyYXlWYWx1ZXM7XG4gICAgZm9yKGtleSBpbiAkaXRlcmF0b3JzKWlmKCFwcm90b1trZXldKXJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSl7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59OyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59OyIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07IiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07IiwidmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKVxuICAsIEJSRUFLICAgICAgID0ge31cbiAgLCBSRVRVUk4gICAgICA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1Ipe1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbigpeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpXG4gICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYoaXNBcnJheUl0ZXIoaXRlckZuKSlmb3IobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLICA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47IiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBTUEVDSUVTICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBEKXtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvciwgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTsiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIGFyZ3MsIHRoYXQpe1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaChhcmdzLmxlbmd0aCl7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07IiwidmFyIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaW52b2tlICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faW52b2tlJylcbiAgLCBodG1sICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19odG1sJylcbiAgLCBjZWwgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgc2V0VGFzayAgICAgICAgICAgID0gZ2xvYmFsLnNldEltbWVkaWF0ZVxuICAsIGNsZWFyVGFzayAgICAgICAgICA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZVxuICAsIE1lc3NhZ2VDaGFubmVsICAgICA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbFxuICAsIGNvdW50ZXIgICAgICAgICAgICA9IDBcbiAgLCBxdWV1ZSAgICAgICAgICAgICAgPSB7fVxuICAsIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnXG4gICwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24oKXtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIGlmKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSl7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYoIXNldFRhc2sgfHwgIWNsZWFyVGFzayl7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pe1xuICAgIHZhciBhcmdzID0gW10sIGkgPSAxO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpe1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZihyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcycpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmKE1lc3NhZ2VDaGFubmVsKXtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsO1xuICAgIHBvcnQgICAgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZihPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpe1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogICBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59OyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBPYnNlcnZlciAgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuICAsIHByb2Nlc3MgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgUHJvbWlzZSAgID0gZ2xvYmFsLlByb21pc2VcbiAgLCBpc05vZGUgICAgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbigpe1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUoaGVhZCl7XG4gICAgICBmbiAgID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgaWYoaGVhZClub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZihwYXJlbnQpcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZihpc05vZGUpe1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZVxuICAgICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihmbil7XG4gICAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWR9O1xuICAgIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZighaGVhZCl7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59OyIsInZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjLCBzYWZlKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSwgc2FmZSk7XG4gIHJldHVybiB0YXJnZXQ7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTsiLCJ2YXIgSVRFUkFUT1IgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZyl7XG4gIGlmKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHJldHVybiB7ZG9uZTogc2FmZSA9IHRydWV9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2xhc3NvZiAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgJGV4cG9ydCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBpc09iamVjdCAgICAgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIGFuSW5zdGFuY2UgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBmb3JPZiAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKVxuICAsIHRhc2sgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBtaWNyb3Rhc2sgICAgICAgICAgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpXG4gICwgUFJPTUlTRSAgICAgICAgICAgID0gJ1Byb21pc2UnXG4gICwgVHlwZUVycm9yICAgICAgICAgID0gZ2xvYmFsLlR5cGVFcnJvclxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgJFByb21pc2UgICAgICAgICAgID0gZ2xvYmFsW1BST01JU0VdXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBpc05vZGUgICAgICAgICAgICAgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJ1xuICAsIGVtcHR5ICAgICAgICAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBJbnRlcm5hbCwgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24oKXtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSAgICAgPSAkUHJvbWlzZS5yZXNvbHZlKDEpXG4gICAgICAsIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbihleGVjKXsgZXhlYyhlbXB0eSwgZW1wdHkpOyB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgc2FtZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24oYSwgYil7XG4gIC8vIHdpdGggbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuICByZXR1cm4gYSA9PT0gYiB8fCBhID09PSAkUHJvbWlzZSAmJiBiID09PSBXcmFwcGVyO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICByZXR1cm4gc2FtZUNvbnN0cnVjdG9yKCRQcm9taXNlLCBDKVxuICAgID8gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgOiBuZXcgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbigkJHJlc29sdmUsICQkcmVqZWN0KXtcbiAgICBpZihyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ICA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCAgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn07XG52YXIgcGVyZm9ybSA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIGV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4ge2Vycm9yOiBlfTtcbiAgfVxufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbihwcm9taXNlLCBpc1JlamVjdCl7XG4gIGlmKHByb21pc2UuX24pcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBvayAgICA9IHByb21pc2UuX3MgPT0gMVxuICAgICAgLCBpICAgICA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uKHJlYWN0aW9uKXtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWxcbiAgICAgICAgLCByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZVxuICAgICAgICAsIHJlamVjdCAgPSByZWFjdGlvbi5yZWplY3RcbiAgICAgICAgLCBkb21haW4gID0gcmVhY3Rpb24uZG9tYWluXG4gICAgICAgICwgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYoaGFuZGxlcil7XG4gICAgICAgICAgaWYoIW9rKXtcbiAgICAgICAgICAgIGlmKHByb21pc2UuX2ggPT0gMilvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihoYW5kbGVyID09PSB0cnVlKXJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKXtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpe1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgYWJydXB0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmKGlzVW5oYW5kbGVkKHByb21pc2UpKXtcbiAgICAgIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoaXNOb2RlKXtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pe1xuICAgICAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWV9KTtcbiAgICAgICAgfSBlbHNlIGlmKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3Ipe1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZihhYnJ1cHQpdGhyb3cgYWJydXB0LmVycm9yO1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgaWYocHJvbWlzZS5faCA9PSAxKXJldHVybiBmYWxzZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jXG4gICAgLCBpICAgICA9IDBcbiAgICAsIHJlYWN0aW9uO1xuICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXtcbiAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG4gICAgaWYocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmKGlzTm9kZSl7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpe1xuICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92fSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZighcHJvbWlzZS5fYSlwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXNcbiAgICAsIHRoZW47XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYocHJvbWlzZSA9PT0gdmFsdWUpdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKXtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgICAgICB2YXIgd3JhcHBlciA9IHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoKGUpe1xuICAgICRyZWplY3QuY2FsbCh7X3c6IHByb21pc2UsIF9kOiBmYWxzZX0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZighVVNFX05BVElWRSl7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2goZXJyKXtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpe1xuICAgICAgdmFyIHJlYWN0aW9uICAgID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayAgICAgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgICA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX2EpdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX3Mpbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGVkKXtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHByb21pc2UgID0gbmV3IEludGVybmFsO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCAgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtQcm9taXNlOiAkUHJvbWlzZX0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKXtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVqZWN0ICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpe1xuICAgIC8vIGluc3RhbmNlb2YgaW5zdGVhZCBvZiBpbnRlcm5hbCBzbG90IGNoZWNrIGJlY2F1c2Ugd2Ugc2hvdWxkIGZpeCBpdCB3aXRob3V0IHJlcGxhY2VtZW50IG5hdGl2ZSBQcm9taXNlIGNvcmVcbiAgICBpZih4IGluc3RhbmNlb2YgJFByb21pc2UgJiYgc2FtZUNvbnN0cnVjdG9yKHguY29uc3RydWN0b3IsIHRoaXMpKXJldHVybiB4O1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZXNvbHZlICA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICAkJHJlc29sdmUoeCk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpe1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZXNvbHZlICAgID0gY2FwYWJpbGl0eS5yZXNvbHZlXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgdmFyIHZhbHVlcyAgICA9IFtdXG4gICAgICAgICwgaW5kZXggICAgID0gMFxuICAgICAgICAsIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICB2YXIgJGluZGV4ICAgICAgICA9IGluZGV4KytcbiAgICAgICAgICAsIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICBpZihhbHJlYWR5Q2FsbGVkKXJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkICA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pOyIsImNvbnN0IERFRkFVTFRfVklFV1BPUlRfV0lEVEggPSA3NTBcblxuZnVuY3Rpb24gcGFyc2VWaWV3cG9ydFdpZHRoIChjb25maWcpIHtcbiAgbGV0IHdpZHRoID0gREVGQVVMVF9WSUVXUE9SVF9XSURUSFxuICBpZiAoY29uZmlnICYmIGNvbmZpZy53aWR0aCkge1xuICAgIHdpZHRoID0gTnVtYmVyKGNvbmZpZy53aWR0aCkgfHwgY29uZmlnLndpZHRoXG4gIH1cbiAgcmV0dXJuIHdpZHRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRWaWV3cG9ydCAoY29uZmlnID0ge30pIHtcbiAgY29uc3QgZG9jID0gd2luZG93LmRvY3VtZW50XG5cbiAgaWYgKGRvYykge1xuICAgIGNvbnN0IHZpZXdwb3J0V2lkdGggPSBwYXJzZVZpZXdwb3J0V2lkdGgoY29uZmlnKVxuXG4gICAgLy8gc2V0IHJvb3QgZm9udC1zaXplXG4gICAgZG9jLmRvY3VtZW50RWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IHZpZXdwb3J0V2lkdGggLyAxMCArICdweCdcblxuICAgIGNvbnN0IHNjcmVlbldpZHRoID0gd2luZG93LnNjcmVlbi53aWR0aFxuICAgIGNvbnN0IHNjYWxlID0gc2NyZWVuV2lkdGggLyB2aWV3cG9ydFdpZHRoXG4gICAgY29uc3QgY29udGVudHMgPSBbXG4gICAgICBgd2lkdGg9JHt2aWV3cG9ydFdpZHRofWAsXG4gICAgICBgaW5pdGlhbC1zY2FsZT0ke3NjYWxlfWAsXG4gICAgICBgbWF4aW11bS1zY2FsZT0ke3NjYWxlfWAsXG4gICAgICBgbWluaW11bS1zY2FsZT0ke3NjYWxlfWAsXG4gICAgICBgdXNlci1zY2FsYWJsZT1ub2BcbiAgICBdXG5cbiAgICBsZXQgbWV0YSA9IGRvYy5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ2aWV3cG9ydFwiXScpXG4gICAgaWYgKCFtZXRhKSB7XG4gICAgICBtZXRhID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ21ldGEnKVxuICAgICAgbWV0YS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndmlld3BvcnQnKVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpLmFwcGVuZENoaWxkKG1ldGEpXG4gICAgfVxuXG4gICAgbWV0YS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCBjb250ZW50cy5qb2luKCcsJykpXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBldmVudCA9IHtcbiAgLyoqXG4gICAqIG9wZW5VcmxcbiAgICogQHBhcmFtICB7c3RyaW5nfSB1cmxcbiAgICovXG4gIG9wZW5VUkw6IGZ1bmN0aW9uICh1cmwpIHtcbiAgICBsb2NhdGlvbi5ocmVmID0gdXJsXG4gIH1cblxufVxuXG5jb25zdCBtZXRhID0ge1xuICBldmVudDogW3tcbiAgICBuYW1lOiAnb3BlblVSTCcsXG4gICAgYXJnczogWydzdHJpbmcnXVxuICB9XVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGZ1bmN0aW9uIChXZWV4KSB7XG4gICAgV2VleC5yZWdpc3RlckFwaU1vZHVsZSgnZXZlbnQnLCBldmVudCwgbWV0YSlcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHN1cHBvcnRHZW9sb2NhdGlvbiA9ICdnZW9sb2NhdGlvbicgaW4gbmF2aWdhdG9yXG5jb25zdCBlcnJvck1zZyA9IGBbaDUtcmVuZGVyXTogYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgZ2VvbG9jYXRpb24uYFxuXG5jb25zdCBnZW9sb2NhdGlvbiA9IHtcbiAgLy8gb3B0aW9uczpcbiAgLy8gICAtIGVuYWJsZUhpZ2hBY2N1cmFjeSBvcHRpb25hbCwgdmFsdWUgaXMgdHJ1ZSBvciBmYWxzZSwgZmFsc2UgYnkgZGVmYXVsdC5cbiAgLy8gICAtIHRpbWVvdXQgW25vbmUtbmF0aXZlXSBvcHRpb25hbCwgdmFsdWUgaXMgYSBudW1iZXIgKG1pbGxpc2Vjb25kcyksIGRlZmF1bHQgdmF1bGUgaXMgRklORklOSVRZLlxuICAvLyAgIC0gbWF4aW11bUFnZSBbbm9uZS1uYXRpdmVdIG9wdGlvbmFsLCB2YWx1ZSBpcyBhIG51bWJlciAobWlsbGlzZWNvbmRzKSwgZGVmYXVsdCB2YWx1ZSBpcyAwLlxuICBnZXRDdXJyZW50UG9zaXRpb24gKHN1Y2Nlc3NDYklkLCBlcnJvckNiSWQsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBzdWNjZXNzQ2IgPSBwb3MgPT4gdGhpcy5zZW5kZXIucGVyZm9ybUNhbGxiYWNrKHN1Y2Nlc3NDYklkLCBwb3MpXG4gICAgY29uc3QgZXJyb3JDYiA9IGVyciA9PiB0aGlzLnNlbmRlci5wZXJmb3JtQ2FsbGJhY2soZXJyb3JDYklkLCBlcnIpXG4gICAgaWYgKHN1cHBvcnRHZW9sb2NhdGlvbikge1xuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihzdWNjZXNzQ2IsIGVycm9yQ2IsIG9wdGlvbnMpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKGVycm9yTXNnKVxuICAgICAgZXJyb3JDYihuZXcgRXJyb3IoZXJyb3JNc2cpKVxuICAgIH1cbiAgfSxcblxuICAvLyBvcHRpb25zOiB0aGUgc2FtZSB3aXRoIGBnZXRDdXJyZW50UG9zaXRpb25gLlxuICB3YXRjaFBvc2l0aW9uIChzdWNjZXNzQ2JJZCwgZXJyb3JDYklkLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgc3VjY2Vzc0NiID0gcG9zID0+IHRoaXMuc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhzdWNjZXNzQ2JJZCwgcG9zLCB0cnVlKVxuICAgIGNvbnN0IGVycm9yQ2IgPSBlcnIgPT4gdGhpcy5zZW5kZXIucGVyZm9ybUNhbGxiYWNrKGVycm9yQ2JJZCwgZXJyKVxuICAgIGlmIChzdXBwb3J0R2VvbG9jYXRpb24pIHtcbiAgICAgIGNvbnN0IGlkID0gbmF2aWdhdG9yLmdlb2xvY2F0aW9uLndhdGNoUG9zaXRpb24ocG9zID0+IHtcbiAgICAgICAgcG9zLndhdGNoSWQgPSBpZFxuICAgICAgICBzdWNjZXNzQ2IocG9zKVxuICAgICAgfSwgZXJyb3JDYiwgb3B0aW9ucylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oZXJyb3JNc2cpXG4gICAgICBlcnJvckNiKG5ldyBFcnJvcihlcnJvck1zZykpXG4gICAgfVxuICB9LFxuXG4gIGNsZWFyV2F0Y2ggKHdhdGNoSWQpIHtcbiAgICBpZiAoc3VwcG9ydEdlb2xvY2F0aW9uKSB7XG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uY2xlYXJXYXRjaCh3YXRjaElkKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybihlcnJvck1zZylcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgbWV0YSA9IHtcbiAgZ2VvbG9jYXRpb246IFt7XG4gICAgbmFtZTogJ2dldEN1cnJlbnRQb3NpdGlvbicsXG4gICAgYXJnczogWydmdW5jdGlvbicsICdmdW5jdGlvbicsICdvYmplY3QnXVxuICB9LCB7XG4gICAgbmFtZTogJ3dhdGNoUG9zaXRpb24nLFxuICAgIGFyZ3M6IFsnZnVuY3Rpb24nLCAnZnVuY3Rpb24nLCAnb2JqZWN0J11cbiAgfSwge1xuICAgIG5hbWU6ICdjbGVhcldhdGNoJyxcbiAgICBhcmdzOiBbJ3N0cmluZyddXG4gIH1dXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdCAoV2VleCkge1xuICAgIFdlZXgucmVnaXN0ZXJBcGlNb2R1bGUoJ2dlb2xvY2F0aW9uJywgZ2VvbG9jYXRpb24sIG1ldGEpXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBwYWdlSW5mbyA9IHtcblxuICBzZXRUaXRsZTogZnVuY3Rpb24gKHRpdGxlKSB7XG4gICAgdGl0bGUgPSB0aXRsZSB8fCAnV2VleCBIVE1MNSdcbiAgICB0cnkge1xuICAgICAgdGl0bGUgPSBkZWNvZGVVUklDb21wb25lbnQodGl0bGUpXG4gICAgfVxuICAgIGNhdGNoIChlKSB7fVxuICAgIGRvY3VtZW50LnRpdGxlID0gdGl0bGVcbiAgfVxufVxuXG5jb25zdCBtZXRhID0ge1xuICBwYWdlSW5mbzogW3tcbiAgICBuYW1lOiAnc2V0VGl0bGUnLFxuICAgIGFyZ3M6IFsnc3RyaW5nJ11cbiAgfV1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBmdW5jdGlvbiAoV2VleCkge1xuICAgIFdlZXgucmVnaXN0ZXJBcGlNb2R1bGUoJ3BhZ2VJbmZvJywgcGFnZUluZm8sIG1ldGEpXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBsb2NhbFN0b3JhZ2UgKi9cbid1c2Ugc3RyaWN0J1xuXG5jb25zdCBzdXBwb3J0TG9jYWxTdG9yYWdlID0gdHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCdcbmNvbnN0IFNVQ0NFU1MgPSAnc3VjY2VzcydcbmNvbnN0IEZBSUxFRCA9ICdmYWlsZWQnXG5jb25zdCBJTlZBTElEX1BBUkFNID0gJ2ludmFsaWRfcGFyYW0nXG5jb25zdCBVTkRFRklORUQgPSAndW5kZWZpbmVkJ1xuXG5jb25zdCBzdG9yYWdlID0ge1xuXG4gIC8qKlxuICAgKiBXaGVuIHBhc3NlZCBhIGtleSBuYW1lIGFuZCB2YWx1ZSwgd2lsbCBhZGQgdGhhdCBrZXkgdG8gdGhlIHN0b3JhZ2UsXG4gICAqIG9yIHVwZGF0ZSB0aGF0IGtleSdzIHZhbHVlIGlmIGl0IGFscmVhZHkgZXhpc3RzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja0lkXG4gICAqL1xuICBzZXRJdGVtOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgY2FsbGJhY2tJZCkge1xuICAgIGlmICghc3VwcG9ydExvY2FsU3RvcmFnZSkge1xuICAgICAgY29uc29sZS5lcnJvcigneW91ciBicm93c2VyIGlzIG5vdCBzdXBwb3J0IGxvY2FsU3RvcmFnZSB5ZXQuJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBzZW5kZXIgPSB0aGlzLnNlbmRlclxuICAgIGlmICgha2V5IHx8ICF2YWx1ZSkge1xuICAgICAgc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhjYWxsYmFja0lkLCB7XG4gICAgICAgIHJlc3VsdDogJ2ZhaWxlZCcsXG4gICAgICAgIGRhdGE6IElOVkFMSURfUEFSQU1cbiAgICAgIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpXG4gICAgICBzZW5kZXIucGVyZm9ybUNhbGxiYWNrKGNhbGxiYWNrSWQsIHtcbiAgICAgICAgcmVzdWx0OiBTVUNDRVNTLFxuICAgICAgICBkYXRhOiBVTkRFRklORURcbiAgICAgIH0pXG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAvLyBhY2NlcHQgYW55IGV4Y2VwdGlvbiB0aHJvd24gZHVyaW5nIGEgc3RvcmFnZSBhdHRlbXB0IGFzIGEgcXVvdGEgZXJyb3JcbiAgICAgIHNlbmRlci5wZXJmb3JtQ2FsbGJhY2soY2FsbGJhY2tJZCwge1xuICAgICAgICByZXN1bHQ6IEZBSUxFRCxcbiAgICAgICAgZGF0YTogVU5ERUZJTkVEXG4gICAgICB9KVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogV2hlbiBwYXNzZWQgYSBrZXkgbmFtZSwgd2lsbCByZXR1cm4gdGhhdCBrZXkncyB2YWx1ZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja0lkXG4gICAqL1xuICBnZXRJdGVtOiBmdW5jdGlvbiAoa2V5LCBjYWxsYmFja0lkKSB7XG4gICAgaWYgKCFzdXBwb3J0TG9jYWxTdG9yYWdlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCd5b3VyIGJyb3dzZXIgaXMgbm90IHN1cHBvcnQgbG9jYWxTdG9yYWdlIHlldC4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHNlbmRlciA9IHRoaXMuc2VuZGVyXG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIHNlbmRlci5wZXJmb3JtQ2FsbGJhY2soY2FsbGJhY2tJZCwge1xuICAgICAgICByZXN1bHQ6IEZBSUxFRCxcbiAgICAgICAgZGF0YTogSU5WQUxJRF9QQVJBTVxuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCB2YWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpXG4gICAgc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhjYWxsYmFja0lkLCB7XG4gICAgICByZXN1bHQ6IHZhbCA/IFNVQ0NFU1MgOiBGQUlMRUQsXG4gICAgICBkYXRhOiB2YWwgfHwgVU5ERUZJTkVEXG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICpXaGVuIHBhc3NlZCBhIGtleSBuYW1lLCB3aWxsIHJlbW92ZSB0aGF0IGtleSBmcm9tIHRoZSBzdG9yYWdlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrSWRcbiAgICovXG4gIHJlbW92ZUl0ZW06IGZ1bmN0aW9uIChrZXksIGNhbGxiYWNrSWQpIHtcbiAgICBpZiAoIXN1cHBvcnRMb2NhbFN0b3JhZ2UpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3lvdXIgYnJvd3NlciBpcyBub3Qgc3VwcG9ydCBsb2NhbFN0b3JhZ2UgeWV0LicpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3Qgc2VuZGVyID0gdGhpcy5zZW5kZXJcbiAgICBpZiAoIWtleSkge1xuICAgICAgc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhjYWxsYmFja0lkLCB7XG4gICAgICAgIHJlc3VsdDogRkFJTEVELFxuICAgICAgICBkYXRhOiBJTlZBTElEX1BBUkFNXG4gICAgICB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSlcbiAgICBzZW5kZXIucGVyZm9ybUNhbGxiYWNrKGNhbGxiYWNrSWQsIHtcbiAgICAgIHJlc3VsdDogU1VDQ0VTUyxcbiAgICAgIGRhdGE6IFVOREVGSU5FRFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gaW50ZWdlciByZXByZXNlbnRpbmcgdGhlIG51bWJlciBvZiBkYXRhIGl0ZW1zIHN0b3JlZCBpbiB0aGUgU3RvcmFnZSBvYmplY3QuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrSWRcbiAgICovXG4gIGxlbmd0aDogZnVuY3Rpb24gKGNhbGxiYWNrSWQpIHtcbiAgICBpZiAoIXN1cHBvcnRMb2NhbFN0b3JhZ2UpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3lvdXIgYnJvd3NlciBpcyBub3Qgc3VwcG9ydCBsb2NhbFN0b3JhZ2UgeWV0LicpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3Qgc2VuZGVyID0gdGhpcy5zZW5kZXJcbiAgICBjb25zdCBsZW4gPSBsb2NhbFN0b3JhZ2UubGVuZ3RoXG4gICAgc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhjYWxsYmFja0lkLCB7XG4gICAgICByZXN1bHQ6IFNVQ0NFU1MsXG4gICAgICBkYXRhOiBsZW5cbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IHRoYXQgY29udGFpbnMgYWxsIGtleXMgc3RvcmVkIGluIFN0b3JhZ2Ugb2JqZWN0LlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja0lkXG4gICAqL1xuICBnZXRBbGxLZXlzOiBmdW5jdGlvbiAoY2FsbGJhY2tJZCkge1xuICAgIGlmICghc3VwcG9ydExvY2FsU3RvcmFnZSkge1xuICAgICAgY29uc29sZS5lcnJvcigneW91ciBicm93c2VyIGlzIG5vdCBzdXBwb3J0IGxvY2FsU3RvcmFnZSB5ZXQuJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBzZW5kZXIgPSB0aGlzLnNlbmRlclxuICAgIGNvbnN0IF9hcnIgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBfYXJyLnB1c2gobG9jYWxTdG9yYWdlLmtleShpKSlcbiAgICB9XG4gICAgc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhjYWxsYmFja0lkLCB7XG4gICAgICByZXN1bHQ6IFNVQ0NFU1MsXG4gICAgICBkYXRhOiBfYXJyXG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCBtZXRhID0ge1xuICBzdG9yYWdlOiBbe1xuICAgIG5hbWU6ICdzZXRJdGVtJyxcbiAgICBhcmdzOiBbJ3N0cmluZycsICdzdHJpbmcnLCAnZnVuY3Rpb24nXVxuICB9LCB7XG4gICAgbmFtZTogJ2dldEl0ZW0nLFxuICAgIGFyZ3M6IFsnc3RyaW5nJywgJ2Z1bmN0aW9uJ11cbiAgfSwge1xuICAgIG5hbWU6ICdyZW1vdmVJdGVtJyxcbiAgICBhcmdzOiBbJ3N0cmluZycsICdmdW5jdGlvbiddXG4gIH0sIHtcbiAgICBuYW1lOiAnbGVuZ3RoJyxcbiAgICBhcmdzOiBbJ2Z1bmN0aW9uJ11cbiAgfSwge1xuICAgIG5hbWU6ICdnZXRBbGxLZXlzJyxcbiAgICBhcmdzOiBbJ2Z1bmN0aW9uJ11cbiAgfV1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBmdW5jdGlvbiAoV2VleCkge1xuICAgIFdlZXgucmVnaXN0ZXJBcGlNb2R1bGUoJ3N0b3JhZ2UnLCBzdG9yYWdlLCBtZXRhKVxuICB9XG59XG4iLCIodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpICYmICh3aW5kb3cgPSB7Y3RybDoge30sIGxpYjoge319KTshd2luZG93LmN0cmwgJiYgKHdpbmRvdy5jdHJsID0ge30pOyF3aW5kb3cubGliICYmICh3aW5kb3cubGliID0ge30pOyFmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoYSl7dmFyIGI9e307T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJwYXJhbXNcIix7c2V0OmZ1bmN0aW9uKGEpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBhKXtmb3IodmFyIGMgaW4gYilkZWxldGUgYltjXTtmb3IodmFyIGMgaW4gYSliW2NdPWFbY119fSxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYn0sZW51bWVyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwic2VhcmNoXCIse3NldDpmdW5jdGlvbihhKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYSl7MD09PWEuaW5kZXhPZihcIj9cIikmJihhPWEuc3Vic3RyKDEpKTt2YXIgYz1hLnNwbGl0KFwiJlwiKTtmb3IodmFyIGQgaW4gYilkZWxldGUgYltkXTtmb3IodmFyIGU9MDtlPGMubGVuZ3RoO2UrKyl7dmFyIGY9Y1tlXS5zcGxpdChcIj1cIik7aWYodm9pZCAwIT09ZlsxXSYmKGZbMV09ZlsxXS50b1N0cmluZygpKSxmWzBdKXRyeXtiW2RlY29kZVVSSUNvbXBvbmVudChmWzBdKV09ZGVjb2RlVVJJQ29tcG9uZW50KGZbMV0pfWNhdGNoKGcpe2JbZlswXV09ZlsxXX19fX0sZ2V0OmZ1bmN0aW9uKCl7dmFyIGE9W107Zm9yKHZhciBjIGluIGIpaWYodm9pZCAwIT09YltjXSlpZihcIlwiIT09YltjXSl0cnl7YS5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChjKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQoYltjXSkpfWNhdGNoKGQpe2EucHVzaChjK1wiPVwiK2JbY10pfWVsc2UgdHJ5e2EucHVzaChlbmNvZGVVUklDb21wb25lbnQoYykpfWNhdGNoKGQpe2EucHVzaChjKX1yZXR1cm4gYS5sZW5ndGg/XCI/XCIrYS5qb2luKFwiJlwiKTpcIlwifSxlbnVtZXJhYmxlOiEwfSk7dmFyIGM7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJoYXNoXCIse3NldDpmdW5jdGlvbihhKXtcInN0cmluZ1wiPT10eXBlb2YgYSYmKGEmJmEuaW5kZXhPZihcIiNcIik8MCYmKGE9XCIjXCIrYSksYz1hfHxcIlwiKX0sZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGN9LGVudW1lcmFibGU6ITB9KSx0aGlzLnNldD1mdW5jdGlvbihhKXthPWF8fFwiXCI7dmFyIGI7aWYoIShiPWEubWF0Y2gobmV3IFJlZ0V4cChcIl4oW2EtejAtOS1dKzopP1svXXsyfSg/OihbXkAvOj9dKykoPzo6KFteQC86XSspKT9AKT8oW146Lz8jXSspKD86WzpdKFswLTldKykpPyhbL11bXj8jO10qKT8oPzpbP10oW14jXSopKT8oWyNdW14/XSopPyRcIixcImlcIikpKSl0aHJvdyBuZXcgRXJyb3IoXCJXcm9uZyB1cmkgc2NoZW1lLlwiKTt0aGlzLnByb3RvY29sPWJbMV18fChcIm9iamVjdFwiPT10eXBlb2YgbG9jYXRpb24/bG9jYXRpb24ucHJvdG9jb2w6XCJcIiksdGhpcy51c2VybmFtZT1iWzJdfHxcIlwiLHRoaXMucGFzc3dvcmQ9YlszXXx8XCJcIix0aGlzLmhvc3RuYW1lPXRoaXMuaG9zdD1iWzRdLHRoaXMucG9ydD1iWzVdfHxcIlwiLHRoaXMucGF0aG5hbWU9Yls2XXx8XCIvXCIsdGhpcy5zZWFyY2g9Yls3XXx8XCJcIix0aGlzLmhhc2g9Yls4XXx8XCJcIix0aGlzLm9yaWdpbj10aGlzLnByb3RvY29sK1wiLy9cIit0aGlzLmhvc3RuYW1lfSx0aGlzLnRvU3RyaW5nPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5wcm90b2NvbCtcIi8vXCI7cmV0dXJuIHRoaXMudXNlcm5hbWUmJihhKz10aGlzLnVzZXJuYW1lLHRoaXMucGFzc3dvcmQmJihhKz1cIjpcIit0aGlzLnBhc3N3b3JkKSxhKz1cIkBcIiksYSs9dGhpcy5ob3N0LHRoaXMucG9ydCYmXCI4MFwiIT09dGhpcy5wb3J0JiYoYSs9XCI6XCIrdGhpcy5wb3J0KSx0aGlzLnBhdGhuYW1lJiYoYSs9dGhpcy5wYXRobmFtZSksdGhpcy5zZWFyY2gmJihhKz10aGlzLnNlYXJjaCksdGhpcy5oYXNoJiYoYSs9dGhpcy5oYXNoKSxhfSxhJiZ0aGlzLnNldChhLnRvU3RyaW5nKCkpfWIuaHR0cHVybD1mdW5jdGlvbihhKXtyZXR1cm4gbmV3IGMoYSl9fSh3aW5kb3csd2luZG93LmxpYnx8KHdpbmRvdy5saWI9e30pKTs7bW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cubGliWydodHRwdXJsJ107IiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyKSB7XG5cdHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC9bIScoKSpdL2csIGZ1bmN0aW9uIChjKSB7XG5cdFx0cmV0dXJuICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0fSk7XG59O1xuIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBzdHJpY3RVcmlFbmNvZGUgPSByZXF1aXJlKCdzdHJpY3QtdXJpLWVuY29kZScpO1xudmFyIG9iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuZnVuY3Rpb24gZW5jb2RlckZvckFycmF5Rm9ybWF0KG9wdHMpIHtcblx0c3dpdGNoIChvcHRzLmFycmF5Rm9ybWF0KSB7XG5cdFx0Y2FzZSAnaW5kZXgnOlxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlLCBpbmRleCkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPT09IG51bGwgPyBbXG5cdFx0XHRcdFx0ZW5jb2RlKGtleSwgb3B0cyksXG5cdFx0XHRcdFx0J1snLFxuXHRcdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRcdCddJ1xuXHRcdFx0XHRdLmpvaW4oJycpIDogW1xuXHRcdFx0XHRcdGVuY29kZShrZXksIG9wdHMpLFxuXHRcdFx0XHRcdCdbJyxcblx0XHRcdFx0XHRlbmNvZGUoaW5kZXgsIG9wdHMpLFxuXHRcdFx0XHRcdCddPScsXG5cdFx0XHRcdFx0ZW5jb2RlKHZhbHVlLCBvcHRzKVxuXHRcdFx0XHRdLmpvaW4oJycpO1xuXHRcdFx0fTtcblxuXHRcdGNhc2UgJ2JyYWNrZXQnOlxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZSA9PT0gbnVsbCA/IGVuY29kZShrZXksIG9wdHMpIDogW1xuXHRcdFx0XHRcdGVuY29kZShrZXksIG9wdHMpLFxuXHRcdFx0XHRcdCdbXT0nLFxuXHRcdFx0XHRcdGVuY29kZSh2YWx1ZSwgb3B0cylcblx0XHRcdFx0XS5qb2luKCcnKTtcblx0XHRcdH07XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZSA9PT0gbnVsbCA/IGVuY29kZShrZXksIG9wdHMpIDogW1xuXHRcdFx0XHRcdGVuY29kZShrZXksIG9wdHMpLFxuXHRcdFx0XHRcdCc9Jyxcblx0XHRcdFx0XHRlbmNvZGUodmFsdWUsIG9wdHMpXG5cdFx0XHRcdF0uam9pbignJyk7XG5cdFx0XHR9O1xuXHR9XG59XG5cbmZ1bmN0aW9uIHBhcnNlckZvckFycmF5Rm9ybWF0KG9wdHMpIHtcblx0dmFyIHJlc3VsdDtcblxuXHRzd2l0Y2ggKG9wdHMuYXJyYXlGb3JtYXQpIHtcblx0XHRjYXNlICdpbmRleCc6XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUsIGFjY3VtdWxhdG9yKSB7XG5cdFx0XHRcdHJlc3VsdCA9IC9cXFsoXFxkKilcXF0kLy5leGVjKGtleSk7XG5cblx0XHRcdFx0a2V5ID0ga2V5LnJlcGxhY2UoL1xcW1xcZCpcXF0kLywgJycpO1xuXG5cdFx0XHRcdGlmICghcmVzdWx0KSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IHZhbHVlO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChhY2N1bXVsYXRvcltrZXldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0ge307XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhY2N1bXVsYXRvcltrZXldW3Jlc3VsdFsxXV0gPSB2YWx1ZTtcblx0XHRcdH07XG5cblx0XHRjYXNlICdicmFja2V0Jzpcblx0XHRcdHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgYWNjdW11bGF0b3IpIHtcblx0XHRcdFx0cmVzdWx0ID0gLyhcXFtcXF0pJC8uZXhlYyhrZXkpO1xuXG5cdFx0XHRcdGtleSA9IGtleS5yZXBsYWNlKC9cXFtcXF0kLywgJycpO1xuXG5cdFx0XHRcdGlmICghcmVzdWx0IHx8IGFjY3VtdWxhdG9yW2tleV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gW10uY29uY2F0KGFjY3VtdWxhdG9yW2tleV0sIHZhbHVlKTtcblx0XHRcdH07XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlLCBhY2N1bXVsYXRvcikge1xuXHRcdFx0XHRpZiAoYWNjdW11bGF0b3Jba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IHZhbHVlO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSBbXS5jb25jYXQoYWNjdW11bGF0b3Jba2V5XSwgdmFsdWUpO1xuXHRcdFx0fTtcblx0fVxufVxuXG5mdW5jdGlvbiBlbmNvZGUodmFsdWUsIG9wdHMpIHtcblx0aWYgKG9wdHMuZW5jb2RlKSB7XG5cdFx0cmV0dXJuIG9wdHMuc3RyaWN0ID8gc3RyaWN0VXJpRW5jb2RlKHZhbHVlKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGtleXNTb3J0ZXIoaW5wdXQpIHtcblx0aWYgKEFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG5cdFx0cmV0dXJuIGlucHV0LnNvcnQoKTtcblx0fSBlbHNlIGlmICh0eXBlb2YgaW5wdXQgPT09ICdvYmplY3QnKSB7XG5cdFx0cmV0dXJuIGtleXNTb3J0ZXIoT2JqZWN0LmtleXMoaW5wdXQpKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0XHRyZXR1cm4gTnVtYmVyKGEpIC0gTnVtYmVyKGIpO1xuXHRcdH0pLm1hcChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRyZXR1cm4gaW5wdXRba2V5XTtcblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiBpbnB1dDtcbn1cblxuZXhwb3J0cy5leHRyYWN0ID0gZnVuY3Rpb24gKHN0cikge1xuXHRyZXR1cm4gc3RyLnNwbGl0KCc/JylbMV0gfHwgJyc7XG59O1xuXG5leHBvcnRzLnBhcnNlID0gZnVuY3Rpb24gKHN0ciwgb3B0cykge1xuXHRvcHRzID0gb2JqZWN0QXNzaWduKHthcnJheUZvcm1hdDogJ25vbmUnfSwgb3B0cyk7XG5cblx0dmFyIGZvcm1hdHRlciA9IHBhcnNlckZvckFycmF5Rm9ybWF0KG9wdHMpO1xuXG5cdC8vIENyZWF0ZSBhbiBvYmplY3Qgd2l0aCBubyBwcm90b3R5cGVcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9xdWVyeS1zdHJpbmcvaXNzdWVzLzQ3XG5cdHZhciByZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cdGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiByZXQ7XG5cdH1cblxuXHRzdHIgPSBzdHIudHJpbSgpLnJlcGxhY2UoL14oXFw/fCN8JikvLCAnJyk7XG5cblx0aWYgKCFzdHIpIHtcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cblx0c3RyLnNwbGl0KCcmJykuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcblx0XHR2YXIgcGFydHMgPSBwYXJhbS5yZXBsYWNlKC9cXCsvZywgJyAnKS5zcGxpdCgnPScpO1xuXHRcdC8vIEZpcmVmb3ggKHByZSA0MCkgZGVjb2RlcyBgJTNEYCB0byBgPWBcblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3F1ZXJ5LXN0cmluZy9wdWxsLzM3XG5cdFx0dmFyIGtleSA9IHBhcnRzLnNoaWZ0KCk7XG5cdFx0dmFyIHZhbCA9IHBhcnRzLmxlbmd0aCA+IDAgPyBwYXJ0cy5qb2luKCc9JykgOiB1bmRlZmluZWQ7XG5cblx0XHQvLyBtaXNzaW5nIGA9YCBzaG91bGQgYmUgYG51bGxgOlxuXHRcdC8vIGh0dHA6Ly93My5vcmcvVFIvMjAxMi9XRC11cmwtMjAxMjA1MjQvI2NvbGxlY3QtdXJsLXBhcmFtZXRlcnNcblx0XHR2YWwgPSB2YWwgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBkZWNvZGVVUklDb21wb25lbnQodmFsKTtcblxuXHRcdGZvcm1hdHRlcihkZWNvZGVVUklDb21wb25lbnQoa2V5KSwgdmFsLCByZXQpO1xuXHR9KTtcblxuXHRyZXR1cm4gT2JqZWN0LmtleXMocmV0KS5zb3J0KCkucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIGtleSkge1xuXHRcdHZhciB2YWwgPSByZXRba2V5XTtcblx0XHRpZiAoQm9vbGVhbih2YWwpICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbCkpIHtcblx0XHRcdC8vIFNvcnQgb2JqZWN0IGtleXMsIG5vdCB2YWx1ZXNcblx0XHRcdHJlc3VsdFtrZXldID0ga2V5c1NvcnRlcih2YWwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHRba2V5XSA9IHZhbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9LCBPYmplY3QuY3JlYXRlKG51bGwpKTtcbn07XG5cbmV4cG9ydHMuc3RyaW5naWZ5ID0gZnVuY3Rpb24gKG9iaiwgb3B0cykge1xuXHR2YXIgZGVmYXVsdHMgPSB7XG5cdFx0ZW5jb2RlOiB0cnVlLFxuXHRcdHN0cmljdDogdHJ1ZSxcblx0XHRhcnJheUZvcm1hdDogJ25vbmUnXG5cdH07XG5cblx0b3B0cyA9IG9iamVjdEFzc2lnbihkZWZhdWx0cywgb3B0cyk7XG5cblx0dmFyIGZvcm1hdHRlciA9IGVuY29kZXJGb3JBcnJheUZvcm1hdChvcHRzKTtcblxuXHRyZXR1cm4gb2JqID8gT2JqZWN0LmtleXMob2JqKS5zb3J0KCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcblx0XHR2YXIgdmFsID0gb2JqW2tleV07XG5cblx0XHRpZiAodmFsID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0XHRpZiAodmFsID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gZW5jb2RlKGtleSwgb3B0cyk7XG5cdFx0fVxuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuXHRcdFx0dmFyIHJlc3VsdCA9IFtdO1xuXG5cdFx0XHR2YWwuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwyKSB7XG5cdFx0XHRcdGlmICh2YWwyID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXN1bHQucHVzaChmb3JtYXR0ZXIoa2V5LCB2YWwyLCByZXN1bHQubGVuZ3RoKSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHJlc3VsdC5qb2luKCcmJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVuY29kZShrZXksIG9wdHMpICsgJz0nICsgZW5jb2RlKHZhbCwgb3B0cyk7XG5cdH0pLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuXHRcdHJldHVybiB4Lmxlbmd0aCA+IDA7XG5cdH0pLmpvaW4oJyYnKSA6ICcnO1xufTtcbiIsIi8qIGdsb2JhbCBsaWIsIFhNTEh0dHBSZXF1ZXN0ICovXG4vKiBkZXBzOiBodHRwdXJsICovXG5cbid1c2Ugc3RyaWN0J1xuXG5sZXQgdXRpbHNcblxuaW1wb3J0ICdodHRwdXJsJ1xuaW1wb3J0IHFzIGZyb20gJ3F1ZXJ5LXN0cmluZydcblxubGV0IGpzb25wQ250ID0gMFxuY29uc3QgRVJST1JfU1RBVEUgPSAtMVxuXG5mdW5jdGlvbiBfanNvbnAgKGNvbmZpZywgY2FsbGJhY2ssIHByb2dyZXNzQ2FsbGJhY2spIHtcbiAgY29uc3QgY2JOYW1lID0gJ2pzb25wXycgKyAoKytqc29ucENudClcbiAgbGV0IHVybFxuXG4gIGlmICghY29uZmlnLnVybCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1toNS1yZW5kZXJdIGNvbmZpZy51cmwgc2hvdWxkIGJlIHNldCBpbiBfanNvbnAgZm9yIFxcJ2ZldGNoXFwnIEFQSS4nKVxuICB9XG5cbiAgZ2xvYmFsW2NiTmFtZV0gPSAoZnVuY3Rpb24gKGNiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgY2FsbGJhY2soe1xuICAgICAgICBzdGF0dXM6IDIwMCxcbiAgICAgICAgb2s6IHRydWUsXG4gICAgICAgIHN0YXR1c1RleHQ6ICdPSycsXG4gICAgICAgIGRhdGE6IHJlc3BvbnNlXG4gICAgICB9KVxuICAgICAgZGVsZXRlIGdsb2JhbFtjYl1cbiAgICB9XG4gIH0pKGNiTmFtZSlcblxuICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICB0cnkge1xuICAgIHVybCA9IGxpYi5odHRwdXJsKGNvbmZpZy51cmwpXG4gIH1cbiAgY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1toNS1yZW5kZXJdIGludmFsaWQgY29uZmlnLnVybCBpbiBfanNvbnAgZm9yIFxcJ2ZldGNoXFwnIEFQSTogJ1xuICAgICAgKyBjb25maWcudXJsKVxuICB9XG4gIHVybC5wYXJhbXMuY2FsbGJhY2sgPSBjYk5hbWVcbiAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0J1xuICBzY3JpcHQuc3JjID0gdXJsLnRvU3RyaW5nKClcbiAgLy8gc2NyaXB0Lm9uZXJyb3IgaXMgbm90IHdvcmtpbmcgb24gSUUgb3Igc2FmYXJpLlxuICAvLyBidXQgdGhleSBhcmUgbm90IGNvbnNpZGVyZWQgaGVyZS5cbiAgc2NyaXB0Lm9uZXJyb3IgPSAoZnVuY3Rpb24gKGNiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1toNS1yZW5kZXJdIHVuZXhwZWN0ZWQgZXJyb3IgaW4gX2pzb25wIGZvciBcXCdmZXRjaFxcJyBBUEknLCBlcnIpXG4gICAgICBjYWxsYmFjayh7XG4gICAgICAgIHN0YXR1czogRVJST1JfU1RBVEUsXG4gICAgICAgIG9rOiBmYWxzZSxcbiAgICAgICAgc3RhdHVzVGV4dDogJycsXG4gICAgICAgIGRhdGE6ICcnXG4gICAgICB9KVxuICAgICAgZGVsZXRlIGdsb2JhbFtjYl1cbiAgICB9XG4gIH0pKGNiTmFtZSlcbiAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF1cbiAgaGVhZC5pbnNlcnRCZWZvcmUoc2NyaXB0LCBudWxsKVxufVxuXG5mdW5jdGlvbiBfeGhyIChjb25maWcsIGNhbGxiYWNrLCBwcm9ncmVzc0NhbGxiYWNrKSB7XG4gIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG4gIHhoci5yZXNwb25zZVR5cGUgPSBjb25maWcudHlwZVxuICB4aHIub3Blbihjb25maWcubWV0aG9kLCBjb25maWcudXJsLCB0cnVlKVxuXG4gIC8vIGNvcnMgY29va2llIHN1cHBvcnRcbiAgaWYgKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgPT09IHRydWUpIHtcbiAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZVxuICB9XG5cbiAgY29uc3QgaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9XG4gIGZvciAoY29uc3QgayBpbiBoZWFkZXJzKSB7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaywgaGVhZGVyc1trXSlcbiAgfVxuXG4gIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAocmVzKSB7XG4gICAgY2FsbGJhY2soe1xuICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxuICAgICAgb2s6IHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDAsXG4gICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgIGRhdGE6IHhoci5yZXNwb25zZSxcbiAgICAgIGhlYWRlcnM6IHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKS5zcGxpdCgnXFxuJylcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAob2JqLCBoZWFkZXJTdHIpIHtcbiAgICAgICAgICBjb25zdCBoZWFkZXJBcnIgPSBoZWFkZXJTdHIubWF0Y2goLyguKyk6ICguKykvKVxuICAgICAgICAgIGlmIChoZWFkZXJBcnIpIHtcbiAgICAgICAgICAgIG9ialtoZWFkZXJBcnJbMV1dID0gaGVhZGVyQXJyWzJdXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvYmpcbiAgICAgICAgfSwge30pXG4gICAgfSlcbiAgfVxuXG4gIGlmIChwcm9ncmVzc0NhbGxiYWNrKSB7XG4gICAgeGhyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgcHJvZ3Jlc3NDYWxsYmFjayh7XG4gICAgICAgIHJlYWR5U3RhdGU6IHhoci5yZWFkeVN0YXRlLFxuICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICAgIGxlbmd0aDogZS5sb2FkZWQsXG4gICAgICAgIHRvdGFsOiBlLnRvdGFsLFxuICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpLnNwbGl0KCdcXG4nKVxuICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwgaGVhZGVyU3RyKSB7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJBcnIgPSBoZWFkZXJTdHIubWF0Y2goLyguKyk6ICguKykvKVxuICAgICAgICAgICAgaWYgKGhlYWRlckFycikge1xuICAgICAgICAgICAgICBvYmpbaGVhZGVyQXJyWzFdXSA9IGhlYWRlckFyclsyXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9ialxuICAgICAgICAgIH0sIHt9KVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICB4aHIub25lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdbaDUtcmVuZGVyXSB1bmV4cGVjdGVkIGVycm9yIGluIF94aHIgZm9yIFxcJ2ZldGNoXFwnIEFQSScsIGVycilcbiAgICBjYWxsYmFjayh7XG4gICAgICBzdGF0dXM6IEVSUk9SX1NUQVRFLFxuICAgICAgb2s6IGZhbHNlLFxuICAgICAgc3RhdHVzVGV4dDogJycsXG4gICAgICBkYXRhOiAnJ1xuICAgIH0pXG4gIH1cblxuICB4aHIuc2VuZChjb25maWcuYm9keSlcbn1cblxuY29uc3Qgc3RyZWFtID0ge1xuXG4gIC8qKlxuICAgKiBzZW5kSHR0cFxuICAgKiBAZGVwcmVjYXRlZFxuICAgKiBOb3RlOiBUaGlzIEFQSSBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIHN0cmVhbS5mZXRjaCBpbnN0ZWFkLlxuICAgKiBzZW5kIGEgaHR0cCByZXF1ZXN0IHRocm91Z2ggWEhSLlxuICAgKiBAcGFyYW0gIHtvYmp9IHBhcmFtc1xuICAgKiAgLSBtZXRob2Q6ICdHRVQnIHwgJ1BPU1QnIHwgJ1BVVCcgfCAnREVMRVRFJyB8ICdIRUFEJyB8ICdQQVRDSCcsXG4gICAqICAtIHVybDogdXJsIHJlcXVlc3RlZFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGNhbGxiYWNrSWRcbiAgICovXG4gIHNlbmRIdHRwOiBmdW5jdGlvbiAocGFyYW0sIGNhbGxiYWNrSWQpIHtcbiAgICBpZiAodHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGFyYW0gPSBKU09OLnBhcnNlKHBhcmFtKVxuICAgICAgfVxuICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcGFyYW0gIT09ICdvYmplY3QnIHx8ICFwYXJhbS51cmwpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKFxuICAgICAgICAnW2g1LXJlbmRlcl0gaW52YWxpZCBjb25maWcgb3IgaW52YWxpZCBjb25maWcudXJsIGZvciBzZW5kSHR0cCBBUEknKVxuICAgIH1cblxuICAgIGNvbnN0IHNlbmRlciA9IHRoaXMuc2VuZGVyXG4gICAgY29uc3QgbWV0aG9kID0gcGFyYW0ubWV0aG9kIHx8ICdHRVQnXG4gICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcbiAgICB4aHIub3BlbihtZXRob2QsIHBhcmFtLnVybCwgdHJ1ZSlcbiAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhjYWxsYmFja0lkLCB0aGlzLnJlc3BvbnNlVGV4dClcbiAgICB9XG4gICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdbaDUtcmVuZGVyXSB1bmV4cGVjdGVkIGVycm9yIGluIHNlbmRIdHRwIEFQSScsIGVycm9yKVxuICAgICAgLy8gc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhcbiAgICAgIC8vICAgY2FsbGJhY2tJZCxcbiAgICAgIC8vICAgbmV3IEVycm9yKCd1bmV4cGVjdGVkIGVycm9yIGluIHNlbmRIdHRwIEFQSScpXG4gICAgICAvLyApXG4gICAgfVxuICAgIHhoci5zZW5kKClcbiAgfSxcblxuICAvKipcbiAgICogZmV0Y2hcbiAgICogdXNlIHN0cmVhbS5mZXRjaCB0byByZXF1ZXN0IGZvciBhIGpzb24gZmlsZSwgYSBwbGFpbiB0ZXh0IGZpbGUgb3JcbiAgICogYSBhcnJheWJ1ZmZlciBmb3IgYSBmaWxlIHN0cmVhbS4gKFlvdSBjYW4gdXNlIEJsb2IgYW5kIEZpbGVSZWFkZXJcbiAgICogQVBJIGltcGxlbWVudGVkIGJ5IG1vc3QgbW9kZXJuIGJyb3dzZXJzIHRvIHJlYWQgYSBhcnJheWJ1ZmZlci4pXG4gICAqIEBwYXJhbSAge29iamVjdH0gb3B0aW9ucyBjb25maWcgb3B0aW9uc1xuICAgKiAgIC0gbWV0aG9kOiAnR0VUJyB8ICdQT1NUJyB8ICdQVVQnIHwgJ0RFTEVURScgfCAnSEVBRCcgfCAnUEFUQ0gnXG4gICAqICAgLSBoZWFkZXJzIHtvYmp9XG4gICAqICAgLSB1cmwge3N0cmluZ31cbiAgICogICAtIG1vZGUge3N0cmluZ30gJ2NvcnMnIHwgJ25vLWNvcnMnIHwgJ3NhbWUtb3JpZ2luJyB8ICduYXZpZ2F0ZSdcbiAgICogICAtIHdpdGhDcmVkZW50aWFscyB7Ym9vbGVhbn1cbiAgICogICAtIGJvZHlcbiAgICogICAtIHR5cGUge3N0cmluZ30gJ2pzb24nIHwgJ2pzb25wJyB8ICd0ZXh0J1xuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGNhbGxiYWNrSWRcbiAgICogQHBhcmFtICB7c3RyaW5nfSBwcm9ncmVzc0NhbGxiYWNrSWRcbiAgICovXG4gIGZldGNoOiBmdW5jdGlvbiAob3B0aW9ucywgY2FsbGJhY2tJZCwgcHJvZ3Jlc3NDYWxsYmFja0lkKSB7XG4gICAgY29uc3QgREVGQVVMVF9NRVRIT0QgPSAnR0VUJ1xuICAgIGNvbnN0IERFRkFVTFRfTU9ERSA9ICdjb3JzJ1xuICAgIGNvbnN0IERFRkFVTFRfVFlQRSA9ICd0ZXh0J1xuXG4gICAgY29uc3QgbWV0aG9kT3B0aW9ucyA9IFsnR0VUJywgJ1BPU1QnLCAnUFVUJywgJ0RFTEVURScsICdIRUFEJywgJ1BBVENIJ11cbiAgICBjb25zdCBtb2RlT3B0aW9ucyA9IFsnY29ycycsICduby1jb3JzJywgJ3NhbWUtb3JpZ2luJywgJ25hdmlnYXRlJ11cbiAgICBjb25zdCB0eXBlT3B0aW9ucyA9IFsndGV4dCcsICdqc29uJywgJ2pzb25wJywgJ2FycmF5YnVmZmVyJ11cblxuICAgIC8vIGNvbnN0IGZhbGxiYWNrID0gZmFsc2UgIC8vIGZhbGxiYWNrIGZyb20gJ2ZldGNoJyBBUEkgdG8gWEhSLlxuICAgIGNvbnN0IHNlbmRlciA9IHRoaXMuc2VuZGVyXG5cbiAgICBjb25zdCBjb25maWcgPSB1dGlscy5leHRlbmQoe30sIG9wdGlvbnMpXG5cbiAgICAvLyB2YWxpZGF0ZSBvcHRpb25zLm1ldGhvZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm1ldGhvZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZy5tZXRob2QgPSBERUZBVUxUX01FVEhPRFxuICAgICAgY29uc29sZS53YXJuKCdbaDUtcmVuZGVyXSBvcHRpb25zLm1ldGhvZCBmb3IgXFwnZmV0Y2hcXCcgQVBJIGhhcyBiZWVuIHNldCB0byAnXG4gICAgICAgICsgJ2RlZmF1bHQgdmFsdWUgXFwnJyArIGNvbmZpZy5tZXRob2QgKyAnXFwnJylcbiAgICB9XG4gICAgZWxzZSBpZiAobWV0aG9kT3B0aW9ucy5pbmRleE9mKChjb25maWcubWV0aG9kICsgJycpXG4gICAgICAgIC50b1VwcGVyQ2FzZSgpKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdbaDUtcmVuZGVyXSBvcHRpb25zLm1ldGhvZCBcXCcnXG4gICAgICAgICsgY29uZmlnLm1ldGhvZFxuICAgICAgICArICdcXCcgZm9yIFxcJ2ZldGNoXFwnIEFQSSBzaG91bGQgYmUgb25lIG9mICdcbiAgICAgICAgKyBtZXRob2RPcHRpb25zICsgJy4nKVxuICAgIH1cblxuICAgIC8vIHZhbGlkYXRlIG9wdGlvbnMudXJsXG4gICAgaWYgKCFjb25maWcudXJsKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcignW2g1LXJlbmRlcl0gb3B0aW9ucy51cmwgc2hvdWxkIGJlIHNldCBmb3IgXFwnZmV0Y2hcXCcgQVBJLicpXG4gICAgfVxuXG4gICAgLy8gdmFsaWRhdGUgYm9keSBjb250ZW50IGZvciBtZXRob2QgJ0dFVCcuXG4gICAgaWYgKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSA9PT0gJ0dFVCcpIHtcbiAgICAgIGxldCBib2R5ID0gY29uZmlnLmJvZHlcbiAgICAgIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KGJvZHkpKSB7XG4gICAgICAgIGJvZHkgPSBxcy5zdHJpbmdpZnkoYm9keSlcbiAgICAgIH1cbiAgICAgIGxldCB1cmwgPSBjb25maWcudXJsXG4gICAgICBsZXQgaGFzaElkeCA9IHVybC5pbmRleE9mKCcjJylcbiAgICAgIGhhc2hJZHggPD0gLTEgJiYgKGhhc2hJZHggPSB1cmwubGVuZ3RoKVxuICAgICAgbGV0IGhhc2ggPSB1cmwuc3Vic3RyKGhhc2hJZHgpXG4gICAgICBoYXNoICYmIChoYXNoID0gJyMnICsgaGFzaClcbiAgICAgIHVybCA9IHVybC5zdWJzdHJpbmcoMCwgaGFzaElkeClcbiAgICAgIHVybCArPSAoY29uZmlnLnVybC5pbmRleE9mKCc/JykgPD0gLTEgPyAnPycgOiAnJicpICsgYm9keSArIGhhc2hcbiAgICAgIGNvbmZpZy51cmwgPSB1cmxcbiAgICB9XG5cbiAgICAvLyB2YWxpZGF0ZSBvcHRpb25zLm1vZGVcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5tb2RlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnLm1vZGUgPSBERUZBVUxUX01PREVcbiAgICB9XG4gICAgZWxzZSBpZiAobW9kZU9wdGlvbnMuaW5kZXhPZigoY29uZmlnLm1vZGUgKyAnJykudG9Mb3dlckNhc2UoKSkgPT09IC0xKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcignW2g1LXJlbmRlcl0gb3B0aW9ucy5tb2RlIFxcJydcbiAgICAgICAgKyBjb25maWcubW9kZVxuICAgICAgICArICdcXCcgZm9yIFxcJ2ZldGNoXFwnIEFQSSBzaG91bGQgYmUgb25lIG9mICdcbiAgICAgICAgKyBtb2RlT3B0aW9ucyArICcuJylcbiAgICB9XG5cbiAgICAvLyB2YWxpZGF0ZSBvcHRpb25zLnR5cGVcbiAgICBpZiAodHlwZW9mIGNvbmZpZy50eXBlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnLnR5cGUgPSBERUZBVUxUX1RZUEVcbiAgICAgIGNvbnNvbGUud2FybignW2g1LXJlbmRlcl0gb3B0aW9ucy50eXBlIGZvciBcXCdmZXRjaFxcJyBBUEkgaGFzIGJlZW4gc2V0IHRvICdcbiAgICAgICAgKyAnZGVmYXVsdCB2YWx1ZSBcXCcnICsgY29uZmlnLnR5cGUgKyAnXFwnLicpXG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVPcHRpb25zLmluZGV4T2YoKGNvbmZpZy50eXBlICsgJycpLnRvTG93ZXJDYXNlKCkpID09PSAtMSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ1toNS1yZW5kZXJdIG9wdGlvbnMudHlwZSBcXCcnXG4gICAgICAgICAgKyBjb25maWcudHlwZVxuICAgICAgICAgICsgJ1xcJyBmb3IgXFwnZmV0Y2hcXCcgQVBJIHNob3VsZCBiZSBvbmUgb2YgJ1xuICAgICAgICAgICsgdHlwZU9wdGlvbnMgKyAnLicpXG4gICAgfVxuXG4gICAgLy8gdmFsaWRhdGUgb3B0aW9ucy5oZWFkZXJzXG4gICAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fVxuICAgIGlmICghdXRpbHMuaXNQbGFpbk9iamVjdChjb25maWcuaGVhZGVycykpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdbaDUtcmVuZGVyXSBvcHRpb25zLmhlYWRlcnMgc2hvdWxkIGJlIGEgcGxhaW4gb2JqZWN0JylcbiAgICB9XG5cbiAgICAvLyB2YWxpZGF0ZSBvcHRpb25zLnRpbWVvdXRcbiAgICBjb25maWcudGltZW91dCA9IHBhcnNlSW50KGNvbmZpZy50aW1lb3V0LCAxMCkgfHwgMjUwMFxuXG4gICAgY29uc3QgX2NhbGxBcmdzID0gW2NvbmZpZywgZnVuY3Rpb24gKHJlcykge1xuICAgICAgc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhjYWxsYmFja0lkLCByZXMpXG4gICAgfV1cbiAgICBpZiAocHJvZ3Jlc3NDYWxsYmFja0lkKSB7XG4gICAgICBfY2FsbEFyZ3MucHVzaChmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIC8vIFNldCAna2VlcEFsaXZlJyB0byB0cnVlIGZvciBzZW5kaW5nIGNvbnRpbnVvdXMgY2FsbGJhY2tzXG4gICAgICAgIHNlbmRlci5wZXJmb3JtQ2FsbGJhY2socHJvZ3Jlc3NDYWxsYmFja0lkLCByZXMsIHRydWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChjb25maWcudHlwZSA9PT0gJ2pzb25wJykge1xuICAgICAgX2pzb25wLmFwcGx5KHRoaXMsIF9jYWxsQXJncylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBfeGhyLmFwcGx5KHRoaXMsIF9jYWxsQXJncylcbiAgICB9XG4gIH1cblxufVxuXG5jb25zdCBtZXRhID0ge1xuICBzdHJlYW06IFt7XG4gICAgbmFtZTogJ3NlbmRIdHRwJyxcbiAgICBhcmdzOiBbJ29iamVjdCcsICdmdW5jdGlvbiddXG4gIH0sIHtcbiAgICBuYW1lOiAnZmV0Y2gnLFxuICAgIGFyZ3M6IFsnb2JqZWN0JywgJ2Z1bmN0aW9uJywgJ2Z1bmN0aW9uJ11cbiAgfV1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBmdW5jdGlvbiAoV2VleCkge1xuICAgIHV0aWxzID0gV2VleC51dGlsc1xuICAgIFdlZXgucmVnaXN0ZXJBcGlNb2R1bGUoJ3N0cmVhbScsIHN0cmVhbSwgbWV0YSlcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbi8qKlxuXG5BVUNUSU9OOlxudGFza1F1ZXVlXG5DbGlwYm9hcmQuc2V0U3RyaW5nKCkgIE5PVyBub3Qgd29ya3MsIGZhY2luZyB0byB1c2VyLWFjdCBsb3NlIG9mIHRhc2tRdWV1ZS5cblxud29ya3MgaW4gQ2hyb21lIEZpcmVmb3ggT3BlcmEuIGJ1dCBub3QgaW4gU2FmYXJpLlxuQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRG9jdW1lbnQvZXhlY0NvbW1hbmQjQnJvd3Nlcl9jb21wYXRpYmlsaXR5XG5cbkNsaXBib2FyZC5nZXRTdHJpbmcoKSB1bmltcGxlbWVudGVkLiBUaGVyZSBpcyBubyBlYXN5IHdheSB0byBkbyBwYXN0ZSBmcm9tIGNsaXBib2FyZCB0byBqcyB2YXJpYWJsZS5cblxuU28gbG9vayBvdXQgeW91ciBhcHAgYmVoYXZpb3IsIHdoZW4gZG93bmdyYWRlIHRvIGh0bWw1IHJlbmRlci5cbkFueSBpZGVhIGlzIHdlbGNvbWUuXG4qKi9cblxuY29uc3QgV0VFWF9DTElQQk9BUkRfSUQgPSAnX193ZWV4X2NsaXBib2FyZF9pZF9fJ1xuXG5jb25zdCBjbGlwYm9hcmQgPSB7XG5cbiAgZ2V0U3RyaW5nOiBmdW5jdGlvbiAoY2FsbGJhY2tJZCkge1xuICAgIC8vIG5vdCBzdXBwb3J0ZWQgaW4gaHRtbDVcbiAgICBjb25zb2xlLmxvZygnY2xpcGJvYXJkLmdldFN0cmluZygpIGlzIG5vdCBzdXBwb3J0ZWQgbm93LicpXG4gIH0sXG5cbiAgc2V0U3RyaW5nOiBmdW5jdGlvbiAodGV4dCkge1xuICAgIC8vIG5vdCBzdXBwb3J0IHNhZmFyaVxuICAgIGlmICh0eXBlb2YgdGV4dCA9PT0gJ3N0cmluZycgJiYgdGV4dCAhPT0gJycgJiYgZG9jdW1lbnQuZXhlY0NvbW1hbmQpIHtcbiAgICAgIGNvbnN0IHRlbXBJbnB1dCA9IGVsZW1lbnQoKVxuICAgICAgdGVtcElucHV0LnZhbHVlID0gdGV4dFxuXG4gICAgICB0ZW1wSW5wdXQuc2VsZWN0KClcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5JylcbiAgICAgIC8vIHZhciBvdXQgPSBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJleGVjQ29tbWFuZCBvdXQgaXMgXCIgKyBvdXQpO1xuICAgICAgdGVtcElucHV0LnZhbHVlID0gJydcbiAgICAgIHRlbXBJbnB1dC5ibHVyKClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnb25seSBzdXBwb3J0IHN0cmluZyBpbnB1dCBub3cnKVxuICAgIH1cbiAgfVxuXG59XG5cbmZ1bmN0aW9uIGVsZW1lbnQgKCkge1xuICBsZXQgdGVtcElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoV0VFWF9DTElQQk9BUkRfSUQpXG4gIGlmICghdGVtcElucHV0KSB7XG4gICAgdGVtcElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRlbXBJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgV0VFWF9DTElQQk9BUkRfSUQpXG4gICAgdGVtcElucHV0LnN0eWxlLmNzc1RleHQgPSAnaGVpZ2h0OjFweDt3aWR0aDoxcHg7Ym9yZGVyOm5vbmU7J1xuICAgIC8vIHRlbXBJbnB1dC5zdHlsZS5jc3NUZXh0ID0gXCJoZWlnaHQ6NDBweDt3aWR0aDozMDBweDtib3JkZXI6c29saWQ7XCJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRlbXBJbnB1dClcbiAgfVxuICByZXR1cm4gdGVtcElucHV0XG59XG5cbmNvbnN0IG1ldGEgPSB7XG4gIGNsaXBib2FyZDogW3tcbiAgICBuYW1lOiAnZ2V0U3RyaW5nJyxcbiAgICBhcmdzOiBbJ2Z1bmN0aW9uJ11cbiAgfSwge1xuICAgIG5hbWU6ICdzZXRTdHJpbmcnLFxuICAgIGFyZ3M6IFsnc3RyaW5nJ11cbiAgfV1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBmdW5jdGlvbiAoV2VleCkge1xuICAgIFdlZXgucmVnaXN0ZXJBcGlNb2R1bGUoJ2NsaXBib2FyZCcsIGNsaXBib2FyZCwgbWV0YSlcbiAgfVxufVxuIiwiLyoqXG4gKiBTaW1wbGUgYmluZCwgZmFzdGVyIHRoYW4gbmF0aXZlXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjdHhcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluZCAoZm4sIGN0eCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICBjb25zdCBsID0gYXJndW1lbnRzLmxlbmd0aFxuICAgIHJldHVybiBsXG4gICAgICA/IGwgPiAxXG4gICAgICAgID8gZm4uYXBwbHkoY3R4LCBhcmd1bWVudHMpXG4gICAgICAgIDogZm4uY2FsbChjdHgsIGEpXG4gICAgICA6IGZuLmNhbGwoY3R4KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZSAoZnVuYywgd2FpdCkge1xuICBsZXQgdGltZXJJZFxuICBmdW5jdGlvbiBsYXRlciAoKSB7XG4gICAgdGltZXJJZCA9IG51bGxcbiAgICBmdW5jLmFwcGx5KG51bGwpXG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBjbGVhclRpbWVvdXQodGltZXJJZClcbiAgICB0aW1lcklkID0gc2V0VGltZW91dChsYXRlciwgd2FpdClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3R0bGUgKGZ1bmMsIHdhaXQpIHtcbiAgbGV0IGxhc3QgPSAwXG4gIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzXG4gICAgY29uc3QgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgaWYgKHRpbWUgLSBsYXN0ID4gd2FpdCkge1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKVxuICAgICAgbGFzdCA9IHRpbWVcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFNlbGVjdGlvblJhbmdlKHNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb25FbmQpIHtcbiAgdGhpcy4kZWwuZm9jdXMoKVxuICB0aGlzLiRlbC5zZXRTZWxlY3Rpb25SYW5nZShzZWxlY3Rpb25TdGFydCwgc2VsZWN0aW9uRW5kKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0aW9uUmFuZ2UoY2FsbGJhY2spIHtcbiAgY2FsbGJhY2soe1xuICAgIHNlbGVjdGlvblN0YXJ0OiB0aGlzLiRlbC5zZWxlY3Rpb25TdGFydCxcbiAgICBzZWxlY3Rpb25FbmQ6IHRoaXMuJGVsLnNlbGVjdGlvbkVuZFxuICB9KSBcbn1cbiIsIi8qKlxuICogQ3JlYXRlIEV2ZW50LlxuICogQHBhcmFtIHtET01TdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICovXG4vLyBleHBvcnQgZnVuY3Rpb24gY3JlYXRlRXZlbnQgKGNvbnRleHQsIHR5cGUsIHByb3BzKSB7XG4vLyAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KHR5cGUsIHsgYnViYmxlczogZmFsc2UgfSlcbi8vICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKVxuLy8gICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuLy9cbi8vICAgZXh0ZW5kKGV2ZW50LCBwcm9wcylcbi8vXG4vLyAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldmVudCwgJ3RhcmdldCcsIHtcbi8vICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuLy8gICAgIHZhbHVlOiBjb250ZXh0IHx8IG51bGxcbi8vICAgfSlcbi8vXG4vLyAgIHJldHVybiBldmVudFxuLy8gfVxuXG4vKipcbiAqIENyZWF0ZSBDdXN0b20gRXZlbnQuXG4gKiBAcGFyYW0ge0RPTVN0cmluZ30gdHlwZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gKi9cbi8vIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDdXN0b21FdmVudCAoY29udGV4dCwgdHlwZSwgcHJvcHMpIHtcbi8vICAgLy8gY29tcGF0aWJpbGl0eTogaHR0cDovL2Nhbml1c2UuY29tLyNzZWFyY2g9Y3VzdG9tZXZlbnRcbi8vICAgLy8gY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQodHlwZSlcbi8vICAgY29uc3QgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKVxuLy8gICBldmVudC5pbml0Q3VzdG9tRXZlbnQodHlwZSwgZmFsc2UsIHRydWUsIHt9KVxuLy8gICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4vLyAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4vL1xuLy8gICBleHRlbmQoZXZlbnQsIHByb3BzKVxuLy9cbi8vICAgLy8gVE9ETzogZXZlbnQudGFyZ2V0IGlzIHJlYWRvbmx5XG4vLyAgIC8vIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldmVudCwgJ3RhcmdldCcsIHtcbi8vICAgLy8gICBlbnVtZXJhYmxlOiB0cnVlLFxuLy8gICAvLyAgIHZhbHVlOiBjb250ZXh0IHx8IG51bGxcbi8vICAgLy8gfSlcbi8vXG4vLyAgIHJldHVybiBldmVudFxuLy8gfVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwRm9ybUV2ZW50cyAoY29udGV4dCkge1xuICBjb25zdCBldmVudE1hcCA9IHt9XG4gIDtbJ2lucHV0JywgJ2NoYW5nZScsICdmb2N1cycsICdibHVyJ10uZm9yRWFjaCh0eXBlID0+IHtcbiAgICBldmVudE1hcFt0eXBlXSA9IGV2ZW50ID0+IHtcbiAgICAgIGlmIChjb250ZXh0LiRlbCkge1xuICAgICAgICBjb250ZXh0LnZhbHVlID0gY29udGV4dC4kZWwudmFsdWVcbiAgICAgICAgZXZlbnQudmFsdWUgPSBjb250ZXh0LiRlbC52YWx1ZVxuICAgICAgfVxuICAgICAgY29udGV4dC4kZW1pdCh0eXBlLCBldmVudClcbiAgICB9XG4gIH0pXG4gIHJldHVybiBldmVudE1hcFxufVxuIiwiaW1wb3J0IHsgdGhyb3R0bGUgfSBmcm9tICcuL2Z1bmMnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJlbnRTY3JvbGxlciAodm5vZGUpIHtcbiAgaWYgKCF2bm9kZSkgcmV0dXJuIG51bGxcbiAgaWYgKHZub2RlLndlZXhUeXBlID09PSAnc2Nyb2xsZXInIHx8IHZub2RlLndlZXhUeXBlID09PSAnbGlzdCcpIHtcbiAgICByZXR1cm4gdm5vZGVcbiAgfVxuICByZXR1cm4gZ2V0UGFyZW50U2Nyb2xsZXIodm5vZGUuJHBhcmVudClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0ludGVyc2VjdGlvbiAocmVjdCwgY3RSZWN0KSB7XG4gIHJldHVybiAocmVjdC5sZWZ0IDwgY3RSZWN0LnJpZ2h0ICYmIHJlY3QucmlnaHQgPiBjdFJlY3QubGVmdClcbiAgICAmJiAocmVjdC50b3AgPCBjdFJlY3QuYm90dG9tICYmIHJlY3QuYm90dG9tID4gY3RSZWN0LnRvcClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29tcG9uZW50VmlzaWJsZSAoY29tcG9uZW50KSB7XG4gIGlmIChjb21wb25lbnQuJGVsKSB7XG4gICAgY29uc3Qgc2Nyb2xsZXIgPSBnZXRQYXJlbnRTY3JvbGxlcihjb21wb25lbnQpXG4gICAgaWYgKHNjcm9sbGVyICYmIHNjcm9sbGVyLiRlbCkge1xuICAgICAgY29uc3QgdmlzaWJsZSA9IGhhc0ludGVyc2VjdGlvbihcbiAgICAgICAgY29tcG9uZW50LiRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgc2Nyb2xsZXIuJGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICApXG4gICAgICByZXR1cm4gdmlzaWJsZVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuLy8gVE9ETzogaW1wcm92ZSB0aGUgZWZmaWNpZW5jeVxuZXhwb3J0IGZ1bmN0aW9uIHdhdGNoQXBwZWFyIChjb250ZXh0KSB7XG4gIGlmICghY29udGV4dCkgcmV0dXJuIG51bGxcblxuICBjb250ZXh0LiRuZXh0VGljaygoKSA9PiB7XG4gICAgaWYgKGNvbnRleHQuJG9wdGlvbnMgJiYgY29udGV4dC4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzKSB7XG4gICAgICBjb25zdCBvbiA9IGNvbnRleHQuJG9wdGlvbnMuX3BhcmVudExpc3RlbmVyc1xuICAgICAgaWYgKG9uLmFwcGVhciB8fCBvbi5kaXNhcHBlYXIpIHtcbiAgICAgICAgY29udGV4dC5fdmlzaWJsZSA9IGlzQ29tcG9uZW50VmlzaWJsZShjb250ZXh0KVxuICAgICAgICBpZiAoY29udGV4dC5fdmlzaWJsZSkge1xuICAgICAgICAgIC8vIFRPRE86IGNyZWF0ZSBjdXN0b20gZXZlbnQgb2JqZWN0XG4gICAgICAgICAgb24uYXBwZWFyICYmIG9uLmFwcGVhci5mbih7fSlcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhyb3R0bGUoZXZlbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IHZpc2libGUgPSBpc0NvbXBvbmVudFZpc2libGUoY29udGV4dClcbiAgICAgICAgICBpZiAodmlzaWJsZSAhPT0gY29udGV4dC5fdmlzaWJsZSkge1xuICAgICAgICAgICAgY29udGV4dC5fdmlzaWJsZSA9IHZpc2libGVcbiAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVyID0gdmlzaWJsZSA/IG9uLmFwcGVhciA6IG9uLmRpc2FwcGVhclxuICAgICAgICAgICAgaWYgKGxpc3RlbmVyICYmIGxpc3RlbmVyLmZuKSB7XG4gICAgICAgICAgICAgIGxpc3RlbmVyLmZuKGV2ZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwKVxuXG4gICAgICAgIC8vIFRPRE86IG1vcmUgcmVsaWFibGVcbiAgICAgICAgY29uc3Qgc2Nyb2xsZXIgPSBnZXRQYXJlbnRTY3JvbGxlcihjb250ZXh0KVxuICAgICAgICBjb25zdCBlbGVtZW50ID0gKHNjcm9sbGVyICYmIHNjcm9sbGVyLiRlbCkgfHwgd2luZG93XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlciwgZmFsc2UpXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9mdW5jJ1xuZXhwb3J0ICogZnJvbSAnLi9ldmVudCdcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50J1xuXG4vKipcbiAqIENyZWF0ZSBhIGNhY2hlZCB2ZXJzaW9uIG9mIGEgcHVyZSBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlZCAoZm4pIHtcbiAgY29uc3QgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIHJldHVybiBmdW5jdGlvbiBjYWNoZWRGbiAoc3RyKSB7XG4gICAgY29uc3QgaGl0ID0gY2FjaGVbc3RyXVxuICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKVxuICB9XG59XG5cbi8qKlxuICogQ2FtZWxpemUgYSBoeXBoZW4tZGVsbWl0ZWQgc3RyaW5nLlxuICovXG5jb25zdCBjYW1lbGl6ZVJFID0gLy0oXFx3KS9nXG5leHBvcnQgY29uc3QgY2FtZWxpemUgPSBjYWNoZWQoc3RyID0+IHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGNhbWVsaXplUkUsIChfLCBjKSA9PiBjLnRvVXBwZXJDYXNlKCkpXG59KVxuXG4vKipcbiAqIENhcGl0YWxpemUgYSBzdHJpbmcuXG4gKi9cbmV4cG9ydCBjb25zdCBjYXBpdGFsaXplID0gY2FjaGVkKHN0ciA9PiB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSlcbn0pXG5cbi8qKlxuICogSHlwaGVuYXRlIGEgY2FtZWxDYXNlIHN0cmluZy5cbiAqL1xuY29uc3QgaHlwaGVuYXRlUkUgPSAvKFteLV0pKFtBLVpdKS9nXG5leHBvcnQgY29uc3QgaHlwaGVuYXRlID0gY2FjaGVkKHN0ciA9PiB7XG4gIHJldHVybiBzdHJcbiAgICAucmVwbGFjZShoeXBoZW5hdGVSRSwgJyQxLSQyJylcbiAgICAucmVwbGFjZShoeXBoZW5hdGVSRSwgJyQxLSQyJylcbiAgICAudG9Mb3dlckNhc2UoKVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsVG9LZWJhYiAobmFtZSkge1xuICBpZiAoIW5hbWUpIHsgcmV0dXJuICcnIH1cbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvKFtBLVpdKS9nLCBmdW5jdGlvbiAoZywgZzEpIHtcbiAgICByZXR1cm4gYC0ke2cxLnRvTG93ZXJDYXNlKCl9YFxuICB9KVxufVxuXG4vKipcbiAqIE1peCBwcm9wZXJ0aWVzIGludG8gdGFyZ2V0IG9iamVjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZCAodG8sIF9mcm9tKSB7XG4gIGZvciAoY29uc3Qga2V5IGluIF9mcm9tKSB7XG4gICAgdG9ba2V5XSA9IF9mcm9tW2tleV1cbiAgfVxuICByZXR1cm4gdG9cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFN0eWxlIChjc3MsIHN0eWxlSWQsIHJlcGxhY2UpIHtcbiAgbGV0IHN0eWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3R5bGVJZClcbiAgaWYgKHN0eWxlICYmIHJlcGxhY2UpIHtcbiAgICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKVxuICAgIHN0eWxlID0gbnVsbFxuICB9XG4gIGlmICghc3R5bGUpIHtcbiAgICBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJ1xuICAgIHN0eWxlSWQgJiYgKHN0eWxlLmlkID0gc3R5bGVJZClcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHN0eWxlKVxuICB9XG4gIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpXG59XG5cbi8qKlxuICogU3RyaWN0IG9iamVjdCB0eXBlIGNoZWNrLiBPbmx5IHJldHVybnMgdHJ1ZVxuICogZm9yIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0cy5cbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5jb25zdCB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcbmNvbnN0IE9CSkVDVF9TVFJJTkcgPSAnW29iamVjdCBPYmplY3RdJ1xuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3QgKG9iaikge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09PSBPQkpFQ1RfU1RSSU5HXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXh0RnJhbWUgKGNhbGxiYWNrKSB7XG4gIGNvbnN0IHJ1bm5lciA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgfHwgKGNiID0+IHNldFRpbWVvdXQoY2IsIDE2KSlcbiAgcnVubmVyKGNhbGxiYWNrKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9DU1NUZXh0IChvYmplY3QpIHtcbiAgbGV0IGNzc1RleHQgPSAnJ1xuICBpZiAob2JqZWN0KSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBjc3NUZXh0ICs9IGAke2h5cGhlbmF0ZShrZXkpfToke29iamVjdFtrZXldfTtgXG4gICAgfVxuICB9XG4gIHJldHVybiBjc3NUZXh0XG59XG4iLCJpbXBvcnQgeyBuZXh0RnJhbWUsIHRvQ1NTVGV4dCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5mdW5jdGlvbiB0cmFuc2l0aW9uT25jZSAodm5vZGUsIGNvbmZpZywgY2FsbGJhY2spIHtcbiAgY29uc3QgZHVyYXRpb24gPSBjb25maWcuZHVyYXRpb24gfHwgMTAwMCAvLyBtc1xuICBjb25zdCB0aW1pbmcgPSBjb25maWcudGltaW5nRnVuY3Rpb24gfHwgJ2Vhc2UnXG4gIGNvbnN0IGRlbGF5ID0gY29uZmlnLmRlbGF5IHx8IDAgIC8vIG1zXG5cbiAgLy8gVE9ETzogcGFyc2UgdHJhbnNpdGlvbiBwcm9wZXJ0aWVzXG4gIGNvbnN0IHRyYW5zaXRpb25WYWx1ZSA9IGBhbGwgJHtkdXJhdGlvbn1tcyAke3RpbWluZ30gJHtkZWxheX1tc2BcblxuICBjb25zdCBkb20gPSB2bm9kZS4kZWxcbiAgY29uc3QgdHJhbnNpdGlvbkVuZEhhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJraXRUcmFuc2l0aW9uRW5kJywgdHJhbnNpdGlvbkVuZEhhbmRsZXIpXG4gICAgZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0cmFuc2l0aW9uRW5kSGFuZGxlcilcbiAgICBkb20uc3R5bGUudHJhbnNpdGlvbiA9ICcnXG4gICAgZG9tLnN0eWxlLndlYmtpdFRyYW5zaXRpb24gPSAnJ1xuICAgIGNhbGxiYWNrKClcbiAgfVxuXG4gIGRvbS5zdHlsZS50cmFuc2l0aW9uID0gdHJhbnNpdGlvblZhbHVlXG4gIGRvbS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uID0gdHJhbnNpdGlvblZhbHVlXG4gIGRvbS5hZGRFdmVudExpc3RlbmVyKCd3ZWJraXRUcmFuc2l0aW9uRW5kJywgdHJhbnNpdGlvbkVuZEhhbmRsZXIpXG4gIGRvbS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdHJhbnNpdGlvbkVuZEhhbmRsZXIpXG5cbiAgbmV4dEZyYW1lKCgpID0+IHtcbiAgICBkb20uc3R5bGUuY3NzVGV4dCArPSB0b0NTU1RleHQoY29uZmlnLnN0eWxlcyB8fCB7fSlcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAvKipcbiAgICogdHJhbnNpdGlvblxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHZub2RlXG4gICAqIEBwYXJhbSAge09iamVjdH0gY29uZmlnXG4gICAqIEBwYXJhbSAge1N0cmluZ30gY2FsbGJhY2tcbiAgICovXG4gIHRyYW5zaXRpb24gKHZub2RlLCBjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgLy8gVE9ETzogTWFrZSBzdXJlIHRoZSB0cmFuc2l0aW9uIGlzIG9ubHkgcnVuIG9uY2VcbiAgICByZXR1cm4gdHJhbnNpdGlvbk9uY2Uodm5vZGUsIGNvbmZpZywgKCkgPT4ge1xuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKVxuICAgIH0pXG4gIH1cbn1cbiIsImltcG9ydCB7IGNhbWVsVG9LZWJhYiwgYXBwZW5kU3R5bGUgfSBmcm9tICcuLi91dGlscydcblxuZnVuY3Rpb24gZ2V0UGFyZW50U2Nyb2xsZXIgKHZub2RlKSB7XG4gIGlmICghdm5vZGUpIHJldHVybiBudWxsXG4gIGlmICh2bm9kZS53ZWV4VHlwZSA9PT0gJ3Njcm9sbGVyJyB8fCB2bm9kZS53ZWV4VHlwZSA9PT0gJ2xpc3QnKSB7XG4gICAgcmV0dXJuIHZub2RlXG4gIH1cbiAgcmV0dXJuIGdldFBhcmVudFNjcm9sbGVyKHZub2RlLiRwYXJlbnQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLyoqXG4gICAqIHNjcm9sbFRvRWxlbWVudFxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHZub2RlXG4gICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9ucyB7b2Zmc2V0Ok51bWJlcn1cbiAgICogICBwczogc2Nyb2xsLXRvIGhhcyAnZWFzZScgYW5kICdkdXJhdGlvbicobXMpIGFzIG9wdGlvbnMuXG4gICAqL1xuICBzY3JvbGxUb0VsZW1lbnQ6IGZ1bmN0aW9uICh2bm9kZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHNjcm9sbGVyID0gZ2V0UGFyZW50U2Nyb2xsZXIodm5vZGUpXG5cbiAgICBpZiAoc2Nyb2xsZXIgJiYgc2Nyb2xsZXIuJGVsICYmIHZub2RlLiRlbCkge1xuICAgICAgbGV0IG9mZnNldCA9IHZub2RlLiRlbC5vZmZzZXRUb3BcblxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgb2Zmc2V0ICs9IE51bWJlcihvcHRpb25zLm9mZnNldCkgfHwgMFxuICAgICAgfVxuICAgICAgZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbVnVlIFJlbmRlcl0gVGhlIHNlY29uZCBwYXJhbWV0ZXIgb2YgXCJzY3JvbGxUb0VsZW1lbnRcIiBpcyByZXF1aXJlZCwgJ1xuICAgICAgICAgICsgJ290aGVyd2lzZSBpdCBtYXkgbm90IHdvcmtzIHdlbGwgb24gbmF0aXZlLicpXG4gICAgICB9XG5cbiAgICAgIC8vIFRPRE86IGFkZCBhbmltYXRpb25cbiAgICAgIHNjcm9sbGVyLiRlbC5zY3JvbGxUb3AgPSBvZmZzZXRcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIGdldENvbXBvbmVudFJlY3RcbiAgICogQHBhcmFtIHtTdHJpbmd9IHZub2RlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqL1xuICBnZXRDb21wb25lbnRSZWN0OiBmdW5jdGlvbiAodm5vZGUsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgaW5mbyA9IHsgcmVzdWx0OiBmYWxzZSB9XG5cbiAgICBpZiAodm5vZGUgJiYgdm5vZGUgPT09ICd2aWV3cG9ydCcpIHtcbiAgICAgIGluZm8ucmVzdWx0ID0gdHJ1ZVxuICAgICAgaW5mby5zaXplID0ge1xuICAgICAgICB3aWR0aDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgcmlnaHQ6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICAgICAgYm90dG9tOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHZub2RlICYmIHZub2RlLiRlbCkge1xuICAgICAgaW5mby5yZXN1bHQgPSB0cnVlXG4gICAgICBpbmZvLnNpemUgPSB2bm9kZS4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlID0gaW5mby5yZXN1bHQgPyBpbmZvIDoge1xuICAgICAgcmVzdWx0OiBmYWxzZSxcbiAgICAgIGVyck1zZzogJ0lsbGVnYWwgcGFyYW1ldGVyJ1xuICAgIH1cblxuICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKG1lc3NhZ2UpXG4gICAgcmV0dXJuIG1lc3NhZ2VcbiAgfSxcblxuICAvKipcbiAgICogZm9yIGFkZGluZyBmb250RmFjZVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IGZvbnRGYWNlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzdHlsZXMgcnVsZXNcbiAgICovXG4gIGFkZFJ1bGU6IGZ1bmN0aW9uIChrZXksIHN0eWxlcykge1xuICAgIGtleSA9IGNhbWVsVG9LZWJhYihrZXkpXG4gICAgbGV0IHN0eWxlc1RleHQgPSAnJ1xuICAgIGZvciAoY29uc3QgayBpbiBzdHlsZXMpIHtcbiAgICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgc3R5bGVzVGV4dCArPSBjYW1lbFRvS2ViYWIoaykgKyAnOicgKyBzdHlsZXNba10gKyAnOydcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgc3R5bGVUZXh0ID0gYEAke2tleX17JHtzdHlsZXNUZXh0fX1gXG4gICAgYXBwZW5kU3R5bGUoc3R5bGVUZXh0LCAnZG9tLWFkZGVkLXJ1bGVzJylcbiAgfVxufVxuIiwiY29uc3QgcXVldWUgPSBbXVxubGV0IGlzUHJvY2Vzc2luZyA9IGZhbHNlXG5sZXQgdG9hc3RXaW5cbmNvbnN0IFRPQVNUX1dJTl9DTEFTU19OQU1FID0gJ3dlZXgtdG9hc3QnXG5cbmNvbnN0IERFRkFVTFRfRFVSQVRJT04gPSAwLjhcblxuZnVuY3Rpb24gc2hvd1RvYXN0V2luZG93IChtc2csIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGhhbmRsZVRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdG9hc3RXaW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGhhbmRsZVRyYW5zaXRpb25FbmQpXG4gICAgdG9hc3RXaW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2Via2l0VHJhbnNpdGlvbkVuZCcsIGhhbmRsZVRyYW5zaXRpb25FbmQpXG4gICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKVxuICB9XG4gIGlmICghdG9hc3RXaW4pIHtcbiAgICB0b2FzdFdpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdG9hc3RXaW4uY2xhc3NMaXN0LmFkZChUT0FTVF9XSU5fQ0xBU1NfTkFNRSwgJ2hpZGUnKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9hc3RXaW4pXG4gIH1cbiAgdG9hc3RXaW4udGV4dENvbnRlbnQgPSBtc2dcbiAgdG9hc3RXaW4uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGhhbmRsZVRyYW5zaXRpb25FbmQpXG4gIHRvYXN0V2luLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBoYW5kbGVUcmFuc2l0aW9uRW5kKVxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICB0b2FzdFdpbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgfSwgMClcbn1cblxuZnVuY3Rpb24gaGlkZVRvYXN0V2luZG93IChjYWxsYmFjaykge1xuICBjb25zdCBoYW5kbGVUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gKCkge1xuICAgIHRvYXN0V2luLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBoYW5kbGVUcmFuc2l0aW9uRW5kKVxuICAgIHRvYXN0V2luLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBoYW5kbGVUcmFuc2l0aW9uRW5kKVxuICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKClcbiAgfVxuICBpZiAoIXRvYXN0V2luKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdG9hc3RXaW4uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGhhbmRsZVRyYW5zaXRpb25FbmQpXG4gIHRvYXN0V2luLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBoYW5kbGVUcmFuc2l0aW9uRW5kKVxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICB0b2FzdFdpbi5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgfSwgMClcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwdXNoOiBmdW5jdGlvbiAobXNnLCBkdXJhdGlvbikge1xuICAgIHF1ZXVlLnB1c2goe1xuICAgICAgbXNnOiBtc2csXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24gfHwgREVGQVVMVF9EVVJBVElPTlxuICAgIH0pXG4gICAgdGhpcy5zaG93KClcbiAgfSxcblxuICBzaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXNcblxuICAgIC8vIEFsbCBtZXNzYWdlcyBoYWQgYmVlbiB0b2FzdGVkIGFscmVhZHksIHNvIHJlbW92ZSB0aGUgdG9hc3Qgd2luZG93LFxuICAgIGlmICghcXVldWUubGVuZ3RoKSB7XG4gICAgICB0b2FzdFdpbiAmJiB0b2FzdFdpbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRvYXN0V2luKVxuICAgICAgdG9hc3RXaW4gPSBudWxsXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyB0aGUgcHJldmlvdXMgdG9hc3QgaXMgbm90IGVuZGVkIHlldC5cbiAgICBpZiAoaXNQcm9jZXNzaW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaXNQcm9jZXNzaW5nID0gdHJ1ZVxuXG4gICAgY29uc3QgdG9hc3RJbmZvID0gcXVldWUuc2hpZnQoKVxuICAgIHNob3dUb2FzdFdpbmRvdyh0b2FzdEluZm8ubXNnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaGlkZVRvYXN0V2luZG93KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpc1Byb2Nlc3NpbmcgPSBmYWxzZVxuICAgICAgICAgIHRoYXQuc2hvdygpXG4gICAgICAgIH0pXG4gICAgICB9LCB0b2FzdEluZm8uZHVyYXRpb24gKiAxMDAwKVxuICAgIH0pXG4gIH1cbn1cbiIsIlxuLy8gdGhlcmUgd2lsbCBiZSBvbmx5IG9uZSBpbnN0YW5jZSBvZiBtb2RhbC5cbmNvbnN0IE1PREFMX1dSQVBfQ0xBU1MgPSAnd2VleC1tb2RhbC13cmFwJ1xuY29uc3QgTU9EQUxfTk9ERV9DTEFTUyA9ICd3ZWV4LW1vZGFsLW5vZGUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGFsICgpIHtcbiAgdGhpcy53cmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihNT0RBTF9XUkFQX0NMQVNTKVxuICB0aGlzLm5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKE1PREFMX05PREVfQ0xBU1MpXG4gIGlmICghdGhpcy53cmFwKSB7XG4gICAgdGhpcy5jcmVhdGVXcmFwKClcbiAgfVxuICBpZiAoIXRoaXMubm9kZSkge1xuICAgIHRoaXMuY3JlYXRlTm9kZSgpXG4gIH1cbiAgdGhpcy5jbGVhck5vZGUoKVxuICB0aGlzLmNyZWF0ZU5vZGVDb250ZW50KClcbiAgdGhpcy5iaW5kRXZlbnRzKClcbn1cblxuTW9kYWwucHJvdG90eXBlID0ge1xuXG4gIHNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLndyYXAuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gIH0sXG5cbiAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy53cmFwKVxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKVxuICAgIHRoaXMud3JhcCA9IG51bGxcbiAgICB0aGlzLm5vZGUgPSBudWxsXG4gIH0sXG5cbiAgY3JlYXRlV3JhcDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMud3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy53cmFwLmNsYXNzTmFtZSA9IE1PREFMX1dSQVBfQ0xBU1NcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMud3JhcClcbiAgfSxcblxuICBjcmVhdGVOb2RlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChNT0RBTF9OT0RFX0NMQVNTLCAnaGlkZScpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm5vZGUpXG4gIH0sXG5cbiAgY2xlYXJOb2RlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5ub2RlLmlubmVySFRNTCA9ICcnXG4gIH0sXG5cbiAgY3JlYXRlTm9kZUNvbnRlbnQ6IGZ1bmN0aW9uICgpIHtcblxuICAgIC8vIGRvIG5vdGhpbmcuXG4gICAgLy8gY2hpbGQgY2xhc3NlcyBjYW4gb3ZlcnJpZGUgdGhpcyBtZXRob2QuXG4gIH0sXG5cbiAgYmluZEV2ZW50czogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMud3JhcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgTW9kYWwgZnJvbSAnLi9tb2RhbCdcblxuY29uc3QgQ09OVEVOVF9DTEFTUyA9ICdjb250ZW50J1xuY29uc3QgTVNHX0NMQVNTID0gJ2NvbnRlbnQtbXNnJ1xuY29uc3QgQlVUVE9OX0dST1VQX0NMQVNTID0gJ2J0bi1ncm91cCdcbmNvbnN0IEJVVFRPTl9DTEFTUyA9ICdidG4nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFsZXJ0IChjb25maWcpIHtcbiAgdGhpcy5tc2cgPSBjb25maWcubWVzc2FnZSB8fCAnJ1xuICB0aGlzLmNhbGxiYWNrID0gY29uZmlnLmNhbGxiYWNrXG4gIHRoaXMub2tUaXRsZSA9IGNvbmZpZy5va1RpdGxlIHx8ICdPSydcbiAgTW9kYWwuY2FsbCh0aGlzKVxuICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZCgnd2VleC1hbGVydCcpXG59XG5cbkFsZXJ0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTW9kYWwucHJvdG90eXBlKVxuXG5BbGVydC5wcm90b3R5cGUuY3JlYXRlTm9kZUNvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoQ09OVEVOVF9DTEFTUylcbiAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGNvbnRlbnQpXG5cbiAgY29uc3QgbXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbXNnLmNsYXNzTGlzdC5hZGQoTVNHX0NMQVNTKVxuICBtc2cuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5tc2cpKVxuICBjb250ZW50LmFwcGVuZENoaWxkKG1zZylcblxuICBjb25zdCBidXR0b25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGJ1dHRvbkdyb3VwLmNsYXNzTGlzdC5hZGQoQlVUVE9OX0dST1VQX0NMQVNTKVxuICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoYnV0dG9uR3JvdXApXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKEJVVFRPTl9DTEFTUywgJ2FsZXJ0LW9rJylcbiAgYnV0dG9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMub2tUaXRsZSkpXG4gIGJ1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGJ1dHRvbilcbn1cblxuQWxlcnQucHJvdG90eXBlLmJpbmRFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gIE1vZGFsLnByb3RvdHlwZS5iaW5kRXZlbnRzLmNhbGwodGhpcylcbiAgY29uc3QgYnV0dG9uID0gdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IoJy4nICsgQlVUVE9OX0NMQVNTKVxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5kZXN0cm95KClcbiAgICB0aGlzLmNhbGxiYWNrICYmIHRoaXMuY2FsbGJhY2soKVxuICB9LmJpbmQodGhpcykpXG59XG4iLCJpbXBvcnQgTW9kYWwgZnJvbSAnLi9tb2RhbCdcblxuY29uc3QgQ09OVEVOVF9DTEFTUyA9ICdjb250ZW50J1xuY29uc3QgTVNHX0NMQVNTID0gJ2NvbnRlbnQtbXNnJ1xuY29uc3QgQlVUVE9OX0dST1VQX0NMQVNTID0gJ2J0bi1ncm91cCdcbmNvbnN0IEJVVFRPTl9DTEFTUyA9ICdidG4nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbmZpcm0gKGNvbmZpZykge1xuICB0aGlzLm1zZyA9IGNvbmZpZy5tZXNzYWdlIHx8ICcnXG4gIHRoaXMuY2FsbGJhY2sgPSBjb25maWcuY2FsbGJhY2tcbiAgdGhpcy5va1RpdGxlID0gY29uZmlnLm9rVGl0bGUgfHwgJ09LJ1xuICB0aGlzLmNhbmNlbFRpdGxlID0gY29uZmlnLmNhbmNlbFRpdGxlIHx8ICdDYW5jZWwnXG4gIE1vZGFsLmNhbGwodGhpcylcbiAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoJ3dlZXgtY29uZmlybScpXG59XG5cbkNvbmZpcm0ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShNb2RhbC5wcm90b3R5cGUpXG5cbkNvbmZpcm0ucHJvdG90eXBlLmNyZWF0ZU5vZGVDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKENPTlRFTlRfQ0xBU1MpXG4gIHRoaXMubm9kZS5hcHBlbmRDaGlsZChjb250ZW50KVxuXG4gIGNvbnN0IG1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIG1zZy5jbGFzc0xpc3QuYWRkKE1TR19DTEFTUylcbiAgbXNnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMubXNnKSlcbiAgY29udGVudC5hcHBlbmRDaGlsZChtc2cpXG5cbiAgY29uc3QgYnV0dG9uR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBidXR0b25Hcm91cC5jbGFzc0xpc3QuYWRkKEJVVFRPTl9HUk9VUF9DTEFTUylcbiAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGJ1dHRvbkdyb3VwKVxuICBjb25zdCBidG5PayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGJ0bk9rLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMub2tUaXRsZSkpXG4gIGJ0bk9rLmNsYXNzTGlzdC5hZGQoJ2J0bi1vaycsIEJVVFRPTl9DTEFTUylcbiAgY29uc3QgYnRuQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYnRuQ2FuY2VsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMuY2FuY2VsVGl0bGUpKVxuICBidG5DYW5jZWwuY2xhc3NMaXN0LmFkZCgnYnRuLWNhbmNlbCcsIEJVVFRPTl9DTEFTUylcbiAgYnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoYnRuT2spXG4gIGJ1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGJ0bkNhbmNlbClcbiAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGJ1dHRvbkdyb3VwKVxufVxuXG5Db25maXJtLnByb3RvdHlwZS5iaW5kRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICBNb2RhbC5wcm90b3R5cGUuYmluZEV2ZW50cy5jYWxsKHRoaXMpXG4gIGNvbnN0IGJ0bk9rID0gdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IoJy4nICsgQlVUVE9OX0NMQVNTICsgJy5idG4tb2snKVxuICBjb25zdCBidG5DYW5jZWwgPSB0aGlzLm5vZGUucXVlcnlTZWxlY3RvcignLicgKyBCVVRUT05fQ0xBU1MgKyAnLmJ0bi1jYW5jZWwnKVxuICBidG5Pay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmRlc3Ryb3koKVxuICAgIHRoaXMuY2FsbGJhY2sgJiYgdGhpcy5jYWxsYmFjayh0aGlzLm9rVGl0bGUpXG4gIH0uYmluZCh0aGlzKSlcbiAgYnRuQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZGVzdHJveSgpXG4gICAgdGhpcy5jYWxsYmFjayAmJiB0aGlzLmNhbGxiYWNrKHRoaXMuY2FuY2VsVGl0bGUpXG4gIH0uYmluZCh0aGlzKSlcbn1cbiIsImltcG9ydCBNb2RhbCBmcm9tICcuL21vZGFsJ1xuXG5jb25zdCBDT05URU5UX0NMQVNTID0gJ2NvbnRlbnQnXG5jb25zdCBNU0dfQ0xBU1MgPSAnY29udGVudC1tc2cnXG5jb25zdCBCVVRUT05fR1JPVVBfQ0xBU1MgPSAnYnRuLWdyb3VwJ1xuY29uc3QgQlVUVE9OX0NMQVNTID0gJ2J0bidcbmNvbnN0IElOUFVUX1dSQVBfQ0xBU1MgPSAnaW5wdXQtd3JhcCdcbmNvbnN0IElOUFVUX0NMQVNTID0gJ2lucHV0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9tcHQgKGNvbmZpZykge1xuICB0aGlzLm1zZyA9IGNvbmZpZy5tZXNzYWdlIHx8ICcnXG4gIHRoaXMuZGVmYXVsdE1zZyA9IGNvbmZpZy5kZWZhdWx0IHx8ICcnXG4gIHRoaXMuY2FsbGJhY2sgPSBjb25maWcuY2FsbGJhY2tcbiAgdGhpcy5va1RpdGxlID0gY29uZmlnLm9rVGl0bGUgfHwgJ09LJ1xuICB0aGlzLmNhbmNlbFRpdGxlID0gY29uZmlnLmNhbmNlbFRpdGxlIHx8ICdDYW5jZWwnXG4gIE1vZGFsLmNhbGwodGhpcylcbiAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoJ3dlZXgtcHJvbXB0Jylcbn1cblxuUHJvbXB0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTW9kYWwucHJvdG90eXBlKVxuXG5Qcm9tcHQucHJvdG90eXBlLmNyZWF0ZU5vZGVDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKENPTlRFTlRfQ0xBU1MpXG4gIHRoaXMubm9kZS5hcHBlbmRDaGlsZChjb250ZW50KVxuXG4gIGNvbnN0IG1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIG1zZy5jbGFzc0xpc3QuYWRkKE1TR19DTEFTUylcbiAgbXNnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMubXNnKSlcbiAgY29udGVudC5hcHBlbmRDaGlsZChtc2cpXG5cbiAgY29uc3QgaW5wdXRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgaW5wdXRXcmFwLmNsYXNzTGlzdC5hZGQoSU5QVVRfV1JBUF9DTEFTUylcbiAgY29udGVudC5hcHBlbmRDaGlsZChpbnB1dFdyYXApXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICBpbnB1dC5jbGFzc0xpc3QuYWRkKElOUFVUX0NMQVNTKVxuICBpbnB1dC50eXBlID0gJ3RleHQnXG4gIGlucHV0LmF1dG9mb2N1cyA9IHRydWVcbiAgaW5wdXQucGxhY2Vob2xkZXIgPSB0aGlzLmRlZmF1bHRNc2dcbiAgaW5wdXRXcmFwLmFwcGVuZENoaWxkKGlucHV0KVxuXG4gIGNvbnN0IGJ1dHRvbkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYnV0dG9uR3JvdXAuY2xhc3NMaXN0LmFkZChCVVRUT05fR1JPVVBfQ0xBU1MpXG4gIGNvbnN0IGJ0bk9rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYnRuT2suYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5va1RpdGxlKSlcbiAgYnRuT2suY2xhc3NMaXN0LmFkZCgnYnRuLW9rJywgQlVUVE9OX0NMQVNTKVxuICBjb25zdCBidG5DYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBidG5DYW5jZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5jYW5jZWxUaXRsZSkpXG4gIGJ0bkNhbmNlbC5jbGFzc0xpc3QuYWRkKCdidG4tY2FuY2VsJywgQlVUVE9OX0NMQVNTKVxuICBidXR0b25Hcm91cC5hcHBlbmRDaGlsZChidG5PaylcbiAgYnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoYnRuQ2FuY2VsKVxuICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoYnV0dG9uR3JvdXApXG59XG5cblByb21wdC5wcm90b3R5cGUuYmluZEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgTW9kYWwucHJvdG90eXBlLmJpbmRFdmVudHMuY2FsbCh0aGlzKVxuICBjb25zdCBidG5PayA9IHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKCcuJyArIEJVVFRPTl9DTEFTUyArICcuYnRuLW9rJylcbiAgY29uc3QgYnRuQ2FuY2VsID0gdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IoJy4nICsgQlVUVE9OX0NMQVNTICsgJy5idG4tY2FuY2VsJylcbiAgY29uc3QgdGhhdCA9IHRoaXNcbiAgYnRuT2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZVxuICAgIHRoaXMuZGVzdHJveSgpXG4gICAgdGhpcy5jYWxsYmFjayAmJiB0aGlzLmNhbGxiYWNrKHtcbiAgICAgIHJlc3VsdDogdGhhdC5va1RpdGxlLFxuICAgICAgZGF0YTogdmFsXG4gICAgfSlcbiAgfS5iaW5kKHRoaXMpKVxuICBidG5DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZVxuICAgIHRoaXMuZGVzdHJveSgpXG4gICAgdGhpcy5jYWxsYmFjayAmJiB0aGlzLmNhbGxiYWNrKHtcbiAgICAgIHJlc3VsdDogdGhhdC5jYW5jZWxUaXRsZSxcbiAgICAgIGRhdGE6IHZhbFxuICAgIH0pXG4gIH0uYmluZCh0aGlzKSlcbn1cbiIsImltcG9ydCB0b2FzdCBmcm9tICcuL3RvYXN0J1xuaW1wb3J0IEFsZXJ0IGZyb20gJy4vYWxlcnQnXG5pbXBvcnQgQ29uZmlybSBmcm9tICcuL2NvbmZpcm0nXG5pbXBvcnQgUHJvbXB0IGZyb20gJy4vcHJvbXB0J1xuXG4vLyBUT0RPOiByZXdyaXRlIHRoZSBtb2RhbCBzdHlsZXNcbmV4cG9ydCBkZWZhdWx0IHtcblxuICAvLyBkdXJhdGlvbjogZGVmYXVsdCBpcyAwLjggc2Vjb25kcy5cbiAgdG9hc3Q6IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICB0b2FzdC5wdXNoKGNvbmZpZy5tZXNzYWdlLCBjb25maWcuZHVyYXRpb24pXG4gIH0sXG5cbiAgLy8gY29uZmlnOlxuICAvLyAgLSBtZXNzYWdlOiBzdHJpbmdcbiAgLy8gIC0gb2tUaXRsZTogdGl0bGUgb2Ygb2sgYnV0dG9uXG4gIC8vICAtIGNhbGxiYWNrXG4gIGFsZXJ0OiBmdW5jdGlvbiAoY29uZmlnLCBjYWxsYmFjaykge1xuICAgIGNvbmZpZy5jYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKClcbiAgICB9XG4gICAgbmV3IEFsZXJ0KGNvbmZpZykuc2hvdygpXG4gIH0sXG5cbiAgLy8gY29uZmlnOlxuICAvLyAgLSBtZXNzYWdlOiBzdHJpbmdcbiAgLy8gIC0gb2tUaXRsZTogdGl0bGUgb2Ygb2sgYnV0dG9uXG4gIC8vICAtIGNhbmNlbFRpdGxlOiB0aXRsZSBvZiBjYW5jZWwgYnV0dG9uXG4gIC8vICAtIGNhbGxiYWNrXG4gIGNvbmZpcm06IGZ1bmN0aW9uIChjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgY29uZmlnLmNhbGxiYWNrID0gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sodmFsKVxuICAgIH1cbiAgICBuZXcgQ29uZmlybShjb25maWcpLnNob3coKVxuICB9LFxuXG4gIC8vIGNvbmZpZzpcbiAgLy8gIC0gbWVzc2FnZTogc3RyaW5nXG4gIC8vICAtIG9rVGl0bGU6IHRpdGxlIG9mIG9rIGJ1dHRvblxuICAvLyAgLSBjYW5jZWxUaXRsZTogdGl0bGUgb2YgY2FuY2VsIGJ1dHRvblxuICAvLyAgLSBjYWxsYmFja1xuICBwcm9tcHQ6IGZ1bmN0aW9uIChjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgY29uZmlnLmNhbGxiYWNrID0gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sodmFsKVxuICAgIH1cbiAgICBuZXcgUHJvbXB0KGNvbmZpZykuc2hvdygpXG4gIH1cbn1cbiIsIi8qKlxuICogTmF2aWdhdG9yIG1vZHVsZVxuICovXG5cbi8vIFRPRE86IGNvbmZpZy5hbmltYXRlZFxuZXhwb3J0IGRlZmF1bHQge1xuICBwdXNoOiBmdW5jdGlvbiAoY29uZmlnLCBjYWxsYmFjaykge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gY29uZmlnLnVybFxuICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKClcbiAgfSxcblxuICBwb3A6IGZ1bmN0aW9uIChjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKVxuICB9XG59XG4iLCIvKipcbiAqIFdlYnZpZXcgbW9kdWxlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnb0JhY2sgKHZub2RlKSB7XG4gICAgaWYgKHZub2RlICYmIHR5cGVvZiB2bm9kZS5nb0JhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZub2RlLmdvQmFjaygpXG4gICAgfVxuICB9LFxuICBnb0ZvcndhcmQgKHZub2RlKSB7XG4gICAgaWYgKHZub2RlICYmIHR5cGVvZiB2bm9kZS5nb0ZvcndhcmQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZub2RlLmdvRm9yd2FyZCgpXG4gICAgfVxuICB9LFxuICByZWxvYWQgKHZub2RlKSB7XG4gICAgaWYgKHZub2RlICYmIHR5cGVvZiB2bm9kZS5yZWxvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZub2RlLnJlbG9hZCgpXG4gICAgfVxuICB9XG59XG4iLCIvLyBtb2R1bGVzIGZyb20gcmVuZGVyL2Jyb3dlc3JcbmltcG9ydCBFdmVudCBmcm9tICcuLi8uLi9icm93c2VyL2V4dGVuZC9hcGkvZXZlbnQnXG5pbXBvcnQgR2VvbG9jYXRpb24gZnJvbSAnLi4vLi4vYnJvd3Nlci9leHRlbmQvYXBpL2dlb2xvY2F0aW9uJ1xuaW1wb3J0IFBhZ2VJbmZvIGZyb20gJy4uLy4uL2Jyb3dzZXIvZXh0ZW5kL2FwaS9wYWdlSW5mbydcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4uLy4uL2Jyb3dzZXIvZXh0ZW5kL2FwaS9zdG9yYWdlJ1xuaW1wb3J0IFN0cmVhbSBmcm9tICcuLi8uLi9icm93c2VyL2V4dGVuZC9hcGkvc3RyZWFtJ1xuaW1wb3J0IENsaXBib2FyZCBmcm9tICcuLi8uLi9icm93c2VyL2V4dGVuZC9hcGkvY2xpcGJvYXJkJ1xuXG4vLyBjdXN0b20gbW9kdWxlc1xuaW1wb3J0IGFuaW1hdGlvbiBmcm9tICcuL2FuaW1hdGlvbidcbmltcG9ydCBkb20gZnJvbSAnLi9kb20nXG5pbXBvcnQgbW9kYWwgZnJvbSAnLi9tb2RhbCdcbmltcG9ydCBuYXZpZ2F0b3IgZnJvbSAnLi9uYXZpZ2F0b3InXG5pbXBvcnQgd2VidmlldyBmcm9tICcuL3dlYnZpZXcnXG5cbmNvbnN0IG1vZHVsZXMgPSB7XG4gIGFuaW1hdGlvbixcbiAgZG9tLFxuICBtb2RhbCxcbiAgbmF2aWdhdG9yLFxuICB3ZWJ2aWV3XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlV2VleE1vZHVsZSAobmFtZSkge1xuICBpZiAobW9kdWxlc1tuYW1lXSkge1xuICAgIHJldHVybiBtb2R1bGVzW25hbWVdXG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQgKHdlZXgpIHtcbiAgd2VleC5pbnN0YWxsKEV2ZW50KVxuICB3ZWV4Lmluc3RhbGwoR2VvbG9jYXRpb24pXG4gIHdlZXguaW5zdGFsbChQYWdlSW5mbylcbiAgd2VleC5pbnN0YWxsKFN0b3JhZ2UpXG4gIHdlZXguaW5zdGFsbChTdHJlYW0pXG4gIHdlZXguaW5zdGFsbChDbGlwYm9hcmQpXG59XG4iLCIodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpICYmICh3aW5kb3cgPSB7Y3RybDoge30sIGxpYjoge319KTshd2luZG93LmN0cmwgJiYgKHdpbmRvdy5jdHJsID0ge30pOyF3aW5kb3cubGliICYmICh3aW5kb3cubGliID0ge30pOyFmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoYSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJ2YWxcIix7dmFsdWU6YS50b1N0cmluZygpLGVudW1lcmFibGU6ITB9KSx0aGlzLmd0PWZ1bmN0aW9uKGEpe3JldHVybiBjLmNvbXBhcmUodGhpcyxhKT4wfSx0aGlzLmd0ZT1mdW5jdGlvbihhKXtyZXR1cm4gYy5jb21wYXJlKHRoaXMsYSk+PTB9LHRoaXMubHQ9ZnVuY3Rpb24oYSl7cmV0dXJuIGMuY29tcGFyZSh0aGlzLGEpPDB9LHRoaXMubHRlPWZ1bmN0aW9uKGEpe3JldHVybiBjLmNvbXBhcmUodGhpcyxhKTw9MH0sdGhpcy5lcT1mdW5jdGlvbihhKXtyZXR1cm4gMD09PWMuY29tcGFyZSh0aGlzLGEpfX1iLmVudj1iLmVudnx8e30sYy5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx9LGMucHJvdG90eXBlLnZhbHVlT2Y9ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcy52YWwuc3BsaXQoXCIuXCIpLGI9W10sYz0wO2M8YS5sZW5ndGg7YysrKXt2YXIgZD1wYXJzZUludChhW2NdLDEwKTtpc05hTihkKSYmKGQ9MCk7dmFyIGU9ZC50b1N0cmluZygpO2UubGVuZ3RoPDUmJihlPUFycmF5KDYtZS5sZW5ndGgpLmpvaW4oXCIwXCIpK2UpLGIucHVzaChlKSwxPT09Yi5sZW5ndGgmJmIucHVzaChcIi5cIil9cmV0dXJuIHBhcnNlRmxvYXQoYi5qb2luKFwiXCIpKX0sYy5jb21wYXJlPWZ1bmN0aW9uKGEsYil7YT1hLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpLGI9Yi50b1N0cmluZygpLnNwbGl0KFwiLlwiKTtmb3IodmFyIGM9MDtjPGEubGVuZ3RofHxjPGIubGVuZ3RoO2MrKyl7dmFyIGQ9cGFyc2VJbnQoYVtjXSwxMCksZT1wYXJzZUludChiW2NdLDEwKTtpZih3aW5kb3cuaXNOYU4oZCkmJihkPTApLHdpbmRvdy5pc05hTihlKSYmKGU9MCksZT5kKXJldHVybi0xO2lmKGQ+ZSlyZXR1cm4gMX1yZXR1cm4gMH0sYi52ZXJzaW9uPWZ1bmN0aW9uKGEpe3JldHVybiBuZXcgYyhhKX19KHdpbmRvdyx3aW5kb3cubGlifHwod2luZG93LmxpYj17fSkpLGZ1bmN0aW9uKGEsYil7Yi5lbnY9Yi5lbnZ8fHt9O3ZhciBjPWEubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoL15cXD8vLFwiXCIpO2lmKGIuZW52LnBhcmFtcz17fSxjKWZvcih2YXIgZD1jLnNwbGl0KFwiJlwiKSxlPTA7ZTxkLmxlbmd0aDtlKyspe2RbZV09ZFtlXS5zcGxpdChcIj1cIik7dHJ5e2IuZW52LnBhcmFtc1tkW2VdWzBdXT1kZWNvZGVVUklDb21wb25lbnQoZFtlXVsxXSl9Y2F0Y2goZil7Yi5lbnYucGFyYW1zW2RbZV1bMF1dPWRbZV1bMV19fX0od2luZG93LHdpbmRvdy5saWJ8fCh3aW5kb3cubGliPXt9KSksZnVuY3Rpb24oYSxiKXtiLmVudj1iLmVudnx8e307dmFyIGMsZD1hLm5hdmlnYXRvci51c2VyQWdlbnQ7aWYoYz1kLm1hdGNoKC9XaW5kb3dzXFxzUGhvbmVcXHMoPzpPU1xccyk/KFtcXGRcXC5dKykvKSliLmVudi5vcz17bmFtZTpcIldpbmRvd3MgUGhvbmVcIixpc1dpbmRvd3NQaG9uZTohMCx2ZXJzaW9uOmNbMV19O2Vsc2UgaWYoZC5tYXRjaCgvU2FmYXJpLykmJihjPWQubWF0Y2goL0FuZHJvaWRbXFxzXFwvXShbXFxkXFwuXSspLykpKWIuZW52Lm9zPXt2ZXJzaW9uOmNbMV19LGQubWF0Y2goL01vYmlsZVxccytTYWZhcmkvKT8oYi5lbnYub3MubmFtZT1cIkFuZHJvaWRcIixiLmVudi5vcy5pc0FuZHJvaWQ9ITApOihiLmVudi5vcy5uYW1lPVwiQW5kcm9pZFBhZFwiLGIuZW52Lm9zLmlzQW5kcm9pZFBhZD0hMCk7ZWxzZSBpZihjPWQubWF0Y2goLyhpUGhvbmV8aVBhZHxpUG9kKS8pKXt2YXIgZT1jWzFdO2M9ZC5tYXRjaCgvT1MgKFtcXGRfXFwuXSspIGxpa2UgTWFjIE9TIFgvKSxiLmVudi5vcz17bmFtZTplLGlzSVBob25lOlwiaVBob25lXCI9PT1lfHxcImlQb2RcIj09PWUsaXNJUGFkOlwiaVBhZFwiPT09ZSxpc0lPUzohMCx2ZXJzaW9uOmNbMV0uc3BsaXQoXCJfXCIpLmpvaW4oXCIuXCIpfX1lbHNlIGIuZW52Lm9zPXtuYW1lOlwidW5rbm93blwiLHZlcnNpb246XCIwLjAuMFwifTtiLnZlcnNpb24mJihiLmVudi5vcy52ZXJzaW9uPWIudmVyc2lvbihiLmVudi5vcy52ZXJzaW9uKSl9KHdpbmRvdyx3aW5kb3cubGlifHwod2luZG93LmxpYj17fSkpLGZ1bmN0aW9uKGEsYil7Yi5lbnY9Yi5lbnZ8fHt9O3ZhciBjLGQ9YS5uYXZpZ2F0b3IudXNlckFnZW50OyhjPWQubWF0Y2goLyg/OlVDV0VCfFVDQnJvd3NlclxcLykoW1xcZFxcLl0rKS8pKT9iLmVudi5icm93c2VyPXtuYW1lOlwiVUNcIixpc1VDOiEwLHZlcnNpb246Y1sxXX06KGM9ZC5tYXRjaCgvTVFRQnJvd3NlclxcLyhbXFxkXFwuXSspLykpP2IuZW52LmJyb3dzZXI9e25hbWU6XCJRUVwiLGlzUVE6ITAsdmVyc2lvbjpjWzFdfTooYz1kLm1hdGNoKC9GaXJlZm94XFwvKFtcXGRcXC5dKykvKSk/Yi5lbnYuYnJvd3Nlcj17bmFtZTpcIkZpcmVmb3hcIixpc0ZpcmVmb3g6ITAsdmVyc2lvbjpjWzFdfTooYz1kLm1hdGNoKC9NU0lFXFxzKFtcXGRcXC5dKykvKSl8fChjPWQubWF0Y2goL0lFTW9iaWxlXFwvKFtcXGRcXC5dKykvKSk/KGIuZW52LmJyb3dzZXI9e3ZlcnNpb246Y1sxXX0sZC5tYXRjaCgvSUVNb2JpbGUvKT8oYi5lbnYuYnJvd3Nlci5uYW1lPVwiSUVNb2JpbGVcIixiLmVudi5icm93c2VyLmlzSUVNb2JpbGU9ITApOihiLmVudi5icm93c2VyLm5hbWU9XCJJRVwiLGIuZW52LmJyb3dzZXIuaXNJRT0hMCksZC5tYXRjaCgvQW5kcm9pZHxpUGhvbmUvKSYmKGIuZW52LmJyb3dzZXIuaXNJRUxpa2VXZWJraXQ9ITApKTooYz1kLm1hdGNoKC8oPzpDaHJvbWV8Q3JpT1MpXFwvKFtcXGRcXC5dKykvKSk/KGIuZW52LmJyb3dzZXI9e25hbWU6XCJDaHJvbWVcIixpc0Nocm9tZTohMCx2ZXJzaW9uOmNbMV19LGQubWF0Y2goL1ZlcnNpb25cXC9bXFxkK1xcLl0rXFxzKkNocm9tZS8pJiYoYi5lbnYuYnJvd3Nlci5uYW1lPVwiQ2hyb21lIFdlYnZpZXdcIixiLmVudi5icm93c2VyLmlzV2Vidmlldz0hMCkpOmQubWF0Y2goL1NhZmFyaS8pJiYoYz1kLm1hdGNoKC9BbmRyb2lkW1xcc1xcL10oW1xcZFxcLl0rKS8pKT9iLmVudi5icm93c2VyPXtuYW1lOlwiQW5kcm9pZFwiLGlzQW5kcm9pZDohMCx2ZXJzaW9uOmNbMV19OmQubWF0Y2goL2lQaG9uZXxpUGFkfGlQb2QvKT9kLm1hdGNoKC9TYWZhcmkvKT8oYz1kLm1hdGNoKC9WZXJzaW9uXFwvKFtcXGRcXC5dKykvKSxiLmVudi5icm93c2VyPXtuYW1lOlwiU2FmYXJpXCIsaXNTYWZhcmk6ITAsdmVyc2lvbjpjWzFdfSk6KGM9ZC5tYXRjaCgvT1MgKFtcXGRfXFwuXSspIGxpa2UgTWFjIE9TIFgvKSxiLmVudi5icm93c2VyPXtuYW1lOlwiaU9TIFdlYnZpZXdcIixpc1dlYnZpZXc6ITAsdmVyc2lvbjpjWzFdLnJlcGxhY2UoL1xcXy9nLFwiLlwiKX0pOmIuZW52LmJyb3dzZXI9e25hbWU6XCJ1bmtub3duXCIsdmVyc2lvbjpcIjAuMC4wXCJ9LGIudmVyc2lvbiYmKGIuZW52LmJyb3dzZXIudmVyc2lvbj1iLnZlcnNpb24oYi5lbnYuYnJvd3Nlci52ZXJzaW9uKSl9KHdpbmRvdyx3aW5kb3cubGlifHwod2luZG93LmxpYj17fSkpLGZ1bmN0aW9uKGEsYil7Yi5lbnY9Yi5lbnZ8fHt9O3ZhciBjPWEubmF2aWdhdG9yLnVzZXJBZ2VudDtjLm1hdGNoKC9XZWliby9pKT9iLmVudi50aGlyZGFwcD17YXBwbmFtZTpcIldlaWJvXCIsaXNXZWlibzohMH06Yy5tYXRjaCgvTWljcm9NZXNzZW5nZXIvaSk/Yi5lbnYudGhpcmRhcHA9e2FwcG5hbWU6XCJXZWl4aW5cIixpc1dlaXhpbjohMH06Yi5lbnYudGhpcmRhcHA9ITF9KHdpbmRvdyx3aW5kb3cubGlifHwod2luZG93LmxpYj17fSkpLGZ1bmN0aW9uKGEsYil7Yi5lbnY9Yi5lbnZ8fHt9O3ZhciBjLGQsZT1hLm5hdmlnYXRvci51c2VyQWdlbnQ7KGQ9ZS5tYXRjaCgvV2luZFZhbmVbXFwvXFxzXShbXFxkXFwuXFxfXSspLykpJiYoYz1kWzFdKTt2YXIgZj0hMSxnPVwiXCIsaD1cIlwiLGk9XCJcIjsoZD1lLm1hdGNoKC9BbGlBcHBcXCgoW0EtWlxcLV0rKVxcLyhbXFxkXFwuXSspXFwpL2kpKSYmKGY9ITAsZz1kWzFdLGk9ZFsyXSxoPWcuaW5kZXhPZihcIi1QRFwiKT4wP2IuZW52Lm9zLmlzSU9TP1wiaVBhZFwiOmIuZW52Lm9zLmlzQW5kcm9pZD9cIkFuZHJvaWRQYWRcIjpiLmVudi5vcy5uYW1lOmIuZW52Lm9zLm5hbWUpLCFnJiZlLmluZGV4T2YoXCJUQklPU1wiKT4wJiYoZz1cIlRCXCIpLGY/Yi5lbnYuYWxpYXBwPXt3aW5kdmFuZTpiLnZlcnNpb24oY3x8XCIwLjAuMFwiKSxhcHBuYW1lOmd8fFwidW5rb3duXCIsdmVyc2lvbjpiLnZlcnNpb24oaXx8XCIwLjAuMFwiKSxwbGF0Zm9ybTpofHxiLmVudi5vcy5uYW1lfTpiLmVudi5hbGlhcHA9ITEsYi5lbnYudGFvYmFvQXBwPWIuZW52LmFsaWFwcH0od2luZG93LHdpbmRvdy5saWJ8fCh3aW5kb3cubGliPXt9KSk7O21vZHVsZS5leHBvcnRzID0gd2luZG93LmxpYlsnZW52J107IiwiaW1wb3J0ICdlbnZkJ1xuXG5jb25zdCBsaWIgPSB3aW5kb3cubGliXG5jb25zdCBlbnYgPSB7XG4gIHBsYXRmb3JtOiAnV2ViJyxcbiAgd2VleFZlcnNpb246ICcwLjEwLjAnLCAvLyBUT0RPOiBnZXQgdmVyc2lvbiBmcm9tIHBhY2thZ2UuanNvbiAobm90IHN1cmUpXG4gIHVzZXJBZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgYXBwTmFtZTogbGliLmVudi5hbGlhcHAgPyBsaWIuZW52LmFsaWFwcC5hcHBuYW1lIDogbmF2aWdhdG9yLmFwcE5hbWUsXG4gIGFwcFZlcnNpb246IGxpYi5lbnYuYWxpYXBwID8gbGliLmVudi5hbGlhcHAudmVyc2lvbi52YWwgOiBudWxsLFxuICBvc05hbWU6IGxpYi5lbnYuYnJvd3NlciA/IGxpYi5lbnYuYnJvd3Nlci5uYW1lIDogbnVsbCxcbiAgb3NWZXJzaW9uOiBsaWIuZW52LmJyb3dzZXIgPyBsaWIuZW52LmJyb3dzZXIudmVyc2lvbi52YWwgOiBudWxsLFxuICBkZXZpY2VNb2RlbDogbGliLmVudi5vcy5uYW1lIHx8IG51bGwsXG4gIGRldmljZVdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgZGV2aWNlSGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHRcbn1cblxuLy8gNzUwIGJ5IGRlZmF1bHQgY3VycmVudGx5XG5jb25zdCBzY2FsZSA9IDJcblxuY29uc3QgdW5pdHMgPSB7XG4gIFJFTTogMTIgKiBzY2FsZSxcbiAgVlc6IGVudi5kZXZpY2VXaWR0aCAvIDEwMCxcbiAgVkg6IGVudi5kZXZpY2VIZWlnaHQgLyAxMDAsXG4gIFZNSU46IE1hdGgubWluKGVudi5kZXZpY2VXaWR0aCwgZW52LmRldmljZUhlaWdodCkgLyAxMDAsXG4gIFZNQVg6IE1hdGgubWF4KGVudi5kZXZpY2VXaWR0aCwgZW52LmRldmljZUhlaWdodCkgLyAxMDAsXG4gIENNOiA5NiAvIDIuNTQgKiBzY2FsZSxcbiAgTU06IDk2IC8gMjUuNCAqIHNjYWxlLFxuICBROiA5NiAvIDI1LjQgLyA0ICogc2NhbGUsXG4gIElOOiA5NiAqIHNjYWxlLFxuICBQVDogOTYgLyA3MiAqIHNjYWxlLFxuICBQQzogOTYgLyA2ICogc2NhbGUsXG4gIFBYOiBzY2FsZVxufVxuXG5PYmplY3QuZnJlZXplKHVuaXRzKVxuT2JqZWN0LmZyZWV6ZShlbnYpXG5cbndpbmRvdy5DU1NfVU5JVCA9IHVuaXRzXG53aW5kb3cuV1hFbnZpcm9ubWVudCA9IGVudlxuIiwiaW1wb3J0ICcuL1dYRW52aXJvbm1lbnQnXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IHJlcXVpcmVXZWV4TW9kdWxlIH0gZnJvbSAnLi4vbW9kdWxlcydcblxuY29uc3Qgd2VleE1vZHVsZXMgPSB7fVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHV0aWxzLFxuICB1bml0czogd2luZG93LkNTU19VTklULFxuICBjb25maWc6IHtcbiAgICBlbnY6IHdpbmRvdy5XWEVudmlyb25tZW50LFxuICAgIGJ1bmRsZVVybDogbG9jYXRpb24uaHJlZlxuICB9LFxuXG4gIHJlcXVpcmVNb2R1bGUgKG1vZHVsZU5hbWUpIHtcbiAgICBjb25zdCBtb2R1bGUgPSByZXF1aXJlV2VleE1vZHVsZShtb2R1bGVOYW1lKVxuICAgIGlmIChtb2R1bGUpIHtcbiAgICAgIHJldHVybiBtb2R1bGVcbiAgICB9XG4gICAgcmV0dXJuIHdlZXhNb2R1bGVzW21vZHVsZU5hbWVdXG4gIH0sXG5cbiAgcmVnaXN0ZXJNb2R1bGUgKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gdGhpcy5yZWdpc3RlckFwaU1vZHVsZSguLi5hcmdzKVxuICB9LFxuXG4gIC8vIEBkZXByZWNhdGVkXG4gIHJlcXVpcmUgKC4uLmFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZyhgW1Z1ZSBSZW5kZXJdIFwid2VleC5yZXF1aXJlXCIgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBcIndlZXgucmVxdWlyZU1vZHVsZVwiIGluc3RlYWQuYClcbiAgICByZXR1cm4gdGhpcy5yZXF1aXJlTW9kdWxlKC4uLmFyZ3MpXG4gIH0sXG5cbiAgLy8gQGRlcHJlY2F0ZWRcbiAgLy8gVE9ETzogcmVuYW1lIHRvIHJlZ2lzdGVyTW9kdWxlXG4gIHJlZ2lzdGVyQXBpTW9kdWxlIChuYW1lLCBtb2R1bGUsIG1ldGEpIHtcbiAgICBpZiAoIXdlZXhNb2R1bGVzW25hbWVdKSB7XG4gICAgICB3ZWV4TW9kdWxlc1tuYW1lXSA9IHt9XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIG1vZHVsZSkge1xuICAgICAgaWYgKG1vZHVsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHdlZXhNb2R1bGVzW25hbWVdW2tleV0gPSB1dGlscy5iaW5kKG1vZHVsZVtrZXldLCB0aGlzKVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvLyBAZGVwcmVjYXRlZFxuICBnZXRSb290ICgpIHt9LFxuXG4gIC8vIEBkZXByZWNhdGVkXG4gIHNlbmRlcjoge1xuICAgIHBlcmZvcm1DYWxsYmFjayAoY2FsbGJhY2ssIGRhdGEsIGtlZXBBbGl2ZSkge1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZGF0YSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9LFxuXG4gIC8vIEBkZXByZWNhdGVkXG4gIGluc3RhbGwgKG1vZHVsZSkge1xuICAgIG1vZHVsZS5pbml0KHRoaXMpXG4gIH1cbn1cbiIsImltcG9ydCAnLi4vc3R5bGVzL3Jlc2V0LmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL2NvbXBvbmVudHMuY3NzJ1xuXG4vLyBpbXBvcnQgJ2xhenlpbWcnXG5pbXBvcnQgJy4uLy4uL2Jyb3dzZXIvcmVuZGVyL2dlc3R1cmUnXG5cbmltcG9ydCAnLi4vLi4vLi4vc2hhcmVkL2FycmF5RnJvbSdcbmltcG9ydCAnLi4vLi4vLi4vc2hhcmVkL29iamVjdEFzc2lnbidcbmltcG9ydCAnLi4vLi4vLi4vc2hhcmVkL29iamVjdFNldFByb3RvdHlwZU9mJ1xuXG5pbXBvcnQgJ2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZydcbmltcG9ydCAnY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InXG5pbXBvcnQgJ2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJ1xuaW1wb3J0ICdjb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UnXG5cbmV4cG9ydCAqIGZyb20gJy4vdmlld3BvcnQnXG5cbmltcG9ydCB7IGluaXQgfSBmcm9tICcuLi9tb2R1bGVzJ1xuaW1wb3J0IHdlZXggZnJvbSAnLi93ZWV4J1xuXG5pbml0KHdlZXgpXG5cbk9iamVjdC5mcmVlemUod2VleClcbndpbmRvdy53ZWV4ID0gd2VleFxuIiwiaW1wb3J0IHsgd2F0Y2hBcHBlYXIgfSBmcm9tICcuLi91dGlscydcblxuY29uc3Qgc3VwcG9ydGVkRXZlbnRzID0gW1xuICAnY2xpY2snLCAnbG9uZ3ByZXNzJywgJ2FwcGVhcicsICdkaXNhcHBlYXInXG4gIC8vICd0b3VjaHN0YXJ0JywgJ3RvdWNobW92ZScsICd0b3VjaGVuZCdcbl1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBtb3VudGVkICgpIHtcbiAgICB3YXRjaEFwcGVhcih0aGlzKVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBjcmVhdGVFdmVudE1hcCAoZXh0cmFzID0gW10pIHtcbiAgICAgIGNvbnN0IGV2ZW50TWFwID0ge31cbiAgICAgIHN1cHBvcnRlZEV2ZW50cy5jb25jYXQoZXh0cmFzKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBldmVudE1hcFtuYW1lXSA9IGV2ZW50ID0+IHRoaXMuJGVtaXQobmFtZSwgZXZlbnQpXG4gICAgICB9KVxuICAgICAgcmV0dXJuIGV2ZW50TWFwXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi91dGlscydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtZXRob2RzOiB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIEV2ZW50LlxuICAgICAqIEBwYXJhbSB7RE9NU3RyaW5nfSB0eXBlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gICAgICovXG4gICAgY3JlYXRlRXZlbnQgKGNvbnRleHQsIHR5cGUsIHByb3BzKSB7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCh0eXBlLCB7IGJ1YmJsZXM6IGZhbHNlIH0pXG4gICAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICBleHRlbmQoZXZlbnQsIHByb3BzKVxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXZlbnQsICd0YXJnZXQnLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBjb250ZXh0IHx8IG51bGxcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBldmVudFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgQ3VzdG9tIEV2ZW50LlxuICAgICAqIEBwYXJhbSB7RE9NU3RyaW5nfSB0eXBlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gICAgICovXG4gICAgY3JlYXRlQ3VzdG9tRXZlbnQgKGNvbnRleHQsIHR5cGUsIHByb3BzKSB7XG4gICAgICAvLyBjb21wYXRpYmlsaXR5OiBodHRwOi8vY2FuaXVzZS5jb20vI3NlYXJjaD1jdXN0b21ldmVudFxuICAgICAgLy8gY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQodHlwZSlcbiAgICAgIGNvbnN0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50JylcbiAgICAgIGV2ZW50LmluaXRDdXN0b21FdmVudCh0eXBlLCBmYWxzZSwgdHJ1ZSwge30pXG4gICAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICBleHRlbmQoZXZlbnQsIHByb3BzKVxuXG4gICAgICAvLyBUT0RPOiBldmVudC50YXJnZXQgaXMgcmVhZG9ubHlcbiAgICAgIC8vIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldmVudCwgJ3RhcmdldCcsIHtcbiAgICAgIC8vICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIC8vICAgdmFsdWU6IGNvbnRleHQgfHwgbnVsbFxuICAgICAgLy8gfSlcblxuICAgICAgcmV0dXJuIGV2ZW50XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGFuZCBlbWl0IGxvbmdwcmVzcyBldmVudC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBoYW5kbGVMb25nUHJlc3MgKGNvbnRleHQsIGV2ZW50KSB7XG4gICAgICAvLyBUT0RPOiBjaGVjayB0aGUgY29uZGl0aW9uXG4gICAgICBjb250ZXh0LiRlbWl0KCdsb25ncHJlc3MnLCBjb250ZXh0LmNyZWF0ZUN1c3RvbUV2ZW50KCdsb25ncHJlc3MnKSlcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgYW5kIGVtaXQgYXBwZWFyIGV2ZW50LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIGhhbmRsZUFwcGVhciAoY29udGV4dCwgZXZlbnQpIHtcbiAgICAgIC8vIFRPRE86IGNoZWNrIHRoZSBjb25kaXRpb25cbiAgICAgIGNvbnRleHQuJGVtaXQoJ2FwcGVhcicsIGNvbnRleHQuY3JlYXRlQ3VzdG9tRXZlbnQoJ2FwcGVhcicpKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBhbmQgZW1pdCBkaXNhcHBlYXIgZXZlbnQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgaGFuZERpc2FwcGVhciAoY29udGV4dCwgZXZlbnQpIHtcbiAgICAgIC8vIFRPRE86IGNoZWNrIHRoZSBjb25kaXRpb25cbiAgICAgIGNvbnRleHQuJGVtaXQoJ2Rpc2FwcGVhcicsIGNvbnRleHQuY3JlYXRlQ3VzdG9tRXZlbnQoJ2Rpc2FwcGVhcicpKVxuICAgIH1cbiAgfVxufVxuIiwiXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1ldGhvZHM6IHtcbiAgICB1cGRhdGVMYXlvdXQgKCkge1xuICAgICAgY29uc3Qgd3JhcHBlciA9IHRoaXMuJHJlZnMud3JhcHBlclxuICAgICAgaWYgKHdyYXBwZXIpIHtcbiAgICAgICAgY29uc3QgcmVjdCA9IHdyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgdGhpcy53cmFwcGVyV2lkdGggPSByZWN0LndpZHRoXG4gICAgICAgIHRoaXMud3JhcHBlckhlaWdodCA9IHJlY3QuaGVpZ2h0XG4gICAgICB9XG4gICAgfSxcblxuICAgIGhhbmRsZVNjcm9sbCAoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLnJlYWNoQm90dG9tKCkpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnbG9hZG1vcmUnLCBldmVudClcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVhY2hUb3AgKCkge1xuICAgICAgY29uc3Qgd3JhcHBlciA9IHRoaXMuJHJlZnMud3JhcHBlclxuICAgICAgcmV0dXJuICghIXdyYXBwZXIpICYmICh3cmFwcGVyLnNjcm9sbFRvcCA8PSAwKVxuICAgIH0sXG5cbiAgICByZWFjaEJvdHRvbSAoKSB7XG4gICAgICBjb25zdCB3cmFwcGVyID0gdGhpcy4kcmVmcy53cmFwcGVyXG4gICAgICBjb25zdCBpbm5lciA9IHRoaXMuJHJlZnMuaW5uZXJcbiAgICAgIGNvbnN0IG9mZnNldCA9IE51bWJlcih0aGlzLmxvYWRtb3Jlb2Zmc2V0KSB8fCAwXG5cbiAgICAgIGlmICh3cmFwcGVyICYmIGlubmVyKSB7XG4gICAgICAgIGNvbnN0IGlubmVySGVpZ2h0ID0gaW5uZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG4gICAgICAgIGNvbnN0IHdyYXBwZXJIZWlnaHQgPSB3cmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuICAgICAgICByZXR1cm4gd3JhcHBlci5zY3JvbGxUb3AgPj0gaW5uZXJIZWlnaHQgLSB3cmFwcGVySGVpZ2h0IC0gb2Zmc2V0XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbn1cbiIsIlxuLyoqXG4gKiBWYWxpZGF0ZSB0aGUgQ1NTIGNvbG9yIHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNDU1NDb2xvciAodmFsdWUpIHtcbiAgcmV0dXJuIC9eW2Etel0rJC9pLnRlc3QodmFsdWUpIC8vIG1hdGNoIGNvbG9yIG5hbWVcbiAgICB8fCAvXiMoW2EtZjAtOV17M30pezEsMn0kL2kudGVzdCh2YWx1ZSkgLy8gbWF0Y2ggI0FCQ0RFRlxuICAgIHx8IC9ecmdiXFxzKlxcKChcXHMqWzAtOS5dK1xccyosKXsyfVxccypbMC05Ll0rXFxzKlxcKS9pLnRlc3QodmFsdWUpIC8vIG1hdGNoIHJnYigwLDAsMClcbiAgICB8fCAvXnJnYmFcXHMqXFwoKFxccypbMC05Ll0rXFxzKiwpezN9XFxzKlswLTkuXStcXHMqXFwpL2kudGVzdCh2YWx1ZSkgLy8gbWF0Y2ggcmdiYSgwLDAsMCwwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDU1NMZW5ndGggKHZhbHVlKSB7XG4gIHJldHVybiAvXlsrLV0/WzAtOV0rLj8oWzAtOV0rKT8ocHh8JSk/JC8udGVzdChTdHJpbmcodmFsdWUpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb24gKHZhbHVlKSB7XG4gIHJldHVybiBbJ2Fic29sdXRlJywgJ3JlbGF0aXZlJywgJ2ZpeGVkJywgJ3N0aWNreSddLmluZGV4T2YodmFsdWUpICE9PSAtMVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb3BhY2l0eSAodmFsdWUpIHtcbiAgY29uc3QgY291bnQgPSBwYXJzZUZsb2F0KHZhbHVlKVxuICByZXR1cm4gY291bnQgPj0gMCAmJiBjb3VudCA8PSAxXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5ICh2YWx1ZSkge1xuICByZXR1cm4gWydmbGV4J10uaW5kZXhPZih2YWx1ZSkgIT09IC0xXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGV4RGlyZWN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gWydyb3cnLCAnY29sdW1uJ10uaW5kZXhPZih2YWx1ZSkgIT09IC0xXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqdXN0aWZ5Q29udGVudCAodmFsdWUpIHtcbiAgcmV0dXJuIFsnZmxleC1zdGFydCcsICdmbGV4LWVuZCcsICdjZW50ZXInLCAnc3BhY2UtYmV0d2VlbiddLmluZGV4T2YodmFsdWUpICE9PSAtMVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWxpZ25JdGVtcyAodmFsdWUpIHtcbiAgcmV0dXJuIFsnc3RyZXRjaCcsICdmbGV4LXN0YXJ0JywgJ2ZsZXgtZW5kJywgJ2NlbnRlciddLmluZGV4T2YodmFsdWUpICE9PSAtMVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxleCAodmFsdWUpIHtcbiAgcmV0dXJuIC9eXFxkezEsM30kLy50ZXN0KFN0cmluZyh2YWx1ZSkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb250U3R5bGUgKHZhbHVlKSB7XG4gIHJldHVybiBbJ25vcm1hbCcsICdpdGFsaWMnLCAnb2JsaXF1ZSddLmluZGV4T2YodmFsdWUpICE9PSAtMVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9udFdlaWdodCAodmFsdWUpIHtcbiAgcmV0dXJuIFsnbm9ybWFsJywgJ2JvbGQnLCAnbGlnaHQnLCAnYm9sZGVyJywgJ2xpZ2h0ZXInXS5pbmRleE9mKHZhbHVlKSAhPT0gLTFcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRleHREZWNvcmF0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gWydub25lJywgJ3VuZGVybGluZScsICdsaW5lLXRocm91Z2gnXS5pbmRleE9mKHZhbHVlKSAhPT0gLTFcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRleHRBbGlnbiAodmFsdWUpIHtcbiAgcmV0dXJuIFsnbGVmdCcsICdjZW50ZXInLCAncmlnaHQnXS5pbmRleE9mKHZhbHVlKSAhPT0gLTFcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG92ZXJmbG93ICh2YWx1ZSkge1xuICByZXR1cm4gWyd2aXNpYmxlJywgJ2hpZGRlbiddLmluZGV4T2YodmFsdWUpICE9PSAtMVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGV4dE92ZXJmbG93ICh2YWx1ZSkge1xuICByZXR1cm4gWydjbGlwJywgJ2VsbGlwc2lzJ10uaW5kZXhPZih2YWx1ZSkgIT09IC0xXG59XG5cbi8qKlxuICogQ29tbW9uIHN0eWxlIHZhbGlkYXRvci5cbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tbW9uICh2YWx1ZSwga2V5KSB7XG4gIGlmICgvXltcXHctXSpjb2xvciQvLnRlc3QoU3RyaW5nKGtleSkpKSB7XG4gICAgcmV0dXJuIGlzQ1NTQ29sb3IodmFsdWUpXG4gIH1cblxuICAvLyBjaGVjayB3aWR0aCBhbmQgaGVpZ2h0XG4gIGlmICgvXih3aWR0aHxoZWlnaHQpJC8udGVzdChTdHJpbmcoa2V5KSkpIHtcbiAgICByZXR1cm4gaXNDU1NMZW5ndGgodmFsdWUpXG4gIH1cblxuICAvLyBjaGVjayBwb3N0aW9uc1xuICBpZiAoL14odG9wfHJpZ2h0fGJvdHRvbXxsZWZ0KSQvLnRlc3QoU3RyaW5nKGtleSkpKSB7XG4gICAgcmV0dXJuIGlzQ1NTTGVuZ3RoKHZhbHVlKVxuICB9XG5cbiAgLy8gY2hlY2tvdXQgYm9yZGVyLXJhZGl1c1xuICBpZiAoL15ib3JkZXItKCh0b3B8cmlnaHR8Ym90dG9tfGxlZnQpLSl7MCwyfSh3aWR0aHxyYWRpdXMpJC8udGVzdChTdHJpbmcoa2V5KSkpIHtcbiAgICByZXR1cm4gaXNDU1NMZW5ndGgodmFsdWUpXG4gIH1cblxuICAvLyBjaGVjayBib3JkZXItc3R5bGVcbiAgaWYgKC9ib3JkZXItKCh0b3B8cmlnaHR8Ym90dG9tfGxlZnQpLSk/c3R5bGUvLnRlc3QoU3RyaW5nKGtleSkpKSB7XG4gICAgcmV0dXJuIFsnc29saWQnLCAnZGFzaGVkJywgJ2RvdHRlZCddLmluZGV4T2YodmFsdWUpICE9PSAtMVxuICB9XG5cbiAgLy8gY2hlY2sgbWFyZ2lucyBhbmQgcGFkZGluZ3NcbiAgaWYgKC9eKChtYXJnaW58cGFkZGluZyktKT8odG9wfHJpZ2h0fGJvdHRvbXxsZWZ0KS8udGVzdChTdHJpbmcoa2V5KSkpIHtcbiAgICByZXR1cm4gaXNDU1NMZW5ndGgodmFsdWUpXG4gIH1cblxuICBzd2l0Y2ggKFN0cmluZyhrZXkpKSB7XG4gICAgY2FzZSAnZm9udC1zaXplJzogcmV0dXJuIGlzQ1NTTGVuZ3RoKHZhbHVlKVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cbiIsIlxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nICh2YWx1ZSkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSdcbn1cbiIsImNvbnN0IHN1cHBvcnRlZFByb3BlcnRpZXMgPSB7XG4gICdAY29tbW9uJzogW1xuICAgICdpZCcsICdyZWYnLCAnc3R5bGUnLCAnY2xhc3MnLCAnYXBwZW5kJ1xuICBdXG59XG5cbmNvbnN0IHN1cHBvcnRlZFN0eWxlcyA9IHtcbiAgJyonOiBbXG4gICAgJ0Bib3gtbW9kZWwnLCAnQGJvcmRlcicsICdAcG9zaXRpb24nLCAnQGZsZXhib3gnLCAnQGZvbnQnLCAnQHRleHQnLCAnQGJnJyxcbiAgICAnbGluZXMnLCAnaXRlbS1zaXplJywgJ2l0ZW0tY29sb3InLCAnaXRlbS1zZWxlY3RlZC1jb2xvcidcbiAgXSxcbiAgJ0Bib3gtbW9kZWwnOiBbXG4gICAgJ3dpZHRoJywgJ2hlaWdodCcsICdwb3NpdGlvbicsXG4gICAgJ3BhZGRpbmctdG9wJywgJ3BhZGRpbmctYm90dG9tJywgJ3BhZGRpbmctbGVmdCcsICdwYWRkaW5nLXJpZ2h0JyxcbiAgICAnbWFyZ2luLXRvcCcsICdtYXJnaW4tYm90dG9tJywgJ21hcmdpbi1sZWZ0JywgJ21hcmdpbi1yaWdodCdcbiAgXSxcbiAgJ0Bib3JkZXInOiBbXG4gICAgJ2JvcmRlci1zdHlsZScsICdib3JkZXItd2lkdGgnLCAnYm9yZGVyLWNvbG9yJywgJ2JvcmRlci1yYWRpdXMnLFxuICAgICdib3JkZXItdG9wLXN0eWxlJywgJ2JvcmRlci1yaWdodC1zdHlsZScsICdib3JkZXItYm90dG9tLXN0eWxlJywgJ2JvcmRlci1sZWZ0LXN0eWxlJyxcbiAgICAnYm9yZGVyLXRvcC13aWR0aCcsICdib3JkZXItcmlnaHQtd2lkdGgnLCAnYm9yZGVyLWJvdHRvbS13aWR0aCcsICdib3JkZXItbGVmdC13aWR0aCcsXG4gICAgJ2JvcmRlci10b3AtY29sb3InLCAnYm9yZGVyLXJpZ2h0LWNvbG9yJywgJ2JvcmRlci1ib3R0b20tY29sb3InLCAnYm9yZGVyLWxlZnQtY29sb3InLFxuICAgICdib3JkZXItdG9wLWxlZnQtcmFkaXVzJywgJ2JvcmRlci10b3AtcmlnaHQtcmFkaXVzJywgJ2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMnLCAnYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMnXG4gIF0sXG4gICdAcG9zaXRpb24nOiBbJ3Bvc2l0aW9uJywgJ3RvcCcsICdsZWZ0JywgJ3JpZ2h0JywgJ2JvdHRvbSddLFxuICAnQGZsZXhib3gnOiBbXG4gICAgJ2ZsZXgnLCAnZmxleC1kaXJlY3Rpb24nLCAnanVzdGlmeS1jb250ZW50JywgJ2FsaWduLWl0ZW1zJywgJ2ZsZXgtd3JhcCdcbiAgXSxcbiAgJ0Bmb250JzogWydmb250LXNpemUnLCAnZm9udC13ZWlnaHQnLCAnZm9udC1zdHlsZScsICdmb250LWZhbWlseScsICdsaW5lLWhlaWdodCddLFxuICAnQHRleHQnOiBbJ3RleHQtYWxpZ24nLCAndGV4dC1kZWNvcmF0aW9uJywgJ3RleHQtb3ZlcmZsb3cnLCAnY29sb3InXSxcbiAgJ0BiZyc6IFsnYmFja2dyb3VuZC1jb2xvcicsICdvcGFjaXR5J10sXG5cbiAgJ2EnOiBbJ0Bib3gtbW9kZWwnLCAnQGJvcmRlcicsICdAcG9zaXRpb24nLCAnQGZsZXhib3gnLCAnQGJnJ10sXG4gICdkaXYnOiBbJ0Bib3gtbW9kZWwnLCAnQGJvcmRlcicsICdAcG9zaXRpb24nLCAnQGZsZXhib3gnLCAnQGJnJ10sXG4gICd0ZXh0JzogWydAYm94LW1vZGVsJywgJ0Bib3JkZXInLCAnQHBvc2l0aW9uJywgJ0Bmb250JywgJ0B0ZXh0JywgJ0BiZycsICdsaW5lcyddLFxuICAnc2xpZGVyJzogWydAYm94LW1vZGVsJywgJ0Bib3JkZXInLCAnQHBvc2l0aW9uJywgJ0BmbGV4Ym94JywgJ0BiZyddLFxuICAnc3dpdGNoJzogWydAYm94LW1vZGVsJywgJ0Bib3JkZXInLCAnQHBvc2l0aW9uJywgJ0BmbGV4Ym94JywgJ0BiZyddLFxuICAnaW5kaWNhdG9yJzogWydAYm94LW1vZGVsJywgJ0Bib3JkZXInLCAnQHBvc2l0aW9uJywgJ0BmbGV4Ym94JywgJ0BiZycsICdpdGVtLXNpemUnLCAnaXRlbS1jb2xvcicsICdpdGVtLXNlbGVjdGVkLWNvbG9yJ10sXG4gICdpbnB1dCc6IFsnQGJveC1tb2RlbCcsICdAYm9yZGVyJywgJ0Bwb3NpdGlvbicsICdAZm9udCcsICdAdGV4dCcsICdAYmcnXSxcbiAgJ3RleHRhcmVhJzogWydAYm94LW1vZGVsJywgJ0Bib3JkZXInLCAnQHBvc2l0aW9uJywgJ0Bmb250JywgJ0B0ZXh0JywgJ0BiZycsICdyb3dzJ10sXG4gICdzY3JvbGxlcic6IFsnQGJveC1tb2RlbCcsICdAYm9yZGVyJywgJ0Bwb3NpdGlvbicsICdAZmxleGJveCcsICdAYmcnXSxcbiAgJ2xvYWRpbmcnOiBbJ0Bib3gtbW9kZWwnLCAnQGJvcmRlcicsICdAcG9zaXRpb24nLCAnQGZsZXhib3gnLCAnQGJnJ10sXG4gICdyZWZyZXNoJzogWydAYm94LW1vZGVsJywgJ0Bib3JkZXInLCAnQHBvc2l0aW9uJywgJ0BmbGV4Ym94JywgJ0BiZyddLFxuICAnbGlzdCc6IFsnQGJveC1tb2RlbCcsICdAYm9yZGVyJywgJ0Bwb3NpdGlvbicsICdAZmxleGJveCcsICdAYmcnXSxcbiAgJ2NlbGwnOiBbJ0Bib3gtbW9kZWwnLCAnQGJvcmRlcicsICdAcG9zaXRpb24nLCAnQGZsZXhib3gnLCAnQGJnJ10sXG4gICd2aWRlbyc6IFsnQGJveC1tb2RlbCcsICdAYm9yZGVyJywgJ0Bwb3NpdGlvbicsICdAZmxleGJveCcsICdAYmcnXSxcbiAgJ3dlYic6IFsnQGJveC1tb2RlbCcsICdAYm9yZGVyJywgJ0Bwb3NpdGlvbicsICdAZmxleGJveCcsICdAYmcnXVxufVxuXG4vKipcbiAqIEZsYXR0ZW4gYSBtdWx0aXBsZSBkaW1lbnNpb24gYXJyYXkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuIChhcnJheSkge1xuICByZXR1cm4gYXJyYXkucmVkdWNlKChkaXN0LCBpdGVtKSA9PiB7XG4gICAgcmV0dXJuIGRpc3QuY29uY2F0KEFycmF5LmlzQXJyYXkoaXRlbSkgPyBmbGF0dGVuKGl0ZW0pIDogaXRlbSlcbiAgfSwgW10pXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIHZhbHVlIGlzIGluIHRoZSBsaXN0LlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtPYmplY3R9IGRpY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrU3VwcG9ydGVkICh0eXBlLCB2YWx1ZSwgZGljdCA9IHt9KSB7XG4gIGNvbnN0IHRhZ1R5cGUgPSBkaWN0W3R5cGVdID8gdHlwZSA6ICcqJ1xuICBpZiAoQXJyYXkuaXNBcnJheShkaWN0W3RhZ1R5cGVdKSkge1xuICAgIHJldHVybiBmbGF0dGVuKGRpY3RbdGFnVHlwZV0ubWFwKGsgPT4gZGljdFtrXSB8fCBrKSkuaW5kZXhPZih2YWx1ZSkgIT09IC0xXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIHN0eWxlIGlzIHN1cHBvcnRlZCBmb3IgdGhlIGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gc3R5bGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3VwcG9ydGVkU3R5bGUgKHR5cGUsIHN0eWxlKSB7XG4gIHJldHVybiBjaGVja1N1cHBvcnRlZCh0eXBlLCBzdHlsZSwgc3VwcG9ydGVkU3R5bGVzKVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQgZm9yIHRoZSBjb21wb25lbnQuXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1N1cHBvcnRlZFByb3AgKHR5cGUsIHByb3ApIHtcbiAgcmV0dXJuIGNoZWNrU3VwcG9ydGVkKHR5cGUsIHByb3AsIHN1cHBvcnRlZFByb3BlcnRpZXMpXG59XG4iLCJpbXBvcnQgKiBhcyBzdHlsZVZhbGlkYXRvciBmcm9tICcuL3N0eWxlJ1xuaW1wb3J0ICogYXMgcHJvcFZhbGlkYXRvciBmcm9tICcuL3Byb3AnXG5pbXBvcnQgeyBoeXBoZW5hdGUsIGNhbWVsaXplLCBpc1BsYWluT2JqZWN0IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc1N1cHBvcnRlZFN0eWxlIH0gZnJvbSAnLi9jaGVjaydcblxubGV0IG9uZmFpbCA9IGZ1bmN0aW9uIG5vcGUgKCkge31cbmxldCBzaG93Q29uc29sZSA9IHRydWVcblxuZnVuY3Rpb24gd2FybiAoLi4uYXJncykge1xuICBjb25zdCBtZXNzYWdlID0gYXJncy5qb2luKCcgJylcbiAgc2hvd0NvbnNvbGUgJiYgY29uc29sZS53YXJuKG1lc3NhZ2UpXG4gIG9uZmFpbChtZXNzYWdlKVxuICByZXR1cm4gbWVzc2FnZVxufVxuXG4vKipcbiAqIENvbmZpZ3VyZSB0aGUgdmFsaWRhdG9yLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ3NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZSAoY29uZmlncyA9IHt9KSB7XG4gIHNob3dDb25zb2xlID0gIWNvbmZpZ3Muc2lsZW50XG4gIGlmICh0eXBlb2YgY29uZmlncy5vbmZhaWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvbmZhaWwgPSBjb25maWdzLm9uZmFpbFxuICB9XG59XG5cbi8qKlxuICogVmFsaWRhdGUgdGhlIHN0eWxlcyBvZiB0aGUgY29tcG9uZW50LlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlU3R5bGVzICh0eXBlLCBzdHlsZXMgPSB7fSkge1xuICBsZXQgaXNWYWxpZCA9IHRydWVcblxuICBpZiAoaXNQbGFpbk9iamVjdCh0eXBlKSkge1xuICAgIHN0eWxlcyA9IHR5cGVcbiAgICB0eXBlID0gJyonXG4gIH1cblxuICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZXMpIHtcbiAgICBpZiAoIWlzU3VwcG9ydGVkU3R5bGUodHlwZSwgaHlwaGVuYXRlKGtleSkpKSB7XG4gICAgICBpc1ZhbGlkID0gZmFsc2VcbiAgICAgIHdhcm4oKHR5cGUgPT09ICcqJylcbiAgICAgICAgPyBgW1N0eWxlIFZhbGlkYXRvcl0gTm90IHN1cHBvcnQgdG8gdXNlIHRoZSBcIiR7a2V5fVwiIHN0eWxlIHByb3BlcnR5LmBcbiAgICAgICAgOiBgW1N0eWxlIFZhbGlkYXRvcl0gPCR7dHlwZX0+IGlzIG5vdCBzdXBwb3J0IHRvIHVzZSB0aGUgXCIke2tleX1cIiBzdHlsZSBwcm9wZXJ0eS5gXG4gICAgICApXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc3QgdmFsaWRhdG9yID0gc3R5bGVWYWxpZGF0b3JbY2FtZWxpemUoa2V5KV0gfHwgc3R5bGVWYWxpZGF0b3IuY29tbW9uXG4gICAgICBpZiAoIXZhbGlkYXRvcihzdHlsZXNba2V5XSwgaHlwaGVuYXRlKGtleSkpKSB7XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgICB3YXJuKGBbU3R5bGUgVmFsaWRhdG9yXSBUaGUgc3R5bGUgXCIke2tleX1cIiBpcyBub3Qgc3VwcG9ydCB0aGUgXCIke3N0eWxlc1trZXldfVwiIHZhbHVlLmApXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBpc1ZhbGlkXG59XG5cbi8qKlxuICogVmFsaWRhdGUgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlUHJvcHMgKHR5cGUsIHByb3BzID0ge30pIHtcbiAgbGV0IGlzVmFsaWQgPSB0cnVlXG4gIGZvciAoY29uc3Qga2V5IGluIHByb3BzKSB7XG4gICAgY29uc3QgdmFsaWRhdG9yID0gcHJvcFZhbGlkYXRvcltjYW1lbGl6ZShrZXkpXVxuICAgIGlmICh2YWxpZGF0b3IgJiYgIXZhbGlkYXRvcihwcm9wc1trZXldKSkge1xuICAgICAgaXNWYWxpZCA9IGZhbHNlXG4gICAgICB3YXJuKGBbUHJvcGVydHkgVmFsaWRhdG9yXSBUaGUgcHJvcGVydHkgXCIke2tleX1cIiBpcyBub3Qgc3VwcG9ydCB0aGUgXCIke3Byb3BzW2tleV19XCIgdmFsdWUuYClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlzVmFsaWRcbn1cbiIsImltcG9ydCB7IGJhc2UgfSBmcm9tICcuLi9taXhpbnMnXG5pbXBvcnQgeyB2YWxpZGF0ZVN0eWxlcyB9IGZyb20gJy4uL3ZhbGlkYXRvcidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFtiYXNlXSxcbiAgcHJvcHM6IHtcbiAgICBjaGVja2VkOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBkaXNhYmxlZDoge1xuICAgICAgdHlwZTogW0Jvb2xlYW4sIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQ2hlY2tlZDogKHRoaXMuY2hlY2tlZCAhPT0gJ2ZhbHNlJyAmJiB0aGlzLmNoZWNrZWQgIT09IGZhbHNlKSxcbiAgICAgIGlzRGlzYWJsZWQ6ICh0aGlzLmRpc2FibGVkICE9PSAnZmFsc2UnICYmIHRoaXMuZGlzYWJsZWQgIT09IGZhbHNlKVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICB3cmFwcGVyQ2xhc3MgKCkge1xuICAgICAgY29uc3QgY2xhc3NBcnJheSA9IFsnd2VleC1zd2l0Y2gnXVxuICAgICAgdGhpcy5pc0NoZWNrZWQgJiYgY2xhc3NBcnJheS5wdXNoKCd3ZWV4LXN3aXRjaC1jaGVja2VkJylcbiAgICAgIHRoaXMuaXNEaXNhYmxlZCAmJiBjbGFzc0FycmF5LnB1c2goJ3dlZXgtc3dpdGNoLWRpc2FibGVkJylcbiAgICAgIHJldHVybiBjbGFzc0FycmF5LmpvaW4oJyAnKVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHRvZ2dsZSAoKSB7XG4gICAgICAvLyBUT0RPOiBoYW5kbGUgdGhlIGV2ZW50c1xuICAgICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5pc0NoZWNrZWQgPSAhdGhpcy5pc0NoZWNrZWRcbiAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgeyB2YWx1ZTogdGhpcy5pc0NoZWNrZWQgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgIHZhbGlkYXRlU3R5bGVzKCdzd2l0Y2gnLCB0aGlzLiR2bm9kZS5kYXRhICYmIHRoaXMuJHZub2RlLmRhdGEuc3RhdGljU3R5bGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7XG4gICAgICBhdHRyczogeyAnd2VleC10eXBlJzogJ3N3aXRjaCcgfSxcbiAgICAgIHN0YXRpY0NsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyxcbiAgICAgIG9uOiB7XG4gICAgICAgIGNsaWNrOiBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBldmVudClcbiAgICAgICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbY3JlYXRlRWxlbWVudCgnc21hbGwnLCB7IHN0YXRpY0NsYXNzOiAnd2VleC1zd2l0Y2gtaW5uZXInIH0pXSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4uL21peGlucydcbmltcG9ydCB7IHZhbGlkYXRlU3R5bGVzIH0gZnJvbSAnLi4vdmFsaWRhdG9yJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW2Jhc2VdLFxuICBwcm9wczoge1xuICAgIGhyZWY6IFN0cmluZ1xuICB9LFxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgdmFsaWRhdGVTdHlsZXMoJ2EnLCB0aGlzLiR2bm9kZS5kYXRhICYmIHRoaXMuJHZub2RlLmRhdGEuc3RhdGljU3R5bGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2h0bWw6YScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgICd3ZWV4LXR5cGUnOiAnYScsXG4gICAgICAgIGhyZWY6IHRoaXMuaHJlZlxuICAgICAgfSxcbiAgICAgIG9uOiB0aGlzLmNyZWF0ZUV2ZW50TWFwKCksXG4gICAgICBzdGF0aWNDbGFzczogJ3dlZXgtYSdcbiAgICB9LCB0aGlzLiRzbG90cy5kZWZhdWx0KVxuICB9XG59XG4iLCJpbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi4vbWl4aW5zJ1xuaW1wb3J0IHsgdmFsaWRhdGVTdHlsZXMgfSBmcm9tICcuLi92YWxpZGF0b3InXG5cbmZ1bmN0aW9uIHRyaW1UZXh0Tm9kZSAoY2hpbGRyZW4pIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuLmZpbHRlcih2bm9kZSA9PiAhIXZub2RlLnRhZylcbiAgfVxuICByZXR1cm4gY2hpbGRyZW5cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFtiYXNlXSxcbiAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgIHZhbGlkYXRlU3R5bGVzKCdkaXYnLCB0aGlzLiR2bm9kZS5kYXRhICYmIHRoaXMuJHZub2RlLmRhdGEuc3RhdGljU3R5bGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2h0bWw6ZGl2Jywge1xuICAgICAgYXR0cnM6IHsgJ3dlZXgtdHlwZSc6ICdkaXYnIH0sXG4gICAgICBvbjogdGhpcy5jcmVhdGVFdmVudE1hcCgpLFxuICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LWRpdidcbiAgICB9LCB0cmltVGV4dE5vZGUodGhpcy4kc2xvdHMuZGVmYXVsdCkpXG4gIH1cbn1cbiIsImltcG9ydCB7IGJhc2UgfSBmcm9tICcuLi9taXhpbnMnXG5pbXBvcnQgeyB2YWxpZGF0ZVN0eWxlcyB9IGZyb20gJy4uL3ZhbGlkYXRvcidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFtiYXNlXSxcbiAgcHJvcHM6IHtcbiAgICBzcmM6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICByZXNpemU6IHtcbiAgICAgIHZhbGlkYXRvciAodmFsdWUpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgcmV0dXJuIFsnY292ZXInLCAnY29udGFpbicsICdzdHJldGNoJ10uaW5kZXhPZih2YWx1ZSkgIT09IC0xXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlciAoY3JlYXRlRWxlbWVudCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICB2YWxpZGF0ZVN0eWxlcygnaW1hZ2UnLCB0aGlzLiR2bm9kZS5kYXRhICYmIHRoaXMuJHZub2RlLmRhdGEuc3RhdGljU3R5bGUpXG4gICAgfVxuXG4gICAgbGV0IGNzc1RleHQgPSBgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIke3RoaXMuc3JjfVwiKTtgXG5cbiAgICAvLyBjb21wYXRpYmlsaXR5OiBodHRwOi8vY2FuaXVzZS5jb20vI3NlYXJjaD1iYWNrZ3JvdW5kLXNpemVcbiAgICBjc3NUZXh0ICs9ICh0aGlzLnJlc2l6ZSAmJiB0aGlzLnJlc2l6ZSAhPT0gJ3N0cmV0Y2gnKVxuICAgICAgPyBgYmFja2dyb3VuZC1zaXplOiAke3RoaXMucmVzaXplfTtgXG4gICAgICA6IGBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtgXG5cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnZmlndXJlJywge1xuICAgICAgYXR0cnM6IHsgJ3dlZXgtdHlwZSc6ICdpbWFnZScgfSxcbiAgICAgIG9uOiB0aGlzLmNyZWF0ZUV2ZW50TWFwKFsnbG9hZCddKSxcbiAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC1pbWFnZScsXG4gICAgICBzdHlsZTogY3NzVGV4dFxuICAgIH0pXG4gIH1cbn1cbiIsImltcG9ydCB7IGJhc2UgfSBmcm9tICcuLi9taXhpbnMnXG5pbXBvcnQgeyBleHRlbmQsIG1hcEZvcm1FdmVudHMsIHNldFNlbGVjdGlvblJhbmdlLCBnZXRTZWxlY3Rpb25SYW5nZSB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgdmFsaWRhdGVTdHlsZXMgfSBmcm9tICcuLi92YWxpZGF0b3InXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWl4aW5zOiBbYmFzZV0sXG4gIHByb3BzOiB7XG4gICAgdHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3RleHQnLFxuICAgICAgdmFsaWRhdG9yICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICdlbWFpbCcsICdudW1iZXInLCAncGFzc3dvcmQnLCAnc2VhcmNoJywgJ3RlbCcsICd0ZXh0JywgJ3VybCdcbiAgICAgICAgICAvLyB1bnN1cHBvcnRlZCB0eXBlOlxuICAgICAgICAgIC8vIGJ1dHRvbiwgY2hlY2tib3gsIGNvbG9yLCBkYXRlLCBkYXRldGltZSwgZmlsZSwgaGlkZGVuLCBpbWFnZSxcbiAgICAgICAgICAvLyBtb250aCwgcmFkaW8sIHJhbmdlLCByZXNldCwgc3VibWl0LCB0aW1lLCB3ZWVrLFxuICAgICAgICBdLmluZGV4T2YodmFsdWUpICE9PSAtMVxuICAgICAgfVxuICAgIH0sXG4gICAgdmFsdWU6IFN0cmluZyxcbiAgICBwbGFjZWhvbGRlcjogU3RyaW5nLFxuICAgIGRpc2FibGVkOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBCb29sZWFuXSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBhdXRvZm9jdXM6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEJvb2xlYW5dLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIG1heGxlbmd0aDogW1N0cmluZywgTnVtYmVyXVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc2V0U2VsZWN0aW9uUmFuZ2UsXG4gICAgZ2V0U2VsZWN0aW9uUmFuZ2VcbiAgfSxcbiAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgIHZhbGlkYXRlU3R5bGVzKCdpbnB1dCcsIHRoaXMuJHZub2RlLmRhdGEgJiYgdGhpcy4kdm5vZGUuZGF0YS5zdGF0aWNTdHlsZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnaHRtbDppbnB1dCcsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgICd3ZWV4LXR5cGUnOiAnaW5wdXQnLFxuICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICBkaXNhYmxlZDogKHRoaXMuZGlzYWJsZWQgIT09ICdmYWxzZScgJiYgdGhpcy5kaXNhYmxlZCAhPT0gZmFsc2UpLFxuICAgICAgICBhdXRvZm9jdXM6ICh0aGlzLmF1dG9mb2N1cyAhPT0gJ2ZhbHNlJyAmJiB0aGlzLmF1dG9mb2N1cyAhPT0gZmFsc2UpLFxuICAgICAgICBwbGFjZWhvbGRlcjogdGhpcy5wbGFjZWhvbGRlcixcbiAgICAgICAgbWF4bGVuZ3RoOiB0aGlzLm1heGxlbmd0aFxuICAgICAgfSxcbiAgICAgIG9uOiBleHRlbmQodGhpcy5jcmVhdGVFdmVudE1hcCgpLCBtYXBGb3JtRXZlbnRzKHRoaXMpKSxcbiAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC1pbnB1dCdcbiAgICB9KVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdsb2FkaW5nLWluZGljYXRvcicsXG4gIHJlbmRlciAoY3JlYXRlRWxlbWVudCkge1xuICAgIHRoaXMud2VleFR5cGUgPSAnbG9hZGluZy1pbmRpY2F0b3InXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ21hcmsnLCB7XG4gICAgICBhdHRyczogeyAnd2VleC10eXBlJzogJ2xvYWRpbmctaW5kaWNhdG9yJyB9LFxuICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LWxvYWRpbmctaW5kaWNhdG9yJ1xuICAgIH0pXG4gIH1cbn1cbiIsImltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gJy4vbG9hZGluZy1pbmRpY2F0b3InXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gbmFtZTogJ3JlZnJlc2gnLFxuICBjb21wb25lbnRzOiB7IExvYWRpbmdJbmRpY2F0b3IgfSxcbiAgcHJvcHM6IHtcbiAgICBkaXNwbGF5OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnc2hvdycsXG4gICAgICB2YWxpZGF0b3IgKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBbJ3Nob3cnLCAnaGlkZSddLmluZGV4T2YodmFsdWUpICE9PSAtMVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhlaWdodDogMFxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHNob3cgKCkge1xuICAgICAgLy8gVE9ETzogbm8gZml4ZWQgaGVpZ2h0XG4gICAgICB0aGlzLiRlbWl0KCdyZWZyZXNoJylcbiAgICAgIHRoaXMuaGVpZ2h0ID0gJzEuNnJlbSdcbiAgICAgIHRoaXMudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xuICAgIH0sXG4gICAgcmVzZXQgKCkge1xuICAgICAgdGhpcy5oZWlnaHQgPSAwXG4gICAgICB0aGlzLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xuICAgICAgdGhpcy4kZW1pdCgncmVmcmVzaGZpbmlzaCcpXG4gICAgfSxcbiAgICBnZXRDaGlsZHJlbiAoKSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuJHNsb3RzLmRlZmF1bHQgfHwgW11cbiAgICAgIGlmICh0aGlzLmRpc3BsYXkgPT09ICdzaG93Jykge1xuICAgICAgICByZXR1cm4gY2hpbGRyZW5cbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGlsZHJlbi5maWx0ZXIodm5vZGUgPT4ge1xuICAgICAgICByZXR1cm4gdm5vZGUuY29tcG9uZW50T3B0aW9uc1xuICAgICAgICAgICYmIHZub2RlLmNvbXBvbmVudE9wdGlvbnMudGFnICE9PSAnbG9hZGluZy1pbmRpY2F0b3InXG4gICAgICB9KVxuICAgIH1cbiAgfSxcbiAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2FzaWRlJywge1xuICAgICAgcmVmOiAncmVmcmVzaCcsXG4gICAgICBhdHRyczogeyAnd2VleC10eXBlJzogJ3JlZnJlc2gnIH0sXG4gICAgICBzdHlsZTogeyBoZWlnaHQ6IHRoaXMuaGVpZ2h0LCB2aXNpYmlsaXR5OiB0aGlzLnZpc2liaWxpdHkgfSxcbiAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC1yZWZyZXNoJ1xuICAgIH0sIHRoaXMuZ2V0Q2hpbGRyZW4oKSlcbiAgfVxufVxuIiwiaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSAnLi9sb2FkaW5nLWluZGljYXRvcidcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBuYW1lOiAnbG9hZGluZycsXG4gIGNvbXBvbmVudHM6IHsgTG9hZGluZ0luZGljYXRvciB9LFxuICBwcm9wczoge1xuICAgIGRpc3BsYXk6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdzaG93JyxcbiAgICAgIHZhbGlkYXRvciAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFsnc2hvdycsICdoaWRlJ10uaW5kZXhPZih2YWx1ZSkgIT09IC0xXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGVpZ2h0OiAwXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc2hvdyAoKSB7XG4gICAgICB0aGlzLiRlbWl0KCdsb2FkaW5nJylcbiAgICAgIHRoaXMuaGVpZ2h0ID0gJzEuNnJlbSdcbiAgICAgIHRoaXMudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xuICAgIH0sXG4gICAgcmVzZXQgKCkge1xuICAgICAgdGhpcy5oZWlnaHQgPSAwXG4gICAgICB0aGlzLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xuICAgICAgdGhpcy4kZW1pdCgnbG9hZGluZ2ZpbmlzaCcpXG4gICAgfSxcbiAgICBnZXRDaGlsZHJlbiAoKSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuJHNsb3RzLmRlZmF1bHQgfHwgW11cbiAgICAgIGlmICh0aGlzLmRpc3BsYXkgPT09ICdzaG93Jykge1xuICAgICAgICByZXR1cm4gY2hpbGRyZW5cbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGlsZHJlbi5maWx0ZXIodm5vZGUgPT4ge1xuICAgICAgICByZXR1cm4gdm5vZGUuY29tcG9uZW50T3B0aW9uc1xuICAgICAgICAgICYmIHZub2RlLmNvbXBvbmVudE9wdGlvbnMudGFnICE9PSAnbG9hZGluZy1pbmRpY2F0b3InXG4gICAgICB9KVxuICAgIH1cbiAgfSxcbiAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2FzaWRlJywge1xuICAgICAgcmVmOiAnbG9hZGluZycsXG4gICAgICBhdHRyczogeyAnd2VleC10eXBlJzogJ2xvYWRpbmcnIH0sXG4gICAgICBzdHlsZTogeyBoZWlnaHQ6IHRoaXMuaGVpZ2h0LCB2aXNpYmlsaXR5OiB0aGlzLnZpc2liaWxpdHkgfSxcbiAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC1sb2FkaW5nJ1xuICAgIH0sIHRoaXMuZ2V0Q2hpbGRyZW4oKSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG4vLyBpbXBvcnQgaGVhZGVyIGZyb20gJy4vaGVhZGVyJ1xuaW1wb3J0IHJlZnJlc2ggZnJvbSAnLi9yZWZyZXNoJ1xuaW1wb3J0IGxvYWRpbmcgZnJvbSAnLi9sb2FkaW5nJ1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyIChjb250ZXh0LCBjcmVhdGVFbGVtZW50KSB7XG4vLyAgIHJldHVybiBjcmVhdGVFbGVtZW50KGhlYWRlcilcbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxvYWRpbmcgKGNvbnRleHQsIGNyZWF0ZUVsZW1lbnQsIHZub2RlKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB2bm9kZS5jb21wb25lbnRPcHRpb25zXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KGxvYWRpbmcsIGV4dGVuZCh7XG4gICAgb246IG9wdGlvbnMubGlzdGVuZXJzXG4gIH0sIHZub2RlLmRhdGEpLCBvcHRpb25zLmNoaWxkcmVuKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVmcmVzaCAoY29udGV4dCwgY3JlYXRlRWxlbWVudCwgdm5vZGUpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHZub2RlLmNvbXBvbmVudE9wdGlvbnNcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQocmVmcmVzaCwgZXh0ZW5kKHtcbiAgICBvbjogb3B0aW9ucy5saXN0ZW5lcnNcbiAgfSwgdm5vZGUuZGF0YSksIG9wdGlvbnMuY2hpbGRyZW4pXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIG1ldGhvZHM6IHtcbiAgICBtb3ZlVG8gKG9mZnNldFkgPSAwLCBkb25lKSB7XG4gICAgICBjb25zdCBpbm5lciA9IHRoaXMuJHJlZnMuaW5uZXJcbiAgICAgIGlmIChpbm5lcikge1xuICAgICAgICBpbm5lci5zdHlsZS53aWxsQ2hhbmdlID0gYHRyYW5zZm9ybWBcbiAgICAgICAgaW5uZXIuc3R5bGUudHJhbnNpdGlvbiA9IGB0cmFuc2Zvcm0gLjJzIGVhc2UtaW4tb3V0YFxuICAgICAgICBpbm5lci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoMCwgJHtvZmZzZXRZfSwgMClgXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlubmVyLnN0eWxlLnRyYW5zaXRpb24gPSAnJ1xuICAgICAgICAgIGlubmVyLnN0eWxlLndpbGxDaGFuZ2UgPSAnJ1xuICAgICAgICAgIGRvbmUgJiYgZG9uZSgpXG4gICAgICAgIH0sIDIwMClcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZG9uZSAoKSB7XG4gICAgICB0aGlzLm1vdmVUbygwKVxuICAgICAgdGhpcy5fcmVmcmVzaCAmJiB0aGlzLl9yZWZyZXNoLmNoaWxkLnJlc2V0KClcbiAgICAgIHRoaXMuX2xvYWRpbmcgJiYgdGhpcy5fbG9hZGluZy5jaGlsZC5yZXNldCgpXG4gICAgfSxcblxuICAgIHNob3dSZWZyZXNoICgpIHtcbiAgICAgIHRoaXMubW92ZVRvKCcxLjZyZW0nKVxuICAgICAgaWYgKHRoaXMuX3JlZnJlc2ggJiYgdGhpcy5fcmVmcmVzaC5jaGlsZCkge1xuICAgICAgICB0aGlzLl9yZWZyZXNoLmNoaWxkLnNob3coKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzaG93TG9hZGluZyAoKSB7XG4gICAgICB0aGlzLm1vdmVUbygnLTEuNnJlbScpXG4gICAgICBpZiAodGhpcy5fbG9hZGluZyAmJiB0aGlzLl9sb2FkaW5nLmNoaWxkKSB7XG4gICAgICAgIHRoaXMuX2xvYWRpbmcuY2hpbGQuc2hvdygpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGhhbmRsZVRvdWNoU3RhcnQgKGV2ZW50KSB7XG4gICAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgaWYgKHRoaXMuX2xvYWRpbmcgfHwgdGhpcy5fcmVmcmVzaCkge1xuICAgICAgICBjb25zdCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdXG4gICAgICAgIHRoaXMuX3RvdWNoUGFyYW1zID0ge1xuICAgICAgICAgIHJlYWNoVG9wOiB0aGlzLnJlYWNoVG9wKCksXG4gICAgICAgICAgcmVhY2hCb3R0b206IHRoaXMucmVhY2hCb3R0b20oKSxcbiAgICAgICAgICBzdGFydFRvdWNoRXZlbnQ6IHRvdWNoLFxuICAgICAgICAgIHN0YXJ0WDogdG91Y2gucGFnZVgsXG4gICAgICAgICAgc3RhcnRZOiB0b3VjaC5wYWdlWSxcbiAgICAgICAgICB0aW1lU3RhbXA6IGV2ZW50LnRpbWVTdGFtcFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGhhbmRsZVRvdWNoTW92ZSAoZXZlbnQpIHtcbiAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBpZiAodGhpcy5fdG91Y2hQYXJhbXMpIHtcbiAgICAgICAgY29uc3QgaW5uZXIgPSB0aGlzLiRyZWZzLmlubmVyXG4gICAgICAgIGNvbnN0IHsgc3RhcnRZLCByZWFjaFRvcCwgcmVhY2hCb3R0b20gfSA9IHRoaXMuX3RvdWNoUGFyYW1zXG4gICAgICAgIGlmIChpbm5lciAmJiAocmVhY2hUb3AgJiYgdGhpcy5fcmVmcmVzaCB8fCByZWFjaEJvdHRvbSAmJiB0aGlzLl9sb2FkaW5nKSkge1xuICAgICAgICAgIGNvbnN0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF1cbiAgICAgICAgICBjb25zdCBvZmZzZXRZID0gdG91Y2gucGFnZVkgLSBzdGFydFlcbiAgICAgICAgICB0aGlzLl90b3VjaFBhcmFtcy5vZmZzZXRZID0gb2Zmc2V0WVxuICAgICAgICAgIGlmIChvZmZzZXRZKSB7XG4gICAgICAgICAgICBpbm5lci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoMCwgJHtvZmZzZXRZfXB4LCAwKWBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaGFuZGxlVG91Y2hFbmQgKGV2ZW50KSB7XG4gICAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgaWYgKHRoaXMuX3RvdWNoUGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IGlubmVyID0gdGhpcy4kcmVmcy5pbm5lclxuICAgICAgICBjb25zdCB7IG9mZnNldFksIHJlYWNoVG9wLCByZWFjaEJvdHRvbSB9ID0gdGhpcy5fdG91Y2hQYXJhbXNcbiAgICAgICAgaWYgKGlubmVyICYmIChyZWFjaFRvcCAmJiB0aGlzLl9yZWZyZXNoIHx8IHJlYWNoQm90dG9tICYmIHRoaXMuX2xvYWRpbmcpKSB7XG4gICAgICAgICAgaWYgKG9mZnNldFkgPiAxMjApIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1JlZnJlc2goKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChvZmZzZXRZIDwgLTEyMCkge1xuICAgICAgICAgICAgdGhpcy5zaG93TG9hZGluZygpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kb25lKDApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkZWxldGUgdGhpcy5fdG91Y2hQYXJhbXNcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGJhc2UsIGV2ZW50LCBzY3JvbGxhYmxlIH0gZnJvbSAnLi4vLi4vLi4vbWl4aW5zJ1xuaW1wb3J0IHsgdmFsaWRhdGVTdHlsZXMgfSBmcm9tICcuLi8uLi8uLi92YWxpZGF0b3InXG5pbXBvcnQgeyBkZWJvdW5jZSwgdGhyb3R0bGUsIGJpbmQsIGV4dGVuZCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJ1xuaW1wb3J0ICogYXMgc2hhcmVkIGZyb20gJy4uL3NoYXJlZCdcbmltcG9ydCBsaXN0TWl4aW4gZnJvbSAnLi9saXN0TWl4aW4nXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWl4aW5zOiBbYmFzZSwgZXZlbnQsIHNjcm9sbGFibGUsIGxpc3RNaXhpbl0sXG4gIHByb3BzOiB7XG4gICAgbG9hZG1vcmVvZmZzZXQ6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICBkZWZhdWx0OiAwXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgd3JhcHBlckNsYXNzICgpIHtcbiAgICAgIGNvbnN0IGNsYXNzQXJyYXkgPSBbJ3dlZXgtbGlzdCcsICd3ZWV4LWxpc3Qtd3JhcHBlciddXG4gICAgICB0aGlzLl9yZWZyZXNoICYmIGNsYXNzQXJyYXkucHVzaCgnd2l0aC1yZWZyZXNoJylcbiAgICAgIHRoaXMuX2xvYWRpbmcgJiYgY2xhc3NBcnJheS5wdXNoKCd3aXRoLWxvYWRpbmcnKVxuICAgICAgcmV0dXJuIGNsYXNzQXJyYXkuam9pbignICcpXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBjcmVhdGVDaGlsZHJlbiAoaCkge1xuICAgICAgY29uc3Qgc2xvdHMgPSB0aGlzLiRzbG90cy5kZWZhdWx0IHx8IFtdXG4gICAgICB0aGlzLl9jZWxscyA9IHNsb3RzLmZpbHRlcih2bm9kZSA9PiB7XG4gICAgICAgIGlmICghdm5vZGUudGFnIHx8ICF2bm9kZS5jb21wb25lbnRPcHRpb25zKSByZXR1cm4gZmFsc2VcbiAgICAgICAgc3dpdGNoICh2bm9kZS5jb21wb25lbnRPcHRpb25zLnRhZykge1xuICAgICAgICAgIGNhc2UgJ2xvYWRpbmcnOiB0aGlzLl9sb2FkaW5nID0gc2hhcmVkLmNyZWF0ZUxvYWRpbmcodGhpcywgaCwgdm5vZGUpOyByZXR1cm4gZmFsc2VcbiAgICAgICAgICBjYXNlICdyZWZyZXNoJzogdGhpcy5fcmVmcmVzaCA9IHNoYXJlZC5jcmVhdGVSZWZyZXNoKHRoaXMsIGgsIHZub2RlKTsgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0pXG4gICAgICByZXR1cm4gW1xuICAgICAgICB0aGlzLl9yZWZyZXNoLFxuICAgICAgICBoKCdodG1sOmRpdicsIHtcbiAgICAgICAgICByZWY6ICdpbm5lcicsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LWxpc3QtaW5uZXInXG4gICAgICAgIH0sIHRoaXMuX2NlbGxzKSxcbiAgICAgICAgdGhpcy5fbG9hZGluZ1xuICAgICAgXVxuICAgIH1cbiAgfSxcblxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICB0aGlzLndlZXhUeXBlID0gJ2xpc3QnXG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgdmFsaWRhdGVTdHlsZXMoJ2xpc3QnLCB0aGlzLiR2bm9kZS5kYXRhICYmIHRoaXMuJHZub2RlLmRhdGEuc3RhdGljU3R5bGUpXG4gICAgfVxuXG4gICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVMYXlvdXQoKVxuICAgIH0pXG5cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnbWFpbicsIHtcbiAgICAgIHJlZjogJ3dyYXBwZXInLFxuICAgICAgYXR0cnM6IHsgJ3dlZXgtdHlwZSc6ICdsaXN0JyB9LFxuICAgICAgc3RhdGljQ2xhc3M6IHRoaXMud3JhcHBlckNsYXNzLFxuICAgICAgb246IGV4dGVuZCh0aGlzLmNyZWF0ZUV2ZW50TWFwKCksIHtcbiAgICAgICAgc2Nyb2xsOiBkZWJvdW5jZShiaW5kKHRoaXMuaGFuZGxlU2Nyb2xsLCB0aGlzKSwgMzApLFxuICAgICAgICB0b3VjaHN0YXJ0OiB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsXG4gICAgICAgIHRvdWNobW92ZTogdGhyb3R0bGUoYmluZCh0aGlzLmhhbmRsZVRvdWNoTW92ZSwgdGhpcyksIDI1KSxcbiAgICAgICAgdG91Y2hlbmQ6IHRoaXMuaGFuZGxlVG91Y2hFbmRcbiAgICAgIH0pXG4gICAgfSwgdGhpcy5jcmVhdGVDaGlsZHJlbihjcmVhdGVFbGVtZW50KSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4uLy4uLy4uL21peGlucydcbmltcG9ydCB7IHZhbGlkYXRlU3R5bGVzIH0gZnJvbSAnLi4vLi4vLi4vdmFsaWRhdG9yJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW2Jhc2VdLFxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgdmFsaWRhdGVTdHlsZXMoJ2NlbGwnLCB0aGlzLiR2bm9kZS5kYXRhICYmIHRoaXMuJHZub2RlLmRhdGEuc3RhdGljU3R5bGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLCB7XG4gICAgICBhdHRyczogeyAnd2VleC10eXBlJzogJ2NlbGwnIH0sXG4gICAgICBvbjogdGhpcy5jcmVhdGVFdmVudE1hcCgpLFxuICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LWNlbGwnXG4gICAgfSwgdGhpcy4kc2xvdHMuZGVmYXVsdClcbiAgfVxufVxuIiwiaW1wb3J0IHsgYmFzZSwgc2Nyb2xsYWJsZSB9IGZyb20gJy4uLy4uL21peGlucydcbmltcG9ydCB7IHZhbGlkYXRlU3R5bGVzIH0gZnJvbSAnLi4vLi4vdmFsaWRhdG9yJ1xuaW1wb3J0IHsgZGVib3VuY2UsIHRocm90dGxlLCBiaW5kLCBleHRlbmQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCAqIGFzIHNoYXJlZCBmcm9tICcuL3NoYXJlZCdcbmltcG9ydCBsaXN0TWl4aW4gZnJvbSAnLi9saXN0L2xpc3RNaXhpbidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFtiYXNlLCBzY3JvbGxhYmxlLCBsaXN0TWl4aW5dLFxuICBwcm9wczoge1xuICAgIHNjcm9sbERpcmVjdGlvbjoge1xuICAgICAgdHlwZTogW1N0cmluZ10sXG4gICAgICBkZWZhdWx0OiAndmVydGljYWwnLFxuICAgICAgdmFsaWRhdG9yICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gWydob3Jpem9udGFsJywgJ3ZlcnRpY2FsJ10uaW5kZXhPZih2YWx1ZSkgIT09IC0xXG4gICAgICB9XG4gICAgfSxcbiAgICBsb2FkbW9yZW9mZnNldDoge1xuICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcbiAgICAgIGRlZmF1bHQ6IDBcbiAgICB9LFxuICAgIC8vIFRPRE86IHN1cHBvcnQgbG9hZG1vcmUgcmV0cnlcbiAgICBsb2FkbW9yZXJldHJ5OiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgZGVmYXVsdDogMFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIHdyYXBwZXJDbGFzcyAoKSB7XG4gICAgICBjb25zdCBjbGFzc0FycmF5ID0gWyd3ZWV4LXNjcm9sbGVyJywgJ3dlZXgtc2Nyb2xsZXItd3JhcHBlciddXG4gICAgICBpZiAodGhpcy5zY3JvbGxEaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICBjbGFzc0FycmF5LnB1c2goJ3dlZXgtc2Nyb2xsZXItaG9yaXpvbnRhbCcpXG4gICAgICB9XG4gICAgICByZXR1cm4gY2xhc3NBcnJheS5qb2luKCcgJylcbiAgICB9XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGNyZWF0ZUNoaWxkcmVuIChoKSB7XG4gICAgICBjb25zdCBzbG90cyA9IHRoaXMuJHNsb3RzLmRlZmF1bHQgfHwgW11cbiAgICAgIHRoaXMuX2NlbGxzID0gc2xvdHMuZmlsdGVyKHZub2RlID0+IHtcbiAgICAgICAgaWYgKCF2bm9kZS50YWcgfHwgIXZub2RlLmNvbXBvbmVudE9wdGlvbnMpIHJldHVybiBmYWxzZVxuICAgICAgICBzd2l0Y2ggKHZub2RlLmNvbXBvbmVudE9wdGlvbnMudGFnKSB7XG4gICAgICAgICAgY2FzZSAnbG9hZGluZyc6IHRoaXMuX2xvYWRpbmcgPSBzaGFyZWQuY3JlYXRlTG9hZGluZyh0aGlzLCBoLCB2bm9kZSk7IHJldHVybiBmYWxzZVxuICAgICAgICAgIGNhc2UgJ3JlZnJlc2gnOiB0aGlzLl9yZWZyZXNoID0gc2hhcmVkLmNyZWF0ZVJlZnJlc2godGhpcywgaCwgdm5vZGUpOyByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSlcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHRoaXMuX3JlZnJlc2gsXG4gICAgICAgIGgoJ2h0bWw6ZGl2Jywge1xuICAgICAgICAgIHJlZjogJ2lubmVyJyxcbiAgICAgICAgICBzdGF0aWNDbGFzczogJ3dlZXgtc2Nyb2xsZXItaW5uZXInXG4gICAgICAgIH0sIHRoaXMuX2NlbGxzKSxcbiAgICAgICAgdGhpcy5fbG9hZGluZ1xuICAgICAgXVxuICAgIH0sXG4gICAgc2Nyb2xsVG8gKHZub2RlKSB7XG4gICAgICBpZiAodm5vZGUgJiYgdm5vZGUuJGVsKSB7XG4gICAgICAgIC8vIFRPRE86IGFkZCBhbmltYXRpb25cbiAgICAgICAgdGhpcy4kZWwuc2Nyb2xsVG9wID0gdm5vZGUuJGVsLm9mZnNldFRvcFxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICB0aGlzLndlZXhUeXBlID0gJ3Njcm9sbGVyJ1xuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgIHZhbGlkYXRlU3R5bGVzKCdzY3JvbGxlcicsIHRoaXMuJHZub2RlLmRhdGEgJiYgdGhpcy4kdm5vZGUuZGF0YS5zdGF0aWNTdHlsZSlcbiAgICB9XG5cbiAgICB0aGlzLl9jZWxscyA9IHRoaXMuJHNsb3RzLmRlZmF1bHQgfHwgW11cbiAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUxheW91dCgpXG4gICAgfSlcblxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdtYWluJywge1xuICAgICAgcmVmOiAnd3JhcHBlcicsXG4gICAgICBhdHRyczogeyAnd2VleC10eXBlJzogJ3Njcm9sbGVyJyB9LFxuICAgICAgc3RhdGljQ2xhc3M6IHRoaXMud3JhcHBlckNsYXNzLFxuICAgICAgb246IGV4dGVuZCh0aGlzLmNyZWF0ZUV2ZW50TWFwKCksIHtcbiAgICAgICAgc2Nyb2xsOiBkZWJvdW5jZShiaW5kKHRoaXMuaGFuZGxlU2Nyb2xsLCB0aGlzKSwgMzApLFxuICAgICAgICB0b3VjaHN0YXJ0OiB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsXG4gICAgICAgIHRvdWNobW92ZTogdGhyb3R0bGUoYmluZCh0aGlzLmhhbmRsZVRvdWNoTW92ZSwgdGhpcyksIDI1KSxcbiAgICAgICAgdG91Y2hlbmQ6IHRoaXMuaGFuZGxlVG91Y2hFbmRcbiAgICAgIH0pXG4gICAgfSwgdGhpcy5jcmVhdGVDaGlsZHJlbihjcmVhdGVFbGVtZW50KSlcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnaW5kaWNhdG9yJyxcbiAgcHJvcHM6IHtcbiAgICBjb3VudDogW051bWJlciwgU3RyaW5nXSxcbiAgICBhY3RpdmU6IFtOdW1iZXIsIFN0cmluZ11cbiAgfSxcbiAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTnVtYmVyKHRoaXMuY291bnQpOyArK2kpIHtcbiAgICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBbJ3dlZXgtaW5kaWNhdG9yLWl0ZW0nXVxuICAgICAgaWYgKGkgPT09IE51bWJlcih0aGlzLmFjdGl2ZSkpIHtcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKCd3ZWV4LWluZGljYXRvci1pdGVtLWFjdGl2ZScpXG4gICAgICB9XG4gICAgICBjaGlsZHJlbi5wdXNoKGNyZWF0ZUVsZW1lbnQoJ21hcmsnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBjbGFzc05hbWVzLmpvaW4oJyAnKVxuICAgICAgfSkpXG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCduYXYnLCB7XG4gICAgICBhdHRyczogeyAnd2VleC10eXBlJzogJ2luZGljYXRvcicgfSxcbiAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC1pbmRpY2F0b3InXG4gICAgfSwgY2hpbGRyZW4pXG4gIH1cbn1cbiIsImNvbnN0IFRSQU5TSVRJT05fVElNRSA9IDIwMFxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1ldGhvZHM6IHtcbiAgICAvLyBnZXQgc3RhbmRhcmQgaW5kZXhcbiAgICBub3JtYWxpemVJbmRleCAoaW5kZXgpIHtcbiAgICAgIGNvbnN0IG5ld0luZGV4ID0gKGluZGV4ICsgdGhpcy5mcmFtZUNvdW50KSAlIHRoaXMuZnJhbWVDb3VudFxuICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG5ld0luZGV4LCAwKSwgdGhpcy5mcmFtZUNvdW50IC0gMSlcbiAgICB9LFxuXG4gICAgc2xpZGVUbyAoaW5kZXgpIHtcbiAgICAgIGNvbnN0IG5ld0luZGV4ID0gdGhpcy5ub3JtYWxpemVJbmRleChpbmRleClcbiAgICAgIHRoaXMuaW5uZXJPZmZzZXQgKz0gTWF0aC5zaWduKHRoaXMuY3VycmVudEluZGV4IC0gaW5kZXgpICogdGhpcy53cmFwcGVyV2lkdGhcblxuICAgICAgY29uc3QgaW5uZXIgPSB0aGlzLiRyZWZzLmlubmVyXG4gICAgICBpZiAoaW5uZXIpIHtcbiAgICAgICAgLy8gVE9ETzogd2lsbC1jaGFuZ2UgfCBzZXQgc3R5bGVzIHRvZ2V0aGVyXG4gICAgICAgIGlubmVyLnN0eWxlLnRyYW5zaXRpb24gPSBgdHJhbnNmb3JtIC4ycyBlYXNlLWluLW91dGBcbiAgICAgICAgaW5uZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7dGhpcy5pbm5lck9mZnNldH1weCwgMCwgMClgXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlubmVyLnN0eWxlLnRyYW5zaXRpb24gPSAnJ1xuICAgICAgICB9LCBUUkFOU0lUSU9OX1RJTUUpXG4gICAgICB9XG5cbiAgICAgIGlmIChuZXdJbmRleCAhPT0gdGhpcy5jdXJyZW50SW5kZXgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBuZXdJbmRleFxuICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB0aGlzLmNyZWF0ZUV2ZW50KCdjaGFuZ2UnLCB7XG4gICAgICAgICAgaW5kZXg6IHRoaXMuY3VycmVudEluZGV4XG4gICAgICAgIH0pKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5yZW9yZGVyKCkgfSwgVFJBTlNJVElPTl9USU1FKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICByZW9yZGVyICgpIHtcbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgcHJldkluZGV4ID0gdGhpcy5ub3JtYWxpemVJbmRleCh0aGlzLmN1cnJlbnRJbmRleCAtIDEpXG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9IHRoaXMubm9ybWFsaXplSW5kZXgodGhpcy5jdXJyZW50SW5kZXggKyAxKVxuICAgICAgICAvLyBUT0RPOiBjbG9uZSBmcmFtZSB3aGVuIHByZXZJbmRleCA9PT0gbmV4dEluZGV4XG4gICAgICAgIC8vIGlmIChwcmV2SW5kZXggIT09IG5leHRJbmRleCkge1xuICAgICAgICAvLyB9XG4gICAgICAgIGNvbnN0IHByZXZDZWxsID0gdGhpcy5fY2VsbHNbcHJldkluZGV4XVxuICAgICAgICBjb25zdCBuZXh0Q2VsbCA9IHRoaXMuX2NlbGxzW25leHRJbmRleF1cbiAgICAgICAgaWYgKHByZXZDZWxsICYmIHByZXZDZWxsLmVsbSkge1xuICAgICAgICAgIGNvbnN0IHByZXZPZmZzZXQgPSAtdGhpcy53cmFwcGVyV2lkdGggLSB0aGlzLmlubmVyT2Zmc2V0XG4gICAgICAgICAgcHJldkNlbGwuZWxtLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3ByZXZPZmZzZXR9cHgsIDAsIDApYFxuICAgICAgICB9XG4gICAgICAgIGlmIChuZXh0Q2VsbCAmJiBuZXh0Q2VsbC5lbG0pIHtcbiAgICAgICAgICBjb25zdCBuZXh0T2Zmc2V0ID0gdGhpcy53cmFwcGVyV2lkdGggLSB0aGlzLmlubmVyT2Zmc2V0XG4gICAgICAgICAgbmV4dENlbGwuZWxtLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke25leHRPZmZzZXR9cHgsIDAsIDApYFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBuZXh0ICgpIHtcbiAgICAgIHRoaXMuc2xpZGVUbyh0aGlzLmN1cnJlbnRJbmRleCArIDEpXG4gICAgfSxcblxuICAgIHByZXYgKCkge1xuICAgICAgdGhpcy5zbGlkZVRvKHRoaXMuY3VycmVudEluZGV4IC0gMSlcbiAgICB9LFxuXG4gICAgaGFuZGxlVG91Y2hTdGFydCAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAvLyBjb25zb2xlLmxvZygndG91Y2ggc3RhcnQnLCBldmVudClcbiAgICAgIGNvbnN0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF1cbiAgICAgIC8vIGNvbnNvbGUubG9nKCd0b3VjaCBzdGFydCcsIGV2ZW50LnRhcmdldCwgZXZlbnQudGFyZ2V0LnBhZ2VZKVxuICAgICAgLy8gY29uc29sZS5sb2coJ3RvdWNoZXMnLCB0b3VjaClcbiAgICAgIHRoaXMuX3RvdWNoUGFyYW1zID0ge1xuICAgICAgICBvcmlnaW5hbFRyYW5zZm9ybTogdGhpcy4kcmVmcy5pbm5lci5zdHlsZS50cmFuc2Zvcm0sXG4gICAgICAgIHN0YXJ0VG91Y2hFdmVudDogdG91Y2gsXG4gICAgICAgIHN0YXJ0WDogdG91Y2gucGFnZVgsXG4gICAgICAgIHN0YXJ0WTogdG91Y2gucGFnZVksXG4gICAgICAgIHRpbWVTdGFtcDogZXZlbnQudGltZVN0YW1wXG4gICAgICB9XG4gICAgfSxcblxuICAgIGhhbmRsZVRvdWNoTW92ZSAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAvLyBjb25zb2xlLmxvZygndG91Y2ggbW92ZScpXG4gICAgICBpZiAodGhpcy5fdG91Y2hQYXJhbXMpIHtcbiAgICAgICAgY29uc3QgaW5uZXIgPSB0aGlzLiRyZWZzLmlubmVyXG4gICAgICAgIGNvbnN0IHsgc3RhcnRYIH0gPSB0aGlzLl90b3VjaFBhcmFtc1xuICAgICAgICBjb25zdCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdXG4gICAgICAgIGNvbnN0IG9mZnNldFggPSB0b3VjaC5wYWdlWCAtIHN0YXJ0WFxuICAgICAgICAvLyBjb25zb2xlLmxvZygnb2Zmc2V0WCcsIG9mZnNldFgsICdzdGFydFgnLCBzdGFydFgsICdwYWdlWCcsIHRvdWNoLnBhZ2VYKVxuICAgICAgICB0aGlzLl90b3VjaFBhcmFtcy5vZmZzZXRYID0gb2Zmc2V0WFxuXG4gICAgICAgIGlmIChpbm5lciAmJiBvZmZzZXRYKSB7XG4gICAgICAgICAgaW5uZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7dGhpcy5pbm5lck9mZnNldCArIG9mZnNldFh9cHgsIDAsIDApYFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGhhbmRsZVRvdWNoRW5kIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd0b3VjaCBlbmQnKVxuICAgICAgY29uc3QgaW5uZXIgPSB0aGlzLiRyZWZzLmlubmVyXG4gICAgICBpZiAodGhpcy5fdG91Y2hQYXJhbXMpIHtcbiAgICAgICAgY29uc3QgeyBvZmZzZXRYIH0gPSB0aGlzLl90b3VjaFBhcmFtc1xuICAgICAgICBpZiAoaW5uZXIpIHtcbiAgICAgICAgICBjb25zdCByZXNldCA9IE1hdGguYWJzKG9mZnNldFggLyB0aGlzLndyYXBwZXJXaWR0aCkgPCAwLjJcbiAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBvZmZzZXRYID4gMCA/IDEgOiAtMVxuICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gcmVzZXQgPyB0aGlzLmN1cnJlbnRJbmRleCA6ICh0aGlzLmN1cnJlbnRJbmRleCAtIGRpcmVjdGlvbilcbiAgICAgICAgICB0aGlzLnNsaWRlVG8obmV3SW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRlbGV0ZSB0aGlzLl90b3VjaFBhcmFtc1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgYmFzZSwgZXZlbnQgfSBmcm9tICcuLi8uLi9taXhpbnMnXG5pbXBvcnQgeyB2YWxpZGF0ZVN0eWxlcyB9IGZyb20gJy4uLy4uL3ZhbGlkYXRvcidcbmltcG9ydCB7IHRocm90dGxlLCBiaW5kLCBleHRlbmQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBpbmRpY2F0b3IgZnJvbSAnLi9pbmRpY2F0b3InXG5pbXBvcnQgc2xpZGVNaXhpbiBmcm9tICcuL3NsaWRlTWl4aW4nXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWl4aW5zOiBbYmFzZSwgZXZlbnQsIHNsaWRlTWl4aW5dLFxuICBwcm9wczoge1xuICAgICdhdXRvLXBsYXknOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBCb29sZWFuXSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBpbnRlcnZhbDoge1xuICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcbiAgICAgIGRlZmF1bHQ6IDMwMDBcbiAgICB9XG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRJbmRleDogMCxcbiAgICAgIGZyYW1lQ291bnQ6IDBcbiAgICB9XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGNvbXB1dGVXcmFwcGVyU2l6ZSAoKSB7XG4gICAgICBjb25zdCB3cmFwcGVyID0gdGhpcy4kcmVmcy53cmFwcGVyXG4gICAgICBpZiAod3JhcHBlcikge1xuICAgICAgICBjb25zdCByZWN0ID0gd3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICB0aGlzLndyYXBwZXJXaWR0aCA9IHJlY3Qud2lkdGhcbiAgICAgICAgdGhpcy53cmFwcGVySGVpZ2h0ID0gcmVjdC5oZWlnaHRcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlTGF5b3V0ICgpIHtcbiAgICAgIHRoaXMuY29tcHV0ZVdyYXBwZXJTaXplKClcbiAgICAgIGNvbnN0IGlubmVyID0gdGhpcy4kcmVmcy5pbm5lclxuICAgICAgaWYgKGlubmVyKSB7XG4gICAgICAgIGlubmVyLnN0eWxlLndpZHRoID0gdGhpcy53cmFwcGVyV2lkdGggKiB0aGlzLmZyYW1lQ291bnQgKyAncHgnXG4gICAgICB9XG4gICAgfSxcblxuICAgIGZvcm1hdENoaWxkcmVuIChjcmVhdGVFbGVtZW50KSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuJHNsb3RzLmRlZmF1bHQgfHwgW11cbiAgICAgIHJldHVybiBjaGlsZHJlbi5maWx0ZXIodm5vZGUgPT4ge1xuICAgICAgICBpZiAoIXZub2RlLnRhZykgcmV0dXJuIGZhbHNlXG4gICAgICAgIGlmICh2bm9kZS5jb21wb25lbnRPcHRpb25zICYmIHZub2RlLmNvbXBvbmVudE9wdGlvbnMudGFnID09PSAnaW5kaWNhdG9yJykge1xuICAgICAgICAgIHRoaXMuX2luZGljYXRvciA9IGNyZWF0ZUVsZW1lbnQoaW5kaWNhdG9yLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogdm5vZGUuZGF0YS5zdGF0aWNDbGFzcyxcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB2bm9kZS5kYXRhLnN0YXRpY1N0eWxlLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgY291bnQ6IHRoaXMuZnJhbWVDb3VudCxcbiAgICAgICAgICAgICAgYWN0aXZlOiB0aGlzLmN1cnJlbnRJbmRleFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0pLm1hcCh2bm9kZSA9PiB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdsaScsIHtcbiAgICAgICAgICByZWY6ICdjZWxscycsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LXNsaWRlci1jZWxsJ1xuICAgICAgICB9LCBbdm5vZGVdKVxuICAgICAgfSlcbiAgICB9XG4gIH0sXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgdGhpcy53ZWV4VHlwZSA9ICdzbGlkZXInXG4gICAgdGhpcy5jdXJyZW50SW5kZXggPSAwXG4gICAgdGhpcy5pbm5lck9mZnNldCA9IDBcbiAgICB0aGlzLl9pbmRpY2F0b3IgPSBudWxsXG4gICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVMYXlvdXQoKVxuICAgIH0pXG4gIH0sXG5cbiAgYmVmb3JlVXBkYXRlICgpIHtcbiAgICB0aGlzLnVwZGF0ZUxheW91dCgpXG4gICAgdGhpcy5yZW9yZGVyKClcbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICBpZiAodGhpcy5hdXRvUGxheSkge1xuICAgICAgY29uc3QgaW50ZXJ2YWwgPSBOdW1iZXIodGhpcy5pbnRlcnZhbClcbiAgICAgIHRoaXMuX2xhc3RTbGlkZVRpbWUgPSBEYXRlLm5vdygpXG5cbiAgICAgIGNvbnN0IGF1dG9QbGF5Rm4gPSBiaW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2F1dG9QbGF5VGltZXIpXG4gICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICAgICAgbGV0IG5leHRUaWNrID0gaW50ZXJ2YWwgLSBub3cgKyB0aGlzLl9sYXN0U2xpZGVUaW1lXG4gICAgICAgIG5leHRUaWNrID0gbmV4dFRpY2sgPiAxMDAgPyBuZXh0VGljayA6IGludGVydmFsXG5cbiAgICAgICAgdGhpcy5uZXh0KClcbiAgICAgICAgdGhpcy5fbGFzdFNsaWRlVGltZSA9IG5vd1xuICAgICAgICB0aGlzLl9hdXRvUGxheVRpbWVyID0gc2V0VGltZW91dChhdXRvUGxheUZuLCBuZXh0VGljaylcbiAgICAgIH0sIHRoaXMpXG5cbiAgICAgIHRoaXMuX2F1dG9QbGF5VGltZXIgPSBzZXRUaW1lb3V0KGF1dG9QbGF5Rm4sIGludGVydmFsKVxuICAgIH1cblxuICAgIHRoaXMucmVvcmRlcigpXG4gIH0sXG5cbiAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgIHZhbGlkYXRlU3R5bGVzKCdzbGlkZXInLCB0aGlzLiR2bm9kZS5kYXRhICYmIHRoaXMuJHZub2RlLmRhdGEuc3RhdGljU3R5bGUpXG4gICAgfVxuXG4gICAgdGhpcy5fY2VsbHMgPSB0aGlzLmZvcm1hdENoaWxkcmVuKGNyZWF0ZUVsZW1lbnQpXG4gICAgdGhpcy5mcmFtZUNvdW50ID0gdGhpcy5fY2VsbHMubGVuZ3RoXG5cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChcbiAgICAgICduYXYnLFxuICAgICAge1xuICAgICAgICByZWY6ICd3cmFwcGVyJyxcbiAgICAgICAgYXR0cnM6IHsgJ3dlZXgtdHlwZSc6ICdzbGlkZXInIH0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC1zbGlkZXIgd2VleC1zbGlkZXItd3JhcHBlcicsXG4gICAgICAgIG9uOiBleHRlbmQodGhpcy5jcmVhdGVFdmVudE1hcCgpLCB7XG4gICAgICAgICAgdG91Y2hzdGFydDogdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LFxuICAgICAgICAgIHRvdWNobW92ZTogdGhyb3R0bGUoYmluZCh0aGlzLmhhbmRsZVRvdWNoTW92ZSwgdGhpcyksIDI1KSxcbiAgICAgICAgICB0b3VjaGVuZDogdGhpcy5oYW5kbGVUb3VjaEVuZFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgY3JlYXRlRWxlbWVudCgndWwnLCB7XG4gICAgICAgICAgcmVmOiAnaW5uZXInLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC1zbGlkZXItaW5uZXInXG4gICAgICAgIH0sIHRoaXMuX2NlbGxzKSxcbiAgICAgICAgdGhpcy5faW5kaWNhdG9yXG4gICAgICBdXG4gICAgKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIHJlbmRlciAoKSB7XG4gICAgLy8gVE9ETzogYWRkIHRhZyBuZXN0aW5nIHZhbGlkYXRpb25cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHRoaXMuJG9wdGlvbnMuX2NvbXBvbmVudFRhZ1xuICAgICAgY29uc3QgcGFyZW50VGFnID0gdGhpcy4kcGFyZW50LiRvcHRpb25zLl9jb21wb25lbnRUYWdcbiAgICAgIGNvbnNvbGUud2FybihgW1Z1ZSBSZW5kZXJdIFRoZSA8JHt0YWd9PiBjYW4ndCBiZSB0aGUgY2hpbGQgb2YgPCR7cGFyZW50VGFnfT4uYClcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuIiwiaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4uL21peGlucydcbmltcG9ydCB7IHZhbGlkYXRlU3R5bGVzIH0gZnJvbSAnLi4vdmFsaWRhdG9yJ1xuXG4vKipcbiAqIEdldCB0ZXh0IHN0eWxlc1xuICovXG5mdW5jdGlvbiBnZXRUZXh0U3R5bGUgKGNvbnRleHQgPSB7fSkge1xuICBjb25zdCBsaW5lcyA9IHBhcnNlSW50KGNvbnRleHQubGluZXMpIHx8IDBcbiAgaWYgKGxpbmVzID4gMCkge1xuICAgIHJldHVybiB7XG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICB3ZWJraXRMaW5lQ2xhbXA6IGxpbmVzXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWl4aW5zOiBbYmFzZV0sXG4gIHByb3BzOiB7XG4gICAgbGluZXM6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgdmFsdWU6IFtTdHJpbmddXG4gIH0sXG5cbiAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgIHZhbGlkYXRlU3R5bGVzKCd0ZXh0JywgdGhpcy4kdm5vZGUuZGF0YSAmJiB0aGlzLiR2bm9kZS5kYXRhLnN0YXRpY1N0eWxlKVxuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdwJywge1xuICAgICAgYXR0cnM6IHsgJ3dlZXgtdHlwZSc6ICd0ZXh0JyB9LFxuICAgICAgb246IHRoaXMuY3JlYXRlRXZlbnRNYXAoKSxcbiAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC10ZXh0JyxcbiAgICAgIHN0YXRpY1N0eWxlOiBnZXRUZXh0U3R5bGUodGhpcylcbiAgICB9LCB0aGlzLiRzbG90cy5kZWZhdWx0IHx8IFt0aGlzLnZhbHVlXSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4uL21peGlucydcbmltcG9ydCB7IGV4dGVuZCwgbWFwRm9ybUV2ZW50cywgc2V0U2VsZWN0aW9uUmFuZ2UsIGdldFNlbGVjdGlvblJhbmdlIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyB2YWxpZGF0ZVN0eWxlcyB9IGZyb20gJy4uL3ZhbGlkYXRvcidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFtiYXNlXSxcbiAgcHJvcHM6IHtcbiAgICB2YWx1ZTogU3RyaW5nLFxuICAgIHBsYWNlaG9sZGVyOiBTdHJpbmcsXG4gICAgZGlzYWJsZWQ6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEJvb2xlYW5dLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGF1dG9mb2N1czoge1xuICAgICAgdHlwZTogW1N0cmluZywgQm9vbGVhbl0sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgcm93czoge1xuICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcbiAgICAgIGRlZmF1bHQ6IDJcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzZXRTZWxlY3Rpb25SYW5nZSxcbiAgICBnZXRTZWxlY3Rpb25SYW5nZVxuICB9LFxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgdmFsaWRhdGVTdHlsZXMoJ3RleHRhcmVhJywgdGhpcy4kdm5vZGUuZGF0YSAmJiB0aGlzLiR2bm9kZS5kYXRhLnN0YXRpY1N0eWxlKVxuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdodG1sOnRleHRhcmVhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgJ3dlZXgtdHlwZSc6ICd0ZXh0YXJlYScsXG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICBkaXNhYmxlZDogKHRoaXMuZGlzYWJsZWQgIT09ICdmYWxzZScgJiYgdGhpcy5kaXNhYmxlZCAhPT0gZmFsc2UpLFxuICAgICAgICBhdXRvZm9jdXM6ICh0aGlzLmF1dG9mb2N1cyAhPT0gJ2ZhbHNlJyAmJiB0aGlzLmF1dG9mb2N1cyAhPT0gZmFsc2UpLFxuICAgICAgICBwbGFjZWhvbGRlcjogdGhpcy5wbGFjZWhvbGRlcixcbiAgICAgICAgcm93czogdGhpcy5yb3dzXG4gICAgICB9LFxuICAgICAgb246IGV4dGVuZCh0aGlzLmNyZWF0ZUV2ZW50TWFwKCksIG1hcEZvcm1FdmVudHModGhpcykpLFxuICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LXRleHRhcmVhJ1xuICAgIH0sIHRoaXMudmFsdWUpXG4gIH1cbn1cbiIsImltcG9ydCB7IGJhc2UgfSBmcm9tICcuLi9taXhpbnMnXG5pbXBvcnQgeyB2YWxpZGF0ZVN0eWxlcyB9IGZyb20gJy4uL3ZhbGlkYXRvcidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFtiYXNlXSxcbiAgcHJvcHM6IHtcbiAgICBzcmM6IFN0cmluZyxcbiAgICBwbGF5U3RhdHVzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAncGF1c2UnLFxuICAgICAgdmFsaWRhdG9yICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gWydwbGF5JywgJ3BhdXNlJ10uaW5kZXhPZih2YWx1ZSkgIT09IC0xXG4gICAgICB9XG4gICAgfSxcblxuICAgIGF1dG9wbGF5OiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBCb29sZWFuXSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBhdXRvUGxheToge1xuICAgICAgdHlwZTogW1N0cmluZywgQm9vbGVhbl0sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG5cbiAgICBwbGF5c2lubGluZToge1xuICAgICAgdHlwZTogW1N0cmluZywgQm9vbGVhbl0sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgY29udHJvbHM6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEJvb2xlYW5dLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgIHZhbGlkYXRlU3R5bGVzKCd2aWRlbycsIHRoaXMuJHZub2RlLmRhdGEgJiYgdGhpcy4kdm5vZGUuZGF0YS5zdGF0aWNTdHlsZSlcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBzdXBwb3J0IHBsYXlTdGF0dXNcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnaHRtbDp2aWRlbycsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgICd3ZWV4LXR5cGUnOiAndmlkZW8nLFxuICAgICAgICBhdXRvcGxheTogKHRoaXMuYXV0b3BsYXkgIT09ICdmYWxzZScgJiYgdGhpcy5hdXRvcGxheSAhPT0gZmFsc2UpLFxuICAgICAgICBhdXRvUGxheTogKHRoaXMuYXV0b3BsYXkgIT09ICdmYWxzZScgJiYgdGhpcy5hdXRvcGxheSAhPT0gZmFsc2UpLFxuICAgICAgICBjb250cm9sczogdGhpcy5jb250cm9scyxcbiAgICAgICAgc3JjOiB0aGlzLnNyY1xuICAgICAgfSxcbiAgICAgIG9uOiB0aGlzLmNyZWF0ZUV2ZW50TWFwKFsnc3RhcnQnLCAncGF1c2UnLCAnZmluaXNoJywgJ2ZhaWwnXSksXG4gICAgICBzdGF0aWNDbGFzczogJ3dlZXgtdmlkZW8nXG4gICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgYmFzZSwgZXZlbnQgfSBmcm9tICcuLi9taXhpbnMnXG5pbXBvcnQgeyB2YWxpZGF0ZVN0eWxlcyB9IGZyb20gJy4uL3ZhbGlkYXRvcidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFtiYXNlLCBldmVudF0sXG4gIHByb3BzOiB7XG4gICAgc3JjOiBTdHJpbmdcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC8vIFRPRE86IGNoZWNrIGNyb3NzLW9yaWdpblxuICAgIGdvQmFjayAoKSB7XG4gICAgICBpZiAodGhpcy4kZWwpIHtcbiAgICAgICAgdGhpcy4kZWwuY29udGVudFdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICAgICAgfVxuICAgIH0sXG4gICAgZ29Gb3J3YXJkICgpIHtcbiAgICAgIGlmICh0aGlzLiRlbCkge1xuICAgICAgICB0aGlzLiRlbC5jb250ZW50V2luZG93Lmhpc3RvcnkuZm9yd2FyZCgpXG4gICAgICB9XG4gICAgfSxcbiAgICByZWxvYWQgKCkge1xuICAgICAgaWYgKHRoaXMuJGVsKSB7XG4gICAgICAgIHRoaXMuJGVsLmNvbnRlbnRXaW5kb3cuaGlzdG9yeS5yZWxvYWQoKVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICBpZiAodGhpcy4kZWwpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ3BhZ2VmaW5pc2gnLCB0aGlzLmNyZWF0ZUN1c3RvbUV2ZW50KHRoaXMsICdwYWdlc3RhcnQnLCB7IHVybDogdGhpcy5zcmMgfSkpXG4gICAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLiRlbWl0KCdwYWdlZmluaXNoJywgdGhpcy5jcmVhdGVDdXN0b21FdmVudCh0aGlzLCAncGFnZWZpbmlzaCcsIHsgdXJsOiB0aGlzLnNyYyB9KSlcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuXG4gIHJlbmRlciAoY3JlYXRlRWxlbWVudCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICB2YWxpZGF0ZVN0eWxlcygnd2ViJywgdGhpcy4kdm5vZGUuZGF0YSAmJiB0aGlzLiR2bm9kZS5kYXRhLnN0YXRpY1N0eWxlKVxuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdpZnJhbWUnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICAnd2VleC10eXBlJzogJ3dlYicsXG4gICAgICAgIHNyYzogdGhpcy5zcmNcbiAgICAgIH0sXG4gICAgICBvbjogdGhpcy5jcmVhdGVFdmVudE1hcChbJ2Vycm9yJ10pLFxuICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LXdlYidcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IHZhbGlkYXRlU3R5bGVzIH0gZnJvbSAnLi4vdmFsaWRhdG9yJ1xuXG5sZXQgd2FybmVkID0gZmFsc2VcblxuZnVuY3Rpb24gZ2V0V2FyblRleHQgKHByb3ApIHtcbiAgcmV0dXJuIGBbVnVlIFJuZWRlcl0gXCIke3Byb3B9XCIgaXMgbm90IGEgc3RhbmRhcmQgQ1NTIHByb3BlcnR5LGBcbiAgICArICdpdCBtYXkgbm90IHN1cHBvcnQgdmVyeSB3ZWxsIG9uIHdlZXggdnVlIHJlbmRlci4nXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZSAoc3R5bGVzKSB7XG4gIGNvbnN0IHJlYWxTdHlsZSA9IHt9XG4gIGZvciAoY29uc3Qga2V5IGluIHN0eWxlcykge1xuICAgIGxldCB2YWx1ZSA9IHN0eWxlc1trZXldXG5cbiAgICAvLyBUT0RPOiBhZGQgbW9yZSByZWxpYWJsZSBjaGVja1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICB2YWx1ZSArPSAncHgnXG4gICAgfVxuXG4gICAgLy8gd2FybiBmb3IgdW5zdXBwb3J0ZWQgcHJvcGVydGllc1xuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICBjYXNlICdsaW5lcyc6XG4gICAgICBjYXNlICdpdGVtLWNvbG9yJzpcbiAgICAgIGNhc2UgJ2l0ZW1Db2xvcic6XG4gICAgICBjYXNlICdpdGVtLXNlbGVjdGVkLWNvbG9yJzpcbiAgICAgIGNhc2UgJ2l0ZW1TZWxlY3RlZENvbG9yJzpcbiAgICAgIGNhc2UgJ2l0ZW0tc2l6ZSc6XG4gICAgICBjYXNlICdpdGVtU2l6ZSc6IGNvbnNvbGUud2FybihnZXRXYXJuVGV4dChrZXkpKTsgYnJlYWtcbiAgICB9XG5cbiAgICByZWFsU3R5bGVba2V5XSA9IHZhbHVlXG4gIH1cbiAgcmV0dXJuIHJlYWxTdHlsZVxufVxuXG5mdW5jdGlvbiBnZXRTdHlsZU1hcCAoY29tcG9uZW50KSB7XG4gIGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50LiR2bm9kZSAmJiBjb21wb25lbnQuJHZub2RlLmNvbnRleHQpIHtcbiAgICBjb25zdCAkb3B0aW9ucyA9IGNvbXBvbmVudC4kdm5vZGUuY29udGV4dC4kb3B0aW9uc1xuICAgIGlmICgkb3B0aW9ucyAmJiAkb3B0aW9ucy5zdHlsZSkge1xuICAgICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgICAgd2FybmVkID0gdHJ1ZVxuICAgICAgICBjb25zb2xlLmVycm9yKCdbSW52YWxpZCBCdW5kbGUgRm9ybWF0XSBUaGlzIGJ1bmRsZSBmb3JtYXQgaXMgJ1xuICAgICAgICAgICsgJ2dlbmVyYXRlZCBmb3IgQW5kcm9pZCBhbmQgaU9TIHBsYXRmb3JtLCAnXG4gICAgICAgICAgKyAncGxlYXNlIHVzZSBcInZ1ZS1sb2FkZXJcIiB0byBjb21waWxlIHRoZSBcIi52dWVcIiBmaWxlIG9uIHRoZSB3ZWIuJylcbiAgICAgIH1cbiAgICAgIHJldHVybiAkb3B0aW9ucy5zdHlsZVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTdGF0aWNDbGFzcyAoY29tcG9uZW50KSB7XG4gIGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50LiR2bm9kZSAmJiBjb21wb25lbnQuJHZub2RlLmRhdGEpIHtcbiAgICBjb25zdCBkYXRhID0gY29tcG9uZW50LiR2bm9kZS5kYXRhXG4gICAgcmV0dXJuIFtdLmNvbmNhdChkYXRhLnN0YXRpY0NsYXNzLCBkYXRhLmNsYXNzKVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudFN0eWxlIChjb250ZXh0KSB7XG4gIGNvbnN0IHN0eWxlTWFwID0gZ2V0U3R5bGVNYXAoY29udGV4dClcbiAgY29uc3Qgc3RhdGljQ2xhc3MgPSBnZXRTdGF0aWNDbGFzcyhjb250ZXh0KVxuXG4gIGlmIChzdHlsZU1hcCAmJiBBcnJheS5pc0FycmF5KHN0YXRpY0NsYXNzKSkge1xuICAgIGNvbnN0IHN0eWxlcyA9IHN0YXRpY0NsYXNzLnJlZHVjZSgocmVzLCBuYW1lKSA9PiB7XG4gICAgICByZXR1cm4gZXh0ZW5kKHJlcywgc3R5bGVNYXBbbmFtZV0pXG4gICAgfSwge30pXG5cbiAgICByZXR1cm4gbm9ybWFsaXplKHN0eWxlcylcbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZVN0eWxlcyAoY29udGV4dCkge1xuICBjb25zdCBzdHlsZXMgPSBnZXRDb21wb25lbnRTdHlsZShjb250ZXh0KVxuICBpZiAoY29udGV4dC4kZWwgJiYgc3R5bGVzKSB7XG4gICAgdmFsaWRhdGVTdHlsZXMoY29udGV4dC4kb3B0aW9ucyAmJiBjb250ZXh0LiRvcHRpb25zLl9jb21wb25lbnRUYWcsIHN0eWxlcylcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZXMpIHtcbiAgICAgIGNvbnRleHQuJGVsLnN0eWxlW2tleV0gPSBzdHlsZXNba2V5XVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1vdW50ZWQgKCkge1xuICAgIG1lcmdlU3R5bGVzKHRoaXMpXG4gIH0sXG4gIGJlZm9yZVVwZGF0ZSAoKSB7XG4gICAgbWVyZ2VTdHlsZXModGhpcylcbiAgfVxufVxuIiwiaW1wb3J0IHNlbXZlciBmcm9tICdzZW12ZXInXG5pbXBvcnQgeyBzZXRWaWV3cG9ydCB9IGZyb20gJy4vZW52J1xuaW1wb3J0ICogYXMgY29tcG9uZW50cyBmcm9tICcuL2NvbXBvbmVudHMnXG5pbXBvcnQgc3R5bGVNaXhpbiBmcm9tICcuL21peGlucy9zdHlsZSdcblxuZnVuY3Rpb24gaW5zdGFsbCAoVnVlKSB7XG4gIHNldFZpZXdwb3J0KClcblxuICBWdWUucHJvdG90eXBlLiRnZXRDb25maWcgPSAoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKCdbVnVlIFJlbmRlcl0gXCJ0aGlzLiRnZXRDb25maWdcIiBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIFwid2VleC5jb25maWdcIiBpbnN0ZWFkLicpXG4gICAgcmV0dXJuIHdpbmRvdy53ZWV4LmNvbmZpZ1xuICB9XG5cbiAgY29uc3QgaHRtbFJlZ2V4ID0gL15odG1sOi9pXG4gIFZ1ZS5jb25maWcuaXNSZXNlcnZlZFRhZyA9IHRhZyA9PiBodG1sUmVnZXgudGVzdCh0YWcpXG4gIFZ1ZS5jb25maWcucGFyc2VQbGF0Zm9ybVRhZ05hbWUgPSB0YWcgPT4gdGFnLnJlcGxhY2UoaHRtbFJlZ2V4LCAnJylcblxuICBmb3IgKGNvbnN0IG5hbWUgaW4gY29tcG9uZW50cykge1xuICAgIFZ1ZS5jb21wb25lbnQobmFtZSwgY29tcG9uZW50c1tuYW1lXSlcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmIChzZW12ZXIubHQoVnVlLnZlcnNpb24sICcyLjEuNScpKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFtWdWUgUmVuZGVyXSBUaGUgdmVyc2lvbiBvZiBWdWUgc2hvdWxkIGJlIGAgK1xuICAgICAgICBgZ3JlYXRlciB0aGFuIDIuMS41LCBjdXJyZW50IGlzICR7VnVlLnZlcnNpb259LmApXG4gICAgfVxuICAgIGNvbnNvbGUuaW5mbyhgW1Z1ZSBSZW5kZXJdIFJlZ2lzdGVyZWQgY29tcG9uZW50czogYFxuICAgICAgKyBgWyR7T2JqZWN0LmtleXMoY29tcG9uZW50cykuam9pbignLCAnKX1dLmApXG5cbiAgICAvLyBtZXJnZSBzdHlsZXMgdG8gaW5saW5lXG4gICAgVnVlLm1peGluKHN0eWxlTWl4aW4pXG4gIH1cbn1cblxuLy8gYXV0byBpbnN0YWxsIGluIGRpc3QgbW9kZVxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5WdWUpIHtcbiAgaW5zdGFsbCh3aW5kb3cuVnVlKVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluc3RhbGxcbn1cbiJdLCJuYW1lcyI6WyJ0aGlzIiwicmVxdWlyZSQkMCIsImlzT2JqZWN0IiwicmVxdWlyZSQkMSIsImRvY3VtZW50IiwicmVxdWlyZSQkMiIsInJlcXVpcmUkJDMiLCJkUCIsInJlcXVpcmUkJDQiLCJnbG9iYWwiLCIkZXhwb3J0IiwidG9TdHJpbmciLCJJT2JqZWN0IiwidG9JbnRlZ2VyIiwibWluIiwidG9JT2JqZWN0IiwiZGVmaW5lZCIsInJlcXVpcmUkJDUiLCJhcmd1bWVudHMiLCJjb2YiLCJhbk9iamVjdCIsImdldEtleXMiLCJlbnVtQnVnS2V5cyIsIklFX1BST1RPIiwiUFJPVE9UWVBFIiwiaGFzIiwiVEFHIiwiY3JlYXRlIiwic2V0VG9TdHJpbmdUYWciLCJ0b09iamVjdCIsInJlcXVpcmUkJDkiLCJyZXF1aXJlJCQ4IiwicmVkZWZpbmUiLCJyZXF1aXJlJCQ3IiwiaGlkZSIsInJlcXVpcmUkJDYiLCJJdGVyYXRvcnMiLCJJVEVSQVRPUiIsIkFycmF5UHJvdG8iLCJjbGFzc29mIiwiYUZ1bmN0aW9uIiwiY3R4IiwicHJvY2VzcyIsIlByb21pc2UiLCJpc05vZGUiLCJTUEVDSUVTIiwiTElCUkFSWSIsInJlcXVpcmUkJDE3IiwicmVxdWlyZSQkMTYiLCJyZXF1aXJlJCQxNSIsInJlcXVpcmUkJDE0IiwicmVxdWlyZSQkMTMiLCJyZXF1aXJlJCQxMiIsInJlcXVpcmUkJDExIiwicmVxdWlyZSQkMTAiLCJUeXBlRXJyb3IiLCJjb25zdCIsImxldCIsIm1ldGEiLCJoYXNPd25Qcm9wZXJ0eSIsInFzIiwiZ2V0UGFyZW50U2Nyb2xsZXIiLCJxdWV1ZSIsIkNPTlRFTlRfQ0xBU1MiLCJNU0dfQ0xBU1MiLCJCVVRUT05fR1JPVVBfQ0xBU1MiLCJCVVRUT05fQ0xBU1MiLCJuYXZpZ2F0b3IiLCJpbml0IiwiRXZlbnQiLCJsaWIiLCJ1dGlscyIsInV0aWxzLmJpbmQiLCJzdHlsZVZhbGlkYXRvci5jb21tb24iLCJldmVudCIsInNoYXJlZC5jcmVhdGVMb2FkaW5nIiwic2hhcmVkLmNyZWF0ZVJlZnJlc2giLCJpbnN0YWxsIiwiY29tcG9uZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxHQUFHLGNBQWMsR0FBRyxNQUFNLENBQUM7OztZQUd0QixJQUFJLEtBQUssQ0FBQztZQUNWLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUTtnQkFDM0IsT0FBTyxDQUFDLEdBQUc7Z0JBQ1gsS0FBc0I7Z0JBQ3RCLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBc0IsQ0FBQztjQUM1QyxFQUFBLEtBQUssR0FBRyxXQUFXO2dCQUNqQixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQ2hDLENBQUMsRUFBQTs7Y0FFSixFQUFBLEtBQUssR0FBRyxXQUFXLEVBQUUsQ0FBQyxFQUFBOzs7O0FBSXBDLDJCQUEyQixHQUFHLE9BQU8sQ0FBQzs7QUFFdEMsSUFBSSxVQUFVLEdBQUcsR0FBRyxDQUFDO0FBQ3JCLElBQUksZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixJQUFJLGdCQUFnQixDQUFDOzs7QUFHbkUsSUFBSSxFQUFFLEdBQUcsVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUN6QixJQUFJLEdBQUcsR0FBRyxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Ozs7Ozs7QUFRVixJQUFJLGlCQUFpQixHQUFHLENBQUMsRUFBRSxDQUFDO0FBQzVCLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLGFBQWEs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LE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRSxFQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUE7TUFDekMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7TUFDZCxNQUFNO0lBQ1IsS0FBSyxLQUFLO01BQ1IsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQUUsRUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFBO01BQ3pDLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxFQUFFLEVBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQTtNQUN6QyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztNQUNkLE1BQU07SUFDUixLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTTtJQUMzRCxLQUFLLElBQUksRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNO0lBQ3pDLEtBQUssR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU07SUFDdkMsS0FBSyxJQUFJLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTTtJQUN6QyxLQUFLLEdBQUcsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNO0lBQ3ZDLEtBQUssSUFBSSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU07SUFDekMsU0FBUyxNQUFNLElBQUksU0FBUyxDQUFDLG9CQUFvQixHQUFHLEVBQUUsQ0FBQyxDQUFDO0dBQ3pEO0VBQ0QsT0FBTyxHQUFHLENBQUM7Q0FDWjs7QUFFRCxrQkFBa0IsR0FBRyxVQUFVLENBQUM7QUFDaEMsU0FBUyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtFQUMvQixJQUFJLElBQUksWUFBWSxVQUFVLEVBQUU7SUFDOUIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUs7TUFDdEIsRUFBQSxPQUFPLElBQUksQ0FBQyxFQUFBOztNQUVaLEVBQUEsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQTtHQUNyQjs7RUFFRCxJQUFJLEVBQUUsSUFBSSxZQUFZLFVBQVUsQ0FBQztJQUMvQixFQUFBLE9BQU8sSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUE7O0VBRXJDLEtBQUssQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0VBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0VBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7O0VBRWpCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxHQUFHO0lBQ3JCLEVBQUEsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsRUFBQTs7SUFFaEIsRUFBQSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBQTs7RUFFbkQsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztDQUNyQjs7QUFFRCxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDYixVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxTQUFTLElBQUksRUFBRTtFQUMxQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7RUFDMUQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7RUFFdEIsSUFBSSxDQUFDLENBQUM7SUFDSixFQUFBLE1BQU0sSUFBSSxTQUFTLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBQTs7RUFFckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDckIsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLEdBQUc7SUFDdkIsRUFBQSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFBOzs7RUFHckIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUCxFQUFBLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEVBQUE7O0lBRWxCLEVBQUEsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUE7Q0FDOUMsQ0FBQzs7QUFFRixVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxXQUFXO0VBQ3pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztDQUNuQixDQUFDOztBQUVGLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLFNBQVMsT0FBTyxFQUFFO0VBQzVDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOztFQUU5QyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssR0FBRztJQUNyQixFQUFBLE9BQU8sSUFBSSxDQUFDLEVBQUE7O0VBRWQsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRO0lBQzdCLEVBQUEsT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQTs7RUFFNUMsT0FBTyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Q0FDN0QsQ0FBQzs7O0FBR0YsYUFBYSxHQUFHLEtBQUssQ0FBQztBQUN0QixTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFO0VBQzNCLElBQUksQ0FBQyxLQUFLLFlBQVksS0FBSyxLQUFLLEtBQUssQ0FBQyxLQUFLLEtBQUssS0FBSztJQUNuRCxFQUFBLE9BQU8sS0FBSyxDQUFDLEVBQUE7O0VBRWYsSUFBSSxFQUFFLElBQUksWUFBWSxLQUFLLENBQUM7SUFDMUIsRUFBQSxPQUFPLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFBOztFQUVqQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzs7O0VBR25CLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0VBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxLQUFLLEVBQUU7SUFDdkQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0dBQ3RDLEVBQUUsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFOztJQUUxQixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUM7R0FDakIsQ0FBQyxDQUFDOztFQUVILElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtJQUNwQixNQUFNLElBQUksU0FBUyxDQUFDLHdCQUF3QixHQUFHLEtBQUssQ0FBQyxDQUFDO0dBQ3ZEOztFQUVELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztDQUNmOztBQUVELEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFdBQVc7RUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEtBQUssRUFBRTtJQUN4QyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7R0FDL0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztFQUNyQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7Q0FDbkIsQ0FBQzs7QUFFRixLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxXQUFXO0VBQ3BDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztDQUNuQixDQUFDOztBQUVGLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLFNBQVMsS0FBSyxFQUFFO0VBQzNDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7RUFDdkIsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztFQUNyQixLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQzs7RUFFN0IsSUFBSSxFQUFFLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztFQUN4RCxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsYUFBYSxDQUFDLENBQUM7RUFDekMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDOztFQUUvQixLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLEVBQUUscUJBQXFCLENBQUMsQ0FBQztFQUNqRSxLQUFLLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDOzs7RUFHcEQsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7OztFQUd2RCxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzs7O0VBR3ZELEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Ozs7RUFLckMsSUFBSSxNQUFNLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7RUFDMUQsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUFJLEVBQUU7SUFDNUMsT0FBTyxlQUFlLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0dBQ3JDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0VBQzFCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTs7SUFFZCxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksRUFBRTtNQUM5QixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzdCLENBQUMsQ0FBQztHQUNKO0VBQ0QsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUFJLEVBQUU7SUFDM0IsT0FBTyxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7R0FDcEMsQ0FBQyxDQUFDOztFQUVILE9BQU8sR0FBRyxDQUFDO0NBQ1osQ0FBQzs7O0FBR0YscUJBQXFCLEdBQUcsYUFBYSxDQUFDO0FBQ3RDLFNBQVMsYUFBYSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7RUFDbkMsT0FBTyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksRUFBRTtJQUNwRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUU7TUFDMUIsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDO0tBQ2hCLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0dBQ2hDLENBQUMsQ0FBQztDQUNKOzs7OztBQUtELFNBQVMsZUFBZSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7RUFDcEMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztFQUNwQixJQUFJLEdBQUcsYUFBYSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztFQUNsQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0VBQ3JCLElBQUksR0FBRyxhQUFhLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0VBQ2xDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7RUFDdEIsSUFBSSxHQUFHLGNBQWMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7RUFDbkMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztFQUN0QixJQUFJLEdBQUcsWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztFQUNqQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0VBQ3JCLE9BQU8sSUFBSSxDQUFDO0NBQ2I7O0FBRUQsU0FBUyxHQUFHLENBQUMsRUFBRSxFQUFFO0VBQ2YsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLEtBQUssR0FBRyxJQUFJLEVBQUUsS0FBSyxHQUFHLENBQUM7Q0FDdEQ7Ozs7Ozs7O0FBUUQsU0FBUyxhQUFhLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtFQUNsQyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsSUFBSSxFQUFFO0lBQ2pELE9BQU8sWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztHQUNsQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ2Q7O0FBRUQsU0FBUyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtFQUNqQyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztFQUMzQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRTtJQUM5QyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDckMsSUFBSSxHQUFHLENBQUM7O0lBRVIsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO01BQ1IsRUFBQSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUE7U0FDTixJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7TUFDYixFQUFBLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLFFBQVEsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBQTtTQUMzQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7O01BRWIsRUFBQSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFBO1NBQzNELElBQUksRUFBRSxFQUFFO01BQ1gsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO01BQzdCLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHO1FBQ3RCLEVBQUEsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBQTtNQUNoQixHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUNqQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDeEM7O01BRUMsRUFBQSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBQzVCLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFBOztJQUV6QyxLQUFLLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLE9BQU8sR0FBRyxDQUFDO0dBQ1osQ0FBQyxDQUFDO0NBQ0o7Ozs7Ozs7O0FBUUQsU0FBUyxhQUFhLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtFQUNsQyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsSUFBSSxFQUFFO0lBQ2pELE9BQU8sWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztHQUNsQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ2Q7O0FBRUQsU0FBUyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtFQUNqQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztFQUM1QixJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztFQUMzQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRTtJQUM5QyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDckMsSUFBSSxHQUFHLENBQUM7O0lBRVIsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO01BQ1IsRUFBQSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUE7U0FDTixJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7TUFDYixFQUFBLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLFFBQVEsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBQTtTQUMzQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNmLElBQUksQ0FBQyxLQUFLLEdBQUc7UUFDWCxFQUFBLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUE7O1FBRTlELEVBQUEsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEVBQUE7S0FDekQsTUFBTSxJQUFJLEVBQUUsRUFBRTtNQUNiLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQztNQUM3QixJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRztRQUN0QixFQUFBLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUE7TUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRztVQUNYLEVBQUEsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pDLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7VUFFMUMsRUFBQSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRTtnQkFDakMsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUE7T0FDMUM7UUFDQyxFQUFBLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFO2NBQ2pDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBQTtLQUNsQyxNQUFNO01BQ0wsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO01BQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRztVQUNYLEVBQUEsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztnQkFDNUIsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFBOztVQUUxQyxFQUFBLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7Z0JBQzVCLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFBO09BQzFDO1FBQ0MsRUFBQSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO2NBQzVCLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBQTtLQUNsQzs7SUFFRCxLQUFLLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLE9BQU8sR0FBRyxDQUFDO0dBQ1osQ0FBQyxDQUFDO0NBQ0o7O0FBRUQsU0FBUyxjQUFjLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtFQUNuQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0VBQ3JDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUFJLEVBQUU7SUFDMUMsT0FBTyxhQUFhLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0dBQ25DLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDZDs7QUFFRCxTQUFTLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO0VBQ2xDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7RUFDbkIsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDN0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxTQUFTLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO0lBQ3RELEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDOUMsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEIsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QixJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7O0lBRWQsSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUk7TUFDdEIsRUFBQSxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUE7O0lBRVosSUFBSSxFQUFFLEVBQUU7TUFDTixJQUFJLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxLQUFLLEdBQUcsRUFBRTs7UUFFaEMsR0FBRyxHQUFHLFFBQVEsQ0FBQztPQUNoQixNQUFNOztRQUVMLEdBQUcsR0FBRyxHQUFHLENBQUM7T0FDWDtLQUNGLE1BQU0sSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFOztNQUV2QixJQUFJLEVBQUU7UUFDSixFQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQTtNQUNSLElBQUksRUFBRTtRQUNKLEVBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFBOztNQUVSLElBQUksSUFBSSxLQUFLLEdBQUcsRUFBRTs7OztRQUloQixJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osSUFBSSxFQUFFLEVBQUU7VUFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1VBQ1gsQ0FBQyxHQUFHLENBQUMsQ0FBQztVQUNOLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDUCxNQUFNLElBQUksRUFBRSxFQUFFO1VBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztVQUNYLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDUDtPQUNGLE1BQU0sSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFOzs7UUFHeEIsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNYLElBQUksRUFBRTtVQUNKLEVBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFBOztVQUVYLEVBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFBO09BQ2Q7O01BRUQsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0tBQ3BDLE1BQU0sSUFBSSxFQUFFLEVBQUU7TUFDYixHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxRQUFRLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO0tBQy9DLE1BQU0sSUFBSSxFQUFFLEVBQUU7TUFDYixHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztLQUMvRDs7SUFFRCxLQUFLLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxDQUFDOztJQUU1QixPQUFPLEdBQUcsQ0FBQztHQUNaLENBQUMsQ0FBQztDQUNKOzs7O0FBSUQsU0FBUyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtFQUNqQyxLQUFLLENBQUMsY0FBYyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQzs7RUFFbkMsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztDQUMxQzs7Ozs7OztBQU9ELFNBQVMsYUFBYSxDQUFDLEVBQUU7dUJBQ0YsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFO3VCQUN6QixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRTs7RUFFOUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDO0lBQ1QsRUFBQSxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUE7T0FDUCxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUM7SUFDZCxFQUFBLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFBO09BQ3ZCLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQztJQUNkLEVBQUEsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBQTs7SUFFbkMsRUFBQSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFBOztFQUVyQixJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUM7SUFDVCxFQUFBLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBQTtPQUNMLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQztJQUNkLEVBQUEsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBQTtPQUMzQixJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUM7SUFDZCxFQUFBLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBQTtPQUNwQyxJQUFJLEdBQUc7SUFDVixFQUFBLEVBQUUsR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUE7O0lBRWpELEVBQUEsRUFBRSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsRUFBQTs7RUFFakIsT0FBTyxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDO0NBQ2pDOzs7O0FBSUQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsU0FBUyxPQUFPLEVBQUU7OztFQUN2QyxJQUFJLENBQUMsT0FBTztJQUNWLEVBQUEsT0FBTyxLQUFLLENBQUMsRUFBQTs7RUFFZixJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVE7SUFDN0IsRUFBQSxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFBOztFQUU1QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDeEMsSUFBSSxPQUFPLENBQUNBLE1BQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDO01BQy9CLEVBQUEsT0FBTyxJQUFJLENBQUMsRUFBQTtHQUNmO0VBQ0QsT0FBTyxLQUFLLENBQUM7Q0FDZCxDQUFDOztBQUVGLFNBQVMsT0FBTyxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUU7RUFDN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO01BQ3ZCLEVBQUEsT0FBTyxLQUFLLENBQUMsRUFBQTtHQUNoQjs7RUFFRCxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFOzs7Ozs7SUFNN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7TUFDbkMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztNQUNyQixJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssR0FBRztRQUN2QixFQUFBLFNBQVMsRUFBQTs7TUFFWCxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDdkMsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUM1QixJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssT0FBTyxDQUFDLEtBQUs7WUFDL0IsT0FBTyxDQUFDLEtBQUssS0FBSyxPQUFPLENBQUMsS0FBSztZQUMvQixPQUFPLENBQUMsS0FBSyxLQUFLLE9BQU8sQ0FBQyxLQUFLO1VBQ2pDLEVBQUEsT0FBTyxJQUFJLENBQUMsRUFBQTtPQUNmO0tBQ0Y7OztJQUdELE9BQU8sS0FBSyxDQUFDO0dBQ2Q7O0VBRUQsT0FBTyxJQUFJLENBQUM7Q0FDYjs7QUFFRCxpQkFBaUIsR0FBRyxTQUFTLENBQUM7QUFDOUIsU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7RUFDeEMsSUFBSTtJQUNGLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7R0FDakMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtJQUNYLE9BQU8sS0FBSyxDQUFDO0dBQ2Q7RUFDRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Q0FDNUI7O0FBRUQscUJBQXFCLEdBQUcsYUFBYSxDQUFDO0FBQ3RDLFNBQVMsYUFBYSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0VBQzdDLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLE9BQU8sRUFBRTtJQUN2QyxPQUFPLFNBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0dBQ3pDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0lBQ3JCLE9BQU8sUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7R0FDOUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztDQUNmOztBQUVELHFCQUFxQixHQUFHLGFBQWEsQ0FBQztBQUN0QyxTQUFTLGFBQWEsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtFQUM3QyxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxPQUFPLEVBQUU7SUFDdkMsT0FBTyxTQUFTLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztHQUN6QyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUNyQixPQUFPLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0dBQzdCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7Q0FDZjs7QUFFRCxrQkFBa0IsR0FBRyxVQUFVLENBQUM7QUFDaEMsU0FBUyxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRTtFQUNoQyxJQUFJOzs7SUFHRixPQUFPLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDO0dBQzdDLENBQUMsT0FBTyxFQUFFLEVBQUU7SUFDWCxPQUFPLElBQUksQ0FBQztHQUNiO0NBQ0Y7OztBQUdELFdBQVcsR0FBRyxHQUFHLENBQUM7QUFDbEIsU0FBUyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7RUFDbEMsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7Q0FDNUM7OztBQUdELFdBQVcsR0FBRyxHQUFHLENBQUM7QUFDbEIsU0FBUyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7RUFDbEMsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7Q0FDNUM7O0FBRUQsZUFBZSxHQUFHLE9BQU8sQ0FBQztBQUMxQixTQUFTLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7RUFDNUMsT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztFQUNyQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDOztFQUVoQyxJQUFJLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUM7RUFDbkMsUUFBUSxJQUFJO0lBQ1YsS0FBSyxHQUFHO01BQ04sSUFBSSxHQUFHLEVBQUUsQ0FBQztNQUNWLEtBQUssR0FBRyxHQUFHLENBQUM7TUFDWixJQUFJLEdBQUcsRUFBRSxDQUFDO01BQ1YsSUFBSSxHQUFHLEdBQUcsQ0FBQztNQUNYLEtBQUssR0FBRyxJQUFJLENBQUM7TUFDYixNQUFNO0lBQ1IsS0FBSyxHQUFHO01BQ04sSUFBSSxHQUFHLEVBQUUsQ0FBQztNQUNWLEtBQUssR0FBRyxHQUFHLENBQUM7TUFDWixJQUFJLEdBQUcsRUFBRSxDQUFDO01BQ1YsSUFBSSxHQUFHLEdBQUcsQ0FBQztNQUNYLEtBQUssR0FBRyxJQUFJLENBQUM7TUFDYixNQUFNO0lBQ1I7TUFDRSxNQUFNLElBQUksU0FBUyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7R0FDaEU7OztFQUdELElBQUksU0FBUyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUU7SUFDcEMsT0FBTyxLQUFLLENBQUM7R0FDZDs7Ozs7RUFLRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7SUFDekMsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7SUFFL0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2hCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQzs7SUFFZixXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsVUFBVSxFQUFFO01BQ3ZDLElBQUksVUFBVSxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7UUFDN0IsVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO09BQ3ZDO01BQ0QsSUFBSSxHQUFHLElBQUksSUFBSSxVQUFVLENBQUM7TUFDMUIsR0FBRyxHQUFHLEdBQUcsSUFBSSxVQUFVLENBQUM7TUFDeEIsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQy9DLElBQUksR0FBRyxVQUFVLENBQUM7T0FDbkIsTUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDckQsR0FBRyxHQUFHLFVBQVUsQ0FBQztPQUNsQjtLQUNGLENBQUMsQ0FBQzs7OztJQUlILElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxLQUFLLEVBQUU7TUFDckQsT0FBTyxLQUFLLENBQUM7S0FDZDs7OztJQUlELElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDLFFBQVEsS0FBSyxJQUFJO1FBQ3ZDLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO01BQzlCLE9BQU8sS0FBSyxDQUFDO0tBQ2QsTUFBTSxJQUFJLEdBQUcsQ0FBQyxRQUFRLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO01BQzlELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7R0FDRjtFQUNELE9BQU8sSUFBSSxDQUFDO0NBQ2I7O0FBRUQsa0JBQWtCLEdBQUcsVUFBVSxDQUFDO0FBQ2hDLFNBQVMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUU7RUFDbEMsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztFQUNuQyxPQUFPLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0NBQ3hFOzs7Ozs7O0FDbHJDRDs7QUFFQSxBQUVBLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCekIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQTtBQUN6QixJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFBO0FBQy9CLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFBO0FBQ2pDLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQTtBQUNqQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUE7Ozs7Ozs7Ozs7QUFVbEIsU0FBUyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO0VBQ25DLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQTtFQUNaLE9BQU8sRUFBRSxFQUFFO0lBQ1QsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxHQUFHLEVBQUU7TUFDakMsT0FBTyxFQUFFO0tBQ1Y7SUFDRCxFQUFFLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQTtHQUNuQjtFQUNELE9BQU8sSUFBSTtDQUNaOzs7Ozs7Ozs7QUFTRCxTQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtFQUN2QyxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFBO0VBQ3pDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTs7RUFFakMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7SUFDN0IsS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUU7TUFDbkIsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUNwQjtHQUNGOztFQUVELE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7Q0FDN0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JELFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7RUFDNUMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFBO0VBQ3hFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO01BQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztNQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0VBQzFCLElBQUksU0FBUyxHQUFHO0lBQ2QsRUFBRTtNQUNBLEtBQUssR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFDN0IsS0FBSyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUMvQixFQUFFO01BQ0EsS0FBSyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztNQUM3QixLQUFLLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTs7RUFFbEMsT0FBTztJQUNMLE1BQU0sRUFBRSxNQUFNO0lBQ2QsS0FBSyxFQUFFLEtBQUs7SUFDWixTQUFTLEVBQUUsU0FBUztJQUNwQixNQUFNLEVBQUU7TUFDTixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLElB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LElBQUksRUFBRSxRQUFRLENBQUM7RUFDNUUsSUFBSSxNQUFNLEdBQUcsUUFBUSxHQUFHLFVBQVUsRUFBRSxPQUFPLFFBQVEsQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQztNQUN4RSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7TUFDdkMsS0FBSyxJQUFJLENBQUM7TUFDVixNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUM7RUFDbkMsR0FBRyxPQUFPLE1BQU0sSUFBSSxVQUFVLENBQUMsRUFBQSxNQUFNLFNBQVMsQ0FBQyxRQUFRLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxFQUFBOztFQUUvRSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFBLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxHQUFHLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUNyRixNQUFNLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN4RixHQUFHLE1BQU0sS0FBSyxLQUFLLElBQUksTUFBTSxLQUFLLE1BQU0sQ0FBQyxFQUFBLE9BQU8sTUFBTSxDQUFDLEVBQUE7R0FDeEQsRUFBQSxNQUFNLEVBQUEsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEdBQUc7SUFDNUUsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVB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Q0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFBLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUEsR0FBRyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsRUFBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUEsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsRUFBQSxLQUFLLEVBQUEsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLE1BQUEsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsd0hBQXdILENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUEsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxFQUFFLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJ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QUFDLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxNQUFNLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFBLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQSxPQUFPLENBQUMsRUFBQSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLEVBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsRUFBQSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFBLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUMsS0FBSyxFQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQSxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsNEJBQTRCLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsa0NBQWtDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtB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
