import type { Express } from "express";
import { db } from "../db";
import { models, users } from "@db/schema";
import { eq } from "drizzle-orm";

export function registerRoutes(app: Express) {
  // Get all models
  app.get("/api/models", async (req, res) => {
    try {
      const allModels = await db.query.models.findMany({
        with: {
          owner: true,
        },
        orderBy: (models, { desc }) => [desc(models.updatedAt)],
      });
      res.json(allModels);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch models" });
    }
  });

  // Get models by task
  app.get("/api/models/task/:task", async (req, res) => {
    try {
      const taskModels = await db.query.models.findMany({
        where: eq(models.task, req.params.task),
        with: {
          owner: true,
        },
      });
      res.json(taskModels);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch models by task" });
    }
  });

  // Search models
  app.get("/api/models/search", async (req, res) => {
    const query = req.query.q as string;
    try {
      const searchResults = await db.query.models.findMany({
        where: (models, { like }) => like(models.name, `%${query}%`),
        with: {
          owner: true,
        },
      });
      res.json(searchResults);
    } catch (error) {
      res.status(500).json({ error: "Failed to search models" });
    }
  });
}
