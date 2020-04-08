js dropzone handler
=============
2020-04-08


A js tool to help handling a drop zone.

It depends on jquery being loaded in the browser.



Install
============

```js 
npm i js-dropzone-handler
```


Usage
======



```js
const DropZoneHandler = require("js-dropzone-handler");

let dropZoneHandler = new DropZoneHandler({
    container: $('#the-dropzone'), // $=jQuery 
    cssClass:  "dropzone-hover", // this is the default
    onDrop: (files) => {
        console.log("ok with files", files); // note files is an array (i.e. not the js FileList object)
    },
});
dropZoneHandler.start();
```


History log
=============

- 1.0.0 -- 2020-04-08 
    
    - initial commit

