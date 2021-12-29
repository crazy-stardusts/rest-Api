const Profile = require("../model/profile");

exports.showProfiles = (req, res) => {
  Profile.find({}, (err, data) => {
    data._id = undefined;
    if (err) res.status(404);
    res.json(data);
  });
};
exports.showPausedProfiles = (req, res) => {
    Profile.find({status : "PAUSED"}, (err, data) => {
      data._id = undefined;
      if (err) res.status(404);
      res.json(data);
    });
  };

exports.addProfile = (req, res) => {
  console.log(req.body);
  if (req.body.dob) req.body.dob = new Date(req.body.dob);
  let prof = new Profile(req.body);
  prof.save((err, data) => {
    if (err) res.status(404);
    res.json(data);
  });
};

exports.deleteProfile = (req, res) => {
    Profile.deleteOne({_id : req.params.id}, (err, data) => {
        if(err) res.status(404);
        res.json(data);
    })
  };

exports.changeStatus = (req, res) => {
    console.log(req.body.status);
    Profile.findByIdAndUpdate(req.params.id, {status : req.body.status}, {new:true, runValidators: true }, (err, data) => {
        if(err) res.status(404).json({
          message : err
        });
        res.json(data);
    })
}
