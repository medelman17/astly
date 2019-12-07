module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false
      }
    ]
  ],
  plugins: ["macros", "@babel/plugin-proposal-class-properties"]
};
