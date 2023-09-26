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
      // If the user confirms, you can perform the necessary action here
      // For example, you can navigate away from the current page
      window.close(); // This will close the current page/tab
    } else {
      // If the user cancels, you can handle it as needed
      hidePrompt();
    }
  };

  return (
    <div>
      <button onClick={showPrompt}>Cancel/Close Page</button>

      {/* Confirmation Prompt */}
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
