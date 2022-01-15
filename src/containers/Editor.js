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
    addSidePanel(ed);
    addSwitcherPanel(ed);
    addDevicePanel(ed);
    addActionsPanel(ed);
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
