// 유저는 숫자만 입력할 수 있다 vv
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 작으면 Up! 이라고 알려준다 vv
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 크면 Down! 이라고 알려준다  vv
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자와 일치하다면 That’s right이라고 뜨고 게임이 종료된다.
// 유저는 총 5번의 기회가 있다
// 게임이 종료되면 버튼은 비활성화된다
// 리셋버튼을 누르면 게임이 초기화된다
// 유저가 1~100범위 밖에 숫자를 입력할시에 경고메세지가 뜬다
// 유저가 이미 입력한 값을 또 입력할 시에 경고메세지가 뜬다
// 반응형 UI

let chance = 5;
let randomNumber = 0;
let history = [];

let userInput = document.getElementById("user-input");
let playButton = document.getElementById("play-button");
let resetButton = document.getElementById("reset-button");
let chanceLeft = document.getElementById("chance-area");
let showResult = document.getElementById("result-area");
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);

function play() {
	userValue = userInput.value;
	if (userValue < 1 || userValue > 100) {
		showResult.innerHTML = "Choose a number between 1~100";
		return;
	} else if (history.includes(userValue)) {
		showResult.innerHTML =
			"You already guessed this number. Choose a different number";
		return;
	}
	history.push(userValue);

	chance--;
	chanceLeft.innerHTML = `You have ${chance} chances left`;

	if (chance == 0) {
		playButton.disabled = true;
		showResult.innerHTML = "You lost! Peach is mine now, HAHAHA";
	}

	if (userValue < randomNumber) {
		showResult.innerHTML = "Guess a larger number";
	} else if (userValue > randomNumber) {
		showResult.innerHTML = "Guess a smaller number";
	} else {
		playButton.disabled = true;
		chanceLeft.innerHTML = "";
		showResult.innerHTML =
			"NOOO YOU WON! I guess you can take Princess Peach now";
	}
}

function reset() {
	userInput.value = "";
	chance = 5;
	chanceLeft.innerHTML = `You have ${chance} chances left`;
	playButton.disabled = false;
	generateRandomNumber();
	console.log(randomNumber);
	history = [];
	play();
}

function generateRandomNumber() {
	randomNumber = Math.floor(Math.random() * 100 + 1);
}

generateRandomNumber();
console.log(randomNumber);
