const User = require('../models/User');

const getUserProfile = async (req, res) => {
  const userId = req.user.id; // Get user ID from token

  try {
    const user = await User.findById(userId).select('-password');
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = { getUserProfile };
