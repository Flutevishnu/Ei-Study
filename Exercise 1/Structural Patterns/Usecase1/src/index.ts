import { MediaPlayer
 } from "../Player/mediaplayer";

import { MP3Player } from "../Player/mp3Player";
import { MP4Player } from "../Player/mp4PLayer";
import { MP4Adapter } from "../Adapter/mp4Adapter";

const players: MediaPlayer[] = [
    new MP3Player(),
    new MP4Adapter(new MP4Player())
];

players.forEach(player => player.play('example.mp3'));
players.forEach(player => player.play('example.mp4'));

export { MP4Adapter };
