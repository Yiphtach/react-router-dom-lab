import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-dom'; // Correct import
import NavBar from './components/NavBar';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import MailboxDetails from './components/MailboxDetails';

const App = () => {
  // State to hold the list of mailboxes
  const [mailboxes, setMailboxes] = useState([]);

  // Function to add a new mailbox
  const addBox = (formData) => {
    // Create a new mailbox object
    const newMailbox = {
      _id: mailboxes.length + 1, // Automatically assign the next ID based on the array length
      boxSize: formData.boxSize, // Box size from the form
      boxholder: formData.boxholder, // Boxholder's name from the form
    };

    // Update the state with the new mailbox object
    setMailboxes([...mailboxes, newMailbox]);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
      </Routes>
    </Router>
  );
};

export default App;
