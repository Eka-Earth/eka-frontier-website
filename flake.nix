{
  description = "Eka Frontier - Development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
        };
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs_22
            nodePackages.pnpm
            nodePackages.typescript
            git
          ];

          shellHook = ''
            echo "🚀 Eka Frontier Development Environment"
            echo ""
            echo "Node.js version: $(node --version)"
            echo "pnpm version: $(pnpm --version)"
            echo "TypeScript version: $(tsc --version)"
            echo ""
            echo "Available commands:"
            echo "  pnpm install  - Install dependencies"
            echo "  pnpm dev      - Start development server"
            echo "  pnpm build    - Build for production (with type checking)"
            echo "  pnpm check    - Run type checking"
            echo "  pnpm preview  - Preview production build"
            echo ""
          '';
        };
      }
    );
}
