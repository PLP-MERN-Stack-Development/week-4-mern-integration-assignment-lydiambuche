import User from '../models/user.js';
import sendEmail from '../utils/sendEmail.js';


// Register new user
export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({
      username,
      email,
      password,
    });

    await sendEmail(
      email,
      'Welcome to Mindhaven!',
      `Hi ${username}, your account has been created.`
    );

    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    res.status(500).json({ message: 'Registration failed', error: error.message });
  }
};

// Get user profile
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
if (!user) {
  return res.status(404).json({ message: 'User not found' });
}
  // email confirmation
    await sendEmail(
      user.email,
      'Profile Viewed',
      `Hi ${user.username}, your profile was just viewed.`
    );

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch user profile', error: error.message });
  }
};

// user profile
export const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    // email confirmation
    await sendEmail(
      updatedUser.email,
      'Profile Updated',
      `Hi ${updatedUser.username}, your profile has been updated successfully.`
    );

    res.json({
      _id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      role: updatedUser.role,
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update profile', error: error.message });
  }
};