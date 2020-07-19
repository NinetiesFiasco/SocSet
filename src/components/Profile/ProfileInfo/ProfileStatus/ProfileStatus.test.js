import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatusHooks from './ProfileStatus';

describe("ProfileStatus component", () => {
  test("status from props should be in the state", ()=>{
    const component = create(<ProfileStatusHooks status={"status"}/>);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("status");
  });
  test("span exists", ()=>{
    const component = create(<ProfileStatusHooks status={"status"}/>);
    const root = component.root;
    let span = root.findByType("span");
    expect(span).not.toBeNull();
  });
  test("input not exists", ()=>{
    const component = create(<ProfileStatusHooks status={"status"}/>);
    const root = component.root;
    expect(()=>{
      root.findByType("input");
    }).toThrow();
  });
  test("span exists", ()=>{
    const component = create(<ProfileStatusHooks status={"status"}/>);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("status");
  });
  test("input should be displayed in edit mode insted of span", ()=>{
    const component = create(<ProfileStatusHooks status={"status"}/>);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick();
    let input = root.findByType("input");    
    expect(input.props.value).toBe("status");
  });
  test("callback should be called", () => {
    const mockCallBack = jest.fn();
    const component = create(<ProfileStatusHooks status={"status"} updateStatus={mockCallBack}/>);
    const instance = component.getInstance();
    //const instance = component.root;
    instance.deactivateEditMode();
    expect(mockCallBack.mock.calls.length).toBe(1);
  });
});