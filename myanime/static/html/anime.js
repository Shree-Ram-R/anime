
    const sideNav=document.querySelector('.side');
    const btnNav=document.querySelector('.bar');
    const overlayScreen=document.querySelector('.nav');
    const overlayScreen1=document.querySelector('.link1');
    const overlayScreen2=document.querySelector('.link2');
    const overlayScreen3=document.querySelector('.link3');
    const overlayScreen4=document.querySelector('.report1');
    const overlayScreen5=document.querySelector('.send');
  
    btnNav.addEventListener('click',()=>{
      sideNav.classList.add('open');
    });
  
    overlayScreen.addEventListener('click',()=>{
      sideNav.classList.remove('open');
    });

    overlayScreen1.addEventListener('click',()=>{
      sideNav.classList.remove('open');
    });
    overlayScreen2.addEventListener('click',()=>{
      sideNav.classList.remove('open');
    });
    overlayScreen3.addEventListener('click',()=>{
      sideNav.classList.remove('open');
    });
    overlayScreen5.addEventListener('click',()=>{
      overlayScreen4.classList.add('remove');

    });
  
  
    function showMessage() {
      var a = document.getElementById("text").value;

      if (a != "") {
        alert("Report sent successfully!");

       

      }
    }
   
  

    
