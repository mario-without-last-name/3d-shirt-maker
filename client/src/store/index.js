import { proxy } from 'valtio';

const state = proxy({
  intro: true, // currently in home page or not?
  color: '#77CCFF',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './nom.gif',
  fullDecal: './polygons.png'
});

export default state;