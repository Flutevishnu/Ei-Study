
import { MediaPlayer } from '../Player/mediaplayer';
import { MP4Player } from '../Player/mp4PLayer';

export class MP4Adapter implements MediaPlayer {
    private mp4Player: MP4Player;

    constructor(mp4Player: MP4Player) {
        this.mp4Player = mp4Player;
    }

    play(fileName: string): void {
        this.mp4Player.playMP4(fileName);
    }
}