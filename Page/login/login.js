const showHiddenPass = (loginPass, loginEye) => {
    const input = document.getElementById(loginPass),
        iconEye = document.getElementById(loginEye)

    iconEye.addEventListener('click', () => {
        if (input.type === 'password') {
            input.type = 'text'

            iconEye.classList.add('ri-eye-line')
            iconEye.classList.remove('ri-eye-off-line')
        } else {
            input.type = 'password'

            iconEye.classList.remove('ri-eye-line')
            iconEye.classList.add('ri-eye-off-line')
        }
    })
}

showHiddenPass('login-pass', 'login-eye')

const btnSubmit = document.getElementById("btnSubmit")
btnSubmit.onclick = () => {
    window.location.href = "./index.html";
}

const objPeople = [
    {
        email: "ky13112008@gmail.com",
        password: "anhcongdepzai"
    }
]

function getInfo() {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    for (const i = 0; i < objPeople.length; i++) {
        if (email == objPeople[i].email && password == objPeople[i].password) {
            console.log(email + "is logged in")
            window.location.href = './index.html';
            return
        }

    }
    console.log('incorrect email or password')
}