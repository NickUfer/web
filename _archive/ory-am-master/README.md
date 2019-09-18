# ory-am

The ORY Website: [https://www.ory.am](https://www.ory.am)

Update:

```
cp src/main-page/dist/* ./ -Rf
git add -A
git commit -m "updates" --all

git push origin HEAD:master
```

```
export BRANCH=

git-town hack $BRANCH
sed -i s/master/$BRANCH/ ./src/main-page/custom/index.html
sed -i s/master/$BRANCH/ ./src/main-page/public/counter.html

cp src/main-page/dist/* ./ -Rf
git add -A
git commit -m "updates" --all
git push origin HEAD:$BRANCH
```
