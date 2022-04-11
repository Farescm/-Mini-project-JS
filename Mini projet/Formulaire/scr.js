/*
* Owner: Bilal
* Desc: lie au forms.html
*/


function isUP20(){
    const srcPseudo = document.getElementById("pseudo");
    const errorPseudo = document.getElementById("errorPseudo");


    if(srcPseudo.value.length > 20 || srcPseudo.value === ""){
        errorPseudo.style.color='red';
        errorPseudo.innerText = "Votre pseudo doit faire : mininum 1 caracteres, maximum 20 caracteres.";
        return false;
    } else{
        return true;
    }
}

function isNumber(){
    const srcAge = document.getElementById("age");
    const errorAge = document.getElementById("errorAge");

    if(isNaN(srcAge.value) || srcAge.value === ""){
        errorAge.style.color='red';
        errorAge.innerText = "Cette case doit etre compose que de nombre";
        return false;
    } else{
        return true;
    }
}

function passCheckeur(){
    const srcPassword = document.getElementById("password");
    const savePasswordConfirm = document.getElementById("passwordConfirm");
    const errorPassword = document.getElementById("errorPassword");
    const errorPasswordCheckeur = document.getElementById("errorPasswordCheck")

    if(srcPassword.value !== savePasswordConfirm.value || srcPassword.value === ""){
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

function allCheck(){
    const pseudolabel = document.getElementById("pseudo-label");
    const agelabel = document.getElementById("age-label");
    const passlabel = document.getElementById("password-label");
    const passchecklabel = document.getElementById("passwordcheck-label");


    if(isUP20() === false){
        pseudolabel.innerText = "Pseudo:* ";
        pseudolabel.style.color = 'red';
        return false;
    }

    if(passCheckeur() === false){
        passlabel.innerText = "Mot de passe:* ";
        passlabel.style.color = 'red';

        passchecklabel.innerText = "Confimer le mot de passe:* "
        passchecklabel.style.color = 'red';
        return false;
    }

    if(isNumber() === false){
        agelabel.innerText = "Age:* ";
        agelabel.style.color='red';
        return false;
    }

    else{
        return true;
    }
}

function getTime() {
    let x = new Date();
    let date = "Le " + x.getDate() + "/" + (x.getMonth() + 1) + "/" + x.getFullYear();
    let heure = "a " + x.getHours() + ":" + x.getMinutes();

    return date + " " + heure;
}

let salutmec = 1;

function Onde(){
    salutmec++;
}

function save(){

    if(allCheck() === false){
        return false;
    }

    else{
        const prenom = document.getElementById("pseudo").value;
        const age = document.getElementById("age").value;
        const mdp = document.getElementById("password").value;
        const heure = getTime();

        const divTableau = document.getElementById("table-container");
        const tdCreate = document.createElement("td");
        const thCreate = document.createElement("th");
        const tableCreate = document.createElement("table");
        const buttonCreate = document.createElement("button");

        tableCreate.innerHTML = "";
        divTableau.appendChild(tableCreate);

        thCreate.innerHTML = "["+salutmec+"] " +prenom;
        tableCreate.appendChild(thCreate);

        tdCreate.innerHTML = "| ID: " + salutmec + " | Prenom: " + prenom + " | Age: " + age + " ans | Code: " + mdp + " | Date & Heure: " + heure + " | ";
        thCreate.appendChild(tdCreate);

        buttonCreate.innerText = "x";
        tdCreate.appendChild(buttonCreate);
        buttonCreate.setAttribute("id", "del");
        buttonCreate.setAttribute("onclick", "removeLine();");
        console.log(salutmec);

        return true;
    }
}

function removeLine(){
    return true;
}

function delList(){
    const prenom = document.getElementById("pseudo").value;
    const age = document.getElementById("age").value;
    const mdp = document.getElementById("password").value;

    prenom.innerText="ttg";
    age.innerText="ttg";
    mdp.innerText="ttg";
}