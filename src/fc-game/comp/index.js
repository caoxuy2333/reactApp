import nes from './nes';
import CPU from './cpu';
import Keyboard from './keyboard';
import Mappers from './mappers';
import PAPU from './papu';
import PPU from './ppu';
import ROM from './rom';
import DummyUI from './ui';
// import './utils';

nes.CPU = CPU;
nes.Keyboard = Keyboard;
nes.Mappers = Mappers;
nes.PAPU = PAPU;
nes.PPU = PPU;
nes.ROM = ROM;
nes.DummyUI = DummyUI;

export default nes;