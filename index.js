class DropZoneHandler {

    constructor(options) {
        this.options = Object.assign({
            container: null,
            cssClass: "dropzone-hover",
            onDrop: function (files) {
                console.log("the files have been dropped.", files);
            },
        }, options);


        this.container = this.options.container;
    }


    start() {


        const cssClass = this.options.cssClass;
        const onDrop = this.options.onDrop;
        const elDropZone = this.container;


        function dragstart(e) {
            e.stopPropagation();
            e.preventDefault();

            // https://stackoverflow.com/questions/10119514/html5-drag-drop-change-icon-cursor-while-dragging
            e.dataTransfer.effectAllowed = "copyMove";
        }

        function dragenter(e) {
            e.stopPropagation();
            e.preventDefault();

            // https://stackoverflow.com/questions/10119514/html5-drag-drop-change-icon-cursor-while-dragging
            e.dataTransfer.dropEffect = "copy";
        }

        function dragover(e) {
            e.stopPropagation();
            e.preventDefault();
            if (false === elDropZone.classList.contains(cssClass)) {
                elDropZone.classList.add(cssClass);
            }

            // https://stackoverflow.com/questions/10119514/html5-drag-drop-change-icon-cursor-while-dragging
            e.dataTransfer.dropEffect = "copy";
        }

        function dragleave(e) {
            e.stopPropagation();
            e.preventDefault();
            elDropZone.classList.remove(cssClass);
        }

        function drop(e) {
            e.stopPropagation();
            e.preventDefault();
            elDropZone.classList.remove(cssClass);


            const dt = e.dataTransfer;
            const files = dt.files;
            let filesArray = [];
            for (let i = 0; i < files.length; i++) {
                filesArray.push(files[i]);
            }
            onDrop(filesArray);
        }


        elDropZone.addEventListener("dragstart", dragstart, false);
        elDropZone.addEventListener("dragenter", dragenter, false);
        elDropZone.addEventListener("dragleave", dragleave, false);
        elDropZone.addEventListener("dragover", dragover, false);
        elDropZone.addEventListener("drop", drop, false);


    }


}


module.exports = DropZoneHandler;