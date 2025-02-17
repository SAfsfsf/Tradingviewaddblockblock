// Function to remove the element
function removeAdblockPanel() {
  chrome.storage.sync.get(["enabled"], (result) => {
    if (result.enabled) {
      const adPanel = document.querySelector('[data-dialog-name="gopro"]');
      if (adPanel) {
        adPanel.remove();
        console.log("Adblock panel removed!");
      }
    }
  });
}

// Run the function on page load
window.addEventListener("load", removeAdblockPanel);

// Keep checking periodically in case it reappears
const observer = new MutationObserver(removeAdblockPanel);
observer.observe(document.body, { childList: true, subtree: true });
