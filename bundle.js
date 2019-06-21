'use strict';

var registerBlockType = wp.blocks.registerBlockType;
var MediaUpload = wp.editor.MediaUpload;
var Button = wp.components.Button;
var createElement = wp.element.createElement;


registerBlockType('jundell/guttenberg-addons', {
    title: 'Text Bordered Layout',
    icon: 'smiley',
    category: 'web-dev-blocks',
    attributes: {
        content: { type: 'string' },
        color: { type: 'string' },
        media: { type: 'string' }
    },
    edit: function edit(props) {

        var updateContent = function updateContent(event) {
            props.setAttributes({ content: event.target.value });
        };

        var updateColor = function updateColor(value) {
            props.setAttributes({ color: value.hex });
        };

        var selectImage = function selectImage(media) {
            props.setAttributes({ media: media.url });
        };

        var removeImage = function removeImage() {
            props.setAttributes({ media: null });
        };

        return createElement("div", null, createElement(MediaUpload, {
            type: 'image',
            onSelect: selectImage,
            render: function render(obj) {
                return createElement("div", null, createElement(Button, { onClick: obj.open, className: 'button button-large' }, "Select Image"), props.attributes.media && createElement(Button, { onClick: removeImage, className: 'button button-large' }, "Remove Image"));
            }
        }), createElement("div", null, props.attributes.media && createElement("img", { src: props.attributes.media })));
    },
    save: function save(props) {
        return createElement("div", null, "Hello World");
    }
});
