import { Link } from 'react-dom';
import './MailboxList.css'; // Add styles if you want to use a CSS file

function MailboxList({ mailboxes }) {
  if (mailboxes.length === 0) {
    return <p>No mailboxes available. Add a new mailbox to get started!</p>;
  }

  return (
    <div>
      <h2>Mailboxes</h2>
      <div className="mailbox-grid">
        {mailboxes.map((mailbox) => (
          <Link to={`/mailboxes/${mailbox._id}`} key={mailbox._id}>
            <div className="mail-box">
              <p>Box #{mailbox._id}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MailboxList;
