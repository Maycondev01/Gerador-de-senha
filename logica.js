const pwd = document.getElementById('pwd_txt');
const gerador = document.getElementById('gerador');
const clipboard = document.getElementById('clipboard');

let pwd_length = document.getElementById("slider");
let copy_text = document.getElementById("copy_text");
let string = "ABCDEFGHIJKLMNOPQRSTUVXYWZabcdefghijklmnopqrstuvxywz123456789"


// Gerar Senha quando clicar no botão gerar senha.
gerador.addEventListener("click", () => {
    let password = "";
    let checked = document.getElementById("checkbox").checked;
    let final_string = string;
    if (checked) {
        final_string += "@#$%^&*/=+?";
    }
    for (let i = 0; i < pwd_length.value; i++) {
        let pwd = final_string[Math.floor(Math.random() * final_string.length)];
        password += pwd;
    }
    pwd.innerText = password;
    final_string = string;
});

// Adicionando a função de cópia ao botão de cópia.
clipboard.addEventListener('click', () => {
    navigator.clipboard.writeText(pwd.innerText);
    copy_text.textContent = "Senha Copiada!";
    copy_text.style.display = "block";
    setTimeout(() => {
        copy_text.style.display = "none";
    }, 2000)
});