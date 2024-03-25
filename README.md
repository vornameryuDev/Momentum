# Momentum
Chrome Extention Momentum Cloning Project

HTML, CSS, vanillaJS를 통해 Chrome extention중 일정관리를 위한 Momentum을 클로닝한 프로젝트

toggle, fetch, API, form(event prevent) 등 기능 사용

Math 함수를 통해 배경이미지와 명언 랜덤화

매 초마다 시간 확인 할 수 있도록 함

![image](https://github.com/vornameryuDev/Momentum/assets/164843831/b7ecacf2-7701-4b31-b535-414656b4c237)
![image](https://github.com/vornameryuDev/Momentum/assets/164843831/acf6679a-6079-4032-a1d6-371b9c37fc58)
![image](https://github.com/vornameryuDev/Momentum/assets/164843831/f8c779f6-ef29-4ae4-8919-2d820a728d0c)
![image](https://github.com/vornameryuDev/Momentum/assets/164843831/7075e97c-b44b-4820-b54d-e8f6188411f1)


# 주요기능

[time]
  - SetInterval을 통해 현재 시간을 초단위로 나타낼 수 있도록 구현
  - padStart를 통해 시간은 2자리로 표시

[todo]
  - 토글형식으로 나타냄
  - 할일 input형식으로 받아 Json 변환 후 localStorage와 연동(stringify, parse)
  - delete 버튼을 통한 삭제 기능 구현

[weather]
  - geolocation에서 latitude, longitude값 추출
  - openweathermap.org Api 사용하여 기온과 현 위치 반환

[Goal]
  - 수정 및 삭제가 가능하도록 구현

[Greeting]
  - 내 이름 작성시 toggle형식으로 변환되도록 구현
  - 한번 입력되면 localStorage에 저장되어 다시 입력하지 않아도 나타나도록 구현
  - 현 시간에 맞춰 "Good Morning", "Good Evening" 등 인사 문구 나타나도록 구현

[Quotes]
  - 10개 명언 [{}, {}] 형태
  - 새로고침 될때마다 명언, 저자 형식으로 랜덤하게 나타날 수 있도록 구현

[Image]
  - Lorem Picsum의 Api호출하여 무작위 Image 배치
