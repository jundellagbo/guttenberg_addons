
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

      const selectImage = media => {
        props.setAttributes({media: media.url})
      }

      return (
        <div>
          <MediaUpload 
          type={'image'} 
          onSelect={selectImage}
          value={1}
          render={({open}) => (
            <Button onClick={open} className={'button button-large'}>
              Select Image
            </Button>
          )}
          ></MediaUpload>
          <div>
            {props.attributes.media && (<img src={props.attributes.media} />)}
          </div>
        </div>
      )
    },
    save: (props) => {
        return (
          <div>
            Hello World
          </div>
        )
    }
})