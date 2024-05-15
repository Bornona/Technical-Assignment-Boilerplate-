document.addEventListener('DOMContentLoaded', function() {
    const profileDropdown = document.getElementById('user-menu-button');
    const userMenu = document.getElementById('userMenu');
    
    function toggleUserMenu() {
        userMenu.classList.toggle('hidden');
    }

    profileDropdown.addEventListener('click', function() {
        toggleUserMenu();
    });

    document.addEventListener('click', function(event) {
        if (!profileDropdown.contains(event.target) && !userMenu.contains(event.target)) {
            userMenu.classList.add('hidden');
        }
    });
});
