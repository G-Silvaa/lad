
    const sections = document.querySelectorAll('.js-scroll');
    const windowMetade = window.innerHeight * 0.5;

    function animaScroll(){
        sections.forEach((section)=>{
            const sectionTop = section.getBoundingClientRect().top - windowMetade;
            if(sectionTop < 0) {
                section.classList.add('active')
            }
        })
    }

    window.addEventListener('scroll',animaScroll)



