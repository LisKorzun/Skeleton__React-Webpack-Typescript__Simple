import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Hello} from './app/components/Hello';

declare let module: any;

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" packer="Webpack"/>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
