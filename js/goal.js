const goalForm = document.querySelector("form#todayGoal");
const goalInput = goalForm.querySelector("input");
const goalBox = document.querySelector("div.myGoalBox");
const myGoal = goalBox.querySelector("span.myGoal");
const goalEdit = goalBox.querySelector("button.goalEdit");

const savedGoal = localStorage.getItem("goal");

function goalFormController(event){
	event.preventDefault(); // 새로고침 방지
	localStorage.setItem("goal", goalInput.value); //localStorage 저장
	myGoal.innerText = goalInput.value; //myGoal업데이트
	displayNone(goalForm, goalBox); // goalForm숨기기 myGoal보이기
}
function goalEditController(){
	displayNone(goalBox, goalForm); // goalForm숨기기 myGoal보이기
	goalForm.addEventListener("submit", goalFormController);
}

goalEdit.addEventListener("click", goalEditController);

if (savedGoal) {
	//있으면
	myGoal.innerText = savedGoal; //myGoal업데이트
	displayNone(goalForm, goalBox); // goalForm숨기기 myGoal보이기
} else {
	goalForm.addEventListener("submit", goalFormController);
}