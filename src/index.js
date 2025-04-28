import { ClusterManager } from "discord-hybrid-sharding";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Your existing ClusterManager code...
const manager = new ClusterManager(`./src/cold.js`, {
  totalShards: "auto",
  shardsPerClusters: 2,
  totalClusters: "auto",
  mode: "process",
  token:
    process.env.TOKEN ||
    "MTM2MTY3MDI3MjYxNjIzNTEwOQ.GY_v3g.zVwsKGX_T2QfOHjKaHi9_qoWLT2GDdZyv36h4I", // Use process.env.TOKEN directly
});
manager.on("clusterCreate", (cluster) =>
  console.log(`Launched Cluster ${cluster.id}`)
);
manager.spawn({ timeout: -1 });

// Simple web server to keep the process alive
app.get("/", (req, res) => {
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
