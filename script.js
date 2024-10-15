
const emojiDetails = [

    { description: "smiling face with sunglasses", emoji: "😎" },
    { description: "thumbs up ", emoji: "👍" },
    { description: "smiling face with eye hearts", emoji: "😍" },
    { description: "thinking face", emoji: "🤔" },
    { description: "face with tears of joy", emoji: "😂" },
    { description: "smiling face with hearts", emoji: "🥰" },
    { description: "face blowing a kiss", emoji: "😘" },
    { description: "kissing face", emoji: "😗" },
    { description: "kissing face with closed eyes", emoji: "😚" },
    { description: "hugging face", emoji: "🤗" },
    { description: "face with raised eyebrowa", emoji: "🤨" },
    { description: "face with open mouth", emoji: "😯" },
    { description: "sleepy face", emoji: "😪" },
    { description: "tired face", emoji: "😫" },
    { description: "yawning face", emoji: "🥱" },
    { description: "sleeping face", emoji: "😴" }
]

let currentEmojiIndex = 0;
let score = 0;
const guessInput = document.getElementById("guess-input");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
let endStatement = document.createElement('div');
endStatement.classList.add("end");

function displayEmoji() {
    guessInput.focus();
    const descriptionELement = document.getElementById("description");
    descriptionELement.textContent = emojiDetails[currentEmojiIndex].emoji;
}

function checkEmoji() {
    const inputValue = guessInput.value.trim().toLowerCase();
    const description = emojiDetails[currentEmojiIndex].description.trim().toLowerCase();

    if (inputValue === description) {
        score++;
        resultElement.textContent = "Correct!"

    } else {
        resultElement.textContent = `Wrong! Guess another one carefully!`
    }
    setTimeout(function () {
        resultElement.textContent = '';
    }, 2000)
    scoreElement.textContent = `Score: ${score}`
    guessInput.value = ""
    nextEmoji();

}

function nextEmoji() {
    currentEmojiIndex++;
    if (currentEmojiIndex === emojiDetails.length) {
        scoreElement.textContent=`Final Score: ${score}`;
        endStatement.textContent = "Congratulations!! You have reached to the end";
        document.querySelector(".container").append(endStatement);
    }
    displayEmoji();

}

guessInput.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        checkEmoji();
    }
});

document.getElementById('restart-button').addEventListener("click", () => {
    scoreElement.textContent = `Score: ${score = 0}`
    guessInput.value = '';
    resultElement.textContent = "";
    endStatement.remove();
    currentEmojiIndex = 0;
    displayEmoji();

});

document.addEventListener("DOMContentLoaded", () => displayEmoji());
