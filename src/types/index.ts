export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
  sizes?: string[];
  category?: string;
}

export interface CartItem extends Product {
  quantity: number;
  size?: string;
}

export interface ShopContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, size?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}