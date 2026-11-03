module.exports = {
  apps: [
    {
      name: "backend",

      cwd: "/home/ec2-user/TravelMemory/backend",

      script: "index.js",

      interpreter: "node",

      instances: 1,

      exec_mode: "fork",

      autorestart: true,

      watch: false,

      max_memory_restart: "500M",

      env: {
        NODE_ENV: "production",
        PORT: 3001
      }
    }
  ]
};