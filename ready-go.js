var num;

function ready(num)
{
    
    var text=document.getElementsByClassName('message')[0]


    var child1_img =document.getElementById("first_img")
    var child2_img =document.getElementById("sec_img")
    var child3_img =document.getElementById("third_img")
    if(num===1)
    {
        child1_img.src='red.png'
        child2_img.src='gray.png'
        child3_img.src='gray.png'

        text.innerHTML='READY'
        text.style.color='red'


    }
    else if(num===2)
    {
        child1_img.src='gray.png'
        child2_img.src='orange.png'
        child3_img.src='gray.png'

        text.innerHTML='STEADY'
        text.style.color='orange'
        
    }
    else if(num===3)
    {

        child1_img.src='gray.png'
        child2_img.src='gray.png'
        child3_img.src='green.png'

       text.innerHTML='GO'
       text.style.color='green'
        
    }
    else
    {
        child1_img.src='gray.png'
        child2_img.src='gray.png'
        child3_img.src='gray.png'

        text.innerHTML='hello'
        text.style.color='gray'
        
    }
}