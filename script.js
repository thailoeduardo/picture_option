//variaveis

var
  btn_1 = document.getElementById('btn_1'),
  btn_2 = document.getElementById('btn_2'),
  btn_3 = document.getElementById('btn_3'),
  myImage = document.querySelector('img');

//eventos

btn_1.addEventListener('click', img1, false);
btn_2.addEventListener('click', img2, false);
btn_3.addEventListener('click', img3, false);

//funções

function img1() {
  myImage.setAttribute ('src','img_1.jpg');
};

function img2() {
  myImage.setAttribute ('src','img_2.jpg');
};

function img3() {
  myImage.setAttribute ('src','img_3.jpg');
};
