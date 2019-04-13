import React from 'react';

import { fetchEmails, fetchLatestEmails } from './api';
import { withNotifier } from './NotificationContext';

const { Provider, Consumer } = React.createContext();

class EmailProvider extends React.Component {
  state = {
    emails: [],
    currentEmail: null,
    error: null,
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true, error: null });
    fetchEmails()
      .then(emails => this.setState({ loading: false, emails }))
      .catch(error => this.setState({ loading: false, error }));

    this.refreshInterval = setInterval(this.refresh, 5000);
  }

  handleSelectEmail = email => {
    this.setState({ currentEmail: email });
  };

  refresh = () => {
    const { loading, emails } = this.state;
    const { notify } = this.props;
    if (loading) {
      return;
    }
    fetchLatestEmails().then(newEmails => {
      if (newEmails.length > 0) {
        this.setState({ emails: emails.concat(newEmails) });
        notify(`${emails.length} more emails arrived`);
      }
    });
  };

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          onSelectEmail: this.handleSelectEmail
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

const Wrapped = withNotifier(EmailProvider);

export { Wrapped as EmailProvider, Consumer as EmailConsumer };
