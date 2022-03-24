import Block from './Block';
import { renderDOM } from './renderDOM';
import isEqual from '../utilFunctions/isEqual';
import { ROOT_PATH } from '../constants/environment';
import Register from '../../pages/Register';
import Login from '../../pages/Login';
import Profile from '../../pages/Profile';
import UpdateProfile from '../../pages/UpdateProfile';
import ChangePassword from '../../pages/ChangePass';


class Route {
  private block: Block<any> | null;
  private readonly blockClass;
  private readonly pathname;
  private props;

  constructor(pathname, view, props) {
    this.pathname = pathname;
    this.blockClass = view;
    this.block = null;
    this.props = props;
  }

  navigate(pathname) {
    if (this.match(pathname)) {
      this.render();
    }
  }

  leave() {
    if (this.block) {
      this.block.hide();
    }
  }

  match(pathname) {
    return isEqual(pathname, this.pathname);
  }

  render() {
    if (!this.block) {
      this.block = new this.blockClass();
      renderDOM(this.props.rootQuery, this.block);
      return;
    }

    //точно ли отработает как надо show
    this.block.show();
  }
}

class Router {
  public static __instance: Router;
  private routes: Route[];
  private history;
  private currentRoute;
  private readonly rootQuery: string;

  constructor(rootQuery) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this.currentRoute = null;
    this.rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname, block) {
    const route = new Route(pathname, block, { rootQuery: this.rootQuery });
    this.routes.push(route);

    return this;
  }

  start() {
    window.onpopstate = event => {
      this._onRoute(event.currentTarget.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname) {
    const route = this.getRoute(pathname);
    if (!route) {
      return;
    }

    if (this.currentRoute) {
      this.currentRoute.leave();
    }

    this.currentRoute = route;
    route.render();
  }

  go(pathname) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname) {
    return this.routes.find(route => route.match(pathname));
  }
}

const router = new Router(ROOT_PATH);
router
  .use('/', Login)
  .use('/signup', Register)
  .use('/profile', Profile)
  .use('/update', UpdateProfile)
  .use('/change-password', ChangePassword)

export { Router, router };
/*

export interface IWithRouterProps {
  router: Router;
}

export function withRouter(Component: typeof Block) {
  return class WithRouter extends Component<any> {
    public static componentName = Component.name;

    constructor(props: any) {
      super({...props, router: new Router('')});
    }
  }
}
*/
