<template>
  <div>
    <canvas
      id="drawing-canvas"
      :width="canvasWidth"
      :height="canvasHeight"
      @mousedown="startDrawing"
      @mousemove="draw"
      @mouseup="stopDrawing"
      @mouseleave="stopDrawing"
    ></canvas>
  </div>
</template>
  
  <script>
export default {
  name: "DrawPad",
  data() {
    return {
      isDrawing: false,
      canvasWidth: 800,
      canvasHeight: 600,
      context: null,
    };
  },
  mounted() {
    const canvas = document.getElementById("drawing-canvas");
    this.context = canvas.getContext("2d");
  },
  methods: {
    startDrawing(event) {
      this.isDrawing = true;
      this.context.beginPath();
      this.context.moveTo(
        this.getMousePosition(event).x,
        this.getMousePosition(event).y
      );
    },
    draw(event) {
      if (!this.isDrawing) return;
      this.context.lineTo(
        this.getMousePosition(event).x,
        this.getMousePosition(event).y
      );
      this.context.stroke();
    },
    stopDrawing() {
      if (this.isDrawing) {
        this.isDrawing = false;
        this.context.closePath();
      }
    },
    getMousePosition(event) {
      const rect = event.target.getBoundingClientRect();
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    },
  },
};
</script>
  
  <style scoped>
canvas {
  border: 1px solid #000;
  cursor: crosshair;
}
</style>
<template>
  <div>
    <canvas
      id="drawing-canvas"
      :width="canvasWidth"
      :height="canvasHeight"
      @mousedown="startDrawing"
      @mousemove="draw"
      @mouseup="stopDrawing"
      @mouseleave="stopDrawing"
    ></canvas>
  </div>
</template>

<script>
export default {
  name: "DrawPad",
  data() {
    return {
      isDrawing: false,
      canvasWidth: 800,
      canvasHeight: 600,
      context: null,
    };
  },
  mounted() {
    const canvas = document.getElementById("drawing-canvas");
    this.context = canvas.getContext("2d");
  },
  methods: {
    startDrawing(event) {
      this.isDrawing = true;
      this.context.beginPath();
      this.context.moveTo(
        this.getMousePosition(event).x,
        this.getMousePosition(event).y
      );
    },
    draw(event) {
      if (!this.isDrawing) return;
      this.context.lineTo(
        this.getMousePosition(event).x,
        this.getMousePosition(event).y
      );
      this.context.stroke();
    },
    stopDrawing() {
      if (this.isDrawing) {
        this.isDrawing = false;
        this.context.closePath();
      }
    },
    getMousePosition(event) {
      const rect = event.target.getBoundingClientRect();
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    },
  },
};
</script>

<style scoped>
canvas {
  border: 1px solid #000;
  cursor: crosshair;
}
</style>
  