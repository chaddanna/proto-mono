# Proto Mono
_Monorepo Prototype for microfrontends_

<img src="docs/proto.gif" alt="proto man">

### Webpack configuration
- Uses `ModuleFederationPlugin` to wire up host to remotes.
- NPM packages are shared as matches are found.

### Project structure and context
- The `container` hosts the remote apps.
- The remote apps are capable of being run in isolation and/or within the container.
- Remote apps are built intentionally to be framework agnostic.