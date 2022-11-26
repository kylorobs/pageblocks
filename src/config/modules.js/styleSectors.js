export const styleSectors = [
  {
    name: 'Dimension',
    open: false,
    // Use built-in properties
    buildProps: [
      'width',
      'min-width',
      'height',
      'min-height',
      'padding',
      'margin',
      'position',
    ],
    // Use `properties` to define/override single property
    properties: [
      {
        // Type of the input,
        // options: integer | radio | select | color | slider | file | composite | stack
        type: 'integer',
        name: 'Width', // Label for the property
        property: 'width', // CSS property (if buildProps contains it will be extended)
        units: ['px', 'em', '%'], // Units, available only for 'integer' types
        defaults: 'auto', // Default value
        min: 0, // Min value, available only for 'integer' types
      },
    ],
  },
  {
    name: 'Custom',
    open: false,
    buildProps: ['background-color', 'box-shadow', 'custom-prop'],
    properties: [
      {
        id: 'custom-prop',
        name: 'Custom Label',
        property: 'font-size',
        type: 'select',
        defaults: '32px',
        // List of options, available only for 'select' and 'radio'  types
        options: [
          { value: '12px', name: 'Tiny' },
          { value: '18px', name: 'Medium' },
          { value: '32px', name: 'Big' },
        ],
      },
    ],
  },
];
