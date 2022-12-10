let input = document.getElementById("input");
let output = document.getElementById("output");
function bubblesort(erp)
{
    var i,j,temp;
    for(i = 0;i < erp.length;i++)
    {
        for(j = i;j < erp.length;j++)
        {
            if(erp[i] > erp[j])
            {
                temp = erp[i];
                erp[i] = erp[j];
                erp[j] = temp;
            }
        }
    }
}

function Output(erp)
{
    output.innerHTML = erp;
}
let btn = document.getElementById("btn");
let reset = document.getElementById("btn-reset");
btn.addEventListener("click",function(){
    let present = input.value.split("\n");
    for(var i = 0;i < present.length;i++)
    {
        present[i] = Number(present[i]);
    }
    bubblesort(present);
    Output(present);
})

reset.addEventListener("click",function(){
    input.value = "";
    output.value = "";
})
