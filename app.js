window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth'
  });
  window.scrollBy({ 
    top: 100, // could be negative value
    left: 0, 
    behavior: 'smooth' 
  });


  
  var fullimgbox = document.getElementById("fullimgbox");
  var fullimg = document.getElementById("fullimg");

  function openFullimg(img){
      fullimgbox.style.display="flex";
      fullimg.src=img;
  }
  function closeFullimg(){
      fullimgbox.style.display="none";
  }