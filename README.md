# ripple-clerk

Unofficial Clerk SDK for Ripple

## Installation

```bash
npm install ripple-clerk
```

## Usage

```ts
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from 'ripple-clerk';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

export component App() {
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
        <SignedIn>
            <p>{'You are signed in'}</p>
            <UserButton />
        </SignedIn>
        <SignedOut>
            <p>{'You are signed out'}</p>
            <SignInButton />
        </SignedOut>
    </ClerkProvider>
}
```

## License

MIT
