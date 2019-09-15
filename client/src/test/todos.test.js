import React from 'react';
import Todos from '../components/todos';
import Enzyme,{shallow} from "enzyme"; 
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});

let wrapper;
let todos;
beforeEach(() => {
    todos=[{
        task:"hii",
        status:"active"
    }] 
   wrapper = shallow(<Todos tasks={todos}/>);
});
describe("testing the todos component", ()=> {
    test("testing whether it is rendering or not",()=>{
        expect(wrapper.exists()).toBe(true);
    })
    test("testing whether ul class is there or not",()=>{
        expect(wrapper.find('.list-group')).toBeDefined();
    })
    test("testing whether ul class is there or not",()=>{
        expect(wrapper.find('Todo')).toHaveLength(todos.length)
    })
})