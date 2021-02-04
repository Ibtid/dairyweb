import cheese from '../Resources/Images/cheese.jpg';
import Mayonnaise from '../Resources/Images/Mayonnaise.jpg';
export const initialState = {
  products: [
    {
      id: 1,
      name: 'Cheese',
      price: 30,
      image: cheese,
      description:
        "All that you, the budding cheesemaker, have to do, is heat the mixture up to 86 degrees, sprinkle in the culture, and let it sit for 12 hours. Then you hang it up to drain for another 6 hours. Voila, you're done!",
    },
    {
      id: 2,
      name: 'Mayonnaise',
      price: 45,
      image: Mayonnaise,
      description:
        'In a glass bowl, whisk together egg yolk and dry ingredients. Combine lemon juice and vinegar in a separate bowl then thoroughly whisk half into',
    },
  ],
  cart: [],
  registeredUser: [],
  currentUser: [],
  cartSummary: [],
  order: [],
  orderDetails: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.product],
      };

    case 'REMOVE_PRODUCT':
      const index = state.products.findIndex(
        (product) => product.id === action.id
      );
      let newProducts = [...state.products];
      if (index >= 0) {
        newProducts.splice(index, 1);
      } else {
        console.warn('no products');
      }
      return {
        ...state,
        products: newProducts,
      };

    case 'ADD_PRODUCT_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.product],
      };
  }
};

export default reducer;
