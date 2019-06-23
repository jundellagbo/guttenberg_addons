"use strict";

var registerBlockType = wp.blocks.registerBlockType;
var MediaUpload = wp.editor.MediaUpload;
var Button = wp.components.Button;
var createElement = wp.element.createElement;
registerBlockType('jundell/guttenberg-addons', {
  title: 'Text Bordered Layout',
  icon: 'smiley',
  category: 'web-dev-blocks',
  attributes: {
    content: {
      type: 'string'
    },
    color: {
      type: 'string'
    },
    media: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var selectImage = function selectImage(media) {
      props.setAttributes({
        media: media.url
      });
    };

    return createElement("div", null, createElement(MediaUpload, {
      type: 'image',
      onSelect: selectImage,
      value: 1,
      render: function render(_ref) {
        var open = _ref.open;
        return createElement(Button, {
          onClick: open,
          className: 'button button-large'
        }, "Select Image");
      }
    }), createElement("div", null, props.attributes.media && createElement("img", {
      src: props.attributes.media
    })));
  },
  save: function save(props) {
    return createElement("div", null, "Hello World");
  }
});
