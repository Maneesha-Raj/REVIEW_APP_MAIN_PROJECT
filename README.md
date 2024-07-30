# REVO:REVIEW APP

This application allows users to view and review products, with different functionalities based on user roles: Admin, and User. The Review App is a web application built with React.js. It allows users to view, search, and review products.

The application has two main types of users:

1. **Admin**: Can manage products by adding, searching and deleting products.
2. **User**: Can view products, search for them, and write reviews.
   
- **User Authentication** :  Handles user registration, login, logout, and authentication. It ensures that users can securely access the app and their data.
- **Review Management** :  Deals with creating, reading and viewing reviews. It includes functionalities like adding a review and viewing reviews.
- **Product Management** :  Manages the products or items that users can review. It includes functionalities like adding new products, searching for products  and deleting products.
- **UI Components** :  Contains reusable UI components such as buttons, forms and cards. It helps maintain consistency in the app's appearance and makes it easier to build and maintain the user interface.
- 
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

## How to install:
- git clone
- To run: docker compose up --build
- You can access the application in your web browser at : http://localhost:3000

## Links:
- Demo Video link :https://drive.google.com/file/d/1wGpgBEjUeG5XQAWdspMtpUopJ2H1BIOf/view?usp=drive_link
- Workflow diagram link : https://drive.google.com/file/d/1ZRT1ACqSJ99bGs8nCbpj1c_qaO0SBsEl/view?usp=drive_link
