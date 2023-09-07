class WorkerScript {
  private _worker: Worker;

  constructor() {
    const workerUrl = new URL(
      "../../public/worker.js",
      import.meta.url
    ).toString();
    this._worker = new Worker(workerUrl);
  }

  postMessage(endpoint: string, clientId: string, message: any) {
    this._worker.postMessage({
      ...message,
      clientId,
      endpoint,
    });
  }
}

const workerScript = new WorkerScript();

export default workerScript;
