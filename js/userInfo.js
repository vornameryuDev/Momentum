const userInfo = document.querySelector("div#userInfo");
const userInfoForm = document.querySelector("form#userInfoForm");
const userInput = document.querySelector("form#userInfoForm input");

const componentsBlock = document.querySelector("div#components_block");


const user = componentsBlock.querySelector("div#greeting span:nth-child(2)");

const LocalStorageUserKey = "username"
CLASS_HIDDEN = "hidden";

function displayNone(elem1, elem2){	
	elem1.classList.add(CLASS_HIDDEN);
	elem2.classList.remove(CLASS_HIDDEN);
}
function submitInfoControll(event){
	event.preventDefault(); //새로고침방지	
	username = userInput.value;
	localStorage.setItem(LocalStorageUserKey, username); //localStorage저장
	user.innerText = username; //greeting 이름 넣기
	displayNone(userInfo, componentsBlock);
}


	if (localStorage.getItem(LocalStorageUserKey) !== null) {
		//저장되어 있으면
		user.innerText = localStorage.getItem(LocalStorageUserKey)
		displayNone(userInfo, componentsBlock);
	} else {
		//저장되어 있지 않으면
		userInfoForm.addEventListener("submit", submitInfoControll);
	}
