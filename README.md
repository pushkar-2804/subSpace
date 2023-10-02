# Blog Analytics and Search Tool

This project is a simple Express.js application that fetches blog data from a third-party API, performs analytics on the data, and provides a blog search functionality. It also includes error handling and caching capabilities.

## Table of Contents

1. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
2. [Usage](#usage)
    - [Endpoints](#endpoints)
        - [Blog Statistics Endpoint](#blog-statistics-endpoint)
        - [Blog Search Endpoint](#blog-search-endpoint)
    - [Error Handling](#error-handling)
    - [Caching (Bonus Challenge)](#caching-bonus-challenge)
3. [License](#license)

## Getting Started

### Prerequisites

Before you can run this project, you need to have the following software installed on your machine:

- **Node.js:** [Download and Install Node.js](https://nodejs.org/)
- **npm (Node Package Manager):** This comes bundled with Node.js.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/AKsHaT123456A/SubSpace.git
   cd SubSpace
2. Install the project dependencies:
   ```bash
   npm install
3. Set up environment variables:
   Create a .env file in the project root and add the following:

   ```bash
   PORT=3000
4. You can update the .env file with any additional configuration variables you may need.
   Start the application:
   ```bash
   npm start

The application will start, and you can access it at http://localhost:3000.

## Usage

This application provides the following main features:

### Endpoints

**Blog Statistics Endpoint:**

- **URL:** `/api/blog-stats`
- **Method:** GET
- **Description:** Fetches blog data from a third-party API, analyzes the data, and provides statistics.
- **Response:** JSON object containing blog statistics, including the total number of blogs, the title of the longest blog, the number of blogs with "privacy" in the title, and an array of unique blog titles.

**Blog Search Endpoint:**

- **URL:** `/api/blog-search`
- **Method:** GET
- **Description:** Performs a case-insensitive search for blogs containing a specified query string in their titles.
- **Query Parameter:** `query` - The search query.
- **Response:** JSON array containing matching blog titles.

### Error Handling

The application includes comprehensive error handling for various scenarios, including invalid requests, internal server errors, and errors related to data retrieval and analysis. Errors are logged, and appropriate error responses are sent to clients to ensure a smooth user experience.

### Caching (Bonus Challenge)

The application implements a caching mechanism using Lodash's memoize function. Cached results are stored for a certain period, reducing unnecessary API calls and computations. If the same requests are made within the caching period, the application returns cached results instead of re-fetching and re-analyzing the data.
