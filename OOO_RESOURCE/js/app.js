let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})



var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// 1st form

document.getElementById('feedback-form').addEventListener('submit', function(evt){
    var http = new XMLHttpRequest(), f = this;
    evt.preventDefault();
    http.open("POST", "contacts.php", true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send("nameFF=" + f.nameFF.value + "&contactFF=" + f.contactFF.value + "&messageFF=" + f.messageFF.value);
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {
        alert(http.responseText + ', Ваше сообщение получено.\nНаши специалисты ответят Вам в течении 2-х дней.\nБлагодарим за интерес к нашей фирме!');    
        f.messageFF.removeAttribute('value'); // очистить поле сообщения (две строки)
        f.messageFF.value='';
      }
    }
    http.onerror = function() {
      alert('Извините, данные не были переданы');
    }
  }, false);

//   second form file

$(document).ready(function(){
    var mySettings = {
          file : $('#file'),
          virtualFile : $('.fileLoad')
      }
      mySettings.file.change(function(){
          var fileResult = $(this).val();
          $(this).parent().find(mySettings.virtualFile).find('input').val(fileResult);
      });
      mySettings.file.hover(function(){
          $(this).parent().find('button').addClass('button-hover');
      }, function(){
          $(this).parent().find('button').removeClass('button-hover');
      });	
  });


  

