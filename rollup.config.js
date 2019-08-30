import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import typescript from 'rollup-plugin-typescript';


export default [
    {
        input: './src/example1.ts',
        output: {
            file: './build/example1.min.js',
            format: 'iife',
            name: 'example1',
            globals: { 'lodash': '_' }
        },
        plugins: [
            babel({
                exclude: 'node_modules/**'
            }),
            resolve(),
            commonjs(),
            uglify(),
            typescript({
                lib: ["es5", "es6", "dom"],
                target: "es5"
            }) // The plugin loads any compilerOptions from the tsconfig.json file by default
        ]
    },
    {
        input: './src/example2.ts',
        output: {
            file: './build/example2.min.js',
            format: 'iife',
            name: 'example2',
            globals: { 'lodash': '_' }
        },
        plugins: [
            babel({
                exclude: 'node_modules/**'
            }),
            resolve(),
            commonjs(),
            typescript({
                lib: ["es5", "es6", "dom"],
                target: "es5"
            })
        ]
    },
]
