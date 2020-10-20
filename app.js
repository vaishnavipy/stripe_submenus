window.onload = function(){

    const navBar = document.getElementById("navbar");

    const modal = document.getElementById("modal");

    const mainContainer = document.getElementById("main_container");
   
    let subMenu; let tooltip_section="";

   
    const my_array = [

        {"Products":["Payment","Terminal","Connect"]},
        {"Developers":["Plugin","Library","Plugin","Billing"]},
        {"Company":["About","Customers"]}
        
        ];



      //Loop through to create Tooltips with Submenu's
     my_array.forEach(function(elm,i){

        for(const key in elm){

      subMenu = createSubMenu(key,elm);

            tooltip_section += ` <a href ="#" class="link tooltip">${key}<div class="tooltiptext">
                <h5 >${key}</h5>
               
                <p>${subMenu}</p></div> </a>`

        }

      
  });
  //Fill in the inner HTMl of Nav Bar with Tooltips
  navBar.innerHTML = tooltip_section;



  //Function to create Submenu
  function createSubMenu(key,elm){

   return  elm[key].map(function(array_elm,index){


                if(key == "Products"){

            return  `<span class="submenu"><i class="fa fa-credit-card icon"></i>${array_elm}</span>` 

            }

            if(key == "Developers"){

                return  `<span class="submenu"><i class="fa fa-book icon"></i>${array_elm}</span>` 

            }

            if(key == "Company"){

                return  `<span href="" class="submenu"><i class="fa fa-building icon"></i>${array_elm}</span>` 

            }



            }).join("");


  }


  //Create Modal 
  let modal_section=` <div id="modal_topbar"><span id="close"><i class="fa fa-times"></i></span></div>`;

  my_array.forEach(function(elm,index){

    for(const property in elm){

           subMenu = createSubMenu(property,elm) ;


        modal_section += `  <div>
        <h5>${property}</h5>
        <p  class="grid_container">${subMenu}</p></div>`;


    }




  })

   //Fill in the inner HTMl of Nav Bar with Tooltips
   modal.innerHTML = modal_section;


  // Show and Hide ToolTip on Mouse Hover and Mouse Out
    const tooltip = document.querySelectorAll(".tooltip");


    tooltip.forEach(elm => elm.addEventListener("mouseover",showToolTip))

    tooltip.forEach(elm => elm.addEventListener("mouseout",hideToolTip));


  function showToolTip(){

        let para_dimensions = this.children[0].children[1].getBoundingClientRect();

        this.children[0].style.marginLeft= -(para_dimensions.width/2);
    console.log(para_dimensions.width/2)

        this.children[0].style.visibility = "visible";



  }

  function hideToolTip(){

    this.children[0].style.visibility = "hidden";


  }


  //Open Modal on Click of SideMenu

  const side_menu = document.getElementById("side_menu");

  const close_modal = document.getElementById("close");


  let scaleX=0,scaleY=0;

function scaleXY(){


    modal.style.transform   =`scale(${scaleX},${scaleY})`


}


  side_menu.onclick = function(){


    mainContainer.classList.add("overlay_mainContainer");

   
   console.log(scaleX)
    

    scaleX += 1;
    scaleY+= 1;

    
    scaleXY();
   
  
    modal.style.visibility ="visible";

  }

  close_modal.onclick = function(){

    mainContainer.classList.remove("overlay_mainContainer");

    scaleX = 0;
    scaleY = 0;

    
    setInterval(scaleXY,1); 

    
    setTimeout(function(){
        modal.style.visibility = "hidden";
    },500)
    
  }



  // Close/Hide Modal  when window width is greater than 800px
  window.onresize = function(){

    let windowWidth = window.outerWidth;

    if(windowWidth > 700){

      mainContainer.classList.remove("overlay_mainContainer");
      modal.style.visibility = "hidden";


    }


  }


}




