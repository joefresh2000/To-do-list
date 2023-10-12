document.addEventListener("DOMContentLoaded", () => {
    let startTimeinput = document.getElementById("task")
    let taskTextinput = document.getElementById("startTime")
    let addTaskBtn = document.getElementById("addTask")
    let tasklist = document.getElementById("tasklist")



    function addTaskNow(taskText, startTime) {
        let li = document.createElement("li");
        li.innerHTML = `
<span>${taskText}</span>
<span class="timey">${startTime}</span>
<span class="del">delete</span>`;


        tasklist.appendChild(li);




        let startTimespan = li.querySelector(".timey")
        let deleteBtn = li.querySelector(".del")

        let currrentTime = new Date();
        let [starHour, startmin] = startTime.split(":").map(Number);
        let differnceTime = (starHour - currrentTime.getHours()) * 3600000 +
            (startmin - currrentTime.getMinutes()) * 60000;



        setTimeout(function () {
            li.style.textDecoration = "line-through";
            deleteBtn.style.display = "none";

        }, differnceTime);

        deleteBtn.addEventListener("click", function () {
            li.remove();
        });


    }

    addTaskBtn.addEventListener('click', () => {
        let taskText = taskTextinput.value;
        let startTime = startTimeinput.value;

        if (taskText !== "" && startTime !== "") {
            addTaskNow(startTime, taskText)
            taskTextinput.value = "";
            startTimeinput.value = "";

        }
    });




});