const personas = [
    new Persona('Juan', 'Perez'),
    new Persona('Karla', 'Lara')
];

function mostrarPersonas(){
    console.log('Mostrar personas...');
    let texto = '';
    for(let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    const forma = document.forms["forma"];
    const nombre = forma["nombre"];
    const apellido = forma["apellido"];
    /*if(nombre.value != "" && apellido.value != ""){
        const persona = new Persona(nombre.value, apellido.value);
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
        }
        else {
            console.log("No hay información que agregar");
        }*/
        if (nombre.value !== "" && apellido.value !== "") {

            // Verificar si ya existe una persona con los mismos datos
            const existePersona = personas.find(persona => persona.nombre.toLowerCase() === nombre.value.toLowerCase() && persona.apellido.toLowerCase() === apellido.value.toLowerCase());
            
            if (existePersona) {
                console.log("Los datos ingresados ya existen");
            } else {
                const persona = new Persona(nombre.value, apellido.value);
                console.log(persona);
                personas.push(persona);
                mostrarPersonas();
            }
        } else {
            console.log("No hay información que agregar");
        }
 }
