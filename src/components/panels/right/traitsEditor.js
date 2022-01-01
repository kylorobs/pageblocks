import { useEffect } from 'react';
import { showTraits } from '../../../commands/showTraits';
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

const TraitsEditor = (props) => {
  useEffect(() => {
    showTraits(props.editor);
  }, []);

  return <div className="traits-container" />;
};

export default TraitsEditor;
