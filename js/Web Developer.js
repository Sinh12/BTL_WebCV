// Đọc lại Dữ liệu từ localStorage đã được LƯU
const data_all = JSON.parse(window.localStorage.getItem('data_all'));
// Phân tích tham số URL để biết thông tin Mã giáo viên cần lấy
const queryString = window.location.search;

// console.log(queryString);
// ?id=n
const urlParams = new URLSearchParams(queryString);
const WebDeveloperID = urlParams.get('id')


let WebDeveloper = data_all.WebDevelopers[WebDeveloperID - 1];

console.log(WebDeveloper);

// Đọc dữ liệu ra DOM
let personal_text = document.querySelector(".personal_text");

// console.log(personal_text.children)
let avatar = document.querySelector(".imm");
avatar.src = WebDeveloper.avatar;
personal_text.children[1].textContent = WebDeveloper.name;
personal_text.children[2].textContent = WebDeveloper.position;
personal_text.children[3].textContent = WebDeveloper.short;
personal_text.children[4].children[0].textContent = WebDeveloper.dateOfBorned;

personal_text.children[4].children[1].textContent = WebDeveloper.phone;
personal_text.children[4].children[2].textContent = WebDeveloper.email;
personal_text.children[4].children[3].textContent = WebDeveloper.address;