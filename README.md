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

## Features

#### Components

To see all available props for each component, visit the [Clerk UI Components](https://clerk.com/docs/reference/components/overview) docs.

- `<SignIn />`
- `<SignUp />`
- `<UserButton />`
- `<UserProfile />`
- `<OrganizationProfile />`
- `<OrganizationList />`
- `<OrganizationSwitcher />`
- `<CreateOrganization />`
- `<Waitlist />`
- `<GoogleOneTap />`
- `<SignedIn />`
- `<SignedOut />`
- `<Protect />`
- `<ClerkLoaded />`
- `<ClerkLoading />`

#### `useClerkContext()`

Provides various tracked states to interact with Clerk's resources.

- `auth` - [Auth](https://clerk.com/docs/references/nextjs/auth-object#auth-object) object.
- `user` - Authenticated [user](https://clerk.com/docs/references/javascript/user/user).
- `organization` - Active [organization](https://clerk.com/docs/references/javascript/organization/organization) of the authenticated user.
- `session` - [Session](https://clerk.com/docs/references/javascript/session) of the authenticated user.
- `clerk` - [Clerk](https://clerk.com/docs/references/javascript/clerk/clerk) object.
- `isLoaded` - Indicates if Clerk has finished loading.

Example:

```tsx
import { useClerkContext } from 'ripple-clerk'

export component CurrentUser() {
    const { isLoaded, user } = useClerkContext()

    if (!isLoaded) {
        <div>{'Loading...'}</div>
    } else if (user === null) {
        <div>{'Not signed in'}</div>
    } else {
        <div>{`Hello ${user.fullName}`}</div>
    }
}
```

## License

MIT
