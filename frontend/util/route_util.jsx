import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const Auth = ({component: Component, path, loggedIn, exact}) => (
<Route path={path} exact={exact} render={(props) => (
    !loggedIn? (
      <Component {...props} />
    ) : (
      <Redirect to={'/'} />
    )
  )}/>
);

const mapStateToRoutes = (state) => {
  return {logedIn: Boolean(state.session.id)};
};

export const AuthRoute = withRouter(connect(mapStateToRoutes, null)(Auth));
