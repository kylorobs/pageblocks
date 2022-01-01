export const customComponents = () => (editor) => {
  editor.Components.addType('kclsu-button', {
    // Model definition
    model: {
      // Default properties
      defaults: {
        tagName: 'KCLSU-BUTTON',
        droppable: false, // Can't drop other elements inside
        traits: ['KCLSU-BUTTON'],
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
