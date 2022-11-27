export const KCLSUBUTTON = {
  name: 'kclsu-button',
  model: {
    defaults: {
      traits: [
        // Strings are automatically converted to text types
        'text', // Same as: { type: 'text', name: 'name' }
        'link',
        'purple',
      ],
      // As by default, traits are binded to attributes, so to define
      // their initial value we can use attributes
      attributes: { text: 'me', purple: 'true', link: '/' },
      content: `<kclsu-button></kclsu-button>`,
    },

    handleTypeChange() {
      console.log('Input type changed to: ');
    },

    // init() {
    //   console.log('init');
    //   console.log(this);
    //   this.on('change:placeholder', this.handleTypeChange);
    // },
  },
  labelName: 'KclsuButton',
  labelElement: '<b>Kclsu Button</b>',
  attributes: { purple: true, text: 'My Custom Button' },
  content: { type: 'kclsu-button' },
};
