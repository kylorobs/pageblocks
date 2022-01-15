import Grapesjs from 'grapesjs';
import { useEffect, useState } from 'react';
import 'grapesjs/dist/css/grapes.min.css';
import createConfig from '../config/createConfig';
// import TopPanels from '../components/panels/topPanels';
// import RightPanels from '../components/panels/rightPanels';
import { setViewPorts } from '../commands/setViewPorts';
import { showTraits } from '../commands/showTraits';
import { showStyles } from '../commands/showStyles';
import { showLayers } from '../commands/showLayers';

import '../index.css';

const Editor = () => {
  const [editor, setEditor] = useState(null);

  const configure = (ed) => {
    if (!ed) return;
    console.log(ed);
    ed.Panels.addPanel({
      id: 'panel-top',
      el: '.panel__top',
    });

    ed.Panels.addPanel({
      id: 'layers',
      el: '.panel__right',
      // Make the panel resizable
      resizable: {
        maxDim: 350,
        minDim: 200,
        tc: 0, // Top handler
        cl: 1, // Left handler
        cr: 0, // Right handler
        bc: 0, // Bottom handler
        // Being a flex child we need to change `flex-basis` property
        // instead of the `width` (default)
        keyWidth: 'flex-basis',
      },
    });

    ed.Panels.addPanel({
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

    ed.Panels.addPanel({
      id: 'panel-devices',
      el: '.panel__devices',
      buttons: [
        {
          id: 'device-desktop',
          label: 'D',
          command: 'set-device-desktop',
          active: true,
          togglable: false,
        },
        {
          id: 'device-mobile',
          label: 'M',
          command: 'set-device-mobile',
          togglable: false,
        },
      ],
    });

    setViewPorts(ed);

    ed.Panels.addPanel({
      id: 'basic-actions',
      el: '.panel__basic-actions',
      buttons: [
        {
          id: 'visibility',
          active: true, // active by default
          className: 'btn-toggle-borders',
          label: '<u>B</u>',
          command: 'sw-visibility', // Built-in command
        },
        {
          id: 'export',
          className: 'btn-open-export',
          label: 'Exp',
          command: 'export-template',
          context: 'export-template', // For grouping context of buttons from the same panel
        },
        {
          id: 'show-json',
          className: 'btn-show-json',
          label: 'JSON',
          context: 'show-json',
          command(editorr) {
            editorr.Modal.setTitle('Components JSON')
              .setContent(
                `<textarea style="width:100%; height: 250px;">
                      ${JSON.stringify(editorr.getComponents())}
                    </textarea>`
              )
              .open();
          },
        },
      ],
    });

    showTraits(ed);
    showStyles(ed);
    showLayers(ed);
  };

  const loadGrapesJs = async () => {
    const editorConfig = await Grapesjs.init(createConfig());
    configure(editorConfig);
    return editorConfig;
  };

  useEffect(() => {
    console.log('load grapes');
    loadGrapesJs();
  }, []);

  return (
    <>
      <div className="panel__top">
        <div className="panel__basic-actions" />
        <div className="panel__devices" />
        <div className="panel__switcher" />
      </div>
      <div className="editor-row">
        <div className="editor-canvas">
          <div id="gjs">
            <h1>Hello World Component!</h1>
          </div>
        </div>
        <div className="panel__right">
          <div className="layers-container" />
          <div className="styles-container" />
          <div className="traits-container" />
        </div>
      </div>
      <div id="blocks" />
    </>
  );
};

export default Editor;
