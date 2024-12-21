import { create } from "zustand";
import { persist } from "zustand/middleware";
import toast from "react-hot-toast";
import { WishlistStore } from "../types";

const useWishlistStore = create<WishlistStore>()(
  persist(
    (set) => ({
      wishlist: [],

      toggleWishlist: (product) => {
        set((state) => {
          const isExisting = state.wishlist.some(
            (item) => item.id === product.id
          );

          if (isExisting) {
            toast.success(`${product.title} removed from wishlist`);
            return {
              wishlist: state.wishlist.filter((item) => item.id !== product.id),
            };
          } else {
            toast.success(`${product.title} added to wishlist`);
            return {
              wishlist: [...state.wishlist, product],
            };
          }
        });
      },
    }),
    {
      name: "wishlist-storage",
    }
  )
);

export default useWishlistStore;
