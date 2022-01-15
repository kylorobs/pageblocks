/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { useEffect } from 'react';
import LayersEditor from './right/layersEditor';
import StylesEditor from './right/stylesEditor';
import TraitsEditor from './right/traitsEditor';

const RightPanels = (props) => {
  useEffect(() => {
    props.editor.Panels.addPanel({
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
  }, []);

  return (
    <div className="panel__right">
      <LayersEditor editor={props.editor} />
      <StylesEditor editor={props.editor} />
      <TraitsEditor editor={props.editor} />
    </div>
  );
};

export default RightPanels;
