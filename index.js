
const { registerBlockType } = wp.blocks
const { MediaUpload } = wp.editor
const { Button } = wp.components
const { createElement } = wp.element

registerBlockType('jundell/guttenberg-addons', {
    title: 'Text Bordered Layout',
    icon: 'smiley',
    category: 'web-dev-blocks',
    attributes: {
      content: {type: 'string'},
      color: {type: 'string'},
      media: {type: 'string'},
    },
    edit: (props) => {

      const updateContent = event => {
        props.setAttributes({content: event.target.value})
      }

      const updateColor = value => {
        props.setAttributes({color: value.hex})
      }

      const selectImage = media => {
        props.setAttributes({media: media.url})
      }

      const removeImage = () => {
        props.setAttributes({media: null})
      }

      return createElement(
          "div",
          null,
          createElement(
            MediaUpload,
            { 
                type: 'image',
                onSelect: selectImage,
                render: function( obj ) {
                    return createElement(
                        "div",
                        null,
                        createElement(
                            Button,
                            { onClick: obj.open, className: 'button button-large', },
                            "Select Image"
                        ),
                        props.attributes.media && createElement(
                            Button,
                            { onClick: removeImage, className: 'button button-large', },
                            "Remove Image"
                        )
                    )
                }
            }
          ),
          createElement(
            "div",
            null,
            props.attributes.media && createElement(
                "img", { src: props.attributes.media }
            )
        )
      )
    },
    save: (props) => {
        return createElement(
            "div",
            null,
            "Hello World"
        )
    }
})