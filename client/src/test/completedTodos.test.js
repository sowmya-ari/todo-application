import React from 'react';
import CompletedTodos from '../components/completedTodos';
import Enzyme,{shallow} from "enzyme"; 
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});
let wrapper;
beforeEach(() => {
   wrapper = shallow(<CompletedTodos/>);
});
describe("testing the completedtodos component", ()=> {
    test("testing whether it is rendering or not",()=>{
        expect(wrapper.exists()).toBe(true);
    })
    test("testing whether a particular component is present or not ", ()=>{
        expect(wrapper.find('Todos').exists()).toBeTruthy()
    })
    test("testing number of components rendering in Todos component", ()=>{
        expect(wrapper.find('Todos')).toHaveLength(1)
    })
    test("test whether the component state is changing when we use setstate",()=>{
        wrapper.setState({todos:[{
            task:"hii",
            status:"active"
        }]})
        expect(wrapper.state('todos')).toEqual([{
            task:"hii",
            status:"active"
        }]);
    })
    test("it should render one div",()=>{
        expect(wrapper.find('.completedTodos')).toHaveLength(1);
    })
    test("should calls componentDidMount", () => {
        jest.spyOn(CompletedTodos.prototype, 'componentDidMount')
        wrapper = shallow(<CompletedTodos/>);
        expect(CompletedTodos.prototype.componentDidMount.mock.calls.length).toBe(1)
    })
})