import { useParams } from 'react-router-dom';

function MailboxDetails({ mailboxes }) {
  const { mailboxId } = useParams(); // Extract mailboxId from the URL params

  // Find the selected mailbox in the mailboxes state
  const selectedBox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  // If no mailbox is found, show a "Not Found" message
  if (!selectedBox) {
    return <h2>Mailbox Not Found!</h2>;
  }

  // Render the details of the selected mailbox
  return (
    <div>
      <h2>Mailbox Details</h2>
      <p><strong>Box Number:</strong> {selectedBox._id}</p>
      <p><strong>Boxholder:</strong> {selectedBox.boxholder}</p>
      <p><strong>Box Size:</strong> {selectedBox.boxSize}</p>
    </div>
  );
}

export default MailboxDetails;