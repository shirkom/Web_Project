

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

$(document).ready(function() {AddTask("hello to you")})
$(document).ready(function() {AddTask("order now")})
$(document).ready(function() {AddTask("EAT LUNCH")})
$(document).ready(function() {AddTask("DDD HHH")})


function listenForEventsOn(tagName)
{
    const observable = rxjs.fromEvent(document, "click").pipe(
        rxjs.operators.filter(value => value["target"].tagName === tagName.toUpperCase())
    );
    return observable;
}

listenForEventsOn("h1").subscribe((result) => console.log(result));