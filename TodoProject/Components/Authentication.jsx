class Athentication {
  SavingUserDetail(username, password) {
    console.log("its ok");
    sessionStorage.setItem("athenticatedUser", username);
  }
  LogoutUser() {
    // sessionStorage.clear()
    sessionStorage.removeItem("athenticatedUser");
  }
  isLoggedUserIn() {
    const userLoggedIn = sessionStorage.getItem("athenticatedUser");
    if (userLoggedIn == null) {
      return false;
    } else {
      return true;
    }
  }
}

export default new Athentication();
