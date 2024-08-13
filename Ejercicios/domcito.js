function calcular(){
    let nombre=document.getElementById('name1').value;
    let edad=parseInt(document.getElementById('age').value);
    let aumento;

    aumento=edad+10;

    alert("Su edad aumentada es "+aumento);
}