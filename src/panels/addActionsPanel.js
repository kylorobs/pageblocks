export function addActionsPanel(ed) {
  ed.Panels.addPanel({
    id: 'basic-actions',
    el: '.panel__basic-actions',
    buttons: [
      {
        id: 'visibility',
        active: true, // active by default
        className: 'btn-toggle-borders',
        label: '<u>B</u>',
        command: 'sw-visibility', // Built-in command
      },
      {
        id: 'export',
        className: 'btn-open-export',
        label: 'Exp',
        command: 'export-template',
        context: 'export-template', // For grouping context of buttons from the same panel
      },
      {
        id: 'show-json',
        className: 'btn-show-json',
        label: 'JSON',
        context: 'show-json',
        command(editorr) {
          editorr.Modal.setTitle('Components JSON')
            .setContent(
              `<textarea style="width:100%; height: 250px;">
                    ${JSON.stringify(editorr.getComponents())}
                  </textarea>`
            )
            .open();
        },
      },
    ],
  });
}
