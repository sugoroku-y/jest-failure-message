# @sugoroku-y/jest-failure-message

Custom asymmetric matcher to compare messages output within JEST.

JEST内で出力されるメッセージを比較するためのカスタム非対称マッチャー。

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
