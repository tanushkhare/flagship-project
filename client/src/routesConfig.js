// src/routesConfig.js
import ATS_P1 from './pages/ATS/ATS_P1';
import ATS_P2 from './pages/ATS/ATS_P2';
import ATS_P3 from './pages/ATS/ATS_P3';
import ATS_P4 from './pages/ATS/ATS_P4';

import Ins_P1 from './pages/Insurance/Ins_P1';
import Ins_P2 from './pages/Insurance/Ins_P2';
import Ins_P3 from './pages/Insurance/Ins_P3';
import Ins_P4 from './pages/Insurance/Ins_P4';

import Work_P1 from './pages/Workspace/Work_P1';
import Work_P2 from './pages/Workspace/Work_P2';
import Work_P3 from './pages/Workspace/Work_P3';
import Work_P4 from './pages/Workspace/Work_P4';

import Sec_P1 from './pages/Security/Sec_P1';
import Sec_P2 from './pages/Security/Sec_P2';
import Sec_P3 from './pages/Security/Sec_P3';
import Sec_P4 from './pages/Security/Sec_P4';

import Cloud_P1 from './pages/CloudInfra/Cloud_P1';
import Cloud_P2 from './pages/CloudInfra/Cloud_P2';
import Cloud_P3 from './pages/CloudInfra/Cloud_P3';
import Cloud_P4 from './pages/CloudInfra/Cloud_P4';

export const routeConfig = [
  { path: '/p1', component: ATS_P1 },
  { path: '/p2', component: ATS_P2 },
  { path: '/p3', component: ATS_P3 },
  { path: '/p4', component: ATS_P4 },
  { path: 'ins/p1', component: Ins_P1 },
  { path: 'ins/p2', component: Ins_P2 },
  { path: 'ins/p3', component: Ins_P3 },
  { path: 'ins/p4', component: Ins_P4 },
  { path: 'work/p1', component: Work_P1 },
  { path: 'work/p2', component: Work_P2 },
  { path: 'work/p3', component: Work_P3 },
  { path: 'work/p4', component: Work_P4 },
  { path: 'sec/p1', component: Sec_P1 },
  { path: 'sec/p2', component: Sec_P2 },
  { path: 'sec/p3', component: Sec_P3 },
  { path: 'sec/p4', component: Sec_P4 },
  { path: 'cloud/p1', component: Cloud_P1 },
  { path: 'cloud/p2', component: Cloud_P2 },
  { path: 'cloud/p3', component: Cloud_P3 },
  { path: 'cloud/p4', component: Cloud_P4 },
];