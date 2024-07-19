{
  description = "The FlakeHub documentation";

  inputs = {
    nixpkgs.url = "https://flakehub.com/f/NixOS/nixpkgs/*.tar.gz";
    flake-schemas.url = "https://flakehub.com/f/DeterminateSystems/flake-schemas/*.tar.gz";
  };

  outputs = { self, nixpkgs, flake-schemas }:
    let
      supportedSystems = [ "x86_64-linux" "aarch64-darwin" "x86_64-darwin" "aarch64-linux" ];
      forEachSupportedSystem = f: nixpkgs.lib.genAttrs supportedSystems (system: f {
        pkgs = import nixpkgs { inherit system; };
      });
    in
    {
      schemas = flake-schemas.schemas;

      devShells = forEachSupportedSystem ({ pkgs }:
        let
          scripts = with pkgs; [
            (writeScriptBin "lint-style" ''
              vale pages
            '')

            (writeScriptBin "preview" ''
              pnpm run build
              serve ./out
            '')

            (writeScriptBin "check-sensitivity" ''
              alex --quiet pages
            '')

            (writeScriptBin "checks" ''
              lint-style
              check-sensitivity
            '')
          ];
        in
        {
          default = pkgs.mkShell {
            packages = with pkgs; [
              vale
              nodejs_latest
              nixpkgs-fmt
            ] ++ (with pkgs.nodePackages_latest; [ alex pnpm serve ]) ++ scripts;

            env.PREVIEW = "true";
          };
        });
    };
}
