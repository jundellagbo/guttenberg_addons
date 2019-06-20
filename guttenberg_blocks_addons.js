wp.blocks.registerBlockType('jundell/guttenberg-addons', {
    title: 'Text Bordered Layout',
    icon: 'smiley',
    category: 'web-dev-blocks',
    attributes: {
      content: {type: 'string'},
      color: {type: 'string'},
      image: {type: 'string'}
    },
    edit: function(props) {
      function updateContent(event) {
        props.setAttributes({content: event.target.value})
      }
  
      function updateColor(value) {
        props.setAttributes({color: value.hex})
      }
  
      return wp.element.createElement(
        "div",
        null,
        wp.element.createElement(
          "h4",
          null,
          "This is a sample guttenberg addon"
        ),
        wp.element.createElement("input", { type: "text", value: props.attributes.content, onChange: updateContent, placeholder: 'Enter your text' }),
        wp.element.createElement(wp.components.ColorPicker, { color: props.attributes.color, onChangeComplete: updateColor })
      );
    },
    save: function(props) {
      return wp.element.createElement(
        "h3",
        { style: { border: "5px solid " + props.attributes.color } },
        props.attributes.content
      );
    }
  })