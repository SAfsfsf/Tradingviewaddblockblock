// Get the toggle switch
const toggle = document.getElementById("toggle");

// Load the current state from storage
chrome.storage.sync.get(["enabled"], (result) => {
  toggle.checked = result.enabled || false;
});

// Listen for changes to the toggle switch
toggle.addEventListener("change", () => {
  chrome.storage.sync.set({ enabled: toggle.checked }, () => {
    console.log("Adblock removal is now", toggle.checked ? "enabled" : "disabled");
  });
});
