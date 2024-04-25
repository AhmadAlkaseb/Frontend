console.log("Hello world");
document.getElementById("app").innerHTML = "Hi again";

const arr = ["Jack","Ahmad", "Jane", "Lars"];
const liArr = arr.map ( (name) => {
return "<li>"+name + " Doe"+"</li>";
});
document.getElementById("students").innerHTML = "<ul>" + liArr.join('')+"</ul>"; // UL står for unordered list