export const playSound = (sound) => {
    if (sound instanceof Audio) {
        sound.play();
    } else {
        console.error("Invalid file");
    }
};
