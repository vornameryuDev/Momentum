const todoListBox = document.querySelector("div#todoListBox");
const todoBtn = document.querySelector("button.todoBtn");
const todoForm = document.querySelector("form#todoForm");
const todoInput = document.querySelector("form#todoForm input");
const todoList = todoListBox.querySelector("ul#todoList");

let todoArray = [];

HIDDEN_CLASS = "hidden"


function controllTodoList(){
	if (todoListBox.classList.contains(HIDDEN_CLASS)) {
		//todo input없으면
		todoListBox.classList.remove(HIDDEN_CLASS); // todo input 보이게 하기
	} else {
		//todo input 있으면
		todoListBox.classList.add(HIDDEN_CLASS); //todo input 숨기기
	}
}
// 태그만들기
function createTag(tagName){
	return document.createElement(tagName);
}
function savelocalStorage(todoArray){
	localStorage.setItem("todo", JSON.stringify(todoArray));
}
function deleteTodo(event){
	const parentElement = event.target.parentElement; //event발생한 부모요소 검색(li)
	console.log(parentElement);
	todoList.removeChild(parentElement); //부모요소 삭제
	todoArray = todoArray.filter((todo) => todo.id != parseInt(parentElement.id)); //delete누르지 않은 애들만 남기기
	savelocalStorage(todoArray);
}
function pushToChild(todo){
	const todoLi = createTag("li") //li태그 생성
	const todoSpan = createTag("span"); //span태그 생성
	const todoDeleteBtn = createTag("button"); //button 태그 생성
	todoLi.id = todo.id; //li에 id추가
	todoDeleteBtn.id = "todoDelBtn"; //todoDeleteBtn에 id추가
	todoDeleteBtn.innerText = "Delete"; //todoDeleteBtn에 텍스트 추가
	todoDeleteBtn.addEventListener("click", deleteTodo); //todoDeleteBtn 삭제기능
	todoSpan.innerText = todo.value; //span에 todo 넣기
	todoLi.appendChild(todoSpan); //li하위에 todoSpan 추가
	todoLi.appendChild(todoDeleteBtn) //li하위에 todoDeleteBtn 추가
	todoList.appendChild(todoLi); //todoList하위에 li추가
}
function controllTodoSubmit(event){
	event.preventDefault(); //새로고침 방지
	const inputValue = todoInput.value;
	const todo = {
		id: Date.now(),
		value: inputValue
	}
	console.log(todo);
	todoArray.push(todo); //todoArray에 넣기
	savelocalStorage(todoArray); //localStorage에 저장
	todoInput.value = ""; //todoInput ""으로 초기화

	pushToChild(todo) //태그만들어 넣기	
}

todoBtn.addEventListener("click", controllTodoList); //todoListBox Toggle
todoForm.addEventListener("submit", controllTodoSubmit); // submit controll

const savedTodo = localStorage.getItem("todo");
if (savedTodo) {
	const parsedTodo = JSON.parse(savedTodo); //localStorage에서 변환해서 가져오기
	todoArray = parsedTodo; //todoArray를 localStorage의 array로 초기화
	todoArray.forEach(element => {
		pushToChild(element); //parsedTodo 하나씩 todoList에 추가
	});
	
}