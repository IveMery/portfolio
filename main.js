
 const btn_menu_responsive = document.querySelector('.menu_hamburguesa')

 const menu_desplegable =document.querySelector('.menu-desplegable')
 const lista_menu_movil =document.querySelectorAll('.lista_nav_movil')

 console.log(btn_menu_responsive)
 console.log(lista_menu_movil)
 
 
 btn_menu_responsive.onclick= () =>{  
     
    menu_desplegable.classList.toggle('hidden')
   
    

 }

for (let link of lista_menu_movil) {
    link.onclick = () => {
        menu_desplegable.classList.toggle('hidden')
    }
}


