# # GifExpertApp - Search & Explore GIFs

Welcome to GifExpertApp!

This is a React-based web application that allows users to search for GIFs using the `Giphy API`and display them dynamically.

---

## Features

Search for GIFs using the Giphy API.
Real-time results displayed dynamically.
Minimalist & responsive UI for a smooth user experience.
Efficient state management using React hooks.

---

## Tech Stack

- **Frontend** : React.js
- **State Management** : React Hooks (useState, useEffect)
- **API** : Giphy API
- **Styling** : CSS

---

## Giphy API Setup

This project uses the public Giphy API to fetch GIFs.

1. Go to the [Giphy Developers](https://developers.giphy.com/) site and create an account.
2. Create an API key (Dashboard → API Keys).
3. In the root of the project, create a `.env` file (next to `package.json`) and add:

```bash
   VITE_GIPHY_API_KEY=your_giphy_api_key_here
```

4. Make sure `.env` is listed in your `.gitignore` so your `key` is **not committed to GitHub**.
5. Restart the dev server:

```bash
   npm run dev
```

6. The key is read in the code using Vite environment variables:

```bash
const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
```

---

## Installation

### Clone this repository

```bash
git clone https://github.com/gabogara/GifExpertApp.git
cd GifExpertApp
```

### Install dependencies

Ensure you have Node.js and npm installed, then run:

```text
npm install
```

---

## Run the application

```bash
npm start
```

Open in browser
The app will be available at:

```text
http://localhost:3000
```

---

## How It Works

Enter a search term in the input field.
The app fetches relevant GIFs from the Giphy API.
Results are displayed dynamically on the screen.

---

## Project Status

Completed - Future improvements may be added.

---

## Contributing

If you’d like to enhance this app, feel free to fork the repository and submit a pull request.

> For suggestions or inquiries, reach out to me at gabriel.acosta.rest@gmail.com

---

## Attributions

- GIF data provided by the [Giphy API](https://developers.giphy.com/).
