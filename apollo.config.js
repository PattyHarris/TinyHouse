
module.exports = {
  client: {
      name: 'tinyhouse_v1',
      service: {
          url: "http://localhost:9000/api",
      },
      includes: [
          "./src/**/*.{ts,tsx,js,jsx,graphql}"
      ]
  }
};