import { showLayers } from '../commands/showLayers';
import { showStyles } from '../commands/showStyles';
import { showTraits } from '../commands/showTraits';

export function addSwitcherPanel(editor) {
  editor.Panels.addPanel({
    id: 'panel-switcher',
    el: '.panel__switcher',
    buttons: [
      {
        id: 'show-layers',
        active: true,
        label: 'Layers',
        command: 'show-layers',
        // Once activateditor disable the possibility to turn it off
        togglable: false,
      },
      {
        id: 'show-style',
        active: true,
        label: 'Styles',
        command: 'show-styles',
        togglable: false,
      },
      {
        id: 'show-traits',
        active: true,
        label: 'Traits',
        command: 'show-traits',
        togglable: false,
      },
    ],
  });

  showTraits(editor);
  showStyles(editor);
  showLayers(editor);
}
