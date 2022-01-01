import { useEffect } from 'react';
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

const PanelSwitcher = (props) => {
  useEffect(() => {
    props.editor.Panels.addPanel({
      id: 'panel-switcher',
      el: '.panel__switcher',
      buttons: [
        {
          id: 'show-layers',
          active: true,
          label: 'Layers',
          command: 'show-layers',
          // Once activated disable the possibility to turn it off
          togglable: false,
        },
        {
          id: 'show-style',
          active: true,
          label: 'Styles',
          command: 'show-styles',
          togglable: false,
        },
        {
          id: 'show-traits',
          active: true,
          label: 'Traits',
          command: 'show-traits',
          togglable: false,
        },
      ],
    });
  }, []);

  return <div className="panel__switcher" />;
};

export default PanelSwitcher;
