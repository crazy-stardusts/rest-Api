const Profile = require("../model/profile");

exports.showProfiles = (req, res) => {
  Profile.find({}, (err, data) => {
    data._id = undefined;
    if (err) res.status(404);
    res.status(200).json(data);
  });
};

exports.showPausedProfiles = (req, res) => {
    Profile.find({status : "PAUSED"}, (err, data) => {
      data._id = undefined;
      if (err) res.status(404);
      res.status(200).json(data);
    });
  };

exports.addProfile = (req, res) => {
  if (req.body.dob) req.body.dob = new Date(req.body.dob);
  let prof = new Profile(req.body);
  prof.save((err, data) => {
    if (err) res.status(400);
    res.status(201).json(data);
  });
};

exports.deleteProfile = (req, res) => {
    Profile.deleteOne({_id : req.params.id}, (err, data) => {
        if(err) res.status(404);
        res.status(204).json(data);
    })
  };

exports.changeStatus = (req, res) => {
    Profile.findByIdAndUpdate(req.params.id, {status : req.body.status}, {new:true, runValidators: true }, (err, data) => {
        if(err) res.status(400).json({
          message : err
        });
        res.status(200).json(data);
    })
}
