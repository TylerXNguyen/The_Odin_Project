const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const p = document.createElement('p');
p.style.color = 'red';
p.textContent = "Hey, I'm Red";
container.appendChild(p);

const header3 = document.createElement('h3');
header3.style.color = 'blue';
header3.textContent = "Hey, I'm Blue h3";
container.appendChild(header3);

const divider = document.createElement("div");
const header2 = document.createElement('h2');
header2.textContent = "I'm in a div";
divider.appendChild(header2);
const p2 = document.createElement('p');
p2.textContent = "Me Too";
divider.appendChild(p2);
container.appendChild(divider);


const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const yolo = document.querySelector('#btn2');
yolo.addEventListener('click', () => {
  console.log("pressed");
});


yolo.addEventListener("click", alertFunction);
yolo.addEventListener('click', function(e) {
    console.log(e.target);
    e.target.style.background = 'blue';
});
function alertFunction() {
    alert("YAY! YOU DID IT!");
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    console.log("heyo");
});
