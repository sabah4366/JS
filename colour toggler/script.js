

function changeTheme(){
    let myLink=document.querySelector("#theme")
    let curtheme=myLink.getAttribute('href')

    if (curtheme=='./lightmode.css'){
        myLink.href="darkmode.css"
    }
    if (curtheme=='darkmode.css'){
        myLink.href='./lightmode.css'
    }

   
}



// this is for color chnaging od main dic with the pressing of red button
function toggleColor(event){
    let ev=event.target.name
    let mydiv=document.querySelector('#result')

    if (ev=="redbutton"){
        mydiv.classList.remove('bg-success')   */ this remove is for nammal ippol oru button click chythaal pinna aa background colour mathre indavu matte button nte background colour indavula so oru colour remove chyyanam 2 buttonlum  */
        mydiv.classList.add('bg-danger')
        mydiv.classList.add('text-white')
    }
    if(ev=="greenbutton"){
        mydiv.classList.remove('bg-danger')
        mydiv.classList.add('bg-success')        */  this add and toggle method same.this is using for same purpose */
        mydiv.classList.toggle('text-white')
    }
    // let myDiv=document.querySelector("#result")
    //  myDiv.style.backgroundColor="red"   */this is changing that div colour into red*/
    //  myDiv.style.color='white'            */this is text colour change to white*/
    // myDiv.classList.add('bg-dark')          */ this is a method styling using bootsrap classes so must link cdn of bootstrap this is backgroundcolour changing to dark    */
    // myDiv.classList.add('text-white')       */this is text colour change to white using bootstrap classes*/
}
