describe('failure-message', () => {
    test('object difference', () => {
        expect(() => {
            expect({ abc: 123, def: 'ghi' }).toEqual({ abc: 123, def: 'Ghi' });
        }).toThrow(
            expect.failureMessage`
                expect(received).toEqual(expected) // deep equality

                - Expected  - 1
                + Received  + 1

                  Object {
                    "abc": 123,
                -   "def": "Ghi",
                +   "def": "ghi",
                  }
                `,
        );
    });
    test('non error exception', () => {
        expect(() => {
            throw /^$/;
        }).toThrow(expect.failureMessage`/^$/`);
    });
});
