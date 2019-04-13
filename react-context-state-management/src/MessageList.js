import React, { useContext } from 'react';

import { UserContext } from './UserContext';
import { EmailContext } from './EmailContext';
import Email from './Email';

const MessageList = () => {
  const { user } = useContext(UserContext);
  const { loading, emails, onSelectEmail } = useContext(EmailContext);
  return (
    <div className="MessageList">
      {loading ? (
        <div className="no-messages">Loading...</div>
      ) : emails.length === 0 ? (
        <div className="no-messages">
          Your mailbox is empty, {user.firstName}! 🎉
        </div>
      ) : (
        <ul>
          {emails.map(email => (
            <Email
              key={email.id}
              email={email}
              onClick={() => onSelectEmail(email)}
            />
          ))}
        </ul>
      )}
    </div>
  );
  // <UserConsumer>
  //   {({ user }) => (
  //     <EmailConsumer>
  //       {({ loading, emails, onSelectEmail }) => (
  //         <div className="MessageList">
  //           {loading ? (
  //             <div className="no-messages">Loading...</div>
  //           ) : emails.length === 0 ? (
  //             <div className="no-messages">
  //               Your mailbox is empty, {user.firstName}! 🎉
  //             </div>
  //           ) : (
  //             <ul>
  //               {emails.map(email => (
  //                 <Email
  //                   key={email.id}
  //                   email={email}
  //                   onClick={() => onSelectEmail(email)}
  //                 />
  //               ))}
  //             </ul>
  //           )}
  //         </div>
  //       )}
  //     </EmailConsumer>
  //   )}
  // </UserConsumer>
};

export default MessageList;
