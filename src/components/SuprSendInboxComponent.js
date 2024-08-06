// src/components/SuprSendInboxComponent.js
import React from 'react';
import SuprSendInbox from '@suprsend/react-inbox';
import 'react-toastify/dist/ReactToastify.css'; // needed for toast notifications, can be ignored if hideToast=true

const SuprSendInboxComponent = () => {
  const workspaceKey = process.env.REACT_APP_SUPRSEND_WORKSPACE_KEY;
  const subscriberId = process.env.REACT_APP_SUPRSEND_SUBSCRIBER_ID;
  const distinctId = process.env.REACT_APP_SUPRSEND_DISTINCT_ID;

  return (
    <SuprSendInbox
      workspaceKey={workspaceKey}
      subscriberId={subscriberId}
      distinctId={distinctId}
    />
  );
}

export default SuprSendInboxComponent;
