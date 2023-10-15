const express = require("express");
const router = express.Router();
const {getAllJobs, showStats, createJob, updateJob, deleteJob}=require("../controllers/jobsController");

router.route("/").get(getAllJobs);
router.route("/stats").get(showStats);
router.route("/").post(createJob);
router.route("/:id").patch(updateJob);
router.route("/:id").delete(deleteJob);

module.exports=router;