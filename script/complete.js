// Function to handle task completed count
document.addEventListener('DOMContentLoaded', function() {
    const taskCompletedCounterElement = document.getElementById('task-completed-counter');
    const taskCompletedButtons = document.querySelectorAll('.task-completed-btn');
    
    // Initial count from the HTML
    let taskCompletedCount = parseInt(taskCompletedCounterElement.textContent);
    
    // Function to update the task completed count
    function updateTaskCompletedCount() {
        taskCompletedCount++;
        taskCompletedCounterElement.textContent = taskCompletedCount;
        
        // Alert for board update
        alert('Board Updated Successfully');
    }
    
    // Add event listeners to all task completed buttons
    taskCompletedButtons.forEach(button => {
        button.addEventListener('click', updateTaskCompletedCount);
    });
});