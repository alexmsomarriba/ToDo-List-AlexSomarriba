

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

    let filteredArray = [];

    let filterUserId;
    
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

    const filterTodos = () => {
        for (let i = 0; i < filteredArray.length; i++) {
            filteredArray.pop()
        }
        let ol = document.getElementById("todo-list");
        var items = document.querySelectorAll("#todo-list li");
        filterUserId = parseInt(document.getElementById("userIdInput").value);
        console.log(filterUserId)
        console.log(items)
        if(items.length > 0){
            for (let i = 0; i < items.length; i++) {
                ol.removeChild(items[i])              
            }
        }
        this.fetchTodos;
        console.log(arrayOfTodos)
        arrayOfTodos.forEach(element => {
            if(element.userId === filterUserId){
                var li = document.createElement("li");
                ol.appendChild(li);
                li.innerHTML = "userID: " + element.userId + "\n" + "id: " + element.id + "\n" + "title: " + element.title + "\n" + "complted: " + element.completed;
                filteredArray.push(element);
            }
        })
    }

    const filterByCompleted = () => {
        let ol = document.getElementById("todo-list");
        var items = document.querySelectorAll("#todo-list li");
        console.log(items)
        if(items.length > 0){
            for (let i = 0; i < items.length; i++) {
                ol.removeChild(items[i])              
            }
        }
        filteredArray.forEach(
            element => {
                if(element.completed === true && element.userId === filterUserId){
                    var li = document.createElement("li");
                    ol.appendChild(li);
                    li.innerHTML = "userID: " + element.userId + "\n" + "id: " + element.id + "\n" + "title: " + element.title + "\n" + "complted: " + element.completed;
                }
            }
        )
    }

    const filterByNonCompleted = () => {
        let ol = document.getElementById("todo-list");
        var items = document.querySelectorAll("#todo-list li");
        console.log(items)
        if(items.length > 0){
            for (let i = 0; i < items.length; i++) {
                ol.removeChild(items[i])              
            }
        }
        arrayOfTodos.forEach(
            element => {
                if(element.completed === false && element.userId === filterUserId){
                    var li = document.createElement("li");
                    ol.appendChild(li);
                    li.innerHTML = "userID: " + element.userId + "\n" + "id: " + element.id + "\n" + "title: " + element.title + "\n" + "complted: " + element.completed;
                }
            }
        )
    }