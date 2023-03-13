const start = document.querySelector('.container')

Card.forEach(pac=>{
   
    start.innerHTML += '<div class="card"> <div class="card-image '+ pac.picid +'" ><style>.'+ pac.picid +'{background-image: url('+ pac.url +');} </style></div> <h2>'+pac.name+'</h2> <p>'+ pac.comment +'<br><br></p>' + '<a id="'+pac.cardid+'" href="/checkprice">Узнать цены</a>' + '</div> '

})