// src/App.js
import React from 'react';
import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import SuprSendInbox from '@suprsend/react-inbox';
import 'react-toastify/dist/ReactToastify.css'; // Needed for toast notifications, can be ignored if hideToast=true

function App() {
  // Ensure these environment variables are set in your .env file
  const workspaceKey = process.env.REACT_APP_SUPRSEND_WORKSPACE_KEY;
  const subscriberId = process.env.REACT_APP_SUPRSEND_SUBSCRIBER_ID;
  const distinctId = process.env.REACT_APP_SUPRSEND_DISTINCT_ID;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My App</h1>
        <SuprSendInbox
          workspaceKey={workspaceKey}
          subscriberId={subscriberId}
          distinctId={distinctId}
        />
      </header>
      <TodoWrapper />
    </div>
  );
}

export default App;
