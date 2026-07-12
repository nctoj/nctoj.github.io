var e=class{pyodide=null;isLoading=!1;async init(){if(!(this.pyodide||this.isLoading)){this.isLoading=!0;try{if(!window.loadPyodide){let e=document.createElement(`script`);e.src=`https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js`,document.head.appendChild(e),await new Promise(t=>e.onload=t)}this.pyodide=await window.loadPyodide({indexURL:`https://cdn.jsdelivr.net/pyodide/v0.25.0/full/`})}finally{this.isLoading=!1}}}async run(e,t){this.pyodide||await this.init();try{this.pyodide.globals.set(`js_input`,t),this.pyodide.runPython(`
import sys
import io
sys.stdin = io.StringIO(js_input)
sys.stdout = io.StringIO()
            `);let n=performance.now();await this.pyodide.runPythonAsync(e);let r=performance.now();return{stdout:this.pyodide.runPython(`sys.stdout.getvalue()`),stderr:``,runtime:Math.round(r-n),status:`AC`,memory:0}}catch(e){return{stdout:``,stderr:e.message,status:`RE`,runtime:0,memory:0}}}};export{e as t};