(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/webpack_loaders/[turbopack-node]_transforms_webpack-loaders_ts_59baa9._.js", {

"[turbopack-node]/transforms/webpack-loaders.ts (ecmascript, webpack_loaders)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>transform
});
var __TURBOPACK__external__path__ = __turbopack_external_require__("path", true);
var __TURBOPACK__imported__module__$5b$turbopack$2d$node$5d2f$compiled$2f$stacktrace$2d$parser$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[turbopack-node]/compiled/stacktrace-parser/index.js (ecmascript, webpack_loaders)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
let runLoaders;
try {
    ({ runLoaders } = __turbopack_external_require__("next/dist/compiled/loader-runner"));
} catch  {
    ({ runLoaders } = __turbopack_external_require__("loader-runner"));
}
const contextDir = process.cwd();
const toPath = (file)=>{
    const relPath = __TURBOPACK__external__path__["relative"](contextDir, file);
    if (__TURBOPACK__external__path__["isAbsolute"](relPath)) {
        throw new Error(`Cannot depend on path (${file}) outside of root directory (${contextDir})`);
    }
    return __TURBOPACK__external__path__["sep"] !== "/" ? relPath.replaceAll(__TURBOPACK__external__path__["sep"], "/") : relPath;
};
const LogType = Object.freeze({
    error: "error",
    warn: "warn",
    info: "info",
    log: "log",
    debug: "debug",
    trace: "trace",
    group: "group",
    groupCollapsed: "groupCollapsed",
    groupEnd: "groupEnd",
    profile: "profile",
    profileEnd: "profileEnd",
    time: "time",
    clear: "clear",
    status: "status"
});
const loaderFlag = "LOADER_EXECUTION";
const cutOffByFlag = (stack, flag)=>{
    const errorStack = stack.split("\n");
    for(let i = 0; i < errorStack.length; i++){
        if (errorStack[i].includes(flag)) {
            errorStack.length = i;
        }
    }
    return errorStack.join("\n");
};
const cutOffLoaderExecution = (stack)=>cutOffByFlag(stack, loaderFlag);
class DummySpan {
    traceChild() {
        return new DummySpan();
    }
    traceFn(fn) {
        return fn(this);
    }
    async traceAsyncFn(fn) {
        return await fn(this);
    }
}
const transform = (ipc, content, name, loaders)=>{
    return new Promise((resolve, reject)=>{
        const resource = __TURBOPACK__external__path__["resolve"](contextDir, name);
        const resourceDir = __TURBOPACK__external__path__["dirname"](resource);
        const loadersWithOptions = loaders.map((loader)=>typeof loader === "string" ? {
                loader,
                options: {}
            } : loader);
        runLoaders({
            resource,
            context: {
                currentTraceSpan: new DummySpan(),
                rootContext: contextDir,
                getOptions () {
                    const entry = this.loaders[this.loaderIndex];
                    return entry.options && typeof entry.options === "object" ? entry.options : {};
                },
                getResolve: ()=>({}),
                emitWarning: makeErrorEmitter("warning", ipc),
                emitError: makeErrorEmitter("error", ipc),
                getLogger (name) {
                    return (type, args)=>{
                        let trace;
                        switch(type){
                            case LogType.warn:
                            case LogType.error:
                            case LogType.trace:
                                trace = cutOffLoaderExecution(new Error("Trace").stack).split("\n").slice(3);
                                break;
                        }
                        const logEntry = {
                            time: Date.now(),
                            type,
                            args,
                            trace
                        };
                        this.hooks.log.call(name, logEntry);
                    };
                }
            },
            loaders: loadersWithOptions.map((loader)=>({
                    loader: __turbopack_external_require__.resolve(loader.loader, {
                        paths: [
                            resourceDir
                        ]
                    }),
                    options: loader.options
                })),
            readResource: (_filename, callback)=>{
                callback(null, Buffer.from(content, "utf-8"));
            }
        }, (err, result)=>{
            if (err) return reject(err);
            for (const dep of result.contextDependencies){
                ipc.send({
                    type: "dirDependency",
                    path: toPath(dep),
                    glob: "**"
                });
            }
            for (const dep of result.fileDependencies){
                ipc.send({
                    type: "fileDependency",
                    path: toPath(dep)
                });
            }
            if (!result.result) return reject(new Error("No result from loaders"));
            const [source, map] = result.result;
            resolve({
                source,
                map
            });
        });
    });
};
;
function makeErrorEmitter(severity, ipc) {
    return function(error) {
        ipc.send({
            type: "emittedError",
            severity: severity,
            error: error instanceof Error ? {
                name: error.name,
                message: error.message,
                stack: __TURBOPACK__imported__module__$5b$turbopack$2d$node$5d2f$compiled$2f$stacktrace$2d$parser$2f$index$2e$js__$28$ecmascript$29$__["parse"](error.stack)
            } : {
                name: "Error",
                message: error,
                stack: []
            }
        });
    };
}

})()),
}]);

//# sourceMappingURL=[turbopack-node]_transforms_webpack-loaders_ts_59baa9._.js.map