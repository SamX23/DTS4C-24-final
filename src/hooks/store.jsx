import create from "zustand";

const reducer = (state, { type, data }) => {
  switch (type) {
    case "ADD_MOVIE":
      return { movieList: data };
    case "ADD_TO_WISHLIST":
      return { wishlist: [...state.wishlist, data] };
    case "REMOVE_FROM_WISHLIST":
      const newWishlist = state.wishlist.filter(
        (wishlistItem) => wishlistItem != data
      );
      return { wishlist: newWishlist };
    case "LOGIN":
      return { user: data };
    case "LOGOUT":
      return { user: null };
  }
};

const useStore = create((set) => ({
  user: sessionStorage.getItem("user"),
  wishlist: [],
  movieList: [],
  dispatch: (args) => set((state) => reducer(state, args)),
}));

export { useStore };
