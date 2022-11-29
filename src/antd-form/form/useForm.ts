import { useRef } from "react";
import Form from "./index";
import { Store, FormInstance, Callbacks } from "./interface";

class FormStore {
    private store: Store = {};
    private callbacks: Callbacks = {};
    // private fieldEntities: FieldEntity[] = [];

    getFieldsValue = () => {
        return this.store;
     };
    setFieldsValue = (newStore: Store) => { 
        this.store = {
            ...this.store,
            ...newStore
        }
    };
    setCallbacks = (callback: Callbacks) => {
        this.callbacks = {
            onFinish: callback.onFinish
        }
    };
    getFieldValue = () => {

    }
    submit = () => {
        const { onFinish } = this.callbacks;
        onFinish(this.getFieldsValue())
    }

    getForm = () => {
        return {
            submit: this.submit,
            getFieldsValue: this.getFieldsValue,
            setFieldsValue: this.setFieldsValue,
            setCallbacks: this.setCallbacks,
            getFieldValue: this.getFieldValue
        }
    }
}

export default function useForm<Values = any>(form?: FormInstance<Values>): [FormInstance<Values>] {
    const formRef = useRef<FormInstance>();
    if (!formRef.current) {
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
