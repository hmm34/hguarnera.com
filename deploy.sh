#!/bash/bin

# create out/ directory
cd site
npx next build && npx next export

# move it to root so GitHub can see it
cd ..
cp -r site/out/* .

# add changes
git add .
git commit -m "Rebuild and deploy static site"
git push