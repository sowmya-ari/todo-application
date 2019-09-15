import React from 'react';
import Todo from '../components/todo';
import Enzyme,{shallow} from "enzyme"; 
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});
let wrapper;
let todo;
beforeEach(() => {
    todo=[{
        task:"hii",
        status:"active"
    }] 
   wrapper = shallow(<Todo key={0} task={todo}/>);
});
describe("testing the todos component", ()=> {
    test("testing whether component is rendering or not",()=>{
        expect(wrapper.exists()).toBe(true);
    })
    test("testing whether list-group-item class is there or not",()=>{
        expect(wrapper.find('.list-group-item')).toBeDefined();
    })
    test('should render one <li>', () => {
        expect(wrapper.find('li')).toHaveLength(1);
    });
    test('should render 1 <input>', () => {
        expect(wrapper.find('input')).toHaveLength(2);
    });
    test('should render 1 <label>', () => {
        expect(wrapper.find('label')).toHaveLength(1);
    });
    test("should render 1 <button>", () => {
        expect(wrapper.find('button')).toHaveLength(1);
    });
})
