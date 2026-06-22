# Contributing

Thank you for your interest in contributing to this project.

## Getting started

1. Fork the repository.
2. Create a feature branch from `main`.
3. Add tests for your changes.
4. Run formatting, linting, and type checks locally.

## Recommended workflow

- Install dependencies:
  ```powershell
  python -m pip install -e .
  python -m pip install -r requirements-dev.txt
  ```
- Run tests:
  ```powershell
  pytest
  ```
- Run formatting and linting:
  ```powershell
  pre-commit run --all-files
  ```

## Code style

- Format with `black`
- Lint with `ruff`
- Type-check with `mypy`

## Pull requests

- Keep each PR focused on a single change.
- Include relevant tests and documentation updates.
- Use clear commit messages and PR descriptions.
