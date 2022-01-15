import { setViewPorts } from '../commands/setViewPorts';

export function addDevicePanel(editor) {
  editor.Panels.addPanel({
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

  setViewPorts(editor);
}
