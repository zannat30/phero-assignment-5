
 let checkbox =23;
 let task = 5;

 const completeButton = document.querySelector('#complete-btn');
     completeButton.addEventListener("click",
     function(event){
         event.preventDefault();
         alert("Board updated sucessfully");

     
         checkbox++;
         task--;
         document.getElementById("checkbox").innerText = checkbox;
        document.getElementById("task-assigned").innerText = task;

        completeButton.disabled =true;


        let activityLog = document.getElementById("activity-log");
        let notification = document.createElement('div');
        notification.innerText = `You have completed the task ${heading-text}`;
        activityLog.appendChild(notification);
    }
 )


