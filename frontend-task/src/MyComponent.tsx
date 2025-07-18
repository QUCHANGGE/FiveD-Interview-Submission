import React, { useState, useEffect } from 'react';

interface MyComponentProps {
  initialCount: number;
}

const MyComponent: React.FC<MyComponentProps> = ({ initialCount }) => {
  // 状态管理
  const [count, setCount] = useState(initialCount);
  const [loaded, setLoaded] = useState(false);
  
  // 生命周期实现
  useEffect(() => {
    console.log("组件已挂载");
    setLoaded(true);
    
    return () => {
      console.log("组件即将卸载");
    };
  }, []);
  
  useEffect(() => {
    console.log(`计数更新为: ${count}`);
  }, [count]);
  
  // 增加计数
  const increment = () => setCount(count + 1);
  
  // 重置计数
  const reset = () => setCount(initialCount);
  
  return (
    <div className="component-container">
      <h3>React 类组件转函数组件</h3>
      {loaded && <p className="status">状态: 已加载</p>}
      <div className="counter">
        <span>当前计数: {count}</span>
        <div className="buttons">
          <button onClick={increment}>增加</button>
          <button onClick={reset}>重置</button>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
