const ZONES = [
  { top:  8,  left:  5,  w: 340, h: 280, delay: 0,    dur: 22, seed: 1,  freq: '0.008 0.006' },
  { top: 15,  left: 68,  w: 300, h: 320, delay: 6,    dur: 28, seed: 7,  freq: '0.010 0.007' },
  { top: 35,  left: 25,  w: 360, h: 260, delay: 3,    dur: 18, seed: 3,  freq: '0.007 0.009' },
  { top: 50,  left: 80,  w: 280, h: 340, delay: 10,   dur: 24, seed: 11, freq: '0.009 0.006' },
  { top: 65,  left: 42,  w: 380, h: 260, delay: 2,    dur: 30, seed: 5,  freq: '0.006 0.008' },
  { top: 78,  left:  8,  w: 300, h: 300, delay: 14,   dur: 20, seed: 9,  freq: '0.011 0.007' },
  { top: 25,  left: 90,  w: 260, h: 280, delay: 7,    dur: 26, seed: 2,  freq: '0.008 0.010' },
  { top: 72,  left: 58,  w: 320, h: 240, delay: 4,    dur: 16, seed: 6,  freq: '0.007 0.006' },
]

export default function GridFX() {
  return (
    <>
      <svg
        aria-hidden="true"
        style={{ position: 'fixed', width: 0, height: 0, overflow: 'hidden', pointerEvents: 'none' }}
      >
        <defs>
          {ZONES.map((z, i) => (
            <filter
              key={i}
              id={`gd-${i}`}
              x="-40%" y="-40%"
              width="180%" height="180%"
              colorInterpolationFilters="sRGB"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency={z.freq}
                numOctaves="2"
                seed={z.seed}
                result="noise"
              >
                {/* slowly morph wave shape */}
                <animate
                  attributeName="baseFrequency"
                  values={`${z.freq};${z.freq.split(' ').map(v => (parseFloat(v)*1.4).toFixed(4)).join(' ')};${z.freq.split(' ').map(v => (parseFloat(v)*0.7).toFixed(4)).join(' ')};${z.freq}`}
                  dur={`${z.dur}s`}
                  calcMode="spline"
                  keySplines="0.45 0 0.55 1; 0.45 0 0.55 1; 0.45 0 0.55 1"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="seed"
                  values={`${z.seed};${z.seed + 4};${z.seed + 8};${z.seed}`}
                  dur={`${z.dur * 1.5}s`}
                  calcMode="discrete"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                xChannelSelector="R"
                yChannelSelector="G"
              >
                {/* displacement scale breathes */}
                <animate
                  attributeName="scale"
                  values={`14;42;20;36;14`}
                  dur={`${z.dur * 0.8}s`}
                  calcMode="spline"
                  keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1"
                  repeatCount="indefinite"
                />
              </feDisplacementMap>
            </filter>
          ))}
        </defs>
      </svg>

      {ZONES.map((z, i) => (
        <div
          key={i}
          aria-hidden="true"
          style={{
            position:   'fixed',
            top:        `${z.top}%`,
            left:       `${z.left}%`,
            width:      z.w,
            height:     z.h,
            transform:  'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex:     0,
            backgroundImage: `
              linear-gradient(rgba(29,29,31,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(29,29,31,0.12) 1px, transparent 1px)
            `,
            backgroundSize:       '28px 28px',
            backgroundAttachment: 'fixed',
            filter: `url(#gd-${i})`,
            animation: `gfx-zone ${z.dur}s ${z.delay}s ease-in-out infinite`,
          }}
        />
      ))}
    </>
  )
}
