// script.js

// 获取页面元素
let nameElement = document.getElementById('name');
let ageElement = document.getElementById('age');
let jobElement = document.getElementById('job');
let bioElement = document.getElementById('bio');
let emailElement = document.getElementById('email');
let phoneElement = document.getElementById('phone');
let editNameInput = document.getElementById('edit-name');
let editAgeInput = document.getElementById('edit-age');
let editJobInput = document.getElementById('edit-job');
let editBioInput = document.getElementById('edit-bio');
let submitBtn = document.getElementById('submit-btn');

let interestButtons = document.getElementsByClassName('interest');
// let interestButtons = document.querySelectorAll('.interest');


// 动态效果：兴趣爱好按钮的鼠标点击和悬停事件
for(let i = 0; i < interestButtons.length; i++){
    // 鼠标点击触发
    interestButtons[i].onclick = function(){
        let interest = interestButtons[i].innerText;
        // 反引号````
        alert(`你选择了${interest}!`);
    }
    // 鼠标经过触发
    interestButtons[i].onmouseover = function(){
        interestButtons[i].style.backgroundColor = 'red';
    }
    // 鼠标离开触发
    interestButtons[i].onmouseout = function(){
        interestButtons[i].style.backgroundColor = 'pink';
    }
}

// 编辑个人信息表单的提交事件
submitBtn.onclick = function(){
    nameElement.innerText = editNameInput.value;
    ageElement.innerText = editAgeInput.value;
    jobElement.innerText = editJobInput.value;
    bioElement.innerText = editBioInput.value;
    // 清空表单
    editNameInput.value = '';
    editAgeInput.value = '';
    editJobInput.value = '';
    editBioInput.value = '';
}


// 修改标签样式
let promptSpan = document.getElementsByClassName('prompt');
for(let i = 0; i<promptSpan.length; i++){
    promptSpan[i].style.fontWeight = 'bold';
}

// h1标签样式
let h1 = document.querySelector('h1');
h1.style.backgroundColor = '#333';
h1.style.color = '#fff';
h1.style.textAlign = 'center';
h1.style.padding = '1em 0';
h1.style.margin = '0';


// interestButtons.forEach(button => {
    // button.addEventListener('mouseover', () => {
    //     button.style.backgroundColor = '#0056b3';
    // });

    // button.addEventListener('mouseout', () => {
    //     button.style.backgroundColor = '#007BFF';
    // });

    // button.addEventListener('click', () => {
    //     let interest = button.getAttribute('data-interest');
    //     alert(`你选择了 ${interest}!`);
    // });
// });

// 编辑个人信息表单的提交事件
// submitBtn.addEventListener('click', () => {
//     nameElement.innerText = editNameInput.value;
//     ageElement.innerText = editAgeInput.value;
//     jobElement.innerText = editJobInput.value;
//     bioElement.innerText = editBioInput.value;

//     // 清空表单
//     editNameInput.value = '';
//     editAgeInput.value = '';
//     editJobInput.value = '';
//     editBioInput.value = '';
// });