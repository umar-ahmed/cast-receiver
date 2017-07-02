
var textContainer = document.getElementById('text-container');

// Helper function to write debug output to screen
function debug_print(msg) {
    textContainer.innerHTML += msg + '\n';
}

// Get an instance of the Cast Receiver Manager
var castReceiverManager = new cast.receiver.CastReceiverManager.getInstance();

// Add listener for connect event
castReceiverManager.onSenderConnected = function(event) {
    debug_print('sender connected with ID: ' + event.senderId + ' and User Agent: ' + event.userAgent);
    if (data) {
        debug_print('DATA: ' + String(event.data));
    }
};

// Close the receiver when a sender disconnects and there are no other senders connected
castReceiverManager.onSenderDisconnected = function(event) {
  if(window.castReceiverManager.getSenders().length == 0 &&
    event.reason == cast.receiver.system.DisconnectReason.REQUESTED_BY_SENDER) {
      window.close();
  }
}

// Tell senders that receiver is ready for messages
castReceiverManager.start();