const table = document.querySelector('.table-hover')
const nametable = document.querySelector('.table-title')

Service.forEach(named=>{
    if (named.href === localStorage.test){
        nametable.innerHTML += '<h3>' +named.name  + '</h3>'
    }
})

console.log(table)

Service.forEach(item=>{
    if (item.href === localStorage.test){
        item.config.forEach(clown =>{
            table.innerHTML += '<tr>  <td class="text-left">'+ clown.nazvanie +'</td>  <td class="text-left">'+ clown.price +'</td> </tr>   '
        })
    }
})
