import React, { useState } from 'react';
import { Search, Plus, Minus, Trash2, ShoppingCart } from 'lucide-react';

const POS = () => {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Dummy products data
  const dummyProducts = [
    { id: 1, name: 'Dell Laptop', sku: 'LAP-001', price: 1200.00, stock: 50, image: '💻' },
    { id: 2, name: 'HP Printer', sku: 'PRT-001', price: 350.00, stock: 30, image: '🖨️' },
    { id: 3, name: 'Logitech Mouse', sku: 'MOU-001', price: 25.00, stock: 100, image: '🖱️' },
    { id: 4, name: 'Samsung Monitor', sku: 'MON-001', price: 450.00, stock: 25, image: '🖥️' },
    { id: 5, name: 'Wireless Keyboard', sku: 'KEY-001', price: 75.00, stock: 60, image: '⌨️' },
    { id: 6, name: 'USB Cable', sku: 'CAB-001', price: 10.00, stock: 200, image: '🔌' },
  ];

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const calculateSubtotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.18; // 18% tax
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  const filteredProducts = dummyProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.sku.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Point of Sale (POS)</h1>
        <p className="text-gray-600 mt-1">Add products to cart and complete the sale</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product Selection - Left Side */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products by name, SKU, or barcode..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filteredProducts.map(product => (
              <div 
                key={product.id}
                onClick={() => addToCart(product)}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-teal-500 transition-all cursor-pointer"
              >
                <div className="text-center">
                  <div className="w-full h-32 bg-gradient-to-br from-teal-50 to-blue-50 rounded mb-2 flex items-center justify-center text-5xl">
                    {product.image}
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
                  <p className="text-xs text-gray-500 mb-2">{product.sku}</p>
                  <p className="text-teal-600 font-bold text-lg">Rs {product.price.toFixed(2)}</p>
                  <p className={`text-xs mt-1 ${product.stock > 20 ? 'text-green-600' : 'text-orange-600'}`}>
                    Stock: {product.stock}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart - Right Side */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-[calc(100vh-180px)]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Current Sale</h2>
            <ShoppingCart className="w-6 h-6 text-teal-600" />
          </div>
          
          <div className="mb-4">
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>Walk-in Customer</option>
              <option>John Doe</option>
              <option>Jane Smith</option>
            </select>
          </div>

          {/* Cart Items */}
          <div className="flex-1 border-t border-b py-4 mb-4 overflow-y-auto">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <ShoppingCart className="w-16 h-16 mb-2" />
                <p className="text-center">Cart is empty</p>
                <p className="text-sm text-center">Click on products to add</p>
              </div>
            ) : (
              <div className="space-y-3">
                {cart.map(item => (
                  <div key={item.id} className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{item.name}</h4>
                        <p className="text-xs text-gray-500">{item.sku}</p>
                        <p className="text-sm text-teal-600 mt-1">Rs {item.price.toFixed(2)} each</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-1 rounded"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-semibold w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-1 rounded"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="font-bold text-teal-600">
                        Rs {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-semibold">Rs {calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Tax (18%):</span>
              <span className="font-semibold">Rs {calculateTax().toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xl pt-2 border-t">
              <span className="font-bold">Total:</span>
              <span className="font-bold text-teal-600">Rs {calculateTotal().toFixed(2)}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            <button 
              disabled={cart.length === 0}
              className={`w-full px-4 py-3 rounded-lg transition-colors font-semibold ${
                cart.length === 0 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-teal-600 hover:bg-teal-700 text-white'
              }`}
            >
              Complete Sale
            </button>
            <div className="grid grid-cols-2 gap-2">
              <button 
                disabled={cart.length === 0}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  cart.length === 0 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                Save Draft
              </button>
              <button 
                onClick={clearCart}
                disabled={cart.length === 0}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  cart.length === 0 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'bg-red-600 hover:bg-red-700 text-white'
                }`}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default POS;
