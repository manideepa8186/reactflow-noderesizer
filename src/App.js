import ReactFlow, { MiniMap, Background, BackgroundVariant, Controls } from 'reactflow';

import 'reactflow/dist/style.css';

import ResizeableNode
 from './ResizeableNode';
const nodeTypes = {
  ResizeableNode
};

const initialNodes = { '1':{
                              id: '1',
                              type: 'ResizeableNode',
                              data: { label: 'NodeResizer' },
                              position: { x: 0, y: 50 },
                              style: { background: '#fff', border: '1px solid black', borderRadius: 15, fontSize: 12 },
                            },
                        '2':{
                          id: '2',
                          type: 'ResizeableNode',
                          data: { label: 'NodeResizer' },
                          position: { x: 0, y: 50 },
                          style: { background: '#fff', border: '1px solid black', borderRadius: 15, fontSize: 12 },
                        }
                      };


export default function App() {
  return (
    <div
    className="reactflow-wrapper"
    style={{ width: "100%", height: "90vh" }}
  >
    <ReactFlow
      nodes={Object.values(initialNodes)}
      className="react-flow-node-resizer-example"
      style={{ width: "100%", height: "90vh" }}
      fitView
      nodeTypes={nodeTypes}
    >
      <Background variant={BackgroundVariant.Dots} />
      {/* <MiniMap /> */}
      {/* <Controls /> */}
    </ReactFlow>
    </div>
  );
}
