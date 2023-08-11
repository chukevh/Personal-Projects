// For
for(let i = 0; i < 10; i++) {
    console.log(i);
}

const todos = [
    {
        id: 0,
        text: 'Buy groceries',
        isComplete: false
    },
    {
        id: 2,
        text: 'See my doctor',
        isComplete: false
    },
    {
        id: 3,
        text: 'Do Erica',
        isComplete: true
    }
]

// runs function on each variable 'todo'
todos.forEach(function(todo) {
    console.log(todo.text);
});