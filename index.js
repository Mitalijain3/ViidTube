var menuIcon = document.querySelector('.menu');
var sidebar = document.querySelector('.sidebar');
var showMore = document.querySelector('.expand');
var subscribedList = document.querySelector('.subscribed-list');
var container = document.querySelector('.container');
menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('small-sidebar');
    container.classList.toggle('large-container')
})
showMore.onclick = function() {
    subscribedList.classList.toggle('subscribed-list_hide');
}