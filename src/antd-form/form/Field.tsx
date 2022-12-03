import * as React from 'react';
import { ChangeEvent } from 'react'
import { NamePath, Rule } from './interface';
import FieldContext from './FieldContest';

interface FieldRule {
  type: string;
  value: string;

}

interface fieldState {
  message: string;

}


type FieldProps = {
  name: NamePath;
  rules?: Rule[];
  children: JSX.Element;
  errorFunc?: Function
}

const initDatas = {
  message: '', // 提示信息
}

const Field: React.FC<FieldProps> = (props) => {
  const { getFieldValue, setFieldsValue, registerFieldEntities } = React.useContext(FieldContext);
  const { children, name } = props;
  const [viewData, forceUpdate] = React.useReducer((state: fieldState, action: FieldRule) => {
    if (action.type === 'message') {
      console.log({ ...state, message: action.value })
      return { ...state, message: action.value }
    }
    console.log(state)
    return state;
  }, initDatas);
  console.log(viewData)
  React.useLayoutEffect(() => {
    const unregister = registerFieldEntities && registerFieldEntities({
      props,
      onStoreChange: forceUpdate
    })
    return unregister;
  }, [])
  const getControlled = () => {
    return {
      value: getFieldValue && getFieldValue(name),
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e?.target?.value;
        setFieldsValue?.({ [name]: newValue })
      }
    }
  }
  const error = (
    <div>
      {viewData.message}
    </div>
  )
  const dom = (
    <div>
      {children}
      {error}
    </div>
  )
  return React.cloneElement(dom, getControlled());
}

export default Field;