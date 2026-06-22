# SDTS

A standard open-source Python scaffold with a `src/` package layout, CI, and development tooling.

## Project structure

- `src/sdts/`: package source code
- `tests/`: unit tests
- `docs/`: project documentation
- `examples/`: example usage
- `scripts/`: helper scripts
- `.github/`: CI workflows and community files

## Quick start

1. Create and activate a Python virtual environment
2. Install package dependencies:
   ```powershell
   python -m pip install -e .
   python -m pip install -r requirements-dev.txt
   ```
3. Run the package:
   ```powershell
   python -m sdts
   ```
4. Run tests:
   ```powershell
   pytest
   ```

## Development

- Format code: `black --check .`
- Lint: `ruff check .`
- Type check: `mypy src`
- Run pre-commit hooks: `pre-commit run --all-files`

## License

This project is licensed under the MIT License. See `LICENSE` for details.
