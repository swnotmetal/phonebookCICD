echo "Build script"

npm install && cd ./client && npm install && npm run build && cp -r dist ../PhonebookCICD && cd ..

