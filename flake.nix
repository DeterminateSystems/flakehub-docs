{
  description = "The FlakeHub documentation";

  inputs = {
    nixpkgs.url = "https://flakehub.com/f/NixOS/nixpkgs/*";
  };

  outputs = { self, ... }@inputs:
    let
      supportedSystems = [ "x86_64-linux" "aarch64-darwin" "x86_64-darwin" "aarch64-linux" ];
      forEachSupportedSystem = f: inputs.nixpkgs.lib.genAttrs supportedSystems (system: f {
        pkgs = import inputs.nixpkgs { inherit system; };
      });
    in
    {
      devShells = forEachSupportedSystem ({ pkgs }:
        let
          content = "./pages";

          scripts = with pkgs; [
            (writeScriptBin "lint-style" ''
              vale ${content}
            '')

            (writeScriptBin "preview" ''
              pnpm run build
              serve ./out
            '')

            (writeScriptBin "check-sensitivity" ''
              alex --quiet ${content}
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
