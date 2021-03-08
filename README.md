# sucrier.js
**sucrier.js** is a javascript utility library inspired by [sugar.js](https://sugarjs.com/).

## Array

### Static methods

#### .isArray ( *Any value* )

### Instance methods

#### .at ( *Number i1* [ , ... , *Number iN* ] )

#### .avg ( [ Function *getter* [ , Any *context* = *root* ] )

## Boolean

### Static methods

#### .isBoolean ( *Any value* )

#### .and ( Boolean *b1* , Boolean *b2* [ , ... Boolean *bN* ] )

#### .not ( Boolean b )

#### .or ( Boolean *b1* , Boolean *b2* [ , ... Boolean *bN* ] )

#### .xor ( Boolean *b1* , Boolean *b2* [ , ... Boolean *bN* ] )

### Instance functions

## Math

#### .cbrt ( Number *n* )

#### .cosh ( Number *n* )

#### .sinh ( Number *n* )

#### .tanh ( Number *n* )

#### .trunc ( )

## Number

### Static methods

### Instance methods

#### .abs ( )

#### .acos ( )

#### .acosh ( )

#### .atan ( [ Number *x* ] )

#### .atanh ( )

#### .ceil ( [ Number *precision* = 1 ] )

#### .cos ( )

#### .cosh ( )

#### .exp ( )

#### .floor ( [ Number _precision_ = 1 ] )

#### .expm1 ( )

#### .isEven ( )

#### .isInteger ( )

#### .isMultipleOf ( )

#### .isOdd ( )

#### .round ( [ Number _precision_ = 1 ] )

#### .sign [ Number *sign* ] )

#### .sin ( )

#### .sinh ( )

#### .tan ( )

#### .tanh ( )

#### .toBase ( Number base )

#### .toBase ( String base [ , zero = true ] )

#### .toBin ( )

#### .toHex ( )

#### .toOct ( )

#### .toRoman ( [ Boolean *unicode* = false ] )

#### .trunc ( )

## Object

### Static methods

#### .fromQuery ( String s )

## String

### Static methods

#### .isString ( Any *value* )

### Instance methods

#### .at ( Number index [ , ... , Number iN ] )

#### .beginsWith ( String s )

#### .chars ( [ Function mapper [ , Any context = root ] )
(Alias: **characters**, **eachCharacter**.)

#### .codeAt ( Number i1 [ , ... , Number iN ] )

#### .codePoints ( { Function mapper [ , Any context = root ] ] )
(Alias: **eachCodePoint**.)

#### .codes ( { Function mapper [ , Any context = root ] ] )
(Alias **eachCode**.)

#### .endsWith ( String s )

#### .escapeHTML ( )

#### .left ( [ Number count = 1 ] )
(Alias: **first**.)

#### .lpad ( Number length [ , String padWith = " " ] )

#### .ltrim ( )

#### .removeDiacritics ( )

#### .right ( [ Number count = 1 ] )
(Alias: **last**.)

#### .rpad ( Number length [ , String padWith = " " ] )

#### .rtrim ( )

#### .toCamel ( )

#### .toDashed ( )
(Alias: **toKebab**.)

#### .toSlug ( )

#### .trim ( )

#### .unescapeHTML ( )
