import app from "./ui/app";

Bun.serve({ port: 3000, fetch: app.fetch });
