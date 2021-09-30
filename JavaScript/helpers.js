export const helpers = {
  formatDate: (date) => {
    const options = { month: "short", day: "numeric", year: "numeric" };
    // returning a formatted date based on the date provided
    return new Date(date)
      .toLocaleDateString("en-US", options)
      .replaceAll(",", "");
  },

  getLocalStorageData: (name) => {
    if (localStorage.getItem(name) === null) {
      return null;
    }
    return JSON.parse(localStorage.getItem(name).replaceAll("%23", "#"));
  },
};
export default helpers