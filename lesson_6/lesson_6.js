

function AddTask(task)
{ 	strId = task.split(' ').join('');
    $("#all_task").prepend('<div id="' + strId + '"><label>' + task + '</label> <input type="checkbox"/> <label>Done</label></div>');
}


function getListOfTasks(link)
{
    fetch(link)
    .then((response) => { return response.json(); })
    .then((data) => {
        const items = data;
        console.log(items);
        for (let i = 0; i < items.length; i++) {
            AddTask(items[i]["title"]);
        }
        
    })
}



$("#button_create").click(function(){
    var text = $("#input_task").val()
    AddTask(text);
});


getListOfTasks('https://jsonplaceholder.typicode.com/todos/')

$(document).ready(function() {AddTask("Do hw lesson 6")})
$(document).ready(function() {AddTask("Order food")})
$(document).ready(function() {AddTask("Eat lunch with bob")})
$(document).ready(function() {AddTask("Talk with Luchia")})


function listenForEventsOn(tagName)
{
    const observable = rxjs.fromEvent(document, "click").pipe(
        rxjs.operators.filter(value => value["target"].tagName === tagName.toUpperCase())
    );
    return observable;
}

listenForEventsOn("h1").subscribe((result) => console.log(result));