import 'style.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'inversify-react';
import Container from 'Ioc';
import Counter from 'components/Counter';


ReactDOM.render(
    <Provider container={Container}>
      <Counter/>
    </Provider>
    ,
    document.getElementById('root'),
);
