//Elementos HTML
let input = document.querySelector('.input');
let agregar = document.querySelector('.boton-agregar');
let container = document.querySelector('.container');
let lock = document.querySelectorAll('.botonEditar')

//Creando clase Item 
class Item {
    constructor(nuevaTarea) {
        this.crearDiv(nuevaTarea);
    }
    
    crearDiv(tarea) {
        //creacion del input
        const inputItem = document.createElement('input');
        // atributos del input
        inputItem.setAttribute('disabled', 'true');
        inputItem.setAttribute('type', 'text');
        inputItem.classList.add('item-input');
        inputItem.value = tarea;
        //Agregando DIV
        const divnuevo = document.createElement('div')
        //Atributo del Div
        divnuevo.classList.add('Item')
        divnuevo.appendChild(inputItem);
        container.appendChild(divnuevo);

        //Boton editar
        const botonEditar = document.createElement('button');
        botonEditar.classList.add('boton-editar');
        botonEditar.innerHTML = '<i class="fa-solid fa-lock"></i>';
        divnuevo.appendChild(botonEditar);
        container.appendChild(divnuevo);
        botonEditar.addEventListener('click', function () {
            const disabled =inputItem.hasAttribute('disabled')
            if (disabled){
                this.innerHTML = '<i class="fa-solid fa-lock-open"></i>'
                inputItem.removeAttribute('disabled')
            }else {
                this.innerHTML = '<i class="fa-solid fa-lock"></i>'
                inputItem.setAttribute('disabled', true )
            }       
        })
        //Boton remover
        const botonRemover = document.createElement('button');
        botonRemover.classList.add('boton-remover');
        botonRemover.innerHTML = '<i class="fa-solid fa-trash"></i>';
        divnuevo.appendChild(botonRemover);
        container.appendChild(divnuevo);
        botonRemover.addEventListener('click', function () {
            divnuevo.removeChild (inputItem)
            divnuevo.removeChild (botonRemover)
            divnuevo.removeChild (botonEditar)
        })
    }
}
//Boton agregar
agregar.addEventListener('click', function () {
    if (input.value === ('')) {
        alert ('debe ingresar una tarea')
    } else {
        let x = new Item(input.value)
        input.value = ''
    }
})

//local storage
function saveTask(task){
    let localTasks = localStorage.getItem('tareas') || '[]';
    localTasks = JSON.parse(localTasks)
    localTasks.push(task);
    localTasks =JSON.stringify(localTasks);
    localStorage.setItem('tareas', localTasks)

}
// aplicar los datos guardados en la pagina
let array = (localStorage.getItem('tareas'));
    array = JSON.parse(array)

 for(let i = 0; i<array.length; i++){
    const addTask = new Item(((array[i])))
 }


//  addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
      
//     }
// });