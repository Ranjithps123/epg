/**
 * Created by satadru on 3/30/17.
 */
import EPGChannel from '../models/EPGChannel';
import EPGEvent from '../models/EPGEvent';


import MockDataService from '../utils/MockDataService';

export default class EPGData {

    constructor() {
        /*this.channels = new Array();
        this.events = new Array();*/
        // this.data = MockDataService.getMockData();
        //     this.channels = this.data;
        // }
        this.channels = [];
    }

    getChannel(position) {
        return this.channels[position];
    }

    setChannels(data) {
         this.channels = data;
         console.log(this.channels)
    }

    getEvents(channelPosition) {
        let channel = this.channels[channelPosition];
        let events = channel["events"];
        return events
    }

    getEventCount(channelPosition) {
        return this.getEvents(channelPosition).length;
    }

    getEvent(channelPosition, programPosition) {
        let channel = this.channels[channelPosition];
        let events = channel["events"];
        return events[programPosition];
    }

    getEventPosition(channelPosition, event) {
        let events = this.channels[channelPosition].getEvents();
        for (let i = 0; i < events.length; i++) {
            if (this.isEventSame(event, events[i])) {
                return i;
            }
        }
    }

    getChannelCount() {
        return this.channels?this.channels.length:0;
    }

    isEventSame(event1, event2) {
        if (event1.getStart() == event2.getStart() && event1.getEnd() == event2.getEnd()) {
            return true;
        }
        return false;
    }

    hasData() {
        return this.getChannelCount() > 0;
    }
}