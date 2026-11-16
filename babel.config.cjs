
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }],
    "@babel/preset-typescript",
  ],

  plugins: [
    function transformImportMetaEnv({ types: t }) {
      return {
        visitor: {
          MemberExpression(path) {
            const object = path.node.object;

            if (
              object.type === "MetaProperty" &&
              object.meta.name === "import" &&
              object.property.name === "meta" &&
              path.node.property.name === "env"
            ) {
              path.replaceWith(
                t.memberExpression(
                  t.identifier("process"),
                  t.identifier("env")
                )
              );
            }
          },
        },
      };
    },
  ],
};
