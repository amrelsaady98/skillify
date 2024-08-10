
export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

const userLogin = (userItem) => ({
  type: AUTH_LOGIN,
  payload: userItem,
});
const userLogout = () => ({
  type: AUTH_LOGOUT,

});

// mimicking an async API login endpoing
const fakeLoginRequest = username =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      username === "foo" ? resolve(username) : reject("No such user");
    }, 1000),
  );

// // handling async login
// export const doLogin = username => async dispatch => {
//   // incrementProgress is responsible for progress status.
//   // Firing a spinner while fetching login info.
//   dispatch(incrementProgress());
//   try {
//     const userResponse = await fakeLoginRequest(username);
//     dispatch(userLogin(userResponse));
//     // if successfull change our route to "dashboard"
//     history.push("/dashboard");
//   } catch (error) {
//     handleError(error);
//   } finally {
//     dispatch(decrementProgress());
//   }
// };

export {userLogin, userLogout};