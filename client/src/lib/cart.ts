import { useState, useEffect, useCallback } from "react";
import type { Product } from "@/data/products";

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

// Simple in-memory cart (no localStorage due to iframe sandbox)
let globalCart: CartState = { items: [] };
let listeners: Array<() => void> = [];

function notify() {
  listeners.forEach((l) => l());
}

export function useCart() {
  const [, setTick] = useState(0);

  useEffect(() => {
    const listener = () => setTick((t) => t + 1);
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }, []);

  const addItem = useCallback((product: Product, quantity = 1) => {
    const existing = globalCart.items.find((i) => i.product.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      globalCart.items.push({ product, quantity });
    }
    globalCart = { ...globalCart, items: [...globalCart.items] };
    notify();
  }, []);

  const removeItem = useCallback((productId: string) => {
    globalCart = {
      ...globalCart,
      items: globalCart.items.filter((i) => i.product.id !== productId),
    };
    notify();
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      globalCart = {
        ...globalCart,
        items: globalCart.items.filter((i) => i.product.id !== productId),
      };
    } else {
      const item = globalCart.items.find((i) => i.product.id === productId);
      if (item) {
        item.quantity = quantity;
        globalCart = { ...globalCart, items: [...globalCart.items] };
      }
    }
    notify();
  }, []);

  const clearCart = useCallback(() => {
    globalCart = { items: [] };
    notify();
  }, []);

  const itemCount = globalCart.items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = globalCart.items.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0
  );

  return {
    items: globalCart.items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    itemCount,
    subtotal,
  };
}
