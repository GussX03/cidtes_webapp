"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

interface MetaballBackgroundSubtleProps {
  color: string
}

const colorPresets: Record<string, any> = {
  "#9470DE": {
    backgroundColor: new THREE.Color(0xffffff),
    sphereColor: new THREE.Color(0xf9f9fc),
    lightColor: new THREE.Color(0x9470de),
    cursorGlowColor: new THREE.Color(0x9470de),
  },
  "#74B74A": {
    backgroundColor: new THREE.Color(0xffffff),
    sphereColor: new THREE.Color(0xf9fcf9),
    lightColor: new THREE.Color(0x74b74a),
    cursorGlowColor: new THREE.Color(0x74b74a),
  },
  "#005BB1": {
    backgroundColor: new THREE.Color(0xffffff),
    sphereColor: new THREE.Color(0xf9fbfc),
    lightColor: new THREE.Color(0x005bb1),
    cursorGlowColor: new THREE.Color(0x005bb1),
  },
  "#13D4CB": {
    backgroundColor: new THREE.Color(0xffffff),
    sphereColor: new THREE.Color(0xf9fcfc),
    lightColor: new THREE.Color(0x13d4cb),
    cursorGlowColor: new THREE.Color(0x13d4cb),
  },
}

export function MetaballBackgroundSubtle({ color }: MetaballBackgroundSubtleProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    scene?: THREE.Scene
    camera?: THREE.OrthographicCamera
    renderer?: THREE.WebGLRenderer
    material?: THREE.ShaderMaterial
    clock?: THREE.Clock
    animationId?: number
    mousePosition?: THREE.Vector2
    targetMousePosition?: THREE.Vector2
    cursorSphere3D?: THREE.Vector3
  }>({})

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    const devicePixelRatio = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2)

    const preset = colorPresets[color] || colorPresets["#9470DE"]

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
    camera.position.z = 1
    const clock = new THREE.Clock()

    const mousePosition = new THREE.Vector2(0.5, 0.5)
    const targetMousePosition = new THREE.Vector2(0.5, 0.5)
    const cursorSphere3D = new THREE.Vector3(0, 0, 0)

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: "default",
    })

    renderer.setPixelRatio(devicePixelRatio)
    const viewportWidth = container.clientWidth
    const viewportHeight = container.clientHeight
    renderer.setSize(viewportWidth, viewportHeight)
    renderer.setClearColor(0xffffff, 0)

    const canvas = renderer.domElement
    canvas.style.cssText = `
      position: absolute !important;
      top: 0 !important;
      left: 0 !important;
      width: 100% !important;
      height: 100% !important;
      z-index: 0 !important;
      opacity: 0.35;
    `
    container.appendChild(canvas)

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(viewportWidth, viewportHeight) },
        uActualResolution: {
          value: new THREE.Vector2(viewportWidth * devicePixelRatio, viewportHeight * devicePixelRatio),
        },
        uPixelRatio: { value: devicePixelRatio },
        uMousePosition: { value: new THREE.Vector2(0.5, 0.5) },
        uCursorSphere: { value: new THREE.Vector3(0, 0, 0) },
        uCursorRadius: { value: 0.06 },
        uSphereCount: { value: 3 },
        uMergeDistance: { value: 1.2 },
        uSmoothness: { value: 0.5 },
        uAmbientIntensity: { value: 0.08 },
        uDiffuseIntensity: { value: 0.8 },
        uSpecularIntensity: { value: 1.5 },
        uSpecularPower: { value: 2 },
        uFresnelPower: { value: 0.5 },
        uBackgroundColor: { value: preset.backgroundColor },
        uSphereColor: { value: preset.sphereColor },
        uLightColor: { value: preset.lightColor },
        uLightPosition: { value: new THREE.Vector3(0.7, 0.7, 1.0) },
        uContrast: { value: 1.2 },
        uFogDensity: { value: 0.03 },
        uAnimationSpeed: { value: 0.3 },
        uMovementScale: { value: 0.8 },
        uCursorGlowIntensity: { value: 0.6 },
        uCursorGlowRadius: { value: 1.5 },
        uCursorGlowColor: { value: preset.cursorGlowColor },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision mediump float;
        
        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec2 uActualResolution;
        uniform float uPixelRatio;
        uniform vec2 uMousePosition;
        uniform vec3 uCursorSphere;
        uniform float uCursorRadius;
        uniform int uSphereCount;
        uniform float uMergeDistance;
        uniform float uSmoothness;
        uniform float uAmbientIntensity;
        uniform float uDiffuseIntensity;
        uniform float uSpecularIntensity;
        uniform float uSpecularPower;
        uniform float uFresnelPower;
        uniform vec3 uBackgroundColor;
        uniform vec3 uSphereColor;
        uniform vec3 uLightColor;
        uniform vec3 uLightPosition;
        uniform float uContrast;
        uniform float uFogDensity;
        uniform float uAnimationSpeed;
        uniform float uMovementScale;
        uniform float uCursorGlowIntensity;
        uniform float uCursorGlowRadius;
        uniform vec3 uCursorGlowColor;
        
        varying vec2 vUv;
        
        const float PI = 3.14159265359;
        const float EPSILON = 0.001;
        const float MAX_DIST = 100.0;
        
        float smin(float a, float b, float k) {
          float h = max(k - abs(a - b), 0.0) / k;
          return min(a, b) - h * h * k * 0.25;
        }
        
        float sdSphere(vec3 p, float r) {
          return length(p) - r;
        }
        
        vec3 screenToWorld(vec2 normalizedPos) {
          vec2 uv = normalizedPos * 2.0 - 1.0;
          uv.x *= uResolution.x / uResolution.y;
          return vec3(uv * 2.0, 0.0);
        }
        
        float sceneSDF(vec3 pos) {
          float result = MAX_DIST;
          float t = uTime * uAnimationSpeed;
          
          for (int i = 0; i < 3; i++) {
            float fi = float(i);
            float speed = 0.3 + fi * 0.1;
            float radius = 0.15 + mod(fi, 2.0) * 0.05;
            float orbitRadius = (0.4 + mod(fi, 2.0) * 0.1) * uMovementScale;
            float phaseOffset = fi * PI * 0.4;
            
            vec3 offset = vec3(
              sin(t * speed + phaseOffset) * orbitRadius * 0.9,
              cos(t * speed * 0.9 + phaseOffset * 1.2) * orbitRadius * 0.7,
              sin(t * speed * 0.4 + phaseOffset) * 0.2
            );
            
            vec3 toCursor = uCursorSphere - offset;
            float cursorDist = length(toCursor);
            if (cursorDist < uMergeDistance && cursorDist > 0.0) {
              float attraction = (1.0 - cursorDist / uMergeDistance) * 0.2;
              offset += normalize(toCursor) * attraction;
            }
            
            float movingSphere = sdSphere(pos - offset, radius);
            
            float blend = 0.05;
            if (cursorDist < uMergeDistance) {
              float influence = 1.0 - (cursorDist / uMergeDistance);
              blend = mix(0.05, uSmoothness, influence * influence);
            }
            
            result = smin(result, movingSphere, blend);
          }
          
          float cursorBall = sdSphere(pos - uCursorSphere, uCursorRadius);
          result = smin(result, cursorBall, uSmoothness);
          
          return result;
        }
        
        vec3 calcNormal(vec3 p) {
          float eps = 0.002;
          return normalize(vec3(
            sceneSDF(p + vec3(eps, 0, 0)) - sceneSDF(p - vec3(eps, 0, 0)),
            sceneSDF(p + vec3(0, eps, 0)) - sceneSDF(p - vec3(0, eps, 0)),
            sceneSDF(p + vec3(0, 0, eps)) - sceneSDF(p - vec3(0, 0, eps))
          ));
        }
        
        float rayMarch(vec3 ro, vec3 rd) {
          float t = 0.0;
          
          for (int i = 0; i < 24; i++) {
            vec3 p = ro + rd * t;
            float d = sceneSDF(p);
            
            if (d < EPSILON) return t;
            if (t > 5.0) break;
            
            t += d * 1.0;
          }
          
          return -1.0;
        }
        
        vec3 lighting(vec3 p, vec3 rd, float t) {
          if (t < 0.0) return vec3(0.0);
          
          vec3 normal = calcNormal(p);
          vec3 viewDir = -rd;
          vec3 baseColor = uSphereColor;
          vec3 ambient = uLightColor * uAmbientIntensity;
          vec3 lightDir = normalize(uLightPosition);
          float diff = max(dot(normal, lightDir), 0.0);
          vec3 diffuse = uLightColor * diff * uDiffuseIntensity;
          vec3 reflectDir = reflect(-lightDir, normal);
          float spec = pow(max(dot(viewDir, reflectDir), 0.0), uSpecularPower);
          float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), uFresnelPower);
          vec3 specular = uLightColor * spec * uSpecularIntensity * fresnel;
          vec3 color = (baseColor + ambient + diffuse + specular);
          color = pow(color, vec3(uContrast));
          return color;
        }
        
        float calculateCursorGlow(vec3 worldPos) {
          float dist = length(worldPos.xy - uCursorSphere.xy);
          float glow = 1.0 - smoothstep(0.0, uCursorGlowRadius, dist);
          glow = pow(glow, 2.5);
          return glow * uCursorGlowIntensity;
        }
        
        void main() {
          vec2 uv = (gl_FragCoord.xy * 2.0 - uActualResolution.xy) / uActualResolution.xy;
          uv.x *= uResolution.x / uResolution.y;
          
          vec3 ro = vec3(uv * 2.0, -1.0);
          vec3 rd = vec3(0.0, 0.0, 1.0);
          float t = rayMarch(ro, rd);
          vec3 p = ro + rd * t;
          vec3 color = lighting(p, rd, t);
          float cursorGlow = calculateCursorGlow(ro);
          vec3 glowContribution = uCursorGlowColor * cursorGlow;
          
          if (t > 0.0) {
            float fogAmount = 1.0 - exp(-t * uFogDensity);
            color = mix(color, uBackgroundColor.rgb, fogAmount * 0.5);
            color += glowContribution * 0.2;
            gl_FragColor = vec4(color, 0.7);
          } else {
            if (cursorGlow > 0.01) {
              gl_FragColor = vec4(glowContribution, cursorGlow * 0.4);
            } else {
              discard;
            }
          }
        }
      `,
      transparent: true,
    })

    const geometry = new THREE.PlaneGeometry(2, 2)
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const screenToWorldJS = (normalizedX: number, normalizedY: number) => {
      const uv_x = normalizedX * 2.0 - 1.0
      const uv_y = normalizedY * 2.0 - 1.0
      const aspect = container.clientWidth / container.clientHeight
      return new THREE.Vector3(uv_x * aspect * 2.0, uv_y * 2.0, 0.0)
    }

    const handleMouseMove = (event: MouseEvent | Touch) => {
      const rect = container.getBoundingClientRect()
      const clientX = "clientX" in event ? event.clientX : event.clientX
      const clientY = "clientY" in event ? event.clientY : event.clientY

      targetMousePosition.x = (clientX - rect.left) / rect.width
      targetMousePosition.y = 1.0 - (clientY - rect.top) / rect.height

      const worldPos = screenToWorldJS(targetMousePosition.x, targetMousePosition.y)
      cursorSphere3D.copy(worldPos)

      material.uniforms.uCursorSphere.value.copy(cursorSphere3D)
    }

    const onMouseMove = (event: MouseEvent) => handleMouseMove(event)
    const onTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) handleMouseMove(event.touches[0])
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true })
    window.addEventListener("touchmove", onTouchMove, { passive: true })

    const handleResize = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      const currentPixelRatio = Math.min(devicePixelRatio, isMobile ? 1.5 : 2)

      renderer.setSize(width, height)
      renderer.setPixelRatio(currentPixelRatio)
      material.uniforms.uResolution.value.set(width, height)
      material.uniforms.uActualResolution.value.set(width * currentPixelRatio, height * currentPixelRatio)
      material.uniforms.uPixelRatio.value = currentPixelRatio
    }

    window.addEventListener("resize", handleResize, { passive: true })

    const animate = () => {
      mousePosition.x += (targetMousePosition.x - mousePosition.x) * 0.08
      mousePosition.y += (targetMousePosition.y - mousePosition.y) * 0.08

      material.uniforms.uTime.value = clock.getElapsedTime()
      material.uniforms.uMousePosition.value = mousePosition

      renderer.render(scene, camera)
      sceneRef.current.animationId = requestAnimationFrame(animate)
    }

    animate()

    sceneRef.current = { scene, camera, renderer, material, clock, mousePosition, targetMousePosition, cursorSphere3D }

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("touchmove", onTouchMove)
      window.removeEventListener("resize", handleResize)
      if (sceneRef.current.animationId) {
        cancelAnimationFrame(sceneRef.current.animationId)
      }
      if (container.contains(canvas)) {
        container.removeChild(canvas)
      }
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  useEffect(() => {
    if (sceneRef.current.material) {
      const preset = colorPresets[color] || colorPresets["#9470DE"]
      sceneRef.current.material.uniforms.uBackgroundColor.value = preset.backgroundColor
      sceneRef.current.material.uniforms.uSphereColor.value = preset.sphereColor
      sceneRef.current.material.uniforms.uLightColor.value = preset.lightColor
      sceneRef.current.material.uniforms.uCursorGlowColor.value = preset.cursorGlowColor
    }
  }, [color])

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none" />
}
