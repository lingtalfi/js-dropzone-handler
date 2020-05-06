js dropzone handler
=============
2020-04-08 -> 2020-05-06


A js tool to help handling a drop zone.




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
    container: document.getElementById('the-dropzone'), 
    cssClass:  "dropzone-hover", // this is the default
    onDrop: (files) => {
        console.log("ok with files", files); // note files is an array (i.e. not the js FileList object)
    },
});
dropZoneHandler.start();
```


History log
=============

- 1.1.1 -- 2020-05-06
    
    - fix old jquery dependency not removed

- 1.1.0 -- 2020-05-06
    
    - removed jquery dependency

- 1.0.0 -- 2020-04-08 
    
    - initial commit

