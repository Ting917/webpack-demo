yarn build &&
git checkout gh-page &&
rm -rf *.html *.js *.css *.png &&
mv dist/* ./ &&
rm -rf dist;
git add . &&
git commit -m 'update' &&
gti push