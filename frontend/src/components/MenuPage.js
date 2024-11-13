import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import './MenuPage.css';

const MenuPage = () => {
  const { addItemToCart } = useContext(CartContext);
  const menuCategories = [
    {
      category: "Appetizers",
      dishes: [
        { id: 1, name: "Bruschetta", description: "Toasted bread with tomatoes, basil, and olive oil.", imageUrl: "https://th.bing.com/th/id/OIP.zYO5Exrb2oRwrrTKlgkSDAHaE8?rs=1&pid=ImgDetMain" },
        { id: 2, name: "Garlic Bread", description: "Toasted bread with garlic butter and herbs.", imageUrl: "https://img.freepik.com/premium-photo/photo-garlic-bread_933496-16028.jpg" },
        { id: 3, name: "Crispy Calamari Rings", description: "Lightly battered and fried to golden perfection, served with tangy marinara sauce or garlic aioli for dipping.", imageUrl: "https://th.bing.com/th/id/OIP.W3t8TJ4_pacMH_C7GHjJlQHaE7?rs=1&pid=ImgDetMain" },
      ],
    },
    {
      category: "Main Course",
      dishes: [
        { id: 4, name: "Margherita Pizza", description: "Classic pizza with tomatoes, mozzarella, and basil.", imageUrl: "https://azuragoa.com/img/menu/Margherita%20Pizza.jpg" },
        { id: 5, name: "Pasta Carbonara", description: "Rich pasta with eggs, cheese, and bacon.", imageUrl: "https://www.thespruceeats.com/thmb/ovIQQQxQajADuIE2lqhgqq7ppyE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/pasta-carbonara-recipe-5210168-hero-01-80090e56abc04ca19d88ebf7fad1d157.jpg" },
        { id: 6, name: "Steak Frites", description: "Juicy, grilled-to-order steak paired with crispy French fries, topped with herb butter and served with a side of tangy peppercorn sauce.", imageUrl: "https://img.freepik.com/premium-photo/gourmet-temptation-visual-delights-steak-frites_974629-3139.jpg"},
        { id: 7, name: 'Tacos', description: 'Spicy and tangy tacos with fresh toppings.', imageUrl: 'https://img.freepik.com/premium-photo/mexican-taco-photography_882186-3428.jpg' },
        { id: 8, name: 'Biryani', description: 'Fragrant rice with savory spices and tender meat.', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2023/01/Shutterstock_2047827035.jpg' },
        { id: 9, name: 'Burger', description: 'Sizzling burgers with crispy fries.', imageUrl: 'https://th.bing.com/th/id/OIP.n4EAsvL5fOK7ZSYDxSAKPgHaEK?rs=1&pid=ImgDetMain' },
        { id: 10, name: 'Pasta', description: 'Rich, creamy pasta cooked to perfection.', imageUrl: 'https://img.freepik.com/premium-photo/delicious-pasta-food-photography-table-top-setup-generative-ai_751108-3784.jpg?w=740' },
        { id: 11, name: 'Salad', description: 'Fresh and healthy salad with vibrant veggies.', imageUrl: 'https://img.freepik.com/premium-photo/fresh-salad-bowl-amidst-mountainous-green-landscape_1005021-922.jpg' },
      ],
    },
    {
      category: "Desserts",
      dishes: [
        { id: 12, name: 'Ice Cream', description: 'Creamy and cool dessert for a perfect treat.', imageUrl: 'https://img.freepik.com/premium-photo/photo-scope-ice-cream-top-view-bowl_925414-6710.jpg' },
        { id: 13, name: "Tiramisu", description: "Coffee-flavored Italian dessert with mascarpone cheese.", imageUrl: "https://img.freepik.com/premium-photo/tiramisu_670382-110547.jpg" },
        { id: 14, name: "Cheesecake", description: "Creamy cheesecake with a graham cracker crust.", imageUrl: "https://th.bing.com/th/id/OIP.r9tFTKhzR70inEbNnlzgMQHaE8?rs=1&pid=ImgDetMain" },
        { id: 15, name: "Fruit Tart", description: "A buttery, flaky crust filled with vanilla custard and topped with fresh, seasonal fruits for a refreshing, colorful dessert", imageUrl: "https://static.vecteezy.com/system/resources/previews/024/748/504/non_2x/a-gourmet-dessert-plate-with-fresh-berry-slices-and-mint-generated-by-ai-free-photo.jpg" },
      ],
    },
    {
      category: "Beverages",
      dishes: [
        { id: 10, name: "Iced Matcha Latte", description: "Smooth, earthy matcha blended with milk and poured over ice for a refreshing, energizing drink.", imageUrl: "https://buenprovecho.hn/wp-content/uploads/2023/07/iced-latte-de-matcha.png" },
        { id: 11, name: "Classic Mojito", description: "A lively mix of fresh mint, lime, sugar, and soda water with a splash of rum for a cool, citrusy cocktail.", imageUrl: "https://th.bing.com/th/id/OIP.YksFMGxWYA_bQDKSNtm8lwHaFL?rs=1&pid=ImgDetMain" },
        { id: 12, name: "Berry Smoothie", description: "A blend of mixed berries, banana, and yogurt, creating a creamy, fruity drink packed with vitamins.", imageUrl: "https://th.bing.com/th/id/OIP.pbm3pOWgUB4gScI3I9yGBAEuDO?rs=1&pid=ImgDetMain" },
      ],
    },
  ];

  return (
    <div className="menu-container">
      <h1>Our Menu</h1>
      {menuCategories.map((category) => (
        <section key={category.category} className="menu-category">
          <h2>{category.category}</h2>
          <div className="menu-cards">
            {category.dishes.map((dish) => (
              <div className="card" key={dish.id}>
                <img src={dish.imageUrl} alt={dish.name} />
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
                <button onClick={() => addItemToCart(dish)} className="add-to-cart-button">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default MenuPage;