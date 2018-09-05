var img_num = 0;


function prevImg() {

    if (img_num > 1 && img_num != 1){
        img_num -= 1 
    }else{
        img_num = 3
    }

    document.getElementById('imagem').src="./img/img"+img_num+".jpg"
    // document.getElementById('contagem').innerHTML = "img_num == "+img_num
}   

function proxImg() {

    if (img_num < 3 && img_num != 3){
        img_num +=1;
    }else{
        img_num = 1
    }

    document.getElementById('imagem').src="./img/img"+img_num+".jpg"
    // document.getElementById("contagem").innerHTML = "img_num == "+img_num
}
