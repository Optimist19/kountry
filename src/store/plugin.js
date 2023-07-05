// persistentData.js
export const persistentDataPlugin = (store) => {
  // Initialize the state with the saved data from local storage
  const savedData = localStorage.getItem("vuexData");
  if (savedData) {
    store.replaceState(JSON.parse(savedData));
  }

  // Save the state to local storage whenever it changes
  store.subscribe((mutation, state) => {
    localStorage.setItem("vuexData", JSON.stringify(state));
  });
};
