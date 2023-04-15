const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");




var objeto = {
    x: 15,
    y: 15,
    largura: 20,
    altura: 20,
    cor: "red" 

}

function desenhar(){
    
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "red";
    ctx.fillRect(objeto.x,objeto.y,objeto.altura,objeto.largura);
    ctx.fill();

    canvas.addEventListener("mousemove",function(evento){
        const rect = canvas.getBoundingClientRect();
        const x_mouse = evento.clientX - rect.left;
        const y_mouse = evento.clientY - rect.top;
        

        objeto.x = x_mouse - objeto.largura / 2;
        objeto.y = y_mouse - objeto.altura / 2;
    });
    
    

    requestAnimationFrame(desenhar);
}
desenhar() 


  
  