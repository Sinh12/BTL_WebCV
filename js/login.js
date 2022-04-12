var users = [{
        username: "admin@gmail.com",
        password: "123",
        permission: "admin"
    },
    {
        username: "guest01@gmail.com",
        password: "abc",
        permission: "guest"
    },
    {
        username: "guest02@gmail.com",
        password: "123",
        permission: "guest"
    },
]






function Login() {
    event.preventDefault();
    var username = myForm.username.value;
    var password = myForm.password.value;

    var val = check_user(username, password, users);
    if (val != false) {
        var date = new Date();
        exp_date = date.getTime() + 10 * 24 * 60 * 60 * 1000;
        date.setTime(exp_date);
        document.cookie = "username=" + val.username + ";expires=" + date;
        document.cookie = "permission=" + val.permission + ";expires=" + date;
        if (val.permission == "admin") {
            location.href = "admin/index.html";
        } else if (val.permission == "guest") {
            location.href = "Guest.html";
        }
    } else {
        alert("username must contant '@' and '_'");
    }

}

function check_user(username, password, users) {
    for (i in users) {
        var user = users[i];
        if (user.username == username && user.password == password) {
            return user;
        }
    }
    return false;
}