document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.buy-button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      alert('Produk telah ditambahkan ke keranjang!');
    });
  });
});

document.getElementById('search').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const products = document.querySelectorAll('.product-item');

  products.forEach((product) => {
    const productName = product.querySelector('summary').textContent.toLowerCase();
    const features = product.querySelector('.product-features').textContent.toLowerCase();

    if (productName.includes(query) || features.includes(query)) {
      product.style.display = 'block'; // Tampilkan jika cocok
    } else {
      product.style.display = 'none'; // Sembunyikan jika tidak cocok
    }
  });
});
