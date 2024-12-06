/**@type {import("next").NextConfig}*/
module.exports = {
  webpack: (config: {
    module: {
      rules: { test: RegExp; use: string[] }[];
    };
  }) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
