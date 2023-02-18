export const customComponents = (editor) => {
  editor.Components.addType('kclsu-button', {
    // Model definition
    isComponent: (el) => el.tagName === 'KCLSU-BUTTON',
    model: {
      // Default properties
      defaults: {
        tagName: 'kclsu-button',
        traits: [
          // Strings are automatically converted to text types
          'text', // Same as: { type: 'text', name: 'name' }
          'link',
          { type: 'checkbox', name: 'purple' },
        ],
        attributes: {
          text: '',
          link: '/',
          style: 'visibility:unset',
        },
        droppable: false, // Can't drop other elements inside
      },
      init() {
        // Also the listener changes from `change:attributes:*` to `change:*`
        this.on('change:attributes', this.handleAttrChange);
        this.on('component:mount', this.handleAttrChange);
      },

      handleAttrChange(e) {
        console.log('CHANGE');
        console.log(e);
        console.log('Attributes updated: ', this.getAttributes());
        const newTags = this.getAttributes();
        this.setAttributes({ text: newTags.text });
      },
    },
    view: {
      init(e) {
        // Also the listener changes from `change:attributes:*` to `change:*`
        console.log('INIY');
        console.log(e);
        const newTags = e.getAttributes();
        e.el.setAttributes({ text: newTags.text });
      },
    },
  });

  editor.Components.addType('kclsu-modal', {
    // Model definition
    model: {
      // Default properties
      defaults: {
        tagName: 'KCLSU-MODAL',
        droppable: false, // Can't drop other elements inside
        traits: ['KCLSU-MODAL'],
      },
    },
  });

  editor.Components.addType('flex-container', {
    // Model definition
    model: {
      // Default properties
      defaults: {
        tagName: 'flex-container',
        droppable: true, // Can't drop other elements inside
        attributes: {
          // Default attributes
          alignx: 'center',
        },
        traits: ['alignx'],
      },
    },
  });

  editor.Components.addType('lazy-image', {
    // Model definition
    model: {
      // Default properties
      defaults: {
        tagName: 'lazy-image',
        droppable: true, // Can't drop other elements inside
        attributes: {
          // Default attributes
          image: '',
        },
        traits: ['image'],
      },
    },
  });

  editor.Components.addType('label-card', {
    // Model definition
    model: {
      // Default properties
      defaults: {
        tagName: 'LABEL-CARD',
        droppable: true, // Can't drop other elements inside
        traits: ['LABEL-CARD'],
      },
    },
  });
};
