# Quick-Link

Quick-Link is a React-based SaaS application designed to shorten URLs quickly and efficiently. Powered by **Supabase**, it offers a seamless and modern approach to link management.

## Features

- **URL Shortening**: Convert long URLs into short, shareable links.
- **Custom Aliases**: Create personalized short URLs.
- **Supabase Integration**: Robust backend powered by Supabase for data management and authentication.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **User-Friendly Interface**: Intuitive UI for an enhanced user experience.

## Technologies Used

- **React**: Frontend library for building the user interface.
- **Vite**: Lightning-fast development environment.
- **React Router**: For routing and navigation.
- **Tailwind CSS**: For modern, responsive styling.
- **Shadcn UI**: For accessible and customizable UI components.
- **Supabase**: Backend-as-a-service for database and authentication.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/itsarman001/Quick-Link.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd Quick-Link
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Set up Supabase:**
   - Create a Supabase project at [supabase.com](https://supabase.com).
   - Configure your environment variables for Supabase in a `.env` file:
     ```env
     VITE_SUPABASE_URL=<your-supabase-url>
     VITE_SUPABASE_ANON_KEY=<your-supabase-anon-key>
     ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:5173` to view the app.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Run ESLint to check for code quality.

## Contributing

Contributions are welcome! Here's how you can get involved:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your branch.
4. Open a pull request describing your changes.

## License

This project is licensed under the [MIT License](./LICENSE).

## Acknowledgements

- Thanks to **Supabase** for providing a powerful backend solution.
- Special thanks to the open-source community for their tools and libraries.