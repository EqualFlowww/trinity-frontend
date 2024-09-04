import plugin from 'tailwindcss/plugin';
import { spacingUtilities } from './spacingUtilities';
import { sizingUtilities } from './sizingUtilities';
import { positionUtilities } from './positionUtilities';
import { borderUtilities } from './borderUtilities';
import { colorUtilities } from './colorUtilities';
import { flexUtilities } from './flexUtilites';

export default plugin(function (api) {
  spacingUtilities.handler(api);
  sizingUtilities.handler(api);
  positionUtilities.handler(api);
  borderUtilities.handler(api);
  colorUtilities.handler(api);
  flexUtilities.handler(api);
});
