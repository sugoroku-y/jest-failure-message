"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const indented_1 = require("@sugoroku-y/indented");
const hasProperty_1 = require("./hasProperty");
function failureMessage(actual, ...args) {
    const expected = (0, indented_1.indented)(...args);
    return {
        pass: this.equals(expected, (0, hasProperty_1.hasProperty)(actual, 'message')
            ? String(actual.message)
                // eslint-disable-next-line no-control-regex -- メッセージからエスケープシーケンスを取り除くために制御文字の指定が必要
                .replace(/(?:\u001b\[(?:\d+(?:;\d+)*)? ?[A-Za-z])*/g, '')
            : // 投げられた例外がmessageプロパティを持たない場合はそのまま文字列に変換
                String(actual)),
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- asymmetric matcherのときはpassしか見てないので省略
        message: undefined,
    };
}
expect.extend({ failureMessage });
//# sourceMappingURL=index.js.map