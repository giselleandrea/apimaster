import express from "express";
import gitController from '../services/githubService.js'


const router = express.Router();

router.get('/repositorios', async (req, res) => {
    const repositorios = await gitController.getRepos();
    res.json(repositorios);
});

export default router;