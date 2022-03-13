let productItemContainer = document.querySelector(".product__item__container");
let productItem = document.querySelector(".product__item");
let productItems = document.querySelectorAll(".product__item");

let form = document.querySelector(".product form");
let inputProductName = document.querySelector(".product form input[name='productName']");
let inputProductCategory = document.querySelector(".product form input[name='productCategory']");
let inputProductImg = document.querySelector(".product form input[name='productImg']");
let inputProductVendor = document.querySelector(".product form input[name='productVendor']");
let inputProductSalePrice = document.querySelector(".product form input[name='prouctSalePrice']");
let inputProductRegPrice = document.querySelector(".product form input[name='prouctRegPrice']");

let msProductImage = document.querySelectorAll('.product__item div.product__image a img');
let msProductTitle = document.querySelectorAll('.product__item div.product__title a');
let productModal = document.querySelector(".product-modal-content");
let modalCloseBtn = document.querySelector(".modal-close-btn");
let identiNum = "0x1";

let identifyNum;
let productArr = [];
let productInLS = getItem("productArr");
let productItemRemove = document.querySelectorAll(".productItemRemove");

function formInputValueGenerate() {

    let generateSalePrice = (Math.random() * 917).toFixed();
    const formData = {

        productName: ["Seeds of Change Organic Quinoa, Brown, & Red Rice",
            "All Natural Italian-Style Chicken Meatballs",
            "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
            "Foster Farms Takeout Crispy Classic Buffalo Wings",
            "Blue Diamond Almonds Lightly Salted Vegetables", "Chobani Complete Vanilla Greek Yogurt",
            "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
            "Encore Seafoods Stuffed Alaskan Salmon",
            "Gorton’s Beer Battered Fish Fillets with soft paper",
            "Haagen-Dazs Caramel Cone Ice Cream Ketchup"
        ],
        productCategory: ["snack", "cream", "vegetable", "pet foods", "hodo foods", "meats", "coffes",
            "lala", "sokina", "paijam"
        ],
        productImage: [
            "assets/images/food (1).png",
            "assets/images/food (2).png",
            "assets/images/food (3).png",
            "assets/images/food (4).png",
            "assets/images/food (5).png",
            "assets/images/food (6).png",
            "assets/images/food (7).png",
            "assets/images/food (8).png",
            "assets/images/food (9).png",
            "assets/images/food (10).png"
        ],
        productVendor: ["obama", "trump", "jack", "food panda", "khaiso naki", "Khaite Chai", "khuda lagse",
            "olib", "fancy", "mamar bari"
        ],
        productSalePrice: generateSalePrice,
        productRegPrice: generateSalePrice - ((Math.random() * 20).toFixed()),

    }

    inputProductName.value = formData.productName[Math.floor(Math.random() * formData.productName.length)];
    inputProductCategory.value = formData.productCategory[Math.floor(Math.random() * formData.productCategory
        .length)];
    inputProductImg.value = formData.productImage[Math.floor(Math.random() * formData.productImage.length)];
    inputProductVendor.value = formData.productVendor[Math.floor(Math.random() * formData.productVendor
        .length)];
    inputProductSalePrice.value = formData.productSalePrice;
    inputProductRegPrice.value = formData.productRegPrice;

}
formInputValueGenerate();

function productAdd() {

    identifyNum = randomNum("addAlpha");
    if (getItem("productArr")) {
        productArr = getItem("productArr");
    } else {
        productArr = [];
    }

    productArr.push({
        "idenNum": identifyNum,
        "productName": inputProductName.value,
        "productCategory": inputProductCategory.value,
        "productImg": inputProductImg.value,
        "productVendor": inputProductVendor.value,
        "productSalePrice": inputProductSalePrice.value,
        "productRegPrice": inputProductRegPrice.value
    });

    setItem("productArr", productArr);

    productItemContainer.innerHTML += `
            <div idenNum="${identifyNum}" class="product__item border rounded p-4 position-relative">
            <button class="productItemRemove"><i class="border rounded fas fa-times"></i></button>
            <div class="product__image">
                <a href=""><img src="${inputProductImg.value}"></a>
                </div>
                <div class="product__desc">
                    <span class="product__category"><a href="" class="text-dark text-decoration-none">${inputProductCategory.value}</a></span>
                    <h5 class="product__title"><a href="" class="text-dark text-decoration-none">${inputProductName.value}</a></h5>
                    <p class="product__vendor text-muted">
                        By <span class=""><a href="" class="text-success text-decoration-none">${inputProductVendor.value}</a></span>
                    </p>
                    <div class="product__cardBottom d-flex justify-content-between align-items-center">
                        <div class="product__price">
                            <span class="sale__price">$${inputProductSalePrice.value}</span>
                            <span class="sale__regular text-decoration-line-through">$${inputProductRegPrice.value}</span>
                        </div>
                        <div class="add__toCart">
                            <i class="fas fa-shopping-cart"></i> Add
                        </div>
                    </div>
                </div>
`;

    productItemRemove = document.querySelectorAll(".productItemRemove");
    productInLS = getItem("productArr");
    productRemove();
    productItemContainer.scrollIntoView({
        behavior: "smooth",
        block: "end"
    });
    detailsView();
    formInputValueGenerate();
}

if (productInLS) {
    productInLS.map(data => {
        productItemContainer.innerHTML += `
                <div idenNum="${data.idenNum}" class="product__item border rounded p-4 position-relative">
                <button class="productItemRemove"><i class="border rounded fas fa-times"></i></button>
                    <div class="product__image">
                      <a href=""> <img src="${data.productImg}"></a>
                    </div>
                    <div class="product__desc">
                        <span class="product__category"><a href="" class="text-dark text-decoration-none">${data.productCategory}</a></span>
                        <h5 class="product__title"><a href="" class="text-dark text-decoration-none">${data.productName}</a></h5>
                        <p class="product__vendor text-muted">
                            By <a href="" class="text-success">${data.productVendor}</a>
                        </p>
                        <div class="product__cardBottom d-flex justify-content-between align-items-center">
                            <div class="product__price">
                                <span class="sale__price">$${data.productSalePrice}</span>
                                <span class="sale__regular text-decoration-line-through">$${data.productRegPrice}</span>
                            </div>
                            <div class="add__toCart">
                                <i class="fas fa-shopping-cart"></i> Add
                            </div>
                        </div>
                    </div>
                </div>
`;
    })
    productItemRemove = document.querySelectorAll(".productItemRemove");
}

function productRemove() {
    productItemRemove.forEach(removeBtn => {

        productItems = document.querySelectorAll(".product__item");
        removeBtn.addEventListener("click", function () {

            currIdenNum = this.parentElement.getAttribute("idennum");
            productItems.forEach(data => {
                if (currIdenNum == data.getAttribute("idennum")) {
                    productInLS.map(data => {
                        if (data.idenNum == currIdenNum) {
                            matchIndex = productInLS.indexOf(data);
                            if (matchIndex !== -1) {
                                productInLS.splice(matchIndex, 1);
                            }
                            setItem("productArr", productInLS);
                        }
                    })
                    data.remove();
                }

            });

        });

    })
}

// Single Product In Modal

function detailsView() {

    msProductImage = document.querySelectorAll('div.product__item div.product__image a');
    msProductTitle = document.querySelectorAll('div.product__item h5.product__title a');
    productModal = document.querySelector(".product-modal-content");
    modalCloseBtn = document.querySelector(".modal-close-btn");
    identiNum = "";

    msProductImage.forEach(data => {
        data.addEventListener("click", function (ele) {
            ele.preventDefault();

            identiNum = this.closest(".product__item");
            productdetailsView();
        })
    })

    msProductTitle.forEach(data => {
        data.addEventListener("click", function (ss) {
            ss.preventDefault();

            identiNum = this.closest(".product__item");
            productdetailsView();
        })
    })

    modalCloseBtn.addEventListener("click", () => {
        productModal.classList.remove("active");
    })

    function productdetailsView() {

        getItem("productArr").forEach(data => {
            data.idenNum.match(identiNum.getAttribute("idennum")) ?

                document.querySelector(".product__info").innerHTML = `
        <div class="col-md-6 py-3">
        <div class="preview">
            <div class="border" style="height: 265px;margin-bottom: 30px;width: 100%;border-radius: 20px;background: url('${data.productImg}');background-size: 170px;background-position: center;background-repeat:
            no-repeat;"></div>
        </div>
        <div class="img-tab d-flex justify-content-between">
            <div class="border img-tab-item"
                style="width: 100%;height: 70px; border-radius: 20px;margin: 10px 10px 10px 0;">
            </div>
            <div class="border img-tab-item"
                style="width: 100%;height: 70px; border-radius: 20px;margin: 10px;">
            </div>
            <div class="border img-tab-item"
                style="width: 100%;height: 70px; border-radius: 20px;margin: 10px;">
            </div>
            <div class="border img-tab-item"
                style="width: 100%;height: 70px; border-radius: 20px;margin: 10px 0px 10px 10px;">
            </div>
        </div>
    </div>
    <div class="col-md-6 py-3">
        <div class="promotion">Sale Off</div>
        <h2 class="product-heading font-weight-bold text-dark py-3">${data.productName}</h2>
        <div class="price">
            <h1 class="sale-price d-inline-block" style="font-size: 45px;color: #3BB77E;font-weight: bold">$${data.productSalePrice}
            </h1>
            <div class="regular-price d-inline-block ml-2">
                <span style="color: #c4c110;
            font-weight: bold;font-size: 12px;margin-bottom: -3px;padding: 0;display: block;">25%
                    off
                    <br></span>
                <span class=""
                    style="color: #3BB77E;font-weight: 600;text-decoration-line: line-through;font-size: 18px;">$${data.productRegPrice}</span>
            </div>

        </div>
        <div class="add-to-cart py-4">
            <input
                style="width: 70px;margin: 0 6px 15px 0;background: #fff;border: 2px solid #3BB77E !important;font-size: 16px;font-weight: 700;color: #3BB77E;border-radius: 5px;padding: 11px 10px 11px 15px;max-width: 90px;"
                type="number" name="" value="1" id="">
            <input
                style="padding: 0px 20px;border-radius: 5px;border: 0;height: 50px;line-height: 50px;font-weight: 700;font-size: 16px;font-family: 'Quicksand', sans-serif; background: #3BB77E; color: white;"
                type="button" value="Add To Cart">
        </div>
        <div class="info" style="color:#23974b;">
            Vendor : <a href="" class="text-dark">${data.productVendor}</a>
            <p>Category : <a href="" class="text-dark">${data.productCategory}</a></p>
        </div>
    </div> ` : null
        })

        productModal.classList.add("active");

    }

};

detailsView();
productRemove();
