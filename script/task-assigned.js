// Function to handle task assigned count
document.addEventListener('DOMContentLoaded', function() {
    const taskAssignedCountElement = document.getElementById('task-assigned-count');
    const taskCompletedButtons = document.querySelectorAll('.task-completed-btn');
    
    // Initial count from the HTML
    let taskAssignedCount = parseInt(taskAssignedCountElement.textContent);
    
    // Function to update the task assigned count
    function updateTaskAssignedCount() {
        taskAssignedCount--;
        taskAssignedCountElement.textContent = taskAssignedCount.toString().padStart(2, '0');
        
        // Check if all tasks are completed
        if (taskAssignedCount === 0) {
            setTimeout(() => {
                alert('Congrats! You have completed all the Current task');
            }, 300);
        }
    }
    
    // Add event listeners to all task completed buttons
    taskCompletedButtons.forEach(button => {
        button.addEventListener('click', updateTaskAssignedCount);
    });
});