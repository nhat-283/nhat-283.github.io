// Giỏ hàng
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Cập nhật số lượng giỏ hàng
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

// Thêm sản phẩm vào giỏ hàng
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const id = this.getAttribute('data-id');
        const name = this.getAttribute('data-name');
        const price = parseInt(this.getAttribute('data-price'));
        
        // Kiểm tra sản phẩm đã có trong giỏ hàng chưa
        const existingItem = cart.find(item => item.id === id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id,
                name,
                price,
                quantity: 1
            });
        }
        
        // Lưu vào localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Cập nhật số lượng giỏ hàng
        updateCartCount();
        
        // Thông báo
        alert(`Đã thêm ${name} vào giỏ hàng!`);
    });
});

// Khởi tạo
updateCartCount();
// Filter sản phẩm theo tag
document.querySelectorAll('.tag-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Xóa active từ tất cả button
        document.querySelectorAll('.tag-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Thêm active cho button được click
        this.classList.add('active');
        
        const tag = this.getAttribute('data-tag');
        const products = document.querySelectorAll('.product');
        
        products.forEach(product => {
            if (tag === 'all') {
                product.classList.remove('hide');
            } else {
                if (product.getAttribute('data-tag') === tag) {
                    product.classList.remove('hide');
                } else {
                    product.classList.add('hide');
                }
            }
        });
    });
});