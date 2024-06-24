export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [0, 'always', 'Infinity'],
    'body-min-length': [1, 'always', 0],
    'body-max-length': [1, 'always', 'Infinity'],
    'type-case': [2, 'always', 'lower-case'],
    'type-enum': [
      2,
      'always',
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
        "upgrade",
        "wip",
      ],
    ],
  },
}
