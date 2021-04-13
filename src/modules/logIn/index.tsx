import { connect } from 'react-redux';
import { Store, Dispatch } from 'redux';
import Component from './LogIn';
import { UserData } from '../../types'
import * as actions from './actions'

const mapStateToProps = (state: Store) => ({

});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    signInRequest: (userData: UserData) => dispatch(actions.onSignInRequest(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
