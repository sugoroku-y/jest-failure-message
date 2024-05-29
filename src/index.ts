import { indented } from '@sugoroku-y/indented';
import { hasProperty } from './hasProperty';

function failureMessage(
    this: jest.MatcherContext,
    actual: unknown,
    ...args: [TemplateStringsArray, ...unknown[]]
): jest.CustomMatcherResult {
    const expected = indented(...args);
    return {
        pass: this.equals(
            expected,
            hasProperty(actual, 'message')
                ? String(actual.message)
                      // eslint-disable-next-line no-control-regex -- メッセージからエスケープシーケンスを取り除くために制御文字の指定が必要
                      .replace(/(?:\u001b\[(?:\d+(?:;\d+)*)? ?[A-Za-z])*/g, '')
                : // 投げられた例外がmessageプロパティを持たない場合はそのまま文字列に変換
                  String(actual),
        ),
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- asymmetric matcherのときはpassしか見てないので省略
        message: undefined!,
    };
}

expect.extend({ failureMessage });

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace -- jestの拡張
    namespace jest {
        interface Expect {
            failureMessage(
                template: TemplateStringsArray,
                ...values: unknown[]
            ): string;
        }
    }
}
