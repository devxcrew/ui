import {readdirSync,readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {dirname} from 'node:path';
import {spawnSync} from 'node:child_process';
const manifest = JSON.parse(readFileSync('package.json','utf8'));
const imports=[];
for(const [key,target] of Object.entries(manifest.exports)) {
  if(target.endsWith('.css')) continue;
  if(!key.includes('*')) {imports.push(`import * as export${imports.length} from '${manifest.name}${key==='.'?'':key.slice(1)}';`);continue;}
  const [prefix,suffix]=target.split('*');
  const directory=dirname(prefix+'entry');
  for(const item of readdirSync(directory,{withFileTypes:true})) {
    const candidate=item.isDirectory()?`${prefix}${item.name}${suffix}`:`${directory}/${item.name}`;
    if(!candidate.endsWith(suffix)) continue;
    if(!item.isDirectory() && !item.name.endsWith(suffix)) continue;
    const name=item.isDirectory()?item.name:item.name.slice(0,-suffix.length);
    imports.push(`import * as export${imports.length} from '${manifest.name}${key.slice(1).replace('*',name)}';`);
  }
}
mkdirSync('.cache',{recursive:true});
writeFileSync('.cache/public-exports.ts',imports.join('\n')+'\n');
writeFileSync('.cache/tsconfig.json',JSON.stringify({extends:'../tsconfig.json',include:['public-exports.ts'],exclude:[]}));
const result=spawnSync(process.execPath,['node_modules/typescript/bin/tsc','-p','.cache/tsconfig.json'],{stdio:'inherit'});
if(result.status!==0) process.exit(result.status??1);
console.log(`Compiled ${imports.length} public JavaScript export paths.`);

