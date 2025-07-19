const form   = document.getElementById('todo-form');
const input  = document.getElementById('todo-input');
const listEl = document.getElementById('todo-list');

form.addEventListener("submit", function(e){
    e.preventDefault();

const text = input.value.trim();
if (text === '') return;

const li = document.createElement('li');
const span = document.createElement('span');
span.textContent= text;

span.addEventListener('click', function(){
    li.classList.toggle('completed');
});

const delBtn = document.createElement('button');
delBtn.innerHTML = '<i class="fas fa-trash"></i>';
delBtn.className = 'delete-btn';


delBtn.addEventListener('click', function(){

    li.remove();
});

li.append(span, delBtn);
listEl.appendChild(li);

input.value="";
input.focus();
});