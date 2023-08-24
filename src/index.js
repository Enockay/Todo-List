import './style.css';
//imports moments
import moment from 'moment';
import 'material-icons/css/material-icons.css';
// Initialize the calendar

// Render the calendar


//create the Dom of the todo-list
const container = document.createElement("div")
container.classList.add("container")

//append the container to the body
document.body.appendChild(container)

const sideBar = document.createElement("div")
sideBar.classList.add("sidebar")
container.appendChild(sideBar);

//main part 

const main = document.createElement("div")
main.classList.add("main")
container.appendChild(main);

//the header region
const header = document.createElement("div")
header.classList.add("header")
container.appendChild(header);

//the footer
const footer = document.createElement("div")
footer.classList.add("footer")
container.appendChild(footer);


//sidebar DOM
const title = document.createElement("div");
title.classList.add("title");
title.setAttribute("id","item");
title.textContent = "My Todo-List App ";
sideBar.appendChild(title);



const userName = document.createElement("div")
userName.classList.add("userName");
userName.setAttribute("id","item");
userName.textContent = "User Name :";
const label = document.createElement("label")
label.textContent = "ENOCK";
userName.appendChild(label)
sideBar.appendChild(userName)


//add a material icon 

const search = document.createElement("div")
search.classList.add("search");
search.setAttribute("id","item");
search.textContent = "Search"
const hr1 = document.createElement("hr");
sideBar.appendChild(hr1)
sideBar.appendChild(search);


const myDay = document.createElement("div")
myDay.classList.add("myDay");
myDay.setAttribute("id","item");
myDay.textContent = "My Day"
const hr2 = document.createElement("hr");
sideBar.appendChild(hr2)
sideBar.appendChild(myDay);

const important = document.createElement("div")
important.classList.add("important")
important.setAttribute("id","item");
important.textContent = "Important"
const hr3 = document.createElement("hr")
sideBar.appendChild(hr3)
sideBar.appendChild(important);

const planned = document.createElement("div")
planned.classList.add("planned")
planned.setAttribute("id","item");
planned.textContent = "Planned"
const hr4 = document.createElement("hr")
sideBar.appendChild(hr4)
sideBar.appendChild(planned);

const done = document.createElement("div")
done.classList.add("done");
done.setAttribute("id","item");
done.textContent = "Done"
const hr5 = document.createElement("hr")
sideBar.appendChild(hr5)
sideBar.appendChild(done);

const assignment = document.createElement("select")
assignment.setAttribute("id","item");
assignment.textContent = "Assignment";
assignment.classList.add("assignment");
const options = ['Home', 'Work', 'School'];

function createSelect (){
options.forEach((optionText) => {
    const optionElement = document.createElement('option');
    optionElement.textContent = optionText;
    assignment.appendChild(optionElement);
  });
}
createSelect();
 
const label2 = document.createElement("label")
label2.textContent = "TaskList";
assignment.appendChild(label2)

const h6 = document.createElement("hr");
sideBar.appendChild(h6)
sideBar.appendChild(assignment);

const Tasks = document.createElement("div");
Tasks.classList.add("Tasks");
Tasks.setAttribute("id","item");
Tasks.textContent = "Tasks"
const hr7 = document.createElement("hr");
sideBar.appendChild(hr7)
sideBar.appendChild(Tasks);

const projects = document.createElement("div");
projects.classList.add("projects");
projects.setAttribute("id","item");
projects.textContent = "Projects";
const h8 = document.createElement("hr");
sideBar.appendChild(h8)
sideBar.appendChild(projects);
const hr9 = document.createElement("hr");
sideBar.appendChild(hr9)


//the header section
const duration = document.createElement("div")
duration.classList.add("duration")
header.appendChild(duration);

const dates = document.createElement("div")
dates.classList.add("dates");
dates.textContent = `TODAY : ${moment().format("MMMM Do YYYY")}`;
duration.appendChild(dates);

const time = document.createElement("div")
time.classList.add("dates");
time.textContent = `TIME : ${moment().format("h:mm:ss a")}`;
duration.appendChild(time);

const userProject = document.createElement("div")
userProject.classList.add("userProjects");
header.appendChild(userProject);

const user = document.createElement("div")
user.classList.add("user")
user.textContent = ` USER : ${localStorage.getItem("userName")}`
userProject.appendChild(user);

const projectName = document.createElement("div")
projectName.classList.add("userProjects");
projectName.textContent = `PROJECT : ${localStorage.getItem("projectName")}`;
userProject.appendChild(projectName);


const addTask = document.createElement("input");
addTask.classList.add("add-task");
addTask.setAttribute("placeholder","+ ADD LIST");
sideBar.appendChild(addTask);

const submit = document.createElement("button");
submit.classList.add("submit");
submit.textContent = "submit List";
sideBar.appendChild(submit);

// push this to the options array
const addList = ()=>{
    const value = addTask.value
   options.push(value);
   createSelect();
}

submit.addEventListener("click",addList);

;

const mainContainer1 = document.createElement("div");
mainContainer1.classList.add("mainContainer1");
main.appendChild(mainContainer1);

const mainContainer2 = document.createElement("div");
mainContainer2.classList.add("mainContainer2");
main.appendChild(mainContainer2);

const task = document.createElement("input");
task.classList.add("task");
task.setAttribute("placeholder","+ADD TASK");
mainContainer1.appendChild(task);

const playGround = document.createElement("h4");
playGround.classList.add("play-ground");
playGround.textContent = "PlayGround To Your Todo-List:";
mainContainer2.appendChild(playGround);