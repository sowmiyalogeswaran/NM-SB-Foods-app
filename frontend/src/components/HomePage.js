import React, { useContext } from 'react';
import { useNavigate,Link } from 'react-router-dom'; // Removed Link, only useNavigate is needed
import './HomePage.css';
import { CartContext } from '../contexts/CartContext';

const HomePage = () => {
  const { addItemToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const featuredDishes = [
    { id: 1, name: 'Pizza', description: 'A classic favorite with cheesy goodness.', imageUrl: 'https://images3.alphacoders.com/104/thumb-1920-1041781.jpg' },
    { id: 2, name: 'Burger', description: 'Sizzling burgers with crispy fries.', imageUrl: 'https://th.bing.com/th/id/OIP.n4EAsvL5fOK7ZSYDxSAKPgHaEK?rs=1&pid=ImgDetMain' },
    { id: 3, name: 'Pasta', description: 'Rich, creamy pasta cooked to perfection.', imageUrl: 'https://img.freepik.com/premium-photo/delicious-pasta-food-photography-table-top-setup-generative-ai_751108-3784.jpg?w=740' },
    { id: 4, name: 'Salad', description: 'Fresh and healthy salad with vibrant veggies.', imageUrl: 'https://img.freepik.com/premium-photo/fresh-salad-bowl-amidst-mountainous-green-landscape_1005021-922.jpg' },
    { id: 5, name: 'Sushi', description: 'Authentic sushi rolls with fresh fish.', imageUrl: 'https://img.freepik.com/premium-photo/sushi-food-photography_46383-3421.jpg' },
    { id: 6, name: 'Steak', description: 'Juicy steak grilled to perfection.', imageUrl: 'https://img.freepik.com/premium-photo/delicious-steak-photo-food-photography_955152-1062.jpg' }
  ];

  const specialOffers = [
    { id: 1, name: 'Tacos', description: 'Spicy and tangy tacos with fresh toppings.', imageUrl: 'https://img.freepik.com/premium-photo/mexican-taco-photography_882186-3428.jpg' },
    { id: 2, name: 'Biryani', description: 'Fragrant rice with savory spices and tender meat.', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2023/01/Shutterstock_2047827035.jpg' },
    { id: 3, name: 'Ice Cream', description: 'Creamy and cool dessert for a perfect treat.', imageUrl: 'https://img.freepik.com/premium-photo/photo-scope-ice-cream-top-view-bowl_925414-6710.jpg' },
    { id: 4, name: "Margherita Pizza", description: "Classic pizza with tomatoes, mozzarella, and basil.", imageUrl: "https://azuragoa.com/img/menu/Margherita%20Pizza.jpg" },
    { id: 5, name: "Pasta Carbonara", description: "Rich pasta with eggs, cheese, and bacon.", imageUrl: "https://www.thespruceeats.com/thmb/ovIQQQxQajADuIE2lqhgqq7ppyE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/pasta-carbonara-recipe-5210168-hero-01-80090e56abc04ca19d88ebf7fad1d157.jpg" },
    { id: 6, name: "Steak Frites", description: "Juicy, grilled-to-order steak paired with crispy French fries, topped with herb butter and served with a side of tangy peppercorn sauce.", imageUrl: "https://img.freepik.com/premium-photo/gourmet-temptation-visual-delights-steak-frites_974629-3139.jpg"},
  ];

  const handleAddToCartAndNavigate = (item) => {
    addItemToCart(item); // Add item to the existing cart
    navigate('/cart');   // Navigate to the cart page
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Craving something tasty? Order up, sit back, and let the flavor come to you! 🍕🍣🍔</h1>
      </header>

      <div className="cta-section">
        <h2>Browse Our Menu</h2>
        <p>Explore fresh dishes and make your order in just a few clicks!</p>
        <Link to="/MenuPage" className="cta-button">
          Start Ordering
        </Link>
      </div>

      {/* Special Offers Section */}
      <section className="special-offers">
        <h2>Special Offers</h2>
        <div className="special-cards">
          {specialOffers.map(offer => (
            <div className="card" key={offer.id}>
              <img src={offer.imageUrl} alt={offer.name} className="card-image" />
              <h3>{offer.name}</h3>
              <p>{offer.description}</p>
              <button
                onClick={() => handleAddToCartAndNavigate(offer)}
                className="add-to-cart-button"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="featured-items">
        <h2>Popular Dishes</h2>
        <div className="featured-cards">
          {featuredDishes.map((dish) => (
            <div className="card" key={dish.id}>
              <img src={dish.imageUrl} alt={dish.name} className="card-image" />
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
              <button
                onClick={() => handleAddToCartAndNavigate(dish)}
                className="add-to-cart-button"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer className="home-footer">
        <p>&copy; 2024 Food Delivery App. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
