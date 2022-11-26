import Grapesjs from 'grapesjs';
import { useEffect, useState } from 'react';
import 'grapesjs/dist/css/grapes.min.css';
import '../index.css';
import createConfig from '../config/createConfig';
import { addDevicePanel } from '../panels/addDevicePanel';
import { addSwitcherPanel } from '../panels/addSwitcherPanel';
import { addActionsPanel } from '../panels/addActionsPanel';
import { addSidePanel } from '../panels/addSidePanel';
import { addTopPanel } from '../panels/addTopPanel';

const Editor = () => {
  const [editor, setEditor] = useState(null);

  const configure = (ed) => {
    if (!ed) return;
    console.log(ed);
    addTopPanel(ed);
    ed.on('block:custom', (props) => {
      console.log(props);
      // The `props` will contain all the information you need in order to update your UI.
      // props.blocks (Array<Block>) - Array of all blocks
      // props.dragStart (Function<Block>) - A callback to trigger the start of block dragging.
      // props.dragStop (Function<Block>) - A callback to trigger the stop of block dragging.
      // props.container (HTMLElement) - The default element where you can append your UI

      // Here you would put the logic to render/update your UI.
    });
    addSidePanel(ed);
    addSwitcherPanel(ed);
    addDevicePanel(ed);
    addActionsPanel(ed);

    // const toAdd = (name) => ed.blocks.indexOf(name) >= 0;

    // toAdd('link-block') &&
    //   ed.BlockManager.add('link-block', {
    //     category: 'Basic',
    //     label: 'Link Block',
    //     attributes: { class: 'fa fa-link' },
    //     content: {
    //       type: 'link',
    //       editable: false,
    //       droppable: true,
    //       style: {
    //         display: 'inline-block',
    //         padding: '5px',
    //         'min-height': '50px',
    //         'min-width': '50px',
    //       },
    //     },
    //   });

    ed.Components.addType('kclsu-button', {
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

    ed.BlockManager.add('kclsu-button', {
      category: 'Basic',
      label: 'Kclsu-Button',
      component: 'KCLSU-BUTTON',
      attributes: { class: 'fa fa-link' },
      content: {
        type: 'link',
        editable: false,
        droppable: true,
        style: {
          display: 'inline-block',
          padding: '5px',
          'min-height': '50px',
          'min-width': '50px',
        },
      },
    });

    console.log(ed);
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
        {/* <div id="templates"></div> HERE WE CAN ADD A COLUMN FOR TEMPLATES */}
        <div id="blocks" />
        <div className="editor-canvas">
          <div id="gjs">
            <h1>Page Editor</h1>
          </div>
        </div>
        <div className="panel__right">
          <div className="layers-container" />
          <div className="styles-container" />
          <div className="traits-container" />
        </div>
      </div>
    </>
  );
};

export default Editor;
