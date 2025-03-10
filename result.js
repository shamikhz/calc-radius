function displayArea(){
    const rad=parseFloat(
        document.getElementById('radius').value);
const area=calc(rad);
document.getElementById('area').innerText=`The area is:${area.toFixed(3)}`;
}
document.getElementById('calc').addEventListener('click',displayArea)


function calc(radius){
    return Math.PI*radius*radius;
}