function adicionar(){
    var valorInput= document.getElementById('name').value;
    var lista= document.getElementById('lista').innerHTML;
    lista= lista+ '<li>'+ valorInput+"</li>";

    document.getElementById('lista').innerHTML= lista;
}
