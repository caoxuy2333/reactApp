import * as React from 'react';
import { useReducer, useCallback, useContext, useRef, useEffect } from "react";
import Form, { Field, useForm } from '../antd-form/form/index';
import fly from 'flyio'

interface user {
  username: string;
  password: string;
}



const CacheContext = React.createContext({});


export const CREATE = 'CREATE';        // 创建
export const CREATED = 'CREATED';      // 创建成功
export const ACTIVE = 'ACTIVE';        // 激活
export const DESTROY = 'DESTROY';      // 销毁


// function KeepAliveProvider(props) {
//   let [cacheStates, setCacheStates] = React.useState({});
//   const mount = useCallback(
//     ({ cacheId, element }) => {
//       // 挂载元素方法，提供子组件调用挂载元素
//       if (cacheStates[cacheId]) {
//         let cacheState = cacheStates[cacheId];
//         if (cacheState.status === DESTROY) {
//           let doms = cacheState.doms;
//           doms.forEach((dom) => dom.parentNode.removeChild(dom));
//           dispatch({ type: cacheTypes.CREATE, payload: { cacheId, element } }); // 创建缓存
//         }
//       } else {
//         dispatch({ type: cacheTypes.CREATE, payload: { cacheId, element } }); // 创建缓存
//       }
//     },
//     [cacheStates]
//   );
//   // let handleScroll = useCallback(
//   //   // 缓存滚动条
//   //   (cacheId, { target }) => {
//   //     if (cacheStates[cacheId]) {
//   //       let scrolls = cacheStates[cacheId].scrolls;
//   //       scrolls[target] = target.scrollTop;
//   //     }
//   //   },
//   //   [cacheStates]
//   // );
//   return (
//     <CacheContext.Provider
//       value={{ mount, cacheStates }}
//     >
//       {props.children}
//       {/* cacheStates维护所有缓存信息， dispatch派发修改缓存状态*/}
//       {Object.values(cacheStates)
//         .filter((cacheState) => cacheState.status !== cacheTypes.DESTROY)
//         .map(({ cacheId, element }) => (
//           <div
//             id={`cache_${cacheId}`}
//             key={cacheId}
//             // 原生div中声明ref，当div渲染到页面，会执行ref中的回调函数，这里在id为cache_${cacheId}的div渲染完成后，会继续渲染子元素
//             ref={(dom) => {
//               let cacheState = cacheStates[cacheId];
//               if (
//                 dom &&
//                 (!cacheState.doms || cacheState.status === cacheTypes.DESTROY)
//               ) {
//                 let doms = Array.from(dom.childNodes);
//                 dispatch({
//                   type: cacheTypes.CREATED,
//                   payload: { cacheId, doms },
//                 });
//               }
//             }}
//           >
//             {element}
//           </div>
//         ))}
//     </CacheContext.Provider>
//   );
// }
const useCacheContext = () => {
  const context = React.useContext(CacheContext);
  if (!context) {
    throw new Error("useCacheContext必须在Provider中使用");
  }
  return context;
};
// export { KeepAliveProvider, useCacheContext };



// function withKeepAlive(OldComponent: any, { cacheId = window.location.pathname, scroll = false }) {
//   return function (props: any) {
//     const { mount, cacheStates } = useContext(CacheContext);
//     const ref = useRef(null);
//     useEffect(() => {
//       let cacheState = cacheStates[cacheId];
//       if (
//         cacheState &&
//         cacheState.doms &&
//         cacheState.status !== cacheTypes.DESTROY
//       ) {
//         // 如果真实dom已经存在，且状态不是DESTROY，则用当前的真实dom
//         let doms = cacheState.doms;
//         doms.forEach((dom) => ref.current.appendChild(dom));
//         if (scroll) {
//           // 如果scroll = true, 则将缓存中的scrollTop拿出来赋值给当前dom
//           doms.forEach((dom) => {
//             if (cacheState.scrolls[dom])
//               dom.scrollTop = cacheState.scrolls[dom];
//           });
//         }
//       } else {
//         // 如果还没产生真实dom，派发生成
//         mount({
//           cacheId,
//           element: <OldComponent {...props} dispatch={dispatch} />,
//         });
//       }
//     }, [cacheStates, , mount, props]);
//     return <div id={`keepalive_${cacheId}`} ref={ref} />;
//   };
// }




















const ViewA = function () {
  console.log('页面1')
  const [v, setV] = React.useState(`1`)
  const change = function (val: any) {
    setV(val.target.value)
  }
  return <input type="text" value={v} onChange={change} />
}
const ViewB = function () {
  console.log('页面2')
  return <input type="text" />
}

let s: any = {
  '1': <ViewA />,
  '2': <ViewB />
}
const Index: React.FC = function (): JSX.Element {
  const [form] = useForm();
  const [show, setShow] = React.useState(`1`)
  const onSubmit = async function (values: user) {
    console.log(values)

    const res = await fly.get('a/login');
    console.log('res', res)
    if (res.code === '0') window.sessionStorage.setItem('token', res.data.token)
    else window.sessionStorage.removeItem('token')
  }
  return (
    <div>
      <button onClick={() => { setShow(`2`) }}>切换界面2</button>
      <button onClick={() => { setShow('1') }}>切换界面1</button>
      {s[show]}
      <Form
        form={form}
        onFinish={onSubmit}
      >
        <Field name='username'>
          <input type="text" />
        </Field>

        <Field name='password'>
          <input type="password" />
        </Field>
        <button type="submit">
          Submit
        </button>
      </Form>
    </div>
  )
}

export default Index;