clr = ()=>{
    document.getElementById('result').value =""
}
display = (val) =>{
document.getElementById('result').value+=val;
}
equate = () =>{
    let x = document.getElementById('result').value;
    let y = eval(x);
    document.getElementById('result').value = y;
}