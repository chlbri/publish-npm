# npm Command

> This library evaluates the npm command to run based on the current
> working directoryand the conventional commit message. It modifies the
> version of the package.json file and generates a npm publish command.

<br/>

## Installation

```bash
npm install --save-dev @bemedev/publish-command # or
yarn add -D @bemedev/publish-command # or
pnpm add -D @bemedev/publish-command
```

<br/>

## Usage

```ts
import publish from '@bemedev/publish-command';

// And simply
publish(/** packageJSON */);

/** optional : add custom path for package.json if needed */
```

<br/>

**N.B**: _The function is asynchronous._

<br/>

> //TODO: Add ChangeLog
