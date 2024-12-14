# AuthPrivacy - Blockchain-based Decentralized Authentication

![AuthPrivacy](https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1200&h=400)

## Overview

AuthPrivacy is a decentralized authentication system built on the Ethereum blockchain. It provides secure, password-less authentication using blockchain technology while giving users complete control over their privacy and personal data.

## Features

- 🔐 **Secure Authentication**: Login using Ethereum wallet (MetaMask)
- 🛡️ **Privacy Control**: Full control over personal data sharing
- ⛓️ **Blockchain Integration**: Leverages Ethereum's decentralized infrastructure
- 📱 **Responsive Design**: Works seamlessly across all devices
- 🎨 **Modern UI**: Clean and intuitive user interface

## Tech Stack

- **Frontend**: React.js with TypeScript
- **Styling**: Tailwind CSS
- **Blockchain**: Ethereum (Web3.js, Ethers.js)
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite

## Prerequisites

Before running this project, make sure you have:

1. Node.js (v16 or higher)
2. MetaMask browser extension installed
3. An Ethereum wallet with some test ETH (for Testnet)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd authprivacy
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
authprivacy/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ConnectWallet.tsx
│   │   └── Navbar.tsx
│   ├── pages/              # Page components
│   │   ├── Home.tsx
│   │   └── Dashboard.tsx
│   ├── types/              # TypeScript type definitions
│   │   └── window.d.ts
│   ├── App.tsx            # Main application component
│   └── main.tsx           # Application entry point
├── public/                # Static assets
├── index.html            # HTML entry point
└── package.json          # Project dependencies and scripts
```

## Usage

1. **Connect Wallet**:
   - Click the "Connect Wallet" button
   - Approve the MetaMask connection request
   - Your wallet address will be displayed once connected

2. **Dashboard**:
   - Access the dashboard to view your privacy settings
   - Toggle data sharing preferences
   - Monitor recent authentication activities
   - View blockchain verification status

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Security Considerations

- Always verify you're connecting to the correct website
- Never share your private keys
- Review all transaction requests carefully
- Keep your MetaMask wallet secure

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Live Demo

Visit the live demo at: [https://keen-cassata-d611d6.netlify.app](https://keen-cassata-d611d6.netlify.app)

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.

---

Made with ❤️ using React and Ethereum
