import { MediaPlayer } from "./mediaplayer";

export class MP3Player implements MediaPlayer {
    play(fileName: string): void {
        console.log(`Playing MP3 file: ${fileName}`);
    }
}