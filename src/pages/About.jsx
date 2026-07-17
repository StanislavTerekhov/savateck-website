import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, BrainCircuit, Cpu, Infinity, Layers3, ShieldCheck, Sparkles } from 'lucide-react'
import LogoMark from '../components/LogoMark'
import Seo from '../components/Seo'

gsap.registerPlugin(ScrollTrigger)

const principles = [
  { icon: BrainCircuit, title: 'Intelligent Core', desc: 'Systems that surface signals, automate routine work, and help teams make confident decisions.' },
  { icon: Layers3, title: 'Composable Architecture', desc: 'Every tool is designed as a module: focused alone, stronger when connected to the ecosystem.' },
  { icon: ShieldCheck, title: 'Reliable by Design', desc: 'Operational software needs trust. We build around clarity, uptime, and careful execution.' },
  { icon: Infinity, title: 'Scale Without Friction', desc: 'The platform shape is built to grow from early workflows into business-critical infrastructure.' },
]

const stats = [
  ['2020', 'Started building the SAVATECK ecosystem'],
  ['03', 'Active tools across operations, CRM, and workflow'],
  ['24/7', 'Product thinking around always-on business systems'],
]

function AboutWebGL() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const gl = canvas?.getContext('webgl', { alpha: true, antialias: false, powerPreference: 'high-performance' })
    if (!gl) return undefined

    const vertex = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `

    const fragment = `
      precision highp float;

      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_time;

      float hash(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.52;
        mat2 m = mat2(0.82, -0.57, 0.57, 0.82);
        for (int i = 0; i < 5; i++) {
          v += a * noise(p);
          p = m * p * 2.08 + 13.7;
          a *= 0.52;
        }
        return v;
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        mat2 r = mat2(0.86, -0.5, 0.5, 0.86);
        for (int i = 0; i < 5; i++) {
          v += a * noise(p);
          p = r * p * 2.05 + 7.13;
          a *= 0.52;
        }
        return v;
      }

      float lineGrid(vec2 uv, float scale) {
        vec2 g = abs(fract(uv * scale - 0.5) - 0.5) / fwidth(uv * scale);
        float line = min(g.x, g.y);
        return 1.0 - min(line, 1.0);
      }

      float softBlob(vec2 p, vec2 center, vec2 stretch, float power) {
        vec2 d = (p - center) / stretch;
        return pow(max(1.0 - dot(d, d), 0.0), power);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
        vec2 mouse = (u_mouse * 2.0 - 1.0) * vec2(u_resolution.x / u_resolution.y, 1.0);

        float t = u_time * 0.16;
        float radial = length(p);
        float field = fbm(p * 1.35 + vec2(t, -t * 0.7));
        float warp = fbm(p * 2.55 + field * 1.4 + vec2(-t * 1.9, t));

        float core = smoothstep(1.18, 0.1, radial);
        float blobA = softBlob(p, vec2(-0.58 + sin(u_time * 0.18) * 0.16, -0.12), vec2(0.58, 0.22), 1.8);
        float blobB = softBlob(p, vec2(0.42 + cos(u_time * 0.16) * 0.14, 0.08), vec2(0.48, 0.30), 2.1);
        float blobC = softBlob(p, vec2(0.05, -0.52 + sin(u_time * 0.12) * 0.10), vec2(0.86, 0.28), 2.0);
        float cursor = 0.18 / (length(p - mouse * 0.55) + 0.09);

        float beam = smoothstep(0.085, 0.0, abs(p.y + sin(p.x * 2.2 + u_time * 0.18) * 0.18 + warp * 0.18));
        beam *= smoothstep(1.15, -0.25, abs(p.x));

        vec2 distorted = p;
        distorted.x += (warp - 0.5) * 0.095;
        distorted.y += (field - 0.5) * 0.075;
        float grid = lineGrid(distorted, 11.0) * 0.18;
        grid += lineGrid(distorted + vec2(field * 0.035, warp * 0.035), 25.0) * 0.055;
        grid *= smoothstep(1.3, 0.08, radial);

        vec3 black = vec3(0.0);
        vec3 cold = vec3(0.08, 0.18, 0.27);
        vec3 silver = vec3(0.86, 0.92, 1.0);
        vec3 electric = vec3(0.62, 0.82, 1.0);

        float plasma = blobA * 0.62 + blobB * 0.58 + blobC * 0.42 + beam * 0.34 + cursor * 0.08;
        float energy = plasma + field * 0.18 + grid;
        vec3 color = black;
        color += cold * (field * 0.32 + blobC * 0.32);
        color += silver * grid * 0.8;
        color += electric * beam * 0.22;
        color += silver * pow(max(energy, 0.0), 1.38) * core * 0.76;
        color += vec3(0.02, 0.025, 0.03) * (1.0 - radial);

        float vignette = smoothstep(1.35, 0.25, radial);
        float alpha = clamp((energy * 0.95 + grid * 0.62) * vignette, 0.0, 0.94);
        alpha *= smoothstep(1.45, 0.0, radial);

        gl_FragColor = vec4(color, alpha);
      }
    `

    const compile = (type, source) => {
      const shader = gl.createShader(type)
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader)
        return null
      }
      return shader
    }

    const vertexShader = compile(gl.VERTEX_SHADER, vertex)
    const fragmentShader = compile(gl.FRAGMENT_SHADER, fragment)
    if (!vertexShader || !fragmentShader) return undefined

    const program = gl.createProgram()
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return undefined

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW)

    const position = gl.getAttribLocation(program, 'a_position')
    const resolution = gl.getUniformLocation(program, 'u_resolution')
    const mouse = gl.getUniformLocation(program, 'u_mouse')
    const time = gl.getUniformLocation(program, 'u_time')
    const pointer = { x: 0.5, y: 0.5 }
    let frame = 0
    let start = performance.now()

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const width = Math.floor(canvas.clientWidth * dpr)
      const height = Math.floor(canvas.clientHeight * dpr)
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
        gl.viewport(0, 0, width, height)
      }
    }

    const onPointerMove = e => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = (e.clientX - rect.left) / rect.width
      pointer.y = 1 - (e.clientY - rect.top) / rect.height
    }

    const render = now => {
      resize()
      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.useProgram(program)
      gl.enableVertexAttribArray(position)
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)
      gl.uniform2f(resolution, canvas.width, canvas.height)
      gl.uniform2f(mouse, pointer.x, pointer.y)
      gl.uniform1f(time, (now - start) / 1000)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
      frame = requestAnimationFrame(render)
    }

    canvas.addEventListener('pointermove', onPointerMove)
    resize()
    frame = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(frame)
      canvas.removeEventListener('pointermove', onPointerMove)
      gl.deleteBuffer(buffer)
      gl.deleteProgram(program)
      gl.deleteShader(vertexShader)
      gl.deleteShader(fragmentShader)
    }
  }, [])

  return <canvas className="about-webgl" ref={canvasRef} aria-hidden="true" />
}

function AboutCrystalWebGL({ onReady }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const gl = canvas?.getContext('webgl', { alpha: true, antialias: false, powerPreference: 'high-performance' })
    if (!gl) return undefined

    const vertex = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `

    const fragment = `
      precision highp float;

      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_time;

      float hash(vec2 p) {
        p = fract(p * vec2(127.1, 311.7));
        p += dot(p, p + 17.17);
        return fract(p.x * p.y);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.54;
        mat2 m = mat2(0.82, -0.58, 0.58, 0.82);
        for (int i = 0; i < 4; i++) {
          v += a * noise(p);
          p = m * p * 2.04 + vec2(11.7, -7.2);
          a *= 0.52;
        }
        return v;
      }

      mat2 rot(float a) {
        float s = sin(a);
        float c = cos(a);
        return mat2(c, -s, s, c);
      }

      float resinCore(vec2 p) {
        float t = u_time * 0.035;
        float r = length(p);
        float pull = 0.62 / (0.34 + r);
        p = rot(pull * 0.18 + sin(u_time * 0.028) * 0.12) * p;

        vec2 q = p;
        q.x += sin(q.y * 2.8 - t * 5.0) * 0.18;
        q.y += cos(q.x * 2.15 + t * 4.2) * 0.15;

        vec2 warp = vec2(
          fbm(q * 1.05 + vec2(t * 1.15, -t * 0.8)),
          fbm(q * 1.18 + vec2(-t * 0.85, t * 1.1))
        ) - 0.5;

        q += warp * 1.18;
        float broad = fbm(q * 1.04 + warp * 0.84);
        float silk = fbm(q * 2.2 + broad * 1.7 - t * 0.95);
        float micro = noise(q * 5.6 + silk * 1.8 + vec2(t * 2.2, -t * 1.4));
        float ribbon = abs(sin((q.x * 1.52 - q.y * 0.72 + broad * 2.8 - t * 2.4) * 3.8));

        float v = broad * 0.52 + silk * 0.34 + micro * 0.14;
        v += smoothstep(0.72, 1.0, ribbon) * 0.26;
        v += smoothstep(1.34, 0.0, r) * 0.18;
        return v;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
        vec2 mouse = (u_mouse * 2.0 - 1.0) * vec2(u_resolution.x / u_resolution.y, 1.0);

        float t = u_time * 0.035;
        float radial = length(p);
        float suction = smoothstep(1.42, 0.08, radial);
        vec2 pulled = p * (1.0 + 0.11 * suction * sin(u_time * 0.035));
        pulled = rot(0.12 / (0.26 + radial) + sin(t) * 0.08) * pulled;

        float h = resinCore(pulled);
        vec2 cheapSlope = vec2(
          fbm(pulled * 2.18 + vec2(t * 1.9, h * 0.7)),
          fbm(pulled * 2.32 + vec2(h * 0.6, -t * 1.6))
        ) - 0.5;
        vec3 n = normalize(vec3(-cheapSlope.x * 1.7, -cheapSlope.y * 1.7, 0.34));

        vec3 lightA = normalize(vec3(-0.42, 0.58, 0.92));
        vec3 lightB = normalize(vec3(0.62, -0.28, 0.64));
        vec3 view = vec3(0.0, 0.0, 1.0);
        float diffuse = clamp(dot(n, lightA) * 0.5 + 0.5, 0.0, 1.0);
        float specA = pow(max(dot(reflect(-lightA, n), view), 0.0), 54.0);
        float specB = pow(max(dot(reflect(-lightB, n), view), 0.0), 86.0);
        float fresnel = pow(1.0 - clamp(n.z, 0.0, 1.0), 2.2);

        float ribbon = smoothstep(0.68, 1.0, sin((pulled.x * 2.0 + pulled.y * 1.18 + h * 3.1 - u_time * 0.16) * 4.6) * 0.5 + 0.5);
        float caustic = smoothstep(0.72, 1.0, abs(sin((pulled.x - pulled.y * 0.58 + h * 2.1) * 11.0 + u_time * 0.12)));
        float cursor = 0.10 / (length(p - mouse * 0.48) + 0.08);

        float tearSeed = noise(vec2(floor(uv.y * 24.0), floor(u_time * 0.45)));
        float tear = smoothstep(0.994, 1.0, sin(uv.y * 96.0 + h * 6.0 + u_time * 0.45));
        tear *= step(0.73, tearSeed) * smoothstep(0.22, 0.76, suction);

        vec3 abyss = vec3(0.0, 0.025, 0.035);
        vec3 deep = vec3(0.0, 0.11, 0.15);
        vec3 milk = vec3(0.88, 0.99, 1.0);
        vec3 cyan = vec3(0.0, 0.92, 1.0);
        vec3 venom = vec3(0.34, 1.0, 0.86);
        vec3 white = vec3(1.0);

        vec3 color = mix(abyss, deep, smoothstep(0.18, 0.78, h));
        color = mix(color, milk, smoothstep(0.48, 0.98, h) * 0.54);
        color += cyan * (ribbon * 0.38 + fresnel * 0.82 + caustic * 0.24);
        color += venom * caustic * ribbon * 0.34;
        color += white * (specA * 1.55 + specB * 0.88 + pow(max(h, 0.0), 4.2) * 0.42);
        color += cyan * cursor * 0.18;
        color += vec3(0.02, 0.0, 0.0) * tear * 0.14;
        color *= 0.74 + diffuse * 0.56;

        float centerGlow = smoothstep(1.48, 0.06, radial);
        float alpha = clamp((0.30 + h * 0.98 + ribbon * 0.18 + fresnel * 0.38 + specA * 0.55 + caustic * 0.18) * centerGlow, 0.0, 0.98);
        alpha *= smoothstep(1.55, 0.16, radial);

        gl_FragColor = vec4(color, alpha);
      }
    `

    const compile = (type, source) => {
      const shader = gl.createShader(type)
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader)
        return null
      }
      return shader
    }

    const vertexShader = compile(gl.VERTEX_SHADER, vertex)
    const fragmentShader = compile(gl.FRAGMENT_SHADER, fragment)
    if (!vertexShader || !fragmentShader) return undefined

    const program = gl.createProgram()
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return undefined

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW)

    const position = gl.getAttribLocation(program, 'a_position')
    const resolution = gl.getUniformLocation(program, 'u_resolution')
    const mouse = gl.getUniformLocation(program, 'u_mouse')
    const time = gl.getUniformLocation(program, 'u_time')
    const pointer = { x: 0.5, y: 0.5 }
    let frame = 0
    let didSignalReady = false
    let active = true
    let warmFrames = 0
    let lastDraw = 0
    const start = performance.now()
    const targetFrameMs = 1000 / 24

    const resize = () => {
      const quality = window.innerWidth < 768 ? 0.42 : 0.58
      const dpr = Math.min(window.devicePixelRatio || 1, 1.35) * quality
      const width = Math.floor(canvas.clientWidth * dpr)
      const height = Math.floor(canvas.clientHeight * dpr)
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
        gl.viewport(0, 0, width, height)
      }
    }

    const onPointerMove = e => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = (e.clientX - rect.left) / rect.width
      pointer.y = 1 - (e.clientY - rect.top) / rect.height
    }

    const render = now => {
      frame = 0
      if (!active && warmFrames > 8) return
      if (warmFrames > 8 && now - lastDraw < targetFrameMs) {
        frame = requestAnimationFrame(render)
        return
      }
      lastDraw = now
      warmFrames += 1
      resize()
      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.useProgram(program)
      gl.enableVertexAttribArray(position)
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)
      gl.uniform2f(resolution, canvas.width, canvas.height)
      gl.uniform2f(mouse, pointer.x, pointer.y)
      gl.uniform1f(time, (now - start) / 1000)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
      if (!didSignalReady && now - start > 180) {
        didSignalReady = true
        onReady?.()
      }
      frame = requestAnimationFrame(render)
    }

    canvas.addEventListener('pointermove', onPointerMove)
    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver(([entry]) => {
          active = entry.isIntersecting
          if (active && !frame) frame = requestAnimationFrame(render)
        }, { rootMargin: '900px 0px' })
      : null
    observer?.observe(canvas)
    resize()
    frame = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(frame)
      observer?.disconnect()
      canvas.removeEventListener('pointermove', onPointerMove)
      gl.deleteBuffer(buffer)
      gl.deleteProgram(program)
      gl.deleteShader(vertexShader)
      gl.deleteShader(fragmentShader)
    }
  }, [])

  return <canvas className="about-crystal-webgl" ref={canvasRef} aria-hidden="true" />
}

function AboutSummitWebGL() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const gl = canvas?.getContext('webgl', { alpha: true, antialias: false, powerPreference: 'high-performance' })
    if (!gl) return undefined

    const vertex = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `

    const fragment = `
      precision highp float;

      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_time;

      float hash(vec2 p) {
        p = fract(p * vec2(234.34, 435.31));
        p += dot(p, p + 34.23);
        return fract(p.x * p.y);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        mat2 r = mat2(0.78, -0.63, 0.63, 0.78);
        for (int i = 0; i < 4; i++) {
          v += a * noise(p);
          p = r * p * 2.03 + vec2(9.2, -6.1);
          a *= 0.54;
        }
        return v;
      }

      float pulseLine(float v, float width) {
        return 1.0 - smoothstep(0.0, width, abs(v));
      }

      float mountainHeight(vec2 q, float t) {
        float peak = exp(-pow(q.x * 1.05, 2.0)) * 1.05;
        peak += exp(-pow((q.x + 0.92) * 1.9, 2.0)) * 0.42;
        peak += exp(-pow((q.x - 0.82) * 2.0, 2.0)) * 0.34;
        float erosion = fbm(q * vec2(1.6, 1.05) + vec2(t * 0.12, -t * 0.08));
        float cracks = abs(sin(q.x * 8.0 + q.y * 4.8 + erosion * 2.7));
        return peak * (0.84 + erosion * 0.20) + smoothstep(0.88, 1.0, cracks) * 0.045;
      }

      float route(vec2 uv, float t) {
        vec2 a = vec2(0.21, 0.84);
        vec2 b = vec2(0.38, 0.63);
        vec2 c = vec2(0.52, 0.42);
        vec2 d = vec2(0.73, 0.70);
        float dist = 9.0;
        for (int i = 0; i < 26; i++) {
          float fi = float(i) / 25.0;
          vec2 p0 = mix(a, b, fi);
          vec2 p1 = mix(b, c, fi);
          vec2 p2 = mix(c, d, fi);
          vec2 p = mix(mix(p0, p1, fi), mix(p1, p2, fi), fi);
          dist = min(dist, length(uv - p));
        }
        float dash = smoothstep(0.42, 1.0, sin((uv.x + uv.y) * 38.0 - t * 4.0) * 0.5 + 0.5);
        return pulseLine(dist, 0.008) * (0.34 + dash * 0.72);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        vec2 p = uv * 2.0 - 1.0;
        p.x *= u_resolution.x / u_resolution.y;
        vec2 mouse = u_mouse;
        float t = u_time * 0.24;

        vec3 black = vec3(0.0, 0.006, 0.009);
        vec3 deep = vec3(0.0, 0.08, 0.09);
        vec3 teal = vec3(0.0, 0.62, 0.68);
        vec3 cyan = vec3(0.0, 0.98, 1.0);
        vec3 poison = vec3(0.36, 1.0, 0.88);
        vec3 ice = vec3(0.9, 1.0, 1.0);

        float horizon = smoothstep(0.0, 1.0, uv.y);
        float sky = fbm(vec2(uv.x * 1.4 + t * 0.12, uv.y * 2.4 - t * 0.08));
        vec3 color = mix(black, deep, (1.0 - horizon) * 0.68 + sky * 0.16);

        float body = 0.0;
        float ridges = 0.0;
        float contour = 0.0;
        float summitGlow = 0.0;
        float grid = 0.0;

        for (int i = 0; i < 7; i++) {
          float fi = float(i);
          float depth = fi / 6.0;
          float perspective = 0.64 + depth * 0.72;
          vec2 q = vec2((uv.x - 0.5) * 3.0 / perspective, (uv.y - 0.15 - depth * 0.075) * 2.05);
          q.x += sin(t * 0.7 + fi * 1.7) * 0.025;
          float h = mountainHeight(q + vec2(0.0, depth * 0.7), t + fi * 0.2);
          float ridgeY = 0.94 - h * (0.34 + depth * 0.09) - depth * 0.055;
          float below = smoothstep(ridgeY, ridgeY + 0.035 + depth * 0.012, uv.y);
          float edge = pulseLine(uv.y - ridgeY, 0.0038 + depth * 0.004);
          float haze = smoothstep(0.24, 0.0, abs(uv.y - ridgeY));

          body += below * (0.19 + depth * 0.035);
          ridges += edge * (1.0 - depth * 0.08);
          summitGlow += haze * (0.11 + depth * 0.02);

          float topo = pulseLine(fract((uv.y - ridgeY + h * 0.04) * (18.0 + depth * 13.0)) - 0.5, 0.026);
          contour += topo * below * (0.11 + depth * 0.03);

          float vert = pulseLine(fract((uv.x + fbm(vec2(uv.y * 3.0, fi + t)) * 0.08) * (8.0 + depth * 4.0)) - 0.5, 0.018);
          grid += vert * below * (0.035 + depth * 0.025);
        }

        float routeLight = route(uv, t);
        float beaconA = 1.0 / (distance(uv, vec2(0.21, 0.84)) * 38.0 + 0.08);
        float beaconB = 1.0 / (distance(uv, vec2(0.52, 0.42)) * 34.0 + 0.08);
        float beaconC = 1.0 / (distance(uv, vec2(0.73, 0.70)) * 38.0 + 0.08);
        float beacons = (beaconA + beaconB + beaconC) * (0.55 + sin(t * 4.0) * 0.16);

        float mouseLight = 1.0 / (distance(uv, mouse) * 6.2 + 0.18);
        float scan = pulseLine(fract(uv.y * 72.0 + t * 0.22) - 0.5, 0.015) * 0.05;
        float vignette = smoothstep(1.35, 0.18, length(p * vec2(0.82, 1.04)));

        color += deep * body * 1.6;
        color += teal * (body * 0.72 + summitGlow * 0.24);
        color += cyan * (ridges * 1.12 + contour * 0.48 + grid * 0.55 + routeLight * 0.9);
        color += poison * (routeLight * 0.18);
        color += ice * (ridges * 0.22 + beacons * 0.26 + mouseLight * ridges * 0.42);
        color += cyan * mouseLight * (0.08 + contour * 0.36);
        color += vec3(scan);
        color *= 0.62 + vignette * 0.58;

        float alpha = clamp(body * 1.2 + ridges * 0.9 + summitGlow * 0.52 + routeLight * 0.86 + beacons * 0.45 + 0.16, 0.0, 0.98);
        alpha *= smoothstep(1.16, 0.04, length(p * vec2(0.76, 1.02)));
        gl_FragColor = vec4(color, alpha);
      }
    `

    const compile = (type, source) => {
      const shader = gl.createShader(type)
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader)
        return null
      }
      return shader
    }

    const vertexShader = compile(gl.VERTEX_SHADER, vertex)
    const fragmentShader = compile(gl.FRAGMENT_SHADER, fragment)
    if (!vertexShader || !fragmentShader) return undefined

    const program = gl.createProgram()
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return undefined

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW)

    const position = gl.getAttribLocation(program, 'a_position')
    const resolution = gl.getUniformLocation(program, 'u_resolution')
    const mouse = gl.getUniformLocation(program, 'u_mouse')
    const time = gl.getUniformLocation(program, 'u_time')
    const pointer = { x: 0.5, y: 0.58 }
    let frame = 0
    let active = true
    let lastDraw = 0
    const start = performance.now()
    const targetFrameMs = 1000 / 30

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.45) * (window.innerWidth < 768 ? 0.62 : 0.78)
      const width = Math.floor(canvas.clientWidth * dpr)
      const height = Math.floor(canvas.clientHeight * dpr)
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
        gl.viewport(0, 0, width, height)
      }
    }

    const onPointerMove = e => {
      const rect = canvas.getBoundingClientRect()
      pointer.x += ((e.clientX - rect.left) / rect.width - pointer.x) * 0.42
      pointer.y += ((e.clientY - rect.top) / rect.height - pointer.y) * 0.42
    }

    const render = now => {
      frame = 0
      if (!active) return
      if (now - lastDraw < targetFrameMs) {
        frame = requestAnimationFrame(render)
        return
      }
      lastDraw = now
      resize()
      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.useProgram(program)
      gl.enableVertexAttribArray(position)
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)
      gl.uniform2f(resolution, canvas.width, canvas.height)
      gl.uniform2f(mouse, pointer.x, 1 - pointer.y)
      gl.uniform1f(time, (now - start) / 1000)
      gl.drawArrays(gl.TRIANGLES, 0, 6)

      frame = requestAnimationFrame(render)
    }

    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver(([entry]) => {
          active = entry.isIntersecting
          if (active && !frame) frame = requestAnimationFrame(render)
        }, { rootMargin: '500px 0px' })
      : null

    observer?.observe(canvas)
    canvas.addEventListener('pointermove', onPointerMove)
    resize()
    frame = requestAnimationFrame(render)
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(frame)
      observer?.disconnect()
      canvas.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('resize', resize)
      gl.deleteBuffer(buffer)
      gl.deleteProgram(program)
      gl.deleteShader(vertexShader)
      gl.deleteShader(fragmentShader)
    }
  }, [])

  return <canvas className="about-summit-webgl" ref={canvasRef} aria-hidden="true" />
}

export default function About() {
  const rootRef = useRef(null)
  const [resinReady, setResinReady] = useState(false)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return undefined

    const updatePointer = event => {
      root.style.setProperty('--mx', `${event.clientX}px`)
      root.style.setProperty('--my', `${event.clientY}px`)
    }

    root.classList.add('is-opening')
    root.style.setProperty('--mx', `${window.innerWidth * 0.5}px`)
    root.style.setProperty('--my', `${window.innerHeight * 0.45}px`)
    window.addEventListener('pointermove', updatePointer)

    const openedTimer = window.setTimeout(() => {
      root.classList.add('is-opened')
      gsap.set('.about-hero-kicker, .about-hero-content h1, .about-hero-content p, .about-hero-actions > *', {
        clearProps: 'transform,opacity,filter',
      })
      gsap.set('.about-hero-emblem', { clearProps: 'transform,opacity' })
      gsap.set('.about-light, .about-kinetic-rail, .about-side-pulse', { clearProps: 'opacity' })
    }, 4200)

    return () => {
      window.clearTimeout(openedTimer)
      window.removeEventListener('pointermove', updatePointer)
    }
  }, [])

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      gsap.set('.about-page-open', { display: 'none' })
      return undefined
    }

    const ctx = gsap.context(() => {
      gsap.set('.about-gsap-reveal', { y: 44, opacity: 0, filter: 'blur(14px)' })
      gsap.set('.about-hero-kicker, .about-hero-content h1, .about-hero-content p, .about-hero-actions > *', {
        y: 26,
        opacity: 0,
        filter: 'blur(18px)',
      })
      gsap.set('.about-hero-emblem', { opacity: 0, scale: 0.92 })
      gsap.set('.about-light, .about-kinetic-rail, .about-side-pulse', { opacity: 0 })

      const intro = gsap.timeline({
        defaults: { ease: 'power4.out' },
        onComplete: () => {
          gsap.set('.about-hero-kicker, .about-hero-content h1, .about-hero-content p, .about-hero-actions > *', {
            clearProps: 'transform,opacity,filter',
          })
          gsap.set('.about-page-open', { display: 'none' })
        },
      })
      intro
        .fromTo('.about-open-logo svg',
          { scale: 0.78, opacity: 0, filter: 'blur(20px)' },
          { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 0.72 },
        )
        .fromTo('.about-open-word',
          { y: 12, opacity: 0, filter: 'blur(12px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.58 },
          '-=0.38',
        )
        .fromTo('.about-open-line span',
          { scaleX: 0, transformOrigin: '50% 50%' },
          { scaleX: 1, duration: 0.9, ease: 'power3.inOut' },
          '-=0.3',
        )
        .to('.about-open-logo',
          { scale: 11, opacity: 0, filter: 'blur(18px)', duration: 1.22, ease: 'power3.inOut' },
          '+=0.36',
        )
        .to('.about-page-open',
          { opacity: 0, duration: 0.82, ease: 'power2.out', pointerEvents: 'none' },
          '-=0.5',
        )
        .to('.about-light, .about-kinetic-rail, .about-side-pulse',
          { opacity: 1, duration: 1.15, stagger: 0.08 },
          '-=0.48',
        )
        .to('.about-hero-emblem',
          { opacity: 0.18, scale: 1, duration: 1.35 },
          '-=0.72',
        )
        .fromTo('.about-hero-kicker',
          { y: 18, opacity: 0, filter: 'blur(14px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.78 },
          '-=0.42',
        )
        .fromTo('.about-hero-content h1',
          { y: 38, opacity: 0, filter: 'blur(22px)', scale: 0.965, textShadow: '0 0 92px rgba(255,255,255,0.46)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', scale: 1, textShadow: '0 0 44px rgba(255,255,255,0.18)', duration: 1.16 },
          '-=0.22',
        )
        .fromTo('.about-hero-content p',
          { y: 20, opacity: 0, filter: 'blur(14px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.74 },
          '-=0.36',
        )
        .fromTo('.about-hero-actions > *',
          { y: 16, opacity: 0, filter: 'blur(10px)', scale: 0.97 },
          { y: 0, opacity: 1, filter: 'blur(0px)', scale: 1, stagger: 0.08, duration: 0.68 },
          '-=0.24',
        )

      gsap.to('.about-webgl', {
        yPercent: 12,
        scale: 1.1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.about-hero-experience',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })

      gsap.to('.about-light', {
        scale: i => (i === 1 ? 1.18 : 1.08),
        opacity: i => (i === 2 ? 0.62 : 0.78),
        duration: 4.8,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.55,
      })

      gsap.to('.about-side-pulse', {
        opacity: 0.28,
        x: -10,
        duration: 1.6,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })

      gsap.to('.about-light-a', {
        xPercent: -7,
        yPercent: 10,
        scale: 1.16,
        ease: 'none',
        scrollTrigger: {
          trigger: '.about-hero-experience',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      })

      gsap.to('.about-light-b', {
        xPercent: 8,
        yPercent: -8,
        scale: 0.9,
        ease: 'none',
        scrollTrigger: {
          trigger: '.about-hero-experience',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      })

      gsap.to('.about-light-c', {
        xPercent: 4,
        yPercent: 14,
        opacity: 0.38,
        ease: 'none',
        scrollTrigger: {
          trigger: '.about-hero-experience',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.4,
        },
      })

      gsap.utils.toArray('.about-gsap-reveal').forEach((element, index) => {
        gsap.to(element, {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.9,
          clearProps: 'filter',
          delay: (index % 3) * 0.06,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        })
      })

      gsap.from('.about-stat-card strong', {
        textShadow: '0 0 46px rgba(255,255,255,0.9)',
        scale: 1.08,
        duration: 1,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-stats-grid',
          start: 'top 76%',
        },
      })

      gsap.to('.about-principle-card', {
        y: i => (i % 2 === 0 ? -18 : 18),
        ease: 'none',
        scrollTrigger: {
          trigger: '.about-principles-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.1,
        },
      })

      gsap.fromTo('.about-crystal-webgl',
        { opacity: 0, scale: 1.18, filter: 'blur(28px)' },
        {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          ease: 'none',
          scrollTrigger: {
            trigger: '.about-dark-section',
            start: 'top 82%',
            end: 'top 22%',
            scrub: 2.2,
          },
        },
      )

      gsap.to('.about-liquid-glitch span', {
        xPercent: i => (i % 2 === 0 ? 18 : -15),
        scaleX: i => 1.08 + i * 0.035,
        opacity: i => 0.06 + (i % 3) * 0.035,
        duration: 6.8,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.16,
      })

      gsap.to('.about-wire-mountain .wire-line', {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 2.8,
        ease: 'power2.out',
        stagger: 0.018,
        scrollTrigger: {
          trigger: '.about-final-cta',
          start: 'top 68%',
        },
      })

      gsap.to('.about-pixila-word', {
        y: -18,
        textShadow: '0 0 44px rgba(0,255,255,0.42), 0 0 120px rgba(0,255,255,0.20)',
        duration: 4.8,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })

      gsap.to('.about-final-cta .about-cta-panel', {
        y: -28,
        scale: 1.012,
        ease: 'none',
        scrollTrigger: {
          trigger: '.about-final-cta',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.4,
        },
      })

    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className={`about-experience${resinReady ? ' is-resin-ready' : ''}`} ref={rootRef}>
      <Seo
        title="About"
        path="/about"
        description="SAVATECK is a California software company building intelligent products for modern business, including Ruedio — an on-demand car-care marketplace."
      />
      <div className="about-page-open" aria-hidden="true">
        <div className="about-open-logo">
          <LogoMark size={86} color="#fff" />
        </div>
        <div className="about-open-word">SAVATECK</div>
        <div className="about-open-line"><span /></div>
      </div>
      <section className="about-hero-experience">
        <AboutWebGL />
        <div className="about-noise" aria-hidden="true" />
        <div className="about-light about-light-a" aria-hidden="true" />
        <div className="about-light about-light-b" aria-hidden="true" />
        <div className="about-light about-light-c" aria-hidden="true" />
        <div className="about-cursor-light" aria-hidden="true" />
        <div className="about-kinetic-rail" aria-hidden="true">
          <span>SAVATECK SYSTEMS / AI OPERATIONS / CRM INTELLIGENCE / WORKFLOW CONTROL / </span>
          <span>SAVATECK SYSTEMS / AI OPERATIONS / CRM INTELLIGENCE / WORKFLOW CONTROL / </span>
        </div>
        <div className="about-side-pulse" aria-hidden="true">SYSTEMS</div>
        <div className="about-hero-bottom-fade" aria-hidden="true" />
        <div className="about-hero-emblem" aria-hidden="true">
          <LogoMark size={220} color="#fff" />
          <span className="about-emblem-glitch about-emblem-glitch-a" />
          <span className="about-emblem-glitch about-emblem-glitch-b" />
          <span className="about-emblem-glitch about-emblem-glitch-c" />
        </div>

        <div className="container about-hero-content">
          <div className="about-hero-topbar">
            <div className="about-hero-kicker">
              <Sparkles size={16} />
              About SAVATECK
            </div>
          </div>

          <div className="about-hero-layout">
            <h1 className="about-glitch-title" data-text="Creating intelligent business systems.">
              Creating intelligent business systems.
            </h1>
            <div className="about-hero-copy">
              <p>
                SAVATECK builds connected products, elevates operational clarity, and proposes intelligent software systems that drive business momentum.
              </p>
              <div className="about-hero-actions">
                <Link to="/contact" className="btn about-primary-btn">
                  Build With Us <ArrowRight size={17} />
                </Link>
                <div className="about-core-mark" aria-label="SAVATECK">
                  <LogoMark size={34} color="#fff" />
                  SAVATECK CORE
                </div>
              </div>
            </div>
          </div>

            </div>
      </section>

      <section className="about-dark-section">
        <AboutCrystalWebGL onReady={() => setResinReady(true)} />
        <div className="about-crystal-fade" aria-hidden="true" />
        <div className="about-liquid-glitch" aria-hidden="true">
          {Array.from({ length: 9 }, (_, index) => (
            <span key={index} />
          ))}
        </div>
        <div className="container">
          <div className="about-stats-grid">
            {stats.map(([value, label]) => (
              <div className="about-stat-card about-gsap-reveal" key={value}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="about-manifesto about-gsap-reveal">
            <span className="about-section-label">Operating Philosophy</span>
            <h2>We do not ship isolated pages. We build business instruments.</h2>
            <p>
              SAVATECK turns workflows into intelligent surfaces: readable by people, extensible by systems, and sharp enough to become a competitive edge.
            </p>
          </div>
        </div>
      </section>

      <section className="about-principles-section">
        <div className="container">
          <div className="about-principles-heading about-gsap-reveal">
            <span className="about-section-label">Principles</span>
            <h2>Designed like a control room. Felt like a premium interface.</h2>
          </div>
          <div className="about-principles-grid">
            {principles.map(({ icon: Icon, title, desc }) => (
              <article className="about-principle-card about-gsap-reveal" key={title}>
                <Icon size={24} />
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-final-cta">
        <div className="about-pixila-scene" aria-hidden="true">
          <svg className="about-wire-mountain" viewBox="0 0 1600 720" preserveAspectRatio="none">
            <g className="wire-back">
              <path className="wire-line" d="M0 560 L170 500 L285 520 L430 450 L570 475 L720 420 L880 455 L1030 410 L1190 465 L1355 438 L1600 520" />
              <path className="wire-line" d="M0 620 L220 540 L360 560 L520 505 L700 530 L900 492 L1090 510 L1280 488 L1600 570" />
            </g>
            <g className="wire-main">
              <path className="wire-line wire-ridge" d="M0 610 L130 552 L250 506 L370 430 L470 318 L565 222 L690 196 L805 120 L920 228 L1048 310 L1195 356 L1328 430 L1465 498 L1600 590" />
              <path className="wire-line" d="M130 552 L250 506 L260 610" />
              <path className="wire-line" d="M250 506 L370 430 L405 625" />
              <path className="wire-line" d="M370 430 L470 318 L520 640" />
              <path className="wire-line" d="M470 318 L565 222 L630 640" />
              <path className="wire-line" d="M565 222 L690 196 L720 650" />
              <path className="wire-line" d="M690 196 L805 120 L825 650" />
              <path className="wire-line" d="M805 120 L920 228 L940 640" />
              <path className="wire-line" d="M920 228 L1048 310 L1060 630" />
              <path className="wire-line" d="M1048 310 L1195 356 L1210 625" />
              <path className="wire-line" d="M1195 356 L1328 430 L1350 620" />
              <path className="wire-line" d="M1328 430 L1465 498 L1480 610" />
              <path className="wire-line" d="M250 506 L470 318 L690 196 L920 228 L1195 356 L1465 498" />
              <path className="wire-line" d="M370 430 L565 222 L805 120 L1048 310 L1328 430" />
              <path className="wire-line" d="M470 318 L690 196 L805 120 L920 228 L1048 310" />
              <path className="wire-line" d="M260 610 L405 625 L520 640 L630 640 L720 650 L825 650 L940 640 L1060 630 L1210 625 L1350 620 L1480 610" />
              <path className="wire-line" d="M405 625 L565 222 L940 640" />
              <path className="wire-line" d="M520 640 L690 196 L1060 630" />
              <path className="wire-line" d="M630 640 L805 120 L1210 625" />
              <path className="wire-line" d="M720 650 L920 228 L1350 620" />
              <path className="wire-line wire-hot" d="M565 222 L720 650 L805 120 L940 640" />
            </g>
          </svg>
          <div className="about-pixila-word">SAVATECK</div>
        </div>
        <div className="container">
          <div className="about-cta-panel about-gsap-reveal">
            <Cpu size={28} />
            <div>
              <h2>Ready to turn your operations into an intelligent system?</h2>
              <p>Let’s map the architecture, interface, and motion of your next business platform.</p>
            </div>
            <Link to="/contact" className="btn about-primary-btn">
              Start the Build <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
