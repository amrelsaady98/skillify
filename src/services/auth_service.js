import {CURRENT_USER_KEY, USERS_DATA_KEY} from "../utils/constants/loaclStorageConstants";

function handelAddToUserCourses(courseItem, successCallback = ()=>{}, errorCallback = (error)=>{}){
  // check user login state
  if (isUserLoggedIn()){
    // check if course is already exist in his courses list
    let userData = JSON.parse(sessionStorage.getItem(CURRENT_USER_KEY));
    for (let item of userData.courses){
      console.log(item.id , courseItem.id, item.id === courseItem.id)
      if(item.id === courseItem.id){
        errorCallback('Course Already Exist');
        return
      }
    }
    // add course to user list
    console.log(userData.courses)
    userData.courses.push(courseItem)
    sessionStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userData));
    //TODO:[DONE] update to local storage
    updateLocalStorage(userData)
    successCallback()
  }else {
    errorCallback('Login Required');
  }

}

function updateLocalStorage(userItem){
  let usersData = JSON.parse(localStorage.getItem(USERS_DATA_KEY));
  for(let i = 0; i < usersData.length; i++){
    if (usersData[i].email === userItem.email){
      usersData[i] = userItem;
    }
  }
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(usersData));
}
function isUserLoggedIn(){
  let userData = sessionStorage.getItem(CURRENT_USER_KEY);
  if (userData){
    return true
  }else {
    return false
  }
}

export {handelAddToUserCourses, isUserLoggedIn}