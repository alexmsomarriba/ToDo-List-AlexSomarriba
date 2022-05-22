

    let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    const populateTodos = () => {
        let ol = document.getElementById("todo-list");
        arrayOfTodos.map(arr=>{
         var li = document.createElement("li");
         ol.appendChild(li);
         li.innerHTML = "userID: " + arr.userId + "\n" + "id: " + arr.id + "\n" + "title: " + arr.title + "\n" + "complted: " + arr.completed;
        })
    }