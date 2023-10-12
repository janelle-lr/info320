import React, { useState } from 'react';

const CancelConfirmationPrompt = () => {
  const [isPromptVisible, setIsPromptVisible] = useState(false);

  // Function to show the confirmation prompt
  const showPrompt = () => {
    setIsPromptVisible(true);
  };

  // Function to hide the confirmation prompt
  const hidePrompt = () => {
    setIsPromptVisible(false);
  };

  // Function to handle the user's decision
  const handleUserDecision = (decision) => {
    if (decision) {
      window.close(); // This will close the current page/tab
    } else {
      hidePrompt();
    }
  };

  return (
    <div>
      <button onClick={showPrompt}>Cancel/Close Page</button>
      {isPromptVisible && (
        <div className="confirmation-prompt">
          <p>Are you sure you want to cancel/close the page?</p>
          <button onClick={() => handleUserDecision(true)}>Yes</button>
          <button onClick={() => handleUserDecision(false)}>No</button>
        </div>
      )}
    </div>
  );
};

export default CancelConfirmationPrompt;
