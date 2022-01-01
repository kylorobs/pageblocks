import Grapesjs from 'grapesjs';
import { useEffect, useRef } from 'react';
import 'grapesjs/dist/css/grapes.min.css';
import createConfig from '../config/createConfig';
import TopPanels from '../components/panels/topPanels';

const Editor = () => {
  const editor = useRef(null);

  const loadGrapesJs = async () => {
    editor.current = await Grapesjs.init(createConfig());
  };

  useEffect(() => {
    loadGrapesJs();
  }, []);

  return (
    <>
      <TopPanels />
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
