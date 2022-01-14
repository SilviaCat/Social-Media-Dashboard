<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- displays site properly based on user's device -->

  <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
  <link rel="stylesheet" href="dist/css/style.min.css">
  <title>Frontend Mentor | Social media dashboard with theme switcher</title>

  <!-- Feel free to remove these styles or customise in your own stylesheet 👍 -->
  <!--   <style>
    .attribution { font-size: 11px; text-align: center; }
    .attribution a { color: hsl(228, 45%, 44%); }
  </style> -->
</head>

<body class="light">
  <nav>
    <div class="titolo">
      <h1>Social Media Dashboard</h1>
      <h5>Total Followers: 23,004</h5>
    </div>
    <div class="darkMode">
      <p>Dark Mode</p>
     <!--  <a href="" class="toogle"></a> -->
      <a href="#" class="toogle"></a>
      <!-- <label class="switch">
        <input type="checkbox" name="darkMode" >
        <span class="slider round"></span>
      </label> -->
    </div>
  </nav>

  <section class="big">
    <div class="big-item facebook">
      <div class="name-social">
        <img src="images/icon-facebook.svg" alt="">
        <p>@nathanf</p>
      </div>
      <div class="follower">
        <p><span class="number-follwer">1987</span><br>Followers</p>
      </div>
      <div class="trend">
        <img src="images/icon-up.svg" alt="">
        <p> 12 Today</p>
      </div>
    </div>

    <div class="big-item twitter">
      <div class="name-social">
        <img src="images/icon-twitter.svg" alt="">
        <p>@nathanf</p>
      </div>
      <div class="follower">
        <p><span class="n_follwer">1044</span><br>Followers</p>
      </div>
      <div class="trend">
        <img src="images/icon-up.svg" alt="">
        <p> 99 Today</p>
      </div>
    </div>


    <div class="big-item instagram">
      <div class="name-social">
        <img src="images/icon-instagram.svg" alt="">
        <p>@realnathanf</p>
      </div>
      <div class="follower">
        <p><span class="n_follwer">11k</span><br>Followers</p>
      </div>
      <div class="trend">
        <img src="images/icon-up.svg" alt="">
        <p> 1099 Today</p>
      </div>
    </div>


    <div class="big-item youtube">
      <div class="name-social">
        <img src="images/icon-youtube.svg" alt="">
        <p>Nathan F.</p>
      </div>
      <div class="follower">
        <p><span>8239</span><br>Subscribers</p>
      </div>
      <div class="trend">
        <img src="images/icon-down.svg" alt="">
        <p class="red-trend"> 144 Today</p>
      </div>
    </div>

  </section>

  <section class="overview">
    <h2>Overview - Today</h2>
    <div class="small">
      <div class="small-item">
        <div class="name-social">
          <p>Page Views</p>
          <img src="images/icon-facebook.svg" alt="">
        </div>
        <div class="data">
          <div class="indice">
            <p>87</p>
          </div>
          <div class="trend">
            <img src="images/icon-up.svg" alt="">
            <p>3%</p>
          </div>
        </div>
      </div>

      <div class="small-item">
        <div class="name-social">
          <p>Likes</p>
          <img src="images/icon-facebook.svg" alt="">
        </div>
        <div class="data">
          <div class="indice">
            <p>52</p>
          </div>
          <div class="trend">
            <img src="images/icon-up.svg" alt="">
            <p>2%</p>
          </div>
        </div>
      </div>


      <div class="small-item">
        <div class="name-social">
          <p>Likes</p>
          <img src="images/icon-instagram.svg" alt="">
        </div>
        <div class="data">
          <div class="indice">
            <p>5462</p>
          </div>
          <div class="trend">
            <img src="images/icon-up.svg" alt="">
            <p>2257%</p>
          </div>
        </div>
      </div>


      <div class="small-item">
        <div class="name-social">
          <p>Retweets</p>
          <img src="images/icon-twitter.svg" alt="">
        </div>
        <div class="data">
          <div class="indice">
            <p>117</p>
          </div>
          <div class="trend">
            <img src="images/icon-up.svg" alt="">
            <p>303%</p>
          </div>
        </div>
      </div>


      <div class="small-item">
        <div class="name-social">
          <p>Likes</p>
          <img src="images/icon-facebook.svg" alt="">
        </div>
        <div class="data">
          <div class="indice">
            <p>507</p>
          </div>
          <div class="trend">
            <img src="images/icon-up.svg" alt="">
            <p>553%</p>
          </div>
        </div>
      </div>


      <div class="small-item">
        <div class="name-social">
          <p>Likes</p>
          <img src="images/icon-youtube.svg" alt="">
        </div>
        <div class="data">
          <div class="indice">
            <p>107</p>
          </div>
          <div class="trend red-trend">
            <img src="images/icon-down.svg" alt="">
            <p>19%</p>
          </div>
        </div>
      </div>


      <div class="small-item">
        <div class="name-social">
          <p>Page Views</p>
          <img src="images/icon-facebook.svg" alt="">
        </div>
        <div class="data">
          <div class="indice">
            <p>87</p>
          </div>
          <div class="trend">
            <img src="images/icon-up.svg" alt="">
            <p>3%</p>
          </div>
        </div>
      </div>


      <div class="small-item">
        <div class="name-social">
          <p>Page Views</p>
          <img src="images/icon-facebook.svg" alt="">
        </div>
        <div class="data">
          <div class="indice">
            <p>87</p>
          </div>
          <div class="trend">
            <img src="images/icon-up.svg" alt="">
            <p>3%</p>
          </div>
        </div>
      </div>


    </div>
  </section>

  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
    Coded by <a href="https://www.frontendmentor.io/profile/SilviaCat" target="_blank" rel="noopener">SilviaCat</a>.
  </div>


  <script src="app/js/app.js"></script>
</body>

</html>