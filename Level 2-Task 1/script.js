let input = document.getElementById('screen');
let buttons = document.querySelectorAll('button');

let string = "";

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click',(event) =>{
        if(event.target.innerHTML == '='){
            try{
            string = eval(string);
            input.value = string;
            }
            catch(err){
                alert("Invalid");
            }
        }
        else if(event.target.innerHTML == 'clear'){
            string = "";
            input.value = string;
        }
        else if(event.target.innerHTML == 'del'){
            if(typeof string === 'string'){
            string  = string.substring(0, string.length-1);
            input.value = string;
            }
            else{
                string = string.toString();
                let output = string.substring(0,string.length-1);
                input.value = output;
                string = output;
            }
        }
        else{
            
        string += event.target.innerHTML;
        input.value = string;
        
    }

    })
})
