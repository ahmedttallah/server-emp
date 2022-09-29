const router = require("express").Router();
const Company = require("../models/company");

// Since
router.post("/since", async (req, res) => {
  try {
    const { id, since } = req.body;

    await Company.findByIdAndUpdate({ _id: id }, { since: since })
      .then(() => {
        return res.status(200).json({
          msg: "Since Added Successful",
        });
      })
      .catch((err) => {
        return res.status(400).json({
          msg: "Since Not Added",
          ERROR: err,
        });
      });
  } catch (err) {
    return res.status(500).send({
      msg: "Internal Server ERROR",
      ERROR: err.message,
    });
  }
});

router.patch("/since", async (req, res) => {
  try {
    const { id, since } = req.body;

    await Company.findByIdAndUpdate({ _id: id }, { since: since })
      .then(() => {
        return res.status(200).json({
          msg: "Since Updated Successful",
        });
      })
      .catch((err) => {
        return res.status(400).json({
          msg: "Since Not Updated",
          ERROR: err,
        });
      });
  } catch (err) {
    return res.status(500).send({
      msg: "Internal Server ERROR",
      ERROR: err.message,
    });
  }
});

// Status
router.patch("/status", async (req, res) => {
  try {
    const { id, status } = req.body;

    await Company.findByIdAndUpdate({ _id: id }, { status: status })
      .then(() => {
        return res.status(200).json({
          msg: "Status Updated Successful",
        });
      })
      .catch((err) => {
        return res.status(400).json({
          msg: "Status Not Updated",
          ERROR: err,
        });
      });
  } catch (err) {
    return res.status(500).send({
      msg: "Internal Server ERROR",
      ERROR: err.message,
    });
  }
});

// Company Form
router.post("/companyform", async (req, res) => {
  try {
    const { id, companyForm } = req.body;

    await Company.findByIdAndUpdate({ _id: id }, { companyForm: companyForm })
      .then(() => {
        return res.status(200).json({
          msg: "Company Form Added Successful",
        });
      })
      .catch((err) => {
        return res.status(400).json({
          msg: "Company Form Not Added",
          ERROR: err,
        });
      });
  } catch (err) {
    return res.status(500).send({
      msg: "Internal Server ERROR",
      ERROR: err.message,
    });
  }
});

router.patch("/companyform", async (req, res) => {
  try {
    const { id, companyForm } = req.body;

    await Company.findByIdAndUpdate({ _id: id }, { companyForm: companyForm })
      .then(() => {
        return res.status(200).json({
          msg: "Company Form Updated Successful",
        });
      })
      .catch((err) => {
        return res.status(400).json({
          msg: "Company Form Not Updated",
          ERROR: err,
        });
      });
  } catch (err) {
    return res.status(500).send({
      msg: "Internal Server ERROR",
      ERROR: err.message,
    });
  }
});

// Company Type
router.patch("/companytype", async (req, res) => {
  try {
    const { id, companyType } = req.body;

    await Company.findByIdAndUpdate({ _id: id }, { companyType: companyType })
      .then(() => {
        return res.status(200).json({
          msg: "Company Type Updated Successful",
        });
      })
      .catch((err) => {
        return res.status(400).json({
          msg: "Company Type Not Updated",
          ERROR: err,
        });
      });
  } catch (err) {
    return res.status(500).send({
      msg: "Internal Server ERROR",
      ERROR: err.message,
    });
  }
});

// Staff
router.post("/staffnumber", async (req, res) => {
  try {
    const { id, staffNumber } = req.body;

    await Company.findByIdAndUpdate({ _id: id }, { staffNumber: staffNumber })
      .then(() => {
        return res.status(200).json({
          msg: "Staff Number Added Successful",
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({
          msg: "Staff Number Not Added",
          ERROR: err,
        });
      });
  } catch (err) {
    return res.status(500).send({
      msg: "Internal Server ERROR",
      ERROR: err.message,
    });
  }
});

router.patch("/staffnumber", async (req, res) => {
  try {
    const { id, staffNumber } = req.body;

    await Company.findByIdAndUpdate({ _id: id }, { staffNumber: staffNumber })
      .then(() => {
        return res.status(200).json({
          msg: "Staff Number Updated Successful",
        });
      })
      .catch((err) => {
        return res.status(400).json({
          msg: "Staff Number Not Updated",
          ERROR: err,
        });
      });
  } catch (err) {
    return res.status(500).send({
      msg: "Internal Server ERROR",
      ERROR: err.message,
    });
  }
});

// Capital Money
router.post("/capitalmoney", async (req, res) => {
  try {
    const { id, capitalMoney, currency } = req.body;

    await Company.findByIdAndUpdate(
      { _id: id },
      { capitalMoney: capitalMoney, currency: currency }
    )
      .then(() => {
        return res.status(200).json({
          msg: "Paid Capital Money Added Successful",
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({
          msg: "Paid Capital Money Not Added",
          ERROR: err,
        });
      });
  } catch (err) {
    return res.status(500).send({
      msg: "Internal Server ERROR",
      ERROR: err.message,
    });
  }
});

router.patch("/capitalmoney", async (req, res) => {
  try {
    const { id, capitalMoney, currency } = req.body;

    await Company.findByIdAndUpdate(
      { _id: id },
      { capitalMoney: capitalMoney, currency: currency }
    )
      .then(() => {
        return res.status(200).json({
          msg: "Paid Capital Money Updated Successful",
        });
      })
      .catch((err) => {
        return res.status(400).json({
          msg: "Paid Capital Money Not Updated",
          ERROR: err,
        });
      });
  } catch (err) {
    return res.status(500).send({
      msg: "Internal Server ERROR",
      ERROR: err.message,
    });
  }
});

// Business Fields
router.post("/businessfields", async (req, res) => {
  try {
    const { id, name, link } = req.body;

    await Company.findByIdAndUpdate(
      { _id: id },
      { $push: { businessFields: { name, link } } }
    )
      .then(() => {
        return res.status(200).json({
          msg: "Business Fields Added Successful",
        });
      })
      .catch((err) => {
        return res.status(400).json({
          msg: "Business Fields Not Added",
          error: err,
        });
      });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      msg: "Internal Server ERROR",
      ERROR: err.message,
    });
  }
});

router.patch("/businessfields", async (req, res) => {
  try {
    const { id, fieldId, name, link } = req.body;

    await Company.updateMany(
      { _id: id, "businessFields._id": fieldId },
      { $set: { "businessFields.$.name": name, "businessFields.$.link": link } }
    )
      .then(() => {
        return res.status(200).json({
          msg: "Business Fields Updated Successful",
        });
      })
      .catch((err) => {
        return res.status(400).json({
          msg: "Business Fields Not Updated",
          error: err,
        });
      });
  } catch (err) {
    return res.status(500).send({
      msg: "Internal Server ERROR",
      error: err.message,
    });
  }
});

router.patch("/businessfields/del", async (req, res) => {
  try {
    const { id, fieldId } = req.body;

    await Company.findByIdAndUpdate(
      { _id: id },
      { $pull: { businessFields: { _id: fieldId } } }
    )
      .then(() => {
        return res.status(200).json({
          msg: "Business Field Deleted Successful",
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({
          msg: "Business Fields Not Deleted",
          error: err,
        });
      });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      msg: "Internal Server ERROR",
      ERROR: err.message,
    });
  }
});

// Sister Companies
router.post("/sistercompany", async (req, res) => {
  try {
    const { id, name, link } = req.body;

    await Company.findByIdAndUpdate(
      { _id: id },
      { $push: { sisterCompany: { name, link } } }
    )
      .then(() => {
        return res.status(200).json({
          msg: "Sister Company Added Successful",
        });
      })
      .catch((err) => {
        return res.status(400).json({
          msg: "Sister Company Not Added",
          error: err,
        });
      });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      msg: "Internal Server ERROR",
      ERROR: err.message,
    });
  }
});

router.patch("/sistercompany", async (req, res) => {
  try {
    const { id, sisterCompId, name, link } = req.body;

    await Company.updateMany(
      { _id: id, "sisterCompany._id": sisterCompId },
      { $set: { "sisterCompany.$.name": name, "sisterCompany.$.link": link } }
    )
      .then(() => {
        return res.status(200).json({
          msg: "Sister Company Updated Successful",
        });
      })
      .catch((err) => {
        return res.status(400).json({
          msg: "Sister Company Not Updated",
          error: err,
        });
      });
  } catch (err) {
    return res.status(500).send({
      msg: "Internal Server ERROR",
      error: err.message,
    });
  }
});

router.patch("/sistercompany/del", async (req, res) => {
  try {
    const { id, sisterCompId } = req.body;

    await Company.findByIdAndUpdate(
      { _id: id },
      { $pull: { sisterCompany: { _id: sisterCompId } } }
    )
      .then(() => {
        return res.status(200).json({
          msg: "Siter Company Deleted Successful",
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({
          msg: "Sister Company Not Deleted",
          error: err,
        });
      });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      msg: "Internal Server ERROR",
      ERROR: err.message,
    });
  }
});

// Emails
router.post("/email", async (req, res) => {
  try {
    const { id, email } = req.body;

    await Company.findByIdAndUpdate({ _id: id }, { $push: { email } })
      .then(() => {
        return res.status(200).json({
          msg: "Email Added Successful",
        });
      })
      .catch((err) => {
        return res.status(400).json({
          msg: "Email Not Added",
          error: err,
        });
      });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      msg: "Internal Server ERROR",
      ERROR: err.message,
    });
  }
});

router.patch("/email", async (req, res) => {
  try {
    const { id, emailKey, email } = req.body;

    await Company.findByIdAndUpdate(
      { _id: id },
      { $pull: { email: emailKey } }
    );
    await Company.findByIdAndUpdate({ _id: id }, { $push: { email } })
      .then(() => {
        return res.status(200).json({
          msg: "Email Updated Successful",
        });
      })
      .catch((err) => {
        return res.status(400).json({
          msg: "Email Not Updated",
          error: err,
        });
      });
  } catch (err) {
    return res.status(500).send({
      msg: "Internal Server ERROR",
      error: err.message,
    });
  }
});

router.patch("/email/del", async (req, res) => {
  try {
    const { id, emailKey } = req.body;

    await Company.findByIdAndUpdate({ _id: id }, { $pull: { email: emailKey } })
      .then(() => {
        return res.status(200).json({
          msg: "Email Deleted Successful",
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({
          msg: "Email Not Deleted",
          error: err,
        });
      });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      msg: "Internal Server ERROR",
      ERROR: err.message,
    });
  }
});

// Phones
router.post("/phone", async (req, res) => {
  try {
    const { id, phone } = req.body;

    await Company.findByIdAndUpdate({ _id: id }, { $push: { phone } })
      .then(() => {
        return res.status(200).json({
          msg: "Phone Added Successful",
        });
      })
      .catch((err) => {
        return res.status(400).json({
          msg: "Phone Not Added",
          error: err,
        });
      });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      msg: "Internal Server ERROR",
      ERROR: err.message,
    });
  }
});

router.patch("/phone", async (req, res) => {
  try {
    const { id, phoneKey, phone } = req.body;

    await Company.findByIdAndUpdate(
      { _id: id },
      { $pull: { phone: phoneKey } }
    );
    await Company.findByIdAndUpdate({ _id: id }, { $push: { phone } })
      .then(() => {
        return res.status(200).json({
          msg: "Phone Updated Successful",
        });
      })
      .catch((err) => {
        return res.status(400).json({
          msg: "Phone Not Updated",
          error: err,
        });
      });
  } catch (err) {
    return res.status(500).send({
      msg: "Internal Server ERROR",
      error: err.message,
    });
  }
});

router.patch("/phone/del", async (req, res) => {
  try {
    const { id, phoneKey } = req.body;

    await Company.findByIdAndUpdate({ _id: id }, { $pull: { phone: phoneKey } })
      .then(() => {
        return res.status(200).json({
          msg: "Phone Deleted Successful",
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({
          msg: "Phone Not Deleted",
          error: err,
        });
      });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      msg: "Internal Server ERROR",
      ERROR: err.message,
    });
  }
});

module.exports = router;
