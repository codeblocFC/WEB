let people = document.getElementById('peopole');
async function getPeople(){
    await fetch('https://randomuser.me/api/')
    .then (response=> response.json())
    .then (data => console.log(data.results[0].email));
}

function showPeople(person){
    people.innerHTML += '<h1>'+person.name.first+'</h1>';
}