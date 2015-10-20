
// Check if the user is ready to play!

confirm("Are you ready for this???");

age = prompt("What's your age");

if (age <= 13) {
    console.log("You shall ENTER! (at your own risk...)")
} else {
    console.log("You shall ENTER!!!!!")
}

console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'")

console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'")

userAnswer = prompt("Do you want to race Bieber on stage?")

if (userAnswer === "yes") {
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!")
} else {
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'")
}

feedback = prompt("Rate my game from 1 to 10, 1 being the worst game on the internet and 11 being like, Spinal Tap good.");

if (feedback > 8) {
    console.log("Thank you! We should race at the next concert!")
} else {
    console.log("I'll keep practicing coding and racing.")

//test