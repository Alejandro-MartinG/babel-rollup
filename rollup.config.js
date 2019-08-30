import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';


export default [
    {
        input: './src/example1.js',
        output: {
            file: './build/example1.min.js',
            format: 'iife',
            name: 'minutos',
            globals: { 'lodash': '_' }
        },
        plugins: [
            babel({ exclude: 'node_modules/**' }),
            resolve(),
            commonjs(),
            uglify()
        ]
    },
    {
        input: './src/example2.js',
        output: {
            file: './build/example2.min.js',
            format: 'iife',
            name: 'example2',
            globals: { 'lodash': '_' }
        },
        plugins: [
            babel({ exclude: 'node_modules/**' }),
            resolve(),
            commonjs(),
            uglify()
        ]
    },
]
