const browserSync = require("browser-sync");
const fs = require('fs');
const pug = require('pug');
const sass = require('node-sass');


var compileIndex = pug.compileFile('./src/index.pug');

const writeIndex = () => {
    try {
        compileIndex = pug.compileFile('./src/index.pug', { pretty: true });
        fs.writeFile('./serve/index.html', compileIndex({chunk: "chunk"}), (err) => {
            if (err) {
                console.log(err);
                console.log('index.html write: Fail');
            } else {
                console.log('index.html write: Success');
                browserSync.reload();
            }
        });
        console.log('index.html compile: Success');
    } catch(err) {
        console.log(err)
        console.log('index.html compile: Fail');
    }
};

const sassOutFile = 'serve/style.css';
const writeStyle = () => sass.render({
    file: 'src/style.sass',
    outFile: sassOutFile,
    indentedSyntax: true
}, function(error, result) {
    if(!error) {
        fs.writeFile(sassOutFile, result.css, function(error) {
            if(!error) {
                console.log('Wrote ' + sassOutFile);
                browserSync.reload('style.css')
            }
        })
    } 
});

browserSync.init({
    server: './serve'
});

browserSync.watch('./src/index.pug').on('change', writeIndex);
browserSync.watch('./src/style.sass').on('change', writeStyle);
