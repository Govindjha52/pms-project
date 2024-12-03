const Transaction = require('../models/Transaction');

const createTransaction = async (req, res) => {
  const { user, amount, transactionType } = req.body;

  if (!user || !amount || !transactionType) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const newTransaction = new Transaction({ user, amount, transactionType });
    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

const getTransactionsByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const transactions = await Transaction.find({ user: userId });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = { createTransaction, getTransactionsByUser };
