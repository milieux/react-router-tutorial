// import React from 'react'
// import { render } from 'react-dom'
// import App from './modules/App'
// import About from './modules/About'
// import Repos from './modules/Repos'
// import Repo from './modules/Repo'
// import Home from './modules/Home'
// import { Router, Route, hashHistory, browserHistory, IndexRoute } from 'react-router'

// // render(<App/>, document.getElementById('app'))
// render((
//     <Router history={browserHistory}>
//         <Route path="/" component={App}>
//             <IndexRoute component={Home}/>
//             <Route path="/repos" component={Repos}>
//                 <Route path="/repos/:username/:repoName" component={Repo} />
//             </Route>
//             <Route path="/about" component={About} />
//         </Route>
//     </Router>
// ), document.getElementById('app'))

import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
// import routes and pass them into <Router/>
import routes from './modules/routes'

render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('app')
)
