'use strict';

let header = $(`
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" style="background: linear-gradient(to bottom, #383838 0%, #000000 100%); !important;">
<a class="navbar-brand" href="index.html" style="color: #23B6A7 !important;">CodeBenders </a>
<div class="hamburger_wrapper navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 
  <div id="js-hamburger" class="hamburger">
    <span class="first"></span>
    <span class="second"></span>
    <span class="third"></span>
  </div>
</div>
<div class="collapse navbar-collapse " id="navbarSupportedContent">
  <ul class="navbar-nav ml-auto" id = "navbar-content">
   <li class="nav-item"><a class="nav-link" href="index.html" style="color: white !important;">Home</a></li>
   <li class="nav-item"><a class="nav-link" href="#main_about" style="color: white !important;">About</a></li>
   <li class="nav-item"><a class="nav-link" href="events.html" style="color: white !important;">Events</a></li>
   <li class="nav-item"><a class="nav-link" href="team.html" style="color: white !important;">Our Teams</a></li>
   <li class="nav-item"><a class="nav-link" href="Opportunities.html" style="color: white !important;">Opportunities</a></li>
   <li class="nav-item"><a class="nav-link" href="Resources.html" style="color: white !important;">Resources</a></li>
  </ul>
</div>
</nav>`);

let footer = $(`
<footer class="footer">
  <div class="container p-4">
    <div class="row">
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0 justify-content-center">
        <p class="tag" >"Develop a passion for learning. If you do, you will never cease to grow."
        </p>
          <div class="rounded-social-buttons tag">
            <a class="social-button twitter" href="https://twitter.com/codebenders" target="_blank"><i class="fab fa-twitter"></i></a>
            <a class="social-button linkedin" href="https://www.linkedin.com/company/codebenders/about/" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a class="social-button github" href="https://github.com/codebenders-igdtuw" target="_blank"><i class="fab fa-github"></i></a>
          </div>
      </div>
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
          <div class="form-style-6">
            <h6 class="display">Contact: </h6>
            <a href="igdtuwcodebenders@gmail.com" class="mail">igdtuwcodebenders@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
`);



// Window Loads
$(function() {
    let bodyElement = $(`body`);
    bodyElement.prepend(header);
    bodyElement.append(footer);

});



// $(document).ready(function(){
//   $(window).scroll(function(){
//       if($(window).scrollTop() > $(window).height()){
//         $(".navbar").css({"color":"red"});     
//       }

//   });
// });