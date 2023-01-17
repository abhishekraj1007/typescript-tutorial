interface Organism {
  isMamal?: boolean;
}

interface Animal extends Organism {
  name: string;
  breed: string;
  haveEyes: boolean;
  speak(): void;
  whoisowner: (ownername: string) => void;
}

const ant: Animal = {
  name: "nicky",
  breed: "ant",
  haveEyes: false,
  speak: () => console.log("I am ANT"),
  whoisowner(name) {
    console.log(`owner is ${name}`);
  },
};

ant.whoisowner("Abhishek");

interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createStory(): void;
}

class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

class Youtube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}

  createStory(): void {
    console.log("I am implementing the story featrue.");
  }
}

export {};
