import { useEffect } from 'react';
import { showLayers } from '../../../commands/showLayers';
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

const LayersEditor = (props) => {
  useEffect(() => {
    showLayers(props.editor);
  }, []);

  return <div className="layers-container" />;
};

export default LayersEditor;
