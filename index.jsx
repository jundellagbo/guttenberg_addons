
const { registerBlockType } = wp.blocks
const { MediaUpload } = wp.editor
const { Button } = wp.components
const { createElement } = wp.element

registerBlockType('jundell/guttenberg-addons', {
    title: 'Above the fold',
    icon: 'editor-code',
    category: 'web-dev-blocks',
    attributes: {
      slides: { type: 'array', default: [{ title: '', subtitle: '' }] }
    },
    edit: (props) => {

      const { attributes, setAttributes } = props
      const slides = [...attributes.slides]
      
      const newSlide = () => {
        slides.push({ title: '', subtitle: '' })
        setAttributes({ slides })
      }

      const inputChange = (obj) => {
        slides[obj.index][obj.key] = obj.event.target.value
        setAttributes({ slides })
      }

      const clickMe = (index) => {
        slides.splice( index, 1 )
        setAttributes({ slides })
      }

      return (
        <div>
          <Button className={'button button-large'} onClick={newSlide}>Add Grid</Button>
          <hr/>
          {slides && slides.map((row, index) => (
            <div className={"slide-" + index}>
              <input placeholder={'Enter title'} type="text" value={row.title} onChange={e => inputChange({event: e, index, key: 'title'})} />
              <input placeholder={'Enter subtitle'} type="text" value={row.subtitle} onChange={e => inputChange({event: e, index, key: 'subtitle'})} />
              {index != 0 && (<Button onClick={() => clickMe(index)} className={'button button-large'} style={{ marginLeft: '10px' }}>Remove</Button>)}
            </div>
          ))}
        </div>
      )
    },
    save: (props) => {
      const {attributes} = props
      const slides = [...attributes.slides]
        return (
          <div>
            {slides && slides.map(row => (
              <div className={'row'}>
                <div style={{ width: '300px', border: '1px solid #000000', margin: '5px' }}>
                  <strong>{row.title}</strong>
                  <p>{row.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        )
    }
})