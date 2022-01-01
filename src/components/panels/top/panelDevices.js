import { useEffect } from 'react';
import { setViewPorts } from '../../../commands/setViewPorts';
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

const PanelDevices = (props) => {
  useEffect(() => {
    props.editor.Panels.addPanel({
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
    setViewPorts(props.editor);
  }, []);

  return <div className="panel__devices" />;
};

export default PanelDevices;
