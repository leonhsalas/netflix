


const play = document.getElementById("primero");

const mylist = document.getElementById("segundo");

let bin = false;

function red(){
   if(bin == false){
        bin = !bin;
        play.toggle("transparent")
        mylist.toggle("red")
    }else{
        bin = !bin;
        play.remove("transparent")
        mylist.remove("red")
    }
}

function ope(){
    
}
