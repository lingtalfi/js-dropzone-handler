/**
 * This depends on jquery.
 */
class DropZoneHandler {

    constructor(options) {
        this.options = jQuery.extend({
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
        const jDropZone = this.container;


        if (jDropZone.length) {
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
                if (false === jDropZone.hasClass(cssClass)) {
                    jDropZone.addClass(cssClass);
                }

                // https://stackoverflow.com/questions/10119514/html5-drag-drop-change-icon-cursor-while-dragging
                e.dataTransfer.dropEffect = "copy";
            }

            function dragleave(e) {
                e.stopPropagation();
                e.preventDefault();
                jDropZone.removeClass(cssClass);
            }

            function drop(e) {
                e.stopPropagation();
                e.preventDefault();
                jDropZone.removeClass(cssClass);


                const dt = e.dataTransfer;
                const files = dt.files;
                let filesArray = [];
                for (let i = 0; i < files.length; i++) {
                    filesArray.push(files[i]);
                }
                onDrop(filesArray);
            }


            jDropZone[0].addEventListener("dragstart", dragstart, false);
            jDropZone[0].addEventListener("dragenter", dragenter, false);
            jDropZone[0].addEventListener("dragleave", dragleave, false);
            jDropZone[0].addEventListener("dragover", dragover, false);
            jDropZone[0].addEventListener("drop", drop, false);
        }


    }


}


module.exports = DropZoneHandler;