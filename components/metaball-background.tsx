"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

interface MetaballBackgroundProps {
  color: string
}

const colorPresets: Record<string, any> = {
  "#9470DE": {
    // Morado
    backgroundColor: new THREE.Color(0xffffff),
    sphereColor: new THREE.Color(0xf5f5f5),
    lightColor: new THREE.Color(0x9470de),
    cursorGlowColor: new THREE.Color(0x9470de),
  },
  "#74B74A": {
    // Verde
    backgroundColor: new THREE.Color(0xffffff),
    sphereColor: new THREE.Color(0xf5f5f5),
    lightColor: new THREE.Color(0x74b74a),
    cursorGlowColor: new THREE.Color(0x74b74a),
  },
  "#005BB1": {
    // Azul
    backgroundColor: new THREE.Color(0xffffff),
    sphereColor: new THREE.Color(0xf5f5f5),
    lightColor: new THREE.Color(0x005bb1),
    cursorGlowColor: new THREE.Color(0x005bb1),
  },
  "#13D4CB": {
    // Cyan
    backgroundColor: new THREE.Color(0xffffff),
    sphereColor: new THREE.Color(0xf5f5f5),
    lightColor: new THREE.Color(0x13d4cb),
    cursorGlowColor: new THREE.Color(0x13d4cb),
  },
}

export function MetaballBackground({ color }: MetaballBackgroundProps) {
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
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    const isLowPowerDevice = isMobile || navigator.hardwareConcurrency <= 4
    const devicePixelRatio = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2)

    // Get color preset
    const preset = colorPresets[color] || colorPresets["#9470DE"]

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
    camera.position.z = 1
    const clock = new THREE.Clock()

    const mousePosition = new THREE.Vector2(0.5, 0.5)
    const targetMousePosition = new THREE.Vector2(0.5, 0.5)
    const cursorSphere3D = new THREE.Vector3(0, 0, 0)

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile && !isLowPowerDevice,
      alpha: true,
      powerPreference: isMobile ? "default" : "high-performance",
    })

    renderer.setPixelRatio(devicePixelRatio)
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    renderer.setSize(viewportWidth, viewportHeight)
    renderer.setClearColor(0xffffff, 1)

    const canvas = renderer.domElement
    canvas.style.cssText = `
      position: absolute !important;
      top: 0 !important;
      left: 0 !important;
      width: 100% !important;
      height: 100% !important;
      z-index: 0 !important;
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
        uCursorRadius: { value: 0.08 },
        uSphereCount: { value: isMobile ? 4 : 6 },
        uFixedTopLeftRadius: { value: 0.8 },
        uFixedBottomRightRadius: { value: 0.9 },
        uSmallTopLeftRadius: { value: 0.3 },
        uSmallBottomRightRadius: { value: 0.35 },
        uMergeDistance: { value: 1.5 },
        uSmoothness: { value: 0.8 },
        uAmbientIntensity: { value: 0.12 },
        uDiffuseIntensity: { value: 1.2 },
        uSpecularIntensity: { value: 2.5 },
        uSpecularPower: { value: 3 },
        uFresnelPower: { value: 0.8 },
        uBackgroundColor: { value: preset.backgroundColor },
        uSphereColor: { value: preset.sphereColor },
        uLightColor: { value: preset.lightColor },
        uLightPosition: { value: new THREE.Vector3(0.9, 0.9, 1.2) },
        uContrast: { value: 1.6 },
        uFogDensity: { value: 0.06 },
        uAnimationSpeed: { value: 0.6 },
        uMovementScale: { value: 1.2 },
        uCursorGlowIntensity: { value: 1.2 },
        uCursorGlowRadius: { value: 2.2 },
        uCursorGlowColor: { value: preset.cursorGlowColor },
        uIsMobile: { value: isMobile ? 1.0 : 0.0 },
        uIsLowPower: { value: isLowPowerDevice ? 1.0 : 0.0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        ${isMobile || isSafari || isLowPowerDevice ? "precision mediump float;" : "precision highp float;"}
        
        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec2 uActualResolution;
        uniform float uPixelRatio;
        uniform vec2 uMousePosition;
        uniform vec3 uCursorSphere;
        uniform float uCursorRadius;
        uniform int uSphereCount;
        uniform float uFixedTopLeftRadius;
        uniform float uFixedBottomRightRadius;
        uniform float uSmallTopLeftRadius;
        uniform float uSmallBottomRightRadius;
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
        uniform float uIsMobile;
        uniform float uIsLowPower;
        
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
          
          vec3 topLeftPos = screenToWorld(vec2(0.08, 0.92));
          float topLeft = sdSphere(pos - topLeftPos, uFixedTopLeftRadius);
          
          vec3 smallTopLeftPos = screenToWorld(vec2(0.25, 0.72));
          float smallTopLeft = sdSphere(pos - smallTopLeftPos, uSmallTopLeftRadius);
          
          vec3 bottomRightPos = screenToWorld(vec2(0.92, 0.08));
          float bottomRight = sdSphere(pos - bottomRightPos, uFixedBottomRightRadius);
          
          vec3 smallBottomRightPos = screenToWorld(vec2(0.72, 0.25));
          float smallBottomRight = sdSphere(pos - smallBottomRightPos, uSmallBottomRightRadius);
          
          float t = uTime * uAnimationSpeed;
          
          int maxIter = uIsMobile > 0.5 ? 4 : 6;
          for (int i = 0; i < 6; i++) {
            if (i >= uSphereCount || i >= maxIter) break;
            
            float fi = float(i);
            float speed = 0.4 + fi * 0.12;
            float radius = 0.12 + mod(fi, 3.0) * 0.06;
            float orbitRadius = (0.3 + mod(fi, 3.0) * 0.15) * uMovementScale;
            float phaseOffset = fi * PI * 0.35;
            
            vec3 offset = vec3(
              sin(t * speed + phaseOffset) * orbitRadius * 0.8,
              cos(t * speed * 0.85 + phaseOffset * 1.3) * orbitRadius * 0.6,
              sin(t * speed * 0.5 + phaseOffset) * 0.3
            );
            
            vec3 toCursor = uCursorSphere - offset;
            float cursorDist = length(toCursor);
            if (cursorDist < uMergeDistance && cursorDist > 0.0) {
              float attraction = (1.0 - cursorDist / uMergeDistance) * 0.3;
              offset += normalize(toCursor) * attraction;
            }
            
            float movingSphere = sdSphere(pos - offset, radius);
            
            float blend = 0.05;
            if (cursorDist < uMergeDistance) {
              float influence = 1.0 - (cursorDist / uMergeDistance);
              blend = mix(0.05, uSmoothness, influence * influence * influence);
            }
            
            result = smin(result, movingSphere, blend);
          }
          
          float cursorBall = sdSphere(pos - uCursorSphere, uCursorRadius);
          
          float topLeftGroup = smin(topLeft, smallTopLeft, 0.4);
          float bottomRightGroup = smin(bottomRight, smallBottomRight, 0.4);
          
          result = smin(result, topLeftGroup, 0.3);
          result = smin(result, bottomRightGroup, 0.3);
          result = smin(result, cursorBall, uSmoothness);
          
          return result;
        }
        
        vec3 calcNormal(vec3 p) {
          float eps = uIsLowPower > 0.5 ? 0.002 : 0.001;
          return normalize(vec3(
            sceneSDF(p + vec3(eps, 0, 0)) - sceneSDF(p - vec3(eps, 0, 0)),
            sceneSDF(p + vec3(0, eps, 0)) - sceneSDF(p - vec3(0, eps, 0)),
            sceneSDF(p + vec3(0, 0, eps)) - sceneSDF(p - vec3(0, 0, eps))
          ));
        }
        
        float rayMarch(vec3 ro, vec3 rd) {
          float t = 0.0;
          int maxSteps = uIsMobile > 0.5 ? 16 : 48;
          
          for (int i = 0; i < 48; i++) {
            if (i >= maxSteps) break;
            
            vec3 p = ro + rd * t;
            float d = sceneSDF(p);
            
            if (d < EPSILON) return t;
            if (t > 5.0) break;
            
            t += d * (uIsLowPower > 0.5 ? 1.2 : 0.9);
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
          vec3 fresnelRim = uLightColor * fresnel * 0.4;
          vec3 color = (baseColor + ambient + diffuse + specular + fresnelRim);
          color = pow(color, vec3(uContrast * 0.9));
          color = color / (color + vec3(0.8));
          return color;
        }
        
        float calculateCursorGlow(vec3 worldPos) {
          float dist = length(worldPos.xy - uCursorSphere.xy);
          float glow = 1.0 - smoothstep(0.0, uCursorGlowRadius, dist);
          glow = pow(glow, 2.0);
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
            color = mix(color, uBackgroundColor.rgb, fogAmount * 0.3);
            color += glowContribution * 0.3;
            gl_FragColor = vec4(color, 1.0);
          } else {
            if (cursorGlow > 0.01) {
              gl_FragColor = vec4(glowContribution, cursorGlow * 0.8);
            } else {
              gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
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
      const aspect = window.innerWidth / window.innerHeight
      return new THREE.Vector3(uv_x * aspect * 2.0, uv_y * 2.0, 0.0)
    }

    const handleMouseMove = (event: MouseEvent | Touch) => {
      const clientX = "clientX" in event ? event.clientX : event.clientX
      const clientY = "clientY" in event ? event.clientY : event.clientY

      targetMousePosition.x = clientX / window.innerWidth
      targetMousePosition.y = 1.0 - clientY / window.innerHeight

      const worldPos = screenToWorldJS(targetMousePosition.x, targetMousePosition.y)
      cursorSphere3D.copy(worldPos)

      // Calcular distancia a esferas fijas para radio dinámico
      const fixedPositions = [
        screenToWorldJS(0.08, 0.92),
        screenToWorldJS(0.25, 0.72),
        screenToWorldJS(0.92, 0.08),
        screenToWorldJS(0.72, 0.25),
      ]

      let closestDistance = 1000.0
      fixedPositions.forEach((pos) => {
        const dist = cursorSphere3D.distanceTo(pos)
        closestDistance = Math.min(closestDistance, dist)
      })

      const proximityFactor = Math.max(0, 1.0 - closestDistance / 1.5)
      const smoothFactor = proximityFactor * proximityFactor * (3.0 - 2.0 * proximityFactor)
      const dynamicRadius = 0.08 + (0.15 - 0.08) * smoothFactor

      material.uniforms.uCursorSphere.value.copy(cursorSphere3D)
      material.uniforms.uCursorRadius.value = dynamicRadius
    }

    const onMouseMove = (event: MouseEvent) => handleMouseMove(event)
    const onTouchMove = (event: TouchEvent) => {
      event.preventDefault()
      if (event.touches.length > 0) handleMouseMove(event.touches[0])
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true })
    window.addEventListener("touchmove", onTouchMove, { passive: false })

    // Resize handler
    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      const currentPixelRatio = Math.min(devicePixelRatio, isMobile ? 1.5 : 2)

      renderer.setSize(width, height)
      renderer.setPixelRatio(currentPixelRatio)
      material.uniforms.uResolution.value.set(width, height)
      material.uniforms.uActualResolution.value.set(width * currentPixelRatio, height * currentPixelRatio)
      material.uniforms.uPixelRatio.value = currentPixelRatio
    }

    window.addEventListener("resize", handleResize, { passive: true })

    const animate = () => {
      mousePosition.x += (targetMousePosition.x - mousePosition.x) * 0.1
      mousePosition.y += (targetMousePosition.y - mousePosition.y) * 0.1

      material.uniforms.uTime.value = clock.getElapsedTime()
      material.uniforms.uMousePosition.value = mousePosition

      renderer.render(scene, camera)
      sceneRef.current.animationId = requestAnimationFrame(animate)
    }

    animate()

    // Inicializar posición del cursor en el centro
    handleMouseMove({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 } as MouseEvent)

    // Store refs
    sceneRef.current = { scene, camera, renderer, material, clock, mousePosition, targetMousePosition, cursorSphere3D }

    // Cleanup
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

  return <div ref={containerRef} className="absolute inset-0" />
}
