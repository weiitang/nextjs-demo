const path = require('path');

const buildEslintCommand = (filenames) => {
  // next lint 运行时  会执行eslinttc和next.config.ts里的eslint配置

  return `next lint --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')} --max-warnings 0 --fix`;
  // return `eslint --max-warnings 0 --cache --cache-location .cache/eslint --ignore-path .eslintignore ${filenames.join(' ')}`;
};

module.exports = {
  './app/*.{js,jsx,ts,tsx}': [buildEslintCommand], // 这些格式的文件在提交时交给 ESLint 校验
  '**/*.{js,jsx,tsx,ts,less,md,json}': ['prettier --write'], // 这些格式的文件在提交时让 prettier 格式化
};
