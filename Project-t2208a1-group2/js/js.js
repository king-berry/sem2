function toggleDropdown() {
    var dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.classList.toggle('show');
}

window.addEventListener('click', function(event) {
    if (!event.target.matches('#dropdown-toggle')) {
        var dropdownMenu = document.querySelector('.dropdown-menu');
        if (dropdownMenu.classList.contains('show')) {
            dropdownMenu.classList.remove('show');
        }
    }
});