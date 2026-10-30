// Generated from integrations/src/cli.ts by integrations/scripts/build.mjs. Do not edit.
// Engines: agent-readiness-kit@1.0.0 (daa257b103b63a0a006c94421f770ab19198c9e9), agent-context-doctor@1.0.0 (a60f53e044e7714875dc6929fc3f5b55ed25e349)
import { createRequire as __WEBPACK_EXTERNAL_createRequire } from "module";
/******/ var __webpack_modules__ = ({

/***/ 954:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {



const pico = __nccwpck_require__(28);
const utils = __nccwpck_require__(55);

function picomatch(glob, options, returnState = false) {
  // default to os.platform()
  if (options && (options.windows === null || options.windows === undefined)) {
    // don't mutate the original options object
    options = { ...options, windows: utils.isWindows() };
  }

  return pico(glob, options, returnState);
}

Object.assign(picomatch, pico);
module.exports = picomatch;


/***/ }),

/***/ 39:
/***/ ((module) => {



const WIN_SLASH = '\\\\/';
const WIN_NO_SLASH = `[^${WIN_SLASH}]`;

const DEFAULT_MAX_EXTGLOB_RECURSION = 0;

/**
 * Posix glob regex
 */

const DOT_LITERAL = '\\.';
const PLUS_LITERAL = '\\+';
const QMARK_LITERAL = '\\?';
const SLASH_LITERAL = '\\/';
const ONE_CHAR = '(?=.)';
const QMARK = '[^/]';
const END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
const START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
const DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
const NO_DOT = `(?!${DOT_LITERAL})`;
const NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`;
const NO_DOT_SLASH = `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`;
const NO_DOTS_SLASH = `(?!${DOTS_SLASH})`;
const QMARK_NO_DOT = `[^.${SLASH_LITERAL}]`;
const STAR = `${QMARK}*?`;
const SEP = '/';

const POSIX_CHARS = {
  DOT_LITERAL,
  PLUS_LITERAL,
  QMARK_LITERAL,
  SLASH_LITERAL,
  ONE_CHAR,
  QMARK,
  END_ANCHOR,
  DOTS_SLASH,
  NO_DOT,
  NO_DOTS,
  NO_DOT_SLASH,
  NO_DOTS_SLASH,
  QMARK_NO_DOT,
  STAR,
  START_ANCHOR,
  SEP
};

/**
 * Windows glob regex
 */

const WINDOWS_CHARS = {
  ...POSIX_CHARS,

  SLASH_LITERAL: `[${WIN_SLASH}]`,
  QMARK: WIN_NO_SLASH,
  STAR: `${WIN_NO_SLASH}*?`,
  DOTS_SLASH: `${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$)`,
  NO_DOT: `(?!${DOT_LITERAL})`,
  NO_DOTS: `(?!(?:^|[${WIN_SLASH}])${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
  NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}(?:[${WIN_SLASH}]|$))`,
  NO_DOTS_SLASH: `(?!${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
  QMARK_NO_DOT: `[^.${WIN_SLASH}]`,
  START_ANCHOR: `(?:^|[${WIN_SLASH}])`,
  END_ANCHOR: `(?:[${WIN_SLASH}]|$)`,
  SEP: '\\'
};

/**
 * POSIX Bracket Regex
 */

const POSIX_REGEX_SOURCE = {
  __proto__: null,
  alnum: 'a-zA-Z0-9',
  alpha: 'a-zA-Z',
  ascii: '\\x00-\\x7F',
  blank: ' \\t',
  cntrl: '\\x00-\\x1F\\x7F',
  digit: '0-9',
  graph: '\\x21-\\x7E',
  lower: 'a-z',
  print: '\\x20-\\x7E ',
  punct: '\\-!"#$%&\'()\\*+,./:;<=>?@[\\]^_`{|}~',
  space: ' \\t\\r\\n\\v\\f',
  upper: 'A-Z',
  word: 'A-Za-z0-9_',
  xdigit: 'A-Fa-f0-9'
};

module.exports = {
  DEFAULT_MAX_EXTGLOB_RECURSION,
  MAX_LENGTH: 1024 * 64,
  POSIX_REGEX_SOURCE,

  // regular expressions
  REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
  REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
  REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
  REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
  REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
  REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,

  // Replace globs with equivalent patterns to reduce parsing time.
  REPLACEMENTS: {
    __proto__: null,
    '***': '*',
    '**/**': '**',
    '**/**/**': '**'
  },

  // Digits
  CHAR_0: 48, /* 0 */
  CHAR_9: 57, /* 9 */

  // Alphabet chars.
  CHAR_UPPERCASE_A: 65, /* A */
  CHAR_LOWERCASE_A: 97, /* a */
  CHAR_UPPERCASE_Z: 90, /* Z */
  CHAR_LOWERCASE_Z: 122, /* z */

  CHAR_LEFT_PARENTHESES: 40, /* ( */
  CHAR_RIGHT_PARENTHESES: 41, /* ) */

  CHAR_ASTERISK: 42, /* * */

  // Non-alphabetic chars.
  CHAR_AMPERSAND: 38, /* & */
  CHAR_AT: 64, /* @ */
  CHAR_BACKWARD_SLASH: 92, /* \ */
  CHAR_CARRIAGE_RETURN: 13, /* \r */
  CHAR_CIRCUMFLEX_ACCENT: 94, /* ^ */
  CHAR_COLON: 58, /* : */
  CHAR_COMMA: 44, /* , */
  CHAR_DOT: 46, /* . */
  CHAR_DOUBLE_QUOTE: 34, /* " */
  CHAR_EQUAL: 61, /* = */
  CHAR_EXCLAMATION_MARK: 33, /* ! */
  CHAR_FORM_FEED: 12, /* \f */
  CHAR_FORWARD_SLASH: 47, /* / */
  CHAR_GRAVE_ACCENT: 96, /* ` */
  CHAR_HASH: 35, /* # */
  CHAR_HYPHEN_MINUS: 45, /* - */
  CHAR_LEFT_ANGLE_BRACKET: 60, /* < */
  CHAR_LEFT_CURLY_BRACE: 123, /* { */
  CHAR_LEFT_SQUARE_BRACKET: 91, /* [ */
  CHAR_LINE_FEED: 10, /* \n */
  CHAR_NO_BREAK_SPACE: 160, /* \u00A0 */
  CHAR_PERCENT: 37, /* % */
  CHAR_PLUS: 43, /* + */
  CHAR_QUESTION_MARK: 63, /* ? */
  CHAR_RIGHT_ANGLE_BRACKET: 62, /* > */
  CHAR_RIGHT_CURLY_BRACE: 125, /* } */
  CHAR_RIGHT_SQUARE_BRACKET: 93, /* ] */
  CHAR_SEMICOLON: 59, /* ; */
  CHAR_SINGLE_QUOTE: 39, /* ' */
  CHAR_SPACE: 32, /*   */
  CHAR_TAB: 9, /* \t */
  CHAR_UNDERSCORE: 95, /* _ */
  CHAR_VERTICAL_LINE: 124, /* | */
  CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279, /* \uFEFF */

  /**
   * Create EXTGLOB_CHARS
   */

  extglobChars(chars) {
    return {
      '!': { type: 'negate', open: '(?:(?!(?:', close: `))${chars.STAR})` },
      '?': { type: 'qmark', open: '(?:', close: ')?' },
      '+': { type: 'plus', open: '(?:', close: ')+' },
      '*': { type: 'star', open: '(?:', close: ')*' },
      '@': { type: 'at', open: '(?:', close: ')' }
    };
  },

  /**
   * Create GLOB_CHARS
   */

  globChars(win32) {
    return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
  }
};


/***/ }),

/***/ 117:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {



const constants = __nccwpck_require__(39);
const utils = __nccwpck_require__(55);

/**
 * Constants
 */

const {
  MAX_LENGTH,
  POSIX_REGEX_SOURCE,
  REGEX_NON_SPECIAL_CHARS,
  REGEX_SPECIAL_CHARS_BACKREF,
  REPLACEMENTS
} = constants;

/**
 * Helpers
 */

const expandRange = (args, options) => {
  if (typeof options.expandRange === 'function') {
    return options.expandRange(...args, options);
  }

  args.sort();
  const value = `[${args.join('-')}]`;

  try {
    /* eslint-disable-next-line no-new */
    new RegExp(value);
  } catch (ex) {
    return args.map(v => utils.escapeRegex(v)).join('..');
  }

  return value;
};

/**
 * Create the message for a syntax error
 */

const syntaxError = (type, char) => {
  return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
};

const splitTopLevel = input => {
  const parts = [];
  let bracket = 0;
  let paren = 0;
  let quote = 0;
  let value = '';
  let escaped = false;

  for (const ch of input) {
    if (escaped === true) {
      value += ch;
      escaped = false;
      continue;
    }

    if (ch === '\\') {
      value += ch;
      escaped = true;
      continue;
    }

    if (ch === '"') {
      quote = quote === 1 ? 0 : 1;
      value += ch;
      continue;
    }

    if (quote === 0) {
      if (ch === '[') {
        bracket++;
      } else if (ch === ']' && bracket > 0) {
        bracket--;
      } else if (bracket === 0) {
        if (ch === '(') {
          paren++;
        } else if (ch === ')' && paren > 0) {
          paren--;
        } else if (ch === '|' && paren === 0) {
          parts.push(value);
          value = '';
          continue;
        }
      }
    }

    value += ch;
  }

  parts.push(value);
  return parts;
};

const isPlainBranch = branch => {
  let escaped = false;

  for (const ch of branch) {
    if (escaped === true) {
      escaped = false;
      continue;
    }

    if (ch === '\\') {
      escaped = true;
      continue;
    }

    if (/[?*+@!()[\]{}]/.test(ch)) {
      return false;
    }
  }

  return true;
};

const normalizeSimpleBranch = branch => {
  let value = branch.trim();
  let changed = true;

  while (changed === true) {
    changed = false;

    if (/^@\([^\\()[\]{}|]+\)$/.test(value)) {
      value = value.slice(2, -1);
      changed = true;
    }
  }

  if (!isPlainBranch(value)) {
    return;
  }

  return value.replace(/\\(.)/g, '$1');
};

const hasRepeatedCharPrefixOverlap = branches => {
  const values = branches.map(normalizeSimpleBranch).filter(Boolean);

  for (let i = 0; i < values.length; i++) {
    for (let j = i + 1; j < values.length; j++) {
      const a = values[i];
      const b = values[j];
      const char = a[0];

      if (!char || a !== char.repeat(a.length) || b !== char.repeat(b.length)) {
        continue;
      }

      if (a === b || a.startsWith(b) || b.startsWith(a)) {
        return true;
      }
    }
  }

  return false;
};

const parseRepeatedExtglob = (pattern, requireEnd = true) => {
  if ((pattern[0] !== '+' && pattern[0] !== '*') || pattern[1] !== '(') {
    return;
  }

  let bracket = 0;
  let paren = 0;
  let quote = 0;
  let escaped = false;

  for (let i = 1; i < pattern.length; i++) {
    const ch = pattern[i];

    if (escaped === true) {
      escaped = false;
      continue;
    }

    if (ch === '\\') {
      escaped = true;
      continue;
    }

    if (ch === '"') {
      quote = quote === 1 ? 0 : 1;
      continue;
    }

    if (quote === 1) {
      continue;
    }

    if (ch === '[') {
      bracket++;
      continue;
    }

    if (ch === ']' && bracket > 0) {
      bracket--;
      continue;
    }

    if (bracket > 0) {
      continue;
    }

    if (ch === '(') {
      paren++;
      continue;
    }

    if (ch === ')') {
      paren--;

      if (paren === 0) {
        if (requireEnd === true && i !== pattern.length - 1) {
          return;
        }

        return {
          type: pattern[0],
          body: pattern.slice(2, i),
          end: i
        };
      }
    }
  }
};

const buildCharClassStar = chars => {
  const source = chars.length === 1
    ? utils.escapeRegex(chars[0])
    : `[${chars.map(ch => utils.escapeRegex(ch)).join('')}]`;

  return `${source}*`;
};

const getStarExtglobSequenceChars = pattern => {
  let index = 0;
  const chars = [];

  while (index < pattern.length) {
    const match = parseRepeatedExtglob(pattern.slice(index), false);

    if (!match || match.type !== '*') {
      return;
    }

    const branches = splitTopLevel(match.body).map(branch => branch.trim());
    if (branches.length !== 1) {
      return;
    }

    const branch = normalizeSimpleBranch(branches[0]);
    if (!branch || branch.length !== 1) {
      return;
    }

    chars.push(branch);
    index += match.end + 1;
  }

  if (chars.length < 1) {
    return;
  }

  return chars;
};

const repeatedExtglobRecursion = pattern => {
  let depth = 0;
  let value = pattern.trim();
  let match = parseRepeatedExtglob(value);

  while (match) {
    depth++;
    value = match.body.trim();
    match = parseRepeatedExtglob(value);
  }

  return depth;
};

const analyzeRepeatedExtglob = (body, options) => {
  if (options.maxExtglobRecursion === false) {
    return { risky: false };
  }

  const max =
    typeof options.maxExtglobRecursion === 'number'
      ? options.maxExtglobRecursion
      : constants.DEFAULT_MAX_EXTGLOB_RECURSION;

  const branches = splitTopLevel(body).map(branch => branch.trim());

  if (branches.length > 1) {
    if (
      branches.some(branch => branch === '') ||
      branches.some(branch => /^[*?]+$/.test(branch)) ||
      hasRepeatedCharPrefixOverlap(branches)
    ) {
      return { risky: true };
    }
  }

  // A repeated extglob is "risky" (prone to catastrophic backtracking) when a
  // branch is itself a `*(...)` sequence, since that nests an unbounded quantifier
  // inside the outer `+(...)`/`*(...)`. When *every* branch reduces to single
  // characters we can emit one flat, ReDoS-safe character class that preserves the
  // meaning of ALL branches (e.g. `+(*(a)|*(b))` -> `[ab]*`), rather than dropping
  // every branch but the first.
  const safeChars = [];
  let sawStarSequence = false;
  let combinable = true;

  for (const branch of branches) {
    const chars = getStarExtglobSequenceChars(branch);
    if (chars) {
      sawStarSequence = true;
      safeChars.push(...chars);
      continue;
    }

    const literal = normalizeSimpleBranch(branch);
    if (literal && literal.length === 1) {
      safeChars.push(literal);
      continue;
    }

    combinable = false;

    if (repeatedExtglobRecursion(branch) > max) {
      return { risky: true };
    }
  }

  if (sawStarSequence) {
    return combinable
      ? { risky: true, safeOutput: buildCharClassStar([...new Set(safeChars)]) }
      : { risky: true };
  }

  return { risky: false };
};

/**
 * Parse the given input string.
 * @param {String} input
 * @param {Object} options
 * @return {Object}
 */

const parse = (input, options) => {
  if (typeof input !== 'string') {
    throw new TypeError('Expected a string');
  }

  input = REPLACEMENTS[input] || input;

  const opts = { ...options };
  const max = typeof opts.maxLength === 'number' ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;

  let len = input.length;
  if (len > max) {
    throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
  }

  const bos = { type: 'bos', value: '', output: opts.prepend || '' };
  const tokens = [bos];

  const capture = opts.capture ? '' : '?:';

  // create constants based on platform, for windows or posix
  const PLATFORM_CHARS = constants.globChars(opts.windows);
  const EXTGLOB_CHARS = constants.extglobChars(PLATFORM_CHARS);

  const {
    DOT_LITERAL,
    PLUS_LITERAL,
    SLASH_LITERAL,
    ONE_CHAR,
    DOTS_SLASH,
    NO_DOT,
    NO_DOT_SLASH,
    NO_DOTS_SLASH,
    QMARK,
    QMARK_NO_DOT,
    STAR,
    START_ANCHOR
  } = PLATFORM_CHARS;

  const globstar = opts => {
    return `(${capture}(?:(?!${START_ANCHOR}${opts.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
  };

  const nodot = opts.dot ? '' : NO_DOT;
  const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
  let star = opts.bash === true ? globstar(opts) : STAR;

  if (opts.capture) {
    star = `(${star})`;
  }

  // minimatch options support
  if (typeof opts.noext === 'boolean') {
    opts.noextglob = opts.noext;
  }

  const state = {
    input,
    index: -1,
    start: 0,
    dot: opts.dot === true,
    consumed: '',
    output: '',
    prefix: '',
    backtrack: false,
    negated: false,
    brackets: 0,
    braces: 0,
    parens: 0,
    quotes: 0,
    globstar: false,
    tokens
  };

  input = utils.removePrefix(input, state);
  len = input.length;

  const extglobs = [];
  const braces = [];
  const stack = [];
  let prev = bos;
  let value;

  /**
   * Tokenizing helpers
   */

  const eos = () => state.index === len - 1;
  const peek = state.peek = (n = 1) => input[state.index + n];
  const advance = state.advance = () => input[++state.index] || '';
  const remaining = () => input.slice(state.index + 1);
  const consume = (value = '', num = 0) => {
    state.consumed += value;
    state.index += num;
  };

  const append = token => {
    state.output += token.output != null ? token.output : token.value;
    consume(token.value);
  };

  const negate = () => {
    let count = 1;

    while (peek() === '!' && (peek(2) !== '(' || peek(3) === '?')) {
      advance();
      state.start++;
      count++;
    }

    if (count % 2 === 0) {
      return false;
    }

    state.negated = true;
    state.start++;
    return true;
  };

  const increment = type => {
    state[type]++;
    stack.push(type);
  };

  const decrement = type => {
    state[type]--;
    stack.pop();
  };

  /**
   * Push tokens onto the tokens array. This helper speeds up
   * tokenizing by 1) helping us avoid backtracking as much as possible,
   * and 2) helping us avoid creating extra tokens when consecutive
   * characters are plain text. This improves performance and simplifies
   * lookbehinds.
   */

  const push = tok => {
    if (prev.type === 'globstar') {
      const isBrace = state.braces > 0 && (tok.type === 'comma' || tok.type === 'brace');
      const isExtglob = tok.extglob === true || (extglobs.length && (tok.type === 'pipe' || tok.type === 'paren'));

      if (tok.type !== 'slash' && tok.type !== 'paren' && !isBrace && !isExtglob) {
        state.output = state.output.slice(0, -prev.output.length);
        prev.type = 'star';
        prev.value = '*';
        prev.output = star;
        state.output += prev.output;
      }
    }

    if (extglobs.length && tok.type !== 'paren') {
      extglobs[extglobs.length - 1].inner += tok.value;
    }

    if (tok.value || tok.output) append(tok);
    if (prev && prev.type === 'text' && tok.type === 'text') {
      prev.output = (prev.output || prev.value) + tok.value;
      prev.value += tok.value;
      return;
    }

    tok.prev = prev;
    tokens.push(tok);
    prev = tok;
  };

  const extglobOpen = (type, value) => {
    const token = { ...EXTGLOB_CHARS[value], conditions: 1, inner: '' };

    token.prev = prev;
    token.parens = state.parens;
    token.output = state.output;
    token.startIndex = state.index;
    token.tokensIndex = tokens.length;
    const output = (opts.capture ? '(' : '') + token.open;

    increment('parens');
    push({ type, value, output: state.output ? '' : ONE_CHAR });
    push({ type: 'paren', extglob: true, value: advance(), output });
    extglobs.push(token);
  };

  const extglobClose = token => {
    const literal = input.slice(token.startIndex, state.index + 1);
    const body = input.slice(token.startIndex + 2, state.index);
    const analysis = analyzeRepeatedExtglob(body, opts);

    if ((token.type === 'plus' || token.type === 'star') && analysis.risky) {
      const safeOutput = analysis.safeOutput
        ? (token.output ? '' : ONE_CHAR) + (opts.capture ? `(${analysis.safeOutput})` : analysis.safeOutput)
        : undefined;
      const open = tokens[token.tokensIndex];

      open.type = 'text';
      open.value = literal;
      open.output = safeOutput || utils.escapeRegex(literal);

      for (let i = token.tokensIndex + 1; i < tokens.length; i++) {
        tokens[i].value = '';
        tokens[i].output = '';
        delete tokens[i].suffix;
      }

      state.output = token.output + open.output;
      state.backtrack = true;

      push({ type: 'paren', extglob: true, value, output: '' });
      decrement('parens');
      return;
    }

    let output = token.close + (opts.capture ? ')' : '');
    let rest;

    if (token.type === 'negate') {
      let extglobStar = star;

      if (token.inner && token.inner.length > 1 && token.inner.includes('/')) {
        extglobStar = globstar(opts);
      }

      if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
        output = token.close = `)$))${extglobStar}`;
      }

      if (token.inner.includes('*') && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
        // Any non-magical string (`.ts`) or even nested expression (`.{ts,tsx}`) can follow after the closing parenthesis.
        // In this case, we need to parse the string and use it in the output of the original pattern.
        // Suitable patterns: `/!(*.d).ts`, `/!(*.d).{ts,tsx}`, `**/!(*-dbg).@(js)`.
        //
        // Disabling the `fastpaths` option due to a problem with parsing strings as `.ts` in the pattern like `**/!(*.d).ts`.
        const expression = parse(rest, { ...options, fastpaths: false }).output;

        output = token.close = `)${expression})${extglobStar})`;
      }

      if (token.prev.type === 'bos') {
        state.negatedExtglob = true;
      }
    }

    push({ type: 'paren', extglob: true, value, output });
    decrement('parens');
  };

  /**
   * Fast paths
   */

  if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
    let backslashes = false;

    let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index) => {
      if (first === '\\') {
        backslashes = true;
        return m;
      }

      if (first === '?') {
        if (esc) {
          return esc + first + (rest ? QMARK.repeat(rest.length) : '');
        }
        if (index === 0) {
          return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : '');
        }
        return QMARK.repeat(chars.length);
      }

      if (first === '.') {
        return DOT_LITERAL.repeat(chars.length);
      }

      if (first === '*') {
        if (esc) {
          return esc + first + (rest ? star : '');
        }
        return star;
      }
      return esc ? m : `\\${m}`;
    });

    if (backslashes === true) {
      if (opts.unescape === true) {
        output = output.replace(/\\/g, '');
      } else {
        output = output.replace(/\\+/g, m => {
          return m.length % 2 === 0 ? '\\\\' : (m ? '\\' : '');
        });
      }
    }

    if (output === input && opts.contains === true) {
      state.output = input;
      return state;
    }

    state.output = utils.wrapOutput(output, state, options);
    return state;
  }

  /**
   * Tokenize input until we reach end-of-string
   */

  while (!eos()) {
    value = advance();

    if (value === '\u0000') {
      continue;
    }

    /**
     * Escaped characters
     */

    if (value === '\\') {
      const next = peek();

      if (next === '/' && opts.bash !== true) {
        continue;
      }

      if (next === '.' || next === ';') {
        continue;
      }

      if (!next) {
        value += '\\';
        push({ type: 'text', value });
        continue;
      }

      // collapse slashes to reduce potential for exploits
      const match = /^\\+/.exec(remaining());
      let slashes = 0;

      if (match && match[0].length > 2) {
        slashes = match[0].length;
        state.index += slashes;
        if (slashes % 2 !== 0) {
          value += '\\';
        }
      }

      if (opts.unescape === true) {
        value = advance();
      } else {
        value += advance();
      }

      if (state.brackets === 0) {
        push({ type: 'text', value });
        continue;
      }
    }

    /**
     * If we're inside a regex character class, continue
     * until we reach the closing bracket.
     */

    if (state.brackets > 0 && (value !== ']' || prev.value === '[' || prev.value === '[^')) {
      if (opts.posix !== false && value === ':') {
        const inner = prev.value.slice(1);
        if (inner.includes('[')) {
          prev.posix = true;

          if (inner.includes(':')) {
            const idx = prev.value.lastIndexOf('[');
            const pre = prev.value.slice(0, idx);
            const rest = prev.value.slice(idx + 2);
            const posix = POSIX_REGEX_SOURCE[rest];
            if (posix) {
              prev.value = pre + posix;
              state.backtrack = true;
              advance();

              if (!bos.output && tokens.indexOf(prev) === 1) {
                bos.output = ONE_CHAR;
              }
              continue;
            }
          }
        }
      }

      if ((value === '[' && peek() !== ':') || (value === '-' && peek() === ']')) {
        value = `\\${value}`;
      }

      if (value === ']' && (prev.value === '[' || prev.value === '[^')) {
        value = `\\${value}`;
      }

      if (opts.posix === true && value === '!' && prev.value === '[') {
        value = '^';
      }

      prev.value += value;
      append({ value });
      continue;
    }

    /**
     * If we're inside a quoted string, continue
     * until we reach the closing double quote.
     */

    if (state.quotes === 1 && value !== '"') {
      value = utils.escapeRegex(value);
      prev.value += value;
      append({ value });
      continue;
    }

    /**
     * Double quotes
     */

    if (value === '"') {
      state.quotes = state.quotes === 1 ? 0 : 1;
      if (opts.keepQuotes === true) {
        push({ type: 'text', value });
      }
      continue;
    }

    /**
     * Parentheses
     */

    if (value === '(') {
      increment('parens');
      push({ type: 'paren', value });
      continue;
    }

    if (value === ')') {
      if (state.parens === 0 && opts.strictBrackets === true) {
        throw new SyntaxError(syntaxError('opening', '('));
      }

      const extglob = extglobs[extglobs.length - 1];
      if (extglob && state.parens === extglob.parens + 1) {
        extglobClose(extglobs.pop());
        continue;
      }

      push({ type: 'paren', value, output: state.parens ? ')' : '\\)' });
      decrement('parens');
      continue;
    }

    /**
     * Square brackets
     */

    if (value === '[') {
      if (opts.nobracket === true || !remaining().includes(']')) {
        if (opts.nobracket !== true && opts.strictBrackets === true) {
          throw new SyntaxError(syntaxError('closing', ']'));
        }

        value = `\\${value}`;
      } else {
        increment('brackets');
      }

      push({ type: 'bracket', value });
      continue;
    }

    if (value === ']') {
      if (opts.nobracket === true || (prev && prev.type === 'bracket' && prev.value.length === 1)) {
        push({ type: 'text', value, output: `\\${value}` });
        continue;
      }

      if (state.brackets === 0) {
        if (opts.strictBrackets === true) {
          throw new SyntaxError(syntaxError('opening', '['));
        }

        push({ type: 'text', value, output: `\\${value}` });
        continue;
      }

      decrement('brackets');

      const prevValue = prev.value.slice(1);
      if (prev.posix !== true && prevValue[0] === '^' && !prevValue.includes('/')) {
        value = `/${value}`;
      }

      prev.value += value;
      append({ value });

      // when literal brackets are explicitly disabled
      // assume we should match with a regex character class
      if (opts.literalBrackets === false || utils.hasRegexChars(prevValue)) {
        continue;
      }

      const escaped = utils.escapeRegex(prev.value);
      state.output = state.output.slice(0, -prev.value.length);

      // when literal brackets are explicitly enabled
      // assume we should escape the brackets to match literal characters
      if (opts.literalBrackets === true) {
        state.output += escaped;
        prev.value = escaped;
        continue;
      }

      // when the user specifies nothing, try to match both
      prev.value = `(${capture}${escaped}|${prev.value})`;
      state.output += prev.value;
      continue;
    }

    /**
     * Braces
     */

    if (value === '{' && opts.nobrace !== true) {
      increment('braces');

      const open = {
        type: 'brace',
        value,
        output: '(',
        outputIndex: state.output.length,
        tokensIndex: state.tokens.length
      };

      braces.push(open);
      push(open);
      continue;
    }

    if (value === '}') {
      const brace = braces[braces.length - 1];

      if (opts.nobrace === true || !brace) {
        push({ type: 'text', value, output: value });
        continue;
      }

      let output = ')';

      if (brace.dots === true) {
        const arr = tokens.slice();
        const range = [];

        for (let i = arr.length - 1; i >= 0; i--) {
          tokens.pop();
          if (arr[i].type === 'brace') {
            break;
          }
          if (arr[i].type !== 'dots') {
            range.unshift(arr[i].value);
          }
        }

        output = expandRange(range, opts);
        state.backtrack = true;
      }

      if (brace.comma !== true && brace.dots !== true) {
        const out = state.output.slice(0, brace.outputIndex);
        const toks = state.tokens.slice(brace.tokensIndex);
        brace.value = brace.output = '\\{';
        value = output = '\\}';
        state.output = out;
        for (const t of toks) {
          state.output += (t.output || t.value);
        }
      }

      push({ type: 'brace', value, output });
      decrement('braces');
      braces.pop();
      continue;
    }

    /**
     * Pipes
     */

    if (value === '|') {
      if (extglobs.length > 0) {
        extglobs[extglobs.length - 1].conditions++;
      }
      push({ type: 'text', value });
      continue;
    }

    /**
     * Commas
     */

    if (value === ',') {
      let output = value;

      const brace = braces[braces.length - 1];
      if (brace && stack[stack.length - 1] === 'braces') {
        brace.comma = true;
        output = '|';
      }

      push({ type: 'comma', value, output });
      continue;
    }

    /**
     * Slashes
     */

    if (value === '/') {
      // if the beginning of the glob is "./", advance the start
      // to the current index, and don't add the "./" characters
      // to the state. This greatly simplifies lookbehinds when
      // checking for BOS characters like "!" and "." (not "./")
      if (prev.type === 'dot' && state.index === state.start + 1) {
        state.start = state.index + 1;
        state.consumed = '';
        state.output = '';
        tokens.pop();
        prev = bos; // reset "prev" to the first token
        continue;
      }

      push({ type: 'slash', value, output: SLASH_LITERAL });
      continue;
    }

    /**
     * Dots
     */

    if (value === '.') {
      if (state.braces > 0 && prev.type === 'dot') {
        if (prev.value === '.') prev.output = DOT_LITERAL;
        const brace = braces[braces.length - 1];
        prev.type = 'dots';
        prev.output += value;
        prev.value += value;
        brace.dots = true;
        continue;
      }

      if ((state.braces + state.parens) === 0 && prev.type !== 'bos' && prev.type !== 'slash') {
        push({ type: 'text', value, output: DOT_LITERAL });
        continue;
      }

      push({ type: 'dot', value, output: DOT_LITERAL });
      continue;
    }

    /**
     * Question marks
     */

    if (value === '?') {
      const isGroup = prev && prev.value === '(';
      if (!isGroup && opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
        extglobOpen('qmark', value);
        continue;
      }

      if (prev && prev.type === 'paren') {
        const next = peek();
        let output = value;

        if ((prev.value === '(' && !/[!=<:]/.test(next)) || (next === '<' && !/<([!=]|\w+>)/.test(remaining()))) {
          output = `\\${value}`;
        }

        push({ type: 'text', value, output });
        continue;
      }

      if (opts.dot !== true && (prev.type === 'slash' || prev.type === 'bos')) {
        push({ type: 'qmark', value, output: QMARK_NO_DOT });
        continue;
      }

      push({ type: 'qmark', value, output: QMARK });
      continue;
    }

    /**
     * Exclamation
     */

    if (value === '!') {
      if (opts.noextglob !== true && peek() === '(') {
        if (peek(2) !== '?' || !/[!=<:]/.test(peek(3))) {
          extglobOpen('negate', value);
          continue;
        }
      }

      if (opts.nonegate !== true && state.index === 0) {
        negate();
        continue;
      }
    }

    /**
     * Plus
     */

    if (value === '+') {
      if (opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
        extglobOpen('plus', value);
        continue;
      }

      if ((prev && prev.value === '(') || opts.regex === false) {
        push({ type: 'plus', value, output: PLUS_LITERAL });
        continue;
      }

      if ((prev && (prev.type === 'bracket' || prev.type === 'paren' || prev.type === 'brace')) || state.parens > 0) {
        push({ type: 'plus', value });
        continue;
      }

      push({ type: 'plus', value: PLUS_LITERAL });
      continue;
    }

    /**
     * Plain text
     */

    if (value === '@') {
      if (opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
        push({ type: 'at', extglob: true, value, output: '' });
        continue;
      }

      push({ type: 'text', value });
      continue;
    }

    /**
     * Plain text
     */

    if (value !== '*') {
      if (value === '$' || value === '^') {
        value = `\\${value}`;
      }

      const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
      if (match) {
        value += match[0];
        state.index += match[0].length;
      }

      push({ type: 'text', value });
      continue;
    }

    /**
     * Stars
     */

    if (prev && (prev.type === 'globstar' || prev.star === true)) {
      prev.type = 'star';
      prev.star = true;
      prev.value += value;
      prev.output = star;
      state.backtrack = true;
      state.globstar = true;
      consume(value);
      continue;
    }

    let rest = remaining();
    if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
      extglobOpen('star', value);
      continue;
    }

    if (prev.type === 'star') {
      if (opts.noglobstar === true) {
        consume(value);
        continue;
      }

      const prior = prev.prev;
      const before = prior.prev;
      const isStart = prior.type === 'slash' || prior.type === 'bos';
      const afterStar = before && (before.type === 'star' || before.type === 'globstar');

      if (opts.bash === true && (!isStart || (rest[0] && rest[0] !== '/'))) {
        push({ type: 'star', value, output: '' });
        continue;
      }

      const isBrace = state.braces > 0 && (prior.type === 'comma' || prior.type === 'brace');
      const isExtglob = extglobs.length && (prior.type === 'pipe' || prior.type === 'paren');
      if (!isStart && prior.type !== 'paren' && !isBrace && !isExtglob) {
        push({ type: 'star', value, output: '' });
        continue;
      }

      // strip consecutive `/**/`
      while (rest.slice(0, 3) === '/**') {
        const after = input[state.index + 4];
        if (after && after !== '/') {
          break;
        }
        rest = rest.slice(3);
        consume('/**', 3);
      }

      if (prior.type === 'bos' && eos()) {
        prev.type = 'globstar';
        prev.value += value;
        prev.output = globstar(opts);
        state.output = prev.output;
        state.globstar = true;
        consume(value);
        continue;
      }

      if (prior.type === 'slash' && prior.prev.type !== 'bos' && !afterStar && eos()) {
        state.output = state.output.slice(0, -(prior.output + prev.output).length);
        prior.output = `(?:${prior.output}`;

        prev.type = 'globstar';
        prev.output = globstar(opts) + (opts.strictSlashes ? ')' : '|$)');
        prev.value += value;
        state.globstar = true;
        state.output += prior.output + prev.output;
        consume(value);
        continue;
      }

      if (prior.type === 'slash' && prior.prev.type !== 'bos' && rest[0] === '/') {
        const end = rest[1] !== void 0 ? '|$' : '';

        state.output = state.output.slice(0, -(prior.output + prev.output).length);
        prior.output = `(?:${prior.output}`;

        prev.type = 'globstar';
        prev.output = `${globstar(opts)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
        prev.value += value;

        state.output += prior.output + prev.output;
        state.globstar = true;

        consume(value + advance());

        push({ type: 'slash', value: '/', output: '' });
        continue;
      }

      if (prior.type === 'bos' && rest[0] === '/') {
        prev.type = 'globstar';
        prev.value += value;
        prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts)}${SLASH_LITERAL})`;
        state.output = prev.output;
        state.globstar = true;
        consume(value + advance());
        push({ type: 'slash', value: '/', output: '' });
        continue;
      }

      // remove single star from output
      state.output = state.output.slice(0, -prev.output.length);

      // reset previous token to globstar
      prev.type = 'globstar';
      prev.output = globstar(opts);
      prev.value += value;

      // reset output with globstar
      state.output += prev.output;
      state.globstar = true;
      consume(value);
      continue;
    }

    const token = { type: 'star', value, output: star };

    if (opts.bash === true) {
      token.output = '.*?';
      if (prev.type === 'bos' || prev.type === 'slash') {
        token.output = nodot + token.output;
      }
      push(token);
      continue;
    }

    if (prev && (prev.type === 'bracket' || prev.type === 'paren') && opts.regex === true) {
      token.output = value;
      push(token);
      continue;
    }

    if (state.index === state.start || prev.type === 'slash' || prev.type === 'dot') {
      if (prev.type === 'dot') {
        state.output += NO_DOT_SLASH;
        prev.output += NO_DOT_SLASH;

      } else if (opts.dot === true) {
        state.output += NO_DOTS_SLASH;
        prev.output += NO_DOTS_SLASH;

      } else {
        state.output += nodot;
        prev.output += nodot;
      }

      if (peek() !== '*') {
        state.output += ONE_CHAR;
        prev.output += ONE_CHAR;
      }
    }

    push(token);
  }

  while (state.brackets > 0) {
    if (opts.strictBrackets === true) throw new SyntaxError(syntaxError('closing', ']'));
    state.output = utils.escapeLast(state.output, '[');
    decrement('brackets');
  }

  while (state.parens > 0) {
    if (opts.strictBrackets === true) throw new SyntaxError(syntaxError('closing', ')'));
    state.output = utils.escapeLast(state.output, '(');
    decrement('parens');
  }

  while (state.braces > 0) {
    if (opts.strictBrackets === true) throw new SyntaxError(syntaxError('closing', '}'));
    state.output = utils.escapeLast(state.output, '{');
    decrement('braces');
  }

  if (opts.strictSlashes !== true && (prev.type === 'star' || prev.type === 'bracket')) {
    push({ type: 'maybe_slash', value: '', output: `${SLASH_LITERAL}?` });
  }

  // rebuild the output if we had to backtrack at any point
  if (state.backtrack === true) {
    state.output = '';

    for (const token of state.tokens) {
      state.output += token.output != null ? token.output : token.value;

      if (token.suffix) {
        state.output += token.suffix;
      }
    }
  }

  return state;
};

/**
 * Fast paths for creating regular expressions for common glob patterns.
 * This can significantly speed up processing and has very little downside
 * impact when none of the fast paths match.
 */

parse.fastpaths = (input, options) => {
  const opts = { ...options };
  const max = typeof opts.maxLength === 'number' ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
  const len = input.length;
  if (len > max) {
    throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
  }

  input = REPLACEMENTS[input] || input;

  // create constants based on platform, for windows or posix
  const {
    DOT_LITERAL,
    SLASH_LITERAL,
    ONE_CHAR,
    DOTS_SLASH,
    NO_DOT,
    NO_DOTS,
    NO_DOTS_SLASH,
    STAR,
    START_ANCHOR
  } = constants.globChars(opts.windows);

  const nodot = opts.dot ? NO_DOTS : NO_DOT;
  const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
  const capture = opts.capture ? '' : '?:';
  const state = { negated: false, prefix: '' };
  let star = opts.bash === true ? '.*?' : STAR;

  if (opts.capture) {
    star = `(${star})`;
  }

  const globstar = opts => {
    if (opts.noglobstar === true) return star;
    return `(${capture}(?:(?!${START_ANCHOR}${opts.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
  };

  const create = str => {
    switch (str) {
      case '*':
        return `${nodot}${ONE_CHAR}${star}`;

      case '.*':
        return `${DOT_LITERAL}${ONE_CHAR}${star}`;

      case '*.*':
        return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;

      case '*/*':
        return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;

      case '**':
        return nodot + globstar(opts);

      case '**/*':
        return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;

      case '**/*.*':
        return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;

      case '**/.*':
        return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;

      default: {
        const match = /^(.*?)\.(\w+)$/.exec(str);
        if (!match) return;

        const source = create(match[1]);
        if (!source) return;

        return source + DOT_LITERAL + match[2];
      }
    }
  };

  const output = utils.removePrefix(input, state);
  let source = create(output);

  if (source && opts.strictSlashes !== true) {
    source += `${SLASH_LITERAL}?`;
  }

  return source;
};

module.exports = parse;


/***/ }),

/***/ 28:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {



const scan = __nccwpck_require__(769);
const parse = __nccwpck_require__(117);
const utils = __nccwpck_require__(55);
const constants = __nccwpck_require__(39);
const isObject = val => val && typeof val === 'object' && !Array.isArray(val);

/**
 * Creates a matcher function from one or more glob patterns. The
 * returned function takes a string to match as its first argument,
 * and returns true if the string is a match. The returned matcher
 * function also takes a boolean as the second argument that, when true,
 * returns an object with additional information.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch(glob[, options]);
 *
 * const isMatch = picomatch('*.!(*a)');
 * console.log(isMatch('a.a')); //=> false
 * console.log(isMatch('a.b')); //=> true
 *
 * // For environments without `node.js`, `picomatch/posix` provides you a dependency-free matcher, without automatic OS detection.
 * const picomatch = require('picomatch/posix');
 * // the same API, defaulting to posix paths
 * const isMatch = picomatch('a/*');
 * console.log(isMatch('a\\b')); //=> false
 * console.log(isMatch('a/b')); //=> true
 *
 * // you can still configure the matcher function to accept windows paths
 * const isMatch = picomatch('a/*', { options: windows });
 * console.log(isMatch('a\\b')); //=> true
 * console.log(isMatch('a/b')); //=> true
 * ```
 * @name picomatch
 * @param {String|Array} `globs` One or more glob patterns.
 * @param {Object=} `options`
 * @return {Function=} Returns a matcher function.
 * @api public
 */

const picomatch = (glob, options, returnState = false) => {
  if (Array.isArray(glob)) {
    const fns = glob.map(input => picomatch(input, options, returnState));
    const arrayMatcher = str => {
      for (const isMatch of fns) {
        const state = isMatch(str);
        if (state) return state;
      }
      return false;
    };
    return arrayMatcher;
  }

  const isState = isObject(glob) && glob.tokens && glob.input;

  if (glob === '' || (typeof glob !== 'string' && !isState)) {
    throw new TypeError('Expected pattern to be a non-empty string');
  }

  const opts = options || {};
  const posix = opts.windows;
  const regex = isState
    ? picomatch.compileRe(glob, options)
    : picomatch.makeRe(glob, options, false, true);

  const state = regex.state;
  delete regex.state;

  let isIgnored = () => false;
  if (opts.ignore) {
    const ignoreOpts = { ...options, ignore: null, onMatch: null, onResult: null };
    isIgnored = picomatch(opts.ignore, ignoreOpts, returnState);
  }

  const matcher = (input, returnObject = false) => {
    const { isMatch, match, output } = picomatch.test(input, regex, options, { glob, posix });
    const result = { glob, state, regex, posix, input, output, match, isMatch };

    if (typeof opts.onResult === 'function') {
      opts.onResult(result);
    }

    if (isMatch === false) {
      result.isMatch = false;
      return returnObject ? result : false;
    }

    if (isIgnored(input)) {
      if (typeof opts.onIgnore === 'function') {
        opts.onIgnore(result);
      }
      result.isMatch = false;
      return returnObject ? result : false;
    }

    if (typeof opts.onMatch === 'function') {
      opts.onMatch(result);
    }
    return returnObject ? result : true;
  };

  if (returnState) {
    matcher.state = state;
  }

  return matcher;
};

/**
 * Test `input` with the given `regex`. This is used by the main
 * `picomatch()` function to test the input string.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.test(input, regex[, options]);
 *
 * console.log(picomatch.test('foo/bar', /^(?:([^/]*?)\/([^/]*?))$/));
 * // { isMatch: true, match: [ 'foo/', 'foo', 'bar' ], output: 'foo/bar' }
 * ```
 * @param {String} `input` String to test.
 * @param {RegExp} `regex`
 * @return {Object} Returns an object with matching info.
 * @api public
 */

picomatch.test = (input, regex, options, { glob, posix } = {}) => {
  if (typeof input !== 'string') {
    throw new TypeError('Expected input to be a string');
  }

  if (input === '') {
    return { isMatch: false, output: '' };
  }

  const opts = options || {};
  const format = opts.format || (posix ? utils.toPosixSlashes : null);
  let match = input === glob;
  let output = (match && format) ? format(input) : input;

  if (match === false) {
    output = format ? format(input) : input;
    match = output === glob;
  }

  if (match === false || opts.capture === true) {
    if (opts.matchBase === true || opts.basename === true) {
      match = picomatch.matchBase(input, regex, options, posix);
    } else {
      match = regex.exec(output);
    }
  }

  return { isMatch: Boolean(match), match, output };
};

/**
 * Match the basename of a filepath.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.matchBase(input, glob[, options]);
 * console.log(picomatch.matchBase('foo/bar.js', '*.js'); // true
 * ```
 * @param {String} `input` String to test.
 * @param {RegExp|String} `glob` Glob pattern or regex created by [.makeRe](#makeRe).
 * @return {Boolean}
 * @api public
 */

picomatch.matchBase = (input, glob, options, posix = options && options.windows) => {
  const regex = glob instanceof RegExp ? glob : picomatch.makeRe(glob, options);
  return regex.test(utils.basename(input, { windows: posix }));
};

/**
 * Returns true if **any** of the given glob `patterns` match the specified `string`.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.isMatch(string, patterns[, options]);
 *
 * console.log(picomatch.isMatch('a.a', ['b.*', '*.a'])); //=> true
 * console.log(picomatch.isMatch('a.a', 'b.*')); //=> false
 * ```
 * @param {String|Array} str The string to test.
 * @param {String|Array} patterns One or more glob patterns to use for matching.
 * @param {Object} [options] See available [options](#options).
 * @return {Boolean} Returns true if any patterns match `str`
 * @api public
 */

picomatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);

/**
 * Parse a glob pattern to create the source string for a regular
 * expression.
 *
 * ```js
 * const picomatch = require('picomatch');
 * const result = picomatch.parse(pattern[, options]);
 * ```
 * @param {String} `pattern`
 * @param {Object} `options`
 * @return {Object} Returns an object with useful properties and output to be used as a regex source string.
 * @api public
 */

picomatch.parse = (pattern, options) => {
  if (Array.isArray(pattern)) return pattern.map(p => picomatch.parse(p, options));
  return parse(pattern, { ...options, fastpaths: false });
};

/**
 * Scan a glob pattern to separate the pattern into segments.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.scan(input[, options]);
 *
 * const result = picomatch.scan('!./foo/*.js');
 * console.log(result);
 * { prefix: '!./',
 *   input: '!./foo/*.js',
 *   start: 3,
 *   base: 'foo',
 *   glob: '*.js',
 *   isBrace: false,
 *   isBracket: false,
 *   isGlob: true,
 *   isExtglob: false,
 *   isGlobstar: false,
 *   negated: true }
 * ```
 * @param {String} `input` Glob pattern to scan.
 * @param {Object} `options`
 * @return {Object} Returns an object with
 * @api public
 */

picomatch.scan = (input, options) => scan(input, options);

/**
 * Compile a regular expression from the `state` object returned by the
 * [parse()](#parse) method.
 *
 * ```js
 * const picomatch = require('picomatch');
 * const state = picomatch.parse('*.js');
 * // picomatch.compileRe(state[, options]);
 *
 * console.log(picomatch.compileRe(state));
 * //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
 * ```
 * @param {Object} `state`
 * @param {Object} `options`
 * @param {Boolean} `returnOutput` Intended for implementors, this argument allows you to return the raw output from the parser.
 * @param {Boolean} `returnState` Adds the state to a `state` property on the returned regex. Useful for implementors and debugging.
 * @return {RegExp}
 * @api public
 */

picomatch.compileRe = (state, options, returnOutput = false, returnState = false) => {
  if (returnOutput === true) {
    return state.output;
  }

  const opts = options || {};
  const prepend = opts.contains ? '' : '^';
  const append = opts.contains ? '' : '$';

  let source = `${prepend}(?:${state.output})${append}`;
  if (state && state.negated === true) {
    source = `^(?!${source}).*$`;
  }

  const regex = picomatch.toRegex(source, options);
  if (returnState === true) {
    regex.state = state;
  }

  return regex;
};

/**
 * Create a regular expression from a parsed glob pattern.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.makeRe(state[, options]);
 *
 * const result = picomatch.makeRe('*.js');
 * console.log(result);
 * //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
 * ```
 * @param {String} `state` The object returned from the `.parse` method.
 * @param {Object} `options`
 * @param {Boolean} `returnOutput` Implementors may use this argument to return the compiled output, instead of a regular expression. This is not exposed on the options to prevent end-users from mutating the result.
 * @param {Boolean} `returnState` Implementors may use this argument to return the state from the parsed glob with the returned regular expression.
 * @return {RegExp} Returns a regex created from the given pattern.
 * @api public
 */

picomatch.makeRe = (input, options = {}, returnOutput = false, returnState = false) => {
  if (!input || typeof input !== 'string') {
    throw new TypeError('Expected a non-empty string');
  }

  let parsed = { negated: false, fastpaths: true };

  if (options.fastpaths !== false && (input[0] === '.' || input[0] === '*')) {
    parsed.output = parse.fastpaths(input, options);
  }

  if (!parsed.output) {
    parsed = parse(input, options);
  }

  return picomatch.compileRe(parsed, options, returnOutput, returnState);
};

/**
 * Create a regular expression from the given regex source string.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.toRegex(source[, options]);
 *
 * const { output } = picomatch.parse('*.js');
 * console.log(picomatch.toRegex(output));
 * //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
 * ```
 * @param {String} `source` Regular expression source string.
 * @param {Object} `options`
 * @return {RegExp}
 * @api public
 */

picomatch.toRegex = (source, options) => {
  try {
    const opts = options || {};
    return new RegExp(source, opts.flags || (opts.nocase ? 'i' : ''));
  } catch (err) {
    if (options && options.debug === true) throw err;
    return /$^/;
  }
};

/**
 * Picomatch constants.
 * @return {Object}
 */

picomatch.constants = constants;

/**
 * Expose "picomatch"
 */

module.exports = picomatch;


/***/ }),

/***/ 769:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {



const utils = __nccwpck_require__(55);
const {
  CHAR_ASTERISK,             /* * */
  CHAR_AT,                   /* @ */
  CHAR_BACKWARD_SLASH,       /* \ */
  CHAR_COMMA,                /* , */
  CHAR_DOT,                  /* . */
  CHAR_EXCLAMATION_MARK,     /* ! */
  CHAR_FORWARD_SLASH,        /* / */
  CHAR_LEFT_CURLY_BRACE,     /* { */
  CHAR_LEFT_PARENTHESES,     /* ( */
  CHAR_LEFT_SQUARE_BRACKET,  /* [ */
  CHAR_PLUS,                 /* + */
  CHAR_QUESTION_MARK,        /* ? */
  CHAR_RIGHT_CURLY_BRACE,    /* } */
  CHAR_RIGHT_PARENTHESES,    /* ) */
  CHAR_RIGHT_SQUARE_BRACKET  /* ] */
} = __nccwpck_require__(39);

const isPathSeparator = code => {
  return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
};

const depth = token => {
  if (token.isPrefix !== true) {
    token.depth = token.isGlobstar ? Infinity : 1;
  }
};

/**
 * Quickly scans a glob pattern and returns an object with a handful of
 * useful properties, like `isGlob`, `path` (the leading non-glob, if it exists),
 * `glob` (the actual pattern), `negated` (true if the path starts with `!` but not
 * with `!(`) and `negatedExtglob` (true if the path starts with `!(`).
 *
 * ```js
 * const pm = require('picomatch');
 * console.log(pm.scan('foo/bar/*.js'));
 * { isGlob: true, input: 'foo/bar/*.js', base: 'foo/bar', glob: '*.js' }
 * ```
 * @param {String} `str`
 * @param {Object} `options`
 * @return {Object} Returns an object with tokens and regex source string.
 * @api public
 */

const scan = (input, options) => {
  const opts = options || {};

  const length = input.length - 1;
  const scanToEnd = opts.parts === true || opts.scanToEnd === true;
  const slashes = [];
  const tokens = [];
  const parts = [];

  let str = input;
  let index = -1;
  let start = 0;
  let lastIndex = 0;
  let isBrace = false;
  let isBracket = false;
  let isGlob = false;
  let isExtglob = false;
  let isGlobstar = false;
  let braceEscaped = false;
  let backslashes = false;
  let negated = false;
  let negatedExtglob = false;
  let finished = false;
  let braces = 0;
  let prev;
  let code;
  let token = { value: '', depth: 0, isGlob: false };

  const eos = () => index >= length;
  const peek = () => str.charCodeAt(index + 1);
  const advance = () => {
    prev = code;
    return str.charCodeAt(++index);
  };

  while (index < length) {
    code = advance();
    let next;

    if (code === CHAR_BACKWARD_SLASH) {
      backslashes = token.backslashes = true;
      code = advance();

      if (code === CHAR_LEFT_CURLY_BRACE) {
        braceEscaped = true;
      }
      continue;
    }

    if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
      braces++;

      while (eos() !== true && (code = advance())) {
        if (code === CHAR_BACKWARD_SLASH) {
          backslashes = token.backslashes = true;
          advance();
          continue;
        }

        if (code === CHAR_LEFT_CURLY_BRACE) {
          braces++;
          continue;
        }

        if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
          isBrace = token.isBrace = true;
          isGlob = token.isGlob = true;
          finished = true;

          if (scanToEnd === true) {
            continue;
          }

          break;
        }

        if (braceEscaped !== true && code === CHAR_COMMA) {
          isBrace = token.isBrace = true;
          isGlob = token.isGlob = true;
          finished = true;

          if (scanToEnd === true) {
            continue;
          }

          break;
        }

        if (code === CHAR_RIGHT_CURLY_BRACE) {
          braces--;

          if (braces === 0) {
            braceEscaped = false;
            isBrace = token.isBrace = true;
            finished = true;
            break;
          }
        }
      }

      if (scanToEnd === true) {
        continue;
      }

      break;
    }

    if (code === CHAR_FORWARD_SLASH) {
      slashes.push(index);
      tokens.push(token);
      token = { value: '', depth: 0, isGlob: false };

      if (finished === true) continue;
      if (prev === CHAR_DOT && index === (start + 1)) {
        start += 2;
        continue;
      }

      lastIndex = index + 1;
      continue;
    }

    if (opts.noext !== true) {
      const isExtglobChar = code === CHAR_PLUS
        || code === CHAR_AT
        || code === CHAR_ASTERISK
        || code === CHAR_QUESTION_MARK
        || code === CHAR_EXCLAMATION_MARK;

      if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
        isGlob = token.isGlob = true;
        isExtglob = token.isExtglob = true;
        finished = true;
        if (code === CHAR_EXCLAMATION_MARK && index === start) {
          negatedExtglob = true;
        }

        if (scanToEnd === true) {
          while (eos() !== true && (code = advance())) {
            if (code === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              code = advance();
              continue;
            }

            if (code === CHAR_RIGHT_PARENTHESES) {
              isGlob = token.isGlob = true;
              finished = true;
              break;
            }
          }
          continue;
        }
        break;
      }
    }

    if (code === CHAR_ASTERISK) {
      if (prev === CHAR_ASTERISK) isGlobstar = token.isGlobstar = true;
      isGlob = token.isGlob = true;
      finished = true;

      if (scanToEnd === true) {
        continue;
      }
      break;
    }

    if (code === CHAR_QUESTION_MARK) {
      isGlob = token.isGlob = true;
      finished = true;

      if (scanToEnd === true) {
        continue;
      }
      break;
    }

    if (code === CHAR_LEFT_SQUARE_BRACKET) {
      while (eos() !== true && (next = advance())) {
        if (next === CHAR_BACKWARD_SLASH) {
          backslashes = token.backslashes = true;
          advance();
          continue;
        }

        if (next === CHAR_RIGHT_SQUARE_BRACKET) {
          isBracket = token.isBracket = true;
          isGlob = token.isGlob = true;
          finished = true;
          break;
        }
      }

      if (scanToEnd === true) {
        continue;
      }

      break;
    }

    if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
      negated = token.negated = true;
      start++;
      continue;
    }

    if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
      isGlob = token.isGlob = true;

      if (scanToEnd === true) {
        while (eos() !== true && (code = advance())) {
          if (code === CHAR_LEFT_PARENTHESES) {
            backslashes = token.backslashes = true;
            code = advance();
            continue;
          }

          if (code === CHAR_RIGHT_PARENTHESES) {
            finished = true;
            break;
          }
        }
        continue;
      }
      break;
    }

    if (isGlob === true) {
      finished = true;

      if (scanToEnd === true) {
        continue;
      }

      break;
    }
  }

  if (opts.noext === true) {
    isExtglob = false;
    isGlob = false;
  }

  let base = str;
  let prefix = '';
  let glob = '';

  if (start > 0) {
    prefix = str.slice(0, start);
    str = str.slice(start);
    lastIndex -= start;
  }

  if (base && isGlob === true && lastIndex > 0) {
    base = str.slice(0, lastIndex);
    glob = str.slice(lastIndex);
  } else if (isGlob === true) {
    base = '';
    glob = str;
  } else {
    base = str;
  }

  if (base && base !== '' && base !== '/' && base !== str) {
    if (isPathSeparator(base.charCodeAt(base.length - 1))) {
      base = base.slice(0, -1);
    }
  }

  if (opts.unescape === true) {
    if (glob) glob = utils.removeBackslashes(glob);

    if (base && backslashes === true) {
      base = utils.removeBackslashes(base);
    }
  }

  const state = {
    prefix,
    input,
    start,
    base,
    glob,
    isBrace,
    isBracket,
    isGlob,
    isExtglob,
    isGlobstar,
    negated,
    negatedExtglob
  };

  if (opts.tokens === true) {
    state.maxDepth = 0;
    if (!isPathSeparator(code)) {
      tokens.push(token);
    }
    state.tokens = tokens;
  }

  if (opts.parts === true || opts.tokens === true) {
    let prevIndex;

    for (let idx = 0; idx < slashes.length; idx++) {
      const n = prevIndex ? prevIndex + 1 : start;
      const i = slashes[idx];
      const value = input.slice(n, i);
      if (opts.tokens) {
        if (idx === 0 && start !== 0) {
          tokens[idx].isPrefix = true;
          tokens[idx].value = prefix;
        } else {
          tokens[idx].value = value;
        }
        depth(tokens[idx]);
        state.maxDepth += tokens[idx].depth;
      }
      if (idx !== 0 || value !== '') {
        parts.push(value);
      }
      prevIndex = i;
    }

    if (prevIndex && prevIndex + 1 < input.length) {
      const value = input.slice(prevIndex + 1);
      parts.push(value);

      if (opts.tokens) {
        tokens[tokens.length - 1].value = value;
        depth(tokens[tokens.length - 1]);
        state.maxDepth += tokens[tokens.length - 1].depth;
      }
    }

    state.slashes = slashes;
    state.parts = parts;
  }

  return state;
};

module.exports = scan;


/***/ }),

/***/ 55:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

/*global navigator*/


const {
  REGEX_BACKSLASH,
  REGEX_REMOVE_BACKSLASH,
  REGEX_SPECIAL_CHARS,
  REGEX_SPECIAL_CHARS_GLOBAL
} = __nccwpck_require__(39);

exports.isObject = val => val !== null && typeof val === 'object' && !Array.isArray(val);
exports.hasRegexChars = str => REGEX_SPECIAL_CHARS.test(str);
exports.isRegexChar = str => str.length === 1 && exports.hasRegexChars(str);
exports.escapeRegex = str => str.replace(REGEX_SPECIAL_CHARS_GLOBAL, '\\$1');
exports.toPosixSlashes = str => str.replace(REGEX_BACKSLASH, '/');

exports.isWindows = () => {
  if (typeof navigator !== 'undefined' && navigator.platform) {
    const platform = navigator.platform.toLowerCase();
    return platform === 'win32' || platform === 'windows';
  }

  if (typeof process !== 'undefined' && process.platform) {
    return process.platform === 'win32';
  }

  return false;
};

exports.removeBackslashes = str => {
  return str.replace(REGEX_REMOVE_BACKSLASH, match => {
    return match === '\\' ? '' : match;
  });
};

exports.escapeLast = (input, char, lastIdx) => {
  const idx = input.lastIndexOf(char, lastIdx);
  if (idx === -1) return input;
  if (input[idx - 1] === '\\') return exports.escapeLast(input, char, idx - 1);
  return `${input.slice(0, idx)}\\${input.slice(idx)}`;
};

exports.removePrefix = (input, state = {}) => {
  let output = input;
  if (output.startsWith('./')) {
    output = output.slice(2);
    state.prefix = './';
  }
  return output;
};

exports.wrapOutput = (input, state = {}, options = {}) => {
  const prepend = options.contains ? '' : '^';
  const append = options.contains ? '' : '$';

  let output = `${prepend}(?:${input})${append}`;
  if (state.negated === true) {
    output = `(?:^(?!${output}).*$)`;
  }
  return output;
};

exports.basename = (path, { windows } = {}) => {
  const segs = path.split(windows ? /[\\/]/ : '/');
  const last = segs[segs.length - 1];

  if (last === '') {
    return segs[segs.length - 2];
  }

  return last;
};


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __nccwpck_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	var threw = true;
/******/ 	try {
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 		threw = false;
/******/ 	} finally {
/******/ 		if(threw) delete __webpack_module_cache__[moduleId];
/******/ 	}
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/asset-relocator-loader */
/******/ if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = decodeURIComponent(new URL('.', import.meta.url).pathname).slice(import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0, -1) + "/";
/******/ 
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nccwpck_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__nccwpck_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/create fake namespace object */
/******/ (() => {
/******/ 	var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 	var leafPrototypes;
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 16: return value when it's Promise-like
/******/ 	// mode & 8|1: behave like require
/******/ 	__nccwpck_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = this(value);
/******/ 		if(mode & 8) return value;
/******/ 		if(typeof value === 'object' && value) {
/******/ 			if((mode & 4) && value.__esModule) return value;
/******/ 			if((mode & 16) && typeof value.then === 'function') return value;
/******/ 		}
/******/ 		var ns = Object.create(null);
/******/ 		__nccwpck_require__.r(ns);
/******/ 		var def = {};
/******/ 		leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 		for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 			Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 		}
/******/ 		def['default'] = () => (value);
/******/ 		__nccwpck_require__.d(ns, def);
/******/ 		return ns;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__nccwpck_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__nccwpck_require__.o(definition, key) && !__nccwpck_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__nccwpck_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__nccwpck_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__nccwpck_require__.d(__webpack_exports__, {
  i: () => (/* binding */ main)
});

;// CONCATENATED MODULE: external "node:util"
const external_node_util_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("node:util");
;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/text/displayText.ts
// C0/C1 control characters except tab. Text copied from audited files can carry
// ANSI/OSC escape sequences that a terminal would otherwise interpret.
const CONTROL_CHARS = /[\u0000-\u0008\u000A-\u001F\u007F-\u009F]/g;
// Zero-width characters, bidirectional controls, and Unicode tag characters.
// They render as nothing (or reorder surrounding text), so they can hide
// instructions from a human reviewer while an agent still reads them. Kept as
// numeric ranges so formatters cannot rewrite them into literal characters.
const INVISIBLE_RANGES = [
    [0x00ad, 0x00ad], // soft hyphen
    [0x180e, 0x180e], // Mongolian vowel separator
    [0x200b, 0x200f], // zero-width space/joiners, LRM, RLM
    [0x202a, 0x202e], // bidi embeddings and overrides
    [0x2060, 0x2064], // word joiner, invisible operators
    [0x2066, 0x2069], // bidi isolates
    [0xfeff, 0xfeff], // zero-width no-break space / BOM
    [0xe0000, 0xe007f], // Unicode tag characters
];
function isInvisibleCodePoint(codePoint) {
    return INVISIBLE_RANGES.some(([start, end]) => codePoint >= start && codePoint <= end);
}
function formatCodePoint(char) {
    const hex = (char.codePointAt(0) ?? 0).toString(16).toUpperCase().padStart(4, '0');
    return `<U+${hex}>`;
}
/**
 * Make untrusted text safe to print on one line: control characters become
 * spaces and invisible characters are shown as `<U+XXXX>` markers.
 */
function toDisplayText(text) {
    let out = '';
    for (const char of text.replace(CONTROL_CHARS, ' ')) {
        out += isInvisibleCodePoint(char.codePointAt(0) ?? 0) ? formatCodePoint(char) : char;
    }
    return out;
}

;// CONCATENATED MODULE: external "node:path"
const external_node_path_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("node:path");
var external_node_path_default = /*#__PURE__*/__nccwpck_require__.n(external_node_path_namespaceObject);
;// CONCATENATED MODULE: external "node:fs/promises"
const promises_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("node:fs/promises");
var promises_default = /*#__PURE__*/__nccwpck_require__.n(promises_namespaceObject);
;// CONCATENATED MODULE: external "node:fs"
const external_node_fs_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("node:fs");
;// CONCATENATED MODULE: ./vendor/agent-readiness-kit/src/fs/fileExists.ts


async function fileExists(filePath) {
    try {
        await (0,promises_namespaceObject.access)(filePath, external_node_fs_namespaceObject.constants.F_OK);
        return true;
    }
    catch {
        return false;
    }
}
async function dirExists(dirPath) {
    try {
        await (0,promises_namespaceObject.access)(dirPath, external_node_fs_namespaceObject.constants.F_OK);
        return true;
    }
    catch {
        return false;
    }
}

;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("fs");
var external_fs_namespaceObject_0 = /*#__PURE__*/__nccwpck_require__.t(external_fs_namespaceObject, 2);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("path");
;// CONCATENATED MODULE: external "url"
const external_url_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("url");
;// CONCATENATED MODULE: external "module"
const external_module_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("module");
;// CONCATENATED MODULE: ./node_modules/.pnpm/fdir@6.5.0_picomatch@4.0.5/node_modules/fdir/dist/index.mjs




//#region rolldown:runtime
var __require = /* @__PURE__ */ (0,external_module_namespaceObject.createRequire)(import.meta.url);

//#endregion
//#region src/utils.ts
function cleanPath(path) {
	let normalized = (0,external_path_namespaceObject.normalize)(path);
	if (normalized.length > 1 && normalized[normalized.length - 1] === external_path_namespaceObject.sep) normalized = normalized.substring(0, normalized.length - 1);
	return normalized;
}
const SLASHES_REGEX = /[\\/]/g;
function convertSlashes(path, separator) {
	return path.replace(SLASHES_REGEX, separator);
}
const WINDOWS_ROOT_DIR_REGEX = /^[a-z]:[\\/]$/i;
function isRootDirectory(path) {
	return path === "/" || WINDOWS_ROOT_DIR_REGEX.test(path);
}
function normalizePath(path, options) {
	const { resolvePaths, normalizePath: normalizePath$1, pathSeparator } = options;
	const pathNeedsCleaning = process.platform === "win32" && path.includes("/") || path.startsWith(".");
	if (resolvePaths) path = (0,external_path_namespaceObject.resolve)(path);
	if (normalizePath$1 || pathNeedsCleaning) path = cleanPath(path);
	if (path === ".") return "";
	const needsSeperator = path[path.length - 1] !== pathSeparator;
	return convertSlashes(needsSeperator ? path + pathSeparator : path, pathSeparator);
}

//#endregion
//#region src/api/functions/join-path.ts
function joinPathWithBasePath(filename, directoryPath) {
	return directoryPath + filename;
}
function joinPathWithRelativePath(root, options) {
	return function(filename, directoryPath) {
		const sameRoot = directoryPath.startsWith(root);
		if (sameRoot) return directoryPath.slice(root.length) + filename;
		else return convertSlashes((0,external_path_namespaceObject.relative)(root, directoryPath), options.pathSeparator) + options.pathSeparator + filename;
	};
}
function joinPath(filename) {
	return filename;
}
function joinDirectoryPath(filename, directoryPath, separator) {
	return directoryPath + filename + separator;
}
function build$7(root, options) {
	const { relativePaths, includeBasePath } = options;
	return relativePaths && root ? joinPathWithRelativePath(root, options) : includeBasePath ? joinPathWithBasePath : joinPath;
}

//#endregion
//#region src/api/functions/push-directory.ts
function pushDirectoryWithRelativePath(root) {
	return function(directoryPath, paths) {
		paths.push(directoryPath.substring(root.length) || ".");
	};
}
function pushDirectoryFilterWithRelativePath(root) {
	return function(directoryPath, paths, filters) {
		const relativePath = directoryPath.substring(root.length) || ".";
		if (filters.every((filter) => filter(relativePath, true))) paths.push(relativePath);
	};
}
const pushDirectory = (directoryPath, paths) => {
	paths.push(directoryPath || ".");
};
const pushDirectoryFilter = (directoryPath, paths, filters) => {
	const path = directoryPath || ".";
	if (filters.every((filter) => filter(path, true))) paths.push(path);
};
const empty$2 = () => {};
function build$6(root, options) {
	const { includeDirs, filters, relativePaths } = options;
	if (!includeDirs) return empty$2;
	if (relativePaths) return filters && filters.length ? pushDirectoryFilterWithRelativePath(root) : pushDirectoryWithRelativePath(root);
	return filters && filters.length ? pushDirectoryFilter : pushDirectory;
}

//#endregion
//#region src/api/functions/push-file.ts
const pushFileFilterAndCount = (filename, _paths, counts, filters) => {
	if (filters.every((filter) => filter(filename, false))) counts.files++;
};
const pushFileFilter = (filename, paths, _counts, filters) => {
	if (filters.every((filter) => filter(filename, false))) paths.push(filename);
};
const pushFileCount = (_filename, _paths, counts, _filters) => {
	counts.files++;
};
const pushFile = (filename, paths) => {
	paths.push(filename);
};
const empty$1 = () => {};
function build$5(options) {
	const { excludeFiles, filters, onlyCounts } = options;
	if (excludeFiles) return empty$1;
	if (filters && filters.length) return onlyCounts ? pushFileFilterAndCount : pushFileFilter;
	else if (onlyCounts) return pushFileCount;
	else return pushFile;
}

//#endregion
//#region src/api/functions/get-array.ts
const getArray = (paths) => {
	return paths;
};
const getArrayGroup = () => {
	return [""].slice(0, 0);
};
function build$4(options) {
	return options.group ? getArrayGroup : getArray;
}

//#endregion
//#region src/api/functions/group-files.ts
const groupFiles = (groups, directory, files) => {
	groups.push({
		directory,
		files,
		dir: directory
	});
};
const empty = () => {};
function build$3(options) {
	return options.group ? groupFiles : empty;
}

//#endregion
//#region src/api/functions/resolve-symlink.ts
const resolveSymlinksAsync = function(path, state, callback$1) {
	const { queue, fs, options: { suppressErrors } } = state;
	queue.enqueue();
	fs.realpath(path, (error, resolvedPath) => {
		if (error) return queue.dequeue(suppressErrors ? null : error, state);
		fs.stat(resolvedPath, (error$1, stat) => {
			if (error$1) return queue.dequeue(suppressErrors ? null : error$1, state);
			if (stat.isDirectory() && isRecursive(path, resolvedPath, state)) return queue.dequeue(null, state);
			callback$1(stat, resolvedPath);
			queue.dequeue(null, state);
		});
	});
};
const resolveSymlinks = function(path, state, callback$1) {
	const { queue, fs, options: { suppressErrors } } = state;
	queue.enqueue();
	try {
		const resolvedPath = fs.realpathSync(path);
		const stat = fs.statSync(resolvedPath);
		if (stat.isDirectory() && isRecursive(path, resolvedPath, state)) return;
		callback$1(stat, resolvedPath);
	} catch (e) {
		if (!suppressErrors) throw e;
	}
};
function build$2(options, isSynchronous) {
	if (!options.resolveSymlinks || options.excludeSymlinks) return null;
	return isSynchronous ? resolveSymlinks : resolveSymlinksAsync;
}
function isRecursive(path, resolved, state) {
	if (state.options.useRealPaths) return isRecursiveUsingRealPaths(resolved, state);
	let parent = (0,external_path_namespaceObject.dirname)(path);
	let depth = 1;
	while (parent !== state.root && depth < 2) {
		const resolvedPath = state.symlinks.get(parent);
		const isSameRoot = !!resolvedPath && (resolvedPath === resolved || resolvedPath.startsWith(resolved) || resolved.startsWith(resolvedPath));
		if (isSameRoot) depth++;
		else parent = (0,external_path_namespaceObject.dirname)(parent);
	}
	state.symlinks.set(path, resolved);
	return depth > 1;
}
function isRecursiveUsingRealPaths(resolved, state) {
	return state.visited.includes(resolved + state.options.pathSeparator);
}

//#endregion
//#region src/api/functions/invoke-callback.ts
const onlyCountsSync = (state) => {
	return state.counts;
};
const groupsSync = (state) => {
	return state.groups;
};
const defaultSync = (state) => {
	return state.paths;
};
const limitFilesSync = (state) => {
	return state.paths.slice(0, state.options.maxFiles);
};
const onlyCountsAsync = (state, error, callback$1) => {
	report(error, callback$1, state.counts, state.options.suppressErrors);
	return null;
};
const defaultAsync = (state, error, callback$1) => {
	report(error, callback$1, state.paths, state.options.suppressErrors);
	return null;
};
const limitFilesAsync = (state, error, callback$1) => {
	report(error, callback$1, state.paths.slice(0, state.options.maxFiles), state.options.suppressErrors);
	return null;
};
const groupsAsync = (state, error, callback$1) => {
	report(error, callback$1, state.groups, state.options.suppressErrors);
	return null;
};
function report(error, callback$1, output, suppressErrors) {
	if (error && !suppressErrors) callback$1(error, output);
	else callback$1(null, output);
}
function build$1(options, isSynchronous) {
	const { onlyCounts, group, maxFiles } = options;
	if (onlyCounts) return isSynchronous ? onlyCountsSync : onlyCountsAsync;
	else if (group) return isSynchronous ? groupsSync : groupsAsync;
	else if (maxFiles) return isSynchronous ? limitFilesSync : limitFilesAsync;
	else return isSynchronous ? defaultSync : defaultAsync;
}

//#endregion
//#region src/api/functions/walk-directory.ts
const readdirOpts = { withFileTypes: true };
const walkAsync = (state, crawlPath, directoryPath, currentDepth, callback$1) => {
	state.queue.enqueue();
	if (currentDepth < 0) return state.queue.dequeue(null, state);
	const { fs } = state;
	state.visited.push(crawlPath);
	state.counts.directories++;
	fs.readdir(crawlPath || ".", readdirOpts, (error, entries = []) => {
		callback$1(entries, directoryPath, currentDepth);
		state.queue.dequeue(state.options.suppressErrors ? null : error, state);
	});
};
const walkSync = (state, crawlPath, directoryPath, currentDepth, callback$1) => {
	const { fs } = state;
	if (currentDepth < 0) return;
	state.visited.push(crawlPath);
	state.counts.directories++;
	let entries = [];
	try {
		entries = fs.readdirSync(crawlPath || ".", readdirOpts);
	} catch (e) {
		if (!state.options.suppressErrors) throw e;
	}
	callback$1(entries, directoryPath, currentDepth);
};
function build(isSynchronous) {
	return isSynchronous ? walkSync : walkAsync;
}

//#endregion
//#region src/api/queue.ts
/**
* This is a custom stateless queue to track concurrent async fs calls.
* It increments a counter whenever a call is queued and decrements it
* as soon as it completes. When the counter hits 0, it calls onQueueEmpty.
*/
var Queue = class {
	count = 0;
	constructor(onQueueEmpty) {
		this.onQueueEmpty = onQueueEmpty;
	}
	enqueue() {
		this.count++;
		return this.count;
	}
	dequeue(error, output) {
		if (this.onQueueEmpty && (--this.count <= 0 || error)) {
			this.onQueueEmpty(error, output);
			if (error) {
				output.controller.abort();
				this.onQueueEmpty = void 0;
			}
		}
	}
};

//#endregion
//#region src/api/counter.ts
var Counter = class {
	_files = 0;
	_directories = 0;
	set files(num) {
		this._files = num;
	}
	get files() {
		return this._files;
	}
	set directories(num) {
		this._directories = num;
	}
	get directories() {
		return this._directories;
	}
	/**
	* @deprecated use `directories` instead
	*/
	/* c8 ignore next 3 */
	get dirs() {
		return this._directories;
	}
};

//#endregion
//#region src/api/aborter.ts
/**
* AbortController is not supported on Node 14 so we use this until we can drop
* support for Node 14.
*/
var Aborter = class {
	aborted = false;
	abort() {
		this.aborted = true;
	}
};

//#endregion
//#region src/api/walker.ts
var Walker = class {
	root;
	isSynchronous;
	state;
	joinPath;
	pushDirectory;
	pushFile;
	getArray;
	groupFiles;
	resolveSymlink;
	walkDirectory;
	callbackInvoker;
	constructor(root, options, callback$1) {
		this.isSynchronous = !callback$1;
		this.callbackInvoker = build$1(options, this.isSynchronous);
		this.root = normalizePath(root, options);
		this.state = {
			root: isRootDirectory(this.root) ? this.root : this.root.slice(0, -1),
			paths: [""].slice(0, 0),
			groups: [],
			counts: new Counter(),
			options,
			queue: new Queue((error, state) => this.callbackInvoker(state, error, callback$1)),
			symlinks: /* @__PURE__ */ new Map(),
			visited: [""].slice(0, 0),
			controller: new Aborter(),
			fs: options.fs || external_fs_namespaceObject_0
		};
		this.joinPath = build$7(this.root, options);
		this.pushDirectory = build$6(this.root, options);
		this.pushFile = build$5(options);
		this.getArray = build$4(options);
		this.groupFiles = build$3(options);
		this.resolveSymlink = build$2(options, this.isSynchronous);
		this.walkDirectory = build(this.isSynchronous);
	}
	start() {
		this.pushDirectory(this.root, this.state.paths, this.state.options.filters);
		this.walkDirectory(this.state, this.root, this.root, this.state.options.maxDepth, this.walk);
		return this.isSynchronous ? this.callbackInvoker(this.state, null) : null;
	}
	walk = (entries, directoryPath, depth) => {
		const { paths, options: { filters, resolveSymlinks: resolveSymlinks$1, excludeSymlinks, exclude, maxFiles, signal, useRealPaths, pathSeparator }, controller } = this.state;
		if (controller.aborted || signal && signal.aborted || maxFiles && paths.length > maxFiles) return;
		const files = this.getArray(this.state.paths);
		for (let i = 0; i < entries.length; ++i) {
			const entry = entries[i];
			if (entry.isFile() || entry.isSymbolicLink() && !resolveSymlinks$1 && !excludeSymlinks) {
				const filename = this.joinPath(entry.name, directoryPath);
				this.pushFile(filename, files, this.state.counts, filters);
			} else if (entry.isDirectory()) {
				let path = joinDirectoryPath(entry.name, directoryPath, this.state.options.pathSeparator);
				if (exclude && exclude(entry.name, path)) continue;
				this.pushDirectory(path, paths, filters);
				this.walkDirectory(this.state, path, path, depth - 1, this.walk);
			} else if (this.resolveSymlink && entry.isSymbolicLink()) {
				let path = joinPathWithBasePath(entry.name, directoryPath);
				this.resolveSymlink(path, this.state, (stat, resolvedPath) => {
					if (stat.isDirectory()) {
						resolvedPath = normalizePath(resolvedPath, this.state.options);
						if (exclude && exclude(entry.name, useRealPaths ? resolvedPath : path + pathSeparator)) return;
						this.walkDirectory(this.state, resolvedPath, useRealPaths ? resolvedPath : path + pathSeparator, depth - 1, this.walk);
					} else {
						resolvedPath = useRealPaths ? resolvedPath : path;
						const filename = (0,external_path_namespaceObject.basename)(resolvedPath);
						const directoryPath$1 = normalizePath((0,external_path_namespaceObject.dirname)(resolvedPath), this.state.options);
						resolvedPath = this.joinPath(filename, directoryPath$1);
						this.pushFile(resolvedPath, files, this.state.counts, filters);
					}
				});
			}
		}
		this.groupFiles(this.state.groups, directoryPath, files);
	};
};

//#endregion
//#region src/api/async.ts
function promise(root, options) {
	return new Promise((resolve$1, reject) => {
		callback(root, options, (err, output) => {
			if (err) return reject(err);
			resolve$1(output);
		});
	});
}
function callback(root, options, callback$1) {
	let walker = new Walker(root, options, callback$1);
	walker.start();
}

//#endregion
//#region src/api/sync.ts
function sync(root, options) {
	const walker = new Walker(root, options);
	return walker.start();
}

//#endregion
//#region src/builder/api-builder.ts
var APIBuilder = class {
	constructor(root, options) {
		this.root = root;
		this.options = options;
	}
	withPromise() {
		return promise(this.root, this.options);
	}
	withCallback(cb) {
		callback(this.root, this.options, cb);
	}
	sync() {
		return sync(this.root, this.options);
	}
};

//#endregion
//#region src/builder/index.ts
let pm = null;
/* c8 ignore next 6 */
try {
	__require.resolve("picomatch");
	pm = __require("picomatch");
} catch {}
var Builder = class {
	globCache = {};
	options = {
		maxDepth: Infinity,
		suppressErrors: true,
		pathSeparator: external_path_namespaceObject.sep,
		filters: []
	};
	globFunction;
	constructor(options) {
		this.options = {
			...this.options,
			...options
		};
		this.globFunction = this.options.globFunction;
	}
	group() {
		this.options.group = true;
		return this;
	}
	withPathSeparator(separator) {
		this.options.pathSeparator = separator;
		return this;
	}
	withBasePath() {
		this.options.includeBasePath = true;
		return this;
	}
	withRelativePaths() {
		this.options.relativePaths = true;
		return this;
	}
	withDirs() {
		this.options.includeDirs = true;
		return this;
	}
	withMaxDepth(depth) {
		this.options.maxDepth = depth;
		return this;
	}
	withMaxFiles(limit) {
		this.options.maxFiles = limit;
		return this;
	}
	withFullPaths() {
		this.options.resolvePaths = true;
		this.options.includeBasePath = true;
		return this;
	}
	withErrors() {
		this.options.suppressErrors = false;
		return this;
	}
	withSymlinks({ resolvePaths = true } = {}) {
		this.options.resolveSymlinks = true;
		this.options.useRealPaths = resolvePaths;
		return this.withFullPaths();
	}
	withAbortSignal(signal) {
		this.options.signal = signal;
		return this;
	}
	normalize() {
		this.options.normalizePath = true;
		return this;
	}
	filter(predicate) {
		this.options.filters.push(predicate);
		return this;
	}
	onlyDirs() {
		this.options.excludeFiles = true;
		this.options.includeDirs = true;
		return this;
	}
	exclude(predicate) {
		this.options.exclude = predicate;
		return this;
	}
	onlyCounts() {
		this.options.onlyCounts = true;
		return this;
	}
	crawl(root) {
		return new APIBuilder(root || ".", this.options);
	}
	withGlobFunction(fn) {
		this.globFunction = fn;
		return this;
	}
	/**
	* @deprecated Pass options using the constructor instead:
	* ```ts
	* new fdir(options).crawl("/path/to/root");
	* ```
	* This method will be removed in v7.0
	*/
	/* c8 ignore next 4 */
	crawlWithOptions(root, options) {
		this.options = {
			...this.options,
			...options
		};
		return new APIBuilder(root || ".", this.options);
	}
	glob(...patterns) {
		if (this.globFunction) return this.globWithOptions(patterns);
		return this.globWithOptions(patterns, ...[{ dot: true }]);
	}
	globWithOptions(patterns, ...options) {
		const globFn = this.globFunction || pm;
		/* c8 ignore next 5 */
		if (!globFn) throw new Error("Please specify a glob function to use glob matching.");
		var isMatch = this.globCache[patterns.join("\0")];
		if (!isMatch) {
			isMatch = globFn(patterns, ...options);
			this.globCache[patterns.join("\0")] = isMatch;
		}
		this.options.filters.push((path) => isMatch(path));
		return this;
	}
};

//#endregion

// EXTERNAL MODULE: ./node_modules/.pnpm/picomatch@4.0.5/node_modules/picomatch/index.js
var picomatch = __nccwpck_require__(954);
;// CONCATENATED MODULE: ./node_modules/.pnpm/tinyglobby@0.2.17/node_modules/tinyglobby/dist/index.mjs





//#region src/utils.ts
const isReadonlyArray = Array.isArray;
const BACKSLASHES = /\\/g;
const DRIVE_RELATIVE_PATH = /^[A-Za-z]:$/;
const isWin = process.platform === "win32";
const ONLY_PARENT_DIRECTORIES = /^(\/?\.\.)+$/;
function getPartialMatcher(patterns, options = {}) {
	const patternsCount = patterns.length;
	const patternsParts = Array(patternsCount);
	const matchers = Array(patternsCount);
	let i, j;
	for (i = 0; i < patternsCount; i++) {
		const parts = splitPattern(patterns[i]);
		patternsParts[i] = parts;
		const partsCount = parts.length;
		const partMatchers = Array(partsCount);
		for (j = 0; j < partsCount; j++) partMatchers[j] = picomatch(parts[j], options);
		matchers[i] = partMatchers;
	}
	return (input) => {
		const inputParts = input.split("/");
		if (inputParts[0] === ".." && ONLY_PARENT_DIRECTORIES.test(input)) return true;
		for (i = 0; i < patternsCount; i++) {
			const patternParts = patternsParts[i];
			const matcher = matchers[i];
			const inputPatternCount = inputParts.length;
			const minParts = Math.min(inputPatternCount, patternParts.length);
			j = 0;
			while (j < minParts) {
				const part = patternParts[j];
				if (part.includes("/")) return true;
				if (!matcher[j](inputParts[j])) break;
				if (!options.noglobstar && part === "**") return true;
				j++;
			}
			if (j === inputPatternCount) return true;
		}
		return false;
	};
}
/* node:coverage ignore next 2 */
const WIN32_ROOT_DIR = /^[A-Z]:\/$/i;
const isRoot = isWin ? (p) => WIN32_ROOT_DIR.test(p) : (p) => p === "/";
function buildFormat(cwd, root, absolute) {
	if (cwd === root || root.startsWith(`${cwd}/`)) {
		if (absolute) {
			const start = cwd.length + +!isRoot(cwd);
			return (p, isDir) => p.slice(start, isDir ? -1 : void 0) || ".";
		}
		const prefix = root.slice(cwd.length + 1);
		if (prefix) return (p, isDir) => {
			if (p === ".") return prefix;
			const result = `${prefix}/${p}`;
			return isDir ? result.slice(0, -1) : result;
		};
		return (p, isDir) => isDir && p !== "." ? p.slice(0, -1) : p;
	}
	if (absolute) return (p) => external_path_namespaceObject.posix.relative(cwd, p) || ".";
	return (p) => external_path_namespaceObject.posix.relative(cwd, `${root}/${p}`) || ".";
}
function buildRelative(cwd, root) {
	if (root.startsWith(`${cwd}/`)) {
		const prefix = root.slice(cwd.length + 1);
		return (p) => `${prefix}/${p}`;
	}
	return (p) => {
		const result = external_path_namespaceObject.posix.relative(cwd, `${root}/${p}`);
		return p[p.length - 1] === "/" && result !== "" ? `${result}/` : result || ".";
	};
}
function ensureNonDriveRelativePath(path) {
	return path.replace(DRIVE_RELATIVE_PATH, (match) => `${match}/`);
}
const splitPatternOptions = { parts: true };
function splitPattern(path) {
	var _result$parts;
	const result = picomatch.scan(path, splitPatternOptions);
	return ((_result$parts = result.parts) === null || _result$parts === void 0 ? void 0 : _result$parts.length) ? result.parts : [path];
}
const ESCAPED_WIN32_BACKSLASHES = /\\(?![()[\]{}!+@])/g;
function convertPosixPathToPattern(path) {
	return escapePosixPath(path);
}
function convertWin32PathToPattern(path) {
	return escapeWin32Path(path).replace(ESCAPED_WIN32_BACKSLASHES, "/");
}
/**
* Converts a path to a pattern depending on the platform.
* Identical to {@link escapePath} on POSIX systems.
* @see {@link https://superchupu.dev/tinyglobby/documentation#convertPathToPattern}
*/
/* node:coverage ignore next 3 */
const convertPathToPattern = (/* unused pure expression or super */ null && (isWin ? convertWin32PathToPattern : convertPosixPathToPattern));
const POSIX_UNESCAPED_GLOB_SYMBOLS = /(?<!\\)([()[\]{}*?|]|^!|[!+@](?=\()|\\(?![()[\]{}!*+?@|]))/g;
const WIN32_UNESCAPED_GLOB_SYMBOLS = /(?<!\\)([()[\]{}]|^!|[!+@](?=\())/g;
const escapePosixPath = (path) => path.replace(POSIX_UNESCAPED_GLOB_SYMBOLS, "\\$&");
const escapeWin32Path = (path) => path.replace(WIN32_UNESCAPED_GLOB_SYMBOLS, "\\$&");
/**
* Escapes a path's special characters depending on the platform.
* @see {@link https://superchupu.dev/tinyglobby/documentation#escapePath}
*/
/* node:coverage ignore next */
const escapePath = isWin ? escapeWin32Path : escapePosixPath;
/**
* Checks if a pattern has dynamic parts.
*
* Has a few minor differences with [`fast-glob`](https://github.com/mrmlnc/fast-glob) for better accuracy:
*
* - Doesn't necessarily return `false` on patterns that include `\`.
* - Returns `true` if the pattern includes parentheses, regardless of them representing one single pattern or not.
* - Returns `true` for unfinished glob extensions i.e. `(h`, `+(h`.
* - Returns `true` for unfinished brace expansions as long as they include `,` or `..`.
*
* @see {@link https://superchupu.dev/tinyglobby/documentation#isDynamicPattern}
*/
function isDynamicPattern(pattern, options) {
	if ((options === null || options === void 0 ? void 0 : options.caseSensitiveMatch) === false) return true;
	const scan = picomatch.scan(pattern);
	return scan.isGlob || scan.negated;
}
function log(...tasks) {
	console.log(`[tinyglobby ${(/* @__PURE__ */ new Date()).toLocaleTimeString("es")}]`, ...tasks);
}
function ensureStringArray(value) {
	return typeof value === "string" ? [value] : value !== null && value !== void 0 ? value : [];
}
//#endregion
//#region src/patterns.ts
const PARENT_DIRECTORY = /^(\/?\.\.)+/;
const ESCAPING_BACKSLASHES = /\\(?=[()[\]{}!*+?@|])/g;
function normalizePattern(pattern, opts, props, isIgnore) {
	var _PARENT_DIRECTORY$exe;
	const cwd = opts.cwd;
	let result = pattern;
	if (pattern[pattern.length - 1] === "/") result = pattern.slice(0, -1);
	if (result[result.length - 1] !== "*" && opts.expandDirectories) result += "/**";
	const escapedCwd = escapePath(cwd);
	result = (0,external_path_namespaceObject.isAbsolute)(result.replace(ESCAPING_BACKSLASHES, "")) ? external_path_namespaceObject.posix.relative(escapedCwd, result) : external_path_namespaceObject.posix.normalize(result);
	const parentDir = (_PARENT_DIRECTORY$exe = PARENT_DIRECTORY.exec(result)) === null || _PARENT_DIRECTORY$exe === void 0 ? void 0 : _PARENT_DIRECTORY$exe[0];
	const parts = splitPattern(result);
	if (parentDir) {
		const n = (parentDir.length + 1) / 3;
		let i = 0;
		const cwdParts = escapedCwd.split("/");
		while (i < n && parts[i + n] === cwdParts[cwdParts.length + i - n]) {
			result = result.slice(0, (n - i - 1) * 3) + result.slice((n - i) * 3 + parts[i + n].length + 1) || ".";
			i++;
		}
		const potentialRoot = external_path_namespaceObject.posix.join(cwd, parentDir.slice(i * 3));
		if (potentialRoot[0] !== "." && props.root.length > potentialRoot.length) {
			props.root = ensureNonDriveRelativePath(potentialRoot);
			props.depthOffset = -n + i;
		}
	}
	if (!isIgnore && props.depthOffset >= 0) {
		var _props$commonPath;
		(_props$commonPath = props.commonPath) !== null && _props$commonPath !== void 0 || (props.commonPath = parts);
		const newCommonPath = [];
		const length = Math.min(props.commonPath.length, parts.length);
		for (let i = 0; i < length; i++) {
			const part = parts[i];
			if (part === "**" && !parts[i + 1]) {
				newCommonPath.pop();
				break;
			}
			if (i === parts.length - 1 || part !== props.commonPath[i] || isDynamicPattern(part)) break;
			newCommonPath.push(part);
		}
		props.depthOffset = newCommonPath.length;
		props.commonPath = newCommonPath;
		props.root = ensureNonDriveRelativePath(newCommonPath.length > 0 ? external_path_namespaceObject.posix.join(cwd, ...newCommonPath) : cwd);
	}
	return result;
}
function processPatterns(options, patterns, props) {
	const matchPatterns = [];
	const ignorePatterns = [];
	for (const pattern of options.ignore) {
		if (!pattern) continue;
		if (pattern[0] !== "!" || pattern[1] === "(") ignorePatterns.push(normalizePattern(pattern, options, props, true));
	}
	for (const pattern of patterns) {
		if (!pattern) continue;
		if (pattern[0] !== "!" || pattern[1] === "(") matchPatterns.push(normalizePattern(pattern, options, props, false));
		else if (pattern[1] !== "!" || pattern[2] === "(") ignorePatterns.push(normalizePattern(pattern.slice(1), options, props, true));
	}
	return {
		match: matchPatterns,
		ignore: ignorePatterns
	};
}
//#endregion
//#region src/crawler.ts
function buildCrawler(options, patterns) {
	const cwd = options.cwd;
	const props = {
		root: cwd,
		depthOffset: 0
	};
	const processed = processPatterns(options, patterns, props);
	if (options.debug) log("internal processing patterns:", processed);
	const { absolute, caseSensitiveMatch, debug, dot, followSymbolicLinks, onlyDirectories } = options;
	const root = props.root.replace(BACKSLASHES, "");
	const matchOptions = {
		dot,
		nobrace: options.braceExpansion === false,
		nocase: !caseSensitiveMatch,
		noextglob: options.extglob === false,
		noglobstar: options.globstar === false,
		posix: true
	};
	const matcher = picomatch(processed.match, matchOptions);
	const ignore = picomatch(processed.ignore, matchOptions);
	const partialMatcher = getPartialMatcher(processed.match, matchOptions);
	const format = buildFormat(cwd, root, absolute);
	const excludeFormatter = absolute ? format : buildFormat(cwd, root, true);
	const excludePredicate = (_, p) => {
		const relativePath = excludeFormatter(p, true);
		return relativePath !== "." && !partialMatcher(relativePath) || ignore(relativePath);
	};
	let maxDepth;
	if (options.deep !== void 0) maxDepth = Math.round(options.deep - props.depthOffset);
	const crawler = new Builder({
		filters: [debug ? (p, isDirectory) => {
			const path = format(p, isDirectory);
			const matches = matcher(path) && !ignore(path);
			if (matches) log(`matched ${path}`);
			return matches;
		} : (p, isDirectory) => {
			const path = format(p, isDirectory);
			return matcher(path) && !ignore(path);
		}],
		exclude: debug ? (_, p) => {
			const skipped = excludePredicate(_, p);
			log(`${skipped ? "skipped" : "crawling"} ${p}`);
			return skipped;
		} : excludePredicate,
		fs: options.fs,
		pathSeparator: "/",
		relativePaths: !absolute,
		resolvePaths: absolute,
		includeBasePath: absolute,
		resolveSymlinks: followSymbolicLinks,
		excludeSymlinks: !followSymbolicLinks,
		excludeFiles: onlyDirectories,
		includeDirs: onlyDirectories || !options.onlyFiles,
		maxDepth,
		signal: options.signal
	}).crawl(root);
	if (options.debug) log("internal properties:", {
		...props,
		root
	});
	return [crawler, cwd !== root && !absolute && buildRelative(cwd, root)];
}
//#endregion
//#region src/index.ts
function formatPaths(paths, mapper) {
	if (mapper) for (let i = paths.length - 1; i >= 0; i--) paths[i] = mapper(paths[i]);
	return paths;
}
const defaultOptions = {
	caseSensitiveMatch: true,
	debug: !!process.env.TINYGLOBBY_DEBUG,
	expandDirectories: true,
	followSymbolicLinks: true,
	onlyFiles: true
};
function getOptions(options) {
	const opts = Object.assign({}, options);
	for (const key in defaultOptions) if (opts[key] === void 0) Object.assign(opts, { [key]: defaultOptions[key] });
	opts.cwd = (opts.cwd instanceof URL ? (0,external_url_namespaceObject.fileURLToPath)(opts.cwd) : (0,external_path_namespaceObject.resolve)(opts.cwd || process.cwd())).replace(BACKSLASHES, "/");
	opts.ignore = ensureStringArray(opts.ignore);
	opts.fs && (opts.fs = {
		readdir: opts.fs.readdir || external_fs_namespaceObject.readdir,
		readdirSync: opts.fs.readdirSync || external_fs_namespaceObject.readdirSync,
		realpath: opts.fs.realpath || external_fs_namespaceObject.realpath,
		realpathSync: opts.fs.realpathSync || external_fs_namespaceObject.realpathSync,
		stat: opts.fs.stat || external_fs_namespaceObject.stat,
		statSync: opts.fs.statSync || external_fs_namespaceObject.statSync
	});
	if (opts.debug) log("globbing with options:", opts);
	return opts;
}
function getCrawler(globInput, inputOptions = {}) {
	var _ref;
	if (globInput && (inputOptions === null || inputOptions === void 0 ? void 0 : inputOptions.patterns)) throw new Error("Cannot pass patterns as both an argument and an option");
	const isModern = isReadonlyArray(globInput) || typeof globInput === "string";
	const patterns = ensureStringArray((_ref = isModern ? globInput : globInput.patterns) !== null && _ref !== void 0 ? _ref : "**/*");
	const options = getOptions(isModern ? inputOptions : globInput);
	return patterns.length > 0 ? buildCrawler(options, patterns) : [];
}
async function glob(globInput, options) {
	const [crawler, relative] = getCrawler(globInput, options);
	return crawler ? formatPaths(await crawler.withPromise(), relative) : [];
}
function globSync(globInput, options) {
	const [crawler, relative] = getCrawler(globInput, options);
	return crawler ? formatPaths(crawler.sync(), relative) : [];
}
//#endregion


;// CONCATENATED MODULE: ./vendor/agent-readiness-kit/src/fs/safePath.ts


/** True when `target` is `root` itself or a descendant of it (lexical check). */
function safePath_isWithin(root, target) {
    const rel = external_node_path_default().relative(root, target);
    if (rel === '')
        return true;
    return (rel !== '..' && !rel.startsWith(`..${(external_node_path_default()).sep}`) && !external_node_path_default().isAbsolute(rel));
}
/**
 * Resolve symlinks in the longest existing prefix of `target` and re-append
 * the components that do not exist yet, to see where a write would land
 * before any directories are created.
 */
function realpathOfExistingPrefix(target) {
    const missing = [];
    let current = external_node_path_default().resolve(target);
    for (;;) {
        try {
            return external_node_path_default().join((0,external_node_fs_namespaceObject.realpathSync)(current), ...missing);
        }
        catch {
            const parent = external_node_path_default().dirname(current);
            if (parent === current)
                return external_node_path_default().resolve(target);
            missing.unshift(external_node_path_default().basename(current));
            current = parent;
        }
    }
}
/** True when `target`, after resolving symlinks, stays inside `root`. */
function safePath_isRealpathWithin(root, target) {
    return safePath_isWithin(realpathOfExistingPrefix(root), realpathOfExistingPrefix(target));
}

;// CONCATENATED MODULE: ./vendor/agent-readiness-kit/src/fs/findFiles.ts





/**
 * tinyglobby either follows symlinks or drops them. Resolving each link to
 * itself and stat-ing it with lstat makes the walker report every symlink as
 * an entry without entering it, which is what `followSymbolicLinks: false`
 * means elsewhere: `CLAUDE.md -> AGENTS.md` is listed, `docs -> /` is not
 * walked.
 */
const reportSymlinksWithoutFollowing = {
    realpath: ((p, callback) => callback(null, String(p))),
    realpathSync: ((p) => String(p)),
    stat: external_node_fs_namespaceObject.lstat,
    statSync: external_node_fs_namespaceObject.lstatSync,
};
/**
 * Glob for files under `repoPath`.
 *
 * Symlinked directories are never traversed, so a link such as `docs -> /`
 * cannot walk the audit across the filesystem or list files from outside the
 * repository in a report. That includes a directory named in the pattern
 * itself (`.github/workflows/*.yml` with `.github -> /elsewhere`), which
 * a glob would otherwise enter. Symlinked files are kept when their target is a
 * regular file inside the repository (for example `CLAUDE.md -> AGENTS.md`).
 */
async function findFiles(repoPath, patterns, options) {
    const patternList = Array.isArray(patterns) ? patterns : [patterns];
    const entries = await glob(patternList, {
        cwd: repoPath,
        absolute: true,
        dot: true,
        onlyFiles: false,
        followSymbolicLinks: true,
        fs: reportSymlinksWithoutFollowing,
        // `docs` names that directory only, not everything below it.
        expandDirectories: false,
        // tinyglobby counts the top level as depth 0.
        deep: (options?.deep ?? Infinity) - 1,
        ignore: options?.ignore ?? [
            '**/node_modules/**',
            '**/.git/**',
            '**/dist/**',
        ],
    });
    const realRepo = await (0,promises_namespaceObject.realpath)(repoPath).catch(() => external_node_path_default().resolve(repoPath));
    const realDirs = new Map();
    const inRepoDir = (dir) => {
        let inside = realDirs.get(dir);
        if (!inside) {
            inside = (0,promises_namespaceObject.realpath)(dir).then((real) => safePath_isWithin(realRepo, real), () => false);
            realDirs.set(dir, inside);
        }
        return inside;
    };
    const matches = [];
    for (const entry of entries) {
        // Directories come back with a trailing slash.
        if (entry.endsWith('/'))
            continue;
        const entryPath = external_node_path_default().normalize(entry);
        const info = await (0,promises_namespaceObject.lstat)(entryPath).catch(() => null);
        if (info?.isFile()) {
            if (await inRepoDir(external_node_path_default().dirname(entryPath)))
                matches.push(entryPath);
        }
        else if (info?.isSymbolicLink() &&
            (await isRegularFileInside(realRepo, entryPath))) {
            matches.push(entryPath);
        }
    }
    return matches.sort();
}
async function isRegularFileInside(realRepo, linkPath) {
    try {
        const target = await (0,promises_namespaceObject.realpath)(linkPath);
        if (!safePath_isWithin(realRepo, target))
            return false;
        return (await (0,promises_namespaceObject.stat)(target)).isFile();
    }
    catch {
        return false;
    }
}
function relativeToRepo(repoPath, absolutePath) {
    return path.relative(repoPath, absolutePath);
}

;// CONCATENATED MODULE: ./vendor/agent-readiness-kit/src/fs/readTextFile.ts


/** Files above this size are never read into memory. */
const MAX_TEXT_FILE_BYTES = 1024 * 1024;
// O_NONBLOCK keeps open() from waiting on a FIFO with no writer; it has no
// effect on regular files. It is undefined on Windows, which has no FIFOs.
const READ_FLAGS = external_node_fs_namespaceObject.constants.O_RDONLY | (external_node_fs_namespaceObject.constants.O_NONBLOCK ?? 0);
/**
 * Read a regular file as UTF-8. The type and size are checked on the opened
 * handle, not the path, so the file cannot be swapped for a FIFO, device, or
 * larger file between the check and the read.
 */
async function readRegularFile(filePath, maxBytes = MAX_TEXT_FILE_BYTES) {
    let handle;
    try {
        handle = await (0,promises_namespaceObject.open)(filePath, READ_FLAGS);
    }
    catch (error) {
        const code = error.code;
        if (code === 'ENOENT' || code === 'ENOTDIR')
            return { status: 'missing' };
        if (code === 'EISDIR')
            return { status: 'not-a-file' };
        return { status: 'error', error };
    }
    try {
        const info = await handle.stat();
        if (!info.isFile())
            return { status: 'not-a-file' };
        if (info.size > maxBytes)
            return { status: 'too-large' };
        // Read at most the size seen above, even if the file grows meanwhile.
        const buffer = Buffer.alloc(info.size);
        let offset = 0;
        while (offset < buffer.length) {
            const { bytesRead } = await handle.read(buffer, offset, buffer.length - offset, offset);
            if (bytesRead === 0)
                break;
            offset += bytesRead;
        }
        return {
            status: 'ok',
            content: buffer.subarray(0, offset).toString('utf8'),
        };
    }
    catch (error) {
        return { status: 'error', error };
    }
    finally {
        await handle.close();
    }
}
/**
 * Read a regular file as UTF-8, or return null. FIFOs, devices, directories,
 * and files larger than `maxBytes` are not read, so a hostile repository
 * cannot hang an audit or exhaust memory.
 */
async function readTextFile_readTextFile(filePath, maxBytes = MAX_TEXT_FILE_BYTES) {
    const result = await readRegularFile(filePath, maxBytes);
    return result.status === 'ok' ? result.content : null;
}

;// CONCATENATED MODULE: ./vendor/agent-readiness-kit/src/audit/placeholderDetection.ts

const PLACEHOLDER_PATTERNS = [
    '<!-- Describe',
    '<!-- List',
    '<!-- What problem',
    '<!-- e.g.',
    'In scope:',
    'Out of scope:',
    'List paths to read before editing.',
];
const PLACEHOLDER_WARNING = 'File appears to contain starter placeholders — customize before relying on agents';
function containsPlaceholderContent(content) {
    return PLACEHOLDER_PATTERNS.some((pattern) => content.includes(pattern));
}
async function fileHasPlaceholderContent(filePath) {
    const content = await readTextFile_readTextFile(filePath);
    return content !== null && containsPlaceholderContent(content);
}

;// CONCATENATED MODULE: ./vendor/agent-readiness-kit/src/fs/writeFileSafe.ts





// O_NOFOLLOW is undefined on Windows; the lstat check covers it there.
const WRITE_FLAGS = external_node_fs_namespaceObject.constants.O_WRONLY |
    external_node_fs_namespaceObject.constants.O_CREAT |
    external_node_fs_namespaceObject.constants.O_TRUNC |
    (external_node_fs_namespaceObject.constants.O_NOFOLLOW ?? 0);
/** Write `content` to `filePath` without following a symlink at the final component. */
async function writeFileNoFollow(filePath, content) {
    const handle = await open(filePath, WRITE_FLAGS, 0o666);
    try {
        await handle.writeFile(content, 'utf8');
    }
    finally {
        await handle.close();
    }
}
/**
 * Create `filePath` unless it already exists (or `force` is set).
 *
 * A symlink at the target counts as existing and is never written through,
 * even with `force`: otherwise a repository could point `AGENTS.md` (or a
 * dangling link) at a file elsewhere on the machine and have it overwritten.
 * With `root`, writes that would land outside it are refused.
 */
async function writeFileSafe(filePath, content, options = {}) {
    const existing = await lstat(filePath).catch(() => null);
    if (existing && !options.force) {
        return { path: filePath, status: 'skipped' };
    }
    if (existing?.isSymbolicLink()) {
        return { path: filePath, status: 'refused', reason: 'symlink' };
    }
    if (options.root !== undefined &&
        !(isWithin(path.resolve(options.root), path.resolve(filePath)) &&
            isRealpathWithin(options.root, filePath))) {
        return { path: filePath, status: 'refused', reason: 'outside-repo' };
    }
    await mkdir(path.dirname(filePath), { recursive: true });
    await writeFileNoFollow(filePath, content);
    return {
        path: filePath,
        status: existing ? 'overwritten' : 'created',
    };
}
async function readJsonFile(filePath) {
    const raw = await readTextFile_readTextFile(filePath);
    if (raw === null)
        return null;
    try {
        return JSON.parse(raw);
    }
    catch {
        return null;
    }
}

;// CONCATENATED MODULE: ./vendor/agent-readiness-kit/src/audit/testFiles.ts



const JS_EXT = '{js,jsx,mjs,cjs,ts,tsx,mts,cts}';
const JS_EXT_RE = /\.(?:js|jsx|mjs|cjs|ts|tsx|mts|cts)$/;
/**
 * Test file conventions by language. A file counts as a test when it matches
 * one of the patterns and is not under one of `TEST_SCAN_IGNORE`. `matches`
 * repeats the patterns as a check on a repository-relative POSIX path, so a
 * single directory walk can be split by language.
 */
const TEST_FILE_CONVENTIONS = [
    {
        language: 'JavaScript/TypeScript',
        patterns: [`**/*.{test,spec}.${JS_EXT}`, `**/__tests__/**/*.${JS_EXT}`],
        matches: (_rel, base, dirs) => /\.(?:test|spec)\.(?:js|jsx|mjs|cjs|ts|tsx|mts|cts)$/.test(base) ||
            (dirs.includes('__tests__') && JS_EXT_RE.test(base)),
    },
    {
        language: 'Go',
        patterns: ['**/*_test.go'],
        matches: (_rel, base) => base.endsWith('_test.go'),
    },
    {
        language: 'Python',
        patterns: ['**/test_*.py', '**/*_test.py'],
        matches: (_rel, base) => (base.startsWith('test_') || base.endsWith('_test.py')) &&
            base.endsWith('.py'),
    },
    {
        language: 'Rust',
        patterns: ['**/tests/**/*.rs'],
        matches: (_rel, base, dirs) => dirs.includes('tests') && base.endsWith('.rs'),
    },
    {
        language: 'Ruby',
        patterns: ['**/*_spec.rb', '**/test_*.rb', '**/*_test.rb'],
        matches: (_rel, base) => base.endsWith('.rb') &&
            (base.endsWith('_spec.rb') ||
                base.endsWith('_test.rb') ||
                base.startsWith('test_')),
    },
    {
        language: 'Java/Kotlin',
        patterns: ['**/src/test/**/*.{java,kt}', '**/*{Test,Tests}.{java,kt}'],
        matches: (rel, base) => /\.(?:java|kt)$/.test(base) &&
            (`/${rel}`.includes('/src/test/') || /Tests?\.(?:java|kt)$/.test(base)),
    },
    {
        language: 'C#',
        patterns: ['**/*.Tests/**/*.cs', '**/*{Test,Tests}.cs'],
        matches: (_rel, base, dirs) => base.endsWith('.cs') &&
            (dirs.some((d) => d.endsWith('.Tests')) || /Tests?\.cs$/.test(base)),
    },
    // Any file under a root tests/ or test/ directory. Kept from the original
    // JavaScript-only patterns so existing repositories keep their result.
    {
        language: 'tests/ directory',
        patterns: ['tests/**/*', 'test/**/*'],
        matches: (_rel, _base, dirs) => dirs[0] === 'tests' || dirs[0] === 'test',
    },
];
/** Test discovery does not descend further than this many directory levels. */
const MAX_TEST_SCAN_DEPTH = 20;
/**
 * Directories that hold dependencies, build output, virtual environments, or
 * fixture data. Files in them are not the repository's own tests.
 */
const TEST_SCAN_IGNORE = [
    '**/node_modules/**',
    '**/.git/**',
    '**/dist/**',
    '**/build/**',
    '**/out/**',
    '**/target/**',
    '**/vendor/**',
    '**/third_party/**',
    '**/.venv/**',
    '**/venv/**',
    '**/.tox/**',
    '**/.nox/**',
    '**/__pycache__/**',
    '**/site-packages/**',
    '**/coverage/**',
    '**/.next/**',
    '**/bin/**',
    '**/obj/**',
    '**/fixtures/**',
    '**/__fixtures__/**',
    '**/testdata/**',
];
/** Upper bound on Rust sources read when looking for inline unit tests. */
const MAX_RUST_SOURCES_SCANNED = 500;
const RUST_INLINE_TEST = /#\[(?:cfg\(test\)|test|tokio::test)\]/;
/**
 * Find test files across language conventions. Rust unit tests live inline in
 * source files, so when a `Cargo.toml` is present the Rust sources are read
 * for `#[test]` or `#[cfg(test)]`.
 */
async function findTestFiles(repoPath) {
    // One directory walk for every convention plus the Rust inline-test inputs.
    const found = await findFiles(repoPath, [
        ...TEST_FILE_CONVENTIONS.flatMap((c) => c.patterns),
        '**/Cargo.toml',
        '**/src/**/*.rs',
    ], { ignore: TEST_SCAN_IGNORE, deep: MAX_TEST_SCAN_DEPTH });
    const byLanguage = new Map();
    let hasCargo = false;
    const rustSources = [];
    for (const file of found) {
        const rel = external_node_path_default().relative(repoPath, file).split((external_node_path_default()).sep).join('/');
        const parts = rel.split('/');
        const base = parts[parts.length - 1];
        const dirs = parts.slice(0, -1);
        if (base === 'Cargo.toml')
            hasCargo = true;
        const convention = TEST_FILE_CONVENTIONS.find((c) => c.matches(rel, base, dirs));
        if (convention) {
            const list = byLanguage.get(convention.language) ?? [];
            list.push(file);
            byLanguage.set(convention.language, list);
        }
        else if (base.endsWith('.rs') && dirs.includes('src')) {
            rustSources.push(file);
        }
    }
    const files = [];
    const languages = [];
    for (const { language } of TEST_FILE_CONVENTIONS) {
        const list = byLanguage.get(language);
        if (list) {
            languages.push(language);
            files.push(...list);
        }
    }
    // Rust unit tests live inline in source files.
    if (hasCargo) {
        const inline = [];
        for (const file of rustSources.slice(0, MAX_RUST_SOURCES_SCANNED)) {
            const content = await readTextFile_readTextFile(file);
            if (content !== null && RUST_INLINE_TEST.test(content))
                inline.push(file);
        }
        if (inline.length > 0) {
            if (!languages.includes('Rust'))
                languages.push('Rust');
            files.push(...inline);
        }
    }
    return { files: files.sort(), languages };
}

;// CONCATENATED MODULE: ./vendor/agent-readiness-kit/src/audit/ecosystems.ts



/**
 * Ecosystems whose project files the audit understands. Checks that look for
 * ecosystem-specific files (lockfiles, version pins, test runners, linters,
 * formatters) evaluate each detected ecosystem against its own equivalents.
 */
const ECOSYSTEM_IDS = ['node', 'python', 'go', 'rust'];
const ECOSYSTEM_LABELS = {
    node: 'Node.js',
    python: 'Python',
    go: 'Go',
    rust: 'Rust',
};
/**
 * Manifests are looked for this many directory levels deep, so a Python API
 * with a `frontend/package.json` or `apps/web/package.json` is seen as both.
 */
const MANIFEST_SCAN_DEPTH = 4;
/** Directories whose manifests do not describe the repository itself. */
const ECOSYSTEM_SCAN_IGNORE = [
    ...TEST_SCAN_IGNORE,
    '**/examples/**',
    '**/example/**',
];
const MANIFESTS = {
    node: {
        anyDepth: ['package.json'],
        root: [
            'pnpm-lock.yaml',
            'package-lock.json',
            'yarn.lock',
            'bun.lock',
            'bun.lockb',
        ],
    },
    python: {
        anyDepth: ['pyproject.toml', 'setup.py', 'Pipfile'],
        // A nested requirements.txt is usually a docs or tooling helper (for
        // example docs/requirements.txt for Read the Docs), so only the root counts.
        root: ['requirements.txt', 'requirements-*.txt', 'requirements/*.txt'],
    },
    go: { anyDepth: ['go.mod'], root: [] },
    rust: { anyDepth: ['Cargo.toml'], root: [] },
};
async function detectEcosystems(repoPath) {
    const ids = [];
    const manifests = {};
    for (const id of ECOSYSTEM_IDS) {
        const { anyDepth, root } = MANIFESTS[id];
        const found = [
            ...(await findInRepo(repoPath, anyDepth.map((name) => `**/${name}`))),
            ...(root.length > 0 ? await findInRepo(repoPath, root) : []),
        ];
        if (found.length > 0) {
            ids.push(id);
            manifests[id] = [...new Set(found)].sort();
        }
    }
    return { ids, manifests };
}
/**
 * Glob within the manifest scan depth, skipping dependency, build, fixture,
 * and example directories. Returns repository-relative POSIX paths, sorted.
 */
async function findInRepo(repoPath, patterns) {
    const files = await findFiles(repoPath, patterns, {
        ignore: ECOSYSTEM_SCAN_IGNORE,
        deep: MANIFEST_SCAN_DEPTH,
    });
    return files.map((f) => external_node_path_default().relative(repoPath, f).split((external_node_path_default()).sep).join('/'));
}
/**
 * Display text for a result's `ecosystems` field: labels for known ids, raw
 * ids otherwise (results loaded from JSON can hold anything), or
 * `none detected`. Callers escape the text for their output format.
 */
function describeEcosystems(ids) {
    if (ids.length === 0)
        return 'none detected';
    return ids
        .map((id) => Object.hasOwn(ECOSYSTEM_LABELS, id)
        ? ECOSYSTEM_LABELS[id]
        : id)
        .join(', ');
}
/**
 * Score one ecosystem-specific signal worth `maxPoints`.
 *
 * - With detected ecosystems, each one is evaluated on its own files and the
 *   signal earns `floor(maxPoints * satisfied / detected)`. A polyglot
 *   repository is scored on every stack it contains.
 * - With no detected ecosystem, `fallback` looks for the evidence of any
 *   supported ecosystem and the signal earns full points only when that
 *   evidence exists. Nothing is awarded for a check that does not apply.
 */
async function scoreEcosystemSignal(detected, maxPoints, evaluate, fallback) {
    if (detected.ids.length === 0) {
        const evaluation = await fallback();
        return {
            points: evaluation.satisfied ? maxPoints : 0,
            satisfied: evaluation.satisfied ? 1 : 0,
            applicable: 1,
            results: [{ id: null, evaluation }],
        };
    }
    const results = [];
    for (const id of detected.ids) {
        results.push({ id, evaluation: await evaluate(id) });
    }
    const satisfied = results.filter((r) => r.evaluation.satisfied).length;
    return {
        points: proportionalPoints(maxPoints, satisfied, detected.ids.length),
        satisfied,
        applicable: detected.ids.length,
        results,
    };
}
/** `floor(maxPoints * satisfied / applicable)`, or 0 when nothing applies. */
function proportionalPoints(maxPoints, satisfied, applicable) {
    if (applicable <= 0)
        return 0;
    return Math.floor((maxPoints * satisfied) / applicable);
}

;// CONCATENATED MODULE: ./vendor/agent-readiness-kit/src/audit/projectFiles.ts






/**
 * Line-based readers for project files the audit inspects. They recognize
 * the common layouts of each format; they are not full parsers.
 */
/**
 * Map each TOML table header (`[a.b]` or `[[a.b]]`) to the keys set in it.
 * Keys before the first header belong to the table named `''`.
 */
function tomlTables(content) {
    const tables = new Map([['', []]]);
    let current = '';
    for (const raw of content.split(/\r?\n/)) {
        const line = raw.trim();
        if (line === '' || line.startsWith('#'))
            continue;
        const header = /^\[\[?([^\]]*)\]\]?$/.exec(line);
        if (header) {
            current = header[1]
                .trim()
                .replace(/["']/g, '')
                .split('.')
                .map((part) => part.trim())
                .join('.');
            if (!tables.has(current))
                tables.set(current, []);
            continue;
        }
        const key = /^("[^"]+"|'[^']+'|[A-Za-z0-9_.-]+)\s*=/.exec(line);
        if (key)
            tables.get(current)?.push(key[1].replace(/["']/g, ''));
    }
    return tables;
}
/** True when a table equal to `name`, or nested under it, exists. */
function hasTomlTable(tables, name) {
    for (const table of tables.keys()) {
        if (table === name || table.startsWith(`${name}.`))
            return true;
    }
    return false;
}
/** INI section names (`[name]`), as used by setup.cfg, tox.ini, and pytest.ini. */
function iniSections(content) {
    const sections = [];
    for (const raw of content.split(/\r?\n/)) {
        const match = /^\s*\[([^\]]+)\]\s*$/.exec(raw);
        if (match)
            sections.push(match[1].trim());
    }
    return sections;
}
/** Explicit target names in a Makefile. Pattern rules and special targets are skipped. */
function makefileTargets(content) {
    const targets = [];
    for (const line of content.split(/\r?\n/)) {
        if (line.startsWith('\t') || line.trimStart().startsWith('#'))
            continue;
        const match = /^([^\s:=#][^:=#]*)::?(?!=)/.exec(line);
        if (!match)
            continue;
        for (const name of match[1].trim().split(/[ \t]+/)) {
            if (/^[A-Za-z0-9][A-Za-z0-9_./-]*$/.test(name))
                targets.push(name);
        }
    }
    return unique(targets);
}
const JUST_KEYWORDS = new Set(['set', 'alias', 'export', 'import', 'mod']);
/** Recipe names in a justfile. */
function justfileRecipes(content) {
    const recipes = [];
    for (const line of content.split(/\r?\n/)) {
        const match = /^@?([A-Za-z_][A-Za-z0-9_-]*)(?:\s[^:]*)?:(?!=)/.exec(line);
        if (match && !JUST_KEYWORDS.has(match[1]))
            recipes.push(match[1]);
    }
    return unique(recipes);
}
/** Task names under the top-level `tasks:` key of a Taskfile. */
function taskfileTasks(content) {
    const tasks = [];
    let inTasks = false;
    let indent = null;
    for (const line of content.split(/\r?\n/)) {
        if (line.trim() === '' || line.trimStart().startsWith('#'))
            continue;
        if (/^tasks:\s*$/.test(line)) {
            inTasks = true;
            continue;
        }
        if (!inTasks)
            continue;
        const lead = line.length - line.trimStart().length;
        if (lead === 0)
            break;
        indent ??= lead;
        if (lead !== indent)
            continue;
        const match = /^\s+["']?([A-Za-z0-9_:.-]+)["']?:/.exec(line);
        if (match)
            tasks.push(match[1]);
    }
    return unique(tasks);
}
/** Task names from poe, pdm, hatch, and taskipy tables in pyproject.toml. */
function pyprojectTasks(tables) {
    const tasks = [];
    for (const [table, keys] of tables) {
        if (table === 'tool.poe.tasks' ||
            table === 'tool.pdm.scripts' ||
            table === 'tool.taskipy.tasks' ||
            /^tool\.hatch\.envs\.[^.]+\.scripts$/.test(table)) {
            tasks.push(...keys.map((k) => k.split('.')[0]));
        }
        const nested = /^tool\.(?:poe\.tasks|pdm\.scripts)\.([^.]+)$/.exec(table);
        if (nested)
            tasks.push(nested[1]);
    }
    return unique(tasks.filter((t) => t !== '_' && !t.startsWith('_')));
}
/** tox environments: the default `[testenv]` runs tests; `[testenv:x]` adds `x`. */
function toxEnvironments(content) {
    const envs = [];
    for (const section of iniSections(content)) {
        if (section === 'testenv')
            envs.push('test');
        const named = /^testenv:(.+)$/.exec(section);
        if (named)
            envs.push(named[1].trim());
    }
    return unique(envs);
}
/** Session names decorated with `@nox.session` in a noxfile. */
function noxSessions(content) {
    const sessions = [];
    let pending = false;
    for (const raw of content.split(/\r?\n/)) {
        const line = raw.trim();
        if (line.startsWith('@nox.session')) {
            pending = true;
        }
        else if (pending && line.startsWith('@')) {
            continue;
        }
        else if (pending) {
            const def = /^def[ \t]+(\w+)[ \t]*\(/.exec(line);
            if (def)
                sessions.push(def[1]);
            pending = false;
        }
    }
    return unique(sessions);
}
const TASK_NAME = /^[A-Za-z0-9][A-Za-z0-9_.:-]*$/;
/** Upper bound on nested package.json files read when there is no root one. */
const MAX_NESTED_PACKAGE_FILES = 20;
/** Bounds on the automation files read for tool invocations. */
const MAX_AUTOMATION_FILES = 100;
const MAX_AUTOMATION_BYTES = 4 * 1024 * 1024;
/** True for a package.json task source, at the root or nested. */
function isPackageJsonSource(source) {
    return source === 'package.json' || source.endsWith('/package.json');
}
/**
 * Commands defined at the repository root, per task runner. `package.json`
 * comes first so Node.js repositories report the same way as before.
 *
 * When there is no root `package.json`, the scripts of nested ones (such as
 * `frontend/package.json` beside a Python API) are read instead, listed under
 * their own path.
 */
async function readTaskSources(repoPath, nodeManifests = []) {
    const sources = [];
    const add = (source, names) => {
        // Names from file contents can reach report messages; keep plain ones.
        const safe = isPackageJsonSource(source)
            ? names
            : names.filter((n) => TASK_NAME.test(n));
        if (safe.length > 0)
            sources.push({ source, names: safe });
    };
    const rootPkg = await readRoot(repoPath, 'package.json');
    const packageFiles = rootPkg !== null
        ? ['package.json']
        : nodeManifests
            .filter((m) => m.endsWith('/package.json'))
            .slice(0, MAX_NESTED_PACKAGE_FILES);
    for (const rel of packageFiles) {
        const pkg = rel === 'package.json'
            ? parseJson(rootPkg)
            : await readJsonFile(external_node_path_default().join(repoPath, rel));
        const scripts = pkg?.scripts;
        if (scripts && typeof scripts === 'object' && !Array.isArray(scripts)) {
            add(rel, Object.keys(scripts).filter((k) => Boolean(scripts[k])));
        }
    }
    for (const name of ['Makefile', 'makefile', 'GNUmakefile']) {
        const content = await readRoot(repoPath, name);
        if (content !== null) {
            add(name, makefileTargets(content));
            break;
        }
    }
    for (const name of ['justfile', 'Justfile', '.justfile']) {
        const content = await readRoot(repoPath, name);
        if (content !== null) {
            add(name, justfileRecipes(content));
            break;
        }
    }
    for (const name of [
        'Taskfile.yml',
        'Taskfile.yaml',
        'taskfile.yml',
        'taskfile.yaml',
    ]) {
        const content = await readRoot(repoPath, name);
        if (content !== null) {
            add(name, taskfileTasks(content));
            break;
        }
    }
    const pyproject = await readRoot(repoPath, 'pyproject.toml');
    if (pyproject !== null) {
        add('pyproject.toml', pyprojectTasks(tomlTables(pyproject)));
    }
    const tox = await readRoot(repoPath, 'tox.ini');
    if (tox !== null)
        add('tox.ini', toxEnvironments(tox));
    const nox = await readRoot(repoPath, 'noxfile.py');
    if (nox !== null)
        add('noxfile.py', noxSessions(nox));
    return sources;
}
/**
 * Concatenated text of files that run tools: task runners, pre-commit, CI
 * workflows, and tox/nox. Used to find tool invocations such as `gofmt` or
 * `cargo clippy` that need no config file of their own.
 */
async function readAutomationText(repoPath) {
    const files = await findInRepo(repoPath, [
        'Makefile',
        'makefile',
        'GNUmakefile',
        'justfile',
        'Justfile',
        '.justfile',
        'Taskfile.{yml,yaml}',
        'taskfile.{yml,yaml}',
        '.pre-commit-config.{yml,yaml}',
        'lefthook.{yml,yaml}',
        '.github/workflows/*.{yml,yaml}',
        '.gitlab-ci.yml',
        'tox.ini',
        'noxfile.py',
        'pyproject.toml',
    ]);
    const parts = [];
    let bytes = 0;
    for (const rel of files.slice(0, MAX_AUTOMATION_FILES)) {
        const content = await readTextFile_readTextFile(external_node_path_default().join(repoPath, rel));
        if (content === null)
            continue;
        bytes += content.length;
        if (bytes > MAX_AUTOMATION_BYTES)
            break;
        parts.push(content);
    }
    return parts.join('\n');
}
/**
 * Read a file at the repository root. Goes through `findFiles`, so a symlink
 * is read only when it points at a regular file inside the repository.
 */
async function readRoot(repoPath, rel) {
    const [file] = await findFiles(repoPath, escapePath(rel));
    return file ? readTextFile_readTextFile(file) : null;
}
/** Parse a JSON file at the repository root, read through `readRoot`. */
async function readRootJson(repoPath, rel) {
    return parseJson(await readRoot(repoPath, rel));
}
function parseJson(raw) {
    if (raw === null)
        return null;
    try {
        return JSON.parse(raw);
    }
    catch {
        return null;
    }
}
/**
 * True when `rel` is a regular file inside the repository. Unlike
 * `fileExists`, a symlink to a file outside the repository does not count.
 */
async function repoFileExists(repoPath, rel) {
    return (await findFiles(repoPath, escapePath(rel))).length > 0;
}
function unique(values) {
    return [...new Set(values)];
}

;// CONCATENATED MODULE: ./vendor/agent-readiness-kit/src/audit/checks/agentInstructions.ts






const MAX_SCORE = 20;
// Standing instruction files for other agent tools. Each one counts as
// tool-specific instructions alongside AGENTS.md.
const OTHER_TOOL_FILES = [
    { label: 'Gemini', patterns: ['GEMINI.md', '.gemini/styleguide.md'] },
    { label: 'Amp', patterns: ['AGENT.md'] },
    {
        label: 'Windsurf',
        patterns: ['.windsurfrules', '.windsurf/rules/**/*.md'],
    },
    { label: 'Cline', patterns: ['.clinerules', '.clinerules/**/*.md'] },
    { label: 'Roo Code', patterns: ['.roorules', '.roo/rules*/**/*.md'] },
    { label: 'Kiro', patterns: ['.kiro/steering/**/*.md'] },
    { label: 'Junie', patterns: ['.junie/guidelines.md'] },
    {
        label: 'Augment',
        patterns: ['.augment-guidelines', '.augment/rules/**/*.md'],
    },
    { label: 'Continue', patterns: ['.continue/rules/**/*.md'] },
    { label: 'Goose', patterns: ['.goosehints'] },
    {
        label: 'Copilot path-specific',
        patterns: ['.github/instructions/**/*.instructions.md'],
    },
];
// Read a directory's entry names, preserving exact case so we can tell
// `CLAUDE.md` from `claude.md` even on case-insensitive filesystems (macOS,
// Windows), where `fileExists` cannot distinguish the two. Returns [] when the
// directory is missing.
async function listEntryNames(dir) {
    try {
        return await (0,promises_namespaceObject.readdir)(dir);
    }
    catch {
        return [];
    }
}
async function checkAgentInstructions(repoPath) {
    const findings = [];
    const detected = [];
    const agentsMd = external_node_path_default().join(repoPath, 'AGENTS.md');
    const cursorRules = external_node_path_default().join(repoPath, '.cursorrules');
    const copilot = external_node_path_default().join(repoPath, '.github', 'copilot-instructions.md');
    if (await fileExists(agentsMd)) {
        detected.push('AGENTS.md');
        findings.push({
            status: 'pass',
            message: 'AGENTS.md found',
            files: ['AGENTS.md'],
        });
        if (containsPlaceholderContent((await readRoot(repoPath, 'AGENTS.md')) ?? '')) {
            findings.push({
                status: 'warn',
                message: `${PLACEHOLDER_WARNING} (AGENTS.md)`,
                files: ['AGENTS.md'],
            });
        }
    }
    else {
        findings.push({ status: 'fail', message: 'AGENTS.md not found' });
    }
    if (await fileExists(cursorRules)) {
        detected.push('.cursorrules');
        findings.push({
            status: 'pass',
            message: '.cursorrules found',
            files: ['.cursorrules'],
        });
    }
    const cursorMdc = await findFiles(repoPath, '.cursor/rules/**/*.mdc');
    if (cursorMdc.length > 0) {
        detected.push(...cursorMdc.map((f) => external_node_path_default().relative(repoPath, f)));
        findings.push({
            status: 'pass',
            message: 'Cursor rules (.mdc) found',
            files: cursorMdc.map((f) => external_node_path_default().relative(repoPath, f)),
        });
    }
    // Claude Code files. CLAUDE.md at the repo root is canonical; lowercase and
    // nested `.claude/` variants are recognized because real repos use them.
    const rootEntries = await listEntryNames(repoPath);
    const hasRootClaude = rootEntries.includes('CLAUDE.md');
    const hasLowercaseClaude = rootEntries.includes('claude.md');
    if (hasRootClaude) {
        detected.push('CLAUDE.md');
        findings.push({
            status: 'pass',
            message: 'CLAUDE.md found',
            files: ['CLAUDE.md'],
        });
    }
    else if (hasLowercaseClaude) {
        detected.push('claude.md');
        findings.push({
            status: 'pass',
            message: 'claude.md found',
            files: ['claude.md'],
        });
        findings.push({
            status: 'warn',
            message: 'Found lowercase claude.md — rename it to the canonical CLAUDE.md (or run `ark generate claude`)',
            files: ['claude.md'],
        });
    }
    const dotClaudeEntries = await listEntryNames(external_node_path_default().join(repoPath, '.claude'));
    const dotClaudeFiles = [];
    if (dotClaudeEntries.includes('CLAUDE.md'))
        dotClaudeFiles.push('.claude/CLAUDE.md');
    if (dotClaudeEntries.includes('claude.md'))
        dotClaudeFiles.push('.claude/claude.md');
    if (dotClaudeFiles.length > 0) {
        detected.push(...dotClaudeFiles);
        findings.push({
            status: 'pass',
            message: 'Claude-specific instructions found (.claude/)',
            files: dotClaudeFiles,
        });
    }
    const claudeCommands = await findFiles(repoPath, '.claude/commands/**/*.md');
    if (claudeCommands.length > 0) {
        const relCommands = claudeCommands.map((f) => external_node_path_default().relative(repoPath, f));
        detected.push(...relCommands);
        findings.push({
            status: 'pass',
            message: 'Claude command files found (.claude/commands/) — useful agent context, not a replacement for a root CLAUDE.md',
            files: relCommands,
        });
    }
    const claudeExtras = (await findFiles(repoPath, [
        '.claude/agents/**/*.md',
        '.claude/skills/**/SKILL.md',
        '.claude/rules/**/*.md',
    ])).map((f) => external_node_path_default().relative(repoPath, f));
    if (claudeExtras.length > 0) {
        detected.push(...claudeExtras);
        findings.push({
            status: 'pass',
            message: 'Claude subagents, skills, or rules found (.claude/)',
            files: claudeExtras,
        });
    }
    if (await fileExists(copilot)) {
        detected.push('.github/copilot-instructions.md');
        findings.push({
            status: 'pass',
            message: 'GitHub Copilot instructions found',
            files: ['.github/copilot-instructions.md'],
        });
    }
    for (const { label, patterns } of OTHER_TOOL_FILES) {
        const found = (await findFiles(repoPath, patterns)).map((f) => external_node_path_default().relative(repoPath, f));
        if (found.length === 0)
            continue;
        detected.push(...found);
        findings.push({
            status: 'pass',
            message: `${label} instructions found`,
            files: found,
        });
    }
    const hasAgents = detected.includes('AGENTS.md');
    const toolSpecific = detected.filter((f) => f !== 'AGENTS.md');
    let score = 0;
    if (hasAgents && toolSpecific.length > 0) {
        score = 20;
        findings.push({
            status: 'pass',
            message: 'AGENTS.md plus tool-specific instructions (full score)',
        });
    }
    else if (hasAgents) {
        score = 15;
        findings.push({
            status: 'warn',
            message: 'AGENTS.md only — add tool-specific instructions for full score',
        });
    }
    else if (toolSpecific.length > 0) {
        score = 10;
        findings.push({
            status: 'warn',
            message: 'Tool-specific instructions only — add AGENTS.md for higher score',
        });
    }
    else {
        findings.push({
            status: 'fail',
            message: 'No agent instruction files detected',
        });
    }
    return {
        id: 'agent-instructions',
        label: 'Agent instructions',
        score,
        maxScore: MAX_SCORE,
        findings,
    };
}

;// CONCATENATED MODULE: ./vendor/agent-readiness-kit/src/audit/checks/dependencies.ts






const dependencies_MAX_SCORE = 10;
const LOCKFILE_POINTS = 3;
const VERSION_PIN_POINTS = 2;
const NODE_LOCKFILES = [
    'pnpm-lock.yaml',
    'package-lock.json',
    'yarn.lock',
    'bun.lock',
    'bun.lockb',
    'npm-shrinkwrap.json',
];
const PYTHON_LOCKFILES = [
    'uv.lock',
    'poetry.lock',
    'Pipfile.lock',
    'pdm.lock',
    'pylock.toml',
    'pylock.*.toml',
];
const LOCKFILE_MISSING = {
    node: 'No lockfile found (pnpm-lock.yaml / package-lock.json / yarn.lock)',
    python: 'No Python lockfile found (uv.lock / poetry.lock / Pipfile.lock / pdm.lock, or fully pinned requirements.txt)',
    go: 'No go.sum found for a go.mod that declares dependencies',
    rust: 'No Cargo.lock found',
};
const VERSION_PIN_MISSING = {
    node: 'No Node.js version pin (.nvmrc, .node-version, or engines in package.json)',
    python: 'No Python version pin (.python-version or requires-python in pyproject.toml)',
    go: 'No Go version declared (go directive in go.mod or .go-version)',
    rust: 'No Rust toolchain pin (rust-toolchain.toml or rust-version in Cargo.toml)',
};
async function checkDependencies(repoPath, detected) {
    const ecosystems = detected ?? (await detectEcosystems(repoPath));
    const findings = [];
    let score = 0;
    // Lockfile per ecosystem
    const lockfiles = await scoreEcosystemSignal(ecosystems, LOCKFILE_POINTS, (id) => evaluateLockfile(repoPath, ecosystems, id), () => anyEcosystem((id) => evaluateLockfile(repoPath, ecosystems, id), 'No dependency manifest or lockfile found'));
    score += lockfiles.points;
    pushOutcome(findings, lockfiles, 'fail');
    // Runtime / toolchain version pin per ecosystem
    const pins = await scoreEcosystemSignal(ecosystems, VERSION_PIN_POINTS, (id) => evaluateVersionPin(repoPath, ecosystems, id), () => anyEcosystem((id) => evaluateVersionPin(repoPath, ecosystems, id), 'No runtime or toolchain version pin found'));
    score += pins.points;
    pushOutcome(findings, pins, 'warn');
    // Dependabot or Renovate
    const depbotPaths = ['.github/dependabot.yml', '.github/dependabot.yaml'];
    let foundDepbot = null;
    for (const rel of depbotPaths) {
        if (await fileExists(external_node_path_default().join(repoPath, rel))) {
            foundDepbot = rel;
            break;
        }
    }
    const renovateFiles = await findFiles(repoPath, [
        'renovate.json',
        'renovate.json5',
        '.renovaterc',
        '.renovaterc.json',
    ]);
    if (foundDepbot) {
        score += 3;
        findings.push({
            status: 'pass',
            message: `Dependabot config found: ${foundDepbot}`,
            files: [foundDepbot],
        });
    }
    else if (renovateFiles.length > 0) {
        score += 3;
        findings.push({
            status: 'pass',
            message: 'Renovate config found',
            files: renovateFiles.map((f) => external_node_path_default().relative(repoPath, f)).slice(0, 3),
        });
    }
    else {
        findings.push({
            status: 'warn',
            message: 'No automated dependency update config (dependabot.yml or renovate.json)',
        });
    }
    // Package manager / registry config
    const pyproject = await readRoot(repoPath, 'pyproject.toml');
    const pyTables = pyproject ? tomlTables(pyproject) : null;
    const registryFiles = [
        '.npmrc',
        '.pnpmfile.cjs',
        'uv.toml',
        'pip.conf',
        '.cargo/config.toml',
        '.cargo/config',
    ];
    let registry = null;
    for (const rel of registryFiles) {
        if (await repoFileExists(repoPath, rel)) {
            registry = rel;
            break;
        }
    }
    if (!registry && pyTables && hasTomlTable(pyTables, 'tool.uv')) {
        registry = 'pyproject.toml [tool.uv]';
    }
    if (registry) {
        score += 1;
        findings.push({
            status: 'pass',
            message: `Package manager config: ${registry}`,
            files: [registry.split(' ')[0]],
        });
    }
    // Workspace config
    const hasWorkspaceRoot = (await dirExists(external_node_path_default().join(repoPath, 'packages'))) ||
        (await dirExists(external_node_path_default().join(repoPath, 'apps')));
    const hasPnpmWorkspace = await fileExists(external_node_path_default().join(repoPath, 'pnpm-workspace.yaml'));
    if (hasWorkspaceRoot && hasPnpmWorkspace) {
        score += 1;
        findings.push({
            status: 'pass',
            message: 'pnpm-workspace.yaml present in monorepo',
            files: ['pnpm-workspace.yaml'],
        });
    }
    else {
        const other = await findWorkspaceConfig(repoPath);
        if (other) {
            score += 1;
            findings.push({
                status: 'pass',
                message: `Workspace config: ${other}`,
                files: [other.split(' ')[0]],
            });
        }
    }
    score = Math.min(dependencies_MAX_SCORE, score);
    if (score === 0) {
        findings.push({
            status: 'fail',
            message: 'No dependency hygiene signals detected',
        });
    }
    else if (score < 5) {
        findings.push({
            status: 'warn',
            message: 'Limited dependency hygiene configuration',
        });
    }
    return {
        id: 'dependencies',
        label: 'Dependency hygiene',
        score,
        maxScore: dependencies_MAX_SCORE,
        findings,
    };
}
/** go.work, a Cargo `[workspace]`, or a uv workspace. */
async function findWorkspaceConfig(repoPath) {
    if (await repoFileExists(repoPath, 'go.work'))
        return 'go.work';
    const cargo = await readRoot(repoPath, 'Cargo.toml');
    if (cargo && hasTomlTable(tomlTables(cargo), 'workspace')) {
        return 'Cargo.toml [workspace]';
    }
    const pyproject = await readRoot(repoPath, 'pyproject.toml');
    if (pyproject && hasTomlTable(tomlTables(pyproject), 'tool.uv.workspace')) {
        return 'pyproject.toml [tool.uv.workspace]';
    }
    return null;
}
function pushOutcome(findings, outcome, missingStatus) {
    for (const { evaluation } of outcome.results) {
        if (evaluation.satisfied) {
            findings.push({
                status: 'pass',
                message: evaluation.passMessage ?? 'Present',
                ...(evaluation.files ? { files: evaluation.files } : {}),
            });
        }
        else {
            findings.push({
                status: missingStatus,
                message: evaluation.missingMessage ?? 'Missing',
            });
        }
    }
}
/** Fallback when no ecosystem is detected: any supported ecosystem's evidence. */
async function anyEcosystem(evaluate, missingMessage) {
    for (const id of ECOSYSTEM_IDS) {
        const evaluation = await evaluate(id);
        if (evaluation.satisfied)
            return evaluation;
    }
    return { satisfied: false, missingMessage };
}
async function evaluateLockfile(repoPath, ecosystems, id) {
    const found = (files, label = files[0]) => ({
        satisfied: true,
        passMessage: `Lockfile present: ${label}`,
        files: files.slice(0, 5),
    });
    const missing = { satisfied: false, missingMessage: LOCKFILE_MISSING[id] };
    if (id === 'node') {
        // Root lockfiles first, in the original order, then nested ones.
        for (const rel of NODE_LOCKFILES) {
            if (await repoFileExists(repoPath, rel))
                return found([rel]);
        }
        const nested = await findInRepo(repoPath, NODE_LOCKFILES.map((f) => `**/${f}`));
        return nested.length > 0 ? found(nested) : missing;
    }
    if (id === 'python') {
        const locks = await findInRepo(repoPath, PYTHON_LOCKFILES.map((f) => `**/${f}`));
        if (locks.length > 0)
            return found(locks);
        const requirements = await findInRepo(repoPath, [
            'requirements*.txt',
            'requirements/*.txt',
        ]);
        const pinned = [];
        for (const rel of requirements) {
            const content = await readTextFile_readTextFile(external_node_path_default().join(repoPath, rel));
            if (content !== null && requirementsArePinned(content))
                pinned.push(rel);
        }
        return pinned.length > 0
            ? found(pinned, `${pinned[0]} (all requirements pinned)`)
            : missing;
    }
    if (id === 'go') {
        const sums = await findInRepo(repoPath, '**/go.sum');
        if (sums.length > 0)
            return found(sums);
        const mods = ecosystems.manifests.go ?? [];
        for (const rel of mods) {
            const content = await readTextFile_readTextFile(external_node_path_default().join(repoPath, rel));
            if (content === null || goModRequires(content))
                return missing;
        }
        // A module with no requirements has nothing to lock; go.sum is not created.
        return mods.length > 0
            ? {
                satisfied: true,
                passMessage: 'go.mod declares no dependencies (nothing to lock)',
                files: mods.slice(0, 5),
            }
            : missing;
    }
    const cargoLocks = await findInRepo(repoPath, '**/Cargo.lock');
    return cargoLocks.length > 0 ? found(cargoLocks) : missing;
}
/** True when every requirement line pins an exact version (`==` or `===`). */
function requirementsArePinned(content) {
    let requirements = 0;
    for (const raw of content.split(/\r?\n/)) {
        const line = raw.replace(/\s#[\s\S]*/, '').trim();
        if (line === '' || line.startsWith('#') || line.startsWith('-'))
            continue;
        requirements += 1;
        if (!/[^=!<>~]==={0,1}[^=]/.test(line))
            return false;
    }
    return requirements > 0;
}
/** True when go.mod has a `require` directive. */
function goModRequires(content) {
    return /^[ \t]*require\b/m.test(content);
}
async function evaluateVersionPin(repoPath, ecosystems, id) {
    const pass = (message, file) => ({
        satisfied: true,
        passMessage: message,
        files: [file],
    });
    const missing = { satisfied: false, missingMessage: VERSION_PIN_MISSING[id] };
    const toolVersions = await readRoot(repoPath, '.tool-versions');
    const toolPinned = (names) => toolVersions !== null &&
        toolVersions
            .split(/\r?\n/)
            .some((l) => names.includes(l.trim().split(/\s+/)[0] ?? ''));
    if (id === 'node') {
        for (const rel of ['.nvmrc', '.node-version']) {
            if (await repoFileExists(repoPath, rel)) {
                return pass(`Node version pinned: ${rel}`, rel);
            }
        }
        if (toolPinned(['nodejs', 'node'])) {
            return pass('Node version pinned: .tool-versions', '.tool-versions');
        }
        const pkg = await readRootJson(repoPath, 'package.json');
        if (pkg?.engines && Object.keys(pkg.engines).length > 0) {
            return pass('Node version constrained via package.json engines field', 'package.json');
        }
        const nested = await findInRepo(repoPath, [
            '**/.nvmrc',
            '**/.node-version',
        ]);
        if (nested.length > 0) {
            return pass(`Node version pinned: ${nested[0]}`, nested[0]);
        }
        return missing;
    }
    if (id === 'python') {
        const files = await findInRepo(repoPath, '**/.python-version');
        if (files.length > 0) {
            return pass(`Python version pinned: ${files[0]}`, files[0]);
        }
        if (toolPinned(['python'])) {
            return pass('Python version pinned: .tool-versions', '.tool-versions');
        }
        for (const rel of ecosystems.manifests.python ?? []) {
            if (!rel.endsWith('pyproject.toml') && !rel.endsWith('Pipfile'))
                continue;
            const content = await readTextFile_readTextFile(external_node_path_default().join(repoPath, rel));
            if (content &&
                /^[ \t]*(requires-python|python_version)[ \t]*=/m.test(content)) {
                return pass(`Python version constrained via ${rel}`, rel);
            }
        }
        return missing;
    }
    if (id === 'go') {
        for (const rel of ecosystems.manifests.go ?? []) {
            const content = await readTextFile_readTextFile(external_node_path_default().join(repoPath, rel));
            if (content && /^[ \t]*(go|toolchain)[ \t]+\S/m.test(content)) {
                return pass(`Go version declared in ${rel}`, rel);
            }
        }
        if (await repoFileExists(repoPath, '.go-version')) {
            return pass('Go version pinned: .go-version', '.go-version');
        }
        if (toolPinned(['golang', 'go'])) {
            return pass('Go version pinned: .tool-versions', '.tool-versions');
        }
        return missing;
    }
    const toolchain = await findInRepo(repoPath, [
        'rust-toolchain.toml',
        'rust-toolchain',
    ]);
    if (toolchain.length > 0) {
        return pass(`Rust toolchain pinned: ${toolchain[0]}`, toolchain[0]);
    }
    for (const rel of ecosystems.manifests.rust ?? []) {
        const content = await readTextFile_readTextFile(external_node_path_default().join(repoPath, rel));
        if (content && /^[ \t]*rust-version[ \t]*=/m.test(content)) {
            return pass(`Rust version constrained via ${rel}`, rel);
        }
    }
    if (toolPinned(['rust'])) {
        return pass('Rust version pinned: .tool-versions', '.tool-versions');
    }
    return missing;
}

;// CONCATENATED MODULE: ./vendor/agent-readiness-kit/src/audit/checks/architecture.ts





const architecture_MAX_SCORE = 15;
async function checkArchitecture(repoPath) {
    const findings = [];
    let score = 0;
    const readme = external_node_path_default().join(repoPath, 'README.md');
    const hasReadme = await fileExists(readme);
    if (hasReadme) {
        score += 5;
        findings.push({
            status: 'pass',
            message: 'README.md found',
            files: ['README.md'],
        });
    }
    else {
        findings.push({
            status: 'fail',
            message: 'README.md not found (required for >5 points)',
        });
    }
    const archPaths = ['docs/ARCHITECTURE.md', 'docs/architecture.md'];
    let hasArchDoc = false;
    let archDocRel = null;
    for (const rel of archPaths) {
        if (await fileExists(external_node_path_default().join(repoPath, rel))) {
            hasArchDoc = true;
            archDocRel = rel;
            findings.push({
                status: 'pass',
                message: `Architecture doc: ${rel}`,
                files: [rel],
            });
            break;
        }
    }
    if (archDocRel &&
        containsPlaceholderContent((await readRoot(repoPath, archDocRel)) ?? '')) {
        findings.push({
            status: 'warn',
            message: `${PLACEHOLDER_WARNING} (${archDocRel})`,
            files: [archDocRel],
        });
    }
    const adrDirs = ['docs/adr', 'docs/decisions'];
    for (const rel of adrDirs) {
        if (await dirExists(external_node_path_default().join(repoPath, rel))) {
            hasArchDoc = true;
            findings.push({
                status: 'pass',
                message: `ADR/decisions directory: ${rel}`,
                files: [rel],
            });
            break;
        }
    }
    if (hasArchDoc) {
        score += 7;
    }
    else {
        findings.push({
            status: 'fail',
            message: 'No architecture doc or ADR directory (required for >10 points)',
        });
    }
    const appsDir = external_node_path_default().join(repoPath, 'apps');
    const packagesDir = external_node_path_default().join(repoPath, 'packages');
    const hasApps = await dirExists(appsDir);
    const hasPackages = await dirExists(packagesDir);
    const pkg = await readRootJson(repoPath, 'package.json');
    const hasWorkspaces = pkg?.workspaces !== undefined &&
        (Array.isArray(pkg.workspaces) ? pkg.workspaces.length > 0 : true);
    if (hasApps && hasPackages) {
        score = Math.min(architecture_MAX_SCORE, score + 3);
        findings.push({
            status: 'pass',
            message: 'Monorepo layout: apps/ and packages/ directories',
            files: ['apps/', 'packages/'],
        });
    }
    else if (hasWorkspaces) {
        score = Math.min(architecture_MAX_SCORE, score + 2);
        findings.push({
            status: 'pass',
            message: 'pnpm/npm workspace configured in package.json',
        });
    }
    else {
        const workspace = await findWorkspaceConfig(repoPath);
        if (workspace) {
            score = Math.min(architecture_MAX_SCORE, score + 2);
            findings.push({
                status: 'pass',
                message: `Workspace configured: ${workspace}`,
                files: [workspace.split(' ')[0]],
            });
        }
    }
    score = Math.min(architecture_MAX_SCORE, score);
    if (score >= 12) {
        findings.push({
            status: 'pass',
            message: `Architecture clarity score: ${score}/${architecture_MAX_SCORE}`,
        });
    }
    else if (score > 0) {
        findings.push({
            status: 'warn',
            message: `Partial architecture clarity: ${score}/${architecture_MAX_SCORE}`,
        });
    }
    return {
        id: 'architecture',
        label: 'Project architecture clarity',
        score,
        maxScore: architecture_MAX_SCORE,
        findings,
    };
}

;// CONCATENATED MODULE: ./vendor/agent-readiness-kit/src/audit/checks/workflow.ts


const workflow_MAX_SCORE = 15;
const ALL_SCRIPTS = [
    'dev',
    'build',
    'lint',
    'test',
    'typecheck',
    'format',
    'clean',
];
const SCRIPT_POINTS = {
    dev: 2,
    build: 3,
    lint: 2,
    test: 3,
    typecheck: 3,
    format: 1,
    clean: 1,
};
/**
 * Names that fill each role in task runners other than package.json. npm
 * scripts keep their exact names, as before. `test`, `lint`, `typecheck`,
 * `build`, and `format` also match prefixed names such as `test-unit`.
 */
const ROLE_ALIASES = {
    dev: ['dev', 'run', 'serve', 'start', 'watch'],
    build: ['build', 'compile'],
    lint: ['lint', 'vet', 'clippy'],
    test: ['test', 'tests'],
    typecheck: ['typecheck', 'type-check', 'types', 'mypy', 'pyright'],
    format: ['format', 'fmt'],
    clean: ['clean'],
};
const PREFIX_ROLES = new Set([
    'build',
    'lint',
    'test',
    'typecheck',
    'format',
]);
/** Ecosystems whose compiler type-checks during a build. */
const COMPILED = new Set(['go', 'rust']);
const TASK_RUNNER_LIST = 'package.json scripts, Makefile, justfile, Taskfile, pyproject.toml tasks, tox.ini, or noxfile.py';
function commandFillsRole(source, name, role) {
    if (isPackageJsonSource(source))
        return name === role;
    const lower = name.toLowerCase();
    return ROLE_ALIASES[role].some((alias) => lower === alias ||
        (PREFIX_ROLES.has(role) &&
            (lower.startsWith(`${alias}-`) ||
                lower.startsWith(`${alias}_`) ||
                lower.startsWith(`${alias}:`))));
}
/** First source and command name that fills `role`, if any. */
function findRoleCommand(sources, role) {
    for (const { source, names } of sources) {
        const name = names.find((n) => commandFillsRole(source, n, role));
        if (name !== undefined)
            return { source, name };
    }
    return null;
}
async function checkWorkflow(repoPath, detected) {
    const ecosystems = detected ?? (await detectEcosystems(repoPath));
    const sources = await readTaskSources(repoPath, ecosystems.manifests.node ?? []);
    const npmOnly = sources.every((s) => s.source === 'package.json');
    if (sources.length === 0) {
        const message = ecosystems.ids.length === 1 && ecosystems.ids[0] === 'node'
            ? 'No package.json scripts found'
            : `No task runner commands found (${TASK_RUNNER_LIST})`;
        return result(0, [{ status: 'fail', message }]);
    }
    const found = new Map();
    for (const role of ALL_SCRIPTS) {
        const hit = findRoleCommand(sources, role);
        if (hit)
            found.set(role, hit);
    }
    const findings = [];
    const present = ALL_SCRIPTS.filter((r) => found.has(r));
    if (npmOnly) {
        findings.push({
            status: 'pass',
            message: `Scripts present: ${present.join(', ') || 'none'}`,
            files: present.map((s) => `package.json#scripts.${s}`),
        });
    }
    else {
        findings.push({
            status: 'pass',
            message: `Commands present: ${present.map((r) => `${r} (${found.get(r)?.source})`).join(', ') ||
                'none'}`,
            files: present.map((r) => {
                const hit = found.get(r);
                return hit && isPackageJsonSource(hit.source)
                    ? `${hit.source}#scripts.${hit.name}`
                    : `${hit?.source}#${hit?.name}`;
            }),
        });
    }
    // Go and Rust compile with type checking, so a build command covers it.
    const compiledOnly = ecosystems.ids.length > 0 && ecosystems.ids.every((id) => COMPILED.has(id));
    let typecheckViaBuild = false;
    if (!found.has('typecheck') && found.has('build') && compiledOnly) {
        typecheckViaBuild = true;
        findings.push({
            status: 'pass',
            message: `Type checking runs in the build command (${found.get('build')?.source})`,
        });
    }
    let score = 0;
    for (const role of ALL_SCRIPTS) {
        if (found.has(role) || (role === 'typecheck' && typecheckViaBuild)) {
            score += SCRIPT_POINTS[role];
        }
    }
    score = Math.min(workflow_MAX_SCORE, score);
    const noun = npmOnly ? 'script' : 'command';
    if (!found.has('test')) {
        findings.push({
            status: 'fail',
            message: `Missing test ${noun} — agents need a clear test command`,
        });
    }
    if (!found.has('typecheck') && !typecheckViaBuild) {
        findings.push({
            status: 'warn',
            message: `Missing typecheck ${noun} — recommend adding explicit typecheck`,
        });
    }
    for (const name of ['dev', 'build', 'lint']) {
        if (!found.has(name)) {
            findings.push({ status: 'warn', message: `Missing ${noun}: ${name}` });
        }
    }
    return result(score, findings);
}
function result(score, findings) {
    return {
        id: 'workflow',
        label: 'Developer workflow clarity',
        score,
        maxScore: workflow_MAX_SCORE,
        findings,
    };
}

;// CONCATENATED MODULE: ./vendor/agent-readiness-kit/src/audit/checks/testing.ts







const testing_MAX_SCORE = 15;
const RUNNER_POINTS = 4;
const TEST_CONFIG_PATTERNS = [
    'vitest.config.*',
    '**/vitest.config.*',
    'jest.config.*',
    '**/jest.config.*',
    'playwright.config.*',
    '**/playwright.config.*',
    'cypress.config.*',
    '**/cypress.config.*',
];
const NODE_RUNNER_MISSING = 'No vitest/jest/playwright/cypress config found';
const PYTHON_RUNNER_MISSING = 'No pytest configuration found (pytest.ini, conftest.py, [tool.pytest.ini_options], tox.ini, or noxfile.py)';
async function checkTesting(repoPath, detected) {
    const ecosystems = detected ?? (await detectEcosystems(repoPath));
    const findings = [];
    let score = 0;
    // 1. Tests exist.
    const { files: testFiles, languages } = await findTestFiles(repoPath);
    if (testFiles.length > 0) {
        score += 5;
        findings.push({
            status: 'pass',
            message: `Test files found (${testFiles.length}): ${languages.join(', ')}`,
            files: testFiles.slice(0, 10).map((f) => external_node_path_default().relative(repoPath, f)),
        });
    }
    else {
        findings.push({ status: 'fail', message: 'No test files detected' });
    }
    // 2. A test runner is configured for each detected ecosystem.
    const nodeConfigs = async () => {
        const configs = await findFiles(repoPath, TEST_CONFIG_PATTERNS);
        return configs.length > 0
            ? {
                satisfied: true,
                passMessage: 'Test runner config found',
                files: configs.map((f) => external_node_path_default().relative(repoPath, f)),
            }
            : { satisfied: false, missingMessage: NODE_RUNNER_MISSING };
    };
    const pythonConfigs = async () => {
        const files = await findPytestConfig(repoPath);
        return files.length > 0
            ? {
                satisfied: true,
                passMessage: 'Python test runner config found (pytest/tox/nox)',
                files,
            }
            : { satisfied: false, missingMessage: PYTHON_RUNNER_MISSING };
    };
    const builtIn = (id) => {
        const runner = id === 'go' ? 'go test' : 'cargo test';
        const hasTests = languages.includes(ECOSYSTEM_LABELS[id]);
        return hasTests
            ? {
                satisfied: true,
                passMessage: `${ECOSYSTEM_LABELS[id]} tests run with the built-in runner (${runner})`,
            }
            : {
                satisfied: false,
                missingMessage: `No ${ECOSYSTEM_LABELS[id]} tests for ${runner} to run`,
            };
    };
    const evaluateRunner = async (id) => {
        if (id === 'node')
            return nodeConfigs();
        if (id === 'python')
            return pythonConfigs();
        return builtIn(id);
    };
    const runner = await scoreEcosystemSignal(ecosystems, RUNNER_POINTS, evaluateRunner, async () => {
        const node = await nodeConfigs();
        if (node.satisfied)
            return node;
        const python = await pythonConfigs();
        if (python.satisfied)
            return python;
        return {
            satisfied: false,
            missingMessage: 'No test runner config found (vitest, jest, playwright, cypress, or pytest)',
        };
    });
    score += runner.points;
    for (const { evaluation } of runner.results) {
        findings.push(evaluation.satisfied
            ? {
                status: 'pass',
                message: evaluation.passMessage ?? 'Test runner configured',
                ...(evaluation.files ? { files: evaluation.files } : {}),
            }
            : {
                status: 'warn',
                message: evaluation.missingMessage ?? 'No test runner config',
            });
    }
    // 3. Tests are verified in CI.
    const ciWorkflows = await findFiles(repoPath, '.github/workflows/*.{yml,yaml}');
    if (ciWorkflows.length > 0) {
        score += 3;
        findings.push({
            status: 'pass',
            message: 'CI workflow present',
            files: ciWorkflows.map((f) => external_node_path_default().relative(repoPath, f)).slice(0, 5),
        });
    }
    else {
        findings.push({
            status: 'warn',
            message: 'No CI workflow in .github/workflows',
        });
    }
    // 4. A test command is defined (package.json script or task runner target).
    const pkg = await readRootJson(repoPath, 'package.json');
    const scripts = pkg?.scripts ?? {};
    const hasTestScript = Boolean(scripts.test) ||
        Boolean(scripts['test:unit']) ||
        Boolean(scripts['test:e2e']);
    const sources = await readTaskSources(repoPath, ecosystems.manifests.node ?? []);
    const runnerTest = findRoleCommand(sources.filter((s) => s.source !== 'package.json'), 'test');
    if (hasTestScript) {
        score += 2;
        findings.push({
            status: 'pass',
            message: 'package.json test script defined',
        });
    }
    else if (runnerTest) {
        score += 2;
        findings.push({
            status: 'pass',
            message: `Test command defined: ${runnerTest.name} (${runnerTest.source})`,
            files: [runnerTest.source],
        });
    }
    else {
        const nodeOnly = ecosystems.ids.length === 1 && ecosystems.ids[0] === 'node';
        findings.push({
            status: 'warn',
            message: nodeOnly
                ? 'No test script in package.json'
                : `No test command defined (${TASK_RUNNER_LIST})`,
        });
    }
    // 5. Coverage is configured.
    const coverageSource = await findCoverage(repoPath);
    if (coverageSource !== null) {
        score += 1;
        findings.push({
            status: 'pass',
            message: `Coverage configuration detected${coverageSource ? ` (${coverageSource})` : ''}`,
        });
    }
    score = Math.min(testing_MAX_SCORE, score);
    return {
        id: 'testing',
        label: 'Testing and validation',
        score,
        maxScore: testing_MAX_SCORE,
        findings,
    };
}
/** Upper bound on nested pyproject.toml / setup.cfg files read for pytest config. */
const MAX_PYTHON_CONFIGS_READ = 50;
async function findPytestConfig(repoPath) {
    const files = await findInRepo(repoPath, [
        '**/pytest.ini',
        '**/conftest.py',
        '**/tox.ini',
        '**/noxfile.py',
    ]);
    for (const rel of (await findInRepo(repoPath, '**/pyproject.toml')).slice(0, MAX_PYTHON_CONFIGS_READ)) {
        const content = await readTextFile_readTextFile(external_node_path_default().join(repoPath, rel));
        if (content && hasTomlTable(tomlTables(content), 'tool.pytest')) {
            files.push(rel);
        }
    }
    for (const rel of (await findInRepo(repoPath, '**/setup.cfg')).slice(0, MAX_PYTHON_CONFIGS_READ)) {
        const content = await readTextFile_readTextFile(external_node_path_default().join(repoPath, rel));
        if (content && iniSections(content).includes('tool:pytest')) {
            files.push(rel);
        }
    }
    return [...new Set(files)].sort();
}
/**
 * Returns the coverage tool label ('' when the file name says enough), or
 * null when no coverage configuration is found.
 */
async function findCoverage(repoPath) {
    const coverageFiles = await findFiles(repoPath, [
        'codecov.yml',
        '.codecov.yml',
        '**/c8.config.*',
    ]);
    if (coverageFiles.length > 0)
        return '';
    if ((await findFiles(repoPath, 'vitest.config.*')).length > 0) {
        return 'vitest';
    }
    const jestConfigs = await findFiles(repoPath, [
        'jest.config.*',
        '**/jest.config.*',
    ]);
    for (const f of jestConfigs) {
        const src = await readTextFile_readTextFile(f);
        if (src !== null &&
            (src.includes('collectCoverage') ||
                src.includes('coverageProvider') ||
                src.includes('coverageThreshold') ||
                src.includes('coverageDirectory'))) {
            return 'jest';
        }
    }
    if ((await findInRepo(repoPath, '**/.coveragerc')).length > 0) {
        return 'coverage.py';
    }
    const pyproject = await readRoot(repoPath, 'pyproject.toml');
    if (pyproject && hasTomlTable(tomlTables(pyproject), 'tool.coverage')) {
        return 'coverage.py';
    }
    const setupCfg = await readRoot(repoPath, 'setup.cfg');
    if (setupCfg &&
        iniSections(setupCfg).some((s) => s.startsWith('coverage:'))) {
        return 'coverage.py';
    }
    if ((await findInRepo(repoPath, ['tarpaulin.toml', '.tarpaulin.toml'])).length >
        0) {
        return 'tarpaulin';
    }
    const automation = await readAutomationText(repoPath);
    const goCover = automation
        .split('\n')
        .some((line) => line.includes('-coverprofile') ||
        (line.includes('go test') && /\s-cover\b/.test(line)));
    if (goCover)
        return 'go test -cover';
    if (/\bcargo (?:tarpaulin|llvm-cov)\b/.test(automation))
        return 'cargo';
    if (/--cov\b|--cov=|\bcoverage run\b/.test(automation))
        return 'pytest-cov';
    return null;
}

;// CONCATENATED MODULE: ./vendor/agent-readiness-kit/src/audit/checks/safety.ts





const safety_MAX_SCORE = 15;
const SAFETY_KEYWORDS = [
    'security',
    'secrets',
    'environment variable',
    'environment variables',
    '.env',
    'auth',
    'authorization',
    'tenant',
    'migration',
    'rollback',
    'production',
    'generated code',
];
const SAFETY_PATHS = [
    '.env.example',
    'SECURITY.md',
    'docs/security',
    'docs/operations',
    'docs/runbooks',
    'docs/migrations',
    'docs/MIGRATIONS.md',
];
const UNRESTRICTED_SHELL = /^Bash(?:\((?:\*|:\*)?\))?$/;
function strings(value) {
    return Array.isArray(value)
        ? value.filter((v) => typeof v === 'string')
        : [];
}
/**
 * Committed Claude Code settings: deny rules that keep secrets out of reach
 * earn points, and settings that let the agent act without asking cost them.
 */
async function claudeSettings(repoPath) {
    const rel = '.claude/settings.json';
    const full = external_node_path_default().join(repoPath, rel);
    if (!safePath_isRealpathWithin(repoPath, full))
        return { points: 0, findings: [] };
    const text = await readTextFile_readTextFile(full);
    if (text === null)
        return { points: 0, findings: [] };
    let settings;
    try {
        settings = JSON.parse(text);
    }
    catch {
        return {
            points: 0,
            findings: [
                { status: 'warn', message: `${rel} is not valid JSON`, files: [rel] },
            ],
        };
    }
    const root = typeof settings === 'object' && settings !== null
        ? settings
        : {};
    const permissions = typeof root.permissions === 'object' && root.permissions !== null
        ? root.permissions
        : {};
    const findings = [];
    let points = 0;
    if (strings(permissions.deny).some((rule) => rule.includes('.env'))) {
        points += 2;
        findings.push({
            status: 'pass',
            message: 'Claude Code settings deny reading .env files',
            files: [rel],
        });
    }
    else {
        findings.push({
            status: 'warn',
            message: 'Claude Code settings do not deny reading .env files — add "Read(./.env)" to permissions.deny',
            files: [rel],
        });
    }
    const bypass = permissions.defaultMode === 'bypassPermissions';
    const openShell = strings(permissions.allow).some((rule) => UNRESTRICTED_SHELL.test(rule.replace(/\s+/g, '')));
    if (bypass || openShell) {
        points -= 5;
        findings.push({
            status: 'fail',
            message: bypass
                ? 'Claude Code settings bypass every permission prompt (defaultMode: bypassPermissions)'
                : 'Claude Code settings allow any shell command without asking',
            files: [rel],
        });
    }
    if (root.enableAllProjectMcpServers === true) {
        findings.push({
            status: 'warn',
            message: 'Claude Code settings auto-approve every MCP server in the repository (enableAllProjectMcpServers)',
            files: [rel],
        });
    }
    return { points, findings };
}
async function fileMentionsSafety(filePath) {
    const content = (await readTextFile_readTextFile(filePath))?.toLowerCase();
    if (content === undefined)
        return false;
    return SAFETY_KEYWORDS.some((kw) => content.includes(kw.toLowerCase()));
}
async function checkSafety(repoPath) {
    const findings = [];
    let score = 0;
    const foundFiles = [];
    for (const rel of SAFETY_PATHS) {
        const full = external_node_path_default().join(repoPath, rel);
        if ((await fileExists(full)) || (await dirExists(full))) {
            foundFiles.push(rel);
            score += 3;
        }
    }
    score = Math.min(9, score);
    const docCandidates = await findFiles(repoPath, [
        'docs/**/*.md',
        'README.md',
        'AGENTS.md',
        'CONTRIBUTING.md',
    ]);
    let keywordHits = 0;
    const keywordFiles = [];
    for (const file of docCandidates.slice(0, 30)) {
        if (await fileMentionsSafety(file)) {
            keywordHits++;
            keywordFiles.push(external_node_path_default().relative(repoPath, file));
        }
    }
    if (keywordHits > 0) {
        score += Math.min(6, keywordHits * 2);
        findings.push({
            status: 'pass',
            message: `Docs mention safety topics (${keywordHits} files)`,
            files: keywordFiles.slice(0, 8),
        });
    }
    if (foundFiles.includes('.env.example')) {
        findings.push({
            status: 'pass',
            message: '.env.example found',
            files: ['.env.example'],
        });
    }
    else {
        findings.push({ status: 'fail', message: '.env.example not found' });
    }
    if (foundFiles.includes('SECURITY.md')) {
        findings.push({
            status: 'pass',
            message: 'SECURITY.md found',
            files: ['SECURITY.md'],
        });
    }
    for (const f of foundFiles) {
        if (f !== '.env.example' && f !== 'SECURITY.md') {
            findings.push({
                status: 'pass',
                message: `Safety/ops doc: ${f}`,
                files: [f],
            });
        }
    }
    const claude = await claudeSettings(repoPath);
    score = Math.max(0, score + claude.points);
    findings.push(...claude.findings);
    if (score < 5) {
        findings.push({
            status: 'warn',
            message: 'Limited safety boundary documentation for agents',
        });
    }
    score = Math.min(safety_MAX_SCORE, score);
    return {
        id: 'safety',
        label: 'Safety boundaries',
        score,
        maxScore: safety_MAX_SCORE,
        findings,
    };
}

;// CONCATENATED MODULE: ./vendor/agent-readiness-kit/src/audit/checks/navigability.ts



const navigability_MAX_SCORE = 10;
const PRIMARY_NAV_DOCS = [
    { rel: 'docs/ROUTES.md', points: 2 },
    { rel: 'docs/API.md', points: 2 },
    { rel: 'docs/SCORING.md', points: 2 },
];
const SECONDARY_NAV_DOCS = [
    { rel: 'docs/SCHEMA.md', points: 1 },
    { rel: 'docs/DATA_MODEL.md', points: 1 },
];
// Glob patterns for nav docs nested in monorepo docs subdirectories
const PRIMARY_NAV_GLOBS = [
    { pattern: 'docs/**/ROUTES.md', label: 'routes doc', points: 2 },
    { pattern: 'docs/**/*API*.md', label: 'API structure doc', points: 2 },
    { pattern: 'docs/**/*STRUCTURE*.md', label: 'structure doc', points: 1 },
];
const CLI_MODULE_DIRS = [
    'src/audit',
    'src/generate',
    'src/report',
    'src/config',
    'src/fs',
];
async function checkNavigability(repoPath) {
    const findings = [];
    let score = 0;
    const scoredDocGlobs = new Set();
    for (const { rel, points } of PRIMARY_NAV_DOCS) {
        if (await fileExists(external_node_path_default().join(repoPath, rel))) {
            score += points;
            scoredDocGlobs.add(rel);
            findings.push({
                status: 'pass',
                message: `Nav doc: ${rel}`,
                files: [rel],
            });
        }
    }
    for (const { rel, points } of SECONDARY_NAV_DOCS) {
        if (await fileExists(external_node_path_default().join(repoPath, rel))) {
            score += points;
            scoredDocGlobs.add(rel);
            findings.push({
                status: 'pass',
                message: `Nav doc: ${rel}`,
                files: [rel],
            });
        }
    }
    // Monorepo-aware: look for nav docs nested inside docs subdirectories
    for (const { pattern, label, points } of PRIMARY_NAV_GLOBS) {
        const matches = await findFiles(repoPath, pattern);
        const newMatches = matches.filter((f) => !scoredDocGlobs.has(external_node_path_default().relative(repoPath, f)));
        if (newMatches.length > 0) {
            score += points;
            const rels = newMatches.map((f) => external_node_path_default().relative(repoPath, f));
            rels.forEach((r) => scoredDocGlobs.add(r));
            findings.push({
                status: 'pass',
                message: `Nav doc (${label}): ${rels[0]}`,
                files: rels.slice(0, 3),
            });
        }
    }
    const openApi = await findFiles(repoPath, [
        '**/openapi.{yaml,yml,json}',
        '**/openapi/**/*.{yaml,yml,json}',
        'docs/openapi.{yaml,yml,json}',
    ]);
    if (openApi.length > 0) {
        score += 2;
        findings.push({
            status: 'pass',
            message: 'OpenAPI spec found',
            files: openApi.map((f) => external_node_path_default().relative(repoPath, f)).slice(0, 5),
        });
    }
    const routeConstants = await findFiles(repoPath, [
        '**/routes.ts',
        '**/routes.tsx',
        '**/routeConstants.ts',
        '**/paths.ts',
    ]);
    if (routeConstants.length > 0) {
        score += 1;
        findings.push({
            status: 'pass',
            message: 'Typed route constants or route modules found',
            files: routeConstants.map((f) => external_node_path_default().relative(repoPath, f)).slice(0, 5),
        });
    }
    const featureDirs = [
        external_node_path_default().join(repoPath, 'src', 'features'),
        external_node_path_default().join(repoPath, 'features'),
        external_node_path_default().join(repoPath, 'src', 'modules'),
    ];
    let foundFeatureDir = false;
    for (const dir of featureDirs) {
        if (await dirExists(dir)) {
            score += 2;
            foundFeatureDir = true;
            findings.push({
                status: 'pass',
                message: `Feature/module directory: ${external_node_path_default().relative(repoPath, dir)}`,
                files: [external_node_path_default().relative(repoPath, dir)],
            });
            break;
        }
    }
    // Monorepo-aware: check apps/*/features
    if (!foundFeatureDir) {
        // findFiles only returns files; check directory by looking for any file inside
        const appFeatureDirMatches = await findFiles(repoPath, 'apps/*/features/**/*');
        if (appFeatureDirMatches.length > 0) {
            score += 2;
            const exampleRel = external_node_path_default().dirname(external_node_path_default().relative(repoPath, appFeatureDirMatches[0]))
                .split((external_node_path_default()).sep)
                .slice(0, 3)
                .join((external_node_path_default()).sep);
            findings.push({
                status: 'pass',
                message: `Feature/module directory (monorepo): ${exampleRel}`,
                files: [exampleRel],
            });
        }
    }
    const cliModulesFound = [];
    for (const rel of CLI_MODULE_DIRS) {
        if (await dirExists(external_node_path_default().join(repoPath, rel))) {
            cliModulesFound.push(rel);
        }
    }
    if (cliModulesFound.length >= 3) {
        score += 1;
        findings.push({
            status: 'pass',
            message: `CLI/module directories (${cliModulesFound.length}): ${cliModulesFound.join(', ')}`,
            files: cliModulesFound,
        });
    }
    if (cliModulesFound.length === CLI_MODULE_DIRS.length) {
        score += 1;
        findings.push({
            status: 'pass',
            message: 'Full CLI module layout detected',
            files: cliModulesFound,
        });
    }
    score = Math.min(navigability_MAX_SCORE, score);
    if (score === 0) {
        findings.push({
            status: 'fail',
            message: 'No navigability docs (ROUTES, API, SCORING) or module layout detected',
        });
    }
    else if (score < 6) {
        findings.push({
            status: 'warn',
            message: 'Partial codebase navigability signals',
        });
    }
    return {
        id: 'navigability',
        label: 'Codebase navigability',
        score,
        maxScore: navigability_MAX_SCORE,
        findings,
    };
}

;// CONCATENATED MODULE: ./vendor/agent-readiness-kit/src/audit/checks/promptAssets.ts




const promptAssets_MAX_SCORE = 10;
const PROMPT_NAME_PATTERNS = [
    /qa/i,
    /refactor/i,
    /bugfix/i,
    /bug.?fix/i,
    /feature/i,
    /task/i,
    /audit/i,
];
async function checkPromptAssets(repoPath) {
    const findings = [];
    let score = 0;
    const promptDirs = [
        external_node_path_default().join(repoPath, 'docs', 'prompts'),
        external_node_path_default().join(repoPath, 'prompts'),
        external_node_path_default().join(repoPath, '.cursor', 'rules'),
    ];
    for (const dir of promptDirs) {
        if (await dirExists(dir)) {
            score += 2;
            findings.push({
                status: 'pass',
                message: `Prompt directory: ${external_node_path_default().relative(repoPath, dir)}`,
                files: [external_node_path_default().relative(repoPath, dir)],
            });
        }
    }
    const promptFiles = await findFiles(repoPath, [
        'docs/prompts/**/*.{md,mdc,txt}',
        'prompts/**/*.{md,mdc,txt}',
        '.cursor/rules/**/*.{md,mdc}',
    ]);
    if (promptFiles.length > 0) {
        score += 2;
        findings.push({
            status: 'pass',
            message: `Prompt/template files found (${promptFiles.length})`,
            files: promptFiles.map((f) => external_node_path_default().relative(repoPath, f)).slice(0, 10),
        });
    }
    const docsPromptFiles = promptFiles.filter((f) => {
        const rel = external_node_path_default().relative(repoPath, f);
        return (rel.startsWith(`docs${(external_node_path_default()).sep}prompts${(external_node_path_default()).sep}`) && rel.endsWith('.md'));
    });
    for (const file of docsPromptFiles) {
        const rel = external_node_path_default().relative(repoPath, file);
        if (await fileHasPlaceholderContent(file)) {
            findings.push({
                status: 'warn',
                message: `${PLACEHOLDER_WARNING} (${rel})`,
                files: [rel],
            });
        }
    }
    const categorized = promptFiles.filter((f) => {
        const base = external_node_path_default().basename(f);
        return PROMPT_NAME_PATTERNS.some((re) => re.test(base));
    });
    if (categorized.length > 0) {
        score += 3;
        findings.push({
            status: 'pass',
            message: 'Reusable task prompts (QA/refactor/bugfix/feature) detected',
            files: categorized.map((f) => external_node_path_default().relative(repoPath, f)).slice(0, 8),
        });
    }
    else if (promptFiles.length > 0) {
        findings.push({
            status: 'warn',
            message: 'Prompt files exist but no named QA/refactor/bugfix templates detected',
        });
    }
    const hasQa = promptFiles.some((f) => /qa/i.test(external_node_path_default().basename(f)));
    if (!hasQa) {
        findings.push({
            status: 'warn',
            message: 'No reusable QA prompt template detected',
        });
    }
    else {
        score += 1;
    }
    score = Math.min(promptAssets_MAX_SCORE, score);
    if (score === 0) {
        findings.push({
            status: 'fail',
            message: 'No docs/prompts or .cursor/rules prompt assets found',
        });
    }
    return {
        id: 'prompt-assets',
        label: 'Prompt assets',
        score,
        maxScore: promptAssets_MAX_SCORE,
        findings,
    };
}

;// CONCATENATED MODULE: ./vendor/agent-readiness-kit/src/audit/checks/codeStyle.ts






const codeStyle_MAX_SCORE = 10;
const LINTER_POINTS = 3;
const FORMATTER_POINTS = 3;
const ESLINT_FILES = [
    '.eslintrc',
    '.eslintrc.js',
    '.eslintrc.cjs',
    '.eslintrc.mjs',
    '.eslintrc.json',
    '.eslintrc.yml',
    '.eslintrc.yaml',
    'eslint.config.js',
    'eslint.config.mjs',
    'eslint.config.cjs',
    'eslint.config.ts',
];
const PRETTIER_FILES = [
    '.prettierrc',
    '.prettierrc.js',
    '.prettierrc.cjs',
    '.prettierrc.mjs',
    '.prettierrc.json',
    '.prettierrc.yml',
    '.prettierrc.yaml',
    '.prettierrc.toml',
    'prettier.config.js',
    'prettier.config.cjs',
    'prettier.config.mjs',
    'prettier.config.ts',
];
const LINTER_MISSING = {
    node: 'No ESLint config detected',
    python: 'No Python linter config detected (ruff, flake8, or pylint)',
    go: 'No Go linter detected (.golangci.yml, or go vet / staticcheck in a task or CI)',
    rust: 'No Rust linter detected (clippy config, [lints.clippy], or cargo clippy in a task or CI)',
};
const FORMATTER_MISSING = {
    node: 'No Prettier config detected',
    python: 'No Python formatter detected (ruff format or black)',
    go: 'No Go formatter step detected (gofmt, gofumpt, or goimports in a task, hook, or CI)',
    rust: 'No Rust formatter detected (rustfmt.toml, or cargo fmt in a task, hook, or CI)',
};
async function checkCodeStyle(repoPath, detected) {
    const findings = [];
    let score = 0;
    const ecosystems = detected ?? (await detectEcosystems(repoPath));
    const automation = await readAutomationText(repoPath);
    const pyTables = await pyprojectTables(repoPath);
    const linters = await scoreEcosystemSignal(ecosystems, LINTER_POINTS, (id) => evaluateLinter(repoPath, id, automation, pyTables), () => codeStyle_anyEcosystem((id) => evaluateLinter(repoPath, id, automation, pyTables)));
    score += linters.points;
    pushResults(findings, linters.results, 'linter');
    const formatters = await scoreEcosystemSignal(ecosystems, FORMATTER_POINTS, (id) => evaluateFormatter(repoPath, id, automation, pyTables), () => codeStyle_anyEcosystem((id) => evaluateFormatter(repoPath, id, automation, pyTables)));
    score += formatters.points;
    pushResults(findings, formatters.results, 'formatter');
    // .editorconfig
    if (await fileExists(external_node_path_default().join(repoPath, '.editorconfig'))) {
        score += 2;
        findings.push({
            status: 'pass',
            message: '.editorconfig found',
            files: ['.editorconfig'],
        });
    }
    else {
        findings.push({ status: 'warn', message: 'No .editorconfig found' });
    }
    // .prettierignore or .eslintignore
    const ignoreFiles = ['.prettierignore', '.eslintignore'];
    for (const rel of ignoreFiles) {
        if (await fileExists(external_node_path_default().join(repoPath, rel))) {
            score += 1;
            findings.push({
                status: 'pass',
                message: `Ignore file: ${rel}`,
                files: [rel],
            });
        }
    }
    // Biome / oxc — alternative all-in-one linters
    const biomeFiles = await findFiles(repoPath, ['biome.json', 'biome.jsonc']);
    if (biomeFiles.length > 0) {
        score += 3;
        findings.push({
            status: 'pass',
            message: 'Biome config found (lint + format)',
            files: biomeFiles.map((f) => external_node_path_default().relative(repoPath, f)).slice(0, 3),
        });
    }
    score = Math.min(codeStyle_MAX_SCORE, score);
    if (score === 0) {
        const nodeOrUnknown = ecosystems.ids.length === 0 ||
            (ecosystems.ids.length === 1 && ecosystems.ids[0] === 'node');
        findings.push({
            status: 'fail',
            message: nodeOrUnknown
                ? 'No code style tooling detected (ESLint / Prettier / Biome / .editorconfig)'
                : 'No code style tooling detected (linter, formatter, or .editorconfig)',
        });
    }
    return {
        id: 'code-style',
        label: 'Code style tooling',
        score,
        maxScore: codeStyle_MAX_SCORE,
        findings,
    };
}
async function pyprojectTables(repoPath) {
    const content = await readRoot(repoPath, 'pyproject.toml');
    return content === null ? null : tomlTables(content);
}
/** Root config first (as before), then configs in nested packages. */
async function findConfig(repoPath, names) {
    for (const rel of names) {
        if (await repoFileExists(repoPath, rel))
            return rel;
    }
    const nested = await findInRepo(repoPath, names.map((n) => `**/${n}`));
    return nested[0] ?? null;
}
async function evaluateLinter(repoPath, id, automation, pyTables) {
    const pass = (message, file) => ({
        satisfied: true,
        passMessage: message,
        ...(file ? { files: [file] } : {}),
    });
    const missing = { satisfied: false, missingMessage: LINTER_MISSING[id] };
    if (id === 'node') {
        const eslint = await findConfig(repoPath, ESLINT_FILES);
        return eslint ? pass(`ESLint config found: ${eslint}`, eslint) : missing;
    }
    if (id === 'python') {
        const file = await findConfig(repoPath, [
            'ruff.toml',
            '.ruff.toml',
            '.flake8',
            '.pylintrc',
            'pylintrc',
        ]);
        if (file)
            return pass(`Python linter config found: ${file}`, file);
        if (pyTables) {
            for (const table of ['tool.ruff', 'tool.pylint', 'tool.flake8']) {
                if (hasTomlTable(pyTables, table)) {
                    return pass(`Python linter config found: pyproject.toml [${table}]`, 'pyproject.toml');
                }
            }
        }
        for (const rel of ['setup.cfg', 'tox.ini']) {
            const content = await readRoot(repoPath, rel);
            if (content && iniSections(content).includes('flake8')) {
                return pass(`Python linter config found: ${rel} [flake8]`, rel);
            }
        }
        if (/\bruff check\b|\bflake8\b|\bpylint\b/.test(automation)) {
            return pass('Python linter runs in a task, hook, or CI');
        }
        return missing;
    }
    if (id === 'go') {
        const file = await findConfig(repoPath, [
            '.golangci.yml',
            '.golangci.yaml',
            '.golangci.toml',
            '.golangci.json',
        ]);
        if (file)
            return pass(`golangci-lint config found: ${file}`, file);
        if (/\bgolangci-lint\b|\bgo vet\b|\bstaticcheck\b/.test(automation)) {
            return pass('Go linter runs in a task, hook, or CI');
        }
        return missing;
    }
    const clippy = await findConfig(repoPath, ['clippy.toml', '.clippy.toml']);
    if (clippy)
        return pass(`Clippy config found: ${clippy}`, clippy);
    const cargo = await readRoot(repoPath, 'Cargo.toml');
    if (cargo &&
        (hasTomlTable(tomlTables(cargo), 'lints.clippy') ||
            hasTomlTable(tomlTables(cargo), 'workspace.lints.clippy'))) {
        return pass('Clippy lints configured in Cargo.toml', 'Cargo.toml');
    }
    if (/\bcargo clippy\b|\bclippy\b/.test(automation)) {
        return pass('Clippy runs in a task, hook, or CI');
    }
    return missing;
}
async function evaluateFormatter(repoPath, id, automation, pyTables) {
    const pass = (message, file) => ({
        satisfied: true,
        passMessage: message,
        ...(file ? { files: [file] } : {}),
    });
    const missing = { satisfied: false, missingMessage: FORMATTER_MISSING[id] };
    if (id === 'node') {
        const prettier = await findConfig(repoPath, PRETTIER_FILES);
        return prettier
            ? pass(`Prettier config found: ${prettier}`, prettier)
            : missing;
    }
    if (id === 'python') {
        if (pyTables) {
            for (const table of ['tool.black', 'tool.ruff.format']) {
                if (hasTomlTable(pyTables, table)) {
                    return pass(`Python formatter config found: pyproject.toml [${table}]`, 'pyproject.toml');
                }
            }
        }
        for (const rel of ['ruff.toml', '.ruff.toml']) {
            const content = await readRoot(repoPath, rel);
            if (content && hasTomlTable(tomlTables(content), 'format')) {
                return pass(`Python formatter config found: ${rel} [format]`, rel);
            }
        }
        if (/\bruff format\b|\bruff-format\b|psf\/black|(?:^|[\s"'])black(?:\s|$)/m.test(automation)) {
            return pass('Python formatter runs in a task, hook, or CI');
        }
        return missing;
    }
    if (id === 'go') {
        if (/\bgofmt\b|\bgo fmt\b|\bgofumpt\b|\bgoimports\b/.test(automation)) {
            return pass('Go formatter runs in a task, hook, or CI');
        }
        const golangci = await findConfig(repoPath, [
            '.golangci.yml',
            '.golangci.yaml',
            '.golangci.toml',
        ]);
        // findConfig found it through findFiles, so it is inside the repository.
        const content = golangci
            ? await readTextFile_readTextFile(external_node_path_default().join(repoPath, golangci))
            : null;
        if (content && /\b(gofmt|gofumpt|goimports)\b/.test(content)) {
            return pass(`Go formatter enabled in ${golangci}`, golangci ?? undefined);
        }
        return missing;
    }
    const rustfmt = await findConfig(repoPath, ['rustfmt.toml', '.rustfmt.toml']);
    if (rustfmt)
        return pass(`rustfmt config found: ${rustfmt}`, rustfmt);
    if (/\bcargo fmt\b|\brustfmt\b/.test(automation)) {
        return pass('rustfmt runs in a task, hook, or CI');
    }
    return missing;
}
/** Fallback when no ecosystem is detected: any supported ecosystem's tool. */
async function codeStyle_anyEcosystem(evaluate) {
    let first = null;
    for (const id of ECOSYSTEM_IDS) {
        const evaluation = await evaluate(id);
        if (evaluation.satisfied)
            return evaluation;
        first ??= evaluation;
    }
    // Unknown stacks report the Node.js wording, as before.
    return first ?? { satisfied: false };
}
function pushResults(findings, results, kind) {
    for (const { evaluation } of results) {
        findings.push(evaluation.satisfied
            ? {
                status: 'pass',
                message: evaluation.passMessage ?? `${kind} configured`,
                ...(evaluation.files ? { files: evaluation.files } : {}),
            }
            : {
                status: 'warn',
                message: evaluation.missingMessage ?? `No ${kind} detected`,
            });
    }
}

;// CONCATENATED MODULE: ./vendor/agent-readiness-kit/src/audit/checks/documentation.ts



const documentation_MAX_SCORE = 10;
const README_QUALITY_KEYWORDS = [
    'install',
    'usage',
    'getting started',
    'setup',
    'development',
    'contributing',
    'license',
    'overview',
];
async function checkDocumentation(repoPath) {
    const findings = [];
    let score = 0;
    // README quality
    const readmeContent = await readRoot(repoPath, 'README.md');
    if (readmeContent) {
        const lower = readmeContent.toLowerCase();
        const keywordsFound = README_QUALITY_KEYWORDS.filter((kw) => lower.includes(kw));
        const lineCount = readmeContent.split('\n').length;
        if (keywordsFound.length >= 4 && lineCount >= 20) {
            score += 4;
            findings.push({
                status: 'pass',
                message: `README.md is well-structured (${lineCount} lines, ${keywordsFound.length} quality sections)`,
                files: ['README.md'],
            });
        }
        else if (keywordsFound.length >= 2 || lineCount >= 15) {
            score += 2;
            findings.push({
                status: 'warn',
                message: `README.md exists but could be more complete (${lineCount} lines, ${keywordsFound.length}/${README_QUALITY_KEYWORDS.length} quality sections)`,
                files: ['README.md'],
            });
        }
        else {
            score += 1;
            findings.push({
                status: 'warn',
                message: 'README.md is minimal — add setup, usage, and development sections',
                files: ['README.md'],
            });
        }
    }
    else {
        findings.push({ status: 'fail', message: 'README.md not found' });
    }
    // CHANGELOG
    const changelogPaths = [
        'CHANGELOG.md',
        'CHANGELOG',
        'HISTORY.md',
        'docs/CHANGELOG.md',
    ];
    let foundChangelog = null;
    for (const rel of changelogPaths) {
        if (await fileExists(external_node_path_default().join(repoPath, rel))) {
            foundChangelog = rel;
            break;
        }
    }
    if (foundChangelog) {
        score += 3;
        findings.push({
            status: 'pass',
            message: `CHANGELOG found: ${foundChangelog}`,
            files: [foundChangelog],
        });
    }
    else {
        findings.push({ status: 'warn', message: 'No CHANGELOG.md found' });
    }
    // CONTRIBUTING
    const contributingPaths = [
        'CONTRIBUTING.md',
        'docs/CONTRIBUTING.md',
        '.github/CONTRIBUTING.md',
    ];
    let foundContributing = null;
    for (const rel of contributingPaths) {
        if (await fileExists(external_node_path_default().join(repoPath, rel))) {
            foundContributing = rel;
            break;
        }
    }
    if (foundContributing) {
        score += 2;
        findings.push({
            status: 'pass',
            message: `CONTRIBUTING guide found: ${foundContributing}`,
            files: [foundContributing],
        });
    }
    else {
        findings.push({ status: 'warn', message: 'No CONTRIBUTING.md found' });
    }
    // CODE_OF_CONDUCT
    const cocPaths = ['CODE_OF_CONDUCT.md', '.github/CODE_OF_CONDUCT.md'];
    for (const rel of cocPaths) {
        if (await fileExists(external_node_path_default().join(repoPath, rel))) {
            score += 1;
            findings.push({
                status: 'pass',
                message: `Code of conduct found: ${rel}`,
                files: [rel],
            });
            break;
        }
    }
    score = Math.min(documentation_MAX_SCORE, score);
    if (score === 0) {
        findings.push({
            status: 'fail',
            message: 'No documentation files detected',
        });
    }
    return {
        id: 'documentation',
        label: 'Documentation coverage',
        score,
        maxScore: documentation_MAX_SCORE,
        findings,
    };
}

;// CONCATENATED MODULE: ./vendor/agent-readiness-kit/src/audit/checks/gitHygiene.ts





const gitHygiene_MAX_SCORE = 10;
const item = (label, ...alternatives) => ({
    label,
    alternatives: alternatives.length > 0 ? alternatives : [label],
});
const UNIVERSAL_ITEMS = [item('.env'), item('.DS_Store')];
/**
 * Dependency and build-output entries a .gitignore should cover, per
 * ecosystem. Repositories with no detected ecosystem use the Node.js entries,
 * as before.
 */
const ECOSYSTEM_ITEMS = {
    node: [item('node_modules'), item('dist')],
    python: [
        item('__pycache__', '__pycache__', '*.pyc', '*.py[cod]'),
        item('.venv', '.venv', 'venv'),
    ],
    go: [
        item('Go binaries', '*.exe', '*.test', '/bin', 'bin/'),
        item('Go coverage output', '*.out', 'coverage'),
    ],
    rust: [item('target'), item('debug', 'debug', '*.rs.bk', '*.pdb')],
};
function gitignoreItems(ids) {
    const own = (ids.length > 0 ? ids : ['node']).flatMap((id) => ECOSYSTEM_ITEMS[id]);
    // Node.js lists node_modules and dist first; keep that order for its report.
    return ids.length === 0 || ids[0] === 'node'
        ? [...own, ...UNIVERSAL_ITEMS]
        : [...UNIVERSAL_ITEMS, ...own];
}
async function checkGitHygiene(repoPath, detected) {
    const ecosystems = detected ?? (await detectEcosystems(repoPath));
    const findings = [];
    let score = 0;
    // .gitignore quality
    const gitignoreContent = await readRoot(repoPath, '.gitignore');
    if (gitignoreContent) {
        const lower = gitignoreContent.toLowerCase();
        const items = gitignoreItems(ecosystems.ids);
        const covered = items.filter((i) => i.alternatives.some((a) => lower.includes(a.toLowerCase())));
        const hits = covered.map((i) => i.label);
        // Comprehensive: at most one expected entry missing (3 of 4 for one stack).
        if (hits.length >= items.length - 1) {
            score += 3;
            findings.push({
                status: 'pass',
                message: `.gitignore is comprehensive (covers: ${hits.join(', ')})`,
                files: ['.gitignore'],
            });
        }
        else if (hits.length >= 1) {
            score += 2;
            findings.push({
                status: 'warn',
                message: `.gitignore exists but may be missing common entries (${items
                    .filter((i) => !covered.includes(i))
                    .map((i) => i.label)
                    .join(', ')})`,
                files: ['.gitignore'],
            });
        }
        else {
            score += 1;
            findings.push({
                status: 'warn',
                message: '.gitignore is present but appears minimal',
                files: ['.gitignore'],
            });
        }
    }
    else {
        findings.push({ status: 'fail', message: 'No .gitignore found' });
    }
    // Conventional commits / commitlint
    const commitlintFiles = [
        'commitlint.config.js',
        'commitlint.config.cjs',
        'commitlint.config.mjs',
        'commitlint.config.ts',
        '.commitlintrc',
        '.commitlintrc.js',
        '.commitlintrc.cjs',
        '.commitlintrc.json',
        '.commitlintrc.yml',
        '.commitlintrc.yaml',
        // Commit message linters outside the Node.js toolchain
        '.gitlint',
        'cog.toml',
        '.cz.toml',
        '.cz.json',
        '.cz.yaml',
    ];
    let foundCommitlint = null;
    for (const rel of commitlintFiles) {
        if (await repoFileExists(repoPath, rel)) {
            foundCommitlint = rel;
            break;
        }
    }
    if (foundCommitlint) {
        score += 3;
        findings.push({
            status: 'pass',
            message: `Commitlint config found: ${foundCommitlint}`,
            files: [foundCommitlint],
        });
    }
    else {
        // Check for conventional-commits reference in package.json scripts or husky
        const huskyFiles = await findFiles(repoPath, '.husky/**/*');
        const hookConfigs = await findFiles(repoPath, [
            '.pre-commit-config.yaml',
            '.pre-commit-config.yml',
            'lefthook.yml',
            'lefthook.yaml',
            '.lefthook.yml',
            '.githooks/*',
        ]);
        if (huskyFiles.length > 0) {
            score += 1;
            findings.push({
                status: 'pass',
                message: 'Husky hooks directory found',
                files: huskyFiles.map((f) => external_node_path_default().relative(repoPath, f)).slice(0, 3),
            });
        }
        else if (hookConfigs.length > 0) {
            score += 1;
            const rel = external_node_path_default().relative(repoPath, hookConfigs[0]);
            findings.push({
                status: 'pass',
                message: `Git hooks configured: ${rel}`,
                files: [rel],
            });
        }
        else {
            findings.push({
                status: 'warn',
                message: 'No commitlint config or git hooks found',
            });
        }
    }
    // .gitattributes
    if (await fileExists(external_node_path_default().join(repoPath, '.gitattributes'))) {
        score += 2;
        findings.push({
            status: 'pass',
            message: '.gitattributes found',
            files: ['.gitattributes'],
        });
    }
    // Release config (release-it, semantic-release, changesets)
    const releaseFiles = [
        '.release-it.js',
        '.release-it.cjs',
        '.release-it.json',
        '.release-it.yml',
        '.release-it.yaml',
        'release.config.js',
        'release.config.cjs',
        '.goreleaser.yml',
        '.goreleaser.yaml',
        'release-please-config.json',
        'release.toml',
    ];
    let foundRelease = null;
    for (const rel of releaseFiles) {
        if (await repoFileExists(repoPath, rel)) {
            foundRelease = rel;
            break;
        }
    }
    const changesetDir = await fileExists(external_node_path_default().join(repoPath, '.changeset', 'config.json'));
    const semRelConfig = await findFiles(repoPath, [
        '.releaserc',
        '.releaserc.json',
        '.releaserc.yml',
        '.releaserc.yaml',
        '.releaserc.js',
    ]);
    if (foundRelease || changesetDir || semRelConfig.length > 0) {
        score += 2;
        const label = foundRelease ??
            (changesetDir
                ? '.changeset/config.json'
                : external_node_path_default().relative(repoPath, semRelConfig[0]));
        findings.push({
            status: 'pass',
            message: `Release automation config found: ${label}`,
            files: [label],
        });
    }
    score = Math.min(gitHygiene_MAX_SCORE, score);
    if (score === 0) {
        findings.push({
            status: 'fail',
            message: 'No git hygiene signals detected',
        });
    }
    return {
        id: 'git-hygiene',
        label: 'Git hygiene',
        score,
        maxScore: gitHygiene_MAX_SCORE,
        findings,
    };
}

;// CONCATENATED MODULE: ./vendor/agent-readiness-kit/src/audit/checks/containerization.ts



const containerization_MAX_SCORE = 5;
async function checkContainerization(repoPath) {
    const findings = [];
    let score = 0;
    // Dockerfile
    const dockerfiles = await findFiles(repoPath, [
        'Dockerfile',
        'Dockerfile.*',
        '**/Dockerfile',
        '**/Dockerfile.*',
    ]);
    if (dockerfiles.length > 0) {
        score += 2;
        findings.push({
            status: 'pass',
            message: `Dockerfile found (${dockerfiles.length})`,
            files: dockerfiles.map((f) => external_node_path_default().relative(repoPath, f)).slice(0, 5),
        });
    }
    else {
        findings.push({ status: 'warn', message: 'No Dockerfile found' });
    }
    // docker-compose
    const composeFiles = await findFiles(repoPath, [
        'docker-compose.yml',
        'docker-compose.yaml',
        'compose.yml',
        'compose.yaml',
        'docker-compose.*.yml',
        'docker-compose.*.yaml',
    ]);
    if (composeFiles.length > 0) {
        score += 2;
        findings.push({
            status: 'pass',
            message: 'Docker Compose config found',
            files: composeFiles.map((f) => external_node_path_default().relative(repoPath, f)).slice(0, 5),
        });
    }
    // .dockerignore
    if (await fileExists(external_node_path_default().join(repoPath, '.dockerignore'))) {
        score += 1;
        findings.push({
            status: 'pass',
            message: '.dockerignore found',
            files: ['.dockerignore'],
        });
    }
    else if (dockerfiles.length > 0) {
        findings.push({
            status: 'warn',
            message: 'Dockerfile present but no .dockerignore',
        });
    }
    score = Math.min(containerization_MAX_SCORE, score);
    if (score === 0) {
        findings.push({
            status: 'warn',
            message: 'No containerization config found (Dockerfile / docker-compose)',
        });
    }
    return {
        id: 'containerization',
        label: 'Containerization',
        score,
        maxScore: containerization_MAX_SCORE,
        findings,
    };
}

;// CONCATENATED MODULE: ./vendor/agent-readiness-kit/src/audit/checks/ideConfig.ts



const ideConfig_MAX_SCORE = 5;
async function checkIdeConfig(repoPath) {
    const findings = [];
    let score = 0;
    // .vscode directory
    const vscodeDir = external_node_path_default().join(repoPath, '.vscode');
    if (await dirExists(vscodeDir)) {
        score += 1;
        findings.push({
            status: 'pass',
            message: '.vscode directory present',
            files: ['.vscode'],
        });
    }
    // .vscode/settings.json
    if (await fileExists(external_node_path_default().join(repoPath, '.vscode', 'settings.json'))) {
        score += 1;
        findings.push({
            status: 'pass',
            message: '.vscode/settings.json found',
            files: ['.vscode/settings.json'],
        });
    }
    // .vscode/extensions.json — recommended extensions
    if (await fileExists(external_node_path_default().join(repoPath, '.vscode', 'extensions.json'))) {
        score += 1;
        findings.push({
            status: 'pass',
            message: '.vscode/extensions.json found (recommended extensions)',
            files: ['.vscode/extensions.json'],
        });
    }
    // .vscode/launch.json — debug configurations
    if (await fileExists(external_node_path_default().join(repoPath, '.vscode', 'launch.json'))) {
        score += 1;
        findings.push({
            status: 'pass',
            message: '.vscode/launch.json found (debug configurations)',
            files: ['.vscode/launch.json'],
        });
    }
    // .vscode/tasks.json
    if (await fileExists(external_node_path_default().join(repoPath, '.vscode', 'tasks.json'))) {
        score += 1;
        findings.push({
            status: 'pass',
            message: '.vscode/tasks.json found',
            files: ['.vscode/tasks.json'],
        });
    }
    // JetBrains .idea
    const ideaDir = external_node_path_default().join(repoPath, '.idea');
    if (await dirExists(ideaDir)) {
        score += 1;
        findings.push({
            status: 'pass',
            message: '.idea directory present (JetBrains IDE config)',
            files: ['.idea'],
        });
    }
    // Workspace file
    const workspaceFiles = await findFiles(repoPath, '*.code-workspace');
    if (workspaceFiles.length > 0) {
        score += 1;
        findings.push({
            status: 'pass',
            message: 'VS Code workspace file found',
            files: workspaceFiles.map((f) => external_node_path_default().relative(repoPath, f)).slice(0, 3),
        });
    }
    score = Math.min(ideConfig_MAX_SCORE, score);
    if (score === 0) {
        findings.push({
            status: 'warn',
            message: 'No IDE configuration found (.vscode/)',
        });
    }
    return {
        id: 'ide-config',
        label: 'IDE configuration',
        score,
        maxScore: ideConfig_MAX_SCORE,
        findings,
    };
}

;// CONCATENATED MODULE: ./vendor/agent-readiness-kit/src/audit/scoring.ts
function sumCategoryScores(categories) {
    const total = categories.reduce((sum, cat) => sum + cat.score, 0);
    return Math.min(100, total);
}
function buildMissingAndRecommendations(categories, repoPath, ecosystems) {
    // Recommend package.json changes only where Node.js is (or may be) in use.
    const usesNode = ecosystems === undefined ||
        ecosystems.length === 0 ||
        ecosystems.includes('node');
    const missing = [];
    const recommendations = [];
    const add = (item, rec) => {
        if (!missing.includes(item))
            missing.push(item);
        if (rec && !recommendations.includes(rec))
            recommendations.push(rec);
    };
    for (const cat of categories) {
        for (const f of cat.findings) {
            if (f.status === 'fail') {
                if (f.message.includes('AGENTS.md')) {
                    add('AGENTS.md', 'Add AGENTS.md with project overview, commands, and agent boundaries');
                }
                if (f.message.includes('ARCHITECTURE') ||
                    f.message.includes('architecture doc')) {
                    add('docs/ARCHITECTURE.md', 'Add docs/ARCHITECTURE.md describing system boundaries');
                }
                if (f.message.includes('.env.example')) {
                    add('.env.example', 'Add .env.example listing required environment variables');
                }
                if (f.message.includes('README')) {
                    add('README.md', 'Add README.md with setup and project overview');
                }
                if (f.message.includes('QA prompt')) {
                    add('reusable QA prompt', 'Add docs/prompts/QA_AUDIT_PROMPT.md');
                }
                if (f.message.includes('test')) {
                    add(usesNode
                        ? 'test script or test files'
                        : 'test command or test files', usesNode
                        ? 'Add tests and a package.json test script'
                        : 'Add tests and a test command (Makefile, justfile, Taskfile, or pyproject.toml task)');
                }
            }
        }
    }
    const agentCat = categories.find((c) => c.id === 'agent-instructions');
    if (agentCat && agentCat.score < agentCat.maxScore) {
        const agentsMissing = agentCat.findings.some((f) => f.status === 'fail' && f.message === 'AGENTS.md not found');
        const toolSpecificMissing = agentCat.findings.some((f) => f.message.includes('add tool-specific instructions'));
        if (agentsMissing) {
            add('AGENTS.md', 'Add AGENTS.md');
        }
        else if (toolSpecificMissing) {
            add('tool-specific agent instructions', 'Add tool-specific instructions (CLAUDE.md, .cursor/rules/, or .github/copilot-instructions.md) alongside AGENTS.md');
        }
    }
    const archCat = categories.find((c) => c.id === 'architecture');
    if (archCat && archCat.score < 10) {
        if (!missing.some((m) => m.includes('ARCHITECTURE'))) {
            add('docs/ARCHITECTURE.md', 'Add docs/ARCHITECTURE.md');
        }
    }
    const promptCat = categories.find((c) => c.id === 'prompt-assets');
    if (promptCat && promptCat.score < 5) {
        add('docs/prompts/', 'Add docs/prompts/ with QA_AUDIT_PROMPT.md and task templates');
    }
    const workflowCat = categories.find((c) => c.id === 'workflow');
    if (workflowCat) {
        const testFail = workflowCat.findings.some((f) => f.message.includes('Missing test script'));
        if (testFail) {
            add('package.json test script', 'Add a test script to package.json');
        }
        const testCommandFail = workflowCat.findings.some((f) => f.message.includes('Missing test command'));
        if (testCommandFail) {
            add('test command', usesNode
                ? 'Add a test script to package.json or a test target to your task runner'
                : 'Add a test target to your task runner (Makefile, justfile, Taskfile, or pyproject.toml)');
        }
        const tcWarn = workflowCat.findings.some((f) => f.message.includes('Missing typecheck script') ||
            f.message.includes('Missing typecheck command'));
        if (tcWarn) {
            add('typecheck script', 'Add typecheck script for agent validation');
        }
    }
    if (recommendations.length === 0 && missing.length > 0) {
        missing.slice(0, 5).forEach((m, i) => {
            recommendations.push(`${i + 1}. Address: ${m}`);
        });
    }
    void repoPath;
    return { missing, recommendations };
}
function finalizeAuditResult(repoPath, categories, ecosystems) {
    const score = sumCategoryScores(categories);
    const { missing, recommendations } = buildMissingAndRecommendations(categories, repoPath, ecosystems);
    return {
        repoPath,
        score,
        ...(ecosystems ? { ecosystems: [...ecosystems] } : {}),
        categories,
        missing,
        recommendations,
    };
}

;// CONCATENATED MODULE: ./vendor/agent-readiness-kit/src/audit/auditRepo.ts
















const ALL_CHECK_IDS = [
    'agent-instructions',
    'architecture',
    'workflow',
    'testing',
    'safety',
    'navigability',
    'prompt-assets',
    'dependencies',
    'code-style',
    'documentation',
    'git-hygiene',
    'containerization',
    'ide-config',
];
const CHECK_MAP = {
    'agent-instructions': checkAgentInstructions,
    architecture: checkArchitecture,
    workflow: checkWorkflow,
    testing: checkTesting,
    safety: checkSafety,
    navigability: checkNavigability,
    'prompt-assets': checkPromptAssets,
    dependencies: checkDependencies,
    'code-style': checkCodeStyle,
    documentation: checkDocumentation,
    'git-hygiene': checkGitHygiene,
    containerization: checkContainerization,
    'ide-config': checkIdeConfig,
};
async function auditRepo(repoPath) {
    const resolved = external_node_path_default().resolve(repoPath);
    const ecosystems = await detectEcosystems(resolved);
    const categories = await Promise.all(ALL_CHECK_IDS.map((id) => CHECK_MAP[id](resolved, ecosystems)));
    return finalizeAuditResult(resolved, categories, ecosystems.ids);
}
async function auditCategory(repoPath, categoryId) {
    const resolved = path.resolve(repoPath);
    const fn = CHECK_MAP[categoryId];
    if (!fn)
        return null;
    return fn(resolved);
}

;// CONCATENATED MODULE: ./vendor/agent-readiness-kit/src/report/jsonReport.ts
function toAuditJson(result) {
    return {
        repoPath: result.repoPath,
        score: result.score,
        ...(result.ecosystems ? { ecosystems: result.ecosystems } : {}),
        categories: result.categories.map((c) => ({
            id: c.id,
            label: c.label,
            score: c.score,
            maxScore: c.maxScore,
            findings: c.findings,
        })),
        missing: result.missing,
        recommendations: result.recommendations,
    };
}
function formatAuditJson(result) {
    return JSON.stringify(toAuditJson(result), null, 2);
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/fs/glob.ts

/**
 * tinyglobby either follows symlinks or drops them. Resolving each link to
 * itself and stat-ing it with lstat makes the walker report every symlink as
 * an entry without entering it: `CLAUDE.md -> AGENTS.md` is listed, and a
 * link such as `.codex -> /` is not walked. Pass it with
 * `followSymbolicLinks: true`, which is what makes tinyglobby consult it.
 */
const glob_reportSymlinksWithoutFollowing = {
    realpath: ((p, callback) => callback(null, String(p))),
    realpathSync: ((p) => String(p)),
    stat: external_node_fs_namespaceObject.lstat,
    statSync: external_node_fs_namespaceObject.lstatSync,
};

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/config/ignorePatterns.ts
// `rules.ignoreFiles` comes from the audited repository's `.acdrc`, so it is
// untrusted. Brace patterns are expanded before matching, and both their
// nesting depth and the number of combinations of sibling groups (`{a,b}`
// repeated 20 times is over a million patterns) grow the work without bound.
// The `braces` expander fast-glob used could also exhaust the stack on deep
// nesting (GHSA-vfj7-8cjw-p6xm). Both are bounded here before a pattern
// reaches the glob.
/** Deepest brace nesting accepted in an ignore pattern. */
const MAX_BRACE_DEPTH = 10;
/** Most patterns one ignore pattern may expand to. */
const MAX_BRACE_EXPANSIONS = 1000;
const NUMERIC_RANGE = /^(-?\d+)\.\.(-?\d+)(?:\.\.(-?\d+))?$/;
const ALPHA_RANGE = /^([a-zA-Z])\.\.([a-zA-Z])(?:\.\.(-?\d+))?$/;
/** Number of values a `{x..y}` or `{x..y..step}` body produces, or 1 if it is not a range. */
function rangeSize(body) {
    const numeric = NUMERIC_RANGE.exec(body);
    const alpha = numeric ? null : ALPHA_RANGE.exec(body);
    const match = numeric ?? alpha;
    if (!match)
        return 1;
    const from = numeric ? Number(match[1]) : match[1].charCodeAt(0);
    const to = numeric ? Number(match[2]) : match[2].charCodeAt(0);
    const step = Math.abs(Number(match[3] ?? 1)) || 1;
    return Math.floor(Math.abs(to - from) / step) + 1;
}
/**
 * Why an ignore pattern is rejected, or `undefined` when it is safe to pass to
 * the glob. Reads the pattern once, without recursion, and counts an upper
 * bound of its brace expansions, so the check itself cannot be exhausted.
 */
function unsafeIgnorePatternReason(pattern) {
    const stack = [];
    let current = 1;
    const tooMany = `expands to more than ${MAX_BRACE_EXPANSIONS} patterns`;
    for (let i = 0; i < pattern.length; i++) {
        const ch = pattern[i];
        if (ch === '\\') {
            i++;
            continue;
        }
        if (ch === '{') {
            stack.push({ start: i, commas: 0, sum: 0, product: 1, current: 1 });
            if (stack.length > MAX_BRACE_DEPTH) {
                return `nests braces more than ${MAX_BRACE_DEPTH} levels deep`;
            }
            continue;
        }
        const group = stack[stack.length - 1];
        if (!group)
            continue;
        if (ch === ',') {
            group.sum += group.current;
            group.product *= group.current;
            group.commas++;
            group.current = 1;
        }
        else if (ch === '}') {
            stack.pop();
            const size = group.commas > 0
                ? group.sum + group.current
                : group.current * rangeSize(pattern.slice(group.start + 1, i));
            const parent = stack[stack.length - 1];
            if (parent)
                parent.current *= size;
            else
                current *= size;
            if ((parent ? parent.current : current) > MAX_BRACE_EXPANSIONS)
                return tooMany;
        }
        if (group.current > MAX_BRACE_EXPANSIONS || group.sum > MAX_BRACE_EXPANSIONS)
            return tooMany;
    }
    // An unclosed `{` is literal text, but groups inside it still expand.
    // Multiplying every alternative keeps the count an upper bound.
    while (stack.length > 0) {
        const group = stack.pop();
        const size = group.product * group.current;
        const parent = stack[stack.length - 1];
        if (parent)
            parent.current *= size;
        else
            current *= size;
    }
    return current > MAX_BRACE_EXPANSIONS ? tooMany : undefined;
}
/** Throw when any ignore pattern is unsafe to pass to the glob. */
function assertSafeIgnorePatterns(patterns) {
    for (const [index, pattern] of patterns.entries()) {
        const reason = unsafeIgnorePatternReason(pattern);
        if (reason)
            throw new Error(`ignoreFiles[${index}] ${reason}`);
    }
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/fs/findFiles.ts




const CONTEXT_PATTERNS = [
    // Cross-tool and model-specific root files, plus nested copies in monorepos
    'AGENTS.md',
    'AGENT.md',
    'CLAUDE.md',
    'claude.md',
    'GEMINI.md',
    '**/AGENTS.md',
    '**/CLAUDE.md',
    '**/GEMINI.md',
    // Claude Code
    '.claude/CLAUDE.md',
    '.claude/claude.md',
    '.claude/commands/**/*.md',
    '.claude/agents/**/*.md',
    '.claude/skills/**/SKILL.md',
    '.claude/rules/**/*.md',
    '.claude/output-styles/**/*.md',
    // Cursor
    '.cursorrules',
    '.cursor/rules/**/*.mdc',
    '.cursor/rules/**/*.md',
    // GitHub Copilot
    '.github/copilot-instructions.md',
    '.github/instructions/**/*.md',
    '.github/prompts/**/*.prompt.md',
    '.github/chatmodes/**/*.chatmode.md',
    '.github/agents/**/*.md',
    // Gemini Code Assist
    '.gemini/styleguide.md',
    // Windsurf, Cline, Roo, Kiro, Junie, Augment, Continue, Goose
    '.windsurfrules',
    '.windsurf/rules/**/*.md',
    '.clinerules',
    '.clinerules/**/*.md',
    '.roorules',
    '.roo/rules*/**/*.md',
    '.kiro/steering/**/*.md',
    '.junie/guidelines.md',
    '.augment-guidelines',
    '.augment/rules/**/*.md',
    '.continue/rules/**/*.md',
    '.goosehints',
    // Codex and shared prompt libraries
    '.codex/**/*.md',
    'docs/prompts/**/*.md',
    'prompts/**/*.md',
];
const IGNORE_DIRS = [
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/.git/**',
    '**/coverage/**',
    // Vendored code and test fixtures carry other projects' instructions.
    '**/vendor/**',
    '**/fixtures/**',
    '**/__fixtures__/**',
    '**/testdata/**',
    '**/.venv/**',
    '**/venv/**',
    '**/target/**',
    '**/.next/**',
    '**/.turbo/**',
];
// Nested copies only count with the exact names tools look for, so a file such
// as docs/agents.md (documentation about support agents) is not picked up.
const NESTED_EXACT_NAMES = new Set(['AGENTS.md', 'CLAUDE.md', 'GEMINI.md']);
const NESTED_LOWERCASE_NAMES = new Set(['agents.md', 'claude.md', 'gemini.md']);
function isUnwantedNestedMatch(relativePath) {
    const parts = relativePath.split('/');
    if (parts.length < 2)
        return false;
    const base = parts[parts.length - 1];
    const parent = parts[parts.length - 2];
    if (parent === '.claude')
        return false;
    return NESTED_LOWERCASE_NAMES.has(base.toLowerCase()) && !NESTED_EXACT_NAMES.has(base);
}
/**
 * Find context files under `repoPath`. Symlinked directories are not traversed,
 * so a link such as `.codex -> /` cannot walk the audit outside the repository.
 * Symlinked files are still returned; callers decide whether their targets are
 * safe to read.
 */
async function findContextFiles(repoPath, extraIgnore = []) {
    // `extraIgnore` comes from the audited repository's `.acdrc`. The schema
    // already rejects unsafe patterns; this covers callers of the library API.
    assertSafeIgnorePatterns(extraIgnore);
    const ignore = [...IGNORE_DIRS, ...extraIgnore];
    const entries = await glob(CONTEXT_PATTERNS, {
        cwd: repoPath,
        ignore,
        absolute: false,
        dot: true,
        caseSensitiveMatch: false,
        followSymbolicLinks: true,
        fs: glob_reportSymlinksWithoutFollowing,
        // Directories are left out; symlinks are reported as files.
        onlyFiles: true,
        expandDirectories: false,
    });
    return entries
        .filter((entry) => !isUnwantedNestedMatch(entry))
        .map((entry) => external_node_path_default().resolve(repoPath, entry))
        .sort();
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/fs/readTextFile.ts


/** Files above this size are never read into memory. */
const readTextFile_MAX_TEXT_FILE_BYTES = 1024 * 1024;
// O_NONBLOCK keeps open() from waiting on a FIFO with no writer; it has no
// effect on regular files. It is undefined on Windows, which has no FIFOs.
const readTextFile_READ_FLAGS = external_node_fs_namespaceObject.constants.O_RDONLY | (external_node_fs_namespaceObject.constants.O_NONBLOCK ?? 0);
/**
 * Read a regular file as UTF-8. The type and size are checked on the opened
 * handle, not the path, so the file cannot be swapped for a FIFO, device, or
 * larger file between the check and the read.
 */
async function readTextFile_readRegularFile(filePath, maxBytes = readTextFile_MAX_TEXT_FILE_BYTES) {
    let handle;
    try {
        handle = await promises_default().open(filePath, readTextFile_READ_FLAGS);
    }
    catch (error) {
        const code = error.code;
        if (code === 'ENOENT' || code === 'ENOTDIR')
            return { status: 'missing' };
        if (code === 'EISDIR')
            return { status: 'not-a-file' };
        return { status: 'error', error };
    }
    try {
        const stat = await handle.stat();
        if (!stat.isFile())
            return { status: 'not-a-file' };
        if (stat.size > maxBytes)
            return { status: 'too-large' };
        // Read at most the size seen above, even if the file grows meanwhile.
        const buffer = Buffer.alloc(stat.size);
        let offset = 0;
        while (offset < buffer.length) {
            const { bytesRead } = await handle.read(buffer, offset, buffer.length - offset, offset);
            if (bytesRead === 0)
                break;
            offset += bytesRead;
        }
        return { status: 'ok', content: buffer.subarray(0, offset).toString('utf-8') };
    }
    catch (error) {
        return { status: 'error', error };
    }
    finally {
        await handle.close();
    }
}
/**
 * Read a regular file as UTF-8. Returns '' for missing files, non-regular files
 * (FIFOs, devices, directories) and files larger than `maxBytes`, so a hostile
 * repository cannot hang or exhaust memory during an audit.
 */
async function fs_readTextFile_readTextFile(filePath, maxBytes = readTextFile_MAX_TEXT_FILE_BYTES) {
    const result = await readTextFile_readRegularFile(filePath, maxBytes);
    return result.status === 'ok' ? result.content : '';
}
async function getFileBytes(filePath) {
    try {
        const stat = await fs.stat(filePath);
        return stat.size;
    }
    catch {
        return 0;
    }
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/fs/safePath.ts


/** True when `target` is `root` itself or a descendant of it (lexical check). */
function fs_safePath_isWithin(root, target) {
    const rel = external_node_path_default().relative(root, target);
    if (rel === '')
        return true;
    return rel !== '..' && !rel.startsWith(`..${(external_node_path_default()).sep}`) && !external_node_path_default().isAbsolute(rel);
}
/**
 * Resolve symlinks in the longest existing prefix of `target` and re-append the
 * components that do not exist yet. Used to see where a write would really land
 * before any directories are created.
 */
function safePath_realpathOfExistingPrefix(target) {
    const missing = [];
    let current = path.resolve(target);
    for (;;) {
        try {
            return path.join(fs.realpathSync(current), ...missing);
        }
        catch {
            const parent = path.dirname(current);
            if (parent === current)
                return path.resolve(target);
            missing.unshift(path.basename(current));
            current = parent;
        }
    }
}
/** True when `target`, after resolving symlinks, stays inside `root`. */
function fs_safePath_isRealpathWithin(root, target) {
    return fs_safePath_isWithin(safePath_realpathOfExistingPrefix(root), safePath_realpathOfExistingPrefix(target));
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/audit/detectContextFiles.ts





function classifyFile(filePath) {
    const base = external_node_path_default().basename(filePath).toLowerCase();
    const rel = `/${filePath.replace(/\\/g, '/').toLowerCase()}`;
    if (base === 'agents.md' || base === 'agent.md')
        return 'agents';
    if (base === 'claude.md' || rel.includes('/.claude/'))
        return 'claude';
    if (base === 'gemini.md' || rel.includes('/.gemini/'))
        return 'gemini';
    if (base === '.cursorrules' || rel.includes('/.cursor/rules/'))
        return 'cursor';
    if (rel.includes('copilot-instructions') ||
        rel.includes('/.github/prompts/') ||
        rel.includes('/.github/chatmodes/') ||
        rel.includes('/.github/agents/')) {
        return 'copilot';
    }
    if (rel.includes('/.codex/'))
        return 'codex';
    if (base === '.windsurfrules' || rel.includes('/.windsurf/'))
        return 'windsurf';
    if (base === '.clinerules' || rel.includes('/.clinerules/'))
        return 'cline';
    if (base === '.roorules' || rel.includes('/.roo/'))
        return 'roo';
    if (rel.includes('/.kiro/'))
        return 'kiro';
    if (rel.includes('/.junie/'))
        return 'junie';
    if (base === '.augment-guidelines' || rel.includes('/.augment/'))
        return 'augment';
    if (rel.includes('/.continue/'))
        return 'continue';
    if (base === '.goosehints')
        return 'goose';
    if (rel.includes('prompts/') || rel.includes('/.github/instructions/'))
        return 'prompt';
    return 'unknown';
}
async function inspectFile(realRepo, filePath) {
    let realPath;
    try {
        realPath = await promises_default().realpath(filePath);
    }
    catch {
        return { bytes: 0, skipped: 'not-a-file' };
    }
    // Never stat or read link targets outside the audited directory: their size
    // and contents could otherwise leak into reports and CI logs.
    if (!fs_safePath_isWithin(realRepo, realPath))
        return { bytes: 0, skipped: 'outside-repo' };
    const stat = await promises_default().stat(realPath).catch(() => null);
    if (!stat?.isFile())
        return { bytes: 0, skipped: 'not-a-file' };
    if (stat.size > readTextFile_MAX_TEXT_FILE_BYTES)
        return { bytes: stat.size, skipped: 'too-large' };
    return { bytes: stat.size };
}
async function detectContextFiles(repoPath, ignoreFiles = []) {
    const filePaths = await findContextFiles(repoPath, ignoreFiles);
    const realRepo = await promises_default().realpath(repoPath).catch(() => external_node_path_default().resolve(repoPath));
    const results = [];
    for (const filePath of filePaths) {
        const { bytes, skipped } = await inspectFile(realRepo, filePath);
        results.push({
            path: external_node_path_default().relative(repoPath, filePath),
            kind: classifyFile(filePath),
            bytes,
            ...(skipped ? { skipped } : {}),
        });
    }
    return results;
}
// Files a tool loads as its main standing instructions. Nested AGENTS.md /
// CLAUDE.md files are scoped addenda, so the structural checks (safety,
// validation, final report) only apply to root-level files.
const PRIMARY_ROOT_FILES = new Set([
    'agents.md',
    'agent.md',
    'claude.md',
    'gemini.md',
    '.cursorrules',
    '.windsurfrules',
    '.clinerules',
    '.roorules',
    '.augment-guidelines',
    '.goosehints',
]);
const PRIMARY_FILES = new Set([
    '.claude/claude.md',
    '.github/copilot-instructions.md',
    '.gemini/styleguide.md',
    '.junie/guidelines.md',
]);
const PRIMARY_DIRECTORIES = [
    '.claude/rules/',
    '.cursor/rules/',
    '.windsurf/rules/',
    '.clinerules/',
    '.roo/rules',
    '.kiro/steering/',
    '.augment/rules/',
    '.continue/rules/',
];
/** `relativePath` is relative to the audited repository root. */
function isPrimaryInstructionFile(relativePath) {
    const lower = relativePath.replace(/\\/g, '/').replace(/^\.\//, '').toLowerCase();
    if (!lower.includes('/'))
        return PRIMARY_ROOT_FILES.has(lower);
    if (PRIMARY_FILES.has(lower))
        return true;
    return PRIMARY_DIRECTORIES.some((dir) => lower.startsWith(dir));
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/audit/checks/secrets.ts

// Generic assignments only count when the value looks like a credential:
// letters and digits, not a function call, variable, or env lookup.
function looksLikeCredential(value) {
    return /[A-Za-z]/.test(value) && /\d/.test(value) && !/[()[\]]/.test(value);
}
// Well-known credential formats. All are anchored on distinctive prefixes so
// ordinary prose does not match.
const SECRET_PATTERNS = [
    { label: 'AWS access key ID', pattern: /\b(?:AKIA|ASIA)[0-9A-Z]{16}\b/g, severity: 'high' },
    { label: 'GitHub token', pattern: /\bgh[pousr]_[A-Za-z0-9]{36,}\b/g, severity: 'high' },
    { label: 'GitHub token', pattern: /\bgithub_pat_[A-Za-z0-9_]{22,}\b/g, severity: 'high' },
    { label: 'Anthropic API key', pattern: /\bsk-ant-[A-Za-z0-9_-]{20,}/g, severity: 'high' },
    {
        label: 'OpenAI API key',
        pattern: /\bsk-(?!ant-)(?:proj-|svcacct-|admin-)?[A-Za-z0-9_-]{32,}/g,
        severity: 'high',
    },
    {
        label: 'Stripe secret key',
        pattern: /\b(?:sk|rk)_(?:live|test)_[A-Za-z0-9]{16,}\b/g,
        severity: 'high',
    },
    { label: 'Slack token', pattern: /\bxox[abposr]-[A-Za-z0-9-]{10,}/g, severity: 'high' },
    { label: 'Google API key', pattern: /\bAIza[0-9A-Za-z_-]{35}\b/g, severity: 'high' },
    { label: 'npm access token', pattern: /\bnpm_[A-Za-z0-9]{36}\b/g, severity: 'high' },
    {
        label: 'private key',
        pattern: /-----BEGIN (?:RSA |EC |DSA |OPENSSH |ENCRYPTED |PGP )?PRIVATE KEY(?: BLOCK)?-----/g,
        severity: 'high',
    },
    {
        label: 'credential assignment',
        pattern: /\b(?:password|passwd|secret|api[_-]?key|access[_-]?token|auth[_-]?token)\b\s*[:=]\s*["']?([^\s"'`,;]{8,})/gi,
        severity: 'medium',
        group: 1,
        looksReal: looksLikeCredential,
    },
];
// Values that are clearly documentation rather than real credentials.
const PLACEHOLDER = /example|sample|dummy|fake|placeholder|changeme|your[_-]|redacted|xxxx|\*{3}|<[^<>]*>|\$\{|\$[A-Z_]|process\.env|environ|getenv|secrets\.|\{\{/i;
/** Mask a credential, keeping a short prefix so the finding can be located. */
function maskSecret(value) {
    const visible = value.startsWith('-----') ? value.length : Math.min(4, value.length);
    return value.slice(0, visible) + '*'.repeat(Math.max(0, Math.min(value.length - visible, 12)));
}
// Masking replaces every occurrence of each value across the whole line, one
// pass per distinct value. A line with thousands of distinct credentials would
// make that grow with the square of its length, so past this many the line is
// masked word by word instead.
const MAX_VALUES_PER_LINE = 64;
// Every value that maskSecret hides part of is at least eight characters long
// and contains no whitespace, so it lies inside a run of eight or more
// non-space characters. Keeping only the first four characters of each such
// run hides at least what masking the values one by one would.
function maskEveryWord(line) {
    return line.replace(/\S{8,}/g, (word) => word.slice(0, 4) + '*'.repeat(Math.min(word.length - 4, 12)));
}
function scanLine(line) {
    // Insertion order is discovery order, which the masking below relies on.
    const values = new Set();
    const labels = [];
    let severity = null;
    for (const { label, pattern, severity: patternSeverity, group = 0, looksReal, } of SECRET_PATTERNS) {
        for (const match of line.matchAll(pattern)) {
            const value = match[group];
            if (!value || PLACEHOLDER.test(value))
                continue;
            if (looksReal && !looksReal(value))
                continue;
            values.add(value);
            if (!labels.includes(label))
                labels.push(label);
            if (severity !== 'high')
                severity = patternSeverity;
        }
    }
    if (values.size > MAX_VALUES_PER_LINE) {
        return { redacted: maskEveryWord(line), labels, severity };
    }
    let redacted = line;
    for (const value of values)
        redacted = redacted.split(value).join(maskSecret(value));
    return { redacted, labels, severity };
}
/**
 * Mask every credential the secrets check would report. Any text quoted from
 * an audited file goes through this before it reaches a finding, so a token
 * on a line flagged for another reason is not printed in plaintext.
 */
function redactSecrets(text) {
    return text
        .split('\n')
        .map((line) => scanLine(line).redacted)
        .join('\n');
}
function checkSecrets(filePath, content) {
    const issues = [];
    content.split('\n').forEach((line, idx) => {
        const { redacted: redactedLine, labels, severity } = scanLine(line);
        if (severity === null)
            return;
        issues.push({
            id: `secrets-${filePath}-${idx + 1}`,
            severity,
            category: 'secrets',
            file: filePath,
            line: idx + 1,
            // Evidence is built from the redacted line so reports never repeat the secret.
            evidence: toDisplayText(redactedLine.replace(/\s+/g, ' ').trim()).slice(0, 160),
            message: `Possible ${labels.join(', ')} in an agent instruction file`,
            recommendation: 'Remove the credential, rotate it, and reference it through an environment variable or secret manager instead. Instruction files are read by agents and often shared.',
        });
    });
    return issues;
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/audit/evidence.ts


const MAX_EVIDENCE_LENGTH = 160;
// Checks ask for evidence one finding at a time, often many times for the
// same file and line. Splitting the file once and masking each line once keeps
// the total work linear in the file's size.
let cachedContent;
let cachedLines = [];
const cachedEvidence = new Map();
function linesOf(content) {
    if (content !== cachedContent) {
        cachedContent = content;
        cachedLines = content.split('\n');
        cachedEvidence.clear();
    }
    return cachedLines;
}
function format(raw) {
    return toDisplayText(redactSecrets(raw).replace(/\s+/g, ' ').trim()).slice(0, MAX_EVIDENCE_LENGTH);
}
/**
 * One line of an audited file, ready to show as evidence. Credentials are
 * masked before the line is shortened, so truncation cannot cut a token down
 * to a prefix the patterns no longer recognize. `secrets` lists extra values
 * to mask that the patterns would not find, such as a configured env value.
 */
function getLineEvidence(content, line, secrets = []) {
    const lines = linesOf(content);
    if (secrets.length === 0) {
        let evidence = cachedEvidence.get(line);
        if (evidence === undefined) {
            evidence = format(lines[line - 1] ?? '');
            cachedEvidence.set(line, evidence);
        }
        return evidence;
    }
    // Caller values first: a pattern that masks part of one would leave the
    // rest unmatched by the split below.
    let raw = lines[line - 1] ?? '';
    // Each value is one pass over the line. Past the limit, everything after
    // the first four characters is hidden, which hides at least as much.
    if (secrets.length > MAX_VALUES_PER_LINE) {
        return format(raw.slice(0, 4) + '*'.repeat(Math.max(0, Math.min(raw.length - 4, 12))));
    }
    for (const secret of secrets) {
        if (secret)
            raw = raw.split(secret).join(maskSecret(secret));
    }
    return format(raw);
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/audit/checks/placeholderContent.ts



const TEMPLATE_MARKERS = [
    /\bTODO\b/i,
    /\bTBD\b/i,
    /lorem\s+ipsum/i,
    /<!--\s*describe/i,
    /<!--\s*list/i,
    /<!--\s*what\s+problem/i,
    /^list\s+paths\s+to\s+read\s+before\s+editing/im,
];
const SCOPED_MARKERS = [
    { pattern: /^in\s+scope\s*:/im, label: 'In scope:' },
    { pattern: /^out\s+of\s+scope\s*:/im, label: 'Out of scope:' },
];
function looksLikeBlankTemplate(content, matchLine) {
    const trimmed = matchLine.replace(/^(in|out of)\s+scope\s*:\s*/i, '').trim();
    return trimmed === '' || trimmed === '*' || trimmed === '-' || trimmed.length < 5;
}
function checkPlaceholderContent(filePath, content) {
    const issues = [];
    const lines = content.split('\n');
    for (const pattern of TEMPLATE_MARKERS) {
        lines.forEach((line, idx) => {
            if (pattern.test(line)) {
                issues.push({
                    id: `placeholder-${filePath}-${idx}`,
                    severity: 'medium',
                    category: 'placeholder-content',
                    file: filePath,
                    line: idx + 1,
                    evidence: getLineEvidence(content, idx + 1),
                    message: `Placeholder content detected: "${toDisplayText(redactSecrets(line).trim()).slice(0, 80)}"`,
                    recommendation: 'Replace placeholder content with real, project-specific instructions.',
                });
            }
        });
    }
    for (const { pattern, label } of SCOPED_MARKERS) {
        const match = content.match(pattern);
        if (match) {
            const lineIdx = lines.findIndex((l) => pattern.test(l));
            const matchLine = lineIdx >= 0 ? lines[lineIdx] : '';
            if (looksLikeBlankTemplate(content, matchLine)) {
                issues.push({
                    id: `placeholder-scope-${filePath}-${label}`,
                    severity: 'medium',
                    category: 'placeholder-content',
                    file: filePath,
                    line: lineIdx >= 0 ? lineIdx + 1 : undefined,
                    evidence: lineIdx >= 0 ? getLineEvidence(content, lineIdx + 1) : undefined,
                    message: `Template section "${label}" appears unfilled`,
                    recommendation: 'Fill in the scope section with actual project-specific scope boundaries.',
                });
            }
        }
    }
    return issues;
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/audit/checks/safetyBoundaries.ts
const SAFETY_PATTERNS = [
    /ask\s+before/i,
    /do\s+not\s+change/i,
    /forbidden/i,
    /without\s+approval/i,
    /\bauth\b/i,
    /authentication/i,
    /authorization/i,
    /billing/i,
    /security/i,
    /database/i,
    /migration/i,
    /\bschema\b/i,
    /secrets/i,
    /production/i,
];
function checkSafetyBoundaries(filePath, content) {
    const hasSafety = SAFETY_PATTERNS.some((p) => p.test(content));
    if (hasSafety)
        return [];
    return [
        {
            id: `safety-missing-${filePath}`,
            severity: 'medium',
            category: 'safety-boundaries',
            file: filePath,
            message: 'No safety-boundary language found',
            recommendation: 'Add explicit forbidden-change guidance covering areas like auth, billing, database, security, and production systems. Instruct the agent to ask before making changes to these areas.',
        },
    ];
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/audit/checks/validationCommands.ts
const VALIDATION_PATTERNS = [
    /\btest\b/i,
    /\blint\b/i,
    /typecheck/i,
    /\bbuild\b/i,
    /\bformat\b/i,
    // Validation tools whose names do not contain one of the words above.
    // Bare words such as "check" or "run" are not enough on their own.
    /\b(?:pytest|unittest|mypy|pyright|ruff|flake8|tox)\b/i,
    /\bgo\s+vet\b/i,
    /\b(?:golangci-lint|staticcheck)\b/i,
    /\bcargo\s+(?:check|clippy|fmt|nextest)\b/i,
    /\bmake\s+(?:check|verify|ci)\b/i,
    /\b(?:mvnw?|gradlew?)\s+(?:verify|check)\b/i,
];
function checkValidationCommands(filePath, content) {
    const hasValidation = VALIDATION_PATTERNS.some((p) => p.test(content));
    if (hasValidation)
        return [];
    return [
        {
            id: `validation-missing-${filePath}`,
            severity: 'medium',
            category: 'validation-commands',
            file: filePath,
            message: 'No validation commands mentioned',
            recommendation: 'Add guidance on running tests, lint, typecheck, or build commands (for example `pnpm test`, `pytest`, `go test ./...`, or `cargo test`) so agents can verify their work before finishing.',
        },
    ];
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/audit/checks/finalReporting.ts
// Markdown headings start a line (after up to three spaces) with one to six
// `#`. Anchoring them also keeps a long run of `#` from being retried at every
// position, which made the earlier unanchored `#+` patterns quadratic.
const STRONG_SECTION_PATTERNS = [
    /^[ \t]{0,3}#{1,6}[ \t]*final\s+report/im,
    /^[ \t]{0,3}#{1,6}[ \t]*completion\s+report/im,
    /^[ \t]{0,3}#{1,6}[ \t]*handoff/im,
];
const STRONG_FIELD_PATTERNS = [
    /files\s+changed/i,
    /commands\s+run/i,
    /tests\s+(added|updated|run|result|results)/i,
    /known\s+limitations/i,
    /recommended\s+next\s+steps?/i,
];
// Generic headings ("## Reporting", "## When you are done") are only guidance
// when their section asks for something to report, so an empty heading does
// not count. The heading must be the whole title: "## Reporting bugs" is not.
// The trailing `\s*(?::\s*)?` has one way to split spaces, so a heading padded
// with spaces is matched in linear time.
const REPORT_HEADING = /^#{1,6}\s+(?:reporting|report(?:ing)?\s+back|what\s+to\s+report|(?:when|after)\s+you(?:'re|\s+are)?\s+(?:done|finished)|(?:when|after)\s+you\s+finish|summary\s+of\s+(?:your\s+)?(?:changes|work)|wrap(?:ping)?[\s-]up)\s*(?::\s*)?$/i;
const HEADING = /^#{1,6}\s/;
const YOU = String.raw `(?:you(?:'ve|\s+have)?\s+)?`;
// What a report asks for, grouped so that two phrasings of one field ("files
// changed", "files you modified") count once.
const REPORT_FIELDS = [
    [
        /files\s+changed/i,
        new RegExp(String.raw `\bfiles\s+(?:that\s+)?${YOU}(?:changed|modified|touched|edited|created)\b`, 'i'),
        /\b(?:changed|modified|touched|edited)\s+files\b/i,
        /\bwhat\s+you\s+changed\b/i,
    ],
    [
        /commands\s+run/i,
        new RegExp(String.raw `\bcommands\s+(?:that\s+)?${YOU}(?:ran|run|executed|used)\b`, 'i'),
    ],
    [
        /tests\s+(added|updated|run|result|results)/i,
        /\btest\s+results?\b/i,
        new RegExp(String.raw `\btests\s+(?:that\s+)?${YOU}(?:ran|run|added|wrote|written|updated)\b`, 'i'),
        /\b(?:results|output)\s+of\s+(?:the\s+)?(?:tests|checks|commands)\b/i,
        /\band\s+their\s+(?:results|output)\b/i,
    ],
    [
        /known\s+limitations/i,
        /\b(?:anything|everything|work|items?|tasks?)\s+(?:(?:that\s+)?(?:is|was|you)\s+)?(?:left\s+)?(?:undone|unfinished|incomplete|outstanding|not\s+done)\b/i,
        /\banything\s+(?:you\s+)?(?:skipped|left\s+out)\b/i,
        // "Open questions" or "follow-ups" alone are often a project's own terms
        // (an open questions page, a follow-ups feature), so they need a
        // determiner that makes them items of the report.
        /\b(?:any|remaining|unresolved)\s+open\s+(?:items|questions|issues|risks)\b/i,
        /\bremaining\s+(?:work|issues|risks|todos?)\b/i,
    ],
    [
        /recommended\s+next\s+steps?/i,
        /\b(?:suggested|recommended|any)\s+next\s+steps\b/i,
        /\b(?:any|remaining|suggested)\s+follow[- ]?ups?\b/i,
    ],
];
// A single field is enough when the same line places it in the final message:
// "In your final message, list the files you changed."
const REPORT_ANCHOR = /\b(?:final|closing|completion|handoff)\s+(?:report|summary|message|response|note)\b|\bwhen\s+you(?:'re|\s+are)?\s+(?:done|finished)\b|\bwhen\s+you\s+finish\b|\breport\s+back\b/i;
const REPORT_VERB = /\b(?:report|list|summari[sz]e|include|mention|describe|state|tell)\b/i;
function fieldCount(text) {
    return REPORT_FIELDS.filter((group) => group.some((p) => p.test(text))).length;
}
function hasReportingSection(lines) {
    for (let i = 0; i < lines.length; i++) {
        if (!REPORT_HEADING.test(lines[i]))
            continue;
        let end = i + 1;
        while (end < lines.length && !HEADING.test(lines[end]))
            end++;
        if (fieldCount(lines.slice(i + 1, end).join('\n')) > 0)
            return true;
    }
    return false;
}
function checkFinalReporting(filePath, content) {
    const hasStrongSection = STRONG_SECTION_PATTERNS.some((p) => p.test(content));
    if (hasStrongSection)
        return [];
    const matchedFields = STRONG_FIELD_PATTERNS.filter((p) => p.test(content));
    if (matchedFields.length >= 2)
        return [];
    // Plain-word fields count when they are asked for together, in one
    // paragraph, so terms scattered through a long file do not add up.
    if (content.split(/\n\s*\n/).some((paragraph) => fieldCount(paragraph) >= 2))
        return [];
    const lines = content.split('\n');
    if (hasReportingSection(lines))
        return [];
    if (lines.some((line) => REPORT_ANCHOR.test(line) && REPORT_VERB.test(line) && fieldCount(line) > 0)) {
        return [];
    }
    return [
        {
            id: `reporting-missing-${filePath}`,
            severity: 'low',
            category: 'final-reporting',
            file: filePath,
            message: 'No final reporting guidance found',
            recommendation: 'Add instructions telling the agent what to include in its final report: files changed, commands run, test results, and known limitations.',
        },
    ];
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/audit/negation.ts
// Words that negate a directive when they appear earlier in the same clause:
// "Never skip tests", "Do not bypass auth", "Avoid force-pushing".
const NEGATION = /\b(?:not|never|no|don'?t|doesn'?t|cannot|can'?t|mustn'?t|shouldn'?t|won'?t|avoid|without|forbid(?:den)?|prohibit(?:ed)?|disallow(?:ed)?|refuse)\b/i;
// Punctuation and connectives that start a new clause, so a negation before
// them does not carry over: "Don't worry about lint, just skip tests".
const CLAUSE_BREAK = /[.;!?:]|\b(?:but|however|instead|then|just|otherwise|unless)\b/i;
/**
 * True when the text before `index` on `line`, within the same clause,
 * contains a negation. Used so that safety guidance such as "Never skip
 * tests" is not reported as the risky instruction it forbids.
 */
function isNegated(line, index) {
    const clauses = line.slice(0, index).split(CLAUSE_BREAK);
    const clause = clauses[clauses.length - 1] ?? '';
    return NEGATION.test(clause);
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/audit/lineContext.ts

function collectSpans(line, pattern) {
    const global = new RegExp(pattern.source, `${pattern.flags.replace('g', '')}g`);
    const starts = [];
    const ends = [];
    for (let m = global.exec(line); m !== null; m = global.exec(line)) {
        starts.push(m.index);
        ends.push(m.index + m[0].length);
        if (m[0].length === 0)
            global.lastIndex++;
    }
    return { starts, ends };
}
/** Index of the first value greater than or equal to `target`, or `values.length`. */
function lowerBound(values, target) {
    let lo = 0;
    let hi = values.length;
    while (lo < hi) {
        const mid = (lo + hi) >>> 1;
        if (values[mid] < target)
            lo = mid + 1;
        else
            hi = mid;
    }
    return lo;
}
const WORD = /\w/;
const WHOLE_BREAK = new RegExp(`^(?:${CLAUSE_BREAK.source})$`, 'i');
const WHOLE_NEGATION = new RegExp(`^(?:${NEGATION.source})$`, 'i');
// Longer than any break or negation word, so a longer partial word is neither.
const MAX_KEYWORD_LENGTH = 16;
// A straight quote opens after the start of the sentence, a space, or an
// opening bracket, and closes before the end, a space, or punctuation. An
// inch mark such as 27" therefore neither opens nor closes a quote.
const OPENS_AFTER = /[\s([{]/;
const CLOSES_BEFORE = /[\s.,;:!?)\]}]/;
// List markers, emphasis, and closing punctuation around a quoted sentence.
const LEADING_NOISE = /[\s>*+_~`-]/;
const TRAILING_NOISE = /[\s.!?*_~`)\]]/;
// A short label before a quoted sentence ("Rule: "…"") is part of the rule.
const LABEL = /^[\w ]{1,40}:/;
const WORD_OR_APOSTROPHE = /[\w']/;
function quotedRanges(line, start, end) {
    const ranges = [];
    let straightOpen = -1;
    let curlyOpen = -1;
    for (let i = start; i < end; i++) {
        const ch = line[i];
        if (ch === '“' && curlyOpen === -1)
            curlyOpen = i;
        else if (ch === '”' && curlyOpen !== -1) {
            ranges.push({ start: curlyOpen, end: i });
            curlyOpen = -1;
        }
        else if (ch === '"') {
            const before = i === start ? ' ' : line[i - 1];
            const after = i + 1 >= end ? ' ' : line[i + 1];
            if (straightOpen === -1 && OPENS_AFTER.test(before))
                straightOpen = i;
            else if (straightOpen !== -1 && CLOSES_BEFORE.test(after)) {
                ranges.push({ start: straightOpen, end: i });
                straightOpen = -1;
            }
        }
    }
    // A quote that spans the whole sentence is the sentence itself. Trimmed
    // with loops: a trailing-class regex is quadratic on long whitespace runs.
    let first = start;
    while (first < end && LEADING_NOISE.test(line[first]))
        first++;
    const label = LABEL.exec(line.slice(first, Math.min(end, first + 42)));
    if (label) {
        first += label[0].length;
        while (first < end && LEADING_NOISE.test(line[first]))
            first++;
    }
    let last = end - 1;
    while (last > first && TRAILING_NOISE.test(line[last]))
        last--;
    return ranges.filter((r) => !(r.start <= first && r.end >= last));
}
/**
 * Facts about one line, gathered in one pass, so that checking any number of
 * matches on it costs a binary search each rather than a rescan of the line.
 * Hostile lines with many matches therefore stay linear in time, with no caps
 * or windows that padding could push real advice past.
 */
function createLineContext(line) {
    const breaks = collectSpans(line, CLAUSE_BREAK);
    const negations = collectSpans(line, NEGATION);
    const sentenceEnds = collectSpans(line, /[.!?](?=\s|$)/);
    const quotedBySentence = new Map();
    const sentenceAt = (index) => {
        const next = lowerBound(sentenceEnds.starts, index);
        return {
            start: next > 0 ? sentenceEnds.ends[next - 1] : 0,
            end: next < sentenceEnds.ends.length ? sentenceEnds.ends[next] : line.length,
        };
    };
    return {
        negatedAt(index) {
            // `isNegated` cuts the line at `index`, which ends a word there. When
            // the match starts inside a word, the part before it can be a whole
            // break or negation word in that view: "then|skip", "not|skip".
            if (index > 0 && WORD.test(line[index - 1]) && WORD.test(line[index] ?? '')) {
                let wordStart = index;
                while (wordStart > 0 &&
                    index - wordStart <= MAX_KEYWORD_LENGTH &&
                    // Apostrophes belong to the word too, as in "don't|skip".
                    WORD_OR_APOSTROPHE.test(line[wordStart - 1])) {
                    wordStart--;
                }
                const partial = line.slice(wordStart, index);
                if (partial.length <= MAX_KEYWORD_LENGTH) {
                    if (WHOLE_BREAK.test(partial))
                        return false;
                    if (WHOLE_NEGATION.test(partial))
                        return true;
                }
            }
            // The clause starts after the last break that ends at or before `index`.
            const lastBreak = lowerBound(breaks.ends, index + 1) - 1;
            const clauseStart = lastBreak >= 0 ? breaks.ends[lastBreak] : 0;
            const first = lowerBound(negations.starts, clauseStart);
            return first < negations.starts.length && negations.ends[first] <= index;
        },
        quotedAt(index) {
            const { start, end } = sentenceAt(index);
            let quoted = quotedBySentence.get(start);
            if (!quoted) {
                const ranges = quotedRanges(line, start, end).sort((a, b) => a.start - b.start);
                const maxEnds = [];
                for (const r of ranges)
                    maxEnds.push(Math.max(r.end, maxEnds[maxEnds.length - 1] ?? -1));
                quoted = { starts: ranges.map((r) => r.start), maxEnds };
                quotedBySentence.set(start, quoted);
            }
            const before = lowerBound(quoted.starts, index) - 1;
            return before >= 0 && quoted.maxEnds[before] > index;
        },
        sentenceAt,
    };
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/audit/skipValidation.ts

const QUALIFIER = String.raw `(?:(?:slow|flaky|failing|long[- ]running|unit|integration|e2e|end-to-end)\s+)?`;
const TESTS = String.raw `(?:tests?|test\s+suite|specs)`;
// Advice that names the tests: "skip the tests", "skip slow tests", "tests can
// be skipped", "rely on CI instead of running them".
const DIRECT = [
    new RegExp(String.raw `\bskip(?:ping)?\s+(?:the\s+|all\s+|any\s+|your\s+)?${QUALIFIER}${TESTS}\b`, 'gi'),
    new RegExp(String.raw `\b${TESTS}\s+(?:can|may|could|should)\s+be\s+skipped\b`, 'gi'),
    /\brely\s+on\s+(?:the\s+)?CI\s+(?:instead|rather)\b/gi,
];
// "Skip them" counts only when the same sentence is about tests:
// "If the tests are slow, skip them", "Skip them if testing takes too long".
const PRONOUN = /\bskip(?:ping)?\s+(?:them|it|those|these)\b/gi;
const TEST_CONTEXT = /\btest(?:s|ing)?\b|\btest\s+suite\b|\bspecs?\b/i;
// A narrow, explicit scope is an exception rather than permission to stop
// validating: "skip the e2e tests for documentation-only changes".
const SCOPED_EXCEPTION = /\b(?:docs?|documentation|readme|comments?|typo)[- ]only\b/i;
const skipValidation_MAX_EVIDENCE_LENGTH = 160;
/**
 * The first place in `line` that tells an agent to skip tests or leave them
 * to CI, or null. Negated advice ("Never skip tests"), quoted examples,
 * advice about something other than tests ("If the linter is slow, skip
 * it"), and narrow documentation-only exceptions do not count. Every match is
 * examined, each with a lookup into one pass over the line, so padding a line
 * with negated mentions neither hides later advice nor costs more than linear
 * time.
 */
function findSkipValidation(line) {
    const candidates = [];
    for (const pattern of DIRECT) {
        for (const m of line.matchAll(pattern))
            candidates.push({ index: m.index, needsTestContext: false });
    }
    for (const m of line.matchAll(PRONOUN))
        candidates.push({ index: m.index, needsTestContext: true });
    if (candidates.length === 0)
        return null;
    candidates.sort((a, b) => a.index - b.index);
    const context = createLineContext(line);
    const verdicts = new Map();
    for (const { index, needsTestContext } of candidates) {
        const { start, end } = context.sentenceAt(index);
        let verdict = verdicts.get(start);
        if (!verdict) {
            const sentence = line.slice(start, end);
            verdict = {
                aboutTests: TEST_CONTEXT.test(sentence),
                exception: SCOPED_EXCEPTION.test(sentence),
            };
            verdicts.set(start, verdict);
        }
        if (verdict.exception || (needsTestContext && !verdict.aboutTests))
            continue;
        if (context.quotedAt(index) || context.negatedAt(index))
            continue;
        const sentence = line.slice(start, Math.min(end, start + skipValidation_MAX_EVIDENCE_LENGTH * 4));
        return { index, sentence: sentence.replace(/^[\s>*+-]+/, '').trim() };
    }
    return null;
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/audit/checks/riskyLanguage.ts



const SKIP_TESTS_LABEL = 'skip tests';
// Matches are ignored when negated earlier in the same clause ("Never skip
// tests", "Do not force push"), so only permissive wording is reported.
const HIGH_RISK_PATTERNS = [
    { pattern: /skip\s+tests/i, label: SKIP_TESTS_LABEL },
    { pattern: /ignore\s+failing\s+tests/i, label: 'ignore failing tests' },
    { pattern: /disable\s+tests/i, label: 'disable tests' },
    {
        pattern: /(?:delete|remove)\s+(?:the\s+)?failing\s+tests/i,
        label: 'delete failing tests',
    },
    { pattern: /bypass\s+auth/i, label: 'bypass auth' },
    { pattern: /disable\s+auth/i, label: 'disable auth' },
    { pattern: /ignore\s+security/i, label: 'ignore security' },
    { pattern: /commit\s+secrets/i, label: 'commit secrets' },
    { pattern: /hardcode\s+(?:the\s+)?api\s+keys?/i, label: 'hardcode api key' },
    { pattern: /--no-verify\b/i, label: '--no-verify' },
    {
        pattern: /\bforce[\s-]push|\bpush\s+(?:--force\b|-f\b)/i,
        label: 'force push',
    },
    {
        pattern: /--dangerously-skip-permissions|\bbypassPermissions\b|\byolo\s+mode\b/i,
        label: 'skip agent permission prompts',
    },
    {
        pattern: /\b(?:disable|skip|turn\s+off)\s+(?:ssl|tls|certificate)\s+(?:verification|checks?)/i,
        label: 'disable TLS verification',
    },
    { pattern: /NODE_TLS_REJECT_UNAUTHORIZED\s*=\s*['"]?0/, label: 'disable TLS verification' },
];
const MEDIUM_RISK_PATTERNS = [
    { pattern: /make\s+product\s+decisions/i, label: 'make product decisions' },
    { pattern: /decide\s+the\s+strategy/i, label: 'decide the strategy' },
    { pattern: /refactor\s+everything/i, label: 'refactor everything' },
    { pattern: /rewrite\s+the\s+app/i, label: 'rewrite the app' },
    { pattern: /delete\s+unused\s+code/i, label: 'delete unused code' },
    {
        pattern: /\b(?:commit|push)\s+directly\s+to\s+(?:main|master)\b/i,
        label: 'push directly to main',
    },
    { pattern: /merge\s+without\s+(?:a\s+)?review/i, label: 'merge without review' },
    {
        pattern: /\b(?:curl|wget)\b[^|\n]*\|\s*(?:sudo\s+)?(?:ba|z)?sh\b/i,
        label: 'pipe a remote script to the shell',
    },
    { pattern: /chmod\s+(?:-R\s+)?777\b/i, label: 'chmod 777' },
    {
        pattern: /\b(?:add|use)\s+(?:an?\s+)?(?:@ts-ignore|@ts-nocheck|eslint-disable)/i,
        label: 'suppress type or lint errors',
    },
    {
        pattern: /\b(?:disable|turn\s+off)\s+(?:the\s+)?(?:linter|lint(?:ing)?|eslint|type\s*check(?:ing)?)/i,
        label: 'disable lint or type checks',
    },
];
const HIGH_RECOMMENDATION = 'Remove language that lets agents bypass validation, security, or testing. Agents should never skip tests, bypass auth, or commit secrets.';
const MEDIUM_RECOMMENDATION = 'Avoid open-ended or unsafe instructions. Be specific about what is in and out of scope, and route risky operations through human review.';
function findRisky(filePath, content, patterns, severity) {
    const issues = [];
    const lines = content.split('\n');
    const reported = new Set();
    const report = (idx, label) => {
        // Several phrasings of one instruction on a line are one issue.
        const key = `${idx}:${label}`;
        if (reported.has(key))
            return;
        reported.add(key);
        issues.push({
            id: `risky-${severity}-${filePath}-${idx}-${label}`,
            severity,
            category: 'risky-language',
            file: filePath,
            line: idx + 1,
            evidence: getLineEvidence(content, idx + 1),
            message: `Risky instruction: "${label}"`,
            recommendation: severity === 'high' ? HIGH_RECOMMENDATION : MEDIUM_RECOMMENDATION,
        });
    };
    // Built once per line that has a match, so every match on a long line is
    // checked with a lookup instead of a rescan.
    const contexts = new Map();
    const contextFor = (idx) => {
        let context = contexts.get(idx);
        if (!context) {
            context = createLineContext(lines[idx]);
            contexts.set(idx, context);
        }
        return context;
    };
    for (const { pattern, label } of patterns) {
        const global = new RegExp(pattern.source, `${pattern.flags}g`);
        lines.forEach((line, idx) => {
            for (const m of line.matchAll(global)) {
                if (!contextFor(idx).negatedAt(m.index)) {
                    report(idx, label);
                    break;
                }
            }
        });
    }
    // Advice to skip tests in other words: "If the tests are slow, skip them",
    // "Skip the tests when they are slow", "rely on CI instead".
    if (severity === 'high') {
        lines.forEach((line, idx) => {
            if (findSkipValidation(line) !== null)
                report(idx, SKIP_TESTS_LABEL);
        });
    }
    return issues;
}
function checkRiskyLanguage(filePath, content) {
    return [
        ...findRisky(filePath, content, HIGH_RISK_PATTERNS, 'high'),
        ...findRisky(filePath, content, MEDIUM_RISK_PATTERNS, 'medium'),
    ];
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/audit/checks/commandAlignment.ts


// Package-manager commands that are not package.json scripts.
const BUILTINS = {
    pnpm: new Set('add i install remove rm uninstall un update up upgrade exec dlx create init import link ln unlink list ls outdated why audit publish pack version config store prune rebuild rb approve-builds self-update setup env fetch patch patch-commit dedupe licenses deploy doctor root bin help'.split(' ')),
    npm: new Set('i install ci add remove rm uninstall un update up upgrade exec x init create link unlink ls list outdated why audit publish pack version config cache prune rebuild dedupe doctor fund help view info login logout whoami'.split(' ')),
    yarn: new Set('add i install remove upgrade up why dlx exec info init pack publish config cache set node plugin bin constraints dedupe explain npm patch patch-commit rebuild search stage link unlink version import'.split(' ')),
    bun: new Set('i install add a remove rm update x create c init pm link unlink upgrade outdated publish patch build test repl exec audit info why'.split(' ')),
};
// npm only resolves these as script shorthands; everything else needs `npm run`.
const NPM_SHORTHAND_SCRIPTS = new Set(['test', 'start', 'stop', 'restart']);
// Flags that take a value, so the next token is not the command.
const VALUE_FLAGS = new Set(['-C', '--dir', '--filter', '-F', '--prefix', '--workspace', '--cwd']);
// Flags and subcommands that target another package in a workspace: the
// script lives in that package's package.json, not the root one.
const WORKSPACE_TARGETING = new Set([
    '-C',
    '--dir',
    '--filter',
    '-F',
    '-r',
    '--recursive',
    '--prefix',
    '--workspace',
    '-w',
    '--workspaces',
    '--cwd',
    'workspace',
    'workspaces',
]);
// Words that follow a package manager's name in prose ("use pnpm for
// everything") rather than naming a script.
const PROSE_WORDS = new Set('a an and as at by for from if in instead is it not of on only or so than that the then to via when which will with commands scripts version versions workspace packages'.split(' '));
const TOKEN = /^[\w:.@/-]+$/;
// A version after a package manager's name ("pnpm 11", "npm v10.x") is prose
// about which release to use, not a script.
const VERSION = /^v?\d+(?:\.(?:\d+|x))*$/i;
function flagName(token) {
    return token.split('=')[0];
}
function parseInvocation(tokens) {
    let i = 0;
    const nextPositional = () => {
        while (i < tokens.length) {
            const token = tokens[i++];
            if (!token.startsWith('-'))
                return token;
            if (VALUE_FLAGS.has(token))
                i++;
        }
        return undefined;
    };
    let command = nextPositional();
    if (!command)
        return null;
    const viaRun = command === 'run' || command === 'run-script';
    if (viaRun) {
        command = nextPositional();
        if (!command)
            return null;
    }
    // npm and pnpm read these flags anywhere before `--`, including after the script name.
    const flags = tokens.slice(0, tokens.includes('--') ? tokens.indexOf('--') : tokens.length);
    const workspaceScoped = WORKSPACE_TARGETING.has(command) || flags.some((t) => WORKSPACE_TARGETING.has(flagName(t)));
    return { command, viaRun, workspaceScoped };
}
// Text after a package manager's name up to the next command boundary: another
// package manager, a shell separator, or the end of an inline code span.
function commandSegment(rest) {
    const end = rest.search(/[`'"]|;|&&|\|\||\||\b(?:pnpm|npm|yarn|bun)\b/);
    const segment = end === -1 ? rest : rest.slice(0, end);
    return segment
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 8)
        .map((token) => token.replace(/[.,;:)!?]+$/, ''));
}
function isCodeLine(line, inFence) {
    return inFence || /^\s*(?:\$\s+)?(?:pnpm|npm|yarn|bun|make)\b/.test(line);
}
/**
 * Extract package-manager script references. Built-in commands, flags,
 * workspace-targeted invocations (whose scripts live in another package), and
 * prose such as "use pnpm for everything" are not reported as scripts.
 */
function extractCommands(content) {
    const results = [];
    const seen = new Set();
    content.split('\n').forEach((line, idx) => {
        for (const match of line.matchAll(/\b(pnpm|npm|yarn|bun)\b/g)) {
            const pm = match[1];
            const after = line.slice(match.index + match[0].length);
            // `pnpm@9.12.0` or `npm@latest` names a release, not a command.
            if (after.startsWith('@'))
                continue;
            const tokens = commandSegment(after);
            const parsed = parseInvocation(tokens);
            if (!parsed || parsed.workspaceScoped)
                continue;
            const { command, viaRun } = parsed;
            if (!TOKEN.test(command) || PROSE_WORDS.has(command.toLowerCase()))
                continue;
            if (!viaRun) {
                if (BUILTINS[pm].has(command) || VERSION.test(command))
                    continue;
                if (pm === 'npm' && !NPM_SHORTHAND_SCRIPTS.has(command))
                    continue;
            }
            const key = `${command}:${idx + 1}`;
            if (seen.has(key))
                continue;
            seen.add(key);
            results.push({
                script: command,
                raw: `${pm} ${tokens.join(' ')}`.trim(),
                line: idx + 1,
            });
        }
    });
    return results;
}
function checkCommandAlignment(filePath, content, scripts) {
    return extractCommands(content)
        .filter((cmd) => !Object.hasOwn(scripts, cmd.script))
        .map((cmd) => ({
        id: `command-alignment-${filePath}-${cmd.line}-${cmd.script}`,
        severity: 'medium',
        category: 'command-alignment',
        file: filePath,
        line: cmd.line,
        evidence: getLineEvidence(content, cmd.line),
        message: `Instruction references missing package script: "${cmd.script}"`,
        recommendation: `Update the instruction file or add package.json script "${cmd.script}".`,
    }));
}
// Commands that install or change dependencies, and so write a lockfile.
const INSTALLS = {
    pnpm: new Set('add i install remove rm uninstall un update up upgrade dedupe import link ln unlink prune rebuild rb fetch'.split(' ')),
    npm: new Set('i install ci add remove rm uninstall un update up upgrade dedupe link unlink prune rebuild'.split(' ')),
    yarn: new Set('add i install remove upgrade up dedupe import link unlink'.split(' ')),
    bun: new Set('i install add a remove rm update link unlink'.split(' ')),
};
// Text just before a command that offers it as an alternative or names it
// only to rule it out: "instead of `npm install`", "(not `yarn`)", "or `npm test`".
const ALTERNATIVE_BEFORE = /(?:\binstead\s+of|\brather\s+than|\bunlike|\bnot|\bvs\.?|\bversus|\bover|\bfrom|\bor|\be\.g\.|\bsuch\s+as)\s*[`'"(]*\s*$/i;
const MAX_ALTERNATIVE_CONTEXT = 40;
// Bounds that keep the work per line linear on hostile input: only the first
// matches on a line are examined, and negation is judged from a window
// before each match rather than everything before it.
const MAX_INVOCATIONS_PER_LINE = 64;
const MAX_NEGATION_CONTEXT = 200;
// A clause scoped to another manager: "If you use yarn, run `yarn install`".
function scopedToManager(line, pm) {
    return new RegExp(`\\bif\\s+you(?:'re|\\s+are)?\\s+(?:use|using|prefer)\\s+${pm}\\b|\\b(?:for|with)\\s+${pm}(?:\\s+users)?\\s*[:,]`, 'i').test(line);
}
/**
 * Package-manager invocations that commit to a manager: installs and script
 * runs. Version specs (`pnpm@9.12.0`), global installs, registry and one-off
 * commands (`npm publish`, `pnpm dlx`), negated or alternative mentions, and
 * prose are skipped. At most one invocation per manager and line.
 */
function extractPackageManagerInvocations(content) {
    const results = [];
    content.split('\n').forEach((line, idx) => {
        const seen = new Set();
        const scoped = new Map();
        let examined = 0;
        for (const match of line.matchAll(/(?<![\w@./-])(pnpm|npm|yarn|bun)(?=[ \t])/g)) {
            if (++examined > MAX_INVOCATIONS_PER_LINE)
                break;
            const pm = match[1];
            if (seen.has(pm))
                continue;
            const tokens = commandSegment(line.slice(match.index + match[0].length));
            const parsed = parseInvocation(tokens);
            if (!parsed)
                continue;
            const { command, viaRun } = parsed;
            if (!TOKEN.test(command) || command === 'global')
                continue;
            if (tokens.some((t) => t === '-g' || t === '--global'))
                continue;
            const commits = INSTALLS[pm].has(command) ||
                viaRun ||
                (!BUILTINS[pm].has(command) &&
                    !VERSION.test(command) &&
                    !PROSE_WORDS.has(command.toLowerCase()) &&
                    (pm !== 'npm' || NPM_SHORTHAND_SCRIPTS.has(command)));
            if (!commits)
                continue;
            const before = line.slice(Math.max(0, match.index - MAX_ALTERNATIVE_CONTEXT), match.index);
            if (ALTERNATIVE_BEFORE.test(before))
                continue;
            const window = line.slice(Math.max(0, match.index - MAX_NEGATION_CONTEXT), match.index);
            if (isNegated(window, window.length))
                continue;
            if (!scoped.has(pm))
                scoped.set(pm, scopedToManager(line, pm));
            if (scoped.get(pm))
                continue;
            seen.add(pm);
            results.push({ manager: pm, raw: `${pm} ${tokens.join(' ')}`.trim(), line: idx + 1 });
        }
    });
    return results;
}
const MAX_LISTED_LINES = 10;
/**
 * One issue per file and package manager the repository does not use,
 * anchored at its first use, so a block of `npm run` lines in a pnpm
 * repository is one mistake to fix rather than one per line.
 */
function checkPackageManagerAlignment(filePath, content, expected) {
    if (expected === null)
        return [];
    const linesByManager = new Map();
    for (const cmd of extractPackageManagerInvocations(content)) {
        if (cmd.manager === expected.manager)
            continue;
        linesByManager.set(cmd.manager, [...(linesByManager.get(cmd.manager) ?? []), cmd.line]);
    }
    return [...linesByManager].map(([manager, lines]) => {
        const listed = lines.slice(0, MAX_LISTED_LINES).join(', ');
        const more = lines.length > MAX_LISTED_LINES ? ` and ${lines.length - MAX_LISTED_LINES} more` : '';
        const where = lines.length > 1 ? ` on lines ${listed}${more}` : '';
        return {
            id: `command-alignment-pm-${filePath}-${manager}`,
            severity: 'medium',
            category: 'command-alignment',
            file: filePath,
            line: lines[0],
            evidence: getLineEvidence(content, lines[0]),
            message: `Instruction uses ${manager}, but this repository uses ${expected.manager}`,
            recommendation: `Use ${expected.manager} commands instead of ${manager}${where} (${expected.evidence.join(', ')}). ` +
                `Running ${manager} here can write a second lockfile and install different dependency versions.`,
        };
    });
}
function checkCommandsWithoutPackageJson(filePath, content) {
    if (extractCommands(content).length === 0)
        return [];
    return [
        {
            id: `command-alignment-no-pkgjson-${filePath}`,
            severity: 'low',
            category: 'command-alignment',
            file: filePath,
            message: 'Instruction references package manager commands but no package.json was found',
            recommendation: 'Ensure a package.json exists at the repo root so command references can be validated.',
        },
    ];
}
/** `make` targets referenced in the text, with their line numbers. */
function extractMakeTargets(content) {
    const results = [];
    let inFence = false;
    content.split('\n').forEach((line, idx) => {
        if (/^\s*(```|~~~)/.test(line)) {
            inFence = !inFence;
            return;
        }
        if (!isCodeLine(line, inFence) && !line.includes('`make '))
            return;
        for (const match of line.matchAll(/\bmake((?:\s+[^\s`'"]+){1,4})/g)) {
            const tokens = match[1].trim().split(/\s+/);
            let i = 0;
            while (i < tokens.length && tokens[i].startsWith('-')) {
                i += ['-C', '-f', '--directory', '--file'].includes(tokens[i]) ? 2 : 1;
            }
            const target = tokens[i];
            if (!target || target.includes('=') || !TOKEN.test(target))
                continue;
            if (tokens.slice(0, i).some((t) => t === '-C' || t === '--directory'))
                continue;
            results.push({ script: target, raw: match[0].trim(), line: idx + 1 });
        }
    });
    return results;
}
/** Targets defined in a Makefile (`name:` rules, excluding special targets and assignments). */
function parseMakeTargets(makefile) {
    const targets = new Set();
    for (const line of makefile.split('\n')) {
        // Names and the blanks between them cannot overlap, which keeps matching
        // linear on long lines of blanks that end without a colon.
        const match = /^ *([A-Za-z0-9_.\/-]+(?:[ \t]+[A-Za-z0-9_.\/-]+)*)[ \t]*::?(?![:=])/.exec(line);
        if (!match)
            continue;
        for (const name of match[1].split(/\s+/)) {
            if (name && !name.startsWith('.'))
                targets.add(name);
        }
    }
    return targets;
}
function checkMakeTargets(filePath, content, targets) {
    const referenced = extractMakeTargets(content);
    if (referenced.length === 0)
        return [];
    if (targets === null) {
        return [
            {
                id: `command-alignment-no-makefile-${filePath}`,
                severity: 'low',
                category: 'command-alignment',
                file: filePath,
                line: referenced[0].line,
                evidence: getLineEvidence(content, referenced[0].line),
                message: 'Instruction references make targets but no Makefile was found',
                recommendation: 'Add a Makefile at the repo root or update the instruction file.',
            },
        ];
    }
    return referenced
        .filter((ref) => !targets.has(ref.script))
        .map((ref) => ({
        id: `command-alignment-make-${filePath}-${ref.line}-${ref.script}`,
        severity: 'medium',
        category: 'command-alignment',
        file: filePath,
        line: ref.line,
        evidence: getLineEvidence(content, ref.line),
        message: `Instruction references missing make target: "${ref.script}"`,
        recommendation: `Update the instruction file or add a "${ref.script}" target to the Makefile.`,
    }));
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/audit/checks/contradictions.ts





const CONTRADICTION_GROUPS = [
    {
        name: 'tests',
        severity: 'high',
        strictPhrases: [
            /always\s+run\s+tests/i,
            /run\s+tests\s+before\s+finishing/i,
            /tests\s+must\s+pass/i,
            /always\s+run\s+(?:the\s+)?(?:test\s+suite|`[^`\n]{0,80}\btest\b[^`\n]{0,80}`)/i,
            /tests\s+must\s+always\s+pass/i,
            /(?:never|do\s+not|don'?t)\s+skip\s+(?:the\s+|any\s+)?(?:\w+\s+)?tests\b/i,
        ],
        opposingPhrases: [
            /do\s+not\s+run\s+tests/i,
            /tests\s+are\s+optional/i,
            /ignore\s+failing\s+tests/i,
        ],
        // "skip tests" in any wording ("If the tests are slow, skip them"),
        // without narrow exceptions such as documentation-only changes.
        findOpposing: findSkipValidation,
    },
    {
        name: 'refactors',
        severity: 'medium',
        strictPhrases: [
            /avoid\s+unrelated\s+refactors/i,
            /no\s+unrelated\s+refactors/i,
            /minimal\s+diff/i,
            /focused\s+diff/i,
        ],
        opposingPhrases: [
            /refactor\s+everything/i,
            /rewrite\s+the\s+app/i,
            /clean\s+up\s+everything/i,
            /large\s+refactor/i,
        ],
    },
    {
        name: 'product-decisions',
        severity: 'medium',
        strictPhrases: [
            /do\s+not\s+make\s+product\s+decisions/i,
            /implementation\s+agent/i,
            /not\s+a\s+product\s+strategist/i,
            /ask\s+before\s+scope\s+changes/i,
        ],
        opposingPhrases: [
            // Negative lookbehind so "do not make product decisions" is not matched
            /(?<!not\s)make\s+product\s+decisions/i,
            /decide\s+the\s+strategy/i,
            /choose\s+the\s+product\s+direction/i,
            /expand\s+scope\s+as\s+needed/i,
        ],
    },
    {
        name: 'security',
        severity: 'high',
        strictPhrases: [
            /ask\s+before\s+auth\s+changes/i,
            /ask\s+before\s+security\s+changes/i,
            /do\s+not\s+change\s+authentication/i,
            /do\s+not\s+change\s+authorization/i,
        ],
        opposingPhrases: [
            /bypass\s+auth/i,
            /disable\s+auth/i,
            /ignore\s+security/i,
            /skip\s+authorization/i,
        ],
    },
];
// Opposing phrases only count when permissive: "Never skip tests" agrees with
// "always run tests" rather than contradicting it.
const MAX_PHRASE_LENGTH = 160;
// Phrases come from audited files and go into evidence and recommendations,
// so they are shown the way line evidence is: one line, visible characters,
// bounded length.
function toPhrase(text) {
    return toDisplayText(redactSecrets(text).replace(/\s+/g, ' ').trim()).slice(0, MAX_PHRASE_LENGTH);
}
function findMatches(files, patterns, ignoreNegated = false) {
    const matches = [];
    for (const { path, content } of files) {
        for (const pattern of patterns) {
            const global = new RegExp(pattern.source, `${pattern.flags}g`);
            for (const line of content.split('\n')) {
                let match = null;
                let context = null;
                for (const m of line.matchAll(global)) {
                    if (ignoreNegated)
                        context ??= createLineContext(line);
                    if (!context?.negatedAt(m.index)) {
                        match = m;
                        break;
                    }
                }
                if (match) {
                    matches.push({ phrase: toPhrase(match[0]), file: path });
                    break;
                }
            }
        }
    }
    return matches;
}
function findWithMatcher(files, find) {
    const matches = [];
    for (const { path, content } of files) {
        for (const line of content.split('\n')) {
            const found = find(line);
            if (found) {
                matches.push({ phrase: toPhrase(found.sentence), file: path });
                break;
            }
        }
    }
    return matches;
}
// An instruction to use one package manager: "Use pnpm.", "- Use npm for
// everything", "We use yarn", "Always use bun", "Package manager: pnpm".
// The verb must start a sentence or list item or follow we/always/only/please,
// so "if you use yarn" and "the docs site uses npm" are not preferences, and
// generic phrases such as "use npm scripts" are excluded.
const PREFERENCES = [
    /(?:^|[.;:!?]\s+|^\s*(?:[-*+]|\d+\.)\s+|\b(?:we|always|only|please)\s+)use\s+`?(pnpm|npm|yarn|bun)\b(?!\s+(?:scripts?|packages?|registry|modules?|workspaces?|cache|link|audit|version|publish)\b)/gi,
    /\bpackage\s+manager\s*(?:is|:)\s*`?(pnpm|npm|yarn|bun)\b/gi,
];
function findPreferences(files) {
    const found = [];
    for (const { path, content } of files) {
        // Only standing instructions: a nested AGENTS.md, a command, or a prompt
        // may describe a sub-project that uses another manager on purpose.
        if (!isPrimaryInstructionFile(path))
            continue;
        const seen = new Set();
        for (const line of content.split('\n')) {
            let context = null;
            for (const pattern of PREFERENCES) {
                for (const m of line.matchAll(pattern)) {
                    context ??= createLineContext(line);
                    const manager = m[1].toLowerCase();
                    // Judge negation and quotes from the instruction itself, not from
                    // the punctuation that ends the previous sentence.
                    const start = m.index + Math.max(0, m[0].search(/\b(?:we|always|only|please|use|package)\b/i));
                    if (seen.has(manager) || context.negatedAt(start) || context.quotedAt(start))
                        continue;
                    seen.add(manager);
                    const phrase = toPhrase(m[0].replace(/^[\s.;:!?*+-]+|^\d+\.\s+/g, '').replace(/`/g, ''));
                    found.push({ manager, phrase, file: path });
                }
            }
        }
    }
    return found;
}
function packageManagerContradiction(files) {
    const preferences = findPreferences(files);
    const first = preferences[0];
    const other = preferences.find((p) => p.manager !== first?.manager);
    if (!first || !other)
        return null;
    const involvedFiles = [...new Set(preferences.map((p) => p.file))];
    return {
        id: 'contradiction-package-manager',
        severity: 'medium',
        category: 'contradictions',
        file: involvedFiles.length > 1 ? 'multiple' : involvedFiles[0],
        files: involvedFiles,
        evidence: `${first.file}: "${first.phrase}" vs ${other.file}: "${other.phrase}"`,
        message: 'Contradictory agent instructions detected: package-manager',
        recommendation: `Name one package manager in every instruction file, the one the lockfile belongs to. ` +
            `Found "${first.phrase}" and "${other.phrase}".`,
    };
}
function checkContradictions(files) {
    const issues = [];
    for (const group of CONTRADICTION_GROUPS) {
        const strictMatches = findMatches(files, group.strictPhrases);
        const opposingMatches = [
            ...findMatches(files, group.opposingPhrases, true),
            ...(group.findOpposing ? findWithMatcher(files, group.findOpposing) : []),
        ];
        if (strictMatches.length === 0 || opposingMatches.length === 0)
            continue;
        const strictMatch = strictMatches[0];
        const opposingMatch = opposingMatches[0];
        const strictExample = strictMatch.phrase;
        const opposingExample = opposingMatch.phrase;
        const involvedFiles = [
            ...new Set([...strictMatches.map((m) => m.file), ...opposingMatches.map((m) => m.file)]),
        ];
        const fileLabel = involvedFiles.length > 1 ? 'multiple' : involvedFiles[0];
        const evidence = `${strictMatch.file}: "${strictExample}" vs ${opposingMatch.file}: "${opposingExample}"`;
        issues.push({
            id: `contradiction-${group.name}`,
            severity: group.severity,
            category: 'contradictions',
            file: fileLabel,
            files: involvedFiles,
            evidence,
            message: `Contradictory agent instructions detected: ${group.name}`,
            recommendation: `Remove one side of the contradiction so agents receive a single clear rule. ` +
                `Found "${strictExample}" and "${opposingExample}".`,
        });
    }
    const packageManager = packageManagerContradiction(files);
    if (packageManager)
        issues.push(packageManager);
    return issues;
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/audit/checks/skippedFiles.ts

const MAX_MIB = readTextFile_MAX_TEXT_FILE_BYTES / (1024 * 1024);
function checkSkippedFile(file) {
    switch (file.skipped) {
        case 'outside-repo':
            return [
                {
                    id: `file-access-outside-${file.path}`,
                    severity: 'low',
                    category: 'file-access',
                    file: file.path,
                    message: 'Context file is a symbolic link that resolves outside the audited directory; it was not read',
                    recommendation: 'Audit from a directory that contains the link target, or replace the link with a regular file.',
                },
            ];
        case 'not-a-file':
            return [
                {
                    id: `file-access-unreadable-${file.path}`,
                    severity: 'low',
                    category: 'file-access',
                    file: file.path,
                    message: 'Context file is a broken symbolic link or not a regular file; agents will not see its instructions',
                    recommendation: 'Fix or remove the link so the instruction file resolves to a real file.',
                },
            ];
        case 'too-large':
            return [
                {
                    id: `file-size-over-limit-${file.path}`,
                    severity: 'medium',
                    category: 'file-size',
                    file: file.path,
                    message: `Context file is larger than ${MAX_MIB} MiB and was not audited`,
                    recommendation: 'Split the file into smaller, focused instruction files. Agents load these files into a limited context window.',
                },
            ];
        default:
            return [];
    }
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/audit/checks/hiddenCharacters.ts



const BOM = 0xfeff;
const ZWNJ = 0x200c;
const ZWJ = 0x200d;
// Unicode tag characters mirror ASCII (U+E0020–U+E007E) and render as nothing,
// so they can carry a complete hidden instruction that agents still read.
function isTagCharacter(codePoint) {
    return codePoint >= 0xe0000 && codePoint <= 0xe007f;
}
// Bidirectional overrides and isolates reorder how text is displayed
// ("Trojan Source"), so a reviewer sees different words than an agent reads.
function isBidiControl(codePoint) {
    return ((codePoint >= 0x202a && codePoint <= 0x202e) || (codePoint >= 0x2066 && codePoint <= 0x2069));
}
const JOINABLE = /[\p{L}\p{M}\p{Extended_Pictographic}]/u;
// ZWJ builds emoji sequences and ZWNJ is ordinary orthography in Persian,
// Arabic, and Indic scripts. Only report them between ASCII text or at edges.
function isLegitimateJoiner(chars, index) {
    const before = chars[index - 1] ?? '';
    const after = chars[index + 1] ?? '';
    const nonAsciiJoinable = (c) => c !== '' && c.charCodeAt(0) > 0x7f && JOINABLE.test(c);
    return nonAsciiJoinable(before) && nonAsciiJoinable(after);
}
function decodeTagText(chars) {
    return chars
        .map((c) => c.codePointAt(0) ?? 0)
        .filter((cp) => cp >= 0xe0020 && cp <= 0xe007e)
        .map((cp) => String.fromCharCode(cp - 0xe0000))
        .join('');
}
function hiddenCharacters_scanLine(line, isFirstLine) {
    const chars = Array.from(line);
    let severity = null;
    const codePoints = new Set();
    const tagChars = [];
    for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
        const codePoint = char.codePointAt(0) ?? 0;
        if (!isInvisibleCodePoint(codePoint))
            continue;
        if (codePoint === BOM && isFirstLine && i === 0)
            continue;
        if ((codePoint === ZWJ || codePoint === ZWNJ) && isLegitimateJoiner(chars, i))
            continue;
        codePoints.add(formatCodePoint(char));
        if (isTagCharacter(codePoint)) {
            tagChars.push(char);
            severity = 'high';
        }
        else if (isBidiControl(codePoint)) {
            severity = 'high';
        }
        else if (severity === null) {
            severity = 'medium';
        }
    }
    if (severity === null)
        return null;
    return { severity, codePoints, hiddenText: decodeTagText(tagChars) };
}
function checkHiddenCharacters(filePath, content) {
    const issues = [];
    content.split('\n').forEach((line, idx) => {
        const finding = hiddenCharacters_scanLine(line, idx === 0);
        if (!finding)
            return;
        const list = [...finding.codePoints].join(', ');
        const hidden = finding.hiddenText
            ? ` Hidden text: "${toDisplayText(redactSecrets(finding.hiddenText).replace(/\s+/g, ' ').trim()).slice(0, 120)}"`
            : '';
        issues.push({
            id: `hidden-characters-${filePath}-${idx + 1}`,
            severity: finding.severity,
            category: 'hidden-characters',
            file: filePath,
            line: idx + 1,
            evidence: getLineEvidence(content, idx + 1),
            message: `Invisible Unicode characters (${list}) can hide instructions from reviewers.${hidden}`,
            recommendation: 'Remove invisible characters from agent instructions. Tag characters and bidirectional controls can smuggle instructions that humans do not see but agents follow.',
        });
    });
    return issues;
}

;// CONCATENATED MODULE: external "node:crypto"
const external_node_crypto_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("node:crypto");
;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/audit/baseline.ts



/**
 * Identity of an issue that survives edits elsewhere in the file: category,
 * file, message, and evidence, but not the line number.
 */
function fingerprintIssue(issue) {
    const key = [issue.category, issue.file.replace(/\\/g, '/'), issue.message, issue.evidence ?? ''];
    return (0,external_node_crypto_namespaceObject.createHash)('sha256').update(key.join('\0')).digest('hex').slice(0, 16);
}
class BaselineError extends Error {
    constructor(message) {
        super(message);
        this.name = 'BaselineError';
    }
}
function isBaselineIssue(value) {
    if (typeof value !== 'object' || value === null)
        return false;
    const issue = value;
    return (typeof issue.category === 'string' &&
        typeof issue.file === 'string' &&
        typeof issue.message === 'string');
}
/** Read fingerprints from a report written by `acd audit --json`. */
async function loadBaseline(filePath) {
    const raw = await readTextFile(filePath);
    if (raw === '') {
        throw new BaselineError(`Baseline ${filePath} is missing, empty, or not a regular file`);
    }
    let parsed;
    try {
        parsed = JSON.parse(raw);
    }
    catch (err) {
        throw new BaselineError(`Baseline ${filePath} ${describeJsonError(raw, err)}`);
    }
    const issues = parsed?.issues;
    if (!Array.isArray(issues)) {
        throw new BaselineError(`Baseline ${filePath} has no "issues" array; use acd audit --json output`);
    }
    const fingerprints = new Set();
    for (const issue of issues) {
        if (!isBaselineIssue(issue))
            continue;
        fingerprints.add(typeof issue.fingerprint === 'string'
            ? issue.fingerprint
            : fingerprintIssue({ ...issue, id: '', severity: 'low', recommendation: '' }));
    }
    return fingerprints;
}
/** Mark issues already present in the baseline and record the counts. */
function applyBaseline(result, fingerprints, baselinePath) {
    const issues = result.issues.map((issue) => fingerprints.has(issue.fingerprint ?? fingerprintIssue(issue))
        ? { ...issue, inBaseline: true }
        : issue);
    const known = issues.filter((i) => i.inBaseline).length;
    return {
        ...result,
        issues,
        baseline: { path: baselinePath, known, new: issues.length - known },
    };
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/audit/checks/brokenReferences.ts

const PATH_EXTENSIONS = /\.(?:md|mdc|mdx|txt|ts|tsx|js|jsx|mjs|cjs|json|jsonc|ya?ml|toml|py|go|rs|rb|java|kt|swift|sh|sql|css|scss|html|vue|svelte|prisma|graphql|proto)$/i;
// Obvious placeholders and generated or dependency paths.
const IGNORED = /path\/to\/|your[-_]|<|>|\{|\}|\*|\?|\$|xxx|(?:^|\/)(?:foo|bar|baz)\.|^(?:node_modules|dist|build|coverage)\//i;
const MAX_REFERENCES_PER_FILE = 200;
// Longer targets are never real paths; rejecting them first also keeps the
// trailing-punctuation strip below linear on hostile input.
const MAX_TARGET_LENGTH = 512;
// A bare name in inline code is a file only with a documentation or config
// extension (`RELEASING.md`, `pyproject.toml`); `index.ts` or `config.get`
// could be anything.
const BARE_FILE = /^\.?[A-Za-z0-9][\w.-]*\.(?:md|mdx|json|jsonc|ya?ml|toml|sh)$/i;
// A sentence saying paths are ignored or excluded ("`.gitignore` excludes
// `.idea/`", "`out/` is ignored by git") describes what a checkout leaves
// out, not files to read. "Ignored" alone is often an unrelated verb ("the
// menu ignored `hidden`"), so it only counts in the passive or with "by".
const DESCRIBES_EXCLUDED = /\.gitignore\b|\bgit-?ignored\b|\b(?:is|are|be|being|stays?|remains?|kept)\s+(?:\w+\s+)?ignored\b|\bignored\s+by\b|\bexclude[sd]?\b|\bexcluding\b|\buntracked\b|\bnot\s+(?:checked\s+in|committed|tracked)\b/i;
// Sentence boundaries within a line; a period inside `docs/a.md` is not one.
const SENTENCE_BREAK = /(?<=[.!?])\s+/;
function normalizeTarget(raw) {
    if (raw.length > MAX_TARGET_LENGTH)
        return null;
    const withoutFragment = raw.replace(/[#?].*$/, '');
    let end = withoutFragment.length;
    while (end > 0 && '.,;:)'.includes(withoutFragment[end - 1]))
        end--;
    const target = withoutFragment.slice(0, end);
    if (!target || target.includes('://') || /^(?:mailto:|#|\/|~|-)/.test(target))
        return null;
    if (IGNORED.test(target))
        return null;
    return target;
}
// Inline code counts as a path only when it clearly is one: it has a
// directory component and a known extension, a ./ prefix, or a trailing slash.
// Bare names such as `index.ts` could live anywhere, `../x.js` is usually an
// import specifier, and `owner/repo` or package names have no extension.
function looksLikePath(token) {
    if (!token.includes('/') || token.startsWith('../') || token.startsWith('@'))
        return false;
    return PATH_EXTENSIONS.test(token) || token.startsWith('./') || token.endsWith('/');
}
/**
 * Paths the text points at: Markdown link targets, inline-code paths, and
 * Claude-style `@path` imports. Fenced code blocks are skipped because they
 * usually hold example commands and output, not references, and so is inline
 * code in sentences that describe paths as ignored or excluded.
 */
function extractFileReferences(content) {
    const refs = [];
    const seen = new Set();
    let inFence = false;
    const add = (raw, line, bare = false) => {
        if (refs.length >= MAX_REFERENCES_PER_FILE)
            return;
        const target = normalizeTarget(raw);
        if (!target)
            return;
        const key = `${line}:${target}`;
        if (seen.has(key))
            return;
        seen.add(key);
        refs.push(bare ? { target, line, bare } : { target, line });
    };
    content.split('\n').forEach((text, idx) => {
        if (/^\s*(```|~~~)/.test(text)) {
            inFence = !inFence;
            return;
        }
        if (inFence)
            return;
        const line = idx + 1;
        // Link text, target, and title are bounded so a line of unclosed
        // brackets, parentheses, or quotes cannot make each match attempt scan
        // the rest of the line.
        for (const m of text.matchAll(/\[[^[\]]{0,500}\]\(\s*([^)\s]{1,512})(?:\s+"[^"]{0,500}")?\s*\)/g)) {
            add(m[1], line);
        }
        for (const sentence of text.split(SENTENCE_BREAK)) {
            if (DESCRIBES_EXCLUDED.test(sentence))
                continue;
            for (const m of sentence.matchAll(/`([^`\s]+)`/g)) {
                if (looksLikePath(m[1]))
                    add(m[1], line);
                else if (BARE_FILE.test(m[1]))
                    add(m[1], line, true);
            }
        }
        for (const m of text.matchAll(/(?:^|\s)@([\w./-]+\.\w+)/g))
            add(m[1], line);
    });
    return refs;
}
function checkBrokenReferences(filePath, content, missingTargets) {
    return extractFileReferences(content)
        .filter((ref) => missingTargets.has(ref.target))
        .map((ref) => ({
        id: `broken-references-${filePath}-${ref.line}-${ref.target}`,
        severity: 'medium',
        category: 'broken-references',
        file: filePath,
        line: ref.line,
        evidence: getLineEvidence(content, ref.line),
        message: `Instruction references a file that does not exist: "${ref.target}"`,
        recommendation: 'Update or remove the reference. Agents follow stale paths and waste time looking for files that moved or were deleted.',
    }));
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/audit/gitignore.ts
// A subset of gitignore matching, enough to tell whether a path an instruction
// file mentions is one the repository deliberately keeps out of version
// control. The audited repository is untrusted, so patterns are matched by a
// wildcard matcher whose cost is bounded by pattern length times path length
// (patterns are never compiled to regular expressions), rule count and lengths
// are capped, and each matcher has a total step budget. When the budget runs
// out, paths count as not ignored, so the reference is reported rather than
// silently accepted.
const MAX_RULES = 1_000;
const MAX_PATTERN_LENGTH = 256;
const MAX_PATH_LENGTH = 512;
const MAX_PATH_SEGMENTS = 32;
const MAX_SEGMENT_LENGTH = 255;
const MAX_MATCH_STEPS = 20_000_000;
function parseClass(glob, start) {
    let i = start + 1;
    const negated = glob[i] === '!' || glob[i] === '^';
    if (negated)
        i++;
    const ranges = [];
    // A `]` right after the opening bracket is a literal member.
    if (glob[i] === ']') {
        ranges.push([']', ']']);
        i++;
    }
    while (i < glob.length && glob[i] !== ']') {
        const lo = glob[i];
        if (glob[i + 1] === '-' && i + 2 < glob.length && glob[i + 2] !== ']') {
            ranges.push([lo, glob[i + 2]]);
            i += 3;
        }
        else {
            ranges.push([lo, lo]);
            i++;
        }
    }
    if (i >= glob.length)
        return null;
    return { token: { kind: 'class', negated, ranges }, end: i + 1 };
}
function tokenize(glob) {
    const tokens = [];
    let i = 0;
    while (i < glob.length) {
        const ch = glob[i];
        if (ch === '*') {
            while (glob[i] === '*')
                i++;
            tokens.push({ kind: 'star' });
            continue;
        }
        if (ch === '?') {
            tokens.push({ kind: 'any' });
        }
        else if (ch === '\\' && i + 1 < glob.length) {
            i++;
            tokens.push({ kind: 'char', ch: glob[i] });
        }
        else if (ch === '[') {
            const cls = parseClass(glob, i);
            if (cls) {
                tokens.push(cls.token);
                i = cls.end;
                continue;
            }
            tokens.push({ kind: 'char', ch });
        }
        else {
            tokens.push({ kind: 'char', ch });
        }
        i++;
    }
    return tokens;
}
function tokenMatches(token, ch) {
    if (token.kind === 'any')
        return true;
    if (token.kind === 'char')
        return token.ch === ch;
    if (token.kind === 'class') {
        const inside = token.ranges.some(([lo, hi]) => ch >= lo && ch <= hi);
        return inside !== token.negated;
    }
    return false;
}
// Classic two-pointer wildcard match: on a mismatch, resume from the last `*`
// with it consuming one more character. Worst case O(pattern × text).
function matchSegment(tokens, text, budget) {
    let t = 0;
    let s = 0;
    let starToken = -1;
    let starText = 0;
    while (s < text.length) {
        if (--budget.left < 0)
            return false;
        const token = tokens[t];
        if (token && token.kind !== 'star' && tokenMatches(token, text[s])) {
            t++;
            s++;
        }
        else if (token?.kind === 'star') {
            starToken = t++;
            starText = s;
        }
        else if (starToken !== -1) {
            t = starToken + 1;
            s = ++starText;
        }
        else {
            return false;
        }
    }
    while (tokens[t]?.kind === 'star')
        t++;
    return t === tokens.length;
}
// Match pattern segments against path segments, `**` spanning zero or more.
// Memoised, so the cost is bounded by pattern segments × path segments.
function matchSegments(pattern, parts, budget) {
    const memo = new Map();
    const go = (p, s) => {
        if (--budget.left < 0)
            return false;
        if (p === pattern.length)
            return s === parts.length;
        const key = p * (parts.length + 1) + s;
        const cached = memo.get(key);
        if (cached !== undefined)
            return cached;
        const seg = pattern[p];
        const result = seg === 'globstar'
            ? go(p + 1, s) || (s < parts.length && go(p, s + 1))
            : s < parts.length && matchSegment(seg, parts[s], budget) && go(p + 1, s + 1);
        memo.set(key, result);
        return result;
    };
    return go(0, 0);
}
// Trailing spaces and tabs are dropped unless escaped with a backslash. A
// loop rather than a regex, whose cost on long whitespace runs is quadratic.
function trimTrailingWhitespace(line) {
    let end = line.length;
    while (end > 0 && (line[end - 1] === ' ' || line[end - 1] === '\t'))
        end--;
    if (end < line.length && end > 0 && line[end - 1] === '\\')
        end++;
    return line.slice(0, end);
}
function parseRule(line) {
    if (line.length > MAX_PATTERN_LENGTH * 2)
        return null;
    let pattern = trimTrailingWhitespace(line);
    if (pattern === '' || pattern.startsWith('#') || pattern.length > MAX_PATTERN_LENGTH)
        return null;
    const negated = pattern.startsWith('!');
    if (negated)
        pattern = pattern.slice(1);
    else if (pattern.startsWith('\\!') || pattern.startsWith('\\#'))
        pattern = pattern.slice(1);
    const dirOnly = pattern.endsWith('/');
    if (dirOnly)
        pattern = pattern.slice(0, -1);
    // A slash anywhere but the end anchors the pattern to the .gitignore's directory.
    const anchored = pattern.includes('/');
    if (pattern.startsWith('/'))
        pattern = pattern.slice(1);
    if (pattern === '')
        return null;
    const segments = [];
    for (const part of pattern.split('/')) {
        if (part === '**') {
            if (segments[segments.length - 1] !== 'globstar')
                segments.push('globstar');
        }
        else {
            segments.push(tokenize(part));
        }
    }
    return { segments, anchored, negated, dirOnly };
}
function parseGitignore(content) {
    const rules = [];
    for (const line of content.split(/\r?\n/)) {
        if (rules.length >= MAX_RULES)
            break;
        const rule = parseRule(line);
        if (rule)
            rules.push(rule);
    }
    const budget = { left: MAX_MATCH_STEPS };
    const cache = new Map();
    const ruleMatches = (rule, parts, isDir) => {
        if (rule.dirOnly && !isDir)
            return false;
        // An unanchored pattern matches a name at any depth. Every ancestor is
        // checked separately, so comparing against the last segment is enough.
        if (!rule.anchored) {
            const [segment] = rule.segments;
            return segment !== 'globstar' && matchSegment(segment, parts[parts.length - 1], budget);
        }
        return matchSegments(rule.segments, parts, budget);
    };
    // The last matching rule wins, so a later `!pattern` can re-include a path.
    const isIgnored = (parts, isDir) => {
        let ignored = false;
        for (const rule of rules) {
            if (budget.left < 0)
                return false;
            if (rule.negated === ignored && ruleMatches(rule, parts, isDir))
                ignored = !rule.negated;
        }
        return ignored;
    };
    return {
        ignores(relPath, isDir = false) {
            if (rules.length === 0 || budget.left < 0 || relPath.length > MAX_PATH_LENGTH)
                return false;
            const parts = relPath
                .replace(/\\/g, '/')
                .split('/')
                .filter((part, i) => part !== '' && !(i === 0 && part === '.'));
            if (parts.length === 0 || parts.length > MAX_PATH_SEGMENTS)
                return false;
            if (parts.some((part) => part.length > MAX_SEGMENT_LENGTH))
                return false;
            const key = `${isDir ? 'd' : 'f'}:${parts.join('/')}`;
            const cached = cache.get(key);
            if (cached !== undefined)
                return cached;
            // Git does not descend into an ignored directory, so nothing below it
            // can be re-included by a later negation.
            let result = false;
            for (let k = 1; k < parts.length && !result; k++) {
                result = isIgnored(parts.slice(0, k), true);
            }
            if (!result)
                result = isIgnored(parts, isDir);
            if (budget.left < 0)
                result = false;
            cache.set(key, result);
            return result;
        },
    };
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/audit/delegation.ts


// Claude Code follows imports up to five hops. Only text files are followed,
// and both the files loaded and the read attempts are capped so a hostile
// repository cannot make the audit read an unbounded number of files.
const MAX_IMPORT_DEPTH = 5;
const MAX_IMPORTED_FILES = 50;
const MAX_IMPORT_ATTEMPTS = 200;
const MAX_IMPORTS_PER_FILE = 100;
const IMPORTABLE = /\.(?:md|mdc|mdx|txt)$/i;
// Path-like tokens. Longer tokens are never file paths, and skipping them
// keeps the per-token suffix lookups below linear in the file size.
const PATH_TOKEN = /[\w.@/-]+/g;
const MAX_TOKEN_LENGTH = 512;
function toPosix(p) {
    return p.replace(/\\/g, '/');
}
/**
 * Claude-style `@path` imports in `content`, as repo-relative paths resolved
 * against the importing file's directory. Imports that would leave the
 * repository, absolute paths, and non-text files are dropped.
 */
function importTargets(filePath, content) {
    const dir = external_node_path_default().posix.dirname(toPosix(filePath));
    const targets = [];
    let inFence = false;
    for (const line of content.split('\n')) {
        if (/^\s*(```|~~~)/.test(line)) {
            inFence = !inFence;
            continue;
        }
        if (inFence)
            continue;
        for (const m of line.matchAll(/(?:^|\s)@([\w./-]+\.\w+)/g)) {
            if (targets.length >= MAX_IMPORTS_PER_FILE)
                return targets;
            if (m[1].startsWith('/') || !IMPORTABLE.test(m[1]))
                continue;
            const rel = external_node_path_default().posix.normalize(external_node_path_default().posix.join(dir, m[1]));
            if (rel === '..' || rel.startsWith('../'))
                continue;
            targets.push(external_node_path_default().normalize(rel));
        }
    }
    return targets;
}
/**
 * Follow `@imports` from the primary instruction files to in-repository files
 * that are not context files themselves (for example `@docs/agent-guide.md`),
 * breadth first. `read` must return '' for anything missing or outside the
 * repository; such targets are not loaded.
 */
async function loadImportedFiles(files, read) {
    const known = new Set(files.map((f) => f.path));
    const imported = [];
    const imports = new Map();
    let attempts = 0;
    let frontier = files.filter((f) => isPrimaryInstructionFile(f.path));
    for (let depth = 0; depth < MAX_IMPORT_DEPTH && frontier.length > 0; depth++) {
        const next = [];
        for (const file of frontier) {
            const targets = importTargets(file.path, file.content);
            imports.set(file.path, targets);
            for (const rel of targets) {
                if (known.has(rel))
                    continue;
                if (imported.length >= MAX_IMPORTED_FILES || attempts >= MAX_IMPORT_ATTEMPTS)
                    continue;
                known.add(rel);
                attempts++;
                const content = await read(rel);
                if (content === '')
                    continue;
                const loaded = { path: rel, kind: 'unknown', content };
                imported.push(loaded);
                next.push(loaded);
            }
        }
        frontier = next;
    }
    return { imported, imports };
}
function buildDelegationGraph(files, imports) {
    const byPath = new Map(files.map((f) => [f.path, f]));
    // A file is referenced by its repo path anywhere in a token ("docs/a.md",
    // "./docs/a.md", "@docs/a.md"), and a root-level file also by its name in
    // any case ("Follow agents.md").
    const byRepoPath = new Map();
    const byRootName = new Map();
    let longestPath = 0;
    for (const f of files) {
        const posix = toPosix(f.path);
        byRepoPath.set(posix, f.path);
        if (!posix.includes('/'))
            byRootName.set(posix.toLowerCase(), f.path);
        longestPath = Math.max(longestPath, posix.length);
    }
    const lookup = (candidate, found) => {
        const exact = byRepoPath.get(candidate);
        if (exact)
            found.add(exact);
        if (!candidate.includes('/')) {
            const root = byRootName.get(candidate.toLowerCase());
            if (root)
                found.add(root);
        }
    };
    const targetCache = new Map();
    const closureCache = new Map();
    // Every primary file of a kind starts from the same set (itself and its
    // siblings), so they share one closure object rather than one each.
    const primaryClosures = new Map();
    const targets = (filePath) => {
        const cached = targetCache.get(filePath);
        if (cached)
            return cached;
        const found = new Set();
        const self = byPath.get(filePath);
        if (self) {
            for (const [raw] of self.content.matchAll(PATH_TOKEN)) {
                if (raw.length > MAX_TOKEN_LENGTH)
                    continue;
                let start = raw.startsWith('@') ? 1 : 0;
                if (raw.startsWith('./', start))
                    start += 2;
                let end = raw.length;
                while (end > start && (raw[end - 1] === '.' || raw[end - 1] === '-'))
                    end--;
                // Only candidates no longer than the longest known path can match,
                // which bounds the slicing per token.
                if (end - start <= longestPath)
                    lookup(raw.slice(start, end), found);
                for (let i = raw.indexOf('/', start); i !== -1 && i < end; i = raw.indexOf('/', i + 1)) {
                    if (end - i - 1 <= longestPath)
                        lookup(raw.slice(i + 1, end), found);
                }
            }
            for (const rel of imports.get(filePath) ?? []) {
                if (byPath.has(rel))
                    found.add(rel);
            }
            found.delete(filePath);
        }
        const result = [...found];
        targetCache.set(filePath, result);
        return result;
    };
    const closure = (filePath) => {
        const self = byPath.get(filePath);
        const primary = self !== undefined && isPrimaryInstructionFile(self.path);
        const cached = primary ? primaryClosures.get(self.kind) : closureCache.get(filePath);
        if (cached)
            return cached;
        const seen = new Set([filePath]);
        // A .cursor/rules or .claude/rules set is loaded together, so its files
        // count as one source of guidance.
        if (primary) {
            for (const f of files) {
                if (f.kind === self.kind && isPrimaryInstructionFile(f.path))
                    seen.add(f.path);
            }
        }
        const queue = [...seen];
        for (let i = 0; i < queue.length; i++) {
            for (const next of targets(queue[i])) {
                if (seen.has(next))
                    continue;
                seen.add(next);
                queue.push(next);
            }
        }
        if (primary)
            primaryClosures.set(self.kind, seen);
        else
            closureCache.set(filePath, seen);
        return seen;
    };
    return { targets, closure };
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/audit/checks/fileSize.ts
/** Default soft budget for a primary instruction file, roughly 10k tokens. */
const DEFAULT_MAX_FILE_BYTES = 40_000;
function checkFileSize(filePath, content, maxBytes) {
    const bytes = Buffer.byteLength(content, 'utf-8');
    if (bytes <= maxBytes)
        return [];
    const kb = (n) => `${Math.round(n / 1000)} KB`;
    return [
        {
            id: `file-size-budget-${filePath}`,
            severity: 'low',
            category: 'file-size',
            file: filePath,
            message: `Instruction file is ${kb(bytes)}, over the ${kb(maxBytes)} budget`,
            recommendation: 'Agents load primary instruction files into every session. Move reference material into linked docs and keep standing instructions short.',
        },
    ];
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/audit/checks/shellRisk.ts
const REMOTE_SCRIPT = 'downloads and runs a remote script';
const SENDS_DATA = 'sends data to a remote server';
const RAW_SOCKET = 'opens a raw network connection';
const HIDDEN_CODE = 'decodes and runs hidden code';
const DELETES_HOME = 'deletes the root or home directory';
const READS_CREDENTIALS = 'reads credential files from the home directory';
const UNPINNED_RUNNER = 'runs a package from the registry without a pinned version';
const SEVERITY = {
    [REMOTE_SCRIPT]: 'high',
    [SENDS_DATA]: 'high',
    [RAW_SOCKET]: 'high',
    [HIDDEN_CODE]: 'high',
    [DELETES_HOME]: 'high',
    [READS_CREDENTIALS]: 'medium',
    [UNPINNED_RUNNER]: 'medium',
};
// Commands are split into pipeline stages first, so every pattern below only
// looks at one stage and none of them needs an unbounded run across the whole
// command. That keeps matching linear on hostile input.
const DOWNLOADER = /\b(?:curl|wget)\b/i;
const SHELL_STAGE = /^\s*(?:sudo\s+)?(?:(?:ba|z|da|k)?sh|python3?|node|perl|ruby)\b/i;
const SHELL_OF_DOWNLOAD = /\b(?:ba|z)?sh\s+(?:-c\s+)?["']?(?:\$\(|<\()\s*(?:curl|wget)\b/i;
const CURL_UPLOAD = /\s(?:-d|--data(?:-binary|-raw|-urlencode)?|-F|--form|-T|--upload-file)(?:\s|=)/i;
const WGET_POST = /\s--post-(?:data|file)\b/i;
const DEV_SOCKET = /\/dev\/(?:tcp|udp)\//;
const NETCAT = /(?:^|\s)(?:nc|ncat|netcat)\s/;
const PORT_ARGUMENT = /\s\d{2,5}(?:\s|$)/;
const BASE64_DECODE = /\bbase64\s+(?:-d|-D|--decode)\b/i;
const RM_HOME = /\brm\s+((?:-\S+\s+)+)["']?(?:\/|~\/?|\$HOME\/?|\$\{HOME\}\/?)\*?["']?(?=\s|$)/;
const HOME_CREDENTIALS = /(?:~|\$HOME|\$\{HOME\})\/\.(?:ssh|aws|gnupg|kube|netrc|docker\/config\.json|config\/gh|npmrc)\b/i;
const RUNNER = /\b(?:npx|bunx|pnpx)\s+(?:(?:-y|--yes)\s+)*(\S+)/i;
function stagesOf(command) {
    return command
        .split(/\n|;|&&|\|\|/)
        .map((sequence) => sequence.split('|'))
        .filter((stages) => stages.some((s) => s.trim() !== ''));
}
function isUnpinnedRunner(stage) {
    const spec = RUNNER.exec(stage)?.[1]?.replace(/^["']|["']$/g, '');
    if (!spec || spec.startsWith('-'))
        return false;
    const version = /^(?:@[^/@]+\/)?[^@]+@(.+)$/.exec(spec)?.[1];
    return version === undefined || !/^\d/.test(version);
}
/** Risky behaviour in a shell command or script, one entry per kind. */
function findShellRisks(command) {
    const labels = new Set();
    if (HOME_CREDENTIALS.test(command))
        labels.add(READS_CREDENTIALS);
    if (SHELL_OF_DOWNLOAD.test(command))
        labels.add(REMOTE_SCRIPT);
    if (DEV_SOCKET.test(command))
        labels.add(RAW_SOCKET);
    for (const stages of stagesOf(command)) {
        const sequence = stages.join('|');
        if (/\beval\b/.test(sequence) && /base64/i.test(sequence))
            labels.add(HIDDEN_CODE);
        let shellLater = false;
        for (let i = stages.length - 1; i >= 0; i--) {
            const stage = stages[i];
            if (DOWNLOADER.test(stage) && shellLater)
                labels.add(REMOTE_SCRIPT);
            if (BASE64_DECODE.test(stage) && shellLater)
                labels.add(HIDDEN_CODE);
            shellLater ||= SHELL_STAGE.test(stage);
            if (/\bcurl\b/i.test(stage) && CURL_UPLOAD.test(stage))
                labels.add(SENDS_DATA);
            if (/\bwget\b/i.test(stage) && WGET_POST.test(stage))
                labels.add(SENDS_DATA);
            if (NETCAT.test(stage) && PORT_ARGUMENT.test(stage))
                labels.add(RAW_SOCKET);
            const rm = RM_HOME.exec(stage);
            if (rm && /(?:^|\s)-(?:[a-zA-Z]*[rR]|-recursive\b)/.test(` ${rm[1]}`)) {
                labels.add(DELETES_HOME);
            }
            if (isUnpinnedRunner(stage))
                labels.add(UNPINNED_RUNNER);
        }
    }
    return Object.keys(SEVERITY)
        .filter((label) => labels.has(label))
        .map((label) => ({ severity: SEVERITY[label], label }));
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/audit/checks/claudeSettings.ts


function asRecord(value) {
    return typeof value === 'object' && value !== null && !Array.isArray(value)
        ? value
        : null;
}
function asStrings(value) {
    return Array.isArray(value) ? value.filter((v) => typeof v === 'string') : [];
}
// Programs that run whatever they are given, so allowing them with open
// arguments is the same as allowing every shell command. git and the package
// managers belong here too: `git -c core.pager=...` and `npm exec` run code.
const RUNS_ANYTHING = new Set([
    'sh',
    'bash',
    'zsh',
    'fish',
    'dash',
    'eval',
    'exec',
    'env',
    'xargs',
    'node',
    'deno',
    'bun',
    'python',
    'python3',
    'ruby',
    'perl',
    'php',
    'npx',
    'bunx',
    'pnpx',
    'npm',
    'pnpm',
    'yarn',
    'git',
    'make',
    'find',
    'docker',
]);
const RUNNER_SUBCOMMANDS = new Set(['exec', 'dlx', 'x']);
const NETWORK = new Set(['curl', 'wget', 'nc', 'ncat', 'netcat', 'ssh', 'scp', 'rsync', 'ftp']);
/** Inner command of a `Bash(...)` rule with trailing wildcards removed; '' means any command. */
function bashRuleCommand(rule) {
    const compact = rule.trim();
    if (compact === 'Bash')
        return '';
    const inner = /^Bash\((.*)\)$/s.exec(compact)?.[1];
    if (inner === undefined)
        return null;
    return inner.replace(/(?::\*|\s*\*)+\s*$/, '').trim();
}
function runsAnything(words) {
    const program = (words[0] ?? '').replace(/^.*\//, '');
    if (program === '' || program === '*' || program === 'sudo' || program === 'su')
        return true;
    if (!RUNS_ANYTHING.has(program))
        return false;
    // Only flags after the program (`node`, `bash -c`, `python -c`) leave the code open.
    const positional = words.slice(1).find((w) => !w.startsWith('-'));
    return positional === undefined || RUNNER_SUBCOMMANDS.has(positional);
}
function allowRuleFindings(rule) {
    const command = bashRuleCommand(rule);
    if (command !== null) {
        const words = command.split(/\s+/).filter(Boolean);
        const program = (words[0] ?? '').replace(/^.*\//, '');
        if (runsAnything(words)) {
            return [
                {
                    severity: 'high',
                    message: `Claude Code permission "${clip(rule)}" lets the agent run any code without asking`,
                    recommendation: 'Allow specific commands instead, for example "Bash(pnpm test:*)". Shells, interpreters, sudo, package runners, and bare git or package manager rules can run anything they are given.',
                    needle: rule,
                },
            ];
        }
        if (NETWORK.has(program)) {
            return [
                {
                    severity: 'medium',
                    message: `Claude Code permission "${clip(rule)}" allows network requests without asking`,
                    recommendation: 'Keep network commands behind a prompt: an agent following injected instructions could send code or secrets out.',
                    needle: rule,
                },
            ];
        }
        const destructive = (program === 'rm' && words.slice(1).every((w) => w.startsWith('-'))) ||
            (program === 'git' && /^git\s+(?:push|reset\s+--hard|clean\s+-\w*f)/.test(command)) ||
            program === 'dd' ||
            program === 'mkfs';
        if (destructive) {
            return [
                {
                    severity: 'medium',
                    message: `Claude Code permission "${clip(rule)}" allows destructive or publishing commands without asking`,
                    recommendation: 'Move this rule to permissions.ask so a person confirms deletions, pushes, and history rewrites.',
                    needle: rule,
                },
            ];
        }
        return [];
    }
    if (/^WebFetch(?:\(\s*\*?\s*\))?$/.test(rule.trim())) {
        return [
            {
                severity: 'medium',
                message: `Claude Code permission "${clip(rule)}" fetches any URL without asking`,
                recommendation: 'Allow specific domains instead, for example "WebFetch(domain:docs.example.com)". Fetched pages can carry injected instructions, and URLs can carry data out.',
                needle: rule,
            },
        ];
    }
    const fileRule = /^(Read|Edit|Write|MultiEdit|NotebookEdit)\((.*)\)$/s.exec(rule.trim());
    if (fileRule && /^(?:~|\/\/|\$HOME)|(?:^|\/)\.\.(?:\/|$)/.test(fileRule[2].trim())) {
        const writes = fileRule[1] !== 'Read';
        return [
            {
                severity: writes ? 'high' : 'medium',
                message: `Claude Code permission "${clip(rule)}" lets the agent ${writes ? 'change' : 'read'} files outside the project without asking`,
                recommendation: 'Scope file permissions to the project. Home and absolute paths expose SSH keys, cloud credentials, and other projects.',
                needle: rule,
            },
        ];
    }
    return [];
}
function additionalDirectoryFindings(dirs) {
    return dirs.flatMap((dir) => {
        const trimmed = dir.trim().replace(/\/+$/, '');
        if (/^(?:|\/|~|\$HOME|\$\{HOME\}|[A-Za-z]:)$/.test(trimmed)) {
            return [
                {
                    severity: 'high',
                    message: `Claude Code additionalDirectories includes "${clip(dir)}", which opens the whole ${trimmed === '/' || trimmed === '' ? 'filesystem' : 'home directory'} to the agent`,
                    recommendation: 'Remove it, or name the specific sibling directory the agent needs.',
                    needle: dir,
                },
            ];
        }
        if (/^(?:\/|~|\$HOME)|(?:^|\/)\.\.(?:\/|$)/.test(trimmed)) {
            return [
                {
                    severity: 'medium',
                    message: `Claude Code additionalDirectories gives the agent access to "${clip(dir)}", outside the repository`,
                    recommendation: 'Committed settings apply to everyone who opens the project. Keep extra directories in .claude/settings.local.json instead.',
                    needle: dir,
                },
            ];
        }
        return [];
    });
}
const ENDPOINT_VARS = /^(?:ANTHROPIC(?:_BEDROCK|_VERTEX)?_BASE_URL|CLAUDE_CODE_API_BASE_URL)$/i;
const PROXY_VARS = /^(?:https?_proxy|all_proxy)$/i;
const ANTHROPIC_HOST = /^https:\/\/(?:[\w-]+\.)*anthropic\.com(?::\d+)?(?:\/|$)/i;
const LOCAL_HOST = /^(?:https?:\/\/)?(?:localhost|127\.0\.0\.1|\[::1\])(?::\d+)?(?:\/|$)/i;
function isEnvReference(value) {
    return /^\$\{?[A-Za-z_]\w*(?::-[^}]*)?\}?$/.test(value.trim());
}
function envFindings(env) {
    const findings = [];
    for (const [key, raw] of Object.entries(env)) {
        if (typeof raw !== 'string' || raw.trim() === '' || isEnvReference(raw))
            continue;
        const value = raw.trim();
        const where = `Claude Code settings set ${key}`;
        if (ENDPOINT_VARS.test(key)) {
            if (LOCAL_HOST.test(value) || ANTHROPIC_HOST.test(value))
                continue;
            findings.push({
                severity: 'high',
                message: `${where}, sending every prompt and the code it contains to ${clip(value)}`,
                recommendation: 'Do not set API endpoints in committed settings. Anyone who opens the project would route their session through this host.',
                needle: key,
            });
        }
        else if (PROXY_VARS.test(key) && !LOCAL_HOST.test(value)) {
            findings.push({
                severity: 'high',
                message: `${where}, routing the agent's network traffic through ${clip(value)}`,
                recommendation: 'Remove the proxy from committed settings; configure it per machine.',
                needle: key,
            });
        }
        else if (key === 'NODE_TLS_REJECT_UNAUTHORIZED' && value === '0') {
            findings.push({
                severity: 'high',
                message: `${where}=0, turning off TLS certificate checks`,
                recommendation: 'Remove it. Without certificate checks, traffic can be intercepted.',
                needle: key,
            });
        }
        else if (key === 'NODE_OPTIONS' &&
            /(?:^|\s)(?:--require|-r|--import|--loader|--experimental-loader)(?:\s|=)/.test(value)) {
            findings.push({
                severity: 'high',
                message: `${where} to preload code into every Node.js process the agent starts`,
                recommendation: 'Remove the preload from committed settings.',
                needle: key,
            });
        }
        else if (/^(?:BASH_ENV|ENV|ZDOTDIR|PROMPT_COMMAND)$/.test(key)) {
            findings.push({
                severity: 'high',
                message: `${where}, which runs code every time the agent starts a shell`,
                recommendation: 'Remove it from committed settings.',
                needle: key,
            });
        }
        else if (key === 'PATH') {
            findings.push({
                severity: 'medium',
                message: `${where}, changing which programs run when the agent calls a command`,
                recommendation: 'Avoid overriding PATH in committed settings; a repository directory early in PATH can shadow git, node, or pnpm.',
                needle: key,
            });
        }
    }
    return findings;
}
// Settings that run a command to obtain credentials or headers.
const CREDENTIAL_HELPERS = [
    'apiKeyHelper',
    'awsCredentialExport',
    'awsAuthRefresh',
    'gcpAuthRefresh',
    'otelHeadersHelper',
];
/** Shorten repository-provided text quoted in a message. */
function clip(text, max = 80) {
    const flat = redactSecrets(text).replace(/\s+/g, ' ').trim();
    return flat.length > max ? `${flat.slice(0, max - 1)}…` : flat;
}
/** Every command that Claude Code runs on its own because of these settings. */
function settingsCommands(settings) {
    const commands = [];
    const hooks = asRecord(settings.hooks) ?? {};
    for (const [event, entries] of Object.entries(hooks)) {
        if (!Array.isArray(entries))
            continue;
        for (const entry of entries) {
            const hookList = asRecord(entry)?.hooks;
            if (!Array.isArray(hookList))
                continue;
            for (const hook of hookList) {
                const command = asRecord(hook)?.command;
                if (typeof command === 'string')
                    commands.push({ source: `${event} hook`, command });
            }
        }
    }
    const statusLine = settings.statusLine;
    const statusCommand = typeof statusLine === 'string' ? statusLine : asRecord(statusLine)?.command;
    if (typeof statusCommand === 'string')
        commands.push({ source: 'statusLine', command: statusCommand });
    for (const key of CREDENTIAL_HELPERS) {
        const value = settings[key];
        if (typeof value === 'string')
            commands.push({ source: key, command: value });
    }
    return commands;
}
function commandFindings(settings) {
    const findings = [];
    for (const { source, command } of settingsCommands(settings)) {
        if (CREDENTIAL_HELPERS.includes(source)) {
            findings.push({
                severity: 'medium',
                message: `Claude Code settings define ${source}, which runs "${clip(command)}" to produce credentials`,
                recommendation: 'Credential helpers belong in user settings. In committed project settings, the repository decides what runs with your credentials.',
                needle: source,
            });
        }
        for (const risk of findShellRisks(command)) {
            findings.push({
                severity: risk.severity,
                message: `Claude Code ${source} ${risk.label}: "${clip(command)}"`,
                recommendation: 'Commands in settings run automatically. Keep them to local, reviewed scripts in the repository.',
                needle: command,
            });
        }
    }
    return findings;
}
function claudeSettingsFindings(settings) {
    const findings = [];
    const permissions = asRecord(settings.permissions);
    if (permissions?.defaultMode === 'bypassPermissions') {
        findings.push({
            severity: 'high',
            message: 'Claude Code is set to bypassPermissions: every tool runs without asking',
            recommendation: 'Remove defaultMode "bypassPermissions" from the shared settings. Grant specific tools with permissions.allow instead.',
            needle: 'bypassPermissions',
        });
    }
    for (const rule of asStrings(permissions?.allow))
        findings.push(...allowRuleFindings(rule));
    findings.push(...additionalDirectoryFindings(asStrings(permissions?.additionalDirectories)));
    const guarded = [...asStrings(permissions?.deny), ...asStrings(permissions?.ask)];
    if (permissions && !guarded.some((rule) => rule.includes('.env'))) {
        findings.push({
            severity: 'low',
            message: 'Claude Code settings do not deny reading .env files',
            recommendation: 'Add deny rules such as "Read(./.env)" and "Read(./.env.*)" so secrets stay out of the agent context.',
            needle: '"permissions"',
        });
    }
    findings.push(...envFindings(asRecord(settings.env) ?? {}));
    findings.push(...commandFindings(settings));
    if (settings.enableAllProjectMcpServers === true) {
        findings.push({
            severity: 'medium',
            message: 'Claude Code auto-approves every MCP server defined in the repository',
            recommendation: 'Remove enableAllProjectMcpServers and approve servers individually (enabledMcpjsonServers), so a new server added in a pull request is not trusted automatically.',
            needle: 'enableAllProjectMcpServers',
        });
    }
    return findings;
}
const SCRIPT_TOKEN = /(?:["']?\$\{?CLAUDE_PROJECT_DIR\}?["']?\/|\.\/)?((?:[\w.-]+\/)*[\w.-]+\.(?:sh|bash|zsh|py|js|mjs|cjs|ts|rb|pl))\b/g;
/**
 * Repository-relative scripts that settings commands run, such as
 * `"$CLAUDE_PROJECT_DIR"/.claude/hooks/format.sh`, so their contents can be
 * checked too. Absolute and home paths are left out.
 */
function referencedScripts(settings) {
    const scripts = new Set();
    for (const { command } of settingsCommands(settings)) {
        for (const match of command.matchAll(SCRIPT_TOKEN)) {
            const before = command.slice(0, match.index);
            if (/(?:^|[\s"'=])(?:\/|~)$/.test(before) || /(?:~|\$HOME)\/?$/.test(before))
                continue;
            const rel = match[1].replace(/^\.\//, '');
            if (!rel.startsWith('..') && !rel.startsWith('/'))
                scripts.add(rel);
        }
    }
    return [...scripts];
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/audit/checks/agentConfig.ts




/** Agent configuration files checked by `checkAgentConfig`, relative to the repo root. */
const AGENT_CONFIG_FILES = [
    '.claude/settings.json',
    '.mcp.json',
    '.cursor/mcp.json',
    '.vscode/mcp.json',
    '.gemini/settings.json',
    '.roo/mcp.json',
];
/**
 * Remove // and /* *\/ comments and trailing commas outside strings, so
 * JSONC files such as .vscode/mcp.json parse with JSON.parse.
 */
function stripJsonComments(text) {
    let out = '';
    let inString = false;
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const next = text[i + 1];
        if (inString) {
            out += char;
            if (char === '\\') {
                out += next ?? '';
                i++;
            }
            else if (char === '"') {
                inString = false;
            }
        }
        else if (char === '"') {
            inString = true;
            out += char;
        }
        else if (char === '/' && next === '/') {
            while (i < text.length && text[i] !== '\n')
                i++;
            out += '\n';
        }
        else if (char === '/' && next === '*') {
            i += 2;
            while (i < text.length && !(text[i] === '*' && text[i + 1] === '/')) {
                if (text[i] === '\n')
                    out += '\n';
                i++;
            }
            i++;
        }
        else if (char === ',' && /^\s*[}\]]/.test(text.slice(i + 1))) {
            // Trailing comma: JSON.parse rejects it, JSONC allows it.
        }
        else {
            out += char;
        }
    }
    return out;
}
// Launchers that download and run a package by name at start-up.
const PACKAGE_RUNNERS = new Set(['npx', 'bunx', 'pnpx', 'uvx', 'pipx']);
function packageArgument(command, args) {
    const rest = command === 'pnpm' || command === 'yarn' ? args.slice(args[0] === 'dlx' ? 1 : 0) : args;
    return rest.find((arg) => !arg.startsWith('-'));
}
function isPinned(spec) {
    // @scope/name@1.2.3, name@1.2.3, name==1.2.3 (uvx/pipx)
    const version = /^(@[^/]+\/[^@]+|[^@=]+)(?:@|==)(.+)$/.exec(spec)?.[2];
    return version !== undefined && /^\d/.test(version);
}
const CREDENTIAL_KEY = /token|secret|password|passwd|api[_-]?key|credential|^authorization$/i;
// Values that defer to the environment or are clearly not a real secret.
function isLiteralCredential(value) {
    if (value.length < 8)
        return false;
    if (/\$\{|\$[A-Z_]|^env:|<|your[-_]|example|placeholder|changeme|xxx/i.test(value))
        return false;
    return !/^(?:true|false|null|\d+)$/i.test(value);
}
function credentialFindings(where, entries) {
    const findings = [];
    for (const [key, value] of Object.entries(entries ?? {})) {
        if (typeof value !== 'string' || !CREDENTIAL_KEY.test(key))
            continue;
        const secret = value.replace(/^Bearer\s+/i, '');
        if (!isLiteralCredential(secret))
            continue;
        findings.push({
            severity: 'high',
            message: `${where} hardcodes a credential in "${key}"`,
            recommendation: 'Reference the credential through an environment variable (for example "${env:API_KEY}") instead of committing it, and rotate the exposed value.',
            needle: value,
            secret: true,
        });
    }
    return findings;
}
function mcpServerFindings(name, server) {
    const findings = [
        ...credentialFindings(`MCP server "${name}"`, asRecord(server.env)),
        ...credentialFindings(`MCP server "${name}"`, asRecord(server.headers)),
    ];
    const command = typeof server.command === 'string' ? (server.command.split(/[\\/]/).pop() ?? '') : '';
    const args = asStrings(server.args);
    const runsPackage = PACKAGE_RUNNERS.has(command) ||
        ((command === 'pnpm' || command === 'yarn') && args[0] === 'dlx');
    if (runsPackage) {
        const spec = packageArgument(command, args);
        if (spec && !isPinned(spec)) {
            findings.push({
                severity: 'medium',
                message: `MCP server "${name}" runs ${command} ${spec} without a pinned version`,
                recommendation: 'Pin an exact version (for example name@1.2.3) so a new release of the package cannot change what runs with your agent.',
                needle: spec,
            });
        }
    }
    const commandLine = [typeof server.command === 'string' ? server.command : '', ...args].join(' ');
    for (const risk of findShellRisks(commandLine)) {
        if (risk.label.startsWith('runs a package'))
            continue;
        findings.push({
            severity: risk.severity,
            message: `MCP server "${name}" ${risk.label} when it starts`,
            recommendation: 'Start MCP servers from a pinned package or a reviewed local script.',
            needle: typeof server.command === 'string' ? server.command : undefined,
        });
    }
    const headersHelper = typeof server.headersHelper === 'string' ? server.headersHelper : undefined;
    if (headersHelper) {
        findings.push({
            severity: 'medium',
            message: `MCP server "${name}" runs "${clip(headersHelper)}" to produce request headers`,
            recommendation: 'A headers helper runs on your machine each time the server connects. Keep it in user settings, or make sure it only reads a local credential.',
            needle: 'headersHelper',
        });
        for (const risk of findShellRisks(headersHelper)) {
            findings.push({
                severity: risk.severity,
                message: `MCP server "${name}" headersHelper ${risk.label}`,
                recommendation: 'Remove the command, or replace it with a reviewed local script.',
                needle: 'headersHelper',
            });
        }
    }
    const url = typeof server.url === 'string' ? server.url : undefined;
    if (url &&
        /^http:\/\//i.test(url) &&
        !/^http:\/\/(?:localhost|127\.0\.0\.1|\[::1\])(?::|\/|$)/i.test(url)) {
        findings.push({
            severity: 'medium',
            message: `MCP server "${name}" connects over unencrypted HTTP`,
            recommendation: 'Use https:// for remote MCP servers.',
            needle: url,
        });
    }
    return findings;
}
// The quoted JSON form finds the value itself: a bare "~" would also match
// "Edit(~/.zshrc)" on an earlier line.
function lineOf(lines, needle) {
    if (!needle)
        return undefined;
    for (const form of [JSON.stringify(needle), needle]) {
        const idx = lines.findIndex((line) => line.includes(form));
        if (idx !== -1)
            return idx + 1;
    }
    return undefined;
}
/**
 * Risky settings in committed agent configuration: Claude Code permissions,
 * hooks, environment, and credential helpers, and MCP server definitions.
 * Hardcoded credentials are reported through the secrets patterns, with
 * redacted evidence.
 */
function checkAgentConfig(filePath, content) {
    let parsed;
    try {
        parsed = JSON.parse(stripJsonComments(content));
    }
    catch {
        return [
            {
                id: `agent-config-invalid-${filePath}`,
                severity: 'low',
                category: 'agent-config',
                file: filePath,
                message: 'Agent configuration file is not valid JSON',
                recommendation: 'Fix the syntax so the agent and reviewers read the settings you intend.',
            },
        ];
    }
    const root = asRecord(parsed) ?? {};
    const findings = [];
    if (filePath.replace(/\\/g, '/').endsWith('.claude/settings.json')) {
        findings.push(...claudeSettingsFindings(root));
        findings.push(...credentialFindings('Claude Code settings', asRecord(root.env)));
    }
    const servers = asRecord(root.mcpServers) ?? asRecord(root.servers) ?? {};
    for (const [name, value] of Object.entries(servers)) {
        const server = asRecord(value);
        if (server)
            findings.push(...mcpServerFindings(name, server));
    }
    const lines = content.split('\n');
    // Every finding quoting a line masks the whole of each credential configured
    // on it, not only the part a pattern recognized: in a compact file the
    // unpinned-npx finding quotes the same line as the server's env values.
    const credentialMasks = new Map();
    for (const finding of findings) {
        const line = finding.secret === true ? lineOf(lines, finding.needle) : undefined;
        if (line === undefined)
            continue;
        credentialMasks.set(line, [
            ...(credentialMasks.get(line) ?? []),
            ...credentialForms(finding.needle),
        ]);
    }
    // Built once per line: many findings can quote the same long line.
    const evidenceByLine = new Map();
    const evidenceAt = (line) => {
        let evidence = evidenceByLine.get(line);
        if (evidence === undefined) {
            evidence = getLineEvidence(content, line, credentialMasks.get(line));
            evidenceByLine.set(line, evidence);
        }
        return evidence;
    };
    const secretIssues = checkSecrets(filePath, content).map((issue) => ({
        ...issue,
        ...(issue.line !== undefined && credentialMasks.has(issue.line)
            ? { evidence: evidenceAt(issue.line) }
            : {}),
        id: issue.id.replace(/^secrets-/, 'agent-config-secret-'),
        category: 'agent-config',
        message: `${issue.message.replace(' in an agent instruction file', '')} in agent configuration`,
        recommendation: 'Reference the credential through an environment variable (for example "${env:API_KEY}") instead of committing it, and rotate the exposed value.',
    }));
    const secretLines = new Set(secretIssues.map((i) => i.line));
    const issues = [];
    findings.forEach((finding, i) => {
        const line = lineOf(lines, finding.needle);
        if (finding.secret === true && line !== undefined && secretLines.has(line))
            return;
        issues.push({
            id: `agent-config-${filePath}-${i}`,
            severity: finding.severity,
            category: 'agent-config',
            file: filePath,
            ...(line ? { line, evidence: evidenceAt(line) } : {}),
            message: finding.message,
            recommendation: finding.recommendation,
        });
    });
    return [...issues, ...secretIssues];
}
// The value may appear JSON-escaped on the line, so both spellings are masked.
function credentialForms(value) {
    return value ? [value, JSON.stringify(value).slice(1, -1)] : [];
}
/** Repository scripts that `.claude/settings.json` runs from hooks or the status line. */
function claudeSettingsScripts(content) {
    try {
        const settings = asRecord(JSON.parse(stripJsonComments(content)));
        return settings ? referencedScripts(settings) : [];
    }
    catch {
        return [];
    }
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/audit/checks/frontmatter.ts
/**
 * Parse a leading `---` YAML frontmatter block into top-level `key: value`
 * pairs. Only the shape tools rely on is needed, so nested YAML is kept as the
 * raw text after the colon. Returns null when there is no frontmatter, and
 * `endLine: -1` when it is never closed.
 */
function parseFrontmatter(content) {
    const text = content.charCodeAt(0) === 0xfeff ? content.slice(1) : content;
    const lines = text.split('\n');
    if (lines[0]?.trim() !== '---')
        return null;
    const fields = new Map();
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        if (line.trim() === '---')
            return { fields, endLine: i + 1 };
        const match = /^([A-Za-z][\w-]*)\s*:\s*(.*)$/.exec(line);
        if (match)
            fields.set(match[1], match[2].trim());
    }
    return { fields, endLine: -1 };
}
function hasValue(fields, key) {
    const value = fields.get(key);
    if (value === undefined)
        return false;
    return !/^(?:|""|''|\[\]|null|~)$/.test(value);
}
const RULES = [
    {
        tool: 'Cursor rule',
        appliesTo: (rel) => /^\.cursor\/rules\/.+\.mdc$/.test(rel),
        check: (fm) => {
            if (!fm) {
                return {
                    severity: 'low',
                    message: 'Cursor rule has no frontmatter, so it is only applied when mentioned by name',
                };
            }
            const always = fm.fields.get('alwaysApply')?.toLowerCase() === 'true';
            if (always || hasValue(fm.fields, 'globs') || hasValue(fm.fields, 'description'))
                return null;
            return {
                severity: 'medium',
                message: 'Cursor rule is never applied: it sets no alwaysApply: true, globs, or description',
            };
        },
    },
    {
        tool: 'Claude subagent',
        appliesTo: (rel) => /^\.claude\/agents\/.+\.md$/.test(rel),
        check: (fm) => {
            const missing = ['name', 'description'].filter((k) => !fm || !hasValue(fm.fields, k));
            if (missing.length === 0)
                return null;
            return {
                severity: 'medium',
                message: `Claude subagent is missing frontmatter ${missing.join(' and ')}, so Claude Code cannot load or route to it`,
            };
        },
    },
    {
        tool: 'Claude skill',
        appliesTo: (rel) => /^\.claude\/skills\/.+\/SKILL\.md$/.test(rel),
        check: (fm) => {
            const missing = ['name', 'description'].filter((k) => !fm || !hasValue(fm.fields, k));
            if (missing.length === 0)
                return null;
            return {
                severity: 'medium',
                message: `Claude skill is missing frontmatter ${missing.join(' and ')}, so it will not be offered`,
            };
        },
    },
    {
        tool: 'Copilot instructions',
        appliesTo: (rel) => /^\.github\/instructions\/.+\.instructions\.md$/.test(rel),
        check: (fm) => {
            if (fm && hasValue(fm.fields, 'applyTo'))
                return null;
            return {
                severity: 'low',
                message: 'Copilot instructions file has no applyTo pattern, so it is only used when attached by hand',
            };
        },
    },
];
/**
 * Tool-specific files that the tool silently ignores when their frontmatter
 * is missing, unclosed, or incomplete.
 */
function checkFrontmatter(filePath, content) {
    const rel = filePath.replace(/\\/g, '/');
    const rule = RULES.find((r) => r.appliesTo(rel));
    if (!rule)
        return [];
    const fm = parseFrontmatter(content);
    if (fm && fm.endLine === -1) {
        return [
            {
                id: `frontmatter-unclosed-${filePath}`,
                severity: 'medium',
                category: 'frontmatter',
                file: filePath,
                line: 1,
                message: `${rule.tool} frontmatter is never closed with ---, so the whole file is read as metadata`,
                recommendation: 'Close the frontmatter block with a line containing only ---.',
            },
        ];
    }
    const finding = rule.check(fm);
    if (!finding)
        return [];
    return [
        {
            id: `frontmatter-${filePath}`,
            severity: finding.severity,
            category: 'frontmatter',
            file: filePath,
            line: 1,
            message: finding.message,
            recommendation: 'Add the frontmatter fields the tool needs so the file is actually loaded; see the tool documentation for the expected keys.',
        },
    ];
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/audit/checks/claudeArtifacts.ts





const RUNS_SHELL = /^\.claude\/(?:commands\/.+\.md|skills\/.+\.md)$/;
const SUBAGENT = /^\.claude\/agents\/.+\.md$/;
const MEMORY_FILE = /(?:^|\/)CLAUDE\.md$/i;
/**
 * Tools a command or skill pre-approves, from `allowed-tools` as a comma
 * separated string or a YAML list. Commas inside `Bash(...)` stay with their rule.
 */
function allowedTools(content) {
    const lines = content.split('\n');
    const fm = parseFrontmatter(content);
    if (!fm || fm.endLine === -1)
        return [];
    const at = lines.findIndex((l, i) => i < fm.endLine && /^allowed-tools\s*:/.test(l));
    if (at === -1)
        return [];
    const inline = lines[at].replace(/^allowed-tools\s*:\s*/, '').replace(/^\[|\]$/g, '');
    const rules = [];
    for (const rule of splitRules(inline))
        rules.push({ rule, line: at + 1 });
    for (let i = at + 1; i < fm.endLine - 1; i++) {
        const item = /^\s+-\s+(.+)$/.exec(lines[i]);
        if (!item)
            break;
        rules.push({ rule: unquote(item[1]), line: i + 1 });
    }
    return rules;
}
function splitRules(text) {
    const rules = [];
    let depth = 0;
    let current = '';
    for (const char of text) {
        if (char === '(')
            depth++;
        if (char === ')')
            depth = Math.max(0, depth - 1);
        if (depth === 0 && (char === ',' || char === ' ')) {
            if (current.trim())
                rules.push(unquote(current));
            current = '';
            continue;
        }
        current += char;
    }
    if (current.trim())
        rules.push(unquote(current));
    return rules;
}
function unquote(value) {
    return value.trim().replace(/^(["'])(.*)\1$/, '$2');
}
/**
 * Shell commands a command or skill runs before the model sees it: inline
 * !`cmd` and ```! fenced blocks. They run without a permission prompt.
 */
function injectedCommands(content) {
    const commands = [];
    const lines = content.split('\n');
    let block = null;
    let fence = null;
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (block) {
            if (/^\s*```\s*$/.test(line)) {
                commands.push({ command: block.body.join('\n'), line: block.start });
                block = null;
            }
            else {
                block.body.push(line);
            }
            continue;
        }
        const opener = /^\s*(```+|~~~+)(.*)$/.exec(line);
        if (opener) {
            if (fence === null && opener[2].trim() === '!') {
                block = { start: i + 1, body: [] };
            }
            else if (fence === null) {
                fence = opener[1];
            }
            else if (line.trim().startsWith(fence)) {
                fence = null;
            }
            continue;
        }
        if (fence !== null)
            continue;
        for (const match of line.matchAll(/!`([^`\n]+)`/g)) {
            commands.push({ command: match[1], line: i + 1 });
        }
    }
    return commands;
}
// Home-directory files that hold credentials; importing one puts it in context.
const CREDENTIAL_PATH = /(?:^|\/)(?:\.ssh|\.aws|\.gnupg|\.kube|\.docker|\.config\/gh|\.config\/gcloud)(?:\/|$)|(?:^|\/)(?:\.netrc|\.npmrc|\.pypirc|\.git-credentials|\.env(?!\.(?:example|sample|template)$)(?:\.[\w.-]+)?|id_(?:rsa|ed25519|ecdsa)\w*|[\w.-]+\.pem)$/i;
/** `@path` imports in a CLAUDE.md, outside code spans and fences. */
function memoryImports(content) {
    const imports = [];
    let fence = null;
    content.split('\n').forEach((raw, i) => {
        const opener = /^\s*(```+|~~~+)/.exec(raw);
        if (opener) {
            if (fence === null)
                fence = opener[1];
            else if (raw.trim().startsWith(fence))
                fence = null;
            return;
        }
        if (fence !== null)
            return;
        const line = raw.replace(/`[^`]*`/g, '');
        for (const match of line.matchAll(/(?:^|[\s(])@((?:~|\.{1,2})?\/?[\w.~/-]*[\w~-])/g)) {
            imports.push({ target: match[1], line: i + 1 });
        }
    });
    return imports;
}
function importFindings(rel, content) {
    const findings = [];
    for (const { target, line } of memoryImports(content)) {
        const outside = target.startsWith('~') ||
            target.startsWith('/') ||
            external_node_path_default().posix.normalize(external_node_path_default().posix.join(external_node_path_default().posix.dirname(rel), target)).startsWith('..');
        if (CREDENTIAL_PATH.test(target)) {
            findings.push({
                line,
                severity: 'high',
                message: `CLAUDE.md imports @${clip(target)}, loading a credential file into the agent context`,
                recommendation: 'Remove the import. Anything imported is sent to the model and can end up in logs and output.',
            });
        }
        else if (outside) {
            findings.push({
                line,
                severity: 'low',
                message: `CLAUDE.md imports @${clip(target)} from outside the repository, so the instructions differ per machine and cannot be reviewed`,
                recommendation: 'Keep shared instructions in the repository. Personal imports belong in CLAUDE.local.md or ~/.claude/CLAUDE.md.',
            });
        }
    }
    return findings;
}
/**
 * Claude Code commands, skills, subagents, and CLAUDE.md files that grant
 * more than their text suggests: shell commands that run on invocation,
 * blanket tool approval, subagents that skip permission prompts, and imports
 * of files outside the repository.
 */
function checkClaudeArtifact(filePath, content) {
    const rel = filePath.replace(/\\/g, '/');
    const findings = [];
    if (RUNS_SHELL.test(rel)) {
        for (const { rule, line } of allowedTools(content)) {
            for (const finding of allowRuleFindings(rule)) {
                findings.push({
                    line,
                    severity: finding.severity,
                    message: `allowed-tools ${finding.message.replace(/^Claude Code permission /, '')}`,
                    recommendation: finding.recommendation,
                });
            }
        }
        for (const { command, line } of injectedCommands(content)) {
            for (const risk of findShellRisks(command)) {
                findings.push({
                    line,
                    severity: risk.severity,
                    message: `Command runs when invoked and ${risk.label}`,
                    recommendation: '!`...` commands run before the model reads the file, without a permission prompt. Keep them to local, read-only commands.',
                });
            }
        }
    }
    if (SUBAGENT.test(rel)) {
        const mode = parseFrontmatter(content)?.fields.get('permissionMode');
        if (mode && unquote(mode) === 'bypassPermissions') {
            const line = content.split('\n').findIndex((l) => /^permissionMode\s*:/.test(l)) + 1;
            findings.push({
                line,
                severity: 'high',
                message: 'Subagent runs with permissionMode: bypassPermissions, so its tools never ask',
                recommendation: 'Remove permissionMode or use a narrower mode, and limit the subagent with a tools list.',
            });
        }
    }
    if (MEMORY_FILE.test(rel))
        findings.push(...importFindings(rel, content));
    return findings.map((f, i) => ({
        id: `agent-config-${rel}-${f.line}-${i}`,
        severity: f.severity,
        category: 'agent-config',
        file: filePath,
        line: f.line,
        evidence: getLineEvidence(content, f.line),
        message: f.message,
        recommendation: f.recommendation,
    }));
}
/**
 * Scripts referenced from settings (hooks, status line) run on every matching
 * event, so each line is checked like an inline command.
 */
function checkClaudeScript(filePath, content) {
    const issues = [];
    content.split('\n').forEach((line, i) => {
        if (/^\s*#/.test(line))
            return;
        for (const risk of findShellRisks(line)) {
            issues.push({
                id: `agent-config-${filePath.replace(/\\/g, '/')}-${i + 1}-${risk.label}`,
                severity: risk.severity,
                category: 'agent-config',
                file: filePath,
                line: i + 1,
                evidence: getLineEvidence(content, i + 1),
                message: `Script run by Claude Code settings ${risk.label}`,
                recommendation: 'Hooks and status line scripts run automatically. Keep them local and reviewed; never fetch and run remote code from them.',
            });
        }
    });
    return issues;
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/audit/packageManager.ts




const LOCKFILES = [
    ['pnpm-lock.yaml', 'pnpm'],
    ['yarn.lock', 'yarn'],
    ['package-lock.json', 'npm'],
    ['npm-shrinkwrap.json', 'npm'],
    ['bun.lock', 'bun'],
    ['bun.lockb', 'bun'],
];
// What Corepack accepts, including a `+sha512.<hex>` suffix. Anything else,
// including control characters or a very long value, is not evidence.
const DECLARED = /^(npm|pnpm|yarn|bun)@[0-9A-Za-z.+-]{1,200}$/;
/**
 * The package manager a repository uses, from the `packageManager` field and
 * the lockfiles present. Returns null when the evidence is missing or
 * disagrees, so no finding is made on a guess.
 */
function resolveExpectedPackageManager(declared, lockfiles) {
    const fromLockfiles = new Set(lockfiles.flatMap((name) => LOCKFILES.filter(([file]) => file === name).map(([, pm]) => pm)));
    if (declared !== null) {
        const match = DECLARED.exec(declared);
        if (!match)
            return null;
        const manager = match[1];
        if ([...fromLockfiles].some((pm) => pm !== manager))
            return null;
        return { manager, evidence: [`packageManager: ${declared}`, ...lockfiles] };
    }
    if (fromLockfiles.size !== 1)
        return null;
    return { manager: [...fromLockfiles][0], evidence: lockfiles };
}
/**
 * The resolved path of `target` when it is a regular file that, after
 * resolving symlinks, stays inside the repository; otherwise null. Callers
 * read the resolved path, so the file checked is the file read.
 */
async function resolveInside(realRepo, target) {
    const real = await promises_default().realpath(target).catch(() => null);
    if (real === null || !fs_safePath_isWithin(realRepo, real))
        return null;
    const stat = await promises_default().stat(real).catch(() => null);
    return stat?.isFile() ? real : null;
}
async function lockfilesIn(realRepo, dir) {
    const found = [];
    for (const [name] of LOCKFILES) {
        if ((await resolveInside(realRepo, external_node_path_default().join(dir, name))) !== null)
            found.push(name);
    }
    return found;
}
async function declaredIn(realRepo, dir) {
    const file = await resolveInside(realRepo, external_node_path_default().join(dir, 'package.json'));
    if (file === null)
        return null;
    try {
        const pkg = JSON.parse(await fs_readTextFile_readTextFile(file));
        return typeof pkg?.packageManager === 'string' ? pkg.packageManager : null;
    }
    catch {
        return null;
    }
}
async function createPackageManagerLookup(repoPath) {
    const realRepo = await promises_default().realpath(repoPath).catch(() => external_node_path_default().resolve(repoPath));
    const root = resolveExpectedPackageManager(await declaredIn(realRepo, repoPath), await lockfilesIn(realRepo, repoPath));
    const separate = new Map();
    const isSeparateProject = (dir) => {
        let pending = separate.get(dir);
        if (!pending) {
            const abs = external_node_path_default().join(repoPath, dir);
            pending = (async () => (await lockfilesIn(realRepo, abs)).length > 0 ||
                (await declaredIn(realRepo, abs)) !== null)();
            separate.set(dir, pending);
        }
        return pending;
    };
    return {
        async expectedFor(relativePath) {
            if (root === null)
                return null;
            for (let dir = external_node_path_default().dirname(relativePath); dir !== '.' && dir !== '';) {
                if (await isSeparateProject(dir))
                    return null;
                const parent = external_node_path_default().dirname(dir);
                if (parent === dir)
                    break;
                dir = parent;
            }
            return root;
        },
    };
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/audit/score.ts
const DEDUCTIONS = {
    high: 20,
    medium: 8,
    low: 3,
};
function toGrade(total) {
    if (total >= 90)
        return 'excellent';
    if (total >= 75)
        return 'good';
    if (total >= 50)
        return 'needs-work';
    return 'risky';
}
// With no instruction files there is nothing whose quality could earn points,
// so a single high deduction must not leave the repository graded "good".
const NO_FILES_ISSUE = 'presence-no-files';
function computeScore(issues) {
    if (issues.some((issue) => issue.id === NO_FILES_ISSUE)) {
        return { total: 0, max: 100, grade: toGrade(0) };
    }
    const deduction = issues.reduce((sum, issue) => sum + (DEDUCTIONS[issue.severity] ?? 0), 0);
    const total = Math.max(0, 100 - deduction);
    return { total, max: 100, grade: toGrade(total) };
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/fs/readRepoFile.ts




/**
 * Read a file by its repo-relative path, or '' when it is missing or resolves
 * outside the repository (a symlink), so its contents never reach evidence.
 */
async function readRepoFile(repoPath, rel) {
    const realRepo = await promises_default().realpath(repoPath).catch(() => repoPath);
    const realFile = await promises_default().realpath(external_node_path_default().join(repoPath, rel)).catch(() => null);
    if (realFile === null || !fs_safePath_isWithin(realRepo, realFile))
        return '';
    return fs_readTextFile_readTextFile(realFile);
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/fs/readPackageJson.ts

function toScripts(value) {
    if (typeof value !== 'object' || value === null || Array.isArray(value))
        return {};
    const scripts = {};
    for (const [name, command] of Object.entries(value)) {
        if (typeof command === 'string')
            scripts[name] = command;
    }
    return scripts;
}
async function readPackageScripts(repoPath) {
    const raw = await readRepoFile(repoPath, 'package.json');
    if (raw === '')
        return null;
    try {
        const pkg = JSON.parse(raw);
        return toScripts(pkg?.scripts);
    }
    catch {
        return null;
    }
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/audit/suppressions.ts
const KNOWN_SUPPRESSION_CATEGORIES = new Set([
    'placeholder-content',
    'safety-boundaries',
    'validation-commands',
    'final-reporting',
    'risky-language',
    'command-alignment',
    'contradictions',
    'hidden-characters',
    'secrets',
    'broken-references',
    'file-size',
    'frontmatter',
    'agent-config',
]);
const NEXT_LINE_RE = /<!--\s*acd-disable-next-line\s+(\S+)\s*-->/;
const FILE_RE = /<!--\s*acd-disable-file\s+(\S+)\s*-->/;
function parseSuppressions(content) {
    const rules = [];
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
        const lineNum = i + 1;
        const line = lines[i];
        const nextLineMatch = NEXT_LINE_RE.exec(line);
        if (nextLineMatch) {
            rules.push({ kind: 'next-line', category: nextLineMatch[1], line: lineNum });
            continue;
        }
        const fileMatch = FILE_RE.exec(line);
        if (fileMatch) {
            rules.push({ kind: 'file', category: fileMatch[1], line: lineNum });
        }
    }
    return rules;
}
function applySuppressions(issue, rules) {
    for (const rule of rules) {
        if (!KNOWN_SUPPRESSION_CATEGORIES.has(rule.category))
            continue;
        if (rule.category !== issue.category)
            continue;
        if (rule.kind === 'file')
            return true;
        if (rule.kind === 'next-line' && issue.line !== undefined && issue.line === rule.line + 1) {
            return true;
        }
    }
    return false;
}
function filterSuppressedIssues(filePath, content, issues) {
    const rules = parseSuppressions(content);
    const warnings = [];
    const seenUnknown = new Set();
    for (const rule of rules) {
        if (!KNOWN_SUPPRESSION_CATEGORIES.has(rule.category) && !seenUnknown.has(rule.category)) {
            seenUnknown.add(rule.category);
            warnings.push({
                id: `suppression-unknown-${rule.category}`,
                severity: 'low',
                category: 'suppressions',
                file: filePath,
                message: `Unknown acd suppression category: "${rule.category}"`,
                recommendation: `Valid suppression categories are: ${[...KNOWN_SUPPRESSION_CATEGORIES].join(', ')}.`,
            });
        }
    }
    const filtered = issues.filter((issue) => {
        if (issue.file !== filePath)
            return true;
        return !applySuppressions(issue, rules);
    });
    return [...filtered, ...warnings];
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/audit/auditRepo.ts






























// Extensions of the bare file names `broken-references` checks.
const BARE_NAME_PATTERNS = ['md', 'mdx', 'json', 'jsonc', 'yaml', 'yml', 'toml', 'sh'].map((ext) => `**/*.${ext}`);
/**
 * Lookup of bare file names (`RELEASING.md`) anywhere in the repository. The
 * first lookup walks the tree once, like context-file discovery does, and
 * later lookups use the collected names. Symlinked directories are not
 * traversed, so the walk stays inside the repository.
 */
function createNameLookup(repoPath) {
    let names = null;
    return async (name) => {
        names ??= glob(BARE_NAME_PATTERNS, {
            cwd: repoPath,
            dot: true,
            onlyFiles: false,
            followSymbolicLinks: true,
            fs: glob_reportSymlinksWithoutFollowing,
            expandDirectories: false,
            caseSensitiveMatch: false,
            // Twelve levels, counting the top level as depth 0.
            deep: 11,
            ignore: ['**/node_modules/**', '**/.git/**'],
        }).then((matches) => new Set(matches.map((match) => external_node_path_default().posix.basename(match))));
        return (await names).has(name);
    };
}
/**
 * References from `filePath` that resolve to nothing, trying the repository
 * root and then the file's own directory. Paths that would resolve outside
 * the repository are never probed. A missing directory that the root
 * .gitignore matches is expected to be absent, and a bare file name counts as
 * present when a file with that name exists anywhere in the repository.
 */
async function findMissingReferences(repoPath, filePath, content, context) {
    const missing = new Set();
    const bases = [repoPath, external_node_path_default().resolve(repoPath, external_node_path_default().dirname(filePath))];
    const realRepo = await promises_default().realpath(repoPath).catch(() => repoPath);
    // A candidate only counts when its real path stays inside the repository, so
    // a symlinked directory cannot be used to probe for files outside it.
    const existsInside = (candidate) => promises_default().realpath(candidate).then((real) => fs_safePath_isWithin(realRepo, real), () => false);
    for (const { target, bare } of extractFileReferences(content)) {
        // ESM TypeScript imports name `.js` files whose source is `.ts`.
        const names = /\.[cm]?js$/.test(target)
            ? [target, target.replace(/\.([cm]?)js$/, '.$1ts'), target.replace(/\.js$/, '.tsx')]
            : [target];
        const candidates = bases
            .flatMap((base) => names.map((name) => external_node_path_default().resolve(base, name)))
            .filter((candidate) => fs_safePath_isWithin(repoPath, candidate));
        if (candidates.length === 0)
            continue;
        let found = false;
        for (const candidate of candidates) {
            if (await existsInside(candidate)) {
                found = true;
                break;
            }
        }
        if (found)
            continue;
        if (target.endsWith('/') &&
            candidates.some((candidate) => context.gitignore.ignores(auditRepo_toPosix(external_node_path_default().relative(repoPath, candidate)), true))) {
            continue;
        }
        if (bare && (await context.nameExists(target)))
            continue;
        missing.add(target);
    }
    return missing;
}
async function readMakeTargets(repoPath) {
    for (const name of ['GNUmakefile', 'makefile', 'Makefile']) {
        const content = await readRepoFile(repoPath, name);
        if (content !== '')
            return parseMakeTargets(content);
    }
    return null;
}
// Guidance a file delegates to is read up to this many characters in total,
// which keeps the joined text far below the engine's string length limit.
const MAX_STRUCTURAL_CHARS = 4 * 1024 * 1024;
function joinWithinBudget(contents) {
    const parts = [];
    let size = 0;
    for (const content of contents) {
        if (size + content.length > MAX_STRUCTURAL_CHARS)
            continue;
        parts.push(content);
        size += content.length + 1;
    }
    return parts.join('\n');
}
function auditRepo_toPosix(p) {
    return p.replace(/\\/g, '/');
}
async function auditRepo_auditRepo(repoPath, opts = {}) {
    const absoluteRepo = external_node_path_default().resolve(repoPath);
    const disabled = new Set(opts.disabledChecks ?? []);
    const allowedScripts = new Set(opts.allowedMissingScripts ?? []);
    const contextFiles = await detectContextFiles(absoluteRepo, opts.ignoreFiles ?? []);
    const packageScripts = await readPackageScripts(absoluteRepo);
    const makeTargets = await readMakeTargets(absoluteRepo);
    const packageManagers = packageScripts === null ? null : await createPackageManagerLookup(absoluteRepo);
    const issues = [];
    if (contextFiles.length === 0) {
        issues.push({
            id: 'presence-no-files',
            severity: 'high',
            category: 'presence',
            file: absoluteRepo,
            message: 'No agent context files found',
            recommendation: 'Add AGENTS.md or a tool-specific instruction file before relying on coding agents.',
        });
    }
    const fileContents = [];
    for (const ctxFile of contextFiles) {
        if (ctxFile.skipped) {
            issues.push(...checkSkippedFile(ctxFile));
            continue;
        }
        const content = await fs_readTextFile_readTextFile(external_node_path_default().resolve(absoluteRepo, ctxFile.path));
        fileContents.push({ path: ctxFile.path, kind: ctxFile.kind, content });
    }
    const referenceContext = {
        gitignore: parseGitignore(await readRepoFile(absoluteRepo, '.gitignore')),
        nameExists: createNameLookup(absoluteRepo),
    };
    // Structural checks see a file together with everything it delegates to
    // ("Follow AGENTS.md", `@docs/guide.md`), so a pointer file is not told to
    // copy guidance it already inherits.
    const { imported, imports } = await loadImportedFiles(fileContents, (rel) => readRepoFile(absoluteRepo, rel));
    const instructionFiles = [...fileContents, ...imported];
    const contentByPath = new Map(instructionFiles.map((f) => [f.path, f.content]));
    const delegation = buildDelegationGraph(instructionFiles, imports);
    const runStructuralChecks = (filePath, text) => [
        ...(disabled.has('safety-boundaries') ? [] : checkSafetyBoundaries(filePath, text)),
        ...(disabled.has('validation-commands') ? [] : checkValidationCommands(filePath, text)),
        ...(disabled.has('final-reporting') ? [] : checkFinalReporting(filePath, text)),
    ];
    // Files with the same closure (every file in a rules directory) share one
    // closure object and one evaluation, so the work grows with the number of
    // distinct closures, not with the number of files times their combined size.
    const gapsByClosure = new Map();
    const structuralFindings = new Map();
    for (const { path: filePath } of fileContents) {
        if (!isPrimaryInstructionFile(filePath))
            continue;
        const closure = delegation.closure(filePath);
        let gaps = gapsByClosure.get(closure);
        if (!gaps) {
            const text = joinWithinBudget([...closure].map((p) => contentByPath.get(p) ?? ''));
            gaps = new Set(runStructuralChecks(filePath, text).map((issue) => issue.category));
            gapsByClosure.set(closure, gaps);
        }
        // Each structural check reports at most one file-level issue whose fields
        // do not depend on the text, so empty text yields the issue for each gap.
        const missing = gaps;
        structuralFindings.set(filePath, runStructuralChecks(filePath, '').filter((issue) => missing.has(issue.category)));
    }
    // A file that delegates to a primary file with the same gap leaves the
    // finding to that file, the single source of truth, unless the target
    // delegates back (a cycle), where every file in it keeps its finding.
    const reportedByTarget = (filePath, category) => delegation
        .targets(filePath)
        .some((target) => (structuralFindings.get(target) ?? []).some((i) => i.category === category) &&
        !delegation.closure(target).has(filePath));
    for (const { path: filePath, content } of fileContents) {
        const fileIssues = [];
        if (!disabled.has('hidden-characters')) {
            fileIssues.push(...checkHiddenCharacters(filePath, content));
        }
        if (!disabled.has('secrets')) {
            fileIssues.push(...checkSecrets(filePath, content));
        }
        if (!disabled.has('frontmatter')) {
            fileIssues.push(...checkFrontmatter(filePath, content));
        }
        if (!disabled.has('agent-config')) {
            fileIssues.push(...checkClaudeArtifact(filePath, content));
        }
        if (!disabled.has('placeholder-content')) {
            fileIssues.push(...checkPlaceholderContent(filePath, content));
        }
        if (!disabled.has('broken-references')) {
            const missing = await findMissingReferences(absoluteRepo, filePath, content, referenceContext);
            fileIssues.push(...checkBrokenReferences(filePath, content, missing));
        }
        if (!disabled.has('risky-language')) {
            fileIssues.push(...checkRiskyLanguage(filePath, content));
        }
        if (!disabled.has('command-alignment')) {
            if (packageScripts !== null) {
                const cmdIssues = checkCommandAlignment(filePath, content, packageScripts).filter((i) => {
                    const scriptMatch = i.message.match(/missing package script: "(.+)"/);
                    return !scriptMatch || !allowedScripts.has(scriptMatch[1]);
                });
                fileIssues.push(...cmdIssues);
                const expected = (await packageManagers?.expectedFor(filePath)) ?? null;
                fileIssues.push(...checkPackageManagerAlignment(filePath, content, expected));
            }
            else {
                fileIssues.push(...checkCommandsWithoutPackageJson(filePath, content));
            }
            fileIssues.push(...checkMakeTargets(filePath, content, makeTargets));
        }
        if (isPrimaryInstructionFile(filePath)) {
            if (!disabled.has('file-size')) {
                fileIssues.push(...checkFileSize(filePath, content, opts.maxFileBytes ?? DEFAULT_MAX_FILE_BYTES));
            }
            fileIssues.push(...(structuralFindings.get(filePath) ?? []).filter((issue) => !reportedByTarget(filePath, issue.category)));
        }
        issues.push(...filterSuppressedIssues(filePath, content, fileIssues));
    }
    // Agent configuration (permissions, MCP servers) lives in JSON files that
    // are not instruction text, so it is read separately from context files.
    if (!disabled.has('agent-config')) {
        for (const rel of AGENT_CONFIG_FILES) {
            const content = await readRepoFile(absoluteRepo, rel);
            if (content === '')
                continue;
            issues.push(...checkAgentConfig(external_node_path_default().normalize(rel), content));
            if (rel !== '.claude/settings.json')
                continue;
            for (const script of claudeSettingsScripts(content)) {
                const scriptContent = await readRepoFile(absoluteRepo, script);
                if (scriptContent !== '') {
                    issues.push(...checkClaudeScript(external_node_path_default().normalize(script), scriptContent));
                }
            }
        }
    }
    // Cross-file contradiction check runs after all files are collected
    if (!disabled.has('contradictions')) {
        const contradictionIssues = checkContradictions(fileContents);
        const fileSuppressionRules = new Map(fileContents.map((fc) => [fc.path, parseSuppressions(fc.content)]));
        for (const issue of contradictionIssues) {
            const involvedFiles = issue.files && issue.files.length > 0
                ? issue.files
                : issue.file !== 'multiple'
                    ? [issue.file]
                    : [];
            if (involvedFiles.length === 0) {
                issues.push(issue);
                continue;
            }
            const allSuppressed = involvedFiles.every((f) => {
                const rules = fileSuppressionRules.get(f) ?? [];
                return rules.some((r) => r.kind === 'file' &&
                    r.category === issue.category &&
                    KNOWN_SUPPRESSION_CATEGORIES.has(r.category));
            });
            if (!allSuppressed)
                issues.push(issue);
        }
    }
    const high = issues.filter((i) => i.severity === 'high').length;
    const medium = issues.filter((i) => i.severity === 'medium').length;
    const low = issues.filter((i) => i.severity === 'low').length;
    for (const issue of issues) {
        // Checks mask what they quote; this catches any text quoted some other way.
        issue.message = redactSecrets(issue.message);
        issue.recommendation = redactSecrets(issue.recommendation);
        if (issue.evidence !== undefined)
            issue.evidence = redactSecrets(issue.evidence);
        issue.fingerprint = fingerprintIssue(issue);
    }
    return {
        repoPath: absoluteRepo,
        files: contextFiles,
        summary: {
            fileCount: contextFiles.length,
            issueCount: issues.length,
            high,
            medium,
            low,
        },
        score: computeScore(issues),
        issues,
    };
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/text/jsonError.ts
/**
 * Describe a JSON.parse failure by position only. The parser's own message
 * quotes the start of the input, which for a file reached through a hostile
 * repository could be another file's content.
 */
function jsonError_describeJsonError(raw, err) {
    const position = /position (\d+)/.exec(err instanceof Error ? err.message : '');
    if (!position)
        return 'is not valid JSON';
    const before = raw.slice(0, Number(position[1])).split('\n');
    return `is not valid JSON (line ${before.length}, column ${before[before.length - 1].length + 1})`;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/core/util.js

// functions
function assertEqual(val) {
    return val;
}
function assertNotEqual(val) {
    return val;
}
function toZod() {
    return (schema) => schema;
}
function assertIs(_arg) { }
function assertNever(_x) {
    throw new Error("Unexpected value in exhaustive check");
}
function assert(_) { }
function getEnumValues(entries) {
    const numericValues = Object.values(entries).filter((v) => typeof v === "number");
    const values = Object.entries(entries)
        .filter(([k, _]) => numericValues.indexOf(+k) === -1)
        .map(([_, v]) => v);
    return values;
}
function joinValues(array, separator = "|") {
    return array.map((val) => stringifyPrimitive(val)).join(separator);
}
function jsonStringifyReplacer(_, value) {
    if (typeof value === "bigint")
        return value.toString();
    return value;
}
// the accessor lives on a shared prototype: an own accessor makes every box a dictionary-mode object (~360 B and a slow load per read against ~100 B and an inlined getter here)
class Cached {
    constructor(getter) {
        this._getter = getter;
        this._value = undefined;
    }
    get value() {
        const getter = this._getter;
        if (getter !== undefined) {
            this._value = getter();
            this._getter = undefined;
        }
        return this._value;
    }
}
function cached(getter) {
    return new Cached(getter);
}
function nullish(input) {
    return input === null || input === undefined;
}
function cleanRegex(source) {
    const start = source.startsWith("^") ? 1 : 0;
    const end = source.endsWith("$") ? source.length - 1 : source.length;
    return source.slice(start, end);
}
function floatSafeRemainder(val, step) {
    const ratio = val / step;
    const roundedRatio = Math.round(ratio);
    // `val` and `step` each round to a double before the division rounds again, so a true decimal multiple's quotient can sit up to 1.5 of these scaled epsilons from the integer. A 1x tolerance therefore rejected 2.03 as a multiple of 0.07; 4x covers the worst case with margin.
    const tolerance = 4 * Number.EPSILON * Math.max(Math.abs(ratio), 1);
    if (Math.abs(ratio - roundedRatio) < tolerance)
        return 0;
    return ratio - roundedRatio;
}
const EVALUATING = /* @__PURE__*/ (/* unused pure expression or super */ null && (Symbol("evaluating")));
function defineLazy(object, key, getter) {
    let value = undefined;
    Object.defineProperty(object, key, {
        get() {
            if (value === EVALUATING) {
                // Circular reference detected, return undefined to break the cycle
                return undefined;
            }
            if (value === undefined) {
                value = EVALUATING;
                value = getter();
            }
            return value;
        },
        set(v) {
            Object.defineProperty(object, key, {
                value: v,
                // configurable: true,
            });
            // object[key] = v;
        },
        configurable: true,
    });
}
function objectClone(obj) {
    return Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
}
function util_assignProp(target, prop, value) {
    Object.defineProperty(target, prop, {
        value,
        writable: true,
        enumerable: true,
        configurable: true,
    });
}
/**
 * Whichever object a def's `shape` currently answers from: the one the caller passed until the first read, the frozen copy after it.
 *
 * Its keys and descriptors read without invoking anything, which is what lets a discriminated union check its discriminator, and the cycle walk read a shape, without resolving a getter that references the schema being constructed. A def that answers `shape` from an accessor of its own has none.
 */
function rawShape(def) {
    const desc = Object.getOwnPropertyDescriptor(def, "shape");
    return desc?.get ? desc.get.raw : desc?.value;
}
// where a builder reads its source's keys and descriptors, resolving only a shape a def answers for itself. A shape resolves by object spread, so only its enumerable keys are ever part of it.
function sourceShape(schema) {
    return rawShape(schema._zod.def) ?? schema._zod.def.shape;
}
// a key whose value is not settled yet, self-caching so every read after the first gets the same one
function deferProp(target, key, getter) {
    Object.defineProperty(target, key, {
        get() {
            const value = getter();
            util_assignProp(this, key, value);
            return value;
        },
        enumerable: true,
        configurable: true,
    });
}
// Writes a settled key. A plain assignment is much cheaper than `defineProperty` and produces the same descriptor, but it runs whatever setter already answers to the key — an accessor this shape deferred, or an inherited one, which `__proto__` has on every object and prototype pollution can add for any name.
function putProp(target, key, value) {
    if (key in target)
        util_assignProp(target, key, value);
    else
        target[key] = value;
}
/**
 * Copies `keys` of `source`'s shape onto `target`, each value passed through `wrap`.
 *
 * A key the source has resolved is copied through now, so the derived shape states it outright and nothing has to resolve it to learn what it holds. A key the source still defers stays deferred, and reads back through the source's own `shape`, so it resolves once and both shapes get that one schema.
 */
function mirrorShape(target, source, keys, wrap) {
    const raw = sourceShape(source);
    for (const key of keys) {
        const desc = Object.getOwnPropertyDescriptor(raw, key);
        if (!desc.enumerable)
            continue;
        if (desc.get) {
            deferProp(target, key, () => {
                const value = source._zod.def.shape[key];
                return wrap ? wrap(value, key) : value;
            });
        }
        else
            putProp(target, key, wrap ? wrap(desc.value, key) : desc.value);
    }
}
// same, for a plain shape a caller passed rather than a schema's
function mirrorProps(target, source) {
    for (const key of Reflect.ownKeys(source)) {
        const desc = Object.getOwnPropertyDescriptor(source, key);
        if (!desc.enumerable)
            continue;
        if (desc.get)
            deferProp(target, key, () => source[key]);
        else
            putProp(target, key, desc.value);
    }
}
function mergeDefs(...defs) {
    const mergedDescriptors = {};
    for (const def of defs) {
        const descriptors = Object.getOwnPropertyDescriptors(def);
        Object.assign(mergedDescriptors, descriptors);
    }
    return Object.defineProperties({}, mergedDescriptors);
}
function cloneDef(schema) {
    return mergeDefs(schema._zod.def);
}
function getElementAtPath(obj, path) {
    if (!path)
        return obj;
    return path.reduce((acc, key) => acc?.[key], obj);
}
function promiseAllObject(promisesObj) {
    const keys = Object.keys(promisesObj);
    const promises = keys.map((key) => promisesObj[key]);
    return Promise.all(promises).then((results) => {
        const resolvedObj = {};
        for (let i = 0; i < keys.length; i++) {
            resolvedObj[keys[i]] = results[i];
        }
        return resolvedObj;
    });
}
function randomString(length = 10) {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let str = "";
    for (let i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}
function esc(str) {
    return JSON.stringify(str);
}
function slugify(input) {
    return input
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
}
const captureStackTrace = ("captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => { });
function util_isObject(data) {
    return typeof data === "object" && data !== null && !Array.isArray(data);
}
const util_allowsEval = /* @__PURE__*/ cached(() => {
    // Skip the probe under `jitless`: strict CSPs report the caught `new Function` as a `securitypolicyviolation` even though the throw is swallowed.
    if (globalConfig.jitless) {
        return false;
    }
    // @ts-ignore
    if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) {
        return false;
    }
    try {
        const F = Function;
        new F("");
        return true;
    }
    catch (_) {
        return false;
    }
});
function isPlainObject(o) {
    if (util_isObject(o) === false)
        return false;
    // modified constructor
    const ctor = o.constructor;
    if (ctor === undefined)
        return true;
    if (typeof ctor !== "function")
        return true;
    // modified prototype
    const prot = ctor.prototype;
    if (util_isObject(prot) === false)
        return false;
    // ctor doesn't have static `isPrototypeOf`
    if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) {
        return false;
    }
    return true;
}
function shallowClone(o) {
    if (isPlainObject(o))
        return { ...o };
    if (Array.isArray(o))
        return [...o];
    if (o instanceof Map)
        return new Map(o);
    if (o instanceof Set)
        return new Set(o);
    return o;
}
function numKeys(data) {
    let keyCount = 0;
    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            keyCount++;
        }
    }
    return keyCount;
}
const getParsedType = (data) => {
    const t = typeof data;
    switch (t) {
        case "undefined":
            return "undefined";
        case "string":
            return "string";
        case "number":
            return Number.isNaN(data) ? "nan" : "number";
        case "boolean":
            return "boolean";
        case "function":
            return "function";
        case "bigint":
            return "bigint";
        case "symbol":
            return "symbol";
        case "object":
            if (Array.isArray(data)) {
                return "array";
            }
            if (data === null) {
                return "null";
            }
            if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
                return "promise";
            }
            if (typeof Map !== "undefined" && data instanceof Map) {
                return "map";
            }
            if (typeof Set !== "undefined" && data instanceof Set) {
                return "set";
            }
            if (typeof Date !== "undefined" && data instanceof Date) {
                return "date";
            }
            // @ts-ignore
            if (typeof File !== "undefined" && data instanceof File) {
                return "file";
            }
            return "object";
        default:
            throw new Error(`Unknown data type: ${t}`);
    }
};
const propertyKeyTypes = /* @__PURE__*/ new Set(["string", "number", "symbol"]);
const primitiveTypes = /* @__PURE__*/ new Set([
    "string",
    "number",
    "bigint",
    "boolean",
    "symbol",
    "undefined",
]);
function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
// zod-specific utils
function clone(inst, def, params) {
    const cl = new inst._zod.constr(def ?? inst._zod.def);
    if (!def || params?.parent)
        cl._zod.parent = inst;
    return cl;
}
function normalizeParams(_params) {
    const params = _params;
    if (!params)
        return {};
    if (typeof params === "string")
        return { error: () => params };
    if (params?.message !== undefined) {
        if (params?.error !== undefined)
            throw new Error("Cannot specify both `message` and `error` params");
        params.error = params.message;
    }
    delete params.message;
    if (typeof params.error === "string")
        return { ...params, error: () => params.error };
    return params;
}
function createTransparentProxy(getter) {
    let target;
    return new Proxy({}, {
        get(_, prop, receiver) {
            target ?? (target = getter());
            return Reflect.get(target, prop, receiver);
        },
        set(_, prop, value, receiver) {
            target ?? (target = getter());
            return Reflect.set(target, prop, value, receiver);
        },
        has(_, prop) {
            target ?? (target = getter());
            return Reflect.has(target, prop);
        },
        deleteProperty(_, prop) {
            target ?? (target = getter());
            return Reflect.deleteProperty(target, prop);
        },
        ownKeys(_) {
            target ?? (target = getter());
            return Reflect.ownKeys(target);
        },
        getOwnPropertyDescriptor(_, prop) {
            target ?? (target = getter());
            return Reflect.getOwnPropertyDescriptor(target, prop);
        },
        defineProperty(_, prop, descriptor) {
            target ?? (target = getter());
            return Reflect.defineProperty(target, prop, descriptor);
        },
    });
}
function stringifyPrimitive(value) {
    if (typeof value === "bigint")
        return value.toString() + "n";
    if (typeof value === "string")
        return `"${value}"`;
    return `${value}`;
}
function optionalKeys(shape) {
    return Object.keys(shape).filter((k) => {
        return shape[k]._zod.optin !== undefined && shape[k]._zod.optout === "optional";
    });
}
// Wrapped in a `@__PURE__` IIFE: esbuild never tree-shakes a top-level initializer that contains a member access on `Number`, so the bare object literal survived into every bundle.
const NUMBER_FORMAT_RANGES = /*@__PURE__*/ (() => ({
    safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
    int32: [-2147483648, 2147483647],
    uint32: [0, 4294967295],
    float32: [-3.4028234663852886e38, 3.4028234663852886e38],
    float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
}))();
const BIGINT_FORMAT_RANGES = {
    int64: [/* @__PURE__*/ BigInt("-9223372036854775808"), /* @__PURE__*/ BigInt("9223372036854775807")],
    uint64: [/* @__PURE__*/ BigInt(0), /* @__PURE__*/ BigInt("18446744073709551615")],
};
function pick(schema, mask) {
    const currDef = schema._zod.def;
    const checks = currDef.checks;
    const hasChecks = checks && checks.length > 0;
    if (hasChecks) {
        throw new Error(".pick() cannot be used on object schemas containing refinements");
    }
    const newShape = {};
    mirrorShape(newShape, schema, maskedKeys(schema, mask));
    return clone(schema, mergeDefs(currDef, { shape: newShape, checks: [] }));
}
// the mask keys that select something, checked against the source's shape without resolving it
function maskedKeys(schema, mask) {
    const raw = sourceShape(schema);
    const keys = [];
    // `for...in` skips symbols, so a symbol in the mask would select nothing
    for (const key of Reflect.ownKeys(mask)) {
        if (!Object.getOwnPropertyDescriptor(raw, key)?.enumerable) {
            throw new Error(`Unrecognized key: "${String(key)}"`);
        }
        if (mask[key])
            keys.push(key);
    }
    return keys;
}
function omit(schema, mask) {
    const currDef = schema._zod.def;
    const checks = currDef.checks;
    const hasChecks = checks && checks.length > 0;
    if (hasChecks) {
        throw new Error(".omit() cannot be used on object schemas containing refinements");
    }
    const omitted = new Set(maskedKeys(schema, mask));
    const newShape = {};
    mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)).filter((key) => !omitted.has(key)));
    return clone(schema, mergeDefs(currDef, { shape: newShape, checks: [] }));
}
function extend(schema, shape) {
    if (!isPlainObject(shape)) {
        throw new Error("Invalid input to extend: expected a plain object");
    }
    const checks = schema._zod.def.checks;
    const hasChecks = checks && checks.length > 0;
    if (hasChecks) {
        // Only throw if new shape overlaps with existing shape. Use getOwnPropertyDescriptor to check key existence without accessing values
        const existingShape = sourceShape(schema);
        for (const key of Reflect.ownKeys(shape)) {
            if (Object.getOwnPropertyDescriptor(existingShape, key) !== undefined) {
                throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
            }
        }
    }
    return clone(schema, mergeDefs(schema._zod.def, { shape: extended(schema, shape) }));
}
// the source's keys, then the caller's overlaid on top
function extended(schema, shape) {
    const newShape = {};
    mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)));
    mirrorProps(newShape, shape);
    return newShape;
}
function safeExtend(schema, shape) {
    if (!isPlainObject(shape)) {
        throw new Error("Invalid input to safeExtend: expected a plain object");
    }
    return clone(schema, mergeDefs(schema._zod.def, { shape: extended(schema, shape) }));
}
function merge(a, b) {
    if (!b?._zod?.def) {
        throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
    }
    if (a._zod.def.checks?.length) {
        throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
    }
    const newShape = {};
    mirrorShape(newShape, a, Reflect.ownKeys(sourceShape(a)));
    mirrorShape(newShape, b, Reflect.ownKeys(sourceShape(b)));
    const def = mergeDefs(a._zod.def, {
        shape: newShape,
        get catchall() {
            return b._zod.def.catchall;
        },
        checks: b._zod.def.checks ?? [],
    });
    return clone(a, def);
}
function partial(Class, schema, mask, name = "partial") {
    const currDef = schema._zod.def;
    const checks = currDef.checks;
    const hasChecks = checks && checks.length > 0;
    if (hasChecks) {
        throw new Error(`.${name}() cannot be used on object schemas containing refinements`);
    }
    const selected = mask ? new Set(maskedKeys(schema, mask)) : undefined;
    const newShape = {};
    mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)), Class &&
        ((value, key) => (selected && !selected.has(key) ? value : new Class({ type: "optional", innerType: value }))));
    return clone(schema, mergeDefs(schema._zod.def, { shape: newShape, checks: [] }));
}
function required(Class, schema, mask) {
    const selected = mask ? new Set(maskedKeys(schema, mask)) : undefined;
    const newShape = {};
    mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)), (value, key) => 
    // overwrite with non-optional
    selected && !selected.has(key) ? value : new Class({ type: "nonoptional", innerType: value }));
    return clone(schema, mergeDefs(schema._zod.def, { shape: newShape }));
}
// invalid_type | too_big | too_small | invalid_format | not_multiple_of | unrecognized_keys | invalid_union | invalid_key | invalid_element | invalid_value | custom
function aborted(x, startIndex = 0) {
    if (x.aborted === true)
        return true;
    for (let i = startIndex; i < x.issues.length; i++) {
        if (x.issues[i]?.continue !== true) {
            return true;
        }
    }
    return false;
}
// Checks for explicit abort (continue === false), as opposed to implicit abort (continue === undefined). Used to respect `abort: true` in .refine() even for checks that have a `when` function.
function explicitlyAborted(x, startIndex = 0) {
    if (x.aborted === true)
        return true;
    for (let i = startIndex; i < x.issues.length; i++) {
        if (x.issues[i]?.continue === false) {
            return true;
        }
    }
    return false;
}
function prefixIssues(path, issues) {
    return issues.map((iss) => {
        var _a;
        (_a = iss).path ?? (_a.path = []);
        iss.path.unshift(path);
        return iss;
    });
}
function unwrapMessage(message) {
    return typeof message === "string" ? message : message?.message;
}
/* A check holds no link back to the schema it is attached to — the same check instance is shared by every clone of that schema — so the owner is stamped onto the issues a check just raised, at the only point where both are in scope. Runs on the failure path only; `start` is the issue count from before the check ran. */
/** The leading size checks of `defChecks` that set an upper bound, each paired with it. */
function sizeCaps(defChecks) {
    const caps = [];
    for (const ch of defChecks ?? []) {
        const d = ch._zod.def;
        // a later check may rewrite the value
        if (!/_(length|size)$|_equals$/.test(d.check))
            break;
        const max = d.maximum ?? d.length ?? d.size;
        if (max >= 0)
            caps.push([max, ch]);
    }
    return caps;
}
function attachSchema(issues, start, inst) {
    var _a;
    for (let i = start; i < issues.length; i++) {
        (_a = issues[i]).schema ?? (_a.schema = inst);
    }
}
function finalizeIssue(iss, ctx, config) {
    var _a;
    // A schema that raised an issue itself owns it outright, and outranks any stamp an enclosing check left in `attachSchema`. String formats and z.custom() are schema and check at once, so when they act as a check they defer to that stamp instead.
    const traits = iss.inst?._zod?.traits;
    if (traits?.has("$ZodType")) {
        if (traits.has("$ZodCheck"))
            (_a = iss).schema ?? (_a.schema = iss.inst);
        else
            iss.schema = iss.inst;
    }
    // Decreasing specificity, first map to return a message wins. `inst` is whatever raised the issue, so a check's own map outranks the owning schema's.
    const schemaError = iss.schema !== iss.inst ? iss.schema?._zod.def?.error : undefined;
    const message = iss.message
        ? iss.message
        : (unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ??
            unwrapMessage(schemaError?.(iss)) ??
            unwrapMessage(ctx?.error?.(iss)) ??
            unwrapMessage(config.customError?.(iss)) ??
            unwrapMessage(config.localeError?.(iss)) ??
            "Invalid input");
    // an explicit own-key copy beats object rest with excluded keys, which v8 routes through a generic runtime call; Object.keys rather than for-in so an issue pushed with a prototype does not leak inherited keys, and an own __proto__ key is dropped rather than assigned through the setter
    const full = {};
    for (const k of Object.keys(iss)) {
        if (k === "inst" || k === "schema" || k === "continue" || k === "input" || k === "__proto__")
            continue;
        full[k] = iss[k];
    }
    full.path ?? (full.path = []);
    full.message = message;
    if (ctx?.reportInput) {
        full.input = iss.input;
    }
    return full;
}
function getSizableOrigin(input) {
    if (input instanceof Set)
        return "set";
    if (input instanceof Map)
        return "map";
    // @ts-ignore
    if (input instanceof File)
        return "file";
    return "unknown";
}
const highSurrogate = /[\uD800-\uDBFF]/;
// Code points in `str`: a surrogate pair counts once, a lone surrogate as itself. Hand-rolled because the string iterator allocates and runs ~250x slower on this path; the regex probe exits ~50x quicker for a string with no astral characters.
function codePointLength(str) {
    const units = str.length;
    if (!highSurrogate.test(str))
        return units;
    let count = units;
    for (let i = 0; i < units - 1; i++) {
        if ((str.charCodeAt(i) & 0xfc00) === 0xd800 && (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            count--;
            i++;
        }
    }
    return count;
}
function getLengthableOrigin(input) {
    if (Array.isArray(input))
        return "array";
    if (typeof input === "string")
        return "string";
    return "unknown";
}
function parsedType(data) {
    const t = typeof data;
    switch (t) {
        case "number": {
            return Number.isNaN(data) ? "nan" : "number";
        }
        case "object": {
            if (data === null) {
                return "null";
            }
            if (Array.isArray(data)) {
                return "array";
            }
            const obj = data;
            if (obj && Object.getPrototypeOf(obj) !== Object.prototype && "constructor" in obj && obj.constructor) {
                return obj.constructor.name;
            }
        }
    }
    return t;
}
function util_issue(...args) {
    const [iss, input, inst] = args;
    if (typeof iss === "string") {
        return {
            message: iss,
            code: "custom",
            input,
            inst,
        };
    }
    return { ...iss };
}
function cleanEnum(obj) {
    return Object.entries(obj)
        .filter(([k, _]) => {
        // return true if NaN, meaning it's not a number, thus a string key
        return Number.isNaN(Number.parseInt(k, 10));
    })
        .map((el) => el[1]);
}
// Codec utility functions
function base64ToUint8Array(base64) {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
}
function uint8ArrayToBase64(bytes) {
    let binaryString = "";
    for (let i = 0; i < bytes.length; i++) {
        binaryString += String.fromCharCode(bytes[i]);
    }
    return btoa(binaryString);
}
function base64urlToUint8Array(base64url) {
    const base64 = base64url.replace(/-/g, "+").replace(/_/g, "/");
    const padding = "=".repeat((4 - (base64.length % 4)) % 4);
    return base64ToUint8Array(base64 + padding);
}
function uint8ArrayToBase64url(bytes) {
    return uint8ArrayToBase64(bytes).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function hexToUint8Array(hex) {
    const cleanHex = hex.replace(/^0x/, "");
    if (cleanHex.length % 2 !== 0) {
        throw new Error("Invalid hex string length");
    }
    const bytes = new Uint8Array(cleanHex.length / 2);
    for (let i = 0; i < cleanHex.length; i += 2) {
        bytes[i / 2] = Number.parseInt(cleanHex.slice(i, i + 2), 16);
    }
    return bytes;
}
function uint8ArrayToHex(bytes) {
    return Array.from(bytes)
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
}
// instanceof
class Class {
    constructor(..._args) { }
}
//////////    PROTOTYPE INSTALLERS     //////////
//
// Members live on the prototype and materialize per instance on first read, which keeps own-property count under the step where V8 stops using inline slots. Changing anything here means re-measuring runtime, memory and bundle size together — see "The three axes" in AGENTS.md.
/**
 * Installs a trait's members on its prototype. Each value builds that member for the instance on first read; the built value shadows the accessor as an own property, so a detached `const { parse } = schema` keeps working.
 *
 * Call this from a `proto` initializer, which runs once per prototype — never per instance.
 */
function members(proto, table) {
    for (const key in table) {
        const desc = Object.getOwnPropertyDescriptor(table, key);
        // a getter installs as written, so it stays live: `description` reads through to the registry on every access. not enumerable: an object literal's is, and a prototype member never was
        if (desc.get)
            Object.defineProperty(proto, key, { ...desc, enumerable: false });
        // a method materializes bound on first read, which is what keeps a detached member working: `const opt = schema.optional; opt()`
        else
            defineBound(proto, key, desc.value);
    }
}
/** Shadows a prototype member with an own value, so a getter that builds from the instance runs once. */
function own(inst, key, value, enumerable = true) {
    Object.defineProperty(inst, key, { configurable: true, writable: true, enumerable, value });
    return value;
}
/** Like {@link own}, for a member that was never an own data property and has to stay out of `Object.keys`. */
function hide(inst, key, value) {
    return own(inst, key, value, false);
}
/** Adds members a table derives from the instance: each builds on first read and shadows as own data, and assignment shadows the same way, as when these were own properties. */
function derived(computes, table) {
    for (const key in computes) {
        const compute = computes[key];
        // an object literal's accessor is configurable and enumerable, and `members` copies the descriptor as written
        Object.defineProperty(table, key, {
            configurable: true,
            enumerable: true,
            get() {
                return own(this, key, compute(this));
            },
            set(value) {
                own(this, key, value);
            },
        });
    }
    return table;
}
function defineBound(proto, key, fn) {
    Object.defineProperty(proto, key, {
        configurable: true,
        get() {
            // vitest's spyOn calls a prototype getter bare to find the function it wraps, so a nullish receiver answers the raw method
            return this == null ? fn : own(this, key, fn.bind(this));
        },
        set(value) {
            own(this, key, value);
        },
    });
}
/** Returns the prototype to install on, or `undefined` if this group is already installed on it. */
function claim(inst, sentinel) {
    const proto = Object.getPrototypeOf(inst);
    // Runs on every construction, so `in` rather than the costlier `hasOwnProperty.call`. Sentinels are keys the group itself defines.
    return sentinel in proto ? undefined : proto;
}
// The internals whose init chain is installing. A second call for the same one is a derived constructor overriding its base, so it must not construct another schema in between or the override is dropped.
let installing;
// Set while a getter is running, so a value that resolved through a recursion break is not memoized. One shared descriptor shadows the key for the duration, which costs no per-key allocation.
let broke = false;
const breaker = {
    configurable: true,
    get() {
        broke = true;
        return undefined;
    },
};
/**
 * Installs a lazily-derived internal on the `_zod` prototype of `inst`'s
 * constructor, computed from the internals object itself and cached there on
 * first read. One accessor per constructor rather than one per instance.
 */
function defineLazyInternal(inst, key, compute) {
    const proto = Object.getPrototypeOf(inst._zod);
    if (key in proto && installing !== inst._zod) {
        // A repeat construction: everything is installed already. Cleared here so the reference is not held past the first construction of every type.
        installing = undefined;
        return;
    }
    installing = inst._zod;
    Object.defineProperty(proto, key, {
        configurable: true,
        get() {
            // Shadowed before computing so a re-entrant read from a recursive schema resolves to undefined instead of running the getter again.
            Object.defineProperty(this, key, breaker);
            const outer = broke;
            broke = false;
            try {
                const value = compute(this);
                // A result that resolved through a recursion break is recomputed once the graph is complete; everything else memoizes, undefined included.
                if (broke)
                    delete this[key];
                else
                    Object.defineProperty(this, key, { configurable: true, writable: true, value });
                broke = broke || outer;
                return value;
            }
            catch (err) {
                // A compute that threw memoizes nothing, so a later read runs it again and fails the same way. The shadow goes with it, since leaving it installed would answer undefined for every later read.
                delete this[key];
                broke = broke || outer;
                throw err;
            }
        },
        set(value) {
            Object.defineProperty(this, key, { configurable: true, writable: true, value });
        },
    });
}
/**
 * Installs `key` on `inst`'s prototype, computed by `make` on first read and cached there as an own
 * data property. One accessor per constructor rather than one per instance, because an own accessor
 * puts every instance after the first into v8 dictionary mode. The key doubles as the sentinel.
 */
function installLazyProp(inst, key, make, enumerable) {
    const proto = claim(inst, key);
    if (!proto)
        return;
    Object.defineProperty(proto, key, {
        configurable: true,
        get() {
            // Shadowed before computing, so a re-entrant read from a self-referential shape resolves to undefined instead of running the getter again. A data property rather than an accessor: an own accessor is the dictionary-mode transition this exists to avoid.
            const desc = { configurable: true, writable: true, enumerable, value: undefined };
            Object.defineProperty(this, key, desc);
            // a compute that throws leaves the shadow behind, so later reads answer undefined instead of re-throwing; `defineLazy` did the same, and `defineLazyInternal`'s delete-on-catch would cost bytes in every bundle for a case only a throwing user getter reaches
            desc.value = make(this);
            Object.defineProperty(this, key, desc);
            return desc.value;
        },
        set(value) {
            Object.defineProperty(this, key, { configurable: true, writable: true, enumerable, value });
        },
    });
}
/** Marks the thunk `_catch` synthesises for a constant catch value. `Function.length` cannot tell that thunk from a user callback — rest and defaulted parameters both report arity 0 — and a user callback reads `ctx.error`, whose issues only finalize correctly against the caller's per-parse error map. Provenance can say what arity cannot. A plain string key rather than `Symbol.for`, whose call at module scope no bundler can prove pure — the same shape that anchored `urlCanParse` into every build. */
const CONSTANT_CATCH = "~constantCatch";
/** Wraps a constant catch value in a thunk tagged with {@link CONSTANT_CATCH}. */
function constantCatch(value) {
    const fn = () => value;
    fn[CONSTANT_CATCH] = true;
    return fn;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/core/core.js
var _a;

/** A special constant with type `never` */
const NEVER = /*@__PURE__*/ Object.freeze({
    status: "aborted",
});
/* Shared descriptor for installing `_zod`; defineProperty reads it
 * synchronously, so reusing one object avoids a per-instance allocation. */
const _zodDesc = { value: undefined, enumerable: false };
// null where suppressing the capture would be unrecoverable: `parse()` puts the frames back with `captureStackTrace`, so without it the throw would lose its stack. also latched to null once `stackTraceLimit` proves unassignable, which a realm can do at any point by hardening Error
let _E = "captureStackTrace" in Error ? Error : null;
// v8 captures a stack trace inside the Error constructor, which dominates a failed parse; costs only the frames, and parse() restores those. the constructor must RUN: Object.create is cheaper and passes instanceof, but Error.isError and util.types.isNativeError check an internal slot
function newError(Definition) {
    const E = _E;
    if (E) {
        const saved = E.stackTraceLimit;
        if (typeof saved === "number") {
            try {
                E.stackTraceLimit = 0;
            }
            catch {
                _E = null;
                return new Definition();
            }
            try {
                return new Definition();
            }
            finally {
                E.stackTraceLimit = saved;
            }
        }
    }
    return new Definition();
}
function $constructor(name, initializer, 
/** This trait's members, installed once on every prototype that composes it. They cannot be declared in the initializer above: that runs per instance, and the prototype is shared. */
proto, params) {
    // Prototype for this constructor's `_zod` internals. Lazily-derived fields (`values`, `pattern`, `optin`, …) install here once rather than as an accessor on every instance.
    const zodProto = {};
    // Assigning the fields in the constructor body is what gives instances in-object slots; building the object literally and reparenting it costs a second allocation and a generic property copy.
    function Internals(def) {
        this.def = def;
        this.constr = _;
        this.traits = new Set();
    }
    Internals.prototype = zodProto;
    const protoMembers = proto;
    // One trait's members land on every prototype whose chain composes it, so the answer is per prototype rather than per trait.
    const initialized = protoMembers && new WeakSet();
    function init(inst, def) {
        if (!inst._zod) {
            _zodDesc.value = new Internals(def);
            try {
                Object.defineProperty(inst, "_zod", _zodDesc);
            }
            finally {
                // Cleared even on throw, so the shared descriptor never leaks one instance's internals into the next.
                _zodDesc.value = undefined;
            }
        }
        else if (inst._zod.traits.has(name)) {
            return;
        }
        inst._zod.traits.add(name);
        initializer(inst, def);
        if (initialized) {
            // `super(def)` from a user subclass gives `this` a prototype the subclass owns, and installing there would overwrite whatever the subclass declared. `constr` built the instance, so its prototype is the one below the subclass's that should carry the members. A receiver whose chain never reaches that prototype installs on its own, which for a plain object handed straight to `init` means `Object.prototype` — unchanged from before.
            const own = Object.getPrototypeOf(inst);
            const ctorProto = inst._zod.constr.prototype;
            let up = own;
            while (up && up !== ctorProto)
                up = Object.getPrototypeOf(up);
            const target = up ?? own;
            if (!initialized.has(target)) {
                initialized.add(target);
                members(target, protoMembers);
            }
        }
        // support prototype modifications; for-in avoids the array allocation of Object.keys on the (usually empty) prototype
        const proto = _.prototype;
        for (const k in proto) {
            if (!Object.prototype.hasOwnProperty.call(proto, k))
                continue;
            if (!(k in inst)) {
                inst[k] = proto[k].bind(inst);
            }
        }
    }
    // doesn't work if Parent has a constructor with arguments
    const Parent = params?.Parent ?? Object;
    class Definition extends Parent {
    }
    Object.defineProperty(Definition, "name", { value: name });
    function _(def) {
        const inst = params?.Parent ? newError(Definition) : this;
        init(inst, def);
        const deferred = inst._zod.deferred;
        if (deferred) {
            for (const fn of deferred) {
                fn();
            }
            // Released: initializers run once, and the list would otherwise be retained for the schema's lifetime.
            inst._zod.deferred = undefined;
        }
        // Global post-processor hook. Internal: installed by `import "zod/compile"` to enable AOT compilation for every constructed schema. Runs last, once the instance is fully built, because it hands the instance to compile(). The post-processor is expected to be reentrancy-guarded by its own implementation.
        const pp = globalThis.__zod_globalConfig?.postProcessor;
        if (pp)
            pp(inst);
        return inst;
    }
    Object.defineProperty(_, "init", { value: init });
    Object.defineProperty(_, Symbol.hasInstance, {
        value: (inst) => {
            if (params?.Parent && inst instanceof params.Parent)
                return true;
            return inst?._zod?.traits?.has(name);
        },
    });
    Object.defineProperty(_, "name", { value: name });
    return _;
}
//////////////////////////////   UTILITIES   ///////////////////////////////////////
const $brand = /*@__PURE__*/ (/* unused pure expression or super */ null && (Symbol("zod_brand")));
class $ZodAsyncError extends Error {
    constructor() {
        super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
    }
}
class $ZodEncodeError extends Error {
    constructor(name) {
        super(`Encountered unidirectional transform during encode: ${name}`);
        this.name = "ZodEncodeError";
    }
}
(_a = globalThis).__zod_globalConfig ?? (_a.__zod_globalConfig = {});
const globalConfig = globalThis.__zod_globalConfig;
function config(newConfig) {
    if (newConfig)
        Object.assign(globalConfig, newConfig);
    return globalConfig;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/core/memoizer.js

class $ZodCyclicError extends Error {
    constructor() {
        super(`Cannot parse a reference cycle that closes through a transform`);
        this.name = "ZodCyclicError";
    }
}
/** Keyed off the context object every schema in one parse call already shares. */
const STATE = "~memo";
const NO_ISSUES = [];
// a value a cycle can close through
function isRef(value) {
    return value !== null && typeof value === "object";
}
// Receivers prefix paths in place, so the cache and every hand-out need their own copies.
function cloneIssues(issues) {
    return issues.map((iss) => (iss.path ? { ...iss, path: iss.path.slice() } : { ...iss }));
}
const recursive = /*@__PURE__*/ new WeakMap();
/** What the walk established, in order of certainty: ordered so the strongest answer among children wins. */
const NONE = 0;
const ASSUMED = 1;
const PROVEN = 2;
/** Whether this schema's subtree contains a cycle, so one parse can re-enter it. */
function memoizer_isRecursive(inst, stack, resolve) {
    const cached = recursive.get(inst);
    if (cached !== undefined)
        return cached ? PROVEN : NONE;
    // Relative to the walk in progress, so not cached.
    if (stack.has(inst))
        return PROVEN;
    stack.add(inst);
    let result = NONE;
    const check = (child) => {
        if (result !== PROVEN && child?._zod) {
            const answer = memoizer_isRecursive(child, stack, resolve);
            if (answer > result)
                result = answer;
        }
    };
    // `Reflect.ownKeys` rather than `Object.keys`, so a cycle through a declared symbol key is still seen
    const shape = (sh, spread) => {
        let answer = NONE;
        for (const key of Reflect.ownKeys(sh)) {
            const desc = Object.getOwnPropertyDescriptor(sh, key);
            // an object resolves its shape by spread, so a key it does not enumerate is never parsed; `z.properties` reads every own key and so keeps them all
            if (spread && !desc.enumerable)
                continue;
            // resolving runs user code, and a factory mints a fresh subtree per read, so an edge the walk can't follow counts as a cycle
            const child = desc.get ? ASSUMED : desc.value?._zod ? memoizer_isRecursive(desc.value, stack, resolve) : NONE;
            if (child > answer)
                answer = child;
        }
        return answer;
    };
    const merge = (answer) => {
        if (answer > result)
            result = answer;
    };
    const def = inst._zod.def;
    const kind = def.type;
    switch (kind) {
        case "object": {
            const raw = rawShape(def);
            // a def with no raw shape answers `shape` from an accessor of its own, and running that can mint a whole fresh subtree
            merge(raw ? shape(raw, true) : ASSUMED);
            check(def.catchall);
            break;
        }
        case "array":
            check(def.element);
            break;
        case "tuple":
            for (const el of def.items)
                check(el);
            check(def.rest);
            break;
        case "record":
        case "map":
            check(def.keyType);
            check(def.valueType);
            break;
        case "set":
            check(def.valueType);
            break;
        case "union":
            for (const el of def.options)
                check(el);
            break;
        case "intersection":
            check(def.left);
            check(def.right);
            break;
        case "optional":
        case "nullable":
        case "default":
        case "prefault":
        case "catch":
        case "readonly":
        case "nonoptional":
        case "promise":
        case "success":
            check(def.innerType);
            break;
        case "pipe":
            check(def.in);
            check(def.out);
            break;
        case "function":
            check(def.input);
            check(def.output);
            break;
        // `$ZodLazy` caches its inner on the def, so a resolved edge is followed exactly
        case "lazy": {
            const inner = def._cachedInner ?? (resolve ? inst._zod.innerType : undefined);
            // walked with resolution off: one hop sees past the deferral, and a lazy that yields only another unresolved lazy is generative, so it stops there
            merge(inner ? memoizer_isRecursive(inner, stack, false) : ASSUMED);
            break;
        }
        // a leaf by choice: `parts` are regex fragments, not data positions
        case "template_literal":
        // leaves
        case "string":
        case "number":
        case "int":
        case "boolean":
        case "bigint":
        case "symbol":
        case "undefined":
        case "null":
        case "void":
        case "never":
        case "any":
        case "unknown":
        case "date":
        case "nan":
        case "enum":
        case "literal":
        case "file":
        case "transform":
        case "custom":
            break;
        default: {
            // a new built-in kind becomes a compile error here
            kind;
            // a user-defined kind can still hold children, and only its author knows where, so fall back to scanning the def — skipping accessors, since reading one can run user code
            for (const key in def) {
                const desc = Object.getOwnPropertyDescriptor(def, key);
                if (!desc || desc.get)
                    continue;
                const value = desc.value;
                if (!value || typeof value !== "object")
                    continue;
                if (value._zod)
                    check(value);
                else if (Array.isArray(value))
                    for (const el of value)
                        check(el);
            }
        }
    }
    stack.delete(inst);
    return settle(inst, result);
}
/** An assumed answer must not outlive the resolution that settles it, so only a certain one is cached. */
function settle(inst, answer) {
    if (answer !== ASSUMED)
        recursive.set(inst, answer === PROVEN);
    return answer;
}
/**
 * Whether one parse can re-enter this schema, i.e. its subtree contains a cycle.
 * Exported for `z.compile`, which refuses to compile such a schema: cycle
 * breaking is driven from here off state keyed on the parse context, and a
 * generated fast path has no context to key on.
 */
function isRecursiveSchema(inst) {
    // z.compile never parses, so nothing would ever resolve a lazy for it; it runs once and already treats a throw here as recursive
    return memoizer_isRecursive(inst, new Set(), true) !== NONE;
}
function bucketFor(state, inst) {
    let bucket = state.buckets.get(inst);
    if (!bucket) {
        bucket = new WeakMap();
        state.buckets.set(inst, bucket);
    }
    return bucket;
}
// Set immediately before delegating to core and cleared immediately after, so `alloc` registers only for a visit this module is driving.
let handoff;
// Allocated but unfinished entries. `alloc` and the matching pop both happen in the synchronous part of a parse, so they nest even when children are async, and one stack serves every schema.
const memoizer_open = [];
const memo = {
    alloc(_inst, payload, empty) {
        const bucket = handoff;
        if (!bucket)
            return empty;
        handoff = undefined;
        const entry = { value: empty, issues: null };
        bucket.set(payload.value, entry);
        memoizer_open.push(entry);
        return empty;
    },
    guard(inst) {
        var _a;
        (_a = inst._zod).deferred ?? (_a.deferred = []);
        inst._zod.deferred.push(() => {
            const base = inst._zod.parse;
            const wrapped = (payload, ctx) => {
                // The value is a placeholder a back-edge is still waiting on, so the cycle closes through this transform. Its output can't exist in time to bind.
                if (ctx.direction !== "backward" && isBackEdge(ctx, payload.value))
                    throw new $ZodCyclicError();
                return base(payload, ctx);
            };
            inst._zod.parse = wrapped;
            if (inst._zod.run === base)
                inst._zod.run = wrapped;
        });
    },
    attach(inst) {
        var _a;
        let isRecursiveInst;
        let rechecked = false;
        // a recursive schema is re-entered many times per parse and its bucket never changes
        let lastCtx;
        let lastBucket;
        // Wraps `parse` in a deferred so it sees the container's final parse. Core's own deferred copies `parse` into `run` when there are no checks, and it ran first, so `run` is patched to match; with checks, `run` reads `parse` dynamically.
        (_a = inst._zod).deferred ?? (_a.deferred = []);
        inst._zod.deferred.push(() => {
            const base = inst._zod.parse;
            const wrapped = (payload, ctx) => {
                if (isRecursiveInst === undefined) {
                    const walked = memoizer_isRecursive(inst, new Set(), false);
                    if (walked === NONE) {
                        // Nothing here can ever fire, so take it back out.
                        inst._zod.parse = base;
                        if (inst._zod.run === wrapped)
                            inst._zod.run = base;
                        return base(payload, ctx);
                    }
                    // this parse resolves the deferred edges on its own path, so ask once more before latching
                    if (walked === PROVEN || rechecked)
                        isRecursiveInst = true;
                    else
                        rechecked = true;
                }
                const input = payload.value;
                if (!isRef(input))
                    return base(payload, ctx);
                let state = ctx[STATE];
                if (!state) {
                    state = { buckets: new WeakMap(), backEdges: undefined };
                    ctx[STATE] = state;
                }
                let bucket;
                if (lastCtx === ctx) {
                    bucket = lastBucket;
                }
                else {
                    bucket = bucketFor(state, inst);
                    lastCtx = ctx;
                    lastBucket = bucket;
                }
                const hit = bucket.get(input);
                if (hit) {
                    payload.value = hit.value;
                    if (hit.issues) {
                        if (hit.issues.length)
                            payload.issues.push(...cloneIssues(hit.issues));
                    }
                    else {
                        // Still being parsed: its own checks cover it, so skip them here.
                        payload.memo = true;
                        state.backEdges ?? (state.backEdges = new WeakSet());
                        state.backEdges.add(hit.value);
                    }
                    return payload;
                }
                handoff = bucket;
                const depth = memoizer_open.length;
                const result = base(payload, ctx);
                handoff = undefined;
                // A container that rejected its input outright allocated nothing.
                const entry = memoizer_open.length > depth ? memoizer_open.pop() : undefined;
                // Both paths written out so the sync one allocates no closure. It runs once per node, and capturing here cost more than everything else combined.
                if (result instanceof Promise) {
                    return result.then((r) => {
                        if (entry)
                            entry.issues = r.issues.length ? cloneIssues(r.issues) : NO_ISSUES;
                        return r;
                    });
                }
                if (entry)
                    entry.issues = result.issues.length ? cloneIssues(result.issues) : NO_ISSUES;
                return result;
            };
            inst._zod.parse = wrapped;
            if (inst._zod.run === base)
                inst._zod.run = wrapped;
        });
    },
};
/** The memoizer that gives containers cycle support. `zod` installs it by default; `zod/mini` opts in with `config({ memoizer: memoizer() })`. */
function memoizer() {
    return memo;
}
/** Whether this value is a node a back-edge resolved to before it finished. */
function isBackEdge(ctx, value) {
    const backEdges = ctx[STATE]?.backEdges;
    return backEdges !== undefined && isRef(value) && backEdges.has(value);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/core/regexes.js

/**
 * @deprecated CUID v1 is deprecated by its authors due to information leakage
 * (timestamps embedded in the id). Use {@link cuid2} instead.
 * See https://github.com/paralleldrive/cuid.
 */
const cuid = /^[cC][0-9a-z]{6,}$/;
const cuid2 = /^[0-9a-z]+$/;
const ulid = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/;
const xid = /^[0-9a-vA-V]{20}$/;
const ksuid = /^[A-Za-z0-9]{27}$/;
const nanoid = /^[a-zA-Z0-9_-]{21}$/;
function nanoidOfLength(length) {
    return new RegExp(`^[a-zA-Z0-9_-]{${length}}$`);
}
/** ISO 8601-1 duration regex. Does not support the 8601-2 extensions like negative durations or fractional/negative components. */
const duration = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
/** Implements ISO 8601-2 extensions like explicit +- prefixes, mixing weeks with other units, and fractional/negative components. */
const extendedDuration = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
/** A regex for any UUID-like identifier: 8-4-4-4-12 hex pattern */
const guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
/** Returns a regex for validating an RFC 9562/4122 UUID.
 *
 * @param version Optionally specify a version 1-8. If no version is specified, all versions are supported. */
const uuid = (version) => {
    if (!version)
        return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
    return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
};
const uuid4 = /*@__PURE__*/ (/* unused pure expression or super */ null && (uuid(4)));
const uuid6 = /*@__PURE__*/ (/* unused pure expression or super */ null && (uuid(6)));
const uuid7 = /*@__PURE__*/ (/* unused pure expression or super */ null && (uuid(7)));
/** Practical email validation */
const email = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
/** Equivalent to the HTML5 input[type=email] validation implemented by browsers. Source: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email */
const html5Email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
/** The classic emailregex.com regex for RFC 5322-compliant emails */
const rfc5322Email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/** A loose regex that allows Unicode characters, enforces length limits, and that's about it. */
const unicodeEmail = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u;
const idnEmail = (/* unused pure expression or super */ null && (unicodeEmail));
const browserEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
// from https://thekevinscott.com/emojis-in-javascript/#writing-a-regular-expression
// Single character class, not an alternation: the two properties overlap (U+1F9B0-U+1F9B3), so `(A|B)+` backtracks exponentially on a failed match. The leading lookahead then demands one anchor — a pictograph, a regional indicator, or the enclosing keycap — because `\p{Emoji_Component}` on its own covers ASCII digits, `#`, `*`, ZWJ, variation selectors and skin tone modifiers, none of which is an emoji without a base.
const _emoji = `^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$`;
function emoji() {
    return new RegExp(_emoji, "u");
}
const ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
const ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
const mac = (delimiter) => {
    const escapedDelim = util.escapeRegex(delimiter ?? ":");
    return new RegExp(`^(?:[0-9A-F]{2}${escapedDelim}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${escapedDelim}){5}[0-9a-f]{2}$`);
};
const cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
const cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
// https://stackoverflow.com/questions/7860392/determine-if-string-is-in-base64-using-javascript
const base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
const base64url = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/;
// based on https://stackoverflow.com/questions/106179/regular-expression-to-match-dns-hostname-or-ip-address
// export const hostname: RegExp = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/;
const hostname = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/;
const domain = /^(?=.{1,253}$)([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,63}$/;
const httpProtocol = /^https?$/;
// https://blog.stevenlevithan.com/archives/validate-phone-number#r4-3 (regex sans spaces) E.164: leading digit must be 1-9; total digits (excluding '+') between 7-15
const e164 = /^\+[1-9]\d{6,14}$/;
// Credit card shape: 12–19 digits, optionally separated by single spaces or single hyphens. ISO/IEC 7812 caps the PAN at 19 digits; 12 is the shortest issued length (Maestro).
const creditCard = /^\d(?:[ -]?\d){11,18}$/;
// ISO 4217 alpha codes from the SIX list, regenerated by scripts/update-iso-4217.ts
const currencyCode = /^(?:AED|AFN|ALL|AMD|AOA|ARS|AUD|AWG|AZN|BAM|BBD|BDT|BHD|BIF|BMD|BND|BOB|BOV|BRL|BSD|BTN|BWP|BYN|BZD|CAD|CDF|CHE|CHF|CHW|CLF|CLP|CNY|COP|COU|CRC|CUP|CVE|CZK|DJF|DKK|DOP|DZD|EGP|ERN|ETB|EUR|FJD|FKP|GBP|GEL|GHS|GIP|GMD|GNF|GTQ|GYD|HKD|HNL|HTG|HUF|IDR|ILS|INR|IQD|IRR|ISK|JMD|JOD|JPY|KES|KGS|KHR|KMF|KPW|KRW|KWD|KYD|KZT|LAK|LBP|LKR|LRD|LSL|LYD|MAD|MDL|MGA|MKD|MMK|MNT|MOP|MRU|MUR|MVR|MWK|MXN|MXV|MYR|MZN|NAD|NGN|NIO|NOK|NPR|NZD|OMR|PAB|PEN|PGK|PHP|PKR|PLN|PYG|QAR|RON|RSD|RUB|RWF|SAR|SBD|SCR|SDG|SEK|SGD|SHP|SLE|SOS|SRD|SSP|STN|SVC|SYP|SZL|THB|TJS|TMT|TND|TOP|TRY|TTD|TWD|TZS|UAH|UGX|USD|USN|UYI|UYU|UYW|UZS|VED|VES|VND|VUV|WST|XAD|XAF|XAG|XAU|XBA|XBB|XBC|XBD|XCD|XCG|XDR|XOF|XPD|XPF|XPT|XSU|XTS|XUA|XXX|YER|ZAR|ZMW|ZWG)$/;
// iban electronic format: 2-letter country, check digits 02-98 (the only values `98 - remainder` can produce), 11-30 bban characters
const iban = /^[A-Z]{2}(?!00|01|99)\d{2}[A-Z0-9]{11,30}$/;
const dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
/** Anchors a pattern source. The interpolation lives here rather than at the call site because
 * esbuild will not drop a `@__PURE__` call whose own argument interpolates a variable, but it
 * will drop `anchor(dateSource)`. Keeping it inline pinned `date` into every bundle. */
function regexes_anchor(source) {
    return new RegExp(`^${source}$`);
}
const date = /*@__PURE__*/ regexes_anchor(dateSource);
function timeSource(args) {
    const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
    const regex = typeof args.precision === "number"
        ? args.precision === -1
            ? `${hhmm}`
            : args.precision === 0
                ? `${hhmm}:[0-5]\\d`
                : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}`
        : args.seconds
            ? `${hhmm}:[0-5]\\d(?:\\.\\d+)?`
            : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
    return regex;
}
function time(args) {
    return new RegExp(`^${timeSource(args)}$`);
}
// Adapted from https://stackoverflow.com/a/3143231
function datetime(args) {
    const opts = ["Z"];
    // if (args.offset) opts.push(`([+-]\\d{2}:\\d{2})`);
    if (args.offset)
        opts.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
    // RFC 3339 mandates seconds wherever the time carries a `Z` or an offset, so only the unqualified form `local` adds may omit them
    const qualified = `${timeSource({ precision: args.precision, seconds: true })}(?:${opts.join("|")})`;
    const timeRegex = args.local ? `${qualified}|${timeSource({ precision: args.precision })}` : qualified;
    return new RegExp(`^${dateSource}T(?:${timeRegex})$`);
}
// the unbounded form of `string()` as a literal, so every plain string shares one instance instead of building its own
const anyString = /^[\s\S]{0,}$/;
const string = (params) => {
    const regex = params ? `[\\s\\S]{${params?.minimum ?? 0},${params?.maximum ?? ""}}` : `[\\s\\S]*`;
    return new RegExp(`^${regex}$`);
};
const bigint = /^-?\d+n?$/;
const integer = /^-?\d+$/;
const number = /^-?\d+(?:\.\d+)?$/;
const regexes_boolean = /^(?:true|false)$/i;
const _null = /^null$/i;

const _undefined = /^undefined$/i;

// regex for string with no uppercase letters
const lowercase = /^[^A-Z]*$/;
// regex for string with no lowercase letters
const uppercase = /^[^a-z]*$/;
// regex for hexadecimal strings (any length)
const hex = /^[0-9a-fA-F]*$/;
// Hash regexes for different algorithms and encodings
// Helper function to create base64 regex with exact length and padding
function fixedBase64(bodyLength, padding) {
    return new RegExp(`^[A-Za-z0-9+/]{${bodyLength}}${padding}$`);
}
// Helper function to create base64url regex with exact length (no padding)
function fixedBase64url(length) {
    return new RegExp(`^[A-Za-z0-9_-]{${length}}$`);
}
// MD5 (16 bytes): base64 = 24 chars total (22 + "==")
const md5_hex = /^[0-9a-fA-F]{32}$/;
const md5_base64 = /*@__PURE__*/ (/* unused pure expression or super */ null && (fixedBase64(22, "==")));
const md5_base64url = /*@__PURE__*/ (/* unused pure expression or super */ null && (fixedBase64url(22)));
// SHA1 (20 bytes): base64 = 28 chars total (27 + "=")
const sha1_hex = /^[0-9a-fA-F]{40}$/;
const sha1_base64 = /*@__PURE__*/ (/* unused pure expression or super */ null && (fixedBase64(27, "=")));
const sha1_base64url = /*@__PURE__*/ (/* unused pure expression or super */ null && (fixedBase64url(27)));
// SHA256 (32 bytes): base64 = 44 chars total (43 + "=")
const sha256_hex = /^[0-9a-fA-F]{64}$/;
const sha256_base64 = /*@__PURE__*/ (/* unused pure expression or super */ null && (fixedBase64(43, "=")));
const sha256_base64url = /*@__PURE__*/ (/* unused pure expression or super */ null && (fixedBase64url(43)));
// SHA384 (48 bytes): base64 = 64 chars total (no padding)
const sha384_hex = /^[0-9a-fA-F]{96}$/;
const sha384_base64 = /*@__PURE__*/ (/* unused pure expression or super */ null && (fixedBase64(64, "")));
const sha384_base64url = /*@__PURE__*/ (/* unused pure expression or super */ null && (fixedBase64url(64)));
// SHA512 (64 bytes): base64 = 88 chars total (86 + "==")
const sha512_hex = /^[0-9a-fA-F]{128}$/;
const sha512_base64 = /*@__PURE__*/ (/* unused pure expression or super */ null && (fixedBase64(86, "==")));
const sha512_base64url = /*@__PURE__*/ (/* unused pure expression or super */ null && (fixedBase64url(86)));

;// CONCATENATED MODULE: ./node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/core/checks.js
// import { $ZodType } from "./schemas.js";



const $ZodCheck = /*@__PURE__*/ $constructor("$ZodCheck", (inst, def) => {
    var _a;
    inst._zod ?? (inst._zod = {});
    inst._zod.def = def;
    (_a = inst._zod).onattach ?? (_a.onattach = []);
});
/** Default `when` for size-based checks: run only on non-nullish values with a `size`. */
const _whenHasSize = (payload) => {
    const val = payload.value;
    return !util.nullish(val) && val.size !== undefined;
};
/** Default `when` for length-based checks: run only on non-nullish values with a `length`. */
const _whenHasLength = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.length !== undefined;
};
const numericOriginMap = {
    number: "number",
    bigint: "bigint",
    object: "date",
};
const $ZodCheckLessThan = /*@__PURE__*/ $constructor("$ZodCheckLessThan", (inst, def) => {
    $ZodCheck.init(inst, def);
    const origin = numericOriginMap[typeof def.value];
    inst._zod.check = (payload) => {
        if (def.inclusive ? payload.value <= def.value : payload.value < def.value) {
            return;
        }
        payload.issues.push({
            origin: numericOriginMap[typeof payload.value] ?? origin,
            code: "too_big",
            maximum: typeof def.value === "object" ? def.value.getTime() : def.value,
            input: payload.value,
            inclusive: def.inclusive,
            inst,
            continue: !def.abort,
        });
    };
});
const $ZodCheckGreaterThan = /*@__PURE__*/ $constructor("$ZodCheckGreaterThan", (inst, def) => {
    $ZodCheck.init(inst, def);
    const origin = numericOriginMap[typeof def.value];
    inst._zod.check = (payload) => {
        if (def.inclusive ? payload.value >= def.value : payload.value > def.value) {
            return;
        }
        payload.issues.push({
            origin: numericOriginMap[typeof payload.value] ?? origin,
            code: "too_small",
            minimum: typeof def.value === "object" ? def.value.getTime() : def.value,
            input: payload.value,
            inclusive: def.inclusive,
            inst,
            continue: !def.abort,
        });
    };
});
const $ZodCheckMultipleOf = 
/*@__PURE__*/ $constructor("$ZodCheckMultipleOf", (inst, def) => {
    $ZodCheck.init(inst, def);
    inst._zod.check = (payload) => {
        if (typeof payload.value !== typeof def.value)
            throw new Error("Cannot mix number and bigint in multiple_of check.");
        const isMultiple = typeof payload.value === "bigint"
            ? // `value % 0n` throws, and nothing is a multiple of zero — the number branch already fails this way via NaN
                def.value !== BigInt(0) && payload.value % def.value === BigInt(0)
            : floatSafeRemainder(payload.value, def.value) === 0;
        if (isMultiple)
            return;
        payload.issues.push({
            origin: typeof payload.value,
            code: "not_multiple_of",
            divisor: def.value,
            input: payload.value,
            inst,
            continue: !def.abort,
        });
    };
});
const $ZodCheckNumberFormat = /*@__PURE__*/ $constructor("$ZodCheckNumberFormat", (inst, def) => {
    $ZodCheck.init(inst, def); // no format checks
    def.format = def.format || "float64";
    const isInt = def.format?.includes("int");
    const origin = isInt ? "int" : "number";
    const [minimum, maximum] = NUMBER_FORMAT_RANGES[def.format];
    inst._zod.check = (payload) => {
        const input = payload.value;
        if (isInt) {
            if (!Number.isInteger(input)) {
                // invalid_format issue
                // payload.issues.push({
                //   expected: def.format,
                //   format: def.format,
                //   code: "invalid_format",
                //   input,
                //   inst,
                // });
                // invalid_type issue
                payload.issues.push({
                    expected: origin,
                    format: def.format,
                    code: "invalid_type",
                    continue: false,
                    input,
                    inst,
                });
                return;
                // not_multiple_of issue
                // payload.issues.push({
                //   code: "not_multiple_of",
                //   origin: "number",
                //   input,
                //   inst,
                //   divisor: 1,
                // });
            }
            if (!Number.isSafeInteger(input)) {
                if (input > 0) {
                    // too_big
                    payload.issues.push({
                        input,
                        code: "too_big",
                        maximum: Number.MAX_SAFE_INTEGER,
                        note: "Integers must be within the safe integer range.",
                        inst,
                        origin,
                        inclusive: true,
                        continue: !def.abort,
                    });
                }
                else {
                    // too_small
                    payload.issues.push({
                        input,
                        code: "too_small",
                        minimum: Number.MIN_SAFE_INTEGER,
                        note: "Integers must be within the safe integer range.",
                        inst,
                        origin,
                        inclusive: true,
                        continue: !def.abort,
                    });
                }
                return;
            }
        }
        if (input < minimum) {
            payload.issues.push({
                origin: "number",
                input,
                code: "too_small",
                minimum,
                inclusive: true,
                inst,
                continue: !def.abort,
            });
        }
        if (input > maximum) {
            payload.issues.push({
                origin: "number",
                input,
                code: "too_big",
                maximum,
                inclusive: true,
                inst,
                continue: !def.abort,
            });
        }
    };
});
const $ZodCheckBigIntFormat = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("$ZodCheckBigIntFormat", (inst, def) => {
    $ZodCheck.init(inst, def); // no format checks
    const [minimum, maximum] = util.BIGINT_FORMAT_RANGES[def.format];
    inst._zod.check = (payload) => {
        const input = payload.value;
        if (input < minimum) {
            payload.issues.push({
                origin: "bigint",
                input,
                code: "too_small",
                minimum: minimum,
                inclusive: true,
                inst,
                continue: !def.abort,
            });
        }
        if (input > maximum) {
            payload.issues.push({
                origin: "bigint",
                input,
                code: "too_big",
                maximum,
                inclusive: true,
                inst,
                continue: !def.abort,
            });
        }
    };
})));
const $ZodCheckMaxSize = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("$ZodCheckMaxSize", (inst, def) => {
    var _a;
    $ZodCheck.init(inst, def);
    (_a = inst._zod.def).when ?? (_a.when = _whenHasSize);
    inst._zod.check = (payload) => {
        const input = payload.value;
        const size = input.size;
        if (size <= def.maximum)
            return;
        payload.issues.push({
            origin: util.getSizableOrigin(input),
            code: "too_big",
            maximum: def.maximum,
            inclusive: true,
            input,
            inst,
            continue: !def.abort,
        });
    };
})));
const $ZodCheckMinSize = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("$ZodCheckMinSize", (inst, def) => {
    var _a;
    $ZodCheck.init(inst, def);
    (_a = inst._zod.def).when ?? (_a.when = _whenHasSize);
    inst._zod.check = (payload) => {
        const input = payload.value;
        const size = input.size;
        if (size >= def.minimum)
            return;
        payload.issues.push({
            origin: util.getSizableOrigin(input),
            code: "too_small",
            minimum: def.minimum,
            inclusive: true,
            input,
            inst,
            continue: !def.abort,
        });
    };
})));
const $ZodCheckSizeEquals = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("$ZodCheckSizeEquals", (inst, def) => {
    var _a;
    $ZodCheck.init(inst, def);
    (_a = inst._zod.def).when ?? (_a.when = _whenHasSize);
    inst._zod.check = (payload) => {
        const input = payload.value;
        const size = input.size;
        if (size === def.size)
            return;
        const tooBig = size > def.size;
        payload.issues.push({
            origin: util.getSizableOrigin(input),
            ...(tooBig ? { code: "too_big", maximum: def.size } : { code: "too_small", minimum: def.size }),
            inclusive: true,
            exact: true,
            input: payload.value,
            inst,
            continue: !def.abort,
        });
    };
})));
const $ZodCheckMaxLength = /*@__PURE__*/ $constructor("$ZodCheckMaxLength", (inst, def) => {
    var _a;
    $ZodCheck.init(inst, def);
    (_a = inst._zod.def).when ?? (_a.when = _whenHasLength);
    inst._zod.check = (payload) => {
        const input = payload.value;
        const units = input.length;
        // Strings are measured in Unicode code points, not UTF-16 units. A code point is at most two units, so a string that already fits in units fits in code points; only an overflow has to be counted.
        const length = typeof input === "string" && units > def.maximum ? codePointLength(input) : units;
        if (length <= def.maximum)
            return;
        const origin = getLengthableOrigin(input);
        payload.issues.push({
            origin,
            code: "too_big",
            maximum: def.maximum,
            inclusive: true,
            input,
            inst,
            continue: !def.abort,
        });
    };
});
const $ZodCheckMinLength = /*@__PURE__*/ $constructor("$ZodCheckMinLength", (inst, def) => {
    var _a;
    $ZodCheck.init(inst, def);
    (_a = inst._zod.def).when ?? (_a.when = _whenHasLength);
    inst._zod.check = (payload) => {
        const input = payload.value;
        const units = input.length;
        // A code point is one or two UTF-16 units, so fewer units than the floor can never reach it and twice the floor always clears it. Only in between is the exact count in doubt.
        const length = typeof input === "string" && units >= def.minimum && units < def.minimum * 2
            ? codePointLength(input)
            : units;
        if (length >= def.minimum)
            return;
        const origin = getLengthableOrigin(input);
        payload.issues.push({
            origin,
            code: "too_small",
            minimum: def.minimum,
            inclusive: true,
            input,
            inst,
            continue: !def.abort,
        });
    };
});
const $ZodCheckLengthEquals = /*@__PURE__*/ $constructor("$ZodCheckLengthEquals", (inst, def) => {
    var _a;
    $ZodCheck.init(inst, def);
    (_a = inst._zod.def).when ?? (_a.when = _whenHasLength);
    inst._zod.check = (payload) => {
        const input = payload.value;
        const units = input.length;
        // A code point is one or two UTF-16 units, so outside `[length, length * 2]` units the target is missed either way — and missed in the same direction in both measures.
        const length = typeof input === "string" && units >= def.length && units <= def.length * 2
            ? codePointLength(input)
            : units;
        if (length === def.length)
            return;
        const origin = getLengthableOrigin(input);
        const tooBig = length > def.length;
        payload.issues.push({
            origin,
            ...(tooBig ? { code: "too_big", maximum: def.length } : { code: "too_small", minimum: def.length }),
            inclusive: true,
            exact: true,
            input: payload.value,
            inst,
            continue: !def.abort,
        });
    };
});
const $ZodCheckStringFormat = /*@__PURE__*/ $constructor("$ZodCheckStringFormat", (inst, def) => {
    var _a, _b;
    $ZodCheck.init(inst, def);
    if (def.pattern)
        (_a = inst._zod).check ?? (_a.check = (payload) => {
            def.pattern.lastIndex = 0;
            if (def.pattern.test(payload.value))
                return;
            payload.issues.push({
                origin: "string",
                code: "invalid_format",
                format: def.format,
                input: payload.value,
                ...(def.pattern ? { pattern: def.pattern.toString() } : {}),
                inst,
                continue: !def.abort,
            });
        });
    else
        (_b = inst._zod).check ?? (_b.check = () => { });
});
const $ZodCheckRegex = /*@__PURE__*/ $constructor("$ZodCheckRegex", (inst, def) => {
    $ZodCheckStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
        def.pattern.lastIndex = 0;
        if (def.pattern.test(payload.value))
            return;
        payload.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "regex",
            input: payload.value,
            pattern: def.pattern.toString(),
            inst,
            continue: !def.abort,
        });
    };
});
const $ZodCheckLowerCase = /*@__PURE__*/ $constructor("$ZodCheckLowerCase", (inst, def) => {
    def.pattern ?? (def.pattern = lowercase);
    $ZodCheckStringFormat.init(inst, def);
});
const $ZodCheckUpperCase = /*@__PURE__*/ $constructor("$ZodCheckUpperCase", (inst, def) => {
    def.pattern ?? (def.pattern = uppercase);
    $ZodCheckStringFormat.init(inst, def);
});
const $ZodCheckIncludes = /*@__PURE__*/ $constructor("$ZodCheckIncludes", (inst, def) => {
    $ZodCheck.init(inst, def);
    const escapedRegex = escapeRegex(def.includes);
    // `String.prototype.includes(sub, position)` matches `sub` at `position`
    // OR LATER, so the pattern must allow at least `position` leading chars
    // (`{N,}`), not exactly `position` chars (`{N}`).
    const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position},}${escapedRegex}` : escapedRegex);
    def.pattern = pattern;
    inst._zod.check = (payload) => {
        if (payload.value.includes(def.includes, def.position))
            return;
        payload.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "includes",
            includes: def.includes,
            input: payload.value,
            inst,
            continue: !def.abort,
        });
    };
});
const $ZodCheckStartsWith = /*@__PURE__*/ $constructor("$ZodCheckStartsWith", (inst, def) => {
    $ZodCheck.init(inst, def);
    const pattern = new RegExp(`^${escapeRegex(def.prefix)}.*`);
    def.pattern ?? (def.pattern = pattern);
    inst._zod.check = (payload) => {
        if (payload.value.startsWith(def.prefix))
            return;
        payload.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "starts_with",
            prefix: def.prefix,
            input: payload.value,
            inst,
            continue: !def.abort,
        });
    };
});
const $ZodCheckEndsWith = /*@__PURE__*/ $constructor("$ZodCheckEndsWith", (inst, def) => {
    $ZodCheck.init(inst, def);
    const pattern = new RegExp(`.*${escapeRegex(def.suffix)}$`);
    def.pattern ?? (def.pattern = pattern);
    inst._zod.check = (payload) => {
        if (payload.value.endsWith(def.suffix))
            return;
        payload.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "ends_with",
            suffix: def.suffix,
            input: payload.value,
            inst,
            continue: !def.abort,
        });
    };
});
///////////////////////////////////
/////    $ZodCheckProperty    /////
///////////////////////////////////
function handleCheckPropertyResult(result, payload, property) {
    if (result.issues.length) {
        payload.issues.push(...prefixIssues(property, result.issues));
    }
}
const $ZodCheckProperty = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("$ZodCheckProperty", (inst, def) => {
    $ZodCheck.init(inst, def);
    inst._zod.check = (payload) => {
        const result = def.schema._zod.run({
            value: payload.value[def.property],
            issues: [],
        }, {});
        if (result instanceof Promise) {
            return result.then((result) => handleCheckPropertyResult(result, payload, def.property));
        }
        handleCheckPropertyResult(result, payload, def.property);
        return;
    };
})));
const $ZodCheckProperties = /*@__PURE__*/ $constructor("$ZodCheckProperties", (inst, def) => {
    $ZodCheck.init(inst, def);
    hide(inst, Symbol.iterator, function* () {
        yield inst;
    });
    // key and schema snapshotted together: reading one live and the other cached lets a later mutation of the caller's shape object pair a stale key with a missing schema
    let entries;
    inst._zod.check = (payload) => {
        // the base schema already typed the value, so only a nullish one is rejected here: the properties read on a primitive too, matching z.property() on a string's length
        if (payload.value == null) {
            payload.issues.push({ expected: "object", code: "invalid_type", input: payload.value, inst });
            return undefined;
        }
        entries ?? (entries = Reflect.ownKeys(def.shape).map((key) => [key, def.shape[key]]));
        const input = payload.value;
        let proms;
        for (const [key, schema] of entries) {
            const result = schema._zod.run({ value: input[key], issues: [] }, {});
            if (result instanceof Promise) {
                proms ?? (proms = []);
                proms.push(result.then((result) => handleCheckPropertyResult(result, payload, key)));
            }
            else {
                handleCheckPropertyResult(result, payload, key);
            }
        }
        if (proms)
            return Promise.all(proms).then(() => undefined);
        return undefined;
    };
});
const $ZodCheckMimeType = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("$ZodCheckMimeType", (inst, def) => {
    $ZodCheck.init(inst, def);
    const mimeSet = new Set(def.mime);
    inst._zod.check = (payload) => {
        if (mimeSet.has(payload.value.type))
            return;
        payload.issues.push({
            code: "invalid_value",
            values: def.mime,
            input: payload.value.type,
            inst,
            continue: !def.abort,
        });
    };
})));
const $ZodCheckOverwrite = /*@__PURE__*/ $constructor("$ZodCheckOverwrite", (inst, def) => {
    $ZodCheck.init(inst, def);
    inst._zod.check = (payload) => {
        payload.value = def.tx(payload.value);
    };
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/core/doc.js
class Doc {
    constructor(args = [], closed = {}) {
        this.content = [];
        this.indent = 0;
        this.args = args;
        this.closed = closed;
    }
    // the compiler catches a child's throw and keeps writing into this doc, so the indent has to unwind with it
    indented(fn) {
        this.indent += 1;
        try {
            fn(this);
        }
        finally {
            this.indent -= 1;
        }
    }
    write(arg) {
        if (typeof arg === "function") {
            arg(this, { execution: "sync" });
            arg(this, { execution: "async" });
            return;
        }
        const content = arg;
        const lines = content.split("\n").filter((x) => x);
        const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
        const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
        for (const line of dedented) {
            this.content.push(line);
        }
    }
    compile() {
        const F = Function;
        const content = this?.content ?? [``];
        const factory = new F(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {\n${content.join("\n")}\n};`);
        return factory(...Object.values(this.closed));
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/core/versions.js
const version = {
    major: 4,
    minor: 6,
    patch: 7,
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/core/schemas.js







const $ZodType = /*@__PURE__*/ $constructor("$ZodType", (inst, def) => {
    var _a;
    inst ?? (inst = {});
    inst._zod.def = def; // set _def property
    inst._zod.bag = inst._zod.bag || {}; // initialize _bag object
    inst._zod.version = version;
    const defChecks = inst._zod.def.checks;
    // if inst is itself a checks.$ZodCheck, run it as a check
    const checks = inst._zod.traits.has("$ZodCheck")
        ? [inst, ...(defChecks ?? [])]
        : defChecks?.length
            ? [...defChecks]
            : [];
    for (const ch of checks) {
        for (const fn of ch._zod.onattach) {
            fn(inst);
        }
    }
    if (checks.length === 0) {
        // deferred initializer inst._zod.parse is not yet defined
        (_a = inst._zod).deferred ?? (_a.deferred = []);
        inst._zod.deferred?.push(() => {
            inst._zod.run = inst._zod.parse;
        });
    }
    else {
        const runChecks = (payload, checks, ctx) => {
            if (payload.memo)
                return payload;
            let isAborted = aborted(payload);
            let asyncResult;
            for (const ch of checks) {
                if (ch._zod.def.when) {
                    if (explicitlyAborted(payload))
                        continue;
                    const shouldRun = ch._zod.def.when(payload);
                    if (!shouldRun)
                        continue;
                }
                else if (isAborted) {
                    continue;
                }
                const currLen = payload.issues.length;
                const _ = ch._zod.check(payload);
                if (_ instanceof Promise && ctx?.async === false) {
                    throw new $ZodAsyncError();
                }
                if (asyncResult || _ instanceof Promise) {
                    asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
                        await _;
                        const nextLen = payload.issues.length;
                        if (nextLen === currLen)
                            return;
                        attachSchema(payload.issues, currLen, inst);
                        if (!isAborted)
                            isAborted = aborted(payload, currLen);
                    });
                }
                else {
                    const nextLen = payload.issues.length;
                    if (nextLen === currLen)
                        continue;
                    attachSchema(payload.issues, currLen, inst);
                    if (!isAborted)
                        isAborted = aborted(payload, currLen);
                }
            }
            if (asyncResult) {
                return asyncResult.then(() => {
                    return payload;
                });
            }
            return payload;
        };
        const handleCanaryResult = (canary, payload, ctx) => {
            // abort if the canary is aborted
            if (aborted(canary)) {
                canary.aborted = true;
                return canary;
            }
            // run checks first, then
            const checkResult = runChecks(payload, checks, ctx);
            if (checkResult instanceof Promise) {
                if (ctx.async === false)
                    throw new $ZodAsyncError();
                return checkResult.then((checkResult) => inst._zod.parse(checkResult, ctx));
            }
            return inst._zod.parse(checkResult, ctx);
        };
        inst._zod.run = (payload, ctx) => {
            if (ctx.skipChecks) {
                return inst._zod.parse(payload, ctx);
            }
            if (ctx.direction === "backward") {
                // run canary initial pass (no checks)
                const canary = inst._zod.parse({ value: payload.value, issues: [] }, { ...ctx, skipChecks: true });
                if (canary instanceof Promise) {
                    return canary.then((canary) => {
                        return handleCanaryResult(canary, payload, ctx);
                    });
                }
                return handleCanaryResult(canary, payload, ctx);
            }
            // forward
            const result = inst._zod.parse(payload, ctx);
            if (result instanceof Promise) {
                if (ctx.async === false)
                    throw new $ZodAsyncError();
                return result.then((result) => runChecks(result, checks, ctx));
            }
            return runChecks(result, checks, ctx);
        };
    }
}, {
    // Wrappers extend this by installing a richer factory over it; reading it eagerly would defeat the laziness.
    get "~standard"() {
        return hide(this, "~standard", standardProps(this));
    },
    set "~standard"(value) {
        own(this, "~standard", value);
    },
});
/** The Standard Schema surface for `inst`. Shared so wrappers can extend it without forcing it. */
// a Standard Schema result only reports issues, so a failure finalizes them straight off the raw payload: no ZodError, and no lazy result to read through
const toStandardResult = (r, ctx) => r.issues.length ? { issues: r.issues.map((iss) => finalizeIssue(iss, ctx, config())) } : { value: r.value };
async function validateAsync(inst, value) {
    const ctx = { async: true };
    return toStandardResult((await inst._zod.run({ value, issues: [] }, ctx)), ctx);
}
function standardProps(inst) {
    return {
        validate: (value) => {
            const ctx = { async: false };
            try {
                const r = inst._zod.run({ value, issues: [] }, ctx);
                if (!(r instanceof Promise))
                    return toStandardResult(r, ctx);
            }
            catch (_) { }
            // async function so a synchronously throwing check rejects instead of escaping validate
            return validateAsync(inst, value);
        },
        vendor: "zod",
        version: 1,
    };
}

const $ZodString = /*@__PURE__*/ $constructor("$ZodString", (inst, def) => {
    $ZodType.init(inst, def);
    // a format's own pattern, else unbounded; a template literal derives the check-aware form itself
    inst._zod.pattern = def.pattern ?? anyString;
    inst._zod.parse = (payload, _) => {
        if (def.coerce)
            try {
                payload.value = String(payload.value);
            }
            catch (_) { }
        if (typeof payload.value === "string")
            return payload;
        payload.issues.push({
            expected: "string",
            code: "invalid_type",
            input: payload.value,
            inst,
        });
        return payload;
    };
});
const $ZodStringFormat = /*@__PURE__*/ $constructor("$ZodStringFormat", (inst, def) => {
    // check initialization must come first
    $ZodCheckStringFormat.init(inst, def);
    $ZodString.init(inst, def);
});
const $ZodGUID = /*@__PURE__*/ $constructor("$ZodGUID", (inst, def) => {
    def.pattern ?? (def.pattern = guid);
    $ZodStringFormat.init(inst, def);
});
const $ZodUUID = /*@__PURE__*/ $constructor("$ZodUUID", (inst, def) => {
    if (def.version) {
        const versionMap = {
            v1: 1,
            v2: 2,
            v3: 3,
            v4: 4,
            v5: 5,
            v6: 6,
            v7: 7,
            v8: 8,
        };
        const v = versionMap[def.version];
        if (v === undefined)
            throw new Error(`Invalid UUID version: "${def.version}"`);
        def.pattern ?? (def.pattern = uuid(v));
    }
    else
        def.pattern ?? (def.pattern = uuid());
    $ZodStringFormat.init(inst, def);
});
const $ZodEmail = /*@__PURE__*/ $constructor("$ZodEmail", (inst, def) => {
    def.pattern ?? (def.pattern = email);
    $ZodStringFormat.init(inst, def);
});
/** The `://` guard rejected the input before the URL constructor saw it. */
const URL_BAD_FORMAT = 1;
/** The URL parser rejected the input. */
const URL_UNPARSEABLE = 2;
function canParseURL(input) {
    try {
        if (typeof URL !== "undefined" && typeof URL.canParse === "function")
            return URL.canParse(input);
        new URL(input);
        return true;
    }
    catch {
        return false;
    }
}
function validateURL(trimmed, def) {
    if (!("normalize" in def) && !("hostname" in def) && !("protocol" in def)) {
        return canParseURL(trimmed) || URL_UNPARSEABLE;
    }
    return parseURLObject(trimmed, def);
}
/** Parses a URL while preserving the non-normalizing HTTP guard. */
function parseURLObject(trimmed, def) {
    // When normalize is off, require :// for http/https URLs. This prevents strings like "http:example.com" or "https:/path" from being silently accepted
    if (!def.normalize && def.protocol?.source === httpProtocol.source && !/^https?:\/\//i.test(trimmed)) {
        return URL_BAD_FORMAT;
    }
    try {
        if (typeof URL !== "undefined") {
            const URLStatic = URL;
            if (typeof URLStatic.parse === "function")
                return URLStatic.parse(trimmed) ?? URL_UNPARSEABLE;
        }
        // @ts-ignore
        return new URL(trimmed);
    }
    catch {
        return URL_UNPARSEABLE;
    }
}
const asciiTabOrNewline = /[\t\n\r]/g;
/** The URL parser deletes every ASCII tab, LF and CR from its input before it parses, so `new URL("https://exa\nmple.com")` reports on `example.com`. Applying the same deletion to the returned value closes the half of that divergence which can move the host; the parser's other rewrite, stripping C0 controls at the edges, cannot. */
function stripTabAndNewline(value) {
    return value.replace(asciiTabOrNewline, "");
}
function urlHostnameOk(url, hostname) {
    hostname.lastIndex = 0;
    return hostname.test(url.hostname);
}
function urlProtocolOk(url, protocol) {
    protocol.lastIndex = 0;
    return protocol.test(url.protocol.endsWith(":") ? url.protocol.slice(0, -1) : url.protocol);
}
const $ZodURL = /*@__PURE__*/ $constructor("$ZodURL", (inst, def) => {
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
        try {
            // Trim whitespace from input
            const trimmed = payload.value.trim();
            const url = validateURL(trimmed, def);
            if (url === URL_BAD_FORMAT) {
                payload.issues.push({
                    code: "invalid_format",
                    format: "url",
                    note: "Invalid URL format",
                    input: payload.value,
                    inst,
                    continue: !def.abort,
                });
                return;
            }
            if (url === URL_UNPARSEABLE) {
                payload.issues.push({
                    code: "invalid_format",
                    format: "url",
                    input: payload.value,
                    inst,
                    continue: !def.abort,
                });
                return;
            }
            if (url === true) {
                payload.value = stripTabAndNewline(trimmed);
                return;
            }
            if (def.hostname && !urlHostnameOk(url, def.hostname)) {
                payload.issues.push({
                    code: "invalid_format",
                    format: "url",
                    note: "Invalid hostname",
                    pattern: def.hostname.source,
                    input: payload.value,
                    inst,
                    continue: !def.abort,
                });
            }
            if (def.protocol && !urlProtocolOk(url, def.protocol)) {
                payload.issues.push({
                    code: "invalid_format",
                    format: "url",
                    note: "Invalid protocol",
                    pattern: def.protocol.source,
                    input: payload.value,
                    inst,
                    continue: !def.abort,
                });
            }
            // Set the output value based on normalize flag
            payload.value = def.normalize ? url.href : stripTabAndNewline(trimmed);
            return;
        }
        catch (_) {
            payload.issues.push({
                code: "invalid_format",
                format: "url",
                input: payload.value,
                inst,
                continue: !def.abort,
            });
        }
    };
});
const $ZodEmoji = /*@__PURE__*/ $constructor("$ZodEmoji", (inst, def) => {
    def.pattern ?? (def.pattern = emoji());
    $ZodStringFormat.init(inst, def);
});
const $ZodNanoID = /*@__PURE__*/ $constructor("$ZodNanoID", (inst, def) => {
    if (def.length !== undefined && (!Number.isInteger(def.length) || def.length < 1))
        throw new Error(`Invalid nanoid length: ${def.length}`);
    def.pattern ?? (def.pattern = def.length === undefined ? nanoid : nanoidOfLength(def.length));
    $ZodStringFormat.init(inst, def);
});
/**
 * @deprecated CUID v1 is deprecated by its authors due to information leakage
 * (timestamps embedded in the id). Use {@link $ZodCUID2} instead.
 * See https://github.com/paralleldrive/cuid.
 */
const $ZodCUID = /*@__PURE__*/ $constructor("$ZodCUID", (inst, def) => {
    def.pattern ?? (def.pattern = cuid);
    $ZodStringFormat.init(inst, def);
});
const $ZodCUID2 = /*@__PURE__*/ $constructor("$ZodCUID2", (inst, def) => {
    def.pattern ?? (def.pattern = cuid2);
    $ZodStringFormat.init(inst, def);
});
const $ZodULID = /*@__PURE__*/ $constructor("$ZodULID", (inst, def) => {
    def.pattern ?? (def.pattern = ulid);
    $ZodStringFormat.init(inst, def);
});
const $ZodXID = /*@__PURE__*/ $constructor("$ZodXID", (inst, def) => {
    def.pattern ?? (def.pattern = xid);
    $ZodStringFormat.init(inst, def);
});
const $ZodKSUID = /*@__PURE__*/ $constructor("$ZodKSUID", (inst, def) => {
    def.pattern ?? (def.pattern = ksuid);
    $ZodStringFormat.init(inst, def);
});
const $ZodISODateTime = /*@__PURE__*/ $constructor("$ZodISODateTime", (inst, def) => {
    def.pattern ?? (def.pattern = datetime(def));
    $ZodStringFormat.init(inst, def);
});
const $ZodISODate = /*@__PURE__*/ $constructor("$ZodISODate", (inst, def) => {
    def.pattern ?? (def.pattern = date);
    $ZodStringFormat.init(inst, def);
});
const $ZodISOTime = /*@__PURE__*/ $constructor("$ZodISOTime", (inst, def) => {
    def.pattern ?? (def.pattern = time(def));
    $ZodStringFormat.init(inst, def);
});
const $ZodISODuration = /*@__PURE__*/ $constructor("$ZodISODuration", (inst, def) => {
    def.pattern ?? (def.pattern = duration);
    $ZodStringFormat.init(inst, def);
});
const $ZodIPv4 = /*@__PURE__*/ $constructor("$ZodIPv4", (inst, def) => {
    def.pattern ?? (def.pattern = ipv4);
    $ZodStringFormat.init(inst, def);
});
/** An IPv6 address is written with hex digits, colons and dots, and nothing else. The guard is what makes the check below an IPv6 check: `new URL("http://[...]")` parses an authority, not an address, so `@` and `\` re-delimit it and `"::@1\\"` validates against the host `0.0.0.1`. The URL parser also deletes ASCII tab, LF and CR rather than failing, which is how `"::1\n"` validated as `::1`. */
const ipv6Alphabet = /^[0-9a-fA-F:.]+$/;
function isValidIPv6(value) {
    if (!ipv6Alphabet.test(value))
        return false;
    return canParseURL(`http://[${value}]`);
}
const $ZodIPv6 = /*@__PURE__*/ $constructor("$ZodIPv6", (inst, def) => {
    def.pattern ?? (def.pattern = ipv6);
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
        if (!isValidIPv6(payload.value)) {
            payload.issues.push({
                code: "invalid_format",
                format: "ipv6",
                input: payload.value,
                inst,
                continue: !def.abort,
            });
        }
    };
});
const $ZodMAC = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("$ZodMAC", (inst, def) => {
    def.pattern ?? (def.pattern = regexes.mac(def.delimiter));
    $ZodStringFormat.init(inst, def);
})));
const $ZodCIDRv4 = /*@__PURE__*/ $constructor("$ZodCIDRv4", (inst, def) => {
    def.pattern ?? (def.pattern = cidrv4);
    $ZodStringFormat.init(inst, def);
});
function isValidCIDRv6(value) {
    const parts = value.split("/");
    if (parts.length !== 2)
        return false;
    const [address, prefix] = parts;
    if (!prefix)
        return false;
    const prefixNum = Number(prefix);
    if (`${prefixNum}` !== prefix)
        return false;
    if (prefixNum < 0 || prefixNum > 128)
        return false;
    return isValidIPv6(address);
}
const $ZodCIDRv6 = /*@__PURE__*/ $constructor("$ZodCIDRv6", (inst, def) => {
    def.pattern ?? (def.pattern = cidrv6); // not used for validation
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
        if (!isValidCIDRv6(payload.value)) {
            payload.issues.push({
                code: "invalid_format",
                format: "cidrv6",
                input: payload.value,
                inst,
                continue: !def.abort,
            });
        }
    };
});
//////////////////////////////   ZodBase64   //////////////////////////////
function isValidBase64(data) {
    if (data === "")
        return true;
    // atob ignores whitespace, so reject it up front.
    if (/\s/.test(data))
        return false;
    if (data.length % 4 !== 0)
        return false;
    try {
        // @ts-ignore
        atob(data);
        return true;
    }
    catch {
        return false;
    }
}
// lax on purpose: the quantified regexes.base64 overflows the regex stack on multi-MB input and its leading ^$| alternation leaks through template-literal composition; isValidBase64 enforces length and padding
const base64Charset = /^[0-9a-zA-Z+/]*={0,2}$/;
const $ZodBase64 = /*@__PURE__*/ $constructor("$ZodBase64", (inst, def) => {
    def.pattern ?? (def.pattern = base64Charset);
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
        if (isValidBase64(payload.value))
            return;
        payload.issues.push({
            code: "invalid_format",
            format: "base64",
            input: payload.value,
            inst,
            continue: !def.abort,
        });
    };
});
//////////////////////////////   ZodBase64URL   //////////////////////////////
// lax on purpose: the quantified regexes.base64url overflows the regex stack on multi-MB input; isValidBase64 enforces length on the padded string
const base64urlCharset = /^[A-Za-z0-9_-]*$/;
function isValidBase64URL(data) {
    if (!base64urlCharset.test(data))
        return false;
    const base64 = data.replace(/[-_]/g, (c) => (c === "-" ? "+" : "/"));
    const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
    return isValidBase64(padded);
}
const $ZodBase64URL = /*@__PURE__*/ $constructor("$ZodBase64URL", (inst, def) => {
    def.pattern ?? (def.pattern = base64urlCharset);
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
        if (isValidBase64URL(payload.value))
            return;
        payload.issues.push({
            code: "invalid_format",
            format: "base64url",
            input: payload.value,
            inst,
            continue: !def.abort,
        });
    };
});
const $ZodE164 = /*@__PURE__*/ $constructor("$ZodE164", (inst, def) => {
    def.pattern ?? (def.pattern = e164);
    $ZodStringFormat.init(inst, def);
});
//////////////////////////////   ZodCreditCard   //////////////////////////////
const CC_SANITIZE = /[- ]/g;
/** Luhn checksum on a digit-only string. Adapted from valibot (MIT). */
function isLuhnAlgo(digits) {
    let length = digits.length;
    let bit = 1;
    let sum = 0;
    while (length) {
        const value = digits.charCodeAt(--length) - 48;
        bit ^= 1;
        sum += bit ? [0, 2, 4, 6, 8, 1, 3, 5, 7, 9][value] : value;
    }
    return sum % 10 === 0;
}
function isValidCreditCard(input) {
    if (!regexes.creditCard.test(input))
        return false;
    return isLuhnAlgo(input.replace(CC_SANITIZE, ""));
}
const $ZodCreditCard = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("$ZodCreditCard", (inst, def) => {
    // Shape only — the Luhn check below is not expressible as a pattern, so consumers of `pattern` (JSON Schema, template literals) get the length and separator rules alone.
    def.pattern ?? (def.pattern = regexes.creditCard);
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
        if (isValidCreditCard(payload.value))
            return;
        payload.issues.push({
            code: "invalid_format",
            format: "credit_card",
            input: payload.value,
            inst,
            continue: !def.abort,
        });
    };
})));
//////////////////////////////   ZodIBAN   //////////////////////////////
// iso 7064 mod 97-10 checksum without BigInt
function isIso7064Mod97(iban) {
    let remainder = 0;
    const len = iban.length;
    for (let i = 4; i < len; i++) {
        const code = iban.charCodeAt(i);
        remainder = (code >= 65 ? remainder * 100 + (code - 55) : remainder * 10 + (code - 48)) % 97;
    }
    for (let i = 0; i < 4; i++) {
        const code = iban.charCodeAt(i);
        remainder = (code >= 65 ? remainder * 100 + (code - 55) : remainder * 10 + (code - 48)) % 97;
    }
    return remainder === 1;
}
function isValidIBAN(input) {
    if (!regexes.iban.test(input))
        return false;
    return isIso7064Mod97(input);
}
const $ZodIBAN = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("$ZodIBAN", (inst, def) => {
    // shape only — checksum is not expressible as a pattern
    def.pattern ?? (def.pattern = regexes.iban);
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
        if (isValidIBAN(payload.value))
            return;
        payload.issues.push({
            code: "invalid_format",
            format: "iban",
            input: payload.value,
            inst,
            continue: !def.abort,
        });
    };
})));
//////////////////////////////   ZodJWT   //////////////////////////////
function isValidJWT(token, algorithm = null) {
    try {
        const tokensParts = token.split(".");
        if (tokensParts.length !== 3)
            return false;
        const [header] = tokensParts;
        if (!header)
            return false;
        // @ts-ignore
        const parsedHeader = JSON.parse(atob(header));
        if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT")
            return false;
        if (!parsedHeader.alg)
            return false;
        if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm))
            return false;
        return true;
    }
    catch {
        return false;
    }
}
const $ZodJWT = /*@__PURE__*/ $constructor("$ZodJWT", (inst, def) => {
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
        if (isValidJWT(payload.value, def.alg))
            return;
        payload.issues.push({
            code: "invalid_format",
            format: "jwt",
            input: payload.value,
            inst,
            continue: !def.abort,
        });
    };
});
const $ZodCustomStringFormat = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("$ZodCustomStringFormat", (inst, def) => {
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
        if (def.fn(payload.value))
            return;
        payload.issues.push({
            code: "invalid_format",
            format: def.format,
            input: payload.value,
            inst,
            continue: !def.abort,
        });
    };
})));
const $ZodNumber = /*@__PURE__*/ $constructor("$ZodNumber", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.pattern = number;
    inst._zod.parse = (payload, _ctx) => {
        if (def.coerce)
            try {
                payload.value = Number(payload.value);
            }
            catch (_) { }
        const input = payload.value;
        if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) {
            return payload;
        }
        const received = typeof input === "number"
            ? Number.isNaN(input)
                ? "NaN"
                : !Number.isFinite(input)
                    ? String(input)
                    : undefined
            : undefined;
        payload.issues.push({
            expected: "number",
            code: "invalid_type",
            input,
            inst,
            ...(received ? { received } : {}),
        });
        return payload;
    };
});
const $ZodNumberFormat = /*@__PURE__*/ $constructor("$ZodNumberFormat", (inst, def) => {
    $ZodCheckNumberFormat.init(inst, def);
    $ZodNumber.init(inst, def); // no format checks
});
const $ZodBoolean = /*@__PURE__*/ $constructor("$ZodBoolean", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.pattern = regexes_boolean;
    inst._zod.parse = (payload, _ctx) => {
        if (def.coerce)
            try {
                payload.value = Boolean(payload.value);
            }
            catch (_) { }
        const input = payload.value;
        if (typeof input === "boolean")
            return payload;
        payload.issues.push({
            expected: "boolean",
            code: "invalid_type",
            input,
            inst,
        });
        return payload;
    };
});
const $ZodBigInt = /*@__PURE__*/ $constructor("$ZodBigInt", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.pattern = bigint;
    inst._zod.parse = (payload, _ctx) => {
        if (def.coerce)
            try {
                payload.value = BigInt(payload.value);
            }
            catch (_) { }
        if (typeof payload.value === "bigint")
            return payload;
        payload.issues.push({
            expected: "bigint",
            code: "invalid_type",
            input: payload.value,
            inst,
        });
        return payload;
    };
});
const $ZodBigIntFormat = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("$ZodBigIntFormat", (inst, def) => {
    checks.$ZodCheckBigIntFormat.init(inst, def);
    $ZodBigInt.init(inst, def); // no format checks
})));
const $ZodSymbol = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("$ZodSymbol", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        if (typeof input === "symbol")
            return payload;
        payload.issues.push({
            expected: "symbol",
            code: "invalid_type",
            input,
            inst,
        });
        return payload;
    };
})));
const $ZodUndefined = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("$ZodUndefined", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.pattern = regexes.undefined;
    inst._zod.values = new Set([undefined]);
    inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        if (typeof input === "undefined")
            return payload;
        payload.issues.push({
            expected: "undefined",
            code: "invalid_type",
            input,
            inst,
        });
        return payload;
    };
})));
const $ZodNull = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("$ZodNull", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.pattern = regexes.null;
    inst._zod.values = new Set([null]);
    inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        if (input === null)
            return payload;
        payload.issues.push({
            expected: "null",
            code: "invalid_type",
            input,
            inst,
        });
        return payload;
    };
})));
const $ZodAny = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("$ZodAny", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload) => payload;
})));
const $ZodUnknown = /*@__PURE__*/ $constructor("$ZodUnknown", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload) => payload;
});
const $ZodNever = /*@__PURE__*/ $constructor("$ZodNever", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
        payload.issues.push({
            expected: "never",
            code: "invalid_type",
            input: payload.value,
            inst,
        });
        return payload;
    };
});
const $ZodVoid = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("$ZodVoid", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        if (typeof input === "undefined")
            return payload;
        payload.issues.push({
            expected: "void",
            code: "invalid_type",
            input,
            inst,
        });
        return payload;
    };
})));
const $ZodDate = /*@__PURE__*/ $constructor("$ZodDate", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
        if (def.coerce) {
            try {
                payload.value = new Date(payload.value);
            }
            catch (_err) { }
        }
        const input = payload.value;
        const isDate = input instanceof Date;
        const isValidDate = isDate && !Number.isNaN(input.getTime());
        if (isValidDate)
            return payload;
        payload.issues.push({
            expected: "date",
            code: "invalid_type",
            input,
            ...(isDate ? { received: "Invalid Date" } : {}),
            inst,
        });
        return payload;
    };
});
// an oversized container fails its leading size checks before any element is parsed
function capSize(inst, size) {
    const caps = sizeCaps(inst._zod.def.checks);
    if (!caps.length)
        return;
    const cap = Math.min(...caps.map((c) => c[0]));
    const parse = inst._zod.parse;
    inst._zod.parse = (payload, ctx) => {
        const n = size(payload.value);
        if (n > cap && !ctx?.skipChecks && ctx?.direction !== "backward") {
            for (const [max, ch] of sizeCaps(inst._zod.def.checks)) {
                if (n > max && ch._zod.def.when(payload)) {
                    const start = payload.issues.length;
                    ch._zod.check(payload);
                    // the value is still the raw input, so no later check may read it
                    payload.issues[start].continue = false;
                    attachSchema(payload.issues, start, inst);
                    return payload;
                }
            }
        }
        return parse(payload, ctx);
    };
}
const arraySize = (input) => (Array.isArray(input) ? input.length : -1);
const mapSize = (input) => (input instanceof Map ? input.size : -1);
const setSize = (input) => (input instanceof Set ? input.size : -1);
function handleArrayResult(result, final, index) {
    if (result.issues.length) {
        final.issues.push(...prefixIssues(index, result.issues));
    }
    final.value[index] = result.value;
}
const $ZodArray = /*@__PURE__*/ $constructor("$ZodArray", (inst, def) => {
    $ZodType.init(inst, def);
    const memo = globalConfig.memoizer;
    memo?.attach(inst);
    inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        if (!Array.isArray(input)) {
            payload.issues.push({
                expected: "array",
                code: "invalid_type",
                input,
                inst,
            });
            return payload;
        }
        payload.value = memo ? memo.alloc(inst, payload, Array(input.length), ctx) : Array(input.length);
        const proms = [];
        const abortEarly = ctx?.abortEarly;
        for (let i = 0; i < input.length; i++) {
            const item = input[i];
            const result = def.element._zod.run({
                value: item,
                issues: [],
            }, ctx);
            if (result instanceof Promise) {
                proms.push(result.then((result) => handleArrayResult(result, payload, i)));
            }
            else {
                handleArrayResult(result, payload, i);
                // the element's payload is authoritative here, since handleArrayResult forwards every issue; an object's is not, because it drops a failed absent optional
                if (abortEarly && result.issues.length !== 0 && aborted(result))
                    break;
            }
        }
        if (proms.length) {
            return Promise.all(proms).then(() => payload);
        }
        return payload; //handleArrayResultsAsync(parseResults, final);
    };
    capSize(inst, arraySize);
});
function handlePropertyResult(result, final, key, input, optin, optout) {
    const isPresent = key in input;
    const isOptionalOut = optout === "optional";
    // The middle rung means "absence permitted, nothing supplied in its place", so an absent key contributes nothing — whatever the schema made of `undefined` is invented, not substituted. Only `optional` reaches this with a value: `defaulted` substitutes, and a schema that isn't optional-out has to keep the key.
    if (!isPresent && isOptionalOut && optin === "optional") {
        return;
    }
    if (result.issues.length) {
        // For optional-in/out schemas, ignore errors on absent keys.
        if (optin !== undefined && isOptionalOut && !isPresent) {
            return;
        }
        final.issues.push(...prefixIssues(key, result.issues));
    }
    if (!isPresent && optin === undefined) {
        if (!result.issues.length) {
            final.issues.push({
                code: "invalid_type",
                expected: "nonoptional",
                input: undefined,
                path: [key],
            });
        }
        return;
    }
    if (result.value === undefined) {
        if (isPresent || (optin === "defaulted" && !isOptionalOut)) {
            final.value[key] = undefined;
        }
    }
    else {
        final.value[key] = result.value;
    }
}
// one shared instance; a fresh [] per schema cost 56 bytes retained
const NO_SYMBOL_KEYS = [];
function normalizeDef(def) {
    const keys = Object.keys(def.shape);
    const ownSymbols = Object.getOwnPropertySymbols(def.shape);
    const symbolKeys = ownSymbols.length ? ownSymbols : NO_SYMBOL_KEYS;
    // aliases `keys` when there are no symbols, so a string-only shape keeps one array
    const allKeys = symbolKeys.length ? [...keys, ...symbolKeys] : keys;
    for (const k of allKeys) {
        if (!def.shape?.[k]?._zod?.traits?.has("$ZodType")) {
            throw new Error(`Invalid element at key "${String(k)}": expected a Zod schema`);
        }
    }
    const okeys = optionalKeys(def.shape);
    return {
        ...def,
        allKeys,
        symbolKeys,
        // string-only: handleCatchall matches it against `for...in`, which never yields a symbol
        keySet: new Set(keys),
        numKeys: keys.length,
        optionalKeys: new Set(okeys),
    };
}
function handleCatchall(proms, input, payload, ctx, def, inst, abortEarly) {
    const unrecognized = [];
    const keySet = def.keySet;
    const _catchall = def.catchall._zod;
    const t = _catchall.def.type;
    const optin = _catchall.optin;
    const optout = _catchall.optout;
    // starts at 0, not the current length: the shape phase already ran and may have aborted
    let seen = 0;
    for (const key in input) {
        if (abortEarly && payload.issues.length !== seen) {
            if (aborted(payload, seen))
                break;
            seen = payload.issues.length;
        }
        // Must precede the __proto__ branch: a declared key is not unrecognized, even though the shape loop deliberately strips __proto__ from the parsed output.
        if (keySet.has(key))
            continue;
        // Don't copy an undeclared __proto__ into the result; assignment to a plain {} would replace the result prototype. But in strict mode it is still an unknown key, so report it before skipping.
        if (key === "__proto__") {
            if (t === "never")
                unrecognized.push(key);
            continue;
        }
        if (t === "never") {
            unrecognized.push(key);
            continue;
        }
        const r = _catchall.run({ value: input[key], issues: [] }, ctx);
        if (r instanceof Promise) {
            proms.push(r.then((r) => handlePropertyResult(r, payload, key, input, optin, optout)));
        }
        else {
            handlePropertyResult(r, payload, key, input, optin, optout);
        }
    }
    if (unrecognized.length) {
        payload.issues.push({
            code: "unrecognized_keys",
            keys: unrecognized,
            input,
            inst,
            // Describes the shape of the input, not the validity of the parsed value, so it never aborts. The parse still fails; the schema's own checks just get to run first, and an enclosing intersection can reconcile the key against a sibling operand.
            continue: true,
        });
    }
    if (!proms.length)
        return payload;
    return Promise.all(proms).then(() => {
        return payload;
    });
}
const $ZodObject = /*@__PURE__*/ $constructor("$ZodObject", (inst, def) => {
    // requires cast because technically $ZodObject doesn't extend
    $ZodType.init(inst, def);
    const desc = Object.getOwnPropertyDescriptor(def, "shape");
    // a cloned def carries its source's accessor, which knows the shape it answers from; adopting that keeps the clone's keys readable without running it
    const sh = desc?.get ? desc.get.raw : (def.shape ?? {});
    if (sh) {
        // Freezes the shape on first read, so its getters resolve once and every later read sees the same schemas.
        const get = () => {
            const newSh = { ...sh };
            Object.defineProperty(def, "shape", { value: newSh });
            get.raw = newSh;
            return newSh;
        };
        get.raw = sh;
        Object.defineProperty(def, "shape", { get });
    }
    const _normalized = cached(() => normalizeDef(def));
    defineLazyInternal(inst, "propValues", (zod) => {
        const shape = zod.def.shape;
        const propValues = {};
        for (const key in shape) {
            const field = shape[key]._zod;
            if (field.values) {
                if (!Object.prototype.hasOwnProperty.call(propValues, key)) {
                    util_assignProp(propValues, key, new Set());
                }
                for (const v of field.values)
                    propValues[key].add(v);
                // An omittable slot reads back as undefined at a discriminator lookup, so it has to claim undefined: two options that can both omit the key are not discriminable on it.
                if (field.optin !== undefined)
                    propValues[key].add(undefined);
            }
        }
        return propValues;
    });
    const isObject = util_isObject;
    const catchall = def.catchall;
    let value;
    const memo = globalConfig.memoizer;
    memo?.attach(inst);
    inst._zod.parse = (payload, ctx) => {
        value ?? (value = _normalized.value);
        const input = payload.value;
        if (!isObject(input)) {
            payload.issues.push({
                expected: "object",
                code: "invalid_type",
                input,
                inst,
            });
            return payload;
        }
        payload.value = memo ? memo.alloc(inst, payload, {}, ctx) : {};
        const proms = [];
        const shape = value.shape;
        const abortEarly = ctx?.abortEarly;
        let seen = payload.issues.length;
        for (const key of value.allKeys) {
            if (abortEarly && payload.issues.length !== seen) {
                if (aborted(payload, seen))
                    break;
                seen = payload.issues.length;
            }
            if (key === "__proto__")
                continue;
            const el = shape[key];
            const optin = el._zod.optin;
            const optout = el._zod.optout;
            const r = el._zod.run({ value: input[key], issues: [] }, ctx);
            if (r instanceof Promise) {
                proms.push(r.then((r) => handlePropertyResult(r, payload, key, input, optin, optout)));
            }
            else {
                handlePropertyResult(r, payload, key, input, optin, optout);
            }
        }
        if (!catchall) {
            return proms.length ? Promise.all(proms).then(() => payload) : payload;
        }
        return handleCatchall(proms, input, payload, ctx, _normalized.value, inst, abortEarly === true);
    };
});
const $ZodObjectJIT = /*@__PURE__*/ $constructor("$ZodObjectJIT", (inst, def) => {
    // requires cast because technically $ZodObject doesn't extend
    $ZodObject.init(inst, def);
    const superParse = inst._zod.parse;
    const _normalized = cached(() => normalizeDef(def));
    const memo = globalConfig.memoizer;
    const generateFastpass = (shape) => {
        const normalized = _normalized.value;
        const syms = normalized.symbolKeys;
        // a symbol has no source literal, so it is read as `syms[i]` off the closed-over scope
        const doc = new Doc(["payload", "ctx"], { shape, inst, memo, syms });
        const parseStr = (k) => `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
        // prefixes in place, like util.prefixIssues. newResult must land before the early return: a catchall runs after this and would otherwise write onto the caller's input
        const prefixStr = (id, k) => `
          let ${id}_ab = false;
          for (let i = 0; i < ${id}.issues.length; i++) {
            const iss = ${id}.issues[i];
            iss.path = iss.path ? [${k}, ...iss.path] : [${k}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${id}_ab = true;
          }
          if (${id}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
        doc.write(`const input = payload.value;`);
        const ids = Object.create(null);
        let counter = 0;
        for (const key of normalized.allKeys) {
            ids[key] = `key_${counter++}`;
        }
        // A: preserve key order {
        doc.write(memo ? `const newResult = memo.alloc(inst, payload, {}, ctx);` : `const newResult = {};`);
        for (const key of normalized.allKeys) {
            if (key === "__proto__")
                continue;
            const id = ids[key];
            const k = typeof key === "symbol" ? `syms[${syms.indexOf(key)}]` : esc(key);
            const isPresent = `${k} in input`;
            const schema = shape[key];
            const optin = schema?._zod?.optin;
            const isOptionalIn = optin !== undefined;
            const isOptionalOut = schema?._zod?.optout === "optional";
            doc.write(`const ${id} = ${parseStr(k)};`);
            if (isOptionalIn && isOptionalOut) {
                // For optional-in/out schemas, ignore errors on absent keys — and, like the interpreted path, drop the value produced alongside them. The middle rung goes further: it permits absence without supplying anything in its place, so an absent key contributes nothing at all.
                const assign = optin === "optional" ? `${id}_present` : `${id}.value !== undefined || ${id}_present`;
                doc.write(`
        const ${id}_present = ${isPresent};
        if (!${id}.issues.length || ${id}_present) {
          if (${id}.issues.length) {${prefixStr(id, k)}
          }

          if (${assign}) {
            newResult[${k}] = ${id}.value;
          }
        }

      `);
            }
            else if (!isOptionalIn) {
                doc.write(`
        const ${id}_present = ${isPresent};
        if (${id}.issues.length) {${prefixStr(id, k)}
        }
        if (!${id}_present && !${id}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${k}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${id}_present) {
          newResult[${k}] = ${id}.value;
        }

      `);
            }
            else {
                doc.write(`
        if (${id}.issues.length) {${prefixStr(id, k)}
        }
      `);
                if (optin === "defaulted") {
                    doc.write(`newResult[${k}] = ${id}.value;`);
                }
                else {
                    doc.write(`
        if (${id}.value !== undefined || ${isPresent}) {
          newResult[${k}] = ${id}.value;
        }
      `);
                }
            }
        }
        doc.write(`payload.value = newResult;`);
        doc.write(`return payload;`);
        // closing `shape` in is what pays: turbofan specializes the parser against that one shape object, so every `shape[k]._zod.run` folds to a known callee. as a parameter it stays a generic load and measures 13% slower even with the forwarding frame gone
        return doc.compile();
    };
    let fastpass;
    const isObject = util_isObject;
    const jit = !globalConfig.jitless;
    const allowsEval = util_allowsEval;
    const fastEnabled = jit && allowsEval.value; // && !def.catchall;
    const catchall = def.catchall;
    let value;
    inst._zod.parse = (payload, ctx) => {
        value ?? (value = _normalized.value);
        const input = payload.value;
        if (!isObject(input)) {
            payload.issues.push({
                expected: "object",
                code: "invalid_type",
                input,
                inst,
            });
            return payload;
        }
        if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
            // always synchronous
            if (!fastpass)
                fastpass = generateFastpass(def.shape);
            payload = fastpass(payload, ctx);
            if (!catchall)
                return payload;
            return handleCatchall([], input, payload, ctx, value, inst, ctx?.abortEarly === true);
        }
        return superParse(payload, ctx);
    };
});
function handleUnionResults(results, final, inst, ctx) {
    for (const result of results) {
        if (result.issues.length === 0) {
            final.value = result.value;
            return final;
        }
    }
    const nonaborted = results.filter((r) => !aborted(r));
    if (nonaborted.length === 1) {
        final.value = nonaborted[0].value;
        return nonaborted[0];
    }
    final.issues.push({
        code: "invalid_union",
        input: final.value,
        inst,
        errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config()))),
    });
    return final;
}
const $ZodUnion = /*@__PURE__*/ $constructor("$ZodUnion", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazyInternal(inst, "optin", (zod) => zod.def.options.some((o) => o._zod.optin === "defaulted")
        ? "defaulted"
        : zod.def.options.some((o) => o._zod.optin !== undefined)
            ? "optional"
            : undefined);
    defineLazyInternal(inst, "optout", (zod) => zod.def.options.some((o) => o._zod.optout === "optional") ? "optional" : undefined);
    defineLazyInternal(inst, "values", (zod) => {
        if (zod.def.options.every((o) => o._zod.values)) {
            return new Set(zod.def.options.flatMap((option) => Array.from(option._zod.values)));
        }
        return undefined;
    });
    defineLazyInternal(inst, "pattern", (zod) => {
        if (zod.def.options.every((o) => o._zod.pattern)) {
            const patterns = zod.def.options.map((o) => o._zod.pattern);
            return new RegExp(`^(${patterns.map((p) => cleanRegex(p.source)).join("|")})$`);
        }
        return undefined;
    });
    const first = def.options.length === 1 ? def.options[0]._zod.run : null;
    inst._zod.parse = (payload, ctx) => {
        if (first) {
            return first(payload, ctx);
        }
        let async = false;
        const results = [];
        for (const option of def.options) {
            const result = option._zod.run({
                value: payload.value,
                issues: [],
            }, ctx);
            if (result instanceof Promise) {
                results.push(result);
                async = true;
            }
            else {
                if (result.issues.length === 0)
                    return result;
                results.push(result);
            }
        }
        if (!async)
            return handleUnionResults(results, payload, inst, ctx);
        return Promise.all(results).then((results) => {
            return handleUnionResults(results, payload, inst, ctx);
        });
    };
});
function handleExclusiveUnionResults(results, final, inst, ctx) {
    const matches = [];
    for (let i = 0; i < results.length; i++) {
        if (results[i].issues.length === 0)
            matches.push(i);
    }
    if (matches.length === 1) {
        final.value = results[matches[0]].value;
        return final;
    }
    if (matches.length === 0) {
        // No matches - same as regular union
        final.issues.push({
            code: "invalid_union",
            input: final.value,
            inst,
            errors: results.map((result) => result.issues.map((iss) => util.finalizeIssue(iss, ctx, core.config()))),
        });
    }
    else {
        // Multiple matches - exclusive union failure
        final.issues.push({
            code: "invalid_union",
            input: final.value,
            inst,
            errors: [],
            inclusive: false,
            matches,
        });
    }
    return final;
}
const $ZodXor = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("$ZodXor", (inst, def) => {
    $ZodUnion.init(inst, def);
    def.inclusive = false;
    const first = def.options.length === 1 ? def.options[0]._zod.run : null;
    inst._zod.parse = (payload, ctx) => {
        if (first) {
            return first(payload, ctx);
        }
        let async = false;
        const results = [];
        for (const option of def.options) {
            const result = option._zod.run({
                value: payload.value,
                issues: [],
            }, ctx);
            if (result instanceof Promise) {
                results.push(result);
                async = true;
            }
            else {
                results.push(result);
            }
        }
        if (!async)
            return handleExclusiveUnionResults(results, payload, inst, ctx);
        return Promise.all(results).then((results) => {
            return handleExclusiveUnionResults(results, payload, inst, ctx);
        });
    };
})));
/** Returns the option whose discriminator claims `value`, or throws if ambiguous. */
function getDiscriminatedOption(union, value) {
    const internals = union._zod;
    let map = internals.bag.optionsMap;
    if (!map) {
        map = discriminatorMap(internals.def);
        internals.bag.optionsMap = map;
    }
    const option = map.get(value);
    if (option === null)
        throw new Error(`Ambiguous discriminator value "${String(value)}"`);
    return option;
}
function discriminatorMap(def) {
    const map = new Map();
    for (const option of def.options) {
        const values = option._zod.propValues?.[def.discriminator];
        if (!values || values.size === 0)
            throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(option)}"`);
        for (const value of values) {
            if (map.has(value)) {
                if (value !== undefined)
                    throw new Error(`Duplicate discriminator value "${String(value)}"`);
                // keep the collision marked so a later member cannot reclaim it
                map.set(value, null);
            }
            else {
                map.set(value, option);
            }
        }
    }
    return map;
}
const $ZodDiscriminatedUnion = 
/*@__PURE__*/
(/* unused pure expression or super */ null && (core.$constructor("$ZodDiscriminatedUnion", (inst, def) => {
    def.inclusive = false;
    $ZodUnion.init(inst, def);
    const _super = inst._zod.parse;
    util.defineLazyInternal(inst, "propValues", (zod) => {
        const propValues = {};
        let undefinedCount = 0;
        for (const option of zod.def.options) {
            const pv = option._zod.propValues;
            if (!pv || Object.keys(pv).length === 0)
                throw new Error(`Invalid discriminated union option at index "${zod.def.options.indexOf(option)}"`);
            if (pv[zod.def.discriminator]?.has(undefined))
                undefinedCount++;
            for (const [k, v] of Object.entries(pv)) {
                if (!Object.prototype.hasOwnProperty.call(propValues, k)) {
                    util.assignProp(propValues, k, new Set());
                }
                for (const val of v) {
                    propValues[k].add(val);
                }
            }
        }
        if (!zod.def.unionFallback && undefinedCount > 1)
            propValues[zod.def.discriminator]?.delete(undefined);
        return propValues;
    });
    // Checked now rather than in the lookup map below, so an option that lacks the discriminator fails at the `discriminatedUnion` call instead of on the first object parsed. Options whose shape cannot be enumerated without resolving it — pipes and lazies — are left to the map.
    def.options.forEach((option, i) => {
        const propShape = util.rawShape(option._zod.def);
        if (propShape && !Object.prototype.hasOwnProperty.call(propShape, def.discriminator)) {
            throw new Error(`Invalid discriminated union option at index "${i}"`);
        }
    });
    const disc = util.cached(() => discriminatorMap(def));
    inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        if (!util.isObject(input)) {
            payload.issues.push({
                code: "invalid_type",
                expected: "object",
                input,
                inst,
            });
            return payload;
        }
        const value = input?.[def.discriminator];
        const opt = disc.value.get(value);
        // forward metadata cannot choose an encoder for an absent tag
        if (opt && (value !== undefined || ctx.direction !== "backward")) {
            return opt._zod.run(payload, ctx);
        }
        // Fall back to union matching when the fast discriminator path fails:
        // - explicitly enabled via unionFallback, or
        // - during backward direction (encode), since codec-based discriminators have different values in forward vs backward directions
        if (def.unionFallback || ctx.direction === "backward") {
            return _super(payload, ctx);
        }
        // no matching discriminator
        payload.issues.push({
            code: "invalid_union",
            errors: [],
            note: "No matching discriminator",
            discriminator: def.discriminator,
            options: Array.from(disc.value.keys()).filter((value) => disc.value.get(value) !== null),
            input,
            path: [def.discriminator],
            inst,
        });
        return payload;
    };
})));
const $ZodIntersection = /*@__PURE__*/ $constructor("$ZodIntersection", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        const left = def.left._zod.run({ value: input, issues: [] }, ctx);
        const right = def.right._zod.run({ value: input, issues: [] }, ctx);
        const async = left instanceof Promise || right instanceof Promise;
        if (async) {
            return Promise.all([left, right]).then(([left, right]) => {
                return handleIntersectionResults(payload, left, right);
            });
        }
        return handleIntersectionResults(payload, left, right);
    };
});
function mergeValues(a, b) {
    // const aType = parse.t(a);
    // const bType = parse.t(b);
    if (a === b) {
        return { valid: true, data: a };
    }
    if (a instanceof Date && b instanceof Date && +a === +b) {
        return { valid: true, data: a };
    }
    if (isPlainObject(a) && isPlainObject(b)) {
        const bKeys = Object.keys(b);
        const sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1);
        const newObj = { ...a, ...b };
        if (Object.prototype.hasOwnProperty.call(newObj, "__proto__"))
            delete newObj.__proto__;
        for (const key of sharedKeys) {
            if (key === "__proto__")
                continue;
            const sharedValue = mergeValues(a[key], b[key]);
            if (!sharedValue.valid) {
                return {
                    valid: false,
                    mergeErrorPath: [key, ...sharedValue.mergeErrorPath],
                };
            }
            newObj[key] = sharedValue.data;
        }
        return { valid: true, data: newObj };
    }
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) {
            return { valid: false, mergeErrorPath: [] };
        }
        const newArray = [];
        for (let index = 0; index < a.length; index++) {
            const itemA = a[index];
            const itemB = b[index];
            const sharedValue = mergeValues(itemA, itemB);
            if (!sharedValue.valid) {
                return {
                    valid: false,
                    mergeErrorPath: [index, ...sharedValue.mergeErrorPath],
                };
            }
            newArray.push(sharedValue.data);
        }
        return { valid: true, data: newArray };
    }
    return { valid: false, mergeErrorPath: [] };
}
function handleIntersectionResults(result, left, right) {
    // Track which side(s) reject each key. A key rejection is reported only when BOTH sides reject it, so a key owned by one branch survives the other's key schema. strictObject reports these as unrecognized_keys; a record with an open key schema reports one invalid_key per key.
    const unrecKeys = new Map();
    let unrecIssue;
    const keyIssues = new Map();
    const collect = (iss, side) => {
        let keys;
        if (iss.code === "unrecognized_keys" && !iss.path?.length) {
            unrecIssue ?? (unrecIssue = iss);
            keys = iss.keys;
        }
        else if (iss.code === "invalid_key" && iss.origin === "record" && iss.path?.length === 1) {
            const k = String(iss.path[0]);
            if (!keyIssues.has(k))
                keyIssues.set(k, iss);
            keys = [k];
        }
        else {
            return false;
        }
        for (const k of keys) {
            if (!unrecKeys.has(k))
                unrecKeys.set(k, {});
            unrecKeys.get(k)[side] = true;
        }
        return true;
    };
    for (const iss of left.issues) {
        if (!collect(iss, "l"))
            result.issues.push(iss);
    }
    for (const iss of right.issues) {
        if (!collect(iss, "r"))
            result.issues.push(iss);
    }
    // Report only keys rejected by BOTH sides
    const bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k]) => k);
    if (bothKeys.length) {
        const aggregated = unrecIssue ? bothKeys.filter((k) => unrecIssue.keys.includes(k)) : [];
        if (aggregated.length)
            result.issues.push({ ...unrecIssue, keys: aggregated });
        for (const k of bothKeys) {
            if (!aggregated.includes(k) && keyIssues.has(k))
                result.issues.push(keyIssues.get(k));
        }
    }
    const merged = mergeValues(left.value, right.value);
    if (!merged.valid) {
        if (aborted(result))
            return result;
        throw new Error(`Unmergable intersection. Error path: ` + `${JSON.stringify(merged.mergeErrorPath)}`);
    }
    result.value = merged.data;
    return result;
}
const $ZodTuple = /*@__PURE__*/ $constructor("$ZodTuple", (inst, def) => {
    $ZodType.init(inst, def);
    const items = def.items;
    const memo = globalConfig.memoizer;
    memo?.attach(inst);
    inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        if (!Array.isArray(input)) {
            payload.issues.push({
                input,
                inst,
                expected: "tuple",
                code: "invalid_type",
            });
            return payload;
        }
        payload.value = memo ? memo.alloc(inst, payload, [], ctx) : [];
        const proms = [];
        const optinStart = getTupleOptStart(items, "optin");
        const optoutStart = getTupleOptStart(items, "optout");
        if (!def.rest) {
            if (input.length < optinStart) {
                payload.issues.push({
                    code: "too_small",
                    minimum: optinStart,
                    inclusive: true,
                    input,
                    inst,
                    origin: "array",
                });
                return payload;
            }
            if (input.length > items.length) {
                payload.issues.push({
                    code: "too_big",
                    maximum: items.length,
                    inclusive: true,
                    input,
                    inst,
                    origin: "array",
                });
            }
        }
        // Run every item in parallel, collecting results into an indexed array. The post-processing in `handleTupleResults` walks them in order so it can decide whether an absent optional-output error can truncate the tail or must be reported to preserve required output.
        const itemResults = new Array(items.length);
        // only tracked when there is a rest loop to skip
        const abortEarly = def.rest ? ctx?.abortEarly : undefined;
        let itemAborted = false;
        for (let i = 0; i < items.length; i++) {
            const r = items[i]._zod.run({ value: input[i], issues: [] }, ctx);
            if (r instanceof Promise) {
                proms.push(r.then((rr) => {
                    itemResults[i] = rr;
                }));
            }
            else {
                itemResults[i] = r;
                if (abortEarly && !itemAborted && r.issues.length)
                    itemAborted = aborted(r);
            }
        }
        // sound because rest is non-empty exactly when every fixed index is present, the one case handleTupleResults cannot discard an item's issues
        if (def.rest && !itemAborted) {
            let i = items.length - 1;
            const rest = input.slice(items.length);
            let seen = payload.issues.length;
            for (const el of rest) {
                if (abortEarly && payload.issues.length !== seen) {
                    if (aborted(payload, seen))
                        break;
                    seen = payload.issues.length;
                }
                i++;
                const result = def.rest._zod.run({ value: el, issues: [] }, ctx);
                if (result instanceof Promise) {
                    proms.push(result.then((r) => handleTupleResult(r, payload, i)));
                }
                else {
                    handleTupleResult(result, payload, i);
                }
            }
        }
        if (proms.length) {
            return Promise.all(proms).then(() => handleTupleResults(itemResults, payload, items, input, optoutStart));
        }
        return handleTupleResults(itemResults, payload, items, input, optoutStart);
    };
});
function getTupleOptStart(items, key) {
    for (let i = items.length - 1; i >= 0; i--) {
        // optin is a three-rung ladder so any rung above `undefined` permits an absent slot; optout stays two-valued.
        const omittable = key === "optin" ? items[i]._zod.optin !== undefined : items[i]._zod.optout === "optional";
        if (!omittable)
            return i + 1;
    }
    return 0;
}
function handleTupleResult(result, final, index) {
    if (result.issues.length) {
        final.issues.push(...prefixIssues(index, result.issues));
    }
    final.value[index] = result.value;
}
function handleTupleResults(itemResults, final, items, input, optoutStart) {
    // Walk results in order. Mirror $ZodObject's swallow-on-absent-optional rule, but only after `optoutStart`: the first index where the output tuple tail can be absent.
    for (let i = 0; i < items.length; i++) {
        const r = itemResults[i];
        const isPresent = i < input.length;
        // The array analog of `handlePropertyResult`'s absent-key early return: the middle rung permits absence without supplying anything in its place, so the tail truncates here instead of materializing whatever the item made of `undefined`.
        if (!isPresent && i >= optoutStart && items[i]._zod.optin === "optional") {
            final.value.length = i;
            break;
        }
        if (r.issues.length) {
            if (!isPresent && i >= optoutStart) {
                final.value.length = i;
                break;
            }
            final.issues.push(...prefixIssues(i, r.issues));
        }
        final.value[i] = r.value;
    }
    // Drop trailing slots that produced `undefined` for absent input
    // (the array analog of an absent optional key on an object). The
    // `i >= input.length` floor is critical: an explicit `undefined`
    // *inside* the input must be preserved even when the schema is
    // optional-out (e.g. `z.string().or(z.undefined())` accepting an
    // explicit undefined value).
    for (let i = final.value.length - 1; i >= input.length; i--) {
        if (items[i]._zod.optout === "optional" && final.value[i] === undefined) {
            final.value.length = i;
        }
        else {
            break;
        }
    }
    return final;
}
const $ZodRecord = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("$ZodRecord", (inst, def) => {
    $ZodType.init(inst, def);
    const memo = core.globalConfig.memoizer;
    memo?.attach(inst);
    inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        if (!util.isPlainObject(input)) {
            payload.issues.push({
                expected: "record",
                code: "invalid_type",
                input,
                inst,
            });
            return payload;
        }
        // no guard in either loop below: a record's invalid_key aborts but an enclosing intersection can reconcile it, so a stopped loop hides keys the sibling does not own and the intersection then rejects nothing
        const proms = [];
        const values = def.keyType._zod.values;
        if (values && !def.partial) {
            payload.value = memo ? memo.alloc(inst, payload, {}, ctx) : {};
            const recordKeys = new Set();
            for (const key of values) {
                if (typeof key === "string" || typeof key === "number" || typeof key === "symbol") {
                    recordKeys.add(typeof key === "number" ? key.toString() : key);
                    // A declared __proto__ is stripped but is not an unrecognized key.
                    if (key === "__proto__")
                        continue;
                    const keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
                    if (keyResult instanceof Promise) {
                        throw new Error("Async schemas not supported in object keys currently");
                    }
                    if (keyResult.issues.length) {
                        payload.issues.push({
                            code: "invalid_key",
                            origin: "record",
                            issues: keyResult.issues.map((iss) => util.finalizeIssue(iss, ctx, core.config())),
                            input: key,
                            path: [key],
                            inst,
                        });
                        continue;
                    }
                    const outKey = keyResult.value;
                    if (outKey === "__proto__")
                        continue;
                    const result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
                    if (result instanceof Promise) {
                        proms.push(result.then((result) => {
                            if (result.issues.length) {
                                payload.issues.push(...util.prefixIssues(key, result.issues));
                            }
                            payload.value[outKey] = result.value;
                        }));
                    }
                    else {
                        if (result.issues.length) {
                            payload.issues.push(...util.prefixIssues(key, result.issues));
                        }
                        payload.value[outKey] = result.value;
                    }
                }
            }
            let unrecognized;
            for (const key in input) {
                if (!recordKeys.has(key)) {
                    if (def.mode === "loose") {
                        // skip __proto__ so it can't replace the result prototype via the assignment setter on the plain {} we build into
                        if (key === "__proto__")
                            continue;
                        payload.value[key] = input[key];
                    }
                    else {
                        unrecognized = unrecognized ?? [];
                        unrecognized.push(key);
                    }
                }
            }
            if (unrecognized && unrecognized.length > 0) {
                payload.issues.push({
                    code: "unrecognized_keys",
                    input,
                    inst,
                    keys: unrecognized,
                    continue: true,
                });
            }
        }
        else {
            payload.value = memo ? memo.alloc(inst, payload, {}, ctx) : {};
            // An enumerable key schema declares which keys the record owns, so a key outside the set is unrecognized. A non-enumerable one (regex, refine) is a constraint every key must satisfy, so a failing key is invalid. Only the former is reconcilable against the other side of an intersection.
            let unrecognized;
            // Reflect.ownKeys for Symbol-key support; filter non-enumerable to match z.object()
            for (const key of Reflect.ownKeys(input)) {
                if (key === "__proto__")
                    continue;
                if (!Object.prototype.propertyIsEnumerable.call(input, key))
                    continue;
                let keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
                if (keyResult instanceof Promise) {
                    throw new Error("Async schemas not supported in object keys currently");
                }
                // Numeric string fallback: if key is a numeric string and failed, retry with Number(key). This handles z.number(), z.literal([1, 2, 3]), and unions containing numeric literals
                const checkNumericKey = typeof key === "string" && regexes.number.test(key) && keyResult.issues.length;
                if (checkNumericKey) {
                    const retryResult = def.keyType._zod.run({ value: Number(key), issues: [] }, ctx);
                    if (retryResult instanceof Promise) {
                        throw new Error("Async schemas not supported in object keys currently");
                    }
                    if (retryResult.issues.length === 0) {
                        keyResult = retryResult;
                    }
                }
                if (keyResult.issues.length) {
                    if (def.mode === "loose") {
                        // Pass through unchanged
                        payload.value[key] = input[key];
                    }
                    else if (values) {
                        unrecognized = unrecognized ?? [];
                        unrecognized.push(key);
                    }
                    else {
                        // Default "strict" behavior: error on invalid key
                        payload.issues.push({
                            code: "invalid_key",
                            origin: "record",
                            issues: keyResult.issues.map((iss) => util.finalizeIssue(iss, ctx, core.config())),
                            input: key,
                            path: [key],
                            inst,
                        });
                    }
                    continue;
                }
                // the guard above tests the raw input key, but the key schema can normalize an ordinary key into __proto__; re-check the key we actually write under
                const outKey = keyResult.value;
                if (outKey === "__proto__")
                    continue;
                const result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
                if (result instanceof Promise) {
                    proms.push(result.then((result) => {
                        if (result.issues.length) {
                            payload.issues.push(...util.prefixIssues(key, result.issues));
                        }
                        payload.value[outKey] = result.value;
                    }));
                }
                else {
                    if (result.issues.length) {
                        payload.issues.push(...util.prefixIssues(key, result.issues));
                    }
                    payload.value[outKey] = result.value;
                }
            }
            if (unrecognized && unrecognized.length > 0) {
                payload.issues.push({
                    code: "unrecognized_keys",
                    input,
                    inst,
                    keys: unrecognized,
                    continue: true,
                });
            }
        }
        if (proms.length) {
            return Promise.all(proms).then(() => payload);
        }
        return payload;
    };
})));
const $ZodMap = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("$ZodMap", (inst, def) => {
    $ZodType.init(inst, def);
    const memo = core.globalConfig.memoizer;
    memo?.attach(inst);
    inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        if (!(input instanceof Map)) {
            payload.issues.push({
                expected: "map",
                code: "invalid_type",
                input,
                inst,
            });
            return payload;
        }
        const proms = [];
        payload.value = memo ? memo.alloc(inst, payload, new Map(), ctx) : new Map();
        const abortEarly = ctx?.abortEarly;
        let seen = payload.issues.length;
        for (const [key, value] of input) {
            if (abortEarly && payload.issues.length !== seen) {
                if (util.aborted(payload, seen))
                    break;
                seen = payload.issues.length;
            }
            const keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
            const valueResult = def.valueType._zod.run({ value: value, issues: [] }, ctx);
            if (keyResult instanceof Promise || valueResult instanceof Promise) {
                proms.push(Promise.all([keyResult, valueResult]).then(([keyResult, valueResult]) => {
                    handleMapResult(keyResult, valueResult, payload, key, input, inst, ctx);
                }));
            }
            else {
                handleMapResult(keyResult, valueResult, payload, key, input, inst, ctx);
            }
        }
        if (proms.length)
            return Promise.all(proms).then(() => payload);
        return payload;
    };
    capSize(inst, mapSize);
})));
function handleMapResult(keyResult, valueResult, final, key, input, inst, ctx) {
    if (keyResult.issues.length) {
        if (util.propertyKeyTypes.has(typeof key)) {
            final.issues.push(...util.prefixIssues(key, keyResult.issues));
        }
        else {
            final.issues.push({
                code: "invalid_key",
                origin: "map",
                input,
                inst,
                issues: keyResult.issues.map((iss) => util.finalizeIssue(iss, ctx, core.config())),
            });
        }
    }
    if (valueResult.issues.length) {
        if (util.propertyKeyTypes.has(typeof key)) {
            final.issues.push(...util.prefixIssues(key, valueResult.issues));
        }
        else {
            final.issues.push({
                origin: "map",
                code: "invalid_element",
                input,
                inst,
                key: key,
                issues: valueResult.issues.map((iss) => util.finalizeIssue(iss, ctx, core.config())),
            });
        }
    }
    final.value.set(keyResult.value, valueResult.value);
}
const $ZodSet = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("$ZodSet", (inst, def) => {
    $ZodType.init(inst, def);
    const memo = core.globalConfig.memoizer;
    memo?.attach(inst);
    inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        if (!(input instanceof Set)) {
            payload.issues.push({
                input,
                inst,
                expected: "set",
                code: "invalid_type",
            });
            return payload;
        }
        const proms = [];
        payload.value = memo ? memo.alloc(inst, payload, new Set(), ctx) : new Set();
        const abortEarly = ctx?.abortEarly;
        let seen = payload.issues.length;
        for (const item of input) {
            if (abortEarly && payload.issues.length !== seen) {
                if (util.aborted(payload, seen))
                    break;
                seen = payload.issues.length;
            }
            const result = def.valueType._zod.run({ value: item, issues: [] }, ctx);
            if (result instanceof Promise) {
                proms.push(result.then((result) => handleSetResult(result, payload)));
            }
            else
                handleSetResult(result, payload);
        }
        if (proms.length)
            return Promise.all(proms).then(() => payload);
        return payload;
    };
    capSize(inst, setSize);
})));
function handleSetResult(result, final) {
    if (result.issues.length) {
        final.issues.push(...result.issues);
    }
    final.value.add(result.value);
}
const $ZodEnum = /*@__PURE__*/ $constructor("$ZodEnum", (inst, def) => {
    $ZodType.init(inst, def);
    const values = getEnumValues(def.entries);
    const valuesSet = new Set(values);
    inst._zod.values = valuesSet;
    defineLazyInternal(inst, "pattern", (zod) => {
        const patternValues = getEnumValues(zod.def.entries).filter((k) => propertyKeyTypes.has(typeof k));
        // unmatchable fallback, RE2-safe: an empty alternation would compile to /^()$/, which matches ""
        return new RegExp(patternValues.length ? `^(${patternValues.map((o) => escapeRegex(o.toString())).join("|")})$` : "^[^\\s\\S]$");
    });
    inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        if (valuesSet.has(input)) {
            return payload;
        }
        payload.issues.push({
            code: "invalid_value",
            values,
            input,
            inst,
        });
        return payload;
    };
});
const $ZodLiteral = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("$ZodLiteral", (inst, def) => {
    $ZodType.init(inst, def);
    const values = new Set(def.values);
    inst._zod.values = values;
    util.defineLazyInternal(inst, "pattern", (zod) => {
        const vals = zod.def.values;
        // unmatchable fallback, RE2-safe: an empty alternation would compile to /^()$/, which matches ""
        return new RegExp(vals.length
            ? `^(${vals
                .map((o) => typeof o === "string" ? util.escapeRegex(o) : o ? util.escapeRegex(o.toString()) : String(o))
                .join("|")})$`
            : "^[^\\s\\S]$");
    });
    inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        if (values.has(input)) {
            return payload;
        }
        payload.issues.push({
            code: "invalid_value",
            values: def.values,
            input,
            inst,
        });
        return payload;
    };
})));
const $ZodFile = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("$ZodFile", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        // @ts-ignore
        if (input instanceof File)
            return payload;
        payload.issues.push({
            expected: "file",
            code: "invalid_type",
            input,
            inst,
        });
        return payload;
    };
})));
const $ZodTransform = /*@__PURE__*/ $constructor("$ZodTransform", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    globalConfig.memoizer?.guard(inst);
    inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
            throw new $ZodEncodeError(inst.constructor.name);
        }
        const _out = def.transform(payload.value, payload);
        if (ctx.async) {
            const output = _out instanceof Promise ? _out : Promise.resolve(_out);
            return output.then((output) => {
                payload.value = output;
                return payload;
            });
        }
        if (_out instanceof Promise) {
            throw new $ZodAsyncError();
        }
        payload.value = _out;
        return payload;
    };
});
function handleOptionalResult(payload, result) {
    // A substituting schema that still failed has no usable answer; yield undefined. Its issues are simply dropped: it ran on a payload of its own, so there is no shared array to truncate and nothing of the caller's to lose with it.
    payload.value = result.issues.length ? undefined : result.value;
    return payload;
}
const $ZodOptional = /*@__PURE__*/ $constructor("$ZodOptional", (inst, def) => {
    $ZodType.init(inst, def);
    // .optional() propagates absence rather than substituting for it, so a defaulted inner keeps its rung.
    defineLazyInternal(inst, "optin", (zod) => zod.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional");
    inst._zod.optout = "optional";
    defineLazyInternal(inst, "values", (zod) => {
        const values = zod.def.innerType._zod.values;
        return values ? new Set([...values, undefined]) : undefined;
    });
    defineLazyInternal(inst, "pattern", (zod) => {
        const pattern = zod.def.innerType._zod.pattern;
        return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : undefined;
    });
    inst._zod.parse = (payload, ctx) => {
        if (payload.value === undefined) {
            // Only the top rung substitutes a value for absence; everything else leaves it intact, which is what .optional() means.
            if (def.innerType._zod.optin !== "defaulted")
                return payload;
            // Its own payload, for the same reason $ZodCatch gets one: a pipe forwards an unrecognized key through the caller's issues array, and this must not read that as the substituting schema failing and drop it.
            const result = def.innerType._zod.run({ value: payload.value, issues: [] }, ctx);
            if (result instanceof Promise)
                return result.then((result) => handleOptionalResult(payload, result));
            return handleOptionalResult(payload, result);
        }
        return def.innerType._zod.run(payload, ctx);
    };
});
const $ZodExactOptional = /*@__PURE__*/ $constructor("$ZodExactOptional", (inst, def) => {
    // Call parent init - inherits optin/optout = "optional"
    $ZodOptional.init(inst, def);
    // Override values/pattern to NOT add undefined
    defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
    defineLazyInternal(inst, "pattern", (zod) => zod.def.innerType._zod.pattern);
    // Override parse to just delegate (no undefined handling)
    inst._zod.parse = (payload, ctx) => {
        return def.innerType._zod.run(payload, ctx);
    };
});
const $ZodNullable = /*@__PURE__*/ $constructor("$ZodNullable", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazyInternal(inst, "optin", (zod) => zod.def.innerType._zod.optin);
    defineLazyInternal(inst, "optout", (zod) => zod.def.innerType._zod.optout);
    defineLazyInternal(inst, "pattern", (zod) => {
        const pattern = zod.def.innerType._zod.pattern;
        return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : undefined;
    });
    defineLazyInternal(inst, "values", (zod) => {
        return zod.def.innerType._zod.values ? new Set([...zod.def.innerType._zod.values, null]) : undefined;
    });
    inst._zod.parse = (payload, ctx) => {
        // Forward direction (decode): allow null to pass through
        if (payload.value === null)
            return payload;
        return def.innerType._zod.run(payload, ctx);
    };
});
const $ZodDefault = /*@__PURE__*/ $constructor("$ZodDefault", (inst, def) => {
    $ZodType.init(inst, def);
    // inst._zod.qin = "true";
    inst._zod.optin = "defaulted";
    defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
    inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
            return def.innerType._zod.run(payload, ctx);
        }
        // Forward direction (decode): apply defaults for undefined input
        if (payload.value === undefined) {
            payload.value = def.defaultValue;
            /**
             * $ZodDefault returns the default value immediately in forward direction.
             * It doesn't pass the default value into the validator ("prefault"). There's no reason to pass the default value through validation. The validity of the default is enforced by TypeScript statically. Otherwise, it's the responsibility of the user to ensure the default is valid. In the case of pipes with divergent in/out types, you can specify the default on the `in` schema of your ZodPipe to set a "prefault" for the pipe.   */
            return payload;
        }
        // Forward direction: continue with default handling
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
            return result.then((result) => handleDefaultResult(result, def));
        }
        return handleDefaultResult(result, def);
    };
});
function handleDefaultResult(payload, def) {
    if (payload.value === undefined) {
        payload.value = def.defaultValue;
    }
    return payload;
}
const $ZodPrefault = /*@__PURE__*/ $constructor("$ZodPrefault", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.optin = "defaulted";
    defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
    inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
            return def.innerType._zod.run(payload, ctx);
        }
        // Forward direction (decode): apply prefault for undefined input
        if (payload.value === undefined) {
            payload.value = def.defaultValue;
        }
        return def.innerType._zod.run(payload, ctx);
    };
});
const $ZodNonOptional = /*@__PURE__*/ $constructor("$ZodNonOptional", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazyInternal(inst, "values", (zod) => {
        const v = zod.def.innerType._zod.values;
        return v ? new Set([...v].filter((x) => x !== undefined)) : undefined;
    });
    inst._zod.parse = (payload, ctx) => {
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
            return result.then((result) => handleNonOptionalResult(result, inst));
        }
        return handleNonOptionalResult(result, inst);
    };
});
function handleNonOptionalResult(payload, inst) {
    if (!payload.issues.length && payload.value === undefined) {
        payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: payload.value,
            inst,
        });
    }
    return payload;
}
const $ZodSuccess = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("$ZodSuccess", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
            throw new core.$ZodEncodeError("ZodSuccess");
        }
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
            return result.then((result) => {
                payload.value = result.issues.length === 0;
                return payload;
            });
        }
        payload.value = result.issues.length === 0;
        return payload;
    };
})));
function handleCatchResult(payload, result, def, ctx) {
    if (!result.issues.length) {
        payload.value = result.value;
        // The value carries up, so the flag describing it has to carry with it: a back-edge into a node still being parsed must not be frozen by an enclosing readonly, and its checks belong to the node itself. Guarded so the ordinary case adds no own property.
        if (result.memo)
            payload.memo = true;
        return payload;
    }
    // Spread the inner's own payload, not ours: `value` has to stay the input the catch was handed, and the inner ran on a payload of its own so its issues are already private to this call.
    payload.value = def.catchValue({
        ...result,
        value: payload.value,
        error: {
            issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config())),
        },
        input: payload.value,
    });
    return payload;
}
const $ZodCatch = /*@__PURE__*/ $constructor("$ZodCatch", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazyInternal(inst, "optin", (zod) => zod.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional");
    defineLazyInternal(inst, "optout", (zod) => zod.def.innerType._zod.optout);
    defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
    inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
            return def.innerType._zod.run(payload, ctx);
        }
        // Forward direction (decode): apply catch logic
        const result = def.innerType._zod.run({ value: payload.value, issues: [] }, ctx);
        if (result instanceof Promise) {
            return result.then((result) => handleCatchResult(payload, result, def, ctx));
        }
        return handleCatchResult(payload, result, def, ctx);
    };
});
const $ZodNaN = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("$ZodNaN", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
        if (typeof payload.value !== "number" || !Number.isNaN(payload.value)) {
            payload.issues.push({
                input: payload.value,
                inst,
                expected: "nan",
                code: "invalid_type",
            });
            return payload;
        }
        return payload;
    };
})));
const $ZodPipe = /*@__PURE__*/ $constructor("$ZodPipe", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazyInternal(inst, "values", (zod) => zod.def.in._zod.values);
    defineLazyInternal(inst, "optin", (zod) => zod.def.in._zod.optin);
    defineLazyInternal(inst, "optout", (zod) => zod.def.out._zod.optout);
    defineLazyInternal(inst, "propValues", (zod) => zod.def.in._zod.propValues);
    inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
            const right = def.out._zod.run(payload, ctx);
            if (right instanceof Promise) {
                return right.then((right) => handlePipeResult(right, def.in, ctx));
            }
            return handlePipeResult(right, def.in, ctx);
        }
        const left = def.in._zod.run(payload, ctx);
        if (left instanceof Promise) {
            return left.then((left) => handlePipeResult(left, def.out, ctx));
        }
        return handlePipeResult(left, def.out, ctx);
    };
});
function handlePipeResult(left, next, ctx) {
    // Any issue stops the pipe, so a failing refinement never feeds its transform. An unrecognized key is the exception: it describes the input's extra properties, not the value being piped, and an enclosing intersection may yet reconcile it.
    if (left.issues.some((iss) => iss.code !== "unrecognized_keys")) {
        // prevent further checks
        left.aborted = true;
        return left;
    }
    return next._zod.run({ value: left.value, issues: left.issues }, ctx);
}
const $ZodCodec = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("$ZodCodec", (inst, def) => {
    $ZodType.init(inst, def);
    util.defineLazyInternal(inst, "values", (zod) => zod.def.in._zod.values);
    util.defineLazyInternal(inst, "optin", (zod) => zod.def.in._zod.optin);
    util.defineLazyInternal(inst, "optout", (zod) => zod.def.out._zod.optout);
    util.defineLazyInternal(inst, "propValues", (zod) => zod.def.in._zod.propValues);
    inst._zod.parse = (payload, ctx) => {
        const direction = ctx.direction || "forward";
        if (direction === "forward") {
            const left = def.in._zod.run(payload, ctx);
            if (left instanceof Promise) {
                return left.then((left) => handleCodecAResult(left, def, ctx));
            }
            return handleCodecAResult(left, def, ctx);
        }
        else {
            const right = def.out._zod.run(payload, ctx);
            if (right instanceof Promise) {
                return right.then((right) => handleCodecAResult(right, def, ctx));
            }
            return handleCodecAResult(right, def, ctx);
        }
    };
})));
function handleCodecAResult(result, def, ctx) {
    if (result.issues.length) {
        // prevent further checks
        result.aborted = true;
        return result;
    }
    const direction = ctx.direction || "forward";
    if (direction === "forward") {
        const transformed = def.transform(result.value, result);
        if (transformed instanceof Promise) {
            return transformed.then((value) => handleCodecTxResult(result, value, def.out, ctx));
        }
        return handleCodecTxResult(result, transformed, def.out, ctx);
    }
    else {
        const transformed = def.reverseTransform(result.value, result);
        if (transformed instanceof Promise) {
            return transformed.then((value) => handleCodecTxResult(result, value, def.in, ctx));
        }
        return handleCodecTxResult(result, transformed, def.in, ctx);
    }
}
function handleCodecTxResult(left, value, nextSchema, ctx) {
    // Check if transform added any issues
    if (left.issues.length) {
        left.aborted = true;
        return left;
    }
    return nextSchema._zod.run({ value, issues: left.issues }, ctx);
}
const $ZodPreprocess = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("$ZodPreprocess", (inst, def) => {
    $ZodPipe.init(inst, def);
})));
const $ZodReadonly = /*@__PURE__*/ $constructor("$ZodReadonly", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazyInternal(inst, "propValues", (zod) => zod.def.innerType._zod.propValues);
    defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
    defineLazyInternal(inst, "optin", (zod) => zod.def.innerType?._zod?.optin);
    defineLazyInternal(inst, "optout", (zod) => zod.def.innerType?._zod?.optout);
    inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
            return def.innerType._zod.run(payload, ctx);
        }
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
            return result.then(handleReadonlyResult);
        }
        return handleReadonlyResult(result);
    };
});
function handleReadonlyResult(payload) {
    // A repeat visit hands back a node that is still being built; freezing it here would make the rest of its keys fail to assign.
    if (!payload.memo)
        payload.value = Object.freeze(payload.value);
    return payload;
}
// a leaf's pattern source with its own checks folded in: the last pattern-carrying check wins, else length bounds narrow the catch-all, else an integer format narrows the number form. the fold lives here instead of on `_zod.pattern` so a bundle without template literals never pays for it
function leafPattern(schema) {
    const def = schema._zod.def;
    let pattern = def.pattern;
    let isInt = !!def.format?.includes("int");
    let minimum;
    let maximum;
    for (const ch of def.checks ?? []) {
        const d = ch._zod.def;
        if (d.pattern)
            pattern = d.pattern;
        isInt || (isInt = !!d.format?.includes("int"));
        const lo = d.minimum ?? d.length;
        const hi = d.maximum ?? d.length;
        if (lo !== undefined && (minimum === undefined || lo > minimum))
            minimum = lo;
        if (hi !== undefined && (maximum === undefined || hi < maximum))
            maximum = hi;
    }
    if (pattern)
        return pattern.source;
    // an empty range matches nothing at runtime, and `{8,5}` is not a legal quantifier
    if (minimum !== undefined && maximum !== undefined && minimum > maximum)
        return "(?!)";
    if (minimum !== undefined || maximum !== undefined)
        return regexes.string({ minimum, maximum }).source;
    const own = schema._zod.pattern;
    return (isInt && own === regexes.number ? regexes.integer : own)?.source;
}
// a part's pattern source. a wrapper's pattern embeds its inner pattern's source verbatim, so the folded form is substituted in place without knowing the wrapper's own composition; a union's options are joined the way the union builds its own pattern
function partPattern(schema) {
    const def = schema._zod.def;
    const own = schema._zod.pattern?.source;
    // lazy resolves its inner on the internals, not the def
    const inner = def.innerType ?? schema._zod.innerType;
    if (inner) {
        const before = inner._zod.pattern?.source;
        const after = partPattern(inner);
        if (own && before && after && after !== before) {
            return own.replace(util.cleanRegex(before), () => util.cleanRegex(after));
        }
        return own;
    }
    if (def.options) {
        const sources = def.options.map(partPattern);
        if (sources.every(Boolean))
            return `^(${sources.map((s) => util.cleanRegex(s)).join("|")})$`;
    }
    return leafPattern(schema);
}
const $ZodTemplateLiteral = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("$ZodTemplateLiteral", (inst, def) => {
    $ZodType.init(inst, def);
    const regexParts = [];
    for (const part of def.parts) {
        if (typeof part === "object" && part !== null) {
            // is Zod schema
            const source = partPattern(part);
            if (!source) {
                throw new Error(`Invalid template literal part, no pattern found: ${[...part._zod.traits].shift()}`);
            }
            regexParts.push(util.cleanRegex(source));
        }
        else if (part === null || util.primitiveTypes.has(typeof part)) {
            regexParts.push(util.escapeRegex(`${part}`));
        }
        else {
            throw new Error(`Invalid template literal part: ${part}`);
        }
    }
    inst._zod.pattern = new RegExp(`^${regexParts.join("")}$`);
    inst._zod.parse = (payload, _ctx) => {
        if (typeof payload.value !== "string") {
            payload.issues.push({
                input: payload.value,
                inst,
                expected: "string",
                code: "invalid_type",
            });
            return payload;
        }
        inst._zod.pattern.lastIndex = 0;
        if (!inst._zod.pattern.test(payload.value)) {
            payload.issues.push({
                input: payload.value,
                inst,
                code: "invalid_format",
                format: def.format ?? "template_literal",
                pattern: inst._zod.pattern.source,
            });
            return payload;
        }
        return payload;
    };
})));
const $ZodFunction = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("$ZodFunction", (inst, def) => {
    $ZodType.init(inst, def);
    // Defined, not assigned: the classic prototype exposes `_def` as a getter with no setter.
    Object.defineProperty(inst, "_def", { value: def });
    inst._zod.def = def;
    inst.implement = (func) => {
        if (typeof func !== "function") {
            throw new Error("implement() must be called with a function");
        }
        // Defined inline so the closure stays anonymous: binding it to a `const` first names it, which costs 256 bytes per implemented function.
        return Object.defineProperty(function (...args) {
            const parsedArgs = inst._def.input ? parse(inst._def.input, args) : args;
            const result = Reflect.apply(func, this, parsedArgs);
            if (inst._def.output) {
                return parse(inst._def.output, result);
            }
            return result;
        }, "_zod", { value: inst._zod, enumerable: false });
    };
    inst.implementAsync = (func) => {
        if (typeof func !== "function") {
            throw new Error("implementAsync() must be called with a function");
        }
        return Object.defineProperty(async function (...args) {
            const parsedArgs = inst._def.input ? await parseAsync(inst._def.input, args) : args;
            const result = await Reflect.apply(func, this, parsedArgs);
            if (inst._def.output) {
                return await parseAsync(inst._def.output, result);
            }
            return result;
        }, "_zod", { value: inst._zod, enumerable: false });
    };
    inst._zod.parse = (payload, _ctx) => {
        if (typeof payload.value !== "function") {
            payload.issues.push({
                code: "invalid_type",
                expected: "function",
                input: payload.value,
                inst,
            });
            return payload;
        }
        // Check if output is a promise type to determine if we should use async implementation
        const hasPromiseOutput = inst._def.output && inst._def.output._zod.def.type === "promise";
        if (hasPromiseOutput) {
            payload.value = inst.implementAsync(payload.value);
        }
        else {
            payload.value = inst.implement(payload.value);
        }
        return payload;
    };
    inst.input = (...args) => {
        const F = inst.constructor;
        if (Array.isArray(args[0])) {
            return new F({
                type: "function",
                input: new $ZodTuple({
                    type: "tuple",
                    items: args[0],
                    rest: args[1],
                }),
                output: inst._def.output,
            });
        }
        return new F({
            type: "function",
            input: args[0],
            output: inst._def.output,
        });
    };
    inst.output = (output) => {
        const F = inst.constructor;
        return new F({
            type: "function",
            input: inst._def.input,
            output,
        });
    };
    return inst;
})));
const $ZodPromise = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("$ZodPromise", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
        return Promise.resolve(payload.value).then((inner) => def.innerType._zod.run({ value: inner, issues: [] }, ctx));
    };
})));
const $ZodLazy = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("$ZodLazy", (inst, def) => {
    $ZodType.init(inst, def);
    // Cache the resolved inner type on the shared `def` so all clones of this lazy (e.g. via `.describe()`/`.meta()`) share the same inner instance, preserving identity for cycle detection on recursive schemas.
    util.defineLazy(inst._zod, "innerType", () => {
        const d = def;
        if (!d._cachedInner)
            d._cachedInner = def.getter();
        return d._cachedInner;
    });
    util.defineLazyInternal(inst, "pattern", (zod) => zod.innerType?._zod?.pattern);
    util.defineLazyInternal(inst, "propValues", (zod) => zod.innerType?._zod?.propValues);
    util.defineLazyInternal(inst, "optin", (zod) => zod.innerType?._zod?.optin ?? undefined);
    util.defineLazyInternal(inst, "optout", (zod) => zod.innerType?._zod?.optout ?? undefined);
    inst._zod.parse = (payload, ctx) => {
        const inner = inst._zod.innerType;
        return inner._zod.run(payload, ctx);
    };
})));
const $ZodCustom = /*@__PURE__*/ $constructor("$ZodCustom", (inst, def) => {
    $ZodCheck.init(inst, def);
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _) => {
        return payload;
    };
    inst._zod.check = (payload) => {
        const input = payload.value;
        const r = def.fn(input);
        if (r instanceof Promise) {
            return r.then((r) => handleRefineResult(r, payload, input, inst));
        }
        handleRefineResult(r, payload, input, inst);
        return;
    };
});
function handleRefineResult(result, payload, input, inst) {
    if (!result) {
        const _iss = {
            code: "custom",
            input,
            inst, // incorporates params.error into issue reporting
            path: [...(inst._zod.def.path ?? [])], // incorporates params.error into issue reporting
            continue: !inst._zod.def.abort,
            // params: inst._zod.def.params,
        };
        if (inst._zod.def.params)
            _iss.params = inst._zod.def.params;
        payload.issues.push(util_issue(_iss));
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/core/registries.js
var registries_a;
const $output = /*@__PURE__*/ (/* unused pure expression or super */ null && (Symbol("ZodOutput")));
const $input = /*@__PURE__*/ (/* unused pure expression or super */ null && (Symbol("ZodInput")));
class $ZodRegistry {
    constructor() {
        this._map = new WeakMap();
        this._idmap = new Map();
    }
    add(schema, ..._meta) {
        const meta = _meta[0];
        this._map.set(schema, meta);
        if (meta && typeof meta === "object" && "id" in meta) {
            this._idmap.set(meta.id, schema);
        }
        return this;
    }
    clear() {
        this._map = new WeakMap();
        this._idmap = new Map();
        return this;
    }
    remove(schema) {
        const meta = this._map.get(schema);
        if (meta && typeof meta === "object" && "id" in meta) {
            this._idmap.delete(meta.id);
        }
        this._map.delete(schema);
        return this;
    }
    get(schema) {
        // return this._map.get(schema) as any;
        // inherit metadata
        const p = schema._zod.parent;
        if (p) {
            const pm = { ...(this.get(p) ?? {}) };
            delete pm.id; // do not inherit id
            const f = { ...pm, ...this._map.get(schema) };
            return Object.keys(f).length ? f : undefined;
        }
        return this._map.get(schema);
    }
    has(schema) {
        return this._map.has(schema);
    }
}
// registries
function registry() {
    return new $ZodRegistry();
}
(registries_a = globalThis).__zod_globalRegistry ?? (registries_a.__zod_globalRegistry = registry());
const globalRegistry = globalThis.__zod_globalRegistry;

;// CONCATENATED MODULE: ./node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/core/api.js




function snapshotChecks(def) {
    if (def.checks)
        def.checks = [...def.checks];
    return def;
}
// @__NO_SIDE_EFFECTS__
function _string(Class, params) {
    return new Class(snapshotChecks({ type: "string", ...normalizeParams(params) }));
}
// @__NO_SIDE_EFFECTS__
function _coercedString(Class, params) {
    return new Class(snapshotChecks({ type: "string", coerce: true, ...util.normalizeParams(params) }));
}
// @__NO_SIDE_EFFECTS__
function _email(Class, params) {
    return new Class({
        type: "string",
        format: "email",
        check: "string_format",
        abort: false,
        ...normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _guid(Class, params) {
    return new Class({
        type: "string",
        format: "guid",
        check: "string_format",
        abort: false,
        ...normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _uuid(Class, params) {
    return new Class({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        ...normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _uuidv4(Class, params) {
    return new Class({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        version: "v4",
        ...normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _uuidv6(Class, params) {
    return new Class({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        version: "v6",
        ...normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _uuidv7(Class, params) {
    return new Class({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        version: "v7",
        ...normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _url(Class, params) {
    return new Class({
        type: "string",
        format: "url",
        check: "string_format",
        abort: false,
        ...normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function api_emoji(Class, params) {
    return new Class({
        type: "string",
        format: "emoji",
        check: "string_format",
        abort: false,
        ...normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _nanoid(Class, params) {
    return new Class({
        type: "string",
        format: "nanoid",
        check: "string_format",
        abort: false,
        ...normalizeParams(params),
    });
}
/**
 * @deprecated CUID v1 is deprecated by its authors due to information leakage
 * (timestamps embedded in the id). Use {@link _cuid2} instead.
 * See https://github.com/paralleldrive/cuid.
 */
// @__NO_SIDE_EFFECTS__
function _cuid(Class, params) {
    return new Class({
        type: "string",
        format: "cuid",
        check: "string_format",
        abort: false,
        ...normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _cuid2(Class, params) {
    return new Class({
        type: "string",
        format: "cuid2",
        check: "string_format",
        abort: false,
        ...normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _ulid(Class, params) {
    return new Class({
        type: "string",
        format: "ulid",
        check: "string_format",
        abort: false,
        ...normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _xid(Class, params) {
    return new Class({
        type: "string",
        format: "xid",
        check: "string_format",
        abort: false,
        ...normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _ksuid(Class, params) {
    return new Class({
        type: "string",
        format: "ksuid",
        check: "string_format",
        abort: false,
        ...normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _ipv4(Class, params) {
    return new Class({
        type: "string",
        format: "ipv4",
        check: "string_format",
        abort: false,
        ...normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _ipv6(Class, params) {
    return new Class({
        type: "string",
        format: "ipv6",
        check: "string_format",
        abort: false,
        ...normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _mac(Class, params) {
    return new Class({
        type: "string",
        format: "mac",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _cidrv4(Class, params) {
    return new Class({
        type: "string",
        format: "cidrv4",
        check: "string_format",
        abort: false,
        ...normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _cidrv6(Class, params) {
    return new Class({
        type: "string",
        format: "cidrv6",
        check: "string_format",
        abort: false,
        ...normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _base64(Class, params) {
    return new Class({
        type: "string",
        format: "base64",
        check: "string_format",
        abort: false,
        ...normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _base64url(Class, params) {
    return new Class({
        type: "string",
        format: "base64url",
        check: "string_format",
        abort: false,
        ...normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _e164(Class, params) {
    return new Class({
        type: "string",
        format: "e164",
        check: "string_format",
        abort: false,
        ...normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _creditCard(Class, params) {
    return new Class({
        type: "string",
        format: "credit_card",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _iban(Class, params) {
    return new Class({
        type: "string",
        format: "iban",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _jwt(Class, params) {
    return new Class({
        type: "string",
        format: "jwt",
        check: "string_format",
        abort: false,
        ...normalizeParams(params),
    });
}
const TimePrecision = {
    Any: null,
    Minute: -1,
    Second: 0,
    Millisecond: 3,
    Microsecond: 6,
};
// @__NO_SIDE_EFFECTS__
function _isoDateTime(Class, params) {
    return new Class({
        type: "string",
        format: "datetime",
        check: "string_format",
        offset: false,
        local: false,
        precision: null,
        ...normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _isoDate(Class, params) {
    return new Class({
        type: "string",
        format: "date",
        check: "string_format",
        ...normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _isoTime(Class, params) {
    return new Class({
        type: "string",
        format: "time",
        check: "string_format",
        precision: null,
        ...normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _isoDuration(Class, params) {
    return new Class({
        type: "string",
        format: "duration",
        check: "string_format",
        ...normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _number(Class, params) {
    return new Class(snapshotChecks({ type: "number", checks: [], ...normalizeParams(params) }));
}
// @__NO_SIDE_EFFECTS__
function _coercedNumber(Class, params) {
    return new Class(snapshotChecks({ type: "number", coerce: true, checks: [], ...util.normalizeParams(params) }));
}
// @__NO_SIDE_EFFECTS__
function _int(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "safeint",
        ...normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _float32(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "float32",
        ...util.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _float64(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "float64",
        ...util.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _int32(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "int32",
        ...util.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _uint32(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "uint32",
        ...util.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _boolean(Class, params) {
    return new Class({
        type: "boolean",
        ...normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _coercedBoolean(Class, params) {
    return new Class({
        type: "boolean",
        coerce: true,
        ...util.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _bigint(Class, params) {
    return new Class({
        type: "bigint",
        ...util.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _coercedBigint(Class, params) {
    return new Class({
        type: "bigint",
        coerce: true,
        ...util.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _int64(Class, params) {
    return new Class({
        type: "bigint",
        check: "bigint_format",
        abort: false,
        format: "int64",
        ...util.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _uint64(Class, params) {
    return new Class({
        type: "bigint",
        check: "bigint_format",
        abort: false,
        format: "uint64",
        ...util.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _symbol(Class, params) {
    return new Class({
        type: "symbol",
        ...util.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function api_undefined(Class, params) {
    return new Class({
        type: "undefined",
        ...util.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function api_null(Class, params) {
    return new Class({
        type: "null",
        ...util.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _any(Class) {
    return new Class({
        type: "any",
    });
}
// @__NO_SIDE_EFFECTS__
function _unknown(Class) {
    return new Class({
        type: "unknown",
    });
}
// @__NO_SIDE_EFFECTS__
function _never(Class, params) {
    return new Class({
        type: "never",
        ...normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _void(Class, params) {
    return new Class({
        type: "void",
        ...util.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _date(Class, params) {
    return new Class({
        type: "date",
        ...util.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _coercedDate(Class, params) {
    return new Class({
        type: "date",
        coerce: true,
        ...util.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _nan(Class, params) {
    return new Class({
        type: "nan",
        ...util.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _lt(value, params) {
    return new $ZodCheckLessThan({
        check: "less_than",
        ...normalizeParams(params),
        value,
        inclusive: false,
    });
}
// @__NO_SIDE_EFFECTS__
function _lte(value, params) {
    return new $ZodCheckLessThan({
        check: "less_than",
        ...normalizeParams(params),
        value,
        inclusive: true,
    });
}

// @__NO_SIDE_EFFECTS__
function _gt(value, params) {
    return new $ZodCheckGreaterThan({
        check: "greater_than",
        ...normalizeParams(params),
        value,
        inclusive: false,
    });
}
// @__NO_SIDE_EFFECTS__
function _gte(value, params) {
    return new $ZodCheckGreaterThan({
        check: "greater_than",
        ...normalizeParams(params),
        value,
        inclusive: true,
    });
}

// @__NO_SIDE_EFFECTS__
function _positive(params) {
    return _gt(0, params);
}
// negative
// @__NO_SIDE_EFFECTS__
function _negative(params) {
    return _lt(0, params);
}
// nonpositive
// @__NO_SIDE_EFFECTS__
function _nonpositive(params) {
    return _lte(0, params);
}
// nonnegative
// @__NO_SIDE_EFFECTS__
function _nonnegative(params) {
    return _gte(0, params);
}
// @__NO_SIDE_EFFECTS__
function _multipleOf(value, params) {
    return new $ZodCheckMultipleOf({
        check: "multiple_of",
        ...normalizeParams(params),
        value,
    });
}
// @__NO_SIDE_EFFECTS__
function _maxSize(maximum, params) {
    return new checks.$ZodCheckMaxSize({
        check: "max_size",
        ...util.normalizeParams(params),
        maximum,
    });
}
// @__NO_SIDE_EFFECTS__
function _minSize(minimum, params) {
    return new checks.$ZodCheckMinSize({
        check: "min_size",
        ...util.normalizeParams(params),
        minimum,
    });
}
// @__NO_SIDE_EFFECTS__
function _size(size, params) {
    return new checks.$ZodCheckSizeEquals({
        check: "size_equals",
        ...util.normalizeParams(params),
        size,
    });
}
// @__NO_SIDE_EFFECTS__
function _maxLength(maximum, params) {
    const ch = new $ZodCheckMaxLength({
        check: "max_length",
        ...normalizeParams(params),
        maximum,
    });
    return ch;
}
// @__NO_SIDE_EFFECTS__
function _minLength(minimum, params) {
    return new $ZodCheckMinLength({
        check: "min_length",
        ...normalizeParams(params),
        minimum,
    });
}
// @__NO_SIDE_EFFECTS__
function _length(length, params) {
    return new $ZodCheckLengthEquals({
        check: "length_equals",
        ...normalizeParams(params),
        length,
    });
}
// @__NO_SIDE_EFFECTS__
function _regex(pattern, params) {
    return new $ZodCheckRegex({
        check: "string_format",
        format: "regex",
        ...normalizeParams(params),
        pattern,
    });
}
// @__NO_SIDE_EFFECTS__
function _lowercase(params) {
    return new $ZodCheckLowerCase({
        check: "string_format",
        format: "lowercase",
        ...normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _uppercase(params) {
    return new $ZodCheckUpperCase({
        check: "string_format",
        format: "uppercase",
        ...normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _includes(includes, params) {
    return new $ZodCheckIncludes({
        check: "string_format",
        format: "includes",
        ...normalizeParams(params),
        includes,
    });
}
// @__NO_SIDE_EFFECTS__
function _startsWith(prefix, params) {
    return new $ZodCheckStartsWith({
        check: "string_format",
        format: "starts_with",
        ...normalizeParams(params),
        prefix,
    });
}
// @__NO_SIDE_EFFECTS__
function _endsWith(suffix, params) {
    return new $ZodCheckEndsWith({
        check: "string_format",
        format: "ends_with",
        ...normalizeParams(params),
        suffix,
    });
}
// @__NO_SIDE_EFFECTS__
function _property(property, schema, params) {
    return new checks.$ZodCheckProperty({
        check: "property",
        property,
        schema,
        ...util.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _properties(shape, params) {
    return new $ZodCheckProperties({
        check: "properties",
        shape,
        ...normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _mime(types, params) {
    return new checks.$ZodCheckMimeType({
        check: "mime_type",
        mime: types,
        ...util.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _overwrite(tx) {
    return new $ZodCheckOverwrite({
        check: "overwrite",
        tx,
    });
}
// normalize
// @__NO_SIDE_EFFECTS__
function _normalize(form) {
    return _overwrite((input) => input.normalize(form));
}
// trim
// @__NO_SIDE_EFFECTS__
function _trim() {
    return _overwrite((input) => input.trim());
}
// toLowerCase
// @__NO_SIDE_EFFECTS__
function _toLowerCase() {
    return _overwrite((input) => input.toLowerCase());
}
// toUpperCase
// @__NO_SIDE_EFFECTS__
function _toUpperCase() {
    return _overwrite((input) => input.toUpperCase());
}
// slugify
// @__NO_SIDE_EFFECTS__
function _slugify() {
    return _overwrite((input) => slugify(input));
}
// @__NO_SIDE_EFFECTS__
function _array(Class, element, params) {
    return new Class({
        type: "array",
        element,
        // get element() {
        //   return element;
        // },
        ...normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _union(Class, options, params) {
    return new Class({
        type: "union",
        options,
        ...util.normalizeParams(params),
    });
}
function _xor(Class, options, params) {
    return new Class({
        type: "union",
        options,
        inclusive: false,
        ...util.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _discriminatedUnion(Class, discriminator, options, params) {
    return new Class({
        type: "union",
        options: options,
        discriminator,
        ...util.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _intersection(Class, left, right) {
    return new Class({
        type: "intersection",
        left,
        right,
    });
}
// export function _tuple(
//   Class: util.SchemaClass<schemas.$ZodTuple>,
//   items: [],
//   params?: string | $ZodTupleParams
// ): schemas.$ZodTuple<[], null>;
// @__NO_SIDE_EFFECTS__
function _tuple(Class, items, _paramsOrRest, _params) {
    const hasRest = _paramsOrRest instanceof schemas.$ZodType;
    const params = hasRest ? _params : _paramsOrRest;
    const rest = hasRest ? _paramsOrRest : null;
    return new Class({
        type: "tuple",
        items,
        rest,
        ...util.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _record(Class, keyType, valueType, params) {
    return new Class({
        type: "record",
        keyType,
        valueType,
        ...util.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _map(Class, keyType, valueType, params) {
    return new Class({
        type: "map",
        keyType,
        valueType,
        ...util.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _set(Class, valueType, params) {
    return new Class({
        type: "set",
        valueType,
        ...util.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _enum(Class, values, params) {
    const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
    // if (Array.isArray(values)) {
    //   for (const value of values) {
    //     entries[value] = value;
    //   }
    // } else {
    //   Object.assign(entries, values);
    // }
    // const entries: util.EnumLike = {};
    // for (const val of values) {
    //   entries[val] = val;
    // }
    return new Class({
        type: "enum",
        entries,
        ...util.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
/** @deprecated This API has been merged into `z.enum()`. Use `z.enum()` instead.
 *
 * ```ts
 * enum Colors { red, green, blue }
 * z.enum(Colors);
 * ```
 */
function _nativeEnum(Class, entries, params) {
    return new Class({
        type: "enum",
        entries,
        ...util.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _literal(Class, value, params) {
    return new Class({
        type: "literal",
        values: Array.isArray(value) ? value : [value],
        ...util.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _file(Class, params) {
    return new Class({
        type: "file",
        ...util.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _transform(Class, fn) {
    return new Class({
        type: "transform",
        transform: fn,
    });
}
// @__NO_SIDE_EFFECTS__
function _optional(Class, innerType) {
    return new Class({
        type: "optional",
        innerType,
    });
}
// @__NO_SIDE_EFFECTS__
function _nullable(Class, innerType) {
    return new Class({
        type: "nullable",
        innerType,
    });
}
// @__NO_SIDE_EFFECTS__
function _default(Class, innerType, defaultValue) {
    return new Class({
        type: "default",
        innerType,
        get defaultValue() {
            return typeof defaultValue === "function" ? defaultValue() : util.shallowClone(defaultValue);
        },
    });
}
// @__NO_SIDE_EFFECTS__
function _nonoptional(Class, innerType, params) {
    return new Class({
        type: "nonoptional",
        innerType,
        ...util.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _success(Class, innerType) {
    return new Class({
        type: "success",
        innerType,
    });
}
// @__NO_SIDE_EFFECTS__
function _catch(Class, innerType, catchValue) {
    return new Class({
        type: "catch",
        innerType,
        catchValue: (typeof catchValue === "function" ? catchValue : util.constantCatch(catchValue)),
    });
}
// @__NO_SIDE_EFFECTS__
function _pipe(Class, in_, out) {
    return new Class({
        type: "pipe",
        in: in_,
        out,
    });
}
// @__NO_SIDE_EFFECTS__
function _readonly(Class, innerType) {
    return new Class({
        type: "readonly",
        innerType,
    });
}
// @__NO_SIDE_EFFECTS__
function _templateLiteral(Class, parts, params) {
    return new Class({
        type: "template_literal",
        parts,
        ...util.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _lazy(Class, getter) {
    return new Class({
        type: "lazy",
        getter,
    });
}
// @__NO_SIDE_EFFECTS__
function _promise(Class, innerType) {
    return new Class({
        type: "promise",
        innerType,
    });
}
// @__NO_SIDE_EFFECTS__
function _custom(Class, fn, _params) {
    const norm = util.normalizeParams(_params);
    norm.abort ?? (norm.abort = true); // default to abort:false
    const schema = new Class({
        type: "custom",
        check: "custom",
        fn: fn,
        ...norm,
    });
    return schema;
}
// same as _custom but defaults to abort:false
// @__NO_SIDE_EFFECTS__
function _refine(Class, fn, _params) {
    const schema = new Class({
        type: "custom",
        check: "custom",
        fn: fn,
        ...normalizeParams(_params),
    });
    return schema;
}
// @__NO_SIDE_EFFECTS__
function _superRefine(fn, params) {
    const ch = _check((payload) => {
        payload.addIssue = (issue) => {
            if (typeof issue === "string") {
                payload.issues.push(util_issue(issue, payload.value, ch._zod.def));
            }
            else {
                // for Zod 3 backwards compatibility
                const _issue = issue;
                if (_issue.fatal)
                    _issue.continue = false;
                _issue.code ?? (_issue.code = "custom");
                if (!("input" in _issue))
                    _issue.input = payload.value;
                _issue.inst ?? (_issue.inst = ch);
                _issue.continue ?? (_issue.continue = !ch._zod.def.abort); // abort is always undefined, so this is always true...
                payload.issues.push(util_issue(_issue));
            }
        };
        return fn(payload.value, payload);
    }, params);
    return ch;
}
// @__NO_SIDE_EFFECTS__
function _check(fn, params) {
    const ch = new $ZodCheck({
        check: "custom",
        ...normalizeParams(params),
    });
    ch._zod.check = fn;
    return ch;
}
// @__NO_SIDE_EFFECTS__
function describe(description) {
    const ch = new $ZodCheck({ check: "describe" });
    ch._zod.onattach = [
        (inst) => {
            const existing = globalRegistry.get(inst) ?? {};
            globalRegistry.add(inst, { ...existing, description });
        },
    ];
    ch._zod.check = () => { }; // no-op check
    return ch;
}
// @__NO_SIDE_EFFECTS__
function meta(metadata) {
    const ch = new $ZodCheck({ check: "meta" });
    ch._zod.onattach = [
        (inst) => {
            const existing = globalRegistry.get(inst) ?? {};
            globalRegistry.add(inst, { ...existing, ...metadata });
        },
    ];
    ch._zod.check = () => { }; // no-op check
    return ch;
}
// @__NO_SIDE_EFFECTS__
function _stringbool(Classes, _params) {
    const params = util.normalizeParams(_params);
    let truthyArray = params.truthy ?? ["true", "1", "yes", "on", "y", "enabled"];
    let falsyArray = params.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
    if (params.case !== "sensitive") {
        truthyArray = truthyArray.map((v) => (typeof v === "string" ? v.toLowerCase() : v));
        falsyArray = falsyArray.map((v) => (typeof v === "string" ? v.toLowerCase() : v));
    }
    const truthySet = new Set(truthyArray);
    const falsySet = new Set(falsyArray);
    const _Codec = Classes.Codec ?? schemas.$ZodCodec;
    const _Boolean = Classes.Boolean ?? schemas.$ZodBoolean;
    const _String = Classes.String ?? schemas.$ZodString;
    const stringSchema = new _String({ type: "string", error: params.error });
    const booleanSchema = new _Boolean({ type: "boolean", error: params.error });
    const codec = new _Codec({
        type: "pipe",
        in: stringSchema,
        out: booleanSchema,
        transform: ((input, payload) => {
            let data = input;
            if (params.case !== "sensitive")
                data = data.toLowerCase();
            if (truthySet.has(data)) {
                return true;
            }
            else if (falsySet.has(data)) {
                return false;
            }
            else {
                payload.issues.push({
                    code: "invalid_value",
                    expected: "stringbool",
                    values: [...truthySet, ...falsySet],
                    input: payload.value,
                    inst: codec,
                    continue: false,
                });
                return {};
            }
        }),
        reverseTransform: ((input, _payload) => {
            if (input === true) {
                return truthyArray[0] || "true";
            }
            else {
                return falsyArray[0] || "false";
            }
        }),
        error: params.error,
    });
    codec._zod.bag.truthy = truthyArray;
    codec._zod.bag.falsy = falsyArray;
    codec._zod.bag.case = params.case ?? "insensitive";
    return codec;
}
// @__NO_SIDE_EFFECTS__
function _stringFormat(Class, format, fnOrRegex, _params = {}) {
    const params = util.normalizeParams(_params);
    const def = {
        check: "string_format",
        type: "string",
        format,
        fn: typeof fnOrRegex === "function" ? fnOrRegex : (val) => fnOrRegex.test(val),
        ...params,
    };
    if (fnOrRegex instanceof RegExp) {
        def.pattern = fnOrRegex;
    }
    const inst = new Class(def);
    return inst;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/core/to-json-schema.js


function assignProps(target, ...sources) {
    for (const source of sources) {
        for (const key of Reflect.ownKeys(source)) {
            if (Object.prototype.propertyIsEnumerable.call(source, key)) {
                util_assignProp(target, key, source[key]);
            }
        }
    }
    return target;
}
// function initializeContext<T extends schemas.$ZodType>(inputs: JSONSchemaGeneratorParams<T>): ToJSONSchemaContext<T> {
//   return {
//     processor: inputs.processor,
//     metadataRegistry: inputs.metadata ?? globalRegistry,
//     target: inputs.target ?? "draft-2020-12",
//     unrepresentable: inputs.unrepresentable ?? "throw",
//   };
// }
function to_json_schema_initializeContext(params) {
    // Normalize target: convert old non-hyphenated versions to hyphenated versions
    let target = params?.target ?? "draft-2020-12";
    if (target === "draft-4")
        target = "draft-04";
    if (target === "draft-7")
        target = "draft-07";
    return {
        processors: params.processors ?? {},
        metadataRegistry: params?.metadata ?? globalRegistry,
        target,
        unrepresentable: params?.unrepresentable ?? "throw",
        override: params?.override ?? (() => { }),
        io: params?.io ?? "output",
        counter: 0,
        seen: new Map(),
        sharedDefsExtractedFor: undefined,
        sharedEmitDoneFor: undefined,
        cycles: params?.cycles ?? "ref",
        reused: params?.reused ?? "inline",
        intersections: [],
        deferred: [],
        external: params?.external ?? undefined,
    };
}
/**
 * Applies the `unrepresentable` setting at a site that has no JSON Schema equivalent. Throws
 * `message` unless the setting (or the handler's return value) says otherwise. Returns `true` if a
 * custom JSON Schema was written into `json`, in which case the caller must not write its own.
 */
function handleUnrepresentable(schema, ctx, json, params, message) {
    const result = typeof ctx.unrepresentable === "function"
        ? ctx.unrepresentable({ zodSchema: schema, path: params.path, message })
        : ctx.unrepresentable;
    if (result === "any")
        return false;
    if (result === undefined || result === "throw")
        throw new Error(message);
    Object.assign(json, result);
    return true;
}
// never rename this back to `process`: bundler polyfills inject a top-level `const process` that a lexical declaration of the same name collides with (#6397)
function to_json_schema_processSchema(schema, ctx, _params = { path: [], schemaPath: [] }) {
    var _a;
    const def = schema._zod.def;
    // check for schema in seens
    const seen = ctx.seen.get(schema);
    if (seen) {
        seen.count++;
        // check if cycle
        const isCycle = _params.schemaPath.includes(schema);
        if (isCycle) {
            seen.cycle = _params.path;
        }
        return seen.schema;
    }
    // initialize
    const result = { schema: {}, count: 1, cycle: undefined, path: _params.path };
    ctx.seen.set(schema, result);
    ctx.sharedDefsExtractedFor = undefined;
    ctx.sharedEmitDoneFor = undefined;
    // custom method overrides default behavior
    const overrideSchema = schema._zod.toJSONSchema?.();
    if (overrideSchema) {
        result.schema = overrideSchema;
    }
    else {
        const params = {
            ..._params,
            schemaPath: [..._params.schemaPath, schema],
            path: _params.path,
        };
        if (schema._zod.processJSONSchema) {
            schema._zod.processJSONSchema(ctx, result.schema, params);
        }
        else {
            const _json = result.schema;
            const processor = ctx.processors[def.type];
            if (!processor) {
                throw new Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
            }
            processor(schema, ctx, _json, params);
        }
        const parent = schema._zod.parent;
        if (parent) {
            // Also set ref if processor didn't (for inheritance)
            if (!result.ref)
                result.ref = parent;
            to_json_schema_processSchema(parent, ctx, params);
            ctx.seen.get(parent).isParent = true;
        }
    }
    // metadata
    const meta = ctx.metadataRegistry.get(schema);
    if (meta)
        assignProps(result.schema, meta);
    if (ctx.io === "input" && isTransforming(schema)) {
        // examples/defaults only apply to output type of pipe
        delete result.schema.examples;
        delete result.schema.default;
    }
    // set prefault as default
    if (ctx.io === "input" && "_prefault" in result.schema)
        (_a = result.schema).default ?? (_a.default = result.schema._prefault);
    delete result.schema._prefault;
    // pulling fresh from ctx.seen in case it was overwritten
    const _result = ctx.seen.get(schema);
    return _result.schema;
}
/** @deprecated Renamed to `processSchema`. An export alias declares no binding, so it is safe to keep. */

// Escape a reference token for use in a JSON Pointer fragment (RFC 6901): `~` becomes `~0` and `/` becomes `~1`. The `~` replacement must run first.
function encodeJSONPointerSegment(segment) {
    return segment.replace(/~/g, "~0").replace(/\//g, "~1");
}
function to_json_schema_extractDefs(ctx, schema
// params: EmitParams
) {
    // iterate over seen map;
    const root = ctx.seen.get(schema);
    if (!root)
        throw new Error("Unprocessed schema. This is a bug in Zod.");
    // With `external` set, every registered schema resolves through the external branch of `makeURI`, so the root branch below produces the same ref the external branch would — this pass is identical whichever schema it is called with, and only needs to run once.
    if (ctx.external && ctx.sharedDefsExtractedFor === ctx.external)
        return;
    // Track ids to detect duplicates across different schemas
    const idToSchema = new Map();
    for (const entry of ctx.seen.entries()) {
        const id = ctx.metadataRegistry.get(entry[0])?.id;
        if (id) {
            const existing = idToSchema.get(id);
            if (existing && existing !== entry[0]) {
                throw new Error(`Duplicate schema id "${id}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
            }
            idToSchema.set(id, entry[0]);
        }
    }
    // returns a ref to the schema defId will be empty if the ref points to an external schema (or #)
    const makeURI = (entry) => {
        // comparing the seen objects because sometimes multiple schemas map to the same seen object. e.g. lazy
        // external is configured
        const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
        if (ctx.external) {
            const externalId = ctx.external.registry.get(entry[0])?.id; // ?? "__shared";// `__schema${ctx.counter++}`;
            // check if schema is in the external registry
            const uriGenerator = ctx.external.uri ?? ((id) => id);
            if (externalId) {
                return { ref: uriGenerator(externalId) };
            }
            // otherwise, add to __shared
            const id = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
            entry[1].defId = id; // set defId so it will be reused if needed
            return { defId: id, ref: `${uriGenerator("__shared")}#/${defsSegment}/${encodeJSONPointerSegment(id)}` };
        }
        const uriPrefix = `#`;
        const defUriPrefix = `${uriPrefix}/${defsSegment}/`;
        // an id-less root has nowhere to be extracted to, so it stays inline and self-references as `#`
        if (entry[1] === root && !entry[1].schema.id) {
            return { ref: uriPrefix };
        }
        // self-contained schema
        const defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
        return { defId, ref: defUriPrefix + encodeJSONPointerSegment(defId) };
    };
    // stored cached version in `def` property remove all properties, set $ref
    const extractToDef = (entry) => {
        // if the schema is already a reference, do not extract it
        if (entry[1].schema.$ref) {
            return;
        }
        const seen = entry[1];
        const { ref, defId } = makeURI(entry);
        seen.def = { ...seen.schema };
        // defId won't be set if the schema is a reference to an external schema or if the schema is the root schema
        if (defId)
            seen.defId = defId;
        // wipe away all properties except $ref
        const schema = seen.schema;
        for (const key in schema) {
            delete schema[key];
        }
        schema.$ref = ref;
    };
    // throw on cycles
    // break cycles
    if (ctx.cycles === "throw") {
        for (const entry of ctx.seen.entries()) {
            const seen = entry[1];
            if (seen.cycle) {
                throw new Error("Cycle detected: " +
                    `#/${seen.cycle?.join("/")}/<root>` +
                    '\n\nSet the `cycles` parameter to `"ref"` to resolve cyclical schemas with defs.');
            }
        }
    }
    // extract schemas into $defs
    for (const entry of ctx.seen.entries()) {
        const seen = entry[1];
        // convert root schema to # $ref
        if (schema === entry[0]) {
            extractToDef(entry); // this has special handling for the root schema
            continue;
        }
        // extract schemas that are in the external registry
        if (ctx.external) {
            const ext = ctx.external.registry.get(entry[0])?.id;
            if (schema !== entry[0] && ext) {
                extractToDef(entry);
                continue;
            }
        }
        // extract schemas with `id` meta
        const id = ctx.metadataRegistry.get(entry[0])?.id;
        if (id) {
            extractToDef(entry);
            continue;
        }
        // break cycles
        if (seen.cycle) {
            // any
            extractToDef(entry);
            continue;
        }
        // extract reused schemas
        if (seen.count > 1) {
            if (ctx.reused === "ref") {
                extractToDef(entry);
            }
        }
    }
    if (ctx.external)
        ctx.sharedDefsExtractedFor = ctx.external;
}
/** Rewrites `anyOf: [{type: "a"}, {type: "b"}]` to `type: ["a", "b"]`, which every JSON Schema draft treats as equivalent and most consumers render far better for the nullable case. Only branches that are a bare type assertion qualify — anything carrying a constraint, `$ref`, `const` or metadata is left alone. Runs after `flattenRef`, so a branch an override decorated or `$defs` extraction turned into a `$ref` is no longer bare and correctly stays in `anyOf`. `oneOf` is excluded: `integer` and `number` overlap, so "exactly one" and "at least one" are not the same there. OpenAPI 3.0 is excluded: its `type` must be a single string. */
function compactTypeUnion(schema) {
    const options = schema.anyOf;
    if (!Array.isArray(options) || options.length === 0 || schema.type !== undefined)
        return;
    const types = [];
    for (const option of options) {
        if (!option || typeof option !== "object")
            return;
        // A branch that is itself a compactible union folds into this one — nested `anyOf` and a flat `type` array say the same thing. Compacting it first also makes the result independent of the order this pass walks the seen map in.
        compactTypeUnion(option);
        const keys = Object.keys(option);
        if (keys.length !== 1 || keys[0] !== "type")
            return;
        const type = option.type;
        for (const member of Array.isArray(type) ? type : [type]) {
            if (typeof member !== "string")
                return;
            if (!types.includes(member))
                types.push(member);
        }
    }
    delete schema.anyOf;
    // A `type` array must be non-empty and unique (metaschema); a single member is spelled as a bare string.
    schema.type = types.length === 1 ? types[0] : types;
}
/** Keywords `foldIntersection` knows how to combine. Anything else — `$ref`, `patternProperties`,
 * an annotation like `description` — makes a member unfoldable, so a constraint this does not
 * understand leaves the `allOf` alone instead of being silently dropped or misattributed. */
const FOLDABLE_KEYS = new Set(["type", "properties", "required", "additionalProperties"]);
const UNION_KEYS = ["oneOf", "anyOf"];
/** A member's constraint on a key it does not declare itself. A `catchall` states one; `false`, an absent `additionalProperties`, and the empty schema a loose object emits state nothing. */
function undeclaredConstraint(member) {
    const extra = member.additionalProperties;
    if (extra === undefined || extra === false || typeof extra !== "object" || extra === null)
        return null;
    return Object.keys(extra).length ? extra : null;
}
/** Combines object members into the single object they describe together, or returns `null` if any of them carries a keyword outside {@link FOLDABLE_KEYS}. */
function foldObjects(members) {
    const objects = [];
    for (const member of members) {
        // A boolean subschema is legal JSON Schema and carries no keywords to fold.
        if (typeof member !== "object" || member.type !== "object")
            return null;
        for (const key in member) {
            if (!FOLDABLE_KEYS.has(key))
                return null;
        }
        objects.push(member);
    }
    const properties = {};
    const required = new Set();
    for (const object of objects) {
        for (const key in object.properties) {
            // `in` would report a `__proto__` key as already present via the prototype chain and skip it.
            if (Object.prototype.hasOwnProperty.call(properties, key))
                continue;
            // Every member constrains this key: the ones that declare it say how, and a `catchall` member constrains it too even though it does not name it. The key has to satisfy all of them, which is the same intersection one level down.
            const parts = [];
            for (const other of objects) {
                const part = other.properties?.[key] ?? undeclaredConstraint(other);
                if (part === null || part === undefined)
                    continue;
                if (!parts.some((seen) => JSON.stringify(seen) === JSON.stringify(part)))
                    parts.push(part);
            }
            const merged = parts.length === 1
                ? parts[0]
                : (foldObjects(parts) ?? { allOf: parts });
            util_assignProp(properties, key, merged);
        }
        for (const key of object.required ?? [])
            required.add(key);
    }
    const folded = { type: "object", properties };
    if (required.size)
        folded.required = [...required];
    // A key no member declares is rejected only when every member rejects it, so the fold is closed only when every member is. Otherwise it carries whatever the `catchall` members demand of such a key.
    if (objects.every((object) => object.additionalProperties === false)) {
        folded.additionalProperties = false;
    }
    else {
        const constraints = [];
        for (const object of objects) {
            const constraint = undeclaredConstraint(object);
            if (constraint && !constraints.some((seen) => JSON.stringify(seen) === JSON.stringify(constraint)))
                constraints.push(constraint);
        }
        if (constraints.length === 1)
            folded.additionalProperties = constraints[0];
        else if (constraints.length > 1)
            folded.additionalProperties = { allOf: constraints };
    }
    return folded;
}
/** `additionalProperties` in an `allOf` member sees only that member's own `properties`, so two
 * closed object members reject each other's keys and the schema validates nothing. Zod's parser
 * pools the key sets instead — `handleIntersectionResults` reports a key as unrecognized only when
 * *every* side rejects it — so the emitted schema has to pool them too, and folding the members
 * into one object is the encoding that says so on every target.
 *
 * This runs from `finalize`, after `extractDefs`, which is what keeps it clear of the `$ref`
 * machinery: a member extracted into `$defs` is already a `$ref` by now and declines to fold, so it
 * keeps its reference and its own closedness rather than being inlined as a stale copy. */
function foldIntersection(json) {
    const allOf = json.allOf;
    if (!Array.isArray(allOf) || allOf.length < 2)
        return;
    // An `override` runs before this pass and may have written object keywords onto the intersection itself. Those are deliberate, so decline rather than overwrite them.
    for (const key of FOLDABLE_KEYS)
        if (key in json)
            return;
    // An intersection distributes over a union: `A & (X | Y)` is `(A & X) | (A & Y)`. Only the first union is distributed over; a second one stays among the members every branch folds against, where it fails the object check and declines the whole intersection rather than multiplying out.
    const unions = allOf.filter((m) => UNION_KEYS.some((k) => Array.isArray(m[k])));
    let folded = null;
    if (!unions.length) {
        folded = foldObjects(allOf);
    }
    else {
        const union = unions[0];
        const keyword = UNION_KEYS.find((k) => Array.isArray(union[k]));
        if (Object.keys(union).length !== 1)
            return;
        const rest = allOf.filter((m) => m !== union);
        const branches = union[keyword].map((branch) => foldObjects([...rest, branch]));
        if (branches.some((b) => !b))
            return;
        folded = { [keyword]: branches };
    }
    if (!folded)
        return;
    delete json.allOf;
    assignProps(json, folded);
}
function to_json_schema_finalize(ctx, schema) {
    const root = ctx.seen.get(schema);
    if (!root)
        throw new Error("Unprocessed schema. This is a bug in Zod.");
    // flatten refs - inherit properties from parent schemas
    const flattenRef = (zodSchema) => {
        const seen = ctx.seen.get(zodSchema);
        // already processed
        if (seen.ref === null)
            return;
        const schema = seen.def ?? seen.schema;
        const _cached = { ...schema };
        const ref = seen.ref;
        seen.ref = null; // prevent infinite recursion
        if (ref) {
            flattenRef(ref);
            const refSeen = ctx.seen.get(ref);
            const refSchema = refSeen.schema;
            // merge referenced schema into current
            if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0")) {
                // older drafts can't combine $ref with other properties
                schema.allOf = schema.allOf ?? [];
                schema.allOf.push(refSchema);
            }
            else {
                assignProps(schema, refSchema);
            }
            // restore child's own properties (child wins)
            assignProps(schema, _cached);
            const isParentRef = zodSchema._zod.parent === ref;
            // For parent chain, child is a refinement - remove parent-only properties
            if (isParentRef) {
                for (const key in schema) {
                    if (key === "$ref" || key === "allOf")
                        continue;
                    if (!(key in _cached)) {
                        delete schema[key];
                    }
                }
            }
            // When ref was extracted to $defs, remove properties that match the definition
            if (refSchema.$ref && refSeen.def) {
                for (const key in schema) {
                    if (key === "$ref" || key === "allOf")
                        continue;
                    if (key in refSeen.def && JSON.stringify(schema[key]) === JSON.stringify(refSeen.def[key])) {
                        delete schema[key];
                    }
                }
            }
        }
        // If parent was extracted (has $ref), propagate $ref to this schema. This handles cases like: readonly().meta({id}).describe() where processor sets ref to innerType but parent should be referenced
        const parent = zodSchema._zod.parent;
        if (parent && parent !== ref) {
            // Ensure parent is processed first so its def has inherited properties
            flattenRef(parent);
            const parentSeen = ctx.seen.get(parent);
            if (parentSeen?.schema.$ref) {
                schema.$ref = parentSeen.schema.$ref;
                // De-duplicate with parent's definition
                if (parentSeen.def) {
                    for (const key in schema) {
                        if (key === "$ref" || key === "allOf")
                            continue;
                        if (key in parentSeen.def && JSON.stringify(schema[key]) === JSON.stringify(parentSeen.def[key])) {
                            delete schema[key];
                        }
                    }
                }
            }
        }
        // execute overrides
        ctx.override({
            zodSchema: zodSchema,
            jsonSchema: schema,
            path: seen.path ?? [],
        });
    };
    // Flattening walks the whole map and clears each `ref` as it goes, so a second call over the same map is a no-op scan. Skip it outright once it has run for a registry conversion.
    if (!ctx.external || ctx.sharedEmitDoneFor !== ctx.external) {
        for (const entry of [...ctx.seen.entries()].reverse()) {
            flattenRef(entry[0]);
        }
        if (ctx.target !== "openapi-3.0") {
            for (const entry of ctx.seen.entries()) {
                compactTypeUnion(entry[1].def ?? entry[1].schema);
            }
        }
        for (const rewrite of ctx.deferred)
            rewrite();
        // After flattening, every member that was extracted is a `$ref`, so the fold sees the final shape. A schema that inherits an intersection — through `z.lazy`, or any `ref` chain — holds the same `allOf` array, so fold by array identity to catch every copy.
        if (ctx.intersections.length) {
            const carriers = new Map();
            for (const seen of ctx.seen.values()) {
                for (const json of [seen.schema, seen.def]) {
                    const allOf = json?.allOf;
                    if (!Array.isArray(allOf))
                        continue;
                    const existing = carriers.get(allOf);
                    if (existing)
                        existing.push(json);
                    else
                        carriers.set(allOf, [json]);
                }
            }
            for (const allOf of ctx.intersections) {
                for (const json of carriers.get(allOf) ?? [])
                    foldIntersection(json);
            }
        }
    }
    const result = {};
    if (ctx.target === "draft-2020-12") {
        result.$schema = "https://json-schema.org/draft/2020-12/schema";
    }
    else if (ctx.target === "draft-07") {
        result.$schema = "http://json-schema.org/draft-07/schema#";
    }
    else if (ctx.target === "draft-04") {
        result.$schema = "http://json-schema.org/draft-04/schema#";
    }
    else if (ctx.target === "openapi-3.0") {
        // OpenAPI 3.0 schema objects should not include a $schema property
    }
    else {
        // Arbitrary string values are allowed but won't have a $schema property set
    }
    if (ctx.external?.uri) {
        const id = ctx.external.registry.get(schema)?.id;
        if (!id)
            throw new Error("Schema is missing an `id` property");
        result.$id = ctx.external.uri(id);
    }
    // when the root was extracted into $defs, `root.schema` is the `$ref` wrapper and `root.def` is the body that now lives under $defs
    assignProps(result, root.defId ? root.schema : (root.def ?? root.schema));
    // The `id` in `.meta()` is a Zod-specific registration tag used to extract schemas into $defs — it is not user-facing JSON Schema metadata. Strip it from the output body where it would otherwise leak. The id is preserved implicitly via the $defs key (and via $ref paths).
    const rootMetaId = ctx.metadataRegistry.get(schema)?.id;
    if (rootMetaId !== undefined && result.id === rootMetaId)
        delete result.id;
    // build defs object. With `external`, `defs` is the shared object every schema writes into, so the same entries are reassigned on every call. Without it, `defs` is fresh per call and must be rebuilt.
    const defs = ctx.external?.defs ?? {};
    if (!ctx.external || ctx.sharedEmitDoneFor !== ctx.external) {
        for (const entry of ctx.seen.entries()) {
            const seen = entry[1];
            if (seen.def && seen.defId) {
                if (seen.def.id === seen.defId)
                    delete seen.def.id;
                util_assignProp(defs, seen.defId, seen.def);
            }
        }
    }
    if (ctx.external)
        ctx.sharedEmitDoneFor = ctx.external;
    // set definitions in result
    if (ctx.external) {
    }
    else {
        if (Object.keys(defs).length > 0) {
            if (ctx.target === "draft-2020-12") {
                result.$defs = defs;
            }
            else {
                result.definitions = defs;
            }
        }
    }
    try {
        // this "finalizes" this schema and ensures all cycles are removed each call to finalize() is functionally independent though the seen map is shared
        const finalized = JSON.parse(JSON.stringify(result));
        Object.defineProperty(finalized, "~standard", {
            value: {
                ...schema["~standard"],
                jsonSchema: {
                    input: createStandardJSONSchemaMethod(schema, "input", ctx.processors),
                    output: createStandardJSONSchemaMethod(schema, "output", ctx.processors),
                },
            },
            enumerable: false,
            writable: false,
        });
        return finalized;
    }
    catch (_err) {
        throw new Error("Error converting schema to JSON.");
    }
}
function isTransforming(_schema, _ctx) {
    const ctx = _ctx ?? { seen: new Set() };
    if (ctx.seen.has(_schema))
        return false;
    ctx.seen.add(_schema);
    const def = _schema._zod.def;
    if (def.type === "transform")
        return true;
    if (def.type === "array")
        return isTransforming(def.element, ctx);
    if (def.type === "set")
        return isTransforming(def.valueType, ctx);
    if (def.type === "lazy")
        return isTransforming(def.getter(), ctx);
    if (def.type === "promise" ||
        def.type === "optional" ||
        def.type === "nonoptional" ||
        def.type === "nullable" ||
        def.type === "readonly" ||
        def.type === "default" ||
        def.type === "prefault" ||
        def.type === "catch") {
        return isTransforming(def.innerType, ctx);
    }
    if (def.type === "intersection") {
        return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
    }
    if (def.type === "record" || def.type === "map") {
        return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
    }
    if (def.type === "pipe") {
        if (_schema._zod.traits.has("$ZodCodec"))
            return true;
        return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
    }
    if (def.type === "object") {
        for (const key in def.shape) {
            if (isTransforming(def.shape[key], ctx))
                return true;
        }
        return false;
    }
    if (def.type === "union") {
        for (const option of def.options) {
            if (isTransforming(option, ctx))
                return true;
        }
        return false;
    }
    if (def.type === "tuple") {
        for (const item of def.items) {
            if (isTransforming(item, ctx))
                return true;
        }
        if (def.rest && isTransforming(def.rest, ctx))
            return true;
        return false;
    }
    return false;
}
/**
 * Creates a toJSONSchema method for a schema instance.
 * This encapsulates the logic of initializing context, processing, extracting defs, and finalizing.
 */
const createToJSONSchemaMethod = (schema, processors = {}) => (params) => {
    const ctx = to_json_schema_initializeContext({ ...params, processors });
    to_json_schema_processSchema(schema, ctx);
    to_json_schema_extractDefs(ctx, schema);
    return to_json_schema_finalize(ctx, schema);
};
const createStandardJSONSchemaMethod = (schema, io, processors = {}) => (params) => {
    const { libraryOptions, target } = params ?? {};
    const ctx = to_json_schema_initializeContext({ ...(libraryOptions ?? {}), target, io, processors });
    to_json_schema_processSchema(schema, ctx);
    to_json_schema_extractDefs(ctx, schema);
    return to_json_schema_finalize(ctx, schema);
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/core/json-schema-processors.js




const narrowMin = (agg, key, value) => {
    if (agg[key] === undefined || value > agg[key])
        agg[key] = value;
};
const narrowMax = (agg, key, value) => {
    if (agg[key] === undefined || value < agg[key])
        agg[key] = value;
};
const narrowBoth = (agg, value) => {
    narrowMin(agg, "minimum", value);
    narrowMax(agg, "maximum", value);
};
const addDivisor = (agg, value) => {
    agg.multipleOf ?? (agg.multipleOf = []);
    if (!agg.multipleOf.includes(value))
        agg.multipleOf.push(value);
};
const addPattern = (agg, pattern) => {
    agg.patterns ?? (agg.patterns = new Set());
    agg.patterns.add(pattern);
};
const intersectMime = (agg, mime) => {
    agg.mime = agg.mime ? agg.mime.filter((m) => mime.includes(m)) : [...mime];
};
// last-wins, matching the bag's historical write order; the flag keeps an integer format from being lost to a later float one
const setFormat = (agg, format) => {
    agg.format = format;
    if (format.includes("int"))
        agg.isInt = true;
};
const minContributor = (agg, def) => narrowMin(agg, "minimum", def.minimum);
const maxContributor = (agg, def) => narrowMax(agg, "maximum", def.maximum);
const formatContributor = (ranges) => (agg, def) => {
    setFormat(agg, def.format);
    const [minimum, maximum] = ranges[def.format];
    narrowMin(agg, "minimum", minimum);
    narrowMax(agg, "maximum", maximum);
};
const contributors = {
    greater_than: (agg, def) => narrowMin(agg, def.inclusive ? "minimum" : "exclusiveMinimum", def.value),
    less_than: (agg, def) => narrowMax(agg, def.inclusive ? "maximum" : "exclusiveMaximum", def.value),
    multiple_of: (agg, def) => addDivisor(agg, def.value),
    number_format: formatContributor(NUMBER_FORMAT_RANGES),
    bigint_format: formatContributor(BIGINT_FORMAT_RANGES),
    min_length: minContributor,
    max_length: maxContributor,
    length_equals: (agg, def) => narrowBoth(agg, def.length),
    min_size: minContributor,
    max_size: maxContributor,
    size_equals: (agg, def) => narrowBoth(agg, def.size),
    string_format: (agg, def) => {
        setFormat(agg, def.format);
        if (def.pattern)
            addPattern(agg, def.pattern);
        if (def.format === "base64" || def.format === "base64url")
            agg.contentEncoding = def.format;
        if (def.local || def.precision === -1)
            agg.laxFormat = true;
    },
    mime_type: (agg, def) => intersectMime(agg, def.mime),
};
function aggregateChecks(schema) {
    const agg = {};
    const def = schema._zod.def;
    // a format schema is its own first check, same rule as $ZodType init
    const list = schema._zod.traits.has("$ZodCheck")
        ? [schema, ...(def.checks ?? [])]
        : (def.checks ?? []);
    for (const ch of list)
        contributors[ch._zod.def.check]?.(agg, ch._zod.def);
    // reconcile with the bag so third-party onattach contributions still land; first-party residue is never tighter than the fold, so merging it back is idempotent for one and additive for the other
    const bag = schema._zod.bag;
    if (bag.minimum !== undefined)
        narrowMin(agg, "minimum", bag.minimum);
    if (bag.exclusiveMinimum !== undefined)
        narrowMin(agg, "exclusiveMinimum", bag.exclusiveMinimum);
    if (bag.maximum !== undefined)
        narrowMax(agg, "maximum", bag.maximum);
    if (bag.exclusiveMaximum !== undefined)
        narrowMax(agg, "exclusiveMaximum", bag.exclusiveMaximum);
    if (bag.multipleOf !== undefined)
        addDivisor(agg, bag.multipleOf);
    if (bag.format !== undefined) {
        agg.format ?? (agg.format = bag.format);
        if (bag.format.includes("int"))
            agg.isInt = true;
    }
    if (bag.mime)
        intersectMime(agg, bag.mime);
    for (const pattern of bag.patterns ?? [])
        addPattern(agg, pattern);
    return agg;
}
const formatMap = {
    guid: "uuid",
    url: "uri",
    datetime: "date-time",
    json_string: "json-string",
    regex: "", // do not set
};
// ==================== SIMPLE TYPE PROCESSORS ====================
// the runtime patterns are lax so parse paths never overflow the regex stack; the emitted schema swaps in the exact block forms, which zod itself never executes
const exactPatterns = new Map([
    [base64Charset, base64],
    [base64urlCharset, base64url],
]);
const exactPattern = (p) => exactPatterns.get(p) ?? p;
const stringProcessor = (schema, ctx, _json, _params) => {
    const json = _json;
    json.type = "string";
    const { minimum, maximum, format, patterns, contentEncoding, laxFormat } = aggregateChecks(schema);
    if (typeof minimum === "number")
        json.minLength = minimum;
    if (typeof maximum === "number")
        json.maxLength = maximum;
    // custom pattern overrides format
    if (format) {
        json.format = formatMap[format] ?? format;
        if (json.format === "")
            delete json.format; // empty format is not valid
        // `z.iso.time()` is never full-time, and `laxFormat` carries the datetime shapes that also accept what their keyword forbids
        if (format === "time" || laxFormat) {
            delete json.format;
        }
    }
    if (contentEncoding)
        json.contentEncoding = contentEncoding;
    if (patterns && patterns.size > 0) {
        const patternList = [...patterns].map(exactPattern);
        if (patternList.length === 1)
            json.pattern = patternList[0].source;
        else if (patternList.length > 1) {
            json.allOf = [
                ...patternList.map((regex) => ({
                    ...(ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0"
                        ? { type: "string" }
                        : {}),
                    pattern: regex.source,
                })),
            ];
        }
    }
};
const numberProcessor = (schema, ctx, _json, params) => {
    const json = _json;
    const { minimum, maximum, multipleOf, exclusiveMaximum, exclusiveMinimum, isInt } = aggregateChecks(schema);
    json.type = isInt ? "integer" : "number";
    // when both minimum and exclusiveMinimum exist, pick the more restrictive one
    const exMin = typeof exclusiveMinimum === "number" && exclusiveMinimum >= (minimum ?? Number.NEGATIVE_INFINITY);
    const exMax = typeof exclusiveMaximum === "number" && exclusiveMaximum <= (maximum ?? Number.POSITIVE_INFINITY);
    const legacy = ctx.target === "draft-04" || ctx.target === "openapi-3.0";
    if (exMin) {
        if (legacy) {
            json.minimum = exclusiveMinimum;
            json.exclusiveMinimum = true;
        }
        else {
            json.exclusiveMinimum = exclusiveMinimum;
        }
    }
    else if (typeof minimum === "number") {
        json.minimum = minimum;
    }
    if (exMax) {
        if (legacy) {
            json.maximum = exclusiveMaximum;
            json.exclusiveMaximum = true;
        }
        else {
            json.exclusiveMaximum = exclusiveMaximum;
        }
    }
    else if (typeof maximum === "number") {
        json.maximum = maximum;
    }
    if (multipleOf) {
        // JSON Schema requires a divisor strictly greater than zero, and a non-finite one does not survive JSON at all. A negative divisor accepts exactly what its absolute value accepts, so it still maps; zero, NaN and Infinity have no keyword form.
        const divisors = new Set();
        for (const divisor of multipleOf) {
            if (Number.isFinite(divisor) && divisor !== 0)
                divisors.add(Math.abs(divisor));
            else
                handleUnrepresentable(schema, ctx, json, params, `A multipleOf divisor of ${divisor} cannot be represented in JSON Schema`);
        }
        // chained divisors are a conjunction the keyword cannot carry alone, so extras ride an allOf, same as stacked patterns
        const [first, ...rest] = divisors;
        if (first !== undefined)
            json.multipleOf = first;
        if (rest.length)
            json.allOf = [...(json.allOf ?? []), ...rest.map((m) => ({ multipleOf: m }))];
    }
};
const booleanProcessor = (_schema, _ctx, json, _params) => {
    json.type = "boolean";
};
const bigintProcessor = (schema, ctx, json, params) => {
    handleUnrepresentable(schema, ctx, json, params, "BigInt cannot be represented in JSON Schema");
};
const symbolProcessor = (schema, ctx, json, params) => {
    handleUnrepresentable(schema, ctx, json, params, "Symbols cannot be represented in JSON Schema");
};
const nullProcessor = (_schema, ctx, json, _params) => {
    if (ctx.target === "openapi-3.0") {
        json.type = "string";
        json.nullable = true;
        json.enum = [null];
    }
    else {
        json.type = "null";
    }
};
const undefinedProcessor = (schema, ctx, json, params) => {
    handleUnrepresentable(schema, ctx, json, params, "Undefined cannot be represented in JSON Schema");
};
const voidProcessor = (schema, ctx, json, params) => {
    handleUnrepresentable(schema, ctx, json, params, "Void cannot be represented in JSON Schema");
};
const neverProcessor = (_schema, _ctx, json, _params) => {
    json.not = {};
};
const anyProcessor = (_schema, _ctx, _json, _params) => {
    // empty schema accepts anything
};
const unknownProcessor = (_schema, _ctx, _json, _params) => {
    // empty schema accepts anything
};
const dateProcessor = (schema, ctx, json, params) => {
    handleUnrepresentable(schema, ctx, json, params, "Date cannot be represented in JSON Schema");
};
const enumProcessor = (schema, _ctx, json, _params) => {
    const def = schema._zod.def;
    const values = getEnumValues(def.entries);
    // an empty enum accepts nothing, same as z.never()
    if (values.length === 0) {
        json.not = {};
        return;
    }
    // Number enums can have both string and number values
    if (values.every((v) => typeof v === "number"))
        json.type = "number";
    if (values.every((v) => typeof v === "string"))
        json.type = "string";
    json.enum = values;
};
const literalProcessor = (schema, ctx, json, params) => {
    const def = schema._zod.def;
    // a literal with no values accepts nothing, same as z.never()
    if (def.values.length === 0) {
        json.not = {};
        return;
    }
    const vals = [];
    for (const val of def.values) {
        if (val === undefined) {
            // a custom schema replaces the whole literal, so there is nothing left to accumulate
            if (handleUnrepresentable(schema, ctx, json, params, "Literal `undefined` cannot be represented in JSON Schema"))
                return;
            // otherwise do not add to vals
        }
        else if (typeof val === "bigint") {
            if (handleUnrepresentable(schema, ctx, json, params, "BigInt literals cannot be represented in JSON Schema"))
                return;
            vals.push(Number(val));
        }
        else {
            vals.push(val);
        }
    }
    if (vals.length === 0) {
        // do nothing (an undefined literal was stripped)
    }
    else if (vals.length === 1) {
        const val = vals[0];
        json.type = val === null ? "null" : typeof val;
        if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") {
            json.enum = [val];
        }
        else {
            json.const = val;
        }
    }
    else {
        if (vals.every((v) => typeof v === "number"))
            json.type = "number";
        if (vals.every((v) => typeof v === "string"))
            json.type = "string";
        if (vals.every((v) => typeof v === "boolean"))
            json.type = "boolean";
        if (vals.every((v) => v === null))
            json.type = "null";
        json.enum = vals;
    }
};
const nanProcessor = (schema, ctx, json, params) => {
    handleUnrepresentable(schema, ctx, json, params, "NaN cannot be represented in JSON Schema");
};
const templateLiteralProcessor = (schema, _ctx, json, _params) => {
    const _json = json;
    const pattern = schema._zod.pattern;
    if (!pattern)
        throw new Error("Pattern not found in template literal");
    _json.type = "string";
    _json.pattern = pattern.source;
};
const fileProcessor = (schema, _ctx, json, _params) => {
    const _json = json;
    _json.type = "string";
    _json.format = "binary";
    _json.contentEncoding = "binary";
    const { minimum, maximum, mime } = aggregateChecks(schema);
    if (minimum !== undefined)
        _json.minLength = minimum;
    if (maximum !== undefined)
        _json.maxLength = maximum;
    if (!mime)
        return;
    // an empty intersection means the mime checks share no value, so nothing passes at runtime; `anyOf` must be non-empty, so the false schema is `not: {}`
    if (mime.length === 0)
        _json.not = {};
    else if (mime.length === 1)
        _json.contentMediaType = mime[0];
    // only contentMediaType differs, so the shared props stay at the root
    else
        _json.anyOf = mime.map((m) => ({ contentMediaType: m }));
};
const successProcessor = (_schema, _ctx, json, _params) => {
    json.type = "boolean";
};
const customProcessor = (schema, ctx, json, params) => {
    handleUnrepresentable(schema, ctx, json, params, "Custom types cannot be represented in JSON Schema");
};
const functionProcessor = (schema, ctx, json, params) => {
    handleUnrepresentable(schema, ctx, json, params, "Function types cannot be represented in JSON Schema");
};
const transformProcessor = (schema, ctx, json, params) => {
    handleUnrepresentable(schema, ctx, json, params, "Transforms cannot be represented in JSON Schema");
};
const mapProcessor = (schema, ctx, json, params) => {
    handleUnrepresentable(schema, ctx, json, params, "Map cannot be represented in JSON Schema");
};
const setProcessor = (schema, ctx, json, params) => {
    handleUnrepresentable(schema, ctx, json, params, "Set cannot be represented in JSON Schema");
};
// ==================== COMPOSITE TYPE PROCESSORS ====================
const arrayProcessor = (schema, ctx, _json, params) => {
    const json = _json;
    const def = schema._zod.def;
    const { minimum, maximum } = aggregateChecks(schema);
    if (typeof minimum === "number")
        json.minItems = minimum;
    if (typeof maximum === "number")
        json.maxItems = maximum;
    json.type = "array";
    json.items = to_json_schema_processSchema(def.element, ctx, {
        ...params,
        path: [...params.path, "items"],
    });
};
// Transform and catch set `optin = "optional"` at runtime so the parser lets them observe an
// absent key, but their declared input type stays required. An input JSON Schema describes the
// declared type, so resolve past them to the schema that actually carries the optionality.
// Used by both `objectProcessor` (for `required`) and `tupleProcessor` (for `minItems`); see
// wiki/optionality.md, "The JSON Schema emitter reads the *static* value".
function inputOptin(schema) {
    const def = schema._zod.def;
    if (def.type === "pipe" && def.in._zod.traits.has("$ZodTransform")) {
        return inputOptin(def.out);
    }
    if (def.type === "catch") {
        return inputOptin(def.innerType);
    }
    return schema._zod.optin;
}
const objectProcessor = (schema, ctx, _json, params) => {
    const json = _json;
    const def = schema._zod.def;
    const shape = def.shape;
    // dropping it while still emitting `additionalProperties: false` would emit a schema that rejects data this one requires
    const symbolKeys = Object.getOwnPropertySymbols(shape);
    if (symbolKeys.length &&
        handleUnrepresentable(schema, ctx, json, params, "Symbol keys cannot be represented in JSON Schema")) {
        return;
    }
    json.type = "object";
    json.properties = {};
    for (const key in shape) {
        // assignProp so a __proto__ key becomes an own property instead of hitting the inherited setter on the plain {} we build into
        util_assignProp(json.properties, key, to_json_schema_processSchema(shape[key], ctx, {
            ...params,
            path: [...params.path, "properties", key],
        }));
    }
    // required keys
    const requiredKeys = [];
    for (const key of Object.keys(shape)) {
        const field = def.shape[key];
        if (ctx.io === "input" ? inputOptin(field) === undefined : field._zod.optout === undefined) {
            requiredKeys.push(key);
        }
    }
    if (requiredKeys.length > 0) {
        json.required = requiredKeys;
    }
    // catchall
    if (def.catchall?._zod.def.type === "never") {
        // strict
        json.additionalProperties = false;
    }
    else if (!def.catchall) {
        // regular
        if (ctx.io === "output")
            json.additionalProperties = false;
    }
    else if (def.catchall) {
        json.additionalProperties = to_json_schema_processSchema(def.catchall, ctx, {
            ...params,
            path: [...params.path, "additionalProperties"],
        });
    }
};
const unionProcessor = (schema, ctx, json, params) => {
    const def = schema._zod.def;
    // Exclusive unions (inclusive === false) use oneOf (exactly one match) instead of anyOf (one or more matches). This includes both z.xor() and discriminated unions
    const isExclusive = def.inclusive === false;
    const options = def.options.map((x, i) => to_json_schema_processSchema(x, ctx, {
        ...params,
        path: [...params.path, isExclusive ? "oneOf" : "anyOf", i],
    }));
    if (isExclusive) {
        json.oneOf = options;
    }
    else {
        json.anyOf = options;
    }
};
const intersectionProcessor = (schema, ctx, json, params) => {
    const def = schema._zod.def;
    const a = to_json_schema_processSchema(def.left, ctx, {
        ...params,
        path: [...params.path, "allOf", 0],
    });
    const b = to_json_schema_processSchema(def.right, ctx, {
        ...params,
        path: [...params.path, "allOf", 1],
    });
    const isSimpleIntersection = (val) => "allOf" in val && Object.keys(val).length === 1;
    const allOf = [
        ...(isSimpleIntersection(a) ? a.allOf : [a]),
        ...(isSimpleIntersection(b) ? b.allOf : [b]),
    ];
    json.allOf = allOf;
    // Recorded innermost first, so a nested intersection has already folded by the time this one is considered. The array is the handle rather than the schema, because a wrapper that inherits this schema shares the same array; `finalize` folds every object holding it. See `foldIntersection`.
    ctx.intersections.push(allOf);
};
const tupleProcessor = (schema, ctx, _json, params) => {
    const json = _json;
    const def = schema._zod.def;
    json.type = "array";
    const prefixPath = ctx.target === "draft-2020-12" ? "prefixItems" : "items";
    const restPath = ctx.target === "draft-2020-12" ? "items" : ctx.target === "openapi-3.0" ? "items" : "additionalItems";
    const prefixItems = def.items.map((x, i) => to_json_schema_processSchema(x, ctx, {
        ...params,
        path: [...params.path, prefixPath, i],
    }));
    const rest = def.rest
        ? to_json_schema_processSchema(def.rest, ctx, {
            ...params,
            path: [...params.path, restPath, ...(ctx.target === "openapi-3.0" ? [def.items.length] : [])],
        })
        : null;
    let minItems = def.items.length;
    while (minItems > 0) {
        const item = def.items[minItems - 1];
        const optional = ctx.io === "input" ? inputOptin(item) !== undefined : item._zod.optout === "optional";
        if (!optional)
            break;
        minItems--;
    }
    const maxItems = def.items.length;
    const isClosed = !def.rest;
    if (ctx.target === "draft-2020-12") {
        json.prefixItems = prefixItems;
        if (isClosed) {
            json.items = false;
        }
        else if (rest) {
            json.items = rest;
        }
        if (minItems > 0)
            json.minItems = minItems;
        if (isClosed)
            json.maxItems = maxItems;
    }
    else if (ctx.target === "openapi-3.0") {
        json.items = {
            anyOf: prefixItems,
        };
        if (rest) {
            json.items.anyOf.push(rest);
        }
        if (minItems > 0)
            json.minItems = minItems;
        if (isClosed)
            json.maxItems = maxItems;
    }
    else {
        json.items = prefixItems;
        if (isClosed) {
            json.additionalItems = false;
        }
        else if (rest) {
            json.additionalItems = rest;
        }
        if (minItems > 0)
            json.minItems = minItems;
        if (isClosed)
            json.maxItems = maxItems;
    }
    // explicit user-defined length checks take precedence
    const { minimum, maximum } = aggregateChecks(schema);
    if (typeof minimum === "number")
        json.minItems = minimum;
    if (typeof maximum === "number")
        json.maxItems = maximum;
};
/** JSON object keys are always strings, so a numeric record key schema is re-expressed over the
 * numeric-string form the record parser matches. Deferred to `finalize`, after the flatten: a key
 * behind a wrapper only carries its own `type` before then, and a union key only has its branches.
 *
 * A numeric bound cannot apply to a property name, so `minimum` and its siblings are dropped rather
 * than carried over: keeping them beside `type: "string"` reproduces the match-nothing schema this
 * exists to fix. A key that carries one therefore emits wider than the record parses — `z.record(z.number().min(5), V)`
 * accepts `"3"` — which is the deliberate trade, since throwing on it would reject an ordinary schema
 * outright. */
function stringifyKeyNames(bySchema, json, visited) {
    // an extracted key that rewrites cannot go on sharing its definition — the string form a key position needs is not the number form every other reference wants — so it inlines. One that does not rewrite keeps the `$ref`.
    if (json.$ref) {
        // a recursive key holds its own reference inside its definition, so a node already on the path is left alone rather than resolved again
        if (visited.has(json))
            return json;
        visited.add(json);
        const def = bySchema.get(json)?.def;
        if (!def)
            return json;
        const inlined = stringifyKeyNames(bySchema, def, visited);
        return inlined === def ? json : inlined;
    }
    for (const keyword of ["anyOf", "oneOf"]) {
        const branches = json[keyword];
        if (!Array.isArray(branches))
            continue;
        const mapped = branches.map((branch) => stringifyKeyNames(bySchema, branch, visited));
        // rebuilding regardless would detach a key that had nothing to re-express, dropping its `$ref` and leaking the internal `id`
        if (mapped.some((branch, i) => branch !== branches[i]))
            json = { ...json, [keyword]: mapped };
    }
    // a member that already admits a string leaves the key unconstrained, so the node's own type re-expresses only when every member is numeric
    const types = Array.isArray(json.type) ? json.type : [json.type];
    const numericType = !types.includes("string") && types.some((t) => t === "number" || t === "integer");
    // a heterogeneous key carries no type at all, so its numeric members are caught here instead
    const values = json.enum ?? (json.const !== undefined ? [json.const] : undefined);
    if (!numericType && !values?.some((v) => typeof v === "number"))
        return json;
    const { minimum, maximum, exclusiveMinimum, exclusiveMaximum, multipleOf, format, id, ...rest } = json;
    if (rest.enum)
        rest.enum = rest.enum.map((v) => (typeof v === "number" ? String(v) : v));
    else if (typeof rest.const === "number")
        rest.const = String(rest.const);
    // a heterogeneous key keeps its absent type: the stringified members already say what a key may be
    if (!numericType)
        return rest;
    rest.type = "string";
    if (!values)
        rest.pattern = (types.includes("number") ? number : integer).source;
    return rest;
}
/** Every record of one conversion, so the carriers are found in a single pass rather than once per record. */
const pendingRecords = new WeakMap();
function rewriteKeyNames(ctx) {
    // an extracted key is resolved by the object `extractToDef` left in its place, so the map is built once rather than searched per reference. `_zod.toJSONSchema` can hand the same object to two schemas, so the first entry carrying a body wins, as a search would have found it.
    const bySchema = new Map();
    for (const entry of ctx.seen.values()) {
        if (entry.def && !bySchema.has(entry.schema))
            bySchema.set(entry.schema, entry);
    }
    const rewrites = new Map();
    for (const record of pendingRecords.get(ctx) ?? []) {
        const seen = ctx.seen.get(record);
        const names = (seen?.def ?? seen?.schema)?.propertyNames;
        if (!names || names === true || rewrites.has(names))
            continue;
        const rewritten = stringifyKeyNames(bySchema, names, new Set());
        if (rewritten !== names)
            rewrites.set(names, rewritten);
    }
    if (!rewrites.size)
        return;
    // the flatten has already copied each record's own properties onto every wrapper by reference, and an extracted body is another such copy, so every carrier holding a rewritten key is updated together
    for (const entry of ctx.seen.values()) {
        for (const carrier of [entry.schema, entry.def]) {
            const rewritten = carrier && rewrites.get(carrier.propertyNames);
            if (rewritten)
                carrier.propertyNames = rewritten;
        }
    }
}
const recordProcessor = (schema, ctx, _json, params) => {
    const json = _json;
    const def = schema._zod.def;
    json.type = "object";
    // For looseRecord with regex patterns, use patternProperties. This correctly represents "only validate keys matching the pattern" semantics and composes well with allOf (intersections)
    const keyType = def.keyType;
    const patterns = aggregateChecks(keyType).patterns;
    if (def.mode === "loose" && patterns && patterns.size > 0) {
        // Use patternProperties for looseRecord with regex patterns
        const valueSchema = to_json_schema_processSchema(def.valueType, ctx, {
            ...params,
            path: [...params.path, "patternProperties", "*"],
        });
        json.patternProperties = {};
        for (const pattern of patterns) {
            util_assignProp(json.patternProperties, exactPattern(pattern).source, valueSchema);
        }
    }
    else {
        // Default behavior: use propertyNames + additionalProperties
        if (ctx.target === "draft-07" || ctx.target === "draft-2020-12") {
            json.propertyNames = to_json_schema_processSchema(def.keyType, ctx, {
                ...params,
                path: [...params.path, "propertyNames"],
            });
            let pending = pendingRecords.get(ctx);
            if (!pending) {
                pending = [];
                pendingRecords.set(ctx, pending);
                ctx.deferred.push(() => rewriteKeyNames(ctx));
            }
            pending.push(schema);
        }
        json.additionalProperties = to_json_schema_processSchema(def.valueType, ctx, {
            ...params,
            path: [...params.path, "additionalProperties"],
        });
    }
    // Add required for keys with discrete values (enum, literal, etc.)
    const keyValues = keyType._zod.values;
    // Every key shares one value schema, so an optional-in value makes the whole key set omittable on input. Output keeps them: the exhaustive branch assigns every key, even one whose value came back undefined.
    const omittableOnInput = ctx.io === "input" && inputOptin(def.valueType) !== undefined;
    if (keyValues && !def.partial && !omittableOnInput) {
        const validKeyValues = [...keyValues].filter((v) => typeof v === "string" || typeof v === "number");
        if (validKeyValues.length > 0) {
            json.required = validKeyValues.map(String);
        }
    }
};
const nullableProcessor = (schema, ctx, json, params) => {
    const def = schema._zod.def;
    const inner = to_json_schema_processSchema(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    if (ctx.target === "openapi-3.0") {
        seen.ref = def.innerType;
        json.nullable = true;
    }
    else {
        json.anyOf = [inner, { type: "null" }];
    }
};
const nonoptionalProcessor = (schema, ctx, _json, params) => {
    const def = schema._zod.def;
    to_json_schema_processSchema(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = def.innerType;
};
/** Round-trips a default value through JSON so the emitted schema is guaranteed to be valid JSON.
 * A BigInt has no reliable encoding, so it goes through `unrepresentable` like any other
 * unrepresentable value. Returns a sentinel when the caller must not write a default of its own. */
const UNREPRESENTABLE_DEFAULT = Symbol();
function serializeDefaultValue(value, schema, ctx, json, params) {
    let unrepresentable = false;
    const serialized = JSON.stringify(value, (_, val) => {
        if (typeof val !== "bigint")
            return val;
        unrepresentable = true;
        return null;
    });
    if (!unrepresentable)
        return JSON.parse(serialized);
    handleUnrepresentable(schema, ctx, json, params, "BigInt defaults cannot be represented in JSON Schema");
    return UNREPRESENTABLE_DEFAULT;
}
const defaultProcessor = (schema, ctx, json, params) => {
    const def = schema._zod.def;
    to_json_schema_processSchema(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = def.innerType;
    const value = serializeDefaultValue(def.defaultValue, schema, ctx, json, params);
    if (value !== UNREPRESENTABLE_DEFAULT)
        json.default = value;
};
const prefaultProcessor = (schema, ctx, json, params) => {
    const def = schema._zod.def;
    to_json_schema_processSchema(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = def.innerType;
    if (ctx.io !== "input")
        return;
    const value = serializeDefaultValue(def.defaultValue, schema, ctx, json, params);
    if (value !== UNREPRESENTABLE_DEFAULT)
        json._prefault = value;
};
const catchProcessor = (schema, ctx, json, params) => {
    const def = schema._zod.def;
    to_json_schema_processSchema(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = def.innerType;
    let catchValue;
    try {
        catchValue = def.catchValue(undefined);
    }
    catch {
        handleUnrepresentable(schema, ctx, json, params, "Dynamic catch values are not supported in JSON Schema");
        return;
    }
    json.default = catchValue;
};
const pipeProcessor = (schema, ctx, _json, params) => {
    const def = schema._zod.def;
    const inIsTransform = def.in._zod.traits.has("$ZodTransform");
    const innerType = ctx.io === "input" ? (inIsTransform ? def.out : def.in) : def.out;
    to_json_schema_processSchema(innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = innerType;
};
const readonlyProcessor = (schema, ctx, json, params) => {
    const def = schema._zod.def;
    to_json_schema_processSchema(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = def.innerType;
    json.readOnly = true;
};
const promiseProcessor = (schema, ctx, _json, params) => {
    const def = schema._zod.def;
    to_json_schema_processSchema(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = def.innerType;
};
const optionalProcessor = (schema, ctx, _json, params) => {
    const def = schema._zod.def;
    to_json_schema_processSchema(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = def.innerType;
};
const lazyProcessor = (schema, ctx, _json, params) => {
    const innerType = schema._zod.innerType;
    to_json_schema_processSchema(innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = innerType;
};
// ==================== ALL PROCESSORS ====================
const allProcessors = {
    string: stringProcessor,
    number: numberProcessor,
    boolean: booleanProcessor,
    bigint: bigintProcessor,
    symbol: symbolProcessor,
    null: nullProcessor,
    undefined: undefinedProcessor,
    void: voidProcessor,
    never: neverProcessor,
    any: anyProcessor,
    unknown: unknownProcessor,
    date: dateProcessor,
    enum: enumProcessor,
    literal: literalProcessor,
    nan: nanProcessor,
    template_literal: templateLiteralProcessor,
    file: fileProcessor,
    success: successProcessor,
    custom: customProcessor,
    function: functionProcessor,
    transform: transformProcessor,
    map: mapProcessor,
    set: setProcessor,
    array: arrayProcessor,
    object: objectProcessor,
    union: unionProcessor,
    intersection: intersectionProcessor,
    tuple: tupleProcessor,
    record: recordProcessor,
    nullable: nullableProcessor,
    nonoptional: nonoptionalProcessor,
    default: defaultProcessor,
    prefault: prefaultProcessor,
    catch: catchProcessor,
    pipe: pipeProcessor,
    readonly: readonlyProcessor,
    promise: promiseProcessor,
    optional: optionalProcessor,
    lazy: lazyProcessor,
};
function toJSONSchema(input, params) {
    if ("_idmap" in input) {
        // Registry case
        const registry = input;
        const ctx = initializeContext({ ...params, processors: allProcessors });
        const defs = {};
        // First pass: process all schemas to build the seen map
        for (const entry of registry._idmap.entries()) {
            const [_, schema] = entry;
            processSchema(schema, ctx);
        }
        const schemas = {};
        const external = {
            registry,
            uri: params?.uri,
            defs,
        };
        // Update the context with external configuration
        ctx.external = external;
        // Second pass: emit each schema
        for (const entry of registry._idmap.entries()) {
            const [key, schema] = entry;
            extractDefs(ctx, schema);
            assignProp(schemas, key, finalize(ctx, schema));
        }
        if (Object.keys(defs).length > 0) {
            const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
            schemas.__shared = {
                [defsSegment]: defs,
            };
        }
        return { schemas };
    }
    // Single schema case
    const ctx = initializeContext({ ...params, processors: allProcessors });
    processSchema(input, ctx);
    extractDefs(ctx, input);
    return finalize(ctx, input);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/locales/en.js

const error = () => {
    const Sizable = {
        string: { unit: "characters", verb: "to have" },
        file: { unit: "bytes", verb: "to have" },
        array: { unit: "items", verb: "to have" },
        set: { unit: "items", verb: "to have" },
        map: { unit: "entries", verb: "to have" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
        regex: "input",
        email: "email address",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO datetime",
        date: "ISO date",
        time: "ISO time",
        duration: "ISO duration",
        ipv4: "IPv4 address",
        ipv6: "IPv6 address",
        mac: "MAC address",
        cidrv4: "IPv4 range",
        cidrv6: "IPv6 range",
        base64: "base64-encoded string",
        base64url: "base64url-encoded string",
        json_string: "JSON string",
        e164: "E.164 number",
        currency_code: "currency code",
        credit_card: "credit card number",
        iban: "IBAN",
        jwt: "JWT",
        template_literal: "input",
    };
    // type names: missing keys = do not translate (use raw value via ?? fallback)
    const TypeDictionary = {
        // Compatibility: "nan" -> "NaN" for display
        nan: "NaN",
        // All other type names omitted - they fall back to raw values via ?? operator
    };
    function getTypeName(type, input) {
        if (type === "number" && typeof input === "number" && !Number.isFinite(input)) {
            return String(input);
        }
        return TypeDictionary[type] ?? type;
    }
    return (issue) => {
        switch (issue.code) {
            case "invalid_type": {
                const expected = getTypeName(issue.expected);
                const receivedType = parsedType(issue.input);
                const received = getTypeName(receivedType, issue.input);
                return `Invalid input: expected ${expected}, received ${received}`;
            }
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Invalid input: expected ${stringifyPrimitive(issue.values[0])}`;
                return `Invalid option: expected one of ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.exact ? "exactly " : issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Too big: expected ${issue.origin ?? "value"} to have ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elements"}`;
                return `Too big: expected ${issue.origin ?? "value"} to be ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.exact ? "exactly " : issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Too small: expected ${issue.origin} to have ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Too small: expected ${issue.origin} to be ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `Invalid string: must start with "${_issue.prefix}"`;
                }
                if (_issue.format === "ends_with")
                    return `Invalid string: must end with "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Invalid string: must include "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Invalid string: must match pattern ${_issue.pattern}`;
                return `Invalid ${FormatDictionary[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Invalid number: must be a multiple of ${issue.divisor}`;
            case "unrecognized_keys":
                return `Unrecognized key${issue.keys.length > 1 ? "s" : ""}: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Invalid key in ${issue.origin}`;
            case "invalid_union":
                if (issue.options && Array.isArray(issue.options) && issue.options.length > 0) {
                    const opts = issue.options.map((o) => `'${o}'`).join(" | ");
                    return `Invalid discriminator value. Expected ${opts}`;
                }
                if (issue.inclusive === false) {
                    return "Invalid input: more than one option matched";
                }
                return "Invalid input";
            case "invalid_element":
                return `Invalid value in ${issue.origin}`;
            default:
                return `Invalid input`;
        }
    };
};
/* harmony default export */ function en() {
    return {
        localeError: error(),
    };
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/core/errors.js


/* Computing the message eagerly is expensive (pretty-printed JSON of all
 * issues), so defer it until first read. The accessor functions and
 * descriptors are shared across instances to keep error construction
 * cheap; the computed message is cached on the internals object. The
 * setter preserves plain assignment semantics for consumers that
 * overwrite `message`. */
function _getMessage() {
    const internals = this._zod;
    internals.message ?? (internals.message = JSON.stringify(internals.def, jsonStringifyReplacer, 2));
    return internals.message;
}
function _setMessage(value) {
    this._zod.message = value;
}
const _messageDesc = {
    get: _getMessage,
    set: _setMessage,
    enumerable: true,
    configurable: true,
};
const _issuesDesc = { value: undefined, enumerable: false };
/* Prototypes that already carry the lazy `toString`. Seeded with the
 * intrinsics so that `init` on a foreign object — it accepts any object —
 * can never install an accessor onto a prototype we do not own. */
const _installedToString = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
const initializer = (inst, def) => {
    inst.name = "$ZodError";
    // `_zod` is already non-enumerable: $constructor's init defined it with this same descriptor
    _issuesDesc.value = def;
    Object.defineProperty(inst, "issues", _issuesDesc);
    // Clear the shared slot; a retained `value` pins the last error's issues.
    _issuesDesc.value = undefined;
    Object.defineProperty(inst, "message", _messageDesc);
    /* `toString` lives as a non-enumerable lazy getter on the shared
     * prototype; on first access it caches a per-instance closure so
     * detached usage still works. */
    const proto = Object.getPrototypeOf(inst);
    if (!_installedToString.has(proto)) {
        _installedToString.add(proto);
        Object.defineProperty(proto, "toString", {
            configurable: true,
            enumerable: false,
            get() {
                const value = () => this.message;
                Object.defineProperty(this, "toString", { value, configurable: true, writable: true });
                return value;
            },
            set(value) {
                Object.defineProperty(this, "toString", { value, configurable: true, writable: true });
            },
        });
    }
};
const $ZodError = $constructor("$ZodError", initializer);
const $ZodRealError = $constructor("$ZodError", initializer, undefined, {
    Parent: Error,
});
/** Get-or-create `obj[key]` as an own data property. A path segment naming an inherited member
 * ("toString", "constructor") would otherwise read through to the prototype, and assigning
 * "__proto__" would hit the setter instead of creating a key. */
function node(obj, key, make) {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) {
        if (key === "__proto__") {
            Object.defineProperty(obj, key, { value: make(), writable: true, enumerable: true, configurable: true });
        }
        else {
            obj[key] = make();
        }
    }
    return obj[key];
}
function flattenError(error, mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of error.issues) {
        if (sub.path.length > 0) {
            node(fieldErrors, sub.path[0], () => []).push(mapper(sub));
        }
        else {
            formErrors.push(mapper(sub));
        }
    }
    return { formErrors, fieldErrors };
}
function formatError(error, mapper = (issue) => issue.message) {
    const fieldErrors = { _errors: [] };
    const processError = (error, path = []) => {
        for (const issue of error.issues) {
            if (issue.code === "invalid_union" && issue.errors.length) {
                issue.errors.map((issues) => processError({ issues }, [...path, ...issue.path]));
            }
            else if (issue.code === "invalid_key") {
                processError({ issues: issue.issues }, [...path, ...issue.path]);
            }
            else if (issue.code === "invalid_element") {
                processError({ issues: issue.issues }, [...path, ...issue.path]);
            }
            else {
                const fullpath = [...path, ...issue.path];
                if (fullpath.length === 0) {
                    fieldErrors._errors.push(mapper(issue));
                }
                else {
                    let curr = fieldErrors;
                    let i = 0;
                    while (i < fullpath.length) {
                        const el = fullpath[i];
                        const terminal = i === fullpath.length - 1;
                        // `_errors` is reserved by this legacy format, so merge a matching path segment into the current node instead of treating its array as a child.
                        if (el === "_errors") {
                            if (terminal)
                                curr._errors.push(mapper(issue));
                            i++;
                            continue;
                        }
                        // A path element may collide with an inherited property name such as
                        // "__proto__" or "constructor". Truthiness checks read the prototype
                        // (so no node is created, then ._errors.push throws), and bracket
                        // assignment of "__proto__" hits the setter instead of creating an
                        // own key. Guard the read with hasOwnProperty and create the node
                        // with defineProperty so any path element becomes a real own key.
                        if (!Object.prototype.hasOwnProperty.call(curr, el)) {
                            Object.defineProperty(curr, el, {
                                value: { _errors: [] },
                                enumerable: true,
                                writable: true,
                                configurable: true,
                            });
                        }
                        const node = curr[el];
                        if (terminal) {
                            node._errors.push(mapper(issue));
                        }
                        curr = node;
                        i++;
                    }
                }
            }
        }
    };
    processError(error);
    return fieldErrors;
}
function treeifyError(error, mapper = (issue) => issue.message) {
    const result = { errors: [] };
    const processError = (error, path = []) => {
        var _a;
        for (const issue of error.issues) {
            if (issue.code === "invalid_union" && issue.errors.length) {
                // regular union error
                issue.errors.map((issues) => processError({ issues }, [...path, ...issue.path]));
            }
            else if (issue.code === "invalid_key") {
                processError({ issues: issue.issues }, [...path, ...issue.path]);
            }
            else if (issue.code === "invalid_element") {
                processError({ issues: issue.issues }, [...path, ...issue.path]);
            }
            else {
                const fullpath = [...path, ...issue.path];
                if (fullpath.length === 0) {
                    result.errors.push(mapper(issue));
                    continue;
                }
                let curr = result;
                let i = 0;
                while (i < fullpath.length) {
                    const el = fullpath[i];
                    const terminal = i === fullpath.length - 1;
                    if (typeof el === "string") {
                        curr.properties ?? (curr.properties = {});
                        // el may collide with an inherited property name ("__proto__",
                        // "constructor", ...); ??= reads the prototype so the node is never
                        // created and curr.errors.push throws. Guard with hasOwnProperty and
                        // create the node with defineProperty so "__proto__" becomes a real
                        // own key rather than invoking the prototype setter.
                        if (!Object.prototype.hasOwnProperty.call(curr.properties, el)) {
                            Object.defineProperty(curr.properties, el, {
                                value: { errors: [] },
                                enumerable: true,
                                writable: true,
                                configurable: true,
                            });
                        }
                        curr = curr.properties[el];
                    }
                    else {
                        curr.items ?? (curr.items = []);
                        (_a = curr.items)[el] ?? (_a[el] = { errors: [] });
                        curr = curr.items[el];
                    }
                    if (terminal) {
                        curr.errors.push(mapper(issue));
                    }
                    i++;
                }
            }
        }
    };
    processError(error);
    return result;
}
/** Format a ZodError as a human-readable string in the following form.
 *
 * From
 *
 * ```ts
 * ZodError {
 *   issues: [
 *     {
 *       expected: 'string',
 *       code: 'invalid_type',
 *       path: [ 'username' ],
 *       message: 'Invalid input: expected string'
 *     },
 *     {
 *       expected: 'number',
 *       code: 'invalid_type',
 *       path: [ 'favoriteNumbers', 1 ],
 *       message: 'Invalid input: expected number'
 *     }
 *   ];
 * }
 * ```
 *
 * to
 *
 * ```
 * username
 *   ✖ Expected number, received string at "username
 * favoriteNumbers[0]
 *   ✖ Invalid input: expected number
 * ```
 */
function toDotPath(_path) {
    const segs = [];
    const path = _path.map((seg) => (typeof seg === "object" ? seg.key : seg));
    for (const seg of path) {
        if (typeof seg === "number")
            segs.push(`[${seg}]`);
        else if (typeof seg === "symbol")
            segs.push(`[${JSON.stringify(String(seg))}]`);
        else if (/[^\w$]/.test(seg))
            segs.push(`[${JSON.stringify(seg)}]`);
        else {
            if (segs.length)
                segs.push(".");
            segs.push(seg);
        }
    }
    return segs.join("");
}
function prettifyError(error) {
    const lines = [];
    // sort by path length
    const issues = [...error.issues].sort((a, b) => (a.path ?? []).length - (b.path ?? []).length);
    // Process each issue
    for (const issue of issues) {
        lines.push(`✖ ${issue.message}`);
        if (issue.path?.length)
            lines.push(`  → at ${toDotPath(issue.path)}`);
    }
    // Convert Map to formatted string
    return lines.join("\n");
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/core/parse.js



// Always both keys, so the `_params` read site in `_parse` sees one object shape rather than two.
function finalizeParams(callee, params) {
    return { callee: params?.callee ?? callee, Err: params?.Err };
}
const _parse = (_Err) => {
    const fn = (schema, value, _ctx, _params) => {
        const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
        const result = schema._zod.run({ value, issues: [] }, ctx);
        if (result instanceof Promise) {
            throw new $ZodAsyncError();
        }
        if (result.issues.length) {
            const e = new (_params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
            captureStackTrace(e, _params?.callee ?? fn);
            throw e;
        }
        return result.value;
    };
    return fn;
};
const parse_parse = /* @__PURE__*/ _parse($ZodRealError);
const _parseAsync = (_Err) => {
    const fn = async (schema, value, _ctx, params) => {
        const ctx = _ctx ? { ..._ctx, async: true } : { async: true };
        let result = schema._zod.run({ value, issues: [] }, ctx);
        if (result instanceof Promise)
            result = await result;
        if (result.issues.length) {
            const e = new (params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
            captureStackTrace(e, params?.callee ?? fn);
            throw e;
        }
        return result.value;
    };
    return fn;
};
const parse_parseAsync = /* @__PURE__*/ _parseAsync($ZodRealError);
const _safeParse = (_Err) => (schema, value, _ctx) => {
    const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
    const result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise) {
        throw new $ZodAsyncError();
    }
    return result.issues.length ? failure(_Err, result.issues, ctx) : { success: true, data: result.value };
};
const safeParse = /* @__PURE__*/ _safeParse($ZodRealError);
// the error is built on the first read of `error`: finalizing the issues and constructing the instance is most of a failing parse, and a caller that only branches on `success` never pays it. a getter in the literal keeps this small; the alternative, one shared accessor descriptor plus a hidden state slot, reads ~15% faster but costs ~75 B gzipped in every bundle
function failure(Err, issues, ctx) {
    let error;
    return {
        success: false,
        get error() {
            if (!error) {
                error = new Err(issues.map((iss) => finalizeIssue(iss, ctx, config())));
                // finalizeIssue drops `input`, so the built error holds nothing; keeping the raw issues past this point pins the parsed value for the life of the result
                issues = undefined;
                ctx = undefined;
            }
            return error;
        },
        set error(e) {
            error = e;
            // a replacement makes the getter's branch unreachable, so the captures have to go here too
            issues = undefined;
            ctx = undefined;
        },
    };
}
const _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
    const ctx = _ctx ? { ..._ctx, async: true } : { async: true };
    let result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise)
        result = await result;
    return result.issues.length ? failure(_Err, result.issues, ctx) : { success: true, data: result.value };
};
const safeParseAsync = /* @__PURE__*/ _safeParseAsync($ZodRealError);
// registry mirrors of the compiler's sentinels, so this module never imports the compiler
const COMPILE_INVALID = /* @__PURE__ */ Symbol.for("zod.compile.invalid");
const COMPILE_FALLBACK = /* @__PURE__ */ Symbol.for("zod.compile.fallback");
// Deliberately tiny, because v8 will not inline a body carrying the fallback's object literals and throw. Everything that is not the compiled happy path lives in validateFallback, and that split is worth ~35% on a compiled schema.
const validate = ((schema, value, _ctx) => {
    const validator = schema._zod.bag.validator;
    if (validator !== undefined) {
        if (validator(value) !== COMPILE_INVALID)
            return true;
        // a definite sentinel means the runtime would reject, so skip the re-parse; a ctx can still change the answer
        if (validator.definite === true && _ctx === undefined)
            return false;
    }
    return validateFallback(schema, value, _ctx);
});
function validateFallback(schema, value, _ctx) {
    const ctx = _ctx
        ? { ..._ctx, async: false, abortEarly: true }
        : { async: false, abortEarly: true };
    const fallbackRun = schema._zod.bag.fallbackRun;
    let result;
    if (fallbackRun) {
        // skip nested fast paths on the fallback, so user callbacks keep the at-most-twice bound
        ctx[COMPILE_FALLBACK] = true;
        result = fallbackRun({ value, issues: [] }, ctx);
    }
    else {
        result = schema._zod.run({ value, issues: [] }, ctx);
    }
    if (result instanceof Promise) {
        throw new $ZodAsyncError();
    }
    return result.issues.length === 0;
}
// no fast path: the compiler keeps async parses on the runtime, because a promise-returning callback that is not declared async compiles to a throw
const parse_validateAsync = async (schema, value, _ctx) => {
    const ctx = _ctx
        ? { ..._ctx, async: true, abortEarly: true }
        : { async: true, abortEarly: true };
    let result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise)
        result = await result;
    return result.issues.length === 0;
};
const _encode = (_Err) => {
    const parse = _parse(_Err);
    const fn = (schema, value, _ctx, _params) => {
        const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
        return parse(schema, value, ctx, finalizeParams(fn, _params));
    };
    return fn;
};
const encode = /* @__PURE__*/ _encode($ZodRealError);
const _decode = (_Err) => {
    const parse = _parse(_Err);
    const fn = (schema, value, _ctx, _params) => {
        return parse(schema, value, _ctx, finalizeParams(fn, _params));
    };
    return fn;
};
const decode = /* @__PURE__*/ _decode($ZodRealError);
const _encodeAsync = (_Err) => {
    const parseAsync = _parseAsync(_Err);
    const fn = async (schema, value, _ctx, _params) => {
        const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
        return (await parseAsync(schema, value, ctx, finalizeParams(fn, _params)));
    };
    return fn;
};
const encodeAsync = /* @__PURE__*/ _encodeAsync($ZodRealError);
const _decodeAsync = (_Err) => {
    const parseAsync = _parseAsync(_Err);
    const fn = async (schema, value, _ctx, _params) => {
        return await parseAsync(schema, value, _ctx, finalizeParams(fn, _params));
    };
    return fn;
};
const decodeAsync = /* @__PURE__*/ _decodeAsync($ZodRealError);
const _safeEncode = (_Err) => (schema, value, _ctx) => {
    const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
    return _safeParse(_Err)(schema, value, ctx);
};
const safeEncode = /* @__PURE__*/ _safeEncode($ZodRealError);
const _safeDecode = (_Err) => (schema, value, _ctx) => {
    return _safeParse(_Err)(schema, value, _ctx);
};
const safeDecode = /* @__PURE__*/ _safeDecode($ZodRealError);
const _safeEncodeAsync = (_Err) => async (schema, value, _ctx) => {
    const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
    return _safeParseAsync(_Err)(schema, value, ctx);
};
const safeEncodeAsync = /* @__PURE__*/ _safeEncodeAsync($ZodRealError);
const _safeDecodeAsync = (_Err) => async (schema, value, _ctx) => {
    return _safeParseAsync(_Err)(schema, value, _ctx);
};
const safeDecodeAsync = /* @__PURE__*/ _safeDecodeAsync($ZodRealError);

;// CONCATENATED MODULE: ./node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/errors.js



/* Prototypes that already carry the lazy helper methods. Seeded with the
 * intrinsics so that `init` on a foreign object — it accepts any object —
 * can never install an accessor onto a prototype we do not own. */
const _installedErrorProtos = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
/* Helper methods live as non-enumerable lazy getters on the shared
 * prototype instead of own properties on every instance. On first
 * access the getter allocates the per-instance closure and caches it
 * as a non-enumerable own property, so detached usage still works and
 * the allocation only happens for methods actually touched. */
function _lazyMethod(proto, key, make) {
    Object.defineProperty(proto, key, {
        configurable: true,
        enumerable: false,
        get() {
            const value = make(this);
            Object.defineProperty(this, key, { value, configurable: true, writable: true });
            return value;
        },
        set(value) {
            Object.defineProperty(this, key, { value, configurable: true, writable: true });
        },
    });
}
const errors_initializer = (inst, issues) => {
    $ZodError.init(inst, issues);
    inst.name = "ZodError";
    const proto = Object.getPrototypeOf(inst);
    if (_installedErrorProtos.has(proto))
        return;
    _installedErrorProtos.add(proto);
    _lazyMethod(proto, "format", (self) => (mapper) => formatError(self, mapper));
    _lazyMethod(proto, "flatten", (self) => (mapper) => flattenError(self, mapper));
    _lazyMethod(proto, "addIssue", (self) => (issue) => {
        self.issues.push(issue);
        self.message = JSON.stringify(self.issues, jsonStringifyReplacer, 2);
    });
    _lazyMethod(proto, "addIssues", (self) => (issues) => {
        self.issues.push(...issues);
        self.message = JSON.stringify(self.issues, jsonStringifyReplacer, 2);
    });
    Object.defineProperty(proto, "isEmpty", {
        configurable: true,
        enumerable: false,
        get() {
            return this.issues.length === 0;
        },
    });
};
const ZodError = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("ZodError", errors_initializer)));
const ZodRealError = /*@__PURE__*/ $constructor("ZodError", errors_initializer, undefined, {
    Parent: Error,
});
// /** @deprecated Use `z.core.$ZodErrorMapCtx` instead. */
// export type ErrorMapCtx = core.$ZodErrorMapCtx;

;// CONCATENATED MODULE: ./node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/parse.js


const classic_parse_parse = /* @__PURE__ */ _parse(ZodRealError);
const classic_parse_parseAsync = /* @__PURE__ */ _parseAsync(ZodRealError);
const parse_safeParse = /* @__PURE__ */ _safeParse(ZodRealError);
const parse_safeParseAsync = /* @__PURE__ */ _safeParseAsync(ZodRealError);

// Codec functions
const parse_encode = /* @__PURE__ */ _encode(ZodRealError);
const parse_decode = /* @__PURE__ */ _decode(ZodRealError);
const parse_encodeAsync = /* @__PURE__ */ _encodeAsync(ZodRealError);
const parse_decodeAsync = /* @__PURE__ */ _decodeAsync(ZodRealError);
const parse_safeEncode = /* @__PURE__ */ _safeEncode(ZodRealError);
const parse_safeDecode = /* @__PURE__ */ _safeDecode(ZodRealError);
const parse_safeEncodeAsync = /* @__PURE__ */ _safeEncodeAsync(ZodRealError);
const parse_safeDecodeAsync = /* @__PURE__ */ _safeDecodeAsync(ZodRealError);

;// CONCATENATED MODULE: ./node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/schemas.js








// Register English as the default locale on first ZodType construction. Hooked into the `ZodType` `$constructor` (rather than a top-level `config(en())` in `external.ts`) so bundlers honoring `sideEffects: false` can't tree-shake it out — see #5953, #5725. An explicit `z.config(z.locales.xx())` call wins regardless of order, since this only sets the default when none is present.
function _ensureDefaultLocale() {
    if (!globalConfig.localeError)
        config(en());
}
// the default memoizer is read by the core container init, which runs before `ZodType.init`, so each container calls this first
function _ensureDefaultMemoizer() {
    if (!globalConfig.memoizer)
        config({ memoizer: memoizer() });
}
const ZodType = /*@__PURE__*/ $constructor("ZodType", (inst, def) => {
    _ensureDefaultLocale();
    $ZodType.init(inst, def);
    inst.def = def;
    inst.type = def.type;
    return inst;
}, {
    check(...chks) {
        const def = this.def;
        return this.clone(mergeDefs(def, {
            checks: [
                ...(def.checks ?? []),
                ...chks.map((ch) => typeof ch === "function" ? { _zod: { check: ch, def: { check: "custom" }, onattach: [] } } : ch),
            ],
        }), { parent: true });
    },
    with(...chks) {
        return this.check(...chks);
    },
    clone(def, params) {
        return clone(this, def, params);
    },
    brand() {
        return this;
    },
    register(reg, meta) {
        reg.add(this, meta);
        return this;
    },
    refine(check, params) {
        return this.check(refine(check, params));
    },
    superRefine(refinement, params) {
        return this.check(superRefine(refinement, params));
    },
    overwrite(fn) {
        return this.check(_overwrite(fn));
    },
    optional() {
        return optional(this);
    },
    exactOptional() {
        return exactOptional(this);
    },
    nullable() {
        return nullable(this);
    },
    nullish() {
        return optional(nullable(this));
    },
    nonoptional(params) {
        return nonoptional(this, params);
    },
    array() {
        return array(this);
    },
    or(arg) {
        return union([this, arg]);
    },
    and(arg) {
        return intersection(this, arg);
    },
    transform(tx) {
        return pipe(this, transform(tx));
    },
    default(d) {
        return schemas_default(this, d);
    },
    prefault(d) {
        return prefault(this, d);
    },
    catch(params) {
        return schemas_catch(this, params);
    },
    pipe(target) {
        return pipe(this, target);
    },
    readonly() {
        return readonly(this);
    },
    describe(description) {
        const cl = this.clone();
        globalRegistry.add(cl, { description });
        return cl;
    },
    meta(...args) {
        // overloaded: meta() returns the registered metadata, meta(data) returns a clone with `data` registered. The mapped type picks up the second overload, so we accept variadic any-args and return `any` to satisfy both at runtime.
        if (args.length === 0)
            return globalRegistry.get(this);
        const cl = this.clone();
        globalRegistry.add(cl, args[0]);
        return cl;
    },
    isOptional() {
        return this.safeParse(undefined).success;
    },
    isNullable() {
        return this.safeParse(null).success;
    },
    apply(fn, ...args) {
        return args.length === 0 ? fn(this) : fn(this, ...args);
    },
    // Overrides core's `~standard` to add `jsonSchema`. Must stay a prototype entry: redefining it per instance demotes instances to dictionary mode.
    get "~standard"() {
        return hide(this, "~standard", {
            ...standardProps(this),
            jsonSchema: {
                input: createStandardJSONSchemaMethod(this, "input"),
                output: createStandardJSONSchemaMethod(this, "output"),
            },
        });
    },
    set "~standard"(value) {
        own(this, "~standard", value);
    },
    parse: function _parse(data, params) {
        return classic_parse_parse(this, data, params, { callee: _parse });
    },
    parseAsync: async function _parseAsync(data, params) {
        return await classic_parse_parseAsync(this, data, params, { callee: _parseAsync });
    },
    safeParse(data, params) {
        return parse_safeParse(this, data, params);
    },
    async safeParseAsync(data, params) {
        return parse_safeParseAsync(this, data, params);
    },
    // `spa` is an alias: same function object as `safeParseAsync`, as before.
    get spa() {
        return this?.safeParseAsync;
    },
    set spa(value) {
        own(this, "spa", value);
    },
    validate(data, params) {
        return validate(this, data, params);
    },
    validateAsync(data, params) {
        return parse_validateAsync(this, data, params);
    },
    encode: function _encode(data, params) {
        return parse_encode(this, data, params, { callee: _encode });
    },
    decode: function _decode(data, params) {
        return parse_decode(this, data, params, { callee: _decode });
    },
    encodeAsync: async function _encodeAsync(data, params) {
        return await parse_encodeAsync(this, data, params, { callee: _encodeAsync });
    },
    decodeAsync: async function _decodeAsync(data, params) {
        return await parse_decodeAsync(this, data, params, { callee: _decodeAsync });
    },
    safeEncode(data, params) {
        return parse_safeEncode(this, data, params);
    },
    safeDecode(data, params) {
        return parse_safeDecode(this, data, params);
    },
    async safeEncodeAsync(data, params) {
        return parse_safeEncodeAsync(this, data, params);
    },
    async safeDecodeAsync(data, params) {
        return parse_safeDecodeAsync(this, data, params);
    },
    toJSONSchema(params) {
        return createToJSONSchemaMethod(this, {})(params);
    },
    // Reads through to the registry on every access, so it must not cache.
    get description() {
        return globalRegistry.get(this)?.description;
    },
    // No setter: `schema._def = x` throws, as it did when `_def` was a non-writable own property.
    get _def() {
        return this._zod.def;
    },
});
/** @internal */
const _ZodString = /*@__PURE__*/ $constructor("_ZodString", (inst, def) => {
    $ZodString.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => stringProcessor(inst, ctx, json, params);
}, 
/*@__PURE__*/ derived({
    format: (inst) => aggregateChecks(inst).format ?? null,
    minLength: (inst) => aggregateChecks(inst).minimum ?? null,
    maxLength: (inst) => aggregateChecks(inst).maximum ?? null,
}, {
    regex(...args) {
        return this.check(_regex(...args));
    },
    includes(...args) {
        return this.check(_includes(...args));
    },
    startsWith(...args) {
        return this.check(_startsWith(...args));
    },
    endsWith(...args) {
        return this.check(_endsWith(...args));
    },
    min(...args) {
        return this.check(_minLength(...args));
    },
    max(...args) {
        return this.check(_maxLength(...args));
    },
    length(...args) {
        return this.check(_length(...args));
    },
    nonempty(...args) {
        return this.check(_minLength(1, ...args));
    },
    lowercase(params) {
        return this.check(_lowercase(params));
    },
    uppercase(params) {
        return this.check(_uppercase(params));
    },
    trim() {
        return this.check(_trim());
    },
    normalize(...args) {
        return this.check(_normalize(...args));
    },
    toLowerCase() {
        return this.check(_toLowerCase());
    },
    toUpperCase() {
        return this.check(_toUpperCase());
    },
    slugify() {
        return this.check(_slugify());
    },
}));
const ZodString = /*@__PURE__*/ $constructor("ZodString", (inst, def) => {
    $ZodString.init(inst, def);
    _ZodString.init(inst, def);
}, {
    email(params) {
        return this.check(_email(ZodEmail, params));
    },
    url(params) {
        return this.check(_url(ZodURL, params));
    },
    jwt(params) {
        return this.check(_jwt(ZodJWT, params));
    },
    emoji(params) {
        return this.check(api_emoji(ZodEmoji, params));
    },
    guid(params) {
        return this.check(_guid(ZodGUID, params));
    },
    uuid(params) {
        return this.check(_uuid(ZodUUID, params));
    },
    uuidv4(params) {
        return this.check(_uuidv4(ZodUUID, params));
    },
    uuidv6(params) {
        return this.check(_uuidv6(ZodUUID, params));
    },
    uuidv7(params) {
        return this.check(_uuidv7(ZodUUID, params));
    },
    nanoid(params) {
        return this.check(_nanoid(ZodNanoID, params));
    },
    cuid(params) {
        return this.check(_cuid(ZodCUID, params));
    },
    cuid2(params) {
        return this.check(_cuid2(ZodCUID2, params));
    },
    ulid(params) {
        return this.check(_ulid(ZodULID, params));
    },
    base64(params) {
        return this.check(_base64(ZodBase64, params));
    },
    base64url(params) {
        return this.check(_base64url(ZodBase64URL, params));
    },
    xid(params) {
        return this.check(_xid(ZodXID, params));
    },
    ksuid(params) {
        return this.check(_ksuid(ZodKSUID, params));
    },
    ipv4(params) {
        return this.check(_ipv4(ZodIPv4, params));
    },
    ipv6(params) {
        return this.check(_ipv6(ZodIPv6, params));
    },
    cidrv4(params) {
        return this.check(_cidrv4(ZodCIDRv4, params));
    },
    cidrv6(params) {
        return this.check(_cidrv6(ZodCIDRv6, params));
    },
    e164(params) {
        return this.check(_e164(ZodE164, params));
    },
    datetime(params) {
        return this.check(_isoDateTime(ZodISODateTime, params));
    },
    date(params) {
        return this.check(_isoDate(ZodISODate, params));
    },
    time(params) {
        return this.check(_isoTime(ZodISOTime, params));
    },
    duration(params) {
        return this.check(_isoDuration(ZodISODuration, params));
    },
});
function schemas_string(params) {
    return _string(ZodString, params);
}
const ZodStringFormat = /*@__PURE__*/ $constructor("ZodStringFormat", (inst, def) => {
    $ZodStringFormat.init(inst, def);
    _ZodString.init(inst, def);
});
const ZodISODateTime = /*@__PURE__*/ $constructor("ZodISODateTime", (inst, def) => {
    $ZodISODateTime.init(inst, def);
    ZodStringFormat.init(inst, def);
});
const ZodISODate = /*@__PURE__*/ $constructor("ZodISODate", (inst, def) => {
    $ZodISODate.init(inst, def);
    ZodStringFormat.init(inst, def);
});
const ZodISOTime = /*@__PURE__*/ $constructor("ZodISOTime", (inst, def) => {
    $ZodISOTime.init(inst, def);
    ZodStringFormat.init(inst, def);
});
const ZodISODuration = /*@__PURE__*/ $constructor("ZodISODuration", (inst, def) => {
    $ZodISODuration.init(inst, def);
    ZodStringFormat.init(inst, def);
});
const ZodEmail = /*@__PURE__*/ $constructor("ZodEmail", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    $ZodEmail.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function schemas_email(params) {
    return core._email(ZodEmail, params);
}
const ZodGUID = /*@__PURE__*/ $constructor("ZodGUID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    $ZodGUID.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function schemas_guid(params) {
    return core._guid(ZodGUID, params);
}
const ZodUUID = /*@__PURE__*/ $constructor("ZodUUID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    $ZodUUID.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function schemas_uuid(params) {
    return core._uuid(ZodUUID, params);
}
function uuidv4(params) {
    return core._uuidv4(ZodUUID, params);
}
// ZodUUIDv6
function uuidv6(params) {
    return core._uuidv6(ZodUUID, params);
}
// ZodUUIDv7
function uuidv7(params) {
    return core._uuidv7(ZodUUID, params);
}
const ZodURL = /*@__PURE__*/ $constructor("ZodURL", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    $ZodURL.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function url(params) {
    return core._url(ZodURL, params);
}
function httpUrl(params) {
    return core._url(ZodURL, {
        protocol: regexes.httpProtocol,
        hostname: regexes.domain,
        ...util.normalizeParams(params),
    });
}
const ZodEmoji = /*@__PURE__*/ $constructor("ZodEmoji", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    $ZodEmoji.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function schemas_emoji(params) {
    return core._emoji(ZodEmoji, params);
}
const ZodNanoID = /*@__PURE__*/ $constructor("ZodNanoID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    $ZodNanoID.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function schemas_nanoid(params) {
    return core._nanoid(ZodNanoID, params);
}
/**
 * @deprecated CUID v1 is deprecated by its authors due to information leakage
 * (timestamps embedded in the id). Use {@link ZodCUID2} instead.
 * See https://github.com/paralleldrive/cuid.
 */
const ZodCUID = /*@__PURE__*/ $constructor("ZodCUID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    $ZodCUID.init(inst, def);
    ZodStringFormat.init(inst, def);
});
/**
 * Validates a CUID v1 string.
 *
 * @deprecated CUID v1 is deprecated by its authors due to information leakage
 * (timestamps embedded in the id). Use {@link cuid2 | `z.cuid2()`} instead.
 * See https://github.com/paralleldrive/cuid.
 */
function schemas_cuid(params) {
    return core._cuid(ZodCUID, params);
}
const ZodCUID2 = /*@__PURE__*/ $constructor("ZodCUID2", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    $ZodCUID2.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function schemas_cuid2(params) {
    return core._cuid2(ZodCUID2, params);
}
const ZodULID = /*@__PURE__*/ $constructor("ZodULID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    $ZodULID.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function schemas_ulid(params) {
    return core._ulid(ZodULID, params);
}
const ZodXID = /*@__PURE__*/ $constructor("ZodXID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    $ZodXID.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function schemas_xid(params) {
    return core._xid(ZodXID, params);
}
const ZodKSUID = /*@__PURE__*/ $constructor("ZodKSUID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    $ZodKSUID.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function schemas_ksuid(params) {
    return core._ksuid(ZodKSUID, params);
}
const ZodIPv4 = /*@__PURE__*/ $constructor("ZodIPv4", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    $ZodIPv4.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function schemas_ipv4(params) {
    return core._ipv4(ZodIPv4, params);
}
const ZodMAC = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("ZodMAC", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodMAC.init(inst, def);
    ZodStringFormat.init(inst, def);
})));
function schemas_mac(params) {
    return core._mac(ZodMAC, params);
}
const ZodIPv6 = /*@__PURE__*/ $constructor("ZodIPv6", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    $ZodIPv6.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function schemas_ipv6(params) {
    return core._ipv6(ZodIPv6, params);
}
const ZodCIDRv4 = /*@__PURE__*/ $constructor("ZodCIDRv4", (inst, def) => {
    $ZodCIDRv4.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function schemas_cidrv4(params) {
    return core._cidrv4(ZodCIDRv4, params);
}
const ZodCIDRv6 = /*@__PURE__*/ $constructor("ZodCIDRv6", (inst, def) => {
    $ZodCIDRv6.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function schemas_cidrv6(params) {
    return core._cidrv6(ZodCIDRv6, params);
}
const ZodBase64 = /*@__PURE__*/ $constructor("ZodBase64", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    $ZodBase64.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function schemas_base64(params) {
    return core._base64(ZodBase64, params);
}
const ZodBase64URL = /*@__PURE__*/ $constructor("ZodBase64URL", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    $ZodBase64URL.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function schemas_base64url(params) {
    return core._base64url(ZodBase64URL, params);
}
const ZodE164 = /*@__PURE__*/ $constructor("ZodE164", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    $ZodE164.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function schemas_e164(params) {
    return core._e164(ZodE164, params);
}
const ZodCreditCard = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("ZodCreditCard", (inst, def) => {
    core.$ZodCreditCard.init(inst, def);
    ZodStringFormat.init(inst, def);
})));
function schemas_creditCard(params) {
    return core._creditCard(ZodCreditCard, params);
}
const ZodIBAN = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("ZodIBAN", (inst, def) => {
    core.$ZodIBAN.init(inst, def);
    ZodStringFormat.init(inst, def);
})));
function schemas_iban(params) {
    return core._iban(ZodIBAN, params);
}
const ZodJWT = /*@__PURE__*/ $constructor("ZodJWT", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    $ZodJWT.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function jwt(params) {
    return core._jwt(ZodJWT, params);
}
const ZodCustomStringFormat = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("ZodCustomStringFormat", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodCustomStringFormat.init(inst, def);
    ZodStringFormat.init(inst, def);
})));
function stringFormat(format, fnOrRegex, _params = {}) {
    return core._stringFormat(ZodCustomStringFormat, format, fnOrRegex, _params);
}
function schemas_hostname(_params) {
    return core._stringFormat(ZodCustomStringFormat, "hostname", regexes.hostname, _params);
}
function schemas_hex(_params) {
    return core._stringFormat(ZodCustomStringFormat, "hex", regexes.hex, _params);
}
function schemas_currencyCode(_params) {
    return core._stringFormat(ZodCustomStringFormat, "currency_code", regexes.currencyCode, _params);
}
function hash(alg, params) {
    const enc = params?.enc ?? "hex";
    const format = `${alg}_${enc}`;
    const regex = core.regexes[format];
    if (!regex)
        throw new Error(`Unrecognized hash format: ${format}`);
    return core._stringFormat(ZodCustomStringFormat, format, regex, params);
}
const ZodNumber = /*@__PURE__*/ $constructor("ZodNumber", (inst, def) => {
    $ZodNumber.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => numberProcessor(inst, ctx, json, params);
    inst.isFinite = true;
}, 
/*@__PURE__*/ derived({
    minValue: (inst) => {
        const { minimum, exclusiveMinimum } = aggregateChecks(inst);
        return Math.max(minimum ?? Number.NEGATIVE_INFINITY, exclusiveMinimum ?? Number.NEGATIVE_INFINITY);
    },
    maxValue: (inst) => {
        const { maximum, exclusiveMaximum } = aggregateChecks(inst);
        return Math.min(maximum ?? Number.POSITIVE_INFINITY, exclusiveMaximum ?? Number.POSITIVE_INFINITY);
    },
    isInt: (inst) => {
        const { isInt, multipleOf } = aggregateChecks(inst);
        return !!isInt || !!multipleOf?.some(Number.isSafeInteger);
    },
    format: (inst) => aggregateChecks(inst).format ?? null,
}, {
    gt(value, params) {
        return this.check(_gt(value, params));
    },
    gte(value, params) {
        return this.check(_gte(value, params));
    },
    min(value, params) {
        return this.check(_gte(value, params));
    },
    lt(value, params) {
        return this.check(_lt(value, params));
    },
    lte(value, params) {
        return this.check(_lte(value, params));
    },
    max(value, params) {
        return this.check(_lte(value, params));
    },
    int(params) {
        return this.check(schemas_int(params));
    },
    safe(params) {
        return this.check(schemas_int(params));
    },
    positive(params) {
        return this.check(_gt(0, params));
    },
    nonnegative(params) {
        return this.check(_gte(0, params));
    },
    negative(params) {
        return this.check(_lt(0, params));
    },
    nonpositive(params) {
        return this.check(_lte(0, params));
    },
    multipleOf(value, params) {
        return this.check(_multipleOf(value, params));
    },
    step(value, params) {
        return this.check(_multipleOf(value, params));
    },
    finite() {
        return this;
    },
}));
function schemas_number(params) {
    return _number(ZodNumber, params);
}
const ZodNumberFormat = /*@__PURE__*/ $constructor("ZodNumberFormat", (inst, def) => {
    $ZodNumberFormat.init(inst, def);
    ZodNumber.init(inst, def);
});
function schemas_int(params) {
    return _int(ZodNumberFormat, params);
}
function float32(params) {
    return core._float32(ZodNumberFormat, params);
}
function float64(params) {
    return core._float64(ZodNumberFormat, params);
}
function int32(params) {
    return core._int32(ZodNumberFormat, params);
}
function uint32(params) {
    return core._uint32(ZodNumberFormat, params);
}
const ZodBoolean = /*@__PURE__*/ $constructor("ZodBoolean", (inst, def) => {
    $ZodBoolean.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => booleanProcessor(inst, ctx, json, params);
});
function schemas_boolean(params) {
    return _boolean(ZodBoolean, params);
}
const ZodBigInt = /*@__PURE__*/ $constructor("ZodBigInt", (inst, def) => {
    $ZodBigInt.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => bigintProcessor(inst, ctx, json, params);
}, 
/*@__PURE__*/ derived({
    minValue: (inst) => aggregateChecks(inst).minimum ?? null,
    maxValue: (inst) => aggregateChecks(inst).maximum ?? null,
    format: (inst) => aggregateChecks(inst).format ?? null,
}, {
    gte(value, params) {
        return this.check(_gte(value, params));
    },
    min(value, params) {
        return this.check(_gte(value, params));
    },
    gt(value, params) {
        return this.check(_gt(value, params));
    },
    lt(value, params) {
        return this.check(_lt(value, params));
    },
    lte(value, params) {
        return this.check(_lte(value, params));
    },
    max(value, params) {
        return this.check(_lte(value, params));
    },
    positive(params) {
        return this.check(_gt(BigInt(0), params));
    },
    negative(params) {
        return this.check(_lt(BigInt(0), params));
    },
    nonpositive(params) {
        return this.check(_lte(BigInt(0), params));
    },
    nonnegative(params) {
        return this.check(_gte(BigInt(0), params));
    },
    multipleOf(value, params) {
        return this.check(_multipleOf(value, params));
    },
}));
function schemas_bigint(params) {
    return core._bigint(ZodBigInt, params);
}
const ZodBigIntFormat = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("ZodBigIntFormat", (inst, def) => {
    core.$ZodBigIntFormat.init(inst, def);
    ZodBigInt.init(inst, def);
})));
function int64(params) {
    return core._int64(ZodBigIntFormat, params);
}
function uint64(params) {
    return core._uint64(ZodBigIntFormat, params);
}
const ZodSymbol = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("ZodSymbol", (inst, def) => {
    core.$ZodSymbol.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => processors.symbolProcessor(inst, ctx, json, params);
})));
function symbol(params) {
    return core._symbol(ZodSymbol, params);
}
const ZodUndefined = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("ZodUndefined", (inst, def) => {
    core.$ZodUndefined.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => processors.undefinedProcessor(inst, ctx, json, params);
})));
function schemas_undefined(params) {
    return core._undefined(ZodUndefined, params);
}

const ZodNull = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("ZodNull", (inst, def) => {
    core.$ZodNull.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => processors.nullProcessor(inst, ctx, json, params);
})));
function schemas_null(params) {
    return core._null(ZodNull, params);
}

const ZodAny = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("ZodAny", (inst, def) => {
    core.$ZodAny.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => processors.anyProcessor(inst, ctx, json, params);
})));
function any() {
    return core._any(ZodAny);
}
const ZodUnknown = /*@__PURE__*/ $constructor("ZodUnknown", (inst, def) => {
    $ZodUnknown.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => unknownProcessor(inst, ctx, json, params);
});
function unknown() {
    return _unknown(ZodUnknown);
}
const ZodNever = /*@__PURE__*/ $constructor("ZodNever", (inst, def) => {
    $ZodNever.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => neverProcessor(inst, ctx, json, params);
});
function never(params) {
    return _never(ZodNever, params);
}
const ZodVoid = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("ZodVoid", (inst, def) => {
    core.$ZodVoid.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => processors.voidProcessor(inst, ctx, json, params);
})));
function schemas_void(params) {
    return core._void(ZodVoid, params);
}

const ZodDate = /*@__PURE__*/ $constructor("ZodDate", (inst, def) => {
    $ZodDate.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => dateProcessor(inst, ctx, json, params);
    inst.min = (value, params) => inst.check(_gte(value, params));
    inst.max = (value, params) => inst.check(_lte(value, params));
}, 
/*@__PURE__*/ derived({
    minDate: (inst) => {
        const { minimum } = aggregateChecks(inst);
        return minimum ? new Date(minimum) : null;
    },
    maxDate: (inst) => {
        const { maximum } = aggregateChecks(inst);
        return maximum ? new Date(maximum) : null;
    },
}, {}));
function schemas_date(params) {
    return core._date(ZodDate, params);
}
const ZodArray = /*@__PURE__*/ $constructor("ZodArray", (inst, def) => {
    _ensureDefaultMemoizer();
    $ZodArray.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => arrayProcessor(inst, ctx, json, params);
    inst.element = def.element;
}, {
    min(n, params) {
        return this.check(_minLength(n, params));
    },
    nonempty(params) {
        return this.check(_minLength(1, params));
    },
    max(n, params) {
        return this.check(_maxLength(n, params));
    },
    length(n, params) {
        return this.check(_length(n, params));
    },
    unwrap() {
        return this.element;
    },
});
function array(element, params) {
    return _array(ZodArray, element, params);
}
// .keyof
function keyof(schema) {
    const shape = schema._zod.def.shape;
    return schemas_enum(Object.keys(shape));
}
const ZodObject = /*@__PURE__*/ $constructor("ZodObject", (inst, def) => {
    _ensureDefaultMemoizer();
    $ZodObjectJIT.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => objectProcessor(inst, ctx, json, params);
    installLazyProp(inst, "shape", (self) => self._zod.def.shape, false);
}, {
    keyof() {
        return schemas_enum(Object.keys(this._zod.def.shape));
    },
    catchall(catchall) {
        // `mergeDefs` rather than a spread: spreading reads `shape`, and resolving it can mint a whole fresh subtree
        return this.clone(mergeDefs(this._zod.def, { catchall: catchall }));
    },
    passthrough() {
        return this.clone(mergeDefs(this._zod.def, { catchall: unknown() }));
    },
    loose() {
        return this.clone(mergeDefs(this._zod.def, { catchall: unknown() }));
    },
    strict() {
        return this.clone(mergeDefs(this._zod.def, { catchall: never() }));
    },
    strip() {
        return this.clone(mergeDefs(this._zod.def, { catchall: undefined }));
    },
    extend(incoming) {
        return extend(this, incoming);
    },
    safeExtend(incoming) {
        return safeExtend(this, incoming);
    },
    merge(other) {
        return merge(this, other);
    },
    pick(mask) {
        return pick(this, mask);
    },
    omit(mask) {
        return omit(this, mask);
    },
    partial(...args) {
        return partial(ZodOptional, this, args[0]);
    },
    exactPartial(...args) {
        return partial(ZodExactOptional, this, args[0], "exactPartial");
    },
    required(...args) {
        return required(ZodNonOptional, this, args[0]);
    },
});
function object(shape, params) {
    const def = {
        type: "object",
        shape: shape ?? {},
        ...normalizeParams(params),
    };
    return new ZodObject(def);
}
// strictObject
function strictObject(shape, params) {
    return new ZodObject({
        type: "object",
        shape,
        catchall: never(),
        ...util.normalizeParams(params),
    });
}
// looseObject
function looseObject(shape, params) {
    return new ZodObject({
        type: "object",
        shape,
        catchall: unknown(),
        ...util.normalizeParams(params),
    });
}
const ZodUnion = /*@__PURE__*/ $constructor("ZodUnion", (inst, def) => {
    $ZodUnion.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => unionProcessor(inst, ctx, json, params);
    inst.options = def.options;
});
function union(options, params) {
    return new ZodUnion({
        type: "union",
        options: options,
        ...normalizeParams(params),
    });
}
const ZodXor = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("ZodXor", (inst, def) => {
    ZodUnion.init(inst, def);
    core.$ZodXor.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => processors.unionProcessor(inst, ctx, json, params);
    inst.options = def.options;
})));
/** Creates an exclusive union (XOR) where exactly one option must match.
 * Unlike regular unions that succeed when any option matches, xor fails if
 * zero or more than one option matches the input. */
function xor(options, params) {
    return new ZodXor({
        type: "union",
        options: options,
        inclusive: false,
        ...util.normalizeParams(params),
    });
}
const ZodDiscriminatedUnion = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("ZodDiscriminatedUnion", (inst, def) => {
    ZodUnion.init(inst, def);
    core.$ZodDiscriminatedUnion.init(inst, def);
})));
function discriminatedUnion(discriminator, options, params) {
    // const [options, params] = args;
    return new ZodDiscriminatedUnion({
        type: "union",
        options: options,
        discriminator,
        ...util.normalizeParams(params),
    });
}
const ZodIntersection = /*@__PURE__*/ $constructor("ZodIntersection", (inst, def) => {
    $ZodIntersection.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => intersectionProcessor(inst, ctx, json, params);
});
function intersection(left, right) {
    return new ZodIntersection({
        type: "intersection",
        left: left,
        right: right,
    });
}
const ZodTuple = /*@__PURE__*/ $constructor("ZodTuple", (inst, def) => {
    _ensureDefaultMemoizer();
    $ZodTuple.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => tupleProcessor(inst, ctx, json, params);
}, {
    rest(rest) {
        return this.clone({
            ...this._zod.def,
            rest: rest,
        });
    },
    partial() {
        const def = this._zod.def;
        // a refinement was authored against the full arity; partialing would run it on a shorter array
        if (def.checks?.length)
            throw new Error(".partial() cannot be used on tuple schemas containing refinements");
        return this.clone({
            ...def,
            items: def.items.map((item) => new ZodOptional({ type: "optional", innerType: item })),
        });
    },
});
function tuple(items, _paramsOrRest, _params) {
    const hasRest = _paramsOrRest instanceof core.$ZodType;
    const params = hasRest ? _params : _paramsOrRest;
    const rest = hasRest ? _paramsOrRest : null;
    return new ZodTuple({
        type: "tuple",
        items: items,
        rest,
        ...util.normalizeParams(params),
    });
}
const ZodRecord = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("ZodRecord", (inst, def) => {
    _ensureDefaultMemoizer();
    core.$ZodRecord.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => processors.recordProcessor(inst, ctx, json, params);
    inst.keyType = def.keyType;
    inst.valueType = def.valueType;
})));
function record(keyType, valueType, params) {
    // v3-compat: z.record(valueType, params?) — defaults keyType to z.string()
    if (!valueType || !valueType._zod) {
        return new ZodRecord({
            type: "record",
            keyType: schemas_string(),
            valueType: keyType,
            ...util.normalizeParams(valueType),
        });
    }
    return new ZodRecord({
        type: "record",
        keyType,
        valueType: valueType,
        ...util.normalizeParams(params),
    });
}
// type alksjf = core.output<core.$ZodRecordKey>;
function partialRecord(keyType, valueType, params) {
    return new ZodRecord({
        type: "record",
        keyType,
        valueType: valueType,
        ...util.normalizeParams(params),
        partial: true,
    });
}
function looseRecord(keyType, valueType, params) {
    return new ZodRecord({
        type: "record",
        keyType,
        valueType: valueType,
        mode: "loose",
        ...util.normalizeParams(params),
    });
}
const ZodMap = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("ZodMap", (inst, def) => {
    _ensureDefaultMemoizer();
    core.$ZodMap.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => processors.mapProcessor(inst, ctx, json, params);
    inst.keyType = def.keyType;
    inst.valueType = def.valueType;
    inst.min = (...args) => inst.check(core._minSize(...args));
    inst.nonempty = (params) => inst.check(core._minSize(1, params));
    inst.max = (...args) => inst.check(core._maxSize(...args));
    inst.size = (...args) => inst.check(core._size(...args));
})));
function map(keyType, valueType, params) {
    return new ZodMap({
        type: "map",
        keyType: keyType,
        valueType: valueType,
        ...util.normalizeParams(params),
    });
}
const ZodSet = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("ZodSet", (inst, def) => {
    _ensureDefaultMemoizer();
    core.$ZodSet.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => processors.setProcessor(inst, ctx, json, params);
    inst.min = (...args) => inst.check(core._minSize(...args));
    inst.nonempty = (params) => inst.check(core._minSize(1, params));
    inst.max = (...args) => inst.check(core._maxSize(...args));
    inst.size = (...args) => inst.check(core._size(...args));
})));
function set(valueType, params) {
    return new ZodSet({
        type: "set",
        valueType: valueType,
        ...util.normalizeParams(params),
    });
}
const ZodEnum = /*@__PURE__*/ $constructor("ZodEnum", (inst, def) => {
    $ZodEnum.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => enumProcessor(inst, ctx, json, params);
    inst.enum = def.entries;
    // reuse the parsed value set so a numeric TS enum's reverse-mapping keys stay out
    inst.options = [...inst._zod.values];
    const keys = new Set(Object.keys(def.entries));
    inst.extract = (values, params) => {
        const newEntries = {};
        for (const value of values) {
            if (keys.has(value)) {
                newEntries[value] = def.entries[value];
            }
            else
                throw new Error(`Key ${value} not found in enum`);
        }
        return new ZodEnum({
            ...def,
            checks: [],
            ...normalizeParams(params),
            entries: newEntries,
        });
    };
    inst.exclude = (values, params) => {
        const newEntries = { ...def.entries };
        for (const value of values) {
            if (keys.has(value)) {
                delete newEntries[value];
            }
            else
                throw new Error(`Key ${value} not found in enum`);
        }
        return new ZodEnum({
            ...def,
            checks: [],
            ...normalizeParams(params),
            entries: newEntries,
        });
    };
});
function schemas_enum(values, params) {
    const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
    return new ZodEnum({
        type: "enum",
        entries,
        ...normalizeParams(params),
    });
}

/** @deprecated This API has been merged into `z.enum()`. Use `z.enum()` instead.
 *
 * ```ts
 * enum Colors { red, green, blue }
 * z.enum(Colors);
 * ```
 */
function nativeEnum(entries, params) {
    return new ZodEnum({
        type: "enum",
        entries,
        ...util.normalizeParams(params),
    });
}
const ZodLiteral = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("ZodLiteral", (inst, def) => {
    core.$ZodLiteral.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => processors.literalProcessor(inst, ctx, json, params);
    inst.values = new Set(def.values);
    Object.defineProperty(inst, "value", {
        get() {
            if (def.values.length > 1) {
                throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
            }
            return def.values[0];
        },
    });
})));
function literal(value, params) {
    return new ZodLiteral({
        type: "literal",
        values: Array.isArray(value) ? value : [value],
        ...util.normalizeParams(params),
    });
}
const ZodFile = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("ZodFile", (inst, def) => {
    core.$ZodFile.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => processors.fileProcessor(inst, ctx, json, params);
    inst.min = (size, params) => inst.check(core._minSize(size, params));
    inst.max = (size, params) => inst.check(core._maxSize(size, params));
    inst.mime = (types, params) => inst.check(core._mime(Array.isArray(types) ? types : [types], params));
})));
function file(params) {
    return core._file(ZodFile, params);
}
const ZodTransform = /*@__PURE__*/ $constructor("ZodTransform", (inst, def) => {
    _ensureDefaultMemoizer();
    $ZodTransform.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => transformProcessor(inst, ctx, json, params);
    inst._zod.parse = (payload, _ctx) => {
        if (_ctx.direction === "backward") {
            throw new $ZodEncodeError(inst.constructor.name);
        }
        payload.addIssue = (issue) => {
            if (typeof issue === "string") {
                payload.issues.push(util_issue(issue, payload.value, def));
            }
            else {
                // for Zod 3 backwards compatibility
                const _issue = issue;
                if (_issue.fatal)
                    _issue.continue = false;
                _issue.code ?? (_issue.code = "custom");
                if (!("input" in _issue))
                    _issue.input = payload.value;
                _issue.inst ?? (_issue.inst = inst);
                // _issue.continue ??= true;
                payload.issues.push(util_issue(_issue));
            }
        };
        const output = def.transform(payload.value, payload);
        if (output instanceof Promise) {
            return output.then((output) => {
                payload.value = output;
                return payload;
            });
        }
        payload.value = output;
        return payload;
    };
});
function transform(fn) {
    return new ZodTransform({
        type: "transform",
        transform: fn,
    });
}
const ZodOptional = /*@__PURE__*/ $constructor("ZodOptional", (inst, def) => {
    $ZodOptional.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
    inst.unwrap = () => inst._zod.def.innerType;
});
function optional(innerType) {
    return new ZodOptional({
        type: "optional",
        innerType: innerType,
    });
}
const ZodExactOptional = /*@__PURE__*/ $constructor("ZodExactOptional", (inst, def) => {
    $ZodExactOptional.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
    inst.unwrap = () => inst._zod.def.innerType;
});
function exactOptional(innerType) {
    return new ZodExactOptional({
        type: "optional",
        innerType: innerType,
    });
}
const ZodNullable = /*@__PURE__*/ $constructor("ZodNullable", (inst, def) => {
    $ZodNullable.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => nullableProcessor(inst, ctx, json, params);
    inst.unwrap = () => inst._zod.def.innerType;
});
function nullable(innerType) {
    return new ZodNullable({
        type: "nullable",
        innerType: innerType,
    });
}
// nullish
function schemas_nullish(innerType) {
    return optional(nullable(innerType));
}
const ZodDefault = /*@__PURE__*/ $constructor("ZodDefault", (inst, def) => {
    $ZodDefault.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => defaultProcessor(inst, ctx, json, params);
    inst.unwrap = () => inst._zod.def.innerType;
    inst.removeDefault = inst.unwrap;
});
function schemas_default(innerType, defaultValue) {
    return new ZodDefault({
        type: "default",
        innerType: innerType,
        get defaultValue() {
            return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
        },
    });
}
const ZodPrefault = /*@__PURE__*/ $constructor("ZodPrefault", (inst, def) => {
    $ZodPrefault.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => prefaultProcessor(inst, ctx, json, params);
    inst.unwrap = () => inst._zod.def.innerType;
});
function prefault(innerType, defaultValue) {
    return new ZodPrefault({
        type: "prefault",
        innerType: innerType,
        get defaultValue() {
            return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
        },
    });
}
const ZodNonOptional = /*@__PURE__*/ $constructor("ZodNonOptional", (inst, def) => {
    $ZodNonOptional.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => nonoptionalProcessor(inst, ctx, json, params);
    inst.unwrap = () => inst._zod.def.innerType;
});
function nonoptional(innerType, params) {
    return new ZodNonOptional({
        type: "nonoptional",
        innerType: innerType,
        ...normalizeParams(params),
    });
}
const ZodSuccess = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("ZodSuccess", (inst, def) => {
    core.$ZodSuccess.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => processors.successProcessor(inst, ctx, json, params);
    inst.unwrap = () => inst._zod.def.innerType;
})));
function success(innerType) {
    return new ZodSuccess({
        type: "success",
        innerType: innerType,
    });
}
const ZodCatch = /*@__PURE__*/ $constructor("ZodCatch", (inst, def) => {
    $ZodCatch.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => catchProcessor(inst, ctx, json, params);
    inst.unwrap = () => inst._zod.def.innerType;
    inst.removeCatch = inst.unwrap;
});
function schemas_catch(innerType, catchValue) {
    return new ZodCatch({
        type: "catch",
        innerType: innerType,
        catchValue: (typeof catchValue === "function" ? catchValue : constantCatch(catchValue)),
    });
}

const ZodNaN = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("ZodNaN", (inst, def) => {
    core.$ZodNaN.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => processors.nanProcessor(inst, ctx, json, params);
})));
function nan(params) {
    return core._nan(ZodNaN, params);
}
const ZodPipe = /*@__PURE__*/ $constructor("ZodPipe", (inst, def) => {
    $ZodPipe.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => pipeProcessor(inst, ctx, json, params);
    inst.in = def.in;
    inst.out = def.out;
});
function pipe(in_, out) {
    return new ZodPipe({
        type: "pipe",
        in: in_,
        out: out,
        // ...util.normalizeParams(params),
    });
}
const ZodCodec = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("ZodCodec", (inst, def) => {
    ZodPipe.init(inst, def);
    core.$ZodCodec.init(inst, def);
})));
function codec(in_, out, params) {
    return new ZodCodec({
        type: "pipe",
        in: in_,
        out: out,
        transform: params.decode,
        reverseTransform: params.encode,
    });
}
function invertCodec(codec) {
    const def = codec._zod.def;
    return new ZodCodec({
        type: "pipe",
        in: def.out,
        out: def.in,
        transform: def.reverseTransform,
        reverseTransform: def.transform,
    });
}
const ZodPreprocess = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("ZodPreprocess", (inst, def) => {
    ZodPipe.init(inst, def);
    core.$ZodPreprocess.init(inst, def);
})));
const ZodReadonly = /*@__PURE__*/ $constructor("ZodReadonly", (inst, def) => {
    $ZodReadonly.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => readonlyProcessor(inst, ctx, json, params);
    inst.unwrap = () => inst._zod.def.innerType;
});
function readonly(innerType) {
    return new ZodReadonly({
        type: "readonly",
        innerType: innerType,
    });
}
const ZodTemplateLiteral = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("ZodTemplateLiteral", (inst, def) => {
    core.$ZodTemplateLiteral.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => processors.templateLiteralProcessor(inst, ctx, json, params);
})));
function templateLiteral(parts, params) {
    return new ZodTemplateLiteral({
        type: "template_literal",
        parts,
        ...util.normalizeParams(params),
    });
}
const ZodLazy = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("ZodLazy", (inst, def) => {
    core.$ZodLazy.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => processors.lazyProcessor(inst, ctx, json, params);
    inst.unwrap = () => inst._zod.def.getter();
})));
function lazy(getter) {
    return new ZodLazy({
        type: "lazy",
        getter: getter,
    });
}
const ZodPromise = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("ZodPromise", (inst, def) => {
    core.$ZodPromise.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => processors.promiseProcessor(inst, ctx, json, params);
    inst.unwrap = () => inst._zod.def.innerType;
})));
function schemas_promise(innerType) {
    return new ZodPromise({
        type: "promise",
        innerType: innerType,
    });
}
const ZodFunction = /*@__PURE__*/ (/* unused pure expression or super */ null && (core.$constructor("ZodFunction", (inst, def) => {
    core.$ZodFunction.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => processors.functionProcessor(inst, ctx, json, params);
})));
function _function(params) {
    return new ZodFunction({
        type: "function",
        input: Array.isArray(params?.input) ? tuple(params?.input) : (params?.input ?? array(unknown())),
        output: params?.output ?? unknown(),
    });
}

const ZodCustom = /*@__PURE__*/ $constructor("ZodCustom", (inst, def) => {
    $ZodCustom.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => customProcessor(inst, ctx, json, params);
});
// custom checks
function check(fn) {
    const ch = new core.$ZodCheck({
        check: "custom",
        // ...util.normalizeParams(params),
    });
    ch._zod.check = fn;
    return ch;
}
function custom(fn, _params) {
    return core._custom(ZodCustom, fn ?? (() => true), _params);
}
function refine(fn, _params = {}) {
    return _refine(ZodCustom, fn, _params);
}
// superRefine
function superRefine(fn, params) {
    return _superRefine(fn, params);
}
// Re-export describe and meta from core
const schemas_describe = describe;
const schemas_meta = meta;
const ZodInstanceOf = /*@__PURE__*/ $constructor("ZodInstanceOf", (inst, def) => {
    ZodCustom.init(inst, def);
}, {
    properties(shape, params) {
        // asserts in place, so the narrowed output type is truthful without a wrapper
        return this.check(_properties(shape, params));
    },
});
function _instanceof(cls, params = {}) {
    const inst = new ZodInstanceOf({
        type: "custom",
        check: "custom",
        fn: (data) => data instanceof cls,
        abort: true,
        ...util.normalizeParams(params),
    });
    inst._zod.bag.Class = cls;
    // Override check to emit invalid_type instead of custom
    inst._zod.check = (payload) => {
        if (!(payload.value instanceof cls)) {
            payload.issues.push({
                code: "invalid_type",
                expected: cls.name,
                input: payload.value,
                inst,
                path: [...(inst._zod.def.path ?? [])],
            });
        }
    };
    return inst;
}

// stringbool
const stringbool = (...args) => core._stringbool({
    Codec: ZodCodec,
    Boolean: ZodBoolean,
    String: ZodString,
}, ...args);
function json(params) {
    const jsonSchema = lazy(() => {
        return union([schemas_string(params), schemas_number(), schemas_boolean(), schemas_null(), array(jsonSchema), record(schemas_string(), jsonSchema)]);
    });
    return jsonSchema;
}
// preprocess
function preprocess(fn, schema) {
    return new ZodPreprocess({
        type: "pipe",
        in: transform(fn),
        out: schema,
    });
}

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/config/schema.ts


const VALID_CHECKS = [
    'placeholder-content',
    'safety-boundaries',
    'validation-commands',
    'final-reporting',
    'risky-language',
    'command-alignment',
    'contradictions',
    'hidden-characters',
    'secrets',
    'broken-references',
    'file-size',
    'agent-config',
    'frontmatter',
];
const OUTPUT_FORMATS = ['terminal', 'json', 'markdown', 'sarif', 'github'];
const AcdRcSchema = object({
    audit: object({
        repoPath: schemas_string().optional(),
        output: schemas_string().optional(),
        json: schemas_boolean().optional(),
        format: schemas_enum(OUTPUT_FORMATS).optional(),
        failOn: schemas_enum(['low', 'medium', 'high']).optional(),
        minScore: schemas_number().int().min(0).max(100).optional(),
        baseline: schemas_string().optional(),
    })
        .optional(),
    rules: object({
        ignoreFiles: array(schemas_string().superRefine((pattern, ctx) => {
            const reason = unsafeIgnorePatternReason(pattern);
            if (reason)
                ctx.addIssue({ code: 'custom', message: `pattern ${reason}` });
        }))
            .optional(),
        disabledChecks: array(schemas_enum(VALID_CHECKS)).optional(),
        allowedMissingScripts: array(schemas_string()).optional(),
        maxFileBytes: schemas_number().int().positive().optional(),
    })
        .optional(),
});

;// CONCATENATED MODULE: ./vendor/agent-context-doctor/src/config/loadConfig.ts






function isMissing(err) {
    const code = err?.code;
    return code === 'ENOENT' || code === 'ENOTDIR';
}
async function loadConfig(searchDir) {
    const configPath = external_node_path_default().join(searchDir, '.acdrc');
    // `.acdrc` comes from the audited repository, so a symlink must not let it
    // read a file elsewhere on disk, the same as context files.
    let realConfig;
    try {
        realConfig = await promises_default().realpath(configPath);
    }
    catch (err) {
        // No .acdrc present (or a dangling link) — not an error
        if (isMissing(err))
            return null;
        throw err;
    }
    const realDir = await promises_default().realpath(searchDir).catch(() => external_node_path_default().resolve(searchDir));
    if (!fs_safePath_isWithin(realDir, realConfig)) {
        throw new Error(`.acdrc at ${configPath} links outside ${searchDir}; refusing to read it`);
    }
    const read = await readTextFile_readRegularFile(realConfig, readTextFile_MAX_TEXT_FILE_BYTES);
    if (read.status === 'missing')
        return null;
    if (read.status === 'error')
        throw read.error;
    if (read.status === 'not-a-file') {
        throw new Error(`.acdrc at ${configPath} is not a regular file`);
    }
    if (read.status === 'too-large') {
        throw new Error(`.acdrc at ${configPath} is larger than ${readTextFile_MAX_TEXT_FILE_BYTES} bytes`);
    }
    const raw = read.content;
    let parsed;
    try {
        parsed = JSON.parse(raw);
    }
    catch (err) {
        throw new Error(`.acdrc at ${configPath} ${jsonError_describeJsonError(raw, err)}`);
    }
    const result = AcdRcSchema.safeParse(parsed);
    if (!result.success) {
        // Zod v4 uses `issues`; v3 used `errors` — support both
        const issues = result.error.issues ?? result.error.errors ?? [];
        const messages = issues.map((e) => `  ${e.path.join('.')}: ${e.message}`).join('\n');
        throw new Error(`.acdrc at ${configPath} failed validation:\n${messages}`);
    }
    return result.data;
}

;// CONCATENATED MODULE: ./integrations/src/runtime/errors.ts
class AuditRuntimeError extends Error {
    code;
    constructor(code, message) {
        super(message);
        this.code = code;
        this.name = 'AuditRuntimeError';
    }
    toJSON() {
        return { code: this.code, message: this.message };
    }
}
/** A structured error for any thrown value, without its stack. */
function toAuditError(error, fallback = 'ENGINE_FAILED') {
    if (error instanceof AuditRuntimeError)
        return error.toJSON();
    const message = error instanceof Error ? error.message : String(error);
    return { code: fallback, message };
}

;// CONCATENATED MODULE: ./integrations/src/runtime/engines.ts








/**
 * The readiness score for `dir`, in the shape `ark audit --json` prints. Calls
 * the engine's library entry point rather than its CLI, so the audited
 * repository's `.arkrc` cannot redirect the audit or name a report file, and
 * no score history is written.
 */
async function runReadiness(dir) {
    return toAuditJson(await auditRepo(dir));
}
/**
 * A hostile repository could link `.acdrc` to a file elsewhere on disk. The
 * doctor refuses such a link itself; this check refuses it before the engine
 * opens anything, so the guarantee does not rest on one layer, and its error
 * names no absolute path. It costs one `lstat`.
 */
async function assertConfigInside(dir) {
    const file = external_node_path_default().join(dir, '.acdrc');
    const link = await (0,promises_namespaceObject.lstat)(file).catch(() => null);
    if (!link?.isSymbolicLink())
        return;
    const target = await (0,promises_namespaceObject.realpath)(file).catch(() => null);
    // A dangling link is left to the engine, which treats it as no config file.
    if (target === null)
        return;
    const rel = external_node_path_default().relative(dir, target);
    if (rel === '..' || rel.startsWith(`..${(external_node_path_default()).sep}`) || external_node_path_default().isAbsolute(rel)) {
        throw new AuditRuntimeError('CONFIG_INVALID', '.acdrc is a symbolic link that leads outside the audited directory; it was not read.');
    }
}
/**
 * The doctor masks credentials in every issue's message, recommendation, and
 * evidence before it returns. It does not mask the id, which can carry a link
 * target or script name from an instruction file, so the id goes through the
 * doctor's own redactor here. Running it again over the other fields would
 * repeat the engine's last pass with the same patterns; instead the
 * integration tests check every field for planted credentials, so an engine
 * update that drops its masking fails CI. `file` is left as is: it is a path
 * in the audited tree, needed to find the file. Returns the number of ids
 * changed.
 */
function redactIssueText(report) {
    let count = 0;
    for (const issue of report.issues) {
        const clean = redactSecrets(issue.id);
        if (clean === issue.id)
            continue;
        issue.id = clean;
        count++;
    }
    return count;
}
/**
 * The context-file audit for `dir`, in the shape `acd audit --json` prints.
 * Rules from the audited repository's `.acdrc` (ignored files, disabled checks,
 * allowed scripts, size limit) apply, as they do for the engine's CLI. Its
 * output, baseline, and repoPath settings are not used: nothing is written and
 * the audited path is the one the caller chose.
 */
async function runContext(dir) {
    await assertConfigInside(dir);
    let config;
    try {
        config = await loadConfig(dir);
    }
    catch (err) {
        throw new AuditRuntimeError('CONFIG_INVALID', err instanceof Error ? err.message : String(err));
    }
    const report = await auditRepo_auditRepo(dir, {
        ignoreFiles: config?.rules?.ignoreFiles,
        disabledChecks: config?.rules?.disabledChecks,
        allowedMissingScripts: config?.rules?.allowedMissingScripts,
        maxFileBytes: config?.rules?.maxFileBytes,
    });
    const redactions = redactIssueText(report);
    return { configApplied: config?.rules !== undefined, redactions, report };
}

;// CONCATENATED MODULE: ./integrations/src/runtime/paths.ts



const paths_MAX_PATH_LENGTH = 4096;
// Control characters cannot appear in a path someone meant to type.
const paths_CONTROL_CHARS = /[\u0000-\u001f\u007f]/;
function paths_isWithin(root, candidate) {
    const rel = external_node_path_default().relative(root, candidate);
    if (rel === '')
        return true;
    return rel !== '..' && !rel.startsWith(`..${(external_node_path_default()).sep}`) && !external_node_path_default().isAbsolute(rel);
}
async function realDirectory(input, base) {
    const absolute = external_node_path_default().resolve(base, input);
    let resolved;
    try {
        resolved = await (0,promises_namespaceObject.realpath)(absolute);
    }
    catch (err) {
        const code = err.code;
        if (code === 'ENOENT' || code === 'ENOTDIR') {
            throw new AuditRuntimeError('PATH_NOT_FOUND', `No such directory: ${absolute}`);
        }
        throw new AuditRuntimeError('INVALID_PATH', `Cannot resolve ${absolute}: ${String(code)}`);
    }
    if (!(await (0,promises_namespaceObject.stat)(resolved)).isDirectory()) {
        throw new AuditRuntimeError('NOT_A_DIRECTORY', `Not a directory: ${absolute}`);
    }
    return resolved;
}
/**
 * Resolve the directory to audit. Symlinks are resolved before the root check,
 * so a link inside an authorized root cannot point the audit somewhere else.
 */
async function resolveTarget(input, options = {}) {
    if (typeof input !== 'string' || input.length === 0) {
        throw new AuditRuntimeError('INVALID_PATH', 'The path is empty.');
    }
    if (input.length > paths_MAX_PATH_LENGTH || paths_CONTROL_CHARS.test(input)) {
        throw new AuditRuntimeError('INVALID_PATH', 'The path is too long or contains control characters.');
    }
    const cwd = options.cwd ?? process.cwd();
    const roots = options.roots ?? [];
    const outside = () => new AuditRuntimeError('OUTSIDE_ROOT', `The path is outside the authorized roots: ${roots.join(', ')}`);
    // Check the path as written before touching the filesystem, so an answer
    // never reveals whether something exists outside the roots.
    const realRoots = await Promise.all(roots.map((r) => realDirectory(r, cwd)));
    const lexical = external_node_path_default().resolve(cwd, input);
    if (roots.length > 0 && !roots.some((r) => paths_isWithin(external_node_path_default().resolve(cwd, r), lexical))) {
        if (!realRoots.some((r) => paths_isWithin(r, lexical)))
            throw outside();
    }
    const target = await realDirectory(input, cwd);
    if (options.requireCanonical && target !== lexical) {
        throw new AuditRuntimeError('OUTSIDE_ROOT', 'The path changed after it was authorized.');
    }
    // A symlink inside a root can still lead outside it; the message does not
    // say where it leads.
    if (roots.length > 0 && !realRoots.some((root) => paths_isWithin(root, target)))
        throw outside();
    return target;
}

;// CONCATENATED MODULE: ./integrations/src/runtime/provenance.generated.ts
// Generated by integrations/scripts/provenance.mjs. Do not edit.
const ENGINE_PROVENANCE = {
    "readiness": {
        "name": "agent-readiness-kit",
        "version": "1.0.0",
        "commit": "daa257b103b63a0a006c94421f770ab19198c9e9",
        "repository": "https://github.com/alipajand/agent-readiness-kit"
    },
    "context": {
        "name": "agent-context-doctor",
        "version": "1.0.0",
        "commit": "a60f53e044e7714875dc6929fc3f5b55ed25e349",
        "repository": "https://github.com/alipajand/agent-context-doctor"
    }
};

;// CONCATENATED MODULE: ./integrations/src/runtime/version.ts
/** Version of the integrations runtime (CLI, skill script, MCP server). */
const TOOL_VERSION = '0.1.2';

;// CONCATENATED MODULE: ./integrations/src/runtime/audit.ts





async function audit_settle(run, fn) {
    if (!run)
        return { status: 'skipped' };
    try {
        return { status: 'ok', result: await fn() };
    }
    catch (err) {
        return { status: 'error', error: toAuditError(err) };
    }
}
/**
 * Run the selected engines on one directory. A failure in one engine is
 * reported in its own section and does not stop the other. Path problems throw
 * an `AuditRuntimeError` because neither engine could run.
 */
async function auditDirectory(input, options = {}) {
    const target = await resolveTarget(input, options);
    const selected = new Set(options.engines ?? ['readiness', 'context']);
    // Sequential on purpose: both engines walk the same tree, and running them
    // one after the other keeps peak memory and open file handles lower.
    const readiness = await audit_settle(selected.has('readiness'), () => runReadiness(target));
    const context = await audit_settle(selected.has('context'), () => runContext(target));
    return {
        schemaVersion: 1,
        tool: { name: 'agent-readiness', version: TOOL_VERSION },
        target,
        engines: ENGINE_PROVENANCE,
        readiness,
        context,
    };
}
/** True when every engine that was asked to run produced a result. */
function isComplete(report) {
    return report.readiness.status !== 'error' && report.context.status !== 'error';
}

;// CONCATENATED MODULE: ./integrations/src/runtime/nodeVersion.ts
const MIN_NODE = [22, 12];
/** The engines need Node.js 22.12 or later; say so instead of failing obscurely. */
function unsupportedNode(version = process.versions.node) {
    const [major, minor] = version.split('.').map(Number);
    if (major > MIN_NODE[0] || (major === MIN_NODE[0] && minor >= MIN_NODE[1]))
        return undefined;
    return `agent-readiness needs Node.js ${MIN_NODE.join('.')} or later; this is Node.js ${version}.`;
}

;// CONCATENATED MODULE: ./integrations/src/runtime/json.ts
// Characters JSON.stringify leaves raw that can still mislead a terminal or a
// reader: C1 controls (including the 8-bit CSI), bidirectional controls,
// zero-width and other invisible characters, line and paragraph separators,
// variation selectors, and Unicode tag characters. Kept as numeric ranges so
// no invisible character appears in this source file.
const UNSAFE_RANGES = [
    [0x0080, 0x009f], // C1 controls
    [0x00ad, 0x00ad], // soft hyphen
    [0x034f, 0x034f], // combining grapheme joiner
    [0x061c, 0x061c], // Arabic letter mark
    [0x115f, 0x1160], // Hangul fillers
    [0x17b4, 0x17b5], // Khmer inherent vowels
    [0x180e, 0x180e], // Mongolian vowel separator
    [0x200b, 0x200f], // zero-width characters, LRM, RLM
    [0x2028, 0x202e], // line/paragraph separators, bidi embeddings and overrides
    [0x2060, 0x206f], // word joiner, invisible operators, bidi isolates
    [0x3164, 0x3164], // Hangul filler
    [0xfe00, 0xfe0f], // variation selectors
    [0xfeff, 0xfeff], // zero-width no-break space
    [0xffa0, 0xffa0], // halfwidth Hangul filler
    [0xfff9, 0xfffb], // interlinear annotation controls
    [0xe0000, 0xe007f], // tag characters
    [0xe0100, 0xe01ef], // variation selectors supplement
];
function isUnsafe(codePoint) {
    return UNSAFE_RANGES.some(([start, end]) => codePoint >= start && codePoint <= end);
}
function replaceUnsafe(text, replace) {
    let out = '';
    for (const char of text) {
        const codePoint = char.codePointAt(0) ?? 0;
        out += isUnsafe(codePoint) ? replace(char, codePoint) : char;
    }
    return out;
}
function escapeUnits(char) {
    let out = '';
    for (let i = 0; i < char.length; i++) {
        out += `\\u${char.charCodeAt(i).toString(16).padStart(4, '0')}`;
    }
    return out;
}
/** JSON.stringify, with characters that could hide or reorder text escaped; the value is unchanged. */
function safeJson(value, space) {
    return replaceUnsafe(JSON.stringify(value, null, space), escapeUnits);
}
/** Replace the characters above with visible `<U+XXXX>` markers. */
function markInvisible(text) {
    return replaceUnsafe(text, (_char, codePoint) => `<U+${codePoint.toString(16).toUpperCase().padStart(4, '0')}>`);
}

;// CONCATENATED MODULE: ./integrations/src/runtime/report.ts


const SEVERITY_RANK = { high: 0, medium: 1, low: 2 };
/** Context issues ordered high → low, keeping the engine's order within a severity. */
function rankContextIssues(issues) {
    return issues
        .map((issue, index) => ({ issue, index }))
        .sort((a, b) => SEVERITY_RANK[a.issue.severity] - SEVERITY_RANK[b.issue.severity] || a.index - b.index)
        .map(({ issue }) => issue);
}
/**
 * Readiness checks that did not pass: failures before warnings, then the
 * categories missing the most points first. The kit reports pass/warn/fail,
 * not a severity, so no severity is invented here.
 */
function rankReadinessGaps(result) {
    const gaps = [];
    let order = 0;
    for (const c of result.categories) {
        for (const f of c.findings) {
            if (f.status === 'pass')
                continue;
            gaps.push({
                categoryId: c.id,
                category: c.label,
                status: f.status,
                message: f.message,
                files: f.files ?? [],
                pointsMissing: c.maxScore - c.score,
                order: order++,
            });
        }
    }
    return gaps
        .sort((a, b) => (a.status === b.status ? 0 : a.status === 'fail' ? -1 : 1) ||
        b.pointsMissing - a.pointsMissing ||
        a.order - b.order)
        .map(({ order: _order, ...gap }) => gap);
}
/**
 * Untrusted text made safe to show on one line: control characters become
 * spaces, and invisible or reordering characters become `<U+XXXX>` markers.
 */
function display(value) {
    return markInvisible(toDisplayText(value));
}
// Markdown punctuation that could start a link, image, emphasis, HTML, code
// span, or table cell when it comes from an audited file.
const MARKDOWN_SPECIAL = /[\\`*_[\]<>|&~#!]/g;
// Text GitHub would turn into a link by itself (GFM extended autolinks: URLs,
// `www.` hosts, and email addresses).
const AUTOLINK = /(?:[a-z][a-z0-9+.-]*:\/\/|www\.)[^\s]*|[\w.+-]+@[\w-]+(?:\.[\w-]+)+/gi;
function escapeText(value) {
    return value.replace(MARKDOWN_SPECIAL, (ch) => ch === '<' ? '&lt;' : ch === '>' ? '&gt;' : ch === '&' ? '&amp;' : `\\${ch}`);
}
/**
 * A code span: its content is shown literally and never becomes a link.
 *
 * Only `|` is escaped, so the span cannot end a table cell. Backslashes are
 * left alone: a code span shows them as typed, and a GFM table treats every
 * `\|` as an escaped pipe whatever precedes it, so `a\` followed by `|`
 * renders as `a\|` in one cell.
 */
function codeSpan(value) {
    const longest = Math.max(0, ...(value.match(/`+/g) ?? []).map((run) => run.length));
    const fence = '`'.repeat(longest + 1);
    return `${fence} ${value.split('|').join('\\|')} ${fence}`;
}
/**
 * Untrusted text for one line of Markdown: no control, invisible, or markup
 * characters, and URL-like text shown as code so it is not clickable.
 */
function md(value) {
    const text = display(value);
    let out = '';
    let last = 0;
    for (const match of text.matchAll(AUTOLINK)) {
        out += escapeText(text.slice(last, match.index)) + codeSpan(match[0]);
        last = match.index + match[0].length;
    }
    return out + escapeText(text.slice(last));
}
function engineLine(info) {
    return `${info.name} ${info.version} (${info.commit.slice(0, 7)})`;
}
function outcomeLine(outcome) {
    if (outcome.status === 'ok')
        return 'completed';
    if (outcome.status === 'skipped')
        return 'not run';
    return `failed: ${outcome.error.code}`;
}
/** A Markdown summary of the combined report. Every audited string is escaped. */
function formatMarkdown(report, options = {}) {
    const max = options.maxItems ?? 25;
    const out = [];
    const { readiness, context } = report;
    out.push('# Agent readiness audit', '');
    out.push(`- Target: ${md(report.target)}`);
    out.push(`- Readiness engine: ${md(engineLine(report.engines.readiness))}`);
    out.push(`- Context engine: ${md(engineLine(report.engines.context))}`);
    out.push(`- Runtime: ${report.tool.name} ${report.tool.version}`, '');
    out.push('## Scores', '');
    out.push('| Audit | Score | Status |', '| --- | --- | --- |');
    out.push(`| Readiness (agent-readiness-kit) | ${readiness.status === 'ok' ? `${readiness.result.score}/100` : 'none'} | ${outcomeLine(readiness)} |`);
    out.push(`| Context files (agent-context-doctor) | ${context.status === 'ok'
        ? `${context.result.report.score.total}/100 (${context.result.report.score.grade})`
        : 'none'} | ${outcomeLine(context)} |`);
    out.push('');
    const errors = [];
    if (readiness.status === 'error') {
        errors.push(`- Readiness: ${readiness.error.code}: ${md(readiness.error.message)}`);
    }
    if (context.status === 'error') {
        errors.push(`- Context files: ${context.error.code}: ${md(context.error.message)}`);
    }
    if (errors.length > 0) {
        out.push('## Errors', '', 'No score is reported for an engine that failed.', '', ...errors, '');
    }
    if (readiness.status === 'ok') {
        const r = readiness.result;
        out.push('## Readiness categories', '');
        if (r.ecosystems && r.ecosystems.length > 0) {
            out.push(`Detected ecosystems: ${r.ecosystems.map(md).join(', ')}`, '');
        }
        out.push('| Category | Score |', '| --- | --- |');
        for (const c of r.categories)
            out.push(`| ${md(c.label)} | ${c.score}/${c.maxScore} |`);
        out.push('');
        const gaps = rankReadinessGaps(r);
        out.push(`## Readiness checks not passing (${gaps.length})`, '');
        if (gaps.length === 0)
            out.push('Every readiness check passed.');
        for (const g of gaps.slice(0, max)) {
            const files = g.files.length > 0 ? ` (${g.files.slice(0, 5).map(md).join(', ')})` : '';
            out.push(`- ${g.status} · ${md(g.category)}: ${md(g.message)}${files}`);
        }
        if (gaps.length > max)
            out.push(`- ${gaps.length - max} more in the JSON report`);
        out.push('');
    }
    if (context.status === 'ok') {
        const c = context.result.report;
        const issues = rankContextIssues(c.issues);
        out.push(`## Context file issues (${c.summary.high} high, ${c.summary.medium} medium, ${c.summary.low} low)`, '');
        out.push(`Files checked: ${c.summary.fileCount}${context.result.configApplied ? ' (rules from the repository .acdrc applied)' : ''}`, '');
        if (issues.length === 0)
            out.push('No issues found.');
        for (const i of issues.slice(0, max)) {
            const where = i.line !== undefined ? `${i.file}:${i.line}` : i.file;
            out.push(`- ${i.severity} · ${md(where)} · ${md(i.id)}: ${md(i.message)}`);
            out.push(`  - Recommendation: ${md(i.recommendation)}`);
        }
        if (issues.length > max)
            out.push(`- ${issues.length - max} more in the JSON report`);
        out.push('');
    }
    if (readiness.status === 'ok' && readiness.result.recommendations.length > 0) {
        const recs = readiness.result.recommendations;
        out.push('## Readiness recommendations', '');
        for (const rec of recs.slice(0, max))
            out.push(`- ${md(rec)}`);
        if (recs.length > max)
            out.push(`- ${recs.length - max} more in the JSON report`);
        out.push('');
    }
    out.push('Scores and findings come from the deterministic engines listed above. Nothing was written to the audited repository.');
    return out.join('\n') + '\n';
}

;// CONCATENATED MODULE: ./integrations/src/runtime/types.ts
const ENGINE_KEYS = ['readiness', 'context'];

;// CONCATENATED MODULE: ./integrations/src/cli.ts










const USAGE = `Usage: agent-readiness audit [path] [options]

Audit a repository for AI coding agents with the bundled agent-readiness-kit
(readiness score) and agent-context-doctor (instruction and config files).
Read-only: nothing is written to the audited repository and nothing is sent
over the network.

Options:
  --format <markdown|json>   Output format (default: markdown)
  --only <readiness|context> Run one engine instead of both
  --max-items <n>            Items per Markdown section (default: 25)
  --timeout <seconds>        Stop after this many seconds (default: 300)
  --canonical                Fail unless the path is absolute and contains no symlink
  -h, --help                 Show this help

Other commands:
  agent-readiness version    Print the runtime and engine versions as JSON

Exit codes: 0 audit completed, 1 audit or path error, 2 usage error.
`;
class UsageError extends Error {
}
function positiveInt(value, name, fallback) {
    if (value === undefined)
        return fallback;
    const n = Number(value);
    if (!Number.isInteger(n) || n < 1 || n > 100_000) {
        throw new UsageError(`--${name} must be a whole number from 1 to 100000.`);
    }
    return n;
}
async function main(argv) {
    const runtimeProblem = unsupportedNode();
    if (runtimeProblem) {
        process.stderr.write(`${runtimeProblem}\n`);
        return 1;
    }
    let parsed;
    try {
        parsed = (0,external_node_util_namespaceObject.parseArgs)({
            args: argv,
            allowPositionals: true,
            options: {
                format: { type: 'string' },
                only: { type: 'string' },
                'max-items': { type: 'string' },
                timeout: { type: 'string' },
                canonical: { type: 'boolean' },
                help: { type: 'boolean', short: 'h' },
            },
        });
    }
    catch (err) {
        process.stderr.write(`${err.message}\n\n${USAGE}`);
        return 2;
    }
    const { values, positionals } = parsed;
    const [command, ...rest] = positionals;
    if (values.help || command === 'help' || command === undefined) {
        process.stdout.write(USAGE);
        return command === undefined && !values.help ? 2 : 0;
    }
    if (command === 'version') {
        if (rest.length > 0) {
            process.stderr.write(`version takes no arguments.\n\n${USAGE}`);
            return 2;
        }
        process.stdout.write(JSON.stringify({ version: TOOL_VERSION, engines: ENGINE_PROVENANCE }, null, 2) + '\n');
        return 0;
    }
    if (command !== 'audit') {
        process.stderr.write(`Unknown command: ${JSON.stringify(command)}\n\n${USAGE}`);
        return 2;
    }
    let format;
    let engines;
    let maxItems;
    let timeoutSeconds;
    try {
        if (rest.length > 1)
            throw new UsageError('Give at most one path.');
        const f = values.format ?? 'markdown';
        if (f !== 'markdown' && f !== 'json')
            throw new UsageError('--format must be markdown or json.');
        format = f;
        if (values.only !== undefined && !ENGINE_KEYS.includes(values.only)) {
            throw new UsageError('--only must be readiness or context.');
        }
        engines = values.only ? [values.only] : [...ENGINE_KEYS];
        maxItems = positiveInt(values['max-items'], 'max-items', 25);
        timeoutSeconds = positiveInt(values.timeout, 'timeout', 300);
    }
    catch (err) {
        if (!(err instanceof UsageError))
            throw err;
        process.stderr.write(`${err.message}\n\n${USAGE}`);
        return 2;
    }
    const timer = setTimeout(() => {
        const error = {
            code: 'TIMEOUT',
            message: `The audit did not finish within ${timeoutSeconds} seconds.`,
        };
        if (format === 'json')
            process.stdout.write(safeJson({ error }, 2) + '\n');
        else
            process.stderr.write(`${error.message}\n`);
        process.exit(1);
    }, timeoutSeconds * 1000);
    try {
        const report = await auditDirectory(rest[0] ?? '.', {
            engines,
            requireCanonical: values.canonical === true,
        });
        process.stdout.write(format === 'json' ? safeJson(report, 2) + '\n' : formatMarkdown(report, { maxItems }));
        return isComplete(report) ? 0 : 1;
    }
    catch (err) {
        const error = toAuditError(err);
        if (format === 'json')
            process.stdout.write(safeJson({ error }, 2) + '\n');
        else
            process.stderr.write(`Audit failed (${error.code}): ${toDisplayText(error.message)}\n`);
        return 1;
    }
    finally {
        clearTimeout(timer);
    }
}
main(process.argv.slice(2)).then((code) => {
    process.exitCode = code;
}, (err) => {
    process.stderr.write(`Unexpected error: ${err instanceof Error ? err.message : String(err)}\n`);
    process.exitCode = 1;
});

var __webpack_exports__main = __webpack_exports__.i;
export { __webpack_exports__main as main };
