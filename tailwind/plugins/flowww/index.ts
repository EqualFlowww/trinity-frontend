import plugin from 'tailwindcss/plugin';
// import { spacingUtilities } from './spacingUtilities';
import { sizingUtilities } from './sizingUtilities';
import { positionUtilities } from './positionUtilities';
import { borderUtilities } from './borderUtilities';
import { colorUtilities } from './colorUtilities';
import { flexUtilities } from './flexUtilites';
import { opacityUtilities } from './opacityUtilities';
import { hrUtilities } from './hrUtilities';
import { buttonUtilities } from './buttonUtilities';
import { textUtilities } from './textUtilities';
import { spinnerUtilities } from './spinnerUtilities';

export default plugin(function (api) {
  borderUtilities.handler(api);
  buttonUtilities.handler(api);
  colorUtilities.handler(api);
  flexUtilities.handler(api);
  hrUtilities.handler(api);
  opacityUtilities.handler(api);
  positionUtilities.handler(api);
  sizingUtilities.handler(api);
  // spacingUtilities.handler(api);
  spinnerUtilities.handler(api);
  textUtilities.handler(api);
});
