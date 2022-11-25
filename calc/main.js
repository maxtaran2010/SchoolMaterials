var current = "0";
var current2 = "";
var operation = "";

function update () {
    document.getElementById('result').innerHTML = current.toString();
}

function click2 (obj)
{
    let x = obj.currentTarget.innerHTML
    if(x in ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]){
        if (current === "0")
        {
        current = x;
        }
        else
        {
            current += x;
        }
    }
    if(x === "CE"){
        current = "0";
    }

    update();
}

const x = document.getElementsByClassName('btn')
for (let i = 0; i < x.length; i++){
    x[i].addEventListener("click", click2, false);
    x[i]
}