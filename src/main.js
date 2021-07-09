import 'mui-player/dist/mui-player.min.css'
import MuiPlayer from 'mui-player'

import playerConfig from './js/config'
import globals from './js/global'
import { listener } from './js/playerListener'

window.onload = () => {
    let muiplayer = new MuiPlayer(playerConfig);
    globals.mp = muiplayer;
    
    listener();
}