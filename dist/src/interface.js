"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ant = {
    name: "nicky",
    breed: "ant",
    haveEyes: false,
    speak: () => console.log("I am ANT"),
    whoisowner(name) {
        console.log(`owner is ${name}`);
    },
};
ant.whoisowner("Abhishek");
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    createStory() {
        console.log("I am implementing the story featrue.");
    }
}
