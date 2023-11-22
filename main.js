


const play = document.getElementById("primero");

const mylist = document.getElementById("segundo");

const vid = document.getElementById("vid")

let bin = false;

function red(){
   if(bin == false){
        bin = !bin;
        play.style.backgroundColor = 'transparent';
        mylist.style.backgroundColor = 'red';
    }else{
        bin = !bin;
        play.style.backgroundColor = 'red'
        mylist.style.backgroundColor = 'transparent'
    }
}

function ope(){
    vid.style.display = "block"
}
