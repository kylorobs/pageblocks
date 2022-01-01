/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { useEffect } from 'react';
import BasicActions from './top/basicActions';
import PanelDevices from './top/panelDevices';
import PanelSwitcher from './top/panelSwitcher';

const TopPanels = (props) => {
  useEffect(() => {
    props.editor.Panels.addPanel({
      id: 'panel-top',
      el: '.panel__top',
    });
  }, []);

  return (
    <div className="panel__top">
      <BasicActions />
      <PanelDevices />
      <PanelSwitcher />
    </div>
  );
};

export default TopPanels;
