import { useEffect, useRef, useState } from 'react';

const R = (min: number, max: number) => +(Math.random() * (max - min) + min).toFixed(1);
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

function drawSparkline(canvas: HTMLCanvasElement, data: number[], color: string) {
  const dpr = window.devicePixelRatio || 1;
  const w = canvas.offsetWidth, h = canvas.offsetHeight;
  if (!w || !h) return;
  canvas.width = w * dpr; canvas.height = h * dpr;
  const ctx = canvas.getContext('2d')!;
  ctx.scale(dpr, dpr);
  const min = Math.min(...data), range = Math.max(...data) - min || 1;
  const step = w / (data.length - 1);
  ctx.clearRect(0, 0, w, h);
  const grad = ctx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, color + '55'); grad.addColorStop(1, color + '00');
  ctx.beginPath();
  data.forEach((v, i) => { const x = i * step, y = h - ((v - min) / range) * (h - 4) - 2; i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); });
  ctx.lineTo((data.length - 1) * step, h); ctx.lineTo(0, h); ctx.closePath();
  ctx.fillStyle = grad; ctx.fill();
  ctx.beginPath();
  data.forEach((v, i) => { const x = i * step, y = h - ((v - min) / range) * (h - 4) - 2; i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); });
  ctx.strokeStyle = color; ctx.lineWidth = 1.5; ctx.stroke();
}

function drawTS(canvas: HTMLCanvasElement, flowData: number[], pressData: number[]) {
  const dpr = window.devicePixelRatio || 1;
  const w = canvas.offsetWidth, h = canvas.offsetHeight;
  if (!w || !h) return;
  canvas.width = w * dpr; canvas.height = h * dpr;
  const ctx = canvas.getContext('2d')!;
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, w, h);
  const pad = { t: 14, r: 8, b: 18, l: 28 };
  const cw = w - pad.l - pad.r, ch = h - pad.t - pad.b;
  ctx.strokeStyle = '#2c3038'; ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) { const y = pad.t + (ch / 4) * i; ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(pad.l + cw, y); ctx.stroke(); }
  ctx.fillStyle = '#6e7077'; ctx.font = '9px system-ui'; ctx.textAlign = 'center';
  ['-6h', '-4h', '-2h', 'now'].forEach((l, i) => ctx.fillText(l, pad.l + (cw / 3) * i, h - 4));
  const drawLine = (data: number[], color: string, minV: number, maxV: number) => {
    const range = maxV - minV, step = cw / (data.length - 1);
    ctx.beginPath();
    data.forEach((v, i) => { const x = pad.l + i * step, y = pad.t + ch - ((v - minV) / range) * ch; i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); });
    ctx.strokeStyle = color; ctx.lineWidth = 1.5; ctx.stroke();
  };
  drawLine(flowData, '#73bf69', 80, 160);
  drawLine(pressData, '#5794f2', 3, 9);
  ctx.font = '9px system-ui'; ctx.textAlign = 'left';
  ctx.fillStyle = '#73bf69'; ctx.fillRect(pad.l, 4, 8, 5); ctx.fillStyle = '#c7c7c7'; ctx.fillText('Flow', pad.l + 11, 10);
  ctx.fillStyle = '#5794f2'; ctx.fillRect(pad.l + 48, 4, 8, 5); ctx.fillStyle = '#c7c7c7'; ctx.fillText('Pressure', pad.l + 59, 10);
}

const DEVICES = ['PLC-A01', 'PLC-B02', 'PLC-C03', 'PLC-D04', 'PLC-E05', 'PLC-F06'];
const DEVICE_STATUS = [true, true, true, false, true, false];

export default function GrafanaDemoPanel() {
  const flowRef  = useRef<HTMLCanvasElement>(null);
  const pressRef = useRef<HTMLCanvasElement>(null);
  const tempRef  = useRef<HTMLCanvasElement>(null);
  const tsRef    = useRef<HTMLCanvasElement>(null);

  const flowH   = useRef(Array.from({ length: 40 }, () => R(100, 140)));
  const pressH  = useRef(Array.from({ length: 40 }, () => R(5, 7)));
  const tempH   = useRef(Array.from({ length: 40 }, () => R(68, 82)));
  const tsFlow  = useRef(Array.from({ length: 40 }, () => R(100, 140)));
  const tsPress = useRef(Array.from({ length: 40 }, () => R(5, 7)));
  const gauge   = useRef(R(72, 92));

  const [flow,  setFlow]  = useState('—');
  const [press, setPress] = useState('—');
  const [temp,  setTemp]  = useState('—');
  const [gVal,  setGVal]  = useState(0);
  const [rows,  setRows]  = useState<{ id: string; on: boolean; flow: string }[]>([]);

  useEffect(() => {
    const tick = () => {
      const nf = clamp(flowH.current[flowH.current.length - 1]   + R(-4, 4),    80, 160);
      const np = clamp(pressH.current[pressH.current.length - 1] + R(-.3, .3),   3,   9);
      const nt = clamp(tempH.current[tempH.current.length - 1]   + R(-1, 1),    60,  95);
      flowH.current  = [...flowH.current.slice(1),  nf];
      pressH.current = [...pressH.current.slice(1), np];
      tempH.current  = [...tempH.current.slice(1),  nt];
      tsFlow.current = [...tsFlow.current.slice(1), nf];
      tsPress.current = [...tsPress.current.slice(1), np];
      gauge.current  = clamp(gauge.current + R(-1, 1), 60, 98);
      setFlow(nf.toFixed(1)); setPress(np.toFixed(2)); setTemp(nt.toFixed(1));
      setGVal(Math.round(gauge.current));
      setRows(DEVICES.map((id, i) => ({ id, on: DEVICE_STATUS[i], flow: DEVICE_STATUS[i] ? R(80, 150) + '' : '—' })));
      if (flowRef.current)  drawSparkline(flowRef.current,  flowH.current,  '#73bf69');
      if (pressRef.current) drawSparkline(pressRef.current, pressH.current, '#5794f2');
      if (tempRef.current)  drawSparkline(tempRef.current,  tempH.current,  '#ff9830');
      if (tsRef.current)    drawTS(tsRef.current, tsFlow.current, tsPress.current);
    };
    tick();
    const t1 = setInterval(tick, 2000);
    const onResize = () => tick();
    window.addEventListener('resize', onResize);
    return () => { clearInterval(t1); window.removeEventListener('resize', onResize); };
  }, []);

  const gAngle = -90 + (gVal / 100) * 180;
  const gArc   = (gVal / 100) * 173;
  const gColor = gVal > 80 ? '#73bf69' : gVal > 60 ? '#fade2a' : '#f2495c';

  return (
    <div className="rounded-lg overflow-hidden border border-taupe-200" style={{ background: '#111217', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ background: '#161719', borderBottom: '1px solid #2c3038', padding: '6px 10px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 10, color: '#ff7f00', fontWeight: 700 }}>◉ Grafana</span>
        <span style={{ fontSize: 10, color: '#6e7077' }}>Industrial OilFlow Monitor</span>
        <span style={{ marginLeft: 'auto', fontSize: 10, color: '#73bf69', background: '#1a2a1a', border: '1px solid #2c3038', borderRadius: 3, padding: '2px 6px' }}>● Live</span>
      </div>

      <div style={{ padding: '5px 7px', display: 'flex', flexDirection: 'column', gap: 5 }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 5 }}>
          {[{ label: 'Flow Rate', val: flow,  unit: 'L/min', color: '#73bf69', ref: flowRef  },
            { label: 'Pressure',  val: press, unit: 'bar',   color: '#5794f2', ref: pressRef },
            { label: 'Temp',      val: temp,  unit: '°C',    color: '#ff9830', ref: tempRef  },
          ].map(s => (
            <div key={s.label} style={{ background: '#181b1f', border: '1px solid #2c3038', borderRadius: 4, padding: '5px 7px' }}>
              <div style={{ fontSize: 9, color: '#6e7077', marginBottom: 1 }}>{s.label}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: s.color, lineHeight: 1 }}>{s.val}<span style={{ fontSize: 9, color: '#6e7077', marginLeft: 2 }}>{s.unit}</span></div>
              <canvas ref={s.ref} style={{ width: '100%', height: 16, marginTop: 3 }} />
            </div>
          ))}
        </div>

        <div style={{ background: '#181b1f', border: '1px solid #2c3038', borderRadius: 4, padding: '5px 8px' }}>
          <div style={{ fontSize: 9, color: '#6e7077', marginBottom: 3 }}>Flow &amp; Pressure — trend</div>
          <canvas ref={tsRef} style={{ width: '100%', height: 50 }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 5 }}>
          <div style={{ background: '#181b1f', border: '1px solid #2c3038', borderRadius: 4, padding: '5px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minWidth: 76 }}>
            <div style={{ fontSize: 9, color: '#6e7077', marginBottom: 2 }}>Pump Eff.</div>
            <svg viewBox="0 0 100 65" style={{ width: 60 }}>
              <path d="M10 58 A40 40 0 0 1 90 58" fill="none" stroke="#2c3038" strokeWidth="8" strokeLinecap="round"/>
              <path d="M10 58 A40 40 0 0 1 90 58" fill="none" stroke={gColor} strokeWidth="8" strokeLinecap="round"
                strokeDasharray={`${gArc * 125 / 173} 125`} />
              <line x1="50" y1="58" x2="50" y2="24" stroke="#e0e0e0" strokeWidth="1.5" strokeLinecap="round"
                transform={`rotate(${gAngle},50,58)`}/>
              <circle cx="50" cy="58" r="3" fill="#e0e0e0"/>
            </svg>
            <div style={{ fontSize: 13, fontWeight: 700, color: gColor, lineHeight: 1 }}>{gVal}%</div>
          </div>
          <div style={{ background: '#181b1f', border: '1px solid #2c3038', borderRadius: 4, padding: '5px 8px', overflowX: 'auto' }}>
            <div style={{ fontSize: 9, color: '#6e7077', marginBottom: 3 }}>Device Status</div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 9 }}>
              <thead><tr>{['Device', 'St', 'Flow'].map(h => <th key={h} style={{ color: '#6e7077', textAlign: 'left', padding: '2px 4px', borderBottom: '1px solid #2c3038' }}>{h}</th>)}</tr></thead>
              <tbody>{rows.map(r => (
                <tr key={r.id}>
                  <td style={{ padding: '2px 4px', color: '#d8d9da' }}>{r.id}</td>
                  <td style={{ padding: '2px 4px' }}><span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: r.on ? '#73bf69' : '#f2495c', marginRight: 3 }}/></td>
                  <td style={{ padding: '2px 4px', color: r.on ? '#73bf69' : '#6e7077' }}>{r.flow}</td>
                </tr>
              ))}</tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
