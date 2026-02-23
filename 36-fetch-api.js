/**
 * Fetch API: es una función JS que permite hacer peticiones de tipo HTTP, incluyendo GET, POST, PUT, DELETE, etc. Es una API moderna .
 */

function getEmployees(){
    // fetch('Aqui se copia la URL https:/www.instagram.com/l_Kevssho')
    // Aunque para este caso estamos haciendo una petición a un archivo local
    // fetch("/data/employees.json");

    const file = "/data/employees.json"

    fetch(file)
    //Obtenemos los datos
    .then(result => {
        return result.json();
        
    })
    // este then es para acceder a los datos
    .then(data => {
        const { employees} = data;

        employees.forEach(employe =>{
           
            console.log(employe.id);
            console.log(employe.user);
            console.log(employe.job);

            document.querySelector('.content').textContent += employe.user;
        })

        console.log(employees);
    })


}

getEmployees();