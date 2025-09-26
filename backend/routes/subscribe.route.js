import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import Subscription from "../models/subscription.model.js";

const router = Router();

router.post("/:channelId/subscribe", verifyJWT, async (req, res) => {
  try {
    const { channelId } = req.params;
    const userId = req.user.id;

    if (channelId === userId) {
      return res.status(400).json({ msg: "You cannot subscribe to yourself" });
    }

    const existing = await Subscription.findOne({ subscriber: userId, channel: channelId });

    if (existing) {
      await Subscription.findByIdAndDelete(existing._id);
      return res.json({ msg: "Unsubscribed successfully", subscribed: false });
    } else {
      const subscription = await Subscription.create({ subscriber: userId, channel: channelId });
      return res.status(201).json({ msg: "Subscribed successfully", subscribed: true, subscription });
    }
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// router.post("/:channelId/subscribe", verifyJWT, async (req, res) => {
//   try {
//     const { channelId } = req.params;
//     const userId = req.user.id; // subscriber from auth token

//     if (channelId === userId) return res.status(400).json({ msg: "You cannot subscribe to yourself" });

//     const subscription = await Subscription.create({ subscriber: userId, channel: channelId });
//     res.status(201).json(subscription);
//   } catch (err) {
//     if (err.code === 11000) return res.status(400).json({ msg: "Already subscribed" });
//     res.status(500).json({ msg: "Server error" });
//   }
// });


// router.delete("/:channelId/unsubscribe", verifyJWT, async (req, res) => {
//   try {
//     const { channelId } = req.params;
//     const userId = req.user.id;

//     await Subscription.findOneAndDelete({ subscriber: userId, channel: channelId });
//     res.json({ msg: "Unsubscribed successfully" });
//   } catch (err) {
//     res.status(500).json({ msg: "Server error" });
//   }
// });

router.get("/:channelId/status", verifyJWT, async (req, res) => {
  const { channelId } = req.params;
  const userId = req.user.id;

  const subscribed = await Subscription.exists({ subscriber: userId, channel: channelId });
  res.json({ subscribed: !!subscribed });
});

router.get("/:channelId/count", async (req, res) => {
  const { channelId } = req.params;

  const count = await Subscription.countDocuments({ channel: channelId });
  res.json({ count });
});


export default router;