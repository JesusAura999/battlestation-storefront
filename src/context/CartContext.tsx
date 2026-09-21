"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, PRODUCTS } from "@/data/products";
import { buildCheckoutUrl, DEFAULT_DISCOUNT_CODE } from "@/lib/checkout";

export interface CartLine {
  product: Product;
  quantity: number;
}

interface CartContextType {
  cart: CartLine[];
  isCartOpen: boolean;
  discountCode: string;
  appliedDiscount: number; // 0.10 for 10%
  setIsCartOpen: (open: boolean) => void;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  setDiscountCode: (code: string) => void;
  applyDiscountCode: (code: string) => boolean;
  clearCart: () => void;
  cartCount: number;
  subtotal: number;
  discountAmount: number;
  total: number;
  proceedToCheckout: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [discountCode, setDiscountCode] = useState(DEFAULT_DISCOUNT_CODE);
  const [appliedDiscount, setAppliedDiscount] = useState(0.1); // Default 10% on SETUPWARS10

  // Load cart from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("battlestation_cart");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          // Rehydrate with current product references
          const hydrated: CartLine[] = parsed
            .map((item: { productId: string; quantity: number }) => {
              const product = PRODUCTS.find((p) => p.id === item.productId);
              return product ? { product, quantity: item.quantity } : null;
            })
            .filter((item): item is CartLine => item !== null);
          setCart(hydrated);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    try {
      const serialized = cart.map((line) => ({
        productId: line.product.id,
        quantity: line.quantity,
      }));
      localStorage.setItem("battlestation_cart", JSON.stringify(serialized));
    } catch {
      // ignore
    }
  }, [cart]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const applyDiscountCode = (code: string): boolean => {
    const clean = code.trim().toUpperCase();
    if (clean === "SETUPWARS10" || clean === "DEV10" || clean === "WARS10") {
      setDiscountCode(clean);
      setAppliedDiscount(0.1);
      return true;
    }
    if (clean === "VIP20") {
      setDiscountCode(clean);
      setAppliedDiscount(0.2);
      return true;
    }
    return false;
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const discountAmount = subtotal * appliedDiscount;
  const total = Math.max(0, subtotal - discountAmount);

  const proceedToCheckout = () => {
    if (cart.length === 0) return;
    const checkoutItems = cart.map((line) => ({
      shopifyVariantId: line.product.shopifyVariantId,
      quantity: line.quantity,
    }));
    const url = buildCheckoutUrl(checkoutItems, discountCode);
    window.location.href = url;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        discountCode,
        appliedDiscount,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        setDiscountCode,
        applyDiscountCode,
        clearCart,
        cartCount,
        subtotal,
        discountAmount,
        total,
        proceedToCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
