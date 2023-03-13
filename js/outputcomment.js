const nachalo = document.querySelector('.container')

Comment.forEach(com=>{
   
    nachalo.innerHTML += '<div class="card"> <div class="card-image '+ com.picid +'" ><style>.'+ com.picid +'{background-image: url('+ com.url +');} </style></div> <h2>'+com.name+'</h2> <p>'+ com.comment +'<br><br></p></div> '

})


