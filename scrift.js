document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.buy-button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      alert('Produk telah ditambahkan ke keranjang!');
    });
  });
});
