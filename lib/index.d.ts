declare global {
    namespace jest {
        interface Expect {
            failureMessage(template: TemplateStringsArray, ...values: unknown[]): string;
        }
    }
}
export {};
