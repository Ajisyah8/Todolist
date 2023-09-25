// Mendapatkan elemen-elemen dari HTML
const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');

// Fungsi untuk menambahkan tugas baru
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <div>${taskText}</div>
            <div>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
        
        taskList.appendChild(taskItem);

        // Setel event listener untuk tombol Edit dan Delete
        const editBtn = taskItem.querySelector('.edit-btn');
        const deleteBtn = taskItem.querySelector('.delete-btn');
        
        editBtn.addEventListener('click', () => {
            const newText = prompt('Edit task:', taskText);
            if (newText !== null) {
                taskItem.querySelector('div:first-child').textContent = newText;
            }
        });

        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        // Bersihkan input setelah menambahkan tugas
        taskInput.value = '';
    }
}

// Tambahkan tugas saat tombol "Add" ditekan
addTaskBtn.addEventListener('click', addTask);

// Tambahkan tugas saat tombol "Enter" ditekan
taskInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
