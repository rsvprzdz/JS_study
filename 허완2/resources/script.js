
function pwdWarning(){
    const warning=document.getElementById('pwdWarning');

    warning.innerHTML = '영문자 대/소문자 특수문자, 숫자 포함 8 ~ 32자'
}

function essentialCheck(){
    
    const id=document.getElementById('userId');
    const pwd=document.getElementById('userPwd');
    const pwdCheck=document.getElementById('pwdCheck');
    const idWarning=document.getElementById('idWarning');
    const pwdWarning=document.getElementById('pwdWarning');
    const pwdCheckWarning=document.getElementById('pwdCheckWarning');

    if(id.value == ''){
        idWarning.innerHTML = '필수 입력 항목 입니다.';
    }

    if(pwd.value == ''){
        pwdWarning.innerHTML = '필수 입력 항목 입니다.';
    }

    if(pwdCheck.value == ''){
        pwdCheckWarning.innerHTML = '필수 입력 항목 입니다.';
    }
    

}

function deleteIdWarning(){

    const id=document.getElementById('userId');
    const pwd=document.getElementById('userPwd');
    const pwdCheck=document.getElementById('pwdCheck');
    const idWarning=document.getElementById('idWarning');

    idWarning.innerHTML = '';
}

function deletePwdWarning(){

    const id=document.getElementById('userId');
    const pwd=document.getElementById('userPwd');
    const pwdCheck=document.getElementById('pwdCheck');
    const pwdCheckWarning=document.getElementById('pwdCheckWarning');

    pwdCheckWarning.innerHTML = '';
}

