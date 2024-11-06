<img width="100%" src="./src/assets/blog-banner.webp"/>

# GADGET HEAVEN

**Gadget Haven** is an elegant and responsive e-commerce website meticulously crafted to meet the modern needs of gadget enthusiasts. this site is not just a store but a well-rounded platform designed to provide a smooth, enjoyable shopping experience for gadget lovers. With its user-friendly navigation, detailed product information, and efficient management of cart and wishlist, it ensures that users can shop with ease and confidence.

---

## Technologies used

- **React JS:** For building the user interface and handling the state management.
- **useState:** For managing local state in React components, such as user balance and selected players.
- **useEffect:** For handling side effects and fetching data when components mount or update.
- **JavaScript (ES6+):** For scripting and implementing the logic of the application.
- **HTML5:** For structuring the web pages.
- **CSS3:** For styling the components and layout.
- **Event Handling:** For managing user interactions, like button clicks.
- **Responsive Design (Tailwind):** To ensure application looks good on all devices.
- **Context API:** The Context API is utilized to manage the state of the shopping cart and wishlist across the application. This ensures that the cart and wishlist information is consistently available no matter which part of the application the user navigates to.
- **Local Storage:** To enhance user experience, Local Storage is used to persist data. This means that even if the user refreshes the page or closes their browser, their cart and wishlist data will remain intact.

## Key features of the project

- **Structured Navigation Bar:** The top navigation bar is designed to be intuitive and user-friendly, featuring menu items such as Logo, Brand Name, Dashboard, and Stats. The active route is clearly indicated to enhance user experience.
- **Home Page:**
  - **Banner Section:** An eye-catching banner welcomes users to the home page, featuring a call-to-action button that directs them to the Dashboard page.
  - **Categories Sidebar:** A sidebar lists various categories of gadgets like computers, phones, smart watches, chargers, and power banks, allowing users to easily browse through different sections.
  - **Gadget Cards:** Displayed in a grid format, each card showcases a product image, name, price, and a ‘Details’ button. Clicking the button navigates users to a detailed product page. The products are categorized to ensure that users can find what they're looking for quickly and efficiently.
- **Product Details Page:** Each product detail page is rich with information, featuring the product image, name, price, detailed description, specifications, availability status, and rating. The page includes two interactive buttons:
  - **Add to Cart:** Adds the item to the shopping cart and updates the cart icon in the navbar with the number of items.
  - **Wishlist Button:** Adds the item to the wishlist and prevents adding the same item more than once.
- **Dashboard Page:**
  - **Tabs for Cart and Wishlist:** Users can switch between viewing their cart items and wishlist items.
  - **Detailed Item Cards:** Each card contains the gadget name, image, price, and description.
  - **Total Price Display:** The cart tab shows the total price of the items.
  - **Sort by Price:** A button allows users to sort the cart items by price in descending order, making it easy to find the costliest items first.
