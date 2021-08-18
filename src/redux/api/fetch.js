import Cookies from "js-cookie";
import { fetchCreatePostFailure, fetchCreatePostRequest, fetchCreatePostSuccess } from "../createPost/createPostActions";
import { fetchDeletePostFailure, fetchDeletePostRequest } from "../deletePost/deletePostActions";
import { fetchGetUserPostsFailure, fetchGetUserPostsRequest, fetchGetUserPostsSuccess } from "../getUserPosts/getUserPostsActions";
import { fetchLoginFailure, fetchLoginLogout, fetchLoginRequest, fetchLoginSuccess } from "../login/loginActions";
import { fetchPostsFailure, fetchPostsRequest, fetchPostsSuccess } from "../posts/postsActions";
import { fetchProfileDelete, fetchProfileFailure, fetchProfileRequest, fetchProfileSuccess } from "../profile/profileActions";
import { fetchRegisterFailure, fetchRegisterRequest, fetchRegisterSuccess, fetchRegisterUnregister } from "../register/registerActions"
import { fetchProfileUpdateFailure, fetchProfileUpdateRequest, fetchProfileUpdateSuccess } from "../updateProfile/updateProfileActions";
import { fetchUserProfileFailure, fetchUserProfileRequest, fetchUserProfileSuccess} from "../userProfile/userProfileActions";

export const registerFetch = (username, email, password) => {
  const data = {
    username: username,
    email: email,
    password: password
  }
  return (dispatch) => {
    dispatch(fetchRegisterRequest());
    fetch('http://localhost:1337/auth/local/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          dispatch(fetchRegisterFailure(response.message[0].messages[0].message))
        } else {
          Cookies.set('token', response.jwt)
          dispatch(fetchRegisterSuccess(response.user))
          dispatch(fetchLoginSuccess(response.user))
        }
      })
  }
};

export const logout = () => {
  return (dispatch) => {
    Cookies.remove('token');
    dispatch(fetchRegisterUnregister())
    dispatch(fetchLoginLogout())
    dispatch(fetchProfileDelete())
  }
};

export const loginFetch = (username, password) => {
  const data = {
    identifier: username,
    password: password
  }
  return (dispatch) => {
    dispatch(fetchLoginRequest())
    fetch('http://localhost:1337/auth/local', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((reponse) => reponse.json())
      .then((response) => {
        if (response.error) {
          dispatch(fetchLoginFailure(response.message[0].messages[0].message))
        } else {
          Cookies.set('token', response.jwt)
          dispatch(fetchLoginSuccess(response.user))
          dispatch(fetchRegisterSuccess(response.user))
        };
      })
  }
}

export const profileFetch = () => {
  return (dispatch) => {
    dispatch(fetchProfileRequest());
    fetch('http://localhost:1337/users/me', {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          dispatch(fetchProfileFailure(response.error))
        } else {
          dispatch(fetchProfileSuccess(response))
        }
      }
    )
  }
};

export const updateProfileFetch = (username, description) => {
  const data = {
    username: username,
    description: description
  }
  return (dispatch) => {
    dispatch(fetchProfileUpdateRequest());
    fetch(`http://localhost:1337/users/me`, {
      method: 'put',
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((reponse) => reponse.json())
      .then((response) => {
        if (response.error) {
          dispatch(fetchProfileUpdateFailure(response.error))
        } else {
           dispatch(fetchProfileUpdateSuccess(response))
        }
      })
  }
};

export const postsFetch = () => {
  return (dispatch) => {
    dispatch(fetchPostsRequest());
    fetch('http://localhost:1337/posts?_limit=30&_sort=created_at:desc', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          dispatch(fetchPostsFailure(response.error))
        } else {
          dispatch(fetchPostsSuccess(response))
        }
      }
    )
  }
};

export const createPostFetch = (text, user) => {
  const data = {
    text: text,
    user: user
  }
  return (dispatch) => {
    dispatch(fetchCreatePostRequest())
    fetch('http://localhost:1337/posts', {
      method: 'post',
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((reponse) => reponse.json())
      .then((response) => {
        if (response.error) {
          dispatch(fetchCreatePostFailure(response.error))
        } else {
          dispatch(fetchCreatePostSuccess(response))
        }
      })
  }
}

export const deletePostFetch = (id) => {
  return (dispatch) => {
    dispatch(fetchDeletePostRequest())
    fetch(`http://localhost:1337/posts/${id}`, {
      method: 'delete',
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json'
      }
    })
      .then((reponse) => reponse.json())
      .then((response) => {
        if (response.error) {
          dispatch(fetchDeletePostFailure(response.error))
        } else {
          console.log((response));
          dispatch(fetchCreatePostSuccess(response))
        }
      })
  }
}

export const userProfileFetch = (id) => {
  return (dispatch) => {
    dispatch(fetchUserProfileRequest());
    fetch(`http://localhost:1337/users/${id}`, {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          dispatch(fetchUserProfileFailure(response.error))
        } else {
          dispatch(fetchUserProfileSuccess(response))
        }
      }
    )
  }
};

export const getUserPostsFetch = (id) => {
  return (dispatch) => {
    dispatch(fetchGetUserPostsRequest());
    fetch(`http://localhost:1337/posts?user.id=${id}`, {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          dispatch(fetchGetUserPostsFailure(response.error))
        } else {
          dispatch(fetchGetUserPostsSuccess(response))
        }
      }
    )
  }
};
