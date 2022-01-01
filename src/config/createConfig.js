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
  height: '300px',
  width: 'auto',
  // Disable the storage manager for the moment
  storageManager: false,
  layerManager: {
    appendTo: '.layers-container',
  },
  deviceManager: {
    devices,
  },
  // We define a default panel as a sidebar to contain layers
  panels: {
    defaults: [],
  },
  traitManager: {
    appendTo: '.traits-container',
  },
  blockManager: {
    appendTo: '#blocks',
    blocks: defaultBlocks,
  },
  selectorManager: {
    appendTo: '.styles-container',
  },
  styleManager: {
    appendTo: '.styles-container',
    sectors: styleSectors,
  },
  plugins: [customComponents],
});

export default createConfig;
