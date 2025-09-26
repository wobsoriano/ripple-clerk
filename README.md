# ripple-clerk

Unofficial Clerk SDK for Ripple

## Installation

```bash
npm install ripple-clerk
```

## Usage

```ts
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from 'ripple-clerk';

export component App() {
    <ClerkProvider>
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
