

const btn = document.getElementById("Copy");

    btn.addEventListener("click", () => {
      const text = document.getElementById("text").innerHTML;
      const emt = document.createElement("input");
      emt.setAttribute("value", text);
      document.body.appendChild(emt);
      emt.select();
      document.execCommand("copy");
      emt.parentNode.removeChild(emt);
    });

let link = "google.com"

let clicked = false;
function convertTo(){
    if(!clicked){
        clicked = true;
        document.getElementById("text").innerHTML = link;
        
        const div = document.getElementById("invisible");
        div.style.display = "block";
    }
}

// $(document).ready(function(){
//     $("input-btn").click(function(){
//       $("text").toggleClass("show");
//     });
//   });