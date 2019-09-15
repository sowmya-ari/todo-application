import React from 'react';
import AllTodos from '../components/allTodos';
import Enzyme,{shallow} from "enzyme"; 
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});
let wrapper;
beforeEach(() => {
   wrapper = shallow(<AllTodos/>);
});
describe("testing the alltodos component", ()=> {
    test("testing whether it is rendering or not",()=>{
        expect(wrapper.exists()).toBe(true);
    })
    test("testing whether a todos children component is present or not ", ()=>{
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
        expect(wrapper.find('.activeTodos')).toHaveLength(1);
    })
    test("testing whether it calls componentDidMount", () => {
        jest.spyOn(AllTodos.prototype, 'componentDidMount')
        wrapper = shallow(<AllTodos/>);
        expect(AllTodos.prototype.componentDidMount.mock.calls.length).toBe(1)
    })
})