//
// ylangDef.js
//

'use strict';
define(["require", "exports"], function (require, exports) {
    exports.language = {
        displayName: '',
        name: 'yl',
        mimeTypes: [],
        fileExtensions: [],
        defaultToken: '',
        // used in the editor to insert comments (ctrl+/ or shift+alt+A)
        lineComment: '// ',
        blockCommentStart: '/*',
        blockCommentEnd: '*/',
        autoClosingPairs: [
            ['"', '"'],
            ['{', '}'],
            ['[', ']'],
            ['(', ')']
        ],
        brackets: [
            { open: '{', close: '}', token: 'delimiter.curly' },
            { open: '[', close: ']', token: 'delimiter.square' },
            { open: '(', close: ')', token: 'delimiter.parenthesis' }
        ],
        editorOptions: { tabSize: 4, insertSpaces: true },
        keywords: [
            'break',
            'case',
            'catch',
            'continue',
            'def',
            'default',
            'delete',
            'do',
            'else',
            'false',
            'finally',
            'for',
            'if',
            'new',
            'null',
            'return',
            'superof',
            'switch',
            'throw',
            'true',
            'try',
            'using',
            'var',
            'while',
            'yield',
            'is'
        ],
        operators: [
            '!',
            '%',
            '&',
            '*',
            '+',
            ',',
            '-',
            '.',
            '/',
            ':',
            ';',
            '<',
            '=',
            '>',
            '?',
            '^',
            '|',
            '~',
            '++',
            '--',
            '..',
            '<<',
            '>>',
            '~>>',
            '!=',
            '<=',
            '==',
            '>=',
            '%=',
            '&=',
            '*=',
            '+=',
            '-=',
            '/=',
            '^=',
            '|=',
            '~=',
            '<<=',
            '>>=',
            '~>>=',
            '&&',
            '^^',
            '||',
            '::',
            '.&',
            '...'
        ],
        // definition of words
        wordDefinition: /(-?[0-9][0-9a-zA-Z_.\-+]*)|(!is)|([a-zA-Z_][a-zA-Z0-9_]*)|([!%&*+,\-./:<=>?\^|~]+)|([{}()\[\]])/g,
        // operator symbols
        symbols: /[!%&*+,\-./:<=>?\^|~]+/,
        // escape sequences
        escapes: /\\(?:[/\\"bfnrt]|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{6})/,
        // The main tokenizer for our languages
        tokenizer: {
            root: [
                { include: '@whitespace' },
                [/[a-zA-Z_][a-zA-Z0-9_]*/, { cases: { '@keywords': { token: 'keyword.$0' }, '@default': 'identifier' } }],
                ['!is', 'keyword.notis'],
                [/@symbols/, { cases: { '@operators': 'delimiter', '@default': '' } }],
                [/[{}()\[\]]/, '@brackets'],
                [/0|([1-9][0-9]*)\.\[0-9]+([eE][\-+]?[0-9]+)?/, 'number.float'],
                [/0[xX][0-9a-fA-F]+(\.[0-9a-fA-F]+)?([pP][\-+]?[0-9]+)?/, 'number.hex'],
                [/[0-9]+/, 'number'],
                [/"([^"\\]|\\.)*$/, 'string.invalid'],
                [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }],
            ],
            whitespace: [
                [/[ \t\r\n]+/, ''],
                [/\/\*/, 'comment', '@comment'],
                [/\/\/.*$/, 'comment'],
            ],
            comment: [
                [/[^\/*]+/, 'comment'],
                ['\\*/', 'comment', '@pop'],
                [/[\/*]/, 'comment']
            ],
            string: [
                [/[^\\"']+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/\\./, 'string.escape.invalid'],
                [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
            ],
        },
    };
});
