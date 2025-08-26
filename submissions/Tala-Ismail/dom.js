//Task 1
const body = document.body;

const main = body.children[1]; 
const lastElementInMain = main.lastElementChild;
console.log( lastElementInMain.tagName); 

const section = main.firstElementChild;
console.log(section.children.length); 

const totalChildNodes = section.childNodes.length; 
const totalElementChildren = section.children.length; 
console.log("Difference:", totalChildNodes - totalElementChildren); //Explanation: childNodes includes text nodes (like whitespace), children excludes them

const firstNode = body.childNodes[0];
console.log("First child nodeType:", firstNode.nodeType); 
console.log("First child nodeName:", firstNode.nodeName); 

const firstPara = section.children[0];
const secondPara = section.children[1];
console.log( firstPara.nextElementSibling === secondPara); 

console.log("Unexpected text nodes in <main>:");

for (const node of main.childNodes) {
  if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== "") {
    console.log(" - Text Node Found:", node.textContent.trim());
  }
}
// Explanation: These text nodes come from whitespace (like newlines or indentation) in the HTML.


//Task 2

const div = document.createElement('div');
div.className = 'card';
div.dataset.role = 'admin';

const h2 = document.createElement('h2');
h2.textContent = 'Access Panel';

const p = document.createElement('p');
p.textContent = 'Authenticated';

div.appendChild(h2);
div.appendChild(p);

document.body.appendChild(div);

console.log( div.dataset.role);

p.textContent = 'Welcome back, Admin';

div.classList.add('authenticated', 'highlight');

console.log( div.classList.contains('card')); 

if (div.classList.contains('card')) {
  div.classList.remove('card');
}
console.log(div.className);
