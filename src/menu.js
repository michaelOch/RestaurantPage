function MenuContent() {
    const element = document.createElement('div');
    element.className = 'container';
    element.setAttribute('style', 'margin-top: 5rem');

    const menuHeader = document.createElement('h1');
    menuHeader.className = 'text-center text-primary';
    menuHeader.textContent = 'Our Menu';
    element.appendChild(menuHeader);

    const menuMsg = document.createElement('p');
    menuMsg.setAttribute('style', 'font-size: 20px;');
    menuMsg.classList.add('text-center');
    menuMsg.textContent = "We make available a host of local and continental dishes for your satisfaction. Make your pick from our vast list of delicacies. Feed your taste buds to a sumptuous meal. You've got to try this!";
    element.appendChild(menuMsg);

    const row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = `
        <div class="col-md-4 mb-3">
            <div class="card">
                <img src="./img/burrito-chicken-delicious-dinner-461198.jpg" class="card-img-top img-height" alt="">
                <div class="card-body">
                    <h5 class="card-title">Burrito Chicken</h5>
                    <a href="#" class="btn btn-primary">Order Now</a>
                </div>
            </div>
        </div>
        <div class="col-md-4 mb-3">
            <div class="card">
                <img src="./img/selective-focus-photography-of-beef-steak-with-sauce-675951.jpg" class="card-img-top img-height" alt="">
                <div class="card-body">
                    <h5 class="card-title">Beef Steak With Sauce</h5>
                    <a href="#" class="btn btn-primary">Order Now</a>
                </div>
            </div>
        </div>
        <div class="col-md-4 mb-3">
            <div class="card">
                <img src="./img/fries-with-leaves-dish-718742.jpg" class="card-img-top img-height" alt="">
                <div class="card-body">
                    <h5 class="card-title">Fries With Leaves</h5>
                    <a href="#" class="btn btn-primary">Order Now</a>
                </div>
            </div>
        </div>
        <div class="col-md-4 mb-3">
            <div class="card">
                <img src="./img/sliced-vegetable-and-cooked-food-on-white-ceramic-plate-1234535.jpg" class="card-img-top img-height" alt="">
                <div class="card-body">
                    <h5 class="card-title">Sliced Vegetables</h5>
                    <a href="#" class="btn btn-primary">Order Now</a>
                </div>
            </div>
        </div>
        <div class="col-md-4 mb-3">
            <div class="card">
                <img src="./img/food-restaurant-meal-chicken-106343.jpg" class="card-img-top img-height" alt="">
                <div class="card-body">
                    <h5 class="card-title">Meal Chicken</h5>
                    <a href="#" class="btn btn-primary">Order Now</a>
                </div>
            </div>
        </div>
        <div class="col-md-4 mb-3">
            <div class="card">
                <img src="./img/pasta-with-vegetable-dish-on-gray-plate-beside-tomato-fruit-769969.jpg" class="card-img-top img-height" alt="">
                <div class="card-body">
                    <h5 class="card-title">Pasta With Vegetable</h5>
                    <a href="#" class="btn btn-primary">Order Now</a>
                </div>
            </div>
        </div>
    `;

    element.appendChild(row);

    return element;
}

export default MenuContent;