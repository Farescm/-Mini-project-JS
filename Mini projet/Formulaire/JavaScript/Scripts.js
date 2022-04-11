var idAddParcPro = 1;

function lancement(){
    SUP20();
    isNumber();
    passCheckeur();
    allCheck();
    getTime();
    addFields(document.getElementById('values'), document.getElementById('pseudo').value, document.getElementById('age').value, document.getElementById('password').value);
}



function SUP20(){
    const Pseudo = document.getElementById("pseudo");
    const errorPseudo = document.getElementById("errorPseudo");


    if(Pseudo.value.length > 20 || Pseudo.value === ""){
        errorPseudo.style.color='red';
        errorPseudo.innerText = "Votre pseudo doit faire : mininum 1 caracteres, maximum 20 caracteres.";
        return false;
    } else{
        return true;
    }
}

function isNumber(){
    const Age = document.getElementById("age");
    const errorAge = document.getElementById("errorAge");

    if(isNaN(Age.value)){
        errorAge.style.color='red';
        errorAge.innerText = "Cette case doit etre compose que de nombre";
        return false;
    } else{
        return true;
    }
}



function passCheckeur(){

const Password = document.getElementById("password");
const savePasswordConfirm = document.getElementById("passwordConfirm");
const errorPassword = document.getElementById("errorPassword");
const errorPasswordCheckeur = document.getElementById("errorPasswordCheck");

    if(Password.value !== savePasswordConfirm.value || Password.value === ""){
        errorPassword.style.color='red';
        errorPassword.innerText = "Les deux mots de passe ne correspondent pas";
        errorPasswordCheckeur.style.color='red';
        errorPasswordCheckeur.innerText = "Les deux mots de passe ne correspondent pas";
        return false;
    }
    else{
        return true;
    }
}

const pseudolabel = document.getElementById("pseudo-label");
const agelabel = document.getElementById("age-label");
const passlabel = document.getElementById("password-label");
const passchecklabel = document.getElementById("passwordcheck-label");

function allCheck(){
    
    if(SUP20() === false){
        pseudolabel.innerText = "Pseudo*: ";
        pseudolabel.style.color = 'red';
        return false;
    }

    if(passCheckeur() === false){
        passlabel.innerText = "Mot de passe*: ";
        passlabel.style.color = 'red';

        passchecklabel.innerText = "Confimer le mot de passe*: "
        passchecklabel.style.color = 'red';
        return false;
    }

    if(isNumber() === false){
        agelabel.innerText = "Age: ";
        agelabel.style.color='red';
        return false;
    }

    else{
        return true;
    }
}

function getTime() {
    let x = new Date();
    let date =  x.getDate() + "/" + (x.getMonth() + 1) + "/" + x.getFullYear();
    let heure =  x.getHours() + ":" + x.getMinutes();

    return date + " " + heure;
}

const errorPasswordCheckeur = document.getElementById("errorPasswordCheck");

function addFields(elmt, pseudo, age, password)
{  

    if(age === ""){
        age = "N/A";
    }


    if(allCheck() === false){
        return false;
    }

    else{

    errorPassword.innerText = "";
    errorPasswordCheckeur.innerText = "";
    passlabel.style.color = 'black';
    passchecklabel.style.color = 'black';
    
    var tr = document.createElement('tr');
    elmt.appendChild(tr);  
     
    var tdId = document.createElement('td');
    tr.appendChild(tdId);
    var tdTextId = document.createTextNode(idAddParcPro);
    tdId.appendChild(tdTextId);
    tdId.className = 'parcPro_ID';
     
    var td1 = document.createElement('td');
    tr.appendChild(td1);
    var tdText1 = document.createTextNode(getTime());
    td1.appendChild(tdText1);
     
    var td2 = document.createElement('td');
    tr.appendChild(td2);
    var tdText2 = document.createTextNode(pseudo);
    td2.appendChild(tdText2);
     
    var td3 = document.createElement('td');
    tr.appendChild(td3);
    var tdText3 = document.createTextNode(age);
    td3.appendChild(tdText3); 

    var hash = CryptoJS.MD5(password);

    var td4 = document.createElement('td');
    tr.appendChild(td4);
    var tdText4 = document.createTextNode(hash);
    td4.appendChild(tdText4);
    
    var td5 = document.createElement("button");
    tr.appendChild(td5);
    var t = document.createTextNode("Supprimer"); 
    td5.appendChild(t);
    td5.setAttribute("onclick", e =>{
    let salut = document.getElementById(idAddParcPro);
    salut.innerText="";

});
    idAddParcPro = idAddParcPro+1;
    }
}