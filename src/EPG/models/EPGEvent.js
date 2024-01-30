/**
 * Created by satadru on 3/30/17.
 */
export default class EPGEvent {

    constructor(start, end, title) {
        this.title = title;
        this.start = start;
        this.end = end;
    }

    getTitle() {
        return this.title;
    }

    getStart() {
        return this.start;
    }

    getEnd() {
        return this.end;
    }

    isCurrent() {
        let now = 1706521698670;
        return now >= this.start && now <= this.end;
    }
}