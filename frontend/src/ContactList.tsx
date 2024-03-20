export type ContactProps = {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
};

const ContactList = ({
  contacts,
  updateContact,
  updateCallback,
}: {
  contacts: ContactProps[];
  updateContact: (contact: ContactProps) => void;
  updateCallback: () => void;
}) => {
  const onDelete = async (id: number) => {
    try {
      const url = `http://127.0.0.1:5000/delete_contact/${id}`;
      const options = {
        method: "DELETE",
      };
      const response = await fetch(url, options);
      if (response.status == 200) {
        updateCallback();
      } else {
        console.error("Failed to delete");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <h2>Contacts</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.email}</td>
              <td>
                <button onClick={() => updateContact(contact)}>Update</button>
                <button onClick={() => onDelete(contact.id as number)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
