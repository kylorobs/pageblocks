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
import { addCustomComponents } from '../panels/addCustomElements';
import Paste from '../components/ui/Paste';

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
    addCustomComponents(ed);
    setEditor(ed);

    console.log('GET HTML');
    console.log(ed.getHtml());

    console.log(ed);
  };

  const saveWork = () => {
    if (editor) console.log(editor.getHtml());
    editor.getCss();

    // HOW TO SET THE CONTENT
    // CKEDITOR.instances['ctl00_ctl00_Main_AdminPageContent_editorBody_editorText'].setData('<kclsu-button>Yay</kclsu-button>');

    // AND SET IT TO SOURCE CODE
    // CKEDITOR.instances.ctl00_ctl00_Main_AdminPageContent_editorBody_editorText.execCommand('source')
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
    <div style={{ position: 'relative', width: '100%' }}>
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
            <div>
              <h1>Page Editor</h1>
            </div>
          </div>
        </div>
        <div className="panel__right">
          <div className="layers-container" />
          <div className="styles-container" />
          <div className="traits-container" />
        </div>
      </div>
      <Paste save={saveWork} />
    </div>
  );
};

export default Editor;
