const liEl = document.querySelectorAll('#li');
const toggleBtnEl = document.getElementById('toggle-btn');
const divEl = document.getElementById('optional-content');
toggleBtnEl.addEventListener('click',() => {
    for(const el of liEl){
    el.classList.toggle("li-vt");}
    divEl.classList.toggle("vertical-div");
})
