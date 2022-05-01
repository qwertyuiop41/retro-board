import en from './locales/en';
import fs from 'fs';
import path from 'path';
import { lang } from 'moment';

function convert(locale: string) {
  const source = require(`./locales/${locale}`).default;
  replace(source);
  // console.log('ok', source);
  const dir = path.resolve(__dirname, `locales/dist/${locale}`);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(
    path.resolve(dir, `main.json`),
    JSON.stringify(source, null, 2)
  );
}

function replace(obj: any) {
  const fields = Object.getOwnPropertyNames(obj);
  console.log(fields);
  for (const field of fields) {
    if (obj[field] === undefined) {
      obj[field] = null;
    } else if (typeof obj[field] === 'function') {
      obj[field] = 'function!';
    } else if (typeof obj[field] === 'object') {
      replace(obj[field]);
    }
  }
}

const languages: string[] = [
  'ar',
  'de',
  'en',
  'es',
  'fr',
  'hu',
  'it',
  'ja',
  'nl',
  'pl',
  'pt-br',
  'ru',
  'zh-cn',
  'zh-tw',
];

for (const language of languages) {
  convert(language);
}
