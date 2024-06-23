# @sugoroku-y/jest-failure-message

Custom asymmetric matcher to compare messages output within JEST.

JEST内で出力されるメッセージを比較するためのカスタム非対称マッチャー。

[![JEST](https://img.shields.io/badge/-JEST-404040.svg?logo=JEST)](https://jestjs.io/)
[![TypeScript](https://img.shields.io/badge/-TypeScript-404040.svg?logo=TypeScript)](https://www.typescriptlang.org/)
[![JavaScript](https://img.shields.io/badge/-JavaScript-404040.svg?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub Packages](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fsugoroku-y%2Fjest-failure-message%2Fmain%2Fpackage.json&query=%24.version&prefix=v&logo=GitHub&label=GitHub%20Packages&link=https%3A%2F%2Fimg.shields.io%2Fbadge%2Flicense-MIT-blue.svg%3Fstyle%3Dflat)](https://github.com/sugoroku-y/jest-failure-message/pkgs/npm/jest-failure-message)
[![license: MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](./LICENSE)
[![Coverage Status](https://coveralls.io/repos/github/sugoroku-y/jest-failure-message/badge.svg)](https://coveralls.io/github/sugoroku-y/jest-failure-message)
[![Publish package to GitHub Packages](https://github.com/sugoroku-y/jest-failure-message/actions/workflows/publish.yml/badge.svg)](https://github.com/sugoroku-y/jest-failure-message/actions/workflows/publish.yml)
[![Push Coverage to Coveralls](https://github.com/sugoroku-y/jest-failure-message/actions/workflows/coverage.yml/badge.svg)](https://github.com/sugoroku-y/jest-failure-message/actions/workflows/coverage.yml)

## Install

以下のコマンドを実行してください。

```bash
npm install --save-dev sugoroku-y/jest-failure-message
```

## Usage

テスト用のソースファイルの先頭で`'@sugoroku-y/jest-failure-message'`を`import`してください。

```ts
import '@sugoroku-y/jest-failure-message';
```

こうすることでテストケースで`expect.failureMessage`が使用できるようになります。

```ts
expect(() => {
  expect(hoge).toFuga(PIYO);
}).toThrow(expect.failureMessage`
  expect(received).toFuga(expected)

  - Expected  -  1
  + Received  +  1

  - hoge
  + piyo
  `);
```

もしくは

```ts
import '@sugoroku-y/jest-failure-message';
```

とだけ書いた`tests/setupTests.ts`を用意して、`jest.config.json`に

```json
  "setupFilesAfterEnv": ["./tests/setupTests.ts"],
```

という行を追加すれば、すべてのテストケースで`expect.failureMessage`が使用できるようになります。

## License

Copyright YEBISUYA Sugoroku 2024. Licensed MIT.
