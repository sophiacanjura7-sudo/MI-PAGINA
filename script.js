const mensaje = `Holitas:

Grachitas !!!!

por llevarnos hasta Multi sin negarte.

Gracias por esperarnos y tenernos paciencia.

y gracias por traernos de regreso.

puede que sea poco pero para nosotras valio muchitooo

eres una increible persona.

te lo agradecemos demaciadooooooooo, como no tienes idea alguna.

Esperamos que siempre conserves esa forma tan linda de ser.

Solo por eso mereces muchas cosquillas ...

🌸 Gracias por todo, Dani. 🌸`;

const envelope = document.getElementById("envelope");
const cover = document.querySelector(".cover");
const card = document.getElementById("card");
const text = document.getElementById("text");
const button = document.getElementById("finish");

let escrito = false;

envelope.addEventListener("click", () => {

    if(escrito) return;

    cover.style.transform = "rotateX(180deg)";
    envelope.style.transform = "translateY(-20px)";

    setTimeout(() => {
        card.style.display = "block";
        escribirTexto();
        crearPetalos();
    }, 800);

    escrito = true;

});

function escribirTexto(){

    let i = 0;

    function escribir(){

        if(i < mensaje.length){

            text.innerHTML += mensaje.charAt(i);

            i++;

            setTimeout(escribir,30);

        }

    }

    escribir();

}

button.addEventListener("click",()=>{

    alert("❤️ Gracias por ser una persona tan increíble.\n\nNunca cambies, Dani. 🌸");

});

function crearPetalos(){

    for(let i=0;i<30;i++){

        let petalo=document.createElement("div");

        petalo.innerHTML="🌸";

        petalo.style.position="fixed";
        petalo.style.left=Math.random()*100+"vw";
        petalo.style.top="-20px";
        petalo.style.fontSize=(18+Math.random()*18)+"px";
        petalo.style.pointerEvents="none";
        petalo.style.animation=`caer ${5+Math.random()*5}s linear infinite`;

        document.body.appendChild(petalo);

    }

}

const estilo=document.createElement("style");

estilo.innerHTML=`

@keyframes caer{

0%{
transform:translateY(-50px) rotate(0deg);
opacity:1;
}

100%{
transform:translateY(110vh) rotate(360deg);
opacity:.8;
}

}

`;

document.head.appendChild(estilo);
