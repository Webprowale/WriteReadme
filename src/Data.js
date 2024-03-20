 export const data = [
    
    {
    projectName: "Connectr",
    cat:"SocialNetwork",
    description: "An open-source social networking platform for professional connections and career development, inspired by LinkedIn.",
    features: [
      "Profile Creation: Create comprehensive profiles highlighting work experience, skills, education, and achievements.",
      "Connection Management: Build and manage a network of professional connections.",
      "Content Sharing: Share articles, news, updates, and insights relevant to your field.",
      "Group Discussions: Participate in discussions on specific topics or industries for professional learning and collaboration.",
      "Job Board: Browse job postings and search for relevant opportunities within your network.",
      "Messaging: Send private messages to connect with individuals directly.",
      "Notifications: Stay informed about relevant activity within your network (connection requests, job postings, group discussions).",
      "Search Functionality: Search for profiles, jobs, and groups by keyword or specific criteria.",
      "Customization: Personalize profiles and news feeds to tailor your Connectr experience."
    ],
    installation: {
      prerequisites: [
        "PHP 7.4 or higher",
        "MySQL database server",
        "Composer dependency manager"
      ],
      steps: [
        "Clone the Connectr repository from GitHub: git clone https://github.com/your-username/connectr.git",
        "Navigate to the project directory: cd connectr",
        "Install dependencies using Composer: composer install",
        "Configure database connection details in the config.php file.",
        "Run database migrations to create necessary tables: php bin/console doctrine:migrations:migrate",
        "(Optional) Set up a web server and configure it to point to the Connectr project directory."
      ]
    },
    usage: {
      steps: [
        "Access Connectr website through your web browser.",
        "Register for a new account or login if you already have one.",
        "Complete your profile by adding work experience, skills, and education.",
        "Build your network by searching for colleagues or industry experts.",
        "Share content, participate in discussions, and engage with other users.",
        "Search for job opportunities and connect with potential employers within your network."
      ]
    },
    testing: {
      runningTests: "php bin/phpunit",
      testCoverage: "Refer to test report generated after running php bin/phpunit."
    },
    contributing: "Refer to CONTRIBUTING.md file for guidelines.",
    license: "MIT License (see LICENSE file)",
    documentation: "Comprehensive documentation coming soon. Refer to code comments in the meantime.",
    authors: "Replace with your name(s) and contact information (optional)",
    copyright: "Copyright (c) 2024 Your Name(s)"
 
  },
    {
    projectName: "EcomShop",
    cat:"Eccommerce",
    description: "An open-source e-commerce platform inspired by Amazon, designed for a seamless online shopping experience and robust management system.",
    features: {
      "Product Catalog": [
        "Manage a wide variety of products across different categories.",
        "Upload high-quality images and detailed descriptions for each product.",
        "Organize products with clear categorization and subcategories for easy browsing."
      ],
      "Search Functionality": [
        "Empower customers to find products quickly using keywords, brand names, categories, or specific attributes.",
        "Implement filters to refine search results based on various criteria."
      ],
      "Product Details": [
        "Clear and concise descriptions",
        "High-resolution product images from multiple angles",
        "Technical specifications and features",
        "Customer reviews and ratings (optional)"
      ],
      "Shopping Cart": [
        "Allow customers to add items to their shopping cart for easy checkout.",
        "Provide the ability to modify quantities, remove items, and view the total cost of the cart."
      ],
      "Secure Checkout": [
        "Integrate with secure payment gateways to process online transactions safely.",
        "Offer various payment options for customer convenience (e.g., credit cards, debit cards, digital wallets)."
      ],
      "User Accounts": [
        "Enable customer account creation for a personalized shopping experience.",
        "Allow users to manage their profile information, order history, and wishlists.",
        "Implement features like address management and saved payment methods for faster checkouts."
      ],
      "Order Tracking": [
        "Provide a system for customers to track the status of their orders in real-time.",
        "Offer estimated delivery dates and tracking information through integration with shipping carriers (optional)."
      ],
      "Customer Reviews and Ratings": [
        "Allow customers to submit reviews and ratings for products, fostering trust and social proof.",
        "Implement a moderation system to ensure the quality and relevance of reviews."
      ],
      "Admin Panel": [
        "Product management (adding, editing, deleting products)",
        "Order management (processing orders, tracking fulfillment)",
        "Customer account management (viewing user data, handling inquiries)",
        "Inventory control (monitoring stock levels, setting reorder points)",
        "Content management system (updating website content, banners, promotions)",
        "Analytics and reporting (tracking sales performance, customer behavior)"
      ]
    },
    usage: {
      "Customer-Facing": [
        "**Browse Products:** Explore the product catalog by category, brand, or use the search functionality to find specific items.",
        "**View Product Details:** Click on a product to see detailed information, images, specifications, and customer reviews (if available).",
        "**Add to Cart:** Select the desired quantity and click 'Add to Cart' to add the product to your shopping cart.",
        "**Shopping Cart:** Review the items in your cart, modify quantities, or remove items as needed. Proceed to checkout when you're ready.",
        "**Checkout:** Create a new account or log in to your existing account. Provide your shipping and billing information.",
        "**Secure Payment:** Choose your preferred payment method and complete the secure checkout process using the integrated payment gateway.",
        "**Order Confirmation:** You will receive an order confirmation email with details and estimated delivery timeframe.",
        "**Order Tracking (Optional):** If available, use your account or the provided tracking information to monitor the status of your order."
      ]
    }
  }
  
]