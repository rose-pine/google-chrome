#!/env/bin sh

# build themes to ./temp
npx @rose-pine/build@0.5.1 -t ./manifest-template.json -o ./temp -f rgb-array -p '$'

mv ./temp/rose-pine.json  ./rose-pine/manifest.json
mv ./temp/rose-pine-moon.json  ./rose-pine-moon/manifest.json
mv ./temp/rose-pine-dawn.json  ./rose-pine-dawn/manifest.json

npx del-cli ./temp
