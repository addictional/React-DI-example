/* eslint-disable max-len */
import 'reflect-metadata';
import {Container} from 'inversify';
import CounterService from 'services/CounterService';
import {ICounter} from 'services/ICounter';


const GlobalDependency = new Container();


GlobalDependency.bind<ICounter>('CounterService').to(CounterService).inSingletonScope();

export default GlobalDependency;
