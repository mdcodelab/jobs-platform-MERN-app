const getAllJobs = async (req, res) => {
res.send("Get all jobs");
}

const showStats = async (req, res) => {
res.send("Show stats");
}

const createJob = async (req, res) => {
  res.send("Create job");
};

const updateJob = async (req, res) => {
  res.send("Update job");
};

const deleteJob = async (req, res) => {
  res.send("Delete job");
};

module.exports={getAllJobs, showStats, createJob, updateJob, deleteJob};


