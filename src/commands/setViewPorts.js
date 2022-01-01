/* eslint-disable no-shadow */
export function setViewPorts(editor) {
  editor.Commands.add('set-device-desktop', {
    run: (editor) => editor.setDevice('Desktop'),
  });
  editor.Commands.add('set-device-mobile', {
    run: (editor) => editor.setDevice('Mobile'),
  });
}
