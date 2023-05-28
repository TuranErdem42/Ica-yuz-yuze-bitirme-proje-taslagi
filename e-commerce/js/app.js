// Giriş Ekranı Gösterme / Gizleme

let kaydolBtn = document.getElementById("kaydolBtn");
let girisBtn = document.getElementById("girisBtn");
let isimField = document.getElementById("isimField");
let formBaslik = document.getElementById("title");
let navLinks = document.getElementById("navLinks");
let sifre = document.getElementById("sifre");
let adSoyad = document.querySelector(".link .adSoyad");
let isim = document.querySelector("#isimField .input");
let pageTitle = document.querySelector("title");

girisBtn.onclick = function () {
    isimField.style.maxHeight = "0";
    sifre.style.visibility = "visible";
    pageTitle.innerHTML = "Giriş Yap";
    kaydolBtn.classList.add("disable");
    girisBtn.classList.remove("disable");
    formBaslik.innerHTML = "Giriş Yap";
}
kaydolBtn.onclick = function () {
    adSoyad.textContent = isim.value;
    isimField.style.maxHeight = "65px";
    sifre.style.visibility = "hidden";
    pageTitle.innerHTML = "Kaydol";
    girisBtn.classList.add("disable");
    kaydolBtn.classList.remove("disable");
    formBaslik.innerHTML = "Kaydol";
}

let formBox = document.querySelector(".form-box");
function uyelik() {
    formBox.style.display = "block";
    pageTitle.textContent = "Kaydol";
}

function formHide() {
    formBox.style.display = "none";
    pageTitle.textContent = "E-commers";
}

//  Favoriler , Sepetim ve Details Gösterme / Gizleme

let favori = document.querySelector(".favori");
let sepet = document.querySelector(".sepet");
let sepetBitir = document.querySelector(".sepetBitir");
let imgSearchCard = document.querySelector(".imgSearchCard")

function favorilerShow() {
    favori.style.left = "0";
    sepet.style.right = "-5000px";
}

function sepetimShow() {
    sepet.style.right = "0";
    sepetBitir.style.right = "0";
    favori.style.left = "-5000px";
}

function imgSearchCardShow() {
    imgSearchCard.style.top = "80px";
}

let searchİmg = document.getElementById("searchİmg");
let inputFile = document.getElementById("inputFile");

inputFile.onchange = function () {
    const image = this.files[0].name;
    searchİmg.src = `img/${image}`;
}

function imgSearchCardHide() {
    imgSearchCard.style.top = "-450px";
}

function favorilerHide() {
    favori.style.left = "-5000px";
}

function sepetimHide() {
    sepet.style.right = "-5000px";
    sepetBitir.style.right = "-5000px";
}

function detailsHide() {
    productDetails.style.left = "-10000px";
}

// MARKA İSİMLERİ
let markaİsim = [
    "",
    "Pull & Bear",
    "adidas",
    "Nike",
    "Puma",
    "Arzum",
    "Apple",
    "Samsung",
    "Xaomi",
    "Philips",
    "Defacto",
    "Protein Ocean"
];

// MARKA RESİMLERİ YERLEŞTİRME
let markalar = document.querySelector(".markalar");

for (let i = 1; i <= 11; i++) {
    let markaLink = document.createElement("a");
    let markaİmgDiv = document.createElement("div");
    markaİmgDiv.classList.add("skeletonİmg");
    let markaİmg = document.createElement("img");
    markaİmgDiv.append(markaİmg);
    markaİmg.src = `img/marka${i}.jpg`;
    let markaTitleDiv = document.createElement("div");
    let markaTitleDiv2 = document.createElement("div");
    markaTitleDiv.classList.add("skeleton-text", "skeleton");
    markaTitleDiv2.classList.add("skeleton-text", "skeleton");
    let markaTitle = document.createElement("span");
    let markaText = document.createTextNode(markaİsim[i]);

    markaTitle.append(markaText);

    markaTitleDiv.append(markaTitle);
    markaLink.append(markaİmgDiv, markaTitleDiv, markaTitleDiv2);
    markalar.append(markaLink);

    markaLink.onclick=function () {
        document.querySelector(".search > input").placeholder=markaTitle.textContent;
    }

    window.addEventListener("load", function () {
        setTimeout(function () {
            markaİmgDiv.classList.remove("skeletonİmg");
            markaTitleDiv.classList.remove("skeleton-text", "skeleton");
            markaTitleDiv2.classList.remove("skeleton-text", "skeleton");
        }, 1200);
    });
}



// Product Page
let productDetails = document.querySelector(".product-details");

for (let i = 1; i <= 39; i++) {
    let btnGroupsEkleBtn = document.querySelector(".add-cart-btn");
    btnGroupsEkleBtn.onclick = function () {
        sepetEkle();
        btnGroupsEkleBtn.disabled = true;
    }

    let productContainer = document.querySelector(".product-container");

    let productBox = document.createElement("div");

    // PRODUCT BOX İÇİNDEKİ MENÜ

    let productUl = document.createElement("ul");
    productUl.classList.add("action");

    // 1. Lİ (FAVORİLERE EKLE)

    let productLiFav = document.createElement("li");
    productLiFav.addEventListener("click", favoriEkle);

    function favoriEkle() {

        productLiFav.style.background = "#f68a83";
        productLiFav.style.color = "#fff";
        productFavText.textContent = "Favorilere Eklendi";


        let favBos = document.querySelector(".favBos");
        favBos.style.display = "none";

        let favoriDetails = document.querySelector(".favori > .fav-icerik");

        let favCard = document.createElement("div");
        favCard.classList.add("favCard");

        let favCardLeft = document.createElement("div");
        favCardLeft.classList.add("left");
        let favCardLeftİmg = document.createElement("img");
        favCardLeftİmg.src = productİmg.src;

        favCardLeftİmg.onclick = function () {
            detayGor();
        }
        favCardLeft.append(favCardLeftİmg);

        let favCardRight = document.createElement("div");
        favCardRight.classList.add("right");
        let favCardRightTitle = document.createElement("h2");
        favCardRightTitle.textContent = "Pull & Bear Kaban";
        let favCardRightPrice = document.createElement("div");
        favCardRightPrice.classList.add("price");
        favCardRightPrice.textContent = "$2.00";
        let favCardRightButton = document.createElement("button");
        favCardRightButton.textContent = "Sepete Ekle";

        favCardRightButton.onclick = function () {
            sepetEkle();
            favCardRightButton.disabled = true;
        }


        favCardRight.append(favCardRightTitle, favCardRightPrice, favCardRightButton);

        let favDelete = document.createElement("i");
        favDelete.classList.add("fa", "fa-trash-o");

        favCard.append(favCardLeft, favCardRight, favDelete);
        favoriDetails.append(favCard);

        favDelete.onclick = function () {
            favCard.remove();
            favDelete.style.cursor = "pointer";
            productLiFav.style.background = "#fff";
            productLiFav.style.color = "#000";
            productFavText.textContent = "Favorilere Ekle";
        }
    }

    let productFavText = document.createElement("span");
    productFavText.textContent = "Favorilere Ekle";
    let productFav = document.createElement("i");
    productFav.classList.add("fa");
    productFav.classList.add("fa-heart");
    productLiFav.append(productFav, productFavText);

    // 2. Lİ (SEPETE EKLE)

    let productLiShop = document.createElement("li");
    productLiShop.addEventListener("click", sepetEkle);

    function sepetEkle() {
        productLiShop.style.background = "#f68a83";
        productLiShop.style.color = "#fff";
        productShopText.textContent = "Sepete Eklendi";

        let sepetBos = document.querySelector(".sepetBos");
        sepetBos.style.display = "none";

        let sepetDetails = document.querySelector(".sepet-icerik");

        let sepetCard = document.createElement("div");
        sepetCard.classList.add("sepetCard");

        let sepetCardLeft = document.createElement("div");
        sepetCardLeft.classList.add("left");
        let sepetCardLeftİmg = document.createElement("img");
        sepetCardLeftİmg.src = productİmg.src;
        sepetCardLeft.append(sepetCardLeftİmg);

        let sepetCardRight = document.createElement("div");
        sepetCardRight.classList.add("right");
        let sepetCardRightTitle = document.createElement("h2");
        sepetCardRightTitle.textContent = "Pull & Bear Kaban";

        let sepetCardRightKargo = document.createElement("p");
        sepetCardRightKargo.textContent = "Tahmini Kargoya Teslim : 2 iş günü içinde";

        let sepetAdet = document.createElement("div");
        sepetAdet.classList.add("sepetAdet");
        let sepetAdetSpanArttır = document.createElement("span");
        sepetAdetSpanArttır.textContent = "+";

        sepetCardRight.append(sepetCardRightTitle, sepetCardRightKargo);

       let ödeme= document.querySelectorAll(".price");
        ödeme.forEach(element => {
            console.log(element);
        });

        function sepetTotal() {
            sepetAdetSpan.textContent = adet;
            sepetCardRightPrice.textContent = `${toplamFiyat} TL`;
            sepetToplam.textContent = `${toplamFiyat} TL`;
        }

        var adet = 1;
        let sepetAdetSpan = document.createElement("span");
        sepetAdetSpan.textContent = "1";

        var sepetToplam = document.querySelector(".toplam");
        var fiyat = 2;
        var toplamFiyat = 2;

        sepetAdetSpanArttır.onclick = function () {
            adet += 1;
            toplamFiyat = adet * fiyat;
            sepetTotal();
        }

        let sepetAdetSpanAzalt = document.createElement("span");
        sepetAdetSpanAzalt.textContent = "-";

        sepetAdetSpanAzalt.onclick = function () {
            adet -= 1;
            toplamFiyat = adet * fiyat;
            if (adet <= 0) {
                adet = 1;
            }
            sepetTotal();
        }

        sepetAdet.append(sepetAdetSpanArttır, sepetAdetSpan, sepetAdetSpanAzalt);

        let sepetCardRightPrice = document.createElement("div");
        sepetCardRightPrice.classList.add("price");

        sepetCardRightPrice.textContent = `${fiyat} TL`;
        sepetCardRight.append(sepetAdet, sepetCardRightPrice);

        let shopDelete = document.createElement("i");
        shopDelete.style.cursor = "pointer";
        shopDelete.classList.add("fa", "fa-trash-o");

        shopDelete.onclick = function () {
            sepetCard.remove();
            productLiShop.style.background = "#fff";
            productLiShop.style.color = "#000";
            productShopText.textContent = "Sepete Ekle";
        }

        sepetCard.append(sepetCardLeft, sepetCardRight, shopDelete);
        sepetDetails.append(sepetCard);

    }

    let productShopText = document.createElement("span");
    productShopText.textContent = "Sepete Ekle";
    let productShop = document.createElement("i");
    productShop.classList.add("fa");
    productShop.classList.add("fa-shopping-cart");
    productLiShop.append(productShop, productShopText);

    // 3. Lİ (DETAYLARI GÖR)
    let productLiEye = document.createElement("li");
    productLiEye.addEventListener("click", detayGor);

    function detayGor() {
        productDetails.style.left = "0";
        let detailsİmg = document.querySelector(".detailsİmg");
        detailsİmg.src = productİmg.src;
        let slider1 = document.querySelector(".slider1");
        slider1.src = `img/product${i}.webp`;
        let slider2 = document.querySelector(".slider2");
        slider2.src = `img/product${i}.webp`;
    }

    let productEyeText = document.createElement("span");
    productEyeText.textContent = "Detayları Gör";
    let productEye = document.createElement("i");
    productEye.classList.add("fa");
    productEye.classList.add("fa-eye");
    productLiEye.append(productEye, productEyeText);

    productUl.append(productLiFav, productLiShop, productLiEye);

    // Tüm hover görüntülerini seçme
    const allHoverImages = document.querySelectorAll('.hover-container div img');

    // Resim konteynerini seçme
    const imgContainer = document.querySelector('.img-container');

    // Sayfa yüklendiğinde
    window.addEventListener('DOMContentLoaded', () => {
        // İlk hover resminin üst öğesine 'active' sınıfını ekleme
        allHoverImages[0].parentElement.classList.add('active');
    });

    // Her bir hover resmi için
    allHoverImages.forEach((image) => {
        image.addEventListener('mouseover', () => {
            // Resim konteynerinin içindeki resmin src'sini değiştirme
            imgContainer.querySelector('img').src = image.src;

            // Aktif resmi sıfırlama
            resetActiveImg();

            // Seçilen resmin üst öğesine 'active' sınıfını ekleme
            image.parentElement.classList.add('active');
        });
    });

    // Aktif resmi sıfırlama fonksiyonu
    function resetActiveImg() {
        allHoverImages.forEach((img) => {
            img.parentElement.classList.remove('active');
        });
    }


    // -----------------------------------------------------------

    // PRODUCT BOX İÇERİĞİNİ OLUŞTURMA

    let productİmgDiv = document.createElement("div");
    productİmgDiv.classList.add("skeleton");

    let productİmg = document.createElement("img");
    productİmgDiv.append(productİmg);

    productİmg.src = `img/product${i}.webp`;    

    let productTitleDiv = document.createElement("div");
    let productTitle = document.createElement("h3");
    let titleText = document.createTextNode("Lorem ipsum dolor, sit amet consectetur.");
    productTitleDiv.classList.add("skeleton", "skeleton-text");
    productTitle.append(titleText);
    productTitleDiv.append(productTitle);

    let productPrice = document.createElement("div");
    let priceText = document.createTextNode("$2.00");
    productPrice.classList.add("price", "skeleton", "skeleton-text");

    productBox.classList.add("product");
    productİmg.onclick = function () {
        productDetails.style.left = "0";
    }

    // ELEMANLARI PRODUCT BOX'A EKLEME

    productPrice.append(priceText)
    productBox.append(productİmgDiv, productTitleDiv, productUl, productPrice);
    productContainer.append(productBox);

    window.addEventListener("load", function () {
        setTimeout(function () {
            productİmgDiv.classList.remove("skeleton");
            productTitleDiv.classList.remove("skeleton", "skeleton-text");
            productPrice.classList.remove("price", "skeleton", "skeleton-text");
        }, 1200);
        document.querySelector("footer").style.display = "block";
    });
}

// Progress Bar
const progressBar = document.querySelector("#progressBar");
let body = document.querySelector("body");

const animateProgressBar = () => {
    let kaydirmaMesafesi = -body.getBoundingClientRect().top;
    let progressWidth = (kaydirmaMesafesi / body.getBoundingClientRect().height) * 11;
    let value = Math.floor(progressWidth);
    progressBar.style.width = value + "%";

    if (value < 0) {
        progressBar.style.width = "0%";
    }
};
window.addEventListener("scroll", animateProgressBar);


