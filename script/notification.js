// Function to push notifications to the activity log
document.addEventListener('DOMContentLoaded', function() {
    const activityLogElement = document.getElementById('activity-log');
    const taskCompletedButtons = document.querySelectorAll('.task-completed-btn');
    
    // Function to get current time in format HH:MM:SS AM/PM
    function getCurrentTime() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        
        hours = hours % 12;
        hours = hours ? hours : 12; // Convert 0 to 12
        
        return `${hours}:${minutes}:${seconds} ${ampm}`;
    }
    
    // Function to create and add notification
    function addNotification(taskTitle) {
        // Create notification element
        const notificationDiv = document.createElement('div');
        notificationDiv.className = 'p-3 bg-[#F4F7FF] rounded-lg';
        
        const notificationText = document.createElement('p');
        notificationText.className = 'text-sm';
        notificationText.textContent = `You have Completed The Task ${taskTitle} at ${getCurrentTime()}`;
        
        notificationDiv.appendChild(notificationText);
        
        // Add to the top of the activity log
        if (activityLogElement.firstChild) {
            activityLogElement.insertBefore(notificationDiv, activityLogElement.firstChild);
        } else {
            activityLogElement.appendChild(notificationDiv);
        }
    }
    
    // Add event listeners to all task completed buttons
    taskCompletedButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the closest card and get the task title
            const card = button.closest('.card');
            const taskTitle = card.querySelector('.task-title').textContent;
            
            // Add notification
            addNotification(taskTitle);
        });
    });
});