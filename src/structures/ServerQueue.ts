/* eslint-disable no-underscore-dangle, @typescript-eslint/unbound-method */
import { IServerQueue } from "../typings";
import SongManager from "../utils/SongManager";

export default class ServerQueue implements IServerQueue {
    public connection: IServerQueue["connection"] = null;
    readonly songs: IServerQueue["songs"] = new SongManager();
    public volume: IServerQueue["volume"] = 50;
    public playing: IServerQueue["playing"] = false;
    public loopMode: IServerQueue["loopMode"] = 0;
    constructor(public textChannel: IServerQueue["textChannel"] = null,
        public voiceChannel: IServerQueue["voiceChannel"] = null) {}
}