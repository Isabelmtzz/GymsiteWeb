/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")


    /*=============== MENU SHOW===============*/
if(navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}
    /*=============== MENU SHOW===============*/

if(navClose){
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll(".nav__link")

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}

navLink.forEach(e => e.addEventListener("click", linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById("header")
    this.scrollY >= 50 ? header.classList.add("bg-header") : header.classList.remove("bg-header")
}

window.addEventListener("scroll", scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]")

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute("id"),
              sectionClass = document.querySelector(".nav__menu a[href*=" + sectionId + "]")

            
         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add("active-link")
         }else{
            sectionClass.classList.remove("active-link")
         }
    })
}

window.addEventListener("scroll", scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
   const scrollUp = document.getElementById('scroll-up')

this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScroolReveal({
    origin: 'top',
    distance:'60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home__data, .footer__container`)
sr.reveal(`.home__img`, {delay: 700, origin: 'bottom'})
sr.reveal(`.logos__img, .program__card, .pricing__card`,{interval: 100})
sr.reveal(`.choose__img, .calculate__content`, {origin: 'left'})
sr.reveal(`.choose__content, .calculate__img`, {origin: 'right'})


/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById("calculate-form"),
      calculateCm = document.getElementById("calculate-cm"),
      calculateKg = document.getElementById("calculate-kg"),
      calculateMessage = document.getElementById("calculate-message")

const calculateIMC = (e) => {
    e.preventDefault()
    //Check if the value is empty 

    if(calculateCm.value === "" || calculateKg.value === ""){
        // Add and remove color
        calculateMessage.classList.remove("color-green")
        calculateMessage.classList.add("color-red")
        // Show message
        calculateMessage.textContent = "Agrega tu peso y estatura 👨‍💻"

        //Remove message in 3 seconds
        setTimeout(() =>{
            calculateMessage.textContent = ""
        }, 3000)
    }else{
        //IMC FORMULA
        const cm = calculateCm.value / 100,
              kg = calculateKg.value,
              imc = (kg / (cm * cm)).toFixed(2)

        // SHOW HEALTH STATUS

        if(imc < 18.5){
            calculateMessage.classList.add("color-red")
            calculateMessage.textContent = `Tu IMC es ${imc} y estas muy delgado 😔`
        }

        if(imc > 18.5 && imc < 25){
            calculateMessage.classList.add("color-green")
            calculateMessage.textContent = `Tu IMC es ${imc} y estas saludable 😀`
        }

        if(imc >= 25){
            calculateMessage.classList.add("color-red")
            calculateMessage.textContent = `Tu IMC es ${imc} y estas pasadito de peso 😬`
        }

        calculateCm.value = ""
        calculateKg.value = ""

        setTimeout(() => {
            calculateMessage.textContent = ""
        }, 6000)

        
    }
}

calculateForm.addEventListener("submit", calculateIMC)

/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById("contact-form"),
      contactMessage = document.getElementById("contact-message"),
      contactUser = document.getElementById("contact-user")


const sendEmail = (e) => {
    e.preventDefault()

    if(contactUser.value === ""){
        contactMessage.classList.remove("color-green")
        contactMessage.classList.add('color-red')

        contactMessage.textContent = 'You must enter you email ☝'

        setTimeout(() =>{
            contactMessage.textContent =''
        }, 3000)
    } else{
        emailjs.sendForm('service_ewxhcn7', 'template_hrh8w97', '#contact-form', 'xRdB3wBMDS2DQQFSJ')
                .then(() =>{
                contactMessage.classList.add('color-green')
                contactMessage.textContent = 'You registered successfully 💪'

                setTimeout(() =>{
                    contactMessage.textContent =''
                }, 3000)
             }, (error) =>{
                alert('OOPS! SOMETHING HAS FAILED...', error)
             })
            
        contactUser.value = ''
    }
}

contactForm.addEventListener('submit', sendEmail)