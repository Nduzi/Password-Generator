const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

class passgen  {
    constructor(pass1,pass2){
        pass1="";
        pass2="";
    }
    generate1()
    {
        this.pass1=""
        for (let index = 0; index < 15; index++) {
            this.pass1 += characters[Math.floor(Math.random()*characters.length)];
           
        }
        return this.pass1;
    }
    generate2()
    {
        this.pass2=""
        for (let index = 0; index < 15; index++) {
            this.pass2 += characters[Math.floor(Math.random()*characters.length)];
        }
        return this.pass2;
    }

}

let Pass1 = document.getElementById("Password1")
let Pass2 = document.getElementById("Password2")
let pswgnrator = new passgen()
function generate(){
    Pass1.textContent = pswgnrator.generate1()
    Pass2.textContent = pswgnrator.generate2()
    console.log("Pressed")
}
