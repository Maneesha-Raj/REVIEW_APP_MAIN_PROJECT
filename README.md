# REVO:REVIEW APP

This application allows users to view and review products, with different functionalities based on user roles: Admin, and User. The Review App is a web application built with React.js. It allows users to view, search, and review products.

The application has two main types of users:

1. **Admin**: Can manage products by adding, searching and deleting products.
2. **User**: Can view products, search for them, and write reviews.
- **User Authentication** :  Handles user registration, login, logout, and authentication. It ensures that users can securely access the app and their data.
- **Review Management** :  Deals with creating, reading and viewing reviews. It includes functionalities like adding a review and viewing reviews.
- **Product Management** :  Manages the products or items that users can review. It includes functionalities like adding new products, searching for products  and deleting products.
- **UI Components** :  Contains reusable UI components such as buttons, forms and cards. It helps maintain consistency in the app's appearance and makes it easier to build and maintain the user interface.
### **Basic outline of the key components and considerations for designing such an app:**
1. **Homepage**:
- Featured Products: Display featured products with ratings or newly released ones.
- Search Bar: Allow users to search for specific products by category.
- Categories: Provide categories such as smartphones, laptops, etc., for easy navigation.
- Latest Reviews: Showcase the latest reviews or articles related to products.
2. **Product Listing Page**:
- Grid View: Display products in a grid layout with images, names, and descriptions.
- Filtering: Allow users to filter products by category.
3. **Product Detail Page**:
- Specifications: List details of the product such as product name,category,description and price. 
- Reviews and Ratings: Display user reviews and ratings for the product.
4. **User Reviews and Ratings**:
- Rating System: Allow users to rate products and write reviews.
5. **User Authentication and Profiles**:
- User Registration/Login: Allow users to create accounts or sign in using user-email and password.
- User Profiles: Enable users to customize their profiles, and track their reviews.
6. **Admin Dashboard** :
- Content Management: Allow admins to add, or delete products and reviews.
## User Roles and Functionalities
### **Admin**
- Sign Up: Create an admin account.
- Login: Access the admin dashboard upon successful login.
### **Admin Home Page:**
- Header: Includes links to Home, Add Product, and a Search Bar.
- Product Cards: Each card has "View" and "Delete" buttons.
- Search Products: Search for products by category.
- Add Product Link: Navigate to a form to add new products.
### **Admin Functions:**
- Add Product: Fill out a form to add new products.
- Delete Product: Remove products from the list.
- Search Products: Filter products based on category.
### **Registered User**
- Sign Up: Create a user account.
- Login: Access the user home page upon successful login.
### **User Home Page:**
- Header: Includes links to Home, User Reviews, and a Search Bar.
- Product Cards: Each card has a "View" button.
- Search Products: Search for products by category.
- User Reviews Link: Navigate to a list of reviews made by the user.
### **Registered User Functions:**
- Search Products: Filter products based on category.
- View Product Details: See detailed information about a product.
- Write Your Reviews: Write reviews to a product.
- View Your Reviews: View reviews written by the user.


### Components and Pages
- Navbar: Contains links to Products, Sign Up, and Login.
- Admin Dashboard: Allows admins to manage products.
- User Home Page: Displays product cards and user reviews.
- Product Cards: Show product details and action buttons (view, delete).
- Add Product Form: Form to add new products.
- Product Details Page: Displays detailed information about a product.
- Reviews Page: Displays reviews for a product.
