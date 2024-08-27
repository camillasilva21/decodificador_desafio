
function get_Text_Input() {
    const regex = /^[a-z\s]+$/;
    let textarea_Input = document.getElementById("text-area-imput");
    let content_Textarea_Input = textarea_Input.value;
    if(!regex.test(content_Textarea_Input)){
        alert("Por favor, insira apenas letras minúsculas e sem acento.");
        return " ";
    }
    return content_Textarea_Input;
}

function set_Text_Output(text) {
    document.getElementById("text-area-output").value = text;
    document.getElementById("text-area-imput").value = '';
}

function decrypt() {
    let decrypt_Text = '';
    let text = get_Text_Input();
    let number_Character = 5;
    let key_list = [["ai", "a"], ["enter", "e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"]];

    for(let i = 0; i <= number_Character - 1; i++) {
        if(text.includes(key_list[i][0])) {
            decrypt_Text = text.replaceAll(key_list[i][0], key_list[i][1]); 
            text = decrypt_Text;
        }
    } 
    set_Text_Output(decrypt_Text);
}

function encrypt() {
    let ecrypt_Text = '';
    let text = get_Text_Input();
    let number_Character = text.length;

    for(let i = 0; i <= number_Character - 1; i++) {
        if(text[i] === "a") {
            ecrypt_Text = ecrypt_Text + "ai";
        } else if(text[i] === "e") {
            ecrypt_Text = ecrypt_Text + "enter";
        } else if(text[i] === "i") {
            ecrypt_Text = ecrypt_Text + "imes";
        } else if(text[i] === "o") {
            ecrypt_Text = ecrypt_Text + "ober";
        } else if(text[i] === "u") {
            ecrypt_Text = ecrypt_Text + "ufat";
        } else {
            ecrypt_Text = ecrypt_Text + text[i];
        }
    }

    set_Text_Output(ecrypt_Text);
}

