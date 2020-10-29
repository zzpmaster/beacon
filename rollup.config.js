import path from 'path'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import ts from 'rollup-plugin-typescript2'
import sourceMaps from 'rollup-plugin-sourcemaps'

const getPath = _path => path.resolve(__dirname, _path)

const pkg = require('./package.json')

const include = [
  '.js',
  '.ts',
  '.tsx'
]

// ts
const tsPlugin = ts({
  useTsconfigDeclarationDir: true
})

// 基础配置
const commonConf = {
  input: getPath('./src/beacon.ts'),
  // watch: {
  //   include: 'src/**',
  // },
  plugins:[
    resolve({
        extensions: include
    }),
    commonjs(),
    tsPlugin,
    sourceMaps()
  ]
}

const outputMap = [
  {
    file: pkg.main,
    format: 'umd',
    name: 'beacon',
    // inlineDynamicImports: true,
    // dir: 'lib'
  },
  {
    file: pkg.module,
    format: 'es',
  }
]


const buildConf = options => Object.assign({}, commonConf, options)


export default outputMap.map(output => buildConf({ output: {name: pkg.name, ...output}}));