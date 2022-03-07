const loginpage = document.getElementById('loginPage');
const login = loginpage.querySelector('#login');
const password = loginpage.querySelector('#password');
const buttonlog = loginpage.querySelector('[log]');
const buttonreg = loginpage.querySelector('[reg]');
const showPass = loginpage.querySelector('#show');


showPass.addEventListener('click',showPassword);

let db = {
    users: [
        {
            login: 'login1',
            pass: 'pass1',

        },
        {
            login: 'login2',
            pass: 'pass2'
        },
        {
            login: 'login3',
            pass: 'pass3'
        },
        {
            login: 'login4',
            pass: 'pass4'
        }
    ]
}

console.log(db.users.length);

function openpage() {
    for (let i = 0; i < db.users.length; i++) {
        if ((login.value == db.users[i].login) && (password.value == db.users[i].pass)) {
            alert('siz kirdingiz')
        }
        else if ((i + 1) === db.users.length) {
            alert('toshingni ter')
            window.location.reload();
        }
    }
}

buttonlog.addEventListener('click', openpage);
buttonreg.addEventListener('click', ()=>{
    dbAdd(login.value, password.value);
});

function showPassword() {
    if (showPass.checked) {

        password.type = 'text';


    } else {
        password.type = 'password';
    }


}
function dbAdd(loginValue,passValue){
    let usersDb={
        login:loginValue,
        pass:passValue,
    }
    db.users.push(usersDb);
}
dbAdd('login48','pass48');
console.log(db.users)

