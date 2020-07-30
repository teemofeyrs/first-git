import React from 'react';
import * as axios from "axios";
import { setAuthorization } from '../../../redux/reducers/authorizationRedusers';
import { connect } from 'react-redux'
import LoginPage from "../loginPageContainer/LoginPage/LoginPage";

class AuthMeContainer extends React.Component {
  componentDidMount () {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
      .then( response => {
        if (response.data.resultCode === 0){
          this.props.setAuthorization(response.data.data);
        }

      })
  }

  render () {
    return (
      <LoginPage/>
    )
  }
}
let mapStateToProps = ({auth}) => {
  return {
    auth: auth
  }
}
export default connect(mapStateToProps, {setAuthorization})(AuthMeContainer);