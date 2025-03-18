import React, { useState } from 'react';
import { Search, User, Home, Users, BookOpen, Menu, Plus, Edit, Trash2 } from 'lucide-react';
import './Admin.css'; // This would be your external CSS file

const Admin = () => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  // Mock data for questions
  const questions = [
    { id: 1, text: "What is Meant By Mathematics Choose The Correct Ans", options: ["English", "English", "English", "English"], status: "Active" },
    { id: 2, text: "What is Meant By Mathematics Choose The Correct Ans", options: ["English", "English", "English", "English"], status: "Active" },
    { id: 3, text: "What is Meant By Mathematics Choose The Correct Ans", options: ["English", "English", "English", "English"], status: "Active" },
    { id: 4, text: "What is Meant By Mathematics Choose The Correct Ans", options: ["English", "English", "English", "English"], status: "Active" }
  ];

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <Menu className="icon-small" />
          <span>Admin Panel</span>
        </div>
        
        <div className="sidebar-menu">
          <NavItem icon={<Home className="icon-small" />} text="Home" />
          <NavItem icon={<Users className="icon-small" />} text="Students Management" />
          <NavItem icon={<BookOpen className="icon-small" />} text="Subjects" active={true} />
          <NavItem icon={<Menu className="icon-small" />} text="Level" />
        </div>
      </div>

      {/* Main content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <div className="header-content">
            <div className="user-info">
              <div className="user-avatar">
                <User className="icon-small" />
              </div>
              <span>Admin</span>
            </div>
            <div className="subject-info">Subject: Mathematics</div>
          </div>
        </div>

        {/* Content */}
        <div className="content">
          <div className="filter-section">
            <h2>Filter:</h2>
            <div className="filter-controls">
              <div className="select-container">
                <select 
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                >
                  <option value="" disabled>Select Subject</option>
                  <option value="mathematics">Mathematics</option>
                  <option value="physics">Physics</option>
                  <option value="chemistry">Chemistry</option>
                </select>
              </div>
              <div className="select-container">
                <select 
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                >
                  <option value="" disabled>Select Level</option>
                  <option value="basic">Basic</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              <button className="search-button">
                Search
              </button>
            </div>
          </div>

          <div className="questions-container">
            <div className="questions-header">
              <h2>MCQs Questions:</h2>
              <button className="add-button"> Add </button>
            </div>

            <div className="questions-grid">
              {questions.map((question) => (
                <QuestionCard key={question.id} question={question} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ icon, text, active }) => {
  return (
    <div className={`nav-item ${active ? 'active' : ''}`}>
      {icon}
      <span>{text}</span>
    </div>
  );
};

const QuestionCard = ({ question }) => {
  return (
    <div className="question-card">
      <div className="question-header">
        <div className="question-number">Question {question.id}</div>
        <div className="question-status">{question.status}</div>
      </div>
      
      <div className="question-text">
        <p>{question.text}</p>
      </div>
      
      <div className="question-options">
        {question.options.map((option, index) => (
          <div key={index} className="option">
            <input type="radio" name={`question-${question.id}`} id={`question-${question.id}-option-${index}`} />
            <label htmlFor={`question-${question.id}-option-${index}`}>{option}</label>
          </div>
        ))}
      </div>
      
      <div className="question-actions">
        <div className="action-buttons">
          <button className="edit-button">
            <Edit className="icon-small" />
          </button>
          <button className="delete-button">
            <Trash2 className="icon-small" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;