# Web Design for a Software Product Company

## AIM:

To design a static website for a software product company company.

## DESIGN STEPS:

### Step 1:

Requirement collection.

### Step 2:

Creating the layout using HTML and CSS.

### Step 3:

Updating the sample content.

### Step 4:

Choose the appropriate style and color scheme.

### Step 5:

Validate the layout in various browsers.

### Step 6:

Validate the HTML code.

### Step 6:

Publish the website in the given URL.

## Color scheme:
__Primary color:__ White <br />
__Secondary color:__ Black <br />
__Tertiary color:__ Grey

## PROGRAM :

### home.html:
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js"
      integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js"
      integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ"
      crossorigin="anonymous"
    ></script>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&display=swap"
      rel="stylesheet"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
      rel="stylesheet"
    />
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=0.5" />
    <title>Ss_anime</title>
    <link rel="icon" type="image/png" href="image/indeximage/logo.jpg" />
    <link rel="stylesheet" href="home1.css" />
  </head>
  <script>
    function myFunction() {
      document.getElementById("a1").style.display = "block";
    }
    function myFunction1() {
      document.getElementById("a2").style.display = "block";
    }
  </script>

  <body>
    <div class="m1">
      <div class="b1">Ss_anime</div>
      <div class="b2">
        <div class="l1">
          <a href="#" class="home">Home</a>
          <a href="anime.html" class="Trending">Trending</a>
          <a href="#" class="New-release">New-Release</a>
          <a href="#" class="Download">Download</a>
        </div>

        <div class="bar">
          <input type="text" placeholder="search here" class="search" />
          <button type="submit" class="btn">
            <i class="fa fa-search"></i>
          </button>
        </div>
        <div class="l2">
          <button class="button" onclick="document.location='signup.html'">
            sign up
          </button>
        </div>
      </div>
      <section class="section">
        <div
          id="carouselExampleInterval"
          class="carousel slide cc"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active bg" data-bs-interval="10000">
              <img
                src="image/home image/op.jpg"
                class="d-block w-100"
                height="865"
                alt="..."
              />
              <br /><br />
              <h1 class="sub">One Piece</h1>
              <h4 class="sh">Overview:</h4>
              <p class="sub-para">
                Gold Roger was known as the "Pirate King," the strongest and
                most infamous being to have sailed the Grand Line. The capture
                and execution of Roger by the World Government brought a change
                throughout the world. His last words before his death revealed
                the existence of the greatest treasure in the world, One Piece.
                It was this revelation that brought about the Grand Age of
                Pirates, men who dreamed of finding One Piece—which promises an
                unlimited amount of riches and fame—and quite possibly the
                pinnacle of glory and the title of the Pirate King. Enter Monkey
                Luffy, a 17-year-old boy who defies your standard definition of
                a pirate. Rather than the popular persona of a wicked, hardened,
                toothless pirate ransacking villages for fun, Luffy's reason for
                being a pirate is one of pure wonder: the thought of an exciting
                adventure that leads him to intriguing people and ultimately,
                the promised treasure. Following in the footsteps of his
                childhood hero, Luffy and his crew travel across the Grand Line,
                experiencing crazy adventures, unveiling dark mysteries and
                battling strong enemies, all in order to reach the most coveted
                of all fortunes—One Piece......
              </p>
            </div>
            <div class="carousel-item bg" data-bs-interval="2000">
              <img
                src="image/home image/naruto.jpg"
                height="865px"
                class="d-block w-100"
                alt="..."
              />
              <br /><br />
              <h1 class="sub">Naruto</h1>
              <h4 class="sh">Overview:</h4>
              <p class="sub-para">
                It has been two and a half years since Naruto Uzumaki left
                Konohagakure, the Hidden Leaf Village, for intense training
                following events which fueled his desire to be stronger. Now
                Akatsuki, the mysterious organization of elite rogue ninja, is
                closing in on their grand plan which may threaten the safety of
                the entire shinobi world. Although Naruto is older and sinister
                events loom on the horizon, he has changed little in
                personality—still rambunctious and childish—though he is now far
                more confident and possesses an even greater determination to
                protect his friends and home. Come whatever may, Naruto will
                carry on with the fight for what is important to him, even at
                the expense of his own body, in the continuation of the saga
                about the boy who wishes to become Hokage.....
              </p>
            </div>
            <div class="carousel-item bg">
              <img
                src="image/home image/ds.jpg"
                class="d-block w-100"
                height="865"
              />
              <br /><br />
              <h1 class="sub">Demon Slayer</h1>
              <h4 class="sh">Overview:</h4>
              <p class="sub-para">
                Ever since the death of his father, the burden of supporting the
                family has fallen upon Tanjirou Kamado's shoulders. Though
                living impoverished on a remote mountain, the Kamado family are
                able to enjoy a relatively peaceful and happy life. One day,
                Tanjirou decides to go down to the local village to make a
                little money selling charcoal. On his way back, night falls,
                forcing Tanjirou to take shelter in the house of a strange man,
                who warns him of the existence of flesh-eating demons that lurk
                in the woods at night. When he finally arrives back home the
                next day, he is met with a horrifying sight—his whole family has
                been slaughtered. Worse still, the sole survivor is his sister
                Nezuko, who has been turned into a bloodthirsty demon. Consumed
                by rage and hatred, Tanjirou swears to avenge his family and
                stay by his only remaining sibling. Alongside the mysterious
                group calling themselves the Demon Slayer Corps, Tanjirou will
                do whatever it takes to slay the demons and protect the remnants
                of his beloved sister's humanity.......
              </p>
            </div>
            <div class="carousel-item bg">
              <img
                src="image/home image/dn.jpg"
                class="d-block w-100"
                height="865"
              />
              <br /><br />
              <h1 class="sub">Death Note</h1>
              <h4 class="sh">Overview:</h4>
              <p class="sub-para">
                A shinigami, as a god of death, can kill any person—provided
                they see their victim's face and write their victim's name in a
                notebook called a Death Note. One day, Ryuk, bored by the
                shinigami lifestyle and interested in seeing how a human would
                use a Death Note, drops one into the human realm. High school
                student and prodigy Light Yagami stumbles upon the Death Note
                and—since he deplores the state of the world—tests the deadly
                notebook by writing a criminal's name in it. When the criminal
                dies immediately following his experiment with the Death Note,
                Light is greatly surprised and quickly recognizes how
                devastating the power that has fallen into his hands could be.
                With this divine capability, Light decides to extinguish all
                criminals in order to build a new world where crime does not
                exist and people worship him as a god. Police, however, quickly
                discover that a serial killer is targeting criminals and,
                consequently, try to apprehend the culprit. To do this, the
                Japanese investigators count on the assistance of the best
                detective in the world: a young and eccentric man known only by
                the name of L.....
              </p>
            </div>
            <div class="carousel-item bg">
              <img
                src="image/home image/bc.jpg"
                class="d-block w-100"
                height="865"
              />
              <br /><br />
              <h1 class="sub">Black Clover</h1>
              <h4 class="sh">Overview:</h4>
              <p class="sub-para">
                Asta and Yuno were abandoned at the same church on the same day.
                Raised together as children, they came to know of the "Wizard
                King"—a title given to the strongest mage in the kingdom—and
                promised that they would compete against each other for the
                position of the next Wizard King. However, as they grew up, the
                stark difference between them became evident. While Yuno is able
                to wield magic with amazing power and control, Asta cannot use
                magic at all and desperately tries to awaken his powers by
                training physically. When they reach the age of 15, Yuno is
                bestowed a spectacular Grimoire with a four-leaf clover, while
                Asta receives nothing. However, soon after, Yuno is attacked by
                a person named Lebuty, whose main purpose is to obtain Yuno's
                Grimoire. Asta tries to fight Lebuty, but he is outmatched.
                Though without hope and on the brink of defeat, he finds the
                strength to continue when he hears Yuno's voice. Unleashing his
                inner emotions in a rage, Asta receives a five-leaf clover
                Grimoire, a "Black Clover" giving him enough power to defeat
                Lebuty. A few days later, the two friends head out into the
                world, both seeking the same goal—to become the Wizard King...
              </p>
            </div>
            <div class="carousel-item bg">
              <img
                src="image/home image/aot.jpg"
                class="d-block w-100"
                height="865"
              />
              <br /><br />
              <h1 class="sub">Attack On Titan</h1>
              <h4 class="sh">Overview:</h4>
              <p class="sub-para">
                Centuries ago, mankind was slaughtered to near extinction by
                monstrous humanoid creatures called titans, forcing humans to
                hide in fear behind enormous concentric walls. What makes these
                giants truly terrifying is that their taste for human flesh is
                not born out of hunger but what appears to be out of pleasure.
                To ensure their survival, the remnants of humanity began living
                within defensive barriers, resulting in one hundred years
                without a single titan encounter. However, that fragile calm is
                soon shattered when a colossal titan manages to breach the
                supposedly impregnable outer wall, reigniting the fight for
                survival against the man-eating abominations. After witnessing a
                horrific personal loss at the hands of the invading creatures,
                Eren Yeager dedicates his life to their eradication by enlisting
                into the Survey Corps, an elite military unit that combats the
                merciless humanoids outside the protection of the walls. Based
                on Hajime Isayama's award-winning manga, Shingeki no Kyojin
                follows Eren, along with his adopted sister Mikasa Ackerman and
                his childhood friend Armin Arlert, as they join the brutal war
                against the titans and race to discover a way of defeating them
                before the last walls are breached.......
              </p>
            </div>
            <div class="carousel-item bg">
              <img
                src="image/home image/bleach.jpg"
                class="d-block w-100"
                height="865"
              />
              <br /><br />
              <h1 class="sub">Bleach</h1>
              <h4 class="sh">Overview:</h4>
              <p class="sub-para">
                Ichigo Kurosaki is an ordinary high schooler—until his family is
                attacked by a Hollow, a corrupt spirit that seeks to devour
                human souls. It is then that he meets a Soul Reaper named Rukia
                Kuchiki, who gets injured while protecting Ichigo's family from
                the assailant. To save his family, Ichigo accepts Rukia's offer
                of taking her powers and becomes a Soul Reaper as a result.
                However, as Rukia is unable to regain her powers, Ichigo is
                given the daunting task of hunting down the Hollows that plague
                their town. However, he is not alone in his fight, as he is
                later joined by his friends—classmates Orihime Inoue, Yasutora
                Sado, and Uryuu Ishida—who each have their own unique abilities.
                As Ichigo and his comrades get used to their new duties and
                support each other on and off the battlefield, the young Soul
                Reaper soon learns that the Hollows are not the only real threat
                to the human world.....
              </p>
            </div>
            <div class="carousel-item bg">
              <img
                src="image/home image/mha.jpg"
                class="d-block w-100"
                height="865"
              />
              <br /><br />
              <h1 class="sub">My Hero Academy</h1>
              <h4 class="sh">Overview:</h4>
              <p class="sub-para">
                With Tomura Shigaraki at its helm, the former Liberation Army is
                now known as the Paranormal Liberation Front. This organized
                criminal group poses an immense threat to the Hero Association,
                not only because of its sheer size and strength, but also the
                overpowering quirks of Jin "Twice" Bubaigawara and
                Gigantomachia. As new intel from the covert hero Keigo "Hawks"
                Takami confirms that Shigaraki is nowhere to be seen, the Hero
                Association decides to strike the enemy headquarters with a
                surprise attack using the entirety of its assets—and the UA
                students find themselves on the battlefield once again. As the
                fight rages on, the unsuspecting villains must regroup and push
                back, but the brave heroes are determined to eradicate every
                last one of them.....
              </p>
            </div>

            <div class="carousel-item bg">
              <img
                src="image/home image/jojo.jpg"
                class="d-block w-100"
                height="865"
              />
              <br /><br />
              <h1 class="sub">JoJo's Bizarre Adventure</h1>
              <h4 class="sh">Overview:</h4>
              <p class="sub-para">
                In the coastal city of Naples, corruption is teeming—the police
                blatantly conspire with outlaws, drugs run rampant around the
                youth, and the mafia governs the streets with an iron fist.
                However, various fateful encounters will soon occur. Enter
                Giorno Giovanna, a 15-year-old boy with an eccentric connection
                to the Joestar family, who makes a living out of part-time jobs
                and pickpocketing. Furthermore, he is gifted with the
                unexplained Stand ability to give and create life—growing plants
                from the ground and turning inanimate objects into live animals,
                an ability he has dubbed "Gold Experience." Fascinated by the
                might of local gangsters, Giorno has dreamed of rising up in
                their ranks and becoming a "Gang-Star," a feat made possible by
                his encounter with Bruno Buccellati, a member of the Passione
                gang with his own sense of justice. JoJo no Kimyou na Bouken:
                Ougon no Kaze follows the endeavors of Giorno after joining
                Bruno's team while working under Passione, fending off other
                gangsters and secretly plotting to overthrow their mysterious
                boss........
              </p>
            </div>
            <div class="carousel-item bg">
              <img
                src="image/home image/opm.jpg"
                class="d-block w-100"
                height="865"
              />
              <h1 class="sub">One Punch Man</h1>
              <h4 class="sh">Overview:</h4>
              <p class="sub-para">
                The seemingly ordinary and unimpressive Saitama has a rather
                unique hobby: being a hero. In order to pursue his childhood
                dream, he trained relentlessly for three years—and lost all of
                his hair in the process. Now, Saitama is incredibly powerful, so
                much so that no enemy is able to defeat him in battle. In fact,
                all it takes to defeat evildoers with just one punch has led to
                an unexpected problem—he is no longer able to enjoy the thrill
                of battling and has become quite bored. This all changes with
                the arrival of Genos, a 19-year-old cyborg, who wishes to be
                Saitama's disciple after seeing what he is capable of. Genos
                proposes that the two join the Hero Association in order to
                become certified heroes that will be recognized for their
                positive contributions to society, and Saitama, shocked that no
                one knows who he is, quickly agrees. And thus begins the story
                of One Punch Man, an action-comedy that follows an eccentric
                individual who longs to fight strong enemies that can hopefully
                give him the excitement he once felt and just maybe, he'll
                become popular in the process. ....
              </p>
            </div>
            <div class="carousel-item bg">
              <img
                src="image/home image/dbs.jpg"
                class="d-block w-100"
                height="865"
              />
              <br /><br />
              <h1 class="sub">Dragon Ball Super</h1>
              <h4 class="sh">Overview:</h4>
              <p class="sub-para">
                Five years after the events of Dragon Ball, martial arts expert
                Goku is now a grown man married to his wife Chi-Chi, with a
                four-year old son named Gohan. While attending a reunion on
                Turtle Island with his old friends Master Roshi, Krillin, Bulma
                and others, the festivities are interrupted when a humanoid
                alien named Raditz not only reveals the truth behind Gokuu's
                past, but kidnaps Gohan as well. With Raditz displaying power
                beyond anything Goku has seen before, he is forced to team up
                with his old nemesis, Piccolo, in order to rescue his son. But
                when Goku and Piccolo reveal the secret of the seven mystical
                wish-granting Dragon Balls to Raditz, he informs the duo that
                there is more of his race, the Saiyans, and they won’t pass up
                an opportunity to seize the power of the Dragon Balls for
                themselves. These events begin the saga of Dragon Ball Kai, a
                story that finds Goku and his friends and family constantly
                defending the galaxy from increasingly more powerful threats.
                Bizarre, comical, heartwarming and threatening characters come
                together in a series of battles that push the powers and
                abilities of Goku and his friends beyond anything they have ever
                experienced.....
              </p>
            </div>
            <div class="carousel-item bg">
              <img
                src="image/home image/dr.jpg"
                class="d-block w-100"
                height="865"
              />
              <br /><br />
              <h1 class="sub">Dr. Stone</h1>
              <h4 class="sh">Overview:</h4>
              <p class="sub-para">
                After five years of harboring unspoken feelings, high-schooler
                Taiju Ooki is finally ready to confess his love to Yuzuriha
                Ogawa. Just when Taiju begins his confession however, a blinding
                green light strikes the Earth and petrifies mankind around the
                world—turning every single human into stone. Several millennia
                later, Taiju awakens to find the modern world completely
                nonexistent, as nature has flourished in the years humanity
                stood still. Among a stone world of statues, Taiju encounters
                one other living human: his science-loving friend Senkuu, who
                has been active for a few months. Taiju learns that Senkuu has
                developed a grand scheme—to launch the complete revival of
                civilization with science. Taiju's brawn and Senkuu's brains
                combine to forge a formidable partnership, and they soon uncover
                a method to revive those petrified. However, Senkuu's master
                plan is threatened when his ideologies are challenged by those
                who awaken. All the while, the reason for mankind's
                petrification remains unknown.......
              </p>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <aside class="b3">
        <div class="language">
          <h3>Language</h3>
          <article class="lang lang1">
            <a href="http://" target="_blank" rel="noopener noreferrer">Dub</a
            ><a href="http://" target="_blank" rel="noopener noreferrer">Sub</a>
          </article>
        </div>

        <div class="genre">
          <h3>Genre</h3>
          <article class="lang">
            <a href="http://" target="_blank" rel="noopener noreferrer"
              >Action</a
            ><a href="http://" target="_blank" rel="noopener noreferrer"
              >Adventure</a
            ><a href="http://" target="_blank" rel="noopener noreferrer"
              >Fantasy</a
            ><a href="http://" target="_blank" rel="noopener noreferrer"
              >Demons</a
            ><a href="http://" target="_blank" rel="noopener noreferrer"
              >Slice of Life</a
            >
            <a href="http://" target="_blank" rel="noopener noreferrer"
              >Super Natural</a
            >
            <a href="http://" target="_blank" rel="noopener noreferrer"
              >Drama</a
            >
            <a href="http://" target="_blank" rel="noopener noreferrer"
              >Sports</a
            >
          </article>
        </div>
      </aside>

      <div class="b4">
        <h3>Recent</h3>
        <div class="recent">
          <div class="box box1">
            <img src="image/indeximage/q.jpg" alt="no" />
            <h5></h5>
            <button type="button" onclick="myFunction()">Watch</button>
            <audio id="a1" controls>
              <source src="r.ogg" type="audio/ogg" />
              <source src="r.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div class="box box2">
            <img src="image/indeximage/w.png" alt="no" />
            <h5></h5>
            <button type="button" onclick="myFunction1()">Watch</button>
            <audio id="a2" controls>
              <source src="B.ogg" type="audio/ogg" />
              <source src="B.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div class="box">
            <img
              src="image/indeximage/e.jpg"
              alt="no"
              class="i2"
              width="300px"
            />
            <h5></h5>
            <button type="button" onclick="myFunction()">Watch</button>
            <audio id="a1" controls>
              <source src="r.ogg" type="audio/ogg" />
              <source src="r.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div class="box">
            <img src="image/indeximage/r.jpg" alt="no" />
            <h5></h5>
            <button type="button" onclick="myFunction()">Watch</button>
            <audio id="a1" controls>
              <source src="r.ogg" type="audio/ogg" />
              <source src="r.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div class="box">
            <img src="image/indeximage/t.png" alt="no" />
            <h5></h5>
            <button type="button" onclick="myFunction()">Watch</button>
            <audio id="a1" controls>
              <source src="r.ogg" type="audio/ogg" />
              <source src="r.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div class="box">
            <img src="image/indeximage/y.jpg" alt="no" />
            <h5></h5>
            <button type="button" onclick="myFunction()">Watch</button>
            <audio id="a1" controls>
              <source src="r.ogg" type="audio/ogg" />
              <source src="r.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div class="box">
            <img src="image/indeximage/u.jpg" alt="no" />
            <h5></h5>
            <button type="button" onclick="myFunction()">Watch</button>
            <audio id="a1" controls>
              <source src="r.ogg" type="audio/ogg" />
              <source src="r.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div class="box">
            <img src="image/indeximage/i.jpg" alt="no" />
            <h5></h5>
            <button type="button" onclick="myFunction()">Watch</button>
            <audio id="a1" controls>
              <source src="r.ogg" type="audio/ogg" />
              <source src="r.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div class="box">
            <img src="image/indeximage/o.jpg" alt="no" />
            <h5></h5>
            <button type="button" onclick="myFunction()">Watch</button>
            <audio id="a1" controls>
              <source src="r.ogg" type="audio/ogg" />
              <source src="r.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div class="box">
            <img src="image/indeximage/p.jpg" alt="no" />
            <h5></h5>
            <button type="button" onclick="myFunction()">Watch</button>
            <audio id="a1" controls>
              <source src="r.ogg" type="audio/ogg" />
              <source src="r.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
        <h3>Updated</h3>
        <div class="podcast">
          <div class="box">
            <img src="image/indeximage/d.jpg" alt="no" />
            <h5></h5>
            <button type="button" onclick="myFunction()">watch</button>
            <audio id="a1" controls>
              <source src="r.ogg" type="audio/ogg" />
              <source src="r.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div class="box">
            <img src="image/indeximage/f.jpg" alt="no" />
            <h5></h5>
            <button type="button" onclick="myFunction()">watch</button>
            <audio id="a1" controls>
              <source src="r.ogg" type="audio/ogg" />
              <source src="r.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div class="box">
            <img src="image/indeximage/g.jpg" alt="no" />
            <h5></h5>
            <button type="button" onclick="myFunction()">watch</button>
            <audio id="a1" controls>
              <source src="r.ogg" type="audio/ogg" />
              <source src="r.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>

          <div class="box">
            <img src="image/indeximage/h.jpg" alt="no" />
            <h5></h5>
            <button type="button" onclick="myFunction()">watch</button>
            <audio id="a1" controls>
              <source src="r.ogg" type="audio/ogg" />
              <source src="r.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div class="box">
            <img src="image/indeximage/j.jpg" alt="no" />
            <h5></h5>
            <button type="button" onclick="myFunction()">watch</button>
            <audio id="a1" controls>
              <source src="r.ogg" type="audio/ogg" />
              <source src="r.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div class="box">
            <img src="image/indeximage/k.jpg" alt="no" />
            <h5></h5>
            <button type="button" onclick="myFunction()">watch</button>
            <audio id="a1" controls>
              <source src="r.ogg" type="audio/ogg" />
              <source src="r.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div class="box">
            <img src="image/indeximage/l.jpg" alt="no" />
            <h5></h5>
            <button type="button" onclick="myFunction()">watch</button>
            <audio id="a1" controls>
              <source src="r.ogg" type="audio/ogg" />
              <source src="r.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div class="box">
            <img src="image/indeximage/z.jpg" alt="no" />
            <h5></h5>
            <button type="button" onclick="myFunction()">watch</button>
            <audio id="a1" controls>
              <source src="r.ogg" type="audio/ogg" />
              <source src="r.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div class="box">
            <img src="image/indeximage/x.jpg" alt="no" />
            <h5></h5>
            <button type="button" onclick="myFunction()">watch</button>
            <audio id="a1" controls>
              <source src="r.ogg" type="audio/ogg" />
              <source src="r.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div class="box">
            <img src="image/indeximage/c.jpg" alt="no" />
            <h5></h5>
            <button type="button" onclick="myFunction()">watch</button>
            <audio id="a1" controls>
              <source src="r.ogg" type="audio/ogg" />
              <source src="r.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div class="box">
            <img src="image/indeximage/v.jpg" alt="no" />
            <h5></h5>
            <button type="button" onclick="myFunction()">watch</button>
            <audio id="a1" controls>
              <source src="r.ogg" type="audio/ogg" />
              <source src="r.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
        <h3>Upcoming</h3>
        <div class="inter">
          <div class="box">
            <img src="image/indeximage/b.jpg" alt="no" />
            <h5></h5>
            <button type="button" onclick="myFunction()">watch</button>
            <audio id="a1" controls>
              <source src="r.ogg" type="audio/ogg" />
              <source src="r.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div class="box">
            <img src="image/indeximage/n.jpg" alt="no" />
            <h5></h5>
            <button type="button" onclick="myFunction()">watch</button>
            <audio id="a1" controls>
              <source src="r.ogg" type="audio/ogg" />
              <source src="r.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div class="box">
            <img src="image/indeximage/m.jpg" alt="no" />
            <h5></h5>
            <button type="button" onclick="myFunction()">watch</button>
            <audio id="a1" controls>
              <source src="r.ogg" type="audio/ogg" />
              <source src="r.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div class="box">
            <img src="image/indeximage/1.jpg" alt="no" />
            <h5></h5>
            <button type="button" onclick="myFunction()">watch</button>
            <audio id="a1" controls>
              <source src="r.ogg" type="audio/ogg" />
              <source src="r.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div class="box">
            <img src="image/indeximage/2.jpg" alt="no" />
            <h5></h5>
            <button type="button" onclick="myFunction()">watch</button>
            <audio id="a1" controls>
              <source src="r.ogg" type="audio/ogg" />
              <source src="r.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div class="box">
            <img src="image/indeximage/3.jpg" alt="no" />
            <h5></h5>
            <button type="button" onclick="myFunction()">watch</button>
            <audio id="a1" controls>
              <source src="r.ogg" type="audio/ogg" />
              <source src="r.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div class="box">
            <img src="image/indeximage/4.jpg" alt="no" />
            <h5></h5>
            <button type="button" onclick="myFunction()">watch</button>
            <audio id="a1" controls>
              <source src="r.ogg" type="audio/ogg" />
              <source src="r.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div class="box">
            <img src="image/indeximage/5.jpg" alt="no" />
            <h5></h5>
            <button type="button" onclick="myFunction()">watch</button>
            <audio id="a1" controls>
              <source src="r.ogg" type="audio/ogg" />
              <source src="r.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div class="box">
            <img src="image/indeximage/6.jpg" alt="no" />
            <h5></h5>
            <button type="button" onclick="myFunction()">watch</button>
            <audio id="a1" controls>
              <source src="r.ogg" type="audio/ogg" />
              <source src="r.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div class="box">
            <img src="image/indeximage/7.jpg" alt="no" />
            <h5></h5>
            <button type="button" onclick="myFunction()">watch</button>
            <audio id="a1" controls>
              <source src="r.ogg" type="audio/ogg" />
              <source src="r.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div class="box">
            <img src="image/indeximage/8.jpg" alt="no" />
            <h5></h5>
            <button type="button" onclick="myFunction()">watch</button>
            <audio id="a1" controls>
              <source src="r.ogg" type="audio/ogg" />
              <source src="r.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div class="box">
            <img src="image/indeximage/9.png" alt="no" />
            <h5></h5>
            <button type="button" onclick="myFunction()">Watch</button>
            <audio id="a1" controls>
              <source src="r.ogg" type="audio/ogg" />
              <source src="r.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
      <div class="b5">
        <aside class="trend">
          <h3>Trending</h3>
          <div class="t1">
            <h4>Top 10 Animes</h4>
            <a href="anime.html" target="_blank" rel="noopener noreferrer"
              >1. Demon Slayer Season-3</a
            ><a href="anime.html" target="_blank" rel="noopener noreferrer"
              >2. One Piece </a
            ><a href="anime.html" target="_blank" rel="noopener noreferrer"
              >3. Oshi No Ko</a
            ><a href="anime.html" target="_blank" rel="noopener noreferrer"
              >4. Hell's Paradise</a
            ><a href="anime.html" target="_blank" rel="noopener noreferrer"
              >5. Dead Mount Death Play</a
            ><a href="anime.html" target="_blank" rel="noopener noreferrer"
              >6. MASHLE: MAGIC AND MUSCLES</a
            ><a href="anime.html" target="_blank" rel="noopener noreferrer"
              >7. I Got a Cheat Skill in Another World and Became Unrivaled in
              The Real World, Too</a
            ><a href="anime.html" target="_blank" rel="noopener noreferrer"
              >8. Tengoku Daimakyo</a
            ><a href="anime.html" target="_blank" rel="noopener noreferrer"
              >9. Soul Land </a
            ><a href="anime.html" target="_blank" rel="noopener noreferrer"
              >10. Swallowed Star
            </a>
          </div>
        </aside>
      </div>
      <div class="b6">
        <p>
          Ss_anime is a popular anime website that provides a vast collection of
          anime series and movies for streaming online. With a user-friendly
          interface, it offers a wide range of genres, including action,
          romance, comedy, and more. The website allows users to search and
          browse anime titles, providing detailed information about each series.
          Ss_anime offers high-quality video playback, ensuring an immersive
          viewing experience. It also provides options for choosing different
          resolutions and subtitles. Additionally, the website regularly updates
          its content with the latest releases, making it a go-to platform for
          anime enthusiasts worldwide. <br />

          <code>© 2023 Ss_Anime 12</code>
        </p>
      </div>
    </div>
  </body>
</html>

```
### Home.css
```
* {
  margin: 0px;
  padding: 0px;
}
body {
  width: 100vw;
  height: 100vh;
  background-color: #272c34;
  font-family: "Poppins", sans-serif;
  user-select: none;
  position: relative;
}
.side {
  width: 30px;
  height: 5px;
  background-color: aliceblue;
}
.side1 {
  position: fixed;
  top: 12%;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  justify-content: center;
  margin-left: -32px;
  border: none;
  outline: none;
  background-color: transparent;
  gap: 2px;
  padding: 0px;
}
.side3 .side5 {
  width: 20%;
  position: absolute;
  height: 100vh;
  background-color: #212121;
  z-index: 1;
  display: grid;
  align-content: start;
  transform: translateX(-250px);
  transition: transform 1px ease-in-out;
}
.side4 {
  position: fixed;
  top: 0;
  left: 20%;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.5);
  backdrop-filter: blur(100px);
  opacity: 0;
  visibility: hidden;
}
.open .side5 {
  transform: translateX(0px);
}
.open .side4 {
  opacity: 1;
  visibility: visible;
}

.side3 a {
  text-decoration: none;
  font-size: 20px;
  color: #26de81;
  padding: 10px;
  text-align: center;
}

#a1 {
  display: none;
  position: absolute;
  bottom: 0;
  left: 40%;
  width: 300px;
  height: 200px;
  position: fixed;
}
#a2 {
  display: none;
  position: absolute;
  bottom: 0;
  left: 40%;
  width: 300px;
  height: 200px;
  position: fixed;
}
.m1 {
  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template-areas: "b1 b1 b1 " "b2 b2 b2" "cc cc cc" "b3 b4 b5" "b6 b6 b6";
  grid-template-rows: 0.8fr 0.5fr 4fr 5fr 1fr;
  grid-template-columns: 0.8fr 3fr 1fr;
  color: white;
}
.section {
  
  grid-area: cc;

  width: 80vw;
  margin: auto;
   justify-content: center;
   align-content: center;
   align-items: center;
}
.bg img{
  width: 50% !important;
  height: 300px !important;
  margin: auto;
}
.b1 {
  grid-area: b1;
  font-family: "Bruno Ace SC", cursive;
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  font-size: 45px;
  color: #26de81;
  font-variant: small-caps;
  font-weight: 900;
  background-color: #2f3640;
}

.b2 {
  grid-area: b2;
  max-width: 100%;
  max-height: 70%;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  
  
  
}
.l1 {
  display: grid;
  grid-auto-flow: column;
}

.button {
  color: black;
  width: 150px;
  height: 100%;
  border: none;
  font-size: 20px;
  font-weight: 700;
  background-color: gray;
  
  display: grid;
  align-items: center;
  
}
.button:hover {
  background-color: aliceblue;
  transform: translateY(-3px);
  transition: transform 0.3s ease-in-out;
}
.bar {
  display: flex;
  flex-direction: row;
  position: relative;
  font-size: 20px;
}
.search {
  box-sizing: border-box;
  width: 390px;
  height: 80%;
  position: relative;
  outline: none;
  border: none;
  padding-left: 20px;
  padding-right: 60px;
  font-size: 20px;
  border-left: 5px solid #2f3640;
  border-radius: 15px;
  margin: auto;
  display: block;
}
.btn {
  width: 50px;
  height: 80%;
  position: absolute;
  right: 0;
  top:10%;
  outline: none;
  border: none;
  color: aliceblue;
  background-color: #26de80;
  border-radius: 0px 10px 10px 0px;
  margin: auto;
}

.search::placeholder {
  font-size: 20px;
}
.b2 a {
  text-decoration: none;
  color: #3af598;
  display: block;
  padding: 0px 50px;
  font-size: 17px;
  text-align: center;
  display: flex;
  align-items: center;
  background-color: #161f30;
  border-left: 2px solid #2f3640;
}
.b2 a:hover {
  background-color: #57606f;
  border-radius: 3px;
  transform: translateY(-3px);
  transition: transform 0.3s ease-in-out;
}

.b3 {
  grid-area: b3;
  background-color: #272c34;
  display: grid;
  align-content: start;
  padding-top: 20px;
}
.b4 {
  grid-area: b4;
  background-color: #272c34;
  overflow:hidden;
  border-left: 2px solid #3f4854;
  margin-right: 10px;
  margin-left: 10px;
}
.b5 {
  grid-area: b5;
  background-color: #272c34;
  margin-right: 10px;
}
.b6 {
  grid-area: b6;
  background-color: #272c34;

  font-size: 15px;
  border-bottom: 2px solid #26de81;
  display: grid;
  align-content: center;
  justify-content: center;
}

.b2 {
  text-align: center;
  background-color: #272c34;
}

.genre {
  display: grid;
  align-content: space-evenly;
}
.lang1 {
  border-bottom: 2px solid #3f4854;
}
.lang a {
  text-decoration: none;
  color: white;

  display: grid;
  align-content: center;
  justify-content: center;
  padding: 10px;
}
a:hover {
  background-color: #2f3640;
}
summary:hover {
  background-color: #2f3640;
}
.lang summary {
  display: flex;
  justify-content: center;
  padding: 10px;
}
h3 {
  color: #26de81;
}
.genre {
  margin-top: 20px;
}
.lang {
  padding-bottom: 20px;
}
.trend {
  margin-top: 20px;
}
.t1 a {
  text-decoration: none;
  color: white;
  display: grid;
  align-content: space-between;
  font-size: 15px;
  padding: 10px 5px;
  background-color: #353a40;
  margin-bottom: 5px;
}
.t1 a:hover {
  outline: 1px solid #26de81;
  transition-duration: 0.3s;
}
.t1 {
  margin-top: 20px;
}
h4 {
  font-size: 25px;
  font-weight: 700;
  display: block;
  margin-bottom: 5px;
  background-color: #181a1f;
  padding: 10px;
}
.b6 p {
  column-count: 3;
  font-size: 15px;
}
code {
  color: #26de81;
}
.box {
  min-width: 200px;
  height: 250px;
  background-color: #181a1f;
  margin-right: 20px;
  overflow: visible;
  box-sizing: border-box;
  display: grid;
  align-content: space-evenly;
  padding-bottom: 20px;
  justify-content: center;

}


.recent,
.podcast,
.inter {
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  margin-bottom: 20px;
  box-sizing: border-box;
}
.recent::-webkit-scrollbar,.podcast::-webkit-scrollbar,.inter::-webkit-scrollbar{
  display: none;
}
button{
  background-color:#26de80;
  color:#fff;
  border:none;
  outline: none;
  width: 60px;
  text-align: center;
  display: grid;
  justify-self: center;
  border-radius: 5px;
 
  
}
.box {
  cursor: pointer;
  display: grid;
  
}
img {
  width: 200px;
  height: 220px;
  
}
.box button:hover{
  transition: opacity 0.3s ease-in-out;
  transform: scale(1.1);
}
.i1 {
  width: 100%;
}

h5 {
  color: black;
  text-align: center;
}
.i2{
  width: 200px !important;
}
.side1 {
  width: 100px;
  height: 20px;
  background-color: #161f30;
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
  display: block;
}






```




## OUTPUT:

### Home Page:
![output](home.png)

### Trending Page:
![output](trending.png)

### contact Page:
![output](contact.png)

### signup Page:
![output](signup.png)


## Result:

Thus a website is designed for the software product company and the HTML,CSS code are validated.
