const ul = document.getElementById("ul");

const li0 = document.createElement("li");
li0.id = "null";
li0.innerText = "0";

const li2 = document.createElement("li");
li2.id = "second";
li2.innerText = "2";

const li4 = document.createElement("li");
li4.id = "fourth";
li4.innerText = "4";


ul.insertBefore(li0, ul.firstChild);
ul.insertBefore(li2, ul.children[2]);  
ul.appendChild(li4);    