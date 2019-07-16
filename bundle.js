"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var registerBlockType = wp.blocks.registerBlockType;
var MediaUpload = wp.editor.MediaUpload;
var Button = wp.components.Button;
var createElement = wp.element.createElement;
registerBlockType('jundell/guttenberg-addons', {
  title: 'Above the fold',
  icon: 'editor-code',
  category: 'web-dev-blocks',
  attributes: {
    slides: {
      type: 'array',
      "default": [{
        title: '',
        subtitle: ''
      }]
    }
  },
  edit: function edit(props) {
    var attributes = props.attributes,
        setAttributes = props.setAttributes;

    var slides = _toConsumableArray(attributes.slides);

    var newSlide = function newSlide() {
      slides.push({
        title: '',
        subtitle: ''
      });
      setAttributes({
        slides: slides
      });
    };

    var inputChange = function inputChange(obj) {
      slides[obj.index][obj.key] = obj.event.target.value;
      setAttributes({
        slides: slides
      });
    };

    var clickMe = function clickMe(index) {
      slides.splice(index, 1);
      setAttributes({
        slides: slides
      });
    };

    return createElement("div", null, createElement(Button, {
      className: 'button button-large',
      onClick: newSlide
    }, "Add Grid"), createElement("hr", null), slides && slides.map(function (row, index) {
      return createElement("div", {
        className: "slide-" + index
      }, createElement("input", {
        placeholder: 'Enter title',
        type: "text",
        value: row.title,
        onChange: function onChange(e) {
          return inputChange({
            event: e,
            index: index,
            key: 'title'
          });
        }
      }), createElement("input", {
        placeholder: 'Enter subtitle',
        type: "text",
        value: row.subtitle,
        onChange: function onChange(e) {
          return inputChange({
            event: e,
            index: index,
            key: 'subtitle'
          });
        }
      }), index != 0 && createElement(Button, {
        onClick: function onClick() {
          return clickMe(index);
        },
        className: 'button button-large',
        style: {
          marginLeft: '10px'
        }
      }, "Remove"));
    }));
  },
  save: function save(props) {
    var attributes = props.attributes;

    var slides = _toConsumableArray(attributes.slides);

    return createElement("div", null, slides && slides.map(function (row) {
      return createElement("div", {
        className: 'row'
      }, createElement("div", {
        style: {
          width: '300px',
          border: '1px solid #000000',
          margin: '5px'
        }
      }, createElement("strong", null, row.title), createElement("p", null, row.subtitle)));
    }));
  }
});
