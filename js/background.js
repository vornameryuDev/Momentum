const bgImg = document.createElement("img");
const randNum = Math.floor(Math.random() * 321);

bgImg.src = `https://picsum.photos/id/${randNum}/1000/500.webp`;
bgImg.id = "bgImg";
bgImg.onload = () => {console.log("위치완료")};
document.body.appendChild(bgImg);
// const imgUrl = `https://picsum.photos/id/${randNum}/500?grayscale&blur=2`;
// fetch(imgUrl)
// 	.then((res) => {
// 		bgImg.src = res.url;
// 		document.body.appendChild(bgImg);
// 	});
