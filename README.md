# idle-ceo-game

## Project: Web Multiplayer Idle CEO Game

### Project Overview

Create a web-based multiplayer game with the theme of an "Idle CEO Game." The game should be simple, user-friendly, and customizable, allowing players to manage businesses, earn revenue, and compete with others. The game will have early, mid, and end-game content to ensure continuous engagement.

### Project Requirements

#### Setup and Initialization

- **Frontend**:
  - Build the UI using HTML, CSS, and JavaScript (or a framework like React).
  - Design a simple and intuitive interface for user interactions.

- **Backend**:
  - Use Flask (Python) for server-side logic and API endpoints.
  - Implement SQLite as the database to store user data, business information, transactions, and more.
  - Ensure the server handles multiple players simultaneously.

#### Database

- **SQLite Database**:
  - Serve as the backbone of the game, storing all relevant data.
  - Use a defined schema to ensure data integrity and consistency.

#### Database Schema

- **Tables**:
  - **Users**: Contains columns for `user_id`, `username`, `balance`, and `created_at` to track user information.
  - **Businesses**: Contains columns for `business_id`, `user_id`, `business_name`, `level`, `revenue_rate`, `perk`, and `created_at` to track user-owned businesses and their details.
  - **Transactions**: Contains columns for `transaction_id`, `user_id`, `amount`, `transaction_type`, and `timestamp` to log all financial transactions.
  - **Shop**: Contains columns for `shop_id`, `user_id`, `business_id`, `price`, and `timestamp` to manage the user shop for selling businesses.

#### Backend Logic

- **API Endpoints**:
  - Implement RESTful API endpoints for user registration, login, business management, and shop interactions.
  - Example endpoints: `/api/register`, `/api/login`, `/api/start_business`, `/api/upgrade_business`, `/api/shop/list`, `/api/shop/buy`.

- **Business Logic**:
  - Handle user actions such as starting businesses, upgrading them, and earning revenue.
  - Implement an idle system where businesses generate revenue automatically over time.

#### Frontend Implementation

- **User Interface**:
  - Design the main game screen with sections for user profile, business management, and the shop.
  - Display user balance, list of businesses, and available actions (e.g., start a new business, upgrade, sell).

- **User Interactions**:
  - Implement forms and buttons for user actions like registering, logging in, starting businesses, and upgrading them.
  - Use AJAX or fetch API to interact with the backend without page reloads.

#### Gameplay Phases

1. **Early Game**:
   - Users can register and start owning their first business.
   - Focus on initial growth and accumulating basic resources.
   - Actions: Register, Login, Start Business.

2. **Mid Game**:
   - Users can manage and upgrade multiple businesses, explore the user shop for new opportunities.
   - Introduce more complex mechanics like business upgrades, perks, and strategic investments.
   - Actions: Upgrade Business, Generate Revenue, List Business for Sale, Buy Business.

3. **End Game**:
   - Users aim to own 10+ businesses, including a few legendary businesses with special perks.
   - Incorporate advanced business strategies, high-level upgrades, and competitive elements.
   - Actions: High-level Upgrades, Strategic Investments, Achievements.

#### Additional Gameplay Features

- **Investments**:
  - Users can invest in other businesses or virtual stocks, adding more strategic depth.
  - Actions: Invest, Withdraw Investment.

- **Achievements**:
  - Reward users for reaching milestones, such as earning a certain amount of money or owning a number of businesses.
  - Actions: View Achievements, Claim Rewards.

#### Business Perks

- Each business has randomly assigned perks when acquired, which can influence revenue rates or other business attributes.
- Examples of perks: increased revenue rate, reduced upgrade costs, special bonuses during events.

#### User Shop

- Users can list their businesses for sale in a user shop, setting their own prices.
- Other users can browse the shop and purchase listed businesses.
- Shop transactions are logged and managed in the database.

#### Idle System

- Businesses generate revenue automatically based on time intervals.
- Implement a background task that periodically updates user balances based on their business revenue.
- Ensure the system is efficient and scalable to handle multiple users and businesses.

#### Testing

- Write unit tests for each backend endpoint and business logic function to ensure functionality and reliability.
- Cover all edge cases and validate that the interactions are working correctly.
- Ensure all tests pass before proceeding with further development.

### Additional Considerations

- Ensure all actions and functionalities are documented in the README for ease of use and understanding.
- Maintain clean, modular, and scalable code to accommodate future expansions and updates.


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/idle-ceo-game.git
cd idle-ceo-game
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
