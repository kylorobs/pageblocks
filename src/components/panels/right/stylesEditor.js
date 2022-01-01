import { useEffect } from 'react';
import { showStyles } from '../../../commands/showStyles';
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

const StylesEditor = (props) => {
  useEffect(() => {
    showStyles(props.editor);
  }, []);

  return <div className="styles-container" />;
};

export default StylesEditor;
