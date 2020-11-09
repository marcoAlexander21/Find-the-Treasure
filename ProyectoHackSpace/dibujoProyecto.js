const h = document.getElementById('img_lucky');
const width = 500;
const height = 500;
h.addEventListener("click", ClickFunction);
let disTrack = document.getElementById("Ruta");

let  RandomNumber = limit => 
{
    return Math.floor(Math.random() * limit);
};

let locateTrack = (e, target) => 
{
    let x_inicial = e.offsetX - target.x;
    let y_inical = e.offsetY - target.y;
    return Math.sqrt((x_inicial*x_inicial)+ (y_inical*y_inical));
};

let helpTrack = distance => 
{
    if (distance < 30)
    {
        return "Nina - Caliente"
    }
    else if (distance < 70)
    {
        return "Kaylla - Cerca"
    }
    else if (distance < 90)
    {
        return " te desviaste del camino - "
    }
    else if (distance < 150)
    {
        return " te alejaste -  "
    }
    else if (distance < 200)
    {
        return " Ya Perdiste la ruta"
    }
    else if (distance < 300)
    {
        return "Super frio "
    }
    else if (distance < 400)
    {
        " Mas frio que puno "
    }
    else if (distance < 900)
    (
        "Mas frio que tu ex "
    )
    else{
        "Encontraste el tesoro "
    }

};

let target = 
{
    x: RandomNumber(width),
    y: RandomNumber(height)
};

function ClickFunction(e)
{
    let distance = locateTrack(e, target);
    let TellDistance = helpTrack(distance);
    disTrack.innerHTML = helpTrack;
}
