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
    crearDiv(nuevaTarea) {
        //CREACION DEL INPUT
        const inputItem = document.createElement('input');
        // atributos del input
        inputItem.setAttribute('disabled', 'true');
        inputItem.setAttribute('type', 'text');
        inputItem.classList.add('item-input');
        inputItem.value = nuevaTarea;
        //Agregando DIV
        const divnuevo = document.createElement('div')
        //Atributo del Div
        divnuevo.classList.add('Item')
        divnuevo.appendChild(inputItem);
        container.appendChild(divnuevo);

        //BOTON EDITAR
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
        //BOTON REMOVER
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

agregar.addEventListener('click', chequearInput)

//agregar con enter
input.addEventListener ('keyup', function (event) {
    if (event.keyCode == 13) {
        chequearInput()
    }
})
//Chequear input
function chequearInput() {
    if (input.value.trim() === ('')) {
    } else {
        saveTask (input.value)
        const x = new Item(input.value)
        input.value = ''
    }
}

function saveTask(task) {
    let localTasks = localStorage.getItem('tareas') || '[]';
    localTasks = JSON.parse(localTasks)
    localTasks.push(task);
    localTasks = JSON.stringify(localTasks);
    localStorage.setItem('tareas', localTasks)
  }
  




