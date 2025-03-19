import React, { useState } from 'react';
import { PlusCircle, Trash2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Expense } from '../types';

const Dashboard: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [newExpense, setNewExpense] = useState({
    description: '',
    amount: '',
    category: '',
    date: new Date().toISOString().split('T')[0]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newExpense.description || !newExpense.amount || !newExpense.category) return;

    const expense: Expense = {
      id: Date.now().toString(),
      description: newExpense.description,
      amount: parseFloat(newExpense.amount),
      category: newExpense.category,
      date: newExpense.date
    };

    setExpenses([expense, ...expenses]);
    setNewExpense({
      description: '',
      amount: '',
      category: '',
      date: new Date().toISOString().split('T')[0]
    });
  };

  const deleteExpense = (id: string) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div 
      className="min-h-screen p-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1495195134817-aeb325a55b65?auto=format&fit=crop&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Expense Dashboard</h1>
          <Link
            to="/"
            className="flex items-center gap-2 text-white hover:text-orange-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
        
        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Add New Expense</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Description"
              value={newExpense.description}
              onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
              className="p-2 border rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
            <input
              type="number"
              placeholder="Amount"
              value={newExpense.amount}
              onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
              className="p-2 border rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
            <select
              value={newExpense.category}
              onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
              className="p-2 border rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            >
              <option value="">Select Category</option>
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Shopping">Shopping</option>
              <option value="Bills">Bills</option>
            </select>
            <input
              type="date"
              value={newExpense.date}
              onChange={(e) => setNewExpense({ ...newExpense, date: e.target.value })}
              className="p-2 border rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
            <button
              type="submit"
              className="md:col-span-2 bg-orange-500 text-white p-2 rounded flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors"
            >
              <PlusCircle className="w-5 h-5" />
              Add Expense
            </button>
          </form>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Expense List</h2>
            <p className="text-lg font-semibold text-orange-600">
              Total: ${totalExpenses.toFixed(2)}
            </p>
          </div>
          
          <div className="space-y-4">
            {expenses.map((expense) => (
              <div
                key={expense.id}
                className="flex items-center justify-between p-4 border rounded hover:bg-orange-50 transition-colors"
              >
                <div>
                  <h3 className="font-semibold">{expense.description}</h3>
                  <p className="text-sm text-gray-600">
                    {expense.category} • {expense.date}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-orange-600">${expense.amount.toFixed(2)}</span>
                  <button
                    onClick={() => deleteExpense(expense.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
            {expenses.length === 0 && (
              <p className="text-center text-gray-500">No expenses added yet</p>
            )}
          </div>
        </div>
        
        <div className="text-center mt-8 text-white text-sm">
          Developed by Jayasurya J
        </div>
      </div>
    </div>
  );
};

export default Dashboard;