let tasks = {
    obbligo: [],
    verità: []
};

function addTask() {
    const inputText = document.getElementById('inputText').value.trim();
    if (inputText) {
        if (inputText.toLowerCase().includes('verità')) {
            tasks.verità.push(inputText);
        } else {
            tasks.obbligo.push(inputText);
        }
        document.getElementById('inputText').value = '';
        alert('Aggiunto con successo!');
    } else {
        alert('Inserisci un obbligo o una verità.');
    }
}

function showTask(type) {
    const taskList = tasks[type];
    if (taskList.length === 0) {
        document.getElementById('taskDisplay').innerText = 'Nessun ' + type + ' disponibile.';
    } else {
        const randomTask = taskList[Math.floor(Math.random() * taskList.length)];
        document.getElementById('taskDisplay').innerText = randomTask;
    }
}
