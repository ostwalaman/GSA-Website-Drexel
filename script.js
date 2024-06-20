document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.getElementById('mobile-menu');
    var navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', function () {
        navList.classList.toggle('showing');
    });

    var members = document.querySelectorAll('.e-board-member');

    members.forEach(function (member) {
        member.addEventListener('click', function () {
            var description = member.querySelector('.member-description');
            if (member.classList.contains('active')) {
                description.style.maxHeight = '0';
                description.style.opacity = '0';
                member.classList.remove('active');
            } else {
                description.style.maxHeight = description.scrollHeight + 'px';
                description.style.opacity = '1';
                member.classList.add('active');
            }
        });
    });
});
