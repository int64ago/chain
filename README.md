# chain

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]
[![Travis][travis-image]][travis-url]
[![Coverage][coverage-image]][coverage-url]

[npm-image]: https://img.shields.io/npm/v/@hspkg/chain.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@hspkg/chain
[download-image]: https://img.shields.io/npm/dm/@hspkg/chain.svg?style=flat-square
[download-url]: https://npmjs.org/package/@hspkg/chain
[travis-image]: https://img.shields.io/travis/int64ago/chain.svg?style=flat-square
[travis-url]: https://travis-ci.org/int64ago/chain
[coverage-image]: https://img.shields.io/coveralls/int64ago/chain.svg?style=flat-square
[coverage-url]: https://coveralls.io/github/int64ago/chain

Partial implementation for [Optional Chaining](https://github.com/tc39/proposal-optional-chaining) in ES5

## API

```js
var chain: (sourceObject: object, propertyString: string, defaultValue: any) => any
```

## Examples

`npm i @hspkg/chain -S`

```js
var chain = require('@hspkg/chain');

var testObj = {
  code: 200,
  data: {
    list: [
      { id: 1, name: 'name1' },
      { id: 2, name: 'name2' }
    ],
    page: {
      current: 1,
      total: 200
    }
  }
};
// testObj?.code
console.log(chain(testObj, '.code')); // 200
// testObj?.data?.page?.current
console.log(chain(testObj, '.data.page.current')); // 1
// testObj?.data?.list?.[0]?.id
console.log(chain(testObj, '.data.list[0].id')); // 1
// testObj?.wrong?.path
console.log(chain(testObj, '.wrong.path')); // undefined
// testObj?.wrong?.path || 666
console.log(chain(testObj, '.wrong.path', 666)); // 666
```

## License

MIT
