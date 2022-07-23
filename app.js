const sections =document.querySelectorAll(".section"); //getting all section for declared main in HTML
const sectBtns =document.querySelectorAll(".controlls"); //getting all section for controlls(main container) main in HTML
const sectbtn =document.querySelectorAll(".control"); //getting all section for individual buttons in HTML
const allSections =document.querySelector(".main-content");// main-content from body class 
//removed all from query selector


function PageTransitions(){
    //ButtonClick Active Class
//USELESS PIECE OF CODE!!! cant add animation to buttons 
    for(let i = 0; i < sectbtn.length; i++ ){
        sectbtn[i].addEventListener('click',function(){
            let currentbtn = document.querySelectorAll('.active-btn'); // in sub function we declared current btn as .active button(with . because we call a class)
            currentbtn[0].className = currentbtn[0].className.replace('active-btn', ''); // this will replace classname with no active btn
            this.className +=' active-btn' // Reminders there shoould be space kse may space ang sa index before active
        })
    }
 
  //sections active 
        allSections.addEventListener('click', (e) => {
      
        const id = e.target.dataset.id; // target "dataset" on class controls, taking dataset (data-id) and put on variable id
        if(id){  //if we have id or true
            //remove selected from other btns
            
            sectBtns.forEach((btn) =>{ // loop through sectBtn, to remove the class of active (separate for sections)
                btn.classList.remove(' active-btn');          
            })
            e.target.classList.add('active-btn');

            //hide other sections
            sections.forEach((section) =>{
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}




PageTransitions();