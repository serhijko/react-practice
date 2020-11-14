import React from 'react';
import { createDevTools } from 'redux-devtools';
import DockMonitor from 'redux-devtools-dock-monitor/lib/DockMonitor';
import LogMonitor from 'redux-devtools-log-monitor/lib/LogMonitor';

const DevTools = createDevTools(
    <DockMonitor
        toggleVisibilityKey='ctrl-h'
        changePositionKey='ctrl-q'
        defaultIsVisible={ true }
    >
        <LogMonitor theme='tomorrow' />
    </DockMonitor>
);

export default DevTools;
