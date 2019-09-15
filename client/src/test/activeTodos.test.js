import React from 'react';
import ActiveTodos from '../components/activeTodos';
import Enzyme,{shallow} from "enzyme"; 
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});
let wrapper;
beforeEach(() => {
   wrapper = shallow(<ActiveTodos/>);
});
describe("testing the activetodos component", ()=> {
    test("testing whether activetodos is rendering or not",()=>{
        expect(wrapper.exists()).toBe(true);
    })
    test("testing whether a Todos children component is present or not ", ()=>{
        expect(wrapper.find('Todos').exists()).toBeTruthy()
    })
    test("testing number of components rendering in ActiveTodos component", ()=>{
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
        expect(wrapper.find('.allTodos')).toHaveLength(1);
    })
    test("testing whether it calls componentDidMount", () => {
        jest.spyOn(ActiveTodos.prototype, 'componentDidMount')
        wrapper = shallow(<ActiveTodos/>);
        expect(ActiveTodos.prototype.componentDidMount.mock.calls.length).toBe(1)
    })
})