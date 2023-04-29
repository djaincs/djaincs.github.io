//Header toggle
let menubtn = document.getElementById('menubtn');

menubtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
})

//About section
let tablinks = document.getElementsByClassName("tab-links");

let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){

    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

