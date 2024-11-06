document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Registration Successful!');
});

const products = [
    { name: 'Chemical A', description: 'High quality chemical A for pharmaceutical use.' },
    { name: 'Chemical B', description: 'High quality chemical B for pharmaceutical use.' },
    { name: 'Chemical C', description: 'High quality chemical C for pharmaceutical use.' }
];

function displayProducts(productList) {
    const productListElement = document.getElementById('productList');
    productListElement.innerHTML = '';
    productList.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `<h3>${product.name}</h3><p>${product.description}</p>`;
        productListElement.appendChild(productElement);
    });
}

document.getElementById('search').addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
});

document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('productList')) {
        displayProducts(products);
    }
});

