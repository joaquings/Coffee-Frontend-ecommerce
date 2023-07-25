function abrirModal(){

    $("#myModal").modal();
}

document.addEventListener('DOMContentLoaded', function () {

    let galleryItems = document.getElementById('gridView');

    let itemList = ['House Blend #1', 'House Blend #2', 'House Blend #3', 'Etiopía', 'Perú', 'Tanzania', 'Guatemala', 'Nicaragua', 'Kenia', 'Honduras'];

    let priceList = [540, 540, 540, 750, 650, 750, 650, 650, 750, 750];

    const colombia = '<span class="fi fi-co"></span>';
    const brasil = '<span class="fi fi-br"></span>';
    const etiopia = '<span class="fi fi-et"></span>';
    const peru = '<span class="fi fi-pe"></span>';
    const tanzania = '<span class="fi fi-tz"></span>';
    const guatemala = '<span class="fi fi-gt"></span>';
    const nicaragua = '<span class="fi fi-ni"></span>';
    const kenia = '<span class="fi fi-ke"></span>';
    const honduras = '<span class="fi fi-hn"></span>';

    let origin = [colombia, brasil, colombia, etiopia, peru, tanzania, guatemala, nicaragua, kenia, honduras];

    for (let i = 1; i < 10; i++) {
        galleryItems.innerHTML += "<div class='col-sm-4 shop-item' onclick='abrirModal()'><img src='img/coffee" + [i] + ".png' class='itemImg'><h5 class='itemTitleGrid'>" + itemList[i - 1] + "&nbsp" + origin[i - 1] + "</h5><br><span class='priceGrid'>$" + priceList[i - 1] + "</span></div>";

    }

})






// + "&nbsp" + origin[i-1] +