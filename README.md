# The FlakeHub documentation

[![FlakeHub](https://img.shields.io/endpoint?url=https://flakehub.com/f/DeterminateSystems/flakehub-docs/badge)](https://flakehub.com/flake/DeterminateSystems/flakehub-docs)

This repo houses the sources used to build the documentation for [FlakeHub].

## Setup

Make sure that you have Nix and [direnv] installed, then:

```shell
# Activate Nix development environment
direnv allow

# Install dependencies
pnpm install
```

## Developing the site

### Run locally

To run the site in development mode (with live reload when you make changes):

```shell
pnpm run dev
```

Then open your browser to http://localhost:3000.

[direnv]: https://direnv.net
[flakehub]: https://flakehub.com
