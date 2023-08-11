# haven1-safe-styles

![license](https://img.shields.io/github/license/haven1network/haven1-safe-styles)

---

This package serves styles to the Haven1 Safe.

---

## Updating and Publishing the @h1pkgs/safe-styles npm package

Follow these steps to update and publish this npm package

### 1. Update the Version and Commit Changes

- Open your project's `package.json` file.
- Increment the version number following semantic versioning rules (major, minor, patch). You can do this manually or by using the `npm version` command:

  ```bash
  npm version [major | minor | patch]
  ```

- Commit your changes to the repository:

  ```bash
  git add .
  git commit -m "Version X.Y.Z: Description of changes"
  git push origin master
  ```

### 2. Authenticate with npm

If you haven't already, log in to your npm account or create one:

Please email techbytebot@gmail.com to request access to the npm package credentials.

```bash
npm login
```

### 3. Publish the Package

Run the following command to publish the package to the npm registry:

```bash
npm publish
```

### 4. Verify the Published Package

Visit the package's page on the npm website to ensure the new version has been published successfully:

```
https://www.npmjs.com/package/@h1pkgs/safe-styles
```

### 5. Update Dependencies

If you are using the updated package in another project, navigate to that project's directory and run:

```bash
npm update @h1pkgs/safe-styles
```

Congratulations! You have updated the @h1pkgs/safe-styles npm package in the npm registry.
