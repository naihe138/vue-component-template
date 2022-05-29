const { readFileSync, rmSync, writeFileSync } = require('fs')
const { exec, cp } = require('shelljs')
const path = require('path')

function readWriteFileSync(path, callback) {
  writeFileSync(path, callback(readFileSync(path, { encoding: 'utf8' })), { encoding: 'utf8' })
}

function readRemoveFileSync(path, callback) {
  callback(readFileSync(path, { encoding: 'utf8' }))
  rmSync(path, { force: true })
}


const resolvePath = url => path.resolve(__dirname, url);
const replace = (source, target, text) => source.replace(target, text)
async function build_library() {
  exec('rimraf ./dist')
  // exec('vue-tsc --noEmit && vite build');
  // readRemoveFileSync(resolvePath('./dist/style.css'), css => {
  //   readWriteFileSync(resolvePath('./dist/my-component.es.js'), js => replace(js, `"__STYLE_CSS__TEXT"`, "`"+ css.trim() +"`"))
  //   readWriteFileSync(resolvePath('./dist/my-component.umd.js'), js => replace(js, `"__STYLE_CSS__TEXT"`, "`"+ css.trim() +"`"))
  // });
  // cp(resolvePath('./dist/src/components/my-component.vue.d.ts'), resolvePath('./dist/my-component.d.ts'));
}

build_library()