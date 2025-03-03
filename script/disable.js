// Function to disable task completed buttons after click
document.addEventListener('DOMContentLoaded', function() {
    const taskCompletedButtons = document.querySelectorAll('.task-completed-btn');
    
    // Function to disable the button and change its appearance
    function disableButton(button) {
        // Disable the button
        button.disabled = true;
        
        // Change appearance to show it's completed
        button.classList.remove('bg-[#3752FD]', 'text-white', 'hover:bg-white', 'hover:text-[#3752FD]', 'hover:border-[#3752FD]');
        button.classList.add('bg-gray-300', 'text-gray-600', 'cursor-not-allowed');
        button.textContent = 'Completed';
    }
    
    // Add event listeners to all task completed buttons
    taskCompletedButtons.forEach(button => {
        button.addEventListener('click', function() {
            disableButton(button);
        });
    });
});