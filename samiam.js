let wINdo = [  
    "Race a raccoon, grab a spoon",  
    "Juggle a loon, dance like a goon",  
    "Swoop to the dune, yodel at noon",  
    "Tie your shoon, float with a balloon",  
    "Zoom past June, bark at the moon",  
    "Hop like a toon, eat with a spoon",  
    "Sneeze like a loon, smell a maroon",  
    "Wiggle and croon, spin in a cocoon",  
    "Sniff a baboon, ride a pontoon",  
    "Sing a cartoon, slurp up a prune"  
  ];  
  
 window.onload = function() {
               document.getElementById("[your-div-id1]").innerHTML = wINdo[Math.floor(Math.random() * wINdo.length)];
           }

           document.getElementById("your-div-id1").onclick = function () {
           document.getElementById("your-div-id1").innerHTML = wINdo[Math.floor(Math.random() * wINdo.length)];
       };

       document.getElementById("your-div-id1").onmouseover = function () {
        document.getElementById("your-div-id1").style.color = "green";
           document.getElementById("your-div-id1").style.backgroundImage = "conic-gradient(green, yellow, gray, yellow, green)";
           document.getElementById("box").style.opacity = ".5";
           document.getElementById("fox").style.display = "0.3";
       };

        document.getElementById("your-div-id1").onmouseout = function () {
           document.getElementById("your-div-id1").style.color = "red";
           document.getElementById("your-div-id1").style.backgroundImage = "purple";
           document.getElementById("box").style.opacity = "1";
           document.getElementById("fox").style.display = "block";
          };