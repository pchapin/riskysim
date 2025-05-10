
RiskySim
========

This project is a simulator for the RISC-V instruction set architecture running as a web
application. It is intended primarily for educational use. It provides a visualization of the
processor registers and allows basic assembly language-level debugging operations such as single
stepping, setting breakpoints, etc.

This project is in its early stages and is not currently usable. Check back later for
developments!

## Setup

First install Rust and Node.js (latest stable versions recommended). You will also need to
install the Rust's `wasm-pack` tool for building WebAssembly packs. Use the following command
anywhere on your system (it installs the tool globally for your user account):

```bash
$ cargo install wasm-pack
```

Note that `wasm-pack` is a separate tool from Rust itself. You most likely do not need to
reinstall it when you upgrade Rust, but you may wish to do so for major Rust upgrades or if odd
errors appear. You can check the version of `wasm-pack` with the command:

```bash
$ wasm-pack --version
```

The Rust core needs to be built separately as follows:

```bash
$ cd rust-core
$ wasm-pack build --target web
```

Next, in the root of the repository install all the Node.js dependencies as follows:

```bash
$ npm install
```

You can build the front end and run the development web server to test the application by doing:

```bash
$ npm run dev
```

## Project Structure

```
RiskySim/
├── rust-core/         # Rust WebAssembly code
│   ├── Cargo.toml
│   └── src/
│       └── lib.rs
├── web/
│   ├── index.html     # Main HTML entry point
│   ├── index.ts       # Main TypeScript entry point
│   └── styles.css     # Optional CSS (add here if needed)
├── node_modules/      # npm dependencies
├── package.json       # npm configuration
├── package-lock.json  # npm lock file
├── tsconfig.json      # TypeScript configuration
└── vite.config.ts     # Vite configuration
```


Peter Chapin  
spicacality@kelseymountain.org  

