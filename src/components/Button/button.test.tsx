import React from 'react';
import { render } from '@testing-library/react';
import Button from './button';

test('按钮测试', () => {
  const wrapper = render(<Button>Nice</Button>)
  const element = wrapper.queryByText('Nice')
  expect(element).toBeTruthy()
  expect(element).toBeInTheDocument()
})

describe('Button componment', () => {
  test('should render the correct default button', () => {
    const wrapper = render(<Button>Nice</Button>)
    const element = wrapper.queryByText('Nice')!
    expect(element).toBeInTheDocument()
    expect(element?.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
  })

  test('should render correct component based on different props', () => {

  })

  test('a link', () => {

  })

  test('disbaled is ok?', () => {

  })
})