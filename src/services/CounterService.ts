/* eslint-disable valid-jsdoc */
import 'reflect-metadata';
import {injectable} from 'inversify';
import {ICounter} from './ICounter';
/**
 * Class documentation
 */
@injectable()
export default class CounterService implements ICounter {
    private _counter = 0;
    /**
     * Increase counter by 1.
     */
    public count() : void {
      this._counter++;
    }
    /**
     * @returns Current number of counter
     */
    get counter() : number {
      return this._counter;
    }
}
