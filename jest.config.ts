import type { Config } from 'jest';

export default {
    projects: [
        {
            displayName: 'test',
            testMatch: ['**/tests/*.test.ts'],
            transform: {
                '\\.ts$': [
                    'ts-jest',
                    {
                        tsconfig: 'tests/tsconfig.json',
                    },
                ],
            },
            collectCoverageFrom: ['src/*.ts'],
            setupFilesAfterEnv: ['./tests/setupTests.ts'],
        },
        ...(process.env['npm_config_lint']
            ? [
                  {
                      displayName: 'eslint',
                      runner: 'eslint',
                      testMatch: ['**/*.ts', '**/*.js', '**/*.mjs', '**/*.cjs'],
                  },
                  {
                      preset: '@sugoroku-y/jest-runner-prettier',
                  },
              ]
            : []),
    ],
    collectCoverage: !!process.env['npm_config_coverage'],
} satisfies Config;
