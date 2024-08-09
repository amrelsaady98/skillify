import {CURRENT_USER_KEY} from "../utils/constants/loaclStorageConstants";

function handelAddToUserCourses(courseItem, successCallback = ()=>{}, errorCallback = (error)=>{}){
  // check user login state
  if (isUserLoggedIn()){
    // check if course is already exist in his courses list
    let userData = JSON.parse(sessionStorage.getItem(CURRENT_USER_KEY));
    for (let item of userData.courses){
      console.log(item.id , courseItem.id, item.id == courseItem.id)
      if(item.id == courseItem.id){
        errorCallback('Course Already Exist');
        return
      }
    }
    // add course to user list
    console.log(userData.courses)
    userData.courses.push(courseItem)
    sessionStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userData));
    //TODO: update to local storage
    successCallback()
  }else {
    errorCallback('Login Required');
  }

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