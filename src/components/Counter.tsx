/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from 'react';
import {resolve} from 'inversify-react';
import {ICounter} from 'services/ICounter';
import './style.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {

}

interface State {
    count : number;
}
/** */
export default class Counter extends React.Component<Props, State> {
    @resolve('CounterService') private readonly _Counter! : ICounter;

    /** @override */
    constructor(props : Props ) {
      super(props);
      this.state = {
        count: 0,
      };
    }
    /** @override */
    render() {
      return (<div className="counter">
        <span className="counter__text">{this.state.count}</span>
        <button className="button counter__button" onClick={()=>{
          this._Counter.count();
          this.setState({count: this._Counter.counter});
        }}>Click me</button>
      </div>);
    }
    /** @override */
    componentDidMount() {
      this.setState({count: this._Counter.counter});
    }
}
