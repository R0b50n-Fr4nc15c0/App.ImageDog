function carregarFotoDeCachorro()
{
    let url = "https://dog.ceo/api/breeds/image/random";
    fetch(url)
    .then( response => {return response.json();})
    .then( data => {
        if(data.status === "success")
        {
            let imgTag = document.getElementById("minhaFotoDeCachorro");
            imgTag.src = data.message;
        }
    })
    console.log("Já pedi a foto do cachorro, aguarde um momento...");
}

function TrocaDeCao()
{
    setInterval(carregarFotoDeCachorro,3000);
}
