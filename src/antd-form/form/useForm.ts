import { useRef } from "react";
import Form from "./index";
import { Store, FormInstance, Callbacks, FieldEntity, NamePath } from "./interface";

class FormStore {
  private store: Store = {};
  private callbacks: Callbacks = {};
  private fieldEntities: FieldEntity[] = [];

  getFieldsValue = () => {
    return this.store;
  };
  setFieldsValue = (newStore: Store) => {
    this.store = {
      ...this.store,
      ...newStore
    }
    this.fieldEntities.forEach((entity) => {
      Object.keys(newStore).forEach((k) => {
        if (k === entity.props.name) {
          console.log('form')
          const { name, rules } = entity.props;
          const value: NamePath = name && this.getFieldValue(name);
          let rule = rules?.length && rules[0];
          let message: string = '';
          if (rule && rule.required && (value === undefined || value === "")) {
            message = rule?.message
          }
          entity.onStoreChange({
            type: 'message',
            value: message
          });
        }
      })
    })
  };
  setCallbacks = (callback: Callbacks) => {
    this.callbacks = {
      onFinish: callback.onFinish,
      onFinishFailed: callback.onFinishFailed
    }
  };
  getFieldValue = (name: NamePath): NamePath => {
    return this.store[name];
  }
  validateField = () => {
    const err: any[] = [];
    this.fieldEntities.forEach((entity) => {
      const { name, rules } = entity.props;
      const value: NamePath = name && this.getFieldValue(name);
      let rule = rules?.length && rules[0];
      if (rule && rule.required && (value === undefined || value === "")) {
        name && err.push({ message: rule?.message, value });
      }
    });

    return err;
  };

  registerFieldEntities = (entity: FieldEntity) => {
    this.fieldEntities.push(entity);
    return () => {
      this.fieldEntities = this.fieldEntities.filter((item) => item !== entity)
    }
  }
  submit = () => {
    const { onFinish, onFinishFailed } = this.callbacks;
    // 提交校验数据
    console.log(this.fieldEntities)
    const err = this.validateField();
    if (err.length === 0) {
      onFinish && onFinish(this.getFieldsValue());
    } else {
      console.log('提示错误', err)
      onFinishFailed && onFinishFailed(err);
      this.fieldEntities.forEach((entity) => {
        console.log('form')
        const { name, rules } = entity.props;
        const value: NamePath = name && this.getFieldValue(name);
        let rule = rules?.length && rules[0];
        let message: string = '';
        if (rule && rule.required && (value === undefined || value === "")) {
          message = rule?.message
        }
        entity.onStoreChange({
          type: 'message',
          value: message
        });
      })
    }
  }

  getForm = () => {
    return {
      submit: this.submit,
      getFieldsValue: this.getFieldsValue,
      setFieldsValue: this.setFieldsValue,
      setCallbacks: this.setCallbacks,
      getFieldValue: this.getFieldValue,
      registerFieldEntities: this.registerFieldEntities,
    }
  }
}

export default function useForm<Values = any>(form?: FormInstance<Values>): [FormInstance<Values>] {
  const formRef = useRef<FormInstance>();
  if (!formRef.current) {
    console.log('form', form)
    if (form) {
      formRef.current = form;
    }
    else {
      const formStore = new FormStore();
      formRef!.current = formStore.getForm();
    }
  }
  return [formRef.current];
}
