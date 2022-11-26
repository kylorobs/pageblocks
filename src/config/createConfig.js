import { customComponents } from '../plugins/customComponents';
import { defaultBlocks } from './modules.js/defaultBlocks';
import { devices } from './modules.js/devices';
import { externalScripts, externalStyles } from './modules.js/externalFiles';
import { styleSectors } from './modules.js/styleSectors';
import 'grapesjs/dist/css/grapes.min.css';

const createConfig = () => ({
  canvas: {
    scripts: externalScripts,
    styles: externalStyles,
  },
  container: '#gjs',
  fromElement: true,
  height: '100vh',
  width: 'auto',
  // Disable the storage manager for the moment
  storageManager: false,
  layerManager: {
    appendTo: '.layers-container',
  },
  deviceManager: {
    devices,
  },
  panels: {
    defaults: [],
  },
  traitManager: {
    appendTo: '.traits-container',
  },
  blockManager: {
    appendTo: '#blocks',
    blocks: defaultBlocks,
    custom: true,
  },
  selectorManager: {
    appendTo: '.styles-container',
  },
  styleManager: {
    appendTo: '.styles-container',
    sectors: styleSectors,
  },
  // plugins: [customComponents],
});

export default createConfig;
