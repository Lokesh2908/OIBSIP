const input = document.querySelector('input');
const btn = document.querySelector('.addTask > button');

btn.addEventListener('click', addList);

function addList(e){
    const notCompleted = document.querySelector('.notCompleted');
    const Completed = document.querySelector('.Completed');

    const newList = document.createElement('li');
    const checkbtn = document.createElement('button');
    const delbtn = document.createElement('button');

    checkbtn.innerHTML = '<i class="fa fa-check"></i>';
	delbtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    
    if(input.value !==''){
        newList.textContent = input.value;
        input.value = '';
        notCompleted.appendChild(newList);
        newList.appendChild(checkbtn);
        newList.appendChild(delbtn);
    }

    checkbtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        Completed.appendChild(parent);
        checkbtn.style.display = 'none';
    });

    delbtn.addEventListener('click', function(){
        const parent = this.parentNode;
		parent.remove();
    });
}
