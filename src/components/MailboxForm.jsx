import { useState } from 'react';
import { useNavigate } from 'react-dom';

function MailboxForm({ addBox }) {
  const [boxholder, setBoxholder] = useState(''); // State for the boxholder's name
  const [boxSize, setBoxSize] = useState('Small'); // State for the box size
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    addBox({ boxholder, boxSize }); // Call addBox with form data
    navigate('/mailboxes'); // Redirect to the mailboxes list page
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Boxholder Name:
        <input
          type="text"
          value={boxholder}
          onChange={(e) => setBoxholder(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Box Size:
        <select value={boxSize} onChange={(e) => setBoxSize(e.target.value)}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </label>
      <br />
      <button type="submit">Create Mailbox</button>
    </form>
  );
}

export default MailboxForm;
