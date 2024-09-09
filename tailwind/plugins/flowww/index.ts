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

export default plugin(function (api) {
  // spacingUtilities.handler(api);
  sizingUtilities.handler(api);
  hrUtilities.handler(api);
  positionUtilities.handler(api);
  borderUtilities.handler(api);
  colorUtilities.handler(api);
  flexUtilities.handler(api);
  opacityUtilities.handler(api);
  buttonUtilities.handler(api);
  textUtilities.handler(api);
});
