import init, { greet } from '../rust-core/pkg/riscv_core';

async function main() {
    await init();
    const button = document.getElementById('greetButton') as HTMLButtonElement;
    const nameInput = document.getElementById('nameInput') as HTMLInputElement;
    const output = document.getElementById('output') as HTMLPreElement;

    button.addEventListener('click', () => {
        const name = nameInput.value.trim();
        if (name) {
            output.textContent = greet(name);
        }
    });
}

main();
