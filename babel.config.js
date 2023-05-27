require('@babel/register')({
  extends: './.babelrc',
  ignore: [/node_modules/],
  extensions: ['.js', '.jsx', 'ts', '.tsx'],
});
